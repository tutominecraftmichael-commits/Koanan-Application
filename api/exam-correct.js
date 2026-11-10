/**
 * KONAN AI - Correction d'une copie de devoir (photos) selon le barème du sujet.
 * Endpoint : POST /api/exam-correct   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Corps JSON : { classe, matiere, sujet: { exercices, corrige }, images: [{ mimeType, data(base64) }] } (1 à 4 photos)
 * Réponse    : { success, correction: { lisible, note, exercices: [{ numero, obtenu, sur, commentaire }], appreciation, conseils } }
 *
 * Les photos ne sont pas gardées : elles sont envoyées à Gemini pour la correction, puis oubliées.
 * La note sur 20 est RECALCULÉE ici à partir des points de chaque exercice (jamais recopiée telle quelle).
 * Limite : 4 corrections par jour et par élève.
 */
import { guard, readBody, send, str, readUsage, addUsage, askGeminiJson } from './_examCommon.js';

export const DAILY_CORRECTIONS = 4;
const IMAGE_TYPES = /^image\/(jpeg|jpg|png|webp)$/;
const MAX_IMAGES = 4;

const num = (v) => {
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : 0;
};
const round = (n) => Math.round(n * 4) / 4; // au quart de point, comme une vraie correction

export function buildCorrectionPrompt({ classe, matiere, sujet }) {
  const lines = [];
  for (const e of sujet.exercices) {
    lines.push(`EXERCICE ${e.numero} (${e.points} points) — ${e.nature || ''}${e.auChoix ? ' — AU CHOIX : l’élève traite UN seul des sujets proposés' : ''}`);
    if (e.contexte) lines.push(`Texte ou document de l’exercice :\n${e.contexte}`);
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
    '- Donne des points partiels quand la démarche est juste mais le résultat faux ; 0 pour une question non traitée.',
    '- Quand un exercice a une grille (situation complexe, production écrite), note-le avec cette grille, critère par critère.',
    '- Exercice au choix : note seulement le sujet traité ; si l’élève en a traité deux, garde la meilleure note.',
    '- Une construction (graphique, frise chronologique) se note sur la photo : titre, échelle, exactitude des données, légende, soin.',
    '- En Français et en Histoire-Géographie, juge aussi la qualité de la rédaction (phrases complètes, réponses justifiées par le texte ou le document).',
    '- Pour chaque exercice : points obtenus (multiple de 0,25) et un commentaire court à la première personne (« J’ai vu que… », « Tu as bien… »).',
    '- appreciation : 2 ou 3 phrases à la première personne (« Je… »), bienveillantes et concrètes, tutoiement.',
    '- conseils : 1 à 3 conseils précis pour progresser avant le devoir.',
    '- Si les photos sont illisibles, floues, ou ne sont pas une copie de ce devoir : lisible = false.',
    'Réponds UNIQUEMENT en JSON : {"lisible":true,"exercices":[{"numero":1,"obtenu":1.5,"commentaire":"…"}],"appreciation":"Je …","conseils":["…"]}',
  ].join('\n');
}

export function cleanCorrection(raw, sujet) {
  if (!raw || typeof raw !== 'object') return null;
  if (raw.lisible === false) {
    return { lisible: false, note: null, exercices: [], appreciation: str(raw.appreciation, 600) || 'Je n’arrive pas à lire ta copie. Reprends les photos bien à plat, avec de la lumière.', conseils: [] };
  }
  if (!Array.isArray(raw.exercices)) return null;
  const exercices = sujet.exercices.map((e) => {
    const found = raw.exercices.find((x) => Number(x?.numero) === e.numero) || {};
    const obtenu = Math.max(0, Math.min(e.points, round(num(found.obtenu))));
    return { numero: e.numero, obtenu, sur: e.points, commentaire: str(found.commentaire, 500) };
  });
  const note = Math.round(exercices.reduce((s, e) => s + e.obtenu, 0) * 4) / 4;
  const appreciation = str(raw.appreciation, 700);
  if (!appreciation) return null;
  const conseils = Array.isArray(raw.conseils) ? raw.conseils.map((c) => str(c, 300)).filter(Boolean).slice(0, 3) : [];
  return { lisible: true, note, exercices, appreciation, conseils };
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
      auChoix: e?.auChoix === true,
      questions: Array.isArray(e?.questions) ? e.questions.slice(0, 20).map((q) => ({ numero: str(String(q?.numero ?? ''), 12), texte: str(q?.texte, 1200), points: num(q?.points) })) : [],
      grille: Array.isArray(e?.grille) ? e.grille.slice(0, 6).map((g) => ({ critere: str(g?.critere, 120), indicateurs: str(g?.indicateurs, 400), points: num(g?.points) })) : undefined,
    })),
    corrige: Array.isArray(sujet.corrige) ? sujet.corrige.slice(0, 80).map((c) => ({ exercice: Number(c?.exercice) || 0, question: str(String(c?.question ?? ''), 12), reponse: str(c?.reponse, 1200), points: num(c?.points) })) : [],
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

  let correction;
  try {
    const prompt = buildCorrectionPrompt({ classe: str(body.classe, 40) || 'Seconde', matiere: str(body.matiere, 80) || 'la matière', sujet: cleanSujet });
    correction = await askGeminiJson(ctx.apiKey, [...parts, { text: prompt }], (raw) => cleanCorrection(raw, cleanSujet), 0.2);
  } catch (e) {
    console.error('[exam-correct]', String(e?.message || e).slice(0, 200));
    return send(res, 502, { success: false, error: 'AI_UNAVAILABLE' });
  }

  // Une copie illisible ne compte pas dans la limite du jour
  if (correction.lisible) await addUsage(usage.ref, ctx.uid, 'correction');
  return send(res, 200, { success: true, correction, remaining: Math.max(0, DAILY_CORRECTIONS - usage.used - (correction.lisible ? 1 : 0)) });
}
