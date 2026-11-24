/**
 * SRIT Licence 1 — Géométrie différentielle (2MTH3101, Semestre 1).
 * Rédigé à partir du cours et des fiches de TD du dossier SRIT (propriétés métriques des arcs, champs de vecteurs,
 * intégrales doubles). Format v2 : mini-leçons de 6 étapes, questions autonomes.
 */
import type { CurriculumChapter, CurriculumPoint, InteractiveExercise, StepKind, StructuredLessonStep } from '../../../../lib/curriculum/types';

const r = String.raw;
const THEME: Record<StepKind, string> = { definition: 'blue', propriete: 'violet', methode: 'green', piege: 'orange', exemple: 'slate' };
const SOURCE = 'Programme LMD — Licence 1 SRIT (2MTH3101 : Géométrie différentielle)';

const qcm = (id: string, prompt: string, options: string[], correctAnswerIndex: number, explanation: string, hint: string): InteractiveExercise => ({
  id, type: 'mcq', prompt, options, correctAnswerIndex, explanation, hint,
});
const step = (
  stepNumber: number, stepKind: StepKind, stepBadge: string, stepTitle: string, paragraphText: string,
  exercise: InteractiveExercise, extra: Partial<StructuredLessonStep> = {},
): StructuredLessonStep => ({ stepNumber, stepKind, stepBadge, stepTheme: THEME[stepKind], stepTitle, paragraphText, ...extra, exercise });
const makePoint = (p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] }): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

// ---------------------------------------------------------------------------
// Schémas (SVG sur feuille claire), tracés à partir des vraies équations
// ---------------------------------------------------------------------------
const pts = (n: number, f: (i: number) => [number, number]) => Array.from({ length: n + 1 }, (_, i) => f(i).map((v) => v.toFixed(1)).join(',')).join(' ');
const sub = (base: string, s: string) => `${base}<tspan baseline-shift="sub" font-size="9">${s}</tspan>`;
const AX = (id: string) => `<marker id="${id}" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#475569"/></marker>`;

// Arc γ(t) = (t, t²/2), t ∈ [0 ; 2] — échelle 80 px, origine (40 ; 175). Tangente en t = 1.
const SVG_ARC = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs>${AX('gd-ax')}<marker id="gd-v" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker></defs>
  <line x1="40" y1="175" x2="380" y2="175" stroke="#475569" stroke-width="1.4" marker-end="url(#gd-ax)"/><line x1="40" y1="190" x2="40" y2="8" stroke="#475569" stroke-width="1.4" marker-end="url(#gd-ax)"/>
  <text x="372" y="192" font-size="12" fill="#475569">x</text><text x="26" y="16" font-size="12" fill="#475569">y</text>
  <polyline points="${pts(40, (i) => { const t = i * 0.05; return [40 + 80 * t, 175 - 40 * t * t]; })}" fill="none" stroke="#1e293b" stroke-width="2.4"/>
  <circle cx="120" cy="135" r="4" fill="#1e293b"/><text x="126" y="152" font-size="13" font-weight="bold" fill="#1e293b">M(t)</text>
  <line x1="120" y1="135" x2="176" y2="79" stroke="#dc2626" stroke-width="2.4" marker-end="url(#gd-v)"/>
  <text x="182" y="80" font-size="13" font-weight="bold" fill="#dc2626">γ′(t)</text>
  <text x="215" y="130" font-size="11" fill="#1e293b">γ(t) = (t, t²/2)</text>
  <text x="215" y="146" font-size="11" fill="#1e293b">en t = 1 : γ′(1) = (1, 1)</text>
  <text x="215" y="162" font-size="11" fill="#1e293b">vecteur tangent à la courbe</text>
</svg>`;

// Parabole y = x²/(2a) avec a = 1, échelle 60 px, sommet en (200 ; 170). Cercle osculateur de rayon a.
const SVG_OSCULATEUR = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <line x1="40" y1="170" x2="360" y2="170" stroke="#94a3b8" stroke-width="1.2"/><line x1="200" y1="190" x2="200" y2="15" stroke="#94a3b8" stroke-width="1.2"/>
  <circle cx="200" cy="110" r="60" fill="none" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="6 4"/>
  <polyline points="${pts(44, (i) => { const x = -2.2 + i * 0.1; return [200 + 60 * x, 170 - 30 * x * x]; })}" fill="none" stroke="#1e293b" stroke-width="2.4"/>
  <circle cx="200" cy="170" r="4" fill="#1e293b"/><text x="208" y="186" font-size="12" font-weight="bold" fill="#1e293b">M</text>
  <circle cx="200" cy="110" r="3.5" fill="#b45309"/><text x="208" y="108" font-size="13" font-weight="bold" fill="#b45309">C</text>
  <line x1="200" y1="170" x2="200" y2="110" stroke="#b45309" stroke-width="2"/><text x="180" y="146" font-size="12" font-weight="bold" fill="#b45309">${sub('R', 'c')}</text>
  <text x="16" y="192" font-size="11" fill="#1e293b">y = x²/(2a), a = 1</text>
  <text x="292" y="140" font-size="11" fill="#0f766e">cercle osculateur</text><text x="292" y="155" font-size="11" fill="#0f766e">(rayon ${sub('R', 'c')} = a)</text>
</svg>`;

// Champ de vecteurs V(x, y) = (−y, x) sur la grille {−2…2}², échelle 40 px, centre (180 ; 110), flèches à 1/4.
const FIELD = [-2, -1, 0, 1, 2].flatMap((x) => [-2, -1, 0, 1, 2].map((y) => [x, y])).filter(([x, y]) => x !== 0 || y !== 0)
  .map(([x, y]) => `<line x1="${180 + 40 * x}" y1="${110 - 40 * y}" x2="${180 + 40 * x - 10 * y}" y2="${110 - 40 * y - 10 * x}" stroke="#1d4ed8" stroke-width="1.8" marker-end="url(#gd-f)"/>`).join('');
const SVG_CHAMP = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs><marker id="gd-f" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#1d4ed8"/></marker></defs>
  <line x1="80" y1="110" x2="280" y2="110" stroke="#94a3b8" stroke-width="1"/><line x1="180" y1="10" x2="180" y2="210" stroke="#94a3b8" stroke-width="1"/>
  ${FIELD}
  <circle cx="180" cy="110" r="3" fill="#1e293b"/>
  <text x="296" y="44" font-size="12" font-weight="bold" fill="#1d4ed8">V = (−y, x)</text>
  <text x="296" y="66" font-size="11" fill="#1e293b">le champ tourne</text><text x="296" y="80" font-size="11" fill="#1e293b">autour de O</text>
  <text x="296" y="104" font-size="11" fill="#1e293b">rot V = 2 k</text><text x="296" y="120" font-size="11" fill="#1e293b">div V = 0</text>
</svg>`;

// Domaine entre y = x et y = √x pour x ∈ [0 ; 1], échelle 150 px, origine (60 ; 175).
const SQRT_PTS = pts(40, (i) => { const x = i / 40; return [60 + 150 * x, 175 - 150 * Math.sqrt(x)]; });
const SVG_DOMAINE = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs>${AX('gd-ax2')}</defs>
  <polygon points="${SQRT_PTS} 60,175" fill="#fde68a" fill-opacity="0.85"/>
  <line x1="60" y1="175" x2="250" y2="175" stroke="#475569" stroke-width="1.4" marker-end="url(#gd-ax2)"/><line x1="60" y1="190" x2="60" y2="8" stroke="#475569" stroke-width="1.4" marker-end="url(#gd-ax2)"/>
  <polyline points="${SQRT_PTS}" fill="none" stroke="#dc2626" stroke-width="2.4"/>
  <line x1="60" y1="175" x2="210" y2="25" stroke="#1d4ed8" stroke-width="2.4"/>
  <line x1="135" y1="100" x2="135" y2="68.9" stroke="#1e293b" stroke-width="3"/>
  <text x="146" y="120" font-size="11" fill="#1e293b">x ≤ y ≤ √x</text>
  <text x="44" y="190" font-size="11" fill="#475569">0</text><text x="206" y="190" font-size="11" fill="#475569">1</text><text x="44" y="29" font-size="11" fill="#475569">1</text>
  <text x="222" y="40" font-size="12" font-weight="bold" fill="#1d4ed8">y = x</text><text x="88" y="56" font-size="12" font-weight="bold" fill="#dc2626">y = √x</text>
  <text x="262" y="110" font-size="11" fill="#1e293b">Aire = ∫₀¹ (√x − x) dx</text><text x="262" y="126" font-size="11" fill="#1e293b">= 2/3 − 1/2 = 1/6</text>
</svg>`;

// Quart de disque unité (échelle 140 px, origine (60 ; 175)) et élément de surface polaire.
const polar = (rho: number, th: number): [number, number] => [60 + 140 * rho * Math.cos(th), 175 - 140 * rho * Math.sin(th)];
const [p1, p2, p3, p4] = [polar(0.55, Math.PI / 6), polar(0.72, Math.PI / 6), polar(0.72, (2 * Math.PI) / 9), polar(0.55, (2 * Math.PI) / 9)].map((p) => p.map((v) => v.toFixed(1)).join(','));
const SVG_POLAIRE = `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs>${AX('gd-ax3')}</defs>
  <path d="M60,175 L200,175 A140,140 0 0,0 60,35 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
  <path d="M${p1} L${p2} A100.8,100.8 0 0,0 ${p3} L${p4} A77,77 0 0,1 ${p1} Z" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
  <line x1="60" y1="175" x2="${polar(0.55, Math.PI / 6).map((v) => v.toFixed(1)).join('" y2="')}" stroke="#475569" stroke-dasharray="3 3"/>
  <line x1="60" y1="175" x2="240" y2="175" stroke="#475569" stroke-width="1.4" marker-end="url(#gd-ax3)"/><line x1="60" y1="190" x2="60" y2="12" stroke="#475569" stroke-width="1.4" marker-end="url(#gd-ax3)"/>
  <text x="96" y="154" font-size="12" font-weight="bold" fill="#475569">ρ</text>
  <text x="196" y="190" font-size="11" fill="#475569">1</text>
  <text x="250" y="80" font-size="12" font-weight="bold" fill="#b45309">dS = ρ dρ dθ</text>
  <text x="250" y="100" font-size="11" fill="#1e293b">x = ρ cos θ</text><text x="250" y="116" font-size="11" fill="#1e293b">y = ρ sin θ</text>
  <text x="250" y="140" font-size="11" fill="#1e293b">quart de disque :</text><text x="250" y="156" font-size="11" fill="#1e293b">0 ≤ ρ ≤ 1, 0 ≤ θ ≤ π/2</text>
</svg>`;

export const GEOMETRIE_DIFF_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : PROPRIÉTÉS MÉTRIQUES DES ARCS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_geod_ch1',
    subjectId: 'lmd_geometrie_diff',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 1,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: SOURCE,
    title: 'Propriétés métriques des arcs',
    summary: 'Arcs paramétrés, points réguliers et singuliers, longueur d’un arc, abscisse curviligne, courbure, formules de Frenet, rayon et centre de courbure.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_geod_ch1_p1',
        order: 1,
        title: 'Arcs paramétrés et longueur',
        summary: 'Arc paramétré de classe C¹, vecteur dérivé, points réguliers et singuliers, tangente, vitesse et longueur d’un arc.',
        conceptExplanation: r`Un **arc paramétré** décrit une courbe par un point mobile $M(t) = (x(t), y(t))$ quand $t$ parcourt un intervalle. Le **vecteur dérivé** $\gamma'(t)$ est tangent à la courbe ; sa norme est la **vitesse** de parcours. En additionnant les petites longueurs $\|\gamma'(t)\|\,dt$, on obtient la **longueur** de l’arc.`,
        formulas: [
          { name: 'Vecteur dérivé et vitesse', formula: r`\gamma'(t) = (x'(t), y'(t)) \quad ; \quad v(t) = \|\gamma'(t)\| = \sqrt{x'(t)^2 + y'(t)^2}` },
          { name: 'Longueur d’un arc', formula: r`L = \int_a^b \|\gamma'(t)\|\,dt` },
          { name: 'Longueur d’un graphe', formula: r`L = \int_a^b \sqrt{1 + f'(x)^2}\,dx` },
        ],
        keyRule: r`Un point $M(t_0)$ est **régulier** si $\gamma'(t_0) \ne \vec 0$ : la tangente y est dirigée par $\gamma'(t_0)$.`,
        workedExample: {
          title: 'Longueur d’un quart de cercle',
          statement: r`Calcule la longueur de l’arc $\gamma(t) = (R\cos t, R\sin t)$ pour $t \in \left[0, \frac{\pi}{2}\right]$.`,
          methodSteps: [
            r`$\gamma'(t) = (-R\sin t, R\cos t)$, donc $\|\gamma'(t)\| = \sqrt{R^2\sin^2 t + R^2\cos^2 t} = R$ (vitesse constante).`,
            r`$L = \int_0^{\pi/2} R\,dt = \frac{\pi R}{2}$.`,
          ],
          conclusion: r`$L = \frac{\pi R}{2}$ ; sur $[0, 2\pi]$ on retrouve le périmètre $2\pi R$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Arc paramétré et vecteur tangent', svgContent: SVG_ARC },
        structuredSteps: [
          step(1, 'definition', 'Arc paramétré', 'Un point qui se déplace',
            r`Un arc paramétré de classe $C^1$ est une application $t \mapsto \gamma(t) = (x(t), y(t))$ dont les coordonnées sont dérivables à dérivées continues. Son vecteur dérivé est $\gamma'(t) = (x'(t), y'(t))$.`,
            qcm('lmd_srit_l1_geod_ch1_p1_ex1',
              r`On considère l’arc $\gamma(t) = \left(t, \frac{t^2}{2}\right)$. Quel est son vecteur dérivé $\gamma'(t)$ ?`,
              [r`$(1, t^2)$`, r`$(1, t)$`, r`$(t, t)$`, r`$\left(0, \frac{t}{2}\right)$`],
              1, r`On dérive chaque coordonnée : $x'(t) = 1$ et $y'(t) = \frac{2t}{2} = t$. Donc $\gamma'(t) = (1, t)$.`,
              r`La dérivée de $\frac{t^2}{2}$ est $t$.`)),
          step(2, 'propriete', 'Régulier', 'Points réguliers et points singuliers',
            r`Un point $M(t_0)$ est **régulier** si $\gamma'(t_0) \ne \vec 0$ ; la tangente est alors dirigée par $\gamma'(t_0)$. Si $\gamma'(t_0) = \vec 0$, le point est **singulier** (il peut y avoir un rebroussement). Un arc est régulier si tous ses points le sont.`,
            qcm('lmd_srit_l1_geod_ch1_p1_ex2',
              r`On considère l’arc $\gamma(t) = (t^2, t^3)$ pour $t \in \mathbb R$. Pour quelle valeur de $t$ le point $M(t)$ est-il singulier ?`,
              [r`$t = 1$`, r`$t = -1$`, r`$t = 0$`, 'Aucune, l’arc est régulier'],
              2, r`$\gamma'(t) = (2t, 3t^2)$ s’annule seulement pour $t = 0$ : le point $M(0) = (0, 0)$ est singulier (c’est un point de rebroussement).`,
              r`Cherche quand les deux coordonnées de $\gamma'(t)$ sont nulles en même temps.`)),
          step(3, 'methode', 'Vitesse', 'La vitesse de parcours',
            r`La **vitesse** est la norme du vecteur dérivé : $v(t) = \sqrt{x'(t)^2 + y'(t)^2}$. Pour un cercle $\gamma(t) = (R\cos t, R\sin t)$, on trouve $v(t) = R$ : le cercle est parcouru à vitesse constante.`,
            qcm('lmd_srit_l1_geod_ch1_p1_ex3',
              r`On considère le cercle $\gamma(t) = (3\cos t, 3\sin t)$. Quelle est sa vitesse $\|\gamma'(t)\|$ ?`,
              [r`$9$`, r`$3t$`, r`$1$`, r`$3$`],
              3, r`$\gamma'(t) = (-3\sin t, 3\cos t)$ et $\|\gamma'(t)\| = \sqrt{9\sin^2 t + 9\cos^2 t} = \sqrt9 = 3$.`,
              r`Utilise $\sin^2 t + \cos^2 t = 1$.`)),
          step(4, 'methode', 'Longueur', 'Calculer la longueur d’un arc',
            r`La longueur de l’arc entre $t = a$ et $t = b$ vaut $L = \int_a^b \|\gamma'(t)\|\,dt$. Méthode : (1) dérive ; (2) calcule la norme et simplifie ; (3) intègre.`,
            qcm('lmd_srit_l1_geod_ch1_p1_ex4',
              r`Quelle est la longueur de l’arc $\gamma(t) = (4\cos t, 4\sin t)$ pour $t \in \left[0, \frac{\pi}{2}\right]$ ?`,
              [r`$2\pi$`, r`$4\pi$`, r`$8\pi$`, r`$\frac{\pi}{2}$`],
              0, r`La vitesse vaut $4$, donc $L = \int_0^{\pi/2} 4\,dt = 4\times\frac{\pi}{2} = 2\pi$ (un quart du périmètre $8\pi$).`,
              'La vitesse est constante : longueur = vitesse × durée.'),
            { formula: { name: 'Longueur', formula: r`L = \int_a^b \|\gamma'(t)\|\,dt` } }),
          step(5, 'exemple', 'Segment', 'La longueur d’un segment paramétré',
            r`La droite $\gamma(t) = (1 + 2t, -1 + t)$ a pour vecteur dérivé $(2, 1)$, constant : elle est parcourue à la vitesse $\sqrt{2^2 + 1^2} = \sqrt5$. Sur $[0, T]$, la longueur parcourue est $\sqrt5\,T$.`,
            qcm('lmd_srit_l1_geod_ch1_p1_ex5',
              r`Quelle est la longueur de l’arc $\gamma(t) = (1 + 2t, -1 + t)$ pour $t \in [0, 3]$ ?`,
              [r`$3$`, r`$9$`, r`$3\sqrt5$`, r`$\sqrt{15}$`],
              2, r`$\|\gamma'(t)\| = \|(2, 1)\| = \sqrt5$, donc $L = \int_0^3\sqrt5\,dt = 3\sqrt5$.`,
              'La vitesse est constante.')),
          step(6, 'piege', 'Graphe', 'Ne pas oublier le 1 sous la racine',
            r`Piège : pour une courbe $y = f(x)$, on prend $\gamma(x) = (x, f(x))$ et $\|\gamma'(x)\| = \sqrt{1 + f'(x)^2}$. Le « $1$ » vient de la dérivée de $x$ ; l’oublier donne un résultat faux.`,
            qcm('lmd_srit_l1_geod_ch1_p1_ex6',
              r`Quelle est la longueur de la courbe $y = \frac{2}{3}x^{3/2}$ pour $x \in [0, 3]$, avec $L = \int_0^3\sqrt{1 + f'(x)^2}\,dx$ ?`,
              [r`$\frac{14}{3}$`, r`$3$`, r`$2\sqrt3$`, r`$\frac{16}{3}$`],
              0, r`$f'(x) = \sqrt x$, donc $\sqrt{1 + f'(x)^2} = \sqrt{1 + x}$ et $L = \left[\frac23(1 + x)^{3/2}\right]_0^3 = \frac23(8 - 1) = \frac{14}{3}$.`,
              r`$(1 + 3)^{3/2} = 4^{3/2} = 8$.`)),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_geod_ch1_p2',
        order: 2,
        title: 'Abscisse curviligne et paramétrage normal',
        summary: 'Définition de l’abscisse curviligne, croissance, calcul pour la droite, le cercle et l’hélice, paramétrage par l’abscisse curviligne.',
        conceptExplanation: r`L’**abscisse curviligne** $s(t)$ mesure la distance parcourue sur la courbe depuis un point d’origine. Elle permet de reparamétrer la courbe « à vitesse 1 » : c’est le **paramétrage normal**, dans lequel les formules de courbure sont les plus simples.`,
        formulas: [
          { name: 'Abscisse curviligne', formula: r`s(t) = \int_{t_0}^{t}\|\gamma'(u)\|\,du \quad ; \quad s'(t) = \|\gamma'(t)\|` },
          { name: 'Paramétrage normal', formula: r`\left\|\frac{d\gamma}{ds}\right\| = 1` },
        ],
        keyRule: r`Pour un arc régulier, $s$ est strictement croissante : on peut exprimer $t$ en fonction de $s$.`,
        workedExample: {
          title: 'Paramétrer un cercle par l’abscisse curviligne',
          statement: r`Donne le paramétrage normal du cercle $\gamma(t) = (R\cos t, R\sin t)$, avec l’origine en $t = 0$.`,
          methodSteps: [
            r`$\|\gamma'(t)\| = R$, donc $s(t) = \int_0^t R\,du = Rt$.`,
            r`On inverse : $t = \frac{s}{R}$.`,
            r`$\tilde\gamma(s) = \left(R\cos\frac{s}{R}, R\sin\frac{s}{R}\right)$, pour $s \in [0, 2\pi R]$.`,
          ],
          conclusion: r`Paramétrage normal : $\left(R\cos\frac{s}{R}, R\sin\frac{s}{R}\right)$ ; $s(2\pi) = 2\pi R$ est le périmètre.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Abscisse curviligne', 'La distance parcourue',
            r`L’abscisse curviligne d’origine $t_0$ est $s(t) = \int_{t_0}^{t}\|\gamma'(u)\|\,du$. D’après le théorème fondamental de l’analyse, sa dérivée est la vitesse : $s'(t) = \|\gamma'(t)\|$.`,
            qcm('lmd_srit_l1_geod_ch1_p2_ex1',
              r`L’abscisse curviligne d’un arc $\gamma$ est définie par $s(t) = \int_{t_0}^{t}\|\gamma'(u)\|\,du$. Que vaut sa dérivée $s'(t)$ ?`,
              [r`$\gamma'(t)$`, r`$\|\gamma'(t)\|$`, r`$\|\gamma(t)\|$`, r`$\gamma''(t)$`],
              1, r`La dérivée d’une intégrale par rapport à sa borne supérieure est la fonction intégrée : $s'(t) = \|\gamma'(t)\|$, la vitesse (un nombre, pas un vecteur).`,
              'Théorème fondamental de l’analyse.')),
          step(2, 'propriete', 'Croissance', 'L’abscisse curviligne est croissante',
            r`Pour un arc **régulier**, $s'(t) = \|\gamma'(t)\| > 0$ : $s$ est strictement croissante, donc c’est une bijection. On peut alors exprimer $t$ en fonction de $s$ et reparamétrer la courbe par $s$.`,
            qcm('lmd_srit_l1_geod_ch1_p2_ex2',
              r`Pourquoi l’abscisse curviligne $s(t)$ d’un arc régulier est-elle strictement croissante ?`,
              [r`Parce que $\gamma(t)$ est croissante`, r`Parce que $s'(t) = \|\gamma'(t)\| > 0$ en tout point régulier`, r`Parce que $s(t_0) = 0$`, r`Parce que l’arc est fermé`],
              1, r`Sur un arc régulier, $\gamma'(t) \ne \vec 0$, donc $s'(t) = \|\gamma'(t)\| > 0$ : $s$ est strictement croissante.`,
              'Regarde le signe de la dérivée.')),
          step(3, 'methode', 'Droite', 'Abscisse curviligne d’une droite',
            r`Pour la droite $\gamma(t) = (1 + 2t, -1 + t)$, la vitesse est constante, égale à $\sqrt5$. Avec l’origine en $t = 0$ : $s(t) = \sqrt5\,t$, donc $t = \frac{s}{\sqrt5}$ et $\tilde\gamma(s) = \left(1 + \frac{2s}{\sqrt5}, -1 + \frac{s}{\sqrt5}\right)$.`,
            qcm('lmd_srit_l1_geod_ch1_p2_ex3',
              r`Quelle est l’abscisse curviligne $s(t)$ de la droite $\gamma(t) = (1 + 2t, -1 + t)$, avec l’origine en $t = 0$ ?`,
              [r`$s(t) = 3t$`, r`$s(t) = 5t$`, r`$s(t) = \sqrt3\,t$`, r`$s(t) = \sqrt5\,t$`],
              3, r`$\|\gamma'(t)\| = \|(2, 1)\| = \sqrt5$, donc $s(t) = \int_0^t\sqrt5\,du = \sqrt5\,t$.`,
              r`Calcule $\sqrt{2^2 + 1^2}$.`)),
          step(4, 'exemple', 'Cercle', 'Le cercle paramétré par s',
            r`Pour le cercle de rayon $R$ : $s(t) = Rt$, donc $t = \frac{s}{R}$ et $\tilde\gamma(s) = \left(R\cos\frac{s}{R}, R\sin\frac{s}{R}\right)$. La valeur $s(2\pi) = 2\pi R$ est le périmètre du cercle.`,
            qcm('lmd_srit_l1_geod_ch1_p2_ex4',
              r`Le cercle $\gamma(t) = (R\cos t, R\sin t)$ a pour abscisse curviligne $s(t) = Rt$. Quel est son paramétrage par l’abscisse curviligne $s$ ?`,
              [r`$(R\cos s, R\sin s)$`, r`$\left(R\cos\frac{s}{R}, R\sin\frac{s}{R}\right)$`, r`$(\cos Rs, \sin Rs)$`, r`$\left(\frac{\cos s}{R}, \frac{\sin s}{R}\right)$`],
              1, r`On remplace $t$ par $\frac{s}{R}$ : $\tilde\gamma(s) = \left(R\cos\frac{s}{R}, R\sin\frac{s}{R}\right)$. Sa vitesse vaut bien 1.`,
              r`Exprime $t$ en fonction de $s$.`)),
          step(5, 'methode', 'Hélice', 'Abscisse curviligne d’une hélice',
            r`Pour l’hélice $\gamma(t) = (a\cos t, a\sin t, bt)$ : $\gamma'(t) = (-a\sin t, a\cos t, b)$, de norme constante $\sqrt{a^2 + b^2}$. D’où $s(t) = \sqrt{a^2 + b^2}\;t$.`,
            qcm('lmd_srit_l1_geod_ch1_p2_ex5',
              r`On considère l’hélice $\gamma(t) = (3\cos t, 3\sin t, 4t)$. Quelle est son abscisse curviligne, avec l’origine en $t = 0$ ?`,
              [r`$s(t) = 7t$`, r`$s(t) = 5t$`, r`$s(t) = 25t$`, r`$s(t) = 3t$`],
              1, r`$\|\gamma'(t)\| = \sqrt{9\sin^2 t + 9\cos^2 t + 16} = \sqrt{25} = 5$, donc $s(t) = 5t$.`,
              r`$\sqrt{a^2 + b^2}$ avec $a = 3$ et $b = 4$.`)),
          step(6, 'piege', 'Paramétrage normal', 'Paramétrage normal = vitesse 1',
            r`Piège : un paramétrage n’est **normal** que si sa vitesse vaut exactement 1 en tout point. Le cercle unité $(\cos 2t, \sin 2t)$ décrit bien le cercle de rayon 1, mais il est parcouru à la vitesse 2 : ce n’est pas un paramétrage normal.`,
            qcm('lmd_srit_l1_geod_ch1_p2_ex6',
              r`Le paramétrage $\gamma(t) = (\cos 2t, \sin 2t)$ du cercle unité est-il un paramétrage normal ?`,
              ['Oui, car c’est le cercle de rayon 1', 'Non, car sa vitesse vaut 2', 'Oui, car sa vitesse est constante', 'Non, car il a des points singuliers'],
              1, r`$\gamma'(t) = (-2\sin 2t, 2\cos 2t)$ a pour norme $2$, pas $1$ : ce paramétrage n’est pas normal (le paramétrage normal est $(\cos s, \sin s)$).`,
              'Calcule la norme de la dérivée.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_geod_ch1_p3',
        order: 3,
        title: 'Courbure, formules de Frenet et centre de courbure',
        summary: 'Vecteurs T et N, courbure et rayon de courbure, formules pratiques en paramétrique et pour un graphe, centre de courbure, point d’inflexion.',
        conceptExplanation: r`La **courbure** $\kappa$ mesure à quelle vitesse la tangente tourne quand on avance sur la courbe : nulle pour une droite, égale à $\frac1R$ pour un cercle de rayon $R$. Son inverse est le **rayon de courbure** $R_c$ : c’est le rayon du **cercle osculateur**, le cercle qui épouse le mieux la courbe au point considéré, centré au **centre de courbure**.`,
        formulas: [
          { name: 'Courbure (paramétrique)', formula: r`\kappa(t) = \frac{|x'y'' - y'x''|}{\left(x'^2 + y'^2\right)^{3/2}} \quad ; \quad R_c = \frac{1}{\kappa}` },
          { name: 'Courbure d’un graphe', formula: r`\kappa(x) = \frac{|f''(x)|}{\left(1 + f'(x)^2\right)^{3/2}}` },
          { name: 'Formules de Frenet', formula: r`\frac{d\vec T}{ds} = \kappa\,\vec N \quad ; \quad \frac{d\vec N}{ds} = -\kappa\,\vec T` },
          { name: 'Centre de courbure', formula: r`C = M + R_c\,\vec N` },
        ],
        keyRule: r`Plus la courbure est grande, plus le rayon de courbure est petit : la courbe tourne serré.`,
        workedExample: {
          title: 'Courbure de la parabole au sommet',
          statement: r`Calcule la courbure, le rayon et le centre de courbure de $y = \frac{x^2}{2a}$ ($a > 0$) en $x = 0$.`,
          methodSteps: [
            r`$f'(x) = \frac{x}{a}$ et $f''(x) = \frac1a$ ; en $0$ : $f'(0) = 0$, $f''(0) = \frac1a$.`,
            r`$\kappa(0) = \frac{1/a}{(1 + 0)^{3/2}} = \frac1a$, donc $R_c = a$.`,
            r`$\vec N$ pointe vers le haut (concavité tournée vers le haut) : $C = (0, 0) + a\,(0, 1) = (0, a)$.`,
          ],
          conclusion: r`Au sommet : $\kappa = \frac1a$, $R_c = a$, centre de courbure $(0, a)$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Cercle osculateur au sommet d’une parabole', svgContent: SVG_OSCULATEUR },
        structuredSteps: [
          step(1, 'definition', 'Courbure', 'Mesurer comment la courbe tourne',
            r`Avec le paramétrage normal, $\vec T = \frac{dM}{ds}$ est le vecteur tangent unitaire. La **courbure** est $\kappa = \left\|\frac{d\vec T}{ds}\right\|$ : elle mesure la vitesse de rotation de la tangente par unité de longueur. Pour une droite, $\vec T$ ne change jamais : $\kappa = 0$.`,
            qcm('lmd_srit_l1_geod_ch1_p3_ex1',
              'Quelle est la courbure d’une droite en chacun de ses points ?',
              ['1', 'Elle est infinie', '0', 'Elle dépend du point'],
              2, r`Le vecteur tangent d’une droite est constant : $\frac{d\vec T}{ds} = \vec 0$, donc $\kappa = 0$ (et le rayon de courbure est infini).`,
              'La tangente d’une droite tourne-t-elle ?')),
          step(2, 'propriete', 'Cercle', 'La courbure d’un cercle',
            r`Un cercle de rayon $R$ a une courbure constante $\kappa = \frac1R$ : un petit cercle tourne plus serré qu’un grand. Le rayon de courbure $R_c = \frac1\kappa$ redonne le rayon $R$.`,
            qcm('lmd_srit_l1_geod_ch1_p3_ex2',
              r`Quelle est la courbure d’un cercle de rayon $R = 5$ ?`,
              [r`$5$`, r`$25$`, r`$0{,}2$`, r`$10\pi$`],
              2, r`$\kappa = \frac{1}{R} = \frac15 = 0{,}2$.`,
              'La courbure est l’inverse du rayon.')),
          step(3, 'methode', 'Formule paramétrique', 'Calculer la courbure d’un arc paramétré',
            r`Sans reparamétrer par $s$ : $\kappa(t) = \frac{|x'(t)y''(t) - y'(t)x''(t)|}{\left(x'(t)^2 + y'(t)^2\right)^{3/2}}$. Méthode : calcule $x'$, $y'$, $x''$, $y''$ au point voulu, puis applique la formule.`,
            qcm('lmd_srit_l1_geod_ch1_p3_ex3',
              r`On considère l’arc $\gamma(t) = \left(t, \frac{t^2}{2}\right)$. Quelle est sa courbure en $t = 0$, avec $\kappa = \frac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}$ ?`,
              [r`$0$`, r`$\frac12$`, r`$2$`, r`$1$`],
              3, r`En $t = 0$ : $x' = 1$, $y' = 0$, $x'' = 0$, $y'' = 1$. $\kappa = \frac{|1\times1 - 0\times0|}{(1 + 0)^{3/2}} = 1$.`,
              r`Calcule $x'$, $y'$, $x''$, $y''$ en $t = 0$.`),
            { formula: { name: 'Courbure paramétrique', formula: r`\kappa = \frac{|x'y'' - y'x''|}{(x'^2 + y'^2)^{3/2}}` } }),
          step(4, 'methode', 'Graphe', 'Courbure d’une courbe y = f(x)',
            r`En prenant $x$ comme paramètre ($x' = 1$, $x'' = 0$), la formule devient $\kappa(x) = \frac{|f''(x)|}{\left(1 + f'(x)^2\right)^{3/2}}$, et $R_c(x) = \frac{1}{\kappa(x)}$.`,
            qcm('lmd_srit_l1_geod_ch1_p3_ex4',
              r`On considère la parabole $y = \frac{x^2}{2a}$ avec $a = 2$. Quel est son rayon de courbure en $x = 0$, sachant que $\kappa(x) = \frac{|f''(x)|}{(1 + f'(x)^2)^{3/2}}$ ?`,
              [r`$2$`, r`$\frac12$`, r`$4$`, r`$1$`],
              0, r`$f'(x) = \frac{x}{2}$, $f''(x) = \frac12$. En $0$ : $\kappa = \frac{1/2}{1} = \frac12$, donc $R_c = 2 = a$.`,
              r`$f''(x) = \frac1a$.`)),
          step(5, 'exemple', 'Frenet', 'Formules de Frenet et centre de courbure',
            r`Le repère de Frenet $(\vec T, \vec N)$ vérifie $\frac{d\vec T}{ds} = \kappa\vec N$ et $\frac{d\vec N}{ds} = -\kappa\vec T$. Le **centre de courbure** est $C = M + R_c\vec N$, du côté où la courbe tourne. Pour un graphe : $C = \left(x - \frac{f'(1 + f'^2)}{f''},\; y + \frac{1 + f'^2}{f''}\right)$.`,
            qcm('lmd_srit_l1_geod_ch1_p3_ex5',
              r`Pour la parabole $y = \frac{x^2}{4}$ (soit $f'(x) = \frac{x}{2}$, $f''(x) = \frac12$), quel est le centre de courbure au point $(0, 0)$, avec $C = \left(x - \frac{f'(1 + f'^2)}{f''},\; y + \frac{1 + f'^2}{f''}\right)$ ?`,
              [r`$(0, 0)$`, r`$(0, 2)$`, r`$(0, -2)$`, r`$(2, 0)$`],
              1, r`En $x = 0$ : $f' = 0$, $f'' = \frac12$. $C = \left(0 - 0,\; 0 + \frac{1}{1/2}\right) = (0, 2)$ : à la distance $R_c = 2$ au-dessus du sommet.`,
              r`En $x = 0$, $f'(0) = 0$.`)),
          step(6, 'piege', 'Inflexion', 'Courbure nulle ne veut pas dire droite',
            r`Piège : la courbure peut s’annuler en un point isolé sans que la courbe soit une droite. C’est le cas d’un **point d’inflexion**, où la concavité change : $f''$ change de signe et $\kappa = 0$ en ce point.`,
            qcm('lmd_srit_l1_geod_ch1_p3_ex6',
              r`On considère la courbe $y = \frac{x^3}{3}$. Que vaut sa courbure en $x = 0$, et que se passe-t-il en ce point ?`,
              [r`$\kappa(0) = 1$ : c’est un sommet`, r`$\kappa(0) = 0$ : c’est un point d’inflexion`, r`$\kappa(0)$ est infinie : c’est un point singulier`, r`$\kappa(0) = \frac13$ : rien de particulier`],
              1, r`$f''(x) = 2x$ s’annule en $0$ en changeant de signe : $\kappa(0) = 0$ et la concavité change, c’est un point d’inflexion (la courbe n’est pas une droite pour autant).`,
              r`Calcule $f''(0)$ et regarde son signe autour de 0.`)),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : CHAMPS DE VECTEURS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_geod_ch2',
    subjectId: 'lmd_geometrie_diff',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: SOURCE,
    title: 'Champs de vecteurs',
    summary: 'Champs de vecteurs, gradient, divergence, rotationnel, laplacien ; champs conservatifs, théorèmes de Schwarz et de Poincaré, potentiel, circulation.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_geod_ch2_p1',
        order: 1,
        title: 'Gradient, divergence et rotationnel',
        summary: 'Champ de vecteurs, gradient d’une fonction, divergence et rotationnel d’un champ, laplacien, identités fondamentales.',
        conceptExplanation: r`Un **champ de vecteurs** associe un vecteur à chaque point (vitesse d’un fluide, force électrique). Trois opérateurs différentiels le décrivent : le **gradient** d’une fonction (direction de plus forte croissance), la **divergence** d’un champ (le champ « sort » ou « rentre » en un point) et le **rotationnel** (le champ « tourne » autour d’un point).`,
        formulas: [
          { name: 'Gradient', formula: r`\overrightarrow{\text{grad}}\,f = \nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z}\right)` },
          { name: 'Divergence', formula: r`\text{div}\,\vec V = \frac{\partial V_1}{\partial x} + \frac{\partial V_2}{\partial y} + \frac{\partial V_3}{\partial z}` },
          { name: 'Rotationnel', formula: r`\overrightarrow{\text{rot}}\,\vec V = \left(\frac{\partial V_3}{\partial y} - \frac{\partial V_2}{\partial z},\; \frac{\partial V_1}{\partial z} - \frac{\partial V_3}{\partial x},\; \frac{\partial V_2}{\partial x} - \frac{\partial V_1}{\partial y}\right)` },
          { name: 'Laplacien', formula: r`\Delta f = \text{div}(\overrightarrow{\text{grad}}\,f) = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}` },
        ],
        keyRule: r`Le gradient transforme une fonction en champ ; la divergence transforme un champ en fonction ; le rotationnel transforme un champ en champ.`,
        workedExample: {
          title: 'Le champ tournant',
          statement: r`Calcule la divergence et le rotationnel de $\vec V(x, y, z) = (-y, x, 0)$.`,
          methodSteps: [
            r`$\text{div}\,\vec V = \frac{\partial(-y)}{\partial x} + \frac{\partial x}{\partial y} + 0 = 0$.`,
            r`$\overrightarrow{\text{rot}}\,\vec V = \left(0 - 0,\; 0 - 0,\; \frac{\partial x}{\partial x} - \frac{\partial(-y)}{\partial y}\right) = (0, 0, 2)$.`,
          ],
          conclusion: r`Divergence nulle (rien ne sort ni ne rentre), rotationnel $2\vec k$ : le champ tourne autour de l’axe $Oz$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Le champ tournant V(x, y) = (−y, x)', svgContent: SVG_CHAMP },
        structuredSteps: [
          step(1, 'definition', 'Champ', 'Un vecteur en chaque point',
            r`Un champ de vecteurs sur un ouvert $U$ de $\mathbb R^2$ est une application $\vec V : (x, y) \mapsto (V_1(x, y), V_2(x, y))$. On le représente en dessinant, en plusieurs points, le vecteur correspondant.`,
            qcm('lmd_srit_l1_geod_ch2_p1_ex1',
              r`On considère le champ de vecteurs $\vec V(x, y) = (-y, x)$. Quel vecteur associe-t-il au point $(1, 2)$ ?`,
              [r`$(-1, 2)$`, r`$(2, -1)$`, r`$(-2, 1)$`, r`$(1, 2)$`],
              2, r`$\vec V(1, 2) = (-2, 1)$ : la première composante est $-y = -2$, la seconde $x = 1$.`,
              r`Remplace $x$ par 1 et $y$ par 2.`)),
          step(2, 'methode', 'Gradient', 'Le gradient d’une fonction',
            r`Le gradient de $f(x, y, z)$ est le vecteur de ses dérivées partielles : $\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z}\right)$. Il pointe dans la direction où $f$ augmente le plus vite et il est perpendiculaire aux lignes de niveau.`,
            qcm('lmd_srit_l1_geod_ch2_p1_ex2',
              r`Soit $f(x, y, z) = x^2y + z$. Que vaut $\nabla f$ au point $(1, 2, 0)$ ?`,
              [r`$(2, 1, 0)$`, r`$(4, 1, 1)$`, r`$(4, 2, 1)$`, r`$(2, 2, 1)$`],
              1, r`$\nabla f = (2xy,\; x^2,\; 1)$. Au point $(1, 2, 0)$ : $(2\times1\times2,\; 1,\; 1) = (4, 1, 1)$.`,
              r`$\frac{\partial}{\partial x}(x^2y) = 2xy$.`)),
          step(3, 'methode', 'Divergence', 'La divergence d’un champ',
            r`La divergence est une **fonction** (un nombre en chaque point) : $\text{div}\,\vec V = \frac{\partial V_1}{\partial x} + \frac{\partial V_2}{\partial y} + \frac{\partial V_3}{\partial z}$. Positive : le champ « sort » du point (source) ; négative : il y « rentre » (puits).`,
            qcm('lmd_srit_l1_geod_ch2_p1_ex3',
              r`Soit $\vec V(x, y, z) = (x^2, xy, z)$. Que vaut $\text{div}\,\vec V$ au point $(1, 0, 0)$ ?`,
              [r`$3$`, r`$2$`, r`$(2, 1, 1)$`, r`$4$`],
              3, r`$\text{div}\,\vec V = 2x + x + 1 = 3x + 1$, qui vaut $4$ au point $(1, 0, 0)$.`,
              r`$\frac{\partial}{\partial y}(xy) = x$.`),
            { formula: { name: 'Divergence', formula: r`\text{div}\,\vec V = \partial_x V_1 + \partial_y V_2 + \partial_z V_3` } }),
          step(4, 'methode', 'Rotationnel', 'Le rotationnel d’un champ',
            r`Le rotationnel est un **vecteur** : $\overrightarrow{\text{rot}}\,\vec V = \left(\partial_y V_3 - \partial_z V_2,\; \partial_z V_1 - \partial_x V_3,\; \partial_x V_2 - \partial_y V_1\right)$. Il mesure la tendance du champ à tourner : un petit moulin placé dans un fluide tourne si le rotationnel est non nul.`,
            qcm('lmd_srit_l1_geod_ch2_p1_ex4',
              r`Que vaut le rotationnel du champ $\vec V(x, y, z) = (-y, x, 0)$ ?`,
              [r`$(0, 0, 0)$`, r`$(0, 0, 2)$`, r`$(0, 0, -2)$`, r`$(1, 1, 0)$`],
              1, r`Les deux premières composantes sont nulles ($V_3 = 0$ et rien ne dépend de $z$). Troisième : $\partial_x V_2 - \partial_y V_1 = 1 - (-1) = 2$. Donc $(0, 0, 2)$.`,
              r`Troisième composante : $\partial_x V_2 - \partial_y V_1$.`)),
          step(5, 'exemple', 'Laplacien', 'Le laplacien',
            r`Le **laplacien** d’une fonction est la divergence de son gradient : $\Delta f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} + \frac{\partial^2 f}{\partial z^2}$. Il apparaît dans l’équation de la chaleur et en électrostatique (équation de Poisson).`,
            qcm('lmd_srit_l1_geod_ch2_p1_ex5',
              r`Que vaut le laplacien de $f(x, y, z) = x^2 + y^2 + z^2$ ?`,
              [r`$2$`, r`$(2x, 2y, 2z)$`, r`$0$`, r`$6$`],
              3, r`$\frac{\partial^2 f}{\partial x^2} = 2$, de même pour $y$ et $z$ : $\Delta f = 2 + 2 + 2 = 6$.`,
              'Dérive deux fois chaque terme.')),
          step(6, 'piege', 'Identités', 'Deux identités à connaître',
            r`Piège de calcul évité avec deux identités, vraies pour des fonctions $C^2$ : $\overrightarrow{\text{rot}}(\overrightarrow{\text{grad}}\,f) = \vec 0$ (un gradient ne tourne jamais) et $\text{div}(\overrightarrow{\text{rot}}\,\vec V) = 0$. Inutile de refaire le calcul !`,
            qcm('lmd_srit_l1_geod_ch2_p1_ex6',
              r`Soit $f(x, y, z) = x^3y^2 e^{z}$ une fonction de classe $C^2$. Que vaut $\overrightarrow{\text{rot}}(\overrightarrow{\text{grad}}\,f)$ ?`,
              [r`$(3x^2y^2e^z, 2x^3ye^z, x^3y^2e^z)$`, r`$\vec 0$`, r`$\Delta f$`, 'Il faut calculer les dérivées secondes pour le savoir'],
              1, r`Pour toute fonction de classe $C^2$, $\overrightarrow{\text{rot}}(\overrightarrow{\text{grad}}\,f) = \vec 0$ (les dérivées croisées sont égales, théorème de Schwarz).`,
              'Un gradient ne tourne pas.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_geod_ch2_p2',
        order: 2,
        title: 'Champs conservatifs et circulation',
        summary: 'Champ de gradients et potentiel, critère de Schwarz, théorème de Poincaré, calcul d’un potentiel, circulation le long d’une courbe.',
        conceptExplanation: r`Un champ est **conservatif** (champ de gradients) s’il dérive d’un **potentiel** : $\vec V = \nabla f$. On le reconnaît grâce aux dérivées croisées (Schwarz), à condition que le domaine n’ait pas de « trou » (Poincaré). Pour un tel champ, la **circulation** entre deux points ne dépend pas du chemin : elle vaut $f(B) - f(A)$.`,
        formulas: [
          { name: 'Critère dans le plan', formula: r`\vec V = (V_1, V_2) \text{ conservatif} \Rightarrow \frac{\partial V_1}{\partial y} = \frac{\partial V_2}{\partial x}` },
          { name: 'Circulation', formula: r`\int_\Gamma \vec V\cdot d\vec r = \int_a^b \vec V(\gamma(t))\cdot\gamma'(t)\,dt` },
          { name: 'Champ de gradients', formula: r`\vec V = \nabla f \Rightarrow \int_A^B \vec V\cdot d\vec r = f(B) - f(A)` },
        ],
        keyRule: 'Schwarz donne une condition nécessaire ; sur un ouvert étoilé (sans trou), Poincaré dit qu’elle est aussi suffisante.',
        workedExample: {
          title: 'Trouver un potentiel',
          statement: r`Montre que $\vec F(x, y) = (3x^2y + 3,\; x^3)$ est conservatif et trouve un potentiel.`,
          methodSteps: [
            r`$\frac{\partial F_1}{\partial y} = 3x^2$ et $\frac{\partial F_2}{\partial x} = 3x^2$ : égales, et $\mathbb R^2$ est étoilé, donc $\vec F$ est conservatif.`,
            r`On cherche $f$ avec $\frac{\partial f}{\partial x} = 3x^2y + 3$ : $f = x^3y + 3x + g(y)$.`,
            r`$\frac{\partial f}{\partial y} = x^3 + g'(y) = x^3$, donc $g'(y) = 0$ et $g$ est constante.`,
          ],
          conclusion: r`$f(x, y) = x^3y + 3x + C$.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Potentiel', 'Champ de gradients et potentiel',
            r`Un champ $\vec V$ est **conservatif** s’il existe une fonction $f$ (un **potentiel**) telle que $\vec V = \nabla f$. Le potentiel est défini à une constante près. En physique, on écrit souvent $\vec F = -\nabla E_p$.`,
            qcm('lmd_srit_l1_geod_ch2_p2_ex1',
              r`Le champ $\vec V(x, y) = (2x, 2y)$ dérive d’un potentiel. Lequel ?`,
              [r`$f(x, y) = x^2 + y^2$`, r`$f(x, y) = 2x + 2y$`, r`$f(x, y) = 2xy$`, r`$f(x, y) = x^2y^2$`],
              0, r`$\nabla(x^2 + y^2) = (2x, 2y) = \vec V$. (Le gradient de $2xy$ serait $(2y, 2x)$.)`,
              'Calcule le gradient de chaque proposition.')),
          step(2, 'propriete', 'Schwarz', 'Le critère des dérivées croisées',
            r`Si $\vec V = \nabla f$ avec $f$ de classe $C^2$, alors $\frac{\partial V_1}{\partial y} = \frac{\partial^2 f}{\partial y\,\partial x} = \frac{\partial^2 f}{\partial x\,\partial y} = \frac{\partial V_2}{\partial x}$ (théorème de Schwarz). Si ces dérivées croisées sont différentes, le champ n’est **pas** conservatif.`,
            qcm('lmd_srit_l1_geod_ch2_p2_ex2',
              r`On considère le champ $\vec F(x, y) = (3x^2y + 3,\; x^3)$ défini sur $\mathbb R^2$. Que donne le critère des dérivées croisées ?`,
              [r`$\frac{\partial F_1}{\partial y} = 3x^2 = \frac{\partial F_2}{\partial x}$ : le champ est conservatif`, r`$\frac{\partial F_1}{\partial y} = 6xy \ne 3x^2$ : il n’est pas conservatif`, r`$\frac{\partial F_1}{\partial y} = 3 \ne 3x^2$ : il n’est pas conservatif`, 'Le critère ne s’applique pas dans le plan'],
              0, r`$\frac{\partial}{\partial y}(3x^2y + 3) = 3x^2$ et $\frac{\partial}{\partial x}(x^3) = 3x^2$ : égales sur $\mathbb R^2$, qui est étoilé, donc le champ est conservatif.`,
              r`Dérive $F_1$ par rapport à $y$ seulement.`)),
          step(3, 'methode', 'Calcul du potentiel', 'Trouver le potentiel',
            r`Méthode : (1) intègre $V_1$ par rapport à $x$ : $f = \int V_1\,dx + g(y)$ ; (2) dérive ce résultat par rapport à $y$ et identifie avec $V_2$ pour trouver $g'(y)$ ; (3) intègre $g'$.`,
            qcm('lmd_srit_l1_geod_ch2_p2_ex3',
              r`Quel est un potentiel du champ conservatif $\vec F(x, y) = (3x^2y + 3,\; x^3)$ ?`,
              [r`$f(x, y) = 6xy$`, r`$f(x, y) = x^3y + 3x$`, r`$f(x, y) = x^3 + 3y$`, r`$f(x, y) = 3x^2y + x^3$`],
              1, r`$\frac{\partial}{\partial x}(x^3y + 3x) = 3x^2y + 3$ et $\frac{\partial}{\partial y}(x^3y + 3x) = x^3$ : c’est bien un potentiel (à une constante près).`,
              'Vérifie en dérivant chaque proposition.')),
          step(4, 'methode', 'Circulation', 'Calculer une circulation',
            r`La circulation de $\vec V$ le long de la courbe $\Gamma$ paramétrée par $\gamma(t)$, $t \in [a, b]$, est $\int_a^b \vec V(\gamma(t))\cdot\gamma'(t)\,dt$. En physique, c’est le **travail** d’une force le long d’un chemin.`,
            qcm('lmd_srit_l1_geod_ch2_p2_ex4',
              r`Quelle est la circulation du champ $\vec V(x, y) = (-y, x)$ le long du cercle unité $\gamma(t) = (\cos t, \sin t)$, $t \in [0, 2\pi]$ ?`,
              [r`$0$`, r`$\pi$`, r`$2\pi$`, r`$4\pi$`],
              2, r`$\vec V(\gamma(t)) = (-\sin t, \cos t)$ et $\gamma'(t) = (-\sin t, \cos t)$ : leur produit scalaire vaut $\sin^2 t + \cos^2 t = 1$. Circulation : $\int_0^{2\pi}1\,dt = 2\pi$.`,
              r`Calcule $\vec V(\gamma(t))\cdot\gamma'(t)$.`),
            { formula: { name: 'Circulation', formula: r`\int_\Gamma \vec V\cdot d\vec r = \int_a^b \vec V(\gamma(t))\cdot\gamma'(t)\,dt` } }),
          step(5, 'exemple', 'Indépendance du chemin', 'Circulation d’un champ de gradients',
            r`Si $\vec V = \nabla f$, la circulation de A à B vaut $f(B) - f(A)$, **quel que soit le chemin** suivi. En particulier, sur un chemin fermé, elle est nulle. Inutile de paramétrer la courbe.`,
            qcm('lmd_srit_l1_geod_ch2_p2_ex5',
              r`Le champ $\vec V$ est le gradient de $f(x, y) = x^2y$. Quelle est sa circulation de $A(0, 0)$ à $B(1, 2)$, le long d’une courbe quelconque ?`,
              [r`$2$`, r`$1$`, r`$4$`, 'Elle dépend de la courbe choisie'],
              0, r`Circulation $= f(B) - f(A) = 1^2\times2 - 0 = 2$, quel que soit le chemin.`,
              r`Calcule $f(1, 2) - f(0, 0)$.`)),
          step(6, 'piege', 'Domaine troué', 'Le théorème de Poincaré exige un domaine sans trou',
            r`Piège : le champ $\vec V = \left(\frac{-y}{x^2 + y^2}, \frac{x}{x^2 + y^2}\right)$, défini sur le plan **privé de l’origine**, vérifie le critère des dérivées croisées, mais sa circulation sur le cercle unité vaut $2\pi \ne 0$. Il n’est donc pas conservatif : le domaine a un trou, Poincaré ne s’applique pas.`,
            qcm('lmd_srit_l1_geod_ch2_p2_ex6',
              r`Le champ $\vec V = \left(\frac{-y}{x^2 + y^2}, \frac{x}{x^2 + y^2}\right)$ est défini sur $\mathbb R^2$ privé de l’origine ; ses dérivées croisées sont égales, mais sa circulation sur le cercle unité vaut $2\pi$. Est-il conservatif sur ce domaine ?`,
              ['Oui, car les dérivées croisées sont égales', 'Non : sa circulation sur une courbe fermée n’est pas nulle (le domaine a un trou en O)', 'Oui, car il est défini presque partout', 'On ne peut pas conclure'],
              1, r`Un champ conservatif aurait une circulation nulle sur toute courbe fermée. Ici elle vaut $2\pi$ : le champ n’est pas conservatif. Le critère de Schwarz ne suffit pas car le domaine n’est pas étoilé.`,
              'Que vaut la circulation d’un champ de gradients sur une courbe fermée ?')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : INTÉGRALES DOUBLES
  // ==========================================================================
  {
    id: 'lmd_srit_l1_geod_ch3',
    subjectId: 'lmd_geometrie_diff',
    gradeLevel: 'lmd_srit_l1',
    semesters: [1],
    order: 3,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: SOURCE,
    title: 'Intégrales doubles',
    summary: 'Intégrale double, aire d’un domaine, théorème de Fubini sur un rectangle et sur un domaine entre deux courbes, changement de variables, coordonnées polaires, intégrale de Gauss.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_geod_ch3_p1',
        order: 1,
        title: 'Intégrales doubles et théorème de Fubini',
        summary: 'Définition et interprétation, aire d’un domaine, Fubini sur un rectangle, domaine compris entre deux courbes, inversion de l’ordre d’intégration.',
        conceptExplanation: r`L’intégrale double $\iint_D f(x, y)\,dx\,dy$ additionne les valeurs de $f$ sur un domaine $D$ du plan : c’est le **volume** sous la surface $z = f(x, y)$. Avec $f = 1$, on obtient l’**aire** de $D$. Le **théorème de Fubini** ramène son calcul à deux intégrales simples successives.`,
        formulas: [
          { name: 'Fubini sur un rectangle', formula: r`\iint_{[a,b]\times[c,d]} f(x, y)\,dx\,dy = \int_a^b\left(\int_c^d f(x, y)\,dy\right)dx` },
          { name: 'Domaine entre deux courbes', formula: r`D = \{a \le x \le b,\; \varphi_1(x) \le y \le \varphi_2(x)\} \Rightarrow \iint_D f = \int_a^b\int_{\varphi_1(x)}^{\varphi_2(x)} f(x, y)\,dy\,dx` },
          { name: 'Aire', formula: r`\mathcal A(D) = \iint_D dx\,dy` },
        ],
        keyRule: 'On intègre d’abord par rapport à la variable intérieure, en traitant l’autre comme une constante ; les bornes intérieures peuvent dépendre de la variable extérieure.',
        workedExample: {
          title: 'Aire entre deux courbes',
          statement: r`Calcule l’aire du domaine $D$ délimité par les courbes $y = x$ et $y^2 = x$.`,
          methodSteps: [
            r`Les courbes se coupent en $(0, 0)$ et $(1, 1)$ ; pour $0 \le x \le 1$, on a $x \le \sqrt x$.`,
            r`$D = \{0 \le x \le 1,\; x \le y \le \sqrt x\}$.`,
            r`$\mathcal A = \int_0^1(\sqrt x - x)\,dx = \left[\frac23x^{3/2} - \frac{x^2}{2}\right]_0^1 = \frac23 - \frac12 = \frac16$.`,
          ],
          conclusion: r`$\mathcal A(D) = \frac16$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Domaine entre y = x et y = √x', svgContent: SVG_DOMAINE },
        structuredSteps: [
          step(1, 'definition', 'Aire', 'L’intégrale double de 1 est une aire',
            r`Pour $f(x, y) = 1$, l’intégrale double $\iint_D dx\,dy$ est l’**aire** du domaine $D$. Pour une fonction positive, $\iint_D f\,dx\,dy$ est le volume du solide compris entre $D$ et la surface $z = f(x, y)$.`,
            qcm('lmd_srit_l1_geod_ch3_p1_ex1',
              r`Que vaut $\iint_D dx\,dy$ pour le rectangle $D = [0, 2]\times[0, 3]$ ?`,
              [r`$5$`, r`$6$`, r`$12$`, r`$\frac32$`],
              1, r`C’est l’aire du rectangle : $2\times3 = 6$. Par Fubini : $\int_0^2\int_0^3 dy\,dx = \int_0^2 3\,dx = 6$.`,
              'Intégrer 1 donne une aire.')),
          step(2, 'methode', 'Rectangle', 'Fubini sur un rectangle',
            r`Sur un rectangle, les bornes sont constantes et l’ordre importe peu. Si de plus $f(x, y) = g(x)\,h(y)$, l’intégrale se sépare : $\iint g(x)h(y)\,dx\,dy = \left(\int g\right)\left(\int h\right)$.`,
            qcm('lmd_srit_l1_geod_ch3_p1_ex2',
              r`Que vaut $\iint_{[0,1]\times[0,2]} xy\,dx\,dy$ ?`,
              [r`$2$`, r`$\frac12$`, r`$1$`, r`$4$`],
              2, r`$\left(\int_0^1 x\,dx\right)\left(\int_0^2 y\,dy\right) = \frac12\times\frac{4}{2} = \frac12\times2 = 1$.`,
              'Les variables se séparent.')),
          step(3, 'methode', 'Entre deux courbes', 'Domaine compris entre deux courbes',
            r`Méthode : (1) trouve les points d’intersection des courbes ; (2) repère la courbe du bas $\varphi_1$ et celle du haut $\varphi_2$ ; (3) écris $D = \{a \le x \le b,\; \varphi_1(x) \le y \le \varphi_2(x)\}$ ; (4) intègre d’abord en $y$.`,
            qcm('lmd_srit_l1_geod_ch3_p1_ex3',
              r`Le domaine $D$ est délimité par les courbes $y = x$ et $y^2 = x$ (soit $D = \{0 \le x \le 1,\; x \le y \le \sqrt x\}$). Quelle est son aire $\int_0^1(\sqrt x - x)\,dx$ ?`,
              [r`$\frac16$`, r`$\frac12$`, r`$\frac13$`, r`$\frac23$`],
              0, r`$\int_0^1\sqrt x\,dx = \frac23$ et $\int_0^1 x\,dx = \frac12$, donc l’aire vaut $\frac23 - \frac12 = \frac16$.`,
              r`$\int_0^1 x^{1/2}\,dx = \frac23$.`),
            { formula: { name: 'Domaine vertical', formula: r`\iint_D f = \int_a^b\int_{\varphi_1(x)}^{\varphi_2(x)} f(x, y)\,dy\,dx` } }),
          step(4, 'methode', 'Triangle', 'Intégrer sur un triangle',
            r`Le triangle de sommets $(0, 0)$, $(1, 0)$ et $(1, 1)$ s’écrit $D = \{0 \le x \le 1,\; 0 \le y \le x\}$. On intègre d’abord en $y$ (de $0$ à $x$), puis en $x$.`,
            qcm('lmd_srit_l1_geod_ch3_p1_ex4',
              r`Que vaut $\iint_D x\,dx\,dy$ sur le triangle $D = \{0 \le x \le 1,\; 0 \le y \le x\}$ ?`,
              [r`$\frac12$`, r`$\frac16$`, r`$1$`, r`$\frac13$`],
              3, r`$\int_0^1\left(\int_0^x x\,dy\right)dx = \int_0^1 x\cdot x\,dx = \int_0^1 x^2\,dx = \frac13$.`,
              r`À $x$ fixé, $\int_0^x x\,dy = x^2$.`)),
          step(5, 'exemple', 'Entre deux puissances', 'Un calcul complet',
            r`Sur $[0, 1]$, on a $x^3 \le x^2$. Le domaine délimité par $y = x^2$ et $y = x^3$ est donc $D = \{0 \le x \le 1,\; x^3 \le y \le x^2\}$.`,
            qcm('lmd_srit_l1_geod_ch3_p1_ex5',
              r`Que vaut $\iint_D xy\,dx\,dy$ sur le domaine $D = \{0 \le x \le 1,\; x^3 \le y \le x^2\}$ délimité par $y = x^2$ et $y = x^3$ ?`,
              [r`$\frac{1}{24}$`, r`$\frac{1}{12}$`, r`$\frac{1}{48}$`, r`$\frac{1}{6}$`],
              2, r`$\int_0^1 x\left[\frac{y^2}{2}\right]_{x^3}^{x^2}dx = \frac12\int_0^1(x^5 - x^7)\,dx = \frac12\left(\frac16 - \frac18\right) = \frac12\times\frac{1}{24} = \frac{1}{48}$.`,
              r`$\frac16 - \frac18 = \frac{1}{24}$.`)),
          step(6, 'piege', 'Ordre', 'Inverser l’ordre d’intégration change les bornes',
            r`Piège : sur un domaine non rectangulaire, on ne peut pas simplement échanger $dx$ et $dy$. Il faut **redécrire** le domaine : pour $D = \{0 \le x \le 1,\; 0 \le y \le x\}$, à $y$ fixé entre 0 et 1, $x$ varie de $y$ à $1$.`,
            qcm('lmd_srit_l1_geod_ch3_p1_ex6',
              r`Le domaine $D = \{0 \le x \le 1,\; 0 \le y \le x\}$ est décrit en intégrant d’abord en $y$. Comment le décrire si l’on intègre d’abord en $x$ ?`,
              [r`$\{0 \le y \le 1,\; 0 \le x \le y\}$`, r`$\{0 \le y \le x,\; 0 \le x \le 1\}$`, r`$\{0 \le y \le 1,\; y \le x \le 1\}$`, r`$\{0 \le y \le 1,\; 0 \le x \le 1\}$`],
              2, r`À $y$ fixé dans $[0, 1]$, la condition $y \le x \le 1$ décrit le triangle. Les bornes extérieures doivent être des constantes.`,
              'Fais un dessin du triangle et trace une ligne horizontale.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_geod_ch3_p2',
        order: 2,
        title: 'Changement de variables et coordonnées polaires',
        summary: 'Jacobien, passage en coordonnées polaires, aire du disque, intégrales sur un disque ou un quart de disque, intégrale de Gauss.',
        conceptExplanation: r`Quand le domaine est un disque ou une portion de disque, les **coordonnées polaires** $x = \rho\cos\theta$, $y = \rho\sin\theta$ simplifient tout : les bornes deviennent constantes. Mais l’élément d’aire change : $dx\,dy = \rho\,d\rho\,d\theta$, où $\rho$ est la valeur absolue du **jacobien** du changement de variables.`,
        formulas: [
          { name: 'Changement de variables', formula: r`\iint_D f(x, y)\,dx\,dy = \iint_\Delta f(x(u, v), y(u, v))\,|J|\,du\,dv` },
          { name: 'Coordonnées polaires', formula: r`x = \rho\cos\theta,\; y = \rho\sin\theta \quad ; \quad dx\,dy = \rho\,d\rho\,d\theta` },
          { name: 'Intégrale de Gauss', formula: r`\int_0^{+\infty} e^{-x^2}\,dx = \frac{\sqrt\pi}{2}` },
        ],
        keyRule: r`En polaires, ne jamais oublier le facteur $\rho$ dans l’élément d’aire.`,
        workedExample: {
          title: 'Intégrale sur un quart de disque',
          statement: r`Calcule $I = \iint_D (4 - x^2 - y^2)\,dx\,dy$ où $D = \{x \ge 0,\; y \ge 0,\; x^2 + y^2 \le 1\}$.`,
          methodSteps: [
            r`En polaires : $0 \le \rho \le 1$, $0 \le \theta \le \frac\pi2$, et $4 - x^2 - y^2 = 4 - \rho^2$.`,
            r`$I = \int_0^{\pi/2}\int_0^1(4 - \rho^2)\,\rho\,d\rho\,d\theta = \frac\pi2\left[2\rho^2 - \frac{\rho^4}{4}\right]_0^1$.`,
            r`$I = \frac\pi2\left(2 - \frac14\right) = \frac\pi2\times\frac74 = \frac{7\pi}{8}$.`,
          ],
          conclusion: r`$I = \frac{7\pi}{8}$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Élément de surface en coordonnées polaires', svgContent: SVG_POLAIRE },
        structuredSteps: [
          step(1, 'definition', 'Jacobien', 'Le jacobien des coordonnées polaires',
            r`Le jacobien est le déterminant des dérivées partielles du changement de variables. Pour $x = \rho\cos\theta$, $y = \rho\sin\theta$ : $J = \begin{vmatrix}\cos\theta & -\rho\sin\theta \\ \sin\theta & \rho\cos\theta\end{vmatrix} = \rho$. D’où $dx\,dy = \rho\,d\rho\,d\theta$.`,
            qcm('lmd_srit_l1_geod_ch3_p2_ex1',
              r`Quel est le jacobien du passage en coordonnées polaires $x = \rho\cos\theta$, $y = \rho\sin\theta$ ?`,
              [r`$1$`, r`$\rho^2$`, r`$\rho$`, r`$\cos\theta\sin\theta$`],
              2, r`$J = \cos\theta\times\rho\cos\theta - (-\rho\sin\theta)\times\sin\theta = \rho(\cos^2\theta + \sin^2\theta) = \rho$.`,
              r`Calcule le déterminant et utilise $\cos^2 + \sin^2 = 1$.`)),
          step(2, 'methode', 'Disque', 'L’aire d’un disque en polaires',
            r`Le disque de rayon $R$ centré en O devient le rectangle $0 \le \rho \le R$, $0 \le \theta \le 2\pi$. Son aire vaut $\int_0^{2\pi}\int_0^R\rho\,d\rho\,d\theta = 2\pi\times\frac{R^2}{2} = \pi R^2$.`,
            qcm('lmd_srit_l1_geod_ch3_p2_ex2',
              r`En coordonnées polaires, quelle est l’aire du disque de rayon $3$, calculée par $\int_0^{2\pi}\int_0^3\rho\,d\rho\,d\theta$ ?`,
              [r`$6\pi$`, r`$9\pi$`, r`$3\pi$`, r`$18\pi$`],
              1, r`$\int_0^3\rho\,d\rho = \frac92$, puis $\times2\pi$ : $9\pi$, soit bien $\pi R^2$.`,
              r`$\int_0^3\rho\,d\rho = \frac{9}{2}$.`)),
          step(3, 'methode', 'Quart de disque', 'Intégrer sur un quart de disque',
            r`Le quart de disque unité $\{x \ge 0,\; y \ge 0,\; x^2 + y^2 \le 1\}$ correspond à $0 \le \rho \le 1$ et $0 \le \theta \le \frac\pi2$. On remplace $x^2 + y^2$ par $\rho^2$ et $dx\,dy$ par $\rho\,d\rho\,d\theta$.`,
            qcm('lmd_srit_l1_geod_ch3_p2_ex3',
              r`Que vaut $\iint_D(4 - x^2 - y^2)\,dx\,dy$ sur le quart de disque $D = \{x \ge 0,\; y \ge 0,\; x^2 + y^2 \le 1\}$, sachant qu’en polaires elle devient $\int_0^{\pi/2}\int_0^1(4 - \rho^2)\rho\,d\rho\,d\theta$ ?`,
              [r`$\frac{7\pi}{8}$`, r`$\frac{7\pi}{4}$`, r`$2\pi$`, r`$\frac{3\pi}{2}$`],
              0, r`$\int_0^1(4\rho - \rho^3)\,d\rho = 2 - \frac14 = \frac74$, puis $\times\frac\pi2$ : $\frac{7\pi}{8}$.`,
              r`$\int_0^1 4\rho\,d\rho = 2$ et $\int_0^1\rho^3\,d\rho = \frac14$.`),
            { formula: { name: 'Polaires', formula: r`dx\,dy = \rho\,d\rho\,d\theta` } }),
          step(4, 'exemple', 'Exponentielle', 'Une intégrale impossible en cartésiennes',
            r`En cartésiennes, $\iint e^{-(x^2 + y^2)}$ est difficile, mais en polaires le facteur $\rho$ donne une primitive immédiate : $\int_0^R e^{-\rho^2}\rho\,d\rho = \frac12\left(1 - e^{-R^2}\right)$.`,
            qcm('lmd_srit_l1_geod_ch3_p2_ex4',
              r`Que vaut $\iint_D e^{-(x^2 + y^2)}\,dx\,dy$ sur le disque $D$ de centre O et de rayon $1$ ? (On donne $\int_0^1 e^{-\rho^2}\rho\,d\rho = \frac12(1 - e^{-1})$.)`,
              [r`$\frac\pi2(1 - e^{-1})$`, r`$\pi e^{-1}$`, r`$2\pi(1 - e^{-1})$`, r`$\pi(1 - e^{-1})$`],
              3, r`$\int_0^{2\pi}d\theta\times\frac12(1 - e^{-1}) = 2\pi\times\frac12(1 - e^{-1}) = \pi(1 - e^{-1}) \approx 1{,}99$.`,
              r`Multiplie par $\int_0^{2\pi}d\theta = 2\pi$.`)),
          step(5, 'propriete', 'Gauss', 'L’intégrale de Gauss',
            r`En faisant tendre $R$ vers l’infini sur le quart de plan, on obtient $\iint_{x, y \ge 0} e^{-(x^2 + y^2)}\,dx\,dy = \frac\pi4$. Or cette intégrale vaut aussi $\left(\int_0^{+\infty}e^{-x^2}dx\right)^2$ (Fubini). D’où $\int_0^{+\infty}e^{-x^2}dx = \frac{\sqrt\pi}{2}$, résultat clé en probabilités (loi normale).`,
            qcm('lmd_srit_l1_geod_ch3_p2_ex5',
              r`On sait que $\left(\int_0^{+\infty}e^{-x^2}dx\right)^2 = \frac\pi4$. Que vaut $\int_0^{+\infty}e^{-x^2}dx$ ?`,
              [r`$\frac\pi4$`, r`$\frac{\sqrt\pi}{2}$`, r`$\frac\pi2$`, r`$\sqrt\pi$`],
              1, r`L’intégrale est positive, donc elle vaut $\sqrt{\frac\pi4} = \frac{\sqrt\pi}{2} \approx 0{,}886$.`,
              'Prends la racine carrée positive.')),
          step(6, 'piege', 'Facteur ρ', 'L’oubli du facteur ρ',
            r`Piège classique : écrire $dx\,dy = d\rho\,d\theta$. Sans le facteur $\rho$, les résultats sont faux (et les dimensions incohérentes : une aire doit être en unités de longueur au carré).`,
            qcm('lmd_srit_l1_geod_ch3_p2_ex6',
              r`Un étudiant calcule l’aire du disque de rayon 3 par $\int_0^{2\pi}\int_0^3 d\rho\,d\theta$ et trouve $6\pi$. Quelle est la bonne aire, et quelle est son erreur ?`,
              [r`$6\pi$, il n’y a pas d’erreur`, r`$9\pi$ : il a oublié le facteur $\rho$ du jacobien`, r`$3\pi$ : il aurait dû intégrer de 0 à $\pi$`, r`$36\pi$ : il a oublié le carré`],
              1, r`La bonne intégrale est $\int_0^{2\pi}\int_0^3\rho\,d\rho\,d\theta = 9\pi$. Sans $\rho$, on obtient $6\pi$ : ce serait le périmètre du cercle, pas l’aire du disque.`,
              r`L’aire d’un disque vaut $\pi R^2$.`)),
        ],
      }),
    ],
  },
];
