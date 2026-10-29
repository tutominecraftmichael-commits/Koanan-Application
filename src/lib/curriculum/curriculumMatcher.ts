import type {
  CurriculumGradeLevel,
  StemSubjectId,
  StemSubjectMeta,
} from './types';
import { STEM_SUBJECTS } from './types';

/**
 * Normalise un texte brut (enlève accents, majuscules, tirets et caractères spéciaux)
 */
export function normalizeCurriculumText(raw: string): string {
  if (!raw) return '';
  return raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Convertit n'importe quelle chaîne de niveau scolaire saisie ou extraite
 * en identifiant typé CurriculumGradeLevel.
 */
export function resolveGradeLevel(rawLevel: string | undefined): CurriculumGradeLevel {
  if (!rawLevel) return 'terminale_d';
  const clean = normalizeCurriculumText(rawLevel);

  // Exact ID match check first
  const exactIds: CurriculumGradeLevel[] = [
    '6eme', '5eme', '4eme', '3eme',
    'seconde_c', 'seconde_a',
    'premiere_c', 'premiere_d', 'premiere_a1', 'premiere_a2', 'premiere_a',
    'terminale_c', 'terminale_d', 'terminale_a1', 'terminale_a2', 'terminale_a',
    'superieur_bts', 'superieur_lmd'
  ];
  if (exactIds.includes(clean as CurriculumGradeLevel)) {
    return clean as CurriculumGradeLevel;
  }

  // Collège (6ème, 5ème, 4ème, 3ème)
  if (clean.includes('6eme') || clean.includes('6e') || clean.includes('sixieme') || clean === '6') {
    return '6eme';
  }
  if (clean.includes('5eme') || clean.includes('5e') || clean.includes('cinquieme') || clean === '5') {
    return '5eme';
  }
  if (clean.includes('4eme') || clean.includes('4e') || clean.includes('quatrieme') || clean === '4') {
    return '4eme';
  }
  if (clean.includes('3eme') || clean.includes('3e') || clean.includes('troisieme') || clean.includes('bepc') || clean === '3') {
    return '3eme';
  }

  // Terminale (Distinction stricte Tle C, Tle D, Tle A1, Tle A2)
  if (clean.includes('terminale') || clean.includes('tle') || clean.includes('term') || clean.startsWith('t ') || clean.startsWith('tle ') || clean.startsWith('ta') || clean.startsWith('tc') || clean.startsWith('td')) {
    if (clean.includes('a1') || clean.includes('a 1')) return 'terminale_a1';
    if (clean.includes('a2') || clean.includes('a 2')) return 'terminale_a2';
    if (clean.includes(' c') || clean.endsWith('c') || clean === 'tc' || clean === 'tle c') return 'terminale_c';
    if (clean.includes(' a') || clean.endsWith('a') || clean === 'ta' || clean === 'tle a' || clean.includes('litteraire')) return 'terminale_a1';
    return 'terminale_d'; // Par défaut scientifique majeure
  }

  // Première (Distinction stricte 1ère C, 1ère D, 1ère A1, 1ère A2)
  if (clean.includes('premiere') || clean.includes('1ere') || clean.includes('1re') || clean.includes('1er') || clean.startsWith('1 ') || clean.startsWith('1c') || clean.startsWith('1d') || clean.startsWith('1a')) {
    if (clean.includes('a1') || clean.includes('a 1')) return 'premiere_a1';
    if (clean.includes('a2') || clean.includes('a 2')) return 'premiere_a2';
    if (clean.includes(' c') || clean.endsWith('c') || clean === '1c') return 'premiere_c';
    if (clean.includes(' a') || clean.endsWith('a') || clean === '1a') return 'premiere_a1';
    return 'premiere_d';
  }

  // Seconde (2nde C, 2de A)
  if (clean.includes('seconde') || clean.includes('2nde') || clean.includes('2de') || clean.includes('2nd') || clean.startsWith('2 ')) {
    if (clean.includes(' a') || clean.endsWith('a') || clean === '2a') return 'seconde_a';
    return 'seconde_c';
  }

  // Supérieur (BTS / LMD)
  if (clean.includes('bts') || clean.includes('prepa') || clean.includes('technicien')) {
    return 'superieur_bts';
  }
  if (clean.includes('lmd') || clean.includes('licence') || clean.includes('master') || clean.includes('doctorat') || clean.includes('universit') || clean.includes('esatic') || clean.includes('inphb')) {
    return 'superieur_lmd';
  }

  // Collège générique si aucun chiffre détecté
  if (clean.includes('college')) {
    return '3eme';
  }

  // Par défaut Lycée Scientifique ivoirien
  return 'terminale_d';
}

export interface MatchResult {
  isStemSubject: boolean;
  stemSubjectId?: StemSubjectId;
  stemMeta?: StemSubjectMeta;
}

/**
 * Moteur de correspondance sémantique :
 * Associe une matière extraite de l'emploi du temps (ex: "MATHS", "Algèbre", "SP", "SVT", "CHIMIE")
 * à la matière officielle du programme ivoirien (Mathématiques, Physique-Chimie, SVT).
 */
export function matchSubjectToStemCurriculum(subjectName: string): MatchResult {
  if (!subjectName) return { isStemSubject: false };
  const clean = normalizeCurriculumText(subjectName);

  // Vérifier chaque matière scientifique
  for (const key of Object.keys(STEM_SUBJECTS) as StemSubjectId[]) {
    const meta = STEM_SUBJECTS[key];
    const directNameMatch = normalizeCurriculumText(meta.name);

    if (clean === directNameMatch || clean.includes(directNameMatch) || directNameMatch.includes(clean)) {
      return { isStemSubject: true, stemSubjectId: key, stemMeta: meta };
    }

    for (const alias of meta.aliases) {
      const cleanAlias = normalizeCurriculumText(alias);
      // Correspondance exacte de mot ou préfixe (ex: "SP", "MATH", "SVT")
      const words = clean.split(' ');
      if (words.includes(cleanAlias) || clean === cleanAlias || clean.startsWith(cleanAlias + ' ') || clean.endsWith(' ' + cleanAlias)) {
        return { isStemSubject: true, stemSubjectId: key, stemMeta: meta };
      }
    }
  }

  return { isStemSubject: false };
}

/**
 * Détermine si une séance donnée doit lancer le tuteur interactif Duolingo
 * ou le chronomètre standard (pour les matières non scientifiques ou LMD hors base).
 */
export function shouldLaunchInteractiveTutor(
  subjectName: string,
  gradeLevel: CurriculumGradeLevel
): boolean {
  // Le tuteur interactif est pour l'instant actif sur le Collège et Lycée (3ème à Terminale)
  const isTargetGrade = gradeLevel !== 'superieur_lmd' && gradeLevel !== 'superieur_bts';
  if (!isTargetGrade) return false;

  const match = matchSubjectToStemCurriculum(subjectName);
  return match.isStemSubject;
}
