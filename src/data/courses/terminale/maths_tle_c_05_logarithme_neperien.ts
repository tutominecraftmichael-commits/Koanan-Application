import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Modéliser un seuil probabiliste avec le logarithme népérien',
    paragraphText:
      'Lors d’une campagne de dépistage de la fièvre typhoïde dans un lycée, la probabilité qu’un élève choisi au hasard ne soit pas atteint est $0{,}325$. Pour que la probabilité qu’au moins un élève parmi $n$ contrôlés ne soit pas atteint dépasse $0{,}98$, on résout $1 - (0{,}325)^n > 0{,}98$, soit $(0{,}325)^n < 0{,}02$. L’inconnue $n$ étant en exposant, il faut disposer d’une fonction qui transforme les puissances en produits : c’est le rôle du logarithme népérien $\\ln$.',
    formula: {
      name: 'Résolution du seuil',
      formula: '(0{,}325)^n < 0{,}02 \\iff n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)} \\approx 3{,}48 \\implies n_{\\min} = 4',
    },
    konanTip: 'Dès que l’inconnue $n$ figure en exposant ($a^n = b$ ou $a^n < b$), le passage au logarithme $\\ln$ fait tomber l’exposant devant !',
    exercise: {
      id: 'tc_m_num_l05_p01_q01',
      type: 'mcq',
      prompt: 'Dans l’inéquation $(0{,}325)^n < 0{,}02$, pourquoi change-t-on le sens de l’inégalité en divisant par $\\ln(0{,}325)$ ?',
      options: [
        'Parce que $\\ln(0{,}325)$ est strictement négatif ($0{,}325 < 1$)',
        'Parce que $0{,}02$ est négatif',
        'Parce que la fonction $\\ln$ est décroissante sur $]0 ; +\\infty[$',
        'Parce que $n$ est un entier négatif',
      ],
      correctAnswerIndex: 0,
      explanation: 'Comme $0 < 0{,}325 < 1$, on a $\\ln(0{,}325) < 0$. Diviser $n\\ln(0{,}325) < \\ln(0{,}02)$ par un nombre strictement négatif inverse le sens de l’inégalité : $n > \\frac{\\ln(0{,}02)}{\\ln(0{,}325)} \\approx 3{,}48$, d’où $n_{\\min} = 4$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Définition du logarithme népérien',
    paragraphText:
      'La fonction inverse $x \\mapsto \\frac{1}{x}$ est continue sur l’intervalle $]0 ; +\\infty[$, donc elle y admet des primitives. On appelle fonction logarithme népérien, notée $\\ln$, l’unique primitive de $x \\mapsto \\frac{1}{x}$ sur $]0 ; +\\infty[$ qui s’annule en $1$. Par conséquent, $\\ln$ est dérivable sur $]0 ; +\\infty[$, $\\ln(1) = 0$ et pour tout $x > 0$, $\\ln’(x) = \\frac{1}{x}$.',
    formula: {
      name: 'Définition par primitive',
      formula: 'D_{\\ln} = ]0 ; +\\infty[, \\quad \\ln(1) = 0 \\quad \\text{et} \\quad \\forall x > 0,\\; \\ln’(x) = \\frac{1}{x}',
    },
    exercise: {
      id: 'tc_m_num_l05_p01_q02',
      type: 'mcq',
      prompt: 'Que vaut $\\ln’(4)$ et que vaut $\\ln(1)$ ?',
      options: [
        '$\\ln’(4) = 4$ et $\\ln(1) = 1$',
        '$\\ln’(4) = \\frac{1}{4}$ et $\\ln(1) = 0$',
        '$\\ln’(4) = \\frac{1}{4}$ et $\\ln(1) = 1$',
        '$\\ln’(4) = -\\frac{1}{16}$ et $\\ln(1) = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par définition, $\\ln$ est la primitive sur $]0 ; +\\infty[$ de $x \\mapsto \\frac{1}{x}$ nulle en $1$, donc $\\ln’(4) = \\frac{1}{4}$ et $\\ln(1) = 0$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Variations & Signe',
    stepTheme: 'violet',
    stepTitle: 'Sens de variation et signe de $\\ln(x)$',
    paragraphText:
      'Pour tout $x \\in ]0 ; +\\infty[$, $\\ln’(x) = \\frac{1}{x} > 0$, donc la fonction $\\ln$ est strictement croissante sur $]0 ; +\\infty[$. Comme de plus $\\ln(1) = 0$, on en déduit immédiatement le signe de $\\ln(x)$ : $\\ln(x) < 0$ pour $0 < x < 1$, $\\ln(1) = 0$, et $\\ln(x) > 0$ pour $x > 1$.',
    formula: {
      name: 'Signe du logarithme népérien',
      formula: '0 < x < 1 \\implies \\ln x < 0 \\quad ; \\quad x = 1 \\implies \\ln x = 0 \\quad ; \\quad x > 1 \\implies \\ln x > 0',
    },
    exercise: {
      id: 'tc_m_num_l05_p01_q03',
      type: 'mcq',
      prompt: 'Quel est le signe de $\\ln\\left(\\frac{3}{5}\\right)$ et celui de $\\ln(\\pi)$ ?',
      options: [
        'Tous deux sont positifs',
        '$\\ln\\left(\\frac{3}{5}\\right) < 0$ et $\\ln(\\pi) > 0$',
        '$\\ln\\left(\\frac{3}{5}\\right) > 0$ et $\\ln(\\pi) < 0$',
        'Tous deux sont négatifs',
      ],
      correctAnswerIndex: 1,
      explanation: 'On a $0 < \\frac{3}{5} < 1$, donc $\\ln\\left(\\frac{3}{5}\\right) < \\ln(1) = 0$ ; et $\\pi > 1$, donc $\\ln(\\pi) > \\ln(1) = 0$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Propriété fondamentale',
    stepTheme: 'violet',
    stepTitle: 'Relation fonctionnelle $\\ln(ab) = \\ln a + \\ln b$',
    paragraphText:
      'Pour tous réels strictement positifs $a$ et $b$, $\\ln(ab) = \\ln a + \\ln b$. Démonstration rapide : à $a > 0$ fixé, la fonction $g(x) = \\ln(ax) - \\ln x$ est dérivable sur $]0 ; +\\infty[$ de dérivée $g’(x) = \\frac{a}{ax} - \\frac{1}{x} = 0$, donc $g$ est constante égale à $g(1) = \\ln a$. Cette propriété transforme les produits en sommes.',
    formula: {
      name: 'Relation fondamentale',
      formula: '\\forall a > 0,\\; \\forall b > 0,\\; \\ln(ab) = \\ln a + \\ln b',
    },
    exercise: {
      id: 'tc_m_num_l05_p01_q04',
      type: 'mcq',
      prompt: 'Comment s’écrit $A = \\ln 8 + \\ln 10 + \\ln\\left(\\frac{1}{40}\\right)$ sous forme d’un seul logarithme ?',
      options: [
        '$\\ln 18$',
        '$\\ln 2$',
        '$\\ln\\left(\\frac{9}{20}\\right)$',
        '$2\\ln 2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par additivité de $\\ln$ : $A = \\ln\\left(8 \\times 10 \\times \\frac{1}{40}\\right) = \\ln\\left(\\frac{80}{40}\\right) = \\ln 2$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Règles algébriques',
    stepTheme: 'violet',
    stepTitle: 'Quotient, inverse, puissance rationnelle et racine carrée',
    paragraphText:
      'De la relation $\\ln(ab) = \\ln a + \\ln b$ découlent pour tous $a > 0$, $b > 0$ et tout rationnel $r \\in \\mathbb{Q}$ : $\\ln\\left(\\frac{1}{b}\\right) = -\\ln b$, $\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$, $\\ln(a^r) = r\\ln a$, et en particulier $\\ln(\\sqrt{a}) = \\frac{1}{2}\\ln a$.',
    formula: {
      name: 'Formulaire algébrique de ln',
      formula: '\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b \\quad ; \\quad \\ln(a^r) = r\\ln a \\; (r \\in \\mathbb{Q}) \\quad ; \\quad \\ln\\sqrt{a} = \\frac{1}{2}\\ln a',
    },
    exercise: {
      id: 'tc_m_num_l05_p01_q05',
      type: 'mcq',
      prompt: 'Simplifier $C = \\ln\\left(\\frac{3}{4}\\right) + \\ln\\left(\\frac{8}{3}\\right) - \\ln(2^3)$.',
      options: [
        '$\\ln 2$',
        '$\\ln\\left(\\frac{1}{4}\\right)$ (soit $-2\\ln 2$)',
        '$0$',
        '$\\ln 16$',
      ],
      correctAnswerIndex: 1,
      explanation: '$C = \\ln\\left(\\frac{3}{4} \\times \\frac{8}{3} \\times \\frac{1}{8}\\right) = \\ln\\left(\\frac{1}{4}\\right) = -2\\ln 2$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Pièges classiques',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais confondre $\\ln(a + b)$ avec $\\ln a + \\ln b$',
    paragraphText:
      'Attention aux erreurs classiques ! $\\ln(a + b)$ n’est PAS égal à $\\ln a + \\ln b$, $\\frac{\\ln a}{\\ln b}$ n’est PAS égal à $\\ln\\left(\\frac{a}{b}\\right)$, et $\\ln(x^2) = 2\\ln x$ uniquement lorsque $x > 0$ (si $x \\ne 0$ quelconque, $\\ln(x^2) = 2\\ln|x|$).',
    exercise: {
      id: 'tc_m_num_l05_p01_q06',
      type: 'mcq',
      prompt: 'Laquelle de ces égalités est TOUJOURS vraie pour tout réel $x \\ne 0$ ?',
      options: [
        '$\\ln(x^2) = 2\\ln x$',
        '$\\ln(x^2) = 2\\ln|x|$',
        '$\\ln(x^2 + 1) = \\ln(x^2) + \\ln 1$',
        '$\\frac{\\ln 6}{\\ln 2} = \\ln 3$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Si $x < 0$, $x^2 > 0$ donc $\\ln(x^2)$ existe alors que $\\ln x$ n’existe pas ! L’égalité exacte pour tout $x \\ne 0$ est $\\ln(x^2) = 2\\ln|x|$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Entraînement guidé',
    stepTheme: 'emerald',
    stepTitle: 'Réduire une expression logarithmique en fonction d’un seul $\\ln$',
    paragraphText:
      'Pour exprimer une combinaison $D$ ou $E$ en fonction d’un unique $\\ln p$ ($p$ premier) : décompose chaque entier composé en puissances de nombres premiers ($49 = 7^2$, $25 = 5^2$), remplace $\\sqrt{a}$ par $a^{1/2}$, puis utilise $\\ln(a^r) = r\\ln a$ et factorise.',
    exercise: {
      id: 'tc_m_num_l05_p01_q07',
      type: 'mcq',
      prompt: 'Simplifier $D = \\ln(7^{-3}) + 2\\ln 49$ et $E = 4\\ln 25 - 2\\ln\\sqrt{5}$.',
      options: [
        '$D = \\ln 7$ et $E = 7\\ln 5$',
        '$D = 7\\ln 7$ et $E = 6\\ln 5$',
        '$D = -\\ln 7$ et $E = 7\\ln 5$',
        '$D = \\ln 7$ et $E = 9\\ln 5$',
      ],
      correctAnswerIndex: 0,
      explanation: '$D = -3\\ln 7 + 2\\ln(7^2) = -3\\ln 7 + 4\\ln 7 = \\ln 7$. $E = 4\\ln(5^2) - 2\\left(\\frac{1}{2}\\ln 5\\right) = 8\\ln 5 - \\ln 5 = 7\\ln 5$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Équivalences clés',
    stepTheme: 'violet',
    stepTitle: 'Injectivité et stricte croissance pour comparer des logarithmes',
    paragraphText:
      'Parce que $\\ln$ est continue et strictement croissante sur $]0 ; +\\infty[$, elle réalise une bijection de $]0 ; +\\infty[$ sur $\\mathbb{R}$. Pour tous $a > 0$ et $b > 0$ : $\\ln a = \\ln b \\iff a = b$, et $\\ln a < \\ln b \\iff a < b$.',
    formula: {
      name: 'Comparaison de deux logarithmes',
      formula: '\\forall a > 0,\\; \\forall b > 0 : \\quad \\ln a = \\ln b \\iff a = b \\quad ; \\quad \\ln a \\leqslant \\ln b \\iff a \\leqslant b',
    },
    exercise: {
      id: 'tc_m_num_l05_p02_q01',
      type: 'mcq',
      prompt: 'Sur quel domaine de validité résout-on l’inéquation $\\ln(2x + 4) \\geqslant \\ln(6 - 2x)$, et quel en est l’ensemble solution ?',
      options: [
        'Validité $]-2 ; 3[$ et $S = \\left[\\frac{1}{2} ; 3\\right[$',
        'Validité $\\mathbb{R}$ et $S = \\left[\\frac{1}{2} ; +\\infty\\right[$',
        'Validité $]-2 ; 3[$ et $S = \\left]-2 ; \\frac{1}{2}\\right]$',
        'Validité $]3 ; +\\infty[$ et $S = \\varnothing$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Il faut $2x + 4 > 0$ ($x > -2$) ET $6 - 2x > 0$ ($x < 3$), soit $D_V = ]-2 ; 3[$. Sur $D_V$, $2x + 4 \\geqslant 6 - 2x \\iff 4x \\geqslant 2 \\iff x \\geqslant \\frac{1}{2}$, donc $S = \\left[\\frac{1}{2} ; 3\\right[$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Le nombre e',
    stepTheme: 'blue',
    stepTitle: 'Définition du nombre $e$ et valeur approchée',
    paragraphText:
      'Comme $\\ln$ est continue et strictement croissante de $]0 ; +\\infty[$ sur $\\mathbb{R}$ (en prenant des valeurs négatives et des valeurs positives arbitrairement grandes), l’équation $\\ln x = 1$ admet une unique solution dans $]0 ; +\\infty[$, notée $e$. On a $2 < e < 3$, plus précisément $e \\approx 2{,}718\\,281\\,828$. Pour tout rationnel $r \\in \\mathbb{Q}$, $\\ln(e^r) = r\\ln e = r$.',
    formula: {
      name: 'Nombre de Néper e',
      formula: '\\ln(e) = 1 \\quad (e \\approx 2{,}718) \\quad ; \\quad \\forall r \\in \\mathbb{Q},\\; \\ln(e^r) = r',
    },
    exercise: {
      id: 'tc_m_num_l05_p02_q02',
      type: 'mcq',
      prompt: 'Que vaut $\\ln\\left(\\frac{1}{e^3}\\right) + \\ln(\\sqrt{e})$ ?',
      options: [
        '$-\\frac{5}{2}$',
        '$-\\frac{7}{2}$',
        '$\\frac{5}{2}$',
        '$e^{-5/2}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\ln(e^{-3}) + \\ln(e^{1/2}) = -3 + \\frac{1}{2} = -\\frac{5}{2}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Méthode 1',
    stepTheme: 'emerald',
    stepTitle: 'Résoudre $\\ln(u(x)) = m$ ou $\\ln(u(x)) \\leqslant m$',
    paragraphText:
      'Étape 1 : poser les contraintes d’existence $u(x) > 0$ pour déterminer le domaine de validité $D_V$. Étape 2 : réécrire la constante $m$ sous la forme $m = m\\ln e = \\ln(e^m)$. Étape 3 : appliquer l’équivalence $\\ln(u(x)) = \\ln(e^m) \\iff u(x) = e^m$ (ou l’inégalité correspondante), puis ne retenir que les solutions appartenant à $D_V$.',
    formula: {
      name: 'Réécriture de la constante',
      formula: '\\ln(u(x)) = m \\iff \\begin{cases} u(x) > 0 \\\\ u(x) = e^m \\end{cases} \\quad (\\text{dès que } e^m > 0 \\text{ est automatique !})',
    },
    exercise: {
      id: 'tc_m_num_l05_p02_q03',
      type: 'mcq',
      prompt: 'Résoudre dans $\\mathbb{R}$ l’inéquation $\\ln(x + 1) \\leqslant 2$.',
      options: [
        '$S = ]-1 ; e^2 - 1[$',
        '$S = ]-1 ; e^2 - 1]$',
        '$S = ]-\\infty ; e^2 - 1]$',
        '$S = [e^2 - 1 ; +\\infty[$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Validité : $x + 1 > 0 \\iff x > -1$. Puis $\\ln(x + 1) \\leqslant \\ln(e^2) \\iff x + 1 \\leqslant e^2 \\iff x \\leqslant e^2 - 1$. Attention à bien fermer l’intervalle en $e^2 - 1$ car l’inégalité est large : $S = ]-1 ; e^2 - 1]$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Domaine avant tout !',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais appliquer $\\ln a + \\ln b = \\ln(ab)$ avant le domaine de validité',
    paragraphText:
      'Piège classique : dans $\\ln(x^2 - 4) = \\ln(3x)$, si l’on réécrit $\\ln(x - 2) + \\ln(x + 2) = \\ln(3x)$ sans précaution, on risque d’introduire ou de perdre des solutions ! Toujours déterminer $D_V$ à partir de l’équation INITIALE : ici $x^2 - 4 > 0$ ET $3x > 0$, ce qui impose $x \\in ]2 ; +\\infty[$. On écarte ainsi la racine $-1$ de $x^2 - 3x - 4 = 0$.',
    exercise: {
      id: 'tc_m_num_l05_p02_q04',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des solutions de $\\ln(x^2 - 4) = \\ln(3x)$ dans $\\mathbb{R}$ ?',
      options: [
        '$S = \\{-1 ; 4\\}$',
        '$S = \\{4\\}$',
        '$S = \\{-4 ; 1\\}$',
        '$S = \\varnothing$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Validité : $x^2 - 4 > 0$ et $3x > 0 \\implies x > 2$. Sur $]2 ; +\\infty[$, $x^2 - 4 = 3x \\iff x^2 - 3x - 4 = 0 \\iff (x - 4)(x + 1) = 0$. Seul $4 > 2$ convient : $S = \\{4\\}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Changement d’inconnue',
    stepTheme: 'emerald',
    stepTitle: 'Équations polynomiales en $\\ln x$ (poser $X = \\ln x$)',
    paragraphText:
      'Pour résoudre une équation du type $a(\\ln x)^2 + b\\ln x + c = 0$ sur $]0 ; +\\infty[$ : pose $X = \\ln x$, résous l’équation du second degré $aX^2 + bX + c = 0$, puis reviens à $x = e^X$ pour chaque racine trouvée (sans en oublier aucune, car $\\ln$ prend toutes les valeurs réelles négatives comme positives).',
    exercise: {
      id: 'tc_m_num_l05_p02_q05',
      type: 'mcq',
      prompt: 'Quelles sont les solutions dans $]0 ; +\\infty[$ de $(\\ln x)^2 - 3\\ln x - 4 = 0$ ?',
      options: [
        '$S = \\{-1 ; 4\\}$',
        '$S = \\{e^4\\}$ uniquement',
        '$S = \\{e^{-1} ; e^4\\}$',
        '$S = \\{e^1 ; e^{-4}\\}$',
      ],
      correctAnswerIndex: 2,
      explanation: 'En posant $X = \\ln x$, $X^2 - 3X - 4 = 0$ donne $X_1 = -1$ et $X_2 = 4$. Comme $\\ln$ est surjective sur $\\mathbb{R}$, les deux donnent une solution positive : $x_1 = e^{-1}$ et $x_2 = e^4$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Exercice du cours',
    stepTheme: 'blue',
    stepTitle: 'Équation $\\ln(2x - 3) = 2\\ln(6 - x) - \\ln x$',
    paragraphText:
      'Sur le domaine de validité ($2x - 3 > 0$, $6 - x > 0$ et $x > 0$, soit $D_V = \\left]\\frac{3}{2} ; 6\\right[$), on ramène tous les termes à un seul logarithme de chaque côté : $\\ln(2x - 3) + \\ln x = \\ln((6 - x)^2)$, soit $x(2x - 3) = (6 - x)^2$. On développe : $2x^2 - 3x = 36 - 12x + x^2 \\iff x^2 + 9x - 36 = 0$, de racines $3$ et $-12$. Seul $3 \\in \\left]\\frac{3}{2} ; 6\\right[$ convient.',
    exercise: {
      id: 'tc_m_num_l05_p02_q06',
      type: 'mcq',
      prompt: 'Quelle est l’unique solution de $\\ln(2x - 3) = 2\\ln(6 - x) - \\ln x$ ?',
      options: [
        '$x = 3$',
        '$x = -12$',
        '$x = 2$',
        '$x = 4$',
      ],
      correctAnswerIndex: 0,
      explanation: '$D_V = \\left]\\frac{3}{2} ; 6\\right[$. L’équation se ramène à $x^2 + 9x - 36 = 0$, soit $(x - 3)(x + 12) = 0$. Comme $-12 \\notin D_V$ et $3 \\in D_V$, $S = \\{3\\}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Inéquation produit',
    stepTheme: 'slate',
    stepTitle: 'Inéquation $\\ln 24 + \\ln(3 - x) < \\ln(x + 1) + \\ln(25x - 49)$',
    paragraphText:
      'Contraintes d’existence : $3 - x > 0 \\iff x < 3$, $x + 1 > 0 \\iff x > -1$, et $25x - 49 > 0 \\iff x > \\frac{49}{25}$, d’où $D_V = \\left]\\frac{49}{25} ; 3\\right[$. Sur $D_V$, $\\ln[24(3 - x)] < \\ln[(x + 1)(25x - 49)] \\iff 72 - 24x < 25x^2 - 24x - 49 \\iff 25x^2 > 121 \\iff x^2 > \\left(\\frac{11}{5}\\right)^2$. Comme $x > 0$ sur $D_V$, on obtient $x > \\frac{11}{5} = 2{,}2$, soit $S = \\left]\\frac{11}{5} ; 3\\right[$.',
    exercise: {
      id: 'tc_m_num_l05_p02_q07',
      type: 'mcq',
      prompt: 'Quel est l’ensemble solution de $\\ln 24 + \\ln(3 - x) < \\ln(x + 1) + \\ln(25x - 49)$ ?',
      options: [
        '$\\left]\\frac{49}{25} ; \\frac{11}{5}\\right[$',
        '$\\left]\\frac{11}{5} ; 3\\right[$',
        '$\\left]-\\infty ; -\\frac{11}{5}\\right[ \\cup \\left]\\frac{11}{5} ; +\\infty\\right[$',
        '$\\left]\\frac{11}{5} ; +\\infty\\right[$',
      ],
      correctAnswerIndex: 1,
      explanation: '$D_V = \\left]\\frac{49}{25} ; 3\\right[ \\approx ]1{,}96 ; 3[$. L’inégalité devient $25x^2 > 121 \\iff |x| > \\frac{11}{5} = 2{,}2$. En intersectant avec $D_V$, on obtient $S = \\left]\\frac{11}{5} ; 3\\right[$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Limites aux bornes',
    stepTheme: 'violet',
    stepTitle: 'Limites de $\\ln$ en $+\\infty$ et en $0^+$ (asymptote verticale)',
    paragraphText:
      'La fonction $\\ln$ n’est pas majorée sur $]0 ; +\\infty[$ car pour tout entier $n \\geqslant 1$, $\\ln(2^n) = n\\ln 2 \\xrightarrow[n\\to+\\infty]{} +\\infty$ ($\ln 2 > 0$). Comme $\\ln$ est croissante, $\\lim_{x \\to +\\infty} \\ln x = +\\infty$. En posant $x = \\frac{1}{t}$ avec $t \\to +\\infty$, on obtient $\\lim_{x \\to 0^+} \\ln x = \\lim_{t \\to +\\infty} (-\\ln t) = -\\infty$ : la droite d’équation $x = 0$ (l’axe des ordonnées) est asymptote verticale à $\\mathcal{C}_{\\ln}$.',
    formula: {
      name: 'Limites fondamentales de ln',
      formula: '\\lim_{x \\to +\\infty} \\ln x = +\\infty \\quad ; \\quad \\lim_{x \\to 0^+} \\ln x = -\\infty',
    },
    visualSchema: {
      type: 'variation_table',
      title: 'Tableau de variations de la fonction ln sur ]0 ; +∞[',
      variation: {
        xLabel: 'x',
        fLabel: 'ln(x)',
        xValues: ['0', '1', 'e', '+∞'],
        values: [
          { text: '−∞', level: 'bottom' },
          { text: '0', level: 'middle' },
          { text: '1', level: 'middle' },
          { text: '+∞', level: 'top' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l05_p03_q01',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to +\\infty} (2x - 3 - \\ln x)$ ? (Indication : factoriser par $x$.)',
      options: [
        '$-\\infty$',
        '$0$',
        '$+\\infty$',
        '$2$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Pour $x > 0$, $2x - 3 - \\ln x = x\\left(2 - \\frac{3}{x} - \\frac{\\ln x}{x}\\right)$. Or $\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0$, donc la parenthèse tend vers $2 > 0$ et le produit tend vers $+\\infty$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Croissances comparées',
    stepTheme: 'violet',
    stepTitle: 'Limites $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0$ et $\\lim_{x\\to 0^+} x\\ln x = 0$',
    paragraphText:
      'En $+\\infty$, toute puissance $x^n$ ($n \\in \\mathbb{N}^*$) l’emporte sur $\\ln x$ : $\\lim_{x\\to+\\infty} \\frac{\\ln x}{x^n} = 0$. On le prouve par exemple pour $n = 1$ en étudiant $f(x) = \\ln x - 2\\sqrt{x}$ sur $[1;+\\infty[$ : $f’(x) = \\frac{1}{x} - \\frac{1}{\\sqrt{x}} \\leqslant 0$, donc $\\ln x < 2\\sqrt{x}$ et $0 \\leqslant \\frac{\\ln x}{x} < \\frac{2}{\\sqrt{x}} \\to 0$. Par changement de variable $x = 1/t$, on en déduit $\\lim_{x\\to 0^+} x^n \\ln x = 0$.',
    formula: {
      name: 'Croissances comparées avec ln',
      formula: '\\forall n \\in \\mathbb{N}^*,\\; \\lim_{x \\to +\\infty} \\frac{\\ln x}{x^n} = 0 \\quad \\text{et} \\quad \\lim_{x \\to 0^+} x^n \\ln x = 0',
    },
    exercise: {
      id: 'tc_m_num_l05_p03_q02',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 0^+} (x^3 \\ln x)$ ?',
      options: [
        '$-\\infty$',
        '$+\\infty$',
        '$0$',
        '$1$',
      ],
      correctAnswerIndex: 2,
      explanation: '$x^3\\ln x = x^2 (x\\ln x) \\xrightarrow[x\\to 0^+]{} 0 \\times 0 = 0$ (ou directement par croissance comparée $\\lim_{x\\to 0^+} x^n\\ln x = 0$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Taux d’accroissement',
    stepTheme: 'violet',
    stepTitle: 'Limites remarquables en $0$ et en $1$ (nombre dérivé)',
    paragraphText:
      'Comme $\\ln$ est dérivable en $1$ avec $\\ln(1) = 0$ et $\\ln’(1) = 1$, la définition du nombre dérivé donne deux limites essentielles pour lever des formes indéterminées $0/0$ : $\\lim_{x \\to 1} \\frac{\\ln x}{x - 1} = 1$, et en posant $x = 1 + h$ ($h \\to 0$) : $\\lim_{h \\to 0} \\frac{\\ln(1 + h)}{h} = 1$.',
    formula: {
      name: 'Limites par nombre dérivé',
      formula: '\\lim_{x \\to 1} \\frac{\\ln x}{x - 1} = 1 \\quad \\text{et} \\quad \\lim_{h \\to 0} \\frac{\\ln(1 + h)}{h} = 1',
    },
    exercise: {
      id: 'tc_m_num_l05_p03_q03',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to +\\infty} \\left[x \\ln\\left(1 + \\frac{2}{x}\\right)\\right]$ ?',
      options: [
        '$0$',
        '$1$',
        '$2$',
        '$+\\infty$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Poser $h = \\frac{2}{x}$. Quand $x \\to +\\infty$, $h \\to 0^+$ et $x\\ln\\left(1 + \\frac{2}{x}\\right) = 2 \\cdot \\frac{\\ln(1 + h)}{h} \\xrightarrow[h\\to 0]{} 2 \\times 1 = 2$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Courbe & Concavité',
    stepTheme: 'blue',
    stepTitle: 'Tangente en $A(1 ; 0)$ et inégalité de concavité $\\ln x \\leqslant x - 1$',
    paragraphText:
      'La tangente à $\\mathcal{C}_{\\ln}$ au point $A(1 ; 0)$ a pour équation $y = \\ln’(1)(x - 1) + \\ln(1) = x - 1$. Comme $\\ln’’(x) = -\\frac{1}{x^2} < 0$, $\\ln$ est concave sur $]0 ; +\\infty[$ : sa courbe est toujours en dessous de chacune de ses tangentes. On retient l’inégalité classique : pour tout $x > 0$, $\\ln x \\leqslant x - 1$, avec égalité uniquement en $x = 1$. De plus, $\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0$ indique une branche parabolique de direction l’axe $(Ox)$.',
    visualSchema: {
      type: 'function_plot',
      title: 'Courbe de ln(x) et sa tangente y = x − 1 en A(1 ; 0)',
      plot: {
        xMin: -0.5,
        xMax: 5.5,
        yMin: -2.5,
        yMax: 2.5,
        xStep: 1,
        yStep: 1,
        curves: [
          {
            label: 'y = ln(x)',
            color: 'blue',
            pieces: [{ expr: 'ln(x)', from: 0.08, to: 5.5 }],
          },
          {
            label: 'y = x - 1',
            color: 'orange',
            pieces: [{ expr: 'x - 1', from: -0.5, to: 3.5 }],
          },
        ],
        points: [
          { x: 1, y: 0, label: 'A(1;0)' },
          { x: 2.718, y: 1, label: '(e;1)' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l05_p03_q04',
      type: 'mcq',
      prompt: 'Quelle affirmation est vraie pour la courbe $\\mathcal{C}_{\\ln}$ au point $B(e ; 1)$ ?',
      options: [
        'La tangente passe par l’origine $O(0 ; 0)$ et a pour équation $y = \\frac{1}{e}x$',
        'La tangente est horizontale d’équation $y = 1$',
        'La tangente a pour équation $y = x - e + 1$',
        'La courbe $\\mathcal{C}_{\\ln}$ traverse sa tangente en $B$',
      ],
      correctAnswerIndex: 0,
      explanation: '$T_B : y = \\ln’(e)(x - e) + \\ln(e) = \\frac{1}{e}(x - e) + 1 = \\frac{1}{e}x - 1 + 1 = \\frac{1}{e}x$. Elle passe bien par l’origine $O$ !',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Changement de variable',
    stepTheme: 'emerald',
    stepTitle: 'Calculer $\\lim_{x\\to+\\infty}\\frac{\\ln(ax)}{x}$ pour $a > 0$',
    paragraphText:
      'Pour calculer $\\lim_{x \\to +\\infty} \\frac{\\ln(0{,}8x)}{x}$, on évite toute confusion : il suffit d’écrire $\\frac{\\ln(0{,}8x)}{x} = \\frac{\\ln(0{,}8) + \\ln x}{x} = \\frac{\\ln(0{,}8)}{x} + \\frac{\\ln x}{x}$, ou de poser $u = 0{,}8x \\to +\\infty$ d’où $0{,}8 \\cdot \\frac{\\ln u}{u} \\to 0$. Attention aux fautes de frappe d’énoncé : $\\lim_{x\\to+\\infty}\\frac{\\ln(0{,}8x)}{x} = 0$.',
    exercise: {
      id: 'tc_m_num_l05_p03_q05',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to +\\infty} \\frac{\\ln(0{,}8x)}{x}$ ?',
      options: [
        '$0{,}8$',
        '$\\ln(0{,}8)$',
        '$0$',
        '$+\\infty$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\frac{\\ln(0{,}8x)}{x} = \\frac{\\ln(0{,}8)}{x} + \\frac{\\ln x}{x} \\xrightarrow[x\\to+\\infty]{} 0 + 0 = 0$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Attention aux limites composées',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre $\\ln(x) \\to 0$ (quand $x \\to 1$) et $x \\to 0^+$',
    paragraphText:
      'Lorsqu’on calcule $\\lim_{x \\to a} \\ln(u(x))$ : si $u(x) \\to L > 0$, la limite vaut $\\ln L$ (donc $0$ si $L = 1$ !) ; si $u(x) \\to 0^+$, la limite vaut $-\\infty$ ; si $u(x) \\to +\\infty$, la limite vaut $+\\infty$. Ne jamais confondre l’endroit où $u(x)$ tend vers $0^+$ et l’endroit où $u(x)$ tend vers $1$.',
    exercise: {
      id: 'tc_m_num_l05_p03_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 2^+} \\ln(x^2 - 4)$ ?',
      options: [
        '$0$',
        '$-\\infty$',
        '$+\\infty$',
        '$\\ln 4$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Quand $x \\to 2^+$, $x^2 - 4 \\to 0^+$, donc $\\ln(x^2 - 4) \\to -\\infty$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Synthèse limites',
    stepTheme: 'slate',
    stepTitle: 'Bilan : quel théorème pour lever une indétermination avec $\\ln$ ?',
    paragraphText:
      'Trois réflexes couvrent la quasi-totalité des limites de Terminale C : 1) en $+\\infty$ ou $0^+$, factoriser ou poser $u$ pour faire apparaître $\\frac{\\ln x}{x}$ ou $x\\ln x$ ; 2) en $a$ fini avec forme $0/0$, reconnaître $\\frac{\\ln(1+h)}{h}$ ou le taux d’accroissement d’une dérivée ; 3) utiliser $\\ln(a/b) = \\ln a - \\ln b$ ou $\\ln(ab) = \\ln a + \\ln b$ pour simplifier l’écriture avant le passage à la limite.',
    exercise: {
      id: 'tc_m_num_l05_p03_q07',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to +\\infty} \\left[\\ln(2x + 1) - \\ln(x + 3)\\right]$ ?',
      options: [
        '$+\\infty$',
        '$0$',
        '$\\ln 2$',
        '$2$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Pour $x > 0$, $\\ln(2x + 1) - \\ln(x + 3) = \\ln\\left(\\frac{2x + 1}{x + 3}\\right)$. Or $\\lim_{x\\to+\\infty}\\frac{2x + 1}{x + 3} = 2$, donc la limite vaut $\\ln 2$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Dérivation composée',
    stepTheme: 'violet',
    stepTitle: 'Dérivée de $\\ln(u)$ et de $\\ln|u|$',
    paragraphText:
      'Si $u$ est dérivable et strictement positive sur un intervalle $I$ ($u(x) > 0$), alors $\\ln \\circ u$ est dérivable sur $I$ et $(\\ln u)’ = \\frac{u’}{u}$. Plus généralement, si $u$ est dérivable et ne s’annule pas sur $I$ ($u(x) \\ne 0$), alors $x \\mapsto \\ln|u(x)|$ est dérivable sur $I$ avec la même formule : $(\\ln|u|)’ = \\frac{u’}{u}$ (vrai aussi lorsque $u < 0$, car $\\ln(-u)’ = \\frac{-u’}{-u} = \\frac{u’}{u}$).',
    formula: {
      name: 'Dérivées logarithmiques',
      formula: '(\\ln u)’ = \\frac{u’}{u} \\; (u > 0) \\qquad ; \\qquad (\\ln|u|)’ = \\frac{u’}{u} \\; (u \\ne 0)',
    },
    exercise: {
      id: 'tc_m_num_l05_p04_q01',
      type: 'mcq',
      prompt: 'Quelle est la dérivée de $f(x) = \\ln(x^2 + 1)$ sur $\\mathbb{R}$ ?',
      options: [
        '$f’(x) = \\frac{1}{x^2 + 1}$',
        '$f’(x) = \\frac{2x}{x^2 + 1}$',
        '$f’(x) = \\frac{x}{x^2 + 1}$',
        '$f’(x) = 2x\\ln(x^2 + 1)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour tout $x \\in \\mathbb{R}$, $u(x) = x^2 + 1 > 0$ et $u’(x) = 2x$, donc $f’(x) = \\frac{u’(x)}{u(x)} = \\frac{2x}{x^2 + 1}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Dérivée avec valeur absolue',
    stepTheme: 'blue',
    stepTitle: 'Dériver $g(x) = \\ln|2x - 1|$ sur chacun de ses intervalles',
    paragraphText:
      'La fonction $g(x) = \\ln|2x - 1|$ est définie et dérivable sur $\\mathbb{R}\\setminus\\left\\{\\frac{1}{2}\\right\\}$, c’est-à-dire sur $I_1 = \\left]-\\infty ; \\frac{1}{2}\\right[$ et sur $I_2 = \\left]\\frac{1}{2} ; +\\infty\\right[$. Sur chacun de ces deux intervalles, avec $u(x) = 2x - 1 \\ne 0$ et $u’(x) = 2$, on a directement $g’(x) = \\frac{2}{2x - 1}$.',
    exercise: {
      id: 'tc_m_num_l05_p04_q02',
      type: 'mcq',
      prompt: 'Calculer la dérivée de $h(x) = \\ln\\left|\\frac{x - 1}{x + 1}\\right|$ sur $\\mathbb{R}\\setminus\\{-1 ; 1\\}$.',
      options: [
        '$h’(x) = \\frac{2}{x^2 - 1}$',
        '$h’(x) = \\frac{-2}{x^2 - 1}$',
        '$h’(x) = \\frac{2x}{x^2 - 1}$',
        '$h’(x) = \\frac{1}{x - 1} + \\frac{1}{x + 1}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$h(x) = \\ln|x - 1| - \\ln|x + 1|$ sur chaque intervalle de définition, donc $h’(x) = \\frac{1}{x - 1} - \\frac{1}{x + 1} = \\frac{(x + 1) - (x - 1)}{x^2 - 1} = \\frac{2}{x^2 - 1}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Primitives de u’/u',
    stepTheme: 'violet',
    stepTitle: 'Primitives des fonctions du type $\\frac{u’}{u}$ sur un intervalle',
    paragraphText:
      'Si $u$ est dérivable et ne s’annule pas sur un intervalle $I$, alors les primitives de $\\frac{u’}{u}$ sur $I$ sont les fonctions $x \\mapsto \\ln|u(x)| + c$ ($c \\in \\mathbb{R}$). Plus précisément : si $u(x) > 0$ sur $I$, c’est $\\ln(u(x)) + c$ ; et si $u(x) < 0$ sur $I$, c’est $\\ln(-u(x)) + c$. Attention : sur $]-\\infty ; 0[$, une primitive de $\\frac{1}{x}$ est $\\ln(-x)$, pas $\\ln(x)$ !',
    formula: {
      name: 'Primitives de u’/u',
      formula: '\\int \\frac{u’(x)}{u(x)}\\,dx = \\ln|u(x)| + c = \\begin{cases} \\ln(u(x)) + c & \\text{si } u > 0 \\text{ sur } I \\\\ \\ln(-u(x)) + c & \\text{si } u < 0 \\text{ sur } I \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l05_p04_q03',
      type: 'mcq',
      prompt: 'Quelle est la primitive sur $]-\\infty ; 0[$ de $f(x) = \\frac{1}{x}$ qui s’annule en $-2$ ?',
      options: [
        '$F(x) = \\ln(x) - \\ln 2$',
        '$F(x) = \\ln(-x) - \\ln 2$',
        '$F(x) = -\\ln(-x) + \\ln 2$',
        '$F(x) = \\ln\\left(-\\frac{x}{2}\\right) + 2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Sur $]-\\infty ; 0[$, $x < 0$ donc $|x| = -x$. Les primitives de $\\frac{1}{x}$ sont $F(x) = \\ln(-x) + c$. Or $F(-2) = \\ln(2) + c = 0 \\implies c = -\\ln 2$, soit $F(x) = \\ln(-x) - \\ln 2 = \\ln\\left(-\\frac{x}{2}\\right)$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Ajustement du facteur',
    stepTheme: 'emerald',
    stepTitle: 'Faire apparaître $u’$ au numérateur avant d’intégrer',
    paragraphText:
      'Pour primitiver $\\frac{x^3}{x^4 + 2}$ ou $\\frac{1}{1 - 3x}$, on pose $u(x)$ égal au dénominateur, on calcule $u’(x)$, puis on ajuste la constante manquante. Par exemple, pour $f(x) = \\frac{4x^3}{x^4 + 2}$ sur $\\mathbb{R}$, $u(x) = x^4 + 2 > 0$ donne $u’(x) = 4x^3$, donc $F(x) = \\ln(x^4 + 2) + c$. Pour $g(x) = \\frac{1}{1 - 3x}$ sur $]-\\infty ; \\frac{1}{3}[$, $u(x) = 1 - 3x > 0$ a pour dérivée $-3$, donc $g(x) = -\\frac{1}{3}\\frac{-3}{1 - 3x}$ et $G(x) = -\\frac{1}{3}\\ln(1 - 3x) + c$.',
    exercise: {
      id: 'tc_m_num_l05_p04_q04',
      type: 'mcq',
      prompt: 'Déterminer les primitives sur $\\left]-\\infty ; \\frac{1}{3}\\right[$ de $g(x) = \\frac{1}{1 - 3x}$.',
      options: [
        '$\\ln(1 - 3x) + c$',
        '$-3\\ln(1 - 3x) + c$',
        '$-\\frac{1}{3}\\ln(1 - 3x) + c$',
        '$\\frac{1}{3}\\ln(3x - 1) + c$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Sur $\\left]-\\infty ; \\frac{1}{3}\\right[$, $1 - 3x > 0$ et $(1 - 3x)’ = -3$. Donc $\\frac{1}{1 - 3x} = -\\frac{1}{3}\\cdot\\frac{-3}{1 - 3x}$, dont les primitives sont $-\\frac{1}{3}\\ln(1 - 3x) + c$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Fraction rationnelle',
    stepTheme: 'blue',
    stepTitle: 'Primitive de $h(x) = 2x - 7 + \\frac{4}{x - 9}$ sur $]9 ; +\\infty[$',
    paragraphText:
      'Quand une fraction rationnelle est déjà décomposée (ou après division euclidienne) en « polynôme + $\\frac{k}{x - a}$ », on primitive terme à terme : $2x - 7$ donne $x^2 - 7x$, et sur $]9 ; +\\infty[$ où $x - 9 > 0$, $\\frac{4}{x - 9}$ donne $4\\ln(x - 9)$. Ainsi $H(x) = x^2 - 7x + 4\\ln(x - 9) + c$.',
    exercise: {
      id: 'tc_m_num_l05_p04_q05',
      type: 'mcq',
      prompt: 'Quelles sont les primitives de $f(x) = \\frac{2x^2 + 3}{x}$ sur $]0 ; +\\infty[$ ?',
      options: [
        '$x^2 + 3\\ln x + c$',
        '$\\frac{2}{3}x^3 + 3\\ln x + c$',
        '$x^2 - \\frac{3}{x^2} + c$',
        '$2x + 3\\ln x + c$',
      ],
      correctAnswerIndex: 0,
      explanation: 'En séparant la fraction : $\\frac{2x^2 + 3}{x} = 2x + \\frac{3}{x}$, dont les primitives sur $]0 ; +\\infty[$ sont $x^2 + 3\\ln x + c$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Vérifier le signe de u',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier la valeur absolue quand $u$ peut être négatif',
    paragraphText:
      'Erreur fréquente : écrire $\\ln(u(x))$ sans vérifier le signe de $u(x)$ sur l’intervalle demandé ! Sur $]1 ; +\\infty[$, $\\ln(x - 1)$ est valable ; sur $]-\\infty ; 1[$, $x - 1 < 0$ donc il faut absolument écrire $\\ln(1 - x)$ (ou $\\ln|x - 1|$). Par exemple, la primitive de $\\tan x = \\frac{\\sin x}{\\cos x}$ sur $\\left]-\\frac{\\pi}{2} ; \\frac{\\pi}{2}\\right[$ est $-\\ln(\\cos x) + c$ car $\\cos x > 0$ sur cet intervalle.',
    exercise: {
      id: 'tc_m_num_l05_p04_q06',
      type: 'mcq',
      prompt: 'Quelles sont les primitives de $f(x) = \\frac{1}{x - 3}$ sur l’intervalle $]-\\infty ; 3[$ ?',
      options: [
        '$\\ln(x - 3) + c$',
        '$\\ln(3 - x) + c$',
        '$-\\ln(3 - x) + c$',
        '$-\\frac{1}{(x - 3)^2} + c$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Sur $]-\\infty ; 3[$, $x - 3 < 0$, donc $|x - 3| = 3 - x > 0$. La dérivée de $\\ln(3 - x)$ est $\\frac{-1}{3 - x} = \\frac{1}{x - 3}$, donc les primitives sont $\\ln(3 - x) + c$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Changement de forme',
    stepTheme: 'slate',
    stepTitle: 'Reconnaître $\\frac{1}{x\\ln x}$ et les formes $\\frac{u’}{u}$ cachées',
    paragraphText:
      'Une fraction à double étage peut cacher $\\frac{u’}{u}$ ! Par exemple, pour $x \\in ]1 ; +\\infty[$, $\\frac{1}{x\\ln x} = \\frac{1/x}{\\ln x}$ est exactement de la forme $\\frac{u’(x)}{u(x)}$ avec $u(x) = \\ln x > 0$, ce qui s’intègre en $\\ln(\\ln x) + c$.',
    exercise: {
      id: 'tc_m_num_l05_p04_q07',
      type: 'mcq',
      prompt: 'Quelles sont les primitives sur $]1 ; +\\infty[$ de $f(x) = \\frac{1}{x\\ln x}$ ?',
      options: [
        '$\\frac{1}{2}(\\ln x)^2 + c$',
        '$\\ln(\\ln x) + c$',
        '$\\frac{\\ln x}{x} + c$',
        '$-\\frac{1}{(\\ln x)^2} + c$',
      ],
      correctAnswerIndex: 1,
      explanation: 'En posant $u(x) = \\ln x > 0$ sur $]1 ; +\\infty[$, on a $u’(x) = \\frac{1}{x}$, donc $\\frac{1}{x\\ln x} = \\frac{u’(x)}{u(x)}$, qui a pour primitives $\\ln(u(x)) + c = \\ln(\\ln x) + c$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Logarithme de base $a$ ($a > 0$, $a \\ne 1$)',
    paragraphText:
      'Soit $a$ un réel strictement positif et différent de $1$ (pour que $\\ln a \\ne 0$). On appelle fonction logarithme de base $a$, notée $\\log_a$, la fonction définie sur $]0 ; +\\infty[$ par $\\log_a(x) = \\frac{\\ln x}{\\ln a}$. Lorsque $a = e$, on retrouve le logarithme népérien : $\\log_e(x) = \\frac{\\ln x}{\\ln e} = \\ln x$.',
    formula: {
      name: 'Logarithme de base a',
      formula: '\\forall a \\in ]0 ; 1[ \\cup ]1 ; +\\infty[,\\; \\forall x > 0,\\; \\log_a(x) = \\frac{\\ln x}{\\ln a}',
    },
    exercise: {
      id: 'tc_m_num_l05_p05_q01',
      type: 'mcq',
      prompt: 'Pourquoi exclut-on $a = 1$ dans la définition de $\\log_a(x) = \\frac{\\ln x}{\\ln a}$ ?',
      options: [
        'Parce que $\\ln 1 = 0$ et la division par $0$ est impossible',
        'Parce que $\\ln 1 = 1$',
        'Parce que $1$ n’est pas positif',
        'Parce que $1^x$ tend vers $+\\infty$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Pour $a = 1$, $\\ln a = \\ln 1 = 0$, le dénominateur s’annule ; on impose donc $a > 0$ et $a \\ne 1$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Propriétés de log_a',
    stepTheme: 'violet',
    stepTitle: 'Valeurs remarquables, dérivée et sens de variation de $\\log_a$',
    paragraphText:
      'Pour tout $a > 0$ ($a \\ne 1$), $\\log_a(1) = 0$, $\\log_a(a) = \\frac{\\ln a}{\\ln a} = 1$, et $\\log_a(a^r) = r$ ($r \\in \\mathbb{Q}$). La dérivée vaut $\\log_a’(x) = \\frac{1}{x\\ln a}$ : si $a > 1$, $\\ln a > 0$ donc $\\log_a$ est strictement croissante ; si $0 < a < 1$, $\\ln a < 0$ donc $\\log_a$ est strictement décroissante !',
    formula: {
      name: 'Dérivée et variations de log_a',
      formula: '\\log_a’(x) = \\frac{1}{x\\ln a} \\implies \\begin{cases} \\text{croissante si } a > 1 \\\\ \\text{décroissante si } 0 < a < 1 \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l05_p05_q02',
      type: 'mcq',
      prompt: 'Calculer $\\log_2(16)$ et préciser le sens de variation de $\\log_{0{,}5}$ sur $]0 ; +\\infty[$.',
      options: [
        '$\\log_2(16) = 4$ et $\\log_{0{,}5}$ est strictement décroissante',
        '$\\log_2(16) = 8$ et $\\log_{0{,}5}$ est strictement croissante',
        '$\\log_2(16) = 4$ et $\\log_{0{,}5}$ est strictement croissante',
        '$\\log_2(16) = \\frac{1}{4}$ et $\\log_{0{,}5}$ est strictement décroissante',
      ],
      correctAnswerIndex: 0,
      explanation: '$16 = 2^4$ donc $\\log_2(2^4) = 4\\log_2(2) = 4$. Comme $0 < 0{,}5 < 1$, $\\ln(0{,}5) < 0$, donc $\\log_{0{,}5}$ est strictement décroissante sur $]0 ; +\\infty[$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Règles de calcul',
    stepTheme: 'violet',
    stepTitle: 'Propriétés algébriques communes à tous les logarithmes',
    paragraphText:
      'Par linéarité par rapport à $\\ln$, le logarithme de base $a$ vérifie exactement les mêmes propriétés algébriques que $\\ln$ : pour tous $x, y > 0$ et $r \\in \\mathbb{Q}$, $\\log_a(xy) = \\log_a x + \\log_a y$, $\\log_a(1/y) = -\\log_a y$, $\\log_a(x/y) = \\log_a x - \\log_a y$ et $\\log_a(x^r) = r\\log_a x$. Formule de changement de base : $\\log_b(x) = \\frac{\\log_a x}{\\log_a b}$.',
    exercise: {
      id: 'tc_m_num_l05_p05_q03',
      type: 'mcq',
      prompt: 'Que vaut $\\log_3(27) + \\log_3\\left(\\frac{1}{9}\\right)$ ?',
      options: [
        '$5$',
        '$1$',
        '$-1$',
        '$\\frac{3}{2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\log_3(27) + \\log_3(3^{-2}) = \\log_3(3^3) - 2 = 3 - 2 = 1$ (ou directement $\\log_3(27/9) = \\log_3(3) = 1$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Logarithme décimal',
    stepTheme: 'blue',
    stepTitle: 'Le logarithme décimal $\\log(x) = \\log_{10}(x)$',
    paragraphText:
      'On appelle fonction logarithme décimal, notée $\\log$ (sans indice), le logarithme de base $10$ : $\\log(x) = \\frac{\\ln x}{\\ln 10}$ pour tout $x > 0$. Très utilisé en chimie ($\mathrm{pH} = -\\log[\\mathrm{H_3O^+}]$), acoustique (décibels) et sismologie (échelle de Richter), il vérifie $\\log(1) = 0$, $\\log(10) = 1$ et $\\log(10^n) = n$ pour tout $n \\in \\mathbb{Z}$.',
    formula: {
      name: 'Logarithme décimal',
      formula: '\\log(x) = \\frac{\\ln x}{\\ln 10} \\quad ; \\quad \\forall n \\in \\mathbb{Z},\\; \\log(10^n) = n',
    },
    exercise: {
      id: 'tc_m_num_l05_p05_q04',
      type: 'mcq',
      prompt: 'Simplifier $\\log(1000) - \\log(0{,}01)$.',
      options: [
        '$1$',
        '$5$',
        '$-5$',
        '$10$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\log(10^3) - \\log(10^{-2}) = 3 - (-2) = 5$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Nombre de chiffres',
    stepTheme: 'emerald',
    stepTitle: 'Application de $\\log$ : ordre de grandeur et nombre de chiffres',
    paragraphText:
      'Tout réel $N \\geqslant 1$ s’écrit en notation scientifique $N = a \\times 10^k$ avec $1 \\leqslant a < 10$ et $k \\in \\mathbb{N}$. Par suite, $k \\leqslant \\log(N) < k + 1$, donc la partie entière de $\\log(N)$ donne $k$, et le nombre de chiffres de l’écriture décimale d’un entier $N \\geqslant 1$ vaut $\\lfloor \\log N \\rfloor + 1$.',
    exercise: {
      id: 'tc_m_num_l05_p05_q05',
      type: 'mcq',
      prompt: 'Sachant que $\\log(2) \\approx 0{,}30103$, combien de chiffres possède l’entier $2^{100}$ en base $10$ ?',
      options: [
        '$30$ chiffres',
        '$31$ chiffres',
        '$32$ chiffres',
        '$100$ chiffres',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\log(2^{100}) = 100\\log(2) \\approx 30{,}103$. La partie entière vaut $30$, donc $10^{30} < 2^{100} < 10^{31}$, ce qui correspond à $30 + 1 = 31$ chiffres.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège de la base a < 1',
    stepTheme: 'orange',
    stepTitle: 'Attention au sens des inéquations avec $\\log_a$ quand $0 < a < 1$',
    paragraphText:
      'Avec $\\ln$ ou $\\log$ (bases $e > 1$ et $10 > 1$), la fonction est croissante donc l’inégalité est conservée. Mais avec $\\log_{1/2}$, la base vérifie $0 < \\frac{1}{2} < 1$ : la fonction est décroissante, donc $\\log_{1/2}(x) < \\log_{1/2}(y) \\iff x > y$ !',
    exercise: {
      id: 'tc_m_num_l05_p05_q06',
      type: 'mcq',
      prompt: 'Résoudre sur $]0 ; +\\infty[$ l’inéquation $\\log_{0{,}5}(x) \\geqslant -3$.',
      options: [
        '$S = [8 ; +\\infty[$',
        '$S = ]0 ; 8]$',
        '$S = ]0 ; 8[$',
        '$S = \\left[\\frac{1}{8} ; +\\infty\\right[$',
      ],
      correctAnswerIndex: 1,
      explanation: '$-3 = \\log_{0{,}5}(0{,}5^{-3}) = \\log_{0{,}5}(8)$. Comme $0 < 0{,}5 < 1$, $\\log_{0{,}5}$ est décroissante : $\\log_{0{,}5}(x) \\geqslant \\log_{0{,}5}(8) \\iff 0 < x \\leqslant 8$, soit $S = ]0 ; 8]$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Équations mixtes',
    stepTheme: 'slate',
    stepTitle: 'Résoudre une équation mêlant $\\log_a$ et $\\ln$',
    paragraphText:
      'Pour résoudre une équation mélangeant $\\log_2 x$ et $\\log_4 x$ ou $\\ln x$, ramène tout à la même base (par exemple $\\ln$, ou en remarquant que $\\log_4 x = \\frac{\\ln x}{2\\ln 2} = \\frac{1}{2}\\log_2 x$). On retrouve ainsi une équation algébrique classique.',
    exercise: {
      id: 'tc_m_num_l05_p05_q07',
      type: 'mcq',
      prompt: 'Quelle est la solution sur $]0 ; +\\infty[$ de $\\log_2(x) + \\log_4(x) = 3$ ?',
      options: [
        '$x = 4$',
        '$x = 2$',
        '$x = 8$',
        '$x = 16$',
      ],
      correctAnswerIndex: 0,
      explanation: '$\\log_4(x) = \\frac{\\ln x}{\\ln(2^2)} = \\frac{1}{2}\\log_2(x)$. L’équation devient $\\frac{3}{2}\\log_2(x) = 3 \\iff \\log_2(x) = 2 \\iff x = 2^2 = 4$.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'blue',
    stepTitle: 'Optimisation économique : recettes d’une entreprise de boissons',
    paragraphText:
      'Une entreprise modélise la recette annuelle (en millions de FCFA) de sa nouvelle boisson après $x$ mois ($x \\geqslant 1$) par $r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right)$. On dérive ce produit : $r’(x) = 3 - \\left[1\\cdot\\ln\\left(\\frac{x}{2}\\right) + x\\cdot\\frac{1/2}{x/2}\\right] = 3 - \\ln\\left(\\frac{x}{2}\\right) - 1 = 2 - \\ln\\left(\\frac{x}{2}\\right)$. On cherche à partir de quel mois les recettes commencent à baisser ($r’(x) < 0$).',
    formula: {
      name: 'Signe de r’(x)',
      formula: 'r’(x) = 2 - \\ln\\left(\\frac{x}{2}\\right) > 0 \\iff \\ln\\left(\\frac{x}{2}\\right) < 2 \\iff x < 2e^2 \\approx 14{,}78',
    },
    exercise: {
      id: 'tc_m_num_l05_p06_q01',
      type: 'mcq',
      prompt: 'Selon ce modèle ($r’(x) = 2 - \\ln(x/2)$ pour $x \\geqslant 1$), à partir de quel mois entier $x$ les recettes deviennent-elles décroissantes ?',
      options: [
        'À partir du $14^\\text{e}$ mois',
        'À partir du $15^\\text{e}$ mois (car $2e^2 \\approx 14{,}78$)',
        'À partir du $16^\\text{e}$ mois',
        'Elles croissent indéfiniment',
      ],
      correctAnswerIndex: 1,
      explanation: '$r’(x) < 0 \\iff x > 2e^2 \\approx 14{,}78$. Comme le temps est compté en mois entiers, le maximum est atteint autour de $14{,}78$ mois et la baisse s’amorce à partir du $15^\\text{e}$ mois ($x = 15$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Étude complète 1',
    stepTheme: 'emerald',
    stepTitle: 'Étudier la fonction homographique en $\\ln$ : $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$',
    paragraphText:
      'Domaine de définition : il faut $x > 0$ et $1 - \\ln x \\ne 0 \\iff x \\ne e$, d’où $D_f = ]0 ; e[ \\cup ]e ; +\\infty[$. En $0^+$ et $+\\infty$, en factorisant par $\\ln x$, $\\frac{1 + \\ln x}{1 - \\ln x} = \\frac{1/\\ln x + 1}{1/\\ln x - 1} \\to -1$ : la droite $y = -1$ est asymptote horizontale en $+\\infty$. En $e^-$, le numérateur tend vers $2 > 0$ et $1 - \\ln x \\to 0^+$ donc $\\lim_{e^-} f = +\\infty$, et $\\lim_{e^+} f = -\\infty$ (asymptote verticale $x = e$).',
    visualSchema: {
      type: 'variation_table',
      title: 'Tableau de variations de f(x) = (1 + ln x)/(1 − ln x)',
      variation: {
        xLabel: 'x',
        fLabel: 'f(x)',
        xValues: ['0', 'e', '+∞'],
        values: [
          { text: '−1', level: 'middle' },
          { forbidden: true, left: { text: '+∞', level: 'top' }, right: { text: '−∞', level: 'bottom' } },
          { text: '−1', level: 'middle' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l05_p06_q02',
      type: 'mcq',
      prompt: 'Que vaut la dérivée $f’(x)$ de $f(x) = \\frac{1 + \\ln x}{1 - \\ln x}$ sur $D_f = ]0 ; e[ \\cup ]e ; +\\infty[$ ?',
      options: [
        '$f’(x) = \\frac{2}{x(1 - \\ln x)^2} > 0$',
        '$f’(x) = \\frac{-2}{x(1 - \\ln x)^2} < 0$',
        '$f’(x) = \\frac{2\\ln x}{x(1 - \\ln x)^2}$',
        '$f’(x) = \\frac{1}{(1 - \\ln x)^2}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$f’(x) = \\frac{\\frac{1}{x}(1 - \\ln x) - (1 + \\ln x)\\left(-\\frac{1}{x}\\right)}{(1 - \\ln x)^2} = \\frac{\\frac{1 - \\ln x + 1 + \\ln x}{x}}{(1 - \\ln x)^2} = \\frac{2}{x(1 - \\ln x)^2} > 0$ sur chacun des deux intervalles.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Approfondissement (Ex 5)',
    stepTheme: 'blue',
    stepTitle: 'Fonction auxiliaire $f(x) = x - 2 - 2x\\ln x$ sur $]0 ; +\\infty[$',
    paragraphText:
      'Pour étudier le signe de $f(x) = x - 2 - 2x\\ln x$ : comme $\\lim_{x \\to 0^+} x\\ln x = 0$, la limite en $0^+$ vaut $\\lim_{x \\to 0^+} f(x) = 0 - 2 - 0 = -2$ (attention à bien vérifier ce $-2$, et non $0$ !). En $+\\infty$, $f(x) = x(1 - 2\\ln x) - 2 \\to -\\infty$. Dérivée : $f’(x) = 1 - 2(\\ln x + 1) = -1 - 2\\ln x$, qui s’annule en $x_0 = e^{-1/2} = \\frac{1}{\\sqrt{e}}$.',
    formula: {
      name: 'Maximum de la fonction auxiliaire f',
      formula: 'f\\left(e^{-1/2}\\right) = e^{-1/2} - 2 - 2e^{-1/2}\\left(-\\frac{1}{2}\\right) = \\frac{2}{\\sqrt{e}} - 2 < 0',
    },
    exercise: {
      id: 'tc_m_num_l05_p06_q03',
      type: 'mcq',
      prompt: 'Que peut-on conclure sur le signe de $f(x) = x - 2 - 2x\\ln x$ sur $]0 ; +\\infty[$ sachant que son maximum vaut $\\frac{2}{\\sqrt{e}} - 2$ ?',
      options: [
        '$f(x)$ change de signe deux fois sur $]0 ; +\\infty[$',
        'Comme $e > 1 \\implies \\frac{2}{\\sqrt{e}} < 2$, le maximum est strictement négatif, donc $\\forall x > 0,\\; f(x) < 0$',
        '$f(x) > 0$ sur $]0 ; +\\infty[$',
        '$f(x) = 0$ admet une unique solution dans $]1 ; 2[$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Puisque $e > 1$, $\\sqrt{e} > 1$ et $\\frac{2}{\\sqrt{e}} - 2 < 0$ ($\\approx -0{,}79$). Le maximum global sur $]0 ; +\\infty[$ étant strictement négatif, $f(x) < 0$ pour tout $x > 0$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Fonction principale g',
    stepTheme: 'emerald',
    stepTitle: 'Lien entre $g(x) = \\frac{\\ln x}{(x - 2)^2}$ et sa fonction auxiliaire $f$',
    paragraphText:
      'On définit $g(x) = \\frac{\\ln x}{(x - 2)^2}$ sur $D_g = ]0 ; 2[ \\cup ]2 ; +\\infty[$. En dérivant par la règle du quotient : $g’(x) = \\frac{\\frac{1}{x}(x - 2)^2 - 2(x - 2)\\ln x}{(x - 2)^4} = \\frac{(x - 2)\\left[\\frac{x - 2}{x} - 2\\ln x\\right]}{(x - 2)^4} = \\frac{x - 2 - 2x\\ln x}{x(x - 2)^3} = \\frac{f(x)}{x(x - 2)^3}$. Comme $f(x) < 0$ et $x > 0$ partout sur $D_g$, le signe de $g’(x)$ est simplement l’OPPOSÉ de celui de $(x - 2)$ !',
    visualSchema: {
      type: 'variation_table',
      title: 'Variations de g(x) = ln x / (x − 2)² sur ]0 ; 2[ ∪ ]2 ; +∞[',
      variation: {
        xLabel: 'x',
        fLabel: 'g(x)',
        xValues: ['0', '1', '2', '+∞'],
        values: [
          { text: '−∞', level: 'bottom' },
          { text: '0', level: 'middle' },
          { forbidden: true, left: { text: '+∞', level: 'top' }, right: { text: '+∞', level: 'top' } },
          { text: '0', level: 'bottom' },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l05_p06_q04',
      type: 'mcq',
      prompt: 'Avec $g’(x) = \\frac{f(x)}{x(x - 2)^3}$ et $f(x) < 0$ sur $D_g$, quel est le sens de variation de $g$ ?',
      options: [
        'Strictement décroissante sur $]0 ; 2[$ et sur $]2 ; +\\infty[$',
        'Strictement croissante sur $]0 ; 2[$ et strictement décroissante sur $]2 ; +\\infty[$',
        'Strictement croissante sur $]0 ; 2[$ et sur $]2 ; +\\infty[$',
        'Strictement décroissante sur $]0 ; 2[$ et croissante sur $]2 ; +\\infty[$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Sur $]0 ; 2[$, $x - 2 < 0$ donc $(x - 2)^3 < 0$ ; comme $f(x) < 0$, $g’(x) > 0$ ($g$ croît de $-\\infty$ à $+\\infty$). Sur $]2 ; +\\infty[$, $(x - 2)^3 > 0$ donc $g’(x) < 0$ ($g$ décroît de $+\\infty$ à $0$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Tangente & Asymptotes',
    stepTheme: 'blue',
    stepTitle: 'Asymptotes et tangente en $x = 1$ pour $g(x) = \\frac{\\ln x}{(x - 2)^2}$',
    paragraphText:
      'Aux bornes : $\\lim_{x\\to 0^+} g(x) = -\\infty$ (asymptote $x = 0$), $\\lim_{x\\to 2} g(x) = \\frac{\\ln 2}{0^+} = +\\infty$ (asymptote $x = 2$), et en $+\\infty$, $g(x) = \\frac{\\ln x}{x^2}\\cdot \\frac{x^2}{(x - 2)^2} \\to 0 \\times 1 = 0$ (asymptote horizontale $y = 0$). Au point d’abscisse $1$, $g(1) = 0$ et $g’(1) = \\frac{f(1)}{1\\cdot(-1)^3} = \\frac{-1}{-1} = 1$, donc la tangente en $(1 ; 0)$ a pour équation $y = x - 1$.',
    exercise: {
      id: 'tc_m_num_l05_p06_q05',
      type: 'mcq',
      prompt: 'Quelle est l’équation de la tangente à $\\mathcal{C}_g$ au point d’abscisse $1$ ?',
      options: [
        '$y = -x + 1$',
        '$y = x - 1$',
        '$y = x$',
        '$y = 2x - 2$',
      ],
      correctAnswerIndex: 1,
      explanation: '$g(1) = \\frac{\\ln 1}{1} = 0$ et $g’(1) = \\frac{f(1)}{1(-1)^3} = \\frac{1 - 2 - 0}{-1} = 1$, d’où $T_1 : y = 1(x - 1) + 0 = x - 1$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Vérifier les limites finies',
    stepTheme: 'orange',
    stepTitle: 'Lire et vérifier chaque limite dans un tableau de variations',
    paragraphText:
      'Une erreur d’inattention dans un calcul de limite fausse tout le tableau de variations ! Dans $f(x) = x - 2 - 2x\\ln x$, quand $x \\to 0^+$, $x \\to 0$ et $x\\ln x \\to 0$, mais le terme constant $-2$ reste : $\\lim_{0^+} f = -2$ (et surtout pas $0$ !). Vérifie toujours la cohérence entre le signe des limites aux bornes et le sens des flèches du tableau.',
    exercise: {
      id: 'tc_m_num_l05_p06_q06',
      type: 'mcq',
      prompt: 'Que vaut $\\lim_{x \\to 0^+} (x - 2 - 2x\\ln x)$ ?',
      options: [
        '$0$',
        '$-\\infty$',
        '$-2$',
        '$+\\infty$',
      ],
      correctAnswerIndex: 2,
      explanation: '$x \\xrightarrow[0^+]{} 0$ et $2x\\ln x \\xrightarrow[0^+]{} 0$, donc $x - 2 - 2x\\ln x \\xrightarrow[0^+]{} 0 - 2 - 0 = -2$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan du chapitre',
    stepTheme: 'slate',
    stepTitle: 'Récapitulatif des réflexes sur la fonction $\\ln$',
    paragraphText:
      'Pour réussir tout problème sur les logarithmes au Bac C : 1) Toujours poser le domaine $u > 0$ avant toute transformation ; 2) Maîtriser les $5$ limites ($+\\infty$, $0^+$, $\\frac{\\ln x}{x^n}$, $x^n\\ln x$, $\\frac{\\ln(1+h)}{h}$) ; 3) Savoir passer de $\\frac{u’}{u}$ à $\\ln|u|$ et réciproquement ; 4) Savoir utiliser une fonction auxiliaire pour déterminer le signe d’une dérivée contenant $\\ln x$.',
    exercise: {
      id: 'tc_m_num_l05_p06_q07',
      type: 'mcq',
      prompt: 'La fonction $F(x) = x\\ln x - x$ est-elle une primitive de $\\ln x$ sur $]0 ; +\\infty[$ ?',
      options: [
        'Oui, car $F’(x) = (1\\cdot\\ln x + x\\cdot\\frac{1}{x}) - 1 = \\ln x$',
        'Non, car $F’(x) = \\ln x + 1$',
        'Non, car la primitive de $\\ln x$ est $\\frac{1}{x}$',
        'Oui uniquement sur $[1 ; +\\infty[$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Dérivée du produit $x\\ln x$ : $1\\cdot\\ln x + x\\cdot\\frac{1}{x} = \\ln x + 1$. En soustrayant $1$ (dérivée de $x$), on obtient exactement $F’(x) = \\ln x$ sur tout $]0 ; +\\infty[$.',
    },
  },
];

export const MATHS_TLE_C_L05_LOGARITHME_NEPERIEN: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l05_logarithme_neperien',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 6,
  title: 'Leçon 5 : Fonction logarithme népérien',
  summary:
    'Définition de ln, propriétés algébriques, nombre e, équations et inéquations logarithmiques, limites de référence, dérivée u′/u, primitives, logarithme de base a et décimal, études de fonctions.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l05_logarithme_neperien_p01',
      order: 1,
      title: 'Définition de ln, sens de variation et propriétés algébriques',
      summary:
        'Définir ln comme primitive de 1/x sur ]0 ; +∞[ nulle en 1, étudier son signe et appliquer les identités ln(ab), ln(a/b), ln(a^r) et ln(√a).',
      conceptExplanation:
        'La fonction logarithme népérien ln est la primitive de x ↦ 1/x sur ]0 ; +∞[ qui s’annule en 1. Sa dérivée 1/x étant strictement positive, ln est strictement croissante, négative sur ]0 ; 1[ et positive sur ]1 ; +∞[. Elle transforme les produits en sommes, les quotients en différences et les puissances en multiplications.',
      keyRule: 'ln(ab) = ln a + ln b, ln(a/b) = ln a − ln b et ln(a^r) = r ln a pour a, b > 0 et r ∈ ℚ.',
      formulas: [
        { name: 'Relation fondamentale', formula: '\\ln(ab) = \\ln a + \\ln b \\quad (a > 0,\\; b > 0)' },
        { name: 'Puissance rationnelle', formula: '\\ln(a^r) = r\\ln a \\quad (a > 0,\\; r \\in \\mathbb{Q})' },
      ],
      workedExample: {
        title: 'Simplification d’expressions logarithmiques',
        statement: 'Écrire en fonction de $\\ln 2$ ou $\\ln 7$ les réels $A = \\ln 8 + \\ln 10 + \\ln\\frac{1}{40}$ et $D = \\ln(7^{-3}) + 2\\ln 49$.',
        methodSteps: [
          'Regrouper les produits dans $A$ : $A = \\ln\\left(8 \\times 10 \\times \\frac{1}{40}\\right) = \\ln 2$.',
          'Décomposer $49 = 7^2$ dans $D$ : $D = -3\\ln 7 + 2\\ln(7^2) = -3\\ln 7 + 4\\ln 7 = \\ln 7$.',
        ],
        conclusion: 'On obtient $A = \\ln 2$ et $D = \\ln 7$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l05_logarithme_neperien_p02',
      order: 2,
      title: 'Nombre e, équations et inéquations logarithmiques',
      summary:
        'Utiliser l’unicité de e (ln e = 1) et la stricte croissance de ln pour résoudre des équations et inéquations après détermination du domaine de validité.',
      conceptExplanation:
        'Toute équation ou inéquation comportant des logarithmes commence obligatoirement par la recherche du domaine de validité (chaque argument de ln doit être strictement positif). Grâce à la bijection ln : ]0 ; +∞[ → ℝ, on résout ln u = ln v ⇔ u = v et ln u = m ⇔ u = e^m.',
      keyRule: 'Toujours déterminer le domaine de validité AVANT d’appliquer ln(a) + ln(b) = ln(ab) ou d’enlever ln.',
      formulas: [
        { name: 'Nombre e', formula: '\\ln(e) = 1 \\quad ; \\quad \\ln(e^r) = r \\quad (e \\approx 2{,}718)' },
        { name: 'Équivalence', formula: '\\ln u = \\ln v \\iff (u > 0,\\; v > 0 \\text{ et } u = v)' },
      ],
      workedExample: {
        title: 'Résolution avec contrainte de domaine',
        statement: 'Résoudre dans $\\mathbb{R}$ l’équation $\\ln(x^2 - 4) = \\ln(3x)$.',
        methodSteps: [
          'Domaine de validité : $x^2 - 4 > 0$ et $3x > 0$, soit $x \\in ]2 ; +\\infty[$.',
          'Sur $]2 ; +\\infty[$, l’équation équivaut à $x^2 - 3x - 4 = 0$, de racines $4$ et $-1$.',
          'Écarter $-1 \\notin ]2 ; +\\infty[$ et conserver $4$.',
        ],
        conclusion: 'L’ensemble des solutions est $S = \\{4\\}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l05_logarithme_neperien_p03',
      order: 3,
      title: 'Étude complète de la fonction ln et limites de référence',
      summary:
        'Connaître les limites de ln en 0+ et +∞, les croissances comparées (ln x)/x et x ln x, les taux d’accroissement en 0 et 1, la courbe et la concavité ln x ≤ x − 1.',
      conceptExplanation:
        'La courbe de ln admet l’axe des ordonnées comme asymptote verticale en 0+, croît lentement vers +∞ (branche parabolique horizontale car ln(x)/x → 0) et reste sous sa tangente y = x − 1 en A(1 ; 0). Les limites remarquables permettent de lever les formes indéterminées.',
      keyRule: 'En +∞ comme en 0+, toute puissance x^n l’emporte sur ln x.',
      formulas: [
        { name: 'Croissances comparées', formula: '\\lim_{x\\to+\\infty}\\frac{\\ln x}{x^n} = 0 \\quad ; \\quad \\lim_{x\\to 0^+} x^n\\ln x = 0' },
        { name: 'Taux d’accroissement', formula: '\\lim_{h\\to 0}\\frac{\\ln(1+h)}{h} = 1 \\quad ; \\quad \\lim_{x\\to 1}\\frac{\\ln x}{x-1} = 1' },
      ],
      workedExample: {
        title: 'Preuve de lim (ln x)/x = 0 en +∞',
        statement: 'Montrer que pour tout $x \\geqslant 1$, $0 \\leqslant \\frac{\\ln x}{x} < \\frac{2}{\\sqrt{x}}$ puis conclure.',
        methodSteps: [
          'Étudier $f(x) = \\ln x - 2\\sqrt{x}$ sur $[1 ; +\\infty[$ : $f’(x) = \\frac{1 - \\sqrt{x}}{x} \\leqslant 0$.',
          'Comme $f(1) = -2 < 0$, on a $\\ln x < 2\\sqrt{x}$ pour tout $x \\geqslant 1$.',
          'Diviser par $x > 0$ : $0 \\leqslant \\frac{\\ln x}{x} < \\frac{2}{\\sqrt{x}} \\xrightarrow[+\\infty]{} 0$.',
        ],
        conclusion: 'Par encadrement, $\\lim_{x\\to+\\infty} \\frac{\\ln x}{x} = 0$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l05_logarithme_neperien_p04',
      order: 4,
      title: 'Dérivées de ln(u), ln|u| et primitives de u′/u',
      summary:
        'Dériver ln(u) et ln|u| via u′/u et trouver les primitives de u′/u sur un intervalle en adaptant le signe de u (ln u si u > 0, ln(−u) si u < 0).',
      conceptExplanation:
        'La formule (ln|u|)′ = u′/u unifie dérivation et intégration des expressions logarithmiques. Lorsqu’on prend une primitive de u′/u sur un intervalle I où u ≠ 0, il faut absolument vérifier le signe de u sur I pour écrire ln(u) si u > 0 ou ln(−u) si u < 0.',
      keyRule: 'Sur I où u ≠ 0 : primitive de u′/u = ln|u| + c (soit ln(−u) + c quand u < 0).',
      formulas: [
        { name: 'Dérivée logarithmique', formula: '(\\ln|u|)’ = \\frac{u’}{u}' },
        { name: 'Primitive associée', formula: '\\int \\frac{u’}{u}\\,dx = \\ln|u| + c' },
      ],
      workedExample: {
        title: 'Primitive de 1/(1 − 3x) sur ]−∞ ; 1/3[',
        statement: 'Déterminer les primitives de $g(x) = \\frac{1}{1 - 3x}$ sur $I = \\left]-\\infty ; \\frac{1}{3}\\right[$.',
        methodSteps: [
          'Sur $I$, $u(x) = 1 - 3x > 0$ et $u’(x) = -3$.',
          'Réécrire $g(x) = -\\frac{1}{3} \\cdot \\frac{-3}{1 - 3x} = -\\frac{1}{3}\\frac{u’(x)}{u(x)}$.',
        ],
        conclusion: 'Les primitives sur $I$ sont $G(x) = -\\frac{1}{3}\\ln(1 - 3x) + c$ ($c \\in \\mathbb{R}$).',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l05_logarithme_neperien_p05',
      order: 5,
      title: 'Logarithme de base a et logarithme décimal log',
      summary:
        'Définir log_a(x) = (ln x)/(ln a) pour a > 0 et a ≠ 1, maîtriser ses variations selon a > 1 ou 0 < a < 1, et appliquer le logarithme décimal log(x) = log₁₀(x).',
      conceptExplanation:
        'Tous les logarithmes de base a sont proportionnels à ln via le facteur 1/(ln a). Ils conservent les mêmes propriétés algébriques que ln, mais sont décroissants lorsque 0 < a < 1. Le logarithme décimal log = log₁₀ mesure directement les puissances de 10.',
      keyRule: 'log_a(x) = (ln x)/(ln a), croissante si a > 1 et décroissante si 0 < a < 1.',
      formulas: [
        { name: 'Définition base a', formula: '\\log_a(x) = \\frac{\\ln x}{\\ln a} \\quad (a > 0,\\; a \\ne 1)' },
        { name: 'Logarithme décimal', formula: '\\log(x) = \\frac{\\ln x}{\\ln 10} \\quad ; \\quad \\log(10^n) = n' },
      ],
      workedExample: {
        title: 'Résolution d’une équation en base 2 et base 4',
        statement: 'Résoudre sur $]0 ; +\\infty[$ l’équation $\\log_2(x) + \\log_4(x) = 3$.',
        methodSteps: [
          'Convertir $\\log_4(x) = \\frac{\\ln x}{\\ln(2^2)} = \\frac{\\ln x}{2\\ln 2} = \\frac{1}{2}\\log_2(x)$.',
          'L’équation devient $\\frac{3}{2}\\log_2(x) = 3 \\iff \\log_2(x) = 2 \\iff x = 2^2 = 4$.',
        ],
        conclusion: 'L’unique solution est $x = 4$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l05_logarithme_neperien_p06',
      order: 6,
      title: 'Modélisation, situation complexe et études approfondies',
      summary:
        'Résoudre des problèmes économiques modélisés par ln et mener des études complètes de fonctions avec asymptotes, tangentes et fonction auxiliaire.',
      conceptExplanation:
        'Les problèmes de synthèse combinent dérivation de produits ou quotients contenant ln x, recherche d’extrema dans des contextes concrets et utilisation d’une fonction auxiliaire pour déterminer le signe d’une dérivée non factorisable directement.',
      keyRule: 'Quand le signe de g′(x) contient à la fois x et ln x, utiliser le signe de la fonction auxiliaire déjà étudiée.',
      formulas: [
        { name: 'Recette optimale', formula: 'r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right) \\implies r’(x) = 2 - \\ln\\left(\\frac{x}{2}\\right)' },
      ],
      workedExample: {
        title: 'Maximum des recettes d’une entreprise',
        statement: 'Pour $r(x) = 3x - x\\ln\\left(\\frac{x}{2}\\right)$ ($x \\geqslant 1$), déterminer à partir de quel mois les recettes décroissent.',
        methodSteps: [
          'Calculer $r’(x) = 3 - \\left(\\ln\\left(\\frac{x}{2}\\right) + 1\\right) = 2 - \\ln\\left(\\frac{x}{2}\\right)$.',
          'Résoudre $r’(x) < 0 \\iff \\ln\\left(\\frac{x}{2}\\right) > 2 \\iff x > 2e^2 \\approx 14{,}78$.',
        ],
        conclusion: 'Les recettes baissent à partir du $15^\\text{e}$ mois.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
  ],
};

