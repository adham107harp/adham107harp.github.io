#!/bin/sh
npx esbuild src/main.js --bundle --minify --format=esm --target=es2020 --outfile=dist/app.js --alias:three/addons=./node_modules/three/examples/jsm --log-level=warning
