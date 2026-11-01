import type {
  CurriculumChapter,
  CurriculumGradeLevel,
  StemSubjectId,
  StemSubCategory,
  StudentCurriculumProgressMap,
  SubjectStudentProgress,
  SubCategoryStudentProgress,
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
 * Détermine avec précision la sous-discipline officielle d'un chapitre (Système éducatif ivoirien)
 * - Physique-Chimie -> 'chimie' vs 'physique'
 * - Mathématiques -> 'geometrie' vs 'numerique'
 * - SVT -> 'svt'
 */
export function getChapterSubCategory(chapter: CurriculumChapter): StemSubCategory {
  if (chapter.subjectId === 'svt') return 'svt';

  const id = chapter.id || '';
  const text = ((chapter.title || '') + ' ' + (chapter.summary || '')).toLowerCase();

  if (chapter.subjectId === 'physique_chimie') {
    // 1. Identifiants explicites non ambigus (ex: seconde_c_chimie_ch1 ou seconde_c_physique_ch1)
    if (/(^|_)physique(_|$)/.test(id) && !id.includes('physique_chimie')) return 'physique';
    if (/(^|_)chimie(_|$)/.test(id) && !id.includes('physique_chimie')) return 'chimie';

    // 2. Mots-clés rigoureux de Chimie
    const isChimie = /(?:chimie|chimique|atome|molaire|mole\b|acide|base\b|ph\b|solutions? aqueuse|oxyd|r[eé]duction|redox|dosage|titrage|est[eé]rif|ester|savon|alcool|amine|amide|acides? amin[eé]|alcane|alc[eé]ne|alcyne|hydrocarbure|polym[eè]re|ions?\b|chlorure|sels?\b|dissolution|pr[eé]cipit|solubilit[eé]|cin[eé]tique chimique|constante d'acidit[eé]|ka\b|combustion)/i.test(text);

    // 3. Mots-clés rigoureux de Physique
    const isPhysique = /(?:physique|mouvement|cin[eé]matique|dynamique|force|pesanteur|gravitation|newton|travail|puissance|[eé]nergie|m[eé]canique|oscillat|vitesse|acc[eé]l[eé]ration|quantit[eé] de mouvement|[eé]quilibre|[eé]lectricit[eé]|courant|tension|r[eé]sistance|dip[oô]le|circuit|rlc|condensateur|bobine|champ|coulomb|lorentz|induction|optique|lentille|lumi[eè]re|ondes?|radioactivit[eé]|nucl[eé]aire|calorim[eé]trie|thermique|masse et poids|poids et masse)/i.test(text);

    if (isChimie && !isPhysique) return 'chimie';
    if (isPhysique && !isChimie) return 'physique';

    // Arbitrage par le titre direct en cas de chevauchement
    const title = (chapter.title || '').toLowerCase();
    if (/(?:chimie|chimique|solution|acide|base|ph|atome|mole|ion|est[eé]rif|alcane|oxyd)/i.test(title)) return 'chimie';
    if (/(?:mouvement|cin[eé]matique|force|[eé]nergie|travail|puissance|newton|poids|masse|courant|tension|[eé]lectr|optique|lentille|onde|m[eé]canique)/i.test(title)) return 'physique';

    return isChimie ? 'chimie' : 'physique';
  }

  if (chapter.subjectId === 'maths') {
    if (id.includes('_geometrie_')) return 'geometrie';
    if (id.includes('_numerique_')) return 'numerique';

    const title = (chapter.title || '').toLowerCase();

    // 1. Mots-clés stricts de Géométrie dans le titre
    const isGeometrie = /(?:g[eé]om[eé]trie|vecteur|droite|segment|angle|triangle|cercle|disque|quadrilat[eè]re|parall[eé]logramme|rectangle|losange|\bcarr[eé]\b|trap[eè]ze|pyramide|c[oô]ne|pav[eé]|cube|prisme|sph[eè]re|solide|thal[eè]s|pythagore|trigonom[eé]trie|barycentre|produit scalaire|espace|transformation|homoth[eé]tie|rotation|translation|sym[eé]trie|similitude|projection|rep[eè]re|rep[eé]rage|perspective)/i.test(title);

    // 2. Mots-clés stricts de Numérique / Algèbre dans le titre
    const isNumerique = /(?:num[eé]rique|calcul|nombre|fraction|d[eé]cimal|puissance|racine|fonction|polyn[oô]me|[eé]quation|in[eé]quation|syst[eè]me|suite|limite|d[eé]riv|int[eé]gral|primitive|logarithm|exponentielle|statistique|probabilit|d[eé]nombrement|proportionnalit[eé])/i.test(title);

    if (isGeometrie && !isNumerique) return 'geometrie';
    if (isNumerique && !isGeometrie) return 'numerique';

    // Priorité géométrique sur les titres ambigus (ex: "Équations de droites")
    if (/(?:droite|vecteur|triangle|cercle|plan|espace|sym[eé]trie|translation|angle)/i.test(title)) return 'geometrie';

    // Vérification contextuelle globale
    if (/(?:g[eé]om[eé]trie|vecteur|thal[eè]s|pythagore|trigonom[eé]trie|barycentre|produit scalaire|homoth[eé]tie|rotation)/i.test(text)) return 'geometrie';

    return 'numerique';
  }

  return 'svt';
}

export function getSubCategoryName(subCategory: StemSubCategory): string {
  switch (subCategory) {
    case 'chimie': return 'Chimie';
    case 'physique': return 'Physique';
    case 'geometrie': return 'Géométrie';
    case 'numerique': return 'Numérique';
    default: return 'SVT';
  }
}

export function getSubCategoryQuestion(subCategory: StemSubCategory): string {
  switch (subCategory) {
    case 'chimie': return 'À quel chapitre êtes-vous arrivés en Chimie ?';
    case 'physique': return 'À quel chapitre êtes-vous arrivés en Physique ?';
    case 'geometrie': return 'À quel chapitre êtes-vous arrivés en Géométrie ?';
    case 'numerique': return 'À quel chapitre êtes-vous arrivés en Numérique ?';
    case 'svt': return 'À quel chapitre êtes-vous arrivés en SVT ?';
    default: return 'À quel chapitre êtes-vous arrivés en SVT ?';
  }
}

/**
 * Calcule automatiquement la sous-discipline à lancer pour la séance actuelle selon l'alternance
 * (Chimie ↔ Physique et Géométrie ↔ Numérique)
 */
export function getActiveSubCategoryForSession(
  userId: string,
  subjectId: StemSubjectId
): StemSubCategory {
  if (subjectId === 'svt') return 'svt';

  const progressMap = getStudentProgressMap(userId);
  const prog = progressMap[subjectId];

  if (subjectId === 'physique_chimie') {
    // Règle d'alternance ivoirienne : 1ère séance = Chimie, 2ème = Physique, puis alternance continue
    if (!prog || !prog.lastAlternatedSubCategory) {
      return 'chimie';
    }
    return prog.lastAlternatedSubCategory === 'chimie' ? 'physique' : 'chimie';
  }

  if (subjectId === 'maths') {
    // Règle d'alternance ivoirienne : 1ère séance = Géométrie, 2ème = Numérique, puis alternance continue
    if (!prog || !prog.lastAlternatedSubCategory) {
      return 'geometrie';
    }
    return prog.lastAlternatedSubCategory === 'geometrie' ? 'numerique' : 'geometrie';
  }

  return 'svt';
}

/**
 * Initialise le positionnement de départ d'une sous-catégorie spécifique
 * (ex: Chimie seule lors de la 1ère séance, Physique seule lors de la 2ème séance)
 */
export function initializeSubCategoryPosition(
  userId: string,
  subjectId: StemSubjectId,
  subCategory: StemSubCategory,
  gradeLevel: CurriculumGradeLevel,
  startingChapterId: string
): SubjectStudentProgress {
  const currentMap = getStudentProgressMap(userId);
  const allSubjectChapters = getCurriculumChapters(subjectId, gradeLevel);
  const subChapters = allSubjectChapters.filter(c => getChapterSubCategory(c) === subCategory);
  const activeChapter = subChapters.find(c => c.id === startingChapterId) || subChapters[0] || allSubjectChapters[0];

  // Marquer comme déjà vus les chapitres antérieurs dans cette sous-matière
  const priorCompletedIds: string[] = [];
  if (activeChapter) {
    subChapters
      .filter(c => c.order < activeChapter.order)
      .forEach(c => priorCompletedIds.push(c.id));
  }

  const existingSubjectProg = currentMap[subjectId];
  const existingSubCategories = existingSubjectProg?.subCategories || {};

  const subProg: SubCategoryStudentProgress = {
    subCategory,
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

  const updatedSubjectProg: SubjectStudentProgress = {
    subjectId,
    gradeLevel,
    positioningCompleted: true,
    currentChapterId: activeChapter ? activeChapter.id : startingChapterId,
    currentPointIndex: 0,
    masteredPointIds: existingSubjectProg?.masteredPointIds || [],
    completedChapterIds: Array.from(new Set([...(existingSubjectProg?.completedChapterIds || []), ...priorCompletedIds])),
    totalExercisesAnswered: existingSubjectProg?.totalExercisesAnswered || 0,
    correctExercisesCount: existingSubjectProg?.correctExercisesCount || 0,
    lastSessionAt: new Date().toISOString(),
    lastAlternatedSubCategory: subCategory,
    subCategories: {
      ...existingSubCategories,
      [subCategory]: subProg,
    },
  };

  currentMap[subjectId] = updatedSubjectProg;
  saveStudentProgressMap(userId, currentMap);
  return updatedSubjectProg;
}

/**
 * Initialise le positionnement global (rétrocompatibilité)
 */
export function initializeSubjectPosition(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  startingChapterId: string
): SubjectStudentProgress {
  const chapter = getCurriculumChapterById(startingChapterId);
  const subCategory = chapter ? getChapterSubCategory(chapter) : (subjectId === 'physique_chimie' ? 'chimie' : subjectId === 'maths' ? 'geometrie' : 'svt');
  return initializeSubCategoryPosition(userId, subjectId, subCategory, gradeLevel, startingChapterId);
}

/**
 * Prépare le contenu d'une séance selon la durée prévue et l'alternance des sous-catégories
 */
export function buildTutorSessionPayload(
  userId: string,
  subjectId: StemSubjectId,
  subjectName: string,
  gradeLevel: CurriculumGradeLevel,
  durationMinutes: number = 25,
  requestedSubCategory?: StemSubCategory
): {
  needsPositioning: boolean;
  availableChapters: CurriculumChapter[];
  subCategory: StemSubCategory;
  subCategoryName: string;
  subCategoryQuestion: string;
  payload?: TutorSessionPayload;
} {
  const activeSubCategory = requestedSubCategory || getActiveSubCategoryForSession(userId, subjectId);
  const subCategoryName = getSubCategoryName(activeSubCategory);
  const subCategoryQuestion = getSubCategoryQuestion(activeSubCategory);

  const progressMap = getStudentProgressMap(userId);
  const subjectProgress = progressMap[subjectId];
  const allChapters = getCurriculumChapters(subjectId, gradeLevel);

  // Filtrer uniquement les chapitres de la sous-catégorie active
  let subChapters = allChapters.filter(c => getChapterSubCategory(c) === activeSubCategory);
  if (subChapters.length === 0 && subjectId === 'svt') {
    subChapters = allChapters;
  }
  subChapters.sort((a, b) => a.order - b.order);

  // Vérifier si cette sous-catégorie est déjà positionnée
  const subProg = subjectProgress?.subCategories?.[activeSubCategory];
  const isPositioned = Boolean(subProg?.positioningCompleted && subProg?.currentChapterId);

  // Si l'élève n'a pas encore indiqué à quel chapitre il est arrivé dans CETTE sous-catégorie
  if (!isPositioned) {
    return {
      needsPositioning: true,
      availableChapters: subChapters,
      subCategory: activeSubCategory,
      subCategoryName,
      subCategoryQuestion,
    };
  }

  let activeChapter = getCurriculumChapterById(subProg!.currentChapterId);
  if (!activeChapter && subChapters.length > 0) {
    activeChapter = subChapters[0];
  }

  if (!activeChapter || subChapters.length === 0) {
    return {
      needsPositioning: false,
      availableChapters: subChapters,
      subCategory: activeSubCategory,
      subCategoryName,
      subCategoryQuestion,
    };
  }

  // Quota strict de points essentiels requis pour valider cette séance selon sa durée
  const targetPointsCount = getRequiredPointsCountForDuration(durationMinutes);

  // Collecter les points essentiels de manière continue sans JAMAIS répéter de point
  const itemsToReview: TutorPointSessionItem[] = [];
  const seenPointIds = new Set<string>();

  let chIdx = subChapters.findIndex(c => c.id === activeChapter!.id);
  if (chIdx === -1) chIdx = 0;
  let ptIdx = Math.max(0, Math.min(subProg!.currentPointIndex || 0, Math.max(0, (activeChapter?.points.length || 1) - 1)));

  // Si l'index de point sauvegardé dépasse les points disponibles dans ce chapitre, passer au chapitre suivant
  if (ptIdx >= activeChapter!.points.length && chIdx < subChapters.length - 1) {
    chIdx++;
    ptIdx = 0;
  }

  while (itemsToReview.length < targetPointsCount && chIdx < subChapters.length) {
    const chap = subChapters[chIdx];
    if (ptIdx < chap.points.length) {
      const point = chap.points[ptIdx];
      if (!seenPointIds.has(point.id)) {
        seenPointIds.add(point.id);
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
      }
      ptIdx++;
    } else {
      // Fin du chapitre dans cette sous-matière : passage au chapitre suivant s'il existe
      chIdx++;
      ptIdx = 0;
    }
  }

  // Si itemsToReview est vide (fin de programme ou premier index hors limites), prendre au moins le premier point valide
  if (itemsToReview.length === 0 && subChapters.length > 0) {
    const firstChap = subChapters[0];
    if (firstChap.points.length > 0) {
      itemsToReview.push({
        point: firstChap.points[0],
        chapterId: firstChap.id,
        chapterTitle: firstChap.title,
        chapterOrder: firstChap.order,
        pointIndexInChapter: 0,
        isLastPointOfChapter: firstChap.points.length === 1,
        totalPointsInChapter: firstChap.points.length,
      });
    }
  }

  return {
    needsPositioning: false,
    availableChapters: subChapters,
    subCategory: activeSubCategory,
    subCategoryName,
    subCategoryQuestion,
    payload: {
      subjectId,
      subCategory: activeSubCategory,
      subCategoryName,
      subjectName,
      gradeLevel,
      itemsToReview,
      targetPointsCount,
      durationMinutes,
      chapter: activeChapter,
      pointsToReview: itemsToReview.map(i => i.point),
    },
  };
}

/**
 * Enregistre les résultats de la séance complétée avec report exact de progression
 * et mémorisation de l'alternance pour la prochaine séance
 */
export function recordCompletedTutorSession(
  userId: string,
  subjectId: StemSubjectId,
  subCategory: StemSubCategory,
  completedItems: TutorPointSessionItem[],
  totalExercisesAnswered: number,
  correctExercisesCount: number
): void {
  const currentMap = getStudentProgressMap(userId);
  const prog = currentMap[subjectId];
  if (!prog || completedItems.length === 0) return;

  const allChapters = getCurriculumChapters(subjectId, prog.gradeLevel);
  const subChapters = allChapters.filter(c => getChapterSubCategory(c) === subCategory).sort((a, b) => a.order - b.order);

  const existingSubCategories = prog.subCategories || {};
  const currentSubProg = existingSubCategories[subCategory] || {
    subCategory,
    gradeLevel: prog.gradeLevel,
    positioningCompleted: true,
    currentChapterId: completedItems[0].chapterId,
    currentPointIndex: 0,
    masteredPointIds: [],
    completedChapterIds: [],
    totalExercisesAnswered: 0,
    correctExercisesCount: 0,
  };

  const newlyMasteredPointIds = completedItems.map(item => item.point.id);
  const updatedMastered = Array.from(new Set([...currentSubProg.masteredPointIds, ...newlyMasteredPointIds]));
  const updatedCompletedChapters = [...currentSubProg.completedChapterIds];

  // Marquer les chapitres dont le dernier point a été complété
  for (const item of completedItems) {
    if (item.isLastPointOfChapter && !updatedCompletedChapters.includes(item.chapterId)) {
      updatedCompletedChapters.push(item.chapterId);
    }
  }

  // Calculer la prochaine position de l'élève dans cette sous-catégorie
  const lastItem = completedItems[completedItems.length - 1];
  let nextChapterId = lastItem.chapterId;
  let nextPointIndex = lastItem.pointIndexInChapter + 1;

  if (lastItem.isLastPointOfChapter) {
    const nextChap = subChapters.find(c => c.order > lastItem.chapterOrder);
    if (nextChap) {
      nextChapterId = nextChap.id;
      nextPointIndex = 0;
    }
  }

  const updatedSubProg: SubCategoryStudentProgress = {
    ...currentSubProg,
    currentChapterId: nextChapterId,
    currentPointIndex: nextPointIndex,
    masteredPointIds: updatedMastered,
    completedChapterIds: updatedCompletedChapters,
    totalExercisesAnswered: currentSubProg.totalExercisesAnswered + totalExercisesAnswered,
    correctExercisesCount: currentSubProg.correctExercisesCount + correctExercisesCount,
    lastSessionAt: new Date().toISOString(),
  };

  // Mettre à jour la progression globale et mémoriser l'alternance
  currentMap[subjectId] = {
    ...prog,
    lastAlternatedSubCategory: subCategory, // Marque la sous-matière terminée pour basculer automatiquement à la prochaine séance
    subCategories: {
      ...existingSubCategories,
      [subCategory]: updatedSubProg,
    },
    totalExercisesAnswered: prog.totalExercisesAnswered + totalExercisesAnswered,
    correctExercisesCount: prog.correctExercisesCount + correctExercisesCount,
    lastSessionAt: new Date().toISOString(),
  };

  saveStudentProgressMap(userId, currentMap);
}
