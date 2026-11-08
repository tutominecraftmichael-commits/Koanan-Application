/**
 * APERÇU DES SCÈNES GÉNÉRÉES — page HTML à relire avant la mise en ligne :
 *     npx tsx scripts/previewScenes.ts <fichier.html> [--only=<morceau d'id de leçon>]
 * Les scènes sont regroupées par leçon, avec l'étape du cours qu'elles illustrent.
 */
import { writeFileSync } from 'node:fs';
import { registerHooks } from 'node:module';

registerHooks({
  load(url, context, nextLoad) {
    if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true };
    return nextLoad(url, context);
  },
});
(globalThis as any).localStorage ??= { getItem: () => null, setItem() {}, removeItem() {} };

const { getAuthoredChaptersRaw } = await import('../src/lib/curriculum/curriculumRegistry');
const { GENERATED_SCENES } = await import('../src/data/illustrations/generatedScenes');
const { renderScene } = await import('../src/lib/scenes/sceneRenderer');

const out = process.argv[2];
const only = (process.argv.find((a) => a.startsWith('--only=')) || '').slice(7);
const esc = (t: string) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const sections: string[] = [];
for (const ch of getAuthoredChaptersRaw() as any[]) {
  if (only && !ch.id.includes(only)) continue;
  const cards: string[] = [];
  for (const p of ch.points || []) {
    for (const st of p.structuredSteps || []) {
      const s = GENERATED_SCENES[st.exercise?.id];
      if (!s) continue;
      cards.push(`<figure class="scene"><div class="art">${renderScene(s.spec, { id: st.exercise.id, label: s.caption })}</div>` +
        `<figcaption><span class="tag">${esc(p.title)}</span><h3>${esc(s.title)}</h3><p>${esc(s.caption)}</p>` +
        `<p class="step"><b>Étape :</b> ${esc(st.paragraphText || '').slice(0, 220)}</p></figcaption></figure>`);
    }
  }
  if (cards.length) sections.push(`<section><h2>${esc(ch.title)} <small>${esc(ch.gradeLevel)}</small></h2><div class="grid">${cards.join('')}</div></section>`);
}

writeFileSync(out, `<title>Scènes générées</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@400;600;700&display=swap">
<style>
  /* Layout : planche d'illustrations regroupées par leçon */
  :root { --bg: #F2F7FB; --card: #FFFFFF; --ink: #1B2A3A; --muted: #4F6378; --accent: #0E7FB8; --tag: #E0F2FE;
    --display: 'Baloo 2', 'Trebuchet MS', system-ui, sans-serif; --body: 'Nunito', 'Segoe UI', system-ui, sans-serif; }
  @media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --bg: #0E1621; --card: #172231; --ink: #E7EEF6; --muted: #9DB0C4; --accent: #5CC3F5; --tag: #12344A; color-scheme: dark } }
  :root[data-theme="dark"] { --bg: #0E1621; --card: #172231; --ink: #E7EEF6; --muted: #9DB0C4; --accent: #5CC3F5; --tag: #12344A; color-scheme: dark }
  body { background: var(--bg); color: var(--ink); font-family: var(--body); font-size: 15px; line-height: 1.5;
    padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); padding-block: 20px 40px; }
  main { max-width: 1100px; margin: 0 auto; display: grid; gap: 28px; }
  h1, h2, h3 { font-family: var(--display); font-weight: 800; margin: 0; text-wrap: balance; }
  h1 { font-size: clamp(24px, 5vw, 34px); }
  h2 { font-size: 21px; margin-bottom: 10px; } h2 small { font-family: var(--body); font-size: 12px; color: var(--muted); font-weight: 600; }
  .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); gap: 16px; }
  .scene { margin: 0; background: var(--card); border-radius: 20px; padding: 10px; display: grid; gap: 8px; min-width: 0; }
  .art svg { display: block; width: 100%; height: auto; }
  figcaption { padding: 0 6px 6px; display: grid; gap: 4px; }
  .tag { justify-self: start; font-size: 11px; font-weight: 700; letter-spacing: 0.04em; color: var(--accent); background: var(--tag); padding: 2px 8px; border-radius: 999px; }
  h3 { font-size: 18px; } p { margin: 0; color: var(--muted); } .step { font-size: 13px; }
</style>
<main><h1>Dessins générés pour les cours</h1>${sections.join('') || '<p>Aucune scène générée pour l’instant.</p>'}</main>
`);
console.log(`${sections.length} leçon(s) dans l'aperçu.`);
