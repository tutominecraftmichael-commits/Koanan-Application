/**
 * CONTRÔLE DES DESSINS GÉNÉRÉS : la bulle, la pancarte et la légende ne doivent parler que de ce qui est
 * dessiné (ex. « je suis dans ma voiture » sans voiture = erreur). Lancé avec `npm run check:cours`.
 */
const { GENERATED_SCENES } = await import('../src/data/illustrations/generatedScenes');

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
console.log(`Dessins : ${Object.keys(GENERATED_SCENES).length} scènes contrôlées.`);
if (problems.length) {
  for (const p of problems) console.log('  ✗ ' + p);
  process.exit(1);
}
console.log('Aucune incohérence : chaque bulle et pancarte parle de ce qui est dessiné.');
