import type {
  CurriculumChapter,
  CurriculumGradeLevel,
  StemSubjectId,
  StudentCurriculumProgressMap,
  SubjectStudentProgress,
  TutorPointSessionItem,
  TutorSessionPayload,
} from './types';
import { getRequiredPointsCountForDuration } from './types';
import { getCurriculumChapterById, getCurriculumChapters } from './curriculumRegistry';

const PROGRESS_STORAGE_PREFIX = 'konan_curriculum_progress_v1_';

export function getStudentProgressMap(userId: string): StudentCurriculumProgressMap {
  try {
    const raw = localStorage.getItem(`${PROGRESS_STORAGE_PREFIX}${userId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // Ignore
  }
  return {};
}

export function saveStudentProgressMap(
  userId: string,
  progressMap: StudentCurriculumProgressMap
): void {
  try {
    localStorage.setItem(
      `${PROGRESS_STORAGE_PREFIX}${userId}`,
      JSON.stringify(progressMap)
    );
  } catch {
    // Ignore
  }
}

/**
 * Initialise le positionnement de départ d'une matière lors de la 1ère séance
 * (Réponse à la question : "Vous êtes arrivés sur quel chapitre en classe ?")
 */
export function initializeSubjectPosition(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  startingChapterId: string
): SubjectStudentProgress {
  const currentMap = getStudentProgressMap(userId);
  const chapters = getCurriculumChapters(subjectId, gradeLevel);
  const activeChapter = chapters.find(c => c.id === startingChapterId) || chapters[0];

  // Marquer comme déjà vus les chapitres antérieurs à celui choisi par l'élève
  const priorCompletedIds: string[] = [];
  if (activeChapter) {
    chapters
      .filter(c => c.order < activeChapter.order)
      .forEach(c => priorCompletedIds.push(c.id));
  }

  const initialProgress: SubjectStudentProgress = {
    subjectId,
    gradeLevel,
    positioningCompleted: true,
    currentChapterId: activeChapter ? activeChapter.id : startingChapterId,
    currentPointIndex: 0,
    masteredPointIds: [],
    completedChapterIds: priorCompletedIds,
    totalExercisesAnswered: 0,
    correctExercisesCount: 0,
    lastSessionAt: new Date().toISOString(),
  };

  currentMap[subjectId] = initialProgress;
  saveStudentProgressMap(userId, currentMap);
  return initialProgress;
}

/**
 * Prépare le contenu d'une séance selon la durée prévue dans le planning (25m = 3 points, 45m = 5 points...)
 * Assure une continuité fluide et invisible lors du passage d'un chapitre à l'autre.
 */
export function buildTutorSessionPayload(
  userId: string,
  subjectId: StemSubjectId,
  subjectName: string,
  gradeLevel: CurriculumGradeLevel,
  durationMinutes: number = 25
): {
  needsPositioning: boolean;
  availableChapters: CurriculumChapter[];
  payload?: TutorSessionPayload;
} {
  const progressMap = getStudentProgressMap(userId);
  const subjectProgress = progressMap[subjectId];
  const chapters = getCurriculumChapters(subjectId, gradeLevel).sort((a, b) => a.order - b.order);

  // Si l'élève n'a pas encore indiqué à quel chapitre il est arrivé en classe
  if (!subjectProgress || !subjectProgress.positioningCompleted) {
    return {
      needsPositioning: true,
      availableChapters: chapters,
    };
  }

  let activeChapter = getCurriculumChapterById(subjectProgress.currentChapterId);
  if (!activeChapter && chapters.length > 0) {
    activeChapter = chapters[0];
  }

  if (!activeChapter || chapters.length === 0) {
    return {
      needsPositioning: false,
      availableChapters: chapters,
    };
  }

  // Quota strict de points essentiels requis pour valider cette séance selon sa durée
  const targetPointsCount = getRequiredPointsCountForDuration(durationMinutes);

  // Collecter les points essentiels de manière continue à travers les chapitres
  const itemsToReview: TutorPointSessionItem[] = [];
  let chIdx = chapters.findIndex(c => c.id === activeChapter.id);
  if (chIdx === -1) chIdx = 0;
  let ptIdx = subjectProgress.currentPointIndex || 0;

  // Boucle de collecte transparente
  while (itemsToReview.length < targetPointsCount && chIdx < chapters.length) {
    const chap = chapters[chIdx];
    if (ptIdx < chap.points.length) {
      const point = chap.points[ptIdx];
      const isLast = ptIdx === chap.points.length - 1;
      itemsToReview.push({
        point,
        chapterId: chap.id,
        chapterTitle: chap.title,
        chapterOrder: chap.order,
        pointIndexInChapter: ptIdx,
        isLastPointOfChapter: isLast,
        totalPointsInChapter: chap.points.length,
      });
      ptIdx++;
    } else {
      // Fin du chapitre actuel : passage automatique et invisible au premier point du chapitre suivant
      chIdx++;
      ptIdx = 0;
    }
  }

  // Si on a atteint la toute fin du programme et qu'il manque des points pour atteindre le quota,
  // reprendre les premiers points pour consolider
  if (itemsToReview.length < targetPointsCount && chapters.length > 0) {
    let fallbackChIdx = 0;
    let fallbackPtIdx = 0;
    while (itemsToReview.length < targetPointsCount && fallbackChIdx < chapters.length) {
      const chap = chapters[fallbackChIdx];
      if (fallbackPtIdx < chap.points.length) {
        const point = chap.points[fallbackPtIdx];
        itemsToReview.push({
          point,
          chapterId: chap.id,
          chapterTitle: chap.title,
          chapterOrder: chap.order,
          pointIndexInChapter: fallbackPtIdx,
          isLastPointOfChapter: fallbackPtIdx === chap.points.length - 1,
          totalPointsInChapter: chap.points.length,
        });
        fallbackPtIdx++;
      } else {
        fallbackChIdx++;
        fallbackPtIdx = 0;
      }
    }
  }

  return {
    needsPositioning: false,
    availableChapters: chapters,
    payload: {
      subjectId,
      subjectName,
      gradeLevel,
      itemsToReview,
      targetPointsCount,
      durationMinutes,
      // Rétrocompatibilité
      chapter: activeChapter,
      pointsToReview: itemsToReview.map(i => i.point),
    },
  };
}

/**
 * Enregistre les résultats de la séance complétée avec report exact de progression
 */
export function recordCompletedTutorSession(
  userId: string,
  subjectId: StemSubjectId,
  completedItems: TutorPointSessionItem[],
  totalExercisesAnswered: number,
  correctExercisesCount: number
): void {
  const currentMap = getStudentProgressMap(userId);
  const prog = currentMap[subjectId];
  if (!prog || completedItems.length === 0) return;

  const chapters = getCurriculumChapters(subjectId, prog.gradeLevel).sort((a, b) => a.order - b.order);
  const newlyMasteredPointIds = completedItems.map(item => item.point.id);
  const updatedMastered = Array.from(new Set([...prog.masteredPointIds, ...newlyMasteredPointIds]));
  const updatedCompletedChapters = [...prog.completedChapterIds];

  // Marquer les chapitres dont le dernier point a été complété
  for (const item of completedItems) {
    if (item.isLastPointOfChapter && !updatedCompletedChapters.includes(item.chapterId)) {
      updatedCompletedChapters.push(item.chapterId);
    }
  }

  // Calculer la prochaine position de l'élève (chapitre et index du point)
  const lastItem = completedItems[completedItems.length - 1];
  let nextChapterId = lastItem.chapterId;
  let nextPointIndex = lastItem.pointIndexInChapter + 1;

  if (lastItem.isLastPointOfChapter) {
    const nextChap = chapters.find(c => c.order === lastItem.chapterOrder + 1);
    if (nextChap) {
      nextChapterId = nextChap.id;
      nextPointIndex = 0;
    }
  }

  currentMap[subjectId] = {
    ...prog,
    currentChapterId: nextChapterId,
    currentPointIndex: nextPointIndex,
    masteredPointIds: updatedMastered,
    completedChapterIds: updatedCompletedChapters,
    totalExercisesAnswered: prog.totalExercisesAnswered + totalExercisesAnswered,
    correctExercisesCount: prog.correctExercisesCount + correctExercisesCount,
    lastSessionAt: new Date().toISOString(),
  };

  saveStudentProgressMap(userId, currentMap);
}
