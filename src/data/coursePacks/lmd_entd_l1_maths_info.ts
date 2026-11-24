/**
 * Paquet de cours : lmd_entd_l1_maths_info (LOT 1 — Maths, Informatique & Réseaux, ENTD Licence 1).
 * Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { ALGORITHMIQUE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/algorithmique';
import { ALGEBRE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/algebre';
import { ANALYSE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/analyse';
import { LOGIQUE_MATH_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/logique_math';
import { STAT_DESCRIPTIVE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/stat_descriptive';
import { RESEAUX_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/reseaux';

const withSrit = (chapters: CurriculumChapter[]): CurriculumChapter[] =>
  chapters.map((c) => ({
    ...c,
    alsoForGrades: Array.from(new Set([...(c.alsoForGrades || []), 'lmd_srit_l1'])),
  }));

export const CHAPTERS: CurriculumChapter[] = [
  ...withSrit(ALGORITHMIQUE_ENTD_L1_CHAPTERS),
  ...withSrit(ALGEBRE_ENTD_L1_CHAPTERS),
  ...withSrit(ANALYSE_ENTD_L1_CHAPTERS),
  ...withSrit(LOGIQUE_MATH_ENTD_L1_CHAPTERS),
  ...STAT_DESCRIPTIVE_ENTD_L1_CHAPTERS,
  ...RESEAUX_ENTD_L1_CHAPTERS,
];
