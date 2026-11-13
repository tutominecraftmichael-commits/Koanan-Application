import type { CurriculumChapter, StructuredLessonStep } from '../../../lib/curriculum/types';

const p01Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'exemple',
    stepBadge: 'Situation d’apprentissage',
    stepTheme: 'blue',
    stepTitle: 'Étudier simultanément deux grandeurs : température et pluviométrie',
    paragraphText:
      'Des élèves relèvent sur $12$ mois la température moyenne $X$ (en °C) et la pluviométrie $Y$ (en mm). Quand la température baisse ($10\\text{–}13\\text{ °C}$ de décembre à mars), il pleut beaucoup ($49\\text{–}79\\text{ mm}$), et quand il fait chaud ($27\\text{–}28\\text{ °C}$ en juillet–août), il pleut très peu ($5\\text{–}6\\text{ mm}$). La statistique à deux variables permet d’abord de vérifier s’il existe un lien linéaire entre $X$ et $Y$ (ici $r \\approx -0{,}88$, forte corrélation négative !), puis de prévoir $Y$ à partir de $X$.',
    formula: {
      name: 'Série double sur n individus',
      formula: '\\text{Population de } n \\text{ individus} \\longmapsto \\text{couples } (x_i ; y_i)',
    },
    konanTip: 'En statistique à deux variables, on mesure deux grandeurs quantitatives sur les MÊMES individus (ou aux mêmes instants) pour tester si l’une permet de prévoir l’autre.',
    exercise: {
      id: 'tc_m_num_l11_stat_p01_q01',
      type: 'mcq',
      prompt: 'À la lecture du tableau météo (p.1), comment évolue globalement la pluviométrie $Y$ lorsque la température moyenne $X$ augmente ?',
      options: [
        'Elle augmente fortement',
        'Elle diminue globalement (liaison décroissante)',
        'Elle reste constante à $40\\text{ mm}$',
        'On ne mesure pas les deux grandeurs sur les mêmes mois',
      ],
      correctAnswerIndex: 1,
      explanation: 'Pour $X = 10\\text{ °C}$ on observe $\\approx 50\\text{ mm}$, tandis que pour $X = 27\\text{–}28\\text{ °C}$ on descend à $5\\text{–}6\\text{ mm}$ : les deux variables évoluent en sens opposé.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Série double & contingence',
    stepTheme: 'blue',
    stepTitle: 'Série statistique double $(x_i, y_j, n_{ij})$ et tableau de contingence',
    paragraphText:
      'On étudie deux caractères quantitatifs $X$ (modalités $x_1, \\dots, x_p$) et $Y$ (modalités $y_1, \\dots, y_q$) sur $n$ individus. On note $n_{ij}$ l’**effectif du couple $(x_i ; y_j)$**. L’ensemble des triplets $(x_i, y_j, n_{ij})$ forme la **série statistique double** de caractère $(X, Y)$, que l’on présente dans un tableau à double entrée appelé **tableau de contingence**. La somme de tous les $n_{ij}$ vaut l’effectif total $N$.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Tableau de contingence de $100$ ménages ($X$ enfants, $Y$ pièces)',
      tableData: {
        headers: ['$Y \\backslash X$', '$0$', '$1$', '$2$', '$3$', '$4$', '$5$', 'Total $Y$'],
        rows: [
          ['$1$ pièce', '$6$', '$4$', '$1$', '$0$', '$0$', '$0$', '$11$'],
          ['$2$ pièces', '$3$', '$11$', '$10$', '$5$', '$1$', '$0$', '$30$'],
          ['$3$ pièces', '$1$', '$3$', '$16$', '$13$', '$4$', '$1$', '$38$'],
          ['$4$ pièces', '$0$', '$1$', '$3$', '$5$', '$8$', '$4$', '$21$'],
          ['Total $X$', '$10$', '$19$', '$30$', '$23$', '$13$', '$5$', '$100$'],
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p01_q02',
      type: 'mcq',
      prompt: 'Dans le tableau de contingence des $100$ ménages ci-dessus, combien de ménages ont exactement $2$ enfants ($X = 2$) et occupent un appartement de $4$ pièces ($Y = 4$) ?',
      options: ['$1$', '$3$', '$10$', '$21$'],
      correctAnswerIndex: 1,
      explanation: 'À l’intersection de la colonne $X = 2$ et de la ligne $Y = 4$, on lit directement l’effectif $n_{34} = 3$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'definition',
    stepBadge: 'Séries marginales',
    stepTheme: 'blue',
    stepTitle: 'Extraire les séries marginales de $X$ et de $Y$',
    paragraphText:
      'En additionnant les effectifs de chaque **colonne** (dans la marge du bas), on obtient l’effectif total $n_i = \\sum_j n_{ij}$ de chaque modalité $x_i$ de $X$ : c’est la **série marginale de $X$** (ici $0 \\to 10$, $1 \\to 19$, $2 \\to 30$, $3 \\to 23$, $4 \\to 13$, $5 \\to 5$). En additionnant chaque **ligne** (marge de droite), on obtient la **série marginale de $Y$** ($1 \\to 11$, $2 \\to 30$, $3 \\to 38$, $4 \\to 21$).',
    formula: {
      name: 'Effectifs marginaux',
      formula: 'n_{i\\bullet} = \\sum_{j} n_{ij} \\qquad \\text{et} \\qquad n_{\\bullet j} = \\sum_{i} n_{ij}',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p01_q03',
      type: 'mcq',
      prompt: 'Toujours dans le tableau des $100$ ménages, combien de ménages ont $4$ enfants ($X = 4$) quel que soit le nombre de pièces ?',
      options: ['$8$', '$13$', '$21$', '$5$'],
      correctAnswerIndex: 1,
      explanation: 'On somme la colonne $X = 4$ : $0 + 1 + 4 + 8 = 13$ ménages.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'propriete',
    stepBadge: 'Fréquences marginales',
    stepTheme: 'violet',
    stepTitle: 'Calculer les fréquences marginales $f_i = \\frac{n_i}{N}$',
    paragraphText:
      'La **fréquence marginale** d’une modalité est le quotient de son effectif marginal par l’effectif total $N$ ($\\sum f_i = 1$). Pour $N = 100$ ménages, la fréquence marginale de $X = 3$ enfants vaut $\\frac{23}{100} = 0{,}23$ ($23\\%$), et celle de $Y = 3$ pièces vaut $\\frac{38}{100} = 0{,}38$ ($38\\%$).',
    formula: {
      name: 'Fréquence marginale',
      formula: 'f_i = \\frac{n_i}{N} \\qquad \\text{avec } \\sum f_i = 1',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p01_q04',
      type: 'mcq',
      prompt: 'Dans l’exemple des $100$ ménages, quelle est la fréquence marginale des appartements à $2$ pièces ($Y = 2$) ?',
      options: ['$\\frac{19}{100}$', '$\\frac{30}{100}$', '$\\frac{11}{100}$', '$\\frac{21}{100}$'],
      correctAnswerIndex: 1,
      explanation: 'L’effectif de la ligne $Y = 2$ vaut $3 + 11 + 10 + 5 + 1 + 0 = 30$, donc $f = \\frac{30}{100} = 0{,}30$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'exemple',
    stepBadge: 'Calcul marginal',
    stepTheme: 'slate',
    stepTitle: 'Calculer $\\bar{X}$ ou $\\bar{Y}$ depuis une série marginale',
    paragraphText:
      'À partir de la série marginale pondérée de $X$ ($x_i$ avec effectifs $n_i$), la moyenne vaut $\\bar{X} = \\frac{1}{N}\\sum x_i n_i$. Pour les $100$ ménages : $\\bar{X} = \\frac{0\\times 10 + 1\\times 19 + 2\\times 30 + 3\\times 23 + 4\\times 13 + 5\\times 5}{100} = \\frac{0 + 19 + 60 + 69 + 52 + 25}{100} = \\frac{225}{100} = 2{,}25$ enfants par ménage.',
    exercise: {
      id: 'tc_m_num_l11_stat_p01_q05',
      type: 'mcq',
      prompt: 'À partir de la série marginale de $Y$ ($1 \\to 11$, $2 \\to 30$, $3 \\to 38$, $4 \\to 21$, total $100$), quel est le nombre moyen $\\bar{Y}$ de pièces par ménage ?',
      options: ['$2{,}50$', '$2{,}69$', '$2{,}80$', '$3{,}00$'],
      correctAnswerIndex: 1,
      explanation: '$\\bar{Y} = \\frac{1\\times 11 + 2\\times 30 + 3\\times 38 + 4\\times 21}{100} = \\frac{11 + 60 + 114 + 84}{100} = \\frac{269}{100} = 2{,}69$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur de lecture',
    stepTheme: 'orange',
    stepTitle: 'Ne pas confondre ligne et colonne (ni « au moins » et « exactement »)',
    paragraphText:
      'Dans un tableau de contingence, repère toujours quel caractère est en **colonne** ($X$, première ligne d’en-tête) et quel caractère est en **ligne** ($Y$, première colonne). De plus, attention aux questions contenant « au moins $k$ » ou « plus de $k$ » : il faut alors additionner plusieurs colonnes ou lignes !',
    konanTip: 'Vérifie toujours la somme de la dernière ligne et de la dernière colonne : elles doivent toutes deux donner le même effectif total $N$ dans le coin en bas à droite.',
    exercise: {
      id: 'tc_m_num_l11_stat_p01_q06',
      type: 'mcq',
      prompt: 'Dans le tableau des $100$ ménages, combien de ménages ont AU MOINS $4$ enfants ($X \\geqslant 4$) ?',
      options: ['$13$', '$5$', '$18$', '$21$'],
      correctAnswerIndex: 2,
      explanation: '« Au moins $4$ enfants » regroupe $X = 4$ ($13$ ménages) et $X = 5$ ($5$ ménages), soit $13 + 5 = 18$ ménages.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Passage au cas n_{ij} = 1',
    stepTheme: 'green',
    stepTitle: 'Cas usuel au Bac : tableau à $n$ couples $(x_i ; y_i)$ d’effectif $1$',
    paragraphText:
      'Dans presque tous les exercices du Bac, la série double est présentée sous forme d’un tableau à $2$ lignes (une ligne pour $x_i$, une ligne pour $y_i$) avec $n$ colonnes : chaque couple $(x_i ; y_i)$ a alors pour effectif $n_{ij} = 1$. Les formules deviennent très simples en divisant par $n$ (nombre de couples).',
    exercise: {
      id: 'tc_m_num_l11_stat_p01_q07',
      type: 'mcq',
      prompt: 'Une série double donnée par $8$ couples $(x_i ; y_i)$ dans un tableau à deux lignes ($X$ et $Y$) correspond à quel effectif total $N$ ?',
      options: ['$N = 1$', '$N = 2$', '$N = 8$', '$N = 16$'],
      correctAnswerIndex: 2,
      explanation: 'Chaque colonne représente $1$ individu (couple $(x_i ; y_i)$ d’effectif $1$), donc $N = 8$ individus.',
    },
  },
];

const p02Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Nuage de points',
    stepTheme: 'blue',
    stepTitle: 'Nuage de points associé à une série statistique double',
    paragraphText:
      'Dans un repère orthogonal $(O ; I, J)$, on appelle **nuage de points** associé à la série double $(X, Y)$ l’ensemble des points $M_i$ de coordonnées $(x_i ; y_i)$ dont l’effectif est non nul. Lorsque tous les points s’alignent approximativement selon une bande étroite oblique, cela suggère graphiquement un **ajustement affine (linéaire)** possible.',
    visualSchema: {
      type: 'custom_svg',
      title: 'Série des $8$ exploitations agricoles (p.3–4)',
      tableData: {
        headers: ['Superficie $X$ (ha)', '$2$', '$2$', '$3$', '$4$', '$5$', '$6$', '$7$', '$7{,}6$'],
        rows: [['Nombre d’exploitations $Y$', '$14$', '$26$', '$31$', '$29$', '$44$', '$40$', '$54$', '$50$']],
      },
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p02_q01',
      type: 'mcq',
      prompt: 'Pour tracer le nuage de points de la série des $8$ exploitations agricoles ci-dessus, combien de points place-t-on dans le repère ?',
      options: ['$2$ points', '$8$ points : $(2;14), (2;26), \\dots, (7{,}6;50)$', '$16$ points', '$4$ points'],
      correctAnswerIndex: 1,
      explanation: 'Chaque couple $(x_i ; y_i)$ correspond à un point de coordonnées (abscisse $x_i$, ordonnée $y_i$) : il y a donc $8$ points distincts (remarquer les deux points d’abscisse $2$ : $(2 ; 14)$ et $(2 ; 26)$).',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Point moyen G',
    stepTheme: 'blue',
    stepTitle: 'Coordonnées du point moyen $G(\\bar{X} ; \\bar{Y})$',
    paragraphText:
      'On appelle **point moyen** d’un nuage de $n$ points $M_i(x_i ; y_i)$ le point $G(x_G ; y_G)$ dont les coordonnées sont les moyennes arithmétiques de $X$ et de $Y$ : $x_G = \\bar{X} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$ et $y_G = \\bar{Y} = \\frac{y_1 + y_2 + \\dots + y_n}{n}$. C’est le centre de gravité du nuage !',
    formula: {
      name: 'Coordonnées du point moyen G',
      formula: 'G(\\bar{X} ; \\bar{Y}) \\quad \\text{avec} \\quad \\bar{X} = \\frac{1}{n}\\sum_{i=1}^n x_i, \\quad \\bar{Y} = \\frac{1}{n}\\sum_{i=1}^n y_i',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p02_q02',
      type: 'mcq',
      prompt: 'Pour les $8$ exploitations agricoles ($\\sum x_i = 36{,}6$, $\\sum y_i = 288$), quelles sont les coordonnées exactes du point moyen $G$ ?',
      options: ['$G(4{,}5 ; 36)$', '$G(4{,}575 ; 36)$', '$G(36 ; 4{,}575)$', '$G(4{,}58 ; 35)$'],
      correctAnswerIndex: 1,
      explanation: '$\\bar{X} = \\frac{36{,}6}{8} = 4{,}575$ et $\\bar{Y} = \\frac{288}{8} = 36$, donc $G(4{,}575 ; 36)$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'exemple',
    stepBadge: 'Exercice de fixation 1',
    stepTheme: 'slate',
    stepTitle: 'Calculer le point moyen $G$ (Ex. 1 p.9)',
    paragraphText:
      'Soit la série à $5$ points de l’Exercice 1 p.9 : $x = (1 ; 4 ; 7 ; 8 ; 10)$ et $y = (2 ; 7 ; 8 ; 10 ; 13)$. On calcule : $\\bar{X} = \\frac{1+4+7+8+10}{5} = \\frac{30}{5} = 6$, et $\\bar{Y} = \\frac{2+7+8+10+13}{5} = \\frac{40}{5} = 8$. Le point moyen est donc $G(6 ; 8)$.',
    exercise: {
      id: 'tc_m_num_l11_stat_p02_q03',
      type: 'mcq',
      prompt: 'Dans l’Exercice 5 p.11 (hévéa, $8$ exploitations : $x = (2, 4, 4, 5, 7, 7, 8, 8)$ et $y = (3, 5, 6, 7, 10, 11, 8, 12)$), que vaut $G$ (arrondi à $10^{-2}$) ?',
      options: ['$G(5{,}62 ; 7{,}75)$', '$G(5{,}63 ; 7{,}75)$', '$G(7{,}75 ; 5{,}63)$', '$G(5{,}50 ; 7{,}50)$'],
      correctAnswerIndex: 1,
      explanation: '$\\bar{X} = \\frac{45}{8} = 5{,}625 \\approx 5{,}63$ et $\\bar{Y} = \\frac{62}{8} = 7{,}75$, donc $G(5{,}63 ; 7{,}75)$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'methode',
    stepBadge: 'Méthode de Mayer (Ex. 3)',
    stepTheme: 'green',
    stepTitle: 'Sous-nuages et points moyens partiels $G_1$ et $G_2$ (Ex. 3 p.9–10)',
    paragraphText:
      'Dans l’Exercice 3 p.9 (Tension Artérielle Systolique selon l’âge : $(26;128), (39;126), (40;118), (50;136), (53;142), (56;145)$), on partage le nuage ordonné par $x$ croissant en deux groupes égaux : les $3$ plus jeunes donnent $G_1\\left(\\frac{26+39+40}{3} ; \\frac{128+126+118}{3}\\right) = G_1(35 ; 124)$, et les $3$ plus âgés donnent $G_2\\left(\\frac{50+53+56}{3} ; \\frac{136+142+145}{3}\\right) = G_2(53 ; 141)$. La droite $(G_1 G_2)$ constitue l’**ajustement de Mayer** et passe elle aussi par le point moyen global $G(44 ; 132{,}5)$ !',
    formula: {
      name: 'Droite de Mayer (G₁G₂)',
      formula: 'a = \\frac{y_{G_2} - y_{G_1}}{x_{G_2} - x_{G_1}} \\qquad \\text{et} \\qquad (G_1 G_2) \\text{ passe par } G',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p02_q04',
      type: 'mcq',
      prompt: 'Avec $G_1(35 ; 124)$ et $G_2(53 ; 141)$ (Ex. 3 p.9–10), quel est le coefficient directeur $a$ de la droite de Mayer $(G_1 G_2)$ ?',
      options: ['$\\frac{18}{17}$', '$\\frac{17}{18} \\approx 0{,}94$', '$1$', '$\\frac{141}{53}$'],
      correctAnswerIndex: 1,
      explanation: '$a = \\frac{y_{G_2} - y_{G_1}}{x_{G_2} - x_{G_1}} = \\frac{141 - 124}{53 - 35} = \\frac{17}{18} \\approx 0{,}94$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Propriété fondamentale',
    stepTheme: 'violet',
    stepTitle: 'Toute droite d’ajustement (moindres carrés ou Mayer) passe par $G$',
    paragraphText:
      'Propriété incontournable au Bac : la droite de régression $(D)$ de $Y$ en $X$, la droite $(D’)$ de $X$ en $Y$, et la droite de Mayer $(G_1 G_2)$ passent **toutes par le point moyen $G(\\bar{X} ; \\bar{Y})$** ! Pour tracer $(D)$ sur ton graphique, place d’abord le point $G$ puis un deuxième point calculé (pas de lecture hasardeuse).',
    konanTip: 'Pour vérifier que ton équation $y = ax + b$ est juste, remplace $x$ par $\\bar{X}$ : tu dois retrouver $\\bar{Y}$ (aux arrondis près).',
    exercise: {
      id: 'tc_m_num_l11_stat_p02_q05',
      type: 'mcq',
      prompt: 'Sachant qu’une droite de régression de $Y$ en $X$ a pour coefficient directeur $a = 2$ et que le point moyen vaut $G(5 ; 13)$, quelle est son ordonnée à l’origine $b$ ?',
      options: ['$b = 13$', '$b = 3$', '$b = -21$', '$b = 8$'],
      correctAnswerIndex: 1,
      explanation: 'Comme $G(5 ; 13) \\in (D)$, $13 = 2 \\times 5 + b \\implies b = 13 - 10 = 3$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Attention au tracé',
    stepTheme: 'orange',
    stepTitle: 'Ne pas relier les points du nuage entre eux !',
    paragraphText:
      'Un nuage de points n’est PAS une ligne brisée : on place uniquement des croix ($\\times$) ou des points isolés $(x_i ; y_i)$, sans les relier deux à deux ! En revanche, on trace à la règle la droite d’ajustement passant par $G(\\bar{X} ; \\bar{Y})$ et un second point éloigné.',
    exercise: {
      id: 'tc_m_num_l11_stat_p02_q06',
      type: 'mcq',
      prompt: 'Si le nuage de points forme un cercle ou une parabole en $U$ parfaite, un ajustement linéaire est-il pertinent ?',
      options: [
        'Oui, toujours',
        'Non, l’ajustement linéaire ne convient que si les points sont approximativement alignés selon une droite',
        'Oui, en utilisant deux points moyens',
        'Seulement si $G(0;0)$ est au centre',
      ],
      correctAnswerIndex: 1,
      explanation: 'Un ajustement affine cherche une droite proche du nuage : si la forme est en $U$ ou circulaire, la relation n’est pas linéaire ($r \\approx 0$).',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Échelle et précision',
    stepTheme: 'green',
    stepTitle: 'Respecter les unités graphiques imposées pour le nuage',
    paragraphText:
      'Lis attentivement l’échelle demandée (ex. Ex. 5 p.11 : $1\\text{ cm}$ pour $1$ travailleur en abscisse, $1\\text{ cm}$ pour $1\\text{ ha}$ en ordonnée ; parfois $1\\text{ cm}$ pour $10$ unités ou axes ne commençant pas à $0$). Place toujours $G$ d’une couleur distincte et indique ses coordonnées.',
    exercise: {
      id: 'tc_m_num_l11_stat_p02_q07',
      type: 'mcq',
      prompt: 'Si $n = 12$ valeurs ($x_i = 1, 2, \\dots, 12$), que vaut immédiatement $\\bar{X} = \\frac{1+2+\\dots+12}{12}$ ?',
      options: ['$6$', '$6{,}5$', '$7$', '$5{,}5$'],
      correctAnswerIndex: 1,
      explanation: '$\\sum_{k=1}^{12} k = \\frac{12 \\times 13}{2} = 78$, donc $\\bar{X} = \\frac{78}{12} = 6{,}5$ (moyenne du premier et du dernier rang $\\frac{1+12}{2}$).',
    },
  },
];

const p03Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Covariance',
    stepTheme: 'blue',
    stepTitle: 'Définition et formule pratique de $\\operatorname{Cov}(X, Y)$',
    paragraphText:
      'On appelle **covariance** de la série double $(X ; Y)$ le nombre réel $\\operatorname{Cov}(X, Y) = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{X})(y_i - \\bar{Y})$. En pratique, pour éviter les soustractions répétées (et les erreurs d’arrondi !), on utilise toujours la **formule de Koenig** : $\\operatorname{Cov}(X, Y) = \\frac{\\sum_{i=1}^n x_i y_i}{n} - \\bar{X}\\bar{Y}$.',
    formula: {
      name: 'Formule rapide de la covariance',
      formula: '\\operatorname{Cov}(X, Y) = \\frac{1}{n}\\sum_{i=1}^n x_i y_i - \\bar{X}\\bar{Y}',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p03_q01',
      type: 'mcq',
      prompt: 'Pour l’Ex. 1–2 p.9 ($x = (1, 4, 7, 8, 10)$, $y = (2, 7, 8, 10, 13)$, $\\bar{X} = 6$, $\\bar{Y} = 8$), que vaut $\\operatorname{Cov}(X, Y)$ ?',
      options: ['$59{,}2$', '$11{,}2$', '$48$', '$12{,}4$'],
      correctAnswerIndex: 1,
      explanation: '$\\sum x_i y_i = 1\\times 2 + 4\\times 7 + 7\\times 8 + 8\\times 10 + 10\\times 13 = 2 + 28 + 56 + 80 + 130 = 296$. Donc $\\operatorname{Cov}(X,Y) = \\frac{296}{5} - 6\\times 8 = 59{,}2 - 48 = 11{,}2$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Correction du PDF p.5 !',
    stepTheme: 'slate',
    stepTitle: 'Calculer $\\operatorname{Cov}(X, Y)$ pour les exploitations agricoles et les champs d’hévéa',
    paragraphText:
      'Vérifions deux calculs du PDF avec attention : (1) Exploitations agricoles ($n = 8$, $\\bar{X} = 4{,}575$, $\\bar{Y} = 36$, p.5) : $\\sum x_i y_i = 28 + 52 + 93 + 116 + 220 + 240 + 378 + 380 = 1507$ (et non $1503$ écrit par coquille p.5 !), donc $\\frac{1507}{8} - 164{,}7 = 188{,}375 - 164{,}7 = 23{,}675$. (2) Hévéas (Ex. 5 p.11–12, $n = 8$, $\\bar{X} \\approx 5{,}63$, $\\bar{Y} = 7{,}75$) : $\\frac{392}{8} - 5{,}63\\times 7{,}75 = 49 - 43{,}6325 \\approx 5{,}37$ (la bonne valeur calculée p.12, et non $5{,}57$ de l’énoncé p.11).',
    exercise: {
      id: 'tc_m_num_l11_stat_p03_q02',
      type: 'mcq',
      prompt: 'Dans l’Ex. 4 p.10 ($n = 9$, $\\bar{X} = 4$, $\\bar{Y} = 60$, $\\sum x_i y_i = 1029$), quelle est la covariance $\\operatorname{Cov}(X, Y)$ arrondie à $10^{-2}$ ?',
      options: ['$125{,}67$', '$-125{,}67$', '$-114{,}33$', '$114{,}33$'],
      correctAnswerIndex: 1,
      explanation: '$\\operatorname{Cov}(X, Y) = \\frac{1029}{9} - 4 \\times 60 = 114{,}333 - 240 = -125{,}67$ (négative : $Y$ décroît quand $X$ croît !).',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Variances',
    stepTheme: 'violet',
    stepTitle: 'Calculer les variances $V(X)$ et $V(Y)$ sans erreur',
    paragraphText:
      'Pour mesurer la dispersion de chaque variable et calculer ensuite $r$ et les droites de régression, on calcule les variances avec la formule de Koenig : $V(X) = \\frac{1}{n}\\sum_{i=1}^n x_i^2 - \\bar{X}^2 \\geqslant 0$ et $V(Y) = \\frac{1}{n}\\sum_{i=1}^n y_i^2 - \\bar{Y}^2 \\geqslant 0$. Exemple Ex. 4 p.10 ($n=9$, $\\bar{X}=4$) : $V(X) = \\frac{0+1+4+9+16+25+36+49+64}{9} - 16 = \\frac{204}{9} - 16 = \\frac{60}{9} \\approx 6{,}67$.',
    formula: {
      name: 'Variances de X et Y',
      formula: 'V(X) = \\frac{1}{n}\\sum_{i=1}^n x_i^2 - \\bar{X}^2 \\qquad ; \\qquad V(Y) = \\frac{1}{n}\\sum_{i=1}^n y_i^2 - \\bar{Y}^2',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p03_q03',
      type: 'mcq',
      prompt: 'Pour $x = (1, 4, 7, 8, 10)$ ($n = 5$, $\\bar{X} = 6$), que vaut la variance $V(X)$ ?',
      options: ['$46$', '$10$', '$36$', '$10{,}5$'],
      correctAnswerIndex: 1,
      explanation: '$\\sum x_i^2 = 1 + 16 + 49 + 64 + 100 = 230$. Donc $V(X) = \\frac{230}{5} - 6^2 = 46 - 36 = 10$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'definition',
    stepBadge: 'Coefficient de corrélation',
    stepTheme: 'blue',
    stepTitle: 'Définition du coefficient de corrélation linéaire $r$',
    paragraphText:
      'Lorsque $V(X) > 0$ et $V(Y) > 0$, on appelle **coefficient de corrélation linéaire** de $(X ; Y)$ le nombre réel sans unité : $r = \\frac{\\operatorname{Cov}(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}} = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma(X)\\sigma(Y)}$. Il possède le même signe que $\\operatorname{Cov}(X, Y)$ et vérifie toujours l’encadrement fondamental : $-1 \\leqslant r \\leqslant 1$.',
    formula: {
      name: 'Coefficient de corrélation linéaire',
      formula: 'r = \\frac{\\operatorname{Cov}(X, Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}} \\in [-1 ; 1]',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p03_q04',
      type: 'mcq',
      prompt: 'Dans l’Ex. 4 p.10 ($\\operatorname{Cov}(X,Y) = -125{,}67$, $V(X) = 6{,}67$, $V(Y) = 2570$), que vaut $r$ ?',
      options: ['$r = +0{,}96$', '$r = -0{,}96$', '$r = -1{,}04$', '$r = -0{,}52$'],
      correctAnswerIndex: 1,
      explanation: '$r = \\frac{-125{,}67}{\\sqrt{6{,}67 \\times 2570}} \\approx \\frac{-125{,}67}{130{,}93} \\approx -0{,}96 \\in [-1 ; 1]$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Seuil 0,87 du programme',
    stepTheme: 'violet',
    stepTitle: 'Interpréter $|r|$ : forte corrélation lorsque $0{,}87 \\leqslant |r| \\leqslant 1$',
    paragraphText:
      'Dans le programme officiel de Côte d’Ivoire : si $|r|$ est proche de $1$, en pratique **$0{,}87 \\leqslant r < 1$ ou $-1 < r \\leqslant -0{,}87$** (soit $0{,}87 \\leqslant |r| \\leqslant 1$), on conclut qu’il existe une **forte (ou bonne) corrélation linéaire** entre $X$ et $Y$, ce qui justifie pleinement un ajustement affine ! Si $r = \\pm 1$, tous les points du nuage sont exactement alignés.',
    formula: {
      name: 'Critère officiel de forte corrélation',
      formula: '0{,}87 \\leqslant |r| \\leqslant 1 \\implies \\text{forte corrélation linéaire}',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p03_q05',
      type: 'mcq',
      prompt: 'Si l’on obtient $r = -0{,}96$ (Ex. 4 p.10), quelle est l’interprétation officielle exacte ?',
      options: [
        'Aucune corrélation car $r < 0$',
        'Forte corrélation linéaire (négative) entre $X$ et $Y$ car $-1 < -0{,}96 \\leqslant -0{,}87$',
        'Corrélation impossible car $r$ doit être positif',
        'Forte corrélation seulement si $r > 0{,}87$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Le signe de $r$ donne le sens de variation (négatif = décroissant), mais la force du lien linéaire se lit sur $|r| = 0{,}96 \\geqslant 0{,}87$ !',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Pièges sur r et Cov',
    stepTheme: 'orange',
    stepTitle: 'Attention : $|r| > 1$ signale une erreur de calcul !',
    paragraphText:
      'Par l’inégalité de Cauchy-Schwarz, $|\\operatorname{Cov}(X, Y)| \\leqslant \\sqrt{V(X)}\\sqrt{V(Y)}$, donc il est **mathématiquement impossible** d’obtenir $r = 1{,}15$ ou $r = -1{,}02$ ! De plus, une variance $V(X)$ ou $V(Y)$ ne peut JAMAIS être négative (contrairement à $\\operatorname{Cov}(X, Y)$ qui peut être $< 0$, $= 0$ ou $> 0$).',
    konanTip: 'Si ta calculatrice ou ton brouillon te donne $V(X) < 0$ ou $|r| > 1$, tu as oublié le carré sur $\\bar{X}^2$ ou confondu $\\sum x_i^2$ avec $(\\sum x_i)^2$ !',
    exercise: {
      id: 'tc_m_num_l11_stat_p03_q06',
      type: 'mcq',
      prompt: 'Parmi ces affirmations sur les grandeurs statistiques $(X, Y)$, laquelle est VRAIE ?',
      options: [
        '$\\operatorname{Cov}(X, Y)$ est toujours positive',
        '$V(X)$ peut être négative si les $x_i$ sont négatifs',
        '$r$ est toujours compris entre $-1$ et $1$, et a le même signe que $\\operatorname{Cov}(X, Y)$',
        'Si $r = -0{,}95$, l’ajustement linéaire est mauvais',
      ],
      correctAnswerIndex: 2,
      explanation: 'Seule $C$ est vraie : $V(X) \\geqslant 0$, $\\operatorname{Cov}(X, Y)$ peut être négative, et $r = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma(X)\\sigma(Y)} \\in [-1 ; 1]$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Mode Stats calculatrice',
    stepTheme: 'green',
    stepTitle: 'Astuce calculatoire : garder les fractions exactes avant l’arrondi',
    paragraphText:
      'Dans les exercices longs (comme la Situation Complexe p.8 ou les hévéas p.12), arrondir $\\bar{X}$ trop tôt ($5{,}625 \\to 5{,}63$) modifie sensiblement $V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2$ et $\\operatorname{Cov}(X, Y)$ ! Sauf consigne contraire explicite (comme « on prendra $\\bar{X} = 5{,}63$ »), garde les valeurs exactes en mémoire jusqu’au dernier calcul.',
    exercise: {
      id: 'tc_m_num_l11_stat_p03_q07',
      type: 'mcq',
      prompt: 'Dans l’Ex. 5 (hévéas, $V(X) = 4{,}18$, $V(Y) = 8{,}44$, $\\operatorname{Cov}(X, Y) = 5{,}37$), que vaut $r$ à $10^{-2}$ près ?',
      options: ['$r = 0{,}54$', '$r = 0{,}90$', '$r = 0{,}94$', '$r = 0{,}81$'],
      correctAnswerIndex: 1,
      explanation: '$r = \\frac{5{,}37}{\\sqrt{4{,}18 \\times 8{,}44}} = \\frac{5{,}37}{\\sqrt{35{,}2792}} \\approx \\frac{5{,}37}{5{,}94} \\approx 0{,}904 \\approx 0{,}90$.',
    },
  },
];

const p04Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'definition',
    stepBadge: 'Droite de Y en X',
    stepTheme: 'blue',
    stepTitle: 'Droite de régression de $Y$ en $X$ par les moindres carrés',
    paragraphText:
      'La méthode des **moindres carrés** cherche la droite $(D) : y = ax + b$ qui minimise la somme des carrés des écarts verticaux $\\sum (y_i - (ax_i + b))^2$. On obtient des formules uniques : $a = \\frac{\\operatorname{Cov}(X, Y)}{V(X)}$ et $b = \\bar{Y} - a\\bar{X}$ (car $(D)$ passe par $G(\\bar{X} ; \\bar{Y})$). On utilise $(D)$ pour **estimer $y$ connaissant $x$**.',
    formula: {
      name: 'Droite de régression de Y en X',
      formula: '(D) : y = ax + b \\quad \\text{avec} \\quad a = \\frac{\\operatorname{Cov}(X, Y)}{V(X)}, \\quad b = \\bar{Y} - a\\bar{X}',
    },
    visualSchema: {
      type: 'function_plot',
      title: 'Droite des moindres carrés $(D) : y = 1{,}28x + 0{,}54$ (hévéas, Ex. 5)',
      caption: 'Ajustement linéaire passant par $G(5{,}63 ; 7{,}75)$.',
      plot: {
        xMin: 0,
        xMax: 14,
        yMin: 0,
        yMax: 18,
        xStep: 2,
        yStep: 2,
        curves: [{ label: 'y=1,28x+0,54', color: 'blue', pieces: [{ expr: '1.28*x+0.54', from: 0, to: 13.5 }] }],
        points: [
          { x: 2, y: 3, color: 'slate', filled: true },
          { x: 4, y: 5, color: 'slate', filled: true },
          { x: 4, y: 6, color: 'slate', filled: true },
          { x: 5, y: 7, color: 'slate', filled: true },
          { x: 7, y: 10, color: 'slate', filled: true },
          { x: 7, y: 11, color: 'slate', filled: true },
          { x: 8, y: 8, color: 'slate', filled: true },
          { x: 8, y: 12, color: 'slate', filled: true },
          { x: 5.63, y: 7.75, label: 'G', color: 'orange', filled: true },
        ],
      },
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p04_q01',
      type: 'mcq',
      prompt: 'Pour les exploitations agricoles ($\\bar{X} = 4{,}575$, $\\bar{Y} = 36$, $V(X) = 4{,}16$, $\\operatorname{Cov}(X, Y) = 23{,}675$), quelle est la droite $(D)$ de régression de $Y$ en $X$ ?',
      options: [
        '$y = 0{,}15x + 35{,}3$',
        '$y = 5{,}69x + 9{,}97$',
        '$y = 5{,}69x - 9{,}97$',
        '$y = 9{,}97x + 5{,}69$',
      ],
      correctAnswerIndex: 1,
      explanation: '$a = \\frac{23{,}675}{4{,}16} \\approx 5{,}69$ et $b = 36 - 5{,}69 \\times 4{,}575 = 9{,}97$, donc $(D) : y = 5{,}69x + 9{,}97$.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'definition',
    stepBadge: 'Droite de X en Y',
    stepTheme: 'blue',
    stepTitle: 'Droite de régression de $X$ en $Y$ : $x = a’y + b’$',
    paragraphText:
      'La droite de régression **de $X$ en $Y$** minimise les écarts **horizontaux** $\\sum (x_i - (a’y_i + b’))^2$. Son équation s’écrit $x = a’y + b’$, avec $a’ = \\frac{\\operatorname{Cov}(X, Y)}{V(Y)}$ (on divise par $V(Y)$ !) et $b’ = \\bar{X} - a’\\bar{Y}$. Attention : ce N’EST PAS la même droite que $(D)$ en général !',
    formula: {
      name: 'Droite de régression de X en Y',
      formula: '(D’) : x = a’y + b’ \\quad \\text{avec} \\quad a’ = \\frac{\\operatorname{Cov}(X, Y)}{V(Y)}, \\quad b’ = \\bar{X} - a’\\bar{Y}',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p04_q02',
      type: 'mcq',
      prompt: 'Dans l’Ex. 4 p.10 ($\\bar{X} = 4$, $\\bar{Y} = 60$, $V(Y) = 2570$, $\\operatorname{Cov}(X, Y) = -125{,}67$), quelle est la droite $(D’)$ de régression de $X$ en $Y$ ?',
      options: [
        '$x = -18{,}84y + 135{,}36$',
        '$x = -0{,}049y + 6{,}94$',
        '$y = -0{,}049x + 6{,}94$',
        '$x = 0{,}049y + 1{,}06$',
      ],
      correctAnswerIndex: 1,
      explanation: '$a’ = \\frac{-125{,}67}{2570} \\approx -0{,}049$ et $b’ = 4 - (-0{,}049)\\times 60 = 6{,}94$, donc $(D’) : x = -0{,}049y + 6{,}94$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'propriete',
    stepBadge: 'Identité a·a’ = r²',
    stepTheme: 'violet',
    stepTitle: 'Lien algébrique entre les pentes $a$, $a’$ et la corrélation $r$',
    paragraphText:
      'Regardons le produit des deux coefficients $a = \\frac{\\operatorname{Cov}(X,Y)}{V(X)}$ et $a’ = \\frac{\\operatorname{Cov}(X,Y)}{V(Y)}$ : on obtient immédiatement **$a \\cdot a’ = \\frac{[\\operatorname{Cov}(X,Y)]^2}{V(X)V(Y)} = r^2$** ! De plus, $a$, $a’$ et $r$ ont **tous les trois le même signe** (celui de $\\operatorname{Cov}(X, Y)$) : si $a > 0$ et $a’ > 0$, alors $r = \\sqrt{aa’}$ ; si $a < 0$ et $a’ < 0$, alors $r = -\\sqrt{aa’}$. Et si $r^2 = 1$, alors $a = \\frac{1}{a’}$ et $(D)$ et $(D’)$ sont confondues !',
    formula: {
      name: 'Relations entre a, a’ et r',
      formula: 'a\\,a’ = r^2 \\qquad \\text{et} \\qquad |r| = \\sqrt{a\\,a’}',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p04_q03',
      type: 'mcq',
      prompt: 'Les droites d’ajustement d’une série sont $(D) : y = -2{,}5x + 12$ et $(D’) : x = -0{,}36y + 4{,}8$. Que vaut le coefficient de corrélation linéaire $r$ ?',
      options: ['$r = +0{,}95$', '$r = -0{,}95$', '$r = -0{,}90$', '$r = +0{,}90$'],
      correctAnswerIndex: 1,
      explanation: '$a = -2{,}5 < 0$ et $a’ = -0{,}36 < 0$, donc $r = -\\sqrt{(-2{,}5)(-0{,}36)} = -\\sqrt{0{,}90} \\approx -0{,}949 \\approx -0{,}95$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Retrouver G par intersection',
    stepTheme: 'slate',
    stepTitle: 'Retrouver $G(\\bar{X} ; \\bar{Y})$ à l’intersection de $(D)$ et $(D’)$',
    paragraphText:
      'Puisque $(D)$ et $(D’)$ passent toutes deux par le point moyen $G(\\bar{X} ; \\bar{Y})$ (et sont distinctes dès que $|r| < 1$), le point $G$ est l’**unique point d’intersection** de $(D)$ et $(D’)$ ! Si un sujet de Bac te donne les équations de $(D)$ et $(D’)$ sans le tableau de données, il suffit de résoudre le système formé par les deux équations pour retrouver $\\bar{X}$ et $\\bar{Y}$ !',
    exercise: {
      id: 'tc_m_num_l11_stat_p04_q04',
      type: 'mcq',
      prompt: 'Si $(D) : y = 2x + 1$ et $(D’) : x = 0{,}4y - 0{,}2$, quelles sont les coordonnées du point moyen $G(\\bar{X} ; \\bar{Y})$ ?',
      options: ['$G(1 ; 3)$', '$G(3 ; 7)$', '$G(0 ; 1)$', '$G(2 ; 5)$'],
      correctAnswerIndex: 0,
      explanation: '$G$ vérifie les deux équations : en substituant $y = 2x + 1$ dans $x = 0{,}4(2x+1) - 0{,}2 = 0{,}8x + 0{,}2 \\implies 0{,}2x = 0{,}2 \\implies \\bar{X} = 1$, puis $\\bar{Y} = 2(1)+1 = 3$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'piege',
    stepBadge: 'Piège du dénominateur',
    stepTheme: 'orange',
    stepTitle: 'Ne pas inverser $V(X)$ et $V(Y)$ entre $(D)$ et $(D’)$ !',
    paragraphText:
      'Moyen mnémotechnique infaillible : dans $y = ax + b$ (« $Y$ en fonction de $X$ »), on multiplie $x$ par $a$, donc on divise par **$V(X)$** : $a = \\frac{\\operatorname{Cov}(X,Y)}{V(X)}$. Dans $x = a’y + b’$ (« $X$ en fonction de $Y$ »), on multiplie $y$ par $a’$, donc on divise par **$V(Y)$** : $a’ = \\frac{\\operatorname{Cov}(X,Y)}{V(Y)}$. De plus, si $(D)$ sert à écrire $y = 1{,}28x + 0{,}54$ (Ex. 5 p.11), c’est bien la droite de **$Y$ en $X$** (le PDF p.11 avait écrit par étourderie « de $X$ en $Y$ »).',
    konanTip: 'Variable à droite du signe $=$ (celle qui porte la pente) $=$ variable dont la variance va au dénominateur !',
    exercise: {
      id: 'tc_m_num_l11_stat_p04_q05',
      type: 'mcq',
      prompt: 'La droite d’ajustement d’équation $y = 5{,}69x + 9{,}97$ est la droite de régression :',
      options: [
        'De $X$ en $Y$, avec pente $\\frac{\\operatorname{Cov}(X,Y)}{V(Y)}$',
        'De $Y$ en $X$, avec pente $\\frac{\\operatorname{Cov}(X,Y)}{V(X)}$',
        'De $Y$ en $X$, avec pente $\\frac{V(X)}{\\operatorname{Cov}(X,Y)}$',
        'De $X$ en $Y$, passant par $(0;0)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Une équation de la forme $y = ax + b$ exprime $Y$ en fonction de $X$ : c’est la droite de $Y$ en $X$, avec $a = \\frac{\\operatorname{Cov}(X,Y)}{V(X)}$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Erreur algébrique',
    stepTheme: 'orange',
    stepTitle: '$(D’)$ n’est PAS obtenue en inversant $y = ax + b$ !',
    paragraphText:
      'Attention : si $(D) : y = 5{,}69x + 9{,}97$, alors $x = \\frac{y - 9{,}97}{5{,}69} \\approx 0{,}176 y - 1{,}75$ N’EST PAS la droite de régression $(D’)$ de $X$ en $Y$ ! En effet, la vraie $(D’)$ vaut $x = 0{,}15y - 0{,}825$ (pente $\\frac{\\operatorname{Cov}}{V(Y)}$) : $(D)$ et $(D’)$ ne sont confondues que lorsque $|r| = 1$ (points parfaitement alignés).',
    exercise: {
      id: 'tc_m_num_l11_stat_p04_q06',
      type: 'mcq',
      prompt: 'À quelle condition exacte les deux droites de régression $(D)$ ($Y$ en $X$) et $(D’)$ ($X$ en $Y$) sont-elles confondues ?',
      options: [
        'Toujours, quelle que soit la série',
        'Uniquement lorsque $r^2 = 1$ (c’est-à-dire $r = 1$ ou $r = -1$)',
        'Lorsque $\\bar{X} = \\bar{Y}$',
        'Lorsque $V(X) = V(Y)$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Les deux droites ont la même pente géométrique ssi $a = \\frac{1}{a’} \\iff aa’ = 1 \\iff r^2 = 1$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'exemple',
    stepBadge: 'Tracé précis de (D)',
    stepTheme: 'slate',
    stepTitle: 'Choisir deux points pour tracer $(D)$ sur papier millimétré',
    paragraphText:
      'Pour tracer proprement $(D) : y = 1{,}28x + 0{,}54$ sur $[0 ; 16]$ : utilise obligatoirement le point moyen $G(5{,}63 ; 7{,}75)$ déjà placé sur ton graphique, et calcule un point aux extrémités facile à placer, par exemple $x = 0 \\implies y = 0{,}54$ ou $x = 12 \\implies y = 1{,}28(12)+0{,}54 = 15{,}9$. Plus les deux points sont éloignés, plus le tracé à la règle est précis.',
    exercise: {
      id: 'tc_m_num_l11_stat_p04_q07',
      type: 'mcq',
      prompt: 'Quel couple de points permet de tracer la droite $(D) : y = 5{,}69x + 9{,}97$ de façon très précise sur $[0 ; 10]$ ?',
      options: [
        '$(0 ; 0)$ et $(1 ; 5{,}69)$',
        '$G(4{,}575 ; 36)$ et $(9 ; 61{,}18)$ (ou $(0 ; 9{,}97)$)',
        '$(4 ; 29)$ et $(5 ; 44)$ (deux points du nuage)',
        'Uniquement le point $G$',
      ],
      correctAnswerIndex: 1,
      explanation: 'Une droite d’ajustement ne passe pas forcément par les points du nuage ; on utilise $G$ et un point vérifiant exactement l’équation de $(D)$.',
    },
  },
];

const p05Steps: StructuredLessonStep[] = [
  {
    stepNumber: 1,
    stepKind: 'methode',
    stepBadge: 'Estimation de y ou x',
    stepTheme: 'green',
    stepTitle: 'Prévoir une valeur avec la droite d’ajustement (correction p.7 & Ex. 5 Q6)',
    paragraphText:
      'Une fois $(D)$ obtenue (lorsque $|r| \\geqslant 0{,}87$), on estime une valeur future : (1) Exploitations agricoles ($y = 5{,}69x + 9{,}97$, p.7) : pour $x = 9\\text{ ha}$, $y = 5{,}69 \\times 9 + 9{,}97 = 51{,}21 + 9{,}97 = 61{,}18$, soit environ **$61$ exploitations** (correction de la coquille $61{,}8 \\to 62$ du PDF). (2) Hévéas (Ex. 5 Q6 p.11–12, $y = 1{,}28x + 0{,}54$) : combien de travailleurs $x$ faut-il pour $y = 16\\text{ ha}$ ? On résout $1{,}28x + 0{,}54 = 16 \\implies x = \\frac{15{,}46}{1{,}28} \\approx 12{,}08$, soit **$12$ travailleurs** (arrondi d’ordre $0$).',
    exercise: {
      id: 'tc_m_num_l11_stat_p05_q01',
      type: 'mcq',
      prompt: 'Dans l’Ex. 5 Q6 (hévéas, $(D) : y = 1{,}28x + 0{,}54$), quel nombre de travailleurs $x$ (arrondi à l’entier) estime-t-on pour une superficie de $y = 16\\text{ ha}$ ?',
      options: ['$21$ travailleurs', '$12$ travailleurs', '$13$ travailleurs', '$10$ travailleurs'],
      correctAnswerIndex: 1,
      explanation: '$16 = 1{,}28x + 0{,}54 \\iff x = \\frac{16 - 0{,}54}{1{,}28} = \\frac{15{,}46}{1{,}28} \\approx 12{,}08$, donc l’arrondi à l’ordre zéro est $12$ travailleurs.',
    },
  },
  {
    stepNumber: 2,
    stepKind: 'exemple',
    stepBadge: 'Situation complexe (p.7–8)',
    stepTheme: 'slate',
    stepTitle: 'Prévoir une date calendaire à partir du rang $x$ (club littéraire)',
    paragraphText:
      'Dans la Situation Complexe p.7–8 : Janvier $2020$ est au rang $x = 1$, Décembre $2020$ au rang $x = 12$. La droite de régression vaut $y = 86{,}046x + 1014{,}868$. Le seuil de $3000$ adhérents est atteint pour $86{,}046x + 1014{,}868 = 3000 \\implies x = \\frac{1985{,}132}{86{,}046} \\approx 23{,}071$. Comme $x = 23$ correspond à novembre $2021$ ($y \\approx 2994 < 3000$), on dépasse $3000$ dès le rang **$x = 24$**, soit **Décembre 2021** !',
    formula: {
      name: 'Correspondance rang x ↔ mois',
      formula: 'x = 12 \\;(\\text{Déc 2020}) \\implies x = 24 \\;(\\text{Déc 2021})',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p05_q02',
      type: 'mcq',
      prompt: 'Si le rang $x = 1$ représente Janvier $2020$ et $x = 12$ Décembre $2020$, à quel mois correspond le rang $x = 26$ ?',
      options: ['Décembre 2021', 'Janvier 2022', 'Février 2022', 'Mars 2022'],
      correctAnswerIndex: 2,
      explanation: '$26 = 2 \\times 12 + 2$ : deux années complètes ($2020$ et $2021$, jusqu’à $x = 24$), puis le $2^{\\text{e}}$ mois de $2022$, soit Février $2022$.',
    },
  },
  {
    stepNumber: 3,
    stepKind: 'piege',
    stepBadge: 'Arrondi d’ordre k',
    stepTheme: 'orange',
    stepTitle: 'Maîtriser le vocabulaire ivoirien : « arrondi d’ordre $0$, ordre $1$, ordre $2$ »',
    paragraphText:
      'Dans les sujets de Bac de Côte d’Ivoire, lis bien la consigne d’arrondi : « **arrondi d’ordre zéro** » signifie à l’entier le plus proche ($0$ chiffre après la virgule, ex. $12{,}08 \\to 12$ ou pour un seuil « dépasser $3000$ », on prend l’entier supérieur $24$ dès $23{,}071$ !) ; « **ordre $2$** » signifie $2$ chiffres après la virgule ($10^{-2}$).',
    konanTip: 'Quand un problème demande « à partir de quel mois on **dépasse** le seuil », $x = 23{,}071$ signifie qu’au mois $23$ le seuil n’est PAS encore atteint : il faut passer à l’entier supérieur $24$ !',
    exercise: {
      id: 'tc_m_num_l11_stat_p05_q03',
      type: 'mcq',
      prompt: 'Dans un modèle mensuel où $y = 86{,}05x + 1014{,}87$, on obtient $y = 3000$ pour $x = 23{,}07$. À quel rang entier $x$ le nombre d’adhérents dépasse-t-il effectivement $3000$ ?',
      options: ['$x = 23$', '$x = 24$', '$x = 22$', '$x = 25$'],
      correctAnswerIndex: 1,
      explanation: 'Pour $x = 23$, $y = 86{,}05(23) + 1014{,}87 = 2994{,}02 < 3000$. Il faut attendre le mois $x = 24$ ($y \\approx 3080$) pour dépasser $3000$.',
    },
  },
  {
    stepNumber: 4,
    stepKind: 'exemple',
    stepBadge: 'Changement de variable',
    stepTheme: 'slate',
    stepTitle: 'Ajustement non linéaire ramené à un ajustement linéaire',
    paragraphText:
      'Parfois au Bac, les points $(x_i ; y_i)$ suivent une exponentielle ($y = A e^{bx}$) ou une puissance ($y = A x^b$) : la consigne te propose alors de poser $z_i = \\ln(y_i)$ (et éventuellement $t_i = \\ln(x_i)$). On effectue un ajustement linéaire classique sur $(x_i ; z_i)$ pour obtenir $z = ax + b$, puis on repasse à $y$ par $y = e^{ax + b} = e^b \\cdot (e^a)^x$ !',
    formula: {
      name: 'Linéarisation par logarithme',
      formula: 'z = \\ln(y) = ax + b \\iff y = e^b \\cdot e^{ax}',
    },
    exercise: {
      id: 'tc_m_num_l11_stat_p05_q04',
      type: 'mcq',
      prompt: 'Après avoir posé $z = \\ln(y)$, on trouve la droite de régression $z = 0{,}2x + 1{,}5$. Quelle expression exprime $y$ en fonction de $x$ ?',
      options: [
        '$y = 0{,}2 e^x + 1{,}5$',
        '$y = e^{0{,}2x + 1{,}5} = e^{1{,}5} e^{0{,}2x}$',
        '$y = \\ln(0{,}2x + 1{,}5)$',
        '$y = 1{,}5 e^{0{,}2x}$',
      ],
      correctAnswerIndex: 1,
      explanation: '$\\ln(y) = 0{,}2x + 1{,}5 \\iff y = e^{0{,}2x + 1{,}5} = e^{1{,}5}\\,e^{0{,}2x}$.',
    },
  },
  {
    stepNumber: 5,
    stepKind: 'propriete',
    stepBadge: 'Quelle droite utiliser ?',
    stepTheme: 'violet',
    stepTitle: 'Faut-il utiliser $(D)$ ou $(D’)$ pour estimer $x$ connaissant $y$ ?',
    paragraphText:
      'En toute rigueur théorique, pour estimer $y$ à partir de $x$ on utilise $(D)$ ($y = ax + b$), et pour estimer $x$ à partir de $y$ on utilise $(D’)$ ($x = a’y + b’$). Cependant, quand l’énoncé ne fait calculer QUE $(D)$ (comme dans l’Ex. 5 Q6 ou la Situation Complexe), on réutilise cette unique droite $(D)$ en résolvant $ax + b = y_0$ ! Lis toujours précisément la question.',
    exercise: {
      id: 'tc_m_num_l11_stat_p05_q05',
      type: 'mcq',
      prompt: 'Lorsque l’énoncé te fait déterminer à la fois $(D) : y = ax + b$ et $(D’) : x = a’y + b’$, quelle droite utilises-tu pour estimer $x$ sachant $y = 50$ ?',
      options: [
        'La droite $(D’)$ d’équation $x = a’y + b’$',
        'La droite $(D)$ uniquement',
        'La bissectrice $y = x$',
        'Le point moyen seul',
      ],
      correctAnswerIndex: 0,
      explanation: 'Si $(D’)$ (régression de $X$ en $Y$) a été calculée, c’est précisément elle qui sert à estimer $x$ à partir d’une valeur donnée de $y$.',
    },
  },
  {
    stepNumber: 6,
    stepKind: 'piege',
    stepBadge: 'Limites de l’extrapolation',
    stepTheme: 'orange',
    stepTitle: 'Attention aux extrapolations très loin du nuage de points !',
    paragraphText:
      'Reprenons la Situation d’Apprentissage (météo, p.1) : avec $y = -3{,}36x + 94{,}55$, pour $x = 32\\text{ °C}$ (au-delà du maximum observé $28\\text{ °C}$), la formule affine donne $-13\\text{ mm}$ ! Or une pluviométrie négative est physiquement impossible ($0\\text{ mm}$, sécheresse). Une droite d’ajustement n’est fiable qu’au voisinage de la plage des données observées.',
    exercise: {
      id: 'tc_m_num_l11_stat_p05_q06',
      type: 'mcq',
      prompt: 'Avec un modèle affine donnant $y = -3{,}36x + 94{,}55$ ($X$ en °C, $Y$ pluviométrie en mm), que signifie le résultat algébrique $y \\approx -13$ pour $x = 32\\text{ °C}$ ?',
      options: [
        'Il va pleuvoir $-13\\text{ mm}$',
        'On est hors du domaine de validité linéaire (pluviométrie nulle / sèche $\\approx 0\\text{ mm}$)',
        'La température est fausse',
        'La droite doit avoir une pente positive',
      ],
      correctAnswerIndex: 1,
      explanation: 'Une grandeur positive comme la pluviométrie ne peut être négative ; le modèle linéaire atteint ses limites en extrapolation extrême et prévoit simplement $0\\text{ mm}$.',
    },
  },
  {
    stepNumber: 7,
    stepKind: 'methode',
    stepBadge: 'Plan type Bac C',
    stepTheme: 'green',
    stepTitle: 'Feuille de route en 6 étapes pour réussir tout sujet de Statistique 2 variables',
    paragraphText:
      '(1) Représenter le nuage à l’échelle donnée sans relier les points. (2) Calculer $\\bar{X}$, $\\bar{Y}$ et placer $G$. (3) Calculer $\\frac{1}{n}\\sum x_i^2$, $\\frac{1}{n}\\sum y_i^2$, $\\frac{1}{n}\\sum x_i y_i$, puis $V(X), V(Y), \\operatorname{Cov}(X, Y)$. (4) Calculer $r$ et conclure « $|r| \\geqslant 0{,}87 \\implies$ forte corrélation linéaire ». (5) Écrire $(D) : y = ax + b$ et la tracer par $G$. (6) Calculer la prévision demandée avec le bon arrondi.',
    exercise: {
      id: 'tc_m_num_l11_stat_p05_q07',
      type: 'mcq',
      prompt: 'Quel est l’ordre logique correct d’une étude statistique à deux variables ?',
      options: [
        'Prévision $\\to$ Droite $(D)$ $\\to$ Moyennes $\\to$ Covariance',
        'Nuage de points $\\to$ Point moyen $G$ $\\to$ Variances et Covariance $\\to$ Corrélation $r$ $\\to$ Droite $(D)$ $\\to$ Prévision',
        'Corrélation $r$ $\\to$ Covariance $\\to$ Moyennes',
        'Droite $(D)$ $\\to$ Point moyen $G$ $\\to$ Nuage de points',
      ],
      correctAnswerIndex: 1,
      explanation: 'Chaque étape s’appuie sur la précédente : on ne justifie l’usage de $(D)$ qu’après avoir calculé $G$, $V(X), V(Y), \\operatorname{Cov}(X, Y)$ et vérifié $|r| \\geqslant 0{,}87$.',
    },
  },
];

export const MATHS_TLE_C_L11_STATISTIQUE_DEUX_VARIABLES: CurriculumChapter = {
  id: 'terminale_c_maths_numerique_l11_statistique_deux_variables',
  subjectId: 'maths',
  gradeLevel: 'terminale_c',
  alsoForGrades: [],
  order: 13,
  title: 'Leçon 11 : Statistique à deux variables',
  summary:
    'Série statistique double, tableau de contingence et séries marginales, nuage de points, point moyen G(X̄ ; Ȳ) et méthode de Mayer, covariance, coefficient de corrélation linéaire r, droites de régression par les moindres carrés (Y en X et X en Y) et prévisions.',
  officialVolumeHours: 8,
  contentVersion: 2,
  source: 'CÔTE D’IVOIRE – ÉCOLE NUMÉRIQUE — Terminale C Mathématiques (Leçon 11 : Statistique à deux variables)',
  points: [
    {
      id: 'terminale_c_maths_numerique_l11_statistique_deux_variables_p01',
      order: 1,
      title: 'Série double, tableau de contingence et séries marginales',
      summary:
        'Lire un tableau de contingence (triplets (x_i, y_j, n_ij)), extraire les séries marginales d’effectifs et de fréquences, et calculer une moyenne marginale.',
      conceptExplanation:
        'Une série statistique double étudie simultanément deux caractères quantitatifs $X$ et $Y$ sur une population de $N$ individus. Dans un tableau de contingence, l’effectif du couple $(x_i ; y_j)$ est $n_{ij}$ ; les sommes par colonne et par ligne fournissent les deux séries marginales (effectifs et fréquences $f_i = n_i / N$).',
      keyRule: 'Somme des colonnes = série marginale de $X$ ; somme des lignes = série marginale de $Y$ ; total général = $N$.',
      formulas: [
        { name: 'Effectifs et fréquences marginaux', formula: 'n_{i\\bullet} = \\sum_j n_{ij}, \\quad f_i = \\frac{n_{i\\bullet}}{N}' },
      ],
      workedExample: {
        title: 'Tableau de contingence de 100 ménages',
        statement: 'Dans le tableau des $100$ ménages, lire l’effectif de $(X=2, Y=4)$, l’effectif marginal de $X=4$ et calculer $\\bar{X}$.',
        methodSteps: [
          'Intersection colonne $X=2$ et ligne $Y=4$ : $n = 3$ ménages.',
          'Somme colonne $X=4$ : $0 + 1 + 4 + 8 = 13$ ménages.',
          '$\\bar{X} = \\frac{0(10)+1(19)+2(30)+3(23)+4(13)+5(5)}{100} = \\frac{225}{100} = 2{,}25$.',
        ],
        conclusion: '$3$ ménages ont $2$ enfants et $4$ pièces ; $13$ ont $4$ enfants ; moyenne $\\bar{X} = 2{,}25$ enfants.',
      },
      structuredSteps: p01Steps,
      exercises: p01Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_statistique_deux_variables_p02',
      order: 2,
      title: 'Nuage de points, point moyen G et méthode de Mayer',
      summary:
        'Représenter un nuage de points M_i(x_i ; y_i), calculer le point moyen G(X̄ ; Ȳ) et déterminer la droite de Mayer (G₁G₂) via deux sous-nuages.',
      conceptExplanation:
        'Le nuage de points rassemble les points $M_i(x_i ; y_i)$ dans un repère orthogonal (sans les relier). Son centre de gravité est le point moyen $G(\\bar{X} ; \\bar{Y})$, par lequel passe toute droite d’ajustement (moindres carrés ou Mayer $(G_1 G_2)$).',
      keyRule: 'Ne jamais relier les points du nuage ; toujours placer et faire passer la droite d’ajustement par $G(\\bar{X} ; \\bar{Y})$.',
      formulas: [
        { name: 'Point moyen G', formula: '\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n x_i \\qquad ; \\qquad \\bar{Y} = \\frac{1}{n}\\sum_{i=1}^n y_i' },
      ],
      workedExample: {
        title: 'Points moyens partiels de Mayer (Tension artérielle)',
        statement: 'Calculer $G_1$ pour $(26;128), (39;126), (40;118)$ et $G_2$ pour $(50;136), (53;142), (56;145)$.',
        methodSteps: [
          '$x_{G_1} = \\frac{26+39+40}{3} = 35$, $y_{G_1} = \\frac{128+126+118}{3} = 124 \\implies G_1(35 ; 124)$.',
          '$x_{G_2} = \\frac{50+53+56}{3} = 53$, $y_{G_2} = \\frac{136+142+145}{3} = 141 \\implies G_2(53 ; 141)$.',
        ],
        conclusion: 'La droite de Mayer $(G_1 G_2)$ a pour pente $a = \\frac{141-124}{53-35} = \\frac{17}{18} \\approx 0{,}94$.',
      },
      structuredSteps: p02Steps,
      exercises: p02Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_statistique_deux_variables_p03',
      order: 3,
      title: 'Covariance, variances et coefficient de corrélation linéaire r',
      summary:
        'Calculer V(X), V(Y) et Cov(X, Y) par les formules de Koenig, calculer r = Cov(X,Y)/(√V(X)√V(Y)) ∈ [−1 ; 1] et conclure avec le seuil |r| ≥ 0,87.',
      conceptExplanation:
        'La covariance $\\operatorname{Cov}(X, Y) = \\frac{1}{n}\\sum x_i y_i - \\bar{X}\\bar{Y}$ mesure le sens de variation conjoint de $X$ et $Y$. Divisée par le produit des écarts-types $\\sqrt{V(X)}\\sqrt{V(Y)}$, elle donne le coefficient de corrélation linéaire $r \\in [-1 ; 1]$. Dès que $0{,}87 \\leqslant |r| \\leqslant 1$, la corrélation linéaire est forte.',
      keyRule: 'Toujours vérifier $V(X) \\geqslant 0$, $V(Y) \\geqslant 0$ et $-1 \\leqslant r \\leqslant 1$ ; forte corrélation ssi $|r| \\geqslant 0{,}87$.',
      formulas: [
        { name: 'Covariance et variances', formula: '\\operatorname{Cov}(X,Y) = \\frac{\\sum x_i y_i}{n} - \\bar{X}\\bar{Y} \\quad ; \\quad V(X) = \\frac{\\sum x_i^2}{n} - \\bar{X}^2' },
        { name: 'Corrélation linéaire', formula: 'r = \\frac{\\operatorname{Cov}(X,Y)}{\\sqrt{V(X)}\\sqrt{V(Y)}} \\in [-1 ; 1]' },
      ],
      workedExample: {
        title: 'Corrélation d’une série à 9 couples (Ex. 4)',
        statement: 'Avec $\\bar{X}=4$, $\\bar{Y}=60$, $V(X)=6{,}67$, $V(Y)=2570$ et $\\operatorname{Cov}(X,Y)=-125{,}67$, calculer et interpréter $r$.',
        methodSteps: [
          '$r = \\frac{-125{,}67}{\\sqrt{6{,}67 \\times 2570}} \\approx -0{,}96$.',
          'Comme $-1 < r \\leqslant -0{,}87$, $|r| = 0{,}96 \\geqslant 0{,}87$.',
        ],
        conclusion: 'Il existe une forte corrélation linéaire négative entre $X$ et $Y$.',
      },
      structuredSteps: p03Steps,
      exercises: p03Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_statistique_deux_variables_p04',
      order: 4,
      title: 'Droites de régression (Y en X et X en Y) par les moindres carrés',
      summary:
        'Déterminer (D) : y = ax + b (a = Cov/V(X)) et (D’) : x = a’y + b’ (a’ = Cov/V(Y)), utiliser aa’ = r² et retrouver G à leur intersection.',
      conceptExplanation:
        'Par la méthode des moindres carrés, la droite de régression de $Y$ en $X$ est $(D) : y = ax + b$ avec $a = \\frac{\\operatorname{Cov}(X,Y)}{V(X)}$ et $b = \\bar{Y} - a\\bar{X}$ ; celle de $X$ en $Y$ est $(D’) : x = a’y + b’$ avec $a’ = \\frac{\\operatorname{Cov}(X,Y)}{V(Y)}$ et $b’ = \\bar{X} - a’\\bar{Y}$. Elles se coupent en $G$ et vérifient $aa’ = r^2$.',
      keyRule: 'Attention au dénominateur : $V(X)$ pour $Y$ en $X$, $V(Y)$ pour $X$ en $Y$ ! Et $aa’ = r^2$.',
      formulas: [
        { name: 'Droites (D) et (D’)', formula: 'a = \\frac{\\operatorname{Cov}(X,Y)}{V(X)}, \\quad b = \\bar{Y} - a\\bar{X} \\qquad ; \\qquad a’ = \\frac{\\operatorname{Cov}(X,Y)}{V(Y)}, \\quad b’ = \\bar{X} - a’\\bar{Y}' },
        { name: 'Lien avec r', formula: 'a\\,a’ = r^2' },
      ],
      workedExample: {
        title: 'Droite (D) des champs d’hévéa (Ex. 5)',
        statement: 'Pour $\\bar{X} = 5{,}63$, $\\bar{Y} = 7{,}75$, $V(X) = 4{,}18$ et $\\operatorname{Cov}(X, Y) = 5{,}37$, trouver $(D)$ de $Y$ en $X$.',
        methodSteps: [
          '$a = \\frac{5{,}37}{4{,}18} \\approx 1{,}28$.',
          '$b = 7{,}75 - 1{,}28 \\times 5{,}63 = 7{,}75 - 7{,}2064 \\approx 0{,}54$.',
        ],
        conclusion: '$(D) : y = 1{,}28x + 0{,}54$.',
      },
      structuredSteps: p04Steps,
      exercises: p04Steps.map((s) => s.exercise),
    },
    {
      id: 'terminale_c_maths_numerique_l11_statistique_deux_variables_p05',
      order: 5,
      title: 'Estimations, prévisions et méthode complète du Bac C',
      summary:
        'Effectuer une estimation chiffrée ou graphique, déterminer un rang temporel dépassant un seuil, maîtriser les arrondis d’ordre 0/2 et la linéarisation z = ln y.',
      conceptExplanation:
        'Lorsque la corrélation linéaire est forte, la droite $(D)$ permet de prévoir $y$ pour une nouvelle valeur $x$ (ou inversement d’estimer le rang $x$ où un seuil $y_0$ est atteint). Il faut respecter les consignes d’arrondi, veiller aux seuils stricts et rester prudent face aux extrapolations extrêmes.',
      keyRule: 'Pour « dépasser un seuil » sur une suite de mois $x$, toujours prendre l’entier immédiatement supérieur si la solution n’est pas entière.',
      formulas: [
        { name: 'Prévision et changement logarithmique', formula: 'y \\approx ax + b \\qquad ; \\qquad \\ln y = ax + b \\iff y = e^b\\,e^{ax}' },
      ],
      workedExample: {
        title: 'Prévision du don au club littéraire (situation complexe)',
        statement: 'La droite du club (rang $x=1$ en janvier $2020$) est $y = 86{,}046x + 1014{,}868$. Quand dépasse-t-on $3000$ adhérents ?',
        methodSteps: [
          '$86{,}046x + 1014{,}868 = 3000 \\iff x = \\frac{1985{,}132}{86{,}046} \\approx 23{,}071$.',
          'À $x = 23$, on n’a pas encore $3000$ : il faut atteindre le rang entier suivant $x = 24$.',
        ],
        conclusion: 'Le rang $24$ correspond à Décembre $2021$.',
      },
      structuredSteps: p05Steps,
      exercises: p05Steps.map((s) => s.exercise),
    },
  ],
};

