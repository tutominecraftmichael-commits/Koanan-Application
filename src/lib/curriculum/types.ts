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
  // Supérieur (Filières LMD prédéfinies avec niveau + rétrocompatibilité)
  | 'lmd_entd_l1'
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
  // Collège (Côte d'Ivoire) - Classe d'examen BEPC
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
    id: 'lmd_entd_l1',
    label: 'ENTD — Licence 1 (L1)',
    category: 'superieur',
    badge: 'ENTD L1',
    description: 'Économie Numérique et Transformation Digitale — Licence 1 (24 matières)',
  },
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

export type LyceeSubjectId = 'maths' | 'physique_chimie' | 'svt' | 'francais' | 'histoire_geo' | 'philosophie';

export type LmdSubjectId =
  // Lot 1 : Maths, Info & Réseaux
  | 'lmd_algorithmique'
  | 'lmd_algebre'
  | 'lmd_analyse'
  | 'lmd_logique_math'
  | 'lmd_stat_descriptive'
  | 'lmd_reseaux'
  // Lot 2 : Économie, Numérique & Finance
  | 'lmd_intro_eco_num'
  | 'lmd_modele_dev_eco_num'
  | 'lmd_macroeconomie'
  | 'lmd_microeconomie'
  | 'lmd_banque'
  | 'lmd_assurance'
  // Lot 3 : Gestion, Comptabilité & Droit
  | 'lmd_compta_generale'
  | 'lmd_compta_analytique'
  | 'lmd_oge'
  | 'lmd_intro_management'
  | 'lmd_intro_marketing'
  | 'lmd_intro_droit_num'
  | 'lmd_droit_numerique'
  // Lot 4 : Bureautique, Digital & Communication
  | 'lmd_bureautique'
  | 'lmd_init_info'
  | 'lmd_tef'
  | 'lmd_ecriture_creative'
  | 'lmd_dev_perso';

export type StemSubjectId = LyceeSubjectId | LmdSubjectId;

export const LYCEE_SUBJECT_IDS: LyceeSubjectId[] = [
  'maths',
  'physique_chimie',
  'svt',
  'francais',
  'histoire_geo',
  'philosophie',
];

export const LMD_SUBJECT_IDS: LmdSubjectId[] = [
  // Ordre prioritaire pour éviter toute collision entre intitulés proches
  // (ex: Intro au Droit du Numérique avant Droit du Numérique, Compta Analytique avant Compta Générale,
  // Modèle de Développement en Éco Numérique avant Intro à l'Éco Numérique)
  'lmd_intro_droit_num',
  'lmd_droit_numerique',
  'lmd_modele_dev_eco_num',
  'lmd_intro_eco_num',
  'lmd_compta_analytique',
  'lmd_compta_generale',
  'lmd_algorithmique',
  'lmd_algebre',
  'lmd_analyse',
  'lmd_logique_math',
  'lmd_stat_descriptive',
  'lmd_reseaux',
  'lmd_macroeconomie',
  'lmd_microeconomie',
  'lmd_banque',
  'lmd_assurance',
  'lmd_oge',
  'lmd_intro_management',
  'lmd_intro_marketing',
  'lmd_bureautique',
  'lmd_init_info',
  'lmd_tef',
  'lmd_ecriture_creative',
  'lmd_dev_perso',
];

export interface StemSubjectMeta {
  id: StemSubjectId;
  name: string;
  color: string;
  iconName: 'Calculator' | 'Atom' | 'Dna' | 'BookOpen';
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
      'sc physiques',
      'physiques',
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
      'sn',
    ],
  },
  francais: {
    id: 'francais',
    name: 'Français',
    color: '#EC4899', // Rose/fuchsia littéraire
    iconName: 'BookOpen',
    aliases: [
      'francais',
      'français',
      'expression ecrite',
      'expression écrite',
      'litterature',
      'littérature',
      'commentaire compose',
      'commentaire composé',
      'production ecrite',
      'production écrite',
      'lettres',
      'fr',
      // Activités de français qui apparaissent séparément dans certains emplois du temps
      'grammaire',
      'orthographe',
      'conjugaison',
      'vocabulaire',
      'lecture',
      'lecture methodique',
      'lecture méthodique',
    ],
  },
  histoire_geo: {
    id: 'histoire_geo',
    name: 'Histoire-Géographie',
    color: '#F59E0B', // Ambre
    iconName: 'BookOpen',
    aliases: [
      'histoire',
      'geographie',
      'géographie',
      'histoire geographie',
      'histoire-géographie',
      'histoire géographie',
      'hist geo',
      'hist-geo',
      'hg',
      'h-g',
      'geo',
      'hist',
    ],
  },
  philosophie: {
    id: 'philosophie',
    name: 'Philosophie',
    color: '#0EA5E9', // Bleu ciel
    iconName: 'BookOpen',
    aliases: [
      'philosophie',
      'philo',
      'philosophy',
    ],
  },
  // ==========================================================================
  // MATIÈRES LMD — ENTD 1 (Économie Numérique et Transformation Digitale L1)
  // ==========================================================================
  lmd_algorithmique: {
    id: 'lmd_algorithmique',
    name: 'Algorithmique',
    color: '#2563EB',
    iconName: 'Calculator',
    aliases: ['algorithmique', 'algorithme', 'algo', 'programmation', 'algorithmique et programmation'],
  },
  lmd_algebre: {
    id: 'lmd_algebre',
    name: 'Algèbre',
    color: '#3B82F6',
    iconName: 'Calculator',
    aliases: ['algebre', 'algèbre', 'algebre 1', 'algebre1', 'algebre lineaire', 'arithmetique'],
  },
  lmd_analyse: {
    id: 'lmd_analyse',
    name: 'Analyse',
    color: '#1D4ED8',
    iconName: 'Calculator',
    aliases: ['analyse', 'analyse 1', 'analyse1', 'analyse mathematique', 'calcul differentiel'],
  },
  lmd_logique_math: {
    id: 'lmd_logique_math',
    name: 'Logique et Raisonnement Mathématique',
    color: '#4F46E5',
    iconName: 'Calculator',
    aliases: ['logique', 'logique et raisonnement mathematique', 'logique mathematique', 'raisonnement mathematique', 'maths 1', 'math 1'],
  },
  lmd_stat_descriptive: {
    id: 'lmd_stat_descriptive',
    name: 'Statistique Descriptive',
    color: '#0284C7',
    iconName: 'Calculator',
    aliases: ['statistique descriptive', 'statistiques descriptives', 'statistique', 'statistiques', 'stats', 'stat'],
  },
  lmd_reseaux: {
    id: 'lmd_reseaux',
    name: 'Réseaux',
    color: '#0891B2',
    iconName: 'Atom',
    aliases: ['reseaux', 'réseaux', 'reseau', 'réseau', 'rsx', 'reseaux informatiques', 'architecture reseaux'],
  },
  lmd_intro_eco_num: {
    id: 'lmd_intro_eco_num',
    name: "Intro à l'Éco Numérique",
    color: '#0EA5E9',
    iconName: 'BookOpen',
    aliases: [
      'intro a l eco numerique',
      'introduction a l economie numerique',
      'intro economie numerique',
      'intro eco numerique',
      'economie numerique',
      'eco numerique',
      'economie digitale',
    ],
  },
  lmd_modele_dev_eco_num: {
    id: 'lmd_modele_dev_eco_num',
    name: 'Modèle de Développement en Économie Numérique',
    color: '#0369A1',
    iconName: 'BookOpen',
    aliases: [
      'modele de developpement en economie numerique',
      'modeles de developpement en economie numerique',
      'modele de developpement',
      'modele developpement eco numerique',
      'mden',
    ],
  },
  lmd_macroeconomie: {
    id: 'lmd_macroeconomie',
    name: 'Macroéconomie',
    color: '#D97706',
    iconName: 'Calculator',
    aliases: ['macroeconomie', 'macroéconomie', 'macro', 'macro 1', 'macro 2', 'macro1', 'macro2'],
  },
  lmd_microeconomie: {
    id: 'lmd_microeconomie',
    name: 'Microéconomie',
    color: '#EA580C',
    iconName: 'Calculator',
    aliases: ['microeconomie', 'microéconomie', 'micro', 'micro 1', 'micro 2', 'micro1', 'micro2'],
  },
  lmd_banque: {
    id: 'lmd_banque',
    name: 'Banque',
    color: '#16A34A',
    iconName: 'BookOpen',
    aliases: ['banque', 'economie bancaire', 'technique bancaire', 'techniques bancaires', 'monnaie et banque'],
  },
  lmd_assurance: {
    id: 'lmd_assurance',
    name: 'Assurance',
    color: '#059669',
    iconName: 'BookOpen',
    aliases: ['assurance', 'assurances', 'techniques d assurance', 'droit des assurances'],
  },
  lmd_compta_generale: {
    id: 'lmd_compta_generale',
    name: 'Comptabilité Générale',
    color: '#10B981',
    iconName: 'Calculator',
    aliases: [
      'comptabilite generale',
      'comptabilité générale',
      'compta generale',
      'compta g1',
      'compta g2',
      'comptabilite g1',
      'comptabilite g2',
      'comptabilite',
      'compta',
    ],
  },
  lmd_compta_analytique: {
    id: 'lmd_compta_analytique',
    name: 'Comptabilité Analytique',
    color: '#14B8A6',
    iconName: 'Calculator',
    aliases: [
      'comptabilite analytique',
      'comptabilité analytique',
      'compta analytique',
      'comptabilite analytique de gestion',
      'cae',
      'cag',
    ],
  },
  lmd_oge: {
    id: 'lmd_oge',
    name: 'OGE',
    color: '#7C3AED',
    iconName: 'BookOpen',
    aliases: [
      'oge',
      'organisation et gestion des entreprises',
      'organisation et gestion d entreprise',
      'organisation gestion entreprise',
      'gestion des entreprises',
    ],
  },
  lmd_intro_management: {
    id: 'lmd_intro_management',
    name: 'Intro au Management',
    color: '#8B5CF6',
    iconName: 'BookOpen',
    aliases: ['intro au management', 'introduction au management', 'management', 'principes de management'],
  },
  lmd_intro_marketing: {
    id: 'lmd_intro_marketing',
    name: 'Intro au Marketing',
    color: '#EC4899',
    iconName: 'BookOpen',
    aliases: ['intro au marketing', 'introduction au marketing', 'marketing', 'marketing fondamental', 'marketing digital'],
  },
  lmd_intro_droit_num: {
    id: 'lmd_intro_droit_num',
    name: 'Intro au Droit du Numérique',
    color: '#9333EA',
    iconName: 'BookOpen',
    aliases: [
      'intro au droit du numerique',
      'introduction au droit du numerique',
      'intro droit numerique',
      'intro droit du numerique',
    ],
  },
  lmd_droit_numerique: {
    id: 'lmd_droit_numerique',
    name: 'Droit du Numérique',
    color: '#6D28D9',
    iconName: 'BookOpen',
    aliases: [
      'droit du numerique',
      'droit numérique',
      'droit numerique',
      'droit des tic',
      'droit informatique',
      'cyberdroit',
    ],
  },
  lmd_bureautique: {
    id: 'lmd_bureautique',
    name: 'Bureautique',
    color: '#06B6D4',
    iconName: 'Atom',
    aliases: ['bureautique', 'outils bureautiques', 'traitement de texte', 'ms office', 'word excel'],
  },
  lmd_init_info: {
    id: 'lmd_init_info',
    name: "Initiation à l'Informatique",
    color: '#0284C7',
    iconName: 'Atom',
    aliases: [
      'initiation a l informatique',
      'initiation informatique',
      'init informatique',
      'culture numerique',
      'communication numerique',
      'communication digitale',
      'informatique generale',
      'informatique',
    ],
  },
  lmd_tef: {
    id: 'lmd_tef',
    name: "Technique d'Expression Française",
    color: '#F43F5E',
    iconName: 'BookOpen',
    aliases: [
      'technique d expression francaise',
      'techniques d expression francaise',
      'technique d expression',
      'techniques d expression',
      'tef',
      'tef s1',
      'tef s2',
      'expression francaise',
      'expression ecrite et orale',
    ],
  },
  lmd_ecriture_creative: {
    id: 'lmd_ecriture_creative',
    name: 'Écriture Créative et Communication',
    color: '#FB7185',
    iconName: 'BookOpen',
    aliases: [
      'ecriture creative et communication',
      'ecriture creative',
      'redaction creative',
      'communication professionnelle',
    ],
  },
  lmd_dev_perso: {
    id: 'lmd_dev_perso',
    name: 'Développement Personnel',
    color: '#F59E0B',
    iconName: 'BookOpen',
    aliases: [
      'developpement personnel',
      'développement personnel',
      'dev perso',
      'dev personnel',
      'developpement perso',
      'soft skills',
    ],
  },
};

// ============================================================================
// MICRO-EXERCICES INTERACTIFS (STYLE DUOLINGO)
// ============================================================================

export type ExerciseType = 'mcq' | 'true_false' | 'formula_blank' | 'numeric_input';

export interface PointVisualSchema {
  type:
    | 'geometry_svg'
    | 'variation_table'
    | 'sign_table'
    | 'probability_tree'
    | 'coordinate_system'
    | 'custom_svg'
    | 'function_plot'
    | 'bar_chart'
    | 'flowchart'
    | 'layered_stack'
    | 'matrix_2x2'
    | 'cycle_diagram';
  title?: string;
  caption?: string;
  svgContent?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
  };
  /** Courbe(s) tracée(s) EXACTEMENT par le code, en style « dessin au feutre » (type 'function_plot'). */
  plot?: FunctionPlotSpec;
  /** Tableau de variation dessiné avec ses flèches (type 'variation_table'). */
  variation?: VariationTableSpec;
  /** Tableau de signes structuré (type 'sign_table'). */
  signs?: SignTableSpec;
  /** Diagramme en barres / histogramme (type 'bar_chart'). */
  barChart?: BarChartSpec;
  /** Organigramme / processus séquentiel ou conditionnel (type 'flowchart'). */
  flowchart?: FlowchartSpec;
  /** Architecture en couches ou pyramide (type 'layered_stack'). */
  layeredStack?: LayeredStackSpec;
  /** Matrice 2×2 (SWOT, Eisenhower, structures de marché, etc.) (type 'matrix_2x2'). */
  matrix2x2?: Matrix2x2Spec;
  /** Schéma cyclique / circuit fermé (circuit économique, PDCA, effet de réseau) (type 'cycle_diagram'). */
  cycle?: CycleDiagramSpec;
  /** Scène illustrée (dessin d'ambiance façon livre illustré) plutôt qu'un schéma. */
  scene?: boolean;
  /** Description de scène dessinée par le moteur de KONAN (src/lib/scenes). */
  sceneSpec?: import('../scenes/sceneTypes').SceneSpec;
}

export interface BarChartSpec {
  yLabel?: string;
  unit?: string;
  bars: { label: string; value: number; color?: SketchColor; annotation?: string }[];
}

export interface FlowchartNodeSpec {
  id?: string;
  label: string;
  sublabel?: string;
  kind?: 'start' | 'process' | 'decision' | 'end';
  color?: SketchColor;
  /** Branche secondaire facultative pour une décision (ex: "Sinon → ..."). */
  branchLabel?: string;
  branchTarget?: string;
}

export interface FlowchartSpec {
  direction?: 'vertical' | 'horizontal';
  steps: FlowchartNodeSpec[];
}

export interface LayeredStackSpec {
  style?: 'stack' | 'pyramid';
  layers: { badge?: string; title: string; subtitle?: string; color?: SketchColor }[];
}

export interface MatrixQuadrantSpec {
  title: string;
  items: string[];
  color?: SketchColor;
}

export interface Matrix2x2Spec {
  topAxis?: [string, string];
  leftAxis?: [string, string];
  topLeft: MatrixQuadrantSpec;
  topRight: MatrixQuadrantSpec;
  bottomLeft: MatrixQuadrantSpec;
  bottomRight: MatrixQuadrantSpec;
}

export interface CycleDiagramSpec {
  centerLabel?: string;
  centerSublabel?: string;
  nodes: { title: string; subtitle?: string; color?: SketchColor }[];
}

/** Couleurs du code pédagogique Konan utilisables dans les figures. */
export type SketchColor = 'blue' | 'violet' | 'green' | 'orange' | 'slate';

export interface FunctionPlotPiece {
  /** Expression en x (ex: "x^2", "abs(3x-6)", "sqrt(x)", "1/x", "E(x)", "300+25(x-120)"). */
  expr: string;
  from?: number;
  to?: number;
  /** Extrémité incluse (point plein) ou exclue (rond vide). Non précisé : pas de marque. */
  includeFrom?: boolean;
  includeTo?: boolean;
}

export interface FunctionPlotCurve {
  label?: string;
  color?: SketchColor;
  pieces: FunctionPlotPiece[];
}

export interface FunctionPlotSpec {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  /** Pas des graduations (1 par défaut). */
  xStep?: number;
  yStep?: number;
  /** Symboles optionnels des axes (inférés automatiquement sinon, ex: x₁/x₂, Q/P, Y/i). */
  xLabel?: string;
  yLabel?: string;
  curves: FunctionPlotCurve[];
  points?: { x: number; y: number; label?: string; filled?: boolean; color?: SketchColor }[];
  /** Droites verticales en pointillés (ex: x = 0,25). */
  verticalLines?: { x: number; label?: string; color?: SketchColor }[];
  horizontalLines?: { y: number; label?: string; color?: SketchColor }[];
}

export type VariationLevel = 'top' | 'middle' | 'bottom';

export interface VariationTableSpec {
  xLabel?: string;
  fLabel?: string;
  /** Valeurs de x affichées en en-tête (ex: ["−∞", "0", "+∞"]). */
  xValues: string[];
  /**
   * Une entrée par valeur de x : texte de f et sa hauteur (haut / milieu / bas).
   * Pour une valeur interdite (double barre), renseigner left/right à la place de text/level.
   */
  values: {
    text?: string;
    level?: VariationLevel;
    forbidden?: boolean;
    left?: { text?: string; level: VariationLevel };
    right?: { text?: string; level: VariationLevel };
  }[];
}

export interface SignTableSpec {
  xLabel?: string;
  xValues: string[];
  /** Pour chaque ligne : 2n−1 cases (positions paires = sous une valeur de x : "0", "||" ou "" ; impaires = signe "+" / "−"). */
  rows: { label: string; cells: string[] }[];
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
  /** Figure affichée dans la FICHE DE COURS de l'étape qui pose cette question (elle enseigne la notion). */
  courseVisualSchema?: PointVisualSchema;
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

/** Nature pédagogique d'une étape : donne la couleur de la carte de cours (code couleur Konan). */
export type StepKind = 'definition' | 'propriete' | 'methode' | 'piege' | 'exemple';

export interface StructuredLessonStep {
  stepNumber: number; // 1 à N (5 à 8 étapes selon la richesse de la notion)
  /** Définition (bleu), propriété/formule (violet), méthode (vert), piège d'examen (orange), exemple (gris). */
  stepKind?: StepKind;
  stepBadge: string;
  stepTheme: string;
  stepTitle: string;
  paragraphText: string;
  formula?: PointFormula;
  keyRule?: string;
  konanTip?: string;
  visualSchema?: PointVisualSchema;
  exercise: InteractiveExercise;
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
  formula?: PointFormula; // Formule principale unique (ancien format des fichiers 2de C, conservé pour compatibilité)
  structuredSteps?: StructuredLessonStep[]; // 8 étapes séquentielles 1-pour-1 (cours dédié + formule dédiée + QCM dédié)
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
  /**
   * 2 = nouveau format rédigé étape par étape à partir du PDF officiel (5 à 8 étapes par mini-leçon,
   * cartes colorées). Ces chapitres ne passent JAMAIS par les modèles automatiques de l'expander.
   */
  contentVersion?: 2;
  /** Autres classes qui suivent exactement la même leçon (ex: chimie « TCDE » : Tle C, D et E). */
  alsoForGrades?: CurriculumGradeLevel[];
  /**
   * Ordre propre à une classe partageant la leçon, quand sa numérotation officielle diffère
   * (ex : leçon de 1re C aussi suivie en 1re D, qui a ses propres leçons 1, 2, 3...).
   * Sans entrée pour la classe, `order` s'applique.
   */
  orderForGrades?: Partial<Record<CurriculumGradeLevel, number>>;
  /** PDF officiel d'origine (traçabilité). */
  source?: string;
}

/**
 * Nombre de mini-leçons à valider pour valider une séance (pas de chronomètre dans le tuteur) :
 * - 25 min (≤ 35 min) : 3 mini-leçons
 * - 45 min (≤ 60 min) : 4 à 5 mini-leçons
 * - 75 min et plus    : 6 à 7 mini-leçons
 * Dans une fourchette, le nombre exact dépend de la longueur des mini-leçons (5 à 8 étapes) :
 * on en ajoute tant que le total d'étapes reste dans `stepBudget`, sans jamais descendre sous `min`.
 */
export interface SessionMiniLessonQuota {
  min: number;
  max: number;
  stepBudget: number;
}

export function getSessionMiniLessonQuota(durationMinutes: number): SessionMiniLessonQuota {
  if (durationMinutes <= 35) return { min: 3, max: 3, stepBudget: Infinity };
  if (durationMinutes <= 60) return { min: 4, max: 5, stepBudget: 32 };
  return { min: 6, max: 7, stepBudget: 45 };
}

/** Nombre minimal de mini-leçons à valider pour cette durée de séance. */
export function getRequiredPointsCountForDuration(durationMinutes: number): number {
  return getSessionMiniLessonQuota(durationMinutes).min;
}

export interface TutorPointSessionItem {
  point: CurriculumPoint;
  chapterId: string;
  chapterTitle: string;
  chapterOrder: number;
  pointIndexInChapter: number;
  isLastPointOfChapter: boolean;
  totalPointsInChapter: number;
  /** Mini-leçon de révision ajoutée pour compléter une séance en fin de programme (ne fait pas avancer la progression). */
  isReview?: boolean;
}

// ============================================================================
// ÉTAT DE PROGRESSION DE L'ÉLÈVE (SAUVEGARDÉ PAR MATIÈRE)
// ============================================================================

// 'histoire_geo' est conservé pour les anciennes progressions ; l'Histoire-Géo a deux volets : 'histoire' et 'geographie'.
// Les matières LMD (lmd_*) sont chacune leur propre sous-catégorie à volet unique.
export type StemSubCategory = 'chimie' | 'physique' | 'geometrie' | 'numerique' | 'svt' | 'francais' | 'histoire_geo' | 'histoire' | 'geographie' | 'philosophie' | LmdSubjectId;

export interface SubCategoryStudentProgress {
  subCategory: StemSubCategory;
  gradeLevel: CurriculumGradeLevel;
  positioningCompleted: boolean;
  currentChapterId: string;
  currentPointIndex: number; // Ancien repère par position (conservé pour les progressions existantes)
  /**
   * Identifiant du PROCHAIN point à travailler dans currentChapterId.
   * Repère fiable même si l'ordre ou le nombre de points du chapitre change.
   * Valeur spéciale END_OF_CHAPTER_MARKER : chapitre entièrement terminé.
   */
  currentPointId?: string;
  masteredPointIds: string[];
  completedChapterIds: string[];
  totalExercisesAnswered: number;
  correctExercisesCount: number;
  lastSessionAt?: string;
  /**
   * Marque-page : séance arrêtée au milieu d'une mini-leçon (fin du temps Pomodoro).
   * La prochaine séance de CE volet reprend à cette étape exacte.
   */
  resume?: ResumeBookmark;
}

export interface ResumeBookmark {
  pointId: string;
  /** Étape où reprendre (0 = première étape). */
  exerciseIndex: number;
  /** Étapes déjà réussies et ratées de la mini-leçon, pour ne pas les refaire. */
  mastered: number[];
  missed: number[];
  savedAt: string;
}

export const END_OF_CHAPTER_MARKER = '__fin_du_chapitre__';

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
  // Alternance automatique (Physique ↔ Chimie & Géométrie ↔ Numérique)
  lastAlternatedSubCategory?: StemSubCategory;
  subCategories?: Partial<Record<StemSubCategory, SubCategoryStudentProgress>>;
}

/**
 * Progression par CLASSE et par matière : clé `${gradeLevel}::${subjectId}`
 * (ex: "seconde_c::physique_chimie"). Les anciennes clés par matière seule
 * (ex: "physique_chimie") sont relues puis migrées automatiquement.
 */
export type StudentCurriculumProgressMap = Partial<Record<string, SubjectStudentProgress>>;

export interface TutorSessionPayload {
  subjectId: StemSubjectId;
  subCategory?: StemSubCategory;
  subCategoryName?: string;
  subjectName: string;
  gradeLevel: CurriculumGradeLevel;
  itemsToReview: TutorPointSessionItem[];
  targetPointsCount: number;
  durationMinutes: number;
  chapter?: CurriculumChapter; // Rétrocompatibilité
  pointsToReview?: CurriculumPoint[]; // Rétrocompatibilité
}

