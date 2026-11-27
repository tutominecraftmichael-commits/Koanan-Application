import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La production écrite » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3759
export const FR_TLE_EE_L04_PRODUCTION_ECRITE: CurriculumChapter = {
  "id": "terminale_a1_francais_ee_l04_production_ecrite",
  "subjectId": "francais",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 4,
  "title": "Leçon 4 : La production écrite",
  "summary": "À partir d'un sujet portant sur un problème traité dans le texte, l'élève apprend à analyser le sujet, à en dégager le thème, la thèse et les mots-clés, puis à rechercher des idées et à les organiser pour étayer une affirmation dans un développement argumenté.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3759",
  "points": [
    {
      "id": "terminale_a1_francais_ee_l04_production_ecrite_p01",
      "order": 1,
      "title": "Analyser le sujet : l'information et la consigne",
      "summary": "Découper un sujet de production écrite en ses deux parties : l'information et la consigne.",
      "conceptExplanation": "La séance 1 de la production écrite apprend à analyser le sujet avant toute rédaction. Le sujet étudié est le suivant : « Dans un développement organisé et argumenté, vous étayerez cette affirmation d'IMANI Ghana : Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ».\nL'analyse distingue les différentes parties du sujet.\n• L'information : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ».\n• La consigne : « vous étayerez cette affirmation ».\nLe sujet précise aussi la forme attendue du travail : un développement organisé et argumenté.",
      "keyRule": "Tout sujet de production écrite se découpe en deux parties : l'information (ce qui est affirmé) et la consigne (ce qu'il faut en faire).",
      "formulas": [],
      "workedExample": {
        "title": "Découper le sujet d'IMANI Ghana",
        "statement": "Sujet : « Dans un développement organisé et argumenté, vous étayerez cette affirmation d'IMANI Ghana : Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ». Identifie ses parties.",
        "methodSteps": [
          "L'information est l'affirmation citée : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ».",
          "La consigne est l'action demandée : « vous étayerez cette affirmation ».",
          "La forme du devoir est précisée dès le début du sujet : un développement organisé et argumenté."
        ],
        "conclusion": "Le sujet est découpé : une affirmation à connaître (l'information) et une tâche à accomplir (étayer, dans un développement organisé et argumenté)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sujet de production écrite",
          "stepTheme": "Le sujet de production écrite",
          "stepBadge": "Le sujet de production écrite",
          "paragraphText": "• Production écrite : épreuve qui demande de produire un développement organisé et argumenté à partir d'un sujet.\nDans la leçon, le sujet demande d'étayer une affirmation d'IMANI Ghana tirée du texte sur l'immigration clandestine.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q1",
            "type": "mcq",
            "prompt": "Que demande le sujet de production écrite de la leçon ?",
            "options": [
              "Résumer un texte au quart de son volume",
              "Étayer une affirmation dans un développement organisé et argumenté",
              "Relever les idées essentielles d'un texte",
              "Reformuler la thèse d'un auteur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sujet commence par « Dans un développement organisé et argumenté, vous étayerez cette affirmation » : c'est une production écrite, pas un résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'information du sujet",
          "stepTheme": "L'information du sujet",
          "stepBadge": "L'information du sujet",
          "paragraphText": "• Information : première partie du sujet, c'est l'affirmation ou la donnée sur laquelle porte le travail.\nIci : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ».",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q2",
            "type": "mcq",
            "prompt": "Dans le sujet de la leçon, quelle est l'information ?",
            "options": [
              "Vous étayerez cette affirmation",
              "Dans un développement organisé et argumenté",
              "Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine",
              "Le nom de l'auteur, IMANI Ghana"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'analyse de la leçon range l'affirmation citée dans l'information. « Vous étayerez » relève de la consigne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La consigne du sujet",
          "stepTheme": "La consigne du sujet",
          "stepBadge": "La consigne du sujet",
          "paragraphText": "• Consigne : deuxième partie du sujet, c'est l'action que l'élève doit accomplir.\nIci : « vous étayerez cette affirmation ». Le verbe « étayerez » indique qu'il faut soutenir et appuyer l'affirmation par des idées.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la consigne du sujet de la leçon ?",
            "options": [
              "Réduire la pauvreté en Afrique",
              "Lutter contre l'immigration clandestine",
              "Vous étayerez cette affirmation",
              "IMANI Ghana a écrit un texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Vous étayerez cette affirmation » est la consigne relevée dans l'analyse du sujet. Les deux premières propositions font partie de l'information."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Séparer l'information et la consigne",
          "stepTheme": "Séparer l'information et la consigne",
          "stepBadge": "Séparer l'information et la consigne",
          "paragraphText": "Méthode d'analyse : lire le sujet en entier, puis isoler ses deux parties.\n• D'abord repérer l'affirmation citée entre guillemets : c'est l'information.\n• Ensuite repérer le verbe qui dit ce qu'il faut faire de cette affirmation : c'est la consigne.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'analyse d'un sujet, comment repère-t-on la consigne ?",
            "options": [
              "C'est toujours le premier mot du sujet",
              "C'est le verbe qui indique l'action à accomplir sur l'information",
              "C'est le nom de l'auteur cité",
              "C'est la partie entre guillemets"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La consigne se reconnaît au verbe d'action, ici « vous étayerez ». La partie entre guillemets est l'information."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Traiter le sujet sans tenir compte de la consigne",
          "stepTheme": "Traiter le sujet sans tenir compte de la consigne",
          "stepBadge": "Traiter le sujet sans tenir compte de la consigne",
          "paragraphText": "Piège : se lancer dans la rédaction en ne retenant que l'affirmation, sans appliquer la consigne.\nIci, la consigne n'est ni de discuter ni de réfuter : elle demande d'étayer l'affirmation, donc de la soutenir par un développement organisé et argumenté.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q5",
            "type": "mcq",
            "prompt": "Un élève rédige un développement qui réfute l'affirmation du sujet. Que faut-il en dire ?",
            "options": [
              "Il a bien suivi la consigne",
              "Il a confondu l'information et le thème",
              "Il n'a pas respecté la consigne, qui demande d'étayer l'affirmation",
              "Il a seulement oublié le titre du devoir"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La consigne « vous étayerez cette affirmation » impose de soutenir l'affirmation. La réfuter, c'est traiter un autre sujet."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'affirmation d'IMANI Ghana",
          "stepTheme": "L'affirmation d'IMANI Ghana",
          "stepBadge": "L'affirmation d'IMANI Ghana",
          "paragraphText": "L'affirmation à étayer est empruntée au texte 1 de la leçon sur le résumé.\nSon auteur est IMANI Ghana, dans un extrait de la revue « Contrepoints » du 12 février 2014 : c'est aussi la thèse de ce texte.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q6",
            "type": "mcq",
            "prompt": "De qui est l'affirmation que le sujet demande d'étayer ?",
            "options": [
              "De Clément WINSAVI",
              "D'IMANI Ghana",
              "De l'auteur du texte 2",
              "Du journal Fraternité Matin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le sujet attribue l'affirmation à IMANI Ghana. Clément WINSAVI est l'auteur du texte 2, sur la dépigmentation."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q1",
          "type": "mcq",
          "prompt": "Que demande le sujet de production écrite de la leçon ?",
          "options": [
            "Résumer un texte au quart de son volume",
            "Étayer une affirmation dans un développement organisé et argumenté",
            "Relever les idées essentielles d'un texte",
            "Reformuler la thèse d'un auteur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sujet commence par « Dans un développement organisé et argumenté, vous étayerez cette affirmation » : c'est une production écrite, pas un résumé."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q2",
          "type": "mcq",
          "prompt": "Dans le sujet de la leçon, quelle est l'information ?",
          "options": [
            "Vous étayerez cette affirmation",
            "Dans un développement organisé et argumenté",
            "Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine",
            "Le nom de l'auteur, IMANI Ghana"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'analyse de la leçon range l'affirmation citée dans l'information. « Vous étayerez » relève de la consigne."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la consigne du sujet de la leçon ?",
          "options": [
            "Réduire la pauvreté en Afrique",
            "Lutter contre l'immigration clandestine",
            "Vous étayerez cette affirmation",
            "IMANI Ghana a écrit un texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Vous étayerez cette affirmation » est la consigne relevée dans l'analyse du sujet. Les deux premières propositions font partie de l'information."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'analyse d'un sujet, comment repère-t-on la consigne ?",
          "options": [
            "C'est toujours le premier mot du sujet",
            "C'est le verbe qui indique l'action à accomplir sur l'information",
            "C'est le nom de l'auteur cité",
            "C'est la partie entre guillemets"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La consigne se reconnaît au verbe d'action, ici « vous étayerez ». La partie entre guillemets est l'information."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q5",
          "type": "mcq",
          "prompt": "Un élève rédige un développement qui réfute l'affirmation du sujet. Que faut-il en dire ?",
          "options": [
            "Il a bien suivi la consigne",
            "Il a confondu l'information et le thème",
            "Il n'a pas respecté la consigne, qui demande d'étayer l'affirmation",
            "Il a seulement oublié le titre du devoir"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La consigne « vous étayerez cette affirmation » impose de soutenir l'affirmation. La réfuter, c'est traiter un autre sujet."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p01_q6",
          "type": "mcq",
          "prompt": "De qui est l'affirmation que le sujet demande d'étayer ?",
          "options": [
            "De Clément WINSAVI",
            "D'IMANI Ghana",
            "De l'auteur du texte 2",
            "Du journal Fraternité Matin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le sujet attribue l'affirmation à IMANI Ghana. Clément WINSAVI est l'auteur du texte 2, sur la dépigmentation."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l04_production_ecrite_p02",
      "order": 2,
      "title": "Comprendre le sujet : thème, thèse et mots-clés",
      "summary": "Dégager le thème et la thèse du sujet, puis définir ses mots-clés.",
      "conceptExplanation": "Après le découpage du sujet, la séance 1 passe à sa compréhension. Trois éléments sont dégagés.\n• Le thème : l'immigration clandestine.\n• La thèse : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ».\n• Les mots-clés, définis un à un : pauvreté, c'est l'état d'indigence, le dénuement ; moyen le plus efficace, c'est ce qui peut résoudre une situation ; immigration, c'est l'exil, l'exode, le déplacement. Le mot Afrique figure aussi parmi les mots-clés du sujet.",
      "keyRule": "Comprendre un sujet, c'est nommer son thème, formuler sa thèse et définir chacun de ses mots-clés.",
      "formulas": [],
      "workedExample": {
        "title": "Comprendre le sujet pas à pas",
        "statement": "Reprends le sujet d'IMANI Ghana et dégage son thème, sa thèse et le sens de ses mots-clés.",
        "methodSteps": [
          "Thème du sujet : l'immigration clandestine.",
          "Thèse du sujet : « Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine ».",
          "Mot-clé pauvreté : état d'indigence, dénuement.",
          "Mot-clé moyen le plus efficace : ce qui peut résoudre une situation.",
          "Mot-clé immigration : exil, exode, déplacement."
        ],
        "conclusion": "Thème, thèse et mots-clés sont éclaircis : on sait exactement quelle affirmation il faut étayer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le thème du sujet",
          "stepTheme": "Le thème du sujet",
          "stepBadge": "Le thème du sujet",
          "paragraphText": "• Thème : sujet général sur lequel porte le devoir, exprimé en quelques mots.\nDans la compréhension du sujet de la leçon, le thème est l'immigration clandestine.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q1",
            "type": "mcq",
            "prompt": "Quel est le thème du sujet de production écrite ?",
            "options": [
              "La dépigmentation",
              "La pauvreté dans le monde",
              "L'immigration clandestine",
              "L'état d'indigence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'analyse donne pour thème l'immigration clandestine. L'état d'indigence est la définition du mot-clé pauvreté."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La thèse du sujet",
          "stepTheme": "La thèse du sujet",
          "stepBadge": "La thèse du sujet",
          "paragraphText": "• Thèse : affirmation que le sujet donne à étayer et que le développement devra soutenir.\nIci, la thèse est l'affirmation entière d'IMANI Ghana sur la réduction de la pauvreté.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la thèse du sujet ?",
            "options": [
              "Les jeunes Africains doivent rester dans leur pays",
              "Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine",
              "L'immigration est un exil",
              "Il faut créer des emplois en Europe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La thèse relevée dans l'analyse est l'affirmation complète d'IMANI Ghana."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le mot-clé pauvreté",
          "stepTheme": "Le mot-clé pauvreté",
          "stepBadge": "Le mot-clé pauvreté",
          "paragraphText": "La compréhension du sujet définit chaque mot-clé.\n• Pauvreté : état d'indigence ; dénuement.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q3",
            "type": "mcq",
            "prompt": "Selon l'analyse du sujet, que signifie le mot pauvreté ?",
            "options": [
              "Un exil, un exode",
              "Ce qui peut résoudre une situation",
              "Un état d'indigence, un dénuement",
              "Un déplacement de population"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition donnée dans les mots-clés de la leçon. L'exil et l'exode définissent l'immigration."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les mots-clés moyen le plus efficace et immigration",
          "stepTheme": "Les mots-clés moyen le plus efficace et immigration",
          "stepBadge": "Les mots-clés moyen le plus efficace et immigration",
          "paragraphText": "Deux autres définitions de la leçon.\n• Moyen le plus efficace : qui peut résoudre une situation.\n• Immigration : exil ; exode, déplacement.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q4",
            "type": "mcq",
            "prompt": "Selon l'analyse du sujet, l'immigration, c'est :",
            "options": [
              "Un état d'indigence",
              "Ce qui peut résoudre une situation",
              "Une volonté politique",
              "L'exil, l'exode, le déplacement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'immigration est définie par les synonymes exil, exode et déplacement dans les mots-clés de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre le thème et la thèse",
          "stepTheme": "Confondre le thème et la thèse",
          "stepBadge": "Confondre le thème et la thèse",
          "paragraphText": "Piège déjà rencontré dans le résumé et valable ici : donner la thèse quand on demande le thème, ou l'inverse.\nLe thème tient en quelques mots (l'immigration clandestine) ; la thèse est la phrase complète que le sujet demande d'étayer.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q5",
            "type": "mcq",
            "prompt": "Si la question demande le thème du sujet, quelle réponse est correcte ?",
            "options": [
              "L'immigration clandestine",
              "Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine",
              "Pauvreté signifie état d'indigence",
              "Vous étayerez cette affirmation"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le thème est le sujet général en quelques mots. La phrase complète est la thèse, et la dernière proposition est la consigne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Retrouver la thèse dans le sujet",
          "stepTheme": "Retrouver la thèse dans le sujet",
          "stepBadge": "Retrouver la thèse dans le sujet",
          "paragraphText": "Application : dans le sujet complet, la thèse se trouve à l'intérieur de l'information, c'est-à-dire dans l'affirmation citée après les deux points.\nC'est cette phrase, et elle seule, que le développement devra étayer.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q6",
            "type": "mcq",
            "prompt": "Où se trouve la thèse dans le sujet de la leçon ?",
            "options": [
              "Dans la consigne « vous étayerez »",
              "Dans l'affirmation citée, qui forme l'information du sujet",
              "Dans le nom de la revue Contrepoints",
              "Dans la date du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La thèse est portée par l'affirmation citée : elle fait partie de l'information du sujet, que la consigne demande d'étayer."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q1",
          "type": "mcq",
          "prompt": "Quel est le thème du sujet de production écrite ?",
          "options": [
            "La dépigmentation",
            "La pauvreté dans le monde",
            "L'immigration clandestine",
            "L'état d'indigence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'analyse donne pour thème l'immigration clandestine. L'état d'indigence est la définition du mot-clé pauvreté."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la thèse du sujet ?",
          "options": [
            "Les jeunes Africains doivent rester dans leur pays",
            "Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine",
            "L'immigration est un exil",
            "Il faut créer des emplois en Europe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La thèse relevée dans l'analyse est l'affirmation complète d'IMANI Ghana."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q3",
          "type": "mcq",
          "prompt": "Selon l'analyse du sujet, que signifie le mot pauvreté ?",
          "options": [
            "Un exil, un exode",
            "Ce qui peut résoudre une situation",
            "Un état d'indigence, un dénuement",
            "Un déplacement de population"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition donnée dans les mots-clés de la leçon. L'exil et l'exode définissent l'immigration."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q4",
          "type": "mcq",
          "prompt": "Selon l'analyse du sujet, l'immigration, c'est :",
          "options": [
            "Un état d'indigence",
            "Ce qui peut résoudre une situation",
            "Une volonté politique",
            "L'exil, l'exode, le déplacement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'immigration est définie par les synonymes exil, exode et déplacement dans les mots-clés de la leçon."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q5",
          "type": "mcq",
          "prompt": "Si la question demande le thème du sujet, quelle réponse est correcte ?",
          "options": [
            "L'immigration clandestine",
            "Réduire la pauvreté en Afrique est le moyen le plus efficace pour lutter contre l'immigration clandestine",
            "Pauvreté signifie état d'indigence",
            "Vous étayerez cette affirmation"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le thème est le sujet général en quelques mots. La phrase complète est la thèse, et la dernière proposition est la consigne."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p02_q6",
          "type": "mcq",
          "prompt": "Où se trouve la thèse dans le sujet de la leçon ?",
          "options": [
            "Dans la consigne « vous étayerez »",
            "Dans l'affirmation citée, qui forme l'information du sujet",
            "Dans le nom de la revue Contrepoints",
            "Dans la date du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La thèse est portée par l'affirmation citée : elle fait partie de l'information du sujet, que la consigne demande d'étayer."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l04_production_ecrite_p03",
      "order": 3,
      "title": "Rechercher les idées pour étayer l'affirmation",
      "summary": "Trouver les idées qui soutiennent l'affirmation, regroupées au plan social, au plan économique et au plan politique.",
      "conceptExplanation": "La séance 2 commence par la recherche des idées : pour étayer l'affirmation d'IMANI Ghana, la leçon recherche des idées qui montrent comment réduire la pauvreté en Afrique, regroupées en trois plans.\n• Au plan social : il faut former les jeunes ; favoriser l'entrepreneuriat ; assouplir les conditions d'embauche.\n• Au plan économique : acheter les matières premières à leur juste prix ; répartir équitablement les ressources ; créer des emplois.\n• Au plan politique : pratiquer la vraie démocratie ; adopter une volonté politique d'insertion des jeunes.\nToutes ces idées convergent : en réduisant la pauvreté, notamment celle des jeunes, on retire aux candidats à l'exode leur principale raison de partir.",
      "keyRule": "Les idées pour étayer se recherchent par plans : social, économique et politique.",
      "formulas": [],
      "workedExample": {
        "title": "Rechercher les idées du sujet d'IMANI Ghana",
        "statement": "Pour étayer l'affirmation selon laquelle réduire la pauvreté est le moyen le plus efficace contre l'immigration clandestine, recherche les idées plan par plan, comme dans la séance 2.",
        "methodSteps": [
          "Au plan social : former les jeunes, favoriser l'entrepreneuriat, assouplir les conditions d'embauche.",
          "Au plan économique : acheter les matières premières à leur juste prix, répartir équitablement les ressources, créer des emplois.",
          "Au plan politique : pratiquer la vraie démocratie, adopter une volonté politique d'insertion des jeunes."
        ],
        "conclusion": "Huit idées sont trouvées, déjà regroupées en trois plans : elles étayent toutes le lien entre réduction de la pauvreté et recul de l'immigration clandestine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Rechercher des idées",
          "stepTheme": "Rechercher des idées",
          "stepBadge": "Rechercher des idées",
          "paragraphText": "• Recherche des idées : étape qui consiste à trouver les idées propres à étayer l'affirmation du sujet, avant de les organiser.\nDans la leçon, les idées trouvées répondent à une même question : comment réduire la pauvreté en Afrique ?",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q1",
            "type": "mcq",
            "prompt": "À quoi sert la recherche des idées dans la production écrite de la leçon ?",
            "options": [
              "À recopier les idées du texte support",
              "À trouver les idées qui étayent l'affirmation du sujet",
              "À définir les mots-clés du sujet",
              "À compter les mots du développement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La séance 2 recherche les idées qui soutiennent l'affirmation : former les jeunes, créer des emplois, répartir les ressources, etc."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les idées au plan social",
          "stepTheme": "Les idées au plan social",
          "stepBadge": "Les idées au plan social",
          "paragraphText": "Au plan social, la recherche de la leçon retient trois idées.\n• Il faut former les jeunes.\n• Favoriser l'entrepreneuriat.\n• Assouplir les conditions d'embauche.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces idées appartient au plan social dans la recherche de la leçon ?",
            "options": [
              "Créer des emplois",
              "Acheter les matières premières à leur juste prix",
              "Former les jeunes",
              "Pratiquer la vraie démocratie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Former les jeunes est la première idée du plan social. Créer des emplois est au plan économique, et la vraie démocratie au plan politique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les idées au plan économique",
          "stepTheme": "Les idées au plan économique",
          "stepBadge": "Les idées au plan économique",
          "paragraphText": "Au plan économique, la recherche de la leçon retient trois idées.\n• Acheter les matières premières à leur juste prix.\n• Répartir équitablement les ressources.\n• Créer des emplois.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces idées appartient au plan économique ?",
            "options": [
              "Assouplir les conditions d'embauche",
              "Répartir équitablement les ressources",
              "Favoriser l'entrepreneuriat",
              "Adopter une volonté politique d'insertion des jeunes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La répartition équitable des ressources est une idée du plan économique. Les conditions d'embauche et l'entrepreneuriat sont au plan social."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les idées au plan politique",
          "stepTheme": "Les idées au plan politique",
          "stepBadge": "Les idées au plan politique",
          "paragraphText": "Au plan politique, la recherche de la leçon retient deux idées.\n• Pratiquer la vraie démocratie.\n• Adopter une volonté politique d'insertion des jeunes.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces idées appartient au plan politique ?",
            "options": [
              "Créer des emplois",
              "Former les jeunes",
              "Acheter les matières premières à leur juste prix",
              "Pratiquer la vraie démocratie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La vraie démocratie et la volonté politique d'insertion des jeunes forment le plan politique de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une idée hors du sujet n'étaye rien",
          "stepTheme": "Une idée hors du sujet n'étaye rien",
          "stepBadge": "Une idée hors du sujet n'étaye rien",
          "paragraphText": "Piège : remplir sa recherche d'idées qui décrivent le texte au lieu d'étayer l'affirmation.\nRaconter la traversée des clandestins vers les Canaries illustre le texte 1, mais ne montre pas que réduire la pauvreté lutte contre l'immigration clandestine.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q5",
            "type": "mcq",
            "prompt": "Quelle idée est hors du sujet, car elle n'étaye pas l'affirmation ?",
            "options": [
              "Former les jeunes",
              "Raconter la traversée des clandestins entassés sur des barques de pêche",
              "Répartir équitablement les ressources",
              "Créer des emplois"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cette idée décrit le texte support sans soutenir l'affirmation. Les idées retenues doivent montrer comment la réduction de la pauvreté retient les jeunes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Créer des emplois, idée du plan économique",
          "stepTheme": "Créer des emplois, idée du plan économique",
          "stepBadge": "Créer des emplois, idée du plan économique",
          "paragraphText": "Dans la recherche de la leçon, « créer des emplois » est classé au plan économique, avec l'achat des matières premières à leur juste prix et la répartition équitable des ressources.\nC'est un classement à respecter tel quel dans le devoir, même si l'emploi touche aussi la vie sociale des jeunes.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q6",
            "type": "mcq",
            "prompt": "Dans la recherche de la leçon, à quel plan appartient l'idée « créer des emplois » ?",
            "options": [
              "Au plan social",
              "Au plan politique",
              "Au plan économique",
              "À aucun plan"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon range « créer des emplois » dans le plan économique. Le plan social regroupe la formation des jeunes, l'entrepreneuriat et les conditions d'embauche."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q1",
          "type": "mcq",
          "prompt": "À quoi sert la recherche des idées dans la production écrite de la leçon ?",
          "options": [
            "À recopier les idées du texte support",
            "À trouver les idées qui étayent l'affirmation du sujet",
            "À définir les mots-clés du sujet",
            "À compter les mots du développement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La séance 2 recherche les idées qui soutiennent l'affirmation : former les jeunes, créer des emplois, répartir les ressources, etc."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces idées appartient au plan social dans la recherche de la leçon ?",
          "options": [
            "Créer des emplois",
            "Acheter les matières premières à leur juste prix",
            "Former les jeunes",
            "Pratiquer la vraie démocratie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Former les jeunes est la première idée du plan social. Créer des emplois est au plan économique, et la vraie démocratie au plan politique."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces idées appartient au plan économique ?",
          "options": [
            "Assouplir les conditions d'embauche",
            "Répartir équitablement les ressources",
            "Favoriser l'entrepreneuriat",
            "Adopter une volonté politique d'insertion des jeunes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La répartition équitable des ressources est une idée du plan économique. Les conditions d'embauche et l'entrepreneuriat sont au plan social."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces idées appartient au plan politique ?",
          "options": [
            "Créer des emplois",
            "Former les jeunes",
            "Acheter les matières premières à leur juste prix",
            "Pratiquer la vraie démocratie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La vraie démocratie et la volonté politique d'insertion des jeunes forment le plan politique de la leçon."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q5",
          "type": "mcq",
          "prompt": "Quelle idée est hors du sujet, car elle n'étaye pas l'affirmation ?",
          "options": [
            "Former les jeunes",
            "Raconter la traversée des clandestins entassés sur des barques de pêche",
            "Répartir équitablement les ressources",
            "Créer des emplois"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cette idée décrit le texte support sans soutenir l'affirmation. Les idées retenues doivent montrer comment la réduction de la pauvreté retient les jeunes."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p03_q6",
          "type": "mcq",
          "prompt": "Dans la recherche de la leçon, à quel plan appartient l'idée « créer des emplois » ?",
          "options": [
            "Au plan social",
            "Au plan politique",
            "Au plan économique",
            "À aucun plan"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon range « créer des emplois » dans le plan économique. Le plan social regroupe la formation des jeunes, l'entrepreneuriat et les conditions d'embauche."
        }
      ]
    },
    {
      "id": "terminale_a1_francais_ee_l04_production_ecrite_p04",
      "order": 4,
      "title": "Organiser l'argumentation en un développement ordonné",
      "summary": "Classer les idées recherchées en parties numérotées pour former le plan du développement organisé et argumenté.",
      "conceptExplanation": "La deuxième partie de la séance 2 est l'organisation des idées : les idées recherchées sont rangées en parties numérotées, qui forment le plan du développement.\n• Première partie, au plan social : former les jeunes, favoriser l'entrepreneuriat, assouplir les conditions d'embauche.\n• Deuxième partie, au plan économique : acheter les matières premières à leur juste prix, répartir équitablement les ressources, créer des emplois.\n• Troisième partie, au plan politique : pratiquer la vraie démocratie, adopter une volonté politique d'insertion des jeunes.\nC'est cette organisation qui donne au devoir la forme demandée par le sujet : un développement organisé et argumenté. L'évaluation de la leçon demande d'appliquer la même démarche à un autre sujet : rechercher et organiser les idées pour étayer une affirmation de Clément WINSAVI sur la peau naturelle.",
      "keyRule": "Organiser, c'est ranger les idées en parties numérotées, une partie par plan : social, économique, puis politique.",
      "formulas": [],
      "workedExample": {
        "title": "Organiser les idées du sujet d'IMANI Ghana",
        "statement": "À partir des idées recherchées dans la séance 2, construis le plan organisé du développement qui étaye l'affirmation d'IMANI Ghana.",
        "methodSteps": [
          "Première partie, au plan social : il faut former les jeunes, favoriser l'entrepreneuriat et assouplir les conditions d'embauche.",
          "Deuxième partie, au plan économique : acheter les matières premières à leur juste prix, répartir équitablement les ressources et créer des emplois.",
          "Troisième partie, au plan politique : pratiquer la vraie démocratie et adopter une volonté politique d'insertion des jeunes."
        ],
        "conclusion": "Le développement est organisé en trois parties numérotées, une par plan : il ne reste qu'à le rédiger en argumentant chaque idée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un développement organisé et argumenté",
          "stepTheme": "Un développement organisé et argumenté",
          "stepBadge": "Un développement organisé et argumenté",
          "paragraphText": "• Développement organisé et argumenté : texte qui présente des idées rangées en parties ordonnées pour soutenir une affirmation.\nC'est la forme de devoir demandée par le sujet dès sa première phrase.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q1",
            "type": "mcq",
            "prompt": "Un développement organisé et argumenté, c'est :",
            "options": [
              "Une liste d'idées sans ordre",
              "Un texte dont les idées sont rangées en parties ordonnées pour soutenir une affirmation",
              "Un résumé au quart du volume",
              "Une suite de citations du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'organisation en parties est ce qui distingue le développement organisé d'une simple liste d'idées."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "L'ordre des parties du plan",
          "stepTheme": "L'ordre des parties du plan",
          "stepBadge": "L'ordre des parties du plan",
          "paragraphText": "L'organisation de la leçon suit un ordre fixe, en parties numérotées.\n• Partie une : le plan social.\n• Partie deux : le plan économique.\n• Partie trois : le plan politique.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q2",
            "type": "mcq",
            "prompt": "Dans l'organisation de la leçon, que contient la deuxième partie ?",
            "options": [
              "Les idées du plan politique",
              "Les idées du plan social",
              "Les idées du plan économique",
              "La définition des mots-clés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ordre de la leçon est : plan social, puis plan économique, puis plan politique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une partie regroupe un seul plan",
          "stepTheme": "Une partie regroupe un seul plan",
          "stepBadge": "Une partie regroupe un seul plan",
          "paragraphText": "Chaque partie du plan rassemble les idées d'un même domaine.\nFormer les jeunes, favoriser l'entrepreneuriat et assouplir les conditions d'embauche vont ensemble, car ce sont les idées du plan social.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi « former les jeunes » et « favoriser l'entrepreneuriat » sont-ils dans la même partie ?",
            "options": [
              "Parce qu'ils commencent par la même lettre",
              "Parce que ce sont deux idées du même plan, le plan social",
              "Parce qu'ils parlent de l'Europe",
              "Parce que la première partie doit contenir deux idées au maximum"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le regroupement se fait par plan : la première partie est celle du plan social."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les idées en vrac ne forment pas un plan",
          "stepTheme": "Les idées en vrac ne forment pas un plan",
          "stepBadge": "Les idées en vrac ne forment pas un plan",
          "paragraphText": "Piège : présenter les huit idées les unes à la suite des autres, sans parties ni numérotation.\nSans organisation par plans, le travail reste une recherche d'idées : ce n'est pas encore le développement organisé et argumenté demandé par le sujet.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q4",
            "type": "mcq",
            "prompt": "Un élève écrit les huit idées à la suite, sans parties. Son travail est :",
            "options": [
              "Un développement organisé et argumenté",
              "La recherche des idées, mais pas encore leur organisation",
              "Une bonne conclusion",
              "Une analyse du sujet"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La séance 2 distingue la recherche des idées et leur organisation : sans parties numérotées par plan, l'organisation n'est pas faite."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le sujet d'évaluation sur la peau naturelle",
          "stepTheme": "Le sujet d'évaluation sur la peau naturelle",
          "stepBadge": "Le sujet d'évaluation sur la peau naturelle",
          "paragraphText": "L'évaluation de la séance 2 propose un second sujet, tiré du texte 2 : dans un article publié dans le journal Fraternité Matin du 09 octobre 2013, Clément WINSAVI déclare : « la peau naturelle est belle, solide et n'a pas besoin de ces produits dégradants qui ne font que l'intoxiquer ».\nLa consigne demande, dans un développement organisé et illustré, d'étayer cette affirmation, après avoir recherché et organisé les idées du texte 2.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q5",
            "type": "mcq",
            "prompt": "Que demande l'évaluation de la séance 2 ?",
            "options": [
              "Résumer le texte 2 au quart de son volume",
              "Rechercher et organiser les idées pour étayer l'affirmation de Clément WINSAVI sur la peau naturelle",
              "Reformuler la thèse du texte 1",
              "Dégager la structure du texte 2"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'évaluation transfère la démarche de la production écrite au sujet de WINSAVI : rechercher et organiser les idées pour étayer son affirmation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La démarche complète des deux séances",
          "stepTheme": "La démarche complète des deux séances",
          "stepBadge": "La démarche complète des deux séances",
          "paragraphText": "La production écrite de la leçon suit une démarche enchaînée.\n• Séance 1 : analyser le sujet, c'est-à-dire ses parties, puis le comprendre grâce au thème, à la thèse et aux mots-clés.\n• Séance 2 : rechercher les idées, puis les organiser en parties.",
          "exercise": {
            "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la première étape de la démarche de production écrite dans la leçon ?",
            "options": [
              "Organiser les idées en parties",
              "Rechercher les idées au plan économique",
              "Rédiger le développement",
              "Analyser le sujet"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La séance 1 est entièrement consacrée à l'analyse du sujet ; la recherche et l'organisation des idées viennent en séance 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q1",
          "type": "mcq",
          "prompt": "Un développement organisé et argumenté, c'est :",
          "options": [
            "Une liste d'idées sans ordre",
            "Un texte dont les idées sont rangées en parties ordonnées pour soutenir une affirmation",
            "Un résumé au quart du volume",
            "Une suite de citations du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'organisation en parties est ce qui distingue le développement organisé d'une simple liste d'idées."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q2",
          "type": "mcq",
          "prompt": "Dans l'organisation de la leçon, que contient la deuxième partie ?",
          "options": [
            "Les idées du plan politique",
            "Les idées du plan social",
            "Les idées du plan économique",
            "La définition des mots-clés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ordre de la leçon est : plan social, puis plan économique, puis plan politique."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi « former les jeunes » et « favoriser l'entrepreneuriat » sont-ils dans la même partie ?",
          "options": [
            "Parce qu'ils commencent par la même lettre",
            "Parce que ce sont deux idées du même plan, le plan social",
            "Parce qu'ils parlent de l'Europe",
            "Parce que la première partie doit contenir deux idées au maximum"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le regroupement se fait par plan : la première partie est celle du plan social."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q4",
          "type": "mcq",
          "prompt": "Un élève écrit les huit idées à la suite, sans parties. Son travail est :",
          "options": [
            "Un développement organisé et argumenté",
            "La recherche des idées, mais pas encore leur organisation",
            "Une bonne conclusion",
            "Une analyse du sujet"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La séance 2 distingue la recherche des idées et leur organisation : sans parties numérotées par plan, l'organisation n'est pas faite."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q5",
          "type": "mcq",
          "prompt": "Que demande l'évaluation de la séance 2 ?",
          "options": [
            "Résumer le texte 2 au quart de son volume",
            "Rechercher et organiser les idées pour étayer l'affirmation de Clément WINSAVI sur la peau naturelle",
            "Reformuler la thèse du texte 1",
            "Dégager la structure du texte 2"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'évaluation transfère la démarche de la production écrite au sujet de WINSAVI : rechercher et organiser les idées pour étayer son affirmation."
        },
        {
          "id": "terminale_a1_francais_ee_l04_production_ecrite_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la première étape de la démarche de production écrite dans la leçon ?",
          "options": [
            "Organiser les idées en parties",
            "Rechercher les idées au plan économique",
            "Rédiger le développement",
            "Analyser le sujet"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La séance 1 est entièrement consacrée à l'analyse du sujet ; la recherche et l'organisation des idées viennent en séance 2."
        }
      ]
    }
  ]
};
