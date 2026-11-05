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

/** Modèles essayés dans l'ordre (le plus précis d'abord, repli automatique s'il est saturé). */
export const STRUCTURED_MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-3.5-flash'];
/** Dernier recours en texte libre (ancienne consigne) : un seul modèle léger, pour ménager le quota. */
export const FALLBACK_TEXT_MODELS = ['gemini-flash-lite-latest'];
/** Au-delà, on n'essaie plus d'autre modèle (l'élève attend). */
const TOTAL_DEADLINE_MS = 110_000;

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
  }).flatMap(([name, keys]) => keys.map((k) => [k, name])),
);

/** Mots qui ne sont pas des cours : pauses, administration, évaluations sans matière. */
const NON_COURSE = /^(recre(ation)?|pause( dejeuner| midi)?|dejeuner|repas|midi|interclasse|etude( surveillee)?|permanence|vie de classe|heure de vie de classe|conseil de classe|conseil|reunion|libre|temps libre|ferie|conge|vacances?|devoir( surveille)?|ds|dst|examens?|evaluation|interrogation|composition|bac blanc|bepc blanc|rattrapage|partiels?|surveillance|tutorat|autonomie|semaines? pedagogiques?|plages?|horaires?|jours?)$/;

/** Nom standard d'une matière à partir du nom proposé par l'IA et du texte écrit dans la case. */
export function canonicalSubject(subject, label) {
  for (const candidate of [subject, label]) {
    const key = strip(candidate)
      .replace(/^(tp|td|cm|cours( de)?|devoir( de| d)?|ds( de)?)\s+/, '')
      .replace(/\s+(tp|td|cm)$/, '');
    if (!key) continue;
    if (SUBJECT_ALIASES.has(key)) return SUBJECT_ALIASES.get(key);
  }
  const clean = String(subject || label || '').replace(/\s+/g, ' ').trim();
  // Écrit tout en majuscules (« DROIT CIVIL ») : on garde les sigles courts tels quels (« CS », « CF 1 »), sinon casse normale
  if (clean.length > 4 && clean === clean.toUpperCase() && /[A-Z]{4,}/.test(clean)) {
    return clean.toLowerCase().replace(/(^|[\s'’(-])([a-zà-ÿ])/g, (m, p, c) => p + c.toUpperCase()).replace(/\b(De|Du|Des|Et|La|Le|Les|En|À|Au|Aux|D'|L')\b/g, (w) => w.toLowerCase());
  }
  return clean;
}

export function isNonCourseLabel(text) {
  const k = strip(String(text || '').replace(/\([^)]*\)/g, ' '));
  if (!k || NON_COURSE.test(k)) return true;
  // « Devoir surveillé toutes disciplines », « DS commun », « Examen blanc » : évaluation sans matière précise
  const evalHead = /^(devoir|ds|dst|examen|evaluation|interrogation|composition|controle|bac blanc|bepc blanc)( surveille| commun| blanc)?\b\s*(.*)$/.exec(k);
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
  },
  required: ['day', 'start', 'end', 'label', 'subject', 'kind'],
};

const RESPONSE_SCHEMA = {
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
      description: 'Sigles expliqués dans le document lui-même (légende, tableau des codes)',
      items: { type: 'object', properties: { abbr: { type: 'string' }, meaning: { type: 'string' } }, required: ['abbr', 'meaning'] },
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
  const legendMap = new Map((legend || []).filter((l) => l && l.abbr && l.meaning).map((l) => [strip(l.abbr), String(l.meaning).trim()]));
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
    // Sigle expliqué par la légende du document
    if (legendMap.has(strip(subject)) || (!subject && legendMap.has(strip(label)))) subject = legendMap.get(strip(subject)) || legendMap.get(strip(label));
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
      teacher: String(c.teacher || '').replace(/\s*0\d{9}\s*/g, ' ').trim(),
      code: String(c.code || '').trim(),
      weeks: String(c.weeks || '').trim(),
      group: String(c.group || '').trim(),
    });
  }

  // Tri, doublons exacts, cours identiques collés (écart ≤ 5 min) fusionnés
  slots.sort((a, b) => DAYS.indexOf(a.day) - DAYS.indexOf(b.day) || toMin(a.start) - toMin(b.start) || toMin(b.end) - toMin(a.end));
  const merged = [];
  for (const s of slots) {
    const prev = merged[merged.length - 1];
    const same = prev && prev.day === s.day && norm(prev.subject) === norm(s.subject) && prev.weeks === s.weeks && prev.group === s.group;
    if (same && toMin(s.start) <= toMin(prev.end) + 5) {
      if (toMin(s.end) > toMin(prev.end)) prev.end = s.end;
      prev.room ||= s.room; prev.teacher ||= s.teacher; prev.code ||= s.code;
      if (s.type && prev.type !== s.type) prev.type = prev.type || s.type;
      continue;
    }
    merged.push({ ...s });
  }

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
  return { slots: merged, warnings };
}

/** Réécrit les créneaux d'une classe dans le format texte de Konan. */
export function serializeSlots(slots, format) {
  const lines = [];
  for (const day of DAYS) {
    const daySlots = slots.filter((s) => s.day === day);
    if (!daySlots.length) continue;
    lines.push(`JOUR: ${day}`);
    for (const s of daySlots) {
      let name = s.subject;
      if (format === 'lmd') {
        if (s.type && !new RegExp(`\\b${s.type}\\b`, 'i').test(name)) name = `${s.type} ${name}`;
        if (s.code) name += ` [${s.code}]`;
        if (s.room) name += ` | Salle: ${s.room}`;
        if (s.teacher) name += ` | Prof: ${s.teacher}`;
      } else if (format === 'tpcm') {
        name = `${s.type || 'CM'} ${name}`;
        if (s.room) name += ` (${s.room})`;
      }
      if (s.weeks) name += ` — semaines ${s.weeks}`;
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
export async function extractTimetable({ apiKey, data, mimeType, format, classHint = '', models = STRUCTURED_MODELS }) {
  const ai = new GoogleGenAI({ apiKey });
  const startedAt = Date.now();
  const timeLeft = () => TOTAL_DEADLINE_MS - (Date.now() - startedAt);
  const prompt = buildStructuredPrompt(format, classHint);
  for (const model of models) {
    if (timeLeft() < 20_000) break;
    try {
      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ inlineData: { data, mimeType } }, { text: prompt }] }],
        config: {
          responseMimeType: 'application/json',
          responseJsonSchema: RESPONSE_SCHEMA,
          temperature: 0,
          // Lecture fine des petits caractères (photos floues, cases étroites) et réflexion plafonnée (temps de réponse)
          mediaResolution: 'MEDIA_RESOLUTION_HIGH',
          thinkingConfig: { thinkingBudget: 4096 },
          httpOptions: { timeout: Math.min(75_000, timeLeft()) },
        },
      });
      const json = parseJsonLoose(response.text);
      const result = json && postProcessTimetable(json, format, classHint);
      if (result && result.text) return { ...result, model };
    } catch (err) {
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
