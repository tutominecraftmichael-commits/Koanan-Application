/**
 * KONAN AI - Sujet de devoir de 2 h au format officiel ivoirien (APC).
 * Endpoint : POST /api/exam-sujet   (en-tête Authorization: Bearer <jeton Firebase de l'élève>)
 *
 * Corps JSON : { subjectKey, gradeId, classe, matiere, chapitres: [{ titre, notions: [..] }] }
 * Réponse    : { success, sujet: { titre, exercices: [...], corrige: [...] }, remaining }
 *
 * Le modèle (structure, points, types d'exercices, barème) vient de api/_examTemplates.js.
 * Le nombre d'exercices et leurs points sont IMPOSÉS par le modèle (jamais laissés à l'IA).
 * Limite : 1 sujet par jour et par élève (choix du fondateur, 2026-11-17 : coût de l'IA maîtrisé ;
 * le planning ne propose de toute façon un sujet de 2 h qu'un jour sur trois). Un échec n'est pas décompté.
 */
import { getExamTemplate, canonicalExamGrade, COMMON_STYLE_RULES } from './_examTemplates.js';
import { guard, readBody, send, str, readUsage, addUsage, askGeminiJson, aiErrorCode } from './_examCommon.js';

export const DAILY_SUJETS = 1;

/**
 * Documents du sujet (2026-11-17) : KONAN n'affiche aucune image. Un document cité doit être FOURNI
 * (texte ou tableau de valeurs), sinon l'élève ne peut pas répondre (vu sur un vrai sujet : « Analyse les
 * tracés des Documents 1a et 1b », tracés montrés nulle part). Un sujet qui ne respecte pas ces règles est
 * refusé et refait (voir invisibleDocumentProblem).
 */
export const DOCUMENT_RULES = [
  'DOCUMENTS : KONAN ne peut afficher AUCUNE image (ni courbe, ni schéma, ni photo, ni carte, ni dessin). Tout document cité (« Document 1 », « Document 2a »…) est donné EN ENTIER dans « documents » de son exercice : un texte, ou un TABLEAU DE VALEURS (par exemple un enregistrement : une ligne « t (ms) » et une ligne « Potentiel (mV) » avec 6 à 10 mesures).',
  'N’écris jamais « figure », « schéma », « courbe ci-dessous », « le tracé », « la photo », « la carte » pour désigner un document : écris « les valeurs du Document 1 », « le texte du Document 2 ». Tu peux en revanche demander à l’élève de TRACER lui-même une courbe à partir d’un tableau.',
  'Le nom d’un document s’écrit en texte simple (« Document 1a »), jamais en formule. Les ions et formules chimiques s’écrivent en texte avec des exposants et indices Unicode : Na⁺, K⁺, Cl⁻, Ca²⁺, SO₄²⁻, H₂O, CO₂ (jamais de LaTeX pour un ion).',
  'Un texte d’étude (Français, Histoire-Géographie) reste dans « contexte » ; « documents » sert aux documents numérotés.',
];

const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '+': '⁺', '-': '⁻', '−': '⁻' };
const ionText = (symbol, charge) => `${symbol}${[...String(charge)].map((c) => SUP[c] || c).join('')}`;

/**
 * Noms de documents et ions écrits en formule par l'IA (vus sur de vrais sujets) :
 * « Document $1_T$ » → « Document 1a » n'est pas devinable, mais « Document $1_a$ », « Document 1_{b} » → « 1a », « 1b » ;
 * « $\text{Na}^+$ », « Na^{+} », « Ca^{2+} » → « Na⁺ », « Ca²⁺ » ; une formule qui ne contient plus qu'un ion perd ses $.
 */
export function fixSciNotation(t) {
  return String(t ?? '')
    .replace(/\b(Documents?)\s*\$\s*(\d+)\s*(?:_\s*\{?\s*([A-Za-z])\s*\}?)?\s*\$/g, (_, w, n, l) => `${w} ${n}${l ? l.toLowerCase() : ''}`)
    .replace(/\b(Documents?)\s+(\d+)\s*_\s*\{?\s*([A-Za-z])\s*\}?/g, (_, w, n, l) => `${w} ${n}${l.toLowerCase()}`)
    .replace(/\\(?:text|mathrm)\s*\{\s*([A-Z][a-z]?)\s*\}\s*\^\s*\{?\s*(\d?)\s*([+\-−])\s*\}?/g, (_, el, d, s) => ionText(el, d + s))
    .replace(/(?<![A-Za-z\\{])([A-Z][a-z]?)\s*\^\s*\{\s*(\d?)\s*([+\-−])\s*\}/g, (_, el, d, s) => ionText(el, d + s))
    .replace(/(?<![A-Za-z\\{])([A-Z][a-z]?)\^(\d?)([+\-−])(?![\w{])/g, (_, el, d, s) => ionText(el, d + s))
    .replace(/\$([^$]*)\$/g, (m, inner) => (/[⁺⁻]/.test(inner) && !/[\\^_]/.test(inner) ? inner.replace(/[{}]/g, '') : m));
}

/** « doc 1A », « Document n°2 b » → « Document 1a », « Document 2b » (repère commun aux références et aux documents). */
export function docKey(raw) {
  const m = String(raw || '').match(/(\d+)\s*([a-z])?(?![a-z])/i);
  return m ? `${m[1]}${(m[2] || '').toLowerCase()}` : '';
}

/**
 * Sujet qui renvoie à quelque chose que l'élève ne verra pas ? Renvoie la raison (pour le journal), sinon ''.
 * - « Document N » cité sans être fourni dans les documents de l'exercice (un texte d'étude dans « contexte »
 *   compte comme Document 1) ;
 * - figure, schéma, courbe, photo, carte… « ci-dessous », « ci-contre », « n° 2 », ou « le tracé du Document 1 »
 *   (sauf quand c'est l'élève qui doit tracer, construire ou dessiner).
 */
export function invisibleDocumentProblem(exercices) {
  const VISUAL = '(?:figures?|fig\\.|schémas?|graphiques?|courbes?|tracés?|photos?|photographies?|images?|cartes?|dessins?|croquis|diagrammes?|histogrammes?)';
  const shown = new RegExp(`\\b${VISUAL}\\s+(?:ci-dessous|ci-contre|ci-après|suivante?s?|n°\\s*\\d+|\\d+\\b)`, 'i');
  const ofDoc = new RegExp(`\\b${VISUAL}\\s+(?:du|de la|des|de l['’])\\s*doc`, 'i');
  const studentDraws = /(trace|tracez|construis|construisez|dessine|dessinez|représente|représentez|réalise|réalisez|reproduis|complète|complétez)\b[^.;:]{0,25}$/i;
  for (const e of exercices) {
    const own = new Set((e.documents || []).map((d) => docKey(d.id)).filter(Boolean));
    const texts = [e.consigne, e.contexte, e.donnees, ...(e.questions || []).map((q) => q.texte), ...(e.documents || []).map((d) => d.texte)].filter(Boolean);
    for (const t of texts) {
      for (const re of [shown, ofDoc]) {
        const m = t.match(re);
        if (m && !studentDraws.test(t.slice(Math.max(0, m.index - 40), m.index))) return `exercice ${e.numero} : « ${m[0]} » (rien à montrer)`;
      }
      for (const ref of t.matchAll(/\bdoc(?:ument)?s?\.?\s*(?:n°\s*)?((?:\d+\s*[a-z]?(?![a-zà-ÿ])\s*(?:,|et|à|-|&)?\s*)+)/gi)) {
        for (const one of ref[1].matchAll(/(\d+)\s*([a-z])?(?![a-zà-ÿ])/gi)) {
          const key = `${one[1]}${(one[2] || '').toLowerCase()}`;
          const covered = own.has(key) || [...own].some((k) => k.startsWith(key) && /^\d+[a-z]$/.test(k)) || (!own.size && e.contexte && key === '1');
          if (!covered) return `exercice ${e.numero} : Document ${key} cité mais pas fourni`;
        }
      }
    }
  }
  return '';
}

/** Tableau (exercice ou document) : 8 colonnes et 12 lignes au plus, cellules nettoyées. */
function cleanTable(t) {
  if (!t || !Array.isArray(t.colonnes) || !Array.isArray(t.lignes)) return null;
  const colonnes = t.colonnes.slice(0, 12).map((c) => fixSciNotation(str(String(c ?? ''), 200)));
  const lignes = t.lignes.slice(0, 12).map((row) => (Array.isArray(row) ? row.slice(0, 12).map((c) => fixSciNotation(str(String(c ?? ''), 400))) : [])).filter((r) => r.length);
  return colonnes.length ? { colonnes, lignes } : null;
}

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
    '{"titre":"Devoir de …","exercices":[{"numero":1,"points":2,"consigne":"consigne générale de l’exercice","contexte":"texte de la situation ou vide","documents":[{"id":"Document 1","titre":"titre court du document","texte":"texte du document ou vide","tableau":{"colonnes":["t (ms)","0","1","2"],"lignes":[["Potentiel (mV)","-70","+30","-70"]]}}],"donnees":"Données : … ou vide","tableau":{"colonnes":["N°","Énoncés","A","B","C"],"lignes":[["1","…","…","…","…"]]},"questions":[{"numero":"1","texte":"…","points":0.5}]}],',
    '"corrige":[{"exercice":1,"question":"1","etapes":["étape 1 : …","étape 2 : …"],"resultat":"réponse finale en une ligne","points":0.5}]}',
    'CORRIGÉ STRUCTURÉ : une entrée par question (même numéro que dans le sujet). « etapes » = la démarche découpée en 1 à 6 étapes courtes (une idée, un calcul ou une justification par étape, jamais un paragraphe) ; « resultat » = la réponse finale seule (valeur avec unité, lettre, mot, ou idée principale). Pour un QCM ou un Vrai/Faux : etapes = une justification courte par item, resultat = « 1-B ; 2-A ; … ». Pour une situation complexe ou une production écrite : etapes = le plan ou la démarche attendue, point par point.',
    'tableau vaut null quand il n’y a pas de tableau. Pour une situation complexe : questions = [] et la consigne finale dans « consigne ».',
    ...DOCUMENT_RULES,
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
/**
 * Nettoyage d'un texte du sujet (défauts vus sur de vrais sujets générés, 2026-11-16) :
 * balises HTML (« <div> ») → retours à la ligne, « 1ème » → « 1ère ».
 */
export function tidyText(t) {
  return fixSciNotation(t)
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/\n?[ \t]*<\s*(div|p|li)\b[^>]*>/gi, '\n')
    .replace(/<\/?\s*(div|p|span|ul|ol|li|b|i|strong|em)\b[^>]*>/gi, '')
    .replace(/\b1(?:è|e)me\b/g, '1ère')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/^\n+|\n+$/g, '');
}

/** « 1. 1. Au cours… » : retire le numéro que l'IA a recopié au début du texte de la question. */
export function stripLeadingNumber(texte, numero) {
  const n = String(numero ?? '').replace(/[.)\s]+$/, '');
  if (!n) return texte;
  const esc = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return texte.replace(new RegExp(`^\\s*(?:question\\s*)?${esc}\\s*[.)\\-–:]\\s*`, 'i'), '');
}

export function cleanSujet(raw, template) {
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.exercices)) return null;
  if (raw.exercices.length !== template.exercices.length) return null;
  const exercices = template.exercices.map((model, i) => {
    const e = raw.exercices[i] || {};
    const questions = Array.isArray(e.questions)
      ? e.questions
          // Un sujet « au choix » du format BAC contient son texte d'étude : longueur autorisée plus grande (questionMax)
          .map((q) => { const numero = str(String(q?.numero ?? ''), 12).replace(/[\s.)]+$/, ''); return { numero, texte: stripLeadingNumber(tidyText(str(q?.texte, model.questionMax || 1500)), numero), points: num(q?.points) }; })
          .filter((q) => q.texte)
          .slice(0, 20)
      : [];
    const tableau = cleanTable(e.tableau);
    // Documents numérotés (texte ou tableau de valeurs), affichés chacun dans son cadre
    const documents = Array.isArray(e.documents)
      ? e.documents.slice(0, 6).map((d) => {
          const key = docKey(fixSciNotation(str(d?.id, 40))); // « Document $1_a$ » → 1a
          return {
            id: key ? `Document ${key}` : tidyText(str(d?.id, 40)),
            titre: tidyText(str(d?.titre, 200)),
            texte: tidyText(str(d?.texte, 3000)),
            tableau: cleanTable(d?.tableau),
          };
        }).filter((d) => d.id && (d.texte || d.tableau))
      : [];
    return {
      numero: model.numero,
      points: model.points,
      nature: model.nature,
      consigne: tidyText(str(e.consigne, 1500)),
      contexte: model.texteNumerote ? stripLineNumbers(tidyText(str(e.contexte, 4000))) : tidyText(str(e.contexte, 4000)),
      documents,
      donnees: tidyText(str(e.donnees, 1200)),
      tableau,
      questions,
      ...(model.grille ? { grille: model.grille } : {}),
      ...(model.texteNumerote ? { texteNumerote: true } : {}),
      ...(model.auChoix ? { auChoix: true } : {}),
    };
  });
  // Chaque exercice doit avoir du contenu : des questions, un tableau, ou (situation complexe) une consigne
  if (exercices.some((e) => !e.questions.length && !e.tableau && !(e.consigne && e.contexte))) return null;
  // Aucun document invisible : un sujet qui cite ce que l'élève ne verra pas est refusé (l'IA le refait)
  const invisible = invisibleDocumentProblem(exercices);
  if (invisible) {
    console.warn('[exam-sujet] sujet refusé :', invisible);
    return null;
  }
  const corrige = Array.isArray(raw.corrige)
    ? raw.corrige
        .map((c) => {
          const etapes = Array.isArray(c?.etapes) ? c.etapes.map((x) => fixSciNotation(str(String(x ?? ''), 500))).filter(Boolean).slice(0, 8) : [];
          const resultat = fixSciNotation(str(c?.resultat, 400));
          // « reponse » (texte complet) reste fourni : la correction de la copie s'en sert comme barème
          const reponse = tidyText(str(c?.reponse, 1500)) || [...etapes, resultat ? `Réponse : ${resultat}` : ''].filter(Boolean).join('\n');
          return { exercice: Number(c?.exercice) || 0, question: str(String(c?.question ?? ''), 12), etapes, resultat, reponse, points: num(c?.points) };
        })
        .filter((c) => c.exercice >= 1 && c.exercice <= exercices.length && c.reponse)
        .slice(0, 80)
    : [];
  if (corrige.length < exercices.length) return null;
  // Titre : jamais l'en-tête du ministère (déjà affiché à part) ni un titre trop long
  const titreBrut = tidyText(str(raw.titre, 200)).replace(/\s+/g, ' ').trim();
  const titre = !titreBrut || titreBrut.length > 90 || /minist|r[ée]publique|direction des examens/i.test(titreBrut) ? `Devoir ${/^[aeiouyhéèêâî]/i.test(template.matiere) ? 'd’' : 'de '}${template.matiere}` : titreBrut;
  return { titre, exercices, corrige };
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

  const gradeId = canonicalExamGrade(str(body.gradeId, 40)); // « premiere_a » → série A1 (bonnes notes de classe)
  // Le modèle dépend de la classe : format du BAC pour les Terminales A, modèles de Seconde sinon
  const template = getExamTemplate(str(body.subjectKey, 40), gradeId);
  if (!template) return send(res, 400, { success: false, error: 'NO_TEMPLATE' });
  const classe = str(body.classe, 40) || 'Seconde';
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
    // Rien n'est décompté : le sujet raté ne compte pas dans les 4 du jour
    return send(res, 503, { success: false, error: aiErrorCode(e) });
  }

  await addUsage(usage.ref, ctx.uid, 'sujet');
  return send(res, 200, {
    success: true,
    sujet: { ...sujet, matiere: template.matiere, duree: template.duree, source: template.source },
    remaining: Math.max(0, DAILY_SUJETS - usage.used - 1),
  });
}
