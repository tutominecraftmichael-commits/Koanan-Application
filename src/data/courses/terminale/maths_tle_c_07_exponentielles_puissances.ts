import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Modéliser une décroissance rapide : médicament dans le sang',
    paragraphText:
      'À l’infirmerie, la masse $M(t)$ (en mg) d’un médicament présent dans le sang $t$ heures après la prise est modélisée par $M(t) = 50e^{-0{,}75t}$. La prochaine prise est autorisée lorsque le taux descend sous $20\\%$ de la dose initiale ($50\\text{ mg}$), soit $M(t) < 10\\text{ mg}$, c’est-à-dire $e^{-0{,}75t} < 0{,}20$. En passant au logarithme népérien, $-0{,}75t < \\ln(0{,}20) \\implies t > \\frac{\\ln(0{,}20)}{-0{,}75} \\approx 2{,}15\\text{ h}$ (environ $2\\text{ h } 09\\text{ min}$).',
    formula: {
      name: 'Seuil de décroissance exponentielle',
      formula: '50 e^{-0{,}75t} < 10 \\iff e^{-0{,}75t} < 0{,}2 \\iff t > \\frac{\\ln(0{,}2)}{-0{,}75} \\approx 2{,}15\\text{ h}',
    },
    konanTip: 'La fonction exponentielle $\\exp$ est l’outil inverse du logarithme $\\ln$ : elle permet de passer d’une égalité $\\ln(u)=m$ à $u = e^m$ et réciproquement.',
    exercise: {
      id: 'tc_m_num_l07_p01_q01',
      type: 'mcq',
      prompt: 'Avec $M(t) = 50 e^{-0{,}75t}$, quelle masse de médicament est présente à l’instant initial $t = 0$ ?',
      options: [
        '$0\\text{ mg}$',
        '$50\\text{ mg}$',
        '$50e\\text{ mg}$',
        '$37{,}5\\text{ mg}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'À $t = 0$, $M(0) = 50 e^0 = 50 \\times 1 = 50\\text{ mg}$ (c’est la dose initiale administrée).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'L’exponentielle népérienne comme bijection réciproque de $\\ln$',
    paragraphText:
      'La fonction logarithme népérien $\\ln$ est continue et strictement croissante de $]0 ; +\\infty[$ sur $\\mathbb{R}$. Elle admet donc une bijection réciproque définie sur $\\mathbb{R}$ à valeurs dans $]0 ; +\\infty[$, appelée fonction exponentielle népérienne et notée $\\exp$ : $\\exp(x) = e^x$. Pour tout $x \\in \\mathbb{R}$ et tout $y > 0$ : $e^x = y \\iff x = \\ln y$.',
    formula: {
      name: 'Bijection réciproque de ln',
      formula: '\\exp : \\mathbb{R} \\to ]0 ; +\\infty[, \\quad e^x = y \\iff x = \\ln y \\quad (x \\in \\mathbb{R},\\; y > 0)',
    },
    exercise: {
      id: 'tc_m_num_l07_p01_q02',
      type: 'mcq',
      prompt: 'Quel est l’ensemble de définition et quel est le signe de $e^x$ pour tout réel $x$ ?',
      options: [
        'Définie sur $]0 ; +\\infty[$ et positive ou nulle',
        'Définie sur $\\mathbb{R}$ et strictement positive ($\\forall x \\in \\mathbb{R},\\; e^x > 0$)',
        'Définie sur $\\mathbb{R}$ et négative pour $x < 0$',
        'Définie sur $\\mathbb{R}^*$ et non nulle',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $\\ln$ envoie $]0 ; +\\infty[$ sur $\\mathbb{R}$, sa réciproque $\\exp$ est définie sur tout $\\mathbb{R}$ et prend uniquement des valeurs strictement positives ($e^x > 0$, jamais nulle ni négative !).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Identités réciproques',
    stepTheme: 'violet',
    stepTitle: 'Valeurs clés et annulation mutuelle de $\\exp$ et $\\ln$',
    paragraphText:
      'De la définition de la bijection réciproque découlent immédiatement : $e^0 = 1$, $e^1 = e$, $\\ln(e^y) = y$ pour tout réel $y \\in \\mathbb{R}$, et $e^{\\ln x} = x$ pour tout réel strictement positif $x > 0$. De plus, $\\exp$ est strictement croissante sur $\\mathbb{R}$ (même sens de variation que $\\ln$).',
    formula: {
      name: 'Réciprocité exp / ln',
      formula: '\\forall y \\in \\mathbb{R},\\; \\ln(e^y) = y \\quad ; \\quad \\forall x > 0,\\; e^{\\ln x} = x \\quad ; \\quad e^0 = 1,\\; e^1 = e',
    },
    exercise: {
      id: 'tc_m_num_l07_p01_q03',
      type: 'mcq',
      prompt: 'Simplifier respectivement $\\ln(\\sqrt{e})$ et $e^{x + \\ln 3}$ ($x \\in \\mathbb{R}$).',
      options: [
        '$\\frac{1}{2}$ et $3e^x$',
        '$2$ et $e^x + 3$',
        '$\\frac{1}{2}$ et $e^{3x}$',
        '$e^{1/2}$ et $3 + e^x$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\ln(\\sqrt{e}) = \\ln(e^{1/2}) = \\frac{1}{2}$ ; et $e^{x + \\ln 3} = e^x \\cdot e^{\\ln 3} = 3e^x$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Règles de calcul',
    stepTheme: 'violet',
    stepTitle: 'Propriétés algébriques de $e^x$ (sommes changées en produits)',
    paragraphText:
      'Pour tous réels $a, b \\in \\mathbb{R}$ et tout rationnel $r \\in \\mathbb{Q}$ (et même réel) : $e^{a+b} = e^a \\times e^b$, $e^{-b} = \\frac{1}{e^b}$, $\\frac{e^a}{e^b} = e^{a-b}$, et $(e^a)^r = e^{ar}$. L’exponentielle vérifie exactement les règles de calcul sur les puissances !',
    formula: {
      name: 'Formulaire algébrique de exp',
      formula: 'e^{a+b} = e^a e^b \\quad ; \\quad e^{-b} = \\frac{1}{e^b} \\quad ; \\quad \\frac{e^a}{e^b} = e^{a-b} \\quad ; \\quad (e^a)^r = e^{ar}',
    },
    exercise: {
      id: 'tc_m_num_l07_p01_q04',
      type: 'mcq',
      prompt: 'Simplifier $A = \\frac{e^5 \\times e^{-2}}{e^3}$ et $B = \\frac{e^x e^y}{e^{x - y}}$.',
      options: [
        '$A = 0$ et $B = e^{2x}$',
        '$A = 1$ et $B = e^{2y}$',
        '$A = e$ et $B = e^{2y}$',
        '$A = 1$ et $B = e^{2x - 2y}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$A = \\frac{e^{5-2}}{e^3} = \\frac{e^3}{e^3} = e^0 = 1$. Et $B = e^{(x+y)-(x-y)} = e^{2y}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Astuce d’algèbre',
    stepTheme: 'emerald',
    stepTitle: 'Transformer une expression avec $e^{-x}$ en mettant $e^x$ ou $e^{-x}$ en facteur',
    paragraphText:
      'Très utile pour les limites et les équations : puisque $e^x e^{-x} = 1$, on peut multiplier numérateur et dénominateur par $e^x$ pour éliminer les exposants négatifs. Par exemple, $\\frac{1}{1 + e^{-x}} = \\frac{e^x}{e^x + 1}$ et $(e^x)^3 e^{2x} = e^{5x}$.',
    exercise: {
      id: 'tc_m_num_l07_p01_q05',
      type: 'mcq',
      prompt: 'Simplifier $C = \\frac{e^{3x}}{(e^{-x})^2}$ pour tout réel $x$.',
      options: [
        '$e^x$',
        '$e^{5x}$',
        '$e^{-6x}$',
        '$e^{-x}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$(e^{-x})^2 = e^{-2x}$, donc $\\frac{e^{3x}}{e^{-2x}} = e^{3x - (-2x)} = e^{5x}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Pièges à éviter',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais confondre $e^{a+b}$ avec $e^a + e^b$, ni $e^{2x}$ avec $2e^x$',
    paragraphText:
      'Attention : $e^{a+b} = e^a \\cdot e^b$ (produit, pas somme !), $e^{2x} = (e^x)^2$ (carré, pas double !), et $e^{\\ln(x)}$ n’est défini que pour $x > 0$ (pas sur $\\mathbb{R}$ tout entier, contrairement à $\\ln(e^x) = x$ qui vaut pour tout $x \\in \\mathbb{R}$).',
    exercise: {
      id: 'tc_m_num_l07_p01_q06',
      type: 'mcq',
      prompt: 'Laquelle de ces égalités est VRAIE pour tout réel $x \\in \\mathbb{R}$ ?',
      options: [
        '$e^{\\ln x} = x$',
        '$\\ln(e^x) = x$',
        '$e^{2x} = 2e^x$',
        '$e^{x+1} = e^x + e$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour tout $x \\in \\mathbb{R}$, $e^x > 0$ donc $\\ln(e^x)$ existe toujours et vaut $x$. En revanche $e^{\\ln x} = x$ exige $x > 0$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Entraînement',
    stepTheme: 'slate',
    stepTitle: 'Réduire $\\frac{e^{-3}}{e^{-7}}$ et $(e^{-4})^3$',
    paragraphText:
      'En combinant les règles de quotient et de puissance : $\\frac{e^{-3}}{e^{-7}} = e^{-3 - (-7)} = e^4$, et $(e^{-4})^3 = e^{-12} = \\frac{1}{e^{12}}$. L’exponentielle transforme toute soustraction en quotient et tout produit en puissance.',
    exercise: {
      id: 'tc_m_num_l07_p01_q07',
      type: 'mcq',
      prompt: 'Que vaut $D = \\frac{e^{-3}}{e^{-7}} \\times (e^{-4})^3$ ?',
      options: [
        '$e^{-8}$',
        '$e^{-16}$',
        '$e^{16}$',
        '$e^{-2}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\frac{e^{-3}}{e^{-7}} = e^4$ et $(e^{-4})^3 = e^{-12}$, d’où $D = e^4 \\cdot e^{-12} = e^{-8}$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Équivalences clés',
    stepTheme: 'violet',
    stepTitle: 'Stricte croissance de $\\exp$ : comparaison de deux exponentielles',
    paragraphText:
      'Comme la fonction exponentielle est strictement croissante et bijective sur $\\mathbb{R}$, pour tous réels $a$ et $b$ : $e^a = e^b \\iff a = b$ et $e^a < e^b \\iff a < b$. On dispose également, pour tout réel $b$, de $e^a = b \\iff (b > 0 \\text{ et } a = \\ln b)$.',
    formula: {
      name: 'Comparaison d’exponentielles',
      formula: 'e^a = e^b \\iff a = b \\qquad ; \\qquad e^a < e^b \\iff a < b',
    },
    exercise: {
      id: 'tc_m_num_l07_p02_q01',
      type: 'mcq',
      prompt: 'Résoudre dans $\\mathbb{R}$ les équations $e^{2x - 1} = e^{x + 5}$ et $e^{x - 2} = 5$.',
      options: [
        '$S_1 = \\{6\\}$ et $S_2 = \\{2 + \\ln 5\\}$',
        '$S_1 = \\{4\\}$ et $S_2 = \\{\\ln 7\\}$',
        '$S_1 = \\{6\\}$ et $S_2 = \\{5 + \\ln 2\\}$',
        '$S_1 = \\{-6\\}$ et $S_2 = \\{2 - \\ln 5\\}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$2x - 1 = x + 5 \\iff x = 6$ ; et $e^{x - 2} = e^{\\ln 5} \\iff x - 2 = \\ln 5 \\iff x = 2 + \\ln 5$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Inéquations simples',
    stepTheme: 'emerald',
    stepTitle: 'Résoudre $e^{u(x)} < m$ ou $e^{u(x)} > 1$',
    paragraphText:
      'Si $m > 0$, on écrit $m = e^{\\ln m}$ (en particulier $1 = e^0$), puis on applique la stricte croissance de $\\exp$. Attention : si $m \\leqslant 0$, l’équation $e^{u(x)} = m$ et l’inéquation $e^{u(x)} \\leqslant m$ n’ont AUCUNE solution car $e^{u(x)} > 0$ toujours !',
    exercise: {
      id: 'tc_m_num_l07_p02_q02',
      type: 'mcq',
      prompt: 'Quel est l’ensemble solution dans $\\mathbb{R}$ de l’inéquation $e^{2x - 1} < 8$ ?',
      options: [
        '$\\left]-\\infty ; \\frac{1 + \\ln 8}{2}\\right]$',
        '$\\left]-\\infty ; \\frac{1 + \\ln 8}{2}\\right[$',
        '$\\left]\\frac{1 + \\ln 8}{2} ; +\\infty\\right[$',
        '$\\left]0 ; \\frac{1 + \\ln 8}{2}\\right[$',
      ],
      correctAnswerIndex: 1,
      explanation: '$e^{2x-1} < 8 \\iff 2x - 1 < \\ln 8 \\iff x < \\frac{1 + \\ln 8}{2}$. Le domaine de validité est $\\mathbb{R}$ entier (pas de contrainte $x > 0$ pour $e^x$ !).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Changement d’inconnue',
    stepTheme: 'emerald',
    stepTitle: 'Équations du $2^\\text{d}$ degré en $e^x$ : poser $X = e^x > 0$',
    paragraphText:
      'Pour résoudre $a e^{2x} + b e^x + c = 0$, on écrit $e^{2x} = (e^x)^2$ et on pose $X = e^x$ en n’oubliant JAMAIS la contrainte $X > 0$. On résout $aX^2 + bX + c = 0$, on rejette toute racine $X \\leqslant 0$, puis on résout $e^x = X \\iff x = \\ln X$ pour chaque racine strictement positive.',
    exercise: {
      id: 'tc_m_num_l07_p02_q03',
      type: 'mcq',
      prompt: 'Résoudre dans $\\mathbb{R}$ l’équation $e^{2x} + e^x - 6 = 0$.',
      options: [
        '$S = \\{\\ln 2 ; \\ln(-3)\\}$',
        '$S = \\{\\ln 2\\}$ uniquement',
        '$S = \\{-3 ; 2\\}$',
        '$S = \\{\\ln 3\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $X = e^x > 0$, $X^2 + X - 6 = 0$ a pour racines $X = -3$ (à rejeter car $X > 0$) et $X = 2$, d’où l’unique solution $x = \\ln 2$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Inéquation du 2d degré',
    stepTheme: 'blue',
    stepTitle: 'Inéquation $e^{2x} - 5e^x + 6 \\geqslant 0$',
    paragraphText:
      'En posant $X = e^x > 0$, l’inéquation devient $X^2 - 5X + 6 \\geqslant 0$. Le trinôme s’annule en $X = 2$ et $X = 3$ et est positif à l’extérieur des racines : $X \\in ]-\\infty ; 2] \\cup [3 ; +\\infty[$. Comme $X = e^x > 0$, cela donne $e^x \\leqslant 2$ ou $e^x \\geqslant 3$, c’est-à-dire $x \\leqslant \\ln 2$ ou $x \\geqslant \\ln 3$, soit $S = ]-\\infty ; \\ln 2] \\cup [\\ln 3 ; +\\infty[$.',
    exercise: {
      id: 'tc_m_num_l07_p02_q04',
      type: 'mcq',
      prompt: 'Quel est l’ensemble solution de $e^{2x} - 3e^x + 2 < 0$ dans $\\mathbb{R}$ ?',
      options: [
        '$]1 ; 2[$',
        '$]0 ; \\ln 2[$',
        '$]-\\infty ; 0[ \\cup ]\\ln 2 ; +\\infty[$',
        '$[0 ; \\ln 2]$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $X = e^x > 0$, $X^2 - 3X + 2 < 0 \\iff (X - 1)(X - 2) < 0 \\iff 1 < e^x < 2 \\iff \\ln 1 < x < \\ln 2$, soit $S = ]0 ; \\ln 2[$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Degré 3 en e^x (Ex 16)',
    stepTheme: 'blue',
    stepTitle: 'Factoriser $2e^{3x} - 7e^{2x} - 5e^x + 4 < 0$ grâce à un polynôme auxiliaire',
    paragraphText:
      'Soit $p(X) = 2X^3 - 7X^2 - 5X + 4$. On vérifie que $p(-1) = -2 - 7 + 5 + 4 = 0$, donc $p(X) = (X + 1)(2X^2 - 9X + 4) = (X + 1)(2X - 1)(X - 4)$. En posant $X = e^x > 0$, le facteur $(e^x + 1)$ est TOUJOURS strictement positif ! Le signe de $p(e^x)$ est donc uniquement celui de $(2e^x - 1)(e^x - 4)$, qui est strictement négatif pour $\\frac{1}{2} < e^x < 4$, soit $x \\in ]-\\ln 2 ; \\ln 4[$.',
    exercise: {
      id: 'tc_m_num_l07_p02_q05',
      type: 'mcq',
      prompt: 'Sachant que $2X^3 - 7X^2 - 5X + 4 = (X + 1)(2X - 1)(X - 4)$, quel est l’ensemble solution de $2e^{3x} - 7e^{2x} - 5e^x + 4 < 0$ ?',
      options: [
        '$]-1 ; \\frac{1}{2}[ \\cup ]4 ; +\\infty[$',
        '$]-\\ln 2 ; \\ln 4[$',
        '$]-\\infty ; -\\ln 2[ \\cup ]\\ln 4 ; +\\infty[$',
        '$]\\ln 2 ; \\ln 4[$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $e^x + 1 > 0$ pour tout $x \\in \\mathbb{R}$, $p(e^x) < 0 \\iff \\frac{1}{2} < e^x < 4 \\iff \\ln\\left(\\frac{1}{2}\\right) < x < \\ln 4 \\iff x \\in ]-\\ln 2 ; \\ln 4[$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège du signe de e^x',
    stepTheme: 'orange',
    stepTitle: 'Attention aux solutions impossibles comme $e^{-x} + 1 = 0$ ou $2^x + 1 + 2^{-x} = 0$',
    paragraphText:
      'Avant de calculer, regarde les signes ! Dans $(e^x - 2)(e^{-x} + 1) = 0$, le facteur $e^{-x} + 1$ est STRICTEMENT supérieur à $1$ pour tout $x \\in \\mathbb{R}$, donc seule $e^x - 2 = 0$ donne une solution ($x = \\ln 2$). De même, $2^x + 1 + 2^{-x} > 1 > 0$ pour tout $x$, donc l’équation $2^x + 1 + 2^{-x} = 0$ n’a aucune solution ($S = \\varnothing$).',
    exercise: {
      id: 'tc_m_num_l07_p02_q06',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des solutions réelles de l’inéquation $\\frac{e^x + 1}{x + 2} \\geqslant 0$ ?',
      options: [
        '$S = [-2 ; +\\infty[$',
        '$S = ]-2 ; +\\infty[$',
        '$S = ]-\\infty ; -2[$',
        '$S = \\mathbb{R}\\setminus\\{-2\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le numérateur $e^x + 1$ est strictement positif pour tout $x \\in \\mathbb{R}$ ; le signe du quotient est donc uniquement celui du dénominateur $x + 2$, avec $x + 2 \\ne 0$, soit $x > -2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Tableau de signes avec exp',
    stepTheme: 'slate',
    stepTitle: 'Étudier le signe d’un quotient mixte comme $\\frac{x(e^{-x} - 1)}{x - 3} \\geqslant 0$',
    paragraphText:
      'Pour une inéquation produit ou quotient mêlant $x$ et $e^x$, cherche où chaque facteur s’annule : $e^{-x} - 1 = 0 \\iff x = 0$ (positif pour $x < 0$, négatif pour $x > 0$ !), $x$ s’annule en $0$, donc $x(e^{-x} - 1) \\leqslant 0$ partout sur $\\mathbb{R}$ (nul en $0$). Il reste alors à combiner avec le signe de $x - 3$ !',
    exercise: {
      id: 'tc_m_num_l07_p02_q07',
      type: 'mcq',
      prompt: 'Quel est le signe de $x(e^{-x} - 1)$ pour tout réel $x \\ne 0$ ?',
      options: [
        'Toujours strictement positif',
        'Toujours strictement négatif (car $x$ et $e^{-x} - 1$ sont de signes contraires)',
        'Positif sur $]0 ; +\\infty[$ et négatif sur $]-\\infty ; 0[$',
        'Positif sur $]-\\infty ; 0[$ et négatif sur $]0 ; +\\infty[$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Si $x > 0$, $-x < 0 \\implies e^{-x} < 1 \\implies e^{-x} - 1 < 0$. Si $x < 0$, $-x > 0 \\implies e^{-x} > 1 \\implies e^{-x} - 1 > 0$. Ainsi $x$ et $e^{-x} - 1$ sont toujours de signes opposés, donc $x(e^{-x} - 1) < 0$ pour tout $x \\ne 0$ (et l’inéquation $\\frac{x(e^{-x}-1)}{x-3} \\geqslant 0$ a pour solution $S = ]-\\infty ; 3[$).',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Limites fondamentales',
    stepTheme: 'violet',
    stepTitle: 'Les $5$ limites de référence de la fonction exponentielle',
    paragraphText:
      'En $-\\infty$, $\\lim_{x \\to -\\infty} e^x = 0$ (l’axe des abscisses $y = 0$ est asymptote horizontale). En $+\\infty$, $\\lim_{x \\to +\\infty} e^x = +\\infty$. Par croissance comparée, $\\exp$ l’emporte sur $x$ : $\\lim_{x \\to +\\infty} \\frac{e^x}{x} = +\\infty$ (branche parabolique verticale) et $\\lim_{x \\to -\\infty} x e^x = 0$. Enfin, par nombre dérivé en $0$, $\\lim_{x \\to 0} \\frac{e^x - 1}{x} = \\exp’(0) = 1$.',
    formula: {
      name: 'Les 5 limites de exp',
      formula: '\\lim_{-\\infty} e^x = 0, \\quad \\lim_{+\\infty} e^x = +\\infty, \\quad \\lim_{-\\infty} x e^x = 0, \\quad \\lim_{+\\infty} \\frac{e^x}{x} = +\\infty, \\quad \\lim_{0} \\frac{e^x - 1}{x} = 1',
    },
    exercise: {
      id: 'tc_m_num_l07_p03_q01',
      type: 'mcq',
      prompt: 'Que valent respectivement $\\lim_{x \\to -\\infty} (x + 1)e^x$ et $\\lim_{x \\to +\\infty} x(e^{-x} + 1)$ ?',
      options: [
        '$0$ et $+\\infty$',
        '$-\\infty$ et $1$',
        '$0$ et $0$',
        '$+\\infty$ et $+\\infty$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(x + 1)e^x = xe^x + e^x \\xrightarrow[-\\infty]{} 0 + 0 = 0$. Et $x(e^{-x} + 1) = x\\left(\\frac{1}{e^x} + 1\\right) \\xrightarrow[+\\infty]{} (+\\infty) \\times (0 + 1) = +\\infty$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Dérivée & Variations',
    stepTheme: 'blue',
    stepTitle: 'Dérivée $(e^x)’ = e^x$, tableau de variations et tracé',
    paragraphText:
      'La fonction exponentielle est dérivable sur $\\mathbb{R}$ et elle est sa propre dérivée : pour tout $x \\in \\mathbb{R}$, $\\exp’(x) = e^x > 0$. Elle est donc strictement croissante de $0$ (en $-\\infty$) à $+\\infty$ (en $+\\infty$), passe par $(0 ; 1)$ (avec tangente $y = x + 1$, d’où $e^x \\geqslant x + 1$) et par $(1 ; e)$.',
    visualSchema: {
      type: 'variation_table',
      title: 'Tableau de variations de la fonction exp sur ℝ',
      variation: {
        xLabel: 'x',
        fLabel: 'exp(x)',
        xValues: ['−∞', '0', '1', '+∞'],
        values: [
          { text: '0', level: 'bottom' },
          { text: '1', level: 'middle' },
          { text: 'e', level: 'middle' },
          { text: '+∞', level: 'top' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l07_p03_q02',
      type: 'mcq',
      prompt: 'Quelle est l’équation de la tangente à la courbe de $x \\mapsto e^x$ au point d’abscisse $0$ ?',
      options: [
        '$y = x$',
        '$y = x + 1$',
        '$y = ex$',
        '$y = 1$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\exp(0) = 1$ et $\\exp’(0) = e^0 = 1$, donc $T_0 : y = 1(x - 0) + 1 = x + 1$. Par convexité ($\\exp’’(x) = e^x > 0$), on a $\\forall x \\in \\mathbb{R},\\; e^x \\geqslant x + 1$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Levée d’indétermination',
    stepTheme: 'emerald',
    stepTitle: 'Factoriser par $e^x$ ou par $x$ pour lever une forme indéterminée',
    paragraphText:
      'Pour calculer $\\lim_{x\\to+\\infty} \\frac{e^x + 1}{e^x + 2}$ ou $\\lim_{x\\to+\\infty} (3 - 2x + e^x)$ : divise numérateur et dénominateur par $e^x$ (dans le quotient) ou factorise par $e^x$ : $3 - 2x + e^x = e^x\\left(\\frac{3}{e^x} - 2\\frac{x}{e^x} + 1\\right) \\xrightarrow[+\\infty]{} +\\infty$ car $\\frac{x}{e^x} \\to 0$.',
    exercise: {
      id: 'tc_m_num_l07_p03_q03',
      type: 'mcq',
      prompt: 'Que valent les limites en $+\\infty$ et en $-\\infty$ de $f(x) = \\frac{e^x + 1}{e^x + 2}$ ?',
      options: [
        '$1$ en $+\\infty$ et $\\frac{1}{2}$ en $-\\infty$',
        '$\\frac{1}{2}$ en $+\\infty$ et $1$ en $-\\infty$',
        '$+\\infty$ en $+\\infty$ et $0$ en $-\\infty$',
        '$1$ en $+\\infty$ et $0$ en $-\\infty$',
      ],
      correctAnswerIndex: 0,
      explanation: 'En $+\\infty$, $f(x) = \\frac{1 + e^{-x}}{1 + 2e^{-x}} \\to \\frac{1}{1} = 1$. En $-\\infty$, $e^x \\to 0$, donc $f(x) \\to \\frac{0 + 1}{0 + 2} = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice du cours',
    stepTheme: 'blue',
    stepTitle: 'Limites de $g(x) = (2x - 3)e^{-x}$ et $h(x) = \\frac{xe^x}{x + 1}$',
    paragraphText:
      'Pour $g(x) = (2x - 3)e^{-x}$ en $-\\infty$ : $2x - 3 \\to -\\infty$ et $e^{-x} \\to +\\infty$, pas d’indétermination donc $\\lim_{-\\infty} g(x) = -\\infty$ ! En $+\\infty$ : $g(x) = 2\\frac{x}{e^x} - \\frac{3}{e^x} \\to 0$. Pour $h(x) = \\frac{x}{x + 1} e^x$ : en $+\\infty$, $\\frac{x}{x + 1} \\to 1$ et $e^x \\to +\\infty$ donc $+\\infty$ ; en $-\\infty$, $\\frac{xe^x}{x + 1} \\to \\frac{0}{-\\infty}$... plus proprement $\\frac{1}{1 + 1/x} \\cdot e^x \\to 1 \\times 0 = 0$.',
    exercise: {
      id: 'tc_m_num_l07_p03_q04',
      type: 'mcq',
      prompt: 'Que valent respectivement $\\lim_{x \\to +\\infty} \\frac{e^x + 2}{x + 2}$ et $\\lim_{x \\to -\\infty} \\frac{e^x + 2}{x + 2}$ ?',
      options: [
        '$+\\infty$ en $+\\infty$ et $0$ en $-\\infty$',
        '$1$ en $+\\infty$ et $-\\infty$ en $-\\infty$',
        '$0$ en $+\\infty$ et $0$ en $-\\infty$',
        '$+\\infty$ en $+\\infty$ et $1$ en $-\\infty$',
      ],
      correctAnswerIndex: 0,
      explanation: 'En $+\\infty$, $\\frac{e^x + 2}{x + 2} = \\frac{e^x}{x}\\cdot\\frac{1 + 2e^{-x}}{1 + 2/x} \\to (+\\infty)\\times 1 = +\\infty$. En $-\\infty$, le numérateur tend vers $2$ et le dénominateur vers $-\\infty$, donc la limite vaut $0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège du signe en −∞ !',
    stepTheme: 'orange',
    stepTitle: 'Attention : $e^{-x}$ tend vers $+\\infty$ en $-\\infty$ (et vers $0$ en $+\\infty$)',
    paragraphText:
      'Erreur très fréquente : croire que $e^{-x} \\to 0$ quand $x \\to -\\infty$ ! Lorsque $x \\to -\\infty$, $-x \\to +\\infty$, donc $e^{-x} \\to +\\infty$ et $e^x \\to 0$. Vérifie toujours le signe de l’exposant avant d’appliquer $\\lim e^u$.',
    exercise: {
      id: 'tc_m_num_l07_p03_q05',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to -\\infty} (e^x - 2x + 1)$ ?',
      options: [
        '$0$',
        '$-\\infty$',
        '$+\\infty$',
        '$1$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Quand $x \\to -\\infty$, $e^x \\to 0$ et $-2x \\to +\\infty$, donc $e^x - 2x + 1 \\to +\\infty$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Taux d’accroissement',
    stepTheme: 'blue',
    stepTitle: 'Utiliser $\\lim_{x\\to 0}\\frac{e^x - 1}{x} = 1$ pour des formes $0/0$',
    paragraphText:
      'Quand une expression tend vers $0/0$ en $0$ avec $e^{kx} - 1$, fais apparaître $\\frac{e^u - 1}{u}$ avec $u = kx \\to 0$. Par exemple, $\\frac{e^{3x} - 1}{2x} = \\frac{3}{2} \\cdot \\frac{e^{3x} - 1}{3x} \\xrightarrow[x\\to 0]{} \\frac{3}{2} \\times 1 = \\frac{3}{2}$.',
    exercise: {
      id: 'tc_m_num_l07_p03_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 0} \\frac{e^{2x} - 1}{x}$ ?',
      options: [
        '$1$',
        '$0$',
        '$2$',
        '$\\frac{1}{2}$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\frac{e^{2x} - 1}{x} = 2 \\cdot \\frac{e^{2x} - 1}{2x} \\xrightarrow[x\\to 0]{} 2 \\times 1 = 2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Courbe & asymptote',
    stepTheme: 'slate',
    stepTitle: 'Synthèse graphique sur $e^x$ et sa réciproque $\\ln x$',
    paragraphText:
      'Dans un repère orthonormé, la courbe $\\mathcal{C}_{\\exp}$ et la courbe $\\mathcal{C}_{\\ln}$ sont symétriques par rapport à la première bissectrice $(D) : y = x$. Ainsi, l’asymptote verticale $x = 0$ de $\\ln$ en $0^+$ correspond à l’asymptote horizontale $y = 0$ de $\\exp$ en $-\\infty$, et la branche parabolique horizontale de $\\ln$ en $+\\infty$ devient la branche parabolique verticale de $\\exp$ en $+\\infty$.',
    exercise: {
      id: 'tc_m_num_l07_p03_q07',
      type: 'mcq',
      prompt: 'Par quelle transformation géométrique passe-t-on de $\\mathcal{C}_{\\ln}$ à $\\mathcal{C}_{\\exp}$ dans un repère orthonormé ?',
      options: [
        'La symétrie centrale de centre $O$',
        'La symétrie orthogonale par rapport à la droite d’équation $y = x$',
        'La translation de vecteur $\\vec{j}$',
        'La symétrie par rapport à l’axe des abscisses',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les courbes de deux fonctions réciproques l’une de l’autre dans un repère orthonormé sont symétriques par rapport à la première bissectrice $y = x$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Dérivée de e^u',
    stepTheme: 'violet',
    stepTitle: 'Dériver une fonction composée $x \\mapsto e^{u(x)}$',
    paragraphText:
      'Si $u$ est une fonction dérivable sur un intervalle $K$, alors la fonction composée $x \\mapsto e^{u(x)}$ est dérivable sur $K$ et pour tout $x \\in K$, $(e^u)’(x) = u’(x) \\cdot e^{u(x)}$. En particulier, $(e^{ax+b})’ = a e^{ax+b}$ et $(e^{-x})’ = -e^{-x}$.',
    formula: {
      name: 'Dérivée de exp(u)',
      formula: '\\forall x \\in K,\\; \\left(e^{u(x)}\\right)’ = u’(x)\\, e^{u(x)}',
    },
    exercise: {
      id: 'tc_m_num_l07_p04_q01',
      type: 'mcq',
      prompt: 'Calculer les dérivées sur $\\mathbb{R}$ de $f(x) = e^{2\\cos x}$ et $g(x) = e^{x^3 - 4x - 1}$.',
      options: [
        '$f’(x) = (-2\\sin x)e^{2\\cos x}$ et $g’(x) = (3x^2 - 4)e^{x^3 - 4x - 1}$',
        '$f’(x) = (2\\sin x)e^{2\\cos x}$ et $g’(x) = (-3x^2 - 4)e^{x^3 - 4x - 1}$',
        '$f’(x) = e^{-2\\sin x}$ et $g’(x) = e^{3x^2 - 4}$',
        '$f’(x) = 2\\cos x\\,e^{2\\cos x}$ et $g’(x) = (3x^2 - 4)e^{3x^2 - 4}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(2\\cos x)’ = -2\\sin x$ et $(x^3 - 4x - 1)’ = 3x^2 - 4$ (attention : signe $+3x^2$, pas $-3x^2$ !).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Dérivées produits/quotients',
    stepTheme: 'emerald',
    stepTitle: 'Factoriser $e^x$ après dérivation d’un produit $P(x)e^x$',
    paragraphText:
      'Pour étudier le signe de la dérivée d’un produit comme $f(x) = (-2x + 5)e^x$ ou $g(x) = (-3x^2 + 5)e^x$, dérive par $(uv)’ = u’v + uv’$, puis FACTORISE immédiatement par $e^x$ ! Comme $e^x > 0$ partout sur $\\mathbb{R}$, le signe de la dérivée est simplement celui du facteur polynomial restant.',
    exercise: {
      id: 'tc_m_num_l07_p04_q02',
      type: 'mcq',
      prompt: 'Quelle est l’expression factorisée de la dérivée de $h(x) = (1 - x)e^x$ et de $g(x) = (-3x^2 + 5)e^x$ ?',
      options: [
        '$h’(x) = -xe^x$ et $g’(x) = (-3x^2 - 6x + 5)e^x$',
        '$h’(x) = (2 - x)e^x$ et $g’(x) = (-3x^2 + 6x + 5)e^x$',
        '$h’(x) = -e^x$ et $g’(x) = -6xe^x$',
        '$h’(x) = -xe^x$ et $g’(x) = (3x^2 - 6x + 5)e^x$',
      ],
      correctAnswerIndex: 0,
      explanation: '$h’(x) = -1\\cdot e^x + (1 - x)e^x = -xe^x$ ; et $g’(x) = -6xe^x + (-3x^2 + 5)e^x = (-3x^2 - 6x + 5)e^x$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Primitives de u’e^u',
    stepTheme: 'violet',
    stepTitle: 'Primitives des fonctions du type $u’(x) e^{u(x)}$',
    paragraphText:
      'Si $u$ est dérivable sur un intervalle $K$, les primitives sur $K$ de la fonction $x \\mapsto u’(x) e^{u(x)}$ sont les fonctions $x \\mapsto e^{u(x)} + c$ ($c \\in \\mathbb{R}$). En particulier, pour $a \\ne 0$, les primitives de $e^{ax + b}$ sont $\\frac{1}{a}e^{ax + b} + c$.',
    formula: {
      name: 'Primitives exponentielles composées',
      formula: '\\int u’(x)\\, e^{u(x)}\\,dx = e^{u(x)} + c \\qquad ; \\qquad \\int e^{ax+b}\\,dx = \\frac{1}{a}e^{ax+b} + c \\; (a \\ne 0)',
    },
    exercise: {
      id: 'tc_m_num_l07_p04_q03',
      type: 'mcq',
      prompt: 'Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = (\\sin 2x)e^{\\cos 2x}$ et de $g(x) = x e^{x^2}$ ?',
      options: [
        '$-\\frac{1}{2}e^{\\cos 2x} + c$ et $\\frac{1}{2}e^{x^2} + c$',
        '$\\frac{1}{2}e^{\\cos 2x} + c$ et $2e^{x^2} + c$',
        '$-2e^{\\cos 2x} + c$ et $\\frac{1}{2}x^2 e^{x^2} + c$',
        '$-\\frac{1}{2}e^{\\sin 2x} + c$ et $\\frac{1}{2}e^{x^2} + c$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Pour $u(x) = \\cos 2x$, $u’(x) = -2\\sin 2x$, d’où $f = -\\frac{1}{2}u’ e^u$ et $F(x) = -\\frac{1}{2}e^{\\cos 2x} + c$. Pour $u(x) = x^2$, $u’(x) = 2x$, d’où $g = \\frac{1}{2}u’ e^u$ et $G(x) = \\frac{1}{2}e^{x^2} + c$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Mixte exp et ln (Ex 9)',
    stepTheme: 'blue',
    stepTitle: 'Primitive de $\\frac{e^{2x}}{1 + e^{2x}}$ : reconnaître $\\frac{u’}{u}$ !',
    paragraphText:
      'Toutes les primitives contenant $e^x$ ne sont pas des $u’e^u$ ! Pour $f(x) = \\frac{e^{2x}}{1 + e^{2x}}$, posons $u(x) = 1 + e^{2x} > 0$. On a $u’(x) = 2e^{2x}$, donc $f(x) = \\frac{1}{2}\\cdot\\frac{u’(x)}{u(x)}$, dont les primitives sur $\\mathbb{R}$ sont $\\frac{1}{2}\\ln(1 + e^{2x}) + c$.',
    exercise: {
      id: 'tc_m_num_l07_p04_q04',
      type: 'mcq',
      prompt: 'Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = \\frac{e^{2x}}{1 + e^{2x}}$ et de $h(x) = x - 5 + 3e^{-2x+1}$ ?',
      options: [
        '$\\frac{1}{2}\\ln(1 + e^{2x}) + c$ et $\\frac{x^2}{2} - 5x - \\frac{3}{2}e^{-2x+1} + c$',
        '$\\ln(1 + e^{2x}) + c$ et $\\frac{x^2}{2} - 5x + 3e^{-2x+1} + c$',
        '$\\frac{1}{2}e^{2x} + c$ et $\\frac{x^2}{2} - 5x - 6e^{-2x+1} + c$',
        '$\\frac{1}{2}\\ln(1 + e^{2x}) + c$ et $\\frac{x^2}{2} - 5x + \\frac{3}{2}e^{-2x+1} + c$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\frac{e^{2x}}{1+e^{2x}} = \\frac{1}{2}\\frac{(1+e^{2x})’}{1+e^{2x}} \\to \\frac{1}{2}\\ln(1+e^{2x}) + c$. Et pour $3e^{-2x+1}$, on divise par $a = -2$ : $-\\frac{3}{2}e^{-2x+1}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Identification (Ex 20)',
    stepTheme: 'emerald',
    stepTitle: 'Trouver une primitive de $P(x)e^{kx}$ par identification de coefficients',
    paragraphText:
      'Pour trouver une primitive de $f(x) = (x^2 - 4)e^{2x}$ sous la forme $F(x) = (\\alpha x^2 + \\beta x + \\gamma)e^{2x}$ : dérive $F(x)$ en factorisant par $e^{2x}$ : $F’(x) = [2\\alpha x^2 + (2\\alpha + 2\\beta)x + (\\beta + 2\\gamma)]e^{2x}$. En identifiant à $(x^2 - 4)e^{2x}$, on résout $2\\alpha = 1$, $2\\alpha + 2\\beta = 0$ et $\\beta + 2\\gamma = -4$, d’où $\\alpha = \\frac{1}{2}$, $\\beta = -\\frac{1}{2}$ et $\\gamma = -\\frac{7}{4}$.',
    exercise: {
      id: 'tc_m_num_l07_p04_q05',
      type: 'mcq',
      prompt: 'Sachant que $F_0(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x}$ est une primitive de $(x^2 - 4)e^{2x}$, quelle est la primitive $F$ de $f$ qui s’annule en $0$ ?',
      options: [
        '$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x} - \\frac{7}{4}$',
        '$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x - \\frac{7}{4}\\right)e^{2x} + \\frac{7}{4}$',
        '$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x\\right)e^{2x}$',
        '$F(x) = \\left(\\frac{1}{2}x^2 - \\frac{1}{2}x + \\frac{7}{4}\\right)e^{2x} - \\frac{7}{4}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Toute primitive s’écrit $F(x) = F_0(x) + C$. Or $F(0) = -\\frac{7}{4}e^0 + C = -\\frac{7}{4} + C = 0 \\implies C = \\frac{7}{4}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège sur (e^u)’',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier $u’(x)$ devant, ni écrire $e^{u’(x)}$ !',
    paragraphText:
      'Deux fautes fréquentes sur les composées exponentielles : la dérivée de $e^{u(x)}$ n’est PAS $e^{u’(x)}$ (l’exposant reste inchangé : $u(x)$ !), et ce n’est pas non plus $e^{u(x)}$ sans le facteur $u’(x)$ devant. De même, $\\int e^{x^2}\\,dx$ ne peut pas se calculer élémentairement sans le facteur $x$ devant !',
    exercise: {
      id: 'tc_m_num_l07_p04_q06',
      type: 'mcq',
      prompt: 'Quelle est la dérivée de $k(x) = e^{-2x + 1}$ sur $\\mathbb{R}$ ?',
      options: [
        '$e^{-2}$',
        '$e^{-2x + 1}$',
        '$-2e^{-2x + 1}$',
        '$(-2x + 1)e^{-2x}$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Avec $u(x) = -2x + 1$ et $u’(x) = -2$, $(e^u)’ = u’ e^u = -2 e^{-2x + 1}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Dérivée d’un quotient (Ex 8)',
    stepTheme: 'slate',
    stepTitle: 'Dériver $h(x) = \\frac{e^x - 1}{x + 1}$ et $k(x) = \\frac{e^x + 2}{e^x - 1}$',
    paragraphText:
      'Pour $k(x) = \\frac{e^x + 2}{e^x - 1}$ ($x \\ne 0$) : $k’(x) = \\frac{e^x(e^x - 1) - (e^x + 2)e^x}{(e^x - 1)^2} = \\frac{-3e^x}{(e^x - 1)^2} < 0$. Et pour $h(x) = \\frac{e^x - 1}{x + 1}$ ($x \\ne -1$) : $h’(x) = \\frac{e^x(x + 1) - (e^x - 1)}{(x + 1)^2} = \\frac{xe^x + 1}{(x + 1)^2}$.',
    exercise: {
      id: 'tc_m_num_l07_p04_q07',
      type: 'mcq',
      prompt: 'Calculer la dérivée de $k(x) = \\frac{e^x + 2}{e^x - 1}$ sur $\\mathbb{R}^*$.',
      options: [
        '$k’(x) = \\frac{-3e^x}{(e^x - 1)^2}$',
        '$k’(x) = \\frac{3e^x}{(e^x - 1)^2}$',
        '$k’(x) = \\frac{e^{2x} - 3e^x}{(e^x - 1)^2}$',
        '$k’(x) = \\frac{-3}{(e^x - 1)^2}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\frac{e^x(e^x - 1) - (e^x + 2)e^x}{(e^x - 1)^2} = \\frac{e^{2x} - e^x - e^{2x} - 2e^x}{(e^x - 1)^2} = \\frac{-3e^x}{(e^x - 1)^2}$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Exponentielle base a',
    stepTheme: 'blue',
    stepTitle: 'Définition de la fonction exponentielle de base $a > 0$ : $a^x = e^{x\\ln a}$',
    paragraphText:
      'Soit $a > 0$ un réel strictement positif. On appelle fonction exponentielle de base $a$, notée $\\exp_a$, la fonction définie sur $\\mathbb{R}$ par $\\exp_a(x) = a^x = e^{x\\ln a}$. Pour tout $x \\in \\mathbb{R}$, $a^x > 0$. Si $a = 1$, $\\exp_1$ est constante égale à $1$ ; si $a = e$, on retrouve $e^x$.',
    formula: {
      name: 'Définition de a^x',
      formula: '\\forall a > 0,\\; \\forall x \\in \\mathbb{R},\\; \\exp_a(x) = a^x = e^{x\\ln a} > 0',
    },
    exercise: {
      id: 'tc_m_num_l07_p05_q01',
      type: 'mcq',
      prompt: 'Comment s’écrivent $5^x$ et $12^x$ sous la forme $e^{u(x)}$ ?',
      options: [
        '$e^{5\\ln x}$ et $e^{12\\ln x}$',
        '$e^{x\\ln 5}$ et $e^{x\\ln 12}$',
        '$e^{x + \\ln 5}$ et $e^{x + \\ln 12}$',
        '$5e^x$ et $12e^x$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par définition de l’exponentielle de base $a > 0$, $a^x = e^{x\\ln a}$, donc $5^x = e^{x\\ln 5}$ et $12^x = e^{x\\ln 12}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Dérivée, variations & limites',
    stepTheme: 'violet',
    stepTitle: 'Sens de variation et limites de $x \\mapsto a^x$ selon $a > 1$ ou $0 < a < 1$',
    paragraphText:
      'Pour $a > 0$ ($a \\ne 1$), $\\exp_a’(x) = (\\ln a)\\, a^x$. Si $a > 1$ ($\\ln a > 0$), $\\exp_a$ est strictement CROISSANTE avec $\\lim_{-\\infty} a^x = 0$ et $\\lim_{+\\infty} a^x = +\\infty$. Si $0 < a < 1$ ($\\ln a < 0$), $\\exp_a$ est strictement DÉCROISSANTE avec $\\lim_{-\\infty} a^x = +\\infty$ et $\\lim_{+\\infty} a^x = 0$ !',
    formula: {
      name: 'Variations et comparaison de a^x',
      formula: '\\exp_a’(x) = (\\ln a)\\,a^x \\implies \\begin{cases} a > 1 : a^x < a^y \\iff x < y \\\\ 0 < a < 1 : a^x < a^y \\iff x > y \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l07_p05_q02',
      type: 'mcq',
      prompt: 'Résoudre dans $\\mathbb{R}$ : $2^{x - 9} = 8^{3x + 1}$ et $(0{,}7)^{-x} < (0{,}7)^{-5x + 1}$.',
      options: [
        '$S_1 = \\left\\{-\\frac{3}{2}\\right\\}$ et $S_2 = \\left]\\frac{1}{4} ; +\\infty\\right[$',
        '$S_1 = \\left\\{-\\frac{3}{2}\\right\\}$ et $S_2 = \\left]-\\infty ; \\frac{1}{4}\\right[$',
        '$S_1 = \\left\\{\\frac{3}{2}\\right\\}$ et $S_2 = \\left]\\frac{1}{4} ; +\\infty\\right[$',
        '$S_1 = \\{-5\\}$ et $S_2 = \\left]\\frac{1}{4} ; +\\infty\\right[$',
      ],
      correctAnswerIndex: 0,
      explanation: '$2^{x-9} = 2^{3(3x+1)} \\iff x - 9 = 9x + 3 \\iff 8x = -12 \\iff x = -\\frac{3}{2}$. Et comme $0 < 0{,}7 < 1$, $(0{,}7)^{-x} < (0{,}7)^{-5x+1} \\iff -x > -5x + 1 \\iff 4x > 1 \\iff x > \\frac{1}{4}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'definition',
    stepBadge: 'Fonctions puissances',
    stepTheme: 'blue',
    stepTitle: 'Fonctions puissances d’exposant réel $\\alpha \\ne 0$ : $x^\\alpha = e^{\\alpha\\ln x}$',
    paragraphText:
      'Attention à ne pas confondre $a^x$ (variable en exposant, définie sur $\\mathbb{R}$) et $x^\\alpha$ (variable en base, exposant $\\alpha \\in \\mathbb{R}^*$ fixé) ! La fonction puissance $x \\mapsto x^\\alpha$ est définie sur $]0 ; +\\infty[$ par $x^\\alpha = e^{\\alpha\\ln x}$. Sa dérivée vaut $(x^\\alpha)’ = \\frac{\\alpha}{x} e^{\\alpha\\ln x} = \\alpha x^{\\alpha - 1}$ et toutes les règles usuelles sur les exposants ($x^\\alpha x^\\beta = x^{\\alpha+\\beta}$, $(x^\\alpha)^\\beta = x^{\\alpha\\beta}$) restent valables.',
    formula: {
      name: 'Fonction puissance x^α',
      formula: '\\forall \\alpha \\in \\mathbb{R}^*,\\; \\forall x > 0,\\; x^\\alpha = e^{\\alpha\\ln x} \\quad \\text{et} \\quad (x^\\alpha)’ = \\alpha x^{\\alpha - 1}',
    },
    exercise: {
      id: 'tc_m_num_l07_p05_q03',
      type: 'mcq',
      prompt: 'Sur quel intervalle la fonction $x \\mapsto x^{\\pi}$ est-elle définie via $e^{\\pi\\ln x}$, et quelle est sa dérivée ?',
      options: [
        'Définie sur $\\mathbb{R}$, dérivée $\\pi x^{\\pi - 1}$',
        'Définie sur $]0 ; +\\infty[$, dérivée $\\pi x^{\\pi - 1}$',
        'Définie sur $]0 ; +\\infty[$, dérivée $(\\ln\\pi)\\, x^\\pi$',
        'Définie sur $[0 ; +\\infty[$, dérivée $x^{\\pi - 1}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour un exposant irrationnel comme $\\pi$, $x^\\pi = e^{\\pi\\ln x}$ est définie sur $]0 ; +\\infty[$ (où $\\ln x$ existe) et sa dérivée vaut $\\pi x^{\\pi - 1}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Croissances comparées',
    stepTheme: 'violet',
    stepTitle: 'Les $4$ croissances comparées généralisées à tout exposant $\\alpha > 0$',
    paragraphText:
      'En $+\\infty$, l’exponentielle bat TOUTE puissance $x^\\alpha$ ($\\alpha > 0$), qui bat elle-même $\\ln x$. Pour tout réel $\\alpha > 0$ : $\\lim_{x\\to+\\infty} \\frac{\\ln x}{x^\\alpha} = 0$, $\\lim_{x\\to 0^+} x^\\alpha \\ln x = 0$, $\\lim_{x\\to+\\infty} \\frac{e^x}{x^\\alpha} = +\\infty$, et $\\lim_{x\\to+\\infty} x^\\alpha e^{-x} = 0$.',
    formula: {
      name: 'Échelle des croissances comparées (α > 0)',
      formula: '\\lim_{+\\infty} \\frac{\\ln x}{x^\\alpha} = 0 \\quad ; \\quad \\lim_{0^+} x^\\alpha\\ln x = 0 \\quad ; \\quad \\lim_{+\\infty} \\frac{e^x}{x^\\alpha} = +\\infty \\quad ; \\quad \\lim_{+\\infty} x^\\alpha e^{-x} = 0',
    },
    exercise: {
      id: 'tc_m_num_l07_p05_q04',
      type: 'mcq',
      prompt: 'Calculer dans l’ordre : $\\lim_{x\\to+\\infty} \\frac{\\ln x}{x^5}$, $\\lim_{x\\to 0^+} x^2\\ln x$, $\\lim_{x\\to+\\infty} \\frac{e^x}{x^3}$ et $\\lim_{x\\to+\\infty} x^8 e^{-x}$.',
      options: [
        '$0$, $0$, $+\\infty$, $0$',
        '$+\\infty$, $0$, $+\\infty$, $+\\infty$',
        '$0$, $-\\infty$, $0$, $0$',
        '$0$, $0$, $0$, $+\\infty$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Application directe des $4$ croissances comparées avec $\\alpha = 5, 2, 3, 8 > 0$ : respectivement $0$, $0$, $+\\infty$ et $0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège a^x vs x^α',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre la dérivée de $a^x$ ($(\\ln a)\\, a^x$) et celle de $x^a$ ($a x^{a-1}$)',
    paragraphText:
      'Erreur classique : dériver $2^x$ en $x 2^{x-1}$ ! La formule $\\alpha x^{\\alpha - 1}$ s’applique quand la BASE est la variable $x$ et l’exposant est constant. Quand l’EXPOSANT est la variable $x$ ($2^x = e^{x\\ln 2}$), on dérive comme $e^{u(x)}$ : $(2^x)’ = (\\ln 2)\\, 2^x$ !',
    exercise: {
      id: 'tc_m_num_l07_p05_q05',
      type: 'mcq',
      prompt: 'Quelle est la dérivée sur $\\mathbb{R}$ de $f(x) = 3^x$ ?',
      options: [
        '$f’(x) = x \\cdot 3^{x - 1}$',
        '$f’(x) = (\\ln 3)\\, 3^x$',
        '$f’(x) = 3^x$',
        '$f’(x) = \\frac{3^x}{\\ln 3}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$3^x = e^{x\\ln 3}$, donc $(3^x)’ = (\\ln 3)\\, e^{x\\ln 3} = (\\ln 3)\\, 3^x$. (C’est $\\frac{3^x}{\\ln 3}$ qui est une primitive de $3^x$ !)',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Comparaison 0 < a < 1',
    stepTheme: 'blue',
    stepTitle: 'Calculer $\\lim_{x\\to+\\infty} (0{,}8)^x$ et $\\lim_{x\\to-\\infty} (0{,}8)^x$',
    paragraphText:
      'Comme $0 < 0{,}8 < 1$, $\\ln(0{,}8) < 0$. Quand $x \\to +\\infty$, $x\\ln(0{,}8) \\to -\\infty$, donc $(0{,}8)^x = e^{x\\ln(0{,}8)} \\to 0$. À l’inverse, quand $x \\to -\\infty$, $x\\ln(0{,}8) \\to +\\infty$, donc $(0{,}8)^x \\to +\\infty$.',
    exercise: {
      id: 'tc_m_num_l07_p05_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to -\\infty} \\left(\\frac{2}{3}\\right)^x$ ?',
      options: [
        '$0$',
        '$1$',
        '$+\\infty$',
        '$-\\infty$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Comme $0 < \\frac{2}{3} < 1$, $\\ln\\left(\\frac{2}{3}\\right) < 0$ ; lorsque $x \\to -\\infty$, l’exposant $x\\ln\\left(\\frac{2}{3}\\right)$ tend vers $+\\infty$, donc $\\left(\\frac{2}{3}\\right)^x \\to +\\infty$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Limites de x^α en 0+',
    stepTheme: 'slate',
    stepTitle: 'Comportement de $x^\\alpha$ en $0^+$ et $+\\infty$ selon le signe de $\\alpha$',
    paragraphText:
      'Pour $x^\\alpha = e^{\\alpha\\ln x}$ sur $]0 ; +\\infty[$ : si $\\alpha > 0$, $\\lim_{0^+} x^\\alpha = 0$ et $\\lim_{+\\infty} x^\\alpha = +\\infty$ (croissante) ; si $\\alpha < 0$, $\\lim_{0^+} x^\\alpha = +\\infty$ et $\\lim_{+\\infty} x^\\alpha = 0$ (décroissante).',
    exercise: {
      id: 'tc_m_num_l07_p05_q07',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 0^+} x^{-0{,}3}$ et quel est le sens de variation de $x \\mapsto x^{-0{,}3}$ sur $]0 ; +\\infty[$ ?',
      options: [
        'Limite $0$, croissante',
        'Limite $+\\infty$, strictement décroissante',
        'Limite $0$, décroissante',
        'Limite $-\\infty$, croissante',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $\\alpha = -0{,}3 < 0$ : quand $x \\to 0^+$, $\\ln x \\to -\\infty$, donc $\\alpha\\ln x \\to +\\infty$ et $e^{\\alpha\\ln x} \\to +\\infty$. La dérivée $-0{,}3 x^{-1{,}3} < 0$ confirme la décroissance.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe (Marketing)',
    stepTheme: 'blue',
    stepTitle: 'Campagne publicitaire : $P(t) = 1 - e^{-0{,}21t}$',
    paragraphText:
      'La proportion de la population informée après $t$ jours de publicité est $P(t) = 1 - e^{-0{,}21t}$. Pour atteindre au moins $90\\%$ ($P(t) \\geqslant 0{,}9$), on résout $1 - e^{-0{,}21t} \\geqslant 0{,}9 \\iff e^{-0{,}21t} \\leqslant 0{,}1 \\iff -0{,}21t \\leqslant \\ln(0{,}1) \\iff t \\geqslant \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$. Il faut donc $11$ jours (plus d’une semaine de $7$ jours !).',
    exercise: {
      id: 'tc_m_num_l07_p06_q01',
      type: 'mcq',
      prompt: 'Avec le modèle $P(t) = 1 - e^{-0{,}21t}$, au bout de combien de jours entiers dépasse-t-on $90\\%$ de la population informée ?',
      options: [
        '$7$ jours',
        '$10$ jours',
        '$11$ jours',
        '$21$ jours',
      ],
      correctAnswerIndex: 2,
      explanation: '$t \\geqslant \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$, donc le plus petit entier est $t = 11$ jours.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Démographie & Économie (Ex 27-28)',
    stepTheme: 'blue',
    stepTitle: 'Seuil d’une population $10\\,200 e^{0{,}5n}$ et d’un pouvoir d’achat $0{,}95^t$',
    paragraphText:
      'Ex 27 : la population passe de $10\\,200$ à $10\\,200 e^{0{,}5n}$. Elle dépasse $20\\,000$ habitants lorsque $e^{0{,}5n} > \\frac{200}{102} \\iff n > 2\\ln\\left(\\frac{100}{51}\\right) \\approx 1{,}35$, soit au bout de $2$ années. Ex 28 : le pouvoir d’achat $A(t) = 0{,}95^t$ est divisé par $2$ lorsque $(0{,}95)^t \\leqslant 0{,}5 \\iff t \\geqslant \\frac{\\ln(0{,}5)}{\\ln(0{,}95)} \\approx 13{,}51$, soit $14$ ans.',
    exercise: {
      id: 'tc_m_num_l07_p06_q02',
      type: 'mcq',
      prompt: 'Si le pouvoir d’achat d’un dollar suit $A(t) = (0{,}95)^t$, au bout de combien d’années entières aura-t-il perdu au moins la moitié de sa valeur ?',
      options: [
        '$10$ ans',
        '$13$ ans',
        '$14$ ans',
        '$20$ ans',
      ],
      correctAnswerIndex: 2,
      explanation: '$(0{,}95)^t \\leqslant 0{,}5 \\iff t\\ln(0{,}95) \\leqslant \\ln(0{,}5) \\iff t \\geqslant \\frac{\\ln(0{,}5)}{\\ln(0{,}95)} \\approx 13{,}51$ (attention à l’inversion car $\\ln(0{,}95) < 0$), soit $14$ ans.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Étude Ex 21 & 23',
    stepTheme: 'emerald',
    stepTitle: 'Asymptote oblique et position relative avec $e^x$',
    paragraphText:
      'Pour $f(x) = 1 - x + e^x$ sur $\\mathbb{R}$ (Ex 23) : en $-\\infty$, $\\lim_{x\\to-\\infty} [f(x) - (-x + 1)] = \\lim_{x\\to-\\infty} e^x = 0$, donc la droite $(\\Delta) : y = -x + 1$ est asymptote oblique à $\\mathcal{C}_f$ en $-\\infty$. De plus, $f(x) - (-x + 1) = e^x > 0$ partout : $\\mathcal{C}_f$ est toujours strictement AU-DESSUS de $(\\Delta)$ !',
    visualSchema: {
      type: 'variation_table',
      title: 'Tableau de variations de f(x) = (−2x + 3)e^x sur ]−∞ ; 2] (Ex 21)',
      variation: {
        xLabel: 'x',
        fLabel: 'f(x)',
        xValues: ['−∞', '1/2', '2'],
        values: [
          { text: '0', level: 'bottom' },
          { text: '2√e', level: 'top' },
          { text: '−e²', level: 'bottom' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l07_p06_q03',
      type: 'mcq',
      prompt: 'Pour $f(x) = 1 - x + e^x$, quel est le minimum de $f$ sur $\\mathbb{R}$ et la position de $\\mathcal{C}_f$ par rapport à $y = -x + 1$ ?',
      options: [
        'Minimum $2$ atteint en $x = 0$, et $\\mathcal{C}_f$ toujours au-dessus de $(\\Delta)$',
        'Minimum $1$ atteint en $x = 0$, et $\\mathcal{C}_f$ en dessous de $(\\Delta)$',
        'Maximum $2$ atteint en $x = 0$, et $\\mathcal{C}_f$ coupe $(\\Delta)$ en $0$',
        'Pas d’extremum',
      ],
      correctAnswerIndex: 0,
      explanation: '$f’(x) = -1 + e^x$ s’annule en $x = 0$ ($<0$ avant, $>0$ après), d’où un minimum $f(0) = 2$. Et $f(x) - (-x + 1) = e^x > 0$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Fonction auxiliaire (Ex 24)',
    stepTheme: 'emerald',
    stepTitle: 'Fonction auxiliaire $g(x) = 1 - x - 2e^{-x}$ et étude de $f(x) = xe^{-x} + e^{-2x}$',
    paragraphText:
      'Dans l’exercice 24, on étudie d’abord $g(x) = 1 - x - 2e^{-x}$ : $g’(x) = -1 + 2e^{-x}$ s’annule en $x = \\ln 2$ (car $e^{-x} = \\frac{1}{2} \\iff x = \\ln 2$). Le maximum de $g$ vaut $g(\\ln 2) = 1 - \\ln 2 - 2(\\frac{1}{2}) = -\\ln 2 < 0$, donc $\\forall x \\in \\mathbb{R},\\; g(x) < 0$. Pour $f(x) = e^{-2x}(xe^x + 1) = xe^{-x} + e^{-2x}$, on obtient $f’(x) = e^{-x}(1 - x - 2e^{-x}) = e^{-x}g(x) < 0$ : $f$ est strictement décroissante de $+\\infty$ (en $-\\infty$) à $0$ (en $+\\infty$) !',
    exercise: {
      id: 'tc_m_num_l07_p06_q04',
      type: 'mcq',
      prompt: 'Sachant que $f(x) = xe^{-x} + e^{-2x}$ vérifie $f’(x) = e^{-x}g(x)$ et $g(0) = -1$, que valent $f(0)$ et $(f^{-1})’(1)$ ?',
      options: [
        '$f(0) = 1$ et $(f^{-1})’(1) = 1$',
        '$f(0) = 1$ et $(f^{-1})’(1) = -1$',
        '$f(0) = 2$ et $(f^{-1})’(1) = -1$',
        '$f(0) = 0$ et $(f^{-1})’(1) = -\\frac{1}{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(0) = 0 + e^0 = 1$. Comme $f(0) = 1$ et $f’(0) = e^0 g(0) = -1 \\ne 0$, la dérivée de la réciproque en $1$ vaut $(f^{-1})’(1) = \\frac{1}{f’(0)} = -1$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Tangente parallèle (Ex 25)',
    stepTheme: 'blue',
    stepTitle: 'Trouver le point où la tangente est parallèle à l’asymptote $y = 2 - x$',
    paragraphText:
      'Pour $f(x) = (2 - x)e^x + 2 - x$, l’asymptote en $-\\infty$ est $(\\mathcal{D}) : y = 2 - x$ (de coefficient directeur $-1$) et $f’(x) = h(x) = (1 - x)e^x - 1$. La tangente $(\\mathcal{T})$ est parallèle à $(\\mathcal{D})$ au point $K(x_0 ; f(x_0))$ tel que $f’(x_0) = -1 \\iff (1 - x_0)e^{x_0} - 1 = -1 \\iff 1 - x_0 = 0 \\iff x_0 = 1$, d’où $K(1 ; e + 1)$.',
    exercise: {
      id: 'tc_m_num_l07_p06_q05',
      type: 'mcq',
      prompt: 'Pour $f(x) = (2 - x)e^x + 2 - x$, en quel point $K$ la tangente à $\\mathcal{C}_f$ est-elle parallèle à la droite $(\\mathcal{D}) : y = 2 - x$ ?',
      options: [
        '$K(0 ; 4)$',
        '$K(1 ; e + 1)$',
        '$K(2 ; 0)$',
        '$K(1 ; e)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f’(x) = -1 \\iff (1 - x)e^x - 1 = -1 \\iff (1 - x)e^x = 0 \\iff x = 1$. Et $f(1) = (2 - 1)e^1 + 2 - 1 = e + 1$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur classique sur (f^-1)’',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre $(f^{-1})’(y_0) = \\frac{1}{f’(x_0)}$ avec $\\frac{1}{f’(y_0)}$',
    paragraphText:
      'Piège classique dans les questions sur la bijection réciproque $f^{-1}$ : pour calculer $(f^{-1})’(y_0)$, on cherche D’ABORD l’antécédent $x_0$ tel que $f(x_0) = y_0$, puis on calcule $\\frac{1}{f’(x_0)}$ (en $x_0$, pas en $y_0$ !). Vérifie toujours que $f’(x_0) \\ne 0$.',
    exercise: {
      id: 'tc_m_num_l07_p06_q06',
      type: 'mcq',
      prompt: 'Si $f$ est bijective dérivable avec $f(2) = 5$ et $f’(2) = 4$, que vaut $(f^{-1})’(5)$ ?',
      options: [
        '$\\frac{1}{f’(5)}$',
        '$\\frac{1}{4}$',
        '$4$',
        '$\\frac{1}{5}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $f(2) = 5$, on a $f^{-1}(5) = 2$ et $(f^{-1})’(5) = \\frac{1}{f’(2)} = \\frac{1}{4}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan du chapitre',
    stepTheme: 'slate',
    stepTitle: 'Synthèse : exp, ln, base $a$ et fonctions puissances',
    paragraphText:
      'Récapitulatif : 1) $\\exp(x) = e^x > 0$ sur $\\mathbb{R}$, $(e^u)’ = u’e^u$, $\\int u’e^u = e^u + c$ ; 2) $a^x = e^{x\\ln a}$ sur $\\mathbb{R}$, croissante si $a > 1$, décroissante si $0 < a < 1$ ; 3) $x^\\alpha = e^{\\alpha\\ln x}$ sur $]0 ; +\\infty[$ ; 4) En $+\\infty$, $e^x$ domine $x^\\alpha$, qui domine $\\ln x$.',
    exercise: {
      id: 'tc_m_num_l07_p06_q07',
      type: 'mcq',
      prompt: 'Parmi ces affirmations, laquelle est TOUJOURS exacte ?',
      options: [
        '$\\lim_{x\\to+\\infty} \\frac{x^{100}}{e^x} = +\\infty$',
        '$\\lim_{x\\to+\\infty} \\frac{e^x}{x^{100}} = +\\infty$',
        '$\\lim_{x\\to+\\infty} \\frac{\\ln x}{x^{0{,}01}} = +\\infty$',
        '$\\lim_{x\\to 0^+} x^{0{,}1}\\ln x = -\\infty$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par croissance comparée, pour tout $\\alpha > 0$ (même $\\alpha = 100$ ou $\\alpha = 0{,}01$), $e^x$ l’emporte sur $x^\\alpha$ en $+\\infty$ ($\\frac{e^x}{x^{100}} \\to +\\infty$), tandis que $x^\\alpha$ l’emporte sur $\\ln x$ ($\\frac{\\ln x}{x^{0{,}01}} \\to 0$ et $x^{0{,}1}\\ln x \\to 0$).',
    },
  },
];

export const MATHS_TLE_C_L07_EXPONENTIELLES_PUISSANCES: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l07_exponentielles_puissances',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 8,
  title: 'Leçon 7 : Fonctions exponentielles et fonctions puissances',
  summary:
    'Exponentielle népérienne (réciproque de ln, propriétés algébriques, équations/inéquations, limites, dérivée u′e^u, primitives), exponentielle de base a, fonctions puissances x^α, croissances comparées et études complètes.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l07_exponentielles_puissances_p01',
      order: 1,
      title: 'Définition de exp, propriétés algébriques et réciprocité avec ln',
      summary:
        'Définir exp comme bijection réciproque de ln sur ℝ, retenir exp(x) > 0, ln(e^y) = y, e^(ln x) = x et les règles algébriques e^(a+b) = e^a e^b.',
      conceptExplanation:
        'La fonction exponentielle népérienne exp est la bijection réciproque de ln. Définie sur ℝ tout entier à valeurs dans ]0 ; +∞[, elle est toujours strictement positive et transforme les sommes en produits.',
      keyRule: '∀ x ∈ ℝ, e^x > 0 et ln(e^x) = x ; ∀ y > 0, e^(ln y) = y.',
      formulas: [
        { name: 'Réciprocité', formula: 'e^x = y \\iff x = \\ln y \\quad (x \\in \\mathbb{R},\\; y > 0)' },
        { name: 'Produit & quotient', formula: 'e^{a+b} = e^a e^b \\quad ; \\quad \\frac{e^a}{e^b} = e^{a-b} \\quad ; \\quad (e^a)^r = e^{ar}' },
      ],
      workedExample: {
        title: 'Simplification d’expressions avec exp et ln',
        statement: 'Simplifier $\\ln(\\sqrt{e})$, $e^{x + \\ln 3}$ et $\\frac{e^{3x}}{(e^{-x})^2}$.',
        methodSteps: [
          '$\\ln(\\sqrt{e}) = \\ln(e^{1/2}) = \\frac{1}{2}$.',
          '$e^{x + \\ln 3} = e^x e^{\\ln 3} = 3e^x$.',
          '$\\frac{e^{3x}}{(e^{-x})^2} = \\frac{e^{3x}}{e^{-2x}} = e^{5x}$.',
        ],
        conclusion: 'Les expressions valent respectivement $\\frac{1}{2}$, $3e^x$ et $e^{5x}$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l07_exponentielles_puissances_p02',
      order: 2,
      title: 'Équations et inéquations avec l’exponentielle',
      summary:
        'Résoudre e^a = e^b, e^a < e^b, les équations et inéquations du 2nd degré ou degré 3 en posant X = e^x > 0, et utiliser les signes stricts (e^x > 0).',
      conceptExplanation:
        'Par stricte croissance et positivité de exp, e^a < e^b ⇔ a < b et e^u = m n’a de solution que si m > 0 (u = ln m). Pour les polynômes en e^x, le changement d’inconnue X = e^x > 0 permet d’écarter immédiatement les racines négatives ou nulles.',
      keyRule: 'Toujours poser X = e^x > 0 lors d’un changement d’inconnue pour rejeter X ≤ 0.',
      formulas: [
        { name: 'Équivalences', formula: 'e^a = e^b \\iff a = b \\quad ; \\quad e^a < e^b \\iff a < b' },
      ],
      workedExample: {
        title: 'Équation du second degré en e^x',
        statement: 'Résoudre dans $\\mathbb{R}$ l’équation $e^{2x} + e^x - 6 = 0$.',
        methodSteps: [
          'Poser $X = e^x > 0$ : $X^2 + X - 6 = 0$.',
          'Résoudre : $X_1 = -3$ (rejeté car $X > 0$) et $X_2 = 2$.',
          'Revenir à $x$ : $e^x = 2 \\iff x = \\ln 2$.',
        ],
        conclusion: 'L’ensemble des solutions est $S = \\{\\ln 2\\}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l07_exponentielles_puissances_p03',
      order: 3,
      title: 'Limites de référence, variations et courbe de exp',
      summary:
        'Maîtriser les 5 limites de exp (−∞, +∞, xe^x, e^x/x, (e^x−1)/x), la dérivée (e^x)′ = e^x, la tangente y = x + 1 et la symétrie avec ln.',
      conceptExplanation:
        'La fonction exp est strictement croissante de 0 (asymptote horizontale en −∞) vers +∞ (branche parabolique verticale en +∞). En +∞ elle domine x, et en −∞ elle tend vers 0 plus vite que 1/x. Sa courbe est symétrique de celle de ln par rapport à y = x.',
      keyRule: 'exp′(x) = e^x > 0 ; attention au signe de l’exposant pour e^(−x) en −∞ et +∞.',
      formulas: [
        { name: 'Croissances comparées', formula: '\\lim_{x\\to-\\infty} x e^x = 0 \\quad ; \\quad \\lim_{x\\to+\\infty} \\frac{e^x}{x} = +\\infty' },
        { name: 'Nombre dérivé en 0', formula: '\\lim_{x\\to 0} \\frac{e^x - 1}{x} = 1' },
      ],
      workedExample: {
        title: 'Calcul de limites avec factorisation par e^x',
        statement: 'Calculer $\\lim_{x\\to+\\infty} \\frac{e^x + 1}{e^x + 2}$ et $\\lim_{x\\to-\\infty} (x + 1)e^x$.',
        methodSteps: [
          'En $+\\infty$, diviser par $e^x$ : $\\frac{1 + e^{-x}}{1 + 2e^{-x}} \\to \\frac{1 + 0}{1 + 0} = 1$.',
          'En $-\\infty$, développer : $xe^x + e^x \\to 0 + 0 = 0$.',
        ],
        conclusion: 'Les limites valent respectivement $1$ et $0$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l07_exponentielles_puissances_p04',
      order: 4,
      title: 'Dérivées de e^u et primitives de u′e^u',
      summary:
        'Calculer (e^u)′ = u′e^u, factoriser e^x dans les dérivées de produits, primitiver u′e^u et e^(ax+b), et identifier les primitives de P(x)e^(kx).',
      conceptExplanation:
        'La dérivation composée donne (e^u)′ = u′e^u, formule clé pour étudier toute fonction exponentielle composée. En sens inverse, reconnaître u′e^u donne immédiatement la primitive e^u + c, et les fractions du type e^(2x)/(1 + e^(2x)) relèvent de u′/u.',
      keyRule: '(e^u)′ = u′e^u (l’exposant u reste identique) ; ∫ u′e^u dx = e^u + c.',
      formulas: [
        { name: 'Dérivée composée', formula: '\\left(e^{u(x)}\\right)’ = u’(x)\\, e^{u(x)}' },
        { name: 'Primitive composée', formula: '\\int u’(x)\\, e^{u(x)}\\,dx = e^{u(x)} + c' },
      ],
      workedExample: {
        title: 'Primitive par ajustement de u′',
        statement: 'Déterminer les primitives sur $\\mathbb{R}$ de $f(x) = (\\sin 2x)e^{\\cos 2x}$.',
        methodSteps: [
          'Poser $u(x) = \\cos 2x$, d’où $u’(x) = -2\\sin 2x$.',
          'Réécrire $f(x) = -\\frac{1}{2} u’(x) e^{u(x)}$.',
        ],
        conclusion: 'Les primitives sur $\\mathbb{R}$ sont $F(x) = -\\frac{1}{2}e^{\\cos 2x} + c$ ($c \\in \\mathbb{R}$).',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l07_exponentielles_puissances_p05',
      order: 5,
      title: 'Exponentielle de base a, fonctions puissances x^α et croissances comparées',
      summary:
        'Définir a^x = e^(x ln a) sur ℝ et x^α = e^(α ln x) sur ]0 ; +∞[, distinguer leurs dérivées et appliquer les 4 croissances comparées.',
      conceptExplanation:
        'Toute fonction exponentielle de base a > 0 s’écrit e^(x ln a) et varie dans le sens donné par le signe de ln a (croissante si a > 1, décroissante si 0 < a < 1). Toute fonction puissance x^α (α ≠ 0) est définie sur ]0 ; +∞[ par e^(α ln x) et se dérive en α x^(α−1).',
      keyRule: '(a^x)′ = (ln a) a^x sur ℝ ; (x^α)′ = α x^(α−1) sur ]0 ; +∞[.',
      formulas: [
        { name: 'Base a et puissance α', formula: 'a^x = e^{x\\ln a} \\; (x \\in \\mathbb{R}) \\qquad ; \\qquad x^\\alpha = e^{\\alpha\\ln x} \\; (x > 0)' },
        { name: 'Croissances comparées', formula: '\\lim_{+\\infty} \\frac{e^x}{x^\\alpha} = +\\infty \\quad ; \\quad \\lim_{+\\infty} \\frac{\\ln x}{x^\\alpha} = 0 \\; (\\alpha > 0)' },
      ],
      workedExample: {
        title: 'Inéquation avec base 0 < a < 1',
        statement: 'Résoudre dans $\\mathbb{R}$ l’inéquation $(0{,}7)^{-x} < (0{,}7)^{-5x + 1}$.',
        methodSteps: [
          'La base $a = 0{,}7$ vérifie $0 < a < 1$, donc $\\exp_{0{,}7}$ est strictement décroissante.',
          'L’inégalité sur les exposants s’inverse : $-x > -5x + 1 \\iff 4x > 1 \\iff x > \\frac{1}{4}$.',
        ],
        conclusion: 'L’ensemble des solutions est $S = \\left]\\frac{1}{4} ; +\\infty\\right[$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l07_exponentielles_puissances_p06',
      order: 6,
      title: 'Modélisation, situations complexes et études complètes',
      summary:
        'Résoudre des problèmes concrets (publicité, population, pouvoir d’achat) et étudier des fonctions complètes avec fonction auxiliaire, asymptote oblique et bijection réciproque.',
      conceptExplanation:
        'Les problèmes d’examen combinent une fonction auxiliaire pour connaître le signe de f′(x), une asymptote oblique en −∞ grâce à e^x → 0, et le calcul de (f⁻¹)′(y₀) = 1/f′(x₀) après avoir résolu f(x₀) = y₀.',
      keyRule: 'Pour (f⁻¹)′(y₀), trouver d’abord x₀ tel que f(x₀) = y₀ puis calculer 1/f′(x₀).',
      formulas: [
        { name: 'Dérivée de la réciproque', formula: '(f^{-1})’(y_0) = \\frac{1}{f’(x_0)} \\quad \\text{avec } f(x_0) = y_0' },
      ],
      workedExample: {
        title: 'Campagne publicitaire (situation complexe)',
        statement: 'Pour $P(t) = 1 - e^{-0{,}21t}$, déterminer le nombre minimal de jours entiers pour atteindre $90\\%$.',
        methodSteps: [
          'Poser $1 - e^{-0{,}21t} \\geqslant 0{,}9 \\iff e^{-0{,}21t} \\leqslant 0{,}1$.',
          'Prendre $\\ln$ : $-0{,}21t \\leqslant \\ln(0{,}1) \\iff t \\geqslant \\frac{\\ln(0{,}1)}{-0{,}21} \\approx 10{,}96$.',
        ],
        conclusion: 'Il faut au minimum $11$ jours (soit plus d’une semaine).',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
  ],
};

