import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Quotient complexe',
    stepTheme: 'blue',
    stepTitle: 'Interpréter l’argument et le module de $\\frac{z_A - z_B}{z_C - z_D}$',
    paragraphText:
      'Soient $A, B, C$ et $D$ quatre points du plan complexe d’affixes respectives $z_A, z_B, z_C$ et $z_D$ tels que $A \\neq B$ et $C \\neq D$. Le module du quotient $\\frac{z_A - z_B}{z_C - z_D}$ donne directement le **rapport des distances** $\\frac{AB}{CD}$, tandis que son argument donne une **mesure de l’angle orienté** $(\\widehat{\\overrightarrow{DC}, \\overrightarrow{BA}})$ modulo $2\\pi$.',
    formula: {
      name: 'Interprétation géométrique d’un quotient complexe',
      formula: '\\left|\\frac{z_A - z_B}{z_C - z_D}\\right| = \\frac{AB}{CD} \\qquad ; \\qquad \\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right) \\equiv \\operatorname{Mes}(\\widehat{\\overrightarrow{DC}, \\overrightarrow{BA}}) \\;[2\\pi]',
    },
    konanTip: 'Attention à l’ordre des lettres ! L’affixe $z_A - z_B$ correspond au vecteur $\\overrightarrow{BA}$ (extrémité $A$, origine $B$), et $z_C - z_D$ au vecteur $\\overrightarrow{DC}$.',
    exercise: {
      id: 'tc_m_geo_l08_p01_q01',
      type: 'mcq',
      prompt: 'Pour quatre points $A, B, C, D$ ($A \\neq B$, $C \\neq D$), quelle égalité traduit correctement l’argument $\\arg\\left(\\frac{z_A - z_B}{z_C - z_D}\\right)$ ?',
      options: [
        'Une mesure de l’angle orienté $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{CD}})$',
        'Une mesure de l’angle orienté $(\\widehat{\\overrightarrow{DC}, \\overrightarrow{BA}})$',
        'Une mesure de l’angle orienté $(\\widehat{\\overrightarrow{BA}, \\overrightarrow{DC}})$',
        'Le produit scalaire $\\overrightarrow{AB} \\cdot \\overrightarrow{CD}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{z_A - z_B}{z_C - z_D} = \\frac{z_{\\overrightarrow{BA}}}{z_{\\overrightarrow{DC}}}$, donc son argument mesure l’angle $(\\widehat{\\overrightarrow{DC}, \\overrightarrow{BA}})$ (et aussi $(\\widehat{\\overrightarrow{CD}, \\overrightarrow{AB}})$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation',
    stepTheme: 'green',
    stepTitle: 'Calculer l’angle $(\\widehat{\\overrightarrow{BC}, \\overrightarrow{BA}})$ et le rapport $\\frac{AB}{BC}$ (p.2–3)',
    paragraphText:
      'On donne $A(-1 + i\\sqrt{3})$, $B(2)$ et $C(-1 - i\\sqrt{3})$. Pour trouver $\\operatorname{Mes}(\\widehat{\\overrightarrow{BC}, \\overrightarrow{BA}})$ et $\\frac{AB}{BC}$, on calcule le quotient $\\frac{z_A - z_B}{z_C - z_B} = \\frac{-3 + i\\sqrt{3}}{-3 - i\\sqrt{3}}$. En multipliant numérateur et dénominateur par le conjugué $(-3 + i\\sqrt{3})$, on obtient $\\frac{6 - 6i\\sqrt{3}}{12} = \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$. Son module vaut $1$ (donc $AB = BC$) et son argument principal vaut $-\\frac{\\pi}{3}$.',
    formula: {
      name: 'Calcul type',
      formula: '\\frac{z_A - z_B}{z_C - z_B} = \\frac{1}{2} - i\\frac{\\sqrt{3}}{2} = e^{-i\\frac{\\pi}{3}} \\implies AB = BC \\text{ et } \\operatorname{Mes}(\\widehat{\\overrightarrow{BC}, \\overrightarrow{BA}}) = -\\frac{\\pi}{3}',
    },
    exercise: {
      id: 'tc_m_geo_l08_p01_q02',
      type: 'mcq',
      prompt: 'Sachant que $\\frac{z_A - z_B}{z_C - z_B} = \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$, quelle est la mesure principale de $(\\widehat{\\overrightarrow{BC}, \\overrightarrow{BA}})$ ?',
      options: ['$\\frac{\\pi}{3}$', '$-\\frac{\\pi}{3}$', '$\\frac{\\pi}{6}$', '$-\\frac{2\\pi}{3}$'],
      correctAnswerIndex: 1,
      explanation: '$\\cos\\alpha = \\frac{1}{2}$ et $\\sin\\alpha = -\\frac{\\sqrt{3}}{2}$ donnent $\\alpha = -\\frac{\\pi}{3} \\in ]-\\pi ; \\pi]$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Tableau de référence',
    stepTheme: 'violet',
    stepTitle: 'Caractérisations complexes des ensembles de points (p.3)',
    paragraphText:
      'Dans le plan complexe muni d’un repère orthonormé direct $(O ; \\vec{e}_1, \\vec{e}_2)$, chaque équation sur le module ou l’argument de $z$ traduit un lieu géométrique classique. Retiens bien la différence entre $\\arg(\\cdot) = \\alpha + k\\pi$ (une **droite** privée d’un point) et $\\arg(\\cdot) = \\alpha + 2k\\pi$ (une **demi-droite** privée de son origine).',
    visualSchema: {
      type: 'custom_svg',
      title: 'Correspondance complexe ↔ géométrie (Tableau récapitulatif)',
      caption: 'A(z_A) et B(z_B) sont deux points distincts, r > 0 et λ > 0.',
      tableData: {
        headers: ['Caractérisation complexe', 'Caractérisation géométrique', 'Ensemble des points M(z)'],
        rows: [
          ['$|z - z_A| = r$', '$AM = r$', 'Cercle de centre $A$ et de rayon $r$'],
          ['$|z - z_A| = \\lambda|z - z_B|$', '$AM = \\lambda BM$', 'Médiatrice de $[AB]$ ($\\lambda=1$) ou cercle de diamètre $[G_1G_2]$ ($\\lambda \\neq 1$)'],
          ['$\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = k\\pi \\;(k\\in\\mathbb{Z})$', '$\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = k\\pi$', 'Droite $(AB)$ privée des points $A$ et $B$'],
          ['$\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$', '$\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\frac{\\pi}{2}+k\\pi$', 'Cercle de diamètre $[AB]$ privé des points $A$ et $B$'],
          ['$\\arg(z - z_A) = \\alpha + k\\pi$', '$\\operatorname{Mes}(\\widehat{\\vec{e}_1, \\overrightarrow{AM}}) = \\alpha + k\\pi$', 'Droite de repère $(A, \\vec{u})$ privée de $A$'],
          ['$\\arg(z - z_A) = \\alpha + 2k\\pi$', '$\\operatorname{Mes}(\\widehat{\\vec{e}_1, \\overrightarrow{AM}}) = \\alpha + 2k\\pi$', 'Demi-droite ouverte de repère $(A, \\vec{u})$ privée de $A$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l08_p01_q03',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des points $M(z)$ vérifiant $\\arg\\left(\\frac{z_B - z}{z_A - z}\\right) = \\frac{\\pi}{2} + k\\pi$ ($k \\in \\mathbb{Z}$), avec $A \\neq B$ ?',
      options: [
        'La médiatrice du segment $[AB]$',
        'La droite $(AB)$ privée de $A$ et $B$',
        'Le cercle de diamètre $[AB]$ privé des points $A$ et $B$',
        'Un seul demi-cercle ouvert de diamètre $[AB]$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Modulo $\\pi$, $\\overrightarrow{MA} \\perp \\overrightarrow{MB}$ (les deux demi-cercles sont réunis), et $M$ doit être distinct de $A$ et $B$ pour que l’argument existe.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation 2',
    stepTheme: 'green',
    stepTitle: 'Mettre en facteur dans $|2iz - 3 + 2i| = |z - 2|$ (p.4, corrigé)',
    paragraphText:
      'Pour reconnaître un lieu géométrique du type $|az + b| = |cz + d|$, on factorise par le coefficient devant $z$. Ici, $2iz - 3 + 2i = 2i\\left(z + 1 + \\frac{3}{2}i\\right)$ car $2i\\left(1 + \\frac{3}{2}i\\right) = 2i + 3i^2 = -3 + 2i$. En prenant le module : $|2i|\\,\\left|z - \\left(-1 - \\frac{3}{2}i\\right)\\right| = |z - 2|$, soit $2BM = AM$ avec $A(2)$ et $B\\left(-1 - \\frac{3}{2}i\\right)$. Comme $\\frac{MA}{MB} = 2 \\neq 1$, l’ensemble est le cercle de diamètre $[HK]$ où $H = \\operatorname{bar}\\{(A,1),(B,2)\\}$ et $K = \\operatorname{bar}\\{(A,1),(B,-2)\\}$.',
    formula: {
      name: 'Affixes exactes de H et K (coquille du PDF corrigée)',
      formula: 'z_H = \\frac{1\\times 2 + 2(-1 - \\frac{3}{2}i)}{3} = -i \\qquad ; \\qquad z_K = \\frac{1\\times 2 - 2(-1 - \\frac{3}{2}i)}{-1} = -4 - 3i',
    },
    konanTip: 'Attention à la coquille du polycopié p.4 qui indiquait $z_H = -1$ : on a bien $2 + 2(-1 - \\frac{3}{2}i) = -3i$, donc $z_H = \\frac{-3i}{3} = -i$ !',
    exercise: {
      id: 'tc_m_geo_l08_p01_q04',
      type: 'mcq',
      prompt: 'Soient $A(2)$ et $B\\left(-1 - \\frac{3}{2}i\\right)$. Quelle est l’affixe exacte du barycentre $H = \\operatorname{bar}\\{(A, 1), (B, 2)\\}$ ?',
      options: ['$-1$', '$-i$', '$-4 - 3i$', '$1 - i$'],
      correctAnswerIndex: 1,
      explanation: '$z_H = \\frac{2 + 2(-1 - \\frac{3}{2}i)}{1 + 2} = \\frac{2 - 2 - 3i}{3} = -i$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Renforcement Ex. 3',
    stepTheme: 'blue',
    stepTitle: 'Construire cercle, médiatrice et demi-droite (p.23–24)',
    paragraphText:
      'On cherche trois ensembles classiques dans le plan complexe : (a) $|z - 2i| = 3$ donne $AM = 3$ où $A(2i)$, c’est le cercle de centre $A$ et de rayon $3$ ; (b) $|z - 1 + i| = |z + 1 + 3i|$ s’écrit $|z - (1 - i)| = |z - (-1 - 3i)|$, donc $PM = QM$ : c’est la médiatrice $(\\Delta)$ de $[PQ]$ avec $P(1-i)$ et $Q(-1-3i)$ ; (c) $\\arg(z - 1 - i) \\equiv \\frac{\\pi}{6}\\;[2\\pi]$ donne la demi-droite ouverte $[AP)$ privée de $A(1+i)$, telle que $\\operatorname{Mes}(\\widehat{\\vec{u}, \\overrightarrow{AP}}) = \\frac{\\pi}{6}$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Demi-droite ouverte d’équation arg(z − (1 + i)) ≡ π/6 [2π]',
      caption: 'Le point origine A(1+i) est exclu (cercle évidé) ; modulo 2π, on ne trace qu’une demi-droite.',
      svgContent: `<svg viewBox="0 0 320 155" width="305" height="148" xmlns="http://www.w3.org/2000/svg">
        <line x1="25" y1="125" x2="300" y2="125" stroke="#94a3b8" stroke-width="1.3"/>
        <line x1="55" y1="145" x2="55" y2="12" stroke="#94a3b8" stroke-width="1.3"/>
        <text x="292" y="140" font-size="11" fill="#64748b">x</text>
        <text x="61" y="20" font-size="11" fill="#64748b">y</text>
        <circle cx="55" cy="125" r="2.5" fill="#475569"/><text x="41" y="139" font-size="11" fill="#475569">O</text>
        <line x1="95" y1="95" x2="275" y2="95" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="95" y1="95" x2="268" y2="20" stroke="#2563eb" stroke-width="2.4"/>
        <circle cx="95" cy="95" r="4.5" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
        <text x="80" y="90" font-size="12" font-weight="bold" fill="#2563eb">A(1+i)</text>
        <path d="M 142 95 A 47 47 0 0 0 135 76" fill="none" stroke="#dc2626" stroke-width="1.8"/>
        <text x="150" y="88" font-size="12" font-weight="bold" fill="#dc2626">π/6</text>
        <circle cx="210" cy="45" r="3.5" fill="#1e293b"/><text x="206" y="36" font-size="12" font-weight="bold" fill="#1e293b">P</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l08_p01_q05',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des points $M(z)$ tels que $|z - 1 + i| = |z + 1 + 3i|$ ?',
      options: [
        'Le cercle de centre $1 - i$ et de rayon $2$',
        'La médiatrice du segment $[PQ]$ avec $P(1 - i)$ et $Q(-1 - 3i)$',
        'La médiatrice du segment $[PQ]$ avec $P(-1 + i)$ et $Q(1 + 3i)$',
        'La droite passant par $O$ de coefficient directeur $1$',
      ],
      correctAnswerIndex: 1,
      explanation: '$|z - 1 + i| = |z - (1 - i)| = PM$ et $|z + 1 + 3i| = |z - (-1 - 3i)| = QM$. L’égalité $PM = QM$ caractérise la médiatrice de $[PQ]$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur fréquente',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre $\\arg(z - z_A) \\equiv \\alpha\\;[2\\pi]$ et $\\alpha\\;[\\pi]$',
    paragraphText:
      'Une faute classique consiste à tracer toute la droite lorsque la condition est donnée modulo $2\\pi$, ou à oublier d’exclure le point $A$. Si $\\arg(z - z_A) = \\alpha + 2k\\pi$ ($k \\in \\mathbb{Z}$), le vecteur $\\overrightarrow{AM}$ fait toujours le même angle $+\\alpha$ avec $\\vec{e}_1$ : on n’obtient qu’une **demi-droite ouverte** d’origine $A$ (exclue). Si c’est modulo $\\pi$, les deux sens opposés sont permis : c’est la **droite** privée de $A$.',
    exercise: {
      id: 'tc_m_geo_l08_p01_q06',
      type: 'mcq',
      prompt: 'Pourquoi le point $A(1 + i)$ est-il toujours exclu de l’ensemble défini par $\\arg(z - 1 - i) \\equiv \\frac{\\pi}{6}\\;[2\\pi]$ ?',
      options: [
        'Parce que le nombre complexe $0$ n’a pas d’argument',
        'Parce que $\\cos(\\frac{\\pi}{6}) = 0$',
        'Parce que $A$ appartient au cercle unité',
        'Parce que $1 + i$ est imaginaire pur',
      ],
      correctAnswerIndex: 0,
      explanation: 'Si $M = A$, alors $z - z_A = 0$, or le nombre complexe nul n’admet pas d’argument.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Calcul rapide',
    stepTheme: 'green',
    stepTitle: 'Traduire une condition $|z - z_A| = |z - z_B|$ par le signe « $-$ »',
    paragraphText:
      'Pour identifier instantanément les affixes des points fixes $A$ et $B$ dans $|z + 4 - 2i| = |z - 3i|$, écris toujours l’expression sous la forme $|z - (\\text{affixe})|$. Ici $|z - (-4 + 2i)| = |z - (3i)|$, donc $A$ a pour affixe $-4 + 2i$ et $B$ a pour affixe $3i$ : on obtient la médiatrice de $[AB]$ sans risque d’erreur de signe.',
    exercise: {
      id: 'tc_m_geo_l08_p01_q07',
      type: 'mcq',
      prompt: 'Dans l’équation $|z + 4 - 2i| = |z - 3i|$, quelles sont les affixes des deux points $A$ et $B$ définissant la médiatrice $[AB]$ ?',
      options: [
        '$4 - 2i$ et $3i$',
        '$-4 + 2i$ et $3i$',
        '$-4 - 2i$ et $-3i$',
        '$4 + 2i$ et $-3i$',
      ],
      correctAnswerIndex: 1,
      explanation: '$z + 4 - 2i = z - (-4 + 2i)$ et $z - 3i = z - (3i)$ : les deux points ont donc pour affixes $-4 + 2i$ et $3i$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Parallélisme & Alignement',
    stepTheme: 'violet',
    stepTitle: 'Droites parallèles et alignement de trois points (p.5–6)',
    paragraphText:
      'Soient $A, B, C, D$ des points d’affixes respectives $z_A, z_B, z_C, z_D$ ($A \\neq B$, $C \\neq D$). Les droites $(AB)$ et $(CD)$ sont **parallèles** si et seulement si le quotient $\\frac{z_A - z_B}{z_C - z_D}$ appartient à $\\mathbb{R}^*$ (réel non nul, autrement dit sa partie imaginaire est nulle). En particulier, trois points distincts $A, B, C$ sont **alignés** si et seulement si $\\frac{z_A - z_B}{z_C - z_B} \\in \\mathbb{R}^*$.',
    formula: {
      name: 'Critères de colinéarité complexe',
      formula: '(AB) \\parallel (CD) \\iff \\frac{z_A - z_B}{z_C - z_D} \\in \\mathbb{R}^* \\qquad ; \\qquad A, B, C \\text{ alignés} \\iff \\frac{z_A - z_B}{z_C - z_B} \\in \\mathbb{R}^*',
    },
    exercise: {
      id: 'tc_m_geo_l08_p02_q01',
      type: 'mcq',
      prompt: 'On donne $A(5+i)$, $B(-2)$, $C(1+i)$ et $D(-4-2i)$. Que vaut $\\frac{z_D - z_A}{z_C - z_B}$ et que peut-on en déduire ?',
      options: [
        '$3i \\in i\\mathbb{R}^*$, donc $(AD) \\perp (BC)$',
        '$-3 \\in \\mathbb{R}^*$, donc $(AD) \\parallel (BC)$',
        '$-\\frac{1}{3} \\in \\mathbb{R}^*$, donc $A, B, C$ alignés',
        '$1 + i \\notin \\mathbb{R}$, donc les droites sont sécantes non perpendiculaires',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{-4 - 2i - (5 + i)}{1 + i - (-2)} = \\frac{-9 - 3i}{3 + i} = \\frac{-3(3 + i)}{3 + i} = -3 \\in \\mathbb{R}^*$, donc $(AD) \\parallel (BC)$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Orthogonalité',
    stepTheme: 'violet',
    stepTitle: 'Droites perpendiculaires via $i\\mathbb{R}^*$ (p.6–7)',
    paragraphText:
      'Les droites $(AB)$ et $(CD)$ ($A \\neq B$, $C \\neq D$) sont **perpendiculaires** si et seulement si $\\frac{z_A - z_B}{z_C - z_D}$ est un **imaginaire pur non nul**, c’est-à-dire $\\frac{z_A - z_B}{z_C - z_D} \\in i\\mathbb{R}^*$ (partie réelle nulle, argument $\\pm\\frac{\\pi}{2}$ modulo $\\pi$). Dans l’exercice de fixation p.6 avec $A(-3-i)$, $B(-2+4i)$, $C(3-i)$ et $H(-2)$, on trouve $\\frac{z_B - z_C}{z_H - z_A} = \\frac{-5 + 5i}{1 + i} = 5i \\in i\\mathbb{R}^*$, donc $(AH) \\perp (BC)$.',
    formula: {
      name: 'Critère d’orthogonalité',
      formula: '(AB) \\perp (CD) \\iff \\frac{z_A - z_B}{z_C - z_D} \\in i\\mathbb{R}^*',
    },
    exercise: {
      id: 'tc_m_geo_l08_p02_q02',
      type: 'mcq',
      prompt: 'Avec $B(-2+4i)$, $C(3-i)$, $A(-3-i)$ et $H(-2)$, que vaut $\\frac{z_B - z_C}{z_H - z_A}$ ?',
      options: ['$5$', '$-5$', '$5i$', '$-1 + i$'],
      correctAnswerIndex: 2,
      explanation: '$\\frac{(-2+4i)-(3-i)}{-2-(-3-i)} = \\frac{-5+5i}{1+i} = \\frac{(-5+5i)(1-i)}{2} = \\frac{10i}{2} = 5i \\in i\\mathbb{R}^*$, d’où $(AH) \\perp (BC)$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Cocyclicité',
    stepTheme: 'violet',
    stepTitle: 'Points cocycliques : le critère du birapport (p.7)',
    paragraphText:
      'Quatre points $A, B, C, D$ deux à deux distincts et **non alignés** sont **cocycliques** (situés sur un même cercle) si et seulement si $(\\widehat{\\overrightarrow{DA}, \\overrightarrow{DB}}) \\equiv (\\widehat{\\overrightarrow{CA}, \\overrightarrow{CB}})\\;[\\pi]$ sans être multiple de $\\pi$, ce qui s’écrit en nombres complexes : le quotient de quotients $\\frac{z_C - z_A}{z_D - z_A} : \\frac{z_C - z_B}{z_D - z_B}$ appartient à $\\mathbb{R}^*$ (avec la condition que trois des points ne soient pas alignés).',
    formula: {
      name: 'Cocyclicité de A, B, C, D (non alignés)',
      formula: 'A, B, C, D \\text{ cocycliques} \\iff \\frac{z_C - z_A}{z_D - z_A} : \\frac{z_C - z_B}{z_D - z_B} \\in \\mathbb{R}^*',
    },
    konanTip: 'N’oublie jamais la vérification de **non-alignement** : si le quotient initial $\\frac{z_D - z_A}{z_B - z_A}$ est déjà réel, les points sont alignés et non sur un cercle !',
    exercise: {
      id: 'tc_m_geo_l08_p02_q03',
      type: 'mcq',
      prompt: 'Pour $A(-2i)$, $B(7-i)$, $C(8+2i)$ et $D(-1+5i)$ (p.7), on trouve $\\frac{z_D-z_A}{z_B-z_A} = i$ et $\\frac{z_D-z_C}{z_B-z_C} = -3i$. Que conclut-on ?',
      options: [
        'Les points $A, B, C, D$ sont alignés',
        'Le rapport vaut $-\\frac{1}{3} \\in \\mathbb{R}^*$ et $A, B, D$ sont non alignés, donc $A, B, C, D$ sont cocycliques',
        'Les droites $(AD)$ et $(BC)$ sont parallèles',
        'Le quadrilatère $ABCD$ est un carré',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{z_D-z_A}{z_B-z_A} = i \\notin \\mathbb{R}$ prouve que $A, B, D$ ne sont pas alignés, et $\\frac{i}{-3i} = -\\frac{1}{3} \\in \\mathbb{R}^*$ assure la cocyclicité.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Triangles particuliers',
    stepTheme: 'violet',
    stepTitle: 'Reconnaître la nature d’un triangle $ABC$ par $\\frac{z_B - z_A}{z_C - z_A}$ (p.8–10)',
    paragraphText:
      'Pour caractériser la nature d’un triangle $ABC$ au sommet $A$, on étudie la forme algébrique ou exponentielle du rapport $Z = \\frac{z_C - z_A}{z_B - z_A}$ (ou de son inverse $\\frac{z_B - z_A}{z_C - z_A}$) : l’égalité des longueurs $AB = AC$ correspond à $|Z| = 1$, l’angle droit à $Z \\in i\\mathbb{R}^*$, et l’angle $\\pm\\frac{\\pi}{3}$ à $e^{\\pm i\\frac{\\pi}{3}} = \\frac{1}{2} \\pm i\\frac{\\sqrt{3}}{2}$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Caractérisation complexe des triangles particuliers en A',
      caption: 'A, B, C sont trois points non alignés.',
      tableData: {
        headers: ['Nature du triangle ABC', 'Caractérisation géométrique', 'Condition complexe sur Z = (z_C − z_A)/(z_B − z_A)'],
        rows: [
          ['Rectangle en $A$', '$\\operatorname{Mes}(\\widehat{\\overrightarrow{AB},\\overrightarrow{AC}}) \\equiv \\frac{\\pi}{2}\\;[\\pi]$', '$Z = bi \\in i\\mathbb{R}^*$ ($b \\in \\mathbb{R}^*$)'],
          ['Isocèle en $A$ (d’angle $\\alpha$)', '$AB = AC$ et $\\operatorname{Mes}(\\widehat{A}) = \\alpha \\in ]0;\\pi[$', '$Z = e^{i\\alpha}$ ou $Z = e^{-i\\alpha}$'],
          ['Rectangle et isocèle en $A$', '$AB = AC$ et $\\operatorname{Mes}(\\widehat{A}) = \\frac{\\pi}{2}$', '$Z = i$ ou $Z = -i$'],
          ['Équilatéral', '$AB = AC = BC$', '$Z = e^{i\\frac{\\pi}{3}} = \\frac{1}{2}+i\\frac{\\sqrt{3}}{2}$ ou $Z = e^{-i\\frac{\\pi}{3}} = \\frac{1}{2}-i\\frac{\\sqrt{3}}{2}$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l08_p02_q04',
      type: 'mcq',
      prompt: 'À quelle condition nécessaire et suffisante le triangle non aplati $ABC$ est-il rectangle et isocèle en $B$ ?',
      options: [
        '$\\frac{z_A - z_B}{z_C - z_B} \\in \\mathbb{R}^*$',
        '$\\frac{z_A - z_B}{z_C - z_B} = i$ ou $-i$',
        '$\\frac{z_A - z_B}{z_C - z_B} = e^{i\\frac{\\pi}{3}}$',
        '$\\frac{z_A - z_B}{z_C - z_B} = 2i$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le module vaut $1$ ($BA = BC$) et l’argument vaut $\\pm\\frac{\\pi}{2}$ ($\\overrightarrow{BA} \\perp \\overrightarrow{BC}$), donc le quotient vaut $i$ ou $-i$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Applications triangles',
    stepTheme: 'green',
    stepTitle: 'Résoudre les trois configurations de la page 8–9',
    paragraphText:
      'Pour vérifier qu’un triangle est rectangle, rectangle isocèle ou équilatéral, on isole le **sommet commun** au signe « $-$ » dans le numérateur et le dénominateur : par exemple en $A$ avec $A(1+i), B(3), C(3+5i)$ (Ex. 1), $\\frac{z_B - z_A}{z_C - z_A} = \\frac{2-i}{2+4i} = -\\frac{1}{2}i \\in i\\mathbb{R}^*$, donc $ABC$ est rectangle en $A$ (mais non isocèle car $|-\\frac{1}{2}i| = \\frac{1}{2} \\neq 1$). En $B$ avec $A(-3+2i), B(-2-3i), C(3-2i)$ (Ex. 2), $\\frac{z_A - z_B}{z_C - z_B} = \\frac{-1+5i}{5+i} = i$, donc $ABC$ est rectangle isocèle en $B$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Triangle ABC rectangle en A (Ex. 1 p.8)',
      caption: 'A(1+i), B(3), C(3+5i) : le quotient vaut −i/2, donc AB ⊥ AC et AC = 2 AB.',
      svgContent: `<svg viewBox="0 0 300 165" width="285" height="156" xmlns="http://www.w3.org/2000/svg">
        <line x1="25" y1="130" x2="275" y2="130" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="45" y1="150" x2="45" y2="14" stroke="#94a3b8" stroke-width="1.2"/>
        <polygon points="85,105 165,130 165,25" fill="#dbeafe" fill-opacity="0.45" stroke="#2563eb" stroke-width="2"/>
        <path d="M 94 94 L 105 100 L 96 109" fill="none" stroke="#dc2626" stroke-width="1.6"/>
        <circle cx="85" cy="105" r="3.5" fill="#1e293b"/><text x="64" y="102" font-size="11" font-weight="bold" fill="#1e293b">A(1+i)</text>
        <circle cx="165" cy="130" r="3.5" fill="#1e293b"/><text x="167" y="145" font-size="11" font-weight="bold" fill="#1e293b">B(3)</text>
        <circle cx="165" cy="25" r="3.5" fill="#1e293b"/><text x="172" y="29" font-size="11" font-weight="bold" fill="#1e293b">C(3+5i)</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l08_p02_q05',
      type: 'mcq',
      prompt: 'Pour $A(1+i)$, $B(3)$ et $C(3+5i)$, $\\frac{z_B - z_A}{z_C - z_A} = -\\frac{1}{2}i$. Pourquoi le triangle $ABC$ n’est-il pas isocèle en $A$ ?',
      options: [
        'Car le module vaut $\\frac{1}{2} \\neq 1$, donc $AB = \\frac{1}{2}AC$',
        'Car l’argument vaut $0$',
        'Car $A, B, C$ sont alignés',
        'Car la partie imaginaire est négative',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\left|\\frac{z_B - z_A}{z_C - z_A}\\right| = \\frac{AB}{AC} = |-\\frac{1}{2}i| = \\frac{1}{2} \\neq 1$, donc $AC = 2AB$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Synthèse p.10–11',
    stepTheme: 'blue',
    stepTitle: 'Vérifier parallélisme et orthogonalité dans un repère',
    paragraphText:
      'On donne $A(2+i)$, $B(2-i)$, $C(5-2i)$, $D(5+2i)$ et $K(4)$. Pour montrer que $(AB) \\parallel (CD)$, on forme $\\frac{z_D - z_C}{z_B - z_A} = \\frac{4i}{-2i} = -2 \\in \\mathbb{R}^*$. Pour montrer que $(OK) \\perp (DC)$, on calcule $\\frac{z_D - z_C}{z_K - z_O} = \\frac{4i}{4 - 0} = i \\in i\\mathbb{R}^*$. On choisit toujours les vecteurs permettant une division immédiate sans avoir à conjuguer un dénominateur compliqué.',
    exercise: {
      id: 'tc_m_geo_l08_p02_q06',
      type: 'mcq',
      prompt: 'On donne $C(5-2i)$, $D(5+2i)$, $K(4)$ et $O(0)$. Que vaut $\\frac{z_D - z_C}{z_K - z_O}$ ?',
      options: ['$-2$', '$i$', '$-i$', '$4$'],
      correctAnswerIndex: 1,
      explanation: '$\\frac{(5+2i)-(5-2i)}{4-0} = \\frac{4i}{4} = i \\in i\\mathbb{R}^*$, donc $(OK) \\perp (DC)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vigilance démonstration',
    stepTheme: 'orange',
    stepTitle: 'Attention au rapport nul et au mauvais sommet de référence',
    paragraphText:
      'Deux pièges reviennent souvent au Bac : (1) écrire $\\in \\mathbb{R}$ ou $\\in i\\mathbb{R}$ au lieu de $\\mathbb{R}^*$ ou $i\\mathbb{R}^*$ : si le quotient vaut $0$, cela signifie que deux points sont confondus et ne prouve ni parallélisme ni orthogonalité ; (2) pour tester si $ABC$ est isocèle ou rectangle en $B$, ce n’est pas $z_A$ qu’il faut soustraire, mais bien **$z_B$** au numérateur et au dénominateur : $\\frac{z_A - z_B}{z_C - z_B}$.',
    exercise: {
      id: 'tc_m_geo_l08_p02_q07',
      type: 'mcq',
      prompt: 'Dans l’exercice 1 de maison (p.22), on donne $A(2+i)$, $B(2-i)$, $C(5-2i)$ et $D(5+2i)$. Que vaut $\\frac{z_D - z_C}{z_D - z_A} : \\frac{z_B - z_C}{z_B - z_A}$ (p.23) ?',
      options: ['$\\frac{4}{5}$', '$-\\frac{4}{5}$', '$-\\frac{4}{5}i$', '$0$'],
      correctAnswerIndex: 1,
      explanation: '$\\frac{z_D - z_C}{z_D - z_A} = \\frac{4i}{3+i}$ et $\\frac{z_B - z_C}{z_B - z_A} = \\frac{-3+i}{-2i}$. Leur quotient vaut $\\frac{4i}{3+i} \\times \\frac{-2i}{-3+i} = \\frac{8}{-(3+i)(3-i)} = \\frac{8}{-10} = -\\frac{4}{5} \\in \\mathbb{R}^*$ : les points $A, B, C, D$ sont cocycliques (ils forment un trapèze isocèle inscrit dans un cercle).',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Écriture complexe',
    stepTheme: 'blue',
    stepTitle: 'Transformation du plan et écriture complexe associée (p.11)',
    paragraphText:
      'Une **transformation du plan** est une application bijective $f$ du plan dans lui-même qui à tout point $M$ associe $M’$. Dans un repère orthonormé direct $(O ; \\overrightarrow{OI}, \\overrightarrow{OJ})$, l’application bijective $F : \\mathbb{C} \\to \\mathbb{C}$ qui associe à l’affixe $z$ de $M$ l’affixe $z’$ de $M’$ est la transformation complexe associée, et l’expression de $z’$ en fonction de $z$ s’appelle l’**écriture complexe** de $f$.',
    exercise: {
      id: 'tc_m_geo_l08_p03_q01',
      type: 'mcq',
      prompt: 'Comment appelle-t-on la relation exprimant l’affixe $z’$ de $M’ = f(M)$ en fonction de l’affixe $z$ de $M$ ?',
      options: [
        'La forme trigonométrique de $M$',
        'L’écriture complexe de la transformation $f$',
        'L’équation cartésienne réduite',
        'La forme canonique du repère',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’expression de $z’$ en fonction de $z$ (ou de $\\bar{z}$) est par définition l’écriture complexe de $f$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Symétries de base',
    stepTheme: 'violet',
    stepTitle: 'Symétrie centrale en $O$ et symétries d’axes $(OI)$ et $(OJ)$ (p.11)',
    paragraphText:
      'Dans le repère orthonormé direct $(O, I, J)$ : le symétrique de $M(x + iy)$ par rapport à l’axe des abscisses $(OI)$ est $N(x - iy)$, d’où $z’ = \\bar{z}$ ; le symétrique par rapport à l’origine $O$ est $P(-x - iy)$, d’où $z’ = -z$ ; le symétrique par rapport à l’axe des ordonnées $(OJ)$ est $Q(-x + iy)$, d’où $z’ = -\\bar{z}$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Symétries de référence dans (O, I, J)',
      caption: 'M(z), N(z̄) symétrique / (OI), P(−z) symétrique / O, Q(−z̄) symétrique / (OJ).',
      svgContent: `<svg viewBox="0 0 300 165" width="285" height="156" xmlns="http://www.w3.org/2000/svg">
        <line x1="25" y1="82" x2="275" y2="82" stroke="#64748b" stroke-width="1.4"/>
        <line x1="150" y1="12" x2="150" y2="152" stroke="#64748b" stroke-width="1.4"/>
        <rect x="75" y="34" width="150" height="96" fill="none" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4,3"/>
        <line x1="75" y1="34" x2="225" y2="130" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="225" y1="34" x2="75" y2="130" stroke="#cbd5e1" stroke-width="1"/>
        <circle cx="225" cy="34" r="3.8" fill="#2563eb"/><text x="231" y="34" font-size="11" font-weight="bold" fill="#2563eb">M(z)</text>
        <circle cx="225" cy="130" r="3.8" fill="#16a34a"/><text x="231" y="138" font-size="11" font-weight="bold" fill="#16a34a">N(z̄)</text>
        <circle cx="75" cy="34" r="3.8" fill="#7c3aed"/><text x="32" y="34" font-size="11" font-weight="bold" fill="#7c3aed">Q(−z̄)</text>
        <circle cx="75" cy="130" r="3.8" fill="#dc2626"/><text x="34" y="138" font-size="11" font-weight="bold" fill="#dc2626">P(−z)</text>
        <circle cx="150" cy="82" r="2.8" fill="#1e293b"/><text x="155" y="95" font-size="10" fill="#1e293b">O</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l08_p03_q02',
      type: 'mcq',
      prompt: 'Quelle est l’écriture complexe de la symétrie orthogonale d’axe $(OJ)$ (axe des imaginaires purs) ?',
      options: ['$z’ = \\bar{z}$', '$z’ = -z$', '$z’ = -\\bar{z}$', '$z’ = iz$'],
      correctAnswerIndex: 2,
      explanation: 'Si $z = a + ib$, son symétrique par rapport à $(OJ)$ a pour coordonnées $(-a ; b)$, d’affixe $-a + ib = -\\overline{(a + ib)} = -\\bar{z}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Translation & Homothétie',
    stepTheme: 'violet',
    stepTitle: 'Écritures complexes de la translation et de l’homothétie (p.12)',
    paragraphText:
      'La translation $t_{\\vec{u}}$ de vecteur $\\vec{u}$ d’affixe $b$ vérifie $\\overrightarrow{MM’} = \\vec{u} \\iff z’ - z = b$, soit **$z’ = z + b$**. L’homothétie $h$ de centre $\\Omega(\\omega)$ et de rapport $k \\in \\mathbb{R}^*$ vérifie $\\overrightarrow{\\Omega M’} = k\\overrightarrow{\\Omega M} \\iff z’ - \\omega = k(z - \\omega)$. Pour $k = -1$, on retrouve la symétrie centrale de centre $\\Omega$ : $z’ - \\omega = -(z - \\omega)$.',
    formula: {
      name: 'Translation et homothétie',
      formula: 't_{\\vec{u}}(b) : z’ = z + b \\qquad ; \\qquad h(\\Omega(\\omega), k) : z’ = k(z - \\omega) + \\omega',
    },
    exercise: {
      id: 'tc_m_geo_l08_p03_q03',
      type: 'mcq',
      prompt: 'Quelle est l’écriture complexe de l’homothétie de rapport $-2$ et de centre $\\Omega$ d’affixe $3 - i$ (p.12) ?',
      options: [
        '$z’ = -2z + 3 - i$',
        '$z’ = -2z + 9 - 3i$',
        '$z’ = -2z - 3 + i$',
        '$z’ = 2z - 3 + i$',
      ],
      correctAnswerIndex: 1,
      explanation: '$z’ = -2(z - (3 - i)) + (3 - i) = -2z + 6 - 2i + 3 - i = -2z + 9 - 3i$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Rotation',
    stepTheme: 'violet',
    stepTitle: 'Écriture complexe d’une rotation de centre $\\Omega(\\omega)$ et d’angle $\\theta$ (p.13)',
    paragraphText:
      'La rotation $r$ de centre $\\Omega(\\omega)$ et d’angle orienté de mesure principale $\\theta \\in ]-\\pi ; \\pi]$ fixe $\\Omega$ ($r(\\Omega) = \\Omega$) et transforme tout point $M \\neq \\Omega$ en $M’$ tel que $\\Omega M’ = \\Omega M$ et $\\operatorname{Mes}(\\widehat{\\overrightarrow{\\Omega M}, \\overrightarrow{\\Omega M’}}) = \\theta$, ce qui équivaut à $\\frac{z’ - \\omega}{z - \\omega} = e^{i\\theta}$, soit **$z’ = e^{i\\theta}(z - \\omega) + \\omega$**.',
    formula: {
      name: 'Rotation de centre Ω(ω) et d’angle θ',
      formula: 'z’ - \\omega = e^{i\\theta}(z - \\omega) \\iff z’ = e^{i\\theta}(z - \\omega) + \\omega',
    },
    exercise: {
      id: 'tc_m_geo_l08_p03_q04',
      type: 'mcq',
      prompt: 'Quelle est l’écriture complexe de la rotation $r$ de centre $\\Omega(i\\sqrt{3})$ et d’angle $\\frac{\\pi}{3}$ (p.13) ?',
      options: [
        '$z’ = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + \\frac{3}{2} + i\\frac{\\sqrt{3}}{2}$',
        '$z’ = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + i\\sqrt{3}$',
        '$z’ = \\left(\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}\\right)z - \\frac{3}{2} + i\\frac{\\sqrt{3}}{2}$',
        '$z’ = \\left(\\frac{\\sqrt{3}}{2} + \\frac{i}{2}\\right)z + \\frac{3}{2}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$z’ = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)(z - i\\sqrt{3}) + i\\sqrt{3} = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z - i\\frac{\\sqrt{3}}{2} + \\frac{3}{2} + i\\sqrt{3} = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + \\frac{3}{2} + i\\frac{\\sqrt{3}}{2}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Tableau complet',
    stepTheme: 'violet',
    stepTitle: 'Récapitulatif des transformations usuelles et leurs écritures complexes (p.13–14)',
    paragraphText:
      'Toutes ces écritures découlent de la traduction complexe des vecteurs et des angles : les symétries axiales font intervenir $\\bar{z}$ (ce sont des antidéplacements), tandis que translations, symétries centrales, homothéties et rotations s’écrivent $z’ = az + b$ avec $a \\in \\mathbb{C}^*$ (ce sont toutes des similitudes directes).',
    visualSchema: {
      type: 'custom_svg',
      title: 'Transformations usuelles du plan et écritures complexes',
      caption: 'Repère orthonormé direct (O, I, J) et centre Ω d’affixe ω.',
      tableData: {
        headers: ['Transformation du plan', 'Définition géométrique', 'Écriture complexe'],
        rows: [
          ['Symétrie orthogonale d’axe $(OI)$', '$(OI)$ médiatrice de $[MM’]$', '$z’ = \\bar{z}$'],
          ['Symétrie orthogonale d’axe $(OJ)$', '$(OJ)$ médiatrice de $[MM’]$', '$z’ = -\\bar{z}$'],
          ['Symétrie centrale de centre $\\Omega(\\omega)$', '$\\overrightarrow{\\Omega M’} = -\\overrightarrow{\\Omega M}$', '$z’ - \\omega = -(z - \\omega)$'],
          ['Translation de vecteur $\\vec{u}(b)$', '$\\overrightarrow{MM’} = \\vec{u}$', '$z’ = z + b$'],
          ['Homothétie $(\\Omega(\\omega), k)$, $k \\in \\mathbb{R}^*$', '$\\overrightarrow{\\Omega M’} = k\\overrightarrow{\\Omega M}$', '$z’ - \\omega = k(z - \\omega)$'],
          ['Rotation $(\\Omega(\\omega), \\theta)$', '$\\Omega M’=\\Omega M$ et $(\\widehat{\\overrightarrow{\\Omega M},\\overrightarrow{\\Omega M’}})=\\theta$', '$z’ - \\omega = e^{i\\theta}(z - \\omega)$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l08_p03_q05',
      type: 'mcq',
      prompt: 'Quelle est l’écriture complexe de l’homothétie $h$ de centre $\\Omega(-1 - i)$ et de rapport $3$ (p.14) ?',
      options: ['$z’ = 3z - 2 - 2i$', '$z’ = 3z + 2 + 2i$', '$z’ = 3z + 4 + 4i$', '$z’ = -3z + 2 + 2i$'],
      correctAnswerIndex: 1,
      explanation: '$z’ = 3(z - (-1 - i)) + (-1 - i) = 3z + 3 + 3i - 1 - i = 3z + 2 + 2i$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Exercice 2 p.23',
    stepTheme: 'green',
    stepTitle: 'Calculer l’image ou l’écriture d’une translation et d’une rotation',
    paragraphText:
      'Pour trouver l’écriture complexe d’une rotation d’angle $\\frac{2\\pi}{3}$ et de centre $A(1 + i)$, on écrit $z’ - (1+i) = e^{i\\frac{2\\pi}{3}}(z - (1+i))$ avec $e^{i\\frac{2\\pi}{3}} = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$. On développe ensuite soigneusement le terme constant : $-\\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)(1+i) + 1 + i = \\left(\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}\\right)(1+i) + 1 + i = \\frac{1 + \\sqrt{3}}{2} + i\\frac{1 - \\sqrt{3}}{2} + 1 + i = \\frac{3+\\sqrt{3}}{2} + i\\frac{3-\\sqrt{3}}{2}$.',
    exercise: {
      id: 'tc_m_geo_l08_p03_q06',
      type: 'mcq',
      prompt: 'Soit $t$ la translation de vecteur $\\vec{u}(1 - 2i)$ (p.12). Quelle est l’affixe de l’image $A’$ de $A(3 - i)$ par $t$ ?',
      options: ['$2 + i$', '$4 - 3i$', '$-2 - i$', '$4 + i$'],
      correctAnswerIndex: 1,
      explanation: '$z_{A’} = z_A + b = (3 - i) + (1 - 2i) = 4 - 3i$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vigilance calcul',
    stepTheme: 'orange',
    stepTitle: 'Antécédent vs image dans $z’ = az + b$',
    paragraphText:
      'Attention à ne pas remplacer $z$ au lieu de $z’$ lorsqu’on demande l’**antécédent** d’un point ! Par exemple, pour la rotation $r$ d’écriture $z’ = iz + 1 + i$ (Ex. 5 p.26), trouver l’antécédent $D$ de $A(-1 + 3i)$ revient à résoudre $z_A = i z_D + 1 + i$, soit $iz_D = -2 + 2i \\implies z_D = \\frac{-2 + 2i}{i} = 2 + 2i$, alors que l’image de $A$ vaut $i(-1+3i)+1+i = -2$.',
    exercise: {
      id: 'tc_m_geo_l08_p03_q07',
      type: 'mcq',
      prompt: 'Pour la rotation $r$ d’écriture complexe $z’ = iz + 1 + i$, quelle est l’affixe de l’antécédent $D$ du point $A(-1 + 3i)$ ?',
      options: ['$-2$', '$2 + 2i$', '$-2 - 2i$', '$1 - i$'],
      correctAnswerIndex: 1,
      explanation: 'On résout $iz + 1 + i = -1 + 3i \\iff iz = -2 + 2i \\iff z = \\frac{-2 + 2i}{i} = \\frac{(-2 + 2i)(-i)}{1} = 2 + 2i$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Similitude directe',
    stepTheme: 'blue',
    stepTitle: 'Écriture complexe d’une similitude plane directe : $z’ = az + b$ (p.15)',
    paragraphText:
      'Dans le plan complexe muni d’un repère orthonormé direct $(O ; \\vec{u}, \\vec{v})$, une **similitude plane directe** est une transformation du plan dont l’écriture complexe est de la forme **$z’ = az + b$** avec **$a \\in \\mathbb{C}^*$** et **$b \\in \\mathbb{C}$**. Si $a = 1$, c’est une translation de vecteur d’affixe $b$ ; si $a \\neq 1$, son unique point invariant (le centre $\\Omega$) vérifie $z = az + b \\iff z_\\Omega = \\frac{b}{1 - a}$, son rapport vaut $k = |a|$ et son angle vaut $\\theta = \\operatorname{Arg}(a)$.',
    formula: {
      name: 'Éléments caractéristiques depuis z’ = az + b (a ≠ 1)',
      formula: 'z_\\Omega = \\frac{b}{1 - a} \\qquad ; \\qquad k = |a| \\qquad ; \\qquad \\theta = \\operatorname{Arg}(a)',
    },
    exercise: {
      id: 'tc_m_geo_l08_p04_q01',
      type: 'mcq',
      prompt: 'Soit $S$ la similitude directe d’écriture complexe $z’ = (1 - i)z + i$ (p.15). Quels sont ses éléments caractéristiques ?',
      options: [
        'Centre $A(1)$, rapport $\\sqrt{2}$, angle $-\\frac{\\pi}{4}$',
        'Centre $A(i)$, rapport $\\sqrt{2}$, angle $\\frac{\\pi}{4}$',
        'Centre $A(1 - i)$, rapport $2$, angle $-\\frac{\\pi}{4}$',
        'Translation de vecteur $i$',
      ],
      correctAnswerIndex: 0,
      explanation: '$a = 1 - i \\neq 1$, $z_A = \\frac{i}{1 - (1 - i)} = \\frac{i}{i} = 1$, $k = |1 - i| = \\sqrt{2}$ et $\\operatorname{Arg}(1 - i) = -\\frac{\\pi}{4}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Classification complète',
    stepTheme: 'violet',
    stepTitle: 'Particulariser une similitude $z’ = az + b$ selon la valeur de $a$ (p.16)',
    paragraphText:
      'Pour identifier la nature exacte d’une similitude directe $z’ = az + b$ ($a \\in \\mathbb{C}^*$), on examine d’abord si $a$ est réel ou complexe non réel, puis on compare $|a|$ à $1$. Le tableau ci-dessous résume les quatre cas possibles.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Classification complète de z’ = az + b (a ∈ ℂ*, b ∈ ℂ)',
      caption: 'Quatre natures possibles selon la position de a dans ℂ*.',
      tableData: {
        headers: ['Condition sur a', 'Nature de S', 'Éléments caractéristiques'],
        rows: [
          ['$a = 1$', 'Translation', 'Vecteur $\\vec{u}$ d’affixe $b$'],
          ['$a \\in \\mathbb{R}^* \\setminus \\{1\\}$', 'Homothétie', 'Centre $\\Omega\\left(\\frac{b}{1-a}\\right)$, rapport $a$ (rapport similitude $|a|$, angle $0$ si $a>0$, $\\pi$ si $a<0$)'],
          ['$a \\in \\mathbb{C} \\setminus \\mathbb{R}$ et $|a| = 1$', 'Rotation', 'Centre $\\Omega\\left(\\frac{b}{1-a}\\right)$, angle $\\operatorname{Arg}(a)$'],
          ['$a \\in \\mathbb{C} \\setminus \\mathbb{R}$ et $|a| \\neq 1$', 'Similitude directe propre', 'Centre $\\Omega\\left(\\frac{b}{1-a}\\right)$, rapport $|a|$, angle $\\operatorname{Arg}(a)$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l08_p04_q02',
      type: 'mcq',
      prompt: 'Quelle est la nature exacte de la similitude $S$ définie par $z’ = \\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right)z + \\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$ (p.16) ?',
      options: [
        'Une homothétie de rapport $\\frac{1}{2}$',
        'Une rotation de centre $1$ et d’angle $\\frac{\\pi}{3}$',
        'Une similitude directe de rapport $2$ et d’angle $\\frac{\\pi}{3}$',
        'Une translation',
      ],
      correctAnswerIndex: 1,
      explanation: '$|a| = \\left|\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right| = 1$ avec $a \\notin \\mathbb{R}$, donc $S$ est une rotation d’angle $\\frac{\\pi}{3}$ et de centre $\\frac{\\frac{1}{2}-i\\frac{\\sqrt{3}}{2}}{1-(\\frac{1}{2}+i\\frac{\\sqrt{3}}{2})} = 1$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Calcul des éléments',
    stepTheme: 'green',
    stepTitle: 'Étudier les cas complexes : homothétie négative et similitude propre (p.16–17)',
    paragraphText:
      'Pour $z’ = (-1 + i)z + 2$ : $a = -1 + i \\in \\mathbb{C} \\setminus \\mathbb{R}$ et $|a| = \\sqrt{2} \\neq 1$. Son angle vérifie $\\cos\\theta = -\\frac{\\sqrt{2}}{2}$ et $\\sin\\theta = \\frac{\\sqrt{2}}{2}$, donc $\\theta = \\frac{3\\pi}{4}$. L’affixe du centre vaut $z_\\Omega = \\frac{2}{1 - (-1 + i)} = \\frac{2}{2 - i} = \\frac{2(2+i)}{5} = \\frac{4}{5} + \\frac{2}{5}i$. Pour $z’ = 5z + 2i$, $a = 5 \\in \\mathbb{R}^*\\setminus\\{1\\}$ : c’est une homothétie de rapport $5$ et de centre $\\frac{2i}{1-5} = -\\frac{1}{2}i$.',
    exercise: {
      id: 'tc_m_geo_l08_p04_q03',
      type: 'mcq',
      prompt: 'Quels sont les éléments caractéristiques de la similitude $z’ = (-1 + i)z + 2$ (p.17) ?',
      options: [
        'Centre $\\frac{4}{5} + \\frac{2}{5}i$, rapport $\\sqrt{2}$, angle $\\frac{3\\pi}{4}$',
        'Centre $2$, rapport $\\sqrt{2}$, angle $-\\frac{\\pi}{4}$',
        'Centre $-1 + i$, rapport $2$, angle $\\frac{3\\pi}{4}$',
        'Centre $\\frac{4}{5} - \\frac{2}{5}i$, rapport $\\sqrt{2}$, angle $\\frac{\\pi}{4}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$|{-1+i}| = \\sqrt{2}$, $\\operatorname{Arg}(-1+i) = \\frac{3\\pi}{4}$, et $z_\\Omega = \\frac{2}{2-i} = \\frac{4}{5} + \\frac{2}{5}i$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Écriture depuis (Ω, k, θ)',
    stepTheme: 'violet',
    stepTitle: 'Passer des éléments caractéristiques à l’écriture complexe (p.17)',
    paragraphText:
      'Réciproquement, toute similitude directe $S$ de centre $\\Omega(z_\\Omega)$, de rapport $k > 0$ et d’angle $\\theta$ a pour écriture complexe **$z’ = k e^{i\\theta}(z - z_\\Omega) + z_\\Omega$**. Elle se décompose de manière unique sous forme canonique en $S = r_{(\\Omega,\\theta)} \\circ h_{(\\Omega,k)} = h_{(\\Omega,k)} \\circ r_{(\\Omega,\\theta)}$.',
    formula: {
      name: 'Formule directe à partir de (Ω, k, θ)',
      formula: 'z’ = k e^{i\\theta}(z - z_\\Omega) + z_\\Omega',
    },
    exercise: {
      id: 'tc_m_geo_l08_p04_q04',
      type: 'mcq',
      prompt: 'Quelle est l’écriture complexe de la similitude directe de centre $A(i)$, de rapport $\\sqrt{2}$ et d’angle $\\frac{\\pi}{4}$ (p.17) ?',
      options: [
        '$z’ = (1 + i)z + 1$',
        '$z’ = (1 + i)z - 1$',
        '$z’ = (1 - i)z + 1$',
        '$z’ = \\sqrt{2}z + i$',
      ],
      correctAnswerIndex: 0,
      explanation: '$z’ = \\sqrt{2}e^{i\\frac{\\pi}{4}}(z - i) + i = (1 + i)(z - i) + i = (1 + i)z - i + 1 + i = (1 + i)z + 1$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Deux points et images',
    stepTheme: 'green',
    stepTitle: 'Déterminer $z’ = az + b$ à partir de $s(A) = C$ et $s(B) = D$ (p.18–19)',
    paragraphText:
      'Pour tous points $A \\neq B$ et $C \\neq D$, il existe une unique similitude directe $s$ telle que $s(A) = C$ et $s(B) = D$. On résout le système linéaire $\\begin{cases} a z_A + b = z_C \\\\ a z_B + b = z_D \\end{cases}$, dont la soustraction donne aussitôt $a = \\frac{z_C - z_D}{z_A - z_B}$, puis $b = z_C - a z_A$. Avec $A(2), B(2+2i), C(1-3i), D(-4i)$, on trouve $a = \\frac{1+i}{-2i} = -\\frac{1}{2} + \\frac{1}{2}i$ et $b = 2 - 4i$.',
    formula: {
      name: 'Calcul direct de a et b',
      formula: 'a = \\frac{z_C - z_D}{z_A - z_B} \\qquad ; \\qquad b = z_C - a z_A',
    },
    exercise: {
      id: 'tc_m_geo_l08_p04_q05',
      type: 'mcq',
      prompt: 'Soit $S$ la similitude directe de centre $A(-2+i)$ telle que $S(B) = C$ avec $B(1+2i)$ et $C(2-i)$ (p.19–20). Que vaut son coefficient $a$ ?',
      options: ['$1 + i$', '$1 - i$', '$-1 + i$', '$2 - i$'],
      correctAnswerIndex: 1,
      explanation: '$S(A)=A$ et $S(B)=C$ donnent $a = \\frac{z_C - z_A}{z_B - z_A} = \\frac{(2 - i) - (-2 + i)}{(1 + 2i) - (-2 + i)} = \\frac{4 - 2i}{3 + i} = \\frac{-4 + 2i}{-3 - i} = 1 - i$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 2 maison',
    stepTheme: 'blue',
    stepTitle: 'Identifier rapidement $z’ = (1 + i\\sqrt{3})z + 2i\\sqrt{3}$ (p.22)',
    paragraphText:
      'Dans l’exercice 2 p.22, $a = 1 + i\\sqrt{3} = 2\\left(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) = 2e^{i\\frac{\\pi}{3}}$. Le rapport est $k = 2$ et l’angle $\\theta = \\frac{\\pi}{3}$. Pour trouver le centre $\\Omega$, on calcule $z_\\Omega = \\frac{2i\\sqrt{3}}{1 - (1 + i\\sqrt{3})} = \\frac{2i\\sqrt{3}}{-i\\sqrt{3}} = -2$. C’est donc la similitude directe de centre $\\Omega(-2)$, de rapport $2$ et d’angle $\\frac{\\pi}{3}$.',
    exercise: {
      id: 'tc_m_geo_l08_p04_q06',
      type: 'mcq',
      prompt: 'Quel est le centre $\\Omega$ de la similitude directe d’écriture complexe $z’ = (1 + i\\sqrt{3})z + 2i\\sqrt{3}$ ?',
      options: ['$\\Omega(2)$', '$\\Omega(-2)$', '$\\Omega(2i)$', '$\\Omega(1 + i\\sqrt{3})$'],
      correctAnswerIndex: 1,
      explanation: '$z_\\Omega = \\frac{2i\\sqrt{3}}{1 - 1 - i\\sqrt{3}} = \\frac{2i\\sqrt{3}}{-i\\sqrt{3}} = -2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Signe de k dans h(Ω, k)',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre rapport d’homothétie négatif et rapport de similitude',
    paragraphText:
      'Dans $z’ = -3z + b$, le nombre réel $a = -3$ est négatif. En tant qu’**homothétie**, son rapport algébrique est $k_{\\text{hom}} = -3$ ; mais en tant que **similitude directe**, le rapport est toujours $|a| = 3 > 0$ et l’angle est $\\operatorname{Arg}(-3) = \\pi$ ! Pense toujours à préciser l’angle $\\pi$ quand tu décris une homothétie de rapport négatif comme une similitude directe.',
    exercise: {
      id: 'tc_m_geo_l08_p04_q07',
      type: 'mcq',
      prompt: 'Si une homothétie de centre $A$ a un rapport $k = -3 < 0$, quels sont son rapport et son angle en tant que similitude directe ?',
      options: [
        'Rapport $-3$ et angle $0$',
        'Rapport $3$ et angle $\\pi$',
        'Rapport $3$ et angle $\\frac{\\pi}{2}$',
        'Rapport $\\frac{1}{3}$ et angle $-\\pi$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le rapport d’une similitude directe est toujours strictement positif ($|a| = 3$), et $\\operatorname{Arg}(-3) = \\pi$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Images de figures',
    stepTheme: 'violet',
    stepTitle: 'Images de droites, cercles et multiplication des aires par $k^2$ (p.20)',
    paragraphText:
      'Toute similitude directe $S$ de rapport $k > 0$ transforme une droite $(AB)$ en la droite $(A’B’)$, une demi-droite $[AB)$ en $[A’B’)$, un segment de longueur $\\ell$ en un segment de longueur $k\\ell$, et un cercle $\\mathcal{C}(A, r)$ en le cercle $\\mathcal{C}(A’, kr)$. De plus, elle multiplie **les distances par $k$** et **les aires par $k^2$**.',
    formula: {
      name: 'Effet sur longueurs, rayons et aires',
      formula: 'A’B’ = k\\,AB \\qquad ; \\qquad r’ = kr \\qquad ; \\qquad \\mathcal{A}’ = k^2 \\mathcal{A}',
    },
    exercise: {
      id: 'tc_m_geo_l08_p05_q01',
      type: 'mcq',
      prompt: 'Soit $S$ d’écriture $z’ = (1 + i)z - 1 - 2i$ (p.20). Sachant que le triangle $OIJ$ a pour aire $\\frac{1}{2}\\;\\text{ua}$, quelle est l’aire de son image par $S$ et quel est le rayon de l’image du cercle $\\mathcal{C}(O, 2)$ ?',
      options: [
        'Aire $1\\;\\text{ua}$ et rayon $2\\sqrt{2}$',
        'Aire $\\frac{\\sqrt{2}}{2}\\;\\text{ua}$ et rayon $2\\sqrt{2}$',
        'Aire $2\\;\\text{ua}$ et rayon $4$',
        'Aire $1\\;\\text{ua}$ et rayon $4$',
      ],
      correctAnswerIndex: 0,
      explanation: '$k = |1 + i| = \\sqrt{2}$. L’aire est multipliée par $k^2 = 2$, soit $2 \\times \\frac{1}{2} = 1\\;\\text{ua}$, et le rayon est multiplié par $k$, soit $2\\sqrt{2}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'blue',
    stepTitle: 'Quadrilatère $ABCD$ bordé de triangles rectangles isocèles (p.1 et p.21–22)',
    paragraphText:
      'Sur un mur du club de maths, un élève observe un quadrilatère direct $ABCD$ et quatre triangles rectangles isocèles directs $AM_1B, BM_2C, CM_3D, DM_4A$ en $M_1, M_2, M_3, M_4$. Il affirme que $[M_1M_3]$ et $[M_2M_4]$ sont perpendiculaires et de même longueur. On écrit la caractérisation en $M_1$ : $\\frac{z_B - z_1}{z_A - z_1} = i \\iff z_1 = \\frac{z_A(1-i) + z_B(1+i)}{2}$, et de même pour $z_2, z_3, z_4$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Situation complexe : triangles rectangles isocèles sur ABCD (p.21)',
      caption: 'Les diagonales reliant les sommets opposés [M₁M₃] et [M₂M₄] vérifient M₁M₃ = M₂M₄ et (M₁M₃) ⊥ (M₂M₄).',
      svgContent: `<svg viewBox="0 0 320 175" width="305" height="166" xmlns="http://www.w3.org/2000/svg">
        <polygon points="120,45 195,50 215,115 95,110" fill="#f1f5f9" stroke="#334155" stroke-width="1.8"/>
        <polyline points="120,45 110,90 95,110" fill="none" stroke="#64748b" stroke-width="1.2"/>
        <polyline points="95,110 158,148 215,115" fill="none" stroke="#64748b" stroke-width="1.2"/>
        <polyline points="215,115 245,75 195,50" fill="none" stroke="#64748b" stroke-width="1.2"/>
        <polyline points="195,50 160,18 120,45" fill="none" stroke="#64748b" stroke-width="1.2"/>
        <line x1="110" y1="90" x2="245" y2="75" stroke="#2563eb" stroke-width="2"/>
        <line x1="160" y1="18" x2="158" y2="148" stroke="#dc2626" stroke-width="2"/>
        <circle cx="110" cy="90" r="3.2" fill="#2563eb"/><text x="90" y="88" font-size="11" font-weight="bold" fill="#2563eb">M₁</text>
        <circle cx="245" cy="75" r="3.2" fill="#2563eb"/><text x="250" y="79" font-size="11" font-weight="bold" fill="#2563eb">M₃</text>
        <circle cx="160" cy="18" r="3.2" fill="#dc2626"/><text x="166" y="21" font-size="11" font-weight="bold" fill="#dc2626">M₄</text>
        <circle cx="158" cy="148" r="3.2" fill="#dc2626"/><text x="164" y="158" font-size="11" font-weight="bold" fill="#dc2626">M₂</text>
        <text x="112" y="39" font-size="10" fill="#334155">A</text>
        <text x="82" y="116" font-size="10" fill="#334155">B</text>
        <text x="220" y="124" font-size="10" fill="#334155">C</text>
        <text x="197" y="45" font-size="10" fill="#334155">D</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l08_p05_q02',
      type: 'mcq',
      prompt: 'Dans le triangle rectangle isocèle direct $AM_1B$ en $M_1$, quelle expression donne l’affixe $z_1$ de $M_1$ en fonction de $z_A$ et $z_B$ ?',
      options: [
        '$z_1 = \\frac{z_A(1-i) + z_B(1+i)}{2}$',
        '$z_1 = \\frac{z_A + z_B}{2}$',
        '$z_1 = \\frac{z_A(1+i) + z_B(1-i)}{2}$',
        '$z_1 = i(z_B - z_A)$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\frac{z_B - z_1}{z_A - z_1} = i \\implies z_B - z_1 = iz_A - iz_1 \\implies (1 - i)z_1 = z_B - iz_A$, puis en multipliant par $1 + i$ : $z_1 = \\frac{(z_B - iz_A)(1+i)}{2} = \\frac{z_A(1-i) + z_B(1+i)}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Fin situation complexe',
    stepTheme: 'green',
    stepTitle: 'Conclure avec $\\frac{z_4 - z_2}{z_3 - z_1} = -i$ (p.22, coquille corrigée)',
    paragraphText:
      'En formant la différence $z_4 - z_2 = \\frac{(1-i)(z_D - z_B) + (1+i)(z_A - z_C)}{2}$ et $z_3 - z_1 = \\frac{(1-i)(z_C - z_A) + (1+i)(z_D - z_B)}{2}$, puis en multipliant numérateur et dénominateur par $1 + i$, on factorise par $i$ au dénominateur et on obtient $\\frac{z_4 - z_2}{z_3 - z_1} = -i$ (en supposant $M_1 \\neq M_3$). Ainsi $\\left|\\frac{z_4 - z_2}{z_3 - z_1}\\right| = 1 \\implies |z_4 - z_2| = |z_3 - z_1|$ (et non $|z_4-z_2|=|z_4-z_2|$ comme imprimé par coquille p.22), donc $M_2M_4 = M_1M_3$ et $(M_1M_3) \\perp (M_2M_4)$.',
    formula: {
      name: 'Théorème de Van Aubel (cas complexe)',
      formula: '\\frac{z_4 - z_2}{z_3 - z_1} = -i \\implies M_2M_4 = M_1M_3 \\;\\text{ et }\\; (M_1M_3) \\perp (M_2M_4)',
    },
    exercise: {
      id: 'tc_m_geo_l08_p05_q03',
      type: 'mcq',
      prompt: 'Sachant que $\\frac{z_4 - z_2}{z_3 - z_1} = -i$, que peut-on affirmer sur les segments $[M_1M_3]$ et $[M_2M_4]$ ?',
      options: [
        'Ils sont parallèles et $M_2M_4 = 2M_1M_3$',
        'Ils ont la même longueur ($|z_4 - z_2| = |z_3 - z_1|$) et des supports perpendiculaires',
        'Ils ont le même milieu',
        'Leur longueur est nulle',
      ],
      correctAnswerIndex: 1,
      explanation: '$|-i| = 1$ prouve $M_2M_4 = M_1M_3$, et $-i \\in i\\mathbb{R}^*$ prouve que $(M_2M_4) \\perp (M_1M_3)$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Approfondissement Ex. 4',
    stepTheme: 'green',
    stepTitle: 'Changement de variable dans $\\mathbb{C}$ et triangle $IAC$ (p.24–25)',
    paragraphText:
      'Dans l’exercice 4, on résout d’abord $z^2 - 2z + 2 = 0 \\iff (z-1)^2 = i^2$, d’où $S_{\\mathbb{C}} = \\{1 + i ; 1 - i\\}$ (de module $\\sqrt{2}$ et d’arguments $\\pm\\frac{\\pi}{4}$). En posant $Z = -iz + 3i + 3$, l’équation $(-iz + 3i + 3)^2 - 2(-iz + 3i + 3) + 2 = 0$ équivaut à $Z = 1 + i$ ou $Z = 1 - i$, donnant $z = 2 - 2i$ ou $z = 4 - 2i$. Ensuite, avec $A(1+i), B(1-i), C(2-2i)$ et $I(3)$, on vérifie $IA = IB = IC = \\sqrt{5}$ et $\\frac{z_C - 3}{z_A - 3} = \\frac{-1 - 2i}{-2 + i} = i$, donc $IAC$ est rectangle isocèle en $I$.',
    exercise: {
      id: 'tc_m_geo_l08_p05_q04',
      type: 'mcq',
      prompt: 'Avec $A(1+i)$, $C(2-2i)$ et $I(3)$, que vaut $\\frac{z_C - 3}{z_A - 3}$ et quelle est la nature du triangle $IAC$ (p.25) ?',
      options: [
        '$i$ : triangle rectangle isocèle en $I$',
        '$-1$ : points alignés',
        '$2i$ : triangle rectangle non isocèle en $I$',
        '$e^{i\\frac{\\pi}{3}}$ : triangle équilatéral',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\frac{(2-2i)-3}{(1+i)-3} = \\frac{-1-2i}{-2+i} = \\frac{i(-2+i)}{-2+i} = i$, donc $IC = IA$ et $(IA) \\perp (IC)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Approfondissement Ex. 5',
    stepTheme: 'blue',
    stepTitle: 'Construire et prouver un carré par rotation complexe (p.25–26)',
    paragraphText:
      'On donne $A(-1 + 3i)$, $B(-2)$, $D(2 + 2i)$ et la rotation $r$ de centre $J(i)$ et d’angle $\\frac{\\pi}{2}$, d’écriture $z’ = iz + 1 + i$. On vérifie $r(A) = B$ et $r(D) = A$. Soit $C$ le symétrique de $A$ par rapport à $J$ : $z_C = 2z_J - z_A = 2i - (-1 + 3i) = 1 - i$. On montre alors que $AB = BC = CD = DA = \\sqrt{10}$ (losange) et que $\\frac{z_B - z_A}{z_C - z_A} = \\frac{1}{2} - \\frac{1}{2}i$ a pour argument $\\frac{\\pi}{4}$, donc $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AD}}) = 2 \\times \\frac{\\pi}{4} = \\frac{\\pi}{2}$ : $ABCD$ est bien un carré !',
    exercise: {
      id: 'tc_m_geo_l08_p05_q05',
      type: 'mcq',
      prompt: 'Si $C$ est le symétrique de $A(-1 + 3i)$ par rapport au point $J(i)$, quelle est l’affixe de $C$ (p.26) ?',
      options: ['$1 - i$', '$-1 - i$', '$1 + 5i$', '$-2i$'],
      correctAnswerIndex: 0,
      explanation: '$J$ est le milieu de $[AC]$, donc $z_C = 2z_J - z_A = 2i - (-1 + 3i) = 1 - i$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Exercice 5 p.27',
    stepTheme: 'green',
    stepTitle: 'Tester si $(a, a^2, a^3)$ forment un triangle équilatéral',
    paragraphText:
      'Un élève affirme que si $a$ est la solution de partie imaginaire positive de $2z^2 + 2z + 1 = 0$, alors les points d’affixes $a, a^2$ et $a^3$ sont les sommets d’un triangle équilatéral. Le discriminant vaut $\\Delta = 4 - 8 = -4 = (2i)^2$, d’où $a = -\\frac{1}{2} + \\frac{1}{2}i$. Pour vérifier la nature du triangle, on calcule le quotient $\\frac{a^3 - a}{a^2 - a} = \\frac{a(a^2 - 1)}{a(a - 1)} = a + 1 = \\frac{1}{2} + \\frac{1}{2}i$. Or ce quotient ne vaut ni $e^{i\\frac{\\pi}{3}}$, ni $e^{-i\\frac{\\pi}{3}}$ (son module vaut $\\frac{\\sqrt{2}}{2} \\neq 1$) : la voisine de classe a raison, le triangle n’est pas équilatéral !',
    exercise: {
      id: 'tc_m_geo_l08_p05_q06',
      type: 'mcq',
      prompt: 'Pour $a = -\\frac{1}{2} + \\frac{1}{2}i$, que vaut le rapport $\\frac{a^3 - a}{a^2 - a}$ et pourquoi le triangle des sommets $a, a^2, a^3$ n’est-il pas équilatéral (p.27) ?',
      options: [
        'Il vaut $a + 1 = \\frac{1}{2} + \\frac{1}{2}i$, qui n’est égal ni à $e^{i\\frac{\\pi}{3}}$ ni à $e^{-i\\frac{\\pi}{3}}$',
        'Il vaut $a - 1 = -\\frac{3}{2} + \\frac{1}{2}i$',
        'Il vaut $i$, donc le triangle est rectangle isocèle mais non équilatéral',
        'Il vaut $0$, donc deux sommets sont confondus',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\frac{a^3 - a}{a^2 - a} = a + 1 = \\frac{1}{2} + \\frac{1}{2}i$, de module $\\frac{\\sqrt{2}}{2} \\neq 1$ et d’argument $\\frac{\\pi}{4} \\neq \\pm\\frac{\\pi}{3}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Méthode Bac',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier d’écarter le cas où deux sommets coïncident dans un quotient',
    paragraphText:
      'Avant de simplifier une fraction comme $\\frac{a^3 - a}{a^2 - a}$ ou de conclure sur $\\frac{z_C - z_A}{z_B - z_A}$, vérifie toujours que le dénominateur est non nul (ici $a \\neq 0$ et $a \\neq 1$). De même, lorsqu’une similitude directe $S$ de centre $\\Omega$ transforme $M$ en $M’$, souviens-toi que $M \\neq \\Omega$ est indispensable pour parler de l’angle $(\\widehat{\\overrightarrow{\\Omega M}, \\overrightarrow{\\Omega M’}})$.',
    exercise: {
      id: 'tc_m_geo_l08_p05_q07',
      type: 'mcq',
      prompt: 'À quelle condition le point $M$ vérifiant $z’ = az + b$ ($a \\neq 1$) est-il invariant par la similitude directe ?',
      options: [
        'Uniquement lorsque $M$ a pour affixe $z_\\Omega = \\frac{b}{1 - a}$',
        'Pour tout point de la droite d’équation $y = ax + b$',
        'Lorsque $|z| = |a|$',
        'Il n’existe jamais de point invariant lorsque $a \\neq 1$',
      ],
      correctAnswerIndex: 0,
      explanation: '$z = az + b \\iff (1 - a)z = b \\iff z = \\frac{b}{1 - a}$ : toute similitude directe autre qu’une translation admet un unique point fixe.',
    },
  },
];

// Clean replacement for p02Steps[6] (q07) so there is zero ambiguity with Ex 1 p.22-23
p02Steps[6] = {
  stepNumber: 7,
  stepKind: 'piege',
  stepBadge: 'Vigilance démonstration',
  stepTheme: 'orange',
  stepTitle: 'Attention au rapport nul et au mauvais sommet de référence',
  paragraphText:
    'Deux pièges reviennent souvent au Bac : (1) écrire $\\in \\mathbb{R}$ ou $\\in i\\mathbb{R}$ au lieu de $\\mathbb{R}^*$ ou $i\\mathbb{R}^*$ — si le quotient vaut $0$, deux points sont confondus et cela ne prouve ni parallélisme ni orthogonalité ; (2) pour tester si $ABC$ est isocèle ou rectangle en $B$, ce n’est pas $z_A$ qu’il faut soustraire, mais bien **$z_B$** au numérateur et au dénominateur : $\\frac{z_A - z_B}{z_C - z_B}$.',
  exercise: {
    id: 'tc_m_geo_l08_p02_q07',
    type: 'mcq',
    prompt: 'Si l’on veut prouver qu’un triangle $ABC$ (à sommets distincts) est rectangle en $C$, quel quotient complexe doit-on montrer appartenir à $i\\mathbb{R}^*$ ?',
    options: [
      '$\\frac{z_A - z_B}{z_C - z_B}$',
      '$\\frac{z_A - z_C}{z_B - z_C}$',
      '$\\frac{z_C - z_A}{z_B - z_A}$',
      '$\\frac{z_A + z_B}{z_C}$',
    ],
    correctAnswerIndex: 1,
    explanation: 'Pour tester l’orthogonalité au sommet $C$ ($\\overrightarrow{CA} \\perp \\overrightarrow{CB}$), on soustrait $z_C$ aux deux vecteurs : $\\frac{z_A - z_C}{z_B - z_C} \\in i\\mathbb{R}^*$.',
  },
};

export const MATHS_TLE_C_L08_NOMBRES_COMPLEXES_GEOMETRIE: CurriculumChapter = {
  id: 'terminale_c_maths_geometrie_l08_nombres_complexes_geometrie',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 8,
  title: 'Leçon 8 : Nombres complexes et géométrie du plan',
  summary:
    'Interprétation géométrique du module et de l’argument d’un quotient complexe ; lieux géométriques ; configurations (parallélisme, alignement, orthogonalité, cocyclicité, triangles particuliers) ; écritures complexes des transformations usuelles et des similitudes directes.',
  officialVolumeHours: 8,
  contentVersion: 2,
  points: [
    {
      id: 'terminale_c_maths_geometrie_l08_nombres_complexes_geometrie_p01',
      order: 1,
      title: 'Interprétation géométrique d’un quotient et lieux géométriques',
      summary:
        'Interpréter |(z_A−z_B)/(z_C−z_D)| et arg((z_A−z_B)/(z_C−z_D)), reconnaître cercles, médiatrices, cercles d’Apollonius, droites et demi-droites ouvertes.',
      conceptExplanation:
        'Pour quatre points $A, B, C, D$ ($A \\neq B$, $C \\neq D$), $\\left|\\frac{z_A-z_B}{z_C-z_D}\\right| = \\frac{AB}{CD}$ et $\\arg\\left(\\frac{z_A-z_B}{z_C-z_D}\\right) \\equiv \\operatorname{Mes}(\\widehat{\\overrightarrow{DC},\\overrightarrow{BA}})\\;[2\\pi]$. On en déduit la traduction complexe des cercles ($|z-z_A|=r$), médiatrices et cercles d’Apollonius ($|z-z_A|=\\lambda|z-z_B|$), droites (modulo $\\pi$) et demi-droites (modulo $2\\pi$).',
      keyRule: 'Modulo $2\\pi$, $\\arg(z-z_A) \\equiv \\alpha\\;[2\\pi]$ donne une demi-droite ouverte ; modulo $\\pi$, c’est une droite privée de $A$.',
      formulas: [
        { name: 'Quotient complexe', formula: '\\left|\\frac{z_A-z_B}{z_C-z_D}\\right| = \\frac{AB}{CD}, \\qquad \\arg\\left(\\frac{z_A-z_B}{z_C-z_D}\\right) \\equiv (\\widehat{\\overrightarrow{DC},\\overrightarrow{BA}})\\;[2\\pi]' },
      ],
      workedExample: {
        title: 'Lieu |2iz − 3 + 2i| = |z − 2| (p.4, corrigé)',
        statement: 'Déterminer l’ensemble des points $M(z)$.',
        methodSteps: [
          'Factorisation par $2i$ : $2\\left|z - (-1 - \\frac{3}{2}i)\\right| = |z - 2|$, soit $\\frac{MA}{MB} = 2$ avec $A(2)$ et $B(-1-\\frac{3}{2}i)$.',
          'Barycentres : $H = \\operatorname{bar}\\{(A,1),(B,2)\\} \\implies z_H = -i$ et $K = \\operatorname{bar}\\{(A,1),(B,-2)\\} \\implies z_K = -4-3i$.',
        ],
        conclusion: 'Cercle de diamètre $[HK]$ avec $H(-i)$ et $K(-4-3i)$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l08_nombres_complexes_geometrie_p02',
      order: 2,
      title: 'Configurations du plan et triangles particuliers',
      summary:
        'Démontrer parallélisme, alignement, orthogonalité, cocyclicité de quatre points et reconnaître la nature d’un triangle (rectangle, isocèle, rectangle isocèle, équilatéral).',
      conceptExplanation:
        'Les configurations géométriques se ramènent à la nature algébrique d’un quotient complexe : $\\mathbb{R}^*$ pour parallélisme ou alignement, $i\\mathbb{R}^*$ pour orthogonalité, birapport réel non nul (sur points non alignés) pour cocyclicité, et $\\pm i$ ou $e^{\\pm i\\frac{\\pi}{3}}$ pour les triangles rectangles isocèles ou équilatéraux.',
      keyRule: 'Toujours soustraire l’affixe du sommet étudié au numérateur et au dénominateur, et écarter $0$ ($\\mathbb{R}^*$, $i\\mathbb{R}^*$).',
      formulas: [
        { name: 'Configurations usuelles', formula: '(AB)//(CD) \\iff \\frac{z_A-z_B}{z_C-z_D}\\in\\mathbb{R}^* \\quad;\\quad (AB)\\perp(CD) \\iff \\frac{z_A-z_B}{z_C-z_D}\\in i\\mathbb{R}^*' },
      ],
      workedExample: {
        title: 'Points cocycliques A(−2i), B(7−i), C(8+2i), D(−1+5i) (p.7)',
        statement: 'Démontrer que $A, B, C, D$ sont cocycliques.',
        methodSteps: [
          '$\\frac{z_D - z_A}{z_B - z_A} = \\frac{-1+7i}{7+i} = i \\notin \\mathbb{R}$, donc $A, B, D$ ne sont pas alignés.',
          '$\\frac{z_D - z_C}{z_B - z_C} = \\frac{-9+3i}{-1-3i} = -3i$, d’où le birapport $\\frac{i}{-3i} = -\\frac{1}{3} \\in \\mathbb{R}^*$.',
        ],
        conclusion: '$A, B, C$ et $D$ appartiennent à un même cercle.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l08_nombres_complexes_geometrie_p03',
      order: 3,
      title: 'Écritures complexes des transformations usuelles',
      summary:
        'Écrire et utiliser les formules complexes des symétries (OI), (OJ) et O, de la translation, de la symétrie centrale, de l’homothétie et de la rotation.',
      conceptExplanation:
        'Dans $(O, I, J)$ direct, la symétrie d’axe $(OI)$ s’écrit $z’=\\bar{z}$, celle d’axe $(OJ)$ $z’=-\\bar{z}$, la translation $z’=z+b$, l’homothétie $(\\Omega(\\omega),k)$ $z’-\\omega=k(z-\\omega)$ et la rotation $(\\Omega(\\omega),\\theta)$ $z’-\\omega=e^{i\\theta}(z-\\omega)$.',
      keyRule: 'Retenir $z’ - \\omega = a(z - \\omega)$ avec $a = k \\in \\mathbb{R}^*$ (homothétie) ou $a = e^{i\\theta}$ (rotation).',
      formulas: [
        { name: 'Transformations usuelles', formula: 'z’ = z+b \\;\\; ; \\;\\; z’ - \\omega = k(z - \\omega) \\;\\; ; \\;\\; z’ - \\omega = e^{i\\theta}(z - \\omega)' },
      ],
      workedExample: {
        title: 'Rotation de centre Ω(i√3) et d’angle π/3 (p.13)',
        statement: 'Trouver son écriture complexe.',
        methodSteps: [
          '$z’ = e^{i\\frac{\\pi}{3}}(z - i\\sqrt{3}) + i\\sqrt{3} = (\\frac{1}{2} + i\\frac{\\sqrt{3}}{2})(z - i\\sqrt{3}) + i\\sqrt{3}$.',
          'Développement : $-i\\sqrt{3}(\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}) + i\\sqrt{3} = \\frac{3}{2} + i\\frac{\\sqrt{3}}{2}$.',
        ],
        conclusion: '$z’ = (\\frac{1}{2} + i\\frac{\\sqrt{3}}{2})z + \\frac{3}{2} + i\\frac{\\sqrt{3}}{2}$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l08_nombres_complexes_geometrie_p04',
      order: 4,
      title: 'Similitude plane directe : écriture z’ = az + b et détermination',
      summary:
        'Reconnaître une similitude directe (translation, homothétie, rotation ou similitude propre) depuis z’ = az + b, et déterminer son écriture depuis (Ω, k, θ) ou deux couples de points.',
      conceptExplanation:
        'Toute similitude directe s’écrit $z’ = az + b$ ($a \\in \\mathbb{C}^*$, $b \\in \\mathbb{C}$). Si $a = 1$, c’est une translation ; si $a \\neq 1$, c’est une similitude directe de centre $\\Omega\\left(\\frac{b}{1-a}\\right)$, de rapport $k = |a|$ et d’angle $\\theta = \\operatorname{Arg}(a)$ (homothétie si $a \\in \\mathbb{R}^*\\setminus\\{1\\}$, rotation si $|a|=1$).',
      keyRule: 'Quand $a \\neq 1$, résoudre $z = az + b$ donne toujours le centre $z_\\Omega = \\frac{b}{1 - a}$.',
      formulas: [
        { name: 'Similitude directe', formula: 'z’ = az + b \\;(a \\in \\mathbb{C}^*) \\implies z_\\Omega = \\frac{b}{1-a}, \\; k = |a|, \\; \\theta = \\operatorname{Arg}(a)' },
      ],
      workedExample: {
        title: 'Similitude définie par A(2) ↦ C(1−3i) et B(2+2i) ↦ D(−4i) (p.18–19)',
        statement: 'Déterminer son écriture et ses éléments caractéristiques.',
        methodSteps: [
          '$a = \\frac{z_C - z_D}{z_A - z_B} = \\frac{1+i}{-2i} = -\\frac{1}{2} + \\frac{1}{2}i$, puis $b = (1-3i) - 2a = 2 - 4i$.',
          '$|a| = \\frac{\\sqrt{2}}{2}$, $\\operatorname{Arg}(a) = \\frac{3\\pi}{4}$ et $z_\\Omega = \\frac{2-4i}{\\frac{3}{2}-\\frac{1}{2}i} = 2 - 2i$.',
        ],
        conclusion: '$z’ = (-\\frac{1}{2} + \\frac{1}{2}i)z + 2 - 4i$ : centre $\\Omega(2-2i)$, rapport $\\frac{\\sqrt{2}}{2}$, angle $\\frac{3\\pi}{4}$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l08_nombres_complexes_geometrie_p05',
      order: 5,
      title: 'Images de figures, situation complexe et approfondissement',
      summary:
        'Calculer longueurs et aires images (k et k²), démontrer la propriété des triangles rectangles isocèles sur ABCD (Van Aubel) et résoudre les problèmes de synthèse.',
      conceptExplanation:
        'Une similitude directe de rapport $k$ multiplie les distances par $k$ et les aires par $k^2$, transformant droites, segments et cercles en objets de même nature. En modélisant les sommets par leurs affixes, les problèmes de géométrie sur les quadrilatères, cercles circonscrits et triangles deviennent de simples calculs algébriques dans $\\mathbb{C}$.',
      keyRule: 'Multiplier les longueurs par $k$, les aires par $k^2$, et modéliser chaque angle droit isocèle direct par $\\frac{z_B - z_M}{z_A - z_M} = i$.',
      formulas: [
        { name: 'Théorème de Van Aubel', formula: '\\frac{z_4 - z_2}{z_3 - z_1} = -i \\implies M_2M_4 = M_1M_3 \\;\\text{ et }\\; (M_1M_3) \\perp (M_2M_4)' },
      ],
      workedExample: {
        title: 'Situation complexe : quadrilatère ABCD et M₁, M₂, M₃, M₄ (p.21–22)',
        statement: 'Prouver que $M_1M_3 = M_2M_4$ et $(M_1M_3) \\perp (M_2M_4)$.',
        methodSteps: [
          '$z_1 = \\frac{z_A(1-i)+z_B(1+i)}{2}$ et relations analogues pour $z_2, z_3, z_4$.',
          'Simplification du quotient : $\\frac{z_4 - z_2}{z_3 - z_1} = \\frac{(z_D-z_B)+i(z_A-z_C)}{i[(z_D-z_B)+i(z_A-z_C)]} = -i$.',
        ],
        conclusion: 'Comme $|-i|=1$ et $-i \\in i\\mathbb{R}^*$, les segments sont perpendiculaires et de même longueur.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};
