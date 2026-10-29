// ============================================================================
// KONAN CURRICULUM & INTERACTIVE TUTOR (Système Éducatif de Côte d'Ivoire)
// ============================================================================

export type CurriculumGradeLevel =
  // Collège (6ème à 3ème)
  | '6eme'
  | '5eme'
  | '4eme'
  | '3eme'
  // Lycée - Seconde
  | 'seconde_c'
  | 'seconde_a'
  // Lycée - Première (Séparation stricte A1 / A2)
  | 'premiere_c'
  | 'premiere_d'
  | 'premiere_a1'
  | 'premiere_a2'
  | 'premiere_a' // Rétrocompatibilité
  // Lycée - Terminale (Séparation stricte A1 / A2)
  | 'terminale_c'
  | 'terminale_d'
  | 'terminale_a1'
  | 'terminale_a2'
  | 'terminale_a' // Rétrocompatibilité
  // Supérieur (LMD, BTS, Prépa)
  | 'superieur_lmd'
  | 'superieur_bts';

export interface GradeLevelMeta {
  id: CurriculumGradeLevel;
  label: string;
  category: 'college' | 'lycee' | 'superieur';
  badge: string;
  description: string;
}

export const GRADE_LEVELS: GradeLevelMeta[] = [
  // Collège (Côte d'Ivoire)
  {
    id: '6eme',
    label: 'Classe de 6ème',
    category: 'college',
    badge: '6ème',
    description: 'Premier cycle du Collège — 120h/an (4h/semaine)',
  },
  {
    id: '5eme',
    label: 'Classe de 5ème',
    category: 'college',
    badge: '5ème',
    description: 'Premier cycle du Collège — 120h/an (4h/semaine)',
  },
  {
    id: '4eme',
    label: 'Classe de 4ème',
    category: 'college',
    badge: '4ème',
    description: 'Premier cycle du Collège — 120h/an (4h/semaine)',
  },
  {
    id: '3eme',
    label: 'Classe de 3ème',
    category: 'college',
    badge: '3ème',
    description: 'Préparation officielle au BEPC — 120h/an (4h/semaine)',
  },
  // Lycée - Seconde
  {
    id: 'seconde_c',
    label: 'Seconde C (Scientifique)',
    category: 'lycee',
    badge: '2nde C',
    description: 'Tronc commun scientifique — 150h/an (5h/semaine)',
  },
  {
    id: 'seconde_a',
    label: 'Seconde A (Littéraire générale)',
    category: 'lycee',
    badge: '2de A',
    description: 'Enseignement général littéraire — 90h/an (3h/semaine)',
  },
  // Lycée - Première
  {
    id: 'premiere_c',
    label: 'Première C (Sciences Exactes)',
    category: 'lycee',
    badge: '1ère C',
    description: 'Mathématiques avancées et Physique-Chimie — 180h/an (6h/semaine)',
  },
  {
    id: 'premiere_d',
    label: 'Première D (Sciences Expérimentales)',
    category: 'lycee',
    badge: '1ère D',
    description: 'Maths, Sciences Physiques et SVT — 150h/an (5h/semaine)',
  },
  {
    id: 'premiere_a1',
    label: 'Première A1 (Littéraire Approfondie)',
    category: 'lycee',
    badge: '1re A1',
    description: 'Programme approfondi en Mathématiques — 120h/an (4h/semaine)',
  },
  {
    id: 'premiere_a2',
    label: 'Première A2 (Littéraire Classique)',
    category: 'lycee',
    badge: '1re A2',
    description: 'Programme standard en Mathématiques — 90h/an (3h/semaine)',
  },
  // Lycée - Terminale
  {
    id: 'terminale_c',
    label: 'Terminale C (Scientifique Pure)',
    category: 'lycee',
    badge: 'Tle C',
    description: 'Baccalauréat Série C (19 chapitres) — 240h/an (8h/semaine)',
  },
  {
    id: 'terminale_d',
    label: 'Terminale D (Sciences de la Nature)',
    category: 'lycee',
    badge: 'Tle D',
    description: 'Baccalauréat Série D (12 chapitres) — 180h/an (6h/semaine)',
  },
  {
    id: 'terminale_a1',
    label: 'Terminale A1 (Littéraire & Maths)',
    category: 'lycee',
    badge: 'Tle A1',
    description: 'Bac Série A1 (8 chapitres avec Primitives et Intégrales) — 150h/an (5h/semaine)',
  },
  {
    id: 'terminale_a2',
    label: 'Terminale A2 (Littéraire Pure)',
    category: 'lycee',
    badge: 'Tle A2',
    description: 'Bac Série A2 (7 chapitres sans intégrales) — 120h/an (4h/semaine)',
  },
  // Supérieur
  {
    id: 'superieur_lmd',
    label: 'Licence Universitaire (LMD)',
    category: 'superieur',
    badge: 'LMD',
    description: 'Universités & Grandes Écoles (ESATIC, INP-HB, UFHB, etc.)',
  },
  {
    id: 'superieur_bts',
    label: 'BTS / Prépa Grandes Écoles',
    category: 'superieur',
    badge: 'BTS / Prépa',
    description: 'Brevet de Technicien Supérieur et Classes Préparatoires',
  },
];

export type StemSubjectId = 'maths' | 'physique_chimie' | 'svt';

export interface StemSubjectMeta {
  id: StemSubjectId;
  name: string;
  color: string;
  iconName: 'Calculator' | 'Atom' | 'Dna';
  aliases: string[]; // Variantes courantes dans les EDT (ex: 'SP', 'MATH', 'CHIMIE')
}

export const STEM_SUBJECTS: Record<StemSubjectId, StemSubjectMeta> = {
  maths: {
    id: 'maths',
    name: 'Mathématiques',
    color: '#3B82F6', // Blue
    iconName: 'Calculator',
    aliases: [
      'maths',
      'math',
      'mathematiques',
      'mathématiques',
      'analyse',
      'algebre',
      'algèbre',
      'geometrie',
      'géométrie',
      'mth',
    ],
  },
  physique_chimie: {
    id: 'physique_chimie',
    name: 'Physique-Chimie',
    color: '#8B5CF6', // Purple
    iconName: 'Atom',
    aliases: [
      'physique',
      'chimie',
      'physique-chimie',
      'physique chimie',
      'sciences physiques',
      'sp',
      'phys',
      'chim',
      'pc',
    ],
  },
  svt: {
    id: 'svt',
    name: 'SVT (Sciences de la Vie et de la Terre)',
    color: '#10B981', // Emerald
    iconName: 'Dna',
    aliases: [
      'svt',
      'biologie',
      'sciences naturelles',
      'sciences de la vie et de la terre',
      'bio',
    ],
  },
};

// ============================================================================
// MICRO-EXERCICES INTERACTIFS (STYLE DUOLINGO)
// ============================================================================

export type ExerciseType = 'mcq' | 'true_false' | 'formula_blank' | 'numeric_input';

export interface PointVisualSchema {
  type: 'geometry_svg' | 'variation_table' | 'sign_table' | 'probability_tree' | 'coordinate_system' | 'custom_svg';
  title?: string;
  caption?: string;
  svgContent?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export interface InteractiveExercise {
  id: string;
  type: ExerciseType;
  prompt: string;
  codeSnippet?: string;
  visualSchema?: PointVisualSchema;
  options?: string[]; // Pour QCM / Vrai-Faux
  correctAnswerIndex?: number; // Index de la bonne option (0, 1, 2, 3...)
  correctAnswerText?: string; // Pour les réponses numériques ou formules textuelles
  explanation: string; // Explication pédagogique immédiate affichée après validation
  hint?: string;
}

export interface PointFormula {
  name: string;
  formula: string;
  note?: string;
}

export interface PointWorkedExample {
  title: string;
  statement: string;
  methodSteps: string[];
  conclusion: string;
  visualSchema?: PointVisualSchema;
}

export interface CurriculumPoint {
  id: string;
  order: number;
  title: string;
  summary: string;
  conceptExplanation: string; // Explication pédagogique complète et détaillée du concept (fini les cours d'une ligne)
  formulas?: PointFormula[]; // Formules, théorèmes ou propriétés clés mis en évidence
  keyRule?: string; // Règle d'or ou réflexe d'examen
  workedExample: PointWorkedExample; // Exemple concret résolu pas à pas avec méthode détaillée
  visualSchema?: PointVisualSchema; // Support visuel (figure géométrique SVG, tableau de signes/variations, arbre de probabilité)
  exercises: InteractiveExercise[]; // Exactement 8 questions à valider (règle stricte du 8/8)
  exercise?: InteractiveExercise; // Rétrocompatibilité
}

export interface CurriculumChapter {
  id: string;
  subjectId: StemSubjectId;
  gradeLevel: CurriculumGradeLevel;
  order: number; // 1, 2, 3... ordre officiel du ministère (2025-2026)
  title: string;
  summary: string;
  officialVolumeHours?: number; // Volume horaire officiel (ex: 15h, 27h...)
  prerequisiteChapterIds?: string[]; // IDs des chapitres antérieurs requis pour les rappels en spirale
  points: CurriculumPoint[];
}

/**
 * Quota strict de points essentiels (mini-leçons) requis selon la durée prévue dans l'emploi du temps
 */
export function getRequiredPointsCountForDuration(durationMinutes: number): number {
  if (durationMinutes <= 30) {
    return 3; // Séance de 25 minutes = 3 mini-leçons à 8/8 obligatoires
  }
  if (durationMinutes <= 50) {
    return 5; // Séance de 45 minutes = 5 mini-leçons à 8/8 obligatoires
  }
  // Séance plus longue (60 à 75 minutes) = 6 mini-leçons à 8/8 obligatoires
  return 6;
}

export interface TutorPointSessionItem {
  point: CurriculumPoint;
  chapterId: string;
  chapterTitle: string;
  chapterOrder: number;
  pointIndexInChapter: number;
  isLastPointOfChapter: boolean;
  totalPointsInChapter: number;
}

// ============================================================================
// ÉTAT DE PROGRESSION DE L'ÉLÈVE (SAUVEGARDÉ PAR MATIÈRE)
// ============================================================================

export interface SubjectStudentProgress {
  subjectId: StemSubjectId;
  gradeLevel: CurriculumGradeLevel;
  positioningCompleted: boolean; // Si l'élève a déjà répondu "Vous êtes arrivés sur quel chapitre ?"
  currentChapterId: string;
  currentPointIndex: number; // Index du point courant dans le chapitre en cours
  masteredPointIds: string[];
  completedChapterIds: string[];
  totalExercisesAnswered: number;
  correctExercisesCount: number;
  lastSessionAt?: string;
}

export type StudentCurriculumProgressMap = Partial<Record<StemSubjectId, SubjectStudentProgress>>;

export interface TutorSessionPayload {
  subjectId: StemSubjectId;
  subjectName: string;
  gradeLevel: CurriculumGradeLevel;
  itemsToReview: TutorPointSessionItem[];
  targetPointsCount: number;
  durationMinutes: number;
  chapter?: CurriculumChapter; // Rétrocompatibilité
  pointsToReview?: CurriculumPoint[]; // Rétrocompatibilité
}

