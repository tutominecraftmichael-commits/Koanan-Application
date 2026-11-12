import type {
  CurriculumChapter,
  CurriculumGradeLevel,
  StemSubjectId,
  StemSubCategory,
  ResumeBookmark,
  StudentCurriculumProgressMap,
  SubjectStudentProgress,
  SubCategoryStudentProgress,
  TutorPointSessionItem,
  TutorSessionPayload,
} from './types';
import { END_OF_CHAPTER_MARKER, getSessionMiniLessonQuota } from './types';
import { getCurriculumChapterById, getCurriculumChapters, normalizeGradeForLookup } from './curriculumRegistry';
import { isChimieChapter } from './curriculumExpander';
import { voletFromSubjectName } from './curriculumMatcher';
import { notifyLearningChanged } from './learningEvents';
import { getReviewMap } from './reviewMemory';

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
  progressMap: StudentCurriculumProgressMap,
  options: { silent?: boolean } = {}
): void {
  try {
    localStorage.setItem(
      `${PROGRESS_STORAGE_PREFIX}${userId}`,
      JSON.stringify(progressMap)
    );
  } catch {
    // Ignore
  }
  // Copie dans le compte de l'élève (suivi sur tous ses appareils), sauf quand elle vient du compte
  if (!options.silent) notifyLearningChanged(userId);
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
/** En Terminale A (A1 et A2), le programme de Mathématiques est à volet unique (uniquement numérique, sans géométrie). */
export function isTerminaleAGrade(gradeLevel?: CurriculumGradeLevel): boolean {
  return gradeLevel === 'terminale_a' || gradeLevel === 'terminale_a1' || gradeLevel === 'terminale_a2';
}

/** Matières à un seul volet (pas d'alternance Chimie/Physique ou Géométrie/Numérique). */
export function isSingleVoletSubject(subjectId: StemSubjectId, gradeLevel?: CurriculumGradeLevel): boolean {
  if (subjectId === 'maths' && isTerminaleAGrade(gradeLevel)) return true;
  return subjectId === 'svt' || subjectId === 'francais' || subjectId === 'philosophie';
}

/** Matières à deux volets alternés : Physique ↔ Chimie, Géométrie ↔ Numérique, Histoire ↔ Géographie. */
export function isTwoVoletSubject(subjectId: StemSubjectId, gradeLevel?: CurriculumGradeLevel): boolean {
  if (subjectId === 'maths' && isTerminaleAGrade(gradeLevel)) return false;
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

export function getSubCategoryName(subCategory: StemSubCategory, gradeLevel?: CurriculumGradeLevel): string {
  if ((subCategory === 'numerique' || subCategory === 'geometrie') && isTerminaleAGrade(gradeLevel)) {
    return 'Mathématiques';
  }
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

export function getSubCategoryQuestion(subCategory: StemSubCategory, gradeLevel?: CurriculumGradeLevel): string {
  if ((subCategory === 'numerique' || subCategory === 'geometrie') && isTerminaleAGrade(gradeLevel)) {
    return 'À quelle leçon êtes-vous arrivés en Mathématiques ?';
  }
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
  if (isSingleVoletSubject(subjectId, gradeLevel)) return defaultSubCategoryFor(subjectId);

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
  subCategory: StemSubCategory,
  gradeLevel?: CurriculumGradeLevel
): CurriculumChapter[] {
  let subChapters = allChapters.filter(c => getChapterSubCategory(c) === subCategory);
  if (subChapters.length === 0 && isSingleVoletSubject(subjectId, gradeLevel)) {
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
 * Mini-leçons du volet à réviser, de la plus utile à la moins utile, d'après la mémoire de KONAN :
 *  1. celles où l'élève a encore des questions ratées (les plus nombreuses d'abord) ;
 *  2. puis celles revues il y a le plus longtemps (jamais revues = en premier).
 * À égalité, l'ordre du programme est conservé.
 */
export function rankRevisionPoints(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  subChapters: CurriculumChapter[],
  exclude: Set<string> = new Set()
): { chapter: CurriculumChapter; index: number }[] {
  const stats = new Map<string, { ko: number; lastSeen: number }>();
  try {
    const grade = normalizeGradeForLookup(gradeLevel);
    for (const e of Object.values(getReviewMap(userId))) {
      if (e.subject !== subjectId || normalizeGradeForLookup(e.grade) !== grade) continue;
      const s = stats.get(e.pointId) || { ko: 0, lastSeen: 0 };
      if (e.lastResult === 'ko') s.ko += 1;
      s.lastSeen = Math.max(s.lastSeen, e.updatedAt || 0);
      stats.set(e.pointId, s);
    }
  } catch {
    // mémoire illisible : ordre du programme
  }
  const list: { chapter: CurriculumChapter; index: number; rank: number; ko: number; lastSeen: number }[] = [];
  let rank = 0;
  for (const chapter of subChapters) {
    chapter.points.forEach((p, index) => {
      if (exclude.has(p.id)) return;
      const s = stats.get(p.id);
      list.push({ chapter, index, rank: rank++, ko: s?.ko ?? 0, lastSeen: s?.lastSeen ?? 0 });
    });
  }
  list.sort((a, b) => b.ko - a.ko || a.lastSeen - b.lastSeen || a.rank - b.rank);
  return list.map(({ chapter, index }) => ({ chapter, index }));
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
  requestedSubCategory?: StemSubCategory,
  /** Mini-leçons déjà faites pendant cette séance (prolongation Pomodoro) : jamais reproposées. */
  excludePointIds: Set<string> = new Set()
): BuildTutorSessionResult {
  // Matière inscrite « Histoire » ou « Géographie » (et non « HG ») : ce volet seul, sans alternance
  const voletImposedByName = voletFromSubjectName(subjectId, subjectName);
  if (voletImposedByName) requestedSubCategory = voletImposedByName;

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
      subCategoryName: getSubCategoryName(sub, gradeLevel),
      subCategoryQuestion: getSubCategoryQuestion(sub, gradeLevel),
    };
  }

  // RÈGLE 1 : Si aucun volet n'est spécifié et que l'élève n'a jamais validé de mini-leçon dans cette matière à double volet
  const computedSubCategory = getActiveSubCategoryForSession(userId, subjectId, gradeLevel);
  // On ne demande le volet que si les deux volets ont réellement des cours pour cette classe
  const firstVolet = defaultSubCategoryFor(subjectId);
  const secondVolet = SIBLING_SUBCATEGORY[firstVolet];
  const bothVoletsHaveContent = Boolean(secondVolet)
    && chaptersOfSubCategory(allChapters, subjectId, firstVolet, gradeLevel).length > 0
    && chaptersOfSubCategory(allChapters, subjectId, secondVolet!, gradeLevel).length > 0;
  const needsVoletChoice = !requestedSubCategory && computedSubCategory === null && bothVoletsHaveContent && isTwoVoletSubject(subjectId, gradeLevel);

  if (needsVoletChoice) {
    const defaultSub = defaultSubCategoryFor(subjectId);
    return {
      noContentAvailable: false,
      needsVoletChoice: true,
      needsPositioning: false,
      isSecondSessionAlternance: false,
      availableChapters: [],
      subCategory: defaultSub,
      subCategoryName: getSubCategoryName(defaultSub, gradeLevel),
      subCategoryQuestion: subjectId === 'maths'
        ? 'Par quel domaine souhaites-tu commencer aujourd’hui ?'
        : 'Par quel volet souhaites-tu commencer aujourd’hui ?',
    };
  }

  let activeSubCategory: StemSubCategory = requestedSubCategory || computedSubCategory || defaultSubCategoryFor(subjectId);
  let subChapters = chaptersOfSubCategory(allChapters, subjectId, activeSubCategory, gradeLevel);

  // Si ce volet n'a pas encore de cours pour cette classe, basculer sur le volet jumeau qui en a
  // (jamais pour une matière nommée « Histoire » ou « Géographie » : pas d'Histoire dans un créneau de Géographie)
  if (subChapters.length === 0 && !voletImposedByName) {
    const sibling = SIBLING_SUBCATEGORY[activeSubCategory];
    const siblingChapters = sibling ? chaptersOfSubCategory(allChapters, subjectId, sibling, gradeLevel) : [];
    if (sibling && siblingChapters.length > 0) {
      activeSubCategory = sibling;
      subChapters = siblingChapters;
    }
  }

  const subCategoryName = getSubCategoryName(activeSubCategory, gradeLevel);
  const subCategoryQuestion = getSubCategoryQuestion(activeSubCategory, gradeLevel);

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
  const isSecondSessionAlternance = hasPreviousSession && !isPositioned && !voletImposedByName
    && activeSubCategory !== subjectProgress?.lastAlternatedSubCategory
    && isTwoVoletSubject(subjectId, gradeLevel);
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
  const itemsToReview: TutorPointSessionItem[] = [];
  const seenPointIds = new Set<string>(excludePointIds);
  const chapterForSession = activeChapter;
  let totalSteps = 0;

  /** Ajoute une mini-leçon si elle tient dans la séance ; renvoie false quand la séance est pleine. */
  const tryAdd = (chapter: CurriculumChapter, index: number, isReview: boolean): boolean => {
    if (itemsToReview.length >= quota.max) return false;
    const point = chapter.points[index];
    const steps = point.structuredSteps?.length || point.exercises?.length || 8;
    // Dans la fourchette (ex. 4 à 5), on n'ajoute une mini-leçon de plus que si elle tient dans le budget d'étapes
    if (itemsToReview.length >= quota.min && totalSteps + steps > quota.stepBudget) return false;
    if (seenPointIds.has(point.id)) return true;
    seenPointIds.add(point.id);
    totalSteps += steps;
    itemsToReview.push({
      point,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      chapterOrder: chapter.order,
      pointIndexInChapter: index,
      isLastPointOfChapter: index === chapter.points.length - 1,
      totalPointsInChapter: chapter.points.length,
      ...(isReview ? { isReview: true } : {}),
    });
    return true;
  };

  // 1. Nouvelles mini-leçons, dans l'ordre du programme, jusqu'à la fin du volet
  if (!isRevision) {
    let cursorChapter: CurriculumChapter | undefined = activeChapter;
    let full = false;
    while (cursorChapter && !full) {
      for (let i = ptIdx; i < cursorChapter.points.length; i++) {
        if (!tryAdd(cursorChapter, i, false)) { full = true; break; }
      }
      const cursorIdx = subChapters.findIndex(c => c.id === cursorChapter!.id);
      cursorChapter = subChapters.slice(cursorIdx + 1).find(c => c.points.length > 0);
      ptIdx = 0;
    }
  }

  // 2. Volet terminé (ou séance pas encore remplie) : révision de TOUT le volet, pas du dernier chapitre.
  //    KONAN choisit d'abord les mini-leçons où l'élève a fait le plus d'erreurs, puis celles revues il y a
  //    le plus longtemps : chaque séance de révision tourne sur des leçons différentes.
  //    Ces mini-leçons ne font jamais reculer la progression de l'élève.
  if (itemsToReview.length < quota.min || isRevision) {
    for (const cand of rankRevisionPoints(userId, subjectId, gradeLevel, subChapters, seenPointIds)) {
      if (!tryAdd(cand.chapter, cand.index, true)) break;
    }
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
 * Marque-page d'un volet (ex. Physique) : séance arrêtée au milieu d'une mini-leçon.
 * Chaque volet a le sien : Physique et Chimie reprennent chacun là où ils s'étaient arrêtés.
 */
export function saveResumeBookmark(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  subCategory: StemSubCategory,
  bookmark: ResumeBookmark | null
): void {
  const currentMap = getStudentProgressMap(userId);
  const prog = readSubjectProgress(currentMap, subjectId, gradeLevel);
  const subProg = prog?.subCategories?.[subCategory];
  if (!prog || !subProg) return;
  if (!bookmark && !subProg.resume) return; // rien à effacer
  const nowIso = new Date().toISOString();
  const nextSub: SubCategoryStudentProgress = { ...subProg, lastSessionAt: nowIso };
  if (bookmark) nextSub.resume = bookmark;
  else delete nextSub.resume;
  writeSubjectProgress(currentMap, subjectId, gradeLevel, {
    ...prog,
    lastSessionAt: nowIso,
    subCategories: { ...(prog.subCategories || {}), [subCategory]: nextSub },
  });
  saveStudentProgressMap(userId, currentMap);
}

export function readResumeBookmark(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  subCategory: StemSubCategory
): ResumeBookmark | null {
  const prog = readSubjectProgress(getStudentProgressMap(userId), subjectId, gradeLevel);
  return prog?.subCategories?.[subCategory]?.resume ?? null;
}

/** Points déjà maîtrisés d'un volet (pour les questions faciles de démarrage de la règle des 2 minutes). */
export function getMasteredPointIds(
  userId: string,
  subjectId: StemSubjectId,
  gradeLevel: CurriculumGradeLevel,
  subCategory: StemSubCategory
): string[] {
  const prog = readSubjectProgress(getStudentProgressMap(userId), subjectId, gradeLevel);
  return prog?.subCategories?.[subCategory]?.masteredPointIds ?? [];
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
  // Date mise à jour : sur un autre téléphone, la fusion avec le compte garde bien cette alternance
  writeSubjectProgress(currentMap, subjectId, gradeLevel, { ...prog, lastAlternatedSubCategory: subCategory, lastSessionAt: new Date().toISOString() });
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
  const subChapters = chaptersOfSubCategory(allChapters, subjectId, subCategory, gradeLevel);

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

  // Marquer un chapitre comme terminé UNIQUEMENT lorsque TOUTES ses mini-leçons sont maîtrisées.
  // La fin d'un chapitre ne doit JAMAIS être décrétée sur une seule mini-leçon isolée :
  // l'élève doit avoir validé l'ensemble des points clés du chapitre (ex: 3, 4, 5 ou 7 mini-leçons).
  for (const item of completedItems) {
    const chapterObj = subChapters.find(c => c.id === item.chapterId) || allChapters.find(c => c.id === item.chapterId);
    if (chapterObj && !updatedCompletedChapters.includes(item.chapterId)) {
      const allPointsMastered = chapterObj.points.length > 0 &&
        chapterObj.points.every(p => updatedMastered.includes(p.id));
      if (allPointsMastered) {
        updatedCompletedChapters.push(item.chapterId);
      }
    }
  }

  // Calculer la prochaine position de l'élève dans cette sous-catégorie (par identifiant de point)
  // Les mini-leçons de révision ajoutées en fin de programme ne déplacent pas la position
  // (la séance enregistre une mini-leçon à la fois : une révision seule laisse la position telle quelle)
  const progressItems = completedItems.filter(item => !item.isReview);
  const onlyReview = progressItems.length === 0;
  const lastItem = onlyReview ? completedItems[completedItems.length - 1] : progressItems[progressItems.length - 1];
  const lastChapter = onlyReview ? undefined : subChapters.find(c => c.id === lastItem.chapterId);
  let nextChapterId = onlyReview ? currentSubProg.currentChapterId : lastItem.chapterId;
  let nextPointIndex = onlyReview ? currentSubProg.currentPointIndex : lastItem.pointIndexInChapter + 1;
  let nextPointId: string | undefined = onlyReview ? currentSubProg.currentPointId : END_OF_CHAPTER_MARKER;

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
