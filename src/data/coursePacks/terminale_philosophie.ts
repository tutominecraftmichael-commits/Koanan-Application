/**
 * Paquet de cours : terminale_philosophie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { PHILO_TLE_L01_DISSERTATION } from '../courses/terminale/philo_tle_dissertation';
import { PHILO_TLE_L02_COMMENTAIRE_TEXTE } from '../courses/terminale/philo_tle_commentaire_texte';
import { PHILO_TLE_L03_CONNAISSANCE_HOMME } from '../courses/terminale/philo_tle_connaissance_homme';
import { PHILO_TLE_L04_VIE_EN_SOCIETE } from '../courses/terminale/philo_tle_vie_en_societe';
import { PHILO_TLE_L05_DIEU_RELIGION } from '../courses/terminale/philo_tle_dieu_religion';
import { PHILO_TLE_L06_HISTOIRE_HUMANITE } from '../courses/terminale/philo_tle_histoire_humanite';
import { PHILO_TLE_L07_VALEUR_PHILOSOPHIE } from '../courses/terminale/philo_tle_valeur_philosophie';
import { PHILO_TLE_L08_PROGRES_BONHEUR } from '../courses/terminale/philo_tle_progres_bonheur';
import { PHILO_TLE_L09_LANGAGE_VERITE } from '../courses/terminale/philo_tle_langage_verite';
import { PHILO_TLE_L10_CONNAISSANCE_SCIENTIFIQUE } from '../courses/terminale/philo_tle_connaissance_scientifique';

export const CHAPTERS: CurriculumChapter[] = [
  PHILO_TLE_L01_DISSERTATION,
  PHILO_TLE_L02_COMMENTAIRE_TEXTE,
  PHILO_TLE_L03_CONNAISSANCE_HOMME,
  PHILO_TLE_L04_VIE_EN_SOCIETE,
  PHILO_TLE_L05_DIEU_RELIGION,
  PHILO_TLE_L06_HISTOIRE_HUMANITE,
  PHILO_TLE_L07_VALEUR_PHILOSOPHIE,
  PHILO_TLE_L08_PROGRES_BONHEUR,
  PHILO_TLE_L09_LANGAGE_VERITE,
  PHILO_TLE_L10_CONNAISSANCE_SCIENTIFIQUE,
];
