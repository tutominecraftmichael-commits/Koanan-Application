/**
 * Quelles classes ont les cours guidés, l'icône d'entraînement et la ligue.
 * Mêmes règles que le serveur (api/_leagueRules.js : gradeHasCourses, gradeInLeague).
 *
 * - Seconde, Première, Terminale : cours guidés, entraînement (icône ronde, énergie ⚡) et ligue.
 * - LMD et BTS (choix du fondateur, 2026-11-15) : pas encore de cours, donc PAS d'entraînement ;
 *   ils sont quand même dans la ligue et gagnent leurs XP avec le chronomètre de leurs séances.
 * - Collège ou classe inconnue : ni entraînement ni ligue.
 */

/** La classe a-t-elle des cours guidés dans KONAN (donc l'entraînement) ? */
export function gradeHasCourses(gradeLevel?: string | null): boolean {
  return /^(seconde|premiere|terminale|lmd)_/.test(String(gradeLevel || ''));
}

/** La classe est-elle admise dans la ligue ? */
export function gradeInLeague(gradeLevel?: string | null): boolean {
  return gradeHasCourses(gradeLevel) || /^superieur_(lmd|bts)$/.test(String(gradeLevel || ''));
}
