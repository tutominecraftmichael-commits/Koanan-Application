/**
 * CONTRÔLE DES DESSINS GÉNÉRÉS : la bulle, la pancarte et la légende ne doivent parler que de ce qui est
 * dessiné (ex. « je suis dans ma voiture » sans voiture = erreur). Lancé avec `npm run check:cours`.
 */
import { registerHooks } from 'node:module';
registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const { GENERATED_SCENES } = await import('../src/data/illustrations/generatedScenes');
const { SCENE_ILLUSTRATIONS } = await import('../src/data/illustrations/scenes');
const { SCENE_SUBJECTS } = await import('../src/data/illustrations/index');
const { getAuthoredChaptersRaw } = await import('../src/lib/curriculum/curriculumRegistry');

// Matière de chaque question, pour vérifier la règle : scènes UNIQUEMENT en Histoire-Géo et Philosophie
const subjectOfExercise = new Map<string, string>();
for (const ch of getAuthoredChaptersRaw() as any[]) {
  for (const p of ch.points || []) {
    for (const st of p.structuredSteps || []) if (st.exercise?.id) subjectOfExercise.set(st.exercise.id, ch.subjectId);
    for (const ex of p.exercises || []) if (ex?.id) subjectOfExercise.set(ex.id, ch.subjectId);
  }
}

// mot du texte → ce qui doit être présent dans la scène (objet ou véhicule)
const NEEDS: { re: RegExp; ok: (s: any) => boolean; label: string }[] = [
  { re: /\b(voiture|automobil\w*|auto)\b/i, ok: (s) => has(s, 'vehicle', 'voiture'), label: 'voiture' },
  { re: /\b(gbaka|bus|minibus|car)\b/i, ok: (s) => has(s, 'vehicle', 'gbaka'), label: 'gbaka / bus' },
  { re: /\b(train|wagon)\b/i, ok: (s) => has(s, 'vehicle', 'train'), label: 'train' },
  { re: /\b(navire|bateau|négrier)\b/i, ok: (s) => hasProp(s, 'navire'), label: 'navire' },
  { re: /\bpirogue\b/i, ok: (s) => hasProp(s, 'pirogue'), label: 'pirogue' },
  { re: /\bchameau\b/i, ok: (s) => hasProp(s, 'chameau'), label: 'chameau' },
  { re: /\bmicroscope\b/i, ok: (s) => hasProp(s, 'microscope'), label: 'microscope' },
  { re: /\b(avion|moto|vélo|bicyclette|camion|hélicoptère|fusée)\b/i, ok: () => false, label: 'véhicule impossible à dessiner' },
];
const has = (s: any, field: string, v: string) => (s.characters || []).some((c: any) => c[field] === v);
const hasProp = (s: any, kind: string) => (s.props || []).some((p: any) => p.kind === kind);

const problems: string[] = [];
for (const [id, scene] of Object.entries(GENERATED_SCENES) as [string, any][]) {
  // On contrôle ce qui est ÉCRIT DANS le dessin (bulle, pancarte) : la légende sous l'image peut parler du cours
  const text = [scene.spec.bubble?.text, scene.spec.sign].filter(Boolean).join(' ');
  for (const n of NEEDS) {
    if (n.re.test(text) && !n.ok(scene.spec)) problems.push(`${id} : « ${text} » → ${n.label} absent du dessin`);
  }
  if (scene.spec.bubble && !scene.spec.characters?.[scene.spec.bubble.from]) problems.push(`${id} : bulle sans personnage`);
}
for (const id of [...Object.keys(GENERATED_SCENES), ...Object.keys(SCENE_ILLUSTRATIONS)]) {
  const subject = subjectOfExercise.get(id);
  if (subject && !SCENE_SUBJECTS.includes(subject)) problems.push(`${id} : scène en ${subject} (les scènes sont réservées à l'Histoire-Géo et à la Philosophie)`);
}
console.log(`Dessins : ${Object.keys(GENERATED_SCENES).length} scènes contrôlées.`);
if (problems.length) {
  for (const p of problems) console.log('  ✗ ' + p);
  process.exit(1);
}
console.log('Aucune incohérence : chaque bulle et pancarte parle de ce qui est dessiné.');
