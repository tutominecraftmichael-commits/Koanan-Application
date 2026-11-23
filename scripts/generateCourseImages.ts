/**
 * GÉNÉRATEUR D'IMAGES ILLUSTRÉES DES COURS — à lancer à la main (jamais pendant un cours) :
 *     npx tsx scripts/generateCourseImages.ts --only=<morceau d'id de leçon>[,<autre>] [--points=<n par leçon>] [--redo] [--preview=<fichier.html>]
 *
 * Pour chaque mini-leçon :
 *  1. Gemini (texte) lit la notion et l'étape choisie, décide si une image aide vraiment, et écrit la commande
 *     de l'image (scène concrète, AUCUN texte dans l'image), plus le titre, la légende et la description.
 *  2. Gemini (image, modèle le moins cher) dessine l'image ; KONAN la peluche peut y jouer le guide
 *     (image de référence : public/konan-plush/anim/repos.webp).
 *  3. Gemini (texte) vérifie l'image : texte visible, contresens avec la notion → refusée et refaite une fois.
 *  4. L'image est réduite (640 x 480, WebP) dans public/course-images/<leçon>/<mini-leçon>.webp et
 *     rattachée à l'étape dans src/data/illustrations/courseImages.ts.
 *
 * Coût : ≈ 0,05 $ par image (pris sur le crédit Gemini). La conversion WebP utilise Python + Pillow.
 * La clé GEMINI_API_KEY est lue dans .env.local (jamais affichée).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import { registerHooks } from 'node:module';

registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_TS = join(ROOT, 'src', 'data', 'illustrations', 'courseImages.ts');
const IMG_DIR = join(ROOT, 'public', 'course-images');

const { getAuthoredChaptersRaw, loadAllCurriculum } = await import('../src/lib/curriculum/curriculumRegistry');
await loadAllCurriculum();
const { applyIllustrations } = await import('../src/data/illustrations/index');
const { COURSE_IMAGES } = await import('../src/data/illustrations/courseImages');
const { GoogleGenAI } = await import('@google/genai');

const args = Object.fromEntries(process.argv.slice(2).map((a) => {
  const [k, v] = a.replace(/^--/, '').split('=');
  return [k, v ?? 'true'];
}));
const ONLY = String(args.only || '').split(',').map((s) => s.trim()).filter(Boolean);
if (!ONLY.length) { console.error('Précise --only=<morceau d’id de leçon>'); process.exit(1); }
// --points=0 : aucune image générée (aperçu seulement). Sans --points : toutes les mini-leçons.
const PER_CHAPTER = args.points === undefined ? 99 : Math.max(0, Number(args.points) || 0);

function apiKey(): string {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  const env = readFileSync(join(ROOT, '.env.local'), 'utf8');
  const m = env.match(/^GEMINI_API_KEY\s*=\s*"?([^"\r\n]+)"?/m);
  if (!m) throw new Error('GEMINI_API_KEY absente de .env.local');
  return m[1].trim();
}
const ai = new GoogleGenAI({ apiKey: apiKey() });
const TEXT_MODEL = 'gemini-3.5-flash';
const IMAGE_MODEL = 'gemini-3.1-flash-image';
const KONAN_REF = readFileSync(join(ROOT, 'public', 'konan-plush', 'anim', 'repos.webp')).toString('base64');

const SUBJECT: Record<string, string> = {
  maths: 'Mathématiques', physique_chimie: 'Physique-Chimie', svt: 'SVT (biologie, géologie)', francais: 'Français',
  histoire_geo: 'Histoire-Géographie', philosophie: 'Philosophie',
};
const STYLE = 'Style: bright, warm, soft 3D animated-film illustration (like a modern animated movie), clean and simple background, '
  + 'strong clear shapes that read well on a small phone screen, landscape 4:3 composition. '
  + 'ABSOLUTELY NO text, letters, words, numbers, formulas, labels, captions, signs or logos anywhere in the image.';

const BRIEF_RULES = [
  "Tu es le directeur artistique de KONAN, une application d'étude pour lycéens d'Afrique francophone.",
  "On te donne UNE mini-leçon (matière, classe, notion, étape du cours). Décide si UNE image aide vraiment l'élève à comprendre ou à retenir cette notion d'un coup d'œil.",
  "Bonne image : une scène concrète de la vie réelle où l'on VOIT la notion (un mouvement, un phénomène, une expérience simple, un objet, une situation), ou KONAN qui la montre.",
  "Interdit : une image qui aurait besoin de texte, d'étiquettes, de chiffres ou de formules pour être comprise (un schéma annoté) → dans ce cas useful = false.",
  "La scène doit être EXACTE scientifiquement et fidèle au cours (aucun contresens).",
  "Personnes : élèves et habitants d'Afrique de l'Ouest, tenue scolaire ou de tous les jours, respectueux. Aucun drapeau, aucun nom de pays, aucune marque.",
  "KONAN = la mascotte : une peluche bleue toute douce avec un K brodé sur le ventre (image de référence fournie au dessinateur). Mets-le (konan = true) quand il peut naturellement guider, montrer ou observer ; environ une image sur deux.",
  'Réponds UNIQUEMENT en JSON : {"useful":true,"title":"titre court en français (40 car. max)","caption":"une phrase en français (140 car. max) qui dit ce que montre l\'image et le lien avec la notion","alt":"description de l\'image pour un élève malvoyant (150 car. max)","konan":true,"prompt":"description précise de l\'image EN ANGLAIS pour le dessinateur : scène, personnages, objets, action, cadrage"}',
].join('\n');

async function withRetry<T>(label: string, fn: () => Promise<T>): Promise<T | null> {
  for (let i = 1; i <= 4; i++) {
    try { return await fn(); } catch (e: any) {
      console.log(`   ${label} : essai ${i} raté (${String(e?.cause?.code || e?.status || e?.message || e).slice(0, 80)})`);
      await new Promise((r) => setTimeout(r, 4000 * i));
    }
  }
  return null;
}

async function brief(ch: any, point: any, step: any): Promise<any> {
  const text = [
    `Matière : ${SUBJECT[ch.subjectId] || ch.subjectId}. Classe : ${ch.gradeLevel}.`,
    `Leçon : ${ch.title}`,
    `Mini-leçon : ${point.title}`,
    `Résumé : ${String(point.summary || '').slice(0, 600)}`,
    `Étape illustrée : ${step.stepTitle || ''}`,
    `Texte de l'étape : ${String(step.paragraphText || point.conceptExplanation || '').slice(0, 1500)}`,
  ].join('\n');
  const r = await ai.models.generateContent({
    model: TEXT_MODEL,
    contents: [{ role: 'user', parts: [{ text }] }],
    config: { systemInstruction: BRIEF_RULES, responseMimeType: 'application/json', temperature: 0.6, thinkingConfig: { thinkingLevel: 'low' } as any },
  });
  return JSON.parse(String(r.text || '{}'));
}

async function draw(b: any): Promise<Buffer | null> {
  const parts: any[] = [];
  if (b.konan) parts.push({ inlineData: { mimeType: 'image/webp', data: KONAN_REF } });
  parts.push({ text: `Illustration for a high-school lesson. ${b.prompt} ${b.konan ? 'The friendly blue plush mascot from the reference image (soft blue fur, embroidered K on the belly) appears in the scene, same look, as a guide.' : ''} ${STYLE}` });
  const r = await ai.models.generateContent({
    model: IMAGE_MODEL,
    contents: [{ role: 'user', parts }],
    config: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '4:3' } } as any,
  });
  const p = r.candidates?.[0]?.content?.parts?.find((x: any) => x.inlineData?.data);
  return p ? Buffer.from(p.inlineData!.data!, 'base64') : null;
}

async function check(img: Buffer, ch: any, point: any, b: any): Promise<{ ok: boolean; why: string }> {
  const r = await ai.models.generateContent({
    model: TEXT_MODEL,
    contents: [{ role: 'user', parts: [
      { inlineData: { mimeType: 'image/jpeg', data: img.toString('base64') } },
      { text: `Cette image doit illustrer, pour des lycéens (${SUBJECT[ch.subjectId] || ch.subjectId}), la notion « ${point.title} » : ${b.caption}\n`
        + 'Vérifie : 1) y a-t-il du texte, des lettres, des chiffres ou des formules lisibles dans l’image (le K brodé sur la peluche bleue est permis) ? '
        + '2) l’image est-elle fidèle à la notion, sans erreur scientifique ni contresens ? 3) est-elle respectueuse et claire ?\n'
        + 'Réponds UNIQUEMENT en JSON : {"texte_visible":false,"fidele":true,"probleme":"…ou vide"}' },
    ] }],
    config: { responseMimeType: 'application/json', thinkingConfig: { thinkingLevel: 'low' } as any },
  });
  const v = JSON.parse(String(r.text || '{}'));
  const ok = v.texte_visible === false && v.fidele === true;
  return { ok, why: ok ? '' : String(v.probleme || (v.texte_visible ? 'texte visible' : 'pas fidèle')).slice(0, 160) };
}

function toWebp(srcFile: string, outFile: string) {
  const py = 'import sys\nfrom PIL import Image\nim = Image.open(sys.argv[1]).convert("RGB")\nim = im.resize((640, 480), Image.LANCZOS)\nim.save(sys.argv[2], "WEBP", quality=76, method=6)\n';
  const r = spawnSync('python', ['-I', '-c', py, srcFile, outFile], { encoding: 'utf8' });
  if (r.status !== 0) throw new Error(`Conversion WebP impossible : ${r.stderr}`);
}

function saveMapping(all: Record<string, any>) {
  const body = Object.entries(all)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, v]) => `  ${JSON.stringify(id)}: ${JSON.stringify(v)},`)
    .join('\n');
  const head = readFileSync(OUT_TS, 'utf8').split('export const COURSE_IMAGES')[0];
  writeFileSync(OUT_TS, `${head}export const COURSE_IMAGES: Record<string, CourseImage> = {\n${body}\n};\n`);
}

const all: Record<string, any> = { ...COURSE_IMAGES };
const done = new Set(Object.values(all).map((v: any) => `${v.chapterId}/${v.pointId}`));
const report: string[] = [];
let made = 0;

for (const raw of getAuthoredChaptersRaw() as any[]) {
  if (!ONLY.some((o) => raw.id.includes(o))) continue;
  const ch = applyIllustrations(raw) as any;
  console.log(`\n${ch.id} — ${ch.title}`);
  let n = 0;
  for (const point of ch.points || []) {
    if (n >= PER_CHAPTER) break;
    n++;
    if (done.has(`${ch.id}/${point.id}`) && args.redo !== 'true') { console.log(` · ${point.title} : déjà illustrée`); continue; }
    const steps = point.structuredSteps?.length ? point.structuredSteps : (point.exercises || []).map((e: any) => ({ exercise: e, paragraphText: point.conceptExplanation, stepTitle: point.title }));
    const step = steps.find((s: any) => !(s.visualSchema || s.exercise?.courseVisualSchema || s.exercise?.visualSchema));
    if (!step?.exercise?.id) { console.log(` · ${point.title} : toutes les étapes ont déjà une figure`); continue; }

    const b = await withRetry('commande', () => brief(ch, point, step));
    if (!b?.useful || !b?.prompt) { console.log(` · ${point.title} : pas d'image utile (${b ? 'jugé inutile' : 'erreur'})`); continue; }
    let accepted: Buffer | null = null;
    let lastWhy = '';
    for (let attempt = 1; attempt <= 2 && !accepted; attempt++) {
      const img = await withRetry('dessin', () => draw(b));
      if (!img) break;
      const v = await withRetry('vérification', () => check(img, ch, point, b));
      if (v?.ok) accepted = img;
      else lastWhy = v?.why || 'vérification impossible';
      if (!accepted) console.log(`   refusée (${lastWhy})`);
    }
    if (!accepted) { report.push(`REFUSÉE ${ch.id}/${point.id} : ${lastWhy}`); continue; }
    const dir = join(IMG_DIR, ch.id);
    mkdirSync(dir, { recursive: true });
    const tmp = join(dir, `${point.id}.tmp.jpg`);
    writeFileSync(tmp, accepted);
    toWebp(tmp, join(dir, `${point.id}.webp`));
    unlinkSync(tmp);
    all[step.exercise.id] = {
      src: `/course-images/${ch.id}/${point.id}.webp`,
      alt: String(b.alt || b.caption).slice(0, 200),
      title: String(b.title).slice(0, 60),
      caption: String(b.caption).slice(0, 180),
      chapterId: ch.id,
      pointId: point.id,
    };
    saveMapping(all);
    made++;
    console.log(` ✓ ${point.title} → ${b.title}${b.konan ? ' (avec KONAN)' : ''}`);
  }
}
console.log(`\nImages ajoutées : ${made}`);
if (report.length) console.log(report.join('\n'));

// Page d'aperçu (pour relire avant la mise en ligne)
if (args.preview) {
  const esc = (t: string) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const items = Object.values(all).filter((v: any) => ONLY.some((o) => v.chapterId.includes(o)));
  const html = `<!doctype html><meta charset="utf-8"><title>Images des cours</title><style>body{font-family:system-ui;background:#f8fafc;margin:24px}h2{margin:24px 0 8px}.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px}.c{background:#fff;border-radius:14px;padding:10px;box-shadow:0 1px 4px #0001}.c img{width:100%;border-radius:10px}.t{font-weight:800;margin:6px 0 2px}.s{color:#475569;font-size:13px}</style>`
    + [...new Set(items.map((v: any) => v.chapterId))].map((cid) => `<h2>${esc(cid)}</h2><div class="g">${items.filter((v: any) => v.chapterId === cid).map((v: any) => `<div class="c"><img src="${pathToFileURL(join(ROOT, 'public', v.src)).href}"><div class="t">${esc(v.title)}</div><div class="s">${esc(v.caption)}</div></div>`).join('')}</div>`).join('');
  writeFileSync(String(args.preview), html);
  console.log('Aperçu :', args.preview);
}
process.exit(0);
