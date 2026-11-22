/**
 * KONAN AI - Correction d'une copie de devoir (photos) selon le barème du sujet.
 * Endpoint : POST /api/exam-correct   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Corps JSON : { classe, matiere, sujet: { exercices, corrige }, images: [{ mimeType, data(base64) }] } (1 à 4 photos)
 * Réponse    : { success, correction: { lisible, note, exercices: [{ numero, obtenu, sur, commentaire }], appreciation, conseils } }
 *
 * Les photos ne sont pas gardées : elles sont envoyées à Gemini pour la correction, puis oubliées.
 * La note sur 20 est RECALCULÉE ici à partir des points de chaque exercice (jamais recopiée telle quelle).
 * Limite : 1 correction par jour et par élève (2026-11-17, comme les sujets). Une copie illisible ou une
 * panne de l'IA n'est pas décomptée : l'élève peut renvoyer ses photos.
 */
import { guard, readBody, send, str, readUsage, addUsage, askGeminiJson, aiErrorCode, getDb, examTiming } from './_examCommon.js';
import { isOutsideCI, neutralizeForCountry, NEUTRAL_COUNTRY_RULE } from './_country.js';

export const DAILY_CORRECTIONS = 1;
const IMAGE_TYPES = /^image\/(jpeg|jpg|png|webp)$/;
const MAX_IMAGES = 4;

const num = (v) => {
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
};
const round = (n) => Math.round(n * 4) / 4; // au quart de point, comme une vraie correction

/** Tableau en lignes de texte (« colonne | colonne »), pour le correcteur. */
const tableText = (t) => [t.colonnes, ...(t.lignes || [])].map((row) => row.join(' | ')).join('\n');

/** Tableau reçu de l'appli : bornes de taille, cellules en texte court. */
const cleanTableIn = (t) => (t && Array.isArray(t.colonnes) && Array.isArray(t.lignes)
  ? { colonnes: t.colonnes.slice(0, 12).map((c) => str(String(c ?? ''), 200)), lignes: t.lignes.slice(0, 12).map((r) => (Array.isArray(r) ? r.slice(0, 12).map((c) => str(String(c ?? ''), 400)) : [])) }
  : null);

export function buildCorrectionPrompt({ classe, matiere, sujet }) {
  const lines = [];
  for (const e of sujet.exercices) {
    lines.push(`EXERCICE ${e.numero} (${e.points} points) — ${e.nature || ''}${e.auChoix ? ' — AU CHOIX : l’élève traite UN seul des sujets proposés' : ''}`);
    if (e.contexte) lines.push(`Texte ou document de l’exercice :\n${e.contexte}`);
    // Documents numérotés et données : le correcteur doit voir les mêmes valeurs que l'élève
    for (const d of e.documents || []) {
      const shownAs = d.graphique === 'courbe' ? ' (montré à l’élève en courbe)' : d.graphique === 'barres' ? ' (montré à l’élève en diagramme en barres)' : '';
      lines.push(`${d.id}${d.titre ? ` — ${d.titre}` : ''}${shownAs} :${d.texte ? `\n${d.texte}` : ''}${d.tableau ? `\n${tableText(d.tableau)}` : ''}`);
    }
    if (e.tableau) lines.push(`Tableau de l’exercice :\n${tableText(e.tableau)}`);
    if (e.donnees) lines.push(e.donnees);
    if (e.consigne) lines.push(`Consigne : ${e.consigne}`);
    for (const q of e.questions || []) lines.push(`  ${q.numero}. ${q.texte} (${q.points} pt)`);
    if (e.grille) lines.push(`  Grille officielle : ${e.grille.map((g) => `${g.critere} (${g.points} pt) : ${g.indicateurs}`).join(' | ')}`);
  }
  const corrige = (sujet.corrige || []).map((c) => `Ex ${c.exercice} q.${c.question} (${c.points} pt) : ${c.reponse}`).join('\n');
  return [
    `Tu es KONAN, professeur de ${matiere} en Côte d'Ivoire. Corrige la copie manuscrite (photos jointes) d'un élève de ${classe}, en suivant STRICTEMENT le barème du sujet ci-dessous, comme un correcteur officiel.`,
    'SUJET :',
    lines.join('\n'),
    'CORRIGÉ ET BARÈME :',
    corrige,
    'Règles :',
    '- AVANT de noter une question, compare la copie à la réponse attendue ÉLÉMENT PAR ÉLÉMENT. « juste » SEULEMENT si la copie contient TOUS les éléments attendus ; sinon « partiel » avec des points proportionnels aux éléments présents (ex. 1 condition sur 2 = la moitié des points), ou « faux ».',
    '- Choix d’une lettre (a, b, c…) ou Vrai/Faux : la lettre ou le mot de la copie doit être EXACTEMENT celui du corrigé, sinon 0 et « faux ». Ne te fie jamais à l’ordre des lignes : relis le numéro écrit par l’élève.',
    '- Une réponse qui dit ce qui se passe sans en donner la cause demandée (« l’amidon a disparu » au lieu de « l’amidon a été hydrolysé par l’amylase ») est « partiel ».',
    '- Donne des points partiels quand la démarche est juste mais le résultat faux ; 0 pour une question non traitée.',
    '- La « copie » de chaque question est la transcription EXACTE de ce que l’élève a écrit, caractère par caractère (crochets ] et [, signes, nombres, unités) : ne corrige JAMAIS la copie en la recopiant. Note ensuite ce qui est réellement écrit.',
    '- Intervalle ou ensemble de solutions : compare CHAQUE borne et CHAQUE crochet avec l’attendu. Un seul crochet différent (valeur interdite incluse, borne exclue à tort) = réponse NON juste (« partiel » au mieux).',
    '- Pas de code LaTeX dans « copie », « attendu » ni « erreur » : écris les symboles directement (∞, ∪, ≤, ≥, √, π, ½).',
    '- Écris TOUT en français, y compris la transcription de la copie (jamais un mot d’anglais). Écris l’infini « ∞ », pas « inf ».',
    '- Quand un exercice a une grille (situation complexe, production écrite), note-le avec cette grille, critère par critère.',
    '- Exercice au choix : note seulement le sujet traité ; si l’élève en a traité deux, garde la meilleure note.',
    '- Une construction (graphique, frise chronologique) se note sur la photo : titre, échelle, exactitude des données, légende, soin.',
    '- En Français, en Histoire-Géographie et en Philosophie, juge aussi la qualité de la rédaction (phrases complètes, réponses justifiées par le texte ou le document).',
    '- Un sujet de dissertation, de commentaire ou de résumé se note avec le barème détaillé donné dans le corrigé (introduction, développement, conclusion, présentation…), critère par critère ; pour un résumé, vérifie aussi le nombre de mots demandé.',
    'CORRECTION STRUCTURÉE, QUESTION PAR QUESTION (jamais un simple paragraphe) :',
    '- Pour CHAQUE question du sujet (dans l’ordre, avec son numéro exact) : obtenu (multiple de 0,25, jamais plus que ses points), statut (« juste », « partiel », « faux » ou « absent » si non traitée), copie = ce que l’élève a écrit, résumé en une ligne courte, attendu = la réponse attendue en une ligne courte, erreur = l’erreur PRÉCISE en une phrase (vide si juste).',
    '- Question ouverte (explication, justification, conditions, calcul en plusieurs étapes) : remplis « elements » = la liste des éléments attendus par le corrigé, chacun avec present = true seulement s’il est VRAIMENT écrit dans la copie.',
    '- Exercice avec grille : remplis « grille » avec les points obtenus pour CHAQUE critère, dans l’ordre de la grille ; questions = le ou les sujets traités.',
    '- commentaire de chaque exercice : une seule phrase à la première personne (« J’ai vu que… »).',
    '- pointsForts : 1 à 3 savoir-faire réussis, chacun en quelques mots (« Calcul de la masse molaire »).',
    '- aRevoir : 1 à 3 notions à retravailler : notion (quelques mots) + pourquoi (une phrase : l’erreur commise).',
    '- appreciation : 2 phrases au plus, à la première personne (« Je… »), bienveillantes et concrètes, tutoiement.',
    '- conseils : 1 à 3 actions précises et courtes à faire avant le devoir (verbe à l’impératif en tête).',
    '- Si les photos sont illisibles, floues, ou ne sont pas une copie de ce devoir : lisible = false.',
    'Réponds UNIQUEMENT en JSON :',
    '{"lisible":true,"exercices":[{"numero":1,"commentaire":"J’ai vu que…","questions":[{"numero":"1","obtenu":0.5,"statut":"juste","copie":"…","attendu":"…","erreur":"","elements":[{"element":"…","present":true}]}],"grille":[{"critere":"CM1 : Pertinence","obtenu":0.5}]}],"pointsForts":["…"],"aRevoir":[{"notion":"…","pourquoi":"…"}],"appreciation":"Je …","conseils":["…"]}',
    '« grille » vaut [] pour un exercice sans grille.',
  ].join('\n');
}

const STATUTS = ['juste', 'partiel', 'faux', 'absent'];
/** « 1. », « 1 », « Q1 », « Sujet 1 » → clé comparable. */
const qKey = (v) => String(v ?? '').toLowerCase().replace(/^q(?:uestion)?\s*/, '').replace(/[\s.:)]+/g, '');

/**
 * Correction structurée : pour chaque exercice, le détail question par question (points, statut, réponse de
 * l'élève, réponse attendue, erreur) et la grille critère par critère. Tous les points sont RECALCULÉS ici :
 * chaque question est plafonnée à son barème, chaque exercice à ses points, la note est la somme.
 */
/** Réponse fermée du corrigé : une lettre (« 2-b », « b ») ou Vrai / Faux. Renvoie la forme comparable, ou null. */
export function closedAnswer(text) {
  const t = String(text ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const last = (t.match(/reponse\s*:\s*(.+)$/m) || [null, t])[1].trim();
  const vf = last.match(/^(?:\d+\s*[-–).:]\s*)?(vrai|faux)\b\.?$/);
  if (vf) return vf[1];
  const m = last.match(/^(?:\d+\s*[-–).]\s*)?([a-e])\s*[.)]?$/);
  return m ? m[1] : null;
}
/** Ce que l'élève a choisi, lu dans sa copie (« 2 - a », « 2) Vrai »). */
export function closedChoice(copie) {
  const t = String(copie ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const vf = t.match(/\b(vrai|faux)\b/g);
  if (vf && new Set(vf).size === 1) return vf[0];
  const m = t.match(/^(?:\d+\s*[-–).:]\s*)?([a-e])\s*[.)]?$/);
  return m ? m[1] : null;
}

/**
 * Ensemble de solutions écrit avec des intervalles (« S = ]-∞ ; 3] ∪ ]4 ; +∞[ », « {−5 ; 4} ») :
 * forme comparable (morceaux triés), ou null si ce n'est pas une écriture d'intervalles / d'ensemble.
 */
export function setAnswer(text) {
  let t = String(text ?? '')
    .replace(/\$/g, '')
    .replace(/\\infty|∞|\binf(?:ini)?\b/gi, '∞')
    .replace(/\\cup|\bunion\b|\s[Uu]\s/g, '∪')
    .replace(/\\\{/g, '{').replace(/\\\}/g, '}')
    .replace(/\\left|\\right|\\,|\\;/g, '')
    .replace(/−/g, '-')
    .replace(/\s+/g, '');
  const m = t.match(/(?:S=|=|:)?((?:[\]\[{][^=]*?[\]\[}])(?:∪[\]\[{][^=]*?[\]\[}])*)$/);
  if (!m) return null;
  const parts = m[1].split('∪').map((x) => x.replace(/,/g, ';'));
  if (!parts.every((x) => /^[\]\[{][^\]\[{}]*[\]\[}]$/.test(x))) return null;
  return parts.sort().join('∪');
}

export function cleanCorrection(raw, sujet) {
  if (!raw || typeof raw !== 'object') return null;
  if (raw.lisible === false) {
    return { lisible: false, note: null, exercices: [], appreciation: str(raw.appreciation, 600) || 'Je n’arrive pas à lire ta copie. Reprends les photos bien à plat, avec de la lumière.', conseils: [], pointsForts: [], aRevoir: [] };
  }
  if (!Array.isArray(raw.exercices)) return null;
  const exercices = sujet.exercices.map((e) => {
    const found = raw.exercices.find((x) => Number(x?.numero) === e.numero) || {};
    const bareme = new Map((e.questions || []).map((q) => [qKey(q.numero), q.points]));

    const questions = (Array.isArray(found.questions) ? found.questions : []).slice(0, 25).map((q) => {
      const sur = bareme.get(qKey(q?.numero));
      const cap = Number.isFinite(sur) && sur > 0 ? sur : e.points;
      const obtenu = Math.max(0, Math.min(cap, round(num(q?.obtenu))));
      let statut = STATUTS.includes(q?.statut) ? q.statut : obtenu >= cap ? 'juste' : obtenu > 0 ? 'partiel' : 'faux';
      if (statut === 'juste' && obtenu < cap) statut = obtenu > 0 ? 'partiel' : 'faux'; // le statut suit les points
      return {
        numero: str(String(q?.numero ?? ''), 12),
        obtenu,
        sur: Number.isFinite(sur) && sur > 0 ? sur : null,
        statut,
        copie: str(q?.copie, 300),
        attendu: str(q?.attendu, 400),
        erreur: statut === 'juste' ? '' : str(q?.erreur, 400),
        elements: Array.isArray(q?.elements) ? q.elements.filter((x) => x && typeof x.element === 'string').slice(0, 8).map((x) => ({ element: str(x.element, 160), present: x.present === true })) : [],
      };
    }).filter((q) => q.numero).map((q) => {
      // Question ouverte : points = part des éléments attendus réellement présents (jamais « juste » s'il en manque)
      const els = q.elements || [];
      const { elements: _drop, ...rest } = q;
      if (els.length < 2 || !rest.sur) return rest;
      const got = els.filter((x) => x.present).length;
      if (got === els.length || rest.statut === 'absent') return rest;
      const capped = Math.round(((rest.sur * got) / els.length) * 4) / 4;
      const missing = els.filter((x) => !x.present).map((x) => x.element).join(' ; ');
      return {
        ...rest,
        statut: got === 0 ? 'faux' : 'partiel',
        obtenu: Math.min(rest.obtenu, capped),
        erreur: rest.erreur || `Il manque : ${missing}.`,
      };
    }).map((q) => {
      // Questions fermées (lettre, Vrai/Faux) : c'est le SERVEUR qui compare, jamais l'IA (erreurs vues le 2026-11-16)
      const attendu = (sujet.corrige || []).find((c) => Number(c.exercice) === e.numero && qKey(c.question) === qKey(q.numero));
      const expected = attendu ? closedAnswer(attendu.resultat || attendu.reponse) : null;
      const chosen = expected ? closedChoice(q.copie) : null;
      // Intervalles / ensembles : bornes ET crochets comparés par le serveur
      const expSet = attendu ? setAnswer(attendu.resultat || String(attendu.reponse || '').split(/r[ée]ponse\s*:/i).pop()) : null;
      const gotSet = expSet ? setAnswer(q.copie) : null;
      if (expSet && gotSet && q.statut === 'juste' && gotSet !== expSet) {
        const surQ = q.sur ?? (attendu && attendu.points > 0 ? attendu.points : null);
        const half = surQ ? Math.round((surQ / 2) * 4) / 4 : Math.round((q.obtenu / 2) * 4) / 4;
        return { ...q, sur: surQ, statut: 'partiel', obtenu: Math.min(q.obtenu, half), erreur: `Ta réponse « ${gotSet} » ne correspond pas exactement à « ${expSet} » : vérifie chaque borne et chaque crochet (valeurs interdites exclues).` };
      }
      if (!expected || !chosen) {
        // Question d'un tableau (pas de barème dans les questions) : barème lu dans le corrigé
        const surCorrige = q.sur ?? (attendu && attendu.points > 0 ? attendu.points : null);
        return surCorrige === q.sur ? q : { ...q, sur: surCorrige, obtenu: Math.min(q.obtenu, surCorrige) };
      }
      const sur = q.sur ?? (Number.isFinite(bareme.get(qKey(q.numero))) ? bareme.get(qKey(q.numero)) : (attendu.points > 0 ? attendu.points : null));
      const upper = /(^|[^a-z])[A-E]([^a-z]|$)/.test(String(attendu.resultat || attendu.reponse || ''));
      const shown = (v) => (v === 'vrai' ? 'Vrai' : v === 'faux' ? 'Faux' : upper ? v.toUpperCase() : v);
      return chosen === expected
        ? { ...q, sur, statut: 'juste', obtenu: sur ?? q.obtenu, erreur: '' }
        : { ...q, sur, statut: 'faux', obtenu: 0, erreur: `Tu as répondu « ${shown(chosen)} » : la bonne réponse est « ${shown(expected)} ».` };
    });

    const grille = Array.isArray(e.grille) && e.grille.length
      ? e.grille.map((g, i) => {
          const r = Array.isArray(found.grille) ? found.grille[i] : null;
          return { critere: g.critere, sur: g.points, obtenu: Math.max(0, Math.min(g.points, round(num(r?.obtenu)))) };
        })
      : [];
    const grilleFournie = grille.length > 0 && Array.isArray(found.grille) && found.grille.length > 0;

    // Points de l'exercice : la grille si elle est remplie, sinon la somme des questions, sinon le total donné
    let total;
    if (grilleFournie) total = grille.reduce((s, g) => s + g.obtenu, 0);
    else if (questions.length && e.auChoix) total = Math.max(...questions.map((q) => q.obtenu));
    else if (questions.length) total = questions.reduce((s, q) => s + q.obtenu, 0);
    else total = num(found.obtenu);
    const obtenu = Math.max(0, Math.min(e.points, round(total)));

    return { numero: e.numero, obtenu, sur: e.points, commentaire: str(found.commentaire, 400), questions, grille: grilleFournie ? grille : [] };
  });
  const note = Math.round(exercices.reduce((s, e) => s + e.obtenu, 0) * 4) / 4;
  const appreciation = str(raw.appreciation, 500);
  if (!appreciation) return null;
  const list = (v, n, max) => (Array.isArray(v) ? v.map((c) => str(c, max)).filter(Boolean).slice(0, n) : []);
  const conseils = list(raw.conseils, 3, 240);
  const pointsForts = list(raw.pointsForts, 3, 120);
  const aRevoir = Array.isArray(raw.aRevoir)
    ? raw.aRevoir.map((r) => ({ notion: str(r?.notion, 100), pourquoi: str(r?.pourquoi, 240) })).filter((r) => r.notion).slice(0, 3)
    : [];
  return { lisible: true, note, exercices, appreciation, conseils, pointsForts, aRevoir };
}

export default async function handler(req, res) {
  const ctx = await guard(req, res);
  if (!ctx) return;

  let body;
  try {
    body = await readBody(req);
  } catch (e) {
    return send(res, e?.code === 413 ? 413 : 400, { success: false, error: e?.code === 413 ? 'TOO_LARGE' : 'BAD_BODY' });
  }

  const sujet = body?.sujet;
  if (!sujet || !Array.isArray(sujet.exercices) || !sujet.exercices.length) return send(res, 400, { success: false, error: 'NO_SUJET' });
  const cleanSujet = {
    exercices: sujet.exercices.slice(0, 8).map((e, i) => ({
      numero: Number(e?.numero) || i + 1,
      points: Math.max(0, Math.min(20, num(e?.points))),
      nature: str(e?.nature, 200),
      consigne: str(e?.consigne, 1500),
      contexte: str(e?.contexte, 4000),
      documents: Array.isArray(e?.documents)
        ? e.documents.slice(0, 6).map((d) => ({ id: str(d?.id, 40), titre: str(d?.titre, 200), texte: str(d?.texte, 3000), tableau: cleanTableIn(d?.tableau), graphique: ['courbe', 'barres'].includes(d?.graphique) ? d.graphique : null })).filter((d) => d.id)
        : [],
      donnees: str(e?.donnees, 1200),
      tableau: cleanTableIn(e?.tableau),
      auChoix: e?.auChoix === true,
      // Jusqu'à 6000 caractères : un sujet au choix du format BAC contient son texte d'étude
      questions: Array.isArray(e?.questions) ? e.questions.slice(0, 20).map((q) => ({ numero: str(String(q?.numero ?? ''), 12), texte: str(q?.texte, 6000), points: num(q?.points) })) : [],
      grille: Array.isArray(e?.grille) ? e.grille.slice(0, 6).map((g) => ({ critere: str(g?.critere, 120), indicateurs: str(g?.indicateurs, 400), points: num(g?.points) })) : undefined,
    })),
    corrige: Array.isArray(sujet.corrige) ? sujet.corrige.slice(0, 80).map((c) => ({ exercice: Number(c?.exercice) || 0, question: str(String(c?.question ?? ''), 12), reponse: str(c?.reponse, 4000), points: num(c?.points) })) : [],
  };
  const images = Array.isArray(body.images) ? body.images.slice(0, MAX_IMAGES) : [];
  const parts = [];
  for (const img of images) {
    const mimeType = String(img?.mimeType || '').toLowerCase();
    const data = typeof img?.data === 'string' ? img.data : '';
    if (!IMAGE_TYPES.test(mimeType) || !data) return send(res, 400, { success: false, error: 'BAD_IMAGE' });
    parts.push({ inlineData: { mimeType, data } });
  }
  if (!parts.length) return send(res, 400, { success: false, error: 'NO_IMAGE' });

  let usage;
  try {
    usage = await readUsage(ctx.uid, 'correction');
  } catch (e) {
    return send(res, 500, { success: false, error: String(e?.message || 'SERVER_ERROR').slice(0, 120) });
  }
  if (usage.used >= DAILY_CORRECTIONS) return send(res, 429, { success: false, error: 'DAILY_LIMIT', limit: DAILY_CORRECTIONS, remaining: 0 });

  // Temps mis (chrono du serveur) : au-delà de 2 h + 15 min, copie « hors temps » (corrigée, mais sans XP)
  let timing = null;
  try {
    timing = await examTiming(await getDb(), ctx.uid, str(body.sessionId, 80), Date.now());
  } catch {
    // chrono illisible : la copie est corrigée sans indication de temps
  }

  let correction;
  try {
    const country = str(body.country, 4);
    const basePrompt = buildCorrectionPrompt({ classe: str(body.classe, 40) || 'Seconde', matiere: str(body.matiere, 80) || 'la matière', sujet: cleanSujet });
    // Élève hors Côte d'Ivoire : aucune mention ivoirienne dans la correction
    const prompt = isOutsideCI(country) ? `${neutralizeForCountry(basePrompt, country)}\n${NEUTRAL_COUNTRY_RULE}` : basePrompt;
    // Correction avec réflexion poussée (40 s pour une photo, mesuré le 2026-11-22 ; plus avec 4 photos) :
    // 230 s au total (vercel.json : 300 s), photos lues en haute résolution (écriture manuscrite),
    // essai principal plafonné à 160 s pour laisser 60 s au modèle de secours
    correction = await askGeminiJson(ctx.apiKey, [...parts, { text: prompt }], (raw) => cleanCorrection(raw, cleanSujet), 0.2, { thinkingConfig: { thinkingLevel: 'high' } }, {
      budgetMs: 230_000, attemptMs: 60_000, maxAttemptMs: 160_000, reserveMs: 60_000,
      sharedConfig: { mediaResolution: 'MEDIA_RESOLUTION_HIGH' },
    });
  } catch (e) {
    console.error('[exam-correct]', String(e?.message || e).slice(0, 200));
    // Rien n'est décompté : la correction ratée ne compte pas dans les 4 du jour
    return send(res, 503, { success: false, error: aiErrorCode(e) });
  }

  // Une copie illisible ne compte pas dans la limite du jour
  if (correction.lisible) await addUsage(usage.ref, ctx.uid, 'correction');
  return send(res, 200, { success: true, correction, timing, remaining: Math.max(0, DAILY_CORRECTIONS - usage.used - (correction.lisible ? 1 : 0)) });
}
