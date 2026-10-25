#!/usr/bin/env node
// Builds the web app (Expo export) and applies the small changes the site needs on top of it:
//   - the Ionicons font under a clean path (/fonts/ionicons.ttf) and its @font-face rule
//   - MathHelper's own favicon and home-screen icon (scripts/web-static/)
// usage: node scripts/buildWeb.js [--out <dir>]      default: web-dist/
// Used by .github/workflows/deploy.yml; run it yourself to check the web build locally.
const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const outFlag = process.argv.indexOf('--out');
const out = path.resolve(root, outFlag > -1 ? process.argv[outFlag + 1] : 'web-dist');

const fail = (message) => { console.error(`build-web: ${message}`); process.exit(1); };

fs.rmSync(out, { recursive: true, force: true });
console.log(`Exporting the web app to ${out} ...`);
const exported = spawnSync('npx', ['expo', 'export', '--platform', 'web', '--output-dir', out], { cwd: root, stdio: 'inherit' });
if (exported.status !== 0) fail('expo export failed');

// Ionicons font: Expo names it with a hash and buries it under assets/node_modules
const findFont = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) { const hit = findFont(p); if (hit) return hit; }
    else if (/^Ionicons\..*\.ttf$/.test(entry.name)) return p;
  }
  return null;
};
const font = findFont(path.join(out, 'assets'));
if (!font) fail('Ionicons font not found in the export');
fs.mkdirSync(path.join(out, 'fonts'), { recursive: true });
fs.copyFileSync(font, path.join(out, 'fonts', 'ionicons.ttf'));

// Own favicon files
const staticDir = path.join(__dirname, 'web-static');
for (const name of fs.readdirSync(staticDir)) fs.copyFileSync(path.join(staticDir, name), path.join(out, name));

// index.html: font rule + favicon links
const indexPath = path.join(out, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
const fontCss = `<style id="expo-fonts">
      @font-face {
        font-family: "ionicons";
        src: url("/fonts/ionicons.ttf") format("truetype");
        font-display: swap;
      }
    </style>`;
const icons = `<link rel="icon" type="image/png" sizes="256x256" href="/favicon.png?v=3" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" />
  <link rel="apple-touch-icon" href="/favicon.png?v=3" />`;
html = html.replace(/<link rel="icon"[^>]*>/, '');
if (!html.includes('</head>')) fail('index.html has no </head>');
html = html.replace('</head>', `  ${fontCss}\n  ${icons}\n</head>`);
fs.writeFileSync(indexPath, html);

// Sanity: the page must reference a bundle that exists
const bundle = html.match(/\/_expo\/static\/js\/web\/index-[a-f0-9]+\.js/);
if (!bundle || !fs.existsSync(path.join(out, bundle[0]))) fail('index.html does not point to an existing bundle');
console.log(`Done: ${path.relative(root, out) || out} (bundle ${path.basename(bundle[0])})`);
