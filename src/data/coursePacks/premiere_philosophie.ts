/**
 * Paquet de cours : premiere_philosophie. Chargé à la demande par le registre (src/lib/curriculum/curriculumRegistry.ts) :
 * l'élève ne télécharge que les cours de sa classe et de la matière ouverte.
 * Généré le 2026-11-27 à partir des cours fournis par le fondateur (src/data/courses/premiere/).
 * Pour ajouter une leçon : l'importer ici et l'ajouter au tableau (puis npm run check:cours).
 */
import type { CurriculumChapter } from '../../lib/curriculum/types';
import { PHILO_1ERE_L01_LECTURE_TEXTE } from '../courses/premiere/philo_1ere_lecture_texte';
import { PHILO_1ERE_L02_INTRODUCTION_COMMENTAIRE } from '../courses/premiere/philo_1ere_introduction_commentaire';
import { PHILO_1ERE_L03_CONCLUSION_COMMENTAIRE } from '../courses/premiere/philo_1ere_conclusion_commentaire';
import { PHILO_1ERE_L04_ESSAI_PROBLEMATISATION } from '../courses/premiere/philo_1ere_essai_problematisation';
import { PHILO_1ERE_L05_INTRODUCTION_DISSERTATION } from '../courses/premiere/philo_1ere_introduction_dissertation';
import { PHILO_1ERE_L06_PRESENTATION_HISTOIRE_PHILOSOPHIE } from '../courses/premiere/philo_1ere_presentation_histoire_philosophie';
import { PHILO_1ERE_L07_MOYEN_AGE_RENAISSANCE } from '../courses/premiere/philo_1ere_moyen_age_renaissance';
import { PHILO_1ERE_L08_PERIODE_MODERNE } from '../courses/premiere/philo_1ere_periode_moderne';
import { PHILO_1ERE_L09_PERIODE_CONTEMPORAINE } from '../courses/premiere/philo_1ere_periode_contemporaine';

export const CHAPTERS: CurriculumChapter[] = [
  PHILO_1ERE_L01_LECTURE_TEXTE,
  PHILO_1ERE_L02_INTRODUCTION_COMMENTAIRE,
  PHILO_1ERE_L03_CONCLUSION_COMMENTAIRE,
  PHILO_1ERE_L04_ESSAI_PROBLEMATISATION,
  PHILO_1ERE_L05_INTRODUCTION_DISSERTATION,
  PHILO_1ERE_L06_PRESENTATION_HISTOIRE_PHILOSOPHIE,
  PHILO_1ERE_L07_MOYEN_AGE_RENAISSANCE,
  PHILO_1ERE_L08_PERIODE_MODERNE,
  PHILO_1ERE_L09_PERIODE_CONTEMPORAINE,
];
