/**
 * Paquet de cours : lmd_srit_l1_maths_info (SRIT Licence 1 — Mathématiques & Informatique Spécialisées).
 * Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { STRUCTURES_ALGEBRIQUES_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/structures_algebriques';
import { GEOMETRIE_DIFF_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/geometrie_diff';
import { ANALYSE_2_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/analyse_2';
import { ARCHI_ORDINATEURS_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/archi_ordinateurs';
import { ALGO_PYTHON_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/algo_python';

export const CHAPTERS: CurriculumChapter[] = [
  ...STRUCTURES_ALGEBRIQUES_SRIT_L1_CHAPTERS,
  ...GEOMETRIE_DIFF_SRIT_L1_CHAPTERS,
  ...ANALYSE_2_SRIT_L1_CHAPTERS,
  ...ARCHI_ORDINATEURS_SRIT_L1_CHAPTERS,
  ...ALGO_PYTHON_SRIT_L1_CHAPTERS,
];
