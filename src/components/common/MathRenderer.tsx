import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Prétraite automatiquement tout texte en convertissant les expressions mathématiques,
 * les fractions avec slashs et les variables à indices en syntaxe KaTeX officielle.
 * Garantit ZÉRO underscore (_) et ZÉRO slash (/) visible dans les formules.
 */
export function cleanFormulasAndIndices(text: string): string {
  if (!text) return '';

  let s = text;

  // 1. Équations cinétiques complètes avec vitesses de disparition et d'apparition
  s = s.replace(
    /-\s*Vitesse volumique de disparition du réactif\s*([A-Za-z0-9_]+)\s*:\s*v_d\(\1\)\s*=\s*-\s*\(?1\/V\)?\s*·?\s*\(?d\s*n_\1\s*\/\s*dt\)?\s*=\s*-\s*d\[\1\]\/dt/g,
    '- Vitesse volumique de disparition du réactif $1 :\n$$$$v_d($1) = - \\frac{1}{V} \\cdot \\frac{dn_{$1}}{dt} = - \\frac{d[$1]}{dt}$$$$'
  );

  s = s.replace(
    /-\s*Vitesse volumique d'apparition du produit\s*([A-Za-z0-9_]+)\s*:\s*v_a\(\1\)\s*=\s*\(?1\/V\)?\s*·?\s*\(?d\s*n_\1\s*\/\s*dt\)?\s*=\s*d\[\1\]\/dt/g,
    "- Vitesse volumique d'apparition du produit $1 :\n$$$$v_a($1) = \\frac{1}{V} \\cdot \\frac{dn_{$1}}{dt} = \\frac{d[$1]}{dt}$$$$"
  );

  // Formules isolées de vitesse de disparition / apparition
  s = s.replace(
    /v_d\(([A-Za-z0-9]+)\)\s*=\s*-\s*\(?1\/V\)?\s*·?\s*\(?d\s*n_\1\s*\/\s*dt\)?\s*=\s*-\s*d\[\1\]\/dt/g,
    '$$$$v_d($1) = - \\frac{1}{V} \\cdot \\frac{dn_{$1}}{dt} = - \\frac{d[$1]}{dt}$$$$'
  );

  s = s.replace(
    /v_a\(([A-Za-z0-9]+)\)\s*=\s*\(?1\/V\)?\s*·?\s*\(?d\s*n_\1\s*\/\s*dt\)?\s*=\s*d\[\1\]\/dt/g,
    '$$$$v_a($1) = \\frac{1}{V} \\cdot \\frac{dn_{$1}}{dt} = \\frac{d[$1]}{dt}$$$$'
  );

  // Équation de réaction chimique générique (a A + b B -> c C + d D)
  s = s.replace(
    /([a-z]\s+[A-Z]\s*\+\s*[a-z]\s+[A-Z]\s*(?:→|->)\s*[a-z]\s+[A-Z]\s*\+\s*[a-z]\s+[A-Z])/g,
    '$$$$$1$$$$'
  );

  // 2. Équations de temps de demi-réaction et avancement maximal
  s = s.replace(
    /x\((?:t[₁1]\/[₂2]|t_\{?1\/2\}?|t1\/2)\)\s*=\s*x_max\s*\/\s*2/g,
    '$$$$x(t_{1/2}) = \\frac{x_{\\max}}{2}$$$$'
  );

  s = s.replace(
    /\[([A-Za-z0-9_]+)\]\((?:t[₁1]\/[₂2]|t_\{?1\/2\}?|t1\/2)\)\s*=\s*\[\1\](?:[₀0]|_0)\s*\/\s*2/g,
    '$$$$[$1](t_{1/2}) = \\frac{[$1]_0}{2}$$$$'
  );

  // 3. Vitesse moyenne et calculs avec fractions
  s = s.replace(
    /v_m\(([^)]+)\)\s*=\s*Δ\[([^\]]+)\]\s*\/\s*Δt\s*=\s*\(\[([^\]]+)\]₂\s*-\s*\[([^\]]+)\]₁\)\s*\/\s*\(t₂\s*-\s*t₁\)/g,
    '$$$$v_m($1) = \\frac{\\Delta[$2]}{\\Delta t} = \\frac{[$3]_2 - [$4]_1}{t_2 - t_1}$$$$'
  );

  s = s.replace(
    /v_m\s*=\s*\(?([0-9,\s×·\-]+)\)?\s*\/\s*\(?([0-9,\s×·\-]+)\)?\s*=\s*([0-9,\s×·\^⁻¹²³\-]+)\s*mol·L⁻¹·min⁻¹/g,
    '$$$$v_m = \\frac{$1}{$2} = $3 \\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}$$$$'
  );

  s = s.replace(
    /\[([A-Za-z0-9_]+)\]\((?:t[₁1]\/[₂2]|t_\{?1\/2\}?|t1\/2)\)\s*=\s*\(?([0-9,\s×·\^⁻¹²³\-]+)\)?\s*\/\s*2\s*=\s*([0-9,\s×·\^⁻¹²³\-]+)\s*mol·L⁻¹/g,
    '$$$$[$1](t_{1/2}) = \\frac{$2}{2} = $3 \\text{ mol}\\cdot\\text{L}^{-1}$$$$'
  );

  s = s.replace(
    /à\s+t\s*=\s*(?:t[₁1]\/[₂2]|t_\{?1\/2\}?|t1\/2)\s*,\s*\[([^\]]+)\]\((?:t[₁1]\/[₂2]|t_\{?1\/2\}?|t1\/2)\)\s*=\s*\[\1\]_max\s*\/\s*2/g,
    'à $t = t_{1/2}$, $$$$[$1](t_{1/2}) = \\frac{[$1]_{\\max}}{2}$$$$'
  );

  // 4. Énergie mécanique et théorèmes
  s = s.replace(
    /\bEc\s*=\s*1\/2\s*m\s*v\^2\b/g,
    '$$$$E_c = \\frac{1}{2}mv^2$$$$'
  );

  // Découpage préservant les blocs mathématiques déjà balisés ($...$ et $$...$$)
  const parts = s.split(/(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g);

  const cleanedParts = parts.map((chunk, idx) => {
    // Si c'est un bloc math ($...$), on ne le modifie pas ici
    if (idx % 2 === 1) return chunk;

    let t = chunk;

    // Fractions isolées dans le texte français
    t = t.replace(/(-\s*)?d\[([A-Za-z0-9_]+)\]\/dt/g, (_, neg, sym) => `$${neg ? '- ' : ''}\\frac{d[${sym}]}{dt}$`);
    t = t.replace(/d\s*n_([A-Za-z0-9_]+)\/dt/g, '$\\frac{dn_{$1}}{dt}$');
    t = t.replace(/Δ\[([^\]]+)\]\s*\/\s*Δt/g, '$\\frac{\\Delta[$1]}{\\Delta t}$');
    t = t.replace(/\(1\/V\)/g, '$\\frac{1}{V}$');
    t = t.replace(/\b1\/V\b/g, '$\\frac{1}{V}$');
    t = t.replace(/\b1\/2\b/g, '$\\frac{1}{2}$');
    t = t.replace(/\(16,0\s*×\s*10⁻³\)\s*\/\s*2/g, '$\\frac{16{,}0 \\times 10^{-3}}{2}$');

    // Fractions ou racines LaTeX isolées sans délimiteur $ (ex: \frac{12}{6} ou -\frac{31}{11})
    t = t.replace(/(?<!\$)([+\-]?\\frac\{[^{}]+\}\{[^{}]+\})(?!\$)/g, '$$$1$$');
    t = t.replace(/(?<!\$)([+\-]?\\sqrt\{[^{}]+\})(?!\$)/g, '$$$1$$');

    // Demi-réaction dans le texte
    t = t.replace(/\bt[₁1]\/[₂2]\b/g, '$t_{1/2}$');
    t = t.replace(/t₁\/₂/g, '$t_{1/2}$');
    t = t.replace(/\bt_\{?1\/2\}?/g, '$t_{1/2}$');

    // Variables avec indices mathématiques (élimine tout _ visible)
    t = t.replace(/\bv_d\(A\)/g, '$v_d(A)$');
    t = t.replace(/\bv_a\(C\)/g, '$v_a(C)$');
    t = t.replace(/\bv_m\(([^)]+)\)/g, '$v_m($1)$');
    t = t.replace(/\bv_([dam])\b/g, '$v_$1$');
    t = t.replace(/\bn_([A-Za-z0-9]+)\b/g, '$n_$1$');
    t = t.replace(/\bx_max\b/g, '$x_{\\max}$');
    t = t.replace(/\[([A-Za-z0-9_]+)\]_max\b/g, '$[$1]_{\\max}$');
    t = t.replace(/\[([A-Za-z0-9_]+)\][₀0]\b/g, '$[$1]_0$');
    t = t.replace(/\[([A-Za-z0-9_]+)\]_0\b/g, '$[$1]_0$');
    t = t.replace(/\[([A-Za-z0-9_]+)\][₁1]\b/g, '$[$1]_1$');
    t = t.replace(/\[([A-Za-z0-9_]+)\][₂2]\b/g, '$[$1]_2$');
    t = t.replace(/\bEc\b/g, '$E_c$');
    t = t.replace(/\bEp\b/g, '$E_p$');
    t = t.replace(/\bEm\b/g, '$E_m$');

    // Tout autre identifiant à indice isolé (ex: E_c, F_ext, T_0, N_0)
    t = t.replace(/\b([a-zA-Z])_([a-zA-Z0-9]+)\b/g, '$$$1_{$2}$$');

    return t;
  });

  return cleanedParts.join('');
}

/**
 * Nettoie et prépare une formule mathématique ou chimique pour un rendu KaTeX irréprochable.
 * Transforme les fractions courantes (ex: d[A]/dt -> \frac{d[A]}{dt}), les puissances et les indices
 * en syntaxe KaTeX officielle digne d'un manuel scolaire.
 */
export function sanitizeFormulaForKatex(raw: string): string {
  if (!raw) return '';
  let s = String(raw).trim();

  // 1. Suppression des délimiteurs $ ou $$ si déjà présents
  s = s.replace(/^\$\$([\s\S]*)\$\$$/, '$1').replace(/^\$([\s\S]*)\$$/, '$1').trim();

  // 2. Réparation des sauts de page ou résidus de parsing (\x0crac -> \frac)
  s = s.replace(/\x0crac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$1}{$2}');
  s = s.replace(/(?<!\\f)(?<!\\)rac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$1}{$2}');

  // 3. Covariance et statistiques
  s = s.replace(/Cov\(([^)]+)\)\s*\/\s*V\(([^)]+)\)/g, '\\frac{\\text{Cov}($1)}{V($2)}');
  s = s.replace(/Cov\(([^)]+)\)\s*\/\s*\(([^)]+)\)/g, '\\frac{\\text{Cov}($1)}{$2}');
  s = s.replace(/y_barre/g, '\\bar{y}');
  s = s.replace(/x_barre/g, '\\bar{x}');
  s = s.replace(/σ_([XY])/g, '\\sigma_{$1}');

  // 4. Nettoyage des résidus textuels
  s = s.replace(/AimpliesBquad/g, 'A \\implies B');
  s = s.replace(/AimpliesB/g, 'A \\implies B');
  s = s.replace(/mathbb([A-Z])/g, '\\mathbb{$1}');
  s = s.replace(/\\mathbb\{?([A-Z])\}?/g, '\\mathbb{$1}');
  s = s.replace(/\\?setminus/g, '\\setminus');
  s = s.replace(/\\?implies/g, '\\implies');
  s = s.replace(/\\?iff/g, '\\iff');
  s = s.replace(/\\?quad/g, '\\quad');
  s = s.replace(/\\?qquad/g, '\\qquad');

  // 5. Espèces chimiques et temps de demi-réaction
  s = s.replace(/\[H₃O⁺\]/g, '[\\text{H}_3\\text{O}^+]');
  s = s.replace(/\[HO⁻\]/g, '[\\text{HO}^-]');
  s = s.replace(/\[OH⁻\]/g, '[\\text{OH}^-]');
  s = s.replace(/\[I₂\]/g, '[\\text{I}_2]');
  s = s.replace(/\[I⁻\]/g, '[\\text{I}^-]');
  s = s.replace(/H₃O\+/g, '\\text{H}_3\\text{O}^+');
  s = s.replace(/H₃O⁺/g, '\\text{H}_3\\text{O}^+');
  s = s.replace(/OH⁻/g, '\\text{OH}^-');
  s = s.replace(/HO⁻/g, '\\text{HO}^-');
  s = s.replace(/H₂O₂/g, '\\text{H}_2\\text{O}_2');
  s = s.replace(/H₂O/g, '\\text{H}_2\\text{O}');
  s = s.replace(/CO₂/g, '\\text{CO}_2');
  s = s.replace(/O₂/g, '\\text{O}_2');
  s = s.replace(/N₂/g, '\\text{N}_2');
  s = s.replace(/I₂/g, '\\text{I}_2');
  s = s.replace(/I⁻/g, '\\text{I}^-');
  s = s.replace(/S₂O₈²⁻/g, '\\text{S}_2\\text{O}_8^{2-}');
  s = s.replace(/S₄O₆²⁻/g, '\\text{S}_4\\text{O}_6^{2-}');
  s = s.replace(/MnO₄⁻/g, '\\text{MnO}_4^-');

  // Temps de demi-réaction : préservé sous forme standard t_{1/2}
  s = s.replace(/\bt[1₁]\/[2₂]\b/g, 't_{1/2}');
  s = s.replace(/t₁\/₂/g, 't_{1/2}');
  s = s.replace(/t_\{?1\/2\}?/g, 't_{1/2}');

  // 6. Puissances de 10 avec exposants Unicode (ex: 10⁻¹⁴ -> 10^{-14})
  s = s.replace(/10[⁻\-\+⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, (m) => {
    const exp = m
      .slice(2)
      .replace(/⁻/g, '-')
      .replace(/⁺/g, '+')
      .replace(/⁰/g, '0')
      .replace(/¹/g, '1')
      .replace(/²/g, '2')
      .replace(/³/g, '3')
      .replace(/⁴/g, '4')
      .replace(/⁵/g, '5')
      .replace(/⁶/g, '6')
      .replace(/⁷/g, '7')
      .replace(/⁸/g, '8')
      .replace(/⁹/g, '9');
    return `10^{${exp}}`;
  });

  // Unités physiques et chimiques avec points médians et exposants
  s = s.replace(/mol·L⁻¹·min⁻¹/g, '\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{min}^{-1}');
  s = s.replace(/mol·L⁻¹·s⁻¹/g, '\\text{ mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}');
  s = s.replace(/mol·L⁻¹/g, '\\text{ mol}\\cdot\\text{L}^{-1}');
  s = s.replace(/g·mol⁻¹/g, '\\text{ g}\\cdot\\text{mol}^{-1}');
  s = s.replace(/m·s⁻¹/g, '\\text{ m}\\cdot\\text{s}^{-1}');
  s = s.replace(/m·s⁻²/g, '\\text{ m}\\cdot\\text{s}^{-2}');

  // 7. Conversion des symboles de base avec espaces de séparation indispensables pour LaTeX
  s = s.replace(/Δ/g, '\\Delta ');
  s = s.replace(/·/g, '\\cdot ');
  s = s.replace(/×/g, '\\times ');
  s = s.replace(/→|->/g, '\\to ');
  s = s.replace(/⇒|=>/g, '\\implies ');
  s = s.replace(/⇔|<=>/g, '\\iff ');
  s = s.replace(/≠/g, '\\neq ');
  s = s.replace(/≤|<=/g, '\\leq ');
  s = s.replace(/≥|>=/g, '\\geq ');
  s = s.replace(/≈/g, '\\approx ');
  s = s.replace(/±/g, '\\pm ');
  s = s.replace(/∞/g, '\\infty ');
  s = s.replace(/∈/g, '\\in ');
  s = s.replace(/ℝ/g, '\\mathbb{R}');
  s = s.replace(/ℕ/g, '\\mathbb{N}');
  s = s.replace(/ℤ/g, '\\mathbb{Z}');
  s = s.replace(/ℚ/g, '\\mathbb{Q}');
  s = s.replace(/ℂ/g, '\\mathbb{C}');
  s = s.replace(/Σ/g, '\\sum ');
  s = s.replace(/∫/g, '\\int ');

  // 8. Exposants et indices isolés
  s = s.replace(/²/g, '^2');
  s = s.replace(/³/g, '^3');
  s = s.replace(/⁴/g, '^4');
  s = s.replace(/ⁿ/g, '^n');
  s = s.replace(/₀/g, '_0');
  s = s.replace(/₁/g, '_1');
  s = s.replace(/₂/g, '_2');
  s = s.replace(/₃/g, '_3');
  s = s.replace(/₄/g, '_4');
  s = s.replace(/₅/g, '_5');
  s = s.replace(/₆/g, '_6');
  s = s.replace(/₇/g, '_7');
  s = s.replace(/₈/g, '_8');
  s = s.replace(/₉/g, '_9');

  // 9. Racines carrées
  s = s.replace(/√\(([^)]+)\)/g, '\\sqrt{$1}');
  s = s.replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');

  // 10. Vraies fractions horizontales de manuel scolaire (\frac{...}{...})
  // 10.1 Parenthèses complexes : (A) / (B) ou (A) / B
  s = s.replace(/(?<!\\frac\{)\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
  s = s.replace(/(?<!\\frac\{)\(([^()]+)\)\s*\/\s*([a-zA-Z0-9_{\\^}]+)/g, '\\frac{$1}{$2}');
  s = s.replace(/(?<!\\frac\{)(?<![a-zA-Z0-9_\\])([a-zA-Z0-9_{\\^]+)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');

  // 10.2 Dérivées & taux de variation : d[A]/dt, dn_A/dt, \Delta[A]/\Delta t, dx/dt, dv/dt
  s = s.replace(/(?<!\\frac\{)d\[([A-Za-z0-9_\\{}]+)\]\s*\/\s*dt/g, '\\frac{d[$1]}{dt}');
  s = s.replace(/(?<!\\frac\{)d\s*n_\{?([A-Za-z0-9_]+)\}?\s*\/\s*dt/g, '\\frac{dn_{$1}}{dt}');
  s = s.replace(/(?<!\\frac\{)\\Delta\s*\[([A-Za-z0-9_\\{}]+)\]\s*\/\s*\\Delta\s*t/g, '\\frac{\\Delta[$1]}{\\Delta t}');
  s = s.replace(/(?<!\\frac\{)\\Delta\s*([a-zA-Z])\s*\/\s*\\Delta\s*([a-zA-Z])/g, '\\frac{\\Delta $1}{\\Delta $2}');
  s = s.replace(/(?<!\\frac\{)\bd\s*([a-zA-Z])\s*\/\s*dt/g, '\\frac{d$1}{dt}');
  s = s.replace(/(?<!\\frac\{)\b1\s*\/\s*V\b/g, '\\frac{1}{V}');
  s = s.replace(/(?<!t_\{)(?<!\\frac\{)\b1\s*\/\s*2\b/g, '\\frac{1}{2}');

  // 10.3 Grandeurs cinétiques sur nombre : x_max / 2, [A]_0 / 2, etc.
  s = s.replace(/(?<!\\frac\{)x_max\s*\/\s*2/g, '\\frac{x_{\\max}}{2}');
  s = s.replace(/(?<!\\frac\{)\[([A-Za-z0-9_\\{}]+)\]_0\s*\/\s*2/g, '\\frac{[$1]_0}{2}');
  s = s.replace(/(?<!\\frac\{)\[([A-Za-z0-9_\\{}]+)\]_max\s*\/\s*2/g, '\\frac{[$1]_{\\max}}{2}');

  // 11. Variables et indices usuels
  s = s.replace(/\bv_d\(([^)]+)\)/g, 'v_d($1)');
  s = s.replace(/\bv_a\(([^)]+)\)/g, 'v_a($1)');
  s = s.replace(/\bv_d\b/g, 'v_d');
  s = s.replace(/\bv_a\b/g, 'v_a');
  s = s.replace(/\bv_m\b/g, 'v_m');
  s = s.replace(/\bx_max\b/g, 'x_{\\max}');
  s = s.replace(/\[([A-Za-z0-9_\\{}]+)\]_max\b/g, '[$1]_{\\max}');
  s = s.replace(/\bEc\b/g, 'E_c');
  s = s.replace(/\bEp\b/g, 'E_p');
  s = s.replace(/\bEm\b/g, 'E_m');

  // 12. Virgules décimales françaises (8,0 -> 8{,}0)
  s = s.replace(/(\d+),(\d+)/g, '$1{,}$2');

  // 13. Texte explicatif français intégré dans la formule
  s = s.replace(/\((où[^\)]+)\)/g, '(\\text{$1})');

  return s;
}

/**
 * Nettoyeur Unicode de secours (sans déformation de texte)
 */
export function formatMathUnicode(raw: string): string {
  if (!raw) return '';
  let s = String(raw);
  s = s.replace(/\$\$/g, '').replace(/\$/g, '');
  s = s.replace(/\\text\{([^}]+)\}/g, '$1');
  s = s.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  s = s.replace(/\\mathbf\{([^}]+)\}/g, '$1');
  s = s.replace(/[\x0c]?\\?frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1) / ($2)');
  s = s.replace(/[\x0c]?rac\{([^{}]+)\}\{([^{}]+)\}/g, '($1) / ($2)');
  s = s.replace(/\\mathbb\{?R\}?/g, 'ℝ').replace(/mathbbR/g, 'ℝ');
  s = s.replace(/\\mathbb\{?N\}?/g, 'ℕ').replace(/mathbbN/g, 'ℕ');
  s = s.replace(/\\mathbb\{?Z\}?/g, 'ℤ').replace(/mathbbZ/g, 'ℤ');
  s = s.replace(/\\mathbb\{?Q\}?/g, 'ℚ').replace(/mathbbQ/g, 'ℚ');
  s = s.replace(/\\mathbb\{?C\}?/g, 'ℂ').replace(/mathbbC/g, 'ℂ');
  s = s.replace(/\\setminus/g, ' \\ ').replace(/setminus/g, ' \\ ');
  s = s.replace(/\\infty/g, '∞').replace(/infty/g, '∞');
  s = s.replace(/AimpliesBquad/g, 'A ⇒ B').replace(/AimpliesB/g, 'A ⇒ B');
  s = s.replace(/\\implies/g, ' ⇒ ').replace(/implies/g, ' ⇒ ');
  s = s.replace(/\\iff/g, ' ⇔ ').replace(/iff/g, ' ⇔ ');
  s = s.replace(/\\Delta/g, 'Δ');
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');
  s = s.replace(/\\lim_\{([^}]+)\}/g, 'lim ($1)');
  s = s.replace(/\\to/g, ' → ');
  s = s.replace(/\\vec\{([^{}]+)\}/g, 'vec($1)');
  return s.trim();
}

export interface MathFormulaProps {
  latex: string;
  display?: boolean;
  className?: string;
}

/**
 * Composant de rendu officiel pour formules mathématiques :
 * Génère un rendu KaTeX authentique (vraie barre de fraction horizontale,
 * vraies racines, vrais symboles de dérivées et de limites).
 */
export const MathFormula: React.FC<MathFormulaProps> = ({ latex, display = false, className = '' }) => {
  const renderedHtml = useMemo(() => {
    if (!latex) return '';
    const sanitized = sanitizeFormulaForKatex(latex);
    try {
      return katex.renderToString(sanitized, {
        throwOnError: false,
        displayMode: display,
        strict: false,
      });
    } catch {
      return latex;
    }
  }, [latex, display]);

  if (display) {
    return (
      <div
        className={`my-2 text-center overflow-x-auto py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-sm sm:text-base text-indigo-700 dark:text-indigo-300 font-medium ${className}`}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <span
      className={`inline-block text-indigo-700 dark:text-indigo-300 align-baseline ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

export interface MathRendererProps {
  text: string;
  className?: string;
}

/**
 * Rendu de texte mixte cours / mathématiques :
 * - Le texte français normal n'est JAMAIS altéré ni déformé.
 * - Les fractions et indices mathématiques sont automatiquement convertis en KaTeX pur.
 * - ZÉRO tiret du bas (_) et ZÉRO slash (/) visible dans les formules.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({ text, className = '' }) => {
  const segments = useMemo(() => {
    if (!text) return null;

    // Prétraitement intelligent pour éliminer tout '_' ou '/' dans les notations
    const pretreated = cleanFormulasAndIndices(text);

    // Détection de délimiteurs de formules ($...$, $$...$$, \[...\], \(...\))
    const hasMathDelimiters = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/.test(pretreated);

    if (!hasMathDelimiters) {
      // Aucun délimiteur : texte pur intact
      return pretreated;
    }

    const regex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;
    const parts: Array<{ type: 'text'; content: string } | { type: 'math'; html: string; display: boolean }> = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(pretreated)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: pretreated.slice(lastIndex, match.index),
        });
      }

      const raw = match[0];
      let mathContent = raw;
      let display = false;

      if (raw.startsWith('$$') && raw.endsWith('$$')) {
        mathContent = raw.slice(2, -2);
        display = true;
      } else if (raw.startsWith('$') && raw.endsWith('$')) {
        mathContent = raw.slice(1, -1);
        display = false;
      } else if (raw.startsWith('\\[') && raw.endsWith('\\]')) {
        mathContent = raw.slice(2, -2);
        display = true;
      } else if (raw.startsWith('\\(') && raw.endsWith('\\)')) {
        mathContent = raw.slice(2, -2);
        display = false;
      }

      const sanitized = sanitizeFormulaForKatex(mathContent);
      let rendered = '';
      try {
        rendered = katex.renderToString(sanitized, {
          throwOnError: false,
          displayMode: display,
          strict: false,
        });
      } catch {
        rendered = raw;
      }

      parts.push({
        type: 'math',
        html: rendered,
        display,
      });

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < pretreated.length) {
      parts.push({
        type: 'text',
        content: pretreated.slice(lastIndex),
      });
    }

    return parts;
  }, [text]);

  if (!segments) return null;

  if (typeof segments === 'string') {
    return <span className={className}>{segments}</span>;
  }

  return (
    <span className={`math-rendered-text leading-relaxed ${className}`}>
      {segments.map((segment, idx) => {
        if (segment.type === 'text') {
          return <React.Fragment key={idx}>{segment.content}</React.Fragment>;
        }
        if (segment.display) {
          return (
            <span
              key={idx}
              className="block my-2.5 overflow-x-auto text-center py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-indigo-700 dark:text-indigo-300 font-medium shadow-2xs"
              dangerouslySetInnerHTML={{ __html: segment.html }}
            />
          );
        }
        return (
          <span
            key={idx}
            className="inline-math align-baseline mx-0.5"
            dangerouslySetInnerHTML={{ __html: segment.html }}
          />
        );
      })}
    </span>
  );
};

export interface VisualSchemaProps {
  schema: {
    type: 'geometry_svg' | 'variation_table' | 'sign_table' | 'probability_tree' | 'coordinate_system' | 'custom_svg';
    title?: string;
    caption?: string;
    svgContent?: string;
    tableData?: {
      headers: string[];
      rows: (string | number)[][];
    };
  };
  className?: string;
}

/**
 * Support visuel pédagogique : Schémas géométriques SVG,
 * tableaux de signes et de variations, arbres pondérés.
 */
export const VisualSchemaRenderer: React.FC<VisualSchemaProps> = ({ schema, className = '' }) => {
  return (
    <div className={`p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-indigo-200/80 dark:border-indigo-500/30 shadow-xs space-y-2.5 my-3 ${className}`}>
      {schema.title && (
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
          <span>Figure / Support Visuel : {schema.title}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
            {schema.type === 'geometry_svg'
              ? 'Géométrie'
              : schema.type === 'variation_table'
              ? 'Tableau de variation'
              : schema.type === 'sign_table'
              ? 'Tableau de signe'
              : schema.type === 'probability_tree'
              ? 'Arbre pondéré'
              : 'Schéma'}
          </span>
        </div>
      )}

      {schema.svgContent && (
        <div
          className="flex items-center justify-center py-2 bg-slate-50 dark:bg-slate-950/70 rounded-xl border border-slate-200/70 dark:border-slate-800 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: schema.svgContent }}
        />
      )}

      {schema.tableData && (
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="bg-indigo-50/70 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                {schema.tableData.headers.map((h, i) => (
                  <th key={i} className="py-2 px-3 font-extrabold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-700 last:border-r-0">
                    <MathRenderer text={String(h)} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schema.tableData.rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="border-b border-slate-200 dark:border-slate-800 last:border-b-0 hover:bg-slate-50 dark:hover:bg-slate-800/40"
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="py-2.5 px-3 font-medium text-slate-800 dark:text-slate-200 border-r border-slate-200 dark:border-slate-800 last:border-r-0"
                    >
                      <MathRenderer text={String(cell)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {schema.caption && (
        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium italic text-center">
          {schema.caption}
        </p>
      )}
    </div>
  );
};
