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

const parabole: PointVisualSchema = {
  type: 'function_plot',
  title: 'La fonction carré',
  caption: 'Une parabole de sommet O : elle descend jusqu’à 0, puis remonte. Les points (−2 ; 4) et (2 ; 4) sont symétriques par rapport à l’axe des ordonnées.',
  plot: {
    xMin: -3, xMax: 3, yMin: -1, yMax: 9,
    curves: [{ color: 'blue', label: 'y = x²', pieces: [{ expr: 'x^2', from: -3, to: 3 }] }],
    points: [
      { x: 0, y: 0, label: 'minimum 0', color: 'orange' },
      { x: -2, y: 4, label: '(−2 ; 4)', color: 'violet' },
      { x: 2, y: 4, label: '(2 ; 4)', color: 'violet' },
    ],
  },
};

const troisMorceaux: PointVisualSchema = {
  type: 'function_plot',
  title: 'Une fonction à trois morceaux',
  caption: 'f(x) = −x − 5 sur ]−∞ ; 0], (3/2)x + 1 sur ]0 ; 2[, x − 5 sur [2 ; +∞[. La courbe coupe l’axe des abscisses en −5 et en 5 seulement.',
  plot: {
    xMin: -7, xMax: 7, yMin: -6, yMax: 5,
    curves: [
      { color: 'blue', pieces: [{ expr: '-x-5', from: -7, to: 0, includeTo: true }] },
      { color: 'orange', pieces: [{ expr: '1,5x+1', from: 0, to: 2, includeFrom: false, includeTo: false }] },
      { color: 'green', pieces: [{ expr: 'x-5', from: 2, to: 7, includeFrom: true }] },
    ],
    points: [
      { x: -5, y: 0, label: 'x = −5', color: 'violet' },
      { x: 5, y: 0, label: 'x = 5', color: 'violet' },
    ],
  },
};

const quatreMorceaux: PointVisualSchema = {
  type: 'function_plot',
  title: 'Une fonction à quatre morceaux',
  caption: 'La droite y = −3 ne rencontre jamais la courbe : l’équation f(x) = −3 n’a pas de solution. Ronds vides : valeurs exclues (6 et −2 en x = −4, x = 3 et x = 4).',
  plot: {
    xMin: -7, xMax: 9, yMin: -11, yMax: 9, yStep: 2,
    curves: [
      { color: 'blue', pieces: [{ expr: '3x+8', from: -6, to: -4, includeFrom: true, includeTo: true }] },
      { color: 'orange', pieces: [{ expr: '-8/7x+10/7', from: -4, to: 3, includeFrom: false, includeTo: false }] },
      { color: 'green', pieces: [{ expr: '-1', from: 3, to: 4, includeFrom: true, includeTo: true }] },
      { color: 'violet', pieces: [{ expr: '2,5x-12', from: 4, to: 8, includeFrom: false, includeTo: true }] },
    ],
    horizontalLines: [{ y: -3, label: 'y = −3', color: 'slate' }],
  },
};

const deuxForfaits: PointVisualSchema = {
  type: 'function_plot',
  title: 'Comparer les deux forfaits',
  caption: 'x = minutes de dépassement. Les deux droites se croisent en x = 3 : au-delà, le forfait 1 (bleu) est moins cher. Pour 33 min : 1 125 F contre 2 625 F.',
  plot: {
    xMin: 0, xMax: 40, yMin: 0, yMax: 3200, xStep: 5, yStep: 400,
    curves: [
      { color: 'blue', label: 'forfait 1', pieces: [{ expr: '300+25x', from: 0, to: 40 }] },
      { color: 'orange', label: 'forfait 2', pieces: [{ expr: '150+75x', from: 0, to: 40 }] },
    ],
    points: [
      { x: 33, y: 1125, label: '1 125 F', color: 'blue' },
      { x: 33, y: 2625, label: '2 625 F', color: 'orange' },
    ],
  },
};

// Identifiants des exercices de la leçon 13 (v2) : <id du chapitre>_pNN_qK
const L13 = 'seconde_c_maths_numerique_l13_fonctions_elementaires_';

export const MATHS_2DE_C_NUMERIQUE_ILLUSTRATIONS: Record<string, ExerciseIllustration> = {
  // Mini-leçons 1 et 2 : fonctions affines par intervalles
  [`${L13}p01_q4`]: { course: valeurAbsolueParMorceaux },
  [`${L13}p02_q7`]: { course: troisMorceaux },
  // Mini-leçon 3 : partie entière
  [`${L13}p03_q6`]: { course: partieEntiere },
  // Mini-leçon 4 : carré et valeur absolue
  [`${L13}p04_q2`]: { course: variationCarre },
  [`${L13}p04_q4`]: { course: parabole },
  [`${L13}p04_q6`]: { course: valeurAbsolue },
  // Mini-leçon 5 : racine carrée, inverse, cube
  [`${L13}p05_q1`]: { course: racineCarree },
  [`${L13}p05_q4`]: { course: variationInverse },
  [`${L13}p05_q6`]: { course: hyperbole },
  [`${L13}p05_q7`]: { course: fonctionCube },
  // Mini-leçon 6 : lecture graphique et forfaits
  [`${L13}p06_q6`]: { course: quatreMorceaux },
  [`${L13}p06_q7`]: { course: deuxForfaits },
};