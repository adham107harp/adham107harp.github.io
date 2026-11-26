// The world: Saqqara at night, a step pyramid where every step is a layer of Adham's stack.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const PAL = {
  night: 0x0a1233, lapis: 0x1d3fbf, faience: 0x2fd3c6, gold: 0xe9b44c,
  sand: 0xd9b382, stone: 0xc89a63, terracotta: 0xb5532f, ink: 0x0b0f22,
};

// ---- step pyramid geometry constants (shared with the guide's path) ----
export const S = [28, 23.5, 19, 14.5, 10, 5.5]; // step widths
export const H = 2.6;                             // step height
export const FLIGHT = 2.25;                       // stair depth on each ledge
export const levelY = (L) => (L === 0 ? 0 : L * H);

let toonRamp;
export function toonGradient() {
  if (toonRamp) return toonRamp;
  const d = new Uint8Array([70, 70, 70, 255, 140, 140, 140, 255, 205, 205, 205, 255, 255, 255, 255, 255]);
  toonRamp = new THREE.DataTexture(d, 4, 1, THREE.RGBAFormat);
  toonRamp.minFilter = toonRamp.magFilter = THREE.NearestFilter;
  toonRamp.needsUpdate = true;
  return toonRamp;
}
export const toon = (color, extra = {}) => new THREE.MeshToonMaterial({ color, gradientMap: toonGradient(), ...extra });
export const glow = (color, k = 2.6) => new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), toneMapped: false });

function rand(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// ---------- procedural textures ----------
function stoneCanvas(seed, w = 512, h = 256, rows = 4) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); const r = rand(seed);
  g.fillStyle = '#8f6a43'; g.fillRect(0, 0, w, h);
  const rh = h / rows;
  for (let y = 0; y < rows; y++) {
    let x = -r() * 80;
    while (x < w) {
      const bw = 70 + r() * 90; const l = 44 + r() * 12;
      g.fillStyle = `hsl(${30 + r() * 8},${38 + r() * 12}%,${l}%)`;
      g.fillRect(x + 2, y * rh + 2, bw - 4, rh - 4);
      for (let k = 0; k < 40; k++) { // pits and grain
        g.fillStyle = `rgba(60,35,15,${r() * 0.12})`;
        g.fillRect(x + r() * bw, y * rh + r() * rh, 1 + r() * 3, 1 + r() * 3);
      }
      g.fillStyle = 'rgba(255,240,210,.18)'; g.fillRect(x + 2, y * rh + 2, bw - 4, 3);
      x += bw;
    }
  }
  return c;
}
function circuitCanvas(seed, w = 512, h = 256) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); const r = rand(seed);
  g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#fff'; g.fillStyle = '#fff'; g.lineWidth = 2.2; g.lineCap = 'round';
  for (let i = 0; i < 7; i++) { // manhattan traces
    let x = r() * w, y = h * (0.2 + r() * 0.6);
    g.beginPath(); g.moveTo(x, y);
    for (let s = 0; s < 5; s++) {
      if (s % 2) y = Math.max(14, Math.min(h - 14, y + (r() - 0.5) * 110)); else x += (r() - 0.3) * 140;
      g.lineTo(x, y);
    }
    g.stroke(); g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill();
  }
  // little code-glyphs carved like hieroglyphs
  g.font = 'bold 26px monospace'; g.globalAlpha = 0.9;
  const glyphs = ['{ }', '</>', '=>', '::', '&&', '[ ]', '#', ';', '01', 'λ'];
  for (let i = 0; i < 5; i++) g.fillText(glyphs[(r() * glyphs.length) | 0], r() * (w - 60), 30 + r() * (h - 40));
  return c;
}
function tex(canvas, rx = 1, ry = 1, srgb = true) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx, ry);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
export function textCanvas(text, { w = 512, h = 160, font = '700 64px Unbounded, sans-serif', fg = '#f6ead2', bg = 'rgba(10,18,51,.92)', border = '#e9b44c', radius = 70, sub } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  const rr = (x, y, ww, hh, r) => { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + ww, y, x + ww, y + hh, r); g.arcTo(x + ww, y + hh, x, y + hh, r); g.arcTo(x, y + hh, x, y, r); g.arcTo(x, y, x + ww, y, r); g.closePath(); };
  rr(6, 6, w - 12, h - 12, Math.min(radius, (h - 12) / 2)); g.fillStyle = bg; g.fill();
  g.lineWidth = 6; g.strokeStyle = border; g.stroke();
  g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = font;
  g.fillText(text, w / 2, sub ? h * 0.4 : h / 2 + 2);
  if (sub) { g.font = '500 30px "Instrument Sans", sans-serif'; g.globalAlpha = 0.75; g.fillText(sub, w / 2, h * 0.72); }
  return c;
}

// ---------- the world ----------
export function buildWorld(scene, loadingManager) {
  const world = { updaters: [], props: {} };
  const up = (fn) => world.updaters.push(fn);

  // sky dome with a warm horizon where the moon sits
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(0x040824) }, mid: { value: new THREE.Color(0x14205a) }, hor: { value: new THREE.Color(0x6b3f5e) }, moonDir: { value: new THREE.Vector3(-0.55, 0.32, -0.77).normalize() } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
      void main(){ float h = clamp(vP.y,0.,1.);
        vec3 c = mix(hor, mid, smoothstep(0.,.22,h)); c = mix(c, top, smoothstep(.2,.75,h));
        float m = max(dot(vP, moonDir),0.); c += vec3(.35,.38,.6)*pow(m,24.)*.6 + vec3(.5,.3,.25)*pow(m,4.)*.12*(1.-h);
        gl_FragColor = vec4(c,1.); }`,
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(600, 32, 16), skyMat));

  // stars with twinkle
  {
    const n = 2200, pos = new Float32Array(n * 3), ph = new Float32Array(n); const r = rand(7);
    for (let i = 0; i < n; i++) {
      const th = r() * Math.PI * 2, y = 0.06 + r() * 0.94, rr = Math.sqrt(1 - y * y);
      pos.set([Math.cos(th) * rr * 520, y * 520, Math.sin(th) * rr * 520], i * 3); ph[i] = r() * 6.28;
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('ph', new THREE.BufferAttribute(ph, 1));
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, fog: false, uniforms: { t: { value: 0 }, px: { value: Math.min(devicePixelRatio, 2) } },
      vertexShader: 'attribute float ph; uniform float t,px; varying float a; void main(){ a = .45+.55*sin(t*1.7+ph*3.); gl_PointSize = (1.2+fract(ph*7.13)*2.2)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'varying float a; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(vec3(1.,.96,.88), a*smoothstep(.5,.0,d)); }',
    });
    scene.add(new THREE.Points(g, m)); up((t) => (m.uniforms.t.value = t));
  }

  // moon + halo
  {
    const moon = new THREE.Mesh(new THREE.SphereGeometry(16, 32, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(0xfff1d0).multiplyScalar(1.35), toneMapped: false, fog: false }));
    moon.position.set(-170, 105, -235); scene.add(moon);
    const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    const gr = g.createRadialGradient(128, 128, 20, 128, 128, 128); gr.addColorStop(0, 'rgba(255,236,200,.55)'); gr.addColorStop(0.35, 'rgba(160,170,255,.16)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, fog: false }));
    halo.scale.setScalar(150); halo.position.copy(moon.position); scene.add(halo);
  }

  // lights
  scene.add(new THREE.HemisphereLight(0x6f80d8, 0x2a1d14, 0.62));
  const moonLight = new THREE.DirectionalLight(0xc9d2ff, 1.35);
  moonLight.position.set(-34, 46, 30); moonLight.castShadow = true;
  moonLight.shadow.mapSize.set(2048, 2048);
  Object.assign(moonLight.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 140 });
  moonLight.shadow.bias = -0.0006; moonLight.shadow.normalBias = 0.03;
  scene.add(moonLight);
  const rim = new THREE.DirectionalLight(0xffa36a, 0.4); rim.position.set(30, 12, -20); scene.add(rim);

  // dunes
  {
    const g = new THREE.PlaneGeometry(900, 900, 180, 180); g.rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), z = p.getZ(i), d = Math.hypot(x, z);
      let y = Math.sin(x * 0.03 + z * 0.012) * 2.2 + Math.sin(z * 0.045 - x * 0.02) * 1.4 + Math.sin(x * 0.11) * 0.25;
      y *= THREE.MathUtils.smoothstep(d, 26, 90); y += THREE.MathUtils.smoothstep(d, 120, 420) * 14;
      p.setY(i, y - 0.02);
    }
    g.computeVertexNormals();
    const dunes = new THREE.Mesh(g, toon(0xb48a5a)); dunes.receiveShadow = true; scene.add(dunes);
    // plaza of the pyramid
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(24, 25, 0.3, 48), toon(0xa98258)); plaza.position.y = -0.12; plaza.receiveShadow = true; scene.add(plaza);
  }

  // distant Giza silhouettes
  for (const [x, z, s] of [[150, -260, 34], [205, -300, 46], [250, -270, 26]]) {
    const m = new THREE.Mesh(new THREE.ConeGeometry(s, s * 0.95, 4), toon(0x2a2340)); m.rotation.y = Math.PI / 4; m.position.set(x, s * 0.47 + 6, z); scene.add(m);
  }

  // ---- the step pyramid ----
  const pyr = new THREE.Group(); scene.add(pyr); world.pyramid = pyr;
  const stripMat = glow(PAL.faience, 1.9);
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    const side = toon(0xffffff, { map: tex(stoneCanvas(11 + i), s / 6, 1), emissiveMap: tex(circuitCanvas(91 + i * 7), s / 12, 1, false), emissive: new THREE.Color(PAL.faience), emissiveIntensity: 0.75 });
    const top = toon(0xffffff, { map: tex(stoneCanvas(51 + i, 512, 512, 6), s / 6, s / 6) });
    const step = new THREE.Mesh(new THREE.BoxGeometry(s, H, s), [side, side, top, top, side, side]);
    step.position.y = i * H + H / 2; step.castShadow = step.receiveShadow = true; pyr.add(step);
    // glowing edge strips on the top rim
    const hs = s / 2;
    for (const [w, d, x, z] of [[s, 0.08, 0, hs], [s, 0.08, 0, -hs], [0.08, s, hs, 0], [0.08, s, -hs, 0]]) {
      const e = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, d), stripMat); e.position.set(x, (i + 1) * H + 0.01, z); pyr.add(e);
    }
  }
  // grand staircase, one flight per step face
  const stairMat = toon(0xd2a872);
  world.stairPath = [];
  for (let L = 0; L < S.length; L++) {
    const n = 8, rise = H / n, run = FLIGHT / n, face = S[L] / 2, y0 = levelY(L);
    for (let j = 0; j < n; j++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(2.6, rise * (j + 1), run + 0.01), stairMat);
      b.position.set(0, y0 + (rise * (j + 1)) / 2, face + FLIGHT - (j + 0.5) * run); b.castShadow = b.receiveShadow = true; pyr.add(b);
    }
    for (const sx of [-1.42, 1.42]) { // glowing rails
      const a = new THREE.Vector3(sx, y0 + 0.35, face + FLIGHT), bb = new THREE.Vector3(sx, y0 + H + 0.35, face);
      const len = a.distanceTo(bb); const rail = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, len), glow(sx < 0 ? PAL.faience : PAL.gold, 2));
      rail.position.copy(a).add(bb).multiplyScalar(0.5); rail.lookAt(bb); pyr.add(rail);
    }
    world.stairPath.push(new THREE.Vector3(0, y0, face + FLIGHT), new THREE.Vector3(0, y0 + H, face));
  }
  // golden capstone
  const capMat = new THREE.MeshStandardMaterial({ color: PAL.gold, metalness: 0.85, roughness: 0.28, emissive: new THREE.Color(0x6b4a10), emissiveIntensity: 0.6 });
  const cap = new THREE.Mesh(new THREE.ConeGeometry(2.3, 3.2, 4), capMat);
  cap.rotation.y = Math.PI / 4; cap.position.set(0, 6 * H + 1.6, -0.6); cap.castShadow = true; pyr.add(cap);
  world.props.cap = cap;
  const capLight = new THREE.PointLight(0xffc766, 4, 18, 1.6); capLight.position.set(0, 6 * H + 4.2, 0); pyr.add(capLight); world.props.capLight = capLight;

  // packets: requests going up the left rail, responses coming down the right rail
  {
    const curveUp = new THREE.CatmullRomCurve3(world.stairPath.map((p) => p.clone().add(new THREE.Vector3(-1.42, 0.55, 0))), false, 'centripetal', 0);
    const curveDn = new THREE.CatmullRomCurve3(world.stairPath.map((p) => p.clone().add(new THREE.Vector3(1.42, 0.55, 0))), false, 'centripetal', 0);
    const n = 36, geo = new THREE.BoxGeometry(0.16, 0.16, 0.16);
    const reqs = new THREE.InstancedMesh(geo, glow(PAL.faience, 3.2), n), ress = new THREE.InstancedMesh(geo, glow(PAL.gold, 3), n);
    pyr.add(reqs, ress); const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(1, 1, 1), v = new THREE.Vector3();
    world.packetBoost = 0;
    up((t, dt) => {
      const sp = 0.045 + world.packetBoost * 0.25; world.packetBoost *= 0.97;
      for (let i = 0; i < n; i++) {
        const u = (i / n + t * sp) % 1;
        curveUp.getPointAt(u, v); q.setFromEuler(new THREE.Euler(t * 2 + i, t + i, 0)); m.compose(v, q, sc); reqs.setMatrixAt(i, m);
        curveDn.getPointAt(1 - u, v); m.compose(v, q, sc); ress.setMatrixAt(i, m);
      }
      reqs.instanceMatrix.needsUpdate = ress.instanceMatrix.needsUpdate = true;
    });
  }

  // torches at the base
  for (const x of [-4.6, 4.6]) {
    const z = S[0] / 2 + 3.2;
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.36, 2.2, 8), toon(0x8c6a45)); pillar.position.set(x, 1.1, z); pillar.castShadow = true; scene.add(pillar);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.3, 0.4, 12), toon(0x5b3b22)); bowl.position.set(x, 2.35, z); scene.add(bowl);
    const fire = new THREE.Mesh(new THREE.ConeGeometry(0.38, 1, 10), glow(0xff8a2a, 3)); fire.position.set(x, 3, z); scene.add(fire);
    const core = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.6, 8), glow(0xffe08a, 3)); core.position.set(x, 2.85, z); scene.add(core);
    const light = new THREE.PointLight(0xff9a45, 7, 13, 1.8); light.position.set(x, 3.4, z + 0.3); scene.add(light);
    const ph = Math.random() * 10;
    up((t) => { const f = 1 + Math.sin(t * 13 + ph) * 0.08 + Math.sin(t * 7.3 + ph) * 0.07; fire.scale.set(1, f * 1.1, 1); core.scale.set(1, f, 1); light.intensity = 6.5 * f; fire.rotation.y = t * 2; });
  }

  // drifting sand motes
  {
    const n = 500, pos = new Float32Array(n * 3); const r = rand(3);
    for (let i = 0; i < n; i++) pos.set([(r() - 0.5) * 80, r() * 22, (r() - 0.5) * 80], i * 3);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe2b0, size: 0.09, transparent: true, opacity: 0.55, depthWrite: false }));
    scene.add(pts);
    up((t, dt) => { const a = g.attributes.position; for (let i = 0; i < n; i++) { let x = a.getX(i) + dt * 1.6; if (x > 40) x = -40; a.setX(i, x); a.setY(i, a.getY(i) + Math.sin(t + i) * dt * 0.15); } a.needsUpdate = true; });
  }

  buildProps(world, pyr, loadingManager);
  world.update = (t, dt, cam) => { for (const f of world.updaters) f(t, dt, cam); };
  return world;
}

// ---------- props, one cluster per level ----------
function buildProps(world, pyr, lm) {
  const up = (fn) => world.updaters.push(fn);
  const ledgeZ = (L) => S[L] / 2 + FLIGHT / 2; // centre of the ledge at level L (L>=1)
  const texLoader = new THREE.TextureLoader(lm);

  // L1 — about: a little desk with a glowing laptop
  {
    const g = new THREE.Group(); g.position.set(-5.6, levelY(1), ledgeZ(1)); pyr.add(g);
    const wood = toon(0x6e4a2c);
    const top = new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.08, 0.8, 2, 0.03), wood); top.position.y = 0.72; top.castShadow = true; g.add(top);
    for (const [x, z] of [[-0.65, -0.32], [0.65, -0.32], [-0.65, 0.32], [0.65, 0.32]]) { const l = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.72, 0.06), wood); l.position.set(x, 0.36, z); g.add(l); }
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.03, 0.42), toon(0x2b2f3d)); base.position.set(0, 0.775, 0.05); g.add(base);
    const c = document.createElement('canvas'); c.width = 256; c.height = 160; const cg = c.getContext('2d');
    cg.fillStyle = '#0a1233'; cg.fillRect(0, 0, 256, 160); cg.font = '15px monospace';
    const lines = [['#2fd3c6', 'app.post("/hire",'], ['#e9b44c', '  auth, async (req,res)=>{'], ['#f6ead2', '  const dev = "adham";'], ['#f6ead2', '  await db.save(dev);'], ['#2fd3c6', '  res.status(201)'], ['#e9b44c', '});']];
    lines.forEach(([col, s], i) => { cg.fillStyle = col; cg.fillText(s, 12, 26 + i * 22); });
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.38), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), toneMapped: false }));
    scr.material.map.colorSpace = THREE.SRGBColorSpace;
    scr.position.set(0, 0.98, -0.15); scr.rotation.x = -0.18; g.add(scr);
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.41, 0.02), toon(0x2b2f3d)); back.position.set(0, 0.98, -0.165); back.rotation.x = -0.18; g.add(back);
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.14, 12), toon(PAL.terracotta)); mug.position.set(0.55, 0.83, 0.15); g.add(mug);
    g.rotation.y = 0.5; world.props.desk = g;
  }

  // L2 — stack: orbiting cartouches
  {
    const g = new THREE.Group(); g.position.set(5.8, levelY(2) + 3.1, ledgeZ(2) - 0.6); pyr.add(g);
    const items = ['C++', 'TypeScript', 'Node.js', 'PostgreSQL', 'Python', 'SQL', 'Docker', 'React', 'Express', 'socket.io', 'Git', 'Java'];
    items.forEach((s, i) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 0.33), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(textCanvas(s, { font: '700 54px Unbounded, sans-serif' })), transparent: true, side: THREE.DoubleSide, toneMapped: false }));
      m.material.map.colorSpace = THREE.SRGBColorSpace;
      m.userData = { a: (i / items.length) * Math.PI * 2, r: i % 2 ? 2.9 : 2.2, y: (i % 3) * 0.45 - 0.45 };
      g.add(m);
    });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 0), glow(PAL.faience, 2.2)); g.add(core);
    up((t, dt, cam) => {
      core.rotation.set(t * 0.6, t * 0.9, 0);
      g.children.forEach((m) => { if (!m.userData.r) return; const a = m.userData.a + t * 0.35; m.position.set(Math.cos(a) * m.userData.r, m.userData.y + Math.sin(t + m.userData.a) * 0.12, Math.sin(a) * m.userData.r); if (cam) m.quaternion.copy(cam.quaternion); });
    });
    world.props.stack = g;
  }

  // L3 — work: floating screens with real screenshots
  {
    const g = new THREE.Group(); g.position.set(-3.6, levelY(3) + 2.45, S[3] / 2 + 0.35); pyr.add(g);
    const frame = toon(PAL.gold, { emissive: new THREE.Color(0x3a2808) });
    const habit = document.createElement('canvas'); habit.width = 640; habit.height = 400; drawHabit(habit.getContext('2d'));
    const shots = [
      { src: 'assets/shots/title.jpg', x: -1.9, ry: 0.42 },
      { canvas: habit, x: 0, ry: 0 },
      { src: 'assets/shots/student-dashboard.webp', x: 1.9, ry: -0.42 },
    ];
    shots.forEach((s, i) => {
      const t = s.canvas ? new THREE.CanvasTexture(s.canvas) : texLoader.load(s.src); t.colorSpace = THREE.SRGBColorSpace;
      const holder = new THREE.Group(); holder.position.set(s.x, i === 1 ? 0.35 : 0, i === 1 ? -0.4 : 0); holder.rotation.y = s.ry; g.add(holder);
      const f = new THREE.Mesh(new RoundedBoxGeometry(1.86, 1.1, 0.07, 2, 0.04), frame); holder.add(f);
      const p = new THREE.Mesh(new THREE.PlaneGeometry(1.74, 0.98), new THREE.MeshBasicMaterial({ map: t, color: 0xb8b8b8 })); p.position.z = 0.04; holder.add(p);
      const ph = i * 1.7; up((tt) => { holder.position.y = (i === 1 ? 0.35 : 0) + Math.sin(tt * 1.1 + ph) * 0.08; });
    });
    g.rotation.y = 0.12; world.props.work = g;
  }

  // L4 — research: the dual pipeline as a hologram
  {
    const g = new THREE.Group(); g.position.set(5.6, levelY(4) + 1.3, ledgeZ(4) - 0.4); g.rotation.y = -0.4; pyr.add(g);
    const nodeA = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), glow(PAL.faience, 2)); nodeA.position.set(-1.9, 1.7, 0);
    const nodeB = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 12), glow(0x6f8cff, 2.2)); nodeB.position.set(-1.9, 0.3, 0);
    const fuse = new THREE.Mesh(new THREE.OctahedronGeometry(0.38), glow(PAL.gold, 2.6)); fuse.position.set(0.4, 1.0, 0);
    g.add(nodeA, nodeB, fuse);
    const cA = new THREE.CatmullRomCurve3([nodeA.position, new THREE.Vector3(-0.8, 1.8, 0.4), fuse.position]);
    const cB = new THREE.CatmullRomCurve3([nodeB.position, new THREE.Vector3(-0.8, 0.2, 0.4), fuse.position]);
    const tiers = [[0x2fd3c6, 0.35], [0xe9b44c, 0.6], [0xf08a3c, 0.85], [0xe0473a, 1.1]];
    const bars = tiers.map(([c, h], i) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.22, h, 0.22), glow(c, 1.8)); b.position.set(1.4 + i * 0.36, h / 2 + 0.1, 0); g.add(b); return b; });
    const out = new THREE.CatmullRomCurve3([fuse.position, new THREE.Vector3(1.2, 1.4, 0.2), new THREE.Vector3(1.9, 1.5, 0)]);
    const n = 22, geo = new THREE.SphereGeometry(0.05, 6, 4);
    const pa = new THREE.InstancedMesh(geo, glow(PAL.faience, 3), n), pb = new THREE.InstancedMesh(geo, glow(0x8fa6ff, 3), n), po = new THREE.InstancedMesh(geo, glow(PAL.gold, 3), n);
    g.add(pa, pb, po);
    for (const [txt, x, y] of [['XGBoost · sensors', -1.9, 2.25], ['Isolation Forest · traffic', -1.9, -0.25], ['Decision fusion', 0.4, 1.6], ['4-tier risk', 1.95, 1.55]]) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(textCanvas(txt, { w: 640, h: 120, font: '600 42px "Instrument Sans", sans-serif', radius: 60 })), transparent: true, toneMapped: false }));
      sp.material.map.colorSpace = THREE.SRGBColorSpace; sp.scale.set(1.6, 0.3, 1); sp.position.set(x, y, 0.1); g.add(sp);
    }
    const m = new THREE.Matrix4(), v = new THREE.Vector3();
    up((t) => {
      nodeA.rotation.set(t, t * 0.7, 0); fuse.rotation.y = t * 1.4; fuse.scale.setScalar(1 + Math.sin(t * 4) * 0.06);
      for (let i = 0; i < n; i++) {
        const u = (i / n + t * 0.22) % 1;
        cA.getPointAt(u, v); m.makeTranslation(v.x, v.y, v.z); pa.setMatrixAt(i, m);
        cB.getPointAt((u + 0.5) % 1, v); m.makeTranslation(v.x, v.y, v.z); pb.setMatrixAt(i, m);
        out.getPointAt(u, v); m.makeTranslation(v.x, v.y, v.z); po.setMatrixAt(i, m);
      }
      pa.instanceMatrix.needsUpdate = pb.instanceMatrix.needsUpdate = po.instanceMatrix.needsUpdate = true;
      bars.forEach((b, i) => (b.scale.y = 0.85 + Math.sin(t * 2 + i) * 0.15));
    });
    world.props.research = g;
  }

  // L5 — arena: ICPC balloons and a NASA rocket
  {
    const g = new THREE.Group(); g.position.set(-4.4, levelY(5), ledgeZ(5) - 0.5); pyr.add(g);
    const cols = [0xe0473a, 0x2fd3c6, 0xe9b44c, 0x6f8cff, 0xf6ead2];
    cols.forEach((c, i) => {
      const b = new THREE.Group(); b.position.set((i - 2) * 0.42, 0, (i % 2) * 0.45);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.34, 20, 16), toon(c, { emissive: new THREE.Color(c), emissiveIntensity: 0.25 })); ball.scale.y = 1.18; ball.position.y = 2.2 + (i % 3) * 0.35;
      const knot = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.1, 6), toon(c)); knot.position.y = ball.position.y - 0.42; knot.rotation.x = Math.PI;
      const str = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, ball.position.y - 0.45, 4), toon(0xf6ead2)); str.position.y = (ball.position.y - 0.45) / 2;
      b.add(ball, knot, str); g.add(b);
      const ph = i * 1.3; up((t) => { b.rotation.z = Math.sin(t * 1.2 + ph) * 0.06; b.rotation.x = Math.cos(t + ph) * 0.05; });
    });
    const rocket = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.6, 6, 12), toon(0xf6ead2)); rocket.add(body);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.3, 12), toon(PAL.terracotta)); nose.position.y = 0.55; rocket.add(nose);
    for (let k = 0; k < 3; k++) { const fin = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.22, 0.18), toon(PAL.lapis)); const a = (k / 3) * Math.PI * 2; fin.position.set(Math.cos(a) * 0.16, -0.3, Math.sin(a) * 0.16); fin.rotation.y = -a; rocket.add(fin); }
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 8), glow(0xff9a45, 3)); flame.position.y = -0.62; flame.rotation.x = Math.PI; rocket.add(flame);
    pyr.add(rocket);
    up((t) => {
      const a = t * 0.45, c = new THREE.Vector3(0, levelY(5) + 4.6, 0);
      rocket.position.set(c.x + Math.cos(a) * 9, c.y + Math.sin(t * 0.9) * 0.6, c.z + Math.sin(a) * 9);
      rocket.lookAt(c.x + Math.cos(a + 0.2) * 9, rocket.position.y, c.z + Math.sin(a + 0.2) * 9); rocket.rotateX(Math.PI / 2);
      flame.scale.y = 1 + Math.sin(t * 30) * 0.2;
    });
    world.props.arena = g;
  }

  // L6 — the beam the capstone fires when a request is sent
  {
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 1.2, 160, 24, 1, true), new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.gold).multiplyScalar(2.2), transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending }));
    beam.position.set(0, 6 * H + 3 + 80, -0.6); pyr.add(beam);
    const rings = [0, 1, 2].map(() => { const r = new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 8, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.faience).multiplyScalar(2.5), transparent: true, opacity: 0, toneMapped: false })); r.rotation.x = Math.PI / 2; r.position.set(0, 6 * H + 0.2, -0.6); pyr.add(r); return r; });
    world.props.beam = beam; world.props.rings = rings;
  }
}

function drawHabit(g) {
  g.fillStyle = '#101a3f'; g.fillRect(0, 0, 640, 400);
  g.fillStyle = '#e9b44c'; g.font = '700 34px Unbounded, sans-serif'; g.fillText('SmartHabbit', 30, 56);
  g.fillStyle = '#f6ead2'; g.font = '500 20px "Instrument Sans", sans-serif'; g.fillText('Level 7  ·  1,240 XP  ·  🔥 12-day streak', 30, 92);
  g.fillStyle = '#26305e'; g.fillRect(30, 112, 580, 18); g.fillStyle = '#2fd3c6'; g.fillRect(30, 112, 410, 18);
  const habits = [['Read 20 pages', 'easy', '+10 XP'], ['Codeforces problem', 'hard', '+40 XP'], ['Gym', 'medium', '+25 XP']];
  habits.forEach(([n, d, x], i) => {
    const y = 160 + i * 62; g.fillStyle = '#18234f'; g.fillRect(30, y, 580, 50);
    g.fillStyle = '#f6ead2'; g.font = '600 22px "Instrument Sans", sans-serif'; g.fillText(n, 50, y + 32);
    g.fillStyle = '#9fb0e8'; g.font = '500 17px "Instrument Sans", sans-serif'; g.fillText(d, 330, y + 31);
    g.fillStyle = '#e9b44c'; g.fillText(x, 520, y + 31);
  });
  ['#e0473a', '#2fd3c6', '#e9b44c', '#6f8cff'].forEach((c, i) => { g.fillStyle = c; g.beginPath(); g.arc(60 + i * 56, 370, 18, 0, 7); g.fill(); });
}
