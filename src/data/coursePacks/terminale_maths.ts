/**
 * Paquet de cours : terminale_maths. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/terminale/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { MATHS_TLE_A_L01_FONCTIONS } from '../courses/terminale/maths_tle_a_fonctions';
import { MATHS_TLE_A_L02_PROBABILITES } from '../courses/terminale/maths_tle_a_probabilites';
import { MATHS_TLE_A_L03_LOGARITHME } from '../courses/terminale/maths_tle_a_logarithme';
import { MATHS_TLE_A_L04_EXPONENTIELLE } from '../courses/terminale/maths_tle_a_exponentielle';
import { MATHS_TLE_A_L05_SUITES } from '../courses/terminale/maths_tle_a_suites';
import { MATHS_TLE_A_L06_STATISTIQUE } from '../courses/terminale/maths_tle_a_statistique';
import { MATHS_TLE_A_L07_SYSTEMES } from '../courses/terminale/maths_tle_a_systemes';
import { MATHS_TLE_A_L08_PRIMITIVES } from '../courses/terminale/maths_tle_a_primitives';
import { MATHS_TLE_CD_L01_LIMITES_CONTINUITE } from '../courses/terminale/maths_tle_cd_limites_continuite';
import { MATHS_TLE_C_L02_BARYCENTRE } from '../courses/terminale/maths_tle_c_barycentre';
import { MATHS_TLE_CD_L02_PROBABILITE } from '../courses/terminale/maths_tle_cd_probabilite';
import { MATHS_TLE_CD_L03_DERIVABILITE } from '../courses/terminale/maths_tle_cd_derivabilite';
import { MATHS_TLE_C_L04_DIVISIBILITE } from '../courses/terminale/maths_tle_c_divisibilite';
import { MATHS_TLE_CD_L04_PRIMITIVES } from '../courses/terminale/maths_tle_cd_primitives';
import { MATHS_TLE_C_L05_GEOMETRIE_ESPACE } from '../courses/terminale/maths_tle_c_geometrie_espace';
import { MATHS_TLE_CD_L05_LOGARITHMES } from '../courses/terminale/maths_tle_cd_logarithmes';
import { MATHS_TLE_CD_L06_COMPLEXES } from '../courses/terminale/maths_tle_cd_complexes';
import { MATHS_TLE_C_L07_CONIQUES } from '../courses/terminale/maths_tle_c_coniques';
import { MATHS_TLE_CD_L07_EXPONENTIELLE } from '../courses/terminale/maths_tle_cd_exponentielle';
import { MATHS_TLE_CD_L08_COMPLEXES_GEOMETRIE } from '../courses/terminale/maths_tle_cd_complexes_geometrie';
import { MATHS_TLE_CD_L09_SUITES } from '../courses/terminale/maths_tle_cd_suites';
import { MATHS_TLE_CD_L10_INTEGRALE } from '../courses/terminale/maths_tle_cd_integrale';
import { MATHS_TLE_C_L11_PPCM_PGCD } from '../courses/terminale/maths_tle_c_ppcm_pgcd';
import { MATHS_TLE_CD_L11_STATISTIQUES } from '../courses/terminale/maths_tle_cd_statistiques';
import { MATHS_TLE_CD_L12_EQUATIONS_DIFFERENTIELLES } from '../courses/terminale/maths_tle_cd_equations_differentielles';
import { MATHS_TLE_C_L14_ISOMETRIES } from '../courses/terminale/maths_tle_c_isometries';
import { MATHS_TLE_C_L16_SIMILITUDES } from '../courses/terminale/maths_tle_c_similitudes';

export const CHAPTERS: CurriculumChapter[] = [
  MATHS_TLE_A_L01_FONCTIONS,
  MATHS_TLE_A_L02_PROBABILITES,
  MATHS_TLE_A_L03_LOGARITHME,
  MATHS_TLE_A_L04_EXPONENTIELLE,
  MATHS_TLE_A_L05_SUITES,
  MATHS_TLE_A_L06_STATISTIQUE,
  MATHS_TLE_A_L07_SYSTEMES,
  MATHS_TLE_A_L08_PRIMITIVES,
  MATHS_TLE_CD_L01_LIMITES_CONTINUITE,
  MATHS_TLE_C_L02_BARYCENTRE,
  MATHS_TLE_CD_L02_PROBABILITE,
  MATHS_TLE_CD_L03_DERIVABILITE,
  MATHS_TLE_C_L04_DIVISIBILITE,
  MATHS_TLE_CD_L04_PRIMITIVES,
  MATHS_TLE_C_L05_GEOMETRIE_ESPACE,
  MATHS_TLE_CD_L05_LOGARITHMES,
  MATHS_TLE_CD_L06_COMPLEXES,
  MATHS_TLE_C_L07_CONIQUES,
  MATHS_TLE_CD_L07_EXPONENTIELLE,
  MATHS_TLE_CD_L08_COMPLEXES_GEOMETRIE,
  MATHS_TLE_CD_L09_SUITES,
  MATHS_TLE_CD_L10_INTEGRALE,
  MATHS_TLE_C_L11_PPCM_PGCD,
  MATHS_TLE_CD_L11_STATISTIQUES,
  MATHS_TLE_CD_L12_EQUATIONS_DIFFERENTIELLES,
  MATHS_TLE_C_L14_ISOMETRIES,
  MATHS_TLE_C_L16_SIMILITUDES,
];
