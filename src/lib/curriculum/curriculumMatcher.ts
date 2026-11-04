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
 * Conserve l'ancien comportement (Terminale D par défaut) pour l'import d'emploi du temps.
 * Pour les cours guidés, utiliser tryResolveGradeLevel qui ne devine jamais.
 */
export function resolveGradeLevel(rawLevel: string | undefined): CurriculumGradeLevel {
  return resolveGradeLevelInternal(rawLevel, false) ?? 'terminale_d';
}

/**
 * Version STRICTE pour les cours guidés : renvoie null si la classe ou la série est
 * inconnue ou ambiguë (ex: « Terminale » sans série), au lieu de deviner une classe.
 * Un élève ne doit jamais recevoir le cours d'une autre classe.
 */
export function tryResolveGradeLevel(rawLevel: string | undefined): CurriculumGradeLevel | null {
  return resolveGradeLevelInternal(rawLevel, true);
}

/**
 * Lecture STRICTE : la série doit être le mot qui suit immédiatement la classe
 * (« 2nde C », « Tle D », « TleD », « 1ère A1 »). Le reste du texte (nom du lycée,
 * de la ville…) est ignoré : « 2nde C Lycée Moderne Abobo » donne bien la 2nde C.
 * « Tle A » / « 1ère A » sans précision correspondent à la série A1 (alias historique).
 */
function parseGradeStrict(clean: string): CurriculumGradeLevel | null {
  const tle = clean.match(/\b(?:terminale|term|tle)\s*(a1|a2|a|c|d)\b/) || clean.match(/^t\s?(a1|a2|c|d)\b/);
  if (tle) {
    const s = tle[1];
    return s === 'a2' ? 'terminale_a2' : s === 'c' ? 'terminale_c' : s === 'd' ? 'terminale_d' : 'terminale_a1';
  }
  const pre = clean.match(/\b(?:premiere|1ere|1re|1er)\s*(a1|a2|a|c|d)\b/) || clean.match(/^1\s?(a1|a2|a|c|d)\b/);
  if (pre) {
    const s = pre[1];
    return s === 'a2' ? 'premiere_a2' : s === 'c' ? 'premiere_c' : s === 'd' ? 'premiere_d' : 'premiere_a1';
  }
  const sec = clean.match(/\b(?:seconde|2nde|2de|2nd)\s*(a|c)\b/) || clean.match(/^2\s?(a|c)\b/);
  if (sec) return sec[1] === 'a' ? 'seconde_a' : 'seconde_c';

  if (/\b(3eme|3e|troisieme)\b/.test(clean)) return '3eme';
  if (/\b(4eme|4e|quatrieme)\b/.test(clean)) return '4eme';
  if (/\b(5eme|5e|cinquieme)\b/.test(clean)) return '5eme';
  if (/\b(6eme|6e|sixieme)\b/.test(clean)) return '6eme';
  if (/\b(bts|prepa)\b/.test(clean)) return 'superieur_bts';
  if (/\b(lmd|licence|master|doctorat)\b|universit/.test(clean)) return 'superieur_lmd';
  return null;
}

const EXACT_GRADE_IDS: CurriculumGradeLevel[] = [
  '6eme', '5eme', '4eme', '3eme',
  'seconde_c', 'seconde_a',
  'premiere_c', 'premiere_d', 'premiere_a1', 'premiere_a2', 'premiere_a',
  'terminale_c', 'terminale_d', 'terminale_a1', 'terminale_a2', 'terminale_a',
  'superieur_bts', 'superieur_lmd'
];

function resolveGradeLevelInternal(rawLevel: string | undefined, strict: boolean): CurriculumGradeLevel | null {
  if (!rawLevel) return null;

  // Identifiant exact déjà typé (ex: "seconde_c" enregistré à l'inscription)
  const rawId = rawLevel.trim().toLowerCase();
  if (EXACT_GRADE_IDS.includes(rawId as CurriculumGradeLevel)) {
    return rawId as CurriculumGradeLevel;
  }

  const clean = normalizeCurriculumText(rawLevel);
  if (EXACT_GRADE_IDS.includes(clean as CurriculumGradeLevel)) {
    return clean as CurriculumGradeLevel;
  }

  if (strict) {
    return parseGradeStrict(clean);
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
    if (clean.includes(' d') || clean.endsWith('d') || clean === 'td') return 'terminale_d';
    return strict ? null : 'terminale_d'; // Série inconnue
  }

  // Première (Distinction stricte 1ère C, 1ère D, 1ère A1, 1ère A2)
  if (clean.includes('premiere') || clean.includes('1ere') || clean.includes('1re') || clean.includes('1er') || clean.startsWith('1 ') || clean.startsWith('1c') || clean.startsWith('1d') || clean.startsWith('1a')) {
    if (clean.includes('a1') || clean.includes('a 1')) return 'premiere_a1';
    if (clean.includes('a2') || clean.includes('a 2')) return 'premiere_a2';
    if (clean.includes(' c') || clean.endsWith('c') || clean === '1c') return 'premiere_c';
    if (clean.includes(' a') || clean.endsWith('a') || clean === '1a') return 'premiere_a1';
    if (clean.includes(' d') || clean.endsWith('d') || clean === '1d') return 'premiere_d';
    return strict ? null : 'premiere_d'; // Série inconnue
  }

  // Seconde (2nde C, 2de A)
  if (clean.includes('seconde') || clean.includes('2nde') || clean.includes('2de') || clean.includes('2nd') || clean.startsWith('2 ')) {
    if (clean.includes(' a') || clean.endsWith('a') || clean === '2a') return 'seconde_a';
    if (clean.includes(' c') || clean.endsWith('c') || clean === '2c') return 'seconde_c';
    return strict ? null : 'seconde_c'; // Série inconnue
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
    return strict ? null : '3eme';
  }

  // Classe non reconnue
  return strict ? null : 'terminale_d';
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
  let clean = normalizeCurriculumText(subjectName);
  // Sigle écrit lettre par lettre (« P.C », « S V T », « H-G ») : on recolle les lettres -> « pc », « svt », « hg »
  if (/^([a-z] )+[a-z]$/.test(clean)) clean = clean.replace(/ /g, '');

  // L'Éducation Physique et Sportive n'est PAS de la Physique-Chimie (le mot « physique » piégeait l'alias)
  if (/\b(eps|sports?|sportives?)\b|education physique/.test(clean)) {
    return { isStemSubject: false };
  }
  // « Histoire de l'art », « Histoire des religions » : matières sans cours (le mot « histoire » piégeait l'alias)
  if (/\bhistoire (de l |de la |des |du )?(art|arts|religion|religions|musique)\b/.test(clean)) {
    return { isStemSubject: false };
  }

  // Vérifier chaque matière scientifique
  for (const key of Object.keys(STEM_SUBJECTS) as StemSubjectId[]) {
    const meta = STEM_SUBJECTS[key];
    const directNameMatch = normalizeCurriculumText(meta.name);

    // Correspondance inverse (nom saisi contenu dans le nom officiel) limitée aux saisies d'au moins
    // 5 caractères : « TE » ou « EPS » ne doivent plus être pris pour « Sciences de la Vie et de la Terre ».
    if (clean === directNameMatch || clean.includes(directNameMatch) || (clean.length >= 5 && directNameMatch.includes(clean))) {
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
 * Histoire et Géographie sont deux disciplines distinctes au lycée ivoirien, souvent inscrites
 * séparément dans l'emploi du temps. Le nom de la matière décide du volet :
 * - « Histoire », « Hist »            -> uniquement les leçons d'Histoire ;
 * - « Géographie », « Géo »           -> uniquement les leçons de Géographie ;
 * - « HG », « Histoire-Géographie »   -> null : les deux volets, en alternance.
 */
export function voletFromSubjectName(subjectId: StemSubjectId, subjectName: string): 'histoire' | 'geographie' | null {
  if (subjectId !== 'histoire_geo') return null;
  let clean = normalizeCurriculumText(subjectName);
  if (/^([a-z] )+[a-z]$/.test(clean)) clean = clean.replace(/ /g, '');
  const hasHistoire = /\b(histoire|hist|historique)\b/.test(clean);
  const hasGeo = /\b(geographie|geo|geographique)\b/.test(clean);
  if (hasHistoire && !hasGeo) return 'histoire';
  if (hasGeo && !hasHistoire) return 'geographie';
  return null;
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
