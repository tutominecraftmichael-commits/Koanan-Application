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
// Programme structuré KONAN
// ============================================================================

export const STAT_DESCRIPTIVE_ENTD_L1_CHAPTERS: CurriculumChapter[] = [
  // --------------------------------------------------------------------------
  // CHAPITRE 1 : Concepts fondamentaux, tableaux et représentations graphiques
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_stat_ch1',
    subjectId: 'lmd_stat_descriptive',
    gradeLevel: 'lmd_entd_l1',
    order: 1,
    officialVolumeHours: 10,
    contentVersion: 2,
    source: 'ENTD L1 — Statistique Descriptive',
    title: 'Chapitre 1 — Concepts fondamentaux, tableaux et représentations graphiques',
    summary:
      'Vocabulaire statistique, typologie des variables, tableaux d’effectifs et fréquences cumulées, fonction de répartition empirique $F(x)$, règle de Sturges et graphiques (secteurs, bâtons, histogramme des densités).',
    points: [
      // POINT 1.1
      makePoint({
        id: 'lmd_entd_l1_stat_ch1_p1',
        order: 1,
        title: 'Vocabulaire statistique et typologie des variables',
        summary:
          'Identifier population, individu, caractère, modalités, et classer sans erreur toute variable statistique.',
        conceptExplanation:
          'La **statistique descriptive (ou déductive)** rassemble les méthodes permettant de recueillir, ordonner, réduire et condenser des données observées, par opposition à la **statistique mathématique (ou inductive/inférentielle)** qui généralise d’un échantillon à une population à l’aide de modèles probabilistes.\n\n' +
          '• **Population** : ensemble des **individus** (ou unités statistiques) sur lesquels porte l’étude.\n' +
          '• **Caractère (variable statistique)** : critère mesuré ou observé sur chaque individu. Ses valeurs possibles sont les **modalités**, qui doivent être **incompatibles** (un individu ne peut en présenter qu’une seule) et **exhaustives** (tout individu en présente au moins une).\n\n' +
          'Typologie fondamentale des variables :\n' +
          '1. **Qualitative nominale** : catégories sans hiérarchie naturelle (sexe, loisir, navigateur web, code postal — même codé par des chiffres `1 = garçon, 2 = fille`, cela reste qualitatif nominal !).\n' +
          '2. **Qualitative ordinale** : catégories naturellement ordonnées (mention au bac, niveau d’études, fréquence « jamais / parfois / souvent », tranche d’âge).\n' +
          '3. **Quantitative discrète** : quantité mesurable prenant des valeurs isolées/dénombrables (nombre d’enfants, nombre de pêches abîmées par caissette, arrivées de clients en 10 min).\n' +
          '4. **Quantitative continue** : quantité pouvant prendre toute valeur d’un intervalle réel (taille, poids, loyer mensuel, masse d’un œuf).',
        formulas: [
          {
            name: 'Effectif total et fréquence relative',
            formula: 'n = \\sum_{j=1}^{k} n_j, \\qquad f_j = \\frac{n_j}{n}, \\qquad \\sum_{j=1}^{k} f_j = 1',
            note: 'Les fréquences relatives sont comprises entre 0 et 1 (ou 0 % et 100 %).',
          },
        ],
        keyRule:
          'Un code numérique (code postal, numéro de téléphone, `1 = Homme, 2 = Femme`) n’a aucune valeur de quantité : la variable reste **qualitative nominale** !',
        workedExample: {
          title: 'Identification des variables d’une enquête statistique',
          statement:
            'Classer les caractères suivants : (1) le loisir préféré (`S, C, T, L`), (2) la mention au Baccalauréat, (3) le nombre de pêches abîmées par caissette de 9 pêches, (4) le loyer mensuel en F CFA des appartements à Abidjan.',
          methodSteps: [
            '(1) Loisir (`Sport, Cinéma, Théâtre, Lecture`) : catégories sans ordre naturel → **qualitative nominale**.',
            '(2) Mention au Bac (`Passable < Assez Bien < Bien < Très Bien`) : catégories hiérarchisées → **qualitative ordinale**.',
            '(3) Nombre de pêches abîmées ($\\in \\{0, 1, \\dots, 9\\}$) : valeurs numériques isolées → **quantitative discrète**.',
            '(4) Loyer mensuel regroupé en classes `[60 000 ; 100 000[`, etc. : grandeur mesurable sur un intervalle → **quantitative continue**.',
          ],
          conclusion:
            'Le type de la variable dicte immédiatement quels tableaux (cumuls autorisés ou non), graphiques et résumés numériques ont un sens.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Démarche statistique',
            stepTheme: 'blue',
            stepTitle: 'Statistique descriptive vs statistique inférentielle',
            paragraphText:
              'La statistique **descriptive** (déductive) organise, résume et visualise les données observées (tableaux, graphiques, moyennes, variances). La statistique **mathématique** (inductive/inférentielle) utilise les lois de probabilités pour faire des prévisions ou estimations sur une population entière à partir d’un échantillon aléatoire.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q1',
              type: 'mcq',
              prompt: 'Quelle est la mission propre de la **statistique descriptive** ?',
              options: [
                'Recueillir, ordonner, réduire et condenser des données par des tableaux, graphiques et paramètres.',
                'Généraliser obligatoirement un résultat d’échantillon à la population mondiale par lois de probabilités.',
                'Remplacer toute donnée qualitative par une équation différentielle.',
                'Détruire les individus de la population pour réduire le coût.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La statistique descriptive résume et présente les données effectivement observées, sans extrapolation probabiliste (qui relève de la statistique inductive).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'definition',
            stepBadge: 'Modalités',
            stepTheme: 'blue',
            stepTitle: 'Propriétés exigées des modalités d’un caractère',
            paragraphText:
              'Les modalités d’un caractère doivent être **incompatibles** (disjointes) et **exhaustives** : tout individu de la population doit présenter **une et une seule** modalité.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q2',
              type: 'mcq',
              prompt: 'Dans un questionnaire, les classes d’âge `[18 ; 25]`, `[25 ; 40]`, `[40 ; 60]` posent un problème de construction. Lequel ?',
              options: [
                'Elles sont trop nombreuses.',
                'Elles ne sont pas incompatibles : un individu âgé de 25 ans appartient simultanément à deux classes.',
                'L’âge ne peut jamais être regroupé en classes.',
                'Elles sont qualitatives nominales.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Les bornes doivent être semi-ouvertes (`[18 ; 25[`, `[25 ; 40[`, etc.) pour garantir que les modalités soient incompatibles (tout individu dans une seule classe).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Piège de codage',
            stepTheme: 'orange',
            stepTitle: 'Variable qualitative codée numériquement',
            paragraphText:
              'Dans une base de données, on code souvent le sexe (`1 = garçon, 2 = fille`) ou le code postal (`01`, `02`, ...). Ces chiffres sont de simples étiquettes : calculer la « moyenne des codes postaux » n’a aucun sens ! La variable demeure **qualitative nominale**.',
            keyRule: 'Ce n’est pas la présence de chiffres qui rend une variable quantitative, mais le fait qu’ils mesurent une **quantité** sur laquelle les opérations arithmétiques ont un sens.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q3',
              type: 'mcq',
              prompt: 'Dans une enquête client, la variable « Opérateur télécom » est codée `1 = Orange, 2 = MTN, 3 = Moov`. Quelle est sa nature exacte ?',
              options: [
                'Quantitative discrète.',
                'Qualitative ordinale.',
                'Qualitative nominale.',
                'Quantitative continue.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les codes 1, 2, 3 sont de pures étiquettes sans hiérarchie ni quantité mesurable : la variable est qualitative nominale.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Qualitative ordinale',
            stepTheme: 'blue',
            stepTitle: 'Reconnaître une variable qualitative ordinale',
            paragraphText:
              'Une variable est **qualitative ordinale** lorsque ses modalités ne sont pas des mesures numériques mais possèdent un ordre naturel (ex. niveau d’études `Primaire < Collège < Bac < Licence < Master`, ou satisfaction `Très insatisfait < ... < Très satisfait`). On peut alors calculer des fréquences cumulées !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q4',
              type: 'mcq',
              prompt: 'Parmi les variables suivantes, laquelle est **qualitative ordinale** ?',
              options: [
                'La couleur des yeux.',
                'Le nombre d’enfants par foyer.',
                'Le navigateur web utilisé (Chrome, Firefox, Safari).',
                'La mention au Baccalauréat (Passable, Assez Bien, Bien, Très Bien).',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Les mentions sont des catégories non numériques mais naturellement hiérarchisées : c’est l’exemple type d’une variable qualitative ordinale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'propriete',
            stepBadge: 'Discrète vs Continue',
            stepTheme: 'violet',
            stepTitle: 'Distinguer quantitative discrète et quantitative continue',
            paragraphText:
              'Une variable quantitative **discrète** résulte en général d’un **comptage** (nombre d’arrivées au bureau de poste, nombre de pêches abîmées) ; une variable quantitative **continue** résulte d’une **mesure** sur un intervalle réel (taille en cm, masse d’un œuf en grammes, loyer mensuel).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q5',
              type: 'mcq',
              prompt: 'Soient deux variables : le nombre d’arrivées de clients au bureau de poste en 10 minutes et la masse en grammes des œufs pondus. Quelles sont respectivement leurs natures ?',
              options: [
                'Quantitative discrète et quantitative continue.',
                'Quantitative continue et quantitative discrète.',
                'Toutes deux quantitatives discrètes.',
                'Qualitative nominale et quantitative continue.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'Un nombre d’arrivées (entier $1, 2, 3, \\dots$) est discret ; une masse en grammes (regroupée en classes `[28, 38[`, etc.) est continue.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Cumuls autorisés',
            stepTheme: 'orange',
            stepTitle: 'Quand a-t-on le droit de calculer des fréquences cumulées ?',
            paragraphText:
              'Attention : les **fréquences cumulées** $F_j = f_1 + \\dots + f_j$ n’ont de sens **que si les modalités peuvent être ordonnées** (variables quantitatives discrètes/continues ou qualitatives **ordinales**). Pour une variable qualitative nominale (ex. loisirs), cumuler n’a aucun sens !',
            keyRule: 'Fréquences cumulées interdites pour une variable qualitative nominale !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p1_q6',
              type: 'mcq',
              prompt: 'Pour quel type de variable statistique le calcul des effectifs ou fréquences cumulés est-il **dénué de sens** ?',
              options: [
                'Qualitative ordinale.',
                'Qualitative nominale.',
                'Quantitative discrète.',
                'Quantitative continue.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Sans ordre naturel entre les modalités (qualitative nominale), l’ordre des lignes du tableau est arbitraire et le cumul ne veut rien dire.',
            },
          },
        ],
      }),

      // POINT 1.2
      makePoint({
        id: 'lmd_entd_l1_stat_ch1_p2',
        order: 2,
        title: 'Tableaux, fonction de répartition $F(x)$, Sturges et graphiques',
        summary:
          'Maîtriser fréquences cumulées croissantes/décroissantes, fonction de répartition empirique et choix du bon graphique (notamment l’histogramme des densités).',
        conceptExplanation:
          '• **Cumuls croissants et décroissants** : pour une variable discrète ordonnée $v_1 < \\dots < v_k$, la fréquence cumulée croissante est $F_j = \\sum_{i=1}^j f_i = p(X \\leqslant v_j)$, et la fréquence cumulée décroissante est $F_j^* = G_j = \\sum_{i=j}^k f_i = p(X \\geqslant v_j) = 1 - F_{j-1}$.\n' +
          '• **Fonction de répartition empirique $F(x)$** : définie sur $\\mathbb{R}$ à valeurs dans $[0, 1]$, $F(x) = p(X \\leqslant x)$. Pour une variable discrète, son graphe est une **courbe en escaliers** ; pour une variable continue en classes $[b_{j-1}, b_j[$ d’amplitude $a_j = b_j - b_{j-1}$ et de **densité** $d_j = f_j / a_j$, $F(x)$ est **affine par morceaux** : $F(x) = F_{j-1} + (x - b_{j-1}) d_j$. Dans les deux cas, $f_{]a, b]} = F(b) - F(a)$.\n' +
          '• **Règle de Sturges** : pour regrouper $n$ observations continues en $k$ classes, $k \\approx 1 + \\frac{10}{3} \\log_{10}(n)$ (ou $1 + \\log_2(n)$).\n' +
          '• **Graphiques** : diagramme en secteurs (angle $= 360^\\circ \\times f_j$) et tuyaux d’orgue pour les qualitatives ; diagramme en bâtons pour les discrètes ; **histogramme des densités** (hauteur proportionnelle à $d_j = f_j / a_j$, aire du rectangle $= f_j$) pour les continues !',
        formulas: [
          {
            name: 'Densité et aire dans un histogramme (classes inégales)',
            formula: 'a_j = b_j - b_{j-1}, \\qquad d_j = \\frac{f_j}{a_j}, \\qquad \\text{Aire}_j = a_j \\times d_j = f_j',
            note: 'Règle d’or : quand les amplitudes a_j sont inégales, la hauteur de chaque rectangle est la DENSITÉ d_j (et jamais l’effectif brut n_j !).',
          },
          {
            name: 'Angle d’un diagramme circulaire et règle de Sturges',
            formula: '\\theta_j = 360^\\circ \\times f_j, \\qquad k \\approx 1 + 3{,}322 \\log_{10}(n)',
            note: 'Pour un diagramme semi-circulaire, on remplace 360° par 180°.',
          },
        ],
        keyRule:
          'Dans un histogramme à classes d’**amplitudes inégales**, on porte impérativement la **densité** $d_j = f_j / a_j$ (ou $n_j / a_j$) en ordonnée, afin que l’**aire** de chaque rectangle reste proportionnelle à la fréquence !',
        workedExample: {
          title: 'Lecture de fréquences cumulées et densité d’histogramme',
          statement:
            '1) Avec 100 caissettes, les effectifs du nombre de pêches abîmées sont : `0→12, 1→29, 2→31, 3→17, 4→5, 5→1, 6→2, 7→2, 8→0, 9→1`. Trouver le nombre de caissettes ayant au moins 3 pêches abîmées et la proportion en ayant au plus 4. 2) Pour la classe de loyer `[200 000 ; 300 000[` d’effectif $30$ sur $180$, calculer sa densité.',
          methodSteps: [
            '1) Effectifs cumulés croissants : $N_0 = 12$, $N_1 = 41$, $N_2 = 72$, $N_3 = 89$, $N_4 = 94$.',
            'Caissettes ayant **au moins 3** pêches abîmées ($X \\geqslant 3$) : $N_3^* = 100 - N_2 = 100 - 72 = 28$ (vérification : $17 + 5 + 1 + 2 + 2 + 0 + 1 = 28$).',
            'Proportion ayant **au plus 4** pêches abîmées ($X \\leqslant 4$) : $F_4 = \\frac{N_4}{100} = \\frac{94}{100} = 94\\%$.',
            '2) Pour `[200 000 ; 300 000[`, $f_4 = \\frac{30}{180} = \\frac{1}{6}$ et l’amplitude est $a_4 = 100\\,000$ F CFA (ou $100$ milliers de F CFA), donc la densité vaut $d_4 = \\frac{1/6}{100} \\approx 0{,}00167$ par millier de F CFA.',
          ],
          conclusion:
            '28 caissettes ont au moins 3 pêches abîmées, 94 % en ont au plus 4, et la hauteur de la classe de loyer doit être corrigée par son amplitude $a_4 = 100\\,000$.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Diagramme circulaire',
            stepTheme: 'green',
            stepTitle: 'Calculer l’angle d’un secteur circulaire',
            paragraphText:
              'Dans un diagramme en secteurs (cercle complet), la fréquence totale $1$ (ou $100\\%$) correspond à $360^\\circ$. Une modalité de fréquence $f_j = n_j / n$ occupe donc un angle au centre de $\\theta_j = 360^\\circ \\times f_j$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q1',
              type: 'mcq',
              prompt: 'Dans l’enquête sur 20 personnes, 5 personnes choisissent le Sport. Quel angle représente « Sport » sur un diagramme circulaire ($360^\\circ$) ?',
              options: ['$45^\\circ$', '$90^\\circ$', '$72^\\circ$', '$180^\\circ$'],
              correctAnswerIndex: 1,
              explanation:
                'La fréquence est $f = \\frac{5}{20} = 0{,}25$, donc l’angle vaut $360^\\circ \\times 0{,}25 = 90^\\circ$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Cumuls décroissants',
            stepTheme: 'violet',
            stepTitle: 'Relation entre $F_j^*$ (au moins $v_j$) et $F_{j-1}$',
            paragraphText:
              'Pour une variable discrète, la proportion d’individus vérifiant $X \\geqslant v_j$ est $F_j^* = 1 - F_{j-1}$ (et **non** $1 - F_j$, qui donne $X > v_j$ strictement !).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q2',
              type: 'mcq',
              prompt: 'Dans une série discrète où $F(2) = 0{,}72$ et $F(3) = 0{,}89$, quelle est la proportion d’individus ayant une valeur **au moins égale à $3$** ($X \\geqslant 3$) ?',
              options: ['$0{,}11$', '$0{,}17$', '$0{,}28$', '$0{,}72$'],
              correctAnswerIndex: 2,
              explanation:
                '$p(X \\geqslant 3) = 1 - p(X \\leqslant 2) = 1 - F(2) = 1 - 0{,}72 = 0{,}28$ (soit $28\\%$).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Fonction de répartition',
            stepTheme: 'blue',
            stepTitle: 'Courbe de la fonction de répartition empirique $F(x)$',
            paragraphText:
              'La fonction $F(x) = p(X \\leqslant x)$ est croissante de $0$ à $1$. Pour une variable quantitative **discrète**, son graphe (diagramme intégral) est une **courbe en escaliers** ; pour une variable quantitative **continue** regroupée en classes, son graphe est une **ligne brisée continue** (polygone des fréquences cumulées).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q3',
              type: 'mcq',
              prompt: 'Dans le cas d’une variable quantitative **discrète**, quelle forme prend la représentation graphique de la fonction de répartition empirique $F(x)$ ?',
              options: [
                'Une courbe en escaliers croissante de $0$ à $1$.',
                'Un diagramme en secteurs circulaires.',
                'Un nuage de points aléatoire.',
                'Une droite décroissante.',
              ],
              correctAnswerIndex: 0,
              explanation:
                ', le diagramme intégral d’une variable discrète est une courbe en escaliers avec des sauts égaux à $f_j$ aux abscisses $v_j$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Histogramme',
            stepTheme: 'orange',
            stepTitle: 'Classes d’amplitudes inégales : densité obligatoire !',
            paragraphText:
              'Avec loyers à Abidjan, la classe `[150 000 ; 200 000[` a une amplitude de $50\\,000$ (effectif $50$), tandis que `[200 000 ; 300 000[` a une amplitude double de $100\\,000$ (effectif $30$). Pour comparer honnêtement leur concentration, il faut diviser chaque effectif (ou fréquence) par l’amplitude $a_j$ : c’est la **densité** $d_j$.',
            keyRule: 'Amplitudes inégales $\\implies$ hauteur du rectangle $= d_j = \\frac{f_j}{a_j}$ (ou effectif corrigé $n_j / a_j$).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q4',
              type: 'mcq',
              prompt: 'Une classe $[10, 20[$ contient $20$ individus et une classe $[20, 40[$ contient $30$ individus. Quelle classe a la **plus grande hauteur** dans un histogramme des densités ?',
              options: [
                'La classe $[20, 40[$ car $30 > 20$.',
                'Les deux classes ont la même hauteur.',
                'On ne peut pas tracer d’histogramme avec des amplitudes différentes.',
                'La classe $[10, 20[$, car sa densité d’effectif est $20/10 = 2$ contre $30/20 = 1{,}5$ pour $[20, 40[$.',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’amplitude de $[10, 20[$ est $10$ ($20/10 = 2$ individus par unité) ; celle de $[20, 40[$ est $20$ ($30/20 = 1{,}5$ individus par unité). La hauteur est donc plus élevée sur $[10, 20[$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Règle de Sturges',
            stepTheme: 'green',
            stepTitle: 'Choisir le nombre de classes avec Sturges',
            paragraphText:
              'Pour construire un tableau de classes sur $n = 40$ tailles d’étudiants, la règle de Sturges donne $k \\approx 1 + 3{,}322 \\log_{10}(40) \\approx 1 + 3{,}322 \\times 1{,}602 \\approx 6{,}32$, soit **6 classes**.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q5',
              type: 'mcq',
              prompt: 'Selon la règle de Sturges $k \\approx 1 + 3{,}322 \\log_{10}(n)$, combien de classes recommande-t-on environ pour $n = 100$ observations ?',
              options: [
                'Environ $3$ classes.',
                'Environ $8$ classes (car $1 + 3{,}322 \\times 2 = 7{,}64$).',
                'Environ $20$ classes.',
                'Environ $50$ classes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                '$\\log_{10}(100) = 2$, donc $k \\approx 1 + 3{,}322 \\times 2 = 7{,}644$, qu’on arrondit à $8$ classes (ou $7$–$8$ classes).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'methode',
            stepBadge: 'Interpolation F(x)',
            stepTheme: 'green',
            stepTitle: 'Calculer une proportion dans un intervalle continu via $F(x)$',
            paragraphText:
              'Pour une variable continue regroupée en classes, on suppose les observations uniformément réparties à l’intérieur de chaque classe : sur $[b_{j-1}, b_j[$, $F(x) = F_{j-1} + (x - b_{j-1}) \\cdot \\frac{f_j}{a_j}$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch1_p2_q6',
              type: 'mcq',
              prompt: 'Si $F(60) = 0{,}20$ et $F(70) = 0{,}60$ sur la classe $[60, 70[$, quelle est la valeur interpolée de $F(65)$ ?',
              options: ['$0{,}25$', '$0{,}35$', '$0{,}40$', '$0{,}50$'],
              correctAnswerIndex: 2,
              explanation:
                '$65$ est exactement au milieu de $[60, 70[$ : $F(65) = 0{,}20 + (65 - 60) \\times \\frac{0{,}60 - 0{,}20}{10} = 0{,}20 + 0{,}20 = 0{,}40$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 2 : Résumés numériques d'une série univariée
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_stat_ch2',
    subjectId: 'lmd_stat_descriptive',
    gradeLevel: 'lmd_entd_l1',
    order: 2,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Statistique Descriptive',
    title: 'Chapitre 2 — Résumés numériques : tendance centrale, dispersion et boxplots',
    summary:
      'Mode, moyenne arithmétique, médiane et quartiles (discret et continu par interpolation linéaire), variance (König-Huygens), écart-type, intervalle interquartile et boîte à moustaches.',
    points: [
      // POINT 2.1
      makePoint({
        id: 'lmd_entd_l1_stat_ch2_p1',
        order: 1,
        title: 'Paramètres de tendance centrale : mode, moyenne, médiane et quartiles',
        summary:
          'Calculer et interpréter mode, moyenne, médiane et quartiles sur des données brutes, discrètes ou regroupées en classes.',
        conceptExplanation:
          'Les **paramètres de position (ou de tendance centrale)** résument l’ordre de grandeur de la distribution :\n\n' +
          '• **Mode ($Mo$)** : modalité d’effectif (ou de fréquence) maximal. Pour une variable continue en classes, la **classe modale** est celle de **densité $d_j = f_j / a_j$ maximale** (et non d’effectif maximal si les amplitudes sont inégales !).\n' +
          '• **Moyenne arithmétique ($\\bar{x}$)** : $\\bar{x} = \\frac{1}{n} \\sum n_j c_j = \\sum f_j c_j$ (où $c_j$ est le centre de la classe $[b_{j-1}, b_j[$ dans le cas continu). Elle est **linéaire** ($\\overline{ax + b} = a\\bar{x} + b$), mais **sensible aux valeurs extrêmes** (outliers).\n' +
          '• **Médiane ($Me = Q_2$)** : valeur partageant la population ordonnée en deux moitiés égales ($F(Me) = 0{,}5$). Plus **robuste** que la moyenne face aux valeurs aberrantes.\n' +
          '• **Quartiles ($Q_1, Q_2, Q_3$)** : valeurs partageant la population en 4 quarts ($25\\%, 50\\%, 75\\%$). En continu, dans la classe $[a, b[$ contenant la fréquence cumulée $p$ ($0{,}25 ; 0{,}50 ; 0{,}75$), on calcule par **interpolation linéaire** : $q_p = a + (b - a) \\frac{p - F(a)}{F(b) - F(a)}$.',
        formulas: [
          {
            name: 'Moyenne arithmétique pondérée',
            formula: '\\bar{x} = \\frac{1}{n} \\sum_{j=1}^{k} n_j x_j = \\sum_{j=1}^{k} f_j x_j',
            note: 'En continu, x_j est remplacé par le centre de classe c_j = (b_{j-1} + b_j) / 2.',
          },
          {
            name: 'Interpolation linéaire de la médiane (et quartiles)',
            formula: 'Me = a + (b - a) \\times \\frac{0{,}5 - F(a)}{F(b) - F(a)}',
            note: 'Formule classique de Galton en statistique bivariée.',
          },
        ],
        keyRule:
          'Moyenne = sensible aux valeurs extrêmes ; Médiane = **robuste** ! Et pour trouver la classe modale avec amplitudes inégales, comparer toujours les **densités** $d_j = f_j / a_j$.',
        workedExample: {
          title: 'Moyenne, classe modale et médiane des poids de 60 étudiants',
          statement:
            'Poids de $n = 60$ étudiants (classes d’amplitude égale $10$) : `[50,60[ : 7`, `[60,70[ : 25`, `[70,80[ : 21`, `[80,90[ : 2`, `[90,100] : 5`. Calculer la classe modale, la moyenne $\\bar{x}$ et la médiane $Me$.',
          methodSteps: [
            'Amplitudes égales ($a_j = 10$) : la classe modale est celle d’effectif maximal, soit `[60, 70[` ($n_2 = 25$).',
            'Centres de classes : $55, 65, 75, 85, 95$. Somme $\\sum n_j c_j = 7(55) + 25(65) + 21(75) + 2(85) + 5(95) = 385 + 1625 + 1575 + 170 + 475 = 4230$.',
            'Moyenne : $\\bar{x} = \\frac{4230}{60} = 70{,}5$ kg.',
            'Effectifs cumulés : $N_1 = 7$, $N_2 = 32$, $N_3 = 53$, $N_4 = 55$, $N_5 = 60$. Comme $n/2 = 30 \\in ]7, 32]$, la classe médiane est `[60, 70[`.',
            'Interpolation : $Me = 60 + 10 \\times \\frac{30 - 7}{32 - 7} = 60 + 10 \\times \\frac{23}{25} = 60 + 9{,}2 = 69{,}2$ kg.',
          ],
          conclusion:
            'Classe modale `[60, 70[`, moyenne $\\bar{x} = 70{,}5$ kg, médiane $Me = 69{,}2$ kg.',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'Interpolation',
            stepTheme: 'green',
            stepTitle: 'Calculer la médiane par interpolation linéaire (Ex. Galton)',
            paragraphText:
              'Pour une variable continue, on repère la première classe $[a, b[$ dont la fréquence cumulée atteint ou dépasse $50\\%$ ($0{,}5$), puis on applique $Me = a + (b - a)\\frac{0{,}5 - F(a)}{F(b) - F(a)}$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q1',
              type: 'mcq',
              prompt: 'La classe médiane d’une série de loyers est `[150 ; 200[` (en milliers de F CFA), avec $F(150) = 0{,}40$ et $F(200) = 0{,}80$. Quelle est la médiane $Me$ ?',
              options: ['$175$', '$162{,}5$', '$160$', '$180$'],
              correctAnswerIndex: 1,
              explanation:
                '$Me = 150 + (200 - 150) \\times \\frac{0{,}50 - 0{,}40}{0{,}80 - 0{,}40} = 150 + 50 \\times \\frac{0{,}10}{0{,}40} = 150 + 12{,}5 = 162{,}5$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Linéarité',
            stepTheme: 'violet',
            stepTitle: 'Changement d’échelle sur la moyenne (conversion pouces → cm)',
            paragraphText:
              'Si $Y = aX + b$, alors $\\bar{y} = a\\bar{x} + b$. Ainsi dans l’exercice 2 de Galton, la taille moyenne en pouces $\\mu = 68{,}30$ se convertit directement en centimètres par $68{,}30 \\times 2{,}54 = 173{,}48$ cm sans refaire les sommes !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q2',
              type: 'mcq',
              prompt: 'La moyenne des notes d’une promo est $\\bar{x} = 11{,}5$. Le professeur augmente toutes les notes de $10\\%$ puis ajoute $0{,}5$ point ($y_i = 1{,}1 x_i + 0{,}5$). Que vaut la nouvelle moyenne $\\bar{y}$ ?',
              options: ['$12{,}00$', '$12{,}65$', '$13{,}15$', '$13{,}20$'],
              correctAnswerIndex: 2,
              explanation:
                'Par linéarité de la moyenne : $\\bar{y} = 1{,}1 \\times 11{,}5 + 0{,}5 = 12{,}65 + 0{,}5 = 13{,}15$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Robustesse',
            stepTheme: 'orange',
            stepTitle: 'Sensibilité de la moyenne aux valeurs aberrantes',
            paragraphText:
              'Avec loyers à Abidjan, la présence de quelques loyers très élevés (`[800 000 ; 1 500 000[`) tire la moyenne arithmétique vers le haut, alors que la médiane reste insensible à la valeur exacte des extrêmes. C’est pourquoi on publie souvent le **revenu médian** en économie !',
            keyRule: 'Distribution étalée à droite (quelques très grandes valeurs) $\\implies \\text{Moyenne} > \\text{Médiane}$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q3',
              type: 'mcq',
              prompt: 'On remplace la plus grande valeur de la série ordonnée `{10, 12, 14, 16, 18}` par `180`. Quel paramètre de position reste **strictement inchangé** ?',
              options: [
                'La médiane (elle reste égale à $14$).',
                'La moyenne arithmétique.',
                'L’étendue.',
                'L’écart-type.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'La moyenne passe de $14$ à $46{,}4$, mais la valeur centrale (3e sur 5) reste exactement $Me = 14$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'definition',
            stepBadge: 'Quartiles',
            stepTheme: 'blue',
            stepTitle: 'Signification concrète des quartiles $Q_1, Q_2, Q_3$',
            paragraphText:
              'Au moins $25\\%$ des observations sont inférieures ou égales à $Q_1$, au moins $50\\%$ à $Q_2 = Me$, et au moins $75\\%$ à $Q_3$. Entre $Q_1$ et $Q_3$ se situent donc les **$50\\%$ centraux** de la population.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q4',
              type: 'mcq',
              prompt: 'Dans une étude sur les salaires, on trouve $Q_1 = 180\\,000$ F CFA et $Q_3 = 420\\,000$ F CFA. Quelle interprétation est exacte ?',
              options: [
                'La moyenne des salaires est de $300\\,000$ F CFA.',
                '$75\\%$ des salariés gagnent plus de $420\\,000$ F CFA.',
                'Aucun salarié ne gagne moins de $180\\,000$ F CFA.',
                'La moitié centrale ($50\\%$) des salariés gagne entre $180\\,000$ et $420\\,000$ F CFA.',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$25\\%$ gagnent au plus $Q_1$ et $75\\%$ gagnent au plus $Q_3$, donc $75\\% - 25\\% = 50\\%$ se situent dans $[Q_1, Q_3]$.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'piege',
            stepBadge: 'Classe modale',
            stepTheme: 'orange',
            stepTitle: 'Classe modale quand les amplitudes sont inégales',
            paragraphText:
              'Avec masse des œufs, les classes `[48, 53[` ($a=5, n=74$), `[53, 58[` ($a=5, n=112$) et `[63, 73[` ($a=10, n=62$) n’ont pas la même amplitude. La classe modale est toujours celle dont la **densité** $n_j / a_j$ est maximale (ici `[53, 58[` avec $112/5 = 22{,}4$).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q5',
              type: 'mcq',
              prompt: 'Soient deux classes : `[0, 10[` d’effectif $25$ et `[10, 30[` d’effectif $40$. Laquelle est la classe modale ?',
              options: [
                '`[10, 30[` car $40 > 25$.',
                '`[0, 10[` car sa densité est $25/10 = 2{,}5$, supérieure à celle de `[10, 30[` ($40/20 = 2$).',
                'Aucune, car les amplitudes diffèrent.',
                'Leur réunion `[0, 30[`.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Pour des classes d’amplitudes inégales, la classe modale est celle de plus grande **densité** ($2{,}5 > 2$).',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Médiane discrète',
            stepTheme: 'slate',
            stepTitle: 'Médiane d’une série de taille paire vs impaire',
            paragraphText:
              'Pour une série ordonnée de taille impaire $n = 2p + 1$, la médiane est la $(p+1)$-ième valeur. Pour une taille paire $n = 2p$, on prend par convention le milieu entre la $p$-ième et la $(p+1)$-ième valeur.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p1_q6',
              type: 'mcq',
              prompt: 'Quelle est la médiane de la série de 6 âges : `{14, 25, 30, 35, 40, 50}` ?',
              options: ['$30$', '$35$', '$32{,}5$', '$32$'],
              correctAnswerIndex: 2,
              explanation:
                '$n = 6$ est pair : la médiane est la moyenne des 3e et 4e valeurs ordonnées, soit $\\frac{30 + 35}{2} = 32{,}5$.',
            },
          },
        ],
      }),

      // POINT 2.2
      makePoint({
        id: 'lmd_entd_l1_stat_ch2_p2',
        order: 2,
        title: 'Paramètres de dispersion : variance, écart-type, IQR et boîte à moustaches',
        summary:
          'Quantifier l’étalement d’une série par la formule de König-Huygens, le coefficient de variation et construire un boxplot.',
        conceptExplanation:
          'Deux séries peuvent avoir la même moyenne tout en étant très différemment dispersées. On mesure la dispersion par :\n\n' +
          '• **Étendue** : $e = x_{\\max} - x_{\\min}$ (très sensible aux extrêmes).\n' +
          '• **Écart interquartile** : $\\text{IQR} = Q_3 - Q_1$ (dispersion robuste des $50\\%$ centraux).\n' +
          '• **Variance** : $V(X) = \\sigma_X^2 = \\frac{1}{n} \\sum n_j (x_j - \\bar{x})^2$. En pratique, on utilise la **formule de König-Huygens** : $V(X) = \\left(\\frac{1}{n} \\sum n_j x_j^2\\right) - \\bar{x}^2$ (moyenne des carrés moins carré de la moyenne).\n' +
          '  *Note échantillon* : dans certains logiciels et en statistique inférentielle (`Chap2`), on utilise la variance corrigée $s^{*2} = \\frac{1}{n - 1} \\sum (x_i - \\bar{x})^2$.\n' +
          '• **Écart-type** : $\\sigma_X = \\sqrt{V(X)}$, exprimé dans la **même unité** que $X$. Propriété affine : $V(aX + b) = a^2 V(X)$ et $\\sigma(aX + b) = |a|\\,\\sigma(X)$.\n' +
          '• **Coefficient de variation** : $CV = \\frac{\\sigma_X}{|\\bar{x}|}$ (sans unité, permet de comparer la dispersion de deux séries d’unités différentes).\n' +
          '• **Boîte à moustaches (Boxplot)** : résume 5 nombres : minimum (ou moustache basse $Q_1 - 1{,}5\\,\\text{IQR}$), $Q_1$, $Me$, $Q_3$, et maximum (ou moustache haute $Q_3 + 1{,}5\\,\\text{IQR}$).',
        formulas: [
          {
            name: 'Formule de König-Huygens (Variance)',
            formula: 'V(X) = \\sigma_X^2 = \\frac{1}{n} \\sum_{j=1}^{k} n_j x_j^2 - \\bar{x}^2',
            note: 'Toujours positive ou nulle : si le calcul donne un nombre négatif, il y a une erreur de calcul !',
          },
          {
            name: 'Transformation affine de la variance et de l’écart-type',
            formula: 'V(aX + b) = a^2 V(X), \\qquad \\sigma(aX + b) = |a|\\,\\sigma(X)',
            note: 'Ajouter une constante b ne modifie JAMAIS la dispersion !',
          },
        ],
        keyRule:
          'Ajouter une constante $b$ à toutes les données décale la moyenne de $+b$ mais laisse la **variance et l’écart-type inchangés** !',
        workedExample: {
          title: 'Calcul de variance et d’écart-type par König-Huygens (Série discrète)',
          statement:
            'Soient les notes d’un petit groupe : `{8, 10, 10, 12, 15}` ($n = 5$). Calculer la moyenne $\\bar{x}$, la variance $V(X)$ par König-Huygens, l’écart-type $\\sigma_X$ et l’écart-type corrigé $s^*$.',
          methodSteps: [
            'Moyenne : $\\bar{x} = \\frac{8 + 10 + 10 + 12 + 15}{5} = \\frac{55}{5} = 11$.',
            'Moyenne des carrés : $\\frac{8^2 + 10^2 + 10^2 + 12^2 + 15^2}{5} = \\frac{64 + 100 + 100 + 144 + 225}{5} = \\frac{633}{5} = 126{,}6$.',
            'Variance (population) : $V(X) = 126{,}6 - 11^2 = 126{,}6 - 121 = 5{,}6$, d’où $\\sigma_X = \\sqrt{5{,}6} \\approx 2{,}37$.',
            'Écart-type corrigé (échantillon, diviseur $n - 1 = 4$) : $s^{*2} = \\frac{5}{4} \\times 5{,}6 = 7$, d’où $s^* = \\sqrt{7} \\approx 2{,}65$.',
          ],
          conclusion: '$\\bar{x} = 11$, $V(X) = 5{,}6$, $\\sigma_X \\approx 2{,}37$ (et $s^* \\approx 2{,}65$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'methode',
            stepBadge: 'König-Huygens',
            stepTheme: 'green',
            stepTitle: 'Calculer une variance par la formule développée',
            paragraphText:
              'La formule de König-Huygens $V(X) = \\overline{X^2} - \\bar{X}^2$ évite les arrondis intermédiaires sur $(x_i - \\bar{x})$. Elle s’applique directement aux séries statistiques bivariées classiques (pluviométrie, données de Galton).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q1',
              type: 'mcq',
              prompt: 'Pour une série de $n = 10$ observations, on connaît $\\sum x_i = 50$ et $\\sum x_i^2 = 340$. Quelle est la variance $V(X)$ (diviseur $n$) ?',
              options: ['$9$', '$34$', '$29$', '$3$'],
              correctAnswerIndex: 0,
              explanation:
                '$\\bar{x} = \\frac{50}{10} = 5$ et $\\frac{1}{n}\\sum x_i^2 = \\frac{340}{10} = 34$. Par König-Huygens : $V(X) = 34 - 5^2 = 34 - 25 = 9$ (et $\\sigma_X = 3$).',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'propriete',
            stepBadge: 'Transformation affine',
            stepTheme: 'violet',
            stepTitle: 'Effet d’une transformation $Y = aX + b$ sur $\\sigma$ et $V$',
            paragraphText:
              'Si on multiplie toutes les valeurs par $a$ et qu’on ajoute $b$ : $V(aX + b) = a^2 V(X)$ et $\\sigma(aX + b) = |a|\\,\\sigma(X)$. Dans Galton, convertir les tailles de pouces en cm ($\\times 2{,}54$) multiplie l’écart-type $\\sigma = 2{,}47$ par $2{,}54$ ($6{,}27$ cm).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q2',
              type: 'mcq',
              prompt: 'Une série $X$ a pour écart-type $\\sigma_X = 4$. Quel est l’écart-type de la série $Y = -3X + 10$ ?',
              options: ['$-12$', '$12$', '$22$', '$36$'],
              correctAnswerIndex: 1,
              explanation:
                '$\\sigma(Y) = |-3| \\cdot \\sigma(X) = 3 \\times 4 = 12$. La constante $+10$ n’a aucun effet et un écart-type est toujours positif.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'definition',
            stepBadge: 'Boxplot',
            stepTheme: 'blue',
            stepTitle: 'Lecture d’une boîte à moustaches (boxplot)',
            paragraphText:
              'La boîte centrale d’un boxplot s’étend de $Q_1$ à $Q_3$ (sa longueur est l’écart interquartile $\\text{IQR} = Q_3 - Q_1$, contenant $50\\%$ des données), et le trait à l’intérieur représente la **médiane $Me$** (pas la moyenne !). Les moustaches s’étendent jusqu’aux extrêmes (ou jusqu’à $Q_1 - 1{,}5\\,\\text{IQR}$ et $Q_3 + 1{,}5\\,\\text{IQR}$, au-delà desquels les points sont signalés comme valeurs atypiques).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q3',
              type: 'mcq',
              prompt: 'Dans une boîte à moustaches (boxplot), que représente la largeur (ou hauteur) du rectangle central ?',
              options: [
                'L’étendue totale $x_{\\max} - x_{\\min}$.',
                'Deux fois l’écart-type $2\\sigma$.',
                'L’intervalle interquartile $\\text{IQR} = Q_3 - Q_1$, qui regroupe les $50\\%$ centraux des observations.',
                'La variance $V(X)$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Les bords de la boîte sont $Q_1$ et $Q_3$ : la boîte couvre donc l’intervalle interquartile $\\text{IQR} = Q_3 - Q_1$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'propriete',
            stepBadge: 'Variance nulle',
            stepTheme: 'violet',
            stepTitle: 'Quand la variance est-elle nulle ?',
            paragraphText:
              'Comme $V(X) = \\frac{1}{n} \\sum (x_i - \\bar{x})^2$ est une somme de carrés, $V(X) \\geqslant 0$, et $V(X) = 0$ si et seulement si **toutes les observations sont identiques** (série constante : $x_1 = x_2 = \\dots = x_n = \\bar{x}$).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q4',
              type: 'mcq',
              prompt: 'Que peut-on affirmer d’une série statistique dont l’écart-type vaut $\\sigma_X = 0$ ?',
              options: [
                'La moyenne vaut forcément $0$.',
                'La série contient autant de valeurs positives que négatives.',
                'La série ne contient qu’une seule observation.',
                'Toutes les observations de la série sont exactement égales à la moyenne $\\bar{x}$.',
              ],
              correctAnswerIndex: 3,
              explanation:
                '$\\sum (x_i - \\bar{x})^2 = 0 \\iff \\forall i,\\ x_i = \\bar{x}$. La dispersion est totalement nulle.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'methode',
            stepBadge: 'Coefficient de variation',
            stepTheme: 'green',
            stepTitle: 'Comparer la dispersion de deux séries d’unités différentes',
            paragraphText:
              'Pour savoir si les tailles (en cm, $\\bar{x} = 170, \\sigma = 8{,}5$) sont plus ou moins dispersées que les poids (en kg, $\\bar{y} = 70, \\sigma = 7$), on compare les **coefficients de variation** sans unité : $CV_X = \\frac{8{,}5}{170} = 5\\%$ contre $CV_Y = \\frac{7}{70} = 10\\%$ (les poids sont relativement deux fois plus dispersés).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q5',
              type: 'mcq',
              prompt: 'Quel indicateur sans unité permet de comparer la dispersion relative des loyers à Abidjan (en F CFA) et à Paris (en euros) ?',
              options: [
                'Le coefficient de variation $CV = \\frac{\\sigma}{|\\bar{x}|}$.',
                'L’étendue $x_{\\max} - x_{\\min}$.',
                'La variance $V(X)$.',
                'La médiane $Me$.',
              ],
              correctAnswerIndex: 0,
              explanation:
                'En divisant l’écart-type par la moyenne, les unités (F CFA ou euros) s’annulent : le coefficient de variation $CV$ est un pourcentage pur comparable d’une devise à l’autre.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'piege',
            stepBadge: 'Détection d’outliers',
            stepTheme: 'orange',
            stepTitle: 'Seuil usuel de Tukey pour les valeurs atypiques (boxplot)',
            paragraphText:
              'Selon la règle usuelle de Tukey dans un boxplot, une observation est considérée comme valeur atypique (outlier) si elle est strictement inférieure à $Q_1 - 1{,}5\\,\\text{IQR}$ ou strictement supérieure à $Q_3 + 1{,}5\\,\\text{IQR}$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch2_p2_q6',
              type: 'mcq',
              prompt: 'Une distribution possède $Q_1 = 20$ et $Q_3 = 30$ (donc $\\text{IQR} = 10$). À partir de quel seuil supérieur une observation est-elle considérée comme atypique selon la règle de Tukey ?',
              options: ['$35$', '$45$', '$40$', '$60$'],
              correctAnswerIndex: 1,
              explanation:
                'Seuil haut $= Q_3 + 1{,}5 \\times \\text{IQR} = 30 + 1{,}5 \\times 10 = 30 + 15 = 45$.',
            },
          },
        ],
      }),
    ],
  },

  // --------------------------------------------------------------------------
  // CHAPITRE 3 : Séries statistiques bivariées et corrélation
  // --------------------------------------------------------------------------
  {
    id: 'lmd_entd_l1_stat_ch3',
    subjectId: 'lmd_stat_descriptive',
    gradeLevel: 'lmd_entd_l1',
    order: 3,
    officialVolumeHours: 12,
    contentVersion: 2,
    source: 'ENTD L1 — Statistique Descriptive (CM Ch. 4, Chap2 Liaisons & statsL1_bivaries)',
    title: 'Chapitre 3 — Séries statistiques bivariées, contingence et corrélation',
    summary:
      'Tableaux de contingence, distributions marginales et conditionnelles, nuage de points, covariance, corrélation linéaire de Bravais-Pearson $r$, corrélation de rangs de Spearman $r_S$ et pièges d’interprétation.',
    points: [
      // POINT 3.1
      makePoint({
        id: 'lmd_entd_l1_stat_ch3_p1',
        order: 1,
        title: 'Tableaux de contingence, distributions marginales et conditionnelles',
        summary:
          'Construire et lire un tableau croisé, calculer profils lignes/colonnes et diagnostiquer l’indépendance entre deux variables.',
        conceptExplanation:
          'Lorsqu’on observe simultanément deux variables $X$ (modalités $x_1, \\dots, x_p$) et $Y$ (modalités $y_1, \\dots, y_q$) sur une même population de taille $n$, on résume les effectifs conjoints $n_{ij}$ dans un **tableau de contingence** à double entrée.\n\n' +
          '• **Effectifs et distributions marginales** : les sommes par ligne $n_{i\\bullet} = \\sum_j n_{ij}$ donnent la distribution marginale de $X$ ($f_{i\\bullet} = n_{i\\bullet}/n$), et les sommes par colonne $n_{\\bullet j} = \\sum_i n_{ij}$ donnent celle de $Y$ ($f_{\\bullet j} = n_{\\bullet j}/n$).\n' +
          '• **Distributions conditionnelles (profils)** : la distribution de $X$ sachant $Y = y_j$ s’obtient en divisant chaque case de la colonne $j$ par le **total de cette colonne** : $f_{i|j} = \\frac{n_{ij}}{n_{\\bullet j}}$. De même, $f_{j|i} = \\frac{n_{ij}}{n_{i\\bullet}}$ est le profil ligne de $Y$ sachant $X = x_i$.\n' +
          '• **Indépendance** : deux variables $X$ et $Y$ sont indépendantes si toutes les distributions conditionnelles sont identiques à la distribution marginale, soit $\\forall (i, j),\\ f_{ij} = f_{i\\bullet} \\times f_{\\bullet j}$ (ou $n_{ij} = \\frac{n_{i\\bullet} \\cdot n_{\\bullet j}}{n}$).',
        formulas: [
          {
            name: 'Fréquences conditionnelles (profils)',
            formula: 'f(X = x_i \\mid Y = y_j) = \\frac{n_{ij}}{n_{\\bullet j}}, \\qquad f(Y = y_j \\mid X = x_i) = \\frac{n_{ij}}{n_{i\\bullet}}',
            note: 'Attention à ne jamais inverser le conditionnement : P(Chrome | Mac) ≠ P(Mac | Chrome) !',
          },
          {
            name: 'Critère d’indépendance dans un tableau de contingence',
            formula: '\\forall (i, j),\\quad n_{ij} = \\frac{n_{i\\bullet} \\times n_{\\bullet j}}{n} \\iff f_{ij} = f_{i\\bullet} \\cdot f_{\\bullet j}',
            note: 'Si les profils colonnes (diagrammes en tuyaux d’orgue) diffèrent fortement, il y a liaison.',
          },
        ],
        keyRule:
          'Toujours identifier clairement le **dénominateur** demandé : « Parmi les utilisateurs de Mac, quelle proportion utilise Chrome ? » → on divise par le total **Mac** ($n_{\\text{Mac}}$), pas par l’effectif global $n$ !',
        workedExample: {
          title: 'Navigateurs et systèmes d’exploitation sur 113 457 visiteurs',
          statement:
            'Sur $n = 113\\,457$ visiteurs d’un site web, $95\\,987$ sont sous Windows, $12\\,057$ sous Mac et $5\\,413$ sous Linux. Parmi les $7\\,084$ utilisateurs de Safari, $668$ sont sous Windows et $6\\,416$ sous Mac (0 sous Linux). Calculer $P(\\text{Safari})$, $P(\\text{Safari} \\mid \\text{Mac})$ et $P(\\text{Mac} \\mid \\text{Safari})$.',
          methodSteps: [
            'Proportion marginale de Safari : $P(\\text{Safari}) = \\frac{7\\,084}{113\\,457} \\approx 6{,}24\\%$.',
            'Proportion de Safari **parmi les utilisateurs de Mac** : $P(\\text{Safari} \\mid \\text{Mac}) = \\frac{6\\,416}{12\\,057} \\approx 53{,}21\\%$.',
            'Proportion de Mac **parmi les utilisateurs de Safari** : $P(\\text{Mac} \\mid \\text{Safari}) = \\frac{6\\,416}{7\\,084} \\approx 90{,}57\\%$.',
            'Comme $P(\\text{Safari} \\mid \\text{Mac}) = 53{,}21\\%$ est radicalement différent de $P(\\text{Safari} \\mid \\text{Windows}) = \\frac{668}{95\\,987} \\approx 0{,}70\\%$, $X$ et $Y$ ne sont **pas indépendantes**.',
          ],
          conclusion:
            'Le système d’exploitation influe massivement sur le navigateur utilisé (forte association entre $X$ et $Y$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Contingence',
            stepTheme: 'blue',
            stepTitle: 'Effectif conjoint vs effectif marginal',
            paragraphText:
              'Dans un tableau de contingence, $n_{ij}$ compte les individus vérifiant **simultanément** $X = x_i$ et $Y = y_j$. Les effectifs marginaux $n_{i\\bullet}$ et $n_{\\bullet j}$ se lisent dans la colonne et la ligne « TOTAL » situées dans les **marges** du tableau.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q1',
              type: 'mcq',
              prompt: 'Dans l’exercice Navigateur/OS ($n = 113\\,457$), $1\\,186$ visiteurs utilisent Chrome sous Mac, et $12\\,057$ utilisent Mac au total. Comment calcule-t-on la proportion de visiteurs utilisant Chrome **parmi les utilisateurs de Mac** ?',
              options: [
                '$\\frac{1\\,186}{113\\,457}$',
                '$\\frac{1\\,186}{12\\,057} \\approx 9{,}84\\%$',
                '$\\frac{12\\,057}{113\\,457}$',
                '$\\frac{1\\,186}{15\\,716}$',
              ],
              correctAnswerIndex: 1,
              explanation:
                '« Parmi les utilisateurs de Mac » fixe la population de référence à la colonne Mac ($12\\,057$), donc $P(\\text{Chrome} \\mid \\text{Mac}) = \\frac{1\\,186}{12\\,057} \\approx 9{,}84\\%$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'piege',
            stepBadge: 'Inversion conditionnelle',
            stepTheme: 'orange',
            stepTitle: 'Ne pas confondre $P(A \\mid B)$ et $P(B \\mid A)$',
            paragraphText:
              'Dans l’exemple Safari/Windows : $P(\\text{Windows} \\mid \\text{Safari}) = \\frac{668}{7\\,084} = 9{,}43\\%$ (près d’un utilisateur Safari sur dix est sous Windows), tandis que $P(\\text{Safari} \\mid \\text{Windows}) = \\frac{668}{95\\,987} = 0{,}70\\%$ (moins de $1\\%$ des utilisateurs Windows utilisent Safari) !',
            keyRule: 'Les deux probabilités conditionnelles ont le même numérateur $n_{ij}$ mais des dénominateurs différents ($n_{i\\bullet}$ vs $n_{\\bullet j}$).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q2',
              type: 'mcq',
              prompt: 'Dans un tableau croisé, $668$ visiteurs utilisent Safari sous Windows, sur $7\\,084$ utilisateurs Safari et $95\\,987$ utilisateurs Windows. Que vaut $P(\\text{Windows} \\mid \\text{Safari})$ ?',
              options: [
                '$\\frac{668}{95\\,987} \\approx 0{,}70\\%$',
                '$\\frac{7\\,084}{95\\,987} \\approx 7{,}38\\%$',
                '$\\frac{668}{7\\,084} \\approx 9{,}43\\%$',
                '$\\frac{668}{113\\,457} \\approx 0{,}59\\%$',
              ],
              correctAnswerIndex: 2,
              explanation:
                'On conditionne par `X = Safari` : on extrait la ligne Safari (total $7\\,084$) et l’on calcule $\\frac{668}{7\\,084} \\approx 9{,}43\\%$.',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'propriete',
            stepBadge: 'Indépendance',
            stepTheme: 'violet',
            stepTitle: 'Calculer l’effectif théorique sous hypothèse d’indépendance',
            paragraphText:
              'Si $X$ et $Y$ étaient parfaitement indépendantes, chaque cellule contiendrait l’effectif théorique $e_{ij} = \\frac{n_{i\\bullet} \\times n_{\\bullet j}}{n}$. Plus les effectifs observés $n_{ij}$ s’écartent des $e_{ij}$, plus la liaison est forte.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q3',
              type: 'mcq',
              prompt: 'Dans une enquête sur $n = 200$ personnes, $80$ sont des femmes et $50$ préfèrent le produit A. Quel serait l’effectif théorique de femmes préférant le produit A si le sexe et la préférence étaient indépendants ?',
              options: ['$20$', '$40$', '$25$', '$30$'],
              correctAnswerIndex: 0,
              explanation:
                '$e_{ij} = \\frac{80 \\times 50}{200} = \\frac{4000}{200} = 20$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'methode',
            stepBadge: 'Visualisation',
            stepTheme: 'green',
            stepTitle: 'Diagnostiquer graphiquement la dépendance',
            paragraphText:
              'En traçant les profils conditionnels de $X$ sachant chaque modalité de $Y$ (diagramme en tuyaux d’orgue groupés ou barres empilées $100\\%$), les deux variables sont indépendantes ssi les profils ont la **même hauteur** d’un groupe à l’autre.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q4',
              type: 'mcq',
              prompt: 'Comment reconnaît-on l’indépendance de deux variables qualitatives sur un diagramme des profils conditionnels ?',
              options: [
                'Chaque barre vaut exactement $50\\%$.',
                'Le diagramme comporte uniquement deux modalités.',
                'Les profils sont strictement croissants.',
                'Les profils conditionnels de $X$ sont identiques pour toutes les modalités de $Y$ (et égaux au profil marginal).',
              ],
              correctAnswerIndex: 3,
              explanation:
                'L’indépendance signifie que connaître la modalité de $Y$ ne change pas la répartition de $X$ : les distributions conditionnelles sont toutes identiques.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Vocabulaire',
            stepTheme: 'blue',
            stepTitle: 'Association vs corrélation',
            paragraphText:
              'D’après le Chapitre « Étude de la liaison entre deux variables » (`Chap2`), on parle généralement d’**association** pour étudier le lien entre deux variables qualitatives, et de **corrélation** pour le lien entre deux variables quantitatives.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q5',
              type: 'mcq',
              prompt: 'Quelle affirmation traduit le mieux l’indépendance de deux variables « salaire » et « sexe » ?',
              options: [
                'Tous les employés ont le même salaire.',
                'Connaître le sexe d’un employé n’apporte aucune information sur la distribution de son salaire.',
                'Il y a autant d’hommes que de femmes dans l’entreprise.',
                'Le salaire moyen des hommes est le double de celui des femmes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Deux variables sont indépendantes lorsque la connaissance de la valeur prise par l’une sur un individu n’apporte aucune information sur la valeur de l’autre.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'exemple',
            stepBadge: 'Moyenne conditionnelle',
            stepTheme: 'slate',
            stepTitle: 'Extraire une distribution conditionnelle (Tableau de Galton)',
            paragraphText:
              'Dans le tableau croisé de Galton, pour calculer la taille moyenne des enfants dont les parents mesurent entre $68$ et $70$ pouces, on extrait uniquement la ligne correspondante ($402$ enfants) et l’on calcule la moyenne pondérée sur cette sous-population ($68{,}30$ pouces).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p1_q6',
              type: 'mcq',
              prompt: 'Pour calculer la moyenne conditionnelle $\\mu_{Y \\mid X = x_i}$ dans un tableau croisé, par quoi divise-t-on la somme $\\sum_j n_{ij} y_j$ ?',
              options: [
                'Par l’effectif total $n$ du tableau.',
                'Par le nombre de colonnes $q$.',
                'Par l’effectif marginal de la ligne $n_{i\\bullet} = \\sum_j n_{ij}$.',
                'Par l’écart-type de $X$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'La distribution conditionnelle sachant $X = x_i$ porte uniquement sur les $n_{i\\bullet}$ individus vérifiant $X = x_i$.',
            },
          },
        ],
      }),

      // POINT 3.2
      makePoint({
        id: 'lmd_entd_l1_stat_ch3_p2',
        order: 2,
        title: 'Nuage de points, covariance, Bravais-Pearson $r$ et Spearman $r_S$',
        summary:
          'Mesurer l’intensité et le sens d’une liaison quantitative avec $r$ et $r_S$, et déjouer les pièges classiques (non-linéarité, sous-groupes, causalité).',
        conceptExplanation:
          'Pour deux variables quantitatives $(x_i, y_i)$ observées sur $n$ individus, on trace d’abord le **nuage de points** centré autour du **point moyen (barycentre)** $G(\\bar{x}, \\bar{y})$.\n\n' +
          '• **Covariance** : $\\operatorname{Cov}(X, Y) = \\frac{1}{n} \\sum (x_i - \\bar{x})(y_i - \\bar{y}) = \\frac{1}{n} \\sum x_i y_i - \\bar{x}\\bar{y}$ (ou diviseur $n - 1$ pour $\\operatorname{cov}^*$ sur échantillon). Son signe indique le sens de variation, mais elle dépend des unités de mesure.\n' +
          '• **Coefficient de corrélation linéaire de Bravais-Pearson** : $r(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\operatorname{cov}^*(x, y)}{s_x^* s_y^*}$.\n' +
          '  — Indépendant des unités de mesure, toujours compris dans $[-1, 1]$.\n' +
          '  — $|r| = 1$ ssi les points sont **parfaitement alignés** sur une droite $Y = aX + b$.\n' +
          '  — $r = 0$ indique l’absence de liaison **linéaire** (mais n’exclut PAS une liaison non linéaire parfaite, ex. parabole !).\n' +
          '• **Coefficient de corrélation des rangs de Spearman $r_S$** (non paramétrique, pour toute relation **monotone**) : on remplace les $x_i$ et $y_i$ par leurs rangs $x_i\', y_i\'$. Sans ex-aequo : $r_S = 1 - \\frac{6 \\sum (x_i\' - y_i\')^2}{n(n^2 - 1)}$.',
        formulas: [
          {
            name: 'Covariance et coefficient de corrélation linéaire r',
            formula: '\\operatorname{Cov}(X, Y) = \\frac{1}{n} \\sum_{i=1}^{n} x_i y_i - \\bar{x}\\bar{y}, \\qquad r(X, Y) = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]',
            note: 'Exemple : QI père/fils r = 0,6071 ; jours/hauteur de pluie à Paris r = 0,680.',
          },
          {
            name: 'Coefficient de Spearman (sans ex-aequo)',
            formula: 'r_S(x, y) = 1 - \\frac{6 \\sum_{i=1}^{n} (x_i\' - y_i\')^2}{n(n^2 - 1)}',
            note: 'En présence d’ex-aequo, on attribue le rang moyen.',
          },
        ],
        keyRule:
          'Trois pièges majeurs à éviter : (1) $r = 0$ ne prouve pas l’indépendance (liaison parabolique possible), (2) une corrélation globale peut être un artefact de **sous-groupes** (ex. taille vs longueur des cheveux chez Hommes/Femmes), (3) **corrélation n’est pas causalité** !',
        workedExample: {
          title: 'Corrélation linéaire (pluie à Paris) et Spearman (QI père/fils) — Applications',
          statement:
            '1) Pour la pluie à Paris, on a $\\bar{x} = 175{,}125$, $\\bar{y} = 658{,}75$, $\\sigma_X = 18{,}306$, $\\sigma_Y = 115{,}670$ et $\\frac{1}{8}\\sum x_i y_i = 116\\,804{,}375$. Calculer $\\operatorname{Cov}(X, Y)$ et $r$. 2) Pour les QI père/fils ($n = 12$), $\\sum (x_i\' - y_i\')^2 = 102$. Calculer $r_S$.',
          methodSteps: [
            '1) $\\operatorname{Cov}(X, Y) = 116\\,804{,}375 - 175{,}125 \\times 658{,}75 = 116\\,804{,}375 - 115\\,363{,}594 = 1\\,440{,}781$.',
            '$r = \\frac{1\\,440{,}781}{18{,}306 \\times 115{,}670} = \\frac{1\\,440{,}781}{2\\,117{,}455} \\approx 0{,}680$ : corrélation linéaire positive assez forte.',
            '2) Formule de Spearman ($n = 12$, sans ex-aequo) : $r_S = 1 - \\frac{6 \\times 102}{12(12^2 - 1)} = 1 - \\frac{612}{12 \\times 143} = 1 - \\frac{612}{1716} \\approx 0{,}643$.',
          ],
          conclusion:
            'Pluie à Paris : $r \\approx 0{,}680$ ; QI père/fils : $r_S \\approx 0{,}643$ (proche de $r = 0{,}6071$).',
        },
        structuredSteps: [
          {
            stepNumber: 1,
            stepKind: 'definition',
            stepBadge: 'Bravais-Pearson',
            stepTheme: 'blue',
            stepTitle: 'Bornes et interprétation du coefficient $r$',
            paragraphText:
              'Le coefficient $r = \\frac{\\operatorname{Cov}(X, Y)}{\\sigma_X \\sigma_Y}$ est sans dimension et vérifie toujours $-1 \\leqslant r \\leqslant 1$. Plus $|r|$ est proche de $1$, plus le nuage est étiré le long d’une droite ; son signe donne la pente de la liaison ($+$ croissante, $-$ décroissante).',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q1',
              type: 'mcq',
              prompt: 'Si l’on obtient après calcul un coefficient de corrélation linéaire $r = 1{,}24$, que doit-on conclure immédiatement ?',
              options: [
                'La corrélation linéaire positive est supérieure à $100\\%$.',
                'Il y a obligatoirement une erreur de calcul, car $-1 \\leqslant r \\leqslant 1$ toujours.',
                'La pente de la droite de régression vaut $1{,}24$.',
                'Les deux variables sont indépendantes.',
              ],
              correctAnswerIndex: 1,
              explanation:
                'Par l’inégalité de Cauchy-Schwarz, $|\\operatorname{Cov}(X, Y)| \\leqslant \\sigma_X \\sigma_Y$, donc $r$ appartient toujours à $[-1, 1]$.',
            },
          },
          {
            stepNumber: 2,
            stepKind: 'methode',
            stepBadge: 'Calcul de r',
            stepTheme: 'green',
            stepTitle: 'Calculer $r$ à partir de la covariance et des écarts-types',
            paragraphText:
              'Attention à la cohérence des diviseurs : si $\\operatorname{Cov}(X, Y)$ est divisée par $n$, on utilise $\\sigma_X, \\sigma_Y$ (diviseur $n$) ; si $\\operatorname{cov}^*$ est divisée par $n - 1$, on utilise $s_X^*, s_Y^*$ (diviseur $n - 1$). Dans les deux cas, les facteurs s’annulent et **donnent exactement le même $r$** !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q2',
              type: 'mcq',
              prompt: 'Si $\\operatorname{Cov}(X, Y) = -12$, $\\sigma_X = 3$ et $\\sigma_Y = 5$, que vaut le coefficient de corrélation linéaire $r(X, Y)$ ?',
              options: ['$0{,}80$', '$-0{,}40$', '$-0{,}80$', '$-1{,}20$'],
              correctAnswerIndex: 2,
              explanation:
                '$r = \\frac{-12}{3 \\times 5} = \\frac{-12}{15} = -0{,}80$ (liaison linéaire négative forte).',
            },
          },
          {
            stepNumber: 3,
            stepKind: 'piege',
            stepBadge: 'Non-linéarité',
            stepTheme: 'orange',
            stepTitle: 'Corrélation linéaire nulle ($r = 0$) malgré une liaison parfaite !',
            paragraphText:
              'Dans une distribution où tous les points sont parfaitement alignés sur une **parabole** symétrique $Y = X^2$ (liaison fonctionnelle parfaite !), et pourtant le coefficient de corrélation linéaire vaut $r = 0$ car la relation n’est pas linéaire ni monotone.',
            keyRule: 'Indépendance $\\implies r = 0$, mais $r = 0 \\not\\implies$ Indépendance (sauf pour un couple binormal) !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q3',
              type: 'mcq',
              prompt: 'Que peut-on conclure si l’on observe un coefficient de corrélation linéaire $r = 0$ entre deux variables quantitatives $X$ et $Y$ ?',
              options: [
                'Il n’y a pas de liaison **linéaire** entre $X$ et $Y$, mais il peut exister une liaison non linéaire (par exemple parabolique).',
                '$X$ et $Y$ sont obligatoirement indépendantes.',
                'Tous les points sont alignés sur une droite horizontale.',
                'La variance de $X$ est nulle.',
              ],
              correctAnswerIndex: 0,
              explanation:
                '$r$ ne mesure que l’intensité d’une relation **linéaire**. Une relation non linéaire (comme $y = x^2$ sur un domaine symétrique) donne $r = 0$.',
            },
          },
          {
            stepNumber: 4,
            stepKind: 'piege',
            stepBadge: 'Effet sous-groupes',
            stepTheme: 'orange',
            stepTitle: 'Attention aux sous-groupes cachés (Exemple taille / cheveux)',
            paragraphText:
              'Dans un cas classique d’effet de sous-groupes, la corrélation globale entre taille et longueur de cheveux vaut $r = -0{,}6018$ (forte en apparence). Mais lorsqu’on sépare Hommes et Femmes, la corrélation disparaît dans chaque groupe ($r_H = -0{,}07$, $r_F = -0{,}14$) : le lien apparent était un artefact dû à la variable qualitative « sexe » !',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q4',
              type: 'mcq',
              prompt: 'Dans l’exemple « taille vs longueur des cheveux », pourquoi la forte corrélation globale ($r = -0{,}60$) disparaît-elle chez les hommes seuls et chez les femmes seules ?',
              options: [
                'Parce que la formule de Pearson est fausse.',
                'Parce que les cheveux poussent moins vite chez les grands.',
                'Parce que le nuage est parabolique.',
                'Parce que la corrélation globale était induite par un facteur de confusion (la variable qualitative « sexe » qui sépare deux sous-groupes).',
              ],
              correctAnswerIndex: 3,
              explanation:
                'Mélanger deux sous-populations distinctes (hommes en moyenne plus grands avec cheveux plus courts, femmes en moyenne plus petites avec cheveux plus longs) crée une fausse corrélation globale.',
            },
          },
          {
            stepNumber: 5,
            stepKind: 'definition',
            stepBadge: 'Spearman',
            stepTheme: 'blue',
            stepTitle: 'Principe et calcul du coefficient de Spearman $r_S$',
            paragraphText:
              'Le coefficient de **Spearman** $r_S$ est le coefficient de corrélation linéaire calculé sur les **rangs** $(x_i\', y_i\')$. Non paramétrique (ne requiert pas la binormalité), il détecte toute relation **monotone** (même courbe, ex. exponentielle ou logarithmique) et résiste mieux aux valeurs extrêmes.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q5',
              type: 'mcq',
              prompt: 'Pour $n = 4$ individus sans ex-aequo, la somme des carrés des différences de rangs vaut $\\sum (x_i\' - y_i\')^2 = 2$. Que vaut le coefficient de Spearman $r_S$ ?',
              options: ['$0{,}5$', '$0{,}8$', '$0{,}2$', '$-0{,}8$'],
              correctAnswerIndex: 1,
              explanation:
                '$r_S = 1 - \\frac{6 \\times 2}{4(4^2 - 1)} = 1 - \\frac{12}{4 \\times 15} = 1 - \\frac{12}{60} = 1 - 0{,}2 = 0{,}8$.',
            },
          },
          {
            stepNumber: 6,
            stepKind: 'propriete',
            stepBadge: 'Test de Pearson',
            stepTheme: 'violet',
            stepTitle: 'Statistique de Student et p-valeur dans le test d’indépendance',
            paragraphText:
              'Dans le test paramétrique de Bravais-Pearson ($H_0 : \\rho = 0$ contre $H_1 : \\rho \\neq 0$, `Chap2`), on utilise la statistique $T = \\frac{\\sqrt{n - 2}\\, R}{\\sqrt{1 - R^2}}$ qui suit sous $H_0$ une loi de Student à $n - 2$ degrés de liberté. Si la $p$-valeur observée $\\alpha_{\\text{obs}} \\leqslant \\alpha$ (ex. $0{,}0366 \\leqslant 0{,}05$ pour les QI), on **rejette $H_0$** et on conclut à une liaison significative au risque $5\\%$.',
            exercise: {
              id: 'lmd_entd_l1_stat_ch3_p2_q6',
              type: 'mcq',
              prompt: 'Lors d’un test de corrélation au seuil $\\alpha = 5\\%$ ($0{,}05$), on obtient une $p$-valeur égale à $0{,}0366$. Quelle décision prend-on ?',
              options: [
                'On conserve $H_0$ car $r$ est inférieur à $1$.',
                'On ne peut pas conclure car $0{,}0366 > 0$.',
                'On rejette $H_0$ au risque $5\\%$ car $p = 0{,}0366 \\leqslant 0{,}05$, et on conclut à l’existence d’une liaison significative.',
                'On conclut que $\\rho = 0{,}0366$.',
              ],
              correctAnswerIndex: 2,
              explanation:
                'Règle de décision basée sur la $p$-valeur : dès que $p \\leqslant \\alpha$, on rejette $H_0$ (indépendance) au risque d’erreur $\\alpha$.',
            },
          },
        ],
      }),
    ],
  },
];
