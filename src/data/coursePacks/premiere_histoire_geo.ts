/**
 * Paquet de cours : premiere_histoire_geo. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { GEO_1RE_T1_L01_DYNAMISME_DEMOGRAPHIQUE_CI } from '../courses/premiere/geo_1re_dynamisme_demographique_ci';
import { GEO_1RE_T1_L02_CROISSANCE_DEMOGRAPHIQUE_MONDIALE } from '../courses/premiere/geo_1re_croissance_demographique_mondiale';
import { GEO_1RE_T2_L01_URBANISATION_COTE_IVOIRE } from '../courses/premiere/geo_1re_urbanisation_cote_ivoire';
import { GEO_1RE_T2_L02_URBANISATION_FRANCE } from '../courses/premiere/geo_1re_urbanisation_france';
import { GEO_1RE_T3_L01_ORGANISATION_ADMINISTRATIVE_CI } from '../courses/premiere/geo_1re_organisation_administrative_ci';
import { GEO_1RE_T3_L02_AMENAGEMENT_TERRITOIRE_CI } from '../courses/premiere/geo_1re_amenagement_territoire_ci';
import { GEO_1RE_T4_L01_FACTEURS_MONDIALISATION } from '../courses/premiere/geo_1re_facteurs_mondialisation';
import { GEO_1RE_T4_L02_CONSEQUENCES_MONDIALISATION } from '../courses/premiere/geo_1re_consequences_mondialisation';
import { HIST_1RE_T1_L01_ESSOR_CAPITALISME } from '../courses/premiere/hist_1re_essor_capitalisme';
import { HIST_1RE_T1_L02_REVOLUTIONS_INDUSTRIELLES } from '../courses/premiere/hist_1re_revolutions_industrielles';
import { HIST_1RE_T2_L01_IMPERIALISME_CONGRES_BERLIN } from '../courses/premiere/hist_1re_imperialisme_congres_berlin';
import { HIST_1RE_T2_L02_RESISTANCES_CONQUETE_CI } from '../courses/premiere/hist_1re_resistances_conquete_ci';
import { HIST_1RE_T2_L03_COLONISATION_COTE_IVOIRE } from '../courses/premiere/hist_1re_colonisation_cote_ivoire';
import { HIST_1RE_T3_L01_PREMIERE_GUERRE_MONDIALE } from '../courses/premiere/hist_1re_premiere_guerre_mondiale';
import { HIST_1RE_T3_L02_SECONDE_GUERRE_MONDIALE } from '../courses/premiere/hist_1re_seconde_guerre_mondiale';
import { HIST_1RE_T3_L03_VIOLENCES_MASSE_GENOCIDES } from '../courses/premiere/hist_1re_violences_masse_genocides';

export const CHAPTERS: CurriculumChapter[] = [
  GEO_1RE_T1_L01_DYNAMISME_DEMOGRAPHIQUE_CI,
  GEO_1RE_T1_L02_CROISSANCE_DEMOGRAPHIQUE_MONDIALE,
  GEO_1RE_T2_L01_URBANISATION_COTE_IVOIRE,
  GEO_1RE_T2_L02_URBANISATION_FRANCE,
  GEO_1RE_T3_L01_ORGANISATION_ADMINISTRATIVE_CI,
  GEO_1RE_T3_L02_AMENAGEMENT_TERRITOIRE_CI,
  GEO_1RE_T4_L01_FACTEURS_MONDIALISATION,
  GEO_1RE_T4_L02_CONSEQUENCES_MONDIALISATION,
  HIST_1RE_T1_L01_ESSOR_CAPITALISME,
  HIST_1RE_T1_L02_REVOLUTIONS_INDUSTRIELLES,
  HIST_1RE_T2_L01_IMPERIALISME_CONGRES_BERLIN,
  HIST_1RE_T2_L02_RESISTANCES_CONQUETE_CI,
  HIST_1RE_T2_L03_COLONISATION_COTE_IVOIRE,
  HIST_1RE_T3_L01_PREMIERE_GUERRE_MONDIALE,
  HIST_1RE_T3_L02_SECONDE_GUERRE_MONDIALE,
  HIST_1RE_T3_L03_VIOLENCES_MASSE_GENOCIDES,
];
