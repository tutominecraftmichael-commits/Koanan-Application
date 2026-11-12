import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Prévoir l’apparition simultanée de deux corps célestes périodiques',
    paragraphText:
      'Au jour $J_0$, des élèves observent un corps céleste $A$ de période $105$ jours ; six jours plus tard ($J_0 + 6$), ils observent le corps $B$ de période $81$ jours. Une observation simultanée au jour $J_0 + n$ correspond à $n = 105x = 6 + 81y$, soit $105x - 81y = 6$ (ou, après division par $\\operatorname{PGCD}(105 ; 81) = 3$, à $35x - 27y = 2$). Pour résoudre ce type de problème périodique, l’arithmétique fournit deux outils fondamentaux : le PPCM et le PGCD.',
    konanTip: 'Dès que deux phénomènes périodiques doivent coïncider, pense au PPCM (si même départ) ou à une équation $ax + by = c$ avec le PGCD (s’il y a un décalage initial) !',
    exercise: {
      id: 'tc_m_num_l11_p01_q01',
      type: 'mcq',
      prompt: 'Si les deux corps célestes avaient été observés tous deux le MÊME jour $J_0$, au bout de combien de jours seraient-ils réapparus ensemble pour la première fois ?',
      options: [
        'Au bout de $\\operatorname{PGCD}(105 ; 81) = 3$ jours',
        'Au bout de $\\operatorname{PPCM}(105 ; 81) = 2835$ jours',
        'Au bout de $105 + 81 = 186$ jours',
        'Au bout de $105 \\times 81 = 8505$ jours',
      ],
      correctAnswerIndex: 1,
      explanation: '$105 = 3 \\times 35$ et $81 = 3 \\times 27$, avec $\\operatorname{PGCD}(35 ; 27) = 1$, donc $\\operatorname{PPCM}(105 ; 81) = 3 \\times 35 \\times 27 = 2835$ jours.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Plus Petit Commun Multiple $\\operatorname{PPCM}(a ; b)$',
    paragraphText:
      'Soient $a$ et $b$ deux entiers relatifs non nuls. On appelle Plus Petit Commun Multiple de $a$ et $b$, noté $\\operatorname{PPCM}(a ; b)$ (ou $a \\vee b$), le plus petit élément STRICTEMENT POSITIF de $a\\mathbb{Z} \\cap b\\mathbb{Z}$, où $a\\mathbb{Z}$ désigne l’ensemble des multiples de $a$. Par exemple, $4\\mathbb{Z} \\cap 6\\mathbb{Z} = \\{\\dots ; -24 ; -12 ; 0 ; 12 ; 24 ; \\dots\\}$, donc $\\operatorname{PPCM}(4 ; 6) = 12$.',
    formula: {
      name: 'Définition du PPCM',
      formula: '\\operatorname{PPCM}(a ; b) = \\min\\left((a\\mathbb{Z} \\cap b\\mathbb{Z}) \\cap \\mathbb{N}^*\\right)',
    },
    exercise: {
      id: 'tc_m_num_l11_p01_q02',
      type: 'mcq',
      prompt: 'Que vaut $\\operatorname{PPCM}(-3 ; 8)$ et pourquoi ?',
      options: [
        '$-24$',
        '$0$',
        '$24$, car $\\operatorname{PPCM}(-3 ; 8) = \\operatorname{PPCM}(3 ; 8) = 24$',
        '$1$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le PPCM est toujours un entier naturel strictement positif vérifiant $\\operatorname{PPCM}(a ; b) = \\operatorname{PPCM}(|a| ; |b|)$. Ici $\\operatorname{PPCM}(3 ; 8) = 24$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Encadrement & Divisibilité',
    stepTheme: 'violet',
    stepTitle: 'Encadrement $\\max(|a|, |b|) \\leqslant \\operatorname{PPCM}(a ; b) \\leqslant |ab|$ et cas où $b \\mid a$',
    paragraphText:
      'Pour tous entiers naturels non nuls $a$ et $b$ : $\\operatorname{PPCM}(a ; b) = \\operatorname{PPCM}(|a| ; |b|)$, $\\max(a ; b) \\leqslant \\operatorname{PPCM}(a ; b) \\leqslant ab$, et $\\operatorname{PPCM}(a ; b) = a \\iff a \\in b\\mathbb{Z}$ ($a$ est un multiple de $b$).',
    formula: {
      name: 'Bornes du PPCM',
      formula: '\\max\\{a ; b\\} \\leqslant \\operatorname{PPCM}(a ; b) \\leqslant ab \\qquad ; \\qquad \\operatorname{PPCM}(a ; b) = a \\iff b \\mid a',
    },
    exercise: {
      id: 'tc_m_num_l11_p01_q03',
      type: 'mcq',
      prompt: 'Que vaut $\\operatorname{PPCM}(48 ; 12)$ ?',
      options: [
        '$12$',
        '$48$',
        '$576$',
        '$4$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $12$ divise $48$ ($48 = 4 \\times 12$), $48$ est déjà un multiple de $12$, donc $\\operatorname{PPCM}(48 ; 12) = 48$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Multiples communs',
    stepTheme: 'violet',
    stepTitle: 'Caractérisation des multiples communs : $a\\mathbb{Z} \\cap b\\mathbb{Z} = \\mu\\mathbb{Z}$',
    paragraphText:
      'Si $\\mu = \\operatorname{PPCM}(a ; b)$, alors l’ensemble des multiples communs à $a$ et $b$ est exactement l’ensemble des multiples de $\\mu$ : $a\\mathbb{Z} \\cap b\\mathbb{Z} = \\mu\\mathbb{Z}$. Autrement dit, un entier $m$ est multiple à la fois de $a$ et de $b$ si et seulement si $m$ est multiple de $\\operatorname{PPCM}(a ; b)$.',
    formula: {
      name: 'Multiples communs = multiples du PPCM',
      formula: '\\mu = \\operatorname{PPCM}(a ; b) \\implies a\\mathbb{Z} \\cap b\\mathbb{Z} = \\mu\\mathbb{Z}',
    },
    exercise: {
      id: 'tc_m_num_l11_p01_q04',
      type: 'mcq',
      prompt: 'Quels sont tous les multiples communs positifs stricts à $4$ et $6$ inférieurs ou égaux à $50$ ?',
      options: [
        '$\\{12 ; 24 ; 36 ; 48\\}$',
        '$\\{24 ; 48\\}$',
        '$\\{2 ; 4 ; 6 ; 12\\}$',
        '$\\{12 ; 24 ; 48\\}$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Comme $\\operatorname{PPCM}(4 ; 6) = 12$, on a $4\\mathbb{Z} \\cap 6\\mathbb{Z} = 12\\mathbb{Z}$, dont les éléments dans $[1 ; 50]$ sont $12, 24, 36, 48$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Homogénéité du PPCM',
    stepTheme: 'violet',
    stepTitle: 'Propriété de multiplication : $\\operatorname{PPCM}(ka ; kb) = |k|\\operatorname{PPCM}(a ; b)$',
    paragraphText:
      'Pour tous entiers relatifs non nuls $a, b, k$, on a $\\operatorname{PPCM}(ka ; kb) = |k|\\operatorname{PPCM}(a ; b)$. Cette propriété permet de simplifier instantanément les calculs en factorisant le facteur commun ! Exemple : $\\operatorname{PPCM}(160 ; 200) = \\operatorname{PPCM}(40 \\times 4 ; 40 \\times 5) = 40 \\times \\operatorname{PPCM}(4 ; 5) = 40 \\times 20 = 800$.',
    formula: {
      name: 'Homogénéité du PPCM',
      formula: '\\operatorname{PPCM}(ka ; kb) = |k|\\,\\operatorname{PPCM}(a ; b) \\quad (k \\in \\mathbb{Z}^*)',
    },
    exercise: {
      id: 'tc_m_num_l11_p01_q05',
      type: 'mcq',
      prompt: 'Sachant que $\\operatorname{PPCM}(4 ; 5) = 20$, que vaut $\\operatorname{PPCM}(160 ; 200)$ ?',
      options: [
        '$40$',
        '$200$',
        '$800$',
        '$3200$',
      ],
      correctAnswerIndex: 2,
      explanation: '$160 = 40 \\times 4$ et $200 = 40 \\times 5$, donc $\\operatorname{PPCM}(160 ; 200) = 40 \\times \\operatorname{PPCM}(4 ; 5) = 40 \\times 20 = 800$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur classique sur PPCM',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais oublier de multiplier par $|k|$ ET par $\\operatorname{PPCM}(a ; b)$',
    paragraphText:
      'Attention : lorsque tu factorises par $40$ dans $\\operatorname{PPCM}(160 ; 200) = 40 \\times \\operatorname{PPCM}(4 ; 5)$, le résultat final est $40 \\times 20 = 800$ (et surtout pas $40$ tout seul !). De même, $\\operatorname{PPCM}(a ; b)$ est toujours supérieur ou égal à $\\max(|a| ; |b|)$ : s’il est plus petit que l’un des deux nombres, tu as forcément commis une erreur !',
    exercise: {
      id: 'tc_m_num_l11_p01_q06',
      type: 'mcq',
      prompt: 'Sans aucun calcul détaillé, pourquoi $\\operatorname{PPCM}(-40 ; 60) = 20$ est-elle une réponse impossible ?',
      options: [
        'Parce que le PPCM doit être inférieur à $40$',
        'Parce que le PPCM de deux entiers non nuls est toujours supérieur ou égal à $\\max(|a|, |b|) = 60$',
        'Parce que $-40$ est négatif donc le PPCM doit être négatif',
        'Parce que $\\operatorname{PPCM}(a ; b)$ vaut toujours $|ab|$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le PPCM est positif et multiple de $60$, donc il vaut au moins $60$ (ici $\\operatorname{PPCM}(40 ; 60) = 120$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Application',
    stepTheme: 'slate',
    stepTitle: 'Calculer $\\operatorname{PPCM}(40 ; 60)$ à partir de $\\operatorname{PPCM}(4 ; 6) = 12$',
    paragraphText:
      'En repérant le facteur commun $k = 10$ : $\\operatorname{PPCM}(40 ; 60) = \\operatorname{PPCM}(10 \\times 4 ; 10 \\times 6) = 10 \\times \\operatorname{PPCM}(4 ; 6) = 10 \\times 12 = 120$.',
    exercise: {
      id: 'tc_m_num_l11_p01_q07',
      type: 'mcq',
      prompt: 'Sachant que $\\operatorname{PPCM}(12 ; 18) = 36$, que vaut $\\operatorname{PPCM}(-36 ; 54)$ ?',
      options: [
        '$54$',
        '$108$',
        '$72$',
        '$162$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{PPCM}(-36 ; 54) = \\operatorname{PPCM}(3 \\times 12 ; 3 \\times 18) = 3 \\times \\operatorname{PPCM}(12 ; 18) = 3 \\times 36 = 108$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Plus Grand Commun Diviseur $\\operatorname{PGCD}(a ; b)$',
    paragraphText:
      'Soient $a$ et $b$ deux entiers relatifs non nuls, et $\\mathcal{D}(a ; b)$ l’ensemble des diviseurs communs à $a$ et $b$. On appelle Plus Grand Commun Diviseur de $a$ et $b$, noté $\\operatorname{PGCD}(a ; b)$ (ou $a \\wedge b$), le plus grand élément de $\\mathcal{D}(a ; b)$. Par exemple, $\\mathcal{D}(18 ; 15) = \\{-3 ; -1 ; 1 ; 3\\}$, donc $\\operatorname{PGCD}(18 ; 15) = 3$.',
    formula: {
      name: 'Bornes et divisibilité du PGCD',
      formula: '1 \\leqslant \\operatorname{PGCD}(a ; b) \\leqslant \\min\\{|a| ; |b|\\} \\qquad ; \\qquad \\operatorname{PGCD}(a ; b) = |a| \\iff a \\mid b',
    },
    exercise: {
      id: 'tc_m_num_l11_p02_q01',
      type: 'mcq',
      prompt: 'Que valent respectivement $\\operatorname{PGCD}(-75 ; -25)$ et $\\operatorname{PGCD}(132 ; -96)$ ?',
      options: [
        '$-25$ et $12$',
        '$25$ et $12$',
        '$25$ et $24$',
        '$75$ et $12$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{PGCD}(-75 ; -25) = \\operatorname{PGCD}(75 ; 25) = 25$ (car $25 \\mid 75$). Et $\\operatorname{PGCD}(132 ; 96) = 12 \\operatorname{PGCD}(11 ; 8) = 12 \\times 1 = 12$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Propriétés du PGCD',
    stepTheme: 'violet',
    stepTitle: 'Diviseurs communs $\\mathcal{D}(a ; b) = \\mathcal{D}(\\delta)$, homogénéité et $\\delta\\mathbb{Z}$',
    paragraphText:
      'Soit $\\delta = \\operatorname{PGCD}(a ; b)$. Trois propriétés majeures s’appliquent : 1) Un entier divise $a$ et $b$ si et seulement si il divise $\\delta$ : $\\mathcal{D}(a ; b) = \\mathcal{D}(\\delta)$. 2) $\\operatorname{PGCD}(ka ; kb) = |k|\\operatorname{PGCD}(a ; b)$. 3) Un entier $m$ est un multiple de $\\delta$ si et seulement si il existe $u, v \\in \\mathbb{Z}$ tels que $m = au + bv$, autrement dit $\\delta\\mathbb{Z} = \\{au + bv \\;;\\; u, v \\in \\mathbb{Z}\\}$.',
    formula: {
      name: 'Propriétés fondamentales du PGCD',
      formula: '\\mathcal{D}(a ; b) = \\mathcal{D}(\\delta) \\quad ; \\quad \\operatorname{PGCD}(ka ; kb) = |k|\\operatorname{PGCD}(a ; b) \\quad ; \\quad \\delta\\mathbb{Z} = a\\mathbb{Z} + b\\mathbb{Z}',
    },
    exercise: {
      id: 'tc_m_num_l11_p02_q02',
      type: 'mcq',
      prompt: 'Sachant que $\\operatorname{PGCD}(18 ; 15) = 3$, pourquoi existe-t-il deux entiers relatifs $u$ et $v$ tels que $144 = 18u + 15v$ ?',
      options: [
        'Parce que $144 = 18 \\times 8$',
        'Parce que $144 = 3 \\times 48$ est un multiple de $\\delta = \\operatorname{PGCD}(18 ; 15) = 3$',
        'Parce que $18$ et $15$ sont premiers entre eux',
        'Parce que $144$ est pair',
      ],
      correctAnswerIndex: 1,
      explanation: 'D’après la propriété $\\delta\\mathbb{Z} = \\{18u + 15v\\}$, $144$ s’écrit $18u + 15v$ parce que $\\delta = 3$ divise $144$ ($144 = 3 \\times 48$). (Bien sûr, comme $144 = 18 \\times 8 + 15 \\times 0$, $(8 ; 0)$ convient aussi !)',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Algorithme d’Euclide',
    stepTheme: 'emerald',
    stepTitle: 'Calculer $\\operatorname{PGCD}(a ; b)$ par divisions euclidiennes successives',
    paragraphText:
      'Pour $a > b > 0$, si $r$ est le reste de la division euclidienne de $a$ par $b$ ($a = bq + r$ avec $0 \\leqslant r < b$) : si $r = 0$, alors $\\operatorname{PGCD}(a ; b) = b$ ; si $r \\ne 0$, alors $\\operatorname{PGCD}(a ; b) = \\operatorname{PGCD}(b ; r)$. Le PGCD est donc le DERNIER RESTE NON NUL dans la suite des divisions euclidiennes successives.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Algorithme d’Euclide pour PGCD(2016 ; 1188)',
      tableData: {
        headers: ['a', '2016', '1188', '828', '360', '108'],
        rows: [
          ['b', 1188, 828, 360, 108, 36],
          ['r', 828, 360, 108, 36, 0],
          ['q', 1, 1, 2, 3, 3],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l11_p02_q03',
      type: 'mcq',
      prompt: 'À l’aide du tableau de l’algorithme d’Euclide pour $2016$ et $1188$, que vaut $\\operatorname{PGCD}(2016 ; 1188)$ ?',
      options: [
        '$0$',
        '$108$',
        '$36$',
        '$1$',
      ],
      correctAnswerIndex: 2,
      explanation: 'Le dernier reste non nul de la ligne $r$ est $36$ (à l’étape $360 = 108 \\times 3 + 36$, puis $108 = 36 \\times 3 + 0$), donc $\\operatorname{PGCD}(2016 ; 1188) = 36$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Remontée d’Euclide',
    stepTheme: 'emerald',
    stepTitle: 'Trouver $(u ; v)$ tel que $au + bv = d$ en remontant l’algorithme d’Euclide',
    paragraphText:
      'Pour trouver un couple $(u ; v)$ vérifiant $2016u + 1188v = 36$, on isole le dernier reste non nul $36$ et on remplace successivement chaque reste de bas en haut : $36 = 360 - 3 \\times 108$, puis $108 = 828 - 2 \\times 360 \\implies 36 = 7 \\times 360 - 3 \\times 828$, puis $360 = 1188 - 828 \\implies 36 = 7 \\times 1188 - 10 \\times 828$, et $828 = 2016 - 1188 \\implies 36 = 17 \\times 1188 - 10 \\times 2016$. Le couple $(-10 ; 17)$ vérifie l’égalité !',
    exercise: {
      id: 'tc_m_num_l11_p02_q04',
      type: 'mcq',
      prompt: 'En remontant l’algorithme d’Euclide sur $(47 ; 13)$ ($47=13\\times 3+8$, $13=8\\times 1+5$, $8=5\\times 1+3$, $5=3\\times 1+2$, $3=2\\times 1+1$), quel couple $(u ; v)$ vérifie $13u + 47v = 1$ ?',
      options: [
        '$(18 ; -5)$',
        '$(-18 ; 5)$',
        '$(-5 ; 18)$',
        '$(11 ; -3)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$13 \\times (-18) + 47 \\times 5 = -234 + 235 = 1$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Réduction par le PGCD',
    stepTheme: 'violet',
    stepTitle: 'Factoriser $a = da’$ et $b = db’$ pour obtenir $a’$ et $b’$ premiers entre eux',
    paragraphText:
      'Si $d$ est un diviseur commun de $a$ et $b$, alors $a = da’$ et $b = db’$ donnent $\\operatorname{PGCD}(a ; b) = d \\cdot \\operatorname{PGCD}(a’ ; b’)$. Conséquence fondamentale : $d$ est le PGCD de $a$ et $b$ SI ET SEULEMENT SI les quotients $a’ = a/d$ et $b’ = b/d$ sont premiers entre eux ($\\operatorname{PGCD}(a’ ; b’) = 1$).',
    formula: {
      name: 'Caractérisation par division par d',
      formula: 'd = \\operatorname{PGCD}(a ; b) \\iff \\exists a’, b’ \\in \\mathbb{Z},\\; a = da’,\\; b = db’ \\text{ et } \\operatorname{PGCD}(a’ ; b’) = 1',
    },
    exercise: {
      id: 'tc_m_num_l11_p02_q05',
      type: 'mcq',
      prompt: 'Si $\\operatorname{PGCD}(36 ; 30) = 6$, que vaut $\\operatorname{PGCD}\\left(\\frac{36}{6} ; \\frac{30}{6}\\right)$ ?',
      options: [
        '$6$',
        '$1$',
        '$5$',
        '$30$',
      ],
      correctAnswerIndex: 1,
      explanation: '$36/6 = 6$ et $30/6 = 5$ sont nécessairement premiers entre eux : $\\operatorname{PGCD}(6 ; 5) = 1$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur dans la remontée',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais regrouper $a$ et $b$ avant la fin de la remontée d’Euclide !',
    paragraphText:
      'Lorsqu’on remonte l’algorithme d’Euclide, laisse TOUJOURS les nombres sous la forme « coefficient $\\times$ dividende » (ex. $7 \\times 360 - 3 \\times 828$) SANS effectuer les multiplications intermédiaires ! Sinon on perd la trace de $a$ et $b$. Vérifie toujours à la fin que $au + bv$ vaut exactement $d$.',
    exercise: {
      id: 'tc_m_num_l11_p02_q06',
      type: 'mcq',
      prompt: 'Si $2016 \\times (-10) + 1188 \\times 17 = 36$, que vaut $2016 \\times 23 + 1188 \\times (-39)$ ?',
      options: [
        '$0$',
        '$36$, car $(23 ; -39) = (-10 + 33 ; 17 - 56)$ décale de $(+1188/36 ; -2016/36)$',
        '$-36$',
        '$72$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le couple $(u ; v)$ n’est pas unique ! Ici $2016 \\times 23 + 1188 \\times (-39) = 46\\,368 - 46\\,332 = 36$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Application',
    stepTheme: 'slate',
    stepTitle: 'Utiliser $\\operatorname{PGCD}(ka ; kb) = |k|\\operatorname{PGCD}(a ; b)$',
    paragraphText:
      'Sachant que $\\operatorname{PGCD}(18 ; 15) = 3$, on en déduit immédiatement $\\operatorname{PGCD}(36 ; 30) = \\operatorname{PGCD}(2 \\times 18 ; 2 \\times 15) = 2 \\times 3 = 6$, sans refaire d’algorithme d’Euclide.',
    exercise: {
      id: 'tc_m_num_l11_p02_q07',
      type: 'mcq',
      prompt: 'Sachant que $\\operatorname{PGCD}(2016 ; 1188) = 36$, que vaut $\\operatorname{PGCD}(20160 ; -11880)$ ?',
      options: [
        '$36$',
        '$360$',
        '$-360$',
        '$10$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{PGCD}(20160 ; -11880) = \\operatorname{PGCD}(10 \\times 2016 ; 10 \\times 1188) = 10 \\times 36 = 360$.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Nombres premiers entre eux ($\\operatorname{PGCD}(a ; b) = 1$)',
    paragraphText:
      'Deux entiers relatifs non nuls $a$ et $b$ sont dits PREMIERS ENTRE EUX lorsque $\\operatorname{PGCD}(a ; b) = 1$ (leurs seuls diviseurs communs sont $-1$ et $1$). Exemple fondamental : si $p$ est un nombre premier, alors pour tout entier $a$, soit $p \\mid a$ (et $\\operatorname{PGCD}(a ; p) = p$), soit $p \\nmid a$ (et $\\operatorname{PGCD}(a ; p) = 1$). Ainsi $7$ étant premier et ne divisant pas $25$, $25$ et $7$ sont premiers entre eux !',
    formula: {
      name: 'Premiers entre eux',
      formula: 'a \\text{ et } b \\text{ premiers entre eux} \\iff \\operatorname{PGCD}(a ; b) = 1',
    },
    exercise: {
      id: 'tc_m_num_l11_p03_q01',
      type: 'mcq',
      prompt: 'Soit $p$ un nombre premier qui ne divise pas l’entier $a$. Que vaut $\\operatorname{PGCD}(a ; p)$ ?',
      options: [
        '$p$',
        '$1$',
        '$0$',
        '$a$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les seuls diviseurs positifs de $p$ sont $1$ et $p$. Comme $p$ ne divise pas $a$, le seul diviseur positif commun à $a$ et $p$ est $1$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Théorème de Bézout',
    stepTheme: 'violet',
    stepTitle: 'Théorème de Bézout : équivalence $au + bv = 1$',
    paragraphText:
      'Théorème de Bézout : Deux entiers relatifs non nuls $a$ et $b$ sont premiers entre eux SI ET SEULEMENT SI il existe deux entiers relatifs $u$ et $v$ tels que $au + bv = 1$. Par exemple, comme $25 \\times 2 + 7 \\times (-7) = 50 - 49 = 1$, $25$ et $7$ sont premiers entre eux. Attention : si $au + bv = d$ avec $d > 1$, on peut seulement affirmer que $\\operatorname{PGCD}(a ; b)$ DIVISE $d$ (pas forcément égal à $d$ !).',
    formula: {
      name: 'Théorème de Bézout',
      formula: '\\operatorname{PGCD}(a ; b) = 1 \\iff \\exists (u ; v) \\in \\mathbb{Z}^2,\\; au + bv = 1',
    },
    exercise: {
      id: 'tc_m_num_l11_p03_q02',
      type: 'mcq',
      prompt: 'Pour tout entier relatif $n$, l’identité $(2n + 3) \\times 1 - (2n + 2) \\times 1 = 1$ prouve d’après Bézout que :',
      options: [
        '$2n + 3$ est toujours un nombre premier',
        'Pour tout $n \\in \\mathbb{Z}$, $2n + 3$ et $2n + 2$ sont premiers entre eux',
        '$\\operatorname{PGCD}(2n + 3 ; 2n + 2) = 2$',
        '$2n + 2$ divise $2n + 3$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Avec $u = 1$ et $v = -1$, $(2n+3)u + (2n+2)v = 1$ : d’après le théorème de Bézout, ils sont premiers entre eux pour tout $n \\in \\mathbb{Z}$ !',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Théorème de Gauss',
    stepTheme: 'violet',
    stepTitle: 'Théorème de Gauss : $a \\mid bc$ et $\\operatorname{PGCD}(a ; b) = 1 \\implies a \\mid c$',
    paragraphText:
      'Théorème de Gauss : Soient $a, b, c$ trois entiers relatifs non nuls. Si $a$ divise le produit $bc$ ET si $a$ et $b$ sont premiers entre eux, alors $a$ divise $c$. Démonstration via Bézout : $au + bv = 1 \\implies acu + bcv = c$ ; comme $a \\mid acu$ et $a \\mid bcv$ (car $a \\mid bc$), $a$ divise leur somme $c$.',
    formula: {
      name: 'Théorème de Gauss',
      formula: '(a \\mid bc \\text{ et } \\operatorname{PGCD}(a ; b) = 1) \\implies a \\mid c',
    },
    exercise: {
      id: 'tc_m_num_l11_p03_q03',
      type: 'mcq',
      prompt: 'Soient $x, y \\in \\mathbb{Z}$ tels que $2x - 5y = 0$. En appliquant le théorème de Gauss, quelle forme ont nécessairement $x$ et $y$ ?',
      options: [
        '$x = 2k$ et $y = 5k$ ($k \\in \\mathbb{Z}$)',
        '$x = 5k$ et $y = 2k$ ($k \\in \\mathbb{Z}$)',
        '$x = 5$ et $y = 2$ uniquement',
        '$x = 10k$ et $y = 5k$ ($k \\in \\mathbb{Z}$)',
      ],
      correctAnswerIndex: 1,
      explanation: '$2x = 5y \\implies 2 \\mid 5y$. Comme $\\operatorname{PGCD}(2 ; 5) = 1$, Gauss donne $2 \\mid y$, soit $y = 2k$ ($k \\in \\mathbb{Z}$), puis $2x = 5(2k) \\implies x = 5k$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Corollaires de Gauss & Bézout',
    stepTheme: 'violet',
    stepTitle: 'Trois conséquences essentielles des nombres premiers entre eux',
    paragraphText:
      'Soient $a, b, c$ non nuls : 1) Si $a \\wedge b = 1$ et $a \\wedge c = 1$, alors $a \\wedge (bc) = 1$ (et par suite $a^m \\wedge b^n = 1$). 2) Si $a \\mid c$ ET $b \\mid c$ ET $a \\wedge b = 1$, alors le produit $ab$ divise $c$ ! 3) Si $a \\wedge b = 1$ ($a, b > 0$), alors $\\operatorname{PPCM}(a ; b) = ab$.',
    formula: {
      name: 'Corollaires clés',
      formula: '(a \\mid c,\\; b \\mid c \\text{ et } a \\wedge b = 1) \\implies ab \\mid c \\qquad ; \\qquad a \\wedge b = 1 \\implies \\operatorname{PPCM}(a ; b) = ab',
    },
    exercise: {
      id: 'tc_m_num_l11_p03_q04',
      type: 'mcq',
      prompt: 'Un entier $N$ est divisible à la fois par $4$ et par $9$. Pourquoi est-il nécessairement divisible par $36$ ?',
      options: [
        'Parce que $4 + 9$ divise $36$',
        'Parce que $4 \\mid N$, $9 \\mid N$ et $\\operatorname{PGCD}(4 ; 9) = 1$, donc $4 \\times 9 = 36 \\mid N$',
        'Parce que $4$ et $9$ sont premiers',
        'Ce n’est pas toujours vrai (contre-exemple $N = 18$)',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $4$ et $9$ sont premiers entre eux, si un entier est multiple de $4$ et de $9$, il est multiple de $4 \\times 9 = 36$. (En revanche, être divisible par $4$ et par $6$ n’entraîne que la divisibilité par $\\operatorname{PPCM}(4 ; 6) = 12$, pas par $24$ !)',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Simplification modulo n',
    stepTheme: 'emerald',
    stepTitle: 'Simplifier une congruence $ab \\equiv ac \\pmod n$ quand $a \\wedge n = 1$',
    paragraphText:
      'Attention : en arithmétique modulaire, on ne peut PAS diviser une congruence par $a$ n’importe comment ! Si $a$ et $n$ sont PREMIERS ENTRE EUX ($\\operatorname{PGCD}(a ; n) = 1$), alors $ab \\equiv ac \\pmod n \\implies b \\equiv c \\pmod n$ (par le théorème de Gauss appliqué à $n \\mid a(b - c)$). Par exemple, $25a \\equiv 100 \\pmod 7$, soit $25a \\equiv 25 \\times 4 \\pmod 7$ : comme $\\operatorname{PGCD}(25 ; 7) = 1$, on simplifie par $25$ pour obtenir $a \\equiv 4 \\pmod 7$ !',
    formula: {
      name: 'Simplification de congruence',
      formula: '(\\operatorname{PGCD}(a ; n) = 1 \\text{ et } ab \\equiv ac \\pmod n) \\implies b \\equiv c \\pmod n',
    },
    exercise: {
      id: 'tc_m_num_l11_p03_q05',
      type: 'mcq',
      prompt: 'Si $25a \\equiv 100 \\pmod 7$, que peut-on conclure pour $a$ et pourquoi ?',
      options: [
        '$a \\equiv 4 \\pmod 7$ car $100 = 25 \\times 4$ et $\\operatorname{PGCD}(25 ; 7) = 1$',
        '$a \\equiv 4 \\pmod{1}$ car on divise aussi le module par $7$',
        'On ne peut rien simplifier',
        '$a \\equiv 25 \\pmod 7$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Comme $25$ et $7$ sont premiers entre eux, on simplifie $25a \\equiv 25 \\times 4 \\pmod 7$ par $25$, ce qui donne $a \\equiv 4 \\pmod 7$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Pièges sur Bézout & Gauss',
    stepTheme: 'orange',
    stepTitle: 'Les 2 hypothèses indispensables : $au + bv = 1$ (pas $2$ !) et $a \\wedge b = 1$ dans Gauss',
    paragraphText:
      'Piège 1 : si $au + bv = 3$, cela ne prouve PAS que $\\operatorname{PGCD}(a ; b) = 3$, mais seulement que $\\operatorname{PGCD}(a ; b) \\mid 3$ (il peut valoir $1$ ou $3$). Seul le cas $= 1$ est une équivalence ! Piège 2 : $4 \\mid 6x$ n’implique PAS $4 \\mid x$ car $\\operatorname{PGCD}(4 ; 6) = 2 \\ne 1$ (on simplifie d’abord : $2 \\mid 3x$, puis $2 \\mid x$).',
    exercise: {
      id: 'tc_m_num_l11_p03_q06',
      type: 'mcq',
      prompt: 'Sachant que $4$ divise $6x$ ($x \\in \\mathbb{Z}$), quelle est la conclusion exacte ?',
      options: [
        '$4$ divise $x$ par le théorème de Gauss',
        '$2$ divise $x$ (après simplification : $4 \\mid 6x \\iff 2 \\mid 3x$ et $\\operatorname{PGCD}(2 ; 3) = 1$)',
        '$6$ divise $x$',
        '$x$ est impair',
      ],
      correctAnswerIndex: 1,
      explanation: '$4$ et $6$ ne sont pas premiers entre eux ! $6x = 4k \\iff 3x = 2k \\implies 2 \\mid 3x$, et maintenant $\\operatorname{PGCD}(2 ; 3) = 1$, donc Gauss donne $2 \\mid x$. (Contre-exemple à $4 \\mid x$ : $x = 2$, $4 \\mid 12$ mais $4 \\nmid 2$.)',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Entraînement',
    stepTheme: 'slate',
    stepTitle: 'Vérifier qu’une congruence n’est simplifiable qu’après contrôle du PGCD',
    paragraphText:
      'Si $6x \\equiv 12 \\pmod{10}$, $\\operatorname{PGCD}(6 ; 10) = 2 \\ne 1$ : simplifier naïvement donnerait $x \\equiv 2 \\pmod{10}$, en oubliant la solution $x \\equiv 7 \\pmod{10}$ ($6 \\times 7 = 42 \\equiv 12 \\pmod{10}$ !). Quand $\\operatorname{PGCD}(a ; n) = d$, il faut diviser TOUTE la congruence, module compris, par $d$ : $3x \\equiv 6 \\pmod 5 \\iff x \\equiv 2 \\pmod 5$ !',
    exercise: {
      id: 'tc_m_num_l11_p03_q07',
      type: 'mcq',
      prompt: 'Quelles sont les solutions modulo $10$ de $6x \\equiv 12 \\pmod{10}$ ?',
      options: [
        '$x \\equiv 2 \\pmod{10}$ uniquement',
        '$x \\equiv 2 \\pmod{5}$ (c’est-à-dire $x \\equiv 2 \\pmod{10}$ ou $x \\equiv 7 \\pmod{10}$)',
        '$x \\equiv 0 \\pmod{10}$',
        'Aucune solution',
      ],
      correctAnswerIndex: 1,
      explanation: '$6x - 12 = 10k \\iff 3x - 6 = 5k \\iff 3(x - 2) \\equiv 0 \\pmod 5$. Comme $\\operatorname{PGCD}(3 ; 5) = 1$, Gauss donne $x \\equiv 2 \\pmod 5$, soit $2$ et $7$ modulo $10$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Relation PPCM × PGCD',
    stepTheme: 'violet',
    stepTitle: 'Formule fondamentale $\\operatorname{PPCM}(a ; b) \\times \\operatorname{PGCD}(a ; b) = ab$',
    paragraphText:
      'Pour tous entiers naturels non nuls $a$ et $b$ (et plus généralement $|ab|$ pour des relatifs) : $\\operatorname{PPCM}(a ; b) \\times \\operatorname{PGCD}(a ; b) = ab$. Dès que l’on a trouvé $\\operatorname{PGCD}(a ; b)$ par l’algorithme d’Euclide, une simple division donne $\\operatorname{PPCM}(a ; b) = \\frac{ab}{\\operatorname{PGCD}(a ; b)}$ !',
    formula: {
      name: 'Lien entre PPCM et PGCD',
      formula: '\\operatorname{PPCM}(a ; b) \\times \\operatorname{PGCD}(a ; b) = ab \\qquad (a, b \\in \\mathbb{N}^*)',
    },
    exercise: {
      id: 'tc_m_num_l11_p04_q01',
      type: 'mcq',
      prompt: 'Sachant que $\\operatorname{PGCD}(18 ; 15) = 3$, que vaut $\\operatorname{PPCM}(18 ; 15)$ ?',
      options: [
        '$54$',
        '$90$',
        '$270$',
        '$45$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{PPCM}(18 ; 15) = \\frac{18 \\times 15}{\\operatorname{PGCD}(18 ; 15)} = \\frac{270}{3} = 90$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Système Somme & PGCD (Ex 4)',
    stepTheme: 'emerald',
    stepTitle: 'Résoudre un système avec $\\operatorname{PGCD}(x ; y) = d$ et $x + y = S$',
    paragraphText:
      'Pour résoudre dans $\\mathbb{N}^2$ le système $\\begin{cases} \\operatorname{PGCD}(x ; y) = 354 \\\\ x + y = 5664 \\end{cases}$, la méthode universelle consiste à poser $x = 354x’$ et $y = 354y’$ avec $x’, y’ \\in \\mathbb{N}^*$ et $\\operatorname{PGCD}(x’ ; y’) = 1$. On substitue dans la deuxième équation : $354(x’ + y’) = 5664 \\iff x’ + y’ = 16$. On liste les couples $(x’ ; y’)$ d’entiers strictement positifs de somme $16$ ET premiers entre eux !',
    exercise: {
      id: 'tc_m_num_l11_p04_q02',
      type: 'mcq',
      prompt: 'Dans le système $\\operatorname{PGCD}(x ; y) = 354$ et $x + y = 5664$, quels couples $(x’ ; y’)$ d’entiers $\\geqslant 1$ avec $x’ + y’ = 16$ et $\\operatorname{PGCD}(x’ ; y’) = 1$ conviennent ?',
      options: [
        'Les $8$ couples impairs : $(1;15), (3;13), (5;11), (7;9)$ et leurs symétriques',
        'Uniquement $(1 ; 15)$, $(3 ; 13)$ et $(5 ; 11)$',
        'Tous les couples de somme $16$, dont $(2 ; 14)$ et $(4 ; 12)$',
        'Uniquement $(8 ; 8)$',
      ],
      correctAnswerIndex: 0,
      explanation: 'Si $x’$ et $y’$ sont pairs, leur PGCD vaut au moins $2 \\ne 1$. Il reste donc tous les couples d’entiers impairs de somme $16$ (tous premiers entre eux car $16 = 2^4$) : $(1;15), (15;1), (3;13), (13;3), (5;11), (11;5), (7;9), (9;7)$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Système Produit & PGCD (Ex 5)',
    stepTheme: 'emerald',
    stepTitle: 'Résoudre dans $\\mathbb{N}^2$ : $\\operatorname{PGCD}(x ; y) = 28$ et $xy = 8624$',
    paragraphText:
      'Même réflexion : poser $x = 28x’$ et $y = 28y’$ avec $\\operatorname{PGCD}(x’ ; y’) = 1$. En remplaçant dans le produit : $(28x’)(28y’) = 8624 \\iff 784 x’ y’ = 8624 \\iff x’ y’ = 11$. Comme $11$ est premier, les seuls couples d’entiers naturels de produit $11$ sont $(1 ; 11)$ et $(11 ; 1)$, tous deux premiers entre eux ! En remultipliant par $28$, on obtient $(28 ; 308)$ et $(308 ; 28)$.',
    exercise: {
      id: 'tc_m_num_l11_p04_q03',
      type: 'mcq',
      prompt: 'Quelles sont toutes les solutions dans $\\mathbb{N}^2$ du système $\\begin{cases} \\operatorname{PGCD}(x ; y) = 28 \\\\ xy = 8624 \\end{cases}$ ?',
      options: [
        '$(28 ; 308)$ uniquement',
        '$(28 ; 308)$ et $(308 ; 28)$',
        '$(1 ; 11)$ et $(11 ; 1)$',
        '$(56 ; 154)$ et $(154 ; 56)$',
      ],
      correctAnswerIndex: 1,
      explanation: '$x’ y’ = \\frac{8624}{28^2} = \\frac{8624}{784} = 11$, donnant $(x’ ; y’) \\in \\{(1 ; 11) ; (11 ; 1)\\}$, donc $(x ; y) \\in \\{(28 ; 308) ; (308 ; 28)\\}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Système PPCM & PGCD',
    stepTheme: 'blue',
    stepTitle: 'Utiliser $ab = d\\mu$ quand on connaît le PGCD $d$ et le PPCM $\\mu$',
    paragraphText:
      'Si l’on donne $\\operatorname{PGCD}(x ; y) = d$ et $\\operatorname{PPCM}(x ; y) = \\mu$, en posant $x = dx’$ et $y = dy’$ avec $x’ \\wedge y’ = 1$, la formule $\\operatorname{PPCM}(x ; y) = d x’ y’$ donne immédiatement $x’ y’ = \\frac{\\mu}{d}$ ! (Si $d$ ne divise pas $\\mu$, le système n’a aucune solution !)',
    exercise: {
      id: 'tc_m_num_l11_p04_q04',
      type: 'mcq',
      prompt: 'Résoudre dans $\\mathbb{N}^2$ le système $\\begin{cases} \\operatorname{PGCD}(x ; y) = 6 \\\\ \\operatorname{PPCM}(x ; y) = 90 \\end{cases}$.',
      options: [
        '$(6 ; 90)$, $(90 ; 6)$, $(18 ; 30)$ et $(30 ; 18)$',
        '$(6 ; 90)$ et $(12 ; 45)$',
        '$(18 ; 30)$ uniquement',
        'Aucune solution car $6 \\nmid 90$',
      ],
      correctAnswerIndex: 0,
      explanation: '$x = 6x’$, $y = 6y’$ ($x’ \\wedge y’ = 1$) donne $x’ y’ = \\frac{90}{6} = 15$. Les diviseurs de $15$ premiers entre eux sont $(1;15), (15;1), (3;5), (5;3)$, qui donnent $(6;90), (90;6), (18;30), (30;18)$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Oublier la condition x′ ∧ y′ = 1',
    stepTheme: 'orange',
    stepTitle: 'Vérifier systématiquement $\\operatorname{PGCD}(x’ ; y’) = 1$ en fin de système !',
    paragraphText:
      'Piège classique dans les systèmes avec PGCD : lorsqu’on pose $x = dx’$ et $y = dy’$, on ne doit conserver QUE les couples $(x’ ; y’)$ qui vérifient $\\operatorname{PGCD}(x’ ; y’) = 1$ ! Par exemple, si $x’ y’ = 12$, le couple $(2 ; 6)$ vérifie bien $2 \\times 6 = 12$, mais $\\operatorname{PGCD}(2 ; 6) = 2 \\ne 1$ : cela donnerait $\\operatorname{PGCD}(x ; y) = 2d \\ne d$ !',
    exercise: {
      id: 'tc_m_num_l11_p04_q05',
      type: 'mcq',
      prompt: 'Pour résoudre $\\operatorname{PGCD}(x ; y) = 5$ et $x + y = 30$, après avoir posé $x = 5x’$ et $y = 5y’$ ($x’ + y’ = 6$), pourquoi rejette-t-on le couple $(2 ; 4)$ ?',
      options: [
        'Parce que $2 + 4 \\ne 6$',
        'Parce que $\\operatorname{PGCD}(2 ; 4) = 2 \\ne 1$, ce qui donnerait $\\operatorname{PGCD}(10 ; 20) = 10 \\ne 5$',
        'Parce que $2$ est pair',
        'Parce que $x$ doit être supérieur à $y$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Parmi les couples d’entiers $\\geqslant 1$ de somme $6$, seuls $(1 ; 5)$ et $(5 ; 1)$ vérifient $\\operatorname{PGCD}(x’ ; y’) = 1$ (contrairement à $(2;4)$ et $(3;3)$).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'exemple',
    stepBadge: 'Application inverse',
    stepTheme: 'blue',
    stepTitle: 'Trouver deux entiers $a, b$ connaissant $ab$ et $\\operatorname{PPCM}(a ; b)$',
    paragraphText:
      'Grâce à $\\operatorname{PGCD}(a ; b) \\times \\operatorname{PPCM}(a ; b) = ab$, si l’on connaît le produit $ab$ et le PPCM $\\mu$, on calcule d’abord le PGCD $d = \\frac{ab}{\\mu}$, puis on se ramène au système classique avec $d$.',
    exercise: {
      id: 'tc_m_num_l11_p04_q06',
      type: 'mcq',
      prompt: 'Deux entiers naturels non nuls $a$ et $b$ vérifient $ab = 4320$ et $\\operatorname{PPCM}(a ; b) = 360$. Que vaut $\\operatorname{PGCD}(a ; b)$ ?',
      options: [
        '$10$',
        '$12$',
        '$15$',
        '$24$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{PGCD}(a ; b) = \\frac{ab}{\\operatorname{PPCM}(a ; b)} = \\frac{4320}{360} = 12$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan PGCD/PPCM',
    stepTheme: 'slate',
    stepTitle: 'Vérifier la cohérence d’un résultat $(d ; \\mu)$',
    paragraphText:
      'Deux garde-fous instantanés : 1) $\\operatorname{PGCD}(a ; b)$ divise TOUJOURS $\\operatorname{PPCM}(a ; b)$ (car $d \\mid a$ et $a \\mid \\mu$) ; 2) $\\operatorname{PGCD}(a ; b) \\times \\operatorname{PPCM}(a ; b) = |ab|$. Si $d$ ne divise pas $\\mu$, il n’y a aucun couple solution !',
    exercise: {
      id: 'tc_m_num_l11_p04_q07',
      type: 'mcq',
      prompt: 'Existe-t-il deux entiers naturels non nuls $a$ et $b$ tels que $\\operatorname{PGCD}(a ; b) = 14$ et $\\operatorname{PPCM}(a ; b) = 120$ ?',
      options: [
        'Oui, $a = 14$ et $b = 120$',
        'Non, car $\\operatorname{PGCD}(a ; b) = 14$ ne divise pas $\\operatorname{PPCM}(a ; b) = 120$',
        'Oui, $a = 28$ et $b = 60$',
        'Non, car $14 + 120$ est pair',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le PPCM est un multiple de $a$ et $b$, donc un multiple de leur PGCD. Comme $120 = 14 \\times 8 + 8$, $14 \\nmid 120$ : aucun couple n’existe !',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'propriete',
    stepBadge: 'Existence (ax + by = c)',
    stepTheme: 'violet',
    stepTitle: 'Condition d’existence des solutions de $ax + by = c$ dans $\\mathbb{Z}^2$',
    paragraphText:
      'Soient $a, b, c \\in \\mathbb{Z}$ (avec $(a ; b) \\ne (0 ; 0)$) et $d = \\operatorname{PGCD}(a ; b)$. L’équation diophantienne $(x ; y) \\in \\mathbb{Z}^2,\\; ax + by = c$ admet des solutions SI ET SEULEMENT SI $d$ divise $c$. En effet, on sait que $\\{ax + by \\;;\\; x, y \\in \\mathbb{Z}\\} = d\\mathbb{Z}$. Exemples : $4x - 6y = 1$ n’a AUCUNE solution car $\\operatorname{PGCD}(4 ; 6) = 2$ ne divise pas $1$ ; $3x - 5y = -2$ admet des solutions car $\\operatorname{PGCD}(3 ; 5) = 1$ divise $-2$.',
    formula: {
      name: 'Critère d’existence diophantienne',
      formula: 'ax + by = c \\text{ a des solutions dans } \\mathbb{Z}^2 \\iff \\operatorname{PGCD}(a ; b) \\mid c',
    },
    exercise: {
      id: 'tc_m_num_l11_p05_q01',
      type: 'mcq',
      prompt: 'Parmi ces équations dans $\\mathbb{Z}^2$, laquelle N’ADMET AUCUNE solution ?',
      options: [
        '$3x - 5y = -2$',
        '$13x + 47y = 1$',
        '$4x - 6y = 1$',
        '$18x + 15y = 144$',
      ],
      correctAnswerIndex: 2,
      explanation: '$\\operatorname{PGCD}(4 ; 6) = 2$ ne divise pas $1$ (le membre de gauche $4x - 6y$ est toujours pair, impossible qu’il vaille $1$ !).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Résolution ax + by = c',
    stepTheme: 'emerald',
    stepTitle: 'Les $4$ étapes pour résoudre $3x - 5y = -2$ dans $\\mathbb{Z}^2$',
    paragraphText:
      '1) Simplifier éventuellement par $d = \\operatorname{PGCD}(a ; b)$ (ici $d = 1$). 2) Trouver une solution particulière $(x_0 ; y_0)$ (évidente comme $(1 ; 1)$ car $3(1) - 5(1) = -2$, ou par l’algorithme d’Euclide). 3) Soustraire : $3(x - 1) - 5(y - 1) = 0 \\implies 3(x - 1) = 5(y - 1)$. Comme $5 \\wedge 3 = 1$, le théorème de Gauss donne $5 \\mid (x - 1) \\implies x = 1 + 5k$ et $y = 1 + 3k$ ($k \\in \\mathbb{Z}$). 4) Réciproque : vérifier que $3(1 + 5k) - 5(1 + 3k) = -2$ !',
    formula: {
      name: 'Forme générale des solutions (si a ∧ b = 1)',
      formula: 'S = \\{(x_0 + bk\\, ; \\, y_0 - ak),\\; k \\in \\mathbb{Z}\\} \\quad \\text{pour } ax + by = c',
    },
    exercise: {
      id: 'tc_m_num_l11_p05_q02',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des solutions dans $\\mathbb{Z}^2$ de l’équation $3x - 5y = -2$ ?',
      options: [
        '$S = \\{(1 + 3k ; 1 + 5k),\\; k \\in \\mathbb{Z}\\}$',
        '$S = \\{(1 + 5k ; 1 + 3k),\\; k \\in \\mathbb{Z}\\}$',
        '$S = \\{(1 + 5k ; 1 - 3k),\\; k \\in \\mathbb{Z}\\}$',
        '$S = \\{(1 ; 1)\\}$ uniquement',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le couple particulier $(1 ; 1)$ vérifie $3(1)-5(1)=-2$, et l’équation homogène $3u - 5v = 0$ donne $u = 5k, v = 3k$, d’où $S = \\{(1 + 5k ; 1 + 3k),\\; k \\in \\mathbb{Z}\\}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Équations ax ≡ b [n]',
    stepTheme: 'violet',
    stepTitle: 'Condition d’existence et résolution de $ax \\equiv b \\pmod n$',
    paragraphText:
      'L’équation $ax \\equiv b \\pmod n$ ($n \\in \\mathbb{N}^*$) équivaut à l’équation diophantienne $ax - ny = b$. Elle admet donc des solutions dans $\\mathbb{Z}$ SI ET SEULEMENT SI $d = \\operatorname{PGCD}(a ; n)$ divise $b$. Par exemple, $8x \\equiv 1 \\pmod 4$ n’a AUCUNE solution car $\\operatorname{PGCD}(8 ; 4) = 4$ ne divise pas $1$ ; tandis que $2x \\equiv 3 \\pmod 5$ a des solutions car $\\operatorname{PGCD}(2 ; 5) = 1 \\mid 3$.',
    formula: {
      name: 'Existence pour ax ≡ b [n]',
      formula: 'ax \\equiv b \\pmod n \\text{ admet des solutions} \\iff \\operatorname{PGCD}(a ; n) \\mid b',
    },
    exercise: {
      id: 'tc_m_num_l11_p05_q03',
      type: 'mcq',
      prompt: 'Pourquoi l’équation $8x \\equiv 1 \\pmod 4$ n’admet-elle aucune solution dans $\\mathbb{Z}$ ?',
      options: [
        'Parce que $8 > 4$',
        'Parce que $\\operatorname{PGCD}(8 ; 4) = 4$ ne divise pas $1$',
        'Parce que $1$ est impair et $4$ est pair seulement pour $x = 0$',
        'Parce que $8$ n’est pas premier',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{PGCD}(8 ; 4) = 4$ ne divise pas $1$, donc $S = \\varnothing$ (en effet $8x \\equiv 0 \\pmod 4$ pour tout $x$, jamais congru à $1$).',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Tableau de congruence',
    stepTheme: 'emerald',
    stepTitle: 'Résoudre $2x \\equiv 3 \\pmod 5$ ou $8y \\equiv 1 \\pmod{13}$ par tableau ou inverse',
    paragraphText:
      'Quand $n$ est petit (ex. $n = 5$), on peut dresser un tableau des restes modulo $5$ : pour $x \\equiv 0, 1, 2, 3, 4$, $2x \\equiv 0, 2, 4, 1, 3$. On lit directement que $2x \\equiv 3 \\pmod 5 \\iff x \\equiv 4 \\pmod 5$, soit $S = \\{4 + 5k \\;;\\; k \\in \\mathbb{Z}\\}$. On peut aussi multiplier les deux membres par l’inverse de $2$ modulo $5$, qui est $3$ ($3 \\times 2 = 6 \\equiv 1$) : $x \\equiv 3 \\times 3 = 9 \\equiv 4 \\pmod 5$ !',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau de congruence modulo 5 pour 2x ≡ 3 [5]',
      tableData: {
        headers: ['x [5]', '0', '1', '2', '3', '4'],
        rows: [['2x [5]', 0, 2, 4, 1, 3]],
      },
    },
    exercise: {
      id: 'tc_m_num_l11_p05_q04',
      type: 'mcq',
      prompt: 'Quel est l’ensemble des solutions dans $\\mathbb{Z}$ de $8y \\equiv 1 \\pmod{13}$ ?',
      options: [
        '$S = \\{8 + 13k,\\; k \\in \\mathbb{Z}\\}$',
        '$S = \\{5 + 13k,\\; k \\in \\mathbb{Z}\\}$',
        '$S = \\{2 + 13k,\\; k \\in \\mathbb{Z}\\}$',
        '$S = \\varnothing$',
      ],
      correctAnswerIndex: 1,
      explanation: '$8 \\times 5 = 40 = 3 \\times 13 + 1 \\equiv 1 \\pmod{13}$. Comme $\\operatorname{PGCD}(8 ; 13) = 1$, $8y \\equiv 8 \\times 5 \\pmod{13} \\iff y \\equiv 5 \\pmod{13}$, soit $S = \\{13k + 5,\\; k \\in \\mathbb{Z}\\}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Exercice 8 (Équation 13x + 47y = 1)',
    stepTheme: 'blue',
    stepTitle: 'Résoudre $13x + 47y = 1$ via les congruences ou Gauss',
    paragraphText:
      'Pour $(E) : 13x + 47y = 1$ : 1) $47 \\wedge 13 = 1$, donc Bézout garantit l’existence d’une solution ; 2) Euclide donne la solution particulière $(-18 ; 5)$ ; 3) Modulo $13$, $47 = 3 \\times 13 + 8$ donne $8y \\equiv 1 \\pmod{13} \\iff y \\equiv 5 \\pmod{13}$, soit $y = 5 - 13k’$ (ou $-13k + 5$) et en reportant, $x = 47k - 18$. L’ensemble des solutions est $S = \\{(47k - 18 ; -13k + 5),\\; k \\in \\mathbb{Z}\\}$.',
    exercise: {
      id: 'tc_m_num_l11_p05_q05',
      type: 'mcq',
      prompt: 'En vérifiant pour $k = 0$ et $k = 1$, le couple $(29 ; -8)$ est-il bien solution de $13x + 47y = 1$ ?',
      options: [
        'Non, car $13 \\times 29 - 47 \\times 8 = -1$',
        'Oui, c’est la solution obtenue pour $k = 1$ ($13 \\times 29 + 47 \\times (-8) = 377 - 376 = 1$)',
        'Non, $y$ doit être positif',
        'Oui, pour $k = -1$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $k = 1$, $47(1) - 18 = 29$ et $-13(1) + 5 = -8$, et $13(29) + 47(-8) = 377 - 376 = 1$ !',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Ne pas oublier la réciproque !',
    stepTheme: 'orange',
    stepTitle: 'La vérification réciproque est obligatoire après le théorème de Gauss',
    paragraphText:
      'Lorsque tu résous $ax + by = c$ par implication ($a(x - x_0) = b(y_0 - y) \\implies x = x_0 + bk,\\; y = y_0 - ak$), tu as seulement prouvé que TOUTE solution a cette forme. Pour conclure par équivalence, il faut impérativement vérifier réciproquement que $a(x_0 + bk) + b(y_0 - ak) = ax_0 + by_0 = c$ pour tout $k \\in \\mathbb{Z}$ !',
    exercise: {
      id: 'tc_m_num_l11_p05_q06',
      type: 'mcq',
      prompt: 'Dans l’équation $ax + by = c$ avec $\\operatorname{PGCD}(a ; b) = d > 1$ (et $d \\mid c$), quelle précaution faut-il prendre avant d’appliquer Gauss ?',
      options: [
        'Aucune, on applique Gauss directement à $a$ et $b$',
        'Diviser d’abord toute l’équation par $d$ afin d’obtenir des coefficients $a’$ et $b’$ premiers entre eux',
        'Multiplier l’équation par $d$',
        'Conclure qu’il n’y a qu’une seule solution',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le théorème de Gauss exige deux nombres premiers entre eux ! Si $d = \\operatorname{PGCD}(a ; b) > 1$, on commence par diviser $a, b, c$ par $d$ (exemple : $105x - 81y = 6 \\iff 35x - 27y = 2$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan diophantien',
    stepTheme: 'slate',
    stepTitle: 'Tester rapidement la paramétrisation trouvée avec $k = 0$ et $k = 1$',
    paragraphText:
      'Astuce d’examen infaillible : une fois la famille de solutions $(x_k ; y_k)$ trouvée, substitue $k = 0$ ET $k = 1$ dans l’équation initiale. Si les deux valeurs donnent bien $c$, tu es quasi certain de ne pas avoir inversé un signe devant $ak$ ou $bk$ !',
    exercise: {
      id: 'tc_m_num_l11_p05_q07',
      type: 'mcq',
      prompt: 'Laquelle de ces familles vérifie $5x + 7y = 1$ pour tout $k \\in \\mathbb{Z}$ ?',
      options: [
        '$(3 + 7k ; -2 + 5k)$',
        '$(3 + 7k ; -2 - 5k)$',
        '$(3 + 5k ; -2 - 7k)$',
        '$(-3 + 7k ; 2 - 5k)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Test en $k = 0$ : $5(3) + 7(-2) = 15 - 14 = 1$. Test en $k = 1$ : $5(10) + 7(-7) = 50 - 49 = 1$ ! (En revanche $3 + 7k ; -2 + 5k$ donnerait $5(10) + 7(3) = 71 \\ne 1$.)',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe (Cryptographie)',
    stepTheme: 'blue',
    stepTitle: 'Chiffrement affine : inverser $f(x) \\equiv 29x + 13 \\pmod{26}$',
    paragraphText:
      'On code les $26$ lettres de l’alphabet ($A = 0, B = 1, \\dots, Z = 25$) par $f(x) \\equiv 29x + 13 \\pmod{26}$. Pour décoder un message $y = f(x)$, il faut résoudre $29x + 13 \\equiv y \\pmod{26} \\iff 29x \\equiv y - 13 \\equiv y + 13 \\pmod{26}$, et donc trouver l’entier $u \\in \\{0 ; \\dots ; 25\\}$ tel que $29u \\equiv 1 \\pmod{26}$ (l’inverse de $29$ modulo $26$).',
    formula: {
      name: 'Inverse de 29 modulo 26',
      formula: '29u \\equiv 1 \\pmod{26} \\iff 29u - 26v = 1 \\implies u = 9 \\quad (9 \\times 29 = 261 = 10 \\times 26 + 1)',
    },
    exercise: {
      id: 'tc_m_num_l11_p06_q01',
      type: 'mcq',
      prompt: 'Pourquoi la fonction de codage $f(x) \\equiv 29x + 13 \\pmod{26}$ est-elle bijective (décodable sans ambiguïté) ?',
      options: [
        'Parce que $13$ est premier',
        'Parce que $\\operatorname{PGCD}(29 ; 26) = 1$, donc $29$ possède un inverse modulo $26$ ($u = 9$)',
        'Parce que $29 > 26$',
        'Parce que $26$ est pair',
      ],
      correctAnswerIndex: 1,
      explanation: 'Un codage affine $x \\mapsto ax + b \\pmod{26}$ est inversible si et seulement si $\\operatorname{PGCD}(a ; 26) = 1$. Ici $\\operatorname{PGCD}(29 ; 26) = 1$ et $29 \\times 9 - 26 \\times 10 = 1$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'methode',
    stepBadge: 'Fonction de décodage',
    stepTheme: 'emerald',
    stepTitle: 'Déduire la formule de décodage $g(y) \\equiv 9y + 13 \\pmod{26}$',
    paragraphText:
      'En multipliant les deux membres de $29x \\equiv y + 13 \\pmod{26}$ par $u = 9$ (et en utilisant $9 \\times 29 \\equiv 1 \\pmod{26}$), on obtient : $x \\equiv 9y + 9 \\times 13 \\pmod{26}$. Or $9 \\times 13 = 117 = 4 \\times 26 + 13 \\equiv 13 \\pmod{26}$, donc la fonction de décodage est $g(y) \\equiv 9y + 13 \\pmod{26}$ !',
    exercise: {
      id: 'tc_m_num_l11_p06_q02',
      type: 'mcq',
      prompt: 'En utilisant $g(y) \\equiv 9y + 13 \\pmod{26}$, à quelle lettre correspond la lettre codée `X` ($y = 23$) ?',
      options: [
        '`A` ($0$)',
        '`M` ($12$)',
        '`I` ($8$)',
        '`S` ($18$)',
      ],
      correctAnswerIndex: 1,
      explanation: '$9 \\times 23 + 13 = 207 + 13 = 220 = 8 \\times 26 + 12 \\equiv 12 \\pmod{26}$, ce qui correspond à la lettre `M` (de rang $12$, en comptant $A=0$).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Décodage de NWXLP',
    stepTheme: 'blue',
    stepTitle: 'Décoder intégralement le message `NWXLP` reçu par le père',
    paragraphText:
      'Appliquons $g(y) \\equiv 9y + 13 \\pmod{26}$ aux cinq lettres de `NWXLP` : `N`(13) donne $130 \\equiv 0$ (`A`) ; `W`(22) donne $211 \\equiv 3$ (`D`) ; `X`(23) donne $220 \\equiv 12$ (`M`) ; `L`(11) donne $112 \\equiv 8$ (`I`) ; `P`(15) donne $148 \\equiv 18$ (`S`). Le mot caché est donc **`ADMIS`** !',
    visualSchema: {
      type: 'custom_svg',
      title: 'Décodage lettre par lettre de NWXLP via g(y) ≡ 9y + 13 [26]',
      tableData: {
        headers: ['Lettre codée', 'N', 'W', 'X', 'L', 'P'],
        rows: [
          ['y', 13, 22, 23, 11, 15],
          ['9y + 13', 130, 211, 220, 112, 148],
          ['Reste mod 26', 0, 3, 12, 8, 18],
          ['Lettre décodée', 'A', 'D', 'M', 'I', 'S'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l11_p06_q03',
      type: 'mcq',
      prompt: 'Quel message le fils a-t-il annoncé à son père avec le mot chiffré `NWXLP` ?',
      options: [
        'ECHEC',
        'ADMIS',
        'BRAVO',
        'REÇU',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les restes modulo $26$ de $9y + 13$ donnent les rangs $0, 3, 12, 8, 18$, soit `A`, `D`, `M`, `I`, `S` : **ADMIS** !',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Problème concret (Ex 8, Q4)',
    stepTheme: 'blue',
    stepTitle: 'Nuitées d’hébergement à Abengourou ($13\\,000x + 47\\,000y = 524\\,000$)',
    paragraphText:
      'M. Chaukaud paie $524\\,000\\text{ F CFA}$ pour $x > 0$ nuits en hébergement A ($13\\,000\\text{ F}$) et $y > 0$ nuits en hébergement B ($47\\,000\\text{ F}$), soit $13x + 47y = 524$. En multipliant par $524$ la solution particulière $(-18 ; 5)$ de $13x + 47y = 1$, on obtient $x = 47k - 9432$ et $y = -13k + 2620$. Les contraintes $x > 0$ et $y > 0$ donnent $\\frac{9432}{47} < k < \\frac{2620}{13}$, soit $200{,}68 < k < 201{,}54$, d’où l’unique entier $k = 201$, donnant $x = 15$ nuits en A et $y = 7$ nuits en B.',
    exercise: {
      id: 'tc_m_num_l11_p06_q04',
      type: 'mcq',
      prompt: 'Avec $x = 47k - 9432 > 0$ et $y = -13k + 2620 > 0$, combien de nuitées M. Chaukaud a-t-il passées en hébergement A et en B ?',
      options: [
        '$7$ nuits en A et $15$ nuits en B',
        '$15$ nuits en A et $7$ nuits en B',
        '$18$ nuits en A et $5$ nuits en B',
        '$10$ nuits en A et $9$ nuits en B',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $k = 201$, $x = 47(201) - 9432 = 9447 - 9432 = 15$ et $y = -13(201) + 2620 = -2613 + 2620 = 7$. Vérification : $13(15) + 47(7) = 195 + 329 = 524$ !',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Situation d’apprentissage (Suite)',
    stepTheme: 'emerald',
    stepTitle: 'Résoudre $35x - 27y = 2$ pour les deux corps célestes $A$ et $B$',
    paragraphText:
      'Revenons aux deux corps célestes : $105x - 81y = 6 \\iff 35x - 27y = 2$. L’algorithme d’Euclide sur $(35 ; 27)$ donne $35(-10) - 27(-13) = -350 + 351 = 1$, donc en multipliant par $2$, $(-20 ; -26)$ est solution particulière de $35x - 27y = 2$. Les solutions entières positives s’écrivent $x = 27k - 20$ et $y = 35k - 26$ ($k \\geqslant 1$). Le premier jour d’apparition simultanée ($k = 1$) donne $x = 7$ apparitions de $A$, soit $n = 105 \\times 7 = 735$ jours après $J_0$ (vérif : $6 + 81 \\times 9 = 735$) !',
    exercise: {
      id: 'tc_m_num_l11_p06_q05',
      type: 'mcq',
      prompt: 'Au bout de combien de jours après $J_0$ les deux corps célestes $A$ (période $105$, vu en $J_0$) et $B$ (période $81$, vu en $J_0 + 6$) apparaissent-ils simultanément pour la première fois ?',
      options: [
        '$525$ jours',
        '$735$ jours ($105 \\times 7 = 6 + 81 \\times 9$)',
        '$2835$ jours',
        '$186$ jours',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le plus petit couple $(x ; y) \\in (\\mathbb{N}^*)^2$ vérifiant $35x - 27y = 2$ est $x = 7, y = 9$, soit $735$ jours après $J_0$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Ne pas oublier la contrainte x > 0, y > 0',
    stepTheme: 'orange',
    stepTitle: 'Dans un problème concret, encadrer $k$ à partir des contraintes physiques',
    paragraphText:
      'En arithmétique pure, $ax + by = c$ a une infinité de solutions indexées par $k \\in \\mathbb{Z}$. Mais dans un problème concret (nombre de nuitées, âges, pièces, dates futures), les inconnues sont entières POSITIVES (et parfois bornées) : il faut traduire ces contraintes en inégalités sur $k$ pour trouver le ou les seuls entiers $k$ valides.',
    exercise: {
      id: 'tc_m_num_l11_p06_q06',
      type: 'mcq',
      prompt: 'Si $x = 47k - 9432$ et $y = -13k + 2620$ représentent des nombres entiers strictement positifs de nuitées, pourquoi n’y a-t-il qu’une seule valeur entière possible pour $k$ ?',
      options: [
        'Parce que $k$ est toujours égal à $201$ dans toute équation',
        'Parce que $x > 0 \\implies k > 200{,}68$ et $y > 0 \\implies k < 201{,}54$, ce qui ne contient que l’entier $201$',
        'Parce que le coût total impose $k$ premier',
        'Parce que $47$ et $13$ sont impairs',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’intervalle réel $]200{,}68 ; 201{,}54[$ a une longueur inférieure à $1$ et ne renferme qu’un unique entier : $k = 201$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Bilan du chapitre',
    stepTheme: 'slate',
    stepTitle: 'Boîte à outils complète d’arithmétique (Terminale C)',
    paragraphText:
      'Pour tout sujet d’arithmétique au Bac C : 1) Algorithme d’Euclide pour le PGCD et sa remontée pour Bézout $au + bv = d$ ; 2) Théorème de Gauss pour résoudre $ax + by = c$ (après division par $d$) ; 3) Poser $x = dx’$, $y = dy’$ avec $x’ \\wedge y’ = 1$ pour les systèmes avec PGCD/PPCM ; 4) Utiliser les congruences et les inverses modulo $n$ (quand $a \\wedge n = 1$) pour simplifier et coder/décoder.',
    exercise: {
      id: 'tc_m_num_l11_p06_q07',
      type: 'mcq',
      prompt: 'Quel outil permet de résoudre $35x - 27y = 2$ après avoir trouvé une solution particulière $(x_0 ; y_0)$ ?',
      options: [
        'Uniquement un tableau de variations',
        'Le théorème de Gauss, car $\\operatorname{PGCD}(35 ; 27) = 1$',
        'Le discriminant $\\Delta = b^2 - 4ac$',
        'Uniquement le PPCM',
      ],
      correctAnswerIndex: 1,
      explanation: 'L’équation homogène $35(x - x_0) = 27(y - y_0)$ se résout grâce au théorème de Gauss puisque $\\operatorname{PGCD}(35 ; 27) = 1$.',
    },
  },
];

export const MATHS_TLE_C_L11_PPCM_PGCD: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l11_ppcm_pgcd',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 9,
  title: 'Leçon 11 : PPCM et PGCD de deux entiers relatifs',
  summary:
    'PPCM et PGCD, algorithme d’Euclide et remontée, nombres premiers entre eux, théorèmes de Bézout et de Gauss, relation ab = PGCD×PPCM, systèmes, équations ax+by=c et ax≡b[n], cryptographie affine.',
  officialVolumeHours: 8,
  contentVersion: 2,
  source: 'Programme officiel de Mathématiques — Terminale C (Côte d’Ivoire)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l11_ppcm_pgcd_p01',
      order: 1,
      title: 'PPCM de deux entiers relatifs : définition et propriétés',
      summary:
        'Définir PPCM(a ; b), caractériser les multiples communs aℤ ∩ bℤ = μℤ et utiliser l’homogénéité PPCM(ka ; kb) = |k| PPCM(a ; b).',
      conceptExplanation:
        'Le PPCM de deux entiers non nuls a et b est le plus petit élément strictement positif de aℤ ∩ bℤ. Tous les multiples communs à a et b sont exactement les multiples de leur PPCM, et factoriser un diviseur commun k simplifie immédiatement le calcul.',
      keyRule: 'max(|a|, |b|) ≤ PPCM(a ; b) ≤ |ab|, et PPCM(ka ; kb) = |k| PPCM(a ; b).',
      formulas: [
        { name: 'Multiples communs', formula: '\\mu = \\operatorname{PPCM}(a ; b) \\implies a\\mathbb{Z} \\cap b\\mathbb{Z} = \\mu\\mathbb{Z}' },
        { name: 'Homogénéité', formula: '\\operatorname{PPCM}(ka ; kb) = |k|\\,\\operatorname{PPCM}(a ; b)' },
      ],
      workedExample: {
        title: 'Calcul de PPCM par factorisation',
        statement: 'Calculer $\\operatorname{PPCM}(160 ; 200)$ sachant que $\\operatorname{PPCM}(4 ; 5) = 20$.',
        methodSteps: [
          'Écrire $160 = 40 \\times 4$ et $200 = 40 \\times 5$.',
          'Appliquer $\\operatorname{PPCM}(ka ; kb) = |k|\\operatorname{PPCM}(a ; b) = 40 \\times \\operatorname{PPCM}(4 ; 5) = 40 \\times 20$.',
        ],
        conclusion: 'On obtient $\\operatorname{PPCM}(160 ; 200) = 800$.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_ppcm_pgcd_p02',
      order: 2,
      title: 'PGCD de deux entiers relatifs et algorithme d’Euclide',
      summary:
        'Définir PGCD(a ; b), utiliser D(a ; b) = D(δ) et δℤ = {au + bv}, calculer le PGCD par l’algorithme d’Euclide et remonter pour trouver un couple (u ; v).',
      conceptExplanation:
        'Le PGCD de a et b est le plus grand diviseur commun à a et b. L’algorithme d’Euclide repose sur PGCD(a ; b) = PGCD(b ; r) où r est le reste de la division euclidienne de a par b : le PGCD est le dernier reste non nul. Remonter les égalités fournit une identité au + bv = δ.',
      keyRule: 'Dans l’algorithme d’Euclide, PGCD(a ; b) est le dernier reste non nul.',
      formulas: [
        { name: 'Algorithme d’Euclide', formula: 'a = bq + r \\implies \\operatorname{PGCD}(a ; b) = \\operatorname{PGCD}(b ; r)' },
        { name: 'Identité linéaire', formula: '\\delta = \\operatorname{PGCD}(a ; b) \\implies \\delta\\mathbb{Z} = \\{au + bv,\\; u,v \\in \\mathbb{Z}\\}' },
      ],
      workedExample: {
        title: 'Algorithme d’Euclide sur (2016 ; 1188)',
        statement: 'Déterminer $\\operatorname{PGCD}(2016 ; 1188)$ et un couple $(u ; v) \\in \\mathbb{Z}^2$ tel que $2016u + 1188v = 36$.',
        methodSteps: [
          'Divisions : $2016 = 1188 \\times 1 + 828$, $1188 = 828 \\times 1 + 360$, $828 = 360 \\times 2 + 108$, $360 = 108 \\times 3 + 36$, $108 = 36 \\times 3 + 0$.',
          'Le dernier reste non nul vaut $36$, donc $\\operatorname{PGCD}(2016 ; 1188) = 36$.',
          'Remontée : $36 = 360 - 3(108) = \\dots = 17 \\times 1188 - 10 \\times 2016$.',
        ],
        conclusion: '$\\operatorname{PGCD}(2016 ; 1188) = 36$ et le couple $(-10 ; 17)$ convient.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_ppcm_pgcd_p03',
      order: 3,
      title: 'Nombres premiers entre eux, théorème de Bézout et théorème de Gauss',
      summary:
        'Maîtriser PGCD(a ; b) = 1, l’équivalence au + bv = 1 (Bézout), a | bc ⇒ a | c (Gauss), et la simplification des congruences ab ≡ ac [n].',
      conceptExplanation:
        'Deux entiers sont premiers entre eux lorsque leur PGCD vaut 1. Le théorème de Bézout caractérise cette propriété par l’existence d’une relation au + bv = 1, tandis que le théorème de Gauss permet d’en déduire la divisibilité et la simplification des congruences modulo n.',
      keyRule: 'Bézout (au + bv = 1) et Gauss (a | bc et a ∧ b = 1 ⇒ a | c) sont les deux piliers des preuves arithmétiques.',
      formulas: [
        { name: 'Théorème de Bézout', formula: '\\operatorname{PGCD}(a ; b) = 1 \\iff \\exists (u ; v) \\in \\mathbb{Z}^2,\\; au + bv = 1' },
        { name: 'Théorème de Gauss', formula: '(a \\mid bc \\text{ et } \\operatorname{PGCD}(a ; b) = 1) \\implies a \\mid c' },
      ],
      workedExample: {
        title: 'Application du théorème de Gauss',
        statement: 'Soient $x, y \\in \\mathbb{Z}$ tels que $2x - 5y = 0$. Exprimer $x$ et $y$ en fonction d’un entier $k \\in \\mathbb{Z}$.',
        methodSteps: [
          '$2x = 5y \\implies 2$ divise $5y$.',
          'Comme $\\operatorname{PGCD}(2 ; 5) = 1$, le théorème de Gauss donne $2 \\mid y$, soit $y = 2k$ ($k \\in \\mathbb{Z}$).',
          'Reporter dans $2x = 5(2k)$ pour obtenir $x = 5k$.',
        ],
        conclusion: 'Il existe $k \\in \\mathbb{Z}$ tel que $x = 5k$ et $y = 2k$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_ppcm_pgcd_p04',
      order: 4,
      title: 'Relation PPCM–PGCD et systèmes d’équations arithmétiques',
      summary:
        'Exploiter PPCM(a ; b) × PGCD(a ; b) = ab et résoudre des systèmes à somme, produit ou PPCM fixés en posant x = dx′ et y = dy′ avec x′ ∧ y′ = 1.',
      conceptExplanation:
        'Pour deux entiers naturels non nuls, le produit du PPCM et du PGCD égale le produit des deux nombres. Dans tout système où PGCD(x ; y) = d est fixé, le changement x = dx′, y = dy′ ramène le problème à des entiers premiers entre eux x′ et y′.',
      keyRule: 'Poser x = dx′ et y = dy′ avec impérativement PGCD(x′ ; y′) = 1 (filtrer les couples non premiers entre eux !).',
      formulas: [
        { name: 'Identité fondamentale', formula: '\\operatorname{PPCM}(a ; b) \\times \\operatorname{PGCD}(a ; b) = ab \\quad (a, b \\in \\mathbb{N}^*)' },
      ],
      workedExample: {
        title: 'Système avec PGCD et produit',
        statement: 'Résoudre dans $\\mathbb{N}^2$ le système $\\begin{cases} \\operatorname{PGCD}(x ; y) = 28 \\\\ xy = 8624 \\end{cases}$.',
        methodSteps: [
          'Poser $x = 28x’$ et $y = 28y’$ avec $\\operatorname{PGCD}(x’ ; y’) = 1$.',
          'Substituer : $784 x’ y’ = 8624 \\iff x’ y’ = 11$.',
          'Comme $11$ est premier, $(x’ ; y’) \\in \\{(1 ; 11) ; (11 ; 1)\\}$.',
        ],
        conclusion: 'Les solutions sont $(28 ; 308)$ et $(308 ; 28)$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_ppcm_pgcd_p05',
      order: 5,
      title: 'Équations diophantiennes ax + by = c et congruences ax ≡ b [n]',
      summary:
        'Tester l’existence des solutions via PGCD | c, résoudre ax + by = c par solution particulière + Gauss + réciproque, et résoudre ax ≡ b [n] par tableau ou inverse.',
      conceptExplanation:
        'Une équation diophantienne ax + by = c (respectivement une congruence ax ≡ b [n]) n’a de solutions que si PGCD(a ; b) divise c (resp. PGCD(a ; n) divise b). Une fois une solution particulière trouvée, la différence vérifie l’équation homogène et se résout via le théorème de Gauss.',
      keyRule: 'Existence ⇔ d | c ; toujours vérifier la réciproque en substituant (x_k ; y_k) dans ax + by.',
      formulas: [
        { name: 'Existence', formula: 'ax + by = c \\text{ résoluble} \\iff \\operatorname{PGCD}(a ; b) \\mid c' },
        { name: 'Congruence', formula: 'ax \\equiv b \\pmod n \\text{ résoluble} \\iff \\operatorname{PGCD}(a ; n) \\mid b' },
      ],
      workedExample: {
        title: 'Résolution de 3x − 5y = −2 dans ℤ²',
        statement: 'Résoudre dans $\\mathbb{Z}^2$ l’équation $(F) : 3x - 5y = -2$.',
        methodSteps: [
          '$\\operatorname{PGCD}(3 ; 5) = 1$ divise $-2$ : solutions existantes ; $(1 ; 1)$ est solution particulière.',
          'Soustraire : $3(x - 1) = 5(y - 1)$. Par Gauss ($3 \\wedge 5 = 1$), $5 \\mid (x - 1)$, d’où $x = 1 + 5k$ et $y = 1 + 3k$ ($k \\in \\mathbb{Z}$).',
          'Réciproquement, $3(1 + 5k) - 5(1 + 3k) = -2$ pour tout $k \\in \\mathbb{Z}$.',
        ],
        conclusion: '$S = \\{(1 + 5k ; 1 + 3k),\\; k \\in \\mathbb{Z}\\}$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_ppcm_pgcd_p06',
      order: 6,
      title: 'Problèmes concrets et situation complexe (codage affine)',
      summary:
        'Modéliser des situations concrètes (cryptographie affine modulo 26, réservations d’hôtel, phénomènes périodiques) en combinant Euclide, Gauss et encadrement de k.',
      conceptExplanation:
        'En cryptographie affine modulo 26, le décodage repose sur l’inversion de la clé a modulo 26 via Bézout (au − 26v = 1). Dans les problèmes concrets à inconnues entières positives, les conditions x > 0 et y > 0 encadrent le paramètre entier k pour isoler la solution réelle.',
      keyRule: 'Traduire chaque contrainte concrète en inégalité sur le paramètre k ∈ ℤ.',
      formulas: [
        { name: 'Décodage affine', formula: '29x + 13 \\equiv y \\pmod{26} \\iff x \\equiv 9y + 13 \\pmod{26}' },
      ],
      workedExample: {
        title: 'Décodage de NWXLP (situation complexe)',
        statement: 'Décoder `NWXLP` codé par $f(x) \\equiv 29x + 13 \\pmod{26}$ ($A = 0, \\dots, Z = 25$).',
        methodSteps: [
          'Trouver l’inverse de $29$ modulo $26$ : $29 \\times 9 - 26 \\times 10 = 1 \\implies u = 9$.',
          'Déduire la fonction de décodage : $g(y) \\equiv 9(y - 13) \\equiv 9y + 13 \\pmod{26}$.',
          'Calculer $g(13) = 0$ (`A`), $g(22) = 3$ (`D`), $g(23) = 12$ (`M`), $g(11) = 8$ (`I`), $g(15) = 18$ (`S`).',
        ],
        conclusion: 'Le mot décodé est **`ADMIS`**.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
  ],
};
