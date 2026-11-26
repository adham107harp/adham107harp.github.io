#!/bin/sh
# Bundle src/ into dist/app.js, then stamp index.html so browsers fetch the new files after a deploy.
set -e
npx esbuild src/main.js --bundle --minify --format=esm --target=es2020 --outfile=dist/app.js --alias:three/addons=./node_modules/three/examples/jsm --log-level=warning
v=$(cat dist/app.js css/style.css | md5sum | cut -c1-8)
sed -i -E "s#(dist/app\.js|css/style\.css)(\?v=[a-f0-9]+)?\"#\1?v=$v\"#g" index.html
echo "built (v=$v)"
