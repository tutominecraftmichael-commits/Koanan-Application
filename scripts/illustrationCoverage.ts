/**
 * ÉTAT DES ILLUSTRATIONS DES COURS (combien d'étapes ont une figure, une scène ou une image), par niveau et matière :
 *     npx tsx scripts/illustrationCoverage.ts
 */
import { registerHooks } from 'node:module';

registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const { getAuthoredChaptersRaw, loadAllCurriculum } = await import('../src/lib/curriculum/curriculumRegistry');
await loadAllCurriculum();
const { applyIllustrations } = await import('../src/data/illustrations');

type Row = { chapters: number; points: number; steps: number; illustrated: number; chaptersWithout: number };
const rows = new Map<string, Row>();
for (const raw of getAuthoredChaptersRaw() as any[]) {
  const ch = applyIllustrations(raw) as any;
  const key = `${String(ch.gradeLevel).replace(/_.*/, '')} · ${ch.subjectId}`;
  const r = rows.get(key) || { chapters: 0, points: 0, steps: 0, illustrated: 0, chaptersWithout: 0 };
  let chIll = 0;
  for (const p of ch.points || []) {
    r.points++;
    const steps = p.structuredSteps?.length ? p.structuredSteps : (p.exercises || []).map((e: any) => ({ exercise: e }));
    for (const s of steps) {
      r.steps++;
      const has = Boolean(s.visualSchema || s.exercise?.courseVisualSchema || s.exercise?.visualSchema);
      if (has) { r.illustrated++; chIll++; }
    }
    if (p.visualSchema) chIll++;
  }
  r.chapters++;
  if (!chIll) r.chaptersWithout++;
  if (process.argv.includes('--list') && !chIll) console.log('  sans image :', ch.id, `(${(ch.points || []).length} mini-leçons)`, ch.title);
  rows.set(key, r);
}
const sorted = [...rows.entries()].sort(([a], [b]) => a.localeCompare(b));
console.log('niveau · matière'.padEnd(36), 'leçons', 'mini', 'étapes', 'illustrées', '%', 'leçons sans image');
let t = { chapters: 0, points: 0, steps: 0, illustrated: 0, chaptersWithout: 0 };
for (const [k, r] of sorted) {
  console.log(k.padEnd(36), String(r.chapters).padStart(6), String(r.points).padStart(5), String(r.steps).padStart(6), String(r.illustrated).padStart(10), `${Math.round((100 * r.illustrated) / Math.max(1, r.steps))}%`.padStart(4), String(r.chaptersWithout).padStart(8));
  for (const f of Object.keys(t) as (keyof Row)[]) t[f] += r[f];
}
console.log('TOTAL'.padEnd(36), String(t.chapters).padStart(6), String(t.points).padStart(5), String(t.steps).padStart(6), String(t.illustrated).padStart(10), `${Math.round((100 * t.illustrated) / t.steps)}%`.padStart(4), String(t.chaptersWithout).padStart(8));
