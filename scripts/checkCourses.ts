/**
 * CONTRÔLE DES COURS ET QCM — à lancer avant toute publication de contenu :
 *     npm run check:cours
 *
 * Vérifie, pour chaque leçon servie aux élèves (toutes classes, toutes matières) :
 *  1. AFFICHAGE FIDÈLE : chaque calcul écrit en texte (ex. « 4 − 35/11 ») garde la même valeur une fois
 *     dessiné à l'écran (fractions empilées). Un affichage qui change la valeur ferait refuser la bonne réponse.
 *  2. BONNE RÉPONSE JUSTE : pour les questions « Calcule … » purement numériques, la réponse enregistrée
 *     comme correcte vaut bien le résultat du calcul.
 *  3. STRUCTURE : question non vide, au moins 2 propositions toutes différentes, index de bonne réponse valide,
 *     explication présente, formules $…$ lisibles par KaTeX.
 * Le script s'arrête avec un code d'erreur si un problème est trouvé.
 */
import React from 'react';
import katex from 'katex';
import { registerHooks } from 'node:module';
// Les composants importent des feuilles de style (.css) : inutiles ici, on les ignore
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const { getCurriculumChapters } = await import('../src/lib/curriculum/curriculumRegistry');
const { renderTextWithStackedFractions, StackedFraction } = await import('../src/components/common/StackedFraction');
const { shuffleExerciseOptions } = await import('../src/lib/curriculum/optionShuffle');
const { cleanFormulasAndIndices, sanitizeFormulaForKatex } = await import('../src/components/common/MathRenderer');

const GRADES = ['6eme', '5eme', '4eme', '3eme', 'seconde_a', 'seconde_c', 'premiere_a1', 'premiere_a2', 'premiere_c', 'premiere_d', 'terminale_a1', 'terminale_a2', 'terminale_c', 'terminale_d'] as const;
const SUBJECTS = ['maths', 'physique_chimie', 'svt', 'francais', 'histoire_geo', 'philosophie'] as const;

const problems: string[] = [];
let computedChecked = 0;

// ---------- Petit évaluateur arithmétique (priorité des opérations respectée) ----------
function evaluate(expr: string): number | null {
  const src = expr.replace(/[−–]/g, '-').replace(/[×·]/g, '*').replace(/÷/g, '/').replace(/(\d),(\d)/g, '$1.$2').replace(/\s+/g, '');
  if (!/^[\d.+\-*/()]+$/.test(src)) return null;
  let i = 0;
  const peek = () => src[i];
  const parseExpr = (): number => { let v = parseTerm(); while (peek() === '+' || peek() === '-') { const op = src[i++]; const r = parseTerm(); v = op === '+' ? v + r : v - r; } return v; };
  const parseTerm = (): number => { let v = parseFactor(); while (peek() === '*' || peek() === '/') { const op = src[i++]; const r = parseFactor(); v = op === '*' ? v * r : v / r; } return v; };
  const parseFactor = (): number => {
    if (peek() === '-') { i++; return -parseFactor(); }
    if (peek() === '+') { i++; return parseFactor(); }
    if (peek() === '(') { i++; const v = parseExpr(); if (src[i++] !== ')') throw new Error('parenthèse'); return v; }
    const m = /^\d+(\.\d+)?/.exec(src.slice(i));
    if (!m) throw new Error('nombre attendu');
    i += m[0].length;
    return parseFloat(m[0]);
  };
  try { const v = parseExpr(); return i === src.length && Number.isFinite(v) ? v : null; } catch { return null; }
}

/**
 * Texte tel que MathRenderer l'affiche réellement : même prétraitement, formules KaTeX produites
 * (\frac{a}{b} → ((a)/(b))) et fractions empilées du texte libre (→ ((num)/(den))).
 */
function displayedText(text: string): string {
  const pre = cleanFormulasAndIndices(text);
  return pre
    .split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g)
    .map((seg, i) => {
      if (i % 2 === 0) return stackedText(seg);
      let tex = sanitizeFormulaForKatex(seg.replace(/^\$+|\$+$/g, ''));
      tex = tex.replace(/\\left|\\right/g, '').replace(/\\times/g, '×').replace(/\\cdot/g, '·').replace(/\{,\}/g, ',').replace(/\\,|\\;|\\!/g, ' ');
      for (let k = 0; k < 5; k++) tex = tex.replace(/\\[dt]?frac\{([^{}]*)\}\{([^{}]*)\}/g, '(($1)/($2))');
      return tex.replace(/[{}]/g, '');
    })
    .join('');
}

/** Fractions empilées du texte libre : chaque fraction redevient « (num)/(den) ». */
function stackedText(text: string): string {
  const flatten = (node: React.ReactNode): string => {
    if (node == null || typeof node === 'boolean') return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(flatten).join('');
    if (React.isValidElement(node) && node.type === StackedFraction) {
      const p = node.props as { numerator: React.ReactNode; denominator: React.ReactNode; negative?: boolean };
      return `${p.negative ? '-' : ''}((${flatten(p.numerator)})/(${flatten(p.denominator)}))`;
    }
    return '';
  };
  return flatten(renderTextWithStackedFractions(text));
}

// Suites de calcul dans le texte : nombres, opérateurs, parenthèses, avec au moins une division
const CALC_RUN = /[−\-(]?\(?\d[\d\s,.+\-−×·÷/()]*\d\)?/g;
function checkDisplay(where: string, text?: string) {
  if (!text || !text.includes('/')) return;
  // Les passages $…$ sont rendus par KaTeX (fractions explicites \frac) : on ne contrôle ici que le texte libre
  const free = text.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, ' ');
  for (const m of free.matchAll(CALC_RUN)) {
    const run = m[0].trim();
    if (!run.includes('/') || !/[+\-−×·÷]/.test(run.replace(/^[−-]/, ''))) continue;
    // Une date (12/05/2024) ou un score (8/8) n'est pas un calcul
    if (/^\d+\/\d+\/\d+$/.test(run)) continue;
    const before = evaluate(run);
    if (before === null) continue;
    const after = evaluate(displayedText(run));
    if (after === null || Math.abs(before - after) > 1e-9 * Math.max(1, Math.abs(before))) {
      problems.push(`AFFICHAGE FAUX : ${where} : « ${run} » vaut ${before} mais s'affiche comme ${after}`);
    }
  }
}

function checkMath(where: string, text?: string) {
  if (!text) return;
  const s = String(text).replace(/\\\$/g, '');
  if ((s.match(/\$/g) || []).length % 2) { problems.push(`$ impair : ${where}`); return; }
  for (const m of s.matchAll(/\$([^$]+)\$/g)) {
    try { katex.renderToString(m[1], { throwOnError: true, strict: false }); }
    catch (e) { problems.push(`FORMULE ILLISIBLE : ${where} : $${m[1].slice(0, 60)}$ (${(e as Error).message.slice(0, 60)})`); }
  }
}

/** « Calcule … : 4 − 35/11 » → la bonne réponse enregistrée doit valoir le résultat du calcul. */
function checkComputedAnswer(where: string, prompt: string, options: string[], correct: number) {
  const m = /calcul(?:e|er)\b[^:]*:\s*([0-9(−\-][0-9\s,.+\-−×·÷/()]*?)\s*[.?]?\s*$/i.exec(prompt);
  if (!m) return;
  const expected = evaluate(m[1]);
  const answer = evaluate(options[correct] ?? '');
  if (expected === null || answer === null) return;
  computedChecked++;
  if (Math.abs(expected - answer) > 1e-9 * Math.max(1, Math.abs(expected))) {
    problems.push(`RÉPONSE FAUSSE : ${where} : « ${m[1].trim()} » = ${expected}, mais la réponse marquée juste est « ${options[correct]} »`);
  }
}

// Auto-test du contrôle lui-même : il doit reconnaître une réponse fausse (sinon il ne protège de rien)
{
  const before = problems.length;
  checkComputedAnswer('auto-test', 'Calcule la différence suivante : 4 − 35/11', ['−31/11', '9/11'], 0);
  const caught = problems.splice(before);
  if (caught.length !== 1) { console.error('Le contrôle ne détecte plus une réponse fausse : à réparer.'); process.exit(2); }
}
// Pièges d'affichage connus, contrôlés à chaque lancement (ils ont déjà fait refuser de bonnes réponses)
for (const piege of ['4 − 35/11', '2 000 × (1 − 30/100)', '0,038 / (2 × 0,02)', '300 × 10 / 10 000', '2 × 3,14 × 0,5 / 2,0', '4,0 / (15,0 + 1,0)']) {
  checkDisplay('piège connu', piege);
}

// ---------- Parcours de toutes les leçons servies ----------
const seen = new Map<string, any>();
for (const g of GRADES) for (const s of SUBJECTS) for (const c of getCurriculumChapters(s, g)) seen.set(c.id, c);
let nEx = 0;
const norm = (o: string) => String(o).toLowerCase().replace(/\s+/g, ' ').trim();
for (const c of seen.values()) {
  for (const p of c.points) {
    for (const [label, txt] of [['cours', p.conceptExplanation], ['règle', p.keyRule], ['exemple', p.workedExample?.statement], ['conclusion', p.workedExample?.conclusion]] as const) {
      checkMath(`${c.id}/${p.id} ${label}`, txt); checkDisplay(`${c.id}/${p.id} ${label}`, txt);
    }
    const steps = p.structuredSteps || [];
    for (const st of steps) { checkMath(`${c.id}/${p.id} carte`, st.paragraphText); checkDisplay(`${c.id}/${p.id} carte`, st.paragraphText); }
    const exercises = steps.length ? steps.map((st: any) => st.exercise) : p.exercises || [];
    for (const raw of exercises) {
      nEx++;
      const w = `${c.id} › ${raw?.id}`;
      if (!raw?.prompt?.trim()) { problems.push(`QUESTION VIDE : ${w}`); continue; }
      const opts: string[] = raw.options || [];
      if (opts.length < 2) problems.push(`MOINS DE 2 PROPOSITIONS : ${w}`);
      if (new Set(opts.map(norm)).size !== opts.length) problems.push(`PROPOSITIONS EN DOUBLE : ${w}`);
      if (!(Number.isInteger(raw.correctAnswerIndex) && raw.correctAnswerIndex >= 0 && raw.correctAnswerIndex < opts.length)) { problems.push(`BONNE RÉPONSE INVALIDE : ${w}`); continue; }
      if (!raw.explanation?.trim()) problems.push(`EXPLICATION MANQUANTE : ${w}`);
      // Le mélange d'affichage doit toujours pointer sur la même bonne réponse
      const shown = shuffleExerciseOptions(raw);
      if (shown.options?.[shown.correctAnswerIndex!] !== opts[raw.correctAnswerIndex]) problems.push(`MÉLANGE INCOHÉRENT : ${w}`);
      for (const [label, txt] of [['question', raw.prompt], ['explication', raw.explanation], ...opts.map((o) => ['proposition', o] as const)] as const) {
        checkMath(`${w} ${label}`, txt); checkDisplay(`${w} ${label}`, txt);
      }
      checkComputedAnswer(w, raw.prompt, opts, raw.correctAnswerIndex);
    }
  }
}

console.log(`${seen.size} leçons, ${nEx} QCM contrôlés, ${computedChecked} réponses de calcul recalculées.`);
if (problems.length) {
  console.log(`\n${problems.length} problème(s) :\n` + problems.join('\n'));
  process.exit(1);
}
console.log('Aucun problème : affichage fidèle, bonnes réponses justes, structure correcte.');
