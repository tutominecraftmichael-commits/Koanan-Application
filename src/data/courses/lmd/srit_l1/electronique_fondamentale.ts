/**
 * SRIT Licence 1 — Électronique fondamentale (1PHY3200, Semestre 2).
 * Rédigé à partir des cours du dossier SRIT (quadripôles, diodes et applications, transistors bipolaires et à effet
 * de champ, amplificateur différentiel et AOP linéaire). Format v2 : mini-leçons de 6 étapes, questions autonomes.
 */
import type { CurriculumChapter, CurriculumPoint, InteractiveExercise, StepKind, StructuredLessonStep } from '../../../../lib/curriculum/types';

const r = String.raw;
const THEME: Record<StepKind, string> = { definition: 'blue', propriete: 'violet', methode: 'green', piege: 'orange', exemple: 'slate' };
const SOURCE = 'Programme LMD — Licence 1 SRIT (1PHY3200 : Électronique fondamentale)';

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
// Schémas (SVG sur feuille claire)
// ---------------------------------------------------------------------------
const SVG_RESEAU_T = r`<svg viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <g stroke="#1e293b" stroke-width="2" fill="none">
    <line x1="30" y1="40" x2="80" y2="40"/><rect x="80" y="30" width="60" height="20" fill="#fff"/><line x1="140" y1="40" x2="260" y2="40"/>
    <rect x="260" y="30" width="60" height="20" fill="#fff"/><line x1="320" y1="40" x2="370" y2="40"/>
    <line x1="200" y1="40" x2="200" y2="70"/><rect x="190" y="70" width="20" height="50" fill="#fff"/><line x1="200" y1="120" x2="200" y2="140"/>
    <line x1="30" y1="140" x2="370" y2="140"/>
  </g>
  <g fill="#1e293b"><circle cx="30" cy="40" r="4"/><circle cx="30" cy="140" r="4"/><circle cx="370" cy="40" r="4"/><circle cx="370" cy="140" r="4"/><circle cx="200" cy="40" r="3"/><circle cx="200" cy="140" r="3"/></g>
  <g font-size="12" font-weight="bold" fill="#4338ca"><text x="98" y="24">R₁ = 10 Ω</text><text x="276" y="24">R₂ = 20 Ω</text><text x="216" y="100">R₃ = 30 Ω</text></g>
  <g font-size="12" fill="#b45309" font-weight="bold"><text x="8" y="95">v₁</text><text x="380" y="95">v₂</text><text x="40" y="30">i₁ →</text><text x="330" y="30">← i₂</text></g>
  <text x="200" y="163" font-size="11" fill="#1e293b" text-anchor="middle">Quadripôle en T (courants i₁ et i₂ entrants)</text>
</svg>`;

const SVG_CARAC_DIODE = r`<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs><marker id="elnf-ax" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#475569"/></marker></defs>
  <line x1="20" y1="160" x2="340" y2="160" stroke="#475569" stroke-width="1.5" marker-end="url(#elnf-ax)"/><line x1="180" y1="190" x2="180" y2="12" stroke="#475569" stroke-width="1.5" marker-end="url(#elnf-ax)"/>
  <text x="330" y="178" font-size="12" fill="#475569">V<tspan baseline-shift="sub" font-size="9">AK</tspan></text><text x="188" y="20" font-size="12" fill="#475569">I</text>
  <path d="M30,163 L178,161 Q230,160 245,150 Q258,120 266,20" fill="none" stroke="#dc2626" stroke-width="2.4"/>
  <line x1="248" y1="160" x2="248" y2="167" stroke="#1e293b"/><text x="236" y="182" font-size="11" fill="#1e293b">V₀ ≈ 0,6 V</text>
  <text x="40" y="150" font-size="11" fill="#1e293b">bloquée : I ≈ 0</text><text x="276" y="70" font-size="11" fill="#1e293b">passante</text>
</svg>`;

const SVG_ZENER = r`<svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <g stroke="#1e293b" stroke-width="2" fill="none">
    <circle cx="50" cy="95" r="20" fill="#fff"/><line x1="50" y1="75" x2="50" y2="30"/><line x1="50" y1="30" x2="110" y2="30"/>
    <rect x="110" y="20" width="60" height="20" fill="#fff"/><line x1="170" y1="30" x2="330" y2="30"/>
    <line x1="50" y1="115" x2="50" y2="160"/><line x1="50" y1="160" x2="330" y2="160"/>
    <line x1="220" y1="30" x2="220" y2="78"/><line x1="220" y1="112" x2="220" y2="160"/>
    <line x1="330" y1="30" x2="330" y2="70"/><rect x="320" y="70" width="20" height="50" fill="#fff"/><line x1="330" y1="120" x2="330" y2="160"/>
  </g>
  <polygon points="208,112 232,112 220,90" fill="#fde68a" stroke="#1e293b" stroke-width="2"/>
  <path d="M206,84 L210,90 L230,90 L234,96" fill="none" stroke="#1e293b" stroke-width="2.4"/>
  <g font-size="12" font-weight="bold"><text x="44" y="100" fill="#1d4ed8">E</text><text x="128" y="14" fill="#4338ca">R</text><text x="240" y="106" fill="#b45309">D<tspan baseline-shift="sub" font-size="9">Z</tspan> (V<tspan baseline-shift="sub" font-size="9">Z</tspan>)</text><text x="348" y="100" fill="#4338ca">R<tspan baseline-shift="sub" font-size="9">L</tspan></text></g>
  <text x="200" y="182" font-size="11" fill="#1e293b" text-anchor="middle">Stabilisateur : la Zener, montée en inverse, fixe la tension aux bornes de R<tspan baseline-shift="sub" font-size="9">L</tspan></text>
</svg>`;

const SVG_REDRESSEMENT = r`<svg viewBox="0 0 380 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <line x1="20" y1="80" x2="360" y2="80" stroke="#94a3b8" stroke-width="1.2"/>
  <path d="M20,80 Q57,10 95,80 Q132,150 170,80 Q207,10 245,80 Q282,150 320,80" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <path d="M20,80 Q57,10 95,80 L170,80 Q207,10 245,80 L320,80" fill="none" stroke="#dc2626" stroke-width="2.6"/>
  <path d="M95,80 Q132,10 170,80 M245,80 Q282,10 320,80" fill="none" stroke="#0f766e" stroke-width="2" stroke-dasharray="2 3"/>
  <g font-size="11"><text x="24" y="138" fill="#94a3b8">tension du secteur (pointillés gris)</text><text x="24" y="20" fill="#dc2626">mono-alternance (rouge)</text><text x="210" y="20" fill="#0f766e">double alternance : rouge + vert</text></g>
</svg>`;

const SVG_POLAR_NPN = r`<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <defs><marker id="elnf-em" markerUnits="userSpaceOnUse" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="#1e293b"/></marker></defs>
  <g stroke="#1e293b" stroke-width="2" fill="none">
    <line x1="60" y1="20" x2="300" y2="20"/>
    <line x1="100" y1="20" x2="100" y2="40"/><rect x="90" y="40" width="20" height="50" fill="#fff"/><line x1="100" y1="90" x2="100" y2="120"/><line x1="100" y1="120" x2="190" y2="120"/>
    <line x1="230" y1="20" x2="230" y2="40"/><rect x="220" y="40" width="20" height="40" fill="#fff"/><line x1="230" y1="80" x2="230" y2="100"/>
    <circle cx="215" cy="120" r="26" fill="#fff"/><line x1="200" y1="105" x2="200" y2="135" stroke-width="3"/><line x1="190" y1="120" x2="200" y2="120"/>
    <line x1="200" y1="112" x2="230" y2="100"/><line x1="200" y1="128" x2="228" y2="142" marker-end="url(#elnf-em)"/>
    <line x1="230" y1="142" x2="230" y2="180"/><line x1="215" y1="180" x2="245" y2="180"/><line x1="221" y1="186" x2="239" y2="186"/>
  </g>
  <g font-size="12" font-weight="bold"><text x="306" y="25" fill="#dc2626">+V<tspan baseline-shift="sub" font-size="9">CC</tspan></text><text x="60" y="70" fill="#4338ca">R<tspan baseline-shift="sub" font-size="9">B</tspan></text><text x="248" y="64" fill="#4338ca">R<tspan baseline-shift="sub" font-size="9">C</tspan></text>
    <text x="172" y="114" fill="#1e293b">B</text><text x="238" y="98" fill="#1e293b">C</text><text x="238" y="160" fill="#1e293b">E</text></g>
  <text x="300" y="130" font-size="11" fill="#1e293b">NPN</text><text x="300" y="146" font-size="11" fill="#1e293b">I<tspan baseline-shift="sub" font-size="9">C</tspan> = β·I<tspan baseline-shift="sub" font-size="9">B</tspan></text>
</svg>`;

const SVG_AOP_INVERSEUR = r`<svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto" font-family="sans-serif">
  <g stroke="#1e293b" stroke-width="2" fill="none">
    <line x1="44" y1="80" x2="70" y2="80"/><rect x="70" y="70" width="50" height="20" fill="#fff"/><line x1="120" y1="80" x2="190" y2="80"/>
    <line x1="160" y1="80" x2="160" y2="30"/><line x1="160" y1="30" x2="230" y2="30"/><rect x="230" y="20" width="50" height="20" fill="#fff"/><line x1="280" y1="30" x2="330" y2="30"/><line x1="330" y1="30" x2="330" y2="100"/>
    <polygon points="190,60 190,140 280,100" fill="#eef2ff"/><line x1="280" y1="100" x2="370" y2="100"/>
    <line x1="190" y1="120" x2="170" y2="120"/><line x1="170" y1="120" x2="170" y2="160"/><line x1="158" y1="160" x2="182" y2="160"/><line x1="163" y1="166" x2="177" y2="166"/>
  </g>
  <g font-size="15" font-weight="bold" fill="#1e293b"><text x="196" y="86">−</text><text x="196" y="126">+</text></g>
  <g font-size="12" font-weight="bold"><text x="84" y="64" fill="#4338ca">R₁</text><text x="246" y="14" fill="#4338ca">R₂</text><text x="12" y="84" fill="#b45309">V<tspan baseline-shift="sub" font-size="9">e</tspan></text><text x="372" y="96" fill="#b45309">V<tspan baseline-shift="sub" font-size="9">s</tspan></text></g>
  <text x="200" y="184" font-size="11" fill="#1e293b" text-anchor="middle">Inverseur : V<tspan baseline-shift="sub" font-size="9">s</tspan> = −(R₂/R₁)·V<tspan baseline-shift="sub" font-size="9">e</tspan></text>
</svg>`;

export const ELECTRONIQUE_FONDAMENTALE_SRIT_L1_CHAPTERS: CurriculumChapter[] = [
  // ==========================================================================
  // CHAPITRE 1 : LES QUADRIPÔLES
  // ==========================================================================
  {
    id: 'lmd_srit_l1_elnf_ch1',
    subjectId: 'lmd_electronique_fondamentale',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 1,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: SOURCE,
    title: 'Les quadripôles',
    summary: 'Mise en équation d’un quadripôle (paramètres z, y, h), réciprocité, associations, impédances d’entrée et de sortie, gain en tension.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_elnf_ch1_p1',
        order: 1,
        title: 'Mise en équation : paramètres z, y et h',
        summary: 'Le quadripôle, ses quatre grandeurs, les matrices impédance, admittance et hybride, et la réciprocité des quadripôles passifs.',
        conceptExplanation: r`Un **quadripôle** est un circuit vu par deux paires de bornes : une **entrée** $(v_1, i_1)$ et une **sortie** $(v_2, i_2)$, les courants étant comptés **entrants**. S’il est linéaire, deux équations relient ces quatre grandeurs : on les écrit sous forme matricielle avec les paramètres **impédance** $[z]$, **admittance** $[y]$ ou **hybrides** $[h]$ (ceux du transistor). Amplificateurs, filtres, lignes et transformateurs se modélisent ainsi.`,
        formulas: [
          { name: 'Paramètres impédance', formula: r`v_1 = z_{11}i_1 + z_{12}i_2 \quad ; \quad v_2 = z_{21}i_1 + z_{22}i_2` },
          { name: 'Paramètres admittance', formula: r`i_1 = y_{11}v_1 + y_{12}v_2 \quad ; \quad i_2 = y_{21}v_1 + y_{22}v_2` },
          { name: 'Paramètres hybrides', formula: r`v_1 = h_{11}i_1 + h_{12}v_2 \quad ; \quad i_2 = h_{21}i_1 + h_{22}v_2` },
        ],
        keyRule: r`Chaque paramètre se mesure en annulant une grandeur : $i = 0$ veut dire « en circuit ouvert », $v = 0$ veut dire « en court-circuit ».`,
        workedExample: {
          title: 'Paramètres z d’un quadripôle en T',
          statement: r`Un quadripôle en T a deux résistances série $R_1 = 10\,\Omega$ (entrée) et $R_2 = 20\,\Omega$ (sortie) et une résistance transversale $R_3 = 30\,\Omega$. Calcule sa matrice $[z]$.`,
          methodSteps: [
            r`$z_{11} = \frac{v_1}{i_1}$ avec $i_2 = 0$ : le courant traverse $R_1$ puis $R_3$, donc $z_{11} = R_1 + R_3 = 40\,\Omega$.`,
            r`$z_{21} = \frac{v_2}{i_1}$ avec $i_2 = 0$ : aucun courant dans $R_2$, $v_2$ est la tension de $R_3$, donc $z_{21} = R_3 = 30\,\Omega$ (et $z_{12} = 30\,\Omega$ par réciprocité).`,
            r`$z_{22} = \frac{v_2}{i_2}$ avec $i_1 = 0$ : $z_{22} = R_2 + R_3 = 50\,\Omega$.`,
          ],
          conclusion: r`$[z] = \begin{pmatrix} 40 & 30 \\ 30 & 50 \end{pmatrix}\,\Omega$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Quadripôle en T', svgContent: SVG_RESEAU_T },
        structuredSteps: [
          step(1, 'definition', 'Quadripôle', 'Un circuit à deux accès',
            r`Un quadripôle a une paire de bornes d’**entrée** (tension $v_1$, courant $i_1$) et une paire de **sortie** ($v_2$, $i_2$). Par convention, les deux courants sont orientés **entrants** dans le quadripôle. On distingue les quadripôles **passifs** (résistances, condensateurs, bobines, transformateurs) et **actifs** (contenant une source commandée, comme un amplificateur à transistor).`,
            qcm('lmd_srit_l1_elnf_ch1_p1_ex1',
              'Lequel de ces circuits est un quadripôle ACTIF ?',
              ['Un filtre RC passe-bas', 'Un amplificateur à transistor alimenté', 'Un transformateur', 'Un pont diviseur de tension à deux résistances'],
              1, 'Un amplificateur à transistor contient une source commandée (il fournit de la puissance au signal) : c’est un quadripôle actif. Les trois autres ne contiennent que des éléments passifs.',
              'Lequel peut fournir plus de puissance en sortie qu’il n’en reçoit à l’entrée ?')),
          step(2, 'methode', 'Paramètres z', 'Les paramètres impédance (sorties en circuit ouvert)',
            r`$z_{11} = \frac{v_1}{i_1}\Big|_{i_2=0}$ est l’impédance d’entrée **sortie ouverte**, $z_{21} = \frac{v_2}{i_1}\Big|_{i_2=0}$ l’impédance de transfert, $z_{22} = \frac{v_2}{i_2}\Big|_{i_1=0}$ l’impédance de sortie **entrée ouverte**. Méthode : ouvre l’accès dont le courant doit être nul, puis applique les lois de Kirchhoff.`,
            qcm('lmd_srit_l1_elnf_ch1_p1_ex2',
              r`Un quadripôle en T a les résistances série $R_1 = 10\,\Omega$ (côté entrée) et $R_2 = 20\,\Omega$ (côté sortie), et la résistance transversale $R_3 = 30\,\Omega$. Que vaut $z_{11} = \frac{v_1}{i_1}$ avec la sortie ouverte ($i_2 = 0$) ?`,
              [r`$10\,\Omega$`, r`$60\,\Omega$`, r`$40\,\Omega$`, r`$30\,\Omega$`],
              2, r`Sortie ouverte : aucun courant dans $R_2$. Le courant $i_1$ traverse $R_1$ puis $R_3$ : $z_{11} = R_1 + R_3 = 10 + 30 = 40\,\Omega$.`,
              r`Avec $i_2 = 0$, la résistance $R_2$ n’est parcourue par aucun courant.`)),
          step(3, 'methode', 'Paramètres y', 'Les paramètres admittance (accès en court-circuit)',
            r`$y_{11} = \frac{i_1}{v_1}\Big|_{v_2=0}$ est l’admittance d’entrée **sortie en court-circuit** (en siemens, S). Pour une simple impédance $Z$ placée en série entre l’entrée et la sortie : $i_1 = \frac{v_1 - v_2}{Z}$, d’où $y_{11} = \frac{1}{Z}$ et $y_{12} = -\frac{1}{Z}$.`,
            qcm('lmd_srit_l1_elnf_ch1_p1_ex3',
              r`Un quadripôle est formé d’une seule résistance $Z = 50\,\Omega$ placée en série entre la borne d’entrée et la borne de sortie (masse commune). Que vaut $y_{11} = \frac{i_1}{v_1}$ avec la sortie en court-circuit ($v_2 = 0$) ?`,
              [r`$50\text{ S}$`, r`$0{,}02\text{ S}$`, r`$-0{,}02\text{ S}$`, r`$0\text{ S}$`],
              1, r`Sortie court-circuitée : $i_1 = \frac{v_1}{Z}$, donc $y_{11} = \frac{1}{50} = 0{,}02\text{ S}$.`,
              'Une admittance est l’inverse d’une impédance.')),
          step(4, 'propriete', 'Paramètres h', 'Les paramètres hybrides du transistor',
            r`Les paramètres **hybrides** mélangent les grandeurs : $v_1 = h_{11}i_1 + h_{12}v_2$ et $i_2 = h_{21}i_1 + h_{22}v_2$. $h_{11}$ est une impédance (Ω), $h_{22}$ une admittance (S), $h_{12}$ (rapport de tensions) et $h_{21}$ (**gain en courant**, sortie en court-circuit) sont sans unité. Ce sont les paramètres donnés par les fabricants de transistors.`,
            qcm('lmd_srit_l1_elnf_ch1_p1_ex4',
              r`Dans les équations hybrides $v_1 = h_{11}i_1 + h_{12}v_2$ et $i_2 = h_{21}i_1 + h_{22}v_2$, quel paramètre est un gain en courant sans unité ?`,
              [r`$h_{11}$`, r`$h_{12}$`, r`$h_{22}$`, r`$h_{21}$`],
              3, r`$h_{21} = \frac{i_2}{i_1}\Big|_{v_2=0}$ est le rapport de deux courants : c’est le gain en courant (noté $\beta$ pour le transistor). $h_{12}$ est aussi sans unité mais c’est un rapport de tensions.`,
              'Cherche le rapport courant de sortie / courant d’entrée.'),
            { formula: { name: 'Gain en courant', formula: r`h_{21} = \frac{i_2}{i_1}\Big|_{v_2 = 0}` } }),
          step(5, 'propriete', 'Réciprocité', 'Les quadripôles passifs sont réciproques',
            r`Pour un quadripôle **passif** (sans source commandée), l’effet de l’entrée sur la sortie est le même que celui de la sortie sur l’entrée : $z_{12} = z_{21}$ et $y_{12} = y_{21}$ (et $h_{12} = -h_{21}$). Pour un quadripôle actif comme un amplificateur, ces égalités sont fausses.`,
            qcm('lmd_srit_l1_elnf_ch1_p1_ex5',
              r`Un quadripôle passif a les paramètres $z_{11} = 40\,\Omega$, $z_{21} = 30\,\Omega$ et $z_{22} = 50\,\Omega$. Que vaut $z_{12}$ ?`,
              [r`$30\,\Omega$`, r`$40\,\Omega$`, r`$50\,\Omega$`, r`$-30\,\Omega$`],
              0, r`Un quadripôle passif est réciproque : $z_{12} = z_{21} = 30\,\Omega$.`,
              'Passif rime avec réciproque.')),
          step(6, 'piege', 'Sens des courants', 'Attention au sens de i₂',
            r`Piège : $i_2$ est compté **entrant** dans le quadripôle par sa borne de sortie. Si le quadripôle débite dans une charge, le courant qui sort vers la charge vaut $-i_2$. Une erreur de signe sur $i_2$ fausse toutes les équations. Toujours écrire : $v_2 = z_{21}i_1 + z_{22}i_2$ avec les signes donnés.`,
            qcm('lmd_srit_l1_elnf_ch1_p1_ex6',
              r`Un quadripôle a $z_{21} = 30\,\Omega$ et $z_{22} = 50\,\Omega$. On mesure $i_1 = 0{,}1\text{ A}$ et $i_2 = -0{,}05\text{ A}$ (le courant sort vers la charge). Que vaut $v_2 = z_{21}i_1 + z_{22}i_2$ ?`,
              [r`$5{,}5\text{ V}$`, r`$0{,}5\text{ V}$`, r`$3\text{ V}$`, r`$-2{,}5\text{ V}$`],
              1, r`$v_2 = 30\times0{,}1 + 50\times(-0{,}05) = 3 - 2{,}5 = 0{,}5\text{ V}$.`,
              r`Garde le signe moins de $i_2$.`)),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_elnf_ch1_p2',
        order: 2,
        title: 'Associations et grandeurs caractéristiques',
        summary: 'Associations série, parallèle et en cascade ; impédance d’entrée d’un quadripôle chargé, gain en tension et impédance de sortie.',
        conceptExplanation: r`Les matrices simplifient l’étude des circuits complexes : en **série** les matrices $[z]$ s’ajoutent, en **parallèle** les matrices $[y]$ s’ajoutent, et en **cascade** les matrices de transfert se multiplient. Un quadripôle branché entre un générateur (résistance $R_g$) et une charge $Z_L$ se résume par son **impédance d’entrée** $Z_e$, son **gain** $A_v$ et son **impédance de sortie** $Z_s$.`,
        formulas: [
          { name: 'Impédance d’entrée (charge Z_L)', formula: r`Z_e = z_{11} - \frac{z_{12}z_{21}}{z_{22} + Z_L}` },
          { name: 'Impédance de sortie (générateur R_g)', formula: r`Z_s = z_{22} - \frac{z_{12}z_{21}}{z_{11} + R_g}` },
          { name: 'Gain en tension', formula: r`A_v = \frac{v_2}{v_1} = \frac{z_{21}Z_L}{z_{11}(z_{22}+Z_L) - z_{12}z_{21}}` },
        ],
        keyRule: 'Série → on additionne les [z] ; parallèle → on additionne les [y] ; cascade → on multiplie les matrices de transfert, dans l’ordre.',
        workedExample: {
          title: 'Quadripôle en T chargé',
          statement: r`Le quadripôle en T de matrice $[z] = \begin{pmatrix} 40 & 30 \\ 30 & 50 \end{pmatrix}\,\Omega$ est chargé par $Z_L = 40\,\Omega$. Calcule $Z_e$ et $A_v$.`,
          methodSteps: [
            r`$Z_e = 40 - \frac{30\times30}{50+40} = 40 - 10 = 30\,\Omega$.`,
            r`$A_v = \frac{30\times40}{40\times90 - 900} = \frac{1200}{2700} \approx 0{,}44$.`,
            r`Vérification directe : $R_2 + Z_L = 60\,\Omega$ en parallèle sur $R_3 = 30\,\Omega$ donne $20\,\Omega$, plus $R_1$ : $30\,\Omega$. Le pont diviseur donne bien $\frac{2}{3}\times\frac{2}{3} = \frac{4}{9}$.`,
          ],
          conclusion: r`$Z_e = 30\,\Omega$ et $A_v = \frac{4}{9} \approx 0{,}44$ (atténuation).`,
        },
        structuredSteps: [
          step(1, 'propriete', 'Série', 'Association en série',
            r`Deux quadripôles sont en **série** quand leurs entrées sont en série et leurs sorties en série : ils sont parcourus par les mêmes courants et leurs tensions s’ajoutent. La matrice impédance de l’ensemble est donc la **somme** : $[z] = [z'] + [z'']$.`,
            qcm('lmd_srit_l1_elnf_ch1_p2_ex1',
              r`Deux quadripôles associés en série ont pour matrices $[z'] = \begin{pmatrix} 10 & 5 \\ 5 & 20 \end{pmatrix}\,\Omega$ et $[z''] = \begin{pmatrix} 30 & 15 \\ 15 & 10 \end{pmatrix}\,\Omega$. Que vaut $z_{11}$ de l’ensemble ?`,
              [r`$300\,\Omega$`, r`$7{,}5\,\Omega$`, r`$20\,\Omega$`, r`$40\,\Omega$`],
              3, r`En série, les matrices $[z]$ s’additionnent : $z_{11} = 10 + 30 = 40\,\Omega$.`,
              'Association série : somme des matrices impédance.')),
          step(2, 'propriete', 'Parallèle', 'Association en parallèle',
            r`En **parallèle**, les entrées sont reliées entre elles, ainsi que les sorties : les tensions sont communes et les courants s’ajoutent. Ce sont alors les matrices **admittance** qui s’additionnent : $[y] = [y'] + [y'']$.`,
            qcm('lmd_srit_l1_elnf_ch1_p2_ex2',
              r`Deux quadripôles associés en parallèle ont $y'_{11} = 0{,}02\text{ S}$ et $y''_{11} = 0{,}03\text{ S}$. Que vaut $y_{11}$ de l’ensemble ?`,
              [r`$0{,}05\text{ S}$`, r`$0{,}012\text{ S}$`, r`$0{,}0006\text{ S}$`, r`$0{,}01\text{ S}$`],
              0, r`En parallèle, les matrices $[y]$ s’additionnent : $y_{11} = 0{,}02 + 0{,}03 = 0{,}05\text{ S}$.`,
              'Parallèle : on additionne les admittances.')),
          step(3, 'piege', 'Cascade', 'En cascade, l’ordre compte',
            r`En **cascade** (la sortie du premier attaque l’entrée du second), on utilise les **matrices de transfert** qui relient $(v_1, i_1)$ à $(v_2, -i_2)$ : la matrice de l’ensemble est le **produit** $[T] = [T_1]\times[T_2]$. Piège : le produit de matrices n’est pas commutatif, $[T_1][T_2] \ne [T_2][T_1]$ en général : l’ordre des étages compte.`,
            qcm('lmd_srit_l1_elnf_ch1_p2_ex3',
              'Deux quadripôles Q₁ puis Q₂ sont branchés en cascade (Q₁ côté entrée). Comment obtient-on la matrice de transfert de l’ensemble ?',
              ['[T] = [T₁] + [T₂]', '[T] = [T₂] × [T₁]', '[T] = [T₁] × [T₂]', 'Par la somme des matrices impédance'],
              2, 'En cascade, les matrices de transfert se multiplient dans l’ordre des étages : [T] = [T₁] × [T₂]. Inverser l’ordre donne en général un autre résultat.',
              'Le premier étage est à gauche du produit.')),
          step(4, 'methode', 'Z d’entrée', 'L’impédance d’entrée d’un quadripôle chargé',
            r`Branché sur une charge $Z_L$ (donc $v_2 = -Z_L i_2$), le quadripôle présente à l’entrée l’impédance $Z_e = z_{11} - \frac{z_{12}z_{21}}{z_{22}+Z_L}$. C’est la résistance « vue » par le générateur : elle dépend de la charge.`,
            qcm('lmd_srit_l1_elnf_ch1_p2_ex4',
              r`Un quadripôle a $z_{11} = 40\,\Omega$, $z_{12} = z_{21} = 30\,\Omega$, $z_{22} = 50\,\Omega$. Il est chargé par $Z_L = 40\,\Omega$. Que vaut son impédance d’entrée $Z_e = z_{11} - \frac{z_{12}z_{21}}{z_{22}+Z_L}$ ?`,
              [r`$40\,\Omega$`, r`$30\,\Omega$`, r`$10\,\Omega$`, r`$22{,}5\,\Omega$`],
              1, r`$Z_e = 40 - \frac{30\times30}{50+40} = 40 - \frac{900}{90} = 40 - 10 = 30\,\Omega$.`,
              r`Calcule d’abord $z_{12}z_{21} = 900$.`),
            { formula: { name: 'Impédance d’entrée', formula: r`Z_e = z_{11} - \frac{z_{12}z_{21}}{z_{22}+Z_L}` } }),
          step(5, 'exemple', 'Gain', 'Le gain en tension',
            r`Le gain en tension $A_v = \frac{v_2}{v_1}$ d’un quadripôle chargé par $Z_L$ vaut $A_v = \frac{z_{21}Z_L}{z_{11}(z_{22}+Z_L) - z_{12}z_{21}}$. Pour un quadripôle passif, $|A_v| < 1$ (atténuation) ; un amplificateur a $|A_v| > 1$. En décibels : $G = 20\log|A_v|$.`,
            qcm('lmd_srit_l1_elnf_ch1_p2_ex5',
              r`Un quadripôle a $z_{11} = 40\,\Omega$, $z_{12} = z_{21} = 30\,\Omega$, $z_{22} = 50\,\Omega$ et est chargé par $Z_L = 40\,\Omega$. Que vaut $A_v = \frac{z_{21}Z_L}{z_{11}(z_{22}+Z_L) - z_{12}z_{21}}$ ?`,
              [r`$0{,}75$`, r`$1{,}33$`, r`$0{,}6$`, r`$0{,}44$`],
              3, r`Numérateur : $30\times40 = 1200$. Dénominateur : $40\times90 - 900 = 2700$. $A_v = \frac{1200}{2700} = \frac{4}{9} \approx 0{,}44$.`,
              r`$z_{11}(z_{22}+Z_L) = 40\times90 = 3600$.`)),
          step(6, 'piege', 'Z de sortie', 'L’impédance de sortie se calcule source éteinte',
            r`Piège : l’impédance de sortie $Z_s$ est vue depuis la charge, **générateur d’entrée éteint** (remplacé par sa résistance interne $R_g$) : $Z_s = z_{22} - \frac{z_{12}z_{21}}{z_{11}+R_g}$. Elle dépend de $R_g$, pas de la charge.`,
            qcm('lmd_srit_l1_elnf_ch1_p2_ex6',
              r`Un quadripôle a $z_{11} = 40\,\Omega$, $z_{12} = z_{21} = 30\,\Omega$, $z_{22} = 50\,\Omega$. Il est attaqué par un générateur idéal de tension ($R_g = 0$). Que vaut $Z_s = z_{22} - \frac{z_{12}z_{21}}{z_{11}+R_g}$ ?`,
              [r`$27{,}5\,\Omega$`, r`$50\,\Omega$`, r`$40\,\Omega$`, r`$72{,}5\,\Omega$`],
              0, r`$Z_s = 50 - \frac{900}{40} = 50 - 22{,}5 = 27{,}5\,\Omega$. Pour le T ($R_1 = 10$, $R_2 = 20$, $R_3 = 30\,\Omega$), on retrouve $R_2 + (R_1 \parallel R_3) = 20 + 7{,}5$.`,
              r`$\frac{900}{40} = 22{,}5$.`)),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 2 : DIODES ET APPLICATIONS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_elnf_ch2',
    subjectId: 'lmd_electronique_fondamentale',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 2,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: SOURCE,
    title: 'Diodes et applications',
    summary: 'Diode à jonction PN, caractéristique et modèles, résistance dynamique, diode Zener et stabilisation, redressement et filtrage.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_elnf_ch2_p1',
        order: 1,
        title: 'La diode à jonction et ses modèles',
        summary: 'Polarisation directe et inverse, loi de Shockley, modèles idéal, à seuil et à seuil avec résistance, résistance dynamique.',
        conceptExplanation: r`Une **diode** à jonction PN laisse passer le courant dans un seul sens : de l’**anode** vers la **cathode**, quand la tension $V_{AK}$ dépasse un seuil $V_0 \approx 0{,}6$ à $0{,}7\text{ V}$ (silicium). En inverse, elle est **bloquée**. Pour calculer un circuit, on remplace la diode par un **modèle** : idéal (interrupteur), à seuil, ou à seuil avec résistance interne.`,
        formulas: [
          { name: 'Loi de Shockley', formula: r`I = I_s\left(e^{\frac{V}{nV_T}} - 1\right) \quad ; \quad V_T = \frac{kT}{q} \approx 26\text{ mV à 300 K}` },
          { name: 'Modèle à seuil et résistance', formula: r`V_{AK} = V_0 + r_d\,I \quad (\text{si } I > 0)` },
          { name: 'Résistance dynamique', formula: r`r_d = \frac{V_T}{I_0}` },
        ],
        keyRule: 'On suppose un état (passante ou bloquée), on calcule, puis on vérifie : I > 0 si passante, V_AK < V₀ si bloquée.',
        workedExample: {
          title: 'Courant dans une diode en série avec une résistance',
          statement: r`Un générateur $E = 5\text{ V}$ alimente une diode (seuil $V_0 = 0{,}7\text{ V}$) en série avec $R = 1\text{ k}\Omega$. Calcule le courant.`,
          methodSteps: [
            r`Hypothèse : diode passante, donc $V_{AK} = 0{,}7\text{ V}$.`,
            r`Loi des mailles : $E = V_0 + RI$, donc $I = \frac{5 - 0{,}7}{1000} = 4{,}3\text{ mA}$.`,
            r`Vérification : $I > 0$, l’hypothèse est correcte.`,
          ],
          conclusion: r`$I = 4{,}3\text{ mA}$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Caractéristique courant-tension d’une diode', svgContent: SVG_CARAC_DIODE },
        structuredSteps: [
          step(1, 'definition', 'Diode', 'Une porte à sens unique',
            r`La diode a deux bornes : l’**anode** (côté P) et la **cathode** (côté N, marquée d’un trait). Elle est **passante** quand l’anode est plus positive que la cathode d’au moins le seuil $V_0$ (polarisation **directe**), et **bloquée** sinon (polarisation **inverse**).`,
            qcm('lmd_srit_l1_elnf_ch2_p1_ex1',
              r`Une diode au silicium (seuil $V_0 = 0{,}7\text{ V}$) a son anode à $3\text{ V}$ et sa cathode à $5\text{ V}$. Dans quel état est-elle ?`,
              ['Passante, car la tension est supérieure à 0,7 V', 'Bloquée, car elle est polarisée en inverse', 'Passante en inverse', 'En avalanche'],
              1, r`$V_{AK} = 3 - 5 = -2\text{ V} < 0$ : la diode est polarisée en inverse, elle est bloquée.`,
              r`Calcule $V_{AK} = V_A - V_K$.`)),
          step(2, 'propriete', 'Shockley', 'La loi exponentielle de la diode',
            r`Le courant réel suit la loi de Shockley : $I = I_s\left(e^{V/(nV_T)} - 1\right)$, avec $I_s$ (courant de saturation, très petit), $n$ entre 1 et 2, et $V_T \approx 26\text{ mV}$ à température ambiante. Le courant reste minuscule jusqu’à environ $0{,}5\text{ V}$ puis grimpe très vite : d’où la notion de seuil.`,
            qcm('lmd_srit_l1_elnf_ch2_p1_ex2',
              r`Une diode a $I_s = 10^{-14}\text{ A}$, $n = 1$ et $V_T = 26\text{ mV}$. Quel est l’ordre de grandeur du courant pour $V = 0{,}6\text{ V}$, sachant que $e^{0{,}6/0{,}026} \approx 1{,}05\times10^{10}$ ?`,
              [r`$0{,}1\text{ mA}$`, r`$10\text{ A}$`, r`$10^{-14}\text{ A}$`, r`$10\text{ mA}$`],
              0, r`$I \approx I_s e^{V/V_T} = 10^{-14}\times1{,}05\times10^{10} \approx 1{,}05\times10^{-4}\text{ A} \approx 0{,}1\text{ mA}$.`,
              r`Multiplie $10^{-14}$ par $10^{10}$.`)),
          step(3, 'methode', 'Modèle à seuil', 'Calculer avec le modèle à seuil',
            r`Méthode : (1) suppose la diode passante et remplace-la par une source $V_0$ ; (2) écris la loi des mailles ; (3) vérifie que le courant trouvé est positif. Si $I < 0$, l’hypothèse est fausse : la diode est bloquée et $I = 0$.`,
            qcm('lmd_srit_l1_elnf_ch2_p1_ex3',
              r`Un générateur $E = 5\text{ V}$ alimente, en série, une diode passante de seuil $V_0 = 0{,}7\text{ V}$ et une résistance $R = 1\text{ k}\Omega$. Quel est le courant ?`,
              [r`$5\text{ mA}$`, r`$5{,}7\text{ mA}$`, r`$0{,}7\text{ mA}$`, r`$4{,}3\text{ mA}$`],
              3, r`$I = \frac{E - V_0}{R} = \frac{5 - 0{,}7}{1000} = 4{,}3\times10^{-3}\text{ A} = 4{,}3\text{ mA}$ ($I > 0$ : hypothèse vérifiée).`,
              'Soustrais le seuil de la tension du générateur.')),
          step(4, 'methode', 'Seuil + résistance', 'Le modèle à seuil avec résistance interne',
            r`Modèle plus fin : en direct, la diode équivaut à une source $V_0$ en série avec une petite résistance $r_d$ (pente de la caractéristique). Dans la maille : $E = V_0 + (R + r_d)I$.`,
            qcm('lmd_srit_l1_elnf_ch2_p1_ex4',
              r`Un générateur $E = 5\text{ V}$ alimente, en série, une résistance $R = 1\text{ k}\Omega$ et une diode modélisée par $V_0 = 0{,}6\text{ V}$ et $r_d = 10\,\Omega$. Quel est le courant ?`,
              [r`$4{,}40\text{ mA}$`, r`$4{,}36\text{ mA}$`, r`$4{,}95\text{ mA}$`, r`$0{,}44\text{ A}$`],
              1, r`$I = \frac{E - V_0}{R + r_d} = \frac{4{,}4}{1010} \approx 4{,}36\times10^{-3}\text{ A} = 4{,}36\text{ mA}$.`,
              r`La résistance totale vaut $1010\,\Omega$.`)),
          step(5, 'propriete', 'Dynamique', 'La résistance dynamique',
            r`Pour de petites variations autour d’un point de fonctionnement $I_0$, la diode se comporte comme une résistance $r_d = \frac{V_T}{I_0}$ (pente de la loi exponentielle). Plus le courant de repos est grand, plus $r_d$ est petite. C’est ce modèle qu’on utilise pour les petits signaux.`,
            qcm('lmd_srit_l1_elnf_ch2_p1_ex5',
              r`Une diode est polarisée au courant de repos $I_0 = 2\text{ mA}$. Avec $V_T = 26\text{ mV}$, que vaut sa résistance dynamique $r_d = \frac{V_T}{I_0}$ ?`,
              [r`$52\,\Omega$`, r`$0{,}013\,\Omega$`, r`$13\,\Omega$`, r`$130\,\Omega$`],
              2, r`$r_d = \frac{26\times10^{-3}}{2\times10^{-3}} = 13\,\Omega$.`,
              'Les « milli » se simplifient.'),
            { formula: { name: 'Résistance dynamique', formula: r`r_d = \frac{V_T}{I_0}` } }),
          step(6, 'piege', 'Inverse', 'Diode bloquée : toute la tension est à ses bornes',
            r`Piège : quand la diode est **bloquée**, le courant est nul, donc la tension aux bornes de la résistance en série est nulle : **toute la tension** du générateur se retrouve aux bornes de la diode. Il faut vérifier que cette tension inverse reste inférieure à la tension inverse maximale ($V_{RRM}$) indiquée par le fabricant.`,
            qcm('lmd_srit_l1_elnf_ch2_p1_ex6',
              r`Un générateur $E = 5\text{ V}$ est relié à une diode montée en INVERSE, en série avec une résistance $R = 1\text{ k}\Omega$. Que valent le courant et la tension aux bornes de la diode ?`,
              [r`$I = 5\text{ mA}$, $V_D = 0\text{ V}$`, r`$I = 4{,}3\text{ mA}$, $V_D = 0{,}7\text{ V}$`, r`$I = 0$, $V_D = 0\text{ V}$`, r`$I = 0$, tension inverse de $5\text{ V}$ aux bornes de la diode`],
              3, r`Diode bloquée : $I = 0$, donc $U_R = RI = 0$ et toute la tension du générateur ($5\text{ V}$) est appliquée en inverse sur la diode.`,
              'Sans courant, la résistance n’a aucune tension à ses bornes.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_elnf_ch2_p2',
        order: 2,
        title: 'La diode Zener et la stabilisation de tension',
        summary: 'Fonctionnement en inverse, modèle de la Zener, montage stabilisateur, courant minimal, charge minimale et puissance dissipée.',
        conceptExplanation: r`Une **diode Zener** est conçue pour fonctionner **en inverse** : au-delà de sa tension Zener $V_Z$, elle conduit et garde une tension presque constante. Associée à une résistance série, elle **stabilise** une tension d’alimentation : la tension de sortie reste à $V_Z$ même si l’entrée ou la charge varient, tant que le courant Zener reste dans sa plage de fonctionnement.`,
        formulas: [
          { name: 'Modèle réel de la Zener', formula: r`V_Z = V_{Z0} + r_Z\,I_Z` },
          { name: 'Stabilisateur', formula: r`I = \frac{E - V_Z}{R} = I_Z + I_L \quad ; \quad I_L = \frac{V_Z}{R_L}` },
          { name: 'Puissance dissipée', formula: r`P_Z = V_Z\,I_Z` },
        ],
        keyRule: 'La Zener régule tant que I_Z reste au-dessus de I_Z min (sinon elle se bloque) et en dessous de I_Z max (sinon elle chauffe trop).',
        workedExample: {
          title: 'Courants dans un stabilisateur à Zener',
          statement: r`$E = 12\text{ V}$, $R = 200\,\Omega$, Zener $V_Z = 6\text{ V}$, charge $R_L = 600\,\Omega$. Calcule les courants.`,
          methodSteps: [
            r`Courant dans $R$ : $I = \frac{12 - 6}{200} = 30\text{ mA}$.`,
            r`Courant de charge : $I_L = \frac{6}{600} = 10\text{ mA}$.`,
            r`Courant Zener : $I_Z = I - I_L = 20\text{ mA}$.`,
          ],
          conclusion: r`$I = 30\text{ mA}$, $I_L = 10\text{ mA}$, $I_Z = 20\text{ mA}$ : la Zener absorbe le surplus.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Stabilisateur à diode Zener', svgContent: SVG_ZENER },
        structuredSteps: [
          step(1, 'definition', 'Zener', 'Une diode faite pour travailler en inverse',
            r`En direct, une Zener se comporte comme une diode ordinaire. En **inverse**, quand la tension atteint $V_Z$ (tension Zener, de quelques volts à quelques dizaines de volts), elle conduit tout en gardant sa tension presque constante : c’est une **référence de tension**.`,
            qcm('lmd_srit_l1_elnf_ch2_p2_ex1',
              'Dans quel sens monte-t-on une diode Zener pour qu’elle fixe une tension de référence ?',
              ['En direct, anode vers le +', 'En inverse, cathode vers le +', 'Peu importe le sens', 'En parallèle sur la résistance série'],
              1, 'La Zener stabilise en polarisation inverse (cathode reliée au potentiel le plus haut) : au-delà de V_Z, elle conduit en gardant sa tension presque constante.',
              'Son intérêt apparaît au-delà de la tension Zener, en inverse.')),
          step(2, 'propriete', 'Modèle', 'Le modèle réel de la Zener',
            r`En conduction inverse, la Zener se modélise par une source $V_{Z0}$ en série avec une petite résistance $r_Z$ : $V_Z = V_{Z0} + r_Z I_Z$. Plus $r_Z$ est petite, meilleure est la stabilisation (la tension varie peu avec le courant).`,
            qcm('lmd_srit_l1_elnf_ch2_p2_ex2',
              r`Une Zener a $V_{Z0} = 5{,}6\text{ V}$ et $r_Z = 10\,\Omega$. Quelle est sa tension quand elle est traversée par $I_Z = 20\text{ mA}$ ?`,
              [r`$5{,}6\text{ V}$`, r`$5{,}62\text{ V}$`, r`$5{,}8\text{ V}$`, r`$7{,}6\text{ V}$`],
              2, r`$V_Z = 5{,}6 + 10\times0{,}02 = 5{,}6 + 0{,}2 = 5{,}8\text{ V}$.`,
              r`$10\,\Omega\times20\text{ mA} = 0{,}2\text{ V}$.`)),
          step(3, 'methode', 'Stabilisateur', 'Calculer les courants d’un stabilisateur',
            r`Méthode : (1) la tension de sortie vaut $V_Z$ ; (2) courant dans la résistance série : $I = \frac{E - V_Z}{R}$ ; (3) courant de charge $I_L = \frac{V_Z}{R_L}$ ; (4) la Zener prend le reste : $I_Z = I - I_L$.`,
            qcm('lmd_srit_l1_elnf_ch2_p2_ex3',
              r`Un stabilisateur a $E = 12\text{ V}$, une résistance série $R = 200\,\Omega$, une Zener $V_Z = 6\text{ V}$ et une charge $R_L = 600\,\Omega$. Quel courant traverse la Zener ?`,
              [r`$30\text{ mA}$`, r`$10\text{ mA}$`, r`$40\text{ mA}$`, r`$20\text{ mA}$`],
              3, r`$I = \frac{12-6}{200} = 30\text{ mA}$, $I_L = \frac{6}{600} = 10\text{ mA}$, donc $I_Z = 30 - 10 = 20\text{ mA}$.`,
              'Le courant de R se partage entre la Zener et la charge.')),
          step(4, 'methode', 'Charge minimale', 'La charge la plus faible acceptable',
            r`Si la charge demande trop de courant, il n’en reste plus assez pour la Zener : quand $I_Z < I_{Z\min}$, elle se bloque et la tension n’est plus stabilisée. Courant de charge maximal : $I_{L\max} = I - I_{Z\min}$, d’où la résistance de charge minimale $R_{L\min} = \frac{V_Z}{I_{L\max}}$.`,
            qcm('lmd_srit_l1_elnf_ch2_p2_ex4',
              r`Un stabilisateur a $E = 12\text{ V}$, $R = 200\,\Omega$ et une Zener $V_Z = 6\text{ V}$ dont le courant minimal est $I_{Z\min} = 5\text{ mA}$. Quelle est la plus petite résistance de charge qui reste stabilisée ?`,
              [r`$240\,\Omega$`, r`$200\,\Omega$`, r`$1200\,\Omega$`, r`$600\,\Omega$`],
              0, r`$I = 30\text{ mA}$ ; $I_{L\max} = 30 - 5 = 25\text{ mA}$ ; $R_{L\min} = \frac{6}{0{,}025} = 240\,\Omega$.`,
              r`Calcule d’abord le courant de charge maximal.`)),
          step(5, 'exemple', 'Puissance', 'La puissance dissipée par la Zener',
            r`La Zener dissipe $P_Z = V_Z I_Z$. Le cas le plus défavorable est **sans charge** : tout le courant de la résistance série passe dans la Zener. Il faut alors que $P_Z$ reste inférieure à la puissance maximale du composant.`,
            qcm('lmd_srit_l1_elnf_ch2_p2_ex5',
              r`Un stabilisateur ($E = 12\text{ V}$, $R = 200\,\Omega$, $V_Z = 6\text{ V}$) fonctionne SANS charge. Quelle puissance dissipe la Zener ?`,
              [r`$0{,}12\text{ W}$`, r`$0{,}36\text{ W}$`, r`$0{,}18\text{ W}$`, r`$0{,}03\text{ W}$`],
              2, r`Sans charge, $I_Z = I = \frac{12-6}{200} = 30\text{ mA}$ et $P_Z = 6\times0{,}03 = 0{,}18\text{ W}$.`,
              'Sans charge, la Zener reçoit tout le courant.')),
          step(6, 'piege', 'Zener en direct', 'Une Zener montée à l’envers ne régule pas',
            r`Piège : montée en **direct** (anode vers le +), une Zener se comporte comme une diode ordinaire et impose environ $0{,}7\text{ V}$, pas $V_Z$. Vérifie toujours le sens : cathode (trait) vers le potentiel le plus élevé.`,
            qcm('lmd_srit_l1_elnf_ch2_p2_ex6',
              r`Une Zener de tension $V_Z = 9\text{ V}$ est montée par erreur en DIRECT dans un stabilisateur alimenté sous $15\text{ V}$ (avec résistance série). Quelle tension obtient-on à ses bornes ?`,
              [r`$9\text{ V}$`, r`environ $0{,}7\text{ V}$`, r`$15\text{ V}$`, r`$6\text{ V}$`],
              1, r`En direct, la Zener conduit comme une diode ordinaire : sa tension vaut environ $0{,}7\text{ V}$. La régulation à $9\text{ V}$ n’a lieu qu’en inverse.`,
              'En direct, une Zener est une diode comme les autres.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_elnf_ch2_p3',
        order: 3,
        title: 'Redressement et filtrage',
        summary: 'Redressement mono-alternance et double alternance (pont de Graetz), valeurs moyennes, fréquence d’ondulation et filtrage par condensateur.',
        conceptExplanation: r`Pour alimenter un circuit électronique à partir du secteur alternatif, on **redresse** la tension avec des diodes (seules les alternances d’un signe passent, ou les alternances négatives sont retournées), puis on **filtre** avec un condensateur pour obtenir une tension presque continue. C’est le cœur de tous les chargeurs et alimentations.`,
        formulas: [
          { name: 'Valeurs moyennes (diodes idéales)', formula: r`V_{\text{moy,mono}} = \frac{V_m}{\pi} \quad ; \quad V_{\text{moy,double}} = \frac{2V_m}{\pi}` },
          { name: 'Ondulation après filtrage', formula: r`\Delta V \approx \frac{I}{f_r\,C}` },
        ],
        keyRule: 'Double alternance : la fréquence d’ondulation est le double de celle du secteur (100 Hz pour un secteur à 50 Hz).',
        workedExample: {
          title: 'Ondulation d’une alimentation filtrée',
          statement: r`Une alimentation à pont de Graetz (secteur $50\text{ Hz}$) débite $I = 0{,}5\text{ A}$ ; le condensateur de filtrage vaut $C = 2200\,\mu\text{F}$. Estime l’ondulation.`,
          methodSteps: [
            r`Double alternance : $f_r = 2\times50 = 100\text{ Hz}$.`,
            r`$\Delta V \approx \frac{I}{f_r C} = \frac{0{,}5}{100\times2{,}2\times10^{-3}} = \frac{0{,}5}{0{,}22} \approx 2{,}3\text{ V}$.`,
          ],
          conclusion: r`Ondulation d’environ $2{,}3\text{ V}$ crête à crête ; doubler $C$ la diviserait par deux.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Tension redressée', svgContent: SVG_REDRESSEMENT },
        structuredSteps: [
          step(1, 'propriete', 'Mono-alternance', 'Le redressement simple alternance',
            r`Avec une seule diode en série avec la charge, seules les alternances positives passent ; pendant les alternances négatives, la diode est bloquée et la sortie est nulle. Avec le modèle à seuil, la tension crête de sortie vaut $V_m - V_0$.`,
            qcm('lmd_srit_l1_elnf_ch2_p3_ex1',
              r`Un redresseur simple alternance (une diode de seuil $0{,}7\text{ V}$) reçoit une tension sinusoïdale d’amplitude $V_m = 12\text{ V}$. Quelle est la tension crête aux bornes de la charge ?`,
              [r`$12\text{ V}$`, r`$11{,}3\text{ V}$`, r`$10{,}6\text{ V}$`, r`$12{,}7\text{ V}$`],
              1, r`Au sommet de l’alternance positive, la diode prend son seuil : $V_{\max} = 12 - 0{,}7 = 11{,}3\text{ V}$.`,
              'Une seule diode conduit : un seul seuil à retirer.')),
          step(2, 'methode', 'Valeur moyenne', 'La valeur moyenne en simple alternance',
            r`La moyenne d’une alternance sinusoïdale sur une période complète (alternance + zéro) vaut $\frac{V_m}{\pi}$ (diode idéale). C’est la tension que mesure un voltmètre en position continue (DC).`,
            qcm('lmd_srit_l1_elnf_ch2_p3_ex2',
              r`Un redresseur simple alternance à diode idéale reçoit une sinusoïde d’amplitude $V_m = 15{,}7\text{ V}$. Quelle est la valeur moyenne de la tension redressée ($V_{\text{moy}} = \frac{V_m}{\pi}$) ?`,
              [r`$10\text{ V}$`, r`$7{,}85\text{ V}$`, r`$15{,}7\text{ V}$`, r`$5\text{ V}$`],
              3, r`$V_{\text{moy}} = \frac{15{,}7}{\pi} \approx \frac{15{,}7}{3{,}14} = 5\text{ V}$.`,
              r`$\pi \approx 3{,}14$.`)),
          step(3, 'propriete', 'Pont de Graetz', 'Le redressement double alternance',
            r`Le **pont de Graetz** (4 diodes) retourne les alternances négatives : toutes deviennent positives. La valeur moyenne double : $V_{\text{moy}} = \frac{2V_m}{\pi}$. À chaque instant, **deux** diodes conduisent : la tension crête perd $2V_0 \approx 1{,}4\text{ V}$.`,
            qcm('lmd_srit_l1_elnf_ch2_p3_ex3',
              r`Un pont de Graetz à diodes idéales reçoit une sinusoïde d’amplitude $V_m = 15{,}7\text{ V}$. Quelle est la valeur moyenne de la tension redressée ($V_{\text{moy}} = \frac{2V_m}{\pi}$) ?`,
              [r`$5\text{ V}$`, r`$10\text{ V}$`, r`$31{,}4\text{ V}$`, r`$15{,}7\text{ V}$`],
              1, r`$V_{\text{moy}} = \frac{2\times15{,}7}{\pi} \approx \frac{31{,}4}{3{,}14} = 10\text{ V}$ : deux fois plus qu’en simple alternance.`,
              'Deux fois la valeur de la simple alternance.')),
          step(4, 'exemple', 'Fréquence', 'La fréquence de la tension redressée',
            r`En double alternance, chaque période du secteur donne **deux** arches positives : la tension redressée a une fréquence **double** de celle du secteur. En simple alternance, elle garde la fréquence du secteur. Cette fréquence $f_r$ intervient dans le calcul du filtrage.`,
            qcm('lmd_srit_l1_elnf_ch2_p3_ex4',
              r`Le secteur a une fréquence de $50\text{ Hz}$. Quelle est la fréquence de la tension en sortie d’un pont de Graetz (double alternance) ?`,
              [r`$25\text{ Hz}$`, r`$50\text{ Hz}$`, r`$100\text{ Hz}$`, r`$200\text{ Hz}$`],
              2, r`Chaque période du secteur donne deux arches : la fréquence est doublée, $f_r = 100\text{ Hz}$.`,
              'Compte les arches par période du secteur.')),
          step(5, 'methode', 'Filtrage', 'Le filtrage par condensateur',
            r`Un condensateur placé en parallèle sur la charge se charge à la crête puis se décharge lentement dans la charge entre deux crêtes. L’**ondulation** résiduelle vaut environ $\Delta V \approx \frac{I}{f_r C}$ : plus $C$ est grand, plus la tension est lisse.`,
            qcm('lmd_srit_l1_elnf_ch2_p3_ex5',
              r`Une alimentation double alternance ($f_r = 100\text{ Hz}$) débite $I = 0{,}5\text{ A}$ et est filtrée par $C = 2200\,\mu\text{F}$. Quelle est l’ondulation $\Delta V \approx \frac{I}{f_r C}$ ?`,
              [r`$0{,}23\text{ V}$`, r`$22{,}7\text{ V}$`, r`$4{,}5\text{ V}$`, r`$2{,}3\text{ V}$`],
              3, r`$\Delta V = \frac{0{,}5}{100\times2{,}2\times10^{-3}} = \frac{0{,}5}{0{,}22} \approx 2{,}3\text{ V}$.`,
              r`$100\times2{,}2\times10^{-3} = 0{,}22$.`),
            { formula: { name: 'Ondulation', formula: r`\Delta V \approx \frac{I}{f_r\,C}` } }),
          step(6, 'piege', 'Deux seuils', 'Dans un pont, on perd deux seuils',
            r`Piège : dans un pont de Graetz, le courant traverse **deux** diodes à chaque alternance. Avec le modèle à seuil, la tension crête de sortie vaut donc $V_m - 2V_0$, et non $V_m - V_0$ comme en simple alternance.`,
            qcm('lmd_srit_l1_elnf_ch2_p3_ex6',
              r`Un pont de Graetz (diodes de seuil $0{,}7\text{ V}$) reçoit une sinusoïde d’amplitude $V_m = 12\text{ V}$. Quelle est la tension crête aux bornes de la charge ?`,
              [r`$10{,}6\text{ V}$`, r`$11{,}3\text{ V}$`, r`$12\text{ V}$`, r`$9{,}2\text{ V}$`],
              0, r`Deux diodes conduisent en série à chaque alternance : $V_{\max} = 12 - 2\times0{,}7 = 10{,}6\text{ V}$.`,
              'Combien de diodes le courant traverse-t-il ?')),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 3 : LES TRANSISTORS
  // ==========================================================================
  {
    id: 'lmd_srit_l1_elnf_ch3',
    subjectId: 'lmd_electronique_fondamentale',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 3,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: SOURCE,
    title: 'Les transistors',
    summary: 'Transistor bipolaire : structure, gain, régimes, polarisation et droite de charge ; régime dynamique, amplificateur émetteur commun ; transistor à effet de champ.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_elnf_ch3_p1',
        order: 1,
        title: 'Le transistor bipolaire en régime statique',
        summary: 'Structure NPN et PNP, relations entre courants, gain β, régimes bloqué, linéaire et saturé, polarisation par résistance de base, droite de charge.',
        conceptExplanation: r`Le **transistor bipolaire** (NPN ou PNP) a trois bornes : **base** (B), **collecteur** (C) et **émetteur** (E). Un petit courant de base commande un courant de collecteur bien plus grand : $I_C = \beta I_B$ en régime linéaire. On le **polarise** avec des résistances pour fixer son point de fonctionnement (point de repos), avant de lui appliquer un signal.`,
        formulas: [
          { name: 'Relations entre courants', formula: r`I_E = I_B + I_C \quad ; \quad I_C = \beta\,I_B` },
          { name: 'Polarisation par résistance de base', formula: r`I_B = \frac{V_{CC} - V_{BE}}{R_B} \quad ; \quad V_{CE} = V_{CC} - R_C I_C` },
          { name: 'Droite de charge statique', formula: r`I_C = \frac{V_{CC} - V_{CE}}{R_C}` },
        ],
        keyRule: r`Si $\beta I_B$ dépasse le courant de saturation $\frac{V_{CC}}{R_C}$, le transistor est saturé : $I_C = I_{C\,\text{sat}}$ et $V_{CE} \approx 0{,}2\text{ V}$.`,
        workedExample: {
          title: 'Point de repos d’un transistor polarisé par résistance de base',
          statement: r`$V_{CC} = 12\text{ V}$, $R_B = 470\text{ k}\Omega$, $R_C = 2{,}2\text{ k}\Omega$, $\beta = 100$, $V_{BE} = 0{,}7\text{ V}$. Calcule $I_B$, $I_C$ et $V_{CE}$.`,
          methodSteps: [
            r`Maille d’entrée : $I_B = \frac{12 - 0{,}7}{470\,000} \approx 24\,\mu\text{A}$.`,
            r`$I_C = \beta I_B = 100\times24\,\mu\text{A} = 2{,}4\text{ mA}$.`,
            r`Maille de sortie : $V_{CE} = 12 - 2200\times2{,}4\times10^{-3} \approx 12 - 5{,}3 = 6{,}7\text{ V}$ : régime linéaire (ni bloqué, ni saturé).`,
          ],
          conclusion: r`Point de repos : $I_C \approx 2{,}4\text{ mA}$, $V_{CE} \approx 6{,}7\text{ V}$.`,
        },
        visualSchema: { type: 'custom_svg', title: 'Polarisation d’un NPN par résistance de base', svgContent: SVG_POLAR_NPN },
        structuredSteps: [
          step(1, 'definition', 'Structure', 'Trois bornes, trois courants',
            r`Un transistor NPN est formé de deux jonctions : base-émetteur et base-collecteur. Le courant entre par la base et le collecteur et sort tout entier par l’émetteur : $I_E = I_B + I_C$ (loi des nœuds). La flèche du symbole est sur l’émetteur, dans le sens du courant (sortante pour un NPN).`,
            qcm('lmd_srit_l1_elnf_ch3_p1_ex1',
              r`Dans un transistor NPN, on mesure $I_B = 20\,\mu\text{A}$ et $I_C = 2\text{ mA}$. Quel est le courant d’émetteur ?`,
              [r`$2\text{ mA}$`, r`$1{,}98\text{ mA}$`, r`$2{,}02\text{ mA}$`, r`$22\text{ mA}$`],
              2, r`$I_E = I_B + I_C = 0{,}02 + 2 = 2{,}02\text{ mA}$.`,
              r`$20\,\mu\text{A} = 0{,}02\text{ mA}$.`)),
          step(2, 'propriete', 'Gain', 'Le gain en courant β',
            r`En régime linéaire, le courant de collecteur est proportionnel au courant de base : $I_C = \beta I_B$, où $\beta$ (noté aussi $h_{21e}$ ou $h_{FE}$) vaut typiquement de 50 à 300. Un petit courant commande donc un grand courant : c’est l’effet transistor.`,
            qcm('lmd_srit_l1_elnf_ch3_p1_ex2',
              r`Un transistor de gain $\beta = 150$ fonctionne en régime linéaire avec $I_B = 30\,\mu\text{A}$. Que vaut $I_C$ ?`,
              [r`$4{,}5\text{ mA}$`, r`$0{,}45\text{ mA}$`, r`$45\text{ mA}$`, r`$5\,\mu\text{A}$`],
              0, r`$I_C = \beta I_B = 150\times30\,\mu\text{A} = 4500\,\mu\text{A} = 4{,}5\text{ mA}$.`,
              r`$150\times30 = 4500$.`)),
          step(3, 'definition', 'Régimes', 'Bloqué, linéaire ou saturé',
            r`Trois régimes : **bloqué** ($I_B = 0$, donc $I_C = 0$ et $V_{CE} = V_{CC}$, interrupteur ouvert) ; **linéaire** ($I_C = \beta I_B$, utilisé en amplification) ; **saturé** ($V_{CE} \approx 0{,}2\text{ V}$, interrupteur fermé, utilisé en logique et en commutation).`,
            qcm('lmd_srit_l1_elnf_ch3_p1_ex3',
              r`Un transistor alimenté sous $V_{CC} = 12\text{ V}$ présente $V_{CE} = 0{,}2\text{ V}$ avec un courant de base important. Dans quel régime est-il ?`,
              ['Bloqué', 'Linéaire', 'Saturé', 'En avalanche'],
              2, r`$V_{CE} \approx 0{,}2\text{ V}$ : le transistor se comporte comme un interrupteur fermé, il est saturé.`,
              'Un transistor bloqué aurait V_CE ≈ V_CC.')),
          step(4, 'methode', 'Polarisation', 'Calculer le point de repos',
            r`Polarisation par résistance de base : (1) maille d’entrée $V_{CC} = R_B I_B + V_{BE}$ donne $I_B$ ; (2) $I_C = \beta I_B$ ; (3) maille de sortie $V_{CE} = V_{CC} - R_C I_C$ ; (4) vérifie que $V_{CE}$ est bien supérieur à $0{,}2\text{ V}$ (sinon saturé).`,
            qcm('lmd_srit_l1_elnf_ch3_p1_ex4',
              r`Un NPN est polarisé avec $V_{CC} = 12\text{ V}$, $R_B = 470\text{ k}\Omega$, $R_C = 2{,}2\text{ k}\Omega$, $\beta = 100$ et $V_{BE} = 0{,}7\text{ V}$. Quelle est la tension $V_{CE}$ de repos ?`,
              [r`$5{,}3\text{ V}$`, r`$6{,}7\text{ V}$`, r`$11{,}3\text{ V}$`, r`$0{,}2\text{ V}$`],
              1, r`$I_B = \frac{11{,}3}{470\,000} \approx 24\,\mu\text{A}$, $I_C \approx 2{,}4\text{ mA}$, $V_{CE} = 12 - 2200\times0{,}0024 \approx 12 - 5{,}3 = 6{,}7\text{ V}$.`,
              'Calcule I_B, puis I_C, puis la chute de tension dans R_C.')),
          step(5, 'propriete', 'Droite de charge', 'La droite de charge statique',
            r`La maille de sortie impose $I_C = \frac{V_{CC} - V_{CE}}{R_C}$ : c’est une droite dans le plan $(V_{CE}, I_C)$. Elle coupe l’axe des tensions en $V_{CE} = V_{CC}$ (transistor bloqué) et l’axe des courants en $I_{C\,\text{sat}} = \frac{V_{CC}}{R_C}$ (saturation). Le point de repos est sur cette droite.`,
            qcm('lmd_srit_l1_elnf_ch3_p1_ex5',
              r`Un transistor est monté avec $V_{CC} = 12\text{ V}$ et $R_C = 2\text{ k}\Omega$. Quel est le courant de saturation $I_{C\,\text{sat}} \approx \frac{V_{CC}}{R_C}$ (point d’intersection de la droite de charge avec l’axe des courants) ?`,
              [r`$24\text{ mA}$`, r`$0{,}6\text{ mA}$`, r`$12\text{ mA}$`, r`$6\text{ mA}$`],
              3, r`$I_{C\,\text{sat}} = \frac{12}{2000} = 6\times10^{-3}\text{ A} = 6\text{ mA}$.`,
              r`Divise $V_{CC}$ par $R_C$.`),
            { formula: { name: 'Courant de saturation', formula: r`I_{C\,\text{sat}} \approx \frac{V_{CC}}{R_C}` } }),
          step(6, 'piege', 'Saturation', 'I_C ne peut pas dépasser I_C sat',
            r`Piège classique : calculer $I_C = \beta I_B$ sans vérifier. Si ce résultat dépasse $I_{C\,\text{sat}}$, le transistor est **saturé** : le vrai courant est $I_C \approx I_{C\,\text{sat}}$ et $V_{CE} \approx 0{,}2\text{ V}$. La relation $I_C = \beta I_B$ ne vaut qu’en régime linéaire.`,
            qcm('lmd_srit_l1_elnf_ch3_p1_ex6',
              r`Un transistor ($\beta = 100$) est monté avec $V_{CC} = 10\text{ V}$ et $R_C = 1\text{ k}\Omega$. On lui impose $I_B = 0{,}2\text{ mA}$. Quel est le courant de collecteur réel ?`,
              [r`$20\text{ mA}$`, r`environ $10\text{ mA}$ (saturé)`, r`$0{,}2\text{ mA}$`, r`$2\text{ mA}$`],
              1, r`$\beta I_B = 20\text{ mA}$, mais $I_{C\,\text{sat}} = \frac{10}{1000} = 10\text{ mA}$ : le transistor est saturé et $I_C \approx 10\text{ mA}$.`,
              r`Compare $\beta I_B$ au courant de saturation.`)),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_elnf_ch3_p2',
        order: 2,
        title: 'Régime dynamique, amplificateur et transistor à effet de champ',
        summary: 'Schéma petits signaux, paramètres h du transistor, gain de l’émetteur commun, effet de la charge, transistor à effet de champ.',
        conceptExplanation: r`Une fois polarisé, le transistor amplifie de petites variations autour du point de repos. On étudie séparément le **régime statique** (continu) et le **régime dynamique** (petits signaux), en remplaçant le transistor par son **modèle hybride** ($h_{11e}$, $\beta$). Le montage **émetteur commun** donne un fort gain en tension, avec une inversion de phase. Le **transistor à effet de champ** (FET) est commandé en tension, pas en courant.`,
        formulas: [
          { name: 'Résistance d’entrée du transistor', formula: r`h_{11e} = r_{be} = \frac{\beta\,V_T}{I_{C0}}` },
          { name: 'Gain de l’émetteur commun', formula: r`A_v = -\frac{\beta\,(R_C \parallel R_L)}{h_{11e}}` },
          { name: 'Transistor à effet de champ', formula: r`I_D = I_{DSS}\left(1 - \frac{V_{GS}}{V_P}\right)^2` },
        ],
        keyRule: 'En dynamique : les condensateurs de liaison et de découplage sont des courts-circuits, les sources continues sont éteintes (mises à la masse).',
        workedExample: {
          title: 'Gain d’un étage émetteur commun',
          statement: r`Un transistor ($\beta = 100$) polarisé à $I_{C0} = 1\text{ mA}$ est monté en émetteur commun avec $R_C = 2{,}5\text{ k}\Omega$ (émetteur découplé, sans charge). $V_T = 25\text{ mV}$. Calcule le gain.`,
          methodSteps: [
            r`$h_{11e} = \frac{\beta V_T}{I_{C0}} = \frac{100\times0{,}025}{0{,}001} = 2500\,\Omega$.`,
            r`$A_v = -\frac{\beta R_C}{h_{11e}} = -\frac{100\times2500}{2500} = -100$.`,
          ],
          conclusion: r`$A_v = -100$ : la tension est amplifiée 100 fois et inversée (déphasage de 180°).`,
        },
        structuredSteps: [
          step(1, 'methode', 'Superposition', 'Séparer le continu et le signal',
            r`Grâce à la linéarité autour du point de repos, on étudie deux circuits : le **schéma statique** (seules les sources continues ; condensateurs = circuits ouverts) qui donne le point de repos, et le **schéma dynamique** (seul le signal ; condensateurs = courts-circuits, $V_{CC}$ relié à la masse) qui donne le gain.`,
            qcm('lmd_srit_l1_elnf_ch3_p2_ex1',
              'Pour tracer le schéma DYNAMIQUE (petits signaux) d’un amplificateur à transistor, que fait-on de l’alimentation continue V_CC et des condensateurs de liaison ?',
              ['V_CC reste, les condensateurs sont ouverts', 'V_CC est reliée à la masse, les condensateurs sont des courts-circuits', 'V_CC est doublée, les condensateurs sont supprimés', 'On garde tout tel quel'],
              1, 'En dynamique, une source continue n’a pas de variation : on l’éteint (masse). Les condensateurs, choisis grands, ont une impédance négligeable à la fréquence du signal : ce sont des courts-circuits.',
              'Une source continue ne varie pas.')),
          step(2, 'propriete', 'Modèle h', 'Le transistor en petits signaux',
            r`En petits signaux, l’entrée base-émetteur se comporte comme une résistance $h_{11e} = \frac{\beta V_T}{I_{C0}}$, et la sortie comme une source de courant $\beta\,i_b$ (on néglige souvent $h_{12e}$ et $h_{22e}$). La valeur de $h_{11e}$ dépend donc du point de repos.`,
            qcm('lmd_srit_l1_elnf_ch3_p2_ex2',
              r`Un transistor de gain $\beta = 100$ est polarisé à $I_{C0} = 1\text{ mA}$. Avec $V_T = 25\text{ mV}$, que vaut $h_{11e} = \frac{\beta V_T}{I_{C0}}$ ?`,
              [r`$25\,\Omega$`, r`$250\,\Omega$`, r`$25\text{ k}\Omega$`, r`$2{,}5\text{ k}\Omega$`],
              3, r`$h_{11e} = \frac{100\times0{,}025}{0{,}001} = 2500\,\Omega = 2{,}5\text{ k}\Omega$.`,
              r`$100\times25\text{ mV} = 2{,}5\text{ V}$, à diviser par $1\text{ mA}$.`),
            { formula: { name: 'Résistance d’entrée', formula: r`h_{11e} = \frac{\beta V_T}{I_{C0}}` } }),
          step(3, 'methode', 'Émetteur commun', 'Le gain de l’amplificateur émetteur commun',
            r`Avec l’émetteur découplé (relié à la masse en dynamique) : $v_e = h_{11e}i_b$ et $v_s = -\beta i_b R_C$. D’où $A_v = \frac{v_s}{v_e} = -\frac{\beta R_C}{h_{11e}}$. Le gain est grand (souvent plusieurs dizaines ou centaines) et **négatif**.`,
            qcm('lmd_srit_l1_elnf_ch3_p2_ex3',
              r`Un amplificateur émetteur commun (émetteur découplé, sans charge) a $\beta = 100$, $R_C = 2{,}5\text{ k}\Omega$ et $h_{11e} = 2{,}5\text{ k}\Omega$. Quel est son gain en tension $A_v = -\frac{\beta R_C}{h_{11e}}$ ?`,
              [r`$-100$`, r`$+100$`, r`$-1$`, r`$-250$`],
              0, r`$A_v = -\frac{100\times2500}{2500} = -100$.`,
              r`$R_C$ et $h_{11e}$ sont égales ici.`)),
          step(4, 'exemple', 'Charge', 'La charge réduit le gain',
            r`Quand on branche une charge $R_L$ en sortie (via un condensateur), elle se met en parallèle sur $R_C$ en dynamique : $A_v = -\frac{\beta (R_C \parallel R_L)}{h_{11e}}$. Une charge faible fait chuter le gain : on intercale parfois un étage adaptateur (collecteur commun).`,
            qcm('lmd_srit_l1_elnf_ch3_p2_ex4',
              r`L’amplificateur précédent ($\beta = 100$, $R_C = 2{,}5\text{ k}\Omega$, $h_{11e} = 2{,}5\text{ k}\Omega$) est chargé par $R_L = 2{,}5\text{ k}\Omega$. Quel est le nouveau gain $A_v = -\frac{\beta(R_C \parallel R_L)}{h_{11e}}$ ?`,
              [r`$-100$`, r`$-200$`, r`$-50$`, r`$-25$`],
              2, r`$R_C \parallel R_L = \frac{2{,}5\times2{,}5}{5} = 1{,}25\text{ k}\Omega$, donc $A_v = -\frac{100\times1{,}25}{2{,}5} = -50$ : la charge a divisé le gain par deux.`,
              'Deux résistances égales en parallèle : la moitié.')),
          step(5, 'propriete', 'FET', 'Le transistor à effet de champ',
            r`Un **FET** (JFET ou MOSFET) a trois bornes : grille (G), drain (D), source (S). Il est commandé par la **tension** $V_{GS}$ et ne consomme pratiquement aucun courant de grille (impédance d’entrée énorme). Pour un JFET : $I_D = I_{DSS}\left(1 - \frac{V_{GS}}{V_P}\right)^2$, où $V_P$ est la tension de pincement.`,
            qcm('lmd_srit_l1_elnf_ch3_p2_ex5',
              r`Un JFET a $I_{DSS} = 10\text{ mA}$ et $V_P = -4\text{ V}$. Quel est son courant de drain pour $V_{GS} = -2\text{ V}$, avec $I_D = I_{DSS}\left(1 - \frac{V_{GS}}{V_P}\right)^2$ ?`,
              [r`$5\text{ mA}$`, r`$2{,}5\text{ mA}$`, r`$7{,}5\text{ mA}$`, r`$10\text{ mA}$`],
              1, r`$\frac{V_{GS}}{V_P} = \frac{-2}{-4} = 0{,}5$, donc $I_D = 10\times(1 - 0{,}5)^2 = 10\times0{,}25 = 2{,}5\text{ mA}$.`,
              r`Attention aux deux signes moins : $\frac{-2}{-4} = +0{,}5$.`)),
          step(6, 'piege', 'Signe du gain', 'Le signe moins veut dire « inversion »',
            r`Piège : le signe moins du gain de l’émetteur commun n’est pas une erreur. Il signifie que la sortie est **en opposition de phase** avec l’entrée (déphasage de $180°$) : quand la tension d’entrée monte, celle de sortie descend.`,
            qcm('lmd_srit_l1_elnf_ch3_p2_ex6',
              r`Un amplificateur a un gain $A_v = -80$. Une tension sinusoïdale d’amplitude $10\text{ mV}$ est appliquée à l’entrée. Que trouve-t-on en sortie ?`,
              [r`Une sinusoïde de $80\text{ mV}$ en phase`, r`Une sinusoïde de $0{,}8\text{ V}$ déphasée de $180°$`, r`Une tension continue de $-0{,}8\text{ V}$`, r`Une sinusoïde de $0{,}8\text{ V}$ en phase`],
              1, r`$|A_v| \times 10\text{ mV} = 800\text{ mV} = 0{,}8\text{ V}$, et le signe moins indique une opposition de phase ($180°$).`,
              r`Le module donne l’amplitude, le signe donne la phase.`)),
        ],
      }),
    ],
  },

  // ==========================================================================
  // CHAPITRE 4 : AMPLIFICATEUR OPÉRATIONNEL ET AMPLIFICATEUR DIFFÉRENTIEL
  // ==========================================================================
  {
    id: 'lmd_srit_l1_elnf_ch4',
    subjectId: 'lmd_electronique_fondamentale',
    gradeLevel: 'lmd_srit_l1',
    semesters: [2],
    order: 4,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: SOURCE,
    title: 'Amplificateur opérationnel et amplificateur différentiel',
    summary: 'AOP idéal, régime linéaire, montages inverseur, non inverseur et suiveur, saturation ; sommateur, soustracteur, intégrateur, dérivateur ; amplificateur différentiel et taux de réjection.',
    points: [
      makePoint({
        id: 'lmd_srit_l1_elnf_ch4_p1',
        order: 1,
        title: 'L’AOP idéal et les montages de base',
        summary: 'Hypothèses de l’AOP idéal, contre-réaction, montages inverseur, non inverseur et suiveur, impédance d’entrée et saturation.',
        conceptExplanation: r`L’**amplificateur opérationnel** (AOP) amplifie énormément la différence entre ses deux entrées $\varepsilon = V_+ - V_-$. Utilisé avec une **contre-réaction** (sortie reliée à l’entrée $-$ par un réseau de résistances), il fonctionne en **régime linéaire** et son gain ne dépend plus que des résistances. Deux hypothèses suffisent pour tout calculer : courants d’entrée nuls et $V_+ = V_-$.`,
        formulas: [
          { name: 'AOP idéal en régime linéaire', formula: r`i_+ = i_- = 0 \quad ; \quad V_+ = V_-` },
          { name: 'Inverseur', formula: r`V_s = -\frac{R_2}{R_1}\,V_e` },
          { name: 'Non inverseur', formula: r`V_s = \left(1 + \frac{R_2}{R_1}\right)V_e` },
        ],
        keyRule: r`La sortie ne peut jamais dépasser les tensions de saturation $\pm V_{\text{sat}}$ (un peu moins que l’alimentation).`,
        workedExample: {
          title: 'Démontrer la formule de l’inverseur',
          statement: r`Ve attaque l’entrée $-$ à travers $R_1$ ; $R_2$ relie la sortie à l’entrée $-$ ; l’entrée $+$ est à la masse. Calcule $V_s$.`,
          methodSteps: [
            r`Régime linéaire : $V_- = V_+ = 0$ (masse virtuelle).`,
            r`Courant dans $R_1$ : $i = \frac{V_e - 0}{R_1}$ ; il ne rentre pas dans l’AOP, il traverse donc $R_2$.`,
            r`$V_s = 0 - R_2 i = -\frac{R_2}{R_1}V_e$.`,
          ],
          conclusion: r`$V_s = -\frac{R_2}{R_1}V_e$ : gain fixé par deux résistances, signe moins (inversion).`,
        },
        visualSchema: { type: 'custom_svg', title: 'Montage inverseur', svgContent: SVG_AOP_INVERSEUR },
        structuredSteps: [
          step(1, 'definition', 'AOP idéal', 'Les deux règles de l’AOP idéal',
            r`Un AOP idéal a une impédance d’entrée infinie (**aucun courant** n’entre dans ses entrées : $i_+ = i_- = 0$) et un gain différentiel infini. Avec une contre-réaction sur l’entrée $-$, la sortie s’ajuste pour que $\varepsilon = V_+ - V_- = 0$ : les deux entrées sont au **même potentiel**.`,
            qcm('lmd_srit_l1_elnf_ch4_p1_ex1',
              r`Un AOP idéal fonctionne en régime linéaire (contre-réaction sur l’entrée $-$). Son entrée $+$ est reliée à un potentiel de $2\text{ V}$. Que vaut le potentiel de l’entrée $-$ ?`,
              [r`$0\text{ V}$`, r`$-2\text{ V}$`, r`$2\text{ V}$`, 'Il dépend uniquement de la sortie'],
              2, r`En régime linéaire idéal, $\varepsilon = 0$ : $V_- = V_+ = 2\text{ V}$.`,
              'En régime linéaire, les deux entrées sont au même potentiel.')),
          step(2, 'propriete', 'Inverseur', 'Le montage inverseur',
            r`Le signal attaque l’entrée $-$ par $R_1$, $R_2$ relie la sortie à l’entrée $-$, l’entrée $+$ est à la masse. L’entrée $-$ est une **masse virtuelle** ($V_- = 0$) et : $V_s = -\frac{R_2}{R_1}V_e$. Le gain peut être supérieur ou inférieur à 1 en valeur absolue.`,
            qcm('lmd_srit_l1_elnf_ch4_p1_ex2',
              r`Un montage inverseur a $R_1 = 10\text{ k}\Omega$ et $R_2 = 47\text{ k}\Omega$. La tension d’entrée vaut $V_e = 0{,}2\text{ V}$. Que vaut $V_s = -\frac{R_2}{R_1}V_e$ ?`,
              [r`$-0{,}94\text{ V}$`, r`$0{,}94\text{ V}$`, r`$-9{,}4\text{ V}$`, r`$-1{,}14\text{ V}$`],
              0, r`$V_s = -\frac{47}{10}\times0{,}2 = -4{,}7\times0{,}2 = -0{,}94\text{ V}$.`,
              r`Le gain vaut $-4{,}7$.`)),
          step(3, 'propriete', 'Non inverseur', 'Le montage non inverseur',
            r`Le signal attaque directement l’entrée $+$ ; la sortie est ramenée sur l’entrée $-$ par le pont diviseur $R_2$ (vers la sortie) et $R_1$ (vers la masse). On obtient $V_s = \left(1 + \frac{R_2}{R_1}\right)V_e$ : gain positif, toujours au moins égal à 1.`,
            qcm('lmd_srit_l1_elnf_ch4_p1_ex3',
              r`Un montage non inverseur a $R_1 = 10\text{ k}\Omega$ (vers la masse) et $R_2 = 90\text{ k}\Omega$ (vers la sortie). Avec $V_e = 0{,}5\text{ V}$, que vaut $V_s = \left(1+\frac{R_2}{R_1}\right)V_e$ ?`,
              [r`$4{,}5\text{ V}$`, r`$-4{,}5\text{ V}$`, r`$5\text{ V}$`, r`$9{,}5\text{ V}$`],
              2, r`$V_s = (1 + 9)\times0{,}5 = 10\times0{,}5 = 5\text{ V}$.`,
              'N’oublie pas le « 1 + ».')),
          step(4, 'exemple', 'Suiveur', 'Le suiveur, adaptateur d’impédance',
            r`Si l’on relie directement la sortie à l’entrée $-$ ($R_2 = 0$, $R_1$ infinie), le non inverseur devient un **suiveur** : $V_s = V_e$. Il ne sert pas à amplifier mais à **adapter les impédances** : il ne prélève aucun courant à la source (entrée infinie) et peut alimenter une charge faible.`,
            qcm('lmd_srit_l1_elnf_ch4_p1_ex4',
              'À quoi sert principalement un montage suiveur (V_s = V_e) réalisé avec un AOP ?',
              ['À doubler la tension', 'À inverser le signal', 'À adapter les impédances : ne pas charger la source tout en alimentant la charge', 'À filtrer les hautes fréquences'],
              2, 'Le suiveur a une impédance d’entrée très grande et une impédance de sortie très faible : il transmet la tension sans perturber la source. C’est un adaptateur d’impédance.',
              'Que se passe-t-il pour le courant prélevé à la source ?')),
          step(5, 'methode', 'Impédance d’entrée', 'L’impédance d’entrée de l’inverseur',
            r`L’entrée $-$ étant une masse virtuelle, la source qui attaque l’inverseur « voit » seulement $R_1$ : $Z_e = \frac{V_e}{i} = R_1$. Pour ne pas charger la source, il faut donc choisir $R_1$ assez grande, ou utiliser un non inverseur (impédance d’entrée quasi infinie).`,
            qcm('lmd_srit_l1_elnf_ch4_p1_ex5',
              r`Un montage inverseur a $R_1 = 10\text{ k}\Omega$ et $R_2 = 100\text{ k}\Omega$. Quelle est son impédance d’entrée ?`,
              [r`$100\text{ k}\Omega$`, r`infinie`, r`$110\text{ k}\Omega$`, r`$10\text{ k}\Omega$`],
              3, r`L’entrée $-$ est à $0\text{ V}$ (masse virtuelle) : la source voit seulement $R_1$, donc $Z_e = R_1 = 10\text{ k}\Omega$.`,
              'Pense à la masse virtuelle.')),
          step(6, 'piege', 'Saturation', 'La sortie est limitée par l’alimentation',
            r`Piège : les formules ne valent que si le résultat reste entre $-V_{\text{sat}}$ et $+V_{\text{sat}}$ (environ $1$ à $1{,}5\text{ V}$ sous les tensions d’alimentation). Si le calcul donne plus, la sortie est **saturée** et reste bloquée à $\pm V_{\text{sat}}$.`,
            qcm('lmd_srit_l1_elnf_ch4_p1_ex6',
              r`Un non inverseur de gain $11$ est alimenté en $\pm15\text{ V}$ ($V_{\text{sat}} = 14\text{ V}$). On applique $V_e = 2\text{ V}$ continu. Quelle est la tension de sortie ?`,
              [r`$22\text{ V}$`, r`$-14\text{ V}$`, r`$2\text{ V}$`, r`$14\text{ V}$`],
              3, r`Le calcul donne $11\times2 = 22\text{ V}$, impossible : la sortie sature à $+V_{\text{sat}} = 14\text{ V}$.`,
              'La sortie ne peut pas dépasser l’alimentation.')),
        ],
      }),
      makePoint({
        id: 'lmd_srit_l1_elnf_ch4_p2',
        order: 2,
        title: 'Montages de calcul et amplificateur différentiel',
        summary: 'Sommateur, soustracteur, intégrateur, dérivateur, amplificateur différentiel et taux de réjection du mode commun, comparateur.',
        conceptExplanation: r`L’AOP réalise des **opérations mathématiques** sur des tensions : addition, soustraction, intégration, dérivation (d’où son nom). L’**amplificateur différentiel**, étage d’entrée de tout AOP, amplifie la différence de deux tensions et rejette ce qu’elles ont en commun (le bruit) : sa qualité se mesure par le **taux de réjection du mode commun** (TRMC).`,
        formulas: [
          { name: 'Sommateur inverseur', formula: r`V_s = -R\left(\frac{V_1}{R_1} + \frac{V_2}{R_2}\right)` },
          { name: 'Intégrateur', formula: r`V_s(t) = -\frac{1}{RC}\int V_e\,dt` },
          { name: 'Taux de réjection du mode commun', formula: r`\text{TRMC} = \frac{A_d}{A_{mc}} \quad ; \quad \text{TRMC}_{\text{dB}} = 20\log\frac{A_d}{A_{mc}}` },
        ],
        keyRule: 'Sans contre-réaction, l’AOP n’est plus en régime linéaire : il bascule en saturation, c’est un comparateur.',
        workedExample: {
          title: 'Rampe en sortie d’un intégrateur',
          statement: r`Un intégrateur a $R = 10\text{ k}\Omega$ et $C = 1\,\mu\text{F}$, condensateur déchargé à $t = 0$. On applique $V_e = 1\text{ V}$ constant. Calcule $V_s$ à $t = 20\text{ ms}$.`,
          methodSteps: [
            r`$RC = 10^{4}\times10^{-6} = 0{,}01\text{ s}$.`,
            r`$V_s(t) = -\frac{1}{RC}V_e\,t = -100\,t$ (rampe de $-100\text{ V/s}$).`,
            r`À $t = 0{,}02\text{ s}$ : $V_s = -2\text{ V}$.`,
          ],
          conclusion: r`$V_s = -2\text{ V}$ (la rampe continue jusqu’à la saturation).`,
        },
        structuredSteps: [
          step(1, 'propriete', 'Sommateur', 'Le sommateur inverseur',
            r`Plusieurs tensions attaquent l’entrée $-$ (masse virtuelle) à travers des résistances $R_1$, $R_2$… Leurs courants s’additionnent et traversent la résistance de contre-réaction $R$ : $V_s = -R\left(\frac{V_1}{R_1} + \frac{V_2}{R_2}\right)$. Avec toutes les résistances égales : $V_s = -(V_1 + V_2)$. C’est le principe de la table de mixage.`,
            qcm('lmd_srit_l1_elnf_ch4_p2_ex1',
              r`Un sommateur inverseur a $R = R_1 = R_2 = 10\text{ k}\Omega$. On applique $V_1 = 1\text{ V}$ et $V_2 = 2\text{ V}$. Que vaut la sortie ?`,
              [r`$3\text{ V}$`, r`$-1\text{ V}$`, r`$-3\text{ V}$`, r`$-1{,}5\text{ V}$`],
              2, r`$V_s = -10\text{ k}\left(\frac{1}{10\text{ k}} + \frac{2}{10\text{ k}}\right) = -(1 + 2) = -3\text{ V}$.`,
              'Résistances égales : somme des tensions, changée de signe.')),
          step(2, 'propriete', 'Soustracteur', 'Le soustracteur (amplificateur de différence)',
            r`Avec quatre résistances appariées (rapport $\frac{R_2}{R_1}$ sur chaque entrée), l’AOP amplifie la différence des deux tensions : $V_s = \frac{R_2}{R_1}(V_2 - V_1)$, où $V_2$ arrive sur l’entrée $+$ et $V_1$ sur l’entrée $-$. Utile pour mesurer l’écart entre deux capteurs.`,
            qcm('lmd_srit_l1_elnf_ch4_p2_ex2',
              r`Un soustracteur à résistances appariées a $\frac{R_2}{R_1} = 5$. On applique $V_2 = 1{,}2\text{ V}$ (côté $+$) et $V_1 = 1{,}0\text{ V}$ (côté $-$). Que vaut $V_s = \frac{R_2}{R_1}(V_2 - V_1)$ ?`,
              [r`$11\text{ V}$`, r`$1\text{ V}$`, r`$-1\text{ V}$`, r`$0{,}2\text{ V}$`],
              1, r`$V_s = 5\times(1{,}2 - 1{,}0) = 5\times0{,}2 = 1\text{ V}$.`,
              'Seule la différence est amplifiée.')),
          step(3, 'methode', 'Intégrateur', 'L’intégrateur',
            r`En remplaçant $R_2$ par un condensateur $C$ dans l’inverseur, le courant $\frac{V_e}{R}$ charge le condensateur : $V_s(t) = -\frac{1}{RC}\int V_e\,dt$. Une tension d’entrée constante donne une **rampe** en sortie ; un signal carré donne un triangle.`,
            qcm('lmd_srit_l1_elnf_ch4_p2_ex3',
              r`Un intégrateur a $R = 10\text{ k}\Omega$ et $C = 1\,\mu\text{F}$ ; son condensateur est déchargé à $t = 0$. On applique $V_e = 1\text{ V}$ constant. Que vaut $V_s$ à $t = 20\text{ ms}$, avec $V_s = -\frac{1}{RC}V_e\,t$ ?`,
              [r`$-0{,}2\text{ V}$`, r`$-20\text{ V}$`, r`$+2\text{ V}$`, r`$-2\text{ V}$`],
              3, r`$RC = 0{,}01\text{ s}$, donc $V_s = -\frac{1}{0{,}01}\times1\times0{,}02 = -2\text{ V}$.`,
              r`$\frac{1}{RC} = 100\text{ s}^{-1}$.`)),
          step(4, 'exemple', 'Dérivateur', 'Le dérivateur',
            r`En échangeant $R$ et $C$ (condensateur à l’entrée, résistance en contre-réaction), on obtient $V_s = -RC\frac{dV_e}{dt}$ : la sortie est proportionnelle à la **vitesse de variation** de l’entrée. Une rampe donne une tension constante ; ce montage amplifie aussi le bruit haute fréquence.`,
            qcm('lmd_srit_l1_elnf_ch4_p2_ex4',
              r`Un dérivateur a $RC = 1\text{ ms}$. Son entrée est une rampe qui monte de $500\text{ V}$ par seconde. Que vaut la sortie $V_s = -RC\frac{dV_e}{dt}$ ?`,
              [r`$-0{,}5\text{ V}$`, r`$-500\text{ V}$`, r`$+0{,}5\text{ V}$`, r`$-5\text{ V}$`],
              0, r`$V_s = -10^{-3}\times500 = -0{,}5\text{ V}$, constante tant que la rampe dure.`,
              r`$1\text{ ms} = 10^{-3}\text{ s}$.`)),
          step(5, 'propriete', 'Différentiel', 'L’amplificateur différentiel et le TRMC',
            r`Un amplificateur différentiel fournit $V_s = A_d(V_+ - V_-) + A_{mc}V_{mc}$, où $V_{mc} = \frac{V_+ + V_-}{2}$ est la tension de mode commun. Idéalement $A_{mc} = 0$. Le **TRMC** $= \frac{A_d}{A_{mc}}$, exprimé en décibels par $20\log\frac{A_d}{A_{mc}}$, mesure sa capacité à rejeter le bruit commun aux deux entrées.`,
            qcm('lmd_srit_l1_elnf_ch4_p2_ex5',
              r`Un amplificateur différentiel a un gain différentiel $A_d = 1000$ et un gain de mode commun $A_{mc} = 0{,}1$. Que vaut son taux de réjection du mode commun en décibels ($20\log\frac{A_d}{A_{mc}}$) ?`,
              [r`$40\text{ dB}$`, r`$60\text{ dB}$`, r`$80\text{ dB}$`, r`$100\text{ dB}$`],
              2, r`$\frac{A_d}{A_{mc}} = \frac{1000}{0{,}1} = 10^{4}$, et $20\log 10^{4} = 20\times4 = 80\text{ dB}$.`,
              r`$\log 10^{4} = 4$.`)),
          step(6, 'piege', 'Comparateur', 'Sans contre-réaction : un comparateur',
            r`Piège : sans contre-réaction (ou avec une réaction sur l’entrée $+$), on ne peut plus écrire $V_+ = V_-$. L’AOP amplifie $\varepsilon$ avec son énorme gain et **sature** : $V_s = +V_{\text{sat}}$ si $V_+ > V_-$, $V_s = -V_{\text{sat}}$ sinon. C’est un **comparateur**, base des circuits de détection de seuil.`,
            qcm('lmd_srit_l1_elnf_ch4_p2_ex6',
              r`Un AOP est utilisé SANS contre-réaction (en boucle ouverte), avec $\pm V_{\text{sat}} = \pm13\text{ V}$. On applique $V_+ = 2\text{ V}$ et $V_- = 1{,}9\text{ V}$. Quelle est la tension de sortie ?`,
              [r`$0{,}1\text{ V}$`, r`$+13\text{ V}$`, r`$-13\text{ V}$`, r`$0\text{ V}$`],
              1, r`$\varepsilon = 2 - 1{,}9 = +0{,}1\text{ V} > 0$ ; multiplié par un gain énorme, la sortie sature à $+V_{\text{sat}} = +13\text{ V}$.`,
              r`Regarde seulement le signe de $V_+ - V_-$.`)),
        ],
      }),
    ],
  },
];
