/**
 * Paquet de cours : terminale_physique_chimie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/terminale/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { CHIMIE_TLE_CD_L01_ALCOOLS } from '../courses/terminale/chimie_tle_cd_alcools';
import { PHYSIQUE_TLE_CD_L01_CINEMATIQUE } from '../courses/terminale/physique_tle_cd_cinematique';
import { CHIMIE_TLE_CD_L02_CARBONYLES } from '../courses/terminale/chimie_tle_cd_carbonyles';
import { PHYSIQUE_TLE_CD_L02_CENTRE_INERTIE } from '../courses/terminale/physique_tle_cd_centre_inertie';
import { CHIMIE_TLE_CD_L03_AMINES } from '../courses/terminale/chimie_tle_cd_amines';
import { PHYSIQUE_TLE_C_L03_INTERACTION_GRAVITATIONNELLE } from '../courses/terminale/physique_tle_c_interaction_gravitationnelle';
import { CHIMIE_TLE_CD_L04_ACIDES_CARBOXYLIQUES } from '../courses/terminale/chimie_tle_cd_acides_carboxyliques';
import { PHYSIQUE_TLE_CD_L04_CHAMPS_G_E } from '../courses/terminale/physique_tle_cd_champs_g_e';
import { CHIMIE_TLE_CD_L05_SAVON } from '../courses/terminale/chimie_tle_cd_savon';
import { PHYSIQUE_TLE_CD_L05_OSCILLATIONS } from '../courses/terminale/physique_tle_cd_oscillations';
import { CHIMIE_TLE_CD_L06_PH } from '../courses/terminale/chimie_tle_cd_ph';
import { PHYSIQUE_TLE_CD_L06_CHAMP_MAGNETIQUE } from '../courses/terminale/physique_tle_cd_champ_magnetique';
import { CHIMIE_TLE_CD_L07_ACIDE_FORT_BASE_FORTE } from '../courses/terminale/chimie_tle_cd_acide_fort_base_forte';
import { CHIMIE_TLE_CD_L08_ACIDE_FAIBLE_BASE_FAIBLE } from '../courses/terminale/chimie_tle_cd_acide_faible_base_faible';
import { PHYSIQUE_TLE_CD_L08_LOI_LAPLACE } from '../courses/terminale/physique_tle_cd_loi_laplace';
import { CHIMIE_TLE_CD_L09_COUPLE_ACIDE_BASE } from '../courses/terminale/chimie_tle_cd_couple_acide_base';
import { PHYSIQUE_TLE_CD_L09_INDUCTION } from '../courses/terminale/physique_tle_cd_induction';
import { CHIMIE_TLE_CD_L10_REACTIONS_ACIDOBASIQUES } from '../courses/terminale/chimie_tle_cd_reactions_acidobasiques';
import { PHYSIQUE_TLE_CD_L10_AUTO_INDUCTION } from '../courses/terminale/physique_tle_cd_auto_induction';
import { CHIMIE_TLE_CD_L11_DOSAGE } from '../courses/terminale/chimie_tle_cd_dosage';
import { PHYSIQUE_TLE_CD_L11_MONTAGES } from '../courses/terminale/physique_tle_cd_montages';
import { CHIMIE_TLE_CD_L12_ACIDES_ALPHA_AMINES } from '../courses/terminale/chimie_tle_cd_acides_alpha_amines';
import { PHYSIQUE_TLE_CD_L13_RLC } from '../courses/terminale/physique_tle_cd_rlc';
import { PHYSIQUE_TLE_CD_L14_RESONANCE } from '../courses/terminale/physique_tle_cd_resonance';
import { PHYSIQUE_TLE_CD_L15_PUISSANCE } from '../courses/terminale/physique_tle_cd_puissance';
import { PHYSIQUE_TLE_CD_L16_MODELE_ONDULATOIRE } from '../courses/terminale/physique_tle_cd_modele_ondulatoire';
import { PHYSIQUE_TLE_CD_L17_MODELE_CORPUSCULAIRE } from '../courses/terminale/physique_tle_cd_modele_corpusculaire';
import { PHYSIQUE_TLE_CD_L18_NUCLEAIRES_SPONTANEES } from '../courses/terminale/physique_tle_cd_nucleaires_spontanees';
import { PHYSIQUE_TLE_CD_L19_NUCLEAIRES_PROVOQUEES } from '../courses/terminale/physique_tle_cd_nucleaires_provoquees';

export const CHAPTERS: CurriculumChapter[] = [
  CHIMIE_TLE_CD_L01_ALCOOLS,
  PHYSIQUE_TLE_CD_L01_CINEMATIQUE,
  CHIMIE_TLE_CD_L02_CARBONYLES,
  PHYSIQUE_TLE_CD_L02_CENTRE_INERTIE,
  CHIMIE_TLE_CD_L03_AMINES,
  PHYSIQUE_TLE_C_L03_INTERACTION_GRAVITATIONNELLE,
  CHIMIE_TLE_CD_L04_ACIDES_CARBOXYLIQUES,
  PHYSIQUE_TLE_CD_L04_CHAMPS_G_E,
  CHIMIE_TLE_CD_L05_SAVON,
  PHYSIQUE_TLE_CD_L05_OSCILLATIONS,
  CHIMIE_TLE_CD_L06_PH,
  PHYSIQUE_TLE_CD_L06_CHAMP_MAGNETIQUE,
  CHIMIE_TLE_CD_L07_ACIDE_FORT_BASE_FORTE,
  CHIMIE_TLE_CD_L08_ACIDE_FAIBLE_BASE_FAIBLE,
  PHYSIQUE_TLE_CD_L08_LOI_LAPLACE,
  CHIMIE_TLE_CD_L09_COUPLE_ACIDE_BASE,
  PHYSIQUE_TLE_CD_L09_INDUCTION,
  CHIMIE_TLE_CD_L10_REACTIONS_ACIDOBASIQUES,
  PHYSIQUE_TLE_CD_L10_AUTO_INDUCTION,
  CHIMIE_TLE_CD_L11_DOSAGE,
  PHYSIQUE_TLE_CD_L11_MONTAGES,
  CHIMIE_TLE_CD_L12_ACIDES_ALPHA_AMINES,
  PHYSIQUE_TLE_CD_L13_RLC,
  PHYSIQUE_TLE_CD_L14_RESONANCE,
  PHYSIQUE_TLE_CD_L15_PUISSANCE,
  PHYSIQUE_TLE_CD_L16_MODELE_ONDULATOIRE,
  PHYSIQUE_TLE_CD_L17_MODELE_CORPUSCULAIRE,
  PHYSIQUE_TLE_CD_L18_NUCLEAIRES_SPONTANEES,
  PHYSIQUE_TLE_CD_L19_NUCLEAIRES_PROVOQUEES,
];
