import type { CurriculumChapter, CurriculumPoint } from '../../../lib/curriculum/types';

type PointInput = Omit<CurriculumPoint, 'exercises'> & {
  structuredSteps: NonNullable<CurriculumPoint['structuredSteps']>;
};

const withPointExercises = (pts: PointInput[]): CurriculumPoint[] =>
  pts.map((p) => ({ ...p, exercises: p.structuredSteps.map((s) => s.exercise) }));

// Leçon rédigée à partir du PDF officiel « PC 1ère CDE : Puissance et énergie électrique » (format v2).
export const PHYSIQUE_1RE_CD_L05_PUISSANCE_ENERGIE_ELECTRIQUE: CurriculumChapter = {
  id: 'premiere_c_physique_l05_puissance_energie_electrique',
  subjectId: 'physique_chimie',
  gradeLevel: 'premiere_c',
  alsoForGrades: ['premiere_d'],
  order: 5,
  title: 'Leçon 5 : Puissance et énergie électrique',
  summary:
    'Effet Joule dans un conducteur ohmique, bilans d’énergie et de puissance d’un générateur et d’un récepteur actif (électrolyseur, moteur), loi de Pouillet, rendements et transport de l’énergie électrique.',
  officialVolumeHours: 4,
  contentVersion: 2,
  source: 'PC 1ère CDE : Puissance et énergie électriques.pdf',
  points: withPointExercises([
    // ========================================================================
    // POINT 1 : Énergie et puissance reçues par un conducteur ohmique (effet Joule)
    // ========================================================================
    {
      id: 'premiere_c_physique_l05_puissance_energie_electrique_p01',
      order: 1,
      title: 'Conducteur ohmique : loi d’Ohm et effet Joule',
      summary:
        'Relier tension, courant, résistance et conductance, puis calculer l’énergie et la puissance dissipées par effet Joule.',
      conceptExplanation:
        "Un **conducteur ohmique** (résistor de résistance $R$) convertit intégralement en chaleur l’énergie électrique qu’il reçoit : c’est l’**effet Joule**.\n\n- **Loi d’Ohm et conductance** : en convention récepteur, la tension $U_{AB}$ aux bornes d’un conducteur ohmique parcouru par un courant d’intensité $I$ vérifie :\n  $$U_{AB} = R \\cdot I \\qquad \\text{ou} \\qquad I = G \\cdot U_{AB}$$\n  où $R$ est la **résistance** en ohm ($\\Omega$) et $G = \\frac{1}{R}$ la **conductance** en siemens ($\\mathrm{S}$ ou $\\Omega^{-1}$).\n- **Puissance et énergie électriques reçues** pendant une durée $t$ (ou $\\Delta t$) :\n  $$P_{\\text{reçue}} = U_{AB}\\,I = R\\,I^2 = \\frac{U_{AB}^2}{R} = G\\,U_{AB}^2$$\n  $$E_{\\text{reçue}} = U_{AB}\\,I\\,t = R\\,I^2\\,t = \\frac{U_{AB}^2}{R}\\,t$$\n  La puissance dissipée sous forme thermique est appelée **puissance Joule** $P_J$.\n- **Unités pratiques** : $1\\,\\mathrm{Wh} = 3\\,600\\,\\mathrm{J}$ et $1\\,\\mathrm{kWh} = 3{,}6 \\times 10^6\\,\\mathrm{J}$.",
      keyRule:
        'Pour un conducteur ohmique : U = R·I, G = 1/R, P = U·I = R·I² = U²/R et E = P·Δt = R·I²·Δt (en J avec Δt en s, ou en Wh avec Δt en h).',
      formulas: [
        {
          name: 'Loi d’Ohm et conductance',
          formula: 'U_{AB} = R\\,I \\quad\\text{et}\\quad G = \\frac{1}{R}',
          note: 'U en V, I en A, R en Ω, G en S',
        },
        {
          name: 'Puissance et énergie Joule',
          formula: 'P_J = U_{AB}\\,I = R\\,I^2 = \\frac{U_{AB}^2}{R} \\quad\\text{et}\\quad E_J = R\\,I^2\\,t',
          note: 'Conversion complète en énergie thermique',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Conducteur ohmique et relation U = R·I',
        svgContent: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="150" rx="10" fill="#0f172a"/>
  <!-- Convention recepteur -->
  <line x1="25" y1="55" x2="70" y2="55" stroke="#94a3b8" stroke-width="2.5"/>
  <rect x="70" y="42" width="76" height="26" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="108" y="60" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold">R</text>
  <line x1="146" y1="55" x2="185" y2="55" stroke="#94a3b8" stroke-width="2.5"/>
  <circle cx="35" cy="55" r="3" fill="#f8fafc"/>
  <circle cx="175" cy="55" r="3" fill="#f8fafc"/>
  <text x="35" y="44" text-anchor="middle" fill="#e2e8f0" font-size="11">A</text>
  <text x="175" y="44" text-anchor="middle" fill="#e2e8f0" font-size="11">B</text>
  <polygon points="56,55 48,50 48,60" fill="#22c55e"/>
  <text x="50" y="72" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">I</text>
  <line x1="168" y1="88" x2="42" y2="88" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="40,88 49,83 49,93" fill="#f59e0b"/>
  <text x="105" y="106" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">U_AB = R·I</text>
  <!-- Droite caracteristique -->
  <line x1="220" y1="120" x2="335" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <line x1="220" y1="120" x2="220" y2="22" stroke="#64748b" stroke-width="1.5"/>
  <line x1="220" y1="120" x2="322" y2="32" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="330" y="135" fill="#94a3b8" font-size="11">I</text>
  <text x="206" y="28" fill="#94a3b8" font-size="11">U</text>
  <text x="285" y="45" fill="#38bdf8" font-size="10">pente R</text>
  <text x="105" y="132" text-anchor="middle" fill="#cbd5e1" font-size="10">P_J = R·I² = U·I</text>
</svg>`,
        caption: 'En convention récepteur, U_AB et I sont de sens contraires et toute la puissance U·I est dissipée par effet Joule.',
      },
      workedExample: {
        title: 'Intensité dans un résistor chauffant (Activité p. 2)',
        statement:
          'Un conducteur ohmique de résistance $R = 20\\,\\Omega$ dissipe une énergie thermique $W = 540\\,\\mathrm{J}$ pendant $\\Delta t = 5\\,\\text{min}$. Calculer l’intensité $I$ du courant qui le traverse.',
        methodSteps: [
          '1) Convertir la durée en secondes : Δt = 5 × 60 = 300 s.',
          '2) Utiliser la loi de Joule : W = R · I² · Δt, d’où I² = W / (R · Δt).',
          '3) Calculer : I² = 540 / (20 × 300) = 540 / 6 000 = 0,09, donc I = √0,09 = 0,3 A.',
        ],
        conclusion: 'L’intensité du courant traversant le conducteur ohmique est I = 0,3 A.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Conductance et loi d’Ohm',
          stepTitle: 'Expression et unité de la conductance',
          paragraphText:
            'La conductance $G$ d’un conducteur ohmique est l’inverse de sa résistance : $G = \\frac{1}{R}$. Elle s’exprime en **siemens** ($\\mathrm{S}$) et relie l’intensité à la tension par $I = G\\,U_{AB}$.',
          exercise: {
            id: 'physique_1re_cd_l05_p01_q01',
            type: 'mcq',
            prompt: 'Un conducteur ohmique a une résistance $R = 25\\,\\Omega$. Quelle est sa conductance $G$ ?',
            options: ['$0{,}04\\,\\mathrm{S}$', '$0{,}25\\,\\mathrm{S}$', '$4\\,\\mathrm{S}$', '$25\\,\\mathrm{S}$'],
            correctAnswerIndex: 0,
            explanation: '$G = 1/R = 1/25 = 0{,}04\\,\\mathrm{S}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Formule',
          stepTheme: 'Puissance et effet Joule',
          stepTitle: 'Puissance dissipée par un résistor',
          paragraphText:
            'Dans un conducteur ohmique, $U_{AB} = R\\,I$, donc la puissance reçue vaut $P = U_{AB}\\,I = R\\,I^2 = \\frac{U_{AB}^2}{R}$. Elle est entièrement dissipée sous forme de chaleur.',
          exercise: {
            id: 'physique_1re_cd_l05_p01_q02',
            type: 'mcq',
            prompt: 'Une résistance $R = 20\\,\\Omega$ est parcourue par un courant $I = 0{,}5\\,\\mathrm{A}$. Quelle puissance $P_J$ dissipe-t-elle par effet Joule ?',
            options: ['$5\\,\\mathrm{W}$', '$10\\,\\mathrm{W}$', '$20\\,\\mathrm{W}$', '$40\\,\\mathrm{W}$'],
            correctAnswerIndex: 0,
            explanation: '$P_J = R\\,I^2 = 20 \\times (0{,}5)^2 = 20 \\times 0{,}25 = 5\\,\\mathrm{W}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'exemple',
          stepBadge: 'Activité',
          stepTheme: 'Calcul d’intensité depuis l’énergie',
          stepTitle: 'Activité d’application : résistor de 20 Ω',
          paragraphText:
            'Un conducteur ohmique de résistance $R = 20\\,\\Omega$ dissipe une énergie thermique $W = 540\\,\\mathrm{J}$ pendant $\\Delta t = 5\\,\\text{min} = 300\\,\\mathrm{s}$. De $W = R\\,I^2\\,\\Delta t$, on tire $I = \\sqrt{\\frac{W}{R\\,\\Delta t}}$.',
          exercise: {
            id: 'physique_1re_cd_l05_p01_q03',
            type: 'mcq',
            prompt: 'Un conducteur ohmique de résistance $R = 20\\,\\Omega$ dégage $540\\,\\mathrm{J}$ en $5\\,\\text{min}$. Quelle est l’intensité $I$ du courant ?',
            options: ['$0{,}3\\,\\mathrm{A}$', '$0{,}09\\,\\mathrm{A}$', '$2{,}32\\,\\mathrm{A}$', '$1{,}8\\,\\mathrm{A}$'],
            correctAnswerIndex: 0,
            explanation: '$\\Delta t = 5 \\times 60 = 300\\,\\mathrm{s}$. $I^2 = \\frac{540}{20 \\times 300} = 0{,}09$, donc $I = 0{,}3\\,\\mathrm{A}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Conversions d’énergie',
          stepTitle: 'Passer du watt-heure (Wh) au joule (J)',
          paragraphText:
            'La relation $E = P\\,\\Delta t$ donne $E$ en joules ($\\mathrm{J}$) si $P$ est en $\\mathrm{W}$ et $\\Delta t$ en $\\mathrm{s}$, ou en **watts-heures** ($\\mathrm{Wh}$) si $P$ est en $\\mathrm{W}$ et $\\Delta t$ en heures ($\\mathrm{h}$).',
          exercise: {
            id: 'physique_1re_cd_l05_p01_q04',
            type: 'mcq',
            prompt: 'Un fer à repasser de puissance nominale $1\\,000\\,\\mathrm{W}$ sous $220\\,\\mathrm{V}$ fonctionne pendant $20\\,\\text{min}$. Quelle énergie électrique consomme-t-il en $\\mathrm{Wh}$ ?',
            options: ['$333\\,\\mathrm{Wh}$', '$55\\,\\mathrm{Wh}$', '$20\\,000\\,\\mathrm{Wh}$', '$50\\,\\mathrm{Wh}$'],
            correctAnswerIndex: 0,
            explanation: '$\\Delta t = \\frac{20}{60}\\,\\mathrm{h} = \\frac{1}{3}\\,\\mathrm{h}$, donc $E = P\\,\\Delta t = 1\\,000 \\times \\frac{1}{3} \\approx 333\\,\\mathrm{Wh}$ (soit $1{,}2 \\times 10^6\\,\\mathrm{J}$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Résistance d’un appareil chauffant',
          stepTitle: 'Calculer R à partir de U et P nominales',
          paragraphText:
            'Lorsque la tension $U$ et la puissance $P$ d’un appareil purement résistif sont connues, on utilise $P = \\frac{U^2}{R}$ pour trouver $R = \\frac{U^2}{P}$. Attention à ne pas oublier le carré sur $U$.',
          exercise: {
            id: 'physique_1re_cd_l05_p01_q05',
            type: 'mcq',
            prompt: 'Quelle est la résistance chauffante d’un fer à repasser portant les indications $(220\\,\\mathrm{V}\\,;\\,1\\,000\\,\\mathrm{W})$ ?',
            options: ['$48{,}4\\,\\Omega$', '$0{,}22\\,\\Omega$', '$4{,}55\\,\\Omega$', '$220\\,\\Omega$'],
            correctAnswerIndex: 0,
            explanation: '$R = \\frac{U^2}{P} = \\frac{220^2}{1\\,000} = \\frac{48\\,400}{1\\,000} = 48{,}4\\,\\Omega$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Résistances en dérivation',
          stepTitle: 'Partage du courant et de l’énergie en parallèle',
          paragraphText:
            'Deux résistors $R_1$ et $R_2$ en dérivation sont soumis à la même tension $U$. Leur résistance équivalente est $R = \\frac{R_1 R_2}{R_1 + R_2}$, et l’énergie dissipée pendant $\\Delta t$ vaut $E_i = \\frac{U^2}{R_i}\\Delta t = R_i I_i^2 \\Delta t$.',
          exercise: {
            id: 'physique_1re_cd_l05_p01_q06',
            type: 'mcq',
            prompt: 'Deux résistors $R_1 = 40\\,\\Omega$ et $R_2 = 24\\,\\Omega$ sont montés en dérivation. Quelle est leur résistance équivalente $R$ ?',
            options: ['$15\\,\\Omega$', '$64\\,\\Omega$', '$32\\,\\Omega$', '$16\\,\\Omega$'],
            correctAnswerIndex: 0,
            explanation: '$R = \\frac{R_1 R_2}{R_1 + R_2} = \\frac{40 \\times 24}{40 + 24} = \\frac{960}{64} = 15\\,\\Omega$.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Générateur : loi d’Ohm, caractéristique et bilan de puissance
    // ========================================================================
    {
      id: 'premiere_c_physique_l05_puissance_energie_electrique_p02',
      order: 2,
      title: 'Générateur électrique : f.é.m., loi d’Ohm et bilan de puissance',
      summary:
        'Exploiter U_PN = e − r·I (ou e = E), tracer la caractéristique d’un générateur et établir son bilan énergétique P_e = P_d + P_J.',
      conceptExplanation:
        "Un **générateur** (pile, accumulateur) transforme une énergie non électrique (chimique, mécanique) en énergie électrique disponible pour le circuit extérieur.\n\n- **Modèle série et modèle parallèle (convention générateur)** : entre ses bornes $P$ (pôle $+$) et $N$ (pôle $-$), la tension $U_{PN}$ diminue linéairement lorsque le courant débité $I$ augmente :\n  $$U_{PN} = e - r\\,I \\qquad \\Longleftrightarrow \\qquad I = I_0 - g\\,U_{PN}$$\n  où $e$ (ou $E$) est la **force électromotrice (f.é.m.)** en volts ($\\mathrm{V}$), $r$ la **résistance interne** en ohms ($\\Omega$), $I_0 = \\frac{e}{r}$ l’intensité de court-circuit et $g = \\frac{1}{r}$.\n- **Travail sur les électrons** : un électron de charge $-q_e$ ($e = 1{,}6 \\times 10^{-19}\\,\\mathrm{C}$) passant de $P$ vers $N$ dans le générateur gagne l’énergie potentielle électrique $\\Delta E_p = q_e U_{PN} > 0$.\n- **Bilan de puissance et d’énergie** :\n  - Puissance électrique totale engendrée : $P_e = e\\,I$ ($E_e = e\\,I\\,t$).\n  - Puissance dissipée par effet Joule interne : $P_J = r\\,I^2$ ($E_J = r\\,I^2\\,t$).\n  - Puissance électrique disponible (fournie au circuit) : $P_d = U_{PN}\\,I = P_e - P_J = e\\,I - r\\,I^2$.",
      keyRule:
        'Pour un générateur (e, r) : U_PN = e − r·I. Bilan de puissance : P_e = P_d + P_J, soit e·I = U_PN·I + r·I².',
      formulas: [
        {
          name: 'Loi d’Ohm du générateur',
          formula: 'U_{PN} = e - r\\,I \\quad\\text{et}\\quad I_{\\mathrm{cc}} = \\frac{e}{r}',
          note: 'e = tension à vide (I = 0) ; −r = pente de la droite U_PN(I)',
        },
        {
          name: 'Bilan de puissance du générateur',
          formula: 'e\\,I = U_{PN}\\,I + r\\,I^2',
          note: 'P_engendrée = P_disponible + P_Joule interne',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Modèle et caractéristique d’un générateur (e, r)',
        svgContent: `<svg viewBox="0 0 360 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="155" rx="10" fill="#0f172a"/>
  <!-- Schema equivalent -->
  <line x1="20" y1="60" x2="65" y2="60" stroke="#94a3b8" stroke-width="2.5"/>
  <circle cx="85" cy="60" r="18" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
  <line x1="67" y1="60" x2="103" y2="60" stroke="#22c55e" stroke-width="1.5"/>
  <line x1="103" y1="60" x2="122" y2="60" stroke="#94a3b8" stroke-width="2.5"/>
  <rect x="122" y="48" width="46" height="24" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
  <text x="145" y="64" text-anchor="middle" fill="#f59e0b" font-size="11" font-weight="bold">r</text>
  <line x1="168" y1="60" x2="195" y2="60" stroke="#94a3b8" stroke-width="2.5"/>
  <text x="85" y="34" text-anchor="middle" fill="#22c55e" font-size="11" font-weight="bold">e</text>
  <text x="28" y="48" text-anchor="middle" fill="#e2e8f0" font-size="11">N</text>
  <text x="188" y="48" text-anchor="middle" fill="#e2e8f0" font-size="11">P</text>
  <polygon points="186,60 177,55 177,65" fill="#38bdf8"/>
  <text x="180" y="80" text-anchor="middle" fill="#38bdf8" font-size="11">I</text>
  <line x1="35" y1="102" x2="180" y2="102" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="185,102 175,97 175,107" fill="#38bdf8"/>
  <text x="108" y="120" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">U_PN = e − r·I</text>
  <!-- Caracteristique U_PN(I) -->
  <line x1="225" y1="125" x2="340" y2="125" stroke="#64748b" stroke-width="1.5"/>
  <line x1="225" y1="125" x2="225" y2="22" stroke="#64748b" stroke-width="1.5"/>
  <line x1="225" y1="35" x2="328" y2="125" stroke="#22c55e" stroke-width="2.5"/>
  <text x="215" y="39" text-anchor="end" fill="#22c55e" font-size="11" font-weight="bold">e</text>
  <text x="328" y="139" text-anchor="middle" fill="#f59e0b" font-size="10">I_0=e/r</text>
  <text x="210" y="25" fill="#94a3b8" font-size="10">U_PN</text>
  <text x="342" y="128" fill="#94a3b8" font-size="10">I</text>
</svg>`,
        caption: 'Caractéristique U_PN(I) décroissante : l’ordonnée à l’origine vaut e et la pente vaut −r.',
      },
      workedExample: {
        title: 'Bilan de puissance d’un accumulateur (Ex 3 p. 7)',
        statement:
          'Un générateur a pour équation caractéristique $U_{PN} = -0{,}01\\,I + 2$. Calculer sa tension aux bornes, sa puissance disponible et ses pertes internes lorsqu’il débite $I = 10\\,\\mathrm{A}$.',
        methodSteps: [
          '1) Identifier les paramètres : e = 2 V et r = 0,01 Ω.',
          '2) Tension aux bornes : U_PN = 2 − 0,01 × 10 = 1,9 V.',
          '3) Puissances : P_e = e·I = 20 W ; P_d = U_PN·I = 19 W ; P_J = r·I² = 0,01 × 100 = 1 W.',
        ],
        conclusion: 'P_e = 20 W = P_d (19 W) + P_J (1 W) : le bilan de puissance est exactement vérifié.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Force électromotrice et résistance interne',
          stepTitle: 'Lire e et r sur la caractéristique U_PN(I)',
          paragraphText:
            'La caractéristique tension-intensité d’un générateur linéaire a pour équation $U_{PN} = e - r\\,I$. À circuit ouvert ($I = 0$), on mesure $U_{PN} = e$ ; la pente de la droite vaut $-r$.',
          exercise: {
            id: 'physique_1re_cd_l05_p02_q01',
            type: 'mcq',
            prompt: 'Une droite de caractéristique donne $U_{PN} = -0{,}01\\,I + 2$ (avec $U_{PN}$ en $\\mathrm{V}$ et $I$ en $\\mathrm{A}$). Quelles sont la nature et les grandeurs caractéristiques de ce dipôle ?',
            options: [
              'Un générateur de f.é.m. $e = 2\\,\\mathrm{V}$ et de résistance interne $r = 0{,}01\\,\\Omega$',
              'Un électrolyseur de f.c.é.m. $E\' = 2\\,\\mathrm{V}$ et $r\' = 0{,}01\\,\\Omega$',
              'Un conducteur ohmique de résistance $R = 2\\,\\Omega$',
              'Un générateur de f.é.m. $e = 0{,}01\\,\\mathrm{V}$ et $r = 2\\,\\Omega$',
            ],
            correctAnswerIndex: 0,
            explanation: 'La pente est négative ($-0{,}01$), donc $U_{PN}$ décroît avec $I$ : c’est un générateur d’équation $U_{PN} = e - r\\,I$ avec $e = 2\\,\\mathrm{V}$ et $r = 0{,}01\\,\\Omega$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Modèle parallèle du générateur',
          stepTitle: 'Intensité de court-circuit et modèle parallèle',
          paragraphText:
            'En isolant $I$ dans $U_{PN} = e - r\\,I$, on obtient la loi du modèle parallèle : $I = \\frac{e}{r} - \\frac{1}{r}U_{PN} = I_0 - g\\,U_{PN}$, où $I_0 = e/r$ est l’intensité de court-circuit ($U_{PN} = 0$).',
          exercise: {
            id: 'physique_1re_cd_l05_p02_q02',
            type: 'mcq',
            prompt: 'Un générateur a une f.é.m. $e = 12\\,\\mathrm{V}$ et une résistance interne $r = 1{,}5\\,\\Omega$. Quelle est son intensité de court-circuit $I_0$ ?',
            options: ['$8\\,\\mathrm{A}$', '$18\\,\\mathrm{A}$', '$0{,}125\\,\\mathrm{A}$', '$10{,}5\\,\\mathrm{A}$'],
            correctAnswerIndex: 0,
            explanation: 'En court-circuit ($U_{PN} = 0$), $I_0 = \\frac{e}{r} = \\frac{12}{1{,}5} = 8\\,\\mathrm{A}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Bilan',
          stepTheme: 'Puissances d’un générateur',
          stepTitle: 'Distinguer puissance engendrée et puissance disponible',
          paragraphText:
            'La puissance chimique (ou mécanique) convertie en électricité est $P_e = e\\,I$. Une fraction $P_J = r\\,I^2$ est perdue par effet Joule dans la résistance interne ; le circuit extérieur ne reçoit que $P_d = U_{PN}\\,I$.',
          exercise: {
            id: 'physique_1re_cd_l05_p02_q03',
            type: 'mcq',
            prompt: 'Un générateur ($e = 12\\,\\mathrm{V}$, $r = 2\\,\\Omega$) débite un courant $I = 1{,}5\\,\\mathrm{A}$. Quelle puissance électrique disponible $P_d$ fournit-il au circuit extérieur ?',
            options: ['$13{,}5\\,\\mathrm{W}$', '$18\\,\\mathrm{W}$', '$4{,}5\\,\\mathrm{W}$', '$22{,}5\\,\\mathrm{W}$'],
            correctAnswerIndex: 0,
            explanation: '$U_{PN} = 12 - 2 \\times 1{,}5 = 9\\,\\mathrm{V}$, donc $P_d = U_{PN}\\,I = 9 \\times 1{,}5 = 13{,}5\\,\\mathrm{W}$ (ou $P_e - P_J = 18 - 4{,}5 = 13{,}5\\,\\mathrm{W}$).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Générateur idéal de tension',
          stepTitle: 'Cas d’un générateur de résistance interne négligeable',
          paragraphText:
            'Lorsque la résistance interne est négligeable ($r \\approx 0$), on a $U_{PN} = e$ quel que soit le courant débité : il n’y a aucune perte Joule interne ($P_J = 0$) et $P_d = P_e = e\\,I$.',
          exercise: {
            id: 'physique_1re_cd_l05_p02_q04',
            type: 'mcq',
            prompt: 'Dans la situation d’évaluation du cours, un générateur ($E = 120\\,\\mathrm{V}$, $r \\approx 0$) débite $I = 3\\,\\mathrm{A}$ pendant $2\\,\\text{h}$. Quelle énergie électrique totale fournit-il ?',
            options: ['$2{,}592\\,\\mathrm{MJ}$', '$360\\,\\mathrm{J}$', '$720\\,\\mathrm{kJ}$', '$1{,}296\\,\\mathrm{MJ}$'],
            correctAnswerIndex: 0,
            explanation: '$t = 2 \\times 3\\,600 = 7\\,200\\,\\mathrm{s}$, donc $E = E\\,I\\,t = 120 \\times 3 \\times 7\\,200 = 2\\,592\\,000\\,\\mathrm{J} \\approx 2{,}59\\,\\mathrm{MJ}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Convention et sens du courant',
          stepTitle: 'Signe du transfert d’énergie potentielle des électrons',
          paragraphText:
            'Dans le générateur, le courant conventionnel $I$ sort par la borne $P$ ($+$). Les électrons, de charge négative, se déplacent en sens inverse (de $P$ vers $N$ dans le générateur) en gagnant une énergie $\\Delta E_p = e_0 U_{PN} > 0$.',
          exercise: {
            id: 'physique_1re_cd_l05_p02_q05',
            type: 'mcq',
            prompt: 'Pour qu’un dipôle fonctionne en générateur, comment doivent être orientés la flèche de tension $U_{PN}$ et le sens conventionnel du courant $I$ ?',
            options: [
              'Dans le même sens (sortant par la borne P pour le courant et pointant vers P pour U_PN)',
              'En sens contraires comme pour un conducteur ohmique',
              'Toujours perpendiculaires sur le schéma',
              'Le courant entre obligatoirement par la borne P',
            ],
            correctAnswerIndex: 0,
            explanation: 'En convention générateur, le courant $I$ sort par la borne positive $P$, donc la flèche de $U_{PN}$ (de $N$ vers $P$) et la flèche de $I$ sont de même sens.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Courbes expérimentales U(I)',
          stepTitle: 'Identifier un générateur parmi plusieurs dipôles',
          paragraphText:
            'Sur un graphe présentant $U$ en fonction de $I$ pour plusieurs dipôles : une droite passant par l’origine représente un résistor ($U = R\\,I$), une droite croissante d’ordonnée à l’origine $E\' > 0$ un électrolyseur ou moteur, et une droite décroissante un générateur.',
          exercise: {
            id: 'physique_1re_cd_l05_p02_q06',
            type: 'mcq',
            prompt: 'On trace trois droites $U(I)$ : courbe 1 passant par $(0,0)$ et $(1\\,\\mathrm{A}, 5\\,\\mathrm{V})$ ; courbe 2 décroissante de $(0, 4{,}5\\,\\mathrm{V})$ à $(2\\,\\mathrm{A}, 1{,}5\\,\\mathrm{V})$ ; courbe 3 croissante de $(0, 1{,}8\\,\\mathrm{V})$ à $(2\\,\\mathrm{A}, 5{,}8\\,\\mathrm{V})$. Quelle courbe correspond au générateur ?',
            options: [
              'La courbe 2 ($e = 4{,}5\\,\\mathrm{V}$, $r = 1{,}5\\,\\Omega$)',
              'La courbe 1 ($e = 5\\,\\mathrm{V}$)',
              'La courbe 3 ($e = 1{,}8\\,\\mathrm{V}$)',
              'Aucune des trois courbes',
            ],
            correctAnswerIndex: 0,
            explanation: 'La courbe 2 est la seule droite décroissante : $e = 4{,}5\\,\\mathrm{V}$ et $r = \\frac{4{,}5 - 1{,}5}{2 - 0} = 1{,}5\\,\\Omega$.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Récepteur actif (électrolyseur, moteur) : U_AB = E' + r'·I et bilan
    // ========================================================================
    {
      id: 'premiere_c_physique_l05_puissance_energie_electrique_p03',
      order: 3,
      title: 'Récepteur actif (électrolyseur, moteur) : loi d’Ohm et bilan',
      summary:
        'Modéliser un électrolyseur ou un moteur par U_AB = E′ + r′·I et distinguer énergie utile et pertes par effet Joule.',
      conceptExplanation:
        "Un **récepteur actif** (électrolyseur ou moteur à courant continu) ne convertit pas toute l’énergie électrique reçue en chaleur : il en transforme une partie en énergie **chimique** (électrolyseur) ou **mécanique** (moteur).\n\n- **Étude expérimentale (montage potentiométrique)** : pour un électrolyseur contenant une solution de soude ou de sulfate de cuivre, le courant ne s’établit de façon notable qu’au-delà d’une tension seuil.\n- **Loi d’Ohm d’un récepteur actif (pour $I > 0$, en convention récepteur)** :\n  $$U_{AB} = E' + r'\\,I$$\n  où $E'$ (en $\\mathrm{V}$) est la **force contre-électromotrice (f.c.é.m.)** et $r'$ (en $\\Omega$) la **résistance interne** du récepteur.\n- **Bilan d’énergie et de puissance pendant $\\Delta t$** :\n  - Puissance électrique totale reçue : $P_r = U_{AB}\\,I = E'\\,I + r'\\,I^2$ ($E_r = U_{AB}\\,I\\,\\Delta t$).\n  - Puissance utile (chimique ou mécanique) : $P_u = E'\\,I$ ($E_u = E'\\,I\\,\\Delta t$).\n  - Puissance thermique perdue par effet Joule : $P_{\\text{th}} = r'\\,I^2$ ($E_{\\text{th}} = r'\\,I^2\\,\\Delta t$).",
      keyRule:
        'Pour un récepteur actif (E′, r′) parcouru par I > 0 : U_AB = E′ + r′·I. La puissance reçue se partage en puissance utile P_u = E′·I et pertes Joule r′·I².',
      formulas: [
        {
          name: 'Loi d’Ohm du récepteur actif',
          formula: 'U_{AB} = E\' + r\'\\,I \\quad (I > 0)',
          note: 'E′ = f.c.é.m. en V ; r′ = résistance interne en Ω',
        },
        {
          name: 'Bilan de puissance d’un récepteur',
          formula: 'P_r = U_{AB}\\,I = E\'\\,I + r\'\\,I^2 = P_u + P_{\\mathrm{th}}',
          note: 'E′·I = puissance utile (chimique ou mécanique)',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Caractéristique U(I) d’un électrolyseur ou d’un moteur',
        svgContent: `<svg viewBox="0 0 360 155" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="155" rx="10" fill="#0f172a"/>
  <!-- Axes U(I) -->
  <line x1="45" y1="125" x2="180" y2="125" stroke="#64748b" stroke-width="1.5"/>
  <line x1="45" y1="125" x2="45" y2="20" stroke="#64748b" stroke-width="1.5"/>
  <!-- Partie linéaire I > 0 -->
  <line x1="45" y1="88" x2="168" y2="30" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- Courbe seuil experimentale -->
  <path d="M 45 125 C 45 100, 52 90, 72 75" fill="none" stroke="#94a3b8" stroke-dasharray="3 3" stroke-width="1.5"/>
  <text x="38" y="92" text-anchor="end" fill="#f59e0b" font-size="11" font-weight="bold">E'</text>
  <text x="38" y="26" text-anchor="end" fill="#94a3b8" font-size="10">U_AB</text>
  <text x="182" y="129" fill="#94a3b8" font-size="10">I</text>
  <text x="122" y="45" fill="#38bdf8" font-size="10">pente r'</text>
  <!-- Bilan énergétique -->
  <rect x="205" y="25" width="138" height="102" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
  <text x="274" y="45" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="bold">Bilan de puissance</text>
  <text x="274" y="67" text-anchor="middle" fill="#38bdf8" font-size="11">P_r = U_AB · I</text>
  <text x="274" y="88" text-anchor="middle" fill="#22c55e" font-size="11">P_u = E' · I (utile)</text>
  <text x="274" y="109" text-anchor="middle" fill="#f59e0b" font-size="11">P_th = r' · I² (Joule)</text>
</svg>`,
        caption: 'Pour I > 0, la caractéristique U_AB(I) est une droite d’ordonnée à l’origine E′ et de pente +r′.',
      },
      workedExample: {
        title: 'Bilan énergétique d’un électrolyseur (Activité p. 4–5 corrigée)',
        statement:
          'Un électrolyseur ($E\' = 6\\,\\mathrm{V}$, $r\' = 2\\,\\Omega$) fonctionne pendant $t = 30\\,\\mathrm{s}$ sous $I = 0{,}5\\,\\mathrm{A}$. Calculer l’énergie électrique reçue $W_r$ et l’énergie utile $W_u$.',
        methodSteps: [
          '1) Tension aux bornes : U = E′ + r′·I = 6 + 2 × 0,5 = 7 V.',
          '2) Puissance et énergie reçues : P_r = U·I = 3,5 W, soit W_r = P_r · t = 3,5 × 30 = 105 J.',
          '3) Énergie utile : W_u = E′ · I · t = 6 × 0,5 × 30 = 90 J (pertes Joule W_th = 15 J).',
        ],
        conclusion: 'L’électrolyseur reçoit W_r = 105 J, dont W_u = 90 J utiles et 15 J perdus par effet Joule.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Force contre-électromotrice E′',
          stepTitle: 'Signification physique de E′ et r′',
          paragraphText:
            'Dans un électrolyseur ou un moteur, le terme $E\'$ représente la tension associée à la conversion utile d’énergie (chimique ou mécanique) et $r\'$ modélise les pertes résistives internes par effet Joule.',
          exercise: {
            id: 'physique_1re_cd_l05_p03_q01',
            type: 'mcq',
            prompt: 'Pour un électrolyseur, que représente le produit $E\'\\,I\\,\\Delta t$ ?',
            options: [
              'L’énergie utile transformée en énergie chimique lors de l’électrolyse',
              'L’énergie dissipée sous forme de chaleur par effet Joule',
              'L’énergie totale consommée par l’ensemble du circuit',
              'L’énergie potentielle de pesanteur de la cuve',
            ],
            correctAnswerIndex: 0,
            explanation: 'Dans un récepteur actif, $E_r = E\'\\,I\\,\\Delta t + r\'\\,I^2\\,\\Delta t$ : $E_u = E\'\\,I\\,\\Delta t$ est l’énergie utile (chimique pour l’électrolyseur, mécanique pour le moteur).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Exploitation graphique',
          stepTitle: 'Déterminer E′ et r′ à partir d’un relevé U(I)',
          paragraphText:
            'Sur la partie linéaire de la caractéristique d’un électrolyseur ($I > 0$), on choisit deux points $(I_1, U_1)$ et $(I_2, U_2)$ pour calculer $r\' = \\frac{U_2 - U_1}{I_2 - I_1}$, puis on en déduit $E\' = U_1 - r\'\\,I_1$.',
          exercise: {
            id: 'physique_1re_cd_l05_p03_q02',
            type: 'mcq',
            prompt: 'Dans le tableau expérimental d’un électrolyseur, on lit $(I_1 = 27\\,\\mathrm{mA},\\, U_1 = 2{,}0\\,\\mathrm{V})$ et $(I_2 = 149\\,\\mathrm{mA},\\, U_2 = 2{,}5\\,\\mathrm{V})$. Quelle valeur approchée obtient-on pour $r\'$ et $E\'$ ?',
            options: [
              '$r\' \\approx 4{,}1\\,\\Omega$ et $E\' \\approx 1{,}89\\,\\mathrm{V}$',
              '$r\' \\approx 0{,}24\\,\\Omega$ et $E\' \\approx 2{,}0\\,\\mathrm{V}$',
              '$r\' \\approx 4{,}1\\,\\Omega$ et $E\' \\approx 2{,}5\\,\\mathrm{V}$',
              '$r\' \\approx 41\\,\\Omega$ et $E\' \\approx 1{,}0\\,\\mathrm{V}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$r\' = \\frac{2{,}5 - 2{,}0}{(149 - 27)\\times 10^{-3}} = \\frac{0{,}5}{0{,}122} \\approx 4{,}10\\,\\Omega$ et $E\' = 2{,}0 - 4{,}10 \\times 0{,}027 \\approx 1{,}89\\,\\mathrm{V}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'propriete',
          stepBadge: 'Bilan',
          stepTheme: 'Puissance utile et puissance Joule',
          stepTitle: 'Calculer les termes du bilan énergétique d’un moteur',
          paragraphText:
            'Un moteur de paramètres $(E\', r\')$ parcouru par un courant $I$ reçoit une puissance électrique $P_r = U_{AB}\\,I$, convertit $P_u = E\'\\,I$ en puissance mécanique et dissipe $P_{\\text{th}} = r\'\\,I^2$ en chaleur.',
          exercise: {
            id: 'physique_1re_cd_l05_p03_q03',
            type: 'mcq',
            prompt: 'Un moteur ($E\' = 100\\,\\mathrm{V}$, $r\' = 15\\,\\Omega$) est traversé par un courant $I = 0{,}5\\,\\mathrm{A}$. Quelle tension $U_{AB}$ existe à ses bornes et quelle puissance utile $P_u$ développe-t-il ?',
            options: [
              '$U_{AB} = 107{,}5\\,\\mathrm{V}$ et $P_u = 50\\,\\mathrm{W}$',
              '$U_{AB} = 92{,}5\\,\\mathrm{V}$ et $P_u = 50\\,\\mathrm{W}$',
              '$U_{AB} = 107{,}5\\,\\mathrm{V}$ et $P_u = 53{,}75\\,\\mathrm{W}$',
              '$U_{AB} = 100\\,\\mathrm{V}$ et $P_u = 3{,}75\\,\\mathrm{W}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$U_{AB} = E\' + r\'\\,I = 100 + 15 \\times 0{,}5 = 107{,}5\\,\\mathrm{V}$ ; $P_u = E\'\\,I = 100 \\times 0{,}5 = 50\\,\\mathrm{W}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Moteur bloqué',
          stepTitle: 'Que vaut E′ lorsque le rotor d’un moteur est bloqué ?',
          paragraphText:
            'Si l’on bloque mécaniquement le rotor d’un moteur, il ne fournit plus aucun travail mécanique ($P_u = 0$), donc sa f.c.é.m. s’annule ($E\' = 0$). Il se comporte alors comme un **conducteur ohmique** de résistance $r\'$, ce qui provoque une forte hausse du courant.',
          exercise: {
            id: 'physique_1re_cd_l05_p03_q04',
            type: 'mcq',
            prompt: 'Le moteur précédent ($r\' = 15\\,\\Omega$) est branché en série avec $R_0 = 25\\,\\Omega$ sur un générateur idéal $E = 120\\,\\mathrm{V}$. Si le moteur est bloqué ($E\' = 0$), quelle intensité traverse le circuit ?',
            options: ['$3\\,\\mathrm{A}$', '$0{,}5\\,\\mathrm{A}$', '$8\\,\\mathrm{A}$', '$4{,}8\\,\\mathrm{A}$'],
            correctAnswerIndex: 0,
            explanation: 'Moteur bloqué ($E\' = 0$) : $I = \\frac{E}{R_0 + r\'} = \\frac{120}{25 + 15} = \\frac{120}{40} = 3\\,\\mathrm{A}$ (contre $0{,}5\\,\\mathrm{A}$ lorsqu’il tourne !).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Identification de E′ et r′ à partir d’un essai',
          stepTitle: 'Calculer E′ et r′ depuis la puissance reçue et le rendement',
          paragraphText:
            'Si un moteur traversé par $I$ reçoit une puissance $P_r = U\\,I$ avec un rendement $\\eta = \\frac{P_u}{P_r} = \\frac{E\'}{U}$, on trouve successivement $U = P_r/I$, puis $E\' = \\eta\\,U$ et $r\' = (U - E\')/I$.',
          exercise: {
            id: 'physique_1re_cd_l05_p03_q05',
            type: 'mcq',
            prompt: 'Un moteur parcouru par $I = 2\\,\\mathrm{A}$ reçoit une puissance électrique $P_r = 36\\,\\mathrm{W}$ avec un rendement $\\eta = 0{,}90$. Quelles sont sa f.c.é.m. $E\'$ et sa résistance interne $r\'$ ?',
            options: [
              '$E\' = 16{,}2\\,\\mathrm{V}$ et $r\' = 0{,}9\\,\\Omega$',
              '$E\' = 18\\,\\mathrm{V}$ et $r\' = 1{,}8\\,\\Omega$',
              '$E\' = 32{,}4\\,\\mathrm{V}$ et $r\' = 1{,}8\\,\\Omega$',
              '$E\' = 16{,}2\\,\\mathrm{V}$ et $r\' = 1{,}8\\,\\Omega$',
            ],
            correctAnswerIndex: 0,
            explanation: '$U = \\frac{P_r}{I} = \\frac{36}{2} = 18\\,\\mathrm{V}$. Comme $\\eta = \\frac{E\'}{U}$, $E\' = 0{,}90 \\times 18 = 16{,}2\\,\\mathrm{V}$, puis $r\' = \\frac{U - E\'}{I} = \\frac{1{,}8}{2} = 0{,}9\\,\\Omega$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Unité énergie vs puissance',
          stepTitle: 'Ne pas confondre énergie reçue W_r et puissance reçue P_r',
          paragraphText:
            'Dans un calcul sur une durée donnée $\\Delta t$, la puissance reçue vaut $P_r = (E\' + r\'\\,I)I$ (en $\\mathrm{W}$), alors que l’énergie électrique reçue vaut $W_r = (E\' + r\'\\,I)I\\,\\Delta t$ (en $\\mathrm{J}$).',
          exercise: {
            id: 'physique_1re_cd_l05_p03_q06',
            type: 'mcq',
            prompt: 'Un électrolyseur ($E\' = 6\\,\\mathrm{V}$, $r\' = 2\\,\\Omega$) est traversé par $I = 0{,}5\\,\\mathrm{A}$ pendant $t = 30\\,\\mathrm{s}$. Quelle est l’énergie électrique totale $W_r$ qu’il reçoit ?',
            options: ['$105\\,\\mathrm{J}$', '$3{,}5\\,\\mathrm{J}$', '$90\\,\\mathrm{J}$', '$210\\,\\mathrm{J}$'],
            correctAnswerIndex: 0,
            explanation: '$U = 6 + 2 \\times 0{,}5 = 7\\,\\mathrm{V}$, donc $P_r = 7 \\times 0{,}5 = 3{,}5\\,\\mathrm{W}$ et $W_r = P_r\\,t = 3{,}5 \\times 30 = 105\\,\\mathrm{J}$.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Loi de Pouillet et association en opposition
    // ========================================================================
    {
      id: 'premiere_c_physique_l05_puissance_energie_electrique_p04',
      order: 4,
      title: 'Loi de Pouillet dans un circuit série et générateurs en opposition',
      summary:
        'Appliquer la loi de Pouillet I = (∑E − ∑E′)/∑R pour déterminer l’intensité dans un circuit fermé et traiter l’opposition de deux générateurs.',
      conceptExplanation:
        "Considérons un circuit série (une seule maille) composé de générateurs, de récepteurs actifs et de conducteurs ohmiques.\n\n- **Énoncé de la loi de Pouillet** : lorsque tous les générateurs agissent dans le même sens que le courant $I$, la conservation de l’énergie (bilan des tensions le long de la maille) donne :\n  $$I = \\frac{\\sum E - \\sum E'}{\\sum R}$$\n  où :\n  - $\\sum E$ est la somme des f.é.m. des générateurs ;\n  - $\\sum E'$ est la somme des f.c.é.m. des récepteurs actifs ;\n  - $\\sum R$ est la somme de toutes les résistances du circuit (résistors et résistances internes $r$, $r'$).\n  *(Condition de fonctionnement : $\\sum E > \\sum E'$ pour qu’un courant circule dans le sens choisi.)*\n- **Générateurs branchés en opposition** : si deux générateurs de f.é.m. $E_1$ et $E_2$ sont reliés par leurs pôles de même signe ($+$ avec $+$ et $-$ avec $-$) avec $E_2 > E_1$ :\n  - Le générateur de **plus grande f.é.m.** ($E_2$) impose le sens du courant et fonctionne en **générateur**.\n  - L’autre ($E_1$) est parcouru par le courant de $+$ vers $-$ (à l’envers) : il fonctionne en **récepteur** de f.c.é.m. $E' = E_1$ (exemple : recharge d’un accumulateur). Alors $I = \\frac{E_2 - E_1}{\\sum R}$.",
      keyRule:
        'Loi de Pouillet : I = (∑E − ∑E′)/∑R. En opposition (pôles + reliés ensemble), le générateur de plus grande f.é.m. impose le sens du courant et l’autre se comporte en récepteur.',
      formulas: [
        {
          name: 'Loi de Pouillet',
          formula: 'I = \\frac{\\sum E - \\sum E\'}{\\sum R}',
          note: 'Valable dans tout circuit fermé sans dérivation lorsque ∑E > ∑E′',
        },
        {
          name: 'Deux piles en opposition (E_2 > E_1)',
          formula: 'I = \\frac{E_2 - E_1}{R + r_1 + r_2}',
          note: 'La pile E_1 fonctionne en récepteur (f.c.é.m. E_1)',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Circuit série pour la loi de Pouillet et mise en opposition',
        svgContent: `<svg viewBox="0 0 360 150" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="150" rx="10" fill="#0f172a"/>
  <!-- Boucle serie -->
  <rect x="30" y="25" width="165" height="90" rx="4" fill="none" stroke="#94a3b8" stroke-width="2"/>
  <!-- Pile E2 en haut (impose le sens) -->
  <rect x="78" y="13" width="68" height="24" rx="4" fill="#0f172a"/>
  <line x1="96" y1="16" x2="96" y2="34" stroke="#22c55e" stroke-width="3"/>
  <line x1="106" y1="20" x2="106" y2="30" stroke="#22c55e" stroke-width="2"/>
  <text x="128" y="29" fill="#22c55e" font-size="10" font-weight="bold">E2, r2</text>
  <text x="90" y="14" fill="#22c55e" font-size="9">+</text>
  <!-- Pile E1 en bas (en opposition, + à gauche aussi) -->
  <rect x="78" y="103" width="68" height="24" rx="4" fill="#0f172a"/>
  <line x1="96" y1="106" x2="96" y2="124" stroke="#f59e0b" stroke-width="3"/>
  <line x1="106" y1="110" x2="106" y2="120" stroke="#f59e0b" stroke-width="2"/>
  <text x="128" y="119" fill="#f59e0b" font-size="10" font-weight="bold">E1, r1</text>
  <text x="90" y="104" fill="#f59e0b" font-size="9">+</text>
  <!-- Resistor R a droite -->
  <rect x="184" y="52" width="22" height="36" rx="3" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="195" y="74" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">R</text>
  <!-- Fleche courant I -->
  <polygon points="52,25 61,20 61,30" fill="#38bdf8"/>
  <text x="66" y="42" fill="#38bdf8" font-size="10" font-weight="bold">I (E2 &gt; E1)</text>
  <!-- Encadre formule -->
  <text x="282" y="56" text-anchor="middle" fill="#e2e8f0" font-size="11" font-weight="bold">Loi de Pouillet</text>
  <text x="282" y="80" text-anchor="middle" fill="#38bdf8" font-size="11">I = (E2 − E1)</text>
  <line x1="238" y1="86" x2="326" y2="86" stroke="#38bdf8" stroke-width="1"/>
  <text x="282" y="101" text-anchor="middle" fill="#38bdf8" font-size="11">R + r1 + r2</text>
</svg>`,
        caption: 'Lorsque E2 > E1 et que leurs bornes + sont reliées ensemble, E2 débite et E1 fonctionne en récepteur.',
      },
      workedExample: {
        title: 'Association en opposition (Situation Exp. 3 p. 5–6)',
        statement:
          'Un générateur ($E = 120\\,\\mathrm{V}$, $r = 0$) est branché en série avec $R_0 = 25\\,\\Omega$ et un autre générateur ($E_0 = 150\\,\\mathrm{V}$, $r_0 = 15\\,\\Omega$) en opposition. Déterminer le sens du courant et son intensité $I$.',
        methodSteps: [
          '1) Comparer les f.é.m. : E_0 = 150 V > E = 120 V, donc E_0 impose le sens du courant et E fonctionne en récepteur.',
          '2) Appliquer la loi de Pouillet : I = (E_0 − E) / (R_0 + r_0).',
          '3) Calculer : I = (150 − 120) / (25 + 15) = 30 / 40 = 0,75 A.',
        ],
        conclusion: 'Un courant de 0,75 A circule dans le sens imposé par le générateur E_0.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Loi',
          stepTheme: 'Formule de Pouillet',
          stepTitle: 'Identifier numérateur et dénominateur de Pouillet',
          paragraphText:
            'Dans un circuit en série, on additionne au numérateur les f.é.m. des générateurs orientés dans le sens du courant, on retranche les f.c.é.m. des récepteurs (et générateurs en opposition), puis on divise par la somme de toutes les résistances.',
          exercise: {
            id: 'physique_1re_cd_l05_p04_q01',
            type: 'mcq',
            prompt: 'Un circuit série comprend un générateur ($E = 120\\,\\mathrm{V}$, $r \\approx 0$), un résistor $R_0 = 25\\,\\Omega$ et un moteur ($E\' = 100\\,\\mathrm{V}$, $r\' = 15\\,\\Omega$). Quelle est l’intensité $I$ du courant ?',
            options: ['$0{,}5\\,\\mathrm{A}$', '$3\\,\\mathrm{A}$', '$5{,}5\\,\\mathrm{A}$', '$0{,}8\\,\\mathrm{A}$'],
            correctAnswerIndex: 0,
            explanation: 'Par la loi de Pouillet : $I = \\frac{E - E\'}{R_0 + r\'} = \\frac{120 - 100}{25 + 15} = \\frac{20}{40} = 0{,}5\\,\\mathrm{A}$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Condition de passage du courant',
          stepTitle: 'Générateurs en opposition : qui impose le sens ?',
          paragraphText:
            'Si l’on associe en série deux générateurs de f.é.m. $e_1 = 7\\,\\mathrm{V}$ et $e_2 = 10\\,\\mathrm{V}$ en opposition, la plus grande f.é.m. ($e_2$) impose le sens du courant et $e_1$ se comporte comme un récepteur de f.c.é.m. $e_1$.',
          exercise: {
            id: 'physique_1re_cd_l05_p04_q02',
            type: 'mcq',
            prompt: 'On associe en série un générateur ($E = 120\\,\\mathrm{V}$, $r = 0$), $R_0 = 25\\,\\Omega$ et un second générateur ($E_0 = 150\\,\\mathrm{V}$, $r_0 = 15\\,\\Omega$) monté en opposition. Quel dipôle fonctionne en récepteur et quelle est l’intensité $I$ ?',
            options: [
              'Le générateur $E = 120\\,\\mathrm{V}$ devient récepteur et $I = 0{,}75\\,\\mathrm{A}$',
              'Le générateur $E_0 = 150\\,\\mathrm{V}$ devient récepteur et $I = 0{,}75\\,\\mathrm{A}$',
              'Aucun courant ne circule car ils sont en opposition',
              'Les deux débitent et $I = 6{,}75\\,\\mathrm{A}$',
            ],
            correctAnswerIndex: 0,
            explanation: 'Comme $E_0 = 150\\,\\mathrm{V} > E = 120\\,\\mathrm{V}$, $E_0$ impose le sens du courant et $E$ devient récepteur : $I = \\frac{150 - 120}{25 + 15} = \\frac{30}{40} = 0{,}75\\,\\mathrm{A}$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Circuit mixte avec plusieurs dipôles',
          stepTitle: 'Deux piles en opposition, un électrolyseur et un résistor',
          paragraphText:
            'Lorsqu’un électrolyseur ($e\', r\'$) est en plus inséré dans le circuit contenant deux piles en opposition ($e_2 > e_1$), le courant ne circule que si $e_2 > e_1 + e\'$, et vaut $I = \\frac{e_2 - e_1 - e\'}{\\sum R}$.',
          exercise: {
            id: 'physique_1re_cd_l05_p04_q03',
            type: 'mcq',
            prompt: 'Deux piles $(e_1 = 7\\,\\mathrm{V}, r_1 = 2\\,\\Omega)$ et $(e_2 = 10\\,\\mathrm{V}, r_2 = 0{,}5\\,\\Omega)$ en opposition sont en série avec un résistor $R = 10\\,\\Omega$ et un électrolyseur $(e\' = 1{,}5\\,\\mathrm{V}, r\' = 2\\,\\Omega)$. Quelle est l’intensité $I$ ?',
            options: ['$0{,}103\\,\\mathrm{A}$', '$1{,}28\\,\\mathrm{A}$', '$0{,}207\\,\\mathrm{A}$', '$0{,}79\\,\\mathrm{A}$'],
            correctAnswerIndex: 0,
            explanation: '$e_2$ joue le rôle de générateur, $e_1$ et $e\'$ s’y opposent : $I = \\frac{10 - 7 - 1{,}5}{10 + 2 + 0{,}5 + 2} = \\frac{1{,}5}{14{,}5} \\approx 0{,}103\\,\\mathrm{A}$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Circuit comportant une dérivation',
          stepTitle: 'Réduire d’abord les branches parallèles avant Pouillet',
          paragraphText:
            'La loi de Pouillet s’applique à une maille série unique. Si le circuit comporte deux résistors $R_1$ et $R_2$ en dérivation, on les remplace d’abord par leur résistance équivalente $R_{\\text{eq}}$ avant d’appliquer la loi de Pouillet.',
          exercise: {
            id: 'physique_1re_cd_l05_p04_q04',
            type: 'mcq',
            prompt: 'Un générateur ($E = 120\\,\\mathrm{V}$, $r = 0$) alimente en série $R_0 = 25\\,\\Omega$ et l’association parallèle de $R_1 = 40\\,\\Omega$ avec $R_2 = 24\\,\\Omega$. Quelle est l’intensité principale $I$ débitée ?',
            options: ['$3\\,\\mathrm{A}$', '$1{,}35\\,\\mathrm{A}$', '$4{,}8\\,\\mathrm{A}$', '$8\\,\\mathrm{A}$'],
            correctAnswerIndex: 0,
            explanation: '$R_{12} = \\frac{40 \\times 24}{40 + 24} = 15\\,\\Omega$, donc $\\sum R = 25 + 15 = 40\\,\\Omega$ et $I = \\frac{120}{40} = 3\\,\\mathrm{A}$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Application',
          stepTheme: 'Diviseur de courant',
          stepTitle: 'Calculer les intensités dans deux branches parallèles',
          paragraphText:
            'Dans la situation précédente ($R_1 = 40\\,\\Omega // R_2 = 24\\,\\Omega$, $R_{12} = 15\\,\\Omega$, $I = 3\\,\\mathrm{A}$), la tension commune aux deux branches est $U = R_{12}\\,I = 45\\,\\mathrm{V}$, d’où $I_1 = U/R_1$ et $I_2 = U/R_2$.',
          exercise: {
            id: 'physique_1re_cd_l05_p04_q05',
            type: 'mcq',
            prompt: 'Avec $U = 45\\,\\mathrm{V}$ aux bornes de $R_1 = 40\\,\\Omega$ et $R_2 = 24\\,\\Omega$ en dérivation, que valent les courants dérivés $I_1$ et $I_2$ ?',
            options: [
              '$I_1 = 1{,}125\\,\\mathrm{A}$ et $I_2 = 1{,}875\\,\\mathrm{A}$',
              '$I_1 = 1{,}5\\,\\mathrm{A}$ et $I_2 = 1{,}5\\,\\mathrm{A}$',
              '$I_1 = 1{,}875\\,\\mathrm{A}$ et $I_2 = 1{,}125\\,\\mathrm{A}$',
              '$I_1 = 0{,}89\\,\\mathrm{A}$ et $I_2 = 0{,}53\\,\\mathrm{A}$',
            ],
            correctAnswerIndex: 0,
            explanation: '$I_1 = 45/40 = 1{,}125\\,\\mathrm{A}$ et $I_2 = 45/24 = 1{,}875\\,\\mathrm{A}$. On vérifie la loi des nœuds : $1{,}125 + 1{,}875 = 3\\,\\mathrm{A}$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exercice',
          stepTheme: 'Tension aux bornes d’un générateur en série',
          stepTitle: 'Retrouver U_PN du générateur depuis la somme des tensions',
          paragraphText:
            'Dans un circuit fermé alimentant un résistor $R_1$, un moteur $R_2, E_2$ et d’autres récepteurs sous $I = 2\\,\\mathrm{A}$, la tension $U$ aux bornes du générateur est égale à la somme des tensions aux bornes de tous les récepteurs en série.',
          exercise: {
            id: 'physique_1re_cd_l05_p04_q06',
            type: 'mcq',
            prompt: 'Dans un circuit série parcouru par $I = 2\\,\\mathrm{A}$, un résistor $R_1 = 5\\,\\Omega$ et un moteur sous $U_2 = 18\\,\\mathrm{V}$ sont directement aux bornes d’un générateur. Quelle est la tension $U_3$ aux bornes du générateur ?',
            options: ['$28\\,\\mathrm{V}$', '$23\\,\\mathrm{V}$', '$18\\,\\mathrm{V}$', '$8\\,\\mathrm{V}$'],
            correctAnswerIndex: 0,
            explanation: '$U_1 = R_1\\,I = 5 \\times 2 = 10\\,\\mathrm{V}$ et $U_2 = 18\\,\\mathrm{V}$, donc $U_3 = U_1 + U_2 = 10 + 18 = 28\\,\\mathrm{V}$.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Rendements d’un générateur, d’un récepteur et d’un circuit
    // ========================================================================
    {
      id: 'premiere_c_physique_l05_puissance_energie_electrique_p05',
      order: 5,
      title: 'Rendement d’un générateur, d’un récepteur et d’un circuit',
      summary:
        'Calculer et comparer les rendements d’un générateur, d’un récepteur actif et d’un circuit complet, toujours compris entre 0 et 1.',
      conceptExplanation:
        "Le **rendement** $\\eta$ (lettre grecque êta) mesure la fraction d’énergie ou de puissance effectivement convertie sous forme utile par un appareil ou une installation.\n\n- **Rendement d’un générateur $(E, r)$** : rapport de la puissance électrique fournie au circuit $P_f = U_{PN}\\,I$ à la puissance totale engendrée $P_e = E\\,I$ :\n  $$\\eta_g = \\frac{P_f}{P_e} = \\frac{U_{PN}}{E} = 1 - \\frac{r\\,I}{E} < 1$$\n- **Rendement d’un récepteur actif $(E', r')$** : rapport de la puissance utile $P_u = E'\\,I$ à la puissance électrique reçue $P_r = U_{AB}\\,I$ :\n  $$\\eta_r = \\frac{P_u}{P_r} = \\frac{E'}{U_{AB}} = \\frac{E'}{E' + r'\\,I} = \\frac{1}{1 + \\frac{r'\\,I}{E'}} < 1$$\n- **Rendement global d’un circuit** : produit des rendements ou rapport de la puissance utile finale à la puissance engendrée par le générateur :\n  $$\\eta_{\\text{circuit}} = \\frac{P_{\\text{utile}}}{P_{\\text{engendrée}}}$$",
      keyRule:
        'Générateur : η_g = U_PN / E = 1 − r·I/E. Récepteur actif : η_r = E′ / U_AB = E′/(E′ + r′·I). Un rendement est sans unité (ou en %) et vérifie 0 ≤ η ≤ 1.',
      formulas: [
        {
          name: 'Rendement d’un générateur',
          formula: '\\eta_g = \\frac{P_f}{P_e} = \\frac{U_{PN}}{E} = 1 - \\frac{r\\,I}{E}',
          note: 'Vaut 1 (100 %) si r = 0',
        },
        {
          name: 'Rendement d’un récepteur actif',
          formula: '\\eta_r = \\frac{P_u}{P_r} = \\frac{E\'}{U_{AB}} = \\frac{1}{1 + \\frac{r\'\\,I}{E\'}}',
          note: 'Vaut 0 si le moteur est bloqué (E′ = 0)',
        },
      ],
      workedExample: {
        title: 'Rendement d’un circuit avec opposition et électrolyseur (Ex 5 p. 8)',
        statement:
          'Deux piles ($e_1 = 7\\,\\mathrm{V}, r_1 = 2\\,\\Omega$ et $e_2 = 10\\,\\mathrm{V}, r_2 = 0{,}5\\,\\Omega$) en opposition alimentent $R = 10\\,\\Omega$ et un électrolyseur ($e\' = 1{,}5\\,\\mathrm{V}, r\' = 2\\,\\Omega$). Calculer l’intensité et le rendement chimique global.',
        methodSteps: [
          '1) Loi de Pouillet : I = (e_2 − e_1 − e′) / (R + r_1 + r_2 + r′) = 1,5 / 14,5 ≈ 0,103 A.',
          '2) Puissance engendrée : P_e = e_2 · I ≈ 1,03 W ; puissance chimique utile : P_u = (e_1 + e′) · I = 8,5 · I ≈ 0,88 W.',
          '3) Rendement global : η = P_u / P_e = (e_1 + e′) / e_2 = 8,5 / 10 = 0,85.',
        ],
        conclusion: 'Le rendement utile global de ce circuit série vaut η = 85 %.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Rendement d’un générateur',
          stepTitle: 'Comparer puissance disponible et puissance engendrée',
          paragraphText:
            'Pour un générateur de f.é.m. $E$ et de résistance interne $r$, plus le courant débité $I$ est fort, plus la chute de tension interne $r\\,I$ augmente et plus le rendement $\\eta_g = \\frac{U_{PN}}{E}$ diminue.',
          exercise: {
            id: 'physique_1re_cd_l05_p05_q01',
            type: 'mcq',
            prompt: 'Un générateur ($E = 12\\,\\mathrm{V}$, $r = 1\\,\\Omega$) débite un courant $I = 3\\,\\mathrm{A}$. Quel est son rendement $\\eta_g$ ?',
            options: ['$75\\,\\%$', '$25\\,\\%$', '$100\\,\\%$', '$92\\,\\%$'],
            correctAnswerIndex: 0,
            explanation: '$U_{PN} = 12 - 1 \\times 3 = 9\\,\\mathrm{V}$, donc $\\eta_g = \\frac{U_{PN}}{E} = \\frac{9}{12} = 0{,}75 = 75\\,\\%$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Formule',
          stepTheme: 'Rendement d’un récepteur actif',
          stepTitle: 'Expression exacte avec r′ et E′',
          paragraphText:
            'Pour un électrolyseur ou un moteur de paramètres $(E\', r\')$, on divise le numérateur et le dénominateur de $\\eta_r = \\frac{E\'}{E\' + r\'\\,I}$ par $E\'$, ce qui donne $\\eta_r = \\frac{1}{1 + \\frac{r\'\\,I}{E\'}} < 1$.',
          exercise: {
            id: 'physique_1re_cd_l05_p05_q02',
            type: 'mcq',
            prompt: 'Un électrolyseur ($E\' = 6\\,\\mathrm{V}$, $r\' = 2\\,\\Omega$) est traversé par $I = 0{,}5\\,\\mathrm{A}$. Quel est son rendement $\\eta_r$ ?',
            options: ['$85{,}7\\,\\%$', '$14{,}3\\,\\%$', '$75\\,\\%$', '$90\\,\\%$'],
            correctAnswerIndex: 0,
            explanation: '$U = 6 + 2 \\times 0{,}5 = 7\\,\\mathrm{V}$, donc $\\eta_r = \\frac{E\'}{U} = \\frac{6}{7} \\approx 0{,}857 = 85{,}7\\,\\%$ (environ $86\\,\\%$).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Rendement du circuit complet',
          stepTitle: 'Distinguer rendement du moteur et rendement du circuit',
          paragraphText:
            'Lorsqu’un générateur ($E = 120\\,\\mathrm{V}, r = 0$) alimente un moteur ($E\' = 100\\,\\mathrm{V}, r\' = 15\\,\\Omega$) en série avec un résistor $R_0 = 25\\,\\Omega$ ($I = 0{,}5\\,\\mathrm{A}$), les pertes dans $R_0$ abaissent le rendement global du circuit par rapport au rendement propre du moteur.',
          exercise: {
            id: 'physique_1re_cd_l05_p05_q03',
            type: 'mcq',
            prompt: 'Dans le montage précédent ($E = 120\\,\\mathrm{V}$, $r = 0$, $R_0 = 25\\,\\Omega$, moteur $E\' = 100\\,\\mathrm{V}$, $r\' = 15\\,\\Omega$, $I = 0{,}5\\,\\mathrm{A}$), quels sont $\\eta_{\\text{moteur}}$ et $\\eta_{\\text{circuit}}$ ?',
            options: [
              '$\\eta_{\\text{moteur}} \\approx 93\\,\\%$ et $\\eta_{\\text{circuit}} \\approx 83{,}3\\,\\%$',
              '$\\eta_{\\text{moteur}} \\approx 83{,}3\\,\\%$ et $\\eta_{\\text{circuit}} \\approx 93\\,\\%$',
              '$\\eta_{\\text{moteur}} = 100\\,\\%$ et $\\eta_{\\text{circuit}} = 83{,}3\\,\\%$',
              '$\\eta_{\\text{moteur}} \\approx 93\\,\\%$ et $\\eta_{\\text{circuit}} = 100\\,\\%$',
            ],
            correctAnswerIndex: 0,
            explanation: '$U_{\\text{moteur}} = 107{,}5\\,\\mathrm{V}$, donc $\\eta_{\\text{moteur}} = \\frac{100}{107{,}5} \\approx 93{,}0\\,\\%$ et $\\eta_{\\text{circuit}} = \\frac{E\'\\,I}{E\\,I} = \\frac{100}{120} \\approx 83{,}3\\,\\%$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exercice',
          stepTheme: 'Rendement avec accumulateur en charge',
          stepTitle: 'Bilan de puissance lors d’une électrolyse et d’une recharge',
          paragraphText:
            'Si une pile $e_2 = 10\\,\\mathrm{V}$ charge une pile $e_1 = 7\\,\\mathrm{V}$ tout en alimentant un électrolyseur $e\' = 1{,}5\\,\\mathrm{V}$, la puissance chimique totale récupérée vaut $P_u = (e_1 + e\')I = 8{,}5\\,I$ pour une puissance engendrée $P_e = e_2\\,I = 10\\,I$.',
          exercise: {
            id: 'physique_1re_cd_l05_p05_q04',
            type: 'mcq',
            prompt: 'Dans le circuit série précédent ($e_2 = 10\\,\\mathrm{V}$ générateur, $e_1 = 7\\,\\mathrm{V}$ et $e\' = 1{,}5\\,\\mathrm{V}$ récepteurs actifs, $I = 0{,}103\\,\\mathrm{A}$), quel est le rendement chimique global de l’installation ?',
            options: ['$85\\,\\%$', '$15\\,\\%$', '$70\\,\\%$', '$90\\,\\%$'],
            correctAnswerIndex: 0,
            explanation: '$\\eta = \\frac{P_u}{P_e} = \\frac{(7 + 1{,}5)I}{10\\,I} = \\frac{8{,}5}{10} = 0{,}85 = 85\\,\\%$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Rendement toujours inférieur à 1',
          stepTitle: 'Détecter immédiatement un rapport inversé',
          paragraphText:
            'Un rendement $\\eta$ est toujours compris entre $0$ et $1$ (ou $0\\,\\%$ et $100\\,\\%$). Si l’on inverse par erreur $E\'$ et $U$ dans le calcul d’un récepteur, on obtient un résultat supérieur à $1$, ce qui est physiquement impossible.',
          exercise: {
            id: 'physique_1re_cd_l05_p05_q05',
            type: 'mcq',
            prompt: 'Pour un récepteur actif ($U = 12\\,\\mathrm{V}$, $E\' = 9\\,\\mathrm{V}$), quel calcul est correct ?',
            options: [
              '$\\eta = \\frac{E\'}{U} = \\frac{9}{12} = 0{,}75$',
              '$\\eta = \\frac{U}{E\'} = \\frac{12}{9} = 1{,}33$',
              '$\\eta = \\frac{U - E\'}{E\'} = 0{,}33$',
              '$\\eta = \\frac{E\'}{U + E\'} = 0{,}43$',
            ],
            correctAnswerIndex: 0,
            explanation: 'La puissance utile $E\'\\,I$ est toujours plus petite que la puissance reçue $U\\,I$, donc $\\eta = E\'/U = 9/12 = 0{,}75$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'propriete',
          stepBadge: 'Application',
          stepTheme: 'Générateur en court-circuit ou à vide',
          stepTitle: 'Limites extrêmes du rendement d’un générateur',
          paragraphText:
            'À vide ($I = 0$), $U_{PN} = E$ donc $\\eta_g \\to 1$ (mais aucune puissance utile n’est délivrée). En court-circuit ($I = E/r$), $U_{PN} = 0$, donc toute l’énergie est perdue dans le générateur et $\\eta_g = 0$.',
          exercise: {
            id: 'physique_1re_cd_l05_p05_q06',
            type: 'mcq',
            prompt: 'Quel est le rendement d’un générateur en court-circuit ($U_{PN} = 0$) ?',
            options: ['$0\\,\\%$', '$50\\,\\%$', '$100\\,\\%$', 'Il est infini'],
            correctAnswerIndex: 0,
            explanation: 'En court-circuit, la tension aux bornes est nulle ($U_{PN} = 0$), donc la puissance fournie au circuit extérieur est nulle et $\\eta_g = 0$.',
          },
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Production, transport et distribution de l’énergie électrique
    // ========================================================================
    {
      id: 'premiere_c_physique_l05_puissance_energie_electrique_p06',
      order: 6,
      title: 'Transport et distribution de l’énergie électrique (Documentation)',
      summary:
        'Comprendre pourquoi la haute tension réduit les pertes Joule en ligne et identifier les niveaux THT, HT, MT et BT du réseau.',
      conceptExplanation:
        "La documentation du cours (p. 9) décrit l’acheminement de l’énergie électrique des centrales vers les consommateurs.\n\n- **Pourquoi transporter en très haute tension (THT) ?** Une ligne électrique de résistance $R_{\\text{ligne}}$ transportant une puissance $P = U\\,I$ dissipe par effet Joule la puissance :\n  $$P_{\\text{perdue}} = R_{\\text{ligne}}\\,I^2 = R_{\\text{ligne}}\\left(\\frac{P}{U}\\right)^2$$\n  À puissance transportée $P$ donnée, **élever la tension $U$ diminue l’intensité $I$**, ce qui réduit considérablement les pertes thermiques par effet Joule (proportionnelles à $1/U^2$).\n- **Architecture du réseau électrique** :\n  1. **Réseau de transport et d’interconnexion (THT : $225\\,000\\,\\mathrm{V}$ à $400\\,000\\,\\mathrm{V}$)** : acheminement sur de longues distances entre régions et pays via des **pylônes** métalliques supportant des câbles conducteurs (cuivre, aluminium ou alliage).\n  2. **Postes sources (transformateurs abaisseurs)** : abaissent la tension vers le réseau de répartition.\n  3. **Haute Tension (HT : $\\approx 90\\,000\\,\\mathrm{V}$) et Moyenne Tension (MT : $\\approx 20\\,000\\,\\mathrm{V}$)** : alimentent les gros utilisateurs industriels (sidérurgie, transport ferroviaire, grande industrie) via des **poteaux** ou câbles souterrains.\n  4. **Postes de distribution et Basse Tension (BT : $230\\,\\mathrm{V}$ / $400\\,\\mathrm{V}$)** : distribuent l’électricité aux PME, commerces et habitations.",
      keyRule:
        'Élever la tension U réduit l’intensité I = P/U et divise les pertes Joule en ligne P_J = R_ligne·(P/U)² par U². Réseau : THT (225-400 kV) -> HT/MT -> BT (230/400 V).',
      formulas: [
        {
          name: 'Pertes Joule dans une ligne',
          formula: 'P_J = R_{\\text{ligne}}\\,I^2 = R_{\\text{ligne}}\\,\\frac{P^2}{U^2}',
          note: 'Multiplier U par 10 divise les pertes par 100 à puissance P fixée',
        },
      ],
      visualSchema: {
        type: 'geometry_svg',
        title: 'Chaîne de transport et distribution de l’électricité',
        svgContent: `<svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
  <rect x="0" y="0" width="360" height="140" rx="10" fill="#0f172a"/>
  <rect x="12" y="40" width="68" height="44" rx="6" fill="#1e293b" stroke="#22c55e" stroke-width="1.8"/>
  <text x="46" y="59" text-anchor="middle" fill="#22c55e" font-size="10" font-weight="bold">Centrale</text>
  <text x="46" y="74" text-anchor="middle" fill="#cbd5e1" font-size="9">+ Élévateur</text>

  <line x1="80" y1="62" x2="104" y2="62" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="104,62 97,58 97,66" fill="#f59e0b"/>
  <text x="92" y="52" text-anchor="middle" fill="#f59e0b" font-size="9" font-weight="bold">THT</text>

  <rect x="106" y="40" width="76" height="44" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.8"/>
  <text x="144" y="59" text-anchor="middle" fill="#f59e0b" font-size="10" font-weight="bold">225–400 kV</text>
  <text x="144" y="74" text-anchor="middle" fill="#cbd5e1" font-size="9">Pylônes (pertes ↓)</text>

  <line x1="182" y1="62" x2="206" y2="62" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="206,62 199,58 199,66" fill="#38bdf8"/>

  <rect x="208" y="40" width="66" height="44" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.8"/>
  <text x="241" y="59" text-anchor="middle" fill="#38bdf8" font-size="10" font-weight="bold">HT / MT</text>
  <text x="241" y="74" text-anchor="middle" fill="#cbd5e1" font-size="9">90 / 20 kV</text>

  <line x1="274" y1="62" x2="294" y2="62" stroke="#a855f7" stroke-width="2"/>
  <polygon points="294,62 287,58 287,66" fill="#a855f7"/>

  <rect x="296" y="40" width="52" height="44" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.8"/>
  <text x="322" y="59" text-anchor="middle" fill="#a855f7" font-size="10" font-weight="bold">BT</text>
  <text x="322" y="74" text-anchor="middle" fill="#cbd5e1" font-size="9">230/400 V</text>

  <text x="180" y="114" text-anchor="middle" fill="#94a3b8" font-size="10">À P fixé, I = P/U donc P_Joule = R_ligne · (P/U)²</text>
</svg>`,
        caption: 'Du transport THT sur pylônes jusqu’à la distribution BT (230/400 V) chez les particuliers.',
      },
      workedExample: {
        title: 'Impact de la haute tension sur les pertes en ligne',
        statement:
          'Une ligne de résistance $R = 10\\,\\Omega$ doit transporter une puissance $P = 200\\,\\mathrm{kW}$. Comparer les pertes Joule sous $U_1 = 20\\,\\mathrm{kV}$ et sous $U_2 = 2\\,\\mathrm{kV}$.',
        methodSteps: [
          '1) À U_1 = 20 000 V : I_1 = P/U_1 = 200 000 / 20 000 = 10 A ⇒ P_J1 = 10 × 10² = 1 000 W (0,5 %).',
          '2) À U_2 = 2 000 V (10 fois plus bas) : I_2 = 100 A ⇒ P_J2 = 10 × 100² = 100 000 W (50 %).',
        ],
        conclusion: 'Diviser la tension par 10 multiplie les pertes Joule en ligne par 100 : d’où l’intérêt de la THT.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Principe',
          stepTheme: 'Réduction des pertes en ligne',
          stepTitle: 'Pourquoi utilise-t-on la très haute tension ?',
          paragraphText:
            'Les câbles électriques possèdent une résistance $R_{\\text{ligne}}$. Pour transporter une puissance donnée $P = U\\,I$, augmenter la tension $U$ permet de diminuer l’intensité $I$ et donc de réduire fortement les pertes par effet Joule $P_J = R_{\\text{ligne}}\\,I^2$.',
          exercise: {
            id: 'physique_1re_cd_l05_p06_q01',
            type: 'mcq',
            prompt: 'Pour transporter une même puissance électrique $P$ sur une même ligne, si on multiplie la tension $U$ par $10$, par combien les pertes Joule en ligne sont-elles divisées ?',
            options: ['Par $100$', 'Par $10$', 'Par $20$', 'Elles sont multipliées par $10$'],
            correctAnswerIndex: 0,
            explanation: '$P_J = R_{\\text{ligne}}\\,\\frac{P^2}{U^2}$ : si $U$ est multipliée par $10$, $U^2$ est multiplié par $100$, donc les pertes Joule sont divisées par $100$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Réseau',
          stepTheme: 'Niveaux de tension THT / BT',
          stepTitle: 'Associer chaque niveau de tension à son usage',
          paragraphText:
            'Le transport à longue distance utilise la THT ($225\\,000\\,\\mathrm{V}$ à $400\\,000\\,\\mathrm{V}$), la grande industrie et le rail utilisent la HT ($90\\,000\\,\\mathrm{V}$) ou la MT ($20\\,000\\,\\mathrm{V}$), et les foyers reçoivent la BT ($230\\,\\mathrm{V}$ / $400\\,\\mathrm{V}$).',
          exercise: {
            id: 'physique_1re_cd_l05_p06_q02',
            type: 'mcq',
            prompt: 'Quelle gamme de tension correspond au réseau de distribution domestique (foyers, PME) ?',
            options: ['$230\\,\\mathrm{V}$ à $400\\,\\mathrm{V}$ (BT)', '$20\\,000\\,\\mathrm{V}$ (MT)', '$90\\,000\\,\\mathrm{V}$ (HT)', '$400\\,000\\,\\mathrm{V}$ (THT)'],
            correctAnswerIndex: 0,
            explanation: 'La Basse Tension (BT) fournie aux foyers et petites entreprises est de $230\\,\\mathrm{V}$ (monophasé) / $400\\,\\mathrm{V}$ (triphasé).',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Équipement',
          stepTheme: 'Postes sources et transformateurs',
          stepTitle: 'Rôle des postes sources et postes de distribution',
          paragraphText:
            'Les transformateurs élévateurs augmentent la tension en sortie de centrale pour limiter les pertes, puis les postes sources et de distribution abaissent progressivement la tension jusqu’à $230\\,\\mathrm{V}$ pour la sécurité des usagers.',
          exercise: {
            id: 'physique_1re_cd_l05_p06_q03',
            type: 'mcq',
            prompt: 'Quel rôle jouent les postes sources situés entre le réseau THT et les réseaux HT/MT ?',
            options: [
              'Abaisser la tension grâce à des transformateurs pour alimenter les réseaux locaux et les industries',
              'Élever la tension jusqu’à 400 000 V avant d’entrer dans les maisons',
              'Supprimer totalement la résistance des fils en les refroidissant',
              'Transformer le courant alternatif en piles chimiques',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les postes sources transforment la Très Haute Tension (THT) en Haute ou Moyenne Tension (HT / MT) pour la répartition.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'propriete',
          stepBadge: 'Matériaux',
          stepTheme: 'Conducteurs et supports aériens',
          stepTitle: 'Cuivre, alliage d’aluminium, pylônes et poteaux',
          paragraphText:
            'Les câbles aériens utilisent du cuivre ou des alliages d’aluminium (bons conducteurs, plus légers pour l’aluminium) ; les pylônes supportent la THT/HT, tandis que les poteaux supportent la MT/BT.',
          exercise: {
            id: 'physique_1re_cd_l05_p06_q04',
            type: 'mcq',
            prompt: 'Pourquoi privilégie-t-on l’aluminium ou ses alliages pour les lignes aériennes à très haute tension ?',
            options: [
              'Pour leur bonne conductivité associée à une masse nettement plus faible que celle du cuivre',
              'Parce que l’aluminium est un isolant électrique parfait',
              'Parce que l’aluminium a une résistance beaucoup plus élevée pour chauffer l’air',
              'Parce qu’il est plus lourd que le plomb',
            ],
            correctAnswerIndex: 0,
            explanation: 'Les alliages d’aluminium offrent un excellent compromis entre faible résistivité et légèreté mécanique sur de grandes portées entre pylônes.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'exemple',
          stepBadge: 'Calcul',
          stepTheme: 'Chiffrer l’effet de la haute tension',
          stepTitle: 'Application numérique sur une ligne résistive',
          paragraphText:
            'Si une ligne de résistance $R = 10\\,\\Omega$ transporte $P = 200\\,\\mathrm{kW}$ sous $U = 20\\,\\mathrm{kV}$, le courant vaut $I = P/U = 10\\,\\mathrm{A}$ et les pertes ne sont que $P_J = 10 \\times 10^2 = 1\\,\\mathrm{kW}$ (soit $0{,}5\\,\\%$).',
          exercise: {
            id: 'physique_1re_cd_l05_p06_q05',
            type: 'mcq',
            prompt: 'Une ligne de résistance $R = 10\\,\\Omega$ transporte une puissance $P = 200\\,\\mathrm{kW}$ sous une tension $U = 20\\,\\mathrm{kV}$. Quelle puissance est perdue par effet Joule dans la ligne ?',
            options: ['$1\\,000\\,\\mathrm{W}$', '$100\\,\\mathrm{W}$', '$20\\,000\\,\\mathrm{W}$', '$400\\,\\mathrm{W}$'],
            correctAnswerIndex: 0,
            explanation: '$I = \\frac{P}{U} = \\frac{200\\,000}{20\\,000} = 10\\,\\mathrm{A}$, d’où $P_J = R\\,I^2 = 10 \\times 10^2 = 1\\,000\\,\\mathrm{W}$ ($1\\,\\mathrm{kW}$).',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'piege',
          stepBadge: 'Sécurité',
          stepTheme: 'Tension de distribution',
          stepTitle: 'Ne pas relier un appareil domestique sur MT',
          paragraphText:
            'Chaque palier du réseau correspond à un niveau d’isolation et de puissance : la BT ($230\\,\\mathrm{V}$/$400\\,\\mathrm{V}$) alimente les appareils domestiques ; la MT ($20\\,000\\,\\mathrm{V}$) nécessite des transformateurs dédiés.',
          exercise: {
            id: 'physique_1re_cd_l05_p06_q06',
            type: 'mcq',
            prompt: 'Quel ordre de grandeur de tension équipe les réseaux de moyenne tension (MT) destinés aux grandes industries ?',
            options: ['$20\\,000\\,\\mathrm{V}$', '$230\\,\\mathrm{V}$', '$400\\,\\mathrm{V}$', '$12\\,\\mathrm{V}$'],
            correctAnswerIndex: 0,
            explanation: 'Selon la documentation du cours, le réseau MT fonctionne autour de $20\\,000\\,\\mathrm{V}$ et le réseau HT autour de $90\\,000\\,\\mathrm{V}$.',
          },
        },
      ],
    },
  ]),
};
