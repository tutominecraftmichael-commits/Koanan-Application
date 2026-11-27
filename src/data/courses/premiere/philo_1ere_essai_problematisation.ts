import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'essai de problématisation » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3723
export const PHILO_1ERE_L04_ESSAI_PROBLEMATISATION: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l04_essai_problematisation",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 4,
  "title": "Leçon 4 : L'essai de problématisation",
  "summary": "La leçon définit l’essai de problématisation, phase préparatoire de la dissertation : comprendre le sujet, le problématiser, puis structurer ses axes d’analyse.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3723",
  "points": [
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p01",
      "order": 1,
      "title": "Définir l’essai de problématisation",
      "summary": "Comprendre que l’essai de problématisation dégage le sens d’un sujet en trois étapes.",
      "conceptExplanation": "L’essai de problématisation est un ensemble de techniques ou de procédés permettant de dégager le sens d’un sujet. C’est la phase préparatoire de la dissertation philosophique.\nIl comporte trois étapes : la compréhension du sujet, la problématisation du sujet et la structuration des axes d’analyse du sujet.\nDans la situation d’apprentissage, une discussion oppose deux élèves de première A du Lycée Moderne d’Angré : l’un soutient que l’essai de problématisation est synonyme de dissertation, l’autre affirme qu’il y a une nuance entre les deux. La définition tranche : l’essai est la phase préparatoire de la dissertation, non la dissertation elle-même.",
      "keyRule": "L’essai de problématisation prépare la dissertation en trois étapes : comprendre, problématiser, structurer.",
      "formulas": [],
      "workedExample": {
        "title": "Trancher le débat de la situation d’apprentissage",
        "statement": "Deux élèves débattent : l’essai de problématisation est-il synonyme de dissertation ? Que répond la définition de la leçon ?",
        "methodSteps": [
          "L’essai est un ensemble de techniques ou de procédés permettant de dégager le sens d’un sujet.",
          "Il est la phase préparatoire de la dissertation philosophique.",
          "Il y a donc bien une nuance : l’essai précède et prépare la dissertation, il ne se confond pas avec elle."
        ],
        "conclusion": "L’élève qui affirme la nuance a raison, au sens de la définition de la leçon."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Dégager le sens d’un sujet",
          "stepTheme": "Dégager le sens d’un sujet",
          "stepBadge": "Dégager le sens d’un sujet",
          "paragraphText": "• Essai de problématisation : ensemble de techniques ou de procédés permettant de dégager le sens d’un sujet.\nC’est la phase préparatoire de la dissertation philosophique.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q1",
            "type": "mcq",
            "prompt": "L’essai de problématisation est défini comme :",
            "options": [
              "La rédaction complète d’une dissertation",
              "Un ensemble de techniques ou de procédés permettant de dégager le sens d’un sujet",
              "La conclusion d’un commentaire de texte",
              "Un questionnaire sur un texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définition d’ouverture de la leçon, parallèle à celle de la méthode de lecture pour les textes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Phase préparatoire de la dissertation",
          "stepTheme": "Phase préparatoire de la dissertation",
          "stepBadge": "Phase préparatoire de la dissertation",
          "paragraphText": "L’essai de problématisation est la phase préparatoire de la dissertation philosophique.\nIl se situe donc avant la rédaction de la dissertation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q2",
            "type": "mcq",
            "prompt": "L’essai de problématisation est, par rapport à la dissertation :",
            "options": [
              "Sa conclusion",
              "Son développement",
              "Sa phase préparatoire",
              "Son synonyme exact"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Phase préparatoire : il prépare la dissertation sans se confondre avec elle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Trois étapes",
          "stepTheme": "Trois étapes",
          "stepBadge": "Trois étapes",
          "paragraphText": "L’essai comporte trois étapes.\n• La compréhension du sujet\n• La problématisation du sujet\n• La structuration des axes d’analyse du sujet",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q3",
            "type": "mcq",
            "prompt": "Combien d’étapes comporte l’essai de problématisation ?",
            "options": [
              "Deux étapes",
              "Quatre étapes",
              "Cinq étapes",
              "Trois étapes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Compréhension, problématisation et structuration des axes : trois étapes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Synonyme de dissertation",
          "stepTheme": "Synonyme de dissertation",
          "stepBadge": "Synonyme de dissertation",
          "paragraphText": "Piège de la situation d’apprentissage : soutenir que l’essai de problématisation est synonyme de dissertation.\nLa leçon affirme une nuance : l’essai est la phase préparatoire de la dissertation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q4",
            "type": "mcq",
            "prompt": "Soutenir que l’essai est le synonyme exact de la dissertation est :",
            "options": [
              "Faux, car l’essai est sa phase préparatoire",
              "Vrai, selon la définition",
              "Vrai, car les deux ont trois étapes",
              "Sans rapport avec la leçon"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La nuance est dans la définition : préparatoire ne signifie pas synonyme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le débat des élèves d’Angré",
          "stepTheme": "Le débat des élèves d’Angré",
          "stepBadge": "Le débat des élèves d’Angré",
          "paragraphText": "Exemple : la discussion entre deux élèves de première A du Lycée Moderne d’Angré pendant la récréation.\nL’un dit l’essai synonyme de dissertation, l’autre affirme une nuance entre les deux ; la classe décide de faire des recherches et d’appliquer l’essai à un sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q5",
            "type": "mcq",
            "prompt": "Dans la situation d’apprentissage, la classe décide de :",
            "options": [
              "Rédiger directement une dissertation",
              "Faire des recherches sur l’essai de problématisation et l’appliquer à un sujet",
              "Abandonner le débat",
              "Lire un texte d’Epictète"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Recherches puis application à un sujet : la démarche de la situation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q1",
          "type": "mcq",
          "prompt": "L’essai de problématisation est défini comme :",
          "options": [
            "La rédaction complète d’une dissertation",
            "Un ensemble de techniques ou de procédés permettant de dégager le sens d’un sujet",
            "La conclusion d’un commentaire de texte",
            "Un questionnaire sur un texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définition d’ouverture de la leçon, parallèle à celle de la méthode de lecture pour les textes."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q2",
          "type": "mcq",
          "prompt": "L’essai de problématisation est, par rapport à la dissertation :",
          "options": [
            "Sa conclusion",
            "Son développement",
            "Sa phase préparatoire",
            "Son synonyme exact"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Phase préparatoire : il prépare la dissertation sans se confondre avec elle."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q3",
          "type": "mcq",
          "prompt": "Combien d’étapes comporte l’essai de problématisation ?",
          "options": [
            "Deux étapes",
            "Quatre étapes",
            "Cinq étapes",
            "Trois étapes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Compréhension, problématisation et structuration des axes : trois étapes."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q4",
          "type": "mcq",
          "prompt": "Soutenir que l’essai est le synonyme exact de la dissertation est :",
          "options": [
            "Faux, car l’essai est sa phase préparatoire",
            "Vrai, selon la définition",
            "Vrai, car les deux ont trois étapes",
            "Sans rapport avec la leçon"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La nuance est dans la définition : préparatoire ne signifie pas synonyme."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q5",
          "type": "mcq",
          "prompt": "Dans la situation d’apprentissage, la classe décide de :",
          "options": [
            "Rédiger directement une dissertation",
            "Faire des recherches sur l’essai de problématisation et l’appliquer à un sujet",
            "Abandonner le débat",
            "Lire un texte d’Epictète"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Recherches puis application à un sujet : la démarche de la situation."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p02",
      "order": 2,
      "title": "Comprendre le sujet : étude parcellaire et reformulation",
      "summary": "Lire attentivement le sujet, définir ses termes essentiels selon le contexte, puis le reformuler.",
      "conceptExplanation": "La compréhension du sujet consiste à lire attentivement le sujet pour en faire l’étude parcellaire et le reformuler.\nL’étude parcellaire consiste à recenser et à définir selon le contexte les mots ou les expressions essentiels du sujet. Un mot essentiel est un terme indispensable à la compréhension du sujet. Une expression essentielle est un groupe de mots indispensables à la compréhension du sujet.\nLa reformulation du sujet consiste, à partir de l’étude parcellaire, à dire autrement le sujet dans le but de le clarifier sans en altérer le sens initial.\nDans l’activité d’application sur le sujet « Doit-on condamner le progrès technique ? », les termes essentiels relevés sont doit-on, condamner et le progrès technique. Doit-on se définit par a-t-on le droit, est-il normal, faut-il, est-il raisonnable ; condamner par blâmer, critiquer, désapprouver, rejeter ; le progrès technique par les avancées, les exploits réalisés par la technique. La reformulation corrigée est : faut-il blâmer les avancées de la technique ?",
      "keyRule": "Étude parcellaire d’abord, reformulation ensuite : dire autrement sans altérer le sens initial.",
      "formulas": [],
      "workedExample": {
        "title": "Comprendre « Doit-on condamner le progrès technique ? »",
        "statement": "Fais l’étude parcellaire du sujet « Doit-on condamner le progrès technique ? », puis reformule-le selon le corrigé.",
        "methodSteps": [
          "Termes essentiels relevés : doit-on, condamner, le progrès technique.",
          "Doit-on : a-t-on le droit, est-il normal, faut-il, est-il raisonnable.",
          "Condamner : blâmer, critiquer, désapprouver, rejeter.",
          "Le progrès technique : les avancées, les exploits réalisés par la technique.",
          "Reformulation corrigée : faut-il blâmer les avancées de la technique ?"
        ],
        "conclusion": "La reformulation réutilise les définitions de l’étude parcellaire sans changer le sens du sujet."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’étude parcellaire",
          "stepTheme": "L’étude parcellaire",
          "stepBadge": "L’étude parcellaire",
          "paragraphText": "• Étude parcellaire : recenser et définir selon le contexte les mots ou expressions essentiels du sujet.\nElle fait partie de la compréhension du sujet, avec la reformulation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q1",
            "type": "mcq",
            "prompt": "L’étude parcellaire consiste à :",
            "options": [
              "Dégager le problème du sujet",
              "Recenser et définir selon le contexte les mots ou expressions essentiels du sujet",
              "Structurer les axes d’analyse",
              "Rédiger l’introduction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Recenser et définir selon le contexte : définition de l’étude parcellaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Mot et expression essentiels dans un sujet",
          "stepTheme": "Mot et expression essentiels dans un sujet",
          "stepBadge": "Mot et expression essentiels dans un sujet",
          "paragraphText": "• Mot essentiel : terme indispensable à la compréhension du sujet.\n• Expression essentielle : groupe de mots indispensables à la compréhension du sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q2",
            "type": "mcq",
            "prompt": "Une expression essentielle est :",
            "options": [
              "Un groupe de mots qui exige un effort de compréhension",
              "Un connecteur logique du sujet",
              "Un groupe de mots indispensables à la compréhension du sujet",
              "Une question annonçant un axe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Indispensable à la compréhension du sujet : comme pour le mot essentiel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La reformulation du sujet",
          "stepTheme": "La reformulation du sujet",
          "stepBadge": "La reformulation du sujet",
          "paragraphText": "• Reformulation : à partir de l’étude parcellaire, dire autrement le sujet dans le but de le clarifier sans en altérer le sens initial.\nElle s’appuie donc sur les définitions dégagées dans l’étude parcellaire.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q3",
            "type": "mcq",
            "prompt": "La reformulation du sujet consiste à :",
            "options": [
              "Changer le sens du sujet pour le simplifier",
              "Poser le problème du sujet",
              "Ordonner les arguments du sujet",
              "Dire autrement le sujet pour le clarifier sans en altérer le sens initial"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Clarifier sans altérer le sens initial : les deux exigences de la reformulation."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lire attentivement le sujet",
          "stepTheme": "Lire attentivement le sujet",
          "stepBadge": "Lire attentivement le sujet",
          "paragraphText": "Méthode de compréhension : lire attentivement le sujet pour en faire l’étude parcellaire, puis le reformuler.\nLes deux opérations se succèdent dans cet ordre.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q4",
            "type": "mcq",
            "prompt": "La compréhension du sujet consiste à lire attentivement le sujet pour :",
            "options": [
              "En faire l’étude parcellaire et le reformuler",
              "En dégager directement les axes",
              "En rédiger la conclusion",
              "En évaluer l’intérêt"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Étude parcellaire puis reformulation : les deux volets de la compréhension."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Condamner et progrès technique définis",
          "stepTheme": "Condamner et progrès technique définis",
          "stepBadge": "Condamner et progrès technique définis",
          "paragraphText": "Corrigé de l’activité d’application.\n• Condamner : blâmer, critiquer, désapprouver, rejeter\n• Le progrès technique : les avancées, les exploits réalisés par la technique",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q5",
            "type": "mcq",
            "prompt": "Dans le corrigé, « condamner » est défini par :",
            "options": [
              "A-t-on le droit, faut-il",
              "Blâmer, critiquer, désapprouver, rejeter",
              "Les avancées réalisées par la technique",
              "Rendre humain, donner de la dignité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Blâmer, critiquer, désapprouver, rejeter : la définition selon le contexte."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Altérer le sens en reformulant",
          "stepTheme": "Altérer le sens en reformulant",
          "stepBadge": "Altérer le sens en reformulant",
          "paragraphText": "Piège : reformuler en changeant le sens initial du sujet.\nLa reformulation corrigée « Faut-il blâmer les avancées de la technique ? » conserve exactement le sens de « Doit-on condamner le progrès technique ? ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q6",
            "type": "mcq",
            "prompt": "La reformulation corrigée du sujet sur le progrès technique est :",
            "options": [
              "La technique est-elle nuisible ?",
              "Doit-on interdire toute technique ?",
              "Faut-il blâmer les avancées de la technique ?",
              "Le progrès technique est-il un développement ?"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Faut-il reprend doit-on, blâmer reprend condamner, avancées de la technique reprend progrès technique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q1",
          "type": "mcq",
          "prompt": "L’étude parcellaire consiste à :",
          "options": [
            "Dégager le problème du sujet",
            "Recenser et définir selon le contexte les mots ou expressions essentiels du sujet",
            "Structurer les axes d’analyse",
            "Rédiger l’introduction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Recenser et définir selon le contexte : définition de l’étude parcellaire."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q2",
          "type": "mcq",
          "prompt": "Une expression essentielle est :",
          "options": [
            "Un groupe de mots qui exige un effort de compréhension",
            "Un connecteur logique du sujet",
            "Un groupe de mots indispensables à la compréhension du sujet",
            "Une question annonçant un axe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Indispensable à la compréhension du sujet : comme pour le mot essentiel."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q3",
          "type": "mcq",
          "prompt": "La reformulation du sujet consiste à :",
          "options": [
            "Changer le sens du sujet pour le simplifier",
            "Poser le problème du sujet",
            "Ordonner les arguments du sujet",
            "Dire autrement le sujet pour le clarifier sans en altérer le sens initial"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Clarifier sans altérer le sens initial : les deux exigences de la reformulation."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q4",
          "type": "mcq",
          "prompt": "La compréhension du sujet consiste à lire attentivement le sujet pour :",
          "options": [
            "En faire l’étude parcellaire et le reformuler",
            "En dégager directement les axes",
            "En rédiger la conclusion",
            "En évaluer l’intérêt"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Étude parcellaire puis reformulation : les deux volets de la compréhension."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q5",
          "type": "mcq",
          "prompt": "Dans le corrigé, « condamner » est défini par :",
          "options": [
            "A-t-on le droit, faut-il",
            "Blâmer, critiquer, désapprouver, rejeter",
            "Les avancées réalisées par la technique",
            "Rendre humain, donner de la dignité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Blâmer, critiquer, désapprouver, rejeter : la définition selon le contexte."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q6",
          "type": "mcq",
          "prompt": "La reformulation corrigée du sujet sur le progrès technique est :",
          "options": [
            "La technique est-elle nuisible ?",
            "Doit-on interdire toute technique ?",
            "Faut-il blâmer les avancées de la technique ?",
            "Le progrès technique est-il un développement ?"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Faut-il reprend doit-on, blâmer reprend condamner, avancées de la technique reprend progrès technique."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p03",
      "order": 3,
      "title": "Problématiser le sujet : problème et aspects",
      "summary": "Dégager le problème, difficulté intellectuelle du sujet, et ses aspects, questions annonçant les axes.",
      "conceptExplanation": "La problématisation du sujet est le processus par lequel l’on parvient à dégager le problème et ses aspects.\nLe problème est la difficulté intellectuelle liée au sujet. On y accède par une bonne reformulation du sujet.\nLes aspects du problème sont des questions qui annoncent les axes d’analyse.\nDans la situation d’évaluation sur le sujet « Doit-on condamner le progrès technique ? », le problème dégagé est : la technique est-elle nuisible ? Le premier aspect demande en quoi le progrès technique est facteur de développement ; le second demande si le progrès technique ne suscite pas des inquiétudes.",
      "keyRule": "Bonne reformulation, puis problème, puis aspects en questions : la problématisation prépare les axes.",
      "formulas": [],
      "workedExample": {
        "title": "Problématiser « Doit-on condamner le progrès technique ? »",
        "statement": "À partir de la reformulation du sujet sur le progrès technique, dégage son problème et ses aspects selon le corrigé.",
        "methodSteps": [
          "Reformulation préalable : faut-il blâmer les avancées de la technique ?",
          "Problème dégagé : la technique est-elle nuisible ?",
          "Aspect 1 : en quoi le progrès technique est-il facteur de développement ?",
          "Aspect 2 : le progrès technique ne suscite-t-il pas des inquiétudes ?"
        ],
        "conclusion": "Le problème condense la difficulté du sujet ; les deux aspects annoncent les deux axes d’analyse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La problématisation du sujet",
          "stepTheme": "La problématisation du sujet",
          "stepBadge": "La problématisation du sujet",
          "paragraphText": "• Problématisation du sujet : processus par lequel l’on parvient à dégager le problème et ses aspects.\nC’est la deuxième étape de l’essai de problématisation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q1",
            "type": "mcq",
            "prompt": "La problématisation du sujet est le processus qui permet de dégager :",
            "options": [
              "Les termes essentiels et leur définition",
              "Le problème et ses aspects",
              "Les seuls axes d’analyse",
              "L’introduction de la dissertation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Problème et aspects : les deux produits de la problématisation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le problème du sujet",
          "stepTheme": "Le problème du sujet",
          "stepBadge": "Le problème du sujet",
          "paragraphText": "• Problème : difficulté intellectuelle liée au sujet.\nOn y accède par une bonne reformulation du sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q2",
            "type": "mcq",
            "prompt": "Le problème est :",
            "options": [
              "Une question qui annonce un axe",
              "Un argument ordonné",
              "La difficulté intellectuelle liée au sujet",
              "La reformulation du sujet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Difficulté intellectuelle liée au sujet : définition du problème."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Accéder au problème par la reformulation",
          "stepTheme": "Accéder au problème par la reformulation",
          "stepBadge": "Accéder au problème par la reformulation",
          "paragraphText": "Méthode : on accède au problème par une bonne reformulation du sujet.\nSans compréhension préalable du sujet, la problématisation risque de manquer la difficulté réelle.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q3",
            "type": "mcq",
            "prompt": "On accède au problème :",
            "options": [
              "En structurant d’abord les axes",
              "En rédigeant l’introduction",
              "En définissant les connecteurs",
              "Par une bonne reformulation du sujet"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La bonne reformulation est la voie d’accès au problème indiquée par la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les aspects du problème",
          "stepTheme": "Les aspects du problème",
          "stepBadge": "Les aspects du problème",
          "paragraphText": "• Aspects du problème : questions qui annoncent les axes d’analyse.\nChaque aspect correspond donc à un axe qui sera structuré à l’étape suivante.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q4",
            "type": "mcq",
            "prompt": "Les aspects du problème sont :",
            "options": [
              "Des questions qui annoncent les axes d’analyse",
              "Les définitions des termes essentiels",
              "Les arguments déjà ordonnés",
              "Les mouvements d’un texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Questions annonçant les axes : définition des aspects."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le problème du progrès technique",
          "stepTheme": "Le problème du progrès technique",
          "stepBadge": "Le problème du progrès technique",
          "paragraphText": "Situation d’évaluation corrigée sur « Doit-on condamner le progrès technique ? ».\nProblème dégagé : la technique est-elle nuisible ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q5",
            "type": "mcq",
            "prompt": "Le problème dégagé pour le sujet sur le progrès technique est :",
            "options": [
              "Faut-il blâmer les avancées de la technique ?",
              "La technique est-elle nuisible ?",
              "En quoi le progrès technique est-il facteur de développement ?",
              "Le progrès technique suscite-t-il des inquiétudes ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La technique est-elle nuisible : c’est le problème ; les deux autres questions sont ses aspects."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre problème et aspect",
          "stepTheme": "Confondre problème et aspect",
          "stepBadge": "Confondre problème et aspect",
          "paragraphText": "Piège : prendre un aspect pour le problème, ou l’inverse.\nLe problème est la difficulté d’ensemble ; les aspects sont les questions qui la déclinent et annoncent les axes.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q6",
            "type": "mcq",
            "prompt": "« En quoi le progrès technique est-il facteur de développement ? » est, dans le corrigé :",
            "options": [
              "Le problème du sujet",
              "La reformulation du sujet",
              "Un aspect du problème",
              "Un argument de l’axe 2"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’aspect 1 du problème, qui annonce l’axe 1 d’analyse."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q1",
          "type": "mcq",
          "prompt": "La problématisation du sujet est le processus qui permet de dégager :",
          "options": [
            "Les termes essentiels et leur définition",
            "Le problème et ses aspects",
            "Les seuls axes d’analyse",
            "L’introduction de la dissertation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Problème et aspects : les deux produits de la problématisation."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q2",
          "type": "mcq",
          "prompt": "Le problème est :",
          "options": [
            "Une question qui annonce un axe",
            "Un argument ordonné",
            "La difficulté intellectuelle liée au sujet",
            "La reformulation du sujet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Difficulté intellectuelle liée au sujet : définition du problème."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q3",
          "type": "mcq",
          "prompt": "On accède au problème :",
          "options": [
            "En structurant d’abord les axes",
            "En rédigeant l’introduction",
            "En définissant les connecteurs",
            "Par une bonne reformulation du sujet"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La bonne reformulation est la voie d’accès au problème indiquée par la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q4",
          "type": "mcq",
          "prompt": "Les aspects du problème sont :",
          "options": [
            "Des questions qui annoncent les axes d’analyse",
            "Les définitions des termes essentiels",
            "Les arguments déjà ordonnés",
            "Les mouvements d’un texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Questions annonçant les axes : définition des aspects."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q5",
          "type": "mcq",
          "prompt": "Le problème dégagé pour le sujet sur le progrès technique est :",
          "options": [
            "Faut-il blâmer les avancées de la technique ?",
            "La technique est-elle nuisible ?",
            "En quoi le progrès technique est-il facteur de développement ?",
            "Le progrès technique suscite-t-il des inquiétudes ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La technique est-elle nuisible : c’est le problème ; les deux autres questions sont ses aspects."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q6",
          "type": "mcq",
          "prompt": "« En quoi le progrès technique est-il facteur de développement ? » est, dans le corrigé :",
          "options": [
            "Le problème du sujet",
            "La reformulation du sujet",
            "Un aspect du problème",
            "Un argument de l’axe 2"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’aspect 1 du problème, qui annonce l’axe 1 d’analyse."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p04",
      "order": 4,
      "title": "Structurer les axes d’analyse du sujet",
      "summary": "Mettre en ordre les arguments selon les axes annoncés par les aspects du problème.",
      "conceptExplanation": "Structurer les axes d’analyse du sujet revient à mettre en ordre les arguments.\nC’est la troisième étape de l’essai de problématisation, après la compréhension et la problématisation du sujet.\nDans l’évaluation corrigée sur le travail, les consignes enchaînent les trois étapes : définir les termes essentiels du sujet, reformuler le sujet, dégager le problème du sujet, puis ordonner les arguments selon les axes d’analyse.",
      "keyRule": "Structurer, c’est ordonner : chaque argument trouve sa place dans l’axe annoncé par un aspect.",
      "formulas": [],
      "workedExample": {
        "title": "Enchaîner les consignes de l’évaluation sur le travail",
        "statement": "Dans la situation d’évaluation sur le sujet « Le travail humanise-t-il ? », quel est l’ordre des quatre consignes ?",
        "methodSteps": [
          "Première consigne : définir les termes essentiels du sujet.",
          "Deuxième consigne : reformuler le sujet.",
          "Troisième consigne : dégager le problème du sujet.",
          "Quatrième consigne : ordonner les arguments selon les axes d’analyse."
        ],
        "conclusion": "L’ordre des consignes reproduit les trois étapes de l’essai de problématisation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Mettre en ordre les arguments",
          "stepTheme": "Mettre en ordre les arguments",
          "stepBadge": "Mettre en ordre les arguments",
          "paragraphText": "• Structuration des axes d’analyse : mettre en ordre les arguments.\nElle constitue la troisième étape de l’essai de problématisation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q1",
            "type": "mcq",
            "prompt": "Structurer les axes d’analyse du sujet revient à :",
            "options": [
              "Mettre en ordre les arguments",
              "Définir les termes essentiels",
              "Reformuler le sujet",
              "Dégager le problème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Mettre en ordre les arguments : définition de la structuration."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La troisième étape de l’essai",
          "stepTheme": "La troisième étape de l’essai",
          "stepBadge": "La troisième étape de l’essai",
          "paragraphText": "Ordre des étapes : compréhension du sujet, problématisation du sujet, structuration des axes d’analyse.\nLa structuration vient donc en dernier, une fois le problème et ses aspects dégagés.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q2",
            "type": "mcq",
            "prompt": "La structuration des axes est, dans l’essai :",
            "options": [
              "La première étape",
              "La deuxième étape",
              "La troisième étape",
              "Une étape facultative après la dissertation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Troisième et dernière étape de l’essai de problématisation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Des aspects aux axes",
          "stepTheme": "Des aspects aux axes",
          "stepBadge": "Des aspects aux axes",
          "paragraphText": "Méthode : les aspects du problème annoncent les axes d’analyse.\nStructurer consiste alors à ordonner les arguments sous chaque axe annoncé.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q3",
            "type": "mcq",
            "prompt": "Les axes d’analyse sont annoncés par :",
            "options": [
              "Les termes essentiels",
              "La reformulation",
              "L’introduction",
              "Les aspects du problème"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les aspects sont définis comme des questions qui annoncent les axes d’analyse."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Ordonner dans l’évaluation sur le travail",
          "stepTheme": "Ordonner dans l’évaluation sur le travail",
          "stepBadge": "Ordonner dans l’évaluation sur le travail",
          "paragraphText": "Exemple : la quatrième consigne de l’évaluation sur « Le travail humanise-t-il ? » demande d’ordonner les arguments selon les axes d’analyse.\nElle suit la définition des termes, la reformulation et le problème dégagé.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q4",
            "type": "mcq",
            "prompt": "Dans l’évaluation sur le travail, ordonner les arguments selon les axes est :",
            "options": [
              "La première consigne",
              "La quatrième consigne, après le problème dégagé",
              "Une consigne de l’introduction",
              "La définition des termes essentiels"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Définir, reformuler, dégager le problème, puis ordonner : l’ordre du corrigé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ordonner avant de problématiser",
          "stepTheme": "Ordonner avant de problématiser",
          "stepBadge": "Ordonner avant de problématiser",
          "paragraphText": "Piège : vouloir classer les arguments avant d’avoir dégagé le problème et ses aspects.\nSans aspects, il n’y a pas d’axes sous lesquels ordonner les arguments.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q5",
            "type": "mcq",
            "prompt": "Pourquoi ne peut-on pas structurer les axes avant la problématisation ?",
            "options": [
              "Parce que les termes ne sont pas définis",
              "Parce que la dissertation est déjà rédigée",
              "Parce que les axes sont annoncés par les aspects du problème, dégagés en problématisant",
              "Parce que les arguments sont toujours désordonnés"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les aspects annoncent les axes : ils doivent donc être dégagés avant la structuration."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q1",
          "type": "mcq",
          "prompt": "Structurer les axes d’analyse du sujet revient à :",
          "options": [
            "Mettre en ordre les arguments",
            "Définir les termes essentiels",
            "Reformuler le sujet",
            "Dégager le problème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Mettre en ordre les arguments : définition de la structuration."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q2",
          "type": "mcq",
          "prompt": "La structuration des axes est, dans l’essai :",
          "options": [
            "La première étape",
            "La deuxième étape",
            "La troisième étape",
            "Une étape facultative après la dissertation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Troisième et dernière étape de l’essai de problématisation."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q3",
          "type": "mcq",
          "prompt": "Les axes d’analyse sont annoncés par :",
          "options": [
            "Les termes essentiels",
            "La reformulation",
            "L’introduction",
            "Les aspects du problème"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les aspects sont définis comme des questions qui annoncent les axes d’analyse."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q4",
          "type": "mcq",
          "prompt": "Dans l’évaluation sur le travail, ordonner les arguments selon les axes est :",
          "options": [
            "La première consigne",
            "La quatrième consigne, après le problème dégagé",
            "Une consigne de l’introduction",
            "La définition des termes essentiels"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Définir, reformuler, dégager le problème, puis ordonner : l’ordre du corrigé."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q5",
          "type": "mcq",
          "prompt": "Pourquoi ne peut-on pas structurer les axes avant la problématisation ?",
          "options": [
            "Parce que les termes ne sont pas définis",
            "Parce que la dissertation est déjà rédigée",
            "Parce que les axes sont annoncés par les aspects du problème, dégagés en problématisant",
            "Parce que les arguments sont toujours désordonnés"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les aspects annoncent les axes : ils doivent donc être dégagés avant la structuration."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p05",
      "order": 5,
      "title": "Application : les axes du progrès technique",
      "summary": "Lire les deux axes corrigés du sujet sur le progrès technique, avec leurs arguments et références.",
      "conceptExplanation": "Dans la situation d’évaluation, le sujet « Doit-on condamner le progrès technique ? » est structuré en deux axes.\nAxe 1 : le progrès technique est facteur de développement. Argument 1 : le progrès technique a conféré à l’homme un pouvoir sur la nature, avec pour références le mythe de Prométhée dans le Protagoras de Platon et René Descartes, Discours de la méthode, sixième partie. Argument 2 : le progrès technique améliore les conditions de vie de l’homme, avec des exemples au niveau de la médecine, du transport et de la communication.\nAxe 2 : le progrès technique suscite des inquiétudes. Argument 1 : le progrès technique a perverti les mœurs, avec François Rabelais, « Science sans conscience n’est que ruine de l’âme », et Jean-Jacques Rousseau sur les âmes corrompues à mesure que les sciences et les arts avançaient. Argument 2 : le progrès technique a entraîné des risques découlant des manipulations génétiques, avec pour exemples le clonage, les IVG et les OGM. Argument 3 : le progrès technique a nié la dimension spirituelle de l’homme, avec Henri Bergson : « Le corps a besoin d’un supplément d’âme », dans Les deux sources de la morale et de la religion.",
      "keyRule": "Axe 1 développement, axe 2 inquiétudes : chaque argument est appuyé par une référence ou un exemple du corrigé.",
      "formulas": [],
      "workedExample": {
        "title": "Structurer le sujet « Le travail humanise-t-il ? » (évaluation corrigée)",
        "statement": "À partir du corrigé de l’évaluation, présente la structure du sujet « Le travail humanise-t-il ? ».",
        "methodSteps": [
          "Termes essentiels : travail, activité consciente de transformation de la nature et de l’homme, activité de production de biens utiles ; humanise, ce qui rend humain, confère dignité et valeur, soustrait l’homme à l’animalité.",
          "Problème : le travail, activité consciente de production de biens utiles, soustrait-il l’homme à l’animalité ?",
          "Axe 1 : le travail, facteur d’humanisation. Le travail est une activité consciente, spécificité humaine, avec Karl Marx dans Le capital ; il permet de satisfaire les besoins vitaux, avec Voltaire dans Candide : le travail éloigne l’ennui, le vice et le besoin.",
          "Axe 2 : dans sa forme moderne, le travail aliène et déshumanise. Avec le machinisme et la division du travail, le travailleur est sacrifié à la machine, avec Karl Marx dans les Manuscrits de 1844 ; le travail artisanal est pénible et dégradant, avec Platon dans La République.",
          "Un troisième axe est possible : malgré ses aspects négatifs, le travail socialise et raffine l’homme, avec Emmanuel Mounier dans Le Personnalisme : tout travail travaille à faire l’homme."
        ],
        "conclusion": "Le corrigé structure le sujet en deux axes principaux, avec un troisième axe possible en dépassement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Axe 1 : pouvoir sur la nature",
          "stepTheme": "Axe 1 : pouvoir sur la nature",
          "stepBadge": "Axe 1 : pouvoir sur la nature",
          "paragraphText": "Axe 1 du corrigé : le progrès technique est facteur de développement.\nPremier argument : le progrès technique a conféré à l’homme un pouvoir sur la nature, références au mythe de Prométhée dans le Protagoras de Platon et à Descartes.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q1",
            "type": "mcq",
            "prompt": "Dans l’axe 1, le pouvoir de l’homme sur la nature est appuyé par :",
            "options": [
              "Rabelais et Rousseau",
              "Le mythe de Prométhée chez Platon et Descartes, Discours de la méthode",
              "Bergson et les manipulations génétiques",
              "Le clonage et les OGM"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Prométhée dans le Protagoras de Platon et Descartes, sixième partie du Discours de la méthode."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Axe 1 : améliorer les conditions de vie",
          "stepTheme": "Axe 1 : améliorer les conditions de vie",
          "stepBadge": "Axe 1 : améliorer les conditions de vie",
          "paragraphText": "Second argument de l’axe 1 : le progrès technique améliore les conditions de vie de l’homme.\nExemples du corrigé : au niveau de la médecine, au niveau du transport et au niveau de la communication.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q2",
            "type": "mcq",
            "prompt": "Les exemples de l’amélioration des conditions de vie sont donnés au niveau :",
            "options": [
              "De la morale et de la religion uniquement",
              "Des manipulations génétiques",
              "De la médecine, du transport et de la communication",
              "De la division du travail"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Médecine, transport et communication : les trois exemples de l’axe 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Axe 2 : des inquiétudes",
          "stepTheme": "Axe 2 : des inquiétudes",
          "stepBadge": "Axe 2 : des inquiétudes",
          "paragraphText": "Axe 2 du corrigé : le progrès technique suscite des inquiétudes.\nTrois arguments le composent : la perversion des mœurs, les risques des manipulations génétiques et la négation de la dimension spirituelle de l’homme.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q3",
            "type": "mcq",
            "prompt": "L’axe 2 du sujet sur le progrès technique soutient que celui-ci :",
            "options": [
              "Est uniquement facteur de développement",
              "Améliore les conditions de vie",
              "Confère un pouvoir sur la nature",
              "Suscite des inquiétudes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Axe 2 : le progrès technique suscite des inquiétudes, en trois arguments."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Science sans conscience chez Rabelais",
          "stepTheme": "Science sans conscience chez Rabelais",
          "stepBadge": "Science sans conscience chez Rabelais",
          "paragraphText": "Premier argument de l’axe 2 : le progrès technique a perverti les mœurs.\nRéférences : François Rabelais, « Science sans conscience n’est que ruine de l’âme », dans Pantagruel ; Jean-Jacques Rousseau sur les âmes corrompues à mesure que les sciences et les arts avançaient à la perfection.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q4",
            "type": "mcq",
            "prompt": "La formule « Science sans conscience n’est que ruine de l’âme » est attribuée dans le corrigé à :",
            "options": [
              "François Rabelais, dans Pantagruel",
              "Henri Bergson",
              "René Descartes",
              "Platon, dans le Protagoras"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Rabelais, Pantagruel : référence du premier argument de l’axe 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les risques des manipulations génétiques",
          "stepTheme": "Les risques des manipulations génétiques",
          "stepBadge": "Les risques des manipulations génétiques",
          "paragraphText": "Deuxième argument de l’axe 2 : le progrès technique a entraîné des risques découlant des manipulations génétiques.\nExemples du corrigé : le clonage, les IVG, les OGM.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q5",
            "type": "mcq",
            "prompt": "Les exemples des risques des manipulations génétiques sont :",
            "options": [
              "La médecine, le transport, la communication",
              "Le clonage, les IVG, les OGM",
              "Le machinisme et la division du travail",
              "L’ennui, le vice et le besoin"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Clonage, IVG et OGM : exemples du deuxième argument de l’axe 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le supplément d’âme chez Bergson",
          "stepTheme": "Le supplément d’âme chez Bergson",
          "stepBadge": "Le supplément d’âme chez Bergson",
          "paragraphText": "Troisième argument de l’axe 2 : le progrès technique a nié la dimension spirituelle de l’homme.\nRéférence : Henri Bergson, « Le corps a besoin d’un supplément d’âme », dans Les deux sources de la morale et de la religion.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q6",
            "type": "mcq",
            "prompt": "Selon la référence à Bergson dans le corrigé, le corps a besoin :",
            "options": [
              "D’un pouvoir sur la nature",
              "D’une division du travail",
              "D’un supplément d’âme",
              "D’une avancée technique supplémentaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Le corps a besoin d’un supplément d’âme » : Bergson, Les deux sources de la morale et de la religion."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Mélanger les arguments des deux axes",
          "stepTheme": "Mélanger les arguments des deux axes",
          "stepBadge": "Mélanger les arguments des deux axes",
          "paragraphText": "Piège : ranger l’amélioration des conditions de vie dans l’axe des inquiétudes, ou la perversion des mœurs dans l’axe du développement.\nChaque argument appartient à l’axe annoncé par l’aspect correspondant du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q7",
            "type": "mcq",
            "prompt": "La perversion des mœurs par le progrès technique appartient :",
            "options": [
              "À l’axe 1, facteur de développement",
              "À l’axe des définitions",
              "À la reformulation du sujet",
              "À l’axe 2, qui suscite des inquiétudes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pervertir les mœurs est le premier argument de l’axe 2, avec Rabelais et Rousseau."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q1",
          "type": "mcq",
          "prompt": "Dans l’axe 1, le pouvoir de l’homme sur la nature est appuyé par :",
          "options": [
            "Rabelais et Rousseau",
            "Le mythe de Prométhée chez Platon et Descartes, Discours de la méthode",
            "Bergson et les manipulations génétiques",
            "Le clonage et les OGM"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Prométhée dans le Protagoras de Platon et Descartes, sixième partie du Discours de la méthode."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q2",
          "type": "mcq",
          "prompt": "Les exemples de l’amélioration des conditions de vie sont donnés au niveau :",
          "options": [
            "De la morale et de la religion uniquement",
            "Des manipulations génétiques",
            "De la médecine, du transport et de la communication",
            "De la division du travail"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Médecine, transport et communication : les trois exemples de l’axe 1."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q3",
          "type": "mcq",
          "prompt": "L’axe 2 du sujet sur le progrès technique soutient que celui-ci :",
          "options": [
            "Est uniquement facteur de développement",
            "Améliore les conditions de vie",
            "Confère un pouvoir sur la nature",
            "Suscite des inquiétudes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Axe 2 : le progrès technique suscite des inquiétudes, en trois arguments."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q4",
          "type": "mcq",
          "prompt": "La formule « Science sans conscience n’est que ruine de l’âme » est attribuée dans le corrigé à :",
          "options": [
            "François Rabelais, dans Pantagruel",
            "Henri Bergson",
            "René Descartes",
            "Platon, dans le Protagoras"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Rabelais, Pantagruel : référence du premier argument de l’axe 2."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q5",
          "type": "mcq",
          "prompt": "Les exemples des risques des manipulations génétiques sont :",
          "options": [
            "La médecine, le transport, la communication",
            "Le clonage, les IVG, les OGM",
            "Le machinisme et la division du travail",
            "L’ennui, le vice et le besoin"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Clonage, IVG et OGM : exemples du deuxième argument de l’axe 2."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q6",
          "type": "mcq",
          "prompt": "Selon la référence à Bergson dans le corrigé, le corps a besoin :",
          "options": [
            "D’un pouvoir sur la nature",
            "D’une division du travail",
            "D’un supplément d’âme",
            "D’une avancée technique supplémentaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Le corps a besoin d’un supplément d’âme » : Bergson, Les deux sources de la morale et de la religion."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p05_q7",
          "type": "mcq",
          "prompt": "La perversion des mœurs par le progrès technique appartient :",
          "options": [
            "À l’axe 1, facteur de développement",
            "À l’axe des définitions",
            "À la reformulation du sujet",
            "À l’axe 2, qui suscite des inquiétudes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pervertir les mœurs est le premier argument de l’axe 2, avec Rabelais et Rousseau."
        }
      ]
    }
  ]
};
