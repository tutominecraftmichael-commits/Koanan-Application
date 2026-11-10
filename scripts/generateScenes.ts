/**
 * GÉNÉRATEUR DE SCÈNES ILLUSTRÉES — à lancer à la main, une fois par nouvelle leçon :
 *     npx tsx scripts/generateScenes.ts [--only=<morceau d'id de leçon>] [--limit=<n leçons>] [--redo] [--dry]
 *
 * Pour chaque leçon (sauf les maths), Gemini lit la matière, la classe, le cours, les questions et leurs
 * bonnes réponses, puis choisit 2 à 4 étapes où un dessin aide vraiment à comprendre. Pour chacune il
 * décrit une scène avec le vocabulaire du moteur de dessin de KONAN (décor, personnages et costumes adaptés
 * au contexte, objets, bulle de parole). Tout est validé (vocabulaire connu, longueurs, étape existante) puis
 * écrit dans src/data/illustrations/generatedScenes.ts. Le dessin lui-même est fait par src/lib/scenes.
 *
 * Aucune génération pendant le cours : l'élève n'attend jamais et l'appli ne dépend pas d'Internet pour ça.
 * La clé GEMINI_API_KEY est lue dans .env.local (jamais affichée). Une leçon déjà faite est sautée (sauf --redo).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { registerHooks } from 'node:module';

registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'src', 'data', 'illustrations', 'generatedScenes.ts');

const { getAuthoredChaptersRaw } = await import('../src/lib/curriculum/curriculumRegistry');
const { HANDMADE_ILLUSTRATION_IDS } = await import('../src/data/illustrations/index');
const { GENERATED_SCENES } = await import('../src/data/illustrations/generatedScenes');
const types = await import('../src/lib/scenes/sceneTypes');
const { GoogleGenAI } = await import('@google/genai');

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, '').split('=');
  return [k, v ?? 'true'];
}));

function apiKey(): string {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  const env = readFileSync(join(ROOT, '.env.local'), 'utf8');
  const m = env.match(/^GEMINI_API_KEY\s*=\s*"?([^"\r\n]+)"?/m);
  if (!m) throw new Error('GEMINI_API_KEY absente de .env.local');
  return m[1].trim();
}

const MODELS = ['gemini-3.5-flash', 'gemini-3.5-flash-lite'];
const SUBJECT_LABEL: Record<string, string> = {
  physique_chimie: 'Physique-Chimie', svt: 'SVT', francais: 'Français', histoire_geo: 'Histoire-Géographie', philosophie: 'Philosophie',
};

const SYSTEM = [
  "Tu es l'illustrateur de KONAN, une application d'étude pour les élèves de Côte d'Ivoire (collège et lycée).",
  "On te donne UNE leçon : matière, classe, titre, puis ses étapes (cours, question, bonne réponse).",
  "Les dessins viennent DE TEMPS EN TEMPS, pas à chaque étape : choisis au plus 3 étapes (0 si aucune ne s'y prête) où un petit dessin aide VRAIMENT l'élève à comprendre ou à retenir la notion (une scène concrète, une situation, un personnage historique ou un philosophe en action). Pas de dessin pour une simple règle abstraite qu'un dessin n'éclaire pas.",
  "Pour chaque étape choisie, décris une scène avec UNIQUEMENT ce vocabulaire (un mot hors liste = scène rejetée) :",
  `- setting (décor) : ${types.SETTINGS.join(', ')}`,
  `- time : jour, soir, nuit`,
  `- characters (0 à 4) : costume parmi ${types.COSTUMES.join(', ')} ; pose parmi ${types.POSES.join(', ')} ; mood parmi ${types.MOODS.join(', ')} ; skin parmi ${types.SKINS.join(', ')} (facultatif) ; holding parmi ${types.HELD.join(', ')} (facultatif) ; bound: true pour un captif aux mains liées ; child: true pour un enfant ; facing: gauche ou droite (facultatif).`,
  `- props (0 à 4 objets) : kind parmi ${types.PROPS.join(', ')} ; place parmi gauche, centre, droite, fond.`,
  `- vehicle (facultatif, sur un personnage) : ${types.VEHICLES.join(', ')} → le personnage est dessiné assis dedans.`,
  "- bubble (facultatif) : { from: index du personnage qui parle, text: phrase courte (42 caractères max) en français correct, fidèle au cours }.",
  "- sign (facultatif) : pancarte de 18 caractères max (date, mot-clé, ex. « 1848 »).",
  "RÈGLES :",
  "1. Les costumes suivent le CONTEXTE : un philosophe grec en philosophe_antique dans l'agora, Descartes ou Rousseau en philosophe_lumieres, un savant en blouse au laboratoire, un roi africain en roi_africain, des élèves ivoiriens en eleve_garcon / eleve_fille, un colon en colon_europeen, etc. La couleur de peau suit l'histoire (Africains : fonce, brun ou moyen ; Européens : tres_clair ; Arabo-berbères : clair).",
  "2. Ne rien inventer : la scène, la bulle et la pancarte illustrent exactement ce que dit l'étape. Aucune date, aucun nom, aucune citation absents du cours.",
  "2 bis. Cohérence du dessin : la bulle, la pancarte et la légende ne parlent QUE de ce qui est dessiné. Si un personnage dit être dans une voiture, un gbaka ou un train, il doit avoir vehicle correspondant ; si on parle d'un objet, il doit être dans props.",
  "3. Respect : jamais de sang, d'arme utilisée, de violence montrée, de moquerie ni de caricature. Les sujets durs (esclavage, colonisation, guerre) se montrent avec dignité (tristesse, fuite, libération), sans choquer.",
  "4. Lisible sur téléphone : 1 à 3 personnages le plus souvent, 0 à 2 objets. Pas plus de 4.",
  "5. title : nom court du dessin (40 caractères max). caption : une phrase (140 caractères max) qui dit ce que montre le dessin et le relie à la notion.",
  'Réponds UNIQUEMENT en JSON : {"scenes":[{"exerciseId":"…","title":"…","caption":"…","spec":{"setting":"…","time":"jour","characters":[…],"props":[…],"bubble":{…},"sign":"…"}}]}',
].join('\n');

interface StepInfo { id: string; point: string; titre: string; cours: string; question: string; reponse: string }

function lessonPayload(ch: any): { payload: string; steps: Map<string, StepInfo> } {
  const steps = new Map<string, StepInfo>();
  for (const p of ch.points || []) {
    for (const st of p.structuredSteps || []) {
      const ex = st.exercise;
      if (!ex?.id || HANDMADE_ILLUSTRATION_IDS.has(ex.id) || ex.courseVisualSchema) continue;
      steps.set(ex.id, {
        id: ex.id,
        point: String(p.title || ''),
        titre: String(st.stepTitle || ''),
        cours: String(st.paragraphText || '').slice(0, 420),
        question: String(ex.prompt || ''),
        reponse: Array.isArray(ex.options) ? String(ex.options[ex.correctAnswerIndex] ?? '') : '',
      });
    }
  }
  const grades = [ch.gradeLevel, ...(ch.alsoForGrades || [])].join(', ');
  const payload = JSON.stringify({
    matiere: SUBJECT_LABEL[ch.subjectId] || ch.subjectId,
    classes: grades,
    lecon: ch.title,
    etapes: [...steps.values()],
  });
  return { payload, steps };
}

const cleanText = (v: unknown, max: number) => {
  const t = typeof v === 'string' ? v.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim() : '';
  return t && t.length <= max ? t : null;
};

async function askGemini(ai: any, payload: string): Promise<any> {
  let lastErr: unknown;
  for (const model of MODELS) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await ai.models.generateContent({
          model,
          contents: [{ role: 'user', parts: [{ text: `Leçon :\n${payload}` }] }],
          config: { systemInstruction: SYSTEM, responseMimeType: 'application/json', temperature: 0.6 },
        });
        const text = String(res.text || '').trim().replace(/^```json\s*|```$/g, '');
        return JSON.parse(text);
      } catch (e) {
        lastErr = e;
        await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      }
    }
  }
  throw lastErr;
}

function writeOut(all: Record<string, any>, chapters: string[]) {
  const sorted = Object.fromEntries(Object.entries(all).sort(([a], [b]) => a.localeCompare(b)));
  const file = `// Fichier écrit par scripts/generateScenes.ts (scènes choisies par Gemini, validées puis dessinées par
// src/lib/scenes). Ne pas modifier à la main : relancer le script.
import type { SceneSpec } from '../../lib/scenes/sceneTypes';

export interface GeneratedScene { title: string; caption: string; spec: SceneSpec }

/** Leçons déjà traitées par le générateur. */
export const GENERATED_CHAPTERS: string[] = ${JSON.stringify([...new Set(chapters)].sort(), null, 2)};

export const GENERATED_SCENES: Record<string, GeneratedScene> = ${JSON.stringify(sorted, null, 2)};
`;
  writeFileSync(OUT, file);
}

// ---------------------------------------------------------------------------
const mod = await import('../src/data/illustrations/generatedScenes');
const doneChapters: string[] = [...((mod as any).GENERATED_CHAPTERS || [])];
const all: Record<string, any> = { ...GENERATED_SCENES };

const chapters = getAuthoredChaptersRaw()
  .filter((c: any) => c.subjectId !== 'maths')
  .filter((c: any) => !args.only || c.id.includes(args.only))
  .filter((c: any) => args.redo || !doneChapters.includes(c.id));
const todo = args.limit ? chapters.slice(0, Number(args.limit)) : chapters;
console.log(`${todo.length} leçon(s) à illustrer (${chapters.length} restantes au total).`);

const ai = new GoogleGenAI({ apiKey: apiKey() });
let added = 0;
let rejected = 0;

async function handle(ch: any) {
  const { payload, steps } = lessonPayload(ch);
  if (!steps.size) { doneChapters.push(ch.id); return; }
  let data: any;
  try {
    data = await askGemini(ai, payload);
  } catch (e: any) {
    console.warn(`✗ ${ch.id} : ${String(e?.message || e).slice(0, 120)}`);
    return;
  }
  const kept: string[] = [];
  for (const s of (Array.isArray(data?.scenes) ? data.scenes : []).slice(0, 3)) {
    const id = String(s?.exerciseId || '');
    const spec = types.validateSceneSpec(s?.spec);
    const title = cleanText(s?.title, 40);
    const caption = cleanText(s?.caption, 160);
    if (!steps.has(id) || !spec || !title || !caption) { rejected++; continue; }
    // Une bulle dans une scène sans personnage, ou une scène sans rien de reconnaissable : rejetée par validateSceneSpec
    all[id] = { title, caption, spec };
    kept.push(title);
    added++;
  }
  doneChapters.push(ch.id);
  console.log(`✓ ${ch.id} : ${kept.length} scène(s) — ${kept.join(' | ')}`);
}

const CONCURRENCY = 3;
for (let i = 0; i < todo.length; i += CONCURRENCY) {
  await Promise.all(todo.slice(i, i + CONCURRENCY).map(handle));
  if (!args.dry) writeOut(all, doneChapters); // sauvegarde au fur et à mesure (reprise possible)
}
console.log(`Terminé : ${added} scène(s) ajoutée(s), ${rejected} rejetée(s) à la validation.${args.dry ? ' (essai : rien n’a été écrit)' : ''}`);
