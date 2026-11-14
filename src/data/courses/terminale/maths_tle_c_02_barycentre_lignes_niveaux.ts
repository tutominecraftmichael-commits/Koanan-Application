import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Mélanger deux eaux : le modèle des moyennes pondérées',
    paragraphText:
      'Pour remplir une baignoire de $30\\text{ L}$ à $34\\text{ °C}$ avec de l’eau froide à $10\\text{ °C}$ (masse $x$) et de l’eau bouillante à $100\\text{ °C}$ (masse $30 - x$), la température finale est le barycentre des températures pondérées par les quantités d’eau : $34 = \\frac{10x + 100(30 - x)}{x + (30 - x)}$. On trouve $x = 22\\text{ L}$ d’eau froide et $8\\text{ L}$ d’eau bouillante.',
    formula: {
      name: 'Température moyenne pondérée',
      formula: 'T = \\frac{\\alpha_1 T_1 + \\alpha_2 T_2}{\\alpha_1 + \\alpha_2} \\iff \\alpha_1(T_1 - T) + \\alpha_2(T_2 - T) = 0',
    },
    konanTip: 'Le barycentre généralise exactement la notion de moyenne pondérée à des points du plan ou de l’espace.',
    exercise: {
      id: 'tc_m_geo_l02_p01_q01',
      type: 'mcq',
      prompt: 'Dans la situation du bain ($30\\text{ L}$ à $34\\text{ °C}$ avec de l’eau à $10\\text{ °C}$ et à $100\\text{ °C}$), quelle quantité d’eau bouillante faut-il ?',
      options: ['$6\\text{ L}$', '$8\\text{ L}$', '$12\\text{ L}$', '$22\\text{ L}$'],
      correctAnswerIndex: 1,
      explanation: 'Soit $y$ la quantité d’eau bouillante : $10(30 - y) + 100y = 34 \\times 30 \\iff 90y = 720 \\iff y = 8\\text{ L}$ (et $22\\text{ L}$ d’eau froide).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Barycentre de $n$ points pondérés',
    paragraphText:
      'Soient $(A_1, \\alpha_1), (A_2, \\alpha_2), \\dots, (A_n, \\alpha_n)$ ($n \\geqslant 2$) $n$ points pondérés. Si $\\alpha_1 + \\alpha_2 + \\dots + \\alpha_n \\neq 0$, alors il existe un **unique point $G$** tel que $\\sum_{i=1}^{n} \\alpha_i \\overrightarrow{GA_i} = \\vec{0}$. Ce point $G$ est appelé **barycentre** des points pondérés $(A_i ; \\alpha_i)_{1 \\leqslant i \\leqslant n}$. Si $\\sum_{i=1}^{n} \\alpha_i = 0$, le barycentre n’existe pas.',
    formula: {
      name: 'Relation fondamentale de définition',
      formula: '\\sum_{i=1}^{n} \\alpha_i \\neq 0 \\implies \\exists !\\,G,\\; \\sum_{i=1}^{n} \\alpha_i \\overrightarrow{GA_i} = \\vec{0}',
    },
    keyRule: 'Premier réflexe devant tout barycentre : calculer la somme des coefficients. Si elle vaut $0$, le barycentre n’existe pas.',
    exercise: {
      id: 'tc_m_geo_l02_p01_q02',
      type: 'mcq',
      prompt: 'Parmi ces systèmes de points pondérés, lequel N’ADMET PAS de barycentre ?',
      options: [
        '$(A ; 2),\\; (B ; -1),\\; (C ; 3)$',
        '$(A ; -1),\\; (B ; 1),\\; (C ; 1),\\; (D ; 4)$',
        '$(A ; 3),\\; (B ; -5),\\; (C ; 2)$',
        '$(A ; -1),\\; (B ; -1),\\; (C ; -1)$',
      ],
      correctAnswerIndex: 2,
      explanation: '$3 + (-5) + 2 = 0$ : la somme des coefficients étant nulle, ce système n’admet pas de barycentre.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Positionnement',
    stepTheme: 'violet',
    stepTitle: 'Exprimer $\\overrightarrow{A_1 G}$ en fonction des points donnés',
    paragraphText:
      'Lorsque $\\sum_{i=1}^{n} \\alpha_i \\neq 0$, en décomposant $\\overrightarrow{GA_i} = \\overrightarrow{GA_1} + \\overrightarrow{A_1 A_i}$, on isole directement la position de $G$ depuis $A_1$ : $\\overrightarrow{A_1 G} = \\frac{\\alpha_2 \\overrightarrow{A_1 A_2} + \\dots + \\alpha_n \\overrightarrow{A_1 A_n}}{\\alpha_1 + \\alpha_2 + \\dots + \\alpha_n}$. En particulier pour deux points $(A,\\alpha)$ et $(B,\\beta)$ avec $\\alpha+\\beta\\neq 0$, $\\overrightarrow{AG} = \\frac{\\beta}{\\alpha + \\beta}\\overrightarrow{AB}$.',
    formula: {
      name: 'Formule de position (cas $n$ points et $2$ points)',
      formula: '\\overrightarrow{A_1 G} = \\frac{1}{\\sum_{i=1}^n \\alpha_i}\\sum_{i=2}^n \\alpha_i \\overrightarrow{A_1 A_i} \\qquad ; \\qquad \\overrightarrow{AG} = \\frac{\\beta}{\\alpha+\\beta}\\overrightarrow{AB}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p01_q03',
      type: 'mcq',
      prompt: 'Soit $G = \\operatorname{bar}\\{(A ; 2),\\; (B ; -5)\\}$. Quelle égalité vectorielle est vraie ?',
      options: [
        '$\\overrightarrow{AG} = \\frac{5}{3}\\overrightarrow{AB}$',
        '$\\overrightarrow{AG} = -\\frac{5}{3}\\overrightarrow{AB}$',
        '$\\overrightarrow{AG} = \\frac{2}{3}\\overrightarrow{AB}$',
        '$\\overrightarrow{AG} = \\frac{5}{7}\\overrightarrow{AB}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\alpha + \\beta = 2 - 5 = -3$, donc $\\overrightarrow{AG} = \\frac{-5}{-3}\\overrightarrow{AB} = \\frac{5}{3}\\overrightarrow{AB}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Cas particulier',
    stepTheme: 'blue',
    stepTitle: 'Isobarycentre de $n$ points',
    paragraphText:
      'On appelle **isobarycentre** des $n$ points $A_1, \\dots, A_n$ le barycentre de ces points affectés d’un même coefficient non nul $\\alpha \\neq 0$ (par exemple tous égaux à $1$). Il vérifie $\\sum_{i=1}^{n} \\overrightarrow{GA_i} = \\vec{0}$. Pour $n=2$, c’est le milieu du segment ; pour $n=3$ non alignés, c’est le centre de gravité du triangle ; pour un parallélogramme $ABCD$, son centre $O$ est l’isobarycentre de $A, B, C, D$.',
    formula: {
      name: 'Isobarycentre',
      formula: '\\sum_{i=1}^{n} \\overrightarrow{GA_i} = \\vec{0} \\quad (\\text{ex. } \\overrightarrow{OA}+\\overrightarrow{OB}+\\overrightarrow{OC}+\\overrightarrow{OD}=\\vec{0})',
    },
    exercise: {
      id: 'tc_m_geo_l02_p01_q04',
      type: 'mcq',
      prompt: 'Dans un parallélogramme $ABCD$ de centre $O$, que vaut $\\overrightarrow{OA} + \\overrightarrow{OB} + \\overrightarrow{OC} + \\overrightarrow{OD}$ ?',
      options: ['$4\\overrightarrow{OA}$', '$2\\overrightarrow{AC}$', '$\\vec{0}$', '$\\overrightarrow{AB} + \\overrightarrow{AD}$'],
      correctAnswerIndex: 2,
      explanation: '$O$ est le milieu de $[AC]$ et de $[BD]$, donc $\\overrightarrow{OA}+\\overrightarrow{OC}=\\vec{0}$ et $\\overrightarrow{OB}+\\overrightarrow{OD}=\\vec{0}$ : $O$ est l’isobarycentre de $A, B, C, D$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Homogénéité',
    stepTheme: 'violet',
    stepTitle: 'Invariance par multiplication (homogénéité)',
    paragraphText:
      'Le barycentre de $n$ points pondérés **ne change pas** lorsqu’on multiplie tous les coefficients par un même réel non nul $k \\neq 0$ : si $G = \\operatorname{bar}\\{(A_1, \\alpha_1), \\dots, (A_n, \\alpha_n)\\}$, alors $G = \\operatorname{bar}\\{(A_1, k\\alpha_1), \\dots, (A_n, k\\alpha_n)\\}$. Cela permet de chasser les dénominateurs ou d’inverser tous les signes.',
    formula: {
      name: 'Propriété d’homogénéité',
      formula: 'k \\neq 0 \\implies \\operatorname{bar}\\{(A_i,\\alpha_i)\\} = \\operatorname{bar}\\{(A_i,k\\alpha_i)\\}',
    },
    konanTip: 'Si $\\overrightarrow{AG} = \\frac{3}{4}\\overrightarrow{AB}$, alors $\\frac{3}{4} = \\frac{3}{1+3}$, donc $G = \\operatorname{bar}\\{(A, 1), (B, 3)\\}$, mais aussi $\\{(A, 2), (B, 6)\\}$ ou $\\{(A, -\\frac{1}{2}), (B, -\\frac{3}{2})\\}$.',
    exercise: {
      id: 'tc_m_geo_l02_p01_q05',
      type: 'mcq',
      prompt: 'Sachant que $\\overrightarrow{AG} = \\frac{3}{4}\\overrightarrow{AB}$, lequel de ces couples admet $G$ pour barycentre ?',
      options: [
        '$(A ; 1)$ et $(B ; 2)$',
        '$(A ; -\\frac{1}{2})$ et $(B ; -\\frac{3}{2})$',
        '$(A ; 2)$ et $(B ; -3)$',
        '$(A ; -2)$ et $(B ; 2)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\overrightarrow{AG} = \\frac{3}{1+3}\\overrightarrow{AB} \\implies G = \\operatorname{bar}\\{(A;1),(B;3)\\}$. En multipliant par $k = -\\frac{1}{2}$, on obtient $(A ; -\\frac{1}{2})$ et $(B ; -\\frac{3}{2})$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Exercice type',
    stepTheme: 'green',
    stepTitle: 'Exprimer $\\overrightarrow{AG}$ dans un parallélogramme $ABCD$',
    paragraphText:
      'Soit $ABCD$ un parallélogramme et $G = \\operatorname{bar}\\{(A,-1),(B,1),(C,1),(D,4)\\}$. La somme des coefficients vaut $-1 + 1 + 1 + 4 = 5 \\neq 0$. On applique la formule depuis $A$ : $\\overrightarrow{AG} = \\frac{1}{5}(\\overrightarrow{AB} + \\overrightarrow{AC} + 4\\overrightarrow{AD})$. Comme $ABCD$ est un parallélogramme, $\\overrightarrow{AC} = \\overrightarrow{AB} + \\overrightarrow{AD}$, d’où $\\overrightarrow{AG} = \\frac{1}{5}(2\\overrightarrow{AB} + 5\\overrightarrow{AD}) = \\frac{2}{5}\\overrightarrow{AB} + \\overrightarrow{AD}$.',
    formula: {
      name: 'Résultat dans le parallélogramme',
      formula: '\\overrightarrow{AG} = \\frac{1}{5}(2\\overrightarrow{AB} + 5\\overrightarrow{AD})',
    },
    exercise: {
      id: 'tc_m_geo_l02_p01_q06',
      type: 'mcq',
      prompt: 'Dans le parallélogramme $ABCD$, avec $G = \\operatorname{bar}\\{(A,-1),(B,1),(C,1),(D,4)\\}$, que vaut $\\overrightarrow{AG}$ en fonction de $\\overrightarrow{AB}$ et $\\overrightarrow{AD}$ ?',
      options: [
        '$\\frac{2}{5}\\overrightarrow{AB} + \\overrightarrow{AD}$',
        '$\\frac{1}{5}\\overrightarrow{AB} + \\frac{4}{5}\\overrightarrow{AD}$',
        '$\\frac{2}{5}\\overrightarrow{AB} + \\frac{4}{5}\\overrightarrow{AD}$',
        '$2\\overrightarrow{AB} + 5\\overrightarrow{AD}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\overrightarrow{AG} = \\frac{1}{5}(\\overrightarrow{AB} + (\\overrightarrow{AB} + \\overrightarrow{AD}) + 4\\overrightarrow{AD}) = \\frac{1}{5}(2\\overrightarrow{AB} + 5\\overrightarrow{AD}) = \\frac{2}{5}\\overrightarrow{AB} + \\overrightarrow{AD}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'propriete',
    stepBadge: 'Analytique',
    stepTheme: 'violet',
    stepTitle: 'Coordonnées du barycentre dans le plan ou l’espace',
    paragraphText:
      'Dans un repère quelconque $(O ; \\vec{i}, \\vec{j})$ (du plan) ou $(O ; \\vec{i}, \\vec{j}, \\vec{k})$ (de l’espace), si $G = \\operatorname{bar}\\{(A_i, \\alpha_i)_{1 \\leqslant i \\leqslant n}\\}$ avec $\\sum \\alpha_i \\neq 0$, alors ses coordonnées sont les moyennes pondérées : $x_G = \\frac{\\sum_{i=1}^n \\alpha_i x_i}{\\sum_{i=1}^n \\alpha_i}$, $y_G = \\frac{\\sum_{i=1}^n \\alpha_i y_i}{\\sum_{i=1}^n \\alpha_i}$ et $z_G = \\frac{\\sum_{i=1}^n \\alpha_i z_i}{\\sum_{i=1}^n \\alpha_i}$.',
    formula: {
      name: 'Coordonnées de G',
      formula: 'x_G = \\frac{\\sum \\alpha_i x_i}{\\sum \\alpha_i}, \\quad y_G = \\frac{\\sum \\alpha_i y_i}{\\sum \\alpha_i}, \\quad z_G = \\frac{\\sum \\alpha_i z_i}{\\sum \\alpha_i}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p01_q07',
      type: 'mcq',
      prompt: 'Dans l’espace, on donne $A(0;-1;2)$, $B(8;5;-1)$ et $C(8;-5;-2)$. Quelles sont les coordonnées de $G = \\operatorname{bar}\\{(A,-1),(B,1),(C,-1)\\}$ ?',
      options: ['$(-11; 1; 2)$', '$(0; -11; 1)$', '$(8; 5; 0)$', '$(0; 11; -1)$'],
      correctAnswerIndex: 1,
      explanation: 'Somme $-1+1-1 = -1$. $x_G = \\frac{0+8-8}{-1} = 0$, $y_G = \\frac{1+5+5}{-1} = -11$ et $z_G = \\frac{-2-1+2}{-1} = 1$, soit $G(0 ; -11 ; 1)$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Théorème clé',
    stepTheme: 'violet',
    stepTitle: 'Réduction de la somme vectorielle $\\sum_{i=1}^n \\alpha_i \\overrightarrow{MA_i}$',
    paragraphText:
      'Soient $(A_i, \\alpha_i)_{1 \\leqslant i \\leqslant n}$ $n$ points pondérés et $M$ un point quelconque du plan ou de l’espace. Deux cas se présentent selon la somme $S = \\sum_{i=1}^n \\alpha_i$ : si $S \\neq 0$, alors $\\sum_{i=1}^n \\alpha_i \\overrightarrow{MA_i} = S\\,\\overrightarrow{MG}$ (où $G$ est le barycentre) ; si $S = 0$, le vecteur $\\sum_{i=1}^n \\alpha_i \\overrightarrow{MA_i}$ est **indépendant de $M$** (c’est un vecteur constant).',
    formula: {
      name: 'Réduction selon la somme des coefficients',
      formula: '\\sum \\alpha_i \\neq 0 \\implies \\sum \\alpha_i \\overrightarrow{MA_i} = \\left(\\sum \\alpha_i\\right)\\overrightarrow{MG} \\qquad ; \\qquad \\sum \\alpha_i = 0 \\implies \\text{vecteur constant}',
    },
    konanTip: 'Quand la somme vaut $0$, remplace immédiatement $M$ par l’un des points (par exemple $M = A$) pour obtenir l’expression exacte du vecteur constant !',
    exercise: {
      id: 'tc_m_geo_l02_p02_q01',
      type: 'mcq',
      prompt: 'Dans un parallélogramme $ABCD$, à quoi est égal le vecteur $\\vec{V}(M) = 4\\overrightarrow{MA} - 5\\overrightarrow{MB} + 2\\overrightarrow{MC} - \\overrightarrow{MD}$ ?',
      options: [
        '$0$',
        '$\\overrightarrow{MG}$',
        '$-3\\overrightarrow{AB} + \\overrightarrow{AD}$',
        '$3\\overrightarrow{AB} - \\overrightarrow{AD}$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Somme $4-5+2-1 = 0$, donc $\\vec{V}(M)$ est constant. Pour $M=A$ : $-5\\overrightarrow{AB} + 2\\overrightarrow{AC} - \\overrightarrow{AD} = -5\\overrightarrow{AB} + 2(\\overrightarrow{AB}+\\overrightarrow{AD}) - \\overrightarrow{AD} = -3\\overrightarrow{AB} + \\overrightarrow{AD}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Application',
    stepTheme: 'blue',
    stepTitle: 'Réduire quand la somme est non nulle',
    paragraphText:
      'Pour $\\vec{W}(M) = 3\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} - 2\\overrightarrow{MD}$, la somme des coefficients vaut $3 + 1 + 1 - 2 = 3 \\neq 0$. Les points $(A,3), (B,1), (C,1), (D,-2)$ admettent donc un unique barycentre $G$, et pour tout point $M$ du plan, $\\vec{W}(M) = 3\\overrightarrow{MG}$.',
    formula: {
      name: 'Exemple de réduction directe',
      formula: '3\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} - 2\\overrightarrow{MD} = 3\\overrightarrow{MG}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p02_q02',
      type: 'mcq',
      prompt: 'Si $G = \\operatorname{bar}\\{(A,3),\\; (B,1),\\; (C,1),\\; (D,-2)\\}$, quel est l’ensemble des points $M$ vérifiant $\\|3\\overrightarrow{MA} + \\overrightarrow{MB} + \\overrightarrow{MC} - 2\\overrightarrow{MD}\\| = 6$ ?',
      options: [
        'Le cercle de centre $G$ et de rayon $6$',
        'Le cercle de centre $G$ et de rayon $2$',
        'La médiatrice de $[AB]$',
        'Le point $G$ uniquement',
      ],
      correctAnswerIndex: 1,
      explanation: 'La somme se réduit à $3\\overrightarrow{MG}$, donc $\\|3\\overrightarrow{MG}\\| = 6 \\iff 3MG = 6 \\iff MG = 2$ : c’est le cercle de centre $G$ et de rayon $2$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Associativité',
    stepTheme: 'violet',
    stepTitle: 'Propriété du barycentre partiel',
    paragraphText:
      'On ne change pas le barycentre $G$ de $n$ points pondérés ($n \\geqslant 3$) en remplaçant $p$ d’entre eux ($1 < p < n$), dont la somme des coefficients est non nulle, par leur barycentre $H$ affecté de la **somme de leurs coefficients**. Ce point $H$ s’appelle un **barycentre partiel**.',
    formula: {
      name: 'Associativité (barycentre partiel)',
      formula: 'H = \\operatorname{bar}\\{(A_1,\\alpha_1),\\dots,(A_p,\\alpha_p)\\} \\implies G = \\operatorname{bar}\\{(H, \\alpha_1+\\dots+\\alpha_p), (A_{p+1},\\alpha_{p+1}),\\dots,(A_n,\\alpha_n)\\}',
    },
    keyRule: 'Attention au piège : on affecte à $H$ la SOMME des coefficients regroupés, jamais leur produit ni $1$ par défaut !',
    exercise: {
      id: 'tc_m_geo_l02_p02_q03',
      type: 'mcq',
      prompt: 'Soit $G = \\operatorname{bar}\\{(A ; -2),\\; (B ; 1),\\; (C ; 3)\\}$ et $I = \\operatorname{bar}\\{(A ; -2),\\; (C ; 3)\\}$. Comment s’exprime $G$ avec $I$ et $B$ ?',
      options: [
        '$G = \\operatorname{bar}\\{(I ; -6),\\; (B ; 1)\\}$',
        '$G = \\operatorname{bar}\\{(I ; 1),\\; (B ; 1)\\}$ (milieu de $[IB]$)',
        '$G = \\operatorname{bar}\\{(I ; 5),\\; (B ; 1)\\}$',
        '$G$ est le milieu de $[AC]$',
      ],
      correctAnswerIndex: 1,
      explanation: 'La somme des coefficients de $A$ et $C$ vaut $-2 + 3 = 1 \\neq 0$, donc $G = \\operatorname{bar}\\{(I ; 1),\\; (B ; 1)\\}$ : $G$ est le milieu de $[IB]$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Construction',
    stepTheme: 'green',
    stepTitle: 'Construire un barycentre de $3$ points par barycentre partiel',
    paragraphText:
      'Pour construire $G = \\operatorname{bar}\\{(A,-2),(B,1),(C,3)\\}$ dans un triangle $ABC$ ($AB = 3\\text{ cm}$, $AC = 2\\text{ cm}$) : on pose d’abord $I = \\operatorname{bar}\\{(A,-2),(C,3)\\}$. Comme $-2 + 3 = 1$, la formule à $2$ points donne $\\overrightarrow{AI} = \\frac{3}{-2+3}\\overrightarrow{AC} = 3\\overrightarrow{AC}$. Ensuite $G = \\operatorname{bar}\\{(I,1),(B,1)\\}$, donc $G$ est simplement le milieu de $[IB]$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Construction de G = bar{(A,-2),(B,1),(C,3)} via I',
      caption: 'I vérifie AI = 3 AC, puis G est le milieu de [IB].',
      svgContent: `<svg viewBox="0 0 360 150" width="340" height="142" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="120" x2="310" y2="120" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
        <polygon points="310,120 210,120 175,35" fill="none" stroke="#1e293b" stroke-width="2"/>
        <line x1="30" y1="120" x2="175" y2="35" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,3"/>
        <circle cx="310" cy="120" r="3.5" fill="#1e293b"/><text x="316" y="125" font-size="13" font-weight="bold" fill="#1e293b">A</text>
        <circle cx="210" cy="120" r="3.5" fill="#1e293b"/><text x="206" y="138" font-size="13" font-weight="bold" fill="#1e293b">C</text>
        <circle cx="175" cy="35" r="3.5" fill="#1e293b"/><text x="172" y="25" font-size="13" font-weight="bold" fill="#1e293b">B</text>
        <circle cx="30" cy="120" r="4" fill="#7c3aed"/><text x="14" y="125" font-size="13" font-weight="bold" fill="#7c3aed">I</text>
        <circle cx="102.5" cy="77.5" r="4.5" fill="#2563eb"/><text x="86" y="72" font-size="13" font-weight="bold" fill="#2563eb">G</text>
        <text x="120" y="138" font-size="11" fill="#64748b">AI = 3 AC</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l02_p02_q04',
      type: 'mcq',
      prompt: 'Avec $I = \\operatorname{bar}\\{(A ; -2),\\; (C ; 3)\\}$, quel vecteur permet de placer $I$ à partir de $A$ et $C$ ?',
      options: [
        '$\\overrightarrow{AI} = \\frac{3}{5}\\overrightarrow{AC}$',
        '$\\overrightarrow{AI} = -2\\overrightarrow{AC}$',
        '$\\overrightarrow{AI} = 3\\overrightarrow{AC}$',
        '$\\overrightarrow{AI} = \\frac{1}{3}\\overrightarrow{AC}$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\overrightarrow{AI} = \\frac{\\gamma}{\\alpha + \\gamma}\\overrightarrow{AC} = \\frac{3}{-2 + 3}\\overrightarrow{AC} = 3\\overrightarrow{AC}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Concourance',
    stepTheme: 'green',
    stepTitle: 'Démontrer que trois droites sont concourantes (Exercice 3)',
    paragraphText:
      'Pour prouver que $(AK)$, $(BJ)$ et $(CI)$ sont concourantes (avec $I$ milieu de $[AB]$, $\\overrightarrow{JC} = \\frac{2}{3}\\overrightarrow{JA}$ et $\\overrightarrow{BK} = 3\\overrightarrow{BC}$), on traduit chaque point en barycentre : $I = \\operatorname{bar}\\{(A,1),(B,1)\\} = \\operatorname{bar}\\{(A,2),(B,2)\\}$, $J = \\operatorname{bar}\\{(A,2),(C,-3)\\}$ et $K = \\operatorname{bar}\\{(B,2),(C,-3)\\}$. Par associativité, $G = \\operatorname{bar}\\{(A,2),(B,2),(C,-3)\\}$ s’écrit $\\operatorname{bar}\\{(I,4),(C,-3)\\} \\in (CI)$, $\\operatorname{bar}\\{(J,-1),(B,2)\\} \\in (BJ)$ et $\\operatorname{bar}\\{(K,-1),(A,2)\\} \\in (AK)$.',
    formula: {
      name: 'Preuve de concours par barycentre',
      formula: 'G = \\operatorname{bar}\\{(A,2),(B,2),(C,-3)\\} \\implies G \\in (CI) \\cap (BJ) \\cap (AK)',
    },
    exercise: {
      id: 'tc_m_geo_l02_p02_q05',
      type: 'mcq',
      prompt: 'Dans un triangle $ABC$, le point $K$ vérifie $\\overrightarrow{BK} = 3\\overrightarrow{BC}$. Comment exprime-t-on $K$ comme barycentre de $B$ et $C$ ?',
      options: [
        '$K = \\operatorname{bar}\\{(B ; 2),\\; (C ; -3)\\}$',
        '$K = \\operatorname{bar}\\{(B ; -2),\\; (C ; 3)\\}$',
        '$K = \\operatorname{bar}\\{(B ; 1),\\; (C ; 3)\\}$',
        '$K = \\operatorname{bar}\\{(B ; 3),\\; (C ; 1)\\}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\overrightarrow{BK} = 3\\overrightarrow{BC} = 3(\\overrightarrow{BK}+\\overrightarrow{KC}) \\iff -2\\overrightarrow{KB} + 3\\overrightarrow{KC} = \\vec{0}$, donc $K = \\operatorname{bar}\\{(B;-2),(C;3)\\} = \\operatorname{bar}\\{(B;2),(C;-3)\\}$ par homogénéité.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Alignement & Projection',
    stepTheme: 'green',
    stepTitle: 'Conservation du barycentre par projection et alignement (Ex. 4)',
    paragraphText:
      'La projection sur une droite parallèlement à une direction donnée **conserve le barycentre**. Dans un triangle $ABC$ avec $\\overrightarrow{AJ} = \\frac{2}{5}\\overrightarrow{AB}$ (soit $J = \\operatorname{bar}\\{(A,3),(B,2)\\}$) et la parallèle à $(AC)$ menée par $J$ coupant $(BC)$ en $K$ : les projetés sur $(BC)$ parallèlement à $(AC)$ de $A, B, J$ sont $C, B, K$, donc directement $K = \\operatorname{bar}\\{(C,3),(B,2)\\}$.',
    formula: {
      name: 'Conservation par projection',
      formula: 'J = \\operatorname{bar}\\{(A,3),(B,2)\\} \\xrightarrow{\\text{proj. sur }(BC)\\parallel(AC)} K = \\operatorname{bar}\\{(C,3),(B,2)\\}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p02_q06',
      type: 'mcq',
      prompt: 'Dans l’Exercice 4, $I$ est le milieu de $[AB]$, $L$ vérifie $\\overrightarrow{AL} = 3\\overrightarrow{CA}$ et $K = \\operatorname{bar}\\{(B;2),(C;3)\\}$. Quelle relation obtient-on entre $\\overrightarrow{IL}$ et $\\overrightarrow{KI}$ ?',
      options: [
        '$\\overrightarrow{IL} = -5\\overrightarrow{KI}$ (donc $I, K, L$ alignés)',
        '$\\overrightarrow{IL} = 3\\overrightarrow{KI}$',
        '$\\overrightarrow{IL} = \\frac{1}{5}\\overrightarrow{KI}$',
        '$I, K, L$ forment un triangle rectangle',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\overrightarrow{KI} = \\frac{1}{2}\\overrightarrow{BA} - \\frac{3}{5}\\overrightarrow{BC}$ et $\\overrightarrow{IL} = -\\frac{5}{2}\\overrightarrow{BA} + 3\\overrightarrow{BC} = -5\\overrightarrow{KI}$ : les vecteurs étant colinéaires, $I, K, L$ sont alignés.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Méthode Bac',
    stepTheme: 'orange',
    stepTitle: 'Bien utiliser $\\overrightarrow{AG}$ à partir d’une combinaison linéaire',
    paragraphText:
      'Si un énoncé définit un point $H$ par $2\\overrightarrow{AH} = \\overrightarrow{AB} - 2\\overrightarrow{AC}$, comment retrouver ses coefficients barycentriques ? On écrit $\\overrightarrow{AH} = \\frac{1}{2}\\overrightarrow{AB} - \\overrightarrow{AC}$, puis avec Chasles autour de $H$ : $2\\overrightarrow{AH} = (\\overrightarrow{AH}+\\overrightarrow{HB}) - 2(\\overrightarrow{AH}+\\overrightarrow{HC})$, ce qui donne $3\\overrightarrow{HA} + \\overrightarrow{HB} - 2\\overrightarrow{HC} = \\vec{0}$, soit $H = \\operatorname{bar}\\{(A,3),(B,1),(C,-2)\\}$.',
    formula: {
      name: 'Passage relation vectorielle → barycentre',
      formula: 'a\\overrightarrow{AH} = b\\overrightarrow{AB} + c\\overrightarrow{AC} \\iff (a - b - c)\\overrightarrow{HA} + b\\overrightarrow{HB} + c\\overrightarrow{HC} = \\vec{0}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p02_q07',
      type: 'mcq',
      prompt: 'Si $\\overrightarrow{AG} = -\\overrightarrow{AB} + \\overrightarrow{AC}$, alors $G$ est le barycentre de :',
      options: [
        '$(A ; -1),\\; (B ; 1),\\; (C ; 1)$',
        '$(A ; 1),\\; (B ; -1),\\; (C ; 1)$',
        '$(A ; 1),\\; (B ; 1),\\; (C ; -1)$',
        '$(A ; 3),\\; (B ; -1),\\; (C ; 1)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\alpha = 1 - (-1) - 1 = 1$, $\\beta = -1$ et $\\gamma = 1$. On vérifie : $\\overrightarrow{GA} - \\overrightarrow{GB} + \\overrightarrow{GC} = \\vec{0} \\iff \\overrightarrow{AG} = -\\overrightarrow{AB} + \\overrightarrow{AC}$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Notion de ligne de niveau $k$',
    paragraphText:
      'Soit $f$ une application du plan $\\mathcal{P}$ dans $\\mathbb{R}$ et $k$ un nombre réel. On appelle **ligne de niveau $k$** de $f$ l’ensemble des points $M$ du plan tels que $f(M) = k$. Dans l’espace, cet ensemble est appelé **surface de niveau $k$**.',
    formula: {
      name: 'Ligne de niveau k',
      formula: 'E_k = \\{ M \\in \\mathcal{P} \\mid f(M) = k \\}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p03_q01',
      type: 'mcq',
      prompt: 'Si $A$ est un point fixe du plan et $f(M) = MA^2$, quelle est la ligne de niveau $9$ de $f$ ?',
      options: [
        'Le cercle de centre $A$ et de rayon $9$',
        'Le cercle de centre $A$ et de rayon $3$',
        'Le point $A$ uniquement',
        'L’ensemble vide',
      ],
      correctAnswerIndex: 1,
      explanation: '$MA^2 = 9 \\iff MA = 3$ (car $MA \\geqslant 0$) : c’est le cercle de centre $A$ et de rayon $3$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Leibniz ($\\sum \\neq 0$)',
    stepTheme: 'violet',
    stepTitle: 'Réduction de $f(M) = \\sum_{i=1}^n \\alpha_i MA_i^2$ lorsque $\\sum \\alpha_i \\neq 0$',
    paragraphText:
      'Si $S = \\sum_{i=1}^n \\alpha_i \\neq 0$ et $G = \\operatorname{bar}\\{(A_i, \\alpha_i)\\}$, alors en introduisant $G$ ($\\overrightarrow{MA_i} = \\overrightarrow{MG} + \\overrightarrow{GA_i}$), le terme croisé $2\\overrightarrow{MG}\\cdot\\sum \\alpha_i\\overrightarrow{GA_i}$ s’annule. On obtient la **formule de Leibniz** : $\\sum_{i=1}^n \\alpha_i MA_i^2 = \\left(\\sum_{i=1}^n \\alpha_i\\right)MG^2 + \\sum_{i=1}^n \\alpha_i GA_i^2$.',
    formula: {
      name: 'Réduction de Leibniz (S ≠ 0)',
      formula: '\\sum_{i=1}^n \\alpha_i MA_i^2 = S\\,MG^2 + \\sum_{i=1}^n \\alpha_i GA_i^2 \\qquad \\left(S = \\sum_{i=1}^n \\alpha_i \\neq 0\\right)',
    },
    keyRule: 'La ligne de niveau $k$ équivaut à $MG^2 = c$ (avec $c = \\frac{k - \\sum \\alpha_i GA_i^2}{S}$) : c’est donc $\\emptyset$ (si $c < 0$), $\\{G\\}$ (si $c = 0$), ou le cercle de centre $G$ et de rayon $\\sqrt{c}$ (si $c > 0$). Dans l’espace, le cercle devient une sphère.',
    exercise: {
      id: 'tc_m_geo_l02_p03_q02',
      type: 'mcq',
      prompt: 'Lorsque $\\sum_{i=1}^n \\alpha_i \\neq 0$, quelles sont les seules natures possibles pour la ligne de niveau $k$ de $M \\mapsto \\sum \\alpha_i MA_i^2$ dans le plan ?',
      options: [
        'Une droite ou un segment',
        '$\\emptyset$, le singleton $\\{G\\}$ ou un cercle de centre $G$',
        'Une parabole ou une ellipse',
        'Toujours un cercle de rayon $\\sqrt{k}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$MG^2 = c$ a pour ensemble solution $\\emptyset$ si $c<0$, $\\{G\\}$ si $c=0$ et le cercle $\\mathcal{C}(G ; \\sqrt{c})$ si $c>0$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Exercice type',
    stepTheme: 'green',
    stepTitle: 'Résoudre $MA^2 - 2MB^2 = 4$ où $AB = 2$',
    paragraphText:
      'La somme vaut $1 - 2 = -1 \\neq 0$. On pose $G = \\operatorname{bar}\\{(A,1),(B,-2)\\}$, donc $\\overrightarrow{AG} = \\frac{-2}{-1}\\overrightarrow{AB} = 2\\overrightarrow{AB}$ (soit $GA^2 = 4AB^2 = 16$ et $\\overrightarrow{BG} = \\overrightarrow{AB}$, soit $GB^2 = AB^2 = 4$). La formule donne $MA^2 - 2MB^2 = -MG^2 + GA^2 - 2GB^2 = -MG^2 + 16 - 8 = -MG^2 + 8$. Ainsi $-MG^2 + 8 = 4 \\iff MG^2 = 4 \\iff MG = 2$ : cercle de centre $G$ et de rayon $2$.',
    formula: {
      name: 'Calcul avec coefficients négatifs',
      formula: 'MA^2 - 2MB^2 = -MG^2 + GA^2 - 2GB^2 = -MG^2 + 8',
    },
    exercise: {
      id: 'tc_m_geo_l02_p03_q03',
      type: 'mcq',
      prompt: 'Pour $AB = 2$ et $G = \\operatorname{bar}\\{(A,1),(B,-2)\\}$, quel est l’ensemble des points $M$ tels que $MA^2 - 2MB^2 = 4$ ?',
      options: [
        'Le cercle de centre $G$ et de rayon $2$',
        'Le cercle de centre $G$ et de rayon $4$',
        'Le point $G$ uniquement',
        'L’ensemble vide',
      ],
      correctAnswerIndex: 0,
      explanation: '$GA = 2AB = 4$ ($GA^2=16$) et $GB = AB = 2$ ($GB^2=4$). Donc $-MG^2 + 16 - 8 = 4 \\iff MG^2 = 4 \\iff MG = 2$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Leibniz ($\\sum = 0$)',
    stepTheme: 'violet',
    stepTitle: 'Réduction lorsque $\\sum_{i=1}^n \\alpha_i = 0$',
    paragraphText:
      'Si $\\sum_{i=1}^n \\alpha_i = 0$, le barycentre n’existe pas ! En fixant un point $O$ quelconque, on obtient $\\sum_{i=1}^n \\alpha_i MA_i^2 = \\sum_{i=1}^n \\alpha_i OA_i^2 - 2\\left(\\sum_{i=1}^n \\alpha_i \\overrightarrow{OA_i}\\right)\\cdot\\overrightarrow{OM}$. Soit $\\vec{u} = \\sum_{i=1}^n \\alpha_i \\overrightarrow{OA_i}$ (vecteur constant) : si $\\vec{u} = \\vec{0}$, la ligne de niveau est $\\emptyset$ ou tout le plan ; si $\\vec{u} \\neq \\vec{0}$, c’est une **droite de vecteur normal $\\vec{u}$** (et un plan de vecteur normal $\\vec{u}$ dans l’espace).',
    formula: {
      name: 'Réduction lorsque S = 0',
      formula: '\\sum \\alpha_i MA_i^2 = \\sum \\alpha_i OA_i^2 - 2\\left(\\sum \\alpha_i \\overrightarrow{OA_i}\\right)\\cdot\\overrightarrow{OM}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p03_q04',
      type: 'mcq',
      prompt: 'Si $\\sum_{i=1}^n \\alpha_i = 0$ et que le vecteur constant $\\vec{u} = \\sum \\alpha_i \\overrightarrow{OA_i}$ est non nul, quelle est la nature de la ligne de niveau $k$ dans le plan ?',
      options: [
        'Un cercle de centre $O$',
        'Une droite de vecteur normal $\\vec{u}$',
        'Toujours l’ensemble vide',
        'Un segment',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’équation s’écrit $-2\\vec{u}\\cdot\\overrightarrow{OM} = c$ avec $\\vec{u} \\neq \\vec{0}$, qui est l’équation d’une droite orthogonale à $\\vec{u}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Astuce $MA^2 - MB^2$',
    stepTheme: 'green',
    stepTitle: 'Résoudre $MA^2 - MB^2 = 16$ avec $AB = 4$',
    paragraphText:
      'Pour deux points avec somme nulle ($1 - 1 = 0$), l’identité $MA^2 - MB^2 = (\\overrightarrow{MA}-\\overrightarrow{MB})\\cdot(\\overrightarrow{MA}+\\overrightarrow{MB}) = \\overrightarrow{BA}\\cdot(2\\overrightarrow{MI}) = 2\\overrightarrow{IM}\\cdot\\overrightarrow{AB}$ (où $I$ est le milieu de $[AB]$) est ultra-rapide ! Ici $2\\overrightarrow{IM}\\cdot\\overrightarrow{AB} = 16 \\iff \\overrightarrow{IM}\\cdot\\overrightarrow{AB} = 8$. En projetant $M$ orthogonalement en $H$ sur $(AB)$, $\\overline{IH} = \\frac{8}{AB} = \\frac{8}{4} = 2 = \\frac{AB}{2}$, donc $H = B$ : l’ensemble est la **droite perpendiculaire à $(AB)$ en $B$**.',
    formula: {
      name: 'Différence de deux carrés de distances',
      formula: 'MA^2 - MB^2 = 2\\overrightarrow{IM}\\cdot\\overrightarrow{AB} \\qquad (I \\text{ milieu de } [AB])',
    },
    exercise: {
      id: 'tc_m_geo_l02_p03_q05',
      type: 'mcq',
      prompt: 'Soient $A, B$ tels que $AB = 4$. Quel est l’ensemble des points $M$ du plan vérifiant $MA^2 - MB^2 = 16$ ?',
      options: [
        'La médiatrice de $[AB]$',
        'La droite perpendiculaire à $(AB)$ passant par $A$',
        'La droite perpendiculaire à $(AB)$ passant par $B$',
        'Le cercle de diamètre $[AB]$',
      ],
      correctAnswerIndex: 2,
      explanation: '$2\\overrightarrow{IM}\\cdot\\overrightarrow{AB} = 16 \\iff \\overline{IH}\\times AB = 8 \\iff \\overline{IH} = 2 = IB$, avec $H$ du même côté que $B$ par rapport à $I$, donc $H = B$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice 1 (PDF)',
    stepTheme: 'blue',
    stepTitle: 'Applications sur un triangle équilatéral $ABC$ de côté $4$',
    paragraphText:
      'Soit $ABC$ équilatéral direct de côté $4\\text{ cm}$, $K$ son centre de gravité et $P$ le milieu de $[AB]$. En appliquant le théorème de la médiane ($MA^2 + MB^2 = 2MP^2 + \\frac{AB^2}{2} = 2MP^2 + 8$), l’équation $MA^2 + MB^2 = 8$ devient $2MP^2 + 8 = 8 \\iff MP = 0$, soit le singleton $\\{P\\}$ ! De même pour $MA^2 + MB^2 + MC^2 = 3MK^2 + KA^2 + KB^2 + KC^2$ : comme $KA = \\frac{4\\sqrt{3}}{3}$, on a $3KA^2 = 16$, donc $MA^2 + MB^2 + MC^2 = 0$ donne $\\emptyset$, et $MA^2 + MB^2 + MC^2 = 32$ donne $3MK^2 = 16$, un cercle de centre $K$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Synthèse des 5 cas de l’Exercice 1 (triangle équilatéral de côté 4)',
      tableData: {
        headers: ['Condition', 'Réduction', 'Nature de l’ensemble'],
        rows: [
          ['$MA^2 + MB^2 = 8$', '$2MP^2 + 8 = 8 \\iff MP = 0$', '$\\{P\\}$'],
          ['$MA^2 + MB^2 + MC^2 = 0$', '$3MK^2 + 16 = 0$', '$\\emptyset$'],
          ['$\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\pi$', '$M \\in ]AB[$', 'Un segment ouvert'],
          ['$MB^2 - MC^2 = 8$', 'Produit scalaire $2\\overrightarrow{JM}\\cdot\\overrightarrow{BC} = 8$', 'Une droite'],
          ['$MA^2 + MB^2 + MC^2 = 32$', '$3MK^2 = 16$', 'Un cercle de centre $K$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l02_p03_q06',
      type: 'mcq',
      prompt: 'Dans le triangle équilatéral $ABC$ de côté $4$ (de centre de gravité $K$), quel est l’ensemble des points $M$ vérifiant $MA^2 + MB^2 + MC^2 = 0$ ?',
      options: ['$\\{K\\}$', 'Un cercle de centre $K$', '$\\emptyset$', 'La droite $(AK)$'],
      correctAnswerIndex: 2,
      explanation: '$MA^2+MB^2+MC^2 = 3MK^2 + KA^2+KB^2+KC^2 = 3MK^2 + 16 \\geqslant 16 > 0$, donc l’ensemble est vide $\\emptyset$ (ou tout simplement une somme de carrés est nulle ssi $M=A=B=C$, impossible car $ABC$ est non aplati).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vigilance',
    stepTheme: 'orange',
    stepTitle: 'Formule de Leibniz : vérifier les carrés et les signes',
    paragraphText:
      'Quand on calcule la constante $\\sum \\alpha_i GA_i^2$, il faut bien garder **le signe de chaque coefficient $\\alpha_i$** tout en sachant que les longueurs $GA_i^2$ sont toujours positives ! Et pour trouver si un point $C$ appartient à une ligne de niveau $E_k$, il suffit souvent de remplacer $M$ par $C$ directement dans l’expression initiale sans même réduire avec Leibniz.',
    konanTip: 'Pour déterminer la valeur de $k$ telle que $C \\in E_k$, substitue directement $M = C$ dans $f(M) = k$ : zéro risque d’erreur de barycentre !',
    exercise: {
      id: 'tc_m_geo_l02_p03_q07',
      type: 'mcq',
      prompt: 'Dans un triangle $ABC$ rectangle en $A$ tel que $AB = 2a$ et $AC = a$, quelle est la valeur de $k$ pour laquelle le point $C$ appartient à l’ensemble $E_k : 3MA^2 + MB^2 - 2MC^2 = ka^2$ ?',
      options: ['$k = 4$', '$k = 6$', '$k = 8$', '$k = 10$'],
      correctAnswerIndex: 2,
      explanation: 'En remplaçant $M$ par $C$ : $3CA^2 + CB^2 - 0 = 3a^2 + (AB^2 + AC^2) = 3a^2 + 4a^2 + a^2 = 8a^2$, donc $k = 8$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Cercle d’Apollonius',
    stepTheme: 'violet',
    stepTitle: 'Ligne de niveau $M \\mapsto \\frac{MA}{MB}$ ($k > 0$)',
    paragraphText:
      'Soient $A$ et $B$ deux points distincts et $k > 0$. Si $k = 1$, $\\frac{MA}{MB} = 1 \\iff MA = MB$ : l’ensemble cherché est la **médiatrice du segment $[AB]$**. Si $k \\neq 1$, $\\frac{MA}{MB} = k \\iff MA^2 - k^2 MB^2 = 0 \\iff (\\overrightarrow{MA} - k\\overrightarrow{MB})\\cdot(\\overrightarrow{MA} + k\\overrightarrow{MB}) = 0$, soit $\\overrightarrow{MG_2}\\cdot\\overrightarrow{MG_1} = 0$ : c’est le **cercle de diamètre $[G_1 G_2]$** où $G_1 = \\operatorname{bar}\\{(A,1),(B,k)\\}$ et $G_2 = \\operatorname{bar}\\{(A,1),(B,-k)\\}$.',
    formula: {
      name: 'Ensemble MA / MB = k (k > 0)',
      formula: 'k = 1 \\implies \\text{médiatrice de } [AB] \\qquad ; \\qquad k \\neq 1 \\implies \\text{cercle de diamètre } [G_1G_2]',
    },
    exercise: {
      id: 'tc_m_geo_l02_p04_q01',
      type: 'mcq',
      prompt: 'Soient $A$ et $B$ distincts. Quel est l’ensemble $(E)$ des points $M$ tels que $\\frac{MA}{MB} = \\frac{1}{2}$ ?',
      options: [
        'La médiatrice de $[AB]$',
        'Le cercle de diamètre $[G_1G_2]$ avec $G_1 = \\operatorname{bar}\\{(A,2),(B,1)\\}$ et $G_2 = \\operatorname{bar}\\{(A,2),(B,-1)\\}$',
        'Le cercle de diamètre $[AB]$',
        'La droite $(AB)$ privée de $B$',
      ],
      correctAnswerIndex: 1,
      explanation: '$k = \\frac{1}{2} \\neq 1$ : $G_1 = \\operatorname{bar}\\{(A,1),(B,\\frac{1}{2})\\} = \\operatorname{bar}\\{(A,2),(B,1)\\}$ et $G_2 = \\operatorname{bar}\\{(A,1),(B,-\\frac{1}{2})\\} = \\operatorname{bar}\\{(A,2),(B,-1)\\}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Rayon explicite',
    stepTheme: 'blue',
    stepTitle: 'Se ramener à Leibniz ou trouver le centre du cercle d’Apollonius',
    paragraphText:
      'On peut aussi écrire $\\frac{MA}{MB} = k \\iff MA^2 - k^2 MB^2 = 0$ puis utiliser la réduction de Leibniz avec le barycentre de $(A,1)$ et $(B,-k^2)$, mais la factorisation par $[G_1 G_2]$ donne directement deux points du cercle sur $(AB)$ : son centre est le milieu de $[G_1 G_2]$ !',
    formula: {
      name: 'Passage au carré (k > 0)',
      formula: '\\frac{MA}{MB} = k \\iff MA^2 - k^2 MB^2 = 0 \\quad (M \\neq B)',
    },
    exercise: {
      id: 'tc_m_geo_l02_p04_q02',
      type: 'mcq',
      prompt: 'Si $AB = 6$, quelle est la distance entre les deux extrémités $G_1$ et $G_2$ (le diamètre du cercle) pour l’ensemble $\\frac{MA}{MB} = \\frac{1}{2}$ ?',
      options: ['$2$', '$4$', '$6$', '$8$'],
      correctAnswerIndex: 3,
      explanation: '$G_1 = \\operatorname{bar}\\{(A,2),(B,1)\\} \\implies \\overrightarrow{AG_1} = \\frac{1}{3}\\overrightarrow{AB}$ (abscisse $2$ depuis $A$). $G_2 = \\operatorname{bar}\\{(A,2),(B,-1)\\} \\implies \\overrightarrow{AG_2} = -\\overrightarrow{AB}$ (abscisse $-6$). Diamètre $G_1G_2 = |2 - (-6)| = 8$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Angle $0$ et $\\pi$',
    stepTheme: 'violet',
    stepTitle: 'Ligne de niveau $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = 0$ ou $\\pi$',
    paragraphText:
      'Soient $A$ et $B$ deux points distincts (les points $A$ et $B$ sont toujours exclus car $\\overrightarrow{MA}$ ou $\\overrightarrow{MB}$ serait nul). Lorsque $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = 0$, les vecteurs sont colinéaires de **même sens** : $M$ parcourt la droite $(AB)$ privée du segment $[AB]$. Lorsque $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\pi$, ils sont colinéaires de **sens contraires** : $M$ parcourt le segment ouvert $]AB[$ (segment $[AB]$ privé de $A$ et $B$).',
    formula: {
      name: 'Cas limites 0 et π',
      formula: '\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = 0 \\iff M \\in (AB) \\setminus [AB] \\qquad ; \\qquad = \\pi \\iff M \\in [AB] \\setminus \\{A, B\\}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p04_q03',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des points $M$ du plan tels que $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\pi$ ?',
      options: [
        'La droite $(AB)$ privée de $A$ et $B$',
        'Le segment $[AB]$ privé des points $A$ et $B$',
        'La droite $(AB)$ privée du segment $[AB]$',
        'La médiatrice de $[AB]$',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’angle orienté vaut $\\pi$ lorsque $\\overrightarrow{MA}$ et $\\overrightarrow{MB}$ sont colinéaires de sens contraires, donc $M$ est strictement entre $A$ et $B$ : $[AB] \\setminus \\{A, B\\}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Arc capable',
    stepTheme: 'violet',
    stepTitle: 'Ligne de niveau $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\alpha$ ($\\alpha \\in ]-\\pi, 0[ \\cup ]0, \\pi[$)',
    paragraphText:
      'Soit $\\alpha \\in ]-\\pi, 0[ \\cup ]0, \\pi[$. Il existe un unique point $O$ de la médiatrice de $[AB]$ tel que l’angle au centre $(\\widehat{\\overrightarrow{OA},\\overrightarrow{OB}}) = 2\\alpha$ (modulo $2\\pi$), et soit $(\\mathcal{C})$ le cercle de centre $O$ passant par $A$ et $B$. L’ensemble des points $M$ tels que $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\alpha$ est l’un des deux **arcs du cercle $(\\mathcal{C})$ d’extrémités $A$ et $B$** (privé de $A$ et $B$). Plus précisément, $M$ est dans le demi-plan de bord $(AB)$ contenant $O$ si et seulement si $-\\frac{\\pi}{2} \\leqslant \\alpha \\leqslant \\frac{\\pi}{2}$.',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Arc capable et théorème de l’angle inscrit orienté',
      caption: 'L’angle inscrit (MA, MB) = α correspond à l’angle au centre (OA, OB) = 2α.',
      svgContent: `<svg viewBox="0 0 280 180" width="265" height="170" xmlns="http://www.w3.org/2000/svg">
        <circle cx="140" cy="95" r="70" fill="none" stroke="#1e293b" stroke-width="1.8"/>
        <line x1="83" y1="135" x2="197" y2="135" stroke="#64748b" stroke-width="1.5"/>
        <polygon points="83,135 197,135 155,27" fill="none" stroke="#2563eb" stroke-width="1.8"/>
        <polyline points="83,135 140,95 197,135" fill="none" stroke="#7c3aed" stroke-width="1.8"/>
        <circle cx="140" cy="95" r="3.5" fill="#7c3aed"/><text x="135" y="88" font-size="12" font-weight="bold" fill="#7c3aed">O</text>
        <circle cx="83" cy="135" r="3.5" fill="#1e293b"/><text x="70" y="144" font-size="12" font-weight="bold" fill="#1e293b">A</text>
        <circle cx="197" cy="135" r="3.5" fill="#1e293b"/><text x="202" y="144" font-size="12" font-weight="bold" fill="#1e293b">B</text>
        <circle cx="155" cy="27" r="3.5" fill="#2563eb"/><text x="155" y="20" font-size="12" font-weight="bold" fill="#2563eb">M</text>
        <text x="143" y="54" font-size="12" font-weight="bold" fill="#2563eb">α</text>
        <text x="134" y="114" font-size="12" font-weight="bold" fill="#7c3aed">2α</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l02_p04_q04',
      type: 'mcq',
      prompt: 'À quelle condition sur $\\alpha \\in ]-\\pi,0[\\cup]0,\\pi[$ le point $M$ appartient-il au demi-plan de bord $(AB)$ contenant le centre $O$ du cercle ?',
      options: [
        '$0 < \\alpha < \\pi$',
        '$-\\frac{\\pi}{2} \\leqslant \\alpha \\leqslant \\frac{\\pi}{2}$',
        '$\\frac{\\pi}{2} < |\\alpha| < \\pi$',
        'Uniquement pour $\\alpha = \\frac{\\pi}{4}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le grand arc contenant le centre $O$ correspond aux angles inscrits aigus ou droits en valeur absolue : $-\\frac{\\pi}{2} \\leqslant \\alpha \\leqslant \\frac{\\pi}{2}$ (et $\\alpha \\neq 0$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Angle droit orienté',
    stepTheme: 'blue',
    stepTitle: 'Les demi-cercles $\\alpha = \\frac{\\pi}{2}$ et $\\alpha = -\\frac{\\pi}{2}$',
    paragraphText:
      'Lorsque $\\alpha = \\frac{\\pi}{2}$, on a $2\\alpha = \\pi$ : le centre $O$ est le milieu de $[AB]$ ! L’ensemble des points $M$ vérifiant $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\frac{\\pi}{2}$ est **l’un des deux demi-cercles ouverts** de diamètre $[AB]$ (celui situé du côté où $(MAB)$ est direct, c’est-à-dire où le repère $(\\overrightarrow{MA}, \\overrightarrow{MB})$ est direct). L’autre demi-cercle ouvert correspond à $-\\frac{\\pi}{2}$.',
    formula: {
      name: 'Demi-cercle ouvert',
      formula: '\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\pm\\frac{\\pi}{2} \\implies \\text{demi-cercle de diamètre } [AB] \\text{ privé de } A, B',
    },
    exercise: {
      id: 'tc_m_geo_l02_p04_q05',
      type: 'mcq',
      prompt: '$ABC$ est un triangle rectangle et isocèle en $C$ de sens direct (donc $A, B, C$ tournent dans le sens trigonométrique). Que vaut $\\operatorname{Mes}(\\widehat{\\overrightarrow{CA},\\overrightarrow{CB}})$ ?',
      options: ['$\\frac{\\pi}{4}$', '$-\\frac{\\pi}{2}$', '$\\frac{\\pi}{2}$', '$\\pi$'],
      correctAnswerIndex: 2,
      explanation: 'Comme le triangle $ABC$ est direct et rectangle en $C$, le couple de vecteurs $(\\overrightarrow{CA}, \\overrightarrow{CB})$ est orthogonal direct, donc $\\operatorname{Mes}(\\widehat{\\overrightarrow{CA},\\overrightarrow{CB}}) = \\frac{\\pi}{2}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Exercice Vrai/Faux',
    stepTheme: 'green',
    stepTitle: 'Comparer ligne de niveau $\\frac{\\pi}{2}$ et $\\frac{\\pi}{4}$ sur un triangle direct',
    paragraphText:
      'Reprenons $ABC$ rectangle isocèle en $C$ de sens direct, et $(\\mathcal{C})$ son cercle circonscrit (de diamètre $[AB]$). L’ensemble des $M$ tels que $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\frac{\\pi}{2}$ est exactement le demi-cercle $\\breve{AB} \\setminus \\{A, B\\}$ contenant $C$. En revanche, $C$ N’appartient PAS à la ligne de niveau $\\frac{\\pi}{4}$, car en $C$ l’angle $(\\overrightarrow{CA}, \\overrightarrow{CB})$ vaut $\\frac{\\pi}{2}$ et non $\\frac{\\pi}{4}$ !',
    formula: {
      name: 'Arc contenant C',
      formula: 'C \\in \\{M \\mid \\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\frac{\\pi}{2}\\} = \\breve{AB}_{C} \\setminus \\{A,B\\}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p04_q06',
      type: 'mcq',
      prompt: 'Dans ce même triangle $ABC$ rectangle isocèle en $C$ de sens direct, quelle affirmation est FAUSSE ?',
      options: [
        'Les points où $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = 0$ forment $(AB) \\setminus [AB]$',
        'Les points où $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\pi$ forment $[AB] \\setminus \\{A, B\\}$',
        'L’ensemble où $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\frac{\\pi}{2}$ est l’arc $\\breve{AB} \\setminus \\{A, B\\}$ contenant $C$',
        'Le point $C$ appartient à la ligne de niveau $\\frac{\\pi}{4}$ de $M \\mapsto \\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}})$',
      ],
      correctAnswerIndex: 3,
      explanation: 'Puisque le triangle est rectangle en $C$ direct, $\\operatorname{Mes}(\\widehat{\\overrightarrow{CA},\\overrightarrow{CB}}) = \\frac{\\pi}{2} \\neq \\frac{\\pi}{4}$ : l’affirmation 4 est fausse.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Angle orienté vs géométrique',
    stepTheme: 'orange',
    stepTitle: 'Attention : un cercle entier correspond à $(MA, MB) \\equiv \\alpha [\\pi]$',
    paragraphText:
      'Pour un angle géométrique $\\widehat{AMB} = \\theta$ ou un angle de droites $(\\overrightarrow{MA},\\overrightarrow{MB}) \\equiv \\alpha [\\pi]$, l’ensemble solution est la réunion des deux arcs (le cercle entier privé de $A$ et $B$). En revanche, pour la mesure principale orientée $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\alpha$, c’est **un seul arc** (un seul côté de la droite $(AB)$), et les points $A, B$ sont toujours exclus !',
    keyRule: 'Mesure orientée = 1 seul arc ouvert ; angle géométrique (ou congruence modulo $\\pi$) = les 2 arcs symétriques (privés de $A$ et $B$).',
    exercise: {
      id: 'tc_m_geo_l02_p04_q07',
      type: 'mcq',
      prompt: 'Que devient l’ensemble des points $M$ du plan si la condition est $\\overrightarrow{MA} \\cdot \\overrightarrow{MB} = 0$ au lieu de $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\frac{\\pi}{2}$ ?',
      options: [
        'Un demi-cercle privé de $A$ et $B$',
        'Le cercle entier de diamètre $[AB]$, points $A$ et $B$ INCLUS',
        'La médiatrice de $[AB]$',
        'Le segment $[AB]$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\overrightarrow{MA}\\cdot\\overrightarrow{MB} = 0$ autorise $M=A$, $M=B$, et les deux orientations $+\\frac{\\pi}{2}$ et $-\\frac{\\pi}{2}$ : c’est donc tout le cercle de diamètre $[AB]$, $A$ et $B$ compris.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'blue',
    stepTitle: 'Centre de gravité d’un cube homogène amputé d’un petit cube',
    paragraphText:
      'Un cube homogène d’arête $a$, de centre $O$ et de masse volumique $\\rho$, est amputé au sommet $F$ (opposé à $D$) d’un petit cube de côté $\\frac{a}{2}$ et de centre $K$. La masse du grand cube plein est $M = a^3\\rho$, celle du petit cube retiré est $m = \\left(\\frac{a}{2}\\right)^3\\rho = \\frac{a^3\\rho}{8}$ (8 fois plus petite). Par superposition, le solide évidé est équivalent au grand cube plein de masse $M$ en $O$ auquel on affecte le petit cube avec une **masse négative** $-m$ en $K$ !',
    visualSchema: {
      type: 'geometry_svg',
      title: 'Cube d’arête a amputé d’un petit cube de côté a/2',
      caption: 'Masse totale = (grand cube plein en O) + (petit cube retranché négativement en K).',
      svgContent: `<svg viewBox="0 0 260 175" width="250" height="168" xmlns="http://www.w3.org/2000/svg">
        <rect x="45" y="45" width="110" height="110" fill="none" stroke="#1e293b" stroke-width="2"/>
        <polygon points="45,45 85,20 195,20 155,45" fill="none" stroke="#1e293b" stroke-width="2"/>
        <polygon points="155,45 195,20 195,130 155,155" fill="none" stroke="#1e293b" stroke-width="2"/>
        <line x1="45" y1="155" x2="85" y2="130" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
        <line x1="85" y1="20" x2="85" y2="130" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
        <line x1="85" y1="130" x2="195" y2="130" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
        <rect x="100" y="45" width="55" height="55" fill="#fef2f2" fill-opacity="0.7" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="4,2"/>
        <circle cx="120" cy="87" r="3.5" fill="#2563eb"/><text x="106" y="84" font-size="12" font-weight="bold" fill="#2563eb">O</text>
        <circle cx="137" cy="63" r="3.5" fill="#dc2626"/><text x="142" y="61" font-size="12" font-weight="bold" fill="#dc2626">K</text>
        <text x="77" y="142" font-size="11" font-weight="bold" fill="#1e293b">D</text>
        <text x="199" y="19" font-size="11" font-weight="bold" fill="#1e293b">G</text>
      </svg>`,
    },
    exercise: {
      id: 'tc_m_geo_l02_p05_q01',
      type: 'mcq',
      prompt: 'Quelle est la masse du petit cube d’arête $\\frac{a}{2}$ par rapport à celle du grand cube plein d’arête $a$ (même matériau homogène) ?',
      options: ['La moitié ($1/2$)', 'Le quart ($1/4$)', 'Le huitième ($1/8$)', 'Le seizième ($1/16$)'],
      correctAnswerIndex: 2,
      explanation: 'Le volume est proportionnel au cube de l’arête : $\\left(\\frac{a}{2}\\right)^3 = \\frac{a^3}{8}$, donc le grand cube plein a une masse $8$ fois plus grande.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Calcul des masses',
    stepTheme: 'green',
    stepTitle: 'Position exacte du centre de gravité $G$ du solide évidé',
    paragraphText:
      'Le centre de gravité $O$ du grand cube plein est barycentre du solide évidé (masse $\\frac{7}{8}a^3\\rho$ en $G$) et du petit cube (masse $\\frac{1}{8}a^3\\rho$ en $K$). Par associativité, cela revient exactement à écrire $G = \\operatorname{bar}\\left\\{\\left(O ; a^3\\rho\\right),\\; \\left(K ; -\\frac{a^3\\rho}{8}\\right)\\right\\} = \\operatorname{bar}\\{(O ; 8),\\; (K ; -1)\\}$, ou encore avec les masses $\\frac{7}{8}$ et $-\\frac{1}{8}$ (somme $6$ si $\\{(O;7),(K;-1)\\}$, d’où $\\overrightarrow{OG} = -\\frac{1}{6}\\overrightarrow{OK}$). Comme $\\overrightarrow{OK} = -\\frac{1}{2}\\overrightarrow{OD}$ lorsque l’amputation est opposée à $D$, on obtient $\\overrightarrow{OG} = \\frac{1}{12}\\overrightarrow{OD}$ : le centre de gravité s’est déplacé !',
    formula: {
      name: 'Barycentre du solide amputé',
      formula: 'G = \\operatorname{bar}\\{(O ; 7),\\; (K ; -1)\\} \\implies \\overrightarrow{OG} = -\\frac{1}{6}\\overrightarrow{OK} = \\frac{1}{12}\\overrightarrow{OD}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p05_q02',
      type: 'mcq',
      prompt: 'Avec $G = \\operatorname{bar}\\{(O ; 7),\\; (K ; -1)\\}$ et $\\overrightarrow{OK} = -\\frac{1}{2}\\overrightarrow{OD}$, où se situe le centre de gravité $G$ ?',
      options: [
        '$G = O$ (le centre ne bouge pas)',
        '$G$ vérifie $\\overrightarrow{OG} = \\frac{1}{12}\\overrightarrow{OD}$ (sur $[OD]$)',
        '$G$ vérifie $\\overrightarrow{OG} = \\frac{1}{8}\\overrightarrow{OK}$',
        '$G$ est le milieu de $[OD]$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\overrightarrow{OG} = \\frac{-1}{7 + (-1)}\\overrightarrow{OK} = -\\frac{1}{6}\\overrightarrow{OK} = -\\frac{1}{6}\\left(-\\frac{1}{2}\\overrightarrow{OD}\\right) = \\frac{1}{12}\\overrightarrow{OD}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Exercice 5 (q1)',
    stepTheme: 'green',
    stepTitle: 'Égalité de deux normes vectorielles : $\\|\\vec{u}(M)\\| = \\|\\vec{v}(M)\\|$',
    paragraphText:
      'Dans un triangle $ABC$ rectangle en $A$ ($AB = 2a$, $AC = a$), étudions l’ensemble $(C)$ des points $M$ tels que $\\|\\overrightarrow{MA} - \\overrightarrow{MB} + \\overrightarrow{MC}\\| = \\|\\overrightarrow{MA} + \\overrightarrow{MB} - 2\\overrightarrow{MC}\\|$. À gauche, la somme vaut $1 - 1 + 1 = 1 \\neq 0$, donc $\\overrightarrow{MA}-\\overrightarrow{MB}+\\overrightarrow{MC} = \\overrightarrow{MG}$ avec $G = \\operatorname{bar}\\{(A,1),(B,-1),(C,1)\\}$. À droite, $1 + 1 - 2 = 0$ : le vecteur est constant et vaut, en prenant $M=I$ (milieu de $[AB]$), $2\\overrightarrow{CI}$, de norme $2IC = 2a\\sqrt{2}$. D’où $MG = 2a\\sqrt{2}$ (et plus généralement pour une somme $S \\neq 0$, $MG = \\frac{\\|\\vec{V}_0\\|}{|S|}$).',
    formula: {
      name: 'Norme avec sommes non nulle et nulle',
      formula: '\\|S\\,\\overrightarrow{MG}\\| = \\|\\vec{V}_0\\| \\iff MG = \\frac{\\|\\vec{V}_0\\|}{|S|} \\quad (S \\neq 0)',
    },
    konanTip: 'Dans l’Exercice 5 du PDF, $IC^2 = IA^2 + AC^2 = a^2 + a^2 = 2a^2 \\implies IC = a\\sqrt{2}$ car $ABC$ est rectangle en $A$ et $IA = \\frac{AB}{2} = a$.',
    exercise: {
      id: 'tc_m_geo_l02_p05_q03',
      type: 'mcq',
      prompt: 'Dans le triangle $ABC$ rectangle en $A$ avec $AB = 2a$ et $AC = a$, quelle est la norme du vecteur constant $\\overrightarrow{MA} + \\overrightarrow{MB} - 2\\overrightarrow{MC}$ (où $I$ est le milieu de $[AB]$) ?',
      options: ['$a$', '$a\\sqrt{2}$', '$2a\\sqrt{2}$', '$3a$'],
      correctAnswerIndex: 2,
      explanation: 'Pour $M=I$, $\\overrightarrow{IA}+\\overrightarrow{IB} = \\vec{0}$, donc le vecteur constant vaut $-2\\overrightarrow{IC} = 2\\overrightarrow{CI}$. Comme $IA = a$ et $AC = a$, $IC = a\\sqrt{2}$, donc sa norme est $2IC = 2a\\sqrt{2}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Exercice 5 (q2)',
    stepTheme: 'green',
    stepTitle: 'Étude complète de $3MA^2 + MB^2 - 2MC^2 = 8a^2$',
    paragraphText:
      'Soit $H$ défini par $\\overrightarrow{AH} = \\frac{1}{2}\\overrightarrow{AB} - \\overrightarrow{AC}$ (soit $2\\overrightarrow{AH} = \\overrightarrow{AB} - 2\\overrightarrow{AC}$). On en déduit $3\\overrightarrow{HA} + \\overrightarrow{HB} - 2\\overrightarrow{HC} = \\vec{0}$, donc $H = \\operatorname{bar}\\{(A,3),(B,1),(C,-2)\\}$ (somme $3+1-2 = 2 \\neq 0$). Comme pour $M=C$ on a $3CA^2 + CB^2 - 0 = 3a^2 + 5a^2 = 8a^2$, le point $C$ appartient à $(\\Gamma) : 3MA^2 + MB^2 - 2MC^2 = 8a^2$. Ainsi $(\\Gamma)$ est tout simplement le **cercle de centre $H$ passant par $C$** !',
    formula: {
      name: 'Astuce du point particulier C ∈ (Γ)',
      formula: '(\\Gamma) : S\\,MH^2 + \\text{cte} = k \\quad \\text{et} \\quad C \\in (\\Gamma) \\implies (\\Gamma) = \\mathcal{C}(H ; HC)',
    },
    exercise: {
      id: 'tc_m_geo_l02_p05_q04',
      type: 'mcq',
      prompt: 'Une fois que l’on a montré que $H = \\operatorname{bar}\\{(A,3),(B,1),(C,-2)\\}$ et que $C \\in (\\Gamma)$ pour $(\\Gamma) : 3MA^2 + MB^2 - 2MC^2 = 8a^2$, quel est l’ensemble $(\\Gamma)$ ?',
      options: [
        'Le singleton $\\{H\\}$',
        'Le cercle de centre $H$ passant par $C$',
        'Le cercle de centre $C$ passant par $H$',
        'La droite $(HC)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Puisque la somme des coefficients vaut $2 \\neq 0$, la ligne de niveau est centrée en $H$. Comme $C$ vérifie l’équation et $C \\neq H$, $(\\Gamma)$ est le cercle de centre $H$ et de rayon $HC$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Méthode générale',
    stepTheme: 'violet',
    stepTitle: 'Tableau décisionnel des lignes de niveau au Bac C',
    paragraphText:
      'Face à une ligne de niveau au Baccalauréat C, identifie d’abord la famille d’expression avant de te lancer dans les coordonnées : somme vectorielle $\\|\\sum \\alpha_i \\overrightarrow{MA_i}\\|$, somme pondérée de carrés $\\sum \\alpha_i MA_i^2$, quotient $\\frac{MA}{MB}$ ou angle orienté $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}})$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Arbre de décision rapide — Lignes de niveau',
      tableData: {
        headers: ['Forme rencontrée', 'Condition clé', 'Nature géométrique'],
        rows: [
          ['$\\|\\sum \\alpha_i \\overrightarrow{MA_i}\\| = r$', '$\\sum \\alpha_i = S \\neq 0$', 'Cercle (ou sphère) de centre $G$, rayon $r/|S|$'],
          ['$\\sum \\alpha_i MA_i^2 = k$', '$\\sum \\alpha_i \\neq 0$', '$\\emptyset$, $\\{G\\}$ ou cercle (sphère) de centre $G$'],
          ['$\\sum \\alpha_i MA_i^2 = k$', '$\\sum \\alpha_i = 0$ et $\\vec{u} \\neq \\vec{0}$', 'Droite (ou plan) de vecteur normal $\\vec{u}$'],
          ['$MA / MB = k$', '$k > 0, k \\neq 1$', 'Cercle de diamètre $[G_1 G_2]$ ($k=1$ : médiatrice)'],
          ['$\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\alpha$', '$\\alpha \\in ]-\\pi,0[\\cup]0,\\pi[$', 'Un arc de cercle ouvert d’extrémités $A, B$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_geo_l02_p05_q05',
      type: 'mcq',
      prompt: 'Dans l’espace, quelle est la nature de la surface de niveau $k$ de $M \\mapsto 2MA^2 + MB^2 - 3MC^2$ si le vecteur $\\vec{u} = 2\\overrightarrow{OA} + \\overrightarrow{OB} - 3\\overrightarrow{OC}$ est non nul ?',
      options: [
        'Une sphère de centre $O$',
        'Un plan de vecteur normal $\\vec{u}$',
        'Une droite de vecteur directeur $\\vec{u}$',
        'Un cercle de l’espace',
      ],
      correctAnswerIndex: 1,
      explanation: 'La somme des coefficients est $2 + 1 - 3 = 0$. Dans l’espace, $\\vec{u}\\cdot\\overrightarrow{OM} = c$ avec $\\vec{u} \\neq \\vec{0}$ définit un plan de vecteur normal $\\vec{u}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Vérification rapide',
    stepTheme: 'orange',
    stepTitle: 'Comment éviter les erreurs de signe dans les barycentres partiels',
    paragraphText:
      'Quand on utilise $G = \\operatorname{bar}\\{(A,\\alpha),(B,\\beta),(C,\\gamma)\\}$ pour démontrer un alignement (comme $\\overrightarrow{IL} = -5\\overrightarrow{KI}$), on peut toujours **contrôler** les coefficients trouvés en vérifiant que la relation vectorielle initiale est bien satisfaite : par exemple pour $\\overrightarrow{AL} = 3\\overrightarrow{CA} = -3\\overrightarrow{AC}$, on a $\\overrightarrow{LA} + 3\\overrightarrow{AC} = \\vec{0} \\implies \\overrightarrow{LA} + 3(\\overrightarrow{AL}+\\overrightarrow{LC}) = \\vec{0} \\implies -2\\overrightarrow{LA} + 3\\overrightarrow{LC} = \\vec{0}$, non ! Attention : $\\overrightarrow{LA} = -\\overrightarrow{AL} = -3\\overrightarrow{CA}$, donc $\\overrightarrow{AL} = 3(\\overrightarrow{CL}+\\overrightarrow{LA}) \\implies 4\\overrightarrow{LA} - 3\\overrightarrow{LC} = \\vec{0}$, soit $L = \\operatorname{bar}\\{(A,4),(C,-3)\\}$ !',
    formula: {
      name: 'Vérification sur AL = 3 CA',
      formula: '\\overrightarrow{AL} = 3\\overrightarrow{CA} \\iff 4\\overrightarrow{LA} - 3\\overrightarrow{LC} = \\vec{0} \\iff L = \\operatorname{bar}\\{(A,4),(C,-3)\\}',
    },
    exercise: {
      id: 'tc_m_geo_l02_p05_q06',
      type: 'mcq',
      prompt: 'Si $\\overrightarrow{AL} = 3\\overrightarrow{CA}$, quels sont les coefficients barycentriques corrects de $L$ en fonction de $A$ et $C$ ?',
      options: [
        '$L = \\operatorname{bar}\\{(A ; 1),\\; (C ; 3)\\}$',
        '$L = \\operatorname{bar}\\{(A ; 4),\\; (C ; -3)\\}$',
        '$L = \\operatorname{bar}\\{(A ; -2),\\; (C ; 3)\\}$',
        '$L = \\operatorname{bar}\\{(A ; 3),\\; (C ; -4)\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\overrightarrow{AL} = 3\\overrightarrow{CA} = -3\\overrightarrow{AC}$ : avec $\\alpha+\\gamma = 4-3 = 1$, $\\overrightarrow{AL} = \\frac{-3}{1}\\overrightarrow{AC} = -3\\overrightarrow{AC} = 3\\overrightarrow{CA}$. C’est bien exact !',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Entraînement type BAC',
    stepTheme: 'green',
    stepTitle: 'Synthèse complète : démontrer l’appartenance et réduire',
    paragraphText:
      'Pour toute question ouverte sur les barycentres au Bac C : (1) vérifie $\\sum \\alpha_i \\neq 0$, (2) choisis judicieusement les coefficients lors des regroupements par homogénéité afin d’obtenir le même trio de coefficients sur $A, B, C$, (3) passe aux normes ou carrés scalaires avec Leibniz selon que l’équation est en $\\|\\sum\\alpha_i\\overrightarrow{MA_i}\\|$ ou en $\\sum\\alpha_i MA_i^2$.',
    exercise: {
      id: 'tc_m_geo_l02_p05_q07',
      type: 'mcq',
      prompt: 'Soient $A, B, C$ non alignés et $M$ un point du plan vérifiant $\\|2\\overrightarrow{MA} + \\overrightarrow{MB} - \\overrightarrow{MC}\\| = \\|2\\overrightarrow{MA} - \\overrightarrow{MB} - \\overrightarrow{MC}\\|$. Si $G = \\operatorname{bar}\\{(A,2),(B,1),(C,-1)\\}$ et $I$ est le milieu de $[BC]$, comment s’écrit cette équation ?',
      options: [
        '$2MG = 2IA$ (cercle de centre $G$ et de rayon $IA$)',
        '$MG = 2IA$',
        '$2MG = IA$',
        'La médiatrice de $[GA]$',
      ],
      correctAnswerIndex: 0,
      explanation: 'À gauche, somme $2+1-1 = 2$, d’où $2\\overrightarrow{MG}$. À droite, somme $2-1-1 = 0$, donc pour $M=A$, $-\\overrightarrow{AB}-\\overrightarrow{AC} = -2\\overrightarrow{AI}$, de norme $2IA$. D’où $2MG = 2IA \\iff MG = IA$.',
    },
  },
];

export const MATHS_TLE_C_L02_BARYCENTRE_LIGNES_NIVEAUX: CurriculumChapter = {
  id: 'terminale_c_maths_geometrie_l02_barycentre_lignes_niveaux',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 2,
  title: 'Leçon 2 : Barycentre – Lignes de niveaux',
  summary:
    'Barycentre de n points pondérés, isobarycentre, homogénéité, réduction vectorielle, coordonnées, barycentre partiel, réduction de Leibniz et lignes de niveau (MA²/MB², MA/MB et angles orientés Mes(MA, MB)).',
  officialVolumeHours: 9,
  contentVersion: 2,
  points: [
    {
      id: 'terminale_c_maths_geometrie_l02_barycentre_lignes_niveaux_p01',
      order: 1,
      title: 'Barycentre de n points pondérés : existence, homogénéité et coordonnées',
      summary:
        'Existence et unicité (somme des coefficients non nulle), expression de A₁G, isobarycentre, homogénéité et coordonnées dans le plan ou l’espace.',
      conceptExplanation:
        'Si $\\sum_{i=1}^n \\alpha_i \\neq 0$, il existe un unique point $G$ tel que $\\sum_{i=1}^n \\alpha_i \\overrightarrow{GA_i} = \\vec{0}$. On ne change pas $G$ en multipliant tous les coefficients par $k \\neq 0$. Ses coordonnées sont les moyennes pondérées des coordonnées des $A_i$.',
      keyRule: 'Toujours vérifier d’abord que la somme des coefficients est non nulle avant d’écrire les formules.',
      formulas: [
        { name: 'Définition', formula: '\\sum_{i=1}^n \\alpha_i \\overrightarrow{GA_i} = \\vec{0} \\quad (\\sum \\alpha_i \\neq 0)' },
        { name: '2 points', formula: '\\overrightarrow{AG} = \\frac{\\beta}{\\alpha+\\beta}\\overrightarrow{AB}' },
      ],
      workedExample: {
        title: 'Coordonnées dans l’espace (p.5)',
        statement: 'Calculer les coordonnées de $G = \\operatorname{bar}\\{(A,-1),(B,1),(C,-1)\\}$ avec $A(0;-1;2)$, $B(8;5;-1)$, $C(8;-5;-2)$.',
        methodSteps: [
          'Somme des coefficients : $-1 + 1 - 1 = -1 \\neq 0$.',
          '$x_G = \\frac{0+8-8}{-1} = 0$, $y_G = \\frac{1+5+5}{-1} = -11$, $z_G = \\frac{-2-1+2}{-1} = 1$.',
        ],
        conclusion: '$G(0 ; -11 ; 1)$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l02_barycentre_lignes_niveaux_p02',
      order: 2,
      title: 'Réduction vectorielle, barycentre partiel, alignement et concours',
      summary:
        'Réduire ∑ αᵢ MAᵢ selon le signe nul ou non de ∑ αᵢ, utiliser le barycentre partiel pour construire et prouver l’alignement ou le concours.',
      conceptExplanation:
        'Pour tout $M$, $\\sum \\alpha_i \\overrightarrow{MA_i}$ vaut $(\\sum \\alpha_i)\\overrightarrow{MG}$ si $\\sum \\alpha_i \\neq 0$, et un vecteur constant (calculé en prenant $M=A$) si $\\sum \\alpha_i = 0$. Le barycentre partiel permet de regrouper $p$ points par leur barycentre affecté de la somme de leurs coefficients.',
      keyRule: 'La projection parallèlement à une droite conserve le barycentre.',
      formulas: [
        { name: 'Associativité', formula: 'G = \\operatorname{bar}\\{(H,\\sum_{i=1}^p \\alpha_i),(A_{p+1},\\alpha_{p+1}),\\dots\\}' },
      ],
      workedExample: {
        title: 'Réduction dans le parallélogramme ABCD',
        statement: 'Réduire $4\\overrightarrow{MA} - 5\\overrightarrow{MB} + 2\\overrightarrow{MC} - \\overrightarrow{MD}$.',
        methodSteps: [
          '$4 - 5 + 2 - 1 = 0$, donc le vecteur est indépendant de $M$.',
          'En posant $M = A$ : $-5\\overrightarrow{AB} + 2(\\overrightarrow{AB}+\\overrightarrow{AD}) - \\overrightarrow{AD} = -3\\overrightarrow{AB} + \\overrightarrow{AD}$.',
        ],
        conclusion: 'Le vecteur est constant et égal à $-3\\overrightarrow{AB} + \\overrightarrow{AD}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l02_barycentre_lignes_niveaux_p03',
      order: 3,
      title: 'Lignes de niveau M ↦ ∑ αᵢ MAᵢ² (théorème de Leibniz)',
      summary:
        'Appliquer la formule de Leibniz selon que ∑ αᵢ ≠ 0 (∅, {G}, cercle/sphère) ou ∑ αᵢ = 0 (droite/plan normal, ∅ ou tout le plan), et résoudre MA² − MB² = k.',
      conceptExplanation:
        'Si $S = \\sum \\alpha_i \\neq 0$, $\\sum \\alpha_i MA_i^2 = S\\,MG^2 + \\sum \\alpha_i GA_i^2$. Si $S = 0$, $\\sum \\alpha_i MA_i^2 = \\sum \\alpha_i OA_i^2 - 2(\\sum \\alpha_i \\overrightarrow{OA_i})\\cdot\\overrightarrow{OM}$, ce qui donne une droite (ou un plan dans l’espace) dès que le vecteur constant est non nul.',
      keyRule: 'Pour $MA^2 - MB^2 = k$, privilégier $2\\overrightarrow{IM}\\cdot\\overrightarrow{AB} = k$ avec $I$ milieu de $[AB]$.',
      formulas: [
        { name: 'Formule de Leibniz', formula: '\\sum \\alpha_i MA_i^2 = S\\,MG^2 + \\sum \\alpha_i GA_i^2' },
      ],
      workedExample: {
        title: 'Cas MA² − 2MB² = 4 (AB = 2)',
        statement: 'Déterminer la ligne de niveau $MA^2 - 2MB^2 = 4$ pour $AB = 2$.',
        methodSteps: [
          '$G = \\operatorname{bar}\\{(A,1),(B,-2)\\} \\implies \\overrightarrow{AG} = 2\\overrightarrow{AB}$, d’où $GA = 4$ et $GB = 2$.',
          '$-MG^2 + 16 - 2(4) = 4 \\iff MG^2 = 4 \\iff MG = 2$.',
        ],
        conclusion: 'Cercle de centre $G$ et de rayon $2$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l02_barycentre_lignes_niveaux_p04',
      order: 4,
      title: 'Lignes de niveau MA/MB = k et Mes(MA, MB) = α',
      summary:
        'Identifier le cercle d’Apollonius de diamètre [G₁G₂] (ou médiatrice si k=1) et les ensembles d’angles orientés (droite privée, segment ouvert, arc capable).',
      conceptExplanation:
        'Pour $k > 0$ et $k \\neq 1$, $MA/MB = k$ décrit le cercle de diamètre $[G_1G_2]$ avec $G_1 = \\operatorname{bar}\\{(A,1),(B,k)\\}$ et $G_2 = \\operatorname{bar}\\{(A,1),(B,-k)\\}$. Pour l’angle orienté $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\alpha$, on obtient $(AB)\\setminus[AB]$ ($\\alpha=0$), $]AB[$ ($\\alpha=\\pi$), ou un unique arc capable ouvert d’extrémités $A, B$.',
      keyRule: '$A$ et $B$ sont toujours exclus dans $\\operatorname{Mes}(\\widehat{\\overrightarrow{MA},\\overrightarrow{MB}}) = \\alpha$.',
      formulas: [
        { name: 'Apollonius', formula: '\\frac{MA}{MB} = k \\neq 1 \\iff \\overrightarrow{MG_1}\\cdot\\overrightarrow{MG_2} = 0' },
      ],
      workedExample: {
        title: 'Cas MA / MB = 1/2',
        statement: 'Caractériser l’ensemble $(E) : \\frac{MA}{MB} = \\frac{1}{2}$.',
        methodSteps: [
          '$k = \\frac{1}{2} \\neq 1$, donc $(E)$ est le cercle de diamètre $[G_1G_2]$.',
          '$G_1 = \\operatorname{bar}\\{(A,2),(B,1)\\}$ et $G_2 = \\operatorname{bar}\\{(A,2),(B,-1)\\}$.',
        ],
        conclusion: 'Cercle de diamètre $[G_1 G_2]$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_geometrie_l02_barycentre_lignes_niveaux_p05',
      order: 5,
      title: 'Situation complexe (cube amputé) et problèmes de synthèse Bac C',
      summary:
        'Modéliser des masses retranchées par des coefficients négatifs, combiner réduction vectorielle, norme et Leibniz dans des problèmes type Bac C.',
      conceptExplanation:
        'Un solide homogène amputé d’une partie se modélise par l’affectation d’une masse négative à la partie retirée. Dans les problèmes de synthèse, on enchaîne caractérisation barycentrique, égalité de normes $\\|S\\overrightarrow{MG}\\| = \\|\\vec{V}_0\\|$ et lignes de niveau quadratiques en testant un point particulier comme $C$.',
      keyRule: 'Substituer directement $M = C$ dans $f(M) = k$ pour savoir si $C$ appartient à la ligne de niveau.',
      formulas: [
        { name: 'Solide amputé', formula: 'G = \\operatorname{bar}\\{(O; M_{\\text{plein}}),(K; -m_{\\text{retiré}})\\}' },
      ],
      workedExample: {
        title: 'Cube homogène d’arête a amputé d’un cube de côté a/2',
        statement: 'Déterminer le centre de gravité $G$ du cube plein de centre $O$ privé du petit cube de centre $K$ (opposé à $D$).',
        methodSteps: [
          'Masse grand cube : $a^3\\rho$ ; masse petit cube : $\\frac{a^3\\rho}{8}$ ; masse évidée : $\\frac{7a^3\\rho}{8}$.',
          '$G = \\operatorname{bar}\\{(O ; 7),(K ; -1)\\} \\implies \\overrightarrow{OG} = -\\frac{1}{6}\\overrightarrow{OK} = \\frac{1}{12}\\overrightarrow{OD}$.',
        ],
        conclusion: '$G$ appartient à $[OD]$ avec $\\overrightarrow{OG} = \\frac{1}{12}\\overrightarrow{OD}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};
