import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Pourquoi a-t-on besoin des primitives (calcul d’aires) ?',
    paragraphText:
      'Pour comparer la surface d’une piscine aux bords courbes à celle d’un autre lycée, des élèves se heurtent au calcul d’une aire délimitée par une courbe. En analyse, calculer l’aire sous la courbe d’une fonction positive $f$ revient à déterminer une fonction $F$ dont $f$ est la dérivée : c’est le point de départ de la notion de primitive.',
    konanTip: 'Dériver permet de connaître les variations et les tangentes ; prendre une primitive fait le chemin inverse et ouvre la porte au calcul intégral.',
    exercise: {
      id: 'tc_m_num_l04p_p01_q01',
      type: 'mcq',
      prompt: 'La fonction $F(x) = x^3 + x - 9$ est une primitive sur $\\mathbb{R}$ de quelle fonction $f$ ?',
      options: [
        '$f(x) = \\frac{x^4}{4} + \\frac{x^2}{2} - 9x$',
        '$f(x) = 3x^2 + 1$',
        '$f(x) = 3x^2$',
        '$f(x) = 6x$',
      ],
      correctAnswerIndex: 1,
      explanation: '$F$ est dérivable sur $\\mathbb{R}$ et $\\forall x \\in \\mathbb{R}$, $F’(x) = 3x^2 + 1$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Définition d’une primitive sur un intervalle $I$',
    paragraphText:
      'Soit $f$ une fonction définie sur un intervalle $I$. On appelle primitive de $f$ sur $I$ toute fonction $F$ dérivable sur $I$ telle que pour tout $x \\in I$, $F’(x) = f(x)$.',
    formula: {
      name: 'Caractérisation par dérivation',
      formula: 'F \\text{ primitive de } f \\text{ sur } I \\iff F \\text{ dérivable sur } I \\text{ et } \\forall x \\in I,\\; F’(x) = f(x)',
    },
    exercise: {
      id: 'tc_m_num_l04p_p01_q02',
      type: 'mcq',
      prompt: 'Soit $f(x) = 2x + 5$ sur $\\mathbb{R}$. Parmi les fonctions $F(x)=x^2$, $G(x)=x^2+5x-7$ et $H(x)=x^2+5x$, lesquelles sont des primitives de $f$ sur $\\mathbb{R}$ ?',
      options: [
        '$F$ et $G$ uniquement',
        '$G$ et $H$ uniquement',
        '$H$ uniquement',
        'Toutes les trois',
      ],
      correctAnswerIndex: 1,
      explanation: '$F’(x) = 2x \\ne f(x)$, tandis que $G’(x) = 2x + 5 = f(x)$ et $H’(x) = 2x + 5 = f(x)$ sur tout $\\mathbb{R}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Existence',
    stepTheme: 'violet',
    stepTitle: 'Condition suffisante d’existence : la continuité',
    paragraphText:
      'Toute fonction CONTINUE sur un intervalle $I$ admet au moins une primitive sur $I$. Attention : la continuité sur un intervalle garantit l’existence d’une primitive, même si l’on ne sait pas toujours l’écrire avec des fonctions élémentaires !',
    formula: {
      name: 'Théorème d’existence',
      formula: 'f \\text{ continue sur un intervalle } I \\implies f \\text{ admet une primitive sur } I',
    },
    exercise: {
      id: 'tc_m_num_l04p_p01_q03',
      type: 'mcq',
      prompt: 'Parmi ces fonctions définies (ou étudiées) sur $\\mathbb{R}$, laquelle admet une primitive sur $\\mathbb{R}$ tout entier ?',
      options: [
        '$g(x) = \\frac{1}{x}$',
        '$h(x) = \\sqrt{x}$',
        '$u(x) = \\frac{x}{x^2 + 1}$',
        '$k(x) = \\tan x$',
      ],
      correctAnswerIndex: 2,
      explanation: '$x^2 + 1 \\geqslant 1$ ne s’annule jamais : $u$ est continue sur tout $\\mathbb{R}$, donc elle admet une primitive sur $\\mathbb{R}$ (contrairement à $\\frac{1}{x}$, $\\sqrt{x}$ ou $\\tan x$ qui ne sont pas continues ou définies sur tout $\\mathbb{R}$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Infinité de primitives',
    stepTheme: 'violet',
    stepTitle: 'Ensemble de toutes les primitives d’une fonction sur un intervalle',
    paragraphText:
      'Si $F$ est UNE primitive de $f$ sur un intervalle $I$, alors TOUTE primitive de $f$ sur $I$ est de la forme $x \\mapsto F(x) + c$, où $c \\in \\mathbb{R}$ est une constante réelle arbitraire. Conséquence : toute fonction continue sur un intervalle admet une infinité de primitives, qui ne diffèrent entre elles que par une constante additive.',
    formula: {
      name: 'Famille des primitives',
      formula: 'G \\text{ et } F \\text{ primitives de } f \\text{ sur l’intervalle } I \\iff \\exists c \\in \\mathbb{R},\\; \\forall x \\in I,\\; G(x) = F(x) + c',
    },
    exercise: {
      id: 'tc_m_num_l04p_p01_q04',
      type: 'mcq',
      prompt: 'Quelles sont toutes les primitives sur $]0 ; +\\infty[$ de $f(x) = -\\frac{1}{x^2}$ ?',
      options: [
        '$x \\mapsto -\\frac{1}{x} + c$ ($c \\in \\mathbb{R}$)',
        '$x \\mapsto \\frac{1}{x} + c$ ($c \\in \\mathbb{R}$)',
        '$x \\mapsto \\frac{2}{x^3} + c$ ($c \\in \\mathbb{R}$)',
        '$x \\mapsto \\frac{1}{x}$ uniquement',
      ],
      correctAnswerIndex: 1,
      explanation: 'Puisque $(\\frac{1}{x})’ = -\\frac{1}{x^2}$, toutes les primitives sur l’intervalle $]0 ; +\\infty[$ sont les fonctions $x \\mapsto \\frac{1}{x} + c$ avec $c \\in \\mathbb{R}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège d’intervalle !',
    stepTheme: 'orange',
    stepTitle: 'Attention : la constante $c$ est unique seulement sur un INTERVALLE',
    paragraphText:
      'La propriété « deux primitives diffèrent d’une constante » exige que l’on travaille sur un INTERVALLE (d’un seul tenant). Sur $\\mathbb{R}^* = ]-\\infty ; 0[ \\cup ]0 ; +\\infty[$, la fonction valant $\\frac{1}{x} + 2$ pour $x < 0$ et $\\frac{1}{x} - 5$ pour $x > 0$ a pour dérivée $-\\frac{1}{x^2}$ sur tout $\\mathbb{R}^*$, avec deux constantes différentes !',
    keyRule: 'Toujours préciser l’intervalle $I$ sur lequel on cherche les primitives.',
    exercise: {
      id: 'tc_m_num_l04p_p01_q05',
      type: 'mcq',
      prompt: 'Pourquoi la fonction $P(x) = x^2 + 5x + \\frac{1}{x}$ n’est-elle PAS une primitive sur $\\mathbb{R}$ de $f(x) = 2x + 5$ ?',
      options: [
        'Car sa dérivée vaut $2x + 5 - \\frac{1}{x^2}$ et elle n’est même pas définie en $0$',
        'Car $1/x$ est négatif pour $x < 0$',
        'Car $x^2 + 5x$ n’est pas dérivable en $0$',
        'Elle est bien une primitive de $f$ sur $\\mathbb{R}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$P$ n’est pas définie en $0$, et sur $\\mathbb{R}^*$, $P’(x) = 2x + 5 - \\frac{1}{x^2} \\ne 2x + 5$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Unicité avec condition initiale',
    stepTheme: 'violet',
    stepTitle: 'Primitive prenant une valeur donnée $y_0$ en $x_0$',
    paragraphText:
      'Soit $f$ continue sur un intervalle $I$, $x_0 \\in I$ et $y_0 \\in \\mathbb{R}$. Il existe UNE UNIQUE primitive $H$ de $f$ sur $I$ telle que $H(x_0) = y_0$. Pour la trouver : on écrit $H(x) = F(x) + c$ à partir d’une primitive quelconque $F$, puis on détermine la constante $c = y_0 - F(x_0)$.',
    formula: {
      name: 'Détermination de la constante',
      formula: 'H(x) = F(x) + c \\text{ et } H(x_0) = y_0 \\implies c = y_0 - F(x_0)',
    },
    exercise: {
      id: 'tc_m_num_l04p_p01_q06',
      type: 'mcq',
      prompt: 'Soit $g(x) = 2x - 1$ sur $\\mathbb{R}$. Quelle est l’unique primitive $H$ de $g$ sur $\\mathbb{R}$ telle que $H(-1) = 5$ ?',
      options: [
        '$H(x) = x^2 - x + 5$',
        '$H(x) = x^2 - x + 3$',
        '$H(x) = x^2 - x - 3$',
        '$H(x) = x^2 - x + 7$',
      ],
      correctAnswerIndex: 1,
      explanation: '$H(x) = x^2 - x + c$. La condition $H(-1) = 5$ donne $(-1)^2 - (-1) + c = 5 \\iff 2 + c = 5 \\iff c = 3$, donc $H(x) = x^2 - x + 3$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Vérifier ou démontrer',
    stepTheme: 'green',
    stepTitle: 'Démontrer que $F$ est une primitive de $f$ sur $I$',
    paragraphText:
      'Lorsque l’énoncé donne explicitement une expression de $F(x)$ et demande de prouver que $F$ est une primitive de $f$ sur $I$, il NE FAUT PAS chercher à intégrer $f$ : il suffit de justifier que $F$ est dérivable sur $I$, de calculer $F’(x)$, et de vérifier que $F’(x) = f(x)$ pour tout $x \\in I$.',
    exercise: {
      id: 'tc_m_num_l04p_p01_q07',
      type: 'mcq',
      prompt: 'Pour $F(x) = 2x^2(\\sqrt{x} + 1)$ sur $]0 ; +\\infty[$, que vaut $F’(x)$ ?',
      options: [
        '$4x\\sqrt{x} + 4x$',
        '$x(5\\sqrt{x} + 4)$',
        '$2x(2\\sqrt{x} + 1)$',
        '$5x^2 + 4x$',
      ],
      correctAnswerIndex: 1,
      explanation: '$F(x) = 2x^{5/2} + 2x^2$, donc $F’(x) = 2\\cdot\\frac{5}{2}x^{3/2} + 4x = 5x\\sqrt{x} + 4x = x(5\\sqrt{x} + 4)$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Tableau de référence',
    stepTheme: 'violet',
    stepTitle: 'Primitives des fonctions puissances $x^r$ ($r \\in \\mathbb{Q} \\setminus \\{-1\\}$)',
    paragraphText:
      'Sur un intervalle adapté ($\\mathbb{R}$ si $r \\in \\mathbb{N}$, $\\mathbb{R}^*$ ou $\\mathbb{R}_+^*$ si $r < 0$ ou rationnel non entier), une primitive de $x \\mapsto x^r$ ($r \\ne -1$) est $x \\mapsto \\frac{1}{r + 1} x^{r + 1}$. En particulier, pour $n \\in \\mathbb{N}$, une primitive de $x^n$ est $\\frac{x^{n+1}}{n+1}$, et pour une constante $a \\in \\mathbb{R}$, c’est $ax$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Primitives usuelles à connaître par cœur',
      tableData: {
        headers: ['Fonction f(x)', 'Primitive F(x) (+ c)', 'Intervalle'],
        rows: [
          ['a (constante)', 'ax', 'R'],
          ['x^r (r ∈ Q \\ {−1})', 'x^{r+1} / (r + 1)', 'R, R_+ ou ]0 ; +∞['],
          ['1 / x^r (r ∈ Q \\ {1})', '−1 / ((r − 1)x^{r−1})', ']0 ; +∞[ ou ]−∞ ; 0['],
          ['1 / √x', '2√x', ']0 ; +∞['],
          ['cos(x)  /  sin(x)', 'sin(x)  /  −cos(x)', 'R'],
          ['1 / cos²(x) = 1 + tan²(x)', 'tan(x)', ']−π/2 + kπ ; π/2 + kπ['],
          ['1 / sin²(x) = 1 + cotan²(x)', '−cotan(x)', ']kπ ; π + kπ['],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l04p_p02_q01',
      type: 'mcq',
      prompt: 'Quelles sont les primitives sur $\\mathbb{R}$ de la fonction $f(x) = 3x^2 - 4x + 1$ ?',
      options: [
        '$F(x) = x^3 - 2x^2 + x + c$',
        '$F(x) = 6x - 4 + c$',
        '$F(x) = x^3 - 4x^2 + x + c$',
        '$F(x) = 3x^3 - 2x^2 + x + c$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Terme à terme : $3\\cdot\\frac{x^3}{3} - 4\\cdot\\frac{x^2}{2} + x + c = x^3 - 2x^2 + x + c$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Exposants fractionnaires et négatifs',
    stepTheme: 'slate',
    stepTitle: 'Primitives de $\\frac{1}{x^5}$ et de $x^{\\frac{2}{3}}$ sur $]0 ; +\\infty[$',
    paragraphText:
      'Pour $f(x) = \\frac{1}{x^5} = x^{-5}$, on applique la formule avec $r = 5$ (ou $-5$) : $F(x) = \\frac{-1}{(5 - 1)x^{5 - 1}} + c = -\\frac{1}{4x^4} + c$. Pour $g(x) = x^{\\frac{2}{3}}$ sur $]0 ; +\\infty[$, on a $r = \\frac{2}{3}$, donc $r + 1 = \\frac{5}{3}$, et $\\frac{1}{r + 1} = \\frac{3}{5}$ : les primitives de $x^{2/3}$ sont $x \\mapsto \\frac{3}{5} x^{\\frac{5}{3}} + c = \\frac{3}{5} x\\sqrt[3]{x^2} + c$ !',
    formula: {
      name: 'Vérification par dérivation',
      formula: '\\left(\\frac{3}{5} x^{\\frac{5}{3}}\\right)’ = \\frac{3}{5} \\cdot \\frac{5}{3} x^{\\frac{5}{3} - 1} = x^{\\frac{2}{3}}',
    },
    exercise: {
      id: 'tc_m_num_l04p_p02_q02',
      type: 'mcq',
      prompt: 'Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = x^{\\frac{2}{3}}$ ?',
      options: [
        '$x \\mapsto -3x^{-\\frac{1}{3}} + c$',
        '$x \\mapsto \\frac{3}{5}x^{\\frac{5}{3}} + c$',
        '$x \\mapsto \\frac{5}{3}x^{\\frac{5}{3}} + c$',
        '$x \\mapsto \\frac{2}{3}x^{-\\frac{1}{3}} + c$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{1}{2/3 + 1} x^{2/3 + 1} = \\frac{1}{5/3} x^{5/3} = \\frac{3}{5}x^{5/3} + c$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'piege',
    stepBadge: 'Erreur classique sur 1/√x',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier le facteur $2$ dans la primitive de $\\frac{1}{\\sqrt{x}}$',
    paragraphText:
      'Comme $(\\sqrt{x})’ = \\frac{1}{2\\sqrt{x}}$, la dérivée de $2\\sqrt{x}$ est $\\frac{1}{\\sqrt{x}}$ ! On peut aussi le retrouver avec $r = -\\frac{1}{2}$ : $\\frac{1}{-\\frac{1}{2} + 1} x^{\\frac{1}{2}} = 2\\sqrt{x}$.',
    exercise: {
      id: 'tc_m_num_l04p_p02_q03',
      type: 'mcq',
      prompt: 'Quelle est la primitive sur $]0 ; +\\infty[$ de $p(x) = x - \\frac{1}{x^2} - \\frac{1}{\\sqrt{x}}$ qui prend la valeur $-\\frac{1}{2}$ en $x = 1$ ?',
      options: [
        '$P(x) = \\frac{1}{2}x^2 + \\frac{1}{x} - 2\\sqrt{x} + 1$',
        '$P(x) = \\frac{1}{2}x^2 + \\frac{1}{x} - 2\\sqrt{x}$',
        '$P(x) = \\frac{1}{2}x^2 - \\frac{1}{x} - 2\\sqrt{x} + 2$',
        '$P(x) = \\frac{1}{2}x^2 + \\frac{1}{x} - \\frac{1}{2}\\sqrt{x}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les primitives sont $\\frac{1}{2}x^2 + \\frac{1}{x} - 2\\sqrt{x} + c$. En $x = 1$ : $\\frac{1}{2} + 1 - 2 + c = -\\frac{1}{2} + c = -\\frac{1}{2} \\implies c = 0$ !',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Trigonométrie usuelle',
    stepTheme: 'violet',
    stepTitle: 'Primitives de $\\cos x$, $\\sin x$, $1 + \\tan^2 x$ et $1 + \\operatorname{cotan}^2 x$',
    paragraphText:
      'À connaître sans hésiter les signes : $\\cos x$ a pour primitive $\\sin x + c$ ; $\\sin x$ a pour primitive $-\\cos x + c$ (car $(-\\cos x)’ = +\\sin x$). Et comme $(\\tan x)’ = \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$, une primitive de $1 + \\tan^2 x$ (ou $\\frac{1}{\\cos^2 x}$) sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$ est $\\tan x$ (et pour $\\tan^2 x = (1 + \\tan^2 x) - 1$, c’est $\\tan x - x$ !).',
    exercise: {
      id: 'tc_m_num_l04p_p02_q04',
      type: 'mcq',
      prompt: 'Quelle est une primitive de $f(x) = \\tan^2 x$ sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$ ?',
      options: [
        '$\\frac{1}{3}\\tan^3 x$',
        '$\\tan x - x$',
        '$\\frac{2\\tan x}{\\cos^2 x}$',
        '$\\tan x + x$',
      ],
      correctAnswerIndex: 1,
      explanation: 'On écrit $\\tan^2 x = (1 + \\tan^2 x) - 1$, dont une primitive immédiate est $\\tan x - x$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Réécriture préalable',
    stepTheme: 'green',
    stepTitle: 'Transformer une fraction ou un produit en somme de puissances $x^r$',
    paragraphText:
      'Avant de chercher une primitive d’une fonction comme $f(x) = \\frac{2x^6 - 3x + 8}{2x^4}$ sur $]0 ; +\\infty[$, on sépare les termes au numérateur : $f(x) = x^2 - \\frac{3}{2}x^{-3} + 4x^{-4}$. On intègre ensuite chaque terme séparément : $F(x) = \\frac{1}{3}x^3 + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$.',
    exercise: {
      id: 'tc_m_num_l04p_p02_q05',
      type: 'mcq',
      prompt: 'Sur $]0 ; +\\infty[$, une primitive de $f(x) = \\frac{x^3 + 2}{x^2}$ est :',
      options: [
        '$\\frac{x^4/4 + 2x}{x^3/3}$',
        '$\\frac{1}{2}x^2 - \\frac{2}{x}$',
        '$\\frac{1}{2}x^2 + \\frac{2}{x}$',
        '$x - \\frac{2}{x^3}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\frac{x^3 + 2}{x^2} = x + 2x^{-2}$, dont une primitive est $\\frac{1}{2}x^2 + 2(-x^{-1}) = \\frac{1}{2}x^2 - \\frac{2}{x}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Interdit !',
    stepTheme: 'orange',
    stepTitle: 'La primitive d’un quotient n’est PAS le quotient des primitives !',
    paragraphText:
      'De même que $(u/v)’ \\ne u’/v’$, on n’intègre JAMAIS séparément le numérateur et le dénominateur d’un quotient, ni les deux facteurs d’un produit ($\\int fg \\ne \\int f \\cdot \\int g$) ! Il faut développer un produit de polynômes ou décomposer une fraction en somme.',
    exercise: {
      id: 'tc_m_num_l04p_p02_q06',
      type: 'mcq',
      prompt: 'Comment trouver une primitive de $f(x) = (x + 1)(x - 3)$ sur $\\mathbb{R}$ ?',
      options: [
        'Multiplier $(\\frac{x^2}{2} + x)(\\frac{x^2}{2} - 3x)$',
        'Développer $f(x) = x^2 - 2x - 3$, puis primitiver terme à terme : $\\frac{1}{3}x^3 - x^2 - 3x$',
        'Calculer la dérivée $(x+1)’(x-3)’$',
        'Écrire $\\frac{1}{2}(x+1)^2(x-3)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Développer le produit polynômial donne une somme de puissances de $x$, immédiatement intégrable terme à terme.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Entraînement',
    stepTheme: 'slate',
    stepTitle: 'Contrôler chaque résultat en le dérivant mentalement',
    paragraphText:
      'Le meilleur réflexe aux devoirs et au Bac : après avoir écrit $F(x)$, prends 5 secondes pour calculer $F’(x)$ de tête et vérifier que tu retombes exactement sur $f(x)$ (avec le bon signe et le bon coefficient !).',
    exercise: {
      id: 'tc_m_num_l04p_p02_q07',
      type: 'mcq',
      prompt: 'Quelle est une primitive sur $]0 ; +\\infty[$ de $f(x) = 3\\sqrt{x} - \\frac{4}{x^3}$ ?',
      options: [
        '$2x\\sqrt{x} + \\frac{2}{x^2}$',
        '$\\frac{3}{2\\sqrt{x}} + \\frac{12}{x^4}$',
        '$2x\\sqrt{x} - \\frac{2}{x^2}$',
        '$\\frac{9}{2}x\\sqrt{x} + \\frac{2}{x^2}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$3x^{1/2}$ donne $3\\cdot\\frac{2}{3}x^{3/2} = 2x\\sqrt{x}$ ; $-4x^{-3}$ donne $-4\\cdot\\frac{x^{-2}}{-2} = +\\frac{2}{x^2}$. Vérifions : $(2x^{3/2} + 2x^{-2})’ = 3x^{1/2} - 4x^{-3}$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Linéarité',
    stepTheme: 'violet',
    stepTitle: 'Somme et multiplication par un réel $k$',
    paragraphText:
      'Si $U$ et $V$ sont respectivement des primitives de $u$ et $v$ sur $I$, et si $k \\in \\mathbb{R}$, alors $U + V$ est une primitive de $u + v$ sur $I$, et $kU$ est une primitive de $ku$ sur $I$.',
    formula: {
      name: 'Linéarité des primitives',
      formula: '(\\alpha U + \\beta V)’ = \\alpha u + \\beta v',
    },
    exercise: {
      id: 'tc_m_num_l04p_p03_q01',
      type: 'mcq',
      prompt: 'Quelles sont toutes les primitives sur $\\mathbb{R}$ de $f(x) = 8x^2 + 5x - 9$ ?',
      options: [
        '$\\frac{8}{3}x^3 + \\frac{5}{2}x^2 - 9x + c$',
        '$16x + 5 + c$',
        '$\\frac{8}{2}x^3 + \\frac{5}{2}x^2 - 9x + c$',
        '$8x^3 + 5x^2 - 9x + c$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Par linéarité, $\\frac{8}{3}x^3 + \\frac{5}{2}x^2 - 9x + c$ ($c \\in \\mathbb{R}$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Primitives composées',
    stepTheme: 'violet',
    stepTitle: 'Reconnaître $u’ \\times (v’ \\circ u)$',
    paragraphText:
      'Puisque $(v \\circ u)’ = u’ \\times (v’ \\circ u)$, toute fonction s’écrivant $u’ \\times (v’ \\circ u)$ admet pour primitive $v \\circ u$ ! Cela fournit les formes clés du programme : $u’ u^r \\to \\frac{1}{r+1}u^{r+1}$ ($r \\ne -1$) ; $\\frac{u’}{u^r} \\to \\frac{-1}{(r-1)u^{r-1}}$ ($r \\ne 1$) ; $\\frac{u’}{\\sqrt{u}} \\to 2\\sqrt{u}$ ; $u’\\cos u \\to \\sin u$ ; $u’\\sin u \\to -\\cos u$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau des primitives composées (v ∘ u)',
      tableData: {
        headers: ['Forme reconnue', 'Primitive', 'Condition'],
        rows: [
          ['u’ u^r (r ∈ Q \\ {−1})', 'u^{r+1} / (r + 1)', 'u > 0 (ou r ∈ N)'],
          ['u’ / u^r (r ∈ Q \\ {1})', '−1 / ((r − 1) u^{r−1})', 'u > 0 (ou u ≠ 0 si r ∈ N*)'],
          ['u’ / √u', '2√u', 'u > 0 sur I'],
          ['u’ cos(u)', 'sin(u)', 'u dérivable sur I'],
          ['u’ sin(u)', '−cos(u)', 'u dérivable sur I'],
          ['cos(ax + b) / sin(ax + b)', '(1/a)sin(ax + b) / −(1/a)cos(ax + b)', 'a ≠ 0'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l04p_p03_q02',
      type: 'mcq',
      prompt: 'Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = 3\\sin(2x)$ ?',
      options: [
        '$-\\frac{3}{2}\\cos(2x)$',
        '$-3\\cos(2x)$',
        '$\\frac{3}{2}\\cos(2x)$',
        '$-6\\cos(2x)$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Une primitive de $\\sin(ax)$ est $-\\frac{1}{a}\\cos(ax)$, donc pour $3\\sin(2x)$ c’est $-\\frac{3}{2}\\cos(2x)$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Ajuster la constante !',
    stepTheme: 'green',
    stepTitle: 'Faire apparaître $u’(x)$ par un facteur multiplicatif constant',
    paragraphText:
      'Souvent, le facteur $u’(x)$ n’apparaît pas exactement devant $u^r$ mais à une constante multiplicative près. Par exemple, pour $f(x) = (3x + 2)(3x^2 + 4x + 7)^3$, posons $u(x) = 3x^2 + 4x + 7$ : alors $u’(x) = 6x + 4 = 2(3x + 2)$. On écrit $f(x) = \\frac{1}{2} u’(x) [u(x)]^3$, dont une primitive est $\\frac{1}{2} \\cdot \\frac{1}{4}[u(x)]^4 = \\frac{1}{8}(3x^2 + 4x + 7)^4$.',
    formula: {
      name: 'Ajustement du facteur manquant',
      formula: 'u’(x) = k \\cdot A(x) \\implies A(x) f(u(x)) = \\frac{1}{k} u’(x) f(u(x))',
    },
    exercise: {
      id: 'tc_m_num_l04p_p03_q03',
      type: 'mcq',
      prompt: 'Quelle est une primitive sur $]0 ; +\\infty[$ de $f(x) = 2\\sqrt{2x + 1} = 2(2x + 1)^{\\frac{1}{2}}$ ?',
      options: [
        '$\\frac{4}{3}(2x + 1)^{\\frac{3}{2}}$',
        '$\\frac{2}{3}(2x + 1)^{\\frac{3}{2}}$',
        '$(2x + 1)^{\\frac{3}{2}}$',
        '$\\frac{1}{\\sqrt{2x + 1}}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $u(x) = 2x + 1$, $u’(x) = 2$ est déjà présent devant ! Donc $\\int u’ u^{1/2} = \\frac{1}{3/2} u^{3/2} = \\frac{2}{3}(2x + 1)^{3/2}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Quotients avec u′/uⁿ',
    stepTheme: 'slate',
    stepTitle: 'Primitives de $\\frac{3}{(3x + 5)^2}$ et de $\\frac{2x + 3}{(x^2 + 3x + 3)^4}$',
    paragraphText:
      'Pour $f(x) = \\frac{3}{(3x + 5)^2}$ sur $]0 ; +\\infty[$ : $u(x) = 3x + 5$ donne $u’(x) = 3$, donc $f = \\frac{u’}{u^2}$ et $F(x) = -\\frac{1}{3x + 5}$. Pour $h(x) = \\frac{2x + 3}{(x^2 + 3x + 3)^4}$ sur $\\mathbb{R}$ : $u(x) = x^2 + 3x + 3$ donne $u’(x) = 2x + 3$, donc $h = \\frac{u’}{u^4}$ et $H(x) = -\\frac{1}{3(x^2 + 3x + 3)^3}$.',
    exercise: {
      id: 'tc_m_num_l04p_p03_q04',
      type: 'mcq',
      prompt: 'Quelle est une primitive sur $]1 ; +\\infty[$ de $f(x) = \\frac{-3x + 1}{(3x^2 - 2x - 1)^4}$ ?',
      options: [
        '$\\frac{1}{6(3x^2 - 2x - 1)^3}$',
        '$-\\frac{1}{6(3x^2 - 2x - 1)^3}$',
        '$\\frac{1}{3(3x^2 - 2x - 1)^3}$',
        '$-\\frac{1}{3(3x^2 - 2x - 1)^3}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$u(x) = 3x^2 - 2x - 1$ a pour dérivée $u’(x) = 6x - 2 = -2(-3x + 1)$. Ainsi $f = -\\frac{1}{2} \\frac{u’}{u^4}$, ce qui donne $(-\\frac{1}{2})(-\\frac{1}{3 u^3}) = +\\frac{1}{6(3x^2 - 2x - 1)^3}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Trigonométrie composée',
    stepTheme: 'slate',
    stepTitle: 'Primitives de $\\sin x \\cos^5 x$ et $\\sin^3 x \\cos^3 x$',
    paragraphText:
      'Pour $h(x) = \\sin x \\cos^5 x$, posons $u(x) = \\cos x$, alors $u’(x) = -\\sin x$, donc $h(x) = -u’(x)[u(x)]^5$ et $H(x) = -\\frac{1}{6}\\cos^6 x$. Pour $f(x) = \\cos^3 x \\sin^3 x$ sans linéariser : on écrit $\\cos^3 x \\sin^3 x = (\\cos x \\sin x)^3 = \\left(\\frac{1}{2}\\sin(2x)\\right)^3 = \\frac{1}{8}(1 - \\cos^2(2x))\\sin(2x)$, ou on factorise $\\sin x (1 - \\cos^2 x)\\cos^3 x = \\sin x (\\cos^3 x - \\cos^5 x)$ dont une primitive est $-\\frac{1}{4}\\cos^4 x + \\frac{1}{6}\\cos^6 x$ !',
    exercise: {
      id: 'tc_m_num_l04p_p03_q05',
      type: 'mcq',
      prompt: 'Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = \\sin(7x)\\cos^3(7x)$ ?',
      options: [
        '$-\\frac{1}{4}\\cos^4(7x)$',
        '$-\\frac{1}{28}\\cos^4(7x)$',
        '$\\frac{1}{28}\\cos^4(7x)$',
        '$-\\frac{7}{4}\\cos^4(7x)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $u(x) = \\cos(7x)$, $u’(x) = -7\\sin(7x)$, donc $f(x) = -\\frac{1}{7} u’(x)[u(x)]^3$, d’où $F(x) = -\\frac{1}{7} \\cdot \\frac{1}{4} u(x)^4 = -\\frac{1}{28}\\cos^4(7x)$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Formes u′/√u et u′/∛u',
    stepTheme: 'slate',
    stepTitle: 'Primitives avec radicaux au dénominateur',
    paragraphText:
      'Pour $f(x) = \\frac{2x + 1}{\\sqrt{x^2 + x + 1}}$ sur $\\mathbb{R}$, on reconnaît $\\frac{u’}{\\sqrt{u}}$ ($u = x^2 + x + 1 > 0$), donc $F(x) = 2\\sqrt{x^2 + x + 1}$. Et pour $g(x) = \\frac{x}{\\sqrt[3]{x^2 - 1}}$ sur $]1 ; +\\infty[$ : $g(x) = \\frac{1}{2}(2x)(x^2 - 1)^{-1/3}$, de primitive $\\frac{1}{2} \\cdot \\frac{3}{2}(x^2 - 1)^{2/3} = \\frac{3}{4}\\sqrt[3]{(x^2 - 1)^2}$.',
    exercise: {
      id: 'tc_m_num_l04p_p03_q06',
      type: 'mcq',
      prompt: 'Sur $]0 ; \\frac{\\pi}{4}[$, quelle est une primitive de $f(x) = \\frac{\\cos(2x)}{\\sqrt{\\sin(2x)}}$ ?',
      options: [
        '$2\\sqrt{\\sin(2x)}$',
        '$\\sqrt{\\sin(2x)}$',
        '$\\frac{1}{2}\\sqrt{\\sin(2x)}$',
        '$-\\sqrt{\\sin(2x)}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$u(x) = \\sin(2x) > 0$ donne $u’(x) = 2\\cos(2x)$, donc $f = \\frac{1}{2}\\frac{u’}{\\sqrt{u}}$, d’où $F(x) = \\frac{1}{2}(2\\sqrt{u}) = \\sqrt{\\sin(2x)}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Piège de signe sur cos/sin',
    stepTheme: 'orange',
    stepTitle: 'Vérifier le signe en primitivant $\\sin u$ ou en dérivant $\\cos u$',
    paragraphText:
      'Attention : $(\\cos u)’ = -u’\\sin u$, tandis que $(\\sin u)’ = +u’\\cos u$ ! Beaucoup d’élèves oublient le signe moins lors du passage à $u’\\sin u \\to -\\cos u$ (et inversement le mettent à tort sur $u’\\cos u$).',
    exercise: {
      id: 'tc_m_num_l04p_p03_q07',
      type: 'mcq',
      prompt: 'Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = (3 - 2x)\\sin(x^2 - 3x + 1)$ ?',
      options: [
        '$-\\cos(x^2 - 3x + 1)$',
        '$\\cos(x^2 - 3x + 1)$',
        '$\\frac{1}{2}\\cos(x^2 - 3x + 1)$',
        '$-\\sin(x^2 - 3x + 1)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$u(x) = x^2 - 3x + 1$ a pour dérivée $u’(x) = 2x - 3 = -(3 - 2x)$. Donc $f(x) = -u’(x)\\sin(u(x)) = +(\\cos(u(x)))’$ ! La primitive est $+\\cos(x^2 - 3x + 1)$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Technique 1 : Linéarisation',
    stepTheme: 'green',
    stepTitle: 'Linéariser $\\cos^n x$ ou $\\sin^n x$ pour trouver une primitive',
    paragraphText:
      'Pour primitiver $\\cos^2 x$, $\\sin^2 x$, $\\cos^4 x$ ou $\\sin^4 x$ (exposant pair), on ne peut pas faire apparaître $u’$. On utilise les formules de duplication (ou d’Euler) : $\\cos^2 x = \\frac{1 + \\cos(2x)}{2}$ et $\\sin^2 x = \\frac{1 - \\cos(2x)}{2}$. Pour $\\cos^4 x$ : $\\cos^4 x = \\left(\\frac{1 + \\cos(2x)}{2}\\right)^2 = \\frac{1}{4}(1 + 2\\cos(2x) + \\frac{1 + \\cos(4x)}{2}) = \\frac{3}{8} + \\frac{1}{2}\\cos(2x) + \\frac{1}{8}\\cos(4x)$.',
    formula: {
      name: 'Linéarisation de cos⁴ x et primitive',
      formula: '\\cos^4 x = \\frac{3}{8} + \\frac{1}{2}\\cos(2x) + \\frac{1}{8}\\cos(4x) \\implies F(x) = \\frac{3}{8}x + \\frac{1}{4}\\sin(2x) + \\frac{1}{32}\\sin(4x)',
    },
    exercise: {
      id: 'tc_m_num_l04p_p04_q01',
      type: 'mcq',
      prompt: 'À l’aide de $\\sin^2 x = \\frac{1 - \\cos(2x)}{2}$, quelle est la primitive sur $\\mathbb{R}$ de $g(x) = \\sin^2 x$ qui s’annule en $0$ ?',
      options: [
        '$\\frac{1}{3}\\sin^3 x$',
        '$\\frac{1}{2}x - \\frac{1}{4}\\sin(2x)$',
        '$\\frac{1}{2}x + \\frac{1}{4}\\sin(2x)$',
        '$\\frac{1}{2}x - \\frac{1}{2}\\sin(2x)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Une primitive de $\\frac{1}{2} - \\frac{1}{2}\\cos(2x)$ est $\\frac{1}{2}x - \\frac{1}{4}\\sin(2x) + c$, et $G(0) = 0 \\implies c = 0$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Technique 2 : Somme et différence h ± g',
    stepTheme: 'green',
    stepTitle: 'Astuce du système pour primitiver $\\cos^2 x$ et $\\sin^2 x$ simultanément',
    paragraphText:
      'Si $h(x) = \\cos^2 x$ et $g(x) = \\sin^2 x$, on remarque que $h(x) + g(x) = 1$ (primitive $S(x) = x$) et $h(x) - g(x) = \\cos(2x)$ (primitive $D(x) = \\frac{1}{2}\\sin(2x)$). En résolvant $H = \\frac{S + D}{2}$ et $G = \\frac{S - D}{2}$, on retrouve sans effort $H(x) = \\frac{1}{2}x + \\frac{1}{4}\\sin(2x)$ et $G(x) = \\frac{1}{2}x - \\frac{1}{4}\\sin(2x)$ !',
    exercise: {
      id: 'tc_m_num_l04p_p04_q02',
      type: 'mcq',
      prompt: 'Que vaut $S(x) = \\int_0^x (\\cos^2 t + \\sin^2 t)\\,dt$ (la primitive de $h + g$ nulle en $0$) ?',
      options: ['$1$', '$x$', '$\\sin x + \\cos x$', '$2x$'],
      correctAnswerIndex: 1,
      explanation: 'Comme $h(x) + g(x) = \\cos^2 x + \\sin^2 x = 1$, la primitive qui s’annule en $0$ est $S(x) = x$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Technique 3 : Décomposition rationnelle',
    stepTheme: 'slate',
    stepTitle: 'Décomposer $\\frac{x^3 - x^2 - 8x + 8}{(x - 2)^2}$ avant d’intégrer',
    paragraphText:
      'Sur $]2 ; +\\infty[$, la division euclidienne du numérateur par $(x - 2)^2 = x^2 - 4x + 4$ donne : $x^3 - x^2 - 8x + 8 = (x + 3)(x - 2)^2 - 4$, donc $f(x) = x + 3 - \\frac{4}{(x - 2)^2}$. Une primitive sur $]2 ; +\\infty[$ est donc $F(x) = \\frac{1}{2}x^2 + 3x + \\frac{4}{x - 2} + c$ ! (Attention : c’est bien $\\frac{1}{2}x^2$ et non $\\frac{1}{3}x^2$, la dérivée de $\\frac{1}{2}x^2$ vaut $x$).',
    formula: {
      name: 'Décomposition et primitive',
      formula: '\\frac{x^3 - x^2 - 8x + 8}{(x - 2)^2} = x + 3 - \\frac{4}{(x - 2)^2} \\longrightarrow \\frac{1}{2}x^2 + 3x + \\frac{4}{x - 2} + c',
    },
    exercise: {
      id: 'tc_m_num_l04p_p04_q03',
      type: 'mcq',
      prompt: 'Sur $]-\\frac{1}{2} ; +\\infty[$, si l’on écrit $h(x) = \\frac{x}{(2x + 1)^3} = \\frac{a}{(2x + 1)^2} + \\frac{b}{(2x + 1)^3}$, que valent $a$ et $b$ ?',
      options: [
        '$a = \\frac{1}{2}$ et $b = -\\frac{1}{2}$',
        '$a = 1$ et $b = -1$',
        '$a = \\frac{1}{2}$ et $b = \\frac{1}{2}$',
        '$a = -\\frac{1}{2}$ et $b = \\frac{1}{2}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'On écrit au numérateur $x = \\frac{1}{2}(2x + 1) - \\frac{1}{2}$, d’où $\\frac{x}{(2x+1)^3} = \\frac{1/2}{(2x+1)^2} - \\frac{1/2}{(2x+1)^3}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Technique 4 : Identification de coefficients',
    stepTheme: 'slate',
    stepTitle: 'Trouver $a, b, c$ pour que $(ax^2 + bx + c)\\sqrt{3 - 2x}$ soit primitive de $x\\sqrt{3 - 2x}$',
    paragraphText:
      'Sur $]-\\infty ; \\frac{3}{2}[$, on pose $F(x) = (ax^2 + bx + c)\\sqrt{3 - 2x}$ et on résout $F’(x) = x\\sqrt{3 - 2x}$ : $(2ax + b)\\sqrt{3 - 2x} - \\frac{ax^2 + bx + c}{\\sqrt{3 - 2x}} = x\\sqrt{3 - 2x}$. En multipliant par $\\sqrt{3 - 2x} > 0$, il reste $(2ax + b)(3 - 2x) - (ax^2 + bx + c) = x(3 - 2x)$, soit $-5ax^2 + (6a - 3b)x + (3b - c) = -2x^2 + 3x$. Par identification : $-5a = -2 \\implies a = \\frac{2}{5}$, $6a - 3b = 3 \\implies b = -\\frac{1}{5}$, $3b - c = 0 \\implies c = -\\frac{3}{5}$.',
    exercise: {
      id: 'tc_m_num_l04p_p04_q04',
      type: 'mcq',
      prompt: 'Dans l’exercice d’identification précédent, quelles valeurs $(a, b, c)$ obtient-on pour que $(ax^2+bx+c)\\sqrt{3-2x}$ soit une primitive de $x\\sqrt{3 - 2x}$ ?',
      options: [
        '$a = \\frac{2}{5},\\; b = -\\frac{1}{5},\\; c = -\\frac{3}{5}$',
        '$a = -\\frac{2}{5},\\; b = \\frac{1}{5},\\; c = \\frac{3}{5}$',
        '$a = \\frac{1}{5},\\; b = \\frac{2}{5},\\; c = -\\frac{3}{5}$',
        '$a = 2,\\; b = -1,\\; c = -3$',
      ],
      correctAnswerIndex: 0,
      explanation: '$-5a = -2 \\implies a = \\frac{2}{5}$ ; $3b = 6(\\frac{2}{5}) - 3 = -\\frac{3}{5} \\implies b = -\\frac{1}{5}$ ; $c = 3b = -\\frac{3}{5}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Technique 5 : Forme trigonométrique inverse',
    stepTheme: 'slate',
    stepTitle: 'Multiplier par le conjugué trigonométrique : $\\frac{1}{1 - \\sin x}$',
    paragraphText:
      'Sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, pour primitiver $f(x) = \\frac{1}{1 - \\sin x}$, on multiplie haut et bas par $1 + \\sin x$ : $f(x) = \\frac{1 + \\sin x}{1 - \\sin^2 x} = \\frac{1}{\\cos^2 x} + \\frac{\\sin x}{\\cos^2 x}$. Le premier terme est la dérivée de $\\tan x$, et le second s’écrit $-\\frac{u’}{u^2}$ ($u = \\cos x$), de primitive $+\\frac{1}{\\cos x}$ ! D’où $F(x) = \\tan x + \\frac{1}{\\cos x} + c$.',
    formula: {
      name: 'Identité et primitive de 1/(1 − sin x)',
      formula: '\\frac{1}{1 - \\sin x} = \\frac{1}{\\cos^2 x} + \\frac{\\sin x}{\\cos^2 x} \\longrightarrow \\tan x + \\frac{1}{\\cos x} + c',
    },
    exercise: {
      id: 'tc_m_num_l04p_p04_q05',
      type: 'mcq',
      prompt: 'Sur $]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}[$, quelle est une primitive de $\\frac{\\sin x}{\\cos^2 x}$ ?',
      options: [
        '$-\\frac{1}{\\cos x}$',
        '$\\frac{1}{\\cos x}$',
        '$\\tan x$',
        '$\\frac{1}{\\sin x}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $u(x) = \\cos x$, $u’(x) = -\\sin x$, donc $\\frac{\\sin x}{\\cos^2 x} = -\\frac{u’}{u^2} = \\left(\\frac{1}{u}\\right)’ = \\left(\\frac{1}{\\cos x}\\right)’$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Technique 6 : Primitive d’un quotient dérivé',
    stepTheme: 'slate',
    stepTitle: 'Reconnaître la dérivée d’un produit $(uv)’$ ou d’un quotient $(u/v)’$',
    paragraphText:
      'Parfois une fonction contient du $x\\cos x$ ou $\\frac{x\\sin x + \\cos x}{x^2}$ : on calcule la dérivée d’une fonction voisine ($x\\sin x$, $\\frac{\\sin x}{x}$, $\\frac{\\cos x}{x}$) pour faire apparaître ce que l’on cherche ! Par exemple, $\\left(\\frac{\\sin x}{x}\\right)’ = \\frac{x\\cos x - \\sin x}{x^2}$, et $\\left(-\\frac{\\cos x}{x}\\right)’ = \\frac{x\\sin x + \\cos x}{x^2}$.',
    exercise: {
      id: 'tc_m_num_l04p_p04_q06',
      type: 'mcq',
      prompt: 'Sachant que $(x\\sin x)’ = \\sin x + x\\cos x$, quelle est une primitive sur $\\mathbb{R}$ de $f(x) = x\\cos x$ ?',
      options: [
        '$x\\sin x - \\cos x$',
        '$x\\sin x + \\cos x$',
        '$\\frac{1}{2}x^2\\sin x$',
        '$-x\\sin x + \\cos x$',
      ],
      correctAnswerIndex: 1,
      explanation: '$x\\cos x = (x\\sin x)’ - \\sin x = (x\\sin x)’ + (\\cos x)’ = (x\\sin x + \\cos x)’$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur d’exposant impair/pair',
    stepTheme: 'orange',
    stepTitle: 'Distinction $\\sin^3 x$ (substitution) vs $\\sin^2 x$ (linéarisation)',
    paragraphText:
      'Pour une puissance IMPAIRE comme $\\sin^3 x$, il est bien plus rapide d’isoler un facteur $\\sin x$ : $\\sin^3 x = \\sin x (1 - \\cos^2 x) = \\sin x - \\sin x \\cos^2 x$, dont une primitive immédiate est $-\\cos x + \\frac{1}{3}\\cos^3 x$. On réserve la linéarisation aux puissances PAIRES.',
    exercise: {
      id: 'tc_m_num_l04p_p04_q07',
      type: 'mcq',
      prompt: 'Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = \\sin^3 x$ ?',
      options: [
        '$\\frac{1}{4}\\sin^4 x$',
        '$-\\cos x + \\frac{1}{3}\\cos^3 x$',
        '$-\\cos x - \\frac{1}{3}\\cos^3 x$',
        '$3\\sin^2 x\\cos x$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\sin^3 x = \\sin x(1 - \\cos^2 x) = \\sin x - \\sin x\\cos^2 x$. En dérivant $-\\cos x + \\frac{1}{3}\\cos^3 x$, on retrouve $\\sin x - \\sin x\\cos^2 x = \\sin^3 x$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe (1/3)',
    stepTheme: 'blue',
    stepTitle: 'Retrouver la consommation $C(v)$ à partir de sa dérivée $C’(v)$',
    paragraphText:
      'Un car effectue un trajet de $1\\,500\\text{ km}$ à vitesse moyenne $v > 0$ (en $\\text{km/h}$). La dérivée de sa consommation $C(v)$ (en litres pour $100\\text{ km}$) vérifie $C’(v) = -\\frac{300}{v^2} + \\frac{1}{3}$, et l’on sait qu’à $v = 60\\text{ km/h}$, il consomme $25\\text{ L/100 km}$ ($C(60) = 25$). En primitivant $C’(v)$ sur $]0 ; +\\infty[$, on trouve $C(v) = \\frac{300}{v} + \\frac{v}{3} + k$. La condition $C(60) = \\frac{300}{60} + \\frac{60}{3} + k = 5 + 20 + k = 25$ donne $k = 0$, soit $C(v) = \\frac{300}{v} + \\frac{v}{3}$.',
    formula: {
      name: 'Consommation aux 100 km',
      formula: 'C’(v) = -\\frac{300}{v^2} + \\frac{1}{3} \\text{ et } C(60) = 25 \\implies C(v) = \\frac{300}{v} + \\frac{v}{3}',
    },
    exercise: {
      id: 'tc_m_num_l04p_p05_q01',
      type: 'mcq',
      prompt: 'Si le car consommait $28\\text{ L/100 km}$ à $60\\text{ km/h}$ avec la même dérivée $C’(v) = -\\frac{300}{v^2} + \\frac{1}{3}$, que vaudrait la constante $k$ ?',
      options: ['$k = 0$', '$k = 3$', '$k = -3$', '$k = 28$'],
      correctAnswerIndex: 1,
      explanation: '$C(60) = 5 + 20 + k = 25 + k = 28 \\implies k = 3$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Situation complexe (2/3)',
    stepTheme: 'green',
    stepTitle: 'Exprimer le coût total $P(v)$ du trajet de $1\\,500\\text{ km}$',
    paragraphText:
      '1) Durée du trajet à la vitesse $v$ : $t = \\frac{1500}{v}$ heures. Au tarif de $900\\text{ FCFA/h}$, le salaire du chauffeur vaut $900 \\times \\frac{1500}{v} = \\frac{1\\,350\\,000}{v}$. 2) Carburant : $1\\,500\\text{ km} = 15 \\times 100\\text{ km}$, donc on consomme $15 C(v) = 15\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$ litres. À $600\\text{ FCFA/L}$, le carburant coûte $600 \\times 15\\left(\\frac{300}{v} + \\frac{v}{3}\\right) = \\frac{2\\,700\\,000}{v} + 3\\,000v$. 3) Coût total : $P(v) = \\frac{4\\,050\\,000}{v} + 3\\,000v$.',
    formula: {
      name: 'Fonction de coût total',
      formula: 'P(v) = \\frac{4\\,050\\,000}{v} + 3\\,000v \\qquad (v > 0)',
    },
    exercise: {
      id: 'tc_m_num_l04p_p05_q02',
      type: 'mcq',
      prompt: 'Dans l’expression du coût total $P(v) = \\frac{4\\,050\\,000}{v} + 3\\,000v$, d’où provient le coefficient $4\\,050\\,000$ ?',
      options: [
        'Uniquement du prix du carburant',
        'De la somme du salaire ($1\\,350\\,000$) et du terme $\\frac{2\\,700\\,000}{v}$ du carburant',
        'Uniquement du salaire du chauffeur',
        'Du nombre de kilomètres multiplié par $2$',
      ],
      correctAnswerIndex: 1,
      explanation: '$1\\,350\\,000 + 2\\,700\\,000 = 4\\,050\\,000$ : salaire inversement proportionnel à $v$ et part du carburant en $\\frac{1}{v}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe (3/3)',
    stepTheme: 'slate',
    stepTitle: 'Minimiser $P(v)$ par étude de variations',
    paragraphText:
      'Pour $v > 0$, $P’(v) = -\\frac{4\\,050\\,000}{v^2} + 3\\,000 = \\frac{3\\,000(v^2 - 1350)}{v^2}$. Donc $P’(v) = 0 \\iff v = \\sqrt{1350} \\approx 36{,}74 \\approx 37\\text{ km/h}$. Pour $0 < v < \\sqrt{1350}$, $P’(v) < 0$ ($P$ décroît) ; pour $v > \\sqrt{1350}$, $P’(v) > 0$ ($P$ croît). Le coût total minimal vaut $P(\\sqrt{1350}) = 6\\,000\\sqrt{1350} \\approx 220\\,454 \\approx 220\\,500\\text{ FCFA}$.',
    visualSchema: {
      type: 'variation_table',
      title: 'Variations du coût total P(v)',
      variation: {
        xLabel: 'v',
        fLabel: 'P(v)',
        xValues: ['0', '√1350', '+∞'],
        values: [
          { text: '+∞', level: 'top' },
          { text: '≈ 220 500', level: 'bottom' },
          { text: '+∞', level: 'top' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l04p_p05_q03',
      type: 'mcq',
      prompt: 'Pourquoi la vitesse qui minimise le coût total ($\\approx 37\\text{ km/h}$) est-elle plus élevée que celle qui minimiserait la seule consommation $C(v)$ ($\\sqrt{900} = 30\\text{ km/h}$) ?',
      options: [
        'Car le salaire horaire du chauffeur pénalise les vitesses trop lentes (qui allongent le trajet)',
        'Car $37$ est premier',
        'Car le gasoil coûte moins cher à grande vitesse',
        'C’est une coïncidence numérique',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le salaire du chauffeur ($900\\text{ FCFA/h}$) incite à rouler plus vite pour raccourcir la durée $1500/v$, ce qui déplace l’optimum de $30$ à $\\sqrt{1350} \\approx 37\\text{ km/h}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice de synthèse',
    stepTheme: 'slate',
    stepTitle: 'Identifier une fonction rationnelle puis déterminer une primitive',
    paragraphText:
      'Soient $f(x) = \\frac{-x^3 + 2x^2 + 2}{x^2 + 1}$ et $h(x) = \\frac{x^4 + 3x^2 - 4x}{(x^2 + 1)^2}$ sur $\\mathbb{R}$. En calculant $f’(x)$, on obtient $f’(x) = \\frac{-x^4 - 3x^2}{(x^2+1)^2} = -h(x) - \\frac{4x}{(x^2+1)^2}$, donc $h(x) = -f’(x) - 2\\cdot\\frac{2x}{(x^2+1)^2}$. On en déduit aussitôt les primitives de $h$ sur $\\mathbb{R}$ : $H(x) = -f(x) + \\frac{2}{x^2 + 1} + c$ ! Et si $H(0) = 2$, comme $f(0) = 2$, $-2 + 2 + c = 2 \\implies c = 2$.',
    exercise: {
      id: 'tc_m_num_l04p_p05_q04',
      type: 'mcq',
      prompt: 'Sachant que $h(x) = -f’(x) - \\frac{4x}{(x^2 + 1)^2}$, quelle est une primitive de $-\\frac{4x}{(x^2 + 1)^2}$ sur $\\mathbb{R}$ ?',
      options: [
        '$-\\frac{2}{x^2 + 1}$',
        '$\\frac{2}{x^2 + 1}$',
        '$\\frac{4}{x^2 + 1}$',
        '$\\frac{2}{(x^2 + 1)^3}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'On écrit $-2 \\cdot \\frac{2x}{(x^2+1)^2} = -2\\frac{u’}{u^2} = +2\\left(\\frac{1}{u}\\right)’ = \\left(\\frac{2}{x^2+1}\\right)’$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Réflexe d’examen',
    stepTheme: 'green',
    stepTitle: 'Savoir utiliser la question précédente dans un problème de primitives',
    paragraphText:
      'Quand un exercice demande de calculer $g’(x)$ à la question 1 puis « déduis-en une primitive de $f$ » à la question 2, exprime $f(x)$ comme combinaison linéaire de $g’(x)$ et de fonctions usuelles : tu n’as alors qu’à remplacer $g’(x)$ par $g(x)$ !',
    exercise: {
      id: 'tc_m_num_l04p_p05_q05',
      type: 'mcq',
      prompt: 'Sur $]0 ; +\\infty[$, si l’on dérive $g(x) = \\frac{\\sin x}{x}$, on obtient $g’(x) = \\frac{x\\cos x - \\sin x}{x^2}$. Quelle est alors une primitive de $f(x) = \\frac{\\sin x - x\\cos x}{x^2}$ ?',
      options: [
        '$\\frac{\\sin x}{x}$',
        '$-\\frac{\\sin x}{x}$',
        '$\\frac{\\cos x}{x}$',
        '$-\\frac{\\cos x}{x}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'On remarque que $f(x) = -g’(x)$, donc une primitive immédiate de $f$ est $-g(x) = -\\frac{\\sin x}{x}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Attention aux unités & bornes',
    stepTheme: 'orange',
    stepTitle: 'Vérifier la vraisemblance physique dans les situations complexes',
    paragraphText:
      'Dans un problème appliqué (vitesse $v$, coût $P(v)$, quantité $x$), vérifie toujours que le minimum trouvé appartient à l’intervalle d’étude ($v > 0$), que la constante $k$ a bien été fixée avec la donnée initiale, et que tu as arrondi proprement dans l’unité demandée.',
    exercise: {
      id: 'tc_m_num_l04p_p05_q06',
      type: 'mcq',
      prompt: 'Dans l’équation $P’(v) = 0 \\iff v^2 = 1350$, pourquoi écarte-t-on la racine négative $-\\sqrt{1350}$ ?',
      options: [
        'Parce que $\\sqrt{1350}$ n’existe pas pour un nombre négatif',
        'Parce qu’une vitesse moyenne $v$ sur le trajet est strictement positive ($v > 0$)',
        'Parce que le chauffeur roule en marche arrière',
        'Parce que $P’(-\\sqrt{1350}) \\ne 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le domaine physique du modèle est $]0 ; +\\infty[$ ($v > 0$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Bilan du chapitre',
    stepTheme: 'slate',
    stepTitle: 'Choisir la bonne stratégie pour primitiver n’importe quelle fonction',
    paragraphText:
      '1) Est-ce une fonction usuelle du tableau ? 2) Sinon, peut-on réécrire (développer, scinder une fraction, linéariser une puissance paire trigonométrique, utiliser $1 + \\tan^2 x$) ? 3) Reconnaît-on $u’ u^r$, $u’/u^r$, $u’/\\sqrt{u}$, $u’\\cos u$, $u’\\sin u$ (à une constante près) ? 4) Sinon, l’énoncé fournit une dérivée auxiliaire ou une forme à identifier !',
    exercise: {
      id: 'tc_m_num_l04p_p05_q07',
      type: 'mcq',
      prompt: 'Quelle méthode permet de primitiver $f(x) = \\frac{4x^3}{\\sqrt{x^4 + 1}}$ sur $\\mathbb{R}$ ?',
      options: [
        'Division euclidienne des polynômes',
        'Reconnaître la forme $\\frac{u’(x)}{\\sqrt{u(x)}}$ avec $u(x) = x^4 + 1$, donnant $2\\sqrt{x^4 + 1} + c$',
        'Linéarisation trigonométrique',
        'Dériver le dénominateur seulement',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $u(x) = x^4 + 1 > 0$, $u’(x) = 4x^3$, donc $f = \\frac{u’}{\\sqrt{u}}$ a pour primitives $2\\sqrt{x^4 + 1} + c$.',
    },
  },
];

export const MATHS_TLE_C_L04_PRIMITIVES: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l04_primitives',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 5,
  title: 'Leçon 4 : Primitives',
  summary:
    'Notion de primitive sur un intervalle, existence par continuité, unicité avec condition initiale, primitives des fonctions usuelles, opérations et compositions (u′u^r, u′/√u, u′cos u, u′sin u), linéarisation et modélisation.',
  officialVolumeHours: 6,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l04_primitives_p01',
      order: 1,
      title: 'Notion de primitive, existence et condition initiale',
      summary:
        'Définir une primitive F sur un intervalle I (F′ = f), utiliser la continuité pour l’existence et déterminer la constante c par une condition initiale F(x₀) = y₀.',
      conceptExplanation:
        'Une primitive d’une fonction f sur un intervalle I est une fonction F dérivable sur I vérifiant F′(x) = f(x). Toute fonction continue sur un intervalle admet une infinité de primitives sur I, toutes de la forme F(x) + c (c ∈ R). Imposer une condition initiale F(x₀) = y₀ fixe de façon unique la constante c.',
      keyRule: 'Sur un intervalle I, deux primitives d’une même fonction f ne diffèrent que d’une constante réelle.',
      formulas: [
        { name: 'Définition', formula: '\\forall x \\in I,\\; F’(x) = f(x)' },
        { name: 'Ensemble des primitives', formula: 'x \\mapsto F(x) + c \\quad (c \\in \\mathbb{R})' },
      ],
      workedExample: {
        title: 'Primitive vérifiant une condition initiale',
        statement: 'Déterminer la primitive $H$ de $g(x) = 2x - 1$ sur $\\mathbb{R}$ qui prend la valeur $5$ en $-1$.',
        methodSteps: [
          'Une primitive de $g$ sur $\\mathbb{R}$ est $G(x) = x^2 - x$.',
          'Toute primitive s’écrit $H(x) = x^2 - x + c$ ($c \\in \\mathbb{R}$).',
          'Résoudre $H(-1) = 5 \\iff (-1)^2 - (-1) + c = 5 \\iff 2 + c = 5 \\iff c = 3$.',
        ],
        conclusion: 'L’unique primitive répondant à la question est $H(x) = x^2 - x + 3$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_primitives_p02',
      order: 2,
      title: 'Primitives des fonctions usuelles',
      summary:
        'Maîtriser le tableau des primitives usuelles (constantes, x^r avec r rationnel différent de −1, 1/x^r, 1/√x, cos, sin, 1/cos², 1/sin²) et la vérification par dérivation.',
      conceptExplanation:
        'À partir du tableau des dérivées usuelles lu à rebours, on obtient les primitives fondamentales sur chaque intervalle adapté : x^r donne x^(r+1)/(r+1) pour tout rationnel r ≠ −1, 1/√x donne 2√x, cos x donne sin x, sin x donne −cos x, 1/cos² x = 1 + tan² x donne tan x. Avant d’intégrer une fraction rationnelle simple ou un produit, on commence par le développer en somme.',
      keyRule: 'Toujours dériver mentalement sa primitive F pour vérifier qu’on retrouve f.',
      formulas: [
        { name: 'Puissance rationnelle', formula: '\\int x^r\\,dx = \\frac{1}{r+1}x^{r+1} + c \\quad (r \\in \\mathbb{Q}\\setminus\\{-1\\})' },
        { name: 'Racine', formula: '\\int \\frac{1}{\\sqrt{x}}\\,dx = 2\\sqrt{x} + c' },
      ],
      workedExample: {
        title: 'Primitive de x^(2/3) sur ]0 ; +∞[',
        statement: 'Déterminer les primitives sur $]0 ; +\\infty[$ de $f(x) = x^{\\frac{2}{3}}$.',
        methodSteps: [
          'Identifier $r = \\frac{2}{3} \\ne -1$.',
          'Calculer $r + 1 = \\frac{2}{3} + 1 = \\frac{5}{3}$, puis $\\frac{1}{r + 1} = \\frac{3}{5}$.',
          'Écrire $F(x) = \\frac{3}{5} x^{\\frac{5}{3}} + c$ ($c \\in \\mathbb{R}$) et vérifier en dérivant.',
        ],
        conclusion: 'Les primitives sur $]0 ; +\\infty[$ sont les fonctions $x \\mapsto \\frac{3}{5} x^{\\frac{5}{3}} + c$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_primitives_p03',
      order: 3,
      title: 'Opérations linéaires et primitives composées',
      summary:
        'Combiner la linéarité et les formes composées u′u^r, u′/u^r, u′/√u, u′cos u, u′sin u, cos(ax + b) et sin(ax + b) en ajustant le facteur constant.',
      conceptExplanation:
        'La dérivation en chaîne (v ∘ u)′ = u′ · (v′ ∘ u) permet d’intégrer de nombreuses fonctions composées dès que le facteur u′(x) figure devant (quitte à le faire apparaître en multipliant et divisant par une constante non nulle). Il faut veiller au signe moins devant −cos(u) pour u′sin(u) et au domaine où u > 0 pour √u.',
      keyRule: 'Poser u(x), calculer u′(x), puis ajuster la constante manquante 1/k devant l’expression.',
      formulas: [
        { name: 'Composée puissance', formula: 'u’ u^r \\longrightarrow \\frac{1}{r+1} u^{r+1} \\quad (r \\ne -1)' },
        { name: 'Composée radical', formula: '\\frac{u’}{\\sqrt{u}} \\longrightarrow 2\\sqrt{u}' },
      ],
      workedExample: {
        title: 'Ajustement du facteur u′(x)',
        statement: 'Déterminer les primitives sur $\\mathbb{R}$ de $f(x) = (3x + 2)(3x^2 + 4x + 7)^3$.',
        methodSteps: [
          'Poser $u(x) = 3x^2 + 4x + 7$, d’où $u’(x) = 6x + 4 = 2(3x + 2)$.',
          'Réécrire $f(x) = \\frac{1}{2} u’(x) [u(x)]^3$.',
          'Primitiver : $F(x) = \\frac{1}{2} \\cdot \\frac{1}{4}[u(x)]^4 + c = \\frac{1}{8}(3x^2 + 4x + 7)^4 + c$.',
        ],
        conclusion: 'Les primitives sur $\\mathbb{R}$ sont $x \\mapsto \\frac{1}{8}(3x^2 + 4x + 7)^4 + c$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_primitives_p04',
      order: 4,
      title: 'Techniques avancées : linéarisation, division et identification',
      summary:
        'Primitiver cos⁴ x par linéarisation, décomposer une fraction rationnelle par division euclidienne, identifier (ax²+bx+c)√(3−2x) et utiliser les identités trigonométriques.',
      conceptExplanation:
        'Lorsque la forme u′·(v′ ∘ u) n’apparaît pas directement, plusieurs méthodes prennent le relais : linéariser les puissances paires de cos et sin, isoler un facteur sin ou cos pour les puissances impaires, effectuer la division euclidienne d’une fraction rationnelle, ou identifier des coefficients en dérivant une forme polynomiale proposée.',
      keyRule: 'Puissances trigonométriques paires => linéariser ; impaires => isoler un facteur u′.',
      formulas: [
        { name: 'Duplication', formula: '\\cos^2 x = \\frac{1 + \\cos(2x)}{2} \\quad ; \\quad \\sin^2 x = \\frac{1 - \\cos(2x)}{2}' },
      ],
      workedExample: {
        title: 'Primitive de cos⁴ x par linéarisation',
        statement: 'Linéariser $\\cos^4 x$ et en déduire ses primitives sur $\\mathbb{R}$.',
        methodSteps: [
          '$\\cos^4 x = \\left(\\frac{1 + \\cos 2x}{2}\\right)^2 = \\frac{1}{4}(1 + 2\\cos 2x + \\cos^2 2x)$.',
          'Remplacer $\\cos^2 2x = \\frac{1 + \\cos 4x}{2}$ : $\\cos^4 x = \\frac{3}{8} + \\frac{1}{2}\\cos 2x + \\frac{1}{8}\\cos 4x$.',
          'Primitiver terme à terme : $F(x) = \\frac{3}{8}x + \\frac{1}{4}\\sin 2x + \\frac{1}{32}\\sin 4x + c$.',
        ],
        conclusion: 'Les primitives sur $\\mathbb{R}$ sont $x \\mapsto \\frac{3}{8}x + \\frac{1}{4}\\sin(2x) + \\frac{1}{32}\\sin(4x) + c$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_primitives_p05',
      order: 5,
      title: 'Modélisation et synthèses avec primitives',
      summary:
        'Résoudre un problème d’optimisation dont le modèle repose sur une primitive (consommation et coût minimal d’un trajet) et exploiter les dérivées auxiliaires.',
      conceptExplanation:
        'Dans les situations complexes, on connaît souvent la vitesse de variation (la dérivée) d’une grandeur physique ou économique ainsi qu’une mesure ponctuelle. Prendre la primitive puis fixer la constante grâce à la mesure permet de reconstituer la fonction modèle complète avant d’en étudier les extrema.',
      keyRule: 'Reconstituer la fonction par primitive + donnée initiale, puis optimiser par dérivée.',
      formulas: [
        { name: 'Coût minimal du trajet', formula: 'P(v) = \\frac{4\\,050\\,000}{v} + 3\\,000v \\implies v_{\\min} = \\sqrt{1350} \\approx 37\\text{ km/h}' },
      ],
      workedExample: {
        title: 'Reconstitution de C(v) à partir de C′(v)',
        statement: 'Sachant que $C’(v) = -\\frac{300}{v^2} + \\frac{1}{3}$ sur $]0 ; +\\infty[$ et $C(60) = 25$, déterminer $C(v)$.',
        methodSteps: [
          'Primitiver : $C(v) = \\frac{300}{v} + \\frac{v}{3} + k$ ($k \\in \\mathbb{R}$).',
          'Utiliser $C(60) = 25$ : $\\frac{300}{60} + \\frac{60}{3} + k = 5 + 20 + k = 25 \\implies k = 0$.',
        ],
        conclusion: 'Pour tout $v > 0$, $C(v) = \\frac{300}{v} + \\frac{v}{3}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};

