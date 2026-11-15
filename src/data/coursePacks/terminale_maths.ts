/**
 * Paquet de cours : terminale_maths. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { MATHS_TLE_C_L01_LIMITES_CONTINUITE } from '../courses/terminale/maths_tle_c_01_limites_continuite';
import { MATHS_TLE_C_L02_PROBABILITE_CONDITIONNELLE } from '../courses/terminale/maths_tle_c_02_probabilite_conditionnelle';
import { MATHS_TLE_C_L03_DERIVABILITE_ETUDE_FONCTIONS } from '../courses/terminale/maths_tle_c_03_derivabilite_etude_fonctions';
import { MATHS_TLE_C_L04_DIVISIBILITE_DANS_Z } from '../courses/terminale/maths_tle_c_04_divisibilite_dans_z';
import { MATHS_TLE_C_L04_PRIMITIVES } from '../courses/terminale/maths_tle_c_04_primitives';
import { MATHS_TLE_C_L05_LOGARITHME_NEPERIEN } from '../courses/terminale/maths_tle_c_05_logarithme_neperien';
import { MATHS_TLE_C_L06_NOMBRES_COMPLEXES } from '../courses/terminale/maths_tle_c_06_nombres_complexes';
import { MATHS_TLE_C_L07_EXPONENTIELLES_PUISSANCES } from '../courses/terminale/maths_tle_c_07_exponentielles_puissances';
import { MATHS_TLE_C_L10_CALCUL_INTEGRAL } from '../courses/terminale/maths_tle_c_10_calcul_integral';
import { MATHS_TLE_C_L11_PPCM_PGCD } from '../courses/terminale/maths_tle_c_11_ppcm_pgcd';
import { MATHS_TLE_C_L12_SUITES_NUMERIQUES } from '../courses/terminale/maths_tle_c_12_suites_numeriques';
import { MATHS_TLE_C_L12_EQUATIONS_DIFFERENTIELLES } from '../courses/terminale/maths_tle_c_12_equations_differentielles';
import { MATHS_TLE_C_L11_STATISTIQUE_DEUX_VARIABLES } from '../courses/terminale/maths_tle_c_11_statistique_deux_variables';
import { MATHS_TLE_C_L02_BARYCENTRE_LIGNES_NIVEAUX } from '../courses/terminale/maths_tle_c_02_barycentre_lignes_niveaux';
import { MATHS_TLE_C_L06_GEOMETRIE_ANALYTIQUE_ESPACE } from '../courses/terminale/maths_tle_c_06_geometrie_analytique_espace';
import { MATHS_TLE_C_L07_CONIQUES } from '../courses/terminale/maths_tle_c_07_coniques';
import { MATHS_TLE_C_L08_NOMBRES_COMPLEXES_GEOMETRIE } from '../courses/terminale/maths_tle_c_08_nombres_complexes_geometrie';
import { MATHS_TLE_C_L15_ISOMETRIES_PLAN } from '../courses/terminale/maths_tle_c_15_isometries_plan';
import { MATHS_TLE_C_L16_SIMILITUDES_DIRECTES_PLAN } from '../courses/terminale/maths_tle_c_16_similitudes_directes_plan';
import { MATHS_TLE_D_L01_LIMITES_CONTINUITE } from '../courses/terminale/maths_tle_d_limites_continuite';
import { MATHS_TLE_D_L02_PROBABILITE_CONDITIONNELLE } from '../courses/terminale/maths_tle_d_probabilite_conditionnelle';
import { MATHS_TLE_D_L03_DERIVABILITE_ETUDE_FONCTIONS } from '../courses/terminale/maths_tle_d_derivabilite_etude_fonctions';
import { MATHS_TLE_D_L04_PRIMITIVES } from '../courses/terminale/maths_tle_d_primitives';
import { MATHS_TLE_D_L05_LOGARITHME_NEPERIEN } from '../courses/terminale/maths_tle_d_logarithme_neperien';
import { MATHS_TLE_D_L06_NOMBRES_COMPLEXES } from '../courses/terminale/maths_tle_d_nombres_complexes';
import { MATHS_TLE_D_L10_CALCUL_INTEGRAL } from '../courses/terminale/maths_tle_d_calcul_integral';
import { MATHS_TLE_D_L11_STATISTIQUE_DEUX_VARIABLES } from '../courses/terminale/maths_tle_d_11_statistique_deux_variables';
import { MATHS_TLE_D_L12_EQUATIONS_DIFFERENTIELLES } from '../courses/terminale/maths_tle_d_12_equations_differentielles';
import { MATHS_TLE_A_L01_LIMITES_DERIVATION } from '../courses/terminale/maths_tle_a_limites_derivation';
import { MATHS_TLE_A_L02_ETUDE_FONCTIONS } from '../courses/terminale/maths_tle_a_etude_fonctions';
import { MATHS_TLE_A_L03_LOGARITHME_NEPERIEN } from '../courses/terminale/maths_tle_a_logarithme_neperien';
import { MATHS_TLE_A_L04_EXPONENTIELLE } from '../courses/terminale/maths_tle_a_exponentielle';
import { MATHS_TLE_A_L05_SUITES } from '../courses/terminale/maths_tle_a_suites';
import { MATHS_TLE_A_L06_PROBABILITES_STATISTIQUES } from '../courses/terminale/maths_tle_a_probabilites_statistiques';

export const CHAPTERS: CurriculumChapter[] = [
  MATHS_TLE_C_L01_LIMITES_CONTINUITE,
  MATHS_TLE_C_L02_PROBABILITE_CONDITIONNELLE,
  MATHS_TLE_C_L03_DERIVABILITE_ETUDE_FONCTIONS,
  MATHS_TLE_C_L04_DIVISIBILITE_DANS_Z,
  MATHS_TLE_C_L04_PRIMITIVES,
  MATHS_TLE_C_L05_LOGARITHME_NEPERIEN,
  MATHS_TLE_C_L06_NOMBRES_COMPLEXES,
  MATHS_TLE_C_L07_EXPONENTIELLES_PUISSANCES,
  MATHS_TLE_C_L10_CALCUL_INTEGRAL,
  MATHS_TLE_C_L11_PPCM_PGCD,
  MATHS_TLE_C_L12_SUITES_NUMERIQUES,
  MATHS_TLE_C_L12_EQUATIONS_DIFFERENTIELLES,
  MATHS_TLE_C_L11_STATISTIQUE_DEUX_VARIABLES,
  MATHS_TLE_C_L02_BARYCENTRE_LIGNES_NIVEAUX,
  MATHS_TLE_C_L06_GEOMETRIE_ANALYTIQUE_ESPACE,
  MATHS_TLE_C_L07_CONIQUES,
  MATHS_TLE_C_L08_NOMBRES_COMPLEXES_GEOMETRIE,
  MATHS_TLE_C_L15_ISOMETRIES_PLAN,
  MATHS_TLE_C_L16_SIMILITUDES_DIRECTES_PLAN,
  MATHS_TLE_D_L01_LIMITES_CONTINUITE,
  MATHS_TLE_D_L02_PROBABILITE_CONDITIONNELLE,
  MATHS_TLE_D_L03_DERIVABILITE_ETUDE_FONCTIONS,
  MATHS_TLE_D_L04_PRIMITIVES,
  MATHS_TLE_D_L05_LOGARITHME_NEPERIEN,
  MATHS_TLE_D_L06_NOMBRES_COMPLEXES,
  MATHS_TLE_D_L10_CALCUL_INTEGRAL,
  MATHS_TLE_D_L11_STATISTIQUE_DEUX_VARIABLES,
  MATHS_TLE_D_L12_EQUATIONS_DIFFERENTIELLES,
  MATHS_TLE_A_L01_LIMITES_DERIVATION,
  MATHS_TLE_A_L02_ETUDE_FONCTIONS,
  MATHS_TLE_A_L03_LOGARITHME_NEPERIEN,
  MATHS_TLE_A_L04_EXPONENTIELLE,
  MATHS_TLE_A_L05_SUITES,
  MATHS_TLE_A_L06_PROBABILITES_STATISTIQUES,
];
