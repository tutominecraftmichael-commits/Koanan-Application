import type {
  CurriculumChapter,
  CurriculumPoint,
  StructuredLessonStep,
} from '../../../../lib/curriculum/types';

const makePoint = (
  p: Omit<CurriculumPoint, 'exercises'> & { structuredSteps: StructuredLessonStep[] },
): CurriculumPoint => ({
  ...p,
  exercises: p.structuredSteps.map((s) => s.exercise),
});

// ============================================================================
// STATISTIQUE DESCRIPTIVE — ENTD LICENCE 1
// Programme Masterclass KONAN (4 chapitres, 14 points, 86 étapes, 8 schémas)
// ============================================================================

export const STAT_DESCRIPTIVE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Vocabulaire statistique, typologie et tableaux de distribution
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_stat_ch1',
    subjectId: 'lmd_stat_descriptive',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Statistique Descriptive',
    title: 'Chapitre 1 — Vocabulaire statistique, typologie des variables et tableaux',
    summary:
      'Statistique descriptive vs inférentielle, population, individu, caractère, typologie des 4 variables, tableaux d’effectifs et fréquences cumulées ($n_j, f_j, N_j, F_j, N_j^*, F_j^*$), fonction de répartition empirique $F(x)$, regroupement en classes (Sturges) et densités.',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_stat_ch1_p1',
        order: 1,
        title: 'Démarche statistique, vocabulaire fondamental et typologie des variables',
        summary:
          'Distinguer statistique descriptive et inférentielle, identifier population, individu et modalités, et classer sans erreur toute variable statistique.',
        conceptExplanation:
          'La statistique a pour objectif de dégager du sens à partir de données observées sur un phénomène réel. Elle comporte deux grands volets complémentaires :\n' +
          '• **Statistique descriptive (déductive)** : recueillir, ordonner, résumer et visualiser les données effectivement observées grâce à des tableaux, des graphiques et des paramètres numériques.\n' +
          '• **Statistique inférentielle (inductive)** : généraliser à toute une population des résultats mesurés sur un échantillon aléatoire, en s’appuyant sur des lois de probabilités.\n\n' +
          'Toute étude statistique définit d’abord :\n' +
          '• la **population** (ensemble des **individus** ou unités statistiques étudiés, de taille $n$) ;\n' +
          '• le **caractère** ou **variable statistique** $X$ (critère mesuré sur chaque individu) ;\n' +
          '• ses **modalités** (valeurs possibles), qui doivent être **incompatibles** (une seule modalité par individu) et **exhaustives** (tout individu en possède une).\n\n' +
          'On classe toute variable en quatre grandes familles : **qualitative nominale**, **qualitative ordinale**, **quantitative discrète** et **quantitative continue**.',
        formulas: [
          {
            name: 'Effectif total et fréquence relative',
            formula: 'n = \\sum_{j=1}^{k} n_j, \\qquad f_j = \\frac{n_j}{n} \\in [0, 1], \\qquad \\sum_{j=1}^{k} f_j = 1',
            note: 'En pourcentage, la fréquence relative vaut pⱼ = 100 × fⱼ et leur somme vaut 100 %.',
          },
        ],
        keyRule:
          'Le type d’une variable dépend de la **nature de ses modalités**, jamais de son codage informatique : un code postal ou `1 = Homme, 2 = Femme` reste une variable **qualitative nominale** !',
        workedExample: {
          title: 'Typologie complète des variables d’une enquête socio-économique à Abidjan',
          statement:
            'Dans une enquête auprès de $500$ ménages abidjanais, on relève : (1) la commune de résidence, (2) le niveau de satisfaction (`Faible / Moyen / Élevé`), (3) le nombre d’abonnements Mobile Money par foyer, et (4) le montant mensuel du loyer en F CFA. Identifier la population, l’individu et la nature de chaque variable.',
          methodSteps: [
            'Population : l’ensemble des $500$ ménages enquêtés (taille $n = 500$). Individu : un ménage.',
            '(1) Commune (`Cocody, Yopougon, Marcory…`) : catégories sans ordre hiérarchique naturel $\\longrightarrow$ **qualitative nominale**.',
            '(2) Satisfaction (`Faible < Moyen < Élevé`) : catégories non numériques mais naturellement hiérarchisées $\\longrightarrow$ **qualitative ordinale**.',
            '(3) Nombre d’abonnements ($0, 1, 2, 3, \\dots$) : quantité numérique prenant des valeurs isolées entières $\\longrightarrow$ **quantitative discrète**.',
            '(4) Montant du loyer mensuel : quantité mesurable pouvant varier continûment sur un intervalle réel $\\longrightarrow$ **quantitative continue**.',
          ],
          conclusion:
            'Identifier précisément ces 4 types dès le départ dicte immédiatement quels tableaux (cumuls autorisés ou non), graphiques et calculs (moyenne, médiane) ont un sens mathématique.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Démarche',
            stepTheme: 'blue',
            stepTitle: 'Statistique descriptive (déductive) versus statistique inférentielle (inductive)',
            paragraphText:
              'Avant de calculer la moindre moyenne, il faut savoir si l’on décrit un jeu de données complet ou si l’on extrapole à une population plus vaste.\n' +
              '• **Statistique descriptive (déductive)** : ensemble des méthodes permettant de collecter, trier, condenser et représenter des données observées (tableaux, histogrammes, moyennes, variances, corrélations) sans hypothèse probabiliste.\n' +
              '• **Statistique inférentielle (inductive)** : ensemble des méthodes qui estiment des paramètres ou testent des hypothèses sur une population entière à partir d’un **échantillon représentatif** tiré au hasard.\n' +
              '• **Pourquoi échantillonner ?** Interroger toute une population (recensement) coûte souvent trop cher, prend trop de temps ou détruit les objets testés (ex. tester la durée de vie d’ampoules LED ou de batteries de smartphones).',
            keyRule:
              'Décrire ce qui a été observé = **statistique descriptive** ; généraliser d’un échantillon à une population entière = **statistique inférentielle**.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Une fintech analyse l’ensemble de ses $12\\,400$ transactions de janvier pour calculer le montant moyen, la médiane et tracer la répartition par opérateur. De quelle branche relève cette démarche ?',
              options: [
                'De la statistique inférentielle, car le nombre de transactions dépasse $10\\,000$.',
                'De la statistique descriptive, car elle résume et visualise des données effectivement observées sans extrapoler.',
                'Uniquement de la théorie des probabilités pures.',
                'D’un test destructif sur échantillon.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La statistique descriptive consiste précisément à organiser, résumer et représenter graphiquement un ensemble de données observées, quelle que soit sa taille.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Vocabulaire',
            stepTheme: 'blue',
            stepTitle: 'Population, individu, variable statistique et modalités incompatibles/exhaustives',
            paragraphText:
              'La rigueur statistique commence par définir sans ambiguïté les quatre objets de base d’une étude.\n' +
              '• **Population** : ensemble des entités étudiées (humains, entreprises, factures, parcelles agricoles, commandes e-commerce). Chaque élément s’appelle un **individu** (ou unité statistique).\n' +
              '• **Caractère (ou variable statistique $X$)** : propriété mesurée ou observée sur chaque individu (ex. chiffre d’affaires, âge, navigateur web).\n' +
              '• **Modalités** : valeurs ou catégories possibles du caractère. Deux exigences logiques impératives : elles doivent être **incompatibles** (aucun individu ne relève de deux modalités simultanément) et **exhaustives** (tout individu trouve exactement une modalité).\n' +
              '• **Série statistique** : suite brute des valeurs $x_1, x_2, \\dots, x_n$ relevées sur les $n$ individus.',
            keyRule:
              'Les modalités d’une variable doivent former une **partition** de la population : **incompatibles** (pas de chevauchement) et **exhaustives** (aucun individu oublié).',
            konanTip:
              'Dans un questionnaire, vérifie toujours les bornes des tranches : écrire `[18 ; 25]` et `[25 ; 35]` viole l’incompatibilité car un individu de $25$ ans appartient aux deux classes ! On écrit `[18 ; 25[` et `[25 ; 35[`.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Un sondage propose les modalités d’âge suivantes : « moins de 25 ans », « de 25 à 45 ans », « de 40 à 60 ans » et « plus de 60 ans ». Quel principe fondamental des modalités est violé ?',
              options: [
                'L’exhaustivité, car les personnes de 10 ans sont oubliées.',
                'L’incompatibilité, car les tranches « 25 à 45 » et « 40 à 60 » se chevauchent entre 40 et 45 ans.',
                'La continuité des nombres entiers.',
                'Aucun principe n’est violé.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une personne âgée de $42$ ans appartient simultanément à « 25 à 45 ans » et à « 40 à 60 ans » : les modalités ne sont pas incompatibles.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Les 4 types',
            stepTheme: 'blue',
            stepTitle: 'Typologie complète des variables : nominal, ordinal, discret et continu',
            paragraphText:
              'Toute variable statistique se range dans l’une des quatre catégories de la matrice ci-dessous, selon qu’elle mesure ou non une quantité numérique, puis selon sa structure fine.\n' +
              '• **Qualitative nominale** : catégories sans hiérarchie naturelle (sexe, navigateur internet, opérateur télécom, loisir).\n' +
              '• **Qualitative ordinale** : catégories non numériques mais dotées d’un ordre naturel (mention au Bac, degré de satisfaction, niveau d’études).\n' +
              '• **Quantitative discrète** : grandeur numérique prenant des valeurs isolées/dénombrables (nombre d’enfants, nombre de commandes par jour, pointure).\n' +
              '• **Quantitative continue** : grandeur numérique pouvant prendre toute valeur d’un intervalle réel (taille, masse d’un œuf, temps de chargement, loyer mensuel).',
            visualSchema: {
              type: 'matrix_2x2',
              title: 'Typologie des 4 grandes familles de variables statistiques',
              caption: 'La nature de la variable détermine immédiatement les graphiques et indicateurs mathématiquement autorisés.',
              matrix2x2: {
                topAxis: ['Sans ordre / Valeurs isolées', 'Ordonnée / Intervalle continu'],
                leftAxis: ['Qualitative (Catégories)', 'Quantitative (Mesures)'],
                topLeft: {
                  title: 'Qualitative nominale',
                  color: 'blue',
                  items: ['Catégories sans hiérarchie', 'Ex. : OS, commune, loisir, code postal', 'Mode uniquement (cumuls interdits)', 'Secteurs / tuyaux d’orgue'],
                },
                topRight: {
                  title: 'Qualitative ordinale',
                  color: 'violet',
                  items: ['Catégories hiérarchisées', 'Ex. : mention Bac, satisfaction, tranche d’âge', 'Mode, médiane et cumuls autorisés', 'Tuyaux d’orgue ordonnés'],
                },
                bottomLeft: {
                  title: 'Quantitative discrète',
                  color: 'green',
                  items: ['Valeurs numériques isolées', 'Ex. : nb d’enfants, nb d’arrivées/10 min', 'Tous paramètres (moyenne, σ, quartiles)', 'Diagramme en bâtons + escaliers'],
                },
                bottomRight: {
                  title: 'Quantitative continue',
                  color: 'orange',
                  items: ['Tout réel d’un intervalle', 'Ex. : taille, poids, loyer mensuel', 'Regroupement en classes [bⱼ₋₁, bⱼ[', 'Histogramme en densité + ogive'],
                },
              },
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q3',
              type: 'mcq',
              prompt: 'On observe le nombre $X$ de clients arrivant à un guichet bancaire durant un intervalle de 10 minutes ($X \\in \\{0, 1, 2, 3, 4, 5, 6\\}$). Quelle est la nature exacte de $X$ ?',
              options: [
                'Qualitative nominale.',
                'Qualitative ordinale.',
                'Quantitative discrète.',
                'Quantitative continue.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Un comptage d’arrivées est une grandeur numérique mesurable qui ne prend que des valeurs entières isolées ($0, 1, 2, \\dots$) : c’est une variable quantitative discrète.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Pièges de typologie',
            stepTheme: 'orange',
            stepTitle: 'Les deux pièges classiques : codes numériques et statut flexible de l’âge',
            paragraphText:
              'Aux examens de Statistique Descriptive, deux cas piègent presque systématiquement les étudiants trop pressés.\n' +
              '• **Piège 1 — Les faux nombres (codes numériques)** : un code postal (`00225`), un numéro de téléphone, un numéro de maillot ou un codage de base de données (`1 = Homme`, `2 = Femme`) s’écrivent avec des chiffres, mais calculer leur moyenne (« sexe moyen = 1,54 ») n’a aucun sens ! Ce sont des variables **qualitatives nominales**.\n' +
              '• **Piège 2 — L’âge caméléon** : l’âge exact en années/jours est **quantitatif continu** ; l’âge relevé en années révolues sur un petit groupe (`20, 21, 22 ans`) se traite souvent comme **quantitatif discret** ; enfin, posé sous forme de tranches (`< 25 ans`, `25–45 ans`, `> 45 ans`), la variable « tranche d’âge » devient **qualitative ordinale** !',
            keyRule:
              'Pose-toi toujours le « test de la moyenne » : si additionner deux valeurs et diviser par $2$ n’a aucun sens concret (ex. deux codes postaux), la variable est **qualitative** !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Dans un fichier clients Excel, la colonne « Moyen de paiement » est codée ainsi : `1 = Wave`, `2 = Orange Money`, `3 = MTN MoMo`, `4 = Carte bancaire`. Quelle est la nature statistique de cette colonne ?',
              options: [
                'Quantitative discrète, car elle prend les valeurs entières $1, 2, 3, 4$.',
                'Qualitative nominale, car les chiffres ne sont que des étiquettes sans valeur de quantité ni d’ordre.',
                'Qualitative ordinale, car $4 > 1$.',
                'Quantitative continue.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les nombres `1, 2, 3, 4` ne sont que des codes arbitraires désignant des catégories sans hiérarchie ni grandeur mesurable : la variable reste strictement qualitative nominale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Opérations valides',
            stepTheme: 'green',
            stepTitle: 'Quels tableaux et paramètres sont autorisés pour chaque type de variable ?',
            paragraphText:
              'Classer une variable n’est pas un exercice théorique : cela détermine ce que tu as le **droit** ou l’**interdiction** de calculer.\n' +
              '• **Variable qualitative nominale** : effectifs $n_j$, fréquences $f_j$ et **mode** uniquement. Les **effectifs cumulés $N_j$**, la **médiane** et la **moyenne** sont strictement **interdits** (l’ordre des lignes est arbitraire !).\n' +
              '• **Variable qualitative ordinale** : puisque les modalités sont ordonnées, on peut ajouter les **effectifs/fréquences cumulés** et la **médiane**, mais la moyenne arithmétique reste interdite (pas de distances numériques).\n' +
              '• **Variables quantitatives (discrète ou continue)** : tous les outils sont autorisés — cumuls, mode, médiane, quartiles, moyennes, variance et écart-type !',
            konanTip:
              'Si un tableau statistique porte sur une variable nominale (ex. couleur ou navigateur web), n’ajoute JAMAIS de colonne « effectifs cumulés » : cela dépendrait arbitrairement de l’ordre alphabétique des modalités !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Parmi les quatre indicateurs suivants, lequel est **mathématiquement interdit** pour une variable **qualitative ordinale** (comme la mention au Bac : Passable, AB, Bien, TB) ?',
              options: [
                'Le mode (mention la plus fréquente).',
                'La fréquence cumulée croissante (part d’élèves ayant au plus « Assez Bien »).',
                'La médiane (mention atteinte à 50 % des effectifs cumulés).',
                'La moyenne arithmétique et l’écart-type.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Sur une variable qualitative ordinale, l’ordre naturel permet les fréquences cumulées et la médiane (en plus du mode), mais l’absence de valeurs numériques mesurables interdit tout calcul de moyenne arithmétique ou d’écart-type.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Application',
            stepTheme: 'slate',
            stepTitle: 'Diagnostiquer un jeu de données multi-variables d’une plateforme digitale',
            paragraphText:
              'Un analyste data d’une plateforme e-commerce abidjanaise extrait une table de $2\\,500$ commandes contenant cinq colonnes :\n' +
              '• `id_commande` (`CMD-001`…) : simple identifiant unique (clé primaire), pas une variable d’analyse statistique agrégée.\n' +
              '• `systeme_exploitation` (`Android`, `iOS`, `Windows`) : **qualitative nominale**.\n' +
              '• `note_satisfaction` (`Très insatisfait` < `Insatisfait` < `Satisfait` < `Très satisfait`) : **qualitative ordinale**.\n' +
              '• `nb_articles_panier` ($1, 2, 3, \\dots$) : **quantitative discrète**.\n' +
              '• `montant_fcfa` (en F CFA) et `temps_livraison_min` (en minutes) : **quantitatives continues**.\n' +
              'Cette étape de typage est le préalable obligatoire dans tout logiciel de data science (Excel, Python/pandas, R).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Dans un relevé portant sur la masse exacte (en grammes) de $400$ œufs pondus dans une ferme agricole, comment qualifie-t-on la population, l’individu et la variable ?',
              options: [
                'Population : les $400$ œufs ; individu : un œuf ; variable « masse » : quantitative continue.',
                'Population : la masse en grammes ; individu : la ferme ; variable : quantitative discrète.',
                'Population : les $400$ œufs ; individu : un gramme ; variable : qualitative ordinale.',
                'Population : les fermes du pays ; individu : $400$ œufs ; variable : qualitative nominale.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La population étudiée est l’ensemble des $400$ œufs pesés, l’individu (unité statistique) est un œuf, et la masse (mesurable sur un intervalle réel) est une variable quantitative continue.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_stat_ch1_p2',
        order: 2,
        title: 'Tableaux statistiques ($n_j, f_j, N_j, F_j, N_j^*, F_j^*$) et fonction de répartition $F(x)$',
        summary:
          'Construire et lire un tableau complet de distribution, maîtriser les cumuls croissants et décroissants, et exploiter la fonction de répartition empirique discrète.',
        conceptExplanation:
          'Pour une variable quantitative discrète prenant $k$ valeurs ordonnées $v_1 < v_2 < \\dots < v_k$, on condense la série brute dans un **tableau statistique** comprenant :\n' +
          '• **Effectif (fréquence absolue) $n_j$** : nombre d’individus présentant la valeur $v_j$ ($\\sum_{j=1}^k n_j = n$).\n' +
          '• **Fréquence relative $f_j$** : proportion $f_j = n_j / n$ ($\\sum_{j=1}^k f_j = 1$).\n' +
          '• **Cumuls croissants** : $N_j = n_1 + \\dots + n_j$ et $F_j = f_1 + \\dots + f_j = N_j / n$. Ils mesurent la part d’individus ayant une valeur **au plus égale à $v_j$** ($X \\le v_j$).\n' +
          '• **Cumuls décroissants** : $N_j^* = n_j + \\dots + n_k$ et $F_j^* = G_j = f_j + \\dots + f_k$. Ils mesurent la part d’individus ayant une valeur **au moins égale à $v_j$** ($X \\ge v_j$), avec la relation clé $F_j^* = 1 - F_{j-1}$ (en posant $F_0 = 0$).\n\n' +
          'La **fonction de répartition empirique** $F : \\mathbb{R} \\to [0, 1]$ associe à tout réel $x$ la proportion $F(x) = P(X \\le x)$. Dans le cas discret, c’est une fonction en escaliers croissante, constante sur chaque $[v_{j-1}, v_j[$ et valant $F_j$ en $v_j$.',
        formulas: [
          {
            name: 'Cumuls croissants et décroissants',
            formula: 'N_j = \\sum_{i=1}^{j} n_i, \\quad F_j = F_{j-1} + f_j \\quad ; \\quad N_j^* = \\sum_{i=j}^{k} n_i = n - N_{j-1}, \\quad F_j^* = 1 - F_{j-1}',
            note: 'Avec les conventions N₀ = 0 et F₀ = 0 : vérifie toujours que Nₖ = n, Fₖ = 1, N₁* = n et F₁* = 1.',
          },
          {
            name: 'Proportion sur un intervalle ]a, b]',
            formula: 'f_{]a, b]} = P(a < X \\le b) = F(b) - F(a)',
            note: 'Attention aux bornes strictes/larges dans le cas discret : P(X ≥ vⱼ) = 1 − F(vⱼ₋₁) et non 1 − F(vⱼ) !',
          },
        ],
        keyRule:
          'Traduction immédiate : « **au plus $v_j$** » ($X \\le v_j$) $\\longrightarrow N_j$ ou $F_j$ ; « **au moins $v_j$** » ($X \\ge v_j$) $\\longrightarrow N_j^*$ ou $F_j^* = 1 - F_{j-1}$ !',
        workedExample: {
          title: 'Contrôle qualité de 100 caissettes de pêches dans un supermarché',
          statement:
            'Sur $100$ caissettes de $9$ pêches, le nombre $X$ de pêches abîmées par caissette donne les effectifs : $0 \\to 12$, $1 \\to 29$, $2 \\to 31$, $3 \\to 17$, $4 \\to 5$, $5 \\to 1$, $6 \\to 2$, $7 \\to 2$, $8 \\to 0$, $9 \\to 1$. Calculer : 1) la proportion de caissettes ayant au plus $4$ pêches abîmées ; 2) le nombre de caissettes ayant au moins $3$ pêches abîmées.',
          methodSteps: [
            'On calcule les effectifs cumulés croissants $N_j$ : $N(0)=12$, $N(1)=41$, $N(2)=72$, $N(3)=89$, $N(4)=94$, $N(5)=95$, $N(6)=97$, $N(7)=99$, $N(8)=99$, $N(9)=100$.',
            '1) « Au plus $4$ » signifie $X \\le 4$ : on lit directement $N(4) = 94$, donc la proportion vaut $F(4) = \\frac{94}{100} = 0{,}94 = 94\\%$.',
            '2) « Au moins $3$ » signifie $X \\ge 3$ : c’est le complémentaire de $X \\le 2$ ! Donc $N^*(3) = n - N(2) = 100 - 72 = 28$ caissettes.',
            'Vérification directe : $17 + 5 + 1 + 2 + 2 + 0 + 1 = 28$ caissettes ($28\\%$).',
          ],
          conclusion:
            '$94\\%$ des caissettes ont au plus $4$ pêches abîmées, et $28$ caissettes ont au moins $3$ pêches abîmées.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Effectifs & Fréquences',
            stepTheme: 'blue',
            stepTitle: 'Passer des données brutes aux effectifs $n_j$ et fréquences relatives $f_j$',
            paragraphText:
              'Un relevé brut de $100$ valeurs est illisible à l’œil nu. La première opération de statistique descriptive consiste à regrouper les valeurs identiques.\n' +
              '• **Effectif ($n_j$)** : nombre d’apparitions de la modalité $v_j$. La somme des effectifs vaut l’effectif total $n = \\sum_{j=1}^k n_j$.\n' +
              '• **Fréquence relative ($f_j = n_j / n$)** : proportion de la population présentant la modalité $v_j$. Elle est toujours comprise entre $0$ et $1$, et $\\sum_{j=1}^k f_j = 1$ (ou $100\\%$).\n' +
              '• **Intérêt des fréquences** : contrairement aux effectifs bruts, les fréquences permettent de comparer immédiatement deux populations de tailles très différentes (ex. comparer une agence de $40$ clients et une autre de $1\\,500$ clients).',
            keyRule:
              'Vérification systématique en bas de tableau : $\\sum n_j = n$ et $\\sum f_j = 1$ (ou $100\\%$). Si la somme ne tombe pas juste, une erreur de comptage s’est glissée !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Dans une enquête sur $80$ étudiants, la modalité « Transport en commun » a une fréquence relative de $0{,}35$. Quel est son effectif absolu $n_j$ ?',
              options: [
                '$24$',
                '$28$',
                '$35$',
                '$45$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Comme $f_j = n_j / n$, on a $n_j = n \\times f_j = 80 \\times 0{,}35 = 28$ étudiants.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Cumuls croissants',
            stepTheme: 'blue',
            stepTitle: 'Effectifs cumulés croissants ($N_j$) et fréquences cumulées croissantes ($F_j$)',
            paragraphText:
              'Dès que les modalités sont ordonnées (ordinal ou quantitatif), les cumuls croissants répondent instantanément aux questions de type « combien valent **au plus** $x$ ? ».\n' +
              '• **Définition** : $N_j = n_1 + n_2 + \\dots + n_j$ et $F_j = f_1 + f_2 + \\dots + f_j = N_j / n$.\n' +
              '• **Calcul rapide en cascade** : $N_1 = n_1$, puis $N_j = N_{j-1} + n_j$ ; de même $F_j = F_{j-1} + f_j$.\n' +
              '• **Interprétation concrète** : si pour le nombre d’enfants par foyer on lit $N(2) = 68$ sur $100$ ménages ($F(2) = 0{,}68$), cela signifie que **$68\\%$ des ménages ont au plus $2$ enfants** (c’est-à-dire $0$, $1$ ou $2$ enfants).',
            konanTip:
              'La dernière case de la colonne $N_j$ vaut toujours $n$, et la dernière case de $F_j$ vaut toujours $1$ ($100\\%$) : c’est un excellent filet de sécurité pour vérifier tes additions !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Les fréquences relatives d’une variable discrète prenant les valeurs $1, 2, 3, 4$ sont respectivement $f_1 = 0{,}15$, $f_2 = 0{,}30$, $f_3 = 0{,}35$ et $f_4 = 0{,}20$. Que vaut $F_3$ et comment l’interpréter ?',
              options: [
                '$F_3 = 0{,}35$ : $35\\%$ des individus ont exactement la valeur $3$.',
                '$F_3 = 0{,}80$ : $80\\%$ des individus ont une valeur au plus égale à $3$.',
                '$F_3 = 0{,}55$ : $55\\%$ des individus ont une valeur au moins égale à $3$.',
                '$F_3 = 0{,}45$ : $45\\%$ des individus ont une valeur strictement inférieure à $3$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$F_3 = f_1 + f_2 + f_3 = 0{,}15 + 0{,}30 + 0{,}35 = 0{,}80$, ce qui représente la proportion d’individus vérifiant $X \\le 3$ (au plus égal à $3$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Cumuls décroissants',
            stepTheme: 'blue',
            stepTitle: 'Effectifs et fréquences cumulés décroissants ($N_j^*, F_j^*$) et lien avec $F_{j-1}$',
            paragraphText:
              'Les cumuls décroissants répondent à la question symétrique : « combien d’individus atteignent **au moins** la valeur $v_j$ ? » ($X \\ge v_j$).\n' +
              '• **Définition** : $N_j^* = n_j + n_{j+1} + \\dots + n_k$ et $F_j^* = G_j = f_j + f_{j+1} + \\dots + f_k$.\n' +
              '• **Formule de passage fondamentale** : comme tous les individus ont soit $X \\le v_{j-1}$, soit $X \\ge v_j$, on a exactement :\n' +
              '  $$N_j^* = n - N_{j-1} \\qquad \\text{et} \\qquad F_j^* = 1 - F_{j-1}$$ (avec $N_0 = 0$ et $F_0 = 0$).\n' +
              '• **Calcul en cascade** : on part de $N_1^* = n$ et on soustrait à chaque pas l’effectif précédent : $N_j^* = N_{j-1}^* - n_{j-1}$.',
            formula: {
              name: 'Relation entre cumuls décroissants et croissants',
              formula: 'N_j^* = n - N_{j-1}, \\qquad F_j^* = 1 - F_{j-1} \\qquad (j = 1, \\dots, k)',
              note: 'Remarque clé : Fⱼ* + Fⱼ₋₁ = 1, mais Fⱼ* + Fⱼ = 1 + fⱼ (car la modalité vⱼ est comptée dans les deux !).',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Dans un tableau discret ordonné, on connaît $F_2 = 0{,}45$ et $f_3 = 0{,}25$ (donc $F_3 = 0{,}70$). Que vaut la fréquence cumulée décroissante $F_3^* = P(X \\ge v_3)$ ?',
              options: [
                '$0{,}30$',
                '$0{,}55$',
                '$0{,}75$',
                '$0{,}25$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par la relation fondamentale $F_3^* = 1 - F_2 = 1 - 0{,}45 = 0{,}55$. En effet, $X \\ge v_3$ inclut $v_3$ lui-même ($f_3 = 0{,}25$) plus toutes les valeurs supérieures ($1 - F_3 = 0{,}30$), soit $0{,}25 + 0{,}30 = 0{,}55$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Tableau complet',
            stepTheme: 'violet',
            stepTitle: 'Lire un tableau statistique complet et la fonction de répartition empirique $F(x)$',
            paragraphText:
              'La **fonction de répartition empirique** $F : \\mathbb{R} \\to [0, 1]$ synthétise toute la distribution sur la droite réelle : $F(x) = P(X \\le x)$.\n' +
              '• **Expression analytique discrète** : $F(x) = 0$ si $x < v_1$ ; $F(x) = F_j$ si $v_j \\le x < v_{j+1}$ ; $F(x) = 1$ si $x \\ge v_k$.\n' +
              '• **Propriétés** : $F$ est croissante (au sens large), en escaliers, continue à droite en chaque $v_j$, avec un saut de hauteur $f_j$ à l’abscisse $v_j$.\n' +
              '• **Calcul sur intervalle** : pour tous réels $a < b$, $P(a < X \\le b) = F(b) - F(a)$.\n' +
              'Examine le tableau complet ci-dessous modélisant $100$ intervalles d’arrivées de clients à un guichet.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau statistique complet : nombre X d’arrivées de clients en 10 min (n = 100)',
              caption: 'Vérifie à chaque ligne que Nⱼ* = 100 − Nⱼ₋₁ et que F(x) saute de fⱼ à chaque entier x = vⱼ.',
              tableData: {
                headers: ['Valeur $v_j$', 'Effectif $n_j$', 'Fréquence $f_j$', 'Cumul $\\nearrow N_j$', 'Fréq. cum. $F_j$', 'Cumul $\\searrow N_j^*$'],
                rows: [
                  ['$1$', '$15$', '$0{,}15$', '$15$', '$0{,}15$', '$100$'],
                  ['$2$', '$25$', '$0{,}25$', '$40$', '$0{,}40$', '$85$'],
                  ['$3$', '$26$', '$0{,}26$', '$66$', '$0{,}66$', '$60$'],
                  ['$4$', '$20$', '$0{,}20$', '$86$', '$0{,}86$', '$34$'],
                  ['$5$', '$7$', '$0{,}07$', '$93$', '$0{,}93$', '$14$'],
                  ['$6$', '$7$', '$0{,}07$', '$100$', '$1{,}00$', '$7$'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q4',
              type: 'mcq',
              prompt: 'D’après le tableau ci-dessus (arrivées de clients en 10 min), que vaut $F(3{,}7)$ et quelle est la proportion d’intervalles vérifiant $2 < X \\le 5$ ?',
              options: [
                '$F(3{,}7) = 0{,}86$ et $P(2 < X \\le 5) = 0{,}78$.',
                '$F(3{,}7) = 0{,}66$ et $P(2 < X \\le 5) = F(5) - F(2) = 0{,}93 - 0{,}40 = 0{,}53$.',
                '$F(3{,}7) = 0{,}79$ et $P(2 < X \\le 5) = 0{,}46$.',
                '$F(3{,}7)$ n’existe pas car $3{,}7$ n’est pas un entier.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Entre $3$ et $4$, $F(x)$ reste constante égale à $F(3) = 0{,}66$ (car aucune observation ne se trouve entre $3$ et $4$). Ensuite $P(2 < X \\le 5) = F(5) - F(2) = 0{,}93 - 0{,}40 = 0{,}53$ (soit $f_3 + f_4 + f_5 = 0{,}26 + 0{,}20 + 0{,}07$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Bornes strictes',
            stepTheme: 'orange',
            stepTitle: 'Piège discret : « au moins 3 » ($X \\ge 3$) versus « plus de 3 » ($X > 3$)',
            paragraphText:
              'Dans le cas discret, confondre inégalité large ($\\ge$) et inégalité stricte ($>$) fait perdre une modalité entière !\n' +
              '• **« Strictement plus de $3$ » ($X > 3$)** : c’est le complémentaire exact de $X \\le 3$, donc $P(X > 3) = 1 - F(3)$.\n' +
              '• **« Au moins $3$ » ($X \\ge 3$)** : la valeur $3$ est **incluse** ! Son complémentaire est $X < 3$, qui pour une variable entière équivaut à $X \\le 2$. Donc $P(X \\ge 3) = 1 - F(2)$ !\n' +
              '• **« Entre $2$ et $4$ inclus » ($2 \\le X \\le 4$)** : vaut $F(4) - F(1)$ (et NON $F(4) - F(2)$, qui exclurait $2$ !).\n' +
              'Dans le cas continu, un point isolé a une probabilité nulle, mais dans le cas discret chaque saut $f_j$ compte pleinement !',
            keyRule:
              'Pour une variable entière discrète : $P(X > k) = 1 - F(k)$, mais **$P(X \\ge k) = 1 - F(k - 1)$** et **$P(a \\le X \\le b) = F(b) - F(a - 1)$**.',
            konanTip:
              'En cas de doute sur un QCM discret, liste mentalement les entiers concernés (ex. « au moins 3 » = `{3, 4, 5, …}`, donc on enlève `{0, 1, 2}` = $F(2)$) : impossible de se tromper !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Sur une série entière à valeurs dans $\\{0, 1, 2, 3, 4, 5\\}$, on donne $F(1) = 0{,}20$, $F(2) = 0{,}50$, $F(3) = 0{,}75$, $F(4) = 0{,}90$. Quelle est la proportion exacte vérifiant $2 \\le X \\le 4$ ?',
              options: [
                '$F(4) - F(2) = 0{,}40$',
                '$F(4) - F(1) = 0{,}70$',
                '$F(3) - F(2) = 0{,}25$',
                '$1 - F(2) = 0{,}50$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’événement $2 \\le X \\le 4$ regroupe les entiers $\\{2, 3, 4\\}$. On retire de $F(4)$ (qui couvre $\\{0, 1, 2, 3, 4\\}$) uniquement $\\{0, 1\\}$, soit $F(1)$ : $P(2 \\le X \\le 4) = F(4) - F(1) = 0{,}90 - 0{,}20 = 0{,}70$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Table de survie',
            stepTheme: 'green',
            stepTitle: 'Reconstituer les effectifs d’une distribution à partir de cumuls décroissants',
            paragraphText:
              'En démographie, en actuariat (assurance-vie) ou en analyse de rétention client (churn SaaS), les données arrivent souvent sous forme de **courbe de survie** : nombre $S_k$ d’individus encore actifs à l’instant exact $k$.\n' +
              '• **Lien mathématique** : $S_k$ n’est rien d’autre que l’**effectif cumulé décroissant** $N_k^*$ ! Par exemple, dans une table de mortalité historique : $S_0 = 100\\,000$ survivants à la naissance, $S_1 = 84\\,883$ à 1 an, $S_2 = 82\\,247$ à 2 ans.\n' +
              '• **Retrouver les effectifs par classe** : le nombre de sorties (décès ou désabonnements) survenant dans la classe $[k, k + 1[$ vaut exactement la différence :\n' +
              '  $$n_k = S_k - S_{k+1}$$\n' +
              '  Ici, entre $0$ et $1$ an : $n_0 = 100\\,000 - 84\\,883 = 15\\,117$ décès ; entre $1$ et $2$ ans : $n_1 = 84\\,883 - 82\\,247 = 2\\,636$ décès.',
            formula: {
              name: 'Passage des survivants aux effectifs par tranche',
              formula: 'n_{[k, k+1[} = S_k - S_{k+1}, \\qquad f_{[k, k+1[} = \\frac{S_k - S_{k+1}}{S_0}',
              note: 'Identique en économie numérique pour calculer le churn mensuel à partir de la cohorte d’abonnés restants !',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Une cohorte de $1\\,000$ abonnés SaaS compte $820$ abonnés encore actifs au bout de 1 mois, puis $710$ au bout de 2 mois. Combien d’abonnés ont résilié durant le deuxième mois (intervalle $[1, 2[$) ?',
              options: [
                '$180$',
                '$110$',
                '$290$',
                '$710$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’effectif des sorties entre le mois $1$ et le mois $2$ vaut $S_1 - S_2 = 820 - 710 = 110$ résiliations (soit $11\\%$ de la cohorte initiale).',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Bilan discret',
            stepTheme: 'slate',
            stepTitle: 'Synthèse chiffrée : audit d’un tableau d’effectifs incomplet',
            paragraphText:
              'Savoir reconstituer un tableau statistique lacunaire est un exercice classique de vérification de maîtrise.\n' +
              '• **Situation** : sur un échantillon de $n = 200$ commandes, le nombre de jours de retard $X \\in \\{0, 1, 2, 3\\}$ vérifie : $f_0 = 0{,}55$, $N_1 = 150$, $N_3^* = 18$.\n' +
              '• **Résolution étape par étape** :\n' +
              '  1. $n_0 = 200 \\times 0{,}55 = 110$ commandes à l’heure.\n' +
              '  2. $n_1 = N_1 - n_0 = 150 - 110 = 40$ commandes ($f_1 = 0{,}20$).\n' +
              '  3. $N_3^*$ étant la dernière valeur, $n_3 = N_3^* = 18$ commandes ($f_3 = 0{,}09$).\n' +
              '  4. Par somme totale : $n_2 = 200 - (110 + 40 + 18) = 32$ commandes ($f_2 = 0{,}16$, $N_2 = 182$, $F_2 = 0{,}91$).',
            konanTip:
              'Pour compléter un tableau à trous, traduis immédiatement chaque fréquence en effectif ($n_j = n \\cdot f_j$) et exploite $n_j = N_j - N_{j-1}$ ainsi que la somme finale égale à $n$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q7',
              type: 'mcq',
              prompt: 'Dans l’audit précédent ($n = 200$, $n_0 = 110$, $n_1 = 40$, $n_2 = 32$, $n_3 = 18$), quelle est la proportion exacte de commandes ayant subi **au moins $2$ jours** de retard ($X \\ge 2$) ?',
              options: [
                '$16\\%$',
                '$25\\%$',
                '$91\\%$',
                '$9\\%$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$X \\ge 2$ regroupe $X = 2$ et $X = 3$, soit $n_2 + n_3 = 32 + 18 = 50$ commandes sur $200$, d’où $F_2^* = \\frac{50}{200} = 0{,}25 = 25\\%$ (ou $1 - F_1 = 1 - 0{,}75 = 0{,}25$).',
            },
          },
        ],
      }),

      // POINT 1.3
      makePoint({
        id: 'lmd_entd_l1_stat_ch1_p3',
        order: 3,
        title: 'Variables continues : regroupement en classes (Sturges), amplitudes et densités',
        summary:
          'Découper une série continue en classes par la règle de Sturges, calculer centres, amplitudes et densités de fréquence, et écrire F(x) par interpolation linéaire.',
        conceptExplanation:
          'Une variable **quantitative continue** (taille, poids, loyer) prend potentiellement autant de valeurs distinctes qu’il y a d’individus. Pour résumer l’information, on procède à un **regroupement en $k$ classes** contiguës $[b_0, b_1[,\\ [b_1, b_2[,\\ \\dots,\\ [b_{k-1}, b_k]$.\n\n' +
          'Les éléments fondamentaux de chaque classe $j = [b_{j-1}, b_j[$ sont :\n' +
          '• **Amplitude** : $a_j = b_j - b_{j-1}$ (largeur de la classe).\n' +
          '• **Centre de classe** : $c_j = \\frac{b_{j-1} + b_j}{2}$ (valeur représentative utilisée pour la moyenne et la variance).\n' +
          '• **Densité de fréquence** : $d_j = \\frac{f_j}{a_j}$ (ou densité d’effectif $h_j = \\frac{n_j}{a_j}$), qui ramène la concentration par unité de largeur.\n\n' +
          'Pour choisir un nombre raisonnable de classes $k$ à partir de $n$ données brutes (ni trop peu = perte de détail, ni trop = classes vides), on applique la **règle de Sturges** : $k \\approx 1 + 3{,}322 \\log_{10}(n) = 1 + \\log_2(n)$.',
        formulas: [
          {
            name: 'Règle de Sturges et règle de Yule',
            formula: 'k_{\\text{Sturges}} \\approx 1 + 3{,}322 \\log_{10}(n) = 1 + \\log_2(n) \\qquad ; \\qquad k_{\\text{Yule}} \\approx 2{,}5 \\sqrt[4]{n}',
            note: 'On arrondit k à l’entier le plus proche, puis l’amplitude théorique vaut a = (x_max − x_min) / k (arrondie à une valeur « ronde »).',
          },
          {
            name: 'Amplitude, centre, densité et F(x) continu',
            formula: 'a_j = b_j - b_{j-1}, \\quad c_j = \\frac{b_{j-1} + b_j}{2}, \\quad d_j = \\frac{f_j}{a_j}, \\quad F(x) = F_{j-1} + (x - b_{j-1}) d_j \\; (x \\in [b_{j-1}, b_j[)',
            note: 'Cette formule affine de F(x) repose sur l’hypothèse d’équirépartition uniforme des individus à l’intérieur de chaque classe.',
          },
        ],
        keyRule:
          'Dès que les classes ont des **amplitudes inégales**, seule la **densité** $d_j = f_j / a_j$ (ou $h_j = n_j / a_j$) mesure fidèlement la concentration des observations — JAMAIS l’effectif brut $n_j$ !',
        workedExample: {
          title: 'Découpage en classes par Sturges de la taille de 40 étudiants',
          statement:
            'On mesure la taille (en cm) de $n = 40$ étudiants : la plus petite vaut $x_{\\min} = 152\\text{ cm}$ et la plus grande $x_{\\max} = 180\\text{ cm}$. Déterminer le nombre de classes $k$ par la règle de Sturges et l’amplitude $a$ de chaque classe.',
          methodSteps: [
            'On calcule $k = 1 + 3{,}322 \\log_{10}(40)$. Or $\\log_{10}(40) \\approx 1{,}602$, donc $k \\approx 1 + 3{,}322 \\times 1{,}602 \\approx 6{,}32$.',
            'On arrondit à $k = 6$ classes.',
            'L’étendue vaut $E = x_{\\max} - x_{\\min} = 180 - 152 = 28\\text{ cm}$.',
            'L’amplitude théorique vaut $a = \\frac{28}{6} \\approx 4{,}67\\text{ cm}$, qu’on arrondit proprement à $a = 5\\text{ cm}$ (en démarrant par exemple à $152$ ou $150\\text{ cm}$ pour couvrir $[152, 180]$ : $[150, 155[, [155, 160[, \\dots, [175, 180]$).',
          ],
          conclusion:
            'La règle de Sturges conduit à $6$ classes d’amplitude $5\\text{ cm}$, offrant un équilibre optimal entre lisibilité et précision.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Classes & Centres',
            stepTheme: 'blue',
            stepTitle: 'Convention d’écriture des classes $[b_{j-1}, b_j[$ et centre de classe $c_j$',
            paragraphText:
              'Pour regrouper une variable continue sans ambiguïté aux frontières, les classes sont systématiquement fermées à gauche et ouvertes à droite (sauf la dernière qui est fermée des deux côtés pour inclure $x_{\\max}$).\n' +
              '• **Notation** : $[b_0, b_1[,\\ [b_1, b_2[,\\ \\dots,\\ [b_{k-1}, b_k]$. Ainsi, une observation égale exactement à la borne $b_1$ (ex. loyer $= 100\\,000$ F CFA) est rangée sans hésitation dans la classe $[100\\,000 ; 150\\,000[$ et non dans $[60\\,000 ; 100\\,000[$.\n' +
              '• **Amplitude** : $a_j = b_j - b_{j-1}$ (ex. pour $[60\\,000 ; 100\\,000[$, $a_1 = 40\\,000$).\n' +
              '• **Centre de classe** : $c_j = \\frac{b_{j-1} + b_j}{2}$ (ex. pour $[60\\,000 ; 100\\,000[$, $c_1 = 80\\,000$). Dans les calculs ultérieurs (moyenne, variance), on assimile les $n_j$ individus de la classe à son centre $c_j$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p3_q1',
              type: 'mcq',
              prompt: 'Soit la classe de loyers mensuels $[200\\,000 ; 300\\,000[$ (en F CFA). Que valent respectivement son **amplitude** $a_j$ et son **centre** $c_j$ ?',
              options: [
                '$a_j = 250\\,000$ et $c_j = 100\\,000$.',
                '$a_j = 100\\,000$ et $c_j = 250\\,000$.',
                '$a_j = 500\\,000$ et $c_j = 250\\,000$.',
                '$a_j = 100\\,000$ et $c_j = 200\\,000$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’amplitude est la différence des bornes : $a_j = 300\\,000 - 200\\,000 = 100\\,000$. Le centre est leur demi-somme : $c_j = \\frac{200\\,000 + 300\\,000}{2} = 250\\,000$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Règle de Sturges',
            stepTheme: 'green',
            stepTitle: 'Choisir le nombre optimal de classes $k$ par la règle de Sturges',
            paragraphText:
              'Un mauvais choix de nombre de classes détruit l’information : avec $2$ classes, on écrase toute la structure ; avec $50$ classes pour $40$ individus, presque toutes les classes sont vides !\n' +
              '• **Formule de Sturges (1926)** : $k \\approx 1 + 3{,}322 \\log_{10}(n) = 1 + \\log_2(n)$.\n' +
              '• **Repères rapides à connaître** :\n' +
              '  – $n = 32 \\implies k = 1 + 5 = 6$ classes ;\n' +
              '  – $n = 64 \\implies k = 1 + 6 = 7$ classes ;\n' +
              '  – $n = 100 \\implies k \\approx 1 + 3{,}322 \\times 2 = 7{,}64 \\approx 8$ classes ;\n' +
              '  – $n = 1\\,000 \\implies k \\approx 1 + 3{,}322 \\times 3 \\approx 11$ classes.\n' +
              '• **Amplitude** : on calcule $a = \\frac{x_{\\max} - x_{\\min}}{k}$ et on arrondit légèrement au-dessus vers une valeur pratique pour que les classes recouvrent intégralement $[x_{\\min}, x_{\\max}]$.',
            formula: {
              name: 'Règle de Sturges',
              formula: 'k = \\text{arrondi}\\big(1 + 3{,}322 \\log_{10}(n)\\big), \\qquad a \\ge \\frac{x_{\\max} - x_{\\min}}{k}',
              note: 'Astuce mentale sans calculatrice : cherche la puissance de 2 la plus proche de n (2ᵐ ≈ n), alors k ≈ m + 1 !',
            },
            konanTip:
              'Sans calculatrice, utilise $k \\approx 1 + \\log_2(n)$ : pour $n = 60 \\approx 2^6 = 64$, tu trouves immédiatement $k \\approx 1 + 6 = 7$ classes !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p3_q2',
              type: 'mcq',
              prompt: 'Selon la règle de Sturges ($k \\approx 1 + 3{,}322 \\log_{10}(n)$), combien de classes recommande-t-on pour un échantillon de $n = 100$ observations (sachant $\\log_{10}(100) = 2$) ?',
              options: [
                '$4$ classes.',
                '$8$ classes (car $1 + 3{,}322 \\times 2 = 7{,}644 \\approx 8$).',
                '$15$ classes.',
                '$20$ classes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$1 + 3{,}322 \\times \\log_{10}(100) = 1 + 3{,}322 \\times 2 = 7{,}644$, que l’on arrondit à $8$ classes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Densité',
            stepTheme: 'blue',
            stepTitle: 'Densité de fréquence $d_j = f_j / a_j$ et densité d’effectif $h_j = n_j / a_j$',
            paragraphText:
              'En économie (salaires, loyers, tailles d’entreprises), les distributions s’étirent vers les grandes valeurs : on utilise presque toujours des **classes d’amplitudes inégales** (étroites là où il y a beaucoup d’individus, larges dans les queues).\n' +
              '• **Densité de fréquence** : $d_j = \\frac{f_j}{a_j}$. Elle représente la fréquence moyenne par unité de largeur de la variable. Sa propriété clé est que l’aire du rectangle $a_j \\times d_j$ vaut exactement $f_j$, donc la somme des aires vaut $\\sum a_j d_j = \\sum f_j = 1$ !\n' +
              '• **Densité d’effectif** : $h_j = \\frac{n_j}{a_j}$ (effectif moyen par unité d’amplitude).\n' +
              '• **Exemple** : sur la masse des œufs, la classe $[48, 53[$ ($a = 5$, $n = 74$) a une densité $h = 74/5 = 14{,}8$ œufs/g, bien plus concentrée que $[63, 73[$ ($a = 10$, $n = 62$) dont la densité n’est que $6{,}2$ œufs/g !',
            formula: {
              name: 'Densité de fréquence et conservation de l’aire',
              formula: 'd_j = \\frac{f_j}{a_j} \\iff f_j = a_j \\cdot d_j, \\qquad \\sum_{j=1}^{k} a_j d_j = 1',
              note: 'On peut aussi calculer un effectif corrigé nⱼ′ = nⱼ × (a₀ / aⱼ) rapporté à une amplitude de référence a₀.',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p3_q3',
              type: 'mcq',
              prompt: 'Une classe $[10, 15[$ compte $30$ individus, et la classe voisine $[15, 25[$ compte $40$ individus. Laquelle des deux classes a la plus forte **densité d’effectif** ?',
              options: [
                '$[15, 25[$, car $40 > 30$.',
                '$[10, 15[$, car sa densité vaut $30/5 = 6$ contre $40/10 = 4$ pour $[15, 25[$.',
                'Elles ont exactement la même densité.',
                'On ne peut pas comparer deux classes d’amplitudes différentes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $[10, 15[$, $a_1 = 5$ donc $h_1 = 30 / 5 = 6$ individus par unité. Pour $[15, 25[$, $a_2 = 10$ donc $h_2 = 40 / 10 = 4$ individus par unité : $[10, 15[$ est $1{,}5$ fois plus dense !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'F(x) continu',
            stepTheme: 'violet',
            stepTitle: 'Fonction de répartition empirique $F(x)$ par interpolation linéaire dans le cas continu',
            paragraphText:
              'Dans le cas d’une série continue regroupée en classes, on ne connaît plus les valeurs individuelles exactes à l’intérieur d’une classe $[b_{j-1}, b_j[$. On fait donc l’**hypothèse d’équirépartition** (répartition uniforme dans la classe).\n' +
              '• **Valeurs aux bornes** : $F(b_0) = 0$, $F(b_1) = F_1$, …, $F(b_j) = F_j$, …, $F(b_k) = 1$.\n' +
              '• **Interpolation linéaire** : pour tout $x \\in [b_{j-1}, b_j[$, $F(x)$ croît linéairement de $F_{j-1}$ à $F_j$ avec une pente égale à la densité $d_j = f_j / a_j$ :\n' +
              '  $$F(x) = F_{j-1} + (x - b_{j-1}) \\cdot \\frac{f_j}{a_j}$$\n' +
              '• **Exemple** : si $F(60) = 0{,}20$ et $F(70) = 0{,}60$ (donc $f = 0{,}40$ sur $a = 10$, $d = 0{,}04$), alors pour $x = 65$ : $F(65) = 0{,}20 + (65 - 60) \\times 0{,}04 = 0{,}40$.',
            keyRule:
              'La pente de la fonction de répartition continue $F(x)$ sur la classe $[b_{j-1}, b_j[$ est exactement la **densité de fréquence** $d_j = f_j / a_j$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p3_q4',
              type: 'mcq',
              prompt: 'Pour une série continue, on connaît $F(100) = 0{,}25$ et $F(150) = 0{,}65$. Par interpolation linéaire, quelle proportion d’individus ont une valeur inférieure ou égale à $120$ ?',
              options: [
                '$0{,}35$',
                '$0{,}41$',
                '$0{,}45$',
                '$0{,}50$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur $[100, 150[$, $a = 50$ et $f = 0{,}65 - 0{,}25 = 0{,}40$, donc $d = 0{,}40 / 50 = 0{,}008$. Ainsi $F(120) = 0{,}25 + (120 - 100) \\times 0{,}008 = 0{,}25 + 0{,}16 = 0{,}41$ ($41\\%$).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Erreur classique',
            stepTheme: 'orange',
            stepTitle: 'Piège fatal : confondre classe d’effectif maximal et classe modale à amplitudes inégales',
            paragraphText:
              'Prenons une distribution réelle de loyers mensuels (en milliers de F CFA) sur $180$ appartements à Abidjan :\n' +
              '• Classe A : $[60 ; 100[$ ($a = 40$, $n = 30$) $\\longrightarrow h_A = 30 / 40 = 0{,}75$ appart./millier.\n' +
              '• Classe B : $[100 ; 150[$ ($a = 50$, $n = 45$) $\\longrightarrow h_B = 45 / 50 = 0{,}90$.\n' +
              '• Classe C : $[150 ; 200[$ ($a = 50$, $n = 50$) $\\longrightarrow h_C = 50 / 50 = 1{,}00$.\n' +
              '• Imagine maintenant que l’on fusionne deux classes larges $[200 ; 500[$ ($a = 300$, $n = 60$) : son effectif $60$ dépasse $50$, MAIS sa densité n’est que $60 / 300 = 0{,}20$ (5 fois moins dense que C) !\n' +
              'Conclure qu’une classe large est la « classe modale » simplement parce qu’elle ratisse un grand intervalle est une erreur gravissime !',
            keyRule:
              'À amplitudes inégales, la **classe modale** est TOUJOURS la classe de **densité maximale** ($d_j$ ou $h_j$ max), JAMAIS celle d’effectif brut maximal !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p3_q5',
              type: 'mcq',
              prompt: 'Une distribution comporte trois classes : $[0, 10[$ ($n = 25$), $[10, 20[$ ($n = 35$) et $[20, 60[$ ($n = 60$). Quelle est la **classe modale** ?',
              options: [
                '$[20, 60[$, car $60$ est le plus grand effectif.',
                '$[10, 20[$, car sa densité vaut $35/10 = 3{,}5$ contre $2{,}5$ pour $[0, 10[$ et $1{,}5$ pour $[20, 60[$.',
                '$[0, 10[$, car c’est la première classe.',
                'Aucune classe modale n’existe quand les amplitudes sont inégales.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On compare les densités $h_j = n_j / a_j$ : $25/10 = 2{,}5$ ; $35/10 = 3{,}5$ ; $60/40 = 1{,}5$. Le maximum de densité ($3{,}5$) est atteint sur $[10, 20[$, qui est donc la vraie classe modale.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Calcul continu',
            stepTheme: 'slate',
            stepTitle: 'Calculer une proportion sur un intervalle chevauchant deux classes',
            paragraphText:
              'Un analyste immobilier veut connaître la part d’appartements dont le loyer est compris entre $125\\,000$ et $250\\,000$ F CFA à partir du tableau suivant ($n = 180$) :\n' +
              '• $[60 ; 100[$ : $n_1 = 30$ ($N_1 = 30$) ;\n' +
              '• $[100 ; 150[$ : $n_2 = 45$ ($N_2 = 75$) ;\n' +
              '• $[150 ; 200[$ : $n_3 = 50$ ($N_3 = 125$) ;\n' +
              '• $[200 ; 300[$ : $n_4 = 30$ ($N_4 = 155$).\n' +
              '• **Méthode par équirépartition** :\n' +
              '  – Dans $[100 ; 150[$, $[125 ; 150[$ représente la moitié ($25/50$) de la classe : $0{,}5 \\times 45 = 22{,}5$ logements.\n' +
              '  – Toute la classe $[150 ; 200[$ est incluse : $50$ logements.\n' +
              '  – Dans $[200 ; 300[$, $[200 ; 250[$ représente la moitié ($50/100$) de la classe : $0{,}5 \\times 30 = 15$ logements.\n' +
              '• **Total** : $22{,}5 + 50 + 15 = 87{,}5$ logements sur $180$, soit $48{,}6\\%$ !',
            konanTip:
              'Retrouve exactement le même résultat par $F(250) - F(125)$ : $N(250) = 125 + 15 = 140$, $N(125) = 30 + 22{,}5 = 52{,}5$, et $140 - 52{,}5 = 87{,}5$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p3_q6',
              type: 'mcq',
              prompt: 'Avec les données précédentes ($[100 ; 150[$ compte $45$ logements, $[150 ; 200[$ en compte $50$), combien de logements (sous hypothèse d’équirépartition) ont un loyer compris entre $140\\,000$ et $180\\,000$ F CFA ?',
              options: [
                '$39$ logements ($9$ dans $[140 ; 150[$ et $30$ dans $[150 ; 180[$).',
                '$95$ logements.',
                '$47{,}5$ logements.',
                '$30$ logements.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Dans $[100 ; 150[$ ($a = 50$), la portion $[140 ; 150[$ vaut $10/50 = 1/5$, donc $\\frac{1}{5} \\times 45 = 9$ logements. Dans $[150 ; 200[$ ($a = 50$), $[150 ; 180[$ vaut $30/50 = 3/5$, donc $\\frac{3}{5} \\times 50 = 30$ logements. Total : $9 + 30 = 39$ logements.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Représentations graphiques, histogrammes, ogives et boxplots
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_stat_ch2',
    subjectId: 'lmd_stat_descriptive',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Statistique Descriptive',
    title: 'Chapitre 2 — Représentations graphiques : diagrammes, histogrammes, ogives et boxplots',
    summary:
      'Diagrammes en secteurs et tuyaux d’orgue, diagrammes en bâtons et courbes en escaliers, histogrammes à amplitudes inégales corrigés en densité, ogives cumulatives et boîtes à moustaches de Tukey.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_stat_ch2_p1',
        order: 1,
        title: 'Graphiques des variables qualitatives et quantitatives discrètes',
        summary:
          'Choisir et construire le graphique adapté aux variables qualitatives (tuyaux d’orgue, secteurs) et discrètes (bâtons, polygone, courbe en escaliers).',
        conceptExplanation:
          'Une représentation graphique réussie révèle instantanément la structure d’une distribution. Le choix du graphique n’est jamais esthétique : il est **strictement dicté par le type de la variable**.\n\n' +
          '• **Variables qualitatives** :\n' +
          '  – **Diagramme en tuyaux d’orgue (barres espacées)** : rectangles de largeur constante, séparés par des espaces, dont la hauteur est proportionnelle à $n_j$ ou $f_j$.\n' +
          '  – **Diagramme en secteurs (circulaire / camembert)** : disque découpé en parts d’angle $\\alpha_j = 360^\\circ \\times f_j$ (ou $180^\\circ \\times f_j$ pour un diagramme semi-circulaire).\n' +
          '• **Variables quantitatives discrètes** :\n' +
          '  – **Diagramme différentiel — Diagramme en bâtons** : l’axe des abscisses respecte une **échelle numérique graduée** ; à chaque valeur $v_j$, on élève un segment vertical fin (bâton) de hauteur $n_j$ ou $f_j$. En joignant les sommets, on obtient le polygone statistique.\n' +
          '  – **Diagramme intégral — Courbe en escaliers** : graphe de la fonction de répartition $F(x)$, formé de paliers horizontaux entre $v_j$ et $v_{j+1}$, avec un saut vertical de hauteur $f_j$ à chaque valeur observée $v_j$.',
        formulas: [
          {
            name: 'Angles des diagrammes en secteurs',
            formula: '\\alpha_j^{\\text{circulaire}} = 360^\\circ \\times f_j = 360^\\circ \\times \\frac{n_j}{n}, \\qquad \\alpha_j^{\\text{semi}} = 180^\\circ \\times f_j',
            note: 'Vérification obligatoire : la somme des angles doit valoir exactement 360° (ou 180°).',
          },
        ],
        keyRule:
          'Ne trace JAMAIS des rectangles collés (histogramme) pour une variable qualitative ou discrète : l’accolement des rectangles est strictement réservé aux **classes continues** !',
        workedExample: {
          title: 'Diagramme en secteurs des loisirs d’un groupe de 20 personnes',
          statement:
            'Dans une enquête sur $20$ personnes, les loisirs préférés se répartissent ainsi : Cinéma ($7$), Théâtre ($5$), Lecture ($4$), Sport ($4$). Calculer les fréquences relatives et les angles du diagramme circulaire ($360^\\circ$) et semi-circulaire ($180^\\circ$).',
          methodSteps: [
            'Cinéma : $f_C = 7/20 = 0{,}35 = 35\\%$ $\\implies \\alpha_C = 360^\\circ \\times 0{,}35 = 126^\\circ$ (semi : $63^\\circ$).',
            'Théâtre : $f_T = 5/20 = 0{,}25 = 25\\%$ $\\implies \\alpha_T = 360^\\circ \\times 0{,}25 = 90^\\circ$ (semi : $45^\\circ$).',
            'Lecture : $f_L = 4/20 = 0{,}20 = 20\\%$ $\\implies \\alpha_L = 360^\\circ \\times 0{,}20 = 72^\\circ$ (semi : $36^\\circ$).',
            'Sport : $f_S = 4/20 = 0{,}20 = 20\\%$ $\\implies \\alpha_S = 360^\\circ \\times 0{,}20 = 72^\\circ$ (semi : $36^\\circ$).',
          ],
          conclusion:
            'Vérification : $126^\\circ + 90^\\circ + 72^\\circ + 72^\\circ = 360^\\circ$ (et $63^\\circ + 45^\\circ + 36^\\circ + 36^\\circ = 180^\\circ$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Qualitatif',
            stepTheme: 'blue',
            stepTitle: 'Diagramme en tuyaux d’orgue et diagramme en secteurs (circulaire / semi-circulaire)',
            paragraphText:
              'Pour représenter une variable qualitative (opérateur télécom, mode de transport, mention), deux graphiques font référence.\n' +
              '• **Diagramme en tuyaux d’orgue (barres espacées)** : on place les modalités en abscisse (ordre libre si nominale, ordre naturel obligatoire si ordinale) et on trace des rectangles **espacés de même largeur** dont la hauteur vaut $n_j$ ou $f_j$.\n' +
              '• **Diagramme en secteurs** : chaque modalité occupe un secteur angulaire proportionnel à sa fréquence ($360^\\circ \\cdot f_j$ ou $180^\\circ \\cdot f_j$). Très efficace pour visualiser la répartition en parts d’un total (parts de marché, budgets), mais déconseillé au-delà de $6$ ou $7$ modalités.\n' +
              '• **Règle de présentation** : tout graphique professionnel doit porter un titre explicite, le nom des axes, les unités et la légende.',
            konanTip:
              'Pour une variable qualitative ordinale, on peut aussi tracer le diagramme en tuyaux d’orgue des fréquences cumulées $F_j$ ; pour une variable nominale, c’est interdit !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q1',
              type: 'mcq',
              prompt: 'Dans un diagramme en tuyaux d’orgue représentant une variable qualitative, quelle règle géométrique doit impérativement être respectée ?',
              options: [
                'Les rectangles doivent être accolés sans aucun espace entre eux.',
                'Les rectangles doivent avoir la même largeur et être séparés par des espaces égaux, seule leur hauteur reflétant $n_j$ ou $f_j$.',
                'La largeur des rectangles doit être proportionnelle à l’effectif.',
                'On doit obligatoirement tracer une courbe cumulée croissante par-dessus.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour éviter toute confusion avec un histogramme continu, les barres d’un diagramme en tuyaux d’orgue ont toutes la même largeur arbitraire et sont nettement espacées.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Secteurs',
            stepTheme: 'green',
            stepTitle: 'Calculer rapidement les angles d’un diagramme circulaire ou semi-circulaire',
            paragraphText:
              'La conversion entre fréquence relative $f_j$ (ou pourcentage $p_j$) et angle en degrés repose sur une règle de trois élémentaire.\n' +
              '• **Diagramme circulaire ($360^\\circ$)** : $100\\% \\leftrightarrow 360^\\circ$, donc **$1\\% \\leftrightarrow 3{,}6^\\circ$** ! Ainsi $\\alpha_j = 3{,}6 \\times p_j = 360 \\times \\frac{n_j}{n}$.\n' +
              '• **Diagramme semi-circulaire ($180^\\circ$)** : $100\\% \\leftrightarrow 180^\\circ$, donc **$1\\% \\leftrightarrow 1{,}8^\\circ$** ! Ainsi $\\alpha_j = 1{,}8 \\times p_j = 180 \\times \\frac{n_j}{n}$.\n' +
              '• **Exemple** : sur $250$ entreprises interrogées, $75$ utilisent un ERP cloud, soit $f = 75/250 = 30\\%$. L’angle vaut $3{,}6 \\times 30 = 108^\\circ$ sur un cercle complet, ou $54^\\circ$ sur un demi-cercle.',
            formula: {
              name: 'Conversion pourcentage → angle en degrés',
              formula: '\\alpha_{\\text{cercle}} = 3{,}6^\\circ \\times p_j(\\%), \\qquad \\alpha_{\\text{demi-cercle}} = 1{,}8^\\circ \\times p_j(\\%)',
              note: 'Repères mentaux utiles : 25 % = 90°, 50 % = 180°, 10 % = 36°, 5 % = 18°.',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q2',
              type: 'mcq',
              prompt: 'Sur $400$ transactions e-commerce, $140$ ont été réglées par Mobile Money. Quel angle occupe ce secteur sur un **diagramme circulaire** ($360^\\circ$) ?',
              options: [
                '$63^\\circ$',
                '$108^\\circ$',
                '$126^\\circ$',
                '$140^\\circ$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La fréquence relative vaut $f = \\frac{140}{400} = 0{,}35 = 35\\%$. L’angle sur $360^\\circ$ est $360 \\times 0{,}35 = 126^\\circ$ (ou $35 \\times 3{,}6 = 126^\\circ$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Bâtons',
            stepTheme: 'blue',
            stepTitle: 'Diagramme différentiel discret : diagramme en bâtons et polygone statistique',
            paragraphText:
              'Pour une variable quantitative discrète ($v_1 < v_2 < \\dots < v_k$), les valeurs ont une vraie position sur la droite numérique : on ne peut plus les espacer arbitrairement !\n' +
              '• **Diagramme en bâtons** : on gradue l’axe des abscisses à l’échelle réelle ; à chaque valeur observée $v_j$, on élève un trait vertical fin (épaisseur nulle) de hauteur $n_j$ ou $f_j$.\n' +
              '• **Pourquoi des bâtons fins et non des rectangles larges ?** Parce qu’aucune observation n’existe entre deux entiers consécutifs (ex. il n’y a pas $2{,}4$ enfants ou $1{,}7$ pêches abîmées) : la masse est concentrée sur les points isolés $v_j$.\n' +
              '• **Polygone statistique** : ligne brisée joignant les sommets des bâtons, utile pour superposer visuellement deux séries discrètes sur un même repère.',
            keyRule:
              'Qualitatif = barres espacées d’ordre libre (tuyaux d’orgue) ; Quantitatif discret = **bâtons fins** placés exactement sur une **abscisse numérique graduée** !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q3',
              type: 'mcq',
              prompt: 'Pourquoi représente-t-on une variable quantitative discrète par un **diagramme en bâtons** (segments fins) plutôt que par un histogramme (rectangles accolés) ?',
              options: [
                'Parce que les bâtons sont plus rapides à dessiner.',
                'Parce que la variable ne prend que des valeurs numériques isolées et aucune valeur intermédiaire entre $v_j$ et $v_{j+1}$.',
                'Parce que les effectifs sont toujours égaux.',
                'Parce que l’axe des abscisses n’est pas gradué.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Un rectangle accolé suggère une densité répartie sur tout un intervalle continu. Un bâton fin en $v_j$ traduit fidèlement le fait que la masse statistique est concentrée sur des valeurs ponctuelles isolées.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Escaliers',
            stepTheme: 'blue',
            stepTitle: 'Diagramme intégral discret : la courbe en escaliers de $F(x)$',
            paragraphText:
              'Pour visualiser les fréquences cumulées croissantes $F(x) = P(X \\le x)$ d’une variable discrète, on trace son **diagramme intégral** : une **courbe en escaliers**.\n' +
              '• **Forme exacte** : la courbe vaut $0$ pour $x < v_1$, monte brusquement d’un saut vertical de hauteur $f_1$ en $x = v_1$, reste parfaitement horizontale (palier à hauteur $F_1$) sur $[v_1, v_2[$, saute de $f_2$ en $x = v_2$, et ainsi de suite jusqu’à atteindre le palier final $y = 1$ pour $x \\ge v_k$.\n' +
              '• **Lecture directe** : la hauteur de chaque « marche » verticale en $v_j$ est égale à la fréquence $f_j$, et l’ordonnée du palier qui suit $v_j$ vaut $F_j$.\n' +
              '• **Lecture des quartiles** : en traçant la droite horizontale $y = 0{,}5$ (médiane), $y = 0{,}25$ ($Q_1$) ou $y = 0{,}75$ ($Q_3$), l’abscisse où elle coupe un saut vertical donne immédiatement le quantile !',
            konanTip:
              'N’unis JAMAIS les points $(v_j, F_j)$ par des segments obliques pour une variable discrète : les segments obliques (ogive) sont réservés au cas continu !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Sur la courbe en escaliers de la fonction de répartition $F(x)$ d’une variable discrète, que mesure la hauteur du **saut vertical** observé exactement à l’abscisse $x = v_3$ ?',
              options: [
                'La fréquence cumulée $F_3$.',
                'La fréquence relative $f_3$ de la valeur $v_3$.',
                'La valeur $v_3$ elle-même.',
                'L’effectif total $n$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Juste avant $v_3$, la courbe est au niveau $F_2$ ; en $v_3$, elle passe au niveau $F_3$. La hauteur du saut vertical vaut donc $F_3 - F_2 = f_3$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Biais visuels',
            stepTheme: 'orange',
            stepTitle: 'Déjouer les graphiques trompeurs : troncature d’axe et effets 3D',
            paragraphText:
              'En data storytelling et dans les présentations d’entreprise, certains graphiques distordent volontairement ou involontairement la réalité chiffrée.\n' +
              '• **Troncature de l’axe des ordonnées** : sur un diagramme en barres, faire démarrer l’axe vertical à $90\\%$ au lieu de $0\\%$ fait paraître une barre à $94\\%$ deux fois plus grande qu’une barre à $92\\%$, alors que l’écart réel n’est que de $2$ points !\n' +
              '• **Camemberts en perspective 3D** : l’inclinaison agrandit visuellement les secteurs placés au premier plan et rétrécit ceux de l’arrière-plan, faussant la lecture des proportions.\n' +
              '• **Confusion aire / hauteur** : doubler le côté d’un pictogramme (ex. icône de sac de cacao) multiplie sa surface par **$4$** (et non par $2$), exagérant grossièrement les écarts !',
            keyRule:
              'Sur tout diagramme en barres ou en bâtons, l’axe des ordonnées doit impérativement démarrer à **$0$** afin que les rapports de hauteurs reflètent exactement les rapports numériques !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Un graphique en barres compare deux taux de satisfaction client : $82\\%$ (Service A) et $86\\%$ (Service B), mais l’axe des ordonnées commence à $80\\%$. Quel biais visuel cela crée-t-il ?',
              options: [
                'Aucun biais, la différence visuelle est fidèle à la réalité.',
                'La barre B paraît $3$ fois plus haute que la barre A ($6$ unités vs $2$ unités), alors que le taux réel n’est que légèrement supérieur ($+4$ points).',
                'La barre A paraît plus haute que la barre B.',
                'Le graphique devient un histogramme continu.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À partir de $80\\%$, la barre A mesure $82 - 80 = 2$ unités et la barre B mesure $86 - 80 = 6$ unités : B paraît visuellement $3$ fois plus grande que A alors que $86 / 82 \\approx 1{,}05$ !',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Lecture croisée',
            stepTheme: 'slate',
            stepTitle: 'Lire simultanément bâtons et escaliers sur une série d’arrivées clients',
            paragraphText:
              'Reprenons la série des $100$ intervalles d’arrivées de clients ($1 \\to 0{,}15$, $2 \\to 0{,}25$, $3 \\to 0{,}26$, $4 \\to 0{,}20$, $5 \\to 0{,}07$, $6 \\to 0{,}07$).\n' +
              '• **Sur le diagramme en bâtons** : on repère instantanément le pic maximal en $X = 3$ ($0{,}26$), suivi de très près par $X = 2$ ($0{,}25$), puis une décroissance nette vers $5$ et $6$.\n' +
              '• **Sur la courbe en escaliers de $F(x)$** :\n' +
              '  – La droite $y = 0{,}25$ coupe le saut vertical en $x = 2$ (car $F(1) = 0{,}15 < 0{,}25 \\le 0{,}40 = F(2)$) $\\implies Q_1 = 2$.\n' +
              '  – La droite $y = 0{,}50$ coupe le saut vertical en $x = 3$ (car $F(2) = 0{,}40 < 0{,}50 \\le 0{,}66 = F(3)$) $\\implies Me = 3$.\n' +
              '  – La droite $y = 0{,}75$ coupe le saut vertical en $x = 4$ (car $F(3) = 0{,}66 < 0{,}75 \\le 0{,}86 = F(4)$) $\\implies Q_3 = 4$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Sur la courbe en escaliers d’une variable discrète, la droite horizontale $y = 0{,}50$ coupe le saut vertical situé en $x = 3$ (entre $F(2) = 0{,}40$ et $F(3) = 0{,}66$). Que lit-on directement ?',
              options: [
                'La moyenne arithmétique vaut $3$.',
                'La médiane vaut $Me = 3$.',
                'L’écart-type vaut $0{,}50$.',
                'Le mode vaut $0{,}66$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’abscisse où la fonction de répartition $F(x)$ atteint ou franchit la barre des $50\\%$ ($y = 0{,}50$) donne exactement la médiane $Me$ : ici $Me = 3$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_stat_ch2_p2',
        order: 2,
        title: 'Histogramme à amplitudes inégales, polygone des fréquences et ogive cumulative',
        summary:
          'Construire un histogramme rigoureux en densité lorsque les amplitudes varient, tracer le polygone des fréquences et exploiter la courbe cumulative (ogive) pour lire la médiane.',
        conceptExplanation:
          'Pour une variable **quantitative continue** regroupée en classes $[b_{j-1}, b_j[$, la représentation différentielle est l’**histogramme** (rectangles contigus sans espace), gouverné par une loi géométrique absolue :\n' +
          '• **Principe fondamental de l’histogramme** : c’est l’**AIRE** de chaque rectangle — et non sa hauteur — qui doit être proportionnelle à l’effectif $n_j$ (ou à la fréquence $f_j$) !\n' +
          '• **Conséquence** :\n' +
          '  – Si toutes les classes ont la **même amplitude** $a$, on peut porter directement $n_j$ ou $f_j$ en ordonnée.\n' +
          '  – Si les classes ont des **amplitudes inégales** $a_j$, on DOIT impérativement porter en ordonnée la **densité** $d_j = f_j / a_j$ (ou $h_j = n_j / a_j$, ou l’effectif corrigé $n_j’ = n_j \\cdot a_0 / a_j$). Alors $\\text{Aire}_j = a_j \\times d_j = f_j$ !\n\n' +
          'La représentation intégrale d’une variable continue est l’**ogive** (courbe cumulative), obtenue en reliant par des segments droits les points $(b_0, 0),\\ (b_1, F_1),\\ \\dots,\\ (b_k, 1)$ placés aux **bornes supérieures** des classes.',
        formulas: [
          {
            name: 'Hauteur d’un rectangle d’histogramme (amplitudes inégales)',
            formula: 'd_j = \\frac{f_j}{a_j} \\quad \\text{(aire} = f_j\\text{)} \\qquad \\text{ou} \\qquad n_j’ = n_j \\times \\frac{a_0}{a_j} \\quad \\text{(effectif corrigé pour l’amplitude de référence } a_0\\text{)}',
            note: 'Avec la densité de fréquence dⱼ, l’aire totale sous l’histogramme vaut exactement 1.',
          },
          {
            name: 'Points de tracé de l’ogive croissante',
            formula: '(b_0,\\ 0),\\quad (b_1,\\ F_1),\\quad (b_2,\\ F_2),\\quad \\dots,\\quad (b_k,\\ 1)',
            note: 'Les coordonnées sont TOUJOURS placées aux bornes supérieures bⱼ (jamais aux centres cⱼ) !',
          },
        ],
        keyRule:
          'Dans un histogramme, **Aire = Effectif (ou Fréquence)** ; donc **Hauteur = Effectif / Amplitude** (densité). Dans une ogive croissante, on place toujours $F_j$ à la **borne supérieure** $b_j$ !',
        workedExample: {
          title: 'Correction en densité de l’histogramme des loyers mensuels à Abidjan',
          statement:
            'Sur $180$ appartements à Abidjan, les loyers (en milliers de F CFA) sont : $[60 ; 100[$ ($30$), $[100 ; 150[$ ($45$), $[150 ; 200[$ ($50$), $[200 ; 300[$ ($30$), $[300 ; 500[$ ($15$), $[500 ; 800[$ ($8$), $[800 ; 1500[$ ($2$). Calculer les effectifs corrigés $n_j’$ rapportés à l’amplitude de référence $a_0 = 50$ milliers.',
          methodSteps: [
            '$[60 ; 100[$ ($a_1 = 40$) : $n_1’ = 30 \\times \\frac{50}{40} = 37{,}5$.',
            '$[100 ; 150[$ ($a_2 = 50$) : $n_2’ = 45 \\times \\frac{50}{50} = 45{,}0$.',
            '$[150 ; 200[$ ($a_3 = 50$) : $n_3’ = 50 \\times \\frac{50}{50} = 50{,}0$ (pic modal maximal !).',
            '$[200 ; 300[$ ($a_4 = 100$) : $n_4’ = 30 \\times \\frac{50}{100} = 15{,}0$ ; $[300 ; 500[$ ($a_5 = 200$) : $n_5’ = 15 \\times \\frac{50}{200} = 3{,}75$ ; $[500 ; 800[$ ($a_6 = 300$) : $n_6’ = 1{,}33$ ; $[800 ; 1500[$ ($a_7 = 700$) : $n_7’ = 0{,}14$.',
          ],
          conclusion:
            'Sans correction, $[200 ; 300[$ ($n = 30$) paraîtrait aussi dense que $[60 ; 100[$ ($n = 30$) alors que sa vraie densité est $2{,}5$ fois plus faible ($15{,}0$ contre $37{,}5$) !',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Principe d’aire',
            stepTheme: 'blue',
            stepTitle: 'Pourquoi l’aire (et non la hauteur) porte l’effectif dans un histogramme',
            paragraphText:
              'Un histogramme est la version empirique d’une densité de probabilité continue : chaque classe $[b_{j-1}, b_j[$ est représentée par un rectangle posé sur la base $[b_{j-1}, b_j[$ (largeur $a_j$).\n' +
              '• **Relation géométrique** : $\\text{Aire}_j = \\text{Base} \\times \\text{Hauteur} = a_j \\times h_j$.\n' +
              '• **Exigence de fidélité visuelle** : notre œil juge l’importance d’un rectangle à sa **surface**. Pour que deux classes de même effectif occupent la même surface visuelle, il faut $a_j \\times h_j = n_j$, soit $h_j = n_j / a_j$ (ou $d_j = f_j / a_j$).\n' +
              '• **Cas particulier des amplitudes égales** : si $a_1 = a_2 = \\dots = a_k = a$, diviser toutes les hauteurs par la même constante $a$ ne change pas les proportions relatives — c’est l’unique cas où l’on peut mettre $n_j$ ou $f_j$ directement en ordonnée.',
            keyRule:
              'Règle absolue : dès que deux classes d’un tableau continu n’ont pas la même largeur, tu DOIS diviser chaque effectif (ou fréquence) par l’amplitude $a_j$ avant de tracer l’histogramme !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Dans un histogramme des fréquences correctement construit en densité ($d_j = f_j / a_j$), que vaut la **somme des aires** de tous les rectangles ?',
              options: [
                'Elle vaut l’effectif total $n$.',
                'Elle vaut exactement $1$ (ou $100\\%$).',
                'Elle vaut la somme des amplitudes $b_k - b_0$.',
                'Elle dépend du choix de découpage en classes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’aire du $j$-ème rectangle vaut $a_j \\times d_j = a_j \\times (f_j / a_j) = f_j$. La somme de toutes les aires vaut donc $\\sum_{j=1}^k f_j = 1$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Histogramme corrigé',
            stepTheme: 'green',
            stepTitle: 'Visualiser un histogramme corrigé en densité (cas des loyers à Abidjan)',
            paragraphText:
              'Appliquons la correction en densité aux loyers mensuels des appartements F2/F3 à Abidjan ($n = 180$), rapportés à l’amplitude de référence $a_0 = 50$ milliers de F CFA ($n_j’ = n_j \\cdot 50 / a_j$).\n' +
              '• On voit immédiatement sur le graphique corrigé ci-dessous que le marché se concentre massivement entre $60\\,000$ et $200\\,000$ F CFA, avec un sommet modal net sur $[150 ; 200[$ ($n_3’ = 50$).\n' +
              '• Au-delà de $200\\,000$ F CFA, la densité chute brutalement ($15$, puis $3{,}75$, puis $1{,}33$, puis $0{,}14$), révélant une **forte asymétrie étalée vers la droite** (longue traîne des appartements haut standing) !',
            visualSchema: {
              type: 'bar_chart',
              title: 'Histogramme corrigé en densité : loyers mensuels à Abidjan (a₀ = 50k F CFA)',
              caption: 'Hauteurs corrigées nⱼ′ = nⱼ × (50 / aⱼ) : la concentration réelle culmine sur [150 ; 200[ puis s’effondre vers les hauts loyers.',
              barChart: {
                yLabel: 'Effectif corrigé nⱼ′ (pour a₀ = 50k)',
                unit: '',
                bars: [
                  { label: '[60;100[', value: 37.5, color: 'blue', annotation: 'n=30 (a=40)' },
                  { label: '[100;150[', value: 45, color: 'blue', annotation: 'n=45 (a=50)' },
                  { label: '[150;200[', value: 50, color: 'green', annotation: 'Mode (a=50)' },
                  { label: '[200;300[', value: 15, color: 'violet', annotation: 'n=30 (a=100)' },
                  { label: '[300;500[', value: 3.8, color: 'orange', annotation: 'n=15 (a=200)' },
                  { label: '[500;800[', value: 1.3, color: 'slate', annotation: 'n=8 (a=300)' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Pour une amplitude de référence $a_0 = 5$ g sur la masse des œufs, la classe $[38 ; 48[$ ($a = 10$ g) contient $n = 51$ œufs. Quelle est sa hauteur corrigée $n’$ sur l’histogramme ?',
              options: [
                '$102$',
                '$51$',
                '$25{,}5$',
                '$5{,}1$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'L’effectif corrigé rapporté à $a_0 = 5$ vaut $n’ = n \\times \\frac{a_0}{a} = 51 \\times \\frac{5}{10} = 25{,}5$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Polygone',
            stepTheme: 'blue',
            stepTitle: 'Polygone des fréquences (ou des densités) et conservation de l’aire',
            paragraphText:
              'Le **polygone des fréquences** est une courbe polygonale continue superposée à l’histogramme, particulièrement utile pour comparer deux distributions continues sur un même graphique.\n' +
              '• **Construction** (dans le cas d’amplitudes égales $a$) : on joint par des segments les milieux des côtés supérieurs des rectangles, c’est-à-dire les points $(c_j, f_j)$ (ou $(c_j, d_j)$).\n' +
              '• **Fermeture aux extrémités** : pour que l’aire sous le polygone reste **strictement égale à l’aire de l’histogramme**, on ajoute deux classes fictives d’effectif nul avant la première classe (centre $c_0 = b_0 - a/2$) et après la dernière (centre $c_{k+1} = b_k + a/2$), et l’on ramène la ligne à $y = 0$ en ces deux points !\n' +
              'En effet, chaque triangle « coupé » au sommet d’un rectangle est exactement compensé par un triangle identique ajouté dans le creux voisin.',
            konanTip:
              'Ne confonds pas les abscisses des deux lignes brisées continues : le **polygone des fréquences** passe par les **centres de classe** $c_j$, tandis que l’**ogive cumulative** passe par les **bornes supérieures** $b_j$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Pourquoi ferme-t-on le polygone des fréquences sur l’axe des abscisses aux centres de deux classes fictives d’effectif nul avant $b_0$ et après $b_k$ ?',
              options: [
                'Pour que l’aire totale sous le polygone reste exactement égale à l’aire totale de l’histogramme.',
                'Pour que la moyenne devienne égale à $0$.',
                'Parce que les bornes $b_0$ et $b_k$ sont interdites.',
                'Pour transformer la distribution continue en série discrète.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Grâce à cette fermeture symétrique aux centres $c_0$ et $c_{k+1}$, les triangles perdus et gagnés par rapport aux rectangles se compensent exactement deux à deux : l’aire totale reste égale à $1$ (ou $n \\cdot a$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Ogive F(x)',
            stepTheme: 'green',
            stepTitle: 'Tracer la courbe cumulative (ogive) et lire graphiquement la médiane',
            paragraphText:
              'La **courbe cumulative croissante** (ou **ogive de Galton**) représente la fonction de répartition continue $F(x)$ sur $[b_0, b_k]$.\n' +
              '• **Exemple chiffré (poids de $60$ étudiants)** : $[50, 60[$ ($F_1 = 0{,}117$), $[60, 70[$ ($F_2 = 0{,}533$), $[70, 80[$ ($F_3 = 0{,}883$), $[80, 90[$ ($F_4 = 0{,}917$), $[90, 100]$ ($F_5 = 1{,}000$).\n' +
              '• **Lecture graphique de la médiane** : on part de $y = 0{,}50$ sur l’axe vertical, on rejoint horizontalement l’ogive, puis on redescend verticalement sur l’axe des abscisses : on lit exactement $Me = 69{,}2\\text{ kg}$ !\n' +
              '• **Intersection croissante / décroissante** : si l’on trace aussi l’ogive décroissante $F^*(x) = 1 - F(x)$, les deux courbes se croisent exactement au point d’abscisse $Me$ et d’ordonnée $0{,}50$ !',
            visualSchema: {
              type: 'function_plot',
              title: 'Ogive cumulative F(x) du poids de 60 étudiants et lecture de la médiane',
              caption: 'La droite horizontale y = 0,50 coupe l’ogive sur le segment [60 ; 70] à l’abscisse Me = 69,2 kg.',
              plot: {
                xMin: 48,
                xMax: 102,
                yMin: 0,
                yMax: 1.05,
                xStep: 10,
                yStep: 0.25,
                curves: [
                  {
                    label: 'F(x) cumulée',
                    color: 'blue',
                    pieces: [
                      { expr: '0.01167*(x-50)', from: 50, to: 60 },
                      { expr: '0.1167+0.04167*(x-60)', from: 60, to: 70 },
                      { expr: '0.5333+0.035*(x-70)', from: 70, to: 80 },
                      { expr: '0.8833+0.00333*(x-80)', from: 80, to: 90 },
                      { expr: '0.9167+0.00833*(x-90)', from: 90, to: 100 },
                    ],
                  },
                ],
                points: [
                  { x: 50, y: 0, label: '50', filled: true, color: 'blue' },
                  { x: 60, y: 0.117, filled: true, color: 'blue' },
                  { x: 69.2, y: 0.5, label: 'Me = 69,2', filled: true, color: 'orange' },
                  { x: 70, y: 0.533, filled: true, color: 'blue' },
                  { x: 80, y: 0.883, filled: true, color: 'blue' },
                  { x: 90, y: 0.917, filled: true, color: 'blue' },
                  { x: 100, y: 1, filled: true, color: 'blue' },
                ],
                horizontalLines: [{ y: 0.5, label: 'y = 0,50', color: 'orange' }],
                verticalLines: [{ x: 69.2, label: 'Me', color: 'orange' }],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Sur le même graphique, on trace l’ogive croissante $F(x)$ et l’ogive décroissante $G(x) = 1 - F(x)$ d’une variable continue. Que représentent les coordonnées de leur point d’intersection ?',
              options: [
                '$(Mo,\\ 0{,}5)$',
                '$(\\bar{x},\\ 0{,}5)$',
                '$(Me,\\ 0{,}5)$',
                '$(Q_1,\\ 0{,}25)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'À l’intersection, $F(x) = 1 - F(x) \\iff 2F(x) = 1 \\iff F(x) = 0{,}5$, ce qui définit exactement la médiane $x = Me$ et l’ordonnée $y = 0{,}5$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Erreur d’ogive',
            stepTheme: 'orange',
            stepTitle: 'Piège d’examen : placer $F_j$ au centre $c_j$ au lieu de la borne supérieure $b_j$',
            paragraphText:
              'Une erreur classique lors du tracé manuel d’une ogive cumulative croissante consiste à placer le point $(c_j, F_j)$ au milieu de la classe $[b_{j-1}, b_j[$ !\n' +
              '• **Pourquoi c’est faux** : $F_j$ représente la proportion de tous les individus inférieurs à **$b_j$** (la fin de la classe), pas à $c_j$ ! Par exemple, pour $[50 ; 60[$ avec $F_1 = 0{,}117$, ce n’est qu’en atteignant $x = 60\\text{ kg}$ que l’on a cumulé les $11{,}7\\%$ ; au milieu ($x = 55\\text{ kg}$), on n’en a cumulé que la moitié ($5{,}8\\%$) !\n' +
              '• **Conséquence désastreuse** : décaler les points aux centres décale toute la lecture de la médiane et des quartiles d’une demi-amplitude ($a/2$) !\n' +
              '• **Symétrie pour l’ogive décroissante** : les cumuls décroissants $F_j^* = P(X \\ge b_{j-1})$ se placent, eux, aux **bornes inférieures** $b_{j-1}$ !',
            keyRule:
              'Ogive **croissante** ($F_j$) $\\longrightarrow$ **bornes supérieures** $b_j$ (départ à $(b_0, 0)$). Ogive **décroissante** ($F_j^*$) $\\longrightarrow$ **bornes inférieures** $b_{j-1}$ (arrivée à $(b_k, 0)$).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q5',
              type: 'mcq',
              prompt: 'La première classe d’une distribution continue est $[20, 30[$ avec une fréquence $f_1 = 0{,}20$. Quelles sont les coordonnées exactes des deux premiers points de l’**ogive croissante** ?',
              options: [
                '$(20, 0{,}20)$ et $(30, 0{,}20)$',
                '$(25, 0)$ et $(25, 0{,}20)$',
                '$(20, 0)$ et $(30, 0{,}20)$',
                '$(0, 0)$ et $(25, 0{,}20)$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'À la borne inférieure $b_0 = 20$, la fréquence cumulée vaut $0$ : point $(20, 0)$. À la borne supérieure $b_1 = 30$, elle atteint $F_1 = 0{,}20$ : point $(30, 0{,}20)$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Pente & Densité',
            stepTheme: 'slate',
            stepTitle: 'Lien géométrique entre la pente de l’ogive et la hauteur de l’histogramme',
            paragraphText:
              'L’ogive $F(x)$ et l’histogramme des densités $d(x)$ sont les deux visages d’une même distribution (exactement comme une primitive et sa dérivée en Analyse !).\n' +
              '• Sur chaque classe $[b_{j-1}, b_j[$, la pente du segment de l’ogive vaut $\\frac{F_j - F_{j-1}}{b_j - b_{j-1}} = \\frac{f_j}{a_j} = d_j$ : c’est la hauteur exacte du rectangle de l’histogramme !\n' +
              '• **Lecture visuelle immédiate** :\n' +
              '  – Là où l’ogive est **très raide** (forte pente, comme sur $[60, 70[$), la **densité est maximale** (classe modale !).\n' +
              '  – Là où l’ogive est **presque plate** (pente faible, comme sur $[80, 90[$), la classe est très peu peuplée (faible densité).',
            konanTip:
              'Pour repérer la classe modale d’un seul coup d’œil sur une ogive, cherche simplement le segment le plus **vertical** (pente maximale) !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Sur une ogive cumulative continue $F(x)$, comment reconnaît-on visuellement la **classe modale** de la distribution ?',
              options: [
                'C’est le segment dont l’abscisse est la plus grande.',
                'C’est le segment présentant la **pente la plus forte** (le plus raide), car sa pente est égale à la densité $d_j = f_j / a_j$.',
                'C’est le segment le plus horizontal.',
                'C’est toujours le segment qui coupe $y = 0{,}5$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La pente de l’ogive sur $[b_{j-1}, b_j[$ vaut exactement $\\frac{f_j}{a_j} = d_j$. Le segment le plus raide correspond donc rigoureusement à la classe de densité maximale (la classe modale).',
            },
          },
        ],
      }),

      // POINT 2.3
      makePoint({
        id: 'lmd_entd_l1_stat_ch2_p3',
        order: 3,
        title: 'Boîte à moustaches (diagramme de Tukey) et détection des valeurs aberrantes',
        summary:
          'Construire et lire une boîte à moustaches à partir des 5 nombres clés, détecter les valeurs aberrantes (outliers) par la règle 1,5 × IQR et comparer plusieurs distributions.',
        conceptExplanation:
          'Inventée par le statisticien John Tukey, la **boîte à moustaches** (*boxplot*) condense toute une distribution quantitative en un schéma ultra-lisible basé sur le **résumé en 5 nombres** : $\\big(x_{\\min},\\ Q_1,\\ Me,\\ Q_3,\\ x_{\\max}\\big)$.\n\n' +
          '• **La boîte centrale** s’étend de $Q_1$ (premier quartile, $25\\%$) à $Q_3$ (troisième quartile, $75\\%$) : sa largeur vaut l’**écart interquartile** $IQR = Q_3 - Q_1$ et elle renferme exactement les **$50\\%$ centraux** des observations.\n' +
          '• **Le trait intérieur** marque la **médiane $Me = Q_2$** (sa position décentrée révèle l’asymétrie).\n' +
          '• **Les moustaches et la détection des outliers** : on calcule les **clôtures de Tukey** $B_{\\inf} = Q_1 - 1{,}5 \\times IQR$ et $B_{\\sup} = Q_3 + 1{,}5 \\times IQR$. Les moustaches s’arrêtent aux observations les plus extrêmes situées **à l’intérieur** de $[B_{\\inf}, B_{\\sup}]$ ; toute valeur située au-delà est tracée comme un point isolé : c’est une **valeur aberrante (outlier)**.',
        formulas: [
          {
            name: 'Écart interquartile et clôtures de Tukey (outliers)',
            formula: 'IQR = Q_3 - Q_1, \\qquad B_{\\inf} = Q_1 - 1{,}5 \\times IQR, \\qquad B_{\\sup} = Q_3 + 1{,}5 \\times IQR',
            note: 'Les observations en dehors de [B_inf, B_sup] sont qualifiées de valeurs atypiques / aberrantes (outliers).',
          },
        ],
        keyRule:
          'Les moustaches d’un boxplot de Tukey ne s’étirent PAS jusqu’à $B_{\\inf}$ et $B_{\\sup}$, mais jusqu’aux **vraies observations** les plus extrêmes contenues dans $[B_{\\inf}, B_{\\sup}]$ !',
        workedExample: {
          title: 'Détection d’outlier sur une série d’âges de 20 personnes',
          statement:
            'Les $20$ âges triés d’un panel sont : $12, 14, 25, 25, 25, 26, 28, 30, 30, 30, 35, 35, 40, 40, 45, 50, 50, 50, 55, 75$. Calculer $Q_1, Me, Q_3, IQR$ et déterminer si l’âge $75$ ans est une valeur aberrante au sens de Tukey.',
          methodSteps: [
            'Effectif $n = 20$ : les $10$ plus petites valeurs vont de $12$ à $30$, les $10$ plus grandes de $35$ à $75$.',
            '$Q_1$ (moyenne des 5e et 6e valeurs, ou 5e valeur $= 25$) : $Q_1 = 25{,}5$ (ou $25$). $Me = \\frac{30 + 35}{2} = 32{,}5$. $Q_3$ (entre 15e $= 45$ et 16e $= 50$) : $Q_3 = 47{,}5$ (ou $45$). Prenons $Q_1 = 25$, $Q_3 = 45$ (ou $25{,}5$ et $47{,}5$).',
            'Avec $Q_1 = 25$ et $Q_3 = 45$ : $IQR = 45 - 25 = 20$. Clôture supérieure : $B_{\\sup} = 45 + 1{,}5 \\times 20 = 75$ (avec $Q_1 = 25{,}5, Q_3 = 47{,}5$ : $IQR = 22$, $B_{\\sup} = 47{,}5 + 33 = 80{,}5$).',
            'Comme $75 \\le B_{\\sup}$ dans les deux conventions, $75$ ans n’est pas strictement au-delà de la clôture supérieure (il est à la frontière limite).',
          ],
          conclusion:
            'Si un individu avait $85$ ans ($> B_{\\sup}$), il serait affiché comme point isolé (outlier) et la moustache droite s’arrêterait à $55$ (ou $75$) ans !',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Anatomie',
            stepTheme: 'blue',
            stepTitle: 'Anatomie complète d’une boîte à moustaches (résumé en 5 nombres)',
            paragraphText:
              'La boîte à moustaches découpe visuellement la population en **quatre quarts d’effectifs égaux ($25\\%$ chacun)** : de la moustache gauche à $Q_1$, de $Q_1$ à $Me$, de $Me$ à $Q_3$, et de $Q_3$ à la moustache droite.\n' +
              '• **Largeur de la boîte ($IQR = Q_3 - Q_1$)** : mesure la dispersion robuste du cœur de la population ($50\\%$ centraux).\n' +
              '• **Trait central ($Me$)** : indique la tendance centrale robuste.\n' +
              '• **Moustaches et points isolés** : montrent l’étendue habituelle et isolent les valeurs extrêmes atypiques.\n' +
              'Observe attentivement le schéma annoté ci-dessous qui rassemble tous les repères du boxplot.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Anatomie d’une boîte à moustaches de Tukey avec valeur aberrante (outlier)',
              caption: 'La boîte centrale [Q₁ ; Q₃] regroupe 50 % des individus ; tout point au-delà de Q₃ + 1,5×IQR est isolé comme outlier.',
              svgContent:
                '<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">' +
                '<rect x="8" y="8" width="404" height="184" rx="12" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>' +
                '<line x1="34" y1="154" x2="394" y2="154" stroke="#64748B" stroke-width="1.5"/>' +
                '<line x1="56" y1="88" x2="122" y2="88" stroke="#0284C7" stroke-width="2.5"/>' +
                '<line x1="56" y1="70" x2="56" y2="106" stroke="#0284C7" stroke-width="2.5"/>' +
                '<rect x="122" y="56" width="136" height="64" rx="5" fill="#DBEAFE" stroke="#0284C7" stroke-width="2.5"/>' +
                '<line x1="176" y1="56" x2="176" y2="120" stroke="#7C3AED" stroke-width="3.5"/>' +
                '<line x1="258" y1="88" x2="328" y2="88" stroke="#0284C7" stroke-width="2.5"/>' +
                '<line x1="328" y1="70" x2="328" y2="106" stroke="#0284C7" stroke-width="2.5"/>' +
                '<circle cx="378" cy="88" r="6" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>' +
                '<line x1="122" y1="36" x2="258" y2="36" stroke="#059669" stroke-width="1.8" stroke-dasharray="4 3"/>' +
                '<text x="190" y="30" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">IQR = Q₃ − Q₁ (50 % centraux)</text>' +
                '<text x="56" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Min adj.</text>' +
                '<text x="122" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369A1">Q₁ (25%)</text>' +
                '<text x="182" y="149" text-anchor="middle" font-size="10.5" font-weight="800" fill="#6D28D9">Me (50%)</text>' +
                '<text x="258" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369A1">Q₃ (75%)</text>' +
                '<text x="328" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Max adj.</text>' +
                '<text x="378" y="68" text-anchor="middle" font-size="10" font-weight="700" fill="#B45309">Outlier</text>' +
                '<text x="214" y="176" text-anchor="middle" font-size="10" fill="#475569">Échelle graduée de la variable quantitative X</text>' +
                '</svg>',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p3_q1',
              type: 'mcq',
              prompt: 'Quelle proportion exacte des observations d’une série statistique est toujours comprise à l’intérieur du **rectangle central** $[Q_1 ; Q_3]$ d’une boîte à moustaches ?',
              options: [
                '$25\\%$',
                '$50\\%$',
                '$75\\%$',
                '$95\\%$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$Q_1$ marque la barre des $25\\%$ et $Q_3$ celle des $75\\%$ : entre $Q_1$ et $Q_3$ se situent donc exactement $75\\% - 25\\% = 50\\%$ des observations.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Outliers Tukey',
            stepTheme: 'green',
            stepTitle: 'Détecter objectivement les valeurs aberrantes par la règle $1{,}5 \\times IQR$',
            paragraphText:
              'En analyse de données (fraude bancaire, contrôle qualité, nettoyage de dataset), la règle de Tukey fournit un critère objectif et robuste pour repérer les valeurs atypiques.\n' +
              '• **Étape 1** : calculer l’écart interquartile $IQR = Q_3 - Q_1$.\n' +
              '• **Étape 2** : calculer la clôture inférieure $B_{\\inf} = Q_1 - 1{,}5 \\cdot IQR$ et la clôture supérieure $B_{\\sup} = Q_3 + 1{,}5 \\cdot IQR$.\n' +
              '• **Étape 3** : toute observation $x < B_{\\inf}$ ou $x > B_{\\sup}$ est marquée comme **valeur aberrante (outlier)** (et même « extrême » au-delà de $3 \\times IQR$).\n' +
              '• **Exemple** : sur des paniers moyens e-commerce où $Q_1 = 12\\,000$ F CFA et $Q_3 = 28\\,000$ F CFA, on a $IQR = 16\\,000$, donc $B_{\\sup} = 28\\,000 + 24\\,000 = 52\\,000$ F CFA : une commande de $95\\,000$ F CFA est un outlier !',
            keyRule:
              'Ne supprime jamais automatiquement un outlier sans l’inspecter : il peut s’agir d’une **erreur de saisie** à corriger, mais aussi d’un **signal métier majeur** (fraude ou client VIP) !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p3_q2',
              type: 'mcq',
              prompt: 'Une distribution de temps de livraison (en minutes) vérifie $Q_1 = 20$, $Me = 26$, $Q_3 = 32$. À partir de quelle durée stricte une livraison est-elle classée comme **valeur aberrante supérieure** selon Tukey ?',
              options: [
                'Au-delà de $44$ minutes.',
                'Au-delà de $50$ minutes.',
                'Au-delà de $38$ minutes.',
                'Au-delà de $64$ minutes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a $IQR = Q_3 - Q_1 = 32 - 20 = 12$ minutes. La clôture supérieure vaut $B_{\\sup} = Q_3 + 1{,}5 \\times IQR = 32 + 1{,}5 \\times 12 = 32 + 18 = 50$ minutes.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Asymétrie visuelle',
            stepTheme: 'violet',
            stepTitle: 'Lire l’asymétrie d’une distribution directement sur un boxplot',
            paragraphText:
              'Même sans calculer de coefficient d’asymétrie, un simple regard sur la boîte à moustaches indique immédiatement si la série est symétrique ou étalée d’un côté.\n' +
              '• **Distribution symétrique** : la médiane coupe la boîte en deux moitiés égales ($Me - Q_1 \\approx Q_3 - Me$) et les deux moustaches ont des longueurs comparables.\n' +
              '• **Asymétrie positive (étalement à droite)** : la partie droite de la boîte ($Q_3 - Me$) est nettement plus longue que la partie gauche ($Me - Q_1$), la moustache droite s’étire loin et les outliers apparaissent à droite (cas typique des salaires, loyers et patrimoines).\n' +
              '• **Asymétrie négative (étalement à gauche)** : la partie gauche de la boîte et la moustache gauche sont beaucoup plus allongées (cas typique des notes d’un examen facile où la majorité obtient entre $14$ et $18$ et quelques copies chutent vers $3$).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p3_q3',
              type: 'mcq',
              prompt: 'Pour les loyers mensuels d’un quartier (en milliers de F CFA), on observe $Q_1 = 110$, $Me = 155$, $Q_3 = 260$, moustache droite jusqu’à $480$ et trois outliers au-dessus de $550$. Quelle est la forme de cette distribution ?',
              options: [
                'Parfaitement symétrique.',
                'Fortement asymétrique à droite (étalement positif), car $Q_3 - Me = 105 > Me - Q_1 = 45$ avec une longue traîne à droite.',
                'Asymétrique à gauche.',
                'Uniforme sur $[110 ; 480]$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La demi-boîte droite ($105$) est plus de deux fois plus large que la demi-boîte gauche ($45$), et la queue s’allonge vers les hauts loyers : c’est une asymétrie positive (étalée à droite).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Comparaison',
            stepTheme: 'green',
            stepTitle: 'Comparer plusieurs groupes simultanément avec des boxplots parallèles',
            paragraphText:
              'La plus grande force du boxplot en data analytics est sa capacité à comparer d’un seul coup d’œil $3$, $5$ ou $10$ sous-populations côte à côte sur la même échelle (ex. salaires par département, temps de réponse de $4$ serveurs cloud).\n' +
              '• **Position centrale** : comparer les traits de médiane $Me$ pour savoir quel groupe performe le mieux en tendance centrale.\n' +
              '• **Régularité / homogénéité** : comparer la largeur des boîtes ($IQR$) — une boîte étroite signifie des performances très régulières et prévisibles ; une boîte large trahit une forte hétérogénéité.\n' +
              '• **Risque extrême** : repérer quel groupe produit le plus d’outliers (ex. pics de latence serveur inacceptables malgré une bonne médiane !).',
            konanTip:
              'Pour rédiger un commentaire complet comparant deux boxplots à l’examen, structure TOUJOURS ta réponse en 3 points : **1) Position ($Me$)**, **2) Dispersion ($IQR$)**, **3) Asymétrie & outliers**.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p3_q4',
              type: 'mcq',
              prompt: 'Deux prestataires de livraison ont la même médiane ($Me = 30$ min). Le prestataire A a $IQR = 6$ min sans outlier ; le prestataire B a $IQR = 22$ min avec plusieurs outliers à $90$ min. Que conclure ?',
              options: [
                'Les deux prestataires offrent exactement la même qualité de service.',
                'Le prestataire A est nettement plus régulier et fiable, car sa dispersion centrale ($IQR$) est presque $4$ fois plus faible et sans retards extrêmes.',
                'Le prestataire B est plus régulier car sa boîte est plus grande.',
                'La médiane suffit toujours pour choisir un prestataire.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À médiane égale, une boîte étroite ($IQR = 6$ min) sans valeur aberrante traduit une bien meilleure maîtrise opérationnelle et prévisibilité que $IQR = 22$ min avec des retards de $90$ min.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Limite du boxplot',
            stepTheme: 'orange',
            stepTitle: 'Ce qu’une boîte à moustaches ne montre PAS : le piège de la bimodalité',
            paragraphText:
              'Aussi élégant soit-il, le boxplot résume une distribution en seulement $5$ nombres — il fait donc disparaître certains détails fins de la densité.\n' +
              '• **Angle mort majeur — La bimodalité** : imagine une classe où la moitié des étudiants a eu autour de $6/20$ et l’autre moitié autour de $16/20$ (distribution bimodale à deux bosses, presque personne à $11/20$). Sa boîte à moustaches aura $Q_1 = 6$, $Me = 11$, $Q_3 = 16$ — **strictement identique** au boxplot d’une classe homogène où tout le monde est réparti uniformément entre $4$ et $18$ !\n' +
              '• **Bonne pratique data science** : toujours coupler le boxplot à un **histogramme** (ou un diagramme en violon) lorsqu’on soupçonne deux sous-populations mélangées !',
            keyRule:
              'Un boxplot ne permet JAMAIS de voir si une distribution est **unimodale** ou **bimodale** : seul l’histogramme révèle le nombre de modes (bosses) !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p3_q5',
              type: 'mcq',
              prompt: 'Quelle caractéristique importante d’une distribution quantitative est totalement **invisible** sur une boîte à moustaches classique ?',
              options: [
                'La médiane $Me$.',
                'L’écart interquartile $IQR = Q_3 - Q_1$.',
                'La présence de deux pics distincts (bimodalité) à l’intérieur de la boîte.',
                'Les valeurs aberrantes situées au-delà de $Q_3 + 1{,}5 \\times IQR$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Le boxplot n’affiche que $5$ quantiles et les outliers : deux bosses distinctes situées entre $Q_1$ et $Q_3$ sont complètement masquées par le rectangle uniforme.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Construction',
            stepTheme: 'slate',
            stepTitle: 'Construire un boxplot de A à Z sur un jeu de données de paniers clients',
            paragraphText:
              'Soient $11$ paniers e-commerce triés (en milliers de F CFA) : $4, 6, 7, 8, 9, 10, 11, 13, 14, 16, 35$.\n' +
              '• **Quartiles** : $Me = 10$ (6e valeur) ; moitié inférieure $\\{4, 6, 7, 8, 9\\} \\implies Q_1 = 7$ ; moitié supérieure $\\{11, 13, 14, 16, 35\\} \\implies Q_3 = 14$.\n' +
              '• **Dispersion et clôtures** : $IQR = 14 - 7 = 7$. $B_{\\inf} = 7 - 1{,}5(7) = -3{,}5$ et $B_{\\sup} = 14 + 1{,}5(7) = 24{,}5$.\n' +
              '• **Extrémités des moustaches** :\n' +
              '  – À gauche : aucune valeur $< -3{,}5$, la moustache gauche va jusqu’au minimum $4$.\n' +
              '  – À droite : $35 > 24{,}5$ est un **outlier** (point isolé) ! La moustache droite s’arrête donc à la plus grande valeur non aberrante, soit **$16$** (et NON $24{,}5$ !).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p3_q6',
              type: 'mcq',
              prompt: 'Dans l’exemple précédent ($\\{4, 6, 7, 8, 9, 10, 11, 13, 14, 16, 35\\}$, $B_{\\sup} = 24{,}5$), à quelle abscisse exacte s’arrête la **moustache droite** du diagramme de Tukey ?',
              options: [
                '$35$',
                '$24{,}5$',
                '$16$ (la plus grande observation réelle $\\le 24{,}5$, tandis que $35$ est tracé comme outlier).',
                '$14$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Par construction de Tukey, la moustache s’arrête à la dernière observation réelle située à l’intérieur des clôtures : ici $16 \\le 24{,}5$, tandis que $35$ est représenté par un point isolé.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Paramètres de position, de dispersion et de forme
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_stat_ch3',
    subjectId: 'lmd_stat_descriptive',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Statistique Descriptive',
    title: 'Chapitre 3 — Paramètres de position, de dispersion et de forme',
    summary:
      'Mode et classe modale, médiane et quantiles (quartiles, déciles), moyennes arithmétique/géométrique/harmonique, variance par König-Huygens, écart-type, coefficient de variation, z-score, décomposition intra/inter et asymétrie.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_stat_ch3_p1',
        order: 1,
        title: 'Mode, classe modale, médiane et quantiles (quartiles, déciles, centiles)',
        summary:
          'Déterminer le mode (discret et continu), calculer la médiane et les quartiles par rang ou interpolation linéaire, et interpréter chaque quantile.',
        conceptExplanation:
          'Les **paramètres de position** (ou de tendance centrale) résument autour de quelles valeurs se situe la série statistique. Les premiers — mode, médiane et quantiles — ne nécessitent aucun calcul de moyenne et sont très peu sensibles aux valeurs extrêmes :\n' +
          '• **Mode ($Mo$)** : modalité la plus fréquente (effectif maximal en qualitatif/discret ; classe de **densité maximale** en continu). En continu, on affine sa valeur par interpolation dans la classe modale : $Mo = b_{\\inf} + a \\frac{\\Delta_1}{\\Delta_1 + \\Delta_2}$ où $\\Delta_1 = d_m - d_{m-1}$ et $\\Delta_2 = d_m - d_{m+1}$.\n' +
          '• **Médiane ($Me = Q_2$)** : valeur qui partage la population triée en deux groupes de même effectif ($50\\%$ au-dessous, $50\\%$ au-dessus). En continu, on la calcule par interpolation linéaire dans la classe médiane (première classe où $F_j \\ge 0{,}5$).\n' +
          '• **Quantiles** : généralisation de la médiane — les **quartiles** ($Q_1, Q_2, Q_3$ aux seuils $25\\%, 50\\%, 75\\%$), les **déciles** ($D_1, \\dots, D_9$ par pas de $10\\%$) et les **centiles** ($C_1, \\dots, C_{99}$ par pas de $1\\%$).',
        formulas: [
          {
            name: 'Interpolation du mode dans la classe modale [b_inf, b_sup[',
            formula: 'Mo = b_{\\inf} + a \\cdot \\frac{\\Delta_1}{\\Delta_1 + \\Delta_2}, \\qquad \\Delta_1 = d_m - d_{m-1}, \\quad \\Delta_2 = d_m - d_{m+1}',
            note: 'Si toutes les amplitudes sont égales, on peut remplacer les densités dⱼ directement par les effectifs nⱼ.',
          },
          {
            name: 'Interpolation linéaire d’un quantile Q_p (p ∈ ]0, 1[)',
            formula: 'Q_p = b_{\\inf} + a \\cdot \\frac{p - F_{\\text{préc}}}{f_{\\text{classe}}} = b_{\\inf} + a \\cdot \\frac{n \\cdot p - N_{\\text{préc}}}{n_{\\text{classe}}}',
            note: 'Appliquer p = 0,25 pour Q₁, p = 0,50 pour Me, p = 0,75 pour Q₃, p = 0,10 pour D₁, p = 0,90 pour D₉.',
          },
        ],
        keyRule:
          'Dans une série continue, vérifie toujours que ton résultat interpolé ($Mo$, $Me$, $Q_1$, $Q_3$) tombe **à l’intérieur** de sa classe $[b_{\\inf}, b_{\\sup}[$ ! S’il en sort, tu as inversé numérateur et dénominateur.',
        workedExample: {
          title: 'Mode, médiane et quartiles du poids de 60 étudiants',
          statement:
            'Poids (en kg) de $n = 60$ étudiants : $[50, 60[$ ($7$), $[60, 70[$ ($25$), $[70, 80[$ ($21$), $[80, 90[$ ($2$), $[90, 100]$ ($5$). Calculer $Mo$, $Me$, $Q_1$ et $Q_3$.',
          methodSteps: [
            'Cumuls $N_j$ : $7,\\ 32,\\ 53,\\ 55,\\ 60$. Amplitudes toutes égales à $a = 10$ kg.',
            '**Mode** : classe modale $[60, 70[$ ($n_2 = 25$). $\\Delta_1 = 25 - 7 = 18$, $\\Delta_2 = 25 - 21 = 4$. $Mo = 60 + 10 \\times \\frac{18}{18 + 4} = 60 + 8{,}18 = 68{,}18\\text{ kg}$.',
            '**Médiane** : rang $n/2 = 30$, atteint dans $[60, 70[$ ($N_1 = 7 < 30 \\le 32 = N_2$). $Me = 60 + 10 \\times \\frac{30 - 7}{25} = 60 + 9{,}2 = 69{,}2\\text{ kg}$.',
            '**$Q_1$ et $Q_3$** : $n/4 = 15 \\in ]7, 32] \\implies Q_1 = 60 + 10 \\times \\frac{15 - 7}{25} = 63{,}2\\text{ kg}$ ; $3n/4 = 45 \\in ]32, 53] \\implies Q_3 = 70 + 10 \\times \\frac{45 - 32}{21} = 76{,}19\\text{ kg}$.',
          ],
          conclusion:
            '$Mo \\approx 68{,}2\\text{ kg}$, $Q_1 = 63{,}2\\text{ kg}$, $Me = 69{,}2\\text{ kg}$, $Q_3 \\approx 76{,}2\\text{ kg}$ (soit $IQR = 13{,}0\\text{ kg}$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Mode discret',
            stepTheme: 'blue',
            stepTitle: 'Le mode ($Mo$) en qualitatif et quantitatif discret : unimodal vs bimodal',
            paragraphText:
              'Le **mode** est l’indicateur de position le plus intuitif et le seul qui existe pour les variables qualitatives nominales.\n' +
              '• **Définition** : modalité (ou valeur) associée à l’effectif le plus élevé (fréquence maximale). Exemple : dans la série des $100$ caissettes de pêches ($0 \\to 12, 1 \\to 29, 2 \\to 31, 3 \\to 17, \\dots$), le mode est **$2$ pêches abîmées** (et NON $31$, qui est son effectif !).\n' +
              '• **Unicité non garantie** : une distribution peut avoir un seul mode (**unimodale**), deux modes (**bimodale** — souvent signe d’un mélange de deux sous-populations distinctes, ex. hommes/femmes ou clients B2C/B2B), ou aucun mode si toutes les modalités ont le même effectif (**amodale**).',
            keyRule:
              'Piège classique : le mode est la **modalité** (valeur de la variable $X$), JAMAIS son effectif $n_{\\max}$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Dans un relevé du nombre d’articles par panier sur $100$ commandes : $1$ article ($18$), $2$ articles ($37$), $3$ articles ($28$), $4$ articles ($17$). Quel est le **mode** de cette distribution ?',
              options: [
                '$37$',
                '$2$ articles',
                '$2{,}44$ articles',
                '$3$ articles',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’effectif maximal est $37$, atteint pour la modalité $X = 2$ articles. Le mode est donc $2$ articles (ne pas confondre la valeur $v_j$ avec son effectif $n_j$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Mode continu',
            stepTheme: 'green',
            stepTitle: 'Déterminer la classe modale et interpoler le mode dans le cas continu',
            paragraphText:
              'Pour une variable continue regroupée en classes, on procède impérativement en deux temps.\n' +
              '• **Temps 1 — Identifier la classe modale** : c’est la classe possédant la **plus grande densité** $d_m = f_m / a_m$ (ou $h_m = n_m / a_m$). Si toutes les amplitudes sont égales, cela revient à la classe de plus grand effectif.\n' +
              '• **Temps 2 — Interpolation par la méthode des diagonales** : on calcule les écarts de densité avec les classes adjacentes, $\\Delta_1 = d_m - d_{m-1}$ (à gauche) et $\\Delta_2 = d_m - d_{m+1}$ (à droite), puis :\n' +
              '  $$Mo = b_{\\inf} + a_m \\cdot \\frac{\\Delta_1}{\\Delta_1 + \\Delta_2}$$\n' +
              '• **Intuition géométrique** : si la classe de droite est beaucoup plus haute que celle de gauche ($\\Delta_2 < \\Delta_1$), le mode est attiré vers la droite de la classe modale !',
            konanTip:
              'Vérifie le sens d’attraction : si $d_{m-1} = d_{m+1}$ (voisins symétriques), $\\Delta_1 = \\Delta_2$ et la formule redonne exactement le **centre de la classe** $b_{\\inf} + a/2$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Trois classes consécutives d’amplitude égale $a = 5$ g ont pour effectifs : $[48, 53[$ ($74$), $[53, 58[$ ($112$), $[58, 63[$ ($92$). Quelle est la valeur interpolée du **mode** $Mo$ ?',
              options: [
                '$53 + 5 \\times \\frac{38}{38 + 20} \\approx 56{,}28$ g',
                '$53 + 5 \\times \\frac{20}{38 + 20} \\approx 54{,}72$ g',
                '$55{,}5$ g',
                '$112$ g',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Amplitudes égales : classe modale $[53, 58[$ ($n = 112$). $\\Delta_1 = 112 - 74 = 38$, $\\Delta_2 = 112 - 92 = 20$. Donc $Mo = 53 + 5 \\times \\frac{38}{58} \\approx 56{,}28$ g (attiré vers la droite car $92 > 74$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Médiane discrète',
            stepTheme: 'blue',
            stepTitle: 'Calculer la médiane ($Me$) sur données brutes ou tableau discret',
            paragraphText:
              'La **médiane** est la valeur centrale qui partage une série **préalablement triée par ordre croissant** en deux moitiés égales.\n' +
              '• **Données brutes ($n$ impair, $n = 2p + 1$)** : la médiane est la valeur unique de rang $\\frac{n + 1}{2} = p + 1$. Exemple : pour $\\{3, 7, 10, 14, 90\\}$ ($n = 5$), c’est la 3e valeur : $Me = 10$.\n' +
              '• **Données brutes ($n$ pair, $n = 2p$)** : l’intervalle médian s’étend entre les rangs $p$ et $p + 1$ ; par convention on prend leur demi-somme $Me = \\frac{x_{(p)} + x_{(p+1)}}{2}$. Exemple : pour $\\{4, 8, 12, 20\\}$ ($n = 4$), $Me = \\frac{8 + 12}{2} = 10$.\n' +
              '• **Sur tableau discret** : on lit les fréquences cumulées $F_j$ — la médiane est la première valeur $v_j$ telle que $F_j \\ge 0{,}50$ (si $F_j = 0{,}50$ exactement, on prend $\\frac{v_j + v_{j+1}}{2}$).',
            keyRule:
              'N’oublie JAMAIS de **trier la série par ordre croissant** avant de chercher la médiane ! Sur des données non triées, la valeur du milieu n’a aucun sens.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Quelle est la **médiane** de la série brute suivante (temps de réponse en secondes) : `14 ; 6 ; 22 ; 9 ; 11 ; 45` ?',
              options: [
                '$15{,}5$ s',
                '$12{,}5$ s',
                '$17{,}83$ s',
                '$11$ s',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On trie d’abord la série : `6 ; 9 ; 11 ; 14 ; 22 ; 45` ($n = 6$, pair). La médiane est la demi-somme des 3e et 4e valeurs : $Me = \\frac{11 + 14}{2} = 12{,}5$ s. (Remarquez que la moyenne vaut $17{,}83$ s, tirée vers le haut par $45$.)',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Médiane continue',
            stepTheme: 'green',
            stepTitle: 'Interpolation linéaire de la médiane dans une série continue en classes',
            paragraphText:
              'Pour une série continue regroupée en classes, on ne connaît pas les valeurs individuelles dans la classe médiane : on résout $F(Me) = 0{,}50$ par **interpolation linéaire** (théorème de Thalès sur l’ogive !).\n' +
              '• **Étape 1** : repérer la **classe médiane** $[b_{\\inf}, b_{\\sup}[$, première classe dont la fréquence cumulée $F_j$ atteint ou dépasse $0{,}50$ (ou $N_j \\ge n / 2$).\n' +
              '• **Étape 2** : appliquer la formule exacte :\n' +
              '  $$Me = b_{\\inf} + a \\cdot \\frac{0{,}50 - F_{\\text{préc}}}{f_{\\text{med}}} = b_{\\inf} + a \\cdot \\frac{n/2 - N_{\\text{préc}}}{n_{\\text{med}}}$$\n' +
              '• **Exemple (loyers Abidjan, $n = 180$)** : $n/2 = 90$. On a $N_2 = 75$ (fin de $[100 ; 150[$) et $N_3 = 125$ (fin de $[150 ; 200[$, $n_3 = 50$, $a = 50$). Donc $Me = 150 + 50 \\times \\frac{90 - 75}{50} = 150 + 15 = 165$ milliers de F CFA !',
            konanTip:
              'Vérifie le bon sens : si $N_{\\text{préc}}$ est très proche de $n/2$, $Me$ doit être tout près de la borne inférieure $b_{\\inf}$ ; s’il en est loin, $Me$ se rapproche de $b_{\\sup}$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Sur une série continue de $n = 200$ salaires, la classe médiane est $[150 ; 200[$ (en milliers de F CFA) avec $n_{\\text{med}} = 60$ et un effectif cumulé précédent $N_{\\text{préc}} = 70$. Quelle est la médiane $Me$ ?',
              options: [
                '$175\\,000$ F CFA',
                '$185\\,000$ F CFA',
                '$165\\,000$ F CFA',
                '$190\\,000$ F CFA',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On a $n/2 = 100$. La formule d’interpolation donne $Me = 150 + 50 \\times \\frac{100 - 70}{60} = 150 + 50 \\times \\frac{30}{60} = 150 + 25 = 175$ milliers de F CFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Quantiles',
            stepTheme: 'blue',
            stepTitle: 'Quartiles ($Q_1, Q_2, Q_3$), déciles ($D_1, \\dots, D_9$) et rapport interdécile',
            paragraphText:
              'Au-delà de la coupure centrale à $50\\%$, les **quantiles** décrivent finement toute l’échelle d’une distribution (très utilisés par la Banque mondiale et les instituts statistiques pour mesurer les inégalités).\n' +
              '• **Quartiles ($Q_1, Q_2, Q_3$)** : $3$ valeurs découpant la population en $4$ quarts de $25\\%$ chacun ($F(Q_1) = 0{,}25$, $F(Q_2) = 0{,}50$, $F(Q_3) = 0{,}75$).\n' +
              '• **Déciles ($D_1, D_2, \\dots, D_9$)** : $9$ valeurs découpant la population en $10$ tranches de $10\\%$ ($F(D_k) = k/10$). Ainsi $D_1$ est le seuil en dessous duquel se trouvent les $10\\%$ les plus faibles, et $D_9$ celui au-dessus duquel se trouvent les $10\\%$ les plus élevés.\n' +
              '• **Rapport interdécile ($D_9 / D_1$)** : indicateur standard des inégalités de revenus (ex. si $D_1 = 80\\,000$ F et $D_9 = 480\\,000$ F, alors $D_9 / D_1 = 6$ : les $10\\%$ les plus riches gagnent au moins $6$ fois plus que le plafond des $10\\%$ les plus modestes).',
            formula: {
              name: 'Quantile d’ordre p et rapport interdécile',
              formula: 'F(Q_p) = p \\quad (Q_1 = Q_{0,25},\\; Me = Q_{0,50},\\; Q_3 = Q_{0,75},\\; D_9 = Q_{0,90}) \\quad ; \\quad R_{9/1} = \\frac{D_9}{D_1}',
              note: 'En informatique réseau (SLA), on surveille le 95e ou 99e centile (p95, p99) du temps de réponse !',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Dans une étude sur les salaires mensuels, on trouve $Q_1 = 120\\,000$ F CFA, $Me = 180\\,000$ F CFA et $Q_3 = 290\\,000$ F CFA. Quelle interprétation est **exacte** ?',
              options: [
                '$75\\%$ des salariés gagnent plus de $290\\,000$ F CFA.',
                '$25\\%$ des salariés gagnent au plus $120\\,000$ F CFA, et $50\\%$ gagnent entre $120\\,000$ et $290\\,000$ F CFA.',
                'La moyenne des salaires est exactement égale à $180\\,000$ F CFA.',
                'Le salaire maximal de l’entreprise est $290\\,000$ F CFA.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$Q_1$ laisse $25\\%$ au-dessous ; $Q_3$ laisse $75\\%$ au-dessous (donc $25\\%$ au-dessus) ; entre $Q_1$ et $Q_3$ se situent exactement $50\\%$ des salariés.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Calcul complet',
            stepTheme: 'slate',
            stepTitle: 'Interpolation complète de $Q_1$ et $Q_3$ sur la masse des œufs',
            paragraphText:
              'Sur une ponte de $n = 400$ œufs, les effectifs cumulés sont : $[28, 38[$ ($N_1 = 3$), $[38, 48[$ ($N_2 = 54$), $[48, 53[$ ($n_3 = 74, N_3 = 128$), $[53, 58[$ ($n_4 = 112, N_4 = 240$), $[58, 63[$ ($n_5 = 92, N_5 = 332$), $[63, 73[$ ($N_6 = 394$), $[73, 83[$ ($N_7 = 400$).\n' +
              '• **Premier quartile $Q_1$** : rang $n/4 = 100$. On a $N_2 = 54 < 100 \\le 128 = N_3$, donc $Q_1 \\in [48, 53[$ ($a = 5$, $n_3 = 74$) :\n' +
              '  $$Q_1 = 48 + 5 \\times \\frac{100 - 54}{74} = 48 + 5 \\times \\frac{46}{74} \\approx 51{,}11\\text{ g}$$\n' +
              '• **Troisième quartile $Q_3$** : rang $3n/4 = 300$. On a $N_4 = 240 < 300 \\le 332 = N_5$, donc $Q_3 \\in [58, 63[$ ($a = 5$, $n_5 = 92$) :\n' +
              '  $$Q_3 = 58 + 5 \\times \\frac{300 - 240}{92} = 58 + 5 \\times \\frac{60}{92} \\approx 61{,}26\\text{ g}$$\n' +
              'Les $50\\%$ centraux des œufs pèsent entre $51{,}1$ g et $61{,}3$ g ($IQR \\approx 10{,}15$ g).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Dans cette même série de $400$ œufs ($N_3 = 128$ à $53$ g, classe $[53, 58[$ d’effectif $n_4 = 112$ et $N_4 = 240$), quelle est la **médiane** $Me$ ?',
              options: [
                '$53 + 5 \\times \\frac{200 - 128}{112} \\approx 56{,}21$ g',
                '$53 + 5 \\times \\frac{200 - 240}{112}$',
                '$55{,}50$ g',
                '$58{,}00$ g',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Le rang médian est $n/2 = 200$, compris entre $N_3 = 128$ et $N_4 = 240$ (classe $[53, 58[$, $a = 5$, $n_4 = 112$). Ainsi $Me = 53 + 5 \\times \\frac{200 - 128}{112} = 53 + \\frac{360}{112} \\approx 56{,}21$ g.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_stat_ch3_p2',
        order: 2,
        title: 'Les moyennes : arithmétique, pondérée, géométrique, harmonique et quadratique',
        summary:
          'Maîtriser les propriétés de linéarité et d’associativité de la moyenne arithmétique, savoir quand utiliser les moyennes géométrique et harmonique, et connaître leur hiérarchie.',
        conceptExplanation:
          'La **moyenne arithmétique** $\\bar{x}$ est le centre de gravité de la série, mais elle n’est pas toujours la moyenne adaptée ! En économie, en finance et en physique, quatre moyennes jouent des rôles bien distincts :\n' +
          '• **Moyenne arithmétique** $\\bar{x} = \\frac{1}{n}\\sum n_j x_j = \\sum f_j x_j$ : adaptée aux grandeurs **additives** (sommes de montants, notes, masses). Elle est **linéaire** ($\\overline{aX + b} = a\\bar{x} + b$) et **associative** (moyenne globale = moyenne pondérée des moyennes de sous-groupes).\n' +
          '• **Moyenne géométrique** $G = \\left(\\prod_{i=1}^n x_i\\right)^{1/n}$ (pour $x_i > 0$) : unique moyenne exacte pour les grandeurs **multiplicatives** (coefficients multiplicateurs, taux de croissance annuels moyens, inflation).\n' +
          '• **Moyenne harmonique** $H = \\frac{n}{\\sum_{i=1}^n (1/x_i)}$ (pour $x_i > 0$) : unique moyenne exacte pour les **rapports à numérateur constant** (vitesses sur distances égales, prix moyens d’achats à budget fixe).\n' +
          '• **Moyenne quadratique** $Q = \\sqrt{\\frac{1}{n}\\sum x_i^2}$ : utilisée pour les écarts et grandeurs physiques (RMS).\n\n' +
          'Pour toute série strictement positive, on a toujours la **hiérarchie universelle** : $H \\le G \\le \\bar{x} \\le Q$.',
        formulas: [
          {
            name: 'Les 4 moyennes fondamentales (pour xᵢ > 0)',
            formula: 'H = \\frac{n}{\\sum \\frac{1}{x_i}} \\;\\le\\; G = \\left(\\prod_{i=1}^{n} x_i\\right)^{1/n} \\;\\le\\; \\bar{x} = \\frac{1}{n}\\sum_{i=1}^{n} x_i \\;\\le\\; Q = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n} x_i^2}',
            note: 'L’égalité H = G = x̄ = Q a lieu si et seulement si toutes les observations xᵢ sont identiques.',
          },
          {
            name: 'Linéarité et associativité de la moyenne arithmétique',
            formula: '\\overline{aX + b} = a\\bar{x} + b, \\qquad \\bar{x}_{\\text{global}} = \\frac{n_1 \\bar{x}_1 + n_2 \\bar{x}_2}{n_1 + n_2}',
            note: 'En continu, on remplace xⱼ par le centre de classe cⱼ = (bⱼ₋₁ + bⱼ) / 2.',
          },
        ],
        keyRule:
          'Grandeurs qui s’**additionnent** $\\longrightarrow$ moyenne arithmétique $\\bar{x}$ ; taux qui se **multiplient** $\\longrightarrow$ moyenne géométrique $G$ ; **vitesses** sur même distance $\\longrightarrow$ moyenne harmonique $H$ !',
        workedExample: {
          title: 'Taux de croissance annuel moyen (TCAM) d’une startup digitale',
          statement:
            'Le chiffre d’affaires d’une fintech croît de $+20\\%$ en année 1, de $+50\\%$ en année 2, puis recule de $-10\\%$ en année 3. Calculer le taux de croissance annuel moyen exact (TCAM) par la moyenne géométrique et comparer avec la moyenne arithmétique trompeuse.',
          methodSteps: [
            'On convertit chaque taux $t_i$ en coefficient multiplicateur $CM_i = 1 + t_i$ : $CM_1 = 1{,}20$, $CM_2 = 1{,}50$, $CM_3 = 0{,}90$.',
            'Le coefficient multiplicateur global sur 3 ans vaut $CM_{\\text{global}} = 1{,}20 \\times 1{,}50 \\times 0{,}90 = 1{,}62$ (soit $+62\\%$ en 3 ans).',
            'La moyenne géométrique des coefficients multiplicateurs vaut $G = (1{,}62)^{1/3} \\approx 1{,}1745$.',
            'Donc le TCAM exact vaut $t_{\\text{moy}} = G - 1 \\approx +17{,}45\\%$ par an (en effet $1{,}1745^3 \\approx 1{,}62$).',
          ],
          conclusion:
            'La moyenne arithmétique des taux aurait donné $(20 + 50 - 10)/3 = +20\\%$, surestimant la croissance réelle ($1{,}20^3 = 1{,}728 \\neq 1{,}62$) !',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Arithmétique',
            stepTheme: 'blue',
            stepTitle: 'Moyenne arithmétique simple, pondérée et approchée en classes continues',
            paragraphText:
              'La **moyenne arithmétique** est le paramètre de position le plus utilisé en statistique et en finance.\n' +
              '• **Données brutes** : $\\bar{x} = \\frac{x_1 + x_2 + \\dots + x_n}{n}$.\n' +
              '• **Tableau discret** : $\\bar{x} = \\frac{1}{n}\\sum_{j=1}^k n_j v_j = \\sum_{j=1}^k f_j v_j$.\n' +
              '• **Tableau continu en classes** : on remplace chaque classe $[b_{j-1}, b_j[$ par son centre $c_j = \\frac{b_{j-1}+b_j}{2}$ : $\\bar{x} \\approx \\frac{1}{n}\\sum_{j=1}^k n_j c_j$.\n' +
              '• **Propriété de centre de gravité** : la somme des écarts algébriques à la moyenne est **toujours strictement nulle** : $\\sum_{j=1}^k n_j (x_j - \\bar{x}) = 0$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Sur $100$ caissettes, le nombre de pêches abîmées donne $\\sum n_j v_j = 212$. Quelle est la moyenne arithmétique $\\bar{x}$ par caissette ?',
              options: [
                '$2{,}12$ pêches abîmées.',
                '$21{,}2$ pêches abîmées.',
                '$0{,}212$ pêches abîmées.',
                '$1{,}88$ pêches abîmées.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par définition, $\\bar{x} = \\frac{1}{n}\\sum n_j v_j = \\frac{212}{100} = 2{,}12$ pêches abîmées par caissette en moyenne.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Linéarité & Associativité',
            stepTheme: 'violet',
            stepTitle: 'Linéarité ($\\overline{aX + b} = a\\bar{x} + b$) et associativité des sous-groupes',
            paragraphText:
              'Deux propriétés algébriques de la moyenne arithmétique font gagner un temps considérable en examen comme en entreprise.\n' +
              '• **Linéarité (changement d’unité ou d’origine)** : si $Y = aX + b$, alors $\\bar{y} = a\\bar{x} + b$. Exemple : si la taille moyenne est $\\bar{x} = 68{,}30$ pouces ($1\\text{ pouce} = 2{,}54\\text{ cm}$), alors en cm $\\bar{y} = 2{,}54 \\times 68{,}30 = 173{,}48\\text{ cm}$ ! Si une entreprise augmente tous ses salaires de $+5\\%$ puis ajoute une prime fixe de $25\\,000$ F CFA, le nouveau salaire moyen vaut $1{,}05 \\bar{x} + 25\\,000$.\n' +
              '• **Associativité (moyenne de moyennes)** : si une population est divisée en $2$ groupes de tailles $n_1, n_2$ et de moyennes $\\bar{x}_1, \\bar{x}_2$, la moyenne globale est la **moyenne pondérée** $\\bar{x} = \\frac{n_1\\bar{x}_1 + n_2\\bar{x}_2}{n_1 + n_2}$ — et NON la simple demi-somme $\\frac{\\bar{x}_1 + \\bar{x}_2}{2}$ (sauf si $n_1 = n_2$ !).',
            keyRule:
              'Ne fais JAMAIS la moyenne simple de deux moyennes de groupes de tailles différentes : pondère TOUJOURS chaque moyenne par l’effectif de son groupe !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Une filière compte un groupe A de $40$ étudiants (moyenne $13/20$) et un groupe B de $10$ étudiants (moyenne $18/20$). Quelle est la moyenne globale de la filière ?',
              options: [
                '$15{,}5/20$',
                '$14{,}0/20$',
                '$15{,}0/20$',
                '$16{,}0/20$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par associativité : $\\bar{x} = \\frac{40 \\times 13 + 10 \\times 18}{40 + 10} = \\frac{520 + 180}{50} = \\frac{700}{50} = 14{,}0/20$. (La demi-somme $15{,}5$ aurait ignoré que le groupe A est $4$ fois plus nombreux !)',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Géométrique',
            stepTheme: 'blue',
            stepTitle: 'Moyenne géométrique ($G$) : la reine des taux de croissance et rendements',
            paragraphText:
              'Lorsque les phénomènes se composent par **multiplication** (croissance du PIB, inflation, rendements boursiers, trafic web), la moyenne arithmétique est fausse : seule la **moyenne géométrique** préserve le produit total.\n' +
              '• **Définition** : pour $n$ valeurs strictement positives $x_1, \\dots, x_n$, $G = \\sqrt[n]{x_1 \\times x_2 \\times \\dots \\times x_n} = \\left(\\prod_{i=1}^n x_i\\right)^{1/n}$.\n' +
              '• **Propriété logarithmique** : $\\ln(G) = \\frac{1}{n}\\sum_{i=1}^n \\ln(x_i)$ (le logarithme de la moyenne géométrique est la moyenne arithmétique des logarithmes !).\n' +
              '• **Exemple frappant** : un titre boursier gagne $+100\\%$ l’an 1 ($\\times 2$) puis perd $-50\\%$ l’an 2 ($\\times 0{,}5$). Après 2 ans, on est revenu au capital initial ($2 \\times 0{,}5 = 1$, soit $0\\%$ de gain !). La moyenne géométrique donne $G = \\sqrt{2 \\times 0{,}5} = 1 \\implies 0\\%$ (exact !), alors que la moyenne arithmétique des taux annonçait $(+100 - 50)/2 = +25\\%$ (totalement faux !).',
            formula: {
              name: 'Moyenne géométrique et taux moyen (TCAM)',
              formula: 'G = \\left(\\prod_{i=1}^{n} x_i\\right)^{1/n} = \\exp\\left(\\frac{1}{n}\\sum_{i=1}^{n} \\ln x_i\\right), \\qquad \\text{TCAM} = G(1 + t_i) - 1',
              note: 'Appliquer la moyenne géométrique aux coefficients multiplicateurs (1 + tᵢ), jamais directement aux taux tᵢ (qui peuvent être négatifs) !',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Un portefeuille financier multiplie sa valeur par $1{,}44$ en année 1 puis reste stable ($\\times 1{,}00$) en année 2. Quel est son taux de croissance annuel moyen exact sur ces 2 années ?',
              options: [
                '$+22\\%$',
                '$+20\\%$ (car $G = \\sqrt{1{,}44 \\times 1{,}00} = 1{,}20$, soit $+20\\%$ par an).',
                '$+44\\%$',
                '$+12\\%$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Le coefficient multiplicateur moyen est $G = \\sqrt{1{,}44 \\times 1} = 1{,}20$, ce qui correspond à un taux annuel moyen de $1{,}20 - 1 = +20\\%$ (vérification : $1{,}20^2 = 1{,}44$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Harmonique',
            stepTheme: 'blue',
            stepTitle: 'Moyenne harmonique ($H$) : vitesses moyennes et prix unitaires à budget fixe',
            paragraphText:
              'La **moyenne harmonique** est l’inverse de la moyenne arithmétique des inverses : $H = \\frac{n}{\\sum_{i=1}^n \\frac{1}{x_i}}$ (pour $x_i > 0$).\n' +
              '• **Cas 1 — Vitesse moyenne sur aller-retour (même distance $D$)** : un livreur parcourt Abidjan–Grand-Bassam à $v_1 = 60\\text{ km/h}$ à l’aller et revient à $v_2 = 40\\text{ km/h}$ au retour. Sa vitesse moyenne sur l’ensemble du trajet n’est PAS $50\\text{ km/h}$ ! Car il passe plus de temps à $40\\text{ km/h}$ qu’à $60\\text{ km/h}$ : $v_{\\text{moy}} = H(60, 40) = \\frac{2}{\\frac{1}{60} + \\frac{1}{40}} = \\frac{2 \\times 60 \\times 40}{60 + 40} = 48\\text{ km/h}$ !\n' +
              '• **Cas 2 — Achat programmé à budget fixe (*Dollar-Cost Averaging*)** : si un investisseur achète chaque mois pour $100\\,000$ F CFA d’actions (un mois au prix $p_1$, l’autre au prix $p_2$), son prix de revient moyen par action est exactement la **moyenne harmonique** $H(p_1, p_2)$ !',
            formula: {
              name: 'Moyenne harmonique (cas général et cas n = 2)',
              formula: 'H = \\frac{n}{\\sum_{i=1}^{n} \\frac{1}{x_i}} \\qquad ; \\qquad \\text{pour } n = 2 :\\; H(a, b) = \\frac{2ab}{a + b}',
              note: 'En Machine Learning, le score F1 est précisément la moyenne harmonique de la Précision et du Rappel : F1 = 2PR / (P + R) !',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Un véhicule effectue un trajet aller à $90\\text{ km/h}$ et le même trajet retour à $60\\text{ km/h}$. Quelle est sa **vitesse moyenne exacte** sur l’aller-retour ?',
              options: [
                '$75\\text{ km/h}$',
                '$72\\text{ km/h}$',
                '$73{,}5\\text{ km/h}$',
                '$70\\text{ km/h}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À distances égales, la vitesse moyenne est la moyenne harmonique : $H = \\frac{2 \\times 90 \\times 60}{90 + 60} = \\frac{10\\,800}{150} = 72\\text{ km/h}$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Hiérarchie',
            stepTheme: 'violet',
            stepTitle: 'L’inégalité universelle des moyennes : $H \\le G \\le \\bar{x} \\le Q$',
            paragraphText:
              'Pour toute série de nombres strictement positifs $x_1, \\dots, x_n > 0$, les quatre moyennes se rangent **toujours** dans le même ordre immuable :\n' +
              '$$\\min(x_i) \\;\\le\\; H \\;\\le\\; G \\;\\le\\; \\bar{x} \\;\\le\\; Q \\;\\le\\; \\max(x_i)$$\n' +
              '• **Vérification sur un couple simple ($4$ et $16$)** :\n' +
              '  – $H = \\frac{2 \\times 4 \\times 16}{4 + 16} = \\frac{128}{20} = 6{,}4$ ;\n' +
              '  – $G = \\sqrt{4 \\times 16} = \\sqrt{64} = 8$ ;\n' +
              '  – $\\bar{x} = \\frac{4 + 16}{2} = 10$ ;\n' +
              '  – $Q = \\sqrt{\\frac{4^2 + 16^2}{2}} = \\sqrt{\\frac{272}{2}} = \\sqrt{136} \\approx 11{,}66$.\n' +
              'On a bien $6{,}4 < 8 < 10 < 11{,}66$ ! L’écart entre elles augmente avec la dispersion de la série (en finance, plus un actif est volatil, plus son rendement géométrique réel $G$ chute sous son rendement arithmétique $\\bar{x}$ !).',
            keyRule:
              'Pour $x_i > 0$ : **$H \\le G \\le \\bar{x} \\le Q$**. Cette inégalité te permet de vérifier instantanément tout calcul à l’examen : si tu trouves $G > \\bar{x}$ ou $H > G$, il y a une erreur de calcul !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Pour deux nombres positifs distincts $a = 2$ et $b = 8$, quelles sont les valeurs exactes respectives de $H$, $G$ et $\\bar{x}$ ?',
              options: [
                '$H = 3{,}2$, $G = 4$, $\\bar{x} = 5$.',
                '$H = 4$, $G = 3{,}2$, $\\bar{x} = 5$.',
                '$H = 5$, $G = 4$, $\\bar{x} = 3{,}2$.',
                '$H = 3{,}2$, $G = 5$, $\\bar{x} = 4$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$H = \\frac{2 \\times 2 \\times 8}{2 + 8} = \\frac{32}{10} = 3{,}2$ ; $G = \\sqrt{2 \\times 8} = \\sqrt{16} = 4$ ; $\\bar{x} = \\frac{2 + 8}{2} = 5$. On vérifie bien $3{,}2 < 4 < 5$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Robustesse',
            stepTheme: 'orange',
            stepTitle: 'Moyenne versus médiane : pourquoi une seule valeur extrême fait mentir la moyenne',
            paragraphText:
              'La moyenne arithmétique utilise toutes les valeurs de la série, ce qui est à la fois sa force mathématique et sa grande faiblesse face aux **valeurs aberrantes**.\n' +
              '• **Expérience célèbre** : dans un café abidjanais se trouvent $9$ étudiants ayant chacun $150\\,000$ F CFA de revenu mensuel. Moyenne = Médiane = $150\\,000$ F CFA. Un chef d’entreprise gagnant $10\\,000\\,000$ F CFA entre dans la salle !\n' +
              '  – La **moyenne** explose instantanément à $\\frac{9 \\times 150\\,000 + 10\\,000\\,000}{10} = 1\\,135\\,000$ F CFA (personne dans la salle ne gagne ce montant, et $90\\%$ gagnent $7$ fois moins !).\n' +
              '  – La **médiane**, elle, reste imperturbablement égale à **$150\\,000$ F CFA** !\n' +
              '• **Règle métier** : on dit que la médiane est un indicateur **robuste** (résistant aux outliers). Pour les salaires, loyers et temps d’attente (fortement asymétriques), donne TOUJOURS la médiane aux côtés de la moyenne !',
            konanTip:
              'Si $\\bar{x}$ est très supérieure à $Me$, méfie-toi immédiatement : la distribution est tirée vers le haut par quelques valeurs très élevées !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Pourquoi les instituts statistiques privilégient-ils le **salaire médian** plutôt que le seul **salaire moyen** pour décrire le niveau de vie typique d’un pays ?',
              options: [
                'Parce que la médiane est plus grande que la moyenne.',
                'Parce que la moyenne est très sensible aux très hauts revenus (outliers), alors que la médiane est robuste et reflète fidèlement le revenu central.',
                'Parce qu’on ne peut pas calculer de moyenne sur des salaires.',
                'Parce que la médiane tient compte de tous les montants extrêmes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Une poignée de très hauts revenus tire fortement la moyenne vers le haut sans changer le niveau de vie de la majorité ; la médiane reste insensible à ces extrêmes.',
            },
          },
          {
            stepNumber: 7,
            stepKind: 'exemple',
            stepBadge: 'Application continue',
            stepTheme: 'slate',
            stepTitle: 'Calculer la moyenne pondérée d’une série continue (poids des 60 étudiants)',
            paragraphText:
              'Calculons la moyenne arithmétique du poids des $n = 60$ étudiants en utilisant les centres de classes $c_j$ :\n' +
              '• $[50, 60[$ : $c_1 = 55$, $n_1 = 7 \\implies n_1 c_1 = 385$ ;\n' +
              '• $[60, 70[$ : $c_2 = 65$, $n_2 = 25 \\implies n_2 c_2 = 1\\,625$ ;\n' +
              '• $[70, 80[$ : $c_3 = 75$, $n_3 = 21 \\implies n_3 c_3 = 1\\,575$ ;\n' +
              '• $[80, 90[$ : $c_4 = 85$, $n_4 = 2 \\implies n_4 c_4 = 170$ ;\n' +
              '• $[90, 100]$ : $c_5 = 95$, $n_5 = 5 \\implies n_5 c_5 = 475$.\n' +
              '• **Somme et division** : $\\sum n_j c_j = 385 + 1\\,625 + 1\\,575 + 170 + 475 = 4\\,230$, donc $\\bar{x} = \\frac{4\\,230}{60} = 70{,}5\\text{ kg}$.\n' +
              'Remarque sur la forme : on observe $Mo \\approx 68{,}2 < Me = 69{,}2 < \\bar{x} = 70{,}5$, signe d’une légère asymétrie à droite due aux $5$ individus de $[90, 100]$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q7',
              type: 'mcq',
              prompt: 'Une distribution continue comporte $3$ classes : $[0, 10[$ ($n = 20$), $[10, 20[$ ($n = 50$) et $[20, 40[$ ($n = 30$). Quelle est sa moyenne arithmétique approchée $\\bar{x}$ ?',
              options: [
                '$15{,}0$',
                '$17{,}5$',
                '$19{,}0$',
                '$20{,}0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Centres : $c_1 = 5$, $c_2 = 15$, $c_3 = 30$ (attention à l’amplitude $20$ de la dernière classe !). Somme $\\sum n_j c_j = 20(5) + 50(15) + 30(30) = 100 + 750 + 900 = 1\\,750$. Effectif total $n = 100$, d’où $\\bar{x} = 17{,}5$.',
            },
          },
        ],
      }),

      // POINT 3.3
      makePoint({
        id: 'lmd_entd_l1_stat_ch3_p3',
        order: 3,
        title: 'Paramètres de dispersion : étendue, IQR, variance (König-Huygens) et écart-type',
        summary:
          'Mesurer l’étalement d’une série par étendue, IQR, EAM, variance et écart-type, appliquer la formule rapide de König-Huygens et maîtriser l’effet de Y = aX + b.',
        conceptExplanation:
          'Deux séries peuvent avoir exactement la même moyenne $\\bar{x} = 12/20$ tout en étant radicalement différentes (l’une concentrée entre $11$ et $13$, l’autre éparpillée de $2$ à $20$ !). Les **paramètres de dispersion** mesurent cet étalement :\n' +
          '• **Étendue** : $E = x_{\\max} - x_{\\min}$ (très simple mais ultrasensible à un seul outlier).\n' +
          '• **Écart interquartile** : $IQR = Q_3 - Q_1$ (dispersion robuste des $50\\%$ centraux).\n' +
          '• **Écart absolu moyen** : $EAM = \\frac{1}{n}\\sum n_j |x_j - \\bar{x}|$.\n' +
          '• **Variance** : moyenne des carrés des écarts à la moyenne, $V(X) = \\frac{1}{n}\\sum n_j (x_j - \\bar{x})^2 \\ge 0$. Par le **théorème de König-Huygens**, on la calcule beaucoup plus vite par :\n' +
          '  $$V(X) = \\left(\\frac{1}{n}\\sum n_j x_j^2\\right) - \\bar{x}^2 = \\overline{X^2} - (\\bar{x})^2$$\n' +
          '• **Écart-type** : $\\sigma(X) = \\sqrt{V(X)}$, qui revient dans la **même unité physique** que $X$ (F CFA, kg, cm, minutes).',
        formulas: [
          {
            name: 'Variance par König-Huygens et écart-type',
            formula: 'V(X) = \\frac{1}{n}\\sum_{j=1}^{k} n_j(x_j - \\bar{x})^2 = \\left(\\frac{1}{n}\\sum_{j=1}^{k} n_j x_j^2\\right) - \\bar{x}^2, \\qquad \\sigma(X) = \\sqrt{V(X)}',
            note: '« La variance est la moyenne des carrés MOINS le carré de la moyenne » : jamais négative !',
          },
          {
            name: 'Transformation affine Y = aX + b',
            formula: 'V(aX + b) = a^2 \\, V(X), \\qquad \\sigma(aX + b) = |a| \\, \\sigma(X)',
            note: 'Ajouter une constante b décale la distribution sans jamais modifier sa dispersion !',
          },
        ],
        keyRule:
          'Ne prends jamais la racine carrée avant d’avoir soustrait $\\bar{x}^2$, et rappelle-toi qu’une variance est **toujours $\\ge 0$** : si König-Huygens donne un nombre négatif, tu as fait une erreur de calcul ou d’arrondi !',
        workedExample: {
          title: 'Variance par König-Huygens et écart-type du poids des 60 étudiants',
          statement:
            'Reprenons le poids des $n = 60$ étudiants ($[50,60[:7$, $[60,70[:25$, $[70,80[:21$, $[80,90[:2$, $[90,100]:5$) dont la moyenne vaut $\\bar{x} = 70{,}5\\text{ kg}$. Calculer $V(X)$ par König-Huygens puis $\\sigma(X)$.',
          methodSteps: [
            'On calcule $c_j^2$ : $55^2 = 3\\,025$, $65^2 = 4\\,225$, $75^2 = 5\\,625$, $85^2 = 7\\,225$, $95^2 = 9\\,025$.',
            'On calcule $\\sum n_j c_j^2 = 7(3\\,025) + 25(4\\,225) + 21(5\\,625) + 2(7\\,225) + 5(9\\,025) = 21\\,175 + 105\\,625 + 118\\,125 + 14\\,450 + 45\\,125 = 304\\,500$.',
            'Moyenne des carrés : $\\overline{X^2} = \\frac{304\\,500}{60} = 5\\,075$.',
            'Par König-Huygens : $V(X) = 5\\,075 - (70{,}5)^2 = 5\\,075 - 4\\,970{,}25 = 104{,}75\\text{ kg}^2$.',
            'Écart-type : $\\sigma(X) = \\sqrt{104{,}75} \\approx 10{,}23\\text{ kg}$.',
          ],
          conclusion:
            'Les poids des étudiants s’écartent typiquement d’environ $10{,}2\\text{ kg}$ autour de la moyenne $70{,}5\\text{ kg}$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Étendue, IQR & EAM',
            stepTheme: 'blue',
            stepTitle: 'Étendue ($E$), écart interquartile ($IQR$) et écart absolu moyen ($EAM$)',
            paragraphText:
              'Trois indicateurs simples donnent une première mesure de la dispersion avant la variance.\n' +
              '• **Étendue ($E = x_{\\max} - x_{\\min}$)** : facile à calculer mais fragile, car elle ne dépend que des deux valeurs les plus extrêmes.\n' +
              '• **Écart interquartile ($IQR = Q_3 - Q_1$)** : mesure la largeur de la moitié centrale de la distribution. Insensible aux $25\\%$ les plus faibles et aux $25\\%$ les plus élevés, c’est le compagnon naturel de la médiane.\n' +
              '• **Écart absolu moyen ($EAM = \\frac{1}{n}\\sum n_j |x_j - \\bar{x}|$)** : moyenne des distances brutes à la moyenne (en prenant la valeur absolue pour éviter que les écarts positifs et négatifs ne s’annulent). Plus intuitif que $\\sigma$, mais moins commode algébriquement car $|\\cdot|$ n’est pas dérivable en $0$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p3_q1',
              type: 'mcq',
              prompt: 'Pour la série simple $\\{2, 4, 6, 8, 10\\}$ (moyenne $\\bar{x} = 6$), que valent respectivement l’étendue $E$ et l’écart absolu moyen $EAM$ ?',
              options: [
                '$E = 8$ et $EAM = 2{,}4$.',
                '$E = 10$ et $EAM = 0$.',
                '$E = 8$ et $EAM = 4$.',
                '$E = 6$ et $EAM = 2{,}4$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Étendue $E = 10 - 2 = 8$. Les écarts absolus à $\\bar{x} = 6$ sont $|2-6|=4$, $|4-6|=2$, $|6-6|=0$, $|8-6|=2$, $|10-6|=4$. Leur moyenne vaut $EAM = \\frac{4+2+0+2+4}{5} = \\frac{12}{5} = 2{,}4$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Variance & σ',
            stepTheme: 'blue',
            stepTitle: 'Variance $V(X)$ et écart-type $\\sigma(X)$ : sens géométrique et unités',
            paragraphText:
              'Pour contourner la valeur absolue, on élève les écarts centrés au **carré**, ce qui pénalise plus fortement les grands écarts et dote la variance de propriétés algébriques exceptionnelles.\n' +
              '• **Variance** : $V(X) = \\frac{1}{n}\\sum_{j=1}^k n_j(x_j - \\bar{x})^2 = \\sum_{j=1}^k f_j(x_j - \\bar{x})^2$. Elle s’exprime dans le **carré de l’unité** de $X$ (ex. $\\text{F CFA}^2$, $\\text{cm}^2$), ce qui est peu lisible directement.\n' +
              '• **Écart-type** : $\\sigma(X) = \\sqrt{V(X)} \\ge 0$. En prenant la racine carrée, on revient dans l’**unité d’origine** de la variable !\n' +
              '• **Cas limite** : $V(X) = 0 \\iff \\sigma(X) = 0 \\iff$ toutes les observations sont strictement égales à $\\bar{x}$ (série constante, dispersion nulle).',
            keyRule:
              'Interprète toujours $\\sigma(X)$ (dans l’unité de $X$), jamais $V(X)$ seule ! En finance, l’écart-type des rendements mesure directement la **volatilité** (le risque) d’un actif.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p3_q2',
              type: 'mcq',
              prompt: 'Si une série de loyers mensuels en F CFA a une variance $V(X) = 2\\,500\\,000\\,000\\text{ F CFA}^2$, que vaut son écart-type $\\sigma(X)$ et dans quelle unité s’exprime-t-il ?',
              options: [
                '$50\\,000\\text{ F CFA}$',
                '$50\\,000\\text{ F CFA}^2$',
                '$500\\,000\\text{ F CFA}$',
                '$25\\,000\\text{ F CFA}$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\sigma(X) = \\sqrt{2\\,500\\,000\\,000} = \\sqrt{25 \\times 10^8} = 5 \\times 10^4 = 50\\,000\\text{ F CFA}$ (unité identique à celle de la variable).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'König-Huygens',
            stepTheme: 'violet',
            stepTitle: 'Théorème de König-Huygens : démonstration et puissance de calcul',
            paragraphText:
              'Calculer $(x_j - \\bar{x})^2$ pour chaque ligne est long et sujet aux erreurs d’arrondi dès que $\\bar{x}$ n’est pas un entier (ex. $\\bar{x} = 17{,}3846\\dots$). Le **théorème de König-Huygens** élimine totalement ce problème !\n' +
              '• **Démonstration en 3 lignes** :\n' +
              '  $V(X) = \\frac{1}{n}\\sum n_j(x_j^2 - 2\\bar{x}x_j + \\bar{x}^2) = \\frac{1}{n}\\sum n_j x_j^2 - 2\\bar{x}\\left(\\frac{1}{n}\\sum n_j x_j\\right) + \\bar{x}^2\\left(\\frac{1}{n}\\sum n_j\\right)$\n' +
              '  $= \\overline{X^2} - 2\\bar{x}^2 + \\bar{x}^2 = \\overline{X^2} - (\\bar{x})^2$.\n' +
              '• **Avantage pratique** : il suffit d’ajouter une seule colonne $n_j x_j^2$ dans le tableau statistique, de diviser sa somme par $n$, puis de retrancher $\\bar{x}^2$ !',
            formula: {
              name: 'Formule développée de König-Huygens',
              formula: 'V(X) = \\left(\\frac{1}{n}\\sum_{j=1}^{k} n_j x_j^2\\right) - (\\bar{x})^2 = \\left(\\sum_{j=1}^{k} f_j x_j^2\\right) - (\\bar{x})^2',
              note: 'Garde toujours au moins 4 décimales sur x̄ avant de calculer x̄², car on soustrait deux grands nombres proches !',
            },
            konanTip:
              'Attention au piège d’arrondi dans König-Huygens : comme $\\overline{X^2}$ et $\\bar{x}^2$ sont souvent très grands et proches (ex. $5\\,075$ et $4\\,970{,}25$), arrondir $\\bar{x}$ trop tôt détruit complètement la précision de $V(X)$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p3_q3',
              type: 'mcq',
              prompt: 'Sur une série de $n = 10$ observations, on connaît $\\sum x_i = 50$ et $\\sum x_i^2 = 340$. Quelle est la valeur exacte de la variance $V(X)$ par König-Huygens ?',
              options: [
                '$9$',
                '$34$',
                '$25$',
                '$3$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La moyenne vaut $\\bar{x} = 50/10 = 5$. La moyenne des carrés vaut $\\overline{X^2} = 340/10 = 34$. Par König-Huygens : $V(X) = 34 - 5^2 = 34 - 25 = 9$ (et $\\sigma = 3$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Changement d’échelle',
            stepTheme: 'violet',
            stepTitle: 'Effet d’une transformation affine $Y = aX + b$ sur la variance et l’écart-type',
            paragraphText:
              'Comment réagit la dispersion lorsqu’on convertit des unités (pouces en cm, euros en F CFA) ou lorsqu’on accorde une prime uniforme à tous les salariés ?\n' +
              '• **Translation ($Y = X + b$)** : ajouter la même constante $b$ à toutes les valeurs décale toute la série en bloc sans changer les écarts $(y_i - \\bar{y}) = (x_i + b) - (\\bar{x} + b) = x_i - \\bar{x}$. Donc $V(X + b) = V(X)$ et $\\sigma(X + b) = \\sigma(X)$ !\n' +
              '• **Homothétie ($Y = aX$)** : multiplier chaque valeur par $a$ multiplie les écarts par $a$ et leurs carrés par $a^2$ ! Donc $V(aX) = a^2 V(X)$ et $\\sigma(aX) = |a| \\sigma(X)$.\n' +
              '• **Cas général ($Y = aX + b$)** : $V(aX + b) = a^2 V(X)$ et $\\sigma(aX + b) = |a|\\sigma(X)$. Exemple : si $\\sigma_{\\text{pouces}} = 2{,}47$ pouces, alors en cm $\\sigma_{\\text{cm}} = 2{,}54 \\times 2{,}47 = 6{,}27$ cm !',
            keyRule:
              'La constante additive $b$ **disparaît totalement** dans $V(aX + b) = a^2 V(X)$, et le facteur multiplicatif $a$ sort **au carré** de la variance (et en valeur absolue $|a|$ de l’écart-type) !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p3_q4',
              type: 'mcq',
              prompt: 'Les salaires d’une PME ont un écart-type $\\sigma_X = 40\\,000$ F CFA. La direction décide d’augmenter tous les salaires de $10\\%$ puis d’ajouter une indemnité fixe de $20\\,000$ F CFA ($Y = 1{,}10 X + 20\\,000$). Quel est le nouvel écart-type $\\sigma_Y$ ?',
              options: [
                '$64\\,000$ F CFA',
                '$44\\,000$ F CFA',
                '$40\\,000$ F CFA',
                '$60\\,000$ F CFA',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’indemnité fixe $+20\\,000$ n’a aucun effet sur la dispersion. Seul le coefficient multiplicateur $1{,}10$ agit : $\\sigma_Y = 1{,}10 \\times 40\\,000 = 44\\,000$ F CFA.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Diviseur n vs n−1',
            stepTheme: 'orange',
            stepTitle: 'Variance descriptive ($\\div n$) versus variance d’échantillon corrigée ($\\div (n - 1)$)',
            paragraphText:
              'En ouvrant Excel (`VAR.P` vs `VAR.S`) ou une calculatrice scientifique ($\\sigma_n$ vs $s_{n-1}$), deux variances différentes apparaissent ! Il est indispensable de savoir laquelle choisir.\n' +
              '• **Variance empirique / descriptive ($V(X) = \\sigma^2$)** : diviseur **$n$**. C’est la formule exacte de la **statistique descriptive** (population observée intégralement) : $V(X) = \\frac{1}{n}\\sum (x_i - \\bar{x})^2$.\n' +
              '• **Variance corrigée / sans biais ($s^{*2}$)** : diviseur **$n - 1$** (correction de Bessel). Utilisée en **statistique inférentielle** lorsqu’on estime la variance d’une grande population à partir d’un échantillon aléatoire : $s^{*2} = \\frac{1}{n - 1}\\sum (x_i - \\bar{x})^2 = \\frac{n}{n - 1} V(X)$.\n' +
              '• **Relation** : on a toujours $s^{*2} > V(X)$, et la différence devient négligeable dès que $n$ est grand (pour $n = 1\\,000$, l’écart est de $0{,}1\\%$).',
            konanTip:
              'Sur une calculatrice scientifique, lis bien les touches : $\\sigma_x$ (diviseur $n$) sert en statistique descriptive, tandis que $s_x$ (diviseur $n - 1$) sert pour l’estimation sur échantillon !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p3_q5',
              type: 'mcq',
              prompt: 'Sur un échantillon de $n = 10$ mesures, la variance descriptive (divisée par $n$) vaut $V(X) = 18$. Que vaut la variance corrigée d’échantillon $s^{*2}$ (divisée par $n - 1$) ?',
              options: [
                '$16{,}2$',
                '$20$',
                '$18$',
                '$19$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On a $s^{*2} = \\frac{n}{n - 1} V(X) = \\frac{10}{9} \\times 18 = 20$. (Vérification : $\\sum (x_i - \\bar{x})^2 = 10 \\times 18 = 180$, puis $180 / 9 = 20$.)',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Entraînement',
            stepTheme: 'slate',
            stepTitle: 'Calcul intégral de $\\bar{x}$, $V(X)$ et $\\sigma(X)$ sur une série discrète',
            paragraphText:
              'Calculons la moyenne, la variance et l’écart-type du nombre de pannes hebdomadaires $X$ d’un serveur sur $n = 20$ semaines : $0$ panne ($6$ fois), $1$ panne ($8$ fois), $2$ pannes ($4$ fois), $3$ pannes ($2$ fois).\n' +
              '• **Moyenne** : $\\sum n_j v_j = 6(0) + 8(1) + 4(2) + 2(3) = 0 + 8 + 8 + 6 = 22$, donc $\\bar{x} = 22 / 20 = 1{,}1$ panne/semaine.\n' +
              '• **Somme des carrés** : $\\sum n_j v_j^2 = 6(0) + 8(1) + 4(4) + 2(9) = 0 + 8 + 16 + 18 = 42$, donc $\\overline{X^2} = 42 / 20 = 2{,}1$.\n' +
              '• **König-Huygens** : $V(X) = 2{,}1 - (1{,}1)^2 = 2{,}1 - 1{,}21 = 0{,}89$, d’où $\\sigma(X) = \\sqrt{0{,}89} \\approx 0{,}943$ panne/semaine.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p3_q6',
              type: 'mcq',
              prompt: 'Une série discrète prend les valeurs $1, 2, 3$ avec les fréquences relatives $f_1 = 0{,}2$, $f_2 = 0{,}5$, $f_3 = 0{,}3$. Que valent sa moyenne $\\bar{x}$ et sa variance $V(X)$ ?',
              options: [
                '$\\bar{x} = 2{,}1$ et $V(X) = 0{,}49$.',
                '$\\bar{x} = 2{,}0$ et $V(X) = 0{,}50$.',
                '$\\bar{x} = 2{,}1$ et $V(X) = 4{,}90$.',
                '$\\bar{x} = 2{,}3$ et $V(X) = 0{,}49$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$\\bar{x} = 0{,}2(1) + 0{,}5(2) + 0{,}3(3) = 0{,}2 + 1{,}0 + 0{,}9 = 2{,}1$. Ensuite $\\overline{X^2} = 0{,}2(1) + 0{,}5(4) + 0{,}3(9) = 0{,}2 + 2{,}0 + 2{,}7 = 4{,}9$. Par König-Huygens : $V(X) = 4{,}9 - 2{,}1^2 = 4{,}9 - 4{,}41 = 0{,}49$ (soit $\\sigma = 0{,}7$).',
            },
          },
        ],
      }),

      // POINT 3.4
      makePoint({
        id: 'lmd_entd_l1_stat_ch3_p4',
        order: 4,
        title: 'Coefficient de variation, z-score, décomposition de variance et forme (asymétrie/aplatissement)',
        summary:
          'Comparer la dispersion relative via le CV, standardiser en z-score, décomposer la variance totale en intra + inter-groupes et qualifier l’asymétrie et l’aplatissement.',
        conceptExplanation:
          'Comparer directement deux écarts-types n’a aucun sens si les variables n’ont pas la même unité ou le même ordre de grandeur (un écart-type de $10\\,000$ F CFA est énorme sur un produit à $15\\,000$ F, mais minuscule sur un immeuble à $100$ millions !). Quatre outils avancés achèvent la description univariée :\n' +
          '• **Coefficient de variation ($CV$)** : $CV = \\frac{\\sigma}{\\bar{x}}$ (pour $\\bar{x} > 0$, souvent en $\\%$). C’est une dispersion **relative sans unité** : plus $CV$ est faible, plus la série est homogène (repère usuel : homogène si $CV < 15\\%–20\\%$, hétérogène si $CV > 30\\%$).\n' +
          '• **Standardisation (z-score)** : $z_i = \\frac{x_i - \\bar{x}}{\\sigma}$ transforme toute variable en variable centrée réduite ($\\bar{z} = 0$, $\\sigma_Z = 1$).\n' +
          '• **Décomposition de la variance** : si la population est partitionnée en groupes $g = 1, \\dots, G$, la variance totale se décompose exactement en **variance intra-groupes** (moyenne des variances) $+$ **variance inter-groupes** (variance des moyennes) : $V_{\\text{tot}} = V_{\\text{intra}} + V_{\\text{inter}}$.\n' +
          '• **Paramètres de forme** : **asymétrie** (skewness $\\gamma_1 = \\mu_3 / \\sigma^3$, coefficient de Yule ou de Pearson) et **aplatissement** (kurtosis $\\gamma_2 = \\mu_4 / \\sigma^4 - 3$).',
        formulas: [
          {
            name: 'Coefficient de variation et z-score',
            formula: 'CV = \\frac{\\sigma}{\\bar{x}} \\times 100\\% \\quad (\\bar{x} > 0), \\qquad z_i = \\frac{x_i - \\bar{x}}{\\sigma}',
            note: 'Un z-score de +2 signifie que l’individu se situe exactement à 2 écarts-types au-dessus de la moyenne.',
          },
          {
            name: 'Théorème de décomposition de la variance',
            formula: 'V_{\\text{tot}} = V_{\\text{intra}} + V_{\\text{inter}} = \\left(\\sum_{g} \\frac{n_g}{n} V_g\\right) + \\left(\\sum_{g} \\frac{n_g}{n} (\\bar{x}_g - \\bar{x})^2\\right)',
            note: 'Le rapport η² = V_inter / V_tot ∈ [0, 1] (rapport de corrélation) mesure la part de variance expliquée par le découpage en groupes !',
          },
        ],
        keyRule:
          'Pour comparer l’homogénéité de deux séries d’unités ou de moyennes différentes, utilise TOUJOURS le **coefficient de variation $CV = \\sigma / \\bar{x}$**, jamais $\\sigma$ seul !',
        workedExample: {
          title: 'Comparaison d’homogénéité par CV et classement par z-score',
          statement:
            '1) Les loyers du quartier A ont $\\bar{x}_A = 120\\,000$ F CFA et $\\sigma_A = 24\\,000$ F CFA ; ceux du quartier B ont $\\bar{x}_B = 400\\,000$ F CFA et $\\sigma_B = 60\\,000$ F CFA. Quel quartier a les loyers les plus homogènes ? 2) Un étudiant obtient $14/20$ en Algèbre ($\\bar{x} = 11, \\sigma = 2$) et $15/20$ en Marketing ($\\bar{x} = 13, \\sigma = 2{,}5$). Où s’est-il le mieux classé relativement ?',
          methodSteps: [
            '1) On calcule les CV : $CV_A = \\frac{24\\,000}{120\\,000} = 20\\%$ ; $CV_B = \\frac{60\\,000}{400\\,000} = 15\\%$. Bien que $\\sigma_B > \\sigma_A$, le quartier B est relativement plus homogène ($15\\% < 20\\%$) !',
            '2) On calcule les z-scores : en Algèbre $z_{\\text{Alg}} = \\frac{14 - 11}{2} = +1{,}50$ ; en Marketing $z_{\\text{Mkt}} = \\frac{15 - 13}{2{,}5} = +0{,}80$.',
            'En Algèbre, l’étudiant se situe à $1{,}5$ écart-type au-dessus de la moyenne contre seulement $0{,}8$ en Marketing.',
          ],
          conclusion:
            'Le quartier B est plus homogène en termes relatifs ; et la performance relative de l’étudiant est nettement meilleure en Algèbre malgré une note brute inférieure ($14$ vs $15$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'CV',
            stepTheme: 'blue',
            stepTitle: 'Coefficient de variation ($CV = \\sigma / \\bar{x}$) : comparer la dispersion relative',
            paragraphText:
              'Le **coefficient de variation** rapporte l’écart-type à la moyenne : $CV = \\frac{\\sigma}{\\bar{x}}$ (exprimé en $\\%$, défini uniquement pour des grandeurs strictement positives $\\bar{x} > 0$).\n' +
              '• **Invariant par changement d’échelle** : multiplier toutes les valeurs par $a > 0$ (ex. convertir des euros en F CFA, $\\times 655{,}957$) multiplie $\\sigma$ et $\\bar{x}$ par le même facteur $a$, qui se simplifie ! Le $CV$ est donc totalement **sans unité**.\n' +
              '• **Seuils d’interprétation usuels** : si $CV < 15\\%$, la série est très homogène (la moyenne est très représentative) ; entre $15\\%$ et $30\\%$, dispersion modérée ; si $CV > 30\\%$, la série est fortement hétérogène.\n' +
              '• **Attention** : ne jamais calculer de $CV$ sur une variable pouvant être négative ou de moyenne proche de $0$ (ex. températures en degrés Celsius ou rendements centrés sur $0$).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p4_q1',
              type: 'mcq',
              prompt: 'Les ventes mensuelles du produit P1 ont $\\bar{x}_1 = 500$ unités ($\\sigma_1 = 50$) et celles de P2 ont $\\bar{x}_2 = 80$ unités ($\\sigma_2 = 20$). Quel produit a les ventes les plus **régulières (homogènes)** ?',
              options: [
                'P2, car son écart-type $20$ est inférieur à $50$.',
                'P1, car $CV_1 = 50/500 = 10\\%$ est nettement plus faible que $CV_2 = 20/80 = 25\\%$.',
                'Ils ont exactement la même homogénéité.',
                'On ne peut pas comparer deux produits de volumes différents.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On compare les dispersions relatives : $CV_1 = 10\\%$ contre $CV_2 = 25\\%$. Les ventes de P1 fluctuent de $\\pm 10\\%$ autour de leur moyenne, elles sont donc bien plus régulières que celles de P2.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'z-score',
            stepTheme: 'green',
            stepTitle: 'Centrer et réduire une variable (z-score) : usage en évaluation et en Machine Learning',
            paragraphText:
              'La **standardisation** consiste à transformer chaque observation $x_i$ en sa cote centrée réduite (**z-score**) : $z_i = \\frac{x_i - \\bar{x}}{\\sigma}$.\n' +
              '• **Propriétés mathématiques** : par linéarité, la variable $Z$ vérifie toujours $\\bar{z} = 0$ et $\\sigma_Z = 1$ (sans unité).\n' +
              '• **Lecture immédiate** : $z_i > 0$ signifie au-dessus de la moyenne ; $z_i < 0$ en dessous ; $|z_i| > 2$ ou $|z_i| > 3$ signale une observation très atypique.\n' +
              '• **Rôle en Data Science** : avant d’appliquer des algorithmes de clustering (k-means) ou de régression pénalisée, on standardise toutes les variables pour éviter qu’une colonne en millions de F CFA n’écrase une colonne d’âge en dizaines d’années !',
            konanTip:
              'Pour retrouver $x_i$ à partir de son z-score, inverse la formule : $x_i = \\bar{x} + z_i \\cdot \\sigma$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p4_q2',
              type: 'mcq',
              prompt: 'Une variable de scores a pour moyenne $\\bar{x} = 100$ et pour écart-type $\\sigma = 15$. Quel est le **z-score** d’un individu obtenant $130$, et que signifie-t-il ?',
              options: [
                '$z = +2{,}0$ : l’individu se situe à $2$ écarts-types au-dessus de la moyenne.',
                '$z = +30$ : l’individu a $30$ points de plus.',
                '$z = +1{,}3$ : l’individu dépasse la moyenne de $30\\%$.',
                '$z = -2{,}0$ : l’individu est sous la moyenne.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$z = \\frac{130 - 100}{15} = \\frac{30}{15} = +2{,}0$, soit exactement $2$ écarts-types au-dessus de la moyenne de la population.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Intra + Inter',
            stepTheme: 'violet',
            stepTitle: 'Décomposition de la variance totale en variance intra-groupes et inter-groupes',
            paragraphText:
              'Lorsqu’une population est découpée en sous-groupes (ex. salariés par département, clients par ville), d’où provient la dispersion globale ? Le **théorème de décomposition de la variance** (base de l’ANOVA) répond exactement :\n' +
              '• **Variance intra-groupes ($V_{\\text{intra}}$)** : moyenne pondérée des variances internes à chaque groupe : $V_{\\text{intra}} = \\sum_g \\frac{n_g}{n} V_g$. Elle mesure la dispersion **à l’intérieur** des groupes.\n' +
              '• **Variance inter-groupes ($V_{\\text{inter}}$)** : variance pondérée des moyennes de groupes autour de la moyenne globale : $V_{\\text{inter}} = \\sum_g \\frac{n_g}{n}(\\bar{x}_g - \\bar{x})^2$. Elle mesure les **écarts entre groupes**.\n' +
              '• **Identité fondamentale** : $V_{\\text{tot}} = V_{\\text{intra}} + V_{\\text{inter}}$. Le **rapport de corrélation** $\\eta^2 = \\frac{V_{\\text{inter}}}{V_{\\text{tot}}} \\in [0, 1]$ indique quelle part de la variance totale est expliquée par l’appartenance au groupe !',
            keyRule:
              'Si $\\eta^2 = V_{\\text{inter}} / V_{\\text{tot}}$ est proche de $1$, les groupes sont très différents les uns des autres ; s’il est proche de $0$, les moyennes des groupes sont quasiment identiques.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p4_q3',
              type: 'mcq',
              prompt: 'Une entreprise regroupe deux agences de même taille ($n_1 = n_2 = 50$). L’agence 1 a $\\bar{x}_1 = 200$ ($V_1 = 300$) et l’agence 2 a $\\bar{x}_2 = 240$ ($V_2 = 500$). Que valent $V_{\\text{intra}}$, $V_{\\text{inter}}$ et $V_{\\text{tot}}$ ?',
              options: [
                '$V_{\\text{intra}} = 400$, $V_{\\text{inter}} = 400$, $V_{\\text{tot}} = 800$.',
                '$V_{\\text{intra}} = 400$, $V_{\\text{inter}} = 0$, $V_{\\text{tot}} = 400$.',
                '$V_{\\text{intra}} = 800$, $V_{\\text{inter}} = 400$, $V_{\\text{tot}} = 1\\,200$.',
                '$V_{\\text{intra}} = 400$, $V_{\\text{inter}} = 1\\,600$, $V_{\\text{tot}} = 2\\,000$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Moyenne globale $\\bar{x} = (200 + 240)/2 = 220$. $V_{\\text{intra}} = \\frac{300 + 500}{2} = 400$. $V_{\\text{inter}} = \\frac{(200-220)^2 + (240-220)^2}{2} = \\frac{400 + 400}{2} = 400$. Donc $V_{\\text{tot}} = 400 + 400 = 800$ ($\\eta^2 = 50\\%$).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Asymétrie',
            stepTheme: 'blue',
            stepTitle: 'Paramètres de forme : asymétrie (skewness) de Yule, Pearson et Fisher',
            paragraphText:
              'Pour quantifier précisément l’étalement à droite ou à gauche d’une distribution unimodale, trois coefficients d’asymétrie sans unité existent :\n' +
              '• **Règle d’ordre (Pearson)** : distribution symétrique $\\implies Mo = Me = \\bar{x}$ ; **asymétrie positive (étalée à droite)** $\\implies Mo < Me < \\bar{x}$ ; **asymétrie négative (étalée à gauche)** $\\implies \\bar{x} < Me < Mo$.\n' +
              '• **Coefficient de Yule** (robuste, basé sur les quartiles) : $A_Y = \\frac{(Q_3 - Me) - (Me - Q_1)}{Q_3 - Q_1} \\in [-1, 1]$.\n' +
              '• **Coefficient de Fisher (skewness $\\gamma_1$)** : $\\gamma_1 = \\frac{\\mu_3}{\\sigma^3}$ où $\\mu_3 = \\frac{1}{n}\\sum n_j(x_j - \\bar{x})^3$ est le moment centré d’ordre $3$. $\\gamma_1 > 0$ indique un étalement à droite, $\\gamma_1 < 0$ un étalement à gauche, et $\\gamma_1 = 0$ la symétrie.',
            formula: {
              name: 'Asymétrie de Yule et de Fisher (skewness)',
              formula: 'A_Y = \\frac{Q_3 + Q_1 - 2Me}{Q_3 - Q_1} \\in [-1, 1], \\qquad \\gamma_1 = \\frac{\\mu_3}{\\sigma^3}',
              note: 'Le coefficient de Pearson s’écrit aussi S_P = (x̄ − Mo) / σ ou 3(x̄ − Me) / σ.',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p4_q4',
              type: 'mcq',
              prompt: 'Une distribution unimodale présente $Mo = 165\\,000$, $Me = 180\\,000$ et $\\bar{x} = 225\\,000$ F CFA. Quel est le signe de son asymétrie et comment est-elle étalée ?',
              options: [
                'Asymétrie négative (étalée à gauche).',
                'Asymétrie positive (étalée à droite), car $Mo < Me < \\bar{x}$.',
                'Distribution parfaitement symétrique.',
                'Impossible à déterminer sans l’effectif total.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ordre $Mo < Me < \\bar{x}$ caractérise une asymétrie positive (étalement vers les grandes valeurs à droite, qui tirent la moyenne au-dessus de la médiane).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Aplatissement & Tchebychev',
            stepTheme: 'blue',
            stepTitle: 'Aplatissement (kurtosis $\\gamma_2$) et inégalité de Bienaymé-Tchebychev',
            paragraphText:
              'Au-delà de l’asymétrie, le moment centré d’ordre $4$ caractérise le poids des queues extrêmes par rapport à la loi normale (cloche de Gauss), et l’inégalité de Bienaymé-Tchebychev borne la dispersion de toute série.\n' +
              '• **Excès d’aplatissement de Fisher ($\\gamma_2$)** : $\\gamma_2 = \\frac{\\mu_4}{\\sigma^4} - 3$ (référence : la loi normale a $\\mu_4 / \\sigma^4 = 3$, donc $\\gamma_2 = 0$).\n' +
              '  – $\\gamma_2 > 0$ (**leptokurtique**) : pic plus pointu et **queues plus épaisses** (risque accru de krachs extrêmes en finance !).\n' +
              '  – $\\gamma_2 = 0$ (**mésokurtique**) : profil proche de la courbe en cloche normale.\n' +
              '  – $\\gamma_2 < 0$ (**platykurtique**) : profil plus aplati et queues légères.\n' +
              '• **Inégalité de Bienaymé-Tchebychev** : quelle que soit la forme de la distribution, la proportion d’individus s’écartant de la moyenne de plus de $k$ écarts-types est toujours $\\le \\frac{1}{k^2}$ (ainsi, au moins $1 - 1/4 = 75\\%$ des données sont dans $[\\bar{x} - 2\\sigma, \\bar{x} + 2\\sigma]$, et au moins $88{,}9\\%$ dans $\\bar{x} \\pm 3\\sigma$ !).',
            formula: {
              name: 'Kurtosis de Fisher et Bienaymé-Tchebychev',
              formula: '\\gamma_2 = \\frac{\\mu_4}{\\sigma^4} - 3, \\qquad P\\big(|X - \\bar{x}| \\ge k\\sigma\\big) \\le \\frac{1}{k^2} \\quad (k > 1)',
              note: 'Pour une distribution normale (en cloche), ~68 % sont dans x̄ ± σ, ~95 % dans x̄ ± 2σ et ~99,7 % dans x̄ ± 3σ.',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p4_q5',
              type: 'mcq',
              prompt: 'Sans faire aucune hypothèse de normalité sur une série statistique, quelle proportion **minimale** des observations appartient obligatoirement à l’intervalle $[\\bar{x} - 2\\sigma ;\\ \\bar{x} + 2\\sigma]$ d’après l’inégalité de Bienaymé-Tchebychev ?',
              options: [
                'Au moins $50\\%$.',
                'Au moins $75\\%$ (car $1 - 1/2^2 = 3/4 = 75\\%$).',
                'Au moins $95\\%$.',
                'Au moins $68\\%$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour $k = 2$, Bienaymé-Tchebychev garantit $P(|X - \\bar{x}| \\ge 2\\sigma) \\le \\frac{1}{2^2} = 0{,}25$, donc au moins $1 - 0{,}25 = 75\\%$ des observations se situent dans $[\\bar{x} - 2\\sigma, \\bar{x} + 2\\sigma]$. (Le chiffre $95\\%$ n’est valable que pour une distribution normale.)',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Diagnostic complet',
            stepTheme: 'slate',
            stepTitle: 'Synthèse univariée complète d’une série de revenus ou de loyers',
            paragraphText:
              'Un rapport statistique de niveau professionnel ne livre jamais un seul chiffre isolé : il combine quatre dimensions complémentaires.\n' +
              '• **Exemple sur les loyers abidjanais ($n = 180$)** : $Mo \\approx 160\\,000$ F, $Me = 165\\,000$ F, $\\bar{x} \\approx 215\\,000$ F ; $Q_1 = 116\\,700$ F, $Q_3 = 233\\,300$ F ($IQR = 116\\,600$ F) ; $\\sigma \\approx 170\\,000$ F $\\implies CV \\approx 79\\%$.\n' +
              '• **Lecture managériale complète** :\n' +
              '  1. *Position* : la moitié des loyers est inférieure à $165\\,000$ F, mais la moyenne monte à $215\\,000$ F.\n' +
              '  2. *Dispersion* : $CV = 79\\%$ révèle un marché très hétérogène (forts écarts entre quartiers populaires et résidentiels).\n' +
              '  3. *Forme* : $Mo < Me < \\bar{x}$ et $A_Y = \\frac{233{,}3 + 116{,}7 - 330}{116{,}6} = +0{,}17 > 0$ confirment une nette asymétrie positive (longue traîne vers les loyers de standing).',
            konanTip:
              'À l’examen, conclus toujours un exercice de statistique descriptive univariée par une phrase de synthèse mêlant **position** ($\\bar{x}, Me$), **homogénéité** ($CV$) et **forme** (asymétrie) !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p4_q6',
              type: 'mcq',
              prompt: 'On mesure sur une distribution : $Q_1 = 20$, $Me = 25$, $Q_3 = 40$. Que vaut le coefficient d’asymétrie de **Yule** $A_Y = \\frac{Q_3 + Q_1 - 2Me}{Q_3 - Q_1}$ ?',
              options: [
                '$A_Y = +0{,}50$ (asymétrie positive, étalement à droite).',
                '$A_Y = -0{,}50$ (asymétrie négative, étalement à gauche).',
                '$A_Y = 0$ (symétrie parfaite).',
                '$A_Y = +1{,}00$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$A_Y = \\frac{40 + 20 - 2(25)}{40 - 20} = \\frac{60 - 50}{20} = \\frac{10}{20} = +0{,}50 > 0$, indiquant une asymétrie positive marquée vers la droite.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 4 : Statistique bivariée : contingence, corrélation et régression
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_stat_ch4',
    subjectId: 'lmd_stat_descriptive',
    gradeLevel: 'lmd_entd_l1',
    order: 4,
    officialVolumeHours: 14,
    contentVersion: 2,
    source: 'ENTD L1 — Statistique Descriptive',
    title: 'Chapitre 4 — Statistique bivariée : contingence, corrélation et régression linéaire',
    summary:
      'Tableau de contingence, distributions marginales et conditionnelles, indépendance et Khi-deux ($\\chi^2$), nuage de points, covariance, corrélation de Bravais-Pearson ($r$), droite des moindres carrés (MCO), $R^2$, corrélation de rangs de Spearman ($r_S$) et pièges de corrélation.',
    points: [
      // POINT 4.1
      makePoint({
        id: 'lmd_entd_l1_stat_ch4_p1',
        order: 1,
        title: 'Tableau de contingence, distributions marginales, conditionnelles et indépendance',
        summary:
          'Construire et lire un tableau croisé d’effectifs, calculer profils marginaux et conditionnels, tester l’indépendance par effectifs théoriques et statistique du Khi-deux.',
        conceptExplanation:
          'La **statistique bivariée** étudie simultanément deux variables $X$ et $Y$ mesurées sur les mêmes $n$ individus afin de détecter une éventuelle **liaison** (on parle d’**association** pour deux variables qualitatives et de **corrélation** pour deux quantitatives).\n\n' +
          'Lorsque $X$ (modalités $x_1, \\dots, x_p$) et $Y$ (modalités $y_1, \\dots, y_q$) sont croisées dans un **tableau de contingence** à double entrée :\n' +
          '• **Effectif conjoint $n_{ij}$** : nombre d’individus présentant simultanément $X = x_i$ et $Y = y_j$ ($f_{ij} = n_{ij} / n$).\n' +
          '• **Distributions marginales** : totaux de lignes $n_{i\\bullet} = \\sum_j n_{ij}$ (fréquence $f_{i\\bullet}$) et totaux de colonnes $n_{\\bullet j} = \\sum_i n_{ij}$ (fréquence $f_{\\bullet j}$).\n' +
          '• **Distributions conditionnelles (profils)** : répartition d’une variable sachant la modalité fixée de l’autre — profil ligne $f_{j|i} = \\frac{n_{ij}}{n_{i\\bullet}} = P(Y = y_j \\mid X = x_i)$ et profil colonne $f_{i|j} = \\frac{n_{ij}}{n_{\\bullet j}} = P(X = x_i \\mid Y = y_j)$.\n' +
          '• **Indépendance statistique** : $X$ et $Y$ sont indépendantes ssi pour tout couple $(i, j)$, $f_{ij} = f_{i\\bullet} \\cdot f_{\\bullet j}$ (ou $n_{ij} = e_{ij} = \\frac{n_{i\\bullet} n_{\\bullet j}}{n}$, autrement dit tous les profils lignes sont identiques à la marge).',
        formulas: [
          {
            name: 'Profils conditionnels et effectifs théoriques d’indépendance',
            formula: 'f_{j|i} = \\frac{n_{ij}}{n_{i\\bullet}}, \\qquad f_{i|j} = \\frac{n_{ij}}{n_{\\bullet j}}, \\qquad e_{ij} = \\frac{n_{i\\bullet} \\times n_{\\bullet j}}{n}',
            note: 'Sous indépendance parfaite, chaque case observée nᵢⱼ coïncide exactement avec l’effectif théorique eᵢⱼ.',
          },
          {
            name: 'Statistique du Khi-deux (χ²) et V de Cramér',
            formula: '\\chi^2 = \\sum_{i=1}^{p}\\sum_{j=1}^{q} \\frac{(n_{ij} - e_{ij})^2}{e_{ij}}, \\qquad V = \\sqrt{\\frac{\\chi^2}{n \\cdot \\min(p - 1,\\ q - 1)}} \\in [0, 1]',
            note: 'χ² = 0 ⇔ indépendance exacte ; V de Cramér normalise l’intensité de l’association entre 0 (indépendance) et 1 (liaison parfaite).',
          },
        ],
        keyRule:
          'Ne confonds JAMAIS $P(X = x_i \\mid Y = y_j) = \\frac{n_{ij}}{n_{\\bullet j}}$ (divisé par le total de la **colonne** $j$) avec $P(Y = y_j \\mid X = x_i) = \\frac{n_{ij}}{n_{i\\bullet}}$ (divisé par le total de la **ligne** $i$) !',
        workedExample: {
          title: 'Analyse d’un tableau de contingence : Navigateur web × Système d’exploitation',
          statement:
            'Sur $n = 113\\,457$ visiteurs d’un site web, le tableau croise Navigateur ($X$) et Système d’exploitation ($Y$) : sous Windows ($95\\,987$ au total) on compte $668$ Safari ; sous Mac ($12\\,057$ au total) on compte $6\\,416$ Safari et $1\\,186$ Chrome ; sous Linux ($5\\,413$ au total) on compte $0$ Safari. Total Safari $= 7\\,084$. Calculer : 1) $P(Y = \\text{Windows})$ ; 2) $P(X = \\text{Chrome} \\mid Y = \\text{Mac})$ ; 3) $P(Y = \\text{Windows} \\mid X = \\text{Safari})$.',
          methodSteps: [
            '1) Proportion marginale sous Windows : $P(Y = \\text{Windows}) = \\frac{95\\,987}{113\\,457} \\approx 84{,}60\\%$.',
            '2) « Parmi les utilisateurs de Mac ($Y = \\text{Mac}$), quelle proportion utilise Chrome ? » On divise par le total de la colonne Mac : $P(X = \\text{Chrome} \\mid Y = \\text{Mac}) = \\frac{1\\,186}{12\\,057} \\approx 9{,}84\\%$.',
            '3) « Parmi les utilisateurs de Safari ($X = \\text{Safari}$), quelle proportion est sous Windows ? » On divise par le total de la ligne Safari : $P(Y = \\text{Windows} \\mid X = \\text{Safari}) = \\frac{668}{7\\,084} \\approx 9{,}43\\%$ (contre $90{,}57\\%$ sous Mac !).',
          ],
          conclusion:
            'Le profil de Safari ($90{,}6\\%$ Mac contre $10{,}6\\%$ de Mac en moyenne globale) prouve une très forte dépendance entre le navigateur et le système d’exploitation.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Contingence',
            stepTheme: 'blue',
            stepTitle: 'Lire un tableau de contingence à double entrée ($n_{ij}$ et marges)',
            paragraphText:
              'Un **tableau de contingence** (ou tableau croisé) résume les observations simultanées de deux variables $X$ (en lignes) et $Y$ (en colonnes) sur une même population de taille $n$.\n' +
              '• Chaque cellule intérieure $(i, j)$ contient l’**effectif conjoint $n_{ij}$** (nombre d’individus vérifiant à la fois $X = x_i$ ET $Y = y_j$).\n' +
              '• La dernière colonne donne les **effectifs marginaux de $X$** ($n_{i\\bullet} = \\sum_j n_{ij}$) ; la dernière ligne donne les **effectifs marginaux de $Y$** ($n_{\\bullet j} = \\sum_i n_{ij}$).\n' +
              '• La case en bas à droite vérifie $\\sum_i n_{i\\bullet} = \\sum_j n_{\\bullet j} = n$.\n' +
              'Observe ci-dessous le tableau complet croisant navigateur et système d’exploitation sur $113\\,457$ visiteurs.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Tableau de contingence : Navigateur (X) × Système d’exploitation (Y)',
              caption: 'Les totaux de lignes et de colonnes constituent les distributions marginales de X et de Y.',
              tableData: {
                headers: ['Navigateur $X \\setminus Y$', 'Windows', 'Mac', 'Linux', 'Total $n_{i\\bullet}$'],
                rows: [
                  ['Chrome', '$14\\,103$', '$1\\,186$', '$427$', '$15\\,716$'],
                  ['Firefox', '$30\\,853$', '$4\\,392$', '$3\\,234$', '$38\\,479$'],
                  ['Internet Explorer', '$47\\,389$', '$23$', '$0$', '$47\\,412$'],
                  ['Safari', '$668$', '$6\\,416$', '$0$', '$7\\,084$'],
                  ['Autres', '$2\\,974$', '$40$', '$1\\,752$', '$4\\,766$'],
                  ['Total $n_{\\bullet j}$', '$95\\,987$', '$12\\,057$', '$5\\,413$', '$113\\,457$'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p1_q1',
              type: 'mcq',
              prompt: 'D’après le tableau de contingence ci-dessus, quelle est la **fréquence conjointe** $f_{\\text{Safari}, \\text{Mac}}$ et la **fréquence marginale** $f_{\\text{Safari}, \\bullet}$ ?',
              options: [
                '$f_{\\text{Safari}, \\text{Mac}} = \\frac{6\\,416}{113\\,457} \\approx 5{,}65\\%$ et $f_{\\text{Safari}, \\bullet} = \\frac{7\\,084}{113\\,457} \\approx 6{,}24\\%$.',
                '$f_{\\text{Safari}, \\text{Mac}} = \\frac{6\\,416}{12\\,057} \\approx 53{,}21\\%$ et $f_{\\text{Safari}, \\bullet} = 6{,}24\\%$.',
                '$f_{\\text{Safari}, \\text{Mac}} = \\frac{6\\,416}{7\\,084} \\approx 90{,}57\\%$ et $f_{\\text{Safari}, \\bullet} = 53{,}21\\%$.',
                '$f_{\\text{Safari}, \\text{Mac}} = 5{,}65\\%$ et $f_{\\text{Safari}, \\bullet} = 10{,}63\\%$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Une fréquence conjointe ($f_{ij}$) comme une fréquence marginale ($f_{i\\bullet}$) se rapporte toujours à l’effectif total $n = 113\\,457$ : $6\\,416/113\\,457 \\approx 5{,}65\\%$ et $7\\,084/113\\,457 \\approx 6{,}24\\%$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Distributions marginales',
            stepTheme: 'green',
            stepTitle: 'Extraire les distributions marginales (moyenne et variance marginales)',
            paragraphText:
              'Les **distributions marginales** s’obtiennent en oubliant l’une des deux variables (en sommant les lignes ou les colonnes).\n' +
              '• **Marge de $X$** : couples $(x_i, n_{i\\bullet})$ pour $i = 1, \\dots, p$. Lorsque $X$ est quantitative, on retrouve $\\bar{x} = \\frac{1}{n}\\sum_i n_{i\\bullet} x_i$ et $V(X) = \\frac{1}{n}\\sum_i n_{i\\bullet} x_i^2 - \\bar{x}^2$.\n' +
              '• **Marge de $Y$** : couples $(y_j, n_{\\bullet j})$ pour $j = 1, \\dots, q$.\n' +
              '• **Limitation majeure** : les deux distributions marginales seules ne disent **RIEN** sur le lien entre $X$ et $Y$ ! Deux tableaux très différents (l’un indépendant, l’autre fortement lié) peuvent avoir exactement les mêmes marges.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p1_q2',
              type: 'mcq',
              prompt: 'Dans un tableau de contingence $2 \\times 2$ sur $200$ clients, $120$ sont abonnés Premium et $80$ sont Standard ; par ailleurs $100$ résident à Abidjan et $100$ hors Abidjan. Que peut-on dire de la liaison entre abonnement et résidence ?',
              options: [
                'Les deux variables sont forcément indépendantes.',
                'Les deux variables sont forcément liées.',
                'On ne peut rien conclure sans connaître les effectifs conjoints $n_{ij}$ à l’intérieur du tableau, car les marges seules ne déterminent pas la liaison.',
                'Il y a forcément $60$ clients Premium à Abidjan.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Connaître uniquement les totaux marginaux ($120, 80$ et $100, 100$) laisse une infinité de tableaux intérieurs possibles : $(60, 60; 40, 40)$ correspond à l’indépendance, mais $(100, 20; 0, 80)$ correspond à une très forte dépendance !',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'methode',
            stepBadge: 'Profils conditionnels',
            stepTheme: 'green',
            stepTitle: 'Calculer et comparer les distributions conditionnelles (profils lignes / colonnes)',
            paragraphText:
              'La **distribution conditionnelle** fixe une sous-population (une ligne ou une colonne précise) et ramène son total à $100\\%$ afin de comparer des groupes de tailles inégales.\n' +
              '• **Profil colonne ($X \\mid Y = y_j$)** : on divise chaque case de la colonne $j$ par le total de cette colonne $n_{\\bullet j}$ : $f_{i|j} = \\frac{n_{ij}}{n_{\\bullet j}}$. Exemple : parmi les utilisateurs Mac ($12\\,057$), Safari pèse $6\\,416 / 12\\,057 = 53{,}21\\%$ ; parmi les utilisateurs Windows ($95\\,987$), Safari ne pèse que $668 / 95\\,987 = 0{,}70\\%$ !\n' +
              '• **Profil ligne ($Y \\mid X = x_i$)** : on divise chaque case de la ligne $i$ par $n_{i\\bullet}$ : $f_{j|i} = \\frac{n_{ij}}{n_{i\\bullet}}$.\n' +
              '• **Moyenne et écart-type conditionnels** : si $Y$ est quantitative (ex. taille des enfants $Y$ sachant la tranche de taille des parents $X \\in ]68 ; 70]$), on extrait la ligne correspondante et on applique les formules univariées classiques à cette sous-population !',
            konanTip:
              'Repère le mot-clé « **Parmi les…** » ou « **Sachant que…** » : c’est l’effectif de CE sous-groupe précis qui va au **dénominateur** !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p1_q3',
              type: 'mcq',
              prompt: 'Dans une enquête sur $100$ clients ($60$ femmes, $40$ hommes), $36$ femmes et $10$ hommes ont acheté le produit A (soit $46$ acheteurs au total). Quelle est la proportion conditionnelle d’acheteurs de A **parmi les hommes** ($P(A \\mid \\text{Homme})$) ?',
              options: [
                '$10 / 100 = 10\\%$',
                '$10 / 40 = 25\\%$',
                '$10 / 46 \\approx 21{,}7\\%$',
                '$46 / 100 = 46\\%$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Parmi les hommes » fixe le dénominateur à l’effectif total des hommes ($40$) : $P(A \\mid \\text{Homme}) = 10/40 = 25\\%$ (alors que $10/46$ est $P(\\text{Homme} \\mid A)$ et $10/100$ est la fréquence conjointe).',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Indépendance',
            stepTheme: 'violet',
            stepTitle: 'Condition exacte d’indépendance statistique et effectifs théoriques $e_{ij}$',
            paragraphText:
              'Quand dit-on que deux variables $X$ et $Y$ sont **statistiquement indépendantes** ? Intuitivement, lorsque connaître la modalité de $X$ n’apporte **aucune information** sur la distribution de $Y$.\n' +
              '• **Trois formulations strictement équivalentes** :\n' +
              '  1. **Égalité des profils** : tous les profils lignes sont identiques à la distribution marginale de $Y$ ($\\forall i, j,\\ f_{j|i} = f_{\\bullet j}$).\n' +
              '  2. **Factorisation des fréquences** : $\\forall i, j,\\ f_{ij} = f_{i\\bullet} \\times f_{\\bullet j}$.\n' +
              '  3. **Effectifs théoriques d’indépendance** : $\\forall i, j,\\ n_{ij} = e_{ij} = \\frac{n_{i\\bullet} \\times n_{\\bullet j}}{n}$.\n' +
              '• **Application** : si $40\\%$ des visiteurs achètent sur mobile ($f_{\\bullet 1} = 0{,}40$) et $50\\%$ sont des nouveaux clients ($f_{1\\bullet} = 0{,}50$), sous indépendance la case (Nouveau, Mobile) doit contenir $0{,}50 \\times 0{,}40 = 20\\%$ du total.',
            keyRule:
              'Pour vérifier l’indépendance dans un tableau de contingence, calcule $e_{ij} = \\frac{\\text{Total ligne } i \\times \\text{Total colonne } j}{\\text{Total général } n}$ et compare-le à l’effectif observé $n_{ij}$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p1_q4',
              type: 'mcq',
              prompt: 'Dans un tableau de contingence portant sur $n = 200$ individus, la ligne 1 totalise $n_{1\\bullet} = 80$ et la colonne 2 totalise $n_{\\bullet 2} = 50$. Quel devrait être l’effectif théorique $e_{12}$ dans la case $(1, 2)$ sous hypothèse d’**indépendance** ?',
              options: [
                '$15$',
                '$20$',
                '$25$',
                '$40$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sous indépendance, $e_{12} = \\frac{n_{1\\bullet} \\times n_{\\bullet 2}}{n} = \\frac{80 \\times 50}{200} = \\frac{4\\,000}{200} = 20$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Khi-deux χ²',
            stepTheme: 'violet',
            stepTitle: 'Quantifier la dépendance entre variables qualitatives : Khi-deux ($\\chi^2$) et $V$ de Cramér',
            paragraphText:
              'Sur des données réelles, les effectifs observés $n_{ij}$ ne coïncident presque jamais au chiffre près avec les $e_{ij}$. Comment mesurer l’intensité de l’écart à l’indépendance ?\n' +
              '• **Distance du Khi-deux ($\\chi^2$)** : on somme sur toutes les cases les carrés des écarts relatifs :\n' +
              '  $$\\chi^2 = \\sum_{i=1}^p \\sum_{j=1}^q \\frac{(n_{ij} - e_{ij})^2}{e_{ij}} \\ge 0$$\n' +
              '  Plus $\\chi^2$ est proche de $0$, plus $X$ et $Y$ sont proches de l’indépendance ; plus $\\chi^2$ est grand, plus la liaison est marquée.\n' +
              '• **Limite du $\\chi^2$ brut** : si l’on multiplie tous les effectifs d’un tableau par $10$, $\\chi^2$ est multiplié par $10$ sans que la force du lien n’ait changé !\n' +
              '• **Solution — Le $V$ de Cramér** : $V = \\sqrt{\\frac{\\chi^2}{n \\cdot \\min(p - 1, q - 1)}} \\in [0, 1]$, indépendant de $n$ ($V = 0$ : indépendance ; $V = 1$ : liaison fonctionnelle totale).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p1_q5',
              type: 'mcq',
              prompt: 'Dans un tableau $2 \\times 2$ sur $n = 100$ individus, les effectifs observés sont $(35, 15 ;\\ 15, 35)$ (marges toutes égales à $50$, donc tous les $e_{ij} = 25$). Que valent $\\chi^2$ et le $V$ de Cramér ?',
              options: [
                '$\\chi^2 = 0$ et $V = 0$.',
                '$\\chi^2 = 16$ et $V = \\sqrt{16 / (100 \\times 1)} = 0{,}40$.',
                '$\\chi^2 = 40$ et $V = 0{,}63$.',
                '$\\chi^2 = 4$ et $V = 0{,}20$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sur chaque case, $|n_{ij} - e_{ij}| = 10$, donc $\\frac{(n_{ij} - e_{ij})^2}{e_{ij}} = \\frac{100}{25} = 4$. Sur les $4$ cases, $\\chi^2 = 4 \\times 4 = 16$. Comme $\\min(2-1, 2-1) = 1$, $V = \\sqrt{16/100} = 0{,}40$ (liaison modérée à forte).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Diagnostic bivarié',
            stepTheme: 'slate',
            stepTitle: 'Interpréter un tableau croisé en marketing digital (taux de conversion par canal)',
            paragraphText:
              'Un site e-commerce compare $2$ canaux d’acquisition sur $500$ visiteurs : Canal Social ($300$ visiteurs dont $30$ achètent, $270$ n’achètent pas) et Canal Recherche ($200$ visiteurs dont $40$ achètent, $160$ n’achètent pas). Total acheteurs $= 70$ ($14\\%$), non-acheteurs $= 430$ ($86\\%$).\n' +
              '• **Profils lignes (taux de conversion par canal)** :\n' +
              '  – Social : $30 / 300 = 10\\%$ d’acheteurs ;\n' +
              '  – Recherche : $40 / 200 = 20\\%$ d’acheteurs.\n' +
              '• **Effectifs théoriques sous indépendance** : pour Social, $e_{11} = 300 \\times 70 / 500 = 42$ (observé : $30$, sous-représenté) ; pour Recherche, $e_{21} = 200 \\times 70 / 500 = 28$ (observé : $40$, sur-représenté).\n' +
              '• **Conclusion métier** : le canal Recherche convertit **deux fois mieux** que le canal Social ($20\\%$ vs $10\\%$), signe d’une dépendance nette entre canal et achat.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p1_q6',
              type: 'mcq',
              prompt: 'Dans l’exemple précédent ($300$ Social avec $30$ achats ; $200$ Recherche avec $40$ achats ; total $500$), pourquoi un tuyau d’orgue des **profils conditionnels** ($10\\%$ vs $20\\%$) révèle-t-il l’absence d’indépendance ?',
              options: [
                'Parce que les hauteurs des barres d’achat ($10\\%$ et $20\\%$) diffèrent nettement d’un canal à l’autre au lieu d’être toutes égales au taux marginal $14\\%$.',
                'Parce que $300 \\neq 200$.',
                'Parce que $10\\% + 20\\% \\neq 100\\%$.',
                'Parce que le tableau comporte $2$ lignes.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Sous indépendance, les taux de conversion conditionnels de chaque canal seraient identiques au taux marginal global ($14\\%$). L’écart marqué ($10\\%$ vs $20\\%$) traduit une liaison entre le canal et l’achat.',
            },
          },
        ],
      }),

      // POINT 4.2
      makePoint({
        id: 'lmd_entd_l1_stat_ch4_p2',
        order: 2,
        title: 'Nuage de points, covariance et coefficient de corrélation de Bravais-Pearson ($r$)',
        summary:
          'Interpréter un nuage de points, calculer la covariance par la formule développée et mesurer sens et intensité d’une liaison linéaire par le coefficient r de Pearson.',
        conceptExplanation:
          'Pour deux variables **quantitatives** $X$ et $Y$ mesurées sur $n$ individus appariés $(x_i, y_i)$, l’analyse commence toujours par le **nuage de points** (*scatter-plot*) dans le plan, centré sur le **point moyen (barycentre)** $G(\\bar{x}, \\bar{y})$.\n\n' +
          '• **Covariance** : $\\mathrm{Cov}(X, Y) = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y}) = \\left(\\frac{1}{n}\\sum_{i=1}^n x_i y_i\\right) - \\bar{x}\\bar{y}$.\n' +
          '  – $\\mathrm{Cov}(X, Y) > 0$ : $X$ et $Y$ tendent à varier dans le **même sens** (liaison positive).\n' +
          '  – $\\mathrm{Cov}(X, Y) < 0$ : $X$ et $Y$ tendent à varier en **sens opposé** (liaison négative).\n' +
          '  – Mais la covariance dépend des **unités de mesure** : impossible de juger si $\\mathrm{Cov} = 178$ est « fort » ou « faible » !\n' +
          '• **Coefficient de corrélation linéaire de Bravais-Pearson ($r$)** : on normalise la covariance par le produit des écarts-types :\n' +
          '  $$r(X, Y) = \\frac{\\mathrm{Cov}(X, Y)}{\\sigma_X \\, \\sigma_Y} \\in [-1, 1]$$\n' +
          '  Sans unité, invariant par changement d’échelle positif : $|r| = 1 \\iff$ alignement linéaire parfait ; $r = 0 \\iff$ absence de liaison **linéaire**.',
        formulas: [
          {
            name: 'Covariance (définition et formule de calcul développée)',
            formula: '\\mathrm{Cov}(X, Y) = \\frac{1}{n}\\sum_{i=1}^{n} (x_i - \\bar{x})(y_i - \\bar{y}) = \\left(\\frac{1}{n}\\sum_{i=1}^{n} x_i y_i\\right) - \\bar{x}\\bar{y}',
            note: 'Remarquez que Cov(X, X) = V(X) et que Cov(X, Y) = Cov(Y, X) (symétrie).',
          },
          {
            name: 'Coefficient de corrélation linéaire de Bravais-Pearson',
            formula: 'r(X, Y) = \\frac{\\mathrm{Cov}(X, Y)}{\\sigma_X \\, \\sigma_Y} = \\frac{\\mathrm{cov}^*(x, y)}{s_x^* \\, s_y^*} \\in [-1, 1]',
            note: 'Les facteurs 1/n (descriptif) ou 1/(n−1) (échantillon) se simplifient exactement : r a la MÊME valeur dans les deux conventions !',
          },
        ],
        keyRule:
          'Le coefficient $r$ est **toujours compris entre $-1$ et $+1$** : si ton calcul donne $|r| > 1$, c’est mathématiquement impossible (inégalité de Cauchy-Schwarz) — vérifie immédiatement tes carrés et produits !',
        workedExample: {
          title: 'Corrélation entre nombre de jours de pluie (X) et hauteur de pluie (Y)',
          statement:
            'Sur $n = 8$ années relevées tous les 5 ans, on obtient : $\\bar{x} = 175{,}125$ jours ($\\sigma_X = 18{,}306$), $\\bar{y} = 658{,}750$ mm ($\\sigma_Y = 115{,}670$), et $\\sum x_i y_i = 934\\,435$. Calculer $\\mathrm{Cov}(X, Y)$ et $r(X, Y)$, puis interpréter.',
          methodSteps: [
            'Moyenne des produits : $\\frac{1}{8}\\sum x_i y_i = \\frac{934\\,435}{8} = 116\\,804{,}375$.',
            'Produit des moyennes : $\\bar{x}\\bar{y} = 175{,}125 \\times 658{,}750 = 115\\,363{,}594$.',
            'Covariance : $\\mathrm{Cov}(X, Y) = 116\\,804{,}375 - 115\\,363{,}594 = 1\\,440{,}781$ (positive : plus il y a de jours de pluie, plus la hauteur annuelle tend à augmenter).',
            'Corrélation : $r(X, Y) = \\frac{1\\,440{,}781}{18{,}306 \\times 115{,}670} = \\frac{1\\,440{,}781}{2\\,117{,}455} \\approx +0{,}680$.',
          ],
          conclusion:
            'Avec $r = +0{,}68$, il existe une liaison linéaire positive modérément forte entre le nombre de jours de pluie et la hauteur totale de précipitations.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Nuage de points',
            stepTheme: 'blue',
            stepTitle: 'Tracer et diagnostiquer visuellement un nuage de points avant tout calcul',
            paragraphText:
              'Règle d’or de tout statisticien : **trace toujours le nuage de points avant de calculer $r$** ! L’œil humain détecte en une seconde ce qu’un nombre seul peut cacher.\n' +
              '• **Nuage étiré du bas-gauche vers le haut-droite** : liaison linéaire **positive** ($r > 0$, proche de $+1$ si très étroit).\n' +
              '• **Nuage étiré du haut-gauche vers le bas-droite** : liaison linéaire **négative** ($r < 0$, proche de $-1$ si très étroit).\n' +
              '• **Nuage rond / informe sans direction privilégiée** : absence de liaison apparente ($r \\approx 0$).\n' +
              '• **Nuage en courbe nette (parabole en U, exponentielle, nuage scindé en deux groupes)** : liaison **non linéaire** ou présence de sous-populations — le coefficient $r$ seul sera trompeur !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p2_q1',
              type: 'mcq',
              prompt: 'Un nuage de points $(x_i, y_i)$ est très étroitement étiré en diagonale du **haut-gauche vers le bas-droite**. Quelle valeur approximative attend-on pour le coefficient de corrélation linéaire $r$ ?',
              options: [
                '$r \\approx +0{,}92$',
                '$r \\approx 0{,}00$',
                '$r \\approx -0{,}92$',
                '$r \\approx -2{,}50$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Une diagonale descendante (quand $X$ augmente, $Y$ diminue) donne $r < 0$ ; le fait que le nuage soit très étroitement étiré indique une forte intensité linéaire, donc $r$ proche de $-1$ (ex. $-0{,}92$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Covariance',
            stepTheme: 'blue',
            stepTitle: 'Sens géométrique des 4 quadrants et formule développée de la covariance',
            paragraphText:
              'Traçons deux axes passant par le point moyen $G(\\bar{x}, \\bar{y})$ : le plan est découpé en **4 quadrants**.\n' +
              '• **Quadrants Nord-Est ($x_i > \\bar{x}, y_i > \\bar{y}$) et Sud-Ouest ($x_i < \\bar{x}, y_i < \\bar{y}$)** : le produit $(x_i - \\bar{x})(y_i - \\bar{y})$ est **positif** !\n' +
              '• **Quadrants Nord-Ouest et Sud-Est** : un écart est positif et l’autre négatif, donc $(x_i - \\bar{x})(y_i - \\bar{y})$ est **négatif** !\n' +
              '• **Signe de la covariance** : $\\mathrm{Cov}(X, Y) = \\frac{1}{n}\\sum (x_i - \\bar{x})(y_i - \\bar{y})$ fait la balance entre ces quadrants : positive si la majorité des points peuplent NE et SO, négative s’ils peuplent NO et SE.\n' +
              '• **Formule rapide (König-Huygens bivariée)** : $\\mathrm{Cov}(X, Y) = \\left(\\frac{1}{n}\\sum x_i y_i\\right) - \\bar{x}\\bar{y}$.',
            konanTip:
              'La covariance peut être **positive, négative ou nulle**, contrairement à la variance qui est toujours $\\ge 0$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p2_q2',
              type: 'mcq',
              prompt: 'Sur $n = 5$ couples $(x_i, y_i)$, on donne $\\bar{x} = 4$, $\\bar{y} = 10$ et $\\sum_{i=1}^5 x_i y_i = 230$. Que vaut la covariance descriptive $\\mathrm{Cov}(X, Y)$ ?',
              options: [
                '$+6$',
                '$-6$',
                '$+46$',
                '$+190$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Par la formule développée : $\\mathrm{Cov}(X, Y) = \\frac{\\sum x_i y_i}{n} - \\bar{x}\\bar{y} = \\frac{230}{5} - 4 \\times 10 = 46 - 40 = +6$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Bravais-Pearson r',
            stepTheme: 'violet',
            stepTitle: 'Pourquoi diviser par $\\sigma_X \\sigma_Y$ : l’invariance d’échelle de $r$',
            paragraphText:
              'Supposons que la covariance entre taille (en mètres) et poids (en kg) vaille $\\mathrm{Cov} = 0{,}85\\text{ m}\\cdot\\text{kg}$. Si l’on convertit la taille en centimètres ($X’ = 100 X$), la covariance bondit à $85\\text{ cm}\\cdot\\text{kg}$ — multipliée par $100$ alors que le lien biologique n’a pas bougé d’un iota !\n' +
              '• **Normalisation de Bravais-Pearson** : comme $\\mathrm{Cov}(aX + b, cY + d) = ac \\cdot \\mathrm{Cov}(X, Y)$ et $\\sigma_{aX+b} = |a|\\sigma_X$, diviser par $\\sigma_X \\sigma_Y$ fait disparaître les facteurs d’échelle :\n' +
              '  $$r(aX + b,\\ cY + d) = \\mathrm{signe}(ac) \\cdot r(X, Y)$$\n' +
              '• **Conséquence pratique** : convertir des euros en F CFA ou des degrés Celsius en Kelvin ne change **strictement rien** à la valeur de $r$ !',
            keyRule:
              'La covariance change d’ordre de grandeur quand on change d’unité ; le coefficient de corrélation $r = \\frac{\\mathrm{Cov}(X,Y)}{\\sigma_X \\sigma_Y}$ est **sans unité** et **invariant** par toute transformation affine croissante !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p2_q3',
              type: 'mcq',
              prompt: 'La corrélation linéaire entre le prix $X$ (en euros) et les ventes $Y$ (en unités) vaut $r(X, Y) = -0{,}78$. Si l’on exprime les prix en F CFA ($X’ = 655{,}957 X$) et les ventes en milliers ($Y’ = 0{,}001 Y$), que vaut $r(X’, Y’)$ ?',
              options: [
                '$-0{,}78 \\times 0{,}656$',
                '$-0{,}78$ (strictement inchangé, car les facteurs $655{,}957 > 0$ et $0{,}001 > 0$ sont positifs).',
                '$+0{,}78$',
                'Impossible à savoir sans $\\sigma_X$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les deux coefficients multiplicatifs sont strictement positifs, donc $\\mathrm{signe}(ac) = +1$ et $r(X’, Y’) = r(X, Y) = -0{,}78$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Bornes [-1, 1]',
            stepTheme: 'violet',
            stepTitle: 'Interpréter les valeurs clés de $r \\in [-1, 1]$ et l’égalité $|r| = 1$',
            paragraphText:
              'Grâce à l’inégalité de Cauchy-Schwarz, $|\\mathrm{Cov}(X, Y)| \\le \\sigma_X \\sigma_Y$, donc $r$ vit toujours dans l’intervalle fermé $[-1, 1]$.\n' +
              '• **$r = +1$** : liaison linéaire croissante **parfaite** — tous les points $(x_i, y_i)$ sont rigoureusement alignés sur une droite de pente positive $y = ax + b$ ($a > 0$).\n' +
              '• **$r = -1$** : liaison linéaire décroissante **parfaite** — tous les points sont alignés sur une droite de pente négative ($a < 0$).\n' +
              '• **$r = 0$** : absence totale de liaison **linéaire** (attention : cela n’exclut PAS une liaison non linéaire en parabole ou en cercle !).\n' +
              '• **Grille de lecture courante** : $|r| < 0{,}3$ (faible), $0{,}3 \\le |r| < 0{,}7$ (modérée), $0{,}7 \\le |r| < 0{,}9$ (forte), $|r| \\ge 0{,}9$ (très forte).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p2_q4',
              type: 'mcq',
              prompt: 'Si tous les couples observés $(x_i, y_i)$ vérifient exactement la relation $y_i = -3x_i + 15$ (avec $\\sigma_X > 0$), que vaut le coefficient de corrélation linéaire $r(X, Y)$ ?',
              options: [
                '$-3$',
                '$-1$',
                '$+1$',
                '$0$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Tous les points sont parfaitement alignés sur une droite de pente strictement négative ($a = -3 < 0$), donc $r(X, Y) = -1$ (quelle que soit la valeur numérique de la pente, seul son signe détermine $+1$ ou $-1$ !).',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Convention n vs n−1',
            stepTheme: 'green',
            stepTitle: 'Pourquoi $r$ est identique avec les formules en $n$ et en $n - 1$',
            paragraphText:
              'En lisant différents manuels ou sorties logicielles, on rencontre deux écritures de la covariance et des écarts-types :\n' +
              '• **Version descriptive (diviseur $n$)** : $\\mathrm{Cov}(X,Y) = \\frac{1}{n}\\sum(x_i-\\bar{x})(y_i-\\bar{y})$, $\\sigma_X = \\sqrt{\\frac{1}{n}\\sum(x_i-\\bar{x})^2}$.\n' +
              '• **Version échantillon (diviseur $n - 1$)** : $\\mathrm{cov}^*(x,y) = \\frac{1}{n-1}\\sum(x_i-\\bar{x})(y_i-\\bar{y})$, $s_X^* = \\sqrt{\\frac{1}{n-1}\\sum(x_i-\\bar{x})^2}$.\n' +
              '• **Miracle algébrique** : dans le quotient $r = \\frac{\\mathrm{cov}^*}{s_X^* s_Y^*}$, le facteur $\\frac{1}{n-1}$ au numérateur se simplifie **exactement** avec $\\sqrt{\\frac{1}{n-1}} \\times \\sqrt{\\frac{1}{n-1}} = \\frac{1}{n-1}$ au dénominateur ! On obtient rigoureusement la même formule :\n' +
              '  $$r = \\frac{\\sum (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\sum (x_i - \\bar{x})^2} \\cdot \\sqrt{\\sum (y_i - \\bar{y})^2}}$$',
            konanTip:
              'Ne mélange jamais les conventions ! Divise soit TOUT par $n$ (numérateur et dénominateur), soit TOUT par $n - 1$, soit supprime le dénominateur partout : tu obtiendras toujours le même $r$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p2_q5',
              type: 'mcq',
              prompt: 'Sur un échantillon de $n = 12$ couples (QI père, QI fils), on obtient $\\mathrm{cov}^*(x, y) = 178{,}36$, $s_x^* = 16{,}77$ et $s_y^* = 17{,}52$. Que vaut le coefficient de corrélation $r(x, y)$ ?',
              options: [
                '$r \\approx +0{,}607$',
                '$r \\approx +0{,}950$',
                '$r \\approx +0{,}304$',
                'Impossible de le calculer sans diviser par $12$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$r = \\frac{178{,}36}{16{,}77 \\times 17{,}52} = \\frac{178{,}36}{293{,}81} \\approx +0{,}607$. Les facteurs $1/(n-1)$ se simplifient exactement.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Calcul complet',
            stepTheme: 'slate',
            stepTitle: 'Calcul intégral de $\\mathrm{Cov}(X, Y)$ et $r$ sur un mini-dataset de 5 mois',
            paragraphText:
              'Soient $5$ mois d’activité d’une boutique en ligne : $X$ = budget publicitaire (en centaines de milliers de F CFA) $= (1, 2, 3, 4, 5)$ et $Y$ = chiffre d’affaires (en millions de F CFA) $= (5, 7, 10, 10, 13)$.\n' +
              '• **Moyennes** : $\\bar{x} = 15/5 = 3$ ; $\\bar{y} = 45/5 = 9$.\n' +
              '• **Variances** : $\\sum x_i^2 = 55 \\implies V(X) = 55/5 - 9 = 2$ ($\\sigma_X = \\sqrt{2} \\approx 1{,}414$) ; $\\sum y_i^2 = 443 \\implies V(Y) = 443/5 - 81 = 7{,}6$ ($\\sigma_Y = \\sqrt{7{,}6} \\approx 2{,}757$).\n' +
              '• **Covariance** : $\\sum x_i y_i = 1(5) + 2(7) + 3(10) + 4(10) + 5(13) = 154 \\implies \\mathrm{Cov}(X, Y) = 154/5 - 3 \\times 9 = 30{,}8 - 27 = 3{,}8$.\n' +
              '• **Corrélation** : $r = \\frac{3{,}8}{\\sqrt{2 \\times 7{,}6}} = \\frac{3{,}8}{\\sqrt{15{,}2}} \\approx +0{,}975$ (corrélation linéaire positive très forte !).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p2_q6',
              type: 'mcq',
              prompt: 'Dans une étude sur $4$ entreprises, on connaît $V(X) = 4$, $V(Y) = 9$ et $\\mathrm{Cov}(X, Y) = -4{,}8$. Que vaut le coefficient de corrélation linéaire $r(X, Y)$ ?',
              options: [
                '$-0{,}80$',
                '$-0{,}133$',
                '$+0{,}80$',
                '$-1{,}20$',
              ],
              correctAnswerIndex: 0,
              explanation:
                'On prend d’abord les **écarts-types** : $\\sigma_X = \\sqrt{4} = 2$ et $\\sigma_Y = \\sqrt{9} = 3$. Puis $r = \\frac{-4{,}8}{2 \\times 3} = \\frac{-4{,}8}{6} = -0{,}80$ (liaison linéaire négative forte).',
            },
          },
        ],
      }),

      // POINT 4.3
      makePoint({
        id: 'lmd_entd_l1_stat_ch4_p3',
        order: 3,
        title: 'Droite de régression par moindres carrés ordinaires (MCO) et qualité $R^2$',
        summary:
          'Déterminer l’équation de la droite d’ajustement y = ax + b par la méthode des moindres carrés, interpréter la pente et R², distinguer les deux droites et prévoir avec prudence.',
        conceptExplanation:
          'Lorsqu’un nuage de points présente une forme linéaire ($|r|$ élevé), on cherche la « meilleure » droite $\\hat{y} = ax + b$ modélisant $Y$ en fonction de $X$ afin de comprendre l’impact marginal de $X$ sur $Y$ et de réaliser des prévisions.\n\n' +
          'La méthode des **Moindres Carrés Ordinaires (MCO)** choisit $(a, b)$ de façon à **minimiser la somme des carrés des résidus verticaux** $S(a, b) = \\sum_{i=1}^n (y_i - (ax_i + b))^2$. En annulant les dérivées partielles $\\frac{\\partial S}{\\partial a} = 0$ et $\\frac{\\partial S}{\\partial b} = 0$, on obtient une solution unique :\n' +
          '• **Pente (coefficient directeur)** : $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)} = r \\cdot \\frac{\\sigma_Y}{\\sigma_X}$ (variation moyenne de $Y$ lorsque $X$ augmente d’une unité).\n' +
          '• **Ordonnée à l’origine** : $b = \\bar{y} - a\\bar{x}$ (la droite MCO passe **toujours** par le point moyen $G(\\bar{x}, \\bar{y})$ !).\n' +
          '• **Coefficient de détermination ($R^2$)** : en régression simple, $R^2 = r^2 \\in [0, 1]$ mesure exactement la **part de la variance de $Y$ expliquée par la droite de régression**.',
        formulas: [
          {
            name: 'Droite de régression MCO de Y en X (ŷ = ax + b)',
            formula: 'a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)} = r \\frac{\\sigma_Y}{\\sigma_X}, \\qquad b = \\bar{y} - a\\bar{x}',
            note: 'Attention : pour la droite de X en Y (x̂ = a′y + b′), on divise par V(Y) : a′ = Cov(X,Y)/V(Y), et a · a′ = r² !',
          },
          {
            name: 'Décomposition de la variance et coefficient de détermination R²',
            formula: '\\underbrace{\\sum (y_i - \\bar{y})^2}_{SCT} = \\underbrace{\\sum (\\hat{y}_i - \\bar{y})^2}_{SCE} + \\underbrace{\\sum (y_i - \\hat{y}_i)^2}_{SCR}, \\qquad R^2 = \\frac{SCE}{SCT} = r^2',
            note: 'Plus R² est proche de 1 (100 %), plus les points collent à la droite et plus les prévisions sont précises.',
          },
        ],
        keyRule:
          'La droite de régression MCO passe **obligatoirement** par le point moyen $G(\\bar{x}, \\bar{y})$, et la somme (donc la moyenne) des résidus $e_i = y_i - \\hat{y}_i$ vaut toujours **$0$** !',
        workedExample: {
          title: 'Ajustement linéaire MCO : budget publicitaire (X) → chiffre d’affaires (Y)',
          statement:
            'Reprenons les $5$ mois précédents : $\\bar{x} = 3$, $\\bar{y} = 9$, $V(X) = 2$, $V(Y) = 7{,}6$, $\\mathrm{Cov}(X, Y) = 3{,}8$. 1) Déterminer l’équation de la droite MCO de $Y$ en $X$. 2) Calculer $R^2$ et interpréter $a$ et $R^2$. 3) Prévoir le CA pour un budget de $3{,}5$ centaines de milliers de F CFA.',
          methodSteps: [
            '1) Pente : $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)} = \\frac{3{,}8}{2} = 1{,}9$.',
            'Ordonnée à l’origine : $b = \\bar{y} - a\\bar{x} = 9 - 1{,}9 \\times 3 = 9 - 5{,}7 = 3{,}3$. Droite : $\\hat{y} = 1{,}9x + 3{,}3$.',
            '2) Qualité d’ajustement : $R^2 = r^2 = \\frac{\\mathrm{Cov}^2}{V(X)V(Y)} = \\frac{3{,}8^2}{2 \\times 7{,}6} = \\frac{14{,}44}{15{,}2} = 0{,}95 = 95\\%$.',
            'Interprétation : chaque tranche supplémentaire de $100\\,000$ F CFA en publicité s’associe en moyenne à $+1{,}9$ million de F CFA de ventes, et $95\\%$ de la variabilité des ventes est expliquée par ce modèle linéaire.',
            '3) Prévision (interpolation) pour $x = 3{,}5$ : $\\hat{y} = 1{,}9(3{,}5) + 3{,}3 = 6{,}65 + 3{,}3 = 9{,}95$ millions de F CFA.',
          ],
          conclusion:
            'Le modèle $\\hat{y} = 1{,}9x + 3{,}3$ ($R^2 = 95\\%$) ajuste remarquablement bien les observations et autorise une interpolation fiable autour de $[1 ; 5]$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Principe MCO',
            stepTheme: 'blue',
            stepTitle: 'Le critère des Moindres Carrés Ordinaires : minimiser les résidus verticaux',
            paragraphText:
              'Pourquoi la droite de régression minimise-t-elle la **somme des carrés des écarts verticaux** $\\sum_{i=1}^n (y_i - \\hat{y}_i)^2$ ?\n' +
              '• **Résidu** : pour chaque individu $i$, $e_i = y_i - \\hat{y}_i = y_i - (ax_i + b)$ mesure l’erreur verticale entre la vraie observation $y_i$ et la valeur prédite $\\hat{y}_i$ sur la droite.\n' +
              '• **Pourquoi des écarts verticaux ?** Parce que $X$ est la variable **explicative** (supposée connue) et $Y$ la variable **expliquée** (à prédire) : on veut minimiser l’erreur de prédiction sur $Y$ !\n' +
              '• **Pourquoi au carré ?** Pour éviter que les erreurs positives et négatives ne se compensent, pénaliser davantage les gros écarts, et obtenir une fonction quadratique lisse admettant un minimum global unique facile à calculer par dérivation.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p3_q1',
              type: 'mcq',
              prompt: 'Quelle quantité précise la droite de régression de $Y$ en $X$ par la méthode des **Moindres Carrés Ordinaires (MCO)** minimise-t-elle ?',
              options: [
                'La somme algébrique des résidus $\\sum (y_i - \\hat{y}_i)$.',
                'La somme des carrés des résidus verticaux $\\sum (y_i - (ax_i + b))^2$.',
                'Le produit des pentes $a \\times b$.',
                'La variance de la variable explicative $V(X)$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La méthode des MCO choisit $(a, b)$ de manière à rendre minimale la somme des carrés des écarts verticaux (Somme des Carrés des Résidus, SCR) entre valeurs observées $y_i$ et valeurs ajustées $\\hat{y}_i = ax_i + b$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Droite MCO',
            stepTheme: 'violet',
            stepTitle: 'Calculer et tracer la droite $\\hat{y} = ax + b$ passant par $G(\\bar{x}, \\bar{y})$',
            paragraphText:
              'La résolution du système normal des MCO livre deux formules limpides :\n' +
              '• **Pente** : $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)}$ (toujours du **même signe** que la covariance et que $r$, car $V(X) > 0$).\n' +
              '• **Ordonnée à l’origine** : $b = \\bar{y} - a\\bar{x}$, qui garantit immédiatement que $a\\bar{x} + b = \\bar{y}$ : la droite passe par le barycentre $G(\\bar{x}, \\bar{y})$.\n' +
              'Observe sur le graphique ci-dessous les $5$ observations $(1,5), (2,7), (3,10), (4,10), (5,13)$, le barycentre $G(3, 9)$ et la droite MCO exacte $\\hat{y} = 1{,}9x + 3{,}3$ ($R^2 = 95\\%$).',
            visualSchema: {
              type: 'function_plot',
              title: 'Nuage de points, barycentre G(3 ; 9) et droite de régression MCO ŷ = 1,9x + 3,3',
              caption: 'La droite MCO traverse exactement le point moyen G(3 ; 9) et minimise la somme des carrés des écarts verticaux (R² = 95 %).',
              plot: {
                xMin: 0,
                xMax: 6,
                yMin: 0,
                yMax: 15,
                xStep: 1,
                yStep: 3,
                curves: [
                  {
                    label: 'ŷ = 1,9x + 3,3',
                    color: 'blue',
                    pieces: [{ expr: '1.9*x+3.3', from: 0.4, to: 5.6 }],
                  },
                ],
                points: [
                  { x: 1, y: 5, filled: true, color: 'violet' },
                  { x: 2, y: 7, filled: true, color: 'violet' },
                  { x: 3, y: 10, filled: true, color: 'violet' },
                  { x: 4, y: 10, filled: true, color: 'violet' },
                  { x: 5, y: 13, filled: true, color: 'violet' },
                  { x: 3, y: 9, label: 'G(3 ; 9)', filled: true, color: 'orange' },
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p3_q2',
              type: 'mcq',
              prompt: 'Une droite de régression MCO de $Y$ en $X$ a pour pente $a = 2{,}5$. Sachant que les moyennes valent $\\bar{x} = 10$ et $\\bar{y} = 32$, quelle est l’équation exacte de la droite ?',
              options: [
                '$\\hat{y} = 2{,}5x + 32$',
                '$\\hat{y} = 2{,}5x + 7$',
                '$\\hat{y} = 2{,}5x - 7$',
                '$\\hat{y} = 2{,}5x + 22$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'La droite passe obligatoirement par $G(10, 32)$, donc $b = \\bar{y} - a\\bar{x} = 32 - 2{,}5 \\times 10 = 32 - 25 = 7$, d’où $\\hat{y} = 2{,}5x + 7$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Qualité R²',
            stepTheme: 'violet',
            stepTitle: 'Interpréter le coefficient de détermination $R^2 = r^2$ (pouvoir explicatif)',
            paragraphText:
              'Avoir trouvé une droite $\\hat{y} = ax + b$ ne suffit pas : encore faut-il mesurer **à quel point** cette droite explique réellement les variations de $Y$ !\n' +
              '• **Équation d’analyse de la variance** : la variabilité totale de $Y$ ($SCT$) se scinde exactement en variabilité **expliquée** par la droite ($SCE$) $+$ variabilité **résiduelle** inexpliquée ($SCR$) : $SCT = SCE + SCR$.\n' +
              '• **Coefficient de détermination** : $R^2 = \\frac{SCE}{SCT} = 1 - \\frac{SCR}{SCT}$. En régression linéaire simple, on démontre que **$R^2 = r^2$** !\n' +
              '• **Interprétation chiffrée** : si $r = -0{,}80$, alors $R^2 = (-0{,}80)^2 = 0{,}64$ : **$64\\%$** de la variance de $Y$ est expliquée par la liaison linéaire avec $X$, et les $36\\%$ restants proviennent d’autres facteurs (ou du hasard).',
            keyRule:
              'Un $r = 0{,}50$ paraît moyen, mais $R^2 = 0{,}50^2 = 25\\%$ seulement ! Évalue toujours la qualité prédictive sur **$R^2$**, pas uniquement sur $r$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p3_q3',
              type: 'mcq',
              prompt: 'Dans une régression linéaire simple entre le temps d’étude $X$ et la note d’examen $Y$, on obtient $r = +0{,}70$. Quelle part de la variance des notes est **inexpliquée** par ce modèle linéaire ?',
              options: [
                '$30\\%$',
                '$49\\%$',
                '$51\\%$ (car $R^2 = r^2 = 0{,}49$ expliqués, donc $1 - 0{,}49 = 51\\%$ inexpliqués).',
                '$70\\%$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La part expliquée vaut $R^2 = r^2 = (0{,}70)^2 = 0{,}49 = 49\\%$. La part résiduelle inexpliquée vaut donc $1 - R^2 = 51\\%$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Prévision & Résidus',
            stepTheme: 'green',
            stepTitle: 'Interpolation fiable versus danger de l’extrapolation lointaine',
            paragraphText:
              'Une fois la droite $\\hat{y} = ax + b$ validée par un $R^2$ élevé, on l’utilise pour prévoir $Y$ à partir d’une nouvelle valeur $x_0$, en respectant deux règles de prudence absolues.\n' +
              '• **Interpolation (fiable)** : prévoir $\\hat{y}_0 = ax_0 + b$ pour un $x_0$ situé **à l’intérieur** de l’intervalle $[x_{\\min}, x_{\\max}]$ observé.\n' +
              '• **Extrapolation (risquée)** : prévoir très loin en dehors de $[x_{\\min}, x_{\\max}]$. Une relation linéaire sur un intervalle restreint devient presque toujours non linéaire plus loin (saturation publicitaire, rendements décroissants, limites physiques : une taille d’enfant qui grandit de $6\\text{ cm/an}$ entre $4$ et $12$ ans ne fera pas $3$ mètres à $40$ ans !).\n' +
              '• **Diagnostic des résidus** : vérifier que les résidus $e_i = y_i - \\hat{y}_i$ se répartissent aléatoirement autour de $0$ (sans forme en U ni en entonnoir).',
            konanTip:
              'En entreprise, précise toujours le **domaine de validité** $[x_{\\min}, x_{\\max}]$ lorsque tu présentes une prévision issue d’une régression linéaire !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p3_q4',
              type: 'mcq',
              prompt: 'Sur des budgets publicitaires observés entre $100\\,000$ et $500\\,000$ F CFA, on obtient $\\hat{y} = 1{,}9x + 3{,}3$ ($R^2 = 95\\%$). Pourquoi est-il imprudent d’utiliser cette droite pour prédire les ventes à $50\\,000\\,000$ F CFA de budget ($x = 500$) ?',
              options: [
                'Parce que $R^2$ est trop faible.',
                'Parce qu’il s’agit d’une extrapolation extrême très loin hors du domaine observé $[1 ; 5]$, où des effets de saturation du marché brisent la linéarité.',
                'Parce que la pente $1{,}9$ deviendrait négative.',
                'Parce que la droite ne passe pas par $G(\\bar{x}, \\bar{y})$.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Extrapoler $100$ fois au-delà de l’intervalle d’observation ignore les phénomènes réels de saturation de marché et de rendements décroissants : le modèle linéaire n’est fiable qu’en interpolation ou extrapolation très proche.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Deux droites MCO',
            stepTheme: 'orange',
            stepTitle: 'Piège classique : la droite de $Y$ en $X$ et celle de $X$ en $Y$ sont distinctes !',
            paragraphText:
              'Un réflexe trompeur consiste à inverser algébriquement $y = ax + b$ en $x = \\frac{1}{a}y - \\frac{b}{a}$ pour prédire $X$ à partir de $Y$. C’est **faux** dès que $|r| < 1$ !\n' +
              '• **Droite $D_{Y/X}$ ($Y$ expliqué par $X$)** : minimise les écarts **verticaux** ; sa pente vaut $a = \\frac{\\mathrm{Cov}(X, Y)}{V(X)}$.\n' +
              '• **Droite $D_{X/Y}$ ($X$ expliqué par $Y$)** : minimise les écarts **horizontaux** $\\sum (x_i - (a’y_i + b’))^2$ ; son équation est $\\hat{x} = a’y + b’$ avec $a’ = \\frac{\\mathrm{Cov}(X, Y)}{V(Y)}$.\n' +
              '• **Relation magnifique entre les deux pentes** :\n' +
              '  $$a \\times a’ = \\frac{\\mathrm{Cov}(X, Y)}{V(X)} \\times \\frac{\\mathrm{Cov}(X, Y)}{V(Y)} = \\frac{\\mathrm{Cov}^2(X, Y)}{V(X)V(Y)} = r^2$$\n' +
              'Les deux droites se croisent toujours en $G(\\bar{x}, \\bar{y})$ ; elles ne sont **confondues** que si $a \\cdot a’ = 1$, c’est-à-dire $|r| = 1$ (points parfaitement alignés) ; elles sont **perpendiculaires** si $r = 0$ !',
            formula: {
              name: 'Produit des pentes des deux droites de régression',
              formula: 'a \\cdot a’ = r^2 = R^2 \\qquad \\text{avec} \\qquad a = \\frac{\\mathrm{Cov}(X,Y)}{V(X)}, \\quad a’ = \\frac{\\mathrm{Cov}(X,Y)}{V(Y)}',
              note: 'Plus les deux droites forment un angle aigu serré autour de G, plus |r| est proche de 1 !',
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p3_q5',
              type: 'mcq',
              prompt: 'Les deux droites de régression MCO d’un nuage de points ont pour équations $\\hat{y} = 0{,}8x + 4$ et $\\hat{x} = 0{,}45y - 1$. Quelle est la valeur exacte du coefficient de corrélation linéaire $r(X, Y)$ ?',
              options: [
                '$r = +0{,}36$',
                '$r = +0{,}60$ (car $r^2 = a \\cdot a’ = 0{,}8 \\times 0{,}45 = 0{,}36$, et $a, a’ > 0 \\implies r = +\\sqrt{0{,}36} = +0{,}60$).',
                '$r = -0{,}60$',
                '$r = +1{,}25$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On utilise $r^2 = a \\cdot a’ = 0{,}8 \\times 0{,}45 = 0{,}36$. Comme les deux pentes $a$ et $a’$ sont positives, la covariance et $r$ sont positifs : $r = +\\sqrt{0{,}36} = +0{,}60$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Exercice de synthèse',
            stepTheme: 'slate',
            stepTitle: 'Retrouver le barycentre $G(\\bar{x}, \\bar{y})$ à partir des deux droites MCO',
            paragraphText:
              'Un sujet classique d’examen donne directement les deux droites de régression MCO et demande de retrouver le point moyen $G(\\bar{x}, \\bar{y})$ et le coefficient de corrélation $r$ !\n' +
              '• **Données** : $D_{Y/X} : y = 2x - 1$ et $D_{X/Y} : x = 0{,}32y + 2{,}12$.\n' +
              '• **Étape 1 — Trouver $r$** : $r^2 = a \\cdot a’ = 2 \\times 0{,}32 = 0{,}64$. Comme les deux pentes sont positives, $r = +\\sqrt{0{,}64} = +0{,}80$ ($R^2 = 64\\%$, liaison linéaire positive forte).\n' +
              '• **Étape 2 — Trouver $G(\\bar{x}, \\bar{y})$** : puisque les deux droites se coupent exactement au barycentre $G(\\bar{x}, \\bar{y})$, on résout le système : $\\bar{y} = 2\\bar{x} - 1$ et $\\bar{x} = 0{,}32(2\\bar{x} - 1) + 2{,}12 = 0{,}64\\bar{x} + 1{,}80$, d’où $0{,}36\\bar{x} = 1{,}80 \\implies \\bar{x} = 5$ et $\\bar{y} = 2(5) - 1 = 9$.',
            konanTip:
              'Dès qu’un exercice te donne les équations des deux droites de régression, deux réflexes instantanés : (1) leur **point d’intersection** est $G(\\bar{x}, \\bar{y})$, et (2) le **produit de leurs pentes** vaut $r^2$ !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p3_q6',
              type: 'mcq',
              prompt: 'Les deux droites de régression d’une série sont $D_{Y/X} : y = 2x - 1$ et $D_{X/Y} : x = 0{,}32y + 2{,}12$. Quelles sont les coordonnées du point moyen $G(\\bar{x}, \\bar{y})$ ?',
              options: [
                '$G(4,\\ 7)$',
                '$G(5,\\ 9)$',
                '$G(3,\\ 5)$',
                '$G(6,\\ 11)$',
              ],
              correctAnswerIndex: 1,
              explanation:
                'On substitue $\\bar{y} = 2\\bar{x} - 1$ dans la seconde équation : $\\bar{x} = 0{,}32(2\\bar{x} - 1) + 2{,}12 = 0{,}64\\bar{x} + 1{,}80 \\iff 0{,}36\\bar{x} = 1{,}80 \\iff \\bar{x} = 5$, puis $\\bar{y} = 2(5) - 1 = 9$.',
            },
          },
        ],
      }),

      // POINT 4.4
      makePoint({
        id: 'lmd_entd_l1_stat_ch4_p4',
        order: 4,
        title: 'Corrélation de rangs de Spearman ($r_S$) et pièges classiques de la corrélation',
        summary:
          'Calculer et interpréter le coefficient de rangs de Spearman, savoir quand le préférer à Pearson, et déjouer les 4 grands pièges (causalité, non-linéarité, Simpson, outliers).',
        conceptExplanation:
          'Le coefficient de Bravais-Pearson $r$ ne détecte que les liaisons **linéaires** et est très sensible aux **valeurs extrêmes**. Pour mesurer toute liaison **monotone** (croissante ou décroissante, même courbée) et résister aux outliers, on utilise le **coefficient de corrélation de rangs de Spearman ($r_S$ ou $\\rho_S$)** :\n' +
          '• **Principe** : on remplace séparément les valeurs $x_i$ et $y_i$ par leurs **rangs** $x_i’$ et $y_i’$ de $1$ à $n$ (en attribuant le rang moyen en cas d’ex-æquo), puis on calcule la corrélation de Pearson entre ces deux séries de rangs : $r_S(X, Y) = r(x’, y’)$.\n' +
          '• **Formule rapide sans ex-æquo** : $r_S = 1 - \\frac{6\\sum_{i=1}^n d_i^2}{n(n^2 - 1)}$ où $d_i = x_i’ - y_i’$.\n' +
          '• **Propriétés** : $r_S \\in [-1, 1]$ ; $r_S = +1$ dès que $Y$ est une fonction **strictement croissante** quelconque de $X$ (ex. $Y = e^X$ ou $Y = X^3$), même si $r$ de Pearson est $< 1$ !\n\n' +
          'Enfin, toute analyse bivariée exige de déjouer quatre pièges redoutables : confondre **corrélation et causalité**, croire que **$r = 0 \\implies$ indépendance**, ignorer l’**effet de sous-groupes (paradoxe de Simpson)** et subir l’**effet d’un outlier levier**.',
        formulas: [
          {
            name: 'Coefficient de corrélation de rangs de Spearman (sans ex-æquo)',
            formula: 'r_S(X, Y) = r(x’, y’) = 1 - \\frac{6 \\sum_{i=1}^{n} (x_i’ - y_i’)^2}{n(n^2 - 1)} \\in [-1, 1]',
            note: 'S’il y a des ex-æquo nombreux, on revient à la formule générale de Pearson appliquée aux rangs moyens.',
          },
        ],
        keyRule:
          'Pearson mesure la **linéarité** ($Y \\approx aX + b$) ; Spearman mesure la **monotonicité** ($Y$ croît ou décroît avec $X$, même selon une courbe) et résiste aux outliers !',
        workedExample: {
          title: 'Calcul de la corrélation de Spearman sur 6 campagnes publicitaires',
          statement:
            'On classe $n = 6$ campagnes selon leur classement en budget $x’ = (1, 2, 3, 4, 5, 6)$ et leur classement en nombre de ventes générées $y’ = (1, 3, 2, 5, 4, 6)$. Calculer $r_S$ de Spearman et interpréter.',
          methodSteps: [
            'Il n’y a aucun ex-æquo, la formule rapide s’applique.',
            'Écarts de rangs $d_i = x_i’ - y_i’$ : $0,\\ -1,\\ +1,\\ -1,\\ +1,\\ 0$.',
            'Carrés des écarts $d_i^2$ : $0,\\ 1,\\ 1,\\ 1,\\ 1,\\ 0$, donc $\\sum d_i^2 = 4$.',
            'Dénominateur : $n(n^2 - 1) = 6 \\times (36 - 1) = 6 \\times 35 = 210$.',
            'Calcul final : $r_S = 1 - \\frac{6 \\times 4}{210} = 1 - \\frac{24}{210} = 1 - 0{,}114 = +0{,}886$.',
          ],
          conclusion:
            'Avec $r_S = +0{,}886$, il existe une très forte concordance monotone croissante entre le rang de budget investi et le rang des ventes obtenues.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Spearman r_S',
            stepTheme: 'blue',
            stepTitle: 'Transformer les données en rangs et calculer $r_S$ de Spearman (avec ou sans ex-æquo)',
            paragraphText:
              'Le coefficient de **Spearman** est une mesure **non paramétrique** (elle ne suppose pas que le couple $(X, Y)$ suive une loi normale bivariée).\n' +
              '• **Étape 1 — Mise en rangs** : on trie séparément les $x_i$ (rang $1$ au plus petit, rang $n$ au plus grand $\\to x_i’$) et les $y_i$ ($\\to y_i’$). En cas d’**ex-æquo** (ex. deux valeurs égales occupant les positions $7$ et $8$), on leur attribue à toutes deux le **rang moyen** $\\frac{7 + 8}{2} = 7{,}5$.\n' +
              '• **Étape 2 — Calcul** : sans ex-æquo, $r_S = 1 - \\frac{6\\sum (x_i’ - y_i’)^2}{n(n^2 - 1)}$.\n' +
              '• **Valeurs extrêmes** : $r_S = +1$ si les classements sont identiques ($\\sum d_i^2 = 0$) ; $r_S = -1$ si les classements sont parfaitement inversés ; $r_S \\approx 0$ en l’absence de relation monotone.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p4_q1',
              type: 'mcq',
              prompt: 'Sur $n = 5$ produits classés sans ex-æquo, la somme des carrés des différences de rangs vaut $\\sum d_i^2 = 2$. Quelle est la valeur exacte du coefficient de Spearman $r_S$ ?',
              options: [
                '$+0{,}90$',
                '$+0{,}80$',
                '$+0{,}95$',
                '$-0{,}90$',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$r_S = 1 - \\frac{6 \\times 2}{5(5^2 - 1)} = 1 - \\frac{12}{5 \\times 24} = 1 - \\frac{12}{120} = 1 - 0{,}10 = +0{,}90$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Pearson vs Spearman',
            stepTheme: 'violet',
            stepTitle: 'Quand préférer Spearman à Pearson : monotonicité non linéaire et outliers',
            paragraphText:
              'Pearson et Spearman ne répondent pas exactement à la même question : savoir les comparer est une compétence clé en data science.\n' +
              '• **Liaison monotone courbée** : prenons $X = (1, 2, 3, 4, 5)$ et $Y = X^3 = (1, 8, 27, 64, 125)$. Parce que la courbe est convexe (pas une droite), Pearson vaut $r \\approx 0{,}94$ seulement ; mais comme $Y$ croît strictement avec $X$, les rangs sont rigoureusement identiques et **Spearman vaut $r_S = +1{,}00$** !\n' +
              '• **Robustesse aux outliers** : si la plus grande valeur $y_5 = 125$ est erronément saisie en $12\\,500$, son rang reste simplement $5$ ! Spearman ne bouge **pas d’un millième**, alors que Pearson s’effondre ou se tord brutalement.\n' +
              '• **Données ordinales** : Spearman s’applique directement aux classements et échelles ordinales (ex. rang de satisfaction vs rang d’ancienneté), là où Pearson n’a aucun sens.',
            keyRule:
              'Utilise **Pearson** si le nuage est linéaire sans outlier ; utilise **Spearman** si la relation est courbée mais monotone, s’il y a des valeurs aberrantes, ou sur des données ordinales !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p4_q2',
              type: 'mcq',
              prompt: 'Les points $(x_i, y_i)$ suivent exactement la courbe exponentielle $y_i = e^{x_i}$ pour $x_i \\in \\{1, 2, 3, 4, 5, 6\\}$. Que valent respectivement $r_S$ (Spearman) et $r$ (Pearson) ?',
              options: [
                '$r_S = 1$ exactement (car $x \\mapsto e^x$ est strictement croissante), tandis que $0 < r < 1$ (car la relation n’est pas linéaire).',
                '$r = 1$ et $r_S = 1$.',
                '$r = 0$ et $r_S = 0$.',
                '$r = 1$ et $r_S < 1$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La fonction exponentielle conserve strictement l’ordre : $x_i’ = y_i’$ pour tout $i$, donc $r_S = +1$ exactement. En revanche, les points ne sont pas alignés sur une droite, donc le coefficient de linéarité de Pearson vérifie $0 < r < 1$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Causalité',
            stepTheme: 'orange',
            stepTitle: 'Piège n°1 : « Corrélation n’implique PAS causalité ! » (variables confondantes)',
            paragraphText:
              'C’est le mantra numéro un de tout analyste de données : observer un coefficient $r = +0{,}92$ entre $X$ et $Y$ ne prouve **jamais** à lui seul que $X$ est la cause de $Y$ !\n' +
              '• **Trois explications possibles à une forte corrélation** :\n' +
              '  1. $X$ cause $Y$ (ex. temps d’exposition publicitaire $\\to$ notoriété) ;\n' +
              '  2. **Causalité inverse** : c’est $Y$ qui cause $X$ ;\n' +
              '  3. **Variable confondante (facteur caché $Z$)** : une troisième variable $Z$ gouverne simultanément $X$ et $Y$ ! Exemple célèbre : les ventes de crèmes glacées ($X$) et le nombre de noyades à la plage ($Y$) sont très fortement corrélés ($r > 0{,}85$). Manger une glace ne fait pas noyer ! Le facteur caché $Z$ est la **chaleur estivale**, qui pousse à la fois à acheter des glaces et à aller se baigner.\n' +
              '• **Corrélations fallacieuses** : sur des séries chronologiques qui croissent toutes avec le temps (ex. nombre d’abonnés 4G et production mondiale de cacao), on obtient mécaniquement des $r > 0{,}90$ dépourvus de tout lien causal.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p4_q3',
              type: 'mcq',
              prompt: 'Une étude observe une forte corrélation positive ($r = +0{,}88$) entre le nombre de pompiers envoyés sur un incendie ($X$) et le montant des dégâts matériels ($Y$). Quelle interprétation est rigoureuse ?',
              options: [
                'Les pompiers causent les dégâts : il faudrait en envoyer moins.',
                'Il existe une variable confondante cachée (la taille initiale de l’incendie) qui augmente simultanément le nombre de pompiers déployés ET le montant des dégâts.',
                'Le calcul de $r$ est forcément faux.',
                'Les variables $X$ et $Y$ sont indépendantes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'L’ampleur du sinistre est la cause commune (variable confondante) qui explique à la fois la mobilisation de nombreux pompiers et l’importance des dégâts : corrélation ne veut pas dire causalité !',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Non-linéarité',
            stepTheme: 'orange',
            stepTitle: 'Piège n°2 : pourquoi $r = 0$ ne prouve PAS l’indépendance !',
            paragraphText:
              'L’implication va dans un seul sens : si $X$ et $Y$ sont indépendantes, alors $\\mathrm{Cov}(X, Y) = 0$ et $r = 0$. Mais la **réciproque est FAUSSE** !\n' +
              '• **Contre-exemple imparable** : prenons les $5$ couples situés sur la parabole $Y = X^2$ : $(-2, 4),\\ (-1, 1),\\ (0, 0),\\ (1, 1),\\ (2, 4)$.\n' +
              '  – Ici la liaison entre $X$ et $Y$ est **parfaite et déterministe** (connaître $X$ détermine $Y$ à $100\\%$ !).\n' +
              '  – Pourtant, $\\bar{x} = 0$, $\\bar{y} = 2$, et $\\sum x_i y_i = (-2)(4) + (-1)(1) + 0 + (1)(1) + (2)(4) = -8 - 1 + 1 + 8 = 0$ !\n' +
              '  – Donc $\\mathrm{Cov}(X, Y) = 0$ et **$r = 0$** ! (Et même $r_S = 0$ car la parabole est décroissante puis croissante, donc non monotone !).\n' +
              '• **Leçon** : $r = 0$ signifie uniquement « absence de corrélation **linéaire** » — seul l’examen du nuage de points révèle les relations en U (ex. stress vs performance, taux d’imposition vs recettes fiscales).',
            keyRule:
              'Indépendance $\\implies r = 0$, mais **$r = 0 \\not\\implies$ indépendance** ! Une liaison parfaite en parabole symétrique donne exactement $r = 0$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p4_q4',
              type: 'mcq',
              prompt: 'Pour les $5$ couples $(-2, 4), (-1, 1), (0, 0), (1, 1), (2, 4)$ vérifiant exactement $Y = X^2$, que vaut $r(X, Y)$ et que faut-il conclure ?',
              options: [
                '$r = +1$, car $Y$ dépend exactement de $X$.',
                '$r = 0$, ce qui illustre qu’une liaison fonctionnelle non linéaire parfaite peut avoir une corrélation linéaire strictement nulle.',
                '$r = -1$.',
                '$X$ et $Y$ sont statistiquement indépendantes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par symétrie, $\\bar{x} = 0$ et $\\sum x_i y_i = 0$, donc $\\mathrm{Cov}(X, Y) = 0$ et $r = 0$, alors même que $Y = X^2$ est une relation déterministe parfaite !',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Simpson & Outliers',
            stepTheme: 'orange',
            stepTitle: 'Pièges n°3 et 4 : effet de sous-groupes (Simpson) et points leviers (outliers)',
            paragraphText:
              'Deux derniers pièges peuvent créer une corrélation totalement artificielle là où il n’en existe aucune — ou inverser son signe !\n' +
              '• **Effet de sous-groupes (paradoxe de Simpson)** : si l’on trace la taille ($X$) en fonction de la longueur des cheveux ($Y$) sur une population mixte, on trouve une forte corrélation négative $r = -0{,}60$ ! Mais dès qu’on sépare les hommes et les femmes, la corrélation disparaît dans chaque groupe ($r_H = -0{,}07$ et $r_F = -0{,}14$) : le lien apparent venait uniquement du mélange de deux sous-populations décalées !\n' +
              '• **Effet d’un outlier (point levier)** : un nuage parfaitement rond ($r \\approx 0$) auquel on ajoute un **seul point extrême** très éloigné en haut à droite voit soudain son $r$ bondir au-dessus de $+0{,}85$ !\n' +
              'Le tableau ci-dessous récapitule les 4 pièges majeurs à diagnostiquer systématiquement.',
            visualSchema: {
              type: 'custom_svg',
              title: 'Synthèse des 4 grands pièges de la corrélation et leurs remèdes',
              caption: 'Ne publie jamais un coefficient r sans avoir vérifié visuellement le nuage de points contre ces 4 pièges.',
              tableData: {
                headers: ['Piège', 'Symptôme trompeur', 'Exemple classique', 'Remède statistique'],
                rows: [
                  ['Variable confondante', 'Forte corrélation sans causalité', 'Ventes de glaces vs noyades (chaleur)', 'Raisonner par mécanisme / contrôle de Z'],
                  ['Relation non linéaire', '$r \\approx 0$ malgré lien fort', 'Parabole $Y = X^2$, courbe en U', 'Tracer le nuage ; Spearman si monotone'],
                  ['Sous-groupes (Simpson)', 'Corrélation globale factice ou inversée', 'Taille vs longueur cheveux (H/F mêlés)', 'Stratifier / colorier le nuage par groupe'],
                  ['Outlier (point levier)', 'Un seul point crée ou détruit $r$', '1 client atypique faisant $r = 0{,}88$', 'Inspecter l’outlier ; comparer avec $r_S$'],
                ],
              },
            },
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p4_q5',
              type: 'mcq',
              prompt: 'Sur un échantillon global mêlant hommes et femmes, on trouve $r = -0{,}60$ entre la taille et la longueur des cheveux, mais $r_H = -0{,}07$ chez les hommes seuls et $r_F = -0{,}14$ chez les femmes seules. Quel phénomène statistique est à l’œuvre ?',
              options: [
                'Une erreur de calcul sur la racine carrée.',
                'Un effet de sous-groupes hétérogènes (lié au paradoxe de Simpson) : la corrélation globale est un artefact créé par le décalage moyen entre deux sous-populations distinctes.',
                'Une relation quadratique $Y = X^2$.',
                'L’effet de la règle de Sturges.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'À l’intérieur de chaque sexe, taille et longueur des cheveux sont quasiment indépendantes ; c’est uniquement le regroupement de deux sous-populations aux moyennes décalées qui crée une pente négative globale artificielle.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Audit complet',
            stepTheme: 'slate',
            stepTitle: 'Comparer Pearson et Spearman face à un outlier sur un dataset réel',
            paragraphText:
              'Un analyste étudie la relation entre le nombre d’heures de formation ($X$) et la productivité ($Y$) sur $6$ employés : $(2, 10),\\ (4, 15),\\ (6, 18),\\ (8, 22),\\ (10, 25)$ plus une erreur de saisie sur le 6e employé : $(12, 250)$ au lieu de $(12, 28)$.\n' +
              '• **Impact sur Pearson ($r$)** : la valeur aberrante $250$ écrase toute la variance de $Y$, fait chuter la qualité d’ajustement sur les 5 premiers points et fausse totalement la pente MCO ($a$ passe de $1{,}8$ à plus de $15$ !).\n' +
              '• **Impact sur Spearman ($r_S$)** : que le 6e employé vaille $28$ ou $250$, son rang reste exactement $6$ ! On a $x’ = (1, 2, 3, 4, 5, 6)$ et $y’ = (1, 2, 3, 4, 5, 6)$, donc **$r_S = +1{,}00$ dans les deux cas** !\n' +
              '• **Réflexe pro** : lorsque $|r - r_S|$ est grand, c’est le signal d’alarme immédiat d’une **non-linéarité** ou d’un **outlier** caché dans tes données !',
            konanTip:
              'Dans tes futurs projets data, calcule systématiquement **Pearson ET Spearman** côte à côte : s’ils convergent, la liaison est proprement linéaire ; s’ils divergent nettement, inspecte aussitôt ton nuage de points !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch4_p4_q6',
              type: 'mcq',
              prompt: 'Sur une série bivariée, on calcule simultanément $r = +0{,}42$ (Pearson) et $r_S = +0{,}96$ (Spearman). Que révèle très probablement cet écart massif entre $r$ et $r_S$ ?',
              options: [
                'Les deux variables sont totalement indépendantes.',
                'Il existe une très forte liaison monotone croissante, mais perturbée par une forte courbure non linéaire ou par une valeur aberrante (outlier) qui dégrade Pearson.',
                'La liaison est négative.',
                'Le coefficient de Spearman est toujours plus grand que celui de Pearson.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$r_S = +0{,}96$ prouve que les classements concordent presque parfaitement (forte liaison monotone croissante), tandis que $r = +0{,}42$ révèle que les points s’écartent fortement d’une droite (courbure prononcée ou outlier massif).',
            },
          },
        ],
      }),
    ],
  },
];
