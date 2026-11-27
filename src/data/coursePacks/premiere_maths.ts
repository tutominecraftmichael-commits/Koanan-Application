/**
 * Paquet de cours : premiere_maths. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/premiere/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { MATHS_1ERE_A_L01_EQUATIONS_INEQUATIONS } from '../courses/premiere/maths_1ere_a_equations_inequations';
import { MATHS_1ERE_A_L02_DENOMBREMENT } from '../courses/premiere/maths_1ere_a_denombrement';
import { MATHS_1ERE_A_L03_GENERALITES_FONCTIONS } from '../courses/premiere/maths_1ere_a_generalites_fonctions';
import { MATHS_1ERE_A_L04_DERIVABILITE } from '../courses/premiere/maths_1ere_a_derivabilite';
import { MATHS_1ERE_A_L06_STATISTIQUES } from '../courses/premiere/maths_1ere_a_statistiques';
import { MATHS_1ERE_A_L07_SYSTEMES_INEQUATIONS } from '../courses/premiere/maths_1ere_a_systemes_inequations';
import { MATHS_1ERE_C_L01_EQUATIONS_INEQUATIONS_SECOND_DEGRE } from '../courses/premiere/maths_1ere_c_equations_inequations_second_degre';
import { MATHS_1ERE_C_L02_BARYCENTRE } from '../courses/premiere/maths_1ere_c_barycentre';
import { MATHS_1ERE_C_L03_GENERALITES_FONCTIONS } from '../courses/premiere/maths_1ere_c_generalites_fonctions';
import { MATHS_1ERE_C_L04_DENOMBREMENT } from '../courses/premiere/maths_1ere_c_denombrement';
import { MATHS_1ERE_C_L05_LIMITES_CONTINUITE } from '../courses/premiere/maths_1ere_c_limites_continuite';
import { MATHS_1ERE_C_L06_ANGLES_ORIENTES } from '../courses/premiere/maths_1ere_c_angles_orientes';
import { MATHS_1ERE_C_L07_EXTENSION_LIMITE } from '../courses/premiere/maths_1ere_c_extension_limite';
import { MATHS_1ERE_C_L08_COMPOSEES_TRANSFORMATIONS } from '../courses/premiere/maths_1ere_c_composees_transformations';
import { MATHS_1ERE_C_L09_DERIVATION } from '../courses/premiere/maths_1ere_c_derivation';
import { MATHS_1ERE_C_L10_PROBABILITE } from '../courses/premiere/maths_1ere_c_probabilite';
import { MATHS_1ERE_C_L11_ETUDE_REPRESENTATION_FONCTION } from '../courses/premiere/maths_1ere_c_etude_representation_fonction';
import { MATHS_1ERE_C_L12_ORTHOGONALITE_ESPACE } from '../courses/premiere/maths_1ere_c_orthogonalite_espace';
import { MATHS_1ERE_C_L13_SYSTEMES_EQUATIONS_LINEAIRES } from '../courses/premiere/maths_1ere_c_systemes_equations_lineaires';
import { MATHS_1ERE_C_L15_SUITES_NUMERIQUES } from '../courses/premiere/maths_1ere_c_suites_numeriques';
import { MATHS_1ERE_C_L16_VECTEURS_ESPACE } from '../courses/premiere/maths_1ere_c_vecteurs_espace';
import { MATHS_1ERE_C_L17_STATISTIQUES } from '../courses/premiere/maths_1ere_c_statistiques';
import { MATHS_1ERE_D_L01_EQUATIONS_INEQUATIONS_SECOND_DEGRE } from '../courses/premiere/maths_1ere_d_equations_inequations_second_degre';
import { MATHS_1ERE_D_L02_DENOMBREMENT } from '../courses/premiere/maths_1ere_d_denombrement';
import { MATHS_1ERE_D_L03_GENERALITES_FONCTIONS } from '../courses/premiere/maths_1ere_d_generalites_fonctions';
import { MATHS_1ERE_D_L04_LIMITES_CONTINUITE } from '../courses/premiere/maths_1ere_d_limites_continuite';
import { MATHS_1ERE_D_L05_PROBABILITE } from '../courses/premiere/maths_1ere_d_probabilite';
import { MATHS_1ERE_D_L06_DERIVATION } from '../courses/premiere/maths_1ere_d_derivation';
import { MATHS_1ERE_D_L07_BARYCENTRE } from '../courses/premiere/maths_1ere_d_barycentre';
import { MATHS_1ERE_D_L08_EXTENSION_LIMITE } from '../courses/premiere/maths_1ere_d_extension_limite';
import { MATHS_1ERE_D_L09_ETUDE_REPRESENTATION_FONCTION } from '../courses/premiere/maths_1ere_d_etude_representation_fonction';
import { MATHS_1ERE_D_L10_ANGLES_ORIENTES } from '../courses/premiere/maths_1ere_d_angles_orientes';
import { MATHS_1ERE_D_L11_SYSTEMES_EQUATIONS_LINEAIRES } from '../courses/premiere/maths_1ere_d_systemes_equations_lineaires';
import { MATHS_1ERE_D_L12_SUITES_NUMERIQUES } from '../courses/premiere/maths_1ere_d_suites_numeriques';
import { MATHS_1ERE_D_L13_ORTHOGONALITE_ESPACE } from '../courses/premiere/maths_1ere_d_orthogonalite_espace';
import { MATHS_1ERE_D_L15_STATISTIQUES } from '../courses/premiere/maths_1ere_d_statistiques';

export const CHAPTERS: CurriculumChapter[] = [
  MATHS_1ERE_A_L01_EQUATIONS_INEQUATIONS,
  MATHS_1ERE_A_L02_DENOMBREMENT,
  MATHS_1ERE_A_L03_GENERALITES_FONCTIONS,
  MATHS_1ERE_A_L04_DERIVABILITE,
  MATHS_1ERE_A_L06_STATISTIQUES,
  MATHS_1ERE_A_L07_SYSTEMES_INEQUATIONS,
  MATHS_1ERE_C_L01_EQUATIONS_INEQUATIONS_SECOND_DEGRE,
  MATHS_1ERE_C_L02_BARYCENTRE,
  MATHS_1ERE_C_L03_GENERALITES_FONCTIONS,
  MATHS_1ERE_C_L04_DENOMBREMENT,
  MATHS_1ERE_C_L05_LIMITES_CONTINUITE,
  MATHS_1ERE_C_L06_ANGLES_ORIENTES,
  MATHS_1ERE_C_L07_EXTENSION_LIMITE,
  MATHS_1ERE_C_L08_COMPOSEES_TRANSFORMATIONS,
  MATHS_1ERE_C_L09_DERIVATION,
  MATHS_1ERE_C_L10_PROBABILITE,
  MATHS_1ERE_C_L11_ETUDE_REPRESENTATION_FONCTION,
  MATHS_1ERE_C_L12_ORTHOGONALITE_ESPACE,
  MATHS_1ERE_C_L13_SYSTEMES_EQUATIONS_LINEAIRES,
  MATHS_1ERE_C_L15_SUITES_NUMERIQUES,
  MATHS_1ERE_C_L16_VECTEURS_ESPACE,
  MATHS_1ERE_C_L17_STATISTIQUES,
  MATHS_1ERE_D_L01_EQUATIONS_INEQUATIONS_SECOND_DEGRE,
  MATHS_1ERE_D_L02_DENOMBREMENT,
  MATHS_1ERE_D_L03_GENERALITES_FONCTIONS,
  MATHS_1ERE_D_L04_LIMITES_CONTINUITE,
  MATHS_1ERE_D_L05_PROBABILITE,
  MATHS_1ERE_D_L06_DERIVATION,
  MATHS_1ERE_D_L07_BARYCENTRE,
  MATHS_1ERE_D_L08_EXTENSION_LIMITE,
  MATHS_1ERE_D_L09_ETUDE_REPRESENTATION_FONCTION,
  MATHS_1ERE_D_L10_ANGLES_ORIENTES,
  MATHS_1ERE_D_L11_SYSTEMES_EQUATIONS_LINEAIRES,
  MATHS_1ERE_D_L12_SUITES_NUMERIQUES,
  MATHS_1ERE_D_L13_ORTHOGONALITE_ESPACE,
  MATHS_1ERE_D_L15_STATISTIQUES,
];
