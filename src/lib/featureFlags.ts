/**
 * Interrupteurs de fonctionnalités.
 *
 * EXAM_PREP_PAUSED — interrupteur GÉNÉRAL de la préparation aux devoirs et examens.
 * La préparation est ouverte classe par classe (voir EXAM_PREP_GRADES dans lib/exam/examPrepRules) :
 * aujourd'hui 2nde A, 2nde C, Tle A1 et Tle A2, les classes qui ont des cours et des QCM complets.
 * Pour les autres classes, rien ne change : pas de saisie de date, le planificateur ignore les dates.
 * Les dates déjà saisies restent enregistrées.
 */
import { isExamPrepGrade } from './exam/examPrepRules';

export const EXAM_PREP_PAUSED = false;

export const EXAM_PREP_PAUSED_TITLE = 'Préparation aux devoirs et examens';
export const EXAM_PREP_PAUSED_MESSAGE = 'Disponible en Seconde, Première, Terminale et Licence 1 (ENTD & SRIT). Les autres filières arrivent bientôt.';

/**
 * La préparation aux devoirs est-elle ouverte pour cette classe ? Tous les pays depuis le 2026-11-22 au soir
 * (hors Côte d'Ivoire, l'Histoire-Géographie du lycée n'a simplement pas de cours : voir subjectVisibility).
 * `country` est gardé pour les appels existants.
 */
export function isExamPrepOpenFor(rawGrade?: string | null, _country?: string | null): boolean {
  return !EXAM_PREP_PAUSED && isExamPrepGrade(rawGrade);
}

type WithExamFields = { examDate?: string; examType?: string; examTime?: string };

/** Copie des matières sans leurs dates d'épreuve quand la préparation n'est pas ouverte pour la classe. */
export function withoutPausedExamPrep<T extends WithExamFields>(subjects: T[], rawGrade?: string | null, country?: string | null): T[] {
  if (isExamPrepOpenFor(rawGrade, country)) return subjects;
  return subjects.map((s) => ({ ...s, examDate: undefined, examType: undefined, examTime: undefined }));
}
