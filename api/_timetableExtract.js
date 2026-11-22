/**
 * LECTURE D'EMPLOI DU TEMPS — VERSION STRUCTURÉE (partagée serveur + navigateur « clé personnelle »)
 *
 * 1. Gemini lit le document et répond en JSON imposé (une entrée par case de la grille), au lieu d'un
 *    texte libre : jour, heures, texte écrit, matière, type, salle, professeur, semaines, groupe, classe.
 * 2. Le code vérifie et corrige ensuite tout ce qui peut l'être sans IA : heures, jours, sigles des
 *    matières, cases vides, pauses, doublons, cours collés, chevauchements, plusieurs classes.
 * 3. Le résultat est réécrit dans le format texte habituel de Konan (modifiable par l'élève).
 *
 * Le préfixe « _ » empêche Vercel d'exposer ce fichier comme une route /api.
 */
import { GoogleGenAI } from '@google/genai';
import { buildTimetablePrompt, cleanTimetableOutput } from './_timetablePrompt.js';

/**
 * Modèles essayés dans l'ordre (repli automatique s'il est saturé). Depuis le 2026-11-22 : Gemini 3 en premier
 * (plus juste ET deux fois plus rapide que 2.5-flash sur le banc lycée, voir thinkingConfigFor).
 */
export const STRUCTURED_MODELS = ['gemini-3.5-flash', 'gemini-flash-latest', 'gemini-2.5-flash'];
/** Dernier recours en texte libre (ancienne consigne) : un seul modèle léger, pour ménager le quota. */
export const FALLBACK_TEXT_MODELS = ['gemini-flash-lite-latest'];
/**
 * LMD : grilles denses par semaines avec codes d'ECUE presque identiques (1MAN3250 / 2MAN3250 / 3MAN3250).
 * Tests du 2026-11-22 (EDT ESATIC ENTD 1, 14 créneaux) :
 *  - gemini-2.5-flash (réflexion 4096) : ~30 s mais confond les codes (jeudi et vendredi faux à chaque essai) ;
 *  - gemini-3.5-flash / flash-latest avec l'ancien réglage « thinkingBudget » : 14/14 mais 110 à 165 s
 *    (les modèles Gemini 3 ignorent ce budget et réfléchissent au maximum) ;
 *  - gemini-3.5-flash avec thinkingLevel « low » : 14/14 en 10,7 s et 15,4 s (et 14/14 en 11,8 s en « minimal »).
 * Le modèle Gemini 3 en réflexion « low » passe donc en premier ; 2.5-flash reste le dernier recours.
 */
export const LMD_MODELS = ['gemini-3.5-flash', 'gemini-flash-latest', 'gemini-2.5-flash'];
/** Au-delà, on n'essaie plus d'autre modèle (l'élève attend). */
const TOTAL_DEADLINE_MS = 110_000;
/** LMD : temps total et temps par modèle. Doit rester sous la limite de la fonction (vercel.json : maxDuration 300 s,
 *  le maximum du plan Hobby avec Fluid compute) pour que le serveur réponde avant d'être coupé. */
const LMD_DEADLINE_MS = 250_000;
const LMD_MODEL_TIMEOUT_MS = 90_000;

/**
 * Réglage de la réflexion selon le modèle : les Gemini 3 (et les alias « -latest ») se règlent par niveau,
 * les Gemini 2.5 gardent un budget de jetons.
 * Tests du 2026-11-22 avec gemini-3.5-flash :
 *  - une seule page (photo, image, PDF d'une page) en « low » : ENTD 1 14/14 (×3, 11-15 s), 2nde C photo 22/23 en 16 s
 *    (2.5-flash : 21/23 en 35 s), PDF 6 classes : les 6 classes en 29 s ;
 *  - PDF BTS de 2 pages en « low » : la 2e page est SAUTÉE (une classe manquante) ; en « medium » : les 2 pages, 32 s.
 * D'où « medium » dès que le PDF a plusieurs pages.
 */
export function thinkingConfigFor(model, { multiPage = false } = {}) {
  if (!/gemini-3|latest/.test(model)) return { thinkingBudget: 4096 };
  return { thinkingLevel: multiPage ? 'medium' : 'low' };
}

/** Nombre de pages d'un PDF en base64 (0 si ce n'est pas un PDF lisible). Sans bibliothèque : marqueurs « /Type /Page ». */
export function pdfPageCount(base64) {
  try {
    const bin = typeof Buffer !== 'undefined' ? Buffer.from(base64, 'base64').toString('latin1') : atob(base64);
    return (bin.match(/\/Type\s*\/Page(?![s\w])/g) || []).length;
  } catch {
    return 0;
  }
}

// ---------------------------------------------------------------------------
// Matières : sigles et variantes d'écriture → nom standard
// ---------------------------------------------------------------------------
const strip = (s) => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();

/** Clé normalisée → nom standard. Couvre les sigles des lycées et collèges ivoiriens. */
const SUBJECT_ALIASES = new Map(
  Object.entries({
    'Mathématiques': ['maths', 'math', 'mathematique', 'mathematiques', 'mathematiq', 'mth', 'mat'],
    'Physique-Chimie': ['pc', 'p c', 'sp', 'sc phy', 'sciences physiques', 'science physique', 'physique chimie', 'phys chimie', 'phy chimie', 'physique et chimie', 'tp pc', 'tp physique chimie', 'pct'],
    'SVT': ['svt', 's v t', 'sciences de la vie et de la terre', 'science de la vie et de la terre', 'sn', 'sciences naturelles', 'tp svt', 'biologie'],
    'Français': ['fr', 'fra', 'franc', 'francais', 'franca', 'lettres'],
    'Anglais': ['ang', 'angl', 'anglais', 'english', 'lv1', 'anglais lv1'],
    'Espagnol': ['esp', 'espagnol', 'espa'],
    'Allemand': ['all', 'allemand', 'alld'],
    'LV2 (Espagnol / Allemand)': ['esp all', 'all esp', 'espagnol allemand', 'allemand espagnol', 'lv2', 'langue vivante 2'],
    'Histoire-Géographie': ['hg', 'h g', 'hist geo', 'hist geog', 'histoire geo', 'histoire geographie', 'histoire et geographie', 'his geo', 'h geo'],
    'Philosophie': ['philo', 'philosophie', 'phil'],
    'EDHC': ['edhc', 'e d h c', 'education aux droits de l homme et a la citoyennete', 'education au developpement humain et a la citoyennete', 'ecm', 'education civique', 'education civique et morale'],
    'EPS': ['eps', 'e p s', 'education physique et sportive', 'education physique', 'sport'],
    'Arts plastiques': ['ap', 'arts plastiques', 'art plastique', 'arts pla', 'dessin'],
    'Musique': ['mus', 'musique', 'education musicale', 'educ mus'],
    'Informatique': ['info', 'informatique', 'tice', 'tic'],
    'Latin': ['latin'],
    'Microéconomie 2': ['1man3250', 'microeconomie 2'],
    'Macroéconomie 2': ['2man3250', 'macroeconomie 2'],
    'Modèle de Développement en Économie Numérique': ['3man3250', 'modele de developpement en economie numerique'],
    'Comptabilité générale II': ['1man3251', 'comptabilite generale ii', 'comptabilite generale 2'],
    "Organisation et gestion de l'entreprise": ['2man3251', 'organisation et gestion de l entreprise', 'oge'],
    'Réseaux': ['2ire3250', 'reseaux'],
    'Fondamentaux de la Finance': ['1man3350'],
    "Développement d'Applications 1": ['1inf3350'],
    'Conception web et administration des SI': ['2inf3350'],
    'Algèbres 2': ['1mth3350'],
    'Analyse 2': ['2mth3350'],
    'Économie du Développement': ['1man3351'],
    'Droit de la Protection des données': ['1man3352'],
  }).flatMap(([name, keys]) => keys.map((k) => [k, name])),
);

/** Mots qui ne sont pas des cours : pauses, sport/coaching, administration, jours fériés, évaluations sans matière. */
const NON_COURSE = /^(recre(ation)?|pause( dejeuner| midi)?|dejeuner|repas|midi|interclasse|etude( surveillee)?|permanence|vie de classe|heure de vie de classe|conseil de classe|conseil|reunion|libre|temps libre|ferie|jour ferie|conges?( de paques)?|paques|pentecote|lundi de pentecote|ascension|fete du travail|vacances?|devoirs?( surveilles?)?|devoirs? et cours de rattrapages?|cours de rattrapages?|ds|dst|examens?( deuxieme partie( semestres? (pairs?|impairs?))?)?|evaluation|interrogation|composition|bac blanc|bepc blanc|rattrapages?|partiels?|surveillance|tutorat|autonomie|coaching|sport|eps|e p s|education physique( et sportive)?|semaines? pedagogiques?|plages?|horaires?|jours?)$/;

const stripWeeks = (s) =>
  String(s || '')
    // « sem » seul ou « sem. » : surtout pas le début de « SEMESTRES » (« Examens … semestres pairs » devenait « partiestres pairs »)
    .replace(/\s*(?:[-–—|/,;:(]+\s*)?\b(?:semaines?|sem\b\.?|weeks?)\s*(?:n[°o]?\s*)?(?=\d)[\d,\s\-–—àaet/]+(?:\))?/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

/** Nom standard d'une matière à partir du nom proposé par l'IA et du texte écrit dans la case. */
export function canonicalSubject(subject, label) {
  for (const candidate of [subject, label]) {
    const key = strip(stripWeeks(candidate))
      .replace(/^(tp|td|cm|cours( de)?|devoir( de| d)?|ds( de)?)\s+/, '')
      .replace(/\s+(tp|td|cm)$/, '');
    if (!key) continue;
    if (SUBJECT_ALIASES.has(key)) return SUBJECT_ALIASES.get(key);
  }
  const clean = stripWeeks(subject || label || '');
  // Écrit tout en majuscules (« DROIT CIVIL ») : on garde les sigles courts tels quels (« CS », « CF 1 »), sinon casse normale
  if (clean.length > 4 && clean === clean.toUpperCase() && /[A-Z]{4,}/.test(clean)) {
    return clean.toLowerCase().replace(/(^|[\s'’(-])([a-zà-ÿ])/g, (m, p, c) => p + c.toUpperCase()).replace(/\b(De|Du|Des|Et|La|Le|Les|En|À|Au|Aux|D'|L')\b/g, (w) => w.toLowerCase());
  }
  return clean;
}

export function isNonCourseLabel(text) {
  const k = strip(stripWeeks(String(text || '')).replace(/\([^)]*\)/g, ' '));
  if (!k || NON_COURSE.test(k)) return true;
  if (/^(devoirs? et cours de rattrapage|conges? de paques|examens? deuxieme partie|lundi de pentecote|fete du travail)\b/.test(k)) return true;
  // « Devoir surveillé toutes disciplines », « DS commun », « Examen blanc » : évaluation sans matière précise
  const evalHead = /^(devoirs?|ds|dst|examens?|evaluations?|interrogations?|compositions?|controles?|bac blanc|bepc blanc)( surveilles?| communs?| blancs?)?\b\s*(.*)$/.exec(k);
  if (evalHead) {
    const rest = evalHead[3].replace(/^(de|d|du|des|en)\s+/, '').trim();
    return !rest || !SUBJECT_ALIASES.has(rest);
  }
  return false;
}

// ---------------------------------------------------------------------------
// Heures et jours
// ---------------------------------------------------------------------------
/** « 7H30 », « 07h30 », « 8H », « 8.15 », « 14:00 » → « 07:30 », « 08:00 », « 08:15 », « 14:00 ». */
export function normalizeTime(value) {
  const m = /^\s*(\d{1,2})\s*(?:[hH:.]\s*(\d{1,2})?)?\s*(?:mn|min)?\s*$/.exec(String(value || ''));
  if (!m) return null;
  const h = Number(m[1]);
  const min = m[2] ? Number(m[2]) : 0;
  if (h > 23 || min > 59) return null;
  return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
}
const toMin = (t) => Number(t.slice(0, 2)) * 60 + Number(t.slice(3, 5));

const DAYS = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];
export function normalizeDay(value) {
  const k = strip(value).toUpperCase();
  return DAYS.find((d) => k === d || (k.length >= 3 && d.startsWith(k))) || null;
}

// ---------------------------------------------------------------------------
// Consigne et format de réponse imposé
// ---------------------------------------------------------------------------
const CELL_SCHEMA = {
  type: 'object',
  properties: {
    day: { type: 'string', description: 'LUNDI, MARDI, MERCREDI, JEUDI, VENDREDI, SAMEDI ou DIMANCHE' },
    start: { type: 'string', description: 'Heure de début HH:MM (24 h)' },
    end: { type: 'string', description: 'Heure de fin HH:MM (24 h)' },
    label: { type: 'string', description: 'Texte principal de la case, recopié tel quel' },
    subject: { type: 'string', description: 'Nom complet de la matière (sigle développé). Vide si la case n’est pas un cours.' },
    kind: { type: 'string', enum: ['cours', 'tp', 'td', 'cm', 'evaluation', 'pause', 'administratif'] },
    room: { type: 'string' },
    teacher: { type: 'string' },
    code: { type: 'string', description: 'Code de l’unité d’enseignement s’il est écrit (ex. 1MTH3350)' },
    weeks: { type: 'string', description: 'Semaines concernées si le document le précise (ex. « 1-8 »), sinon vide' },
    group: { type: 'string', description: 'Groupe / demi-classe si précisé (ex. « Gr A »), sinon vide' },
    color: { type: 'string', description: 'Couleur de fond de la case si elle est colorée (ex. « jaune », « gris », « orange », « bleu clair »), sinon vide' },
  },
  required: ['day', 'start', 'end', 'label', 'subject', 'kind'],
};

export const RESPONSE_SCHEMA = {
  type: 'object',
  properties: {
    documentType: { type: 'string', enum: ['scolaire', 'bts', 'lmd'] },
    classes: {
      type: 'array',
      description: 'Une entrée par classe / groupe / promotion distincte présente dans le document (souvent une seule).',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string', description: 'Nom de la classe exactement comme écrit (ex. « 2nde C », « LSTCF 1A », « TS MBM 2 »).' },
          timeRows: {
            type: 'array',
            description: 'Lignes horaires de la grille, de haut en bas, si elles sont communes à tous les jours (y compris récréation et pauses). Vide sinon.',
            items: { type: 'object', properties: { start: { type: 'string' }, end: { type: 'string' } }, required: ['start', 'end'] },
          },
          cells: { type: 'array', description: 'Toutes les cases non vides de la grille de cette classe.', items: CELL_SCHEMA },
        },
        required: ['name', 'cells'],
      },
    },
    legend: {
      type: 'array',
      description: 'Sigles ou codes expliqués dans le document lui-même (légende, tableau des ECUE / UE sous la grille)',
      items: {
        type: 'object',
        properties: {
          abbr: { type: 'string', description: 'Sigle ou code tel qu’écrit dans les cases (ex. « 1MAN3251 »)' },
          meaning: { type: 'string', description: 'Intitulé complet (ex. « Comptabilité générale II »)' },
          teacher: { type: 'string', description: 'Enseignant indiqué pour ce code, sinon vide' },
          color: { type: 'string', description: 'Couleur de fond de cette ligne du tableau (la même que ses cases dans la grille), sinon vide' },
        },
        required: ['abbr', 'meaning'],
      },
    },
  },
  required: ['documentType', 'classes'],
};

/**
 * Cases d'une classe à plat (jour + heures). Quand la grille a des lignes horaires communes, une heure mal lue
 * de quelques minutes (« 15:50 » au lieu de « 15:55 ») est recalée sur la limite de ligne la plus proche.
 */
export function flattenClassCells(cls) {
  const rows = (Array.isArray(cls?.timeRows) ? cls.timeRows : [])
    .map((r) => ({ start: normalizeTime(r?.start), end: normalizeTime(r?.end) }))
    .filter((r) => r.start && r.end && toMin(r.end) > toMin(r.start));
  const snap = (t, bounds) => {
    const v = normalizeTime(t);
    if (!v || !bounds.length) return t;
    const best = bounds.reduce((acc, b) => (Math.abs(toMin(b) - toMin(v)) < Math.abs(toMin(acc) - toMin(v)) ? b : acc));
    return Math.abs(toMin(best) - toMin(v)) <= 10 ? best : v;
  };
  const starts = rows.map((r) => r.start), ends = rows.map((r) => r.end);
  return (Array.isArray(cls?.cells) ? cls.cells : []).map((c) => ({ ...c, start: snap(c?.start, starts), end: snap(c?.end, ends) }));
}
export function buildStructuredPrompt(format, classHint) {
  const level = format === 'lmd' ? 'université (LMD)' : format === 'tpcm' ? 'BTS / enseignement technique' : format === 'scolaire' ? 'lycée ou collège' : 'à déterminer';
  return `Tu lis l'emploi du temps d'un élève ivoirien (niveau annoncé : ${level}). Ta réponse sert à construire son planning de révision : chaque erreur d'heure ou de matière le pénalise. Sois exact, n'invente rien.

MÉTHODE DE LECTURE (suis-la dans l'ordre) :
1. Repère le titre, la ou les classes, puis les en-têtes : les JOURS (en colonnes ou en lignes) et les HORAIRES (en lignes ou en colonnes). Les horaires peuvent être écrits « 07H30-08H25 », « 8H-10H », « 13h15 - 15h15 ».
   Si les lignes horaires sont les mêmes pour tous les jours, recopie-les toutes dans « timeRows », de haut en bas (récréation et pauses comprises).
2. Parcours la grille case par case, jour après jour, sans en sauter une. Pour chaque case NON VIDE, lis son jour et ses heures en suivant les traits de la grille jusqu'aux en-têtes.
   - Case fusionnée sur plusieurs plages horaires : une seule entrée, du début de la première plage à la fin de la dernière (suis sa bordure du bas jusqu'à l'en-tête).
   - Case qui s'étend sur plusieurs jours (ex. bande « RÉCRÉATION ») : une entrée par jour.
   - Case vide ou barrée : rien.
   - Si une ligne est découpée en semaines (« Semaines 1 à 8 », colonnes 1…16), indique les semaines dans « weeks ».
   GRILLE PAR SEMAINES (très fréquente à l'université et en grande école : ESATIC, INP-HB, UFHB…) : les COLONNES sont des semaines ou des dates (« 1, 2, 3… », « 23/03/2026 »…) et les LIGNES sont les jours, chaque jour découpé en plages horaires (ex. LUNDI : 7h30-10h00, 10h15-12h45, 16h30-18h00 ; MARDI : 7h30-10h00, 10h15-12h45, 14h30-17h00).
   - Le jour d'une case = le bloc de lignes du jour, à gauche. Ses heures = l'en-tête de SA ligne, lu jour par jour (les plages ne sont pas forcément les mêmes d'un jour à l'autre : ne recopie pas celles du lundi pour les autres jours).
   - Lis la grille LIGNE PAR LIGNE : une même matière répétée sur plusieurs semaines dans la même ligne = UNE seule entrée, avec ses semaines dans « weeks » (ex. « 1, 4-9 »). Ne fais pas une entrée par semaine.
   - Une bande verticale ou un bloc qui couvre toute une semaine ou toute une journée n'est JAMAIS un cours : Congés de Pâques, Fête du travail, Ascension, Lundi de Pentecôte, Examens (… semestres pairs/impairs), Devoirs et cours de rattrapage → kind « administratif » ou « evaluation ». Sport et Coaching → kind « administratif ».
   - Les cases ne contiennent souvent qu'un CODE d'ECUE (ex. « 1MAN3251 ») ou une couleur. Cherche ce code dans le tableau des ECUE / UE placé sous la grille : subject = son intitulé, teacher = son enseignant, code = le code. Recopie TOUT ce tableau dans « legend » (abbr = code, meaning = intitulé, teacher = enseignant), une ligne par code : deux lignes n'ont jamais le même code.
   - Les codes se ressemblent beaucoup (1MAN3250, 2MAN3250, 3MAN3250) : lis chaque chiffre avec soin. Quand chaque matière a sa couleur, note la couleur de fond (« color ») de chaque case ET de chaque ligne du tableau, avec les mêmes mots (« jaune », « gris », « orange », « vert », « bleu », « bleu clair », « violet », « rose »…). En cas de doute sur un chiffre, c'est la couleur qui tranche.
3. Pour chaque case : « label » = le texte principal tel qu'écrit ; « subject » = le nom complet de la matière.
   Sigles courants en Côte d'Ivoire : MATHS = Mathématiques ; PC ou SP = Physique-Chimie ; SVT = SVT ; FR = Français ; ANG = Anglais ; ESP = Espagnol ; ALL = Allemand ; ESP/ALL ou LV2 = LV2 (Espagnol / Allemand) ; HG = Histoire-Géographie ; EDHC = EDHC ; EPS = EPS ; PHILO = Philosophie ; AP = Arts plastiques ; MUS = Musique ; INFO ou TICE = Informatique.
   Un sigle que tu ne connais pas et que le document n'explique pas (ex. « CS », « TE ») : recopie-le tel quel, ne devine pas. S'il est expliqué dans une légende du document, utilise l'explication et ajoute-la dans « legend ».
4. Ne mets JAMAIS dans « subject » : le nom du professeur, un numéro de téléphone, la salle, « +TP », « (1 fois / trimestre) ». Mets le professeur dans « teacher », la salle dans « room ». « TP PC » → subject « Physique-Chimie », kind « tp ».
5. « kind » : cours / tp / td / cm pour un enseignement ; « evaluation » pour Devoir, DS, Examen, Interrogation (si la matière est écrite, mets-la dans subject) ; « pause » pour Récréation, Pause, Déjeuner ; « administratif » pour Étude, Permanence, Conseil de classe, Vie de classe, Réunion.
6. PLUSIEURS CLASSES : si le document contient plusieurs classes, groupes ou promotions (ex. LSTCF 1A, LSTCF 1B…), fais une entrée par classe dans « classes », chacune avec SES cases. Ne mélange jamais deux classes.${classHint ? ` (La classe de l'élève est probablement « ${classHint} ».)` : ''} Un tableau d'occupation de salle (cases remplies de noms de classes) n'est pas un emploi du temps : ignore-le.
7. Vérifie avant de répondre : chaque case a un jour et des heures cohérentes (début < fin), aucune case de la grille n'est oubliée, aucune n'est inventée.

Réponds uniquement avec le JSON demandé.`;
}

// ---------------------------------------------------------------------------
// Vérification et correction par le code
// ---------------------------------------------------------------------------
const norm = (s) => strip(s).replace(/\s+/g, '');

function classKey(name) {
  return strip(name)
    .replace(/\bseconde\b|\b2nd\b|\b2de\b/g, '2nde')
    .replace(/\bpremiere\b|\b1re\b|\b1ere\b/g, '1ere')
    .replace(/\bterminale\b|\btle\b|\bterm\b/g, 'tle')
    .replace(/\s+/g, '');
}

/** Nettoie les cases d'une classe et renvoie les créneaux de cours + les alertes. */
function cleanClassCells(cells, legend) {
  const warnings = [];
  const legendItems = (Array.isArray(legend) ? legend : []).filter((l) => l && l.abbr && l.meaning);
  const legendMap = new Map(legendItems.map((l) => [strip(l.abbr), String(l.meaning).trim()]));
  const legendTeacher = new Map(legendItems.filter((l) => l.teacher).map((l) => [strip(l.abbr), String(l.teacher).trim()]));
  // Couleur → ligne du tableau des codes, seulement quand cette couleur n'appartient qu'à UNE ligne (sinon elle ne prouve rien)
  const colorKey = (c) => strip(c).replace(/\b(fonce|vif|pale)\b/g, '').replace(/\s+/g, ' ').trim();
  const byColor = new Map();
  for (const l of legendItems) {
    const k = colorKey(l.color);
    if (k && k !== 'blanc') byColor.set(k, byColor.has(k) ? null : l);
  }
  const slots = [];
  for (const c of cells || []) {
    const day = normalizeDay(c.day);
    const start = normalizeTime(c.start);
    const end = normalizeTime(c.end);
    if (!day || !start || !end) continue;
    if (toMin(end) - toMin(start) < 20 || toMin(end) - toMin(start) > 10 * 60) continue;
    const kind = String(c.kind || 'cours').toLowerCase();
    if (kind === 'pause' || kind === 'administratif') continue;
    let subject = String(c.subject || '').trim();
    const label = String(c.label || '').trim();
    let code = String(c.code || '').trim();
    // Code mal lu (1MAN3250 / 2MAN3250 / 3MAN3250 se ressemblent) : la couleur de la case, propre à une seule matière, tranche
    //    (seulement pour une case qui contient un code : « APP 1 », violet comme une autre matière, n'est pas renommé)
    const byCellColor = byColor.get(colorKey(c.color));
    const looksLikeCode = (s) => /^\d?[a-z]{2,5}\d{3,6}$/i.test(String(s || '').replace(/\s+/g, ''));
    let teacherFromColor = '';
    if (byCellColor && kind !== 'evaluation' && (looksLikeCode(code) || looksLikeCode(label))) {
      subject = String(byCellColor.meaning).trim();
      code = String(byCellColor.abbr).trim();
      teacherFromColor = String(byCellColor.teacher || '').trim();
    }
    // Sigle ou code d'ECUE expliqué par la légende du document (tableau des ECUE sous la grille)
    const legendKey = [subject, code, label].map(strip).find((k) => k && legendMap.has(k));
    if (legendKey && (!subject || strip(subject) === legendKey)) subject = legendMap.get(legendKey);
    if (legendKey && !code && /\d/.test(legendKey)) code = legendKey.toUpperCase().replace(/\s+/g, '');
    // Nom de professeur, numéro de téléphone ou « +TP (…) » collés au nom de la matière : on les retire
    subject = subject
      .replace(/\s*0\d{9}\b/g, '')
      .replace(/\s*[/|]\s*(?:m\.|mme|mr|dr|pr)?\s*[A-ZÀ-Ÿ][A-ZÀ-Ÿ' .-]{2,}$/u, '')
      .replace(/\s*\+\s*TP\b\s*(?:\([^)]*\))?/i, '')
      .trim();
    subject = canonicalSubject(subject, label);
    if (kind === 'evaluation' && (!subject || isNonCourseLabel(subject))) continue; // devoir sans matière
    if (!subject || isNonCourseLabel(subject) || (isNonCourseLabel(label) && !c.subject)) continue;
    const type = kind === 'tp' ? 'TP' : kind === 'td' ? 'TD' : kind === 'cm' ? 'CM' : '';
    slots.push({
      day, start, end, subject, type,
      room: String(c.room || '').trim(),
      teacher: teacherFromColor || String(c.teacher || '').replace(/\s*0\d{9}\s*/g, ' ').trim() || (legendKey && legendTeacher.get(legendKey)) || '',
      code,
      weeks: String(c.weeks || '').trim(),
      group: String(c.group || '').trim(),
    });
  }

  // 1. Tri, doublons exacts, cours identiques collés (écart ≤ 5 min) fusionnés au sein d'une même semaine
  slots.sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || toMin(a.start) - toMin(b.start) || toMin(a.end) - toMin(a.end));
  const mergedByWeek = [];
  for (const s of slots) {
    const prev = mergedByWeek[mergedByWeek.length - 1];
    const same = prev && prev.day === s.day && norm(prev.subject) === norm(s.subject) && prev.weeks === s.weeks && prev.group === s.group;
    if (same && toMin(s.start) <= toMin(prev.end) + 5) {
      if (toMin(s.end) > toMin(prev.end)) prev.end = s.end;
      prev.room ||= s.room; prev.teacher ||= s.teacher; prev.code ||= s.code;
      if (s.type && prev.type !== s.type) prev.type = prev.type || s.type;
      continue;
    }
    mergedByWeek.push({ ...s });
  }

  // 2. Consolidation multi-semaines : lorsqu'un emploi du temps est une grille à colonnes de semaines
  //    (ex. Semaines 1 à 10 à l'ESATIC), un même créneau hebdomadaire (même jour, même matière, mêmes heures)
  //    est fusionné en UN SEUL créneau hebdomadaire canonique pour éviter de créer 7 matières ou 7 cours doublons.
  const merged = [];
  for (const s of mergedByWeek) {
    const existing = merged.find(
      (m) =>
        m.day === s.day &&
        norm(m.subject) === norm(s.subject) &&
        m.group === s.group &&
        Math.abs(toMin(m.start) - toMin(s.start)) <= 10 &&
        Math.abs(toMin(m.end) - toMin(s.end)) <= 10,
    );
    if (existing) {
      existing.room ||= s.room;
      existing.teacher ||= s.teacher;
      existing.code ||= s.code;
      existing.type ||= s.type;
      if (s.weeks && existing.weeks && !existing.weeks.split(',').map((w) => w.trim()).includes(s.weeks)) {
        existing.weeks = `${existing.weeks}, ${s.weeks}`;
      } else {
        existing.weeks ||= s.weeks;
      }
      continue;
    }
    merged.push({ ...s });
  }

  // 3. Bande « journée entière » (Congés, Examens, Fête… mal reconnus) : un bloc d'au moins 5 h qui recouvre
  //    au moins deux cours plus courts du même jour n'est pas un cours, il écraserait toute la journée.
  const len = (s) => toMin(s.end) - toMin(s.start);
  const covers = (a, b) => a !== b && a.day === b.day && toMin(b.start) < toMin(a.end) && toMin(a.start) < toMin(b.end) && len(b) < len(a);
  const banners = merged.filter((a) => len(a) >= 300 && merged.filter((b) => covers(a, b)).length >= 2);
  for (const b of banners) merged.splice(merged.indexOf(b), 1);
  [...new Set(banners.map((b) => b.subject))].forEach((name) =>
    warnings.push(`« ${name} » couvre des journées entières par-dessus d'autres cours : ce n'est pas un cours, il a été retiré.`),
  );

  // Chevauchements de deux matières différentes le même jour (hors semaines ou groupes différents)
  for (let i = 0; i < merged.length; i++) {
    for (let j = i + 1; j < merged.length && merged[j].day === merged[i].day; j++) {
      const a = merged[i], b = merged[j];
      if (toMin(b.start) >= toMin(a.end)) continue;
      if ((a.weeks || b.weeks) && a.weeks !== b.weeks) continue;
      if ((a.group || b.group) && a.group !== b.group) continue;
      warnings.push(`${a.day.charAt(0) + a.day.slice(1).toLowerCase()} : « ${a.subject} » (${a.start}-${a.end}) et « ${b.subject} » (${b.start}-${b.end}) se chevauchent, vérifie ces deux cours.`);
    }
  }

  // Tableau des codes : un code lu deux fois, ou une matière du tableau absente de la grille → lecture douteuse, l'élève vérifie
  const seenCodes = new Map();
  for (const l of legendItems) {
    const k = strip(l.abbr);
    if (seenCodes.has(k) && strip(seenCodes.get(k)) !== strip(l.meaning)) {
      warnings.push(`Le code ${String(l.abbr).trim()} a été lu pour deux matières (« ${seenCodes.get(k)} » et « ${String(l.meaning).trim()} ») : vérifie les matières de ta grille.`);
    }
    seenCodes.set(k, String(l.meaning).trim());
  }
  const foundSubjects = new Set(merged.map((s) => norm(s.subject)));
  const foundCodes = new Set(merged.map((s) => norm(s.code)).filter(Boolean));
  const missing = legendItems.filter((l) => !foundCodes.has(norm(l.abbr)) && !foundSubjects.has(norm(canonicalSubject(String(l.meaning), ''))) && !isNonCourseLabel(l.meaning));
  if (missing.length && missing.length < legendItems.length) {
    warnings.push(`${missing.map((l) => `« ${String(l.meaning).trim()} »`).join(', ')} ${missing.length > 1 ? 'figurent' : 'figure'} dans le tableau des matières mais pas dans la grille lue : ajoute ${missing.length > 1 ? 'ces cours' : 'ce cours'} si besoin.`);
  }
  return { slots: merged, warnings };
}

/** Réécrit les créneaux d'une classe dans le format texte de Konan (sans polluer le nom de matière avec les numéros de semaines). */
export function serializeSlots(slots, format) {
  const lines = [];
  for (const day of DAYS) {
    const daySlots = slots.filter((s) => s.day === day);
    if (!daySlots.length) continue;
    lines.push(`JOUR: ${day}`);
    for (const s of daySlots) {
      let name = stripWeeks(s.subject);
      if (format === 'lmd') {
        if (s.type && !new RegExp(`\\b${s.type}\\b`, 'i').test(name)) name = `${s.type} ${name}`;
        if (s.code) name += ` [${s.code}]`;
        if (s.room) name += ` | Salle: ${s.room}`;
        if (s.teacher) name += ` | Prof: ${s.teacher}`;
      } else if (format === 'tpcm') {
        name = `${s.type || 'CM'} ${name}`;
        if (s.room) name += ` (${s.room})`;
      }
      lines.push(`- ${s.start} - ${s.end} : ${name}`);
    }
    lines.push('');
  }
  return lines.join('\n').trim();
}

/** Transforme la réponse JSON de Gemini en emplois du temps vérifiés, une entrée par classe. */
export function postProcessTimetable(json, format, classHint) {
  const rawClasses = Array.isArray(json?.classes) ? json.classes : [];
  const classes = [];
  const warnings = [];
  rawClasses.forEach((c, i) => {
    const { slots, warnings: w } = cleanClassCells(flattenClassCells(c), json?.legend);
    if (!slots.length) return;
    const name = String(c?.name || '').trim() || `Classe ${i + 1}`;
    classes.push({ name, slots, warnings: w, text: serializeSlots(slots, format), slotCount: slots.length, subjectCount: new Set(slots.map((s) => norm(s.subject))).size });
  });
  // Deux « classes » au contenu identique (même grille répétée) : on n'en garde qu'une
  const unique = classes.filter((c, i) => classes.findIndex((d) => d.text === c.text) === i);

  let chosen = unique[0];
  if (unique.length > 1) {
    const hint = classKey(classHint);
    const byHint = hint && unique.find((c) => classKey(c.name) === hint || classKey(c.name).includes(hint) || hint.includes(classKey(c.name)));
    if (byHint) chosen = byHint;
    warnings.push(
      `Ce document contient ${unique.length} classes (${unique.map((c) => c.name).join(', ')}). ` +
        (byHint ? `La classe « ${chosen.name} » a été retenue : vérifie que c'est bien la tienne.` : `Choisis ta classe : « ${chosen.name} » est affichée pour l'instant.`),
    );
  }
  if (chosen) warnings.push(...chosen.warnings);
  return {
    text: chosen ? chosen.text : '',
    chosenClass: chosen ? chosen.name : '',
    classes: unique.map((c) => ({ name: c.name, text: c.text, slotCount: c.slotCount, subjectCount: c.subjectCount })),
    warnings,
  };
}

// ---------------------------------------------------------------------------
// Appel à Gemini
// ---------------------------------------------------------------------------
function parseJsonLoose(text) {
  const raw = String(text || '').trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/i, '');
  try { return JSON.parse(raw); } catch { /* suite */ }
  const a = raw.indexOf('{'), b = raw.lastIndexOf('}');
  if (a >= 0 && b > a) { try { return JSON.parse(raw.slice(a, b + 1)); } catch { /* suite */ } }
  return null;
}

/**
 * Lit un emploi du temps (PDF ou image en base64) et renvoie :
 * { text, model, classes:[{name,text,slotCount,subjectCount}], chosenClass, warnings }
 * En dernier recours (réponse JSON impossible), revient à l'ancienne lecture en texte libre.
 */
export async function extractTimetable({ apiKey, data, mimeType, format, classHint = '', models }) {
  const ai = new GoogleGenAI({ apiKey });
  const startedAt = Date.now();
  const isLmd = format === 'lmd';
  const deadline = isLmd ? LMD_DEADLINE_MS : TOTAL_DEADLINE_MS;
  const timeLeft = () => deadline - (Date.now() - startedAt);
  // Temps accordé à un modèle : on garde ~40 s pour le modèle rapide de secours (LMD)
  const modelTimeout = () => (isLmd ? Math.min(LMD_MODEL_TIMEOUT_MS, Math.max(30_000, timeLeft() - 40_000)) : Math.min(75_000, timeLeft()));
  const prompt = buildStructuredPrompt(format, classHint);
  const modelList = models || (isLmd ? LMD_MODELS : STRUCTURED_MODELS);
  // PDF de plusieurs pages : réflexion « medium » (en « low », une page entière peut être sautée)
  const multiPage = /pdf/i.test(mimeType || '') && pdfPageCount(data) > 1;
  let skipToLast = false;
  for (const [index, model] of modelList.entries()) {
    if (timeLeft() < 20_000) break;
    // Le modèle précis a dépassé son temps : le suivant, aussi lent, n'aurait pas le temps ; on passe au plus rapide (le dernier)
    if (skipToLast && index < modelList.length - 1) continue;
    try {
      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ inlineData: { data, mimeType } }, { text: prompt }] }],
        config: {
          responseMimeType: 'application/json',
          responseJsonSchema: RESPONSE_SCHEMA,
          temperature: 0,
          // Lecture fine des petits caractères (photos floues, cases étroites) et réflexion réglée par modèle
          mediaResolution: 'MEDIA_RESOLUTION_HIGH',
          thinkingConfig: thinkingConfigFor(model, { multiPage }),
          httpOptions: { timeout: modelTimeout() },
        },
      });
      const json = parseJsonLoose(response.text);
      const result = json && postProcessTimetable(json, format, classHint);
      if (result && result.text) return { ...result, model };
    } catch (err) {
      if (isLmd && /timeout|timed out|abort|deadline/i.test(String(err?.message || err))) skipToLast = true;
      console.warn(`[extract-timetable] ${model} (JSON) indisponible : ${String(err?.message || err).slice(0, 120)}`);
    }
  }
  // Repli : ancienne consigne en texte libre
  for (const model of FALLBACK_TEXT_MODELS) {
    if (timeLeft() < 15_000) break;
    try {
      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ inlineData: { data, mimeType } }, { text: buildTimetablePrompt(format) }] }],
        config: { httpOptions: { timeout: Math.min(60_000, timeLeft()) } },
      });
      const text = cleanTimetableOutput(response.text || '');
      if (text.length > 5) return { text, model, classes: [], chosenClass: '', warnings: [] };
    } catch (err) {
      console.warn(`[extract-timetable] ${model} (texte) indisponible : ${String(err?.message || err).slice(0, 120)}`);
    }
  }
  return null;
}
