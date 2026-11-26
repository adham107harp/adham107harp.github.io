// Mini-Adham: a stylised guide with physical materials, a painted expressive face and moods.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { S, H, FLIGHT, levelY, PAL } from './world.js';

const SKIN = 0xd9a47c, HAIR = 0x1b1411, SUIT = 0x1c2a5e, LAPEL = 0x26387d, SHIRT = 0xf4efe6, TIE = 0x7a1f2b, PANTS = 0x18203f, SHOE = 0xf2ece2;
const MATS = {};
function mat(color) {
  if (MATS[color]) return MATS[color];
  const base = { color, roughness: 0.7 };
  if (color === SKIN) Object.assign(base, { roughness: 0.5, sheen: 0.6, sheenColor: new THREE.Color(0xff9a7a), sheenRoughness: 0.5 });
  else if (color === SUIT || color === PANTS) Object.assign(base, { roughness: 0.82, sheen: 1, sheenColor: new THREE.Color(0x5566aa), sheenRoughness: 0.55 });
  else if (color === LAPEL) Object.assign(base, { roughness: 0.3, clearcoat: 0.6, sheen: 0.6, sheenColor: new THREE.Color(0x8899ff) });
  else if (color === HAIR) Object.assign(base, { roughness: 0.5, sheen: 1, sheenColor: new THREE.Color(0x8a6450), sheenRoughness: 0.4, clearcoat: 0.15, clearcoatRoughness: 0.5 });
  else if (color === SHOE) Object.assign(base, { roughness: 0.3, clearcoat: 0.8 });
  else if (color === SHIRT) Object.assign(base, { roughness: 0.6, sheen: 0.5, sheenColor: new THREE.Color(0xffffff) });
  else if (color === TIE) Object.assign(base, { roughness: 0.32, sheen: 0.9, sheenColor: new THREE.Color(0xff6b6b) });
  return (MATS[color] = new THREE.MeshPhysicalMaterial(base));
}
function part(geo, color) { const m = new THREE.Mesh(geo, mat(color)); m.castShadow = true; m.receiveShadow = true; return m; }
function radial(c0, c1, s = 64) {
  const c = document.createElement('canvas'); c.width = c.height = s; const g = c.getContext('2d');
  const gr = g.createRadialGradient(s / 2, s / 2, 1, s / 2, s / 2, s / 2); gr.addColorStop(0, c0); gr.addColorStop(1, c1); g.fillStyle = gr; g.fillRect(0, 0, s, s);
  return new THREE.CanvasTexture(c);
}

// ---------- moods ----------
export const MOODS = {
  happy:     { eyes: 'normal', brows: 'soft',  mouth: 'smile', blush: 0.3, aura: 0xe9b44c, emote: null },
  excited:   { eyes: 'star',   brows: 'up',    mouth: 'grin',  blush: 0.55, aura: 0xffd166, emote: 'sparkle' },
  focused:   { eyes: 'normal', brows: 'determined', mouth: 'smirk', blush: 0.1, aura: 0x2fd3c6, emote: null },
  thinking:  { eyes: 'normal', brows: 'raised', mouth: 'hmm', blush: 0.1, aura: 0x8fa6ff, emote: 'question', look: [0.6, 0.7] },
  cool:      { eyes: 'closed', brows: 'soft',  mouth: 'smirk', blush: 0.15, aura: 0xe9b44c, emote: 'sparkle', glasses: true },
  surprised: { eyes: 'wide',   brows: 'up',    mouth: 'o',     blush: 0.2, aura: 0xffffff, emote: 'bang' },
  shy:       { eyes: 'closed', brows: 'worried', mouth: 'wavy', blush: 1, aura: 0xff8fb1, emote: 'sweat' },
  annoyed:   { eyes: 'angry',  brows: 'angry', mouth: 'flat',  blush: 0.1, aura: 0xe0473a, emote: 'anger' },
  sleepy:    { eyes: 'half',   brows: 'soft',  mouth: 'small', blush: 0.15, aura: 0x6f5fd0, emote: 'zzz' },
  dizzy:     { eyes: 'spiral', brows: 'worried', mouth: 'wavy', blush: 0.3, aura: 0xb48cff, emote: 'swirl' },
  love:      { eyes: 'heart',  brows: 'up',    mouth: 'grin',  blush: 0.85, aura: 0xff6f91, emote: 'heart' },
  worried:   { eyes: 'normal', brows: 'worried', mouth: 'wavy', blush: 0.1, aura: 0xf08a3c, emote: 'sweat' },
  vibing:    { eyes: 'closed', brows: 'soft',  mouth: 'smile', blush: 0.35, aura: 0x2fd3c6, emote: 'note' },
};

// ---------- face painter (canvas decal on the front of the head) ----------
const FW = 768, FH = 512, EL = { x: 226, y: 276 }, ER = { x: 542, y: 276 }, MO = { x: 384, y: 400 };
function star(g, x, y, r, n = 4) { g.beginPath(); for (let i = 0; i < n * 2; i++) { const a = (i / (n * 2)) * Math.PI * 2 - Math.PI / 2, rr = i % 2 ? r * 0.38 : r; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.closePath(); g.fill(); }
function heart(g, x, y, s) { g.beginPath(); g.moveTo(x, y + s * 0.9); g.bezierCurveTo(x - s * 1.6, y - s * 0.1, x - s * 0.6, y - s * 1.2, x, y - s * 0.35); g.bezierCurveTo(x + s * 0.6, y - s * 1.2, x + s * 1.6, y - s * 0.1, x, y + s * 0.9); g.fill(); }

function paintFace(g, f) {
  const M = MOODS[f.mood] || MOODS.happy;
  g.clearRect(0, 0, FW, FH);
  // blush
  const bl = M.blush * (f.blushBoost || 1);
  if (bl > 0.02) for (const x of [EL.x - 46, ER.x + 46]) { const gr = g.createRadialGradient(x, 352, 4, x, 352, 64); gr.addColorStop(0, `rgba(235,110,100,${0.55 * bl})`); gr.addColorStop(1, 'rgba(235,110,100,0)'); g.fillStyle = gr; g.fillRect(x - 70, 282, 140, 140); }
  const ink = '#1d120c', iris = '#5b3a22';
  const open = f.blink;
  const lx = (M.look ? M.look[0] : f.lx) * 12, ly = (M.look ? -M.look[1] : -f.ly) * 10;
  for (const [i, E] of [[0, EL], [1, ER]]) {
    let style = M.eyes; if (open < 0.25 && style !== 'closed' && style !== 'spiral' && style !== 'heart') style = 'blink';
    g.save();
    if (style === 'normal' || style === 'star' || style === 'half' || style === 'angry' || style === 'wide') {
      const rx = style === 'wide' ? 64 : 60, ry = (style === 'wide' ? 70 : 76) * Math.max(open, 0.25);
      if (style === 'half') { g.beginPath(); g.rect(E.x - 70, E.y - 4, 140, 120); g.clip(); }
      if (style === 'angry') { g.beginPath(); const s = i ? -1 : 1; g.moveTo(E.x - 80, E.y - 80 + (s > 0 ? 0 : 40)); g.lineTo(E.x + 80, E.y - 80 + (s > 0 ? 40 : 0)); g.lineTo(E.x + 80, E.y + 90); g.lineTo(E.x - 80, E.y + 90); g.closePath(); g.clip(); }
      g.fillStyle = ink; g.beginPath(); g.ellipse(E.x, E.y, rx, ry, 0, 0, 7); g.fill();
      if (style !== 'wide') { g.fillStyle = iris; g.beginPath(); g.ellipse(E.x + lx, E.y + ly + 10, rx * 0.62, ry * 0.62, 0, 0, 7); g.fill(); g.fillStyle = ink; g.beginPath(); g.ellipse(E.x + lx, E.y + ly + 10, rx * 0.34, ry * 0.36, 0, 0, 7); g.fill(); }
      else { g.fillStyle = '#fff'; g.beginPath(); g.ellipse(E.x, E.y, rx * 0.78, ry * 0.8, 0, 0, 7); g.fill(); g.fillStyle = ink; g.beginPath(); g.arc(E.x + lx * 0.6, E.y + ly * 0.6, 12, 0, 7); g.fill(); }
      g.fillStyle = '#fff';
      if (style === 'star') { star(g, E.x - 10 + lx * 0.3, E.y - 14 + ly * 0.3, 26); star(g, E.x + 18, E.y + 22, 10); }
      else if (style !== 'wide') { g.beginPath(); g.arc(E.x - 17 + lx * 0.4, E.y - 24 + ly * 0.4, 16, 0, 7); g.fill(); g.beginPath(); g.arc(E.x + 19 + lx * 0.4, E.y + 22 + ly * 0.4, 7, 0, 7); g.fill(); }
      // upper lid line
      g.restore(); g.save();
      g.strokeStyle = ink; g.lineWidth = 9; g.lineCap = 'round';
      if (style === 'half') { g.beginPath(); g.moveTo(E.x - 50, E.y - 4); g.lineTo(E.x + 50, E.y - 4); g.stroke(); }
    } else if (style === 'closed' || style === 'blink') {
      g.strokeStyle = ink; g.lineWidth = 12; g.lineCap = 'round'; g.beginPath();
      if (style === 'closed') g.arc(E.x, E.y + 18, 38, Math.PI * 1.15, Math.PI * 1.85); else g.arc(E.x, E.y - 22, 40, Math.PI * 0.2, Math.PI * 0.8);
      g.stroke();
    } else if (style === 'spiral') {
      g.strokeStyle = ink; g.lineWidth = 7; g.beginPath(); const sp = f.t * 6 * (i ? -1 : 1);
      for (let a = 0; a < Math.PI * 6; a += 0.2) { const r = a * 6.5; g.lineTo(E.x + Math.cos(a + sp) * r, E.y + Math.sin(a + sp) * r); } g.stroke();
    } else if (style === 'heart') {
      g.fillStyle = '#e8325a'; heart(g, E.x, E.y + 4, 34 + Math.sin(f.t * 8) * 3); g.fillStyle = 'rgba(255,255,255,.8)'; g.beginPath(); g.arc(E.x - 14, E.y - 10, 8, 0, 7); g.fill();
    }
    g.restore();
  }
  // brows
  g.strokeStyle = '#1b1411'; g.lineWidth = 18; g.lineCap = 'round';
  for (const [i, E] of [[0, EL], [1, ER]]) {
    const s = i ? 1 : -1; let y0 = E.y - 100, inner = 0, outer = 0;
    switch (M.brows) {
      case 'up': y0 -= 14; break;
      case 'determined': inner = 14; outer = -4; break;
      case 'angry': inner = 24; outer = -10; break;
      case 'worried': inner = -16; outer = 8; break;
      case 'raised': if (i) y0 -= 22; else inner = 6; break;
    }
    const xi = E.x - s * 34, xo = E.x + s * 40;
    g.beginPath(); g.moveTo(xi, y0 + inner); g.quadraticCurveTo((xi + xo) / 2, y0 - 10 + (inner + outer) / 2, xo, y0 + outer + 6); g.stroke();
  }
  // mouth
  g.lineCap = 'round'; g.lineJoin = 'round';
  const talk = f.mouth, mx = MO.x, my = MO.y;
  const fillMouth = () => { g.fillStyle = '#5a1a16'; g.fill(); };
  if (talk > 0.08) {
    g.beginPath(); g.ellipse(mx, my, 30 + talk * 12, 10 + talk * 30, 0, 0, 7); fillMouth();
    g.fillStyle = '#e0705f'; g.beginPath(); g.ellipse(mx, my + 8 + talk * 14, 18 + talk * 6, 6 + talk * 9, 0, 0, Math.PI); g.fill();
  } else {
    g.strokeStyle = '#4a1a14'; g.lineWidth = 10;
    switch (M.mouth) {
      case 'smile': g.beginPath(); g.arc(mx, my - 26, 40, Math.PI * 0.2, Math.PI * 0.8); g.stroke(); break;
      case 'grin': g.beginPath(); g.moveTo(mx - 52, my - 12); g.quadraticCurveTo(mx, my - 6, mx + 52, my - 12); g.quadraticCurveTo(mx + 40, my + 46, mx, my + 46); g.quadraticCurveTo(mx - 40, my + 46, mx - 52, my - 12); fillMouth();
        g.fillStyle = '#fff'; g.fillRect(mx - 38, my - 9, 76, 12); g.fillStyle = '#e0705f'; g.beginPath(); g.ellipse(mx, my + 34, 22, 10, 0, Math.PI, 0); g.fill(); break;
      case 'smirk': g.beginPath(); g.moveTo(mx - 34, my + 2); g.quadraticCurveTo(mx + 6, my + 16, mx + 40, my - 16); g.stroke(); break;
      case 'hmm': g.beginPath(); g.moveTo(mx - 26, my + 6); g.lineTo(mx + 24, my - 2); g.stroke(); break;
      case 'o': g.beginPath(); g.ellipse(mx, my + 4, 18, 24, 0, 0, 7); fillMouth(); break;
      case 'small': g.beginPath(); g.ellipse(mx, my + 2, 10, 8, 0, 0, 7); fillMouth(); break;
      case 'flat': g.beginPath(); g.moveTo(mx - 30, my + 4); g.lineTo(mx + 30, my + 4); g.stroke(); break;
      case 'wavy': g.beginPath(); for (let x = -40; x <= 40; x += 4) g.lineTo(mx + x, my + 4 + Math.sin(x * 0.16 + f.t * 6) * 7); g.stroke(); break;
    }
  }
}

// ---------- emotes ----------
function emoteCanvas(kind) {
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  g.translate(64, 64); g.lineCap = 'round'; g.lineJoin = 'round';
  const bubble = () => { g.fillStyle = '#fff7e6'; g.beginPath(); g.arc(0, 0, 50, 0, 7); g.fill(); g.strokeStyle = 'rgba(26,21,48,.25)'; g.lineWidth = 4; g.stroke(); };
  switch (kind) {
    case 'bang': bubble(); g.fillStyle = '#e0473a'; g.font = '900 72px Unbounded, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('!', 0, 4); break;
    case 'question': bubble(); g.fillStyle = '#1d3fbf'; g.font = '900 66px Unbounded, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', 0, 4); break;
    case 'heart': g.fillStyle = '#ff4d6d'; heart(g, 0, 6, 40); g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.arc(-18, -12, 9, 0, 7); g.fill(); break;
    case 'sparkle': g.fillStyle = '#ffd166'; star(g, -8, 0, 44); g.fillStyle = '#fff3c4'; star(g, 34, -30, 16); star(g, 30, 34, 12); break;
    case 'zzz': g.fillStyle = '#c9b8ff'; g.font = '900 44px Unbounded, sans-serif'; g.fillText('z', -40, 30); g.font = '900 34px Unbounded, sans-serif'; g.fillText('z', -6, 0); g.font = '900 26px Unbounded, sans-serif'; g.fillText('z', 22, -24); break;
    case 'anger': g.strokeStyle = '#e0473a'; g.lineWidth = 11; for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) { g.beginPath(); g.moveTo(sx * 10, sy * 34); g.quadraticCurveTo(sx * 10, sy * 10, sx * 34, sy * 10); g.stroke(); } break;
    case 'sweat': g.fillStyle = '#7fc8ff'; g.beginPath(); g.moveTo(0, -44); g.quadraticCurveTo(34, 10, 0, 40); g.quadraticCurveTo(-34, 10, 0, -44); g.fill(); g.fillStyle = 'rgba(255,255,255,.7)'; g.beginPath(); g.ellipse(-8, 12, 6, 12, 0.3, 0, 7); g.fill(); break;
    case 'swirl': g.strokeStyle = '#b48cff'; g.lineWidth = 8; g.beginPath(); for (let a = 0; a < Math.PI * 5; a += 0.15) g.lineTo(Math.cos(a) * a * 3, Math.sin(a) * a * 3); g.stroke(); break;
    case 'note': g.fillStyle = '#2fd3c6'; g.beginPath(); g.ellipse(-16, 26, 18, 13, -0.4, 0, 7); g.fill(); g.beginPath(); g.ellipse(26, 14, 18, 13, -0.4, 0, 7); g.fill(); g.fillRect(-2, -38, 9, 64); g.fillRect(40, -50, 9, 64); g.beginPath(); g.moveTo(-2, -38); g.lineTo(49, -50); g.lineTo(49, -34); g.lineTo(-2, -22); g.fill(); break;
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export function createGuide() {
  const root = new THREE.Group();   // feet at y=0, faces +z
  const body = new THREE.Group(); root.add(body);

  // legs
  const legs = [-1, 1].map((s) => {
    const hip = new THREE.Group(); hip.position.set(0.12 * s, 0.72, 0); body.add(hip);
    const leg = part(new THREE.CapsuleGeometry(0.085, 0.48, 8, 20), PANTS); leg.position.y = -0.33; hip.add(leg);
    const shoe = part(new RoundedBoxGeometry(0.18, 0.12, 0.3, 3, 0.055), SHOE); shoe.position.set(0, -0.65, 0.05); hip.add(shoe);
    const sole = new THREE.Mesh(new RoundedBoxGeometry(0.185, 0.035, 0.305, 1, 0.015), mat(0x2b2f3d)); sole.position.set(0, -0.705, 0.05); hip.add(sole);
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.19, 0.02, 0.12), mat(TIE)); stripe.position.set(0, -0.64, 0.0); hip.add(stripe);
    return hip;
  });

  // torso: blazer with lapels, shirt, tie, pocket square, buttons
  const torso = new THREE.Group(); torso.position.y = 0.72; body.add(torso);
  const jacket = part(new RoundedBoxGeometry(0.52, 0.5, 0.31, 5, 0.11), SUIT); jacket.position.y = 0.26; torso.add(jacket);
  const shirt = new THREE.Mesh(new THREE.CylinderGeometry(0.0, 0.09, 0.22, 3), mat(SHIRT)); shirt.rotation.set(Math.PI, Math.PI / 6, 0); shirt.scale.z = 0.25; shirt.position.set(0, 0.4, 0.15); torso.add(shirt);
  for (const s of [-1, 1]) { const lap = new THREE.Mesh(new RoundedBoxGeometry(0.055, 0.3, 0.02, 1, 0.008), mat(LAPEL)); lap.position.set(s * 0.075, 0.37, 0.162); lap.rotation.z = s * 0.38; torso.add(lap); }
  for (const s of [-1, 1]) { const cp = new THREE.Mesh(new THREE.ConeGeometry(0.028, 0.05, 3), mat(SHIRT)); cp.position.set(s * 0.04, 0.475, 0.158); cp.rotation.set(0, 0, Math.PI + s * 0.5); cp.scale.z = 0.3; torso.add(cp); }
  const goldM = new THREE.MeshPhysicalMaterial({ color: PAL.gold, metalness: 1, roughness: 0.25 });
  for (const y of [0.13]) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.016, 12, 8), goldM); b.position.set(0, y, 0.16); torso.add(b); }
  const pocket = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.05, 3), new THREE.MeshPhysicalMaterial({ color: PAL.gold, roughness: 0.35, sheen: 1 })); pocket.position.set(-0.16, 0.405, 0.158); pocket.rotation.z = Math.PI; pocket.scale.z = 0.3; torso.add(pocket);
  const belt = new THREE.Mesh(new THREE.BoxGeometry(0.47, 0.05, 0.29), mat(0x101426)); belt.position.y = 0.03; torso.add(belt);

  // arms (pivot at shoulder)
  const arms = [-1, 1].map((s) => {
    const sh = new THREE.Group(); sh.position.set(0.31 * s, 0.46, 0); torso.add(sh);
    const upper = part(new THREE.CapsuleGeometry(0.074, 0.3, 8, 20), SUIT); upper.position.y = -0.18; sh.add(upper);
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.068, 0.068, 0.04, 14), mat(SHIRT)); cuff.position.y = -0.37; sh.add(cuff);
    const hand = part(new THREE.SphereGeometry(0.072, 20, 14), SKIN); hand.position.y = -0.43; hand.scale.set(1, 1.08, 0.9); sh.add(hand);
    if (s < 0) { const watch = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.014, 8, 24), goldM); watch.rotation.x = Math.PI / 2; watch.position.y = -0.355; sh.add(watch); }
    const thumb = part(new THREE.CapsuleGeometry(0.022, 0.04, 4, 8), SKIN); thumb.position.set(-s * 0.05, -0.41, 0.04); thumb.rotation.z = s * 0.6; sh.add(thumb);
    return sh;
  });

  // head
  const neck = new THREE.Group(); neck.position.y = 1.24; body.add(neck);
  neck.add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 0.1, 14), mat(SKIN)));
  const collar = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.022, 8, 20), mat(SHIRT)); collar.rotation.x = Math.PI / 2; collar.position.y = -0.03; neck.add(collar);
  const head = new THREE.Group(); head.position.y = 0.06; neck.add(head);
  const skull = part(new THREE.SphereGeometry(0.35, 48, 36), SKIN); skull.scale.set(1, 0.97, 0.94); skull.position.y = 0.34; head.add(skull);
  for (const s of [-1, 1]) { const ear = part(new THREE.SphereGeometry(0.075, 16, 12), SKIN); ear.scale.set(0.6, 1, 0.8); ear.position.set(0.34 * s, 0.33, 0); head.add(ear); }
  const nose = part(new THREE.SphereGeometry(0.03, 16, 12), SKIN); nose.position.set(0, 0.31, 0.33); nose.scale.set(1, 0.8, 0.9); head.add(nose);

  // painted face decal
  const fc = document.createElement('canvas'); fc.width = FW; fc.height = FH; const fg = fc.getContext('2d');
  const faceTex = new THREE.CanvasTexture(fc); faceTex.colorSpace = THREE.SRGBColorSpace; faceTex.anisotropy = 8;
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.3535, 48, 32, Math.PI / 2 - 0.9, 1.8, 0.9, 1.35), new THREE.MeshStandardMaterial({ map: faceTex, transparent: true, roughness: 0.45, polygonOffset: true, polygonOffsetFactor: -2, depthWrite: false }));
  face.renderOrder = 2; skull.add(face);

  // hair: one sculpted shell with a hairline, a front quiff and soft strand ridges
  {
    const hg = new THREE.SphereGeometry(0.35, 96, 64), P = hg.attributes.position, v = new THREE.Vector3(), n = new THREE.Vector3();
    const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    for (let i = 0; i < P.count; i++) {
      n.fromBufferAttribute(P, i).normalize();
      const f = (n.z * 0.5 + 0.5) ** 1.6, lim = -0.42 + f * 0.95 + 0.07 * Math.exp(-(n.x ** 2) / 0.05) * Math.max(0, n.z) - Math.max(0, Math.abs(n.x) - 0.8) * 0.6; // hairline: forehead high, nape low
      const t = sm(lim - 0.05, lim + 0.06, n.y);
      let r = 0.31 + t * 0.068;
      const qd = ((n.z - 0.62) ** 2) / 0.1 + ((n.y - 0.68) ** 2) / 0.06 + (n.x ** 2) / 0.16; // quiff volume, up and forward
      r += t * 0.2 * Math.exp(-qd);
      r += t * 0.07 * Math.exp(-(((n.z - 0.2) ** 2) / 0.12 + ((n.y - 0.9) ** 2) / 0.05)); // crown lift
      r += t * 0.03 * sm(0.2, 0.9, n.y);
      r += t * 0.006 * Math.sin(Math.atan2(n.x, n.z) * 26 + n.y * 9);
      v.copy(n).multiplyScalar(r); P.setXYZ(i, v.x, v.y, v.z);
    }
    hg.computeVertexNormals();
    const hair = new THREE.Mesh(hg, mat(HAIR)); hair.castShadow = true; skull.add(hair);
  }
  for (const s of [-1, 1]) { const sb = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.12, 0.07, 1, 0.02), mat(HAIR)); sb.position.set(0.325 * s, 0.32, 0.08); head.add(sb); }

  // accessories: sunglasses (cool mood) and headphones (when sound is on)
  const glasses = new THREE.Group(); glasses.position.set(0, 0.36, 0.36); head.add(glasses);
  const lensM = new THREE.MeshPhysicalMaterial({ color: 0x07070d, roughness: 0.04, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 2 });
  for (const s of [-1, 1]) { const l = new THREE.Mesh(new RoundedBoxGeometry(0.19, 0.11, 0.025, 3, 0.04), lensM); l.position.set(s * 0.115, 0, -0.01 - Math.abs(s) * 0.012); l.rotation.y = s * 0.28; glasses.add(l); const rim = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.02, 0.03, 1, 0.008), goldM); rim.position.set(s * 0.115, 0.055, -0.01); rim.rotation.y = s * 0.28; glasses.add(rim); }
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.015, 0.015), goldM); bridge.position.y = 0.03; glasses.add(bridge);
  glasses.scale.setScalar(0.001); glasses.visible = false;

  const phones = new THREE.Group(); phones.position.set(0, 0.36, -0.02); head.add(phones);
  const band = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.028, 10, 40, Math.PI), new THREE.MeshPhysicalMaterial({ color: 0x15182a, roughness: 0.3, clearcoat: 0.6 })); phones.add(band);
  for (const s of [-1, 1]) {
    const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.07, 24), new THREE.MeshPhysicalMaterial({ color: 0x1d2240, roughness: 0.3, clearcoat: 0.7 })); cup.rotation.z = Math.PI / 2; cup.position.set(s * 0.39, -0.03, 0); phones.add(cup);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.012, 8, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.faience).multiplyScalar(2.4), toneMapped: false })); ring.rotation.y = Math.PI / 2; ring.position.set(s * 0.428, -0.03, 0); phones.add(ring);
  }
  phones.scale.setScalar(0.001); phones.visible = false;

  // emote sprite above the head
  const emoteTex = {}; const emote = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, toneMapped: false })); emote.position.set(0.45, 2.3, 0); emote.scale.setScalar(0.001); root.add(emote);

  // mood aura at the feet + soft key light
  const aura = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.58, 64), new THREE.MeshBasicMaterial({ color: new THREE.Color(PAL.gold), transparent: true, opacity: 0.55, depthWrite: false, toneMapped: false, alphaMap: radial('#fff', '#000', 128), side: THREE.DoubleSide }));
  aura.rotation.x = -Math.PI / 2; aura.position.y = 0.03; root.add(aura);
  const key = new THREE.PointLight(0xffe2c0, 1.6, 4.5, 1.6); key.position.set(0.7, 2.1, 1.5); root.add(key);
  const fill = new THREE.PointLight(0x8fa8ff, 0.6, 4, 1.8); fill.position.set(-1.0, 1.4, 1.2); root.add(fill);
  const shadowBlob = new THREE.Mesh(new THREE.CircleGeometry(0.42, 32), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22, depthWrite: false, alphaMap: radial('#fff', '#000') }));
  shadowBlob.rotation.x = -Math.PI / 2; shadowBlob.position.y = 0.02; root.add(shadowBlob);

  root.scale.setScalar(1.15);

  // ---- state ----
  const st = { mode: 'idle', modeT: 0, talk: 0, walkPhase: 0, speed: 0, blinkT: 2, blink: 1, look: new THREE.Vector2(), spin: 0, base: 'happy', temp: null, tempT: 0, mood: 'happy', music: false, faceKey: '' };
  const lerp = THREE.MathUtils.lerp;
  const auraCol = new THREE.Color(PAL.gold), tmpCol = new THREE.Color();
  let emoteKind = null;

  function setMode(m) { if (st.mode !== m) { st.mode = m; st.modeT = 0; } }
  function setMood(m, dur = 0) { if (!MOODS[m]) return; if (dur) { st.temp = m; st.tempT = dur; } else st.base = m; }
  function poke() { st.spin = Math.PI * 2; setMode('celebrate'); }
  function pop(obj, on) { obj.visible = true; obj.userData.target = on ? 1 : 0.001; }

  function update(dt, t, ctx = {}) {
    st.modeT += dt;
    if (st.temp) { st.tempT -= dt; if (st.tempT <= 0) st.temp = null; }
    let mood = st.temp || (ctx.sleepy ? 'sleepy' : ctx.dizzy ? 'dizzy' : st.music && !ctx.busy ? 'vibing' : st.base);
    if (mood !== st.mood) { st.mood = mood; const k = MOODS[mood].emote; if (k !== emoteKind) { emoteKind = k; if (k) { emote.material.map = emoteTex[k] || (emoteTex[k] = emoteCanvas(k)); emote.material.needsUpdate = true; emote.userData.pop = 0; } } }
    const M = MOODS[mood];

    const walk = Math.min(st.speed / 2.4, 1);
    st.walkPhase += dt * (4 + st.speed * 3.2);
    const w = Math.sin(st.walkPhase);
    legs[0].rotation.x = lerp(legs[0].rotation.x, w * 0.75 * walk, 0.3);
    legs[1].rotation.x = lerp(legs[1].rotation.x, -w * 0.75 * walk, 0.3);
    let la = { x: -w * 0.6 * walk, z: -0.08 }, ra = { x: w * 0.6 * walk, z: 0.08 };
    const breathe = Math.sin(t * 2.2) * 0.012;
    let bodyY = Math.abs(Math.cos(st.walkPhase)) * 0.06 * walk + breathe;
    let headTilt = Math.sin(t * 1.3) * 0.04, bodyRoll = 0;
    if (st.mode === 'wave') { ra = { x: -0.2, z: 2.55 + Math.sin(t * 9) * 0.32 }; headTilt = 0.12; if (st.modeT > 2.4) setMode('idle'); }
    else if (st.mode === 'point') { ra = { x: -1.35, z: 0.45 }; la = { x: 0.1, z: -0.12 }; }
    else if (st.mode === 'celebrate') { la = { x: 0, z: -2.6 - Math.sin(t * 12) * 0.2 }; ra = { x: 0, z: 2.6 + Math.sin(t * 12) * 0.2 }; bodyY += Math.abs(Math.sin(st.modeT * 7)) * 0.25 * Math.max(0, 1 - st.modeT / 2); if (st.modeT > 2.2) setMode('idle'); }
    else if (st.mode === 'think') { ra = { x: -2.1, z: -0.9 }; headTilt = -0.15; }
    // mood body language
    if (mood === 'vibing' && walk < 0.2) { const beat = Math.sin(t * Math.PI * 2 * 1.6); bodyY += Math.abs(beat) * 0.03; headTilt = beat * 0.12; bodyRoll = beat * 0.05; la.z = -0.25 - Math.abs(beat) * 0.2; ra.z = 0.25 + Math.abs(beat) * 0.2; }
    if (mood === 'sleepy') { headTilt = 0.25 + Math.sin(t * 0.8) * 0.05; bodyY -= 0.02; }
    if (mood === 'dizzy') { bodyRoll = Math.sin(t * 5) * 0.12; headTilt = Math.cos(t * 5) * 0.2; }
    if (mood === 'annoyed' && walk < 0.2) { la = { x: -0.5, z: 0.9 }; ra = { x: -0.5, z: -0.9 }; } // arms crossed-ish
    if (mood === 'shy' && walk < 0.2) { la = { x: -0.6, z: 0.5 }; ra = { x: -0.6, z: -0.5 }; headTilt = 0.18; }
    if (mood === 'thinking' && st.mode === 'idle') { ra = { x: -2.1, z: -0.9 }; }
    if ((mood === 'excited' || mood === 'love') && st.mode === 'idle' && walk < 0.2) bodyY += Math.abs(Math.sin(t * 6)) * 0.05;
    if (mood === 'cool' && st.mode === 'idle' && walk < 0.2) { ra = { x: -0.3, z: 0.15 }; la = { x: 0.1, z: -0.5 }; }

    arms[0].rotation.x = lerp(arms[0].rotation.x, la.x, 0.18); arms[0].rotation.z = lerp(arms[0].rotation.z, la.z, 0.18);
    arms[1].rotation.x = lerp(arms[1].rotation.x, ra.x, 0.18); arms[1].rotation.z = lerp(arms[1].rotation.z, ra.z, 0.18);
    body.position.y = bodyY; body.rotation.z = lerp(body.rotation.z, bodyRoll, 0.1);
    torso.scale.y = 1 + breathe;
    head.rotation.y = lerp(head.rotation.y, st.look.x * 0.5, 0.08);
    head.rotation.x = lerp(head.rotation.x, -st.look.y * 0.25 + (st.talk ? Math.sin(t * 9) * 0.03 : 0), 0.08);
    head.rotation.z = lerp(head.rotation.z, headTilt, 0.06);

    // blink
    st.blinkT -= dt; let b = 1;
    if (st.blinkT < 0.14) b = Math.abs(st.blinkT - 0.07) / 0.07;
    if (st.blinkT < 0) st.blinkT = 2 + Math.random() * 3;
    const mouth = st.talk ? Math.round((0.5 + 0.5 * Math.sin(t * 22)) * (0.6 + 0.4 * Math.sin(t * 7.1)) * 4) / 4 : 0;
    const animated = M.eyes === 'spiral' || M.eyes === 'heart' || M.mouth === 'wavy';
    const key2 = `${mood}|${b < 0.25 ? 0 : 1}|${mouth}|${Math.round(st.look.x * 4)}|${Math.round(st.look.y * 4)}|${animated ? Math.floor(t * 20) : 0}`;
    if (key2 !== st.faceKey) { st.faceKey = key2; paintFace(fg, { mood, blink: b, mouth, lx: st.look.x, ly: st.look.y, t }); faceTex.needsUpdate = true; }

    // accessories and emote
    const wantGlasses = !!M.glasses, wantPhones = st.music;
    if (wantGlasses !== !!glasses.userData.on) { glasses.userData.on = wantGlasses; pop(glasses, wantGlasses); }
    if (wantPhones !== !!phones.userData.on) { phones.userData.on = wantPhones; pop(phones, wantPhones); }
    for (const o of [glasses, phones]) { const tg = o.userData.target ?? 0.001; const s = lerp(o.scale.x, tg, 0.18); o.scale.setScalar(s); if (s < 0.01 && tg < 0.01) o.visible = false; }
    if (emoteKind) { emote.userData.pop = Math.min(1, (emote.userData.pop || 0) + dt * 4); const p = emote.userData.pop, e = 1 + Math.sin(p * Math.PI) * 0.35; emote.scale.setScalar(0.42 * p * e); emote.position.y = 2.3 + Math.sin(t * 3) * 0.05; }
    else emote.scale.setScalar(lerp(emote.scale.x, 0.001, 0.2));
    tmpCol.setHex(M.aura); auraCol.lerp(tmpCol, 0.06); aura.material.color.copy(auraCol).multiplyScalar(1.6);
    aura.material.opacity = 0.35 + Math.sin(t * 3) * 0.12; aura.scale.setScalar(1 + Math.sin(t * 3) * 0.04);

    if (st.spin > 0) { const d = Math.min(st.spin, dt * 12); st.spin -= d; body.rotation.y += d; } else body.rotation.y = lerp(body.rotation.y, 0, 0.2);
  }

  return { root, head, st, update, setMode, setMood, poke, headAnchor: () => head.localToWorld(new THREE.Vector3(0, 0.9, 0)) };
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
