/**
 * Paquet de cours : premiere_physique_chimie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { CHIMIE_1RE_CD_L01_PETROLE_GAZ_NATURELS } from '../courses/premiere/chimie_1re_cd_01_petrole_gaz_naturels';
import { CHIMIE_1RE_CD_L02_ALCANES } from '../courses/premiere/chimie_1re_cd_02_alcanes';
import { CHIMIE_1RE_CD_L03_ALCENES_ALCYNES } from '../courses/premiere/chimie_1re_cd_03_alcenes_alcynes';
import { CHIMIE_1RE_CD_L04_COMPOSES_OXYGENES } from '../courses/premiere/chimie_1re_cd_04_composes_oxygenes';
import { CHIMIE_1RE_CD_L05_ETHANOL } from '../courses/premiere/chimie_1re_cd_05_ethanol';
import { CHIMIE_1RE_CD_L06_ESTERIFICATION_HYDROLYSE } from '../courses/premiere/chimie_1re_cd_06_esterification_hydrolyse';
import { CHIMIE_1RE_CD_L07_OXYDOREDUCTION_VOIE_SECHE } from '../courses/premiere/chimie_1re_cd_07_oxydoreduction_voie_seche';
import { CHIMIE_1RE_CD_L08_COUPLES_REDOX_DOSAGE } from '../courses/premiere/chimie_1re_cd_08_couples_redox_dosage';
import { CHIMIE_1RE_CD_L09_CLASSIFICATION_QUANTITATIVE_COUPLES } from '../courses/premiere/chimie_1re_cd_09_classification_quantitative_couples';
import { CHIMIE_1RE_CD_L10_ELECTROLYSE } from '../courses/premiere/chimie_1re_cd_10_electrolyse';
import { CHIMIE_1RE_CD_L11_CORROSION_PROTECTION_METAUX } from '../courses/premiere/chimie_1re_cd_11_corrosion_protection_metaux';
import { PHYSIQUE_1RE_CD_L01_TRAVAIL_PUISSANCE } from '../courses/premiere/physique_1re_cd_01_travail_puissance';
import { PHYSIQUE_1RE_CD_L02_AMPLIFICATEUR_OPERATIONNEL } from '../courses/premiere/physique_1re_cd_02_amplificateur_operationnel';
import { PHYSIQUE_1RE_CD_L03_REFLEXION_REFRACTION_LUMIERE } from '../courses/premiere/physique_1re_cd_03_reflexion_refraction_lumiere';
import { PHYSIQUE_1RE_CD_L04_ENERGIE_CINETIQUE } from '../courses/premiere/physique_1re_cd_04_energie_cinetique';
import { PHYSIQUE_1RE_CD_L05_PUISSANCE_ENERGIE_ELECTRIQUE } from '../courses/premiere/physique_1re_cd_05_puissance_energie_electrique';
import { PHYSIQUE_1RE_CD_L06_LENTILLES_MINCES } from '../courses/premiere/physique_1re_cd_06_lentilles_minces';
import { PHYSIQUE_1RE_CD_P4_ENERGIE_POTENTIELLE } from '../courses/premiere/physique_1re_cd_p4_energie_potentielle';
import { PHYSIQUE_1RE_CD_P5_ENERGIE_MECANIQUE } from '../courses/premiere/physique_1re_cd_p5_energie_mecanique';
import { PHYSIQUE_1RE_CD_P6_CHAMP_ELECTROSTATIQUE } from '../courses/premiere/physique_1re_cd_p6_champ_electrostatique';
import { PHYSIQUE_1RE_CD_P11_INTRODUCTION_OPTIQUE_GEOMETRIQUE } from '../courses/premiere/physique_1re_cd_p11_introduction_optique_geometrique';

export const CHAPTERS: CurriculumChapter[] = [
  CHIMIE_1RE_CD_L01_PETROLE_GAZ_NATURELS,
  CHIMIE_1RE_CD_L02_ALCANES,
  CHIMIE_1RE_CD_L03_ALCENES_ALCYNES,
  CHIMIE_1RE_CD_L04_COMPOSES_OXYGENES,
  CHIMIE_1RE_CD_L05_ETHANOL,
  CHIMIE_1RE_CD_L06_ESTERIFICATION_HYDROLYSE,
  CHIMIE_1RE_CD_L07_OXYDOREDUCTION_VOIE_SECHE,
  CHIMIE_1RE_CD_L08_COUPLES_REDOX_DOSAGE,
  CHIMIE_1RE_CD_L09_CLASSIFICATION_QUANTITATIVE_COUPLES,
  CHIMIE_1RE_CD_L10_ELECTROLYSE,
  CHIMIE_1RE_CD_L11_CORROSION_PROTECTION_METAUX,
  PHYSIQUE_1RE_CD_L01_TRAVAIL_PUISSANCE,
  PHYSIQUE_1RE_CD_L02_AMPLIFICATEUR_OPERATIONNEL,
  PHYSIQUE_1RE_CD_L03_REFLEXION_REFRACTION_LUMIERE,
  PHYSIQUE_1RE_CD_L04_ENERGIE_CINETIQUE,
  PHYSIQUE_1RE_CD_L05_PUISSANCE_ENERGIE_ELECTRIQUE,
  PHYSIQUE_1RE_CD_L06_LENTILLES_MINCES,
  PHYSIQUE_1RE_CD_P4_ENERGIE_POTENTIELLE,
  PHYSIQUE_1RE_CD_P5_ENERGIE_MECANIQUE,
  PHYSIQUE_1RE_CD_P6_CHAMP_ELECTROSTATIQUE,
  PHYSIQUE_1RE_CD_P11_INTRODUCTION_OPTIQUE_GEOMETRIQUE,
];
