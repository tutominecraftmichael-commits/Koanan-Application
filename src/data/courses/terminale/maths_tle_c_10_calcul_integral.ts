import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Comprendre la notation $\\int B \\times dA$ (flux magnétique)',
    paragraphText:
      'En physique, lorsque le champ magnétique $\\vec{B}$ et la surface $A$ sont uniformes, le flux vaut simplement $\\Phi = B \\times A$. Lorsque $B$ varie d’un endroit à l’autre sur une surface découpée en éléments infiniment petits $dA$, on somme toutes les contributions élémentaires : c’est la notation intégrale $\\Phi = \\int B \\times dA$. En mathématiques, l’intégrale $\\int_a^b f(x)\\,dx$ généralise cette « somme continue » sur un intervalle $[a ; b]$.',
    formula: {
      name: 'Flux magnétique et somme intégrale',
      formula: '\\Phi = \\int B \\times dA \\qquad ; \\qquad \\int_a^b f(x)\\,dx = F(b) - F(a)',
    },
    konanTip: 'Le symbole $\\int$ est un « S » allongé (pour Somme) : $\\int_a^b f(x)\\,dx$ additionne des tranches infiniment fines de hauteur $f(x)$ et de largeur $dx$.',
    exercise: {
      id: 'tc_m_num_l10_p01_q01',
      type: 'mcq',
      prompt: 'Que représente $F(b) - F(a)$ lorsque $F$ est une primitive d’une fonction continue $f$ sur un intervalle $K$ contenant $a$ et $b$ ?',
      options: [
        'La dérivée de $f$ entre $a$ et $b$',
        'L’intégrale de $a$ à $b$ de $f$, notée $\\int_a^b f(x)\\,dx$',
        'Uniquement l’aire totale même si $f < 0$',
        'Un nombre qui dépend du choix de la primitive $F$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le réel $F(b) - F(a)$ est indépendant de la primitive $F$ choisie (car toute autre primitive vaut $F + C$, et $(F(b)+C)-(F(a)+C) = F(b)-F(a)$) : c’est $\\int_a^b f(x)\\,dx$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Intégrale de $a$ à $b$ d’une fonction continue $f$',
    paragraphText:
      'Soient $f$ une fonction **continue** sur un intervalle $K$, $a$ et $b$ deux éléments de $K$, et $F$ une primitive quelconque de $f$ sur $K$. On appelle **intégrale de $a$ à $b$ de $f$** le nombre réel $F(b) - F(a)$, noté $\\int_a^b f(x)\\,dx = \\left[F(x)\\right]_a^b$. $a$ et $b$ sont les **bornes** de l’intégrale.',
    formula: {
      name: 'Théorème fondamental du calcul intégral',
      formula: '\\int_a^b f(x)\\,dx = \\Big[F(x)\\Big]_a^b = F(b) - F(a)',
    },
    exercise: {
      id: 'tc_m_num_l10_p01_q02',
      type: 'mcq',
      prompt: 'Que vaut l’intégrale $I = \\int_0^1 x^2\\,dx$ ?',
      options: ['$1$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      correctAnswerIndex: 2,
      explanation: 'Une primitive de $x^2$ est $F(x) = \\frac{1}{3}x^3$, donc $I = \\left[\\frac{1}{3}x^3\\right]_0^1 = \\frac{1}{3}(1^3) - 0 = \\frac{1}{3}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Variable muette',
    stepTheme: 'violet',
    stepTitle: 'Indépendance vis-à-vis de la variable d’intégration',
    paragraphText:
      'Dans $\\int_a^b f(x)\\,dx$, le résultat $F(b) - F(a)$ ne dépend ni de $F$, ni du nom de la variable : on dit que $x$ est une **variable muette**. On peut donc la remplacer par toute autre lettre différente de $a$ et $b$ : $\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(z)\\,dz$. Par exemple, $P = \\int_0^1 z^2\\,dz = \\int_0^1 x^2\\,dx = \\frac{1}{3}$.',
    formula: {
      name: 'Variable muette',
      formula: '\\int_a^b f(x)\\,dx = \\int_a^b f(t)\\,dt = \\int_a^b f(u)\\,du',
    },
    exercise: {
      id: 'tc_m_num_l10_p01_q03',
      type: 'mcq',
      prompt: 'Sachant que $\\int_1^e \\frac{1}{x}\\,dx = 1$, que vaut $\\int_1^e \\frac{1}{t}\\,dt$ ?',
      options: ['$e$', '$e - 1$', '$1$', '$\\frac{1}{t}$'],
      correctAnswerIndex: 2,
      explanation: 'La lettre d’intégration ($x$ ou $t$) est muette : les deux intégrales représentent le même nombre réel, égal à $1$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Bornes égales ou inversées',
    stepTheme: 'violet',
    stepTitle: 'Conséquences immédiates sur les bornes',
    paragraphText:
      'De $\\int_a^b f(x)\\,dx = F(b) - F(a)$ découlent deux propriétés essentielles : (1) si les bornes sont identiques, $\\int_a^a f(x)\\,dx = F(a) - F(a) = 0$ (ex : $H = \\int_{-12}^{-12} x\\sqrt{3 - x}\\,dx = 0$ sans calcul !) ; (2) inverser les bornes change le signe : $\\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx$.',
    formula: {
      name: 'Propriétés des bornes',
      formula: '\\int_a^a f(x)\\,dx = 0 \\qquad \\text{et} \\qquad \\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx',
    },
    exercise: {
      id: 'tc_m_num_l10_p01_q04',
      type: 'mcq',
      prompt: 'Que vaut $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$ ?',
      options: ['$2 - \\ln 3$', '$-2 + \\ln 3$', '$2 + \\ln 3$', '$-2 - \\ln 3$'],
      correctAnswerIndex: 1,
      explanation: '$\\left[t - \\ln t\\right]_3^1 = (1 - \\ln 1) - (3 - \\ln 3) = 1 - 3 + \\ln 3 = -2 + \\ln 3$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Aire sous la courbe',
    stepTheme: 'violet',
    stepTitle: 'Interprétation graphique pour $f \\geqslant 0$ et unité d’aire (u.a.)',
    paragraphText:
      'Soit $f$ continue et **positive** sur $[a ; b]$ ($a \\leqslant b$). Dans un repère orthogonal $(O ; I, J)$, l’intégrale $\\int_a^b f(x)\\,dx$ est égale à l’aire $\\mathcal{A}$, exprimée en **unités d’aire (u.a.)**, de la partie du plan délimitée par $(\\mathcal{C}_f)$, l’axe $(OI)$ et les droites $x = a$ et $x = b$ : $\\{\\,M(x ; y),\\; a \\leqslant x \\leqslant b \\text{ et } 0 \\leqslant y \\leqslant f(x)\\,\\}$. L’unité d’aire vaut $1\\text{ u.a.} = OI \\times OJ$.',
    formula: {
      name: 'Aire en cm²',
      formula: '\\mathcal{A}_{\\text{cm}^2} = \\left(\\int_a^b f(x)\\,dx\\right) \\times (OI \\times OJ)',
    },
    visualSchema: {
      type: 'function_plot',
      title: 'Aire sous $f(x) = 2x + 1$ sur $[0 ; 2]$',
      caption: 'En repère orthogonal ($OI = 2\\text{ cm}$, $OJ = 3\\text{ cm}$), $1\\text{ u.a.} = 6\\text{ cm}^2$.',
      plot: {
        xMin: -0.5,
        xMax: 3,
        yMin: -0.5,
        yMax: 6,
        xStep: 1,
        yStep: 1,
        curves: [{ label: 'f(x)=2x+1', color: 'blue', pieces: [{ expr: '2*x+1', from: -0.5, to: 2.5 }] }],
        verticalLines: [
          { x: 0, label: 'x=0', color: 'green' },
          { x: 2, label: 'x=2', color: 'green' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l10_p01_q05',
      type: 'mcq',
      prompt: 'Dans un repère orthogonal avec $2\\text{ cm}$ en abscisse et $3\\text{ cm}$ en ordonnée, $f(x) = 2x + 1$ sur $[0 ; 5]$. Quelle est l’aire sous $(\\mathcal{C}_f)$ en $\\text{cm}^2$ ?',
      options: ['$30\\text{ cm}^2$', '$180\\text{ cm}^2$', '$150\\text{ cm}^2$', '$36\\text{ cm}^2$'],
      correctAnswerIndex: 1,
      explanation: '$\\int_0^5 (2x + 1)\\,dx = [x^2 + x]_0^5 = 25 + 5 = 30\\text{ u.a.}$ Comme $1\\text{ u.a.} = 2 \\times 3 = 6\\text{ cm}^2$, l’aire vaut $30 \\times 6 = 180\\text{ cm}^2$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège classique',
    stepTheme: 'orange',
    stepTitle: 'Une intégrale peut être négative, contrairement à une aire !',
    paragraphText:
      'Une aire est toujours positive ou nulle. En revanche, une intégrale $\\int_a^b f(x)\\,dx$ peut être négative ou nulle dès que $f$ prend des valeurs négatives ou lorsque $b < a$ ! Exemple : $\\int_{-1}^1 x^3\\,dx = 0$ (fonction impaire) alors que l’aire correspondante entre la courbe et $(OI)$ sur $[-1 ; 1]$ est strictement positive.',
    konanTip: 'Ne jamais confondre intégrale (algébrique, peut être $<0$) et aire géométrique (toujours $\\geqslant 0$).',
    exercise: {
      id: 'tc_m_num_l10_p01_q06',
      type: 'mcq',
      prompt: 'Parmi ces intégrales, laquelle est strictement NÉGATIVE ?',
      options: [
        '$\\int_{-2}^7 x^2\\,dx$',
        '$\\int_0^5 (2x+1)\\,dx$',
        '$\\int_{-12}^{-12} x\\sqrt{3-x}\\,dx$',
        '$\\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$',
      ],
      correctAnswerIndex: 3,
      explanation: 'Sur $[1 ; 3]$, $1 - \\frac{1}{t} \\geqslant 0$ et les bornes sont inversées ($3 > 1$) : $\\int_3^1 (1 - \\frac{1}{t})dt = -2 + \\ln 3 \\approx -0{,}90 < 0$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Méthode directe',
    stepTheme: 'green',
    stepTitle: 'Bien noter la primitive entre crochets $[F(x)]_a^b$',
    paragraphText:
      'Avant de calculer $F(b) - F(a)$ : (1) vérifie que $f$ est continue sur $[a ; b]$ (attention aux valeurs interdites comme $0$ pour $\\frac{1}{x}$) ; (2) écris $\\left[F(x)\\right]_a^b$ ; (3) mets des **parenthèses** autour de $F(a)$ dans $F(b) - (F(a))$ pour ne pas oublier de distribuer le signe moins !',
    exercise: {
      id: 'tc_m_num_l10_p01_q07',
      type: 'mcq',
      prompt: 'Que vaut $\\int_1^3 (2x - 1)\\,dx$ ?',
      options: ['$4$', '$6$', '$8$', '$10$'],
      correctAnswerIndex: 1,
      explanation: '$[x^2 - x]_1^3 = (9 - 3) - (1 - 1) = 6 - 0 = 6$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Relation de Chasles',
    stepTheme: 'violet',
    stepTitle: 'Découper une intégrale : égalité de Chasles',
    paragraphText:
      'Soit $f$ une fonction continue sur un intervalle $K$, et soient $a, b, c$ trois réels quelconques de $K$ (pas forcément rangés dans l’ordre !). On a : $\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx$. Cette relation est indispensable pour intégrer une fonction définie par morceaux ou contenant une valeur absolue $|u(x)|$.',
    formula: {
      name: 'Relation de Chasles',
      formula: '\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx',
    },
    exercise: {
      id: 'tc_m_num_l10_p02_q01',
      type: 'mcq',
      prompt: 'Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x - 1$ si $x \\leqslant 1$ et $f(x) = \\frac{1}{x}$ si $x > 1$. Que vaut $A = \\int_0^e f(x)\\,dx$ ?',
      options: ['$0$', '$1$', '$e$', '$2$'],
      correctAnswerIndex: 1,
      explanation: 'Par Chasles en $c = 1$ : $\\int_0^1 (2x-1)\\,dx + \\int_1^e \\frac{1}{x}\\,dx = [x^2-x]_0^1 + [\\ln x]_1^e = (0 - 0) + (1 - 0) = 1$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Valeur absolue',
    stepTheme: 'slate',
    stepTitle: 'Intégrer une fonction avec valeur absolue (Ex. 2 p.12)',
    paragraphText:
      'Pour calculer $P = \\int_{-4}^6 |x + 3|\\,dx$, on repère où l’intérieur s’annule : $x + 3 = 0 \\iff x = -3 \\in [-4 ; 6]$. Sur $[-4 ; -3]$, $x + 3 \\leqslant 0$ donc $|x + 3| = -x - 3$. Sur $[-3 ; 6]$, $|x + 3| = x + 3$. Par Chasles : $P = \\int_{-4}^{-3} (-x - 3)\\,dx + \\int_{-3}^6 (x + 3)\\,dx = \\left[-\\frac{x^2}{2}-3x\\right]_{-4}^{-3} + \\left[\\frac{x^2}{2}+3x\\right]_{-3}^6 = \\frac{1}{2} + \\frac{81}{2} = 41$.',
    formula: {
      name: 'Suppression de la valeur absolue',
      formula: '\\int_{-4}^6 |x+3|\\,dx = \\int_{-4}^{-3} -(x+3)\\,dx + \\int_{-3}^6 (x+3)\\,dx = 41',
    },
    exercise: {
      id: 'tc_m_num_l10_p02_q02',
      type: 'mcq',
      prompt: 'En utilisant Chasles, que vaut $\\int_{-1}^2 |x|\\,dx$ ?',
      options: ['$\\frac{3}{2}$', '$\\frac{5}{2}$', '$2$', '$\\frac{1}{2}$'],
      correctAnswerIndex: 1,
      explanation: '$\\int_{-1}^0 (-x)\\,dx + \\int_0^2 x\\,dx = \\left[-\\frac{x^2}{2}\\right]_{-1}^0 + \\left[\\frac{x^2}{2}\\right]_0^2 = \\frac{1}{2} + 2 = \\frac{5}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Linéarité',
    stepTheme: 'violet',
    stepTitle: 'Linéarité de l’intégrale (somme et multiplication par $\\alpha$)',
    paragraphText:
      'Soient $f$ et $g$ continues sur $K$, $a, b \\in K$ et $\\alpha \\in \\mathbb{R}$. Alors $\\int_a^b [f(x) + g(x)]\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$ et $\\int_a^b \\alpha f(x)\\,dx = \\alpha \\int_a^b f(x)\\,dx$. Exemple du cours : $\\int_0^{2\\pi} (-3\\cos x + 2\\sin x)\\,dx = -3[\\sin x]_0^{2\\pi} + 2[-\\cos x]_0^{2\\pi} = 0 + 2(-1 + 1) = 0$.',
    formula: {
      name: 'Linéarité',
      formula: '\\int_a^b (\\alpha f(x) + \\beta g(x))\\,dx = \\alpha\\int_a^b f(x)\\,dx + \\beta\\int_a^b g(x)\\,dx',
    },
    exercise: {
      id: 'tc_m_num_l10_p02_q03',
      type: 'mcq',
      prompt: 'Sachant que $\\int_0^1 f(x)\\,dx = 3$ et $\\int_0^1 g(x)\\,dx = -2$, que vaut $\\int_0^1 (2f(x) - 3g(x) + 1)\\,dx$ ?',
      options: ['$1$', '$13$', '$12$', '$0$'],
      correctAnswerIndex: 1,
      explanation: '$2(3) - 3(-2) + \\int_0^1 1\\,dx = 6 + 6 + 1 = 13$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Parité',
    stepTheme: 'violet',
    stepTitle: 'Intégration d’une fonction paire ou impaire sur $[-a ; a]$',
    paragraphText:
      'Soit $f$ continue sur un intervalle $K$ symétrique par rapport à $0$ et $a \\in K$. (1) Si $f$ est **paire** ($f(-x) = f(x)$), alors $\\int_{-a}^a f(x)\\,dx = 2\\int_0^a f(x)\\,dx$. (2) Si $f$ est **impaire** ($f(-x) = -f(x)$), alors $\\int_{-a}^a f(x)\\,dx = 0$ sans même chercher de primitive ! Exemples du cours : $\\int_{-\\pi/4}^{\\pi/4} \\cos(2x)\\,dx = 2\\int_0^{\\pi/4}\\cos(2x)\\,dx = [\\sin 2x]_0^{\\pi/4} = 1$, et $\\int_{-\\pi/4}^{\\pi/4} \\sin(2x)\\,dx = 0$.',
    formula: {
      name: 'Symétries sur [-a ; a]',
      formula: 'f \\text{ paire} \\implies \\int_{-a}^a f = 2\\int_0^a f \\qquad ; \\qquad f \\text{ impaire} \\implies \\int_{-a}^a f = 0',
    },
    exercise: {
      id: 'tc_m_num_l10_p02_q04',
      type: 'mcq',
      prompt: 'Que vaut $\\int_{-\\pi/6}^{\\pi/6} x^6 \\sin x\\,dx$ (Exercice 10 p.13) ?',
      options: ['$2\\int_0^{\\pi/6} x^6 \\sin x\\,dx$', '$0$', '$1$', '$\\frac{\\pi}{3}$'],
      correctAnswerIndex: 1,
      explanation: 'Posons $g(x) = x^6 \\sin x$ sur $[-\\frac{\\pi}{6} ; \\frac{\\pi}{6}]$ : $g(-x) = (-x)^6 \\sin(-x) = -x^6 \\sin x = -g(x)$. $g$ est impaire sur un intervalle symétrique, donc son intégrale vaut $0$ !',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Périodicité',
    stepTheme: 'violet',
    stepTitle: 'Intégration d’une fonction périodique de période $T$',
    paragraphText:
      'Soit $f$ continue sur $\\mathbb{R}$ et périodique de période $T$ ($f(x + T) = f(x)$). Pour tous réels $a$ et $b$, décaler les deux bornes de $T$ ne change rien : $\\int_{a+T}^{b+T} f(x)\\,dx = \\int_a^b f(x)\\,dx$. En particulier, sur n’importe quel intervalle de longueur une période : $\\int_a^{a+T} f(x)\\,dx = \\int_0^T f(x)\\,dx$.',
    formula: {
      name: 'Invariance par translation d’une période T',
      formula: '\\int_a^{a+T} f(x)\\,dx = \\int_0^T f(x)\\,dx',
    },
    exercise: {
      id: 'tc_m_num_l10_p02_q05',
      type: 'mcq',
      prompt: 'Sachant que $x \\mapsto \\cos(2x)$ est $\\pi$-périodique, que vaut $\\int_{\\pi/2}^{3\\pi/2} \\cos(2x)\\,dx$ ?',
      options: ['$2$', '$1$', '$0$', '$-1$'],
      correctAnswerIndex: 2,
      explanation: 'L’intervalle $[\\frac{\\pi}{2} ; \\frac{3\\pi}{2}]$ a pour longueur $\\pi = T$, donc l’intégrale vaut $\\int_0^{\\pi} \\cos(2x)\\,dx = \\left[\\frac{1}{2}\\sin(2x)\\right]_0^{\\pi} = 0$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur fatale',
    stepTheme: 'orange',
    stepTitle: 'L’intégrale d’un produit N’EST PAS le produit des intégrales !',
    paragraphText:
      'Attention : si l’intégrale est linéaire pour la somme et les constantes, elle n’est **ni multiplicative, ni compatible avec les quotients** ! En général, $\\int_a^b f(x)g(x)\\,dx \\ne \\left(\\int_a^b f(x)\\,dx\\right)\\left(\\int_a^b g(x)\\,dx\\right)$. Pour un produit, il faut linéariser, reconnaître une dérivée composée ou intégrer par parties.',
    konanTip: 'Teste avec $f(x) = g(x) = x$ sur $[0 ; 1]$ : $\\int_0^1 x^2\\,dx = \\frac{1}{3}$ alors que $(\\int_0^1 x\\,dx)^2 = (\\frac{1}{2})^2 = \\frac{1}{4}$.',
    exercise: {
      id: 'tc_m_num_l10_p02_q06',
      type: 'mcq',
      prompt: 'Quelle égalité est FAUSSE en général ?',
      options: [
        '$\\int_a^b (f+g)(x)\\,dx = \\int_a^b f(x)\\,dx + \\int_a^b g(x)\\,dx$',
        '$\\int_a^b 5f(x)\\,dx = 5\\int_a^b f(x)\\,dx$',
        '$\\int_a^b f(x)g(x)\\,dx = \\left(\\int_a^b f(x)\\,dx\\right)\\left(\\int_a^b g(x)\\,dx\\right)$',
        '$\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx$',
      ],
      correctAnswerIndex: 2,
      explanation: 'L’intégrale est linéaire, pas multiplicative : on ne peut jamais casser l’intégrale d’un produit en produit de deux intégrales.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Réflexe calcul',
    stepTheme: 'green',
    stepTitle: 'Simplifier une intégrale avant de chercher une primitive',
    paragraphText:
      'Avant de te lancer dans une intégration compliquée : (1) vérifie si les bornes sont égales ($\\to 0$) ; (2) si les bornes sont opposées $[-a ; a]$, décompose $f$ en somme paire $+$ impaire (la partie impaire disparaît !) ; (3) regarde si l’amplitude vaut une période $T$ ou $kT$. Ex. 10 p.13 : $\\int_{\\pi/2}^{5\\pi/2} \\cos x\\,dx = \\int_0^{2\\pi} \\cos x\\,dx = 0$ immédiatement !',
    exercise: {
      id: 'tc_m_num_l10_p02_q07',
      type: 'mcq',
      prompt: 'Que vaut $\\int_{-1}^1 (x^5 + 3x^3 - 7x + 2)\\,dx$ ?',
      options: ['$0$', '$4$', '$2$', '$-4$'],
      correctAnswerIndex: 1,
      explanation: '$x^5 + 3x^3 - 7x$ est impaire sur $[-1 ; 1]$, son intégrale est $0$. Il ne reste que $\\int_{-1}^1 2\\,dx = 2 \\times 2 = 4$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Positivité et comparaison',
    stepTheme: 'violet',
    stepTitle: 'Positivité et conservation des inégalités (avec $a \\leqslant b$)',
    paragraphText:
      'Soient $f$ et $g$ continues sur $[a ; b]$ **avec $a \\leqslant b$** : (1) Si $f \\geqslant 0$ sur $[a ; b]$, alors $\\int_a^b f(x)\\,dx \\geqslant 0$. (2) Si $f \\leqslant g$ sur $[a ; b]$, alors $\\int_a^b f(x)\\,dx \\leqslant \\int_a^b g(x)\\,dx$. Exemples du cours : $\\int_{-2}^7 x^2\\,dx \\geqslant 0$ car $x^2 \\geqslant 0$ ; $\\int_0^1 (x^2 + 1)\\,dx \\geqslant \\int_0^1 2x\\,dx$ car $x^2 + 1 - 2x = (x-1)^2 \\geqslant 0$.',
    formula: {
      name: 'Comparaison d’intégrales (a ≤ b)',
      formula: '(\\forall x \\in [a;b],\\; f(x) \\leqslant g(x)) \\implies \\int_a^b f(x)\\,dx \\leqslant \\int_a^b g(x)\\,dx',
    },
    exercise: {
      id: 'tc_m_num_l10_p03_q01',
      type: 'mcq',
      prompt: 'Comment prouve-t-on sans calcul que $\\int_0^{\\pi} x^2 \\cos x\\,dx \\leqslant \\int_0^{\\pi} x^2\\,dx$ (Ex. 4 p.12) ?',
      options: [
        'En intégrant deux fois par parties',
        'Car pour tout $x \\in [0 ; \\pi]$, $\\cos x \\leqslant 1$ et $x^2 \\geqslant 0$, donc $x^2 \\cos x \\leqslant x^2$',
        'Car $x^2 \\cos x$ est impaire',
        'Car les bornes sont $[0 ; \\pi]$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Puisque $x^2 \\geqslant 0$ et $\\cos x \\leqslant 1$, on a $x^2\\cos x \\leqslant x^2$ sur $[0 ; \\pi]$ avec $0 \\leqslant \\pi$, d’où l’inégalité entre intégrales.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'piege',
    stepBadge: 'Attention aux bornes !',
    stepTheme: 'orange',
    stepTitle: 'Les propriétés de comparaison exigent $a \\leqslant b$ !',
    paragraphText:
      'Piège classique : la positivité et la conservation de l’ordre ne sont vraies que si la borne du bas $a$ est inférieure ou égale à la borne du haut $b$ ! Si $b < a$ et $f \\geqslant 0$, alors $\\int_a^b f(x)\\,dx = -\\int_b^a f(x)\\,dx \\leqslant 0$ (le sens s’inverse !). Vérifie toujours l’ordre des bornes avant de comparer.',
    konanTip: 'Toujours écrire « comme $a \\leqslant b$ et pour tout $x \\in [a ; b]$, $f(x) \\leqslant g(x)$… » pour sécuriser les points de rédaction au Bac.',
    exercise: {
      id: 'tc_m_num_l10_p03_q02',
      type: 'mcq',
      prompt: 'Si $f(x) \\geqslant 0$ pour tout $x \\in [1 ; 5]$, quel est le signe de $\\int_5^1 f(x)\\,dx$ ?',
      options: [
        'Positif ou nul',
        'Négatif ou nul car la borne inférieure ($5$) est plus grande que la borne supérieure ($1$)',
        'Toujours nul',
        'On ne peut rien dire',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\int_5^1 f(x)\\,dx = -\\int_1^5 f(x)\\,dx \\leqslant 0$ puisque $\\int_1^5 f(x)\\,dx \\geqslant 0$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Inégalité de la moyenne',
    stepTheme: 'violet',
    stepTitle: 'Inégalité de la moyenne (deux formes)',
    paragraphText:
      'Soit $f$ continue sur $[a ; b]$ ($a \\leqslant b$), et soient $m, M \\in \\mathbb{R}$. Forme 1 : si $m \\leqslant f(x) \\leqslant M$ sur $[a ; b]$, alors $m(b - a) \\leqslant \\int_a^b f(x)\\,dx \\leqslant M(b - a)$. Forme 2 (en valeur absolue, avec $M \\geqslant 0$) : si $|f(x)| \\leqslant M$ sur $[a ; b]$, alors $\\left|\\int_a^b f(x)\\,dx\\right| \\leqslant \\int_a^b |f(x)|\\,dx \\leqslant M(b - a)$.',
    formula: {
      name: 'Inégalité de la moyenne (a ≤ b)',
      formula: 'm \\leqslant f \\leqslant M \\implies m(b-a) \\leqslant \\int_a^b f(x)\\,dx \\leqslant M(b-a)',
    },
    exercise: {
      id: 'tc_m_num_l10_p03_q03',
      type: 'mcq',
      prompt: 'Sachant que $\\forall x \\in [\\frac{\\pi}{4} ; \\frac{\\pi}{2}],\\; 1 \\leqslant \\frac{1}{\\sin x} \\leqslant \\sqrt{2}$, quel encadrement donne l’inégalité de la moyenne pour $\\int_{\\pi/4}^{\\pi/2} \\frac{1}{\\sin x}\\,dx$ ?',
      options: [
        '$\\frac{\\pi}{2} \\leqslant I \\leqslant \\frac{\\pi\\sqrt{2}}{2}$',
        '$\\frac{\\pi}{4} \\leqslant I \\leqslant \\frac{\\pi\\sqrt{2}}{4}$',
        '$1 \\leqslant I \\leqslant \\sqrt{2}$',
        '$0 \\leqslant I \\leqslant \\frac{\\pi}{4}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’amplitude vaut $b - a = \\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4}$. Donc $1\\times\\frac{\\pi}{4} \\leqslant I \\leqslant \\sqrt{2}\\times\\frac{\\pi}{4}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice type Bac',
    stepTheme: 'slate',
    stepTitle: 'Encadrer $\\tan b - \\tan a$ par l’inégalité de la moyenne (Ex. 5 p.12)',
    paragraphText:
      'Soient $0 \\leqslant a < b < \\frac{\\pi}{2}$. Comme $\\cos$ est positive et décroissante sur $[0 ; \\frac{\\pi}{2}[$, pour tout $x \\in [a ; b]$ on a $\\cos b \\leqslant \\cos x \\leqslant \\cos a$, d’où $\\frac{1}{\\cos^2 a} \\leqslant \\frac{1}{\\cos^2 x} \\leqslant \\frac{1}{\\cos^2 b}$. En intégrant sur $[a ; b]$ (et en sachant que $\\int_a^b \\frac{dx}{\\cos^2 x} = [\\tan x]_a^b = \\tan b - \\tan a$), on obtient $\\frac{b - a}{\\cos^2 a} \\leqslant \\tan b - \\tan a \\leqslant \\frac{b - a}{\\cos^2 b}$.',
    formula: {
      name: 'Encadrement de tan b − tan a',
      formula: '\\frac{b - a}{\\cos^2 a} \\leqslant \\tan b - \\tan a \\leqslant \\frac{b - a}{\\cos^2 b}',
    },
    exercise: {
      id: 'tc_m_num_l10_p03_q04',
      type: 'mcq',
      prompt: 'Quel outil permet de passer de $\\frac{1}{\\cos^2 a} \\leqslant \\frac{1}{\\cos^2 x} \\leqslant \\frac{1}{\\cos^2 b}$ à $\\frac{b-a}{\\cos^2 a} \\leqslant \\tan b - \\tan a \\leqslant \\frac{b-a}{\\cos^2 b}$ ?',
      options: [
        'Une intégration par parties',
        'L’inégalité de la moyenne et la primitive $\\tan x$ de $\\frac{1}{\\cos^2 x}$',
        'La parité de $\\cos x$',
        'Un changement de variable $t = \\cos x$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En intégrant l’encadrement entre $a$ et $b$ avec $x \\mapsto \\tan x$ comme primitive de $\\frac{1}{\\cos^2 x}$, l’inégalité de la moyenne donne exactement ce résultat.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'definition',
    stepBadge: 'Valeur moyenne',
    stepTheme: 'blue',
    stepTitle: 'Valeur moyenne $\\mu$ d’une fonction sur $[a ; b]$',
    paragraphText:
      'Soit $f$ une fonction continue sur un intervalle $[a ; b]$ avec $a < b$. On appelle **valeur moyenne** de $f$ sur $[a ; b]$ le nombre réel $\\mu = \\frac{1}{b - a}\\int_a^b f(x)\\,dx$. Géométriquement (lorsque $f \\geqslant 0$), $\\mu$ est la hauteur du rectangle de base $(b - a)$ ayant exactement la même aire que la surface sous $(\\mathcal{C}_f)$ : $\\int_a^b f(x)\\,dx = \\mu \\times (b - a)$.',
    formula: {
      name: 'Valeur moyenne sur [a ; b]',
      formula: '\\mu = \\frac{1}{b - a}\\int_a^b f(x)\\,dx',
    },
    exercise: {
      id: 'tc_m_num_l10_p03_q05',
      type: 'mcq',
      prompt: 'Quelle est la valeur moyenne de $f(x) = x - \\sin x$ sur $[0 ; \\pi]$ (exercice du cours p.5–6) ?',
      options: ['$\\frac{\\pi^2 - 4}{2}$', '$\\frac{\\pi^2 - 4}{2\\pi}$', '$\\frac{\\pi}{2}$', '$\\frac{\\pi^2 - 2}{2\\pi}$'],
      correctAnswerIndex: 1,
      explanation: '$\\mu = \\frac{1}{\\pi}\\left[\\frac{1}{2}x^2 + \\cos x\\right]_0^{\\pi} = \\frac{1}{\\pi}\\left(\\left(\\frac{\\pi^2}{2} - 1\\right) - (0 + 1)\\right) = \\frac{\\pi^2 - 4}{2\\pi}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Calcul de moyenne',
    stepTheme: 'slate',
    stepTitle: 'Calculer une valeur moyenne avec parité (Ex. 6 p.12)',
    paragraphText:
      'Soit $f(x) = 3x + \\cos x$ sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$. La largeur de l’intervalle vaut $\\frac{\\pi}{2} - \\left(-\\frac{\\pi}{2}\\right) = \\pi$. Par linéarité et parité sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$, $\\int_{-\\pi/2}^{\\pi/2} 3x\\,dx = 0$ (impaire) et $\\int_{-\\pi/2}^{\\pi/2} \\cos x\\,dx = [\\sin x]_{-\\pi/2}^{\\pi/2} = 1 - (-1) = 2$. Donc $\\mu = \\frac{2}{\\pi}$.',
    exercise: {
      id: 'tc_m_num_l10_p03_q06',
      type: 'mcq',
      prompt: 'Quelle est la valeur moyenne de $f(x) = 3x + \\cos x$ sur $\\left[-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right]$ ?',
      options: ['$2$', '$\\frac{2}{\\pi}$', '$\\frac{4}{\\pi}$', '$0$'],
      correctAnswerIndex: 1,
      explanation: '$\\int_{-\\pi/2}^{\\pi/2} (3x + \\cos x)\\,dx = 0 + 2 = 2$, et on divise par l’amplitude $\\pi$ : $\\mu = \\frac{2}{\\pi}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Comparer sans calculer',
    stepTheme: 'green',
    stepTitle: 'Méthode pour encadrer ou minorer une intégrale non calculable',
    paragraphText:
      'Beaucoup de fonctions ($\\frac{e^t}{t}$, $e^{-x^2}$, $\\frac{1}{\\sin x}$) n’ont pas de primitive usuelle ! Pour en étudier la limite ou le signe (comme dans l’Exercice 2 p.14 sur $F(x) = \\int_1^x \\frac{e^t}{t}\\,dt$), on encadre d’abord l’intégrande sur $[a ; b]$ (ex : $\\frac{e^t}{t} \\geqslant \\frac{e^t}{x}$ pour $1 \\leqslant t \\leqslant x$), puis on intègre membre à membre.',
    exercise: {
      id: 'tc_m_num_l10_p03_q07',
      type: 'mcq',
      prompt: 'Si $x > 1$ et $t \\in [1 ; x]$, pourquoi a-t-on $\\frac{e^t}{t} \\geqslant \\frac{e^t}{x}$ ?',
      options: [
        'Car $1 \\leqslant t \\leqslant x \\implies \\frac{1}{t} \\geqslant \\frac{1}{x}$, et $e^t > 0$',
        'Car $e^t$ est décroissante',
        'Car $t \\geqslant x$',
        'Car $\\ln t \\geqslant \\ln x$',
      ],
      correctAnswerIndex: 0,
      explanation: 'La fonction inverse est décroissante sur $]0 ; +\\infty[$ donc $0 < t \\leqslant x \\implies \\frac{1}{t} \\geqslant \\frac{1}{x}$ ; multiplier par $e^t > 0$ conserve le sens.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Forme u’/u',
    stepTheme: 'green',
    stepTitle: 'Reconnaître $\\frac{u’(x)}{u(x)}$ et intégrer vers $\\ln|u(x)|$',
    paragraphText:
      'Dès qu’une fraction a au numérateur la dérivée (ou un multiple de la dérivée) du dénominateur, on reconnaît $\\frac{u’(x)}{u(x)}$ dont une primitive est $\\ln|u(x)|$ (sur un intervalle où $u$ ne s’annule pas). Exemple 1 du cours : pour $I = \\int_0^1 \\frac{e^x}{1 + e^x}\\,dx$, on pose $u(x) = 1 + e^x > 0$ ($u’(x) = e^x$). Donc $I = [\\ln(1 + e^x)]_0^1 = \\ln(1+e) - \\ln 2 = \\ln\\left(\\frac{1+e}{2}\\right)$.',
    formula: {
      name: 'Intégrale de u’/u',
      formula: '\\int_a^b \\frac{u’(x)}{u(x)}\\,dx = \\Big[\\ln|u(x)|\\Big]_a^b',
    },
    exercise: {
      id: 'tc_m_num_l10_p04_q01',
      type: 'mcq',
      prompt: 'Que vaut $\\int_{\\pi/4}^{\\pi/3} \\frac{\\cos x}{\\sin x}\\,dx$ (Ex. 7 p.12) ?',
      options: [
        '$\\ln(\\sqrt{3})$',
        '$\\frac{1}{2}\\ln\\left(\\frac{3}{2}\\right)$',
        '$\\ln(2)$',
        '$-\\frac{1}{2}\\ln\\left(\\frac{3}{2}\\right)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{\\cos x}{\\sin x} = \\frac{u’(x)}{u(x)}$ avec $u(x) = \\sin x > 0$. Ainsi $[\\ln(\\sin x)]_{\\pi/4}^{\\pi/3} = \\ln\\frac{\\sqrt{3}}{2} - \\ln\\frac{\\sqrt{2}}{2} = \\ln\\sqrt{\\frac{3}{2}} = \\frac{1}{2}\\ln\\frac{3}{2}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Forme u’ e^u',
    stepTheme: 'slate',
    stepTitle: 'Intégrer $u’(x) e^{u(x)}$ (Exemple 2 et Ex. 1 p.12)',
    paragraphText:
      'Pour $J = \\int_0^1 x e^{x^2}\\,dx$, la dérivée de l’exposant $u(x) = x^2$ est $u’(x) = 2x$, donc $x e^{x^2} = \\frac{1}{2}(2x)e^{x^2} = \\frac{1}{2}u’(x)e^{u(x)}$. On obtient $J = \\left[\\frac{1}{2}e^{x^2}\\right]_0^1 = \\frac{e - 1}{2}$. De même, pour $\\int_0^{\\pi/4} (\\cos x + 2x)e^{\\sin x + x^2}\\,dx$, on reconnaît directement $u’(x)e^{u(x)}$ avec $u(x) = \\sin x + x^2$ !',
    formula: {
      name: 'Intégrale de u’ e^u',
      formula: '\\int_a^b u’(x)\\,e^{u(x)}\\,dx = \\Big[e^{u(x)}\\Big]_a^b',
    },
    exercise: {
      id: 'tc_m_num_l10_p04_q02',
      type: 'mcq',
      prompt: 'Que vaut $J = \\int_0^1 x e^{x^2}\\,dx$ ?',
      options: ['$e - 1$', '$\\frac{e - 1}{2}$', '$\\frac{e}{2}$', '$2(e - 1)$'],
      correctAnswerIndex: 1,
      explanation: 'Une primitive de $x e^{x^2}$ est $\\frac{1}{2}e^{x^2}$, d’où $\\frac{1}{2}(e^1 - e^0) = \\frac{e - 1}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Forme u’ u^α',
    stepTheme: 'green',
    stepTitle: 'Intégrer $u’ u^n$, $\\frac{u’}{\\sqrt{u}}$ et $\\frac{u’}{u^n}$',
    paragraphText:
      'Pour tout $\\alpha \\ne -1$, une primitive de $u’ u^{\\alpha}$ est $\\frac{u^{\\alpha+1}}{\\alpha+1}$. Cas fréquents du PDF : (1) $\\frac{u’}{2\\sqrt{u}} \\to \\sqrt{u}$, donc $\\int_1^e \\frac{\\sqrt{\\ln z + 2}}{z}\\,dz = \\int_1^e \\frac{1}{z}(\\ln z + 2)^{1/2}\\,dz = \\left[\\frac{2}{3}(\\ln z + 2)^{3/2}\\right]_1^e = \\frac{2}{3}(3\\sqrt{3} - 2\\sqrt{2})$ ; (2) $\\int_{-2}^1 \\frac{2t^3 - t}{(t^4 - t^2 + 3)^4}\\,dt = \\frac{1}{2}\\int_{-2}^1 \\frac{4t^3 - 2t}{(t^4 - t^2 + 3)^4}\\,dt = \\left[-\\frac{1}{6(t^4 - t^2 + 3)^3}\\right]_{-2}^1$.',
    formula: {
      name: 'Puissance composée',
      formula: '\\int_a^b u’(x)\\,(u(x))^{\\alpha}\\,dx = \\left[\\frac{(u(x))^{\\alpha+1}}{\\alpha+1}\\right]_a^b \\quad (\\alpha \\ne -1)',
    },
    exercise: {
      id: 'tc_m_num_l10_p04_q03',
      type: 'mcq',
      prompt: 'Que vaut $\\int_0^1 x\\sqrt{1 - x^2}\\,dx$ (exercices de renforcement p.13) ?',
      options: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$-\\frac{1}{3}$'],
      correctAnswerIndex: 1,
      explanation: 'Posons $u(x) = 1 - x^2$, $u’(x) = -2x$. Alors $x\\sqrt{1 - x^2} = -\\frac{1}{2}u’ u^{1/2}$, de primitive $-\\frac{1}{2}\\cdot\\frac{2}{3}(1-x^2)^{3/2} = -\\frac{1}{3}(1-x^2)^{3/2}$. Entre $0$ et $1$ : $0 - (-\\frac{1}{3}) = \\frac{1}{3}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Trigonométrie',
    stepTheme: 'slate',
    stepTitle: 'Intégrer des puissances impaires de $\\cos$ ou $\\sin$ (Ex. 3 p.6 & p.12)',
    paragraphText:
      'Pour calculer $K = \\int_0^{\\pi/3} \\cos^3 t\\,dt$, on utilise $\\cos^2 t = 1 - \\sin^2 t$ pour isoler un $\\cos t$ : $\\cos^3 t = \\cos t - \\cos t\\sin^2 t$. Or $\\cos t\\sin^2 t$ est de la forme $u’ u^2$ avec $u(t) = \\sin t$ ($u’(t) = \\cos t$) ! Donc une primitive est $\\sin t - \\frac{1}{3}\\sin^3 t$. En $t = \\frac{\\pi}{3}$ : $\\frac{\\sqrt{3}}{2} - \\frac{1}{3}\\left(\\frac{3\\sqrt{3}}{8}\\right) = \\frac{3\\sqrt{3}}{8}$.',
    formula: {
      name: 'Astuce cos³ ou sin³',
      formula: '\\cos^3 t = \\cos t - (\\sin t)’\\sin^2 t \\implies \\int \\cos^3 t\\,dt = \\sin t - \\frac{\\sin^3 t}{3}',
    },
    exercise: {
      id: 'tc_m_num_l10_p04_q04',
      type: 'mcq',
      prompt: 'Que vaut $\\int_0^{\\pi/3} -4\\cos^3 t\\,dt$ (Ex. 3 p.12) ?',
      options: ['$-\\frac{3\\sqrt{3}}{2}$', '$\\frac{3\\sqrt{3}}{2}$', '$-2\\sqrt{3}$', '$-\\frac{\\sqrt{3}}{2}$'],
      correctAnswerIndex: 0,
      explanation: 'Comme $\\int_0^{\\pi/3}\\cos^3 t\\,dt = \\frac{3\\sqrt{3}}{8}$, en multipliant par $-4$ on obtient $-4 \\times \\frac{3\\sqrt{3}}{8} = -\\frac{3\\sqrt{3}}{2}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Logarithme caché',
    stepTheme: 'slate',
    stepTitle: 'Intégrer $\\frac{1}{x(\\ln x)^2}$ et $\\cos^5 t \\sin^5 t$',
    paragraphText:
      'Deux intégrales phares de la p.13 : (1) $\\int_e^{e^2} \\frac{1}{x(\\ln x)^2}\\,dx$ se lit $\\int_e^{e^2} (\\ln x)’(\\ln x)^{-2}\\,dx = \\left[-\\frac{1}{\\ln x}\\right]_e^{e^2} = -\\frac{1}{2} - (-1) = \\frac{1}{2}$. (2) $\\cos^5 t \\sin^5 t = \\left(\\frac{\\sin 2t}{2}\\right)^5 = \\frac{1}{32}\\sin^5(2t)$, ou bien on écrit $\\sin^5 t (1 - \\sin^2 t)^2 \\cos t$ avec $u = \\sin t$ : $\\left[\\frac{\\sin^6 t}{6} - \\frac{2\\sin^8 t}{8} + \\frac{\\sin^{10} t}{10}\\right]$.',
    exercise: {
      id: 'tc_m_num_l10_p04_q05',
      type: 'mcq',
      prompt: 'Que vaut $\\int_e^{e^2} \\frac{1}{x(\\ln x)^2}\\,dx$ ?',
      options: ['$1$', '$\\frac{1}{2}$', '$-\\frac{1}{2}$', '$\\ln 2$'],
      correctAnswerIndex: 1,
      explanation: 'Avec $u(x) = \\ln x$, $u’(x) = \\frac{1}{x}$, une primitive de $u’/u^2$ est $-\\frac{1}{u} = -\\frac{1}{\\ln x}$. Entre $e$ et $e^2$ : $-\\frac{1}{2} - (-1) = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur de dérivation',
    stepTheme: 'orange',
    stepTitle: 'Attention au signe dans la primitive de $\\cos(ax)$ et $\\sin(ax)$',
    paragraphText:
      'On confond souvent dériver et primitiver : la dérivée de $\\cos x$ est $-\\sin x$, donc une **primitive de $\\sin x$ est $-\\cos x$** (avec un moins !) et une **primitive de $\\cos x$ est $+\\sin x$** (sans moins). Avec un facteur $a \\ne 0$, on divise par $a$ : primitive de $\\cos(ax)$ est $\\frac{1}{a}\\sin(ax)$, primitive de $\\sin(ax)$ est $-\\frac{1}{a}\\cos(ax)$.',
    konanTip: 'Toujours redériver mentalement ta primitive : si tu dérives $\\frac{1}{a}\\sin(ax)$, tu retrouves bien $\\cos(ax)$.',
    exercise: {
      id: 'tc_m_num_l10_p04_q06',
      type: 'mcq',
      prompt: 'Quelle est une primitive de $t \\mapsto \\sin(2t)$ sur $\\mathbb{R}$ ?',
      options: ['$\\frac{1}{2}\\cos(2t)$', '$-\\frac{1}{2}\\cos(2t)$', '$-2\\cos(2t)$', '$2\\cos(2t)$'],
      correctAnswerIndex: 1,
      explanation: 'La dérivée de $-\\frac{1}{2}\\cos(2t)$ est $-\\frac{1}{2}(-2\\sin(2t)) = \\sin(2t)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Degré numérateur ≥ dénominateur',
    stepTheme: 'green',
    stepTitle: 'Réduire une fraction rationnelle avant d’intégrer (Ex. p.13)',
    paragraphText:
      'Pour calculer $\\int_{-4}^{-2} \\frac{t^2 + 3t - 2}{t + 1}\\,dt$, le degré du numérateur ($2$) dépasse celui du dénominateur ($1$). On effectue une division euclidienne par $t + 1$ : $t^2 + 3t - 2 = (t + 1)(t + 2) - 4$. Ainsi $\\frac{t^2 + 3t - 2}{t + 1} = t + 2 - \\frac{4}{t + 1}$, dont une primitive sur $[-4 ; -2]$ (où $t+1 < 0$ !) est $\\frac{t^2}{2} + 2t - 4\\ln|t + 1| = \\frac{t^2}{2} + 2t - 4\\ln(-t - 1)$.',
    exercise: {
      id: 'tc_m_num_l10_p04_q07',
      type: 'mcq',
      prompt: 'Pour $t \\in [-4 ; -2]$, quelle est une primitive de $\\frac{1}{t + 1}$ ?',
      options: ['$\\ln(t + 1)$', '$\\ln|t + 1| = \\ln(-t - 1)$', '$-\\frac{1}{(t+1)^2}$', '$\\ln(t - 1)$'],
      correctAnswerIndex: 1,
      explanation: 'Sur $[-4 ; -2]$, $t + 1 \\in [-3 ; -1]$ est strictement négatif : $\\ln(t+1)$ n’existe pas, il faut impérativement écrire $\\ln|t + 1| = \\ln(-t - 1)$ !',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Intégration par parties',
    stepTheme: 'violet',
    stepTitle: 'Formule de l’intégration par parties (IPP)',
    paragraphText:
      'Soient $u$ et $v$ deux fonctions dérivables sur $[a ; b]$ dont les dérivées $u’$ et $v’$ sont continues sur $[a ; b]$. En intégrant $(uv)’ = u’v + uv’$, on obtient la formule d’**intégration par parties** : $\\int_a^b u(x)v’(x)\\,dx = \\left[u(x)v(x)\\right]_a^b - \\int_a^b u’(x)v(x)\\,dx$. Elle transforme un produit difficile en un autre plus simple.',
    formula: {
      name: 'Intégration par parties (IPP)',
      formula: '\\int_a^b u(x)v’(x)\\,dx = \\Big[u(x)v(x)\\Big]_a^b - \\int_a^b u’(x)v(x)\\,dx',
    },
    exercise: {
      id: 'tc_m_num_l10_p05_q01',
      type: 'mcq',
      prompt: 'Quelle identité de dérivation permet de démontrer la formule d’intégration par parties ?',
      options: [
        '$(u + v)’ = u’ + v’$',
        '$(uv)’ = u’v + uv’$',
        '$(u/v)’ = \\frac{u’v - uv’}{v^2}$',
        '$(v \\circ u)’ = u’ \\cdot (v’ \\circ u)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En intégrant $uv’ = (uv)’ - u’v$ entre $a$ et $b$, on retrouve directement $[uv]_a^b - \\int_a^b u’v$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Choix de u et v’',
    stepTheme: 'green',
    stepTitle: 'Règle « ALPES » pour bien choisir $u(x)$ à dériver',
    paragraphText:
      'Dans une IPP, on choisit $u(x)$ comme la fonction que l’on préfère **dériver** (car elle se simplifie : $\\ln x \\to \\frac{1}{x}$, polynôme $x^n \\to nx^{n-1}$), et $v’(x)$ comme celle qu’on sait facilement **primitiver** ($e^x$, $\\cos x$, $\\sin x$, $x^n$). Règle mnémotechnique **ALPES** par ordre de priorité pour $u$ : **A**rctan/Arcsin, **L**ogarithme ($\\ln$), **P**olynôme ($x, x^2$), **E**xponentielle ($e^x$), **S**inus/Cosinus.',
    konanTip: 'Si le produit contient $\\ln x$, mets TOUJOURS $u(x) = \\ln x$ (car la dérivée $\\frac{1}{x}$ fait disparaître le logarithme !).',
    exercise: {
      id: 'tc_m_num_l10_p05_q02',
      type: 'mcq',
      prompt: 'Pour calculer $I = \\int_1^e x^2 \\ln x\\,dx$ par parties (exercice du cours p.6–7), quel choix de $u$ et $v’$ faut-il faire ?',
      options: [
        '$u(x) = x^2$ et $v’(x) = \\ln x$',
        '$u(x) = \\ln x$ et $v’(x) = x^2$',
        '$u(x) = x$ et $v’(x) = x\\ln x$',
        '$u(x) = 1$ et $v’(x) = x^2 \\ln x$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $u(x) = \\ln x$ ($u’(x) = \\frac{1}{x}$) et $v’(x) = x^2$ ($v(x) = \\frac{1}{3}x^3$), l’intégrande restant $u’v = \\frac{1}{3}x^2$ devient trivial !',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'IPP avec ln',
    stepTheme: 'slate',
    stepTitle: 'Calculer $\\int_1^e x^2 \\ln x\\,dx$ et $\\int_2^3 \\ln x\\,dx$',
    paragraphText:
      'Pour $I = \\int_1^e x^2 \\ln x\\,dx$ avec $u = \\ln x$ et $v’ = x^2$ : $I = \\left[\\frac{1}{3}x^3 \\ln x\\right]_1^e - \\int_1^e \\frac{1}{3}x^2\\,dx = \\frac{e^3}{3} - 0 - \\left[\\frac{1}{9}x^3\\right]_1^e = \\frac{e^3}{3} - \\frac{e^3 - 1}{9} = \\frac{2e^3 + 1}{9}$. Et pour $\\int_2^3 \\ln x\\,dx = \\int_2^3 1 \\cdot \\ln x\\,dx$ (astuce du $1$ caché !), on pose $u = \\ln x$, $v’ = 1$ ($v = x$), ce qui donne $[x\\ln x - x]_2^3 = 3\\ln 3 - 2\\ln 2 - 1$.',
    formula: {
      name: 'Primitive classique de ln x',
      formula: '\\int_a^b \\ln x\\,dx = \\Big[x\\ln x - x\\Big]_a^b',
    },
    exercise: {
      id: 'tc_m_num_l10_p05_q03',
      type: 'mcq',
      prompt: 'Que vaut $\\int_1^e \\ln x\\,dx$ ?',
      options: ['$e$', '$1$', '$e - 1$', '$0$'],
      correctAnswerIndex: 1,
      explanation: '$[x\\ln x - x]_1^e = (e\\cdot 1 - e) - (1\\cdot 0 - 1) = 0 - (-1) = 1$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Double IPP',
    stepTheme: 'slate',
    stepTitle: 'Double intégration par parties : $\\int_0^2 x^2 e^x\\,dx$ (Ex. 8 p.12)',
    paragraphText:
      'Avec un polynôme de degré $2$, une seule IPP abaisse le degré de $2$ à $1$, et une seconde IPP l’abaisse de $1$ à $0$ ! Pour $I = \\int_0^2 x^2 e^x\\,dx$ : (1) $u = x^2, v’ = e^x \\implies I = [x^2 e^x]_0^2 - 2\\int_0^2 x e^x\\,dx = 4e^2 - 2 J$. (2) Pour $J = \\int_0^2 x e^x\\,dx$, on pose $u = x, v’ = e^x \\implies J = [xe^x]_0^2 - \\int_0^2 e^x\\,dx = 2e^2 - (e^2 - 1) = e^2 + 1$. D’où $I = 4e^2 - 2(e^2 + 1) = 2e^2 - 2$.',
    exercise: {
      id: 'tc_m_num_l10_p05_q04',
      type: 'mcq',
      prompt: 'Que vaut $\\int_0^1 (x + 1)e^x\\,dx$ (Ex. 8 p.12) ?',
      options: ['$e$', '$e - 1$', '$2e - 1$', '$e + 1$'],
      correctAnswerIndex: 0,
      explanation: 'Avec $u(x) = x+1$ et $v’(x) = e^x$ : $[(x+1)e^x]_0^1 - \\int_0^1 e^x\\,dx = (2e - 1) - (e - 1) = e$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Changement de variable affine',
    stepTheme: 'green',
    stepTitle: 'Méthode du changement de variable affine $t = \\alpha x + \\beta$',
    paragraphText:
      'Pour calculer $\\int_a^b f(\\alpha x + \\beta)\\,dx$ ($\\alpha \\ne 0$), on pose $t = \\alpha x + \\beta$. Trois éléments se transforment ensemble : (1) la différentielle : $dt = \\alpha\\,dx \\implies dx = \\frac{1}{\\alpha}\\,dt$ ; (2) les bornes : quand $x = a$, $t = \\alpha a + \\beta$, et quand $x = b$, $t = \\alpha b + \\beta$ ; (3) l’intégrande devient $f(t)$. Ainsi $\\int_a^b f(\\alpha x + \\beta)\\,dx = \\int_{\\alpha a + \\beta}^{\\alpha b + \\beta} \\frac{f(t)}{\\alpha}\\,dt$.',
    formula: {
      name: 'Changement de variable affine',
      formula: '\\int_a^b f(\\alpha x + \\beta)\\,dx = \\frac{1}{\\alpha}\\int_{\\alpha a + \\beta}^{\\alpha b + \\beta} f(t)\\,dt',
    },
    exercise: {
      id: 'tc_m_num_l10_p05_q05',
      type: 'mcq',
      prompt: 'Dans $P = \\int_{-1}^0 \\frac{1}{\\sqrt{2x+3}}\\,dx$, si on pose $t = 2x + 3$, quelles deviennent les bornes en $t$ et le $dx$ ?',
      options: [
        'Bornes $1$ à $3$ et $dx = 2\\,dt$',
        'Bornes $1$ à $3$ et $dx = \\frac{1}{2}\\,dt$',
        'Bornes $-1$ à $0$ et $dx = \\frac{1}{2}\\,dt$',
        'Bornes $3$ à $1$ et $dx = \\frac{1}{2}\\,dt$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $x=-1$, $t = 2(-1)+3 = 1$ ; pour $x=0$, $t = 3$ ; et $dt = 2\\,dx \\implies dx = \\frac{1}{2}\\,dt$. On trouve $P = \\int_1^3 \\frac{dt}{2\\sqrt{t}} = [\\sqrt{t}]_1^3 = \\sqrt{3} - 1$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Application affine',
    stepTheme: 'slate',
    stepTitle: 'Exprimer aussi le numérateur en fonction de $t$ (Ex. 9 p.12)',
    paragraphText:
      'Pour calculer $I = \\int_0^1 x\\sqrt{x + 1}\\,dx$ par changement affine, on pose $t = x + 1$, d’où $x = t - 1$, $dx = dt$, et les bornes passent de $[0 ; 1]$ à $[1 ; 2]$. L’intégrale devient $I = \\int_1^2 (t - 1)\\sqrt{t}\\,dt = \\int_1^2 (t^{3/2} - t^{1/2})\\,dt = \\left[\\frac{2}{5}t^{5/2} - \\frac{2}{3}t^{3/2}\\right]_1^2 = \\frac{2}{15}(2\\sqrt{2} + 2)$ (ou $\\frac{4\\sqrt{2} + 4}{15}$).',
    exercise: {
      id: 'tc_m_num_l10_p05_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\int_{-5/2}^{-2} (2x + 5)^7\\,dx$ (Ex. 9 p.12) par changement affine $t = 2x + 5$ ?',
      options: ['$\\frac{1}{8}$', '$\\frac{1}{16}$', '$\\frac{1}{4}$', '$1$'],
      correctAnswerIndex: 1,
      explanation: 'Pour $x = -\\frac{5}{2}$, $t = 0$ ; pour $x = -2$, $t = 1$ ; $dx = \\frac{1}{2}dt$. Donc $\\int_0^1 \\frac{t^7}{2}\\,dt = \\left[\\frac{t^8}{16}\\right]_0^1 = \\frac{1}{16}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Piège changement de variable',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais oublier de changer LES BORNES et le $dx$ !',
    paragraphText:
      'Deux erreurs très fréquentes dans un changement de variable affine $t = \\alpha x + \\beta$ : (1) laisser les anciennes bornes $a$ et $b$ au lieu de calculer $\\alpha a + \\beta$ et $\\alpha b + \\beta$ ; (2) oublier de diviser par $\\alpha$ ($dx = \\frac{1}{\\alpha}dt$). Vérifie toujours les trois transformations : bornes, intégrande, $dx$.',
    exercise: {
      id: 'tc_m_num_l10_p05_q07',
      type: 'mcq',
      prompt: 'En posant $t = 3x - 4$ dans $\\int_{5/3}^2 \\frac{x^2}{(3x - 4)^5}\\,dx$ (p.13), quelles sont les nouvelles bornes en $t$ ?',
      options: ['$5/3$ et $2$', '$1$ et $2$', '$0$ et $2$', '$1$ et $6$'],
      correctAnswerIndex: 1,
      explanation: 'En $x = \\frac{5}{3}$, $t = 3\\times\\frac{5}{3} - 4 = 1$ ; en $x = 2$, $t = 3\\times 2 - 4 = 2$.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Fonction négative ou changeant de signe',
    stepTheme: 'violet',
    stepTitle: 'Aire lorsque $f \\leqslant 0$ ou change de signe sur $[a ; b]$',
    paragraphText:
      'Si $f$ est **négative** sur $[a ; b]$, la courbe est sous l’axe $(OI)$ donc $\\int_a^b f(x)\\,dx \\leqslant 0$ ; l’aire en u.a. vaut alors $\\mathcal{A} = -\\int_a^b f(x)\\,dx$. Si $f$ change de signe sur $[a ; b]$ (positive sur $[c ; d]$, négative sur $[a ; c]$ et $[d ; b]$), on **subdivise** $[a ; b]$ selon le signe de $f$ : $\\mathcal{A} = \\left(-\\int_a^c f(x)\\,dx + \\int_c^d f(x)\\,dx - \\int_d^b f(x)\\,dx\\right)\\text{ u.a.}$',
    formula: {
      name: 'Aire entre courbe et axe (OI)',
      formula: '\\mathcal{A} = \\int_a^b |f(x)|\\,dx \\;(\\text{u.a.})',
    },
    exercise: {
      id: 'tc_m_num_l10_p06_q01',
      type: 'mcq',
      prompt: 'Soit $f(x) = -x^2$ dans un repère orthogonal ($2\\text{ cm}$ sur $(OI)$, $4\\text{ cm}$ sur $(OJ)$). Quelle est l’aire en $\\text{cm}^2$ entre $(\\mathcal{C}_f)$, $(OI)$, $x = 1$ et $x = 3$ (Ex. 1 p.10) ?',
      options: ['$\\frac{26}{3}\\text{ cm}^2$', '$\\frac{208}{3}\\text{ cm}^2$', '$-\\frac{208}{3}\\text{ cm}^2$', '$\\frac{104}{3}\\text{ cm}^2$'],
      correctAnswerIndex: 1,
      explanation: 'Sur $[1 ; 3]$, $-x^2 \\leqslant 0$, donc $\\mathcal{A} = -\\int_1^3 (-x^2)\\,dx = [\\frac{x^3}{3}]_1^3 = 9 - \\frac{1}{3} = \\frac{26}{3}\\text{ u.a.}$ Avec $1\\text{ u.a.} = 2\\times 4 = 8\\text{ cm}^2$, $\\mathcal{A} = \\frac{26}{3} \\times 8 = \\frac{208}{3}\\text{ cm}^2$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Changement de signe',
    stepTheme: 'slate',
    stepTitle: 'Aire de $f(x) = x^3$ sur $[-1 ; 1]$ (Ex. 2 p.10–11)',
    paragraphText:
      'Pour $f(x) = x^3$ en repère orthonormé d’unité $2\\text{ cm}$ ($1\\text{ u.a.} = 2 \\times 2 = 4\\text{ cm}^2$) : $f(x) \\leqslant 0$ sur $[-1 ; 0]$ et $f(x) \\geqslant 0$ sur $[0 ; 1]$. Donc $\\mathcal{A} = \\left(-\\int_{-1}^0 x^3\\,dx + \\int_0^1 x^3\\,dx\\right) \\times 4 = \\left(-\\left[\\frac{x^4}{4}\\right]_{-1}^0 + \\left[\\frac{x^4}{4}\\right]_0^1\\right)\\times 4 = \\left(\\frac{1}{4} + \\frac{1}{4}\\right)\\times 4 = 2\\text{ cm}^2$.',
    exercise: {
      id: 'tc_m_num_l10_p06_q02',
      type: 'mcq',
      prompt: 'Que vaut l’aire (en unités d’aire) délimitée par $y = x^3$, l’axe $(OI)$ et les droites $x = -1$ et $x = 1$ ?',
      options: ['$0\\text{ u.a.}$', '$\\frac{1}{2}\\text{ u.a.}$', '$\\frac{1}{4}\\text{ u.a.}$', '$2\\text{ u.a.}$'],
      correctAnswerIndex: 1,
      explanation: 'En u.a., $\\mathcal{A} = \\frac{1}{4} + \\frac{1}{4} = \\frac{1}{2}\\text{ u.a.}$ (ce qui donne $2\\text{ cm}^2$ avec $1\\text{ u.a.} = 4\\text{ cm}^2$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Entre deux courbes',
    stepTheme: 'violet',
    stepTitle: 'Aire comprise entre deux courbes $(\\mathcal{C}_f)$ et $(\\mathcal{C}_g)$',
    paragraphText:
      'Soient $f$ et $g$ continues sur $[a ; b]$. L’aire délimitée par $(\\mathcal{C}_f)$, $(\\mathcal{C}_g)$, $x = a$ et $x = b$ est : (1) si $f \\leqslant g$ sur $[a ; b]$ (i.e. $\\mathcal{C}_g$ au-dessus de $\\mathcal{C}_f$), $\\mathcal{A} = \\int_a^b [g(x) - f(x)]\\,dx$ u.a. ; (2) si les deux courbes se croisent en $c \\in ]a ; b[$, on subdivise : courbe du haut moins courbe du bas sur chaque sous-intervalle !',
    formula: {
      name: 'Aire entre deux courbes',
      formula: '\\mathcal{A} = \\int_a^b |g(x) - f(x)|\\,dx \\;(\\text{u.a.})',
    },
    exercise: {
      id: 'tc_m_num_l10_p06_q03',
      type: 'mcq',
      prompt: 'Pour $f(x) = x + 2$ et $g(x) = x^2$ sur $[-1 ; 2]$ (Ex. 11 p.13, unité $2\\text{ cm}$), quelle courbe est au-dessus de l’autre sur $[-1 ; 2]$ ?',
      options: [
        '$(\\mathcal{C}_g)$ est au-dessus car $x^2 \\geqslant 0$',
        '$(\\mathcal{C}_f)$ est au-dessus car $x + 2 - x^2 = -(x+1)(x-2) \\geqslant 0$ sur $[-1 ; 2]$',
        'Elles se croisent en $x = 0$',
        '$(\\mathcal{C}_f)$ est en dessous sur $[0 ; 2]$',
      ],
      correctAnswerIndex: 1,
      explanation: '$f(x) - g(x) = -x^2 + x + 2 = (x + 1)(2 - x) \\geqslant 0$ pour tout $x \\in [-1 ; 2]$. Donc $(\\mathcal{C}_f)$ est toujours au-dessus de $(\\mathcal{C}_g)$ sur $[-1 ; 2]$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe corrigée',
    stepTheme: 'slate',
    stepTitle: 'Aire de la terrasse : parabole $y = -x^2 + 4$ + rectangle (p.11–12 corrigée !)',
    paragraphText:
      'Dans la Situation Complexe p.11, la terrasse (repère orthonormé unité $1\\text{ m}$) est formée : (1) d’un rectangle vert $2\\text{ m} \\times 4\\text{ m}$ d’aire $A_2 = 8\\text{ m}^2$ ; (2) d’une zone rose sous $y = -x^2 + 4$ entre $x = -2$ et $x = 2$. **Attention à la coquille du PDF p.12** qui écrivait $A_1 = 16$ ! Calcul exact : $A_1 = \\int_{-2}^2 (-x^2 + 4)\\,dx = 2\\int_0^2 (-x^2 + 4)\\,dx = 2\\left[-\\frac{x^3}{3} + 4x\\right]_0^2 = 2\\left(-\\frac{8}{3} + 8\\right) = \\frac{32}{3}\\text{ m}^2 \\approx 10{,}67\\text{ m}^2$. Aire totale $= \\frac{32}{3} + 8 = \\frac{56}{3}\\text{ m}^2 \\approx 18{,}67\\text{ m}^2$ !',
    visualSchema: {
      type: 'function_plot',
      title: 'Arche parabolique de la terrasse : $y = -x^2 + 4$',
      caption: 'Sur $[-2 ; 2]$, l’aire sous la parabole vaut exactement $\\frac{32}{3}\\text{ m}^2$ (et non $16$).',
      plot: {
        xMin: -3,
        xMax: 3,
        yMin: -2.5,
        yMax: 5,
        xStep: 1,
        yStep: 1,
        curves: [{ label: 'y=-x^2+4', color: 'violet', pieces: [{ expr: '-x^2+4', from: -2.2, to: 2.2 }] }],
        points: [
          { x: -2, y: 0, label: 'A(-2;0)', color: 'blue', filled: true },
          { x: 2, y: 0, label: 'B(2;0)', color: 'blue', filled: true },
          { x: 0, y: 4, label: 'E(0;4)', color: 'orange', filled: true },
        ],
        verticalLines: [
          { x: -2, color: 'slate' },
          { x: 2, color: 'slate' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l10_p06_q04',
      type: 'mcq',
      prompt: 'Quelle est l’aire exacte de la partie rose délimitée par la parabole $y = -x^2 + 4$ et l’axe $(OI)$ entre $A(-2 ; 0)$ et $B(2 ; 0)$ ?',
      options: ['$16\\text{ m}^2$', '$\\frac{32}{3}\\text{ m}^2$', '$\\frac{16}{3}\\text{ m}^2$', '$8\\text{ m}^2$'],
      correctAnswerIndex: 1,
      explanation: '$G(2) - G(-2) = (-\\frac{8}{3} + 8) - (\\frac{8}{3} - 8) = 16 - \\frac{16}{3} = \\frac{32}{3}\\text{ m}^2$ (le PDF avait fait une erreur de signe sur $-G(-2)$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Aire entre courbe et asymptote',
    stepTheme: 'slate',
    stepTitle: 'Aire entre $(\\mathcal{C})$ : $f(x) = x + 1 - e^x$ et son asymptote $(D)$ : $y = x + 1$ (p.13–14)',
    paragraphText:
      'Sur $\\mathbb{R}$, $f(x) - (x + 1) = -e^x < 0$, donc la droite $(D)$ d’équation $y = x + 1$ est strictement au-dessus de $(\\mathcal{C})$. Avec une unité graphique de $2\\text{ cm}$ ($1\\text{ u.a.} = 4\\text{ cm}^2$), l’aire entre $(\\mathcal{C})$, $(D)$, $x = -2$ et $x = 0$ vaut : $\\mathcal{A}(\\Delta) = \\left(\\int_{-2}^0 [(x+1) - f(x)]\\,dx\\right) \\times 4 = 4 \\int_{-2}^0 e^x\\,dx = 4\\left[e^x\\right]_{-2}^0 = 4(1 - e^{-2})\\text{ cm}^2$.',
    exercise: {
      id: 'tc_m_num_l10_p06_q05',
      type: 'mcq',
      prompt: 'Si l’on réduit à l’exercice 11 ($f(x) = x + 2$, $g(x) = x^2$, $[-1 ; 2]$, unité $2\\text{ cm}$), que vaut l’aire $\\mathcal{A}$ en $\\text{cm}^2$ ?',
      options: ['$\\frac{9}{2}\\text{ cm}^2$', '$18\\text{ cm}^2$', '$9\\text{ cm}^2$', '$36\\text{ cm}^2$'],
      correctAnswerIndex: 1,
      explanation: '$\\int_{-1}^2 (x + 2 - x^2)\\,dx = \\left[\\frac{x^2}{2} + 2x - \\frac{x^3}{3}\\right]_{-1}^2 = (2 + 4 - \\frac{8}{3}) - (\\frac{1}{2} - 2 + \\frac{1}{3}) = \\frac{10}{3} - (-\\frac{7}{6}) = \\frac{27}{6} = \\frac{9}{2}\\text{ u.a.}$ Multiplié par $1\\text{ u.a.} = 2\\times 2 = 4\\text{ cm}^2$, on obtient $18\\text{ cm}^2$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Oubli fréquent au Bac',
    stepTheme: 'orange',
    stepTitle: 'Repère orthogonal vs orthonormé : toujours calculer $1\\text{ u.a.} = OI \\times OJ$',
    paragraphText:
      'Quand l’énoncé demande l’aire « en $\\text{cm}^2$ », n’oublie jamais de multiplier l’intégrale (qui est en unités d’aire u.a.) par $OI \\times OJ$ ! Attention aussi si $OI \\ne OJ$ (repère simplement orthogonal, ex. $2\\text{ cm}$ et $4\\text{ cm} \\implies 8\\text{ cm}^2$), ou si l’unité est $2\\text{ cm}$ en repère orthonormé ($2 \\times 2 = 4\\text{ cm}^2$, et non $2\\text{ cm}^2$ !).',
    konanTip: 'Écris d’abord le résultat en $\\text{u.a.}$, puis écris explicitement « $1\\text{ u.a.} = OI \\times OJ = \\dots\\text{ cm}^2$ » avant de multiplier.',
    exercise: {
      id: 'tc_m_num_l10_p06_q06',
      type: 'mcq',
      prompt: 'Dans un repère orthonormé d’unité graphique $3\\text{ cm}$, si une aire vaut $\\frac{5}{2}\\text{ u.a.}$, que vaut-elle en $\\text{cm}^2$ ?',
      options: ['$\\frac{15}{2}\\text{ cm}^2$', '$\\frac{45}{2}\\text{ cm}^2$', '$\\frac{5}{2}\\text{ cm}^2$', '$15\\text{ cm}^2$'],
      correctAnswerIndex: 1,
      explanation: 'L’unité d’aire vaut $3\\text{ cm} \\times 3\\text{ cm} = 9\\text{ cm}^2$. Donc $\\mathcal{A} = \\frac{5}{2} \\times 9 = \\frac{45}{2}\\text{ cm}^2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Réflexe d’ordre',
    stepTheme: 'green',
    stepTitle: 'Position relative avant le calcul d’aire entre deux courbes',
    paragraphText:
      'Pour calculer l’aire entre $(\\mathcal{C}_f)$ et $(\\mathcal{C}_g)$ sur $[a ; b]$ : (1) étudie d’abord le signe de $f(x) - g(x)$ sur $[a ; b]$ ; (2) intègre toujours « fonction du haut $-$ fonction du bas » sur chaque intervalle où l’une domine l’autre ; (3) convertis en $\\text{cm}^2$ si demandé.',
    exercise: {
      id: 'tc_m_num_l10_p06_q07',
      type: 'mcq',
      prompt: 'Pour calculer l’aire entre deux courbes sur $[0 ; 2]$ sachant que $f(x) \\geqslant g(x)$ sur $[0 ; 1]$ et $f(x) \\leqslant g(x)$ sur $[1 ; 2]$, quelle expression est correcte (en u.a.) ?',
      options: [
        '$\\int_0^2 (f(x) - g(x))\\,dx$',
        '$\\int_0^1 (f(x) - g(x))\\,dx + \\int_1^2 (g(x) - f(x))\\,dx$',
        '$\\int_0^1 (g(x) - f(x))\\,dx + \\int_1^2 (f(x) - g(x))\\,dx$',
        '$\\left|\\int_0^2 (f(x) - g(x))\\,dx\\right|$',
      ],
      correctAnswerIndex: 1,
      explanation: 'On place toujours la courbe supérieure en premier : $f - g$ là où $f \\geqslant g$, et $g - f$ là où $g \\geqslant f$.',
    },
  },
];

const p07Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Primitive s’annulant en a',
    stepTheme: 'blue',
    stepTitle: 'La fonction $F : x \\mapsto \\int_a^x f(t)\\,dt$ et sa dérivée $F’(x) = f(x)$',
    paragraphText:
      'Soit $f$ une fonction continue sur un intervalle $K$ et $a \\in K$. La fonction $F$ définie sur $K$ par $F(x) = \\int_a^x f(t)\\,dt$ est l’**unique primitive** de $f$ sur $K$ qui **s’annule en $a$** ($F(a) = 0$). Par conséquent, $F$ est dérivable sur $K$ et pour tout $x \\in K$ : $F’(x) = f(x)$. Application immédiate : $\\ln(x) = \\int_1^x \\frac{1}{t}\\,dt$ sur $]0 ; +\\infty[$ car $\\ln’(x) = \\frac{1}{x}$ et $\\ln(1) = 0$.',
    formula: {
      name: 'Dérivation d’une fonction intégrale',
      formula: 'F(x) = \\int_a^x f(t)\\,dt \\implies F(a) = 0 \\quad \\text{et} \\quad \\forall x \\in K,\\; F’(x) = f(x)',
    },
    exercise: {
      id: 'tc_m_num_l10_p07_q01',
      type: 'mcq',
      prompt: 'Soit $F$ définie sur $\\mathbb{R}_+^*$ par $F(x) = \\int_1^x \\frac{e^t}{t}\\,dt$ (Ex. 2 p.14). Que valent $F(1)$ et $F’(x)$ ?',
      options: [
        '$F(1) = e$ et $F’(x) = \\frac{e^x}{x}$',
        '$F(1) = 0$ et $F’(x) = \\frac{e^x}{x}$',
        '$F(1) = 0$ et $F’(x) = \\frac{(x-1)e^x}{x^2}$',
        '$F(1) = 1$ et $F’(x) = \\ln x$',
      ],
      correctAnswerIndex: 1,
      explanation: '$F(1) = \\int_1^1 \\frac{e^t}{t}\\,dt = 0$, et comme $t \\mapsto \\frac{e^t}{t}$ est continue sur $]0 ; +\\infty[$, $F$ est dérivable et $F’(x) = \\frac{e^x}{x}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Signe de F(x)',
    stepTheme: 'violet',
    stepTitle: 'Signe de $\\int_a^x f(t)\\,dt$ quand $x < a$ ou $x > a$',
    paragraphText:
      'Attention à l’ordre des bornes dans $F(x) = \\int_a^x f(t)\\,dt$ lorsque $f(t) > 0$ sur $K$ : si $x > a$, alors $F(x) > 0$ ; si $x < a$, les bornes sont inversées, donc $F(x) = -\\int_x^a f(t)\\,dt < 0$ ! C’est exactement le cas dans l’Ex. 2 q3b (p.15) pour $f(x) = \\int_1^x \\frac{e^t - 1}{t}\\,dt$ : $\\frac{e^t - 1}{t} > 0$ sur $]0 ; +\\infty[$, donc $f(x) < 0$ sur $]0 ; 1[$ et $f(x) > 0$ sur $]1 ; +\\infty[$.',
    formula: {
      name: 'Signe selon la position de x par rapport à a (si f > 0)',
      formula: 'x > a \\implies \\int_a^x f(t)\\,dt > 0 \\qquad ; \\qquad x < a \\implies \\int_a^x f(t)\\,dt < 0',
    },
    exercise: {
      id: 'tc_m_num_l10_p07_q02',
      type: 'mcq',
      prompt: 'Sachant que $\\frac{e^t - 1}{t} > 0$ pour tout $t > 0$, quel est le signe de $f(x) = \\int_1^x \\frac{e^t - 1}{t}\\,dt$ pour $x \\in ]0 ; 1[$ ?',
      options: [
        'Strictement positif car l’intégrande est positif',
        'Strictement négatif car $x < 1$ (bornes inversées) et l’intégrande est $> 0$',
        'Nul',
        'On ne peut pas savoir',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $x < 1$, $\\int_1^x \\frac{e^t - 1}{t}\\,dt = -\\int_x^1 \\frac{e^t - 1}{t}\\,dt < 0$, ce qui prouve au passage que $F(x) < \\ln x$ sur $]0 ; 1[$ !',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Étude complète de F',
    stepTheme: 'slate',
    stepTitle: 'Limites et asymptote de $F(x) = \\int_1^x \\frac{e^t}{t}\\,dt$ (correction du PDF p.15–16 !)',
    paragraphText:
      'De $F(x) - \\ln x = \\int_1^x \\frac{e^t - 1}{t}\\,dt$, on déduit $F(x) < \\ln x$ sur $]0 ; 1[$ et $F(x) > \\ln x$ sur $]1 ; +\\infty[$. Par comparaison : $\\lim_{x \\to 0^+} F(x) = -\\infty$ (car $\\lim_{x \\to 0^+} \\ln x = -\\infty$ — **et NON $0$** comme écrit par coquille p.16 !), donc la droite $x = 0$ est bien **asymptote verticale** à $(\\mathcal{C}_F)$. De même $\\lim_{x \\to +\\infty} F(x) = +\\infty$, et via $\\frac{F(x)}{x} \\geqslant \\frac{e^x - e}{x^2} \\to +\\infty$, $(\\mathcal{C}_F)$ admet en $+\\infty$ une branche parabolique de direction $(OJ)$.',
    visualSchema: {
      type: 'variation_table',
      title: 'Tableau de variations corrigé de $F(x) = \\int_1^x \\frac{e^t}{t}\\,dt$',
      variation: {
        xLabel: 'x',
        fLabel: 'F(x)',
        xValues: ['0', '1', '+∞'],
        values: [
          { forbidden: true, right: { text: '−∞', level: 'bottom' } },
          { text: '0  (F′(1)=e)', level: 'middle' },
          { text: '+∞', level: 'top' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l10_p07_q03',
      type: 'mcq',
      prompt: 'Pour $F(x) = \\int_1^x \\frac{e^t}{t}\\,dt$, pourquoi l’axe des ordonnées ($x = 0$) est-il asymptote verticale à $(\\mathcal{C}_F)$ ?',
      options: [
        'Parce que $\\lim_{x \\to 0^+} F(x) = 0$',
        'Parce que $F(x) < \\ln x$ sur $]0 ; 1[$ donc $\\lim_{x \\to 0^+} F(x) = -\\infty$',
        'Parce que $F(1) = 0$',
        'Parce que $F’(1) = e$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le fait que $\\lim_{x \\to 0^+} F(x) = -\\infty$ (et non $0$, coquille p.16 du PDF) caractérise précisément l’asymptote verticale d’équation $x = 0$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Dérivée d’une composée intégrale',
    stepTheme: 'violet',
    stepTitle: 'Cas général : dériver $G(x) = \\int_a^{u(x)} f(t)\\,dt$',
    paragraphText:
      'En Terminale C, on rencontre souvent la composée $G(x) = F(u(x)) = \\int_a^{u(x)} f(t)\\,dt$ où $F(X) = \\int_a^X f(t)\\,dt$ et $u$ est dérivable à valeurs dans $K$. Par dérivation d’une fonction composée : $G’(x) = u’(x) \\cdot F’(u(x)) = u’(x)\\,f(u(x))$. Exemple : la dérivée de $\\int_0^{x^2} \\cos t\\,dt$ est $2x \\cos(x^2)$ !',
    formula: {
      name: 'Dérivée de ∫_a^{u(x)} f(t) dt',
      formula: '\\left(\\int_a^{u(x)} f(t)\\,dt\\right)’ = u’(x)\\,f(u(x))',
    },
    exercise: {
      id: 'tc_m_num_l10_p07_q04',
      type: 'mcq',
      prompt: 'Soit $G(x) = \\int_1^{x^2} \\frac{1}{t}\\,dt$ pour $x > 0$. Que vaut $G’(x)$ ?',
      options: ['$\\frac{1}{x^2}$', '$\\frac{2}{x}$', '$\\frac{2x}{\\ln x}$', '$2\\ln x$'],
      correctAnswerIndex: 1,
      explanation: '$G’(x) = (x^2)’ \\cdot \\frac{1}{x^2} = \\frac{2x}{x^2} = \\frac{2}{x}$ (en effet $G(x) = \\ln(x^2) = 2\\ln x$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Cinématique',
    stepTheme: 'slate',
    stepTitle: 'Chute libre d’un corps (Ex. 12 p.13 corrigé : $D(x) = \\int_0^x gt\\,dt$)',
    paragraphText:
      'Un corps est lâché sans vitesse initiale ($v(0) = 0$) d’une hauteur de $2000\\text{ m}$ avec $g = 9{,}8\\text{ m}\\cdot\\text{s}^{-2}$. L’accélération étant constante égale à $g$, la vitesse à l’instant $t$ vaut $v(t) = \\int_0^t g\\,ds = gt$. La distance parcourue après $x$ secondes vaut donc $D(x) = \\int_0^x v(t)\\,dt = \\int_0^x gt\\,dt = \\frac{1}{2}gx^2 = 4{,}9x^2$ (note : le PDF avait un $x$ en trop dans l’intégrande). Le corps touche le sol quand $4{,}9 T^2 = 2000 \\implies T = \\sqrt{\\frac{2000}{4{,}9}} \\approx 20{,}2\\text{ s}$.',
    formula: {
      name: 'Distance de chute libre (v₀ = 0)',
      formula: 'D(x) = \\int_0^x g\\,t\\,dt = \\frac{1}{2}g x^2',
    },
    exercise: {
      id: 'tc_m_num_l10_p07_q05',
      type: 'mcq',
      prompt: 'Avec $D(x) = \\frac{1}{2}gx^2 = 4{,}9x^2$, au bout de combien de temps $T$ (arrondi au dixième) un corps lâché de $2000\\text{ m}$ touche-t-il le sol ?',
      options: ['$10{,}2\\text{ s}$', '$20{,}2\\text{ s}$', '$40{,}8\\text{ s}$', '$408\\text{ s}$'],
      correctAnswerIndex: 1,
      explanation: '$4{,}9 T^2 = 2000 \\iff T^2 = \\frac{2000}{4{,}9} \\approx 408{,}16 \\implies T \\approx 20{,}2\\text{ s}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Variable d’intégration',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais mélanger la borne $x$ et la variable muette $t$ !',
    paragraphText:
      'Dans $F(x) = \\int_a^x f(t)\\,dt$, la lettre $x$ est une borne (le paramètre de $F$) et $t$ est la variable muette d’intégration. Il est mathématiquement incorrect d’écrire « $\\int_a^x f(x)\\,dx$ » ou de laisser traîner $x$ à l’intérieur comme dans l’énoncé fautif $\\int_0^x gx\\,t\\,dt$ !',
    konanTip: 'Si la borne supérieure s’appelle $x$, utilise toujours une autre lettre ($t$, $s$ ou $u$) sous le signe somme.',
    exercise: {
      id: 'tc_m_num_l10_p07_q06',
      type: 'mcq',
      prompt: 'Laquelle de ces écritures est mathématiquement correcte pour définir la primitive de $\\sin$ s’annulant en $0$ ?',
      options: [
        '$F(x) = \\int_0^x \\sin(x)\\,dx$',
        '$F(x) = \\int_0^x \\sin(t)\\,dt$',
        '$F(x) = \\int_0^t \\sin(x)\\,dt$',
        '$F(t) = \\int_0^x \\sin(t)\\,dt$',
      ],
      correctAnswerIndex: 1,
      explanation: 'La variable muette $t$ doit être distincte de la borne $x$ : $F(x) = \\int_0^x \\sin(t)\\,dt = 1 - \\cos x$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan calcul intégral',
    stepTheme: 'green',
    stepTitle: 'Boîte à outils complète pour tout calcul intégral au Bac C',
    paragraphText:
      'Face à une intégrale : (1) Reconnaître une forme immédiate ($u’/u$, $u’e^u$, $u’u^{\\alpha}$, division euclidienne) ; (2) Exploiter la symétrie/périodicité ou Chasles (valeurs absolues) ; (3) Choisir IPP (ALPES) ou changement affine ($t = \\alpha x + \\beta$) ; (4) Sinon, encadrer l’intégrande ou dériver si la borne varie ($F’(x) = f(x)$).',
    exercise: {
      id: 'tc_m_num_l10_p07_q07',
      type: 'mcq',
      prompt: 'Soit $F(x) = \\int_0^x \\frac{1}{1 + t^2}\\,dt$ sur $\\mathbb{R}$. Quel est le sens de variation de $F$ sur $\\mathbb{R}$ ?',
      options: [
        'Strictement décroissante sur $\\mathbb{R}$',
        'Strictement croissante sur $\\mathbb{R}$ car $F’(x) = \\frac{1}{1 + x^2} > 0$',
        'Croissante sur $[0 ; +\\infty[$ et décroissante sur $]-\\infty ; 0]$',
        'Constante égale à $0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour tout $x \\in \\mathbb{R}$, $F’(x) = \\frac{1}{1+x^2} > 0$, donc $F$ est strictement croissante sur tout $\\mathbb{R}$.',
    },
  },
];

export const MATHS_TLE_C_L10_CALCUL_INTEGRAL: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l10_calcul_integral',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 11,
  title: 'Leçon 10 : Calcul intégral',
  summary:
    'Définition de l’intégrale, variable muette, interprétation graphique (aire), relation de Chasles, linéarité, parité et périodicité, comparaison et valeur moyenne, intégration par parties, changement de variable affine, calcul d’aires planes et fonction x ↦ ∫_a^x f(t) dt.',
  officialVolumeHours: 12,
  contentVersion: 2,
  source: 'CÔTE D’IVOIRE – ÉCOLE NUMÉRIQUE — Mathématiques Terminale (Leçon 10 : Calcul intégral)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l10_calcul_integral_p01',
      order: 1,
      title: 'Définition de l’intégrale et interprétation en aire',
      summary:
        'Calculer ∫_a^b f(x) dx = F(b) − F(a), comprendre le rôle muet de la variable, inverser les bornes et interpréter géométriquement en unités d’aire.',
      conceptExplanation:
        'Pour une fonction continue f sur K, $\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$ ne dépend ni de la primitive F, ni de la variable muette. Lorsque $a \\leqslant b$ et $f \\geqslant 0$, elle mesure en unités d’aire ($1\\text{ u.a.} = OI \\times OJ$) l’aire sous la courbe.',
      keyRule: 'Toujours vérifier la continuité sur $[a ; b]$ et calculer $F(\\text{haut}) - F(\\text{bas})$.',
      formulas: [
        { name: 'Intégrale définie', formula: '\\int_a^b f(x)\\,dx = \\Big[F(x)\\Big]_a^b = F(b) - F(a)' },
        { name: 'Bornes égales / inversées', formula: '\\int_a^a f(x)\\,dx = 0 \\qquad ; \\qquad \\int_b^a f(x)\\,dx = -\\int_a^b f(x)\\,dx' },
      ],
      workedExample: {
        title: 'Calcul avec bornes inversées',
        statement: 'Calculer $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right)dt$.',
        methodSteps: [
          'Sur $[1 ; 3]$, une primitive de $1 - \\frac{1}{t}$ est $F(t) = t - \\ln t$.',
          '$J = [t - \\ln t]_3^1 = (1 - \\ln 1) - (3 - \\ln 3) = -2 + \\ln 3$.',
        ],
        conclusion: '$J = -2 + \\ln 3$ (négatif car $3 > 1$ et l’intégrande est positif).',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l10_calcul_integral_p02',
      order: 2,
      title: 'Chasles, linéarité, parité et périodicité',
      summary:
        'Découper une intégrale (valeur absolue, fonction par morceaux), utiliser la linéarité et simplifier grâce aux fonctions paires, impaires ou périodiques.',
      conceptExplanation:
        'L’intégrale vérifie la relation de Chasles ($\\int_a^b f = \\int_a^c f + \\int_c^b f$) et la linéarité. Sur un intervalle symétrique $[-a ; a]$, l’intégrale d’une fonction impaire est nulle et celle d’une fonction paire vaut $2\\int_0^a f$. Pour une fonction $T$-périodique, $\\int_a^{a+T} f = \\int_0^T f$.',
      keyRule: 'Attention : l’intégrale d’un produit n’est JAMAIS le produit des intégrales !',
      formulas: [
        { name: 'Chasles et linéarité', formula: '\\int_a^b f = \\int_a^c f + \\int_c^b f \\quad ; \\quad \\int_a^b (\\alpha f + \\beta g) = \\alpha\\int_a^b f + \\beta\\int_a^b g' },
        { name: 'Parité sur [-a ; a]', formula: 'f \\text{ paire} \\Rightarrow \\int_{-a}^a f = 2\\int_0^a f \\quad ; \\quad f \\text{ impaire} \\Rightarrow \\int_{-a}^a f = 0' },
      ],
      workedExample: {
        title: 'Intégrale d’une valeur absolue par Chasles',
        statement: 'Calculer $P = \\int_{-4}^6 |x + 3|\\,dx$.',
        methodSteps: [
          '$x + 3 = 0 \\iff x = -3 \\in [-4 ; 6]$.',
          '$P = \\int_{-4}^{-3} (-x - 3)\\,dx + \\int_{-3}^6 (x + 3)\\,dx = \\frac{1}{2} + \\frac{81}{2} = 41$.',
        ],
        conclusion: '$P = 41$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l10_calcul_integral_p03',
      order: 3,
      title: 'Comparaison, inégalité de la moyenne et valeur moyenne',
      summary:
        'Comparer et encadrer des intégrales (avec a ≤ b), appliquer l’inégalité de la moyenne et calculer μ = 1/(b−a) ∫_a^b f(x) dx.',
      conceptExplanation:
        'Lorsque $a \\leqslant b$, l’intégration conserve l’ordre ($f \\leqslant g \\implies \\int_a^b f \\leqslant \\int_a^b g$) et fournit l’inégalité de la moyenne : $m \\leqslant f \\leqslant M \\implies m(b-a) \\leqslant \\int_a^b f \\leqslant M(b-a)$. La valeur moyenne est $\\mu = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$.',
      keyRule: 'Toujours vérifier $a \\leqslant b$ avant d’appliquer positivité, comparaison ou inégalité de la moyenne.',
      formulas: [
        { name: 'Inégalité de la moyenne', formula: 'm(b-a) \\leqslant \\int_a^b f(x)\\,dx \\leqslant M(b-a) \\qquad (a \\leqslant b)' },
        { name: 'Valeur moyenne', formula: '\\mu = \\frac{1}{b - a}\\int_a^b f(x)\\,dx' },
      ],
      workedExample: {
        title: 'Encadrer ∫_{π/4}^{π/2} (1/sin x) dx',
        statement: 'Sachant que $1 \\leqslant \\frac{1}{\\sin x} \\leqslant \\sqrt{2}$ sur $[\\frac{\\pi}{4} ; \\frac{\\pi}{2}]$, encadrer $I = \\int_{\\pi/4}^{\\pi/2} \\frac{dx}{\\sin x}$.',
        methodSteps: [
          'L’amplitude vaut $\\frac{\\pi}{2} - \\frac{\\pi}{4} = \\frac{\\pi}{4} > 0$.',
          'Par l’inégalité de la moyenne : $1\\times\\frac{\\pi}{4} \\leqslant I \\leqslant \\sqrt{2}\\times\\frac{\\pi}{4}$.',
        ],
        conclusion: '$\\frac{\\pi}{4} \\leqslant I \\leqslant \\frac{\\pi\\sqrt{2}}{4}$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l10_calcul_integral_p04',
      order: 4,
      title: 'Primitives composées, trigonométrie et fractions',
      summary:
        'Calculer des intégrales à l’aide des formes u’/u, u’e^u, u’u^α, puissances de cos/sin (cos³t = cost − cost sin²t) et division euclidienne.',
      conceptExplanation:
        'De nombreuses intégrales se calculent directement en identifiant la dérivée intérieure $u’(x)$ : $u’/u \\to \\ln|u|$, $u’e^u \\to e^u$, $u’u^{\\alpha} \\to \\frac{u^{\\alpha+1}}{\\alpha+1}$. Pour les puissances impaires de $\\cos$ ou $\\sin$, on utilise $\\cos^2 t + \\sin^2 t = 1$.',
      keyRule: 'Chercher d’abord $u’(x)$ devant $u(x)$ avant de tenter une technique plus lourde.',
      formulas: [
        { name: 'Formes composées clés', formula: '\\frac{u’}{u} \\to \\ln|u| \\quad ; \\quad u’e^u \\to e^u \\quad ; \\quad u’u^{\\alpha} \\to \\frac{u^{\\alpha+1}}{\\alpha+1}' },
      ],
      workedExample: {
        title: 'Calcul de ∫_0^1 e^x / (1 + e^x) dx',
        statement: 'Calculer $I = \\int_0^1 \\frac{e^x}{1 + e^x}\\,dx$.',
        methodSteps: [
          'Poser $u(x) = 1 + e^x > 0$ : $u’(x) = e^x$, donc $f = \\frac{u’}{u}$.',
          '$I = [\\ln(1 + e^x)]_0^1 = \\ln(1 + e) - \\ln 2 = \\ln\\left(\\frac{1 + e}{2}\\right)$.',
        ],
        conclusion: '$I = \\ln\\left(\\frac{1 + e}{2}\\right)$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l10_calcul_integral_p05',
      order: 5,
      title: 'Intégration par parties et changement de variable affine',
      summary:
        'Maîtriser l’IPP (règle ALPES et double IPP) et effectuer un changement de variable affine t = αx + β en mettant à jour bornes et différentielle.',
      conceptExplanation:
        'L’IPP ($\\int_a^b uv’ = [uv]_a^b - \\int_a^b u’v$) permet d’intégrer $\\ln x$, $x^n \\ln x$, $x^n e^{ax}$ ou $x\\cos x$. Le changement de variable affine $t = \\alpha x + \\beta$ remplace $dx$ par $\\frac{1}{\\alpha}dt$ et transforme les bornes $a, b$ en $\\alpha a + \\beta$ et $\\alpha b + \\beta$.',
      keyRule: 'En IPP : choix de $u$ selon ALPES ($\\ln$ avant polynôme). En changement affine : ne jamais oublier ni le $\\frac{1}{\\alpha}$ ni les nouvelles bornes !',
      formulas: [
        { name: 'IPP', formula: '\\int_a^b u(x)v’(x)\\,dx = \\Big[u(x)v(x)\\Big]_a^b - \\int_a^b u’(x)v(x)\\,dx' },
        { name: 'Changement affine t = αx + β', formula: '\\int_a^b f(\\alpha x + \\beta)\\,dx = \\frac{1}{\\alpha}\\int_{\\alpha a + \\beta}^{\\alpha b + \\beta} f(t)\\,dt' },
      ],
      workedExample: {
        title: 'Calculer I = ∫_1^e x² ln x dx par parties',
        statement: 'Calculer $I = \\int_1^e x^2 \\ln x\\,dx$.',
        methodSteps: [
          'Poser $u(x) = \\ln x$ ($u’(x) = \\frac{1}{x}$) et $v’(x) = x^2$ ($v(x) = \\frac{1}{3}x^3$).',
          '$I = \\left[\\frac{1}{3}x^3 \\ln x\\right]_1^e - \\int_1^e \\frac{1}{3}x^2\\,dx = \\frac{e^3}{3} - \\left[\\frac{1}{9}x^3\\right]_1^e = \\frac{2e^3 + 1}{9}$.',
        ],
        conclusion: '$I = \\frac{2e^3 + 1}{9}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l10_calcul_integral_p06',
      order: 6,
      title: 'Calcul d’aires planes et conversion en cm²',
      summary:
        'Calculer l’aire entre une courbe et (OI) selon le signe, ou entre deux courbes (haut − bas), en convertissant en cm² avec 1 u.a. = OI × OJ.',
      conceptExplanation:
        'L’aire géométrique est toujours positive : on intègre $|f(x)|$ entre une courbe et l’axe $(OI)$, ou $|g(x) - f(x)|$ entre deux courbes en subdivisant aux points de croisement. On multiplie ensuite par $1\\text{ u.a.} = OI \\times OJ$.',
      keyRule: 'Toujours intégrer (courbe du haut $-$ courbe du bas) puis multiplier par $OI \\times OJ$.',
      formulas: [
        { name: 'Aire entre deux courbes (f ≤ g)', formula: '\\mathcal{A} = \\left(\\int_a^b [g(x) - f(x)]\\,dx\\right) \\times OI \\times OJ' },
      ],
      workedExample: {
        title: 'Aire sous la parabole y = −x² + 4 (situation complexe corrigée)',
        statement: 'Calculer l’aire comprise entre $y = -x^2 + 4$, $(OI)$, $x = -2$ et $x = 2$ (unité $1\\text{ m}$), plus le rectangle $2\\text{ m} \\times 4\\text{ m}$.',
        methodSteps: [
          'Sur $[-2 ; 2]$, $-x^2 + 4 \\geqslant 0$ : $A_1 = \\int_{-2}^2 (-x^2 + 4)\\,dx = \\left[-\\frac{x^3}{3} + 4x\\right]_{-2}^2 = \\left(-\\frac{8}{3} + 8\\right) - \\left(\\frac{8}{3} - 8\\right) = \\frac{32}{3}\\text{ m}^2$.',
          'Aire du rectangle : $A_2 = 2 \\times 4 = 8\\text{ m}^2$.',
        ],
        conclusion: 'Aire totale $= \\frac{32}{3} + 8 = \\frac{56}{3}\\text{ m}^2 \\approx 18{,}67\\text{ m}^2$.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l10_calcul_integral_p07',
      order: 7,
      title: 'Fonction du type F(x) = ∫_a^x f(t) dt et applications',
      summary:
        'Dériver F(x) = ∫_a^x f(t) dt (F’(x) = f(x) et F(a) = 0), étudier une intégrale non calculable par comparaison et dériver ∫_a^{u(x)} f(t) dt.',
      conceptExplanation:
        'La fonction $F(x) = \\int_a^x f(t)\\,dt$ (avec $f$ continue sur $K$ et $a \\in K$) est l’unique primitive de $f$ s’annulant en $a$, d’où $F’(x) = f(x)$. Même sans expression explicite de $F$, on détermine ses variations via le signe de $f$, son signe selon $x < a$ ou $x > a$, et ses limites par comparaison.',
      keyRule: '$F(x) = \\int_a^x f(t)\\,dt \\implies F(a) = 0$ et $F’(x) = f(x)$ ; avec borne composée $u(x)$, multiplier par $u’(x)$.',
      formulas: [
        { name: 'Théorème fondamental', formula: 'F(x) = \\int_a^x f(t)\\,dt \\implies F’(x) = f(x)' },
        { name: 'Borne composée', formula: '\\left(\\int_a^{u(x)} f(t)\\,dt\\right)’ = u’(x)\\,f(u(x))' },
      ],
      workedExample: {
        title: 'Étude de F(x) = ∫_1^x (e^t / t) dt',
        statement: 'Montrer que $F$ est strictement croissante sur $]0 ; +\\infty[$ et trouver $\\lim_{x \\to 0^+} F(x)$.',
        methodSteps: [
          'Pour tout $x > 0$, $F’(x) = \\frac{e^x}{x} > 0$, donc $F$ est strictement croissante et $F(1) = 0$.',
          'Pour $x \\in ]0 ; 1[$, $F(x) - \\ln x = \\int_1^x \\frac{e^t - 1}{t}\\,dt < 0$ (car $x < 1$ et $\\frac{e^t-1}{t} > 0$), donc $F(x) < \\ln x \\xrightarrow[x \\to 0^+]{} -\\infty$.',
        ],
        conclusion: '$\\lim_{x \\to 0^+} F(x) = -\\infty$, donc $x = 0$ est asymptote verticale.',
      },
      structuredSteps: p07Steps,
      exercises: p07Steps.map((s) => s.exercise),
    },
  ],
};
