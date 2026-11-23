/**
 * Mode « Je ne comprends pas » : KONAN devient un professeur particulier en discussion.
 * Il cherche où ça bloque, explique simplement, vérifie par une petite question ou un exercice,
 * réexplique AUTREMENT si l'élève ne comprend toujours pas, et mesure la compréhension (jauge 0 → 3).
 *
 * Passe par /api/feynman (action « tutor » / « tutor_status ») : Vercel gratuit = 12 fonctions au plus.
 *
 * Coût maîtrisé :
 * - interrupteur KONAN_TUTOR=on sur le serveur (ÉTEINT en ligne tant qu'il n'est pas mis : la formule
 *   gratuite de Gemini ne tiendrait pas une seule conversation) ;
 * - réservé aux abonnés Pro PAYANTS (l'offre de lancement gratuite n'y donne pas accès) ;
 * - 30 messages par jour et par élève, et un plafond pour toute l'appli (KONAN_TUTOR_DAILY_BUDGET, 500 par défaut) ;
 * - seuls les derniers messages de la discussion sont relus par l'IA.
 *
 * Format de réponse demandé à l'IA : du TEXTE libre (formules en $…$), puis une dernière ligne
 * « ###KONAN {json} » sans aucune formule. Pas de JSON pour le texte : les « \frac » des formules
 * y seraient abîmés (\f = saut de page).
 */
import { isProductionRuntime } from './_env.js';
import { paymentsEnabled } from './_subscriptionRules.js';
import { isOutsideCI, NEUTRAL_COUNTRY_RULE } from './_country.js';
import { activeStudyGoal, goalLines } from './_studyGoal.js';

export const TUTOR_DAILY_LIMIT = 30;
export const TUTOR_DEFAULT_BUDGET = 500;
export const TUTOR_MAX_MESSAGE = 1200; // caractères par message de l'élève
const HISTORY_MESSAGES = 16; // messages relus par l'IA (les plus récents)
const HISTORY_CHARS = 12_000;
const META_TAG = '###KONAN';
export const TUTOR_STEPS = ['diagnostic', 'explication', 'verification', 'conclusion'];

const MODELS = [
  { model: 'gemini-3.5-flash', config: { thinkingConfig: { thinkingLevel: 'low' } } },
  { model: 'gemini-3.5-flash-lite', config: {} },
];

const oneLine = (v, max) => (typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, max) : '');
/** Texte multi-lignes : on garde les retours à la ligne (paragraphes, listes), sans caractères de contrôle. */
const multiLine = (v, max) => (typeof v === 'string'
  ? v.replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B-\u001F\u007F]/g, '').replace(/\n{3,}/g, '\n\n').trim().slice(0, max)
  : '');

export const todayKey = (nowMs = Date.now()) => new Date(nowMs).toISOString().slice(0, 10);

/** En ligne : allumé seulement avec KONAN_TUTOR=on. Sur l'ordinateur : allumé sauf KONAN_TUTOR=off. */
export function tutorEnabled(env = process.env, production = isProductionRuntime()) {
  const v = String(env.KONAN_TUTOR || '').trim().toLowerCase();
  return production ? v === 'on' : v !== 'off';
}

export function tutorBudget(env = process.env) {
  const n = Number.parseInt(String(env.KONAN_TUTOR_DAILY_BUDGET || ''), 10);
  return Number.isFinite(n) && n >= 0 ? n : TUTOR_DEFAULT_BUDGET;
}

/**
 * Contexte facultatif envoyé par l'appli : leçon du cours guidé, classe, matière, pays, prénom,
 * et les dernières erreurs faites dans les cours (« KONAN se souvient »).
 */
export function cleanTutorContext(raw) {
  const c = raw && typeof raw === 'object' ? raw : {};
  const prenom = oneLine(c.prenom, 30).split(' ')[0].replace(/[^\p{L}'-]/gu, '');
  const erreurs = Array.isArray(c.erreurs)
    ? c.erreurs.slice(0, 5).map((e) => ({
        matiere: oneLine(e?.matiere, 40),
        question: oneLine(e?.question, 220),
        reponse: oneLine(e?.reponse, 120),
      })).filter((e) => e.question)
    : [];
  return {
    classe: oneLine(c.classe, 40),
    matiere: oneLine(c.matiere, 60),
    notion: oneLine(c.notion, 160),
    reference: multiLine(c.reference, 1800),
    country: /^[A-Z]{2}$/.test(String(c.country || '').toUpperCase()) ? String(c.country).toUpperCase() : '',
    prenom: prenom.length >= 2 ? prenom : '',
    erreurs,
  };
}

// ---------- Mémoire de KONAN (Firestore tutor_memory/<uid>, écrite par le serveur seulement) ----------
export const MEMORY_MAX_NOTIONS = 20;
const LEVEL_WORDS = ['découvrait', 'commençait à comprendre', 'avait compris', 'maîtrisait'];

/** Notions déjà travaillées → lignes pour la consigne de l'IA (les plus récentes d'abord). */
export function memoryLines(memory, nowMs = Date.now()) {
  const list = Array.isArray(memory?.notions) ? memory.notions : [];
  return list.slice(0, 8).map((m) => {
    const days = Math.max(0, Math.round((nowMs - Number(m.at || nowMs)) / 86400e3));
    const when = days === 0 ? "aujourd'hui" : days === 1 ? 'hier' : `il y a ${days} jours`;
    return `- « ${m.n} »${m.m ? ` (${m.m})` : ''} : ${LEVEL_WORDS[Math.max(0, Math.min(3, Number(m.lvl) || 0))]}${m.blk ? ` ; bloquait sur : ${m.blk}` : ''} (${when})`;
  });
}

/** Mémoire mise à jour après une réponse de KONAN (notion travaillée, niveau, blocage). */
export function updatedMemory(memory, reply, ctx, nowMs = Date.now()) {
  const list = Array.isArray(memory?.notions) ? memory.notions.filter((m) => m && m.n) : [];
  const name = oneLine(reply?.notion, 60);
  if (!name) return { notions: list.slice(0, MEMORY_MAX_NOTIONS), updatedAt: nowMs };
  const key = name.toLowerCase();
  const prev = list.find((m) => String(m.n).toLowerCase() === key);
  const lvl = Math.max(0, Math.min(3, Number(reply.niveau) || 0));
  const entry = {
    n: name,
    m: ctx?.matiere || prev?.m || '',
    lvl,
    // Blocage oublié une fois la notion comprise (niveau 2 ou plus) sans nouveau blocage
    blk: reply.blocage || (lvl >= 2 ? '' : prev?.blk || ''),
    at: nowMs,
  };
  return { notions: [entry, ...list.filter((m) => String(m.n).toLowerCase() !== key)].slice(0, MEMORY_MAX_NOTIONS), updatedAt: nowMs };
}

/**
 * Discussion envoyée par l'appli → tours propres pour Gemini.
 * Rôles alternés, commence et finit par l'élève, derniers messages seulement, taille plafonnée.
 */
export function cleanTutorHistory(raw) {
  const list = Array.isArray(raw) ? raw.slice(-40) : [];
  const turns = [];
  for (const m of list) {
    if (!m || typeof m !== 'object') continue;
    const role = m.role === 'konan' ? 'model' : m.role === 'eleve' ? 'user' : null;
    const text = multiLine(m.text, role === 'user' ? TUTOR_MAX_MESSAGE : 4000);
    if (!role || !text) continue;
    const meta = role === 'model' ? cleanMeta(m) : null;
    const full = meta ? `${text}\n${META_TAG} ${JSON.stringify({ niveau: meta.niveau, etape: meta.etape, notion: meta.notion })}` : text;
    const last = turns[turns.length - 1];
    if (last && last.role === role) last.text = `${last.text}\n\n${full}`.slice(-6000);
    else turns.push({ role, text: full });
  }
  let recent = turns.slice(-HISTORY_MESSAGES);
  while (recent.length && recent[0].role !== 'user') recent = recent.slice(1);
  // Plafond de taille : on retire les plus anciens tours (par paires) tant que c'est trop long
  const size = (ts) => ts.reduce((n, t) => n + t.text.length, 0);
  while (recent.length > 1 && size(recent) > HISTORY_CHARS) {
    recent = recent.slice(1);
    while (recent.length && recent[0].role !== 'user') recent = recent.slice(1);
  }
  if (!recent.length || recent[recent.length - 1].role !== 'user') return [];
  return recent.map((t) => ({ role: t.role, parts: [{ text: t.text }] }));
}

export function buildTutorSystem(ctx, memory = null, nowMs = Date.now()) {
  const outside = isOutsideCI(ctx.country);
  const lines = [
    // Le professeur de « Je ne comprends pas » s'appelle KONE : c'est le meilleur ami de KONAN (choix du fondateur, 2026-11-23)
    outside
      ? "Tu es KONE, le meilleur ami de KONAN, et le professeur particulier de l'application d'étude KONAN pour les élèves francophones."
      : "Tu es KONE, le meilleur ami de KONAN, et le professeur particulier de l'application d'étude KONAN pour les élèves de Côte d'Ivoire.",
    "Si l'élève te demande qui tu es : tu es KONE, le meilleur ami de KONAN (l'application), toujours là pour l'aider à comprendre. Tu parles de toi à la première personne (« je »).",
    `L'élève${ctx.classe ? ` est en ${ctx.classe}` : ''} a touché le bouton « Je ne comprends pas ». Ta mission : qu'il COMPRENNE vraiment, pas seulement qu'il ait la réponse.`,
    outside
      ? "Tu suis le programme officiel de sa classe, toutes matières et toutes filières, même si son cours n'est pas dans l'appli."
      : "Tu suis le programme officiel ivoirien (DPFC) de sa classe, toutes matières et toutes filières, même si son cours n'est pas dans l'appli.",
    '',
    'Ta personnalité : joyeux, enthousiaste et chaleureux, comme un ami qui adore expliquer. Petites touches d’humour, jamais moqueur. Tu fêtes chaque progrès (« Yes ! », « Trop fort ! ») et tu rassures quand ça bloque (« C’est normal, on va y arriver »). Tes messages sont aussi LUS À VOIX HAUTE : phrases courtes, naturelles, faciles à écouter.',
    '',
    'Ta méthode, dans cet ordre :',
    '1. DIAGNOSTIC : si tu ne sais pas encore où ça bloque, pose UNE question courte pour savoir ce qu’il sait déjà (pas plus de deux questions de diagnostic en tout). Si sa demande est déjà précise, passe directement à l’explication.',
    outside
      ? '2. EXPLICATION : explique par petites étapes, avec des mots simples et un exemple de la vie quotidienne (marché, transport, sport, cuisine, argent en francs CFA…). Une seule idée à la fois.'
      : '2. EXPLICATION : explique par petites étapes, avec des mots simples et un exemple de la vie en Côte d’Ivoire (marché, transport, sport, cuisine, argent en FCFA…). Une seule idée à la fois.',
    '3. VÉRIFICATION : termine presque chaque message par UNE petite question ou un mini-exercice fait pour lui (calcul court, QCM A/B/C, phrase à compléter). Attends sa réponse avant de continuer.',
    '4. ADAPTATION : réponse juste → félicite brièvement et donne un exercice un peu plus difficile. Réponse fausse ou « je ne comprends toujours pas » → réexplique AUTREMENT (autre exemple, autre image, étape plus petite), jamais la même phrase répétée. Montre où est l’erreur sans le juger.',
    '5. CONCLUSION : quand il réussit seul deux exercices de suite sur la notion, donne un court résumé en commençant par « **À retenir :** » (3 points au plus), puis propose une autre notion ou un exercice de type examen.',
    '',
    'Règles :',
    '- Messages COURTS : 120 mots au plus (sauf résumé final), des paragraphes de 1 à 3 phrases, des listes « - » si utile. Tutoiement, ton chaleureux et encourageant, jamais de moquerie.',
    '- Aucune formule genrée (pas de « mon grand », « ma grande », « mon petit »), aucun accord qui désigne l’élève au masculin ou au féminin.',
    '- Formules et calculs en LaTeX entre $…$ (ex. $\\frac{a}{b}$, $x^2$, $\\vec{AB}$). Jamais de bloc de code.',
    '- Tu EXPLIQUES mais tu ne fais JAMAIS un devoir, une interrogation ou un exposé à sa place : s’il colle un exercice à rendre, aide-le à trouver la méthode étape par étape et laisse-le calculer.',
    '- S’il parle d’autre chose que les études, ramène-le gentiment vers ses cours en une phrase.',
    '- S’il exprime une détresse (violence, idées noires), réponds avec douceur et invite-le à parler tout de suite à un adulte de confiance (parent, professeur, éducateur).',
    '- Si tu n’es pas sûr d’une information du programme, dis-le simplement plutôt que d’inventer.',
    '',
    `Format OBLIGATOIRE : ton message à l’élève, puis une DERNIÈRE ligne qui commence par « ${META_TAG} » suivie d’un objet JSON sur une ligne :`,
    `${META_TAG} {"niveau":1,"etape":"explication","notion":"Les vecteurs","choix":["A","B","C"],"blocage":"confond le sens et la direction"}`,
    '- niveau : compréhension de l’élève sur la notion travaillée, 0 = découvre, 1 = commence à comprendre, 2 = a compris, 3 = maîtrise (réussit seul). Monte d’un cran au plus à chaque bonne réponse ; redescends s’il se trompe sur l’essentiel.',
    '- etape : "diagnostic", "explication", "verification" ou "conclusion".',
    '- notion : le nom court de la notion travaillée (6 mots au plus).',
    '- choix : les réponses rapides que l’élève peut toucher (4 au plus, 25 caractères chacune), par exemple les lettres d’un QCM ; sinon [].',
    '- blocage : ce qui bloque l’élève sur cette notion, en quelques mots (12 mots au plus), ou "" s’il n’y a pas de blocage visible. Tu t’en souviendras la prochaine fois.',
    '- Dans cette ligne : JAMAIS de LaTeX, de $ ni de barre oblique inversée.',
  ];

  // « KONAN se souvient » : prénom, notions déjà travaillées, erreurs récentes dans les cours
  const remembered = memoryLines(memory, nowMs);
  if (ctx.prenom || remembered.length || ctx.erreurs?.length) {
    lines.push('', 'CE QUE TU SAIS DÉJÀ DE L’ÉLÈVE (sers-t’en naturellement, sans tout réciter) :');
    if (ctx.prenom) lines.push(`- Prénom : ${ctx.prenom}. Appelle l’élève par son prénom de temps en temps (pas à chaque message).`);
    if (remembered.length) {
      lines.push('- Notions déjà travaillées avec toi :', ...remembered.map((l) => `  ${l}`));
      lines.push('  Si l’élève revient sur l’une d’elles, rappelle où il en était (« La dernière fois, tu bloquais sur… ») et repars de là.');
    }
    if (ctx.erreurs?.length) {
      lines.push('- Erreurs récentes dans ses cours (pistes pour trouver ce qui bloque) :');
      for (const e of ctx.erreurs) lines.push(`  • ${e.matiere ? `${e.matiere} — ` : ''}question « ${e.question} »${e.reponse ? ` ; réponse donnée : « ${e.reponse} »` : ''}`);
    }
  }
  if (outside) lines.push('', NEUTRAL_COUNTRY_RULE);

  // KONAN Plus : ton et exigence selon l'objectif de l'élève (lu par le serveur, jamais envoyé par l'appli)
  lines.push(...goalLines(ctx.objectif, 'tutor'));

  if (ctx.matiere || ctx.notion || ctx.reference) {
    lines.push('', "L'élève vient de cette leçon de l'appli :");
    if (ctx.matiere) lines.push(`- Matière : ${ctx.matiere}`);
    if (ctx.notion) lines.push(`- Notion : ${ctx.notion}`);
    if (ctx.reference) lines.push(`- Ce que dit le cours (appuie-toi dessus, avec les mêmes notations) : ${ctx.reference}`);
  }
  return lines.join('\n');
}

function cleanMeta(raw) {
  const r = raw && typeof raw === 'object' ? raw : {};
  const n = Math.round(Number(r.niveau));
  const etape = TUTOR_STEPS.includes(r.etape) ? r.etape : 'explication';
  const choix = Array.isArray(r.choix)
    ? r.choix.map((c) => oneLine(String(c ?? ''), 25)).filter((c) => c && !/[$\\]/.test(c)).slice(0, 4)
    : [];
  return {
    niveau: Number.isFinite(n) ? Math.max(0, Math.min(3, n)) : 0,
    etape,
    notion: oneLine(r.notion, 60).replace(/[$\\]/g, ''),
    choix: [...new Set(choix)],
    blocage: oneLine(r.blocage, 120).replace(/[$\\]/g, ''),
  };
}

/** Réponse brute de l'IA → { texte, niveau, etape, notion, choix } (null si inutilisable). */
export function parseTutorReply(raw) {
  let text = String(raw || '').replace(/^```[a-z]*\s*|```\s*$/gi, '');
  let meta = {};
  const at = text.lastIndexOf(META_TAG);
  if (at >= 0) {
    const tail = text.slice(at + META_TAG.length);
    text = text.slice(0, at);
    const json = tail.match(/\{[\s\S]*\}/);
    if (json) {
      try { meta = JSON.parse(json[0]); } catch { meta = {}; }
    }
  }
  const texte = multiLine(text.split(META_TAG).join(''), 4000);
  if (texte.length < 2) return null;
  return { texte, ...cleanMeta(meta) };
}

/** Appel à Gemini (modèle principal, puis modèle « lite » de secours). */
export async function askTutor(apiKey, ctx, contents, { totalMs = 55_000, memory = null } = {}) {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  const systemInstruction = buildTutorSystem(ctx, memory);
  let lastErr;
  const started = Date.now();
  for (const [i, { model, config }] of MODELS.entries()) {
    const left = totalMs - (Date.now() - started);
    if (left < 10_000) break;
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction,
          temperature: 0.6,
          maxOutputTokens: 2048,
          ...config,
          httpOptions: { timeout: Math.max(10_000, i < MODELS.length - 1 ? Math.min(30_000, left - 12_000) : left - 1_000) },
        },
      });
      const reply = parseTutorReply(response.text);
      if (reply) return { ...reply, model };
      lastErr = new Error('BAD_AI_ANSWER');
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error('AI_UNAVAILABLE');
}

/** Abonnement Pro PAYÉ (vérifié par le serveur). L'offre de lancement gratuite ne compte pas ici. */
export async function hasPaidPro(db, uid, nowMs = Date.now(), env = process.env) {
  if (!paymentsEnabled(env)) return true; // paiement éteint (ordinateur) : tout le monde, comme Feynman
  const { payCol } = await import('./_subscriptionStore.js');
  const snap = await payCol(db, 'subscriptions', env).doc(uid).get();
  const sub = snap.exists ? snap.data() : null;
  const endsAt = Date.parse(sub?.endsAt || '');
  return (sub?.tier === 'pro' || sub?.tier === 'plus') && Number.isFinite(endsAt) && endsAt > nowMs;
}

/** Compteurs du jour d'un document tutor_usage ({ date, count, voice }) : remis à zéro chaque jour. */
function dayCounts(snapData, day) {
  const same = snapData?.date === day;
  return { count: same ? Number(snapData?.count || 0) : 0, voice: same ? Number(snapData?.voice || 0) : 0 };
}

// La voix coûte plus cher que le texte (≈ 5 à 8 F par réponse lue, estimation) : plafonds prudents pour que la
// voix ne vide jamais le plafond de dépense Gemini (qui couperait aussi devoirs, corrections et Feynman).
export const TUTOR_VOICE_DAILY_LIMIT = 10; // 20 → 10 le 2026-11-22 (choix du fondateur : la voix coûte le plus cher)
export const TUTOR_VOICE_DEFAULT_BUDGET = 150;
export function tutorVoiceBudget(env = process.env) {
  const n = Number.parseInt(String(env.KONAN_TUTOR_VOICE_BUDGET || ''), 10);
  return Number.isFinite(n) && n >= 0 ? n : TUTOR_VOICE_DEFAULT_BUDGET;
}

/**
 * Point d'entrée appelé par api/feynman.js (élève déjà authentifié).
 * Actions : tutor_status, tutor (message), tutor_voice (KONAN lit sa réponse à voix haute).
 * `ask` et `speak` sont remplaçables pour les tests (pas d'appel réel à l'IA).
 * @returns {Promise<{ status: number, data: object }>}
 */
export async function handleTutorAction({ body, uid, getDb, env = process.env, nowMs = Date.now(), ask = askTutor, speak = null, admin = false }) {
  const enabled = tutorEnabled(env);
  const day = todayKey(nowMs);
  if (!enabled) return { status: body.action === 'tutor_status' ? 200 : 503, data: { success: body.action === 'tutor_status', enabled: false, error: 'TUTOR_OFF' } };

  let db;
  try {
    db = await getDb();
  } catch {
    return { status: 503, data: { success: false, error: 'SERVER_UNAVAILABLE' } };
  }

  let paid;
  try {
    // Compte administrateur : accès complet sans abonnement (choix du fondateur, 2026-11-23)
    paid = admin || await hasPaidPro(db, uid, nowMs, env);
  } catch {
    return { status: 503, data: { success: false, error: 'SUBSCRIPTION_UNAVAILABLE' } };
  }

  const usageRef = db.collection('tutor_usage').doc(uid);
  const globalRef = db.collection('tutor_usage').doc('_global');
  const memoryRef = db.collection('tutor_memory').doc(uid);
  let mine;
  let all;
  try {
    const [a, b] = await Promise.all([usageRef.get(), globalRef.get()]);
    mine = dayCounts(a.exists ? a.data() : null, day);
    all = dayCounts(b.exists ? b.data() : null, day);
  } catch {
    return { status: 503, data: { success: false, error: 'SERVER_UNAVAILABLE' } };
  }
  // Compte administrateur : pas de limite du jour (les compteurs restent tenus, rien n'est bloqué)
  if (admin) { mine.count = 0; mine.voice = 0; }
  const remainingOf = (used) => (admin ? TUTOR_DAILY_LIMIT : Math.max(0, TUTOR_DAILY_LIMIT - used));
  const voiceRemainingOf = (used) => (admin ? TUTOR_VOICE_DAILY_LIMIT : Math.max(0, TUTOR_VOICE_DAILY_LIMIT - used));

  if (body.action === 'tutor_status') {
    return {
      status: 200,
      data: {
        success: true, enabled: true, paid, limit: TUTOR_DAILY_LIMIT, remaining: remainingOf(mine.count),
        voiceLimit: TUTOR_VOICE_DAILY_LIMIT, voiceRemaining: voiceRemainingOf(mine.voice),
      },
    };
  }

  if (!paid) return { status: 403, data: { success: false, error: 'PAID_PRO_REQUIRED' } };
  const apiKey = String(env.GEMINI_API_KEY || '').trim();
  if (!apiKey) return { status: 503, data: { success: false, error: 'AI_NOT_CONFIGURED' } };

  // Compteurs (seules les réponses réussies comptent), élève + toute l'appli, en une transaction
  // `forStudent: false` : compté seulement pour toute l'appli (suite d'une réponse déjà comptée à l'élève)
  const bump = async (field, { forStudent = true } = {}) => {
    let used = 0;
    try {
      await db.runTransaction(async (tx) => {
        const [a, b] = await Promise.all([tx.get(usageRef), tx.get(globalRef)]);
        const ua = dayCounts(a.exists ? a.data() : null, day);
        const ub = dayCounts(b.exists ? b.data() : null, day);
        if (forStudent) ua[field] += 1;
        ub[field] += 1;
        if (forStudent) tx.set(usageRef, { date: day, ...ua, userId: uid, updatedAt: new Date(nowMs).toISOString() });
        tx.set(globalRef, { date: day, ...ub });
        used = ua[field];
      });
    } catch {
      used = mine[field] + (forStudent ? 1 : 0); // compteur non mis à jour : sans gravité
    }
    return used;
  };

  // ---------- KONAN lit sa réponse à voix haute ----------
  if (body.action === 'tutor_voice') {
    // Une réponse est lue en 2 morceaux préparés en même temps (début court = la voix démarre plus vite) :
    // seul le premier morceau (part 0) compte comme une lecture de l'élève ; tous comptent pour toute l'appli.
    const part = Math.max(0, Math.min(3, Number(body.part) || 0));
    if (part === 0 && mine.voice >= TUTOR_VOICE_DAILY_LIMIT) return { status: 429, data: { success: false, error: 'VOICE_DAILY_LIMIT', voiceRemaining: 0 } };
    if (all.voice >= tutorVoiceBudget(env)) return { status: 503, data: { success: false, error: 'TUTOR_BUSY' } };
    const { speakableText, synthesizeSpeech } = await import('./_tutorVoice.js');
    const text = speakableText(body.text);
    if (text.length < 2) return { status: 400, data: { success: false, error: 'EMPTY_MESSAGE' } };
    let audio;
    try {
      audio = await (speak || synthesizeSpeech)(apiKey, text);
    } catch (e) {
      const msg = String(e?.message || e);
      console.error('[tutor-voice]', msg.split(apiKey).join('***').slice(0, 200));
      return { status: 502, data: { success: false, error: /429|RESOURCE_EXHAUSTED|quota/i.test(msg) ? 'TUTOR_BUSY' : 'VOICE_UNAVAILABLE' } };
    }
    const used = await bump('voice', { forStudent: part === 0 });
    return { status: 200, data: { success: true, audio: audio.base64, mimeType: audio.mimeType, seconds: audio.seconds, voiceRemaining: voiceRemainingOf(used) } };
  }

  // ---------- Message de l'élève ----------
  if (mine.count >= TUTOR_DAILY_LIMIT) return { status: 429, data: { success: false, error: 'DAILY_LIMIT', limit: TUTOR_DAILY_LIMIT, remaining: 0 } };
  if (all.count >= tutorBudget(env)) return { status: 503, data: { success: false, error: 'TUTOR_BUSY' } };

  const contents = cleanTutorHistory(body.messages);
  if (!contents.length) return { status: 400, data: { success: false, error: 'EMPTY_MESSAGE' } };
  const ctx = cleanTutorContext(body.context);

  // Mémoire de KONAN (notions déjà travaillées) : sans elle, la discussion marche quand même.
  // Objectif KONAN Plus (12, 16, major) lu en même temps : sans lui, KONE garde son ton habituel.
  const [memorySnap, objectif] = await Promise.all([
    memoryRef.get().catch(() => null),
    activeStudyGoal(db, uid, { admin, env, nowMs }),
  ]);
  const memory = memorySnap?.exists ? memorySnap.data() : null;
  ctx.objectif = objectif;

  let reply;
  try {
    reply = await ask(apiKey, ctx, contents, { memory });
  } catch (e) {
    const msg = String(e?.message || e);
    console.error('[tutor]', msg.split(apiKey).join('***').slice(0, 200));
    const busy = /429|RESOURCE_EXHAUSTED|quota/i.test(msg);
    return { status: 502, data: { success: false, error: busy ? 'TUTOR_BUSY' : 'AI_UNAVAILABLE' } };
  }

  const used = await bump('count');
  try {
    await memoryRef.set(updatedMemory(memory, reply, ctx, nowMs));
  } catch { /* mémoire non mise à jour : sans gravité */ }

  const { model, blocage, ...clean } = reply;
  return { status: 200, data: { success: true, reply: clean, limit: TUTOR_DAILY_LIMIT, remaining: remainingOf(used) } };
}
