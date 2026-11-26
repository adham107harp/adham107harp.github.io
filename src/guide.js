// Mini-Adham: a cel-shaded chibi guide built from primitives and animated in code.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { toon, S, H, FLIGHT, levelY, PAL } from './world.js';

const SKIN = 0xd9a47c, HAIR = 0x1b1411, SUIT = 0x1c2a5e, SHIRT = 0xf4efe6, TIE = 0x14193a, PANTS = 0x18203f, SHOE = 0xf2ece2;
const OUT = new THREE.MeshBasicMaterial({ color: 0x0a0d1c, side: THREE.BackSide });

function part(geo, color, outline = 1.06, extra) {
  const m = new THREE.Mesh(geo, toon(color, extra)); m.castShadow = true;
  if (outline) { const o = new THREE.Mesh(geo, OUT); o.scale.setScalar(outline); m.add(o); }
  return m;
}

export function createGuide() {
  const root = new THREE.Group();   // feet at y=0, faces +z
  const body = new THREE.Group(); root.add(body);

  // legs
  const legs = [-1, 1].map((s) => {
    const hip = new THREE.Group(); hip.position.set(0.12 * s, 0.6, 0); body.add(hip);
    const leg = part(new THREE.CapsuleGeometry(0.085, 0.36, 4, 10), PANTS); leg.position.y = -0.27; hip.add(leg);
    const shoe = part(new RoundedBoxGeometry(0.17, 0.11, 0.28, 2, 0.05), SHOE); shoe.position.set(0, -0.53, 0.05); hip.add(shoe);
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.03, 0.28), toon(0x2b2f3d)); sole.position.set(0, -0.585, 0.05); hip.add(sole);
    return hip;
  });

  // torso: blazer, shirt, tie
  const torso = new THREE.Group(); torso.position.y = 0.6; body.add(torso);
  const jacket = part(new RoundedBoxGeometry(0.5, 0.5, 0.3, 3, 0.1), SUIT); jacket.position.y = 0.26; torso.add(jacket);
  const shirt = new THREE.Mesh(new THREE.CylinderGeometry(0.0, 0.11, 0.26, 3), toon(SHIRT)); shirt.rotation.set(Math.PI, Math.PI / 6, 0); shirt.scale.z = 0.25; shirt.position.set(0, 0.36, 0.145); torso.add(shirt);
  const tie = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.22, 0.02), toon(TIE)); tie.position.set(0, 0.32, 0.158); torso.add(tie);
  const knot = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.045, 0.03), toon(TIE)); knot.position.set(0, 0.46, 0.155); torso.add(knot);
  const pin = new THREE.Mesh(new THREE.CircleGeometry(0.025, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.gold).multiplyScalar(1.6), toneMapped: false })); pin.position.set(-0.14, 0.4, 0.152); torso.add(pin);
  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, 0.28), toon(0x101426)); belt.position.y = 0.03; torso.add(belt);

  // arms (pivot at shoulder)
  const arms = [-1, 1].map((s) => {
    const sh = new THREE.Group(); sh.position.set(0.3 * s, 0.46, 0); torso.add(sh);
    const upper = part(new THREE.CapsuleGeometry(0.072, 0.3, 4, 10), SUIT); upper.position.y = -0.18; sh.add(upper);
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.066, 0.066, 0.04, 10), toon(SHIRT)); cuff.position.y = -0.37; sh.add(cuff);
    const hand = part(new THREE.SphereGeometry(0.07, 14, 10), SKIN); hand.position.y = -0.43; sh.add(hand);
    return sh;
  });

  // head
  const neck = new THREE.Group(); neck.position.y = 1.12; body.add(neck);
  const neckM = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 10), toon(SKIN)); neck.add(neckM);
  const head = new THREE.Group(); head.position.y = 0.06; neck.add(head);
  const skull = part(new THREE.SphereGeometry(0.35, 32, 24), SKIN, 1.04); skull.scale.set(1, 0.97, 0.94); skull.position.y = 0.34; head.add(skull);
  for (const s of [-1, 1]) { const ear = part(new THREE.SphereGeometry(0.075, 12, 10), SKIN, 1.08); ear.scale.set(0.6, 1, 0.8); ear.position.set(0.34 * s, 0.33, 0); head.add(ear); }
  // hair: cap + a voluminous front sweep
  const cap = part(new THREE.SphereGeometry(0.37, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.52), HAIR, 1.03); cap.scale.set(1.02, 1.0, 1.0); cap.position.set(0, 0.36, -0.03); cap.rotation.x = -0.32; head.add(cap);
  const tufts = [[-0.17, 0.62, 0.17, 0.15], [0.0, 0.67, 0.19, 0.17], [0.17, 0.62, 0.15, 0.15], [0.09, 0.66, 0.06, 0.16], [-0.09, 0.66, 0.06, 0.16], [0.26, 0.5, 0.12, 0.12], [-0.26, 0.5, 0.12, 0.12]];
  for (const [x, y, z, r] of tufts) { const t = part(new THREE.SphereGeometry(r, 16, 12), HAIR, 1.05); t.position.set(x, y, z); t.scale.set(1.1, 0.75, 1); head.add(t); }
  for (const s of [-1, 1]) { const sb = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.07), toon(HAIR)); sb.position.set(0.325 * s, 0.32, 0.08); head.add(sb); }
  // face
  const face = new THREE.Group(); face.position.set(0, 0.34, 0.305); head.add(face);
  const eyes = [-1, 1].map((s) => {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.046, 14, 10), new THREE.MeshBasicMaterial({ color: 0x120d0b })); e.scale.set(0.95, 1.3, 0.55); e.position.set(0.12 * s, 0.02, 0.02);
    const hl = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff })); hl.position.set(0.018, 0.022, 0.04); e.add(hl);
    face.add(e); return e;
  });
  const brows = [-1, 1].map((s) => { const b = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.022, 0.02), new THREE.MeshBasicMaterial({ color: HAIR })); b.position.set(0.12 * s, 0.11, 0.02); face.add(b); return b; });
  const smile = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.012, 6, 16, Math.PI), new THREE.MeshBasicMaterial({ color: 0x4a1e16 })); smile.rotation.z = Math.PI; smile.position.set(0, -0.1, 0.01); face.add(smile);
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.05, 14, 10), new THREE.MeshBasicMaterial({ color: 0x4a1e16 })); mouth.scale.set(1, 0.1, 0.4); mouth.position.set(0, -0.12, 0.0); face.add(mouth);
  const blush = [-1, 1].map((s) => { const b = new THREE.Mesh(new THREE.CircleGeometry(0.04, 12), new THREE.MeshBasicMaterial({ color: 0xe0806a, transparent: true, opacity: 0.35 })); b.position.set(0.2 * s, -0.04, 0.005); b.rotation.y = 0.35 * s; face.add(b); return b; });

  // soft spot light so he always reads against the night
  const key = new THREE.PointLight(0xffe6c4, 2.2, 4.5, 1.5); key.position.set(0.6, 2.0, 1.4); root.add(key);
  const shadowBlob = new THREE.Mesh(new THREE.CircleGeometry(0.42, 24), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.28, depthWrite: false }));
  shadowBlob.rotation.x = -Math.PI / 2; shadowBlob.position.y = 0.02; root.add(shadowBlob);

  root.scale.setScalar(1.15);

  // ---- animation state ----
  const st = { mode: 'idle', modeT: 0, talk: 0, walkPhase: 0, speed: 0, blinkT: 2, look: new THREE.Vector2(), yaw: 0, spin: 0, jump: 0 };
  const lerp = THREE.MathUtils.lerp;

  function setMode(m) { if (st.mode !== m) { st.mode = m; st.modeT = 0; } }
  function poke() { st.spin = Math.PI * 2; st.jump = 1; setMode('celebrate'); }

  function update(dt, t) {
    st.modeT += dt;
    const walk = Math.min(st.speed / 2.4, 1);
    st.walkPhase += dt * (4 + st.speed * 3.2);
    const w = Math.sin(st.walkPhase);
    // legs + arms swing when walking
    legs[0].rotation.x = lerp(legs[0].rotation.x, w * 0.75 * walk, 0.3);
    legs[1].rotation.x = lerp(legs[1].rotation.x, -w * 0.75 * walk, 0.3);
    let la = { x: -w * 0.6 * walk, z: -0.08 }, ra = { x: w * 0.6 * walk, z: 0.08 };
    const breathe = Math.sin(t * 2.2) * 0.012;
    let bodyY = Math.abs(Math.cos(st.walkPhase)) * 0.06 * walk + breathe;
    let headTilt = Math.sin(t * 1.3) * 0.04;
    if (st.mode === 'wave') {
      ra = { x: -0.2, z: 2.55 + Math.sin(t * 9) * 0.32 }; headTilt = 0.12;
      if (st.modeT > 2.4) setMode('idle');
    } else if (st.mode === 'point') {
      ra = { x: -1.35, z: 0.45 }; la = { x: 0.1, z: -0.12 };
    } else if (st.mode === 'type') {
      la = { x: -1.1, z: 0.25 + Math.sin(t * 18) * 0.05 }; ra = { x: -1.1, z: -0.25 + Math.cos(t * 17) * 0.05 };
    } else if (st.mode === 'celebrate') {
      la = { x: 0, z: -2.6 - Math.sin(t * 12) * 0.2 }; ra = { x: 0, z: 2.6 + Math.sin(t * 12) * 0.2 };
      bodyY += Math.abs(Math.sin(st.modeT * 7)) * 0.25 * Math.max(0, 1 - st.modeT / 2);
      if (st.modeT > 2.2) setMode('idle');
    } else if (st.mode === 'think') {
      ra = { x: -2.1, z: -0.9 }; headTilt = -0.15;
    }
    arms[0].rotation.x = lerp(arms[0].rotation.x, la.x, 0.18); arms[0].rotation.z = lerp(arms[0].rotation.z, la.z, 0.18);
    arms[1].rotation.x = lerp(arms[1].rotation.x, ra.x, 0.18); arms[1].rotation.z = lerp(arms[1].rotation.z, ra.z, 0.18);
    body.position.y = bodyY;
    torso.scale.y = 1 + breathe;
    // head follows the cursor a little
    head.rotation.y = lerp(head.rotation.y, st.look.x * 0.5, 0.08);
    head.rotation.x = lerp(head.rotation.x, -st.look.y * 0.25 + Math.max(0, st.talk) * Math.sin(t * 9) * 0.03, 0.08);
    head.rotation.z = lerp(head.rotation.z, headTilt, 0.06);
    // blink
    st.blinkT -= dt; let b = 1;
    if (st.blinkT < 0.12) b = Math.abs(st.blinkT - 0.06) / 0.06;
    if (st.blinkT < 0) st.blinkT = 2 + Math.random() * 3;
    eyes.forEach((e) => (e.scale.y = 1.3 * Math.max(0.08, b)));
    // talk
    const open = st.talk > 0 ? (0.5 + 0.5 * Math.sin(t * 22)) * (0.6 + 0.4 * Math.sin(t * 7.1)) : 0;
    mouth.scale.y = lerp(mouth.scale.y, 0.1 + open * 0.9, 0.5); smile.visible = open < 0.25;
    brows.forEach((br, i) => { br.position.y = 0.11 + (st.mode === 'celebrate' || st.mode === 'wave' ? 0.025 : 0) + open * 0.01; br.rotation.z = (i ? -1 : 1) * (st.mode === 'think' ? 0.25 : 0.05); });
    // spin + hop on poke
    if (st.spin > 0) { const d = Math.min(st.spin, dt * 12); st.spin -= d; body.rotation.y += d; } else body.rotation.y = lerp(body.rotation.y, 0, 0.2);
  }

  return { root, head, st, update, setMode, poke, headAnchor: () => head.localToWorld(new THREE.Vector3(0, 0.9, 0)) };
}

// ---------- where mini-Adham stands, and how he climbs ----------
const STAND = [
  new THREE.Vector3(2.8, 0, S[0] / 2 + FLIGHT + 2.6),
  new THREE.Vector3(-3.3, 0, S[1] / 2 + 1.0),
  new THREE.Vector3(3.3, 0, S[2] / 2 + 1.0),
  new THREE.Vector3(-3.3, 0, S[3] / 2 + 1.0),
  new THREE.Vector3(3.3, 0, S[4] / 2 + 1.0),
  new THREE.Vector3(-2.9, 0, S[5] / 2 + 1.0),
  new THREE.Vector3(0, 0, 2.05),
];
export const STAND_COUNT = STAND.length;

const RISE = H / 8, RUN = FLIGHT / 8;
export function heightAt(x, z) {
  let h = 0;
  for (let i = 0; i < S.length; i++) if (Math.abs(x) <= S[i] / 2 + 0.05 && Math.abs(z) <= S[i] / 2 + 0.05) h = Math.max(h, (i + 1) * H);
  if (Math.abs(x) <= 1.3) {
    for (let L = 0; L < S.length; L++) {
      const z0 = S[L] / 2, z1 = z0 + FLIGHT;
      if (z >= z0 && z <= z1) h = Math.max(h, levelY(L) + Math.min(8, Math.ceil((z1 - z) / RUN + 1e-4)) * RISE);
    }
  }
  return h;
}

// xz waypoints between stand L and stand L+1, with cumulative lengths
const SEGS = [];
for (let L = 0; L < STAND.length - 1; L++) {
  const a = STAND[L], b = STAND[L + 1];
  const pts = [new THREE.Vector2(a.x, a.z), new THREE.Vector2(0, S[L] / 2 + FLIGHT + 0.35), new THREE.Vector2(0, S[L] / 2 - 0.4), new THREE.Vector2(b.x, b.z)];
  const len = [0]; for (let i = 1; i < pts.length; i++) len.push(len[i - 1] + pts[i].distanceTo(pts[i - 1]));
  SEGS.push({ pts, len });
}

// q in [0, 6] -> xz position on the climb + heading
export function guideXZ(q, out = new THREE.Vector2()) {
  const L = Math.min(Math.floor(q), SEGS.length - 1), f = THREE.MathUtils.clamp(q - L, 0, 1);
  if (q >= STAND.length - 1) { out.set(STAND[STAND.length - 1].x, STAND[STAND.length - 1].z); return out; }
  const s = SEGS[L], d = f * s.len[s.len.length - 1];
  let i = 1; while (i < s.len.length - 1 && s.len[i] < d) i++;
  const u = (d - s.len[i - 1]) / (s.len[i] - s.len[i - 1] || 1);
  return out.copy(s.pts[i - 1]).lerp(s.pts[i], u);
}
export const standPoint = (L) => { const p = STAND[L].clone(); p.y = heightAt(p.x, p.z); return p; };
