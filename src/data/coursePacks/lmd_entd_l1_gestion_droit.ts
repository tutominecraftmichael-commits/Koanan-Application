/**
 * Paquet de cours : lmd_entd_l1_gestion_droit (LOT 3 — Gestion, Comptabilité & Droit — ENTD Licence 1).
 * Regroupe les 7 matières distinctes :
 *  - Comptabilité Générale (lmd_compta_generale)
 *  - Comptabilité Analytique (lmd_compta_analytique)
 *  - OGE — Organisation et Gestion des Entreprises (lmd_oge)
 *  - Intro au Management (lmd_intro_management)
 *  - Intro au Marketing (lmd_intro_marketing)
 *  - Intro au Droit du Numérique (lmd_intro_droit_num)
 *  - Droit du Numérique (lmd_droit_numerique)
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { COMPTA_GENERALE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/compta_generale';
import { COMPTA_ANALYTIQUE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/compta_analytique';
import { OGE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/oge';
import { INTRO_MANAGEMENT_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/intro_management';
import { INTRO_MARKETING_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/intro_marketing';
import { INTRO_DROIT_NUM_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/intro_droit_num';
import { DROIT_NUMERIQUE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/droit_numerique';

export const CHAPTERS: CurriculumChapter[] = [
  ...COMPTA_GENERALE_ENTD_L1_CHAPTERS,
  ...COMPTA_ANALYTIQUE_ENTD_L1_CHAPTERS,
  ...OGE_ENTD_L1_CHAPTERS,
  ...INTRO_MANAGEMENT_ENTD_L1_CHAPTERS,
  ...INTRO_MARKETING_ENTD_L1_CHAPTERS,
  ...INTRO_DROIT_NUM_ENTD_L1_CHAPTERS,
  ...DROIT_NUMERIQUE_ENTD_L1_CHAPTERS,
];
