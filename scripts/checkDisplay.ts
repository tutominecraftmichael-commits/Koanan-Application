/**
 * CONTRÔLE DE L'AFFICHAGE DES COURS — lancé avec `npm run check:cours` :
 * rejoue le rendu de l'application sur TOUTES les leçons (titres, fiches, formules clés, questions,
 * propositions, explications) et signale tout ce qui s'afficherait mal chez l'élève :
 *  - formule que KaTeX ne sait pas dessiner (elle apparaîtrait en texte de secours, ou en rouge avant) ;
 *  - commande LaTeX brute (« \iff », « \frac ») ou « $ » restés visibles dans le texte ;
 *  - « # » parasite.
 * Le script s'arrête avec un code d'erreur s'il trouve un problème.
 */
import { registerHooks } from 'node:module';
registerHooks({ load(url, c, next) { return url.endsWith('.css') ? { format: 'module', source: '', shortCircuit: true } : next(url, c); } });
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const { getCurriculumChapters } = await import('../src/lib/curriculum/curriculumRegistry');
const { cleanFormulasAndIndices, sanitizeFormulaForKatex, isDescriptiveFormula, splitFormulaLines, latexCommandsToUnicode } = await import('../src/components/common/MathRenderer');
const katex = (await import('katex')).default;

const GRADES = ['6eme', '5eme', '4eme', '3eme', 'seconde_a', 'seconde_c', 'premiere_a1', 'premiere_a2', 'premiere_c', 'premiere_d', 'terminale_a1', 'terminale_a2', 'terminale_c', 'terminale_d'] as const;
const SUBJECTS = ['maths', 'physique_chimie', 'svt', 'francais', 'histoire_geo', 'philosophie'] as const;
const MATH_RE = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\))/g;
const issues: Record<string, string[]> = { 'formule illisible': [], 'commande LaTeX visible': [], '« $ » visible': [], '« # » visible': [], 'titre coupé par « … »': [] };
const cut = (t?: string) => Boolean(t && /(\.\.\.|…)\s*$/.test(t.trim()));
const seen = new Set<string>();
const add = (k: string, s: string) => { if (issues[k].length < 400) issues[k].push(s.slice(0, 170)); };
const katexOk = (latex: string) => {
  for (const candidate of [sanitizeFormulaForKatex(latex), latex]) {
    try { katex.renderToString(candidate, { throwOnError: true, strict: false }); return true; } catch { /* essai suivant */ }
  }
  return false;
};

function checkText(where: string, text?: string) {
  if (!text || typeof text !== 'string' || seen.has(text)) return;
  seen.add(text);
  const pre = cleanFormulasAndIndices(text);
  let rest = pre;
  for (const m of pre.match(MATH_RE) || []) {
    const inner = m.startsWith('$$') ? m.slice(2, -2) : m.startsWith('$') ? m.slice(1, -1) : m.slice(2, -2);
    if (!katexOk(inner)) add('formule illisible', `${where} :: ${m}`);
    rest = rest.replace(m, ' ');
  }
  rest = latexCommandsToUnicode(rest);
  if (/\\[a-zA-Z]{2,}/.test(rest)) add('commande LaTeX visible', `${where} :: ${rest.match(/.{0,40}\\[a-zA-Z]{2,}.{0,30}/)?.[0]}`);
  if (/\$/.test(rest)) add('« $ » visible', `${where} :: ${rest.match(/.{0,40}\$.{0,30}/)?.[0]}`);
  if (/#/.test(rest)) add('« # » visible', `${where} :: ${rest.match(/.{0,40}#.{0,30}/)?.[0]}`);
}

function checkFormulaBox(where: string, formula?: string) {
  if (!formula) return;
  if (isDescriptiveFormula(formula)) { checkText(where, formula); return; }
  const lines = splitFormulaLines(formula);
  for (const l of lines.length > 1 ? lines : [formula]) {
    if (!katexOk(l)) add('formule illisible', `${where} (formule clé) :: ${l}`);
  }
}

let lessons = 0;
const doneChapters = new Set<string>();
for (const g of GRADES) for (const s of SUBJECTS) {
  for (const ch of getCurriculumChapters(s, g)) {
    if (doneChapters.has(ch.id)) continue;
    doneChapters.add(ch.id);
    lessons++;
    const w = ch.id;
    for (const p of ch.points) {
      if (cut(p.title)) add('titre coupé par « … »', `${w} :: ${p.title}`);
      checkText(`${w} titre`, p.title); checkText(`${w} résumé`, p.summary); checkText(`${w} règle`, p.keyRule);
      for (const f of p.formulas || []) { checkText(`${w} nom de formule`, f.name); checkFormulaBox(w, f.formula); checkText(`${w} note de formule`, f.note); }
      for (const st of p.structuredSteps || []) { checkText(`${w} fiche`, st.paragraphText); checkText(`${w} astuce`, (st as { konanTip?: string }).konanTip); }
      for (const ex of p.exercises || []) {
        checkText(`${w} question`, ex.prompt); checkText(`${w} explication`, ex.explanation);
        for (const o of ex.options || []) checkText(`${w} proposition`, o);
      }
    }
  }
}

const total = Object.values(issues).reduce((n, l) => n + l.length, 0);
console.log(`Affichage : ${lessons} leçons contrôlées.`);
for (const [k, list] of Object.entries(issues)) {
  if (!list.length) continue;
  console.log(`\n✗ ${k} : ${list.length}`);
  for (const x of list.slice(0, 15)) console.log('  ' + x);
}
if (total) {
  console.log(`\n${total} problème(s) d'affichage.`);
  process.exit(1);
}
console.log('Aucun problème d’affichage : pas de formule illisible, pas de « \\ », de « $ » ni de « # » visibles.');
