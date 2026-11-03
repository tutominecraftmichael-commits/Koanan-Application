/**
 * Interrupteurs de fonctionnalités.
 *
 * EXAM_PREP_PAUSED — Préparation aux devoirs et examens (date de l'épreuve + note visée,
 * puis planning automatique jusqu'au jour J, séances de 45 min pour un devoir).
 * En pause pendant sa mise à jour :
 *  - aucun écran ne permet de saisir une date, une nature ou une heure d'épreuve ;
 *  - le planificateur ignore les dates d'épreuve (aucune séance de préparation n'est créée).
 * Les dates déjà saisies par les élèves restent enregistrées : repasser à `false` réactive tout.
 */
export const EXAM_PREP_PAUSED = true;

export const EXAM_PREP_PAUSED_TITLE = 'Préparation aux devoirs et examens';
export const EXAM_PREP_PAUSED_MESSAGE = 'Momentanément indisponible pour mise à jour. Elle revient bientôt, améliorée.';

type WithExamFields = { examDate?: string; examType?: string; examTime?: string };

/** Copie des matières sans leurs dates d'épreuve, pour que le planificateur les ignore pendant la pause. */
export function withoutPausedExamPrep<T extends WithExamFields>(subjects: T[]): T[] {
  if (!EXAM_PREP_PAUSED) return subjects;
  return subjects.map((s) => ({ ...s, examDate: undefined, examType: undefined, examTime: undefined }));
}
