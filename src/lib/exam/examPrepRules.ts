/**
 * RÈGLES DE PRÉPARATION AUX DEVOIRS ET EXAMENS (2nde A, 2nde C, Tle A1 et Tle A2 pour l'instant)
 *
 * Pour chaque jour avant l'épreuve (J-n), KONAN choisit le type de séance :
 *  - J-3, J-2, J-1 : sujet complet de 2 h, OBLIGATOIRE chaque jour ;
 *  - avant (J-4 et plus) : alternance par blocs de 3 jours, en remontant le temps :
 *      J-4 à J-6 : séries de 30 questions ; J-7 à J-9 : sujets de 2 h ; J-10 à J-12 : 30 questions ; J-13, J-14 : sujets ;
 *  - jour J : pas de séance de préparation (l'élève compose) ;
 *  - matière sans cours dans l'appli : « chronomètre classique » de 75 min tous les jours (révision sur le cahier) ;
 *  - matière avec cours mais sans modèle de sujet (ex. Philosophie) : séries de 30 questions.
 * Fichier sans dépendance lourde : utilisé par le planificateur (paquet principal).
 */
import type { ExamPrepMode, Subject } from '../../types';
import { tryResolveGradeLevel } from '../curriculum/curriculumMatcher';

/**
 * Classes où la préparation aux devoirs est ouverte (il y a des cours et des QCM).
 * Terminale A1 / A2 : sujets au format du BAC (modèles TERMINALE_A_TEMPLATES dans api/_examTemplates.js).
 */
export const EXAM_PREP_GRADES = ['seconde_a', 'seconde_c', 'terminale_a1', 'terminale_a2'] as const;

/**
 * Matières qui ont un modèle de sujet de 2 h (api/_examTemplates.js).
 * La Philosophie n'a de modèle qu'en Terminale A (seule classe à avoir des cours de Philosophie ouverts aux devoirs).
 */
export const SUJET_TEMPLATE_SUBJECTS = ['maths', 'physique_chimie', 'svt', 'histoire_geo', 'francais', 'philosophie'] as const;

/** Matières littéraires : le sujet s'affiche en texte simple (sans moteur de formules), lignes numérotées. */
export const LITERARY_EXAM_SUBJECTS = ['francais', 'histoire_geo', 'philosophie'] as const;

/** Fenêtre de préparation : KONAN prépare l'épreuve à partir de J-14. */
export const EXAM_PREP_HORIZON_DAYS = 14;

export const EXAM_PREP_DURATIONS: Record<ExamPrepMode, number> = {
  qcm30: 45,
  sujet2h: 120,
  chrono75: 75,
};

export const QCM_SERIES_LENGTH = 30;

/** La classe de l'élève (« 2nde C », « seconde_c »…) a-t-elle la préparation aux devoirs ? */
export function isExamPrepGrade(rawGrade?: string | null): boolean {
  const grade = tryResolveGradeLevel(rawGrade || undefined);
  return Boolean(grade && (EXAM_PREP_GRADES as readonly string[]).includes(grade));
}

export function hasSujetTemplate(subjectKey?: string | null): boolean {
  return Boolean(subjectKey && (SUJET_TEMPLATE_SUBJECTS as readonly string[]).includes(subjectKey));
}

/** La matière a-t-elle des chapitres choisis (donc du cours et des QCM dans l'appli) ? */
export function subjectHasExamCourse(subject: Pick<Subject, 'examChapterIds'>): boolean {
  return Array.isArray(subject.examChapterIds) && subject.examChapterIds.length > 0;
}

/**
 * Type de séance pour un jour donné, ou null si aucune préparation ce jour-là
 * (épreuve passée, jour J, ou trop loin).
 */
export function examPrepModeFor(
  daysToExam: number | null,
  subject: Pick<Subject, 'examChapterIds' | 'examSubjectKey'>,
): ExamPrepMode | null {
  if (daysToExam === null || daysToExam < 1 || daysToExam > EXAM_PREP_HORIZON_DAYS) return null;
  if (!subjectHasExamCourse(subject)) return 'chrono75';
  const canSujet = hasSujetTemplate(subject.examSubjectKey);
  if (!canSujet) return 'qcm30';
  if (daysToExam <= 3) return 'sujet2h';
  // Blocs de 3 jours en remontant à partir de J-4 : QCM, sujets, QCM, sujets…
  const block = Math.floor((daysToExam - 4) / 3);
  return block % 2 === 0 ? 'qcm30' : 'sujet2h';
}

export function examPrepLabel(mode: ExamPrepMode): string {
  if (mode === 'qcm30') return '30 questions de devoir';
  if (mode === 'sujet2h') return 'Sujet complet (2 h)';
  return 'Révision chronométrée (75 min)';
}

/** Titre, description et objectifs de la séance affichés dans le planning. */
export function examPrepSessionText(
  mode: ExamPrepMode,
  subjectName: string,
  examLabel: string,
  daysToExam: number,
): { title: string; description: string; objectives: string[] } {
  const when = daysToExam === 1 ? 'demain' : `dans ${daysToExam} jours`;
  if (mode === 'qcm30') {
    return {
      title: `${examLabel} ${when} : 30 questions de ${subjectName}`,
      description: `Série de 30 questions sur les chapitres de ton ${examLabel.toLowerCase()}. Repère : 45 min, mais tu vas jusqu'à la 30e question.`,
      objectives: [
        'Répondre aux 30 questions sans regarder le cours',
        'Revoir les questions ratées les jours précédents (KONAN te les repose)',
        'Comprendre chaque erreur avant de passer à la suivante',
      ],
    };
  }
  if (mode === 'sujet2h') {
    return {
      title: `${examLabel} ${when} : sujet complet de ${subjectName} (2 h)`,
      description: `Sujet complet au format officiel ivoirien, à traiter sur une copie en 2 h. Prends ensuite ta copie en photo : KONAN la corrige et te donne ta note sur 20.`,
      objectives: [
        'Traiter le sujet sur une feuille de copie, comme le jour J',
        'Respecter les 2 h (tu peux rendre plus tôt)',
        'Photographier ta copie pour la correction et la note sur 20',
      ],
    };
  }
  return {
    title: `${examLabel} ${when} : révision de ${subjectName} (75 min)`,
    description: `Pas encore de cours ${subjectName} dans KONAN : révise sur ton cahier pendant 75 minutes, puis valide la séance.`,
    objectives: [
      'Relire le cours et refaire les exercices du cahier',
      'Faire une fiche des points à connaître pour le jour J',
      'Valider la séance à la fin du chronomètre',
    ],
  };
}
