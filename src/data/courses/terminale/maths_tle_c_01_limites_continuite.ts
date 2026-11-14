import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Modéliser la profondeur de champ d’un appareil photo',
    paragraphText:
      'Pour une distance focale et une mise au point donnée à $a = 5\\text{ m}$, un club photo modélise la plage de netteté par la moyenne harmonique $P(r) = \\frac{2ar}{a + r}$ où $r \\geqslant 0$ est une distance caractéristique. En remplaçant $a$ par $5$, on obtient $P(r) = \\frac{10r}{5 + r} = 10 - \\frac{50}{5 + r}$. Lorsque $r$ devient très grand ($r \\to +\\infty$), $\\frac{50}{5 + r} \\to 0$, donc $P(r) \\to 10\\text{ m}$ : la profondeur de champ se stabilise vers un plafond fini.',
    formula: {
      name: 'Transformation algébrique',
      formula: 'P(r) = \\frac{10r}{5+r} = 10 - \\frac{50}{5+r} \\xrightarrow[r \\to +\\infty]{} 10',
    },
    konanTip: 'Transformer une fraction rationnelle en « constante + reste qui tend vers $0$ » lève instantanément les formes indéterminées $\\frac{\\infty}{\\infty}$.',
    exercise: {
      id: 'tc_m_num_l01_p01_q01',
      type: 'mcq',
      prompt: 'Si $P(r) = \\frac{12r}{6 + r}$ pour $r > 0$, quelle est la limite $\\lim_{r \\to +\\infty} P(r)$ ?',
      options: ['$6$', '$12$', '$0$', '$+\\infty$'],
      correctAnswerIndex: 1,
      explanation: '$P(r) = 12 - \\frac{72}{6 + r}$. Comme $\\lim_{r \\to +\\infty} \\frac{72}{6+r} = 0$, on obtient $\\lim_{r \\to +\\infty} P(r) = 12$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Propriété clé',
    stepTheme: 'violet',
    stepTitle: 'Théorème de la limite d’une fonction composée',
    paragraphText:
      'Soient $f$ et $g$ deux fonctions telles que $g \\circ f$ soit définie sur un intervalle convenable. Si $\\lim_{x \\to a} f(x) = b$ et si $\\lim_{X \\to b} g(X) = \\ell$, alors $\\lim_{x \\to a} (g \\circ f)(x) = \\ell$. Ici $a$, $b$ et $\\ell$ peuvent chacun être un nombre réel, $+\\infty$ ou $-\\infty$.',
    formula: {
      name: 'Limite d’une composée',
      formula: '\\lim_{x \\to a} f(x) = b \\text{ et } \\lim_{X \\to b} g(X) = \\ell \\implies \\lim_{x \\to a} g(f(x)) = \\ell',
    },
    keyRule: 'Toujours poser $X = f(x)$ pour décomposer une limite emboîtée en deux limites simples.',
    exercise: {
      id: 'tc_m_num_l01_p01_q02',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to +\\infty} \\sqrt{4 + \\frac{2}{x^2 + 1}}$ ?',
      options: ['$0$', '$2$', '$4$', '$+\\infty$'],
      correctAnswerIndex: 1,
      explanation: 'On pose $X = 4 + \\frac{2}{x^2 + 1}$. Quand $x \\to +\\infty$, $X \\to 4$. Comme $\\lim_{X \\to 4} \\sqrt{X} = 2$, la limite vaut $2$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Méthode type',
    stepTheme: 'green',
    stepTitle: 'Utiliser les limites trigonométriques par composition',
    paragraphText:
      'De nombreuses formes indéterminées $\\frac{0}{0}$ avec $\\sin$ ou $\\cos$ se ramènent à la limite fondamentale $\\lim_{X \\to 0} \\frac{\\sin X}{X} = 1$ ou $\\lim_{X \\to 0} \\frac{1 - \\cos X}{X^2} = \\frac{1}{2}$ en faisant apparaître le même bloc $X = u(x)$ au numérateur et au dénominateur.',
    formula: {
      name: 'Changement de variable trigonométrique',
      formula: '\\frac{\\sin(kx)}{x} = k \\cdot \\frac{\\sin(kx)}{kx} \\xrightarrow[x \\to 0]{} k',
    },
    exercise: {
      id: 'tc_m_num_l01_p01_q03',
      type: 'mcq',
      prompt: 'Quelle est la limite $\\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}$ ?',
      options: ['$\\frac{5}{2}$', '$\\frac{2}{5}$', '$1$', '$5$'],
      correctAnswerIndex: 0,
      explanation: '$\\frac{\\sin(5x)}{2x} = \\frac{5}{2} \\cdot \\frac{\\sin(5x)}{5x}$. Quand $x \\to 0$, $X = 5x \\to 0$ et $\\frac{\\sin X}{X} \\to 1$, donc la limite est $\\frac{5}{2}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Lecture graphique',
    stepTheme: 'slate',
    stepTitle: 'Composer avec une fonction donnée par son tableau de variations',
    paragraphText:
      'Quand une fonction $f$ est connue par son tableau de variations, il faut d’abord préciser si la fonction intérieure $u(x)$ approche la borne par valeurs supérieures ($b^+$) ou inférieures ($b^-$), car la limite de $f$ peut changer de signe d’un côté à l’autre d’une asymptote verticale ! Par exemple, si $x \\to -\\infty$, alors $-2 + \\frac{1}{x} \\to -2^-$, tandis que si $x \\to +\\infty$, $-2 + \\frac{1}{x} \\to -2^+$.',
    visualSchema: {
      type: 'variation_table',
      title: 'Exemple de lecture pour f(X)',
      variation: {
        xLabel: 'X',
        fLabel: 'f(X)',
        xValues: ['−∞', '−2', '0', '+∞'],
        values: [
          { text: '1', level: 'middle' },
          {
            forbidden: true,
            left: { text: '−∞', level: 'bottom' },
            right: { text: '+∞', level: 'top' },
          },
          { text: '0', level: 'bottom' },
          { text: '+∞', level: 'top' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l01_p01_q04',
      type: 'mcq',
      prompt: 'Avec le tableau de variations de $f$ ci-dessus, que vaut $\\lim_{x \\to -\\infty} f\\left(-2 + \\frac{1}{x}\\right)$ ?',
      options: ['$+\\infty$', '$-\\infty$', '$1$', '$0$'],
      correctAnswerIndex: 1,
      explanation: 'Quand $x \\to -\\infty$, $\\frac{1}{x} < 0$ et $\\frac{1}{x} \\to 0$, donc $X = -2 + \\frac{1}{x} \\to -2^-$. À gauche de $-2$, le tableau indique $\\lim_{X \\to -2^-} f(X) = -\\infty$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège d’examen',
    stepTheme: 'orange',
    stepTitle: 'Attention au côté d’approche dans une composée',
    paragraphText:
      'Dans $\\lim_{x \\to +\\infty} f\\left(-\\frac{1}{x}\\right)$, la variable $X = -\\frac{1}{x}$ tend vers $0$ en restant strictement négative ($0^-$). Dans $\\lim_{x \\to 0^-} f\\left(\\frac{2x - 1}{x^2 + x}\\right)$, quand $x \\to 0^-$, $2x - 1 \\to -1$ et $x^2 + x = x(x + 1) \\to 0^-$, donc le quotient tend vers $+\\infty$. Il est indispensable de dresser le signe du dénominateur.',
    keyRule: 'Toujours indiquer le sens d’approche ($b^+$ ou $b^-$) avant de lire la limite de la fonction extérieure $f$.',
    exercise: {
      id: 'tc_m_num_l01_p01_q05',
      type: 'mcq',
      prompt: 'Lorsque $x \\to 0^-$, vers quoi tend $u(x) = \\frac{2x - 1}{x^2 + x}$ ?',
      options: ['$-\\infty$', '$+\\infty$', '$0$', '$-1$'],
      correctAnswerIndex: 1,
      explanation: 'Au numérateur $2x - 1 \\to -1 < 0$. Au dénominateur $x(x+1) \\to 0$ avec $x < 0$ et $x+1 > 0$, donc $x^2+x \\to 0^-$. Quotient de deux nombres négatifs : $+\\infty$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Comparaison',
    stepTheme: 'violet',
    stepTitle: 'Théorème des gendarmes (encadrement)',
    paragraphText:
      'Lorsqu’une fonction oscille (par exemple avec $\\sin(x^5)$ ou $\\cos(3x)$), la limite de la fonction composée n’existe pas directement. Si pour $x$ voisin de $a$, on a $g(x) \\leqslant f(x) \\leqslant h(x)$ et si $\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = \\ell$, alors $\\lim_{x \\to a} f(x) = \\ell$.',
    formula: {
      name: 'Encadrement avec sinus',
      formula: '-\\frac{1}{|x|} \\leqslant \\frac{\\sin(x^5)}{x} \\leqslant \\frac{1}{|x|} \\implies \\lim_{x \\to +\\infty} \\frac{\\sin(x^5)}{x} = 0',
    },
    exercise: {
      id: 'tc_m_num_l01_p01_q06',
      type: 'mcq',
      prompt: 'Quelle est la limite $\\lim_{x \\to +\\infty} \\frac{3x + \\cos(x^2)}{x}$ ?',
      options: ['$0$', '$1$', '$3$', 'Elle n’existe pas'],
      correctAnswerIndex: 2,
      explanation: 'On écrit $\\frac{3x + \\cos(x^2)}{x} = 3 + \\frac{\\cos(x^2)}{x}$. Comme $-\\frac{1}{x} \\leqslant \\frac{\\cos(x^2)}{x} \\leqslant \\frac{1}{x}$ pour $x > 0$, par encadrement le reste tend vers $0$, d’où une limite égale à $3$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan méthodologique',
    stepTheme: 'green',
    stepTitle: 'Choisir la bonne stratégie face à une limite composée',
    paragraphText:
      '1) Identifier la fonction intérieure $u(x)$ et sa limite $b$ (en précisant $b^+$ ou $b^-$ si nécessaire). 2) Si la limite de la fonction extérieure $f$ en $b$ est connue (courbe, tableau ou fonction usuelle), conclure par composition. 3) Si un terme borné ($\\sin$, $\\cos$) oscille à l’infini sans limite, utiliser le théorème des gendarmes ou de comparaison.',
    konanTip: 'Ne jamais écrire $\\lim_{x \\to +\\infty} \\sin(x)$ comme un nombre : le sinus n’a pas de limite à l’infini, on l’encadre entre $-1$ et $1$.',
    exercise: {
      id: 'tc_m_num_l01_p01_q07',
      type: 'mcq',
      prompt: 'La limite $\\lim_{x \\to 0} \\frac{\\sqrt{1 + \\sin^2 x} - 1}{\\sin^2 x}$ vaut :',
      options: ['$0$', '$\\frac{1}{2}$', '$1$', '$+\\infty$'],
      correctAnswerIndex: 1,
      explanation: 'En posant $X = \\sin^2 x$, on a $X \\to 0^+$. Or $\\frac{\\sqrt{1+X}-1}{X} = \\frac{1}{\\sqrt{1+X}+1} \\xrightarrow[X \\to 0]{} \\frac{1}{2}$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Rappel essentiel',
    stepTheme: 'blue',
    stepTitle: 'Fonction majorée, minorée, bornée sur un intervalle',
    paragraphText:
      'Soit $f$ définie sur un intervalle $I$. $f$ est majorée sur $I$ s’il existe $M \\in \\mathbb{R}$ tel que $\\forall x \\in I$, $f(x) \\leqslant M$. $f$ est minorée sur $I$ s’il existe $m \\in \\mathbb{R}$ tel que $\\forall x \\in I$, $f(x) \\geqslant m$.',
    formula: {
      name: 'Majoration et minoration',
      formula: 'f \\text{ bornée sur } I \\iff \\exists (m, M) \\in \\mathbb{R}^2, \\; \\forall x \\in I,\\; m \\leqslant f(x) \\leqslant M',
    },
    exercise: {
      id: 'tc_m_num_l01_p02_q01',
      type: 'mcq',
      prompt: 'La fonction $f(x) = 3 - \\frac{1}{x^2 + 1}$ sur $\\mathbb{R}$ est :',
      options: [
        'Uniquement minorée par $2$',
        'Majorée par $3$ et minorée par $2$',
        'Uniquement majorée par $3$',
        'Non bornée sur $\\mathbb{R}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $x^2 + 1 \\geqslant 1$, on a $0 < \\frac{1}{x^2 + 1} \\leqslant 1$, donc $2 \\leqslant 3 - \\frac{1}{x^2 + 1} < 3$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Théorème fondamental',
    stepTheme: 'violet',
    stepTitle: 'Limite en $b$ d’une fonction croissante sur $]a ; b[$',
    paragraphText:
      'Soit $f$ une fonction croissante sur un intervalle ouvert $]a ; b[$ (avec $a \\in \\mathbb{R} \\cup \\{-\\infty\\}$ et $b \\in \\mathbb{R} \\cup \\{+\\infty\\}$). Si $f$ est majorée sur $]a ; b[$ par $M$, alors $f$ admet une limite finie $\\ell$ à gauche en $b$ (ou en $+\\infty$ si $b = +\\infty$) et $\\ell \\leqslant M$. Si $f$ n’est pas majorée sur $]a ; b[$, alors $\\lim_{x \\to b^-} f(x) = +\\infty$.',
    formula: {
      name: 'Croissante et majorée',
      formula: 'f \\text{ croissante sur } ]a ; b[ \\text{ et } f \\leqslant M \\implies \\exists \\ell \\in \\mathbb{R},\\; \\lim_{x \\to b^-} f(x) = \\ell \\leqslant M',
    },
    keyRule: 'La monotonie combinée à un majorant garantit l’existence d’une limite finie sans même connaître l’expression explicite de $f$ !',
    exercise: {
      id: 'tc_m_num_l01_p02_q02',
      type: 'mcq',
      prompt: 'Soit $f$ croissante sur $]0 ; +\\infty[$ telle que $\\forall x > 0$, $f(x) \\leqslant 5$. Que peut-on affirmer en $+\\infty$ ?',
      options: [
        '$\\lim_{x \\to +\\infty} f(x) = 5$',
        '$\\lim_{x \\to +\\infty} f(x) = +\\infty$',
        '$f$ admet une limite finie $\\ell \\leqslant 5$',
        '$f$ n’a pas nécessairement de limite',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le théorème assure l’existence d’une limite finie $\\ell$ telle que $\\ell \\leqslant 5$, mais $\\ell$ peut être strictement inférieure à $5$ (par exemple $3 - \\frac{1}{x} \\to 3 \\leqslant 5$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Symétrique en a et pour décroissante',
    stepTheme: 'violet',
    stepTitle: 'Cas d’une fonction décroissante ou étude en la borne gauche $a$',
    paragraphText:
      'Si $f$ est croissante sur $]a ; b[$ et minorée par $m$, alors $f$ admet une limite finie $\\ell_1 \\geqslant m$ quand $x \\to a^+$; si elle n’est pas minorée, $\\lim_{x \\to a^+} f(x) = -\\infty$. Symétriquement, si $f$ est décroissante sur $]a ; b[$ et minorée par $m$, elle admet une limite finie $\\ell \\geqslant m$ quand $x \\to b^-$ (sinon $-\\infty$).',
    formula: {
      name: 'Décroissante et minorée',
      formula: 'f \\text{ décroissante sur } ]a ; b[ \\text{ et } f \\geqslant m \\implies \\exists \\ell \\in \\mathbb{R},\\; \\lim_{x \\to b^-} f(x) = \\ell \\geqslant m',
    },
    exercise: {
      id: 'tc_m_num_l01_p02_q03',
      type: 'mcq',
      prompt: 'Soit $g$ décroissante sur $[1 ; +\\infty[$ et non minorée sur $[1 ; +\\infty[$. Quelle est sa limite en $+\\infty$ ?',
      options: ['$0$', '$+\\infty$', '$-\\infty$', 'Une limite finie $\\ell$'],
      correctAnswerIndex: 2,
      explanation: 'Une fonction décroissante et non minorée en $+\\infty$ prend des valeurs arbitrairement petites (négatives), donc $\\lim_{x \\to +\\infty} g(x) = -\\infty$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Application Tle C',
    stepTheme: 'slate',
    stepTitle: 'Encadrer la limite d’une fonction définie par sa dérivée',
    paragraphText:
      'Soit $f$ dérivable sur $]0 ; +\\infty[$ telle que $f’(x) = \\frac{1}{1 + x^2}$. Comme $f’(x) > 0$, $f$ est strictement croissante sur $[1 ; +\\infty[$. De plus, pour tout $x \\geqslant 1$, $0 < \\frac{1}{1 + x^2} \\leqslant \\frac{1}{x^2}$, donc la fonction $h(x) = f(x) + \\frac{1}{x}$ a pour dérivée $h’(x) = \\frac{1}{1+x^2} - \\frac{1}{x^2} < 0$. $h$ est décroissante sur $[1 ; +\\infty[$, d’où $h(x) \\leqslant h(1) = f(1) + 1$, soit $f(x) \\leqslant -\\frac{1}{x} + 1 + f(1) < 1 + f(1)$.',
    formula: {
      name: 'Encadrement de la limite',
      formula: 'f(1) \\leqslant \\lim_{x \\to +\\infty} f(x) \\leqslant 1 + f(1)',
    },
    exercise: {
      id: 'tc_m_num_l01_p02_q04',
      type: 'mcq',
      prompt: 'Dans l’exemple précédent ($f’(x) = \\frac{1}{1+x^2}$), pourquoi peut-on conclure que $f$ admet une limite finie $\\ell$ en $+\\infty$ ?',
      options: [
        'Parce que $\\lim_{x \\to +\\infty} f’(x) = 0$',
        'Parce que $f$ est croissante et majorée par $1 + f(1)$ sur $[1 ; +\\infty[$',
        'Parce que $f$ est paire',
        'Parce que $1 + x^2$ ne s’annule jamais',
      ],
      correctAnswerIndex: 1,
      explanation: 'Attention : $f’(x) \\to 0$ ne suffit jamais à prouver que $f$ a une limite finie (contre-exemple : $\\ln x$ a pour dérivée $\\frac{1}{x} \\to 0$, mais $\\ln x \\to +\\infty$). C’est la croissance jointe à la majoration $f(x) < 1 + f(1)$ qui garantit la limite finie.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Attention classique',
    stepTheme: 'orange',
    stepTitle: 'Majorant optimal et valeur exacte de la limite',
    paragraphText:
      'Si $f$ est croissante et majorée par $M$, sa limite $\\ell$ vérifie $\\ell \\leqslant M$ et $f(x) \\leqslant \\ell$ pour tout $x \\in ]a ; b[$, mais on ne peut pas conclure que $\\ell = M$ sans autre information ! En effet, $M$ peut être n’importe quel majorant plus grand que la borne supérieure exacte.',
    konanTip: 'Pour $f’(x) = \\frac{1}{1+x^2}$ avec $f(0)=0$ (c’est $\\arctan x$), $f(1) = \\frac{\\pi}{4} \\approx 0{,}785$ et $\\ell = \\frac{\\pi}{2} \\approx 1{,}571$, qui vérifie bien $\\frac{\\pi}{4} \\leqslant \\frac{\\pi}{2} \\leqslant 1 + \\frac{\\pi}{4}$.',
    exercise: {
      id: 'tc_m_num_l01_p02_q05',
      type: 'mcq',
      prompt: 'La fonction $f(x) = 2 - e^{-x}$ est croissante sur $\\mathbb{R}$ et majorée par $10$. Quelle est la relation entre $\\ell = \\lim_{x \\to +\\infty} f(x)$ et $10$ ?',
      options: ['$\\ell = 10$', '$\\ell = 2 < 10$', '$\\ell > 10$', '$f$ diverge'],
      correctAnswerIndex: 1,
      explanation: 'Ici $\\ell = 2$, ce qui illustre parfaitement le théorème : la limite vérifie $\\ell \\leqslant M$ (avec $2 \\leqslant 10$), sans être égale au majorant choisi.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Méthode de majoration',
    stepTheme: 'green',
    stepTitle: 'Comment prouver qu’une fonction monotone est bornée via sa dérivée',
    paragraphText:
      'Pour majorer une fonction $f$ croissante sur $[x_0 ; +\\infty[$ dont on ne connaît que la dérivée $f’(x) > 0$, on compare $f’(x)$ à une dérivée connue $u’(x)$ (comme $\\frac{1}{x^2}$) vérifiant $f’(x) \\leqslant u’(x)$, puis on étudie le sens de variation de la différence $f - u$.',
    formula: {
      name: 'Comparaison des dérivées',
      formula: 'f’(x) \\leqslant u’(x) \\text{ sur } [x_0 ; +\\infty[ \\implies (f - u)’(x) \\leqslant 0 \\implies f(x) - u(x) \\leqslant f(x_0) - u(x_0)',
    },
    exercise: {
      id: 'tc_m_num_l01_p02_q06',
      type: 'mcq',
      prompt: 'Si $(f - u)’(x) \\leqslant 0$ sur $[1 ; +\\infty[$ avec $u(x) = -\\frac{2}{x}$, quelle inégalité est vraie pour tout $x \\geqslant 1$ ?',
      options: [
        '$f(x) + \\frac{2}{x} \\geqslant f(1) + 2$',
        '$f(x) + \\frac{2}{x} \\leqslant f(1) + 2$',
        '$f(x) - \\frac{2}{x} \\leqslant f(1) - 2$',
        '$f(x) \\leqslant 0$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f - u$ est décroissante sur $[1 ; +\\infty[$, donc $(f-u)(x) \\leqslant (f-u)(1)$, soit $f(x) - (-\\frac{2}{x}) \\leqslant f(1) - (-2)$, d’où $f(x) + \\frac{2}{x} \\leqslant f(1) + 2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Synthèse',
    stepTheme: 'slate',
    stepTitle: 'Vérifier les quatre cas de limite monotone',
    paragraphText:
      'En résumé, une fonction monotone sur un intervalle ouvert $]a ; b[$ a toujours une limite (finie ou infinie) à chaque extrémité : elle ne peut jamais osciller indéfiniment. Croissante + majorée en $b^-$ $\\implies$ limite finie ; croissante + non majorée en $b^-$ $\\implies +\\infty$ ; décroissante + minorée en $b^-$ $\\implies$ limite finie ; décroissante + non minorée en $b^-$ $\\implies -\\infty$.',
    exercise: {
      id: 'tc_m_num_l01_p02_q07',
      type: 'mcq',
      prompt: 'La fonction $f(x) = \\sin x$ sur $]0 ; +\\infty[$ n’a pas de limite en $+\\infty$ bien qu’elle soit majorée par $1$. Quelle hypothèse du théorème manque-t-il ?',
      options: [
        '$f$ n’est pas continue',
        '$f$ n’est pas minorée',
        '$f$ n’est pas monotone sur $]0 ; +\\infty[$',
        'L’intervalle n’est pas borné',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\sin x$ est majorée par $1$ et minorée par $-1$, mais elle change sans cesse de sens de variation ; l’absence de monotonie empêche d’appliquer le théorème.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Asymptotes de base',
    stepTheme: 'blue',
    stepTitle: 'Asymptote verticale et asymptote horizontale',
    paragraphText:
      'Soit $(C_f)$ la courbe représentative de $f$ dans un repère orthogonal. Si $\\lim_{x \\to a} f(x) = \\pm\\infty$ (à gauche ou à droite en $a \\in \\mathbb{R}$), la droite d’équation $x = a$ est asymptote verticale à $(C_f)$. Si $\\lim_{x \\to \\pm\\infty} f(x) = b$ ($b \\in \\mathbb{R}$), la droite $y = b$ est asymptote horizontale en $\\pm\\infty$.',
    formula: {
      name: 'Critères d’asymptotes parallèles aux axes',
      formula: '\\lim_{x \\to a} f(x) = \\pm\\infty \\iff x = a \\text{ asymptote verticale} \\quad ; \\quad \\lim_{x \\to \\pm\\infty} f(x) = b \\iff y = b \\text{ asymptote horizontale}',
    },
    exercise: {
      id: 'tc_m_num_l01_p03_q01',
      type: 'mcq',
      prompt: 'Pour $f(x) = \\frac{3x - 1}{x - 2}$, quelles sont les asymptotes de $(C_f)$ ?',
      options: [
        '$x = 3$ et $y = 2$',
        '$x = 2$ et $y = 3$',
        '$x = 2$ et $y = \\frac{1}{2}$',
        '$x = -2$ et $y = 3$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\lim_{x \\to 2} f(x) = \\pm\\infty$ donc $x = 2$ est asymptote verticale ; $\\lim_{x \\to \\pm\\infty} f(x) = 3$ donc $y = 3$ est asymptote horizontale.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Branches paraboliques',
    stepTheme: 'violet',
    stepTitle: 'Branches paraboliques de direction $(OI)$ et $(OJ)$',
    paragraphText:
      'Lorsque $\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$, on étudie le comportement du rapport $\\frac{f(x)}{x}$. Si $\\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} = 0$, la courbe $(C_f)$ admet une branche parabolique de direction celle de l’axe des abscisses $(OI)$ (ex. $\\sqrt{x}$). Si $\\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} = \\pm\\infty$, $(C_f)$ admet une branche parabolique de direction celle de l’axe des ordonnées $(OJ)$ (ex. $x^2$).',
    formula: {
      name: 'Branches paraboliques',
      formula: '\\lim_{\\pm\\infty} \\frac{f(x)}{x} = 0 \\implies \\text{dir. } (OI) \\qquad \\lim_{\\pm\\infty} \\frac{f(x)}{x} = \\pm\\infty \\implies \\text{dir. } (OJ)',
    },
    visualSchema: {
      type: 'function_plot',
      title: 'Branches paraboliques (OI) vs (OJ)',
      caption: 'En bleu : x² (direction OJ) — En vert : √x (direction OI)',
      plot: {
        xMin: 0,
        xMax: 5,
        yMin: 0,
        yMax: 5,
        xStep: 1,
        yStep: 1,
        curves: [
          { label: 'x^2 (dir. OJ)', color: 'blue', pieces: [{ expr: 'x^2', from: 0, to: 2.24 }] },
          { label: 'sqrt(x) (dir. OI)', color: 'green', pieces: [{ expr: 'sqrt(x)', from: 0, to: 5 }] },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l01_p03_q02',
      type: 'mcq',
      prompt: 'Soit $f(x) = \\frac{x^3 - 2x}{x + 1}$. En $+\\infty$, quelle est l’allure de la branche infinie ?',
      options: [
        'Asymptote horizontale $y = 1$',
        'Branche parabolique de direction $(OI)$',
        'Branche parabolique de direction $(OJ)$',
        'Asymptote oblique $y = x - 1$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\frac{f(x)}{x} = \\frac{x^2 - 2}{x + 1} \\xrightarrow[x \\to +\\infty]{} +\\infty$, donc $(C_f)$ présente une branche parabolique de direction $(OJ)$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Méthode complète',
    stepTheme: 'green',
    stepTitle: 'Rechercher une asymptote oblique $y = ax + b$',
    paragraphText:
      'Quand $\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$ et $\\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} = a$ ($a \\in \\mathbb{R}^*$), on calcule ensuite $\\lim_{x \\to \\pm\\infty} [f(x) - ax]$. Si cette limite est finie égale à $b \\in \\mathbb{R}$, alors la droite $(D) : y = ax + b$ est asymptote oblique à $(C_f)$ en $\\pm\\infty$. Si elle est infinie, c’est une branche parabolique de direction la droite $y = ax$.',
    formula: {
      name: 'Identification de a et b',
      formula: 'a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} \\in \\mathbb{R}^* \\quad ; \\quad b = \\lim_{x \\to \\pm\\infty} \\bigl(f(x) - ax\\bigr) \\in \\mathbb{R}',
    },
    exercise: {
      id: 'tc_m_num_l01_p03_q03',
      type: 'mcq',
      prompt: 'Si $\\lim_{x \\to +\\infty} \\frac{f(x)}{x} = 2$ et $\\lim_{x \\to +\\infty} (f(x) - 2x) = +\\infty$, que conclure ?',
      options: [
        '$y = 2x$ est asymptote oblique',
        'Branche parabolique de direction $(OJ)$',
        'Branche parabolique de direction la droite d’équation $y = 2x$',
        'Asymptote horizontale $y = 2$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le quotient tend vers $a = 2 \\ne 0$ mais l’écart $f(x) - 2x$ tend vers $+\\infty$ (pas de limite finie $b$) : c’est une branche parabolique de direction la droite $y = 2x$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice résolu Tle C',
    stepTheme: 'slate',
    stepTitle: 'Étude aux bornes de $f(x) = \\sqrt{x^2 + x + 1} - x$',
    paragraphText:
      'Pour $x > 0$, on factorise $\\sqrt{x^2 + x + 1} = x\\sqrt{1 + \\frac{1}{x} + \\frac{1}{x^2}}$. En $+\\infty$, par expression conjuguée : $f(x) = \\frac{x + 1}{\\sqrt{x^2 + x + 1} + x} = \\frac{1 + \\frac{1}{x}}{\\sqrt{1 + \\frac{1}{x} + \\frac{1}{x^2}} + 1} \\to \\frac{1}{2}$. Donc la droite $y = \\frac{1}{2}$ est asymptote horizontale en $+\\infty$ !',
    formula: {
      name: 'Limite en +∞',
      formula: '\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2 + x + 1} - x\\right) = \\frac{1}{2}',
    },
    exercise: {
      id: 'tc_m_num_l01_p03_q04',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to +\\infty} \\left(\\sqrt{x^2 + 6x + 2} - x\\right)$ ?',
      options: ['$0$', '$3$', '$6$', '$+\\infty$'],
      correctAnswerIndex: 1,
      explanation: 'Par conjuguée : $\\frac{6x + 2}{\\sqrt{x^2 + 6x + 2} + x} = \\frac{6 + 2/x}{\\sqrt{1 + 6/x + 2/x^2} + 1} \\xrightarrow[x \\to +\\infty]{} \\frac{6}{2} = 3$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège majeur en −∞',
    stepTheme: 'orange',
    stepTitle: 'Extraire $\\sqrt{x^2} = |x| = -x$ quand $x < 0$',
    paragraphText:
      'En $-\\infty$ pour $f(x) = \\sqrt{x^2 + x + 1} - x$, on a $\\sqrt{x^2} = -x > 0$. Ainsi $\\frac{f(x)}{x} = \\frac{-x\\sqrt{1+\\frac{1}{x}+\\frac{1}{x^2}} - x}{x} = -\\sqrt{1+\\frac{1}{x}+\\frac{1}{x^2}} - 1 \\to -2$. Ensuite $f(x) - (-2x) = \\sqrt{x^2 + x + 1} + x = \\frac{x + 1}{\\sqrt{x^2 + x + 1} - x} \\to \\frac{1}{-1 - 1} = -\\frac{1}{2}$. En $-\\infty$, la droite $y = -2x - \\frac{1}{2}$ est asymptote oblique !',
    keyRule: 'Toujours écrire $\\sqrt{x^2} = |x|$ avant de remplacer par $x$ (si $x > 0$) ou par $-x$ (si $x < 0$).',
    exercise: {
      id: 'tc_m_num_l01_p03_q05',
      type: 'mcq',
      prompt: 'Pour $f(x) = \\sqrt{x^2 + x + 1} - x$, quelle droite est asymptote à $(C_f)$ en $-\\infty$ ?',
      options: [
        '$y = \\frac{1}{2}$',
        '$y = -2x + \\frac{1}{2}$',
        '$y = -2x - \\frac{1}{2}$',
        '$y = 2x - \\frac{1}{2}$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\lim_{x \\to -\\infty} \\frac{f(x)}{x} = -2$ et $\\lim_{x \\to -\\infty} (f(x) + 2x) = \\lim_{x \\to -\\infty} \\frac{x+1}{-x\\sqrt{1+\\dots}-x} = -\\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Position relative',
    stepTheme: 'green',
    stepTitle: 'Étudier la position de $(C_f)$ par rapport à son asymptote',
    paragraphText:
      'Pour savoir si $(C_f)$ est au-dessus ou au-dessous de l’asymptote $(D) : y = ax + b$, on étudie le signe de la différence $d(x) = f(x) - (ax + b)$. Par exemple, pour $f(x) = \\sqrt{x^2 + x + 1} - x$, on vérifie que $f(x) - \\left(-2x - \\frac{1}{2}\\right) = \\sqrt{\\left(x + \\frac{1}{2}\\right)^2 + \\frac{3}{4}} + x + \\frac{1}{2} > \\left|x + \\frac{1}{2}\\right| + x + \\frac{1}{2} \\geqslant 0$ : la courbe est strictement au-dessus de son asymptote oblique sur $\\mathbb{R}$.',
    formula: {
      name: 'Signe de l’écart',
      formula: 'f(x) - (ax + b) > 0 \\implies (C_f) \\text{ au-dessus de } (D)',
    },
    exercise: {
      id: 'tc_m_num_l01_p03_q06',
      type: 'mcq',
      prompt: 'Si $f(x) = 2x + 1 - \\frac{3}{x^2 + 1}$, quelle est la position de $(C_f)$ par rapport à son asymptote oblique $y = 2x + 1$ ?',
      options: [
        '$(C_f)$ est strictement au-dessus de l’asymptote sur $\\mathbb{R}$',
        '$(C_f)$ est strictement au-dessous de l’asymptote sur $\\mathbb{R}$',
        '$(C_f)$ coupe l’asymptote en $x = 0$',
        'On ne peut pas conclure',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(x) - (2x + 1) = -\\frac{3}{x^2 + 1} < 0$ pour tout $x \\in \\mathbb{R}$, donc $(C_f)$ est strictement au-dessous de la droite $y = 2x + 1$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Récapitulatif',
    stepTheme: 'slate',
    stepTitle: 'Arbre de décision complet en $\\pm\\infty$',
    paragraphText:
      'Face à $\\pm\\infty$ : 1) Calculer $\\lim f(x)$. Si elle est finie $b$, $y=b$ est asymptote horizontale. 2) Si elle est infinie, calculer $\\lim \\frac{f(x)}{x}$. 3) Si $0$ : branche parabolique dir. $(OI)$ ; si $\\pm\\infty$ : dir. $(OJ)$ ; si $a \\in \\mathbb{R}^*$, calculer $\\lim (f(x) - ax)$. 4) Si finie $b$, $y = ax + b$ est asymptote oblique ; si infinie, branche parabolique de direction $y = ax$.',
    exercise: {
      id: 'tc_m_num_l01_p03_q07',
      type: 'mcq',
      prompt: 'Lorsque $\\lim_{x \\to +\\infty} [f(x) - (3x - 4)] = 0$, que peut-on affirmer sans autre calcul ?',
      options: [
        '$y = 3x - 4$ est asymptote oblique en $+\\infty$',
        '$x = 4/3$ est asymptote verticale',
        '$f$ admet une branche parabolique de direction $(OI)$',
        '$f(x) = 3x - 4$ pour tout $x > 0$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Par définition directe, $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$ équivaut au fait que $y = ax + b$ est asymptote oblique à $(C_f)$ en $\\pm\\infty$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Continuité en un point $a$, à gauche et à droite',
    paragraphText:
      'Soit $f$ définie sur un intervalle ouvert $I$ contenant $a$. On dit que $f$ est continue en $a$ lorsque $\\lim_{x \\to a} f(x) = f(a)$. Cela équivaut à avoir simultanément la continuité à gauche et la continuité à droite : $\\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)$.',
    formula: {
      name: 'Critère de continuité en a',
      formula: 'f \\text{ continue en } a \\iff \\lim_{x \\to a^-} f(x) = \\lim_{x \\to a^+} f(x) = f(a)',
    },
    exercise: {
      id: 'tc_m_num_l01_p04_q01',
      type: 'mcq',
      prompt: 'Soit $f(x) = \\begin{cases} x^2 + 1 & \\text{si } x < 2 \\\\ 3x - 1 & \\text{si } x \\geqslant 2 \\end{cases}$. $f$ est-elle continue en $2$ ?',
      options: [
        'Oui, car les limites à gauche et à droite valent toutes deux $5 = f(2)$',
        'Non, car $x^2 + 1$ et $3x - 1$ n’ont pas la même dérivée en $2$',
        'Non, car $\\lim_{2^-} f = 4 \\ne 5$',
        'Oui à gauche seulement',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\lim_{x \\to 2^-} f(x) = 2^2 + 1 = 5$ et $\\lim_{x \\to 2^+} f(x) = 3(2) - 1 = 5 = f(2)$. Les trois valeurs coïncident, donc $f$ est continue en $2$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Opérations',
    stepTheme: 'violet',
    stepTitle: 'Continuité sur un intervalle et opérations algébriques',
    paragraphText:
      'Une fonction est continue sur un intervalle $I$ si elle est continue en tout point de $I$ (à droite aux bornes fermées à gauche, à gauche aux bornes fermées à droite). Les fonctions polynômes, rationnelles (sur leur ensemble de définition), trigonométriques ($\\sin, \\cos$ sur $\\mathbb{R}$) et $\\sqrt{\\cdot}$ sur $[0 ; +\\infty[$ sont continues. Si $f$ et $g$ sont continues sur $I$, alors $f+g$, $kf$, $fg$, $f^n$ ($n \\in \\mathbb{N}^*$), $|f|$, $\\frac{f}{g}$ (si $g \\ne 0$) et $\\sqrt{f}$ (si $f \\geqslant 0$) sont continues sur $I$.',
    keyRule: 'Une fonction dérivable sur $I$ est toujours continue sur $I$ (la réciproque est fausse, ex. $|x|$ en $0$).',
    exercise: {
      id: 'tc_m_num_l01_p04_q02',
      type: 'mcq',
      prompt: 'Sur quel plus grand ensemble la fonction $h(x) = \\sqrt{x^2 - 4}$ est-elle continue ?',
      options: ['$[2 ; +\\infty[$', '$]-\\infty ; -2] \\cup [2 ; +\\infty[$', '$\\mathbb{R}$', '$]-2 ; 2[$'],
      correctAnswerIndex: 1,
      explanation: '$x \\mapsto x^2 - 4$ est continue et positive sur $]-\\infty ; -2] \\cup [2 ; +\\infty[$, donc $\\sqrt{x^2 - 4}$ est continue sur chacun de ces deux intervalles.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Composition',
    stepTheme: 'violet',
    stepTitle: 'Continuité d’une fonction composée',
    paragraphText:
      'Si $f$ est continue sur un intervalle $I$ et si $g$ est continue sur un intervalle $J$ contenant $f(I)$ (ou ponctuellement : $f$ continue en $a$ et $g$ continue en $f(a)$), alors la fonction composée $g \\circ f$ est continue sur $I$ (respectivement en $a$).',
    formula: {
      name: 'Composée de fonctions continues',
      formula: 'f \\text{ continue en } a \\text{ et } g \\text{ continue en } f(a) \\implies g \\circ f \\text{ continue en } a',
    },
    exercise: {
      id: 'tc_m_num_l01_p04_q03',
      type: 'mcq',
      prompt: 'Pourquoi la fonction $x \\mapsto \\cos\\left(\\frac{1}{x^2 + 1}\\right)$ est-elle continue sur $\\mathbb{R}$ ?',
      options: [
        'Car $-1 \\leqslant \\cos X \\leqslant 1$',
        'Car $x \\mapsto \\frac{1}{x^2+1}$ est continue sur $\\mathbb{R}$ et $\\cos$ est continue sur $\\mathbb{R}$',
        'Car $x^2 + 1$ s’annule en $0$',
        'Car $\\cos$ est dérivable uniquement sur $[0 ; \\pi]$',
      ],
      correctAnswerIndex: 1,
      explanation: 'C’est la composée de deux fonctions continues sur $\\mathbb{R}$ (le dénominateur $x^2 + 1 \\geqslant 1$ ne s’annule jamais).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Partie entière',
    stepTheme: 'blue',
    stepTitle: 'Rappel sur la fonction partie entière $E(x)$',
    paragraphText:
      'Pour tout réel $x$, la partie entière $E(x)$ (notée aussi $\\lfloor x \\rfloor$) est l’unique entier relatif tel que $E(x) \\leqslant x < E(x) + 1$. Sur chaque intervalle $[n ; n+1[$ ($n \\in \\mathbb{Z}$), $E(x) = n$ est constante, donc continue sur $]n ; n+1[$, mais discontinue en chaque entier $n$ car $\\lim_{x \\to n^-} E(x) = n - 1 \\ne n = \\lim_{x \\to n^+} E(x)$.',
    formula: {
      name: 'Encadrement de E(x)',
      formula: '\\forall x \\in \\mathbb{R},\\; E(x) \\in \\mathbb{Z} \\text{ et } E(x) \\leqslant x < E(x) + 1',
    },
    exercise: {
      id: 'tc_m_num_l01_p04_q04',
      type: 'mcq',
      prompt: 'Que vaut $E(-2{,}3)$ ?',
      options: ['$-2$', '$-3$', '$2$', '$-2{,}3$'],
      correctAnswerIndex: 1,
      explanation: 'On cherche le plus grand entier inférieur ou égal à $-2{,}3$ : comme $-3 \\leqslant -2{,}3 < -2$, on a $E(-2{,}3) = -3$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Classique Tle C',
    stepTheme: 'slate',
    stepTitle: 'Continuité de $k(x) = E(x) + (x - E(x))^2$ sur $\\mathbb{R}$',
    paragraphText:
      'Sur chaque intervalle $]n ; n+1[$ ($n \\in \\mathbb{Z}$), $k(x) = n + (x - n)^2$ est polynômiale donc continue. Étudions en un entier $n \\in \\mathbb{Z}$ : si $x \\in [n ; n+1[$, $E(x) = n$, donc $k(n) = n + 0 = n$ et $\\lim_{x \\to n^+} k(x) = n + (n-n)^2 = n$. Si $x \\in [n-1 ; n[$, $E(x) = n - 1$, donc $\\lim_{x \\to n^-} k(x) = (n - 1) + (n - (n-1))^2 = (n - 1) + 1^2 = n$. Les limites à gauche et à droite valent $k(n) = n$ : $k$ est continue en tout entier $n$, donc continue sur $\\mathbb{R}$ tout entier !',
    visualSchema: {
      type: 'function_plot',
      title: 'Courbe de k(x) = E(x) + (x - E(x))²',
      caption: 'Raccordement continu en chaque entier x = -1, 0, 1, 2',
      plot: {
        xMin: -1,
        xMax: 3,
        yMin: -1,
        yMax: 3,
        xStep: 1,
        yStep: 1,
        curves: [
          {
            label: 'k(x)',
            color: 'violet',
            pieces: [
              { expr: '-1 + (x + 1)^2', from: -1, to: 0 },
              { expr: 'x^2', from: 0, to: 1 },
              { expr: '1 + (x - 1)^2', from: 1, to: 2 },
              { expr: '2 + (x - 2)^2', from: 2, to: 3 },
            ],
          },
        ],
        points: [
          { x: 0, y: 0, filled: true, color: 'violet' },
          { x: 1, y: 1, filled: true, color: 'violet' },
          { x: 2, y: 2, filled: true, color: 'violet' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l01_p04_q05',
      type: 'mcq',
      prompt: 'Pour $k(x) = E(x) + (x - E(x))^2$, quelle est l’expression de $k(x)$ sur $[2 ; 3[$ ?',
      options: ['$2 + x^2$', '$2 + (x - 2)^2$', '$3 + (x - 3)^2$', '$1 + (x - 1)^2$'],
      correctAnswerIndex: 1,
      explanation: 'Sur $[2 ; 3[$, $E(x) = 2$, d’où $k(x) = 2 + (x - 2)^2$. En $x \\to 3^-$, $k(x) \\to 2 + 1^2 = 3 = k(3)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur fréquente',
    stepTheme: 'orange',
    stepTitle: 'Attention : $\\lim_{x \\to n^-} E(x) = n - 1$, pas $n$',
    paragraphText:
      'Quand $x$ approche un entier $n$ par valeurs inférieures ($n - 0{,}001$), $x$ appartient à l’intervalle $[n - 1 ; n[$, donc $E(x) = n - 1$. De plus, $x - E(x)$ (la partie fractionnaire de $x$) tend alors vers $n - (n - 1) = 1$, alors qu’à droite ($x \\to n^+$), $E(x) = n$ et $x - E(x) \\to 0$.',
    exercise: {
      id: 'tc_m_num_l01_p04_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 4^-} \\bigl(x - E(x)\\bigr)$ ?',
      options: ['$0$', '$1$', '$3$', '$4$'],
      correctAnswerIndex: 1,
      explanation: 'Pour $x \\in [3 ; 4[$, $E(x) = 3$, donc $x - E(x) = x - 3 \\xrightarrow[x \\to 4^-]{} 4 - 3 = 1$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Raccordement paramétrique',
    stepTheme: 'green',
    stepTitle: 'Déterminer un paramètre pour assurer la continuité',
    paragraphText:
      'Lorsqu’une fonction définie par morceaux contient un paramètre réel $m$, on calcule $\\lim_{x \\to a^-} f(x)$, $\\lim_{x \\to a^+} f(x)$ et $f(a)$, puis on résout l’égalité $\\lim_{a^-} f = \\lim_{a^+} f = f(a)$ pour trouver $m$.',
    exercise: {
      id: 'tc_m_num_l01_p04_q07',
      type: 'mcq',
      prompt: 'Pour quelle valeur de $m$ la fonction $f(x) = \\begin{cases} 2x + m & \\text{si } x < 1 \\\\ x^2 + 3 & \\text{si } x \\geqslant 1 \\end{cases}$ est-elle continue en $1$ ?',
      options: ['$m = 1$', '$m = 2$', '$m = 3$', '$m = 4$'],
      correctAnswerIndex: 1,
      explanation: 'En $1^+$, $\\lim f = f(1) = 1^2 + 3 = 4$. En $1^-$, $\\lim f = 2(1) + m = 2 + m$. L’égalité $2 + m = 4$ donne $m = 2$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Principe du prolongement par continuité',
    paragraphText:
      'Soit $f$ une fonction définie sur un ensemble $D_f$ ne contenant pas un réel $a$, mais définie sur un voisinage ouvert de $a$ (sauf en $a$). Si $\\lim_{x \\to a} f(x) = \\ell$ où $\\ell \\in \\mathbb{R}$ est un nombre fini, on dit que $f$ est prolongeable par continuité en $a$. Son prolongement par continuité en $a$ est la fonction $g$ définie sur $D_f \\cup \\{a\\}$ par $g(x) = f(x)$ si $x \\in D_f$ et $g(a) = \\ell$.',
    formula: {
      name: 'Prolongement g en a',
      formula: 'g(x) = \\begin{cases} f(x) & \\text{si } x \\in D_f \\\\ \\ell = \\lim_{x \\to a} f(x) & \\text{si } x = a \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l01_p05_q01',
      type: 'mcq',
      prompt: 'À quelle condition une fonction $f$ non définie en $a$ est-elle prolongeable par continuité en $a$ ?',
      options: [
        'Si $f$ est dérivable en $a$',
        'Si $\\lim_{x \\to a} f(x)$ existe et est un nombre réel fini $\\ell$',
        'Si $\\lim_{x \\to a} f(x) = +\\infty$',
        'Si $a$ est racine du numérateur de $f$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Il faut impérativement que la limite $\\lim_{x \\to a} f(x)$ existe (donc limite à gauche = limite à droite) et soit finie ($\\ell \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Exemple de référence',
    stepTheme: 'slate',
    stepTitle: 'Prolongement de $f(x) = \\frac{\\sin x}{x}$ en $0$',
    paragraphText:
      'La fonction $f(x) = \\frac{\\sin x}{x}$ est définie sur $\\mathbb{R}^*$ ($0 \\notin D_f$). Or $\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1 \\in \\mathbb{R}$. Elle est donc prolongeable par continuité en $0$ par la fonction $g$ définie sur $\\mathbb{R}$ par $g(x) = \\frac{\\sin x}{x}$ si $x \\ne 0$ et $g(0) = 1$.',
    exercise: {
      id: 'tc_m_num_l01_p05_q02',
      type: 'mcq',
      prompt: 'Pour prolonger $f(x) = \\frac{\\sin(3x)}{x}$ par continuité en $0$, quelle valeur doit prendre $g(0)$ ?',
      options: ['$0$', '$1$', '$3$', '$\\frac{1}{3}$'],
      correctAnswerIndex: 2,
      explanation: '$\\lim_{x \\to 0} \\frac{\\sin(3x)}{x} = 3$, donc le prolongement par continuité vérifie $g(0) = 3$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Cas avec radical',
    stepTheme: 'slate',
    stepTitle: 'Prolongement de $f(x) = \\frac{x - 9}{\\sqrt{x - 5} - 2}$ en $x = 9$',
    paragraphText:
      'Ici $D_f = [5 ; 9[ \\cup ]9 ; +\\infty[$, donc $9 \\notin D_f$. Pour lever la forme indéterminée $\\frac{0}{0}$ en $x = 9$, on multiplie numérateur et dénominateur par l’expression conjuguée $\\sqrt{x - 5} + 2$ : $f(x) = \\frac{(x - 9)(\\sqrt{x - 5} + 2)}{(x - 5) - 4} = \\sqrt{x - 5} + 2$ pour $x \\ne 9$. Donc $\\lim_{x \\to 9} f(x) = \\sqrt{4} + 2 = 4$. Son prolongement sur $[5 ; +\\infty[$ est $g(x) = \\sqrt{x - 5} + 2$.',
    formula: {
      name: 'Simplification après conjuguée',
      formula: '\\frac{x - 9}{\\sqrt{x - 5} - 2} = \\sqrt{x - 5} + 2 \\xrightarrow[x \\to 9]{} 4',
    },
    exercise: {
      id: 'tc_m_num_l01_p05_q03',
      type: 'mcq',
      prompt: 'La fonction $h(x) = \\frac{x - 4}{\\sqrt{x} - 2}$ ($x \\ne 4$) est prolongeable par continuité en $4$ avec $g(4) = $',
      options: ['$0$', '$2$', '$4$', '$8$'],
      correctAnswerIndex: 2,
      explanation: '$x - 4 = (\\sqrt{x} - 2)(\\sqrt{x} + 2)$, donc $h(x) = \\sqrt{x} + 2 \\xrightarrow[x \\to 4]{} 2 + 2 = 4$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Contre-exemple fondamental',
    stepTheme: 'orange',
    stepTitle: 'Quand le prolongement est impossible : $\\frac{x^2 + x}{x^2 - |x|}$ en $0$',
    paragraphText:
      'Soit $u(x) = \\frac{x^2 + x}{x^2 - |x|}$ définie pour $x \\notin \\{-1 ; 0 ; 1\\}$. En $0^+$ ($x > 0$), $u(x) = \\frac{x(x+1)}{x(x-1)} = \\frac{x+1}{x-1} \\to -1$. En $0^-$ ($x < 0$), $|x| = -x$, donc $u(x) = \\frac{x(x+1)}{x(x+1)} = 1 \\to 1$. Comme $\\lim_{0^-} u = 1 \\ne -1 = \\lim_{0^+} u$, $u$ n’a pas de limite en $0$ et n’est donc pas prolongeable par continuité en $0$.',
    keyRule: 'Toujours calculer séparément les limites à gauche et à droite lorsque la fonction comporte une valeur absolue $|x|$ ou un changement d’écriture.',
    exercise: {
      id: 'tc_m_num_l01_p05_q04',
      type: 'mcq',
      prompt: 'La fonction $v(x) = \\frac{|x|}{x}$ ($x \\ne 0$) est-elle prolongeable par continuité en $0$ ?',
      options: [
        'Oui, avec $g(0) = 0$',
        'Oui, avec $g(0) = 1$',
        'Non, car $\\lim_{0^-} v(x) = -1$ et $\\lim_{0^+} v(x) = 1$',
        'Oui, car $\\lim_{0} |x| = 0$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Les limites à gauche ($-1$) et à droite ($+1$) sont différentes, donc $v$ n’admet pas de limite en $0$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Méthode en 3 étapes',
    stepTheme: 'green',
    stepTitle: 'Rédiger un prolongement par continuité au Bac',
    paragraphText:
      '1) Préciser le domaine de définition $D_f$ et constater que $a \\notin D_f$ mais $a$ est adhérent à $D_f$. 2) Calculer $\\lim_{x \\to a} f(x)$ (en distinguant $a^-$ et $a^+$ si besoin). 3) Si la limite est un réel $\\ell$, conclure que $f$ est prolongeable par continuité en $a$ et écrire explicitement la définition de la fonction prolongée $g$ sur $D_f \\cup \\{a\\}$.',
    exercise: {
      id: 'tc_m_num_l01_p05_q05',
      type: 'mcq',
      prompt: 'Soit $f(x) = \\frac{x^2 - 9}{x - 3}$ pour $x \\ne 3$. Quel est son prolongement par continuité $g$ sur $\\mathbb{R}$ ?',
      options: [
        '$g(x) = x + 3$ pour tout $x \\in \\mathbb{R}$',
        '$g(x) = x - 3$ pour tout $x \\in \\mathbb{R}$',
        '$g(x) = \\frac{1}{x+3}$',
        '$f$ n’est pas prolongeable en $3$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Pour $x \\ne 3$, $f(x) = x + 3 \\xrightarrow[x \\to 3]{} 6$, et $g(3) = 6 = 3 + 3$, donc $g(x) = x + 3$ sur tout $\\mathbb{R}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Limite infinie',
    stepTheme: 'orange',
    stepTitle: 'Une limite infinie exclut le prolongement par continuité',
    paragraphText:
      'Pour $f(x) = \\frac{1}{x^2}$, les limites à gauche et à droite en $0$ sont égales ($+\\infty = +\\infty$). Pourtant $f$ n’est PAS prolongeable par continuité en $0$, car $+\\infty$ n’est pas un nombre réel ! Un prolongement continu en $a$ exige une valeur finie $g(a) \\in \\mathbb{R}$.',
    exercise: {
      id: 'tc_m_num_l01_p05_q06',
      type: 'mcq',
      prompt: 'La fonction $f(x) = \\frac{x + 2}{x^2}$ ($x \\ne 0$) est-elle prolongeable par continuité en $0$ ?',
      options: [
        'Oui, car $\\lim_{0^-} f = \\lim_{0^+} f = +\\infty$',
        'Non, car la limite en $0$ n’est pas un nombre réel fini',
        'Oui, avec $g(0) = 2$',
        'Non, car le numérateur ne s’annule pas en $-2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'La limite en $0$ vaut $+\\infty \\notin \\mathbb{R}$ : aucun réel ne peut jouer le rôle de $g(0)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Exercice mixte',
    stepTheme: 'slate',
    stepTitle: 'Vérifier l’unicité du prolongement par continuité',
    paragraphText:
      'S’il existe, le prolongement par continuité en $a$ est unique car la valeur $g(a)$ doit nécessairement être égale à $\\lim_{x \\to a} f(x)$. Par exemple, pour $f(x) = x \\sin\\left(\\frac{1}{x}\\right)$ ($x \\ne 0$), on a $-|x| \\leqslant x\\sin(\\frac{1}{x}) \\leqslant |x| \\to 0$, donc l’unique prolongement en $0$ vérifie $g(0) = 0$.',
    exercise: {
      id: 'tc_m_num_l01_p05_q07',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 0} x^2 \\cos\\left(\\frac{1}{x}\\right)$ pour prolonger cette fonction par continuité en $0$ ?',
      options: ['$1$', '$0$', '$-1$', 'N’existe pas'],
      correctAnswerIndex: 1,
      explanation: 'Comme $|\\cos(1/x)| \\leqslant 1$, on a $-x^2 \\leqslant x^2\\cos(1/x) \\leqslant x^2 \\xrightarrow[x \\to 0]{} 0$. Par encadrement, la limite est $0$.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Image d’un intervalle',
    stepTheme: 'violet',
    stepTitle: 'Image d’un intervalle par une fonction continue',
    paragraphText:
      'Par une fonction continue sur un intervalle $I$, l’image $f(I)$ est toujours un intervalle (pas de « trou »). En particulier, l’image d’un intervalle fermé borné $[a ; b]$ est un intervalle fermé borné $[m ; M]$ où $m$ et $M$ sont le minimum et le maximum atteints par $f$ sur $[a ; b]$.',
    formula: {
      name: 'Conservation des intervalles',
      formula: 'f \\text{ continue sur } [a ; b] \\implies f([a ; b]) = [m ; M]',
    },
    exercise: {
      id: 'tc_m_num_l01_p06_q01',
      type: 'mcq',
      prompt: 'Soit $f(x) = x^2$ sur $I = [-1 ; 2]$. Quel est l’intervalle image $f(I)$ ?',
      options: ['$[1 ; 4]$', '$[0 ; 4]$', '$[0 ; 1]$', '$[-1 ; 4]$'],
      correctAnswerIndex: 1,
      explanation: 'Sur $[-1 ; 2]$, $f$ n’est pas monotone : son minimum est $f(0) = 0$ et son maximum est $f(2) = 4$, donc $f([-1 ; 2]) = [0 ; 4]$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Tableau de correspondance',
    stepTheme: 'green',
    stepTitle: 'Image d’un intervalle par une fonction continue et monotone',
    paragraphText:
      'Lorsque $f$ est continue et strictement croissante sur un intervalle, elle conserve l’ordre des bornes (avec limites aux bornes ouvertes ou infinies) : $f([a ; b]) = [f(a) ; f(b)]$, $f([a ; b[) = [f(a) ; \\lim_{b^-} f[$, $f(]a ; +\\infty[) = ]\\lim_{a^+} f ; \\lim_{+\\infty} f[$. Si $f$ est strictement décroissante, l’ordre des bornes est inversé.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Images des principaux types d’intervalles (f continue)',
      tableData: {
        headers: ['Intervalle I', 'f strict. croissante', 'f strict. décroissante'],
        rows: [
          ['[a ; b]', '[f(a) ; f(b)]', '[f(b) ; f(a)]'],
          ['[a ; b[', '[f(a) ; lim_{b^-} f[', ']lim_{b^-} f ; f(a)]'],
          [']a ; b]', ']lim_{a^+} f ; f(b)]', '[f(b) ; lim_{a^+} f['],
          ['[a ; +∞[', '[f(a) ; lim_{+∞} f[', ']lim_{+∞} f ; f(a)]'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l01_p06_q02',
      type: 'mcq',
      prompt: 'Soit $f$ continue et strictement décroissante sur $]-\\infty ; 2]$ telle que $\\lim_{-\\infty} f = +\\infty$ et $f(2) = -3$. Que vaut $f(]-\\infty ; 2])$ ?',
      options: ['$]-\\infty ; -3]$', '$[-3 ; +\\infty[$', '$]-3 ; +\\infty[$', '$]-\\infty ; 2]$'],
      correctAnswerIndex: 1,
      explanation: 'Comme $f$ est strictement décroissante, la borne fermée $2$ devient la borne inférieure fermée $f(2) = -3$, et la borne ouverte $-\\infty$ devient $+\\infty$ ouvert : $[-3 ; +\\infty[$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'TVI',
    stepTheme: 'violet',
    stepTitle: 'Théorème des valeurs intermédiaires (TVI)',
    paragraphText:
      'Si $f$ est continue sur un intervalle $I$ contenant $a$ et $b$, alors pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe au moins un réel $c$ compris entre $a$ et $b$ tel que $f(c) = k$. En particulier (corollaire 1), si $f(a)$ et $f(b)$ sont de signes contraires ($f(a)\\cdot f(b) < 0$), l’équation $f(x) = 0$ admet au moins une solution dans $]a ; b[$.',
    formula: {
      name: 'Corollaire d’existence et d’unicité (Corollaire 2)',
      formula: 'f \\text{ continue, strictement monotone sur } [a ; b] \\text{ et } f(a)\\cdot f(b) < 0 \\implies \\exists !\\, \\alpha \\in ]a ; b[,\\; f(\\alpha) = 0',
    },
    exercise: {
      id: 'tc_m_num_l01_p06_q03',
      type: 'mcq',
      prompt: 'Quelles sont les conditions suffisantes pour qu’une équation $f(x) = k$ admette une UNIQUE solution sur $[a ; b]$ ?',
      options: [
        '$f$ continue sur $[a ; b]$ et $k$ entre $f(a)$ et $f(b)$',
        '$f$ dérivable et positive sur $[a ; b]$',
        '$f$ continue, strictement monotone sur $[a ; b]$ et $k$ compris entre $f(a)$ et $f(b)$',
        '$f(a) \\cdot f(b) > 0$ et $f$ croissante',
      ],
      correctAnswerIndex: 2,
      explanation: 'La continuité + l’encadrement de $k$ donnent l’existence (au moins une solution) ; la stricte monotonie garantit l’unicité.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Équation algébrique',
    stepTheme: 'slate',
    stepTitle: 'Existence et unicité de la racine de $2x^3 + 3x - 1 = 0$',
    paragraphText:
      'Posons $f(x) = 2x^3 + 3x - 1$ sur $\\mathbb{R}$. $f$ est dérivable et $f’(x) = 6x^2 + 3 > 0$, donc $f$ est continue et strictement croissante sur $\\mathbb{R}$. De plus, $f(0) = -1 < 0$ et $f(1) = 4 > 0$. Comme $0 \\in ]f(0) ; f(1)[$, il existe un unique réel $\\alpha \\in ]0 ; 1[$ tel que $f(\\alpha) = 0$ (et même sur tout $\\mathbb{R}$ car $\\lim_{-\\infty} f = -\\infty$ et $\\lim_{+\\infty} f = +\\infty$).',
    exercise: {
      id: 'tc_m_num_l01_p06_q04',
      type: 'mcq',
      prompt: 'Pour $f(x) = 2x^3 + 3x - 1$, $f(0) = -1$ et $f(1) = 4$. Calculons $f(0{,}3) = 2(0{,}027) + 0{,}9 - 1 = -0{,}046$ et $f(0{,}4) = 0{,}328$. Où se situe $\\alpha$ ?',
      options: [
        '$\\alpha \\in ]0 ; 0{,}3[$',
        '$\\alpha \\in ]0{,}3 ; 0{,}4[$',
        '$\\alpha \\in ]0{,}4 ; 1[$',
        '$\\alpha = 0{,}3$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $f(0{,}3) = -0{,}046 < 0$ et $f(0{,}4) = 0{,}328 > 0$, par stricte croissance et continuité, $0{,}3 < \\alpha < 0{,}4$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Méthode 1 : Balayage',
    stepTheme: 'green',
    stepTitle: 'Encadrer une racine à $10^{-p}$ près par balayage',
    paragraphText:
      'Pour encadrer $\\alpha \\in ]a ; b[$ à $10^{-1}$ près par balayage, on calcule $f(x)$ avec un pas de $0{,}1$ ($a, a+0{,}1, a+0{,}2, \\dots$) jusqu’au premier changement de signe : si $f(x_k) \\cdot f(x_{k+1}) < 0$, alors $x_k < \\alpha < x_{k+1}$ d’amplitude $0{,}1$. Pour $2x^3 + 3x - 1 = 0$, $f(0{,}3) = -0{,}046 < 0$ et $f(0{,}4) = 0{,}328 > 0$, donc $0{,}3 < \\alpha < 0{,}4$. Pour affiner à $10^{-2}$, on balaie $[0{,}3 ; 0{,}4]$ avec un pas de $0{,}01$ ($f(0{,}31) \\approx -0{,}010$, $f(0{,}32) \\approx 0{,}025$).',
    konanTip: 'Le balayage procède pas à pas à largeur fixe ($0{,}1$, puis $0{,}01$), tandis que la dichotomie divise l’intervalle en $2$ à chaque étape.',
    exercise: {
      id: 'tc_m_num_l01_p06_q05',
      type: 'mcq',
      prompt: 'Sachant que $f$ est croissante avec $f(0{,}31) < 0$ et $f(0{,}32) > 0$, quelle est l’amplitude de l’encadrement $0{,}31 < \\alpha < 0{,}32$ ?',
      options: ['$10^{-1}$', '$10^{-2}$', '$2 \\times 10^{-2}$', '$10^{-3}$'],
      correctAnswerIndex: 1,
      explanation: '$0{,}32 - 0{,}31 = 0{,}01 = 10^{-2}$ : c’est un encadrement à $10^{-2}$ près.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Méthode 2 : Dichotomie',
    stepTheme: 'green',
    stepTitle: 'Encadrer une racine par dichotomie (division par $2$)',
    paragraphText:
      'En partant de $[a_0 ; b_0]$ où $f(a_0)f(b_0) < 0$, on calcule le milieu $c = \\frac{a_0 + b_0}{2}$ puis le signe de $f(c)$. Si $f(a_0)f(c) < 0$, on garde $[a_0 ; c]$ ; sinon on garde $[c ; b_0]$. Après $n$ itérations, l’amplitude vaut $\\frac{b_0 - a_0}{2^n}$. Sur $2x^3 + 3x - 1 = 0$ avec $[0 ; 1]$ : milieu $0{,}5$ ($f(0{,}5) = 0{,}75 > 0$) $\\implies [0 ; 0{,}5]$ ; milieu $0{,}25$ ($f(0{,}25) = -0{,}219 < 0$) $\\implies [0{,}25 ; 0{,}5]$ ; milieu $0{,}375$ ($f(0{,}375) > 0$) $\\implies [0{,}25 ; 0{,}375]$ (amplitude $0{,}125$).',
    formula: {
      name: 'Amplitude après n pas de dichotomie',
      formula: 'b_n - a_n = \\frac{b_0 - a_0}{2^n}',
    },
    exercise: {
      id: 'tc_m_num_l01_p06_q06',
      type: 'mcq',
      prompt: 'À partir de $[0 ; 1]$, combien d’étapes de dichotomie faut-il au minimum pour obtenir un encadrement d’amplitude inférieure ou égale à $0{,}1$ ?',
      options: ['$2$ étapes', '$3$ étapes', '$4$ étapes', '$10$ étapes'],
      correctAnswerIndex: 2,
      explanation: '$\\frac{1}{2^3} = 0{,}125 > 0{,}1$, alors que $\\frac{1}{2^4} = \\frac{1}{16} = 0{,}0625 \\leqslant 0{,}1$. Il faut donc $4$ étapes.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur classique',
    stepTheme: 'orange',
    stepTitle: 'Vérifier le signe d’une fonction continue à partir d’une racine unique',
    paragraphText:
      'Quand une fonction $f$ continue et strictement croissante s’annule uniquement en $\\alpha$ sur un intervalle $I$, on en déduit aussitôt son signe sur $I$ : pour $x < \\alpha$, $f(x) < f(\\alpha) = 0$, et pour $x > \\alpha$, $f(x) > 0$. Ce résultat sert très souvent en Terminale C pour étudier une fonction auxiliaire $g$ dont le signe donne celui de $f’(x)$ !',
    exercise: {
      id: 'tc_m_num_l01_p06_q07',
      type: 'mcq',
      prompt: 'Si $g$ est strictement décroissante sur $[0 ; +\\infty[$ et s’annule en $\\alpha > 0$, quel est le signe de $g(x)$ pour $x \\in [0 ; \\alpha[$ ?',
      options: [
        '$g(x) < 0$',
        '$g(x) > 0$',
        '$g(x) = 0$',
        'On ne peut pas le savoir sans $g(0)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Puisque $g$ est strictement décroissante, $x < \\alpha \\implies g(x) > g(\\alpha) = 0$.',
    },
  },
];

const p07Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Qu’est-ce qu’une bijection de $I$ sur $J$ ?',
    paragraphText:
      'Une fonction $f : I \\to J$ est une bijection de $I$ sur $J$ si pour tout $y \\in J$, l’équation $f(x) = y$ admet une unique solution $x \\in I$. On définit alors la bijection réciproque $f^{-1} : J \\to I$ qui à tout $y \\in J$ associe cet unique antécédent $x = f^{-1}(y)$.',
    formula: {
      name: 'Équivalence de la réciproque',
      formula: '\\forall x \\in I,\\; \\forall y \\in J,\\quad y = f(x) \\iff x = f^{-1}(y)',
    },
    exercise: {
      id: 'tc_m_num_l01_p07_q01',
      type: 'mcq',
      prompt: 'Si $f : [1 ; +\\infty[ \\to [0 ; +\\infty[$ est bijective avec $f(3) = 8$, que vaut $f^{-1}(8)$ ?',
      options: ['$\\frac{1}{8}$', '$3$', '$-3$', '$8$'],
      correctAnswerIndex: 1,
      explanation: 'Par définition de la bijection réciproque, $f(3) = 8 \\iff f^{-1}(8) = 3$. Ne jamais confondre $f^{-1}$ avec l’inverse $\\frac{1}{f}$ !',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Théorème de la bijection',
    stepTheme: 'violet',
    stepTitle: 'Continuité + stricte monotonie $\\implies$ bijection',
    paragraphText:
      'Si $f$ est continue et strictement monotone sur un intervalle $I$, alors $f$ réalise une bijection de $I$ sur l’intervalle image $J = f(I)$. De plus, sa bijection réciproque $f^{-1}$ est continue sur $J$ et possède exactement le même sens de variation que $f$ (strictement croissante si $f$ l’est, strictement décroissante si $f$ l’est).',
    formula: {
      name: 'Théorème de la bijection',
      formula: 'f \\text{ continue, strictement monotone sur } I \\implies f : I \\to f(I) \\text{ bijective, } f^{-1} \\text{ continue et même monotonie}',
    },
    exercise: {
      id: 'tc_m_num_l01_p07_q02',
      type: 'mcq',
      prompt: 'Si $f$ est continue et strictement décroissante sur $[0 ; 4]$ avec $f(0) = 5$ et $f(4) = -1$, sur quel intervalle $f^{-1}$ est-elle définie et quel est son sens de variation ?',
      options: [
        'Définie sur $[0 ; 4]$ et croissante',
        'Définie sur $[-1 ; 5]$ et strictement croissante',
        'Définie sur $[-1 ; 5]$ et strictement décroissante',
        'Définie sur $[5 ; -1]$ et décroissante',
      ],
      correctAnswerIndex: 2,
      explanation: '$J = f([0 ; 4]) = [f(4) ; f(0)] = [-1 ; 5]$, et $f^{-1}$ a le même sens de variation que $f$, donc strictement décroissante.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Propriété graphique',
    stepTheme: 'violet',
    stepTitle: 'Symétrie par rapport à la première bissectrice $(y = x)$',
    paragraphText:
      'Dans un repère orthonormé $(O, \\vec{i}, \\vec{j})$, un point $M(x ; y)$ appartient à $(C_f)$ si et seulement si $M’(y ; x)$ appartient à $(C_{f^{-1}})$. Les courbes $(C_f)$ et $(C_{f^{-1}})$ sont donc symétriques par rapport à la première bissectrice $(\\Delta) : y = x$.',
    visualSchema: {
      type: 'function_plot',
      title: 'Symétrie de x² (sur R+) et √x par rapport à y = x',
      caption: 'Bleu : f(x) = x² — Vert : f⁻¹(x) = √x — Orange : bissectrice y = x',
      plot: {
        xMin: 0,
        xMax: 4,
        yMin: 0,
        yMax: 4,
        xStep: 1,
        yStep: 1,
        curves: [
          { label: 'x^2', color: 'blue', pieces: [{ expr: 'x^2', from: 0, to: 2 }] },
          { label: 'sqrt(x)', color: 'green', pieces: [{ expr: 'sqrt(x)', from: 0, to: 4 }] },
          { label: 'y = x', color: 'orange', pieces: [{ expr: 'x', from: 0, to: 4 }] },
        ],
        points: [
          { x: 1.5, y: 2.25, label: 'M(1.5 ; 2.25)', filled: true, color: 'blue' },
          { x: 2.25, y: 1.5, label: "M'(2.25 ; 1.5)", filled: true, color: 'green' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l01_p07_q03',
      type: 'mcq',
      prompt: 'La tangente à $(C_f)$ au point $A(2 ; 5)$ est horizontale. Quelle est la particularité de la tangente à $(C_{f^{-1}})$ au point $A’(5 ; 2)$ (en repère orthonormé) ?',
      options: [
        'Elle est horizontale',
        'Elle est verticale (parallèle à l’axe des ordonnées)',
        'Elle passe par l’origine',
        'Elle a pour coefficient directeur $-1$',
      ],
      correctAnswerIndex: 1,
      explanation: 'La symétrie par rapport à $y = x$ échange les directions horizontale et verticale : une tangente horizontale de $(C_f)$ devient une tangente verticale de $(C_{f^{-1}})$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice type 1',
    stepTheme: 'slate',
    stepTitle: 'Expliciter $f^{-1}(x)$ pour $f(x) = \\frac{x^2}{1 + x^2}$ sur $[0 ; +\\infty[$',
    paragraphText:
      'Sur $I = [0 ; +\\infty[$, $f$ est dérivable et $f’(x) = \\frac{2x}{(1 + x^2)^2} > 0$ pour $x > 0$. Comme $f(0) = 0$ et $\\lim_{+\\infty} f(x) = 1$, $f$ réalise une bijection de $[0 ; +\\infty[$ sur $J = [0 ; 1[$. Pour tout $y \\in [0 ; 1[$, l’équation $\\frac{x^2}{1 + x^2} = y$ donne $x^2(1 - y) = y$, d’où $x = \\sqrt{\\frac{y}{1 - y}}$ (car $x \\geqslant 0$). Ainsi $f^{-1}(x) = \\sqrt{\\frac{x}{1 - x}}$ pour $x \\in [0 ; 1[$.',
    formula: {
      name: 'Réciproque explicite',
      formula: 'f^{-1}(x) = \\sqrt{\\frac{x}{1 - x}} \\quad \\text{pour } x \\in [0 ; 1[',
    },
    exercise: {
      id: 'tc_m_num_l01_p07_q04',
      type: 'mcq',
      prompt: 'Pour $f(x) = \\frac{x^2}{1 + x^2}$ sur $[0 ; +\\infty[$, pourquoi choisit-on $x = +\\sqrt{\\frac{y}{1 - y}}$ plutôt que $-\\sqrt{\\frac{y}{1 - y}}$ ?',
      options: [
        'Parce que $y < 1$',
        'Parce que la bijection est restreinte à l’intervalle $[0 ; +\\infty[$, où $x \\geqslant 0$',
        'Parce que $\\sqrt{\\cdot}$ est toujours strictement positive',
        'Parce que $f$ est impaire',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’antécédent $x$ doit appartenir au domaine de départ $I = [0 ; +\\infty[$, donc on retient la racine positive.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Exercice type 2',
    stepTheme: 'slate',
    stepTitle: 'Réciproque de $g(x) = -x^2 + 2x + 3$ sur $I = [1 ; 3]$',
    paragraphText:
      'On complète le carré : $g(x) = -(x - 1)^2 + 4$. Sur $[1 ; 3]$, $g’(x) = -2(x - 1) \\leqslant 0$ (strictement négative sur $]1 ; 3]$), donc $g$ est continue et strictement décroissante. Comme $g(1) = 4$ et $g(3) = 0$, $g$ est bijective de $[1 ; 3]$ sur $J = [0 ; 4]$. Pour $y \\in [0 ; 4]$, $-(x - 1)^2 + 4 = y \\iff (x - 1)^2 = 4 - y$. Comme $x \\in [1 ; 3]$, on a $x - 1 \\geqslant 0$, donc $x - 1 = \\sqrt{4 - y}$, d’où $g^{-1}(x) = 1 + \\sqrt{4 - x}$ sur $[0 ; 4]$.',
    konanTip: 'Mettre un trinôme du second degré sous forme canonique $a(x - \\alpha)^2 + \\beta$ rend le calcul de $f^{-1}$ immédiat !',
    exercise: {
      id: 'tc_m_num_l01_p07_q05',
      type: 'mcq',
      prompt: 'Si l’on restreignait $g(x) = -(x - 1)^2 + 4$ à $[-1 ; 1]$, quelle serait l’expression de $g^{-1}(x)$ sur $[0 ; 4]$ ?',
      options: [
        '$1 + \\sqrt{4 - x}$',
        '$1 - \\sqrt{4 - x}$',
        '$-1 + \\sqrt{4 - x}$',
        '$\\sqrt{x + 4}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Sur $[-1 ; 1]$, on a $x - 1 \\leqslant 0$, donc $(x - 1)^2 = 4 - y$ donne $x - 1 = -\\sqrt{4 - y}$, soit $x = 1 - \\sqrt{4 - y}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur d’intervalle',
    stepTheme: 'orange',
    stepTitle: 'Bien distinguer l’ensemble de départ $I$ et d’arrivée $J$',
    paragraphText:
      'Une fonction n’est pas toujours globalement bijective sur son domaine maximal (ex. $x^2$ sur $\\mathbb{R}$), mais sa restriction à un intervalle où elle est strictement monotone l’est. Lorsque l’énoncé demande « montrer que $f$ réalise une bijection de $I$ sur un intervalle $J$ à préciser », il faut calculer $J = f(I)$ avec soin (attention aux bornes ouvertes/fermées et à l’inversion des bornes si $f$ est décroissante).',
    exercise: {
      id: 'tc_m_num_l01_p07_q06',
      type: 'mcq',
      prompt: 'Soit $f(x) = \\frac{1}{x - 2}$ sur $I = ]2 ; +\\infty[$. Sur quel intervalle $J$ réalise-t-elle une bijection ?',
      options: ['$]0 ; +\\infty[$', '$[0 ; +\\infty[$', '$]-\\infty ; 0[$', '$]2 ; +\\infty[$'],
      correctAnswerIndex: 0,
      explanation: 'Sur $]2 ; +\\infty[$, $f$ est continue, strictement décroissante, $\\lim_{2^+} f = +\\infty$ et $\\lim_{+\\infty} f = 0$, donc $f(I) = ]0 ; +\\infty[$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Synthèse Bac',
    stepTheme: 'green',
    stepTitle: 'Checklist pour déterminer $f^{-1}(x)$',
    paragraphText:
      '1) Justifier la continuité et la stricte monotonie sur $I$. 2) Déterminer $J = f(I)$. 3) Poser $y \\in J$ et résoudre $f(x) = y$ d’inconnue $x \\in I$. 4) Utiliser l’appartenance $x \\in I$ pour trancher tout signe ambigu ($\\pm\\sqrt{\\dots}$). 5) Conclure en remplaçant la variable muette $y$ par $x$ pour exprimer $f^{-1}(x)$ sur $J$.',
    exercise: {
      id: 'tc_m_num_l01_p07_q07',
      type: 'mcq',
      prompt: 'Pour $f(x) = \\sqrt{x - 3} + 2$ sur $[3 ; +\\infty[$, quelle est la bijection réciproque $f^{-1}(x)$ ?',
      options: [
        '$(x - 2)^2 + 3$ pour $x \\in [2 ; +\\infty[$',
        '$(x + 2)^2 - 3$ pour $x \\in [3 ; +\\infty[$',
        '$(x - 3)^2 + 2$ pour $x \\in [2 ; +\\infty[$',
        '$x^2 - 4x + 1$ pour $x \\in \\mathbb{R}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$J = f([3 ; +\\infty[) = [2 ; +\\infty[$. De $y = \\sqrt{x - 3} + 2$ ($y \\geqslant 2$), on tire $y - 2 = \\sqrt{x - 3} \\geqslant 0$, puis $x - 3 = (y - 2)^2$, d’où $f^{-1}(x) = (x - 2)^2 + 3$ sur $[2 ; +\\infty[$.',
    },
  },
];

const p08Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Fonction racine $n$-ième ($n \\in \\mathbb{N}$, $n \\geqslant 2$)',
    paragraphText:
      'La fonction $f : x \\mapsto x^n$ ($n \\geqslant 2$) est continue et strictement croissante sur $[0 ; +\\infty[$, avec $f(0) = 0$ et $\\lim_{+\\infty} x^n = +\\infty$. Par le théorème de la bijection, elle réalise une bijection de $\\mathbb{R}^+$ sur $\\mathbb{R}^+$. Sa bijection réciproque est appelée fonction racine $n$-ième, notée $x \\mapsto \\sqrt[n]{x}$ ou $x \\mapsto x^{\\frac{1}{n}}$.',
    formula: {
      name: 'Définition de la racine n-ième',
      formula: '\\forall x \\geqslant 0,\\; \\forall y \\geqslant 0,\\quad y = \\sqrt[n]{x} = x^{\\frac{1}{n}} \\iff y^n = x',
    },
    exercise: {
      id: 'tc_m_num_l01_p08_q01',
      type: 'mcq',
      prompt: 'Que vaut $\\sqrt[5]{32}$ ?',
      options: ['$2$', '$4$', '$6{,}4$', '$16$'],
      correctAnswerIndex: 0,
      explanation: '$2^5 = 32$ et $2 \\geqslant 0$, donc $\\sqrt[5]{32} = 2$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Propriétés algébriques',
    stepTheme: 'violet',
    stepTitle: 'Calcul avec les racines $n$-ièmes',
    paragraphText:
      'Pour tous réels $a \\geqslant 0$, $b \\geqslant 0$ (et $b > 0$ au dénominateur) et tous entiers $n, m \\geqslant 2$, $p \\in \\mathbb{Z}$ : $\\sqrt[n]{ab} = \\sqrt[n]{a}\\sqrt[n]{b}$, $\\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}$, $(\\sqrt[n]{a})^p = \\sqrt[n]{a^p}$ (si $a>0$ pour $p<0$), $\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a}$, et $\\sqrt[np]{a^{mp}} = \\sqrt[n]{a^m}$ ($p \\geqslant 1$).',
    formula: {
      name: 'Identités fondamentales',
      formula: '\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} \\qquad \\text{et} \\qquad (\\sqrt[n]{a})^n = \\sqrt[n]{a^n} = a \\quad (a \\geqslant 0)',
    },
    exercise: {
      id: 'tc_m_num_l01_p08_q02',
      type: 'mcq',
      prompt: 'Quelle est la forme simplifiée de $A = \\frac{4\\sqrt[10]{8}}{\\sqrt{\\sqrt[5]{256}}}$ ?',
      options: ['$2$', '$2\\sqrt{2}$', '$4$', '$\\sqrt[10]{2}$'],
      correctAnswerIndex: 1,
      explanation: '$4 = 2^2$, $\\sqrt[10]{8} = 2^{3/10}$, et $\\sqrt{\\sqrt[5]{256}} = \\sqrt[10]{2^8} = 2^{8/10}$. Ainsi $A = 2^{2 + 3/10 - 8/10} = 2^{3/2} = 2\\sqrt{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'definition',
    stepBadge: 'Puissance rationnelle',
    stepTheme: 'blue',
    stepTitle: 'Puissance d’exposant rationnel $a^r$ ($r \\in \\mathbb{Q}^*$)',
    paragraphText:
      'Soit $a > 0$ un réel strictement positif et $r = \\frac{p}{q} \\in \\mathbb{Q}^*$ (avec $p \\in \\mathbb{Z}^*$, $q \\in \\mathbb{N}$, $q \\geqslant 2$). On définit la puissance d’exposant rationnel par $a^{\\frac{p}{q}} = \\left(a^{\\frac{1}{q}}\\right)^p = \\sqrt[q]{a^p}$ (et par convention $a^0 = 1$). Les règles habituelles sur les exposants restent toutes valables : $a^r a^{r’} = a^{r+r’}$, $(a^r)^{r’} = a^{rr’}$, $\\frac{a^r}{a^{r’}} = a^{r-r’}$, $(ab)^r = a^r b^r$.',
    formula: {
      name: 'Lien exposant fractionnaire et radical',
      formula: 'a^{\\frac{p}{q}} = \\sqrt[q]{a^p} = \\left(\\sqrt[q]{a}\\right)^p \\qquad (a > 0,\\; p \\in \\mathbb{Z}^*,\\; q \\geqslant 2)',
    },
    exercise: {
      id: 'tc_m_num_l01_p08_q03',
      type: 'mcq',
      prompt: 'Pour $a > 0$ et $b > 0$, que vaut $B = \\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{a b^5}}$ ?',
      options: ['$a^2 b^2$', '$ab$', '$\\sqrt[6]{ab}$', '$\\sqrt{ab}$'],
      correctAnswerIndex: 1,
      explanation: '$B = (a^5 b)^{1/6} (a b^5)^{1/6} = (a^6 b^6)^{1/6} = ab$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Attention au domaine',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais écrire $a^{\\frac{p}{q}}$ pour $a < 0$ et attention à l’indice pair/impair',
    paragraphText:
      'La notation $a^r$ avec $r \\in \\mathbb{Q}$ n’est définie que pour $a > 0$ (pour éviter des paradoxes du type $(-1)^{1/3} = (-1)^{2/6} = \\sqrt[6]{(-1)^2} = +1$ !). En revanche, l’équation $x^n = k$ dans $\\mathbb{R}$ admet une solution $\\sqrt[n]{k}$ si $k \\geqslant 0$ (et son opposée $-\\sqrt[n]{k}$ aussi si $n$ est pair et $k > 0$), tandis que si $k < 0$ et $n$ est impair, l’unique solution réelle est $-\\sqrt[n]{|k|}$.',
    keyRule: 'Toujours distinguer $n$ pair et $n$ impair lors de la résolution de $x^n = k$ dans $\\mathbb{R}$.',
    exercise: {
      id: 'tc_m_num_l01_p08_q04',
      type: 'mcq',
      prompt: 'Dans $\\mathbb{R}$, quelles sont les solutions de l’équation $x^4 = 16$ ?',
      options: ['$2$ uniquement', '$-2$ et $2$', '$4$ et $-4$', 'Aucune solution réelle'],
      correctAnswerIndex: 1,
      explanation: 'L’exposant $4$ est pair et $16 > 0$, donc l’équation admet deux solutions réelles opposées : $\\sqrt[4]{16} = 2$ et $-2$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Résolution d’équation',
    stepTheme: 'slate',
    stepTitle: 'Comparer des radicaux d’indices différents',
    paragraphText:
      'Pour comparer $\\sqrt[3]{5}$ et $\\sqrt{3}$, on les réduit au même indice $\\text{ppcm}(3, 2) = 6$, ou on élève à la puissance $6$ (la fonction $x \\mapsto x^6$ étant strictement croissante sur $\\mathbb{R}^+$) : $(\\sqrt[3]{5})^6 = 5^2 = 25$ et $(\\sqrt{3})^6 = 3^3 = 27$. Comme $25 < 27$, on a $\\sqrt[3]{5} < \\sqrt{3}$.',
    exercise: {
      id: 'tc_m_num_l01_p08_q05',
      type: 'mcq',
      prompt: 'Lequel des deux nombres $\\sqrt[3]{4}$ et $\\sqrt[4]{6}$ est le plus grand ?',
      options: [
        '$\\sqrt[3]{4} > \\sqrt[4]{6}$',
        '$\\sqrt[3]{4} < \\sqrt[4]{6}$',
        'Ils sont égaux',
        'On ne peut pas les comparer',
      ],
      correctAnswerIndex: 0,
      explanation: 'En élevant à la puissance $12$ : $(\\sqrt[3]{4})^{12} = 4^4 = 256$ et $(\\sqrt[4]{6})^{12} = 6^3 = 216$. Comme $256 > 216$, $\\sqrt[3]{4} > \\sqrt[4]{6}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe 1',
    stepTheme: 'slate',
    stepTitle: 'Modèle de refroidissement d’une boisson chaude',
    paragraphText:
      'Une tasse de café est modélisée après $t$ minutes ($t \\geqslant 1$) par $T(t) = \\frac{200}{t} + 10$ (en $^{\\circ}\\text{C}$). À $t = 5\\text{ min}$, $T(5) = 50^{\\circ}\\text{C}$. Quand $t \\to +\\infty$, $\\lim_{t \\to +\\infty} T(t) = 10^{\\circ}\\text{C}$, ce qui indique que la température de la pièce est de $10^{\\circ}\\text{C}$ (asymptote horizontale $y = 10$).',
    exercise: {
      id: 'tc_m_num_l01_p08_q06',
      type: 'mcq',
      prompt: 'Si une substance suit le modèle $T(t) = 22 + \\frac{150}{t + 2}$ ($t \\geqslant 0$), quelle est la température ambiante limite lorsque $t \\to +\\infty$ ?',
      options: ['$0^{\\circ}\\text{C}$', '$22^{\\circ}\\text{C}$', '$97^{\\circ}\\text{C}$', '$150^{\\circ}\\text{C}$'],
      correctAnswerIndex: 1,
      explanation: '$\\lim_{t \\to +\\infty} \\frac{150}{t + 2} = 0$, donc $\\lim_{t \\to +\\infty} T(t) = 22^{\\circ}\\text{C}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Situation complexe 2',
    stepTheme: 'green',
    stepTitle: 'Étude complète avec fonction auxiliaire : $f(x) = \\frac{1 - x}{1 + x^3}$',
    paragraphText:
      'Dans les problèmes de synthèse Tle C (ex. $f(x) = \\frac{1 - x}{1 + x^3}$ sur $\\mathbb{R}\\setminus\\{-1\\}$), le numérateur de $f’(x)$ fait intervenir une fonction auxiliaire $g(x) = 2x^3 - 3x^2 - 1$. On étudie d’abord $g$, on applique le TVI pour montrer l’existence d’une unique racine $\\alpha \\in ]1 ; 2[$ telle que $g(\\alpha) = 0$ (et même $1{,}6 < \\alpha < 1{,}7$), puis on en déduit le signe de $f’(x)$, les variations de $f$ et l’expression simplifiée de $f(\\alpha)$.',
    formula: {
      name: 'Astuce classique pour f(α)',
      formula: 'g(\\alpha) = 0 \\implies 2\\alpha^3 - 3\\alpha^2 - 1 = 0 \\implies \\alpha^3 = \\frac{3\\alpha^2 + 1}{2}',
    },
    exercise: {
      id: 'tc_m_num_l01_p08_q07',
      type: 'mcq',
      prompt: 'Pour $g(x) = 2x^3 - 3x^2 - 1$, on trouve $g(1) = -2 < 0$ et $g(2) = 3 > 0$. Sachant que $g$ est strictement croissante sur $[1 ; 2]$, que peut-on en déduire ?',
      options: [
        '$g$ ne s’annule jamais sur $[1 ; 2]$',
        'Il existe un unique $\\alpha \\in ]1 ; 2[$ tel que $g(\\alpha) = 0$',
        '$g(x) > 0$ pour tout $x \\in [1 ; 2]$',
        '$\\alpha = 1{,}5$',
      ],
      correctAnswerIndex: 1,
      explanation: '$g$ est continue et strictement croissante sur $[1 ; 2]$ avec $g(1)g(2) < 0$, donc le corollaire du TVI assure l’existence d’une unique solution $\\alpha \\in ]1 ; 2[$.',
    },
  },
];

export const MATHS_TLE_C_L01_LIMITES_CONTINUITE: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l01_limites_continuite',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 1,
  title: 'Leçon 1 : Limites et continuité d’une fonction',
  summary:
    'Limite d’une fonction composée, limite d’une fonction monotone sur un intervalle ouvert, branches paraboliques et asymptotes, continuité et partie entière, prolongement par continuité, image d’un intervalle, TVI (balayage et dichotomie), bijection réciproque, racine n-ième et puissances rationnelles.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p01',
      order: 1,
      title: 'Limite d’une fonction composée et théorème des gendarmes',
      summary:
        'Composer des limites en précisant le sens d’approche à gauche ou à droite, utiliser les limites trigonométriques et encadrer les fonctions oscillantes.',
      conceptExplanation:
        'En Terminale C, le calcul de limites s’enrichit du théorème de composition : si f(x) tend vers b quand x tend vers a, et si g(X) tend vers l quand X tend vers b, alors g(f(x)) tend vers l. Pour lire correctement dans un tableau de variations ou au voisinage d’une asymptote verticale, il faut toujours préciser si f(x) tend vers b par valeurs supérieures (b+) ou inférieures (b−). Lorsqu’une fonction oscille (sin, cos à l’infini), on utilise le théorème des gendarmes.',
      keyRule: 'Poser X = f(x), vérifier si X → b+ ou b−, puis appliquer la limite de g en b.',
      formulas: [
        { name: 'Limite de composée', formula: '\\lim_{x \\to a} g(f(x)) = \\lim_{X \\to b} g(X)' },
        { name: 'Limite trigonométrique', formula: '\\lim_{X \\to 0} \\frac{\\sin X}{X} = 1' },
      ],
      workedExample: {
        title: 'Limite de composée sur fonction irrationnelle',
        statement: 'Calculer $\\lim_{x \\to +\\infty} \\sqrt{4 + \\frac{2}{x^2 + 1}}$.',
        methodSteps: [
          'Poser $X = f(x) = 4 + \\frac{2}{x^2 + 1}$.',
          'Déterminer $\\lim_{x \\to +\\infty} X = 4 + 0 = 4$.',
          'Par continuité de $g(X) = \\sqrt{X}$ en $4$, $\\lim_{X \\to 4} \\sqrt{X} = 2$.',
        ],
        conclusion: '$\\lim_{x \\to +\\infty} \\sqrt{4 + \\frac{2}{x^2 + 1}} = 2$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p02',
      order: 2,
      title: 'Limite d’une fonction monotone sur un intervalle ouvert',
      summary:
        'Montrer qu’une fonction croissante majorée (ou décroissante minorée) sur un intervalle ouvert admet nécessairement une limite finie sans connaître son expression explicite.',
      conceptExplanation:
        'Une fonction monotone sur ]a ; b[ ne peut jamais osciller : elle admet toujours une limite (finie ou infinie) à chaque extrémité. En particulier, si f est croissante et majorée par M sur ]a ; b[, elle converge à gauche en b vers une limite finie l vérifiant l <= M. Symétriquement, une fonction décroissante et minorée par m admet une limite finie l >= m en b−. Si elle n’est pas bornée dans le sens de sa monotonie, elle tend vers +∞ ou −∞.',
      keyRule: 'Croissante + majorée par M => limite finie l <= M ; Décroissante + minorée par m => limite finie l >= m.',
      formulas: [
        { name: 'Théorème de convergence monotone', formula: 'f \\nearrow \\text{ et } f \\leqslant M \\text{ sur } ]a ; b[ \\implies \\lim_{b^-} f = \\ell \\leqslant M' },
      ],
      workedExample: {
        title: 'Majoration via la dérivée',
        statement: 'Soit $f$ dérivable sur $]0 ; +\\infty[$ telle que $f’(x) = \\frac{1}{1 + x^2}$. Montrer que $f$ admet une limite finie $\\ell$ en $+\\infty$ telle que $f(1) \\leqslant \\ell \\leqslant 1 + f(1)$.',
        methodSteps: [
          '$f’(x) > 0$ donc $f$ est strictement croissante sur $[1 ; +\\infty[$, d’où $f(x) \\geqslant f(1)$.',
          'Pour $x \\geqslant 1$, $\\frac{1}{1+x^2} < \\frac{1}{x^2}$, donc $h(x) = f(x) + \\frac{1}{x}$ vérifie $h’(x) < 0$.',
          '$h$ est décroissante sur $[1 ; +\\infty[$, donc $f(x) + \\frac{1}{x} \\leqslant f(1) + 1$, soit $f(x) < 1 + f(1)$.',
        ],
        conclusion: '$f$ est croissante et majorée sur $[1 ; +\\infty[$ : elle admet une limite finie $\\ell \\in [f(1) ; 1 + f(1)]$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p03',
      order: 3,
      title: 'Branches paraboliques et asymptotes (dont cas irrationnels)',
      summary:
        'Distinguer asymptotes verticales, horizontales, obliques et branches paraboliques de direction (OI), (OJ) ou y = ax ; maîtriser le signe de √(x²) en −∞.',
      conceptExplanation:
        'L’étude des branches infinies consiste à analyser le comportement de (Cf) quand x s’approche d’une valeur interdite ou tend vers ±∞. En ±∞, lorsque f(x) → ±∞, on calcule f(x)/x : 0 donne une branche parabolique de direction (OI), ±∞ donne la direction (OJ), et un réel non nul a invite à étudier f(x) − ax pour trouver une éventuelle asymptote oblique y = ax + b. Avec des racines carrées comme √(x² + x + 1), il faut impérativement écrire √(x²) = |x| = −x lorsque x → −∞.',
      keyRule: 'Toujours écrire $\\sqrt{x^2} = |x|$ : égal à $x$ en $+\\infty$ et à $-x$ en $-\\infty$.',
      formulas: [
        { name: 'Asymptote oblique', formula: 'a = \\lim_{\\pm\\infty} \\frac{f(x)}{x} \\in \\mathbb{R}^* \\text{ et } b = \\lim_{\\pm\\infty} (f(x) - ax) \\in \\mathbb{R}' },
      ],
      workedExample: {
        title: 'Asymptotes de f(x) = √(x² + x + 1) − x',
        statement: 'Déterminer les asymptotes à $(C_f)$ en $+\\infty$ et en $-\\infty$.',
        methodSteps: [
          'En $+\\infty$, par expression conjuguée : $f(x) = \\frac{x+1}{\\sqrt{x^2+x+1}+x} \\to \\frac{1}{2}$, donc $y = \\frac{1}{2}$ est asymptote horizontale.',
          'En $-\\infty$, $\\sqrt{x^2+x+1} = -x\\sqrt{1+\\frac{1}{x}+\\frac{1}{x^2}}$, d’où $\\lim_{x \\to -\\infty} \\frac{f(x)}{x} = -2$.',
          'Puis $f(x) + 2x = \\frac{x+1}{\\sqrt{x^2+x+1}-x} \\xrightarrow[x \\to -\\infty]{} -\\frac{1}{2}$, donc $y = -2x - \\frac{1}{2}$ est asymptote oblique en $-\\infty$.',
        ],
        conclusion: 'Deux comportements asymptotiques distincts : horizontale $y = \\frac{1}{2}$ en $+\\infty$ et oblique $y = -2x - \\frac{1}{2}$ en $-\\infty$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p04',
      order: 4,
      title: 'Continuité en un point, sur un intervalle et partie entière',
      summary:
        'Caractériser la continuité via les limites à gauche et à droite, utiliser les théorèmes d’opérations et étudier des fonctions faisant intervenir E(x).',
      conceptExplanation:
        'Une fonction f est continue en a lorsque ses limites à gauche et à droite en a existent et sont toutes deux égales à f(a). Les fonctions usuelles (polynômes, rationnelles, sinus, cosinus, racine carrée) sont continues sur leur ensemble de définition, ainsi que leurs sommes, produits, quotients (dénominateur non nul) et composées. La fonction partie entière E(x) est discontinue en tout entier n, mais des constructions comme E(x) + (x − E(x))² se raccordent continûment sur tout R.',
      keyRule: 'En un point de raccordement $a$, vérifier que $\\lim_{a^-} f = \\lim_{a^+} f = f(a)$.',
      formulas: [
        { name: 'Partie entière', formula: 'E(x) \\leqslant x < E(x) + 1 \\quad \\text{avec } E(x) \\in \\mathbb{Z}' },
      ],
      workedExample: {
        title: 'Continuité de k(x) = E(x) + (x − E(x))² en tout entier n',
        statement: 'Justifier que $k(x) = E(x) + (x - E(x))^2$ est continue en tout entier $n \\in \\mathbb{Z}$.',
        methodSteps: [
          'Calculer l’image : pour $x \\in [n ; n+1[$, $E(x) = n$, donc $k(n) = n + (n - n)^2 = n$.',
          'À droite : $\\lim_{x \\to n^+} k(x) = \\lim_{x \\to n^+} (n + (x - n)^2) = n$.',
          'À gauche : pour $x \\in [n - 1 ; n[$, $E(x) = n - 1$, d’où $\\lim_{x \\to n^-} k(x) = (n - 1) + (n - (n - 1))^2 = n$.',
        ],
        conclusion: '$\\lim_{n^-} k = \\lim_{n^+} k = k(n) = n$, donc $k$ est continue en tout entier $n$ et sur $\\mathbb{R}$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p05',
      order: 5,
      title: 'Prolongement par continuité en un point',
      summary:
        'Combler un trou ponctuel dans le domaine de définition d’une fonction lorsque sa limite en ce point existe et est finie.',
      conceptExplanation:
        'Si f n’est pas définie en a mais admet une limite réelle finie l en a, on peut définir une nouvelle fonction g égale à f sur Df et prenant la valeur g(a) = l en a : c’est le prolongement par continuité de f en a. Si la limite en a est infinie, ou si les limites à gauche et à droite diffèrent (comme avec |x|/x ou (x² + x)/(x² − |x|) en 0), aucun prolongement continu n’est possible.',
      keyRule: 'Prolongeable par continuité en $a$ ssi $\\lim_{x \\to a} f(x) = \\ell \\in \\mathbb{R}$ (finie et unique).',
      formulas: [
        { name: 'Définition du prolongement', formula: 'g(a) = \\lim_{x \\to a} f(x) \\in \\mathbb{R}' },
      ],
      workedExample: {
        title: 'Prolongement par expression conjuguée',
        statement: 'Montrer que $f(x) = \\frac{x - 9}{\\sqrt{x - 5} - 2}$ est prolongeable par continuité en $9$.',
        methodSteps: [
          'Préciser $D_f = [5 ; 9[ \\cup ]9 ; +\\infty[$, donc $9 \\notin D_f$.',
          'Multiplier par le conjugué : $f(x) = \\frac{(x - 9)(\\sqrt{x - 5} + 2)}{(x - 5) - 4} = \\sqrt{x - 5} + 2$ pour $x \\ne 9$.',
          'Calculer $\\lim_{x \\to 9} f(x) = \\sqrt{4} + 2 = 4 \\in \\mathbb{R}$.',
        ],
        conclusion: '$f$ est prolongeable en $9$ par $g(x) = \\sqrt{x - 5} + 2$ sur $[5 ; +\\infty[$, avec $g(9) = 4$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p06',
      order: 6,
      title: 'Image d’un intervalle, TVI, balayage et dichotomie',
      summary:
        'Déterminer l’image d’un intervalle quelconque par une fonction continue monotone, prouver l’existence et l’unicité d’une solution α et l’encadrer numériquement.',
      conceptExplanation:
        'Toute fonction continue transforme un intervalle en un intervalle. Lorsqu’elle est de plus strictement monotone, les bornes de l’intervalle image sont obtenues directement par les images (ou limites) aux bornes, en inversant l’ordre si la fonction est décroissante. Le théorème des valeurs intermédiaires (TVI) et son corollaire garantissent qu’une fonction continue strictement monotone changeant de signe sur [a ; b] possède une unique racine α dans ]a ; b[, qu’on encadre ensuite par balayage ou dichotomie.',
      keyRule: 'Continuité + changement de signe => existence ; + stricte monotonie => unicité.',
      formulas: [
        { name: 'Amplitude dichotomique', formula: '\\Delta_n = \\frac{b_0 - a_0}{2^n}' },
      ],
      workedExample: {
        title: 'Résolution approchée de 2x³ + 3x − 1 = 0',
        statement: 'Montrer que $2x^3 + 3x - 1 = 0$ admet une unique solution $\\alpha$ dans $\\mathbb{R}$ et l’encadrer à $10^{-1}$ près.',
        methodSteps: [
          'Soit $f(x) = 2x^3 + 3x - 1$. $f’(x) = 6x^2 + 3 > 0$, donc $f$ est continue et strictement croissante sur $\\mathbb{R}$.',
          'Comme $\\lim_{-\\infty} f = -\\infty$, $\\lim_{+\\infty} f = +\\infty$, et $0 \\in ]-\\infty ; +\\infty[$, $\\alpha$ existe et est unique.',
          'Par balayage au pas $0{,}1$ : $f(0{,}3) = -0{,}046 < 0$ et $f(0{,}4) = 0{,}328 > 0$.',
        ],
        conclusion: 'L’unique racine $\\alpha$ vérifie $0{,}3 < \\alpha < 0{,}4$.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p07',
      order: 7,
      title: 'Bijection réciproque d’une fonction continue strictement monotone',
      summary:
        'Appliquer le théorème de la bijection, déterminer l’intervalle d’arrivée J = f(I), tracer la courbe de f⁻¹ par symétrie et expliciter f⁻¹(x).',
      conceptExplanation:
        'Si f est continue et strictement monotone sur un intervalle I, alors f est une bijection de I sur J = f(I). Sa réciproque f⁻¹ est définie et continue sur J, varie dans le même sens que f, et sa courbe représentative dans un repère orthonormé s’obtient par symétrie orthogonale par rapport à la droite y = x. Pour trouver la formule de f⁻¹(y), on résout f(x) = y en utilisant le signe ou les bornes de x ∈ I.',
      keyRule: 'Toujours vérifier dans quel intervalle $I$ se trouve $x$ avant de choisir le signe devant une racine carrée.',
      formulas: [
        { name: 'Équivalence de définition', formula: 'y = f(x) \\text{ avec } x \\in I \\iff x = f^{-1}(y) \\text{ avec } y \\in J' },
      ],
      workedExample: {
        title: 'Explicitation de la réciproque d’un trinôme restreint',
        statement: 'Montrer que $g(x) = -x^2 + 2x + 3$ est bijective de $I = [1 ; 3]$ sur un intervalle $J$ et déterminer $g^{-1}(x)$.',
        methodSteps: [
          '$g’(x) = -2x + 2 \\leqslant 0$ sur $[1 ; 3]$ (et nul uniquement en $1$), donc $g$ est continue et strictement décroissante sur $[1 ; 3]$.',
          'Ainsi $J = g([1 ; 3]) = [g(3) ; g(1)] = [0 ; 4]$.',
          'Pour $y \\in [0 ; 4]$, $-(x - 1)^2 + 4 = y \\iff (x - 1)^2 = 4 - y$. Or $x \\in [1 ; 3] \\implies x - 1 \\geqslant 0$, donc $x = 1 + \\sqrt{4 - y}$.',
        ],
        conclusion: '$g^{-1}$ est définie sur $[0 ; 4]$ par $g^{-1}(x) = 1 + \\sqrt{4 - x}$.',
      },
      structuredSteps: p07Steps,
      exercises: p07Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l01_limites_continuite_p08',
      order: 8,
      title: 'Racine n-ième, puissances rationnelles et synthèses Tle C',
      summary:
        'Manipuler la racine n-ième √[n]{x} et les puissances rationnelles, comparer des radicaux d’indices différents, résoudre xⁿ = k et maîtriser les problèmes complets avec fonction auxiliaire.',
      conceptExplanation:
        'La fonction racine n-ième (n >= 2) est la bijection réciproque de x ↦ xⁿ sur [0 ; +∞[. Elle permet de définir pour tout a > 0 et tout rationnel r = p/q la puissance fractionnaire a^(p/q) = q-ième racine de a^p, qui obéit à toutes les règles usuelles des exposants. Ces outils, associés au TVI et aux fonctions auxiliaires, concluent les problèmes complets d’analyse en Terminale C.',
      keyRule: 'Convertir les radicaux imbriqués en exposants fractionnaires pour simplifier sans erreur.',
      formulas: [
        { name: 'Puissance rationnelle', formula: 'a^{\\frac{p}{q}} = \\sqrt[q]{a^p} \\qquad (a > 0)' },
        { name: 'Racines imbriquées', formula: '\\sqrt[m]{\\sqrt[n]{a}} = \\sqrt[mn]{a} = a^{\\frac{1}{mn}}' },
      ],
      workedExample: {
        title: 'Simplification d’un produit de radicaux imbriqués',
        statement: 'Pour $a > 0$ et $b > 0$, simplifier $B = \\sqrt[3]{\\sqrt{a^5 b}} \\times \\sqrt{\\sqrt[3]{a b^5}}$.',
        methodSteps: [
          'Traduire $\\sqrt[3]{\\sqrt{u}} = u^{\\frac{1}{6}}$ et $\\sqrt{\\sqrt[3]{v}} = v^{\\frac{1}{6}}$.',
          'On obtient $B = (a^5 b)^{\\frac{1}{6}} (a b^5)^{\\frac{1}{6}} = (a^6 b^6)^{\\frac{1}{6}}$.',
          'Par propriété des puissances : $(a^6)^{\\frac{1}{6}} (b^6)^{\\frac{1}{6}} = a \\cdot b$.',
        ],
        conclusion: 'Pour tous réels $a > 0$ et $b > 0$, $B = ab$.',
      },
      structuredSteps: p08Steps,
      exercises: p08Steps.map((s) => s.exercise),
    },
  ],
};
