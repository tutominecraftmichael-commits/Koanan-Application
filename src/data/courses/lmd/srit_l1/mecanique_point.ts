/**
 * SRIT Licence 1 — Mécanique du point matériel (1PHY3202, Semestre 2).
 * Rédigé à partir des cours du dossier SRIT (calcul vectoriel, vitesse et accélération, composition des mouvements,
 * dynamique, forces centrales et formules de Binet, oscillateurs à un degré de liberté) et des sujets d’examen.
 * Format v2 : mini-leçons de 6 étapes, questions autonomes.
 */
import type { CurriculumChapter, CurriculumPoint, InteractiveExercise, StepKind, StructuredLessonStep } from '../../../../lib/curriculum/types';

const r = String.raw;
const THEME: Record<StepKind, string> = { definition: 'blue', propriete: 'violet', methode: 'green', piege: 'orange', exemple: 'slate' };
const SOURCE = 'Programme LMD — Licence 1 SRIT (1PHY3202 : Mécanique du point)';

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
const sub = (base: string, s: string) => `${base}<tspan baseline-shift="sub" font-size="9">${s}</tspan>`;

// ---------------------------------------------------------------------------
// Schémas (SVG sur feuille claire)
// ---------------------------------------------------------------------------
const SVG_POLAIRES = r`<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs>
    <marker id="mp-ax" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#475569"/></marker>
    <marker id="mp-bl" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8"/></marker>
    <marker id="mp-rd" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker>
  </defs>
  <line x1="60" y1="170" x2="360" y2="170" stroke="#475569" stroke-width="1.5" marker-end="url(#mp-ax)"/>
  <line x1="60" y1="170" x2="60" y2="15" stroke="#475569" stroke-width="1.5" marker-end="url(#mp-ax)"/>
  <text x="350" y="188" font-size="12" fill="#475569">x</text><text x="44" y="24" font-size="12" fill="#475569">y</text><text x="44" y="184" font-size="12" fill="#475569">O</text>
  <line x1="60" y1="170" x2="174.9" y2="73.6" stroke="#1e293b" stroke-width="2"/>
  <line x1="174.9" y1="73.6" x2="174.9" y2="170" stroke="#94a3b8" stroke-dasharray="4 3"/><line x1="174.9" y1="73.6" x2="60" y2="73.6" stroke="#94a3b8" stroke-dasharray="4 3"/>
  <path d="M100,170 A40,40 0 0,0 90.6,144.3" fill="none" stroke="#b45309" stroke-width="1.6"/>
  <text x="104" y="156" font-size="13" fill="#b45309" font-weight="bold">θ</text>
  <text x="100" y="110" font-size="13" fill="#1e293b" font-weight="bold">ρ</text>
  <circle cx="174.9" cy="73.6" r="4" fill="#1e293b"/><text x="182" y="88" font-size="13" font-weight="bold" fill="#1e293b">M</text>
  <line x1="174.9" y1="73.6" x2="213.2" y2="41.5" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#mp-bl)"/>
  <line x1="174.9" y1="73.6" x2="142.8" y2="35.3" stroke="#dc2626" stroke-width="2.4" marker-end="url(#mp-rd)"/>
  <text x="218" y="40" font-size="13" font-weight="bold" fill="#1d4ed8">${sub('e', 'ρ')}</text>
  <text x="118" y="34" font-size="13" font-weight="bold" fill="#dc2626">${sub('e', 'θ')}</text>
  <text x="166" y="186" font-size="11" fill="#475569">x = ρ cos θ</text><text x="4" y="66" font-size="11" fill="#475569">y = ρ sin θ</text>
  <text x="236" y="120" font-size="11" fill="#1e293b">${sub('e', 'θ')} : ${sub('e', 'ρ')} tourné de +90°</text>
</svg>`;

const SVG_FRENET = r`<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs>
    <marker id="mp-t" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#1d4ed8"/></marker>
    <marker id="mp-n" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#0f766e"/></marker>
  </defs>
  <path d="M60,110 Q200,-60 340,110" fill="none" stroke="#1e293b" stroke-width="2.4"/>
  <path d="M126.1,51.9 A115,115 0 0,1 273.9,51.9" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <line x1="200" y1="25" x2="200" y2="140" stroke="#94a3b8" stroke-dasharray="3 3"/>
  <circle cx="200" cy="25" r="4" fill="#1e293b"/><text x="186" y="18" font-size="13" font-weight="bold" fill="#1e293b">M</text>
  <circle cx="200" cy="140" r="3.5" fill="#b45309"/><text x="208" y="145" font-size="13" font-weight="bold" fill="#b45309">C</text>
  <line x1="200" y1="25" x2="272" y2="25" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#mp-t)"/><text x="278" y="30" font-size="13" font-weight="bold" fill="#1d4ed8">T</text>
  <line x1="200" y1="25" x2="200" y2="88" stroke="#0f766e" stroke-width="2.4" marker-end="url(#mp-n)"/><text x="206" y="80" font-size="13" font-weight="bold" fill="#0f766e">N</text>
  <text x="178" y="118" font-size="12" font-weight="bold" fill="#475569">ρ</text>
  <text x="20" y="160" font-size="11" fill="#1e293b">T : tangent, dans le sens du mouvement</text>
  <text x="20" y="175" font-size="11" fill="#1e293b">N : vers le centre de courbure C ; ρ = MC</text>
</svg>`;

const SVG_RESSORT = r`<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs><marker id="mp-x" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#475569"/></marker>
  <pattern id="mp-hatch" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0,8 L8,0" stroke="#64748b" stroke-width="1"/></pattern></defs>
  <rect x="20" y="20" width="16" height="80" fill="url(#mp-hatch)" stroke="#475569"/>
  <line x1="20" y1="100" x2="380" y2="100" stroke="#475569" stroke-width="2"/>
  <polyline points="36,60 60,60 70,44 85,76 100,44 115,76 130,44 145,76 160,44 175,76 185,60 210,60" fill="none" stroke="#1e293b" stroke-width="2"/>
  <rect x="210" y="35" width="60" height="50" rx="4" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
  <text x="232" y="66" font-size="14" font-weight="bold" fill="#1d4ed8">m</text>
  <text x="110" y="34" font-size="13" font-weight="bold" fill="#4338ca">k</text>
  <line x1="240" y1="118" x2="370" y2="118" stroke="#475569" stroke-width="1.5" marker-end="url(#mp-x)"/>
  <line x1="240" y1="112" x2="240" y2="124" stroke="#475569" stroke-width="1.5"/><text x="234" y="138" font-size="12" fill="#475569">O</text><text x="364" y="138" font-size="12" fill="#475569">x</text>
  <text x="280" y="66" font-size="11" fill="#1e293b">O = position d’équilibre</text>
</svg>`;

const SVG_AMORTI = r`<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs><marker id="mp-t2" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#475569"/></marker></defs>
  <line x1="30" y1="90" x2="385" y2="90" stroke="#475569" stroke-width="1.4" marker-end="url(#mp-t2)"/><line x1="30" y1="165" x2="30" y2="15" stroke="#475569" stroke-width="1.4" marker-end="url(#mp-t2)"/>
  <text x="376" y="106" font-size="12" fill="#475569">t</text><text x="10" y="22" font-size="12" fill="#475569">x</text>
  <polyline points="30,30.0 40,34.8 50,39.2 60,43.3 70,47.0 80,50.4 90,53.6 100,56.5 110,59.2 120,61.7 130,63.9 140,66.0 150,67.9 160,69.7 170,71.3 180,72.8 190,74.2 200,75.4 210,76.6 220,77.7 230,78.7 240,79.6 250,80.4 260,81.2 270,81.9 280,82.5 290,83.1 300,83.7 310,84.2 320,84.6 330,85.1 340,85.5 350,85.8 360,86.2 370,86.5" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <polyline points="30,150.0 40,145.2 50,140.8 60,136.7 70,133.0 80,129.6 90,126.4 100,123.5 110,120.8 120,118.3 130,116.1 140,114.0 150,112.1 160,110.3 170,108.7 180,107.2 190,105.8 200,104.6 210,103.4 220,102.3 230,101.3 240,100.4 250,99.6 260,98.8 270,98.1 280,97.5 290,96.9 300,96.3 310,95.8 320,95.4 330,94.9 340,94.5 350,94.2 360,93.8 370,93.5" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4"/>
  <polyline points="30,30.0 35,36.8 40,51.0 45,69.7 50,90.0 55,108.6 60,123.0 65,131.4 70,133.0 75,128.1 80,118.0 85,104.5 90,90.0 95,76.6 100,66.3 105,60.3 110,59.2 115,62.7 120,70.0 125,79.6 130,90.0 135,99.6 140,107.0 145,111.3 150,112.1 155,109.6 160,104.4 165,97.5 170,90.0 175,83.1 180,77.8 185,74.8 190,74.2 195,76.0 200,79.7 205,84.7 210,90.0 215,94.9 220,98.7 225,100.9 230,101.3 235,100.0 240,97.4 245,93.8 250,90.0 255,86.5 260,83.8 265,82.2 270,81.9 275,82.8 280,84.7 285,87.3 290,90.0 295,92.5 300,94.5 305,95.6 310,95.8 315,95.2 320,93.8 325,92.0 330,90.0 335,88.2 340,86.8 345,86.0 350,85.8 355,86.3 360,87.3 365,88.6 370,90.0" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <text x="200" y="40" font-size="11" fill="#475569">enveloppe ± X·e^(−ζω₀t) (pointillés)</text>
  <text x="200" y="160" font-size="11" fill="#dc2626">régime pseudo-périodique (ζ &lt; 1)</text>
</svg>`;

const SVG_AIRES = r`<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs><marker id="mp-v" markerUnits="userSpaceOnUse" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker></defs>
  <ellipse cx="200" cy="100" rx="150" ry="80" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M73.1,100 L72.1,141.8 A150,80 0 0,1 72.1,58.2 Z" fill="#fde68a" fill-opacity="0.8" stroke="#b45309" stroke-width="1.2"/>
  <path d="M73.1,100 L349.7,95.3 A150,80 0 0,1 349.7,104.7 Z" fill="#fde68a" fill-opacity="0.8" stroke="#b45309" stroke-width="1.2"/>
  <circle cx="73.1" cy="100" r="7" fill="#f59e0b"/><text x="84" y="124" font-size="12" font-weight="bold" fill="#b45309">O (centre de force)</text>
  <line x1="50" y1="100" x2="50" y2="40" stroke="#dc2626" stroke-width="2.4" marker-end="url(#mp-v)"/>
  <line x1="350" y1="100" x2="350" y2="122" stroke="#dc2626" stroke-width="2.4" marker-end="url(#mp-v)"/>
  <circle cx="50" cy="100" r="4" fill="#1e293b"/><circle cx="350" cy="100" r="4" fill="#1e293b"/>
  <text x="8" y="34" font-size="11" fill="#dc2626">rapide (près de O)</text><text x="252" y="128" font-size="11" fill="#dc2626">lent (loin de O)</text>
  <text x="200" y="198" font-size="11" fill="#1e293b" text-anchor="middle">Les deux zones jaunes ont la même aire : elles sont balayées en des durées égales</text>
</svg>`;

export const MECANIQUE_POINT_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : OUTILS MATHÉMATIQUES ET SYSTÈMES DE COORDONNÉES
  // ==========================================================================
  {
    id: 'lmd_srit_l1_meca_ch1',
    subjectId: 'lmd_mecanique_point',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 1,
    officialVolumeHours: 8,
    contentVersion: 2,
    source: SOURCE,
    title: 'Outils mathématiques et systèmes de coordonnées',
    summary: 'Produit scalaire, produit vectoriel, dérivée d’un vecteur ; coordonnées cartésiennes, cylindriques (polaires) et sphériques.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_meca_ch1_p1',
        order: 1,
        title: 'Rappels de calcul vectoriel',
        summary: 'Produit scalaire, norme, produit vectoriel et ses propriétés, dérivée d’un vecteur unitaire tournant.',
        conceptExplanation: r`La mécanique s’écrit avec des **vecteurs** : position, vitesse, force. Le **produit scalaire** mesure si deux vecteurs vont dans le même sens (il sert au travail d’une force), le **produit vectoriel** donne un vecteur perpendiculaire aux deux (il sert au moment cinétique et à la force de Coriolis). Enfin, on doit savoir **dériver** un vecteur, y compris un vecteur unitaire qui tourne.`,
        formulas: [
          { name: 'Produit scalaire', formula: r`\vec u \cdot \vec v = xx' + yy' + zz' = \|\vec u\|\,\|\vec v\|\cos\alpha` },
          { name: 'Produit vectoriel', formula: r`\vec u \wedge \vec v = (yz' - zy')\,\vec i + (zx' - xz')\,\vec j + (xy' - yx')\,\vec k` },
          { name: 'Dérivée d’un vecteur tournant', formula: r`\frac{d\vec e_\rho}{dt} = \dot\theta\,\vec e_\theta \quad ; \quad \frac{d\vec e_\theta}{dt} = -\dot\theta\,\vec e_\rho` },
        ],
        keyRule: r`$\vec u \cdot \vec v = 0$ : vecteurs perpendiculaires. $\vec u \wedge \vec v = \vec 0$ : vecteurs colinéaires.`,
        workedExample: {
          title: 'Produit vectoriel de deux vecteurs',
          statement: r`Calcule $\vec u \wedge \vec v$ pour $\vec u = (1, 2, 0)$ et $\vec v = (0, 1, 3)$.`,
          methodSteps: [
            r`Composante sur $\vec i$ : $yz' - zy' = 2\times3 - 0\times1 = 6$.`,
            r`Composante sur $\vec j$ : $zx' - xz' = 0\times0 - 1\times3 = -3$.`,
            r`Composante sur $\vec k$ : $xy' - yx' = 1\times1 - 2\times0 = 1$.`,
          ],
          conclusion: r`$\vec u \wedge \vec v = (6, -3, 1)$. Vérification : $\vec u\cdot(6,-3,1) = 6 - 6 + 0 = 0$, il est bien perpendiculaire à $\vec u$.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Produit scalaire', 'Le produit scalaire',
            r`Le produit scalaire de $\vec u = (x, y, z)$ et $\vec v = (x', y', z')$ est un **nombre** : $\vec u\cdot\vec v = xx' + yy' + zz' = \|\vec u\|\,\|\vec v\|\cos\alpha$, où $\alpha$ est l’angle entre les vecteurs. Il est nul quand les vecteurs sont perpendiculaires.`,
            qcm('lmd_srit_l1_meca_ch1_p1_ex1',
              r`Que vaut le produit scalaire $\vec u\cdot\vec v$ pour $\vec u = (1, 2, 2)$ et $\vec v = (2, 0, 1)$ ?`,
              ['2', '4', '5', '(2, 0, 2)'],
              1, r`$\vec u\cdot\vec v = 1\times2 + 2\times0 + 2\times1 = 2 + 0 + 2 = 4$. C’est un nombre, pas un vecteur.`,
              'Multiplie composante par composante, puis additionne.')),
          step(2, 'propriete', 'Norme', 'La norme d’un vecteur',
            r`La norme (longueur) d’un vecteur s’obtient avec le produit scalaire du vecteur par lui-même : $\|\vec u\| = \sqrt{\vec u\cdot\vec u} = \sqrt{x^2 + y^2 + z^2}$. Un vecteur **unitaire** a une norme égale à 1.`,
            qcm('lmd_srit_l1_meca_ch1_p1_ex2',
              r`Quelle est la norme du vecteur $\vec u = (2, 3, 6)$ ?`,
              ['11', '49', '7', r`$\sqrt{11}$`],
              2, r`$\|\vec u\| = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$.`,
              'Additionne les carrés des composantes, puis prends la racine.')),
          step(3, 'methode', 'Produit vectoriel', 'Calculer un produit vectoriel',
            r`Le produit vectoriel $\vec u\wedge\vec v$ est un **vecteur** perpendiculaire à $\vec u$ et à $\vec v$, orienté par la règle de la main droite. Composantes : $(yz' - zy',\; zx' - xz',\; xy' - yx')$. Pour la base : $\vec i\wedge\vec j = \vec k$, $\vec j\wedge\vec k = \vec i$, $\vec k\wedge\vec i = \vec j$.`,
            qcm('lmd_srit_l1_meca_ch1_p1_ex3',
              r`Calcule $\vec u\wedge\vec v$ pour $\vec u = (1, 2, 0)$ et $\vec v = (0, 1, 3)$, avec la formule $(yz' - zy',\; zx' - xz',\; xy' - yx')$.`,
              ['(6, 3, 1)', '(0, 2, 0)', '(−6, 3, −1)', '(6, −3, 1)'],
              3, r`$(2\times3 - 0\times1,\; 0\times0 - 1\times3,\; 1\times1 - 2\times0) = (6, -3, 1)$.`,
              'Attention au signe de la deuxième composante.'),
            { formula: { name: 'Produit vectoriel', formula: r`\vec u\wedge\vec v = (yz' - zy',\; zx' - xz',\; xy' - yx')` } }),
          step(4, 'propriete', 'Aire', 'La norme du produit vectoriel est une aire',
            r`$\|\vec u\wedge\vec v\| = \|\vec u\|\,\|\vec v\|\,|\sin\alpha|$ : c’est l’**aire du parallélogramme** construit sur $\vec u$ et $\vec v$. Elle est maximale quand les vecteurs sont perpendiculaires et nulle quand ils sont colinéaires.`,
            qcm('lmd_srit_l1_meca_ch1_p1_ex4',
              r`Quelle est l’aire du parallélogramme construit sur $\vec u = (3, 0, 0)$ et $\vec v = (0, 4, 0)$ (longueurs en mètres) ?`,
              [r`$12\text{ m}^2$`, r`$7\text{ m}^2$`, r`$5\text{ m}^2$`, r`$0\text{ m}^2$`],
              0, r`$\vec u\wedge\vec v = (0, 0, 12)$, de norme 12 : l’aire vaut $12\text{ m}^2$ (ici un rectangle $3\times4$).`,
              'Les deux vecteurs sont perpendiculaires.')),
          step(5, 'methode', 'Dérivée', 'Dériver un vecteur unitaire qui tourne',
            r`En coordonnées polaires, $\vec e_\rho$ et $\vec e_\theta$ tournent avec le point : ils dépendent de $\theta(t)$. On trouve $\frac{d\vec e_\rho}{dt} = \dot\theta\,\vec e_\theta$ et $\frac{d\vec e_\theta}{dt} = -\dot\theta\,\vec e_\rho$ : dériver un vecteur unitaire le fait tourner de $+90°$ et le multiplie par $\dot\theta$.`,
            qcm('lmd_srit_l1_meca_ch1_p1_ex5',
              r`Un point tourne avec l’angle $\theta(t) = 3t$ (en radians). Que vaut $\frac{d\vec e_\rho}{dt}$, sachant que $\frac{d\vec e_\rho}{dt} = \dot\theta\,\vec e_\theta$ ?`,
              [r`$\vec 0$`, r`$3\,\vec e_\rho$`, r`$3\,\vec e_\theta$`, r`$-3\,\vec e_\rho$`],
              2, r`$\dot\theta = 3\text{ rad/s}$, donc $\frac{d\vec e_\rho}{dt} = 3\,\vec e_\theta$.`,
              r`Dérive d’abord $\theta(t) = 3t$.`)),
          step(6, 'piege', 'Ordre', 'Le produit vectoriel n’est pas commutatif',
            r`Piège : $\vec v\wedge\vec u = -\,\vec u\wedge\vec v$ (antisymétrie). Inverser l’ordre change le sens du vecteur obtenu. En particulier $\vec j\wedge\vec i = -\vec k$. Le produit scalaire, lui, est commutatif.`,
            qcm('lmd_srit_l1_meca_ch1_p1_ex6',
              r`On sait que $\vec u\wedge\vec v = (6, -3, 1)$. Que vaut $\vec v\wedge\vec u$ ?`,
              ['(6, −3, 1)', '(−6, 3, −1)', '(0, 0, 0)', '(1, −3, 6)'],
              1, r`Antisymétrie : $\vec v\wedge\vec u = -\vec u\wedge\vec v = (-6, 3, -1)$.`,
              'Inverser l’ordre change tous les signes.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_meca_ch1_p2',
        order: 2,
        title: 'Les systèmes de coordonnées',
        summary: 'Coordonnées cartésiennes, cylindriques (polaires dans le plan) et sphériques ; passages de l’une à l’autre, déplacement élémentaire.',
        conceptExplanation: r`Pour repérer un point M, on choisit le système de coordonnées le mieux adapté au mouvement : **cartésien** $(x, y, z)$ pour une translation, **cylindrique** $(\rho, \theta, z)$ pour une rotation autour d’un axe (cercle, hélice), **sphérique** $(r, \theta, \varphi)$ pour une symétrie autour d’un point. Dans le plan, les coordonnées cylindriques deviennent les **coordonnées polaires**.`,
        formulas: [
          { name: 'Cylindriques → cartésiennes', formula: r`x = \rho\cos\theta \quad ; \quad y = \rho\sin\theta \quad ; \quad z = z` },
          { name: 'Vecteur position cylindrique', formula: r`\overrightarrow{OM} = \rho\,\vec e_\rho + z\,\vec e_z` },
          { name: 'Déplacement élémentaire', formula: r`d\overrightarrow{OM} = d\rho\,\vec e_\rho + \rho\,d\theta\,\vec e_\theta + dz\,\vec e_z` },
          { name: 'Sphériques → cartésiennes', formula: r`x = r\sin\theta\cos\varphi \quad ; \quad y = r\sin\theta\sin\varphi \quad ; \quad z = r\cos\theta` },
        ],
        keyRule: r`En cylindriques, le vecteur position n’a PAS de composante sur $\vec e_\theta$ : $\overrightarrow{OM} = \rho\,\vec e_\rho + z\,\vec e_z$.`,
        workedExample: {
          title: 'Passer de cartésiennes à polaires',
          statement: r`Un point a pour coordonnées cartésiennes $x = 3$, $y = 4$ (en mètres). Trouve $\rho$ et $\theta$.`,
          methodSteps: [
            r`$\rho = \sqrt{x^2 + y^2} = \sqrt{9 + 16} = 5\text{ m}$.`,
            r`$\tan\theta = \frac{y}{x} = \frac{4}{3}$, et le point est dans le premier quadrant, donc $\theta = \arctan\frac{4}{3} \approx 0{,}93\text{ rad}$ (environ $53°$).`,
          ],
          conclusion: r`$\rho = 5\text{ m}$, $\theta \approx 53°$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Coordonnées polaires et base mobile', svgContent: SVG_POLAIRES },
        structuredSteps: [
          step(1, 'definition', 'Cylindriques', 'Les coordonnées cylindriques',
            r`Le point M est repéré par $\rho$ (distance à l’axe $Oz$), $\theta$ (angle entre $Ox$ et $OH$, H projeté de M sur le plan $xOy$) et $z$ (cote). Lien avec les cartésiennes : $x = \rho\cos\theta$, $y = \rho\sin\theta$, $z = z$.`,
            qcm('lmd_srit_l1_meca_ch1_p2_ex1',
              r`Un point a pour coordonnées cylindriques $\rho = 2$, $\theta = \frac{\pi}{3}$, $z = 0$. Quelles sont ses coordonnées cartésiennes $(x, y)$ ?`,
              [r`$(1, \sqrt 3)$`, r`$(\sqrt 3, 1)$`, r`$(2, 0)$`, r`$(1, 1)$`],
              0, r`$x = 2\cos\frac{\pi}{3} = 2\times\frac{1}{2} = 1$ et $y = 2\sin\frac{\pi}{3} = 2\times\frac{\sqrt3}{2} = \sqrt3$.`,
              r`$\cos\frac{\pi}{3} = \frac12$ et $\sin\frac{\pi}{3} = \frac{\sqrt3}{2}$.`)),
          step(2, 'methode', 'Inverse', 'Retrouver ρ et θ',
            r`À partir des cartésiennes : $\rho = \sqrt{x^2 + y^2}$ et $\tan\theta = \frac{y}{x}$ (en choisissant l’angle selon le quadrant où se trouve le point).`,
            qcm('lmd_srit_l1_meca_ch1_p2_ex2',
              r`Un point du plan a pour coordonnées cartésiennes $x = 3\text{ m}$ et $y = 4\text{ m}$. Que vaut sa coordonnée polaire $\rho$ ?`,
              [r`$7\text{ m}$`, r`$25\text{ m}$`, r`$1\text{ m}$`, r`$5\text{ m}$`],
              3, r`$\rho = \sqrt{3^2 + 4^2} = \sqrt{25} = 5\text{ m}$.`,
              'Pense au théorème de Pythagore.')),
          step(3, 'propriete', 'Vecteur position', 'Le vecteur position en cylindriques',
            r`La base cylindrique $(\vec e_\rho, \vec e_\theta, \vec e_z)$ est **mobile** : $\vec e_\rho$ pointe de l’axe vers le point. Le vecteur position s’écrit donc simplement $\overrightarrow{OM} = \rho\,\vec e_\rho + z\,\vec e_z$ : toute l’information sur $\theta$ est cachée dans la direction de $\vec e_\rho$.`,
            qcm('lmd_srit_l1_meca_ch1_p2_ex3',
              'Quelle est l’expression correcte du vecteur position OM en coordonnées cylindriques (ρ, θ, z) ?',
              [r`$\rho\,\vec e_\rho + \theta\,\vec e_\theta + z\,\vec e_z$`, r`$\rho\,\vec e_\rho + z\,\vec e_z$`, r`$\rho\,\vec e_\rho + \rho\theta\,\vec e_\theta + z\,\vec e_z$`, r`$\rho\,\vec e_\theta + z\,\vec e_z$`],
              1, r`$\vec e_\rho$ pointe déjà dans la direction du point : $\overrightarrow{OM} = \rho\,\vec e_\rho + z\,\vec e_z$, sans composante sur $\vec e_\theta$.`,
              r`Dans quelle direction pointe $\vec e_\rho$ ?`)),
          step(4, 'methode', 'Déplacement', 'Le déplacement élémentaire',
            r`Quand M se déplace de $d\rho$, $d\theta$ et $dz$, il parcourt $d\overrightarrow{OM} = d\rho\,\vec e_\rho + \rho\,d\theta\,\vec e_\theta + dz\,\vec e_z$. Sur un cercle de rayon $\rho$ constant, la longueur d’un arc d’angle $\Delta\theta$ vaut $\rho\,\Delta\theta$ (θ en radians). Le volume élémentaire vaut $d\tau = \rho\,d\rho\,d\theta\,dz$.`,
            qcm('lmd_srit_l1_meca_ch1_p2_ex4',
              r`Un point se déplace sur un cercle de rayon $\rho = 2\text{ m}$, de $\theta = 0$ à $\theta = \frac{\pi}{2}$. Quelle distance parcourt-il ?`,
              [r`$\pi\text{ m}$ (environ $3{,}14\text{ m}$)`, r`$2\text{ m}$`, r`$4\pi\text{ m}$`, r`$\frac{\pi}{2}\text{ m}$`],
              0, r`$\ell = \rho\,\Delta\theta = 2\times\frac{\pi}{2} = \pi \approx 3{,}14\text{ m}$ (un quart du périmètre $4\pi$).`,
              r`Longueur d’arc : $\rho\times\Delta\theta$.`)),
          step(5, 'exemple', 'Sphériques', 'Les coordonnées sphériques',
            r`En sphériques, M est repéré par $r = OM$, l’angle $\theta$ entre $Oz$ et $\overrightarrow{OM}$ (de $0$ à $\pi$), et l’angle $\varphi$ entre $Ox$ et $OH$ (comme une longitude). $x = r\sin\theta\cos\varphi$, $y = r\sin\theta\sin\varphi$, $z = r\cos\theta$.`,
            qcm('lmd_srit_l1_meca_ch1_p2_ex5',
              r`Un point a pour coordonnées sphériques $r = 4\text{ m}$, $\theta = \frac{\pi}{3}$ (angle mesuré depuis l’axe $Oz$) et $\varphi = 0$. Que vaut sa cote $z = r\cos\theta$ ?`,
              [r`$2\sqrt3\text{ m}$`, r`$4\text{ m}$`, r`$2\text{ m}$`, r`$0\text{ m}$`],
              2, r`$z = 4\cos\frac{\pi}{3} = 4\times\frac12 = 2\text{ m}$.`,
              r`$\cos\frac{\pi}{3} = \frac12$.`)),
          step(6, 'piege', 'Base mobile', 'Les vecteurs de la base cylindrique bougent',
            r`Piège : contrairement à $\vec i$, $\vec j$, $\vec k$, les vecteurs $\vec e_\rho$ et $\vec e_\theta$ **changent de direction** quand le point tourne. On ne peut donc pas les sortir d’une dérivée comme des constantes. Seul $\vec e_z$ est fixe.`,
            qcm('lmd_srit_l1_meca_ch1_p2_ex6',
              'Un point M tourne autour de l’axe Oz. Parmi les vecteurs de la base cylindrique, lequel reste constant au cours du mouvement ?',
              [r`$\vec e_\rho$`, r`$\vec e_\theta$`, r`$\vec e_z$`, 'Les trois'],
              2, r`$\vec e_\rho$ et $\vec e_\theta$ tournent avec le point (ils dépendent de $\theta$) ; seul $\vec e_z$, parallèle à l’axe, reste fixe.`,
              'Lequel ne dépend pas de θ ?')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : CINÉMATIQUE DU POINT
  // ==========================================================================
  {
    id: 'lmd_srit_l1_meca_ch2',
    subjectId: 'lmd_mecanique_point',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 2,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: SOURCE,
    title: 'Vitesse et accélération d’un point matériel',
    summary: 'Vecteurs vitesse et accélération en cartésiennes et en cylindriques, mouvement hélicoïdal, repère de Frenet, accélérations tangentielle et normale, rayon de courbure.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_meca_ch2_p1',
        order: 1,
        title: 'Vitesse et accélération en cartésiennes et en cylindriques',
        summary: 'Définitions, composantes cartésiennes, composantes polaires (radiale et orthoradiale), mouvement circulaire et hélicoïdal.',
        conceptExplanation: r`La **vitesse** est la dérivée du vecteur position par rapport au temps, l’**accélération** est la dérivée de la vitesse. En cartésiennes, on dérive simplement chaque coordonnée. En cylindriques, il faut aussi dériver les vecteurs $\vec e_\rho$ et $\vec e_\theta$ qui tournent : de nouveaux termes apparaissent ($\rho\dot\theta$, $-\rho\dot\theta^2$, $2\dot\rho\dot\theta$).`,
        formulas: [
          { name: 'Vitesse en cylindriques', formula: r`\vec v = \dot\rho\,\vec e_\rho + \rho\dot\theta\,\vec e_\theta + \dot z\,\vec e_z` },
          { name: 'Accélération en cylindriques', formula: r`\vec a = (\ddot\rho - \rho\dot\theta^2)\,\vec e_\rho + (\rho\ddot\theta + 2\dot\rho\dot\theta)\,\vec e_\theta + \ddot z\,\vec e_z` },
        ],
        keyRule: r`Mouvement circulaire uniforme ($\rho = R$, $\dot\theta = \omega$) : $v = R\omega$ et l’accélération $R\omega^2$ est dirigée vers le centre.`,
        workedExample: {
          title: 'Mouvement hélicoïdal',
          statement: r`Un point se déplace avec $\rho = R$, $\theta = \omega t$, $z = at$ ($R$, $\omega$, $a$ constants). Donne sa vitesse et son accélération.`,
          methodSteps: [
            r`$\dot\rho = 0$, $\dot\theta = \omega$, $\dot z = a$ : $\vec v = R\omega\,\vec e_\theta + a\,\vec e_z$, de norme $\sqrt{R^2\omega^2 + a^2}$ (constante).`,
            r`$\ddot\rho = 0$, $\ddot\theta = 0$, $\ddot z = 0$ : $\vec a = -R\omega^2\,\vec e_\rho$.`,
          ],
          conclusion: r`Vitesse de norme constante, accélération dirigée vers l’axe : c’est une hélice parcourue à vitesse constante.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Vitesse', 'Le vecteur vitesse en cartésiennes',
            r`$\vec v = \frac{d\overrightarrow{OM}}{dt} = \dot x\,\vec i + \dot y\,\vec j + \dot z\,\vec k$ (le point au-dessus signifie « dérivée par rapport au temps »). La vitesse est toujours **tangente à la trajectoire**. Sa norme vaut $\sqrt{\dot x^2 + \dot y^2 + \dot z^2}$.`,
            qcm('lmd_srit_l1_meca_ch2_p1_ex1',
              r`Un point se déplace dans le plan avec $x(t) = 2t^2$ et $y(t) = 3t$ (en mètres, $t$ en secondes). Quelle est la norme de sa vitesse à $t = 1\text{ s}$ ?`,
              [r`$7\text{ m/s}$`, r`$5\text{ m/s}$`, r`$3{,}6\text{ m/s}$`, r`$4\text{ m/s}$`],
              1, r`$\dot x = 4t = 4$ et $\dot y = 3$ à $t = 1\text{ s}$, donc $v = \sqrt{16 + 9} = 5\text{ m/s}$.`,
              'Dérive chaque coordonnée, puis calcule la norme.')),
          step(2, 'definition', 'Accélération', 'Le vecteur accélération en cartésiennes',
            r`$\vec a = \frac{d\vec v}{dt} = \ddot x\,\vec i + \ddot y\,\vec j + \ddot z\,\vec k$. Elle mesure comment la vitesse change, en norme **et** en direction.`,
            qcm('lmd_srit_l1_meca_ch2_p1_ex2',
              r`Un point se déplace avec $x(t) = 2t^2$, $y(t) = 3t$ et $z = 0$ (en mètres). Quelle est la norme de son accélération ?`,
              [r`$4\text{ m/s}^2$`, r`$3\text{ m/s}^2$`, r`$5\text{ m/s}^2$`, r`$0\text{ m/s}^2$`],
              0, r`$\ddot x = 4$ et $\ddot y = 0$ : $\vec a = 4\,\vec i$, de norme $4\text{ m/s}^2$ (constante).`,
              'Dérive deux fois chaque coordonnée.')),
          step(3, 'propriete', 'Vitesse polaire', 'La vitesse en coordonnées polaires',
            r`En dérivant $\overrightarrow{OM} = \rho\,\vec e_\rho$ (et $\frac{d\vec e_\rho}{dt} = \dot\theta\,\vec e_\theta$) : $\vec v = \dot\rho\,\vec e_\rho + \rho\dot\theta\,\vec e_\theta$. La composante **radiale** $\dot\rho$ vient de l’éloignement, la composante **orthoradiale** $\rho\dot\theta$ vient de la rotation.`,
            qcm('lmd_srit_l1_meca_ch2_p1_ex3',
              r`Un point parcourt un cercle de rayon $\rho = R = 2\text{ m}$ avec $\theta(t) = 3t$ (radians). Quelle est sa vitesse, avec $\vec v = \dot\rho\,\vec e_\rho + \rho\dot\theta\,\vec e_\theta$ ?`,
              [r`$3\,\vec e_\theta$ (m/s)`, r`$2\,\vec e_\rho$ (m/s)`, r`$6\,\vec e_\rho$ (m/s)`, r`$6\,\vec e_\theta$ (m/s)`],
              3, r`$\dot\rho = 0$ (rayon constant) et $\rho\dot\theta = 2\times3 = 6$ : $\vec v = 6\,\vec e_\theta$, tangente au cercle.`,
              r`Sur un cercle, $\dot\rho = 0$.`),
            { formula: { name: 'Vitesse en polaires', formula: r`\vec v = \dot\rho\,\vec e_\rho + \rho\dot\theta\,\vec e_\theta` } }),
          step(4, 'propriete', 'Accélération polaire', 'L’accélération en coordonnées polaires',
            r`En dérivant encore : $\vec a = (\ddot\rho - \rho\dot\theta^2)\,\vec e_\rho + (\rho\ddot\theta + 2\dot\rho\dot\theta)\,\vec e_\theta$. Pour un mouvement circulaire uniforme ($\rho = R$, $\dot\theta = \omega$ constant) : $\vec a = -R\omega^2\,\vec e_\rho$, accélération **centripète** (vers le centre).`,
            qcm('lmd_srit_l1_meca_ch2_p1_ex4',
              r`Un point parcourt un cercle de rayon $R = 2\text{ m}$ avec $\theta(t) = 3t$. Quelle est son accélération, avec $\vec a = (\ddot\rho - \rho\dot\theta^2)\,\vec e_\rho + (\rho\ddot\theta + 2\dot\rho\dot\theta)\,\vec e_\theta$ ?`,
              [r`$\vec 0$ (vitesse constante)`, r`$-18\,\vec e_\rho$ (m/s²)`, r`$-6\,\vec e_\rho$ (m/s²)`, r`$18\,\vec e_\theta$ (m/s²)`],
              1, r`$\ddot\rho = 0$, $\dot\rho = 0$, $\ddot\theta = 0$ : il reste $-\rho\dot\theta^2 = -2\times9 = -18$. Donc $\vec a = -18\,\vec e_\rho$, dirigée vers le centre.`,
              r`Seul le terme $-\rho\dot\theta^2$ est non nul.`)),
          step(5, 'exemple', 'Hélice', 'Le mouvement hélicoïdal',
            r`Avec $\rho = R$, $\theta = \omega t$ et $z = at$, le point monte en tournant : c’est une **hélice**. $\vec v = R\omega\,\vec e_\theta + a\,\vec e_z$, de norme $\sqrt{R^2\omega^2 + a^2}$, et $\vec a = -R\omega^2\,\vec e_\rho$.`,
            qcm('lmd_srit_l1_meca_ch2_p1_ex5',
              r`Un point décrit une hélice : $\rho = 3\text{ m}$, $\theta = t$ (rad, $\omega = 1\text{ rad/s}$), $z = 4t$ (m). Quelle est la norme de sa vitesse, $\sqrt{R^2\omega^2 + a^2}$ ?`,
              [r`$7\text{ m/s}$`, r`$3\text{ m/s}$`, r`$5\text{ m/s}$`, r`$25\text{ m/s}$`],
              2, r`$\vec v = 3\times1\,\vec e_\theta + 4\,\vec e_z$, de norme $\sqrt{9 + 16} = 5\text{ m/s}$.`,
              'Composante de rotation et composante de montée sont perpendiculaires.')),
          step(6, 'piege', 'Terme de Coriolis', 'N’oublie pas le terme 2ρ̇θ̇',
            r`Piège : quand le rayon **et** l’angle varient, la composante orthoradiale de l’accélération contient le terme $2\dot\rho\dot\theta$, souvent oublié. Écris toujours les deux termes : $a_\theta = \rho\ddot\theta + 2\dot\rho\dot\theta$.`,
            qcm('lmd_srit_l1_meca_ch2_p1_ex6',
              r`Un point se déplace avec $\rho(t) = t$ (m) et $\theta(t) = 2t$ (rad). Que vaut la composante orthoradiale de son accélération, $a_\theta = \rho\ddot\theta + 2\dot\rho\dot\theta$ ?`,
              [r`$0\text{ m/s}^2$`, r`$2\text{ m/s}^2$`, r`$-4\text{ m/s}^2$`, r`$4\text{ m/s}^2$`],
              3, r`$\ddot\theta = 0$, $\dot\rho = 1$, $\dot\theta = 2$ : $a_\theta = 0 + 2\times1\times2 = 4\text{ m/s}^2$ (à tout instant).`,
              r`$\ddot\theta = 0$ mais $\dot\rho\dot\theta \ne 0$.`)),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_meca_ch2_p2',
        order: 2,
        title: 'Repère de Frenet et rayon de courbure',
        summary: 'Abscisse curviligne, vecteurs T et N, accélérations tangentielle et normale, rayon de courbure, mouvements rectiligne et circulaire.',
        conceptExplanation: r`Le **repère de Frenet** suit le point sur sa trajectoire : $\vec T$ est tangent (sens du mouvement), $\vec N$ est normal et pointe vers le **centre de courbure**. Dans ce repère, l’accélération se sépare en deux parts faciles à interpréter : $\frac{dv}{dt}$ (le point accélère ou freine) et $\frac{v^2}{\rho}$ (le point tourne).`,
        formulas: [
          { name: 'Vitesse et accélération de Frenet', formula: r`\vec v = v\,\vec T \quad ; \quad \vec a = \frac{dv}{dt}\,\vec T + \frac{v^2}{\rho}\,\vec N` },
          { name: 'Rayon de courbure', formula: r`\rho = \frac{\|\vec v\|^3}{\|\vec v\wedge\vec a\|}` },
        ],
        keyRule: r`$a_T = \frac{dv}{dt}$ change la norme de la vitesse ; $a_N = \frac{v^2}{\rho}$ change sa direction.`,
        workedExample: {
          title: 'Voiture dans un virage',
          statement: r`Une voiture aborde un virage de rayon $50\text{ m}$ à $20\text{ m/s}$ en freinant à $3\text{ m/s}^2$. Calcule son accélération.`,
          methodSteps: [
            r`$a_T = \frac{dv}{dt} = -3\text{ m/s}^2$ (elle freine).`,
            r`$a_N = \frac{v^2}{\rho} = \frac{400}{50} = 8\text{ m/s}^2$.`,
            r`$a = \sqrt{a_T^2 + a_N^2} = \sqrt{9 + 64} = \sqrt{73} \approx 8{,}5\text{ m/s}^2$.`,
          ],
          conclusion: r`$a \approx 8{,}5\text{ m/s}^2$, surtout due au virage.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Repère de Frenet', svgContent: SVG_FRENET },
        structuredSteps: [
          step(1, 'definition', 'Frenet', 'Le repère qui suit la trajectoire',
            r`On repère la position sur la trajectoire par l’**abscisse curviligne** $s$ (distance parcourue). La vitesse vaut $\vec v = \frac{ds}{dt}\,\vec T = v\,\vec T$ : elle est portée par le vecteur unitaire tangent $\vec T$. Le vecteur $\vec N$, perpendiculaire à $\vec T$, pointe vers l’intérieur de la courbe.`,
            qcm('lmd_srit_l1_meca_ch2_p2_ex1',
              'Dans le repère de Frenet, quelle est la direction du vecteur vitesse d’un point matériel ?',
              ['Toujours vers le centre de courbure', 'Toujours selon N', 'Toujours tangente à la trajectoire, selon T', 'Elle dépend de l’accélération'],
              2, r`$\vec v = v\,\vec T$ : la vitesse est toujours tangente à la trajectoire. C’est l’accélération qui peut avoir une composante selon $\vec N$.`,
              'Pense à une voiture : où pointe sa vitesse ?')),
          step(2, 'propriete', 'Accélération normale', 'L’accélération normale',
            r`$\vec a = \frac{dv}{dt}\,\vec T + \frac{v^2}{\rho}\,\vec N$. La composante normale $a_N = \frac{v^2}{\rho}$ (avec $\rho$ le rayon de courbure) est toujours positive : elle pointe vers le centre de courbure. Elle existe dès que la trajectoire tourne, même à vitesse constante.`,
            qcm('lmd_srit_l1_meca_ch2_p2_ex2',
              r`Une voiture roule à vitesse constante $v = 20\text{ m/s}$ dans un virage de rayon $\rho = 50\text{ m}$. Que vaut son accélération normale $a_N = \frac{v^2}{\rho}$ ?`,
              [r`$0{,}4\text{ m/s}^2$`, r`$2{,}5\text{ m/s}^2$`, r`$0\text{ m/s}^2$`, r`$8\text{ m/s}^2$`],
              3, r`$a_N = \frac{20^2}{50} = \frac{400}{50} = 8\text{ m/s}^2$.`,
              r`$20^2 = 400$.`)),
          step(3, 'methode', 'Rayon', 'Trouver le rayon de courbure',
            r`Méthode : (1) $a_T = \frac{dv}{dt}$ ; (2) $a_N = \sqrt{a^2 - a_T^2}$ ; (3) $\rho = \frac{v^2}{a_N}$. Cela permet de trouver la courbure de la trajectoire à un instant donné.`,
            qcm('lmd_srit_l1_meca_ch2_p2_ex3',
              r`À un instant donné, un point a une vitesse $v = 6\text{ m/s}$, une accélération totale $a = 5\text{ m/s}^2$ et une accélération tangentielle $a_T = 3\text{ m/s}^2$. Quel est le rayon de courbure de sa trajectoire ?`,
              [r`$9\text{ m}$`, r`$12\text{ m}$`, r`$7{,}2\text{ m}$`, r`$1{,}5\text{ m}$`],
              0, r`$a_N = \sqrt{25 - 9} = 4\text{ m/s}^2$, puis $\rho = \frac{v^2}{a_N} = \frac{36}{4} = 9\text{ m}$.`,
              r`Calcule d’abord $a_N$.`)),
          step(4, 'propriete', 'Formule', 'Le rayon de courbure par le produit vectoriel',
            r`Sans passer par $a_T$ : $\vec v\wedge\vec a = v\,\vec T\wedge\frac{v^2}{\rho}\vec N$, d’où $\rho = \frac{\|\vec v\|^3}{\|\vec v\wedge\vec a\|}$. C’est la formule utilisée dans les sujets d’examen quand $\vec v$ et $\vec a$ sont connus en coordonnées.`,
            qcm('lmd_srit_l1_meca_ch2_p2_ex4',
              r`À un instant, un point a $\vec v = (3, 0, 0)$ m/s et $\vec a = (0, 2, 0)$ m/s². Quel est le rayon de courbure $\rho = \frac{\|\vec v\|^3}{\|\vec v\wedge\vec a\|}$ ?`,
              [r`$1{,}5\text{ m}$`, r`$4{,}5\text{ m}$`, r`$13{,}5\text{ m}$`, r`$6\text{ m}$`],
              1, r`$\vec v\wedge\vec a = (0, 0, 6)$, de norme 6. $\|\vec v\|^3 = 27$. $\rho = \frac{27}{6} = 4{,}5\text{ m}$.`,
              r`$\|\vec v\|^3 = 3^3$.`),
            { formula: { name: 'Rayon de courbure', formula: r`\rho = \frac{\|\vec v\|^3}{\|\vec v\wedge\vec a\|}` } }),
          step(5, 'exemple', 'Cas simples', 'Mouvements rectiligne et circulaire',
            r`**Rectiligne** : la direction ne change jamais, $a_N = 0$ (rayon de courbure infini). **Circulaire uniforme** : la norme ne change pas, $a_T = 0$ et $a_N = \frac{v^2}{R}$. **Circulaire varié** : les deux composantes existent.`,
            qcm('lmd_srit_l1_meca_ch2_p2_ex5',
              'Un point matériel a, à chaque instant, une accélération normale nulle (a_N = 0) et une accélération tangentielle non nulle. Quelle est la nature de son mouvement ?',
              ['Circulaire uniforme', 'Rectiligne varié', 'Circulaire varié', 'Hélicoïdal uniforme'],
              1, r`$a_N = 0$ en permanence : la direction de la vitesse ne change pas, la trajectoire est une droite. $a_T \ne 0$ : la norme de la vitesse change. Le mouvement est rectiligne varié.`,
              r`$a_N$ est liée au changement de direction.`)),
          step(6, 'piege', 'Vitesse constante', 'Vitesse constante ne veut pas dire accélération nulle',
            r`Piège : « vitesse constante » veut souvent dire **norme** constante. Sur une trajectoire courbe, la direction change : l’accélération n’est pas nulle, elle est normale. Seul un mouvement rectiligne uniforme a une accélération nulle.`,
            qcm('lmd_srit_l1_meca_ch2_p2_ex6',
              r`Un point parcourt un cercle de rayon $5\text{ m}$ à la vitesse constante (en norme) de $10\text{ m/s}$. Quelle est la norme de son accélération ?`,
              [r`$0\text{ m/s}^2$`, r`$2\text{ m/s}^2$`, r`$50\text{ m/s}^2$`, r`$20\text{ m/s}^2$`],
              3, r`$a_T = 0$ mais $a_N = \frac{v^2}{R} = \frac{100}{5} = 20\text{ m/s}^2$ : $a = 20\text{ m/s}^2$, dirigée vers le centre.`,
              'La direction de la vitesse change en permanence.')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : CHANGEMENT DE RÉFÉRENTIEL
  // ==========================================================================
  {
    id: 'lmd_srit_l1_meca_ch3',
    subjectId: 'lmd_mecanique_point',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 3,
    officialVolumeHours: 6,
    contentVersion: 2,
    source: SOURCE,
    title: 'Composition des mouvements',
    summary: 'Référentiel absolu et relatif, composition des vitesses, vitesse d’entraînement, composition des accélérations, accélération de Coriolis.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_meca_ch3_p1',
        order: 1,
        title: 'Composition des vitesses et des accélérations',
        summary: 'Mouvement absolu, relatif et d’entraînement ; translation et rotation du référentiel relatif ; accélération d’entraînement et de Coriolis.',
        conceptExplanation: r`Un même mouvement paraît différent selon l’observateur : le passager d’un bus et le piéton sur le trottoir ne voient pas la même vitesse. On relie le **mouvement absolu** (dans le référentiel fixe $R$) au **mouvement relatif** (dans le référentiel mobile $R'$) grâce au **mouvement d’entraînement** de $R'$ par rapport à $R$. Pour les accélérations, un terme supplémentaire apparaît si $R'$ tourne : l’**accélération de Coriolis**.`,
        formulas: [
          { name: 'Composition des vitesses', formula: r`\vec v_a = \vec v_r + \vec v_e \quad ; \quad \vec v_e = \vec v(O') + \vec\Omega\wedge\overrightarrow{O'M}` },
          { name: 'Composition des accélérations', formula: r`\vec a_a = \vec a_r + \vec a_e + \vec a_c \quad ; \quad \vec a_c = 2\,\vec\Omega\wedge\vec v_r` },
        ],
        keyRule: r`La vitesse d’entraînement est la vitesse qu’aurait le point s’il était **fixe** dans $R'$.`,
        workedExample: {
          title: 'Sur un manège',
          statement: r`Un manège tourne à $\Omega = 0{,}5\text{ rad/s}$. Un enfant y marche vers l’extérieur à $v_r = 2\text{ m/s}$ ; il est à $r = 4\text{ m}$ du centre. Calcule $v_e$, $a_e$ et $a_c$.`,
          methodSteps: [
            r`$v_e = \Omega r = 0{,}5\times4 = 2\text{ m/s}$ (perpendiculaire au rayon).`,
            r`$a_e = \Omega^2 r = 0{,}25\times4 = 1\text{ m/s}^2$ (vers le centre).`,
            r`$\vec\Omega \perp \vec v_r$ : $a_c = 2\Omega v_r = 2\times0{,}5\times2 = 2\text{ m/s}^2$.`,
          ],
          conclusion: r`$v_e = 2\text{ m/s}$, $a_e = 1\text{ m/s}^2$, $a_c = 2\text{ m/s}^2$.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Référentiels', 'Absolu, relatif, entraînement',
            r`Le **référentiel absolu** $R$ est considéré fixe, le **référentiel relatif** $R'$ bouge par rapport à lui. Le mouvement du point dans $R$ est **absolu**, dans $R'$ il est **relatif**, et le mouvement de $R'$ par rapport à $R$ est le mouvement d’**entraînement**.`,
            qcm('lmd_srit_l1_meca_ch3_p1_ex1',
              'Un passager marche dans l’allée d’un train en marche. On prend le quai comme référentiel absolu et le train comme référentiel relatif. Que représente le mouvement du train par rapport au quai ?',
              ['Le mouvement absolu', 'Le mouvement d’entraînement', 'Le mouvement relatif', 'Le mouvement de Coriolis'],
              1, 'Le mouvement du référentiel relatif (le train) par rapport au référentiel absolu (le quai) est le mouvement d’entraînement.',
              'C’est le train qui « entraîne » le passager.')),
          step(2, 'propriete', 'Translation', 'Composition des vitesses en translation',
            r`Si $R'$ est en **translation** par rapport à $R$, tous ses points ont la même vitesse $\vec v(O')$ : $\vec v_e = \vec v(O')$ et $\vec v_a = \vec v_r + \vec v(O')$. On additionne les vecteurs (pas seulement les normes).`,
            qcm('lmd_srit_l1_meca_ch3_p1_ex2',
              r`Un train roule en ligne droite à $20\text{ m/s}$ par rapport au quai. Un passager marche vers l’avant du train à $1{,}5\text{ m/s}$ par rapport au train. Quelle est sa vitesse par rapport au quai ?`,
              [r`$18{,}5\text{ m/s}$`, r`$20\text{ m/s}$`, r`$21{,}5\text{ m/s}$`, r`$30\text{ m/s}$`],
              2, r`Les deux vitesses ont le même sens : $v_a = v_r + v_e = 1{,}5 + 20 = 21{,}5\text{ m/s}$.`,
              'Vitesse absolue = vitesse relative + vitesse d’entraînement.')),
          step(3, 'methode', 'Rotation', 'La vitesse d’entraînement en rotation',
            r`Si $R'$ tourne à la vitesse angulaire $\vec\Omega$ autour d’un axe passant par $O'$ : $\vec v_e = \vec v(O') + \vec\Omega\wedge\overrightarrow{O'M}$. Pour un manège ($O'$ fixe), un point à la distance $r$ de l’axe a $v_e = \Omega r$, perpendiculaire au rayon.`,
            qcm('lmd_srit_l1_meca_ch3_p1_ex3',
              r`Un manège tourne à $\Omega = 0{,}5\text{ rad/s}$ autour de son axe fixe. Quelle est la vitesse d’entraînement d’un point situé à $r = 4\text{ m}$ de l’axe ?`,
              [r`$8\text{ m/s}$`, r`$0{,}125\text{ m/s}$`, r`$4{,}5\text{ m/s}$`, r`$2\text{ m/s}$`],
              3, r`$v_e = \Omega r = 0{,}5\times4 = 2\text{ m/s}$.`,
              r`Norme de $\vec\Omega\wedge\overrightarrow{O'M}$ quand ils sont perpendiculaires : $\Omega r$.`)),
          step(4, 'propriete', 'Coriolis', 'Composition des accélérations',
            r`$\vec a_a = \vec a_r + \vec a_e + \vec a_c$. L’accélération de **Coriolis** $\vec a_c = 2\,\vec\Omega\wedge\vec v_r$ n’existe que si $R'$ tourne et si le point bouge dans $R'$. Elle dévie les vents sur Terre (cyclones) et les projectiles à longue portée.`,
            qcm('lmd_srit_l1_meca_ch3_p1_ex4',
              r`Un manège tourne à $\Omega = 0{,}5\text{ rad/s}$ (axe vertical). Un enfant y marche en ligne droite vers l’extérieur à $v_r = 2\text{ m/s}$ (horizontalement). Quelle est la norme de l’accélération de Coriolis $\|2\,\vec\Omega\wedge\vec v_r\|$ ?`,
              [r`$2\text{ m/s}^2$`, r`$1\text{ m/s}^2$`, r`$4\text{ m/s}^2$`, r`$0\text{ m/s}^2$`],
              0, r`$\vec\Omega$ (vertical) est perpendiculaire à $\vec v_r$ (horizontal) : $a_c = 2\Omega v_r = 2\times0{,}5\times2 = 2\text{ m/s}^2$.`,
              'Les deux vecteurs sont perpendiculaires : sin 90° = 1.'),
            { formula: { name: 'Accélération de Coriolis', formula: r`\vec a_c = 2\,\vec\Omega\wedge\vec v_r` } }),
          step(5, 'exemple', 'Entraînement', 'L’accélération d’entraînement d’un manège',
            r`Un point **fixe** sur un manège qui tourne uniformément a un mouvement circulaire uniforme : son accélération d’entraînement est centripète, $a_e = \Omega^2 r$, dirigée vers l’axe.`,
            qcm('lmd_srit_l1_meca_ch3_p1_ex5',
              r`Un manège tourne uniformément à $\Omega = 0{,}5\text{ rad/s}$. Quelle est l’accélération d’entraînement d’un point situé à $r = 4\text{ m}$ de l’axe ?`,
              [r`$2\text{ m/s}^2$ vers l’extérieur`, r`$1\text{ m/s}^2$ vers l’axe`, r`$0{,}25\text{ m/s}^2$ vers l’axe`, r`$0\text{ m/s}^2$`],
              1, r`$a_e = \Omega^2 r = 0{,}25\times4 = 1\text{ m/s}^2$, dirigée vers l’axe (centripète).`,
              r`$\Omega^2 = 0{,}25$.`)),
          step(6, 'piege', 'Coriolis nulle', 'Quand l’accélération de Coriolis s’annule',
            r`Piège : $\vec a_c = 2\,\vec\Omega\wedge\vec v_r$ est nulle si le point est **immobile dans $R'$** ($\vec v_r = \vec 0$), si $R'$ est en translation ($\vec\Omega = \vec 0$), ou si $\vec v_r$ est **parallèle** à l’axe de rotation.`,
            qcm('lmd_srit_l1_meca_ch3_p1_ex6',
              r`Un manège tourne à $\Omega = 1\text{ rad/s}$. Un enfant est assis, immobile sur son siège, à $3\text{ m}$ de l’axe. Que vaut son accélération de Coriolis ?`,
              [r`$6\text{ m/s}^2$`, r`$3\text{ m/s}^2$`, r`$0\text{ m/s}^2$`, r`$2\text{ m/s}^2$`],
              2, r`L’enfant est immobile dans le manège : $\vec v_r = \vec 0$, donc $\vec a_c = \vec 0$. (Son accélération d’entraînement, elle, vaut $\Omega^2 r = 3\text{ m/s}^2$.)`,
              'Que vaut sa vitesse relative ?')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : DYNAMIQUE ET ÉNERGIE
  // ==========================================================================
  {
    id: 'lmd_srit_l1_meca_ch4',
    subjectId: 'lmd_mecanique_point',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 4,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: SOURCE,
    title: 'Dynamique du point matériel',
    summary: 'Lois de Newton, forces usuelles, référentiels non galiléens ; travail, puissance, énergie cinétique, forces conservatives et énergie mécanique.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_meca_ch4_p1',
        order: 1,
        title: 'Les lois de Newton',
        summary: 'Principe d’inertie, principe fondamental de la dynamique, actions réciproques, forces usuelles, plan incliné, forces d’inertie.',
        conceptExplanation: r`La dynamique explique le mouvement par ses causes : les **forces**. Les trois lois de Newton s’appliquent dans un **référentiel galiléen** (référentiel terrestre pour des expériences courtes). Dans un référentiel non galiléen (voiture qui freine, manège), on ajoute des **forces d’inertie**.`,
        formulas: [
          { name: 'Principe fondamental de la dynamique', formula: r`m\,\vec a = \sum \vec F` },
          { name: 'Forces usuelles', formula: r`\vec P = m\vec g \quad ; \quad \vec T = -k(\ell - \ell_0)\,\vec u \quad ; \quad \vec f = -c\,\vec v` },
          { name: 'Référentiel non galiléen', formula: r`m\,\vec a_r = \sum\vec F - m\,\vec a_e - m\,\vec a_c` },
        ],
        keyRule: 'Méthode : système, référentiel, bilan des forces, PFD, projection sur des axes bien choisis.',
        workedExample: {
          title: 'Plan incliné sans frottement',
          statement: r`Un solide glisse sans frottement sur un plan incliné de $30°$. Calcule son accélération ($g = 10\text{ m/s}^2$).`,
          methodSteps: [
            r`Forces : poids $\vec P$ et réaction $\vec R$ perpendiculaire au plan.`,
            r`Projection du PFD sur l’axe du plan (vers le bas) : $ma = mg\sin30° + 0$.`,
            r`$a = g\sin30° = 10\times0{,}5 = 5\text{ m/s}^2$ (indépendante de la masse).`,
          ],
          conclusion: r`$a = 5\text{ m/s}^2$.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Inertie', 'Le principe d’inertie',
            r`**Première loi** : dans un référentiel galiléen, un point matériel **isolé** (ou dont les forces se compensent) est soit au repos, soit en mouvement **rectiligne uniforme**. Un référentiel galiléen est justement un référentiel où ce principe est vérifié.`,
            qcm('lmd_srit_l1_meca_ch4_p1_ex1',
              'Dans un référentiel galiléen, un palet glisse sur une glace parfaitement lisse : les forces qui s’exercent sur lui se compensent. Quel est son mouvement ?',
              ['Il ralentit jusqu’à l’arrêt', 'Rectiligne uniforme', 'Circulaire uniforme', 'Uniformément accéléré'],
              1, 'D’après le principe d’inertie, si les forces se compensent, le palet garde sa vitesse : mouvement rectiligne uniforme.',
              'Sans frottement, rien ne le freine.')),
          step(2, 'propriete', 'PFD', 'Le principe fondamental de la dynamique',
            r`**Deuxième loi** : $m\,\vec a = \sum\vec F$. La somme des forces donne l’accélération, pas la vitesse. Une force de $1\text{ N}$ donne une accélération de $1\text{ m/s}^2$ à une masse de $1\text{ kg}$.`,
            qcm('lmd_srit_l1_meca_ch4_p1_ex2',
              r`Un chariot de masse $m = 2\text{ kg}$ est soumis à une force résultante horizontale de $10\text{ N}$. Quelle est son accélération ?`,
              [r`$20\text{ m/s}^2$`, r`$0{,}2\text{ m/s}^2$`, r`$12\text{ m/s}^2$`, r`$5\text{ m/s}^2$`],
              3, r`$a = \frac{F}{m} = \frac{10}{2} = 5\text{ m/s}^2$.`,
              r`$a = \frac{\sum F}{m}$.`)),
          step(3, 'exemple', 'Forces', 'Les forces usuelles',
            r`**Poids** $\vec P = m\vec g$. **Tension d’un ressort** de raideur $k$ : norme $k|\ell - \ell_0|$, elle ramène vers la longueur à vide $\ell_0$. **Frottement fluide** à faible vitesse : $\vec f = -c\,\vec v$. **Réaction** d’un support : perpendiculaire au support s’il n’y a pas de frottement.`,
            qcm('lmd_srit_l1_meca_ch4_p1_ex3',
              r`Un ressort de raideur $k = 100\text{ N/m}$ et de longueur à vide $\ell_0 = 20\text{ cm}$ est étiré jusqu’à $\ell = 25\text{ cm}$. Quelle est la norme de sa tension ?`,
              [r`$5\text{ N}$`, r`$25\text{ N}$`, r`$500\text{ N}$`, r`$0{,}05\text{ N}$`],
              0, r`$T = k(\ell - \ell_0) = 100\times0{,}05 = 5\text{ N}$ (allongement $5\text{ cm} = 0{,}05\text{ m}$).`,
              'Convertis l’allongement en mètres.')),
          step(4, 'methode', 'Plan incliné', 'Projeter le PFD',
            r`Méthode : choisis un axe dans la direction du mouvement. Sur un plan incliné d’angle $\alpha$ sans frottement, la réaction est perpendiculaire au plan et ne travaille pas ; la projection du poids sur le plan vaut $mg\sin\alpha$, d’où $a = g\sin\alpha$.`,
            qcm('lmd_srit_l1_meca_ch4_p1_ex4',
              r`Un solide glisse sans frottement sur un plan incliné d’angle $\alpha = 30°$, avec $g = 10\text{ m/s}^2$. Quelle est son accélération $a = g\sin\alpha$ ?`,
              [r`$10\text{ m/s}^2$`, r`$8{,}7\text{ m/s}^2$`, r`$5\text{ m/s}^2$`, r`$0\text{ m/s}^2$`],
              2, r`$a = 10\times\sin30° = 10\times0{,}5 = 5\text{ m/s}^2$, quelle que soit la masse.`,
              r`$\sin30° = 0{,}5$.`)),
          step(5, 'propriete', 'Non galiléen', 'Les forces d’inertie',
            r`Dans un référentiel $R'$ **non galiléen**, on écrit $m\,\vec a_r = \sum\vec F + \vec F_{ie} + \vec F_{ic}$, avec la force d’inertie d’entraînement $\vec F_{ie} = -m\,\vec a_e$ et la force de Coriolis $\vec F_{ic} = -m\,\vec a_c$. Exemple : dans une voiture qui freine, on est « projeté » vers l’avant.`,
            qcm('lmd_srit_l1_meca_ch4_p1_ex5',
              r`Une voiture freine en ligne droite avec une décélération de $4\text{ m/s}^2$. Dans le référentiel de la voiture, quelle force d’inertie d’entraînement subit un objet de $0{,}5\text{ kg}$ posé sur le siège ?`,
              [r`$2\text{ N}$ vers l’arrière`, r`$8\text{ N}$ vers l’avant`, r`$2\text{ N}$ vers l’avant`, r`$0\text{ N}$`],
              2, r`$\vec a_e$ est dirigée vers l’arrière (la voiture freine), donc $\vec F_{ie} = -m\,\vec a_e$ est vers l’avant, de norme $0{,}5\times4 = 2\text{ N}$.`,
              r`La force d’inertie est opposée à l’accélération de la voiture.`)),
          step(6, 'piege', 'Actions réciproques', 'Les deux forces s’appliquent à deux corps différents',
            r`**Troisième loi** : si A exerce $\vec F_{A/B}$ sur B, alors B exerce $\vec F_{B/A} = -\vec F_{A/B}$ sur A. Piège : ces deux forces ne se compensent **jamais** entre elles, car elles s’appliquent à des corps différents.`,
            qcm('lmd_srit_l1_meca_ch4_p1_ex6',
              'La Terre attire une pomme avec une force de 2 N. Quelle force la pomme exerce-t-elle sur la Terre ?',
              ['Aucune, la pomme est trop légère', 'Une force de 2 N dirigée vers la pomme', 'Une force de 2 N vers le bas', 'Une force très petite, proportionnelle à la masse de la pomme'],
              1, 'Principe des actions réciproques : la pomme attire la Terre avec une force de même norme (2 N), de sens opposé, donc dirigée vers la pomme. Son effet sur la Terre est imperceptible car la masse de la Terre est énorme.',
              'Même norme, sens opposé.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_meca_ch4_p2',
        order: 2,
        title: 'Travail, puissance et énergie',
        summary: 'Travail d’une force, puissance, théorème de l’énergie cinétique, forces conservatives et énergie potentielle, conservation de l’énergie mécanique.',
        conceptExplanation: r`Le **travail** d’une force mesure l’énergie qu’elle transfère au point lors d’un déplacement. Le **théorème de l’énergie cinétique** relie ce travail à la variation de vitesse, sans avoir à résoudre d’équation différentielle. Pour une force **conservative**, le travail ne dépend pas du chemin suivi : elle dérive d’une **énergie potentielle**.`,
        formulas: [
          { name: 'Travail et puissance', formula: r`W_{A\to B} = \int_A^B \vec F\cdot d\vec\ell \quad ; \quad P = \vec F\cdot\vec v` },
          { name: 'Théorème de l’énergie cinétique', formula: r`\Delta E_c = \tfrac12 m v_B^2 - \tfrac12 m v_A^2 = \sum W` },
          { name: 'Force conservative', formula: r`\vec F = -\overrightarrow{\text{grad}}\,E_p \quad \Leftrightarrow \quad \frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x}\ \text{(dans le plan)}` },
        ],
        keyRule: r`Si toutes les forces qui travaillent sont conservatives, l’énergie mécanique $E_m = E_c + E_p$ reste constante.`,
        workedExample: {
          title: 'Le champ de forces est-il conservatif ?',
          statement: r`On considère le champ $\vec F = (x - ay)\,\vec i + (3y - 2x)\,\vec j$. Pour quelle valeur de $a$ dérive-t-il d’une énergie potentielle ?`,
          methodSteps: [
            r`$\frac{\partial F_x}{\partial y} = -a$ et $\frac{\partial F_y}{\partial x} = -2$.`,
            r`Condition : $-a = -2$, donc $a = 2$.`,
            r`Alors $E_p(x, y) = -\frac{x^2}{2} + 2xy - \frac{3y^2}{2}$ (+ constante) : on vérifie $-\frac{\partial E_p}{\partial x} = x - 2y$ et $-\frac{\partial E_p}{\partial y} = 3y - 2x$.`,
          ],
          conclusion: r`Pour $a = 2$, le travail de $\vec F$ ne dépend plus du chemin.`,
        },
        structuredSteps: [
          step(1, 'definition', 'Travail', 'Le travail d’une force constante',
            r`Pour une force **constante** sur un déplacement rectiligne de A à B : $W = \vec F\cdot\overrightarrow{AB}$ (en joules). Il est **moteur** ($W > 0$) si la force aide le mouvement, **résistant** ($W < 0$) si elle s’y oppose, nul si elle est perpendiculaire au déplacement.`,
            qcm('lmd_srit_l1_meca_ch4_p2_ex1',
              r`Une force constante $\vec F = (2, 1)$ N déplace son point d’application de A à B avec $\overrightarrow{AB} = (3, 4)$ m. Quel est son travail $W = \vec F\cdot\overrightarrow{AB}$ ?`,
              [r`$10\text{ J}$`, r`$11\text{ J}$`, r`$5\text{ J}$`, r`$(6, 4)\text{ J}$`],
              0, r`$W = 2\times3 + 1\times4 = 6 + 4 = 10\text{ J}$.`,
              'C’est un produit scalaire.')),
          step(2, 'propriete', 'Puissance', 'La puissance d’une force',
            r`La puissance est le travail fourni par seconde : $P = \frac{\delta W}{dt} = \vec F\cdot\vec v$ (en watts). Une force perpendiculaire à la vitesse (réaction sans frottement, force magnétique) a une puissance nulle.`,
            qcm('lmd_srit_l1_meca_ch4_p2_ex2',
              r`Un moteur tire un chariot avec une force de $50\text{ N}$ parallèle à sa vitesse de $4\text{ m/s}$. Quelle puissance fournit-il ?`,
              [r`$12{,}5\text{ W}$`, r`$54\text{ W}$`, r`$200\text{ W}$`, r`$46\text{ W}$`],
              2, r`$P = Fv = 50\times4 = 200\text{ W}$ (force et vitesse dans le même sens).`,
              r`$P = \vec F\cdot\vec v$.`)),
          step(3, 'methode', 'Énergie cinétique', 'Le théorème de l’énergie cinétique',
            r`Dans un référentiel galiléen : $\frac12 m v_B^2 - \frac12 m v_A^2 = \sum W_{A\to B}$ (somme des travaux de **toutes** les forces). Méthode rapide pour trouver une vitesse sans calculer l’accélération.`,
            qcm('lmd_srit_l1_meca_ch4_p2_ex3',
              r`Un objet de masse $2\text{ kg}$, initialement au repos, reçoit un travail total de $100\text{ J}$. Quelle est sa vitesse finale ?`,
              [r`$50\text{ m/s}$`, r`$100\text{ m/s}$`, r`$7{,}1\text{ m/s}$`, r`$10\text{ m/s}$`],
              3, r`$\frac12\times2\times v^2 = 100$, donc $v^2 = 100$ et $v = 10\text{ m/s}$.`,
              r`$\frac12 m v^2 = W$ quand on part du repos.`)),
          step(4, 'methode', 'Conservative', 'Reconnaître une force conservative',
            r`Une force est **conservative** si son travail ne dépend que des points de départ et d’arrivée. Dans le plan, $\vec F = F_x\vec i + F_y\vec j$ est conservative si $\frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x}$ (rotationnel nul). Elle dérive alors d’une énergie potentielle : $\vec F = -\overrightarrow{\text{grad}}\,E_p$.`,
            qcm('lmd_srit_l1_meca_ch4_p2_ex4',
              r`On considère le champ de forces $\vec F = (x - ay)\,\vec i + (3y - 2x)\,\vec j$. Pour quelle valeur de $a$ dérive-t-il d’une énergie potentielle (condition $\frac{\partial F_x}{\partial y} = \frac{\partial F_y}{\partial x}$) ?`,
              [r`$a = 3$`, r`$a = 2$`, r`$a = -2$`, r`$a = 0$`],
              1, r`$\frac{\partial F_x}{\partial y} = -a$ et $\frac{\partial F_y}{\partial x} = -2$ : il faut $-a = -2$, soit $a = 2$.`,
              r`Dérive $F_x$ par rapport à $y$ et $F_y$ par rapport à $x$.`)),
          step(5, 'exemple', 'Énergie mécanique', 'La conservation de l’énergie mécanique',
            r`Si seules des forces conservatives travaillent (poids, ressort), $E_m = E_c + E_p$ est constante. Pour une chute libre depuis la hauteur $h$ sans vitesse initiale : $mgh = \frac12 m v^2$, donc $v = \sqrt{2gh}$.`,
            qcm('lmd_srit_l1_meca_ch4_p2_ex5',
              r`Une bille est lâchée sans vitesse d’une hauteur $h = 5\text{ m}$ ; on néglige les frottements et $g = 10\text{ m/s}^2$. Quelle est sa vitesse en arrivant au sol, $v = \sqrt{2gh}$ ?`,
              [r`$10\text{ m/s}$`, r`$50\text{ m/s}$`, r`$100\text{ m/s}$`, r`$7{,}1\text{ m/s}$`],
              0, r`$v = \sqrt{2\times10\times5} = \sqrt{100} = 10\text{ m/s}$.`,
              r`$2\times10\times5 = 100$.`),
            { formula: { name: 'Énergie mécanique', formula: r`E_m = \tfrac12 m v^2 + E_p = \text{constante}` } }),
          step(6, 'piege', 'Chemin', 'Le travail sur un chemin fermé',
            r`Piège : le travail d’une force **non** conservative (frottement) dépend du chemin, et n’est pas nul sur un aller-retour. Mais pour une force **conservative**, le travail sur un chemin **fermé** (retour au point de départ) est toujours nul : $W = E_p(A) - E_p(A) = 0$.`,
            qcm('lmd_srit_l1_meca_ch4_p2_ex6',
              r`Une particule fait un tour complet d’un cercle de rayon $2\text{ m}$ dans un champ de forces CONSERVATIF. Quel travail ce champ lui fournit-il sur ce tour ?`,
              [r`$4\pi\text{ J}$`, 'Il dépend du sens de parcours', r`$0\text{ J}$`, 'On ne peut pas le savoir sans l’expression de la force'],
              2, r`Pour une force conservative, $W_{A\to A} = E_p(A) - E_p(A) = 0$ sur tout chemin fermé.`,
              'Le point de départ et le point d’arrivée sont les mêmes.')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 5 : FORCES CENTRALES
  // ==========================================================================
  {
    id: 'lmd_srit_l1_meca_ch5',
    subjectId: 'lmd_mecanique_point',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 5,
    officialVolumeHours: 6,
    contentVersion: 2,
    source: SOURCE,
    title: 'Moment cinétique et forces centrales',
    summary: 'Moment cinétique, théorème du moment cinétique, mouvement plan, loi des aires, constante des aires, formules de Binet.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_meca_ch5_p1',
        order: 1,
        title: 'Moment cinétique, loi des aires et formules de Binet',
        summary: 'Moment cinétique, conservation pour une force centrale, mouvement plan, constante des aires, vitesse aréolaire, formules de Binet.',
        conceptExplanation: r`Une force est **centrale** si elle est toujours dirigée vers un même point O (gravitation, force électrique entre deux charges). Son moment par rapport à O est nul, donc le **moment cinétique** $\vec L_O$ se conserve : le mouvement est **plan** et suit la **loi des aires** (deuxième loi de Kepler). Les **formules de Binet** expriment alors la vitesse et l’accélération en fonction de $u = \frac{1}{r}$ et de $\theta$ seulement.`,
        formulas: [
          { name: 'Moment cinétique', formula: r`\vec L_O = \overrightarrow{OM}\wedge m\vec v \quad ; \quad \frac{d\vec L_O}{dt} = \overrightarrow{OM}\wedge\vec F` },
          { name: 'Constante des aires', formula: r`C = r^2\dot\theta \quad ; \quad \frac{dA}{dt} = \frac{C}{2}` },
          { name: 'Formules de Binet', formula: r`v^2 = C^2\left(u^2 + \left(\frac{du}{d\theta}\right)^2\right) \quad ; \quad \vec a = -C^2u^2\left(u + \frac{d^2u}{d\theta^2}\right)\vec e_r` },
        ],
        keyRule: 'Force centrale ⇒ moment cinétique constant ⇒ mouvement plan et loi des aires.',
        workedExample: {
          title: 'Vitesse à l’aphélie',
          statement: r`Un satellite passe au point le plus proche de O à $r_1 = 1$ (unité de distance) avec $v_1 = 30\text{ km/s}$. Au point le plus éloigné, $r_2 = 1{,}5$. Quelle est sa vitesse $v_2$ ?`,
          methodSteps: [
            r`Aux points extrêmes, la vitesse est perpendiculaire au rayon : $L = m r v$.`,
            r`Conservation du moment cinétique : $r_1 v_1 = r_2 v_2$.`,
            r`$v_2 = \frac{r_1 v_1}{r_2} = \frac{30}{1{,}5} = 20\text{ km/s}$.`,
          ],
          conclusion: r`$v_2 = 20\text{ km/s}$ : le satellite est plus lent loin de O.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Loi des aires', svgContent: SVG_AIRES },
        structuredSteps: [
          step(1, 'definition', 'Moment cinétique', 'Le moment cinétique',
            r`Le moment cinétique d’un point M par rapport à O est $\vec L_O = \overrightarrow{OM}\wedge m\vec v$. Quand $\vec v$ est perpendiculaire à $\overrightarrow{OM}$ (cercle, ou points extrêmes d’une orbite), sa norme vaut simplement $L = m\,r\,v$.`,
            qcm('lmd_srit_l1_meca_ch5_p1_ex1',
              r`Un point de masse $m = 2\text{ kg}$ se trouve à $r = 3\text{ m}$ de O, avec une vitesse de $4\text{ m/s}$ perpendiculaire à $\overrightarrow{OM}$. Quelle est la norme de son moment cinétique par rapport à O ?`,
              [r`$9\text{ kg·m}^2/\text{s}$`, r`$6\text{ kg·m}^2/\text{s}$`, r`$12\text{ kg·m}^2/\text{s}$`, r`$24\text{ kg·m}^2/\text{s}$`],
              3, r`$L = m r v = 2\times3\times4 = 24\text{ kg·m}^2/\text{s}$.`,
              r`Vitesse perpendiculaire au rayon : $L = mrv$.`)),
          step(2, 'propriete', 'Conservation', 'Le moment cinétique d’une force centrale se conserve',
            r`Théorème du moment cinétique : $\frac{d\vec L_O}{dt} = \overrightarrow{OM}\wedge\vec F$. Pour une force centrale, $\vec F$ est colinéaire à $\overrightarrow{OM}$ : le produit vectoriel est nul et $\vec L_O$ est **constant**. Comme $\overrightarrow{OM}$ reste perpendiculaire à ce vecteur fixe, le mouvement est **plan**.`,
            qcm('lmd_srit_l1_meca_ch5_p1_ex2',
              r`Un point matériel n’est soumis qu’à une force centrale de centre O. Que peut-on dire de son moment cinétique $\vec L_O$ et de sa trajectoire ?`,
              [r`$\vec L_O$ est constant et la trajectoire est plane`, r`$\vec L_O$ est nul et la trajectoire est une droite`, r`$\vec L_O$ augmente et la trajectoire est une spirale`, r`$\vec L_O$ change de sens à chaque tour`],
              0, r`$\overrightarrow{OM}\wedge\vec F = \vec 0$ pour une force centrale, donc $\vec L_O$ est constant ; le mouvement reste dans le plan perpendiculaire à $\vec L_O$ passant par O.`,
              r`Que vaut $\overrightarrow{OM}\wedge\vec F$ quand les deux vecteurs sont colinéaires ?`)),
          step(3, 'propriete', 'Loi des aires', 'La constante des aires',
            r`En polaires, $L = m r^2\dot\theta$. Sa conservation donne la **constante des aires** $C = r^2\dot\theta$. Le rayon $OM$ balaie des aires égales pendant des durées égales : la **vitesse aréolaire** vaut $\frac{dA}{dt} = \frac{C}{2}$.`,
            qcm('lmd_srit_l1_meca_ch5_p1_ex3',
              r`À un instant, un point soumis à une force centrale est à $r = 2\text{ m}$ de O avec $\dot\theta = 3\text{ rad/s}$. Quelle est sa vitesse aréolaire $\frac{dA}{dt} = \frac{r^2\dot\theta}{2}$ ?`,
              [r`$12\text{ m}^2/\text{s}$`, r`$3\text{ m}^2/\text{s}$`, r`$6\text{ m}^2/\text{s}$`, r`$18\text{ m}^2/\text{s}$`],
              2, r`$C = r^2\dot\theta = 4\times3 = 12\text{ m}^2/\text{s}$ et $\frac{dA}{dt} = \frac{C}{2} = 6\text{ m}^2/\text{s}$.`,
              'Calcule d’abord C, puis divise par 2.'),
            { formula: { name: 'Constante des aires', formula: r`C = r^2\dot\theta = \text{constante}` } }),
          step(4, 'methode', 'Points extrêmes', 'Comparer les vitesses sur une orbite',
            r`Aux points le plus proche et le plus éloigné de O, la vitesse est perpendiculaire au rayon : $C = r v$. La conservation donne $r_1 v_1 = r_2 v_2$ : le point va **plus vite près de O**.`,
            qcm('lmd_srit_l1_meca_ch5_p1_ex4',
              r`Une planète passe au plus près de son étoile à $r_1 = 1\text{ ua}$ avec $v_1 = 30\text{ km/s}$. Au plus loin, elle est à $r_2 = 1{,}5\text{ ua}$. Quelle est alors sa vitesse ($r_1 v_1 = r_2 v_2$) ?`,
              [r`$45\text{ km/s}$`, r`$20\text{ km/s}$`, r`$30\text{ km/s}$`, r`$13{,}3\text{ km/s}$`],
              1, r`$v_2 = \frac{r_1 v_1}{r_2} = \frac{1\times30}{1{,}5} = 20\text{ km/s}$.`,
              'Plus loin, plus lent.')),
          step(5, 'exemple', 'Binet', 'Les formules de Binet',
            r`Avec $u = \frac{1}{r}$, on élimine le temps : $v^2 = C^2\left(u^2 + \left(\frac{du}{d\theta}\right)^2\right)$ et $\vec a = -C^2u^2\left(u + \frac{d^2u}{d\theta^2}\right)\vec e_r$. Si l’on connaît la trajectoire $r(\theta)$, on en déduit la force. Pour un cercle ($u$ constant), $a = C^2u^3 = \frac{C^2}{R^3}$.`,
            qcm('lmd_srit_l1_meca_ch5_p1_ex5',
              r`Un point décrit un cercle de rayon $R = 2\text{ m}$ autour de O avec la constante des aires $C = 6\text{ m}^2/\text{s}$. D’après Binet, son accélération (vers O) vaut $a = \frac{C^2}{R^3}$. Combien vaut-elle ?`,
              [r`$9\text{ m/s}^2$`, r`$18\text{ m/s}^2$`, r`$4{,}5\text{ m/s}^2$`, r`$1{,}5\text{ m/s}^2$`],
              2, r`$a = \frac{36}{8} = 4{,}5\text{ m/s}^2$. Vérification : $v = \frac{C}{R} = 3\text{ m/s}$ et $\frac{v^2}{R} = \frac{9}{2} = 4{,}5\text{ m/s}^2$.`,
              r`$C^2 = 36$ et $R^3 = 8$.`)),
          step(6, 'piege', 'Vitesse variable', 'Aires constantes ne veut pas dire vitesse constante',
            r`Piège : la loi des aires dit que l’**aire balayée** par seconde est constante, pas la vitesse. Sur une orbite elliptique, le rayon change : le point va vite quand il est près de O (balayage « court et large ») et lentement quand il est loin (« long et étroit »).`,
            qcm('lmd_srit_l1_meca_ch5_p1_ex6',
              'Une comète décrit une orbite elliptique très allongée autour du Soleil. Où sa vitesse est-elle la plus grande ?',
              ['Au point le plus éloigné du Soleil', 'Elle est la même partout (loi des aires)', 'Au point le plus proche du Soleil', 'Au milieu de l’orbite'],
              2, r`$r v_\perp = C$ est constant : quand $r$ est minimal, la vitesse est maximale. La comète est la plus rapide au plus près du Soleil.`,
              r`Si $r$ diminue, que doit faire $v$ pour garder $rv$ constant ?`)),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 6 : OSCILLATEURS À UN DEGRÉ DE LIBERTÉ
  // ==========================================================================
  {
    id: 'lmd_srit_l1_meca_ch6',
    subjectId: 'lmd_mecanique_point',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 6,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: SOURCE,
    title: 'Oscillateurs à un degré de liberté',
    summary: 'Oscillateur harmonique masse-ressort, énergie, associations de ressorts ; oscillations amorties (régimes), oscillations forcées et résonance.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_meca_ch6_p1',
        order: 1,
        title: 'L’oscillateur harmonique',
        summary: 'Équation du mouvement, pulsation et période propres, solution et conditions initiales, énergie, ressorts en série et en parallèle.',
        conceptExplanation: r`Une masse $m$ accrochée à un ressort de raideur $k$, écartée de sa position d’équilibre puis lâchée, oscille sans fin s’il n’y a pas de frottement. Son mouvement est **sinusoïdal** : c’est l’**oscillateur harmonique**, modèle de toutes les petites vibrations (structures, circuits LC, molécules).`,
        formulas: [
          { name: 'Équation du mouvement', formula: r`m\ddot x + kx = 0 \quad ; \quad \omega_0 = \sqrt{\frac{k}{m}} \quad ; \quad T_0 = \frac{2\pi}{\omega_0}` },
          { name: 'Solution', formula: r`x(t) = X_m\sin(\omega_0 t + \varphi) \quad ; \quad X_m = \sqrt{x_0^2 + \left(\frac{v_0}{\omega_0}\right)^2}` },
          { name: 'Énergie mécanique', formula: r`E_m = \tfrac12 m\dot x^2 + \tfrac12 kx^2 = \tfrac12 kX_m^2` },
          { name: 'Ressorts associés', formula: r`\text{parallèle : } k_{eq} = k_1 + k_2 \quad ; \quad \text{série : } \frac{1}{k_{eq}} = \frac{1}{k_1} + \frac{1}{k_2}` },
        ],
        keyRule: 'La période propre ne dépend pas de l’amplitude (isochronisme), seulement de m et de k.',
        workedExample: {
          title: 'Amplitude à partir des conditions initiales',
          statement: r`Un oscillateur ($\omega_0 = 10\text{ rad/s}$) part de $x_0 = 3\text{ cm}$ avec $v_0 = 0{,}4\text{ m/s}$. Calcule l’amplitude.`,
          methodSteps: [
            r`$\frac{v_0}{\omega_0} = \frac{0{,}4}{10} = 0{,}04\text{ m}$.`,
            r`$X_m = \sqrt{0{,}03^2 + 0{,}04^2} = \sqrt{0{,}0025} = 0{,}05\text{ m}$.`,
          ],
          conclusion: r`$X_m = 5\text{ cm}$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Oscillateur masse-ressort horizontal', svgContent: SVG_RESSORT },
        structuredSteps: [
          step(1, 'definition', 'Pulsation propre', 'L’équation de l’oscillateur',
            r`Avec $x$ l’écart à l’équilibre, le PFD donne $m\ddot x = -kx$, soit $\ddot x + \omega_0^2 x = 0$ avec la **pulsation propre** $\omega_0 = \sqrt{\frac{k}{m}}$ (en rad/s). Plus le ressort est raide ou la masse légère, plus ça oscille vite.`,
            qcm('lmd_srit_l1_meca_ch6_p1_ex1',
              r`Une masse $m = 0{,}5\text{ kg}$ est accrochée à un ressort de raideur $k = 50\text{ N/m}$. Quelle est sa pulsation propre $\omega_0 = \sqrt{\frac{k}{m}}$ ?`,
              [r`$100\text{ rad/s}$`, r`$25\text{ rad/s}$`, r`$5\text{ rad/s}$`, r`$10\text{ rad/s}$`],
              3, r`$\omega_0 = \sqrt{\frac{50}{0{,}5}} = \sqrt{100} = 10\text{ rad/s}$.`,
              r`$\frac{50}{0{,}5} = 100$.`)),
          step(2, 'propriete', 'Période', 'Période et fréquence propres',
            r`La période propre est $T_0 = \frac{2\pi}{\omega_0} = 2\pi\sqrt{\frac{m}{k}}$ (en secondes) et la fréquence $f_0 = \frac{1}{T_0}$ (en hertz).`,
            qcm('lmd_srit_l1_meca_ch6_p1_ex2',
              r`Un oscillateur a une pulsation propre $\omega_0 = 10\text{ rad/s}$. Quelle est sa période propre $T_0 = \frac{2\pi}{\omega_0}$ ?`,
              [r`$0{,}63\text{ s}$`, r`$1{,}6\text{ s}$`, r`$62{,}8\text{ s}$`, r`$0{,}1\text{ s}$`],
              0, r`$T_0 = \frac{2\pi}{10} \approx \frac{6{,}28}{10} = 0{,}63\text{ s}$.`,
              r`$2\pi \approx 6{,}28$.`)),
          step(3, 'methode', 'Amplitude', 'Trouver l’amplitude avec les conditions initiales',
            r`La solution générale est $x(t) = x_0\cos\omega_0 t + \frac{v_0}{\omega_0}\sin\omega_0 t$, qu’on écrit aussi $X_m\sin(\omega_0 t + \varphi)$ avec $X_m = \sqrt{x_0^2 + \left(\frac{v_0}{\omega_0}\right)^2}$.`,
            qcm('lmd_srit_l1_meca_ch6_p1_ex3',
              r`Un oscillateur de pulsation $\omega_0 = 10\text{ rad/s}$ part de $x_0 = 0{,}03\text{ m}$ avec la vitesse $v_0 = 0{,}4\text{ m/s}$. Quelle est son amplitude $X_m = \sqrt{x_0^2 + (v_0/\omega_0)^2}$ ?`,
              [r`$0{,}07\text{ m}$`, r`$0{,}05\text{ m}$`, r`$0{,}03\text{ m}$`, r`$0{,}43\text{ m}$`],
              1, r`$\frac{v_0}{\omega_0} = 0{,}04\text{ m}$, donc $X_m = \sqrt{0{,}0009 + 0{,}0016} = \sqrt{0{,}0025} = 0{,}05\text{ m}$.`,
              'Triangle 3-4-5.')),
          step(4, 'exemple', 'Énergie', 'L’énergie se conserve',
            r`Sans frottement, l’énergie passe de la forme potentielle (ressort tendu, $\frac12 kx^2$) à la forme cinétique (masse rapide, $\frac12 m\dot x^2$) et inversement, mais le total reste $E_m = \frac12 kX_m^2$. Aux extrémités la vitesse est nulle ; au centre elle est maximale : $v_{\max} = \omega_0 X_m$.`,
            qcm('lmd_srit_l1_meca_ch6_p1_ex4',
              r`Un oscillateur masse-ressort a une raideur $k = 50\text{ N/m}$ et une amplitude $X_m = 0{,}1\text{ m}$. Quelle est son énergie mécanique $E_m = \frac12 kX_m^2$ ?`,
              [r`$2{,}5\text{ J}$`, r`$5\text{ J}$`, r`$0{,}25\text{ J}$`, r`$0{,}5\text{ J}$`],
              2, r`$E_m = \frac12\times50\times0{,}01 = 0{,}25\text{ J}$.`,
              r`$X_m^2 = 0{,}01$.`)),
          step(5, 'methode', 'Associations', 'Ressorts en parallèle et en série',
            r`En **parallèle**, les ressorts ont le même allongement : les raideurs s’ajoutent, $k_{eq} = k_1 + k_2$. En **série**, ils subissent la même force : $\frac{1}{k_{eq}} = \frac{1}{k_1} + \frac{1}{k_2}$ (le ressort équivalent est plus souple que chacun).`,
            qcm('lmd_srit_l1_meca_ch6_p1_ex5',
              r`Deux ressorts de raideurs $k_1 = 100\text{ N/m}$ et $k_2 = 300\text{ N/m}$ sont montés en SÉRIE. Quelle est la raideur équivalente ?`,
              [r`$400\text{ N/m}$`, r`$200\text{ N/m}$`, r`$133\text{ N/m}$`, r`$75\text{ N/m}$`],
              3, r`$\frac{1}{k_{eq}} = \frac{1}{100} + \frac{1}{300} = \frac{4}{300}$, donc $k_{eq} = 75\text{ N/m}$ (plus petite que chacune).`,
              'En série, ce sont les inverses qui s’ajoutent.')),
          step(6, 'piege', 'Isochronisme', 'La période ne dépend pas de l’amplitude',
            r`Piège : écarter plus la masse ne change **pas** la période (isochronisme) ; elle oscille plus loin mais plus vite. Seules $m$ et $k$ comptent : $T_0 = 2\pi\sqrt{\frac{m}{k}}$. Multiplier la masse par 4 multiplie la période par $\sqrt4 = 2$.`,
            qcm('lmd_srit_l1_meca_ch6_p1_ex6',
              r`Un oscillateur masse-ressort a une période $T_0 = 0{,}5\text{ s}$. On remplace la masse par une masse 4 fois plus grande (même ressort) et on double l’amplitude. Quelle est la nouvelle période ?`,
              [r`$1\text{ s}$`, r`$2\text{ s}$`, r`$0{,}5\text{ s}$`, r`$4\text{ s}$`],
              0, r`$T_0 \propto\sqrt m$ : avec une masse 4 fois plus grande, la période est multipliée par 2, soit $1\text{ s}$. L’amplitude n’a aucun effet.`,
              'L’amplitude ne compte pas.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_meca_ch6_p2',
        order: 2,
        title: 'Oscillations amorties et forcées',
        summary: 'Frottement visqueux, amortissement critique et taux d’amortissement, régimes pseudo-périodique, critique et apériodique, oscillations forcées et résonance.',
        conceptExplanation: r`Dans la réalité, un frottement **visqueux** $-c\dot x$ dissipe l’énergie : les oscillations s’amortissent. Selon la valeur du **taux d’amortissement** $\zeta$, la masse oscille en s’atténuant, revient le plus vite possible, ou revient lentement sans osciller. Si une force périodique l’excite, la masse oscille à la fréquence imposée, avec une amplitude très grande près de la **résonance**.`,
        formulas: [
          { name: 'Équation amortie', formula: r`m\ddot x + c\dot x + kx = 0 \quad ; \quad c_c = 2\sqrt{km} = 2m\omega_0 \quad ; \quad \zeta = \frac{c}{c_c}` },
          { name: 'Pseudo-pulsation (ζ < 1)', formula: r`\omega = \omega_0\sqrt{1 - \zeta^2} \quad ; \quad x(t) = Xe^{-\zeta\omega_0 t}\sin(\omega t + \varphi)` },
          { name: 'Amplitude forcée', formula: r`X = \frac{F_0}{\sqrt{(k - m\Omega^2)^2 + (c\Omega)^2}}` },
        ],
        keyRule: r`$\zeta < 1$ : pseudo-périodique ; $\zeta = 1$ : critique (retour le plus rapide sans oscillation) ; $\zeta > 1$ : apériodique.`,
        workedExample: {
          title: 'Amplitude à la résonance',
          statement: r`$m = 1\text{ kg}$, $k = 100\text{ N/m}$, $c = 4\text{ N·s/m}$, force $F_0\sin\Omega t$ avec $F_0 = 8\text{ N}$ et $\Omega = 10\text{ rad/s}$. Calcule l’amplitude.`,
          methodSteps: [
            r`$\omega_0 = \sqrt{100} = 10\text{ rad/s}$ : on excite à la pulsation propre, donc $k - m\Omega^2 = 100 - 100 = 0$.`,
            r`$X = \frac{F_0}{c\Omega} = \frac{8}{4\times10} = 0{,}2\text{ m}$.`,
            r`Déplacement statique sous $F_0$ : $\frac{F_0}{k} = 0{,}08\text{ m}$. Facteur d’amplification : $\frac{0{,}2}{0{,}08} = 2{,}5 = \frac{1}{2\zeta}$ avec $\zeta = 0{,}2$.`,
          ],
          conclusion: r`$X = 0{,}2\text{ m}$, 2,5 fois le déplacement statique.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Oscillations amorties', svgContent: SVG_AMORTI },
        structuredSteps: [
          step(1, 'definition', 'Amortissement', 'L’amortissement critique',
            r`Le frottement visqueux $\vec f = -c\,\dot x\,\vec u$ ajoute un terme à l’équation : $m\ddot x + c\dot x + kx = 0$. On le compare à l’**amortissement critique** $c_c = 2\sqrt{km}$ : le **taux d’amortissement** est $\zeta = \frac{c}{c_c}$ (sans unité).`,
            qcm('lmd_srit_l1_meca_ch6_p2_ex1',
              r`Un oscillateur a une masse $m = 1\text{ kg}$ et une raideur $k = 100\text{ N/m}$. Quel est son coefficient d’amortissement critique $c_c = 2\sqrt{km}$ ?`,
              [r`$10\text{ N·s/m}$`, r`$20\text{ N·s/m}$`, r`$200\text{ N·s/m}$`, r`$100\text{ N·s/m}$`],
              1, r`$c_c = 2\sqrt{100\times1} = 2\times10 = 20\text{ N·s/m}$.`,
              r`$\sqrt{100} = 10$.`)),
          step(2, 'propriete', 'Régimes', 'Les trois régimes',
            r`$\zeta < 1$ : régime **pseudo-périodique**, la masse oscille avec une amplitude qui décroît. $\zeta = 1$ : régime **critique**, retour à l’équilibre le plus rapide sans oscillation (amortisseurs de voiture). $\zeta > 1$ : régime **apériodique**, retour lent sans oscillation.`,
            qcm('lmd_srit_l1_meca_ch6_p2_ex2',
              r`Un oscillateur a $m = 1\text{ kg}$, $k = 100\text{ N/m}$ et un coefficient de frottement $c = 4\text{ N·s/m}$ (son amortissement critique vaut $20\text{ N·s/m}$). Quel est son régime ?`,
              ['Apériodique (ζ = 5)', 'Critique (ζ = 1)', 'Pseudo-périodique (ζ = 0,2)', 'Harmonique sans amortissement'],
              2, r`$\zeta = \frac{c}{c_c} = \frac{4}{20} = 0{,}2 < 1$ : régime pseudo-périodique, la masse oscille en s’amortissant.`,
              r`Compare $c$ à $c_c$.`)),
          step(3, 'methode', 'Pseudo-pulsation', 'La pseudo-pulsation',
            r`En régime pseudo-périodique, la masse oscille à la **pseudo-pulsation** $\omega = \omega_0\sqrt{1 - \zeta^2}$, un peu plus faible que $\omega_0$ : l’amortissement ralentit légèrement les oscillations.`,
            qcm('lmd_srit_l1_meca_ch6_p2_ex3',
              r`Un oscillateur a une pulsation propre $\omega_0 = 10\text{ rad/s}$ et un taux d’amortissement $\zeta = 0{,}6$. Quelle est sa pseudo-pulsation $\omega = \omega_0\sqrt{1 - \zeta^2}$ ?`,
              [r`$6\text{ rad/s}$`, r`$10\text{ rad/s}$`, r`$4\text{ rad/s}$`, r`$8\text{ rad/s}$`],
              3, r`$\sqrt{1 - 0{,}36} = \sqrt{0{,}64} = 0{,}8$, donc $\omega = 10\times0{,}8 = 8\text{ rad/s}$.`,
              r`$0{,}6^2 = 0{,}36$.`),
            { formula: { name: 'Pseudo-pulsation', formula: r`\omega = \omega_0\sqrt{1 - \zeta^2}` } }),
          step(4, 'exemple', 'Décroissance', 'L’amplitude décroît exponentiellement',
            r`L’amplitude des oscillations amorties suit l’enveloppe $Xe^{-\zeta\omega_0 t}$. Après une durée $t$, elle est multipliée par $e^{-\zeta\omega_0 t}$.`,
            qcm('lmd_srit_l1_meca_ch6_p2_ex4',
              r`Un oscillateur amorti a $\zeta\omega_0 = 2\text{ s}^{-1}$. Par quel facteur son amplitude est-elle multipliée après $1\text{ s}$ (facteur $e^{-\zeta\omega_0 t}$, avec $e^{-2} \approx 0{,}135$) ?`,
              [r`$0{,}135$`, r`$0{,}5$`, r`$2$`, r`$0{,}865$`],
              0, r`Le facteur vaut $e^{-2\times1} = e^{-2} \approx 0{,}135$ : il reste environ $13{,}5\,\%$ de l’amplitude.`,
              r`Calcule $\zeta\omega_0 t$.`)),
          step(5, 'methode', 'Forcé', 'L’amplitude des oscillations forcées',
            r`Soumis à une force $F_0\sin\Omega t$, l’oscillateur finit par osciller à la pulsation **imposée** $\Omega$, avec l’amplitude $X = \frac{F_0}{\sqrt{(k - m\Omega^2)^2 + (c\Omega)^2}}$. Quand $\Omega = \omega_0$, le premier terme s’annule : $X = \frac{F_0}{c\,\omega_0}$.`,
            qcm('lmd_srit_l1_meca_ch6_p2_ex5',
              r`Un oscillateur ($m = 1\text{ kg}$, $k = 100\text{ N/m}$, $c = 4\text{ N·s/m}$) est excité par une force d’amplitude $F_0 = 8\text{ N}$ à la pulsation $\Omega = 10\text{ rad/s}$. Quelle est l’amplitude $X = \frac{F_0}{\sqrt{(k - m\Omega^2)^2 + (c\Omega)^2}}$ ?`,
              [r`$0{,}08\text{ m}$`, r`$2\text{ m}$`, r`$0{,}2\text{ m}$`, r`$0{,}02\text{ m}$`],
              2, r`$k - m\Omega^2 = 100 - 100 = 0$ et $c\Omega = 40$ : $X = \frac{8}{40} = 0{,}2\text{ m}$.`,
              r`$m\Omega^2 = 100$ : le premier terme est nul.`)),
          step(6, 'piege', 'Résonance', 'Le facteur d’amplification à la résonance',
            r`Piège : à la résonance, l’amplitude n’est pas « infinie » mais vaut environ $\frac{1}{2\zeta}$ fois le déplacement statique $\frac{F_0}{k}$. Plus l’amortissement est faible, plus la résonance est violente : c’est ce qui peut détruire un pont ou une machine.`,
            qcm('lmd_srit_l1_meca_ch6_p2_ex6',
              r`Un oscillateur a un taux d’amortissement $\zeta = 0{,}2$. On l’excite à sa pulsation propre. Par combien son amplitude est-elle multipliée par rapport au déplacement statique (facteur $\frac{1}{2\zeta}$) ?`,
              [r`$0{,}4$`, r`$2{,}5$`, r`$5$`, 'Infini'],
              1, r`$\frac{1}{2\zeta} = \frac{1}{0{,}4} = 2{,}5$ : l’amplitude vaut 2,5 fois le déplacement statique $\frac{F_0}{k}$.`,
              r`$2\times0{,}2 = 0{,}4$.`)),
        ],
      }),
    ],
  },
];
