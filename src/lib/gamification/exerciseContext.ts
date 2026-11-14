/**
 * Une question de cours a-t-elle besoin de sa mini-leçon pour être comprise ?
 * Dans le cours guidé, la fiche de l'étape est affichée juste avant la question ; dans l'icône d'exercices,
 * la question arrive seule. On écarte donc celles qui renvoient à une donnée absente de l'énoncé :
 * « la fonction f » jamais définie, « cette figure », « ce texte », « l'exemple ci-dessus »…
 */
import type { InteractiveExercise } from '../curriculum/types';

// Renvois explicites à une autre partie du cours (jamais dans l'énoncé lui-même)
const REFERS_ELSEWHERE = /(ci-dessus|ci-dessous|(?:question|[ée]tape|exemple|exercice|mini-le[çc]on|calcul|r[ée]sultat) pr[ée]c[ée]dente?|d[èe]s la question|dans le cours|vu plus haut|plus haut|dans la fiche|l[’'][ée]tape \d)/i;

/**
 * Retire les renvois au document source, inutiles pour l'élève : « (Ex. 17 p.21) », « (p.12) »,
 * « (Exercice 8) », « (Exemple 1 p.1) », « (Documentation p. 8) », « (énoncé de l'Ex. 4 q4b p.6) ».
 */
export function cleanSeriesPrompt(prompt: string): string {
  return String(prompt || '')
    .replace(/\s*\((?:[^()]*?\b(?:Ex(?:ercice)?|Exemple|Documentation|Situation|Activit[ée]|[ée]nonc[ée])\b[^()]*?|p\.\s?\d+(?:[–-]\d+)?)\)/gi, '')
    .replace(/\s+([?.!:;,])/g, ' $1')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
// Figure ou document annoncé mais absent (« D'après la carte… », « Dans le tableau des 100 ménages… »)
const MISSING_FIGURE = /\b(d[’']apr[èe]s|sur|dans|observe|lis|selon|[àa] l[’']aide d[eu])\s+(la figure|le graphique|le sch[ée]ma|le tableau|la courbe|le document|la carte|l[’']image)\b/i;
// Démonstratif sans référent dans une question courte (« Que vaut ce résultat ? »)
const SHORT_DEMONSTRATIVE = /\b(ce|cette|cet|ces) (texte|graphique|tableau|document|sch[ée]ma|figure|courbe|r[ée]sultat|calcul|cas|exemple|extrait|passage|situation|fonction|suite|[ée]quation|expression)\b/i;
// Fonction appliquée à une valeur précise (f(2), f'(1), g(-3)…) ou courbe C_f, sans que f soit définie
const FUNCTION_VALUE = /\b[fgh]\s*'?\s*\(\s*-?\s*[\d.,]+\s*\)|\b[fgh]'\s*\(|C_\{?[fgh]\}?|\\mathcal\{C\}_\{?[fgh]\}?/;
const DEFINES_FUNCTION = /\b[fgh]\s*\(\s*x\s*\)\s*=|\b[fgh]\s*:\s*x\s*\\?(?:mapsto|↦)|\b[fgh]\s*\(\s*x\s*\)\s*&?=/;
// Suite (u_n) utilisée sans être définie
const SEQUENCE_USE = /u_\{?(?:n|\d+|n\s*\+\s*1)\}?/;
const DEFINES_SEQUENCE = /u_\{?(?:n|0|1|n\s*\+\s*1)\}?\s*=|raison|premier terme/i;

export function needsLessonContext(e: Pick<InteractiveExercise, 'prompt' | 'visualSchema'>): boolean {
  const prompt = String(e.prompt || '');
  const hasFigure = Boolean(e.visualSchema);
  if (REFERS_ELSEWHERE.test(prompt)) return true;
  if (!hasFigure && MISSING_FIGURE.test(prompt) && !/\bon (lit|relève|a relevé)\b|[:«]/i.test(prompt)) return true;
  if (prompt.length < 70 && SHORT_DEMONSTRATIVE.test(prompt)) return true;
  // f(2), C_g… sans aucune donnée (ni définition de f, ni valeur, ni relation comme f(2) = 5 ou f'(x) < 0)
  if (!hasFigure && FUNCTION_VALUE.test(prompt) && !DEFINES_FUNCTION.test(prompt) && !/[=<>≤≥]|\\(?:le|ge|leq|geq|neq)\b/.test(prompt)) return true;
  if (SEQUENCE_USE.test(prompt) && !DEFINES_SEQUENCE.test(prompt) && prompt.length < 90) return true;
  return false;
}
