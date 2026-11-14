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

  // Protection absolue des indices de mécanique et forces (ex: F_{A/B}, F_{B/A}, M_{i-1}, t_{1/2})
  s = s.replace(/(?:\\vec\{F\}|F)_\{?([A-Za-z0-9\/]+)\}?/g, '__FORCE_NOTATION_$1__');
  s = s.replace(/\b([MTvt])_\{([^}]+)\}/g, '__VAR_NOTATION_$1_$2__');

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

function restoreProtectedPlaceholders(text: string): string {
  if (!text) return '';
  return text
    .replace(/__FORCE_NOTATION_([^_]+)__/g, 'F_{$1}')
    .replace(/__VAR_NOTATION_([^_]+)_([^_]+)__/g, '$1_{$2}');
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
  // PRIORITÉ DES OPÉRATIONS : la division passe avant + et −. Dans « 4 − 35/11 », seul 35 est au numérateur
  // (sinon on afficherait (4 − 35)/11 = −31/11 au lieu de 9/11). Un + ou − n'entre donc JAMAIS dans un
  // numérateur sans parenthèses ; × et · restent permis car (a × b)/c = a × (b/c).
  // Un nombre se lit EN ENTIER : « 10 000 » (espace des milliers) et « 0,038 » (virgule décimale) ne sont
  // jamais coupés (sinon « 0,038 / 2 » s'afficherait « 0, » suivi de la fraction 038/2).
  const ATOM = String.raw`(?:\d{1,3}(?:[   ]\d{3})+(?:,\d+)?|[a-zA-Z0-9√²³ⁿ]+(?:,\d+)?)`;
  const fractionRegex = new RegExp(
    String.raw`(?:([−-])?\s*(?<![\d,])(\([^\(\)]+\)|${ATOM}(?:\s*[×·]\s*${ATOM})*)\s*\/\s*(\([^\(\)]+\)|${ATOM})(?![\d,]))`,
    'g',
  );

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = fractionRegex.exec(cleaned)) !== null) {
    const matchIndex = match.index;
    const fullMatch = match[0];

    // Ignorer si c'est un format de date ou un compteur exclu (ex: 8/8 dans un badge "Objectif 8/8")
    // ou une interaction de forces / notation d'indice (ex: F_{A/B}, F_A/B, t_{1/2})
    // ou une unité physique usuelle (km/h, m/s, mol/L, g/L, N/kg, etc.)
    const prefix = cleaned.slice(Math.max(0, matchIndex - 15), matchIndex);
    const suffix = cleaned.slice(matchIndex + fullMatch.length, matchIndex + fullMatch.length + 5);
    // Texte français, pas une fraction : « ville / au », « misère / Qu’un », « L’automne / Faisait »,
    // « et/ou ». Le numérateur suit une lettre accentuée ou une apostrophe (élision), le dénominateur est
    // suivi d'une lettre accentuée, ou les deux termes sont des mots (jamais Ka/Ke, delta/lambda, 1/f').
    const numStart = matchIndex + fullMatch.indexOf(match[2]);
    const MATH_WORDS = /^(?:alpha|beta|gamma|delta|lambda|omega|theta|sigma|rho|tau|phi|psi|pi|mu|nu|sin|cos|tan|cotan|ln|log|exp|lim|max|min)$/i;
    const isProseWord = (w: string) =>
      !MATH_WORDS.test(w) &&
      (/^[A-Za-z][a-z]{2,}$/.test(w) ? /[aeiouy]/.test(w.slice(1)) : /^[a-z][aeiouy]$/.test(w));

    if (
      /[À-ÖØ-öø-ÿ'’]/.test(cleaned[numStart - 1] ?? '') ||
      /[À-ÖØ-öø-ÿ]/.test(cleaned[matchIndex + fullMatch.length] ?? '') ||
      (isProseWord(match[2].trim()) && isProseWord(match[3].trim()))
    ) {
      continue;
    }

    if (
      /Étape\s*$|Question\s*$|Leçon\s*$|Partie\s*$/i.test(prefix) ||
      /[_{]\s*$/.test(prefix) ||
      /^\s*}/.test(suffix) ||
      /^(?:km\/h|m\/s|mol\/L|g\/L|N\/kg|N\/m|J\/K)$/i.test(fullMatch.trim()) ||
      /^[A-Z]\/[A-Z]$/.test(fullMatch.trim())
    ) {
      continue;
    }

    if (matchIndex > lastIndex) {
      parts.push(restoreProtectedPlaceholders(cleaned.slice(lastIndex, matchIndex)));
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
        numerator={restoreProtectedPlaceholders(rawNum)}
        denominator={restoreProtectedPlaceholders(rawDen)}
        negative={isNegative}
      />
    );

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < cleaned.length) {
    parts.push(restoreProtectedPlaceholders(cleaned.slice(lastIndex)));
  }

  return parts.length > 0 ? parts : restoreProtectedPlaceholders(cleaned);
}
