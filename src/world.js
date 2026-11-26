// The world: Saqqara at night, a step pyramid where every step is a layer of Adham's stack.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { masonry, sand, moonCanvas, rand } from './textures.js';

export const PAL = {
  night: 0x0a1233, lapis: 0x1d3fbf, faience: 0x2fd3c6, gold: 0xe9b44c,
  sand: 0xd9b382, stone: 0xc89a63, terracotta: 0xb5532f, ink: 0x0b0f22,
};

// ---- step pyramid geometry constants (shared with the guide's path) ----
export const S = [28, 23.5, 19, 14.5, 10, 5.5]; // step widths
export const H = 2.6;                             // step height
export const FLIGHT = 2.25;                       // stair depth on each ledge
export const levelY = (L) => (L === 0 ? 0 : L * H);

export const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, metalness: 0, ...extra });
export const glow = (color, k = 2.6) => new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(k), toneMapped: false });

function circuitCanvas(seed, w = 1024, h = 512) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); const r = rand(seed);
  g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#fff'; g.fillStyle = '#fff'; g.lineWidth = 3; g.lineCap = 'round';
  for (let i = 0; i < 6; i++) {
    let x = r() * w, y = h * (0.2 + r() * 0.6);
    g.beginPath(); g.moveTo(x, y);
    for (let s = 0; s < 5; s++) { if (s % 2) y = Math.max(20, Math.min(h - 20, y + (r() - 0.5) * 200)); else x += (r() - 0.3) * 260; g.lineTo(x, y); }
    g.stroke(); g.beginPath(); g.arc(x, y, 8, 0, Math.PI * 2); g.fill();
  }
  g.font = 'bold 48px monospace';
  const glyphs = ['{ }', '</>', '=>', '::', '&&', '[ ]', '#', ';', '01', 'λ'];
  for (let i = 0; i < 4; i++) g.fillText(glyphs[(r() * glyphs.length) | 0], r() * (w - 100), 60 + r() * (h - 80));
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; return t;
}
const withRepeat = (set, rx, ry) => { const o = {}; for (const k in set) { const t = set[k].clone(); t.repeat.set(rx, ry); t.needsUpdate = true; o[k] = t; } return o; };

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
export function buildWorld(scene, renderer, loadingManager, quality = 'high') {
  const world = { updaters: [], props: {}, clickables: [] };
  const up = (fn) => world.updaters.push(fn);
  const hi = quality === 'high';

  // ---- sky dome: gradient, milky way, warm horizon under the moon ----
  const moonDir = new THREE.Vector3(-0.55, 0.32, -0.77).normalize();
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(0x02051a) }, mid: { value: new THREE.Color(0x0d1747) }, hor: { value: new THREE.Color(0x4a3152) }, moonDir: { value: moonDir } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform vec3 top,mid,hor,moonDir; varying vec3 vP;
      float h3(vec3 p){ p = fract(p*.3183099+.1); p *= 17.; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
      float n3(vec3 x){ vec3 i = floor(x), f = fract(x); f = f*f*(3.-2.*f);
        return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z); }
      float fbm(vec3 p){ float v=0., a=.5; for(int i=0;i<5;i++){ v += a*n3(p); p*=2.03; a*=.5; } return v; }
      void main(){ float h = clamp(vP.y,0.,1.);
        vec3 c = mix(hor, mid, smoothstep(0.,.25,h)); c = mix(c, top, smoothstep(.2,.8,h));
        vec3 bn = normalize(vec3(.35,.25,.9)); float band = exp(-pow(dot(vP,bn)/.2,2.));
        float dust = fbm(vP*7.); float lanes = smoothstep(.45,.75,fbm(vP*14.+3.));
        c += vec3(.38,.36,.55)*band*dust*.28*(1.-lanes*.7)*smoothstep(.02,.3,h);
        float m = max(dot(vP, moonDir),0.); c += vec3(.55,.6,.85)*pow(m,60.)*.5 + vec3(.6,.45,.35)*pow(m,5.)*.12*(1.-h);
        gl_FragColor = vec4(c,1.); }`,
  });
  scene.add(new THREE.Mesh(new THREE.SphereGeometry(600, 48, 24), skyMat));

  // stars with twinkle
  {
    const n = 3200, pos = new Float32Array(n * 3), ph = new Float32Array(n); const r = rand(7);
    for (let i = 0; i < n; i++) {
      const th = r() * Math.PI * 2, y = 0.04 + r() * 0.96, rr = Math.sqrt(1 - y * y);
      pos.set([Math.cos(th) * rr * 520, y * 520, Math.sin(th) * rr * 520], i * 3); ph[i] = r() * 6.28;
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('ph', new THREE.BufferAttribute(ph, 1));
    const m = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, fog: false, uniforms: { t: { value: 0 }, px: { value: Math.min(devicePixelRatio, 2) } },
      vertexShader: 'attribute float ph; uniform float t,px; varying float a; varying vec3 col; void main(){ a = .4+.6*sin(t*1.7+ph*3.); float s = fract(ph*7.13); col = mix(vec3(1.,.93,.82), vec3(.8,.88,1.), fract(ph*3.7)); gl_PointSize = (0.9+s*s*2.6)*px; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: 'varying float a; varying vec3 col; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(col, a*smoothstep(.5,.0,d)); }',
    });
    scene.add(new THREE.Points(g, m)); up((t) => (m.uniforms.t.value = t));
  }

  // moon with craters + halo
  {
    const moon = new THREE.Mesh(new THREE.SphereGeometry(15, 48, 48), new THREE.MeshBasicMaterial({ map: moonCanvas(), color: new THREE.Color(1.35, 1.3, 1.2), toneMapped: false, fog: false }));
    moon.position.copy(moonDir).multiplyScalar(300); moon.rotation.y = 1.2; scene.add(moon);
    const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    const gr = g.createRadialGradient(128, 128, 14, 128, 128, 128); gr.addColorStop(0, 'rgba(255,236,200,.5)'); gr.addColorStop(0.3, 'rgba(150,165,255,.14)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, fog: false }));
    halo.scale.setScalar(160); halo.position.copy(moon.position); scene.add(halo);
    moon.userData.onClick = 'moon'; world.clickables.push(moon); world.props.moon = moon;
  }

  // environment map from the sky, for physically based reflections
  {
    const envScene = new THREE.Scene(); envScene.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), skyMat.clone()));
    const glowM = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 16), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 3, 2.6) })); glowM.position.copy(moonDir).multiplyScalar(40); envScene.add(glowM);
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(envScene, 0.04).texture; scene.environmentIntensity = 0.55;
    pmrem.dispose();
  }

  // lights
  const hemi = new THREE.HemisphereLight(0x7181d0, 0x3a2a1c, 0.55); scene.add(hemi);
  const moonLight = new THREE.DirectionalLight(0xcbd4ff, 2.3);
  moonLight.position.copy(moonDir).multiplyScalar(60).setY(48); moonLight.position.x = -38; moonLight.position.z = 32;
  moonLight.castShadow = true; moonLight.shadow.mapSize.set(hi ? 4096 : 2048, hi ? 4096 : 2048);
  Object.assign(moonLight.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 160 });
  moonLight.shadow.bias = -0.0004; moonLight.shadow.normalBias = 0.04; moonLight.shadow.radius = 3;
  scene.add(moonLight);
  const rim = new THREE.DirectionalLight(0xff9e6a, 0.35); rim.position.set(30, 10, -20); scene.add(rim);

  // ---- stone + sand materials ----
  const sideSet = masonry({ w: hi ? 1024 : 512, h: hi ? 512 : 256, rows: 4, seed: 11 });
  const topSet = masonry({ w: hi ? 1024 : 512, h: hi ? 1024 : 512, rows: 8, seed: 51 });
  const sandN = sand(); sandN.repeat.set(70, 70);

  // dunes
  {
    const g = new THREE.PlaneGeometry(900, 900, 220, 220); g.rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), z = p.getZ(i), d = Math.hypot(x, z);
      let y = Math.sin(x * 0.03 + z * 0.012) * 2.2 + Math.sin(z * 0.045 - x * 0.02) * 1.4 + Math.sin(x * 0.11 + z * 0.03) * 0.3;
      y = y > 0 ? y * 1.25 : y * 0.7; // sharper crests
      y *= THREE.MathUtils.smoothstep(d, 26, 90); y += THREE.MathUtils.smoothstep(d, 120, 420) * 14;
      p.setY(i, y - 0.02);
    }
    g.computeVertexNormals();
    const dunes = new THREE.Mesh(g, std(0xa98055, { normalMap: sandN, normalScale: new THREE.Vector2(0.55, 0.55), roughness: 0.97 }));
    dunes.receiveShadow = true; scene.add(dunes);
    // paved plaza
    const pave = withRepeat(topSet, 6, 6);
    const plaza = new THREE.Mesh(new THREE.CylinderGeometry(24, 25, 0.3, 64), std(0x9c8264, { ...pave, roughness: 1 }));
    plaza.position.y = -0.12; plaza.receiveShadow = true; scene.add(plaza);
  }

  // scattered rocks
  {
    const geo = new THREE.IcosahedronGeometry(1, 2), pp = geo.attributes.position, r = rand(21);
    for (let i = 0; i < pp.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(pp, i); v.multiplyScalar(0.75 + Math.sin(v.x * 3.1) * 0.1 + Math.cos(v.y * 4.3 + v.z) * 0.12); pp.setXYZ(i, v.x, v.y * 0.65, v.z); }
    geo.computeVertexNormals();
    const n = 46, rocks = new THREE.InstancedMesh(geo, std(0x7d6146, { ...withRepeat(sideSet, 0.5, 0.5), roughness: 1 }), n);
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), v = new THREE.Vector3();
    for (let i = 0; i < n; i++) {
      const a = r() * Math.PI * 2, d = 25 + r() * 45; if (Math.abs(Math.cos(a)) < 0.25 && Math.sin(a) > 0) continue; // keep the view to the stairs clear
      v.set(Math.cos(a) * d, -0.15, Math.sin(a) * d); q.setFromEuler(new THREE.Euler(r(), r() * 6, r())); s.setScalar(0.3 + r() * r() * 1.8);
      m.compose(v, q, s); rocks.setMatrixAt(i, m);
    }
    rocks.castShadow = rocks.receiveShadow = true; scene.add(rocks);
  }

  // distant Giza silhouettes
  for (const [x, z, s] of [[150, -260, 34], [205, -300, 46], [250, -270, 26]]) {
    const m = new THREE.Mesh(new THREE.ConeGeometry(s, s * 0.95, 4), std(0x3b3048, { roughness: 1 })); m.rotation.y = Math.PI / 4; m.position.set(x, s * 0.47 + 6, z); scene.add(m);
  }

  // ---- the step pyramid ----
  const pyr = new THREE.Group(); scene.add(pyr); world.pyramid = pyr;
  const stripMat = glow(PAL.faience, 1.0);
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    const side = std(0xffffff, { ...withRepeat(sideSet, s / 7, 1), emissiveMap: (() => { const t = circuitCanvas(91 + i * 7); t.repeat.set(s / 14, 1); return t; })(), emissive: new THREE.Color(0x3fb8ae), emissiveIntensity: 0.18, normalScale: new THREE.Vector2(1.0, 1.0) });
    const top = std(0xf0e4d4, { ...withRepeat(topSet, s / 7, s / 7) });
    const step = new THREE.Mesh(new THREE.BoxGeometry(s, H, s), [side, side, top, top, side, side]);
    step.position.y = i * H + H / 2; step.castShadow = step.receiveShadow = true; pyr.add(step);
    const hs = s / 2;
    for (const [w, d, x, z] of [[s, 0.06, 0, hs], [s, 0.06, 0, -hs], [0.06, s, hs, 0], [0.06, s, -hs, 0]]) {
      const e = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, d), stripMat); e.position.set(x, (i + 1) * H + 0.01, z); pyr.add(e);
    }
  }
  // grand staircase
  const stairMat = std(0xe8d6c0, { ...withRepeat(topSet, 0.35, 0.12) });
  world.stairPath = [];
  for (let L = 0; L < S.length; L++) {
    const n = 8, rise = H / n, run = FLIGHT / n, face = S[L] / 2, y0 = levelY(L);
    for (let j = 0; j < n; j++) {
      const b = new THREE.Mesh(new RoundedBoxGeometry(2.6, rise * (j + 1), run + 0.01, 1, 0.02), stairMat);
      b.position.set(0, y0 + (rise * (j + 1)) / 2, face + FLIGHT - (j + 0.5) * run); b.castShadow = b.receiveShadow = true; pyr.add(b);
    }
    for (const sx of [-1.42, 1.42]) {
      const a = new THREE.Vector3(sx, y0 + 0.35, face + FLIGHT), bb = new THREE.Vector3(sx, y0 + H + 0.35, face);
      const len = a.distanceTo(bb); const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, len, 8), glow(sx < 0 ? PAL.faience : PAL.gold, 0.95));
      rail.position.copy(a).add(bb).multiplyScalar(0.5); rail.lookAt(bb); rail.rotateX(Math.PI / 2); pyr.add(rail);
    }
    world.stairPath.push(new THREE.Vector3(0, y0, face + FLIGHT), new THREE.Vector3(0, y0 + H, face));
  }
  // golden capstone (polished electrum)
  const capMat = new THREE.MeshPhysicalMaterial({ color: 0xf2c25a, metalness: 1, roughness: 0.18, clearcoat: 0.6, clearcoatRoughness: 0.1, envMapIntensity: 2.2, emissive: new THREE.Color(0x3a2606), emissiveIntensity: 0.5 });
  const cap = new THREE.Mesh(new THREE.ConeGeometry(2.3, 3.2, 4, 1), capMat);
  cap.rotation.y = Math.PI / 4; cap.position.set(0, 6 * H + 1.6, -0.6); cap.castShadow = true; pyr.add(cap);
  cap.userData.onClick = 'cap'; world.clickables.push(cap);
  world.props.cap = cap;
  const capLight = new THREE.PointLight(0xffc766, 5, 20, 1.6); capLight.position.set(0, 6 * H + 4.2, 0); pyr.add(capLight); world.props.capLight = capLight;

  // packets: requests up the left rail, responses down the right rail
  {
    const curveUp = new THREE.CatmullRomCurve3(world.stairPath.map((p) => p.clone().add(new THREE.Vector3(-1.42, 0.55, 0))), false, 'centripetal', 0);
    const curveDn = new THREE.CatmullRomCurve3(world.stairPath.map((p) => p.clone().add(new THREE.Vector3(1.42, 0.55, 0))), false, 'centripetal', 0);
    const n = 36, geo = new RoundedBoxGeometry(0.14, 0.14, 0.14, 1, 0.03);
    const reqs = new THREE.InstancedMesh(geo, glow(PAL.faience, 1.4), n), ress = new THREE.InstancedMesh(geo, glow(PAL.gold, 1.3), n);
    pyr.add(reqs, ress); const m = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(1, 1, 1), v = new THREE.Vector3(), e = new THREE.Euler();
    world.packetBoost = 0;
    up((t) => {
      const sp = 0.045 + world.packetBoost * 0.25; world.packetBoost *= 0.97;
      for (let i = 0; i < n; i++) {
        const u = (i / n + t * sp) % 1;
        curveUp.getPointAt(u, v); q.setFromEuler(e.set(t * 2 + i, t + i, 0)); m.compose(v, q, sc); reqs.setMatrixAt(i, m);
        curveDn.getPointAt(1 - u, v); m.compose(v, q, sc); ress.setMatrixAt(i, m);
      }
      reqs.instanceMatrix.needsUpdate = ress.instanceMatrix.needsUpdate = true;
    });
  }

  // torches with shader flames and embers
  const flameMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
    uniforms: { t: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform float t; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
      void main(){ vec2 uv = vUv; float y = uv.y;
        float nn = n(vec2(uv.x*4., y*3.-t*3.2))*.6 + n(vec2(uv.x*9., y*7.-t*5.))*.4;
        float w = (1.-y)*.42 + .04; float d = abs(uv.x-.5 + (nn-.5)*.25*y);
        float f = smoothstep(w, w*.35, d) * smoothstep(1., .25, y + nn*.35) * smoothstep(0.,.08,y);
        vec3 c = mix(vec3(1.5,.5,.1), vec3(1.9,1.35,.7), smoothstep(.3,.9,f*(1.2-y)));
        gl_FragColor = vec4(c*f*.32, f*.85); }`,
  });
  up((t) => (flameMat.uniforms.t.value = t));
  const bronze = new THREE.MeshPhysicalMaterial({ color: 0x8a5a2b, metalness: 0.9, roughness: 0.35 });
  for (const x of [-4.6, 4.6]) {
    const z = S[0] / 2 + 3.2;
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.36, 2.2, 16), std(0xffffff, { ...withRepeat(sideSet, 0.3, 0.5) })); pillar.position.set(x, 1.1, z); pillar.castShadow = true; scene.add(pillar);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.3, 0.4, 24, 1, true), bronze); bowl.material.side = THREE.DoubleSide; bowl.position.set(x, 2.35, z); scene.add(bowl);
    const coals = new THREE.Mesh(new THREE.CircleGeometry(0.55, 20), glow(0xff5a1a, 0.7)); coals.rotation.x = -Math.PI / 2; coals.position.set(x, 2.45, z); scene.add(coals);
    const fl = new THREE.Group(); fl.position.set(x, 2.45, z); scene.add(fl);
    for (let k = 0; k < 3; k++) { const p = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.8), flameMat); p.position.y = 0.85; p.rotation.y = (k / 3) * Math.PI; fl.add(p); }
    const light = new THREE.PointLight(0xff8a3c, 6, 12, 1.8); light.position.set(x, 3.4, z + 0.3); scene.add(light);
    // embers
    const ne = 30, ep = new Float32Array(ne * 3), seeds = Array.from({ length: ne }, () => Math.random());
    const eg = new THREE.BufferGeometry(); eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
    const em = new THREE.Points(eg, new THREE.PointsMaterial({ color: new THREE.Color(3, 1.4, 0.4), size: 0.06, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    em.position.set(x, 2.6, z); scene.add(em);
    const ph = Math.random() * 10;
    up((t) => {
      const f = 1 + Math.sin(t * 13 + ph) * 0.07 + Math.sin(t * 7.3 + ph) * 0.06; fl.scale.set(1, f, 1); light.intensity = 5.5 * f; fl.rotation.y = Math.sin(t * 0.7 + ph) * 0.3;
      for (let i = 0; i < ne; i++) { const u = (seeds[i] + t * (0.25 + seeds[i] * 0.3)) % 1; ep[i * 3] = Math.sin(seeds[i] * 50 + t) * 0.25 * u; ep[i * 3 + 1] = u * 3; ep[i * 3 + 2] = Math.cos(seeds[i] * 70 + t) * 0.25 * u; }
      eg.attributes.position.needsUpdate = true;
    });
  }

  // drifting sand motes
  {
    const n = 600, pos = new Float32Array(n * 3); const r = rand(3);
    for (let i = 0; i < n; i++) pos.set([(r() - 0.5) * 80, r() * 22, (r() - 0.5) * 80], i * 3);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffe2b0, size: 0.06, transparent: true, opacity: 0.45, depthWrite: false })));
    up((t, dt) => { const a = g.attributes.position; for (let i = 0; i < n; i++) { let x = a.getX(i) + dt * 1.6; if (x > 40) x = -40; a.setX(i, x); a.setY(i, a.getY(i) + Math.sin(t + i) * dt * 0.15); } a.needsUpdate = true; });
  }

  buildProps(world, pyr, loadingManager);
  world.update = (t, dt, cam) => { for (const f of world.updaters) f(t, dt, cam); };
  return world;
}

// ---------- props, one cluster per level ----------
function buildProps(world, pyr, lm) {
  const up = (fn) => world.updaters.push(fn);
  const ledgeZ = (L) => S[L] / 2 + FLIGHT / 2;
  const texLoader = new THREE.TextureLoader(lm);
  const gold = new THREE.MeshPhysicalMaterial({ color: 0xe0ae4a, metalness: 1, roughness: 0.3, envMapIntensity: 1.6 });

  // L1 — about: a little desk with a glowing laptop
  {
    const g = new THREE.Group(); g.position.set(-5.6, levelY(1), ledgeZ(1)); pyr.add(g);
    const wood = std(0x5e3b22, { roughness: 0.6 });
    const top = new THREE.Mesh(new RoundedBoxGeometry(1.5, 0.08, 0.8, 2, 0.03), wood); top.position.y = 0.72; top.castShadow = true; g.add(top);
    for (const [x, z] of [[-0.65, -0.32], [0.65, -0.32], [-0.65, 0.32], [0.65, 0.32]]) { const l = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.72, 8), wood); l.position.set(x, 0.36, z); l.castShadow = true; g.add(l); }
    const alu = new THREE.MeshPhysicalMaterial({ color: 0x9aa0ab, metalness: 0.9, roughness: 0.32 });
    const base = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.025, 0.42, 1, 0.01), alu); base.position.set(0, 0.775, 0.05); g.add(base);
    const c = document.createElement('canvas'); c.width = 512; c.height = 320; const cg = c.getContext('2d');
    cg.fillStyle = '#0a1233'; cg.fillRect(0, 0, 512, 320); cg.font = '28px monospace';
    const lines = [['#2fd3c6', 'app.post("/hire",'], ['#e9b44c', '  auth, async (req,res)=>{'], ['#f6ead2', '  const dev = "adham";'], ['#f6ead2', '  await db.save(dev);'], ['#2fd3c6', '  res.status(201)'], ['#e9b44c', '});']];
    lines.forEach(([col, s], i) => { cg.fillStyle = col; cg.fillText(s, 22, 52 + i * 44); });
    const st = new THREE.CanvasTexture(c); st.colorSpace = THREE.SRGBColorSpace;
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.58, 0.36), new THREE.MeshBasicMaterial({ map: st, color: 0xcccccc }));
    scr.position.set(0, 0.98, -0.148); scr.rotation.x = -0.18; g.add(scr);
    const back = new THREE.Mesh(new RoundedBoxGeometry(0.62, 0.4, 0.015, 1, 0.006), alu); back.position.set(0, 0.98, -0.16); back.rotation.x = -0.18; g.add(back);
    const screenGlow = new THREE.PointLight(0x7fd8ff, 1.2, 2.2, 2); screenGlow.position.set(0, 1.05, 0.2); g.add(screenGlow);
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.06, 0.14, 20), new THREE.MeshPhysicalMaterial({ color: PAL.terracotta, roughness: 0.25, clearcoat: 0.8 })); mug.position.set(0.55, 0.83, 0.15); g.add(mug);
    g.rotation.y = 0.5; world.props.desk = g;
  }

  // L2 — stack: a brass astrolabe standing on the ledge; tool plaques ride two counter-rotating rings
  {
    const g = new THREE.Group(); g.position.set(7.3, levelY(2) + 2.95, ledgeZ(2) + 0.25); pyr.add(g);
    const brass = new THREE.MeshPhysicalMaterial({ color: 0xa8865a, metalness: 1, roughness: 0.38, envMapIntensity: 1.2 });
    const ringI = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.025, 12, 96), brass), ringO = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.032, 12, 128), brass);
    g.add(ringI, ringO);
    for (let k = 0; k < 4; k++) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 4.8, 6), brass); sp.rotation.z = (k / 4) * Math.PI; g.add(sp); }
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 2.95, 12), brass); pole.position.y = -2.95 / 2; pole.castShadow = true; g.add(pole);
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.16, 32), std(0x6d5a44, { roughness: 0.9 })); base.position.y = -2.95 + 0.08; base.castShadow = base.receiveShadow = true; g.add(base);
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 1), new THREE.MeshPhysicalMaterial({ color: 0x3fb8ae, roughness: 0.15, metalness: 0.1, transmission: 0.4, thickness: 0.5, emissive: new THREE.Color(0x0b4a45), emissiveIntensity: 0.8 })); g.add(core);
    const inner = ['C++', 'Python', 'SQL', 'Java', 'Git'], outer = ['TypeScript', 'Node.js', 'PostgreSQL', 'Express', 'socket.io', 'Docker', 'React'];
    const plaques = [];
    const mk = (label, r, i, n, dir) => {
      const tex = new THREE.CanvasTexture(textCanvas(label, { font: '600 52px "Instrument Sans", sans-serif', bg: 'rgba(12,16,40,1)', border: '#b8935a', fg: '#efe4cc' })); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
      const m = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.31), new THREE.MeshBasicMaterial({ map: tex, transparent: true, color: 0xd8d8d8 }));
      m.userData = { a: (i / n) * Math.PI * 2, r, dir, label: label.toLowerCase(), hl: 0 }; g.add(m); plaques.push(m);
    };
    inner.forEach((l, i) => mk(l, 1.2, i, inner.length, 1)); outer.forEach((l, i) => mk(l, 2.4, i, outer.length, -1));
    let rot = 0;
    up((t, dt, cam) => {
      rot += dt; core.rotation.set(t * 0.4, t * 0.6, 0);
      ringI.rotation.z = rot * 0.25; ringO.rotation.z = -rot * 0.16;
      for (const m of plaques) {
        const u = m.userData; u.hl = Math.max(0, u.hl - dt); const k = Math.min(1, u.hl * 2);
        const a = u.a + rot * (u.dir > 0 ? 0.25 : -0.16);
        m.position.set(Math.cos(a) * u.r, Math.sin(a) * u.r, 0.08 + k * 0.25);
        m.scale.setScalar(1 + k * 0.45); m.material.color.setScalar(0.85 + k * 0.15);
        if (cam) m.quaternion.copy(cam.quaternion);
      }
    });
    world.props.stack = g;
    world.highlightSkill = (name) => { let hit = false; const n = name.toLowerCase(); plaques.forEach((m) => { const l = m.userData.label; if (n === l || n.startsWith(l.replace('.js', '')) || l.startsWith(n)) { m.userData.hl = 3; hit = true; } }); return hit; };
  }

  // L3 — work: three monitors on stands, showing real screenshots
  {
    const g = new THREE.Group(); g.position.set(-6.6, levelY(3), S[3] / 2 + 1.1); pyr.add(g);
    const shell = new THREE.MeshPhysicalMaterial({ color: 0x17181f, metalness: 0.6, roughness: 0.35, clearcoat: 0.4 });
    const alu = new THREE.MeshPhysicalMaterial({ color: 0x8c9099, metalness: 1, roughness: 0.3 });
    const shots = [{ src: 'assets/shots/title.jpg', x: -1.95, ry: 0.18 }, { src: 'assets/shots/smarthabbit-dashboard.webp', x: 0, ry: 0 }, { src: 'assets/shots/student-dashboard.webp', x: 1.95, ry: -0.18 }];
    shots.forEach((sh, i) => {
      const t = sh.canvas ? new THREE.CanvasTexture(sh.canvas) : texLoader.load(sh.src); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
      const mon = new THREE.Group(); mon.position.set(sh.x, 0, 0); mon.rotation.y = sh.ry; g.add(mon);
      const bezel = new THREE.Mesh(new RoundedBoxGeometry(1.72, 1.02, 0.07, 3, 0.03), shell); bezel.position.y = 1.72; bezel.castShadow = true; mon.add(bezel);
      const scr = new THREE.Mesh(new THREE.PlaneGeometry(1.62, 0.92), new THREE.MeshBasicMaterial({ map: t, color: 0x9c9c9c })); scr.position.set(0, 1.72, 0.037); mon.add(scr);
      const neck = new THREE.Mesh(new RoundedBoxGeometry(0.09, 1.2, 0.05, 1, 0.02), alu); neck.position.set(0, 0.62, -0.06); neck.castShadow = true; mon.add(neck);
      const foot = new THREE.Mesh(new RoundedBoxGeometry(0.55, 0.03, 0.34, 2, 0.012), alu); foot.position.set(0, 0.015, -0.02); foot.castShadow = foot.receiveShadow = true; mon.add(foot);
      const key = ['capcom', 'smarthabbit', 'labtrack'][i];
      (world.props.screens ||= {})[key] = bezel;
      (world.props.screenPlanes ||= {})[key] = scr;
      scr.userData.onClick = 'screen'; scr.userData.key = key; world.clickables.push(scr);
    });
    world.props.work = g;
  }

  // L4 — research: the dual pipeline as a hologram
  {
    const g = new THREE.Group(); g.position.set(5.9, levelY(4) + 1.2, ledgeZ(4) - 0.2); g.rotation.y = -0.15; g.scale.setScalar(0.6); pyr.add(g);
    { const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.22, 32), new THREE.MeshPhysicalMaterial({ color: 0x2a2d38, metalness: 0.8, roughness: 0.35 })); ped.position.set(5.9, levelY(4) + 0.11, ledgeZ(4) - 0.2); ped.castShadow = ped.receiveShadow = true; pyr.add(ped);
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.3, 32), glow(PAL.faience, 0.9)); lens.rotation.x = -Math.PI / 2; lens.position.set(5.9, levelY(4) + 0.225, ledgeZ(4) - 0.2); pyr.add(lens); }
    const nodeA = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.5, 0.5, 2, 0.06), glow(PAL.faience, 0.9)); nodeA.position.set(-1.9, 1.7, 0);
    const nodeB = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 16), glow(0x6f8cff, 0.9)); nodeB.position.set(-1.9, 0.3, 0);
    const fuse = new THREE.Mesh(new THREE.OctahedronGeometry(0.38), glow(PAL.gold, 1.0)); fuse.position.set(0.4, 1.0, 0);
    g.add(nodeA, nodeB, fuse);
    const cA = new THREE.CatmullRomCurve3([nodeA.position, new THREE.Vector3(-0.8, 1.8, 0.4), fuse.position]);
    const cB = new THREE.CatmullRomCurve3([nodeB.position, new THREE.Vector3(-0.8, 0.2, 0.4), fuse.position]);
    const tiers = [[0x2fd3c6, 0.35], [0xe9b44c, 0.6], [0xf08a3c, 0.85], [0xe0473a, 1.1]];
    const bars = tiers.map(([c, h], i) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.22, h, 0.22), glow(c, 0.85)); b.position.set(1.4 + i * 0.36, h / 2 + 0.1, 0); g.add(b); return b; });
    const out = new THREE.CatmullRomCurve3([fuse.position, new THREE.Vector3(1.2, 1.4, 0.2), new THREE.Vector3(1.9, 1.5, 0)]);
    const n = 22, geo = new THREE.SphereGeometry(0.05, 8, 6);
    const pa = new THREE.InstancedMesh(geo, glow(PAL.faience, 1.1), n), pb = new THREE.InstancedMesh(geo, glow(0x8fa6ff, 1.1), n), po = new THREE.InstancedMesh(geo, glow(PAL.gold, 1.1), n);
    g.add(pa, pb, po);
    for (const [txt, x, y] of [['XGBoost · sensors', -1.9, 2.25], ['Isolation Forest · traffic', -1.9, -0.25], ['Decision fusion', 0.4, 1.6], ['4-tier risk', 1.95, 1.55]]) {
      const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(textCanvas(txt, { w: 640, h: 120, font: '600 42px "Instrument Sans", sans-serif', radius: 60 })), transparent: true, toneMapped: false }));
      sp.material.map.colorSpace = THREE.SRGBColorSpace; sp.material.color.setScalar(0.8); sp.material.toneMapped = true; sp.scale.set(1.6, 0.3, 1); sp.position.set(x, y, 0.1); g.add(sp);
    }
    // holographic base disc
    const m = new THREE.Matrix4(), v = new THREE.Vector3();
    g.userData.threat = 0; let th = 0, phase = 0; const calm = new THREE.Color(0x8fa6ff).multiplyScalar(1.1), hot = new THREE.Color(0xff4a3b).multiplyScalar(1.5), fuseCalm = new THREE.Color(PAL.gold).multiplyScalar(1.0);
    up((t, dt) => {
      th += (g.userData.threat - th) * Math.min(1, dt * 4); phase += dt * (0.22 + th * 0.6);
      pb.material.color.copy(calm).lerp(hot, th); nodeB.material.color.copy(calm).lerp(hot, th); nodeB.scale.setScalar(1 + th * 0.5 + Math.sin(t * 12) * 0.1 * th);
      fuse.material.color.copy(fuseCalm).lerp(hot, th * 0.7);
      nodeA.rotation.set(t, t * 0.7, 0); fuse.rotation.y = t * 1.4; fuse.scale.setScalar(1 + Math.sin(t * 4) * 0.06);
      for (let i = 0; i < n; i++) {
        const u = (i / n + t * 0.22) % 1;
        cA.getPointAt(u, v); m.makeTranslation(v.x, v.y, v.z); pa.setMatrixAt(i, m);
        cB.getPointAt((i / n + phase) % 1, v); m.makeTranslation(v.x, v.y, v.z); pb.setMatrixAt(i, m);
        out.getPointAt(u, v); m.makeTranslation(v.x, v.y, v.z); po.setMatrixAt(i, m);
      }
      pa.instanceMatrix.needsUpdate = pb.instanceMatrix.needsUpdate = po.instanceMatrix.needsUpdate = true;
      bars.forEach((b, i) => { const on = th > i * 0.25 - 0.01; b.scale.y += ((on ? 1 + th * 0.6 : 0.25) + Math.sin(t * 2 + i) * 0.06 - b.scale.y) * 0.1; });
    });
    world.props.research = g;
  }

  // L5 — arena: ICPC balloons (click to pop) and a NASA rocket
  {
    const g = new THREE.Group(); g.position.set(-3.9, levelY(5), ledgeZ(5) - 0.45); pyr.add(g);
    const cols = [0xe0473a, 0x2fd3c6, 0xe9b44c, 0x6f8cff, 0xf6ead2];
    world.props.balloons = [];
    cols.forEach((c, i) => {
      const b = new THREE.Group(); b.position.set((i - 2) * 0.42, 0, (i % 2) * 0.45);
      const ball = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 24), new THREE.MeshPhysicalMaterial({ color: c, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.15, sheen: 0.4 })); ball.scale.y = 1.18; ball.position.y = 2.2 + (i % 3) * 0.35; ball.castShadow = true;
      const knot = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.1, 8), ball.material); knot.position.y = ball.position.y - 0.42; knot.rotation.x = Math.PI;
      const str = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, ball.position.y - 0.45, 4), std(0xf6ead2)); str.position.y = (ball.position.y - 0.45) / 2;
      b.add(ball, knot, str); g.add(b);
      ball.userData.onClick = 'balloon'; ball.userData.group = b; world.clickables.push(ball); world.props.balloons.push(b);
      const ph = i * 1.3; up((t) => { b.rotation.z = Math.sin(t * 1.2 + ph) * 0.06; b.rotation.x = Math.cos(t + ph) * 0.05; });
    });
    const rocket = new THREE.Group();
    const hull = new THREE.MeshPhysicalMaterial({ color: 0xf2efe8, metalness: 0.3, roughness: 0.35, clearcoat: 0.5 });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.6, 8, 16), hull); rocket.add(body);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.3, 16), new THREE.MeshPhysicalMaterial({ color: PAL.terracotta, roughness: 0.3, clearcoat: 0.6 })); nose.position.y = 0.55; rocket.add(nose);
    for (let k = 0; k < 3; k++) { const fin = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.22, 0.18), std(PAL.lapis, { roughness: 0.4 })); const a = (k / 3) * Math.PI * 2; fin.position.set(Math.cos(a) * 0.16, -0.3, Math.sin(a) * 0.16); fin.rotation.y = -a; rocket.add(fin); }
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.4, 12), glow(0xff9a45, 3)); flame.position.y = -0.62; flame.rotation.x = Math.PI; rocket.add(flame);
    pyr.add(rocket); world.props.rocket = rocket; rocket.userData.boost = 0;
    body.userData.onClick = 'rocket'; world.clickables.push(body);
    let a = 0;
    up((t, dt) => {
      rocket.userData.boost *= 0.985; a += dt * (0.45 + rocket.userData.boost * 3);
      const c = new THREE.Vector3(0, levelY(5) + 4.6, 0);
      rocket.position.set(c.x + Math.cos(a) * 9, c.y + Math.sin(t * 0.9) * 0.6, c.z + Math.sin(a) * 9);
      rocket.lookAt(c.x + Math.cos(a + 0.2) * 9, rocket.position.y, c.z + Math.sin(a + 0.2) * 9); rocket.rotateX(Math.PI / 2);
      flame.scale.y = 1 + Math.sin(t * 30) * 0.2 + rocket.userData.boost * 2;
    });
    world.props.arena = g;

    // Balloon Rush mini-game: balloons rise past the arena ledge, click to pop
    const pool = [], gameCols = [0xe0473a, 0x2fd3c6, 0xe9b44c, 0x6f8cff, 0xb48cff, 0xf6ead2, 0x52d273];
    const center = new THREE.Vector3(-2.9, levelY(5), ledgeZ(5) + 0.6);
    for (let i = 0; i < 14; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 18), new THREE.MeshPhysicalMaterial({ color: gameCols[i % gameCols.length], roughness: 0.25, clearcoat: 1, sheen: 0.4 }));
      b.scale.y = 1.18; b.visible = false; b.userData.onClick = 'gameBalloon'; pyr.add(b); pool.push(b); world.clickables.push(b);
    }
    const game = world.game = { active: false, score: 0, left: 0, best: 0, onEnd: null, onTick: null };
    const spawn = (b) => { b.position.set(center.x + (Math.random() - 0.5) * 6, center.y - 1.5 - Math.random() * 3, center.z + 1 + Math.random() * 2.5); b.userData.v = 0.9 + Math.random() * 1.4; b.userData.w = Math.random() * 6; b.visible = true; b.scale.set(1, 1.18, 1); };
    game.start = (sec = 15) => { game.active = true; game.score = 0; game.left = sec; game.endAt = performance.now() + sec * 1000; pool.forEach((b) => { spawn(b); b.position.y = center.y + 0.3 + Math.random() * 4.5; }); };
    game.hit = (b) => { if (!game.active || !b.visible) return false; game.score++; b.visible = false; setTimeout(() => game.active && spawn(b), 350); return true; };
    up((t, dt) => {
      if (!game.active) return;
      game.left = Math.max(0, (game.endAt - performance.now()) / 1000); game.onTick && game.onTick(game);
      for (const b of pool) { if (!b.visible) continue; b.position.y += b.userData.v * dt; b.position.x += Math.sin(t * 1.5 + b.userData.w) * dt * 0.3; if (b.position.y > center.y + 7) spawn(b); }
      if (game.left <= 0) { game.active = false; pool.forEach((b) => (b.visible = false)); game.best = Math.max(game.best, game.score); game.onEnd && game.onEnd(game); }
    });
  }

  // L6 — the beam the capstone fires when a request is sent
  {
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 1.2, 160, 32, 1, true), new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.gold).multiplyScalar(2.2), transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false, toneMapped: false, blending: THREE.AdditiveBlending }));
    beam.position.set(0, 6 * H + 3 + 80, -0.6); pyr.add(beam);
    const rings = [0, 1, 2].map(() => { const r = new THREE.Mesh(new THREE.TorusGeometry(1, 0.04, 8, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.faience).multiplyScalar(2.5), transparent: true, opacity: 0, toneMapped: false })); r.rotation.x = Math.PI / 2; r.position.set(0, 6 * H + 0.2, -0.6); pyr.add(r); return r; });
    world.props.beam = beam; world.props.rings = rings;
  }
}

