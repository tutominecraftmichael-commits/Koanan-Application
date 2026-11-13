import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1ère C - Leçon 17 : Statistiques.pdf » (format v2).
export const MATHS_1RE_C_L17_STATISTIQUES: CurriculumChapter = {
  id: 'premiere_c_maths_numerique_l17_statistiques',
  subjectId: 'maths',
  gradeLevel: 'premiere_c',
  alsoForGrades: [],
  order: 17,
  title: 'Leçon 17 : Statistiques',
  summary:
    'Séries regroupées en classes (amplitude, centre, densité), position (classe modale, moyenne, médiane, quartiles par interpolation), graphiques et dispersion (variance, écart-type, écart absolu moyen, écart interquartile).',
  officialVolumeHours: 7,
  contentVersion: 2,
  source: '1ère C - Leçon 17 : Statistiques.pdf',
  points: [
    // ========================================================================
    // POINT 1 : Regroupement en classes, amplitude, centre et densité
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l17_statistiques_p01',
      order: 1,
      title: 'Séries regroupées en classes : amplitude, centre et densité',
      summary:
        'Organiser des données continues en classes [xᵢ ; xᵢ₊₁[ et calculer leur amplitude, leur centre et leur densité.',
      conceptExplanation:
        "Lorsqu'une série statistique comporte de nombreuses valeurs différentes, on les regroupe en **classes** semi-ouvertes $[x_i; x_{i+1}[$ :\n- **Amplitude** de la classe : $a_i = x_{i+1} - x_i$ ;\n- **Centre** de la classe : $c_i = \\dfrac{x_i + x_{i+1}}{2}$ ;\n- **Densité** d'effectif (ou de fréquence) : $d_i = \\dfrac{n_i}{a_i}$ (respectivement $\\dfrac{f_i}{a_i}$), soit le quotient de l'effectif (ou de la fréquence) par l'amplitude.\n\n**Convention** : la borne inférieure $x_i$ est incluse dans la classe $[x_i; x_{i+1}[$, tandis que la borne supérieure $x_{i+1}$ est exclue et appartient à la classe suivante.",
      keyRule:
        'Amplitude aᵢ = xᵢ₊₁ − xᵢ ; centre cᵢ = (xᵢ + xᵢ₊₁)/2 ; densité dᵢ = nᵢ / aᵢ (indispensable dès que les classes ont des amplitudes différentes !).',
      formulas: [
        { name: 'Amplitude et centre', formula: 'a_i = x_{i+1} - x_i, \\quad c_i = \\frac{x_i + x_{i+1}}{2}' },
        { name: 'Densité d’une classe', formula: 'd_i = \\frac{n_i}{a_i} \\quad \\text{ou} \\quad d_i = \\frac{f_i}{a_i}' },
      ],
      workedExample: {
        title: 'Calculer amplitudes et densités d’une production de cacao (p. 3)',
        statement:
          'Les productions (en tonnes) de $90$ coopératives sont réparties ainsi : $[0; 30[: 13$, $[30; 45[: 20$, $[45; 70[: 25$, $[70; 80[: 15$, $[80; 100[: 17$. Calcule l’amplitude, le centre et la densité de chaque classe.',
        methodSteps: [
          '$[0; 30[$ : amplitude $30 - 0 = 30$, centre $15$, densité $\\dfrac{13}{30} \\approx 0{,}43$.',
          '$[30; 45[$ : amplitude $15$, centre $37{,}5$, densité $\\dfrac{20}{15} \\approx 1{,}33$.',
          '$[45; 70[$ : amplitude $25$, centre $57{,}5$, densité $\\dfrac{25}{25} = 1$.',
          '$[70; 80[$ : amplitude $10$, centre $75$, densité $\\dfrac{15}{10} = 1{,}5$.',
          '$[80; 100[$ : amplitude $20$, centre $90$, densité $\\dfrac{17}{20} = 0{,}85$.',
        ],
        conclusion: 'Les densités respectives sont $0{,}43$ ; $1{,}33$ ; $1$ ; $1{,}5$ et $0{,}85$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Amplitude et centre d’une classe',
          stepTitle: 'Calculer xᵢ₊₁ − xᵢ et (xᵢ + xᵢ₊₁)/2',
          paragraphText:
            'Dans un intervalle $[x_i; x_{i+1}[$, l’amplitude est la largeur de l’intervalle et le centre est le milieu arithmétique des deux bornes.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p01_q1',
            type: 'mcq',
            prompt: 'Quels sont respectivement l’amplitude et le centre de la classe $[300; 600[$ ?',
            options: [
              '$300$ et $300$',
              '$300$ et $450$',
              '$450$ et $300$',
              '$900$ et $450$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Amplitude : $600 - 300 = 300$. Centre : $\\dfrac{300 + 600}{2} = 450$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Densité d’une classe',
          stepTitle: 'Diviser l’effectif (ou la fréquence) par l’amplitude',
          paragraphText:
            'La densité mesure la concentration des individus par unité de largeur d’intervalle : $d_i = \\dfrac{n_i}{a_i}$ (pour les effectifs) ou $d_i = \\dfrac{f_i}{a_i}$ (pour les fréquences).',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p01_q2',
            type: 'mcq',
            prompt: 'La classe $[15; 17[$ de l’Exercice 5 contient $15$ individus. Quelle est sa densité d’effectif ?',
            options: ['$15$', '$2$', '$7{,}5$', '$30$'],
            correctAnswerIndex: 2,
            explanation: 'L’amplitude vaut $17 - 15 = 2$, donc la densité vaut $\\dfrac{15}{2} = 7{,}5$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Appartenance à une classe semi-ouverte [a ; b[',
          stepTitle: 'Classer exactement une valeur égale à une borne',
          paragraphText:
            'Dans $[0; 300[, [300; 600[, \\dots$, le crochet ouvert à droite signifie que $300$ et $900$ n’entrent pas dans la classe qui se termine par eux, mais dans celle qui commence par eux !',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p01_q3',
            type: 'mcq',
            prompt:
              'Dans le relevé bancaire (p. 2) regroupé en $[0; 300[$, $[300; 600[$, $[600; 900[$, $[900; 1200[$, $[1200; 1500[$, dans quelle classe range-t-on un versement égal à $900$ ?',
            options: ['Dans $[600; 900[$', 'Dans $[900; 1200[$', 'Dans aucune des deux', 'Dans les deux à moitié'],
            correctAnswerIndex: 1,
            explanation: 'Comme l’intervalle $[600; 900[$ est ouvert en $900$ et $[900; 1200[$ est fermé en $900$, la valeur $900$ appartient à $[900; 1200[$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Densité avec fréquences',
          stepTitle: 'Calculer la densité d’une fréquence sur une classe étroite',
          paragraphText:
            'Dans l’exercice de fixation de la page 7, la classe $[5{,}5; 6[$ a une fréquence de $0{,}1$ et une amplitude de $0{,}5$ : sa densité vaut $\\dfrac{0{,}1}{0{,}5} = 0{,}2$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p01_q4',
            type: 'mcq',
            prompt: 'Une classe $[6; 8[$ a une fréquence de $0{,}15$. Quels sont son centre et sa densité de fréquence ?',
            options: [
              'Centre $7$ et densité $0{,}30$',
              'Centre $7$ et densité $0{,}075$',
              'Centre $2$ et densité $0{,}075$',
              'Centre $7$ et densité $0{,}15$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Centre : $\\dfrac{6 + 8}{2} = 7$. Amplitude : $8 - 6 = 2$. Densité : $\\dfrac{0{,}15}{2} = 0{,}075$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier de diviser par l’amplitude',
          stepTitle: 'Comparer 25 individus sur largeur 25 et 15 individus sur largeur 10',
          paragraphText:
            'Une classe large contenant beaucoup d’individus peut en réalité être moins dense qu’une classe étroite ! Ici $[45; 70[$ a $25$ coopératives (densité $1$), mais $[70; 80[$ en a $15$ sur une largeur de $10$ seulement (densité $1{,}5$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p01_q5',
            type: 'mcq',
            prompt: 'Entre une classe $A = [0; 10[$ d’effectif $20$ et une classe $B = [15; 17[$ d’effectif $15$ (Exercice 5), laquelle a la plus grande densité ?',
            options: [
              'La classe $A$ car $20 > 15$',
              'La classe $B$ car $7{,}5 > 2$',
              'Elles ont la même densité',
              'On ne peut pas comparer sans connaître la moyenne',
            ],
            correctAnswerIndex: 1,
            explanation: 'Densité de $A$ : $\\dfrac{20}{10} = 2$. Densité de $B$ : $\\dfrac{15}{2} = 7{,}5$. Donc $B$ est $3{,}75$ fois plus dense que $A$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier l’effectif total et les amplitudes',
          stepTitle: 'Contrôler une série avant tout calcul',
          paragraphText:
            'Avant de calculer une densité ou une moyenne, additionne toujours les effectifs pour vérifier $N$, et calcule séparément chaque amplitude $x_{i+1} - x_i$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p01_q6',
            type: 'mcq',
            prompt: 'Pour les classes $[1; 2[: 34$, $[2; 3[: 76$, $[3; 5[: 51$ et $[5; 8[: 39$ (Exercice 1), quelle est la densité de la première classe $[1; 2[$ ?',
            options: ['$17$', '$34$', '$68$', '$1$'],
            correctAnswerIndex: 1,
            explanation: 'L’amplitude de $[1; 2[$ vaut $2 - 1 = 1$, donc sa densité vaut $\\dfrac{34}{1} = 34$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p01_q1',
          type: 'mcq',
          prompt: 'Quels sont respectivement l’amplitude et le centre de la classe $[300; 600[$ ?',
          options: [
            '$300$ et $300$',
            '$300$ et $450$',
            '$450$ et $300$',
            '$900$ et $450$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Amplitude : $600 - 300 = 300$. Centre : $\\dfrac{300 + 600}{2} = 450$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p01_q2',
          type: 'mcq',
          prompt: 'La classe $[15; 17[$ de l’Exercice 5 contient $15$ individus. Quelle est sa densité d’effectif ?',
          options: ['$15$', '$2$', '$7{,}5$', '$30$'],
          correctAnswerIndex: 2,
          explanation: 'L’amplitude vaut $17 - 15 = 2$, donc la densité vaut $\\dfrac{15}{2} = 7{,}5$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p01_q3',
          type: 'mcq',
          prompt:
            'Dans le relevé bancaire (p. 2) regroupé en $[0; 300[$, $[300; 600[$, $[600; 900[$, $[900; 1200[$, $[1200; 1500[$, dans quelle classe range-t-on un versement égal à $900$ ?',
          options: ['Dans $[600; 900[$', 'Dans $[900; 1200[$', 'Dans aucune des deux', 'Dans les deux à moitié'],
          correctAnswerIndex: 1,
          explanation: 'Comme l’intervalle $[600; 900[$ est ouvert en $900$ et $[900; 1200[$ est fermé en $900$, la valeur $900$ appartient à $[900; 1200[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p01_q4',
          type: 'mcq',
          prompt: 'Une classe $[6; 8[$ a une fréquence de $0{,}15$. Quels sont son centre et sa densité de fréquence ?',
          options: [
            'Centre $7$ et densité $0{,}30$',
            'Centre $7$ et densité $0{,}075$',
            'Centre $2$ et densité $0{,}075$',
            'Centre $7$ et densité $0{,}15$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Centre : $\\dfrac{6 + 8}{2} = 7$. Amplitude : $8 - 6 = 2$. Densité : $\\dfrac{0{,}15}{2} = 0{,}075$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p01_q5',
          type: 'mcq',
          prompt: 'Entre une classe $A = [0; 10[$ d’effectif $20$ et une classe $B = [15; 17[$ d’effectif $15$ (Exercice 5), laquelle a la plus grande densité ?',
          options: [
            'La classe $A$ car $20 > 15$',
            'La classe $B$ car $7{,}5 > 2$',
            'Elles ont la même densité',
            'On ne peut pas comparer sans connaître la moyenne',
          ],
          correctAnswerIndex: 1,
          explanation: 'Densité de $A$ : $\\dfrac{20}{10} = 2$. Densité de $B$ : $\\dfrac{15}{2} = 7{,}5$. Donc $B$ est $3{,}75$ fois plus dense que $A$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p01_q6',
          type: 'mcq',
          prompt: 'Pour les classes $[1; 2[: 34$, $[2; 3[: 76$, $[3; 5[: 51$ et $[5; 8[: 39$ (Exercice 1), quelle est la densité de la première classe $[1; 2[$ ?',
          options: ['$17$', '$34$', '$68$', '$1$'],
          correctAnswerIndex: 1,
          explanation: 'L’amplitude de $[1; 2[$ vaut $2 - 1 = 1$, donc sa densité vaut $\\dfrac{34}{1} = 34$.',
        },
      ],
    },

    // ========================================================================
    // POINT 2 : Caractéristiques de position : classe modale et moyenne
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l17_statistiques_p02',
      order: 2,
      title: 'Classe modale et moyenne d’une série regroupée',
      summary:
        'Déterminer la classe modale (densité maximale) et calculer la moyenne pondérée par les centres de classes.',
      conceptExplanation:
        "1. **Classe modale** : on appelle classe modale toute classe dont la **densité est maximale** (elle traduit la plus grande concentration d'individus). *Cas particulier* : si toutes les classes ont la **même amplitude**, la classe modale est simplement celle dont l'effectif est maximal.\n\n2. **Moyenne $\\bar{x}$** : on remplace chaque classe par son centre $c_i$ :\n$$\\bar{x} = \\frac{\\sum_{i=1}^{p} n_i c_i}{N} = \\frac{1}{N}(n_1 c_1 + n_2 c_2 + \\dots + n_p c_p) = \\sum_{i=1}^{p} f_i c_i$$",
      keyRule:
        'Classe modale = classe de DENSITÉ maximale (effectif maximal seulement si amplitudes égales !). Moyenne x̄ = (Σ nᵢ cᵢ) / N avec cᵢ le centre de chaque classe.',
      formulas: [
        { name: 'Moyenne avec effectifs', formula: '\\bar{x} = \\frac{\\sum_{i=1}^{p} n_i c_i}{N}' },
        { name: 'Moyenne avec fréquences', formula: '\\bar{x} = \\sum_{i=1}^{p} f_i c_i' },
      ],
      workedExample: {
        title: 'Classe modale et moyenne de la production de cacao (p. 3-4)',
        statement:
          'Pour les $90$ coopératives ($[0;30[:13$, $[30;45[:20$, $[45;70[:25$, $[70;80[:15$, $[80;100[:17$), détermine la classe modale et calcule la production moyenne $\\bar{x}$.',
        methodSteps: [
          'Les densités valent respectivement $0{,}43$ ; $1{,}33$ ; $1$ ; $1{,}5$ et $0{,}85$. La densité maximale est $1{,}5$ : la classe modale est donc $[70; 80[$.',
          'Centres : $15 ; 37{,}5 ; 57{,}5 ; 75 ; 90$. Produits $n_i c_i$ : $195 ; 750 ; 1437{,}5 ; 1125 ; 1530$, dont la somme vaut $5037{,}5$.',
          'Moyenne : $\\bar{x} = \\dfrac{5037{,}5}{90} \\approx 55{,}97$ tonnes.',
        ],
        conclusion: 'Classe modale : $[70; 80[$ ; production moyenne : $55{,}97$ tonnes.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Classe modale quand les amplitudes diffèrent',
          stepTitle: 'Choisir la densité maximale, pas l’effectif maximal',
          paragraphText:
            'Dans la série du cacao, $[45; 70[$ compte $25$ coopératives mais $[70; 80[$ a la plus forte densité ($1{,}5 > 1{,}33 > 1$) : c’est donc $[70; 80[$ la classe modale.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p02_q1',
            type: 'mcq',
            prompt: 'Quelle est la classe modale de la série de l’Exercice 5 ($[0; 10[: 20$, $[10; 15[: 10$, $[15; 17[: 15$, $[17; 20[: 5$) ?',
            options: ['$[0; 10[$', '$[10; 15[$', '$[15; 17[$', '$[17; 20[$'],
            correctAnswerIndex: 2,
            explanation: 'Les densités valent respectivement $2$, $2$, $7{,}5$ et $1{,}67$. La plus grande densité ($7{,}5$) correspond à $[15; 17[$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Cas particulier des amplitudes égales',
          stepTitle: 'Quand peut-on lire la classe modale directement sur les effectifs ?',
          paragraphText:
            'Si toutes les classes ont exactement la même amplitude $a$, diviser chaque effectif par la même constante $a$ ne change pas l’ordre : la classe modale est alors celle dont l’effectif est maximal.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p02_q2',
            type: 'mcq',
            prompt:
              'Pour les 49 versements regroupés en classes d’amplitude égale à $300$ ($[0;300[: 19$, $[300;600[: 14$, $[600;900[: 6$, $[900;1200[: 8$, $[1200;1500[: 2$), quelle est la classe modale ?',
            options: ['$[0; 300[$', '$[300; 600[$', '$[900; 1200[$', '$[1200; 1500[$'],
            correctAnswerIndex: 0,
            explanation: 'Toutes les classes ont la même amplitude $300$ ; l’effectif maximal est $19$, donc la classe modale est $[0; 300[$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer la moyenne x̄ avec les centres',
          stepTitle: 'Multiplier chaque effectif par le centre de sa classe',
          paragraphText:
            'Ajoute toujours deux lignes à ton tableau : la ligne des centres $c_i$, puis la ligne des produits $n_i c_i$. Il ne reste qu’à diviser le total $\\sum n_i c_i$ par $N$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p02_q3',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 5 ($[0; 10[: 20$, $[10; 15[: 10$, $[15; 17[: 15$, $[17; 20[: 5$, $N = 50$), que vaut la moyenne $\\bar{x}$ ?',
            options: ['$10{,}5$', '$11{,}15$', '$12{,}5$', '$13{,}0$'],
            correctAnswerIndex: 1,
            explanation: 'Centres : $5 ; 12{,}5 ; 16 ; 18{,}5$. $\\sum n_i c_i = 100 + 125 + 240 + 92{,}5 = 557{,}5$, d’où $\\bar{x} = \\dfrac{557{,}5}{50} = 11{,}15$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer la moyenne à partir des fréquences fᵢ',
          stepTitle: 'Appliquer x̄ = Σ fᵢ cᵢ sans connaître N',
          paragraphText:
            'Quand un tableau ne donne que les fréquences $f_i$ (en décimal ou en pourcentage), on obtient la moyenne directement en faisant $\\bar{x} = f_1 c_1 + \\dots + f_p c_p$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p02_q4',
            type: 'mcq',
            prompt:
              'Pour une série ayant deux classes $[0; 10[$ de fréquence $0{,}4$ et $[10; 30[$ de fréquence $0{,}6$, que vaut la moyenne $\\bar{x}$ ?',
            options: ['$12$', '$14$', '$15$', '$20$'],
            correctAnswerIndex: 1,
            explanation: 'Centres : $5$ et $20$. $\\bar{x} = 0{,}4 \\times 5 + 0{,}6 \\times 20 = 2 + 12 = 14$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Diviser la somme des centres par le nombre de classes p',
          stepTitle: 'On divise toujours par l’effectif total N, jamais par le nombre de classes !',
          paragraphText:
            'Dans l’exemple du sport (p. 10), il y a $6$ classes mais $N = 125$ élèves. On calcule $\\dfrac{4980}{125} = 39{,}84$ (et jamais $\\dfrac{\\sum c_i}{6}$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p02_q5',
            type: 'mcq',
            prompt: 'Pour les $125$ élèves pratiquant du sport (p. 10), on obtient $\\sum n_i c_i = 4980$ sur $6$ classes. Quelle est la moyenne $\\bar{x}$ ?',
            options: ['$830$', '$39{,}84$', '$50$', '$40{,}84$'],
            correctAnswerIndex: 1,
            explanation: 'On divise $\\sum n_i c_i = 4980$ par l’effectif total $N = 125$, ce qui donne $\\bar{x} = \\dfrac{4980}{125} = 39{,}84$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Vérifier une moyenne d’effectif N = 1000 (Exercice 3)',
          stepTitle: 'Interpréter la moyenne calculée',
          paragraphText:
            'Dans l’Exercice 3 ($N = 1000$, $\\sum n_i c_i = 4645{,}5$), la division par $1000$ donne immédiatement $\\bar{x} = 4{,}6455 \\approx 4{,}65$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p02_q6',
            type: 'mcq',
            prompt:
              'Dans la série des $300$ commerçants (Exercice 4), $\\sum n_i c_i = 10\\,000$ (en milliers de F CFA). Quelle est la recette moyenne arrondie à $10^{-2}$ près ?',
            options: ['$30{,}00$', '$33{,}33$', '$35{,}00$', '$50{,}00$'],
            correctAnswerIndex: 1,
            explanation: '$\\bar{x} = \\dfrac{10\\,000}{300} = \\dfrac{100}{3} \\approx 33{,}33$ milliers de F CFA.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p02_q1',
          type: 'mcq',
          prompt: 'Quelle est la classe modale de la série de l’Exercice 5 ($[0; 10[: 20$, $[10; 15[: 10$, $[15; 17[: 15$, $[17; 20[: 5$) ?',
          options: ['$[0; 10[$', '$[10; 15[$', '$[15; 17[$', '$[17; 20[$'],
          correctAnswerIndex: 2,
          explanation: 'Les densités valent respectivement $2$, $2$, $7{,}5$ et $1{,}67$. La plus grande densité ($7{,}5$) correspond à $[15; 17[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p02_q2',
          type: 'mcq',
          prompt:
            'Pour les 49 versements regroupés en classes d’amplitude égale à $300$ ($[0;300[: 19$, $[300;600[: 14$, $[600;900[: 6$, $[900;1200[: 8$, $[1200;1500[: 2$), quelle est la classe modale ?',
          options: ['$[0; 300[$', '$[300; 600[$', '$[900; 1200[$', '$[1200; 1500[$'],
          correctAnswerIndex: 0,
          explanation: 'Toutes les classes ont la même amplitude $300$ ; l’effectif maximal est $19$, donc la classe modale est $[0; 300[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p02_q3',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 5 ($[0; 10[: 20$, $[10; 15[: 10$, $[15; 17[: 15$, $[17; 20[: 5$, $N = 50$), que vaut la moyenne $\\bar{x}$ ?',
          options: ['$10{,}5$', '$11{,}15$', '$12{,}5$', '$13{,}0$'],
          correctAnswerIndex: 1,
          explanation: 'Centres : $5 ; 12{,}5 ; 16 ; 18{,}5$. $\\sum n_i c_i = 100 + 125 + 240 + 92{,}5 = 557{,}5$, d’où $\\bar{x} = \\dfrac{557{,}5}{50} = 11{,}15$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p02_q4',
          type: 'mcq',
          prompt:
            'Pour une série ayant deux classes $[0; 10[$ de fréquence $0{,}4$ et $[10; 30[$ de fréquence $0{,}6$, que vaut la moyenne $\\bar{x}$ ?',
          options: ['$12$', '$14$', '$15$', '$20$'],
          correctAnswerIndex: 1,
          explanation: 'Centres : $5$ et $20$. $\\bar{x} = 0{,}4 \\times 5 + 0{,}6 \\times 20 = 2 + 12 = 14$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p02_q5',
          type: 'mcq',
          prompt: 'Pour les $125$ élèves pratiquant du sport (p. 10), on obtient $\\sum n_i c_i = 4980$ sur $6$ classes. Quelle est la moyenne $\\bar{x}$ ?',
          options: ['$830$', '$39{,}84$', '$50$', '$40{,}84$'],
          correctAnswerIndex: 1,
          explanation: 'On divise $\\sum n_i c_i = 4980$ par l’effectif total $N = 125$, ce qui donne $\\bar{x} = \\dfrac{4980}{125} = 39{,}84$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p02_q6',
          type: 'mcq',
          prompt:
            'Dans la série des $300$ commerçants (Exercice 4), $\\sum n_i c_i = 10\\,000$ (en milliers de F CFA). Quelle est la recette moyenne arrondie à $10^{-2}$ près ?',
          options: ['$30{,}00$', '$33{,}33$', '$35{,}00$', '$50{,}00$'],
          correctAnswerIndex: 1,
          explanation: '$\\bar{x} = \\dfrac{10\\,000}{300} = \\dfrac{100}{3} \\approx 33{,}33$ milliers de F CFA.',
        },
      ],
    },

    // ========================================================================
    // POINT 3 : Médiane et quartiles par interpolation linéaire
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l17_statistiques_p03',
      order: 3,
      title: 'Médiane et quartiles par interpolation linéaire',
      summary:
        'Repérer la classe contenant Me, Q₁ ou Q₃ à l’aide des effectifs ou fréquences cumulés croissants et calculer sa valeur par interpolation linéaire.',
      conceptExplanation:
        "Soit une série continue d'effectif total $N$ rangée par classes $[x_i; x_{i+1}[$ avec les effectifs cumulés croissants (ECC) : $N_0 = 0, N_1, N_2, \\dots, N_p = N$.\n\n- **Premier quartile $Q_1$** : correspond au rang $0{,}25 N$ (ou $25\\%$ en fréquence cumulée croissante) ;\n- **Médiane $M_e$** ($= Q_2$) : correspond au rang $0{,}5 N$ ($50\\%$) : au moins $50\\%$ des valeurs sont $\\le M_e$ et au moins $50\\%$ sont $\\ge M_e$ ;\n- **Troisième quartile $Q_3$** : correspond au rang $0{,}75 N$ ($75\\%$).\n\n**Formule d'interpolation linéaire** dans la classe $[a; b[$ contenant le rang cible $R$ (entre l'ECC de départ $N_a$ et l'ECC d'arrivée $N_b$) :\n$$\\frac{Q - a}{b - a} = \\frac{R - N_a}{N_b - N_a} \\implies Q = a + (b - a)\\times\\frac{R - N_a}{N_b - N_a}$$",
      keyRule:
        'Calcule d’abord la ligne des ECC (ou FCC %), situe le rang cible (0,25N ; 0,5N ; 0,75N) dans sa classe [a ; b[, puis applique (Q − a)/(b − a) = (R − Nₐ)/(N_b − Nₐ).',
      formulas: [
        { name: 'Rangs cibles', formula: 'R_{Q_1} = 0{,}25 N, \\quad R_{M_e} = 0{,}5 N, \\quad R_{Q_3} = 0{,}75 N' },
        { name: 'Interpolation linéaire', formula: '\\frac{Q - a}{b - a} = \\frac{R - N_a}{N_b - N_a}' },
      ],
      workedExample: {
        title: 'Calculer Me, Q₁ et Q₃ pour les absences de 1re C (p. 4-6)',
        statement:
          'Les heures d’absences des $104$ élèves donnent : $[1;5[$ ($n=12$, ECC $12$), $[5;8[$ ($n=28$, ECC $40$), $[8;13[$ ($n=32$, ECC $72$), $[13;14[$ ($n=24$, ECC $96$), $[14;21[$ ($n=8$, ECC $104$). Calcule $Q_1$, $M_e$ et $Q_3$.',
        methodSteps: [
          '$Q_1$ : rang $0{,}25 \\times 104 = 26$, compris entre $12$ et $40$, donc $Q_1 \\in [5; 8[$. $\\dfrac{Q_1 - 5}{8 - 5} = \\dfrac{26 - 12}{40 - 12} = \\dfrac{14}{28} = 0{,}5 \\implies Q_1 = 5 + 1{,}5 = 6{,}5$.',
          '$M_e$ : rang $0{,}5 \\times 104 = 52$, compris entre $40$ et $72$, donc $M_e \\in [8; 13[$. $\\dfrac{M_e - 8}{13 - 8} = \\dfrac{52 - 40}{72 - 40} = \\dfrac{12}{32} = 0{,}375 \\implies M_e = 8 + 1{,}875 = 9{,}875 \\approx 9{,}88$.',
          '$Q_3$ : rang $0{,}75 \\times 104 = 78$, compris entre $72$ et $96$, donc $Q_3 \\in [13; 14[$. $\\dfrac{Q_3 - 13}{14 - 13} = \\dfrac{78 - 72}{96 - 72} = \\dfrac{6}{24} = 0{,}25 \\implies Q_3 = 13{,}25$.',
        ],
        conclusion: '$Q_1 = 6{,}5$, $M_e = 9{,}875$ (soit $\\approx 9{,}88$) et $Q_3 = 13{,}25$.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Sens des quartiles Q₁, Q₂ (= Me), Q₃',
          stepTitle: 'Interpréter 25 %, 50 % et 75 %',
          paragraphText:
            'Dire que $Q_1 = 6{,}5$ sur $104$ élèves signifie que $25\\%$ des élèves (soit $26$ élèves) ont un nombre d’heures d’absences inférieur ou égal à $6{,}5$, et $75\\%$ lui sont supérieures ou égales.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p03_q1',
            type: 'mcq',
            prompt: 'Que représente le troisième quartile $Q_3$ d’une série statistique ordonnée ?',
            options: [
              'La valeur telle que $25\\%$ des observations lui soient inférieures ou égales',
              'La valeur telle que $75\\%$ des observations lui soient inférieures ou égales et $25\\%$ supérieures',
              'Le tiers de l’effectif total',
              'La différence entre le maximum et le minimum',
            ],
            correctAnswerIndex: 1,
            explanation: 'Par définition, $Q_3$ laisse au moins $75\\%$ des valeurs en dessous (ou égales) et $25\\%$ au-dessus.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Identifier la classe médiane',
          stepTitle: 'Situer N/2 dans le tableau des ECC',
          paragraphText:
            'La classe contenant $M_e$ est la première classe dont l’ECC atteint ou dépasse $\\dfrac{N}{2}$. Si $\\text{ECC}_1 = 12$ et $\\text{ECC}_2 = 40$, et que $\\dfrac{N}{2} = 52$, on continue jusqu’à $\\text{ECC}_3 = 72$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p03_q2',
            type: 'mcq',
            prompt:
              'Pour l’Exercice 2 (tranches d’âge $[0; 10[$ FCC $14\\%$, $[10; 15[$ FCC $46\\%$, $[15; 17[$ FCC $82\\%$, $[17; 20[$ FCC $100\\%$), dans quelle classe se trouve le troisième quartile $Q_3$ ?',
            options: ['$[0; 10[$', '$[10; 15[$', '$[15; 17[$', '$[17; 20[$'],
            correctAnswerIndex: 2,
            explanation: 'Le seuil $75\\%$ est strictement compris entre $46\\%$ et $82\\%$ : donc $Q_3 \\in [15; 17[$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer Q₁ par interpolation sur FCC (%)',
          stepTitle: 'Appliquer l’interpolation avec 25 % (Exercice 2)',
          paragraphText:
            'Dans l’Exercice 2, $25\\%$ est compris entre $14\\%$ et $46\\%$ dans la classe $[10; 15[$ : $\\dfrac{Q_1 - 10}{15 - 10} = \\dfrac{25 - 14}{46 - 14} = \\dfrac{11}{32}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p03_q3',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 2 ($[10; 15[$ passe de $14\\%$ à $46\\%$ de FCC), quelle valeur approchée à $10^{-2}$ près obtient-on pour $Q_1$ ?',
            options: ['$11{,}10$', '$11{,}72$', '$12{,}50$', '$13{,}44$'],
            correctAnswerIndex: 1,
            explanation: '$Q_1 = 10 + 5 \\times \\dfrac{25 - 14}{46 - 14} = 10 + \\dfrac{55}{32} = 10 + 1{,}71875 \\approx 11{,}72$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Interpolation lorsque Q₁ tombe dans la première classe',
          stepTitle: 'Ne pas oublier Nₐ = 0 à la borne gauche du tableau !',
          paragraphText:
            'Dans l’exercice du sport (p. 12, $N = 125$), le rang de $Q_1$ est $31{,}25$, déjà inférieur à l’ECC $35$ de la toute première classe $[0; 20[$ : on prend alors $N_a = 0$ pour $x = 0$, soit $\\dfrac{Q_1 - 0}{20 - 0} = \\dfrac{31{,}25 - 0}{35 - 0}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p03_q4',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 5 ($[0; 10[$ a un effectif de $20$ sur $N = 50$), combien vaut le premier quartile $Q_1$ ?',
            options: ['$5{,}00$', '$6{,}25$', '$7{,}50$', '$8{,}00$'],
            correctAnswerIndex: 1,
            explanation: 'Rang : $0{,}25 \\times 50 = 12{,}5 < 20$, donc $Q_1 \\in [0; 10[$ et $\\dfrac{Q_1 - 0}{10 - 0} = \\dfrac{12{,}5}{20} \\implies Q_1 = 6{,}25$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Utiliser l’effectif de la classe au lieu de l’ECC dans le numérateur',
          stepTitle: 'Au numérateur, soustrais l’ECC de la classe PRÉCÉDENTE !',
          paragraphText:
            'Dans la classe $[a; b[$, l’effectif cumulé croissant passe de $N_{\\text{préc}}$ (en $a$) à $N_{\\text{fin}}$ (en $b$). Note bien que $N_{\\text{fin}} - N_{\\text{préc}}$ vaut l’effectif $n_i$ de la classe, mais le numérateur est toujours $R - N_{\\text{préc}}$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p03_q5',
            type: 'mcq',
            prompt:
              'Pour l’Exercice 4 ($N = 300$), $Q_3$ (rang $225$) est dans $[40; 45[$ où l’ECC passe de $195$ à $235$. Quelle équation d’interpolation donne $Q_3$ ?',
            options: [
              '$\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225}{235}$',
              '$\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225 - 195}{235 - 195}$',
              '$\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225 - 40}{235 - 195}$',
              '$\\dfrac{Q_3 - 40}{45} = \\dfrac{30}{40}$',
            ],
            correctAnswerIndex: 1,
            explanation: 'On écrit $\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225 - 195}{235 - 195} = \\dfrac{30}{40} = 0{,}75 \\implies Q_3 = 40 + 5\\times 0{,}75 = 43{,}75$.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Interpolation sur une valeur quelconque (non quartile)',
          stepTitle: 'Estimer la fréquence correspondant à x = 49,3 ou x = 50,5',
          paragraphText:
            'La même interpolation linéaire permet de trouver la fréquence cumulée correspondant à n’importe quelle modalité $x \\in [a; b[$ : par exemple pour la Machine B (p. 14), dans $[49{,}2; 49{,}4[$ où la FCC passe de $5\\%$ à $12{,}5\\%$, $49{,}3$ est exactement au milieu donc donne $\\dfrac{5 + 12{,}5}{2} = 8{,}75\\%$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p03_q6',
            type: 'mcq',
            prompt:
              'Pour la Machine A (p. 13-14), dans la classe $[49{,}2; 49{,}4[$, la FCC passe de $8{,}8\\%$ à $16{,}3\\%$. Quelle estimation obtient-on par interpolation linéaire en $x = 49{,}3$ ?',
            options: ['$11{,}55\\%$', '$12{,}55\\%$', '$13{,}05\\%$', '$14{,}50\\%$'],
            correctAnswerIndex: 1,
            explanation: '$49{,}3$ est le milieu de $[49{,}2; 49{,}4[$, donc $b = 8{,}8 + \\dfrac{0{,}1}{0{,}2}(16{,}3 - 8{,}8) = 8{,}8 + 3{,}75 = 12{,}55\\%$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p03_q1',
          type: 'mcq',
          prompt: 'Que représente le troisième quartile $Q_3$ d’une série statistique ordonnée ?',
          options: [
            'La valeur telle que $25\\%$ des observations lui soient inférieures ou égales',
            'La valeur telle que $75\\%$ des observations lui soient inférieures ou égales et $25\\%$ supérieures',
            'Le tiers de l’effectif total',
            'La différence entre le maximum et le minimum',
          ],
          correctAnswerIndex: 1,
          explanation: 'Par définition, $Q_3$ laisse au moins $75\\%$ des valeurs en dessous (ou égales) et $25\\%$ au-dessus.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p03_q2',
          type: 'mcq',
          prompt:
            'Pour l’Exercice 2 (tranches d’âge $[0; 10[$ FCC $14\\%$, $[10; 15[$ FCC $46\\%$, $[15; 17[$ FCC $82\\%$, $[17; 20[$ FCC $100\\%$), dans quelle classe se trouve le troisième quartile $Q_3$ ?',
          options: ['$[0; 10[$', '$[10; 15[$', '$[15; 17[$', '$[17; 20[$'],
          correctAnswerIndex: 2,
          explanation: 'Le seuil $75\\%$ est strictement compris entre $46\\%$ et $82\\%$ : donc $Q_3 \\in [15; 17[$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p03_q3',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 2 ($[10; 15[$ passe de $14\\%$ à $46\\%$ de FCC), quelle valeur approchée à $10^{-2}$ près obtient-on pour $Q_1$ ?',
          options: ['$11{,}10$', '$11{,}72$', '$12{,}50$', '$13{,}44$'],
          correctAnswerIndex: 1,
          explanation: '$Q_1 = 10 + 5 \\times \\dfrac{25 - 14}{46 - 14} = 10 + \\dfrac{55}{32} = 10 + 1{,}71875 \\approx 11{,}72$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p03_q4',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 5 ($[0; 10[$ a un effectif de $20$ sur $N = 50$), combien vaut le premier quartile $Q_1$ ?',
          options: ['$5{,}00$', '$6{,}25$', '$7{,}50$', '$8{,}00$'],
          correctAnswerIndex: 1,
          explanation: 'Rang : $0{,}25 \\times 50 = 12{,}5 < 20$, donc $Q_1 \\in [0; 10[$ et $\\dfrac{Q_1 - 0}{10 - 0} = \\dfrac{12{,}5}{20} \\implies Q_1 = 6{,}25$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p03_q5',
          type: 'mcq',
          prompt:
            'Pour l’Exercice 4 ($N = 300$), $Q_3$ (rang $225$) est dans $[40; 45[$ où l’ECC passe de $195$ à $235$. Quelle équation d’interpolation donne $Q_3$ ?',
          options: [
            '$\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225}{235}$',
            '$\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225 - 195}{235 - 195}$',
            '$\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225 - 40}{235 - 195}$',
            '$\\dfrac{Q_3 - 40}{45} = \\dfrac{30}{40}$',
          ],
          correctAnswerIndex: 1,
          explanation: 'On écrit $\\dfrac{Q_3 - 40}{45 - 40} = \\dfrac{225 - 195}{235 - 195} = \\dfrac{30}{40} = 0{,}75 \\implies Q_3 = 40 + 5\\times 0{,}75 = 43{,}75$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p03_q6',
          type: 'mcq',
          prompt:
            'Pour la Machine A (p. 13-14), dans la classe $[49{,}2; 49{,}4[$, la FCC passe de $8{,}8\\%$ à $16{,}3\\%$. Quelle estimation obtient-on par interpolation linéaire en $x = 49{,}3$ ?',
          options: ['$11{,}55\\%$', '$12{,}55\\%$', '$13{,}05\\%$', '$14{,}50\\%$'],
          correctAnswerIndex: 1,
          explanation: '$49{,}3$ est le milieu de $[49{,}2; 49{,}4[$, donc $b = 8{,}8 + \\dfrac{0{,}1}{0{,}2}(16{,}3 - 8{,}8) = 8{,}8 + 3{,}75 = 12{,}55\\%$.',
        },
      ],
    },

    // ========================================================================
    // POINT 4 : Représentations graphiques (histogramme, polygones, courbes)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l17_statistiques_p04',
      order: 4,
      title: 'Histogramme, polygones et courbes cumulatives',
      summary:
        'Construire et lire un histogramme par proportionnalité des aires, tracer le polygone des fréquences et exploiter les courbes cumulatives.',
      conceptExplanation:
        "Les séries continues regroupées en classes disposent de trois représentations graphiques :\n\n1. **Histogramme** : constitué de rectangles juxtaposés dont :\n   - la **largeur** est proportionnelle à l'**amplitude** de la classe ;\n   - la **hauteur** est proportionnelle à la **densité** de la classe ;\n   - l'**aire** de chaque rectangle est proportionnelle à l'**effectif** (ou la **fréquence**) de la classe.\n\n2. **Polygone des effectifs (ou fréquences)** : ligne brisée joignant les **milieux des côtés supérieurs** successifs de chaque rectangle de l'histogramme.\n\n3. **Courbes cumulatives** : la fonction cumulative croissante $F$ vaut $0$ avant la première borne $x_1$, $N$ (ou $1$) après la dernière borne $x_{p+1}$, et coïncide sur chaque $[x_i; x_{i+1}[$ avec le segment joignant $(x_i; N_{i-1})$ à $(x_{i+1}; N_i)$.",
      keyRule:
        'Dans un histogramme, c’est l’AIRE (hauteur × largeur) qui est proportionnelle à l’effectif (ou la fréquence), donc la hauteur est proportionnelle à la DENSITÉ !',
      formulas: [
        { name: 'Aire d’un rectangle', formula: '\\text{Aire} = \\text{largeur} \\times \\text{hauteur} \\propto n_i \\ (\\text{ou } f_i)' },
        { name: 'Fonction cumulative', formula: 'F(x) = 0 \\ (x \\le x_1), \\quad F(x) = N \\ (x \\ge x_{p+1})' },
      ],
      workedExample: {
        title: 'Lire un histogramme par les aires (Exercice 4 p. 19)',
        statement:
          'Sur l’histogramme des recettes de $300$ commerçants, $1\\text{ cm}^2$ représente $60$ individus. La classe $[20; 25[$ a une base de $0{,}5\\text{ cm}$ et une hauteur de $1{,}5\\text{ cm}$, et la classe $[50; 60[$ a une base de $1\\text{ cm}$ et une hauteur de $0{,}833\\text{ cm}$ (ou une aire totale de $\\dfrac{5}{6}\\text{ cm}^2$). Quelle est l’aire correspondant à $45$ et $90$ individus ?',
        methodSteps: [
          'D’après l’échelle $1\\text{ cm}^2 \\leftrightarrow 60$ individus : un rectangle d’effectif $n_i$ doit avoir une aire $\\mathcal{A}_i = \\dfrac{n_i}{60}\\text{ cm}^2$.',
          'Inversement, pour $[25; 40[$ dont l’aire sur le graphique mesure $1{,}5\\text{ cm}^2$? Vérifions sur le cours p. 19 : l’aire vaut $1{,}5\\text{ cm}^2$ pour $[20;25[$ avec échelle $1\\text{ cm}^2 \\leftrightarrow 30$? En fait le tableau p. 19 donne aire $= 2\\text{ cm}^2 \\to 60$, $1{,}5\\text{ cm}^2 \\to 45$, $3\\text{ cm}^2 \\to 90$, $1{,}33\\text{ cm}^2 \\to 40$, $0{,}5\\text{ cm}^2 \\to 15$, $1{,}67\\text{ cm}^2 \\to 50$ : soit une aire totale de $10\\text{ cm}^2$ pour $300$ individus, c’est-à-dire $1\\text{ cm}^2 \\leftrightarrow 30$ individus (et $2\\text{ cm}^2$ pour $60$ individus) !',
          'Retenons la loi générale : $n_i = \\text{Aire}_i \\times (\\text{effectif par unité d’aire})$.',
        ],
        conclusion: 'Connaissant l’effectif représenté par $1\\text{ cm}^2$, on retrouve tout effectif en multipliant cette constante par l’aire du rectangle.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Principe fondamental de l’histogramme',
          stepTitle: 'Aire, largeur et hauteur des rectangles',
          paragraphText:
            'Dans un histogramme correct, deux classes de même effectif mais dont l’une est deux fois plus large que l’autre n’ont pas la même hauteur : la classe deux fois plus large est deux fois moins haute afin que leurs aires restent égales !',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p04_q1',
            type: 'mcq',
            prompt: 'Dans l’histogramme d’une série statistique regroupée en classes d’amplitudes inégales, à quoi sont proportionnelles les hauteurs des rectangles ?',
            options: [
              'Aux effectifs des classes',
              'Aux amplitudes des classes',
              'Aux densités des classes ($n_i / a_i$)',
              'Aux effectifs cumulés croissants',
            ],
            correctAnswerIndex: 2,
            explanation: 'Puisque Aire $=$ largeur $\\times$ hauteur et que largeur $\\propto a_i$ et Aire $\\propto n_i$, on a obligatoirement hauteur $\\propto \\dfrac{n_i}{a_i}$ (densité).',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer une aire sur l’histogramme des fréquences (p. 7)',
          stepTitle: 'Compter en petits carreaux ou en pourcentages',
          paragraphText:
            'Sur l’histogramme de la page 7, un petit carreau mesure $0{,}5$ en abscisse et $0{,}02$ en ordonnée, soit une aire de $0{,}5 \\times 0{,}02 = 0{,}01 = 1\\%$. Ainsi, une classe de fréquence $35\\%$ occupe exactement $35$ petits carreaux.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p04_q2',
            type: 'mcq',
            prompt:
              'Sur un histogramme des fréquences où $1$ petit carreau représente une aire de $1\\%$, combien de petits carreaux contient le rectangle de la classe $[3; 4{,}5[$ de fréquence $0{,}35$ ?',
            options: ['$15$ carreaux', '$23$ carreaux', '$35$ carreaux', '$45$ carreaux'],
            correctAnswerIndex: 2,
            explanation: 'La fréquence $0{,}35 = 35\\%$ est directement proportionnelle à l’aire du rectangle : elle représente donc $35$ petits carreaux.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Polygone des effectifs ou fréquences',
          stepTitle: 'Quels points relier sur l’histogramme ?',
          paragraphText:
            'Pour tracer le polygone des effectifs (ou fréquences) à partir de l’histogramme, on place un point au milieu du côté supérieur de chaque rectangle (d’abscisse égale au centre $c_i$ de la classe), puis on les joint par des segments.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p04_q3',
            type: 'mcq',
            prompt: 'Comment obtient-on le polygone des fréquences à partir de l’histogramme ?',
            options: [
              'En joignant les coins supérieurs droits des rectangles',
              'En joignant les milieux successifs des côtés les plus hauts de chaque rectangle',
              'En traçant les diagonales de chaque rectangle',
              'En joignant les points d’effectifs cumulés croissants',
            ],
            correctAnswerIndex: 1,
            explanation: 'Le polygone des effectifs ou fréquences relie les milieux des bases supérieures de chaque rectangle (d’abscisses $c_i$).',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Lire un effectif sur la courbe cumulative croissante',
          stepTitle: 'Interpréter le polygone ECC et le polygone ECD (Exercice 3 p. 18)',
          paragraphText:
            'Le polygone des ECC donne pour toute valeur $x$ le nombre d’individus ayant une modalité **inférieure ou égale** à $x$, tandis que le polygone des ECD donne le nombre d’individus ayant une modalité **supérieure ou égale** à $x$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p04_q4',
            type: 'mcq',
            prompt:
              'Sur une population de $1000$ individus (Exercice 3), on lit que $340$ individus ont une modalité inférieure à $3$ et $600$ individus ont une modalité inférieure à $5{,}3$. Combien ont une modalité comprise entre $3$ et $5{,}3$ ?',
            options: ['$940$', '$260$', '$400$', '$660$'],
            correctAnswerIndex: 1,
            explanation: 'Par différence des deux effectifs cumulés croissants : $600 - 340 = 260$ individus.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Prendre l’effectif comme hauteur sans tenir compte de l’amplitude',
          stepTitle: 'Ne trace JAMAIS l’effectif brut en ordonnée si les largeurs varient !',
          paragraphText:
            'Si la classe $[10; 20[$ (largeur $10$, effectif $60$) et la classe $[40; 45[$ (largeur $5$, effectif $40$) sont tracées avec des hauteurs $60$ et $40$, alors $[40; 45[$ aura une aire proportionnelle à $200$ contre $600$ pour la première — soit un rapport de $3$ à $1$ au lieu de $3$ à $2$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p04_q5',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 4, la classe $[10; 20[$ a un effectif de $60$ et une largeur de $10$, tandis que $[40; 45[$ a un effectif de $40$ et une largeur de $5$. Laquelle a le rectangle le plus haut dans l’histogramme ?',
            options: [
              '$[10; 20[$ car $60 > 40$',
              '$[40; 45[$ car sa densité $\\frac{40}{5} = 8$ est supérieure à $\\frac{60}{10} = 6$',
              'Elles ont la même hauteur',
              '$[10; 20[$ car elle est deux fois plus large',
            ],
            correctAnswerIndex: 1,
            explanation: 'Densité de $[10; 20[$ : $60/10 = 6$. Densité de $[40; 45[$ : $40/5 = 8 > 6$, donc $[40; 45[$ est plus haute.',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Intersection des polygones ECC et ECD',
          stepTitle: 'Retrouver la médiane sans interpolation',
          paragraphText:
            'Puisque en tout point $x$, $\\text{ECC}(x) + \\text{ECD}(x) = N$, au point où les deux courbes cumulatives se coupent on a $\\text{ECC}(x) = \\text{ECD}(x) = \\dfrac{N}{2}$ : l’abscisse de ce point d’intersection est exactement la **médiane** !',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p04_q6',
            type: 'mcq',
            prompt: 'Que représente l’abscisse du point d’intersection du polygone des effectifs cumulés croissants (ECC) et de celui des effectifs cumulés décroissants (ECD) ?',
            options: [
              'La moyenne $\\bar{x}$',
              'Le premier quartile $Q_1$',
              'La médiane $M_e$',
              'L’écart interquartile',
            ],
            correctAnswerIndex: 2,
            explanation: 'À l’intersection, $\\text{ECC}(x) = \\text{ECD}(x) = \\dfrac{N}{2}$, ce qui donne l’abscisse de la médiane $M_e$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p04_q1',
          type: 'mcq',
          prompt: 'Dans l’histogramme d’une série statistique regroupée en classes d’amplitudes inégales, à quoi sont proportionnelles les hauteurs des rectangles ?',
          options: [
            'Aux effectifs des classes',
            'Aux amplitudes des classes',
            'Aux densités des classes ($n_i / a_i$)',
            'Aux effectifs cumulés croissants',
          ],
          correctAnswerIndex: 2,
          explanation: 'Puisque Aire $=$ largeur $\\times$ hauteur et que largeur $\\propto a_i$ et Aire $\\propto n_i$, on a obligatoirement hauteur $\\propto \\dfrac{n_i}{a_i}$ (densité).',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p04_q2',
          type: 'mcq',
          prompt:
            'Sur un histogramme des fréquences où $1$ petit carreau représente une aire de $1\\%$, combien de petits carreaux contient le rectangle de la classe $[3; 4{,}5[$ de fréquence $0{,}35$ ?',
          options: ['$15$ carreaux', '$23$ carreaux', '$35$ carreaux', '$45$ carreaux'],
          correctAnswerIndex: 2,
          explanation: 'La fréquence $0{,}35 = 35\\%$ est directement proportionnelle à l’aire du rectangle : elle représente donc $35$ petits carreaux.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p04_q3',
          type: 'mcq',
          prompt: 'Comment obtient-on le polygone des fréquences à partir de l’histogramme ?',
          options: [
            'En joignant les coins supérieurs droits des rectangles',
            'En joignant les milieux successifs des côtés les plus hauts de chaque rectangle',
            'En traçant les diagonales de chaque rectangle',
            'En joignant les points d’effectifs cumulés croissants',
          ],
          correctAnswerIndex: 1,
          explanation: 'Le polygone des effectifs ou fréquences relie les milieux des bases supérieures de chaque rectangle (d’abscisses $c_i$).',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p04_q4',
          type: 'mcq',
          prompt:
            'Sur une population de $1000$ individus (Exercice 3), on lit que $340$ individus ont une modalité inférieure à $3$ et $600$ individus ont une modalité inférieure à $5{,}3$. Combien ont une modalité comprise entre $3$ et $5{,}3$ ?',
          options: ['$940$', '$260$', '$400$', '$660$'],
          correctAnswerIndex: 1,
          explanation: 'Par différence des deux effectifs cumulés croissants : $600 - 340 = 260$ individus.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p04_q5',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 4, la classe $[10; 20[$ a un effectif de $60$ et une largeur de $10$, tandis que $[40; 45[$ a un effectif de $40$ et une largeur de $5$. Laquelle a le rectangle le plus haut dans l’histogramme ?',
          options: [
            '$[10; 20[$ car $60 > 40$',
            '$[40; 45[$ car sa densité $\\frac{40}{5} = 8$ est supérieure à $\\frac{60}{10} = 6$',
            'Elles ont la même hauteur',
            '$[10; 20[$ car elle est deux fois plus large',
          ],
          correctAnswerIndex: 1,
          explanation: 'Densité de $[10; 20[$ : $60/10 = 6$. Densité de $[40; 45[$ : $40/5 = 8 > 6$, donc $[40; 45[$ est plus haute.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p04_q6',
          type: 'mcq',
          prompt: 'Que représente l’abscisse du point d’intersection du polygone des effectifs cumulés croissants (ECC) et de celui des effectifs cumulés décroissants (ECD) ?',
          options: [
            'La moyenne $\\bar{x}$',
            'Le premier quartile $Q_1$',
            'La médiane $M_e$',
            'L’écart interquartile',
          ],
          correctAnswerIndex: 2,
          explanation: 'À l’intersection, $\\text{ECC}(x) = \\text{ECD}(x) = \\dfrac{N}{2}$, ce qui donne l’abscisse de la médiane $M_e$.',
        },
      ],
    },

    // ========================================================================
    // POINT 5 : Caractéristiques de dispersion
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l17_statistiques_p05',
      order: 5,
      title: 'Dispersion : variance, écart-type, écart moyen et interquartile',
      summary:
        'Calculer et interpréter la variance V, l’écart-type σ, l’écart absolu moyen e_m et l’écart interquartile Q₃ − Q₁.',
      conceptExplanation:
        "Pour mesurer si les valeurs sont regroupées autour du centre ou très dispersées, on calcule quatre indicateurs de dispersion :\n\n1. **Variance $V$** : moyenne des carrés des écarts à la moyenne :\n$$V = \\frac{1}{N}\\sum_{i=1}^{p} n_i (c_i - \\bar{x})^2 = \\frac{1}{N}\\left(\\sum_{i=1}^{p} n_i c_i^2\\right) - (\\bar{x})^2$$\n2. **Écart-type $\\sigma$** : $\\sigma = \\sqrt{V}$ (même unité que le caractère étudié). Plus $\\sigma$ est élevé, plus les valeurs sont dispersées autour de $\\bar{x}$.\n3. **Écart absolu moyen $e_m$** : distance moyenne entre les valeurs (centres) et $\\bar{x}$ :\n$$e_m = \\frac{1}{N}\\sum_{i=1}^{p} n_i |c_i - \\bar{x}|$$\n4. **Écart interquartile** : $Q_3 - Q_1$ (contient $50\\%$ des valeurs centrales de la série).",
      keyRule:
        'Formule rapide de variance (König-Huygens) : V = (Σ nᵢ cᵢ²)/N − x̄², toujours ≥ 0 ; écart-type σ = √V ; écart interquartile = Q₃ − Q₁.',
      formulas: [
        { name: 'Variance (formule de calcul)', formula: 'V = \\frac{1}{N}\\left(\\sum_{i=1}^{p} n_i c_i^2\\right) - (\\bar{x})^2' },
        { name: 'Écart-type et écart absolu moyen', formula: '\\sigma = \\sqrt{V}, \\quad e_m = \\frac{1}{N}\\sum_{i=1}^{p} n_i |c_i - \\bar{x}|' },
        { name: 'Écart interquartile', formula: '\\text{EIQ} = Q_3 - Q_1' },
      ],
      workedExample: {
        title: 'Indicateurs de dispersion du temps de sport (p. 9-12)',
        statement:
          'Pour $N = 125$ élèves, $\\bar{x} = 39{,}84$ min, $\\sum n_i c_i^2 = 322\\,000$, $\\sum n_i |c_i - \\bar{x}| = 2895{,}68$, $Q_1 = 17{,}86$ et $Q_3 = 51{,}83$. Calcule $V$, $\\sigma$, $e_m$ et $Q_3 - Q_1$.',
        methodSteps: [
          'Variance : $V = \\dfrac{322\\,000}{125} - (39{,}84)^2 = 2576 - 1587{,}23 = 988{,}77$.',
          'Écart-type : $\\sigma = \\sqrt{988{,}77} \\approx 31{,}44$ min (élevé par rapport à $39{,}84$, donc grande dispersion).',
          'Écart absolu moyen : $e_m = \\dfrac{2895{,}68}{125} \\approx 23{,}17$ min.',
          'Écart interquartile : $Q_3 - Q_1 = 51{,}83 - 17{,}86 = 33{,}97$ min ($50\\%$ des élèves pratiquent entre $17{,}86$ et $51{,}83$ min).',
        ],
        conclusion: '$V \\approx 988{,}77$, $\\sigma \\approx 31{,}44$ min, $e_m \\approx 23{,}17$ min et $Q_3 - Q_1 = 33{,}97$ min.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'propriete',
          stepBadge: 'Propriété',
          stepTheme: 'Calculer la variance puis l’écart-type',
          stepTitle: 'Utiliser la formule de König-Huygens V = (Σ nᵢ cᵢ²)/N − x̄²',
          paragraphText:
            'Dans la pratique, on ajoute une ligne $n_i c_i^2$ dans le tableau, on divise sa somme par $N$, puis on soustrait le carré de la moyenne $\\bar{x}^2$ avant de prendre la racine carrée pour $\\sigma$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p05_q1',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 5 ($N = 50$, $\\bar{x} = 11{,}15$, $\\sum n_i c_i^2 = 7613{,}75$), combien valent la variance $V$ et l’écart-type $\\sigma$ (arrondis à $10^{-2}$) ?',
            options: [
              '$V = 152{,}28$ et $\\sigma = 12{,}34$',
              '$V = 27{,}95$ et $\\sigma = 5{,}29$',
              '$V = 11{,}15$ et $\\sigma = 3{,}34$',
              '$V = 35{,}40$ et $\\sigma = 5{,}95$',
            ],
            correctAnswerIndex: 1,
            explanation: '$V = \\dfrac{7613{,}75}{50} - (11{,}15)^2 = 152{,}275 - 124{,}3225 \\approx 27{,}95$, et $\\sigma = \\sqrt{27{,}95} \\approx 5{,}29$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'definition',
          stepBadge: 'Définition',
          stepTheme: 'Calculer l’écart absolu moyen e_m',
          stepTitle: 'Utiliser les valeurs absolues |cᵢ − x̄|',
          paragraphText:
            'Contrairement à la somme des écarts signés $\\sum n_i (c_i - \\bar{x})$ qui vaut toujours $0$, l’écart absolu moyen prend $|c_i - \\bar{x}| \\ge 0$ pour mesurer la distance moyenne à $\\bar{x}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p05_q2',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 5 ($N = 50$), on trouve $\\sum_{i=1}^4 n_i |c_i - \\bar{x}| = 246$. Que vaut l’écart absolu moyen $e_m$ ?',
            options: ['$4{,}92$', '$5{,}29$', '$11{,}15$', '$24{,}6$'],
            correctAnswerIndex: 0,
            explanation: '$e_m = \\dfrac{246}{50} = 4{,}92$.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Calculer et interpréter l’écart interquartile',
          stepTitle: 'Relier Q₃ − Q₁ à la moitié centrale des effectifs',
          paragraphText:
            'Entre $Q_1$ ($25\\%$) et $Q_3$ ($75\\%$) se trouvent exactement $50\\%$ des observations centrales : plus $Q_3 - Q_1$ est petit, plus la moitié centrale de la population est concentrée autour de la médiane.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p05_q3',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 2, on a trouvé $Q_1 = 11{,}72$ ans et $Q_3 = 16{,}61$ ans. Que vaut l’écart interquartile et comment l’interpréter ?',
            options: [
              '$4{,}89$ ans : l’écart entre le plus âgé et le plus jeune est de $4{,}89$ ans',
              '$4{,}89$ ans : $50\\%$ des personnes centrales ont leurs âges dans un intervalle d’amplitude $4{,}89$ ans',
              '$28{,}33$ ans : c’est la somme des âges extrêmes',
              '$14{,}17$ ans : c’est l’âge moyen',
            ],
            correctAnswerIndex: 1,
            explanation: '$Q_3 - Q_1 = 16{,}61 - 11{,}72 = 4{,}89$ ans, amplitude de l’intervalle $[Q_1; Q_3]$ contenant $50\\%$ des individus.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Vérifier l’ordre de grandeur d’une variance',
          stepTitle: 'Comparer deux séries avec σ',
          paragraphText:
            'Dans l’Exercice 3 ($N = 1000$, $\\sum n_i c_i^2 = 27\\,321{,}75$, $\\bar{x} = 4{,}65$), on obtient $V = 27{,}32175 - (4{,}65)^2 \\approx 5{,}70$ et $\\sigma = \\sqrt{5{,}70} \\approx 2{,}39$ (ou $2{,}4$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p05_q4',
            type: 'mcq',
            prompt:
              'Dans l’Exercice 4 ($N = 300$, $\\bar{x} = 33{,}33$), on obtient une variance $V = 184{,}74$. Que vaut l’écart-type $\\sigma$ et l’écart interquartile ($Q_1 = 21{,}67$, $Q_3 = 43{,}75$) ?',
            options: [
              '$\\sigma = 13{,}59$ et $Q_3 - Q_1 = 22{,}08$',
              '$\\sigma = 22{,}08$ et $Q_3 - Q_1 = 13{,}59$',
              '$\\sigma = 184{,}74$ et $Q_3 - Q_1 = 21{,}67$',
              '$\\sigma = 92{,}37$ et $Q_3 - Q_1 = 65{,}42$',
            ],
            correctAnswerIndex: 0,
            explanation: '$\\sigma = \\sqrt{184{,}74} \\approx 13{,}59$ et $Q_3 - Q_1 = 43{,}75 - 21{,}67 = 22{,}08$.',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Oublier d’élever x̄ au carré dans V',
          stepTitle: 'C’est −(x̄)², JAMAIS − x̄ tout court, et toujours nᵢ × cᵢ² (pas (nᵢ cᵢ)²) !',
          paragraphText:
            'Deux erreurs fréquentes font exploser ou rendre négative la variance : écrire $(n_i c_i)^2$ au lieu de $n_i c_i^2$, ou oublier le carré sur $\\bar{x}$. Si ton calcul donne $V < 0$, il y a forcément une faute de calcul !',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p05_q5',
            type: 'mcq',
            prompt: 'Lors du calcul de la variance $V = \\dfrac{1}{N}\\sum n_i c_i^2 - \\bar{x}^2$, quel résultat est mathématiquement IMPOSSIBLE ?',
            options: ['$V = 0$', '$V = 0{,}14$', '$V = -2{,}5$', '$V = 988{,}77$'],
            correctAnswerIndex: 2,
            explanation: 'Par définition $V = \\dfrac{1}{N}\\sum n_i (c_i - \\bar{x})^2$ est une somme de carrés pondérée par des effectifs positifs : $V \\ge 0$ toujours !',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Variance nulle',
          stepTitle: 'Quand l’écart-type vaut-il 0 ?',
          paragraphText:
            'Si tous les centres (ou toutes les valeurs d’une série discrète) sont égaux à la moyenne $\\bar{x}$, alors $c_i - \\bar{x} = 0$ partout : la dispersion est nulle ($V = 0, \\sigma = 0, e_m = 0$).',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p05_q6',
            type: 'mcq',
            prompt: 'Que peut-on conclure d’une série statistique dont l’écart-type vaut $\\sigma = 0$ ?',
            options: [
              'La moyenne vaut obligatoirement $0$',
              'Toutes les valeurs de la série sont égales à la moyenne',
              'Il y a une erreur dans les données',
              'La médiane et la moyenne sont forcément différentes',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\sigma = 0 \\iff V = 0 \\iff \\forall i,\\ (c_i - \\bar{x})^2 = 0$, soit toutes les valeurs identiques.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p05_q1',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 5 ($N = 50$, $\\bar{x} = 11{,}15$, $\\sum n_i c_i^2 = 7613{,}75$), combien valent la variance $V$ et l’écart-type $\\sigma$ (arrondis à $10^{-2}$) ?',
          options: [
            '$V = 152{,}28$ et $\\sigma = 12{,}34$',
            '$V = 27{,}95$ et $\\sigma = 5{,}29$',
            '$V = 11{,}15$ et $\\sigma = 3{,}34$',
            '$V = 35{,}40$ et $\\sigma = 5{,}95$',
          ],
          correctAnswerIndex: 1,
          explanation: '$V = \\dfrac{7613{,}75}{50} - (11{,}15)^2 = 152{,}275 - 124{,}3225 \\approx 27{,}95$, et $\\sigma = \\sqrt{27{,}95} \\approx 5{,}29$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p05_q2',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 5 ($N = 50$), on trouve $\\sum_{i=1}^4 n_i |c_i - \\bar{x}| = 246$. Que vaut l’écart absolu moyen $e_m$ ?',
          options: ['$4{,}92$', '$5{,}29$', '$11{,}15$', '$24{,}6$'],
          correctAnswerIndex: 0,
          explanation: '$e_m = \\dfrac{246}{50} = 4{,}92$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p05_q3',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 2, on a trouvé $Q_1 = 11{,}72$ ans et $Q_3 = 16{,}61$ ans. Que vaut l’écart interquartile et comment l’interpréter ?',
          options: [
            '$4{,}89$ ans : l’écart entre le plus âgé et le plus jeune est de $4{,}89$ ans',
            '$4{,}89$ ans : $50\\%$ des personnes centrales ont leurs âges dans un intervalle d’amplitude $4{,}89$ ans',
            '$28{,}33$ ans : c’est la somme des âges extrêmes',
            '$14{,}17$ ans : c’est l’âge moyen',
          ],
          correctAnswerIndex: 1,
          explanation: '$Q_3 - Q_1 = 16{,}61 - 11{,}72 = 4{,}89$ ans, amplitude de l’intervalle $[Q_1; Q_3]$ contenant $50\\%$ des individus.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p05_q4',
          type: 'mcq',
          prompt:
            'Dans l’Exercice 4 ($N = 300$, $\\bar{x} = 33{,}33$), on obtient une variance $V = 184{,}74$. Que vaut l’écart-type $\\sigma$ et l’écart interquartile ($Q_1 = 21{,}67$, $Q_3 = 43{,}75$) ?',
          options: [
            '$\\sigma = 13{,}59$ et $Q_3 - Q_1 = 22{,}08$',
            '$\\sigma = 22{,}08$ et $Q_3 - Q_1 = 13{,}59$',
            '$\\sigma = 184{,}74$ et $Q_3 - Q_1 = 21{,}67$',
            '$\\sigma = 92{,}37$ et $Q_3 - Q_1 = 65{,}42$',
          ],
          correctAnswerIndex: 0,
          explanation: '$\\sigma = \\sqrt{184{,}74} \\approx 13{,}59$ et $Q_3 - Q_1 = 43{,}75 - 21{,}67 = 22{,}08$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p05_q5',
          type: 'mcq',
          prompt: 'Lors du calcul de la variance $V = \\dfrac{1}{N}\\sum n_i c_i^2 - \\bar{x}^2$, quel résultat est mathématiquement IMPOSSIBLE ?',
          options: ['$V = 0$', '$V = 0{,}14$', '$V = -2{,}5$', '$V = 988{,}77$'],
          correctAnswerIndex: 2,
          explanation: 'Par définition $V = \\dfrac{1}{N}\\sum n_i (c_i - \\bar{x})^2$ est une somme de carrés pondérée par des effectifs positifs : $V \\ge 0$ toujours !',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p05_q6',
          type: 'mcq',
          prompt: 'Que peut-on conclure d’une série statistique dont l’écart-type vaut $\\sigma = 0$ ?',
          options: [
            'La moyenne vaut obligatoirement $0$',
            'Toutes les valeurs de la série sont égales à la moyenne',
            'Il y a une erreur dans les données',
            'La médiane et la moyenne sont forcément différentes',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\sigma = 0 \\iff V = 0 \\iff \\forall i,\\ (c_i - \\bar{x})^2 = 0$, soit toutes les valeurs identiques.',
        },
      ],
    },

    // ========================================================================
    // POINT 6 : Analyse comparée et prise de décision (situation complexe)
    // ========================================================================
    {
      id: 'premiere_c_maths_numerique_l17_statistiques_p06',
      order: 6,
      title: 'Analyse comparée et prise de décision statistique',
      summary:
        'Comparer deux séries à l’aide des indicateurs de position, de dispersion et d’interpolation pour trancher un problème concret.',
      conceptExplanation:
        "En situation complexe (contrôle qualité, partage d'effectifs, comparaison de machines), la décision s'appuie sur la vérification simultanée de critères chiffrés :\n1. **Position** ($\\bar{x}$, $M_e$, $Q_1$, $Q_3$) pour vérifier le centrage autour d'une cible ;\n2. **Dispersion** ($\\sigma$, $Q_3 - Q_1$) pour mesurer la régularité (un écart-type plus faible traduit une production plus régulière) ;\n3. **Interpolation linéaire** sur les fréquences cumulées croissantes pour estimer la proportion contenue dans un intervalle $[\\alpha; \\beta]$ :\n$$f([\\alpha; \\beta]) = F(\\beta) - F(\\alpha)$$",
      keyRule:
        'La proportion estimée dans un intervalle [α ; β] vaut F(β) − F(α), où F(α) et F(β) sont obtenus par interpolation linéaire des fréquences cumulées croissantes.',
      formulas: [
        { name: 'Proportion sur [α ; β]', formula: 'P([\\alpha; \\beta]) = F(\\beta) - F(\\alpha)' },
      ],
      workedExample: {
        title: 'Choisir entre les machines A et B du COGES (Situation complexe p. 12-14)',
        statement:
          'Deux machines A et B remplissent $80$ sacs de $50\\text{ kg}$ en classes d’amplitude $0{,}2$ de $[49; 50{,}6[$. Une machine est retenue si : (1) $\\bar{x} \\in [49{,}7; 50{,}3]$ ; (2) $\\sigma < 0{,}5\\text{ kg}$ ; (3) au moins $85\\%$ des sacs sont dans $[49{,}3; 50{,}5]$. Quelle machine choisir ?',
        methodSteps: [
          'Moyennes : $\\bar{x}_A = \\dfrac{3983{,}8}{80} \\approx 49{,}80\\text{ kg}$ et $\\bar{x}_B = \\dfrac{3991{,}2}{80} = 49{,}89\\text{ kg}$. Les deux vérifient (1).',
          'Dispersion de B : $V_B = \\dfrac{199\\,132}{80} - (49{,}89)^2 = 0{,}14 \\implies \\sigma_B = \\sqrt{0{,}14} \\approx 0{,}37\\text{ kg} < 0{,}5\\text{ kg}$ (critère 2 validé pour B).',
          'Proportion dans $[49{,}3; 50{,}5]$ par interpolation des FCC (%) :\n- Pour A : $F_A(49{,}3) = 12{,}55\\%$ et $F_A(50{,}5) = 96{,}9\\%$, soit $96{,}9 - 12{,}55 = 84{,}35\\% < 85\\%$ (A échoue au critère 3).\n- Pour B : $F_B(49{,}3) = 8{,}75\\%$ et $F_B(50{,}5) = 98{,}15\\%$, soit $98{,}15 - 8{,}75 = 89{,}4\\% \\ge 85\\%$ (B valide les 3 critères).',
        ],
        conclusion: 'Le président du COGES doit choisir la **machine B**.',
      },
      structuredSteps: [
        {
          stepNumber: 1,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Vérifier le critère de centrage (moyenne)',
          stepTitle: 'Comparer les moyennes des machines A et B à l’intervalle cible',
          paragraphText:
            'Le COGES exige $49{,}7 \\le \\bar{x} \\le 50{,}3$. Pour $N = 80$ sacs, on calcule $\\sum n_i c_i = 3983{,}8$ pour A et $3991{,}2$ pour B.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p06_q1',
            type: 'mcq',
            prompt: 'Que vaut le stockage moyen $\\bar{x}_B$ de la machine B sachant $\\sum n_i c_i = 3991{,}2$ pour $N = 80$ sacs ?',
            options: ['$49{,}79\\text{ kg}$', '$49{,}89\\text{ kg}$', '$50{,}00\\text{ kg}$', '$50{,}12\\text{ kg}$'],
            correctAnswerIndex: 1,
            explanation: '$\\bar{x}_B = \\dfrac{3991{,}2}{80} = 49{,}89\\text{ kg}$, qui est bien compris entre $49{,}7$ et $50{,}3$.',
          },
        },
        {
          stepNumber: 2,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Vérifier le critère de régularité (écart-type)',
          stepTitle: 'Calculer σ_B et tester σ < 0,5',
          paragraphText:
            'Pour la machine B, la variance vaut $V_B = \\dfrac{199\\,132}{80} - (49{,}89)^2 = 0{,}14$, d’où $\\sigma_B = \\sqrt{0{,}14} \\approx 0{,}37\\text{ kg}$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p06_q2',
            type: 'mcq',
            prompt: 'Si une machine présente une variance $V = 0{,}14$, quel est son écart-type $\\sigma$ et satisfait-elle la condition $\\sigma < 0{,}5\\text{ kg}$ ?',
            options: [
              '$\\sigma = 0{,}14\\text{ kg}$, oui',
              '$\\sigma \\approx 0{,}37\\text{ kg}$, oui',
              '$\\sigma \\approx 0{,}37\\text{ kg}$, non',
              '$\\sigma \\approx 0{,}70\\text{ kg}$, non',
            ],
            correctAnswerIndex: 1,
            explanation: '$\\sigma = \\sqrt{0{,}14} \\approx 0{,}374 < 0{,}5$ : la condition de régularité est bien vérifiée.',
          },
        },
        {
          stepNumber: 3,
          stepKind: 'methode',
          stepBadge: 'Méthode',
          stepTheme: 'Estimer le pourcentage dans un intervalle [49,3 ; 50,5]',
          stepTitle: 'Soustraire F(49,3) à F(50,5)',
          paragraphText:
            'La proportion de sacs pesant entre $49{,}3\\text{ kg}$ et $50{,}5\\text{ kg}$ est égale à la fréquence cumulée en $50{,}5$ moins celle en $49{,}3$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p06_q3',
            type: 'mcq',
            prompt:
              'Pour la machine B, l’interpolation donne $F_B(49{,}3) = 8{,}75\\%$ et $F_B(50{,}5) = 98{,}15\\%$. Quel pourcentage de sacs contient l’intervalle $[49{,}3; 50{,}5]$ ?',
            options: ['$84{,}35\\%$', '$89{,}4\\%$', '$98{,}15\\%$', '$91{,}25\\%$'],
            correctAnswerIndex: 1,
            explanation: '$F_B(50{,}5) - F_B(49{,}3) = 98{,}15 - 8{,}75 = 89{,}4\\%$, ce qui dépasse le seuil de $85\\%$.',
          },
        },
        {
          stepNumber: 4,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Trancher sur les 3 critères simultanés',
          stepTitle: 'Comparer machine A et machine B pour conclure',
          paragraphText:
            'La machine A obtient $84{,}35\\%$ dans $[49{,}3; 50{,}5]$ (en dessous du seuil exigé de $85\\%$), alors que la machine B atteint $89{,}4\\%$ avec $\\bar{x}_B = 49{,}89$ et $\\sigma_B = 0{,}37 < 0{,}5$.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p06_q4',
            type: 'mcq',
            prompt: 'Pourquoi le président du COGES doit-il éliminer la machine A au profit de la machine B ?',
            options: [
              'Parce que la moyenne de A sort de $[49{,}7; 50{,}3]$',
              'Parce que A ne place que $84{,}35\\%$ des sacs dans $[49{,}3; 50{,}5]$ (contre $85\\%$ exigés), tandis que B valide tous les critères',
              'Parce que B teste $100$ sacs et A seulement $80$',
              'Parce que A a un écart-type nul',
            ],
            correctAnswerIndex: 1,
            explanation: 'Avec $84{,}35\\% < 85\\%$, la machine A échoue au troisième critère, contrairement à la machine B ($89{,}4\\%$).',
          },
        },
        {
          stepNumber: 5,
          stepKind: 'piege',
          stepBadge: 'Piège',
          stepTheme: 'Confondre variance et écart-type lors du test de seuil',
          stepTitle: 'Compare toujours σ (en kg) au seuil en kg, jamais V (en kg²) !',
          paragraphText:
            'Le seuil $0{,}5\\text{ kg}$ a la dimension d’une masse : il faut donc le comparer à l’écart-type $\\sigma = \\sqrt{V}$ (en kg) et non à la variance $V$ (en $\\text{kg}^2$). Par exemple $V = 0{,}39$ donne $\\sigma = \\sqrt{0{,}39} \\approx 0{,}62 > 0{,}5$ !',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p06_q5',
            type: 'mcq',
            prompt:
              'Un élève calcule une variance $V = 0{,}36\\text{ kg}^2$ et en conclut que la condition $\\sigma < 0{,}5\\text{ kg}$ est vérifiée car $0{,}36 < 0{,}5$. A-t-il raison ?',
            options: [
              'Oui, car la variance et l’écart-type sont toujours inférieurs à $0{,}5$ ensemble',
              'Non, car $\\sigma = \\sqrt{0{,}36} = 0{,}6\\text{ kg} > 0{,}5\\text{ kg}$ : pour des nombres entre $0$ et $1$, $\\sqrt{V} > V$',
              'Oui, car $\\sigma = V^2 = 0{,}1296$',
              'On ne peut pas comparer $\\sigma$ et $0{,}5$',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pour $0 < V < 1$, la racine carrée est PLUS GRANDE que $V$ : $V = 0{,}36 \\implies \\sigma = 0{,}6 > 0{,}5$ !',
          },
        },
        {
          stepNumber: 6,
          stepKind: 'exemple',
          stepBadge: 'Exemple',
          stepTheme: 'Organiser les données brutes de la situation d’apprentissage',
          stepTitle: 'Partager 30 coureurs en 5 équipes équilibrées',
          paragraphText:
            'Dans la situation d’apprentissage (p. 1-2), les $30$ coureurs ont des temps de $39$ min (Lamine) à $66$ min (Akalé). Regrouper par classes d’amplitude $6$ ou $5$ min, tracer l’histogramme puis déterminer $Q_1, M_e, Q_3$ permet de situer exactement chaque coureur.',
          exercise: {
            id: 'premiere_c_maths_numerique_l17_statistiques_p06_q6',
            type: 'mcq',
            prompt:
              'Dans la situation d’apprentissage des $30$ coureurs (temps de $39$ min à $66$ min), à quels rangs théoriques de la courbe cumulative correspondent le $1^{\\text{er}}$ quart ($Q_1$), la moitié ($M_e$) et le $3^{\\text{e}}$ quart ($Q_3$) ?',
            options: [
              'Rangs $5$, $15$ et $25$',
              'Rangs $7{,}5$, $15$ et $22{,}5$',
              'Rangs $10$, $15$ et $20$',
              'Rangs $6$, $12$ et $18$',
            ],
            correctAnswerIndex: 1,
            explanation: '$0{,}25 \\times 30 = 7{,}5$, $0{,}5 \\times 30 = 15$ et $0{,}75 \\times 30 = 22{,}5$.',
          },
        },
      ],
      exercises: [
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p06_q1',
          type: 'mcq',
          prompt: 'Que vaut le stockage moyen $\\bar{x}_B$ de la machine B sachant $\\sum n_i c_i = 3991{,}2$ pour $N = 80$ sacs ?',
          options: ['$49{,}79\\text{ kg}$', '$49{,}89\\text{ kg}$', '$50{,}00\\text{ kg}$', '$50{,}12\\text{ kg}$'],
          correctAnswerIndex: 1,
          explanation: '$\\bar{x}_B = \\dfrac{3991{,}2}{80} = 49{,}89\\text{ kg}$, qui est bien compris entre $49{,}7$ et $50{,}3$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p06_q2',
          type: 'mcq',
          prompt: 'Si une machine présente une variance $V = 0{,}14$, quel est son écart-type $\\sigma$ et satisfait-elle la condition $\\sigma < 0{,}5\\text{ kg}$ ?',
          options: [
            '$\\sigma = 0{,}14\\text{ kg}$, oui',
            '$\\sigma \\approx 0{,}37\\text{ kg}$, oui',
            '$\\sigma \\approx 0{,}37\\text{ kg}$, non',
            '$\\sigma \\approx 0{,}70\\text{ kg}$, non',
          ],
          correctAnswerIndex: 1,
          explanation: '$\\sigma = \\sqrt{0{,}14} \\approx 0{,}374 < 0{,}5$ : la condition de régularité est bien vérifiée.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p06_q3',
          type: 'mcq',
          prompt:
            'Pour la machine B, l’interpolation donne $F_B(49{,}3) = 8{,}75\\%$ et $F_B(50{,}5) = 98{,}15\\%$. Quel pourcentage de sacs contient l’intervalle $[49{,}3; 50{,}5]$ ?',
          options: ['$84{,}35\\%$', '$89{,}4\\%$', '$98{,}15\\%$', '$91{,}25\\%$'],
          correctAnswerIndex: 1,
          explanation: '$F_B(50{,}5) - F_B(49{,}3) = 98{,}15 - 8{,}75 = 89{,}4\\%$, ce qui dépasse le seuil de $85\\%$.',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p06_q4',
          type: 'mcq',
          prompt: 'Pourquoi le président du COGES doit-il éliminer la machine A au profit de la machine B ?',
          options: [
            'Parce que la moyenne de A sort de $[49{,}7; 50{,}3]$',
            'Parce que A ne place que $84{,}35\\%$ des sacs dans $[49{,}3; 50{,}5]$ (contre $85\\%$ exigés), tandis que B valide tous les critères',
            'Parce que B teste $100$ sacs et A seulement $80$',
            'Parce que A a un écart-type nul',
          ],
          correctAnswerIndex: 1,
          explanation: 'Avec $84{,}35\\% < 85\\%$, la machine A échoue au troisième critère, contrairement à la machine B ($89{,}4\\%$).',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p06_q5',
          type: 'mcq',
          prompt:
            'Un élève calcule une variance $V = 0{,}36\\text{ kg}^2$ et en conclut que la condition $\\sigma < 0{,}5\\text{ kg}$ est vérifiée car $0{,}36 < 0{,}5$. A-t-il raison ?',
          options: [
            'Oui, car la variance et l’écart-type sont toujours inférieurs à $0{,}5$ ensemble',
            'Non, car $\\sigma = \\sqrt{0{,}36} = 0{,}6\\text{ kg} > 0{,}5\\text{ kg}$ : pour des nombres entre $0$ et $1$, $\\sqrt{V} > V$',
            'Oui, car $\\sigma = V^2 = 0{,}1296$',
            'On ne peut pas comparer $\\sigma$ et $0{,}5$',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pour $0 < V < 1$, la racine carrée est PLUS GRANDE que $V$ : $V = 0{,}36 \\implies \\sigma = 0{,}6 > 0{,}5$ !',
        },
        {
          id: 'premiere_c_maths_numerique_l17_statistiques_p06_q6',
          type: 'mcq',
          prompt:
            'Dans la situation d’apprentissage des $30$ coureurs (temps de $39$ min à $66$ min), à quels rangs théoriques de la courbe cumulative correspondent le $1^{\\text{er}}$ quart ($Q_1$), la moitié ($M_e$) et le $3^{\\text{e}}$ quart ($Q_3$) ?',
          options: [
            'Rangs $5$, $15$ et $25$',
            'Rangs $7{,}5$, $15$ et $22{,}5$',
            'Rangs $10$, $15$ et $20$',
            'Rangs $6$, $12$ et $18$',
          ],
          correctAnswerIndex: 1,
          explanation: '$0{,}25 \\times 30 = 7{,}5$, $0{,}5 \\times 30 = 15$ et $0{,}75 \\times 30 = 22{,}5$.',
        },
      ],
    },
  ],
};
