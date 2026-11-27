import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — contenu réel « Les outils de l'argumentation, séance 1 : les connecteurs logiques », dans le cours affiché « Léçon 4 : La Dissertation littéraire » (titre décalé, le contenu fait foi) (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=535
export const FR_TLE_PL_L13_CONNECTEURS_LOGIQUES: CurriculumChapter = {
  "id": "terminale_a1_francais_pl_l13_connecteurs_logiques",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 13,
  "title": "Leçon 13 : Les connecteurs logiques",
  "summary": "Les connecteurs logiques sont des mots ou locutions invariables qui assurent la progression logique d'un texte en marquant les liens entre les idées : cause, conséquence, opposition, addition, condition, but, ordre, conclusion ou comparaison.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=535",
  "points": [
    {
      "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01",
      "order": 1,
      "title": "Définir les connecteurs et les reconnaître par leur classe",
      "summary": "Définir les connecteurs logiques et distinguer les conjonctions de coordination des conjonctions de subordination.",
      "conceptExplanation": "Les connecteurs logiques sont des mots ou des locutions invariables qui assurent une progression logique dans un texte. Ils marquent un lien entre des idées, des propositions ou des paragraphes.\nIls appartiennent à plusieurs classes grammaticales. Les conjonctions de coordination sont : mais, ou, et, donc, or, ni, car. Exemples de la leçon : « Il est absent aujourd'hui car il est malade » et « Le ciel est nuageux, donc il va sans doute pleuvoir ».\nLes conjonctions de subordination sont par exemple : de même que, sans compter que, bien que, pour que, au cas où, pourvu que, si, alors que, parce que. Ils sont internes à la phrase et se placent en tête de proposition. Exemple : « Vous pouvez réussir pourvu que vous travailliez sans relâche ».",
      "keyRule": "Un connecteur logique est invariable et relie des idées ; coordination (mais, ou, et, donc, or, ni, car) ou subordination (parce que, bien que, pourvu que...).",
      "formulas": [],
      "workedExample": {
        "title": "Identifier deux connecteurs dans les exemples de la leçon",
        "statement": "Dans « Il est absent aujourd'hui car il est malade » et « Vous pouvez réussir pourvu que vous travailliez sans relâche », quelle est la nature de chaque connecteur ?",
        "methodSteps": [
          "Dans la première phrase, « car » appartient à la liste des conjonctions de coordination : mais, ou, et, donc, or, ni, car.",
          "Dans la seconde phrase, « pourvu que » figure dans la liste des conjonctions de subordination.",
          "« Pourvu que » est interne à la phrase et se place en tête de la proposition « vous travailliez sans relâche »."
        ],
        "conclusion": "« Car » coordonne, « pourvu que » subordonne : la classe du connecteur se reconnaît à sa liste et à sa place dans la phrase."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est un connecteur logique",
          "stepTheme": "Ce qu'est un connecteur logique",
          "stepBadge": "Ce qu'est un connecteur logique",
          "paragraphText": "• Connecteurs logiques : mots ou locutions invariables qui assurent une progression logique dans un texte.\nIls marquent un lien entre des idées, des propositions ou des paragraphes.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q1",
            "type": "mcq",
            "prompt": "Les connecteurs logiques sont :",
            "options": [
              "Des mots ou locutions invariables qui marquent un lien entre des idées",
              "Uniquement des signes de ponctuation",
              "Des mots qui changent de forme selon le sujet",
              "Des verbes conjugués au présent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition de la leçon : invariables, ils assurent la progression logique et marquent un lien entre idées, propositions ou paragraphes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les conjonctions de coordination",
          "stepTheme": "Les conjonctions de coordination",
          "stepBadge": "Les conjonctions de coordination",
          "paragraphText": "• Conjonctions de coordination : mais, ou, et, donc, or, ni, car.\nCe sont des connecteurs logiques qui relient des éléments de même niveau.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces listes donne les conjonctions de coordination ?",
            "options": [
              "Parce que, bien que, pour que, si",
              "Mais, ou, et, donc, or, ni, car",
              "D'abord, ensuite, enfin, bref",
              "Pour, malgré, sauf, avec"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne exactement cette liste de sept conjonctions de coordination."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les conjonctions de subordination",
          "stepTheme": "Les conjonctions de subordination",
          "stepBadge": "Les conjonctions de subordination",
          "paragraphText": "Les conjonctions de subordination sont internes à la phrase et se placent en tête de proposition.\nLa leçon cite : de même que, sans compter que, bien que, pour que, au cas où, pourvu que, si, alors que, parce que, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q3",
            "type": "mcq",
            "prompt": "Les conjonctions de subordination se placent :",
            "options": [
              "À la fin du paragraphe",
              "Entre deux paragraphes uniquement",
              "En tête de proposition, à l'intérieur de la phrase",
              "Après le point final"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon précise qu'ils sont internes à la phrase et se placent en tête de proposition."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "« Car » dans l'exemple de la leçon",
          "stepTheme": "« Car » dans l'exemple de la leçon",
          "stepBadge": "« Car » dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Il est absent aujourd'hui car il est malade ».\nLe connecteur « car » y est une conjonction de coordination.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q4",
            "type": "mcq",
            "prompt": "Dans « Il est absent aujourd'hui car il est malade », « car » est :",
            "options": [
              "Un adverbe de liaison",
              "Une préposition",
              "Un pronom relatif",
              "Une conjonction de coordination"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Car » figure dans la liste des conjonctions de coordination donnée par la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "« Pourvu que » dans l'exemple de la leçon",
          "stepTheme": "« Pourvu que » dans l'exemple de la leçon",
          "stepBadge": "« Pourvu que » dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Vous pouvez réussir pourvu que vous travailliez sans relâche ».\nLe connecteur « pourvu que » y introduit la proposition subordonnée.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q5",
            "type": "mcq",
            "prompt": "Dans cet exemple, « pourvu que » est :",
            "options": [
              "Une conjonction de subordination",
              "Une conjonction de coordination",
              "Une locution adverbiale",
              "Une préposition"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Pourvu que » est cité dans la liste des conjonctions de subordination de la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "« Donc » ne subordonne pas",
          "stepTheme": "« Donc » ne subordonne pas",
          "stepBadge": "« Donc » ne subordonne pas",
          "paragraphText": "Piège : classer « donc » parmi les conjonctions de subordination parce qu'il exprime souvent une conséquence.\nDans l'exemple « Le ciel est nuageux, donc il va sans doute pleuvoir », « donc » est une conjonction de coordination.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q6",
            "type": "mcq",
            "prompt": "Dans « Le ciel est nuageux, donc il va sans doute pleuvoir », « donc » est :",
            "options": [
              "Une conjonction de subordination",
              "Une conjonction de coordination",
              "Un adverbe de manière",
              "Une préposition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Donc » appartient à la liste des conjonctions de coordination : mais, ou, et, donc, or, ni, car."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q1",
          "type": "mcq",
          "prompt": "Les connecteurs logiques sont :",
          "options": [
            "Des mots ou locutions invariables qui marquent un lien entre des idées",
            "Uniquement des signes de ponctuation",
            "Des mots qui changent de forme selon le sujet",
            "Des verbes conjugués au présent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition de la leçon : invariables, ils assurent la progression logique et marquent un lien entre idées, propositions ou paragraphes."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces listes donne les conjonctions de coordination ?",
          "options": [
            "Parce que, bien que, pour que, si",
            "Mais, ou, et, donc, or, ni, car",
            "D'abord, ensuite, enfin, bref",
            "Pour, malgré, sauf, avec"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne exactement cette liste de sept conjonctions de coordination."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q3",
          "type": "mcq",
          "prompt": "Les conjonctions de subordination se placent :",
          "options": [
            "À la fin du paragraphe",
            "Entre deux paragraphes uniquement",
            "En tête de proposition, à l'intérieur de la phrase",
            "Après le point final"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon précise qu'ils sont internes à la phrase et se placent en tête de proposition."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q4",
          "type": "mcq",
          "prompt": "Dans « Il est absent aujourd'hui car il est malade », « car » est :",
          "options": [
            "Un adverbe de liaison",
            "Une préposition",
            "Un pronom relatif",
            "Une conjonction de coordination"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Car » figure dans la liste des conjonctions de coordination donnée par la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q5",
          "type": "mcq",
          "prompt": "Dans cet exemple, « pourvu que » est :",
          "options": [
            "Une conjonction de subordination",
            "Une conjonction de coordination",
            "Une locution adverbiale",
            "Une préposition"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Pourvu que » est cité dans la liste des conjonctions de subordination de la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p01_q6",
          "type": "mcq",
          "prompt": "Dans « Le ciel est nuageux, donc il va sans doute pleuvoir », « donc » est :",
          "options": [
            "Une conjonction de subordination",
            "Une conjonction de coordination",
            "Un adverbe de manière",
            "Une préposition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Donc » appartient à la liste des conjonctions de coordination : mais, ou, et, donc, or, ni, car."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02",
      "order": 2,
      "title": "Adverbes de liaison et prépositions",
      "summary": "Reconnaître les adverbes de liaison et les prépositions qui fonctionnent comme connecteurs logiques.",
      "conceptExplanation": "Troisième classe de connecteurs : les adverbes de liaison et locutions adverbiales. La leçon cite : d'abord, premièrement, d'une part, d'autre part, en somme, cependant, toutefois, néanmoins, pourtant, etc. Exemple : « Il est robuste, pourtant, il a un moral faible ».\nQuatrième classe : les prépositions introduisant un groupe prépositionnel complément circonstanciel. On peut citer : pour, malgré + GN, sauf, grâce à, à cause de, avec, contrairement à, etc. Exemples : « Je pars à cause du froid » et « Malgré sa timidité, elle est allée voir la maitresse ».\nL'exercice de la leçon demande d'identifier la nature des connecteurs dans quatre phrases, dont : « Malgré les recommandations de ses parents, il s'est engagé dans l'armée », « L'enfant pleure car il a faim », « Le Corona virus est mortel donc il faut se protéger » et « Son ordinateur ne fonctionne plus pourtant elle est neuve ».",
      "keyRule": "Adverbes de liaison (pourtant, cependant, d'abord...) et prépositions (malgré, à cause de, grâce à...) sont aussi des connecteurs logiques.",
      "formulas": [],
      "workedExample": {
        "title": "L'exercice d'identification de la leçon",
        "statement": "Identifie la nature du connecteur dans chacune des phrases de l'exercice : « Malgré les recommandations de ses parents, il s'est engagé dans l'armée » et « L'enfant pleure car il a faim ».",
        "methodSteps": [
          "« Malgré » introduit le groupe nominal « les recommandations de ses parents » : c'est une préposition introduisant un groupe prépositionnel.",
          "« Car » appartient à la liste des conjonctions de coordination.",
          "On vérifie chaque réponse dans les listes de classes données par la leçon."
        ],
        "conclusion": "« Malgré » est une préposition et « car » une conjonction de coordination : identifier un connecteur, c'est d'abord trouver sa classe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les adverbes de liaison",
          "stepTheme": "Les adverbes de liaison",
          "stepBadge": "Les adverbes de liaison",
          "paragraphText": "• Adverbes de liaison et locutions adverbiales : d'abord, premièrement, d'une part, d'autre part, en somme, cependant, toutefois, néanmoins, pourtant, etc.\nIls relient les idées à l'intérieur du texte sans être des conjonctions.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q1",
            "type": "mcq",
            "prompt": "« Pourtant » appartient à la classe :",
            "options": [
              "Des conjonctions de coordination",
              "Des adverbes de liaison et locutions adverbiales",
              "Des prépositions",
              "Des conjonctions de subordination"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Pourtant » est cité dans la liste des adverbes de liaison et locutions adverbiales de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les prépositions connecteurs",
          "stepTheme": "Les prépositions connecteurs",
          "stepBadge": "Les prépositions connecteurs",
          "paragraphText": "• Prépositions introduisant un groupe prépositionnel complément circonstanciel : pour, malgré + GN, sauf, grâce à, à cause de, avec, contrairement à, etc.\nElles introduisent un groupe nominal, contrairement aux conjonctions qui relient des propositions.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q2",
            "type": "mcq",
            "prompt": "« Malgré » suivi d'un groupe nominal est :",
            "options": [
              "Une conjonction de subordination",
              "Un adverbe de liaison",
              "Une préposition",
              "Une conjonction de coordination"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon classe « malgré + GN » parmi les prépositions introduisant un groupe prépositionnel complément circonstanciel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "« À cause de » dans l'exemple de la leçon",
          "stepTheme": "« À cause de » dans l'exemple de la leçon",
          "stepBadge": "« À cause de » dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Je pars à cause du froid ».\nLe connecteur « à cause de » (ici « à cause du ») est une préposition qui introduit le groupe nominal « le froid ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q3",
            "type": "mcq",
            "prompt": "Dans « Je pars à cause du froid », le connecteur est :",
            "options": [
              "Une conjonction de coordination",
              "Une locution adverbiale",
              "Un pronom",
              "Une préposition introduisant un groupe prépositionnel"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« À cause de » figure dans la liste des prépositions de la leçon, avec « grâce à », « malgré » et « contrairement à »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "« Pourtant » entre deux idées",
          "stepTheme": "« Pourtant » entre deux idées",
          "stepBadge": "« Pourtant » entre deux idées",
          "paragraphText": "Exemple de la leçon : « Il est robuste, pourtant, il a un moral faible ».\nL'adverbe de liaison « pourtant » relie deux idées qui s'opposent : la robustesse et la faiblesse du moral.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q4",
            "type": "mcq",
            "prompt": "Dans cet exemple, « pourtant » relie :",
            "options": [
              "Deux idées qui s'opposent",
              "Deux idées qui s'additionnent",
              "Une cause et son exemple",
              "Deux phrases sans aucun lien"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Robuste » et « moral faible » s'opposent : « pourtant » marque ce contraste entre les deux propositions."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "« Malgré » ne se construit pas comme « bien que »",
          "stepTheme": "« Malgré » ne se construit pas comme « bien que »",
          "stepBadge": "« Malgré » ne se construit pas comme « bien que »",
          "paragraphText": "Piège : confondre « malgré », préposition suivie d'un groupe nominal, avec « bien que », conjonction de subordination suivie d'une proposition.\nExemple de la leçon : « Malgré sa timidité, elle est allée voir la maitresse » : « malgré » introduit le groupe nominal « sa timidité ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q5",
            "type": "mcq",
            "prompt": "Dans « Malgré sa timidité, elle est allée voir la maitresse », « malgré » introduit :",
            "options": [
              "Une proposition subordonnée",
              "Le groupe nominal « sa timidité »",
              "Un adverbe de liaison",
              "Une phrase entière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Malgré + GN » : la préposition introduit un groupe nominal, pas une proposition avec verbe conjugué."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Identifier la nature d'un connecteur",
          "stepTheme": "Identifier la nature d'un connecteur",
          "stepBadge": "Identifier la nature d'un connecteur",
          "paragraphText": "Méthode de l'exercice de la leçon : repérer le connecteur, puis regarder ce qu'il introduit.\nS'il introduit un groupe nominal, c'est une préposition ; s'il relie deux propositions de même niveau, une coordination ; s'il ouvre une subordonnée, une subordination ; sinon, vérifier la liste des adverbes de liaison.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q6",
            "type": "mcq",
            "prompt": "Dans « Le Corona virus est mortel donc il faut se protéger », « donc » est :",
            "options": [
              "Une préposition",
              "Un adverbe de liaison",
              "Une conjonction de coordination",
              "Une conjonction de subordination"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Donc » appartient à la liste des conjonctions de coordination, comme dans l'exemple du ciel nuageux."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q1",
          "type": "mcq",
          "prompt": "« Pourtant » appartient à la classe :",
          "options": [
            "Des conjonctions de coordination",
            "Des adverbes de liaison et locutions adverbiales",
            "Des prépositions",
            "Des conjonctions de subordination"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Pourtant » est cité dans la liste des adverbes de liaison et locutions adverbiales de la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q2",
          "type": "mcq",
          "prompt": "« Malgré » suivi d'un groupe nominal est :",
          "options": [
            "Une conjonction de subordination",
            "Un adverbe de liaison",
            "Une préposition",
            "Une conjonction de coordination"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon classe « malgré + GN » parmi les prépositions introduisant un groupe prépositionnel complément circonstanciel."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q3",
          "type": "mcq",
          "prompt": "Dans « Je pars à cause du froid », le connecteur est :",
          "options": [
            "Une conjonction de coordination",
            "Une locution adverbiale",
            "Un pronom",
            "Une préposition introduisant un groupe prépositionnel"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« À cause de » figure dans la liste des prépositions de la leçon, avec « grâce à », « malgré » et « contrairement à »."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q4",
          "type": "mcq",
          "prompt": "Dans cet exemple, « pourtant » relie :",
          "options": [
            "Deux idées qui s'opposent",
            "Deux idées qui s'additionnent",
            "Une cause et son exemple",
            "Deux phrases sans aucun lien"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Robuste » et « moral faible » s'opposent : « pourtant » marque ce contraste entre les deux propositions."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q5",
          "type": "mcq",
          "prompt": "Dans « Malgré sa timidité, elle est allée voir la maitresse », « malgré » introduit :",
          "options": [
            "Une proposition subordonnée",
            "Le groupe nominal « sa timidité »",
            "Un adverbe de liaison",
            "Une phrase entière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Malgré + GN » : la préposition introduit un groupe nominal, pas une proposition avec verbe conjugué."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p02_q6",
          "type": "mcq",
          "prompt": "Dans « Le Corona virus est mortel donc il faut se protéger », « donc » est :",
          "options": [
            "Une préposition",
            "Un adverbe de liaison",
            "Une conjonction de coordination",
            "Une conjonction de subordination"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Donc » appartient à la liste des conjonctions de coordination, comme dans l'exemple du ciel nuageux."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03",
      "order": 3,
      "title": "Les valeurs de cause et de conséquence",
      "summary": "Employer les connecteurs qui apportent une justification (cause) et ceux qui donnent le résultat d'un fait (conséquence).",
      "conceptExplanation": "Les connecteurs logiques peuvent exprimer plusieurs rapports. Le rapport de cause : les connecteurs qui marquent la cause apportent des preuves, des justifications. Ce sont : comme, car, parce que, étant donné que, en raison de, vu que, sous prétexte que, puisque, etc. Exemple : « Je pense que je ne vais pas venir parce qu'il pleut ».\nLe rapport de conséquence : les connecteurs qui expriment la conséquence donnent les résultats d'un fait. Ce sont : donc, de sorte que, si bien que, au point que, par conséquent, aussi, c'est pourquoi, etc. Exemple : « Il pleut, par conséquent je ne vais pas venir ».\nL'exercice de la leçon demande de transformer des phrases en établissant un rapport de conséquence, par exemple : les pluies ont été abondantes et les rivières ont débordé ; il pleuvait de plus en plus et il ouvrit son parapluie.",
      "keyRule": "Cause = preuve ou justification (parce que, car, puisque...) ; conséquence = résultat d'un fait (donc, par conséquent, si bien que...).",
      "formulas": [],
      "workedExample": {
        "title": "Transformer deux faits en rapport de conséquence",
        "statement": "Transforme, comme le demande l'exercice de la leçon, les deux faits « les pluies ont été abondantes » et « les rivières ont débordé » en une phrase exprimant un rapport de conséquence.",
        "methodSteps": [
          "On repère le fait de départ : les pluies ont été abondantes.",
          "On repère le résultat : les rivières ont débordé.",
          "On choisit un connecteur de conséquence de la liste, par exemple « si bien que » ou « de sorte que ».",
          "On obtient : les pluies ont été abondantes, si bien que les rivières ont débordé."
        ],
        "conclusion": "Le connecteur de conséquence place le résultat après le fait qui le produit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rapport de cause",
          "stepTheme": "Le rapport de cause",
          "stepBadge": "Le rapport de cause",
          "paragraphText": "• Rapport de cause : les connecteurs qui le marquent apportent des preuves, des justifications.\nCe sont : comme, car, parce que, étant donné que, en raison de, vu que, sous prétexte que, puisque, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q1",
            "type": "mcq",
            "prompt": "Les connecteurs de cause apportent :",
            "options": [
              "Un résultat",
              "Des preuves et des justifications",
              "Un ordre chronologique",
              "Une comparaison"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : marquer la cause, c'est apporter des preuves et des justifications."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le rapport de conséquence",
          "stepTheme": "Le rapport de conséquence",
          "stepBadge": "Le rapport de conséquence",
          "paragraphText": "• Rapport de conséquence : les connecteurs qui l'expriment donnent les résultats d'un fait.\nCe sont : donc, de sorte que, si bien que, au point que, par conséquent, aussi, c'est pourquoi, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q2",
            "type": "mcq",
            "prompt": "« Par conséquent » exprime :",
            "options": [
              "La cause",
              "L'opposition",
              "La conséquence",
              "Le but"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Par conséquent » figure dans la liste des connecteurs de conséquence, comme dans l'exemple « Il pleut, par conséquent je ne vais pas venir »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La cause dans l'exemple de la leçon",
          "stepTheme": "La cause dans l'exemple de la leçon",
          "stepBadge": "La cause dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Je pense que je ne vais pas venir parce qu'il pleut ».\nLe connecteur « parce que » introduit la justification : la pluie.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q3",
            "type": "mcq",
            "prompt": "Dans cet exemple, la cause de la décision est :",
            "options": [
              "Le fait de penser",
              "La venue possible",
              "Le départ du locuteur",
              "La pluie, introduite par « parce que »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Parce qu'il pleut » donne la justification : la pluie est la cause avancée par le locuteur."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La conséquence dans l'exemple de la leçon",
          "stepTheme": "La conséquence dans l'exemple de la leçon",
          "stepBadge": "La conséquence dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Il pleut, par conséquent je ne vais pas venir ».\nLe fait est la pluie ; le résultat, introduit par « par conséquent », est la décision de ne pas venir.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q4",
            "type": "mcq",
            "prompt": "Dans cet exemple, le résultat exprimé après « par conséquent » est :",
            "options": [
              "Je ne vais pas venir",
              "Il pleut",
              "Il fait beau",
              "Je vais venir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le connecteur de conséquence introduit le résultat du fait « il pleut » : la décision de ne pas venir."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas inverser cause et conséquence",
          "stepTheme": "Ne pas inverser cause et conséquence",
          "stepBadge": "Ne pas inverser cause et conséquence",
          "paragraphText": "Piège : dans « Il pleut, par conséquent je ne vais pas venir », prendre la décision pour la cause.\nLa cause est le premier fait (la pluie) ; la conséquence est ce qui en résulte et suit le connecteur de conséquence.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q5",
            "type": "mcq",
            "prompt": "Dans cette phrase, la cause est :",
            "options": [
              "Je ne vais pas venir",
              "La pluie",
              "Le connecteur « par conséquent »",
              "Il n'y a pas de cause"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La pluie est le fait de départ ; la décision de ne pas venir est son résultat, sa conséquence."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Choisir le bon rapport",
          "stepTheme": "Choisir le bon rapport",
          "stepBadge": "Choisir le bon rapport",
          "paragraphText": "Méthode : se demander ce que la seconde idée apporte à la première.\nSi elle la justifie, choisir un connecteur de cause (parce que, puisque, car) ; si elle en donne le résultat, choisir un connecteur de conséquence (donc, si bien que, c'est pourquoi).",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases relie les deux faits par un connecteur de conséquence placé après le fait « il fait froid » ?",
            "options": [
              "Je mets un pull parce qu'il fait froid",
              "Il fait froid, si bien que je mets un pull",
              "Je mets un pull bien qu'il fasse froid",
              "Il fait froid, pourtant je mets un pull"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Si bien que », placé après le fait « il fait froid », est un connecteur de conséquence : le pull est le résultat du froid. « Parce que » marquerait la cause, « bien que » et « pourtant » l'opposition."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q1",
          "type": "mcq",
          "prompt": "Les connecteurs de cause apportent :",
          "options": [
            "Un résultat",
            "Des preuves et des justifications",
            "Un ordre chronologique",
            "Une comparaison"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : marquer la cause, c'est apporter des preuves et des justifications."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q2",
          "type": "mcq",
          "prompt": "« Par conséquent » exprime :",
          "options": [
            "La cause",
            "L'opposition",
            "La conséquence",
            "Le but"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Par conséquent » figure dans la liste des connecteurs de conséquence, comme dans l'exemple « Il pleut, par conséquent je ne vais pas venir »."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q3",
          "type": "mcq",
          "prompt": "Dans cet exemple, la cause de la décision est :",
          "options": [
            "Le fait de penser",
            "La venue possible",
            "Le départ du locuteur",
            "La pluie, introduite par « parce que »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Parce qu'il pleut » donne la justification : la pluie est la cause avancée par le locuteur."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q4",
          "type": "mcq",
          "prompt": "Dans cet exemple, le résultat exprimé après « par conséquent » est :",
          "options": [
            "Je ne vais pas venir",
            "Il pleut",
            "Il fait beau",
            "Je vais venir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le connecteur de conséquence introduit le résultat du fait « il pleut » : la décision de ne pas venir."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q5",
          "type": "mcq",
          "prompt": "Dans cette phrase, la cause est :",
          "options": [
            "Je ne vais pas venir",
            "La pluie",
            "Le connecteur « par conséquent »",
            "Il n'y a pas de cause"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La pluie est le fait de départ ; la décision de ne pas venir est son résultat, sa conséquence."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p03_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases relie les deux faits par un connecteur de conséquence placé après le fait « il fait froid » ?",
          "options": [
            "Je mets un pull parce qu'il fait froid",
            "Il fait froid, si bien que je mets un pull",
            "Je mets un pull bien qu'il fasse froid",
            "Il fait froid, pourtant je mets un pull"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Si bien que », placé après le fait « il fait froid », est un connecteur de conséquence : le pull est le résultat du froid. « Parce que » marquerait la cause, « bien que » et « pourtant » l'opposition."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04",
      "order": 4,
      "title": "Les valeurs d'opposition et d'addition",
      "summary": "Employer les connecteurs qui réfutent l'argument opposé et ceux qui introduisent une idée nouvelle.",
      "conceptExplanation": "Le rapport d'opposition ou de concession : les connecteurs qui le marquent réfutent l'argument opposé. Ce sont : pourtant, bien que, quoi que, tandis que, toutefois, cependant, néanmoins, en revanche, au contraire, malgré tout, certes, etc. Exemple : « Luc est très malade cependant il reste dévoué à la tâche ». L'exercice de la leçon demande des phrases avec les connecteurs « malgré » et « au lieu de ».\nLe rapport d'addition : les connecteurs qui le marquent introduisent une idée ou une information nouvelle. Ce sont : et, de même que, sans compter, ainsi que, d'ailleurs, encore, de plus, quant à, de surcroît, etc. Exemple : « Il est arrivé en retard, de surcroît il a salué avec arrogance ». L'exercice demande des phrases avec « encore », « d'ailleurs » et « quant à ».",
      "keyRule": "Opposition : le connecteur réfute ou concède (cependant, pourtant, bien que...) ; addition : il ajoute une idée nouvelle (de plus, d'ailleurs, de surcroît...).",
      "formulas": [],
      "workedExample": {
        "title": "Deux rapports dans les exemples de la leçon",
        "statement": "Quel rapport chaque connecteur marque-t-il dans « Luc est très malade cependant il reste dévoué à la tâche » et « Il est arrivé en retard, de surcroît il a salué avec arrogance » ?",
        "methodSteps": [
          "Dans la première phrase, être très malade devrait empêcher le dévouement : « cependant » réfute cette attente, c'est un rapport d'opposition.",
          "Dans la seconde phrase, saluer avec arrogance s'ajoute à l'arrivée en retard : « de surcroît » introduit une information nouvelle, c'est un rapport d'addition.",
          "On vérifie les deux connecteurs dans les listes de la leçon."
        ],
        "conclusion": "« Cependant » oppose, « de surcroît » ajoute : le rapport se lit dans le sens des deux idées reliées."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rapport d'opposition",
          "stepTheme": "Le rapport d'opposition",
          "stepBadge": "Le rapport d'opposition",
          "paragraphText": "• Rapport d'opposition ou de concession : les connecteurs qui le marquent réfutent l'argument opposé.\nCe sont : pourtant, bien que, quoi que, tandis que, toutefois, cependant, néanmoins, en revanche, au contraire, malgré tout, certes, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q1",
            "type": "mcq",
            "prompt": "Les connecteurs d'opposition servent à :",
            "options": [
              "Donner un résultat",
              "Réfuter l'argument opposé",
              "Ordonner les arguments",
              "Introduire un but"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la valeur donnée par la leçon : les connecteurs d'opposition réfutent l'argument opposé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le rapport d'addition",
          "stepTheme": "Le rapport d'addition",
          "stepBadge": "Le rapport d'addition",
          "paragraphText": "• Rapport d'addition : les connecteurs qui le marquent introduisent une idée ou une information nouvelle.\nCe sont : et, de même que, sans compter, ainsi que, d'ailleurs, encore, de plus, quant à, de surcroît, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q2",
            "type": "mcq",
            "prompt": "« De plus » marque un rapport :",
            "options": [
              "De cause",
              "De but",
              "D'addition",
              "De comparaison"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« De plus » figure dans la liste des connecteurs d'addition, qui introduisent une idée ou une information nouvelle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "« Cependant » dans l'exemple de la leçon",
          "stepTheme": "« Cependant » dans l'exemple de la leçon",
          "stepBadge": "« Cependant » dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Luc est très malade cependant il reste dévoué à la tâche ».\nLa maladie s'oppose au dévouement que Luc continue pourtant de montrer.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q3",
            "type": "mcq",
            "prompt": "Dans cet exemple, « cependant » marque :",
            "options": [
              "Une addition",
              "Une conclusion",
              "Une condition",
              "Une opposition"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Cependant » est un connecteur d'opposition : le dévouement persiste malgré la maladie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "« De surcroît » dans l'exemple de la leçon",
          "stepTheme": "« De surcroît » dans l'exemple de la leçon",
          "stepBadge": "« De surcroît » dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Il est arrivé en retard, de surcroît il a salué avec arrogance ».\n« De surcroît » ajoute un second reproche au premier : l'arrogance après le retard.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q4",
            "type": "mcq",
            "prompt": "Dans cet exemple, « de surcroît » introduit :",
            "options": [
              "Une idée nouvelle qui s'ajoute à la première",
              "Une justification du retard",
              "Une conclusion du texte",
              "Une comparaison"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« De surcroît » est un connecteur d'addition : il introduit une information nouvelle, l'arrogance, après le retard."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "« Certes » est dans la liste d'opposition",
          "stepTheme": "« Certes » est dans la liste d'opposition",
          "stepBadge": "« Certes » est dans la liste d'opposition",
          "paragraphText": "Piège : écarter « certes » des connecteurs d'opposition parce qu'il semble seulement affirmer.\nLa leçon le range bien dans la liste des connecteurs marquant le rapport d'opposition ou de concession, avec « malgré tout », « en revanche » et « au contraire ».",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q5",
            "type": "mcq",
            "prompt": "Selon la leçon, « certes » appartient aux connecteurs :",
            "options": [
              "D'addition",
              "D'opposition ou de concession",
              "De conclusion",
              "De but"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La liste d'opposition de la leçon se termine par « malgré tout, certes, etc. » : « certes » y figure bien."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Employer « malgré » et « au lieu de »",
          "stepTheme": "Employer « malgré » et « au lieu de »",
          "stepBadge": "Employer « malgré » et « au lieu de »",
          "paragraphText": "Méthode de l'exercice de la leçon : faire des phrases avec « malgré » et « au lieu de ».\n« Malgré » est une préposition suivie d'un groupe nominal ; il marque l'opposition entre ce qui était attendu et ce qui se produit.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases emploie « malgré » comme dans l'exercice de la leçon ?",
            "options": [
              "Il travaille malgré que la nuit tombe",
              "Malgré, il est venu",
              "Malgré la pluie, la fête a eu lieu",
              "Il est venu malgré de la pluie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Malgré » est suivi du groupe nominal « la pluie » et marque l'opposition entre la pluie et la tenue de la fête."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q1",
          "type": "mcq",
          "prompt": "Les connecteurs d'opposition servent à :",
          "options": [
            "Donner un résultat",
            "Réfuter l'argument opposé",
            "Ordonner les arguments",
            "Introduire un but"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la valeur donnée par la leçon : les connecteurs d'opposition réfutent l'argument opposé."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q2",
          "type": "mcq",
          "prompt": "« De plus » marque un rapport :",
          "options": [
            "De cause",
            "De but",
            "D'addition",
            "De comparaison"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« De plus » figure dans la liste des connecteurs d'addition, qui introduisent une idée ou une information nouvelle."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q3",
          "type": "mcq",
          "prompt": "Dans cet exemple, « cependant » marque :",
          "options": [
            "Une addition",
            "Une conclusion",
            "Une condition",
            "Une opposition"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Cependant » est un connecteur d'opposition : le dévouement persiste malgré la maladie."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q4",
          "type": "mcq",
          "prompt": "Dans cet exemple, « de surcroît » introduit :",
          "options": [
            "Une idée nouvelle qui s'ajoute à la première",
            "Une justification du retard",
            "Une conclusion du texte",
            "Une comparaison"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« De surcroît » est un connecteur d'addition : il introduit une information nouvelle, l'arrogance, après le retard."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q5",
          "type": "mcq",
          "prompt": "Selon la leçon, « certes » appartient aux connecteurs :",
          "options": [
            "D'addition",
            "D'opposition ou de concession",
            "De conclusion",
            "De but"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La liste d'opposition de la leçon se termine par « malgré tout, certes, etc. » : « certes » y figure bien."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p04_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases emploie « malgré » comme dans l'exercice de la leçon ?",
          "options": [
            "Il travaille malgré que la nuit tombe",
            "Malgré, il est venu",
            "Malgré la pluie, la fête a eu lieu",
            "Il est venu malgré de la pluie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Malgré » est suivi du groupe nominal « la pluie » et marque l'opposition entre la pluie et la tenue de la fête."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05",
      "order": 5,
      "title": "Les valeurs de condition et de but",
      "summary": "Employer les connecteurs qui indiquent une condition ou une hypothèse et ceux qui indiquent une finalité.",
      "conceptExplanation": "Le rapport de condition ou d'hypothèse : les connecteurs qui l'introduisent indiquent une condition ou une hypothèse. Ce sont : si, au cas où, en cas de, à condition de, pourvu que, etc. Exemple : « Tu peux réussir brillamment au bac pourvu que tu te mettes au travail ». L'exercice de la leçon demande deux phrases où le connecteur exprime un rapport de condition par subordination.\nLe rapport de but : les connecteurs qui l'introduisent indiquent une finalité, un objectif. Ce sont : pour que, de peur que, de crainte que, afin que, pour, dans le but que, etc. Exemples : « Je vais à l'école pour apprendre » et « Il prend des précautions pour que ses enfants ne tombent pas malades ». L'exercice demande des phrases avec « de peur de », « afin de » et « en vue de ».",
      "keyRule": "Condition : le fait dépend d'une hypothèse (si, pourvu que, à condition de...) ; but : le connecteur annonce la finalité visée (pour que, afin que, pour...).",
      "formulas": [],
      "workedExample": {
        "title": "Condition et but dans les exemples de la leçon",
        "statement": "Distingue les deux rapports dans « Tu peux réussir brillamment au bac pourvu que tu te mettes au travail » et « Il prend des précautions pour que ses enfants ne tombent pas malades ».",
        "methodSteps": [
          "« Pourvu que » figure dans la liste des connecteurs de condition : la réussite dépend du travail.",
          "« Pour que » figure dans la liste des connecteurs de but : les précautions visent la santé des enfants.",
          "La condition dit à quelle condition le fait se réalise ; le but dit dans quelle intention il est accompli."
        ],
        "conclusion": "« Pourvu que » pose la condition de la réussite ; « pour que » donne la finalité des précautions."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rapport de condition",
          "stepTheme": "Le rapport de condition",
          "stepBadge": "Le rapport de condition",
          "paragraphText": "• Rapport de condition ou d'hypothèse : les connecteurs qui l'introduisent indiquent une condition ou une hypothèse.\nCe sont : si, au cas où, en cas de, à condition de, pourvu que, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q1",
            "type": "mcq",
            "prompt": "« À condition de » introduit :",
            "options": [
              "Un but",
              "Une condition",
              "Une conséquence",
              "Une opposition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« À condition de » figure dans la liste des connecteurs de condition ou d'hypothèse de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le rapport de but",
          "stepTheme": "Le rapport de but",
          "stepBadge": "Le rapport de but",
          "paragraphText": "• Rapport de but : les connecteurs qui l'introduisent indiquent une finalité, un objectif.\nCe sont : pour que, de peur que, de crainte que, afin que, pour, dans le but que, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q2",
            "type": "mcq",
            "prompt": "Les connecteurs de but indiquent :",
            "options": [
              "Une justification",
              "Une information nouvelle",
              "Une finalité, un objectif",
              "Un ordre des arguments"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition de la leçon : le but est une finalité, un objectif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La condition dans l'exemple de la leçon",
          "stepTheme": "La condition dans l'exemple de la leçon",
          "stepBadge": "La condition dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Tu peux réussir brillamment au bac pourvu que tu te mettes au travail ».\nLa réussite est possible, à condition de se mettre au travail.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q3",
            "type": "mcq",
            "prompt": "Dans cet exemple, la condition de la réussite est :",
            "options": [
              "L'obtention du bac",
              "Le fait de réussir brillamment",
              "La fin de l'année scolaire",
              "Le fait de se mettre au travail"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Pourvu que tu te mettes au travail » pose la condition : sans travail, pas de réussite brillante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le but dans l'exemple de la leçon",
          "stepTheme": "Le but dans l'exemple de la leçon",
          "stepBadge": "Le but dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Je vais à l'école pour apprendre ».\nLe connecteur « pour » introduit la finalité de l'action d'aller à l'école.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q4",
            "type": "mcq",
            "prompt": "Dans cet exemple, le but exprimé par « pour » est :",
            "options": [
              "Apprendre",
              "Aller",
              "L'école",
              "Le chemin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "« Pour apprendre » donne l'objectif, la finalité de l'action : le but est d'apprendre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "« Pourvu que » n'exprime pas le but ici",
          "stepTheme": "« Pourvu que » n'exprime pas le but ici",
          "stepBadge": "« Pourvu que » n'exprime pas le but ici",
          "paragraphText": "Piège : confondre « pourvu que » (condition) avec « pour que » (but), qui se ressemblent.\nLa leçon range « pourvu que » parmi les connecteurs de condition, dans l'exemple de la réussite au bac, et « pour que » parmi les connecteurs de but.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q5",
            "type": "mcq",
            "prompt": "Dans la leçon, « pourvu que » exprime :",
            "options": [
              "Le but",
              "La condition",
              "La conséquence",
              "L'addition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Pourvu que » est cité à la fois dans les conjonctions de subordination et dans la liste des connecteurs de condition."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Construire une condition par subordination",
          "stepTheme": "Construire une condition par subordination",
          "stepBadge": "Construire une condition par subordination",
          "paragraphText": "Méthode de l'exercice de la leçon : construire des phrases où le connecteur exprime un rapport de condition par subordination.\nOn choisit un connecteur subordonnant de la liste (si, au cas où, pourvu que) et on le place en tête de la proposition qui pose la condition.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces phrases exprime une condition par subordination ?",
            "options": [
              "Je viendrai, et toi aussi",
              "Tu réussiras au cas où tu travaillerais régulièrement",
              "Il pleut donc je reste",
              "D'abord je révise, ensuite je me repose"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Au cas où » est un connecteur de condition qui introduit une proposition subordonnée ; les autres phrases relèvent de l'addition, de la conséquence et de l'ordre."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q1",
          "type": "mcq",
          "prompt": "« À condition de » introduit :",
          "options": [
            "Un but",
            "Une condition",
            "Une conséquence",
            "Une opposition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« À condition de » figure dans la liste des connecteurs de condition ou d'hypothèse de la leçon."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q2",
          "type": "mcq",
          "prompt": "Les connecteurs de but indiquent :",
          "options": [
            "Une justification",
            "Une information nouvelle",
            "Une finalité, un objectif",
            "Un ordre des arguments"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition de la leçon : le but est une finalité, un objectif."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q3",
          "type": "mcq",
          "prompt": "Dans cet exemple, la condition de la réussite est :",
          "options": [
            "L'obtention du bac",
            "Le fait de réussir brillamment",
            "La fin de l'année scolaire",
            "Le fait de se mettre au travail"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Pourvu que tu te mettes au travail » pose la condition : sans travail, pas de réussite brillante."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q4",
          "type": "mcq",
          "prompt": "Dans cet exemple, le but exprimé par « pour » est :",
          "options": [
            "Apprendre",
            "Aller",
            "L'école",
            "Le chemin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "« Pour apprendre » donne l'objectif, la finalité de l'action : le but est d'apprendre."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q5",
          "type": "mcq",
          "prompt": "Dans la leçon, « pourvu que » exprime :",
          "options": [
            "Le but",
            "La condition",
            "La conséquence",
            "L'addition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Pourvu que » est cité à la fois dans les conjonctions de subordination et dans la liste des connecteurs de condition."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p05_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces phrases exprime une condition par subordination ?",
          "options": [
            "Je viendrai, et toi aussi",
            "Tu réussiras au cas où tu travaillerais régulièrement",
            "Il pleut donc je reste",
            "D'abord je révise, ensuite je me repose"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Au cas où » est un connecteur de condition qui introduit une proposition subordonnée ; les autres phrases relèvent de l'addition, de la conséquence et de l'ordre."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06",
      "order": 6,
      "title": "Les valeurs d'ordre, de conclusion et de comparaison",
      "summary": "Ordonner les arguments, introduire une conclusion et exprimer un rapport de comparaison avec les bons connecteurs.",
      "conceptExplanation": "Le rapport d'ordre : ces connecteurs indiquent l'ordre des arguments dans le discours. Ce sont : d'abord, ensuite, enfin, premièrement, en premier lieu, d'une part, d'autre part. Exemple : « Nous corrigerons d'abord l'exercice d'hier, ensuite nous passerons au cours du jour ». L'application de la leçon demande d'employer « d'une part » et « d'autre part » dans une phrase.\nLe rapport de conclusion : ces connecteurs résument ou introduisent une conclusion. Ce sont : donc, ainsi, en somme, bref, en définitive, pour conclure, finalement, etc. Exemple : « Il a étudié au cours de l'année scolaire, ainsi il est passé en classe supérieure ». L'exercice demande deux phrases avec « pour conclure », « en définitive », « en bref », etc.\nLe rapport de comparaison : ces connecteurs expriment un rapport de comparaison quand ils mettent en rapport deux personnes, deux choses ou deux faits pour indiquer une ressemblance, une différence, une égalité, une inégalité ou une proportion. La leçon cite « plus... que », « aussi... que », etc., et donne l'exemple : « La mer est toute ronde comme une belle montre ». Elle demande aussi des phrases avec « ainsi que » et « à la manière de ».",
      "keyRule": "Ordre (d'abord, ensuite, enfin), conclusion (ainsi, en somme, pour conclure) et comparaison (plus... que, aussi... que) structurent et ferment le discours.",
      "formulas": [],
      "workedExample": {
        "title": "Ordonner, conclure, comparer",
        "statement": "Classe les connecteurs des exemples de la leçon : « d'abord » et « ensuite » dans la correction de l'exercice, « ainsi » dans le passage en classe supérieure, « comme » dans la phrase sur la mer.",
        "methodSteps": [
          "« D'abord » et « ensuite » indiquent la succession des tâches : rapport d'ordre.",
          "« Ainsi » résume et conclut à partir du travail de l'année : rapport de conclusion.",
          "« Comme » met en rapport la mer et une belle montre pour indiquer une ressemblance : rapport de comparaison."
        ],
        "conclusion": "Chaque connecteur prend sa valeur dans l'exemple : ordre pour la succession, conclusion pour le bilan, comparaison pour la ressemblance."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le rapport d'ordre",
          "stepTheme": "Le rapport d'ordre",
          "stepBadge": "Le rapport d'ordre",
          "paragraphText": "• Rapport d'ordre : les connecteurs qui l'indiquent montrent l'ordre des arguments dans le discours.\nCe sont : d'abord, ensuite, enfin, premièrement, en premier lieu, d'une part, d'autre part.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q1",
            "type": "mcq",
            "prompt": "Les connecteurs d'ordre indiquent :",
            "options": [
              "L'ordre des arguments dans le discours",
              "Une ressemblance entre deux faits",
              "Une finalité",
              "Une justification"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la valeur donnée par la leçon : ils organisent la succession des arguments."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le rapport de conclusion",
          "stepTheme": "Le rapport de conclusion",
          "stepBadge": "Le rapport de conclusion",
          "paragraphText": "• Rapport de conclusion : les connecteurs qui l'expriment résument ou introduisent une conclusion.\nCe sont : donc, ainsi, en somme, bref, en définitive, pour conclure, finalement, etc.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q2",
            "type": "mcq",
            "prompt": "« En définitive » est un connecteur :",
            "options": [
              "D'ordre",
              "De conclusion",
              "De condition",
              "D'opposition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« En définitive » figure dans la liste des connecteurs de conclusion, avec « en somme », « bref » et « pour conclure »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le rapport de comparaison",
          "stepTheme": "Le rapport de comparaison",
          "stepBadge": "Le rapport de comparaison",
          "paragraphText": "• Rapport de comparaison : les connecteurs l'expriment quand ils mettent en rapport deux personnes, deux choses ou deux faits.\nIls indiquent une ressemblance, une différence, une égalité, une inégalité ou une proportion.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q3",
            "type": "mcq",
            "prompt": "Un connecteur de comparaison peut indiquer :",
            "options": [
              "Uniquement une ressemblance",
              "Uniquement une différence",
              "Une ressemblance, une différence, une égalité, une inégalité ou une proportion",
              "Uniquement une proportion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon énumère ces cinq possibilités pour le rapport de comparaison."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'ordre dans l'exemple de la leçon",
          "stepTheme": "L'ordre dans l'exemple de la leçon",
          "stepBadge": "L'ordre dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « Nous corrigerons d'abord l'exercice d'hier, ensuite nous passerons au cours du jour ».\n« D'abord » annonce la première tâche, « ensuite » la seconde.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q4",
            "type": "mcq",
            "prompt": "Dans cet exemple, « ensuite » marque :",
            "options": [
              "La fin du discours",
              "Une conséquence",
              "Une opposition",
              "La tâche qui vient après la première"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Ensuite » est un connecteur d'ordre : il place le cours du jour après la correction de l'exercice d'hier."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La comparaison dans l'exemple de la leçon",
          "stepTheme": "La comparaison dans l'exemple de la leçon",
          "stepBadge": "La comparaison dans l'exemple de la leçon",
          "paragraphText": "Exemple de la leçon : « La mer est toute ronde comme une belle montre ».\nLe connecteur « comme » met en rapport la mer et une belle montre pour indiquer une ressemblance de forme.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q5",
            "type": "mcq",
            "prompt": "Dans cet exemple, la ressemblance porte sur :",
            "options": [
              "La forme ronde, entre la mer et une belle montre",
              "La couleur, entre la mer et le ciel",
              "La taille, entre deux mers",
              "Le prix, entre deux montres"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La phrase compare la mer à une belle montre par leur forme : toutes deux sont rondes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "« Donc » a deux lectures dans la leçon",
          "stepTheme": "« Donc » a deux lectures dans la leçon",
          "stepBadge": "« Donc » a deux lectures dans la leçon",
          "paragraphText": "Piège : croire que « donc » n'a qu'une seule valeur dans la leçon.\n« Donc » est d'abord classé parmi les conjonctions de coordination ; il figure aussi dans les listes des connecteurs de conséquence et de conclusion : c'est le contexte qui décide de sa valeur.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q6",
            "type": "mcq",
            "prompt": "Selon la leçon, « donc » apparaît dans les listes :",
            "options": [
              "De coordination seulement",
              "De coordination, de conséquence et de conclusion",
              "De comparaison seulement",
              "D'addition et de but"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Donc » est dans la liste des conjonctions de coordination, puis dans celles de la conséquence et de la conclusion : sa valeur dépend du contexte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q1",
          "type": "mcq",
          "prompt": "Les connecteurs d'ordre indiquent :",
          "options": [
            "L'ordre des arguments dans le discours",
            "Une ressemblance entre deux faits",
            "Une finalité",
            "Une justification"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la valeur donnée par la leçon : ils organisent la succession des arguments."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q2",
          "type": "mcq",
          "prompt": "« En définitive » est un connecteur :",
          "options": [
            "D'ordre",
            "De conclusion",
            "De condition",
            "D'opposition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« En définitive » figure dans la liste des connecteurs de conclusion, avec « en somme », « bref » et « pour conclure »."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q3",
          "type": "mcq",
          "prompt": "Un connecteur de comparaison peut indiquer :",
          "options": [
            "Uniquement une ressemblance",
            "Uniquement une différence",
            "Une ressemblance, une différence, une égalité, une inégalité ou une proportion",
            "Uniquement une proportion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon énumère ces cinq possibilités pour le rapport de comparaison."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q4",
          "type": "mcq",
          "prompt": "Dans cet exemple, « ensuite » marque :",
          "options": [
            "La fin du discours",
            "Une conséquence",
            "Une opposition",
            "La tâche qui vient après la première"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Ensuite » est un connecteur d'ordre : il place le cours du jour après la correction de l'exercice d'hier."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q5",
          "type": "mcq",
          "prompt": "Dans cet exemple, la ressemblance porte sur :",
          "options": [
            "La forme ronde, entre la mer et une belle montre",
            "La couleur, entre la mer et le ciel",
            "La taille, entre deux mers",
            "Le prix, entre deux montres"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La phrase compare la mer à une belle montre par leur forme : toutes deux sont rondes."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p06_q6",
          "type": "mcq",
          "prompt": "Selon la leçon, « donc » apparaît dans les listes :",
          "options": [
            "De coordination seulement",
            "De coordination, de conséquence et de conclusion",
            "De comparaison seulement",
            "D'addition et de but"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Donc » est dans la liste des conjonctions de coordination, puis dans celles de la conséquence et de la conclusion : sa valeur dépend du contexte."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07",
      "order": 7,
      "title": "Connecteurs explicites et connecteurs implicites",
      "summary": "Distinguer les liens logiques exprimés clairement par un connecteur et ceux que le contexte seul permet de déduire.",
      "conceptExplanation": "Tous les connecteurs logiques étudiés précédemment sont exprimés de manière explicite, c'est-à-dire de façon claire, sans non-dit. Ils sont donc appelés connecteurs logiques explicites.\nIl en existe d'autres qui expriment un rapport implicite : ce sont les connecteurs logiques implicites. Ici, c'est le contexte qui permet de déduire le lien logique.\nTrois moyens expriment ce lien implicite. La ponctuation : deux idées peuvent être séparées par un point ou une virgule car elles constituent une suite logique ; la parenthèse ou les deux points peuvent introduire un exemple, une cause ou une conséquence. La disposition du texte : elle révèle, à l'aide des paragraphes, comment l'auteur envisage son argumentation. L'énonciation : les pronoms, les temps verbaux ou les termes appréciatifs peuvent souligner une relation logique sous-entendue.",
      "keyRule": "Explicite : le lien est dit par un connecteur, sans non-dit ; implicite : le lien se déduit du contexte (ponctuation, paragraphes, énonciation).",
      "formulas": [],
      "workedExample": {
        "title": "Un lien sans connecteur explicite",
        "statement": "Dans un texte, deux idées se suivent, séparées par deux points, et la seconde donne la cause de la première, sans aucun connecteur comme « parce que ». De quel type de lien s'agit-il et par quel moyen est-il exprimé ?",
        "methodSteps": [
          "Aucun connecteur explicite ne marque le rapport de cause.",
          "Le lien doit donc être déduit du contexte : c'est un rapport implicite.",
          "Le moyen qui l'exprime est la ponctuation : les deux points peuvent introduire un exemple, une cause ou une conséquence."
        ],
        "conclusion": "Quand la ponctuation seule porte le lien logique, le connecteur est implicite et le lecteur le déduit du contexte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les connecteurs explicites",
          "stepTheme": "Les connecteurs explicites",
          "stepBadge": "Les connecteurs explicites",
          "paragraphText": "• Connecteurs logiques explicites : connecteurs exprimés de manière explicite, c'est-à-dire de façon claire, sans non-dit.\nTous les connecteurs des listes précédentes (cause, conséquence, opposition, etc.) sont explicites.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q1",
            "type": "mcq",
            "prompt": "Un connecteur explicite exprime le lien logique :",
            "options": [
              "De façon sous-entendue",
              "De façon claire, sans non-dit",
              "Uniquement par la ponctuation",
              "Uniquement par les paragraphes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : explicite veut dire exprimé clairement, sans non-dit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les connecteurs implicites",
          "stepTheme": "Les connecteurs implicites",
          "stepBadge": "Les connecteurs implicites",
          "paragraphText": "• Connecteurs logiques implicites : liens logiques qui ne sont pas exprimés par un connecteur présent dans le texte.\nIci, c'est le contexte qui permet de déduire le lien logique.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q2",
            "type": "mcq",
            "prompt": "Pour un lien logique implicite, le lecteur déduit le rapport grâce :",
            "options": [
              "À un connecteur écrit en toutes lettres",
              "À la liste des conjonctions de coordination",
              "Au contexte",
              "À la table des matières"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon le dit : pour les connecteurs implicites, c'est le contexte qui permet de déduire le lien logique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de la ponctuation",
          "stepTheme": "Le rôle de la ponctuation",
          "stepBadge": "Le rôle de la ponctuation",
          "paragraphText": "La ponctuation peut porter un lien implicite : deux idées séparées par un point ou une virgule peuvent constituer une suite logique.\nLa parenthèse ou les deux points peuvent introduire un exemple, une cause ou une conséquence.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q3",
            "type": "mcq",
            "prompt": "Selon la leçon, les deux points peuvent introduire :",
            "options": [
              "Uniquement un dialogue",
              "Uniquement une énumération de noms",
              "Uniquement une citation",
              "Un exemple, une cause ou une conséquence"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La parenthèse et les deux points sont cités comme pouvant introduire un exemple, une cause ou une conséquence, sans connecteur explicite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de la disposition du texte",
          "stepTheme": "Le rôle de la disposition du texte",
          "stepBadge": "Le rôle de la disposition du texte",
          "paragraphText": "La disposition du texte révèle, à l'aide des paragraphes, comment l'auteur envisage son argumentation.\nLe découpage en paragraphes est donc un indice du lien logique entre les idées.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q4",
            "type": "mcq",
            "prompt": "La disposition du texte révèle l'argumentation de l'auteur grâce :",
            "options": [
              "Aux paragraphes",
              "Aux notes de bas de page",
              "À la couverture du livre",
              "Au nombre de pages"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon attribue ce rôle aux paragraphes : ils montrent comment l'auteur envisage son argumentation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de l'énonciation",
          "stepTheme": "Le rôle de l'énonciation",
          "stepBadge": "Le rôle de l'énonciation",
          "paragraphText": "L'énonciation peut souligner une relation logique sous-entendue.\nLa leçon cite trois indices : les pronoms, les temps verbaux et les termes appréciatifs.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q5",
            "type": "mcq",
            "prompt": "Les indices d'énonciation qui peuvent souligner un lien implicite sont :",
            "options": [
              "Les titres et les intertitres",
              "Les pronoms, les temps verbaux et les termes appréciatifs",
              "Les chiffres et les dates",
              "Les majuscules et les italiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois indices énumérés dans la leçon pour l'énonciation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Implicite ne veut pas dire absent",
          "stepTheme": "Implicite ne veut pas dire absent",
          "stepBadge": "Implicite ne veut pas dire absent",
          "paragraphText": "Piège : conclure qu'il n'y a aucun lien logique entre deux idées parce qu'aucun connecteur explicite ne les relie.\nLe lien peut être implicite : la ponctuation, la disposition en paragraphes ou l'énonciation le soulignent, et le contexte permet de le déduire.",
          "exercise": {
            "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q6",
            "type": "mcq",
            "prompt": "Si deux idées se suivent sans connecteur explicite, le lien logique :",
            "options": [
              "N'existe jamais",
              "Est toujours une comparaison",
              "Peut être implicite et se déduire du contexte",
              "Doit être inventé par le lecteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon distingue les connecteurs explicites des rapports implicites, déduits du contexte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q1",
          "type": "mcq",
          "prompt": "Un connecteur explicite exprime le lien logique :",
          "options": [
            "De façon sous-entendue",
            "De façon claire, sans non-dit",
            "Uniquement par la ponctuation",
            "Uniquement par les paragraphes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : explicite veut dire exprimé clairement, sans non-dit."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q2",
          "type": "mcq",
          "prompt": "Pour un lien logique implicite, le lecteur déduit le rapport grâce :",
          "options": [
            "À un connecteur écrit en toutes lettres",
            "À la liste des conjonctions de coordination",
            "Au contexte",
            "À la table des matières"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon le dit : pour les connecteurs implicites, c'est le contexte qui permet de déduire le lien logique."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q3",
          "type": "mcq",
          "prompt": "Selon la leçon, les deux points peuvent introduire :",
          "options": [
            "Uniquement un dialogue",
            "Uniquement une énumération de noms",
            "Uniquement une citation",
            "Un exemple, une cause ou une conséquence"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La parenthèse et les deux points sont cités comme pouvant introduire un exemple, une cause ou une conséquence, sans connecteur explicite."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q4",
          "type": "mcq",
          "prompt": "La disposition du texte révèle l'argumentation de l'auteur grâce :",
          "options": [
            "Aux paragraphes",
            "Aux notes de bas de page",
            "À la couverture du livre",
            "Au nombre de pages"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon attribue ce rôle aux paragraphes : ils montrent comment l'auteur envisage son argumentation."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q5",
          "type": "mcq",
          "prompt": "Les indices d'énonciation qui peuvent souligner un lien implicite sont :",
          "options": [
            "Les titres et les intertitres",
            "Les pronoms, les temps verbaux et les termes appréciatifs",
            "Les chiffres et les dates",
            "Les majuscules et les italiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois indices énumérés dans la leçon pour l'énonciation."
        },
        {
          "id": "terminale_a1_francais_pl_l13_connecteurs_logiques_p07_q6",
          "type": "mcq",
          "prompt": "Si deux idées se suivent sans connecteur explicite, le lien logique :",
          "options": [
            "N'existe jamais",
            "Est toujours une comparaison",
            "Peut être implicite et se déduire du contexte",
            "Doit être inventé par le lecteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon distingue les connecteurs explicites des rapports implicites, déduits du contexte."
        }
      ]
    }
  ]
};
