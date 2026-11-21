/**
 * Paquet de cours : lmd_entd_l1_eco_finance (LOT 2 — Économie, Numérique & Finance).
 * Filière ENTD Licence 1 (LMD).
 * Regroupe les 6 matières :
 * - Intro à l'Éco Numérique (lmd_intro_eco_num)
 * - Modèle de Développement en Économie Numérique (lmd_modele_dev_eco_num)
 * - Macroéconomie (lmd_macroeconomie)
 * - Microéconomie (lmd_microeconomie)
 * - Banque (lmd_banque)
 * - Assurance (lmd_assurance)
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { INTRO_ECO_NUM_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/intro_eco_num';
import { MODELE_DEV_ECO_NUM_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/modele_dev_eco_num';
import { MACROECONOMIE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/macroeconomie';
import { MICROECONOMIE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/microeconomie';
import { BANQUE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/banque';
import { ASSURANCE_ENTD_L1_CHAPTERS } from '../courses/lmd/entd_l1/assurance';

export const CHAPTERS: CurriculumChapter[] = [
  ...INTRO_ECO_NUM_ENTD_L1_CHAPTERS,
  ...MODELE_DEV_ECO_NUM_ENTD_L1_CHAPTERS,
  ...MACROECONOMIE_ENTD_L1_CHAPTERS,
  ...MICROECONOMIE_ENTD_L1_CHAPTERS,
  ...BANQUE_ENTD_L1_CHAPTERS,
  ...ASSURANCE_ENTD_L1_CHAPTERS,
];
