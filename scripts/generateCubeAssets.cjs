const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = fs.existsSync(edge) ? edge : chrome;

const svgColor = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <defs>
    <linearGradient id="konanTopGrad" x1="44" y1="74" x2="156" y2="74" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#cffafe" />
      <stop offset="45%" stop-color="#bae6fd" />
      <stop offset="100%" stop-color="#7dd3fc" />
    </linearGradient>
    <linearGradient id="konanLeftGrad" x1="44" y1="74" x2="100" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <linearGradient id="konanRightGrad" x1="100" y1="106" x2="156" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0ea5e9" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="konanStarGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
  </defs>
  <g>
    <!-- Structure extérieure Bleu Nuit -->
    <path d="M 100 39 L 159 72.5 L 159 139.5 L 100 173 L 41 139.5 L 41 72.5 Z" fill="#09284d" stroke="#09284d" stroke-width="9" stroke-linejoin="round" stroke-linecap="round" />
    
    <!-- Face Supérieure -->
    <polygon points="100,42 156,74 100,106 44,74" fill="url(#konanTopGrad)" stroke="#09284d" stroke-width="5" stroke-linejoin="round" />
    <polygon points="100,47 151,74 100,101 49,74" fill="none" stroke="#f0fdff" stroke-width="1.6" stroke-opacity="0.75" stroke-linejoin="round" />
    
    <!-- Face Gauche -->
    <polygon points="44,74 100,106 100,170 44,138" fill="url(#konanLeftGrad)" stroke="#09284d" stroke-width="5" stroke-linejoin="round" />
    <polygon points="48,77 96,105 96,164 48,135" fill="none" stroke="#e0f2fe" stroke-width="1.6" stroke-opacity="0.6" stroke-linejoin="round" />
    
    <!-- Face Droite -->
    <polygon points="100,106 156,74 156,138 100,170" fill="url(#konanRightGrad)" stroke="#09284d" stroke-width="5" stroke-linejoin="round" />
    <polygon points="104,105 152,77 152,135 104,164" fill="none" stroke="#bae6fd" stroke-width="1.6" stroke-opacity="0.5" stroke-linejoin="round" />
    
    <!-- L'arête centrale frontale & division en Y -->
    <line x1="100" y1="106" x2="100" y2="170" stroke="#09284d" stroke-width="5.5" stroke-linecap="round" />
    <line x1="100" y1="106" x2="44" y2="74" stroke="#09284d" stroke-width="5.5" stroke-linecap="round" />
    <line x1="100" y1="106" x2="156" y2="74" stroke="#09284d" stroke-width="5.5" stroke-linecap="round" />

    <!-- LETTRE K SUR LA FACE SUPERIEURE (Perspective Isometrique) -->
    <g transform="translate(100, 74)">
      <g transform="rotate(-30) skewX(30) scale(0.85, 0.5)">
        <text x="0" y="10" text-anchor="middle" font-size="44" font-weight="900" font-family="Arial, Helvetica, sans-serif" fill="#0a325e">K</text>
      </g>
    </g>

    <!-- LETTRE K SUR LA FACE GAUCHE (Perspective Isometrique) -->
    <g transform="translate(71, 122)">
      <g transform="skewY(30) scale(0.9, 0.95)">
        <text x="0" y="5" text-anchor="middle" font-size="46" font-weight="900" font-family="Arial, Helvetica, sans-serif" fill="#0a325e">K</text>
      </g>
    </g>

    <!-- LETTRE K SUR LA FACE DROITE (Perspective Isometrique) -->
    <g transform="translate(129, 122)">
      <g transform="skewY(-30) scale(0.9, 0.95)">
        <text x="0" y="5" text-anchor="middle" font-size="46" font-weight="900" font-family="Arial, Helvetica, sans-serif" fill="#0a325e">K</text>
      </g>
    </g>

    <!-- ÉTOILES / ÉTINCELLES DU LOGO KONAN -->
    <g transform="translate(174, 46) scale(0.95)">
      <path d="M 0 -13 Q 0 0 13 0 Q 0 0 0 13 Q 0 0 -13 0 Q 0 0 0 -13 Z" fill="url(#konanStarGrad)" />
    </g>
    <g transform="translate(26, 154) scale(0.85)">
      <path d="M 0 -12 Q 0 0 12 0 Q 0 0 0 12 Q 0 0 -12 0 Q 0 0 0 -12 Z" fill="url(#konanStarGrad)" />
    </g>
  </g>
</svg>`;

// SVG Badge pour la barre d'état Android (silhouette avec découpe des K)
const svgBadge = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <g>
    <!-- Cube noir plein -->
    <path d="M 100 39 L 159 72.5 L 159 139.5 L 100 173 L 41 139.5 L 41 72.5 Z" fill="#0b1329" />
    
    <!-- Lignes de division en Y (découpe transparente/blanche) -->
    <line x1="100" y1="106" x2="100" y2="173" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
    <line x1="100" y1="106" x2="41" y2="72.5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
    <line x1="100" y1="106" x2="159" y2="72.5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />

    <!-- LETTRES K BLANCHES EN HAUTE VISIBILITE -->
    <g transform="translate(100, 74)">
      <g transform="rotate(-30) skewX(30) scale(0.85, 0.5)">
        <text x="0" y="10" text-anchor="middle" font-size="44" font-weight="900" font-family="Arial, Helvetica, sans-serif" fill="#ffffff">K</text>
      </g>
    </g>
    <g transform="translate(71, 122)">
      <g transform="skewY(30) scale(0.9, 0.95)">
        <text x="0" y="5" text-anchor="middle" font-size="46" font-weight="900" font-family="Arial, Helvetica, sans-serif" fill="#ffffff">K</text>
      </g>
    </g>
    <g transform="translate(129, 122)">
      <g transform="skewY(-30) scale(0.9, 0.95)">
        <text x="0" y="5" text-anchor="middle" font-size="46" font-weight="900" font-family="Arial, Helvetica, sans-serif" fill="#ffffff">K</text>
      </g>
    </g>
  </g>
</svg>`;

function renderHtml(svg, size) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${size}px; height: ${size}px; background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; }
  svg { width: ${Math.round(size * 0.95)}px; height: ${Math.round(size * 0.95)}px; }
</style>
</head>
<body>
${svg}
</body>
</html>`;
}

function captureHtml(htmlName, outputPng, size) {
  const fileUri = 'file:///' + path.resolve(htmlName).replace(/\\/g, '/');
  const outPath = path.resolve(outputPng);
  execSync(`"${browser}" --headless --disable-gpu --no-sandbox --default-background-color=00000000 --window-size=${size},${size} --screenshot="${outPath}" "${fileUri}"`);
}

// 1. Générer cube-icon-512.png
fs.writeFileSync('temp_icon512.html', renderHtml(svgColor, 512));
captureHtml('temp_icon512.html', 'public/cube-icon-512.png', 512);

// 2. Générer cube-icon.png (192x192)
fs.writeFileSync('temp_icon192.html', renderHtml(svgColor, 192));
captureHtml('temp_icon192.html', 'public/cube-icon.png', 192);

// 3. Générer cube-badge.png (96x96)
fs.writeFileSync('temp_badge96.html', renderHtml(svgBadge, 96));
captureHtml('temp_badge96.html', 'public/cube-badge.png', 96);

// 4. Générer cube-badge-192.png (192x192)
fs.writeFileSync('temp_badge192.html', renderHtml(svgBadge, 192));
captureHtml('temp_badge192.html', 'public/cube-badge-192.png', 192);

// Nettoyage temporaire
['temp_icon512.html', 'temp_icon192.html', 'temp_badge96.html', 'temp_badge192.html'].forEach(f => {
  if (fs.existsSync(f)) fs.unlinkSync(f);
});

console.log('✅ Tous les assets Cube avec les lettres K ont été générés avec succès !');
console.log('cube-icon-512.png:', fs.statSync('public/cube-icon-512.png').size, 'octets');
console.log('cube-icon.png:', fs.statSync('public/cube-icon.png').size, 'octets');
console.log('cube-badge.png:', fs.statSync('public/cube-badge.png').size, 'octets');
