/**
 * Paquet de cours : terminale_physique_chimie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { CHIMIE_TLE_CD_L01_ALCOOLS } from '../courses/terminale/chimie_tle_cd_01_alcools';
import { CHIMIE_TLE_CD_L02_COMPOSES_CARBONYLES } from '../courses/terminale/chimie_tle_cd_02_composes_carbonyles';
import { CHIMIE_TLE_CD_L03_ACIDES_CARBOXYLIQUES_ET_DERIVES } from '../courses/terminale/chimie_tle_cd_03_acides_carboxyliques_et_derives';
import { CHIMIE_TLE_CD_L04_AMINES } from '../courses/terminale/chimie_tle_cd_04_amines';
import { CHIMIE_TLE_CD_L05_SAVONS } from '../courses/terminale/chimie_tle_cd_05_savons';
import { CHIMIE_TLE_CD_L06_SOLUTIONS_AQUEUSES_PH } from '../courses/terminale/chimie_tle_cd_06_solutions_aqueuses_ph';
import { CHIMIE_TLE_CD_L07_ACIDE_FORT_BASE_FORTE } from '../courses/terminale/chimie_tle_cd_acide_fort_base_forte';
import { CHIMIE_TLE_CD_L08_ACIDES_ALPHA_AMINES } from '../courses/terminale/chimie_tle_cd_08_acides_alpha_amines';
import { CHIMIE_TLE_CD_L09_ACIDES_FAIBLES_BASES_FAIBLES } from '../courses/terminale/chimie_tle_cd_09_acides_faibles_bases_faibles';
import { CHIMIE_TLE_CD_L10_COUPLE_ACIDE_BASE_CLASSIFICATION } from '../courses/terminale/chimie_tle_cd_10_couple_acide_base_classification';
import { CHIMIE_TLE_CD_L11_DOSAGES_SOLUTIONS_TAMPONS } from '../courses/terminale/chimie_tle_cd_11_dosages_solutions_tampons';
import { PHYSIQUE_TLE_CD_L01_CINEMATIQUE_DU_POINT } from '../courses/terminale/physique_tle_cd_01_cinematique_du_point';
import { PHYSIQUE_TLE_CD_L02_MOUVEMENT_CENTRE_INERTIE } from '../courses/terminale/physique_tle_cd_02_mouvement_centre_inertie';
import { PHYSIQUE_TLE_CD_L03_CHAMPS_UNIFORMES_G_ET_E } from '../courses/terminale/physique_tle_cd_03_champs_uniformes_g_et_e';
import { PHYSIQUE_TLE_CD_L04_OSCILLATIONS_MECANIQUES } from '../courses/terminale/physique_tle_cd_04_oscillations_mecaniques';
import { PHYSIQUE_TLE_CD_L05_CHAMP_MAGNETIQUE } from '../courses/terminale/physique_tle_cd_05_champ_magnetique';
import { PHYSIQUE_TLE_CD_L06_LOI_DE_LAPLACE } from '../courses/terminale/physique_tle_cd_06_loi_de_laplace';
import { PHYSIQUE_TLE_CD_L07_INDUCTION_ELECTROMAGNETIQUE } from '../courses/terminale/physique_tle_cd_07_induction_electromagnetique';
import { PHYSIQUE_TLE_CD_L08_AUTO_INDUCTION } from '../courses/terminale/physique_tle_cd_08_auto_induction';
import { PHYSIQUE_TLE_CD_L09_MONTAGES_DERINATEUR_INTEGRATEUR } from '../courses/terminale/physique_tle_cd_09_montages_derinateur_integrateur';
import { PHYSIQUE_TLE_CD_L10_CIRCUIT_RLC_FORCE } from '../courses/terminale/physique_tle_cd_10_circuit_rlc_force';
import { PHYSIQUE_TLE_CD_L11_RESONANCE_INTENSITE } from '../courses/terminale/physique_tle_cd_11_resonance_intensite';
import { PHYSIQUE_TLE_CD_L12_PUISSANCE_REGIME_SINUSOIDAL } from '../courses/terminale/physique_tle_cd_12_puissance_regime_sinusoidal';
import { PHYSIQUE_TLE_CD_L13_REACTIONS_NUCLEAIRES_SPONTANEES } from '../courses/terminale/physique_tle_cd_13_reactions_nucleaires_spontanees';
import { PHYSIQUE_TLE_CD_L14_MODELE_CORPUSCULAIRE_LUMIERE } from '../courses/terminale/physique_tle_cd_14_modele_corpusculaire_lumiere';
import { PHYSIQUE_TLE_CD_L15_MODELE_ONDULATOIRE_LUMIERE } from '../courses/terminale/physique_tle_cd_15_modele_ondulatoire_lumiere';
import { PHYSIQUE_TLE_CD_L16_REACTIONS_NUCLEAIRES_PROVOQUEES } from '../courses/terminale/physique_tle_cd_16_reactions_nucleaires_provoquees';

export const CHAPTERS: CurriculumChapter[] = [
  CHIMIE_TLE_CD_L01_ALCOOLS,
  CHIMIE_TLE_CD_L02_COMPOSES_CARBONYLES,
  CHIMIE_TLE_CD_L03_ACIDES_CARBOXYLIQUES_ET_DERIVES,
  CHIMIE_TLE_CD_L04_AMINES,
  CHIMIE_TLE_CD_L05_SAVONS,
  CHIMIE_TLE_CD_L06_SOLUTIONS_AQUEUSES_PH,
  CHIMIE_TLE_CD_L07_ACIDE_FORT_BASE_FORTE,
  CHIMIE_TLE_CD_L08_ACIDES_ALPHA_AMINES,
  CHIMIE_TLE_CD_L09_ACIDES_FAIBLES_BASES_FAIBLES,
  CHIMIE_TLE_CD_L10_COUPLE_ACIDE_BASE_CLASSIFICATION,
  CHIMIE_TLE_CD_L11_DOSAGES_SOLUTIONS_TAMPONS,
  PHYSIQUE_TLE_CD_L01_CINEMATIQUE_DU_POINT,
  PHYSIQUE_TLE_CD_L02_MOUVEMENT_CENTRE_INERTIE,
  PHYSIQUE_TLE_CD_L03_CHAMPS_UNIFORMES_G_ET_E,
  PHYSIQUE_TLE_CD_L04_OSCILLATIONS_MECANIQUES,
  PHYSIQUE_TLE_CD_L05_CHAMP_MAGNETIQUE,
  PHYSIQUE_TLE_CD_L06_LOI_DE_LAPLACE,
  PHYSIQUE_TLE_CD_L07_INDUCTION_ELECTROMAGNETIQUE,
  PHYSIQUE_TLE_CD_L08_AUTO_INDUCTION,
  PHYSIQUE_TLE_CD_L09_MONTAGES_DERINATEUR_INTEGRATEUR,
  PHYSIQUE_TLE_CD_L10_CIRCUIT_RLC_FORCE,
  PHYSIQUE_TLE_CD_L11_RESONANCE_INTENSITE,
  PHYSIQUE_TLE_CD_L12_PUISSANCE_REGIME_SINUSOIDAL,
  PHYSIQUE_TLE_CD_L13_REACTIONS_NUCLEAIRES_SPONTANEES,
  PHYSIQUE_TLE_CD_L14_MODELE_CORPUSCULAIRE_LUMIERE,
  PHYSIQUE_TLE_CD_L15_MODELE_ONDULATOIRE_LUMIERE,
  PHYSIQUE_TLE_CD_L16_REACTIONS_NUCLEAIRES_PROVOQUEES,
];
