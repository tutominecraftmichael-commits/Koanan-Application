import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : La fécondation chez les mammifères » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=936
export const SVT_1ERE_C_L05_FECONDATION: CurriculumChapter = {
  "id": "premiere_c_svt_l05_fecondation_mammiferes",
  "subjectId": "svt",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 5,
  "title": "Leçon 5 : La fécondation chez les mammifères",
  "summary": "On identifie et on décrit les étapes de la fécondation, de la migration des gamètes à la caryogamie, puis on détermine son importance et sa relation avec la transmission du VIH.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=936",
  "points": [
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p01",
      "order": 1,
      "title": "La migration des gamètes et la capacitation",
      "summary": "L’ovocyte II migre jusqu’à l’ampoule de la trompe pendant que les spermatozoïdes remontent les voies génitales femelles, en nombre fortement réduit, et acquièrent leur pouvoir fécondant.",
      "conceptExplanation": "L’ovocyte II, gamète femelle haploïde, est expulsé de l’ovaire au cours de l’ovulation ; il est capté par le pavillon de la trompe et poussé par le mouvement des cils vibratiles de la muqueuse jusqu’à l’ampoule, où se fera l’attente d’un éventuel spermatozoïde : c’est la migration du gamète femelle.\nLes spermatozoïdes, gamètes mâles haploïdes, sont éjaculés dans le vagin au cours de l’accouplement ; ils remontent les voies génitales femelles grâce à leur flagelle, traversent successivement le vagin, le col de l’utérus, l’utérus puis les trompes et arrivent à l’ampoule : c’est la migration du gamète mâle.\nAu cours de cette migration, on assiste à une réduction importante du nombre de spermatozoïdes et à l’obtention du pouvoir fécondant (la capacitation) par les rescapés : l’acidité du vagin élimine une partie des spermatozoïdes, la glaire cervicale du col élimine les spermatozoïdes anormaux et les cellules phagocytaires de l’utérus détruisent ceux considérés comme étrangers.",
      "keyRule": "Lieu de rendez-vous des gamètes : l’ampoule de la trompe ; au passage, les spermatozoïdes deviennent capacitants.",
      "formulas": [],
      "workedExample": {
        "title": "Expliquer la réduction du nombre de spermatozoïdes",
        "statement": "Au terme de la migration, l’appareil génital de la femme comporte moins d’une centaine de spermatozoïdes. Explique cette réduction.",
        "methodSteps": [
          "Dans le vagin, l’acidité élimine une partie des spermatozoïdes éjaculés.",
          "Au col de l’utérus, la glaire cervicale élimine les spermatozoïdes anormaux.",
          "Dans l’utérus, les cellules phagocytaires détruisent les spermatozoïdes considérés comme étrangers."
        ],
        "conclusion": "Trois filtres successifs réduisent le nombre de spermatozoïdes et les rescapés sont capacitants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La migration du gamète femelle",
          "stepTheme": "La migration du gamète femelle",
          "stepBadge": "La migration du gamète femelle",
          "paragraphText": "• Migration du gamète femelle : trajet de l’ovocyte II, capté par le pavillon de la trompe et poussé par les cils vibratiles jusqu’à l’ampoule.\nC’est dans l’ampoule qu’a lieu l’attente d’un éventuel spermatozoïde.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q1",
            "type": "mcq",
            "prompt": "L’ovocyte II attend un éventuel spermatozoïde dans :",
            "options": [
              "L’ampoule de la trompe",
              "Le vagin",
              "Le col de l’utérus",
              "L’ovaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé place l’attente dans l’ampoule, après captation par le pavillon et poussée des cils vibratiles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La remontée des spermatozoïdes",
          "stepTheme": "La remontée des spermatozoïdes",
          "stepBadge": "La remontée des spermatozoïdes",
          "paragraphText": "Les spermatozoïdes remontent les voies génitales grâce à leur flagelle.\nIls traversent successivement le vagin, le col de l’utérus, l’utérus puis les trompes.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q2",
            "type": "mcq",
            "prompt": "Les spermatozoïdes se déplacent dans les voies génitales grâce à :",
            "options": [
              "La glaire cervicale",
              "Des cellules phagocytaires",
              "Leur flagelle",
              "Des cils vibratiles de la trompe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé attribue la remontée au flagelle des spermatozoïdes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La capacitation",
          "stepTheme": "La capacitation",
          "stepBadge": "La capacitation",
          "paragraphText": "• Capacitation : acquisition du pouvoir fécondant par les spermatozoïdes rescapés au cours de leur migration.\nElle accompagne la réduction importante de leur nombre.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q3",
            "type": "mcq",
            "prompt": "La capacitation du spermatozoïde est :",
            "options": [
              "L’achèvement de la méiose",
              "L’acquisition du pouvoir fécondant",
              "La fusion des noyaux",
              "L’entrée de plusieurs spermatozoïdes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau des phénomènes associe capacitation à acquisition du pouvoir fécondant."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le filtre du vagin et du col",
          "stepTheme": "Le filtre du vagin et du col",
          "stepBadge": "Le filtre du vagin et du col",
          "paragraphText": "Dans le vagin, l’acidité élimine une partie des spermatozoïdes éjaculés.\nAu col de l’utérus, la glaire cervicale élimine les spermatozoïdes anormaux.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q4",
            "type": "mcq",
            "prompt": "La glaire cervicale, au col de l’utérus, élimine :",
            "options": [
              "Tous les ovocytes",
              "Uniquement les globules polaires",
              "Les cellules folliculaires",
              "Les spermatozoïdes anormaux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’explication du corrigé de la situation d’évaluation 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le rôle des cellules phagocytaires",
          "stepTheme": "Le rôle des cellules phagocytaires",
          "stepBadge": "Le rôle des cellules phagocytaires",
          "paragraphText": "Piège : toutes les étapes de la migration ne sont pas favorables aux spermatozoïdes.\nDans l’utérus, les cellules phagocytaires détruisent les spermatozoïdes qu’elles considèrent comme éléments étrangers.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q5",
            "type": "mcq",
            "prompt": "Dans l’utérus, les spermatozoïdes sont détruits par :",
            "options": [
              "Les granules corticaux",
              "Le pavillon de la trompe",
              "Les cellules phagocytaires",
              "La glaire cervicale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé attribue cette destruction aux cellules phagocytaires de l’utérus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La phase illustrée par le document",
          "stepTheme": "La phase illustrée par le document",
          "stepBadge": "La phase illustrée par le document",
          "paragraphText": "Exemple de la situation : le document illustrant cette étape représente la migration des gamètes.\nSa conséquence est de rendre les spermatozoïdes capacitants, c’est-à-dire ayant le pouvoir fécondant.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q6",
            "type": "mcq",
            "prompt": "La conséquence de la migration pour les spermatozoïdes rescapés est :",
            "options": [
              "La capacitation, le pouvoir fécondant",
              "La division en deux cellules",
              "La polyspermie",
              "La formation du zygote"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La déduction du corrigé dit que cette étape rend les spermatozoïdes capacitants."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q1",
          "type": "mcq",
          "prompt": "L’ovocyte II attend un éventuel spermatozoïde dans :",
          "options": [
            "L’ampoule de la trompe",
            "Le vagin",
            "Le col de l’utérus",
            "L’ovaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé place l’attente dans l’ampoule, après captation par le pavillon et poussée des cils vibratiles."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q2",
          "type": "mcq",
          "prompt": "Les spermatozoïdes se déplacent dans les voies génitales grâce à :",
          "options": [
            "La glaire cervicale",
            "Des cellules phagocytaires",
            "Leur flagelle",
            "Des cils vibratiles de la trompe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé attribue la remontée au flagelle des spermatozoïdes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q3",
          "type": "mcq",
          "prompt": "La capacitation du spermatozoïde est :",
          "options": [
            "L’achèvement de la méiose",
            "L’acquisition du pouvoir fécondant",
            "La fusion des noyaux",
            "L’entrée de plusieurs spermatozoïdes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau des phénomènes associe capacitation à acquisition du pouvoir fécondant."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q4",
          "type": "mcq",
          "prompt": "La glaire cervicale, au col de l’utérus, élimine :",
          "options": [
            "Tous les ovocytes",
            "Uniquement les globules polaires",
            "Les cellules folliculaires",
            "Les spermatozoïdes anormaux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’explication du corrigé de la situation d’évaluation 2."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q5",
          "type": "mcq",
          "prompt": "Dans l’utérus, les spermatozoïdes sont détruits par :",
          "options": [
            "Les granules corticaux",
            "Le pavillon de la trompe",
            "Les cellules phagocytaires",
            "La glaire cervicale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé attribue cette destruction aux cellules phagocytaires de l’utérus."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p01_q6",
          "type": "mcq",
          "prompt": "La conséquence de la migration pour les spermatozoïdes rescapés est :",
          "options": [
            "La capacitation, le pouvoir fécondant",
            "La division en deux cellules",
            "La polyspermie",
            "La formation du zygote"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La déduction du corrigé dit que cette étape rend les spermatozoïdes capacitants."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p02",
      "order": 2,
      "title": "Rencontre, pénétration et activation de l’ovocyte II",
      "summary": "Dans l’ampoule, un seul spermatozoïde pénètre grâce aux enzymes de l’acrosome ; l’activation de l’ovocyte II forme la membrane de fécondation contre la polyspermie et achève la méiose.",
      "conceptExplanation": "Un nombre réduit de spermatozoïdes arrive au contact de l’ovocyte II dans l’ampoule : c’est la rencontre des gamètes.\nLes cellules folliculaires autour de l’ovocyte II, constituant la corona radiata, se rétractent, amenant les spermatozoïdes dans la zone pellucide, puis un processus de reconnaissance des gamètes a lieu. Après la reconnaissance, le spermatozoïde perfore la zone pellucide et digère la membrane de l’ovocyte II sous l’action des enzymes de l’acrosome, ce qui permet la pénétration du spermatozoïde et l’activation de l’ovocyte II.\nL’activation permet la libération du contenu des granules corticaux dans l’espace péri-ovocytaire, conduisant à la formation de la membrane de fécondation imperméable aux autres spermatozoïdes, ce qui empêche la polyspermie, et l’expulsion d’un deuxième globule polaire suite à l’achèvement de la méiose : l’ovocyte II devient un ovule.",
      "keyRule": "Un seul spermatozoïde pénètre ; la membrane de fécondation ferme la porte aux autres.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les phénomènes de la fécondation",
        "statement": "Range dans l’ordre : caryogamie, migration des gamètes, stade deux cellules, pénétration d’un spermatozoïde, rencontre des gamètes, activation de l’ovocyte II.",
        "methodSteps": [
          "La migration des gamètes vient en premier, suivie de la rencontre.",
          "Viennent ensuite la pénétration puis l’activation de l’ovocyte II.",
          "La caryogamie précède le stade deux cellules."
        ],
        "conclusion": "L’ordre corrigé enchaîne migration, rencontre, pénétration, activation, caryogamie et stade deux cellules."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La rencontre des gamètes",
          "stepTheme": "La rencontre des gamètes",
          "stepBadge": "La rencontre des gamètes",
          "paragraphText": "• Rencontre des gamètes : arrivée d’un nombre réduit de spermatozoïdes au contact de l’ovocyte II dans l’ampoule.\nElle suit les deux migrations.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q1",
            "type": "mcq",
            "prompt": "La rencontre des gamètes a lieu :",
            "options": [
              "Dans le vagin",
              "Dans l’ovaire",
              "Au col de l’utérus",
              "Dans l’ampoule"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé situe la rencontre dans l’ampoule, lieu d’arrivée des deux gamètes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La corona radiata se rétracte",
          "stepTheme": "La corona radiata se rétracte",
          "stepBadge": "La corona radiata se rétracte",
          "paragraphText": "Autour de l’ovocyte II, les cellules folliculaires constituent la corona radiata.\nElles se rétractent, amenant les spermatozoïdes dans la zone pellucide, avant la reconnaissance des gamètes.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q2",
            "type": "mcq",
            "prompt": "Les cellules folliculaires autour de l’ovocyte II forment :",
            "options": [
              "La membrane de fécondation",
              "La corona radiata",
              "Le pronucléus",
              "La zone pellucide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le résumé nomme corona radiata l’ensemble des cellules folliculaires autour de l’ovocyte II."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les enzymes de l’acrosome",
          "stepTheme": "Les enzymes de l’acrosome",
          "stepBadge": "Les enzymes de l’acrosome",
          "paragraphText": "Après la reconnaissance, le spermatozoïde perfore la zone pellucide et digère la membrane de l’ovocyte II.\nCette action est due aux enzymes de l’acrosome.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q3",
            "type": "mcq",
            "prompt": "La pénétration est rendue possible par les enzymes :",
            "options": [
              "De l’acrosome",
              "De la glaire cervicale",
              "Des granules corticaux",
              "Du flagelle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé attribue perforation et digestion aux enzymes de l’acrosome."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’activation de l’ovocyte II",
          "stepTheme": "L’activation de l’ovocyte II",
          "stepBadge": "L’activation de l’ovocyte II",
          "paragraphText": "• Activation de l’ovocyte II : reprise et achèvement de la méiose déclenchés par la pénétration du spermatozoïde.\nElle s’accompagne de l’éclatement des granules corticaux.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q4",
            "type": "mcq",
            "prompt": "L’activation de l’ovocyte II correspond à :",
            "options": [
              "L’acquisition du pouvoir fécondant",
              "La fusion des noyaux",
              "La reprise et l’achèvement de la méiose",
              "L’entrée de plusieurs spermatozoïdes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le tableau des significations associe activation à reprise et achèvement de la méiose."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La membrane de fécondation empêche la polyspermie",
          "stepTheme": "La membrane de fécondation empêche la polyspermie",
          "stepBadge": "La membrane de fécondation empêche la polyspermie",
          "paragraphText": "Piège : plusieurs spermatozoïdes arrivent au contact, mais un seul pénètre.\nLes granules corticaux forment la membrane de fécondation, imperméable aux autres spermatozoïdes : la polyspermie, entrée de plusieurs spermatozoïdes, est empêchée.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q5",
            "type": "mcq",
            "prompt": "La polyspermie est :",
            "options": [
              "L’achèvement de la méiose",
              "L’entrée de plusieurs spermatozoïdes dans l’ovocyte II, empêchée par la membrane de fécondation",
              "La capacitation",
              "La fusion des noyaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le tableau définit la polyspermie comme l’entrée de plusieurs spermatozoïdes, et le cours précise qu’elle est empêchée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "De l’ovocyte II à l’ovule",
          "stepTheme": "De l’ovocyte II à l’ovule",
          "stepBadge": "De l’ovocyte II à l’ovule",
          "paragraphText": "Exemple des deux structures de l’évaluation : la cellule A, avec un seul globule polaire, est l’ovocyte II bloqué en métaphase II.\nLa cellule B, avec deux globules polaires, est l’ovule, car la méiose est achevée.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q6",
            "type": "mcq",
            "prompt": "La présence de deux globules polaires indique :",
            "options": [
              "La capacitation",
              "Le blocage en métaphase II",
              "La polyspermie",
              "L’achèvement de la méiose : la cellule est un ovule"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La justification du corrigé relie deux globules polaires à l’achèvement de la méiose."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q1",
          "type": "mcq",
          "prompt": "La rencontre des gamètes a lieu :",
          "options": [
            "Dans le vagin",
            "Dans l’ovaire",
            "Au col de l’utérus",
            "Dans l’ampoule"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé situe la rencontre dans l’ampoule, lieu d’arrivée des deux gamètes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q2",
          "type": "mcq",
          "prompt": "Les cellules folliculaires autour de l’ovocyte II forment :",
          "options": [
            "La membrane de fécondation",
            "La corona radiata",
            "Le pronucléus",
            "La zone pellucide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le résumé nomme corona radiata l’ensemble des cellules folliculaires autour de l’ovocyte II."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q3",
          "type": "mcq",
          "prompt": "La pénétration est rendue possible par les enzymes :",
          "options": [
            "De l’acrosome",
            "De la glaire cervicale",
            "Des granules corticaux",
            "Du flagelle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé attribue perforation et digestion aux enzymes de l’acrosome."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q4",
          "type": "mcq",
          "prompt": "L’activation de l’ovocyte II correspond à :",
          "options": [
            "L’acquisition du pouvoir fécondant",
            "La fusion des noyaux",
            "La reprise et l’achèvement de la méiose",
            "L’entrée de plusieurs spermatozoïdes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le tableau des significations associe activation à reprise et achèvement de la méiose."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q5",
          "type": "mcq",
          "prompt": "La polyspermie est :",
          "options": [
            "L’achèvement de la méiose",
            "L’entrée de plusieurs spermatozoïdes dans l’ovocyte II, empêchée par la membrane de fécondation",
            "La capacitation",
            "La fusion des noyaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le tableau définit la polyspermie comme l’entrée de plusieurs spermatozoïdes, et le cours précise qu’elle est empêchée."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p02_q6",
          "type": "mcq",
          "prompt": "La présence de deux globules polaires indique :",
          "options": [
            "La capacitation",
            "Le blocage en métaphase II",
            "La polyspermie",
            "L’achèvement de la méiose : la cellule est un ovule"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La justification du corrigé relie deux globules polaires à l’achèvement de la méiose."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p03",
      "order": 3,
      "title": "La formation des pronucléi et la caryogamie",
      "summary": "Les deux noyaux gonflent en pronucléi haploïdes, fusionnent par caryogamie et donnent la cellule œuf ou zygote diploïde, qui débute ses divisions par le stade deux cellules.",
      "conceptExplanation": "Le noyau de l’ovule gonfle et devient le pronucléus femelle haploïde ; celui du spermatozoïde gonfle aussi et devient le pronucléus mâle haploïde.\nCes deux pronucléi se rapprochent et fusionnent : c’est la caryogamie. De cette fusion naît une cellule œuf ou zygote diploïde, ce qui rétablit le nombre diploïde de chromosomes.\nCette cellule œuf débute ses divisions par le stade deux cellules pour aboutir, quelques temps plus tard en fonction des espèces, à un nouvel individu.\nLe gamète mâle haploïde et le gamète femelle haploïde s’unissent donc pour former une cellule œuf diploïde : c’est la fécondation.",
      "keyRule": "Caryogamie égale fusion des pronucléi égale zygote diploïde.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner les dessins de l’oviducte",
        "statement": "Des coupes d’oviductes de lapines montrent rencontre, pénétration, formation puis fusion des pronucléi et première division. Range ces étapes.",
        "methodSteps": [
          "La rencontre des gamètes précède la pénétration d’un spermatozoïde.",
          "La formation des pronucléi précède leur fusion.",
          "La fusion précède la première division de la cellule œuf."
        ],
        "conclusion": "Le phénomène mis en évidence par ces dessins est la fécondation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les pronucléi",
          "stepTheme": "Les pronucléi",
          "stepBadge": "Les pronucléi",
          "paragraphText": "• Prornucléus femelle et pronucléus mâle : noyaux gonflés de l’ovule et du spermatozoïde après la pénétration.\nChacun est haploïde.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q1",
            "type": "mcq",
            "prompt": "Après la pénétration, le noyau du spermatozoïde devient :",
            "options": [
              "Un globule polaire",
              "Un zygote diploïde",
              "Le pronucléus mâle haploïde",
              "Une cellule folliculaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le résumé dit que le noyau du spermatozoïde gonfle et devient le pronucléus mâle haploïde."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La caryogamie",
          "stepTheme": "La caryogamie",
          "stepBadge": "La caryogamie",
          "paragraphText": "• Caryogamie : fusion des noyaux des gamètes mâle et femelle.\nLes deux pronucléi se rapprochent puis fusionnent.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q2",
            "type": "mcq",
            "prompt": "La caryogamie est :",
            "options": [
              "La fusion des noyaux des gamètes mâles et femelles",
              "L’acquisition du pouvoir fécondant",
              "La reprise de la méiose",
              "L’entrée de plusieurs spermatozoïdes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le tableau des phénomènes associe caryogamie à fusion des noyaux des gamètes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rétablissement de la diploïdie",
          "stepTheme": "Le rétablissement de la diploïdie",
          "stepBadge": "Le rétablissement de la diploïdie",
          "paragraphText": "De la fusion des pronucléi naît une cellule œuf diploïde.\nLe nombre diploïde de chromosomes, caractéristique de l’espèce, est ainsi rétabli.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q3",
            "type": "mcq",
            "prompt": "La cellule œuf issue de la caryogamie est :",
            "options": [
              "Un globule polaire",
              "Haploïde",
              "Sans noyau",
              "Diploïde"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le résumé précise que le zygote est diploïde et rétablit le nombre diploïde de chromosomes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L’ordre chronologique complet",
          "stepTheme": "L’ordre chronologique complet",
          "stepBadge": "L’ordre chronologique complet",
          "paragraphText": "Méthode : replacer chaque étape dans la suite logique de la fécondation.\nMigration, rencontre, reconnaissance, pénétration d’un seul spermatozoïde, éclatement des granules corticaux, fusion des noyaux, formation du zygote.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q4",
            "type": "mcq",
            "prompt": "Dans l’ordre chronologique corrigé, la première étape est :",
            "options": [
              "La fusion des noyaux",
              "La migration des gamètes",
              "La formation du zygote",
              "L’éclatement des granules corticaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’activité 3 commence par la migration des gamètes."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La première division suit la fusion",
          "stepTheme": "La première division suit la fusion",
          "stepBadge": "La première division suit la fusion",
          "paragraphText": "Piège : le stade deux cellules n’apparaît pas avant la caryogamie.\nLa cellule œuf ne débute ses divisions qu’après la fusion des pronucléi.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q5",
            "type": "mcq",
            "prompt": "Le stade deux cellules marque :",
            "options": [
              "Le début des divisions de la cellule œuf après la caryogamie",
              "La fin de la migration",
              "La formation des pronucléi",
              "La rencontre des gamètes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le résumé dit que la cellule œuf débute ses divisions par le stade deux cellules."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Définition complète de la fécondation",
          "stepTheme": "Définition complète de la fécondation",
          "stepBadge": "Définition complète de la fécondation",
          "paragraphText": "Exemple de définition à retenir : le gamète mâle haploïde et le gamète femelle haploïde s’unissent pour former une cellule œuf diploïde.\nC’est ce processus en plusieurs étapes qui constitue la fécondation.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q6",
            "type": "mcq",
            "prompt": "La fécondation est l’union :",
            "options": [
              "D’un pronucléus et d’un globule polaire",
              "De deux gamètes diploïdes donnant un zygote haploïde",
              "D’un gamète mâle haploïde et d’un gamète femelle haploïde donnant une cellule œuf diploïde",
              "De deux ovocytes donnant un spermatozoïde"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition de synthèse de la partie I."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q1",
          "type": "mcq",
          "prompt": "Après la pénétration, le noyau du spermatozoïde devient :",
          "options": [
            "Un globule polaire",
            "Un zygote diploïde",
            "Le pronucléus mâle haploïde",
            "Une cellule folliculaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le résumé dit que le noyau du spermatozoïde gonfle et devient le pronucléus mâle haploïde."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q2",
          "type": "mcq",
          "prompt": "La caryogamie est :",
          "options": [
            "La fusion des noyaux des gamètes mâles et femelles",
            "L’acquisition du pouvoir fécondant",
            "La reprise de la méiose",
            "L’entrée de plusieurs spermatozoïdes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le tableau des phénomènes associe caryogamie à fusion des noyaux des gamètes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q3",
          "type": "mcq",
          "prompt": "La cellule œuf issue de la caryogamie est :",
          "options": [
            "Un globule polaire",
            "Haploïde",
            "Sans noyau",
            "Diploïde"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le résumé précise que le zygote est diploïde et rétablit le nombre diploïde de chromosomes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q4",
          "type": "mcq",
          "prompt": "Dans l’ordre chronologique corrigé, la première étape est :",
          "options": [
            "La fusion des noyaux",
            "La migration des gamètes",
            "La formation du zygote",
            "L’éclatement des granules corticaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’activité 3 commence par la migration des gamètes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q5",
          "type": "mcq",
          "prompt": "Le stade deux cellules marque :",
          "options": [
            "Le début des divisions de la cellule œuf après la caryogamie",
            "La fin de la migration",
            "La formation des pronucléi",
            "La rencontre des gamètes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le résumé dit que la cellule œuf débute ses divisions par le stade deux cellules."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p03_q6",
          "type": "mcq",
          "prompt": "La fécondation est l’union :",
          "options": [
            "D’un pronucléus et d’un globule polaire",
            "De deux gamètes diploïdes donnant un zygote haploïde",
            "D’un gamète mâle haploïde et d’un gamète femelle haploïde donnant une cellule œuf diploïde",
            "De deux ovocytes donnant un spermatozoïde"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition de synthèse de la partie I."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p04",
      "order": 4,
      "title": "L’importance de la fécondation",
      "summary": "La fécondation rétablit la diploïdie, assure la permanence du caryotype et la pérennité de l’espèce, détermine le sexe et crée le polymorphisme des individus, jusqu’à l’obtention d’un nouvel individu.",
      "conceptExplanation": "Au cours de la fécondation, il y a rétablissement de la diploïdie par suite de la réunion, au sein du noyau de l’œuf ou zygote, des chromosomes de chaque gamète ; la rencontre des gamètes se faisant au hasard, chaque type de gamète mâle est susceptible de s’unir à chacun des types de gamètes femelles.\nOn retrouve toujours, dans la reproduction sexuée, les phénomènes fondamentaux que sont la méiose et la fécondation.\nCes phénomènes assurent la conservation et la permanence du caryotype de génération en génération, mais font également que les individus d’une génération sont différents de leurs parents et les uns des autres : c’est le polymorphisme des individus. La fécondation assure aussi la pérennité de l’espèce avec ses caractéristiques génétiques, la détermination chromosomique du sexe de l’individu et l’obtention d’un nouvel individu.",
      "keyRule": "La fécondation conserve le caryotype tout en rendant chaque individu différent.",
      "formulas": [],
      "workedExample": {
        "title": "Classer étapes et importance",
        "statement": "Une liste mélange étapes (rencontre, pénétration, formation des pronucléi, fusion, division) et rôles de la fécondation. Classe-la en deux colonnes.",
        "methodSteps": [
          "Les étapes décrivent le déroulement : rencontre, pénétration, pronucléi, fusion, division.",
          "L’importance regroupe rétablissement de la diploïdie, pérennité, polymorphisme et détermination du sexe.",
          "L’obtention d’un nouvel individu relève de l’importance, pas des étapes."
        ],
        "conclusion": "Distinguer le déroulement des rôles évite de mélanger les deux parties de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rétablissement de la diploïdie",
          "stepTheme": "Le rétablissement de la diploïdie",
          "stepBadge": "Le rétablissement de la diploïdie",
          "paragraphText": "• Rétablissement de la diploïdie : réunion, dans le noyau du zygote, des chromosomes de chaque gamète.\nLe nombre diploïde caractéristique de l’espèce est retrouvé.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q1",
            "type": "mcq",
            "prompt": "Le rétablissement de la diploïdie résulte de :",
            "options": [
              "La seule méiose",
              "La réunion des chromosomes de chaque gamète dans le zygote",
              "La migration des spermatozoïdes",
              "La formation des globules polaires"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le premier rôle cité dans le texte de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La permanence du caryotype",
          "stepTheme": "La permanence du caryotype",
          "stepBadge": "La permanence du caryotype",
          "paragraphText": "Méiose et fécondation sont les phénomènes fondamentaux de la reproduction sexuée.\nIls assurent la conservation et la permanence du caryotype de génération en génération.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q2",
            "type": "mcq",
            "prompt": "La permanence du caryotype de génération en génération est assurée par :",
            "options": [
              "La glaire cervicale",
              "La polyspermie",
              "La seule capacitation",
              "La méiose et la fécondation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte adapté attribue ce rôle au couple méiose et fécondation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le polymorphisme des individus",
          "stepTheme": "Le polymorphisme des individus",
          "stepBadge": "Le polymorphisme des individus",
          "paragraphText": "• Polymorphisme : fait que les individus d’une génération sont différents de leurs parents et les uns des autres.\nIl vient notamment du hasard de la rencontre des gamètes.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q3",
            "type": "mcq",
            "prompt": "Le polymorphisme signifie que les individus d’une génération sont :",
            "options": [
              "Sans chromosomes",
              "Tous identiques à leurs parents",
              "Différents de leurs parents et les uns des autres",
              "Tous du même sexe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le texte explique le polymorphisme par ces différences entre individus."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La détermination du sexe",
          "stepTheme": "La détermination du sexe",
          "stepBadge": "La détermination du sexe",
          "paragraphText": "La fécondation assure la détermination chromosomique du sexe de l’individu.\nElle figure parmi les rôles listés dans les résultats de la partie II.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q4",
            "type": "mcq",
            "prompt": "La détermination chromosomique du sexe est un rôle de :",
            "options": [
              "La fécondation",
              "La migration seule",
              "La corona radiata",
              "L’ampoule de la trompe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les résultats de la partie II citent la détermination chromosomique du sexe parmi les rôles de la fécondation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La pérennité de l’espèce",
          "stepTheme": "La pérennité de l’espèce",
          "stepBadge": "La pérennité de l’espèce",
          "paragraphText": "Piège : la fécondation ne sert pas qu’à produire un individu isolé.\nElle assure aussi la pérennité de l’espèce avec ses caractéristiques génétiques.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q5",
            "type": "mcq",
            "prompt": "La pérennité de l’espèce avec ses caractéristiques génétiques est assurée par :",
            "options": [
              "Le lessivage",
              "La glaire cervicale",
              "La destruction des spermatozoïdes",
              "La fécondation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est un des rôles listés dans l’analyse de la partie II."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’obtention d’un nouvel individu",
          "stepTheme": "L’obtention d’un nouvel individu",
          "stepBadge": "L’obtention d’un nouvel individu",
          "paragraphText": "Exemple de résultat final : la cellule œuf aboutit, quelques temps plus tard selon les espèces, à un nouvel individu.\nL’obtention d’un nouvel individu est le premier rôle noté dans les résultats.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q6",
            "type": "mcq",
            "prompt": "L’aboutissement de la fécondation est :",
            "options": [
              "Une corona radiata",
              "Un nouvel individu",
              "Un globule polaire",
              "Un pronucléus isolé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les résultats de la partie II notent d’abord l’obtention d’un nouvel individu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q1",
          "type": "mcq",
          "prompt": "Le rétablissement de la diploïdie résulte de :",
          "options": [
            "La seule méiose",
            "La réunion des chromosomes de chaque gamète dans le zygote",
            "La migration des spermatozoïdes",
            "La formation des globules polaires"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le premier rôle cité dans le texte de la partie II."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q2",
          "type": "mcq",
          "prompt": "La permanence du caryotype de génération en génération est assurée par :",
          "options": [
            "La glaire cervicale",
            "La polyspermie",
            "La seule capacitation",
            "La méiose et la fécondation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte adapté attribue ce rôle au couple méiose et fécondation."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q3",
          "type": "mcq",
          "prompt": "Le polymorphisme signifie que les individus d’une génération sont :",
          "options": [
            "Sans chromosomes",
            "Tous identiques à leurs parents",
            "Différents de leurs parents et les uns des autres",
            "Tous du même sexe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le texte explique le polymorphisme par ces différences entre individus."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q4",
          "type": "mcq",
          "prompt": "La détermination chromosomique du sexe est un rôle de :",
          "options": [
            "La fécondation",
            "La migration seule",
            "La corona radiata",
            "L’ampoule de la trompe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les résultats de la partie II citent la détermination chromosomique du sexe parmi les rôles de la fécondation."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q5",
          "type": "mcq",
          "prompt": "La pérennité de l’espèce avec ses caractéristiques génétiques est assurée par :",
          "options": [
            "Le lessivage",
            "La glaire cervicale",
            "La destruction des spermatozoïdes",
            "La fécondation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est un des rôles listés dans l’analyse de la partie II."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p04_q6",
          "type": "mcq",
          "prompt": "L’aboutissement de la fécondation est :",
          "options": [
            "Une corona radiata",
            "Un nouvel individu",
            "Un globule polaire",
            "Un pronucléus isolé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les résultats de la partie II notent d’abord l’obtention d’un nouvel individu."
        }
      ]
    },
    {
      "id": "premiere_c_svt_l05_fecondation_mammiferes_p05",
      "order": 5,
      "title": "Fécondation et transmission du VIH de la mère à l’enfant",
      "summary": "La leçon relie la fécondation à la transmission du VIH : sans précaution, le virus peut passer de la mère à l’enfant pendant la grossesse, le travail, l’accouchement et l’allaitement.",
      "conceptExplanation": "Le passage des gamètes à un nouvel individu se fait à travers la fécondation, d’une grande importance pour chaque espèce ; elle peut malheureusement aussi occasionner, en absence de précaution, la transmission du VIH de la mère à l’enfant.\nLa contamination par voie sanguine de la mère à l’enfant peut se faire pendant la grossesse, au cours du travail, de l’accouchement et au cours de l’allaitement.\nC’est la relation entre la fécondation, qui donne le nouvel individu, et la transmission du VIH demandée dès la situation d’apprentissage.",
      "keyRule": "La transmission mère-enfant du VIH est possible à la grossesse, à l’accouchement et à l’allaitement.",
      "formulas": [],
      "workedExample": {
        "title": "Dégager les voies de contamination du nouveau-né",
        "statement": "Un camarade découvre que certains enfants naissent contaminés par le VIH. Dégage les voies de contamination par la mère.",
        "methodSteps": [
          "La contamination se fait par voie sanguine de la mère à l’enfant.",
          "Elle peut survenir pendant la grossesse et au cours du travail et de l’accouchement.",
          "Elle peut aussi se faire au cours de l’allaitement."
        ],
        "conclusion": "Quatre moments de risque sont cités dans le corrigé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La transmission mère-enfant",
          "stepTheme": "La transmission mère-enfant",
          "stepBadge": "La transmission mère-enfant",
          "paragraphText": "• Transmission du VIH de la mère à l’enfant : contamination du nouveau-né par sa mère, possible en absence de précaution.\nElle est reliée, dans la leçon, à la formation du nouvel individu par la fécondation.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q1",
            "type": "mcq",
            "prompt": "Selon la conclusion générale, la fécondation peut aussi occasionner, sans précaution :",
            "options": [
              "La transmission du VIH de la mère à l’enfant",
              "La polyspermie",
              "La capacitation",
              "La formation des pronucléi"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion générale mentionne explicitement cette transmission."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La voie sanguine",
          "stepTheme": "La voie sanguine",
          "stepBadge": "La voie sanguine",
          "paragraphText": "La contamination de la mère à l’enfant se fait par voie sanguine.\nElle est précisée dans le corrigé de la situation d’évaluation 2.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q2",
            "type": "mcq",
            "prompt": "La voie de contamination mère-enfant citée est la voie :",
            "options": [
              "Cutanée simple",
              "Digestive chez l’adulte",
              "Sanguine",
              "Aérienne"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé dit : contamination par voie sanguine de la mère à l’enfant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Pendant la grossesse et l’accouchement",
          "stepTheme": "Pendant la grossesse et l’accouchement",
          "stepBadge": "Pendant la grossesse et l’accouchement",
          "paragraphText": "La contamination peut se faire pendant la grossesse.\nElle peut aussi se faire au cours du travail et de l’accouchement.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q3",
            "type": "mcq",
            "prompt": "Parmi les moments cités, on trouve :",
            "options": [
              "Le premier jour d’école",
              "La grossesse, le travail et l’accouchement",
              "Uniquement l’allaitement",
              "Uniquement la puberté de l’enfant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé liste grossesse, travail et accouchement parmi les moments possibles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L’allaitement aussi concerné",
          "stepTheme": "L’allaitement aussi concerné",
          "stepBadge": "L’allaitement aussi concerné",
          "paragraphText": "Piège : la naissance n’est pas la fin du risque.\nLa contamination peut également se faire au cours de l’allaitement.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q4",
            "type": "mcq",
            "prompt": "La contamination peut aussi se faire au cours de :",
            "options": [
              "La migration des gamètes",
              "La rencontre des gamètes",
              "La caryogamie",
              "L’allaitement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé ajoute l’allaitement aux moments de contamination possible."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les trompes bouchées, autre problème de fécondation",
          "stepTheme": "Les trompes bouchées, autre problème de fécondation",
          "stepBadge": "Les trompes bouchées, autre problème de fécondation",
          "paragraphText": "Exemple de l’exercice 5 : une femme est stérile car ses trompes sont obstruées.\nLes trompes bouchées empêchent la rencontre entre le gamète mâle et le gamète femelle.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q5",
            "type": "mcq",
            "prompt": "Des trompes obstruées rendent une femme stérile car elles empêchent :",
            "options": [
              "La détermination du sexe",
              "La capacitation dans l’ovaire",
              "La rencontre entre le gamète mâle et le gamète femelle",
              "La formation des pronucléi"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de l’exercice 5 explique la stérilité par l’impossibilité de la rencontre des gamètes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Identifier la phase du document",
          "stepTheme": "Identifier la phase du document",
          "stepBadge": "Identifier la phase du document",
          "paragraphText": "Exemple corrigé : le document montrant des spermatozoïdes en route, avant réduction de leur nombre, illustre la migration des gamètes.\nCette phase précède la rencontre dans l’ampoule.",
          "exercise": {
            "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q6",
            "type": "mcq",
            "prompt": "La phase où le nombre de spermatozoïdes se réduit fortement est :",
            "options": [
              "La migration des gamètes",
              "Le stade deux cellules",
              "La caryogamie",
              "La formation des pronucléi"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La situation d’évaluation 2 identifie la migration des gamètes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q1",
          "type": "mcq",
          "prompt": "Selon la conclusion générale, la fécondation peut aussi occasionner, sans précaution :",
          "options": [
            "La transmission du VIH de la mère à l’enfant",
            "La polyspermie",
            "La capacitation",
            "La formation des pronucléi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion générale mentionne explicitement cette transmission."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q2",
          "type": "mcq",
          "prompt": "La voie de contamination mère-enfant citée est la voie :",
          "options": [
            "Cutanée simple",
            "Digestive chez l’adulte",
            "Sanguine",
            "Aérienne"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé dit : contamination par voie sanguine de la mère à l’enfant."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q3",
          "type": "mcq",
          "prompt": "Parmi les moments cités, on trouve :",
          "options": [
            "Le premier jour d’école",
            "La grossesse, le travail et l’accouchement",
            "Uniquement l’allaitement",
            "Uniquement la puberté de l’enfant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé liste grossesse, travail et accouchement parmi les moments possibles."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q4",
          "type": "mcq",
          "prompt": "La contamination peut aussi se faire au cours de :",
          "options": [
            "La migration des gamètes",
            "La rencontre des gamètes",
            "La caryogamie",
            "L’allaitement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé ajoute l’allaitement aux moments de contamination possible."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q5",
          "type": "mcq",
          "prompt": "Des trompes obstruées rendent une femme stérile car elles empêchent :",
          "options": [
            "La détermination du sexe",
            "La capacitation dans l’ovaire",
            "La rencontre entre le gamète mâle et le gamète femelle",
            "La formation des pronucléi"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de l’exercice 5 explique la stérilité par l’impossibilité de la rencontre des gamètes."
        },
        {
          "id": "premiere_c_svt_l05_fecondation_mammiferes_p05_q6",
          "type": "mcq",
          "prompt": "La phase où le nombre de spermatozoïdes se réduit fortement est :",
          "options": [
            "La migration des gamètes",
            "Le stade deux cellules",
            "La caryogamie",
            "La formation des pronucléi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La situation d’évaluation 2 identifie la migration des gamètes."
        }
      ]
    }
  ]
};
