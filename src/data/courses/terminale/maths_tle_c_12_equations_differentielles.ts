import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Traduire une dissolution chimique en équation différentielle',
    paragraphText:
      'À l’instant $t = 0$ (en minutes), on plonge $20\\text{ g}$ d’une substance chimique dans l’eau. Soit $f(t)$ la quantité **non dissoute** à l’instant $t$ ($f(0) = 20$). Dire que « la vitesse de dissolution est proportionnelle à la quantité non encore dissoute » signifie que la dérivée $f’(t)$ est proportionnelle à $f(t)$ : $f’(t) = -k f(t)$ (ou $f’(t) + k f(t) = 0$). La solution est $f(t) = 20 e^{-kt}$. Comme $10\\text{ g}$ se dissolvent en $5\\text{ min}$, il reste $f(5) = 10\\text{ g}$, d’où $e^{-5k} = \\frac{1}{2} \\implies k = \\frac{\\ln 2}{5}$ et $f(t) = 20 e^{-\\frac{\\ln 2}{5}t}$ !',
    formula: {
      name: 'Modèle de dissolution exponentielle',
      formula: 'f’(t) + k\\,f(t) = 0 \\quad \\text{et} \\quad f(0) = 20 \\implies f(t) = 20\\,e^{-\\frac{\\ln 2}{5}t}',
    },
    konanTip: 'Une quantité qui décroît (dissolution, refroidissement, désintégration) à vitesse proportionnelle à elle-même vérifie toujours $y’(t) = -k y(t)$ ($k > 0$).',
    exercise: {
      id: 'tc_m_num_l12_eq_p01_q01',
      type: 'mcq',
      prompt: 'Avec $f(t) = 20\\,e^{-\\frac{\\ln 2}{5}t}$ (demi-vie de $5\\text{ minutes}$), quelle quantité reste-t-il non dissoute au bout de $15\\text{ minutes}$ ?',
      options: ['$10\\text{ g}$', '$5\\text{ g}$', '$2{,}5\\text{ g}$', '$0\\text{ g}$'],
      correctAnswerIndex: 2,
      explanation: '$15\\text{ min} = 3 \\times 5\\text{ min}$ (trois demi-vies) : $f(15) = 20 \\times e^{-3\\ln 2} = 20 \\times \\frac{1}{8} = 2{,}5\\text{ g}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce qu’une équation différentielle ?',
    paragraphText:
      'On appelle **équation différentielle** toute équation dont l’inconnue est une **fonction** (notée $f$, $y$, $\\theta$, etc.) et dans laquelle figure **au moins une des dérivées successives** ($f’$, $f’’$, $y’$, $y’’$, …) de cette fonction inconnue. Exemples : $(E_1) : -2f’ + 5f = 0$ (ordre $1$) ; $(E_2) : f’’ - 25f = 2x + 1$ (ordre $2$).',
    formula: {
      name: 'Notation abrégée avec y',
      formula: 'y’ + ay = b \\quad (\\text{1er ordre}) \\qquad ; \\qquad y’’ + my = 0 \\quad (\\text{2nd ordre})',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p01_q02',
      type: 'mcq',
      prompt: 'Parmi ces équations (Ex. 1 p.1–2), lesquelles sont des équations différentielles ?',
      options: [
        '$2y^2 + y = 2$ et $y + 3 = 0$',
        '$y’ + 4 = 0$ et $y’’ + 2y’ + y = 5$',
        '$y^2 = 1$ et $y’ + 4 = 0$',
        '$y = 3x$ et $y’’ - y’ = 3x^2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Seules $y’ + 4 = 0$ (contient $y’$) et $y’’ + 2y’ + y = 5$ (contient $y’$ et $y’’$) font intervenir une dérivée de la fonction inconnue $y$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'definition',
    stepBadge: 'Résoudre sur K',
    stepTheme: 'blue',
    stepTitle: 'Que signifie « résoudre une équation différentielle sur $K$ » ?',
    paragraphText:
      'Résoudre une équation différentielle sur un intervalle $K$, c’est déterminer l’**ensemble de toutes les fonctions** définies (et suffisamment dérivables) sur $K$ qui vérifient l’égalité pour tout $x \\in K$. Attention : la solution générale comporte toujours une constante arbitraire $k \\in \\mathbb{R}$ au $1^{\\text{er}}$ ordre, et deux constantes $(a, b) \\in \\mathbb{R}^2$ au $2^{\\text{nd}}$ ordre !',
    exercise: {
      id: 'tc_m_num_l12_eq_p01_q03',
      type: 'mcq',
      prompt: 'Parmi les équations suivantes (Ex. 1 p.5), lesquelles sont des équations différentielles ? $(E) : y^2+y=2$ ; $(F) : y’-\\ln(2)y=3$ ; $(G) : y’’-y’=3x^2$ ; $(H) : y=3x$.',
      options: ['$(E)$ et $(H)$', '$(F)$ et $(G)$', '$(F)$ seulement', '$(E)$, $(F)$ et $(G)$'],
      correctAnswerIndex: 1,
      explanation: 'Les équations $(F)$ (ordre $1$) et $(G)$ (ordre $2$) contiennent une dérivée de $y$ ; $(E)$ et $(H)$ sont des équations algébriques ordinaires.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Vérifier une solution',
    stepTheme: 'green',
    stepTitle: 'Méthode pour vérifier qu’une fonction donnée $g$ est solution',
    paragraphText:
      'Pour prouver qu’une fonction explicite $g$ est solution de $(E)$ sur $K$, inutile de résoudre $(E)$ ! Il suffit de calculer $g’(x)$ (et $g’’(x)$ si besoin), de **substituer** $g(x)$ et ses dérivées dans le membre de gauche de $(E)$, et de constater qu’on retrouve exactement le membre de droite pour tout $x \\in K$. Exemple (Ex. 4 p.6) : pour $g(x) = (x+1)e^{-2x}$, $g’(x) = (-2x - 1)e^{-2x}$, donc $g’(x) + 2g(x) = (-2x - 1 + 2x + 2)e^{-2x} = e^{-2x}$ : $g$ est bien solution de $y’ + 2y = e^{-2x}$.',
    exercise: {
      id: 'tc_m_num_l12_eq_p01_q04',
      type: 'mcq',
      prompt: 'La fonction $g(x) = e^{-x}$ est-elle solution sur $\\mathbb{R}$ de l’équation différentielle $(E) : y’ + 3y = 2e^{-x}$ ?',
      options: [
        'Non, car $g’(x) + 3g(x) = 4e^{-x}$',
        'Oui, car $g’(x) = -e^{-x}$ donc $g’(x) + 3g(x) = -e^{-x} + 3e^{-x} = 2e^{-x}$',
        'Non, car elle ne contient pas de constante $k$',
        'Oui, car $g(0) = 1$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En remplaçant $y$ par $e^{-x}$ et $y’$ par $-e^{-x}$, on obtient $-e^{-x} + 3e^{-x} = 2e^{-x}$, donc l’égalité est bien vérifiée pour tout $x \\in \\mathbb{R}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Cas a = 0',
    stepTheme: 'slate',
    stepTitle: 'Cas dégénéré $y’ = b$ (recherche de primitives)',
    paragraphText:
      'Lorsque l’équation du premier ordre $y’ + ay = b$ a $a = 0$, elle s’écrit simplement $y’ = b$. Résoudre $y’ = b$ sur $\\mathbb{R}$ revient alors simplement à trouver toutes les **primitives** de la fonction constante $x \\mapsto b$, qui sont les fonctions affines $x \\mapsto bx + c$ ($c \\in \\mathbb{R}$).',
    formula: {
      name: 'Cas a = 0',
      formula: 'y’ = b \\iff y(x) = bx + c \\quad (c \\in \\mathbb{R})',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p01_q05',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de l’équation différentielle $y’ + 4 = 0$ ?',
      options: [
        '$x \\mapsto k e^{-4x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto -4x + c,\\; c \\in \\mathbb{R}$',
        '$x \\mapsto 4x + c,\\; c \\in \\mathbb{R}$',
        '$x \\mapsto -4$ uniquement',
      ],
      correctAnswerIndex: 1,
      explanation: '$y’ + 4 = 0 \\iff y’ = -4$, dont les primitives sur $\\mathbb{R}$ sont $x \\mapsto -4x + c$ ($c \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Confusion classique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre « vérifier UNE solution » et « donner TOUTES les solutions »',
    paragraphText:
      'Attention : si l’énoncé demande « Résoudre l’équation différentielle », donner une seule fonction sans la constante arbitraire $k \\in \\mathbb{R}$ (ex. écrire $y(x) = e^{-2x}$ au lieu de $y(x) = k e^{-2x},\\; k \\in \\mathbb{R}$) est incomplet et sanctionné ! Inversement, si une condition initiale est donnée ($f(0) = 1$), la solution devient **unique** (plus de paramètre $k$).',
    konanTip: 'Sans condition initiale $\\to$ famille infinie avec $k \\in \\mathbb{R}$. Avec condition initiale $\\to$ une fonction unique sans $k$.',
    exercise: {
      id: 'tc_m_num_l12_eq_p01_q06',
      type: 'mcq',
      prompt: 'À quelle condition une équation différentielle $y’ + ay = b$ admet-elle une UNIQUE solution sur $\\mathbb{R}$ ?',
      options: [
        'Toujours, même sans condition supplémentaire',
        'Uniquement lorsque $b = 0$',
        'Lorsqu’on impose une condition initiale du type $y(x_0) = y_0$',
        'Lorsqu’on fixe $k = 1$ arbitrairement',
      ],
      correctAnswerIndex: 2,
      explanation: 'L’ensemble général des solutions forme une infinité de fonctions paramétrées par $k \\in \\mathbb{R}$ ; fixer une condition initiale $y(x_0) = y_0$ détermine un unique $k$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Ordre d’une équation',
    stepTheme: 'slate',
    stepTitle: 'Identifier l’ordre d’une équation différentielle',
    paragraphText:
      'L’**ordre** d’une équation différentielle est l’ordre de la plus grande dérivée présente : $y’ + 3y = 0$ est du $1^{\\text{er}}$ ordre (dérivée première $y’$) ; $y’’ + 25y = 0$ ou $y’’ - y’ = 3x^2$ sont du $2^{\\text{nd}}$ ordre (dérivée seconde $y’’$).',
    exercise: {
      id: 'tc_m_num_l12_eq_p01_q07',
      type: 'mcq',
      prompt: 'Quel est l’ordre de l’équation différentielle $y’’ - 25y = 2x + 1$ ?',
      options: ['Ordre $0$', 'Ordre $1$', 'Ordre $2$', 'Ordre $25$'],
      correctAnswerIndex: 2,
      explanation: 'La plus haute dérivée de la fonction inconnue $y$ qui figure dans l’équation est $y’’$ (dérivée seconde), donc elle est d’ordre $2$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Propriété 1',
    stepTheme: 'violet',
    stepTitle: 'Solutions sur $\\mathbb{R}$ de $y’ + ay = 0$ ($a \\in \\mathbb{R}$)',
    paragraphText:
      'Les solutions sur $\\mathbb{R}$ de l’équation différentielle linéaire homogène $y’ + ay = 0$ ($a \\in \\mathbb{R}$) sont exactement les fonctions définies sur $\\mathbb{R}$ par : $x \\mapsto k\\,e^{-ax}$, où $k \\in \\mathbb{R}$. Attention au **signe moins** devant $a$ : si l’équation est écrite $y’ = \\alpha y$ (soit $y’ - \\alpha y = 0$, donc $a = -\\alpha$), les solutions sont $x \\mapsto k\\,e^{\\alpha x}$ !',
    formula: {
      name: 'Forme canonique vs forme isolée',
      formula: 'y’ + ay = 0 \\iff y(x) = k\\,e^{-ax} \\qquad ; \\qquad y’ = \\alpha y \\iff y(x) = k\\,e^{\\alpha x}',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p02_q01',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $y’ + 2y = 0$ (exercice du cours p.2) ?',
      options: [
        '$x \\mapsto k e^{2x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{-2x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto -2x + k,\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{-x/2},\\; k \\in \\mathbb{R}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $y’ + ay = 0$ avec $a = 2$, les solutions sont $x \\mapsto k e^{-2x}$ ($k \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Ramener à y’ + ay = 0',
    stepTheme: 'slate',
    stepTitle: 'Résoudre $\\alpha y’ = \\beta y$ (ex. $7y’ = 3y$ et $y’ - (\\ln 2)y = 0$)',
    paragraphText:
      'Lorsque $y’$ a un coefficient devant lui ou que $y$ est à droite du signe $=$, on isole d’abord $y’$ ! (1) $7y’ = 3y \\iff y’ = \\frac{3}{7}y \\iff y’ - \\frac{3}{7}y = 0$ ($a = -\\frac{3}{7}$). Solutions : $x \\mapsto k\\,e^{\\frac{3}{7}x}$ ($k \\in \\mathbb{R}$). (2) $y’ - (\\ln 2)y = 0 \\iff y’ = (\\ln 2)y$. Solutions : $x \\mapsto k\\,e^{x\\ln 2} = k \\cdot 2^x$ ($k \\in \\mathbb{R}$).',
    visualSchema: {
      type: 'function_plot',
      title: 'Solutions de $y’ + 2y = 0$ : $y(x) = k e^{-2x}$ ($k=1$, $k=2$, $k=-1$)',
      caption: 'Toutes les solutions passent par $(0 ; k)$ et tendent vers $0$ en $+\\infty$.',
      plot: {
        xMin: -1,
        xMax: 2.5,
        yMin: -2.5,
        yMax: 4,
        xStep: 0.5,
        yStep: 1,
        curves: [
          { label: 'k = 1', color: 'blue', pieces: [{ expr: 'exp(-2*x)', from: -0.7, to: 2.5 }] },
          { label: 'k = 2', color: 'green', pieces: [{ expr: '2*exp(-2*x)', from: -0.35, to: 2.5 }] },
          { label: 'k = -1', color: 'orange', pieces: [{ expr: '-exp(-2*x)', from: -0.45, to: 2.5 }] },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p02_q02',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $7y’ = 3y$ (exercice du cours p.2) ?',
      options: [
        '$x \\mapsto k e^{-\\frac{3}{7}x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{\\frac{3}{7}x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{\\frac{7}{3}x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{-3x},\\; k \\in \\mathbb{R}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$7y’ = 3y \\iff y’ = \\frac{3}{7}y \\iff y’ - \\frac{3}{7}y = 0$, donc $y(x) = k e^{\\frac{3}{7}x}$ ($k \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Condition initiale',
    stepTheme: 'violet',
    stepTitle: 'Unicité de la solution vérifiant $y(x_0) = y_0$',
    paragraphText:
      'Pour tout couple $(x_0 ; y_0) \\in \\mathbb{R}^2$, l’équation différentielle $y’ + ay = 0$ admet une **unique solution** sur $\\mathbb{R}$ prenant la valeur $y_0$ en $x_0$ : $f(x) = y_0\\,e^{-a(x - x_0)}$. En pratique, on écrit $f(x) = k\\,e^{-ax}$, on remplace $x$ par $x_0$ dans $f(x_0) = y_0$, on résout pour trouver $k$, puis on réinjecte $k$.',
    formula: {
      name: 'Condition initiale',
      formula: 'f(x_0) = y_0 \\iff k\\,e^{-a x_0} = y_0 \\iff k = y_0\\,e^{a x_0}',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p02_q03',
      type: 'mcq',
      prompt: 'Déterminer la solution $f$ de $y’ - (\\ln 2)y = 0$ vérifiant $f(2) = \\frac{1}{2}$ (Ex. 2b p.5).',
      options: [
        '$f(x) = \\frac{1}{2}e^{x\\ln 2}$',
        '$f(x) = \\frac{1}{8}e^{x\\ln 2}$',
        '$f(x) = 2 e^{x\\ln 2}$',
        '$f(x) = \\frac{1}{4}e^{-x\\ln 2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(x) = k e^{x\\ln 2}$. Or $f(2) = k e^{2\\ln 2} = 4k = \\frac{1}{2} \\iff k = \\frac{1}{8}$. D’où $f(x) = \\frac{1}{8}e^{x\\ln 2}$ (soit $2^{x-3}$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Démonstration du théorème',
    stepTheme: 'green',
    stepTitle: 'Pourquoi toutes les solutions de $y’ + ay = 0$ sont de la forme $k e^{-ax}$ ?',
    paragraphText:
      'La démonstration est un grand classique de Terminale C : soit $f$ une solution sur $\\mathbb{R}$ de $y’ + ay = 0$. Introduisons la fonction auxiliaire $g(x) = f(x)e^{ax}$. En dérivant : $g’(x) = (f’(x) + a f(x))e^{ax} = 0 \\cdot e^{ax} = 0$ pour tout $x \\in \\mathbb{R}$. Sur l’intervalle $\\mathbb{R}$, une fonction de dérivée nulle est constante : $g(x) = k \\iff f(x) = k e^{-ax}$ !',
    exercise: {
      id: 'tc_m_num_l12_eq_p02_q04',
      type: 'mcq',
      prompt: 'Pour démontrer que toute solution $f$ de $y’ + ay = 0$ s’écrit $k e^{-ax}$, quelle fonction auxiliaire $g(x)$ dérive-t-on sur $\\mathbb{R}$ ?',
      options: [
        '$g(x) = f(x) e^{-ax}$',
        '$g(x) = f(x) e^{ax}$',
        '$g(x) = f(x) + ax$',
        '$g(x) = \\ln|f(x)|$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En posant $g(x) = f(x)e^{ax}$, la dérivée produit donne $g’(x) = (f’(x) + af(x))e^{ax} = 0$, donc $g$ est constante.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Vitesse et coefficient',
    stepTheme: 'slate',
    stepTitle: 'Résoudre $y’ = -2y$ avec $f(0) = 1$ (Ex. 2a p.5)',
    paragraphText:
      '$y’ = -2y \\iff y’ + 2y = 0$, dont les solutions sur $\\mathbb{R}$ sont $f(x) = k e^{-2x}$ ($k \\in \\mathbb{R}$). La condition initiale $f(0) = 1$ donne $k e^0 = 1 \\iff k = 1$. L’unique solution cherchée est $f(x) = e^{-2x}$.',
    exercise: {
      id: 'tc_m_num_l12_eq_p02_q05',
      type: 'mcq',
      prompt: 'Quelle est l’unique solution de $3y’ + 6y = 0$ vérifiant $f(0) = 4$ ?',
      options: ['$f(x) = 4 e^{2x}$', '$f(x) = 4 e^{-2x}$', '$f(x) = \\frac{4}{3}e^{-2x}$', '$f(x) = 4 e^{-6x}$'],
      correctAnswerIndex: 1,
      explanation: 'En divisant par $3$, l’équation devient $y’ + 2y = 0$ ($a = 2$), donc $f(x) = k e^{-2x}$. Avec $f(0) = 4$, $k = 4$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège de signe et de division',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais oublier le signe $-$ dans $e^{-ax}$ ni de diviser par le coeff de $y’$ !',
    paragraphText:
      'Deux fautes classiques dans les copies : (1) Pour $y’ + 5y = 0$, écrire $k e^{5x}$ au lieu de $k e^{-5x}$ ! Retiens : quand $+5y$ passe à droite, il devient $-5y$, donc $y’ = -5y$ donne bien $e^{-5x}$. (2) Pour $2y’ + 5y = 0$, écrire $k e^{-5x}$ sans diviser par $2$ ! Il faut d’abord ramener le coefficient de $y’$ à $1$ : $y’ + \\frac{5}{2}y = 0 \\implies k e^{-\\frac{5}{2}x}$.',
    konanTip: 'Toujours commencer par mettre l’équation sous la forme exacte $y’ + ay = 0$ (avec coefficient $1$ devant $y’$).',
    exercise: {
      id: 'tc_m_num_l12_eq_p02_q06',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $-2f’ + 5f = 0$ (Exemple 1 p.1) ?',
      options: [
        '$x \\mapsto k e^{-5x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{\\frac{5}{2}x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{-\\frac{5}{2}x},\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{\\frac{2}{5}x},\\; k \\in \\mathbb{R}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$-2f’ + 5f = 0 \\iff f’ - \\frac{5}{2}f = 0$ (donc $a = -\\frac{5}{2}$), d’où $f(x) = k e^{\\frac{5}{2}x}$ ($k \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Trouver la constante vite',
    stepTheme: 'green',
    stepTitle: 'Calculer $k$ lorsque la condition initiale n’est pas en $x_0 = 0$',
    paragraphText:
      'Si l’énoncé donne $f(x_0) = y_0$ avec $x_0 \\ne 0$, par exemple $f(1) = 3$ pour $y’ + 2y = 0$ ($f(x) = k e^{-2x}$), alors $k e^{-2} = 3 \\iff k = 3 e^{2}$, donc $f(x) = 3e^2 e^{-2x} = 3 e^{-2(x-1)}$. Simplifier avec les propriétés de l’exponentielle rend l’écriture finale très élégante.',
    exercise: {
      id: 'tc_m_num_l12_eq_p02_q07',
      type: 'mcq',
      prompt: 'Quelle est la solution de $y’ - 3y = 0$ vérifiant $f(1) = 2$ ?',
      options: ['$f(x) = 2 e^{3x}$', '$f(x) = 2 e^{3(x - 1)}$', '$f(x) = 2 e^{-3(x - 1)}$', '$f(x) = 2 e^{3x - 1}$'],
      correctAnswerIndex: 1,
      explanation: '$f(x) = k e^{3x}$ avec $f(1) = k e^3 = 2 \\implies k = 2e^{-3}$, d’où $f(x) = 2 e^{-3} e^{3x} = 2 e^{3(x-1)}$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Propriété 2',
    stepTheme: 'violet',
    stepTitle: 'Solutions sur $\\mathbb{R}$ de $y’ + ay = b$ ($a \\in \\mathbb{R}^*$, $b \\in \\mathbb{R}^*$)',
    paragraphText:
      'Soient $a \\ne 0$ et $b \\ne 0$ deux réels. Une solution particulière constante évidente de $y’ + ay = b$ est $y_p(x) = \\frac{b}{a}$ (car $(b/a)’ + a(b/a) = 0 + b = b$). En y ajoutant la solution générale de l’équation homogène $y’ + ay = 0$, on obtient toutes les solutions sur $\\mathbb{R}$ : $x \\mapsto k\\,e^{-ax} + \\frac{b}{a}$, avec $k \\in \\mathbb{R}$.',
    formula: {
      name: 'Solutions générales de y’ + ay = b (a ≠ 0)',
      formula: 'y’ + ay = b \\iff y(x) = k\\,e^{-ax} + \\frac{b}{a} \\qquad (k \\in \\mathbb{R})',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p03_q01',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $y’ + 2y = 6$ (exercice du cours p.2) ?',
      options: [
        '$x \\mapsto k e^{-2x} + 6,\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{-2x} + 3,\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{2x} + 3,\\; k \\in \\mathbb{R}$',
        '$x \\mapsto k e^{-2x} - 3,\\; k \\in \\mathbb{R}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Ici $a = 2$ et $b = 6$, donc $\\frac{b}{a} = \\frac{6}{2} = 3$. Les solutions sont $x \\mapsto k e^{-2x} + 3$ ($k \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Condition initiale',
    stepTheme: 'slate',
    stepTitle: 'Résoudre $y’ - 3y = 7$ avec $f(0) = 1$ (exercice du cours p.2–3)',
    paragraphText:
      'Pour $(E) : y’ - 3y = 7$, on identifie $a = -3$ et $b = 7$, d’où $-a = 3$ et $\\frac{b}{a} = -\\frac{7}{3}$. La forme générale des solutions sur $\\mathbb{R}$ est $f(x) = c\\,e^{3x} - \\frac{7}{3}$ ($c \\in \\mathbb{R}$). La condition initiale $f(0) = 1$ donne $c e^0 - \\frac{7}{3} = 1 \\iff c = 1 + \\frac{7}{3} = \\frac{10}{3}$. La solution unique est donc $f(x) = \\frac{10}{3}e^{3x} - \\frac{7}{3}$.',
    formula: {
      name: 'Solution unique trouvée',
      formula: 'f(x) = \\frac{10}{3}\\,e^{3x} - \\frac{7}{3}',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p03_q02',
      type: 'mcq',
      prompt: 'Quelle est l’unique solution de $y’ + 2y = 6$ telle que $f(0) = 5$ ?',
      options: [
        '$f(x) = 5 e^{-2x} + 3$',
        '$f(x) = 2 e^{-2x} + 3$',
        '$f(x) = 3 e^{-2x} + 2$',
        '$f(x) = -2 e^{-2x} + 3$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(x) = k e^{-2x} + 3$. Or $f(0) = k + 3 = 5 \\iff k = 2$, d’où $f(x) = 2 e^{-2x} + 3$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'piege',
    stepBadge: 'Piège du second membre',
    stepTheme: 'orange',
    stepTitle: 'Ne PAS écrire $k e^{-ax} + b$ au lieu de $k e^{-ax} + \\frac{b}{a}$ !',
    paragraphText:
      'L’erreur numéro 1 consiste à oublier de diviser $b$ par $a$, ou de se tromper sur le signe de $\\frac{b}{a}$ ! Astuce infaillible : vérifie toujours que ta fonction constante $C = \\frac{b}{a}$ est solution ! Si tu injectes $y = C$ (constante, donc $y’ = 0$) dans $y’ + ay = b$, tu obtiens $0 + aC = b \\iff C = \\frac{b}{a}$.',
    konanTip: 'Pour trouver la constante finale de $y’ + ay = b$, pose $y’ = 0$ mentalement : il reste $ay = b$, d’où $y = \\frac{b}{a}$ immédiatement !',
    exercise: {
      id: 'tc_m_num_l12_eq_p03_q03',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $2y’ - 5y = 10$ ?',
      options: [
        '$x \\mapsto k e^{\\frac{5}{2}x} + 10$',
        '$x \\mapsto k e^{\\frac{5}{2}x} - 2$',
        '$x \\mapsto k e^{-\\frac{5}{2}x} - 2$',
        '$x \\mapsto k e^{\\frac{5}{2}x} + 2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En divisant par $2$ : $y’ - \\frac{5}{2}y = 5$, donc $a = -\\frac{5}{2}, b = 5$ (ou constante $y’=0 \\implies -5y = 10 \\implies y = -2$). Solutions : $k e^{\\frac{5}{2}x} - 2$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Second membre non constant',
    stepTheme: 'green',
    stepTitle: 'Résoudre $y’ + ay = g(x)$ à l’aide d’une solution particulière',
    paragraphText:
      'Lorsque le second membre dépend de $x$ (comme $(E) : y’ + 2y = e^{-2x}$ dans l’Ex. 4 p.6, ou $y’ + 3y = 2e^{-x}$ p.6–7), le théorème reste identique : si $g_0$ est **une solution particulière** de $(E)$, alors une fonction $f$ est solution de $(E)$ si et seulement si $h = f - g_0$ est solution de l’équation homogène associée $(E’) : y’ + ay = 0$ ! Donc $f(x) = g_0(x) + k e^{-ax}$.',
    formula: {
      name: 'Principe de superposition (solution particulière + homogène)',
      formula: 'f \\text{ solution de } (E) \\iff (f - g_0) \\text{ solution de } (E’) \\iff f(x) = g_0(x) + k\\,e^{-ax}',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p03_q04',
      type: 'mcq',
      prompt: 'Dans l’Ex. 4 p.6 : $(E) : y’ + 2y = e^{-2x}$, on a vérifié que $g(x) = (x+1)e^{-2x}$ est solution de $(E)$, et $(E’) : y’ + 2y = 0$. Quelles sont toutes les solutions $f$ de $(E)$ ?',
      options: [
        '$f(x) = (x + 1)e^{-2x}$ uniquement',
        '$f(x) = (k + x + 1)e^{-2x},\\; k \\in \\mathbb{R}$',
        '$f(x) = k(x + 1)e^{-2x},\\; k \\in \\mathbb{R}$',
        '$f(x) = (x + 1)e^{-2x} + k e^{2x},\\; k \\in \\mathbb{R}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Toute solution de $(E)$ est la somme de la solution particulière $g(x) = (x+1)e^{-2x}$ et d’une solution homogène $h(x) = k e^{-2x}$, soit $(k+x+1)e^{-2x}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Correction du PDF p.6 !',
    stepTheme: 'slate',
    stepTitle: 'Condition initiale sur $y’ + 2y = e^{-2x}$ avec $f(0) = -2$',
    paragraphText:
      'Dans l’Ex. 4 question 4b (p.6), l’énoncé demande la solution $f$ de $y’ + 2y = e^{-2x}$ vérifiant **$f(0) = -2$** (le corrigé du PDF avait résolu par mégarde $f(0) = 1$ !). Avec $f(x) = (k + x + 1)e^{-2x}$, la vraie condition $f(0) = -2$ donne $(k + 1)e^0 = -2 \\iff k + 1 = -2 \\iff k = -3$. L’unique solution répondant à l’énoncé est donc $f(x) = (x - 2)e^{-2x}$ !',
    exercise: {
      id: 'tc_m_num_l12_eq_p03_q05',
      type: 'mcq',
      prompt: 'Quelle est la vraie solution $f$ de $(E) : y’ + 2y = e^{-2x}$ vérifiant $f(0) = -2$ (énoncé de l’Ex. 4 q4b p.6) ?',
      options: [
        '$f(x) = (x + 1)e^{-2x}$',
        '$f(x) = (x - 2)e^{-2x}$',
        '$f(x) = (-2x + 1)e^{-2x}$',
        '$f(x) = (x - 3)e^{-2x}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(x) = (k + x + 1)e^{-2x}$ et $f(0) = k + 1 = -2 \\implies k = -3$, donc $f(x) = (x - 2)e^{-2x}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Approfondissement p.6–7',
    stepTheme: 'slate',
    stepTitle: 'Chercher $m$ pour que $h(x) = m e^{-x}$ soit solution de $y’ + 3y = 2e^{-x}$',
    paragraphText:
      'Exercice d’approfondissement p.6–7 : pour $h(x) = m e^{-x}$, on a $h’(x) = -m e^{-x}$. $h$ est solution de $(E) : y’ + 3y = 2e^{-x}$ si et seulement si $-m e^{-x} + 3m e^{-x} = 2e^{-x} \\iff 2m = 2 \\iff m = 1$, donc $h(x) = e^{-x}$. Ensuite $(E’) : y’ + 3y = 0$ a pour solutions $x \\mapsto k e^{-3x}$ ($k \\in \\mathbb{R}$). Comme $h - g$ est solution de $(E’)$ ssi $g$ est solution de $(E)$, toutes les solutions de $(E)$ sont $x \\mapsto e^{-x} - k e^{-3x}$ (ou $e^{-x} + c e^{-3x}$, $c \\in \\mathbb{R}$).',
    exercise: {
      id: 'tc_m_num_l12_eq_p03_q06',
      type: 'mcq',
      prompt: 'Pour quelle valeur du réel $m$ la fonction $h(x) = m e^{-x}$ est-elle solution de $y’ + 3y = 2e^{-x}$ ?',
      options: ['$m = 2$', '$m = 1$', '$m = \\frac{1}{2}$', '$m = -1$'],
      correctAnswerIndex: 1,
      explanation: '$h’(x) + 3h(x) = -m e^{-x} + 3m e^{-x} = 2m e^{-x} = 2e^{-x} \\iff m = 1$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Condition initiale sur y’ + ay = b',
    stepTheme: 'orange',
    stepTitle: 'Toujours appliquer la condition initiale sur la solution COMPLÈTE',
    paragraphText:
      'Pour trouver $k$ quand il y a un second membre ($y(x) = k e^{-ax} + \\frac{b}{a}$), on remplace dans l’expression **complète** avec $+ \\frac{b}{a}$ (par exemple $k + \\frac{b}{a} = y_0$), et surtout pas dans $k e^{-ax}$ seul ! De même, pour $f(x) = g_0(x) + k e^{-ax}$, on écrit $f(x_0) = g_0(x_0) + k e^{-a x_0} = y_0$.',
    exercise: {
      id: 'tc_m_num_l12_eq_p03_q07',
      type: 'mcq',
      prompt: 'Quelle est l’unique solution de $y’ + y = 3$ vérifiant $f(0) = 1$ ?',
      options: [
        '$f(x) = e^{-x} + 3$',
        '$f(x) = -2 e^{-x} + 3$',
        '$f(x) = 3 e^{-x} - 2$',
        '$f(x) = 4 e^{-x} + 3$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(x) = k e^{-x} + 3$. Avec $f(0) = 1$, $k + 3 = 1 \\implies k = -2$, donc $f(x) = -2e^{-x} + 3$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Cas m = 0',
    stepTheme: 'violet',
    stepTitle: 'Équation du $2^{\\text{nd}}$ ordre $y’’ + my = 0$ : cas $m = 0$ ($y’’ = 0$)',
    paragraphText:
      'Lorsque $m = 0$, l’équation devient $y’’ = 0$. Une fonction dont la dérivée seconde est nulle sur $\\mathbb{R}$ a une dérivée première constante $y’ = a$ ($a \\in \\mathbb{R}$), donc elle est elle-même affine : les solutions sur $\\mathbb{R}$ de $y’’ = 0$ sont les fonctions $x \\mapsto ax + b$, avec $a \\in \\mathbb{R}$ et $b \\in \\mathbb{R}$.',
    formula: {
      name: 'Cas m = 0',
      formula: 'y’’ = 0 \\iff y(x) = ax + b \\qquad (a, b \\in \\mathbb{R})',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p04_q01',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $y’’ = 0$ ?',
      options: [
        '$x \\mapsto k$ ($k \\in \\mathbb{R}$)',
        '$x \\mapsto ax + b$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto a e^x + b e^{-x}$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto ax^2 + bx$ ($a, b \\in \\mathbb{R}$)',
      ],
      correctAnswerIndex: 1,
      explanation: 'Deux intégrations successives de $0$ donnent $y’ = a$, puis $y(x) = ax + b$ ($a, b \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Cas m < 0',
    stepTheme: 'violet',
    stepTitle: 'Cas $m < 0$ : $y’’ - \\omega^2 y = 0$ ($\\omega \\in \\mathbb{R}^*$)',
    paragraphText:
      'Lorsque $m < 0$, on pose $m = -\\omega^2$ avec $\\omega > 0$ (ex : $y’’ - 4y = 0 \\implies \\omega = 2$). Les solutions sur $\\mathbb{R}$ de $y’’ - \\omega^2 y = 0$ sont les combinaisons linéaires d’exponentielles réelles : $x \\mapsto a\\,e^{-\\omega x} + b\\,e^{\\omega x}$, avec $a \\in \\mathbb{R}$ et $b \\in \\mathbb{R}$.',
    formula: {
      name: 'Cas m = −ω² < 0',
      formula: 'y’’ - \\omega^2 y = 0 \\iff y(x) = a\\,e^{-\\omega x} + b\\,e^{\\omega x} \\qquad (a, b \\in \\mathbb{R})',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p04_q02',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $y’’ - 4y = 0$ (exercice du cours p.3) ?',
      options: [
        '$x \\mapsto a\\cos(2x) + b\\sin(2x)$',
        '$x \\mapsto a e^{-2x} + b e^{2x}$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto a e^{-4x} + b e^{4x}$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto k e^{-2x}$ ($k \\in \\mathbb{R}$)',
      ],
      correctAnswerIndex: 1,
      explanation: 'Ici $m = -4 = -2^2$ ($\\omega = 2$), donc les solutions sont $x \\mapsto a e^{-2x} + b e^{2x}$ ($a, b \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Cas m > 0',
    stepTheme: 'violet',
    stepTitle: 'Cas $m > 0$ : $y’’ + \\omega^2 y = 0$ ($\\omega \\in \\mathbb{R}^*$) — oscillateur harmonique',
    paragraphText:
      'Lorsque $m > 0$, on pose $m = \\omega^2$ avec $\\omega > 0$ (ex : $y’’ + 4y = 0 \\implies \\omega = 2$). Les solutions sur $\\mathbb{R}$ de $y’’ + \\omega^2 y = 0$ sont les fonctions sinusoïdales : $x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$, avec $a \\in \\mathbb{R}$ et $b \\in \\mathbb{R}$. Vérifie mentalement : $(a\\cos(\\omega x) + b\\sin(\\omega x))’’ = -\\omega^2(a\\cos(\\omega x) + b\\sin(\\omega x))$.',
    formula: {
      name: 'Cas m = ω² > 0',
      formula: 'y’’ + \\omega^2 y = 0 \\iff y(x) = a\\cos(\\omega x) + b\\sin(\\omega x) \\qquad (a, b \\in \\mathbb{R})',
    },
    visualSchema: {
      type: 'function_plot',
      title: 'Solution oscillante $f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$ de $y’’ + 25y = 0$',
      caption: 'Vérifie $f(0) = 1$ et $f’(\\frac{\\pi}{5}) = -2$ (exercice du cours p.4).',
      plot: {
        xMin: -1.5,
        xMax: 1.5,
        yMin: -1.5,
        yMax: 1.5,
        xStep: 0.5,
        yStep: 0.5,
        curves: [{ label: 'f(x)', color: 'violet', pieces: [{ expr: 'cos(5*x) + 0.4*sin(5*x)', from: -1.5, to: 1.5 }] }],
        points: [{ x: 0, y: 1, label: 'f(0)=1', color: 'blue', filled: true }],
      },
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p04_q03',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $y’’ + 9y = 0$ ?',
      options: [
        '$x \\mapsto a e^{-3x} + b e^{3x}$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto a\\cos(3x) + b\\sin(3x)$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto a\\cos(9x) + b\\sin(9x)$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto a\\cos(3x) + b$ ($a, b \\in \\mathbb{R}$)',
      ],
      correctAnswerIndex: 1,
      explanation: '$y’’ + 9y = 0 \\iff y’’ + 3^2 y = 0$ ($\\omega = 3 > 0$), donc les solutions sont $x \\mapsto a\\cos(3x) + b\\sin(3x)$ ($a, b \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Conditions initiales (2nd ordre)',
    stepTheme: 'violet',
    stepTitle: 'Unicité avec deux conditions : $y(x_0) = y_0$ et $y’(x_0) = z_0$',
    paragraphText:
      'Une équation du second ordre dépend de **deux** constantes réelles $(a, b)$. Pour fixer une solution unique, il faut donc **deux** conditions (par exemple $y(x_0) = y_0$ et $y’(x_0) = z_0$, ou deux points). Exemple du cours p.4 : pour $y’’ + 25y = 0$ ($f(x) = a\\cos(5x) + b\\sin(5x)$, $f’(x) = -5a\\sin(5x) + 5b\\cos(5x)$) avec $f(0) = 1$ et $f’(\\frac{\\pi}{5}) = -2$ : $f(0) = a = 1$, et $f’(\\frac{\\pi}{5}) = -5a\\sin\\pi + 5b\\cos\\pi = -5b = -2 \\implies b = \\frac{2}{5}$. D’où $f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$.',
    exercise: {
      id: 'tc_m_num_l12_eq_p04_q04',
      type: 'mcq',
      prompt: 'Déterminer la solution $f$ de $y’’ + 4y = 0$ vérifiant $f(0) = 3$ et $f’(0) = -4$.',
      options: [
        '$f(x) = 3\\cos(2x) - 4\\sin(2x)$',
        '$f(x) = 3\\cos(2x) - 2\\sin(2x)$',
        '$f(x) = -2\\cos(2x) + 3\\sin(2x)$',
        '$f(x) = 3 e^{-2x} - 2 e^{2x}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(x) = a\\cos(2x) + b\\sin(2x)$ et $f’(x) = -2a\\sin(2x) + 2b\\cos(2x)$. Donc $f(0) = a = 3$ et $f’(0) = 2b = -4 \\implies b = -2$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Erreur classique',
    stepTheme: 'orange',
    stepTitle: 'Bien distinguer $y’’ - \\omega^2 y = 0$ (exponentielles) et $y’’ + \\omega^2 y = 0$ (cos/sin) !',
    paragraphText:
      'Piège incontournable du $2^{\\text{nd}}$ ordre : (1) Ne pas confondre le signe devant $m$ : un signe **MOINS** ($y’’ - 4y = 0$) donne des **exponentielles** ($e^{-2x}, e^{2x}$), alors qu’un signe **PLUS** ($y’’ + 4y = 0$) donne du **cos/sin** ($\\cos 2x, \\sin 2x$) ! (2) Ne pas oublier de prendre $\\omega = \\sqrt{|m|}$ (pour $y’’ + 25y = 0$, $\\omega = 5$, et surtout pas $25$ !).',
    konanTip: 'PLUS devant $y$ ($y’’ + \\omega^2 y = 0$) $\\to$ fonctions bornées/périodiques ($\\cos, \\sin$). MOINS devant $y$ ($y’’ - \\omega^2 y = 0$) $\\to$ exponentielles ($e^{-\\omega x}, e^{\\omega x}$).',
    exercise: {
      id: 'tc_m_num_l12_eq_p04_q05',
      type: 'mcq',
      prompt: 'Si une équation est écrite sous la forme $4y’’ + y = 0$, quelle est la valeur de $\\omega$ ?',
      options: ['$\\omega = 2$', '$\\omega = \\frac{1}{2}$', '$\\omega = \\frac{1}{4}$', '$\\omega = 1$'],
      correctAnswerIndex: 1,
      explanation: 'On divise par $4$ pour isoler $y’’$ : $y’’ + \\frac{1}{4}y = 0$, donc $\\omega^2 = \\frac{1}{4} \\implies \\omega = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Tableau récapitulatif',
    stepTheme: 'slate',
    stepTitle: 'Les 5 équations différentielles canoniques du programme (tableau p.4)',
    paragraphText:
      'Le tableau officiel récapitule les 5 types d’équations différentielles à connaître par cœur au Bac C : $y’ + ay = 0$ ; $y’ + ay = b$ ; $y’’ = 0$ ; $y’’ - \\omega^2 y = 0$ et $y’’ + \\omega^2 y = 0$. Avant d’appliquer une formule, veille toujours à ramener le coefficient devant la plus haute dérivée ($y’$ ou $y’’$) à $1$ et à faire passer le terme en $y$ à gauche !',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau récapitulatif officiel des 5 types',
      tableData: {
        headers: ['Type d’équation différentielle', 'Paramètres', 'Fonctions solutions sur ℝ'],
        rows: [
          ['$y’ + ay = 0$', '$a \\in \\mathbb{R}$', '$x \\mapsto k\\,e^{-ax},\\; k \\in \\mathbb{R}$'],
          ['$y’ + ay = b$', '$a \\in \\mathbb{R}^*,\\; b \\in \\mathbb{R}^*$', '$x \\mapsto k\\,e^{-ax} + \\frac{b}{a},\\; k \\in \\mathbb{R}$'],
          ['$y’’ = 0$', '—', '$x \\mapsto ax + b,\\; a, b \\in \\mathbb{R}$'],
          ['$y’’ - \\omega^2 y = 0$', '$\\omega \\in \\mathbb{R}^*$', '$x \\mapsto a\\,e^{-\\omega x} + b\\,e^{\\omega x},\\; a, b \\in \\mathbb{R}$'],
          ['$y’’ + \\omega^2 y = 0$', '$\\omega \\in \\mathbb{R}^*$', '$x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x),\\; a, b \\in \\mathbb{R}$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p04_q06',
      type: 'mcq',
      prompt: 'Quelles sont les solutions sur $\\mathbb{R}$ de $y’’ = 9y$ ?',
      options: [
        '$x \\mapsto a\\cos(3x) + b\\sin(3x)$',
        '$x \\mapsto a e^{-3x} + b e^{3x}$ ($a, b \\in \\mathbb{R}$)',
        '$x \\mapsto a e^{-9x} + b e^{9x}$',
        '$x \\mapsto 9x + b$',
      ],
      correctAnswerIndex: 1,
      explanation: '$y’’ = 9y \\iff y’’ - 3^2 y = 0$ (signe moins à gauche !), donc $m = -9 < 0$ et $y(x) = a e^{-3x} + b e^{3x}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Oscillations et dérivée',
    stepTheme: 'green',
    stepTitle: 'Bien dériver $a\\cos(\\omega x) + b\\sin(\\omega x)$ pour la $2^{\\text{e}}$ condition',
    paragraphText:
      'Quand la seconde condition porte sur $f’(x_0)$, n’oublie pas de sortir $\\omega$ en dérivant et le signe moins sur $\\cos$ : si $f(x) = a\\cos(\\omega x) + b\\sin(\\omega x)$, alors $f’(x) = -a\\omega\\sin(\\omega x) + b\\omega\\cos(\\omega x)$. En particulier en $x_0 = 0$, $f(0) = a$ et $f’(0) = b\\omega$ (d’où $b = \\frac{f’(0)}{\\omega}$).',
    formula: {
      name: 'Conditions en x₀ = 0 pour y’’ + ω²y = 0',
      formula: 'a = f(0) \\qquad \\text{et} \\qquad b = \\frac{f’(0)}{\\omega}',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p04_q07',
      type: 'mcq',
      prompt: 'Quelle est la solution unique de $y’’ + 2y = 0$ telle que $f(0) = 1$ et $f’(0) = \\sqrt{2}$ ?',
      options: [
        '$f(x) = \\cos(\\sqrt{2}x) + \\sqrt{2}\\sin(\\sqrt{2}x)$',
        '$f(x) = \\cos(\\sqrt{2}x) + \\sin(\\sqrt{2}x)$',
        '$f(x) = \\cos(2x) + \\frac{\\sqrt{2}}{2}\\sin(2x)$',
        '$f(x) = e^{-\\sqrt{2}x} + e^{\\sqrt{2}x}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Ici $\\omega = \\sqrt{2}$, $a = f(0) = 1$ et $b = \\frac{f’(0)}{\\omega} = \\frac{\\sqrt{2}}{\\sqrt{2}} = 1$. Donc $f(x) = \\cos(\\sqrt{2}x) + \\sin(\\sqrt{2}x)$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'slate',
    stepTitle: 'Croissance démographique : de $f’(t) = a f(t)$ à la prévision (p.4–5)',
    paragraphText:
      'Situation complexe du cours : un pays comptait $4{,}75$ millions d’habitants en $1990$ ($t = 0$) et $5{,}5$ millions en $1995$ ($t = 5$). La vitesse d’accroissement étant proportionnelle à la population, $f’(t) = a f(t)$, d’où $f(t) = k e^{at}$. Avec $f(0) = 4{,}75$, on a $k = 4{,}75$. Avec $f(5) = 5{,}5$, $4{,}75 e^{5a} = 5{,}5 \\iff e^{5a} = \\frac{22}{19} \\iff a = \\frac{1}{5}\\ln\\left(\\frac{22}{19}\\right)$. On atteint $f(t) = 20$ lorsque $e^{at} = \\frac{20}{4{,}75} = \\frac{80}{19} \\iff t = \\frac{5\\ln(80/19)}{\\ln(22/19)} \\approx 48{,}9\\text{ ans}$, soit vers $1990 + 49 = 2039$ (ou $2038$ en prenant $48$).',
    formula: {
      name: 'Temps d’atteinte d’un seuil N',
      formula: 'f(t) = N_0\\,e^{at} = N \\iff t = \\frac{1}{a}\\ln\\left(\\frac{N}{N_0}\\right)',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p05_q01',
      type: 'mcq',
      prompt: 'Dans ce modèle démographique ($f(0) = 4{,}75$, $f(5) = 5{,}5$, $f’(t) = a f(t)$), quelle équation donne le taux $a$ ?',
      options: [
        '$5a = 5{,}5 - 4{,}75$',
        '$4{,}75 e^{5a} = 5{,}5 \\iff a = \\frac{1}{5}\\ln\\left(\\frac{22}{19}\\right)$',
        '$e^{-5a} = \\frac{5{,}5}{4{,}75}$',
        '$a = \\frac{5{,}5}{4{,}75}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{5{,}5}{4{,}75} = \\frac{550}{475} = \\frac{22}{19}$, donc $e^{5a} = \\frac{22}{19} \\iff 5a = \\ln\\left(\\frac{22}{19}\\right) \\iff a = \\frac{1}{5}\\ln\\left(\\frac{22}{19}\\right)$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Loi de refroidissement (Ex. 3 p.5–6)',
    stepTheme: 'slate',
    stepTitle: 'Refroidissement d’un corps par changement de fonction $x(t) = \\theta(t) - 30$',
    paragraphText:
      'Un corps à $70\\text{ °C}$ à $t = 0$ refroidit dans une pièce à $30\\text{ °C}$ ($\\theta(5) = 60\\text{ °C}$). On pose l’écart $x(t) = \\theta(t) - 30$, qui vérifie $x’(t) = -k^2 x(t)$ ($k \\in \\mathbb{R}^*$). On résout : $x(t) = c\\,e^{-k^2 t}$, d’où $\\theta(t) = c\\,e^{-k^2 t} + 30$. Comme $\\theta(0) = 70$, $c = 40$. Comme $\\theta(5) = 60$, $40 e^{-5k^2} + 30 = 60 \\iff e^{-5k^2} = \\frac{3}{4} \\iff -k^2 = \\frac{1}{5}\\ln\\left(\\frac{3}{4}\\right)$. Donc $\\theta(t) = 40\\,e^{\\frac{1}{5}\\ln(3/4)\\,t} + 30$, et pour $t = 20\\text{ min}$ : $\\theta(20) = 40\\left(\\frac{3}{4}\\right)^4 + 30 \\approx 42{,}66\\text{ °C}$.',
    formula: {
      name: 'Simplification avec (3/4)^{t/5}',
      formula: '\\theta(t) = 40\\left(\\frac{3}{4}\\right)^{t/5} + 30 \\implies \\theta(20) = 40\\left(\\frac{3}{4}\\right)^4 + 30 \\approx 42{,}66\\text{ °C}',
    },
    exercise: {
      id: 'tc_m_num_l12_eq_p05_q02',
      type: 'mcq',
      prompt: 'Dans l’Ex. 3 ($\\theta(t) = c e^{-k^2 t} + 30$, $\\theta(0) = 70$, $\\theta(5) = 60$), quelle est la limite de $\\theta(t)$ lorsque $t \\to +\\infty$ ?',
      options: ['$70\\text{ °C}$', '$40\\text{ °C}$', '$30\\text{ °C}$', '$0\\text{ °C}$'],
      correctAnswerIndex: 2,
      explanation: 'Comme $-k^2 < 0$, $\\lim_{t \\to +\\infty} e^{-k^2 t} = 0$, donc $\\lim_{t \\to +\\infty} \\theta(t) = 30\\text{ °C}$ (le corps tend vers la température ambiante !).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Changement d’inconnue',
    stepTheme: 'green',
    stepTitle: 'Passer de $\\theta’ + a\\theta = b$ à $x’ + ax = 0$ par translation',
    paragraphText:
      'Dans l’Ex. 3 ci-dessus, poser $x(t) = \\theta(t) - 30$ (donc $\\theta’(t) = x’(t)$) revient exactement à résoudre $\\theta’(t) + k^2 \\theta(t) = 30k^2$, dont la constante limite est $\\frac{30k^2}{k^2} = 30$. En général, pour résoudre $\\theta’ + a\\theta = b$ ($a \\ne 0$), on peut soit appliquer la formule $\\theta(t) = c e^{-at} + \\frac{b}{a}$, soit poser $x = \\theta - \\frac{b}{a}$ pour retrouver l’équation homogène $x’ + ax = 0$.',
    exercise: {
      id: 'tc_m_num_l12_eq_p05_q03',
      type: 'mcq',
      prompt: 'Si $\\theta$ vérifie $\\theta’(t) = -0{,}1(\\theta(t) - 25)$, quelle équation vérifie $x(t) = \\theta(t) - 25$ ?',
      options: [
        '$x’(t) + 0{,}1\\,x(t) = 25$',
        '$x’(t) + 0{,}1\\,x(t) = 0$',
        '$x’(t) - 0{,}1\\,x(t) = 0$',
        '$x’(t) = 25$',
      ],
      correctAnswerIndex: 1,
      explanation: '$x’(t) = \\theta’(t) = -0{,}1 x(t) \\iff x’(t) + 0{,}1\\,x(t) = 0$, dont les solutions sont $x(t) = c e^{-0{,}1 t}$, soit $\\theta(t) = c e^{-0{,}1 t} + 25$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Schéma avec solution particulière',
    stepTheme: 'green',
    stepTitle: 'Les 4 étapes de l’exercice type Bac avec second membre $g(x)$',
    paragraphText:
      'Dans presque tous les sujets de Bac C sur $(E) : y’ + ay = \\varphi(x)$, les questions suivent le même plan (Ex. 4 et Approfondissement p.6–7) : (1) Trouver $m$ ou vérifier qu’une fonction particulière $g$ est solution de $(E)$ ; (2) Résoudre l’homogène $(E’) : y’ + ay = 0$ ; (3) Montrer que $f$ est solution de $(E) \\iff f - g$ est solution de $(E’)$ ; (4) En déduire $f(x) = g(x) + k e^{-ax}$ et déterminer $k$ avec une condition initiale.',
    exercise: {
      id: 'tc_m_num_l12_eq_p05_q04',
      type: 'mcq',
      prompt: 'Soient $(E) : y’ + 3y = 2e^{-x}$, $h(x) = e^{-x}$ solution de $(E)$, et $(E’) : y’ + 3y = 0$. Pourquoi $h - g$ solution de $(E’)$ équivaut-il à $g$ solution de $(E)$ ?',
      options: [
        'Car $(h - g)’ + 3(h - g) = (h’ + 3h) - (g’ + 3g) = 2e^{-x} - (g’ + 3g)$',
        'Car $h$ et $g$ sont égales',
        'Car $h’ + 3h = 0$',
        'Car $e^{-x} > 0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Par linéarité, $(h - g)’ + 3(h - g) = (h’ + 3h) - (g’ + 3g)$. Or $h’ + 3h = 2e^{-x}$, donc cette quantité est nulle ssi $g’ + 3g = 2e^{-x}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Trouver les coefficients',
    stepTheme: 'slate',
    stepTitle: 'Déterminer une solution particulière polynomiale ou exponentielle',
    paragraphText:
      'Pour trouver $g(x) = \\alpha x + \\beta$ solution de $y’ + 2y = 4x - 2$ : on dérive $g’(x) = \\alpha$, puis on injecte dans $g’ + 2g = 4x - 2 \\implies \\alpha + 2(\\alpha x + \\beta) = 4x - 2 \\implies 2\\alpha x + (\\alpha + 2\\beta) = 4x - 2$. Par identification des polynômes : $2\\alpha = 4 \\implies \\alpha = 2$, et $2 + 2\\beta = -2 \\implies \\beta = -2$. Donc $g(x) = 2x - 2$ !',
    exercise: {
      id: 'tc_m_num_l12_eq_p05_q05',
      type: 'mcq',
      prompt: 'Pour quelle valeur de $\\alpha$ la fonction $g(x) = \\alpha x e^{-2x}$ est-elle solution de $y’ + 2y = 3e^{-2x}$ ?',
      options: ['$\\alpha = 1$', '$\\alpha = 3$', '$\\alpha = \\frac{3}{2}$', '$\\alpha = -3$'],
      correctAnswerIndex: 1,
      explanation: '$g’(x) = \\alpha(1 - 2x)e^{-2x}$, donc $g’(x) + 2g(x) = \\alpha e^{-2x} - 2\\alpha x e^{-2x} + 2\\alpha x e^{-2x} = \\alpha e^{-2x} = 3e^{-2x} \\implies \\alpha = 3$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Attention aux unités de temps',
    stepTheme: 'orange',
    stepTitle: 'Toujours fixer l’origine des temps $t = 0$ et l’unité avant de modéliser !',
    paragraphText:
      'Dans la situation de démographie ($1990 \\to 1995 \\to \\text{population } 20\\text{ M}$) comme dans la dissolution ($t = 0 \\to t = 5\\text{ min}$), il faut impérativement déclarer dès la ligne 1 : « On prend $t = 0$ pour l’année $1990$, avec $t$ en années » (sinon écrire $f(1990)$ donne des exposants énormes inutilisables !). De plus, pour résoudre $e^{at} = K$, on passe à $\\ln$ et on vérifie l’arrondi demandé.',
    konanTip: 'Dans $f(t) = 20\\,e^{at}$, si tu obtiens $a > 0$ pour une quantité qui diminue (dissolution/refroidissement), stop : tu as une erreur de signe !',
    exercise: {
      id: 'tc_m_num_l12_eq_p05_q06',
      type: 'mcq',
      prompt: 'On place $20\\text{ g}$ d’une substance à $t = 0$ ; il reste $10\\text{ g}$ à $t = 5\\text{ min}$ selon $f(t) = 20 e^{at}$. Quel doit être le signe de $a$ et sa valeur exacte ?',
      options: [
        '$a > 0$, $a = \\frac{\\ln 2}{5}$',
        '$a < 0$, $a = -\\frac{\\ln 2}{5}$',
        '$a < 0$, $a = -\\frac{\\ln 10}{5}$',
        '$a < 0$, $a = -5\\ln 2$',
      ],
      correctAnswerIndex: 1,
      explanation: '$20 e^{5a} = 10 \\iff e^{5a} = \\frac{1}{2} \\iff 5a = \\ln\\left(\\frac{1}{2}\\right) = -\\ln 2 \\iff a = -\\frac{\\ln 2}{5} < 0$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Récapitulatif Bac C',
    stepTheme: 'green',
    stepTitle: 'Checklist avant de rendre sa copie sur les équations différentielles',
    paragraphText:
      '(1) Normaliser le coefficient de $y’$ ou $y’’$ à $1$. (2) Identifier sans erreur de signe $a$, $\\frac{b}{a}$ ou $\\pm \\omega^2$. (3) Toujours préciser « $k \\in \\mathbb{R}$ » ou « $(a, b) \\in \\mathbb{R}^2$ » pour l’ensemble général des solutions. (4) Redériver mentalement ta solution finale et vérifier qu’elle satisfait l’équation ET les conditions initiales.',
    exercise: {
      id: 'tc_m_num_l12_eq_p05_q07',
      type: 'mcq',
      prompt: 'Une fonction $f$ vérifie $f’’(x) + 16 f(x) = 0$ sur $\\mathbb{R}$, avec $f(0) = 0$ et $f’(0) = 8$. Quelle est l’expression de $f(x)$ ?',
      options: [
        '$f(x) = 8\\sin(4x)$',
        '$f(x) = 2\\sin(4x)$',
        '$f(x) = 2\\cos(4x)$',
        '$f(x) = 2 e^{4x} - 2 e^{-4x}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\omega = \\sqrt{16} = 4$, donc $f(x) = a\\cos(4x) + b\\sin(4x)$. $f(0) = a = 0$ et $f’(0) = 4b = 8 \\implies b = 2$. D’où $f(x) = 2\\sin(4x)$.',
    },
  },
];

export const MATHS_TLE_C_L12_EQUATIONS_DIFFERENTIELLES: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l12_equations_differentielles',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 12,
  title: 'Leçon 12 : Équations différentielles',
  summary:
    'Notion d’équation différentielle et ordre, équations linéaires du 1er ordre y’ + ay = 0 et y’ + ay = b (ou g(x)), équations linéaires du 2nd ordre y’’ + my = 0 selon le signe de m, conditions initiales et modélisations (dissolution, Newton, démographie).',
  officialVolumeHours: 6,
  contentVersion: 2,
  source: 'CÔTE D’IVOIRE – ÉCOLE NUMÉRIQUE — Terminale C Mathématiques (Leçon 12 : Équations différentielles)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l12_equations_differentielles_p01',
      order: 1,
      title: 'Notion d’équation différentielle, ordre et cas y’ = b',
      summary:
        'Reconnaître une équation différentielle et son ordre, vérifier qu’une fonction donnée est solution, distinguer solution générale et solution unique, et résoudre le cas a = 0 (y’ = b).',
      conceptExplanation:
        'Une équation différentielle relie une fonction inconnue $y$ à une ou plusieurs de ses dérivées ($y’$, $y’’$, …). L’ordre est celui de la plus haute dérivée. Résoudre sur un intervalle $K$ consiste à déterminer toutes les fonctions dérivables vérifiant l’équation sur $K$.',
      keyRule: 'Toujours vérifier la présence d’au moins une dérivée de $y$ ; sans condition initiale, la solution générale dépend d’une constante (ordre $1$) ou de deux constantes (ordre $2$).',
      formulas: [
        { name: 'Cas a = 0', formula: 'y’ = b \\iff y(x) = bx + c \\quad (c \\in \\mathbb{R})' },
      ],
      workedExample: {
        title: 'Dissolution chimique (situation d’apprentissage)',
        statement: 'À $t=0$, $f(0)=20\\text{ g}$. La vitesse vérifie $f’(t) = -k f(t)$ ($k>0$) et $10\\text{ g}$ se dissolvent en $5\\text{ min}$ ($f(5)=10$). Trouver $f(t)$.',
        methodSteps: [
          'Les solutions de $f’ + kf = 0$ sont $f(t) = c\\,e^{-kt}$.',
          '$f(0) = 20 \\implies c = 20$, puis $f(5) = 20 e^{-5k} = 10 \\implies e^{-5k} = \\frac{1}{2} \\implies k = \\frac{\\ln 2}{5}$.',
        ],
        conclusion: '$f(t) = 20\\,e^{-\\frac{\\ln 2}{5}t}$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_equations_differentielles_p02',
      order: 2,
      title: 'Équations du 1er ordre homogènes y’ + ay = 0 et condition initiale',
      summary:
        'Résoudre y’ + ay = 0 sur ℝ (x ↦ k e^{−ax}), ramener αy’ = βy sous forme canonique et trouver l’unique solution vérifiant y(x₀) = y₀.',
      conceptExplanation:
        'Les solutions sur $\\mathbb{R}$ de $y’ + ay = 0$ ($a \\in \\mathbb{R}$) sont les fonctions $x \\mapsto k\\,e^{-ax}$ ($k \\in \\mathbb{R}$). Pour tout couple $(x_0 ; y_0)$, il existe une unique solution vérifiant $y(x_0) = y_0$ : $y(x) = y_0\\,e^{-a(x - x_0)}$.',
      keyRule: 'Toujours isoler $y’$ avec coefficient $1$ sous la forme $y’ + ay = 0$ et ne pas oublier le signe moins dans $e^{-ax}$.',
      formulas: [
        { name: 'Solution générale de y’ + ay = 0', formula: 'y(x) = k\\,e^{-ax} \\qquad (k \\in \\mathbb{R})' },
        { name: 'Condition initiale', formula: 'y(x) = y_0\\,e^{-a(x - x_0)}' },
      ],
      workedExample: {
        title: 'Résolution de y’ − (ln 2)y = 0 avec f(2) = 1/2',
        statement: 'Trouver la solution $f$ de $y’ - (\\ln 2)y = 0$ vérifiant $f(2) = \\frac{1}{2}$.',
        methodSteps: [
          'Ici $a = -\\ln 2$, donc $f(x) = k\\,e^{x\\ln 2}$ ($k \\in \\mathbb{R}$).',
          '$f(2) = \\frac{1}{2} \\iff k e^{2\\ln 2} = \\frac{1}{2} \\iff 4k = \\frac{1}{2} \\iff k = \\frac{1}{8}$.',
        ],
        conclusion: '$f(x) = \\frac{1}{8}e^{x\\ln 2}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_equations_differentielles_p03',
      order: 3,
      title: 'Équations du 1er ordre avec second membre y’ + ay = b ou g(x)',
      summary:
        'Résoudre y’ + ay = b (x ↦ k e^{−ax} + b/a), déterminer la constante avec condition initiale, et résoudre y’ + ay = g(x) à l’aide d’une solution particulière.',
      conceptExplanation:
        'Lorsque $a \\ne 0$, les solutions de $y’ + ay = b$ sont $x \\mapsto k\\,e^{-ax} + \\frac{b}{a}$ ($k \\in \\mathbb{R}$). Plus généralement, si $g_0$ est une solution particulière de $y’ + ay = \\varphi(x)$, toute solution s’écrit $g_0(x) + k\\,e^{-ax}$.',
      keyRule: 'Solution complète $=$ solution particulière $+$ solution homogène $k e^{-ax}$.',
      formulas: [
        { name: 'Solutions de y’ + ay = b (a ≠ 0)', formula: 'y(x) = k\\,e^{-ax} + \\frac{b}{a} \\qquad (k \\in \\mathbb{R})' },
        { name: 'Avec solution particulière g₀', formula: 'y(x) = g_0(x) + k\\,e^{-ax} \\qquad (k \\in \\mathbb{R})' },
      ],
      workedExample: {
        title: 'Résolution de y’ − 3y = 7 avec f(0) = 1',
        statement: 'Déterminer la solution $f$ de $y’ - 3y = 7$ telle que $f(0) = 1$.',
        methodSteps: [
          'Forme générale ($a = -3$, $b = 7$) : $f(x) = c\\,e^{3x} - \\frac{7}{3}$ ($c \\in \\mathbb{R}$).',
          '$f(0) = 1 \\iff c - \\frac{7}{3} = 1 \\iff c = \\frac{10}{3}$.',
        ],
        conclusion: '$f(x) = \\frac{10}{3}e^{3x} - \\frac{7}{3}$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_equations_differentielles_p04',
      order: 4,
      title: 'Équations du 2nd ordre y’’ + my = 0 et conditions initiales',
      summary:
        'Résoudre y’’ + my = 0 selon le signe de m (m = 0 : ax + b ; m = −ω² < 0 : a e^{−ωx} + b e^{ωx} ; m = ω² > 0 : a cos(ωx) + b sin(ωx)) et exploiter y(x₀) et y’(x₀).',
      conceptExplanation:
        'Selon le signe de $m$, l’équation $y’’ + my = 0$ admet trois familles de solutions à deux paramètres $(a, b) \\in \\mathbb{R}^2$ : affines si $m = 0$, exponentielles si $m < 0$, trigonométriques si $m > 0$. Fixer $y(x_0) = y_0$ et $y’(x_0) = z_0$ détermine un unique couple $(a, b)$.',
      keyRule: '$y’’ - \\omega^2 y = 0 \\to$ exponentielles ; $y’’ + \\omega^2 y = 0 \\to \\cos(\\omega x),\\, \\sin(\\omega x)$ (attention à prendre $\\omega = \\sqrt{|m|}$ !).',
      formulas: [
        { name: 'Cas m = −ω² < 0', formula: 'y’’ - \\omega^2 y = 0 \\iff y(x) = a\\,e^{-\\omega x} + b\\,e^{\\omega x}' },
        { name: 'Cas m = ω² > 0', formula: 'y’’ + \\omega^2 y = 0 \\iff y(x) = a\\cos(\\omega x) + b\\sin(\\omega x)' },
      ],
      workedExample: {
        title: 'Résolution de y’’ + 25y = 0 avec f(0) = 1 et f’(π/5) = −2',
        statement: 'Résoudre $y’’ + 25y = 0$ puis déterminer $f$ vérifiant $f(0) = 1$ et $f’(\\frac{\\pi}{5}) = -2$.',
        methodSteps: [
          '$y’’ + 5^2 y = 0$ ($\\omega = 5$) : $f(x) = a\\cos(5x) + b\\sin(5x)$, d’où $f’(x) = -5a\\sin(5x) + 5b\\cos(5x)$.',
          '$f(0) = 1 \\implies a = 1$, et $f’(\\frac{\\pi}{5}) = -5b = -2 \\implies b = \\frac{2}{5}$.',
        ],
        conclusion: '$f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l12_equations_differentielles_p05',
      order: 5,
      title: 'Modélisations (démographie, Newton) et méthode complète',
      summary:
        'Mettre en équation une croissance démographique ou la loi de refroidissement de Newton (changement x = θ − T_amb) et conduire la méthode complète par solution particulière.',
      conceptExplanation:
        'En sciences physiques, chimiques et économiques, toute grandeur dont la vitesse d’évolution est proportionnelle à elle-même ou à son écart à un équilibre conduit à une équation $y’ + ay = b$. Un choix propre d’origine $t = 0$ et le passage par $\\ln$ permettent de déterminer les taux et d’effectuer des prévisions.',
      keyRule: 'Toujours définir $t = 0$ et l’unité de temps, poser le système des conditions connues et vérifier le signe physique du taux.',
      formulas: [
        { name: 'Refroidissement vers T_amb', formula: '\\theta(t) = (\\theta_0 - T_{\\text{amb}})e^{-k^2 t} + T_{\\text{amb}}' },
      ],
      workedExample: {
        title: 'Loi de refroidissement de Newton',
        statement: 'Un corps passe de $70\\text{ °C}$ ($t=0$) à $60\\text{ °C}$ ($t=5\\text{ min}$) dans un local à $30\\text{ °C}$ avec $(\\theta - 30)’ = -k^2(\\theta - 30)$. Calculer $\\theta(20)$.',
        methodSteps: [
          'En posant $x = \\theta - 30$, $x(t) = c\\,e^{-k^2 t}$, d’où $\\theta(t) = 40\\,e^{-k^2 t} + 30$ (car $\\theta(0) = 70$).',
          '$\\theta(5) = 60 \\implies 40 e^{-5k^2} = 30 \\implies -k^2 = \\frac{1}{5}\\ln\\left(\\frac{3}{4}\\right)$.',
          'Pour $t = 20$ : $\\theta(20) = 40\\left(\\frac{3}{4}\\right)^4 + 30 \\approx 42{,}66\\text{ °C}$.',
        ],
        conclusion: 'Au bout de $20\\text{ min}$, la température est d’environ $42{,}66\\text{ °C}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};
