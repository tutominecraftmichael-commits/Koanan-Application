import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Optimiser le bénéfice d’une usine de poudre de cacao',
    paragraphText:
      'Une usine de transformation de cacao modélise son bénéfice (en millions de francs CFA) pour $x \\in [1 ; 5]$ milliers de sachets produits par $B(x) = -\\frac{1}{3}x^3 + 9x + 2$. Pour trouver le maximum, on dérive : $B’(x) = -x^2 + 9 = (3 - x)(3 + x)$. Sur $[1 ; 3[$, $B’(x) > 0$ donc $B$ croît ; sur $]3 ; 5]$, $B’(x) < 0$ donc $B$ décroît. Le bénéfice maximal est atteint en $x = 3$ (soit $3\\,000$ sachets) et vaut $B(3) = -9 + 27 + 2 = 20$ millions.',
    formula: {
      name: 'Maximum par annulation de dérivée',
      formula: 'B’(x) = 9 - x^2 = (3 - x)(3 + x) = 0 \\text{ sur } [1 ; 5] \\iff x = 3',
    },
    visualSchema: {
      type: 'variation_table',
      title: 'Variations du bénéfice B(x) sur [1 ; 5]',
      variation: {
        xLabel: 'x',
        fLabel: 'B(x)',
        xValues: ['1', '3', '5'],
        values: [
          { text: '10,67', level: 'bottom' },
          { text: '20', level: 'top' },
          { text: '5,33', level: 'bottom' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l03_p01_q01',
      type: 'mcq',
      prompt: 'Pour $B(x) = -\\frac{1}{3}x^3 + 9x + 2$ sur $[1 ; 5]$, quel est le signe de $B’(x)$ sur l’intervalle $]3 ; 5]$ ?',
      options: [
        'Strictement positif, car $9 > 0$',
        'Strictement négatif, donc $B$ est décroissante après $3\\,000$ sachets',
        'Nul sur tout l’intervalle',
        'Alternativement positif et négatif',
      ],
      correctAnswerIndex: 1,
      explanation: '$B’(x) = 9 - x^2$. Pour $x \\in ]3 ; 5]$, $x^2 > 9$, donc $B’(x) < 0$ : produire plus de $3\\,000$ sachets fait baisser le bénéfice.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définitions',
    stepTheme: 'blue',
    stepTitle: 'Nombre dérivé à gauche $f_g’(x_0)$ et à droite $f_d’(x_0)$',
    paragraphText:
      'Soit $f$ définie sur un intervalle contenant $x_0$. $f$ est dérivable à gauche en $x_0$ si $\\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est un réel fini, noté $f_g’(x_0)$. De même, $f$ est dérivable à droite en $x_0$ si $\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0}$ existe et est un réel fini, noté $f_d’(x_0)$.',
    formula: {
      name: 'Critère de dérivabilité en x_0',
      formula: 'f \\text{ dérivable en } x_0 \\iff f_g’(x_0) \\text{ et } f_d’(x_0) \\text{ existent et } f_g’(x_0) = f_d’(x_0)',
    },
    exercise: {
      id: 'tc_m_num_l03_p01_q02',
      type: 'mcq',
      prompt: 'Si une fonction $f$ admet $f_g’(2) = -3$ et $f_d’(2) = 1$, que peut-on dire en $x_0 = 2$ ?',
      options: [
        '$f$ est dérivable en $2$ avec $f’(2) = -1$',
        '$f$ est continue en $2$ mais non dérivable en $2$',
        '$f$ n’est pas continue en $2$',
        '$f$ admet une tangente horizontale en $2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’existence de dérivées finies à gauche et à droite implique la continuité à gauche et à droite en $2$, mais comme $f_g’(2) \\ne f_d’(2)$, $f$ n’est pas dérivable en $2$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Interprétation graphique',
    stepTheme: 'violet',
    stepTitle: 'Demi-tangentes à gauche et à droite au point $M_0(x_0 ; f(x_0))$',
    paragraphText:
      'Si $f$ est dérivable à gauche en $x_0$, $(C_f)$ admet au point $M_0(x_0 ; f(x_0))$ une demi-tangente à gauche d’équation $y = f_g’(x_0)(x - x_0) + f(x_0)$ pour $x \\leqslant x_0$, dirigée par le vecteur $\\vec{u}(-1 ; -f_g’(x_0))$. Si $f$ est dérivable à droite en $x_0$, la demi-tangente à droite a pour équation $y = f_d’(x_0)(x - x_0) + f(x_0)$ pour $x \\geqslant x_0$, dirigée par $\\vec{v}(1 ; f_d’(x_0))$.',
    formula: {
      name: 'Vecteurs directeurs des demi-tangentes',
      formula: '\\vec{u}\\begin{pmatrix}-1 \\\\ -f_g’(x_0)\\end{pmatrix} \\quad (x \\leqslant x_0) \\qquad ; \\qquad \\vec{v}\\begin{pmatrix}1 \\\\ f_d’(x_0)\\end{pmatrix} \\quad (x \\geqslant x_0)',
    },
    exercise: {
      id: 'tc_m_num_l03_p01_q03',
      type: 'mcq',
      prompt: 'Au point $M_0(1 ; 2)$, on a $f_g’(1) = 4$ et $f_d’(1) = -2$. Quel vecteur dirige la demi-tangente à gauche ($x \\leqslant 1$) ?',
      options: ['$(1 ; 4)$', '$(-1 ; -4)$', '$(1 ; -2)$', '$(-1 ; 4)$'],
      correctAnswerIndex: 1,
      explanation: 'La demi-tangente à gauche pointe vers les $x$ décroissants : vecteur directeur $(-1 ; -f_g’(1)) = (-1 ; -4)$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice type 1',
    stepTheme: 'slate',
    stepTitle: 'Raccordement de deux fonctions rationnelles en $x_0 = 1$',
    paragraphText:
      'Soit $f(x) = \\frac{1}{x - 2}$ si $x \\leqslant 1$, et $f(x) = -\\frac{1}{x}$ si $x > 1$. On a $f(1) = -1$ et $\\lim_{1^+} f = -1$, donc $f$ est continue en $1$. À gauche ($x < 1$) : $\\frac{f(x) - f(1)}{x - 1} = \\frac{\\frac{1}{x-2} + 1}{x - 1} = \\frac{1}{x - 2} \\xrightarrow[x \\to 1^-]{} -1 = f_g’(1)$. À droite ($x > 1$) : $\\frac{-\\frac{1}{x} + 1}{x - 1} = \\frac{1}{x} \\xrightarrow[x \\to 1^+]{} 1 = f_d’(1)$. Comme $-1 \\ne 1$, $f$ n’est pas dérivable en $1$ (point anguleux).',
    exercise: {
      id: 'tc_m_num_l03_p01_q04',
      type: 'mcq',
      prompt: 'Soit $g(x) = x^2$ si $x \\leqslant 0$ et $g(x) = x^3$ si $x > 0$. Que vaut $g_g’(0)$ et $g_d’(0)$ ?',
      options: [
        '$g_g’(0) = 0$ et $g_d’(0) = 1$',
        '$g_g’(0) = 0$ et $g_d’(0) = 0$, donc $g$ est dérivable en $0$',
        '$g_g’(0) = 2$ et $g_d’(0) = 3$',
        '$g$ n’est pas continue en $0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'À gauche $\\frac{x^2 - 0}{x} = x \\to 0$ ; à droite $\\frac{x^3 - 0}{x} = x^2 \\to 0$. Comme $g_g’(0) = g_d’(0) = 0$, $g$ est dérivable en $0$ avec $g’(0) = 0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Exercice type 2',
    stepTheme: 'slate',
    stepTitle: 'Raccordement avec dérivées nulles ou égales en $-1$',
    paragraphText:
      'Soit $h(x) = 1 - x^2$ pour $x \\leqslant -1$ et $h(x) = \\frac{2x + 2}{x + 2}$ pour $x > -1$. On vérifie $h(-1) = 0 = \\lim_{-1^+} h(x)$. À gauche : $\\frac{1 - x^2}{x + 1} = 1 - x \\xrightarrow[x \\to -1^-]{} 2$. À droite : $\\frac{\\frac{2(x+1)}{x+2}}{x + 1} = \\frac{2}{x + 2} \\xrightarrow[x \\to -1^+]{} 2$. Ici $h_g’(-1) = h_d’(-1) = 2$, donc $h$ est dérivable en $-1$ et admet une tangente unique de pente $2$ : $y = 2(x + 1)$.',
    exercise: {
      id: 'tc_m_num_l03_p01_q05',
      type: 'mcq',
      prompt: 'Pour une fonction $f$ définie par morceaux, quelle est la condition nécessaire à vérifier AVANT même de parler de dérivabilité en $x_0$ ?',
      options: [
        'Que $f$ soit paire',
        'Que $f$ soit continue en $x_0$ ($\\lim_{x_0^-} f = \\lim_{x_0^+} f = f(x_0)$)',
        'Que les dérivées des deux expressions s’annulent en $x_0$',
        'Que $x_0 = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Toute fonction dérivable en $x_0$ est continue en $x_0$. Si $\\lim_{x_0^-} f \\ne \\lim_{x_0^+} f$, le taux d’accroissement tend vers l’infini et $f$ ne peut pas être dérivable.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège de rédaction',
    stepTheme: 'orange',
    stepTitle: 'Ne pas dériver les deux expressions sans vérifier la continuité !',
    paragraphText:
      'Attention : si $f(x) = 2x + 1$ pour $x \\leqslant 0$ et $f(x) = 2x + 5$ pour $x > 0$, les « dérivées » valent toutes deux $2$, mais $f$ n’est pas continue en $0$ ($1 \\ne 5$), donc elle n’y est PAS dérivable ! De plus, on ne peut déduire $f_d’(x_0) = \\lim_{x_0^+} f’(x)$ que si $f$ est déjà continue en $x_0$ et que cette limite existe.',
    keyRule: 'Revenir systématiquement au taux d’accroissement $\\frac{f(x) - f(x_0)}{x - x_0}$ aux points de raccordement et aux bornes d’une racine.',
    exercise: {
      id: 'tc_m_num_l03_p01_q06',
      type: 'mcq',
      prompt: 'Soit $f(x) = x^2$ si $x < 1$ et $f(x) = 2x$ si $x \\geqslant 1$. $f$ est-elle dérivable en $1$ ?',
      options: [
        'Oui, car $(x^2)’(1) = 2 = (2x)’(1)$',
        'Non, car $f$ est discontinue en $1$ ($\\lim_{1^-} f = 1 \\ne 2 = f(1)$)',
        'Oui, dérivable à droite seulement',
        'Oui, car $f(1) = 2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Puisque $\\lim_{x \\to 1^-} f(x) = 1 \\ne 2 = f(1)$, $f$ n’est pas continue en $1$, donc impossible d’y être dérivable !',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Méthode générale',
    stepTheme: 'green',
    stepTitle: 'Étudier la dérivabilité en un point frontière $x_0$',
    paragraphText:
      '1) Vérifier que $f$ est définie et continue en $x_0$. 2) Former le taux d’accroissement $T(x) = \\frac{f(x) - f(x_0)}{x - x_0}$ pour $x < x_0$ puis pour $x > x_0$. 3) Calculer $\\lim_{x_0^-} T(x)$ et $\\lim_{x_0^+} T(x)$. 4) Conclure : deux limites finies égales $\\implies$ dérivable ; deux limites finies différentes $\\implies$ point anguleux avec deux demi-tangentes.',
    exercise: {
      id: 'tc_m_num_l03_p01_q07',
      type: 'mcq',
      prompt: 'Que vaut la dérivée à gauche et à droite de $f(x) = |x - 3| + 2x$ en $x_0 = 3$ ?',
      options: [
        '$f_g’(3) = 1$ et $f_d’(3) = 3$',
        '$f_g’(3) = -1$ et $f_d’(3) = 1$',
        '$f_g’(3) = 3$ et $f_d’(3) = 3$',
        '$f_g’(3) = 2$ et $f_d’(3) = 3$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Pour $x < 3$, $f(x) = 3 - x + 2x = x + 3$, pente $1$. Pour $x > 3$, $f(x) = x - 3 + 2x = 3x - 3$, pente $3$. Donc $f_g’(3) = 1$ et $f_d’(3) = 3$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Demi-tangente verticale',
    stepTheme: 'violet',
    stepTitle: 'Taux d’accroissement tendant vers $\\pm\\infty$',
    paragraphText:
      'Lorsque $f$ est continue en $x_0$ et que le taux d’accroissement $\\frac{f(x) - f(x_0)}{x - x_0}$ tend vers $+\\infty$ ou $-\\infty$ quand $x \\to x_0^+$ (ou $x \\to x_0^-$), la fonction $f$ n’est PAS dérivable en $x_0$, mais sa courbe $(C_f)$ admet au point $M_0(x_0 ; f(x_0))$ une demi-tangente verticale d’équation $x = x_0$.',
    formula: {
      name: 'Critère de demi-tangente verticale',
      formula: '\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0} = \\pm\\infty \\implies \\text{demi-tangente verticale en } M_0(x_0 ; f(x_0))',
    },
    exercise: {
      id: 'tc_m_num_l03_p02_q01',
      type: 'mcq',
      prompt: 'Si $\\lim_{x \\to 2^+} \\frac{f(x) - f(2)}{x - 2} = +\\infty$ avec $f$ continue en $2$, quelle est l’allure de $(C_f)$ au point $(2 ; f(2))$ ?',
      options: [
        'Une asymptote verticale $x = 2$',
        'Une demi-tangente horizontale',
        'Une demi-tangente verticale dirigée vers le haut ($+\\vec{j}$)',
        'Un trou sur la courbe',
      ],
      correctAnswerIndex: 2,
      explanation: 'À droite de $2$, $x - 2 > 0$, et le taux tend vers $+\\infty$, donc $f(x) - f(2) > 0$ croît infiniment plus vite que $x - 2$ : demi-tangente verticale dirigée vers $+\\vec{j}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Orientation de la flèche',
    stepTheme: 'violet',
    stepTitle: 'Déterminer le sens (vers le haut ou vers le bas) d’une demi-tangente verticale',
    paragraphText:
      'Soit $\\vec{w}(0 ; \\varepsilon)$ le vecteur directeur de la demi-tangente verticale. À droite ($x > x_0$) : si le taux tend vers $+\\infty$, $f(x) > f(x_0)$ donc la demi-tangente est dirigée vers le haut ($+\\vec{j}$) ; s’il tend vers $-\\infty$, vers le bas ($-\\vec{j}$). À gauche ($x < x_0$, donc $x - x_0 < 0$) : si le taux tend vers $+\\infty$, $f(x) - f(x_0) < 0$, donc elle part vers le bas ($-\\vec{j}$) ! S’il tend vers $-\\infty$, elle part vers le haut ($+\\vec{j}$).',
    keyRule: 'À gauche de $x_0$, $x - x_0$ est négatif : un taux tendant vers $+\\infty$ signifie que la courbe arrive par le bas ($-\\vec{j}$).',
    exercise: {
      id: 'tc_m_num_l03_p02_q02',
      type: 'mcq',
      prompt: 'Soit $f(x) = \\sqrt{3 - x}$ définie sur $]-\\infty ; 3]$. Que vaut $\\lim_{x \\to 3^-} \\frac{f(x) - f(3)}{x - 3}$ et comment est orientée la demi-tangente en $3$ ?',
      options: [
        '$+\\infty$, demi-tangente vers le haut',
        '$-\\infty$, demi-tangente vers le haut (car $f(x) > 0$ pour $x < 3$)',
        '$-\\infty$, demi-tangente vers le bas',
        '$0$, demi-tangente horizontale',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{\\sqrt{3-x}}{x - 3} = -\\frac{1}{\\sqrt{3 - x}} \\xrightarrow[x \\to 3^-]{} -\\infty$. Comme $f(x) > f(3) = 0$ à gauche de $3$, la demi-tangente est dirigée vers le haut ($+\\vec{j}$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exemple 1',
    stepTheme: 'slate',
    stepTitle: 'Étudier $f(x) = \\sqrt{x} - x$ en $x_0 = 0^+$',
    paragraphText:
      'Pour $x > 0$, $f(0) = 0$ et $\\frac{f(x) - f(0)}{x - 0} = \\frac{\\sqrt{x} - x}{x} = \\frac{1}{\\sqrt{x}} - 1$. Quand $x \\to 0^+$, $\\frac{1}{\\sqrt{x}} \\to +\\infty$, donc $\\lim_{x \\to 0^+} \\frac{f(x) - f(0)}{x} = +\\infty$. Ainsi $f$ n’est pas dérivable en $0$, mais $(C_f)$ admet à l’origine $O(0 ; 0)$ une demi-tangente verticale dirigée vers le haut ($+\\vec{j}$).',
    visualSchema: {
      type: 'function_plot',
      title: 'Courbe de f(x) = √x − x en 0⁺',
      caption: 'Demi-tangente verticale à l’origine (pente infinie en 0⁺), puis maximum en x = 0,25',
      plot: {
        xMin: 0,
        xMax: 2,
        yMin: -0.6,
        yMax: 0.5,
        xStep: 0.5,
        yStep: 0.25,
        curves: [{ label: 'sqrt(x) - x', color: 'blue', pieces: [{ expr: 'sqrt(x) - x', from: 0, to: 2 }] }],
        points: [
          { x: 0, y: 0, label: 'O(0;0)', filled: true, color: 'orange' },
          { x: 0.25, y: 0.25, label: 'Max (0.25;0.25)', filled: true, color: 'green' },
        ],
        verticalLines: [{ x: 0, label: 'x=0', color: 'orange' }],
      },
    },
    exercise: {
      id: 'tc_m_num_l03_p02_q03',
      type: 'mcq',
      prompt: 'La fonction $f(x) = \\sqrt{x} - x$ est dérivable sur :',
      options: ['$[0 ; +\\infty[$', '$]0 ; +\\infty[$', '$\\mathbb{R}$', '$]0{,}25 ; +\\infty[$'],
      correctAnswerIndex: 1,
      explanation: 'Elle est dérivable sur $]0 ; +\\infty[$ (somme de $\\sqrt{x}$ et $-x$), mais non dérivable en $0$ où le taux d’accroissement tend vers $+\\infty$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exemple 2 (Tle C)',
    stepTheme: 'slate',
    stepTitle: 'Étudier $\\varphi(x) = \\sqrt{\\frac{1 - x}{1 + x}}$ en $x_0 = 1^-$',
    paragraphText:
      'Le domaine est $D_\\varphi = ]-1 ; 1]$. En $x = 1$, $\\varphi(1) = 0$. Pour $x \\in ]-1 ; 1[$, le taux d’accroissement vaut $\\frac{\\varphi(x) - \\varphi(1)}{x - 1} = \\frac{1}{x - 1}\\sqrt{\\frac{1 - x}{1 + x}} = -\\frac{1}{\\sqrt{(1 - x)(1 + x)}}$. Quand $x \\to 1^-$, $(1 - x)(1 + x) \\to 0^+$, donc le taux tend vers $-\\infty$. $(C_\\varphi)$ admet au point $(1 ; 0)$ une demi-tangente verticale.',
    formula: {
      name: 'Simplification sous radical',
      formula: '\\frac{\\sqrt{1 - x}}{x - 1} = -\\frac{\\sqrt{1 - x}}{1 - x} = -\\frac{1}{\\sqrt{1 - x}} \\quad (x < 1)',
    },
    exercise: {
      id: 'tc_m_num_l03_p02_q04',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 2^+} \\frac{\\sqrt{x^2 - 4}}{x - 2}$ ?',
      options: ['$0$', '$2$', '$+\\infty$', '$-\\infty$'],
      correctAnswerIndex: 2,
      explanation: 'Pour $x > 2$, $\\frac{\\sqrt{(x-2)(x+2)}}{x - 2} = \\sqrt{\\frac{x+2}{x-2}} \\xrightarrow[x \\to 2^+]{} +\\infty$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Confusion classique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre asymptote verticale et demi-tangente verticale',
    paragraphText:
      'Une asymptote verticale en $x = x_0$ signifie que $\\lim_{x \\to x_0} f(x) = \\pm\\infty$ ($f$ n’est pas définie ou tend vers l’infini). Une demi-tangente verticale en $M_0(x_0 ; f(x_0))$ signifie au contraire que $f(x_0)$ est FINI (la courbe touche le point $M_0$), mais que sa pente (le taux d’accroissement) devient infinie !',
    exercise: {
      id: 'tc_m_num_l03_p02_q05',
      type: 'mcq',
      prompt: 'La fonction $f(x) = \\sqrt{x^2 - 1}$ en $x_0 = 1^+$ possède :',
      options: [
        'Une asymptote verticale d’équation $x = 1$',
        'Une demi-tangente verticale au point $(1 ; 0)$',
        'Une tangente horizontale au point $(1 ; 0)$',
        'Aucune particularité graphique',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(1) = 0$ est fini et $\\lim_{x \\to 1^+} \\frac{\\sqrt{x^2 - 1}}{x - 1} = +\\infty$ : c’est donc une demi-tangente verticale en $(1 ; 0)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Cas de tangente verticale bilatérale',
    stepTheme: 'slate',
    stepTitle: 'Point d’inflexion à tangente verticale : $f(x) = x^{1/3}$ en $0$',
    paragraphText:
      'Pour $f(x) = \\sqrt[3]{x}$ sur $\\mathbb{R}$ (ou $\\operatorname{sgn}(x)\\sqrt{|x|}$), $f(0) = 0$ et pour $x \\ne 0$, $\\frac{f(x)}{x} = \\frac{1}{x^{2/3}} \\to +\\infty$ des deux côtés ($0^-$ et $0^+$). La courbe traverse l’axe des ordonnées en $O(0 ; 0)$ avec une tangente verticale complète (dirigée vers le bas à gauche et vers le haut à droite).',
    exercise: {
      id: 'tc_m_num_l03_p02_q06',
      type: 'mcq',
      prompt: 'Si $\\lim_{x \\to x_0^-} \\frac{f(x)-f(x_0)}{x-x_0} = -\\infty$ et $\\lim_{x \\to x_0^+} \\frac{f(x)-f(x_0)}{x-x_0} = +\\infty$, quel est le comportement de $(C_f)$ en $M_0(x_0 ; f(x_0))$ ?',
      options: [
        'Un point de rebroussement vertical tourné vers le haut (les deux demi-tangentes partent vers $+\\vec{j}$)',
        'Une tangente horizontale',
        'Une asymptote oblique',
        'Une courbe lisse sans particularité',
      ],
      correctAnswerIndex: 0,
      explanation: 'À gauche, $x - x_0 < 0$ et le taux $\\to -\\infty$ donc $f(x) > f(x_0)$ (demi-tangente vers le haut) ; à droite, $x - x_0 > 0$ et le taux $\\to +\\infty$ donc $f(x) > f(x_0)$ (demi-tangente aussi vers le haut) : c’est un point de rebroussement vertical (comme $x^{2/3}$ en $0$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan graphique',
    stepTheme: 'green',
    stepTitle: 'Traduire chaque limite du taux d’accroissement sur un dessin',
    paragraphText:
      'Avant de tracer une courbe au Bac, lister tous les points où $f$ n’est pas dérivable (raccordement de $|\\cdot|$, bornes de $\\sqrt{u}$ où $u(x_0) = 0$), calculer la limite du taux d’accroissement et marquer par une petite flèche soit l’angle (pentes finies différentes), soit la flèche verticale ($+\\vec{j}$ ou $-\\vec{j}$).',
    exercise: {
      id: 'tc_m_num_l03_p02_q07',
      type: 'mcq',
      prompt: 'Pour $f(x) = (x - 2)\\sqrt{x - 2}$ sur $[2 ; +\\infty[$, quelle est la limite du taux d’accroissement en $2^+$ ?',
      options: ['$+\\infty$ (demi-tangente verticale)', '$0$ (demi-tangente horizontale)', '$1$', '$-\\infty$'],
      correctAnswerIndex: 1,
      explanation: '$\\frac{(x - 2)\\sqrt{x - 2} - 0}{x - 2} = \\sqrt{x - 2} \\xrightarrow[x \\to 2^+]{} 0$ ! Donc $f$ EST dérivable à droite en $2$ avec $f_d’(2) = 0$ (demi-tangente horizontale).',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Dérivabilité sur un intervalle',
    stepTheme: 'blue',
    stepTitle: 'Cas d’un intervalle ouvert ou fermé $[a ; b]$',
    paragraphText:
      'Une fonction $f$ est dérivable sur un intervalle ouvert $]a ; b[$ si elle est dérivable en tout point de $]a ; b[$. Elle est dérivable sur un intervalle fermé $[a ; b]$ si elle est dérivable sur $]a ; b[$, dérivable à droite en $a$ et dérivable à gauche en $b$.',
    exercise: {
      id: 'tc_m_num_l03_p03_q01',
      type: 'mcq',
      prompt: 'La fonction racine carrée $x \\mapsto \\sqrt{x}$ est :',
      options: [
        'Dérivable sur $[0 ; +\\infty[$',
        'Dérivable sur $]0 ; +\\infty[$ seulement (non dérivable à droite en $0$)',
        'Dérivable sur $\\mathbb{R}$',
        'Dérivable en $0$ avec dérivée nulle',
      ],
      correctAnswerIndex: 1,
      explanation: 'En $0^+$, $\\frac{\\sqrt{x}}{x} = \\frac{1}{\\sqrt{x}} \\to +\\infty$, donc $x \\mapsto \\sqrt{x}$ n’est pas dérivable en $0$, mais est dérivable sur $]0 ; +\\infty[$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Théorème fondamental',
    stepTheme: 'violet',
    stepTitle: 'Dérivée d’une fonction composée $(f \\circ g)’$',
    paragraphText:
      'Soit $g$ une fonction dérivable sur un intervalle $I$ et $f$ une fonction dérivable sur un intervalle $J$ contenant $g(I)$. Alors la fonction composée $f \\circ g$ est dérivable sur $I$ et pour tout $x \\in I$ : $(f \\circ g)’(x) = g’(x) \\times f’\\bigl(g(x)\\bigr)$.',
    formula: {
      name: 'Règle de dérivation en chaîne',
      formula: '\\bigl(f \\circ g\\bigr)’(x) = g’(x) \\cdot f’\\bigl(g(x)\\bigr)',
    },
    exercise: {
      id: 'tc_m_num_l03_p03_q02',
      type: 'mcq',
      prompt: 'Quelle est la dérivée de $h(x) = \\cos(3x^2 - 1)$ sur $\\mathbb{R}$ ?',
      options: [
        '$-\\sin(3x^2 - 1)$',
        '$-6x\\sin(3x^2 - 1)$',
        '$6x\\sin(3x^2 - 1)$',
        '$-6x\\cos(3x^2 - 1)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Ici $g(x) = 3x^2 - 1$ ($g’(x) = 6x$) et $f(X) = \\cos X$ ($f’(X) = -\\sin X$), donc $h’(x) = 6x \\cdot (-\\sin(3x^2 - 1))$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Formulaire officiel Tle C',
    stepTheme: 'violet',
    stepTitle: 'Tableau des dérivées des fonctions composées',
    paragraphText:
      'À partir du théorème de composition, pour toute fonction $u$ dérivable sur $I$ : $(u^n)’ = n u’ u^{n-1}$ pour tout $n \\in \\mathbb{Q}^*$ (avec $u > 0$ si $n \\notin \\mathbb{N}$, ou $u \\ne 0$ si $n \\in \\mathbb{Z}^-$) ; $(\\sqrt{u})’ = \\frac{u’}{2\\sqrt{u}}$ (si $u > 0$) ; $(\\cos u)’ = -u’\\sin u$ ; $(\\sin u)’ = u’\\cos u$ ; $(\\tan u)’ = \\frac{u’}{\\cos^2 u} = u’(1 + \\tan^2 u)$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Formulaire des dérivées composées',
      tableData: {
        headers: ['Fonction', 'Conditions', 'Dérivée'],
        rows: [
          ['u^r (r ∈ Q*)', 'u > 0 (ou r ∈ N*)', 'r · u’ · u^{r-1}'],
          ['√u', 'u > 0 sur I', 'u’ / (2√u)'],
          ['cos(u)', 'u dérivable', '−u’ · sin(u)'],
          ['sin(u)', 'u dérivable', 'u’ · cos(u)'],
          ['tan(u)', 'cos(u) ≠ 0', 'u’ / cos²(u)'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l03_p03_q03',
      type: 'mcq',
      prompt: 'Sur $]-\\frac{\\pi}{4} ; \\frac{\\pi}{4}[$, quelle est la dérivée de $f(x) = \\tan(2x)$ ?',
      options: [
        '$\\frac{1}{\\cos^2(2x)}$',
        '$\\frac{2}{\\cos^2(2x)}$',
        '$2\\tan^2(2x)$',
        '$-\\frac{2}{\\sin^2(2x)}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $u(x) = 2x$, $u’(x) = 2$, d’où $(\\tan(2x))’ = \\frac{2}{\\cos^2(2x)} = 2(1 + \\tan^2(2x))$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Cas d’exposant rationnel',
    stepTheme: 'slate',
    stepTitle: 'Dérivabilité et dérivée de $f(x) = (4x - 1)\\sqrt{4x - 1}$',
    paragraphText:
      'Pour $x \\geqslant \\frac{1}{4}$, $f(x) = (4x - 1)^{3/2}$. Sur $]\\frac{1}{4} ; +\\infty[$, $4x - 1 > 0$, donc $f$ est dérivable et $f’(x) = \\frac{3}{2} \\cdot 4 \\cdot (4x - 1)^{1/2} = 6\\sqrt{4x - 1}$. En $x_0 = \\frac{1}{4}$, le taux d’accroissement vaut $\\frac{(4x - 1)\\sqrt{4x - 1} - 0}{x - \\frac{1}{4}} = 4\\sqrt{4x - 1} \\xrightarrow[x \\to (1/4)^+]{} 0$. Ainsi $f$ est dérivable sur tout $[\\frac{1}{4} ; +\\infty[$ (y compris en $\\frac{1}{4}$ avec $f’(\\frac{1}{4}) = 0$) !',
    formula: {
      name: 'Puissance 3/2 dérivable en la borne',
      formula: 'f(x) = (4x - 1)\\sqrt{4x - 1} \\implies f’(x) = 6\\sqrt{4x - 1} \\quad \\text{sur } \\left[\\frac{1}{4} ; +\\infty\\right[',
    },
    exercise: {
      id: 'tc_m_num_l03_p03_q04',
      type: 'mcq',
      prompt: 'Pour $f(x) = (x^2 + 1)^{-3}$, quelle est l’expression de $f’(x)$ ?',
      options: [
        '$-3(x^2 + 1)^{-4}$',
        '$-6x(x^2 + 1)^{-4}$',
        '$6x(x^2 + 1)^{-2}$',
        '$-3(2x)^{-4}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $u(x) = x^2 + 1$ ($u’(x) = 2x$) et $n = -3$, $(u^{-3})’ = -3 \\cdot 2x \\cdot (x^2+1)^{-4} = -6x(x^2+1)^{-4}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Erreur fréquente',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier le facteur $u’(x)$ ni se tromper sur les bornes',
    paragraphText:
      'Deux erreurs reviennent souvent au Bac : oublier de multiplier par $u’(x)$ dans $(\\sqrt{u})’ = \\frac{u’}{2\\sqrt{u}}$, et affirmer sans calcul que $u\\sqrt{u}$ n’est pas dérivable là où $u$ s’annule (alors que la formule $\\frac{u’\\sqrt{u} + \\dots}{}$ a une limite finie $0$ quand $x$ tend vers la racine simple de $u$ !).',
    exercise: {
      id: 'tc_m_num_l03_p03_q05',
      type: 'mcq',
      prompt: 'Quelle est la dérivée de $g(x) = \\sqrt{3x^2 + 4}$ sur $\\mathbb{R}$ ?',
      options: [
        '$\\frac{1}{2\\sqrt{3x^2 + 4}}$',
        '$\\frac{3x}{\\sqrt{3x^2 + 4}}$',
        '$\\frac{6x}{\\sqrt{3x^2 + 4}}$',
        '$\\frac{3x^2}{2\\sqrt{3x^2 + 4}}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{(3x^2 + 4)’}{2\\sqrt{3x^2 + 4}} = \\frac{6x}{2\\sqrt{3x^2 + 4}} = \\frac{3x}{\\sqrt{3x^2 + 4}}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Dérivée avec racine cubique',
    stepTheme: 'slate',
    stepTitle: 'Dériver $x \\mapsto \\sqrt[3]{2x + 5} = (2x + 5)^{\\frac{1}{3}}$',
    paragraphText:
      'Pour $x > -\\frac{5}{2}$, $f(x) = (2x + 5)^{\\frac{1}{3}}$ se dérive avec $n = \\frac{1}{3}$ : $f’(x) = \\frac{1}{3} \\cdot 2 \\cdot (2x + 5)^{\\frac{1}{3} - 1} = \\frac{2}{3(2x + 5)^{2/3}} = \\frac{2}{3\\sqrt[3]{(2x + 5)^2}} > 0$.',
    exercise: {
      id: 'tc_m_num_l03_p03_q06',
      type: 'mcq',
      prompt: 'Sur $]0 ; +\\infty[$, la dérivée de $x \\mapsto x^{\\frac{3}{4}}$ est :',
      options: [
        '$\\frac{3}{4} x^{\\frac{1}{4}}$',
        '$\\frac{3}{4} x^{-\\frac{1}{4}}$',
        '$\\frac{4}{3} x^{\\frac{1}{4}}$',
        '$\\frac{1}{4} x^{-\\frac{3}{4}}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’exposant devient $\\frac{3}{4} - 1 = -\\frac{1}{4}$, donc $(x^{3/4})’ = \\frac{3}{4}x^{-1/4}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Réflexe d’examen',
    stepTheme: 'green',
    stepTitle: 'Justifier la dérivabilité avant de calculer $f’(x)$',
    paragraphText:
      'En Terminale C, ne jamais écrire « $f’(x) = \\dots$ » sans préciser d’abord sur quel intervalle $f$ est dérivable (somme, produit, quotient de fonctions dérivables dont le dénominateur ne s’annule pas, ou composée avec $u > 0$ sous une racine carrée). Aux bornes exclues, étudier séparément la limite du taux d’accroissement.',
    exercise: {
      id: 'tc_m_num_l03_p03_q07',
      type: 'mcq',
      prompt: 'Sur quel plus grand sous-ensemble de $[-2 ; 2]$ la fonction $f(x) = \\sqrt{4 - x^2}$ est-elle dérivable ?',
      options: ['$[-2 ; 2]$', '$]-2 ; 2[$', '$[0 ; 2[$', '$]-2 ; 2]$'],
      correctAnswerIndex: 1,
      explanation: '$4 - x^2$ est strictement positive sur $]-2 ; 2[$, donc $\\sqrt{4 - x^2}$ est dérivable sur l’ouvert $]-2 ; 2[$ (en $\\pm 2$, demi-tangentes verticales).',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Théorème fondamental',
    stepTheme: 'violet',
    stepTitle: 'Dérivabilité d’une bijection réciproque $f^{-1}$',
    paragraphText:
      'Soit $f$ une fonction continue et strictement monotone sur un intervalle $I$, réalisant une bijection de $I$ sur $J = f(I)$. Soit $y_0 = f(x_0) \\in J$. Si $f$ est dérivable en $x_0$ ET si $f’(x_0) \\ne 0$, alors $f^{-1}$ est dérivable en $y_0$ et on a la formule : $(f^{-1})’(y_0) = \\frac{1}{f’(x_0)} = \\frac{1}{f’\\bigl(f^{-1}(y_0)\\bigr)}$.',
    formula: {
      name: 'Dérivée de la bijection réciproque',
      formula: '\\bigl(f^{-1}\\bigr)’(y_0) = \\frac{1}{f’(x_0)} \\qquad \\text{avec } y_0 = f(x_0) \\text{ et } f’(x_0) \\ne 0',
    },
    exercise: {
      id: 'tc_m_num_l03_p04_q01',
      type: 'mcq',
      prompt: 'Soit $f : \\mathbb{R} \\to \\mathbb{R}$ bijective et dérivable avec $f(2) = 5$ et $f’(2) = 4$. Que vaut $(f^{-1})’(5)$ ?',
      options: ['$\\frac{1}{5}$', '$\\frac{1}{4}$', '$-4$', '$\\frac{1}{2}$'],
      correctAnswerIndex: 1,
      explanation: 'L’antécédent de $5$ est $x_0 = 2$. Par la formule, $(f^{-1})’(5) = \\frac{1}{f’(2)} = \\frac{1}{4}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'piege',
    stepBadge: 'Cas interdit',
    stepTheme: 'orange',
    stepTitle: 'Que se passe-t-il si $f’(x_0) = 0$ ?',
    paragraphText:
      'Si $f’(x_0) = 0$, la tangente à $(C_f)$ au point $(x_0 ; y_0)$ est horizontale. Par symétrie par rapport à $y = x$, la courbe $(C_{f^{-1}})$ admet au point $(y_0 ; x_0)$ une tangente verticale : la fonction réciproque $f^{-1}$ N’EST DONC PAS dérivable en $y_0 = f(x_0)$ ! Exemple : $f(x) = x^3$ a $f’(0) = 0$, donc $f^{-1}(x) = \\sqrt[3]{x}$ n’est pas dérivable en $0$.',
    keyRule: 'Toujours vérifier que $f’(x_0) \\ne 0$ avant d’affirmer que $f^{-1}$ est dérivable en $f(x_0)$.',
    exercise: {
      id: 'tc_m_num_l03_p04_q02',
      type: 'mcq',
      prompt: 'Soit $f(x) = x^2 - 1$ définie sur $[0 ; +\\infty[$, bijective sur $[-1 ; +\\infty[$. Pourquoi $f^{-1}$ n’est-elle pas dérivable en $-1$ ?',
      options: [
        'Car $-1$ est négatif',
        'Car l’antécédent de $-1$ est $x_0 = 0$ et $f’(0) = 0$',
        'Car $f$ n’est pas continue en $0$',
        'Car $f$ n’est pas bijective',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(0) = -1$ et $f’(x) = 2x$ s’annule en $0$, ce qui empêche la dérivabilité de $f^{-1}$ en $-1$ (en effet $f^{-1}(y) = \\sqrt{y + 1}$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Point Méthode',
    stepTheme: 'green',
    stepTitle: 'Calculer $(f^{-1})’(y_0)$ sans connaître la formule de $f^{-1}$',
    paragraphText:
      'Même lorsque l’équation $f(x) = y_0$ semble complexe (par exemple un polynôme de degré $3$ ou $x + \\sin x$), on procède en 3 étapes : 1) Résoudre $f(x) = y_0$ dans $I$ (souvent une racine évidente $x_0 \\in \\{-1, 0, 1, 2\\}$ !). 2) Calculer $f’(x_0)$ et vérifier $f’(x_0) \\ne 0$. 3) En déduire $(f^{-1})’(y_0) = \\frac{1}{f’(x_0)}$.',
    konanTip: 'Si $f$ est donnée comme bijection sur $I$, la solution $x_0$ de $f(x) = y_0$ est unique : si tu en trouves une évidente dans $I$, c’est forcément la bonne !',
    exercise: {
      id: 'tc_m_num_l03_p04_q03',
      type: 'mcq',
      prompt: 'Soit $f(x) = x^3 + 2x - 1$ sur $\\mathbb{R}$ (bijective car $f’(x) = 3x^2 + 2 > 0$). Que vaut $(f^{-1})’(2)$ ?',
      options: ['$\\frac{1}{14}$', '$\\frac{1}{5}$', '$\\frac{1}{2}$', '$5$'],
      correctAnswerIndex: 1,
      explanation: 'On résout $x^3 + 2x - 1 = 2$ : pour $x_0 = 1$, $1 + 2 - 1 = 2$ convient ! Or $f’(1) = 3(1)^2 + 2 = 5 \\ne 0$, donc $(f^{-1})’(2) = \\frac{1}{5}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice type PDF',
    stepTheme: 'slate',
    stepTitle: 'Étude complète avec $f(x) = x^2 - x$ sur $I = ]-\\infty ; \\frac{1}{2}]$',
    paragraphText:
      'Sur $I = ]-\\infty ; \\frac{1}{2}]$, $f’(x) = 2x - 1 \\leqslant 0$ (nulle uniquement en $\\frac{1}{2}$), donc $f$ est continue et strictement décroissante sur $I$. Comme $\\lim_{-\\infty} f = +\\infty$ et $f(\\frac{1}{2}) = -\\frac{1}{4}$, $f$ réalise une bijection de $I$ sur $J = [-\\frac{1}{4} ; +\\infty[$. Sur $J’ = ]-\\frac{1}{4} ; +\\infty[$ (qui correspond à $x < \\frac{1}{2}$ où $f’(x) \\ne 0$), $f^{-1}$ est dérivable. Cherchons $(f^{-1})’(2)$ : $x^2 - x = 2 \\iff x^2 - x - 2 = 0 \\iff x = -1$ ou $x = 2$. Or $-1 \\in I$ et $2 \\notin I$, donc $f^{-1}(2) = -1$. Comme $f’(-1) = -3$, on obtient $(f^{-1})’(2) = -\\frac{1}{3}$.',
    formula: {
      name: 'Calcul sans expression explicite de f⁻¹',
      formula: 'f(-1) = 2 \\text{ avec } -1 \\in \\left]-\\infty ; \\frac{1}{2}\\right] \\implies \\bigl(f^{-1}\\bigr)’(2) = \\frac{1}{f’(-1)} = -\\frac{1}{3}',
    },
    exercise: {
      id: 'tc_m_num_l03_p04_q04',
      type: 'mcq',
      prompt: 'Pour $f(x) = x^2 - x$ sur $I = ]-\\infty ; \\frac{1}{2}]$, quel est le signe de $(f^{-1})’(y)$ pour tout $y > -\\frac{1}{4}$ ?',
      options: [
        'Toujours strictement positif',
        'Toujours strictement négatif (même monotonie décroissante que $f$)',
        'Positif puis négatif',
        'Nul en $y = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Sur $]-\\infty ; \\frac{1}{2}[$, $f’(x) = 2x - 1 < 0$, donc $(f^{-1})’(y) = \\frac{1}{f’(x)} < 0$, cohérent avec le fait que $f^{-1}$ est strictement décroissante.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Dérivabilité sur tout un intervalle',
    stepTheme: 'violet',
    stepTitle: 'Énoncer le domaine de dérivabilité de $f^{-1}$',
    paragraphText:
      'Si $f$ est dérivable sur $I$ et que $f’$ ne s’annule jamais sur un sous-intervalle $I_0 \\subset I$, alors $f^{-1}$ est dérivable sur $f(I_0)$ et $(f^{-1})’ = \\frac{1}{f’ \\circ f^{-1}}$. Les valeurs où $f’(x) = 0$ doivent être retirées de l’ensemble de dérivabilité de $f^{-1}$ !',
    exercise: {
      id: 'tc_m_num_l03_p04_q05',
      type: 'mcq',
      prompt: 'Soit $f(x) = x^2 - x$ sur $I = ]-\\infty ; \\frac{1}{2}]$. Sur quel plus grand ensemble $f^{-1}$ est-elle dérivable ?',
      options: [
        '$[-\\frac{1}{4} ; +\\infty[$',
        '$]-\\frac{1}{4} ; +\\infty[$',
        '$]-\\infty ; \\frac{1}{2}[$',
        '$]0 ; +\\infty[$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f’(x) = 2x - 1$ s’annule en $x_0 = \\frac{1}{2}$ dont l’image est $f(\\frac{1}{2}) = -\\frac{1}{4}$. On retire donc $-\\frac{1}{4}$ de $J$, d’où $]-\\frac{1}{4} ; +\\infty[$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Exprimer (f⁻¹)′(y) en fonction de y',
    stepTheme: 'green',
    stepTitle: 'Passer de $\\frac{1}{f’(x)}$ à une formule ne contenant que $y$',
    paragraphText:
      'Pour établir une formule comme $(\\arctan)’(y) = \\frac{1}{1+y^2}$ ou $(\\arcsin)’(y) = \\frac{1}{\\sqrt{1-y^2}}$, on exprime $f’(x)$ à l’aide de $f(x) = y$ via une identité trigonométrique ou algébrique ($1 + \\tan^2 x$, $\\sqrt{1 - \\sin^2 x}$, etc.).',
    exercise: {
      id: 'tc_m_num_l03_p04_q06',
      type: 'mcq',
      prompt: 'Soit $f(x) = x + \\frac{1}{x}$ sur $[1 ; +\\infty[$, bijective sur $[2 ; +\\infty[$. En $x = 2$, on a $f(2) = \\frac{5}{2}$. Que vaut $(f^{-1})’(\\frac{5}{2})$ ?',
      options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{2}{5}$', '$\\frac{5}{4}$'],
      correctAnswerIndex: 1,
      explanation: '$f’(x) = 1 - \\frac{1}{x^2}$, donc $f’(2) = 1 - \\frac{1}{4} = \\frac{3}{4}$, et $(f^{-1})’(\\frac{5}{2}) = \\frac{1}{3/4} = \\frac{4}{3}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Synthèse',
    stepTheme: 'slate',
    stepTitle: 'Équation de la tangente à $(C_{f^{-1}})$ en $(y_0 ; x_0)$',
    paragraphText:
      'Si $f$ est dérivable en $x_0$ avec $f’(x_0) \\ne 0$ et $f(x_0) = y_0$, la tangente à $(C_{f^{-1}})$ au point $(y_0 ; x_0)$ a pour équation $y = (f^{-1})’(y_0)(x - y_0) + x_0 = \\frac{1}{f’(x_0)}(x - y_0) + x_0$. C’est exactement la symétrique de la tangente à $(C_f)$ en $(x_0 ; y_0)$ par rapport à $y = x$.',
    exercise: {
      id: 'tc_m_num_l03_p04_q07',
      type: 'mcq',
      prompt: 'Pour $f(x) = x^3 + x$, $f(1) = 2$ et $f’(1) = 4$. Quelle est l’équation de la tangente à $(C_{f^{-1}})$ au point d’abscisse $2$ ?',
      options: [
        '$y = 4(x - 1) + 2$',
        '$y = \\frac{1}{4}(x - 2) + 1$',
        '$y = \\frac{1}{4}(x - 1) + 2$',
        '$y = 2(x - 4) + 1$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le point sur $(C_{f^{-1}})$ est $(2 ; 1)$ et la pente vaut $(f^{-1})’(2) = \\frac{1}{f’(1)} = \\frac{1}{4}$, d’où $y = \\frac{1}{4}(x - 2) + 1$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Application majeure 1',
    stepTheme: 'blue',
    stepTitle: 'La bijection réciproque de $\\tan$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$ (fonction $\\arctan$)',
    paragraphText:
      'La fonction $f(x) = \\tan x$ est continue et dérivable sur $I = ]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$ avec $f’(x) = 1 + \\tan^2 x \\geqslant 1 > 0$. Comme $\\lim_{-\\pi/2^+} \\tan x = -\\infty$ et $\\lim_{\\pi/2^-} \\tan x = +\\infty$, $f$ réalise une bijection de $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$ sur $\\mathbb{R}$. Sa bijection réciproque $\\varphi = \\arctan$ est donc définie et dérivable sur tout $\\mathbb{R}$ (car $f’$ ne s’annule jamais).',
    formula: {
      name: 'Dérivée de la fonction arctangente',
      formula: '\\varphi’(x) = \\frac{1}{f’(\\varphi(x))} = \\frac{1}{1 + \\tan^2(\\varphi(x))} = \\frac{1}{1 + x^2} \\qquad (\\forall x \\in \\mathbb{R})',
    },
    exercise: {
      id: 'tc_m_num_l03_p05_q01',
      type: 'mcq',
      prompt: 'Sachant que $\\varphi$ est la bijection réciproque de $\\tan$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, que vaut $\\varphi(1)$ et $\\varphi’(1)$ ?',
      options: [
        '$\\varphi(1) = \\frac{\\pi}{4}$ et $\\varphi’(1) = \\frac{1}{2}$',
        '$\\varphi(1) = \\frac{\\pi}{2}$ et $\\varphi’(1) = 1$',
        '$\\varphi(1) = \\frac{\\pi}{4}$ et $\\varphi’(1) = 2$',
        '$\\varphi(1) = 0$ et $\\varphi’(1) = 1$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\tan(\\frac{\\pi}{4}) = 1$ avec $\\frac{\\pi}{4} \\in ]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, donc $\\varphi(1) = \\frac{\\pi}{4}$, et $\\varphi’(1) = \\frac{1}{1 + 1^2} = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Identité célèbre',
    stepTheme: 'slate',
    stepTitle: 'Démontrer que $\\varphi(x) + \\varphi\\left(\\frac{1}{x}\\right) = \\pm\\frac{\\pi}{2}$',
    paragraphText:
      'Pour $x \\in \\mathbb{R}^*$, posons $g(x) = \\varphi(x) + \\varphi\\left(\\frac{1}{x}\\right)$. Sur $]0 ; +\\infty[$ et sur $]-\\infty ; 0[$, $g$ est dérivable et $g’(x) = \\frac{1}{1 + x^2} + \\left(-\\frac{1}{x^2}\\right)\\frac{1}{1 + \\frac{1}{x^2}} = \\frac{1}{1 + x^2} - \\frac{1}{x^2 + 1} = 0$. Donc $g$ est constante sur chacun des intervalles $]0 ; +\\infty[$ et $]-\\infty ; 0[$ ! En évaluant en $x = 1$ : $g(1) = 2\\varphi(1) = 2\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{2}$. En $x = -1$ : $g(-1) = 2\\varphi(-1) = -\\frac{\\pi}{2}$.',
    formula: {
      name: 'Relation arctan(x) + arctan(1/x)',
      formula: '\\forall x > 0,\\; \\varphi(x) + \\varphi\\left(\\frac{1}{x}\\right) = \\frac{\\pi}{2} \\qquad ; \\qquad \\forall x < 0,\\; \\varphi(x) + \\varphi\\left(\\frac{1}{x}\\right) = -\\frac{\\pi}{2}',
    },
    exercise: {
      id: 'tc_m_num_l03_p05_q02',
      type: 'mcq',
      prompt: 'Pourquoi la fonction $g(x) = \\varphi(x) + \\varphi\\left(\\frac{1}{x}\\right)$ prend-elle deux valeurs constantes différentes ($+\\frac{\\pi}{2}$ pour $x > 0$ et $-\\frac{\\pi}{2}$ pour $x < 0$) bien que $g’(x) = 0$ sur $\\mathbb{R}^*$ ?',
      options: [
        'Parce que $\\varphi$ n’est pas continue en $0$',
        'Parce que $\\mathbb{R}^*$ n’est pas un intervalle : le théorème « dérivée nulle $\\implies$ constante » s’applique séparément sur $]0 ; +\\infty[$ et sur $]-\\infty ; 0[$',
        'Parce que $g’(0) = 1$',
        'C’est une erreur d’intégration',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le domaine $\\mathbb{R}^* = ]-\\infty ; 0[ \\cup ]0 ; +\\infty[$ est la réunion de deux intervalles disjoints : une constante sur chaque intervalle, pas la même partout.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Application majeure 2',
    stepTheme: 'blue',
    stepTitle: 'La bijection réciproque de $\\sin$ sur $[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}]$ (fonction $\\arcsin$)',
    paragraphText:
      'La fonction $s(x) = \\sin x$ est continue et strictement croissante sur $[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}]$ (car $s’(x) = \\cos x > 0$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$). Elle réalise une bijection de $[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}]$ sur $[-1 ; 1]$. Sa réciproque $\\psi = \\arcsin$ est dérivable sur $]-1 ; 1[$ (car $\\cos(\\pm\\frac{\\pi}{2}) = 0$ exclut $\\pm 1$). Pour tout $y \\in ]-1 ; 1[$, $\\psi(y) \\in ]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$ donc $\\cos(\\psi(y)) = +\\sqrt{1 - \\sin^2(\\psi(y))} = \\sqrt{1 - y^2}$.',
    formula: {
      name: 'Dérivée de la fonction arcsinus',
      formula: '\\psi’(x) = \\frac{1}{\\sqrt{1 - x^2}} \\qquad (\\forall x \\in ]-1 ; 1[)',
    },
    exercise: {
      id: 'tc_m_num_l03_p05_q03',
      type: 'mcq',
      prompt: 'Sur $]-1 ; 1[$, que vaut $\\psi’\\left(\\frac{1}{2}\\right)$ où $\\psi$ est la bijection réciproque de $\\sin$ sur $[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}]$ ?',
      options: ['$\\frac{2}{\\sqrt{3}}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$2$'],
      correctAnswerIndex: 0,
      explanation: '$\\psi’(\\frac{1}{2}) = \\frac{1}{\\sqrt{1 - (1/2)^2}} = \\frac{1}{\\sqrt{3/4}} = \\frac{2}{\\sqrt{3}}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Signe du cosinus',
    stepTheme: 'orange',
    stepTitle: 'Pourquoi $\\cos(\\psi(x)) = +\\sqrt{1 - x^2}$ et pas $-\\sqrt{1 - x^2}$ ?',
    paragraphText:
      'Pour $x \\in ]-1 ; 1[$, l’angle $t = \\psi(x)$ appartient à l’intervalle d’arrivée $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$. Or sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, le cosinus est strictement POSITIF ! C’est cette information sur l’intervalle de départ de $\\sin$ qui permet d’écrire $\\cos t = +\\sqrt{1 - \\sin^2 t} = \\sqrt{1 - x^2}$.',
    exercise: {
      id: 'tc_m_num_l03_p05_q04',
      type: 'mcq',
      prompt: 'Que valent les limites du taux d’accroissement de $\\psi$ en $1^-$ et en $-1^+$ ?',
      options: [
        '$0$, donc $\\psi$ est dérivable en $\\pm 1$',
        '$+\\infty$ en $\\pm 1$ (demi-tangentes verticales)',
        '$-\\infty$',
        '$1$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $\\sin’(\\pm\\frac{\\pi}{2}) = \\cos(\\pm\\frac{\\pi}{2}) = 0$, $\\psi$ présente des demi-tangentes verticales en $-1$ et en $1$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Application majeure 3 (PDF)',
    stepTheme: 'slate',
    stepTitle: 'Étude complète de $h(x) = \\sqrt{\\frac{1 - x}{1 + x}}$ et de sa réciproque $h^{-1}$',
    paragraphText:
      'Sur $]-1 ; 1]$, $h(x) = \\sqrt{\\frac{1 - x}{1 + x}}$ est dérivable sur $]-1 ; 1[$ et $h’(x) = \\frac{-2/(1+x)^2}{2\\sqrt{(1-x)/(1+x)}} = \\frac{-1}{(1+x)\\sqrt{1 - x^2}} < 0$. $h$ réalise donc une bijection strictement décroissante de $]-1 ; 1]$ sur $[0 ; +\\infty[$ ($\\lim_{-1^+} h = +\\infty$, $h(1) = 0$). Pour $y \\geqslant 0$, $y^2 = \\frac{1 - x}{1 + x} \\iff x(1 + y^2) = 1 - y^2 \\iff h^{-1}(y) = \\frac{1 - y^2}{1 + y^2}$. Comme $h’(x) \\ne 0$ sur $]-1 ; 1[$, $h^{-1}$ est dérivable sur $]0 ; +\\infty[$ (et même en $0$ ici car $\\lim_{1^-} h’ = -\\infty$, donc $(h^{-1})’(0) = 0$ !).',
    formula: {
      name: 'Réciproque rationnelle de h',
      formula: 'h^{-1}(x) = \\frac{1 - x^2}{1 + x^2} \\quad \\text{pour } x \\in [0 ; +\\infty[',
    },
    exercise: {
      id: 'tc_m_num_l03_p05_q05',
      type: 'mcq',
      prompt: 'Dans l’exemple $h(x) = \\sqrt{\\frac{1 - x}{1 + x}}$, que vaut $(h^{-1})’(x)$ pour $x > 0$ ?',
      options: [
        '$\\frac{4x}{(1 + x^2)^2}$',
        '$\\frac{-4x}{(1 + x^2)^2}$',
        '$\\frac{-2x}{1 + x^2}$',
        '$\\frac{1}{1 + x^2}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En dérivant directement $h^{-1}(x) = \\frac{1 - x^2}{1 + x^2}$, on obtient $\\frac{-2x(1+x^2) - 2x(1-x^2)}{(1+x^2)^2} = \\frac{-4x}{(1+x^2)^2} < 0$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Double vérification',
    stepTheme: 'green',
    stepTitle: 'Contrôler $(f^{-1})’$ par deux méthodes indépendantes',
    paragraphText:
      'Quand $f^{-1}$ peut être explicitée (comme $h^{-1}(x) = \\frac{1 - x^2}{1 + x^2}$), vérifie ta dérivée par la formule du théorème $\\frac{1}{f’(f^{-1}(y))}$ ET en dérivant directement $f^{-1}(y)$ : les deux expressions doivent coïncider identiquement !',
    exercise: {
      id: 'tc_m_num_l03_p05_q06',
      type: 'mcq',
      prompt: 'Que vaut $h’\\bigl(h^{-1}(2)\\bigr)$ sachant que $h^{-1}(x) = \\frac{1 - x^2}{1 + x^2}$ et $(h^{-1})’(2) = -\\frac{8}{25}$ ?',
      options: ['$-\\frac{8}{25}$', '$-\\frac{25}{8}$', '$\\frac{25}{8}$', '$\\frac{8}{25}$'],
      correctAnswerIndex: 1,
      explanation: 'Par $(h^{-1})’(2) = \\frac{1}{h’(h^{-1}(2))}$, on obtient directement $h’(h^{-1}(2)) = \\frac{1}{-8/25} = -\\frac{25}{8}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Synthèse sur les primitives',
    stepTheme: 'slate',
    stepTitle: 'Reconnaître la dérivée de $\\arctan(u)$',
    paragraphText:
      'Puisque $\\varphi’(x) = \\frac{1}{1 + x^2}$ sur $\\mathbb{R}$, par composition toute fonction de la forme $\\varphi(u(x))$ (avec $u$ dérivable) a pour dérivée $\\frac{u’(x)}{1 + u(x)^2}$. Par exemple, pour $x \\in \\mathbb{R}$, $\\left(\\varphi\\left(\\frac{x}{2}\\right)\\right)’ = \\frac{1/2}{1 + x^2/4} = \\frac{2}{4 + x^2}$.',
    exercise: {
      id: 'tc_m_num_l03_p05_q07',
      type: 'mcq',
      prompt: 'Si $\\varphi’ = \\frac{1}{1+x^2}$, quelle est la dérivée de $k(x) = \\varphi(2x)$ sur $\\mathbb{R}$ ?',
      options: [
        '$\\frac{1}{1 + 4x^2}$',
        '$\\frac{2}{1 + 4x^2}$',
        '$\\frac{2}{1 + 2x^2}$',
        '$\\frac{4x}{1 + 4x^2}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par composition : $k’(x) = 2 \\cdot \\varphi’(2x) = \\frac{2}{1 + (2x)^2} = \\frac{2}{1 + 4x^2}$.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Dérivées successives d’une fonction : $f’$, $f’’$, $f^{(3)}$, $\\dots$, $f^{(n)}$',
    paragraphText:
      'Soit $f$ dérivable sur un intervalle $I$. Si $f’$ est elle-même dérivable sur $I$, sa dérivée est la dérivée seconde de $f$, notée $f’’$ ou $f^{(2)}$ (ou $\\frac{d^2 f}{dx^2}$). Par récurrence, pour $n \\geqslant 1$, si la dérivée d’ordre $n - 1$, $f^{(n-1)}$, est dérivable sur $I$, on définit la dérivée d’ordre $n$ par $f^{(n)} = \\left(f^{(n-1)}\\right)’$ (avec la convention $f^{(0)} = f$).',
    formula: {
      name: 'Définition récurrente',
      formula: 'f^{(0)} = f \\quad ; \\quad \\forall n \\in \\mathbb{N}^*,\\; f^{(n)} = \\left(f^{(n-1)}\\right)’',
    },
    exercise: {
      id: 'tc_m_num_l03_p06_q01',
      type: 'mcq',
      prompt: 'Si $f(x) = x^4 - 3x^2 + 5x - 1$, que vaut $f^{(3)}(x)$ ?',
      options: ['$12x^2 - 6$', '$24x$', '$24$', '$4x^3 - 6x + 5$'],
      correctAnswerIndex: 1,
      explanation: '$f’(x) = 4x^3 - 6x + 5$, $f’’(x) = 12x^2 - 6$, et $f^{(3)}(x) = 24x$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Polynômes et inverses',
    stepTheme: 'slate',
    stepTitle: 'Dérivée $n$-ième d’un polynôme et de $\\frac{1}{ax + b}$',
    paragraphText:
      'La dérivée $n$-ième d’un polynôme de degré $p$ est nulle dès que $n > p$ (et vaut $p! \\cdot a_p$ pour $n = p$). Pour $f(x) = \\frac{1}{1 - x}$ ($x \\ne 1$) : $f’(x) = (1-x)^{-2}$, $f’’(x) = 2(1-x)^{-3}$, $f^{(3)}(x) = 6(1-x)^{-4}$, d’où par récurrence $f^{(n)}(x) = \\frac{n!}{(1 - x)^{n+1}}$.',
    formula: {
      name: 'Dérivée n-ième de 1/(1−x)',
      formula: '\\left(\\frac{1}{1 - x}\\right)^{(n)} = \\frac{n!}{(1 - x)^{n+1}}',
    },
    exercise: {
      id: 'tc_m_num_l03_p06_q02',
      type: 'mcq',
      prompt: 'Que vaut la dérivée $5$-ième d’un polynôme $P(x) = 2x^4 - 7x^3 + x - 9$ ?',
      options: ['$48$', '$48x$', '$0$', '$24$'],
      correctAnswerIndex: 2,
      explanation: 'Le degré de $P$ est $4$, donc $P^{(4)}(x) = 2 \\times 4! = 48$ (constante), et $P^{(5)}(x) = 0$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Démonstration par récurrence (PDF)',
    stepTheme: 'slate',
    stepTitle: 'Dérivée $n$-ième de $\\cos x$ et $\\sin x$',
    paragraphText:
      'Calculons les premières dérivées de $f(x) = \\cos x$ : $f’(x) = -\\sin x = \\cos\\left(x + \\frac{\\pi}{2}\\right)$, $f’’(x) = -\\cos x = \\cos\\left(x + 2\\frac{\\pi}{2}\\right)$, $f^{(3)}(x) = \\sin x = \\cos\\left(x + 3\\frac{\\pi}{2}\\right)$. On conjecture et démontre par récurrence sur $n \\in \\mathbb{N}$ que $\\cos^{(n)}(x) = \\cos\\left(x + n\\frac{\\pi}{2}\\right)$ et de même $\\sin^{(n)}(x) = \\sin\\left(x + n\\frac{\\pi}{2}\\right)$.',
    formula: {
      name: 'Dérivées n-ièmes circulaires',
      formula: '\\cos^{(n)}(x) = \\cos\\left(x + n\\frac{\\pi}{2}\\right) \\qquad \\text{et} \\qquad \\sin^{(n)}(x) = \\sin\\left(x + n\\frac{\\pi}{2}\\right)',
    },
    exercise: {
      id: 'tc_m_num_l03_p06_q03',
      type: 'mcq',
      prompt: 'Quelle est l’expression de la dérivée $n$-ième de $f(x) = \\cos(2x)$ ?',
      options: [
        '$\\cos\\left(2x + n\\frac{\\pi}{2}\\right)$',
        '$2^n \\cos\\left(2x + n\\frac{\\pi}{2}\\right)$',
        '$2n \\cos\\left(2x + n\\frac{\\pi}{2}\\right)$',
        '$(-2)^n \\sin(2x)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'À chaque dérivation, le facteur intérieur $2$ sort devant : après $n$ dérivations, on obtient $2^n \\cos\\left(2x + n\\frac{\\pi}{2}\\right)$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Rédaction de récurrence',
    stepTheme: 'green',
    stepTitle: 'Réussir l’étape d’hérédité pour $f^{(n)}$',
    paragraphText:
      'Pour prouver $P(n)$ : « $f^{(n)}(x) = \\text{formule}(n, x)$ » par récurrence : 1) Initialisation à $n = 0$ (ou $n = 1$) : vérifier explicitement l’égalité. 2) Hérédité : supposer $P(k)$ vraie pour un entier $k$ fixé, puis dériver par rapport à $x$ (en laissant $k$ constant !) pour montrer que $\\left(f^{(k)}\\right)’(x)$ correspond bien à $\\text{formule}(k + 1, x)$.',
    konanTip: 'Pour $\\cos^{(k)}(x) = \\cos(x + k\\frac{\\pi}{2})$, l’hérédité utilise l’identité $\\cos(\\theta + \\frac{\\pi}{2}) = -\\sin(\\theta)$ avec $\\theta = x + k\\frac{\\pi}{2}$.',
    exercise: {
      id: 'tc_m_num_l03_p06_q04',
      type: 'mcq',
      prompt: 'Quelle formule trigonométrique permet de passer de $-\\sin\\left(x + k\\frac{\\pi}{2}\\right)$ à $\\cos\\left(x + (k+1)\\frac{\\pi}{2}\\right)$ ?',
      options: [
        '$\\cos(\\theta - \\frac{\\pi}{2}) = \\sin\\theta$',
        '$\\cos(\\theta + \\frac{\\pi}{2}) = -\\sin\\theta$',
        '$\\sin(\\theta + \\frac{\\pi}{2}) = -\\cos\\theta$',
        '$\\cos(\\theta + \\pi) = \\cos\\theta$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En posant $\\theta = x + k\\frac{\\pi}{2}$, $\\left(\\cos\\theta\\right)’ = -\\sin\\theta = \\cos\\left(\\theta + \\frac{\\pi}{2}\\right) = \\cos\\left(x + (k+1)\\frac{\\pi}{2}\\right)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Lien avec la concavité / inflexion',
    stepTheme: 'violet',
    stepTitle: 'Utilisation de $f’’$ : point d’inflexion',
    paragraphText:
      'En plus de donner les variations de $f’$ (utile pour déterminer son signe !), la dérivée seconde $f’’$ indique la concavité : si $f’’$ s’annule en $x_0$ en changeant de signe, la courbe $(C_f)$ traverse sa tangente en $M_0(x_0 ; f(x_0))$, appelé point d’inflexion.',
    exercise: {
      id: 'tc_m_num_l03_p06_q05',
      type: 'mcq',
      prompt: 'Pour $f(x) = x^3 - 3x^2 + 2$, quel est l’abscisse du point d’inflexion de $(C_f)$ ?',
      options: ['$x = 0$', '$x = 1$', '$x = 2$', '$x = -1$'],
      correctAnswerIndex: 1,
      explanation: '$f’(x) = 3x^2 - 6x$ et $f’’(x) = 6x - 6 = 6(x - 1)$, qui s’annule en $x = 1$ en changeant de signe.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Attention aux signes alternés',
    stepTheme: 'orange',
    stepTitle: 'Dérivée $n$-ième de $\\frac{1}{x}$ : alternance $(-1)^n$',
    paragraphText:
      'Pour $g(x) = \\frac{1}{x} = x^{-1}$ : $g’(x) = -x^{-2}$, $g’’(x) = 2x^{-3}$, $g^{(3)}(x) = -6x^{-4}$. Il y a une alternance de signe $(-1)^n$, d’où $g^{(n)}(x) = \\frac{(-1)^n \\cdot n!}{x^{n+1}}$ pour tout $n \\in \\mathbb{N}$. À ne pas confondre avec $\\frac{1}{1 - x}$ où la dérivée intérieure $-1$ annule le signe moins !',
    exercise: {
      id: 'tc_m_num_l03_p06_q06',
      type: 'mcq',
      prompt: 'Que vaut $g^{(4)}(1)$ pour $g(x) = \\frac{1}{x}$ ?',
      options: ['$-24$', '$24$', '$-6$', '$120$'],
      correctAnswerIndex: 1,
      explanation: '$g^{(4)}(1) = \\frac{(-1)^4 \\times 4!}{1^5} = +24$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Dérivée en physique',
    stepTheme: 'slate',
    stepTitle: 'Cinématique : position, vitesse, accélération',
    paragraphText:
      'Si $x(t)$ désigne la position d’un mobile en fonction du temps $t$, sa vitesse instantanée est la dérivée première $v(t) = x’(t)$ et son accélération est la dérivée seconde $a(t) = v’(t) = x’’(t)$.',
    exercise: {
      id: 'tc_m_num_l03_p06_q07',
      type: 'mcq',
      prompt: 'Un mobile a pour abscisse $x(t) = 4\\cos(3t)$. Quelle relation lie son accélération $x’’(t)$ à sa position $x(t)$ ?',
      options: [
        '$x’’(t) = 9x(t)$',
        '$x’’(t) = -9x(t)$',
        '$x’’(t) = -3x(t)$',
        '$x’’(t) = -12x(t)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$x’(t) = -12\\sin(3t)$ et $x’’(t) = -36\\cos(3t) = -9 \\cdot (4\\cos(3t)) = -9x(t)$.',
    },
  },
];

const p07Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Théorème IAF (Forme 1)',
    stepTheme: 'violet',
    stepTitle: 'Inégalité des accroissements finis : encadrement $m \\leqslant f’ \\leqslant M$',
    paragraphText:
      'Soit $f$ une fonction dérivable sur un intervalle $I$ et soient $a, b \\in I$ avec $a < b$. S’il existe deux réels $m$ et $M$ tels que $\\forall x \\in [a ; b]$, $m \\leqslant f’(x) \\leqslant M$, alors : $m(b - a) \\leqslant f(b) - f(a) \\leqslant M(b - a)$. Cela revient à dire que le taux d’accroissement $\\frac{f(b) - f(a)}{b - a}$ est compris entre $m$ et $M$.',
    formula: {
      name: 'IAF (encadrement)',
      formula: '(\\forall x \\in [a ; b],\\; m \\leqslant f’(x) \\leqslant M) \\implies m(b - a) \\leqslant f(b) - f(a) \\leqslant M(b - a)',
    },
    exercise: {
      id: 'tc_m_num_l03_p07_q01',
      type: 'mcq',
      prompt: 'Soit $f$ dérivable sur $[1 ; 4]$ telle que $\\forall x \\in [1 ; 4]$, $2 \\leqslant f’(x) \\leqslant 5$. Quel encadrement vérifie $f(4) - f(1)$ ?',
      options: [
        '$2 \\leqslant f(4) - f(1) \\leqslant 5$',
        '$6 \\leqslant f(4) - f(1) \\leqslant 15$',
        '$8 \\leqslant f(4) - f(1) \\leqslant 20$',
        '$3 \\leqslant f(4) - f(1) \\leqslant 12$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par l’IAF avec $b - a = 4 - 1 = 3$ : $2 \\times 3 \\leqslant f(4) - f(1) \\leqslant 5 \\times 3$, soit $6 \\leqslant f(4) - f(1) \\leqslant 15$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Théorème IAF (Forme 2)',
    stepTheme: 'violet',
    stepTitle: 'Forme en valeur absolue : $|f’(x)| \\leqslant M$',
    paragraphText:
      'Soit $f$ dérivable sur un intervalle $I$. S’il existe un réel $M \\geqslant 0$ tel que $\\forall x \\in I$, $|f’(x)| \\leqslant M$, alors pour tous réels $a, b \\in I$ (sans même supposer $a < b$) : $|f(b) - f(a)| \\leqslant M |b - a|$. On dit alors que $f$ est $M$-lipschitzienne sur $I$.',
    formula: {
      name: 'IAF en valeur absolue',
      formula: '(\\forall x \\in I,\\; |f’(x)| \\leqslant M) \\implies \\forall (a, b) \\in I^2,\\; |f(b) - f(a)| \\leqslant M |b - a|',
    },
    exercise: {
      id: 'tc_m_num_l03_p07_q02',
      type: 'mcq',
      prompt: 'À l’aide de l’IAF appliquée à $f(x) = \\cos x$ sur $\\mathbb{R}$, quelle inégalité est vraie pour tous $x, y \\in \\mathbb{R}$ ?',
      options: [
        '$|\\cos x - \\cos y| \\leqslant \\frac{1}{2}|x - y|$',
        '$|\\cos x - \\cos y| \\leqslant |x - y|$',
        '$|\\cos x - \\cos y| \\geqslant |x - y|$',
        '$|\\cos x - \\cos y| \\leqslant |x + y|$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\cos$ est dérivable sur $\\mathbb{R}$ et $|(\\cos)’(t)| = |-\\sin t| \\leqslant 1$ pour tout $t \\in \\mathbb{R}$, donc $|\\cos x - \\cos y| \\leqslant 1 \\cdot |x - y|$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Application numérique',
    stepTheme: 'slate',
    stepTitle: 'Encadrer $\\sqrt{19} - \\sqrt{17}$ grâce à l’IAF',
    paragraphText:
      'Appliquons l’IAF à $f(x) = \\sqrt{x}$ sur $[17 ; 19]$. $f$ est dérivable sur $[17 ; 19]$ et $f’(x) = \\frac{1}{2\\sqrt{x}}$ est décroissante, donc pour tout $x \\in [17 ; 19]$ : $\\frac{1}{2\\sqrt{19}} \\leqslant f’(x) \\leqslant \\frac{1}{2\\sqrt{17}}$. Comme $b - a = 19 - 17 = 2$, l’IAF donne : $2 \\cdot \\frac{1}{2\\sqrt{19}} \\leqslant \\sqrt{19} - \\sqrt{17} \\leqslant 2 \\cdot \\frac{1}{2\\sqrt{17}}$, soit $\\frac{1}{\\sqrt{19}} \\leqslant \\sqrt{19} - \\sqrt{17} \\leqslant \\frac{1}{\\sqrt{17}}$.',
    formula: {
      name: 'Encadrement obtenu',
      formula: '\\frac{1}{\\sqrt{19}} \\leqslant \\sqrt{19} - \\sqrt{17} \\leqslant \\frac{1}{\\sqrt{17}}',
    },
    exercise: {
      id: 'tc_m_num_l03_p07_q03',
      type: 'mcq',
      prompt: 'En appliquant la même méthode à $f(x) = \\sqrt{x}$ sur $[9 ; 10]$, quel encadrement obtient-on pour $\\sqrt{10} - 3$ ?',
      options: [
        '$\\frac{1}{2\\sqrt{10}} \\leqslant \\sqrt{10} - 3 \\leqslant \\frac{1}{6}$',
        '$\\frac{1}{10} \\leqslant \\sqrt{10} - 3 \\leqslant \\frac{1}{9}$',
        '$\\frac{1}{6} \\leqslant \\sqrt{10} - 3 \\leqslant \\frac{1}{2\\sqrt{10}}$',
        '$\\frac{1}{3} \\leqslant \\sqrt{10} - 3 \\leqslant 1$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Sur $[9 ; 10]$, $b - a = 1$ et $\\frac{1}{2\\sqrt{10}} \\leqslant \\frac{1}{2\\sqrt{x}} \\leqslant \\frac{1}{2\\sqrt{9}} = \\frac{1}{6}$, d’où le résultat.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Inégalité fonctionnelle',
    stepTheme: 'slate',
    stepTitle: 'Montrer que $\\tan x \\geqslant x$ pour tout $x \\in \\left[0 ; \\frac{\\pi}{2}\\right[$',
    paragraphText:
      'Pour $x = 0$, $\\tan 0 = 0$. Pour $x \\in ]0 ; \\frac{\\pi}{2}[$, appliquons l’IAF à $f(t) = \\tan t$ sur $[0 ; x]$. Sur $[0 ; x]$, $f’(t) = 1 + \\tan^2 t \\geqslant 1$. Donc $1 \\cdot (x - 0) \\leqslant \\tan x - \\tan 0$, c’est-à-dire $\\tan x \\geqslant x$ pour tout $x \\in [0 ; \\frac{\\pi}{2}[$.',
    exercise: {
      id: 'tc_m_num_l03_p07_q04',
      type: 'mcq',
      prompt: 'Quelle inégalité obtient-on sur $[0 ; +\\infty[$ en appliquant l’IAF à $f(t) = \\sin t$ sur $[0 ; x]$ avec $f’(t) = \\cos t \\leqslant 1$ ?',
      options: ['$\\sin x \\geqslant x$', '$\\sin x \\leqslant x$', '$\\cos x \\leqslant x$', '$\\sin x \\leqslant \\frac{x}{2}$'],
      correctAnswerIndex: 1,
      explanation: 'Sur $[0 ; x]$ ($x \\geqslant 0$), $\\cos t \\leqslant 1 \\implies \\sin x - \\sin 0 \\leqslant 1 \\cdot (x - 0) \\implies \\sin x \\leqslant x$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Preuve de l’IAF',
    stepTheme: 'green',
    stepTitle: 'Comment redémontrer l’IAF par les fonctions auxiliaires',
    paragraphText:
      'Si l’on veut retrouver rapidement $f(b) - f(a) \\leqslant M(b - a)$, il suffit de poser $g(x) = f(x) - Mx$ : comme $g’(x) = f’(x) - M \\leqslant 0$, $g$ est décroissante sur $[a ; b]$, donc $g(b) \\leqslant g(a)$, ce qui s’écrit $f(b) - Mb \\leqslant f(a) - Ma$, soit $f(b) - f(a) \\leqslant M(b - a)$. Idem avec $h(x) = f(x) - mx$ croissante !',
    exercise: {
      id: 'tc_m_num_l03_p07_q05',
      type: 'mcq',
      prompt: 'Pourquoi la fonction auxiliaire $g(x) = f(x) - Mx$ prouve-t-elle l’IAF lorsque $f’(x) \\leqslant M$ sur $[a ; b]$ ?',
      options: [
        'Car $g(a) = g(b)$',
        'Car $g’(x) = f’(x) - M \\leqslant 0$, donc $g$ est décroissante et $g(b) \\leqslant g(a)$',
        'Car $g$ est convexe',
        'Car $M = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: '$g$ décroissante donne $f(b) - Mb \\leqslant f(a) - Ma \\iff f(b) - f(a) \\leqslant M(b - a)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Attention aux bornes',
    stepTheme: 'orange',
    stepTitle: 'Vérifier que $f$ est dérivable sur tout $[a ; b]$ et que $a < b$',
    paragraphText:
      'Dans la forme 1 ($m(b-a) \\leqslant f(b) - f(a) \\leqslant M(b-a)$), l’inégalité suppose impérativement $a < b$ (car multiplier une inégalité par $b - a < 0$ en renverserait le sens !). Si l’ordre entre $a$ et $b$ n’est pas fixé, utilise la forme 2 en valeur absolue $|f(b) - f(a)| \\leqslant M|b - a|$.',
    exercise: {
      id: 'tc_m_num_l03_p07_q06',
      type: 'mcq',
      prompt: 'On sait que $|f’(x)| \\leqslant \\frac{1}{3}$ sur $[0 ; 10]$ et $f(2) = 4$. Que peut-on affirmer de $|f(5) - 4|$ ?',
      options: [
        '$|f(5) - 4| \\leqslant 1$',
        '$|f(5) - 4| \\leqslant 3$',
        '$f(5) = 5$',
        '$|f(5) - 4| \\geqslant 1$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Avec $M = \\frac{1}{3}$, $a = 2$ et $b = 5$, $|f(5) - f(2)| \\leqslant \\frac{1}{3} |5 - 2| = 1$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Application aux suites',
    stepTheme: 'slate',
    stepTitle: 'Préparer la convergence d’une suite récurrente $u_{n+1} = f(u_n)$',
    paragraphText:
      'En Terminale C, l’IAF sert très souvent à prouver qu’une suite vérifie $|u_{n+1} - \\ell| \\leqslant k |u_n - \\ell|$ avec $0 < k < 1$ lorsque $f(\\ell) = \\ell$ et $|f’(x)| \\leqslant k$ sur un intervalle stable contenant $\\ell$ et tous les $u_n$, ce qui entraîne $|u_n - \\ell| \\leqslant k^n |u_0 - \\ell| \\to 0$.',
    exercise: {
      id: 'tc_m_num_l03_p07_q07',
      type: 'mcq',
      prompt: 'Si $f(\\alpha) = \\alpha$ et $\\forall x \\in [1 ; 2]$, $|f’(x)| \\leqslant \\frac{1}{2}$, que donne l’IAF entre $u_n \\in [1 ; 2]$ et $\\alpha \\in [1 ; 2]$ ?',
      options: [
        '$|u_{n+1} - \\alpha| \\leqslant \\frac{1}{2}|u_n - \\alpha|$',
        '$|u_{n+1} - \\alpha| \\geqslant \\frac{1}{2}|u_n - \\alpha|$',
        '$u_{n+1} = \\frac{1}{2}u_n$',
        '$|u_n - \\alpha| \\leqslant 2$',
      ],
      correctAnswerIndex: 0,
      explanation: '$|f(u_n) - f(\\alpha)| \\leqslant \\frac{1}{2}|u_n - \\alpha|$, c’est-à-dire $|u_{n+1} - \\alpha| \\leqslant \\frac{1}{2}|u_n - \\alpha|$.',
    },
  },
];

const p08Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Plan d’étude Bac',
    stepTheme: 'green',
    stepTitle: 'Les 7 étapes d’une étude complète de fonction en Terminale C',
    paragraphText:
      '1) Ensemble de définition $D_f$ et réduction d’étude (parité, périodicité, axe/centre de symétrie). 2) Limites aux bornes de $D_f$, asymptotes et branches infinies. 3) Dérivabilité sur les intervalles ouverts et étude ponctuelle aux bornes particulières (demi-tangentes verticales, points anguleux). 4) Signe de $f’(x)$ et tableau de variations. 5) Points remarquables (intersection axes, tangentes, TVI). 6) Tracé soigné. 7) Restriction bijective éventuelle.',
    exercise: {
      id: 'tc_m_num_l03_p08_q01',
      type: 'mcq',
      prompt: 'Si une fonction $f$ est périodique de période $T = 2$ et impaire sur son domaine $D_f$, sur quel intervalle suffit-il d’abord de l’étudier avant de compléter par symétrie puis translation ?',
      options: ['$[0 ; 2]$', '$[0 ; 1]$ (un demi-motif)', '$[-2 ; 2]$', '$[1 ; 3]$'],
      correctAnswerIndex: 1,
      explanation: 'La périodicité de période $2$ réduit à $[-1 ; 1]$ (longueur $2$), puis l’imparité permet d’étudier sur $[0 ; 1]$ et de symétriser par rapport à $O$ pour obtenir $[-1 ; 1]$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Étude 1 : h(x) = x + √|x²−1|',
    stepTheme: 'slate',
    stepTitle: 'Écrire $h(x) = x + \\sqrt{|x^2 - 1|}$ sans valeur absolue',
    paragraphText:
      'Comme $|x^2 - 1| \\geqslant 0$, $D_h = \\mathbb{R}$. Sur $]-\\infty ; -1] \\cup [1 ; +\\infty[$, $x^2 - 1 \\geqslant 0$ donc $h(x) = x + \\sqrt{x^2 - 1}$. Sur $[-1 ; 1]$, $x^2 - 1 \\leqslant 0$ donc $h(x) = x + \\sqrt{1 - x^2}$. On distingue donc deux expressions selon les intervalles pour calculer limites, dérivées et taux en $\\pm 1$.',
    formula: {
      name: 'Expressions par morceaux de h',
      formula: 'h(x) = \\begin{cases} x + \\sqrt{x^2 - 1} & \\text{si } |x| \\geqslant 1 \\\\ x + \\sqrt{1 - x^2} & \\text{si } |x| \\leqslant 1 \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l03_p08_q02',
      type: 'mcq',
      prompt: 'Pour $h(x) = x + \\sqrt{|x^2 - 1|}$, quelle est l’expression de $h’(x)$ sur $]-1 ; 1[$ ?',
      options: [
        '$1 + \\frac{x}{\\sqrt{1 - x^2}}$',
        '$1 - \\frac{x}{\\sqrt{1 - x^2}}$',
        '$1 + \\frac{x}{\\sqrt{x^2 - 1}}$',
        '$\\frac{1}{2\\sqrt{1 - x^2}}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Sur $]-1 ; 1[$, $h(x) = x + \\sqrt{1 - x^2}$, dont la dérivée est $1 + \\frac{-2x}{2\\sqrt{1 - x^2}} = 1 - \\frac{x}{\\sqrt{1 - x^2}}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Asymptotes de h',
    stepTheme: 'slate',
    stepTitle: 'Comportement aux infinis et dérivabilité en $\\pm 1$ de $h(x) = x + \\sqrt{|x^2 - 1|}$',
    paragraphText:
      'En $+\\infty$ ($x > 1$) : $\\sqrt{x^2 - 1} \\sim x$, donc $h(x) - 2x = \\sqrt{x^2 - 1} - x = \\frac{-1}{\\sqrt{x^2 - 1} + x} \\to 0$ : la droite $y = 2x$ est asymptote oblique (et $h(x) - 2x < 0$). En $-\\infty$ ($x < -1$) : $\\sqrt{x^2 - 1} \\sim -x$, donc $h(x) = \\frac{-1}{\\sqrt{x^2 - 1} - x} \\to 0^-$ : l’axe $(OI)$ d’équation $y = 0$ est asymptote horizontale en $-\\infty$ ! En $1^-$ et $1^+$, les taux d’accroissement tendent vers $\\pm\\infty$ : demi-tangentes verticales en $(-1 ; -1)$ et $(1 ; 1)$.',
    visualSchema: {
      type: 'function_plot',
      title: 'Allure de h(x) = x + √|x²−1|',
      caption: 'Asymptote horizontale y = 0 en −∞, asymptote oblique y = 2x en +∞, maximum en x = 1/√2',
      plot: {
        xMin: -3,
        xMax: 3,
        yMin: -2,
        yMax: 5.5,
        xStep: 1,
        yStep: 1,
        curves: [
          {
            label: 'h(x)',
            color: 'blue',
            pieces: [
              { expr: 'x + sqrt(x^2 - 1)', from: -3, to: -1 },
              { expr: 'x + sqrt(1 - x^2)', from: -1, to: 1 },
              { expr: 'x + sqrt(x^2 - 1)', from: 1, to: 3 },
            ],
          },
          { label: 'y = 2x', color: 'orange', pieces: [{ expr: '2*x', from: 0, to: 2.7 }] },
        ],
        points: [
          { x: -1, y: -1, label: '(-1;-1)', filled: true, color: 'violet' },
          { x: 0.707, y: 1.414, label: 'Max (√2/2;√2)', filled: true, color: 'green' },
          { x: 1, y: 1, label: '(1;1)', filled: true, color: 'violet' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l03_p08_q03',
      type: 'mcq',
      prompt: 'Sur $[-1 ; 1]$, en quel point $h(x) = x + \\sqrt{1 - x^2}$ atteint-elle son maximum local (où $h’(x) = 0$) ?',
      options: ['$x = 0$', '$x = \\frac{1}{\\sqrt{2}}$', '$x = -\\frac{1}{\\sqrt{2}}$', '$x = 1$'],
      correctAnswerIndex: 1,
      explanation: '$h’(x) = 0 \\iff \\sqrt{1 - x^2} = x$, ce qui exige $x > 0$ et $1 - x^2 = x^2 \\iff x^2 = \\frac{1}{2}$, donc $x = \\frac{\\sqrt{2}}{2} = \\frac{1}{\\sqrt{2}}$ et $h(\\frac{\\sqrt{2}}{2}) = \\sqrt{2}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Asymptote horizontale en −∞',
    stepTheme: 'orange',
    stepTitle: 'Bien repérer $\\lim_{x \\to -\\infty} (x + \\sqrt{x^2 - 1}) = 0$',
    paragraphText:
      'Quand $x \\to -\\infty$, $x < 0$ et $\\sqrt{x^2 - 1} > 0$, il y a donc une forme indéterminée $-\\infty + \\infty$ ! On utilise l’expression conjuguée : $x + \\sqrt{x^2 - 1} = \\frac{x^2 - 1 - x^2}{\\sqrt{x^2 - 1} - x} = \\frac{-1}{\\sqrt{x^2 - 1} - x} \\xrightarrow[x \\to -\\infty]{} 0^-$.',
    exercise: {
      id: 'tc_m_num_l03_p08_q04',
      type: 'mcq',
      prompt: 'Pour $h(x) = x + \\sqrt{|x^2 - 1|}$, quel est le signe de $h(x)$ pour tout $x < -1$ ?',
      options: ['$h(x) > 0$', '$h(x) < 0$ (courbe sous l’asymptote $y = 0$)', '$h(x) = 0$', 'Cela change de signe'],
      correctAnswerIndex: 1,
      explanation: 'Comme $h(x) = \\frac{-1}{\\sqrt{x^2 - 1} - x}$ et que $-x > 0$ pour $x < -1$, le dénominateur est positif et $h(x) < 0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Étude 2 : Fonction trigonométrique',
    stepTheme: 'slate',
    stepTitle: 'Étudier $f(x) = \\tan\\left(\\frac{\\pi}{2}x\\right)$ (périodique et impaire)',
    paragraphText:
      '$\\tan\\left(\\frac{\\pi}{2}x\\right)$ existe ssi $\\frac{\\pi}{2}x \\ne \\frac{\\pi}{2} + k\\pi \\iff x \\ne 1 + 2k$ ($k \\in \\mathbb{Z}$), donc $D_f = \\mathbb{R} \\setminus \\{1 + 2k,\\; k \\in \\mathbb{Z}\\}$. Comme $\\tan$ est $\\pi$-périodique, $f(x + 2) = \\tan\\left(\\frac{\\pi}{2}x + \\pi\\right) = f(x)$ : $f$ est périodique de période $2$. De plus $f(-x) = -f(x)$ : $f$ est impaire. On réduit donc l’étude à $[0 ; 1[$ !',
    formula: {
      name: 'Domaine, période et dérivée',
      formula: 'f(x) = \\tan\\left(\\frac{\\pi}{2}x\\right) \\quad (T = 2,\\; \\text{impaire}) \\implies f’(x) = \\frac{\\pi}{2}\\left(1 + \\tan^2\\left(\\frac{\\pi}{2}x\\right)\\right) > 0',
    },
    exercise: {
      id: 'tc_m_num_l03_p08_q05',
      type: 'mcq',
      prompt: 'Quelle est la période de la fonction $f(x) = \\tan\\left(\\frac{\\pi}{2}x\\right)$ et son asymptote sur $[0 ; 1[$ ?',
      options: [
        'Période $\\pi$ et asymptote $x = \\frac{\\pi}{2}$',
        'Période $2$ et asymptote verticale $x = 1$ (car $\\lim_{1^-} f = +\\infty$)',
        'Période $4$ et asymptote $x = 2$',
        'Période $1$ et asymptote horizontale $y = 1$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{\\pi}{2}(x + T) = \\frac{\\pi}{2}x + \\pi \\implies T = 2$. Quand $x \\to 1^-$, $\\frac{\\pi}{2}x \\to \\frac{\\pi}{2}^-$, donc $f(x) \\to +\\infty$ : $x = 1$ est asymptote verticale.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Compléter le graphe',
    stepTheme: 'green',
    stepTitle: 'Construire toute la courbe à partir de l’intervalle réduit $[0 ; 1[$',
    paragraphText:
      'Pour $f(x) = \\tan\\left(\\frac{\\pi}{2}x\\right)$ : 1) On trace $(C_f)$ sur $[0 ; 1[$ ($f(0)=0$, $f’(0)=\\frac{\\pi}{2}$, asymptote $x = 1$). 2) Par imparité (symétrie centrale par rapport à $O$), on obtient la branche sur $]-1 ; 1[$ (période complète). 3) Par translations de vecteurs $2k\\vec{i}$ ($k \\in \\mathbb{Z}$), on obtient toute la courbe sur $\\mathbb{R} \\setminus \\{1 + 2k\\}$.',
    visualSchema: {
      type: 'function_plot',
      title: 'Branche principale de tan(πx/2) sur ]-1 ; 1[ et motif suivant',
      caption: 'Asymptotes verticales en x = -1, x = 1 et x = 3 (période 2)',
      plot: {
        xMin: -1.2,
        xMax: 3.2,
        yMin: -4,
        yMax: 4,
        xStep: 1,
        yStep: 1,
        curves: [
          {
            label: 'tan(πx/2)',
            color: 'violet',
            pieces: [
              { expr: 'tan((pi/2)*x)', from: -0.86, to: 0.86 },
              { expr: 'tan((pi/2)*x)', from: 1.14, to: 2.86 },
            ],
          },
        ],
        verticalLines: [
          { x: -1, label: 'x=-1', color: 'orange' },
          { x: 1, label: 'x=1', color: 'orange' },
          { x: 3, label: 'x=3', color: 'orange' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l03_p08_q06',
      type: 'mcq',
      prompt: 'Que vaut $f’(0)$ pour $f(x) = \\tan\\left(\\frac{\\pi}{2}x\\right)$ ?',
      options: ['$1$', '$\\frac{\\pi}{2}$', '$0$', '$\\pi$'],
      correctAnswerIndex: 1,
      explanation: '$f’(0) = \\frac{\\pi}{2}(1 + \\tan^2 0) = \\frac{\\pi}{2}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Bilan Tle C',
    stepTheme: 'slate',
    stepTitle: 'Connecter dérivabilité, TVI et bijection sur une même étude',
    paragraphText:
      'Dans les sujets de Terminale C, une étude de fonction se termine presque toujours par : « Montrer que la restriction de $f$ à tel intervalle $I$ réalise une bijection sur $J$, étudier la dérivabilité de $f^{-1}$, calculer $(f^{-1})’(y_0)$ et tracer $(C_{f^{-1}})$ dans le même repère orthonormé par symétrie par rapport à $y = x$. » Tu disposes désormais de tous les outils pour réussir sans faute.',
    exercise: {
      id: 'tc_m_num_l03_p08_q07',
      type: 'mcq',
      prompt: 'Dans l’étude de $h(x) = x + \\sqrt{|x^2 - 1|}$, sur $[1 ; +\\infty[$, $h$ réalise une bijection de $[1 ; +\\infty[$ sur $[1 ; +\\infty[$. Que peut-on dire de la dérivabilité à droite de $h^{-1}$ en $y_0 = 1$ ?',
      options: [
        'Elle n’est pas dérivable en $1$ (demi-tangente verticale)',
        'Elle n’est définie que pour $y > 1$',
        '$h^{-1}$ est dérivable à droite en $1$ avec $(h^{-1})_d’(1) = 0$ (demi-tangente horizontale)',
        'Sa dérivée à droite en $1$ vaut $1$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Puisque $(C_h)$ admet une demi-tangente verticale en $(1 ; 1)$, sa symétrique $(C_{h^{-1}})$ par rapport à $y = x$ admet une demi-tangente horizontale en $(1 ; 1)$. Calcul direct : pour $y \\geqslant 1$, $y - x = \\sqrt{x^2 - 1} \\implies h^{-1}(y) = \\frac{y^2 + 1}{2y}$, dérivable à droite en $1$ avec $(h^{-1})_d’(1) = \\frac{1^2 - 1}{2} = 0$.',
    },
  },
];

export const MATHS_TLE_C_L03_DERIVABILITE_ETUDE_FONCTIONS: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 3,
  title: 'Leçon 3 : Dérivabilité et étude de fonctions',
  summary:
    'Dérivabilité à gauche/droite, demi-tangentes verticales, dérivation de fonctions composées, dérivabilité d’une bijection réciproque (arctan, arcsin, racines), dérivées successives par récurrence, inégalités des accroissements finis et études complètes (valeur absolue et trigonométrie).',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p01',
      order: 1,
      title: 'Dérivabilité à gauche et à droite ; demi-tangentes',
      summary:
        'Étudier la dérivabilité en un point de raccordement à l’aide du taux d’accroissement à gauche et à droite et déterminer les demi-tangentes.',
      conceptExplanation:
        'Une fonction définie par morceaux ou avec une valeur absolue n’est pas toujours dérivable en un point frontière x₀. Elle est dérivable à gauche (resp. à droite) si la limite à gauche (resp. à droite) de (f(x) − f(x₀))/(x − x₀) est finie. f est dérivable en x₀ ssi ces deux limites existent et sont égales. Sinon, la courbe présente un point anguleux muni de deux demi-tangentes dirigées par (−1 ; −f_g′(x₀)) et (1 ; f_d′(x₀)).',
      keyRule: 'Toujours vérifier la continuité en x₀ avant de calculer les taux d’accroissement à gauche et à droite.',
      formulas: [
        { name: 'Dérivabilité en x₀', formula: 'f_g’(x_0) = f_d’(x_0) \\in \\mathbb{R}' },
      ],
      workedExample: {
        title: 'Étude en un point de raccordement',
        statement: 'Étudier la dérivabilité en $x_0 = 1$ de $f(x) = \\frac{1}{x-2}$ si $x \\leqslant 1$ et $f(x) = -\\frac{1}{x}$ si $x > 1$.',
        methodSteps: [
          'Continuité : $f(1) = -1$ et $\\lim_{1^+} (-1/x) = -1$, donc $f$ est continue en $1$.',
          'À gauche : $\\frac{f(x)+1}{x-1} = \\frac{1}{x-2} \\xrightarrow[1^-]{} -1 = f_g’(1)$.',
          'À droite : $\\frac{-1/x+1}{x-1} = \\frac{1}{x} \\xrightarrow[1^+]{} 1 = f_d’(1)$.',
        ],
        conclusion: '$f_g’(1) = -1 \\ne 1 = f_d’(1)$ : $f$ n’est pas dérivable en $1$ (deux demi-tangentes de pentes $-1$ et $1$).',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p02',
      order: 2,
      title: 'Interprétation géométrique : demi-tangentes verticales',
      summary:
        'Reconnaître une limite infinie du taux d’accroissement en une borne de racine carrée et orienter correctement la demi-tangente verticale (+j ou −j).',
      conceptExplanation:
        'Lorsque f est continue en x₀ mais que le taux d’accroissement (f(x) − f(x₀))/(x − x₀) tend vers +∞ ou −∞ d’un côté, la fonction n’est pas dérivable en x₀ mais (Cf) possède une demi-tangente verticale au point M₀(x₀ ; f(x₀)). À droite (x > x₀), +∞ correspond à +j et −∞ à −j ; à gauche (x < x₀), le signe de x − x₀ inverse l’orientation.',
      keyRule: 'Une valeur finie f(x₀) avec un taux d’accroissement infini donne une demi-tangente verticale (pas une asymptote !).',
      formulas: [
        { name: 'Demi-tangente verticale', formula: '\\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0} = \\pm\\infty' },
      ],
      workedExample: {
        title: 'Étude de φ(x) = √((1 − x)/(1 + x)) en 1⁻',
        statement: 'Étudier la dérivabilité de $\\varphi$ à gauche en $1$ et interpréter graphiquement.',
        methodSteps: [
          '$\\varphi(1) = 0$. Pour $x \\in ]-1 ; 1[$, $\\frac{\\varphi(x) - 0}{x - 1} = -\\frac{1}{\\sqrt{(1-x)(1+x)}}$.',
          'Quand $x \\to 1^-$, $(1-x)(1+x) \\to 0^+$, donc la limite du taux vaut $-\\infty$.',
          'À gauche de $1$ ($x - 1 < 0$) et pour $\\varphi(x) > 0$, la demi-tangente est dirigée vers le haut ($+\\vec{j}$).',
        ],
        conclusion: '$\\varphi$ n’est pas dérivable en $1$ et $(C_\\varphi)$ admet en $(1 ; 0)$ une demi-tangente verticale dirigée vers le haut.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p03',
      order: 3,
      title: 'Dérivabilité sur un intervalle et fonctions composées',
      summary:
        'Appliquer la règle de dérivation en chaîne (f ∘ g)′ = g′ · (f′ ∘ g) aux puissances rationnelles u^r, racines √u et fonctions trigonométriques.',
      conceptExplanation:
        'Sur un intervalle où g est dérivable et f est dérivable sur g(I), la composée f ∘ g est dérivable et (f ∘ g)′(x) = g′(x) · f′(g(x)). En Terminale C, cette règle s’étend aux exposants rationnels (u^r)′ = r u′ u^(r−1), à √u (quand u > 0) et aux fonctions trigonométriques. Attention : certaines fonctions comme (4x − 1)√(4x − 1) restent dérivables même en la racine x = 1/4 !',
      keyRule: 'Ne jamais oublier le facteur dérivé intérieur u′(x) lors de la dérivation d’une fonction composée.',
      formulas: [
        { name: 'Composition', formula: '(f \\circ g)’(x) = g’(x) \\cdot f’(g(x))' },
        { name: 'Puissance rationnelle', formula: '(u^r)’ = r \\cdot u’ \\cdot u^{r-1} \\quad (r \\in \\mathbb{Q}^*)' },
      ],
      workedExample: {
        title: 'Dérivabilité en la borne de f(x) = (4x − 1)√(4x − 1)',
        statement: 'Étudier la dérivabilité de $f$ sur $[\\frac{1}{4} ; +\\infty[$ et calculer $f’(x)$.',
        methodSteps: [
          'Sur $]\\frac{1}{4} ; +\\infty[$, $4x - 1 > 0$ donc $f(x) = (4x - 1)^{3/2}$ est dérivable et $f’(x) = \\frac{3}{2} \\cdot 4(4x - 1)^{1/2} = 6\\sqrt{4x - 1}$.',
          'En $x_0 = \\frac{1}{4}$, $\\frac{f(x) - f(1/4)}{x - 1/4} = \\frac{(4x - 1)\\sqrt{4x - 1}}{(4x - 1)/4} = 4\\sqrt{4x - 1} \\xrightarrow[1/4^+]{} 0$.',
        ],
        conclusion: '$f$ est dérivable sur tout $[\\frac{1}{4} ; +\\infty[$ avec $f’(\\frac{1}{4}) = 0$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p04',
      order: 4,
      title: 'Dérivabilité et dérivée d’une bijection réciproque',
      summary:
        'Déterminer l’ensemble de dérivabilité de f⁻¹ et calculer (f⁻¹)′(y₀) = 1/f′(x₀) même sans pouvoir expliciter f⁻¹.',
      conceptExplanation:
        'Si f est une bijection continue et strictement monotone de I sur J, dérivable en x₀ avec f′(x₀) ≠ 0, alors sa réciproque f⁻¹ est dérivable en y₀ = f(x₀) et (f⁻¹)′(y₀) = 1 / f′(x₀). Les points où f′(x₀) = 0 produisent des tangentes verticales pour f⁻¹ (non dérivabilité). La méthode permet de calculer la dérivée en un point sans connaître la formule de f⁻¹ !',
      keyRule: 'Chercher l’antécédent x₀ ∈ I tel que f(x₀) = y₀, vérifier f′(x₀) ≠ 0, puis inverser f′(x₀).',
      formulas: [
        { name: 'Théorème de dérivabilité réciproque', formula: '\\bigl(f^{-1}\\bigr)’(y_0) = \\frac{1}{f’(x_0)} \\qquad (f(x_0) = y_0,\\; f’(x_0) \\ne 0)' },
      ],
      workedExample: {
        title: 'Calcul de (f⁻¹)′(2) sans expliciter f⁻¹',
        statement: 'Soit $f(x) = x^2 - x$ sur $I = ]-\\infty ; \\frac{1}{2}]$, bijective sur $J = [-\\frac{1}{4} ; +\\infty[$. Calculer $(f^{-1})’(2)$.',
        methodSteps: [
          'Résoudre $x^2 - x = 2$ : $(x + 1)(x - 2) = 0$, donc $x = -1$ ou $x = 2$.',
          'Comme $x_0$ doit être dans $I = ]-\\infty ; \\frac{1}{2}]$, l’unique antécédent est $x_0 = -1$.',
          'Calculer $f’(-1) = 2(-1) - 1 = -3 \\ne 0$.',
        ],
        conclusion: '$(f^{-1})’(2) = \\frac{1}{f’(-1)} = -\\frac{1}{3}$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p05',
      order: 5,
      title: 'Fonctions réciproques classiques : arctan, arcsin et radical',
      summary:
        'Démontrer et appliquer les formules (arctan)′(x) = 1/(1+x²), (arcsin)′(x) = 1/√(1−x²), la relation arctan(x) + arctan(1/x) et les bijections irrationnelles.',
      conceptExplanation:
        'Le théorème de dérivation de la bijection réciproque permet de dériver des fonctions nouvelles définies comme réciproques de tan sur ]−π/2 ; π/2[ (arctan, définie et dérivable sur R de dérivée 1/(1 + x²)) ou de sin sur [−π/2 ; π/2] (arcsin, dérivable sur ]−1 ; 1[ de dérivée 1/√(1 − x²)). L’étude de φ(x) + φ(1/x) rappelle l’importance de travailler sur un intervalle connexe.',
      keyRule: 'Sur ]−π/2 ; π/2[, cos t > 0 donc cos(arcsin x) = +√(1 − x²), ce qui fixe le signe de (arcsin)′.',
      formulas: [
        { name: 'Dérivée arctan', formula: '\\varphi’(x) = \\frac{1}{1 + x^2} \\quad (x \\in \\mathbb{R})' },
        { name: 'Dérivée arcsin', formula: '\\psi’(x) = \\frac{1}{\\sqrt{1 - x^2}} \\quad (x \\in ]-1 ; 1[)' },
      ],
      workedExample: {
        title: 'Démontrer φ(x) + φ(1/x) = π/2 pour x > 0',
        statement: 'Soit $\\varphi$ la réciproque de $\\tan$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$. Montrer que $\\forall x > 0$, $\\varphi(x) + \\varphi(\\frac{1}{x}) = \\frac{\\pi}{2}$.',
        methodSteps: [
          'Poser $g(x) = \\varphi(x) + \\varphi(\\frac{1}{x})$ sur l’intervalle $]0 ; +\\infty[$.',
          'Dériver : $g’(x) = \\frac{1}{1 + x^2} - \\frac{1}{x^2} \\cdot \\frac{1}{1 + 1/x^2} = \\frac{1}{1 + x^2} - \\frac{1}{x^2 + 1} = 0$.',
          'Donc $g$ est constante sur $]0 ; +\\infty[$ et vaut $g(1) = 2\\varphi(1) = 2 \\cdot \\frac{\\pi}{4} = \\frac{\\pi}{2}$.',
        ],
        conclusion: 'Pour tout $x > 0$, $\\varphi(x) + \\varphi(\\frac{1}{x}) = \\frac{\\pi}{2}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p06',
      order: 6,
      title: 'Dérivées successives et démonstration par récurrence',
      summary:
        'Calculer f′, f″, f^(n) pour des polynômes, des fractions rationnelles et des fonctions trigonométriques, et démontrer une expression générale par récurrence.',
      conceptExplanation:
        'Dériver de proche en proche conduit aux dérivées d’ordre supérieur f″, f^(3), ..., f^(n). En Terminale C, on demande souvent de conjecturer la formule de f^(n)(x) après 3 ou 4 dérivations puis de l’établir rigoureusement par récurrence sur n, notamment pour cos(ax + b), sin(ax + b) et 1/(ax + b).',
      keyRule: 'Dans l’hérédité d’une récurrence sur f^(n), on dérive f^(k)(x) par rapport à x en traitant k comme une constante.',
      formulas: [
        { name: 'Dérivée n-ième de cos', formula: '\\cos^{(n)}(x) = \\cos\\left(x + n\\frac{\\pi}{2}\\right)' },
      ],
      workedExample: {
        title: 'Récurrence pour cos^(n)(x)',
        statement: 'Montrer par récurrence que $\\forall n \\in \\mathbb{N}$, $\\cos^{(n)}(x) = \\cos\\left(x + n\\frac{\\pi}{2}\\right)$.',
        methodSteps: [
          'Initialisation ($n = 0$) : $\\cos^{(0)}(x) = \\cos x = \\cos(x + 0)$ (vrai).',
          'Hérédité : si $\\cos^{(k)}(x) = \\cos\\left(x + k\\frac{\\pi}{2}\\right)$, alors en dérivant : $\\cos^{(k+1)}(x) = -\\sin\\left(x + k\\frac{\\pi}{2}\\right)$.',
          'Or $-\\sin\\theta = \\cos(\\theta + \\frac{\\pi}{2})$, d’où $\\cos^{(k+1)}(x) = \\cos\\left(x + (k+1)\\frac{\\pi}{2}\\right)$.',
        ],
        conclusion: 'Par récurrence, la formule est vraie pour tout $n \\in \\mathbb{N}$.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p07',
      order: 7,
      title: 'Inégalité des accroissements finis (IAF)',
      summary:
        'Encadrer f(b) − f(a) lorsque m <= f′ <= M ou |f′| <= M, démontrer des inégalités numériques et préparer les preuves de convergence de suites.',
      conceptExplanation:
        'Les deux versions de l’IAF relient la variation globale f(b) − f(a) à des bornes sur la dérivée f′. Si m <= f′(x) <= M sur [a ; b] (avec a < b), alors m(b − a) <= f(b) − f(a) <= M(b − a). En valeur absolue, si |f′(x)| <= M sur I, alors |f(b) − f(a)| <= M|b − a| pour tous a, b ∈ I. Cet outil puissant fournit des encadrements numériques fins et des inégalités fonctionnelles (tan x >= x, sin x <= x).',
      keyRule: 'Forme 1 exige a < b ; Forme 2 en valeur absolue s’applique sans ordre entre a et b.',
      formulas: [
        { name: 'IAF (forme 1)', formula: 'm(b - a) \\leqslant f(b) - f(a) \\leqslant M(b - a) \\quad (a < b)' },
        { name: 'IAF (forme 2)', formula: '|f(b) - f(a)| \\leqslant M |b - a|' },
      ],
      workedExample: {
        title: 'Encadrement de √19 − √17',
        statement: 'Démontrer que $\\frac{1}{\\sqrt{19}} \\leqslant \\sqrt{19} - \\sqrt{17} \\leqslant \\frac{1}{\\sqrt{17}}$.',
        methodSteps: [
          'Appliquer l’IAF à $f(x) = \\sqrt{x}$ dérivable sur $[17 ; 19]$.',
          'Pour $x \\in [17 ; 19]$, $f’(x) = \\frac{1}{2\\sqrt{x}}$ est décroissante, donc $\\frac{1}{2\\sqrt{19}} \\leqslant f’(x) \\leqslant \\frac{1}{2\\sqrt{17}}$.',
          'Multiplier par $19 - 17 = 2$.',
        ],
        conclusion: '$\\frac{1}{\\sqrt{19}} \\leqslant \\sqrt{19} - \\sqrt{17} \\leqslant \\frac{1}{\\sqrt{17}}$.',
      },
      structuredSteps: p07Steps,
      exercises: p07Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l03_derivabilite_etude_fonctions_p08',
      order: 8,
      title: 'Études complètes de fonctions : valeur absolue et périodicité',
      summary:
        'Mener l’étude complète de h(x) = x + √|x²−1| (intervalles, conjuguée en −∞, demi-tangentes verticales) et d’une fonction périodique trigonométrique tan(πx/2).',
      conceptExplanation:
        'Les problèmes d’étude de fonctions en Terminale C combinent souvent plusieurs difficultés : suppression d’une valeur absolue sous radical, étude de l’asymptote en −∞ via l’expression conjuguée, point anguleux ou demi-tangente verticale aux points de raccordement, ou encore réduction du domaine d’étude par périodicité et parité pour les fonctions trigonométriques.',
      keyRule: 'Toujours commencer par simplifier l’écriture (sans |·|) ou réduire le domaine par parité/périodicité avant de dériver.',
      formulas: [
        { name: 'Réduction périodique + impaire', formula: 'f(x+T) = f(x) \\text{ et } f(-x) = -f(x) \\implies \\text{étude sur } [0 ; T/2]' },
      ],
      workedExample: {
        title: 'Asymptote de h(x) = x + √|x² − 1| en −∞',
        statement: 'Calculer $\\lim_{x \\to -\\infty} h(x)$.',
        methodSteps: [
          'Pour $x < -1$, $h(x) = x + \\sqrt{x^2 - 1}$.',
          'Multiplier par le conjugué : $h(x) = \\frac{(x + \\sqrt{x^2 - 1})(\\sqrt{x^2 - 1} - x)}{\\sqrt{x^2 - 1} - x} = \\frac{-1}{\\sqrt{x^2 - 1} - x}$.',
          'Quand $x \\to -\\infty$, $-x \\to +\\infty$ et $\\sqrt{x^2 - 1} \\to +\\infty$, donc $h(x) \\to 0^-$.',
        ],
        conclusion: 'L’axe des abscisses $y = 0$ est asymptote horizontale à $(C_h)$ en $-\\infty$ (courbe en dessous).',
      },
      structuredSteps: p08Steps,
      exercises: p08Steps.map((s) => s.exercise),
    },
  ],
};