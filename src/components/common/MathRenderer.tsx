import React, { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

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
  s = s.replace(/[\x0c]?\\?frac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$1}{$2}');
  s = s.replace(/[\x0c]?rac\{([^{}]+)\}\{([^{}]+)\}/g, '\\frac{$1}{$2}');

  // 3. Nettoyage des résidus textuels
  s = s.replace(/AimpliesBquad/g, 'A \\implies B');
  s = s.replace(/AimpliesB/g, 'A \\implies B');
  s = s.replace(/mathbb([A-Z])/g, '\\mathbb{$1}');
  s = s.replace(/\\mathbb\{?([A-Z])\}?/g, '\\mathbb{$1}');
  s = s.replace(/\\?setminus/g, '\\setminus');
  s = s.replace(/\\?implies/g, '\\implies');
  s = s.replace(/\\?iff/g, '\\iff');
  s = s.replace(/\\?quad/g, '\\quad');
  s = s.replace(/\\?qquad/g, '\\qquad');

  // 4. Espèces chimiques et temps de demi-réaction
  s = s.replace(/\[H₃O⁺\]/g, '[\\text{H}_3\\text{O}^+]');
  s = s.replace(/\[HO⁻\]/g, '[\\text{HO}^-]');
  s = s.replace(/\[OH⁻\]/g, '[\\text{OH}^-]');
  s = s.replace(/H₃O\+/g, '\\text{H}_3\\text{O}^+');
  s = s.replace(/H₃O⁺/g, '\\text{H}_3\\text{O}^+');
  s = s.replace(/OH⁻/g, '\\text{OH}^-');
  s = s.replace(/HO⁻/g, '\\text{HO}^-');
  s = s.replace(/H₂O/g, '\\text{H}_2\\text{O}');
  s = s.replace(/CO₂/g, '\\text{CO}_2');
  s = s.replace(/O₂/g, '\\text{O}_2');
  s = s.replace(/N₂/g, '\\text{N}_2');
  s = s.replace(/I₂/g, '\\text{I}_2');
  s = s.replace(/I⁻/g, '\\text{I}^-');
  s = s.replace(/t[1₁]\/[2₂]/g, 't_{1/2}');
  s = s.replace(/t₁\/₂/g, 't_{1/2}');
  s = s.replace(/t_\{?1\/2\}?/g, 't_{1/2}');

  // 5. Puissances de 10 avec exposants Unicode (ex: 10⁻¹⁴ -> 10^{-14})
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

  // 6. Conversion des symboles de base avec espaces de séparation indispensables pour LaTeX
  s = s.replace(/Δ/g, '\\Delta ');
  s = s.replace(/·/g, '\\cdot ');
  s = s.replace(/×/g, '\\times ');
  s = s.replace(/→/g, '\\to ');
  s = s.replace(/⇒/g, '\\implies ');
  s = s.replace(/⇔/g, '\\iff ');
  s = s.replace(/≠/g, '\\neq ');
  s = s.replace(/≤/g, '\\leq ');
  s = s.replace(/≥/g, '\\geq ');
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

  // 7. Exposants et indices isolés
  s = s.replace(/²/g, '^2');
  s = s.replace(/³/g, '^3');
  s = s.replace(/⁴/g, '^4');
  s = s.replace(/ⁿ/g, '^n');
  s = s.replace(/₀/g, '_0');
  s = s.replace(/₁/g, '_1');
  s = s.replace(/₂/g, '_2');
  s = s.replace(/₃/g, '_3');
  s = s.replace(/₄/g, '_4');

  // 8. Racines carrées
  s = s.replace(/√\(([^)]+)\)/g, '\\sqrt{$1}');
  s = s.replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');

  // 9. Vraies fractions horizontales de manuel scolaire (\frac{...}{...})
  s = s.replace(/d\[([A-Za-z0-9_]+)\]\s*\/\s*dt/g, '\\frac{d[$1]}{dt}');
  s = s.replace(/\\Delta\s*\[([A-Za-z0-9_]+)\]\s*\/\s*\\Delta\s*t/g, '\\frac{\\Delta[$1]}{\\Delta t}');
  s = s.replace(/d\s*\/\s*\\Delta\s*t/g, '\\frac{d}{\\Delta t}');
  s = s.replace(/d\s*n_([A-Za-z0-9_]+)\s*\/\s*dt/g, '\\frac{d n_{$1}}{dt}');
  s = s.replace(/x_max\s*\/\s*2/g, '\\frac{x_{\\max}}{2}');
  s = s.replace(/\(([^()]+)\)\s*\/\s*\(([^()]+)\)/g, '\\frac{$1}{$2}');
  s = s.replace(/(?<!t_\{)(\b\d+)\s*\/\s*(\d+\b)/g, '\\frac{$1}{$2}');

  // 10. Texte explicatif français intégré dans la formule
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
 * - Les fragments mathématiques délimités ($...$, $$...$$, \[...\], \(...\)) sont transformés en KaTeX pur.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({ text, className = '' }) => {
  const segments = useMemo(() => {
    if (!text) return null;

    // Détection de délimiteurs de formules
    const hasMathDelimiters = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/.test(text);

    if (!hasMathDelimiters) {
      // Aucun délimiteur : texte pur intact
      return text;
    }

    const regex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;
    const parts: Array<{ type: 'text'; content: string } | { type: 'math'; html: string; display: boolean }> = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: text.slice(lastIndex, match.index),
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

    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.slice(lastIndex),
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
              className="block my-2 overflow-x-auto text-center"
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
