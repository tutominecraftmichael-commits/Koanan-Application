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
export const EXAM_PREP_PAUSED_MESSAGE = 'Disponible pour l’instant en 2nde A, 2nde C et Tle A. Ta classe arrive bientôt.';

/** La préparation aux devoirs est-elle ouverte pour cette classe ? */
export function isExamPrepOpenFor(rawGrade?: string | null): boolean {
  return !EXAM_PREP_PAUSED && isExamPrepGrade(rawGrade);
}

type WithExamFields = { examDate?: string; examType?: string; examTime?: string };

/** Copie des matières sans leurs dates d'épreuve quand la préparation n'est pas ouverte pour la classe. */
export function withoutPausedExamPrep<T extends WithExamFields>(subjects: T[], rawGrade?: string | null): T[] {
  if (isExamPrepOpenFor(rawGrade)) return subjects;
  return subjects.map((s) => ({ ...s, examDate: undefined, examType: undefined, examTime: undefined }));
}
