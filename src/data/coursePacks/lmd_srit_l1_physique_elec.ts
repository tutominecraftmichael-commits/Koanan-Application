/**
 * Paquet de cours : lmd_srit_l1_physique_elec (SRIT Licence 1 — Physique, Électricité & Électronique).
 * Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { OPTIQUE_GEOMETRIQUE_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/optique_geometrique';
import { PDE_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/pde';
import { ELECTROSTATIQUE_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/electrostatique';
import { ELECTROCINETIQUE_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/electrocinetique';
import { ELECTRONIQUE_FONDAMENTALE_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/electronique_fondamentale';
import { ELECTRONIQUE_NUMERIQUE_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/electronique_numerique';
import { MECANIQUE_POINT_SRIT_L1_CHAPTERS } from '../courses/lmd/srit_l1/mecanique_point';

export const CHAPTERS: CurriculumChapter[] = [
  ...OPTIQUE_GEOMETRIQUE_SRIT_L1_CHAPTERS,
  ...PDE_SRIT_L1_CHAPTERS,
  ...ELECTROSTATIQUE_SRIT_L1_CHAPTERS,
  ...ELECTROCINETIQUE_SRIT_L1_CHAPTERS,
  ...ELECTRONIQUE_FONDAMENTALE_SRIT_L1_CHAPTERS,
  ...ELECTRONIQUE_NUMERIQUE_SRIT_L1_CHAPTERS,
  ...MECANIQUE_POINT_SRIT_L1_CHAPTERS,
];
