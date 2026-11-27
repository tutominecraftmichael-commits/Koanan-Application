import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 9 : La mise en réserve des nutriments » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=903
export const SVT_1ERE_A_L09_MISE_EN_RESERVE: CurriculumChapter = {
  "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments",
  "subjectId": "svt",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 9,
  "title": "Leçon 9 : La mise en réserve des nutriments",
  "summary": "Les nutriments sont mis en réserve dans le foie et les muscles sous forme de glycogène et dans les tissus adipeux sous forme de triglycérides, selon un mécanisme hormonal où le pancréas régule la glycémie par l'insuline et le glucagon.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=903",
  "points": [
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01",
      "order": 1,
      "title": "Les lieux et les formes de stockage des nutriments",
      "summary": "Citer les trois organes de stockage et la forme de réserve propre à chacun : glycogène dans le foie et les muscles, triglycérides dans les tissus adipeux.",
      "conceptExplanation": "Lors de la digestion, les aliments sont transformés en nutriments qui sont absorbés dans les intestins et déversés dans le sang ; le sang les transporte aux organes de stockage.\nLe document 1 donne les lieux et les formes de stockage des nutriments dans l'organisme : dans le foie, le glycogène ; dans les muscles, le glycogène ; dans les tissus adipeux, les triglycérides.\nLes organes de stockage sont donc le foie, les muscles et les tissus adipeux, et les nutriments y sont mis en réserve sous différentes formes.",
      "keyRule": "Trois adresses à retenir : foie et muscles stockent du glycogène, tissus adipeux stockent des triglycérides (graisses).",
      "formulas": [],
      "workedExample": {
        "title": "Relier chaque forme de réserve à ses lieux de stockage (exercice 1)",
        "statement": "Relie le glycogène et les triglycérides à leurs lieux de stockage parmi : muscles, foie, tissu adipeux.",
        "methodSteps": [
          "Le glycogène est stocké dans les muscles et dans le foie.",
          "Les triglycérides sont stockés dans le tissu adipeux."
        ],
        "conclusion": "Corrigé de l'exercice 1 de consolidation : glycogène, muscles et foie ; triglycérides, tissu adipeux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le stockage dans le foie",
          "stepTheme": "Le stockage dans le foie",
          "stepBadge": "Le stockage dans le foie",
          "paragraphText": "Dans le foie, les nutriments sont stockés sous forme de glycogène.\nLe foie est le premier organe de stockage cité par le document 1.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q1",
            "type": "mcq",
            "prompt": "Dans le foie, les nutriments sont stockés sous forme :",
            "options": [
              "De glycogène",
              "De triglycérides uniquement",
              "D'insuline",
              "D'acides aminés libres uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Résultats du document 1, partie I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le stockage dans les muscles",
          "stepTheme": "Le stockage dans les muscles",
          "stepBadge": "Le stockage dans les muscles",
          "paragraphText": "Dans les muscles, la forme de stockage est la même que dans le foie.\nC'est le glycogène, réserve directement mobilisable pour l'effort, comme celui de l'élève de la situation d'apprentissage.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q2",
            "type": "mcq",
            "prompt": "Dans les muscles, les nutriments sont stockés sous forme :",
            "options": [
              "De triglycérides",
              "De glucose libre uniquement",
              "De glycogène",
              "De glucagon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Résultats du document 1, partie I."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le stockage dans les tissus adipeux",
          "stepTheme": "Le stockage dans les tissus adipeux",
          "stepBadge": "Le stockage dans les tissus adipeux",
          "paragraphText": "Dans les tissus adipeux, les nutriments sont stockés sous forme de triglycérides.\nLes triglycérides correspondent aux graisses de réserve de l'organisme.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q3",
            "type": "mcq",
            "prompt": "Dans les tissus adipeux, les nutriments sont stockés sous forme :",
            "options": [
              "De glycogène",
              "De triglycérides (graisses)",
              "D'ATP uniquement",
              "De protéines musculaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats du document 1, partie I."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le trajet des nutriments jusqu'au stockage",
          "stepTheme": "Le trajet des nutriments jusqu'au stockage",
          "stepBadge": "Le trajet des nutriments jusqu'au stockage",
          "paragraphText": "Les aliments sont transformés en nutriments lors de la digestion.\nAbsorbés dans les intestins et déversés dans le sang, les nutriments sont transportés par le sang jusqu'aux organes de stockage.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q4",
            "type": "mcq",
            "prompt": "Après la digestion, les nutriments atteignent les organes de stockage :",
            "options": [
              "Par les nerfs",
              "Par la lymphe uniquement selon la leçon",
              "Sans quitter l'intestin",
              "Absorbés dans les intestins, ils sont déversés dans le sang qui les transporte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse des résultats de la partie I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas intervertir glycogène et triglycérides",
          "stepTheme": "Ne pas intervertir glycogène et triglycérides",
          "stepBadge": "Ne pas intervertir glycogène et triglycérides",
          "paragraphText": "Piège : chaque organe a sa forme de réserve.\nLe glycogène va au foie et aux muscles ; les triglycérides vont aux tissus adipeux, comme le confirme l'exercice 1 de consolidation.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q5",
            "type": "mcq",
            "prompt": "L'association correcte, selon l'exercice 1, est :",
            "options": [
              "Glycogène dans le tissu adipeux, triglycérides dans le foie",
              "Glycogène partout, triglycérides nulle part",
              "Glycogène dans les muscles et le foie, triglycérides dans le tissu adipeux",
              "Triglycérides dans les muscles uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Corrigé de l'exercice 1 de consolidation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'élève privée de déjeuner mais performante",
          "stepTheme": "L'élève privée de déjeuner mais performante",
          "stepBadge": "L'élève privée de déjeuner mais performante",
          "paragraphText": "Une élève privée de déjeuner réalise pourtant de bonnes performances en épreuves physiques et sportives.\nSon professeur explique que cette performance provient des nutriments mis en réserve par son organisme.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q6",
            "type": "mcq",
            "prompt": "La performance de l'élève privée de déjeuner s'explique, selon son professeur, par :",
            "options": [
              "Les nutriments mis en réserve par son organisme",
              "Un repas pris en cachette",
              "L'absence totale de besoin d'énergie",
              "Uniquement l'entraînement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Situation d'apprentissage de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q1",
          "type": "mcq",
          "prompt": "Dans le foie, les nutriments sont stockés sous forme :",
          "options": [
            "De glycogène",
            "De triglycérides uniquement",
            "D'insuline",
            "D'acides aminés libres uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Résultats du document 1, partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q2",
          "type": "mcq",
          "prompt": "Dans les muscles, les nutriments sont stockés sous forme :",
          "options": [
            "De triglycérides",
            "De glucose libre uniquement",
            "De glycogène",
            "De glucagon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Résultats du document 1, partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q3",
          "type": "mcq",
          "prompt": "Dans les tissus adipeux, les nutriments sont stockés sous forme :",
          "options": [
            "De glycogène",
            "De triglycérides (graisses)",
            "D'ATP uniquement",
            "De protéines musculaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats du document 1, partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q4",
          "type": "mcq",
          "prompt": "Après la digestion, les nutriments atteignent les organes de stockage :",
          "options": [
            "Par les nerfs",
            "Par la lymphe uniquement selon la leçon",
            "Sans quitter l'intestin",
            "Absorbés dans les intestins, ils sont déversés dans le sang qui les transporte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse des résultats de la partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q5",
          "type": "mcq",
          "prompt": "L'association correcte, selon l'exercice 1, est :",
          "options": [
            "Glycogène dans le tissu adipeux, triglycérides dans le foie",
            "Glycogène partout, triglycérides nulle part",
            "Glycogène dans les muscles et le foie, triglycérides dans le tissu adipeux",
            "Triglycérides dans les muscles uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Corrigé de l'exercice 1 de consolidation."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p01_q6",
          "type": "mcq",
          "prompt": "La performance de l'élève privée de déjeuner s'explique, selon son professeur, par :",
          "options": [
            "Les nutriments mis en réserve par son organisme",
            "Un repas pris en cachette",
            "L'absence totale de besoin d'énergie",
            "Uniquement l'entraînement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Situation d'apprentissage de la leçon."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02",
      "order": 2,
      "title": "Quel nutriment va dans quel organe, et sous quelle forme",
      "summary": "Préciser, pour chaque organe, l'origine des nutriments stockés : glucose et acides aminés vers le glycogène, acides gras et glycérol vers les triglycérides.",
      "conceptExplanation": "Dans le foie, le glucose provenant de la digestion des glucides et les acides aminés provenant de la digestion des protides sont stockés sous forme de glycogène.\nDans les muscles, le glucose et les acides aminés sont également stockés sous forme de glycogène.\nDans les tissus adipeux, les acides gras et le glycérol issus de la transformation des lipides, ainsi qu'une partie du glucose, sont stockés sous forme de triglycérides (graisses).\nAinsi, un même nutriment peut rejoindre plusieurs organes, mais la forme de stockage dépend de l'organe : glycogène pour le foie et les muscles, triglycérides pour les tissus adipeux.",
      "keyRule": "Origine à retenir : glucides vers glucose, protides vers acides aminés, lipides vers acides gras et glycérol ; forme finale selon l'organe.",
      "formulas": [],
      "workedExample": {
        "title": "Le devenir du glucose selon l'organe",
        "statement": "Un même nutriment, le glucose, est stocké différemment selon l'organe qui le reçoit. Explique son devenir dans le foie, les muscles et les tissus adipeux.",
        "methodSteps": [
          "Dans le foie et dans les muscles, le glucose est stocké sous forme de glycogène.",
          "Dans les tissus adipeux, une partie du glucose rejoint les acides gras et le glycérol stockés sous forme de triglycérides."
        ],
        "conclusion": "Analyse des résultats de la partie I."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le foie stocke glucose et acides aminés en glycogène",
          "stepTheme": "Le foie stocke glucose et acides aminés en glycogène",
          "stepBadge": "Le foie stocke glucose et acides aminés en glycogène",
          "paragraphText": "Le foie reçoit le glucose de la digestion des glucides et les acides aminés de la digestion des protides.\nIl les stocke sous forme de glycogène.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q1",
            "type": "mcq",
            "prompt": "Dans le foie, le glucose et les acides aminés sont stockés sous forme :",
            "options": [
              "De triglycérides",
              "D'insuline",
              "De glucose libre sans transformation",
              "De glycogène"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse des résultats de la partie I."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les muscles aussi stockent en glycogène",
          "stepTheme": "Les muscles aussi stockent en glycogène",
          "stepBadge": "Les muscles aussi stockent en glycogène",
          "paragraphText": "Les muscles reçoivent eux aussi le glucose et les acides aminés.\nComme le foie, ils les stockent sous forme de glycogène.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q2",
            "type": "mcq",
            "prompt": "Dans les muscles, le glucose et les acides aminés sont stockés :",
            "options": [
              "Sous forme de triglycérides",
              "Également sous forme de glycogène",
              "Sans aucune transformation",
              "Uniquement sous forme de graisses"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des résultats de la partie I."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les tissus adipeux stockent les produits des lipides",
          "stepTheme": "Les tissus adipeux stockent les produits des lipides",
          "stepBadge": "Les tissus adipeux stockent les produits des lipides",
          "paragraphText": "Les tissus adipeux reçoivent les acides gras et le glycérol issus de la transformation des lipides.\nIls les stockent sous forme de triglycérides, c'est-à-dire de graisses.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q3",
            "type": "mcq",
            "prompt": "Les acides gras et le glycérol sont stockés :",
            "options": [
              "Dans le foie, sous forme de glycogène",
              "Dans les tissus adipeux, sous forme de triglycérides",
              "Dans les muscles, sous forme de glycogène",
              "Dans le sang, sans stockage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des résultats de la partie I."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une partie du glucose part aussi en triglycérides",
          "stepTheme": "Une partie du glucose part aussi en triglycérides",
          "stepBadge": "Une partie du glucose part aussi en triglycérides",
          "paragraphText": "Le glucose n'est pas réservé au seul glycogène.\nUne partie du glucose est stockée dans les tissus adipeux sous forme de triglycérides, avec les produits des lipides.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q4",
            "type": "mcq",
            "prompt": "Une partie du glucose est stockée :",
            "options": [
              "Uniquement dans le foie",
              "Dans le pancréas",
              "Nulle part, il est toujours utilisé immédiatement",
              "Dans les tissus adipeux, sous forme de triglycérides"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse des résultats de la partie I."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "L'origine digestive de chaque nutriment",
          "stepTheme": "L'origine digestive de chaque nutriment",
          "stepBadge": "L'origine digestive de chaque nutriment",
          "paragraphText": "Chaque nutriment stocké vient de la digestion d'une catégorie d'aliments.\nLe glucose provient de la digestion des glucides, les acides aminés de la digestion des protides, et les acides gras et le glycérol de la transformation des lipides.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q5",
            "type": "mcq",
            "prompt": "Les acides aminés stockés proviennent de la digestion :",
            "options": [
              "Des protides",
              "Des glucides",
              "Des lipides",
              "De l'eau"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Analyse des résultats de la partie I."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La forme de réserve dépend de l'organe, pas seulement du nutriment",
          "stepTheme": "La forme de réserve dépend de l'organe, pas seulement du nutriment",
          "stepBadge": "La forme de réserve dépend de l'organe, pas seulement du nutriment",
          "paragraphText": "Piège : croire qu'un nutriment a toujours la même forme de stockage partout.\nLe glucose devient glycogène dans le foie et les muscles, mais triglycérides pour la partie stockée dans les tissus adipeux.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q6",
            "type": "mcq",
            "prompt": "La forme de stockage d'un nutriment dépend principalement :",
            "options": [
              "Uniquement de l'heure du repas",
              "Uniquement de l'âge",
              "De l'organe de stockage : glycogène au foie et aux muscles, triglycérides aux tissus adipeux",
              "Du groupe sanguin"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Synthèse de l'analyse de la partie I."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q1",
          "type": "mcq",
          "prompt": "Dans le foie, le glucose et les acides aminés sont stockés sous forme :",
          "options": [
            "De triglycérides",
            "D'insuline",
            "De glucose libre sans transformation",
            "De glycogène"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse des résultats de la partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q2",
          "type": "mcq",
          "prompt": "Dans les muscles, le glucose et les acides aminés sont stockés :",
          "options": [
            "Sous forme de triglycérides",
            "Également sous forme de glycogène",
            "Sans aucune transformation",
            "Uniquement sous forme de graisses"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des résultats de la partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q3",
          "type": "mcq",
          "prompt": "Les acides gras et le glycérol sont stockés :",
          "options": [
            "Dans le foie, sous forme de glycogène",
            "Dans les tissus adipeux, sous forme de triglycérides",
            "Dans les muscles, sous forme de glycogène",
            "Dans le sang, sans stockage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des résultats de la partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q4",
          "type": "mcq",
          "prompt": "Une partie du glucose est stockée :",
          "options": [
            "Uniquement dans le foie",
            "Dans le pancréas",
            "Nulle part, il est toujours utilisé immédiatement",
            "Dans les tissus adipeux, sous forme de triglycérides"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse des résultats de la partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q5",
          "type": "mcq",
          "prompt": "Les acides aminés stockés proviennent de la digestion :",
          "options": [
            "Des protides",
            "Des glucides",
            "Des lipides",
            "De l'eau"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Analyse des résultats de la partie I."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p02_q6",
          "type": "mcq",
          "prompt": "La forme de stockage d'un nutriment dépend principalement :",
          "options": [
            "Uniquement de l'heure du repas",
            "Uniquement de l'âge",
            "De l'organe de stockage : glycogène au foie et aux muscles, triglycérides aux tissus adipeux",
            "Du groupe sanguin"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Synthèse de l'analyse de la partie I."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03",
      "order": 3,
      "title": "Le rôle du pancréas démontré par l'expérience",
      "summary": "Interpréter ablation, greffe et injection d'extraits pancréatiques pour conclure que le pancréas régule la glycémie par des hormones véhiculées par le sang.",
      "conceptExplanation": "On pratique chez un chien l'ablation totale du pancréas (pancréatectomie) : la glycémie augmente.\nLa greffe d'un fragment de son propre pancréas, n'importe où sous la peau, à un chien pancréatectomisé ramène la glycémie à la normale. L'injection d'extraits pancréatiques à un chien pancréatectomisé ramène également la glycémie à la normale.\nL'augmentation de la glycémie en absence de pancréas montre que le pancréas intervient dans la régulation de la glycémie. La correction par la greffe ou l'injection signifie que le pancréas régule la glycémie grâce à des substances qu'il déverse dans le sang : ces substances sont appelées hormones.\nUne hormone est une substance chimique produite par une glande et véhiculée par le sang pour aller agir sur des cellules cibles (ou organes cibles) dont elle modifie le fonctionnement.",
      "keyRule": "Ablation : la glycémie monte ; greffe ou extraits : elle redevient normale ; le pancréas agit donc par des hormones déversées dans le sang.",
      "formulas": [],
      "workedExample": {
        "title": "La greffe au cou de l'exercice 2 de consolidation",
        "statement": "Chez un chien pancréatectomisé, la glycémie reste élevée à 3,8 grammes par litre avant la greffe ; après la greffe de pancréas, elle diminue jusqu'à la valeur normale puis remonte quand on supprime le greffon. Interprète.",
        "methodSteps": [
          "Avant la greffe, la glycémie reste élevée à cause de l'absence d'insuline.",
          "Après la greffe, la baisse de la glycémie est due à l'insuline libérée par le greffon dans le sang.",
          "Après suppression du greffon, la glycémie augmente car il n'y a plus d'insuline chez le chien."
        ],
        "conclusion": "Corrigé de l'exercice 2 de consolidation, interprétation de la courbe 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La pancréatectomie",
          "stepTheme": "La pancréatectomie",
          "stepBadge": "La pancréatectomie",
          "paragraphText": "• Pancréatectomie : ablation totale du pancréas.\nC'est l'expérience 1 du tableau : elle sert à observer ce qui se passe sans pancréas.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q1",
            "type": "mcq",
            "prompt": "La pancréatectomie est :",
            "options": [
              "Une greffe de pancréas",
              "Une injection d'extraits pancréatiques",
              "Une prise de sang",
              "L'ablation totale du pancréas"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Présentation des expériences de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Sans pancréas, la glycémie augmente",
          "stepTheme": "Sans pancréas, la glycémie augmente",
          "stepBadge": "Sans pancréas, la glycémie augmente",
          "paragraphText": "L'ablation totale du pancréas entraîne une augmentation de la glycémie.\nCela montre que le pancréas intervient dans la régulation de la glycémie.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q2",
            "type": "mcq",
            "prompt": "Après l'ablation totale du pancréas, la glycémie :",
            "options": [
              "Diminue fortement",
              "Augmente",
              "Reste rigoureusement normale",
              "Devient nulle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats et analyse des expériences de la partie II."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La greffe ramène une glycémie normale",
          "stepTheme": "La greffe ramène une glycémie normale",
          "stepBadge": "La greffe ramène une glycémie normale",
          "paragraphText": "La greffe d'un morceau de son propre pancréas, n'importe où sous la peau, ramène la glycémie à la normale.\nLe lieu de la greffe importe peu : l'action passe donc par le sang, pas par un conduit.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q3",
            "type": "mcq",
            "prompt": "La greffe d'un fragment de pancréas sous la peau entraîne :",
            "options": [
              "Une glycémie encore plus élevée",
              "La disparition du glucose sanguin",
              "Une glycémie normale",
              "Aucun effet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Expérience 2 du tableau de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les extraits pancréatiques suffisent",
          "stepTheme": "Les extraits pancréatiques suffisent",
          "stepBadge": "Les extraits pancréatiques suffisent",
          "paragraphText": "L'injection d'extraits pancréatiques à un chien pancréatectomisé ramène aussi la glycémie à la normale.\nCe sont donc des substances produites par le pancréas, et non l'organe entier en place, qui corrigent la glycémie.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q4",
            "type": "mcq",
            "prompt": "L'injection d'extraits pancréatiques montre que la correction est due :",
            "options": [
              "À des substances produites par le pancréas et déversées dans le sang",
              "À la place anatomique du pancréas",
              "Uniquement à l'alimentation du chien",
              "À un effet mécanique de l'injection"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Expérience 3 et interprétation de la partie II."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Une hormone",
          "stepTheme": "Une hormone",
          "stepBadge": "Une hormone",
          "paragraphText": "• Hormone : substance chimique produite par une glande et véhiculée par le sang.\nElle va agir sur des cellules cibles (ou organes cibles) dont elle modifie le fonctionnement.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q5",
            "type": "mcq",
            "prompt": "Une hormone est une substance :",
            "options": [
              "Produite par une glande, véhiculée par le sang, qui modifie le fonctionnement de cellules cibles",
              "Transportée uniquement par les nerfs",
              "Stockée dans les tissus adipeux",
              "Produite par les muscles uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Définition donnée dans l'interprétation de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le pancréas n'agit pas par un canal vers le sang",
          "stepTheme": "Le pancréas n'agit pas par un canal vers le sang",
          "stepBadge": "Le pancréas n'agit pas par un canal vers le sang",
          "paragraphText": "Piège : la greffe réussit n'importe où sous la peau, loin de la place normale du pancréas.\nL'action régulatrice passe donc par des hormones déversées dans le sang, conclusion de l'interprétation des trois expériences.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q6",
            "type": "mcq",
            "prompt": "Le succès d'une greffe placée n'importe où sous la peau prouve que le pancréas régule la glycémie :",
            "options": [
              "Par un conduit spécial vers le foie uniquement",
              "Par les nerfs uniquement",
              "Grâce à des substances déversées dans le sang, les hormones",
              "Par contact direct avec les muscles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation des expériences de la partie II."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q1",
          "type": "mcq",
          "prompt": "La pancréatectomie est :",
          "options": [
            "Une greffe de pancréas",
            "Une injection d'extraits pancréatiques",
            "Une prise de sang",
            "L'ablation totale du pancréas"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Présentation des expériences de la partie II."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q2",
          "type": "mcq",
          "prompt": "Après l'ablation totale du pancréas, la glycémie :",
          "options": [
            "Diminue fortement",
            "Augmente",
            "Reste rigoureusement normale",
            "Devient nulle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats et analyse des expériences de la partie II."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q3",
          "type": "mcq",
          "prompt": "La greffe d'un fragment de pancréas sous la peau entraîne :",
          "options": [
            "Une glycémie encore plus élevée",
            "La disparition du glucose sanguin",
            "Une glycémie normale",
            "Aucun effet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Expérience 2 du tableau de la partie II."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q4",
          "type": "mcq",
          "prompt": "L'injection d'extraits pancréatiques montre que la correction est due :",
          "options": [
            "À des substances produites par le pancréas et déversées dans le sang",
            "À la place anatomique du pancréas",
            "Uniquement à l'alimentation du chien",
            "À un effet mécanique de l'injection"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Expérience 3 et interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q5",
          "type": "mcq",
          "prompt": "Une hormone est une substance :",
          "options": [
            "Produite par une glande, véhiculée par le sang, qui modifie le fonctionnement de cellules cibles",
            "Transportée uniquement par les nerfs",
            "Stockée dans les tissus adipeux",
            "Produite par les muscles uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Définition donnée dans l'interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p03_q6",
          "type": "mcq",
          "prompt": "Le succès d'une greffe placée n'importe où sous la peau prouve que le pancréas régule la glycémie :",
          "options": [
            "Par un conduit spécial vers le foie uniquement",
            "Par les nerfs uniquement",
            "Grâce à des substances déversées dans le sang, les hormones",
            "Par contact direct avec les muscles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation des expériences de la partie II."
        }
      ]
    },
    {
      "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04",
      "order": 4,
      "title": "Insuline et glucagon : la régulation de la glycémie",
      "summary": "Expliquer le couple insuline hypoglycémiante et glucagon hyperglycémiant autour de la glycémie normale de 1 gramme par litre, et le diabète.",
      "conceptExplanation": "Le pancréas régule la glycémie par l'intermédiaire de deux hormones, l'insuline et le glucagon ; la glycémie normale pour un Homme est de 1 gramme par litre.\nLorsque la glycémie est inférieure à la normale (hypoglycémie), les cellules alpha des îlots de Langerhans du pancréas produisent le glucagon, qui stimule la libération du glucose par le foie, les muscles et les tissus adipeux : la glycémie revient à la normale, le glucagon est une hormone hyperglycémiante.\nLorsque la glycémie est supérieure à la normale (hyperglycémie), les cellules bêta des îlots de Langerhans produisent l'insuline, qui stimule le stockage du glucose dans le foie, les muscles et les tissus adipeux : la glycémie revient à la normale, l'insuline est une hormone hypoglycémiante.\nEn l'absence d'insuline, le glucose ne peut être stocké, ce qui entraîne une augmentation exagérée de la glycémie : on parle de diabète.",
      "keyRule": "En dessous de la normale : glucagon des cellules alpha, libération du glucose ; au-dessus : insuline des cellules bêta, stockage du glucose ; sans insuline : diabète.",
      "formulas": [],
      "workedExample": {
        "title": "L'ingestion de 50 grammes de glucose (situation d'évaluation)",
        "statement": "Un homme à jeun absorbe 50 grammes de glucose ; sa glycémie monte de 0,95 à 1,55 gramme par litre en 30 minutes, puis redescend vers 0,95 à 90 minutes et se stabilise autour de 0,90. Déduis le comportement du pancréas.",
        "methodSteps": [
          "L'absorption du glucose provoque une hyperglycémie passagère, avec un pic à 30 minutes.",
          "Le pancréas réagit en produisant de l'insuline, qui stimule le stockage du glucose dans le foie, les muscles et les tissus adipeux.",
          "La glycémie revient ainsi à sa valeur normale, autour de 1 gramme par litre."
        ],
        "conclusion": "Exploitation des résultats de la situation d'évaluation, exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La glycémie normale",
          "stepTheme": "La glycémie normale",
          "stepBadge": "La glycémie normale",
          "paragraphText": "La glycémie est le taux de glucose dans le sang.\nLa leçon donne sa valeur normale pour un Homme : 1 gramme par litre.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q1",
            "type": "mcq",
            "prompt": "La glycémie normale chez l'Homme est de :",
            "options": [
              "0,1 gramme par litre",
              "1 gramme par litre",
              "3,8 grammes par litre en permanence",
              "10 grammes par litre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le glucagon, hormone hyperglycémiante",
          "stepTheme": "Le glucagon, hormone hyperglycémiante",
          "stepBadge": "Le glucagon, hormone hyperglycémiante",
          "paragraphText": "En hypoglycémie, les cellules alpha des îlots de Langerhans produisent le glucagon.\nLe glucagon stimule la libération du glucose par le foie, les muscles et les tissus adipeux : c'est une hormone hyperglycémiante.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q2",
            "type": "mcq",
            "prompt": "Le glucagon est produit par :",
            "options": [
              "Les cellules bêta, et il fait baisser la glycémie",
              "Le foie uniquement",
              "Les tissus adipeux",
              "Les cellules alpha des îlots de Langerhans, et il stimule la libération du glucose"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Interprétation de la partie II ; activité : le pancréas est hyperglycémiant grâce au glucagon, vrai."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'insuline, hormone hypoglycémiante",
          "stepTheme": "L'insuline, hormone hypoglycémiante",
          "stepBadge": "L'insuline, hormone hypoglycémiante",
          "paragraphText": "En hyperglycémie, les cellules bêta des îlots de Langerhans produisent l'insuline.\nL'insuline stimule le stockage du glucose dans le foie, les muscles et les tissus adipeux : c'est une hormone hypoglycémiante.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q3",
            "type": "mcq",
            "prompt": "L'insuline stimule :",
            "options": [
              "La libération du glucose par le foie",
              "La destruction du pancréas",
              "Le stockage du glucose dans le foie, les muscles et les tissus adipeux",
              "Uniquement la digestion des lipides"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la partie II ; activité : le pancréas est hypoglycémiant grâce à l'insuline, vrai."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Ne pas intervertir alpha-insuline et bêta-glucagon",
          "stepTheme": "Ne pas intervertir alpha-insuline et bêta-glucagon",
          "stepBadge": "Ne pas intervertir alpha-insuline et bêta-glucagon",
          "paragraphText": "Piège de l'activité d'application : affirmer que les cellules alpha produisent l'insuline est faux.\nLes cellules alpha produisent le glucagon et les cellules bêta produisent l'insuline.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q4",
            "type": "mcq",
            "prompt": "Les cellules alpha des îlots de Langerhans produisent :",
            "options": [
              "Le glucagon",
              "L'insuline",
              "Le glycogène",
              "Aucune hormone"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Corrigé de l'activité de la partie II : dernière affirmation fausse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le diabète, absence d'insuline",
          "stepTheme": "Le diabète, absence d'insuline",
          "stepBadge": "Le diabète, absence d'insuline",
          "paragraphText": "En l'absence d'insuline, le glucose ne peut être stocké.\nIl en résulte une augmentation exagérée de la glycémie : on parle de diabète.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q5",
            "type": "mcq",
            "prompt": "En l'absence d'insuline, il se produit :",
            "options": [
              "Un stockage excessif du glucose",
              "Une hypoglycémie permanente",
              "La disparition du glucose sanguin",
              "Une augmentation exagérée de la glycémie : le diabète"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Interprétation de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La substance S de l'exercice 2 est l'insuline",
          "stepTheme": "La substance S de l'exercice 2 est l'insuline",
          "stepBadge": "La substance S de l'exercice 2 est l'insuline",
          "paragraphText": "Dans l'exercice 2, on injecte à un chien normal une substance S extraite du tissu pancréatique : la glycémie baisse de 0,9 à 0,6 gramme par litre, puis revient à la normale.\nLe corrigé identifie la substance S : c'est l'insuline, l'hormone hypoglycémiante du pancréas.",
          "exercise": {
            "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q6",
            "type": "mcq",
            "prompt": "La substance S, qui fait baisser la glycémie du chien, est :",
            "options": [
              "Le glucagon",
              "L'insuline",
              "Le glycogène",
              "Une enzyme digestive uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Corrigé de l'exercice 2 de consolidation, question 3."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q1",
          "type": "mcq",
          "prompt": "La glycémie normale chez l'Homme est de :",
          "options": [
            "0,1 gramme par litre",
            "1 gramme par litre",
            "3,8 grammes par litre en permanence",
            "10 grammes par litre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q2",
          "type": "mcq",
          "prompt": "Le glucagon est produit par :",
          "options": [
            "Les cellules bêta, et il fait baisser la glycémie",
            "Le foie uniquement",
            "Les tissus adipeux",
            "Les cellules alpha des îlots de Langerhans, et il stimule la libération du glucose"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Interprétation de la partie II ; activité : le pancréas est hyperglycémiant grâce au glucagon, vrai."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q3",
          "type": "mcq",
          "prompt": "L'insuline stimule :",
          "options": [
            "La libération du glucose par le foie",
            "La destruction du pancréas",
            "Le stockage du glucose dans le foie, les muscles et les tissus adipeux",
            "Uniquement la digestion des lipides"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la partie II ; activité : le pancréas est hypoglycémiant grâce à l'insuline, vrai."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q4",
          "type": "mcq",
          "prompt": "Les cellules alpha des îlots de Langerhans produisent :",
          "options": [
            "Le glucagon",
            "L'insuline",
            "Le glycogène",
            "Aucune hormone"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Corrigé de l'activité de la partie II : dernière affirmation fausse."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q5",
          "type": "mcq",
          "prompt": "En l'absence d'insuline, il se produit :",
          "options": [
            "Un stockage excessif du glucose",
            "Une hypoglycémie permanente",
            "La disparition du glucose sanguin",
            "Une augmentation exagérée de la glycémie : le diabète"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Interprétation de la partie II."
        },
        {
          "id": "premiere_a1_svt_l09_mise_en_reserve_nutriments_p04_q6",
          "type": "mcq",
          "prompt": "La substance S, qui fait baisser la glycémie du chien, est :",
          "options": [
            "Le glucagon",
            "L'insuline",
            "Le glycogène",
            "Une enzyme digestive uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Corrigé de l'exercice 2 de consolidation, question 3."
        }
      ]
    }
  ]
};
