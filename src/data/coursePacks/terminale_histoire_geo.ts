/**
 * Paquet de cours : terminale_histoire_geo. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { GEO_TLE_L01_FONDEMENTS_ECONOMIE_CI } from '../courses/terminale/geo_tle_fondements_economie_ci';
import { GEO_TLE_L02_SECTEURS_ACTIVITES_CI } from '../courses/terminale/geo_tle_secteurs_activites_ci';
import { GEO_TLE_L03_PROBLEMES_DEVELOPPEMENT_CI } from '../courses/terminale/geo_tle_problemes_developpement_ci';
import { GEO_TLE_T2_L01_FONDEMENTS_COREE_DU_SUD } from '../courses/terminale/geo_tle_fondements_coree_du_sud';
import { GEO_TLE_T3_L01_CEDEAO } from '../courses/terminale/geo_tle_cedeao';
import { GEO_TLE_T3_L02_RELATIONS_UE_ACP } from '../courses/terminale/geo_tle_relations_ue_acp';
import { HIST_TLE_T1_L01_ONU } from '../courses/terminale/hist_tle_onu';
import { HIST_TLE_T1_L02_ERE_BIPOLARISATION } from '../courses/terminale/hist_tle_bipolarisation';
import { HIST_TLE_T1_L03_MONDE_MULTIPOLAIRE } from '../courses/terminale/hist_tle_monde_multipolaire';
import { HIST_TLE_T2_L01_MONTEE_NATIONALISMES_AFRIQUE } from '../courses/terminale/hist_tle_montee_nationalismes_afrique';
import { HIST_TLE_T2_L02_ACCESSION_CI_INDEPENDANCE } from '../courses/terminale/hist_tle_accession_ci_independance';
import { HIST_TLE_T2_L03_ACCESSION_ALGERIE_INDEPENDANCE } from '../courses/terminale/hist_tle_accession_algerie_independance';
import { HIST_TLE_T2_L04_UNION_AFRICAINE } from '../courses/terminale/hist_tle_union_africaine';
import { HIST_TLE_T3_L01_MONDE_OCCIDENTAL } from '../courses/terminale/hist_tle_monde_occidental';
import { HIST_TLE_T3_L02_MUTATIONS_CIVILISATION_NEGRO_AFRICAINE } from '../courses/terminale/hist_tle_mutations_civilisation_negro_africaine';

export const CHAPTERS: CurriculumChapter[] = [
  GEO_TLE_L01_FONDEMENTS_ECONOMIE_CI,
  GEO_TLE_L02_SECTEURS_ACTIVITES_CI,
  GEO_TLE_L03_PROBLEMES_DEVELOPPEMENT_CI,
  GEO_TLE_T2_L01_FONDEMENTS_COREE_DU_SUD,
  GEO_TLE_T3_L01_CEDEAO,
  GEO_TLE_T3_L02_RELATIONS_UE_ACP,
  HIST_TLE_T1_L01_ONU,
  HIST_TLE_T1_L02_ERE_BIPOLARISATION,
  HIST_TLE_T1_L03_MONDE_MULTIPOLAIRE,
  HIST_TLE_T2_L01_MONTEE_NATIONALISMES_AFRIQUE,
  HIST_TLE_T2_L02_ACCESSION_CI_INDEPENDANCE,
  HIST_TLE_T2_L03_ACCESSION_ALGERIE_INDEPENDANCE,
  HIST_TLE_T2_L04_UNION_AFRICAINE,
  HIST_TLE_T3_L01_MONDE_OCCIDENTAL,
  HIST_TLE_T3_L02_MUTATIONS_CIVILISATION_NEGRO_AFRICAINE,
];
