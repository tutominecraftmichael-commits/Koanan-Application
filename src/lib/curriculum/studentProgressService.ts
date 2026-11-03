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
import { END_OF_CHAPTER_MARKER, getSessionMiniLessonQuota } from './types';
import { getCurriculumChapterById, getCurriculumChapters, normalizeGradeForLookup } from './curriculumRegistry';
import { isChimieChapter } from './curriculumExpander';

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

// ============================================================================
// PROGRESSION PAR CLASSE
// Un élève qui change de classe (ex: 2nde C -> 1ère D) repart sur le programme
// de sa nouvelle classe, sans perdre ni mélanger l'historique de l'ancienne.
// ============================================================================

function progressKey(subjectId: StemSubjectId, gradeLevel: CurriculumGradeLevel): string {
  return `${normalizeGradeForLookup(gradeLevel)}::${subjectId}`;
}

/** Lit la progression d'une matière pour une classe (avec relecture des anciennes clés par matière seule). */
function readSubjectProgress(
  map: StudentCurriculumProgressMap,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel
): SubjectStudentProgress | undefined {
  const current = map[progressKey(subjectId, gradeLevel)];
  if (current) return current;
  const legacy = map[subjectId];
  if (legacy && normalizeGradeForLookup(legacy.gradeLevel) === normalizeGradeForLookup(gradeLevel)) {
    return legacy;
  }
  return undefined;
}

/** Écrit la progression sous la clé par classe et retire l'ancienne clé migrée. */
function writeSubjectProgress(
  map: StudentCurriculumProgressMap,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  progress: SubjectStudentProgress
): void {
  map[progressKey(subjectId, gradeLevel)] = progress;
  const legacy = map[subjectId];
  if (legacy && normalizeGradeForLookup(legacy.gradeLevel) === normalizeGradeForLookup(gradeLevel)) {
    delete map[subjectId];
  }
}

/**
 * Détermine avec précision la sous-discipline officielle d'un chapitre (Système éducatif ivoirien)
 * - Physique-Chimie -> 'chimie' vs 'physique'
 * - Mathématiques -> 'geometrie' vs 'numerique'
 * - SVT -> 'svt'
 */
/** Matières à un seul volet (pas d'alternance Chimie/Physique ou Géométrie/Numérique). */
export function isSingleVoletSubject(subjectId: StemSubjectId): boolean {
  return subjectId === 'svt' || subjectId === 'francais' || subjectId === 'philosophie';
}

/** Matières à deux volets alternés : Physique ↔ Chimie, Géométrie ↔ Numérique, Histoire ↔ Géographie. */
export function isTwoVoletSubject(subjectId: StemSubjectId): boolean {
  return subjectId === 'physique_chimie' || subjectId === 'maths' || subjectId === 'histoire_geo';
}

export function getChapterSubCategory(chapter: CurriculumChapter): StemSubCategory {
  if (chapter.subjectId === 'svt') return 'svt';
  if (chapter.subjectId === 'francais') return 'francais';
  if (chapter.subjectId === 'histoire_geo') return (chapter.id || '').includes('_histoire_') ? 'histoire' : 'geographie';
  if (chapter.subjectId === 'philosophie') return 'philosophie';

  if (chapter.subjectId === 'physique_chimie') {
    // Identifiant officiel en priorité (seconde_c_chimie_ch1 / seconde_c_physique_ch1),
    // sinon mots entiers du titre (« Tension » n'est plus confondue avec « ion »).
    return isChimieChapter(chapter) ? 'chimie' : 'physique';
  }

  if (chapter.subjectId === 'maths') {
    const id = chapter.id || '';
    if (id.includes('_geometrie_')) return 'geometrie';
    if (id.includes('_numerique_')) return 'numerique';

    const title = (chapter.title || '').toLowerCase();
    const text = ((chapter.title || '') + ' ' + (chapter.summary || '')).toLowerCase();

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
    case 'francais': return 'Français';
    case 'histoire_geo': return 'Histoire-Géographie';
    case 'histoire': return 'Histoire';
    case 'geographie': return 'Géographie';
    case 'philosophie': return 'Philosophie';
    default: return 'SVT';
  }
}

export function getSubCategoryQuestion(subCategory: StemSubCategory): string {
  switch (subCategory) {
    case 'chimie': return 'À quel chapitre êtes-vous arrivés en Chimie ?';
    case 'physique': return 'À quel chapitre êtes-vous arrivés en Physique ?';
    case 'geometrie': return 'À quel chapitre êtes-vous arrivés en Géométrie ?';
    case 'numerique': return 'À quel chapitre êtes-vous arrivés en Numérique ?';
    case 'francais': return 'À quel chapitre êtes-vous arrivés en Français ?';
    case 'svt': return 'À quel chapitre êtes-vous arrivés en SVT ?';
    case 'histoire_geo': return 'À quelle leçon êtes-vous arrivés en Histoire-Géographie ?';
    case 'histoire': return 'À quelle leçon êtes-vous arrivés en Histoire ?';
    case 'geographie': return 'À quelle leçon êtes-vous arrivés en Géographie ?';
    case 'philosophie': return 'À quelle leçon êtes-vous arrivés en Philosophie ?';
    default: return 'À quel chapitre êtes-vous arrivés en SVT ?';
  }
}

/** Volet jumeau pour l'alternance (Chimie <-> Physique, Géométrie <-> Numérique). */
const SIBLING_SUBCATEGORY: Partial<Record<StemSubCategory, StemSubCategory>> = {
  chimie: 'physique',
  physique: 'chimie',
  geometrie: 'numerique',
  numerique: 'geometrie',
  histoire: 'geographie',
  geographie: 'histoire',
};

export function defaultSubCategoryFor(subjectId: StemSubjectId): StemSubCategory {
  if (subjectId === 'physique_chimie') return 'physique';
  if (subjectId === 'maths') return 'numerique';
  if (subjectId === 'francais') return 'francais';
  if (subjectId === 'histoire_geo') return 'histoire';
  if (subjectId === 'philosophie') return 'philosophie';
  return 'svt';
}

/**
 * Calcule automatiquement la sous-discipline à lancer pour la séance actuelle selon l'alternance
 * (Chimie ↔ Physique et Géométrie ↔ Numérique).
 * Retourne null si l'élève est nouveau et n'a pas encore choisi son premier volet (Règle 1).
 */
export function getActiveSubCategoryForSession(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel
): StemSubCategory | null {
  if (isSingleVoletSubject(subjectId)) return defaultSubCategoryFor(subjectId);

  const prog = readSubjectProgress(getStudentProgressMap(userId), subjectId, gradeLevel);

  // RÈGLE 1 : Si l'élève n'a encore jamais validé de mini-leçon dans cette matière, il choisit librement
  if (!prog || !prog.lastAlternatedSubCategory) {
    return null;
  }

  // RÈGLE 2 & 3 : Alternance stricte imposée
  return SIBLING_SUBCATEGORY[prog.lastAlternatedSubCategory] || defaultSubCategoryFor(subjectId);
}

/**
 * Initialise le positionnement de départ d'une sous-catégorie spécifique
 * (ex: Chimie seule lors de la 1ère séance, Physique seule lors de la 2ème séance).
 * L'alternance n'est PAS modifiée ici : elle n'avance qu'une fois une mini-leçon validée.
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

  const existingSubjectProg = readSubjectProgress(currentMap, subjectId, gradeLevel);
  const existingSubCategories = existingSubjectProg?.subCategories || {};
  const nowIso = new Date().toISOString();

  const subProg: SubCategoryStudentProgress = {
    subCategory,
    gradeLevel,
    positioningCompleted: true,
    currentChapterId: activeChapter ? activeChapter.id : startingChapterId,
    currentPointIndex: 0,
    currentPointId: activeChapter?.points[0]?.id,
    masteredPointIds: existingSubCategories[subCategory]?.masteredPointIds || [],
    completedChapterIds: priorCompletedIds,
    totalExercisesAnswered: existingSubCategories[subCategory]?.totalExercisesAnswered || 0,
    correctExercisesCount: existingSubCategories[subCategory]?.correctExercisesCount || 0,
    lastSessionAt: nowIso,
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
    lastSessionAt: nowIso,
    lastAlternatedSubCategory: existingSubjectProg?.lastAlternatedSubCategory,
    subCategories: {
      ...existingSubCategories,
      [subCategory]: subProg,
    },
  };

  writeSubjectProgress(currentMap, subjectId, gradeLevel, updatedSubjectProg);
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
  const chapter = getCurriculumChapterById(startingChapterId, gradeLevel);
  const subCategory = chapter ? getChapterSubCategory(chapter) : defaultSubCategoryFor(subjectId);
  return initializeSubCategoryPosition(userId, subjectId, subCategory, gradeLevel, startingChapterId);
}

export interface BuildTutorSessionResult {
  /** Aucun cours authentique publié pour cette classe et cette matière : afficher « Cours en préparation ». */
  noContentAvailable: boolean;
  needsVoletChoice: boolean;
  needsPositioning: boolean;
  isSecondSessionAlternance: boolean;
  /** Toute la sous-matière est terminée : la séance repart en révision du dernier chapitre. */
  isRevision?: boolean;
  previousSubCategory?: StemSubCategory;
  alternanceBannerText?: string;
  availableChapters: CurriculumChapter[];
  subCategory: StemSubCategory;
  subCategoryName: string;
  subCategoryQuestion: string;
  payload?: TutorSessionPayload;
}

function chaptersOfSubCategory(
  allChapters: CurriculumChapter[],
  subjectId: StemSubjectId,
  subCategory: StemSubCategory
): CurriculumChapter[] {
  let subChapters = allChapters.filter(c => getChapterSubCategory(c) === subCategory);
  if (subChapters.length === 0 && isSingleVoletSubject(subjectId)) {
    subChapters = [...allChapters];
  }
  return subChapters.sort((a, b) => a.order - b.order);
}

/**
 * Index du prochain point à travailler dans le chapitre (par identifiant, avec repli sur l'ancien index).
 * Peut valoir chapter.points.length si le chapitre est terminé.
 */
function resolveNextPointIndex(chapter: CurriculumChapter, subProg: SubCategoryStudentProgress): number {
  const points = chapter.points;
  if (subProg.currentPointId === END_OF_CHAPTER_MARKER) return points.length;

  if (subProg.currentPointId) {
    const idx = points.findIndex(p => p.id === subProg.currentPointId);
    if (idx !== -1) return idx;
    // Le point a disparu (contenu mis à jour) : reprendre au premier point pas encore maîtrisé
    const mastered = new Set(subProg.masteredPointIds || []);
    const firstUnmastered = points.findIndex(p => !mastered.has(p.id));
    return firstUnmastered === -1 ? points.length : firstUnmastered;
  }

  // Ancienne progression (sans identifiant de point) : repère par position
  return Math.max(0, subProg.currentPointIndex || 0);
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
): BuildTutorSessionResult {
  const subjectProgress = readSubjectProgress(getStudentProgressMap(userId), subjectId, gradeLevel);
  const allChapters = getCurriculumChapters(subjectId, gradeLevel);

  // Aucun cours authentique pour cette classe : jamais de bascule vers une autre classe
  if (allChapters.length === 0) {
    const sub = requestedSubCategory || defaultSubCategoryFor(subjectId);
    return {
      noContentAvailable: true,
      needsVoletChoice: false,
      needsPositioning: false,
      isSecondSessionAlternance: false,
      availableChapters: [],
      subCategory: sub,
      subCategoryName: getSubCategoryName(sub),
      subCategoryQuestion: getSubCategoryQuestion(sub),
    };
  }

  // RÈGLE 1 : Si aucun volet n'est spécifié et que l'élève n'a jamais validé de mini-leçon dans cette matière à double volet
  const computedSubCategory = getActiveSubCategoryForSession(userId, subjectId, gradeLevel);
  // On ne demande le volet que si les deux volets ont réellement des cours pour cette classe
  const firstVolet = defaultSubCategoryFor(subjectId);
  const secondVolet = SIBLING_SUBCATEGORY[firstVolet];
  const bothVoletsHaveContent = Boolean(secondVolet)
    && chaptersOfSubCategory(allChapters, subjectId, firstVolet).length > 0
    && chaptersOfSubCategory(allChapters, subjectId, secondVolet!).length > 0;
  const needsVoletChoice = !requestedSubCategory && computedSubCategory === null && bothVoletsHaveContent && isTwoVoletSubject(subjectId);

  if (needsVoletChoice) {
    const defaultSub = defaultSubCategoryFor(subjectId);
    return {
      noContentAvailable: false,
      needsVoletChoice: true,
      needsPositioning: false,
      isSecondSessionAlternance: false,
      availableChapters: [],
      subCategory: defaultSub,
      subCategoryName: getSubCategoryName(defaultSub),
      subCategoryQuestion: subjectId === 'maths'
        ? 'Par quel domaine souhaites-tu commencer aujourd’hui ?'
        : 'Par quel volet souhaites-tu commencer aujourd’hui ?',
    };
  }

  let activeSubCategory: StemSubCategory = requestedSubCategory || computedSubCategory || defaultSubCategoryFor(subjectId);
  let subChapters = chaptersOfSubCategory(allChapters, subjectId, activeSubCategory);

  // Si ce volet n'a pas encore de cours pour cette classe, basculer sur le volet jumeau qui en a
  if (subChapters.length === 0) {
    const sibling = SIBLING_SUBCATEGORY[activeSubCategory];
    const siblingChapters = sibling ? chaptersOfSubCategory(allChapters, subjectId, sibling) : [];
    if (sibling && siblingChapters.length > 0) {
      activeSubCategory = sibling;
      subChapters = siblingChapters;
    }
  }

  const subCategoryName = getSubCategoryName(activeSubCategory);
  const subCategoryQuestion = getSubCategoryQuestion(activeSubCategory);

  if (subChapters.length === 0) {
    return {
      noContentAvailable: true,
      needsVoletChoice: false,
      needsPositioning: false,
      isSecondSessionAlternance: false,
      availableChapters: [],
      subCategory: activeSubCategory,
      subCategoryName,
      subCategoryQuestion,
    };
  }

  // Vérifier si cette sous-catégorie est déjà positionnée SUR UN CHAPITRE QUI EXISTE ENCORE pour cette classe
  const subProg = subjectProgress?.subCategories?.[activeSubCategory];
  let activeChapter = subProg?.positioningCompleted
    ? subChapters.find(c => c.id === subProg.currentChapterId)
    : undefined;
  const isPositioned = Boolean(subProg && activeChapter);

  // RÈGLE 2 : Détection de la deuxième séance (alternance obligatoire, zéro négociation)
  const hasPreviousSession = Boolean(subjectProgress?.lastAlternatedSubCategory);
  // Pas de bannière d'alternance si l'on retombe sur le même volet (l'autre volet n'a pas encore de cours)
  const isSecondSessionAlternance = hasPreviousSession && !isPositioned
    && activeSubCategory !== subjectProgress?.lastAlternatedSubCategory
    && isTwoVoletSubject(subjectId);
  let alternanceBannerText: string | undefined = undefined;

  if (isSecondSessionAlternance) {
    if (activeSubCategory === 'chimie') {
      alternanceBannerText = "La dernière séance tu as travaillé la Physique, aujourd'hui place à la Chimie !";
    } else if (activeSubCategory === 'physique') {
      alternanceBannerText = "La dernière séance tu as travaillé la Chimie, aujourd'hui place à la Physique !";
    } else if (activeSubCategory === 'geometrie') {
      alternanceBannerText = "La dernière séance tu as travaillé le Domaine Numérique, aujourd'hui place à la Géométrie !";
    } else if (activeSubCategory === 'numerique') {
      alternanceBannerText = "La dernière séance tu as travaillé la Géométrie, aujourd'hui place au Domaine Numérique !";
    } else if (activeSubCategory === 'histoire') {
      alternanceBannerText = "La dernière séance tu as travaillé la Géographie, aujourd'hui place à l'Histoire !";
    } else if (activeSubCategory === 'geographie') {
      alternanceBannerText = "La dernière séance tu as travaillé l'Histoire, aujourd'hui place à la Géographie !";
    }
  }

  // Si l'élève n'a pas encore indiqué à quel chapitre il est arrivé dans CETTE sous-catégorie
  if (!isPositioned || !subProg || !activeChapter) {
    return {
      noContentAvailable: false,
      needsVoletChoice: false,
      needsPositioning: true,
      isSecondSessionAlternance,
      previousSubCategory: subjectProgress?.lastAlternatedSubCategory,
      alternanceBannerText,
      availableChapters: subChapters,
      subCategory: activeSubCategory,
      subCategoryName,
      subCategoryQuestion,
    };
  }

  // Nombre de mini-leçons à valider pour cette durée (25 min : 3 ; 45 min : 4-5 ; 75 min : 6-7)
  const quota = getSessionMiniLessonQuota(durationMinutes);

  let ptIdx = resolveNextPointIndex(activeChapter, subProg);
  let isRevision = false;

  // Chapitre terminé : passer au chapitre suivant de la sous-matière.
  // Fin du programme de la sous-matière : révision du dernier chapitre depuis le début
  // (au lieu de rejouer le même dernier point à l'infini).
  if (ptIdx >= activeChapter.points.length) {
    const chIdx = subChapters.findIndex(c => c.id === activeChapter!.id);
    const nextChapter = subChapters.slice(chIdx + 1).find(c => c.points.length > 0);
    if (nextChapter) {
      activeChapter = nextChapter;
    } else {
      isRevision = true;
    }
    ptIdx = 0;
  }

  // La séance doit contenir le nombre de mini-leçons prévu pour sa durée : si le chapitre se
  // termine avant, on continue dans le chapitre suivant du même volet (dans l'ordre du programme).
  // En révision (programme terminé), on reste dans le dernier chapitre.
  const itemsToReview: TutorPointSessionItem[] = [];
  const seenPointIds = new Set<string>();
  const chapterForSession = activeChapter;
  let cursorChapter: CurriculumChapter = activeChapter;
  let totalSteps = 0;
  // Fin du programme atteinte en cours de séance : on complète avec des mini-leçons de révision
  // (depuis le début du volet) qui ne font pas reculer la progression de l'élève.
  // Vaut aussi en révision : si le dernier chapitre est trop court pour le quota, on repart
  // du début du volet (une seule fois, pour ne jamais boucler sans fin).
  let reviewFiller = false;
  let wrappedToStart = false;

  while (itemsToReview.length < quota.max) {
    if (ptIdx >= cursorChapter.points.length) {
      const cursorIdx = subChapters.findIndex(c => c.id === cursorChapter.id);
      const following = subChapters.slice(cursorIdx + 1).find(c => c.points.length > 0);
      if (following) {
        cursorChapter = following;
      } else {
        if (wrappedToStart || itemsToReview.length >= quota.min) break;
        wrappedToStart = true;
        reviewFiller = true;
        cursorChapter = subChapters.find(c => c.points.length > 0) ?? cursorChapter;
      }
      ptIdx = 0;
    }
    const point = cursorChapter.points[ptIdx];
    const steps = point.structuredSteps?.length || 8;
    // Dans la fourchette (ex. 4 à 5), on n'ajoute une mini-leçon de plus que si elle tient dans le budget d'étapes
    if (itemsToReview.length >= quota.min && totalSteps + steps > quota.stepBudget) break;
    if (!seenPointIds.has(point.id)) {
      seenPointIds.add(point.id);
      totalSteps += steps;
      itemsToReview.push({
        point,
        chapterId: cursorChapter.id,
        chapterTitle: cursorChapter.title,
        chapterOrder: cursorChapter.order,
        pointIndexInChapter: ptIdx,
        isLastPointOfChapter: ptIdx === cursorChapter.points.length - 1,
        totalPointsInChapter: cursorChapter.points.length,
        ...(reviewFiller ? { isReview: true } : {}),
      });
    }
    ptIdx++;
  }
  const targetPointsCount = itemsToReview.length;

  return {
    noContentAvailable: false,
    needsVoletChoice: false,
    needsPositioning: false,
    isSecondSessionAlternance: false,
    isRevision,
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
      chapter: chapterForSession,
      pointsToReview: itemsToReview.map(i => i.point),
    },
  };
}

/**
 * Mémorise le volet travaillé à la FIN d'une séance terminée, pour que la séance suivante
 * bascule automatiquement sur l'autre volet (Chimie <-> Physique, Géométrie <-> Numérique).
 * Une séance quittée en cours de route garde donc le même volet à sa réouverture.
 */
export function markSessionAlternation(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  subCategory: StemSubCategory
): void {
  const currentMap = getStudentProgressMap(userId);
  const prog = readSubjectProgress(currentMap, subjectId, gradeLevel);
  if (!prog) return;
  writeSubjectProgress(currentMap, subjectId, gradeLevel, { ...prog, lastAlternatedSubCategory: subCategory });
  saveStudentProgressMap(userId, currentMap);
}

/**
 * Enregistre une ou plusieurs mini-leçons validées (appelé après CHAQUE mini-leçon,
 * pour ne rien perdre si l'élève quitte en cours de séance), avec report exact de
 * la position et mémorisation de l'alternance pour la prochaine séance.
 */
export function recordCompletedTutorSession(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  subCategory: StemSubCategory,
  completedItems: TutorPointSessionItem[],
  totalExercisesAnswered: number,
  correctExercisesCount: number
): void {
  if (completedItems.length === 0) return;
  const currentMap = getStudentProgressMap(userId);
  const prog = readSubjectProgress(currentMap, subjectId, gradeLevel);
  if (!prog) return;

  const allChapters = getCurriculumChapters(subjectId, gradeLevel);
  const subChapters = chaptersOfSubCategory(allChapters, subjectId, subCategory);

  const existingSubCategories = prog.subCategories || {};
  const currentSubProg: SubCategoryStudentProgress = existingSubCategories[subCategory] || {
    subCategory,
    gradeLevel,
    positioningCompleted: true,
    currentChapterId: completedItems[0].chapterId,
    currentPointIndex: 0,
    masteredPointIds: [],
    completedChapterIds: [],
    totalExercisesAnswered: 0,
    correctExercisesCount: 0,
  };

  const updatedMastered = Array.from(new Set([...currentSubProg.masteredPointIds, ...completedItems.map(item => item.point.id)]));
  const updatedCompletedChapters = [...currentSubProg.completedChapterIds];

  // Marquer les chapitres dont le dernier point a été complété
  for (const item of completedItems) {
    if (item.isLastPointOfChapter && !updatedCompletedChapters.includes(item.chapterId)) {
      updatedCompletedChapters.push(item.chapterId);
    }
  }

  // Calculer la prochaine position de l'élève dans cette sous-catégorie (par identifiant de point)
  // Les mini-leçons de révision ajoutées en fin de programme ne déplacent pas la position
  const progressItems = completedItems.filter(item => !item.isReview);
  const lastItem = progressItems.length > 0 ? progressItems[progressItems.length - 1] : completedItems[completedItems.length - 1];
  const lastChapter = subChapters.find(c => c.id === lastItem.chapterId);
  let nextChapterId = lastItem.chapterId;
  let nextPointIndex = lastItem.pointIndexInChapter + 1;
  let nextPointId: string = END_OF_CHAPTER_MARKER;

  if (lastChapter) {
    const lastIdx = lastChapter.points.findIndex(p => p.id === lastItem.point.id);
    const nextPoint = lastIdx !== -1 ? lastChapter.points[lastIdx + 1] : undefined;
    if (nextPoint) {
      nextPointIndex = lastIdx + 1;
      nextPointId = nextPoint.id;
    } else {
      const chIdx = subChapters.findIndex(c => c.id === lastChapter.id);
      const nextChap = subChapters.slice(chIdx + 1).find(c => c.points.length > 0);
      if (nextChap) {
        nextChapterId = nextChap.id;
        nextPointIndex = 0;
        nextPointId = nextChap.points[0].id;
      } else {
        // Fin du programme de la sous-matière : on reste sur le dernier chapitre, marqué terminé
        nextPointIndex = lastChapter.points.length;
        nextPointId = END_OF_CHAPTER_MARKER;
      }
    }
  }

  const nowIso = new Date().toISOString();
  const updatedSubProg: SubCategoryStudentProgress = {
    ...currentSubProg,
    gradeLevel,
    currentChapterId: nextChapterId,
    currentPointIndex: nextPointIndex,
    currentPointId: nextPointId,
    masteredPointIds: updatedMastered,
    completedChapterIds: updatedCompletedChapters,
    totalExercisesAnswered: currentSubProg.totalExercisesAnswered + totalExercisesAnswered,
    correctExercisesCount: currentSubProg.correctExercisesCount + correctExercisesCount,
    lastSessionAt: nowIso,
  };

  // Mettre à jour la progression globale (l'alternance n'avance qu'en fin de séance : markSessionAlternation)
  writeSubjectProgress(currentMap, subjectId, gradeLevel, {
    ...prog,
    gradeLevel,
    subCategories: {
      ...existingSubCategories,
      [subCategory]: updatedSubProg,
    },
    totalExercisesAnswered: prog.totalExercisesAnswered + totalExercisesAnswered,
    correctExercisesCount: prog.correctExercisesCount + correctExercisesCount,
    lastSessionAt: nowIso,
  });

  saveStudentProgressMap(userId, currentMap);
}
