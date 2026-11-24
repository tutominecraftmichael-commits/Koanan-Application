/**
 * REGISTRE OFFICIEL DES FILIÈRES & NIVEAUX PRÉDÉFINIS DU CYCLE LMD (KONAN).
 *
 * Règle produit stricte :
 * - L'étudiant ne saisit PAS sa filière LMD à la main : il sélectionne parmi les filières
 *   et niveaux prédéfinis ci-dessous (L1, L2, L3, M1, M2).
 * - Chaque couple (Filière, Niveau) possède un identifiant `gradeLevel` unique (`lmd_<filiere>_<niveau>`),
 *   garantissant que les cours guidés et QCM chargés correspondent EXACTEMENT à sa filière et son niveau.
 */

import type { CurriculumGradeLevel, StemSubjectId } from './types';

export type LmdLevelCode = 'l1' | 'l2' | 'l3' | 'm1' | 'm2';

export interface LmdLevelOption {
  level: LmdLevelCode;
  shortLabel: string; // Ex: 'L1'
  fullLabel: string;  // Ex: 'Licence 1 (L1)'
  gradeLevel: CurriculumGradeLevel;
  /** True si les cours guidés & QCM de ce niveau sont déjà intégrés dans KONAN */
  hasCourses: boolean;
  subjectIds: StemSubjectId[];
}

export interface LmdTrackDefinition {
  id: string;
  code: string;        // Ex: 'ENTD'
  name: string;        // Ex: 'Économie Numérique et Transformation Digitale'
  shortDescription: string;
  levels: LmdLevelOption[];
}

export const ENTD_L1_SUBJECT_IDS: StemSubjectId[] = [
  'lmd_algorithmique',
  'lmd_algebre',
  'lmd_analyse',
  'lmd_logique_math',
  'lmd_stat_descriptive',
  'lmd_reseaux',
  'lmd_intro_eco_num',
  'lmd_modele_dev_eco_num',
  'lmd_macroeconomie',
  'lmd_microeconomie',
  'lmd_banque',
  'lmd_assurance',
  'lmd_compta_generale',
  'lmd_compta_analytique',
  'lmd_oge',
  'lmd_intro_management',
  'lmd_intro_marketing',
  'lmd_intro_droit_num',
  'lmd_droit_numerique',
  'lmd_bureautique',
  'lmd_init_info',
  'lmd_tef',
  'lmd_ecriture_creative',
  'lmd_dev_perso',
  'lmd_anglais',
];

export const SRIT_L1_SUBJECT_IDS: StemSubjectId[] = [
  'lmd_logique_math',
  'lmd_structures_algebriques',
  'lmd_analyse',
  'lmd_geometrie_diff',
  'lmd_algebre',
  'lmd_analyse_2',
  'lmd_optique_geometrique',
  'lmd_pde',
  'lmd_electrostatique',
  'lmd_electrocinetique',
  'lmd_electronique_fondamentale',
  'lmd_electronique_numerique',
  'lmd_mecanique_point',
  'lmd_archi_ordinateurs',
  'lmd_algorithmique',
  'lmd_algo_python',
  'lmd_analyse_economique',
  'lmd_intro_droit',
  'lmd_anglais',
  'lmd_tef',
  'lmd_dev_perso',
];

export const LMD_TRACKS: LmdTrackDefinition[] = [
  {
    id: 'entd',
    code: 'ENTD',
    name: 'Économie Numérique et Transformation Digitale',
    shortDescription: 'Économie numérique, informatique, finance, gestion & droit du numérique',
    levels: [
      {
        level: 'l1',
        shortLabel: 'L1',
        fullLabel: 'Licence 1 (L1)',
        gradeLevel: 'lmd_entd_l1',
        hasCourses: true,
        subjectIds: ENTD_L1_SUBJECT_IDS,
      },
    ],
  },
  {
    id: 'srit',
    code: 'SRIT',
    name: 'Systèmes et Réseaux Informatiques et Télécommunications',
    shortDescription: 'Mathématiques, physique, électronique, algorithmique, Python, réseaux & télécoms',
    levels: [
      {
        level: 'l1',
        shortLabel: 'L1',
        fullLabel: 'Licence 1 (L1)',
        gradeLevel: 'lmd_srit_l1',
        hasCourses: true,
        subjectIds: SRIT_L1_SUBJECT_IDS,
      },
    ],
  },
];

/** Liste plate de toutes les combinaisons (Filière + Niveau) prédéfinies dans KONAN. */
export interface FlatLmdProgram {
  gradeLevel: CurriculumGradeLevel;
  trackId: string;
  code: string;
  trackName: string;
  level: LmdLevelCode;
  levelShort: string;
  levelFull: string;
  /** Ex: 'ENTD — Licence 1 (L1)' */
  displayLabel: string;
  /** Ex: 'ENTD 1' */
  compactBadge: string;
  hasCourses: boolean;
  subjectIds: StemSubjectId[];
}

export const LMD_PROGRAMS: FlatLmdProgram[] = LMD_TRACKS.flatMap((track) =>
  track.levels.map((lvl) => ({
    gradeLevel: lvl.gradeLevel,
    trackId: track.id,
    code: track.code,
    trackName: track.name,
    level: lvl.level,
    levelShort: lvl.shortLabel,
    levelFull: lvl.fullLabel,
    displayLabel: `${track.code} — ${lvl.fullLabel}`,
    compactBadge: `${track.code} ${lvl.shortLabel}`,
    hasCourses: lvl.hasCourses,
    subjectIds: lvl.subjectIds,
  })),
);

export function isLmdTrackGrade(gradeLevel?: string | null): boolean {
  return /^lmd_[a-z0-9_]+$/.test(String(gradeLevel || ''));
}

export function getLmdProgramByGrade(gradeLevel?: string | null): FlatLmdProgram | null {
  if (!gradeLevel) return null;
  return LMD_PROGRAMS.find((p) => p.gradeLevel === gradeLevel) || null;
}

export function getLmdAllowedSubjects(gradeLevel?: string | null): StemSubjectId[] | null {
  const prog = getLmdProgramByGrade(gradeLevel);
  return prog ? prog.subjectIds : null;
}
