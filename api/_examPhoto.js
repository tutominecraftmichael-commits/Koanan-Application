/**
 * KONAN Plus (étape 3, 2026-11-24) — correction de N'IMPORTE QUEL devoir en photo.
 * L'élève photographie l'énoncé donné par son professeur et sa copie. En deux passages :
 *  1. KONAN LIT l'énoncé (exercices, questions, barème écrit sur le sujet) et rédige un corrigé juste ;
 *  2. il corrige la copie avec EXACTEMENT les règles des devoirs de KONAN (buildCorrectionPrompt + cleanCorrection :
 *     éléments attendus, réponses fermées comparées par le serveur, points recalculés).
 * Les photos ne sont gardées nulle part. Passe par /api/exam-correct (mode « photo ») : Vercel = 12 fonctions au plus.
 */
import { str } from './_examCommon.js';
import { fixSciNotation } from './exam-sujet.js';

export const DAILY_PHOTO_CORRECTIONS = 3; // KONAN Plus : 3 devoirs en photo par jour (l'admin : sans limite)
export const MAX_SUJET_PHOTOS = 4;
export const MAX_COPY_PHOTOS = 4;

const num = (v) => {
  const n = Number(String(v ?? '').replace(',', '.'));
  return Number.isFinite(n) && n > 0 ? Math.round(n * 4) / 4 : 0;
};
const text = (v, max) => fixSciNotation(str(typeof v === 'string' ? v.replace(/\r\n?/g, '\n') : '', max));

/** Consigne du 1er passage : lire l'énoncé photographié, recopier le barème, rédiger le corrigé. */
export function buildPhotoSujetPrompt({ classe, matiere }) {
  return [
    `Tu es un professeur expérimenté${matiere ? ` de ${matiere}` : ''}. Un élève${classe ? ` de ${classe}` : ''} t’envoie les PHOTOS DE L’ÉNONCÉ d’un devoir donné par son professeur (ce n’est pas sa copie).`,
    'Ta mission, en trois temps :',
    '1. LIRE : recopie fidèlement chaque exercice et chaque question, avec leurs numéros exacts, toutes les données, les textes d’étude et les valeurs des tableaux. Formules en LaTeX entre $…$ ($\\frac{a}{b}$, $x^2$, $\\sqrt{x}$). Une figure : décris-la en une phrase dans « donnees » avec toutes les valeurs lisibles.',
    '2. BARÈME : si des points sont écrits sur le sujet (« (3 pts) », « Exercice 1 : 6 points »), recopie-les EXACTEMENT et mets baremeLu = true. Sinon, propose un barème juste dont le total fait 20 points, en multiples de 0,25, et mets baremeLu = false.',
    '3. CORRIGÉ : rédige le corrigé complet et JUSTE de chaque question, comme un professeur qui prépare sa correction : refais chaque calcul deux fois, vérifie les unités, les signes et les arrondis. Question ouverte (explication, justification, rédaction) : « etapes » = les éléments attendus, un par étape. QCM ou Vrai/Faux : resultat = la lettre ou le mot exact.',
    'Une question illisible (coupée, floue) : ne l’invente pas, mets son numéro dans « illisibles » et ne l’inclus pas dans les exercices.',
    'Si les photos ne montrent pas un énoncé de devoir, ou sont trop floues pour corriger quoi que ce soit : lisible = false et raison = une phrase simple pour l’élève (tutoiement).',
    'Réponds UNIQUEMENT en JSON :',
    '{"lisible":true,"raison":"","titre":"Devoir de …","matiere":"matière reconnue","baremeLu":true,"illisibles":[],"exercices":[{"numero":1,"points":6,"consigne":"consigne générale ou vide","contexte":"texte d’étude ou vide","donnees":"données ou vide","questions":[{"numero":"1","texte":"…","points":1.5}]}],"corrige":[{"exercice":1,"question":"1","etapes":["…","…"],"resultat":"réponse finale en une ligne","points":1.5}]}',
    'Dans chaque exercice, la somme des points des questions est égale aux points de l’exercice.',
  ].join('\n');
}

/**
 * Énoncé lu → sujet propre (même forme que les sujets de KONAN), ou { lisible:false, raison }, ou null (à refaire).
 * Les points d'un exercice sont toujours la somme de ses questions (barème cohérent avant la correction).
 */
export function cleanPhotoSujet(raw) {
  if (!raw || typeof raw !== 'object') return null;
  if (raw.lisible === false) {
    return { lisible: false, raison: str(raw.raison, 300) || 'Je n’arrive pas à lire l’énoncé sur tes photos. Reprends-les bien à plat, avec de la lumière.' };
  }
  if (!Array.isArray(raw.exercices) || !raw.exercices.length) return null;
  const exercices = raw.exercices.slice(0, 8).map((e, i) => {
    const questions = (Array.isArray(e?.questions) ? e.questions : []).slice(0, 25).map((q) => ({
      numero: str(String(q?.numero ?? ''), 12).replace(/[\s.)]+$/, ''),
      texte: text(q?.texte, 1500),
      points: num(q?.points),
    })).filter((q) => q.numero && q.texte);
    const sumQ = Math.round(questions.reduce((s, q) => s + q.points, 0) * 4) / 4;
    return {
      numero: Number(e?.numero) || i + 1,
      points: sumQ > 0 ? sumQ : num(e?.points),
      consigne: text(e?.consigne, 1500),
      contexte: text(e?.contexte, 4000),
      documents: [],
      donnees: text(e?.donnees, 1200),
      tableau: null,
      questions,
    };
  }).filter((e) => e.questions.length || (e.consigne && e.points > 0));
  if (!exercices.length || exercices.some((e) => !(e.points > 0))) return null;
  const numeros = new Set(exercices.map((e) => e.numero));
  const corrige = (Array.isArray(raw.corrige) ? raw.corrige : []).slice(0, 120).map((c) => {
    const etapes = (Array.isArray(c?.etapes) ? c.etapes : []).map((x) => text(String(x ?? ''), 500)).filter(Boolean).slice(0, 8);
    const resultat = text(c?.resultat, 900);
    const reponse = [...etapes, resultat ? `Réponse : ${resultat}` : ''].filter(Boolean).join('\n');
    return { exercice: Number(c?.exercice) || 0, question: str(String(c?.question ?? ''), 12).replace(/[\s.)]+$/, ''), etapes, resultat, reponse, points: num(c?.points) };
  }).filter((c) => numeros.has(c.exercice) && c.reponse);
  // Il faut un corrigé pour (presque) chaque question, sinon la correction serait faite au hasard
  const nbQuestions = exercices.reduce((s, e) => s + Math.max(1, e.questions.length), 0);
  if (corrige.length < Math.ceil(nbQuestions * 0.8)) return null;
  const total = Math.round(exercices.reduce((s, e) => s + e.points, 0) * 4) / 4;
  const matiere = str(raw.matiere, 80);
  const titre = str(raw.titre, 90) || (matiere ? `Devoir de ${matiere}` : 'Ton devoir');
  const illisibles = (Array.isArray(raw.illisibles) ? raw.illisibles : []).map((x) => str(String(x ?? ''), 20)).filter(Boolean).slice(0, 20);
  return { lisible: true, titre, matiere, baremeLu: raw.baremeLu === true, illisibles, total, exercices, corrige };
}

/** Note ramenée sur 20 quand le devoir du professeur est noté sur un autre total (sur 10, sur 40…). */
export function noteOn20(note, total) {
  if (!(total > 0) || note == null) return note;
  if (Math.abs(total - 20) < 0.01) return note;
  return Math.round(((note * 20) / total) * 4) / 4;
}

/** Règles ajoutées à la correction quand le sujet a été lu sur une photo. */
export const PHOTO_CORRECTION_RULES = [
  'CE SUJET A ÉTÉ LU SUR LA PHOTO DE L’ÉNONCÉ DU PROFESSEUR : la copie peut suivre un autre ordre ou une autre numérotation ; retrouve chaque réponse par son contenu.',
  'Les photos jointes ici sont celles de la COPIE de l’élève (pas de l’énoncé).',
  'RÈGLE PRIORITAIRE (elle passe AVANT la règle des points proportionnels aux éléments) : note comme un professeur de lycée juste. Quand le résultat ET le calcul sont justes, un oubli de FORME seulement (conclusion « S = {…} » non écrite, hypothèse ou nom du théorème non rappelé, unité oubliée) enlève exactement 0,25 point, jamais plus : la question vaut alors ses points moins 0,25, avec le statut « partiel ». Un résultat FAUX ou INCOMPLET (une solution oubliée, mauvais calcul) reste noté avec les éléments présents.',
  'Dans « elements », ne liste QUE les éléments de fond (étapes de calcul ou de raisonnement, résultat) ; jamais la mise en forme (conclusion S = {…}, rappel d’hypothèse, phrase de conclusion).',
];
