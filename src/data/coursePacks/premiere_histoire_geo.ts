/**
 * Paquet de cours : premiere_histoire_geo. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/premiere/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { GEO_1ERE_T1_L01_DYNAMISME_DEMOGRAPHIQUE_CI } from '../courses/premiere/geo_1ere_dynamisme_demographique_ci';
import { HIST_1ERE_T1_L01_ESSOR_CAPITALISME } from '../courses/premiere/hist_1ere_essor_capitalisme';
import { GEO_1ERE_T1_L02_CROISSANCE_DEMOGRAPHIQUE_MONDIALE } from '../courses/premiere/geo_1ere_croissance_demographique_mondiale';
import { HIST_1ERE_T1_L02_REVOLUTIONS_INDUSTRIELLES } from '../courses/premiere/hist_1ere_revolutions_industrielles';
import { GEO_1ERE_T2_L01_URBANISATION_PAYS_EN_DEVELOPPEMENT } from '../courses/premiere/geo_1ere_urbanisation_pays_en_developpement';
import { HIST_1ERE_T2_L01_IMPERIALISME_CONGRES_BERLIN } from '../courses/premiere/hist_1ere_imperialisme_congres_berlin';
import { GEO_1ERE_T2_L02_URBANISATION_PAYS_DEVELOPPES } from '../courses/premiere/geo_1ere_urbanisation_pays_developpes';
import { HIST_1ERE_T2_L02_RESISTANCES_CONQUETES_AFRIQUE } from '../courses/premiere/hist_1ere_resistances_conquetes_afrique';
import { GEO_1ERE_T3_L01_ORGANISATION_ADMINISTRATIVE_CI } from '../courses/premiere/geo_1ere_organisation_administrative_ci';
import { HIST_1ERE_T2_L03_COLONISATION_RESISTANCES_CI } from '../courses/premiere/hist_1ere_colonisation_resistances_ci';
import { GEO_1ERE_T3_L02_AMENAGEMENT_TERRITOIRE_IVOIRIEN } from '../courses/premiere/geo_1ere_amenagement_territoire_ivoirien';
import { HIST_1ERE_T3_L01_PREMIERE_GUERRE_MONDIALE } from '../courses/premiere/hist_1ere_premiere_guerre_mondiale';
import { GEO_1ERE_T4_L01_FACTEURS_MONDIALISATION } from '../courses/premiere/geo_1ere_facteurs_mondialisation';
import { HIST_1ERE_T3_L02_DEUXIEME_GUERRE_MONDIALE } from '../courses/premiere/hist_1ere_deuxieme_guerre_mondiale';
import { GEO_1ERE_T4_L02_CONSEQUENCES_MONDIALISATION } from '../courses/premiere/geo_1ere_consequences_mondialisation';
import { HIST_1ERE_T3_L03_VIOLENCES_MASSE_GENOCIDES } from '../courses/premiere/hist_1ere_violences_masse_genocides';

export const CHAPTERS: CurriculumChapter[] = [
  GEO_1ERE_T1_L01_DYNAMISME_DEMOGRAPHIQUE_CI,
  HIST_1ERE_T1_L01_ESSOR_CAPITALISME,
  GEO_1ERE_T1_L02_CROISSANCE_DEMOGRAPHIQUE_MONDIALE,
  HIST_1ERE_T1_L02_REVOLUTIONS_INDUSTRIELLES,
  GEO_1ERE_T2_L01_URBANISATION_PAYS_EN_DEVELOPPEMENT,
  HIST_1ERE_T2_L01_IMPERIALISME_CONGRES_BERLIN,
  GEO_1ERE_T2_L02_URBANISATION_PAYS_DEVELOPPES,
  HIST_1ERE_T2_L02_RESISTANCES_CONQUETES_AFRIQUE,
  GEO_1ERE_T3_L01_ORGANISATION_ADMINISTRATIVE_CI,
  HIST_1ERE_T2_L03_COLONISATION_RESISTANCES_CI,
  GEO_1ERE_T3_L02_AMENAGEMENT_TERRITOIRE_IVOIRIEN,
  HIST_1ERE_T3_L01_PREMIERE_GUERRE_MONDIALE,
  GEO_1ERE_T4_L01_FACTEURS_MONDIALISATION,
  HIST_1ERE_T3_L02_DEUXIEME_GUERRE_MONDIALE,
  GEO_1ERE_T4_L02_CONSEQUENCES_MONDIALISATION,
  HIST_1ERE_T3_L03_VIOLENCES_MASSE_GENOCIDES,
];
