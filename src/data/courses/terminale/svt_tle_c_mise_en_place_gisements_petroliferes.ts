import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 9 : La mise en place des gisements pétrolifères » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2120
export const SVT_TLE_C_L09_MISE_EN_PLACE_GISEMENTS_PETROLIFERES: CurriculumChapter = {
  "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes",
  "subjectId": "svt",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 9,
  "title": "Leçon 9 : La mise en place des gisements pétrolifères",
  "summary": "On localise les gisements pétrolifères ivoiriens dans le bassin sédimentaire côtier, puis on explique leur formation en cinq étapes, du dépôt de la matière organique au piégeage des hydrocarbures.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2120",
  "points": [
    {
      "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01",
      "order": 1,
      "title": "La localisation des gisements dans le bassin sédimentaire côtier",
      "summary": "Situer les gisements pétrolifères ivoiriens : bassin sédimentaire, au large de Grand-Bassam et de Jacqueville.",
      "conceptExplanation": "La carte des gisements pétrolifères de la Côte d'Ivoire présente des gisements au large de Grand-Bassam et de Jacqueville.\nLes principaux gisements se trouvent dans le bassin côtier formé de roches sédimentaires. Ce bassin sédimentaire se subdivise en deux parties : le bassin sédimentaire terrestre, qui part de Sassandra à la frontière ivoiro-ghanéenne, et le bassin sédimentaire marin, situé sur le plateau continental, d'une largeur de 30 km, dans lequel se trouvent en grande partie les gisements pétrolifères.\nGrand-Bassam est la localité où l'on trouve exclusivement le gaz. Le pétrole et le gaz se trouvent dans des roches sédimentaires telles que le sable, le grès et l'argile : ces roches sont dites roches encaissantes.",
      "keyRule": "Les gisements sont dans le bassin sédimentaire côtier, surtout marin, au large de Jacqueville et de Grand-Bassam, cette dernière donnant exclusivement du gaz.",
      "formulas": [],
      "workedExample": {
        "title": "Lire la carte des gisements pétrolifères de la Côte d'Ivoire",
        "statement": "Sur la carte de la Côte d'Ivoire observée dans la leçon, où se situent les gisements pétrolifères et dans quel ensemble géologique ?",
        "methodSteps": [
          "La carte présente des gisements pétrolifères au large de Grand-Bassam et de Jacqueville.",
          "Ces gisements se trouvent dans le bassin côtier formé de roches sédimentaires.",
          "La plus grande partie est dans le bassin sédimentaire marin, sur le plateau continental."
        ],
        "conclusion": "Les gisements pétrolifères ivoiriens sont localisés dans le bassin sédimentaire, au large de Jacqueville et de Grand-Bassam, au sud du pays."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le bassin sédimentaire côtier",
          "stepTheme": "Le bassin sédimentaire côtier",
          "stepBadge": "Le bassin sédimentaire côtier",
          "paragraphText": "• Bassin sédimentaire : l'ensemble formé de roches sédimentaires où se trouvent les principaux gisements pétrolifères de la Côte d'Ivoire.\nIl s'agit du bassin côtier, au sud du pays.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q1",
            "type": "mcq",
            "prompt": "Les principaux gisements pétrolifères ivoiriens se trouvent :",
            "options": [
              "Dans les roches du socle au nord du pays",
              "Dans le bassin côtier formé de roches sédimentaires",
              "Uniquement sous les villes",
              "Dans les cours d'eau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse de la carte situe les principaux gisements dans le bassin côtier formé de roches sédimentaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les deux parties du bassin sédimentaire",
          "stepTheme": "Les deux parties du bassin sédimentaire",
          "stepBadge": "Les deux parties du bassin sédimentaire",
          "paragraphText": "Le bassin sédimentaire se subdivise en un bassin terrestre, qui part de Sassandra à la frontière ivoiro-ghanéenne.\nIl comprend aussi un bassin marin, situé sur le plateau continental, où se trouvent en grande partie les gisements.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q2",
            "type": "mcq",
            "prompt": "Le bassin sédimentaire terrestre s'étend :",
            "options": [
              "De Grand-Bassam à Jacqueville uniquement",
              "De Sassandra à la frontière ivoiro-ghanéenne",
              "Sur le plateau continental",
              "Autour d'Abidjan seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon précise que le bassin terrestre part de Sassandra et va jusqu'à la frontière ivoiro-ghanéenne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le plateau continental large de 30 km",
          "stepTheme": "Le plateau continental large de 30 km",
          "stepBadge": "Le plateau continental large de 30 km",
          "paragraphText": "Le bassin sédimentaire marin est situé sur le plateau continental.\nLa leçon en donne la largeur : 30 km, et c'est là que se trouvent en grande partie les gisements pétrolifères.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la largeur du plateau continental indiquée dans la leçon ?",
            "options": [
              "3 km",
              "30 km",
              "300 km",
              "Elle n'est pas indiquée"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte précise que le bassin marin est situé sur le plateau continental, d'une largeur de 30 km."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les roches encaissantes",
          "stepTheme": "Les roches encaissantes",
          "stepBadge": "Les roches encaissantes",
          "paragraphText": "• Roches encaissantes : les roches sédimentaires dans lesquelles se trouvent le pétrole et le gaz.\nLa leçon cite le sable, le grès et l'argile comme exemples de telles roches.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q4",
            "type": "mcq",
            "prompt": "Les roches encaissantes citées dans la leçon sont :",
            "options": [
              "Le granite et le basalte",
              "Le sable, le grès et l'argile",
              "Le calcaire uniquement",
              "Le kérogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pétrole et le gaz se trouvent dans des roches sédimentaires telles que le sable, le grès et l'argile, dites roches encaissantes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Grand-Bassam ne donne que du gaz",
          "stepTheme": "Grand-Bassam ne donne que du gaz",
          "stepBadge": "Grand-Bassam ne donne que du gaz",
          "paragraphText": "Piège : attribuer du pétrole à toutes les localités citées.\nGrand-Bassam est la localité où l'on trouve exclusivement le gaz, tandis que pétrole et gaz sont associés au large de Jacqueville notamment.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q5",
            "type": "mcq",
            "prompt": "Grand-Bassam est la localité où l'on trouve :",
            "options": [
              "Exclusivement du pétrole",
              "Exclusivement le gaz",
              "Ni pétrole ni gaz",
              "Uniquement des sables bitumineux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon souligne que Grand-Bassam est la localité où l'on trouve exclusivement le gaz."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La sortie d'études sur l'axe Abidjan-Dabou",
          "stepTheme": "La sortie d'études sur l'axe Abidjan-Dabou",
          "stepBadge": "La sortie d'études sur l'axe Abidjan-Dabou",
          "paragraphText": "Dans la situation d'apprentissage, des élèves en sortie d'études sur l'axe Abidjan-Dabou voient des camions convoyant de gros tuyaux vers Jacqueville.\nLe chauffeur leur apprend que ces tuyaux sont destinés à l'exploitation des gisements de pétrole au large des côtes ivoiriennes.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q6",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, les tuyaux convoyés vers Jacqueville sont destinés à :",
            "options": [
              "L'irrigation des champs",
              "L'exploitation des gisements de pétrole au large des côtes ivoiriennes",
              "La construction d'un pont",
              "L'adduction d'eau potable"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la réponse du chauffeur interrogé par les élèves, point de départ de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q1",
          "type": "mcq",
          "prompt": "Les principaux gisements pétrolifères ivoiriens se trouvent :",
          "options": [
            "Dans les roches du socle au nord du pays",
            "Dans le bassin côtier formé de roches sédimentaires",
            "Uniquement sous les villes",
            "Dans les cours d'eau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse de la carte situe les principaux gisements dans le bassin côtier formé de roches sédimentaires."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q2",
          "type": "mcq",
          "prompt": "Le bassin sédimentaire terrestre s'étend :",
          "options": [
            "De Grand-Bassam à Jacqueville uniquement",
            "De Sassandra à la frontière ivoiro-ghanéenne",
            "Sur le plateau continental",
            "Autour d'Abidjan seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon précise que le bassin terrestre part de Sassandra et va jusqu'à la frontière ivoiro-ghanéenne."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la largeur du plateau continental indiquée dans la leçon ?",
          "options": [
            "3 km",
            "30 km",
            "300 km",
            "Elle n'est pas indiquée"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte précise que le bassin marin est situé sur le plateau continental, d'une largeur de 30 km."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q4",
          "type": "mcq",
          "prompt": "Les roches encaissantes citées dans la leçon sont :",
          "options": [
            "Le granite et le basalte",
            "Le sable, le grès et l'argile",
            "Le calcaire uniquement",
            "Le kérogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pétrole et le gaz se trouvent dans des roches sédimentaires telles que le sable, le grès et l'argile, dites roches encaissantes."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q5",
          "type": "mcq",
          "prompt": "Grand-Bassam est la localité où l'on trouve :",
          "options": [
            "Exclusivement du pétrole",
            "Exclusivement le gaz",
            "Ni pétrole ni gaz",
            "Uniquement des sables bitumineux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon souligne que Grand-Bassam est la localité où l'on trouve exclusivement le gaz."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p01_q6",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, les tuyaux convoyés vers Jacqueville sont destinés à :",
          "options": [
            "L'irrigation des champs",
            "L'exploitation des gisements de pétrole au large des côtes ivoiriennes",
            "La construction d'un pont",
            "L'adduction d'eau potable"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la réponse du chauffeur interrogé par les élèves, point de départ de la leçon."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02",
      "order": 2,
      "title": "Dépôt de la matière organique et formation du kérogène",
      "summary": "Expliquer les deux premières étapes : dépôt des débris organiques puis transformation en kérogène dans la roche mère.",
      "conceptExplanation": "La formation des hydrocarbures se fait à partir de débris organiques d'origines animales et végétales, déposés dans des bassins sédimentaires lacustres ou marins.\nPremière étape : les restes d'êtres vivants, d'origines continentales et maritimes, se déposent avec les sédiments dans le bassin.\nDeuxième étape, la formation du kérogène : sous l'action des bactéries anaérobies, qui vivent en absence d'oxygène, et sous l'effet de l'augmentation de la température et de la pression, ces matières organiques se transforment pour donner une boue noirâtre appelée kérogène.\nCette substance est logée dans une roche appelée roche mère.",
      "keyRule": "Débris organiques déposés dans un bassin, puis bactéries anaérobies, chaleur et pression transforment la matière en kérogène, logé dans la roche mère.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner le début de la formation d'un gisement (exercice 2)",
        "statement": "L'exercice 2 donne dans le désordre les étapes de la mise en place d'un gisement, dont le dépôt de matières organiques et la maturation. Place ces deux étapes dans l'ordre du processus complet.",
        "methodSteps": [
          "On commence par le dépôt ou l'accumulation de matières organiques en milieux réducteurs, dans les bassins sédimentaires de subsidence.",
          "Vient ensuite la maturation, c'est-à-dire la formation du kérogène.",
          "La formation et la migration des hydrocarbures, puis leur accumulation dans les pièges, terminent le processus."
        ],
        "conclusion": "L'ordre chronologique est : dépôt de la matière organique, maturation (kérogène), formation et migration, accumulation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'origine organique du pétrole",
          "stepTheme": "L'origine organique du pétrole",
          "stepBadge": "L'origine organique du pétrole",
          "paragraphText": "• Matière organique à l'origine du pétrole : les débris d'êtres vivants, d'origines animales et végétales.\nCes débris se déposent dans des bassins sédimentaires lacustres ou marins.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q1",
            "type": "mcq",
            "prompt": "Les hydrocarbures se forment à partir :",
            "options": [
              "De roches volcaniques",
              "De débris organiques d'origines animales et végétales",
              "De sels minéraux uniquement",
              "De l'eau de mer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'analyse de la leçon fait partir la formation des hydrocarbures de débris organiques animaux et végétaux déposés dans des bassins sédimentaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le dépôt avec les sédiments",
          "stepTheme": "Le dépôt avec les sédiments",
          "stepBadge": "Le dépôt avec les sédiments",
          "paragraphText": "Les restes d'êtres vivants d'origines continentales et maritimes se déposent avec les sédiments dans le bassin.\nL'exercice 2 précise qu'il s'agit de milieux réducteurs, dans des bassins sédimentaires de subsidence.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q2",
            "type": "mcq",
            "prompt": "Où les restes d'êtres vivants se déposent-ils avec les sédiments ?",
            "options": [
              "Sur les plateaux continentaux émergés uniquement",
              "Dans le bassin sédimentaire",
              "Dans les pièges à pétrole déjà formés",
              "À la surface des roches réservoirs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La première étape du processus est le dépôt de matières organiques dans le bassin sédimentaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le kérogène",
          "stepTheme": "Le kérogène",
          "stepBadge": "Le kérogène",
          "paragraphText": "• Kérogène : la boue noirâtre obtenue par transformation des matières organiques enfouies.\nSa formation constitue l'étape de maturation dans l'exercice de classement de la leçon.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q3",
            "type": "mcq",
            "prompt": "Le kérogène est :",
            "options": [
              "Un hydrocarbure liquide prêt à exploiter",
              "Une boue noirâtre issue de la transformation des matières organiques",
              "Une roche imperméable de couverture",
              "Un gaz léger"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit le kérogène comme la boue noirâtre formée à partir des matières organiques transformées."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle des bactéries anaérobies",
          "stepTheme": "Le rôle des bactéries anaérobies",
          "stepBadge": "Le rôle des bactéries anaérobies",
          "paragraphText": "La transformation en kérogène se fait sous l'action des bactéries anaérobies, c'est-à-dire des bactéries vivant en absence d'oxygène.\nElle se fait aussi sous l'effet de l'augmentation de la température et de la pression lors de l'enfouissement.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q4",
            "type": "mcq",
            "prompt": "Les bactéries anaérobies sont des bactéries qui vivent :",
            "options": [
              "En présence abondante d'oxygène",
              "En absence d'oxygène",
              "Uniquement à la surface de l'eau",
              "Dans les roches réservoirs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La parenthèse de la leçon définit les bactéries anaérobies comme vivant en absence d'oxygène."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le kérogène n'est pas encore du pétrole",
          "stepTheme": "Le kérogène n'est pas encore du pétrole",
          "stepBadge": "Le kérogène n'est pas encore du pétrole",
          "paragraphText": "Piège : confondre kérogène et hydrocarbures.\nLe kérogène est une étape intermédiaire : les hydrocarbures (pétrole et gaz) ne se formeront qu'à l'étape suivante, par pyrolyse, lors d'un enfouissement plus profond.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q5",
            "type": "mcq",
            "prompt": "Le kérogène formé dans la roche mère est :",
            "options": [
              "Déjà du pétrole liquide exploitable",
              "Une étape intermédiaire avant la formation des hydrocarbures",
              "Le produit final du gisement",
              "Uniquement du gaz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formation des hydrocarbures est une étape distincte et postérieure à celle du kérogène dans le processus de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La roche mère",
          "stepTheme": "La roche mère",
          "stepBadge": "La roche mère",
          "paragraphText": "• Roche mère : la roche dans laquelle le kérogène est logé.\nDans l'exercice 1, la leçon précise que le pétrole se forme dans les argiles, roche mère imperméable et de faible porosité.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q6",
            "type": "mcq",
            "prompt": "La substance appelée kérogène est logée dans une roche appelée :",
            "options": [
              "Roche réservoir",
              "Roche de couverture",
              "Roche mère",
              "Roche magasin"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon indique que le kérogène est logé dans une roche appelée roche mère."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q1",
          "type": "mcq",
          "prompt": "Les hydrocarbures se forment à partir :",
          "options": [
            "De roches volcaniques",
            "De débris organiques d'origines animales et végétales",
            "De sels minéraux uniquement",
            "De l'eau de mer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'analyse de la leçon fait partir la formation des hydrocarbures de débris organiques animaux et végétaux déposés dans des bassins sédimentaires."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q2",
          "type": "mcq",
          "prompt": "Où les restes d'êtres vivants se déposent-ils avec les sédiments ?",
          "options": [
            "Sur les plateaux continentaux émergés uniquement",
            "Dans le bassin sédimentaire",
            "Dans les pièges à pétrole déjà formés",
            "À la surface des roches réservoirs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La première étape du processus est le dépôt de matières organiques dans le bassin sédimentaire."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q3",
          "type": "mcq",
          "prompt": "Le kérogène est :",
          "options": [
            "Un hydrocarbure liquide prêt à exploiter",
            "Une boue noirâtre issue de la transformation des matières organiques",
            "Une roche imperméable de couverture",
            "Un gaz léger"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit le kérogène comme la boue noirâtre formée à partir des matières organiques transformées."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q4",
          "type": "mcq",
          "prompt": "Les bactéries anaérobies sont des bactéries qui vivent :",
          "options": [
            "En présence abondante d'oxygène",
            "En absence d'oxygène",
            "Uniquement à la surface de l'eau",
            "Dans les roches réservoirs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La parenthèse de la leçon définit les bactéries anaérobies comme vivant en absence d'oxygène."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q5",
          "type": "mcq",
          "prompt": "Le kérogène formé dans la roche mère est :",
          "options": [
            "Déjà du pétrole liquide exploitable",
            "Une étape intermédiaire avant la formation des hydrocarbures",
            "Le produit final du gisement",
            "Uniquement du gaz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formation des hydrocarbures est une étape distincte et postérieure à celle du kérogène dans le processus de la leçon."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p02_q6",
          "type": "mcq",
          "prompt": "La substance appelée kérogène est logée dans une roche appelée :",
          "options": [
            "Roche réservoir",
            "Roche de couverture",
            "Roche mère",
            "Roche magasin"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon indique que le kérogène est logé dans une roche appelée roche mère."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03",
      "order": 3,
      "title": "La formation des hydrocarbures par pyrolyse",
      "summary": "Expliquer la transformation du kérogène en pétrole et gaz sous très fortes températures et pressions.",
      "conceptExplanation": "Troisième étape du processus : la formation des hydrocarbures (pétrole et gaz).\nEn s'enfonçant, et à des températures et pressions très élevées, le kérogène perd de l'azote et de l'oxygène ; il libère des carbones et de l'hydrogène : c'est la pyrolyse, ou craquage thermique.\nIl ne reste alors que des carbones et des hydrogènes, qui constituent les hydrocarbures : le pétrole et le gaz.\nLa leçon rappelle que la formation des gisements de pétrole est un processus naturel, complexe, qui se fait sur plusieurs millions d'années.",
      "keyRule": "Enfouissement profond, températures et pressions très élevées : le kérogène perd azote et oxygène par pyrolyse et donne les hydrocarbures.",
      "formulas": [],
      "workedExample": {
        "title": "Du kérogène aux hydrocarbures",
        "statement": "Un échantillon de kérogène est enfoui de plus en plus profondément. Décris ce qui lui arrive jusqu'à la formation du pétrole et du gaz.",
        "methodSteps": [
          "L'enfouissement augmente fortement la température et la pression qui s'exercent sur le kérogène.",
          "Le kérogène perd de l'azote et de l'oxygène et libère des carbones et de l'hydrogène : c'est la pyrolyse, ou craquage thermique.",
          "Il ne reste que des carbones et des hydrogènes, qui constituent les hydrocarbures : pétrole et gaz."
        ],
        "conclusion": "La pyrolyse transforme le kérogène en hydrocarbures, pétrole et gaz."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les hydrocarbures",
          "stepTheme": "Les hydrocarbures",
          "stepBadge": "Les hydrocarbures",
          "paragraphText": "• Hydrocarbures : les composés formés uniquement de carbones et d'hydrogènes.\nDans la leçon, ce sont le pétrole et le gaz, produits de la transformation du kérogène.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q1",
            "type": "mcq",
            "prompt": "Les hydrocarbures sont constitués uniquement :",
            "options": [
              "De carbones et d'oxygènes",
              "De carbones et d'hydrogènes",
              "D'azote et d'hydrogène",
              "De carbones et d'azote"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après la pyrolyse, il ne reste que des carbones et des hydrogènes, qui constituent les hydrocarbures."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La pyrolyse ou craquage thermique",
          "stepTheme": "La pyrolyse ou craquage thermique",
          "stepBadge": "La pyrolyse ou craquage thermique",
          "paragraphText": "• Pyrolyse (craquage thermique) : la transformation du kérogène qui perd de l'azote et de l'oxygène en s'enfonçant.\nElle libère les carbones et l'hydrogène qui formeront les hydrocarbures.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q2",
            "type": "mcq",
            "prompt": "La pyrolyse est aussi appelée :",
            "options": [
              "Migration primaire",
              "Craquage thermique",
              "Piégeage",
              "Subsidence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne les deux noms de cette transformation : pyrolyse ou craquage thermique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les conditions de la formation des hydrocarbures",
          "stepTheme": "Les conditions de la formation des hydrocarbures",
          "stepBadge": "Les conditions de la formation des hydrocarbures",
          "paragraphText": "La transformation du kérogène exige un enfouissement de plus en plus profond.\nElle se produit à des températures et des pressions très élevées.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q3",
            "type": "mcq",
            "prompt": "La formation des hydrocarbures à partir du kérogène exige :",
            "options": [
              "Des températures et des pressions très élevées, lors de l'enfouissement",
              "Une exposition à l'air libre",
              "La présence de bactéries aérobies",
              "Un refroidissement rapide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte précise qu'en s'enfonçant, à des températures et pressions très élevées, le kérogène se transforme en hydrocarbures."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ce que perd le kérogène",
          "stepTheme": "Ce que perd le kérogène",
          "stepBadge": "Ce que perd le kérogène",
          "paragraphText": "Lors de la pyrolyse, le kérogène perd deux éléments : l'azote et l'oxygène.\nIl libère en revanche des carbones et de l'hydrogène, seuls constituants des hydrocarbures obtenus.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q4",
            "type": "mcq",
            "prompt": "Pendant la pyrolyse, le kérogène perd :",
            "options": [
              "Son carbone et son hydrogène",
              "De l'azote et de l'oxygène",
              "Uniquement de l'eau",
              "Tous ses éléments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon indique que le kérogène perd de l'azote et de l'oxygène et libère carbones et hydrogène."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un processus de plusieurs millions d'années",
          "stepTheme": "Un processus de plusieurs millions d'années",
          "stepBadge": "Un processus de plusieurs millions d'années",
          "paragraphText": "Piège : imaginer une formation rapide, à l'échelle humaine.\nLa formation des gisements de pétrole est un processus naturel et complexe qui se fait sur plusieurs millions d'années, rappelle l'interprétation de la leçon.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q5",
            "type": "mcq",
            "prompt": "Sur quelle durée la formation des gisements de pétrole se fait-elle ?",
            "options": [
              "Quelques années",
              "Quelques siècles",
              "Plusieurs millions d'années",
              "Quelques jours"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'interprétation et la conclusion générale insistent sur un processus qui se déroule sur plusieurs millions d'années."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les trois grandes étapes du document",
          "stepTheme": "Les trois grandes étapes du document",
          "stepBadge": "Les trois grandes étapes du document",
          "paragraphText": "Le document observé dans la leçon résume la formation d'un gisement en trois résultats : dépôts des organismes animaux et végétaux, enfouissement et transformation de la matière organique, remontée et piégeage du pétrole et du gaz formés.\nLa formation des hydrocarbures par pyrolyse appartient à la deuxième de ces étapes.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q6",
            "type": "mcq",
            "prompt": "Selon les résultats du document, la deuxième grande étape de la formation d'un gisement est :",
            "options": [
              "Le dépôt des organismes",
              "L'enfouissement et la transformation de la matière organique",
              "La remontée et le piégeage du pétrole et du gaz",
              "L'exploitation par forage"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats du document listent dans l'ordre : dépôts, enfouissement et transformation, remontée et piégeage."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q1",
          "type": "mcq",
          "prompt": "Les hydrocarbures sont constitués uniquement :",
          "options": [
            "De carbones et d'oxygènes",
            "De carbones et d'hydrogènes",
            "D'azote et d'hydrogène",
            "De carbones et d'azote"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après la pyrolyse, il ne reste que des carbones et des hydrogènes, qui constituent les hydrocarbures."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q2",
          "type": "mcq",
          "prompt": "La pyrolyse est aussi appelée :",
          "options": [
            "Migration primaire",
            "Craquage thermique",
            "Piégeage",
            "Subsidence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne les deux noms de cette transformation : pyrolyse ou craquage thermique."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q3",
          "type": "mcq",
          "prompt": "La formation des hydrocarbures à partir du kérogène exige :",
          "options": [
            "Des températures et des pressions très élevées, lors de l'enfouissement",
            "Une exposition à l'air libre",
            "La présence de bactéries aérobies",
            "Un refroidissement rapide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte précise qu'en s'enfonçant, à des températures et pressions très élevées, le kérogène se transforme en hydrocarbures."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q4",
          "type": "mcq",
          "prompt": "Pendant la pyrolyse, le kérogène perd :",
          "options": [
            "Son carbone et son hydrogène",
            "De l'azote et de l'oxygène",
            "Uniquement de l'eau",
            "Tous ses éléments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon indique que le kérogène perd de l'azote et de l'oxygène et libère carbones et hydrogène."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q5",
          "type": "mcq",
          "prompt": "Sur quelle durée la formation des gisements de pétrole se fait-elle ?",
          "options": [
            "Quelques années",
            "Quelques siècles",
            "Plusieurs millions d'années",
            "Quelques jours"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'interprétation et la conclusion générale insistent sur un processus qui se déroule sur plusieurs millions d'années."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p03_q6",
          "type": "mcq",
          "prompt": "Selon les résultats du document, la deuxième grande étape de la formation d'un gisement est :",
          "options": [
            "Le dépôt des organismes",
            "L'enfouissement et la transformation de la matière organique",
            "La remontée et le piégeage du pétrole et du gaz",
            "L'exploitation par forage"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats du document listent dans l'ordre : dépôts, enfouissement et transformation, remontée et piégeage."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04",
      "order": 4,
      "title": "Les migrations des hydrocarbures",
      "summary": "Distinguer migration primaire et migration secondaire, et expliquer le classement par densité dans le piège.",
      "conceptExplanation": "Quatrième étape : la migration des hydrocarbures. Sous la pression, les hydrocarbures circulent de la roche mère vers les roches poreuses voisines : c'est la migration primaire. La roche poreuse est aussi appelée roche réservoir, ou roche magasin.\nLes hydrocarbures circulent ensuite au sein des roches poreuses : c'est la migration secondaire.\nLa migration des hydrocarbures vers la surface s'accompagne de celle de l'eau, et elle se fait dans l'ordre de densité décroissante : l'eau, plus dense, se dépose d'abord, ensuite le pétrole (l'huile), et enfin le gaz.\nL'exercice 1 précise que le pétrole formé dans les argiles (roche mère) sort sous l'effet de la pression, c'est-à-dire le poids des sédiments, pour aller vers les roches poreuses comme les grès et les sables.",
      "keyRule": "Primaire : de la roche mère vers la roche réservoir ; secondaire : au sein des roches poreuses ; classement final par densité : eau, pétrole, gaz.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte des migrations (exercice 1)",
        "statement": "Complète le texte de l'exercice 1 : le pétrole formé dans la roche mère sort sous l'effet de la pression pour aller vers les roches poreuses ; on parle de migration primaire, puis de migration secondaire lorsque le pétrole circule dans la roche poreuse, appelée roche réservoir.",
        "methodSteps": [
          "La pression, due au poids des sédiments, expulse le pétrole de la roche mère vers les roches poreuses (grès, sables) : c'est la migration primaire.",
          "Si la roche poreuse est perméable, le pétrole y circule : c'est la migration secondaire.",
          "La roche poreuse qui reçoit le pétrole est appelée roche réservoir."
        ],
        "conclusion": "Migration primaire puis secondaire conduisent le pétrole de la roche mère à la roche réservoir."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La migration primaire",
          "stepTheme": "La migration primaire",
          "stepBadge": "La migration primaire",
          "paragraphText": "• Migration primaire : la circulation des hydrocarbures de la roche mère vers les roches poreuses voisines, sous la pression.\nL'exercice 1 précise que cette pression est celle du poids des sédiments.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q1",
            "type": "mcq",
            "prompt": "La migration primaire désigne le passage des hydrocarbures :",
            "options": [
              "De la roche réservoir vers la surface directement",
              "De la roche mère vers les roches poreuses voisines",
              "Du piège vers le puits de forage",
              "De l'eau vers le gaz"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition de la leçon fait passer les hydrocarbures de la roche mère vers les roches poreuses voisines : migration primaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La migration secondaire",
          "stepTheme": "La migration secondaire",
          "stepBadge": "La migration secondaire",
          "paragraphText": "• Migration secondaire : la circulation des hydrocarbures au sein même des roches poreuses.\nElle fait suite à la migration primaire qui a sorti les hydrocarbures de la roche mère.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q2",
            "type": "mcq",
            "prompt": "La migration secondaire correspond à la circulation des hydrocarbures :",
            "options": [
              "Dans la roche mère",
              "Au sein des roches poreuses",
              "Dans les tuyaux d'exploitation",
              "Dans les bactéries anaérobies"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après la sortie de la roche mère, les hydrocarbures circulent au sein des roches poreuses : c'est la migration secondaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La roche réservoir ou roche magasin",
          "stepTheme": "La roche réservoir ou roche magasin",
          "stepBadge": "La roche réservoir ou roche magasin",
          "paragraphText": "• Roche réservoir (ou roche magasin) : la roche poreuse qui reçoit et stocke les hydrocarbures après leur migration.\nLes exemples de roches poreuses cités sont les grès et les sables.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q3",
            "type": "mcq",
            "prompt": "La roche poreuse qui reçoit les hydrocarbures est aussi appelée :",
            "options": [
              "Roche mère",
              "Roche réservoir ou roche magasin",
              "Roche de couverture",
              "Roche encaissante uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne les deux synonymes : roche réservoir ou roche magasin."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le classement par densité : eau, pétrole, gaz",
          "stepTheme": "Le classement par densité : eau, pétrole, gaz",
          "stepBadge": "Le classement par densité : eau, pétrole, gaz",
          "paragraphText": "La migration vers la surface s'accompagne de celle de l'eau et se fait dans l'ordre de densité décroissante.\nL'eau, plus dense, se dépose d'abord, ensuite le pétrole, et enfin le gaz, le plus léger, au-dessus.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q4",
            "type": "mcq",
            "prompt": "Une fois piégés, les trois fluides se disposent de bas en haut dans l'ordre :",
            "options": [
              "Gaz, pétrole, eau",
              "Pétrole, gaz, eau",
              "Eau, pétrole, gaz",
              "Gaz, eau, pétrole"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exercice 1 conclut : l'eau, plus dense, en dessous ; le pétrole entre l'eau et le gaz ; le gaz, plus léger, au-dessus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Sans obstacle, le pétrole s'échappe",
          "stepTheme": "Sans obstacle, le pétrole s'échappe",
          "stepBadge": "Sans obstacle, le pétrole s'échappe",
          "paragraphText": "Piège : croire que tout pétrole formé reste automatiquement en place.\nL'exercice 1 prévient : si aucune entrave n'est faite, le pétrole migre en surface (cas des sables bitumineux) ou dans la mer ; il faut une roche obstacle pour le retenir.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q5",
            "type": "mcq",
            "prompt": "Sans roche obstacle, selon l'exercice 1, le pétrole :",
            "options": [
              "Reste dans la roche mère",
              "Migre en surface ou dans la mer",
              "Se transforme en kérogène",
              "Devient du gaz uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte à compléter indique que sans entrave, le pétrole migre en surface (sables bitumineux) ou dans la mer."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "De la roche mère argileuse aux grès poreux",
          "stepTheme": "De la roche mère argileuse aux grès poreux",
          "stepBadge": "De la roche mère argileuse aux grès poreux",
          "paragraphText": "Exemple de l'exercice 1 : le pétrole formé dans les argiles, roche mère imperméable et de faible porosité, sort sous l'effet de la pression.\nIl va vers les roches poreuses comme les grès et les sables, où il circule.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice 1, la roche mère d'où sort le pétrole est constituée :",
            "options": [
              "De grès poreux",
              "D'argiles, imperméables et de faible porosité",
              "De sables bitumineux",
              "De calcaires fissurés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte à compléter décrit les argiles comme roche mère, imperméable et de faible porosité."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q1",
          "type": "mcq",
          "prompt": "La migration primaire désigne le passage des hydrocarbures :",
          "options": [
            "De la roche réservoir vers la surface directement",
            "De la roche mère vers les roches poreuses voisines",
            "Du piège vers le puits de forage",
            "De l'eau vers le gaz"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition de la leçon fait passer les hydrocarbures de la roche mère vers les roches poreuses voisines : migration primaire."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q2",
          "type": "mcq",
          "prompt": "La migration secondaire correspond à la circulation des hydrocarbures :",
          "options": [
            "Dans la roche mère",
            "Au sein des roches poreuses",
            "Dans les tuyaux d'exploitation",
            "Dans les bactéries anaérobies"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après la sortie de la roche mère, les hydrocarbures circulent au sein des roches poreuses : c'est la migration secondaire."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q3",
          "type": "mcq",
          "prompt": "La roche poreuse qui reçoit les hydrocarbures est aussi appelée :",
          "options": [
            "Roche mère",
            "Roche réservoir ou roche magasin",
            "Roche de couverture",
            "Roche encaissante uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne les deux synonymes : roche réservoir ou roche magasin."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q4",
          "type": "mcq",
          "prompt": "Une fois piégés, les trois fluides se disposent de bas en haut dans l'ordre :",
          "options": [
            "Gaz, pétrole, eau",
            "Pétrole, gaz, eau",
            "Eau, pétrole, gaz",
            "Gaz, eau, pétrole"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exercice 1 conclut : l'eau, plus dense, en dessous ; le pétrole entre l'eau et le gaz ; le gaz, plus léger, au-dessus."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q5",
          "type": "mcq",
          "prompt": "Sans roche obstacle, selon l'exercice 1, le pétrole :",
          "options": [
            "Reste dans la roche mère",
            "Migre en surface ou dans la mer",
            "Se transforme en kérogène",
            "Devient du gaz uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte à compléter indique que sans entrave, le pétrole migre en surface (sables bitumineux) ou dans la mer."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p04_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice 1, la roche mère d'où sort le pétrole est constituée :",
          "options": [
            "De grès poreux",
            "D'argiles, imperméables et de faible porosité",
            "De sables bitumineux",
            "De calcaires fissurés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte à compléter décrit les argiles comme roche mère, imperméable et de faible porosité."
        }
      ]
    },
    {
      "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05",
      "order": 5,
      "title": "Le piégeage et la notion de gisement pétrolifère",
      "summary": "Définir le piégeage, distinguer les types de pièges et donner la définition d'un gisement de pétrole.",
      "conceptExplanation": "Cinquième étape : l'accumulation des hydrocarbures dans les pièges. Les hydrocarbures qui circulent dans les roches poreuses sont piégés par des roches obstacles, ou roches de couverture imperméables : on parle de piégeage des hydrocarbures.\nIl existe différents types de pièges : le piège stratigraphique, dû à la stratigraphie ; le piège structural, dû aux déformations tectoniques (pli et faille) ; et les pièges mixtes, à la fois stratigraphiques et structuraux.\nUn gisement de pétrole est donc une formation géologique dans laquelle les hydrocarbures (gaz et pétrole) sont piégés et stockés en grande quantité, pour justifier une exploitation.\nLa roche obstacle de l'exercice 1 s'appelle roche-couverture, et le pétrole piégé est associé au gaz et à l'eau de formation.",
      "keyRule": "Une roche-couverture imperméable bloque les hydrocarbures : pièges stratigraphiques, structuraux ou mixtes forment les gisements exploitables.",
      "formulas": [],
      "workedExample": {
        "title": "Nommer le piège d'un document (exercice 3)",
        "statement": "L'exercice 3 montre l'image d'un gisement pétrolifère et demande de nommer le piège présenté, d'annoter le document et de préciser les produits extraits au niveau des puits. Quelle démarche suivre ?",
        "methodSteps": [
          "On identifie d'abord l'origine du piège : s'il vient des déformations tectoniques (pli, faille), il est structural ; s'il vient de la stratigraphie, il est stratigraphique.",
          "On annote ensuite les éléments du gisement : roche réservoir, roche de couverture, et les positions de l'eau, du pétrole et du gaz.",
          "On précise enfin les produits extraits selon la position des puits dans le classement par densité."
        ],
        "conclusion": "Nommer un piège suppose de reconnaître son origine, stratigraphique ou structurale, avant d'annoter le gisement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le piégeage des hydrocarbures",
          "stepTheme": "Le piégeage des hydrocarbures",
          "stepBadge": "Le piégeage des hydrocarbures",
          "paragraphText": "• Piégeage : l'arrêt des hydrocarbures en circulation par des roches obstacles imperméables.\nLa roche obstacle est appelée roche de couverture ; le pétrole s'emmagasine alors dans la roche réservoir.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q1",
            "type": "mcq",
            "prompt": "Le piégeage des hydrocarbures se produit quand :",
            "options": [
              "Les hydrocarbures retournent dans la roche mère",
              "Des roches de couverture imperméables bloquent les hydrocarbures en circulation",
              "Le kérogène se forme",
              "Les bactéries anaérobies disparaissent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit le piégeage par l'action des roches obstacles ou roches de couverture imperméables."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le piège stratigraphique",
          "stepTheme": "Le piège stratigraphique",
          "stepBadge": "Le piège stratigraphique",
          "paragraphText": "• Piège stratigraphique : un piège dû à la stratigraphie, c'est-à-dire à la disposition des couches de roches.\nLa leçon le présente dans un schéma distinct de celui du piège structural.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q2",
            "type": "mcq",
            "prompt": "Le piège stratigraphique est dû :",
            "options": [
              "Aux déformations tectoniques",
              "À la stratigraphie",
              "À la pyrolyse",
              "À la pression des sédiments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La liste des pièges de la leçon attribue le piège stratigraphique à la stratigraphie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le piège structural",
          "stepTheme": "Le piège structural",
          "stepBadge": "Le piège structural",
          "paragraphText": "• Piège structural : un piège dû aux déformations tectoniques.\nLa leçon cite deux déformations responsables : le pli et la faille.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q3",
            "type": "mcq",
            "prompt": "Le piège structural est dû aux déformations tectoniques telles que :",
            "options": [
              "La subsidence et le dépôt",
              "Le pli et la faille",
              "La pyrolyse et la migration",
              "La floculation et l'érosion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La parenthèse de la leçon précise les déformations tectoniques concernées : pli et faille."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les pièges mixtes",
          "stepTheme": "Les pièges mixtes",
          "stepBadge": "Les pièges mixtes",
          "paragraphText": "Il existe aussi des pièges mixtes.\nUn piège mixte combine les deux origines : piège stratigraphique et piège structural à la fois.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q4",
            "type": "mcq",
            "prompt": "Un piège mixte combine :",
            "options": [
              "Deux roches mères",
              "Un piège stratigraphique et un piège structural",
              "Du pétrole et du gaz",
              "Une migration primaire et une migration secondaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon définit les pièges mixtes comme étant à la fois stratigraphiques et structuraux."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La définition exacte d'un gisement",
          "stepTheme": "La définition exacte d'un gisement",
          "stepBadge": "La définition exacte d'un gisement",
          "paragraphText": "Piège : appeler gisement toute trace de pétrole.\nSelon la définition de la leçon, il faut des hydrocarbures piégés et stockés en grande quantité, pour justifier une exploitation.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q5",
            "type": "mcq",
            "prompt": "Un gisement de pétrole est, selon la leçon :",
            "options": [
              "Toute roche contenant un peu de matière organique",
              "Une formation géologique où les hydrocarbures sont piégés et stockés en grande quantité pour justifier une exploitation",
              "Un simple piège vide",
              "Une roche mère riche en kérogène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition insiste sur le piégeage, le stockage en grande quantité et la justification d'une exploitation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'eau de formation associée au pétrole piégé",
          "stepTheme": "L'eau de formation associée au pétrole piégé",
          "stepBadge": "L'eau de formation associée au pétrole piégé",
          "paragraphText": "D'après l'exercice 1, le pétrole expulsé de la roche mère est associé au gaz et à l'eau de formation.\nUne fois piégés, ces trois éléments se séparent en fonction de leur densité respective.",
          "exercise": {
            "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q6",
            "type": "mcq",
            "prompt": "Le pétrole piégé est associé, d'après l'exercice 1, à :",
            "options": [
              "Au kérogène et à l'argile",
              "Au gaz et à l'eau de formation",
              "À l'azote et à l'oxygène",
              "Aux bactéries anaérobies"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte à compléter mentionne le gaz et l'eau de formation comme associés au pétrole expulsé puis piégé."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q1",
          "type": "mcq",
          "prompt": "Le piégeage des hydrocarbures se produit quand :",
          "options": [
            "Les hydrocarbures retournent dans la roche mère",
            "Des roches de couverture imperméables bloquent les hydrocarbures en circulation",
            "Le kérogène se forme",
            "Les bactéries anaérobies disparaissent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit le piégeage par l'action des roches obstacles ou roches de couverture imperméables."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q2",
          "type": "mcq",
          "prompt": "Le piège stratigraphique est dû :",
          "options": [
            "Aux déformations tectoniques",
            "À la stratigraphie",
            "À la pyrolyse",
            "À la pression des sédiments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La liste des pièges de la leçon attribue le piège stratigraphique à la stratigraphie."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q3",
          "type": "mcq",
          "prompt": "Le piège structural est dû aux déformations tectoniques telles que :",
          "options": [
            "La subsidence et le dépôt",
            "Le pli et la faille",
            "La pyrolyse et la migration",
            "La floculation et l'érosion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La parenthèse de la leçon précise les déformations tectoniques concernées : pli et faille."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q4",
          "type": "mcq",
          "prompt": "Un piège mixte combine :",
          "options": [
            "Deux roches mères",
            "Un piège stratigraphique et un piège structural",
            "Du pétrole et du gaz",
            "Une migration primaire et une migration secondaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon définit les pièges mixtes comme étant à la fois stratigraphiques et structuraux."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q5",
          "type": "mcq",
          "prompt": "Un gisement de pétrole est, selon la leçon :",
          "options": [
            "Toute roche contenant un peu de matière organique",
            "Une formation géologique où les hydrocarbures sont piégés et stockés en grande quantité pour justifier une exploitation",
            "Un simple piège vide",
            "Une roche mère riche en kérogène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition insiste sur le piégeage, le stockage en grande quantité et la justification d'une exploitation."
        },
        {
          "id": "terminale_c_svt_l09_mise_en_place_gisements_petroliferes_p05_q6",
          "type": "mcq",
          "prompt": "Le pétrole piégé est associé, d'après l'exercice 1, à :",
          "options": [
            "Au kérogène et à l'argile",
            "Au gaz et à l'eau de formation",
            "À l'azote et à l'oxygène",
            "Aux bactéries anaérobies"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte à compléter mentionne le gaz et l'eau de formation comme associés au pétrole expulsé puis piégé."
        }
      ]
    }
  ]
};
