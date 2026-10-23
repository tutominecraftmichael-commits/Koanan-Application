const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const browser = fs.existsSync(edge) ? edge : chrome;

// SVG Officiel KONAN avec FOND BLEU NUIT & ÉTINCELLES BLEUES HAUTE VISIBILITÉ (Safe Zone Android)
const svgColor = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <defs>
    <!-- Fond Bleu Nuit Profond Premium (Évite le cercle blanc forcé par Android) -->
    <radialGradient id="konanBgGrad" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#0f2240" />
      <stop offset="45%" stop-color="#0a172c" />
      <stop offset="100%" stop-color="#050c18" />
    </radialGradient>

    <!-- Halo Ambiant Cyan doux au centre -->
    <radialGradient id="ambientGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.18" />
      <stop offset="60%" stop-color="#0284c7" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#0a172c" stop-opacity="0" />
    </radialGradient>

    <!-- Dégradé Face Supérieure (Reflet Glacé Lumineux) -->
    <linearGradient id="konanTopGrad" x1="44" y1="74" x2="156" y2="74" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#e0f7fe" />
      <stop offset="45%" stop-color="#bae6fd" />
      <stop offset="100%" stop-color="#7dd3fc" />
    </linearGradient>

    <!-- Dégradé Face Gauche (Cyan Électrique) -->
    <linearGradient id="konanLeftGrad" x1="44" y1="74" x2="100" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Dégradé Face Droite (Bleu Profond) -->
    <linearGradient id="konanRightGrad" x1="100" y1="106" x2="156" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0ea5e9" />
      <stop offset="50%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>

    <!-- Dégradé Étoile Sparkle Cyan Éclatant Haute Visibilité -->
    <linearGradient id="konanSparkGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="25%" stop-color="#7dd3fc" />
      <stop offset="60%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>

  <!-- 1. FOND TOTAL BLEU NUIT (Remplissage complet du canvas pour éviter le blanc Android) -->
  <rect width="200" height="200" fill="url(#konanBgGrad)" />
  <circle cx="100" cy="100" r="85" fill="url(#ambientGlow)" />

  <!-- 2. GROUPE DU CUBE 3D (légèrement proportionné pour rester parfait dans le masque circulaire Android) -->
  <g transform="translate(100, 102) scale(0.88) translate(-100, -104)">
    <!-- Structure extérieure Bleu Nuit / Navy -->
    <path d="M 100 39 L 159 72.5 L 159 139.5 L 100 173 L 41 139.5 L 41 72.5 Z" fill="#09284d" stroke="#09284d" stroke-width="8" stroke-linejoin="round" stroke-linecap="round" />
    
    <!-- Face Supérieure -->
    <polygon points="100,42 156,74 100,106 44,74" fill="url(#konanTopGrad)" stroke="#09284d" stroke-width="4.5" stroke-linejoin="round" />
    <polygon points="100,47 151,74 100,101 49,74" fill="none" stroke="#ffffff" stroke-width="1.8" stroke-opacity="0.8" stroke-linejoin="round" />
    
    <!-- Face Gauche -->
    <polygon points="44,74 100,106 100,170 44,138" fill="url(#konanLeftGrad)" stroke="#09284d" stroke-width="4.5" stroke-linejoin="round" />
    <polygon points="48,77 96,105 96,164 48,135" fill="none" stroke="#e0f2fe" stroke-width="1.6" stroke-opacity="0.6" stroke-linejoin="round" />
    
    <!-- Face Droite -->
    <polygon points="100,106 156,74 156,138 100,170" fill="url(#konanRightGrad)" stroke="#09284d" stroke-width="4.5" stroke-linejoin="round" />
    <polygon points="104,105 152,77 152,135 104,164" fill="none" stroke="#bae6fd" stroke-width="1.6" stroke-opacity="0.5" stroke-linejoin="round" />
    
    <!-- L'arête centrale frontale & division en Y -->
    <line x1="100" y1="106" x2="100" y2="170" stroke="#09284d" stroke-width="5" stroke-linecap="round" />
    <line x1="100" y1="106" x2="44" y2="74" stroke="#09284d" stroke-width="5" stroke-linecap="round" />
    <line x1="100" y1="106" x2="156" y2="74" stroke="#09284d" stroke-width="5" stroke-linecap="round" />

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
  </g>

  <!-- 3. DEUX PETITES ÉTINCELLES BLEUES / SPARKS REPOSITIONNÉES DANS LA SAFE ZONE CIRCULAIRE -->
  <!-- Spark 1 : En haut à droite, proche du cube, rayon ~64px (< 72px) avec halo cyan et coeur diamant blanc -->
  <g transform="translate(148, 52)">
    <!-- Halo cyan lumineux -->
    <circle cx="0" cy="0" r="14" fill="#38bdf8" opacity="0.3" />
    <circle cx="0" cy="0" r="8" fill="#7dd3fc" opacity="0.45" />
    <!-- Étoile 4 branches -->
    <path d="M 0 -13 Q 0 0 13 0 Q 0 0 0 13 Q 0 0 -13 0 Q 0 0 0 -13 Z" fill="url(#konanSparkGrad)" />
    <!-- Point diamant blanc pur au centre pour un éclat maximal -->
    <circle cx="0" cy="0" r="3.2" fill="#ffffff" />
  </g>

  <!-- Spark 2 : En bas à gauche, proche du cube, rayon ~62px (< 72px) avec halo cyan et coeur diamant blanc -->
  <g transform="translate(52, 144)">
    <!-- Halo cyan lumineux -->
    <circle cx="0" cy="0" r="12" fill="#38bdf8" opacity="0.3" />
    <circle cx="0" cy="0" r="7" fill="#7dd3fc" opacity="0.45" />
    <!-- Étoile 4 branches -->
    <path d="M 0 -11 Q 0 0 11 0 Q 0 0 0 11 Q 0 0 -11 0 Q 0 0 0 -11 Z" fill="url(#konanSparkGrad)" />
    <!-- Point diamant blanc pur au centre pour un éclat maximal -->
    <circle cx="0" cy="0" r="2.8" fill="#ffffff" />
  </g>
</svg>`;

// SVG Badge pour la barre d'état Android (silhouette blanche/transparente)
const svgBadge = `<svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <g>
    <path d="M 100 39 L 159 72.5 L 159 139.5 L 100 173 L 41 139.5 L 41 72.5 Z" fill="#0b1329" />
    <line x1="100" y1="106" x2="100" y2="173" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
    <line x1="100" y1="106" x2="41" y2="72.5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
    <line x1="100" y1="106" x2="159" y2="72.5" stroke="#ffffff" stroke-width="6" stroke-linecap="round" />
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

function renderHtml(svg, size, bgColor = '#0a172c') {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${size}px; height: ${size}px; background: ${bgColor}; overflow: hidden; display: flex; align-items: center; justify-content: center; }
  svg { width: 100%; height: 100%; display: block; }
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
  execSync(`"${browser}" --headless --disable-gpu --no-sandbox --window-size=${size},${size} --screenshot="${outPath}" "${fileUri}"`);
}

// 1. Générer cube-icon-512.png (512x512)
fs.writeFileSync('temp_icon512.html', renderHtml(svgColor, 512, '#0a172c'));
captureHtml('temp_icon512.html', 'public/cube-icon-512.png', 512);

// 2. Générer cube-icon.png (192x192)
fs.writeFileSync('temp_icon192.html', renderHtml(svgColor, 192, '#0a172c'));
captureHtml('temp_icon192.html', 'public/cube-icon.png', 192);

// 3. Générer logo-konan.png (512x512) - Utilisé par manifest & PWA maskable
captureHtml('temp_icon512.html', 'public/logo-konan.png', 512);

// 4. Générer logo.png (512x512)
captureHtml('temp_icon512.html', 'public/logo.png', 512);

// 5. Générer logo192.png (192x192)
captureHtml('temp_icon192.html', 'public/logo192.png', 192);

// 6. Générer konan-logo.png (512x512)
captureHtml('temp_icon512.html', 'public/konan-logo.png', 512);

// 7. Générer konan-logo-square.png (512x512)
captureHtml('temp_icon512.html', 'public/konan-logo-square.png', 512);

// 8. Générer favicon.png (64x64)
fs.writeFileSync('temp_fav64.html', renderHtml(svgColor, 64, '#0a172c'));
captureHtml('temp_fav64.html', 'public/favicon.png', 64);

// 9. Générer favicon-32x32.png (32x32)
fs.writeFileSync('temp_fav32.html', renderHtml(svgColor, 32, '#0a172c'));
captureHtml('temp_fav32.html', 'public/favicon-32x32.png', 32);

// 10. Générer cube-badge.png (96x96)
fs.writeFileSync('temp_badge96.html', renderHtml(svgBadge, 96, 'transparent'));
captureHtml('temp_badge96.html', 'public/cube-badge.png', 96);

// 11. Générer cube-badge-192.png (192x192)
fs.writeFileSync('temp_badge192.html', renderHtml(svgBadge, 192, 'transparent'));
captureHtml('temp_badge192.html', 'public/cube-badge-192.png', 192);

// Nettoyage temporaire
['temp_icon512.html', 'temp_icon192.html', 'temp_fav64.html', 'temp_fav32.html', 'temp_badge96.html', 'temp_badge192.html'].forEach(f => {
  if (fs.existsSync(f)) fs.unlinkSync(f);
});

console.log('✅ Tous les assets KONAN avec Fond Bleu Nuit & Sparks Bleus haute visibilité ont été générés !');
console.log('cube-icon-512.png:', fs.statSync('public/cube-icon-512.png').size, 'octets');
console.log('cube-icon.png:', fs.statSync('public/cube-icon.png').size, 'octets');
console.log('logo-konan.png:', fs.statSync('public/logo-konan.png').size, 'octets');
console.log('favicon.png:', fs.statSync('public/favicon.png').size, 'octets');
