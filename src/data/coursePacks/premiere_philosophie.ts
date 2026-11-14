/**
 * Paquet de cours : premiere_philosophie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { PHILO_1RE_L01_METHODE_LECTURE_TEXTE } from '../courses/premiere/philo_1re_methode_lecture_texte';
import { PHILO_1RE_L02_INTRODUCTION_COMMENTAIRE } from '../courses/premiere/philo_1re_introduction_commentaire';
import { PHILO_1RE_L03_CONCLUSION_COMMENTAIRE } from '../courses/premiere/philo_1re_conclusion_commentaire';
import { PHILO_1RE_L04_ESSAI_PROBLEMATISATION } from '../courses/premiere/philo_1re_essai_problematisation';
import { PHILO_1RE_L05_INTRODUCTION_DISSERTATION } from '../courses/premiere/philo_1re_introduction_dissertation';
import { PHILO_1RE_L06_PERIODE_ANTIQUE } from '../courses/premiere/philo_1re_periode_antique';
import { PHILO_1RE_L07_MOYEN_AGE_RENAISSANCE } from '../courses/premiere/philo_1re_moyen_age_renaissance';
import { PHILO_1RE_L08_PERIODE_MODERNE } from '../courses/premiere/philo_1re_periode_moderne';
import { PHILO_1RE_L09_PERIODE_CONTEMPORAINE } from '../courses/premiere/philo_1re_periode_contemporaine';

export const CHAPTERS: CurriculumChapter[] = [
  PHILO_1RE_L01_METHODE_LECTURE_TEXTE,
  PHILO_1RE_L02_INTRODUCTION_COMMENTAIRE,
  PHILO_1RE_L03_CONCLUSION_COMMENTAIRE,
  PHILO_1RE_L04_ESSAI_PROBLEMATISATION,
  PHILO_1RE_L05_INTRODUCTION_DISSERTATION,
  PHILO_1RE_L06_PERIODE_ANTIQUE,
  PHILO_1RE_L07_MOYEN_AGE_RENAISSANCE,
  PHILO_1RE_L08_PERIODE_MODERNE,
  PHILO_1RE_L09_PERIODE_CONTEMPORAINE,
];
