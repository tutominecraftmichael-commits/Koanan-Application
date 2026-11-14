import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Situation & Définition',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce qu’une similitude directe du plan ? (p.1)',
    paragraphText:
      'En visitant une société de confection de pagnes, des élèves de Terminale C observent deux motifs identiques à l’échelle et tournés l’un par rapport à l’autre : une simple homothétie ne suffit pas lorsqu’il y a aussi rotation ! On appelle **similitude directe** toute **composée d’une homothétie et d’un déplacement** (translation ou rotation). Toute similitude directe est une **transformation du plan** (bijection). En particulier, tout déplacement ($k=1$) et toute homothétie ($\\theta=0$ ou $\\pi$) sont des similitudes directes.',
    formula: {
      name: 'Définition par composition',
      formula: 'S = h \\circ d \\qquad (h \\text{ homothétie, } d \\text{ déplacement})',
    },
    konanTip: 'Une **similitude indirecte** est la composée d’une homothétie et d’un antidéplacement (hors programme en Terminale C).',
    exercise: {
      id: 'tc_m_geo_l16_p01_q01',
      type: 'mcq',
      prompt: 'Comment définit-on une similitude directe du plan (p.1) ?',
      options: [
        'Toute composée d’une homothétie et d’un déplacement',
        'Toute composée d’une homothétie et d’un antidéplacement',
        'Toute application conservant uniquement les longueurs',
        'Uniquement une translation suivie d’une symétrie orthogonale',
      ],
      correctAnswerIndex: 0,
      explanation: 'Par définition, une similitude directe est la composée d’une homothétie et d’un déplacement (tout déplacement et toute homothétie en sont des cas particuliers).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Rapport et angle',
    stepTheme: 'violet',
    stepTitle: 'Rapport $k > 0$ et angle $\\theta \\in ]-\\pi ; \\pi]$ d’une similitude directe (p.1–2)',
    paragraphText:
      'Une transformation du plan est une similitude directe ssi elle conserve **le rapport des distances** et **les angles orientés**. Plus précisément, pour toute similitude directe $S$, il existe un unique réel **$k > 0$** (appelé **rapport** de $S$) et un réel **$\\theta \\in ]-\\pi ; \\pi]$** (appelé **angle** de $S$) tels que pour tous points distincts $M, N$ d’images $M’, N’$ par $S$ : $M’N’ = k\\,MN$ et $\\operatorname{Mes}(\\widehat{\\overrightarrow{MN}, \\overrightarrow{M’N’}}) = \\theta$.',
    formula: {
      name: 'Caractérisation par k et θ',
      formula: 'M’N’ = k\\,MN \\quad (k > 0) \\qquad ; \\qquad \\operatorname{Mes}(\\widehat{\\overrightarrow{MN}, \\overrightarrow{M’N’}}) = \\theta \\in ]-\\pi ; \\pi]',
    },
    exercise: {
      id: 'tc_m_geo_l16_p01_q02',
      type: 'mcq',
      prompt: 'Quels sont le rapport $k$ et l’angle $\\theta$ d’une homothétie de rapport $-3 < 0$ vue comme similitude directe (p.2) ?',
      options: [
        'Rapport $-3$ et angle $0$',
        'Rapport $3$ et angle $\\pi$',
        'Rapport $3$ et angle $0$',
        'Rapport $\\frac{1}{3}$ et angle $-\\pi$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le rapport d’une similitude directe est toujours positif ($k = -(-3) = 3$), et comme $\\overrightarrow{M’N’} = -3\\overrightarrow{MN}$ est de sens contraire à $\\overrightarrow{MN}$, l’angle vaut $\\pi$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation p.2',
    stepTheme: 'green',
    stepTitle: 'Calculer $k$ et $\\theta$ dans un triangle équilatéral direct $ABC$',
    paragraphText:
      'Soit $ABC$ un triangle équilatéral direct et $I$ le milieu de $[BC]$. On considère la similitude directe $s$ telle que $s(I) = B$ et $s(B) = A$. Pour déterminer son rapport $k$ et son angle $\\theta$, on applique directement la propriété au couple $(I, B)$ d’image $(B, A)$ : $k = \\frac{BA}{IB} = \\frac{2IB}{IB} = 2$, et $\\theta = \\operatorname{Mes}(\\widehat{\\overrightarrow{IB}, \\overrightarrow{BA}})$. Comme $\\overrightarrow{IB}$ est colinéaire de même sens à $\\overrightarrow{CB}$ et que le triangle $ABC$ est équilatéral direct ($(\\widehat{\\overrightarrow{BC}, \\overrightarrow{BA}}) = +\\frac{\\pi}{3}$), on obtient $\\theta = \\operatorname{Mes}(\\widehat{\\overrightarrow{CB}, \\overrightarrow{BA}}) = -\\pi + \\frac{\\pi}{3} = -\\frac{2\\pi}{3}$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Angle θ = Mes(IB⃗, BA⃗) = −2π/3 dans ABC équilatéral direct (p.2)',
      caption: 'En prolongeant [CB) au-delà de B, l’angle orienté de IB⃗ vers BA⃗ mesure −2π/3 (sens indirect).',
      svgContent: `<svg viewBox="0 0 300 155" width="285" height="148" xmlns="http://www.w3.org/2000/svg">
        <polygon points="85,125 205,125 145,22" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
        <line x1="175" y1="73.5" x2="225" y2="158" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4,3"/>
        <circle cx="85" cy="125" r="3.5" fill="#1e293b"/><text x="69" y="129" font-size="11" font-weight="bold" fill="#1e293b">A</text>
        <circle cx="205" cy="125" r="3.5" fill="#1e293b"/><text x="213" y="125" font-size="11" font-weight="bold" fill="#1e293b">B</text>
        <circle cx="145" cy="22" r="3.5" fill="#1e293b"/><text x="151" y="25" font-size="11" font-weight="bold" fill="#1e293b">C</text>
        <circle cx="175" cy="73.5" r="3" fill="#2563eb"/><text x="182" y="73" font-size="11" font-weight="bold" fill="#2563eb">I</text>
        <path d="M 218 147 A 25 25 0 0 1 180 125" fill="none" stroke="#dc2626" stroke-width="2"/>
        <text x="174" y="148" font-size="11" font-weight="bold" fill="#dc2626">−2π/3</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l16_p01_q03',
      type: 'mcq',
      prompt: 'Dans le carré direct $ABCD$ de centre $O$ (Ex. 2 p.22), on considère la similitude directe $s$ telle que $s(D) = O$ et $s(C) = B$. Quels sont son rapport et son angle ?',
      options: [
        'Rapport $\\frac{\\sqrt{2}}{2}$ et angle $-\\frac{\\pi}{4}$',
        'Rapport $\\sqrt{2}$ et angle $\\frac{\\pi}{4}$',
        'Rapport $\\frac{\\sqrt{2}}{2}$ et angle $\\frac{3\\pi}{4}$',
        'Rapport $1$ et angle $-\\frac{\\pi}{2}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$k = \\frac{OB}{DC} = \\frac{a\\sqrt{2}/2}{a} = \\frac{\\sqrt{2}}{2}$. Dans un carré direct ($A \\to B \\to C \\to D$), $\\overrightarrow{DC} = \\overrightarrow{AB}$ (angle $0$) et $\\overrightarrow{OB} = \\frac{1}{2}\\overrightarrow{DB}$ ($-45^\\circ$ par rapport à $\\overrightarrow{DC}$ : vérifions $D(0,1), C(1,1), B(1,0), O(0.5,0.5)$ $\\implies \\overrightarrow{DC}=(1,0)$ et $\\overrightarrow{OB}=(0.5,-0.5)$), donc $\\theta = -\\frac{\\pi}{4}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Composée & Réciproque',
    stepTheme: 'violet',
    stepTitle: 'Composée de deux similitudes directes et réciproque (p.3)',
    paragraphText:
      'Dans le plan orienté : la **composée** de deux similitudes directes de rapports $k_1, k_2$ et d’angles $\\theta_1, \\theta_2$ est une similitude directe de **rapport $k_1 k_2$** et d’**angle $\\theta_1 + \\theta_2$** (modulo $2\\pi$). La **réciproque** $s^{-1}$ d’une similitude directe de rapport $k$ et d’angle $\\theta$ est une similitude directe de **rapport $\\frac{1}{k}$** et d’**angle $-\\theta$**. Attention : en général, $g \\circ f$ et $f \\circ g$ ont le même rapport et le même angle, mais **pas le même centre** !',
    formula: {
      name: 'Calcul sur les rapports et les angles',
      formula: 's_1 \\circ s_2 : (k_1 k_2,\\; \\theta_1 + \\theta_2) \\qquad ; \\qquad s^{-1} : \\left(\\frac{1}{k},\\; -\\theta\\right)',
    },
    exercise: {
      id: 'tc_m_geo_l16_p01_q04',
      type: 'mcq',
      prompt: 'Soit $f$ une similitude directe de rapport $3$ et d’angle $\\frac{\\pi}{2}$, et $g$ une similitude directe de rapport $\\frac{\\sqrt{2}}{2}$ et d’angle $-\\frac{2\\pi}{3}$ (p.3). Que vaut le rapport et l’angle de $f \\circ g$ et de $g^{-1}$ ?',
      options: [
        '$f \\circ g : (\\frac{3\\sqrt{2}}{2}, -\\frac{\\pi}{6})$ et $g^{-1} : (\\sqrt{2}, \\frac{2\\pi}{3})$',
        '$f \\circ g : (\\frac{3\\sqrt{2}}{2}, \\frac{\\pi}{6})$ et $g^{-1} : (\\frac{\\sqrt{2}}{2}, \\frac{2\\pi}{3})$',
        '$f \\circ g : (3+\\frac{\\sqrt{2}}{2}, -\\frac{\\pi}{6})$ et $g^{-1} : (-\\sqrt{2}, -\\frac{2\\pi}{3})$',
        '$f \\circ g$ et $g \\circ f$ ont obligatoirement le même centre',
      ],
      correctAnswerIndex: 0,
      explanation: 'Rapport de $f \\circ g$ : $3 \\times \\frac{\\sqrt{2}}{2} = \\frac{3\\sqrt{2}}{2}$, angle : $\\frac{\\pi}{2} - \\frac{2\\pi}{3} = -\\frac{\\pi}{6}$. Pour $g^{-1}$ : rapport $\\frac{1}{\\sqrt{2}/2} = \\sqrt{2}$ et angle $+\\frac{2\\pi}{3}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Conservations géométriques',
    stepTheme: 'violet',
    stepTitle: 'Ce que toute similitude directe conserve et ce qu’elle multiplie (p.3–4)',
    paragraphText:
      'Toute similitude directe de rapport $k$ **conserve** : l’alignement, le parallélisme, l’orthogonalité, le contact (tangence), le **barycentre**, les **angles orientés** et les rapports de distances ($\\frac{A’B’}{AB} = \\frac{C’D’}{CD}$). Elle **multiplie** les longueurs (et rayons de cercles) par **$k$**, et les **aires par $k^2$**. Elle transforme droite en droite, demi-droite en demi-droite, segment en segment et cercle de rayon $r$ en cercle de rayon $kr$.',
    exercise: {
      id: 'tc_m_geo_l16_p01_q05',
      type: 'mcq',
      prompt: 'Si une similitude directe de rapport $k = 3$ transforme un triangle d’aire $4\\;\\text{cm}^2$, quelle est l’aire de son image ?',
      options: ['$12\\;\\text{cm}^2$', '$36\\;\\text{cm}^2$', '$\\frac{4}{3}\\;\\text{cm}^2$', '$6\\;\\text{cm}^2$'],
      correctAnswerIndex: 1,
      explanation: 'Une similitude directe de rapport $k$ multiplie les aires par $k^2$ : $3^2 \\times 4 = 9 \\times 4 = 36\\;\\text{cm}^2$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Conservation du barycentre',
    stepTheme: 'green',
    stepTitle: 'Transporter une relation vectorielle via le barycentre (p.4)',
    paragraphText:
      'Dans l’exercice de fixation p.4, on donne $\\overrightarrow{AD} = 2\\overrightarrow{AB} - 5\\overrightarrow{CD}$ et une similitude directe $s$ envoyant $A, B, C, D$ sur $A’, B’, C’, D’$. En introduisant $A$ dans $\\overrightarrow{CD} = \\overrightarrow{AD} - \\overrightarrow{AC}$, on obtient $-6\\overrightarrow{AD} + 2\\overrightarrow{AB} + 5\\overrightarrow{AC} = \\vec{0}$, soit $A = \\operatorname{bar}\\{(D, -6), (B, 2), (C, 5)\\}$ (somme $-6+2+5 = 1 \\neq 0$). Par conservation du barycentre, $A’ = \\operatorname{bar}\\{(D’, -6), (B’, 2), (C’, 5)\\}$, d’où immédiatement $\\overrightarrow{A’D’} = 2\\overrightarrow{A’B’} - 5\\overrightarrow{C’D’}$ !',
    exercise: {
      id: 'tc_m_geo_l16_p01_q06',
      type: 'mcq',
      prompt: 'Si $s$ est une similitude directe de rapport $k$ transformant $A, B, C$ en $A’, B’, C’$, à quoi est égal le produit scalaire $\\overrightarrow{A’B’} \\cdot \\overrightarrow{A’C’}$ (Ex. 4 p.22) ?',
      options: [
        '$k\\,\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$',
        '$k^2\\,\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$',
        '$\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$',
        '$-k^2\\,\\overrightarrow{AB} \\cdot \\overrightarrow{AC}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\overrightarrow{A’B’}\\cdot\\overrightarrow{A’C’} = A’B’\\cdot A’C’\\cos(\\widehat{\\overrightarrow{A’B’},\\overrightarrow{A’C’}}) = (kAB)(kAC)\\cos(\\widehat{\\overrightarrow{AB},\\overrightarrow{AC}}) = k^2\\,\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Non-commutativité',
    stepTheme: 'orange',
    stepTitle: 'Attention : $f \\circ g$ et $g \\circ f$ n’ont en général pas le même centre',
    paragraphText:
      'Même si $f \\circ g$ et $g \\circ f$ ont exactement le même rapport $k_1 k_2$ et le même angle $\\theta_1 + \\theta_2$, la composition de deux similitudes directes de centres différents n’est **pas commutative** ($f \\circ g \\neq g \\circ f$). Les deux seules situations où elles commutent toujours sont : quand elles ont le **même centre** $\\Omega$, ou quand ce sont deux translations.',
    exercise: {
      id: 'tc_m_geo_l16_p01_q07',
      type: 'mcq',
      prompt: 'Parmi ces affirmations sur $f \\circ g$ et $g \\circ f$ (où $f, g$ sont deux similitudes directes), laquelle est vraie en général (p.3) ?',
      options: [
        '$f \\circ g$ et $g \\circ f$ ont le même rapport et le même angle, mais pas nécessairement le même centre',
        '$f \\circ g = g \\circ f$ dès que $f$ et $g$ ont le même rapport',
        'Le centre de $f \\circ g$ est toujours le milieu des centres de $f$ et $g$',
        '$f \\circ g$ a pour angle $\\theta_1 - \\theta_2$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le rapport produit $k_1 k_2$ et la somme d’angles $\\theta_1 + \\theta_2$ commutent, mais les centres diffèrent en général si ceux de $f$ et $g$ sont distincts.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Forme réduite',
    stepTheme: 'violet',
    stepTitle: 'Centre invariant et décomposition canonique $h \\circ r = r \\circ h$ (p.4–5)',
    paragraphText:
      'Toute similitude directe du plan qui n’est **pas une translation** admet un **unique point invariant**, appelé son **centre $\\Omega$**. Plus précisément, toute similitude directe autre que l’identité, de rapport $k$ et d’angle $\\theta$, est soit une translation ($k=1, \\theta=0$), soit la composée commutable d’une rotation et d’une homothétie de **même centre $\\Omega$** : **$S = h_{(\\Omega,k)} \\circ r_{(\\Omega,\\theta)} = r_{(\\Omega,\\theta)} \\circ h_{(\\Omega,k)}$**. Cette écriture unique s’appelle la **forme réduite** (ou décomposition canonique), notée $s_{(\\Omega, k, \\theta)}$.',
    formula: {
      name: 'Décomposition canonique d’une similitude directe',
      formula: 'S = s_{(\\Omega, k, \\theta)} = h_{(\\Omega, k)} \\circ r_{(\\Omega, \\theta)} = r_{(\\Omega, \\theta)} \\circ h_{(\\Omega, k)}',
    },
    visualSchema: {
      type: 'geometry_svg',
      title: 'Construction géométrique de M’ par la forme réduite (p.5)',
      caption: 'Chemin M → M₁ (rotation d’angle θ) → M’ (homothétie de rapport k) ou M → M₂ (homothétie) → M’ (rotation).',
      svgContent: `<svg viewBox="0 0 320 155" width="305" height="148" xmlns="http://www.w3.org/2000/svg">
        <line x1="35" y1="125" x2="275" y2="125" stroke="#334155" stroke-width="1.5"/>
        <line x1="35" y1="125" x2="235" y2="20" stroke="#2563eb" stroke-width="1.8"/>
        <circle cx="35" cy="125" r="3.5" fill="#1e293b"/><text x="20" y="130" font-size="11" font-weight="bold" fill="#1e293b">A</text>
        <circle cx="120" cy="125" r="3.5" fill="#16a34a"/><text x="115" y="142" font-size="11" font-weight="bold" fill="#16a34a">M</text>
        <circle cx="205" cy="125" r="3.5" fill="#7c3aed"/><text x="201" y="142" font-size="11" font-weight="bold" fill="#7c3aed">M₂</text>
        <path d="M 120 125 A 85 85 0 0 0 110 86" fill="none" stroke="#16a34a" stroke-width="1.4" stroke-dasharray="4,3"/>
        <circle cx="110" cy="86" r="3.5" fill="#16a34a"/><text x="90" y="83" font-size="11" font-weight="bold" fill="#16a34a">M₁</text>
        <path d="M 205 125 A 170 170 0 0 0 185 46" fill="none" stroke="#7c3aed" stroke-width="1.4" stroke-dasharray="4,3"/>
        <circle cx="185" cy="46" r="3.8" fill="#dc2626"/><text x="192" y="42" font-size="11" font-weight="bold" fill="#dc2626">M’</text>
        <text x="68" y="119" font-size="11" font-weight="bold" fill="#dc2626">θ</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l16_p02_q01',
      type: 'mcq',
      prompt: 'Quelle est la décomposition canonique de la similitude directe $S_{(A,\\, 2,\\, -\\frac{\\pi}{3})}$ (p.5) ?',
      options: [
        '$r_{(A, -\\frac{\\pi}{3})} \\circ h_{(A, 2)} = h_{(A, 2)} \\circ r_{(A, -\\frac{\\pi}{3})}$',
        '$t_{\\vec{u}} \\circ h_{(A, 2)}$ uniquement',
        '$r_{(A, \\frac{\\pi}{3})} \\circ h_{(A, \\frac{1}{2})}$',
        'Elle ne commute pas : seul $h \\circ r$ convient',
      ],
      correctAnswerIndex: 0,
      explanation: 'Rotation et homothétie de même centre $A$ commutent toujours : $r_{(A, -\\frac{\\pi}{3})} \\circ h_{(A, 2)} = h_{(A, 2)} \\circ r_{(A, -\\frac{\\pi}{3})}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Expression analytique',
    stepTheme: 'green',
    stepTitle: 'Passer des coordonnées $(x’, y’)$ à l’écriture complexe $z’ = az + b$ (p.6)',
    paragraphText:
      'On donne l’application $s : \\begin{cases} x’ = x + y - 3 \\\\ y’ = -x + y + 2 \\end{cases}$ (p.6). Pour prouver que $s$ est une similitude directe et trouver son écriture complexe, on forme $z’ = x’ + iy’ = (x + y - 3) + i(-x + y + 2)$. On regroupe les termes en $x$ et en $y$ : $z’ = (1 - i)x + (1 + i)y - 3 + 2i$. Astuce : dans le bloc en $y$, on factorise $i$ en remarquant que $1 + i = i(1 - i)$ ! On obtient ainsi $z’ = (1 - i)x + (1 - i)iy - 3 + 2i = (1 - i)(x + iy) - 3 + 2i = (1 - i)z - 3 + 2i$, de la forme $az + b$ avec $a = 1 - i \\in \\mathbb{C}^*$.',
    exercise: {
      id: 'tc_m_geo_l16_p02_q02',
      type: 'mcq',
      prompt: 'À l’aide de l’expression analytique $\\begin{cases} x’ = x + y - 3 \\\\ y’ = -x + y + 2 \\end{cases}$ (p.6), quelle est l’écriture complexe de $s$ ?',
      options: [
        '$z’ = (1 + i)z - 3 + 2i$',
        '$z’ = (1 - i)z - 3 + 2i$',
        '$z’ = (1 - i)\\bar{z} - 3 + 2i$',
        '$z’ = (1 - i)z + 3 - 2i$',
      ],
      correctAnswerIndex: 1,
      explanation: '$z’ = (1 - i)x + (1 + i)y - 3 + 2i = (1 - i)(x + iy) - 3 + 2i = (1 - i)z - 3 + 2i$ car $(1 - i)i = i + 1$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Tableau complexe',
    stepTheme: 'violet',
    stepTitle: 'Éléments caractéristiques depuis $z’ = az + b$ et inversement (p.6–7)',
    paragraphText:
      'Pour toute similitude directe d’écriture complexe $z’ = az + b$ ($a \\in \\mathbb{C}^*, b \\in \\mathbb{C}$) : si $a = 1$, c’est une translation de vecteur $b$ ; si $a \\neq 1$, son centre a pour affixe $z_\\Omega = \\frac{b}{1 - a}$, son rapport vaut $|a|$ et son angle vaut $\\operatorname{Arg}(a)$ (homothétie si $a \\in \\mathbb{R}^*\\setminus\\{1\\}$, rotation si $|a|=1$). Inversement, la similitude de centre $A(z_A)$, de rapport $k$ et d’angle $\\theta$ s’écrit $z’ = ke^{i\\theta}(z - z_A) + z_A$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Particularisation de z’ = az + b selon a (p.6)',
      caption: 'Rappel de synthèse (a ∈ ℂ*, b ∈ ℂ).',
      tableData: {
        headers: ['Valeur de a', 'Nature de S', 'Centre / Vecteur', 'Rapport & Angle'],
        rows: [
          ['$a = 1$', 'Translation', 'Vecteur $\\vec{u}(b)$', '$k = 1$, $\\theta = 0$'],
          ['$a \\in \\mathbb{R}^* \\setminus \\{1\\}$', 'Homothétie', 'Centre $\\Omega\\left(\\frac{b}{1-a}\\right)$', 'Rapport $a$ ($k=|a|$, $\\theta=0$ ou $\\pi$)'],
          ['$a \\in \\mathbb{C}\\setminus\\mathbb{R},\\; |a|=1$', 'Rotation', 'Centre $\\Omega\\left(\\frac{b}{1-a}\\right)$', '$k = 1$, $\\theta = \\operatorname{Arg}(a)$'],
          ['$a \\in \\mathbb{C}\\setminus\\mathbb{R},\\; |a|\\neq 1$', 'Similitude directe', 'Centre $\\Omega\\left(\\frac{b}{1-a}\\right)$', '$k = |a|$, $\\theta = \\operatorname{Arg}(a)$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l16_p02_q03',
      type: 'mcq',
      prompt: 'Quels sont la nature et les éléments caractéristiques de $z’ = -4z + \\frac{15}{2} - \\frac{5}{2}i$ (Ex. 3d p.22) ?',
      options: [
        'L’homothétie de centre $\\Omega\\left(\\frac{3}{2} - \\frac{1}{2}i\\right)$ et de rapport $-4$ (similitude de rapport $4$ et d’angle $\\pi$)',
        'La rotation de centre $\\frac{3}{2} - \\frac{1}{2}i$ et d’angle $\\pi$',
        'La translation de vecteur $\\frac{15}{2} - \\frac{5}{2}i$',
        'L’homothétie de centre $-\\frac{5}{2} + \\frac{5}{6}i$ et de rapport $4$',
      ],
      correctAnswerIndex: 0,
      explanation: '$a = -4 \\in \\mathbb{R}^*\\setminus\\{1\\}$ : c’est une homothétie de rapport $-4$ et de centre $z_\\Omega = \\frac{\\frac{15}{2}-\\frac{5}{2}i}{1-(-4)} = \\frac{\\frac{15}{2}-\\frac{5}{2}i}{5} = \\frac{3}{2} - \\frac{1}{2}i$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Triangles ΩMM’',
    stepTheme: 'violet',
    stepTitle: 'Triangles remarquables $\\Omega MM’$ associés aux valeurs de $(k, \\theta)$ (p.8–9)',
    paragraphText:
      'Si $S$ est une similitude directe de centre $\\Omega$, de rapport $k$ et d’angle $\\theta$, alors pour tout $M \\neq \\Omega$ d’image $M’$, tous les triangles $\\Omega MM’$ sont de **même nature** et de **même sens**, avec sommet commun $\\Omega$ ! Pour trois couples classiques de $(\\theta, k)$, $\\Omega MM’$ est un triangle rectangle très utile pour identifier géométriquement $S$ (en prenant éventuellement $N$, symétrique de $\\Omega$ par rapport à $M$, pour faire apparaître un triangle équilatéral $\\Omega N M’$).',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau des triangles ΩMM’ remarquables (p.8–9)',
      caption: 'Équivalence entre valeurs de (θ, k) et géométrie du triangle ΩMM’.',
      tableData: {
        headers: ['Angle θ', 'Rapport k', 'Nature du triangle ΩMM’'],
        rows: [
          ['$\\frac{\\pi}{4}$ ou $-\\frac{\\pi}{4}$', '$\\frac{\\sqrt{2}}{2}$ ou $\\sqrt{2}$', 'Rectangle isocèle en $M’$ (si $k=\\frac{\\sqrt{2}}{2}$) ou en $M$ (si $k=\\sqrt{2}$)'],
          ['$\\frac{\\pi}{3}$ ou $-\\frac{\\pi}{3}$', '$\\frac{1}{2}$ ou $2$', 'Demi-triangle équilatéral, rectangle en $M’$ (si $k=\\frac{1}{2}$) ou en $M$ (si $k=2$)'],
          ['$\\frac{\\pi}{6}$ ou $-\\frac{\\pi}{6}$', '$\\frac{\\sqrt{3}}{2}$ ou $\\frac{2\\sqrt{3}}{3}$', 'Demi-triangle équilatéral, rectangle en $M’$ (si $k=\\frac{\\sqrt{3}}{2}$) ou en $M$ (si $k=\\frac{2\\sqrt{3}}{3}$)'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l16_p02_q04',
      type: 'mcq',
      prompt: 'Sur la figure de la page 7 ($ABCD, AEFG, AHIJ$ carrés de sens direct imbriqués au sommet $A$), $s$ est la similitude directe de centre $A$, de rapport $\\sqrt{2}$ et d’angle $\\frac{\\pi}{4}$. Quelles sont les images de $H, E$ et $B$ par $s$ (p.7–8) ?',
      options: [
        '$s(H)=J$, $s(E)=G$, $s(B)=D$',
        '$s(H)=I$, $s(E)=F$, $s(B)=C$',
        '$s(H)=E$, $s(E)=B$, $s(B)=A$',
        '$s(H)=I$, $s(E)=G$, $s(B)=C$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Chaque triangle $AHI$, $AEF$, $ABC$ est rectangle isocèle direct en $H, E, B$ de sommet $A$ : on a $AI = \\sqrt{2}AH$ et $(\\widehat{\\overrightarrow{AH}, \\overrightarrow{AI}}) = \\frac{\\pi}{4}$, donc $s(H)=I$, $s(E)=F$, $s(B)=C$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation p.9',
    stepTheme: 'green',
    stepTitle: 'Demi-triangles équilatéraux et similitude de rapport $2$, angle $\\frac{\\pi}{3}$',
    paragraphText:
      'Dans le plan orienté, $ABC$ et $ADE$ sont des triangles équilatéraux directs, $I$ est le milieu de $[AB]$ et $J$ le milieu de $[AD]$. Soit $s$ la similitude directe de centre $A$, de rapport $2$ et d’angle $\\frac{\\pi}{3}$. Comme $I$ est le milieu du côté $[AB]$, la hauteur $[CI]$ forme un demi-triangle équilatéral $AIC$ rectangle en $I$, de sens direct, avec $AC = AB = 2AI$ et $(\\widehat{\\overrightarrow{AI}, \\overrightarrow{AC}}) = \\frac{\\pi}{3}$, donc **$s(I) = C$** ! De même, dans le demi-triangle équilatéral $AJE$ rectangle en $J$, $AE = 2AJ$ et $(\\widehat{\\overrightarrow{AJ}, \\overrightarrow{AE}}) = \\frac{\\pi}{3}$, donc **$s(J) = E$**.',
    exercise: {
      id: 'tc_m_geo_l16_p02_q05',
      type: 'mcq',
      prompt: 'Avec $ABC$ équilatéral direct et $I$ milieu de $[AB]$ (p.9), pourquoi la similitude directe de centre $A$, rapport $2$ et angle $\\frac{\\pi}{3}$ vérifie-t-elle $s(I) = C$ ?',
      options: [
        'Car $AC = 2AI$ et $\\operatorname{Mes}(\\widehat{\\overrightarrow{AI}, \\overrightarrow{AC}}) = \\frac{\\pi}{3}$ (demi-triangle équilatéral direct)',
        'Car $CI = 2AI$ et $(\\widehat{\\overrightarrow{AI}, \\overrightarrow{AC}}) = \\frac{\\pi}{6}$',
        'Car $I$ est le centre de gravité de $ABC$',
        'Car $s$ est une homothétie de rapport $2$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le triangle $AIC$ est rectangle en $I$ de sens direct, avec $AI = \\frac{1}{2}AB = \\frac{1}{2}AC \\implies AC = 2AI$ et angle au sommet $A$ égal à $+\\frac{\\pi}{3}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 6 p.23',
    stepTheme: 'blue',
    stepTitle: 'Calculer une écriture complexe depuis $(A, k, \\theta)$',
    paragraphText:
      'Calculons l’écriture complexe de $s_1$ de centre $A(3 - 2i)$, rapport $2\\sqrt{2}$ et angle $-\\frac{3\\pi}{4}$ (Ex. 6a p.23). On utilise $z’ = ke^{i\\theta}(z - z_A) + z_A$. Or $2\\sqrt{2}e^{-i\\frac{3\\pi}{4}} = 2\\sqrt{2}\\left(-\\frac{\\sqrt{2}}{2} - i\\frac{\\sqrt{2}}{2}\\right) = -2 - 2i$. Donc $z’ = (-2 - 2i)(z - 3 + 2i) + 3 - 2i = (-2 - 2i)z - (-2 - 2i)(3 - 2i) + 3 - 2i$. Comme $(-2-2i)(3-2i) = -6 + 4i - 6i - 4 = -10 - 2i$, on obtient $z’ = (-2 - 2i)z + 10 + 2i + 3 - 2i = (-2 - 2i)z + 13$.',
    exercise: {
      id: 'tc_m_geo_l16_p02_q06',
      type: 'mcq',
      prompt: 'Quelle est l’écriture complexe de la similitude $s_1$ de centre $A(3 - 2i)$, de rapport $2\\sqrt{2}$ et d’angle $-\\frac{3\\pi}{4}$ (Ex. 6a p.23) ?',
      options: [
        '$z’ = (-2 - 2i)z + 13$',
        '$z’ = (-2 + 2i)z + 3 - 2i$',
        '$z’ = (2 + 2i)z - 7$',
        '$z’ = (-2 - 2i)z - 7 - 4i$',
      ],
      correctAnswerIndex: 0,
      explanation: '$a = 2\\sqrt{2}e^{-i\\frac{3\\pi}{4}} = -2 - 2i$, puis $b = (1 - a)z_A = (3 + 2i)(3 - 2i) = 9 + 4 = 13$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Symétrie de sens',
    stepTheme: 'orange',
    stepTitle: 'Bien repérer quel angle de $\\Omega MM’$ est droit selon que $k < 1$ ou $k > 1$',
    paragraphText:
      'Pour les triangles rectangles remarquables $\\Omega MM’$ (comme ceux de rapport $\\frac{1}{2}$ ou $2$ avec angle $\\pm\\frac{\\pi}{3}$), ne confonds pas le sommet de l’angle droit ! Quand **$k > 1$** ($\\cos\\theta = \\frac{1}{k}$), $\\Omega M’ > \\Omega M$, donc l’hypoténuse est $[\\Omega M’]$ et l’angle droit est en **$M$**. Quand **$k < 1$** ($k = \\cos\\theta$), l’hypoténuse est $[\\Omega M]$ et l’angle droit est en **$M’$**.',
    exercise: {
      id: 'tc_m_geo_l16_p02_q07',
      type: 'mcq',
      prompt: 'Pour une similitude directe de centre $\\Omega$, de rapport $k = \\frac{\\sqrt{3}}{2}$ et d’angle $\\frac{\\pi}{6}$, en quel point le demi-triangle équilatéral $\\Omega MM’$ est-il rectangle ?',
      options: [
        'En $\\Omega$',
        'En $M$',
        'En $M’$ (car $\\Omega M’ = \\frac{\\sqrt{3}}{2}\\Omega M = \\Omega M\\cos\\frac{\\pi}{6}$)',
        'Il est équilatéral, donc sans angle droit',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le côté adjacent à l’angle $\\frac{\\pi}{6}$ en $\\Omega$ vaut $\\Omega M\\cos(\\frac{\\pi}{6}) = \\frac{\\sqrt{3}}{2}\\Omega M = \\Omega M’$ : l’hypoténuse est $[\\Omega M]$, donc l’angle droit est en $M’$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Unicité géométrique',
    stepTheme: 'violet',
    stepTitle: 'Trois façons géométriques de déterminer une similitude directe (p.9–12)',
    paragraphText:
      'En géométrie pure (sans affixes), une similitude directe est déterminée de façon unique dans chacun des cas suivants : (1) par son **centre $A$**, un point $M \\neq A$ et son image $M’ \\neq A$ ; (2) par **deux points distincts $A \\neq B$ et leurs images distinctes $C \\neq D$** (en particulier par $A \\mapsto B$ et $B \\mapsto C$) ; (3) par deux **triangles $ABC$ et $DEF$ de même sens directement semblables** (c’est-à-dire $\\frac{DE}{AB}=\\frac{EF}{BC}=\\frac{DF}{AC}$, ou deux côtés proportionnels encadrant le même angle orienté).',
    formula: {
      name: 'Triangles directement semblables ABC et DEF',
      formula: '\\text{Même sens et } \\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} \\implies \\exists! \\text{ similitude directe } : A\\mapsto D,\\; B\\mapsto E,\\; C\\mapsto F',
    },
    exercise: {
      id: 'tc_m_geo_l16_p03_q01',
      type: 'mcq',
      prompt: 'On donne les triangles $ABC$ (côtés $1{,}5 ; 2 ; 1{,}75$) et $DEF$ (côtés $3 ; 4 ; 3{,}5$) de même sens (p.12). Que peut-on conclure ?',
      options: [
        'Ils sont isométriques',
        'Ils sont directement semblables via une unique similitude directe de rapport $2$ envoyant $A, B, C$ sur $D, E, F$',
        'Ils sont indirectement semblables',
        'Ils ne sont pas semblables car les angles ne sont pas donnés',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{DE}{AB} = \\frac{4}{2} = 2$, $\\frac{EF}{BC} = \\frac{3{,}5}{1{,}75} = 2$ et $\\frac{DF}{AC} = \\frac{3}{1{,}5} = 2$, et ils sont de même sens : il existe une unique similitude directe de rapport $2$ envoyant $A, B, C$ sur $D, E, F$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation p.10',
    stepTheme: 'green',
    stepTitle: 'Trouver le centre et l’image dans deux carrés accolés $ABCD$ et $DCEF$',
    paragraphText:
      'Dans le plan orienté, on accole deux carrés directs $ABCD$ et $DCEF$ (en partageant le côté $[DC]$), et $O$ est le centre de $ABCD$. Soit $s$ la similitude directe telle que $s(B) = C$ et $s(O) = D$. Comment trouver son centre sans calcul ? On remarque que les triangles $ABC$ (rectangle isocèle en $B$) et $AOD$ (rectangle isocèle en $O$) sont tous deux **directs** et ont le sommet commun **$A$** : cela prouve que la similitude de centre $A$, rapport $\\sqrt{2}$ et angle $+\\frac{\\pi}{4}$ envoie $B$ sur $C$ et $O$ sur $D$, donc le centre de $s$ est **$A$** ! Pour l’image de $C$, le triangle $ACF$ est rectangle isocèle direct en $C$ ($AC = \\sqrt{2}a$ et $CF = \\sqrt{2}a$, angle $90^\\circ$ en $C$? Oui, $AF = 2a = \\sqrt{2}AC$ et $(\\widehat{\\overrightarrow{AC}, \\overrightarrow{AF}}) = \\frac{\\pi}{4}$), donc **$s(C) = F$**.',
    exercise: {
      id: 'tc_m_geo_l16_p03_q02',
      type: 'mcq',
      prompt: 'Dans la configuration des deux carrés directs accolés $ABCD$ et $DCEF$ (p.10, $s(B)=C$ et $s(O)=D$), que valent le centre de $s$ et l’image $s(C)$ ?',
      options: [
        'Centre $D$ et $s(C) = E$',
        'Centre $A$ et $s(C) = F$',
        'Centre $O$ et $s(C) = E$',
        'Centre $A$ et $s(C) = E$',
      ],
      correctAnswerIndex: 1,
      explanation: '$ABC$ et $AOD$ étant rectangles isocèles directs en $B$ et $O$ de sommet commun $A$, $s$ a pour centre $A$, rapport $\\sqrt{2}$, angle $\\frac{\\pi}{4}$. Comme $ACF$ est rectangle isocèle direct en $C$ de sommet $A$, $s(C) = F$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Construction centre Ω',
    stepTheme: 'green',
    stepTitle: 'Construire géométriquement le centre $\\Omega$ quand $s(A)=C$ et $s(B)=D$ (p.11)',
    paragraphText:
      'On donne quatre points $A, B, C, D$ tels que $AB \\neq CD$ et $(AB)$ non parallèle à $(CD)$ (donc $s$ n’est ni un déplacement, ni une homothétie), et $s(A)=C, s(B)=D$. Soit **$K$ le point d’intersection des droites $(AB)$ et $(CD)$** (si $(AB) \\parallel (CD)$, on utilise une droite auxiliaire ou des milieux). Par conservation de l’angle $\\theta$ de $s$, on a $\\theta = (\\widehat{\\overrightarrow{AB}, \\overrightarrow{CD}}) = (\\widehat{\\overrightarrow{KA}, \\overrightarrow{KC}}) = (\\widehat{\\overrightarrow{KB}, \\overrightarrow{KD}})$ (modulo $\\pi$ en droites). Or le centre $\\Omega$ vérifie aussi $(\\widehat{\\overrightarrow{\\Omega A}, \\overrightarrow{\\Omega C}}) = \\theta$ et $(\\widehat{\\overrightarrow{\\Omega B}, \\overrightarrow{\\Omega D}}) = \\theta$ ! Donc $\\Omega$ appartient à la fois au cercle $(C_1)$ circonscrit à $KAC$ et au cercle $(C_2)$ circonscrit à $KBD$ : **$\\Omega$ est le second point d’intersection de $(C_1)$ et $(C_2)$, distinct de $K$** !',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Construction du centre Ω par deux cercles sécants en K et Ω (p.11)',
      caption: 'K = (AB) ∩ (CD) ; Ω est l’intersection des cercles (C₁) passant par K, A, C et (C₂) passant par K, B, D, autre que K.',
      svgContent: `<svg viewBox="0 0 320 165" width="305" height="156" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="88" r="46" fill="none" stroke="#2563eb" stroke-width="1.8"/>
        <circle cx="172" cy="82" r="56" fill="none" stroke="#dc2626" stroke-width="1.8"/>
        <line x1="25" y1="115" x2="295" y2="115" stroke="#334155" stroke-width="1.5"/>
        <line x1="40" y1="138" x2="270" y2="28" stroke="#334155" stroke-width="1.5"/>
        <circle cx="88" cy="115" r="3.5" fill="#1e293b"/><text x="76" y="110" font-size="11" font-weight="bold" fill="#1e293b">K</text>
        <circle cx="164" cy="115" r="3.2" fill="#2563eb"/><text x="163" y="129" font-size="11" font-weight="bold" fill="#2563eb">A</text>
        <circle cx="228" cy="115" r="3.2" fill="#dc2626"/><text x="232" y="128" font-size="11" font-weight="bold" fill="#dc2626">B</text>
        <circle cx="152" cy="84" r="3.2" fill="#2563eb"/><text x="157" y="91" font-size="11" font-weight="bold" fill="#2563eb">C</text>
        <circle cx="215" cy="54" r="3.2" fill="#dc2626"/><text x="219" y="50" font-size="11" font-weight="bold" fill="#dc2626">D</text>
        <circle cx="122" cy="43" r="4" fill="#16a34a"/><text x="108" y="37" font-size="12" font-weight="bold" fill="#16a34a">Ω</text>
        <text x="115" y="149" font-size="10" font-weight="bold" fill="#2563eb">(C₁)</text>
        <text x="172" y="21" font-size="10" font-weight="bold" fill="#dc2626">(C₂)</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l16_p03_q03',
      type: 'mcq',
      prompt: 'Dans la méthode géométrique pour construire le centre $\\Omega$ d’une similitude directe $s$ telle que $s(A)=C$ et $s(B)=D$ (p.11), quels deux cercles trace-t-on à l’aide de $K = (AB) \\cap (CD)$ ?',
      options: [
        'Les cercles $(K, KA)$ et $(K, KB)$',
        'Les cercles circonscrits aux triangles $KAC$ et $KBD$, dont l’intersection autre que $K$ est $\\Omega$',
        'Les cercles de diamètres $[AB]$ et $[CD]$',
        'Les cercles circonscrits à $ABC$ et $BCD$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par cocyclicité via l’angle orienté $\\theta$, $\\Omega$ appartient au cercle circonscrit à $K, A, C$ et au cercle circonscrit à $K, B, D$. Le point d’intersection distinct de $K$ est $\\Omega$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation p.13',
    stepTheme: 'green',
    stepTitle: 'Construire le centre $K$ depuis $(k, \\theta, s(A)=B)$ via deux lieux (p.13–14)',
    paragraphText:
      'On donne $AB = 6$ et la similitude directe $s$ de rapport $4$, d’angle $\\frac{\\pi}{4}$ telle que $s(A) = B$ (p.13–14). Pour placer son centre $K$, on écrit la double équivalence de $s(A) = B$ : $\\begin{cases} \\frac{KB}{KA} = 4 \\\\ \\operatorname{Mes}(\\widehat{\\overrightarrow{KA}, \\overrightarrow{KB}}) = \\frac{\\pi}{4} \\end{cases}$. Le point $K$ se trouve donc à l’intersection de : (1) l’**arc capable $(E_1)$** du segment $[AB]$ d’angle $+\\frac{\\pi}{4}$ (arc de cercle situé « au-dessus » de $(AB)$, privé de $A$ et $B$) ; (2) le **cercle d’Apollonius $(E_2)$** de diamètre $[IJ]$ où $I = \\operatorname{bar}\\{(A,4),(B,1)\\}$ et $J = \\operatorname{bar}\\{(A,-4),(B,1)\\}$, d’où $\\overrightarrow{AI} = \\frac{1}{5}\\overrightarrow{AB}$ et $\\overrightarrow{AJ} = -\\frac{1}{3}\\overrightarrow{AB}$ (la condition $\\frac{MB}{MA}=4 \\implies M \\in (\\mathcal{C})_{[IJ]}$).',
    konanTip: 'Vérification capitale sur le PDF p.13 : $I = \\operatorname{bar}\\{(A, 4), (B, 1)\\} \\implies \\overrightarrow{AI} = \\frac{1}{4+1}\\overrightarrow{AB} = \\frac{1}{5}\\overrightarrow{AB}$, et $J = \\operatorname{bar}\\{(A, -4), (B, 1)\\} \\implies \\overrightarrow{AJ} = \\frac{1}{-4+1}\\overrightarrow{AB} = -\\frac{1}{3}\\overrightarrow{AB}$ (le PDF p.13 avait mis $\\frac{1}{1+4}$ pour le poids de $B$ mais écrit $\\frac{1}{4}$ à côté par coquille — la valeur exacte est bien $\\frac{1}{5}\\overrightarrow{AB}$ et $-\\frac{1}{3}\\overrightarrow{AB}$ !).',
    exercise: {
      id: 'tc_m_geo_l16_p03_q04',
      type: 'mcq',
      prompt: 'Dans l’exercice p.13 où $\\frac{KB}{KA} = 4$, avec $I = \\operatorname{bar}\\{(A, 4), (B, 1)\\}$ et $J = \\operatorname{bar}\\{(A, -4), (B, 1)\\}$, quelles relations exactes vérifient $\\overrightarrow{AI}$ et $\\overrightarrow{AJ}$ ?',
      options: [
        '$\\overrightarrow{AI} = \\frac{1}{4}\\overrightarrow{AB}$ et $\\overrightarrow{AJ} = -\\frac{1}{3}\\overrightarrow{AB}$',
        '$\\overrightarrow{AI} = \\frac{1}{5}\\overrightarrow{AB}$ et $\\overrightarrow{AJ} = -\\frac{1}{3}\\overrightarrow{AB}$',
        '$\\overrightarrow{AI} = \\frac{4}{5}\\overrightarrow{AB}$ et $\\overrightarrow{AJ} = \\frac{4}{3}\\overrightarrow{AB}$',
        '$\\overrightarrow{AI} = 4\\overrightarrow{AB}$ et $\\overrightarrow{AJ} = -4\\overrightarrow{AB}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par la formule du barycentre de $(A, \\alpha)$ et $(B, \\beta)$ : $\\overrightarrow{AI} = \\frac{\\beta}{\\alpha + \\beta}\\overrightarrow{AB} = \\frac{1}{4+1}\\overrightarrow{AB} = \\frac{1}{5}\\overrightarrow{AB}$, et $\\overrightarrow{AJ} = \\frac{1}{-4+1}\\overrightarrow{AB} = -\\frac{1}{3}\\overrightarrow{AB}$. (On corrige ainsi la coquille $\\frac{1}{4}$ imprimée p.13 !)',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice de fixation 2',
    stepTheme: 'green',
    stepTitle: 'Construire $D = s(C)$ connaissant $(k, \\theta)$ et $s(A) = B$ (p.15)',
    paragraphText:
      'Si l’on connaît le rapport $k = 3$, l’angle $\\theta = \\frac{\\pi}{6}$ et l’image $s(A) = B$ (dans $ABC$ rectangle direct en $C$ avec $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AC}}) = \\frac{\\pi}{6}$, p.15), comment construire $D = s(C)$ sans même chercher le centre ? On traduit directement $\\begin{cases} BD = 3AC \\\\ \\operatorname{Mes}(\\widehat{\\overrightarrow{AC}, \\overrightarrow{BD}}) = \\frac{\\pi}{6} \\end{cases}$. Il suffit de tracer la parallèle à $(AC)$ passant par $B$ et d’y placer $F$ tel que $\\overrightarrow{BF}$ soit colinéaire de même sens à $\\overrightarrow{AC}$, puis de tracer la demi-droite $[BG)$ d’angle $(\\widehat{\\overrightarrow{BF}, \\overrightarrow{BG}}) = +\\frac{\\pi}{6}$ et d’y reporter la longueur $BD = 3AC$ !',
    exercise: {
      id: 'tc_m_geo_l16_p03_q05',
      type: 'mcq',
      prompt: 'Dans l’exercice 2 p.15 ($s$ de rapport $3$ et d’angle $\\frac{\\pi}{6}$ telle que $s(A) = B$), quelles conditions caractérisent exactement le point $D = s(C)$ ?',
      options: [
        '$BD = 3AC$ et $\\operatorname{Mes}(\\widehat{\\overrightarrow{AC}, \\overrightarrow{BD}}) = \\frac{\\pi}{6}$',
        '$AD = 3AC$ et $\\operatorname{Mes}(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AD}}) = \\frac{\\pi}{6}$',
        '$CD = 3AB$ et $(AC) \\perp (BD)$',
        '$BD = \\frac{1}{3}AC$ et $\\operatorname{Mes}(\\widehat{\\overrightarrow{AC}, \\overrightarrow{BD}}) = -\\frac{\\pi}{6}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le segment $[AC]$ a pour image $[BD]$, donc $BD = k\\,AC = 3AC$ et l’angle orienté $(\\widehat{\\overrightarrow{AC}, \\overrightarrow{BD}})$ vaut $\\theta = \\frac{\\pi}{6}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 7 p.23',
    stepTheme: 'blue',
    stepTitle: 'Itérer une similitude dans un losange d’angle $\\frac{\\pi}{3}$ ($s \\circ s \\circ s$)',
    paragraphText:
      'Dans l’exercice 7 p.23, $ABCD$ est un losange de centre $O$ tel que $(\\widehat{\\overrightarrow{AC}, \\overrightarrow{AD}}) = \\frac{\\pi}{3}$ (les triangles $ADC$ et $ABC$ sont donc équilatéraux !) et $s$ est la similitude directe de centre $A$ telle que $s(B) = O$. Vérifions ses éléments : dans le demi-triangle équilatéral $AOB$ rectangle en $O$ (avec $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AC}}) = \\frac{\\pi}{3}$? Puisque $(\\widehat{\\overrightarrow{AC}, \\overrightarrow{AD}}) = \\frac{\\pi}{3}$, $ABC$ est équilatéral indirect ou direct ? Si $A\\to B\\to C\\to D$ direct, alors $(\\widehat{\\overrightarrow{AC}, \\overrightarrow{AB}}) = -\\frac{\\pi}{3}$ donc $\\theta = -\\frac{\\pi}{3}$ ; dans tous les cas $|\\theta| = \\frac{\\pi}{3}$ et $k = \\frac{AO}{AB} = \\frac{1}{2}$ ou $\\frac{\\sqrt{3}}{2}$ selon le demi-angle $\\frac{\\pi}{6}$ en $A$!). Pour $s \\circ s \\circ s$, le centre reste $A$, le rapport devient $k^3$ et l’angle $3\\theta$ (si $|\\theta| = \\frac{\\pi}{3}$, alors $3\\theta = \\pm\\pi$, donc $s^3$ devient une **homothétie de centre $A$ et de rapport négatif $-k^3$** !).',
    exercise: {
      id: 'tc_m_geo_l16_p03_q06',
      type: 'mcq',
      prompt: 'Si une similitude directe $s$ a pour centre $A$, pour rapport $k > 0$ et pour angle $\\theta = \\frac{\\pi}{3}$, quelle est la nature de la composée $s \\circ s \\circ s$ ?',
      options: [
        'Une rotation de centre $A$ et d’angle $\\pi$',
        'Une homothétie de centre $A$ et de rapport $-k^3$ (rapport de similitude $k^3$, angle $\\pi$)',
        'Une translation',
        'L’application identique',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le centre reste $A$, le rapport vaut $k^3$ et l’angle vaut $3 \\times \\frac{\\pi}{3} = \\pi$ : c’est l’homothétie de centre $A$ et de rapport négatif $-k^3$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur fréquente',
    stepTheme: 'orange',
    stepTitle: 'Bien orienter l’arc capable selon le signe de $\\theta$ et l’ordre des points',
    paragraphText:
      'Pour construire l’arc capable des points $M$ tels que $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA}, \\overrightarrow{MB}}) = +\\frac{\\pi}{4}$ (p.13–14), le demi-cercle ou arc de cercle choisit le côté « positif » (au-dessus de $(AB)$ si $\\overrightarrow{AB}$ pointe vers la droite) : on place une tangente $(T)$ en $A$ de vecteur directeur $\\vec{u}$ tel que $(\\widehat{\\vec{u}, \\overrightarrow{AB}}) = +\\frac{\\pi}{4}$, puis le centre $O$ sur la médiatrice de $[AB]$ et la perpendiculaire à $(T)$ en $A$. Un angle $-\\frac{\\pi}{4}$ donnerait l’arc symétrique de l’autre côté de $(AB)$ !',
    exercise: {
      id: 'tc_m_geo_l16_p03_q07',
      type: 'mcq',
      prompt: 'Si l’on remplace l’angle $+\\frac{\\pi}{4}$ par $-\\frac{\\pi}{4}$ dans la condition $\\operatorname{Mes}(\\widehat{\\overrightarrow{KA}, \\overrightarrow{KB}}) = \\theta$, comment change l’arc capable $(E_1)$ ?',
      options: [
        'Il devient la droite $(AB)$',
        'Il devient l’arc complémentaire du même cercle situé de l’autre côté de la droite $(AB)$',
        'Il reste identique',
        'Son rayon double',
      ],
      correctAnswerIndex: 1,
      explanation: 'Changer $\\theta$ en $-\\theta$ (ou $\\theta - \\pi$) fait basculer l’arc capable de l’autre côté de la droite $(AB)$ (l’arc complémentaire sur le même cercle).',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Démontrer une propriété',
    stepTheme: 'green',
    stepTitle: 'Prouver que $IJAK$ est un parallélogramme avec $s_1 \\circ s_2^{-1}$ (p.16)',
    paragraphText:
      'Soit $ABC$ un triangle de sens direct ; $I, J, K$ sont construits de sorte que $IBC, JAC, KBA$ soient directs, rectangles et isocèles en $I, J, K$. On considère $s_1$ de centre $A$ ($s_1(C)=J$) et $s_2$ telle que $s_2(A)=K$ et $s_2(C)=I$. Par géométrie sur $ACJ$ direct rectangle isocèle en $J$, $s_1$ a pour rapport $k_1 = \\frac{\\sqrt{2}}{2}$ et angle $\\theta_1 = +\\frac{\\pi}{4}$. De même, $BAK$ et $BCI$ étant rectangles isocèles directs de sommet commun $B$, $s_2$ a pour centre $B$, rapport $k_2 = \\frac{\\sqrt{2}}{2}$ et angle $+\\frac{\\pi}{4}$. Alors $s = s_1 \\circ s_2^{-1}$ a pour rapport $\\frac{\\sqrt{2}}{2} \\times \\sqrt{2} = 1$ et pour angle $\\frac{\\pi}{4} - \\frac{\\pi}{4} = 0$ : c’est une **translation** ! Or $s(K) = s_1(A) = A$ et $s(I) = s_1(C) = J$, donc $\\overrightarrow{KA} = \\overrightarrow{IJ}$, ce qui prouve que **$IJAK$ est un parallélogramme**.',
    exercise: {
      id: 'tc_m_geo_l16_p04_q01',
      type: 'mcq',
      prompt: 'Dans l’exercice p.16, pourquoi la composée $s = s_1 \\circ s_2^{-1}$ est-elle nécessairement une translation ?',
      options: [
        'Car elle fixe les points $A$ et $B$',
        'Car $s_1$ et $s_2$ ont même rapport $\\frac{\\sqrt{2}}{2}$ et même angle $\\frac{\\pi}{4}$, donc $s$ a pour rapport $1$ et pour angle $0$',
        'Car $s_1$ et $s_2$ ont le même centre $A$',
        'Car $k_1 + k_2 = \\sqrt{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$s_2^{-1}$ a pour rapport $\\sqrt{2}$ et angle $-\\frac{\\pi}{4}$, donc $s_1 \\circ s_2^{-1}$ a pour rapport $\\frac{\\sqrt{2}}{2}\\sqrt{2} = 1$ et angle $\\frac{\\pi}{4} - \\frac{\\pi}{4} = 0$ : c’est une translation.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Problème de construction',
    stepTheme: 'green',
    stepTitle: 'Construire un triangle rectangle entre deux droites parallèles (p.17)',
    paragraphText:
      'Soient $(D_1)$ et $(D_2)$ deux droites horizontales disjointes et $A$ un point dans la bande entre elles. On veut construire $ABC$ rectangle en $B$ tel que $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AC}}) = \\frac{\\pi}{3}$, $B \\in (D_2)$ et $C \\in (D_1)$. Analyse : $ABC$ est un demi-triangle équilatéral direct ($AC = 2AB$ et angle $\\frac{\\pi}{3}$), donc $C$ est l’image de $B$ par la similitude directe $s$ de centre $A$, de rapport $2$ et d’angle $\\frac{\\pi}{3}$ ! Comme $B \\in (D_2)$, $C$ appartient aussi à la droite image $(D_2’) = s(D_2)$ : **$C$ est donc l’intersection de $(D_1)$ et $(D_2’)$** (construite à l’aide des images $E’, F’$ de deux points $E, F \\in (D_2)$), puis **$B = s^{-1}(C)$**.',
    exercise: {
      id: 'tc_m_geo_l16_p04_q02',
      type: 'mcq',
      prompt: 'Dans le problème de construction entre $(D_1)$ et $(D_2)$ (p.17), comment obtient-on le sommet $C \\in (D_1)$ ?',
      options: [
        'Comme milieu du projeté orthogonal de $A$ sur $(D_1)$',
        'Comme point d’intersection de $(D_1)$ avec l’image $(D_2’)$ de $(D_2)$ par $s_{(A,\\, 2,\\, \\frac{\\pi}{3})}$',
        'En traçant le cercle de centre $A$ et de rayon $2$',
        'En prenant $C = s(A)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$B \\in (D_2) \\implies C = s(B) \\in s(D_2) = (D_2’)$, et comme $C \\in (D_1)$, $C$ est exactement l’intersection de $(D_1)$ et $(D_2’)$ (sécantes car l’angle $\\frac{\\pi}{3} \\notin \\{0, \\pi\\}$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Lieu géométrique',
    stepTheme: 'green',
    stepTitle: 'Trouver le lieu de $B$ quand $K$ parcourt un cercle $(C)$ (p.18 & 24–25)',
    paragraphText:
      'On donne un cercle $(C)$ de diamètre $[IJ]$ et un point $A$ extérieur à $(C)$. Pour tout $K \\in (C)$, soit $B$ le point tel que $AKB$ soit rectangle isocèle en $B$ et de sens **indirect** (donc $K \\to B \\to A$ négatif, soit $(\\widehat{\\overrightarrow{AK}, \\overrightarrow{AB}}) = -\\frac{\\pi}{4}$ et $AB = \\frac{\\sqrt{2}}{2}AK$). Ainsi, $B$ est l’image de $K$ par la **similitude directe $s$ de centre $A$, rapport $\\frac{\\sqrt{2}}{2}$ et angle $-\\frac{\\pi}{4}$**. Quand $K$ décrit $(C)$, $B$ décrit l’image de $(C)$ par $s$, c’est-à-dire le **cercle $(C’)$ de diamètre $[I’J’]$** où $I’ = s(I)$ et $J’ = s(J)$ !',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Lieu de B : cercle (C’) de diamètre [I’J’], image de (C) par s (p.18 & 25)',
      caption: 'Les triangles AII’ et AJJ’ sont rectangles isocèles indirects en I’ et J’ ; B décrit tout le cercle (C’).',
      svgContent: `<svg viewBox="0 0 300 175" width="285" height="166" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120" cy="52" r="40" fill="none" stroke="#2563eb" stroke-width="1.8"/>
        <line x1="80" y1="52" x2="160" y2="52" stroke="#2563eb" stroke-width="1.4"/>
        <circle cx="165" cy="112" r="28" fill="none" stroke="#dc2626" stroke-width="1.8"/>
        <line x1="145" y1="92" x2="185" y2="132" stroke="#dc2626" stroke-width="1.4"/>
        <circle cx="85" cy="150" r="3.8" fill="#1e293b"/><text x="72" y="155" font-size="11" font-weight="bold" fill="#1e293b">A</text>
        <line x1="85" y1="150" x2="80" y2="52" stroke="#64748b" stroke-width="1.1"/>
        <line x1="85" y1="150" x2="145" y2="92" stroke="#dc2626" stroke-width="1.1" stroke-dasharray="3,2"/>
        <line x1="85" y1="150" x2="160" y2="52" stroke="#64748b" stroke-width="1.1"/>
        <line x1="85" y1="150" x2="185" y2="132" stroke="#dc2626" stroke-width="1.1" stroke-dasharray="3,2"/>
        <text x="68" y="54" font-size="10" font-weight="bold" fill="#2563eb">J</text>
        <text x="164" y="54" font-size="10" font-weight="bold" fill="#2563eb">I</text>
        <text x="137" y="88" font-size="10" font-weight="bold" fill="#dc2626">J’</text>
        <text x="188" y="140" font-size="10" font-weight="bold" fill="#dc2626">I’</text>
        <text x="155" y="25" font-size="10" font-weight="bold" fill="#2563eb">(C)</text>
        <text x="197" y="110" font-size="10" font-weight="bold" fill="#dc2626">(C’)</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l16_p04_q03',
      type: 'mcq',
      prompt: 'Dans le lieu géométrique p.18 ($AKB$ rectangle isocèle en $B$ de sens indirect, $K$ décrivant le cercle $(C)$ de diamètre $[IJ]$), quels sont les éléments de la similitude de centre $A$ envoyant $K$ sur $B$ ?',
      options: [
        'Rapport $\\sqrt{2}$ et angle $\\frac{\\pi}{4}$',
        'Rapport $\\frac{\\sqrt{2}}{2}$ et angle $-\\frac{\\pi}{4}$',
        'Rapport $\\frac{\\sqrt{2}}{2}$ et angle $+\\frac{\\pi}{4}$',
        'Rapport $\\frac{1}{2}$ et angle $-\\frac{\\pi}{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$AKB$ est rectangle isocèle en $B$ donc $AB = \\frac{\\sqrt{2}}{2}AK$, et de sens indirect ($A \\to K \\to B$ négatif) donc $(\\widehat{\\overrightarrow{AK}, \\overrightarrow{AB}}) = -\\frac{\\pi}{4}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe p.32',
    stepTheme: 'blue',
    stepTitle: 'Les chevrons du charpentier : droites concourantes hors de la feuille',
    paragraphText:
      'Deux chevrons $(D)$ et $(D’)$ se coupent en un point $O$ situé hors de la toiture (hors de l’épure), et un charpentier veut tracer le chevron passant par un point $A$ donné et par $O$ ! Solution astucieuse : on utilise une **homothétie $h$ de centre $A$ et de rapport $\\frac{1}{2}$** (qui est une similitude directe fixant $A$). On choisit $B \\in (D)$ et $E \\in (D’)$ dans la zone accessible, on construit $B’ = h(B)$ (milieu de $[AB]$) et $E’ = h(E)$ (milieu de $[AE]$), puis on trace les parallèles à $(D)$ par $B’$ et à $(D’)$ par $E’$. Elles se coupent en $O’ = h(O)$ dans la zone accessible, et comme $A, O, O’$ sont alignés, la droite cherchée est tout simplement **$(AO’)$** !',
    exercise: {
      id: 'tc_m_geo_l16_p04_q04',
      type: 'mcq',
      prompt: 'Pourquoi la droite $(AO’)$ tracée à l’aide du point $O’ = h_{(A, \\frac{1}{2})}(O)$ passe-t-elle exactement par le point inaccessible $O = (D) \\cap (D’)$ (p.32–33) ?',
      options: [
        'Car une homothétie de centre $A$ aligne tout point $O$, son image $O’$ et le centre $A$ ($\\overrightarrow{AO’} = \\frac{1}{2}\\overrightarrow{AO}$)',
        'Car $h$ est une rotation d’angle $\\frac{\\pi}{2}$',
        'Car $(AO’)$ est parallèle à $(D)$',
        'Car $O’$ est le milieu de $[BE]$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\overrightarrow{AO’} = \\frac{1}{2}\\overrightarrow{AO}$, donc $A, O’$ et $O$ sont alignés : la droite $(AO’)$ est confondue avec $(AO)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Exercice 10 p.24',
    stepTheme: 'green',
    stepTitle: 'Construire un carré indirect $ABCD$ entre $(D_1)$ et $(D_2)$',
    paragraphText:
      'Dans l’exercice 10 p.24, on adapte la méthode de construction du p.17 : $(D_1)$ et $(D_2)$ sont parallèles, $A$ est entre les deux, et on veut construire un carré de sens **indirect** $ABCD$ tel que $B \\in (D_2)$ et $C \\in (D_1)$. On remarque que le triangle $ABC$ est rectangle isocèle en $B$ et de sens indirect ($A \\to B \\to C$ négatif, donc $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AC}}) = -\\frac{\\pi}{4}$ et $AC = \\sqrt{2}AB$). Ainsi $C$ est l’image de $B$ par la similitude directe de centre $A$, rapport $\\sqrt{2}$ et angle $-\\frac{\\pi}{4}$, donc $C = (D_1) \\cap s(D_2)$, puis $B = s^{-1}(C)$ et enfin $D$ complète le carré !',
    exercise: {
      id: 'tc_m_geo_l16_p04_q05',
      type: 'mcq',
      prompt: 'Pour construire un carré de sens indirect $ABCD$ tel que $B \\in (D_2)$ et $C \\in (D_1)$ ($A$ fixé, Ex. 10 p.24), quelle similitude directe envoie $B$ sur $C$ ?',
      options: [
        'La similitude de centre $A$, rapport $\\sqrt{2}$ et angle $-\\frac{\\pi}{4}$',
        'La similitude de centre $A$, rapport $2$ et angle $+\\frac{\\pi}{4}$',
        'La rotation de centre $A$ et d’angle $-\\frac{\\pi}{2}$',
        'L’homothétie de centre $A$ et de rapport $\\sqrt{2}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Dans un carré indirect $ABCD$, $[AC]$ est la diagonale ($AC = \\sqrt{2}AB$) et $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AC}}) = -\\frac{\\pi}{4}$ (sens indirect), d’où $C = s_{(A, \\sqrt{2}, -\\frac{\\pi}{4})}(B)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 9 p.24',
    stepTheme: 'blue',
    stepTitle: 'Trouver un lieu par similitude directe ou par module direct',
    paragraphText:
      'Dans l’exercice 9 p.24, on considère $s : z’ = (-1 + i)z + 3 - 4i$. C’est une similitude directe de rapport $k = |-1 + i| = \\sqrt{2}$, d’angle $\\frac{3\\pi}{4}$ et de centre $\\Omega$ d’affixe $z_\\Omega = \\frac{3 - 4i}{2 - i} = \\frac{(3-4i)(2+i)}{5} = 2 - i$. On cherche l’ensemble $(C)$ des points $M(z)$ tels que $|(-1+i)z + 3 - 4i| = 2\\sqrt{2}$, c’est-à-dire $|z’| = 2\\sqrt{2}$ (ou $OM’ = 2\\sqrt{2}$) : (1) avec la similitude directe, $M’ \\in \\mathcal{C}(O, 2\\sqrt{2})$, donc $M = s^{-1}(M’)$ décrit le cercle de centre $s^{-1}(O)$ et de rayon $\\frac{2\\sqrt{2}}{\\sqrt{2}} = 2$ ; (2) sans similitude, on factorise directement par $-1 + i$ : $\\sqrt{2}|z - (2 - i)| = 2\\sqrt{2} \\iff |z - z_\\Omega| = 2$, c’est le **cercle de centre $\\Omega(2 - i)$ et de rayon $2$** (et on vérifie $s(\\Omega) = \\Omega$, mais attention $s^{-1}(O) \\neq \\Omega$ ! Wait : vérifions $|z’| = 2\\sqrt{2}$ vs $|z’-z_\\Omega|$ !).',
    konanTip: 'Vérification cruciale : dans Ex. 9.2, $|z’| = |(-1+i)z + 3 - 4i| = |(-1+i)(z - z_\\Omega) + z_\\Omega|$ si on ne factorise PAS ! Pour que $|z’| = 2\\sqrt{2}$, comme $z’ = (-1+i)(z - \\frac{-3+4i}{-1+i}) = (-1+i)(z + \\frac{7-i}{2})$, c’est le cercle de centre $s^{-1}(O)$ et rayon $2$ (et $s^{-1}(O) = -\\frac{3-4i}{-1+i} = \\frac{(3-4i)(1+i)}{2} = \\frac{7}{2} - \\frac{1}{2}i \\neq \\Omega$ !). Ne confonds pas $|z’| = r$ ($M’ \\in \\mathcal{C}(O, r)$) avec $|z’ - z_\\Omega| = r$ !',
    exercise: {
      id: 'tc_m_geo_l16_p04_q06',
      type: 'mcq',
      prompt: 'Si $s : z’ = (-1 + i)z + 3 - 4i$ a pour rapport $\\sqrt{2}$, quel est le **rayon** du cercle $(C)$ d’équation $|(-1 + i)z + 3 - 4i| = 2\\sqrt{2}$ (Ex. 9 p.24) ?',
      options: ['$2\\sqrt{2}$', '$2$', '$4$', '$\\sqrt{2}$'],
      correctAnswerIndex: 1,
      explanation: '$|(-1 + i)z + 3 - 4i| = |-1 + i|\\,\\left|z - s^{-1}(O)\\right| = \\sqrt{2}\\,\\left|z - s^{-1}(O)\\right| = 2\\sqrt{2} \\iff |z - s^{-1}(O)| = 2$. Le rayon vaut $2$ !',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Lecture de sens',
    stepTheme: 'orange',
    stepTitle: 'Savoir distinguer sens direct et sens indirect sur les sommets d’un triangle',
    paragraphText:
      'Dans les exercices de lieux et de démonstrations (p.16, 18, 24), lis attentivement l’ordre des lettres ! Dire « le triangle $AKB$ est rectangle isocèle en $B$ et de sens indirect » signifie que le parcours $A \\to K \\to B$ (ou $\\overrightarrow{BA} \\to \\overrightarrow{BK}$? Vérifions : $A \\to K \\to B$ en sens négatif équivaut à $(\\widehat{\\overrightarrow{BA}, \\overrightarrow{BK}}) = -\\frac{\\pi}{2}$ et donc $(\\widehat{\\overrightarrow{AK}, \\overrightarrow{AB}}) = -\\frac{\\pi}{4}$). Toujours tracer un petit croquis orienté pour fixer le signe de $\\theta$ !',
    exercise: {
      id: 'tc_m_geo_l16_p04_q07',
      type: 'mcq',
      prompt: 'Dans l’exercice 4 de maison (Bac C CI 1998, p.32), $ABCD$ est un carré de centre $O$ tel que $(\\widehat{\\overrightarrow{AI}, \\overrightarrow{AD}}) = \\frac{\\pi}{2}$ (plutôt $(\\widehat{\\overrightarrow{AB}, \\overrightarrow{AD}}) = \\frac{\\pi}{2}$), $r$ est la rotation de centre $A$ envoyant $D$ en $B$, $M \\in (DC)$, $N \\in (BC) \\cap (AM)^\\perp$, $I$ milieu de $[MN]$. Quelle similitude directe de centre $A$ envoie $D$ sur $O$ ?',
      options: [
        'Rapport $\\frac{\\sqrt{2}}{2}$ et angle $-\\frac{\\pi}{4}$ (ou $+\\frac{\\pi}{4}$ selon le sens direct de $ABCD$)',
        'Rapport $\\sqrt{2}$ et angle $\\frac{\\pi}{2}$',
        'Rapport $2$ et angle $0$',
        'Rapport $\\frac{1}{2}$ et angle $-\\frac{\\pi}{4}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le triangle $AOD$ est rectangle isocèle en $O$ : $AO = \\frac{\\sqrt{2}}{2}AD$, et l’angle $(\\widehat{\\overrightarrow{AD}, \\overrightarrow{AO}})$ vaut $\\pm\\frac{\\pi}{4}$ selon l’orientation directe de $ABCD$ (ici $r(D)=B$ d’angle $-\\frac{\\pi}{2}$ donne $-\\frac{\\pi}{4}$), d’où $s(C)=?$ et le lieu du milieu $I$ de $[MN]$ (qui est $s(M)$ !).',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Synthèse conique',
    stepTheme: 'green',
    stepTitle: 'Reconnaître une ellipse tournée via une similitude directe (p.19–21)',
    paragraphText:
      'Dans l’exercice de synthèse p.19–21, on étudie la courbe $(E) : 25x^2 + 25y^2 + 14xy - 144 = 0$ à l’aide de la similitude $s : z’ = (1 - i)z$. En inversant, $z = \\frac{1}{1-i}z’ = \\left(\\frac{1}{2} + \\frac{1}{2}i\\right)(x’ + iy’)$, d’où $\\begin{cases} x = \\frac{1}{2}(x’ - y’) \\\\ y = \\frac{1}{2}(x’ + y’) \\end{cases}$. En substituant $x^2, y^2, xy$ dans l’équation de $(E)$, les termes rectangles en $x’y’$ s’annulent et on obtient $\\frac{64}{4}x’^2 + \\frac{36}{4}y’^2 - 144 = 0$, soit $(E_0) : 16x’^2 + 9y’^2 - 144 = 0$? Attention au PDF p.19–20 : la question 2 écrivait $9x^2+16y^2-144=0$ alors que le calcul exact p.20 ligne 3 donne $16x’^2 + 9y’^2 - 144 = 0$ (puis la ligne suivante $9x^2+16y^2=144$ inversait $16$ et $9$ sous $x^2$ et $y^2$ !). Vérifions : $x^2 = \\frac{1}{4}(x’^2+y’^2-2x’y’)$, $y^2 = \\frac{1}{4}(x’^2+y’^2+2x’y’)$, $xy = \\frac{1}{4}(x’^2-y’^2)$, donc $25(x^2+y^2)+14xy = \\frac{50}{4}(x’^2+y’^2) + \\frac{14}{4}(x’^2-y’^2) = 16x’^2 + 9y’^2$ ! Ainsi $(E_0) : \\frac{x’^2}{9} + \\frac{y’^2}{16} = 1$ (grand axe vertical $4$ sur $(Oy)$, petits sommets $3$ sur $(Ox)$) !',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Ellipse (E) inclinée à 45° et ellipse réduite (E₀) (p.21)',
      caption: 'La similitude z’ = (1 − i)z redresse les axes obliques de (E) sur les axes du repère et dilate d’un rapport √2.',
      svgContent: `<svg viewBox="0 0 300 165" width="285" height="156" xmlns="http://www.w3.org/2000/svg">
        <line x1="25" y1="82" x2="275" y2="82" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="150" y1="12" x2="150" y2="152" stroke="#94a3b8" stroke-width="1.2"/>
        <line x1="80" y1="152" x2="220" y2="12" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
        <line x1="80" y1="12" x2="220" y2="152" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3"/>
        <ellipse cx="150" cy="82" rx="76" ry="57" fill="none" stroke="#16a34a" stroke-width="2"/>
        <ellipse cx="150" cy="82" rx="54" ry="40" transform="rotate(-45 150 82)" fill="none" stroke="#2563eb" stroke-width="2"/>
        <text x="228" y="42" font-size="11" font-weight="bold" fill="#16a34a">(E₀)</text>
        <text x="195" y="65" font-size="11" font-weight="bold" fill="#2563eb">(E)</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l16_p05_q01',
      type: 'mcq',
      prompt: 'Pour $z’ = (1 - i)z$ (p.19), quelle expression donne $(x, y)$ en fonction de $(x’, y’)$ ?',
      options: [
        '$x = x’ - y’$ et $y = x’ + y’$',
        '$x = \\frac{1}{2}(x’ - y’)$ et $y = \\frac{1}{2}(x’ + y’)$',
        '$x = \\frac{1}{2}(x’ + y’)$ et $y = \\frac{1}{2}(x’ - y’)$',
        '$x = \\frac{1}{2}(x’ - y’)$ et $y = \\frac{1}{2}(-x’ + y’)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$z = \\frac{1}{1-i}z’ = \\left(\\frac{1}{2} + \\frac{1}{2}i\\right)(x’ + iy’) = \\frac{1}{2}(x’ - y’) + i\\frac{1}{2}(x’ + y’)$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Suites & Similitude Ex. 2',
    stepTheme: 'green',
    stepTitle: 'Suite récurrente $A_{n+1} = s(A_n)$ : affixe, angle et distance au centre (p.26–28)',
    paragraphText:
      'Dans l’exercice 2 de renforcement (p.26–30), $s$ vérifie $x’ = \\frac{x}{2}+\\frac{y}{2}+1$, $y’ = -\\frac{x}{2}+\\frac{y}{2}+1$, soit $z’ = \\frac{1-i}{2}z + 1 + i$ : c’est la similitude directe de **centre $B(2)$**, de **rapport $\\frac{\\sqrt{2}}{2}$** et d’**angle $-\\frac{\\pi}{4}$**. Partant de $A_0 = A(10)$ et $A_{n+1} = s(A_n)$, on démontre par récurrence que $z_n = 2 + 8\\left(\\frac{1-i}{2}\\right)^n$. On en déduit immédiatement que $\\operatorname{Mes}(\\widehat{\\overrightarrow{OI}, \\overrightarrow{BA_n}}) \\equiv -\\frac{n\\pi}{4}\\;[2\\pi]$ et que $BA_n = |z_n - 2| = \\frac{8}{(\\sqrt{2})^n}$.',
    formula: {
      name: 'Itération de similitude centrée en B(2)',
      formula: 'z_n - 2 = 8\\left(\\frac{1-i}{2}\\right)^n \\implies BA_n = \\frac{8}{(\\sqrt{2})^n} \\quad\\text{et}\\quad (\\widehat{\\overrightarrow{OI}, \\overrightarrow{BA_n}}) \\equiv -\\frac{n\\pi}{4}\\;[2\\pi]',
    },
    exercise: {
      id: 'tc_m_geo_l16_p05_q02',
      type: 'mcq',
      prompt: 'Avec $\\operatorname{Mes}(\\widehat{\\overrightarrow{OI}, \\overrightarrow{BA_n}}) = -\\frac{n\\pi}{4}$ ($n \\in \\mathbb{N}$, p.26 & 28), pour quelles valeurs de $n$ le point $A_n$ appartient-il à la droite $(OI)$, et quand $(BA_n) \\perp (OI)$ ?',
      options: [
        '$A_n \\in (OI) \\iff n = 4k$ ($k \\in \\mathbb{N}$) ; $(BA_n) \\perp (OI) \\iff n = 4k + 2$ ($k \\in \\mathbb{N}$)',
        '$A_n \\in (OI) \\iff n = 8k$ ; $(BA_n) \\perp (OI) \\iff n = 4k$',
        '$A_n \\in (OI) \\iff n = 2k$ ; $(BA_n) \\perp (OI) \\iff n = 2k + 1$',
        '$A_n \\in (OI)$ uniquement pour $n = 0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Comme $B(2) \\in (OI)$, $A_n \\in (OI) \\iff -\\frac{n\\pi}{4} = k\\pi \\iff n = 4k$ ($k \\in \\mathbb{N}$), et $(BA_n) \\perp (OI) \\iff -\\frac{n\\pi}{4} = \\frac{\\pi}{2} + k’\\pi \\iff n = 4k + 2$ ($k \\in \\mathbb{N}$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Seuil et ligne brisée',
    stepTheme: 'green',
    stepTitle: 'Seuil $BA_n \\le 10^{-2}$ et longueur totale $L_n$ de la spirale (p.27–30)',
    paragraphText:
      'Pour trouver la plus petite valeur de $n$ telle que $A_n$ appartienne au disque de centre $B$ et de rayon $10^{-2}$, on résout $\\frac{8}{(\\sqrt{2})^n} \\le 10^{-2}$. En appliquant $\\log$ (ou $\\ln$), on obtient $\\log 8 - n\\log\\sqrt{2} \\le -2 \\iff n \\ge \\frac{2 + \\log 8}{\\log\\sqrt{2}} \\approx 19{,}28$, d’où **$n = 20$**. Par ailleurs, chaque segment $[A_j A_{j+1}]$ est l’image du précédent par $s$ de rapport $q = \\frac{\\sqrt{2}}{2}$, avec $L_1 = A_0A_1 = |z_1 - z_0| = |-4 - 4i| = 4\\sqrt{2}$. La longueur $L_n = \\sum_{j=0}^{n-1} A_jA_{j+1}$ vaut donc $L_n = 4\\sqrt{2}\\frac{1 - (\\frac{\\sqrt{2}}{2})^n}{1 - \\frac{\\sqrt{2}}{2}} = (8\\sqrt{2} + 8)\\left[1 - \\left(\\frac{\\sqrt{2}}{2}\\right)^n\\right]$, de limite **$8\\sqrt{2} + 8$** quand $n \\to +\\infty$ !',
    exercise: {
      id: 'tc_m_geo_l16_p05_q03',
      type: 'mcq',
      prompt: 'Dans l’exercice 2 (p.27 & 30), que vaut la limite lorsque $n \\to +\\infty$ de la longueur de la ligne brisée $L_n = A_0A_1 + A_1A_2 + \\dots + A_{n-1}A_n$ ?',
      options: ['$4\\sqrt{2}$', '$8\\sqrt{2} + 8$', '$16$', '$+\\infty$'],
      correctAnswerIndex: 1,
      explanation: 'Comme $-1 < \\frac{\\sqrt{2}}{2} < 1$, $\\lim (\\frac{\\sqrt{2}}{2})^n = 0$, donc $\\lim L_n = 4\\sqrt{2}(2 + \\sqrt{2}) = 8\\sqrt{2} + 8$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice 3 p.30–32',
    stepTheme: 'blue',
    stepTitle: 'Spirale de triangles rectangles isocèles $IM_nM_{n+1}$ et aire du polygone',
    paragraphText:
      'On étudie $s : z’ = \\left(\\frac{1}{2} - \\frac{i}{2}\\right)z + \\frac{1}{2} + \\frac{i}{2}$, similitude directe de **centre $I(1)$**, **rapport $k = \\frac{\\sqrt{2}}{2}$** et **angle $-\\frac{\\pi}{4}$**. Pour tout $M \\neq I$, $\\frac{IM’}{IM} = \\frac{\\sqrt{2}}{2} = \\cos(-\\frac{\\pi}{4})$, donc le triangle $IMM’$ est **rectangle isocèle en $M’$ et de sens indirect**. Partant de $A(-7)$ ($IA = 8$) et posant $M_{n+1} = s(M_n)$, l’aire $a_n = \\operatorname{aire}(IM_nM_{n+1})$ forme une suite géométrique de premier terme $a_0 = \\operatorname{aire}(IAB) = \\frac{8 \\times 4}{2} = 16$ et de raison **$q = k^2 = \\frac{1}{2}$** !',
    exercise: {
      id: 'tc_m_geo_l16_p05_q04',
      type: 'mcq',
      prompt: 'Dans l’exercice 3 (p.30–31), sachant que $s$ a pour rapport $k = \\frac{\\sqrt{2}}{2}$ et $a_0 = \\operatorname{aire}(IAB) = 16$, quelles sont les valeurs du premier terme et de la raison $q$ de la suite d’aires $(a_n)$ ?',
      options: [
        '$a_0 = 16$ et $q = \\frac{\\sqrt{2}}{2}$',
        '$a_0 = 16$ et $q = \\left(\\frac{\\sqrt{2}}{2}\\right)^2 = \\frac{1}{2}$',
        '$a_0 = 32$ et $q = \\frac{1}{2}$',
        '$a_0 = 8$ et $q = \\frac{1}{4}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Une similitude directe de rapport $k$ multiplie les **aires par $k^2$**, donc la raison de la suite géométrique des aires est $q = k^2 = (\\frac{\\sqrt{2}}{2})^2 = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Fin Exercice 3 p.31',
    stepTheme: 'green',
    stepTitle: 'Somme $A_n = \\sum_{k=0}^n a_k$, aire de $IABCDE$ et distance $DE$',
    paragraphText:
      'Pour tout $n \\in \\mathbb{N}$, avec $a_0 = \\operatorname{aire}(IAB) = \\frac{IA \\times HB}{2} = \\frac{8 \\times 4}{2} = 16$ et la raison $q = \\frac{1}{2}$, la somme des $n+1$ premiers termes de $(a_n)$ vaut exactement $A_n = a_0 \\frac{1 - (1/2)^{n+1}}{1 - 1/2} = 16 \\times 2 \\left[1 - \\left(\\frac{1}{2}\\right)^{n+1}\\right] = 32\\left[1 - \\left(\\frac{1}{2}\\right)^{n+1}\\right]$. (Attention : le polycopié p.31 avait oublié le facteur $\\frac{1}{1 - 1/2} = 2$ au dénominateur et écrit $16[1 - (1/2)^{n+1}]$, ce qui donnerait $\\lim A_n = 16$ alors que déjà $a_0 + a_1 = 16 + 8 = 24 > 16$ !). Avec la formule exacte, $\\operatorname{aire}(IABCDE) = a_0 + a_1 + a_2 + a_3 = 32\\left(1 - \\frac{1}{16}\\right) = 30$, et $\\lim_{n\\to+\\infty} A_n = 32$. Enfin, la distance $DE$ vaut $DE = \\left(\\frac{\\sqrt{2}}{2}\\right)^3 AB = \\frac{2\\sqrt{2}}{8} \\times 4\\sqrt{2} = 2$.',
    konanTip: 'Magnifique contrôle de vraisemblance : comme $a_0 = 16$ et $a_1 = 8$ sont tous positifs, la somme $A_n = a_0 + \\dots + a_n$ est forcément **strictement supérieure à $16$** dès $n=1$ ($A_1 = 24$, $A_3 = 30$, limite $= 32$) ! Le polycopié p.31 avait omis de diviser par $1 - \\frac{1}{2} = \\frac{1}{2}$.',
    exercise: {
      id: 'tc_m_geo_l16_p05_q05',
      type: 'mcq',
      prompt: 'Dans la spirale d’aires $(a_n)$ de premier terme $a_0 = 16$ et de raison $q = \\frac{1}{2}$ (Ex. 3 p.31, formule corrigée), que valent exactement l’aire de $IABCDE$ ($A_3 = a_0 + a_1 + a_2 + a_3$) et la limite $\\lim_{n \\to +\\infty} A_n$ ?',
      options: [
        '$A_3 = 15$ et $\\lim A_n = 16$',
        '$A_3 = 30$ et $\\lim A_n = 32$',
        '$A_3 = 24$ et $\\lim A_n = 32$',
        '$A_3 = 31$ et $\\lim A_n = 64$',
      ],
      correctAnswerIndex: 1,
      explanation: '$a_0 = 16$, $a_1 = 8$, $a_2 = 4$, $a_3 = 2$, donc $A_3 = 16 + 8 + 4 + 2 = 30$ (soit $16\\frac{1 - (1/2)^4}{1 - 1/2} = 32 \\times \\frac{15}{16} = 30$) et $\\lim_{n \\to +\\infty} A_n = \\frac{16}{1 - 1/2} = 32$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Distance itérée',
    stepTheme: 'blue',
    stepTitle: 'Calculer une longueur après $p$ applications de la similitude : $DE = k^3 AB$',
    paragraphText:
      'Dans le même exercice 3 (p.31), sachant que $AB = 4\\sqrt{2}$ et que $B=s(A), C=s(B), D=s(C), E=s(D)$, chaque segment image a sa longueur multipliée par $k = \\frac{\\sqrt{2}}{2}$. Ainsi $BC = k\\,AB$, $CD = k\\,BC = k^2 AB$ et $DE = k\\,CD = k^3 AB = \\left(\\frac{\\sqrt{2}}{2}\\right)^3 \\times 4\\sqrt{2} = \\frac{2\\sqrt{2}}{8} \\times 4\\sqrt{2} = 2$. Cette règle $M_n M_{n+1} = k^n M_0 M_1$ évite de recalculer les affixes des points intermédiaires !',
    exercise: {
      id: 'tc_m_geo_l16_p05_q06',
      type: 'mcq',
      prompt: 'Sachant que $AB = 4\\sqrt{2}$ et que $s$ est de rapport $k = \\frac{\\sqrt{2}}{2}$ avec $s(A)=B, s(B)=C, s(C)=D, s(D)=E$ (Ex. 3.5 p.31), quelle est la longueur exacte du segment $[DE]$ ?',
      options: ['$1$', '$\\sqrt{2}$', '$2$', '$2\\sqrt{2}$'],
      correctAnswerIndex: 2,
      explanation: '$[DE]$ est obtenu après $3$ applications successives de $s$ sur $[AB]$, donc $DE = \\left(\\frac{\\sqrt{2}}{2}\\right)^3 \\times 4\\sqrt{2} = \\frac{2\\sqrt{2}}{8} \\times 4\\sqrt{2} = 2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur fréquente',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre la raison sur les longueurs ($k$) et la raison sur les aires ($k^2$)',
    paragraphText:
      'Dans les exercices de suites géométriques associées à une similitude directe de rapport $k$ : la suite des **distances** ($M_n M_{n+1}$ ou $\\Omega M_n$) est géométrique de raison **$k$**, tandis que la suite des **aires** des triangles ou figures successives est géométrique de raison **$k^2$**. Et pour la somme $A_n = \\sum_{j=0}^n a_j$, n’oublie jamais qu’il y a **$n + 1$ termes** (de $0$ à $n$) et qu’on divise bien par $1 - q$ (et non par $1$) !',
    exercise: {
      id: 'tc_m_geo_l16_p05_q07',
      type: 'mcq',
      prompt: 'Lorsqu’une suite $(M_n)$ est définie par $M_{n+1} = s(M_n)$ où $s$ est une similitude directe de centre $\\Omega$ et de rapport $k > 0$, quelles sont les raisons respectives des suites géométriques $(\\Omega M_n)$ et $(\\operatorname{aire}(\\Omega M_n M_{n+1}))$ ?',
      options: [
        'Raison $k$ pour $(\\Omega M_n)$ et raison $k$ pour les aires',
        'Raison $k$ pour $(\\Omega M_n)$ et raison $k^2$ pour les aires',
        'Raison $k^2$ pour $(\\Omega M_n)$ et raison $k$ pour les aires',
        'Raison $-k$ pour $(\\Omega M_n)$ et raison $2k$ pour les aires',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\Omega M_{n+1} = k\\,\\Omega M_n$ (raison $k$), tandis que chaque triangle image voit son aire multipliée par $k^2$ (raison $k^2$).',
    },
  },
];

export const MATHS_TLE_C_L16_SIMILITUDES_DIRECTES_PLAN: CurriculumChapter = {
  id: 'terminale_c_maths_geometrie_l16_similitudes_directes_plan',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 16,
  title: 'Leçon 16 : Similitudes directes du plan',
  summary:
    'Définition, rapport, angle, composition et propriétés géométriques des similitudes directes ; forme réduite canonique et écriture complexe ; triangles ΩMM’ et détermination géométrique ; constructions, lieux géométriques et suites de similitudes.',
  officialVolumeHours: 10,
  contentVersion: 2,
  points: [
    {
      id: 'terminale_c_maths_geometrie_l16_similitudes_directes_plan_p01',
      order: 1,
      title: 'Définition, rapport, angle, composition et propriétés',
      summary:
        'Comprendre la similitude directe comme composée d’homothétie et de déplacement, calculer rapports et angles de composées ou réciproques, et exploiter conservations et aires.',
      conceptExplanation:
        'Une similitude directe est toute composée d’une homothétie et d’un déplacement ; elle conserve les angles orientés et le rapport des distances ($M’N’ = k\\,MN$, $\\operatorname{Mes}(\\widehat{\\overrightarrow{MN},\\overrightarrow{M’N’}})=\\theta$). La composée de deux similitudes multiplie les rapports et additionne les angles ; la réciproque inverse le rapport ($1/k$) et oppose l’angle ($-\\theta$). Elle conserve le barycentre et multiplie les aires par $k^2$.',
      keyRule: 'Rapport toujours $> 0$ ; homothétie de rapport $-k < 0$ $\\implies$ similitude de rapport $k$ et d’angle $\\pi$.',
      formulas: [
        { name: 'Composition et réciproque', formula: 's_1 \\circ s_2 : (k_1 k_2,\\; \\theta_1 + \\theta_2) \\qquad ; \\qquad s^{-1} : (\\frac{1}{k},\\; -\\theta)' },
      ],
      workedExample: {
        title: 'Triangle équilatéral direct ABC : s(I)=B et s(B)=A (p.2)',
        statement: 'Déterminer le rapport et l’angle de $s$ ($I$ milieu de $[BC]$).',
        methodSteps: [
          '$k = \\frac{BA}{IB} = \\frac{2IB}{IB} = 2$.',
          '$\\theta = \\operatorname{Mes}(\\widehat{\\overrightarrow{IB}, \\overrightarrow{BA}}) = \\operatorname{Mes}(\\widehat{\\overrightarrow{CB}, \\overrightarrow{BA}}) = -\\frac{2\\pi}{3}$.',
        ],
        conclusion: '$s$ est une similitude directe de rapport $2$ et d’angle $-\\frac{2\\pi}{3}$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l16_similitudes_directes_plan_p02',
      order: 2,
      title: 'Forme réduite, écriture complexe et triangles ΩMM’',
      summary:
        'Décomposer une similitude à centre en h ∘ r = r ∘ h, maîtriser l’écriture complexe z’ = az + b (tableau complet) et reconnaître les triangles rectangles remarquables ΩMM’.',
      conceptExplanation:
        'Toute similitude directe qui n’est pas une translation possède un unique centre $\\Omega$ et se décompose de façon commutable : $S = h_{(\\Omega, k)} \\circ r_{(\\Omega, \\theta)} = r_{(\\Omega, \\theta)} \\circ h_{(\\Omega, k)}$. Son écriture complexe est $z’ = az + b$ ($a \\in \\mathbb{C}^*$) avec $z_\\Omega = \\frac{b}{1-a}$, $k=|a|$ et $\\theta=\\operatorname{Arg}(a)$, soit $z’ = ke^{i\\theta}(z-z_\\Omega)+z_\\Omega$.',
      keyRule: 'Pour un angle $\\pm\\frac{\\pi}{4}, \\pm\\frac{\\pi}{3}$ ou $\\pm\\frac{\\pi}{6}$ et le bon rapport, $\\Omega MM’$ est rectangle en $M$ (si $k>1$) ou en $M’$ (si $k<1$).',
      formulas: [
        { name: 'Forme réduite et écriture', formula: 's_{(\\Omega, k, \\theta)} = h_{(\\Omega, k)} \\circ r_{(\\Omega, \\theta)} \\quad \\iff \\quad z’ = k e^{i\\theta}(z - z_\\Omega) + z_\\Omega' },
      ],
      workedExample: {
        title: 'Expression analytique x’ = x + y − 3, y’ = −x + y + 2 (p.6)',
        statement: 'Écrire $z’$ en fonction de $z$.',
        methodSteps: [
          '$z’ = x’ + iy’ = (1 - i)x + (1 + i)y - 3 + 2i$.',
          'En écrivant $(1+i) = (1-i)i$, on factorise : $z’ = (1 - i)(x + iy) - 3 + 2i$.',
        ],
        conclusion: '$z’ = (1 - i)z - 3 + 2i$ (similitude directe).',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l16_similitudes_directes_plan_p03',
      order: 3,
      title: 'Détermination géométrique et construction du centre',
      summary:
        'Déterminer s par (centre, M, M’), deux points et images (cercles d’intersection avec K = (AB)∩(CD)), triangles directement semblables ou par (k, θ, A ↦ B) via arc capable et Apollonius.',
      conceptExplanation:
        'Il existe une unique similitude directe envoyant $A$ en $C$ et $B$ en $D$ ($A \\neq B$, $C \\neq D$). Géométriquement, si $K = (AB) \\cap (CD)$, le centre $\\Omega$ est le second point commun aux cercles circonscrits à $KAC$ et $KBD$. Si l’on connaît $(k, \\theta)$ et $s(A)=B$, $\\Omega$ est à l’intersection de l’arc capable d’angle $\\theta$ sur $[AB]$ et du cercle d’Apollonius $\\frac{MB}{MA}=k$.',
      keyRule: 'Pour $\\frac{KB}{KA} = 4$, le diamètre $[IJ]$ du cercle d’Apollonius utilise $\\overrightarrow{AI} = \\frac{1}{5}\\overrightarrow{AB}$ et $\\overrightarrow{AJ} = -\\frac{1}{3}\\overrightarrow{AB}$.',
      formulas: [
        { name: 'Centre par (k, θ, s(A)=B)', formula: '\\Omega \\in \\left\\{ M : \\frac{MB}{MA} = k \\right\\} \\cap \\left\\{ M : \\operatorname{Mes}(\\widehat{\\overrightarrow{MA}, \\overrightarrow{MB}}) = \\theta \\right\\}' },
      ],
      workedExample: {
        title: 'Deux carrés directs accolés ABCD et DCEF : s(B)=C, s(O)=D (p.10)',
        statement: 'Trouver le centre de $s$ et l’image de $C$.',
        methodSteps: [
          'Les triangles $ABC$ et $AOD$ sont rectangles isocèles directs respectivement en $B$ et $O$, de sommet commun $A$.',
          'Donc le centre de $s$ est $A$ ($k = \\sqrt{2}$, $\\theta = \\frac{\\pi}{4}$), et comme $ACF$ est rectangle isocèle direct en $C$, $s(C) = F$.',
        ],
        conclusion: 'Centre $A$ et $s(C) = F$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l16_similitudes_directes_plan_p04',
      order: 4,
      title: 'Démonstrations, constructions et lieux géométriques',
      summary:
        'Prouver des propriétés de configuration par composition, résoudre les problèmes de construction entre deux droites parallèles, trouver le lieu d’un point sur un cercle et résoudre la situation complexe des chevrons.',
      conceptExplanation:
        'En analyse–synthèse, exprimer un point cible $C$ comme l’image d’un point mobile $B \\in (D_2)$ par une similitude connue $s$ ramène le problème à l’intersection de $(D_1)$ et $s(D_2)$. De même, si $B = s(K)$ quand $K$ décrit un cercle $(C)$ de diamètre $[IJ]$, le lieu de $B$ est le cercle $(C’)$ de diamètre $[s(I)s(J)]$.',
      keyRule: 'L’image d’un cercle de diamètre $[IJ]$ par une similitude directe $s$ est le cercle de diamètre $[s(I)s(J)]$.',
      formulas: [
        { name: 'Construction entre parallèles', formula: 'B \\in (D_2) \\text{ et } C = s(B) \\in (D_1) \\implies C \\in (D_1) \\cap s(D_2)' },
      ],
      workedExample: {
        title: 'Parallélogramme IJAK via s₁ ∘ s₂⁻¹ (p.16)',
        statement: 'Prouver que $IJAK$ est un parallélogramme.',
        methodSteps: [
          '$s_1(A)=A, s_1(C)=J$ ($k_1 = \\frac{\\sqrt{2}}{2}, \\theta_1 = \\frac{\\pi}{4}$) et $s_2(B)=B, s_2(A)=K, s_2(C)=I$ ($k_2 = \\frac{\\sqrt{2}}{2}, \\theta_2 = \\frac{\\pi}{4}$).',
          '$s_1 \\circ s_2^{-1}$ a pour rapport $1$ et angle $0$ : c’est une translation envoyant $K$ sur $A$ et $I$ sur $J$, donc $\\overrightarrow{KA} = \\overrightarrow{IJ}$.',
        ],
        conclusion: '$IJAK$ est un parallélogramme.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l16_similitudes_directes_plan_p05',
      order: 5,
      title: 'Problèmes de synthèse : conique tournée et suites complexes',
      summary:
        'Ramener une ellipse oblique à sa forme réduite par z’ = (1−i)z, et étudier des suites de points A_{n+1} = s(A_n) : affixe, alignement, seuil logarithmique, ligne brisée et spirale d’aires.',
      conceptExplanation:
        'Une suite géométrique de points $M_{n+1} = s(M_n)$ pour $s$ de centre $\\Omega$, rapport $k$ et angle $\\theta$ vérifie $z_n - z_\\Omega = (ke^{i\\theta})^n (z_0 - z_\\Omega)$. Les longueurs $\\Omega M_n$ et $M_n M_{n+1}$ suivent des suites géométriques de raison $k$, les angles avancent de $\\theta$ à chaque pas, et les aires de triangles successifs forment une suite géométrique de raison $k^2$.',
      keyRule: 'Attention aux sommes d’aires $\\sum_{j=0}^n a_j = a_0\\frac{1 - q^{n+1}}{1 - q}$ : ne pas oublier de diviser par $1 - q$ (p.31 corrigé : $32$, pas $16$).',
      formulas: [
        { name: 'Suites géométriques de similitudes', formula: 'z_n - z_\\Omega = (ke^{i\\theta})^n(z_0 - z_\\Omega) \\quad ; \\quad \\lim_{n\\to+\\infty} L_n = \\frac{L_1}{1-k} \\;(0<k<1)' },
      ],
      workedExample: {
        title: 'Ligne brisée dans z’ = ((1−i)/2)z + 1 + i (p.26–30)',
        statement: 'Calculer la longueur limite de la spirale $A_0A_1 + A_1A_2 + \\dots + A_{n-1}A_n$.',
        methodSteps: [
          'Centre $B(2)$, rapport $k = \\frac{\\sqrt{2}}{2}$, $z_0 = 10 \\implies z_1 = 6 - 4i \\implies L_1 = A_0A_1 = |-4-4i| = 4\\sqrt{2}$.',
          'Somme géométrique de raison $k = \\frac{\\sqrt{2}}{2}$ : $L_n = (8\\sqrt{2}+8)\\left[1 - \\left(\\frac{\\sqrt{2}}{2}\\right)^n\\right]$.',
        ],
        conclusion: '$\\lim_{n \\to +\\infty} L_n = 8\\sqrt{2} + 8$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};
