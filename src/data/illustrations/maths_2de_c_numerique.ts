import type { PointVisualSchema } from '../../lib/curriculum/types';
import type { ExerciseIllustration } from './index';

// ============================================================================
// FIGURES — Maths 2nde C, Leçon « Étude de fonctions élémentaires »
// (programme officiel CI, leçon 13 du PDF « Mon école à la maison »)
// Chaque figure est placée sur la FICHE DE COURS de l'étape qui pose la question :
// elle enseigne la notion juste avant que l'élève réponde.
// ============================================================================

const stairsPieces = [-4, -3, -2, -1, 0, 1, 2, 3].map((n) => ({
  expr: String(n),
  from: n,
  to: n + 1,
  includeFrom: true,
  includeTo: false,
}));

const fractionalPartPieces = [-2, -1, 0, 1, 2].map((n) => ({
  expr: n === 0 ? 'x' : n < 0 ? `x+${-n}` : `x-${n}`,
  from: n,
  to: n + 1,
  includeFrom: true,
  includeTo: false,
}));

const partieEntiere: PointVisualSchema = {
  type: 'function_plot',
  title: 'La fonction partie entière',
  caption: 'Sur chaque intervalle [k ; k + 1[, E(x) = k. Point plein : inclus. Rond vide : exclu.',
  plot: { xMin: -4, xMax: 4, yMin: -4, yMax: 4, curves: [{ color: 'blue', pieces: stairsPieces }] },
};

const valeurAbsolueParMorceaux: PointVisualSchema = {
  type: 'function_plot',
  title: '|3x − 6| en deux morceaux',
  caption: 'En orange, pour x ≤ 2 : −3x + 6. En bleu, pour x ≥ 2 : 3x − 6. Les deux morceaux se rejoignent en (2 ; 0).',
  plot: {
    xMin: -1, xMax: 5, yMin: -1, yMax: 9,
    curves: [
      { color: 'orange', pieces: [{ expr: '-3x+6', from: -1, to: 2 }] },
      { color: 'blue', pieces: [{ expr: '3x-6', from: 2, to: 5 }] },
    ],
    verticalLines: [{ x: 2, label: 'x = 2', color: 'slate' }],
    points: [{ x: 2, y: 0, label: '(2 ; 0)', color: 'violet' }],
  },
};

const lectureParMorceaux: PointVisualSchema = {
  type: 'function_plot',
  title: 'Lire une fonction définie par morceaux',
  caption: 'g(x) = x + 2 si x < 0 et g(x) = −2x + 1 si x ≥ 0. En x = 0, le rond vide (0 ; 2) est exclu et le point plein (0 ; 1) est inclus : g(0) = 1.',
  plot: {
    xMin: -3, xMax: 3, yMin: -5, yMax: 3,
    curves: [
      { color: 'orange', pieces: [{ expr: 'x+2', from: -3, to: 0, includeTo: false }] },
      { color: 'blue', pieces: [{ expr: '-2x+1', from: 0, to: 3, includeFrom: true }] },
    ],
  },
};

const partieDecimale: PointVisualSchema = {
  type: 'function_plot',
  title: 'La partie décimale x − E(x)',
  caption: 'Chaque « dent de scie » part de 0 (point plein) et s’arrête juste avant 1 (rond vide).',
  plot: {
    xMin: -2, xMax: 3, yMin: -0.5, yMax: 1.5, yStep: 0.5,
    curves: [{ color: 'violet', pieces: fractionalPartPieces }],
    horizontalLines: [{ y: 1, label: 'y = 1', color: 'orange' }],
  },
};

const forfaitTelephone: PointVisualSchema = {
  type: 'function_plot',
  title: 'Forfait de 2 h puis dépassement',
  caption: 'Jusqu’à 120 min, on paie 300 F CFA. Au-delà, chaque minute coûte 25 F CFA de plus : la courbe monte.',
  plot: {
    xMin: 0, xMax: 160, yMin: 0, yMax: 1400, xStep: 20, yStep: 200,
    curves: [{ color: 'blue', pieces: [{ expr: '300', from: 0, to: 120 }, { expr: '300+25(x-120)', from: 120, to: 160 }] }],
    points: [
      { x: 120, y: 300, label: '120 min', color: 'violet' },
      { x: 153, y: 1125, label: '153 min : 1 125 F', color: 'orange' },
    ],
  },
};

const racineCarree: PointVisualSchema = {
  type: 'function_plot',
  title: 'La fonction racine carrée',
  caption: 'La courbe démarre au point (0 ; 0) : il n’y a rien à gauche de 0.',
  plot: {
    xMin: -1, xMax: 9, yMin: -1, yMax: 4,
    curves: [{ color: 'blue', label: 'y = √x', pieces: [{ expr: 'sqrt(x)', from: 0, to: 9, includeFrom: true }] }],
  },
};

const fonctionCube: PointVisualSchema = {
  type: 'function_plot',
  title: 'La fonction cube',
  caption: 'A(1 ; 1) et A′(−1 ; −1) sont symétriques par rapport à l’origine O.',
  plot: {
    xMin: -2.5, xMax: 2.5, yMin: -8, yMax: 8, yStep: 2,
    curves: [{ color: 'blue', label: 'y = x³', pieces: [{ expr: 'x^3', from: -2.1, to: 2.1 }] }],
    points: [
      { x: 1, y: 1, label: 'A(1 ; 1)', color: 'orange' },
      { x: -1, y: -1, label: 'A′(−1 ; −1)', color: 'orange' },
    ],
  },
};

const variationCarre: PointVisualSchema = {
  type: 'variation_table',
  title: 'Variations de la fonction carré',
  caption: 'La flèche descend jusqu’à 0 (en x = 0), puis remonte.',
  variation: {
    fLabel: 'x²',
    xValues: ['−∞', '0', '+∞'],
    values: [{ level: 'top' }, { text: '0', level: 'bottom' }, { level: 'top' }],
  },
};

const variationInverse: PointVisualSchema = {
  type: 'variation_table',
  title: 'Variations de la fonction inverse',
  caption: 'La double barre en 0 : la fonction inverse n’y est pas définie. Elle décroît sur ]−∞ ; 0[, puis à nouveau sur ]0 ; +∞[, séparément.',
  variation: {
    fLabel: '1/x',
    xValues: ['−∞', '0', '+∞'],
    values: [
      { level: 'top' },
      { forbidden: true, left: { level: 'bottom' }, right: { level: 'top' } },
      { level: 'bottom' },
    ],
  },
};

const comparaisonPuissances: PointVisualSchema = {
  type: 'function_plot',
  title: 'x², x et √x entre 0 et 1',
  caption: 'Pour x = 0,25 : x² = 0,0625, puis x = 0,25, puis √x = 0,5. Entre 0 et 1, la racine est au-dessus, le carré en dessous.',
  plot: {
    xMin: 0, xMax: 0.6, yMin: 0, yMax: 0.8, xStep: 0.1, yStep: 0.2,
    curves: [
      { color: 'blue', label: 'x²', pieces: [{ expr: 'x^2', from: 0, to: 0.6 }] },
      { color: 'green', label: 'x', pieces: [{ expr: 'x', from: 0, to: 0.6 }] },
      { color: 'violet', label: '√x', pieces: [{ expr: 'sqrt(x)', from: 0, to: 0.6 }] },
    ],
    verticalLines: [{ x: 0.25, label: 'x = 0,25', color: 'orange' }],
  },
};

const valeurAbsolue: PointVisualSchema = {
  type: 'function_plot',
  title: 'La fonction valeur absolue',
  caption: 'La courbe en « V » touche le bas en (0 ; 0) : |x| n’est jamais négatif.',
  plot: {
    xMin: -4, xMax: 4, yMin: -1, yMax: 4,
    curves: [{ color: 'blue', label: 'y = |x|', pieces: [{ expr: 'abs(x)', from: -4, to: 4 }] }],
    points: [{ x: 0, y: 0, label: 'minimum 0', color: 'orange' }],
  },
};

const variationCube: PointVisualSchema = {
  type: 'variation_table',
  title: 'Variations de la fonction cube',
  caption: 'Une seule flèche qui monte : chaque nombre (même −27) est atteint une seule fois.',
  variation: {
    fLabel: 'x³',
    xValues: ['−∞', '+∞'],
    values: [{ level: 'bottom' }, { level: 'top' }],
  },
};

const hyperbole: PointVisualSchema = {
  type: 'function_plot',
  title: 'La courbe de la fonction inverse',
  caption: 'Deux branches qui se rapprochent des axes sans jamais les toucher.',
  plot: {
    xMin: -4, xMax: 4, yMin: -4, yMax: 4,
    curves: [{ color: 'blue', label: 'y = 1/x', pieces: [{ expr: '1/x', from: -4, to: -0.25 }, { expr: '1/x', from: 0.25, to: 4 }] }],
    points: [
      { x: 1, y: 1, label: '(1 ; 1)', color: 'orange' },
      { x: -1, y: -1, label: '(−1 ; −1)', color: 'orange' },
    ],
  },
};

export const MATHS_2DE_C_NUMERIQUE_ILLUSTRATIONS: Record<string, ExerciseIllustration> = {
  // Point 1 : fonctions affines par intervalles et partie entière
  seconde_c_maths_numerique_ch5_p1_ex1: { course: partieEntiere },
  seconde_c_maths_numerique_ch5_p1_ex3: { course: valeurAbsolueParMorceaux },
  seconde_c_maths_numerique_ch5_p1_ex5: { course: lectureParMorceaux },
  seconde_c_maths_numerique_ch5_p1_ex6: { course: partieDecimale },
  seconde_c_maths_numerique_ch5_p1_ex8: { course: forfaitTelephone },
  // Point 2 : fonctions de référence
  seconde_c_maths_numerique_ch5_p2_ex1: { course: racineCarree },
  seconde_c_maths_numerique_ch5_p2_ex2: { course: fonctionCube },
  seconde_c_maths_numerique_ch5_p2_ex3: { course: variationCarre },
  seconde_c_maths_numerique_ch5_p2_ex4: { course: variationInverse },
  seconde_c_maths_numerique_ch5_p2_ex5: { course: comparaisonPuissances },
  seconde_c_maths_numerique_ch5_p2_ex6: { course: valeurAbsolue },
  seconde_c_maths_numerique_ch5_p2_ex7: { course: variationCube },
  seconde_c_maths_numerique_ch5_p2_ex8: { course: hyperbole },
};
