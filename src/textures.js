// Procedural PBR textures: albedo, normal and roughness from one height field.
import * as THREE from 'three';

export function rand(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// low-res fractal value noise, drawn scaled up (fast)
function noiseCanvas(size, seed, oct = 5) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d'), img = g.createImageData(size, size), r = rand(seed);
  const grids = []; for (let o = 0; o < oct; o++) { const n = 4 << o, a = new Float32Array((n + 1) * (n + 1)); for (let i = 0; i < a.length; i++) a[i] = r(); for (let k = 0; k <= n; k++) { a[k * (n + 1) + n] = a[k * (n + 1)]; a[n * (n + 1) + k] = a[k]; } grids.push([n, a]); }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let v = 0, amp = 0.5, tot = 0;
    for (const [n, a] of grids) {
      const fx = (x / size) * n, fy = (y / size) * n, ix = fx | 0, iy = fy | 0, tx = fx - ix, ty = fy - iy;
      const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty), w = n + 1;
      const v0 = a[iy * w + ix] * (1 - sx) + a[iy * w + ix + 1] * sx, v1 = a[(iy + 1) * w + ix] * (1 - sx) + a[(iy + 1) * w + ix + 1] * sx;
      v += (v0 * (1 - sy) + v1 * sy) * amp; tot += amp; amp *= 0.5;
    }
    const k = (y * size + x) * 4, b = (v / tot) * 255; img.data[k] = img.data[k + 1] = img.data[k + 2] = b; img.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0); return c;
}

function heightToNormal(hCanvas, strength = 2.5) {
  const w = hCanvas.width, h = hCanvas.height, src = hCanvas.getContext('2d').getImageData(0, 0, w, h).data;
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'), out = g.createImageData(w, h), d = out.data;
  const H = (x, y) => src[(((y + h) % h) * w + ((x + w) % w)) * 4] / 255;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y) - H(x - 1, y)) * strength, dy = (H(x, y + 1) - H(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1), k = (y * w + x) * 4;
    d[k] = (-dx / l * 0.5 + 0.5) * 255; d[k + 1] = (dy / l * 0.5 + 0.5) * 255; d[k + 2] = (1 / l * 0.5 + 0.5) * 255; d[k + 3] = 255;
  }
  g.putImageData(out, 0, 0); return c;
}

function toTex(c, srgb) { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; }

// sandstone masonry: rows of blocks with weathering, chips and grime
export function masonry({ w = 1024, h = 512, rows = 4, seed = 1 } = {}) {
  const r = rand(seed);
  const col = document.createElement('canvas'), hei = document.createElement('canvas'), rou = document.createElement('canvas');
  for (const c of [col, hei, rou]) { c.width = w; c.height = h; }
  const gc = col.getContext('2d'), gh = hei.getContext('2d'), gr = rou.getContext('2d');
  gc.fillStyle = '#7a5a3c'; gc.fillRect(0, 0, w, h);
  gh.fillStyle = '#1a1a1a'; gh.fillRect(0, 0, w, h);
  gr.fillStyle = '#f2f2f2'; gr.fillRect(0, 0, w, h);
  const rh = h / rows, gap = 5;
  for (let y = 0; y < rows; y++) {
    let x = -r() * 120;
    while (x < w) {
      const bw = 110 + r() * 150, x0 = x + gap / 2, y0 = y * rh + gap / 2, ww = bw - gap, hh = rh - gap;
      const hue = 30 + r() * 8, sat = 36 + r() * 14, lig = 60 + r() * 12;
      const grad = gc.createLinearGradient(0, y0, 0, y0 + hh);
      grad.addColorStop(0, `hsl(${hue},${sat}%,${lig + 4}%)`); grad.addColorStop(0.75, `hsl(${hue},${sat}%,${lig}%)`); grad.addColorStop(1, `hsl(${hue - 4},${sat - 6}%,${lig - 12}%)`);
      gc.fillStyle = grad; roundRect(gc, x0, y0, ww, hh, 7); gc.fill();
      // height: bevelled block
      const hb = 150 + r() * 60;
      for (let k = 0; k < 6; k++) { const v = Math.min(255, hb * (0.55 + k * 0.09)) | 0; gh.fillStyle = `rgb(${v},${v},${v})`; roundRect(gh, x0 + k * 1.6, y0 + k * 1.6, ww - k * 3.2, hh - k * 3.2, 7); gh.fill(); }
      gr.fillStyle = `rgb(${(200 + r() * 40) | 0},${(200 + r() * 40) | 0},${(200 + r() * 40) | 0})`; roundRect(gr, x0, y0, ww, hh, 7); gr.fill();
      // chips on edges
      for (let k = 0; k < 2; k++) { // irregular chips on edges
        const cx = x0 + r() * ww, cy = r() < 0.5 ? y0 + r() * 5 : y0 + hh - r() * 5, cr = 3 + r() * 6;
        gh.fillStyle = '#5a5a5a'; gc.fillStyle = `hsla(${hue},${sat}%,${lig - 10}%,.7)`;
        for (const g of [gh, gc]) { g.beginPath(); for (let a = 0; a < 7; a++) { const rr = cr * (0.5 + r() * 0.7), an = (a / 7) * Math.PI * 2; g.lineTo(cx + Math.cos(an) * rr * 1.6, cy + Math.sin(an) * rr * 0.7); } g.closePath(); g.fill(); }
      }
      x += bw;
    }
  }
  // weathering and grain
  const n1 = noiseCanvas(128, seed + 7, 5), n2 = noiseCanvas(256, seed + 13, 4);
  gc.globalCompositeOperation = 'multiply'; gc.globalAlpha = 0.35; gc.drawImage(n1, 0, 0, w, h); gc.globalAlpha = 0.25; gc.drawImage(n2, 0, 0, w, h);
  gc.globalCompositeOperation = 'overlay'; gc.globalAlpha = 0.25; gc.drawImage(n2, 0, 0, w / 2, h / 2); gc.drawImage(n2, w / 2, 0, w / 2, h / 2); gc.drawImage(n2, 0, h / 2, w / 2, h / 2); gc.drawImage(n2, w / 2, h / 2, w / 2, h / 2);
  gc.globalCompositeOperation = 'source-over'; gc.globalAlpha = 1;
  gh.globalCompositeOperation = 'overlay'; gh.globalAlpha = 0.6; gh.drawImage(n2, 0, 0, w, h); gh.globalAlpha = 1; gh.globalCompositeOperation = 'source-over';
  // fine pits
  const img = gc.getImageData(0, 0, w, h), hd = gh.getImageData(0, 0, w, h);
  for (let i = 0; i < w * h * 0.008; i++) {
    const p = ((r() * w * h) | 0) * 4, f = 0.7 + r() * 0.2;
    img.data[p] *= f; img.data[p + 1] *= f; img.data[p + 2] *= f; hd.data[p] = hd.data[p + 1] = hd.data[p + 2] = hd.data[p] * 0.6;
  }
  gc.putImageData(img, 0, 0); gh.putImageData(hd, 0, 0);
  return { map: toTex(col, true), normalMap: toTex(heightToNormal(hei, 3.2), false), roughnessMap: toTex(rou, false) };
}

// rippled sand
export function sand(seed = 4) {
  const s = 512, c = document.createElement('canvas'); c.width = c.height = s; const g = c.getContext('2d');
  const n = noiseCanvas(128, seed, 4), img = g.createImageData(s, s), nd = n.getContext('2d').getImageData(0, 0, 128, 128).data;
  for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
    const nv = nd[(((y >> 2) & 127) * 128 + ((x >> 2) & 127)) * 4] / 255;
    const v = 0.5 + 0.5 * Math.sin((y + nv * 70) * 0.19 + Math.sin(x * 0.02) * 2);
    const k = (y * s + x) * 4, b = (v * 0.75 + Math.random() * 0.25) * 255; img.data[k] = img.data[k + 1] = img.data[k + 2] = b; img.data[k + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return toTex(heightToNormal(c, 1.6), false);
}

// moon with craters
export function moonCanvas(seed = 9) {
  const s = 512, c = document.createElement('canvas'); c.width = c.height = s; const g = c.getContext('2d'), r = rand(seed);
  g.fillStyle = '#e9e2cf'; g.fillRect(0, 0, s, s);
  g.globalCompositeOperation = 'multiply'; g.globalAlpha = 0.6; g.drawImage(noiseCanvas(64, seed, 4), 0, 0, s, s);
  g.globalAlpha = 1;
  for (let i = 0; i < 9; i++) { g.fillStyle = 'rgba(120,115,110,.35)'; g.beginPath(); g.ellipse(r() * s, r() * s, 30 + r() * 80, 20 + r() * 60, r() * 3, 0, 7); g.fill(); }
  g.globalCompositeOperation = 'source-over';
  for (let i = 0; i < 70; i++) {
    const x = r() * s, y = r() * s, cr = 2 + r() * r() * 22;
    g.fillStyle = 'rgba(90,85,80,.35)'; g.beginPath(); g.arc(x, y, cr, 0, 7); g.fill();
    g.strokeStyle = 'rgba(255,250,235,.35)'; g.lineWidth = 1.2; g.beginPath(); g.arc(x - cr * 0.15, y - cr * 0.15, cr, Math.PI * 0.9, Math.PI * 1.8); g.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
