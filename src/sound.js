// Generated sound: desert wind, a soft drone with sparse oud-like plucks in a Hijaz mode, and UI effects.
// Nothing is loaded from files; everything is synthesised with WebAudio. Off until the visitor turns it on.
let ctx = null, master = null, musicBus = null, sfxBus = null, on = false, pluckTimer = null, lastTick = 0;

const HIJAZ = [146.83, 155.56, 185.0, 196.0, 220.0, 233.08, 261.63, 293.66, 311.13, 369.99]; // D Eb F# G A Bb C D Eb F#

function noiseBuffer(sec = 2) {
  const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate), d = b.getChannelData(0);
  let last = 0; for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; } // brown-ish
  return b;
}

function init() {
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain(); master.gain.value = 0;
  const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3;
  master.connect(comp).connect(ctx.destination);
  musicBus = ctx.createGain(); musicBus.gain.value = 0.9; musicBus.connect(master);
  sfxBus = ctx.createGain(); sfxBus.gain.value = 0.8; sfxBus.connect(master);

  // echo for space
  const delay = ctx.createDelay(1.5); delay.delayTime.value = 0.42; const fb = ctx.createGain(); fb.gain.value = 0.33; const dl = ctx.createBiquadFilter(); dl.type = 'lowpass'; dl.frequency.value = 2200;
  delay.connect(dl).connect(fb).connect(delay); const wet = ctx.createGain(); wet.gain.value = 0.35; delay.connect(wet).connect(musicBus);
  musicBus.echo = delay;

  // wind
  const src = ctx.createBufferSource(); src.buffer = noiseBuffer(4); src.loop = true;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 420; bp.Q.value = 0.7;
  const wg = ctx.createGain(); wg.gain.value = 0.16;
  const lfo = ctx.createOscillator(); lfo.frequency.value = 0.07; const lg = ctx.createGain(); lg.gain.value = 260; lfo.connect(lg).connect(bp.frequency);
  const lfo2 = ctx.createOscillator(); lfo2.frequency.value = 0.11; const lg2 = ctx.createGain(); lg2.gain.value = 0.07; lfo2.connect(lg2).connect(wg.gain);
  src.connect(bp).connect(wg).connect(musicBus); src.start(); lfo.start(); lfo2.start();

  // drone on D and A
  const dlp = ctx.createBiquadFilter(); dlp.type = 'lowpass'; dlp.frequency.value = 520;
  const dg = ctx.createGain(); dg.gain.value = 0.05; dlp.connect(dg).connect(musicBus);
  for (const [f, type, det] of [[73.42, 'sine', 0], [110, 'triangle', 4], [146.83, 'sine', -3]]) { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f; o.detune.value = det; o.connect(dlp); o.start(); }
  const trem = ctx.createOscillator(); trem.frequency.value = 0.18; const tg = ctx.createGain(); tg.gain.value = 0.015; trem.connect(tg).connect(dg.gain); trem.start();
}

function pluck(freq, when = 0, vel = 0.12) {
  const t = ctx.currentTime + when;
  const g = ctx.createGain(); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vel, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0008, t + 1.8);
  const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(freq * 9, t); lp.frequency.exponentialRampToValueAtTime(freq * 1.6, t + 0.6);
  for (const [m, a, type] of [[1, 1, 'triangle'], [2, 0.35, 'sine'], [3.01, 0.12, 'sine']]) {
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq * m; const og = ctx.createGain(); og.gain.value = a; o.connect(og).connect(lp); o.start(t); o.stop(t + 2);
  }
  lp.connect(g); g.connect(musicBus); g.connect(musicBus.echo);
}

function phrase() {
  if (!on) return;
  let i = 2 + ((Math.random() * 5) | 0); const n = 2 + ((Math.random() * 4) | 0); let w = 0;
  for (let k = 0; k < n; k++) { pluck(HIJAZ[i], w, 0.09 + Math.random() * 0.05); w += [0.28, 0.42, 0.56][(Math.random() * 3) | 0]; i = Math.max(0, Math.min(HIJAZ.length - 1, i + [-2, -1, -1, 1, 1, 2][(Math.random() * 6) | 0])); }
  pluckTimer = setTimeout(phrase, (w + 2.2 + Math.random() * 4) * 1000);
}

function env(node, t, a, d, peak) { node.gain.setValueAtTime(0, t); node.gain.linearRampToValueAtTime(peak, t + a); node.gain.exponentialRampToValueAtTime(0.0005, t + a + d); }

const SFX = {
  tick() { const n = ctx.currentTime; if (n - lastTick < 0.045) return; lastTick = n; const o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.value = 1700 + Math.random() * 500; env(g, n, 0.002, 0.03, 0.025); o.connect(g).connect(sfxBus); o.start(n); o.stop(n + 0.05); },
  arrive() { [0, 0.11].forEach((w, i) => { const t = ctx.currentTime + w, o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.value = i ? 880 : 659.25; env(g, t, 0.01, 0.6, 0.07); o.connect(g).connect(sfxBus); o.start(t); o.stop(t + 0.7); }); },
  poke() { const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(260, t); o.frequency.exponentialRampToValueAtTime(620, t + 0.12); o.frequency.exponentialRampToValueAtTime(330, t + 0.3); env(g, t, 0.01, 0.32, 0.12); o.connect(g).connect(sfxBus); o.start(t); o.stop(t + 0.4); },
  pop() {
    const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noiseBuffer(0.3); const bp = ctx.createBiquadFilter(); bp.type = 'highpass'; bp.frequency.value = 900; const g = ctx.createGain(); env(g, t, 0.001, 0.12, 0.5);
    s.connect(bp).connect(g).connect(sfxBus); s.start(t); s.stop(t + 0.2);
  },
  beam() {
    const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noiseBuffer(3); const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 2; bp.frequency.setValueAtTime(200, t); bp.frequency.exponentialRampToValueAtTime(3200, t + 1.2);
    const g = ctx.createGain(); env(g, t, 0.25, 1.8, 0.35); s.connect(bp).connect(g).connect(sfxBus); s.start(t); s.stop(t + 2.4);
    [587.33, 739.99, 880, 1174.66].forEach((f, i) => { const o = ctx.createOscillator(), og = ctx.createGain(); o.type = 'sine'; o.frequency.value = f; env(og, t + 0.3 + i * 0.12, 0.02, 1.6, 0.05); o.connect(og).connect(sfxBus); o.connect(og); o.start(t); o.stop(t + 3); });
  },
  whoosh() { const t = ctx.currentTime, s = ctx.createBufferSource(); s.buffer = noiseBuffer(1); const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2; bp.frequency.setValueAtTime(300, t); bp.frequency.exponentialRampToValueAtTime(1400, t + 0.5); const g = ctx.createGain(); env(g, t, 0.15, 0.5, 0.18); s.connect(bp).connect(g).connect(sfxBus); s.start(t); s.stop(t + 0.8); },
};

export const sound = {
  get on() { return on; },
  toggle() {
    if (!ctx) init();
    on = !on;
    if (on) { ctx.resume(); master.gain.cancelScheduledValues(ctx.currentTime); master.gain.linearRampToValueAtTime(0.55, ctx.currentTime + 1.2); clearTimeout(pluckTimer); pluckTimer = setTimeout(phrase, 900); }
    else { master.gain.cancelScheduledValues(ctx.currentTime); master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4); clearTimeout(pluckTimer); }
    return on;
  },
  play(name) { if (!on || !ctx || ctx.state !== 'running') return; try { SFX[name] && SFX[name](); } catch (e) {} },
  pause(p) { if (!ctx) return; if (p) ctx.suspend(); else if (on) ctx.resume(); },
};
