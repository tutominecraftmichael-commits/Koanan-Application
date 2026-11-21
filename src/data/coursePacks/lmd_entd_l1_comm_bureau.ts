/**
 * Paquet de cours : lmd_entd_l1_comm_bureau (Lot 4 — Bureautique, Digital & Communication).
 * Regroupe les 5 matières ENTD L1 :
 * - Bureautique (lmd_bureautique)
 * - Initiation à l'Informatique (lmd_init_info)
 * - Technique d'Expression Française (lmd_tef)
 * - Écriture Créative et Communication (lmd_ecriture_creative)
 * - Développement Personnel (lmd_dev_perso)
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { BUREAUTIQUE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/bureautique';
import { INIT_INFO_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/init_info';
import { TEF_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/tef';
import { ECRITURE_CREATIVE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/ecriture_creative';
import { DEV_PERSO_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/dev_perso';

export const CHAPTERS: CurriculumChapter[] = [
  ...BUREAUTIQUE_ENTD_L1_CHAPTERS,
  ...INIT_INFO_ENTD_L1_CHAPTERS,
  ...TEF_ENTD_L1_CHAPTERS,
  ...ECRITURE_CREATIVE_ENTD_L1_CHAPTERS,
  ...DEV_PERSO_ENTD_L1_CHAPTERS,
];
