import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La méthode de lecture de texte » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3720
export const PHILO_1ERE_L01_LECTURE_TEXTE: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l01_lecture_texte",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 1,
  "title": "Leçon 1 : La méthode de lecture de texte",
  "summary": "La leçon présente la méthode de lecture de texte en quatre étapes : explication littérale, problématique, explication méthodique et critique du texte.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3720",
  "points": [
    {
      "id": "premiere_philo_methodologie_l01_lecture_texte_p01",
      "order": 1,
      "title": "Présenter la méthode de lecture de texte",
      "summary": "Définir la méthode de lecture de texte et connaître ses quatre étapes.",
      "conceptExplanation": "La méthode de lecture de texte est un ensemble de techniques ou de procédés permettant de dégager le sens d’un texte.\nElle comprend quatre étapes : l’explication littérale, la problématique du texte, l’explication méthodique du texte et la critique du texte.\nLa situation d’apprentissage de la leçon est celle des élèves de la Première A3 du Lycée Moderne de Grand-Bassam qui, en début d’année scolaire, découvrent cette méthode dans leur programme et cherchent à la connaître et à l’appliquer à un texte.",
      "keyRule": "Retiens les quatre étapes dans l’ordre : explication littérale, problématique, explication méthodique, critique.",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer la méthode au texte d’Epictète",
        "statement": "Les élèves de Première A3 veulent appliquer la méthode de lecture au texte d’Epictète sur le philosophe malpropre. Quelles sont les quatre opérations à mener, dans l’ordre ?",
        "methodSteps": [
          "Première étape : procéder à l’explication littérale du texte.",
          "Deuxième étape : dégager la problématique du texte à l’aide de la grille de lecture.",
          "Troisième étape : procéder à l’explication méthodique du texte.",
          "Quatrième étape : faire la critique du texte, c’est-à-dire évaluer son intérêt."
        ],
        "conclusion": "La méthode est un parcours ordonné en quatre étapes, de l’explication littérale à la critique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une méthode pour dégager le sens",
          "stepTheme": "Une méthode pour dégager le sens",
          "stepBadge": "Une méthode pour dégager le sens",
          "paragraphText": "• Méthode de lecture de texte : ensemble de techniques ou de procédés permettant de dégager le sens d’un texte.\nElle ne se réduit pas à une simple lecture : elle organise le travail sur le texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q1",
            "type": "mcq",
            "prompt": "La méthode de lecture de texte est définie comme :",
            "options": [
              "Un résumé du texte en quelques lignes",
              "Un ensemble de techniques ou de procédés permettant de dégager le sens d’un texte",
              "Une prise de position personnelle sur l’auteur",
              "Une liste de citations à apprendre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée au début de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Quatre étapes",
          "stepTheme": "Quatre étapes",
          "stepBadge": "Quatre étapes",
          "paragraphText": "La méthode comprend quatre étapes.\n• L’explication littérale\n• La problématique du texte\n• L’explication méthodique du texte\n• La critique du texte",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q2",
            "type": "mcq",
            "prompt": "Combien d’étapes comprend la méthode de lecture de texte ?",
            "options": [
              "Deux étapes",
              "Trois étapes",
              "Quatre étapes",
              "Cinq étapes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Explication littérale, problématique, explication méthodique et critique : quatre étapes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "L’ordre des étapes",
          "stepTheme": "L’ordre des étapes",
          "stepBadge": "L’ordre des étapes",
          "paragraphText": "Méthode : suivre l’ordre des étapes, de l’explication littérale à la critique.\nOn ne peut critiquer un texte dont on n’a pas d’abord dégagé le sens par les étapes précédentes.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la première étape de la méthode ?",
            "options": [
              "La critique du texte",
              "L’explication méthodique",
              "La problématique",
              "L’explication littérale"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’explication littérale vient en premier, avant la problématique, l’explication méthodique et la critique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La situation d’apprentissage",
          "stepTheme": "La situation d’apprentissage",
          "stepBadge": "La situation d’apprentissage",
          "paragraphText": "Dans la situation d’apprentissage, les élèves de la Première A3 du Lycée Moderne de Grand-Bassam découvrent la méthode de lecture de texte dans leur programme.\nIls cherchent à la connaître et à l’appliquer à un texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q4",
            "type": "mcq",
            "prompt": "Dans la situation d’apprentissage, les élèves cherchent à :",
            "options": [
              "Connaître la méthode de lecture et l’appliquer à un texte",
              "Rédiger une dissertation",
              "Apprendre le texte par cœur",
              "Critiquer l’auteur sans lire le texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La situation précise l’objectif : connaître la méthode et l’appliquer à un texte."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre lecture et méthode",
          "stepTheme": "Confondre lecture et méthode",
          "stepBadge": "Confondre lecture et méthode",
          "paragraphText": "Piège : croire que lire le texte une fois suffit.\nL’explication littérale elle-même suppose, selon la leçon, d’avoir numéroté les lignes et procédé à la lecture du texte à plusieurs reprises.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, avant l’explication littérale, il faut :",
            "options": [
              "Rédiger la conclusion du commentaire",
              "Numéroter les lignes du texte et le lire à plusieurs reprises",
              "Confronter l’auteur à d’autres auteurs",
              "Formuler son opinion personnelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Numérotation des lignes et lectures répétées préparent l’explication littérale."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le texte d’Epictète comme support",
          "stepTheme": "Le texte d’Epictète comme support",
          "stepBadge": "Le texte d’Epictète comme support",
          "paragraphText": "Exemple : le texte d’Epictète sur le philosophe malpropre sert de support d’application dans la leçon.\nOn y dégage notamment le thème de la tenue du philosophe et de son disciple.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q6",
            "type": "mcq",
            "prompt": "Le texte d’Epictète utilisé en application parle principalement :",
            "options": [
              "De la philosophie comme système clos",
              "De la tenue du philosophe et de son disciple",
              "De l’utilité de la philosophie selon Descartes",
              "De la grandeur de l’homme selon Pascal"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé de l’application donne pour thème la tenue du philosophe et de son disciple."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q1",
          "type": "mcq",
          "prompt": "La méthode de lecture de texte est définie comme :",
          "options": [
            "Un résumé du texte en quelques lignes",
            "Un ensemble de techniques ou de procédés permettant de dégager le sens d’un texte",
            "Une prise de position personnelle sur l’auteur",
            "Une liste de citations à apprendre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée au début de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q2",
          "type": "mcq",
          "prompt": "Combien d’étapes comprend la méthode de lecture de texte ?",
          "options": [
            "Deux étapes",
            "Trois étapes",
            "Quatre étapes",
            "Cinq étapes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Explication littérale, problématique, explication méthodique et critique : quatre étapes."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la première étape de la méthode ?",
          "options": [
            "La critique du texte",
            "L’explication méthodique",
            "La problématique",
            "L’explication littérale"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’explication littérale vient en premier, avant la problématique, l’explication méthodique et la critique."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q4",
          "type": "mcq",
          "prompt": "Dans la situation d’apprentissage, les élèves cherchent à :",
          "options": [
            "Connaître la méthode de lecture et l’appliquer à un texte",
            "Rédiger une dissertation",
            "Apprendre le texte par cœur",
            "Critiquer l’auteur sans lire le texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La situation précise l’objectif : connaître la méthode et l’appliquer à un texte."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, avant l’explication littérale, il faut :",
          "options": [
            "Rédiger la conclusion du commentaire",
            "Numéroter les lignes du texte et le lire à plusieurs reprises",
            "Confronter l’auteur à d’autres auteurs",
            "Formuler son opinion personnelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Numérotation des lignes et lectures répétées préparent l’explication littérale."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p01_q6",
          "type": "mcq",
          "prompt": "Le texte d’Epictète utilisé en application parle principalement :",
          "options": [
            "De la philosophie comme système clos",
            "De la tenue du philosophe et de son disciple",
            "De l’utilité de la philosophie selon Descartes",
            "De la grandeur de l’homme selon Pascal"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé de l’application donne pour thème la tenue du philosophe et de son disciple."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_lecture_texte_p02",
      "order": 2,
      "title": "L’explication littérale : mots et expressions",
      "summary": "Recenser et définir, selon le contexte, les mots et expressions difficiles ou essentiels.",
      "conceptExplanation": "L’explication littérale consiste, après avoir numéroté les lignes du texte et procédé à sa lecture à plusieurs reprises, à recenser et définir les mots, groupes de mots et expressions essentiels ou difficiles, et à recenser les connecteurs logiques essentiels en déterminant leur fonction.\nUn mot difficile est un terme qui, dans un texte, exige des efforts de compréhension de la part de celui qui le lit. Une expression difficile est un groupe de mots qui exige les mêmes efforts.\nUn mot essentiel est un terme indispensable à la compréhension du texte. Une expression essentielle est un groupe de mots indispensable à la compréhension du texte.\nTous les mots et expressions doivent toujours être définis selon le contexte.",
      "keyRule": "Distingue difficile et essentiel, et définis toujours les mots selon le contexte du texte.",
      "formulas": [],
      "workedExample": {
        "title": "Définir les mots du texte d’Epictète (application corrigée)",
        "statement": "Relève et définis les mots et expressions difficiles ou essentiels du texte d’Epictète : cachot, débiter, maximes, disciple.",
        "methodSteps": [
          "Cachot : prison.",
          "Débiter : réciter mécaniquement.",
          "Maximes : principes, règles morales.",
          "Disciple : celui qui épouse les idées de son maître.",
          "Autres exemples du corrigé : mis décemment signifie habillé convenablement ; beauté intérieure signifie qualité morale, vertu."
        ],
        "conclusion": "Chaque définition est donnée selon le contexte du texte d’Epictète."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Mot difficile et mot essentiel",
          "stepTheme": "Mot difficile et mot essentiel",
          "stepBadge": "Mot difficile et mot essentiel",
          "paragraphText": "• Mot difficile : terme qui, dans un texte, exige des efforts de compréhension de la part de celui qui le lit.\n• Mot essentiel : terme indispensable à la compréhension du texte.\nLes mêmes définitions valent pour les expressions, groupes de mots.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q1",
            "type": "mcq",
            "prompt": "Un mot essentiel est :",
            "options": [
              "Un terme qui exige des efforts de compréhension",
              "Un groupe de mots difficile",
              "Un terme indispensable à la compréhension du texte",
              "Un connecteur logique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Essentiel signifie indispensable à la compréhension ; difficile signifie exigeant des efforts de compréhension."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le travail de l’explication littérale",
          "stepTheme": "Le travail de l’explication littérale",
          "stepBadge": "Le travail de l’explication littérale",
          "paragraphText": "L’explication littérale consiste à recenser et définir les mots, groupes de mots et expressions essentiels ou difficiles.\nElle comprend aussi le recensement des connecteurs logiques essentiels et la détermination de leur fonction.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q2",
            "type": "mcq",
            "prompt": "L’explication littérale consiste notamment à :",
            "options": [
              "Évaluer l’intérêt du texte",
              "Formuler la thèse de l’auteur",
              "Confronter l’auteur au vécu",
              "Recenser et définir les mots et expressions essentiels ou difficiles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le premier volet de l’explication littérale, avec celui des connecteurs logiques."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Définir selon le contexte",
          "stepTheme": "Définir selon le contexte",
          "stepBadge": "Définir selon le contexte",
          "paragraphText": "Méthode : tous les mots et expressions doivent toujours être définis selon le contexte.\nUn même mot peut donc recevoir une définition ajustée au texte étudié.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q3",
            "type": "mcq",
            "prompt": "Selon la leçon, les mots et expressions doivent toujours être définis :",
            "options": [
              "Selon le contexte",
              "Selon le dictionnaire uniquement, sans tenir compte du texte",
              "Selon l’opinion du lecteur",
              "Selon leur premier sens venu à l’esprit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La règle est explicite : définir toujours selon le contexte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Cachot, débiter, maximes",
          "stepTheme": "Cachot, débiter, maximes",
          "stepBadge": "Cachot, débiter, maximes",
          "paragraphText": "Exemples du corrigé sur le texte d’Epictète.\n• Cachot : prison\n• Débiter : réciter mécaniquement\n• Maximes : principes, règles morales",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q4",
            "type": "mcq",
            "prompt": "Dans le corrigé, « maximes » est défini comme :",
            "options": [
              "Qualité morale, vertu",
              "Principes, règles morales",
              "Celui qui épouse les idées de son maître",
              "Habillé convenablement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Maximes : principes, règles morales."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre difficile et essentiel",
          "stepTheme": "Confondre difficile et essentiel",
          "stepBadge": "Confondre difficile et essentiel",
          "paragraphText": "Piège : traiter « difficile » et « essentiel » comme synonymes.\nDifficile renvoie à l’effort de compréhension du lecteur ; essentiel renvoie au caractère indispensable pour comprendre le texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q5",
            "type": "mcq",
            "prompt": "Quelle confusion faut-il éviter ?",
            "options": [
              "Confondre un mot difficile, qui exige un effort de compréhension, avec un mot essentiel, indispensable à la compréhension",
              "Définir les mots selon le contexte",
              "Numéroter les lignes du texte",
              "Recenser les connecteurs logiques"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux notions sont distinctes dans les définitions de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Beauté intérieure et disciple",
          "stepTheme": "Beauté intérieure et disciple",
          "stepBadge": "Beauté intérieure et disciple",
          "paragraphText": "Autres définitions du corrigé.\n• Beauté intérieure : qualité morale, vertu\n• Disciple : celui qui épouse les idées de son maître\n• Séant : convenable ; honnête : juste, correct",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q6",
            "type": "mcq",
            "prompt": "Dans le corrigé, la « beauté intérieure » désigne :",
            "options": [
              "Les bonnes habitudes vestimentaires",
              "La prison",
              "La qualité morale, la vertu",
              "Une règle morale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Beauté intérieure : qualité morale, vertu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q1",
          "type": "mcq",
          "prompt": "Un mot essentiel est :",
          "options": [
            "Un terme qui exige des efforts de compréhension",
            "Un groupe de mots difficile",
            "Un terme indispensable à la compréhension du texte",
            "Un connecteur logique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Essentiel signifie indispensable à la compréhension ; difficile signifie exigeant des efforts de compréhension."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q2",
          "type": "mcq",
          "prompt": "L’explication littérale consiste notamment à :",
          "options": [
            "Évaluer l’intérêt du texte",
            "Formuler la thèse de l’auteur",
            "Confronter l’auteur au vécu",
            "Recenser et définir les mots et expressions essentiels ou difficiles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le premier volet de l’explication littérale, avec celui des connecteurs logiques."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q3",
          "type": "mcq",
          "prompt": "Selon la leçon, les mots et expressions doivent toujours être définis :",
          "options": [
            "Selon le contexte",
            "Selon le dictionnaire uniquement, sans tenir compte du texte",
            "Selon l’opinion du lecteur",
            "Selon leur premier sens venu à l’esprit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La règle est explicite : définir toujours selon le contexte."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q4",
          "type": "mcq",
          "prompt": "Dans le corrigé, « maximes » est défini comme :",
          "options": [
            "Qualité morale, vertu",
            "Principes, règles morales",
            "Celui qui épouse les idées de son maître",
            "Habillé convenablement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Maximes : principes, règles morales."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q5",
          "type": "mcq",
          "prompt": "Quelle confusion faut-il éviter ?",
          "options": [
            "Confondre un mot difficile, qui exige un effort de compréhension, avec un mot essentiel, indispensable à la compréhension",
            "Définir les mots selon le contexte",
            "Numéroter les lignes du texte",
            "Recenser les connecteurs logiques"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux notions sont distinctes dans les définitions de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p02_q6",
          "type": "mcq",
          "prompt": "Dans le corrigé, la « beauté intérieure » désigne :",
          "options": [
            "Les bonnes habitudes vestimentaires",
            "La prison",
            "La qualité morale, la vertu",
            "Une règle morale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Beauté intérieure : qualité morale, vertu."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_lecture_texte_p03",
      "order": 3,
      "title": "Les connecteurs logiques et leurs fonctions",
      "summary": "Recenser les connecteurs logiques essentiels et déterminer leur fonction dans le texte.",
      "conceptExplanation": "Les connecteurs logiques sont des termes ou expressions qui servent à relier deux mots, deux idées, des paragraphes et assurent la cohérence du discours.\nIls remplissent des fonctions bien déterminées dans un texte, telles que la négation, l’opposition, la comparaison, l’addition.\nLe tableau annexe de la leçon classe notamment les connecteurs d’alternative, de but, de cause, de comparaison, de concession, de conclusion, de condition ou supposition, de conséquence, de classification ou énumération, d’explication, d’illustration, d’addition, de justification, d’opposition, de restriction, d’exclusion et de temps.\nDans le texte d’Epictète, le corrigé relève : si marque la supposition, et marque l’addition ou énumération, comme marque la comparaison, donc marque la conséquence, car marque la justification, et ne… que marque la restriction.",
      "keyRule": "Un connecteur relie et assure la cohérence : identifie-le, puis dis sa fonction précise dans le texte.",
      "formulas": [],
      "workedExample": {
        "title": "Fonctions des connecteurs du texte d’Epictète (application corrigée)",
        "statement": "Relève les connecteurs logiques essentiels du texte d’Epictète et détermine leur fonction.",
        "methodSteps": [
          "Si : supposition.",
          "Et : addition, énumération.",
          "Comme : comparaison.",
          "Donc : conséquence.",
          "Car : justification.",
          "Ne… que : restriction."
        ],
        "conclusion": "Six connecteurs essentiels sont relevés avec leur fonction dans le corrigé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Relier et assurer la cohérence",
          "stepTheme": "Relier et assurer la cohérence",
          "stepBadge": "Relier et assurer la cohérence",
          "paragraphText": "• Connecteurs logiques : termes ou expressions qui servent à relier deux mots, deux idées, des paragraphes et assurent la cohérence du discours.\nIls remplissent des fonctions bien déterminées dans un texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q1",
            "type": "mcq",
            "prompt": "Les connecteurs logiques servent à :",
            "options": [
              "Définir les mots difficiles",
              "Relier deux mots, deux idées, des paragraphes et assurer la cohérence du discours",
              "Évaluer l’intérêt du texte",
              "Identifier les mouvements du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des fonctions déterminées",
          "stepTheme": "Des fonctions déterminées",
          "stepBadge": "Des fonctions déterminées",
          "paragraphText": "Les connecteurs remplissent des fonctions bien déterminées, telles que la négation, l’opposition, la comparaison, l’addition.\nLe tableau annexe ajoute notamment la cause, la conséquence, la condition ou supposition, la concession, la restriction et la justification.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q2",
            "type": "mcq",
            "prompt": "Parmi les fonctions citées dans la leçon figure :",
            "options": [
              "La problématisation",
              "La critique externe",
              "L’opposition",
              "L’étude parcellaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Négation, opposition, comparaison et addition sont les fonctions citées à titre d’exemples."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Si, donc et car chez Epictète",
          "stepTheme": "Si, donc et car chez Epictète",
          "stepBadge": "Si, donc et car chez Epictète",
          "paragraphText": "Corrigé de l’application sur le texte d’Epictète.\n• Si : supposition\n• Donc : conséquence\n• Car : justification",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q3",
            "type": "mcq",
            "prompt": "Dans le texte d’Epictète, « car » a pour fonction :",
            "options": [
              "La comparaison",
              "La restriction",
              "La conséquence",
              "La justification"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Car : justification, selon le corrigé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Comme, et et ne… que",
          "stepTheme": "Comme, et et ne… que",
          "stepBadge": "Comme, et et ne… que",
          "paragraphText": "Suite du corrigé.\n• Comme : comparaison\n• Et : addition, énumération\n• Ne… que : restriction",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q4",
            "type": "mcq",
            "prompt": "Dans le texte d’Epictète, « ne… que » marque :",
            "options": [
              "La restriction",
              "L’addition",
              "La supposition",
              "La cause"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ne… que : restriction, selon le corrigé de l’application."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Recenser puis déterminer la fonction",
          "stepTheme": "Recenser puis déterminer la fonction",
          "stepBadge": "Recenser puis déterminer la fonction",
          "paragraphText": "Méthode de l’explication littérale : recenser les connecteurs logiques essentiels, puis déterminer leur fonction dans le texte.\nRelever un connecteur sans dire sa fonction laisse le travail inachevé.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q5",
            "type": "mcq",
            "prompt": "Le travail sur les connecteurs logiques comporte :",
            "options": [
              "Le seul relevé des connecteurs, sans fonction",
              "Le recensement des connecteurs essentiels et la détermination de leur fonction",
              "La définition de tous les mots du texte",
              "Le bilan de la discussion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Recenser et déterminer la fonction : les deux opérations sont demandées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Donner une fonction au hasard",
          "stepTheme": "Donner une fonction au hasard",
          "stepBadge": "Donner une fonction au hasard",
          "paragraphText": "Piège : attribuer à un connecteur une fonction qu’il n’a pas dans le texte.\nDans le corrigé, « donc » marque la conséquence et non la cause ; « comme » marque la comparaison.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q6",
            "type": "mcq",
            "prompt": "Dans le texte d’Epictète, « donc » marque :",
            "options": [
              "La cause",
              "La comparaison",
              "La conséquence",
              "La concession"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Donc : conséquence, selon le corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q1",
          "type": "mcq",
          "prompt": "Les connecteurs logiques servent à :",
          "options": [
            "Définir les mots difficiles",
            "Relier deux mots, deux idées, des paragraphes et assurer la cohérence du discours",
            "Évaluer l’intérêt du texte",
            "Identifier les mouvements du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q2",
          "type": "mcq",
          "prompt": "Parmi les fonctions citées dans la leçon figure :",
          "options": [
            "La problématisation",
            "La critique externe",
            "L’opposition",
            "L’étude parcellaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Négation, opposition, comparaison et addition sont les fonctions citées à titre d’exemples."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q3",
          "type": "mcq",
          "prompt": "Dans le texte d’Epictète, « car » a pour fonction :",
          "options": [
            "La comparaison",
            "La restriction",
            "La conséquence",
            "La justification"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Car : justification, selon le corrigé."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q4",
          "type": "mcq",
          "prompt": "Dans le texte d’Epictète, « ne… que » marque :",
          "options": [
            "La restriction",
            "L’addition",
            "La supposition",
            "La cause"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ne… que : restriction, selon le corrigé de l’application."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q5",
          "type": "mcq",
          "prompt": "Le travail sur les connecteurs logiques comporte :",
          "options": [
            "Le seul relevé des connecteurs, sans fonction",
            "Le recensement des connecteurs essentiels et la détermination de leur fonction",
            "La définition de tous les mots du texte",
            "Le bilan de la discussion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Recenser et déterminer la fonction : les deux opérations sont demandées."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p03_q6",
          "type": "mcq",
          "prompt": "Dans le texte d’Epictète, « donc » marque :",
          "options": [
            "La cause",
            "La comparaison",
            "La conséquence",
            "La concession"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Donc : conséquence, selon le corrigé."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_lecture_texte_p04",
      "order": 4,
      "title": "La problématique : thème, problème, thèse et antithèse",
      "summary": "Dégager thème, problème, thèse et antithèse à l’aide de la grille de lecture et de ses indices.",
      "conceptExplanation": "La problématique est l’ensemble constitué des items de la grille de lecture. La grille de lecture est un questionnaire permettant de dégager les items que sont : le thème, le problème, la thèse, l’antithèse, l’intention, l’enjeu et la structure logique.\nLe thème est ce dont parle le texte ; on se demande de quoi parle le texte, avec pour indices la fréquence des mots, les formes d’insistance, les phrases-résumé, les phrases clés et les exemples significatifs.\nLe problème est la question à laquelle l’auteur apporte une réponse ; on se demande à quelle question répond l’auteur.\nLa thèse est la position de l’auteur, la réponse qu’il apporte au problème.\nL’antithèse est le point de vue opposé ou différent de celui de l’auteur ; on se demande quelle est la position contraire à celle de l’auteur, avec pour indices les phrases contradictoires, les connecteurs d’opposition ou de restriction et les expressions de négation.",
      "keyRule": "Pour chaque item, pars de sa question et de ses indices dans le texte, jamais d’une impression générale.",
      "formulas": [],
      "workedExample": {
        "title": "Dégager la problématique du texte d’Epictète (application corrigée)",
        "statement": "À partir des indices, dégage le thème, le problème, la thèse et l’antithèse du texte d’Epictète.",
        "methodSteps": [
          "Indices du thème : philosophe malpropre, philosophie, malpropre, disciple. Thème : la tenue du philosophe et de son disciple.",
          "Indices du problème : comment m’attirerait-il ? Comment me fera-t-il aimer la philosophie qui laisse un homme en cet état ? Problème : le philosophe et son disciple doivent-ils négliger leur tenue ?",
          "Indice de la thèse : ayons donc de la propreté et de la décence. Thèse : le philosophe et son disciple doivent prendre soin de leur corps et de leur âme.",
          "Antithèse, en se référant à la thèse : le philosophe doit négliger son apparence."
        ],
        "conclusion": "Chaque item est dégagé à partir d’indices précis relevés dans le texte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Problématique et grille de lecture",
          "stepTheme": "Problématique et grille de lecture",
          "stepBadge": "Problématique et grille de lecture",
          "paragraphText": "• Problématique : ensemble constitué des items de la grille de lecture.\n• Grille de lecture : questionnaire permettant de dégager les items : thème, problème, thèse, antithèse, intention, enjeu, structure logique.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q1",
            "type": "mcq",
            "prompt": "La problématique est :",
            "options": [
              "La question à laquelle répond l’auteur",
              "L’ensemble constitué des items de la grille de lecture",
              "La position de l’auteur",
              "L’objectif lointain de l’auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La problématique rassemble tous les items de la grille de lecture."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Thème et problème",
          "stepTheme": "Thème et problème",
          "stepBadge": "Thème et problème",
          "paragraphText": "• Thème : ce dont parle le texte. Question : de quoi parle le texte ?\n• Problème : question à laquelle l’auteur apporte une réponse. Question : à quelle question répond l’auteur ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q2",
            "type": "mcq",
            "prompt": "Le problème, dans la grille de lecture, est :",
            "options": [
              "Ce dont parle le texte",
              "La position de l’auteur",
              "La question à laquelle l’auteur apporte une réponse",
              "Le point de vue opposé à celui de l’auteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le problème est la question à laquelle l’auteur répond ; la réponse est la thèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Thèse et antithèse",
          "stepTheme": "Thèse et antithèse",
          "stepBadge": "Thèse et antithèse",
          "paragraphText": "• Thèse : position de l’auteur, réponse qu’il apporte au problème.\n• Antithèse : point de vue opposé ou différent de celui de l’auteur.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q3",
            "type": "mcq",
            "prompt": "L’antithèse est :",
            "options": [
              "La réponse de l’auteur au problème",
              "L’objectif immédiat de l’auteur",
              "La valeur du texte",
              "Le point de vue opposé ou différent de celui de l’auteur"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’antithèse est la position contraire à celle de l’auteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Les indices du thème",
          "stepTheme": "Les indices du thème",
          "stepBadge": "Les indices du thème",
          "paragraphText": "Indices pour dégager le thème : fréquence des mots, formes d’insistance, phrases-résumé, phrases clés, exemples significatifs.\nDans l’application, les indices sont philosophe malpropre, philosophie, malpropre et disciple.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q4",
            "type": "mcq",
            "prompt": "Pour dégager le thème, la grille indique comme indices :",
            "options": [
              "La fréquence des mots, les formes d’insistance, les phrases-résumé et les phrases clés",
              "Uniquement les connecteurs d’opposition",
              "Le ton du texte seulement",
              "Les paragraphes du texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les indices du thème dans le tableau de la grille de lecture."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Thème et thèse chez Epictète",
          "stepTheme": "Thème et thèse chez Epictète",
          "stepBadge": "Thème et thèse chez Epictète",
          "paragraphText": "Application corrigée sur le texte d’Epictète.\n• Thème : la tenue du philosophe et de son disciple\n• Thèse : le philosophe et son disciple doivent prendre soin de leur corps et de leur âme",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q5",
            "type": "mcq",
            "prompt": "La thèse du texte d’Epictète, selon le corrigé, est :",
            "options": [
              "Le philosophe doit négliger son apparence",
              "Le philosophe et son disciple doivent prendre soin de leur corps et de leur âme",
              "La beauté du corps est supérieure à la beauté intérieure",
              "La philosophie est un débat sans fin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’indice est la phrase : ayons donc de la propreté et de la décence."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre thème et problème",
          "stepTheme": "Confondre thème et problème",
          "stepBadge": "Confondre thème et problème",
          "paragraphText": "Piège : donner le thème à la place du problème, ou l’inverse.\nLe thème dit de quoi parle le texte ; le problème est formulé comme une question à laquelle l’auteur répond.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q6",
            "type": "mcq",
            "prompt": "Le problème du texte d’Epictète est formulé ainsi :",
            "options": [
              "La tenue du philosophe et de son disciple",
              "La valeur de la philosophie",
              "Amener le philosophe à améliorer son statut social",
              "Le philosophe et son disciple doivent-ils négliger leur tenue ?"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le problème est une question ; la tenue du philosophe est le thème."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q1",
          "type": "mcq",
          "prompt": "La problématique est :",
          "options": [
            "La question à laquelle répond l’auteur",
            "L’ensemble constitué des items de la grille de lecture",
            "La position de l’auteur",
            "L’objectif lointain de l’auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La problématique rassemble tous les items de la grille de lecture."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q2",
          "type": "mcq",
          "prompt": "Le problème, dans la grille de lecture, est :",
          "options": [
            "Ce dont parle le texte",
            "La position de l’auteur",
            "La question à laquelle l’auteur apporte une réponse",
            "Le point de vue opposé à celui de l’auteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le problème est la question à laquelle l’auteur répond ; la réponse est la thèse."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q3",
          "type": "mcq",
          "prompt": "L’antithèse est :",
          "options": [
            "La réponse de l’auteur au problème",
            "L’objectif immédiat de l’auteur",
            "La valeur du texte",
            "Le point de vue opposé ou différent de celui de l’auteur"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’antithèse est la position contraire à celle de l’auteur."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q4",
          "type": "mcq",
          "prompt": "Pour dégager le thème, la grille indique comme indices :",
          "options": [
            "La fréquence des mots, les formes d’insistance, les phrases-résumé et les phrases clés",
            "Uniquement les connecteurs d’opposition",
            "Le ton du texte seulement",
            "Les paragraphes du texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les indices du thème dans le tableau de la grille de lecture."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q5",
          "type": "mcq",
          "prompt": "La thèse du texte d’Epictète, selon le corrigé, est :",
          "options": [
            "Le philosophe doit négliger son apparence",
            "Le philosophe et son disciple doivent prendre soin de leur corps et de leur âme",
            "La beauté du corps est supérieure à la beauté intérieure",
            "La philosophie est un débat sans fin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’indice est la phrase : ayons donc de la propreté et de la décence."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p04_q6",
          "type": "mcq",
          "prompt": "Le problème du texte d’Epictète est formulé ainsi :",
          "options": [
            "La tenue du philosophe et de son disciple",
            "La valeur de la philosophie",
            "Amener le philosophe à améliorer son statut social",
            "Le philosophe et son disciple doivent-ils négliger leur tenue ?"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le problème est une question ; la tenue du philosophe est le thème."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_lecture_texte_p05",
      "order": 5,
      "title": "La problématique : intention, enjeu et structure logique",
      "summary": "Dégager l’intention, l’enjeu et la structure logique du texte à partir de leurs indices.",
      "conceptExplanation": "L’intention est l’objectif immédiat, manifeste de l’auteur ; on se demande quel est l’objectif immédiat de l’auteur, avec pour indices la thèse, le vocabulaire, les illustrations, l’argumentation et la nature du texte.\nL’enjeu est l’objectif lointain de l’auteur, la valeur ou l’intérêt suscité par le texte ; on se demande quel est l’intérêt du texte, avec pour indices le thème, la thèse et l’intention.\nLa structure logique consiste à identifier les différents mouvements du texte et à énoncer leurs idées principales ; on se demande quelles sont les différentes articulations du texte, avec pour indices les connecteurs logiques ou mots de liaison, les paragraphes, le mode d’enchaînement des arguments et la logique des idées.\nDans l’application sur Epictète : l’intention est d’amener le philosophe à améliorer son statut social, l’enjeu est la valeur de la philosophie, et la structure logique comporte deux mouvements, le premier sur la nécessité de la décence chez le philosophe et son disciple, le second sur la primauté de la beauté intérieure sur la beauté du corps.",
      "keyRule": "Intention immédiate, enjeu lointain, structure en mouvements : trois items, trois questions distinctes.",
      "formulas": [],
      "workedExample": {
        "title": "Intention, enjeu et structure du texte d’Epictète",
        "statement": "Dégage l’intention, l’enjeu et la structure logique du texte d’Epictète à partir des indices du corrigé.",
        "methodSteps": [
          "Indices de l’intention : le ton ironique et polémique de l’auteur dans les premières lignes. Intention : amener le philosophe à améliorer son statut social.",
          "Indices de l’enjeu : l’intention, la thèse et le ton du texte. Enjeu : la valeur de la philosophie.",
          "Structure logique : deux mouvements relevés à partir des arguments du texte.",
          "Premier mouvement : la nécessité de la décence chez le philosophe et son disciple. Deuxième mouvement : la primauté de la beauté intérieure sur la beauté du corps."
        ],
        "conclusion": "Les trois items complètent la problématique dégagée dans le point précédent."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’intention de l’auteur",
          "stepTheme": "L’intention de l’auteur",
          "stepBadge": "L’intention de l’auteur",
          "paragraphText": "• Intention : objectif immédiat, manifeste de l’auteur.\nQuestion de la grille : quel est l’objectif immédiat de l’auteur ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q1",
            "type": "mcq",
            "prompt": "L’intention est :",
            "options": [
              "L’objectif lointain de l’auteur",
              "L’objectif immédiat, manifeste de l’auteur",
              "Une articulation du texte",
              "La position contraire à celle de l’auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Immédiat et manifeste : c’est l’intention ; lointain : c’est l’enjeu."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’enjeu du texte",
          "stepTheme": "L’enjeu du texte",
          "stepBadge": "L’enjeu du texte",
          "paragraphText": "• Enjeu : objectif lointain de l’auteur, valeur ou intérêt suscité par le texte.\nQuestion de la grille : quel est l’intérêt du texte ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q2",
            "type": "mcq",
            "prompt": "L’enjeu désigne :",
            "options": [
              "Ce dont parle le texte",
              "La réponse de l’auteur au problème",
              "L’objectif lointain de l’auteur, la valeur ou l’intérêt du texte",
              "Les mouvements du texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’enjeu est l’objectif lointain, la valeur ou l’intérêt suscité par le texte."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La structure logique",
          "stepTheme": "La structure logique",
          "stepBadge": "La structure logique",
          "paragraphText": "• Structure logique : identifier les différents mouvements du texte et énoncer leurs idées principales.\nQuestion de la grille : quelles sont les différentes articulations du texte ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q3",
            "type": "mcq",
            "prompt": "Dégager la structure logique, c’est :",
            "options": [
              "Définir les mots difficiles",
              "Apprécier la cohérence interne du texte",
              "Confronter l’auteur à d’autres auteurs",
              "Identifier les mouvements du texte et énoncer leurs idées principales"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La structure logique découpe le texte en mouvements avec leurs idées principales."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’intention chez Epictète",
          "stepTheme": "L’intention chez Epictète",
          "stepBadge": "L’intention chez Epictète",
          "paragraphText": "Application corrigée : l’intention est repérée grâce au ton ironique et polémique de l’auteur.\nIntention dégagée : amener le philosophe à améliorer son statut social.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q4",
            "type": "mcq",
            "prompt": "L’intention du texte d’Epictète, selon le corrigé, est :",
            "options": [
              "Amener le philosophe à améliorer son statut social",
              "Montrer la valeur de la philosophie",
              "Décrire les mouvements du texte",
              "Défendre la négligence du philosophe"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’objectif immédiat dégagé dans le corrigé, à partir du ton ironique et polémique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Deux mouvements chez Epictète",
          "stepTheme": "Deux mouvements chez Epictète",
          "stepBadge": "Deux mouvements chez Epictète",
          "paragraphText": "Structure logique du texte d’Epictète : deux mouvements.\n• Premier mouvement : la nécessité de la décence chez le philosophe et son disciple\n• Deuxième mouvement : la primauté de la beauté intérieure sur la beauté du corps",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q5",
            "type": "mcq",
            "prompt": "Le deuxième mouvement du texte d’Epictète porte sur :",
            "options": [
              "La nécessité de la décence",
              "La primauté de la beauté intérieure sur la beauté du corps",
              "La définition de la philosophie",
              "La critique des cyniques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé énonce ainsi l’idée principale du deuxième mouvement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre intention et enjeu",
          "stepTheme": "Confondre intention et enjeu",
          "stepBadge": "Confondre intention et enjeu",
          "paragraphText": "Piège : confondre l’objectif immédiat et l’objectif lointain.\nChez Epictète, améliorer le statut social du philosophe est l’intention ; la valeur de la philosophie est l’enjeu.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q6",
            "type": "mcq",
            "prompt": "Chez Epictète, la valeur de la philosophie correspond à :",
            "options": [
              "L’intention",
              "La thèse",
              "L’enjeu",
              "La structure logique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La valeur ou l’intérêt du texte, c’est l’enjeu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q1",
          "type": "mcq",
          "prompt": "L’intention est :",
          "options": [
            "L’objectif lointain de l’auteur",
            "L’objectif immédiat, manifeste de l’auteur",
            "Une articulation du texte",
            "La position contraire à celle de l’auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Immédiat et manifeste : c’est l’intention ; lointain : c’est l’enjeu."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q2",
          "type": "mcq",
          "prompt": "L’enjeu désigne :",
          "options": [
            "Ce dont parle le texte",
            "La réponse de l’auteur au problème",
            "L’objectif lointain de l’auteur, la valeur ou l’intérêt du texte",
            "Les mouvements du texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’enjeu est l’objectif lointain, la valeur ou l’intérêt suscité par le texte."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q3",
          "type": "mcq",
          "prompt": "Dégager la structure logique, c’est :",
          "options": [
            "Définir les mots difficiles",
            "Apprécier la cohérence interne du texte",
            "Confronter l’auteur à d’autres auteurs",
            "Identifier les mouvements du texte et énoncer leurs idées principales"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La structure logique découpe le texte en mouvements avec leurs idées principales."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q4",
          "type": "mcq",
          "prompt": "L’intention du texte d’Epictète, selon le corrigé, est :",
          "options": [
            "Amener le philosophe à améliorer son statut social",
            "Montrer la valeur de la philosophie",
            "Décrire les mouvements du texte",
            "Défendre la négligence du philosophe"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’objectif immédiat dégagé dans le corrigé, à partir du ton ironique et polémique."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q5",
          "type": "mcq",
          "prompt": "Le deuxième mouvement du texte d’Epictète porte sur :",
          "options": [
            "La nécessité de la décence",
            "La primauté de la beauté intérieure sur la beauté du corps",
            "La définition de la philosophie",
            "La critique des cyniques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé énonce ainsi l’idée principale du deuxième mouvement."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p05_q6",
          "type": "mcq",
          "prompt": "Chez Epictète, la valeur de la philosophie correspond à :",
          "options": [
            "L’intention",
            "La thèse",
            "L’enjeu",
            "La structure logique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La valeur ou l’intérêt du texte, c’est l’enjeu."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l01_lecture_texte_p06",
      "order": 6,
      "title": "Explication méthodique et critique du texte",
      "summary": "Clarifier idées, illustrations, concepts et allusions, puis évaluer l’intérêt du texte.",
      "conceptExplanation": "L’explication méthodique consiste en la clarification ordonnée et cohérente des idées principales, des idées secondaires, des illustrations, des concepts et des allusions du texte.\nLes idées principales sont les idées essentielles des mouvements du texte. Les idées secondaires sont des arguments, c’est-à-dire des idées qui soutiennent l’idée principale d’un mouvement. Les illustrations sont soit des exemples, des références ou des données par lesquels l’auteur met en évidence son idée. Les concepts sont des termes qui renvoient à une ou plusieurs idées de l’auteur. Les allusions sont des sous-entendus, des présupposés relatifs à une personne ou à une chose sans être explicitement formulés.\nLa critique du texte est l’évaluation de l’intérêt du texte. Elle comporte deux parties : la critique interne, qui consiste à apprécier le texte en lui-même, c’est-à-dire à examiner sa cohérence interne et la congruence entre le mode d’argumentation et l’intention de l’auteur ; et la critique externe, qui consiste à examiner la position de l’auteur en la confrontant à celle d’autres auteurs et au vécu.",
      "keyRule": "Explication méthodique : clarifier sans déformer. Critique : interne d’abord, externe ensuite.",
      "formulas": [],
      "workedExample": {
        "title": "Idées principales et secondaires chez Epictète (application corrigée)",
        "statement": "Dégage, à partir de l’idée principale de chaque mouvement du texte d’Epictète, les idées secondaires.",
        "methodSteps": [
          "Idée principale du premier mouvement : la nécessité de la décence chez le philosophe et son disciple.",
          "Idées secondaires du premier mouvement : identifié à un criminel, le philosophe malpropre inspire répugnance ; exhortation à la propreté et à la décence.",
          "Idée principale du deuxième mouvement : la primauté de la beauté intérieure sur la beauté du corps.",
          "Idées secondaires du deuxième mouvement : la beauté du corps présuppose la beauté intérieure ; la beauté intérieure, qui consiste à faire usage de la raison, surpasse la beauté du corps."
        ],
        "conclusion": "Chaque idée secondaire soutient l’idée principale de son mouvement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’explication méthodique",
          "stepTheme": "L’explication méthodique",
          "stepBadge": "L’explication méthodique",
          "paragraphText": "• Explication méthodique : clarification ordonnée et cohérente des idées principales, des idées secondaires, des illustrations, des concepts et des allusions du texte.\nElle vient après la problématique dans la méthode.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q1",
            "type": "mcq",
            "prompt": "L’explication méthodique consiste en :",
            "options": [
              "L’évaluation de l’intérêt du texte",
              "La clarification ordonnée et cohérente des idées, illustrations, concepts et allusions du texte",
              "La définition des seuls mots difficiles",
              "La confrontation de l’auteur au vécu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la troisième étape de la méthode."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Idées principales et secondaires",
          "stepTheme": "Idées principales et secondaires",
          "stepBadge": "Idées principales et secondaires",
          "paragraphText": "• Idées principales : idées essentielles des mouvements du texte.\n• Idées secondaires : arguments, idées qui soutiennent l’idée principale d’un mouvement.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q2",
            "type": "mcq",
            "prompt": "Les idées secondaires sont :",
            "options": [
              "Les idées essentielles des mouvements",
              "Des exemples ou des références",
              "Des arguments qui soutiennent l’idée principale d’un mouvement",
              "Des sous-entendus non formulés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les idées secondaires soutiennent l’idée principale ; elles sont ses arguments."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Illustrations, concepts, allusions",
          "stepTheme": "Illustrations, concepts, allusions",
          "stepBadge": "Illustrations, concepts, allusions",
          "paragraphText": "• Illustrations : exemples, références ou données par lesquels l’auteur met en évidence son idée.\n• Concepts : termes qui renvoient à une ou plusieurs idées de l’auteur.\n• Allusions : sous-entendus, présupposés relatifs à une personne ou à une chose sans être explicitement formulés.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q3",
            "type": "mcq",
            "prompt": "Les allusions sont :",
            "options": [
              "Les idées essentielles des mouvements",
              "Les termes qui renvoient aux idées de l’auteur",
              "Les exemples de l’auteur",
              "Des sous-entendus, des présupposés non explicitement formulés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Allusion : sous-entendu ou présupposé qui n’est pas explicitement formulé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La critique du texte",
          "stepTheme": "La critique du texte",
          "stepBadge": "La critique du texte",
          "paragraphText": "• Critique du texte : évaluation de l’intérêt du texte.\nElle comporte deux parties : la critique interne et la critique externe.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q4",
            "type": "mcq",
            "prompt": "La critique du texte est :",
            "options": [
              "L’évaluation de l’intérêt du texte",
              "La clarification des idées du texte",
              "Le recensement des connecteurs",
              "La dégagée de la problématique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Critiquer, ici, c’est évaluer l’intérêt du texte, en deux parties."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Critique interne et critique externe",
          "stepTheme": "Critique interne et critique externe",
          "stepBadge": "Critique interne et critique externe",
          "paragraphText": "• Critique interne : apprécier le texte en lui-même, examiner sa cohérence interne et la congruence entre le mode d’argumentation et l’intention de l’auteur.\n• Critique externe : examiner la position de l’auteur en la confrontant à celle d’autres auteurs et au vécu.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q5",
            "type": "mcq",
            "prompt": "La critique externe consiste à :",
            "options": [
              "Examiner la cohérence interne du texte",
              "Examiner la position de l’auteur en la confrontant à celle d’autres auteurs et au vécu",
              "Définir les concepts du texte",
              "Identifier les mouvements du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Externe : confrontation à d’autres auteurs et au vécu. Interne : cohérence du texte en lui-même."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Inverser interne et externe",
          "stepTheme": "Inverser interne et externe",
          "stepBadge": "Inverser interne et externe",
          "paragraphText": "Piège : confronter l’auteur à d’autres auteurs en parlant de critique interne.\nLa confrontation à d’autres auteurs et au vécu relève de la critique externe ; la cohérence interne relève de la critique interne.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q6",
            "type": "mcq",
            "prompt": "Examiner la congruence entre le mode d’argumentation et l’intention de l’auteur relève de :",
            "options": [
              "La critique externe",
              "L’explication littérale",
              "La critique interne",
              "L’explication méthodique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La congruence argumentation et intention fait partie de la critique interne, définie dans la leçon."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les idées secondaires du premier mouvement",
          "stepTheme": "Les idées secondaires du premier mouvement",
          "stepBadge": "Les idées secondaires du premier mouvement",
          "paragraphText": "Exemple corrigé sur Epictète : idée principale du premier mouvement, la nécessité de la décence.\nIdées secondaires : identifié à un criminel, le philosophe malpropre inspire répugnance ; exhortation à la propreté et à la décence.",
          "exercise": {
            "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q7",
            "type": "mcq",
            "prompt": "Dans le corrigé, une idée secondaire du premier mouvement est :",
            "options": [
              "La primauté de la beauté intérieure",
              "La beauté du corps présuppose la beauté intérieure",
              "La définition du disciple",
              "Identifié à un criminel, le philosophe malpropre inspire répugnance"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est l’un des deux arguments qui soutiennent l’idée de la nécessité de la décence."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q1",
          "type": "mcq",
          "prompt": "L’explication méthodique consiste en :",
          "options": [
            "L’évaluation de l’intérêt du texte",
            "La clarification ordonnée et cohérente des idées, illustrations, concepts et allusions du texte",
            "La définition des seuls mots difficiles",
            "La confrontation de l’auteur au vécu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la troisième étape de la méthode."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q2",
          "type": "mcq",
          "prompt": "Les idées secondaires sont :",
          "options": [
            "Les idées essentielles des mouvements",
            "Des exemples ou des références",
            "Des arguments qui soutiennent l’idée principale d’un mouvement",
            "Des sous-entendus non formulés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les idées secondaires soutiennent l’idée principale ; elles sont ses arguments."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q3",
          "type": "mcq",
          "prompt": "Les allusions sont :",
          "options": [
            "Les idées essentielles des mouvements",
            "Les termes qui renvoient aux idées de l’auteur",
            "Les exemples de l’auteur",
            "Des sous-entendus, des présupposés non explicitement formulés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Allusion : sous-entendu ou présupposé qui n’est pas explicitement formulé."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q4",
          "type": "mcq",
          "prompt": "La critique du texte est :",
          "options": [
            "L’évaluation de l’intérêt du texte",
            "La clarification des idées du texte",
            "Le recensement des connecteurs",
            "La dégagée de la problématique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Critiquer, ici, c’est évaluer l’intérêt du texte, en deux parties."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q5",
          "type": "mcq",
          "prompt": "La critique externe consiste à :",
          "options": [
            "Examiner la cohérence interne du texte",
            "Examiner la position de l’auteur en la confrontant à celle d’autres auteurs et au vécu",
            "Définir les concepts du texte",
            "Identifier les mouvements du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Externe : confrontation à d’autres auteurs et au vécu. Interne : cohérence du texte en lui-même."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q6",
          "type": "mcq",
          "prompt": "Examiner la congruence entre le mode d’argumentation et l’intention de l’auteur relève de :",
          "options": [
            "La critique externe",
            "L’explication littérale",
            "La critique interne",
            "L’explication méthodique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La congruence argumentation et intention fait partie de la critique interne, définie dans la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l01_lecture_texte_p06_q7",
          "type": "mcq",
          "prompt": "Dans le corrigé, une idée secondaire du premier mouvement est :",
          "options": [
            "La primauté de la beauté intérieure",
            "La beauté du corps présuppose la beauté intérieure",
            "La définition du disciple",
            "Identifié à un criminel, le philosophe malpropre inspire répugnance"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est l’un des deux arguments qui soutiennent l’idée de la nécessité de la décence."
        }
      ]
    }
  ]
};
