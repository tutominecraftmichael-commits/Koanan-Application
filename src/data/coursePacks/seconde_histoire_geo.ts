/**
 * Paquet de cours : seconde_histoire_geo. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { GEO_2DE_L01_OBJET_INTERET_DEMARCHE } from '../courses/seconde/geo_2de_objet_interet_demarche';
import { GEO_2DE_L02_PLANETE_TERRE } from '../courses/seconde/geo_2de_planete_terre';
import { GEO_2DE_L03_TECHNIQUES_REPRESENTATION_TERRE } from '../courses/seconde/geo_2de_techniques_representation_terre';
import { GEO_2DE_T2_L01_MILIEU_SUBEQUATORIAL } from '../courses/seconde/geo_2de_milieu_subequatorial';
import { GEO_2DE_T2_L02_MILIEU_TROPICAL } from '../courses/seconde/geo_2de_milieu_tropical';
import { GEO_2DE_T2_L03_ENVIRONNEMENT_MENACE } from '../courses/seconde/geo_2de_environnement_menace';
import { GEO_2DE_T3_L01_MILIEUX_BIOGEOGRAPHIQUES } from '../courses/seconde/geo_2de_milieux_biogeographiques';
import { GEO_2DE_T3_L02_PROBLEMES_ENVIRONNEMENTAUX } from '../courses/seconde/geo_2de_problemes_environnementaux';
import { HIST_2DE_L01_HISTOIRE_FORMATION_CITOYEN } from '../courses/seconde/hist_2de_histoire_formation_citoyen';
import { HIST_2DE_L02_METHODES_ETUDE_HISTOIRE } from '../courses/seconde/hist_2de_methodes_etude_histoire';
import { HIST_2DE_L03_METHODOLOGIE_DISSERTATION_COMMENTAIRE } from '../courses/seconde/hist_2de_methodologie_dissertation_commentaire';
import { HIST_2DE_T2_L01_PREHISTOIRE } from '../courses/seconde/hist_2de_prehistoire';
import { HIST_2DE_T2_L02_EGYPTE_ANCIENNE } from '../courses/seconde/hist_2de_egypte_ancienne';
import { HIST_2DE_T2_L03_DEMOCRATIE_ATHENIENNE } from '../courses/seconde/hist_2de_democratie_athenienne';
import { HIST_2DE_T2_L04_SOUDAN_OCCIDENTAL } from '../courses/seconde/hist_2de_soudan_occidental';
import { HIST_2DE_T2_L05_TRAITES_DES_NOIRS } from '../courses/seconde/hist_2de_traites_des_noirs';
import { HIST_2DE_T3_L01_NEOLITHIQUE_CI } from '../courses/seconde/hist_2de_neolithique_cote_ivoire';
import { HIST_2DE_T3_L02_PEUPLES_CI } from '../courses/seconde/hist_2de_peuples_cote_ivoire';

export const CHAPTERS: CurriculumChapter[] = [
  GEO_2DE_L01_OBJET_INTERET_DEMARCHE,
  GEO_2DE_L02_PLANETE_TERRE,
  GEO_2DE_L03_TECHNIQUES_REPRESENTATION_TERRE,
  GEO_2DE_T2_L01_MILIEU_SUBEQUATORIAL,
  GEO_2DE_T2_L02_MILIEU_TROPICAL,
  GEO_2DE_T2_L03_ENVIRONNEMENT_MENACE,
  GEO_2DE_T3_L01_MILIEUX_BIOGEOGRAPHIQUES,
  GEO_2DE_T3_L02_PROBLEMES_ENVIRONNEMENTAUX,
  HIST_2DE_L01_HISTOIRE_FORMATION_CITOYEN,
  HIST_2DE_L02_METHODES_ETUDE_HISTOIRE,
  HIST_2DE_L03_METHODOLOGIE_DISSERTATION_COMMENTAIRE,
  HIST_2DE_T2_L01_PREHISTOIRE,
  HIST_2DE_T2_L02_EGYPTE_ANCIENNE,
  HIST_2DE_T2_L03_DEMOCRATIE_ATHENIENNE,
  HIST_2DE_T2_L04_SOUDAN_OCCIDENTAL,
  HIST_2DE_T2_L05_TRAITES_DES_NOIRS,
  HIST_2DE_T3_L01_NEOLITHIQUE_CI,
  HIST_2DE_T3_L02_PEUPLES_CI,
];
