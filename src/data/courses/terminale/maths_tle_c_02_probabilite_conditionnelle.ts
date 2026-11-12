import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Modéliser un jeu de kermesse (urne avec remise)',
    paragraphText:
      'Pour la kermesse du lycée, une urne contient $3$ boules rouges ($100, 200, 300$) et $2$ boules noires ($2, 5$). Le joueur mise $x$ F CFA et tire successivement avec remise $2$ boules : si elles ont la même couleur, il perd sa mise (gain $-x$) ; sinon il remporte le produit des numéros (gain $= \\text{produit} - x$). Sur les $5^2 = 25$ tirages équiprobables, $2 \\times 3 \\times 2 = 12$ tirages donnent deux couleurs différentes, avec une somme des produits de $2 \\times (200+500+400+1000+600+1500) = 8400$. Le gain brut moyen vaut $\\frac{8400}{25} = 336$ F. Pour que le jeu soit avantageux pour les organisateurs ($E(G) = 336 - x < 0$), il faut choisir une mise entière minimale de $337$ F CFA !',
    formula: {
      name: 'Gain algébrique moyen',
      formula: 'E(G) = \\frac{8400}{25} - x = 336 - x < 0 \\iff x > 336',
    },
    konanTip: 'Distinguer « recette brute moyenne » ($336$ F) et « gain algébrique » ($\\text{recette} - \\text{mise}$) permet d’éviter l’erreur de signe sur l’équité du jeu.',
    exercise: {
      id: 'tc_m_num_l02_p01_q01',
      type: 'mcq',
      prompt: 'Dans ce jeu de kermesse ($3$ rouges : $100, 200, 300$ ; $2$ noires : $2, 5$ avec remise), quelle est la probabilité de tirer deux boules de couleurs différentes ?',
      options: ['$\\frac{6}{25}$', '$\\frac{12}{25}$', '$\\frac{13}{25}$', '$\\frac{3}{5}$'],
      correctAnswerIndex: 1,
      explanation: 'On a $(R_1 \\cap N_2)$ ou $(N_1 \\cap R_2)$, deux événements incompatibles de probabilité $\\frac{3}{5}\\times\\frac{2}{5} + \\frac{2}{5}\\times\\frac{3}{5} = \\frac{12}{25}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Définition',
    stepTheme: 'blue',
    stepTitle: 'Probabilité conditionnelle $P_B(A)$ ou $P(A/B)$',
    paragraphText:
      'Soit $B$ un événement d’un univers $\\Omega$ tel que $P(B) \\ne 0$. On appelle probabilité conditionnelle sachant que $B$ est réalisé l’application $P_B$ qui, à tout événement $A$ de $\\Omega$, associe le nombre réel $P_B(A) = P(A/B) = \\frac{P(A \\cap B)}{P(B)}$. Elle mesure la chance que $A$ se réalise une fois l’univers restreint à l’événement $B$ déjà réalisé.',
    formula: {
      name: 'Définition de P_B(A)',
      formula: 'P_B(A) = P(A/B) = \\frac{P(A \\cap B)}{P(B)} \\qquad (P(B) \\ne 0)',
    },
    exercise: {
      id: 'tc_m_num_l02_p01_q02',
      type: 'mcq',
      prompt: 'Soient $E$ et $F$ deux événements tels que $P(E) = \\frac{1}{2}$, $P(F) = \\frac{3}{4}$ et $P(E \\cap F) = \\frac{2}{5}$. Que vaut $P_E(F)$ ?',
      options: ['$\\frac{8}{15}$', '$\\frac{4}{5}$', '$\\frac{1}{5}$', '$\\frac{5}{4}$'],
      correctAnswerIndex: 1,
      explanation: '$P_E(F) = \\frac{P(E \\cap F)}{P(E)} = \\frac{2/5}{1/2} = \\frac{2}{5} \\times 2 = \\frac{4}{5}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Application directe',
    stepTheme: 'slate',
    stepTitle: 'Calculer $P_F(E)$ et comparer avec $P_E(F)$',
    paragraphText:
      'Avec les mêmes données ($P(E) = \\frac{1}{2}$, $P(F) = \\frac{3}{4}$, $P(E \\cap F) = \\frac{2}{5}$), calculons cette fois $P_F(E)$ : $P_F(E) = \\frac{P(E \\cap F)}{P(F)} = \\frac{2/5}{3/4} = \\frac{2}{5} \\times \\frac{4}{3} = \\frac{8}{15}$. On constate immédiatement que $P_E(F) = \\frac{4}{5} \\ne \\frac{8}{15} = P_F(E)$ !',
    formula: {
      name: 'Asymétrie conditionnelle',
      formula: 'P_E(F) = \\frac{4}{5} \\ne P_F(E) = \\frac{8}{15}',
    },
    exercise: {
      id: 'tc_m_num_l02_p01_q03',
      type: 'mcq',
      prompt: 'Sachant $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}15$, que vaut $P_B(A)$ ?',
      options: ['$0{,}375$', '$0{,}30$', '$0{,}75$', '$0{,}20$'],
      correctAnswerIndex: 1,
      explanation: 'On divise toujours par la probabilité de l’événement conditionnant ($B$) : $P_B(A) = \\frac{0{,}15}{0{,}5} = 0{,}30$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'piege',
    stepBadge: 'Piège d’examen',
    stepTheme: 'orange',
    stepTitle: 'Ne jamais inverser $P_A(B)$ et $P_B(A)$',
    paragraphText:
      'En français, « probabilité de $A$ sachant $B$ » ou « probabilité que $A$ se réalise si $B$ est réalisé » se note $P_B(A)$ (l’événement connu $B$ est en indice, au dénominateur). Inversement, « parmi les éléments de $A$, la proportion vérifiant $B$ » est $P_A(B)$ ! Confondre les deux inverses le dénominateur et fausse tout l’exercice.',
    konanTip: 'Retiens la règle d’or : l’événement placé après « sachant » (ou « parmi ») va TOUJOURS en indice et au dénominateur.',
    exercise: {
      id: 'tc_m_num_l02_p01_q04',
      type: 'mcq',
      prompt: 'Dans un lycée, $60\\%$ des élèves sont des filles ($F$) et $15\\%$ des élèves sont des filles portant des lunettes ($F \\cap L$). Quelle est la probabilité qu’une fille choisie au hasard porte des lunettes ?',
      options: ['$P_L(F) = 0{,}25$', '$P_F(L) = 0{,}25$', '$P(F \\cap L) = 0{,}15$', '$P_F(L) = 0{,}09$'],
      correctAnswerIndex: 1,
      explanation: 'L’énoncé demande « sachant que c’est une fille » ($F$ est connu) : on calcule $P_F(L) = \\frac{P(F \\cap L)}{P(F)} = \\frac{0{,}15}{0{,}60} = 0{,}25$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Probabilités composées',
    stepTheme: 'violet',
    stepTitle: 'Calculer $P(A \\cap B)$ à partir de $P_B(A)$ ou $P_A(B)$',
    paragraphText:
      'En multipliant les deux membres de la définition par le dénominateur, on obtient la formule des probabilités composées : pour tous événements $A$ et $B$ de probabilités non nulles, $P(A \\cap B) = P(A) \\times P_A(B) = P(B) \\times P_B(A)$. Exemple du cours : si $P(F) = 0{,}75$ et $P_F(I) = 0{,}45$, alors $P(F \\cap I) = 0{,}45 \\times 0{,}75 = 0{,}3375$.',
    formula: {
      name: 'Formule des probabilités composées',
      formula: 'P(A \\cap B) = P(A)\\times P_A(B) = P(B)\\times P_B(A)',
    },
    exercise: {
      id: 'tc_m_num_l02_p01_q05',
      type: 'mcq',
      prompt: 'Soient $I$ et $F$ deux événements avec $P(F) = 0{,}75$ et $P_F(I) = 0{,}45$. Que vaut $P(F \\cap I)$ ?',
      options: ['$0{,}6$', '$0{,}3375$', '$1{,}20$', '$0{,}30$'],
      correctAnswerIndex: 1,
      explanation: '$P(F \\cap I) = P(F) \\times P_F(I) = 0{,}75 \\times 0{,}45 = 0{,}3375$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Événement contraire',
    stepTheme: 'violet',
    stepTitle: 'Probabilité conditionnelle $P_B(\\overline{A})$',
    paragraphText:
      'Une probabilité conditionnelle $P_B$ est une véritable probabilité sur $\\Omega$ ! Par conséquent, toutes les propriétés habituelles restent valables pour un $B$ fixé : $0 \\leqslant P_B(A) \\leqslant 1$, $P_B(B) = 1$, $P_B(\\overline{A}) = 1 - P_B(A)$ et $P_B(A \\cup C) = P_B(A) + P_B(C) - P_B(A \\cap C)$. Attention : en revanche, $P_{\\overline{B}}(A)$ N’EST PAS égal en général à $1 - P_B(A)$ !',
    formula: {
      name: 'Complémentaire sachant B',
      formula: 'P_B(\\overline{A}) = 1 - P_B(A)',
    },
    exercise: {
      id: 'tc_m_num_l02_p01_q06',
      type: 'mcq',
      prompt: 'On sait que $P_E(R) = \\frac{1}{3}$. Quelle égalité est TOUJOURS vraie ?',
      options: [
        '$P_{\\overline{E}}(R) = \\frac{2}{3}$',
        '$P_E(\\overline{R}) = \\frac{2}{3}$',
        '$P(R) = \\frac{1}{3}$',
        '$P_R(E) = \\frac{1}{3}$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour un événement conditionnant fixé $E$, $P_E(\\overline{R}) = 1 - P_E(R) = 1 - \\frac{1}{3} = \\frac{2}{3}$. En revanche, $P_{\\overline{E}}(R)$ ne se déduit pas de $P_E(R)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Méthode Bac',
    stepTheme: 'green',
    stepTitle: 'Retrouver $P(B)$ connaissant $P(A \\cap B)$ et $P_B(A)$',
    paragraphText:
      'De la relation $P(A \\cap B) = P(B) \\times P_B(A)$, on déduit aussi $P(B) = \\frac{P(A \\cap B)}{P_B(A)}$ dès que $P_B(A) \\ne 0$. Et grâce à $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, on peut passer facilement d’une réunion à une intersection puis à une probabilité conditionnelle.',
    formula: {
      name: 'Lien union-intersection-conditionnement',
      formula: 'P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = P(B)\\,P_B(A)',
    },
    exercise: {
      id: 'tc_m_num_l02_p01_q07',
      type: 'mcq',
      prompt: 'On donne $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cup B) = 0{,}8$. Que vaut $P_A(B)$ ?',
      options: ['$0{,}3$', '$0{,}5$', '$0{,}6$', '$0{,}4$'],
      correctAnswerIndex: 1,
      explanation: '$P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}8 = 0{,}3$. Donc $P_A(B) = \\frac{0{,}3}{0{,}6} = 0{,}5$.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Indépendance',
    stepTheme: 'blue',
    stepTitle: 'Définition de deux événements indépendants',
    paragraphText:
      'Soit $P$ une probabilité définie sur un univers $\\Omega$. Deux événements $A$ et $B$ de $\\Omega$ sont dits **indépendants** lorsque $P(A \\cap B) = P(A) \\times P(B)$. Intuitivement, la réalisation de l’un n’apporte aucune information qui modifie les chances de réalisation de l’autre.',
    formula: {
      name: 'Critère d’indépendance',
      formula: 'A \\text{ et } B \\text{ indépendants} \\iff P(A \\cap B) = P(A) \\times P(B)',
    },
    exercise: {
      id: 'tc_m_num_l02_p02_q01',
      type: 'mcq',
      prompt: 'Soient $A$ et $B$ tels que $P(A) = 0{,}4$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Que peut-on conclure ?',
      options: [
        '$A$ et $B$ sont incompatibles',
        '$A$ et $B$ sont indépendants',
        '$A$ et $B$ ne sont pas indépendants',
        '$A = \\overline{B}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$P(A) \\times P(B) = 0{,}4 \\times 0{,}5 = 0{,}2 = P(A \\cap B)$, donc $A$ et $B$ sont indépendants.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Équivalence conditionnelle',
    stepTheme: 'violet',
    stepTitle: 'Caractérisation via $P_B(A) = P(A)$',
    paragraphText:
      'Si $A$ et $B$ sont deux événements de probabilités non nulles, ils sont indépendants si et seulement si $P_B(A) = P(A)$ (ou de façon équivalente $P_A(B) = P(B)$). Savoir que $B$ est réalisé ne change donc pas la probabilité de $A$ !',
    formula: {
      name: 'Caractérisation (P(A) > 0, P(B) > 0)',
      formula: 'A \\text{ et } B \\text{ indépendants} \\iff P_B(A) = P(A) \\iff P_A(B) = P(B)',
    },
    exercise: {
      id: 'tc_m_num_l02_p02_q02',
      type: 'mcq',
      prompt: 'Si $A$ et $B$ sont indépendants avec $P(A) = 0{,}35$ et $P(B) = 0{,}6$, combien vaut $P_B(A)$ ?',
      options: ['$0{,}21$', '$0{,}35$', '$0{,}60$', '$0{,}58$'],
      correctAnswerIndex: 1,
      explanation: 'Par indépendance ($P(B) \\ne 0$), $P_B(A) = P(A) = 0{,}35$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exercice du cours',
    stepTheme: 'slate',
    stepTitle: 'Démontrer l’indépendance sur deux lancers de pièce',
    paragraphText:
      'On lance deux fois une pièce équilibrée : $\\Omega = \\{(P,P) ; (P,F) ; (F,P) ; (F,F)\\}$ avec $\\operatorname{Card}(\\Omega) = 4$. Soit $A$ « obtenir Face au $1^{\\text{er}}$ lancer » ($A = \\{(F,P) ; (F,F)\\}$, $P(A) = \\frac{1}{2}$) et $B$ « obtenir Face au $2^{\\text{nd}}$ lancer » ($B = \\{(P,F) ; (F,F)\\}$, $P(B) = \\frac{1}{2}$). Comme $A \\cap B = \\{(F,F)\\}$, $P(A \\cap B) = \\frac{1}{4} = P(A)\\times P(B)$ : $A$ et $B$ sont indépendants !',
    formula: {
      name: 'Vérification numérique',
      formula: 'P(A \\cap B) = \\frac{1}{4} = \\frac{1}{2} \\times \\frac{1}{2} = P(A) \\times P(B)',
    },
    exercise: {
      id: 'tc_m_num_l02_p02_q03',
      type: 'mcq',
      prompt: 'On lance un dé équilibré à $6$ faces. Soit $A = \\{2, 4, 6\\}$ (« pair ») et $B = \\{1, 2, 3, 4\\}$ (« $\\leqslant 4$ »). $A$ et $B$ sont-ils indépendants ?',
      options: [
        'Oui, car $P(A \\cap B) = \\frac{2}{6} = \\frac{1}{3} = \\frac{1}{2} \\times \\frac{2}{3}$',
        'Non, car $A \\cap B = \\{2, 4\\} \\ne \\emptyset$',
        'Non, car $P(A \\cap B) = \\frac{1}{6} \\ne \\frac{1}{3}$',
        'On ne peut pas savoir sans arbre pondéré',
      ],
      correctAnswerIndex: 0,
      explanation: '$P(A) = \\frac{3}{6} = \\frac{1}{2}$, $P(B) = \\frac{4}{6} = \\frac{2}{3}$, et $A \\cap B = \\{2, 4\\}$ donc $P(A \\cap B) = \\frac{2}{6} = \\frac{1}{3} = P(A)P(B)$. Ils sont bien indépendants !',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Stabilité par contraire',
    stepTheme: 'violet',
    stepTitle: 'Indépendance de $\\overline{A}$ et $B$, $A$ et $\\overline{B}$, $\\overline{A}$ et $\\overline{B}$',
    paragraphText:
      'Si deux événements $A$ et $B$ sont indépendants, alors : $\\overline{A}$ et $B$ sont indépendants ; $A$ et $\\overline{B}$ sont indépendants ; $\\overline{A}$ et $\\overline{B}$ sont indépendants. Démonstration rapide : $P(\\overline{A} \\cap B) = P(B) - P(A \\cap B) = P(B) - P(A)P(B) = (1 - P(A))P(B) = P(\\overline{A})P(B)$.',
    formula: {
      name: 'Transmission au contraire',
      formula: 'A, B \\text{ indépendants} \\implies \\overline{A},\\, \\overline{B} \\text{ indépendants}',
    },
    exercise: {
      id: 'tc_m_num_l02_p02_q04',
      type: 'mcq',
      prompt: 'Deux capteurs fonctionnent de manière indépendante avec des probabilités de panne $P(A) = 0{,}1$ et $P(B) = 0{,}2$. Quelle est la probabilité qu’AUCUN des deux capteurs ne tombe en panne ?',
      options: ['$0{,}70$', '$0{,}72$', '$0{,}02$', '$0{,}98$'],
      correctAnswerIndex: 1,
      explanation: 'Comme $A$ et $B$ sont indépendants, $\\overline{A}$ et $\\overline{B}$ le sont aussi : $P(\\overline{A} \\cap \\overline{B}) = P(\\overline{A})\\times P(\\overline{B}) = 0{,}9 \\times 0{,}8 = 0{,}72$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège classique',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre « incompatibles » et « indépendants »',
    paragraphText:
      'C’est l’erreur la plus fréquente en terminale ! Deux événements incompatibles vérifient $A \\cap B = \\emptyset$, donc $P(A \\cap B) = 0$. Si en plus $P(A) > 0$ et $P(B) > 0$, alors $P(A)\\times P(B) > 0 \\ne 0 = P(A \\cap B)$ : **deux événements incompatibles de probabilités non nulles ne peuvent JAMAIS être indépendants !** En effet, si $A$ se réalise, on est certain que $B$ ne se réalisera pas.',
    konanTip: 'Incompatibles = ne peuvent pas arriver ensemble ($A \\cap B = \\emptyset$). Indépendants = l’un n’influence pas l’autre ($P(A\\cap B)=P(A)P(B)$). C’est presque opposé !',
    exercise: {
      id: 'tc_m_num_l02_p02_q05',
      type: 'mcq',
      prompt: 'Soient $A$ et $B$ deux événements incompatibles avec $P(A) = 0{,}2$ et $P(B) = 0{,}3$. Sont-ils indépendants ?',
      options: [
        'Oui, car $A \\cap B = \\emptyset$',
        'Non, car $P(A \\cap B) = 0$ alors que $P(A)P(B) = 0{,}06 \\ne 0$',
        'Oui, car $0{,}2 + 0{,}3 = 0{,}5$',
        'Impossible de conclure sans connaître $\\Omega$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Incompatibles implique $P(A \\cap B) = 0 \\ne P(A)P(B) = 0{,}06$ : ils dépendent totalement l’un de l’autre (la réalisation de $A$ empêche celle de $B$).',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'methode',
    stepBadge: 'Méthode',
    stepTheme: 'green',
    stepTitle: 'Probabilité d’« au moins un » avec des événements indépendants',
    paragraphText:
      'Pour calculer $P(A \\cup B)$ quand $A$ et $B$ sont indépendants, la méthode la plus rapide (surtout s’il y a $n$ événements indépendants) passe par l’événement contraire : « au moins un se réalise » a pour contraire « aucun ne se réalise », soit $P(A \\cup B) = 1 - P(\\overline{A} \\cap \\overline{B}) = 1 - (1 - P(A))(1 - P(B))$.',
    formula: {
      name: 'Au moins un sur n événements indépendants',
      formula: 'P(A_1 \\cup \\dots \\cup A_n) = 1 - \\prod_{i=1}^n (1 - P(A_i))',
    },
    exercise: {
      id: 'tc_m_num_l02_p02_q06',
      type: 'mcq',
      prompt: 'Trois élèves essaient indépendamment de résoudre un problème avec des chances de réussite $0{,}5$, $0{,}4$ et $0{,}2$. Quelle est la probabilité que le problème soit résolu (par au moins un élève) ?',
      options: ['$0{,}76$', '$0{,}24$', '$1{,}10$', '$0{,}04$'],
      correctAnswerIndex: 0,
      explanation: 'Le contraire est « aucun des trois ne réussit », de probabilité $(1-0{,}5)(1-0{,}4)(1-0{,}2) = 0{,}5 \\times 0{,}6 \\times 0{,}8 = 0{,}24$. Donc $P = 1 - 0{,}24 = 0{,}76$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Vérification dans un arbre',
    stepTheme: 'slate',
    stepTitle: 'Reconnaître l’indépendance sur un arbre pondéré',
    paragraphText:
      'Sur un arbre pondéré à deux niveaux ($A, \\overline{A}$ puis $B, \\overline{B}$), les événements $A$ et $B$ sont indépendants si et seulement si les probabilités conditionnelles sur les sous-arbres issus de $A$ et de $\\overline{A}$ sont identiques : $P_A(B) = P_{\\overline{A}}(B)$ (et alors toutes deux valent $P(B)$).',
    exercise: {
      id: 'tc_m_num_l02_p02_q07',
      type: 'mcq',
      prompt: 'Sur un arbre, $P(A) = 0{,}6$, $P_A(B) = 0{,}7$ et $P_{\\overline{A}}(B) = 0{,}4$. Les événements $A$ et $B$ sont-ils indépendants ?',
      options: [
        'Oui, car $0{,}6 + 0{,}4 = 1$',
        'Non, car $P_A(B) = 0{,}7 \\ne 0{,}4 = P_{\\overline{A}}(B)$',
        'Oui, car $P(B) = 0{,}58$',
        'Non, car $A$ et $B$ sont incompatibles',
      ],
      correctAnswerIndex: 1,
      explanation: 'La probabilité que $B$ se réalise dépend du fait que $A$ soit réalisé ou non ($0{,}7 \\ne 0{,}4$), donc $A$ et $B$ ne sont pas indépendants.',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Partition',
    stepTheme: 'blue',
    stepTitle: 'Partition d’un ensemble $\\Omega$',
    paragraphText:
      'Soit $\\Omega$ un ensemble non vide et $B_1, B_2, \\dots, B_n$ ($n \\geqslant 2$) des parties de $\\Omega$ de probabilités non nulles. On dit que $(B_1, \\dots, B_n)$ forme une **partition** de $\\Omega$ si : elles sont deux à deux disjointes ($B_i \\cap B_j = \\emptyset$ pour $i \\ne j$) et leur réunion reconstitue tout l’univers ($B_1 \\cup B_2 \\cup \\dots \\cup B_n = \\Omega$). En particulier, un événement $A$ et son contraire $\\overline{A}$ (si $0 < P(A) < 1$) forment toujours une partition à $2$ éléments.',
    formula: {
      name: 'Conditions d’une partition',
      formula: 'B_i \\cap B_j = \\emptyset \\;(i \\ne j) \\quad \\text{et} \\quad \\bigcup_{i=1}^n B_i = \\Omega',
    },
    exercise: {
      id: 'tc_m_num_l02_p03_q01',
      type: 'mcq',
      prompt: 'Soit $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. Quelle famille forme une partition de $\\Omega$ ?',
      options: [
        '$B = \\{1, 2\\}$, $C = \\{2, 3, 4\\}$, $D = \\{5, 6\\}$',
        '$B = \\{1, 2\\}$, $C = \\{3, 4, 5\\}$, $D = \\{6\\}$',
        '$B = \\{1, 3, 5\\}$, $C = \\{2, 4\\}$',
        '$B = \\{1, 2, 3\\}$, $C = \\{4, 5\\}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\{1,2\\}$, $\\{3,4,5\\}$ et $\\{6\\}$ sont deux à deux disjoints et leur union donne bien $\\Omega$ tout entier.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Probabilités totales',
    stepTheme: 'violet',
    stepTitle: 'Formule des probabilités totales',
    paragraphText:
      'Si $(B_1, B_2, \\dots, B_n)$ est une partition de $\\Omega$ (avec $P(B_i) > 0$ pour tout $i$), alors pour tout événement $A$ de $\\Omega$, on a : $P(A) = P(A \\cap B_1) + P(A \\cap B_2) + \\dots + P(A \\cap B_n) = \\sum_{i=1}^n P_{B_i}(A)\\,P(B_i)$. Dans le cas usuel d’une partition $(E, \\overline{E})$, cela s’écrit simplement : $P(R) = P(R \\cap E) + P(R \\cap \\overline{E}) = P(E)P_E(R) + P(\\overline{E})P_{\\overline{E}}(R)$.',
    formula: {
      name: 'Formule des probabilités totales',
      formula: 'P(A) = \\sum_{i=1}^n P(A \\cap B_i) = \\sum_{i=1}^n P_{B_i}(A)\\,P(B_i)',
    },
    exercise: {
      id: 'tc_m_num_l02_p03_q02',
      type: 'mcq',
      prompt: 'Dans un magasin, $64\\%$ des ordinateurs sont de marque $A$ (dont $30\\%$ soldés) et $36\\%$ de marque $N$ (dont $60\\%$ soldés). Quelle est la probabilité $P(S)$ qu’un ordinateur choisi au hasard soit soldé ?',
      options: ['$0{,}45$', '$0{,}408$', '$0{,}90$', '$0{,}192$'],
      correctAnswerIndex: 1,
      explanation: '$P(S) = P(A)P_A(S) + P(N)P_N(S) = 0{,}64 \\times 0{,}30 + 0{,}36 \\times 0{,}60 = 0{,}192 + 0{,}216 = 0{,}408$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'methode',
    stepBadge: 'Arbre pondéré',
    stepTheme: 'green',
    stepTitle: 'Règles de lecture et de construction d’un arbre pondéré',
    paragraphText:
      'Un arbre pondéré résume parfaitement une partition $(A, \\overline{A})$ suivie d’une seconde partition $(B, \\overline{B})$. Trois règles d’or régissent tout arbre pondéré : (1) la somme des poids des branches issues d’un même nœud vaut toujours $1$ ; (2) la probabilité du chemin conduisant à $A \\cap B$ est le **produit** des poids rencontrés le long de ce chemin ($P(A)\\times P_A(B)$) ; (3) la probabilité d’un événement final $B$ est la **somme** des probabilités de tous les chemins menant à $B$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Arbre pondéré : cas du restaurant de Mariam',
      tableData: {
        headers: ['Chemin (1er niveau → 2e niveau)', 'Calcul sur les branches', 'Probabilité de l’issue'],
        rows: [
          ['Affluence $A$ ($0{,}6$) → Bénéfice $B$ ($0{,}7$)', '$P(A) \\times P_A(B) = 0{,}6 \\times 0{,}7$', '$0{,}42$'],
          ['Affluence $A$ ($0{,}6$) → Pas de bénéfice $\\overline{B}$ ($0{,}3$)', '$P(A) \\times P_A(\\overline{B}) = 0{,}6 \\times 0{,}3$', '$0{,}18$'],
          ['Pas d’affluence $\\overline{A}$ ($0{,}4$) → Bénéfice $B$ ($0{,}4$)', '$P(\\overline{A}) \\times P_{\\overline{A}}(B) = 0{,}4 \\times 0{,}4$', '$0{,}16$'],
          ['Pas d’affluence $\\overline{A}$ ($0{,}4$) → Pas de bénéfice $\\overline{B}$ ($0{,}6$)', '$P(\\overline{A}) \\times P_{\\overline{A}}(\\overline{B}) = 0{,}4 \\times 0{,}6$', '$0{,}24$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l02_p03_q03',
      type: 'mcq',
      prompt: 'À l’aide du tableau de l’arbre ci-dessus (restaurant de Mariam), quelle est la probabilité $P(B)$ qu’elle réalise un bénéfice un jour donné ?',
      options: ['$0{,}42$', '$0{,}58$', '$0{,}55$', '$0{,}16$'],
      correctAnswerIndex: 1,
      explanation: '$P(B) = P(A \\cap B) + P(\\overline{A} \\cap B) = 0{,}42 + 0{,}16 = 0{,}58$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Exercice du cours',
    stepTheme: 'slate',
    stepTitle: 'Inverser le conditionnement : formule de Bayes ($P_B(A)$)',
    paragraphText:
      'Reprenons Mariam (exercice d’approfondissement p.12) : $P(A \\cap B) = 0{,}42$ et $P(B) = 0{,}58$. Sachant que Mariam a réalisé un bénéfice ce jour-là ($B$), quelle est la probabilité qu’il y ait eu affluence de clients ($A$) ? On calcule $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}42}{0{,}58} = \\frac{42}{58} = \\frac{21}{29} \\approx 0{,}724$. C’est le principe dit « de Bayes » : on passe des probabilités des causes aux probabilités sachant l’effet.',
    formula: {
      name: 'Retournement du conditionnement',
      formula: 'P_B(A) = \\frac{P(A)\\,P_A(B)}{P(A)\\,P_A(B) + P(\\overline{A})\\,P_{\\overline{A}}(B)}',
    },
    exercise: {
      id: 'tc_m_num_l02_p03_q04',
      type: 'mcq',
      prompt: 'Dans un sondage sur un barrage, $65\\%$ sont opposés ($C$) et parmi eux $70\\%$ sont écologistes ($E$) ; parmi les non-opposés ($\\overline{C}$), $20\\%$ sont écologistes. Que vaut $P(E)$ ?',
      options: ['$0{,}455$', '$0{,}07$', '$0{,}525$', '$0{,}90$'],
      correctAnswerIndex: 2,
      explanation: '$P(E) = P(C \\cap E) + P(\\overline{C} \\cap E) = 0{,}65 \\times 0{,}70 + 0{,}35 \\times 0{,}20 = 0{,}455 + 0{,}07 = 0{,}525$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe',
    stepTheme: 'slate',
    stepTitle: 'Retrouver une proportion inconnue par équation',
    paragraphText:
      'Situation complexe du cours (Dago, p.8) : parmi des élèves de Tle C et D, $25\\%$ des Tle C aiment le damier ($R$), $\\frac{1}{3}$ des Tle D ($E$) aiment le damier, et au total $\\frac{3}{10}$ des élèves aiment le damier. Posons $x = P(E)$. Par la formule des probabilités totales : $P(R) = P_E(R)\\,x + P_{\\overline{E}}(R)(1 - x) \\iff \\frac{3}{10} = \\frac{1}{3}x + \\frac{1}{4}(1 - x) \\iff \\frac{3}{10} - \\frac{1}{4} = \\left(\\frac{1}{3} - \\frac{1}{4}\\right)x \\iff \\frac{1}{20} = \\frac{1}{12}x \\iff x = \\frac{12}{20} = \\frac{3}{5} = 60\\%$.',
    formula: {
      name: 'Équation sur les probabilités totales',
      formula: '\\frac{1}{3}x + \\frac{1}{4}(1 - x) = \\frac{3}{10} \\implies \\frac{1}{12}x = \\frac{1}{20} \\implies x = \\frac{3}{5}',
    },
    exercise: {
      id: 'tc_m_num_l02_p03_q05',
      type: 'mcq',
      prompt: 'Dans l’exercice du sondage sur le barrage ($P(C \\cap E) = 0{,}455$, $P(E) = 0{,}525$), si la personne interrogée est écologiste ($E$), quelle est la probabilité qu’elle soit opposée au barrage ($C$) ?',
      options: ['$\\frac{13}{15}$', '$\\frac{455}{1000}$', '$\\frac{2}{15}$', '$0{,}70$'],
      correctAnswerIndex: 0,
      explanation: '$P_E(C) = \\frac{P(C \\cap E)}{P(E)} = \\frac{0{,}455}{0{,}525} = \\frac{455}{525} = \\frac{13}{15}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur à éviter',
    stepTheme: 'orange',
    stepTitle: 'Attention aux probabilités placées sur le $2^{\\text{e}}$ niveau de l’arbre',
    paragraphText:
      'Sur le $2^{\\text{e}}$ niveau d’un arbre pondéré, le nombre inscrit sur la branche allant de $A$ vers $B$ est la probabilité conditionnelle $P_A(B)$, et **surtout pas** $P(A \\cap B)$ ! Pour obtenir $P(A \\cap B)$, il faut impérativement multiplier $P(A)$ par $P_A(B)$.',
    konanTip: 'Branche = probabilité conditionnelle $P_A(B)$. Feuille au bout du chemin = probabilité de l’intersection $P(A \\cap B)$.',
    exercise: {
      id: 'tc_m_num_l02_p03_q06',
      type: 'mcq',
      prompt: 'Sur un arbre, la branche $A$ porte $0{,}4$ et la branche de $A$ vers $B$ porte $0{,}3$. Que vaut $P(A \\cap B)$ ?',
      options: ['$0{,}3$', '$0{,}7$', '$0{,}12$', '$0{,}75$'],
      correctAnswerIndex: 2,
      explanation: '$P(A \\cap B) = P(A) \\times P_A(B) = 0{,}4 \\times 0{,}3 = 0{,}12$. Le nombre $0{,}3$ est uniquement $P_A(B)$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Synthèse',
    stepTheme: 'green',
    stepTitle: 'Méthode en 4 étapes pour tout problème de probabilités conditionnelles',
    paragraphText:
      '(1) Définir clairement les événements de l’énoncé avec des lettres simples. (2) Identifier la partition initiale et traduire les pourcentages en probabilités simples ($P(A)$) ou conditionnelles ($P_A(B)$). (3) Construire l’arbre pondéré et vérifier que chaque nœud somme à $1$. (4) Utiliser les probabilités totales pour $P(B)$ puis Bayes pour $P_B(A)$.',
    exercise: {
      id: 'tc_m_num_l02_p03_q07',
      type: 'mcq',
      prompt: 'Avec les ordinateurs ($P(A) = 0{,}64$, $P_A(S) = 0{,}30$, $P(S) = 0{,}408$), quelle est la probabilité qu’un ordinateur soldé soit de marque $A$ ?',
      options: ['$\\frac{8}{17}$', '$0{,}192$', '$0{,}30$', '$\\frac{9}{17}$'],
      correctAnswerIndex: 0,
      explanation: '$P_S(A) = \\frac{P(A \\cap S)}{P(S)} = \\frac{0{,}192}{0{,}408} = \\frac{192}{408} = \\frac{8}{17}$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Variable aléatoire',
    stepTheme: 'blue',
    stepTitle: 'Définition d’une variable aléatoire réelle $X$ et univers image $X(\\Omega)$',
    paragraphText:
      'Soit $\\Omega$ un univers fini muni d’une probabilité $P$. On appelle **variable aléatoire** toute application $X$ de $\\Omega$ dans $\\mathbb{R}$. Si $x_1 < x_2 < \\dots < x_n$ sont les différentes valeurs réelles prises par $X$, l’ensemble $X(\\Omega) = \\{x_1 ; x_2 ; \\dots ; x_n\\}$ s’appelle l’**univers image** de $\\Omega$ par $X$. On range toujours les valeurs $x_i$ par ordre croissant.',
    formula: {
      name: 'Variable aléatoire discrète',
      formula: 'X : \\Omega \\longrightarrow \\mathbb{R}, \\qquad X(\\Omega) = \\{x_1 ; x_2 ; \\dots ; x_n\\}',
    },
    exercise: {
      id: 'tc_m_num_l02_p04_q01',
      type: 'mcq',
      prompt: 'Une urne contient $2$ boules blanches et $4$ boules rouges. On tire simultanément $3$ boules et on note $X$ le nombre de boules blanches tirées. Quel est $X(\\Omega)$ ?',
      options: ['$\\{0 ; 1 ; 2 ; 3\\}$', '$\\{0 ; 1 ; 2\\}$', '$\\{1 ; 2\\}$', '$\\{0 ; 1 ; 2 ; 3 ; 4\\}$'],
      correctAnswerIndex: 1,
      explanation: 'Il n’y a que $2$ boules blanches dans l’urne : en tirant $3$ boules, on obtient au minimum $0$ blanche et au maximum $2$ blanches, donc $X(\\Omega) = \\{0 ; 1 ; 2\\}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Loi de probabilité',
    stepTheme: 'blue',
    stepTitle: 'Établir et vérifier une loi de probabilité',
    paragraphText:
      'La **loi de probabilité** de $X$ est l’application qui, à chaque valeur $x_i \\in X(\\Omega)$, associe la probabilité $p_i = P(X = x_i)$ où $(X = x_i) = \\{\\omega \\in \\Omega,\\; X(\\omega) = x_i\\}$. On la présente dans un tableau à deux lignes. Contrôle obligatoire : la somme des probabilités vaut toujours $1$, soit $p_1 + p_2 + \\dots + p_n = 1$ (avec $p_i \\geqslant 0$).',
    formula: {
      name: 'Propriété de normalisation',
      formula: '\\sum_{i=1}^n P(X = x_i) = 1',
    },
    exercise: {
      id: 'tc_m_num_l02_p04_q02',
      type: 'mcq',
      prompt: 'Pour l’urne ($2$ blanches, $4$ rouges, tirage simultané de $3$ boules, $\\binom{6}{3} = 20$), que vaut $P(X = 1)$ ?',
      options: ['$\\frac{1}{5}$', '$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{4}{5}$'],
      correctAnswerIndex: 1,
      explanation: 'Tirer $1$ blanche parmi $2$ et $2$ rouges parmi $4$ donne $\\binom{2}{1}\\times\\binom{4}{2} = 2 \\times 6 = 12$ cas sur $20$, donc $P(X=1) = \\frac{12}{20} = \\frac{3}{5}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exercice corrigé',
    stepTheme: 'slate',
    stepTitle: 'Calculer une loi avec gains algébriques (correction du PDF Ex. 2 p.10)',
    paragraphText:
      'Une urne contient $3$ boules blanches ($+1$ pt) et $5$ boules noires ($-1$ pt). On tire simultanément $3$ boules ($\\binom{8}{3} = 56$). Soit $X$ le score. Attention : la solution du PDF inversait $+3$ et $-3$ ! Vérifions rigoureusement : $3$ noires $\\implies X = -3$ avec $P(X=-3) = \\frac{\\binom{5}{3}}{56} = \\frac{10}{56}$ ; $1$ blanche et $2$ noires $\\implies X = -1$ avec $P(X=-1) = \\frac{\\binom{3}{1}\\binom{5}{2}}{56} = \\frac{30}{56}$ ; $2$ blanches et $1$ noire $\\implies X = +1$ avec $P(X=1) = \\frac{\\binom{3}{2}\\binom{5}{1}}{56} = \\frac{15}{56}$ ; $3$ blanches $\\implies X = +3$ avec $P(X=3) = \\frac{\\binom{3}{3}}{56} = \\frac{1}{56}$. Somme : $\\frac{10+30+15+1}{56} = 1$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Loi corrigée de l’Exercice 2 (3 blanches, 5 noires)',
      tableData: {
        headers: ['$x_i$ (points)', '$-3$ ($NNN$)', '$-1$ ($BNN$)', '$+1$ ($BBN$)', '$+3$ ($BBB$)'],
        rows: [['$P(X = x_i)$', '$\\frac{10}{56}$', '$\\frac{30}{56}$', '$\\frac{15}{56}$', '$\\frac{1}{56}$']],
      },
    },
    exercise: {
      id: 'tc_m_num_l02_p04_q03',
      type: 'mcq',
      prompt: 'Avec $3$ boules blanches ($+1$) et $5$ noires ($-1$), et un tirage simultané de $3$ boules, quelle est la vraie valeur de $P(X = -1)$ ?',
      options: ['$\\frac{15}{56}$', '$\\frac{30}{56}$', '$\\frac{10}{56}$', '$\\frac{1}{56}$'],
      correctAnswerIndex: 1,
      explanation: '$X = -1$ correspond à $1$ blanche ($+1$) et $2$ noires ($-2$), soit $\\frac{C_3^1 \\times C_5^2}{C_8^3} = \\frac{3 \\times 10}{56} = \\frac{30}{56}$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Fonction de répartition',
    stepTheme: 'blue',
    stepTitle: 'Définition de la fonction de répartition $F(x) = P(X \\leqslant x)$',
    paragraphText:
      'Soit $X$ une variable aléatoire sur $\\Omega$. La **fonction de répartition** de $X$ est l’application $F$ de $\\mathbb{R}$ dans $[0 ; 1]$ définie pour tout réel $x$ par $F(x) = P(X \\leqslant x)$. C’est une fonction **en escalier**, **croissante** sur $\\mathbb{R}$, constante sur chaque intervalle $[x_i ; x_{i+1}[$, qui vaut $0$ avant $x_1$ et $1$ à partir de $x_n$.',
    formula: {
      name: 'Fonction de répartition',
      formula: '\\forall x \\in \\mathbb{R},\\quad F(x) = P(X \\leqslant x) = \\sum_{x_i \\leqslant x} P(X = x_i)',
    },
    exercise: {
      id: 'tc_m_num_l02_p04_q04',
      type: 'mcq',
      prompt: 'La loi de $X$ est $P(X=-1000)=\\frac{1}{8}$, $P(X=100)=\\frac{3}{8}$, $P(X=300)=\\frac{3}{8}$, $P(X=600)=\\frac{1}{8}$. Que vaut $F(250)$ ?',
      options: ['$\\frac{1}{8}$', '$\\frac{1}{2}$', '$\\frac{7}{8}$', '$0$'],
      correctAnswerIndex: 1,
      explanation: 'Les valeurs $x_i \\leqslant 250$ sont $-1000$ et $100$, donc $F(250) = P(X=-1000) + P(X=100) = \\frac{1}{8} + \\frac{3}{8} = \\frac{4}{8} = \\frac{1}{2}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Représentation en escalier',
    stepTheme: 'slate',
    stepTitle: 'Écrire $F(x)$ par intervalles (exemple du cours p.7–8)',
    paragraphText:
      'Pour la variable $X$ ci-dessus, on cumule les probabilités de gauche à droite : pour $x \\in ]-\\infty ; -1000[$, $F(x) = 0$ ; pour $x \\in [-1000 ; 100[$, $F(x) = \\frac{1}{8}$ ; pour $x \\in [100 ; 300[$, $F(x) = \\frac{1}{2}$ ; pour $x \\in [300 ; 600[$, $F(x) = \\frac{7}{8}$ ; pour $x \\in [600 ; +\\infty[$, $F(x) = 1$. Chaque saut de la fonction en $x_i$ a pour hauteur exactement $P(X = x_i)$ !',
    formula: {
      name: 'Saut en x_i',
      formula: 'P(X = x_i) = F(x_i) - \\lim_{x \\to x_i^-} F(x)',
    },
    exercise: {
      id: 'tc_m_num_l02_p04_q05',
      type: 'mcq',
      prompt: 'Avec cette même fonction de répartition $F$, que vaut $F(300)$ (attention aux bornes fermées/ouvertes) ?',
      options: ['$\\frac{1}{2}$', '$\\frac{7}{8}$', '$1$', '$\\frac{3}{8}$'],
      correctAnswerIndex: 1,
      explanation: 'Par définition $F(300) = P(X \\leqslant 300)$ inclut $X = 300$, donc sur $[300 ; 600[$, $F(300) = \\frac{1}{8} + \\frac{3}{8} + \\frac{3}{8} = \\frac{7}{8}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Attention aux bornes',
    stepTheme: 'orange',
    stepTitle: 'Bornes fermées à gauche $[x_i ; x_{i+1}[$ et valeur à gauche/droite',
    paragraphText:
      'Dans l’expression de $F(x)$, les intervalles sont toujours fermés à gauche et ouverts à droite : $[x_i ; x_{i+1}[$, car $F(x) = P(X \\leqslant x)$ (inégalité large). Et attention dans l’Exercice 3 p.10 du PDF (les 10 morceaux A à J choisis au hasard avec la même probabilité) : chaque morceau a pour probabilité $\\frac{1}{10}$ (et NON sa durée divisée par $2500$ comme écrit par erreur dans le corrigé du PDF !). Ainsi $P(E_1 \\text{ « 240 s »}) = \\frac{3}{10}$ et $P(E_2 \\text{ « > 220 s »}) = \\frac{8}{10} = \\frac{4}{5}$.',
    konanTip: 'Quand un énoncé dit « tous les morceaux ont la même probabilité d’être sélectionnés » sur $10$ morceaux, la proba élémentaire est $\\frac{1}{10}$, jamais proportionnelle à la durée !',
    exercise: {
      id: 'tc_m_num_l02_p04_q06',
      type: 'mcq',
      prompt: 'Dans l’Exercice 3 ($10$ morceaux équiprobables dont $2$ de $200\\text{ s}$, $3$ de $240\\text{ s}$, $1$ de $260\\text{ s}$, $4$ de $280\\text{ s}$), quelle est la vraie valeur de $P(X = 240)$ ?',
      options: ['$\\frac{36}{125}$', '$\\frac{3}{10}$', '$\\frac{2}{5}$', '$\\frac{1}{10}$'],
      correctAnswerIndex: 1,
      explanation: 'Les $10$ morceaux sont équiprobables ($\\frac{1}{10}$ chacun) et $3$ d’entre eux ($C, F, I$) durent $240\\text{ s}$, donc $P(X = 240) = \\frac{3}{10}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Lire F pour P(a < X ≤ b)',
    stepTheme: 'green',
    stepTitle: 'Retrouver une probabilité à partir de $F$',
    paragraphText:
      'Pour tous réels $a < b$, on a la relation utile $P(a < X \\leqslant b) = F(b) - F(a)$. De plus, $P(X > a) = 1 - F(a)$. Ces deux égalités évitent de recomptabiliser les probabilités une par une.',
    formula: {
      name: 'Calcul via F',
      formula: 'P(a < X \\leqslant b) = F(b) - F(a) \\qquad ; \\qquad P(X > a) = 1 - F(a)',
    },
    exercise: {
      id: 'tc_m_num_l02_p04_q07',
      type: 'mcq',
      prompt: 'Sachant que $F(100) = \\frac{1}{2}$ et $F(600) = 1$, que vaut $P(100 < X \\leqslant 600)$ ?',
      options: ['$\\frac{1}{2}$', '$\\frac{3}{8}$', '$\\frac{7}{8}$', '$\\frac{1}{8}$'],
      correctAnswerIndex: 0,
      explanation: '$P(100 < X \\leqslant 600) = F(600) - F(100) = 1 - \\frac{1}{2} = \\frac{1}{2}$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Espérance',
    stepTheme: 'blue',
    stepTitle: 'Espérance mathématique $E(X)$',
    paragraphText:
      'Soit $X$ une variable aléatoire prenant les valeurs $x_1, \\dots, x_n$ avec les probabilités $p_1, \\dots, p_n$. L’**espérance mathématique** (ou moyenne) de $X$ est le nombre réel $E(X) = \\sum_{i=1}^n x_i p_i = x_1 p_1 + x_2 p_2 + \\dots + x_n p_n$. C’est la valeur moyenne obtenue sur un très grand nombre de répétitions indépendantes de l’expérience.',
    formula: {
      name: 'Espérance mathématique',
      formula: 'E(X) = \\sum_{i=1}^n x_i\\,p_i = x_1 p_1 + x_2 p_2 + \\dots + x_n p_n',
    },
    exercise: {
      id: 'tc_m_num_l02_p05_q01',
      type: 'mcq',
      prompt: 'Pour $X \\in \\{-1000, 100, 300, 600\\}$ de probabilités respectives $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$, que vaut $E(X)$ ?',
      options: ['$0$', '$100$', '$200$', '$125$'],
      correctAnswerIndex: 1,
      explanation: '$E(X) = \\frac{-1000 + 300 + 900 + 600}{8} = \\frac{800}{8} = 100$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'propriete',
    stepBadge: 'Équité d’un jeu',
    stepTheme: 'violet',
    stepTitle: 'Interpréter le signe de $E(X)$ pour un jeu de hasard',
    paragraphText:
      'Lorsque $X$ modélise le gain algébrique d’un joueur (somme reçue moins mise) : si $E(X) > 0$, le jeu est **avantageux (favorable)** pour le joueur ; si $E(X) < 0$, le jeu est **désavantageux** pour le joueur ; si $E(X) = 0$, le jeu est dit **équitable**.',
    formula: {
      name: 'Jeu équitable',
      formula: '\\text{Jeu équitable} \\iff E(X) = 0',
    },
    exercise: {
      id: 'tc_m_num_l02_p05_q02',
      type: 'mcq',
      prompt: 'Dans l’Exercice 1 p.9 ($+600$ pour $FFF$, $+300$ pour $2F$, $+100$ pour $1F$, $-S$ pour $PPP$ sur $3$ lancers d’une pièce équilibrée), quelle perte $S$ rend le jeu équitable ?',
      options: ['$S = 1000\\text{ F}$', '$S = 1800\\text{ F}$', '$S = 900\\text{ F}$', '$S = 2000\\text{ F}$'],
      correctAnswerIndex: 1,
      explanation: '$E(X) = \\frac{-S + 3\\times 100 + 3\\times 300 + 600}{8} = \\frac{1800 - S}{8} = 0 \\iff S = 1800\\text{ F}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'definition',
    stepBadge: 'Variance & écart-type',
    stepTheme: 'blue',
    stepTitle: 'Variance $V(X)$ et écart-type $\\sigma(X)$',
    paragraphText:
      'La **variance** de $X$ mesure la dispersion des valeurs autour de la moyenne $E(X)$ : $V(X) = \\sum_{i=1}^n (x_i - E(X))^2 p_i \\geqslant 0$. L’**écart-type** est sa racine carrée : $\\sigma(X) = \\sqrt{V(X)}$, qui a la même unité que $X$. Plus $\\sigma(X)$ est petit, plus les valeurs sont concentrées autour de $E(X)$.',
    formula: {
      name: 'Variance et écart-type',
      formula: 'V(X) = \\sum_{i=1}^n (x_i - E(X))^2 p_i \\qquad ; \\qquad \\sigma(X) = \\sqrt{V(X)}',
    },
    exercise: {
      id: 'tc_m_num_l02_p05_q03',
      type: 'mcq',
      prompt: 'La variance $V(X)$ peut-elle être strictement négative ?',
      options: [
        'Oui, si $E(X) < 0$',
        'Non, jamais : c’est une somme de termes positifs ou nuls',
        'Oui, si certaines valeurs $x_i$ sont négatives',
        'Seulement quand $E(X) = 0$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $(x_i - E(X))^2 \\geqslant 0$ et $p_i \\geqslant 0$ pour tout $i$, on a toujours $V(X) \\geqslant 0$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Formule de Koenig-Huygens',
    stepTheme: 'violet',
    stepTitle: 'Calcul rapide de la variance : $V(X) = E(X^2) - [E(X)]^2$',
    paragraphText:
      'Pour calculer $V(X)$ sans manipuler $(x_i - E(X))^2$, on utilise la formule développée (Koenig-Huygens) : $V(X) = E(X^2) - [E(X)]^2 = \\left(\\sum_{i=1}^n x_i^2 p_i\\right) - [E(X)]^2$. Attention à ne pas oublier d’élever $E(X)$ au carré !',
    formula: {
      name: 'Formule pratique de la variance',
      formula: 'V(X) = \\sum_{i=1}^n x_i^2\\,p_i - [E(X)]^2',
    },
    exercise: {
      id: 'tc_m_num_l02_p05_q04',
      type: 'mcq',
      prompt: 'Pour $X \\in \\{-1000, 100, 300, 600\\}$ ($p = \\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$) et $E(X) = 100$, que vaut $V(X)$ ?',
      options: ['$207\\,500$', '$197\\,500$', '$10\\,000$', '$187\\,500$'],
      correctAnswerIndex: 1,
      explanation: '$E(X^2) = \\frac{(-1000)^2 + 3(100^2) + 3(300^2) + 600^2}{8} = \\frac{1\\,660\\,000}{8} = 207\\,500$. Donc $V(X) = 207\\,500 - 100^2 = 197\\,500$ (et $\\sigma(X) = 50\\sqrt{79} \\approx 444{,}4$).',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Calcul complet',
    stepTheme: 'slate',
    stepTitle: 'Calculer $E(X)$ pour l’urne des $2$ blanches / $4$ rouges et pour les $10$ morceaux',
    paragraphText:
      'Pour l’urne de la page 5 ($X \\in \\{0, 1, 2\\}$, probas $\\frac{1}{5}, \\frac{3}{5}, \\frac{1}{5}$), $E(X) = 0\\times\\frac{1}{5} + 1\\times\\frac{3}{5} + 2\\times\\frac{1}{5} = 1$, et $V(X) = 0 + 1\\times\\frac{3}{5} + 4\\times\\frac{1}{5} - 1^2 = \\frac{7}{5} - 1 = \\frac{2}{5}$. Et pour les $10$ morceaux équiprobables ($\\frac{1}{10}$ chacun), $E(X) = \\frac{2\\times 200 + 3\\times 240 + 260 + 4\\times 280}{10} = \\frac{2500}{10} = 250$ secondes !',
    exercise: {
      id: 'tc_m_num_l02_p05_q05',
      type: 'mcq',
      prompt: 'Avec $X \\in \\{0, 1, 2\\}$ de probabilités $\\frac{1}{5}, \\frac{3}{5}, \\frac{1}{5}$, quel est l’écart-type $\\sigma(X)$ ?',
      options: ['$\\frac{2}{5}$', '$\\sqrt{\\frac{2}{5}}$', '$1$', '$\\frac{7}{5}$'],
      correctAnswerIndex: 1,
      explanation: 'On a trouvé $E(X) = 1$ et $V(X) = \\frac{2}{5}$, donc $\\sigma(X) = \\sqrt{V(X)} = \\sqrt{\\frac{2}{5}}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'propriete',
    stepBadge: 'Changement affine',
    stepTheme: 'violet',
    stepTitle: 'Effet d’une transformation affine $Y = aX + b$',
    paragraphText:
      'Si l’on transforme une variable aléatoire en $Y = aX + b$ (par exemple passer d’une recette $X$ au gain net $X - m$, soit $a=1, b=-m$), l’espérance est linéaire : $E(aX + b) = aE(X) + b$. En revanche, la variance ignore la translation $+b$ et multiplie par $a^2$ : $V(aX + b) = a^2 V(X)$, soit $\\sigma(aX + b) = |a|\\sigma(X)$.',
    formula: {
      name: 'Linéarité et dispersion de aX + b',
      formula: 'E(aX+b) = aE(X)+b \\qquad ; \\qquad V(aX+b) = a^2 V(X)',
    },
    exercise: {
      id: 'tc_m_num_l02_p05_q06',
      type: 'mcq',
      prompt: 'On suppose $E(X) = 336$ et $V(X) = 400$. Pour le gain net $G = X - 300$, que valent $E(G)$ et $\\sigma(G)$ ?',
      options: [
        '$E(G) = 36$ et $\\sigma(G) = 20$',
        '$E(G) = 36$ et $\\sigma(G) = 280$',
        '$E(G) = 336$ et $\\sigma(G) = 20$',
        '$E(G) = 36$ et $V(G) = 100$',
      ],
      correctAnswerIndex: 0,
      explanation: '$E(X - 300) = 336 - 300 = 36$, et retrancher une constante ne change pas la dispersion : $V(X - 300) = V(X) = 400 \\implies \\sigma(G) = 20$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'piege',
    stepBadge: 'Vigilance calcul',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre $E(X^2)$ et $[E(X)]^2$',
    paragraphText:
      'En général, $E(X^2) \\ne [E(X)]^2$ : leur différence est justement la variance $V(X) = E(X^2) - [E(X)]^2 \\geqslant 0$ ! De plus, pour que $V(X) = 0$, il faudrait que $X$ soit presque sûrement constante ($X(\\omega) = E(X)$ pour toute issue de probabilité non nulle).',
    exercise: {
      id: 'tc_m_num_l02_p05_q07',
      type: 'mcq',
      prompt: 'Une variable aléatoire $X$ vérifie $E(X) = 3$ et $E(X^2) = 13$. Que vaut $V(X)$ ?',
      options: ['$10$', '$4$', '$16$', '$2$'],
      correctAnswerIndex: 1,
      explanation: '$V(X) = E(X^2) - [E(X)]^2 = 13 - 3^2 = 13 - 9 = 4$ (donc $\\sigma(X) = 2$).',
    },
  },
];

const p06Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Épreuve de Bernoulli',
    stepTheme: 'blue',
    stepTitle: 'Épreuve de Bernoulli et paramètre $p$',
    paragraphText:
      'Une **épreuve de Bernoulli** est une expérience aléatoire ne conduisant qu’à deux éventualités exclusives : l’une appelée **succès** ($S$) de probabilité $p$ (appelée paramètre de l’épreuve), et l’autre appelée **échec** ($\\overline{S}$) de probabilité $1 - p$. Exemple : lancer un dé équilibré et observer « obtenir $6$ » donne une épreuve de Bernoulli de paramètre $p = \\frac{1}{6}$ (et échec $\\frac{5}{6}$).',
    formula: {
      name: 'Paramètre p',
      formula: 'P(S) = p \\qquad \\text{et} \\qquad P(\\overline{S}) = 1 - p',
    },
    exercise: {
      id: 'tc_m_num_l02_p06_q01',
      type: 'mcq',
      prompt: 'Un feu tricolore est vert avec une probabilité de $\\frac{3}{4}$. Un automobiliste passe une fois au carrefour et regarde si le feu est vert. Quelle est cette expérience ?',
      options: [
        'Une loi normale',
        'Une épreuve de Bernoulli de paramètre $p = \\frac{3}{4}$',
        'Un schéma de Bernoulli de paramètres $n = 3$ et $p = \\frac{1}{4}$',
        'Une partition à $3$ états',
      ],
      correctAnswerIndex: 1,
      explanation: 'Il n’y a que deux issues exclusives (Vert / Pas vert) avec $P(S) = \\frac{3}{4}$ et $P(\\overline{S}) = \\frac{1}{4}$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Schéma de Bernoulli',
    stepTheme: 'blue',
    stepTitle: 'Schéma de Bernoulli à $n$ épreuves et loi binomiale $\\mathcal{B}(n ; p)$',
    paragraphText:
      'Un **schéma de Bernoulli** de paramètres $n$ et $p$ consiste à répéter $n$ fois de suite ($n \\geqslant 2$), de façon **identique et indépendante** (par exemple tirages avec remise), la même épreuve de Bernoulli de paramètre $p$. La variable aléatoire $X$ qui compte le nombre total $k$ ($0 \\leqslant k \\leqslant n$) de succès obtenus suit la **loi binomiale** notée $\\mathcal{B}(n ; p)$.',
    formula: {
      name: 'Formule de la loi binomiale B(n ; p)',
      formula: '\\forall k \\in \\{0, 1, \\dots, n\\},\\quad P(X = k) = C_n^k\\, p^k\\, (1 - p)^{n - k}',
    },
    exercise: {
      id: 'tc_m_num_l02_p06_q02',
      type: 'mcq',
      prompt: 'On lance $5$ fois un dé équilibré et on s’intéresse au nombre d’apparitions du chiffre $2$. Quelle est la probabilité d’obtenir exactement $4$ fois le chiffre $2$ ?',
      options: ['$\\frac{5}{7776}$', '$\\frac{25}{7776}$', '$\\frac{1}{1296}$', '$\\frac{125}{7776}$'],
      correctAnswerIndex: 1,
      explanation: '$X \\sim \\mathcal{B}\\left(5 ; \\frac{1}{6}\\right)$ : $P(X = 4) = C_5^4 \\left(\\frac{1}{6}\\right)^4 \\left(\\frac{5}{6}\\right)^1 = 5 \\times \\frac{1}{1296} \\times \\frac{5}{6} = \\frac{25}{7776}$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Feu tricolore',
    stepTheme: 'slate',
    stepTitle: 'Calculer $P(X = k)$ dans un contexte concret',
    paragraphText:
      'L’automobiliste passe $5$ fois indépendamment au carrefour ($p = \\frac{3}{4}$). Soit $X$ le nombre de feux verts rencontrés : $X$ suit $\\mathcal{B}\\left(5 ; \\frac{3}{4}\\right)$. La probabilité de rencontrer exactement $3$ fois le feu vert vaut $P(X = 3) = C_5^3 \\left(\\frac{3}{4}\\right)^3 \\left(\\frac{1}{4}\\right)^2 = 10 \\times \\frac{27}{64} \\times \\frac{1}{16} = \\frac{270}{1024} = \\frac{135}{512} \\approx 0{,}264$.',
    exercise: {
      id: 'tc_m_num_l02_p06_q03',
      type: 'mcq',
      prompt: 'Dans l’exercice du restaurant de Mariam ($n = 3$ jours indépendants, $p = 0{,}58$ de réaliser un bénéfice), quel calcul donne $P(X = 2)$ ?',
      options: [
        '$(0{,}58)^2 (0{,}42)$',
        '$C_3^2 (0{,}58)^2 (0{,}42)^1 \\approx 0{,}424$',
        '$C_3^2 (0{,}42)^2 (0{,}58)^1$',
        '$2 \\times 0{,}58$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Il ne faut pas oublier le coefficient binomial $C_3^2 = 3$ comptant les ordres possibles ! $3 \\times 0{,}58^2 \\times 0{,}42 = 0{,}423864 \\approx 0{,}424$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Formules rapides',
    stepTheme: 'violet',
    stepTitle: 'Espérance $E(X) = np$ et variance $V(X) = np(1 - p)$ de $\\mathcal{B}(n ; p)$',
    paragraphText:
      'Lorsque $X$ suit une loi binomiale $\\mathcal{B}(n ; p)$, inutile de dresser le tableau complet pour trouver la moyenne ou l’écart-type ! On applique directement les deux formules : $E(X) = np$ et $V(X) = np(1 - p)$ (d’où $\\sigma(X) = \\sqrt{np(1 - p)}$). Pour le feu tricolore ($n=5, p=\\frac{3}{4}$) : $E(X) = \\frac{15}{4} = 3{,}75$ et $V(X) = 5 \\times \\frac{3}{4} \\times \\frac{1}{4} = \\frac{15}{16}$.',
    formula: {
      name: 'Espérance et variance binomiales',
      formula: 'X \\sim \\mathcal{B}(n ; p) \\implies E(X) = np \\quad \\text{et} \\quad V(X) = np(1 - p)',
    },
    exercise: {
      id: 'tc_m_num_l02_p06_q04',
      type: 'mcq',
      prompt: 'Mariam étudie son restaurant sur $3$ jours successifs indépendants avec $p = 0{,}58$. Quelle est son espérance $E(X)$ du nombre de jours bénéficiaires ?',
      options: ['$0{,}58$', '$1{,}74$', '$1{,}26$', '$0{,}7308$'],
      correctAnswerIndex: 1,
      explanation: '$E(X) = n \\times p = 3 \\times 0{,}58 = 1{,}74$ jours en moyenne sur $3$ jours.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'methode',
    stepBadge: 'Seuil minimal n',
    stepTheme: 'green',
    stepTitle: 'Trouver $n$ tel que $P(\\text{au moins } 1 \\text{ succès}) \\geqslant \\alpha$',
    paragraphText:
      'Question classique du Bac (Mariam, q3b p.13) : on répète $n$ fois l’épreuve et on note $P_n$ la probabilité d’obtenir **au moins un** succès. L’événement contraire est « $0$ succès » de probabilité $(1 - p)^n$. Donc $P_n = 1 - (1 - p)^n$. Pour résoudre $P_n \\geqslant 0{,}9999$ avec $p = 0{,}58$ ($1 - p = 0{,}42$), on passe au logarithme : $(0{,}42)^n \\leqslant 0{,}0001 \\iff n\\ln(0{,}42) \\leqslant \\ln(0{,}0001) \\iff n \\geqslant \\frac{\\ln(0{,}0001)}{\\ln(0{,}42)} \\approx 10{,}61$ (car $\\ln(0{,}42) < 0$ change le sens !). D’où $n_{\\min} = 11$.',
    formula: {
      name: 'Au moins un succès et passage au ln',
      formula: '1 - (1-p)^n \\geqslant \\alpha \\iff n \\geqslant \\frac{\\ln(1-\\alpha)}{\\ln(1-p)} \\quad (\\text{car } \\ln(1-p) < 0)',
    },
    exercise: {
      id: 'tc_m_num_l02_p06_q05',
      type: 'mcq',
      prompt: 'Lorsqu’on résout $n \\ln(0{,}42) \\leqslant \\ln(0{,}0001)$, pourquoi le signe $\\leqslant$ devient-il $\\geqslant$ en divisant par $\\ln(0{,}42)$ ?',
      options: [
        'Parce que $\\ln(0{,}0001) > 0$',
        'Parce que $0 < 0{,}42 < 1$, donc $\\ln(0{,}42) < 0$',
        'Parce que $n$ est un entier naturel',
        'C’est une convention propre aux probabilités',
      ],
      correctAnswerIndex: 1,
      explanation: 'Comme $0{,}42 \\in ]0 ; 1[$, son logarithme népérien $\\ln(0{,}42)$ est strictement négatif : diviser une inégalité par un nombre négatif inverse son sens.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Piège du sans remise',
    stepTheme: 'orange',
    stepTitle: 'Vérifier l’indépendance avant d’utiliser $\\mathcal{B}(n ; p)$ !',
    paragraphText:
      'Pour justifier qu’une variable suit une loi binomiale, il faut impérativement citer **deux conditions** : (1) on répète $n$ fois la même épreuve de Bernoulli à deux issues ; (2) les répétitions sont **indépendantes** (ex : tirage *avec* remise, ou population très grande assimilée à un tirage avec remise). Un tirage *sans remise* dans une petite urne ne donne PAS une loi binomiale !',
    konanTip: 'Ne jamais écrire « $X$ suit une loi binomiale » sans préciser les mots « répétitions identiques et indépendantes » et donner les paramètres $n$ et $p$.',
    exercise: {
      id: 'tc_m_num_l02_p06_q06',
      type: 'mcq',
      prompt: 'Dans quel cas la variable $X$ (« nombre de boules blanches tirées ») suit-elle une loi binomiale ?',
      options: [
        'On tire simultanément $3$ boules d’une urne contenant $6$ boules',
        'On tire successivement sans remise $3$ boules d’une urne de $6$ boules',
        'On tire successivement avec remise $5$ boules d’une urne contenant $2$ blanches et $4$ rouges',
        'On tire des boules jusqu’à obtenir la première blanche',
      ],
      correctAnswerIndex: 2,
      explanation: 'Seul le tirage successif AVEC remise en nombre fixé ($n=5$) assure l’indépendance et la constance de $p = \\frac{2}{6} = \\frac{1}{3}$ à chaque tirage.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Bilan kermesse',
    stepTheme: 'slate',
    stepTitle: 'Calculer une espérance ou une variance à plusieurs épreuves',
    paragraphText:
      'On tire $10$ fois de suite avec remise dans l’urne ($3$ rouges, $2$ noires). Le nombre $N$ de boules rouges obtenues suit $\\mathcal{B}(10 ; 0{,}6)$. On obtient instantanément : $E(N) = 10 \\times 0{,}6 = 6$ boules rouges en moyenne, $V(N) = 10 \\times 0{,}6 \\times 0{,}4 = 2{,}4$ et $\\sigma(N) = \\sqrt{2{,}4} \\approx 1{,}55$.',
    exercise: {
      id: 'tc_m_num_l02_p06_q07',
      type: 'mcq',
      prompt: 'Si $X \\sim \\mathcal{B}(10 ; 0{,}6)$, que valent $E(X)$ et $V(X)$ ?',
      options: [
        '$E(X) = 6$ et $V(X) = 2{,}4$',
        '$E(X) = 4$ et $V(X) = 6$',
        '$E(X) = 6$ et $V(X) = 3{,}6$',
        '$E(X) = 10$ et $V(X) = 2{,}4$',
      ],
      correctAnswerIndex: 0,
      explanation: '$E(X) = np = 10 \\times 0{,}6 = 6$ et $V(X) = np(1 - p) = 6 \\times 0{,}4 = 2{,}4$.',
    },
  },
];

export const MATHS_TLE_C_L02_PROBABILITE_CONDITIONNELLE: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l02_probabilite_conditionnelle',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 2,
  title: 'Leçon 2 : Probabilité conditionnelle et variable aléatoire',
  summary:
    'Probabilités conditionnelles P_B(A), formule des probabilités composées, indépendance de deux événements, partition, arbre pondéré et probabilités totales, variable aléatoire discrète, fonction de répartition, espérance, variance, écart-type et loi binomiale B(n ; p).',
  officialVolumeHours: 6,
  contentVersion: 2,
  source: 'CÔTE D’IVOIRE – ÉCOLE NUMÉRIQUE — Terminale C Mathématiques (Leçon 2)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l02_probabilite_conditionnelle_p01',
      order: 1,
      title: 'Probabilité conditionnelle et probabilités composées',
      summary:
        'Calculer P_B(A) = P(A ∩ B) / P(B), utiliser P(A ∩ B) = P(B) × P_B(A), passer à l’événement contraire P_B(Ā) = 1 − P_B(A) et éviter la confusion entre P_A(B) et P_B(A).',
      conceptExplanation:
        'Lorsque l’événement B (de probabilité non nulle) est réalisé, on restreint l’univers à B : la probabilité conditionnelle de A sachant B est $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$. On en déduit immédiatement $P(A \\cap B) = P(B) \\times P_B(A) = P(A) \\times P_A(B)$.',
      keyRule: 'L’événement connu après « sachant » se place en indice et au dénominateur : $P_B(A) = \\frac{P(A \\cap B)}{P(B)}$.',
      formulas: [
        { name: 'Probabilité conditionnelle', formula: 'P_B(A) = P(A/B) = \\frac{P(A \\cap B)}{P(B)}' },
        { name: 'Probabilités composées', formula: 'P(A \\cap B) = P(A)\\,P_A(B) = P(B)\\,P_B(A)' },
      ],
      workedExample: {
        title: 'Calculer P_E(F) et P_F(E)',
        statement: 'Soient $E$ et $F$ tels que $P(E) = \\frac{1}{2}$, $P(F) = \\frac{3}{4}$ et $P(E \\cap F) = \\frac{2}{5}$. Calculer $P_E(F)$ et $P_F(E)$.',
        methodSteps: [
          '$P_E(F) = \\frac{P(E \\cap F)}{P(E)} = \\frac{2/5}{1/2} = \\frac{4}{5}$.',
          '$P_F(E) = \\frac{P(E \\cap F)}{P(F)} = \\frac{2/5}{3/4} = \\frac{8}{15}$.',
        ],
        conclusion: '$P_E(F) = \\frac{4}{5}$ et $P_F(E) = \\frac{8}{15}$ (valeurs distinctes).',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l02_probabilite_conditionnelle_p02',
      order: 2,
      title: 'Événements indépendants (vs incompatibilité)',
      summary:
        'Reconnaître deux événements indépendants via P(A ∩ B) = P(A)P(B) ou P_B(A) = P(A), étendre l’indépendance aux contraires et distinguer indépendance et incompatibilité.',
      conceptExplanation:
        'Deux événements A et B sont indépendants si $P(A \\cap B) = P(A)\\times P(B)$, soit $P_B(A) = P(A)$ lorsque $P(B) > 0$. Si A et B sont indépendants, les couples $(\\overline{A}, B)$, $(A, \\overline{B})$ et $(\\overline{A}, \\overline{B})$ le sont aussi. En revanche, deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.',
      keyRule: 'Indépendants $\\iff P(A \\cap B) = P(A)P(B)$ ; Incompatibles $\\iff A \\cap B = \\emptyset$.',
      formulas: [
        { name: 'Indépendance', formula: 'P(A \\cap B) = P(A)\\,P(B)' },
        { name: 'Caractérisation conditionnelle', formula: 'P_B(A) = P(A) \\quad (P(B) \\ne 0)' },
      ],
      workedExample: {
        title: 'Deux lancers d’une pièce équilibrée',
        statement: 'Soit $A$ « Face au $1^{\\text{er}}$ lancer » et $B$ « Face au $2^{\\text{nd}}$ lancer ». Montrer que $A$ et $B$ sont indépendants.',
        methodSteps: [
          '$\\Omega$ comporte $4$ issues équiprobables : $P(A) = \\frac{2}{4} = \\frac{1}{2}$ et $P(B) = \\frac{2}{4} = \\frac{1}{2}$.',
          '$A \\cap B = \\{(F ; F)\\}$ donc $P(A \\cap B) = \\frac{1}{4}$.',
          'On vérifie $P(A) \\times P(B) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = P(A \\cap B)$.',
        ],
        conclusion: '$A$ et $B$ sont deux événements indépendants.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l02_probabilite_conditionnelle_p03',
      order: 3,
      title: 'Partition, arbre pondéré et formule des probabilités totales',
      summary:
        'Construire et lire un arbre pondéré à partir d’une partition, calculer P(A) par la formule des probabilités totales et inverser le conditionnement (Bayes).',
      conceptExplanation:
        'Lorsqu’une famille $(B_1, \\dots, B_n)$ forme une partition de $\\Omega$, tout événement A se décompose le long des branches : $P(A) = \\sum_{i=1}^n P(A \\cap B_i) = \\sum_{i=1}^n P_{B_i}(A)\\,P(B_i)$. Sur un arbre pondéré, on multiplie le long d’un chemin et on additionne les chemins conduisant au même événement.',
      keyRule: 'Sur un arbre : somme aux nœuds = $1$, produit le long d’un chemin, somme des chemins menant à $A$.',
      formulas: [
        { name: 'Probabilités totales', formula: 'P(A) = \\sum_{i=1}^n P_{B_i}(A)\\,P(B_i)' },
        { name: 'Cas binaire', formula: 'P(A) = P(B)\\,P_B(A) + P(\\overline{B})\\,P_{\\overline{B}}(A)' },
      ],
      workedExample: {
        title: 'Restaurant de Mariam (probabilités totales et Bayes)',
        statement: 'Affluence $A$ ($0{,}6$) avec bénéfice $B$ ($0{,}7$) ; sans affluence $\\overline{A}$ ($0{,}4$) avec bénéfice $B$ ($0{,}4$). Calculer $P(B)$ puis $P_B(A)$.',
        methodSteps: [
          '$P(A \\cap B) = 0{,}6 \\times 0{,}7 = 0{,}42$ et $P(\\overline{A} \\cap B) = 0{,}4 \\times 0{,}4 = 0{,}16$.',
          'Par probabilités totales : $P(B) = 0{,}42 + 0{,}16 = 0{,}58$.',
          'Par inversion : $P_B(A) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0{,}42}{0{,}58} = \\frac{21}{29}$.',
        ],
        conclusion: '$P(B) = 0{,}58$ et $P_B(A) = \\frac{21}{29}$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l02_probabilite_conditionnelle_p04',
      order: 4,
      title: 'Variable aléatoire, loi de probabilité et fonction de répartition',
      summary:
        'Déterminer l’univers image X(Ω), établir la loi de probabilité en vérifiant Σ p_i = 1, et tracer/exploiter la fonction en escalier F(x) = P(X ≤ x).',
      conceptExplanation:
        'Une variable aléatoire X associe un réel à chaque issue de $\\Omega$. Sa loi donne $P(X = x_i)$ pour chaque valeur rangée par ordre croissant, avec $\\sum p_i = 1$. Sa fonction de répartition $F(x) = P(X \\leqslant x)$ est croissante, en escalier, continue à droite, nulle avant $x_1$ et égale à $1$ à partir de $x_n$.',
      keyRule: 'Toujours vérifier $\\sum_{i=1}^n P(X = x_i) = 1$, et placer les bornes fermées à gauche $[x_i ; x_{i+1}[$ pour $F(x)$.',
      formulas: [
        { name: 'Normalisation de la loi', formula: '\\sum_{i=1}^n P(X = x_i) = 1' },
        { name: 'Fonction de répartition', formula: 'F(x) = P(X \\leqslant x) \\in [0 ; 1]' },
      ],
      workedExample: {
        title: 'Tirage simultané de 3 boules parmi 6',
        statement: 'Urne : $2$ blanches et $4$ rouges. On tire simultanément $3$ boules et $X$ compte les blanches. Donner la loi de $X$.',
        methodSteps: [
          '$\\operatorname{Card}(\\Omega) = C_6^3 = 20$ et $X(\\Omega) = \\{0 ; 1 ; 2\\}$.',
          '$P(X=0) = \\frac{C_4^3}{20} = \\frac{4}{20} = \\frac{1}{5}$ ; $P(X=1) = \\frac{C_2^1 C_4^2}{20} = \\frac{12}{20} = \\frac{3}{5}$ ; $P(X=2) = \\frac{C_2^2 C_4^1}{20} = \\frac{4}{20} = \\frac{1}{5}$.',
          'Vérification : $\\frac{1}{5} + \\frac{3}{5} + \\frac{1}{5} = 1$.',
        ],
        conclusion: 'Loi de $X$ : $0 \\mapsto \\frac{1}{5}$, $1 \\mapsto \\frac{3}{5}$, $2 \\mapsto \\frac{1}{5}$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l02_probabilite_conditionnelle_p05',
      order: 5,
      title: 'Espérance mathématique, variance, écart-type et équité',
      summary:
        'Calculer E(X) = Σ x_i p_i, interpréter son signe en termes de jeu équitable, et calculer V(X) = E(X²) − [E(X)]² et σ(X) = √V(X).',
      conceptExplanation:
        'L’espérance $E(X)$ représente le gain moyen par partie : un jeu est avantageux si $E(X) > 0$, équitable si $E(X) = 0$, désavantageux si $E(X) < 0$. La variance $V(X) = E(X^2) - [E(X)]^2$ et l’écart-type $\\sigma(X) = \\sqrt{V(X)}$ mesurent la dispersion autour de $E(X)$.',
      keyRule: 'Formule rapide de variance : $V(X) = \\sum x_i^2 p_i - [E(X)]^2 \\geqslant 0$.',
      formulas: [
        { name: 'Espérance', formula: 'E(X) = \\sum_{i=1}^n x_i\\,p_i' },
        { name: 'Variance et écart-type', formula: 'V(X) = \\sum_{i=1}^n x_i^2\\,p_i - [E(X)]^2 \\qquad ; \\qquad \\sigma(X) = \\sqrt{V(X)}' },
      ],
      workedExample: {
        title: 'Espérance et variance d’un jeu à 3 lancers',
        statement: 'Pour $X \\in \\{-1000, 100, 300, 600\\}$ de probabilités $\\frac{1}{8}, \\frac{3}{8}, \\frac{3}{8}, \\frac{1}{8}$, calculer $E(X)$, $V(X)$ et $\\sigma(X)$.',
        methodSteps: [
          '$E(X) = \\frac{-1000 + 300 + 900 + 600}{8} = 100$.',
          '$E(X^2) = \\frac{1000^2 + 3\\times 100^2 + 3\\times 300^2 + 600^2}{8} = 207\\,500$.',
          '$V(X) = 207\\,500 - 100^2 = 197\\,500$ et $\\sigma(X) = \\sqrt{197\\,500} = 50\\sqrt{79} \\approx 444{,}4$.',
        ],
        conclusion: '$E(X) = 100 > 0$ (jeu favorable), $V(X) = 197\\,500$, $\\sigma(X) \\approx 444{,}4$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l02_probabilite_conditionnelle_p06',
      order: 6,
      title: 'Épreuve de Bernoulli, schéma de Bernoulli et loi binomiale',
      summary:
        'Reconnaître un schéma de Bernoulli à n épreuves identiques et indépendantes, appliquer P(X=k) = C_n^k p^k (1−p)^(n−k), calculer E(X)=np, V(X)=np(1−p) et trouver le seuil n via ln.',
      conceptExplanation:
        'La répétition de $n$ épreuves de Bernoulli identiques et indépendantes de paramètre $p$ définit la loi binomiale $\\mathcal{B}(n ; p)$ : $P(X=k) = C_n^k p^k (1-p)^{n-k}$, avec $E(X) = np$ et $V(X) = np(1-p)$. Pour obtenir au moins un succès avec probabilité $\\geqslant \\alpha$, on résout $1 - (1-p)^n \\geqslant \\alpha$ avec $\\ln$.',
      keyRule: '$X \\sim \\mathcal{B}(n ; p) \\implies P(X=k) = C_n^k p^k (1-p)^{n-k}$, $E(X)=np$, $V(X)=np(1-p)$.',
      formulas: [
        { name: 'Loi binomiale', formula: 'P(X = k) = C_n^k\\, p^k\\, (1 - p)^{n - k}' },
        { name: 'Moments de B(n ; p)', formula: 'E(X) = np \\qquad ; \\qquad V(X) = np(1 - p)' },
      ],
      workedExample: {
        title: 'Seuil minimal de jours bénéficiaires',
        statement: 'On répète indépendamment un jour bénéficiaire ($p = 0{,}58$). Trouver le plus petit entier $n$ tel que $P_n = 1 - (0{,}42)^n \\geqslant 0{,}9999$.',
        methodSteps: [
          '$1 - (0{,}42)^n \\geqslant 0{,}9999 \\iff (0{,}42)^n \\leqslant 0{,}0001$.',
          'Passage au $\\ln$ (croissant) : $n \\ln(0{,}42) \\leqslant \\ln(0{,}0001)$.',
          'Comme $\\ln(0{,}42) < 0$, $n \\geqslant \\frac{\\ln(0{,}0001)}{\\ln(0{,}42)} \\approx 10{,}61$.',
        ],
        conclusion: 'La valeur minimale entière cherchée est $n = 11$.',
      },
      structuredSteps: p06Steps,
      exercises: p06Steps.map((s) => s.exercise),
    },
  ],
};
