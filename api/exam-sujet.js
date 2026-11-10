/**
 * KONAN AI - Sujet de devoir de 2 h au format officiel ivoirien (APC).
 * Endpoint : POST /api/exam-sujet   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Corps JSON : { subjectKey, gradeId, classe, matiere, chapitres: [{ titre, notions: [..] }] }
 * Réponse    : { success, sujet: { titre, exercices: [...], corrige: [...] }, remaining }
 *
 * Le modèle (structure, points, types d'exercices, barème) vient de api/_examTemplates.js.
 * Le nombre d'exercices et leurs points sont IMPOSÉS par le modèle (jamais laissés à l'IA).
 * Limite : 4 sujets par jour et par élève.
 */
import { getExamTemplate, COMMON_STYLE_RULES } from './_examTemplates.js';
import { guard, readBody, send, str, readUsage, addUsage, askGeminiJson } from './_examCommon.js';

export const DAILY_SUJETS = 4;

export function buildSujetPrompt({ template, classe, gradeId, matiere, chapitres }) {
  const structure = template.exercices
    .map((e) => `- EXERCICE ${e.numero} (${e.points} points) — ${e.nature}. ${e.consignes}`)
    .join('\n');
  const programme = chapitres
    .map((c) => `• ${c.titre}${c.notions.length ? ` : ${c.notions.join(' ; ')}` : ''}`)
    .join('\n');
  const noteClasse = template.notesClasse?.[gradeId] || '';
  const exemples = (template.exemples || []).length
    ? `\nEXEMPLES DE SUJETS OFFICIELS (modèles de style, ne pas recopier) :\n${template.exemples.map((x, i) => `--- Exemple ${i + 1} ---\n${x}`).join('\n')}`
    : '';
  return [
    `Tu es un professeur de ${template.matiere} en Côte d'Ivoire. Rédige un SUJET DE DEVOIR SURVEILLÉ de ${template.duree} pour la classe de ${classe}, noté sur 20.`,
    `Format officiel à respecter EXACTEMENT (${template.source}) :`,
    structure,
    noteClasse ? `Niveau : ${noteClasse}` : '',
    `Chapitres au programme de CE devoir (choisis par l'élève) :\n${programme}`,
    'Règles de rédaction :',
    ...COMMON_STYLE_RULES.map((r) => `- ${r}`),
    ...(template.reglesMatiere || []).map((r) => `- ${r} (règle propre à la matière : elle passe avant les règles générales)`),
    exemples,
    '',
    'Réponds UNIQUEMENT en JSON, avec exactement un objet par exercice du format, dans l’ordre :',
    '{"titre":"Devoir de …","exercices":[{"numero":1,"points":2,"consigne":"consigne générale de l’exercice","contexte":"texte de la situation ou vide","donnees":"Données : … ou vide","tableau":{"colonnes":["N°","Énoncés","A","B","C"],"lignes":[["1","…","…","…","…"]]},"questions":[{"numero":"1","texte":"…","points":0.5}]}],',
    '"corrige":[{"exercice":1,"question":"1","etapes":["étape 1 : …","étape 2 : …"],"resultat":"réponse finale en une ligne","points":0.5}]}',
    'CORRIGÉ STRUCTURÉ : une entrée par question (même numéro que dans le sujet). « etapes » = la démarche découpée en 1 à 6 étapes courtes (une idée, un calcul ou une justification par étape, jamais un paragraphe) ; « resultat » = la réponse finale seule (valeur avec unité, lettre, mot, ou idée principale). Pour un QCM ou un Vrai/Faux : etapes = une justification courte par item, resultat = « 1-B ; 2-A ; … ». Pour une situation complexe ou une production écrite : etapes = le plan ou la démarche attendue, point par point.',
    'tableau vaut null quand il n’y a pas de tableau. Pour une situation complexe : questions = [] et la consigne finale dans « consigne ».',
    'Dans chaque exercice, la somme des points des questions est égale aux points de l’exercice, sauf pour un exercice « au choix » : chaque sujet proposé y vaut tous les points de l’exercice.',
    'Les retours à la ligne voulus (lignes d’un texte, vers d’un poème, items a), b), c)) sont écrits avec \\n dans les chaînes JSON.',
  ].filter(Boolean).join('\n');
}

/**
 * Texte à lignes numérotées : si l'IA a quand même écrit les numéros (« 1. », « Ligne 1 : »…) en tête
 * de la plupart des lignes, on les retire (KONAN les affiche lui-même). Une ligne qui commence par
 * une vraie date (« 1960 fut… ») n'est pas touchée : 1 à 3 chiffres suivis d'une ponctuation seulement.
 */
const LINE_NUMBER = /^\s*(?:ligne\s*)?\d{1,3}\s*[.):\-–]\s*/i;
export function stripLineNumbers(text) {
  const lines = String(text || '').split('\n');
  const content = lines.filter((l) => l.trim() && !/^\s*texte\b.*konan/i.test(l));
  const numbered = content.filter((l) => LINE_NUMBER.test(l)).length;
  if (!content.length || numbered < content.length * 0.6) return text;
  return lines.map((l) => l.replace(LINE_NUMBER, '')).join('\n');
}

const num = (v) => {
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? Math.round(n * 100) / 100 : 0;
};

/** Valide et nettoie le sujet ; les points des exercices sont ceux du modèle officiel. */
export function cleanSujet(raw, template) {
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.exercices)) return null;
  if (raw.exercices.length !== template.exercices.length) return null;
  const exercices = template.exercices.map((model, i) => {
    const e = raw.exercices[i] || {};
    const questions = Array.isArray(e.questions)
      ? e.questions
          .map((q) => ({ numero: str(String(q?.numero ?? ''), 12), texte: str(q?.texte, 1500), points: num(q?.points) }))
          .filter((q) => q.texte)
          .slice(0, 20)
      : [];
    const tableau = e.tableau && Array.isArray(e.tableau.colonnes) && Array.isArray(e.tableau.lignes)
      ? {
          colonnes: e.tableau.colonnes.slice(0, 8).map((c) => str(String(c ?? ''), 200)),
          lignes: e.tableau.lignes.slice(0, 12).map((row) => (Array.isArray(row) ? row.slice(0, 8).map((c) => str(String(c ?? ''), 400)) : [])),
        }
      : null;
    return {
      numero: model.numero,
      points: model.points,
      nature: model.nature,
      consigne: str(e.consigne, 1500),
      contexte: model.texteNumerote ? stripLineNumbers(str(e.contexte, 4000)) : str(e.contexte, 4000),
      donnees: str(e.donnees, 1200),
      tableau,
      questions,
      ...(model.grille ? { grille: model.grille } : {}),
      ...(model.texteNumerote ? { texteNumerote: true } : {}),
      ...(model.auChoix ? { auChoix: true } : {}),
    };
  });
  // Chaque exercice doit avoir du contenu : des questions, un tableau, ou (situation complexe) une consigne
  if (exercices.some((e) => !e.questions.length && !e.tableau && !(e.consigne && e.contexte))) return null;
  const corrige = Array.isArray(raw.corrige)
    ? raw.corrige
        .map((c) => {
          const etapes = Array.isArray(c?.etapes) ? c.etapes.map((x) => str(String(x ?? ''), 500)).filter(Boolean).slice(0, 8) : [];
          const resultat = str(c?.resultat, 400);
          // « reponse » (texte complet) reste fourni : la correction de la copie s'en sert comme barème
          const reponse = str(c?.reponse, 1500) || [...etapes, resultat ? `Réponse : ${resultat}` : ''].filter(Boolean).join('\n');
          return { exercice: Number(c?.exercice) || 0, question: str(String(c?.question ?? ''), 12), etapes, resultat, reponse, points: num(c?.points) };
        })
        .filter((c) => c.exercice >= 1 && c.exercice <= exercices.length && c.reponse)
        .slice(0, 80)
    : [];
  if (corrige.length < exercices.length) return null;
  return { titre: str(raw.titre, 120) || `Devoir de ${template.matiere}`, exercices, corrige };
}

export default async function handler(req, res) {
  const ctx = await guard(req, res);
  if (!ctx) return;

  let body;
  try {
    body = await readBody(req, 200_000);
  } catch (e) {
    return send(res, e?.code === 413 ? 413 : 400, { success: false, error: 'BAD_BODY' });
  }

  const template = getExamTemplate(str(body.subjectKey, 40));
  if (!template) return send(res, 400, { success: false, error: 'NO_TEMPLATE' });
  const classe = str(body.classe, 40) || 'Seconde';
  const gradeId = str(body.gradeId, 40);
  const matiere = str(body.matiere, 80) || template.matiere;
  const chapitres = Array.isArray(body.chapitres)
    ? body.chapitres
        .map((c) => ({ titre: str(c?.titre, 160), notions: Array.isArray(c?.notions) ? c.notions.map((n) => str(n, 200)).filter(Boolean).slice(0, 14) : [] }))
        .filter((c) => c.titre)
        .slice(0, 12)
    : [];
  if (!chapitres.length) return send(res, 400, { success: false, error: 'NO_CHAPTERS' });

  let usage;
  try {
    usage = await readUsage(ctx.uid, 'sujet');
  } catch (e) {
    return send(res, 500, { success: false, error: String(e?.message || 'SERVER_ERROR').slice(0, 120) });
  }
  if (usage.used >= DAILY_SUJETS) return send(res, 429, { success: false, error: 'DAILY_LIMIT', limit: DAILY_SUJETS, remaining: 0 });

  let sujet;
  try {
    const prompt = buildSujetPrompt({ template, classe, gradeId, matiere, chapitres });
    sujet = await askGeminiJson(ctx.apiKey, [{ text: prompt }], (raw) => cleanSujet(raw, template), 0.6);
  } catch (e) {
    console.error('[exam-sujet]', String(e?.message || e).slice(0, 200));
    return send(res, 502, { success: false, error: 'AI_UNAVAILABLE' });
  }

  await addUsage(usage.ref, ctx.uid, 'sujet');
  return send(res, 200, {
    success: true,
    sujet: { ...sujet, matiere: template.matiere, duree: template.duree, source: template.source },
    remaining: Math.max(0, DAILY_SUJETS - usage.used - 1),
  });
}
