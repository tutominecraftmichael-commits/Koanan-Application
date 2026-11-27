/**
 * Paquet de cours : premiere_physique_chimie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/premiere/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { CHIMIE_1ERE_CD_L01_ALCANES } from '../courses/premiere/chimie_1ere_cd_alcanes';
import { PHYSIQUE_1ERE_CD_L01_TRAVAIL_PUISSANCE } from '../courses/premiere/physique_1ere_cd_travail_puissance';
import { CHIMIE_1ERE_CD_L02_ALCENES_ALCYNES } from '../courses/premiere/chimie_1ere_cd_alcenes_alcynes';
import { PHYSIQUE_1ERE_CD_L02_ENERGIE_POTENTIELLE_ELECTROSTATIQUE } from '../courses/premiere/physique_1ere_cd_energie_potentielle_electrostatique';
import { PHYSIQUE_1ERE_CD_L03_PUISSANCE_ENERGIE_ELECTRIQUE } from '../courses/premiere/physique_1ere_cd_puissance_energie_electrique';
import { CHIMIE_1ERE_CD_L04_PETROLE_GAZ_NATURELS } from '../courses/premiere/chimie_1ere_cd_petrole_gaz_naturels';
import { PHYSIQUE_1ERE_CD_L04_CONDENSATEUR } from '../courses/premiere/physique_1ere_cd_condensateur';
import { CHIMIE_1ERE_CD_L05_COMPOSES_OXYGENES } from '../courses/premiere/chimie_1ere_cd_composes_oxygenes';
import { PHYSIQUE_1ERE_CD_L05_LENTILLES_MINCES } from '../courses/premiere/physique_1ere_cd_lentilles_minces';
import { CHIMIE_1ERE_CD_L06_ETHANOL } from '../courses/premiere/chimie_1ere_cd_ethanol';
import { CHIMIE_1ERE_CD_L07_ESTERIFICATION_HYDROLYSE } from '../courses/premiere/chimie_1ere_cd_esterification_hydrolyse';
import { PHYSIQUE_1ERE_CD_L07_ENERGIE_CINETIQUE } from '../courses/premiere/physique_1ere_cd_energie_cinetique';
import { CHIMIE_1ERE_CD_L08_CLASSIFICATION_QUANTITATIVE } from '../courses/premiere/chimie_1ere_cd_classification_quantitative';
import { PHYSIQUE_1ERE_CD_L08_ENERGIE_POTENTIELLE_PESANTEUR } from '../courses/premiere/physique_1ere_cd_energie_potentielle_pesanteur';
import { CHIMIE_1ERE_CD_L09_COUPLES_DOSAGE } from '../courses/premiere/chimie_1ere_cd_couples_dosage';
import { PHYSIQUE_1ERE_CD_L09_ENERGIE_MECANIQUE } from '../courses/premiere/physique_1ere_cd_energie_mecanique';
import { CHIMIE_1ERE_CD_L10_OXYDOREDUCTION_VOIE_SECHE } from '../courses/premiere/chimie_1ere_cd_oxydoreduction_voie_seche';
import { PHYSIQUE_1ERE_CD_L10_CHAMP_ELECTROSTATIQUE } from '../courses/premiere/physique_1ere_cd_champ_electrostatique';
import { CHIMIE_1ERE_CD_L11_ELECTROLYSE } from '../courses/premiere/chimie_1ere_cd_electrolyse';
import { PHYSIQUE_1ERE_CD_L11_INTRODUCTION_OPTIQUE_GEOMETRIQUE } from '../courses/premiere/physique_1ere_cd_introduction_optique_geometrique';
import { PHYSIQUE_1ERE_CD_L12_AMPLIFICATEUR_OPERATIONNEL } from '../courses/premiere/physique_1ere_cd_amplificateur_operationnel';
import { PHYSIQUE_1ERE_CD_L13_REFLEXION_REFRACTION } from '../courses/premiere/physique_1ere_cd_reflexion_refraction';
import { CHIMIE_1ERE_C_L15_CORROSION } from '../courses/premiere/chimie_1ere_c_corrosion';

export const CHAPTERS: CurriculumChapter[] = [
  CHIMIE_1ERE_CD_L01_ALCANES,
  PHYSIQUE_1ERE_CD_L01_TRAVAIL_PUISSANCE,
  CHIMIE_1ERE_CD_L02_ALCENES_ALCYNES,
  PHYSIQUE_1ERE_CD_L02_ENERGIE_POTENTIELLE_ELECTROSTATIQUE,
  PHYSIQUE_1ERE_CD_L03_PUISSANCE_ENERGIE_ELECTRIQUE,
  CHIMIE_1ERE_CD_L04_PETROLE_GAZ_NATURELS,
  PHYSIQUE_1ERE_CD_L04_CONDENSATEUR,
  CHIMIE_1ERE_CD_L05_COMPOSES_OXYGENES,
  PHYSIQUE_1ERE_CD_L05_LENTILLES_MINCES,
  CHIMIE_1ERE_CD_L06_ETHANOL,
  CHIMIE_1ERE_CD_L07_ESTERIFICATION_HYDROLYSE,
  PHYSIQUE_1ERE_CD_L07_ENERGIE_CINETIQUE,
  CHIMIE_1ERE_CD_L08_CLASSIFICATION_QUANTITATIVE,
  PHYSIQUE_1ERE_CD_L08_ENERGIE_POTENTIELLE_PESANTEUR,
  CHIMIE_1ERE_CD_L09_COUPLES_DOSAGE,
  PHYSIQUE_1ERE_CD_L09_ENERGIE_MECANIQUE,
  CHIMIE_1ERE_CD_L10_OXYDOREDUCTION_VOIE_SECHE,
  PHYSIQUE_1ERE_CD_L10_CHAMP_ELECTROSTATIQUE,
  CHIMIE_1ERE_CD_L11_ELECTROLYSE,
  PHYSIQUE_1ERE_CD_L11_INTRODUCTION_OPTIQUE_GEOMETRIQUE,
  PHYSIQUE_1ERE_CD_L12_AMPLIFICATEUR_OPERATIONNEL,
  PHYSIQUE_1ERE_CD_L13_REFLEXION_REFRACTION,
  CHIMIE_1ERE_C_L15_CORROSION,
];
