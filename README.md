# Adham Harp — 3D portfolio

[![Portfolio preview](assets/og.jpg)](https://adham107harp.github.io/)

**Live:** https://adham107harp.github.io/

A scroll-driven 3D portfolio built as Djoser's step pyramid at night: every step is one layer of my stack, and a mini version of me climbs it with you and explains each level (English or Egyptian Arabic).

Built with [three.js](https://github.com/mrdoob/three.js), [GSAP](https://github.com/greensock/GSAP) (ScrollTrigger, SplitText) and [Lenis](https://github.com/darkroomengineering/lenis). Every 3D shape, texture and sound is generated in code: no model, image-texture or audio files.

## Features

- Physically based rendering: procedural sandstone (albedo, normal and roughness maps), sky-based environment lighting, soft moon shadows, ambient occlusion (GTAO), bloom and a light film grade
- A chibi guide with fabric, skin and hair materials who walks the stairs, follows your cursor and talks in a typed speech bubble
- Live GitHub panel (public API, cached) with my latest repos and commits
- Generated sound, off by default: desert wind, a drone with oud-like plucks in a Hijaz mode, and UI effects
- Click the moon, the ICPC balloons, the rocket and the golden capstone
- Terminal easter egg, arrow-key navigation between levels, adaptive quality for slower devices, reduced-motion support

## Run it

```bash
npm install
./build.sh                 # bundles src/ into dist/app.js
python -m http.server 8000 # open http://localhost:8000
```

## Deploy on GitHub Pages

Push this folder to a repo (for example `adham107harp.github.io`), then Settings → Pages → Deploy from branch → `main` / root. `dist/app.js` is committed, so no build step is needed on GitHub.

## Where things live

| File | What it does |
|---|---|
| `index.html` | All the text content (edit your projects here) |
| `css/style.css` | Layout, panels, bubble, terminal |
| `src/world.js` | Sky, dunes, the pyramid, stairs, packets, props per level |
| `src/guide.js` | Mini-Adham: body, face, animations, and the climbing path |
| `src/lines.js` | What mini-Adham says on each level (EN + AR) |
| `src/textures.js` | Procedural PBR textures (stone, sand, moon) |
| `src/sound.js` | WebAudio ambience and effects |
| `src/github.js` | Live GitHub data |
| `src/main.js` | Scroll → camera/character, post-processing, bubble, terminal, contact form |

Easter eggs: press <kbd>`</kbd> for the terminal (`help`, `sudo hire adham`), click mini-Adham to poke him.
