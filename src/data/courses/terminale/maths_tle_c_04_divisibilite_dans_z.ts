import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Modéliser les rendez-vous périodiques de deux corps célestes',
    paragraphText:
      'Un club d’astronomie observe deux corps célestes : le corps A a une période de $105$ jours et apparaît à la date $J_0$, tandis que le corps B a une période de $81$ jours et apparaît à la date $J_0 + 6$. Les apparitions futures auront lieu aux dates $J_0 + 105k$ pour A et $J_0 + 6 + 81q$ pour B ($k, q \\in \\mathbb{N}$). Pour savoir s’ils apparaîtront ensemble, on est conduit à résoudre $105k - 81q = 6$ dans $\\mathbb{Z}$, ce qui nécessite l’étude de la divisibilité dans $\\mathbb{Z}$ !',
    formula: {
      name: 'Équation diophantienne de conjonction',
      formula: '105k = 81q + 6 \\iff 35k - 27q = 2',
    },
    konanTip: 'En divisant $105k - 81q = 6$ par $3$, on réduit les coefficients tout en conservant exactement les mêmes solutions entières.',
    exercise: {
      id: 'tc_m_num_l04_p01_q01',
      type: 'mcq',
      prompt: 'À propos de l’équation $105k - 81q = 7$, peut-elle admettre des solutions $(k, q) \\in \\mathbb{Z}^2$ ?',
      options: [
        'Oui, car $105$ et $81$ sont impairs',
        'Non, car $3$ divise $105k - 81q$ mais $3$ ne divise pas $7$',
        'Oui, pour $k = 1$ et $q = 1$',
        'Oui, une infinité',
      ],
      correctAnswerIndex: 1,
      explanation: '$105k - 81q = 3(35k - 27q)$ est toujours un multiple de $3$. Comme $7$ n’est pas divisible par $3$, l’équation $105k - 81q = 7$ n’a aucune solution entière.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Multiple et diviseur dans $\\mathbb{Z}$',
    paragraphText:
      'Soient $a$ et $b$ deux entiers relatifs avec $b \\ne 0$. On dit que $b$ divise $a$ (ou que $a$ est un multiple de $b$), et on note $b \\mid a$, s’il existe un entier relatif $k \\in \\mathbb{Z}$ tel que $a = k b$. On note $D(a)$ l’ensemble des diviseurs de $a$ dans $\\mathbb{Z}$, et $b\\mathbb{Z} = \\{kb,\\; k \\in \\mathbb{Z}\\}$ l’ensemble des multiples de $b$.',
    formula: {
      name: 'Définition formelle',
      formula: 'b \\mid a \\iff \\exists k \\in \\mathbb{Z},\\; a = kb \\qquad (b \\in \\mathbb{Z}^*)',
    },
    exercise: {
      id: 'tc_m_num_l04_p01_q02',
      type: 'mcq',
      prompt: 'Quel est l’ensemble $D(6)$ des diviseurs de $6$ dans $\\mathbb{Z}$ ?',
      options: [
        '$\\{1, 2, 3, 6\\}$',
        '$\\{-6, -3, -2, -1, 1, 2, 3, 6\\}$',
        '$\\{0, 1, 2, 3, 6\\}$',
        '$\\{-6, -3, -2, -1, 0, 1, 2, 3, 6\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Dans $\\mathbb{Z}$, les diviseurs incluent les entiers positifs ET leurs opposés négatifs, mais jamais $0$ (qui ne divise aucun entier non nul).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'piege',
    stepBadge: 'Cas particuliers : 0 et ±1',
    stepTheme: 'orange',
    stepTitle: 'Le rôle spécial de $0$, $1$ et $-1$',
    paragraphText:
      '1) $0$ est un multiple de tout entier relatif $b$ car $0 = 0 \\times b$, mais $0$ ne divise aucun entier non nul ($0 \\times k = 0 \\ne a$). 2) $1$ et $-1$ divisent tous les entiers relatifs, et ce sont les seuls entiers qui divisent $1$ ($D(1) = \\{-1, 1\\}$). 3) Pour tout $a \\ne 0$, tout diviseur $d$ de $a$ vérifie $|d| \\leqslant |a|$, donc $D(a)$ est fini et symétrique par rapport à $0$.',
    exercise: {
      id: 'tc_m_num_l04_p01_q03',
      type: 'mcq',
      prompt: 'Laquelle des affirmations suivantes est VRAIE dans $\\mathbb{Z}$ ?',
      options: [
        '$0$ divise $5$',
        '$5$ divise $0$',
        '$D(0)$ est un ensemble fini',
        '$-2$ ne divise pas $6$',
      ],
      correctAnswerIndex: 1,
      explanation: '$0 = 0 \\times 5$, donc $5$ divise $0$. En revanche $D(0) = \\mathbb{Z}^*$ est infini.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Propriétés fondamentales',
    stepTheme: 'violet',
    stepTitle: 'Réflexivité, antisymétrie au signe près, transitivité et produit',
    paragraphText:
      'Soient $a, b, c, d \\in \\mathbb{Z}$. 1) Pour tout $a \\ne 0$, $a \\mid a$. 2) Si $a \\mid b$ et $b \\mid a$, alors $a = b$ ou $a = -b$ ($|a| = |b|$). 3) Transitivité : si $a \\mid b$ et $b \\mid c$, alors $a \\mid c$. 4) Si $a \\mid b$ et $c \\mid d$, alors $ac \\mid bd$ ; en particulier si $a \\mid b$, alors $a^n \\mid b^n$ et $ak \\mid bk$.',
    formula: {
      name: 'Double divisibilité',
      formula: '(a \\mid b \\text{ et } b \\mid a) \\iff |a| = |b| \\iff a = \\pm b',
    },
    exercise: {
      id: 'tc_m_num_l04_p01_q04',
      type: 'mcq',
      prompt: 'Dans $\\mathbb{Z}$, si deux entiers non nuls $a$ et $b$ vérifient simultanément $a \\mid b$ et $b \\mid a$, que peut-on conclure ?',
      options: [
        'Forcément $a = b$',
        '$a = b$ ou $a = -b$',
        '$a = 1$ ou $b = 1$',
        '$a + b = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Contrairement à $\\mathbb{N}$ où $a = b$, dans $\\mathbb{Z}$ on a $a = \\pm b$ (par exemple $-4 \\mid 4$ et $4 \\mid -4$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Propriété clé (Combinaison linéaire)',
    stepTheme: 'violet',
    stepTitle: 'Tout diviseur commun divise toute combinaison linéaire',
    paragraphText:
      'C’est l’outil numéro 1 en arithmétique : si $d$ divise $a$ et $d$ divise $b$, alors pour TOUS entiers relatifs $u, v \\in \\mathbb{Z}$, $d$ divise $au + bv$. En particulier, $d \\mid (a + b)$, $d \\mid (a - b)$, et plus généralement $d \\mid (ka + mb)$.',
    formula: {
      name: 'Théorème de combinaison linéaire',
      formula: '(d \\mid a \\text{ et } d \\mid b) \\implies \\forall (u, v) \\in \\mathbb{Z}^2,\\; d \\mid (au + bv)',
    },
    exercise: {
      id: 'tc_m_num_l04_p01_q05',
      type: 'mcq',
      prompt: 'Si un entier $d$ divise à la fois $3n + 4$ et $2n + 1$, quel entier indépendant de $n$ divise-t-il forcément ?',
      options: ['$1$', '$3$', '$5$', '$7$'],
      correctAnswerIndex: 2,
      explanation: 'On élimine $n$ par combinaison linéaire : $2(3n + 4) - 3(2n + 1) = 6n + 8 - 6n - 3 = 5$. Donc $d \\mid 5$ !',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Méthode d’élimination de n',
    stepTheme: 'green',
    stepTitle: 'Éliminer la variable $n$ entre deux expressions entières',
    paragraphText:
      'Lorsqu’on cherche les diviseurs communs à $A(n) = an + b$ et $B(n) = cn + d$, on forme la combinaison $c A(n) - a B(n) = bc - ad$, qui ne dépend plus de $n$ ! Ainsi tout diviseur commun $d$ divise la constante $|bc - ad|$, ce qui réduit immédiatement $d$ à une liste finie de valeurs possibles.',
    exercise: {
      id: 'tc_m_num_l04_p01_q06',
      type: 'mcq',
      prompt: 'Soit $d$ un diviseur commun positif à $5n + 2$ et $3n + 1$. Que vaut nécessairement $d$ ?',
      options: ['$d = 1$ uniquement', '$d = 2$', '$d \\in \\{1, 3\\}$', '$d = 5$'],
      correctAnswerIndex: 0,
      explanation: '$3(5n + 2) - 5(3n + 1) = 15n + 6 - 15n - 5 = 1$. Donc $d \\mid 1$, et comme $d > 0$, on a forcément $d = 1$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Synthèse',
    stepTheme: 'slate',
    stepTitle: 'Multiples dans un intervalle',
    paragraphText:
      'Pour compter ou trouver les multiples de $b > 0$ dans un intervalle $[\\alpha ; \\beta]$, on résout $\\alpha \\leqslant kb \\leqslant \\beta \\iff \\frac{\\alpha}{b} \\leqslant k \\leqslant \\frac{\\beta}{b}$ avec $k \\in \\mathbb{Z}$. Par exemple, entre $-10$ et $25$, les multiples de $7$ vérifient $-1{,}42 \\leqslant k \\leqslant 3{,}57$, donc $k \\in \\{-1, 0, 1, 2, 3\\}$, soit $\\{-7, 0, 7, 14, 21\\}$.',
    exercise: {
      id: 'tc_m_num_l04_p01_q07',
      type: 'mcq',
      prompt: 'Combien y a-t-il de multiples de $6$ dans l’intervalle $[-15 ; 20]$ ?',
      options: ['$4$', '$5$', '$6$', '$7$'],
      correctAnswerIndex: 2,
      explanation: '$-15 \\leqslant 6k \\leqslant 20 \\iff -2{,}5 \\leqslant k \\leqslant 3{,}33$, donc $k \\in \\{-2, -1, 0, 1, 2, 3\\}$, soit $6$ multiples : $-12, -6, 0, 6, 12, 18$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Méthode 1',
    stepTheme: 'green',
    stepTitle: 'Résoudre « $an + b$ divise $cn + d$ » dans $\\mathbb{Z}$',
    paragraphText:
      'Pour trouver les entiers $n \\in \\mathbb{Z}$ tels que $(n - 1) \\mid (n + 11)$, on utilise le fait que $(n - 1) \\mid (n - 1)$, donc $(n - 1)$ divise la différence $(n + 11) - (n - 1) = 12$ ! Réciproquement, si $(n - 1) \\mid 12$, alors $n + 11 = (n - 1) + 12$ est bien un multiple de $n - 1$. Donc $(n - 1) \\mid (n + 11) \\iff (n - 1) \\in D(12)$.',
    formula: {
      name: 'Transformation par combinaison équivalente',
      formula: '(n - 1) \\mid (n + 11) \\iff (n - 1) \\mid \\bigl[(n + 11) - (n - 1)\\bigr] = 12',
    },
    exercise: {
      id: 'tc_m_num_l04_p02_q01',
      type: 'mcq',
      prompt: 'Combien d’entiers RELATIFS $n \\in \\mathbb{Z}$ vérifient $(n - 1) \\mid (n + 11)$ ?',
      options: ['$6$', '$10$', '$12$', '$14$'],
      correctAnswerIndex: 2,
      explanation: '$D(12) = \\{\\pm 1, \\pm 2, \\pm 3, \\pm 4, \\pm 6, \\pm 12\\}$ contient $12$ diviseurs dans $\\mathbb{Z}$, ce qui donne $12$ valeurs pour $n = 1 + d$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'piege',
    stepBadge: 'Vérifier la réciproque !',
    stepTheme: 'orange',
    stepTitle: 'Attention quand on multiplie le numérateur par un entier $> 1$',
    paragraphText:
      'Si l’on veut que $(2n + 3) \\mid (n + 7)$, on écrit : $(2n + 3) \\mid (n + 7) \\implies (2n + 3) \\mid 2(n + 7) = (2n + 3) + 11 \\implies (2n + 3) \\mid 11$. Mais ATTENTION : ici on a multiplié par $2$, donc la réciproque n’est pas automatique ! Il faut vérifier pour chaque solution trouvée ($2n + 3 \\in \\{\\pm 1, \\pm 11\\}$) si $2n+3$ divise bien $n+7$ (et si $n \\in \\mathbb{Z}$). Ici pour $2n + 3 = 1$, $n = -1$, et $1 \\mid 6$ ; pour $2n+3 = -1$, $n=-2$, $-1 \\mid 5$ ; pour $2n+3=11$, $n=4$, $11 \\mid 11$ ; pour $2n+3=-11$, $n=-7$, $-11 \\mid 0$ : les 4 conviennent car $\\text{pgcd}(2, 2n+3) = 1$ (impair).',
    keyRule: 'Lorsqu’on raisonne par implication ($\\implies$), TOUJOURS vérifier la réciproque dans l’énoncé initial !',
    exercise: {
      id: 'tc_m_num_l04_p02_q02',
      type: 'mcq',
      prompt: 'Pour quel ensemble de valeurs $n \\in \\mathbb{N}$ a-t-on $(n + 2) \\mid (3n + 10)$ ?',
      options: [
        '$\\{0, 2\\}$',
        '$\\{0, 1, 2\\}$',
        '$\\{1, 2\\}$',
        '$\\{0, 2, 4\\}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$3n + 10 = 3(n + 2) + 4$, donc $(n + 2) \\mid 4$ avec $n \\geqslant 0 \\implies n + 2 \\geqslant 2$. Les diviseurs positifs de $4$ supérieurs ou égaux à $2$ sont $2$ ($n = 0$) et $4$ ($n = 2$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exercice type PDF',
    stepTheme: 'slate',
    stepTitle: 'Montrer qu’une fraction est irréductible pour tout $n \\in \\mathbb{Z}$',
    paragraphText:
      'Soit la fraction $F(n) = \\frac{15n^2 + 8n + 6}{30n^2 + 21n + 13}$ (dénominateur jamais nul car $\\Delta < 0$). Posons $A = 30n^2 + 21n + 13$ et $B = 15n^2 + 8n + 6$. Si $d > 0$ divise $A$ et $B$, alors $d$ divise $A - 2B = (30n^2 + 21n + 13) - (30n^2 + 16n + 12) = 5n + 1$. Or en effectuant la division de $B$ par $5n + 1$, on a $B = (3n + 1)(5n + 1) + 5$. Comme $d \\mid B$ et $d \\mid (5n + 1)$, on en déduit que $d \\mid 5$, donc $d \\in \\{1, 5\\}$. Mais $5n + 1$ n’est jamais divisible par $5$ (son reste modulo $5$ vaut $1$), donc $d \\ne 5$, d’où $d = 1$ : la fraction est irréductible pour tout $n \\in \\mathbb{Z}$ !',
    formula: {
      name: 'Réduction algébrique de A et B',
      formula: 'A - 2B = 5n + 1 \\quad \\text{et} \\quad B = (3n + 1)(5n + 1) + 5',
    },
    exercise: {
      id: 'tc_m_num_l04_p02_q03',
      type: 'mcq',
      prompt: 'Dans l’étude de $\\frac{15n^2 + 8n + 6}{30n^2 + 21n + 13}$, pourquoi le diviseur commun $d \\in \\{1, 5\\}$ ne peut-il pas être égal à $5$ ?',
      options: [
        'Parce que $15n^2$ est toujours impair',
        'Parce que $d$ divise $5n + 1$, or $5$ ne divise jamais $5n + 1$ ($n \\in \\mathbb{Z}$)',
        'Parce que $n$ doit être pair',
        'Parce que $5$ ne divise pas $13$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Si $d = 5$, alors $5 \\mid (5n + 1)$, ce qui entraîne $5 \\mid 1$, impossible ! Donc l’unique diviseur commun positif est $d = 1$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Critère d’irréductibilité',
    stepTheme: 'green',
    stepTitle: 'Deux méthodes pour prouver qu’une fraction $\\frac{A}{B}$ est irréductible',
    paragraphText:
      'Méthode A (des diviseurs communs) : supposer $d > 0$ divise $A$ et $B$, puis par combinaisons successives (algorithme d’Euclide algébrique), prouver que $d \\mid 1$ (ou que $d \\mid p$ sans diviser $A$ ou $B$), d’où $d = 1$. Méthode B (Bézout) : trouver deux entiers ou polynômes à coefficients entiers $u, v$ tels que $uA + vB = 1$.',
    exercise: {
      id: 'tc_m_num_l04_p02_q04',
      type: 'mcq',
      prompt: 'Pour tout entier $n \\in \\mathbb{Z}$, la fraction $\\frac{2n + 3}{n + 1}$ est :',
      options: [
        'Réductible par $2$ lorsque $n$ est impair',
        'Toujours irréductible car $2(n + 1) - (2n + 3) = -1$',
        'Réductible pour $n = 3$',
        'Toujours égale à $2$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Tout diviseur commun à $2n + 3$ et $n + 1$ divise $2(n+1) - (2n+3) = -1$, donc ne peut valoir que $1$ (en valeur positive).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Divisibilité d’expressions polynomiales',
    stepTheme: 'slate',
    stepTitle: 'Factoriser pour prouver une divisibilité (ex. $n^3 - n$)',
    paragraphText:
      'Pour tout $n \\in \\mathbb{Z}$, $n^3 - n = n(n - 1)(n + 1)$ est le produit de $3$ entiers consécutifs. Parmi $2$ entiers consécutifs, l’un est pair (divisible par $2$) ; parmi $3$ entiers consécutifs, l’un est divisible par $3$. Comme $2$ et $3$ sont premiers entre eux, $6 \\mid (n^3 - n)$ pour tout $n \\in \\mathbb{Z}$ !',
    exercise: {
      id: 'tc_m_num_l04_p02_q05',
      type: 'mcq',
      prompt: 'Par quel entier est toujours divisible le produit de quatre entiers consécutifs $n(n+1)(n+2)(n+3)$ ?',
      options: ['$12$ au maximum', '$24$', '$48$', '$10$'],
      correctAnswerIndex: 1,
      explanation: 'Parmi $4$ entiers consécutifs, l’un est multiple de $4$, un autre est pair non multiple de $4$ (donc divisible par $8$), et au moins un est multiple de $3$. Donc le produit est toujours divisible par $8 \\times 3 = 24$ ($4!$).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Application quadratique',
    stepTheme: 'slate',
    stepTitle: 'Utiliser l’identité $a^n - b^n = (a - b)(a^{n-1} + \\dots + b^{n-1})$',
    paragraphText:
      'Pour tous entiers $a, b \\in \\mathbb{Z}$ et tout $n \\in \\mathbb{N}^*$, $a - b$ divise $a^n - b^n$. En particulier, en posant $b = 1$, $a - 1$ divise toujours $a^n - 1$. Par exemple, $7^n - 1$ est toujours divisible par $7 - 1 = 6$, et $11^n - 4^n$ est divisible par $11 - 4 = 7$.',
    formula: {
      name: 'Factorisation de a^n − b^n',
      formula: 'a^n - b^n = (a - b)\\sum_{k=0}^{n-1} a^{n-1-k} b^k \\implies (a - b) \\mid (a^n - b^n)',
    },
    exercise: {
      id: 'tc_m_num_l04_p02_q06',
      type: 'mcq',
      prompt: 'Par quel nombre est nécessairement divisible $2^{3n} - 1$ pour tout entier $n \\in \\mathbb{N}$ ?',
      options: ['$3$', '$5$', '$7$', '$9$'],
      correctAnswerIndex: 2,
      explanation: '$2^{3n} - 1 = (2^3)^n - 1 = 8^n - 1$, qui est divisible par $8 - 1 = 7$ pour tout $n \\in \\mathbb{N}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Attention au dénominateur',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais écrire $\\frac{A}{B}$ entier sans vérifier $B \\ne 0$',
    paragraphText:
      'Quand un exercice demande pour quels entiers $n$ la fraction $\\frac{2n + 5}{n - 3}$ est un entier relatif, il faut d’abord exclure la valeur qui annule le dénominateur ($n \\ne 3$), puis résoudre $(n - 3) \\mid (2n + 5) \\iff (n - 3) \\mid 11$.',
    exercise: {
      id: 'tc_m_num_l04_p02_q07',
      type: 'mcq',
      prompt: 'Combien de valeurs de $n \\in \\mathbb{Z}$ rendent $\\frac{2n + 5}{n - 3}$ entier ?',
      options: ['$2$', '$4$', '$5$', '$11$'],
      correctAnswerIndex: 1,
      explanation: '$2n + 5 = 2(n - 3) + 11$, donc $\\frac{2n+5}{n-3} = 2 + \\frac{11}{n-3} \\in \\mathbb{Z} \\iff (n - 3) \\in D(11) = \\{-11, -1, 1, 11\\}$, soit $4$ valeurs de $n$ ($-8, 2, 4, 14$).',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Théorème fondamental',
    stepTheme: 'blue',
    stepTitle: 'Division euclidienne dans $\\mathbb{N}$ puis dans $\\mathbb{Z}$',
    paragraphText:
      'Soient $a \\in \\mathbb{Z}$ (dividende) et $b \\in \\mathbb{Z}^*$ (diviseur). Il existe un UNIQUE couple d’entiers $(q, r) \\in \\mathbb{Z} \\times \\mathbb{N}$ tel que : $a = bq + r$ et $0 \\leqslant r < |b|$. Le point capital de Terminale C : le reste $r$ est TOUJOURS positif ou nul ($0 \\leqslant r < |b|$), même lorsque $a < 0$ ou $b < 0$ !',
    formula: {
      name: 'Division euclidienne dans Z',
      formula: '\\exists !\\, (q, r) \\in \\mathbb{Z} \\times \\mathbb{N},\\quad a = bq + r \\quad \\text{et} \\quad 0 \\leqslant r < |b|',
    },
    exercise: {
      id: 'tc_m_num_l04_p03_q01',
      type: 'mcq',
      prompt: 'Dans la division euclidienne de $a = -17$ par $b = 3$, quels sont le quotient $q$ et le reste $r$ ?',
      options: [
        '$q = -5$ et $r = -2$',
        '$q = -6$ et $r = 1$',
        '$q = -5$ et $r = 2$',
        '$q = 6$ et $r = 1$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le reste doit vérifier $0 \\leqslant r < 3$ ! On a $-17 = 3 \\times (-6) + 1$ ($-18 + 1 = -17$), donc $q = -6$ et $r = 1$ (et jamais $r = -2$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Les 4 combinaisons de signes',
    stepTheme: 'slate',
    stepTitle: 'Division euclidienne de $\\pm 361$ par $\\pm 23$',
    paragraphText:
      'Partons de $361 = 23 \\times 15 + 16$ ($q = 15$, $r = 16$). 1) $361$ par $-23$ : $361 = (-23) \\times (-15) + 16$, donc $q = -15, r = 16$. 2) $-361$ par $23$ : $-361 = 23 \\times (-15) - 16 = 23 \\times (-16) + 7$ (car $23 - 16 = 7$), donc $q = -16, r = 7$ ! 3) $-361$ par $-23$ : $-361 = (-23) \\times 16 + 7$, donc $q = 16, r = 7$ !',
    formula: {
      name: 'Passage du signe − sur le dividende',
      formula: 'a = bq + r \\text{ (avec } 0 < r < b\\text{)} \\implies -a = b(-q - 1) + (b - r)',
    },
    exercise: {
      id: 'tc_m_num_l04_p03_q02',
      type: 'mcq',
      prompt: 'Quel est le reste de la division euclidienne de $-361$ par $23$ ?',
      options: ['$-16$', '$16$', '$7$', '$23$'],
      correctAnswerIndex: 2,
      explanation: '$23 \\times (-16) = -368$, et $-368 + 7 = -361$ avec $0 \\leqslant 7 < 23$. Le reste est donc $7$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'piege',
    stepBadge: 'Piège de calculatrice',
    stepTheme: 'orange',
    stepTitle: 'Attention à la touche division ou « % » sur les négatifs',
    paragraphText:
      'Si tu calcules $-361 / 23 \\approx -15{,}695$ sur une calculatrice et prends la troncature $-15$, tu obtiendras un reste négatif $-16$. En arithmétique, pour $a < 0$ et $b > 0$, le quotient $q$ est toujours la partie entière $E(a/b) = -16$ (l’entier immédiatement INFÉRIEUR à $-15{,}695$) afin que $r = a - bq$ soit positif ou nul.',
    exercise: {
      id: 'tc_m_num_l04_p03_q03',
      type: 'mcq',
      prompt: 'Sachant que $100 = 7 \\times 14 + 2$, quels sont le quotient et le reste de la division euclidienne de $-100$ par $7$ ?',
      options: [
        '$q = -14$ et $r = -2$',
        '$q = -15$ et $r = 5$',
        '$q = -14$ et $r = 5$',
        '$q = -15$ et $r = 2$',
      ],
      correctAnswerIndex: 1,
      explanation: '$-100 = 7 \\times (-14) - 2 = 7 \\times (-15) + 5$, donc $q = -15$ et $r = 5$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Opérations sur les restes',
    stepTheme: 'slate',
    stepTitle: 'Calculer les restes de $m + n$, $mn$ et $m^2$ modulo $17$',
    paragraphText:
      'Les restes respectifs de $m$ et $n$ dans la division par $17$ sont $8$ et $12$ : $m = 17q + 8$ et $n = 17q’ + 12$. Alors : 1) $m + n = 17(q+q’) + 20 = 17(q+q’+1) + 3$, donc le reste de $m + n$ est $3$. 2) $mn = 17K + 8 \\times 12 = 17K + 96$, et $96 = 17 \\times 5 + 11$, donc le reste de $mn$ est $11$. 3) $m^2 = 17L + 64$, et $64 = 17 \\times 3 + 13$, donc le reste de $m^2$ est $13$.',
    exercise: {
      id: 'tc_m_num_l04_p03_q04',
      type: 'mcq',
      prompt: 'Les restes de $a$ et $b$ par $11$ sont $7$ et $9$. Quel est le reste de la division euclidienne de $a \\times b$ par $11$ ?',
      options: ['$63$', '$8$', '$5$', '$7$'],
      correctAnswerIndex: 1,
      explanation: '$7 \\times 9 = 63 = 11 \\times 5 + 8$, donc le reste de $ab$ par $11$ est $8$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Raisonnement par disjonction de cas',
    stepTheme: 'green',
    stepTitle: 'Utiliser les restes possibles modulo $b$ ($0, 1, \\dots, b - 1$)',
    paragraphText:
      'Tout entier $n \\in \\mathbb{Z}$ s’écrit de façon unique selon son reste dans la division par $b > 0$ : par exemple modulo $3$, $n = 3k$, $3k+1$ ou $3k+2$. Cette décomposition en $b$ classes permet de prouver rapidement des propriétés universelles, comme le fait que tout carré est congru à $0$ ou $1$ modulo $3$ (et modulo $4$).',
    exercise: {
      id: 'tc_m_num_l04_p03_q05',
      type: 'mcq',
      prompt: 'Quels sont les seuls restes possibles de $n^2$ dans la division euclidienne par $4$ ?',
      options: ['$0$ et $2$', '$0$ et $1$', '$0, 1, 2$', '$1$ et $3$'],
      correctAnswerIndex: 1,
      explanation: 'Si $n = 2k$, $n^2 = 4k^2$ (reste $0$). Si $n = 2k + 1$, $n^2 = 4(k^2 + k) + 1$ (reste $1$). Aucun carré ne laisse un reste de $2$ ou $3$ modulo $4$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Équation avec quotient et reste',
    stepTheme: 'slate',
    stepTitle: 'Retrouver $a$ ou $b$ à partir d’une contrainte sur $q$ et $r$',
    paragraphText:
      'Dans les exercices classiques : « Le quotient et le reste de la division euclidienne de $a$ par $b$ sont liés par une relation ». Toujours écrire les DEUX conditions : $a = bq + r$ ET $0 \\leqslant r < b$. Par exemple, si $a = 12q + r$ avec $r = 2q$ (donc $0 \\leqslant 2q < 12 \\iff 0 \\leqslant q \\leqslant 5$), il n’y a que $6$ valeurs possibles pour $q$ ($0$ à $5$), soit $a \\in \\{0, 14, 28, 42, 56, 70\\}$.',
    exercise: {
      id: 'tc_m_num_l04_p03_q06',
      type: 'mcq',
      prompt: 'Dans la division euclidienne d’un entier naturel $a$ par $5$, le quotient est égal au carré du reste ($q = r^2$). Combien de telles valeurs de $a$ existe-t-il ?',
      options: ['$4$', '$5$', '$6$', 'Une infinité'],
      correctAnswerIndex: 1,
      explanation: 'Le reste dans la division par $5$ vérifie $0 \\leqslant r < 5$, donc $r \\in \\{0, 1, 2, 3, 4\\}$. À chaque reste correspond un unique $q = r^2$ et donc un unique $a = 5r^2 + r$, soit $5$ valeurs ($0, 6, 22, 48, 84$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'propriete',
    stepBadge: 'Lien avec la divisibilité',
    stepTheme: 'violet',
    stepTitle: '$b \\mid a \\iff r = 0$',
    paragraphText:
      'Par unicité du couple $(q, r)$, un entier non nul $b$ divise $a$ si et seulement si le reste $r$ de la division euclidienne de $a$ par $b$ est nul.',
    exercise: {
      id: 'tc_m_num_l04_p03_q07',
      type: 'mcq',
      prompt: 'Si dans la division euclidienne de $a$ par $b > 0$, on écrit $a = bq + r$ avec $r = 35$ et $b = 12$, pourquoi ce couple $(q, 35)$ n’est-il pas le couple euclidien ?',
      options: [
        'Car $35$ est impair',
        'Car le reste doit être strictement inférieur au diviseur ($35 \\geqslant 12$)',
        'Car $q$ doit être plus grand que $r$',
        'Car $12$ ne divise pas $35$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Il faut $0 \\leqslant r < |b| = 12$. En divisant $35 = 12 \\times 2 + 11$, le vrai quotient euclidien est $q + 2$ et le reste est $11$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Congruence modulo $n$ ($n \\in \\mathbb{N}^*$, souvent $n \\geqslant 2$)',
    paragraphText:
      'Soient $a, b \\in \\mathbb{Z}$ et $n \\in \\mathbb{N}^*$. On dit que $a$ est congru à $b$ modulo $n$, et on note $a \\equiv b\\;[n]$ (ou $a \\equiv b \\pmod{n}$), si $n$ divise la différence $a - b$, autrement dit s’il existe $k \\in \\mathbb{Z}$ tel que $a = b + kn$.',
    formula: {
      name: 'Définition de la congruence',
      formula: 'a \\equiv b\\;[n] \\iff n \\mid (a - b) \\iff \\exists k \\in \\mathbb{Z},\\; a - b = kn',
    },
    exercise: {
      id: 'tc_m_num_l04_p04_q01',
      type: 'mcq',
      prompt: 'Laquelle de ces congruences est VRAIE ?',
      options: [
        '$27 \\equiv 4\\;[5]$',
        '$27 \\equiv -3\\;[5]$',
        '$19 \\equiv 5\\;[6]$',
        '$-4 \\equiv 4\\;[7]$',
      ],
      correctAnswerIndex: 1,
      explanation: '$27 - (-3) = 30 = 5 \\times 6$ est divisible par $5$, donc $27 \\equiv -3\\;[5]$ (tout comme $27 \\equiv 2\\;[5]$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Lien avec le reste euclidien',
    stepTheme: 'violet',
    stepTitle: 'Même reste dans la division euclidienne par $n$',
    paragraphText:
      'Deux entiers $a$ et $b$ sont congrus modulo $n$ si et seulement s’ils ont le MÊME reste dans la division euclidienne par $n$. En particulier, si $a = nq + r$ avec $0 \\leqslant r < n$, alors $a \\equiv r\\;[n]$ ; et $a \\equiv 0\\;[n] \\iff n \\mid a$.',
    formula: {
      name: 'Caractérisation par le reste',
      formula: 'a \\equiv b\\;[n] \\iff \\text{reste}(a, n) = \\text{reste}(b, n)',
    },
    exercise: {
      id: 'tc_m_num_l04_p04_q02',
      type: 'mcq',
      prompt: 'Sachant que $2020 \\equiv 5\\;[13]$ et $2020 = 13 \\times 155 + 5$, quel est le reste de $2025$ dans la division euclidienne par $13$ ?',
      options: ['$5$', '$10$', '$0$', '$8$'],
      correctAnswerIndex: 1,
      explanation: '$2025 = 2020 + 5 \\equiv 5 + 5 = 10\\;[13]$. Comme $0 \\leqslant 10 < 13$, le reste est $10$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Relation d’équivalence et compatibilité',
    stepTheme: 'violet',
    stepTitle: 'Addition, soustraction, multiplication et puissance modulo $n$',
    paragraphText:
      'La congruence modulo $n$ est réflexive ($a \\equiv a\\,[n]$), symétrique et transitive. Elle est compatible avec les opérations : si $a \\equiv b\\,[n]$ et $c \\equiv d\\,[n]$, alors : $a + c \\equiv b + d\\,[n]$, $a - c \\equiv b - d\\,[n]$, $ac \\equiv bd\\,[n]$, et pour tout $k \\in \\mathbb{N}^*$, $a^k \\equiv b^k\\,[n]$.',
    formula: {
      name: 'Compatibilité algébrique',
      formula: 'a \\equiv b\\;[n] \\text{ et } c \\equiv d\\;[n] \\implies \\begin{cases} a + c \\equiv b + d\\;[n] \\\\ a \\cdot c \\equiv b \\cdot d\\;[n] \\\\ a^k \\equiv b^k\\;[n] \\quad (\\forall k \\in \\mathbb{N}^*) \\end{cases}',
    },
    exercise: {
      id: 'tc_m_num_l04_p04_q03',
      type: 'mcq',
      prompt: 'Si $x \\equiv -2\\;[7]$ et $y \\equiv 3\\;[7]$, à quoi est congru $x^2 + 2y$ modulo $7$ ?',
      options: ['$3$', '$10$', '$6$', '$0$'],
      correctAnswerIndex: 0,
      explanation: '$x^2 + 2y \\equiv (-2)^2 + 2(3) = 4 + 6 = 10 \\equiv 3\\;[7]$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège majeur !',
    stepTheme: 'orange',
    stepTitle: 'On ne divise JAMAIS une congruence sans précaution !',
    paragraphText:
      'Attention : $2 \\times 3 \\equiv 2 \\times 0\\,[6]$ ($6 \\equiv 0\\,[6]$), mais on n’a PAS $3 \\equiv 0\\,[6]$ ! On ne peut simplifier par $c$ dans $ac \\equiv bc\\,[n]$ que si $c$ et $n$ sont premiers entre eux (sinon on doit diviser le module $n$ par $\\text{pgcd}(c, n)$) ! Et encore moins : $a \\equiv b\\,[n]$ n’autorise jamais à mettre $a$ et $b$ en EXPOSANT ($2^a \\not\\equiv 2^b\\,[n]$ en général !).',
    keyRule: 'Ne jamais simplifier une congruence par un facteur non premier avec le module, ni remplacer un exposant par son reste modulo n.',
    exercise: {
      id: 'tc_m_num_l04_p04_q04',
      type: 'mcq',
      prompt: 'Sachant que $2x \\equiv 4\\;[6]$, quelles sont toutes les solutions $x$ modulo $6$ ?',
      options: [
        '$x \\equiv 2\\;[6]$ uniquement',
        '$x \\equiv 2\\;[3]$ (soit $x \\equiv 2\\;[6]$ ou $x \\equiv 5\\;[6]$)',
        'Aucune solution',
        '$x \\equiv 4\\;[6]$',
      ],
      correctAnswerIndex: 1,
      explanation: '$6 \\mid (2x - 4) \\iff 6 \\mid 2(x - 2) \\iff 3 \\mid (x - 2) \\iff x \\equiv 2\\;[3]$. Dans $[0 ; 5]$, $x = 2$ et $x = 5$ conviennent ($2 \\times 5 = 10 \\equiv 4\\,[6]$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Équation du 1er degré',
    stepTheme: 'slate',
    stepTitle: 'Résoudre dans $\\mathbb{Z}$ l’équation $3x \\equiv 5\\;[8]$',
    paragraphText:
      'Même sans encore connaître l’algorithme d’Euclide étendu, comme le module $8$ est petit, on dresse la table des restes de $x$ et $3x$ modulo $8$ pour $x \\in \\{0, 1, 2, 3, 4, 5, 6, 7\\}$ : pour $x = 7$, $3 \\times 7 = 21 = 2 \\times 8 + 5 \\equiv 5\\;[8]$ ! Ou par multiplication par l’inverse de $3$ mod $8$ : comme $3 \\times 3 = 9 \\equiv 1\\;[8]$, on multiplie par $3$ : $9x \\equiv 15\\;[8] \\iff x \\equiv 7\\;[8]$. Les solutions sont $x = 8k + 7$ ($k \\in \\mathbb{Z}$).',
    formula: {
      name: 'Résolution par table ou inverse modulaire',
      formula: '3x \\equiv 5\\;[8] \\iff 9x \\equiv 15\\;[8] \\iff x \\equiv 7\\;[8]',
    },
    exercise: {
      id: 'tc_m_num_l04_p04_q05',
      type: 'mcq',
      prompt: 'Quelle est la solution générale dans $\\mathbb{Z}$ de $4x \\equiv 3\\;[7]$ ?',
      options: [
        '$x = 7k + 2$ ($k \\in \\mathbb{Z}$)',
        '$x = 7k + 6$ ($k \\in \\mathbb{Z}$)',
        '$x = 7k + 3$ ($k \\in \\mathbb{Z}$)',
        'Aucune solution',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $4 \\times 2 = 8 \\equiv 1\\;[7]$, multiplions par $2$ : $x \\equiv 6\\;[7]$ (vérification : $4 \\times 6 = 24 = 21 + 3 \\equiv 3\\,[7]$).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Astuce du négatif proche',
    stepTheme: 'green',
    stepTitle: 'Remplacer un grand reste par un petit nombre négatif',
    paragraphText:
      'Pour calculer rapidement des produits ou puissances modulo $n$, il est souvent plus simple de remplacer $n - 1$ par $-1$, $n - 2$ par $-2$, etc. Exemple : modulo $13$, $12 \\equiv -1$, $11 \\equiv -2$ ; ainsi $12^{2025} \\equiv (-1)^{2025} = -1 \\equiv 12\\;[13]$ en une seconde !',
    exercise: {
      id: 'tc_m_num_l04_p04_q06',
      type: 'mcq',
      prompt: 'Quel est le reste de la division euclidienne de $16^{101}$ par $17$ ?',
      options: ['$1$', '$16$', '$0$', '$15$'],
      correctAnswerIndex: 1,
      explanation: '$16 \\equiv -1\\;[17]$, donc $16^{101} \\equiv (-1)^{101} = -1 \\equiv 16\\;[17]$. Comme $0 \\leqslant 16 < 17$, le reste est $16$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Équation quadratique modulaire',
    stepTheme: 'slate',
    stepTitle: 'Résoudre $x^2 - 3x + 2 \\equiv 0\\;[6]$ par disjonction des restes',
    paragraphText:
      'Un produit nul modulo $6$ ($ab \\equiv 0\\,[6]$) n’implique PAS $a \\equiv 0\\,[6]$ ou $b \\equiv 0\\,[6]$ (car $6$ n’est pas premier : $2 \\times 3 \\equiv 0\\,[6]$ !). On teste donc directement $x \\in \\{0, 1, 2, 3, 4, 5\\}$ dans $x(x - 1)(?)$ : ici $(x - 1)(x - 2) \\equiv 0\\,[6]$ donne $x = 1, 2$ mais aussi $x = 4$ ($3 \\times 2 = 6$) et $x = 5$ ($4 \\times 3 = 12$) ! Soit $x \\equiv 1, 2, 4 \\text{ ou } 5\\,[6]$.',
    exercise: {
      id: 'tc_m_num_l04_p04_q07',
      type: 'mcq',
      prompt: 'Pourquoi $(x - 1)(x - 2) \\equiv 0\\;[6]$ admet-il $x = 4$ comme solution en plus de $1$ et $2$ ?',
      options: [
        'Parce que $4 - 1 = 3$ et $4 - 2 = 2$, et $3 \\times 2 = 6 \\equiv 0\\;[6]$ ($6$ n’est pas premier)',
        'Parce que $4$ divise $6$',
        'C’est une propriété de tous les modules',
        'Parce que $4 \\equiv 1\\;[6]$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le théorème du produit nul ne vaut modulo $n$ que si $n$ est PREMIER. Modulo $6 = 2 \\times 3$, un facteur peut fournir $2$ et l’autre $3$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Méthode des puissances',
    stepTheme: 'green',
    stepTitle: 'Calculer les premières puissances pour trouver une période ou un « $1$ »',
    paragraphText:
      'Pour trouver le reste de $a^n$ dans la division par $m$, on calcule $a^0, a^1, a^2, a^3, \\dots$ modulo $m$ jusqu’à tomber sur $1$ (ou $-1$, qui donne $1$ au carré, ou une valeur déjà rencontrée). Dès que $a^p \\equiv 1\\;[m]$, pour tout $k \\in \\mathbb{N}$ et $r \\in \\{0, \\dots, p-1\\}$, on a $a^{kp + r} = (a^p)^k a^r \\equiv 1^k a^r \\equiv a^r\\;[m]$ : les restes deviennent périodiques de période $p$ !',
    formula: {
      name: 'Réduction de l’exposant modulo la période p',
      formula: 'a^p \\equiv 1\\;[m] \\implies a^{kp + r} \\equiv a^r\\;[m]',
    },
    exercise: {
      id: 'tc_m_num_l04_p05_q01',
      type: 'mcq',
      prompt: 'Calculons $3^n \\bmod 7$ : $3^1 \\equiv 3$, $3^2 \\equiv 2$, $3^3 \\equiv 6 \\equiv -1$, donc $3^6 \\equiv 1\\;[7]$. Quel est le reste de $3^{100}$ modulo $7$ ?',
      options: ['$1$', '$2$', '$4$', '$6$'],
      correctAnswerIndex: 2,
      explanation: 'Division de l’exposant par $6$ : $100 = 6 \\times 16 + 4$. Donc $3^{100} \\equiv 3^4 = 81 \\equiv 4\\;[7]$ (car $81 = 7 \\times 11 + 4$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Exercice type PDF : 2020^n mod 13',
    stepTheme: 'slate',
    stepTitle: 'Étude complète de $5^n$ et $2020^n$ modulo $13$',
    paragraphText:
      'On divise $2020$ par $13$ : $2020 = 13 \\times 155 + 5$, donc $2020 \\equiv 5\\;[13]$ et $2020^n \\equiv 5^n\\;[13]$. Calculons les puissances de $5$ mod $13$ : $5^0 \\equiv 1$, $5^1 \\equiv 5$, $5^2 = 25 \\equiv 12 \\equiv -1$, $5^3 \\equiv -5 \\equiv 8$, $5^4 \\equiv (-1)^2 = 1\\;[13]$. La période est $4$ ! En écrivant $n = 4p + r$ ($r \\in \\{0,1,2,3\\}$), les restes possibles sont cycliquement $1, 5, 12, 8$. En particulier, $5^n \\equiv -1\\;[13] \\iff n = 4p + 2$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Cycle des restes de 5^n modulo 13',
      tableData: {
        headers: ['n ≡ r [4]', '0 (n = 4p)', '1 (n = 4p+1)', '2 (n = 4p+2)', '3 (n = 4p+3)'],
        rows: [['Reste de 5^n par 13', '1', '5', '12 (≡ −1)', '8']],
      },
    },
    exercise: {
      id: 'tc_m_num_l04_p05_q02',
      type: 'mcq',
      prompt: 'À quelle condition sur $n \\in \\mathbb{N}$ l’entier $2020^n + 1$ est-il divisible par $13$ ?',
      options: [
        'Pour $n = 4p$ ($p \\in \\mathbb{N}$)',
        'Pour $n = 4p + 1$',
        'Pour $n = 4p + 2$',
        'Pour $n = 4p + 3$',
      ],
      correctAnswerIndex: 2,
      explanation: '$13 \\mid (2020^n + 1) \\iff 5^n \\equiv -1 \\equiv 12\\;[13]$, ce qui correspond exactement à $n \\equiv 2\\;[4]$, soit $n = 4p + 2$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exercice type PDF : 174277^2625 − 1',
    stepTheme: 'slate',
    stepTitle: 'Montrer que $11$ divise $174277^{2625} - 1$',
    paragraphText:
      'Réduisons d’abord la base modulo $11$ : par alternance des chiffres (ou division euclidienne $174277 = 11 \\times 15843 + 4$), $174277 \\equiv 4\\;[11]$. Ensuite, calculons les puissances de $4$ modulo $11$ : $4^1 \\equiv 4$, $4^2 = 16 \\equiv 5$, $4^3 \\equiv 20 \\equiv 9 \\equiv -2$, $4^4 \\equiv -8 \\equiv 3$, $4^5 \\equiv 12 \\equiv 1\\;[11]$ ! Or $2625 = 5 \\times 525$. Donc $174277^{2625} \\equiv 4^{5 \\times 525} = (4^5)^{525} \\equiv 1^{525} = 1\\;[11]$, d’où $11 \\mid (174277^{2625} - 1)$.',
    formula: {
      name: 'Réduction base puis exposant',
      formula: '174277 \\equiv 4\\;[11],\\; 4^5 \\equiv 1\\;[11] \\text{ et } 5 \\mid 2625 \\implies 174277^{2625} \\equiv 1\\;[11]',
    },
    exercise: {
      id: 'tc_m_num_l04_p05_q03',
      type: 'mcq',
      prompt: 'Sachant que $4^5 \\equiv 1\\;[11]$, quel est le reste de la division de $4^{53}$ par $11$ ?',
      options: ['$1$', '$4$', '$5$', '$9$'],
      correctAnswerIndex: 3,
      explanation: '$53 = 5 \\times 10 + 3$, donc $4^{53} = (4^5)^{10} \\times 4^3 \\equiv 1^{10} \\times 64 \\equiv 9\\;[11]$ ($64 = 11 \\times 5 + 9$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Attention aux deux modules !',
    stepTheme: 'orange',
    stepTitle: 'Base réduite modulo $m$, exposant réduit modulo la période $p$',
    paragraphText:
      'C’est la confusion n°1 au Bac : si on travaille modulo $13$, on réduit la BASE modulo $13$ ($2020 \\equiv 5\\;[13]$), mais on réduit l’EXPOSANT modulo la PÉRIODE $p$ des puissances (ici $p = 4$, et PAS $13$ !).',
    keyRule: 'Base réduite modulo $m$, exposant réduit modulo la période $p$ telle que $a^p \\equiv 1\\,[m]$.',
    exercise: {
      id: 'tc_m_num_l04_p05_q04',
      type: 'mcq',
      prompt: 'Si $a \\equiv 2\\;[11]$ et $2^{10} \\equiv 1\\;[11]$, pour calculer $a^{34} \\bmod 11$, par quel nombre faut-il diviser l’exposant $34$ ?',
      options: ['Par $11$', 'Par $10$ (la période)', 'Par $2$', 'Par $3$'],
      correctAnswerIndex: 1,
      explanation: 'On utilise $2^{10} \\equiv 1\\;[11]$, donc $34 = 10 \\times 3 + 4$ donne $2^{34} \\equiv 2^4 = 16 \\equiv 5\\;[11]$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Chiffre des unités',
    stepTheme: 'slate',
    stepTitle: 'Trouver le chiffre des unités d’une grande puissance ($\\bmod 10$)',
    paragraphText:
      'Le chiffre des unités en base $10$ d’un entier positif est exactement son reste dans la division euclidienne par $10$ ! Par exemple, pour $7^n \\bmod 10$ : $7^1 \\equiv 7$, $7^2 = 49 \\equiv 9 \\equiv -1$, $7^3 \\equiv 3$, $7^4 \\equiv 1\\;[10]$. Comme $2026 = 4 \\times 506 + 2$, $7^{2026} \\equiv 7^2 = 49 \\equiv 9\\;[10]$ : son chiffre des unités est $9$.',
    exercise: {
      id: 'tc_m_num_l04_p05_q05',
      type: 'mcq',
      prompt: 'Quel est le chiffre des unités de $3^{403}$ en écriture décimale ?',
      options: ['$1$', '$3$', '$7$', '$9$'],
      correctAnswerIndex: 2,
      explanation: '$3^1 \\equiv 3, 3^2 \\equiv 9, 3^3 \\equiv 7, 3^4 \\equiv 1\\;[10]$. Or $403 = 4 \\times 100 + 3$, donc $3^{403} \\equiv 3^3 = 27 \\equiv 7\\;[10]$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Sommes géométriques / multiples',
    stepTheme: 'green',
    stepTitle: 'Prouver une divisibilité par congruence pour tout $n \\in \\mathbb{N}$',
    paragraphText:
      'Pour prouver qu’une expression comme $A_n = 3^{2n+1} + 2^{n+2}$ est divisible par $7$ pour tout $n \\in \\mathbb{N}$ sans même faire de récurrence : $3^{2n+1} = 3 \\cdot (3^2)^n = 3 \\cdot 9^n \\equiv 3 \\cdot 2^n\\;[7]$, et $2^{n+2} = 4 \\cdot 2^n$. Donc $A_n \\equiv (3 + 4)\\cdot 2^n = 7 \\cdot 2^n \\equiv 0\\;[7]$ !',
    exercise: {
      id: 'tc_m_num_l04_p05_q06',
      type: 'mcq',
      prompt: 'Par quel entier est toujours divisible $B_n = 4^n + 15n - 1$ pour tout $n \\in \\mathbb{N}$ ?',
      options: ['$7$', '$9$', '$11$', '$15$'],
      correctAnswerIndex: 1,
      explanation: 'Modulo $9$ : pour $n=0$, $0$ ; modulo $9$ on teste $n \\equiv 0, 1, 2\\;[3]$ car $4^3 = 64 \\equiv 1\\;[9]$. Si $n = 3k$, $1+0-1=0$ ; $n=3k+1$, $4+15-1=18 \\equiv 0$ ; $n=3k+2$, $16+30-1=45 \\equiv 0\\;[9]$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Synthèse',
    stepTheme: 'slate',
    stepTitle: 'Quand $a^n \\bmod m$ devient nul à partir d’un certain rang',
    paragraphText:
      'Attention : lorsque $a$ et $m$ ne sont pas premiers entre eux, la suite $a^n \\bmod m$ peut ne jamais repasser par $1$ ! Exemple : $6^1 \\equiv 6\\,[12]$, $6^2 = 36 \\equiv 0\\,[12]$, et pour tout $n \\geqslant 2$, $6^n \\equiv 0\\,[12]$. Exemple 2 : $2^1 \\equiv 2, 2^2 \\equiv 4, 2^3 \\equiv 2\\,[6]$ : périodique de période $2$ à partir du rang $1$ sans passer par $1$.',
    exercise: {
      id: 'tc_m_num_l04_p05_q07',
      type: 'mcq',
      prompt: 'Quel est le reste de la division euclidienne de $6^{2025}$ par $18$ ?',
      options: ['$0$', '$6$', '$12$', '$1$'],
      correctAnswerIndex: 0,
      explanation: 'Dès $n \\geqslant 2$, $6^n = 36 \\cdot 6^{n-2} = 18 \\cdot (2 \\cdot 6^{n-2})$ est un multiple de $18$, donc le reste vaut $0$.',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Écriture d’un entier naturel en base $b$ ($b \\geqslant 2$)',
    paragraphText:
      'Soit $b \\in \\mathbb{N}$ avec $b \\geqslant 2$. Tout entier naturel non nul $N$ s’écrit de manière UNIQUE sous la forme $N = a_n b^n + a_{n-1} b^{n-1} + \\dots + a_1 b + a_0$ où les chiffres $a_k$ sont des entiers vérifiant $0 \\leqslant a_k < b$ et $a_n \\ne 0$. On note $N = \\overline{a_n a_{n-1} \\dots a_1 a_0}^{\\,b}$.',
    formula: {
      name: 'Développement polynomial en base b',
      formula: '\\overline{a_n a_{n-1} \\dots a_0}^{\\,b} = \\sum_{k=0}^{n} a_k b^k \\qquad (0 \\leqslant a_k \\leqslant b - 1,\\; a_n \\ne 0)',
    },
    exercise: {
      id: 'tc_m_num_l04_p06_q01',
      type: 'mcq',
      prompt: 'Quelle écriture est IMPOSSIBLE en base $8$ (octale) ?',
      options: [
        '$\\overline{10254}^{\\,8}$',
        '$\\overline{770}^{\\,8}$',
        '$\\overline{384}^{\\,8}$',
        '$\\overline{501}^{\\,8}$',
      ],
      correctAnswerIndex: 2,
      explanation: 'En base $8$, tous les chiffres doivent être strictement inférieurs à $8$ (de $0$ à $7$). Le chiffre $8$ est interdit dans $\\overline{384}^{\\,8}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Bases usuelles',
    stepTheme: 'slate',
    stepTitle: 'Bases binaire ($2$), octale ($8$), décimale ($10$) et hexadécimale ($16$)',
    paragraphText:
      'En informatique et en arithmétique : base $2$ (binaire, chiffres $0, 1$), base $8$ (octale, chiffres $0$ à $7$), base $10$ (décimale, $0$ à $9$) et base $16$ (hexadécimale, chiffres $0$ à $9$ puis $A=10, B=11, C=12, D=13, E=14, F=15$). Pour passer de la base $b$ à la base $10$, on développe la somme des puissances de $b$. Exemple : $\\overline{10254}^{\\,8} = 1\\times 8^4 + 0\\times 8^3 + 2\\times 8^2 + 5\\times 8 + 4 = 4096 + 128 + 40 + 4 = 4268$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Correspondance hexadécimale',
      tableData: {
        headers: ['Symbole hexa', 'A', 'B', 'C', 'D', 'E', 'F'],
        rows: [['Valeur décimale', '10', '11', '12', '13', '14', '15']],
      },
    },
    exercise: {
      id: 'tc_m_num_l04_p06_q02',
      type: 'mcq',
      prompt: 'Quelle est l’écriture décimale du nombre hexadécimal $\\overline{2B}^{\\,16}$ ?',
      options: ['$211$', '$43$', '$38$', '$27$'],
      correctAnswerIndex: 1,
      explanation: 'Comme $B = 11$, $\\overline{2B}^{\\,16} = 2 \\times 16^1 + 11 \\times 16^0 = 32 + 11 = 43$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Conversion base 10 → base b',
    stepTheme: 'green',
    stepTitle: 'Algorithme des divisions euclidiennes successives ($222$ en base $2$)',
    paragraphText:
      'Pour écrire $N = 222$ en base $b = 2$, on effectue des divisions euclidiennes successives par $2$ jusqu’à obtenir un quotient nul, puis on lit les restes de BAS EN HAUT (du dernier au premier) : $222 = 2\\times 111 + 0$, $111 = 2\\times 55 + 1$, $55 = 2\\times 27 + 1$, $27 = 2\\times 13 + 1$, $13 = 2\\times 6 + 1$, $6 = 2\\times 3 + 0$, $3 = 2\\times 1 + 1$, $1 = 2\\times 0 + 1$. D’où $222 = \\overline{11011110}^{\\,2}$.',
    formula: {
      name: 'Lecture des restes',
      formula: '222_{10} = 128 + 64 + 16 + 8 + 4 + 2 = \\overline{11011110}^{\\,2}',
    },
    exercise: {
      id: 'tc_m_num_l04_p06_q03',
      type: 'mcq',
      prompt: 'Quelle est l’écriture en base $2$ (binaire) de l’entier décimal $25$ ?',
      options: [
        '$\\overline{10011}^{\\,2}$',
        '$\\overline{11001}^{\\,2}$',
        '$\\overline{11010}^{\\,2}$',
        '$\\overline{10101}^{\\,2}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$25 = 16 + 8 + 1 = 1\\cdot 2^4 + 1\\cdot 2^3 + 0\\cdot 2^2 + 0\\cdot 2^1 + 1\\cdot 2^0 = \\overline{11001}^{\\,2}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice type PDF : base a = 17',
    stepTheme: 'slate',
    stepTitle: 'Puissances de $(a + 1)$ en base $a$ (ici $a = 17$ en hexadécimal)',
    paragraphText:
      'Soit $a > 1$ un entier (par exemple $a = 17$ ou $a = 16$). Les développements de $(a+1)^1 = a + 1$, $(a+1)^2 = a^2 + 2a + 1$, $(a+1)^3 = a^3 + 3a^2 + 3a + 1$ et $(a+1)^4 = a^4 + 4a^3 + 6a^2 + 4a + 1$ ont tous des coefficients $\\leqslant 6 < a$ ! En base $a$, ils s’écrivent donc simplement $\\overline{11}^{\\,a}$, $\\overline{121}^{\\,a}$, $\\overline{1331}^{\\,a}$ et $\\overline{14641}^{\\,a}$. En particulier pour $a = 17$ : $18^2 = \\overline{121}^{\\,17}$, $18^3 = \\overline{1331}^{\\,17}$, $18^4 = \\overline{14641}^{\\,17}$.',
    exercise: {
      id: 'tc_m_num_l04_p06_q04',
      type: 'mcq',
      prompt: 'Comment s’écrit $(16 + 1)^3 = 17^3$ dans le système hexadécimal (base $16$) ?',
      options: [
        '$\\overline{1331}^{\\,16}$',
        '$\\overline{1231}^{\\,16}$',
        '$\\overline{14641}^{\\,16}$',
        '$\\overline{1771}^{\\,16}$',
      ],
      correctAnswerIndex: 0,
      explanation: '$(16 + 1)^3 = 1\\cdot 16^3 + 3\\cdot 16^2 + 3\\cdot 16^1 + 1\\cdot 16^0$, et tous les coefficients $1, 3$ sont $< 16$, donc $\\overline{1331}^{\\,16}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Nombres uniformes (repunits)',
    stepTheme: 'slate',
    stepTitle: 'Écriture de $2^n - 1$ en base $2$ et de $\\overline{11\\dots 1}^{\\,a}$',
    paragraphText:
      'La somme géométrique $1 + a + a^2 + \\dots + a^{n-1} = \\frac{a^n - 1}{a - 1}$ s’écrit en base $a$ avec exactement $n$ chiffres égaux à $1$ : $\\overline{11\\dots 1}^{\\,a}$. En particulier en base $2$ ($a = 2$), $\\frac{2^n - 1}{2 - 1} = 2^n - 1 = \\overline{11\\dots 1}^{\\,2}$ ($n$ chiffres $1$), et $2^n = \\overline{100\\dots 0}^{\\,2}$ ($1$ suivi de $n$ zéros).',
    formula: {
      name: 'Somme géométrique en base a',
      formula: '\\underbrace{\\overline{11\\dots 1}^{\\,a}}_{n \\text{ chiffres}} = \\sum_{k=0}^{n-1} a^k = \\frac{a^n - 1}{a - 1}',
    },
    exercise: {
      id: 'tc_m_num_l04_p06_q05',
      type: 'mcq',
      prompt: 'Quelle est la valeur décimale du nombre binaire $\\overline{11111}^{\\,2}$ ($5$ chiffres égaux à $1$) ?',
      options: ['$15$', '$31$', '$32$', '$63$'],
      correctAnswerIndex: 1,
      explanation: 'Avec $n = 5$ chiffres $1$ en base $2$, la somme vaut $2^5 - 1 = 32 - 1 = 31$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Conversion rapide base 2 ↔ base 16 / 8',
    stepTheme: 'green',
    stepTitle: 'Regrouper les bits par paquets de $3$ (octal) ou $4$ (hexadécimal)',
    paragraphText:
      'Comme $8 = 2^3$ et $16 = 2^4$, pour convertir du binaire vers l’hexadécimal, on regroupe les bits par paquets de $4$ en partant de la droite ! Pour $222 = \\overline{1101\\,1110}^{\\,2}$ : $1101_2 = 8+4+1 = 13 = D$ et $1110_2 = 8+4+2 = 14 = E$, donc $222 = \\overline{DE}^{\\,16}$ !',
    exercise: {
      id: 'tc_m_num_l04_p06_q06',
      type: 'mcq',
      prompt: 'Sachant que $222_{10} = \\overline{11011110}^{\\,2}$, quelle est son écriture en base $16$ ?',
      options: [
        '$\\overline{DE}^{\\,16}$',
        '$\\overline{ED}^{\\,16}$',
        '$\\overline{CE}^{\\,16}$',
        '$\\overline{DF}^{\\,16}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Le groupe de poids fort $1101_2 = 13 = D$, le groupe de poids faible $1110_2 = 14 = E$, d’où $\\overline{DE}^{\\,16} = 13\\times 16 + 14 = 222$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Équations avec inconnue de base',
    stepTheme: 'orange',
    stepTitle: 'Trouver la base $b$ dans une équation comme $\\overline{23}^{\\,b} + \\overline{14}^{\\,b} = \\overline{41}^{\\,b}$',
    paragraphText:
      'Lorsque la base $b$ est l’inconnue, il ne faut jamais oublier la contrainte $b > \\text{plus grand chiffre écrit}$ ! Par exemple, pour $\\overline{23}^{\\,b} + \\overline{14}^{\\,b} = \\overline{41}^{\\,b}$, on impose $b \\geqslant 5$, puis on développe : $(2b + 3) + (b + 4) = 4b + 1 \\implies 3b + 7 = 4b + 1 \\implies b = 6 \\geqslant 5$.',
    exercise: {
      id: 'tc_m_num_l04_p06_q07',
      type: 'mcq',
      prompt: 'Dans quelle base $b$ l’égalité $\\overline{24}^{\\,b} + \\overline{32}^{\\,b} = \\overline{100}^{\\,b}$ est-elle vraie ?',
      options: ['$b = 5$', '$b = 6$', '$b = 7$', '$b = 8$'],
      correctAnswerIndex: 1,
      explanation: 'Contrainte : $b \\geqslant 5$. Développement : $(2b + 4) + (3b + 2) = b^2 \\iff b^2 - 5b - 6 = 0 \\iff (b - 6)(b + 1) = 0 \\implies b = 6$.',
    },
  },
];

const p07Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Principe des critères',
    stepTheme: 'violet',
    stepTitle: 'Déduire les critères de divisibilité à l’aide des congruences de $10^k$',
    paragraphText:
      'Un entier $N$ écrit en base $10$ sous la forme $N = \\sum_{k=0}^n a_k 10^k$ a un reste modulo $d$ entièrement gouverné par les congruences de $10^k$ modulo $d$ ! C’est ainsi que les congruences démontrent tous les critères de divisibilité connus.',
    formula: {
      name: 'Principe général en base 10',
      formula: 'N = \\sum_{k=0}^n a_k 10^k \\implies N \\equiv \\sum_{k=0}^n a_k (10^k \\bmod d)\\;[d]',
    },
    exercise: {
      id: 'tc_m_num_l04_p07_q01',
      type: 'mcq',
      prompt: 'Pourquoi la divisibilité par $3$ ou par $9$ ne dépend-elle que de la somme des chiffres $a_0 + a_1 + \\dots + a_n$ ?',
      options: [
        'Parce que $10 \\equiv 0\\;[9]$',
        'Parce que $10 \\equiv 1\\;[9]$ (et $10 \\equiv 1\\;[3]$), donc $10^k \\equiv 1\\;[9]$ pour tout $k \\in \\mathbb{N}$',
        'Parce que $9$ est premier',
        'Parce que $10 \\equiv -1\\;[9]$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $10 = 9 + 1 \\equiv 1\\;[9]$, pour tout $k \\geqslant 0$, $10^k \\equiv 1^k = 1\\;[9]$, d’où $N \\equiv \\sum a_k\\;[9]$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Critères par bloc final',
    stepTheme: 'violet',
    stepTitle: 'Divisibilité par $2, 5, 10$ ; $4, 25$ et $8$',
    paragraphText:
      '• Comme $10 \\equiv 0\\;[2]$, $10 \\equiv 0\\;[5]$ et $10 \\equiv 0\\;[10]$, $N \\equiv a_0$ modulo $2$, $5$ et $10$ : seul le chiffre des unités compte. • Comme $10^2 = 100 \\equiv 0\\;[4]$ et $100 \\equiv 0\\;[25]$, $N \\equiv \\overline{a_1 a_0}$ modulo $4$ et $25$ : seuls les $2$ derniers chiffres comptent. • Comme $10^3 = 1000 \\equiv 0\\;[8]$, $N \\equiv \\overline{a_2 a_1 a_0}\\;[8]$ : seuls les $3$ derniers chiffres comptent.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Synthèse des critères de divisibilité (base 10)',
      tableData: {
        headers: ['Diviseur d', 'Propriété clé de 10^k', 'Critère sur les chiffres de N'],
        rows: [
          ['2 ; 5 ; 10', '10 ≡ 0 [d]', 'Dernier chiffre a₀ divisible par d'],
          ['4 ; 25', '10² = 100 ≡ 0 [d]', 'Nombre formé par les 2 derniers chiffres div. par d'],
          ['8', '10³ = 1000 ≡ 0 [8]', 'Nombre formé par les 3 derniers chiffres div. par 8'],
          ['3 ; 9', '10^k ≡ 1 [d]', 'Somme des chiffres ∑ a_k div. par d'],
          ['11', '10^k ≡ (−1)^k [11]', 'Somme alternée ∑ (−1)^k a_k div. par 11'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l04_p07_q02',
      type: 'mcq',
      prompt: 'Sans poser de division, quel est le reste de la division euclidienne de $753\\,946$ par $25$ ?',
      options: ['$4$', '$6$', '$21$', '$1$'],
      correctAnswerIndex: 2,
      explanation: 'Comme $100 \\equiv 0\\;[25]$, $753\\,946 = 7539 \\times 100 + 46 \\equiv 46 \\equiv 21\\;[25]$ (car $46 = 25 + 21$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Critère par 11',
    stepTheme: 'violet',
    stepTitle: 'Critère de divisibilité par $11$ : $10 \\equiv -1\\;[11]$',
    paragraphText:
      'Puisque $10 = 11 - 1 \\equiv -1\\;[11]$, on a $10^k \\equiv (-1)^k\\;[11]$ : $+1$ si le rang $k$ (en partant de la droite à $k = 0$) est pair, $-1$ s’il est impair. Ainsi $N \\equiv (a_0 + a_2 + a_4 + \\dots) - (a_1 + a_3 + a_5 + \\dots)\\;[11]$ : on soustrait la somme des chiffres de rang impair à la somme des chiffres de rang pair (en comptant depuis les unités !).',
    formula: {
      name: 'Congruence modulo 11',
      formula: 'N \\equiv \\sum_{k=0}^{n} (-1)^k a_k\\;[11]',
    },
    exercise: {
      id: 'tc_m_num_l04_p07_q03',
      type: 'mcq',
      prompt: 'Quel est le reste de la division de $N = 6\\,485\\,958\\,017$ par $11$ ?',
      options: ['$0$', '$1$', '$5$', '$10$'],
      correctAnswerIndex: 2,
      explanation: 'En partant de la droite ($a_0 = 7$) : rangs pairs $7 + 0 + 5 + 5 + 4 = 21$ ; rangs impairs $1 + 8 + 9 + 8 + 6 = 32$. Différence : $21 - 32 = -11 \\equiv 0\\;[11]$ ! Attendez, recalculons avec soin : chiffres de $6\\,485\\,958\\,017$ : $a_0=7, a_1=1, a_2=0, a_3=8, a_4=5, a_5=9, a_6=5, a_7=8, a_8=4, a_9=6$. Pairs : $7+0+5+5+4 = 21$ ; impairs : $1+8+9+8+6 = 32$ ; $21 - 32 = -11 \\equiv 0\\;[11]$ ! Donc $0$ (et non $5$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice type : Chiffres inconnus',
    stepTheme: 'slate',
    stepTitle: 'Déterminer les chiffres $x$ et $y$ pour que $\\overline{5x32y}^{10}$ soit divisible par $3$ et $4$',
    paragraphText:
      'Pour que $N = \\overline{5x32y}^{10}$ soit divisible par $4$, le nombre $\\overline{2y}$ doit être multiple de $4$, donc $y \\in \\{0, 4, 8\\}$. Pour que $N$ soit divisible par $3$, la somme $5 + x + 3 + 2 + y = 10 + x + y$ doit être multiple de $3$. Pour $y = 0$, $10 + x \\equiv 0\\,[3] \\implies x \\in \\{2, 5, 8\\}$ ; pour $y = 4$, $14 + x \\equiv 0\\,[3] \\implies x \\in \\{1, 4, 7\\}$ ; pour $y = 8$, $18 + x \\equiv 0\\,[3] \\implies x \\in \\{0, 3, 6, 9\\}$.',
    exercise: {
      id: 'tc_m_num_l04_p07_q04',
      type: 'mcq',
      prompt: 'Pour quelle valeur du chiffre $x$ l’entier décimal $N = \\overline{4x72}^{10}$ est-il divisible par $9$ ?',
      options: ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 7$'],
      correctAnswerIndex: 1,
      explanation: '$4 + x + 7 + 2 = 13 + x$ doit être un multiple de $9$ avec $0 \\leqslant x \\leqslant 9$, donc $13 + x = 18 \\implies x = 5$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Critère composé (par 6)',
    stepTheme: 'violet',
    stepTitle: 'Combiner deux critères quand les diviseurs sont premiers entre eux',
    paragraphText:
      'Un entier est divisible par $6$ ssi il est divisible à la fois par $2$ ET par $3$ (car $\\text{pgcd}(2, 3) = 1$). De même : divisible par $12 \\iff$ par $3$ et $4$ ; divisible par $45 \\iff$ par $5$ et $9$. Attention : divisible par $2$ et $4$ n’implique PAS divisible par $8$ car $2$ et $4$ ne sont pas premiers entre eux !',
    exercise: {
      id: 'tc_m_num_l04_p07_q05',
      type: 'mcq',
      prompt: 'L’entier $20$ est divisible par $2$ et par $4$, mais pas par $8$. Pourquoi ne peut-on pas multiplier les critères de $2$ et $4$ ?',
      options: [
        'Parce que $8 > 4$',
        'Parce que $2$ et $4$ ne sont pas premiers entre eux ($\\text{pgcd}(2, 4) = 2 \\ne 1$)',
        'Parce que $20$ est pair',
        'Parce que $2 + 4 = 6$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le corollaire du théorème de Gauss exige que les deux diviseurs soient premiers entre eux pour pouvoir affirmer que leur produit divise $N$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Critère en une autre base',
    stepTheme: 'green',
    stepTitle: 'Étendre les critères à une base $b$ quelconque',
    paragraphText:
      'En base $b$, comme $b \\equiv 1\\;[b - 1]$, tout entier $N = \\overline{a_n\\dots a_0}^{\\,b}$ est congru à la somme de ses chiffres modulo $b - 1$ (analogue du critère par $9$ !) ; et comme $b \\equiv -1\\;[b + 1]$, il est congru à la somme alternée de ses chiffres modulo $b + 1$ (analogue du critère par $11$ !).',
    exercise: {
      id: 'tc_m_num_l04_p07_q06',
      type: 'mcq',
      prompt: 'En base $8$, la somme des chiffres de $\\overline{356}^{\\,8}$ est $3 + 5 + 6 = 14$. Par quel entier $N = \\overline{356}^{\\,8}$ est-il donc nécessairement divisible ?',
      options: ['$9$', '$7$', '$8$', '$5$'],
      correctAnswerIndex: 1,
      explanation: 'En base $8$, $8 \\equiv 1\\;[7]$, donc $N \\equiv 3 + 5 + 6 = 14 \\equiv 0\\;[7]$ ! En décimal, $\\overline{356}^{\\,8} = 3\\times 64 + 5\\times 8 + 6 = 238 = 7 \\times 34$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Sens du signe modulo 11',
    stepTheme: 'orange',
    stepTitle: 'Ne pas inverser le signe lorsqu’on veut le RESTE modulo $11$',
    paragraphText:
      'Pour savoir si $11 \\mid N$, il importe peu de faire $(a_0 - a_1 + a_2 - \\dots)$ ou l’opposé. MAIS pour trouver le RESTE exact de $N$ par $11$, il faut impérativement affecter le signe $+$ aux rangs PAIRS en partant du chiffre des UNITÉS ($a_0 - a_1 + a_2 - a_3 + \\dots$).',
    exercise: {
      id: 'tc_m_num_l04_p07_q07',
      type: 'mcq',
      prompt: 'Quel est le reste exact de $3528$ dans la division euclidienne par $11$ ?',
      options: ['$3$', '$8$', '$0$', '$1$'],
      correctAnswerIndex: 1,
      explanation: 'En partant des unités : $8 - 2 + 5 - 3 = 8$. Comme $0 \\leqslant 8 < 11$, le reste est $8$ (en effet $3528 = 11 \\times 320 + 8$).',
    },
  },
];

// Wait! Check q03 explanation in p07Steps above: it had a self-correcting scratch comment in explanation and correctAnswerIndex: 0 vs 2! Let's fix p07Steps q03 right after writing or before writing! Good catch during mental review: 6485958017 -> 7-1+0-8+5-9+5-8+4-6 = (7+0+5+5+4)-(1+8+9+8+6) = 21 - 32 = -11 ≡ 0 [11]! So option 0 ('$0$') is the exact answer! Let's fix that cleanly right here before calling write_file.

const p07StepsFixed: StructuredLessonStep[] = p07Steps.map((step) =>
  step.exercise.id === 'tc_m_num_l04_p07_q03'
    ? {
        ...step,
        exercise: {
          ...step.exercise,
          correctAnswerIndex: 0,
          explanation:
            'En partant des unités ($a_0 = 7$) : rangs pairs $7 + 0 + 5 + 5 + 4 = 21$ ; rangs impairs $1 + 8 + 9 + 8 + 6 = 32$. D’où $N \\equiv 21 - 32 = -11 \\equiv 0\\;[11]$ : $6\\,485\\,958\\,017$ est divisible par $11$ (reste $0$).',
        },
      }
    : step
);

const p08Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Nombres premiers et nombres composés',
    paragraphText:
      'Un entier naturel $p$ est dit premier s’il possède exactement DEUX diviseurs positifs distincts : $1$ et lui-même ($p$). Par conséquent, $0$ (qui a une infinité de diviseurs) et $1$ (qui n’a qu’un seul diviseur positif) ne sont PAS premiers. Le plus petit nombre premier est $2$, et c’est le seul nombre premier pair.',
    formula: {
      name: 'Caractérisation d’un nombre premier',
      formula: 'p \\in \\mathbb{N} \\text{ premier} \\iff p \\geqslant 2 \\text{ et } D^+(p) = \\{1, p\\}',
    },
    exercise: {
      id: 'tc_m_num_l04_p08_q01',
      type: 'mcq',
      prompt: 'Pourquoi l’entier $1$ n’est-il pas considéré comme un nombre premier ?',
      options: [
        'Parce qu’il est impair',
        'Parce qu’il n’a qu’un seul diviseur positif (lui-même), et non deux diviseurs positifs distincts',
        'Parce qu’il divise $0$',
        'Parce que l’unicité de la décomposition en facteurs premiers tomberait en défaut sinon (et c’est aussi la raison !)',
      ],
      correctAnswerIndex: 1,
      explanation: 'Par définition, un nombre premier possède exactement deux diviseurs positifs distincts ($1$ et $p$). $1$ n’en a qu’un seul.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Théorème d’arrêt à √n',
    stepTheme: 'violet',
    stepTitle: 'Tester si un entier $n \\geqslant 2$ est premier',
    paragraphText:
      'Tout entier $n \\geqslant 2$ admet au moins un diviseur premier. Si $n$ n’est pas premier (il est composé), il admet nécessairement un diviseur premier $p$ tel que $p \\leqslant \\sqrt{n}$ (sinon le produit de ses deux plus petits facteurs dépasserait $\\sqrt{n}\\cdot\\sqrt{n} = n$). Réciproquement, si aucun nombre premier $p \\leqslant \\sqrt{n}$ ne divise $n$, alors $n$ est premier !',
    formula: {
      name: 'Test de primalité par division',
      formula: '(\\forall p \\text{ premier tel que } p^2 \\leqslant n,\\; p \\nmid n) \\implies n \\text{ est premier}',
    },
    exercise: {
      id: 'tc_m_num_l04_p08_q02',
      type: 'mcq',
      prompt: 'Pour tester si $983$ est premier, sachant que $\\sqrt{983} \\approx 31{,}35$, jusqu’à quel plus grand nombre premier doit-on tester la divisibilité de $983$ ?',
      options: ['$19$', '$29$', '$31$', '$37$'],
      correctAnswerIndex: 2,
      explanation: 'Le plus grand nombre premier inférieur ou égal à $\\sqrt{983} \\approx 31{,}35$ est $31$. Comme aucun des premiers $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31$ ne divise $983$, $983$ est premier.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Théorème d’Euclide',
    stepTheme: 'violet',
    stepTitle: 'Il existe une infinité de nombres premiers',
    paragraphText:
      'Démonstration par l’absurde d’Euclide : s’il n’existait qu’un nombre fini de nombres premiers $p_1, p_2, \\dots, p_r$, l’entier $N = p_1 p_2 \\dots p_r + 1 > 1$ aurait un diviseur premier $q$. Or $q$ ferait partie de la liste, donc $q$ diviserait $p_1 \\dots p_r$ ET $N$, donc $q$ diviserait $N - p_1\\dots p_r = 1$, impossible ! Donc l’ensemble $\\mathcal{P}$ des nombres premiers est infini.',
    exercise: {
      id: 'tc_m_num_l04_p08_q03',
      type: 'mcq',
      prompt: 'Dans la preuve d’Euclide avec $N = 2 \\times 3 \\times 5 \\times 7 + 1 = 211$, quel argument conduit à une contradiction si l’on suppose qu’il n’y a que $2, 3, 5, 7$ comme nombres premiers ?',
      options: [
        '$N$ est pair',
        'Tout diviseur premier $q$ de $N$ diviserait $N$ et $2\\times 3\\times 5\\times 7$, donc diviserait $1$',
        '$N$ est inférieur à $7$',
        '$211 = 11 \\times 19$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le reste de $N$ divisé par chaque $p_i$ vaut $1$, donc aucun des $p_i$ ne divise $N$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Théorème fondamental de l’arithmétique',
    stepTheme: 'violet',
    stepTitle: 'Décomposition en produit de facteurs premiers ($1092$)',
    paragraphText:
      'Tout entier naturel $n \\geqslant 2$ s’écrit de façon UNIQUE (à l’ordre des facteurs près) comme un produit de puissances de nombres premiers distincts : $n = p_1^{\\alpha_1} p_2^{\\alpha_2} \\dots p_r^{\\alpha_r}$ avec $\\alpha_i \\in \\mathbb{N}^*$. Exemple : $1092 = 2 \\times 546 = 2^2 \\times 273 = 2^2 \\times 3 \\times 91 = 2^2 \\times 3 \\times 7 \\times 13$.',
    formula: {
      name: 'Décomposition primaire et nombre de diviseurs',
      formula: 'n = \\prod_{i=1}^{r} p_i^{\\alpha_i} \\implies \\text{nb de diviseurs positifs de } n = \\prod_{i=1}^{r} (\\alpha_i + 1)',
    },
    exercise: {
      id: 'tc_m_num_l04_p08_q04',
      type: 'mcq',
      prompt: 'Combien de diviseurs POSITIFS possède l’entier $1092 = 2^2 \\times 3^1 \\times 7^1 \\times 13^1$ ?',
      options: ['$12$', '$16$', '$24$', '$48$'],
      correctAnswerIndex: 2,
      explanation: 'Chaque exposant $\\alpha_i$ offre $\\alpha_i + 1$ choix : $(2 + 1)(1 + 1)(1 + 1)(1 + 1) = 3 \\times 2 \\times 2 \\times 2 = 24$ diviseurs positifs (et $48$ dans $\\mathbb{Z}$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Diviseurs à partir de la décomposition',
    stepTheme: 'green',
    stepTitle: 'Reconnaître tous les diviseurs positifs de $n = p_1^{\\alpha_1}\\dots p_r^{\\alpha_r}$',
    paragraphText:
      'Les diviseurs positifs de $n$ sont exactement les entiers de la forme $d = p_1^{\\beta_1}\\dots p_r^{\\beta_r}$ avec $0 \\leqslant \\beta_i \\leqslant \\alpha_i$ pour chaque $i$. En particulier, deux entiers décomposés permettent de lire instantanément leur PGCD (exposants $\\min(\\alpha_i, \\beta_i)$) et leur PPCM (exposants $\\max(\\alpha_i, \\beta_i)$).',
    exercise: {
      id: 'tc_m_num_l04_p08_q05',
      type: 'mcq',
      prompt: 'Quel est le plus petit entier naturel $n \\geqslant 1$ possédant exactement $6$ diviseurs positifs ?',
      options: ['$6$', '$12$', '$18$', '$24$'],
      correctAnswerIndex: 1,
      explanation: '$6 = 6 \\times 1$ (donne $p^5$, minimum $2^5 = 32$) ou $6 = 3 \\times 2$ (donne $p_1^2 p_2^1$, minimum $2^2 \\times 3^1 = 12$). Ainsi $12$ ($D^+(12)=\\{1,2,3,4,6,12\\}$) est le plus petit.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Factorisation de Sophie Germain (PDF)',
    stepTheme: 'slate',
    stepTitle: 'Pour quel(s) $a \\in \\mathbb{Z}$ l’entier $a^4 + a^2 + 1$ est-il premier ?',
    paragraphText:
      'Astuce de factorisation (identité remarquable complétée) : $a^4 + a^2 + 1 = (a^4 + 2a^2 + 1) - a^2 = (a^2 + 1)^2 - a^2 = (a^2 - a + 1)(a^2 + a + 1)$. Pour que ce produit de deux entiers naturels soit PREMIER, l’un des deux facteurs doit obligatoirement valoir $1$ et l’autre un nombre premier ! Résolvons $a^2 - a + 1 = 1 \\iff a(a - 1) = 0$ ($a = 0$ donne $1$, non premier ; $a = 1$ donne $1 \\times 3 = 3$, premier !) et $a^2 + a + 1 = 1 \\iff a(a + 1) = 0$ ($a = -1$ donne $3 \\times 1 = 3$, premier !). Donc $a^4 + a^2 + 1$ est premier ssi $a \\in \\{-1, 1\\}$.',
    formula: {
      name: 'Factorisation de a⁴ + a² + 1',
      formula: 'a^4 + a^2 + 1 = (a^2 - a + 1)(a^2 + a + 1)',
    },
    exercise: {
      id: 'tc_m_num_l04_p08_q06',
      type: 'mcq',
      prompt: 'Comment factoriser $n^4 + 4$ (identité de Sophie Germain) pour montrer qu’il n’est premier que pour $n = 1$ ?',
      options: [
        '$(n^2 + 2)^2 - (2n)^2 = (n^2 - 2n + 2)(n^2 + 2n + 2)$',
        '$(n^2 - 2)^2 + 4n^2$',
        '$(n^2 + 2)^2$',
        '$(n + 1)^4 - 1$',
      ],
      correctAnswerIndex: 0,
      explanation: '$n^4 + 4 = (n^2 + 2)^2 - 4n^2 = (n^2 - 2n + 2)(n^2 + 2n + 2)$. Pour $n \\geqslant 2$, les deux facteurs dépassent $1$, donc $n^4 + 4$ est toujours composé (et pour $n = 1$, $1^4 + 4 = 5$ est premier).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Erreur classique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas oublier $0$ et $1$ dans « un produit $AB$ est premier »',
    paragraphText:
      'Quand une expression factorisée $A \\cdot B$ doit être première dans $\\mathbb{N}$, on écrit $A = 1$ (et $B$ premier) OU $B = 1$ (et $A$ premier), mais il faut aussi vérifier ensuite que l’autre facteur est bien premier et non égal à $1$ (comme pour $a = 0$ dans $a^4 + a^2 + 1 = 1$).',
    exercise: {
      id: 'tc_m_num_l04_p08_q07',
      type: 'mcq',
      prompt: 'Dans l’étude de $a^4 + a^2 + 1 = (a^2 - a + 1)(a^2 + a + 1)$, que donne $a = 0$ ?',
      options: [
        '$3$, qui est premier',
        '$1$, qui n’est pas premier',
        '$0$, qui n’est pas premier',
        '$7$, qui est premier',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $a = 0$, les deux facteurs valent $1$, donc le produit vaut $1 \\times 1 = 1$, qui n’est pas premier.',
    },
  },
];

const p09Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe : Fort Boyard',
    stepTheme: 'blue',
    stepTitle: 'Stratégie gagnante aux bâtonnets via les congruences modulo $4$',
    paragraphText:
      'Au départ, il y a $20$ bâtonnets. Deux joueurs retirent à tour de rôle $1$, $2$ ou $3$ bâtonnets ; celui qui prend le DERNIER bâtonnet a PERDU. Pour gagner à coup sûr, il faut laisser à l’adversaire exactement $1$ bâtonnet à la fin, donc avant cela $5$ (quel que soit son coup $k \\in \\{1, 2, 3\\}$, je prends $4 - k$ pour le ramener à $1$), puis $9$, $13$, $17$ ! Tous ces nombres vérifient $n \\equiv 1\\;[4]$. Or $20 \\equiv 0\\;[4]$, donc le premier joueur peut prendre $3$ bâtonnets dès le coup d’ouverture ($20 - 3 = 17$) puis maintenir la suite $17 \\to 13 \\to 9 \\to 5 \\to 1$ pour gagner à coup sûr !',
    formula: {
      name: 'Positions perdantes pour l’adversaire',
      formula: 'n \\equiv 1\\;[4] \\implies \\{17, 13, 9, 5, 1\\}',
    },
    exercise: {
      id: 'tc_m_num_l04_p09_q01',
      type: 'mcq',
      prompt: 'Au jeu des bâtonnets (prendre $1, 2$ ou $3$, celui qui prend le dernier perd), il reste $21$ bâtonnets et c’est à ton tour de jouer. Peux-tu forcer la victoire ?',
      options: [
        'Oui, en prenant $1$ bâtonnet',
        'Oui, en prenant $2$ bâtonnets',
        'Non, car $21 \\equiv 1\\;[4]$ : si l’adversaire connaît la stratégie, il te ramènera toujours à $17, 13, 9, 5, 1$',
        'Oui, en prenant $3$ bâtonnets',
      ],
      correctAnswerIndex: 2,
      explanation: '$21 = 4 \\times 5 + 1 \\equiv 1\\;[4]$ est une position perdante : quel que soit $k \\in \\{1, 2, 3\\}$ que tu prennes, l’adversaire prendra $4 - k$ et te laissera $17$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Cryptographie 1 : Codage de César',
    stepTheme: 'blue',
    stepTitle: 'Chiffrement par translation modulo $26$ : $y \\equiv x + 10\\;[26]$',
    paragraphText:
      'On associe chaque lettre de l’alphabet latin à son rang de $0$ à $25$ ($A \\leftrightarrow 0, B \\leftrightarrow 1, \\dots, Z \\leftrightarrow 25$). Chiffrer par décalage de $10$ consiste à calculer pour chaque lettre de rang $x$ le reste $y$ de $x + 10$ modulo $26$. Exemple avec `MATHS` : $M(12) \\to 22(W)$, $A(0) \\to 10(K)$, $T(19) \\to 29 \\equiv 3(D)$, $H(7) \\to 17(R)$, $S(18) \\to 28 \\equiv 2(C)$, soit `WKDRC`.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Table de codage A=0 ... Z=25 (extrait utilisé)',
      tableData: {
        headers: ['Lettre', 'A', 'C', 'D', 'H', 'I', 'K', 'L', 'M', 'R', 'S', 'T', 'V', 'W', 'Y'],
        rows: [['Rang x', '0', '2', '3', '7', '8', '10', '11', '12', '17', '18', '19', '21', '22', '24']],
      },
    },
    exercise: {
      id: 'tc_m_num_l04_p09_q02',
      type: 'mcq',
      prompt: 'Avec le codage $y \\equiv x + 10\\;[26]$ ($A=0 \\dots Z=25$), comment se chiffre le mot `BAC` ($B=1, A=0, C=2$) ?',
      options: ['`LMN`', '`LKM`', '`KLM`', '`LJM`'],
      correctAnswerIndex: 1,
      explanation: '$B(1) \\to 11 = L$, $A(0) \\to 10 = K$, $C(2) \\to 12 = M$, donc `BAC` $\\to$ `LKM`.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Déchiffrement affine',
    stepTheme: 'green',
    stepTitle: 'Décoder `VIWK` pour le décalage $y \\equiv x + 10\\;[26]$',
    paragraphText:
      'Pour décoder, on inverse la congruence : $x \\equiv y - 10 \\equiv y + 16\\;[26]$. Appliquons-le à `VIWK` : $V(21) \\to 11 = L$, $I(8) \\to 8 - 10 = -2 \\equiv 24 = Y$, $W(22) \\to 12 = M$, $K(10) \\to 0 = A$. Le message clair est `LYMA` !',
    exercise: {
      id: 'tc_m_num_l04_p09_q03',
      type: 'mcq',
      prompt: 'En utilisant le décodage $x \\equiv y - 10\\;[26]$, quel mot clair correspond au message chiffré `MYNK` ($M=12, Y=24, N=13, K=10$) ?',
      options: ['`CODE`', '`CODA`', '`BOIS`', '`DATA`'],
      correctAnswerIndex: 1,
      explanation: '$M(12) \\to 2=C$, $Y(24) \\to 14=O$, $N(13) \\to 3=D$, $K(10) \\to 0=A$, soit `CODA` !',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Cryptographie 2 : Codage exponentiel (RSA simplifié)',
    stepTheme: 'slate',
    stepTitle: 'Chiffrement $y \\equiv x^3\\;[29]$ sur un alphabet à $29$ caractères',
    paragraphText:
      'On enrichit l’alphabet ($A=0 \\dots Z=25$) de trois symboles $\\alpha=26, \\beta=27, \\gamma=28$ (total $29$, nombre PREMIER !). Chiffrer une lettre de rang $x \\in \\{0, \\dots, 28\\}$ consiste à calculer le reste $y$ de $x^3$ modulo $29$. Exemple avec `MER` : $M(12) \\to 12^3 = 1728 = 29\\times 59 + 17 \\equiv 17(R)$ ; $E(4) \\to 4^3 = 64 \\equiv 6(G)$ ; $R(17) \\to 17^3 \\equiv (-12)^3 = -1728 \\equiv -17 \\equiv 12(M)$. Ainsi `MER` se code en `RGM` !',
    formula: {
      name: 'Fonction de chiffrement modulo 29',
      formula: 'y \\equiv x^3\\;[29] \\qquad (0 \\leqslant x, y \\leqslant 28)',
    },
    exercise: {
      id: 'tc_m_num_l04_p09_q04',
      type: 'mcq',
      prompt: 'Avec le codage $y \\equiv x^3\\;[29]$ ($A=0 \\dots Z=25$, $\\alpha=26, \\beta=27, \\gamma=28$), comment est codée la lettre `C` ($x = 2$) et la lettre `D` ($x = 3$) ?',
      options: [
        '`I` ($8$) et `Z` ($25$)',
        '`I` ($8$) et `$\\beta$` ($27$)',
        '`H` ($7$) et `$\\alpha$` ($26$)',
        '`G` ($6$) et `Z` ($25$)',
      ],
      correctAnswerIndex: 1,
      explanation: '$2^3 = 8 = I$ et $3^3 = 27 = \\beta$ (dans l’alphabet à $29$ symboles où $Z = 25, \\alpha = 26, \\beta = 27$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Clé de déchiffrement (Fermat + Bézout)',
    stepTheme: 'violet',
    stepTitle: 'Pourquoi le déchiffrement de $y \\equiv x^3\\;[29]$ est-il $x \\equiv y^{19}\\;[29]$ ?',
    paragraphText:
      'Comme $29$ est premier, le petit théorème de Fermat assure que pour tout $x \\not\\equiv 0\\;[29]$, $x^{28} \\equiv 1\\;[29]$ (et pour $x = 0$, $0^k = 0$ pour tout $k \\geqslant 1$). Cherchons $d$ tel que $3d \\equiv 1\\;[28]$ : par Bézout, $3 \\times 19 - 28 \\times 2 = 57 - 56 = 1$, donc $3 \\times 19 = 1 + 2 \\times 28$. Ainsi $y^{19} \\equiv (x^3)^{19} = x^{57} = x \\cdot (x^{28})^2 \\equiv x \\cdot 1^2 = x\\;[29]$ !',
    formula: {
      name: 'Inversion par Fermat et Bézout',
      formula: '3 \\times 19 = 1 + 2 \\times 28 \\quad \\text{et} \\quad x^{28} \\equiv 1\\;[29] \\implies (x^3)^{19} \\equiv x\\;[29]',
    },
    exercise: {
      id: 'tc_m_num_l04_p09_q05',
      type: 'mcq',
      prompt: 'Si l’on utilisait la clé publique $e = 5$ modulo $29$ ($y \\equiv x^5\\;[29]$), quel exposant $d$ vérifiant $5d \\equiv 1\\;[28]$ permettrait de décoder ?',
      options: ['$d = 6$', '$d = 17$', '$d = 19$', '$d = 23$'],
      correctAnswerIndex: 1,
      explanation: '$5 \\times 17 = 85 = 3 \\times 28 + 1 \\equiv 1\\;[28]$, donc $d = 17$ décode $x^5 \\bmod 29$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Décodage en action',
    stepTheme: 'slate',
    stepTitle: 'Décoder `RGM` via $x \\equiv y^{19}\\;[29]$ (par exponentiation binaire)',
    paragraphText:
      'Comment calculer efficacement $y^{19} \\bmod 29$ à la main ? On décompose $19 = 16 + 2 + 1$ par carrés successifs ! Pour `G` ($y = 6$) : $6^2 = 36 \\equiv 7\\;[29]$, $6^4 \\equiv 7^2 = 49 \\equiv 20 \\equiv -9\\;[29]$, $6^8 \\equiv (-9)^2 = 81 \\equiv 23 \\equiv -6\\;[29]$, $6^{16} \\equiv (-6)^2 = 36 \\equiv 7\\;[29]$. Alors $6^{19} = 6^{16} \\cdot 6^2 \\cdot 6^1 \\equiv 7 \\times 7 \\times 6 = 49 \\times 6 \\equiv 20 \\times 6 = 120 = 29\\times 4 + 4 \\equiv 4 = E$ ! On retrouve bien `E` !',
    konanTip: 'L’exponentiation par carrés successifs ($y^2, y^4, y^8, y^{16}$) évite des calculs géants et sert aussi en algorithmique !',
    exercise: {
      id: 'tc_m_num_l04_p09_q06',
      type: 'mcq',
      prompt: 'Sachant que `MER` donne `RGM`, quel est le codage de `E` ($x = 4$) puis comment retrouver `E` sans même calculer $6^{19}$ si on teste ?',
      options: [
        'On teste une lettre candidate : $4^3 = 64 \\equiv 6\\;[29]$, donc l’unique antécédent de $6$ est $4 = E$',
        '$4^{19}$ vaut $0$',
        '$6^3 = 4$',
        'On ajoute $19$ à $6$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Comme $x \\mapsto x^3 \\bmod 29$ est bijective (car $3$ est premier avec $28$), vérifier $4^3 \\equiv 6\\;[29]$ prouve aussitôt que $6^{19} \\equiv 4\\;[29]$ !',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Condition de bijectivité',
    stepTheme: 'orange',
    stepTitle: 'Pourquoi $e$ doit-il être premier avec $p - 1 = 28$ (et non $29$) ?',
    paragraphText:
      'Pour que $x \\mapsto x^e \\bmod 29$ soit inversible (décodable sans collision), on a besoin d’un exposant $d$ tel que $ed \\equiv 1\\;[28]$ — c’est-à-dire que $e$ doit être premier avec $p - 1 = 28$ ! Si l’on prenait $e = 2$ (qui divise $28$), on aurait $(-x)^2 \\equiv x^2\\;[29]$ : deux lettres distinctes auraient le même code et le message deviendrait indéchiffrable !',
    exercise: {
      id: 'tc_m_num_l04_p09_q07',
      type: 'mcq',
      prompt: 'Modulo $p = 29$, pourquoi l’exposant de chiffrement $e = 7$ rendrait-il le codage $y \\equiv x^7\\;[29]$ NON déchiffrable ?',
      options: [
        'Parce que $7$ est premier',
        'Parce que $7$ divise $p - 1 = 28$, donc il n’existe aucun entier $d$ tel que $7d \\equiv 1\\;[28]$',
        'Parce que $7 > 3$',
        'Parce que $7$ ne divise pas $29$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $e = 7$, plusieurs lettres distinctes auraient le même cube/puissance $7$-ième mod $29$ (par ex. $1^7 = 1$ et $16^7 \\equiv 1\\,[29]$).',
    },
  },
];

export const MATHS_TLE_C_L04_DIVISIBILITE_DANS_Z: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 4,
  title: 'Leçon 4 : Divisibilité dans Z',
  summary:
    'Diviseurs et multiples dans Z, combinaisons linéaires, fractions irréductibles, division euclidienne dans Z (reste positif), congruences modulo n, puissances périodiques, bases de numération (2, 8, 10, 16), critères de divisibilité, nombres premiers, décomposition et applications à la cryptographie.',
  officialVolumeHours: 10,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p01',
      order: 1,
      title: 'Divisibilité dans Z et combinaisons linéaires',
      summary:
        'Maîtriser la relation b | a dans Z, le rôle particulier de 0 et ±1, et le théorème fondamental de combinaison linéaire.',
      conceptExplanation:
        'Dans Z, b divise a (b ≠ 0) s’il existe k ∈ Z tel que a = kb. Contrairement à N, les diviseurs D(a) vont par paires opposées {±d}. Le théorème des combinaisons linéaires est l’outil central : tout diviseur commun à a et b divise au + bv pour tous entiers u, v ∈ Z, ce qui permet d’éliminer une inconnue n entre deux expressions.',
      keyRule: 'Si d | a et d | b, alors pour tous entiers u, v ∈ Z, d | (au + bv).',
      formulas: [
        { name: 'Divisibilité', formula: 'b \\mid a \\iff \\exists k \\in \\mathbb{Z},\\; a = kb' },
        { name: 'Combinaison linéaire', formula: '(d \\mid a \\text{ et } d \\mid b) \\implies d \\mid (au + bv)' },
      ],
      workedExample: {
        title: 'Éliminer n entre 3n + 4 et 2n + 1',
        statement: 'Montrer que tout diviseur commun $d$ à $3n + 4$ et $2n + 1$ divise $5$.',
        methodSteps: [
          'Puisque $d \\mid (3n + 4)$ et $d \\mid (2n + 1)$, $d$ divise toute combinaison linéaire de ces deux entiers.',
          'Choisir les coefficients $u = 2$ et $v = -3$ pour annuler $n$ : $2(3n + 4) - 3(2n + 1) = 6n + 8 - 6n - 3 = 5$.',
        ],
        conclusion: 'Tout diviseur commun $d$ divise $5$, donc $d \\in \\{\\pm 1, \\pm 5\\}$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p02',
      order: 2,
      title: 'Diviseurs d’expressions algébriques et fractions irréductibles',
      summary:
        'Résoudre (an + b) | (cn + d) dans Z en vérifiant la réciproque, factoriser aⁿ − bⁿ et démontrer qu’une fraction rationnelle entière est irréductible.',
      conceptExplanation:
        'Les combinaisons linéaires résolvent deux grands types de problèmes : 1) trouver les entiers n tels qu’une expression affine en n en divise une autre, en se ramenant à une liste finie de diviseurs d’une constante (sans oublier de vérifier la réciproque si on a multiplié par un coefficient) ; 2) démontrer l’irréductibilité d’une fraction A(n)/B(n) en montrant que tout diviseur commun positif vaut 1.',
      keyRule: 'Raisonner par équivalence ou toujours vérifier les valeurs trouvées dans l’énoncé initial !',
      formulas: [
        { name: 'Factorisation fondamentale', formula: '(a - b) \\mid (a^n - b^n) \\qquad (\\forall a, b \\in \\mathbb{Z},\\; n \\in \\mathbb{N}^*)' },
      ],
      workedExample: {
        title: 'Irréductibilité de (15n² + 8n + 6)/(30n² + 21n + 13)',
        statement: 'Démontrer que pour tout $n \\in \\mathbb{Z}$, la fraction $\\frac{15n^2 + 8n + 6}{30n^2 + 21n + 13}$ est irréductible.',
        methodSteps: [
          'Soit $d > 0$ un diviseur commun à $A = 30n^2 + 21n + 13$ et $B = 15n^2 + 8n + 6$.',
          'Alors $d \\mid (A - 2B) = 5n + 1$.',
          'Or $B = (3n + 1)(5n + 1) + 5$, donc $d \\mid (B - (3n + 1)(5n + 1)) = 5$, d’où $d \\in \\{1, 5\\}$.',
          'Comme $5$ ne divise jamais $5n + 1$, $d \\ne 5$, donc $d = 1$.',
        ],
        conclusion: 'L’unique diviseur commun positif est $1$ : la fraction est irréductible pour tout $n \\in \\mathbb{Z}$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p03',
      order: 3,
      title: 'Division euclidienne dans N et dans Z',
      summary:
        'Déterminer le couple unique (q, r) dans Z × N pour des entiers positifs ou négatifs en respectant toujours 0 <= r < |b|.',
      conceptExplanation:
        'Pour tout dividende a ∈ Z et tout diviseur b ∈ Z*, la division euclidienne fournit un unique couple (q, r) ∈ Z × N tel que a = bq + r avec la condition stricte 0 <= r < |b|. Attention lorsque a < 0 : on ne se contente pas de changer le signe de q et r, il faut ajuster q d’une unité pour garder un reste positif (ex. −361 = 23 × (−16) + 7).',
      keyRule: 'Le reste euclidien est TOUJOURS positif ou nul et strictement inférieur à |b|.',
      formulas: [
        { name: 'Division euclidienne', formula: 'a = bq + r \\quad \\text{avec } 0 \\leqslant r < |b|' },
      ],
      workedExample: {
        title: 'Division euclidienne de −361 par 23 et −23',
        statement: 'Sachant que $361 = 23 \\times 15 + 16$, effectuer la division euclidienne de $-361$ par $23$ et par $-23$.',
        methodSteps: [
          'En multipliant par $-1$ : $-361 = 23 \\times (-15) - 16$ (reste négatif interdit).',
          'Soustraire et ajouter $23$ : $-361 = 23 \\times (-15 - 1) + (23 - 16) = 23 \\times (-16) + 7$.',
          'Par $-23$ : $-361 = (-23) \\times 16 + 7$.',
        ],
        conclusion: 'Par $23$ : $q = -16, r = 7$ ; par $-23$ : $q = 16, r = 7$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p04',
      order: 4,
      title: 'Congruences modulo n et résolution d’équations simples',
      summary:
        'Manipuler a ≡ b [n], utiliser la compatibilité avec +, −, × et les puissances, éviter le piège de la division et résoudre ax ≡ b [n].',
      conceptExplanation:
        'Dire que a ≡ b [n] signifie que n divise a − b, ou de façon équivalente que a et b ont le même reste modulo n. Cette relation se comporte comme une égalité pour l’addition, la soustraction, la multiplication et l’élévation à une puissance entière positive. En revanche, la simplification par un facteur c ou l’absence de diviseurs de zéro n’est valable que sous des conditions précises de primalité avec n.',
      keyRule: 'Si a ≡ b [n] et 0 <= r < n vérifie a ≡ r [n], alors r est le reste euclidien de a par n.',
      formulas: [
        { name: 'Congruence', formula: 'a \\equiv b\\;[n] \\iff n \\mid (a - b)' },
      ],
      workedExample: {
        title: 'Résoudre 3x ≡ 5 [8]',
        statement: 'Déterminer tous les entiers relatifs $x$ tels que $3x \\equiv 5\\;[8]$.',
        methodSteps: [
          'Chercher l’inverse de $3$ modulo $8$ : $3 \\times 3 = 9 \\equiv 1\\;[8]$.',
          'Multiplier les deux membres par $3$ : $9x \\equiv 15\\;[8] \\implies x \\equiv 7\\;[8]$.',
          'Vérifier la réciproque : si $x = 8k + 7$, $3x = 24k + 21 = 8(3k + 2) + 5 \\equiv 5\\;[8]$.',
        ],
        conclusion: 'L’ensemble des solutions est $S = \\{8k + 7,\\; k \\in \\mathbb{Z}\\}$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p05',
      order: 5,
      title: 'Puissances modulaires et périodicité des restes',
      summary:
        'Déterminer le cycle des restes de aⁿ modulo m, réduire de très grands exposants et démontrer la divisibilité d’expressions exponentielles.',
      conceptExplanation:
        'Pour évaluer aⁿ modulo m lorsque n est très grand (2020ⁿ, 174277^2625...), on commence par réduire la base a modulo m, puis on calcule les premières puissances successives jusqu’à obtenir 1 (ou −1). Si a^p ≡ 1 [m], la suite des restes est périodique de période p et l’exposant n se réduit modulo p (attention : jamais modulo m !).',
      keyRule: 'Réduire la base modulo m, puis réduire l’exposant modulo la période p telle que a^p ≡ 1 [m].',
      formulas: [
        { name: 'Périodicité modulaire', formula: 'a^p \\equiv 1\\;[m] \\implies a^{kp + r} \\equiv a^r\\;[m]' },
      ],
      workedExample: {
        title: 'Prouver que 11 divise 174277^2625 − 1',
        statement: 'Démontrer sans calculatrice que $174277^{2625} - 1$ est divisible par $11$.',
        methodSteps: [
          'Réduire la base : $174277 = 11 \\times 15843 + 4 \\equiv 4\\;[11]$.',
          'Calculer les puissances de $4$ mod $11$ : $4^2 = 16 \\equiv 5$, $4^3 \\equiv 9$, $4^4 \\equiv 3$, $4^5 \\equiv 12 \\equiv 1\\;[11]$.',
          'Diviser l’exposant par $5$ : $2625 = 5 \\times 525$, donc $4^{2625} = (4^5)^{525} \\equiv 1^{525} = 1\\;[11]$.',
        ],
        conclusion: '$174277^{2625} - 1 \\equiv 1 - 1 = 0\\;[11]$, donc $11$ divise $174277^{2625} - 1$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p06',
      order: 6,
      title: 'Systèmes de numération (bases 2, 8, 10, 16)',
      summary:
        'Convertir un entier entre la base 10 et une base b quelconque par divisions successives, manipuler binaire/octal/hexadécimal et résoudre des équations de changement de base.',
      conceptExplanation:
        'Tout entier naturel non nul s’écrit de façon unique en base b (>= 2) avec des chiffres compris entre 0 et b − 1. On passe de la base b à la base 10 en développant le polynôme en b, et de la base 10 à la base b par divisions euclidiennes successives par b (lecture des restes à rebours). En base 16, les chiffres 10 à 15 sont notés A à F.',
      keyRule: 'Dans toute écriture en base b, chaque chiffre a_k doit vérifier 0 <= a_k < b.',
      formulas: [
        { name: 'Développement en base b', formula: '\\overline{a_n \\dots a_0}^{\\,b} = \\sum_{k=0}^n a_k b^k' },
      ],
      workedExample: {
        title: 'Conversion de 222 en binaire puis en hexadécimal',
        statement: 'Écrire $222$ en base $2$ puis en déduire son écriture en base $16$.',
        methodSteps: [
          'Divisions par $2$ : restes successifs $0, 1, 1, 1, 1, 0, 1, 1$ (du poids faible au poids fort).',
          'En lisant de bas en haut : $222 = \\overline{11011110}^{\\,2}$.',
          'Regrouper par paquets de $4$ bits : $1101_2 = 13 = D$ et $1110_2 = 14 = E$.',
        ],
        conclusion: '$222 = \\overline{11011110}^{\\,2} = \\overline{DE}^{\\,16}$.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p07',
      order: 7,
      title: 'Critères de divisibilité par congruences',
      summary:
        'Justifier et appliquer les critères de divisibilité par 2, 3, 4, 5, 6, 8, 9, 10, 11 et 25, et trouver le reste exact d’un grand entier.',
      conceptExplanation:
        'Les congruences de 10^k modulo d expliquent tous les critères de divisibilité en base 10 : fin par bloc pour 2, 5, 10, 4, 25, 8 (car 10^m ≡ 0), somme des chiffres pour 3 et 9 (car 10 ≡ 1), et somme alternée en partant des unités pour 11 (car 10 ≡ −1). Cette même méthode s’étend immédiatement à n’importe quelle base b modulo b − 1 et b + 1.',
      keyRule: 'Pour le reste modulo 11, alterner + − + − en commençant IMPÉRATIVEMENT par le signe + sur le chiffre des unités.',
      formulas: [
        { name: 'Critère de 11', formula: 'N \\equiv \\sum_{k=0}^{n} (-1)^k a_k\\;[11]' },
      ],
      workedExample: {
        title: 'Reste modulo 11 de 6 485 958 017',
        statement: 'Déterminer par le critère de congruence le reste de $N = 6\\,485\\,958\\,017$ dans la division par $11$.',
        methodSteps: [
          'Somme des chiffres de rang pair (à partir de droite : $a_0=7$) : $7 + 0 + 5 + 5 + 4 = 21$.',
          'Somme des chiffres de rang impair : $1 + 8 + 9 + 8 + 6 = 32$.',
          'Différence : $N \\equiv 21 - 32 = -11 \\equiv 0\\;[11]$.',
        ],
        conclusion: '$N$ est divisible par $11$ (le reste vaut $0$).',
      },
      structuredSteps: p07StepsFixed,
      exercises: p07StepsFixed.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p08',
      order: 8,
      title: 'Nombres premiers et décomposition en facteurs premiers',
      summary:
        'Tester la primalité en s’arrêtant à √n, démontrer l’infinité des nombres premiers, décomposer un entier et compter ses diviseurs.',
      conceptExplanation:
        'Un nombre premier p >= 2 n’a que 1 et p comme diviseurs positifs. Pour tester si n est premier, il suffit de vérifier qu’aucun nombre premier p <= √n ne le divise. Tout entier n >= 2 se décompose de façon unique en produit de facteurs premiers ∏ p_i^(α_i), ce qui donne aussitôt son nombre total de diviseurs positifs : ∏ (α_i + 1).',
      keyRule: 'S’arrêter à √n pour les tests de primalité ; utiliser (α₁+1)...(α_r+1) pour compter les diviseurs.',
      formulas: [
        { name: 'Nombre de diviseurs positifs', formula: 'd(n) = \\prod_{i=1}^{r} (\\alpha_i + 1)' },
      ],
      workedExample: {
        title: 'Primalité de a⁴ + a² + 1',
        statement: 'Déterminer tous les entiers $a \\in \\mathbb{Z}$ tels que $a^4 + a^2 + 1$ soit premier.',
        methodSteps: [
          'Factoriser : $a^4 + a^2 + 1 = (a^2 + 1)^2 - a^2 = (a^2 - a + 1)(a^2 + a + 1)$.',
          'Les deux facteurs étant des entiers $\\geqslant 1$, le produit est premier ssi l’un vaut $1$ et l’autre est premier.',
          '$a^2 - a + 1 = 1 \\iff a = 0$ (donne $1$, non premier) ou $a = 1$ (donne $3$, premier).',
          '$a^2 + a + 1 = 1 \\iff a = 0$ ou $a = -1$ (donne $3$, premier).',
        ],
        conclusion: '$a^4 + a^2 + 1$ est premier si et seulement si $a = 1$ ou $a = -1$.',
      },
      structuredSteps: p08Steps,
      exercises: p08Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l04_divisibilite_dans_z_p09',
      order: 9,
      title: 'Stratégie de jeu et cryptographie modulaire (affine et exponentielle)',
      summary:
        'Modéliser un jeu par congruences et chiffrer/déchiffrer un message par translation modulo 26 ou par exponentiation modulo 29.',
      conceptExplanation:
        'L’arithmétique modulaire anime les jeux de stratégie (comme les bâtonnets modulo 4) et la cryptographie moderne. Tandis que le codage par décalage y ≡ x + k [26] s’inverse par simple soustraction, le codage exponentiel y ≡ x^e [p] (ici p = 29 premier) repose sur le petit théorème de Fermat (x^(p−1) ≡ 1 [p]) et une relation de Bézout ed ≡ 1 [p−1] pour retrouver la clé secrète de déchiffrement d.',
      keyRule: 'Modulo un nombre premier p, la clé secrète d inverse la clé publique e modulo p − 1 (et non modulo p !).',
      formulas: [
        { name: 'Chiffrement / Déchiffrement mod 29', formula: 'y \\equiv x^3\\;[29] \\iff x \\equiv y^{19}\\;[29] \\quad (\\text{car } 3 \\times 19 \\equiv 1\\;[28])' },
      ],
      workedExample: {
        title: 'Chiffrer et déchiffrer « MER » modulo 29',
        statement: 'Dans le code $y \\equiv x^3\\;[29]$ ($A=0 \\dots Z=25$), chiffrer `MER` et vérifier le décodage de `G`.',
        methodSteps: [
          'Rangs de `MER` : $M = 12$, $E = 4$, $R = 17$.',
          'Chiffrement : $12^3 = 1728 \\equiv 17 = R$ ; $4^3 = 64 \\equiv 6 = G$ ; $17^3 \\equiv (-12)^3 \\equiv -17 \\equiv 12 = M$, soit `RGM`.',
          'Décodage de `G` ($6$) : $6^2 \\equiv 7$, $6^4 \\equiv 20 \\equiv -9$, $6^8 \\equiv -6$, $6^{16} \\equiv 7$, donc $6^{19} = 6^{16}\\cdot 6^2\\cdot 6 \\equiv 7\\cdot 7\\cdot 6 \\equiv 4 = E$.',
        ],
        conclusion: '`MER` se chiffre en `RGM` et le décodage par $y^{19} \\bmod 29$ restitue `MER`.',
      },
      structuredSteps: p09Steps,
      exercises: p09Steps.map((s) => s.exercise),
    },
  ],
};

