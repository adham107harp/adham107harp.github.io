# Adham Harp — 3D portfolio

A scroll-driven 3D portfolio built as Djoser's step pyramid at night: every step is one layer of my stack, and a mini version of me climbs it with you and explains each level (English or Egyptian Arabic).

Built with [three.js](https://github.com/mrdoob/three.js), [GSAP](https://github.com/greensock/GSAP) (ScrollTrigger, SplitText) and [Lenis](https://github.com/darkroomengineering/lenis). Every 3D shape, including the character, is code: no model files.

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
| `src/main.js` | Scroll → camera/character, bubble, terminal, contact form |

Easter eggs: press <kbd>`</kbd> for the terminal (`help`, `sudo hire adham`), click mini-Adham to poke him.
