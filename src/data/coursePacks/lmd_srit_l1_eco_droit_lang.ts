/**
 * Paquet de cours : lmd_srit_l1_eco_droit_lang (SRIT Licence 1 — Économie, Droit & Anglais).
 * Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { ANALYSE_ECONOMIQUE_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/analyse_economique';
import { INTRO_DROIT_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/intro_droit';
import { ANGLAIS_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/anglais';

export const CHAPTERS: CurriculumChapter[] = [
  ...ANALYSE_ECONOMIQUE_SRIT_L1_CHAPTERS,
  ...INTRO_DROIT_SRIT_L1_CHAPTERS,
  ...ANGLAIS_SRIT_L1_CHAPTERS,
];
