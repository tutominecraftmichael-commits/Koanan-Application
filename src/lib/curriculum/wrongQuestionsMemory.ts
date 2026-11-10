/**
 * wrongQuestionsMemory — MÉMOIRE CONTINUE DES ERREURS DE KONAN
 *
 * Chaque fois que l'élève se trompe (QCM des cours guidés OU série de 30 questions de devoir), KONAN garde :
 * la question, son chapitre, la réponse fausse choisie et le moment de l'erreur.
 * Lors des séances de préparation suivantes, ces questions ratées sont reposées EN PRIORITÉ.
 * Quand l'élève les réussit, elles sortent de la liste (la révision espacée prend le relais).
 *
 * Une seule mémoire pour tout KONAN : elle repose sur la mémoire de révision (reviewMemory),
 * déjà copiée dans le compte de l'élève (tous ses appareils).
 */
export { recordReviewAnswer as recordAnswer, getWrongQuestions } from './reviewMemory';
export type { ReviewEntry as WrongQuestion, AnswerDetails } from './reviewMemory';

/** Petit mot de KONAN quand il repose une question ratée (à la première personne). */
export const RETRY_NOTE = 'Je te repose celle-là parce que tu l’avais ratée la dernière fois !';
