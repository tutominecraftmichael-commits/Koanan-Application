/**
 * KONAN Plus — les 3 objectifs de l'élève et ce qu'ils changent (mêmes valeurs que api/_goalTone.js).
 * Le serveur garde l'objectif (study_goals) et adapte le ton de KONE / KONAN ; ici : les textes affichés.
 */
import type { StudyGoal } from '../services/subscriptionApi';
import type { PlushMood } from '../components/common/KonanPlush';

export type { StudyGoal };

export interface StudyGoalInfo {
  id: StudyGoal;
  /** Note visée, affichée en grand */
  target: string;
  /** Note visée sur 20 (calcul « il te manque X points ») */
  targetValue: number;
  title: string;
  /** Libellé court (réglages, discussion avec KONE) */
  short: string;
  subtitle: string;
  changes: string[];
  /** Exemple de ce que KONE dira avec cet objectif */
  koneSays: string;
  mood: PlushMood;
}

export const STUDY_GOALS: StudyGoalInfo[] = [
  {
    id: 'target_12',
    target: '12',
    targetValue: 12,
    title: 'Avoir 12 de moyenne',
    short: '12 de moyenne',
    subtitle: 'Valider mon année sereinement.',
    changes: [
      'KONE t’encourage à chaque progrès, même petit.',
      'L’essentiel d’abord : les méthodes qui rapportent le plus de points.',
      'Des devoirs au niveau standard, bien progressifs.',
    ],
    koneSays: 'Bravo, c’est juste ! Chaque point compte pour tes 12. On en fait un autre ?',
    mood: 'encourage',
  },
  {
    id: 'target_16',
    target: '16',
    targetValue: 16,
    title: 'Avoir une mention',
    short: 'Mention (16)',
    subtitle: '16 de moyenne : bien au-dessus de la classe.',
    changes: [
      'KONE devient exigeant : justification, unités, rédaction.',
      'Un exercice plus difficile après chaque réussite.',
      'Des devoirs avec des questions d’approfondissement.',
    ],
    koneSays: 'C’est juste, mais sur ta copie il manque la justification. Écris-la : c’est le point de la mention.',
    mood: 'happy',
  },
  {
    id: 'major_promotion',
    target: '18+',
    targetValue: 18,
    title: 'Être major de ma classe',
    short: 'Major',
    subtitle: 'La première place, rien de moins.',
    changes: [
      'KONE te coache comme un champion : aucune approximation.',
      'Questions pièges et exercices chronométrés.',
      'Les devoirs les plus exigeants du programme.',
    ],
    koneSays: 'Correct. Maintenant, refais-le en 3 minutes, sans regarder ton cours.',
    mood: 'think',
  },
];

export const studyGoalInfo = (goal?: string | null): StudyGoalInfo | null =>
  STUDY_GOALS.find((g) => g.id === goal) || null;
