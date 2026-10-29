import React, { useMemo } from 'react';

/**
 * Nettoyeur et convertisseur mathématique universel :
 * Transforme n'importe quel code LaTeX ou résidu d'échappement (rac{1}, mathbbR, infty, AimpliesBquad...)
 * en symboles mathématiques Unicode élégants, nets et immédiatement lisibles.
 */
export function formatMathUnicode(raw: string): string {
  if (!raw) return '';

  let s = String(raw);

  // 1. Nettoyage des délimiteurs LaTeX bruts
  s = s.replace(/\$\$/g, '').replace(/\$/g, '');

  // 2. Gestion des \text{...}
  s = s.replace(/\\text\{([^}]+)\}/g, '$1');
  s = s.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  s = s.replace(/\\mathbf\{([^}]+)\}/g, '$1');

  // 3. Réparation des fractions écrasées (rac{a}{b} ou \frac{a}{b} ou form feed \x0crac)
  s = s.replace(/[\x0c]?\\?frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1) / ($2)');
  s = s.replace(/[\x0c]?rac\{([^{}]+)\}\{([^{}]+)\}/g, '($1) / ($2)');

  // 4. Ensembles de nombres remarquables
  s = s.replace(/\\mathbb\{?R\}?/g, 'ℝ');
  s = s.replace(/mathbbR/g, 'ℝ');
  s = s.replace(/\\mathbb\{?N\}?/g, 'ℕ');
  s = s.replace(/mathbbN/g, 'ℕ');
  s = s.replace(/\\mathbb\{?Z\}?/g, 'ℤ');
  s = s.replace(/mathbbZ/g, 'ℤ');
  s = s.replace(/\\mathbb\{?Q\}?/g, 'ℚ');
  s = s.replace(/mathbbQ/g, 'ℚ');
  s = s.replace(/\\mathbb\{?C\}?/g, 'ℂ');
  s = s.replace(/mathbbC/g, 'ℂ');

  // 5. Différence d'ensembles et intervalles
  s = s.replace(/\\setminus/g, ' \\ ');
  s = s.replace(/setminus/g, ' \\ ');
  s = s.replace(/\\infty/g, '∞');
  s = s.replace(/\+infty/g, '+∞');
  s = s.replace(/-infty/g, '-∞');
  s = s.replace(/infty/g, '∞');

  // 6. Logique et implications (AimpliesBquad -> A ⇒ B)
  s = s.replace(/AimpliesBquad/g, 'A ⇒ B');
  s = s.replace(/AimpliesB/g, 'A ⇒ B');
  s = s.replace(/\\implies/g, ' ⇒ ');
  s = s.replace(/implies/g, ' ⇒ ');
  s = s.replace(/\\iff/g, ' ⇔ ');
  s = s.replace(/iff/g, ' ⇔ ');
  s = s.replace(/\\Rightarrow/g, ' ⇒ ');
  s = s.replace(/\\Leftrightarrow/g, ' ⇔ ');
  s = s.replace(/\\quad/g, '  ');
  s = s.replace(/\\qquad/g, '    ');
  s = s.replace(/quad/g, ' ');

  // 7. Symboles de comparaison et égalité
  s = s.replace(/\\neq/g, '≠');
  s = s.replace(/neq/g, '≠');
  s = s.replace(/\\leq/g, '≤');
  s = s.replace(/leq/g, '≤');
  s = s.replace(/\\geq/g, '≥');
  s = s.replace(/geq/g, '≥');
  s = s.replace(/\\approx/g, '≈');
  s = s.replace(/\\times/g, ' × ');
  s = s.replace(/\\pm/g, '±');
  s = s.replace(/\\cdot/g, ' · ');

  // 8. Lettres grecques et constantes physiques / chimiques
  s = s.replace(/\\Delta/g, 'Δ');
  s = s.replace(/\\alpha/g, 'α');
  s = s.replace(/\\beta/g, 'β');
  s = s.replace(/\\theta/g, 'θ');
  s = s.replace(/\\lambda/g, 'λ');
  s = s.replace(/\\omega/g, 'ω');
  s = s.replace(/\\Omega/g, 'Ω');
  s = s.replace(/\\mu/g, 'µ');
  s = s.replace(/\\pi/g, 'π');
  s = s.replace(/\\sigma/g, 'σ');

  // 9. Chimie : temps de demi-réaction et concentrations
  s = s.replace(/t_\{?1\/2\}?/g, 't₁/₂');
  s = s.replace(/t1\/2/g, 't₁/₂');
  s = s.replace(/H_3O\^?\+?/g, 'H₃O⁺');
  s = s.replace(/OH\^-/g, 'OH⁻');
  s = s.replace(/SO_4\^?2-?/g, 'SO₄²⁻');
  s = s.replace(/CO_2/g, 'CO₂');
  s = s.replace(/H_2O/g, 'H₂O');
  s = s.replace(/O_2/g, 'O₂');
  s = s.replace(/N_2/g, 'N₂');

  // 10. Racines carrées et limites
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');
  s = s.replace(/\\sqrt\s*([a-zA-Z0-9]+)/g, '√($1)');
  s = s.replace(/\\lim_\{([^}]+)\}/g, 'lim ($1)');
  s = s.replace(/\\to/g, ' → ');

  // 11. Vecteurs
  s = s.replace(/\\vec\{([^{}]+)\}/g, 'vec($1)');
  s = s.replace(/\\|([^{}|]+)\\|/g, '||$1||');

  // 12. Sommes et intégrales
  s = s.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g, 'Σ($1 à $2)');
  s = s.replace(/\\sum/g, 'Σ');
  s = s.replace(/\\int/g, '∫');

  // 13. Nettoyage des accolades et antislashs superflus
  s = s.replace(/\\\{/g, '{').replace(/\\\}/g, '}');
  s = s.replace(/\\([a-zA-Z]+)/g, '$1');
  s = s.replace(/\s{2,}/g, ' ');

  return s.trim();
}

export interface MathFormulaProps {
  latex: string;
  display?: boolean;
  className?: string;
}

/**
 * Rendu net et lisible d'une formule mathématique
 * Nettoie scrupuleusement les LaTeX dégradés en Unicode parfait.
 */
export const MathFormula: React.FC<MathFormulaProps> = ({ latex, display = false, className = '' }) => {
  const formatted = useMemo(() => formatMathUnicode(latex), [latex]);

  if (display) {
    return (
      <div className={`my-2 text-center overflow-x-auto py-2 px-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 text-sm sm:text-base font-mono font-bold text-indigo-700 dark:text-indigo-300 ${className}`}>
        {formatted}
      </div>
    );
  }

  return (
    <span className={`inline-block font-mono font-bold text-indigo-700 dark:text-indigo-300 px-1 py-0.5 rounded bg-indigo-50/60 dark:bg-indigo-950/40 text-[0.95em] align-baseline ${className}`}>
      {formatted}
    </span>
  );
};

export interface MathRendererProps {
  text: string;
  className?: string;
}

/**
 * Parseur de texte intelligent : détecte les formules inline ($...$) ou display ($$...$$)
 * et les transforme en typographie scientifique Unicode ultra-claire et sans code brut.
 */
export const MathRenderer: React.FC<MathRendererProps> = ({ text, className = '' }) => {
  const cleanedText = useMemo(() => {
    if (!text) return '';
    return formatMathUnicode(text);
  }, [text]);

  return (
    <span className={`math-rendered-text leading-relaxed ${className}`}>
      {cleanedText}
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
 * Composant de support visuel pédagogique : Schémas géométriques SVG propres,
 * tableaux de signes et de variations, arbres de probabilité.
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

      {/* SVG propre pour la géométrie ou arbres */}
      {schema.svgContent && (
        <div
          className="flex items-center justify-center py-2 bg-slate-50 dark:bg-slate-950/70 rounded-xl border border-slate-200/70 dark:border-slate-800 overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: schema.svgContent }}
        />
      )}

      {/* Tableaux structurés de signes ou de variations */}
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

