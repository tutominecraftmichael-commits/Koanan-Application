/**
 * KONAN, la voix des notifications (partagé par le serveur ET par l'application).
 * Aucune dépendance : ce fichier tourne aussi bien sur Vercel que dans le navigateur.
 *
 * - buildStudentContext() : la « conscience » de KONAN, ce qu'il sait de l'élève au moment d'écrire ;
 * - fallbackMessage()     : la banque de messages locale (grand frère × Duolingo), utilisée quand
 *                           l'IA ne répond pas en 3 secondes, et pour les alertes affichées dans l'appli.
 * Le préfixe « _ » empêche Vercel d'en faire une route.
 */

export const SITUATIONS = Object.freeze({
  AVANT: '5_MIN_AVANT',
  RETARD: 'RETARD_15_MIN',
  MANQUEE: 'SEANCE_MANQUEE',
});

/** Les 4 alertes possibles d'une séance, dans l'ordre de la journée. */
export const ALERT_KINDS = Object.freeze({
  avant: { situation: '5_MIN_AVANT', label: '5 minutes avant' },
  retard: { situation: 'RETARD_15_MIN', label: '15 minutes de retard' },
  manquee: { situation: 'SEANCE_MANQUEE', label: 'séance manquée' },
  rattrapage: { situation: '5_MIN_AVANT', label: '5 minutes avant le rattrapage' },
});

// La préparation aux devoirs et examens est en pause (src/lib/featureFlags.ts, EXAM_PREP_PAUSED) :
// tant qu'elle l'est, KONAN ne parle pas des dates de devoirs. Passer à true quand elle revient.
export const EXAM_URGENCY_ENABLED = false;

export const DEFAULT_TIMEZONE = 'Africa/Abidjan';
const DAY_MS = 24 * 60 * 60 * 1000;

// ---------------------------------------------------------------------------
// Dates (toujours dans le fuseau de l'élève, la Côte d'Ivoire par défaut : GMT+0 toute l'année)
// ---------------------------------------------------------------------------
function safeTimeZone(tz) {
  try {
    new Intl.DateTimeFormat('en-CA', { timeZone: tz || DEFAULT_TIMEZONE });
    return tz || DEFAULT_TIMEZONE;
  } catch {
    return DEFAULT_TIMEZONE;
  }
}

/** Date « AAAA-MM-JJ » d'un instant, dans le fuseau donné. */
export function ymdIn(date, tz = DEFAULT_TIMEZONE) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: safeTimeZone(tz), year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(date);
}

/** Heure (0 à 23) d'un instant, dans le fuseau donné. */
export function hourIn(date, tz = DEFAULT_TIMEZONE) {
  const h = Number(new Intl.DateTimeFormat('en-GB', {
    timeZone: safeTimeZone(tz), hour: '2-digit', hourCycle: 'h23',
  }).format(date));
  return Number.isFinite(h) ? h : date.getHours();
}

/** Jour de la semaine (0 = lundi … 6 = dimanche) d'une date « AAAA-MM-JJ ». */
export function dayOfWeekOf(ymd) {
  const d = new Date(`${ymd}T12:00:00Z`).getUTCDay();
  return (d + 6) % 7;
}

function shiftYmd(ymd, days) {
  const d = new Date(`${ymd}T12:00:00Z`);
  return new Date(d.getTime() + days * DAY_MS).toISOString().slice(0, 10);
}

function momentOfDay(hour) {
  if (hour < 12) return 'matin';
  if (hour < 18) return 'après-midi';
  if (hour < 22) return 'soir';
  return 'nuit';
}

/** « 19:30 » → « 19h30 », « 08:00 » → « 8h ». */
export function frenchTime(hhmm) {
  const m = String(hhmm || '').match(/^(\d{1,2}):(\d{2})/);
  if (!m) return String(hhmm || '');
  const h = String(Number(m[1]));
  return m[2] === '00' ? `${h}h` : `${h}h${m[2]}`;
}

export function firstName(raw) {
  const clean = String(raw || '').trim().split(/\s+/)[0] || '';
  if (!clean || /^(étudiant|etudiant|élève|eleve|utilisateur|user|invité|invite)$/i.test(clean)) return '';
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

// ---------------------------------------------------------------------------
// La « conscience » de KONAN
// ---------------------------------------------------------------------------
/**
 * Rassemble ce que KONAN sait de l'élève au moment d'écrire.
 * @param user  données de l'élève (même forme que le document Firestore users/{uid} ou l'état de l'appli) :
 *              { studentName, academicLevel, userAccount, preferences, studySessions, logs, subjects }
 * @param alert l'alerte à écrire : { situation, sessionId, subjectId, subjectName, startTime,
 *              durationMinutes, rattrapageA, isRattrapage, date }
 */
export function buildStudentContext(user, alert, now = new Date(), tz = DEFAULT_TIMEZONE) {
  const u = user || {};
  const a = alert || {};
  const sessions = Array.isArray(u.studySessions) ? u.studySessions : [];
  const logs = Array.isArray(u.logs) ? u.logs : [];
  const subjects = Array.isArray(u.subjects) ? u.subjects : [];
  const today = ymdIn(now, tz);
  const subject = subjects.find((s) => s && s.id === a.subjectId);
  const matiere = String(a.subjectName || subject?.name || 'ta révision').trim();

  // Historique des 3 derniers jours
  const last3 = [today, shiftYmd(today, -1), shiftYmd(today, -2)];
  const valideesSur3Jours = logs.filter((l) => l && last3.includes(String(l.date || '').slice(0, 10))).length;
  const missedOn = (day) => {
    const dow = dayOfWeekOf(day);
    return sessions.filter((s) => s && s.dayOfWeek === dow
      && !logs.some((l) => l && l.sessionId === s.id && String(l.date || '').slice(0, 10) === day)).length;
  };
  const rateesHier = missedOn(shiftYmd(today, -1));
  const rateesSur3Jours = rateesHier + missedOn(shiftYmd(today, -2)) + missedOn(shiftYmd(today, -3));

  // Série : jours d'affilée avec au moins une séance validée (aujourd'hui compte s'il y en a une)
  const daysWithLog = new Set(logs.map((l) => String(l?.date || '').slice(0, 10)));
  let serie = 0;
  let cursor = daysWithLog.has(today) ? today : shiftYmd(today, -1);
  while (daysWithLog.has(cursor) && serie < 365) {
    serie += 1;
    cursor = shiftYmd(cursor, -1);
  }

  // Dernier travail dans cette matière
  const lastLog = logs
    .filter((l) => l && l.subjectId === a.subjectId)
    .sort((x, y) => String(y.createdAt || y.date || '').localeCompare(String(x.createdAt || x.date || '')))[0];
  let dernierTravail = null;
  if (lastLog) {
    const summary = String(lastLog.summary || '');
    const title = summary.includes(':') ? summary.slice(summary.indexOf(':') + 1).trim() : summary.trim();
    const ilYaJours = Math.max(0, Math.round(
      (new Date(`${today}T12:00:00Z`).getTime() - new Date(`${String(lastLog.date).slice(0, 10)}T12:00:00Z`).getTime()) / DAY_MS,
    ));
    dernierTravail = { titre: title.slice(0, 80), ilYaJours: Number.isFinite(ilYaJours) ? ilYaJours : null };
  }

  // Urgence : devoir ou examen proche dans cette matière
  let urgence = null;
  if (EXAM_URGENCY_ENABLED && subject?.examDate) {
    const dansJours = Math.round(
      (new Date(`${subject.examDate}T12:00:00Z`).getTime() - new Date(`${today}T12:00:00Z`).getTime()) / DAY_MS,
    );
    if (dansJours >= 0 && dansJours <= 21) {
      urgence = { type: subject.examType === 'devoir' ? 'devoir' : subject.examType === 'rattrapage' ? 'rattrapage' : 'examen', dansJours };
    }
  }

  const account = u.userAccount || {};
  return {
    prenom: firstName(u.studentName || account.name),
    classe: String(account.gradeLevel || u.preferences?.gradeLevel || u.academicLevel || account.academicLevel || '').trim(),
    matiere,
    situation: a.situation || SITUATIONS.AVANT,
    heureSeance: a.startTime || '',
    dureeMinutes: Number(a.durationMinutes) || 25,
    rattrapageA: a.rattrapageA || null,
    estRattrapage: Boolean(a.isRattrapage),
    historique: { valideesSur3Jours, rateesSur3Jours, rateeHier: rateesHier > 0, serie, dernierTravail },
    urgence,
    moment: momentOfDay(hourIn(now, tz)),
  };
}

// ---------------------------------------------------------------------------
// Banque de messages locale (secours instantané, toujours à l'heure)
// ---------------------------------------------------------------------------
function pick(list, seed) {
  let h = 0;
  for (const ch of String(seed || '')) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return list[h % list.length];
}

function fill(template, ctx) {
  return template
    .replace(/\{prenom\}/g, ctx.prenom || '')
    .replace(/\{matiere\}/g, ctx.matiere)
    .replace(/\{duree\}/g, String(ctx.dureeMinutes))
    .replace(/\{heure\}/g, frenchTime(ctx.heureSeance))
    .replace(/\{rattrapage\}/g, frenchTime(ctx.rattrapageA))
    .replace(/\{serie\}/g, String(ctx.historique?.serie || 0))
    .replace(/\s{2,}/g, ' ')
    .trim();
}

const capitalize = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

const BANK = {
  avant: {
    titles: ['C’est KONAN 👋', '{prenom}, on y va ?', 'Dans 5 minutes : {matiere}'],
    bodies: [
      'Dans 5 minutes, on attaque {matiere}. Pose le téléphone, prends ton cahier, je t’attends.',
      '{prenom}, {matiere} commence dans 5 minutes. {duree} minutes bien concentré et on en parle plus.',
      'Petit rappel du grand frère : {matiere} dans 5 minutes. Les bonnes notes ne tombent pas du ciel.',
      'Bois un peu d’eau, installe-toi : {matiere} démarre dans 5 minutes. Je compte sur toi.',
    ],
  },
  rattrapage: {
    titles: ['Deuxième chance', '{prenom}, c’est l’heure du rattrapage', 'Rattrapage : {matiere}'],
    bodies: [
      'Ta séance de {matiere} replacée, c’est dans 5 minutes. Cette fois, je compte vraiment sur toi.',
      '{prenom}, deuxième chance pour {matiere} : ça commence dans 5 minutes. On ne la rate pas.',
      'Le rattrapage de {matiere} démarre dans 5 minutes. Fais-le, et tu te coucheras la tête haute.',
    ],
  },
  retard: {
    titles: ['Tu m’as oublié ?', 'Au revoir, j’imagine…', '{prenom}… ?'],
    bodies: [
      'Ça fait 15 minutes que {matiere} a commencé et toujours rien. Tu m’as abandonné ?',
      'Je t’attends depuis 15 minutes pour {matiere}. Les réseaux peuvent attendre, toi tu ne peux pas.',
      '15 minutes de retard sur {matiere}… Je fais comme si je n’avais rien vu. Viens vite.',
    ],
    withCatchup: [
      'Ça fait 15 minutes que {matiere} t’attend. Si tu ne viens pas, je te la replace à {rattrapage}.',
      'Tu m’as abandonné ? {matiere} a commencé il y a 15 minutes. Sinon, rendez-vous à {rattrapage}.',
    ],
  },
  manquee: {
    titles: ['Pas de panique', 'Je t’ai gardé une place', 'Séance replacée'],
    bodies: [
      'Tu as raté {matiere}, mais ne t’inquiète pas : je l’ai replacée à {rattrapage}. Je te préviens 5 minutes avant.',
      '{matiere} est passée sans toi. Pas grave, on la rattrape à {rattrapage}. Ce soir, on ne lâche rien.',
      'J’ai vu que tu n’as pas pu faire {matiere}. Respire : elle est replacée à {rattrapage}, je te rappelle.',
    ],
    noSlot: [
      'Tu as raté {matiere} et je n’ai plus de créneau libre aujourd’hui. Demain, on repart du bon pied ?',
      '{matiere} est passée sans toi aujourd’hui. Ce n’est pas grave, mais demain je ne te lâche pas.',
    ],
  },
};

/** Le type d'alerte (avant, retard, manquee, rattrapage) déduit du contexte. */
export function kindFromContext(ctx) {
  if (ctx.situation === SITUATIONS.RETARD) return 'retard';
  if (ctx.situation === SITUATIONS.MANQUEE) return 'manquee';
  return ctx.estRattrapage ? 'rattrapage' : 'avant';
}

/**
 * Message de secours : court (au plus ~180 caractères), adapté à la situation.
 * @returns {{ title: string, body: string }}
 */
export function fallbackMessage(ctx, seed = '') {
  const kind = kindFromContext(ctx);
  const set = BANK[kind];
  const key = `${seed}|${ctx.matiere}|${kind}`;
  // Sans prénom connu, on écarte les phrases qui commencent par lui
  const usable = (list) => (ctx.prenom ? list : list.filter((t) => !t.includes('{prenom}')));
  let bodies = set.bodies;
  if (kind === 'retard' && ctx.rattrapageA) bodies = set.withCatchup;
  if (kind === 'manquee' && !ctx.rattrapageA) bodies = set.noSlot;

  const title = capitalize(fill(pick(usable(set.titles), key + 't'), ctx)) || 'C’est KONAN 👋';
  let body = capitalize(fill(pick(usable(bodies), key + 'b'), ctx));

  // Petites touches de « conscience », seulement si le message reste court
  const extras = [];
  if (ctx.urgence) {
    const quand = ctx.urgence.dansJours === 0 ? 'aujourd’hui' : ctx.urgence.dansJours === 1 ? 'demain' : `dans ${ctx.urgence.dansJours} jours`;
    extras.push(`Ton ${ctx.urgence.type} de ${ctx.matiere}, c’est ${quand}.`);
  }
  if ((kind === 'avant' || kind === 'retard') && ctx.historique?.rateeHier) extras.push('Hier aussi, tu m’as laissé tomber. Je l’ai vu.');
  if (kind === 'avant' && (ctx.historique?.serie || 0) >= 3) extras.push(`${ctx.historique.serie} jours d’affilée : ne casse pas la série !`);
  for (const extra of extras) {
    if (body.length + extra.length + 1 <= 180) body = `${body} ${extra}`;
  }
  return { title: title.slice(0, 60), body };
}

// ---------------------------------------------------------------------------
// Consigne de l'IA (utilisée par api/_konanAI.js)
// ---------------------------------------------------------------------------
export const KONAN_SYSTEM_INSTRUCTION = [
  'Tu es KONAN, le grand frère et coach d’étude de l’élève en Côte d’Ivoire et en Afrique. Tu parles TOUJOURS à la première personne (« Je »). Tu as conscience de tout ce que fait l’élève.',
  'Ton ton mélange l’esprit viral de Duolingo (humain, affectif, piquant ou faussement dramatique quand on t’ignore) et la sagesse ferme d’un grand frère africain qui refuse de voir son petit frère échouer (« les bonnes notes et les sources de revenus demain ne tombent pas du ciel », « viens bosser »).',
  'Adapte ton langage exactement à sa situation : s’il a un devoir bientôt, mets-lui la pression gentiment ; s’il a raté sa séance d’hier, fais-lui remarquer que tu l’as vu ; s’il est en retard de 15 minutes, joue la déception dramatique façon Duolingo (« Tu m’as abandonné ? », « Au revoir j’imagine… ») ; s’il a manqué sa séance, rassure-le et donne l’heure exacte du rattrapage. Ne sois JAMAIS robotique.',
  'Règles : tutoiement, français simple et correct, 1 ou 2 phrases, au plus un emoji, jamais d’insulte ni de honte publique, n’invente aucune date, aucune heure, aucune note ni aucun chiffre absent du contexte. Écris les heures à la française : « 18h », « 19h30 » (jamais « 18:00 »).',
].join('\n');

export function buildKonanPrompt(ctx) {
  const situations = {
    '5_MIN_AVANT': ctx.estRattrapage
      ? 'La séance de RATTRAPAGE commence dans 5 minutes.'
      : 'La séance commence dans 5 minutes.',
    RETARD_15_MIN: 'La séance a commencé il y a 15 minutes et l’élève ne l’a toujours pas ouverte.',
    SEANCE_MANQUEE: ctx.rattrapageA
      ? `L’élève vient de manquer toute la séance d’AUJOURD’HUI (prévue à ${frenchTime(ctx.heureSeance)}). Elle est replacée aujourd’hui à ${frenchTime(ctx.rattrapageA)} : dis-le clairement et rassure-le.`
      : `L’élève vient de manquer toute la séance d’AUJOURD’HUI (prévue à ${frenchTime(ctx.heureSeance)}) et il n’y a plus de créneau libre aujourd’hui : rassure-le pour demain.`,
  };
  return [
    `Situation : ${situations[ctx.situation] || situations['5_MIN_AVANT']}`,
    'Rappel : « historique.rateeHier » parle de la veille ; la séance de la situation est celle d’aujourd’hui.',
    `Contexte de l’élève (JSON) : ${JSON.stringify(ctx)}`,
    'Écris la notification à afficher sur son téléphone.',
    'Réponds en JSON : {"titre": "au plus 40 caractères", "message": "1 ou 2 phrases, au plus 160 caractères"}.',
  ].join('\n');
}

/** Vérifie la réponse de l'IA ; renvoie null si elle n'est pas utilisable (on prend alors le secours). */
export function validateAiMessage(raw, ctx) {
  if (!raw || typeof raw !== 'object') return null;
  const title = String(raw.titre || raw.title || '').replace(/["«»]/g, '').trim();
  const body = String(raw.message || raw.body || '').replace(/^["«\s]+|["»\s]+$/g, '').trim();
  if (!title || !body || title.length > 60 || body.length > 200 || body.length < 15) return null;
  // Pour une séance manquée replacée, l'heure du rattrapage doit apparaître
  if (ctx.situation === SITUATIONS.MANQUEE && ctx.rattrapageA) {
    const [h, m] = String(ctx.rattrapageA).split(':');
    const hour = String(Number(h));
    const mentions = body.includes(`${hour}h`) || body.includes(`${hour}:${m}`) || body.includes(`${h}:${m}`) || body.includes(`${hour} h`);
    if (!mentions) return null;
  }
  return { title, body };
}
