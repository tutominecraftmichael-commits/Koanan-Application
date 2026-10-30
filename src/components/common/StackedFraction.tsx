import React from 'react';

export interface StackedFractionProps {
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  negative?: boolean;
  className?: string;
}

/**
 * Composant de fraction empilée (numérateur en haut, barre horizontale au milieu, dénominateur en bas).
 * Offre un rendu scolaire pur sans aucun code informatique ni balise brute à l'écran.
 */
export const StackedFraction: React.FC<StackedFractionProps> = ({
  numerator,
  denominator,
  negative = false,
  className = '',
}) => {
  const combinedClasses = `inline-flex items-center text-center mx-1 font-semibold text-indigo-700 dark:text-indigo-300 ${className}`.trim();

  return (
    <span
      className={combinedClasses}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'middle',
        lineHeight: 1,
      }}
    >
      {negative && <span className="mr-0.5 text-sm font-bold select-none leading-none">−</span>}
      <span
        style={{
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          lineHeight: 1,
        }}
      >
        <span
          style={{
            display: 'block',
            fontSize: '0.82em',
            padding: '0 3px 1.5px 3px',
            borderBottom: '1.5px solid currentColor',
            width: '100%',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          {numerator}
        </span>
        <span
          style={{
            display: 'block',
            fontSize: '0.82em',
            padding: '1.5px 3px 0 3px',
            width: '100%',
            textAlign: 'center',
            lineHeight: 1.1,
          }}
        >
          {denominator}
        </span>
      </span>
    </span>
  );
};

/**
 * Nettoie toute chaîne de caractères en supprimant le code informatique brut
 * et remplace les symboles par les vrais caractères universels.
 */
export function cleanRawMathCode(raw: string): string {
  if (!raw) return '';
  let s = String(raw);

  // Supprime délimiteurs LaTeX $ et $$
  s = s.replace(/\$\$/g, '').replace(/\$/g, '');

  // Convertit \frac{a}{b} en a/b
  s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, '($1)/($2)');
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, '√($1)');
  s = s.replace(/\\times/g, '×');
  s = s.replace(/\\div/g, '÷');
  s = s.replace(/\\neq/g, '≠');
  s = s.replace(/\\approx/g, '≈');
  s = s.replace(/\\le[q]?/g, '≤');
  s = s.replace(/\\ge[q]?/g, '≥');
  s = s.replace(/\\pm/g, '±');
  s = s.replace(/\\cdot/g, '·');
  s = s.replace(/\\text\{([^{}]+)\}/g, '$1');
  s = s.replace(/\\mathrm\{([^{}]+)\}/g, '$1');
  s = s.replace(/\\mathbf\{([^{}]+)\}/g, '$1');
  s = s.replace(/\{,\}/g, ',');
  s = s.replace(/\\bar\{([^{}]+)\}/g, '($1 barre)');

  // Remplacements des tirets et signes moins
  s = s.replace(/\s*-\s*(?=\d+\/\d+)/g, ' −');

  return s;
}

/**
 * Analyse un texte contenant des fractions au format `a/b` ou `(a)/b` ou `−a/b`
 * et retourne un tableau de noeuds React intégrant des <StackedFraction /> visuelles.
 */
export function renderTextWithStackedFractions(text: string): React.ReactNode {
  if (!text) return text;

  const cleaned = cleanRawMathCode(text);

  // Regex pour détecter les fractions du type:
  // - Optionnel: signe négatif (− ou -)
  // - Numérateur: parenthèses avec contenu OU nombre/expression simple
  // - Séparateur /
  // - Dénominateur: parenthèses avec contenu OU nombre/expression simple
  // Exemples gérés: "3/5", "-4/5", "−4/5", "41/14", "(3 × 2 + 5 × 7)/14", "16/15", "8/27", "1/25"
  const fractionRegex = /(?:([−-])?\s*(\([^\(\)]+\)|[a-zA-Z0-9√²³ⁿ]+(?:\s*[+−×·]\s*[a-zA-Z0-9√²³ⁿ]+)*)\s*\/\s*(\([^\(\)]+\)|[a-zA-Z0-9√²³ⁿ]+))/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = fractionRegex.exec(cleaned)) !== null) {
    const matchIndex = match.index;
    const fullMatch = match[0];

    // Ignorer si c'est un format de date ou un compteur exclu (ex: 8/8 dans un badge "Objectif 8/8")
    // mais dans les explications, les fractions doivent être rendues.
    // Si précédé de "Étape " ou "Question " ou "Leçon ", on laisse tel quel pour les badges.
    const prefix = cleaned.slice(Math.max(0, matchIndex - 12), matchIndex);
    if (/Étape\s*$|Question\s*$|Leçon\s*$|Partie\s*$/i.test(prefix)) {
      continue;
    }

    if (matchIndex > lastIndex) {
      parts.push(cleaned.slice(lastIndex, matchIndex));
    }

    const isNegative = match[1] === '−' || match[1] === '-';
    let rawNum = match[2].trim();
    let rawDen = match[3].trim();

    // Enlever les parenthèses superflues autour du numérateur ou dénominateur
    if (rawNum.startsWith('(') && rawNum.endsWith(')')) {
      rawNum = rawNum.slice(1, -1).trim();
    }
    if (rawDen.startsWith('(') && rawDen.endsWith(')')) {
      rawDen = rawDen.slice(1, -1).trim();
    }

    parts.push(
      <StackedFraction
        key={`frac-${matchIndex}`}
        numerator={rawNum}
        denominator={rawDen}
        negative={isNegative}
      />
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < cleaned.length) {
    parts.push(cleaned.slice(lastIndex));
  }

  return parts.length > 0 ? parts : cleaned;
}
