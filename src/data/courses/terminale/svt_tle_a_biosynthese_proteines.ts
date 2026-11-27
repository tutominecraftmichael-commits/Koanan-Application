import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 7 : La biosynthèse des protéines » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1754
export const SVT_TLE_A_L07_BIOSYNTHESE_PROTEINES: CurriculumChapter = {
  "id": "terminale_a1_svt_l07_biosynthese_proteines",
  "subjectId": "svt",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 7,
  "title": "Leçon 7 : La biosynthèse des protéines",
  "summary": "La cellule synthétise ses protéines à partir des acides aminés grâce à des acteurs (ADN, ARN et ribosomes), selon le code génétique universel, et par un mécanisme en deux grandes étapes : la transcription dans le noyau et la traduction dans le cytoplasme.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1754",
  "points": [
    {
      "id": "terminale_a1_svt_l07_biosynthese_proteines_p01",
      "order": 1,
      "title": "Les acteurs de la biosynthèse des protéines",
      "summary": "Identifier l'ADN, les trois types d'ARN et le ribosome, acteurs de la synthèse protéique.",
      "conceptExplanation": "Les acteurs de la synthèse protéique sont l'ADN, l'ARN et le ribosome.\nL'ADN, acide désoxyribonucléique, est constitué par deux brins complémentaires (bicaténaire). Il est localisé dans le noyau.\nL'ARN, acide ribonucléique, est constitué par un seul brin (monocaténaire). On distingue trois types : l'ARN messager (ARNm), l'ARN de transfert (ARNt), qui diffère des autres par sa structure et sa forme, et l'ARN ribosomial (ARNr).\nLe ribosome est composé de deux sous-unités, une petite et une grande.\nLa cellule synthétise donc les protéines grâce à l'ADN, à l'ARN et aux ribosomes.",
      "keyRule": "Trois acteurs à ne pas confondre : ADN bicaténaire dans le noyau, ARN monocaténaire en trois types (m, t, r) et ribosome en deux sous-unités.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir les bonnes propositions sur le gène et la protéine (exercice 2)",
        "statement": "Pour chaque item de l'exercice 2, choisis la bonne proposition : définition d'un gène et définition d'une protéine.",
        "methodSteps": [
          "Un gène est un segment d'ADN (ou plus rarement d'ARN) programmant un caractère phénotypique : proposition a de l'item 1.",
          "Une protéine est une grosse molécule dont les sous-unités sont des acides aminés : proposition c de l'item 2.",
          "Les propositions écartent le glucose et les acides gras comme sous-unités des protéines."
        ],
        "conclusion": "Gène : segment d'ADN programmant un caractère ; protéine : assemblage d'acides aminés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'ADN, molécule bicaténaire du noyau",
          "stepTheme": "L'ADN, molécule bicaténaire du noyau",
          "stepBadge": "L'ADN, molécule bicaténaire du noyau",
          "paragraphText": "• ADN : acide désoxyribonucléique, constitué par deux brins complémentaires, donc bicaténaire.\nIl est localisé dans le noyau de la cellule.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q1",
            "type": "mcq",
            "prompt": "L'ADN est :",
            "options": [
              "Monocaténaire et cytoplasmique",
              "Bicaténaire et localisé dans le noyau",
              "Composé de deux sous-unités",
              "Un type d'ARN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de l'observation du schéma des acteurs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'ARN et ses trois types",
          "stepTheme": "L'ARN et ses trois types",
          "stepBadge": "L'ARN et ses trois types",
          "paragraphText": "• ARN : acide ribonucléique, constitué par un seul brin, donc monocaténaire.\nOn distingue l'ARN messager (ARNm), l'ARN de transfert (ARNt) et l'ARN ribosomial (ARNr).",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q2",
            "type": "mcq",
            "prompt": "L'ARN est constitué de :",
            "options": [
              "Deux brins complémentaires",
              "Un seul brin",
              "Trois brins",
              "Deux sous-unités"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ARN est monocaténaire, à la différence de l'ADN bicaténaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'ARNt se distingue par sa structure",
          "stepTheme": "L'ARNt se distingue par sa structure",
          "stepBadge": "L'ARNt se distingue par sa structure",
          "paragraphText": "Parmi les trois types d'ARN, l'ARN de transfert diffère des autres par sa structure et sa forme.\nC'est lui qui portera les acides aminés pendant la traduction, avec son anticodon.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q3",
            "type": "mcq",
            "prompt": "L'ARN qui diffère des autres par sa structure et sa forme est :",
            "options": [
              "L'ARN messager",
              "L'ARN ribosomial",
              "L'ARN de transfert",
              "L'ADN"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Précision donnée dans les résultats de la partie I."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le ribosome en deux sous-unités",
          "stepTheme": "Le ribosome en deux sous-unités",
          "stepBadge": "Le ribosome en deux sous-unités",
          "paragraphText": "Le ribosome est composé de deux sous-unités.\nIl comprend une petite sous-unité et une grande sous-unité, qui s'assemblent pendant la traduction.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q4",
            "type": "mcq",
            "prompt": "Le ribosome est composé de :",
            "options": [
              "Deux brins d'ADN",
              "Une petite et une grande sous-unité",
              "Trois types d'ARN uniquement",
              "Un seul élément indivisible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de la partie I pour le ribosome."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les bases de l'ARN ne contiennent pas la thymine",
          "stepTheme": "Les bases de l'ARN ne contiennent pas la thymine",
          "stepBadge": "Les bases de l'ARN ne contiennent pas la thymine",
          "paragraphText": "Piège de l'exercice 3 : lister la thymine parmi les bases de l'ARN.\nL'ARN contient l'adénine, l'uracile, la cytosine et la guanine ; la thymine appartient à l'ADN et est remplacée par l'uracile dans l'ARN.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces bases n'appartient pas à l'ARN ?",
            "options": [
              "L'adénine",
              "L'uracile",
              "La cytosine",
              "La thymine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Exercice 3, item 1 : les bonnes bases de l'ARN sont adénine, uracile, cytosine et guanine."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une protéine, assemblage d'acides aminés",
          "stepTheme": "Une protéine, assemblage d'acides aminés",
          "stepBadge": "Une protéine, assemblage d'acides aminés",
          "paragraphText": "Une protéine est une grosse molécule dont les sous-unités sont des acides aminés.\nNi glucose ni acides gras : les exercices de la leçon écartent explicitement ces deux confusions.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q6",
            "type": "mcq",
            "prompt": "Les sous-unités d'une protéine sont :",
            "options": [
              "Des glucoses",
              "Des acides gras",
              "Des acides aminés",
              "Des nucléotides uniquement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Exercice 2, item 2, proposition c."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q1",
          "type": "mcq",
          "prompt": "L'ADN est :",
          "options": [
            "Monocaténaire et cytoplasmique",
            "Bicaténaire et localisé dans le noyau",
            "Composé de deux sous-unités",
            "Un type d'ARN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de l'observation du schéma des acteurs."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q2",
          "type": "mcq",
          "prompt": "L'ARN est constitué de :",
          "options": [
            "Deux brins complémentaires",
            "Un seul brin",
            "Trois brins",
            "Deux sous-unités"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ARN est monocaténaire, à la différence de l'ADN bicaténaire."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q3",
          "type": "mcq",
          "prompt": "L'ARN qui diffère des autres par sa structure et sa forme est :",
          "options": [
            "L'ARN messager",
            "L'ARN ribosomial",
            "L'ARN de transfert",
            "L'ADN"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Précision donnée dans les résultats de la partie I."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q4",
          "type": "mcq",
          "prompt": "Le ribosome est composé de :",
          "options": [
            "Deux brins d'ADN",
            "Une petite et une grande sous-unité",
            "Trois types d'ARN uniquement",
            "Un seul élément indivisible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de la partie I pour le ribosome."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces bases n'appartient pas à l'ARN ?",
          "options": [
            "L'adénine",
            "L'uracile",
            "La cytosine",
            "La thymine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Exercice 3, item 1 : les bonnes bases de l'ARN sont adénine, uracile, cytosine et guanine."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p01_q6",
          "type": "mcq",
          "prompt": "Les sous-unités d'une protéine sont :",
          "options": [
            "Des glucoses",
            "Des acides gras",
            "Des acides aminés",
            "Des nucléotides uniquement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Exercice 2, item 2, proposition c."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l07_biosynthese_proteines_p02",
      "order": 2,
      "title": "Le code génétique : codons et acides aminés",
      "summary": "Définir le codon, compter les 64 codons et repérer les trois codons stop.",
      "conceptExplanation": "Le code génétique établit la correspondance entre les codons et les acides aminés. Il comprend des codons, associations de 3 bases (le texte dit 3 acides nucléiques), et une vingtaine d'acides aminés.\nChaque codon est formé de 3 des 4 bases représentées par les lettres U, C, G et A, disposées en première, deuxième ou troisième position. Le codon correspond à un triplet de nucléotides de l'ARNm.\nLe code génétique comporte 64 codons, dont 61 désignent un acide aminé défini. Les trois autres ne codent aucun acide aminé : ce sont les codons stop, ou codons non-sens, UAA, UAG et UGA.\nLa synthèse d'une protéine commence toujours par le codon AUG (méthionine), appelé codon initiateur.\nLe code génétique est le système de correspondance entre les codons de l'ARNm et les 20 acides aminés spécifiques nécessaires à la synthèse protéique.",
      "keyRule": "64 codons au total : 61 pour les 20 acides aminés, 3 codons stop (UAA, UAG, UGA) et un codon initiateur AUG pour démarrer.",
      "formulas": [],
      "workedExample": {
        "title": "Associer les notions du code génétique à leurs définitions (activité d'application)",
        "statement": "Associe chaque notion à sa définition : codon, codon initiateur, codon stop, code génétique redondant, anticodon.",
        "methodSteps": [
          "Codon : triplet de bases de l'ARNm.",
          "Codon initiateur : triplet de bases qui débute la synthèse protéique.",
          "Codon stop : triplet de bases n'ayant aucune correspondance en acide aminé.",
          "Code génétique redondant : existence de plusieurs codons pour un même acide aminé.",
          "Anticodon : triplet de bases complémentaire aux codons, porté par l'ARNt."
        ],
        "conclusion": "Les cinq associations de l'activité d'application, toutes tirées des définitions de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le codon, triplet de nucléotides",
          "stepTheme": "Le codon, triplet de nucléotides",
          "stepBadge": "Le codon, triplet de nucléotides",
          "paragraphText": "• Codon : triplet de bases de l'ARNm, formé de 3 des 4 bases U, C, G et A.\nLe mot codon désigne donc une séquence de 3 nucléotides constitutifs de l'ARN messager, et non de l'ARNt ou de l'ARNr.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q1",
            "type": "mcq",
            "prompt": "Le mot codon désigne une séquence de 3 nucléotides constitutifs :",
            "options": [
              "Du brin transcrit de l'ADN uniquement selon l'exercice",
              "De l'ARN ribosomal",
              "De l'ARN de transfert",
              "De l'ARN messager"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Exercice 3, item 2 : bonne réponse d, l'ARN messager."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'anticodon, porté par l'ARNt",
          "stepTheme": "L'anticodon, porté par l'ARNt",
          "stepBadge": "L'anticodon, porté par l'ARNt",
          "paragraphText": "• Anticodon : triplet de bases complémentaire aux codons, porté par l'ARNt.\nLe mot anticodon désigne donc une séquence de 3 nucléotides de l'ARN de transfert.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q2",
            "type": "mcq",
            "prompt": "Le mot anticodon désigne une séquence de 3 nucléotides :",
            "options": [
              "De l'ARN messager",
              "De l'ARN de transfert",
              "De l'ARN ribosomal",
              "Du brin non transcrit de l'ADN"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exercice 3, item 3 : bonne réponse c, l'ARN de transfert."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "64 codons, 61 sens et 3 stop",
          "stepTheme": "64 codons, 61 sens et 3 stop",
          "stepBadge": "64 codons, 61 sens et 3 stop",
          "paragraphText": "Le code génétique compte 64 codons au total.\n61 codons correspondent aux 20 acides aminés, et trois codons, UAA, UAG et UGA, ne correspondent à aucun acide aminé.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q3",
            "type": "mcq",
            "prompt": "Combien de codons compte le code génétique ?",
            "options": [
              "20 codons",
              "61 codons",
              "64 codons",
              "3 codons"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la partie II : 64 codons dont 61 sens et 3 stop."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les trois codons stop",
          "stepTheme": "Les trois codons stop",
          "stepBadge": "Les trois codons stop",
          "paragraphText": "Les codons UAA, UAG et UGA sont appelés codons stop ou codons non-sens.\nIls permettent d'arrêter la synthèse de la protéine, comme le rappelle le texte à compléter de l'exercice 1.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q4",
            "type": "mcq",
            "prompt": "Les codons stop sont :",
            "options": [
              "AUG, UAA et UGA",
              "UAA, UAG et UGA",
              "UUU, CCC et GGG",
              "AUG uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois codons cités à plusieurs reprises dans la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le codon initiateur n'est pas un codon stop",
          "stepTheme": "Le codon initiateur n'est pas un codon stop",
          "stepBadge": "Le codon initiateur n'est pas un codon stop",
          "paragraphText": "Piège : ranger AUG parmi les codons non-sens parce qu'il est cité en même temps qu'eux.\nAUG est le codon initiateur, qui correspond à la méthionine et débute toutes les synthèses protéiques.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q5",
            "type": "mcq",
            "prompt": "Le codon AUG est :",
            "options": [
              "Un codon stop",
              "Un codon non-sens",
              "Le codon initiateur, correspondant à la méthionine",
              "Un anticodon"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Interprétation de la partie II et exercice 1 : toutes les synthèses commencent par AUG, codon initiateur."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un seul codon pour la méthionine",
          "stepTheme": "Un seul codon pour la méthionine",
          "stepBadge": "Un seul codon pour la méthionine",
          "paragraphText": "La leçon donne la méthionine comme exemple d'acide aminé auquel un seul codon peut correspondre.\nÀ l'inverse, la leucine, la glutamine et l'isoleucine sont citées comme acides aminés à plusieurs codons.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q6",
            "type": "mcq",
            "prompt": "Selon l'analyse de la leçon, un seul codon peut correspondre à :",
            "options": [
              "La leucine",
              "La glutamine",
              "L'isoleucine",
              "La méthionine"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Analyse des résultats de la partie II : méthionine en exemple du cas à un seul codon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q1",
          "type": "mcq",
          "prompt": "Le mot codon désigne une séquence de 3 nucléotides constitutifs :",
          "options": [
            "Du brin transcrit de l'ADN uniquement selon l'exercice",
            "De l'ARN ribosomal",
            "De l'ARN de transfert",
            "De l'ARN messager"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Exercice 3, item 2 : bonne réponse d, l'ARN messager."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q2",
          "type": "mcq",
          "prompt": "Le mot anticodon désigne une séquence de 3 nucléotides :",
          "options": [
            "De l'ARN messager",
            "De l'ARN de transfert",
            "De l'ARN ribosomal",
            "Du brin non transcrit de l'ADN"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exercice 3, item 3 : bonne réponse c, l'ARN de transfert."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q3",
          "type": "mcq",
          "prompt": "Combien de codons compte le code génétique ?",
          "options": [
            "20 codons",
            "61 codons",
            "64 codons",
            "3 codons"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la partie II : 64 codons dont 61 sens et 3 stop."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q4",
          "type": "mcq",
          "prompt": "Les codons stop sont :",
          "options": [
            "AUG, UAA et UGA",
            "UAA, UAG et UGA",
            "UUU, CCC et GGG",
            "AUG uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois codons cités à plusieurs reprises dans la leçon."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q5",
          "type": "mcq",
          "prompt": "Le codon AUG est :",
          "options": [
            "Un codon stop",
            "Un codon non-sens",
            "Le codon initiateur, correspondant à la méthionine",
            "Un anticodon"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Interprétation de la partie II et exercice 1 : toutes les synthèses commencent par AUG, codon initiateur."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p02_q6",
          "type": "mcq",
          "prompt": "Selon l'analyse de la leçon, un seul codon peut correspondre à :",
          "options": [
            "La leucine",
            "La glutamine",
            "L'isoleucine",
            "La méthionine"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Analyse des résultats de la partie II : méthionine en exemple du cas à un seul codon."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l07_biosynthese_proteines_p03",
      "order": 3,
      "title": "Les propriétés du code génétique : redondant, non ambigu et universel",
      "summary": "Caractériser le code génétique : redondant, non ambigu et universel.",
      "conceptExplanation": "Plusieurs codons peuvent coder pour un même acide aminé : le code génétique est dit redondant. L'exercice 1 emploie aussi le terme dégénéré pour la même propriété : 20 acides aminés correspondent à 61 codons, donc plusieurs codons correspondent à un même acide aminé.\nUn codon ne correspond qu'à un seul et unique acide aminé : le code génétique est non ambigu, comme le montrent les bonnes propositions de l'exercice 2 (un codon code pour un acide aminé et un seul ; plusieurs codons codent pour un même acide aminé).\nLe code génétique est le même pour tous les organismes vivants : il est universel. L'exercice 1 précise qu'il permet à tous les êtres vivants de synthétiser leurs protéines.\nCes trois propriétés, redondant, non ambigu et universel, caractérisent le code génétique dans la leçon.",
      "keyRule": "Retiens le trio : redondant (plusieurs codons pour un acide aminé), non ambigu (un codon pour un seul acide aminé) et universel (le même pour tous les vivants).",
      "formulas": [],
      "workedExample": {
        "title": "Compléter le texte sur le code génétique (exercice 1)",
        "statement": "Complète : plusieurs codons correspondent à un même acide aminé, le code est dit dégénéré ou… ; un codon ne correspond qu'à un seul acide aminé, le code est dit… ; il permet à tous les êtres vivants de synthétiser leurs protéines, il est dit…",
        "methodSteps": [
          "Plusieurs codons pour un même acide aminé : le code est dégénéré ou redondant (mot 6 de la liste).",
          "Un codon pour un seul et unique acide aminé : le code est non ambigu (mot 7 de la liste).",
          "Valable pour tous les êtres vivants : le code est universel (mot 8 de la liste)."
        ],
        "conclusion": "Redondant, non ambigu, universel : les trois propriétés enchaînées dans le texte de l'exercice 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un code redondant",
          "stepTheme": "Un code redondant",
          "stepBadge": "Un code redondant",
          "paragraphText": "• Code génétique redondant : plusieurs codons peuvent coder pour un même acide aminé.\nL'exercice 1 dit aussi dégénéré : 61 codons sens pour seulement 20 acides aminés.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q1",
            "type": "mcq",
            "prompt": "Le code génétique est dit redondant parce que :",
            "options": [
              "Chaque acide aminé a exactement un codon",
              "Plusieurs codons peuvent coder pour un même acide aminé",
              "Les codons stop sont nombreux",
              "Il change selon les espèces"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie II."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Un code non ambigu",
          "stepTheme": "Un code non ambigu",
          "stepBadge": "Un code non ambigu",
          "paragraphText": "Un codon ne correspond qu'à un seul et unique acide aminé.\nLe texte de l'exercice 1 en déduit que le code génétique est non ambigu : aucun codon n'hésite entre deux acides aminés.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q2",
            "type": "mcq",
            "prompt": "Le code génétique est non ambigu parce que :",
            "options": [
              "Un acide aminé a plusieurs codons",
              "Un codon ne correspond qu'à un seul et unique acide aminé",
              "Les codons stop codent parfois un acide aminé",
              "Il est différent chez chaque espèce"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Texte à compléter de l'exercice 1, proposition 7."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Un code universel",
          "stepTheme": "Un code universel",
          "stepBadge": "Un code universel",
          "paragraphText": "Le code génétique est le même pour tous les organismes vivants.\nLa leçon le dit universel : il permet à tous les êtres vivants de synthétiser leurs protéines avec les mêmes correspondances.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q3",
            "type": "mcq",
            "prompt": "Le code génétique est universel car :",
            "options": [
              "Il est propre à l'Homme",
              "Il est le même pour tous les organismes vivants",
              "Il ne sert qu'aux bactéries",
              "Il change à chaque génération"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dernière propriété listée dans l'interprétation de la partie II."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "20 acides aminés pour 61 codons sens",
          "stepTheme": "20 acides aminés pour 61 codons sens",
          "stepBadge": "20 acides aminés pour 61 codons sens",
          "paragraphText": "Le tableau du code génétique compte 20 acides aminés correspondant aux 61 codons restants après retrait des 3 codons stop.\nC'est ce déséquilibre qui rend le code redondant.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q4",
            "type": "mcq",
            "prompt": "Les 61 codons sens correspondent à combien d'acides aminés ?",
            "options": [
              "64 acides aminés",
              "61 acides aminés",
              "20 acides aminés",
              "3 acides aminés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Exercice 1 : le tableau compte 20 acides aminés correspondant aux 61 codons restants."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Redondant ne veut pas dire ambigu",
          "stepTheme": "Redondant ne veut pas dire ambigu",
          "stepBadge": "Redondant ne veut pas dire ambigu",
          "paragraphText": "Piège : confondre les deux sens de lecture du code.\nPlusieurs codons vers un même acide aminé, c'est la redondance ; un codon vers plusieurs acides aminés serait l'ambiguïté, que le code n'a pas.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q5",
            "type": "mcq",
            "prompt": "Pendant la traduction, la bonne proposition de l'exercice 2 est :",
            "options": [
              "Chaque acide aminé est codé par un codon et un seul, sans exception",
              "Un codon code pour un acide aminé et un seul, et plusieurs codons codent pour un même acide aminé",
              "Un codon code pour trois acides aminés",
              "Les codons stop codent la méthionine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exercice 2, item 4 : bonnes propositions a et c, qui combinent non-ambiguïté et redondance."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Leucine, glutamine et isoleucine à plusieurs codons",
          "stepTheme": "Leucine, glutamine et isoleucine à plusieurs codons",
          "stepBadge": "Leucine, glutamine et isoleucine à plusieurs codons",
          "paragraphText": "La leçon cite la leucine, la glutamine et l'isoleucine comme exemples d'acides aminés auxquels plusieurs codons peuvent correspondre.\nCe sont des illustrations concrètes de la redondance du code.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q6",
            "type": "mcq",
            "prompt": "Lequel de ces acides aminés est cité comme ayant plusieurs codons ?",
            "options": [
              "La méthionine",
              "La leucine",
              "Aucun, tous ont un seul codon",
              "Uniquement les codons stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des résultats de la partie II : leucine, glutamine, isoleucine."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q1",
          "type": "mcq",
          "prompt": "Le code génétique est dit redondant parce que :",
          "options": [
            "Chaque acide aminé a exactement un codon",
            "Plusieurs codons peuvent coder pour un même acide aminé",
            "Les codons stop sont nombreux",
            "Il change selon les espèces"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie II."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q2",
          "type": "mcq",
          "prompt": "Le code génétique est non ambigu parce que :",
          "options": [
            "Un acide aminé a plusieurs codons",
            "Un codon ne correspond qu'à un seul et unique acide aminé",
            "Les codons stop codent parfois un acide aminé",
            "Il est différent chez chaque espèce"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Texte à compléter de l'exercice 1, proposition 7."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q3",
          "type": "mcq",
          "prompt": "Le code génétique est universel car :",
          "options": [
            "Il est propre à l'Homme",
            "Il est le même pour tous les organismes vivants",
            "Il ne sert qu'aux bactéries",
            "Il change à chaque génération"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dernière propriété listée dans l'interprétation de la partie II."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q4",
          "type": "mcq",
          "prompt": "Les 61 codons sens correspondent à combien d'acides aminés ?",
          "options": [
            "64 acides aminés",
            "61 acides aminés",
            "20 acides aminés",
            "3 acides aminés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Exercice 1 : le tableau compte 20 acides aminés correspondant aux 61 codons restants."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q5",
          "type": "mcq",
          "prompt": "Pendant la traduction, la bonne proposition de l'exercice 2 est :",
          "options": [
            "Chaque acide aminé est codé par un codon et un seul, sans exception",
            "Un codon code pour un acide aminé et un seul, et plusieurs codons codent pour un même acide aminé",
            "Un codon code pour trois acides aminés",
            "Les codons stop codent la méthionine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exercice 2, item 4 : bonnes propositions a et c, qui combinent non-ambiguïté et redondance."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p03_q6",
          "type": "mcq",
          "prompt": "Lequel de ces acides aminés est cité comme ayant plusieurs codons ?",
          "options": [
            "La méthionine",
            "La leucine",
            "Aucun, tous ont un seul codon",
            "Uniquement les codons stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des résultats de la partie II : leucine, glutamine, isoleucine."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l07_biosynthese_proteines_p04",
      "order": 4,
      "title": "La transcription : de l'ADN à l'ARN messager dans le noyau",
      "summary": "Décrire la transcription de l'ADN en ARNm, le gène et le rôle des polymérases selon la leçon.",
      "conceptExplanation": "La biosynthèse des protéines se déroule en deux grandes étapes : la transcription et la traduction. La transcription se déroule dans le noyau : il y a formation de l'ARNm à partir de l'ADN. La molécule d'ADN s'ouvre localement au niveau de la portion d'information dont la cellule a besoin.\nCe morceau de l'ADN, qui correspond à une information génétique particulière codant pour une protéine unique, est appelé le gène : c'est une très petite portion de chromosome.\nEnsuite, l'enzyme se déplace le long de la portion du brin d'ADN portant l'information génétique visée, en incorporant les nucléotides libres (précurseurs) par complémentarité avec le brin d'ADN qui sert de matrice. Il se forme ainsi l'ARN messager. Au niveau du brin d'ARN, l'uracile (U) remplace la thymine (T). On dit alors que l'ADN est transcrit en ARNm.\nLe brin d'ADN servant de matrice est appelé brin codant, ou brin transcrit, ou brin informatif, et l'autre brin est le brin non transcrit, selon les termes de la leçon. La leçon attribue la transcription à l'ADN polymérase dans sa première phrase, puis décrit le déplacement de l'ARN polymérase le long du brin : les deux noms apparaissent dans le texte.\nAprès sa synthèse dans le noyau, l'ARNm sort du noyau vers le cytoplasme, où aura lieu la traduction.",
      "keyRule": "Transcription dans le noyau : l'ADN s'ouvre sur un gène, un brin sert de matrice, l'ARNm se forme par complémentarité avec U à la place de T, puis sort du noyau.",
      "formulas": [],
      "workedExample": {
        "title": "De l'albinisme à la séquence transcrite (situation d'évaluation, exercice 1)",
        "statement": "On donne la séquence d'un brin codant d'ADN : TAC ACG CGA TTT TAT GTA. Quelles sont les deux premières productions demandées avant la traduction ?",
        "methodSteps": [
          "On représente d'abord la séquence correspondante du brin d'ADN complémentaire, par complémentarité des bases.",
          "On représente ensuite la séquence transcrite en ARN messager, avec l'uracile à la place de la thymine.",
          "Ces deux étapes préparent la troisième : la séquence des acides aminés de la protéine traduite à partir de l'ARNm."
        ],
        "conclusion": "Brin complémentaire, puis ARNm, puis protéine : l'enchaînement transcription puis traduction de l'exercice."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le gène",
          "stepTheme": "Le gène",
          "stepBadge": "Le gène",
          "paragraphText": "• Gène : morceau de l'ADN correspondant à une information génétique particulière, qui code pour une protéine unique.\nLa leçon précise que c'est une très petite portion de chromosome.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q1",
            "type": "mcq",
            "prompt": "Un gène est :",
            "options": [
              "Une protéine du ribosome",
              "Un morceau d'ADN codant pour une protéine unique, très petite portion de chromosome",
              "Un type d'ARNt",
              "Un codon stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie III, paragraphe sur la transcription."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La transcription a lieu dans le noyau",
          "stepTheme": "La transcription a lieu dans le noyau",
          "stepBadge": "La transcription a lieu dans le noyau",
          "paragraphText": "La transcription de l'ADN en ARN messager se déroule dans le noyau de la cellule.\nC'est là que l'ADN, localisé dans le noyau, s'ouvre localement sur la portion utile.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q2",
            "type": "mcq",
            "prompt": "La transcription se déroule :",
            "options": [
              "Dans le cytoplasme, au niveau du ribosome",
              "Dans le noyau",
              "Dans le liquide amniotique",
              "Uniquement chez les bactéries"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Analyse des résultats de la partie III ; l'exercice 2 écarte l'idée d'une transcription dans l'hyaloplasme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'uracile remplace la thymine",
          "stepTheme": "L'uracile remplace la thymine",
          "stepBadge": "L'uracile remplace la thymine",
          "paragraphText": "Au niveau du brin d'ARN formé, l'uracile (U) remplace la thymine (T) de l'ADN.\nC'est la différence de bases à appliquer quand on transcrit une séquence.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q3",
            "type": "mcq",
            "prompt": "Dans l'ARNm formé, la thymine de l'ADN est remplacée par :",
            "options": [
              "L'adénine",
              "La cytosine",
              "La guanine",
              "L'uracile"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Phrase exacte de l'interprétation sur la transcription."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Un brin matrice et la complémentarité",
          "stepTheme": "Un brin matrice et la complémentarité",
          "stepBadge": "Un brin matrice et la complémentarité",
          "paragraphText": "Méthode de la transcription : l'enzyme se déplace le long du brin d'ADN portant l'information, en incorporant les nucléotides libres par complémentarité avec le brin matrice.\nIl se forme ainsi progressivement l'ARN messager.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q4",
            "type": "mcq",
            "prompt": "Pendant la transcription, les nucléotides libres sont incorporés :",
            "options": [
              "Au hasard, sans modèle",
              "Par complémentarité avec le brin d'ADN qui sert de matrice",
              "Uniquement par le ribosome",
              "Après la traduction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie III."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "La transcription précède la traduction",
          "stepTheme": "La transcription précède la traduction",
          "stepBadge": "La transcription précède la traduction",
          "paragraphText": "Piège de l'exercice 2 : inverser l'ordre des deux grandes étapes.\nLa bonne proposition est que la transcription précède la traduction ; l'inverse est faux.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q5",
            "type": "mcq",
            "prompt": "Dans la synthèse des protéines :",
            "options": [
              "La traduction précède la transcription",
              "La transcription précède la traduction",
              "Les deux étapes sont simultanées dans le noyau",
              "La traduction se fait sans ARNm"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Exercice 2, item 3, proposition a."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'ARNm sort du noyau",
          "stepTheme": "L'ARNm sort du noyau",
          "stepBadge": "L'ARNm sort du noyau",
          "paragraphText": "Les résultats du schéma des étapes montrent la sortie de l'ARNm du noyau après sa synthèse.\nLa synthèse de la protéine se fait ensuite dans le cytoplasme, au niveau du ribosome.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q6",
            "type": "mcq",
            "prompt": "Après la transcription, l'ARNm :",
            "options": [
              "Reste définitivement dans le noyau",
              "Sort du noyau vers le cytoplasme",
              "Se transforme en ADN",
              "Est détruit par les codons stop"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats de l'observation du schéma des étapes de la biosynthèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q1",
          "type": "mcq",
          "prompt": "Un gène est :",
          "options": [
            "Une protéine du ribosome",
            "Un morceau d'ADN codant pour une protéine unique, très petite portion de chromosome",
            "Un type d'ARNt",
            "Un codon stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie III, paragraphe sur la transcription."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q2",
          "type": "mcq",
          "prompt": "La transcription se déroule :",
          "options": [
            "Dans le cytoplasme, au niveau du ribosome",
            "Dans le noyau",
            "Dans le liquide amniotique",
            "Uniquement chez les bactéries"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Analyse des résultats de la partie III ; l'exercice 2 écarte l'idée d'une transcription dans l'hyaloplasme."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q3",
          "type": "mcq",
          "prompt": "Dans l'ARNm formé, la thymine de l'ADN est remplacée par :",
          "options": [
            "L'adénine",
            "La cytosine",
            "La guanine",
            "L'uracile"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Phrase exacte de l'interprétation sur la transcription."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q4",
          "type": "mcq",
          "prompt": "Pendant la transcription, les nucléotides libres sont incorporés :",
          "options": [
            "Au hasard, sans modèle",
            "Par complémentarité avec le brin d'ADN qui sert de matrice",
            "Uniquement par le ribosome",
            "Après la traduction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie III."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q5",
          "type": "mcq",
          "prompt": "Dans la synthèse des protéines :",
          "options": [
            "La traduction précède la transcription",
            "La transcription précède la traduction",
            "Les deux étapes sont simultanées dans le noyau",
            "La traduction se fait sans ARNm"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Exercice 2, item 3, proposition a."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p04_q6",
          "type": "mcq",
          "prompt": "Après la transcription, l'ARNm :",
          "options": [
            "Reste définitivement dans le noyau",
            "Sort du noyau vers le cytoplasme",
            "Se transforme en ADN",
            "Est détruit par les codons stop"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats de l'observation du schéma des étapes de la biosynthèse."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l07_biosynthese_proteines_p05",
      "order": 5,
      "title": "La traduction : initiation et élongation dans le cytoplasme",
      "summary": "Décrire l'initiation au codon AUG et l'élongation avec les ARNt, les sites P et A et la liaison peptidique.",
      "conceptExplanation": "La traduction a lieu dans le cytoplasme, à partir de l'ARNm, et fait intervenir les ARNt et les ribosomes. Elle se déroule en trois étapes : initiation, élongation et terminaison.\nInitiation : le premier codon est toujours AUG (codon initiateur), qui correspond à la méthionine. La petite sous-unité du ribosome et un ARNt se lient à une extrémité de l'ARNm portant le codon initiateur. Cet ARNt porte la méthionine et un anticodon complémentaire au codon initiateur AUG. Il se positionne sur le site P du ribosome.\nÉlongation : un nouveau ARNt se place au site A du ribosome, en face du deuxième codon de l'ARNm. Son anticodon est complémentaire à ce deuxième codon et l'acide aminé qu'il porte correspond à ce codon selon le code génétique. Une liaison peptidique s'établit entre les deux acides aminés.\nLe premier ARNt, déchargé de son acide aminé, est libéré. Le ribosome se déplace de telle sorte que son site P soit occupé par le deuxième ARNt et que son site A soit libre. Une nouvelle molécule d'ARNt vient se placer comme précédemment, et ainsi de suite : la chaîne polypeptidique s'allonge.",
      "keyRule": "Initiation sur AUG au site P avec la méthionine, puis élongation : ARNt au site A, liaison peptidique, libération de l'ARNt vide et déplacement du ribosome.",
      "formulas": [],
      "workedExample": {
        "title": "Suivre les deux premiers acides aminés (mécanisme de la leçon)",
        "statement": "Décris l'enchaînement qui relie le premier acide aminé au deuxième pendant la traduction.",
        "methodSteps": [
          "L'ARNt porteur de la méthionine, avec un anticodon complémentaire de AUG, se positionne sur le site P.",
          "Un nouveau ARNt se place au site A, en face du deuxième codon, avec un anticodon complémentaire.",
          "Une liaison peptidique s'établit entre les deux acides aminés.",
          "Le premier ARNt déchargé est libéré et le ribosome se déplace, laissant le site A libre pour l'ARNt suivant."
        ],
        "conclusion": "C'est le cycle de l'élongation décrit dans l'interprétation de la partie III."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'initiation de la traduction",
          "stepTheme": "L'initiation de la traduction",
          "stepBadge": "L'initiation de la traduction",
          "paragraphText": "• Initiation : première étape de la traduction, au niveau du codon initiateur AUG.\nLa petite sous-unité du ribosome et un ARNt porteur de méthionine se lient à l'ARNm.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q1",
            "type": "mcq",
            "prompt": "L'initiation commence toujours par le codon :",
            "options": [
              "UAA",
              "UAG",
              "AUG",
              "UGA"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le premier codon est toujours AUG, codon initiateur correspondant à la méthionine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le site P accueille le premier ARNt",
          "stepTheme": "Le site P accueille le premier ARNt",
          "stepBadge": "Le site P accueille le premier ARNt",
          "paragraphText": "L'ARNt de la méthionine se positionne sur le site P du ribosome pendant l'initiation.\nSon anticodon est complémentaire du codon initiateur AUG.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q2",
            "type": "mcq",
            "prompt": "Le premier ARNt, porteur de la méthionine, se positionne sur :",
            "options": [
              "Le site A",
              "Le site P",
              "Le noyau",
              "Le brin d'ADN matrice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie III, paragraphe sur l'initiation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le site A reçoit l'ARNt suivant",
          "stepTheme": "Le site A reçoit l'ARNt suivant",
          "stepBadge": "Le site A reçoit l'ARNt suivant",
          "paragraphText": "Pendant l'élongation, un nouveau ARNt se place au site A du ribosome, en face du deuxième codon de l'ARNm.\nSon acide aminé correspond à ce codon selon le code génétique.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q3",
            "type": "mcq",
            "prompt": "Pendant l'élongation, le nouvel ARNt se place :",
            "options": [
              "Au site A, en face du codon suivant",
              "Au site P déjà occupé définitivement",
              "Dans le noyau",
              "Sur l'ADN"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Interprétation de la partie III, paragraphe sur l'élongation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La liaison peptidique relie les acides aminés",
          "stepTheme": "La liaison peptidique relie les acides aminés",
          "stepBadge": "La liaison peptidique relie les acides aminés",
          "paragraphText": "Méthode : à chaque arrivée d'un ARNt au site A, une liaison peptidique s'établit entre les acides aminés présents.\nLa chaîne grandit ainsi acide aminé après acide aminé, dans l'ordre des codons de l'ARNm.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q4",
            "type": "mcq",
            "prompt": "Entre les deux acides aminés rapprochés par le ribosome, il s'établit :",
            "options": [
              "Une liaison entre deux codons stop",
              "Une liaison peptidique",
              "Une molécule d'ADN nouvelle",
              "Un anticodon libre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le geste central de l'élongation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'ARNt libéré est celui qui est déchargé",
          "stepTheme": "L'ARNt libéré est celui qui est déchargé",
          "stepBadge": "L'ARNt libéré est celui qui est déchargé",
          "paragraphText": "Piège : croire que le ribosome garde tous les ARNt jusqu'à la fin.\nLe premier ARNt, déchargé de son acide aminé, est libéré ; le ribosome se déplace pour que le site P soit occupé par le deuxième ARNt et le site A libre.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q5",
            "type": "mcq",
            "prompt": "Après la liaison peptidique, le premier ARNt :",
            "options": [
              "Apporte un nouvel acide aminé",
              "Est déchargé de son acide aminé et libéré",
              "Retourne dans le noyau",
              "Devient un ribosome"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie III : le premier ARNt déchargé est libéré."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La traduction se fait dans le cytoplasme",
          "stepTheme": "La traduction se fait dans le cytoplasme",
          "stepBadge": "La traduction se fait dans le cytoplasme",
          "paragraphText": "La synthèse de la protéine se fait dans le cytoplasme, au niveau du ribosome, à partir de l'ARNm sorti du noyau.\nElle fait intervenir les ARNt et les ribosomes, selon l'analyse des résultats.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q6",
            "type": "mcq",
            "prompt": "La traduction a lieu :",
            "options": [
              "Dans le noyau",
              "Dans le cytoplasme, au niveau du ribosome",
              "Dans les villosités choriales",
              "Uniquement dans les mitochondries selon la leçon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Résultats et analyse de la partie III."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q1",
          "type": "mcq",
          "prompt": "L'initiation commence toujours par le codon :",
          "options": [
            "UAA",
            "UAG",
            "AUG",
            "UGA"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le premier codon est toujours AUG, codon initiateur correspondant à la méthionine."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q2",
          "type": "mcq",
          "prompt": "Le premier ARNt, porteur de la méthionine, se positionne sur :",
          "options": [
            "Le site A",
            "Le site P",
            "Le noyau",
            "Le brin d'ADN matrice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie III, paragraphe sur l'initiation."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q3",
          "type": "mcq",
          "prompt": "Pendant l'élongation, le nouvel ARNt se place :",
          "options": [
            "Au site A, en face du codon suivant",
            "Au site P déjà occupé définitivement",
            "Dans le noyau",
            "Sur l'ADN"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Interprétation de la partie III, paragraphe sur l'élongation."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q4",
          "type": "mcq",
          "prompt": "Entre les deux acides aminés rapprochés par le ribosome, il s'établit :",
          "options": [
            "Une liaison entre deux codons stop",
            "Une liaison peptidique",
            "Une molécule d'ADN nouvelle",
            "Un anticodon libre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le geste central de l'élongation."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q5",
          "type": "mcq",
          "prompt": "Après la liaison peptidique, le premier ARNt :",
          "options": [
            "Apporte un nouvel acide aminé",
            "Est déchargé de son acide aminé et libéré",
            "Retourne dans le noyau",
            "Devient un ribosome"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie III : le premier ARNt déchargé est libéré."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p05_q6",
          "type": "mcq",
          "prompt": "La traduction a lieu :",
          "options": [
            "Dans le noyau",
            "Dans le cytoplasme, au niveau du ribosome",
            "Dans les villosités choriales",
            "Uniquement dans les mitochondries selon la leçon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Résultats et analyse de la partie III."
        }
      ]
    },
    {
      "id": "terminale_a1_svt_l07_biosynthese_proteines_p06",
      "order": 6,
      "title": "La terminaison et l'expression des caractères",
      "summary": "Décrire l'arrêt de la traduction au codon stop et relier protéines synthétisées et caractères déterminés par les gènes.",
      "conceptExplanation": "La traduction s'arrête lorsque le ribosome rencontre un codon non-sens, ou codon stop, codon ne correspondant à aucun acide aminé.\nIl se produit alors une dissociation entre l'ARNm et la chaîne polypeptidique : la protéine formée est libérée.\nLa synthèse des protéines se fait donc selon un mécanisme particulier comprenant deux grandes étapes, la transcription et la traduction.\nConclusion générale : la cellule synthétise ses protéines à partir des acides aminés, grâce à des acteurs et selon un mécanisme qui s'appuie sur un code génétique universel. Les protéines synthétisées contribuent à l'expression des caractères déterminés par les gènes, portions d'ADN.\nLa situation d'évaluation sur l'ocytocine et la vasopressine illustre ce lien : deux portions d'ADN très proches donnent deux chaînes polypeptidiques d'hormones très proches, dont la différence s'explique par leurs séquences.",
      "keyRule": "Au codon stop, ARNm et chaîne polypeptidique se séparent ; la protéine obtenue exprime le caractère déterminé par son gène.",
      "formulas": [],
      "workedExample": {
        "title": "Ocytocine et vasopressine, deux hormones très proches (situation d'évaluation)",
        "statement": "Deux portions du brin non codant de l'ADN codent pour l'ocytocine et la vasopressine. Quelles sont les trois tâches demandées pour les comparer ?",
        "methodSteps": [
          "Élaborer le brin codant de chaque ADN, par complémentarité avec le brin non codant donné.",
          "Déterminer les deux chaînes polypeptidiques, en passant par l'ARNm et le code génétique.",
          "Expliquer la différence entre les deux molécules à partir des différences de leurs séquences."
        ],
        "conclusion": "Deux séquences d'ADN voisines donnent deux hormones voisines : la différence des protéines s'explique par la différence des séquences."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La terminaison de la traduction",
          "stepTheme": "La terminaison de la traduction",
          "stepBadge": "La terminaison de la traduction",
          "paragraphText": "• Terminaison : troisième étape de la traduction, déclenchée par la rencontre d'un codon stop.\nIl se produit une dissociation entre l'ARNm et la chaîne polypeptidique.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q1",
            "type": "mcq",
            "prompt": "La traduction s'arrête lorsque le ribosome rencontre :",
            "options": [
              "Le codon AUG",
              "Un codon non-sens, ou codon stop",
              "Un nouvel ARNt au site A",
              "Le brin non transcrit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Interprétation de la partie III, paragraphe sur la terminaison."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La dissociation finale",
          "stepTheme": "La dissociation finale",
          "stepBadge": "La dissociation finale",
          "paragraphText": "À la terminaison, l'ARNm et la chaîne polypeptidique se séparent.\nLa protéine ainsi achevée quitte le ribosome, prête à jouer son rôle dans la cellule.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q2",
            "type": "mcq",
            "prompt": "À la terminaison, il se produit :",
            "options": [
              "Une association définitive entre ARNm et protéine",
              "Une dissociation entre l'ARNm et la chaîne polypeptidique",
              "Une nouvelle transcription",
              "La formation d'un gène"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Phrase exacte de l'interprétation sur la terminaison."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Deux grandes étapes au total",
          "stepTheme": "Deux grandes étapes au total",
          "stepBadge": "Deux grandes étapes au total",
          "paragraphText": "Le mécanisme complet de la biosynthèse comprend deux grandes étapes.\nLa transcription, dans le noyau, puis la traduction, dans le cytoplasme, elle-même en initiation, élongation et terminaison.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q3",
            "type": "mcq",
            "prompt": "La biosynthèse des protéines comprend deux grandes étapes :",
            "options": [
              "Initiation et terminaison",
              "Transcription et traduction",
              "Élongation et dissociation",
              "Codon et anticodon"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conclusion de la partie III."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Relire le mécanisme dans l'ordre",
          "stepTheme": "Relire le mécanisme dans l'ordre",
          "stepBadge": "Relire le mécanisme dans l'ordre",
          "paragraphText": "Méthode de synthèse : replacer chaque événement à sa place.\nARNm formé dans le noyau, sortie du noyau, initiation sur AUG, élongation codon par codon, terminaison au codon stop.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q4",
            "type": "mcq",
            "prompt": "L'ordre correct du mécanisme est :",
            "options": [
              "Traduction puis transcription",
              "Terminaison, initiation, élongation",
              "Transcription, puis traduction avec initiation, élongation et terminaison",
              "Transcription seule, sans traduction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'enchaînement décrit dans toute la partie III."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un codon stop ne reçoit aucun ARNt d'acide aminé",
          "stepTheme": "Un codon stop ne reçoit aucun ARNt d'acide aminé",
          "stepBadge": "Un codon stop ne reçoit aucun ARNt d'acide aminé",
          "paragraphText": "Piège : attendre un acide aminé supplémentaire au niveau du codon stop.\nPar définition, ce codon ne correspond à aucun acide aminé : aucun ARNt ne vient y déposer d'acide aminé, et la chaîne se termine.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q5",
            "type": "mcq",
            "prompt": "Au niveau d'un codon stop, il arrive :",
            "options": [
              "Un ARNt porteur de méthionine",
              "Aucun acide aminé, car ce codon ne correspond à aucun acide aminé",
              "Trois acides aminés à la fois",
              "Un brin d'ADN nouveau"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition même du codon stop, rappelée dans la terminaison."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les protéines expriment les caractères des gènes",
          "stepTheme": "Les protéines expriment les caractères des gènes",
          "stepBadge": "Les protéines expriment les caractères des gènes",
          "paragraphText": "La conclusion générale relie la synthèse protéique à l'hérédité des caractères.\nLes protéines synthétisées contribuent à l'expression des caractères déterminés par les gènes, qui sont des portions d'ADN.",
          "exercise": {
            "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q6",
            "type": "mcq",
            "prompt": "Selon la conclusion générale, les protéines synthétisées contribuent à :",
            "options": [
              "La formation des codons stop",
              "L'expression des caractères déterminés par les gènes",
              "La disparition des ribosomes",
              "La création de nouveaux chromosomes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dernière phrase de la conclusion générale de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q1",
          "type": "mcq",
          "prompt": "La traduction s'arrête lorsque le ribosome rencontre :",
          "options": [
            "Le codon AUG",
            "Un codon non-sens, ou codon stop",
            "Un nouvel ARNt au site A",
            "Le brin non transcrit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Interprétation de la partie III, paragraphe sur la terminaison."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q2",
          "type": "mcq",
          "prompt": "À la terminaison, il se produit :",
          "options": [
            "Une association définitive entre ARNm et protéine",
            "Une dissociation entre l'ARNm et la chaîne polypeptidique",
            "Une nouvelle transcription",
            "La formation d'un gène"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Phrase exacte de l'interprétation sur la terminaison."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q3",
          "type": "mcq",
          "prompt": "La biosynthèse des protéines comprend deux grandes étapes :",
          "options": [
            "Initiation et terminaison",
            "Transcription et traduction",
            "Élongation et dissociation",
            "Codon et anticodon"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conclusion de la partie III."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q4",
          "type": "mcq",
          "prompt": "L'ordre correct du mécanisme est :",
          "options": [
            "Traduction puis transcription",
            "Terminaison, initiation, élongation",
            "Transcription, puis traduction avec initiation, élongation et terminaison",
            "Transcription seule, sans traduction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'enchaînement décrit dans toute la partie III."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q5",
          "type": "mcq",
          "prompt": "Au niveau d'un codon stop, il arrive :",
          "options": [
            "Un ARNt porteur de méthionine",
            "Aucun acide aminé, car ce codon ne correspond à aucun acide aminé",
            "Trois acides aminés à la fois",
            "Un brin d'ADN nouveau"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition même du codon stop, rappelée dans la terminaison."
        },
        {
          "id": "terminale_a1_svt_l07_biosynthese_proteines_p06_q6",
          "type": "mcq",
          "prompt": "Selon la conclusion générale, les protéines synthétisées contribuent à :",
          "options": [
            "La formation des codons stop",
            "L'expression des caractères déterminés par les gènes",
            "La disparition des ribosomes",
            "La création de nouveaux chromosomes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dernière phrase de la conclusion générale de la leçon."
        }
      ]
    }
  ]
};
