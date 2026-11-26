import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { sound } from './sound.js';
import { loadGitHub } from './github.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { buildWorld, H } from './world.js';
import { createGuide, guideXZ, heightAt, standPoint, STAND_COUNT } from './guide.js';
import { LINES, POKES, SENT, MODES, LEVEL_NAMES, CLICKS, SKILLS, MOOD_BY_LEVEL, EXTRA } from './lines.js';
import { artifacts } from './achievements.js';
import { MOODS } from './guide.js';

gsap.registerPlugin(ScrollTrigger, SplitText);
const $ = (s) => document.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isNarrow = () => innerWidth <= 820;
const N = STAND_COUNT; // 7 levels

// ---------- language for the guide ----------
let lang = 'en';
try { lang = localStorage.getItem('adham-guide-lang') || 'en'; } catch (e) {}

// ---------- smooth scroll ----------
const lenis = new Lenis({ smoothWheel: !reduced, lerp: 0.085, autoRaf: false });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
const sections = [...document.querySelectorAll('.sec')];
const stageEl = document.getElementById('stage');
const stageRect = () => stageEl.getBoundingClientRect();
const isPortrait = () => { const r = stageRect(); return r.width / Math.max(1, r.height) < 1.15; };
const goTo = (i) => lenis.scrollTo(sections[i], { offset: isNarrow() ? -stageRect().height : 0, duration: reduced ? 0 : 2 });
document.querySelectorAll('[data-go]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); goTo(+a.dataset.go); }));

// ---------- hero name: decode from hieroglyphs ----------
function decodeName() {
  const el = $('#name'), target = 'Adham Harp', glyphs = Array.from('𓂀𓃭𓆣𓇳𓊖𓋹𓎛𓏏𓅓𓈖𓀀𓁹𓆓𓍯');
  if (reduced) { el.textContent = target; return; }
  const st = { p: 0 };
  gsap.to(st, {
    p: 1, duration: 2.4, ease: 'power2.inOut', onUpdate() {
      const k = Math.floor(st.p * target.length);
      el.innerHTML = [...target].map((ch, i) => (i < k || ch === ' ' ? ch : `<span class="gl">${glyphs[(Math.random() * glyphs.length) | 0]}</span>`)).join('');
    }, onComplete() { el.textContent = target; },
  });
}

// ---------- 3D setup ----------
const canvas = $('#scene');
let renderer;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' }); } catch (e) { renderer = null; }

const ui = setupUI();
if (!renderer) {
  canvas.remove(); $('#loader').classList.add('done'); decodeName(); revealPanels();
} else {
  start().catch((e) => { console.error(e); $('#loader').classList.add('done'); decodeName(); revealPanels(); });
}

async function start() {
  // wait for fonts so canvas textures use them (but never forever)
  await Promise.race([Promise.all(['700 54px Unbounded', '600 42px "Instrument Sans"'].map((f) => document.fonts.load(f))), new Promise((r) => setTimeout(r, 2500))]);

  let dpr = Math.min(devicePixelRatio, isNarrow() ? 1.5 : 1.75);
  renderer.setPixelRatio(dpr);
  renderer.setSize(stageRect().width, stageRect().height, false);
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.12;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0e1642, 0.0072);
  const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 1500);

  const manager = new THREE.LoadingManager();
  let loaded = 0, total = 1;
  manager.onProgress = (u, l, t) => { loaded = l; total = t; setPct(l / t); };
  const quality = isNarrow() || (navigator.hardwareConcurrency || 8) <= 4 ? 'low' : 'high';
  const world = buildWorld(scene, renderer, manager, quality);
  const guide = createGuide(); scene.add(guide.root);
  const L = (o) => (typeof o === 'object' ? o[lang] : o);
  let lastInput = performance.now(), wasSleepy = false, pokes = [], focus = null;
  for (const ev of ['pointermove', 'keydown', 'wheel', 'touchstart']) addEventListener(ev, () => { lastInput = performance.now(); }, { passive: true });
  ui.mood = (m) => guide.setMood(m, 4);

  // stack chips: tell where a skill was used, pull its cartouche out of the orbit
  document.querySelectorAll('[data-skill]').forEach((b) => b.addEventListener('click', () => {
    document.querySelectorAll('[data-skill].on').forEach((x) => x.classList.remove('on')); b.classList.add('on');
    const k = b.dataset.skill, line = SKILLS[k]; world.highlightSkill && world.highlightSkill(k);
    const out = $('#used-in'); if (out && line) { out.querySelector('b').textContent = `${k} — ${SKILLS[k][0]}`; gsap.fromTo(out, { opacity: 0.3 }, { opacity: 1, duration: 0.4 }); }
    if (line) ui.say(`${k}: ${line[lang === 'ar' ? 1 : 0]}`, { temp: true, hold: 5200 });
    guide.setMood('excited', 2.5); sound.play('arrive');
  }));
  // project cards: fly the camera to the matching 3D screen
  document.querySelectorAll('.see3d').forEach((b) => b.addEventListener('click', () => {
    const h = world.props.screens?.[b.dataset.screen]; if (!h) return;
    const tgt = new THREE.Vector3(); h.getWorldPosition(tgt);
    const n = new THREE.Vector3(0, 0, 1).applyQuaternion(h.getWorldQuaternion(new THREE.Quaternion()));
    focus = { tgt, pos: tgt.clone().add(n.multiplyScalar(2.6)).add(new THREE.Vector3(0, 0.25, 0)), k: 0, q: qS };
    guide.setMode('point'); guide.setMood('excited', 3); ui.say(L(EXTRA.focus), { temp: true }); sound.play('whoosh');
  }));
  // research: attack simulator drives the hologram
  const threat = $('#threat'), riskOut = $('#risk-out');
  threat.addEventListener('input', () => {
    const v = threat.value / 100, tier = Math.min(3, Math.floor(v * 4 - 0.0001)); world.props.research.userData.threat = v;
    riskOut.dataset.tier = Math.max(0, tier); riskOut.querySelector('b').textContent = ['Low', 'Medium', 'High', 'Critical'][Math.max(0, tier)];
    if (v > 0.95) { if (artifacts.unlock('red-team')) {} guide.setMood('surprised', 2.5); if (!threat.dataset.warned) { threat.dataset.warned = 1; ui.say(L(EXTRA.threatHi), { temp: true }); } }
    else if (v > 0.6) guide.setMood('worried', 2); else if (v > 0.3) guide.setMood('focused', 2);
  });
  // arena: Balloon Rush
  const hud = $('#game-hud'), gS = $('#g-score'), gT = $('#g-time'), best = $('#best');
  let bestScore = 0; try { bestScore = +localStorage.getItem('adham-balloon-best') || 0; } catch (e) {}
  const showBest = () => { best.textContent = bestScore ? `Best: ${bestScore}` : ''; }; showBest();
  $('#play').addEventListener('click', () => {
    if (world.game.active) return;
    goTo(5); world.game.start(15); hud.hidden = false; guide.setMood('excited', 16); ui.say(L(EXTRA.gameStart), { temp: true }); sound.play('whoosh');
  });
  world.game.onTick = (g) => { gS.textContent = g.score; gT.textContent = Math.max(0, Math.ceil(g.left)); };
  world.game.onEnd = (g) => {
    hud.hidden = true; if (g.score > bestScore) { bestScore = g.score; try { localStorage.setItem('adham-balloon-best', bestScore); } catch (e) {} } showBest();
    ui.say(EXTRA.gameEnd[lang](g.score), { temp: true, hold: 5000 }); guide.setMood(g.score >= 8 ? 'cool' : 'happy', 4); guide.setMode('celebrate');
    if (g.score >= 8) artifacts.unlock('popper');
  };
  artifacts.onUnlock((a, n, total) => { guide.setMood('love', 2.5); sound.play('arrive'); if (n === total) setTimeout(() => ui.say(L(EXTRA.allArtifacts), { temp: true, hold: 6000 }), 1500); });

  const rt = new THREE.WebGLRenderTarget(stageRect().width * dpr, stageRect().height * dpr, { type: THREE.HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  let gtao = null;
  if (quality === 'high') {
    try { gtao = new GTAOPass(scene, camera, innerWidth, innerHeight); gtao.output = GTAOPass.OUTPUT.Default; gtao.blendIntensity = 0.85; gtao.updateGtaoMaterial({ radius: 0.5, distanceExponent: 1.4, thickness: 1, scale: 1.1 }); composer.addPass(gtao); } catch (e) { gtao = null; }
  }
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.62, 0.5, 0.92);
  composer.addPass(bloom); composer.addPass(new OutputPass());
  const grade = new ShaderPass({
    uniforms: { tDiffuse: { value: null }, t: { value: 0 }, amt: { value: 0.028 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform sampler2D tDiffuse; uniform float t, amt; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)) + t*7.) * 43758.5453); }
      void main(){ vec2 d = vUv-.5; float r = dot(d,d);
        vec3 c = vec3(texture2D(tDiffuse, vUv - d*r*.005).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv + d*r*.005).b);
        c *= 1. - smoothstep(.15,.7,r)*.45;
        c += (h(vUv*800.)-.5)*amt;
        gl_FragColor = vec4(c,1.); }`,
  });
  composer.addPass(grade);
  let useComposer = true;

  // camera rig keyframes (position + target per level)
  let camPos = [], camTgt = [], posCurve, tgtCurve, rigNarrow = null;
  function buildRig() {
  rigNarrow = isPortrait(); camPos = []; camTgt = [];
  for (let L = 0; L < N; L++) {
    const p = standPoint(L);
    if (L === 0) {
      if (rigNarrow) { camPos.push(new THREE.Vector3(5.6, 3.1, p.z + 9.5)); camTgt.push(new THREE.Vector3(1.9, 2.9, p.z - 3)); }
      else { camPos.push(new THREE.Vector3(10, 4.6, p.z + 13)); camTgt.push(new THREE.Vector3(-1.2, 6.2, 8)); }
      continue;
    }
    if (L === N - 1) { camPos.push(new THREE.Vector3(-5.8, p.y + 3.1, 10.2)); camTgt.push(new THREE.Vector3(-0.4, p.y + 1.9, 0.6)); continue; }
    const side = Math.sign(p.x) || 1;
    const k = rigNarrow ? 0.82 : 1;
    camPos.push(new THREE.Vector3(p.x + side * 2.6 * k, p.y + 2.8 * k, p.z + 8.6 * k));
    camTgt.push(new THREE.Vector3(p.x * 0.92 + side * 0.8, p.y + 1.6, p.z - 1));
  }
  posCurve = new THREE.CatmullRomCurve3(camPos, false, 'centripetal');
  tgtCurve = new THREE.CatmullRomCurve3(camTgt, false, 'centripetal');
  }
  buildRig();
  // where to put the subject on screen: 0 = right (panel left), 1 = left (panel right), .5 = centre
  const shift = sections.map((s) => ({ left: 0, right: 1, center: 0.5 })[s.dataset.side] ?? 0.5);

  // intro: fly in from the dunes
  const intro = { k: reduced ? 0 : 1 };
  const introFrom = new THREE.Vector3(46, 30, 90);

  // ---------- scroll -> q ----------
  let bounds = [];
  const measure = () => { const y = lenis.scroll ?? scrollY; bounds = sections.map((s) => s.getBoundingClientRect().top + y); };
  measure(); addEventListener('load', measure);
  new ResizeObserver(measure).observe(document.body);
  const sstep = (a, b, x) => { const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
  function scrollQ() {
    const sh = isNarrow() ? stageRect().height : 0, s = (lenis.scroll ?? scrollY) + sh + (innerHeight - sh) * 0.45, w = (innerHeight - sh) * 0.4;
    let q = 0; for (let i = 1; i < bounds.length; i++) q += sstep(bounds[i] - w, bounds[i] + w, s);
    return q;
  }

  // ---------- interaction ----------
  const mouse = new THREE.Vector2(), ray = new THREE.Raycaster();
  addEventListener('pointermove', (e) => { const r = stageRect(); mouse.set(THREE.MathUtils.clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1.5, 1.5), THREE.MathUtils.clamp(-((e.clientY - r.top) / r.height) * 2 + 1, -1.5, 1.5)); });
  canvas.addEventListener('pointerdown', (e) => {
    const r = stageRect(); const m = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(m, camera);
    if (ray.intersectObject(guide.root, true).length) {
      guide.poke(); sound.play('poke');
      const now = performance.now(); pokes = pokes.filter((x) => now - x < 6000); pokes.push(now);
      const n = pokes.length; if (n >= 5) artifacts.unlock('poker');
      if (n >= 7) { guide.setMood('dizzy', 3); ui.say(L(EXTRA.annoyed), { temp: true }); }
      else if (n >= 5) { guide.setMood('annoyed', 3); ui.say(L(EXTRA.annoyed), { temp: true }); }
      else if (n >= 3) { guide.setMood('shy', 3); ui.say(L(EXTRA.shy), { temp: true }); }
      else { guide.setMood('surprised', 1.4); const pool = POKES[lang]; ui.say(pool[(Math.random() * pool.length) | 0], { temp: true }); }
      return;
    }
    const hit = ray.intersectObjects(world.clickables, false)[0];
    if (!hit) return;
    const o = hit.object, kind = o.userData.onClick;
    if (kind === 'gameBalloon') { if (world.game.hit(o)) sound.play('pop'); return; }
    if (kind === 'balloon') {
      const b = o.userData.group; if (b.userData.popped) return; b.userData.popped = true; sound.play('pop');
      gsap.to(o.scale, { x: 1.5, y: 1.7, z: 1.5, duration: 0.08, onComplete: () => { o.visible = false; } });
      ui.say(CLICKS.balloon[lang], { temp: true });
      setTimeout(() => { o.visible = true; o.scale.set(0.01, 0.01, 0.01); gsap.to(o.scale, { x: 1, y: 1.18, z: 1, duration: 0.8, ease: 'elastic.out(1,.5)' }); b.userData.popped = false; }, 5000);
    } else if (kind === 'rocket') { world.props.rocket.userData.boost = 1; sound.play('whoosh'); ui.say(CLICKS.rocket[lang], { temp: true }); }
    else if (kind === 'moon') { ui.say(CLICKS.moon[lang], { temp: true }); sound.play('arrive'); artifacts.unlock('moonwalker'); guide.setMood('surprised', 2); }
    else if (kind === 'cap') { fireBeam(); ui.say(CLICKS.cap[lang], { temp: true }); }
  });
  // pointer cursor over the guide (cheap: test every few frames)
  let hoverTick = 0, hovering = false;

  function fireBeam() {
    const p = world.props; sound.play('beam');
    guide.setMode('celebrate'); world.packetBoost = 1;
    gsap.timeline()
      .to(p.beam.material, { opacity: 0.85, duration: 0.35, ease: 'power2.out' })
      .to(p.capLight, { intensity: 60, duration: 0.3 }, 0)
      .to(p.beam.material, { opacity: 0, duration: 2.4, ease: 'power1.in' }, 0.9)
      .to(p.capLight, { intensity: 6, duration: 2 }, 1);
    p.rings.forEach((r, i) => gsap.fromTo(r.scale, { x: 1, y: 1, z: 1 }, { x: 9, y: 9, z: 9, duration: 2.2, delay: i * 0.3, ease: 'power2.out' }));
    p.rings.forEach((r, i) => gsap.fromTo(r.material, { opacity: 1 }, { opacity: 0, duration: 2.2, delay: i * 0.3 }));
  }
  ui.onSend = () => { fireBeam(); ui.say(SENT[lang], { temp: true, hold: 5000 }); guide.setMood('love', 6); artifacts.unlock('hired'); };
  ui.onTerm = () => { guide.setMood('focused', 6); artifacts.unlock('root'); };
  ui.onLangSet = () => { if (lang === 'ar') artifacts.unlock('polyglot'); };
  ui.onSound = (on) => { if (on) artifacts.unlock('dj'); };
  ui.setMood = (m) => { if (MOODS[m]) { guide.setMood(m, 8); return true; } return false; };
  ui.onLang = () => { lastSpoken = -1; };
  ui.onPoke = () => { guide.poke(); sound.play('poke'); };

  // ---------- resize ----------
  function resize() {
    const r = stageRect(), w = Math.max(1, r.width), h = Math.max(1, r.height);
    renderer.setSize(w, h, false); composer.setSize(w, h); bloom.setSize(w / 2, h / 2); if (gtao) gtao.setSize(w, h);
    if (rigNarrow !== isPortrait()) buildRig();
    camera.aspect = w / h; camera.fov = w / h < 0.8 ? 58 : w / h < 1.2 ? 50 : 42; camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  // ---------- loop ----------
  let tPrev = performance.now(), tAcc = 0;
  let qS = scrollQ(), lastSpoken = -1, settleT = 0, curLevel = -1;
  const v2 = new THREE.Vector2(), prevXZ = new THREE.Vector2(), tmp = new THREE.Vector3(), look = new THREE.Vector3();
  guideXZ(qS, prevXZ);
  guide.root.position.set(prevXZ.x, heightAt(prevXZ.x, prevXZ.y), prevXZ.y);
  let frames = 0, slowAcc = 0, perfChecked = location.hash.startsWith('#hq'); const snap = location.hash === '#hqsnap';

  function frame() {
    const now = performance.now(), dt = Math.min((now - tPrev) / 1000, 0.05); tPrev = now; tAcc += dt; const t = tAcc;
    const q = scrollQ();
    qS += (q - qS) * Math.min(1, dt * (reduced ? 30 : 3.4)); if (snap) qS = q;

    // guide position on the climb
    guideXZ(qS, v2);
    const moved = v2.distanceTo(prevXZ);
    const g = guide.root;
    g.position.x = v2.x; g.position.z = v2.y;
    const hy = heightAt(v2.x, v2.y);
    g.position.y += (hy - g.position.y) * Math.min(1, dt * 16);
    guide.st.speed += ((moved / Math.max(dt, 1e-3)) - guide.st.speed) * 0.2;
    let yawT;
    if (moved > 0.004) yawT = Math.atan2(v2.x - prevXZ.x, v2.y - prevXZ.y);
    else yawT = Math.atan2(camera.position.x - g.position.x, camera.position.z - g.position.z);
    let dy = yawT - g.rotation.y; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
    g.rotation.y += dy * Math.min(1, dt * 7);
    prevXZ.copy(v2);
    guide.st.look.set(mouse.x * 0.6, mouse.y * 0.5);
    guide.st.talk = ui.talking() ? 1 : 0;

    // camera along the rig
    const u = THREE.MathUtils.clamp(qS / (N - 1), 0, 1);
    posCurve.getPoint(u, camera.position); tgtCurve.getPoint(u, look);
    if (intro.k > 0) camera.position.lerp(introFrom, intro.k * intro.k);
    if (focus) {
      if (Math.abs(qS - focus.q) > 0.25) focus.out = true;
      focus.k += ((focus.out ? 0 : 1) - focus.k) * Math.min(1, dt * 3); if (focus.out && focus.k < 0.01) focus = null;
      if (focus) { const e = focus.k * focus.k * (3 - 2 * focus.k); camera.position.lerp(focus.pos, e); look.lerp(focus.tgt, e); }
    }
    camera.position.x += mouse.x * 0.35; camera.position.y += mouse.y * 0.2;
    camera.lookAt(look);

    // level arrival -> the guide speaks
    const near = Math.round(qS);
    if (Math.abs(qS - near) < 0.02) settleT += snap ? 1 : dt; else settleT = 0;
    if (settleT > 0.25 && lastSpoken !== near) {
      lastSpoken = near; ui.lines(LINES[lang][near]); guide.setMode(MODES[near]); sound.play('arrive'); guide.setMood(MOOD_BY_LEVEL[near]); if (near >= 1) artifacts.unlock('first-step'); if (near === N - 1) artifacts.unlock('summit');
    }
    if (Math.abs(qS - lastSpoken) > 0.18 && lastSpoken !== -1) { lastSpoken = -1; ui.hide(); if (guide.st.mode !== 'celebrate') guide.setMode('idle'); }
    if (near !== curLevel) { curLevel = near; ui.level(near); }

    world.packetBoost = Math.max(world.packetBoost, Math.min(1, Math.abs(lenis.velocity || 0) / 60));
    world.update(t, dt, camera);
    const idle = (performance.now() - lastInput) / 1000, vel = Math.abs(lenis.velocity || 0);
    const sleepy = idle > 25 && !world.game.active;
    if (wasSleepy && !sleepy) { guide.setMood('surprised', 1.6); ui.say(L(EXTRA.wake), { temp: true }); }
    wasSleepy = sleepy;
    if (vel > 110 && guide.st.mood !== 'dizzy') ui.say(L(EXTRA.dizzy), { temp: true });
    guide.st.music = sound.on;
    guide.update(dt, t, { sleepy, dizzy: vel > 110, busy: moved > 0.004 });
    ui.moodChip(guide.st.mood, MOODS[guide.st.mood].aura);

    // bubble follows the head
    const head = guide.headAnchor(); tmp.copy(head).project(camera);
    const SR = stageRect(); ui.place((tmp.x * 0.5 + 0.5) * SR.width, (-tmp.y * 0.5 + 0.5) * SR.height, tmp.z < 1, SR);

    if ((hoverTick = (hoverTick + 1) % 6) === 0) {
      ray.setFromCamera(mouse, camera); const onGuide = ray.intersectObject(guide.root, true).length > 0; const hit = onGuide || ray.intersectObjects(world.clickables, false).length > 0;
      if (hit !== hovering) { hovering = hit; canvas.style.cursor = hit ? 'pointer' : ''; }
      ui.hint(onGuide, (tmp.x * 0.5 + 0.5) * SR.width, (-tmp.y * 0.5 + 0.5) * SR.height);
    }

    grade.uniforms.t.value = t;
    if (useComposer) composer.render(dt); else renderer.render(scene, camera);

    // adaptive quality after warm-up
    frames++;
    if (!perfChecked && frames > 30) { slowAcc += dt; if (frames > 120) { perfChecked = true; const avg = slowAcc / 90; if (avg > 0.028 && gtao) { gtao.enabled = false; } if (avg > 0.034) { dpr = 1; renderer.setPixelRatio(1); resize(); if (avg > 0.05) { useComposer = false; renderer.shadowMap.enabled = false; } } } }
  }
  gsap.ticker.add(frame);
  if (location.hash.startsWith('#hq')) window.__game = world.game;
  if (location.hash === '#debug') window.__dbg = () => ({ qS, q: scrollQ(), lastSpoken, settleT, mode: guide.st.mode, speed: guide.st.speed, pos: guide.root.position.toArray().map((n) => +n.toFixed(2)), scroll: lenis.scroll, bounds });

  // ---------- reveal ----------
  await new Promise((r) => { if (total <= loaded) r(); manager.onLoad = r; setTimeout(r, 6000); });
  setPct(1);
  setTimeout(() => {
    $('#loader').classList.add('done');
    decodeName(); revealPanels();
    if (!reduced) gsap.to(intro, { k: 0, duration: 3.2, ease: 'power3.inOut', onComplete: () => { if (Math.round(qS) === 0) { lastSpoken = -1; } } });
  }, 350);
}

// ---------- loader progress ----------
function setPct(p) {
  const steps = document.querySelectorAll('.ld-s'); const k = Math.round(p * steps.length);
  steps.forEach((s, i) => s.classList.toggle('on', i < k));
  const el = $('#ld-pct'); if (el) el.textContent = `${Math.round(p * 100)}%`;
}
setPct(0.15);

// ---------- panel reveals ----------
function revealPanels() {
  if (reduced) return;
  document.querySelectorAll('.sec:not(#hero)').forEach((sec) => {
    const h2 = sec.querySelector('h2');
    const split = h2 ? SplitText.create(h2, { type: 'words', mask: 'words' }) : null;
    const tl = gsap.timeline({ scrollTrigger: { trigger: sec, start: 'top 75%', once: true } });
    if (split) tl.from(split.words, { yPercent: 110, duration: 0.8, stagger: 0.06, ease: 'power3.out' });
    const bits = sec.querySelectorAll(':scope > .label, :scope > p, .facts li, .skills button, .proj, .pipe > *, .sim, .game-card, .certs li, .bench li, #req, .contact-links li, .wall li');
    if (bits.length) tl.from(bits, { y: 16, opacity: 0, duration: 0.55, stagger: 0.025, ease: 'power2.out' }, 0.1);
  });
  gsap.from('#hero > :not(h1)', { y: 20, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out', delay: 0.4 });
}

// ---------- UI: bubble, minimap, language, terminal, contact ----------
function setupUI() {
  const bubble = $('#bubble'), text = $('#bubble-text'), next = $('#bubble-next'), hintEl = $('#poke-hint');
  let queue = [], idx = 0, typing = null, talking = false, autoT = null, tempT = null, visible = false;
  const api = { onSend: null, onLang: null, onPoke: null };

  function typeLine(s) {
    clearTimeout(autoT); if (typing) typing.kill();
    text.innerHTML = ''; const ghost = document.createElement('span'); ghost.className = 'ghost'; ghost.textContent = s; const typed = document.createElement('span'); typed.className = 'typed'; text.append(ghost, typed); talking = true;
    bubble.hidden = false; bubble.dir = lang === 'ar' ? 'rtl' : 'ltr'; bubble.lang = lang;
    if (!visible) { visible = true; gsap.fromTo(bubble, { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)' }); }
    const chars = Array.from(s), o = { n: 0 };
    typing = gsap.to(o, {
      n: chars.length, duration: reduced ? 0 : Math.min(2.6, chars.length * 0.028), ease: 'none',
      onUpdate: () => { const k = Math.round(o.n); if (k !== typed.textContent.length && k % 2 === 0) sound.play('tick'); typed.textContent = chars.slice(0, k).join(''); },
      onComplete: () => { talking = false; typed.textContent = s; if (idx < queue.length - 1) autoT = setTimeout(() => advance(), 2600); },
    });
  }
  function advance() { if (idx < queue.length - 1) { idx++; typeLine(queue[idx]); } else if (queue.length) { idx = 0; typeLine(queue[0]); } }
  next.addEventListener('click', () => { clearTimeout(tempT); advance(); });
  bubble.addEventListener('click', (e) => { if (e.target === bubble || e.target === text) { clearTimeout(tempT); advance(); } });

  api.lines = (arr) => { clearTimeout(tempT); queue = arr; idx = 0; typeLine(arr[0]); };
  api.say = (s, { temp, hold = 3200 } = {}) => {
    const resume = queue.slice(); const at = idx;
    typeLine(s);
    clearTimeout(tempT);
    if (temp && resume.length) tempT = setTimeout(() => { queue = resume; idx = at; typeLine(queue[idx]); }, hold);
  };
  api.hide = () => { clearTimeout(autoT); if (!visible) return; visible = false; talking = false; if (typing) typing.kill(); gsap.to(bubble, { scale: 0.7, opacity: 0, duration: 0.2, onComplete: () => { if (!visible) bubble.hidden = true; } }); };
  api.talking = () => talking;
  let bw = 0, bh = 0;
  api.place = (x, y, ok, SR) => {
    if (bubble.hidden) return;
    bw = bubble.offsetWidth; bh = bubble.offsetHeight;
    const top0 = isNarrow() ? 62 : 74;
    let left = x - 40, top = y - bh - 20, below = false, side = false;
    if (top < top0 && isNarrow()) { side = true; top = y + 10; left = x + 44 + bw < SR.width ? x + 44 : x - bw - 44; }
    else if (top < top0) { top = y + 30; below = true; }
    left = Math.max(10, Math.min(SR.width - bw - 10, left));
    top = Math.max(top0, Math.min(SR.height - bh - 10, top));
    bubble.classList.toggle('below', below); bubble.classList.toggle('side', side);
    bubble.style.setProperty('--tail', `${Math.max(20, Math.min(bw - 20, x - left))}px`);
    bubble.style.transform = `translate(${left}px,${top}px)`;
    bubble.style.visibility = ok ? 'visible' : 'hidden';
  };
  api.hint = (on, x, y) => { hintEl.classList.toggle('on', on && !visible); if (on) hintEl.style.transform = `translate(${x + 30}px,${y + 40}px)`; };

  // minimap
  const mini = $('#mini'), label = $('#mini-label');
  const widths = [86, 74, 62, 50, 38, 26, 14];
  mini.innerHTML = widths.map((w, i) => `<rect data-i="${i}" x="${(90 - w) / 2}" y="${128 - i * 19}" width="${w}" height="16" rx="2"><title>${LEVEL_NAMES[i]}</title></rect>`).join('');
  mini.querySelectorAll('rect').forEach((r) => r.addEventListener('click', () => goTo(+r.dataset.i)));
  const navLinks = document.querySelectorAll('.links a');
  api.level = (L) => {
    api.current = L;
    mini.querySelectorAll('rect').forEach((r, i) => { r.classList.toggle('on', i === L); r.classList.toggle('done', i < L); });
    label.textContent = LEVEL_NAMES[L];
    navLinks.forEach((a) => a.classList.toggle('on', +a.dataset.go === L));
  };

  // language
  const langBtn = $('#lang');
  const syncLang = () => { langBtn.textContent = lang === 'ar' ? 'EN' : 'ع'; langBtn.setAttribute('aria-label', lang === 'ar' ? 'Switch the guide to English' : 'Switch the guide to Egyptian Arabic'); document.documentElement.classList.toggle('ar', lang === 'ar'); };
  langBtn.addEventListener('click', () => { lang = lang === 'ar' ? 'en' : 'ar'; try { localStorage.setItem('adham-guide-lang', lang); } catch (e) {} syncLang(); api.onLang && api.onLang(); api.onLangSet && api.onLangSet(); });
  syncLang();

  // contact request composer
  const f = { name: $('#f-name'), email: $('#f-email'), role: $('#f-role'), msg: $('#f-msg') }, pre = $('#req-preview'), status = $('#req-status');
  const esc = (s) => JSON.stringify(s);
  const EMAIL = 'adhamharp994@gmail.com';
  // Messages are delivered by FormSubmit (formsubmit.co), a free form-to-email relay for static sites.
  const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
  const reqText = () => `POST /api/hire HTTP/1.1\nHost: adham107harp.github.io\nContent-Type: application/json\n\n{\n  "from": ${esc(f.name.value || 'you')},\n  "replyTo": ${esc(f.email.value || 'you@company.com')},\n  "about": ${esc(f.role.value || 'an opportunity')},\n  "message": ${esc((f.msg.value || '…').slice(0, 140))}\n}`;
  const render = () => { pre.textContent = reqText(); };
  Object.values(f).forEach((i) => i.addEventListener('input', render)); render();
  let sending = false;
  $('#req').addEventListener('submit', async (e) => {
    e.preventDefault(); if (sending) return;
    const bad = !f.name.value.trim() ? f.name : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value.trim()) ? f.email : !f.msg.value.trim() ? f.msg : null;
    if (bad) { status.textContent = `400 Bad Request: ${bad === f.email ? 'that email doesn\'t look right' : `the ${bad.name === 'msg' ? 'message' : bad.name} is empty`}.`; bad.focus(); api.mood && api.mood('worried'); return; }
    if ($('#req .hp').value) return; // bot
    sending = true; const btn = $('#send-btn'); btn.disabled = true; btn.textContent = 'Sending…';
    const t0 = performance.now();
    pre.textContent = reqText() + '\n\n… awaiting response';
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({
        name: f.name.value.trim(), email: f.email.value.trim(), topic: f.role.value.trim() || '(none)', message: f.msg.value.trim(),
        _subject: `Portfolio: ${f.role.value.trim() || 'new message'} from ${f.name.value.trim()}`, _template: 'table', _captcha: 'false', _replyto: f.email.value.trim(),
      }) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok || String(data.success) !== 'true') throw new Error(data.message || r.status);
      const ms = Math.round(performance.now() - t0);
      pre.textContent = reqText() + `\n\nHTTP/1.1 201 Created  (${ms} ms)\n{ "delivered": true, "to": "Adham's inbox" }`;
      status.textContent = '201 Created. Delivered to my inbox. I\'ll reply to your email.';
      api.onSend && api.onSend(); f.msg.value = '';
    } catch (err) {
      const href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio: ${f.role.value || 'Hello'}`)}&body=${encodeURIComponent(f.msg.value)}`;
      pre.textContent = reqText() + '\n\nHTTP/1.1 503 Service Unavailable\n{ "fallback": "email" }';
      status.innerHTML = ''; status.append('The relay didn\'t answer. ');
      const a = document.createElement('a'); a.href = href; a.textContent = `Email me at ${EMAIL}`; status.append(a, ' instead.');
      api.mood && api.mood('worried');
    } finally { sending = false; btn.disabled = false; btn.textContent = 'Send request'; }
  });
  $('#copy-mail').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(EMAIL); status.textContent = `Copied ${EMAIL}`; } catch (e) { status.textContent = EMAIL; }
  });

  // terminal
  const term = $('#term'), out = $('#term-out'), input = $('#term-in');
  const print = (s, cls = '') => { const d = document.createElement('div'); if (cls) d.className = cls; d.textContent = s; out.appendChild(d); out.scrollTop = out.scrollHeight; };
  const sectionsByName = { home: 0, hero: 0, about: 1, stack: 2, work: 3, projects: 3, research: 4, arena: 5, contact: 6 };
  const cmds = {
    artifacts: () => { openArt(); return 'opening the artifact case…'; },
    moods: () => 'moods: happy excited focused thinking cool surprised shy annoyed sleepy dizzy love worried vibing · try: mood cool',
    help: () => 'commands: moods · mood <name> · artifacts · whoami · ls · cat about · projects · research · arena · contact · goto <section> · lang ar|en · poke · sudo hire adham · clear · exit',
    whoami: () => 'Adham Harp — AI & Data Science student @ Badya University, backend developer (Node.js, PostgreSQL, C++).',
    ls: () => 'about/  stack/  work/  research/  arena/  contact/  capstone.gold',
    'cat about': () => 'Backend first, AI on top. Builds APIs, databases and the logic behind products. Class of 2028.',
    projects: () => 'SmartHabbit (backend) · BU-LabTrack (backend API) · CAPCOM: Storm Watch (NASA Space Apps) · Shubha (in progress) · Sentinel FDS · The RSA Heist',
    research: () => 'IoT Sentinel: XGBoost + Isolation Forest + decision fusion → 4-tier risk. IEEE Xplore, ITC-Egypt 2026.',
    arena: () => 'ICPC ECPC quals: 88th (2025), 177th (2026). 248+ Codeforces problems. Next: ODC Champions, 3 Dec.',
    contact: () => `email: ${EMAIL}\ngithub: adham107harp\nlinkedin: adham-harp-43bb6232b`,
    poke: () => { api.onPoke && api.onPoke(); return 'ouch. he says hi.'; },
    'sudo hire adham': () => { setTimeout(() => { closeTerm(); goTo(6); setTimeout(() => api.onSend && api.onSend(), 2800); }, 900); return '[sudo] permission granted. 201 Created — taking you to the capstone…'; },
    clear: () => { out.textContent = ''; return null; },
    exit: () => { closeTerm(); return null; },
  };
  function run(raw) {
    const c = raw.trim().replace(/\s+/g, ' ').toLowerCase(); if (!c) return;
    print(`$ ${raw}`, 'c');
    if (c.startsWith('goto ')) { const k = sectionsByName[c.slice(5)]; if (k === undefined) return print(`no such section: ${c.slice(5)}`, 'e'); closeTerm(); goTo(k); return; }
    if (c.startsWith('mood ')) { const m = c.slice(5); return print(api.setMood && api.setMood(m) ? `mini-Adham is now ${m}.` : `unknown mood: ${m}. try "moods".`, api.setMood && MOODS[m] ? '' : 'e'); }
    if (c.startsWith('lang ')) { const l = c.slice(5); if (l !== 'ar' && l !== 'en') return print('lang ar | lang en', 'e'); lang = l; try { localStorage.setItem('adham-guide-lang', lang); } catch (e) {} syncLang(); api.onLang && api.onLang(); return print(`guide speaks ${l === 'ar' ? 'Egyptian Arabic' : 'English'} now.`); }
    if (c === 'sudo rm -rf /') return print('nice try. the pyramid has stood for 4,600 years.', 'e');
    const fn = cmds[c]; if (!fn) return print(`command not found: ${c}. try "help".`, 'e');
    const r = fn(); if (r) print(r);
  }
  function openTerm() { api.onTerm && api.onTerm(); term.hidden = false; if (!out.textContent) print('Welcome to adham@saqqara. Type "help".'); setTimeout(() => input.focus(), 30); lenis.stop(); }
  function closeTerm() { term.hidden = true; lenis.start(); $('#term-btn').focus(); }
  $('#term-btn').addEventListener('click', openTerm);
  $('#term-close').addEventListener('click', closeTerm);
  term.addEventListener('click', (e) => { if (e.target === term) closeTerm(); });
  $('#term-form').addEventListener('submit', (e) => { e.preventDefault(); run(input.value); input.value = ''; });
  // sound toggle
  const sBtn = $('#sound');
  const syncSound = () => { sBtn.setAttribute('aria-pressed', String(sound.on)); sBtn.title = sound.on ? 'Sound on' : 'Sound off'; sBtn.classList.toggle('on', sound.on); };
  sBtn.addEventListener('click', () => { sound.toggle(); syncSound(); api.onSound && api.onSound(sound.on); try { localStorage.setItem('adham-sound', sound.on ? '1' : '0'); } catch (e) {} });
  document.addEventListener('visibilitychange', () => sound.pause(document.hidden));
  syncSound();

  loadGitHub($('#gh-live'));

  addEventListener('keydown', (e) => {
    const typingField = /INPUT|TEXTAREA/.test(document.activeElement?.tagName);
    if (!typingField && term.hidden && (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'PageDown' || e.key === 'PageUp')) {
      e.preventDefault(); const cur = api.current ?? 0; goTo(Math.max(0, Math.min(sections.length - 1, cur + (e.key === 'ArrowDown' || e.key === 'PageDown' ? 1 : -1)))); return;
    }
    if (e.key === 'Escape' && !term.hidden) closeTerm();
    else if ((e.key === '`' || e.key === '~') && !typingField) { e.preventDefault(); term.hidden ? openTerm() : closeTerm(); }
  });

  // mood chip under the minimap
  const moodChip = $('#mood-chip'); let lastMood = '';
  api.moodChip = (m, hex) => { if (m === lastMood) return; lastMood = m; moodChip.querySelector('span').textContent = `mood: ${m}`; const c = '#' + hex.toString(16).padStart(6, '0'); moodChip.querySelector('i').style.background = c; moodChip.querySelector('i').style.boxShadow = `0 0 10px ${c}`; };

  // artifacts: counter, toasts, panel
  const artBtn = $('#art-btn'), artCount = $('#art-count'), artPanel = $('#art-panel'), artList = $('#art-list'), toasts = $('#toasts');
  const drawArt = () => {
    artCount.textContent = artifacts.count(); $('#art-of').textContent = `${artifacts.count()}/${artifacts.list.length}`;
    artList.innerHTML = artifacts.list.map((a) => `<li class="${artifacts.has(a.id) ? 'got' : ''}"><span class="ic">${a.icon}</span><div><b>${artifacts.has(a.id) ? a.name : '???'}</b><span>${a.hint}</span></div></li>`).join('');
  };
  function openArt() { drawArt(); artPanel.hidden = false; lenis.stop(); }
  const closeArt = () => { artPanel.hidden = true; lenis.start(); };
  artBtn.addEventListener('click', openArt); $('#art-close').addEventListener('click', closeArt);
  artPanel.addEventListener('click', (e) => { if (e.target === artPanel) closeArt(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !artPanel.hidden) closeArt(); });
  artifacts.onUnlock((a, n, total) => {
    drawArt(); artBtn.classList.remove('bump'); void artBtn.offsetWidth; artBtn.classList.add('bump');
    const t = document.createElement('div'); t.className = 'toast';
    const ic = document.createElement('span'); ic.className = 'ic'; ic.textContent = a.icon;
    const tx = document.createElement('div'); tx.innerHTML = `<small>Artifact ${n}/${total} unlocked</small>`; const b = document.createElement('b'); b.textContent = a.name; tx.append(b);
    t.append(ic, tx); toasts.append(t);
    gsap.fromTo(t, { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'back.out(2)' });
    gsap.to(t, { opacity: 0, y: 10, delay: 3.6, duration: 0.5, onComplete: () => t.remove() });
  });
  drawArt();

  // logos: drop any icon that fails to load (offline or blocked)
  document.querySelectorAll('img.lg').forEach((i) => { const kill = () => { if (i.closest('.certs,.wall')) { const ph = document.createElement('span'); ph.className = 'lg-ph'; i.replaceWith(ph); } else i.remove(); }; if (i.complete && !i.naturalWidth) kill(); else i.addEventListener('error', kill); });

  if (!reduced) {
    // custom cursor
    const cur = $('#cursor'), dot = cur.querySelector('.c-dot'), ring = cur.querySelector('.c-ring'); let cx = innerWidth / 2, cy = innerHeight / 2, rx = cx, ry = cy;
    addEventListener('pointermove', (e) => { cx = e.clientX; cy = e.clientY; cur.classList.toggle('hot', !!e.target.closest('a,button,input,textarea,label,[data-go]') || document.body.style.cursor === 'pointer' || canvasHot()); });
    const canvasHot = () => $('#scene') && $('#scene').style.cursor === 'pointer';
    gsap.ticker.add(() => { rx += (cx - rx) * 0.2; ry += (cy - ry) * 0.2; dot.style.transform = `translate(${cx}px,${cy}px)`; ring.style.transform = `translate(${rx}px,${ry}px)`; });
    // magnetic buttons
    document.querySelectorAll('.mag').forEach((b) => {
      b.addEventListener('pointermove', (e) => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35, duration: 0.3 }); });
      b.addEventListener('pointerleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' }));
    });
    // 3D tilt + glare on cards
    document.querySelectorAll('.tilt').forEach((el) => {
      el.addEventListener('pointermove', (e) => { if (innerWidth <= 820) return; const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 6}deg)`; el.style.setProperty('--gx', `${x * 100}%`); el.style.setProperty('--gy', `${y * 100}%`); });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
    // count-up numbers
    document.querySelectorAll('[data-count]').forEach((el) => {
      const end = +el.dataset.count, suf = el.dataset.suffix || '', from = end > 1000 ? end - 30 : 0, o = { v: from };
      ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: () => (el.textContent = Math.round(o.v) + suf) }) });
    });
  }

  return api;
}
