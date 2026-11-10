/**
 * CONTRÔLE DES DOUBLONS (lancé par `npm run check:cours`).
 *
 * Pour chaque classe et chaque matière servies aux élèves, vérifie :
 *  1. qu'aucun identifiant de chapitre, de mini-leçon ou de question n'est utilisé deux fois
 *     (la mémoire des erreurs de KONAN retrouve chaque question par son identifiant) ;
 *  2. qu'une même question (même énoncé ET mêmes propositions) n'est pas posée dans deux mini-leçons ;
 *  3. que deux mini-leçons d'un même volet ne portent pas le même titre (hors « Entraînement type BAC ») ;
 *  4. que deux chapitres d'un même volet n'ont pas le même numéro d'ordre (l'ordre du programme serait flou).
 * Le script s'arrête avec un code d'erreur si un problème est trouvé.
 */
import { registerHooks } from 'node:module';
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const { getCurriculumChapters } = await import('../src/lib/curriculum/curriculumRegistry');
const { getChapterSubCategory } = await import('../src/lib/curriculum/studentProgressService');

const GRADES = ['6eme', '5eme', '4eme', '3eme', 'seconde_a', 'seconde_c', 'premiere_a1', 'premiere_a2', 'premiere_c', 'premiere_d', 'terminale_a1', 'terminale_a2', 'terminale_c', 'terminale_d'] as const;
const SUBJECTS = ['maths', 'physique_chimie', 'svt', 'francais', 'histoire_geo', 'philosophie'] as const;
const norm = (s: string) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim();

const problems: string[] = [];
let points = 0;
let questions = 0;

for (const grade of GRADES) {
  for (const subject of SUBJECTS) {
    const chapters = getCurriculumChapters(subject, grade);
    if (!chapters.length) continue;
    const tag = `${grade}/${subject}`;
    const chapterIds = new Set<string>();
    const pointIds = new Map<string, string>();
    const exerciseIds = new Map<string, string>();
    const questionKeys = new Map<string, string>();
    const titles = new Map<string, string>();
    const orders = new Map<string, string>();

    for (const chapter of chapters) {
      const volet = getChapterSubCategory(chapter);
      if (chapterIds.has(chapter.id)) problems.push(`${tag} : chapitre « ${chapter.id} » présent deux fois`);
      chapterIds.add(chapter.id);
      const orderKey = `${volet}#${chapter.order}`;
      if (orders.has(orderKey)) problems.push(`${tag} [${volet}] : deux chapitres ont l'ordre ${chapter.order} (${orders.get(orderKey)} et ${chapter.id})`);
      orders.set(orderKey, chapter.id);

      for (const point of chapter.points) {
        points++;
        const where = `${chapter.id} › ${point.title}`;
        if (pointIds.has(point.id)) problems.push(`${tag} : identifiant de mini-leçon « ${point.id} » utilisé deux fois`);
        pointIds.set(point.id, where);
        const titleKey = `${volet}#${norm(point.title)}`;
        if (!/entrainement type bac/.test(titleKey) && titles.has(titleKey) && titles.get(titleKey)!.split(' › ')[0] === chapter.id) {
          problems.push(`${tag} : deux mini-leçons du même chapitre s'appellent « ${point.title} »`);
        }
        titles.set(titleKey, where);

        const list = point.exercises?.length ? point.exercises : (point.structuredSteps || []).map((s) => s.exercise);
        for (const ex of list) {
          if (!ex) continue;
          questions++;
          if (!ex.id) { problems.push(`${tag} : une question sans identifiant dans « ${where} »`); continue; }
          if (exerciseIds.has(ex.id)) problems.push(`${tag} : identifiant de question « ${ex.id} » utilisé deux fois (${exerciseIds.get(ex.id)} / ${where})`);
          exerciseIds.set(ex.id, where);
          const key = norm(ex.prompt) + '||' + (ex.options || []).map(norm).sort().join('|');
          const other = questionKeys.get(key);
          if (other && other !== where) problems.push(`${tag} : même question posée deux fois « ${ex.prompt.slice(0, 80)} » (${other} / ${where})`);
          questionKeys.set(key, where);
        }
      }
    }
  }
}

console.log(`Doublons : ${points} mini-leçons et ${questions} questions contrôlées.`);
if (problems.length) {
  console.log(`${problems.length} problème(s) :`);
  for (const p of problems) console.log(' - ' + p);
  process.exit(1);
}
console.log('Aucun doublon : identifiants uniques, aucune question ni mini-leçon répétée.');
