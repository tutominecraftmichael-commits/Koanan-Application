/**
 * Paquet de cours : premiere_maths. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { MATHS_1RE_L01_EQUATIONS_INEQUATIONS } from '../courses/premiere/maths_1re_equations_inequations';
import { MATHS_1RE_L02_DENOMBREMENT } from '../courses/premiere/maths_1re_denombrement';
import { MATHS_1RE_L03_GENERALITES_FONCTIONS } from '../courses/premiere/maths_1re_generalites_fonctions';
import { MATHS_1RE_L04_DERIVABILITE_ETUDE_FONCTIONS } from '../courses/premiere/maths_1re_derivabilite_etude_fonctions';
import { MATHS_1RE_L06_STATISTIQUES } from '../courses/premiere/maths_1re_statistiques';
import { MATHS_1RE_L07_SYSTEMES_INEQUATIONS_LINEAIRES } from '../courses/premiere/maths_1re_systemes_inequations_lineaires';
import { MATHS_1RE_D_L11_SYSTEMES_EQUATIONS_LINEAIRES } from '../courses/premiere/maths_1re_d_systemes_equations_lineaires';
import { MATHS_1RE_D_L12_SUITES_NUMERIQUES } from '../courses/premiere/maths_1re_d_suites_numeriques';
import { MATHS_1RE_D_L13_ORTHOGONALITE_ESPACE } from '../courses/premiere/maths_1re_d_orthogonalite_espace';
import { MATHS_1RE_D_L15_STATISTIQUES } from '../courses/premiere/maths_1re_d_statistiques';
import { MATHS_1RE_C_L01_EQUATIONS_INEQUATIONS } from '../courses/premiere/maths_1re_c_01_equations_inequations';
import { MATHS_1RE_C_L03_GENERALITES_FONCTIONS } from '../courses/premiere/maths_1re_c_03_generalites_fonctions';
import { MATHS_1RE_C_L04_DENOMBREMENT } from '../courses/premiere/maths_1re_c_04_denombrement';
import { MATHS_1RE_C_L05_LIMITES_CONTINUITE } from '../courses/premiere/maths_1re_c_05_limites_continuite';
import { MATHS_1RE_C_L07_EXTENSION_LIMITE } from '../courses/premiere/maths_1re_c_07_extension_limite';
import { MATHS_1RE_C_L09_DERIVATION } from '../courses/premiere/maths_1re_c_09_derivation';
import { MATHS_1RE_C_L10_PROBABILITE } from '../courses/premiere/maths_1re_c_10_probabilite';
import { MATHS_1RE_C_L11_ETUDE_REPRESENTATION_FONCTION } from '../courses/premiere/maths_1re_c_11_etude_representation_fonction';
import { MATHS_1RE_C_L02_BARYCENTRE } from '../courses/premiere/maths_1re_c_02_barycentre';
import { MATHS_1RE_C_L06_ANGLES_ORIENTES_TRIGONOMETRIE } from '../courses/premiere/maths_1re_c_06_angles_orientes_trigonometrie';
import { MATHS_1RE_C_L08_COMPOSEES_TRANSFORMATIONS } from '../courses/premiere/maths_1re_c_08_composees_transformations';
import { MATHS_1RE_C_L12_ORTHOGONALITE_ESPACE } from '../courses/premiere/maths_1re_c_12_orthogonalite_espace';
import { MATHS_1RE_C_L13_SYSTEMES_EQUATIONS_LINEAIRES } from '../courses/premiere/maths_1re_c_13_systemes_equations_lineaires';
import { MATHS_1RE_C_L15_SUITES_NUMERIQUES } from '../courses/premiere/maths_1re_c_15_suites_numeriques';
import { MATHS_1RE_C_L16_VECTEURS_ESPACE } from '../courses/premiere/maths_1re_c_16_vecteurs_espace';
import { MATHS_1RE_C_L17_STATISTIQUES } from '../courses/premiere/maths_1re_c_17_statistiques';

export const CHAPTERS: CurriculumChapter[] = [
  MATHS_1RE_L01_EQUATIONS_INEQUATIONS,
  MATHS_1RE_L02_DENOMBREMENT,
  MATHS_1RE_L03_GENERALITES_FONCTIONS,
  MATHS_1RE_L04_DERIVABILITE_ETUDE_FONCTIONS,
  MATHS_1RE_L06_STATISTIQUES,
  MATHS_1RE_L07_SYSTEMES_INEQUATIONS_LINEAIRES,
  MATHS_1RE_D_L11_SYSTEMES_EQUATIONS_LINEAIRES,
  MATHS_1RE_D_L12_SUITES_NUMERIQUES,
  MATHS_1RE_D_L13_ORTHOGONALITE_ESPACE,
  MATHS_1RE_D_L15_STATISTIQUES,
  MATHS_1RE_C_L01_EQUATIONS_INEQUATIONS,
  MATHS_1RE_C_L03_GENERALITES_FONCTIONS,
  MATHS_1RE_C_L04_DENOMBREMENT,
  MATHS_1RE_C_L05_LIMITES_CONTINUITE,
  MATHS_1RE_C_L07_EXTENSION_LIMITE,
  MATHS_1RE_C_L09_DERIVATION,
  MATHS_1RE_C_L10_PROBABILITE,
  MATHS_1RE_C_L11_ETUDE_REPRESENTATION_FONCTION,
  MATHS_1RE_C_L02_BARYCENTRE,
  MATHS_1RE_C_L06_ANGLES_ORIENTES_TRIGONOMETRIE,
  MATHS_1RE_C_L08_COMPOSEES_TRANSFORMATIONS,
  MATHS_1RE_C_L12_ORTHOGONALITE_ESPACE,
  MATHS_1RE_C_L13_SYSTEMES_EQUATIONS_LINEAIRES,
  MATHS_1RE_C_L15_SUITES_NUMERIQUES,
  MATHS_1RE_C_L16_VECTEURS_ESPACE,
  MATHS_1RE_C_L17_STATISTIQUES,
];
