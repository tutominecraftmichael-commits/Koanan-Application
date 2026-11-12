import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L1_La dissertation philosophique.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L01_DISSERTATION: CurriculumChapter = {
  "id": "terminale_philo_methodologie_l01_dissertation",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 1,
  "title": "Leçon 1 : La dissertation philosophique",
  "summary": "Comprendre le sujet, le problématiser, rédiger l'introduction, le développement et la conclusion.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L1_La dissertation philosophique.pdf",
  "points": [
    {
      "id": "terminale_philo_methodologie_l01_dissertation_p01",
      "order": 1,
      "title": "Comprendre le sujet",
      "summary": "Ce qu'est une dissertation et les deux premières opérations : l'étude parcellaire et la reformulation.",
      "conceptExplanation": "La dissertation philosophique est un exercice écrit : à partir d'un sujet, on dégage le problème central et on l'analyse par une argumentation cohérente.\nTout commence par la compréhension du sujet, en deux étapes.\n1. L'étude parcellaire : repérer les mots essentiels et les définir selon le contexte.\n2. La reformulation : réécrire le sujet pour le rendre plus clair, sans en changer le sens.",
      "keyRule": "Avant d'écrire, on comprend : on définit les mots du sujet, puis on le reformule sans le trahir.",
      "formulas": [],
      "workedExample": {
        "title": "Étudier le sujet « Doit-on condamner le progrès technique ? »",
        "statement": "Fais l'étude parcellaire puis reformule le sujet.",
        "methodSteps": [
          "« Doit-on » : a-t-on le droit, faut-il.",
          "« condamner » : blâmer, rejeter, désapprouver.",
          "« le progrès technique » : les avancées réalisées par la technique.",
          "Reformulation : faut-il blâmer les avancées réalisées par la technique ?"
        ],
        "conclusion": "Le sujet devient plus clair, sans que son sens ait changé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dissertation philosophique",
          "stepTheme": "La dissertation philosophique",
          "stepBadge": "La dissertation philosophique",
          "paragraphText": "• Dissertation philosophique : exercice écrit qui consiste à dégager le problème central d'un sujet et à l'analyser par une argumentation cohérente.\nPour réussir, il faut d'abord bien comprendre le sujet.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p01_q1",
            "type": "mcq",
            "prompt": "En quoi consiste la dissertation philosophique ?",
            "options": [
              "Résumer un texte en quelques lignes",
              "Raconter une histoire personnelle",
              "Dégager le problème d'un sujet et l'analyser par une argumentation cohérente",
              "Réciter des citations de philosophes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dissertation pose un problème et le traite par des arguments organisés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux étapes pour comprendre",
          "stepTheme": "Deux étapes pour comprendre",
          "stepBadge": "Deux étapes pour comprendre",
          "paragraphText": "La phase préparatoire de compréhension du sujet comprend deux étapes :\n1. l'étude parcellaire ;\n2. la reformulation du sujet.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p01_q2",
            "type": "mcq",
            "prompt": "Quelles sont les deux étapes de la compréhension du sujet ?",
            "options": [
              "L'étude parcellaire et la reformulation",
              "L'introduction et la conclusion",
              "La critique interne et la critique externe",
              "La thèse et l'antithèse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On définit d'abord les mots, puis on reformule le sujet."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'étude parcellaire",
          "stepTheme": "L'étude parcellaire",
          "stepBadge": "L'étude parcellaire",
          "paragraphText": "• Étude parcellaire : repérer les mots ou expressions essentiels du sujet et les définir selon le contexte.\nExemple : dans « Doit-on condamner le progrès technique ? », condamner = blâmer, rejeter, désapprouver.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p01_q3",
            "type": "mcq",
            "prompt": "Que fait-on pendant l'étude parcellaire ?",
            "options": [
              "On rédige la conclusion",
              "On cherche des citations",
              "On recopie le sujet sans le lire",
              "On définit les mots essentiels du sujet selon le contexte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'étude parcellaire découpe le sujet et définit chaque terme important."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La reformulation",
          "stepTheme": "La reformulation",
          "stepBadge": "La reformulation",
          "paragraphText": "• Reformuler le sujet : le réécrire pour le rendre plus explicite, sans en altérer le sens initial.\nExemple : « Doit-on condamner le progrès technique ? » devient « Faut-il blâmer les avancées réalisées par la technique ? ».",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p01_q4",
            "type": "mcq",
            "prompt": "Quelle est la bonne reformulation de « Doit-on condamner le progrès technique ? » ?",
            "options": [
              "La technique a-t-elle une histoire ?",
              "Faut-il blâmer les avancées réalisées par la technique ?",
              "Qui a inventé la technique ?",
              "La science est-elle utile à l'école ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On garde le sens du sujet, avec des mots plus clairs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas changer le sens",
          "stepTheme": "Ne pas changer le sens",
          "stepBadge": "Ne pas changer le sens",
          "paragraphText": "Une reformulation ne doit pas déformer le sujet.\nRemplacer « condamner » par « admirer » inverse le sens : c'est un contresens.\nOn cherche des synonymes, pas des mots opposés.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces reformulations change le sens du sujet « Doit-on condamner le progrès technique ? » ?",
            "options": [
              "Faut-il blâmer le progrès technique ?",
              "Faut-il admirer le progrès technique ?",
              "A-t-on raison de rejeter les avancées techniques ?",
              "Est-il juste de désapprouver le progrès technique ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Admirer » est le contraire de « condamner » : c'est un contresens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un autre exemple",
          "stepTheme": "Un autre exemple",
          "stepBadge": "Un autre exemple",
          "paragraphText": "Sujet : « Il faut plaindre celui qui vit en société. »\n• « Il faut plaindre » : il est nécessaire d'avoir de la compassion pour.\n• « Celui qui vit en société » : celui qui vit avec ses semblables dans un espace organisé par des règles.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p01_q6",
            "type": "mcq",
            "prompt": "Dans le sujet « Il faut plaindre celui qui vit en société », que signifie le mot « plaindre » ?",
            "options": [
              "Accuser quelqu'un devant un tribunal",
              "Admirer quelqu'un",
              "Ignorer quelqu'un",
              "Avoir de la compassion pour quelqu'un"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Plaindre, c'est avoir pitié, de la compassion."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p01_q1",
          "type": "mcq",
          "prompt": "En quoi consiste la dissertation philosophique ?",
          "options": [
            "Résumer un texte en quelques lignes",
            "Raconter une histoire personnelle",
            "Dégager le problème d'un sujet et l'analyser par une argumentation cohérente",
            "Réciter des citations de philosophes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dissertation pose un problème et le traite par des arguments organisés."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p01_q2",
          "type": "mcq",
          "prompt": "Quelles sont les deux étapes de la compréhension du sujet ?",
          "options": [
            "L'étude parcellaire et la reformulation",
            "L'introduction et la conclusion",
            "La critique interne et la critique externe",
            "La thèse et l'antithèse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On définit d'abord les mots, puis on reformule le sujet."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p01_q3",
          "type": "mcq",
          "prompt": "Que fait-on pendant l'étude parcellaire ?",
          "options": [
            "On rédige la conclusion",
            "On cherche des citations",
            "On recopie le sujet sans le lire",
            "On définit les mots essentiels du sujet selon le contexte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'étude parcellaire découpe le sujet et définit chaque terme important."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p01_q4",
          "type": "mcq",
          "prompt": "Quelle est la bonne reformulation de « Doit-on condamner le progrès technique ? » ?",
          "options": [
            "La technique a-t-elle une histoire ?",
            "Faut-il blâmer les avancées réalisées par la technique ?",
            "Qui a inventé la technique ?",
            "La science est-elle utile à l'école ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On garde le sens du sujet, avec des mots plus clairs."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces reformulations change le sens du sujet « Doit-on condamner le progrès technique ? » ?",
          "options": [
            "Faut-il blâmer le progrès technique ?",
            "Faut-il admirer le progrès technique ?",
            "A-t-on raison de rejeter les avancées techniques ?",
            "Est-il juste de désapprouver le progrès technique ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Admirer » est le contraire de « condamner » : c'est un contresens."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p01_q6",
          "type": "mcq",
          "prompt": "Dans le sujet « Il faut plaindre celui qui vit en société », que signifie le mot « plaindre » ?",
          "options": [
            "Accuser quelqu'un devant un tribunal",
            "Admirer quelqu'un",
            "Ignorer quelqu'un",
            "Avoir de la compassion pour quelqu'un"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Plaindre, c'est avoir pitié, de la compassion."
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l01_dissertation_p02",
      "order": 2,
      "title": "Problématiser le sujet",
      "summary": "Trouver le problème central et ses aspects.",
      "conceptExplanation": "La problématisation comprend le problème et ses aspects.\nLe problème est la difficulté centrale du sujet ; il naît d'une contradiction ou d'un paradoxe.\nLes aspects du problème sont les questions qu'il suscite ; ils annoncent les axes du développement.",
      "keyRule": "Le problème est LA question centrale ; ses aspects annoncent le plan.",
      "formulas": [],
      "workedExample": {
        "title": "Problématiser « Doit-on condamner le progrès technique ? »",
        "statement": "Formule le problème et ses aspects.",
        "methodSteps": [
          "Problème : la technique est-elle nuisible ?",
          "Aspect 1 : en quoi le progrès technique est-il facteur de développement ?",
          "Aspect 2 : le progrès technique ne suscite-t-il pas des inquiétudes ?"
        ],
        "conclusion": "Les deux aspects deviendront les deux axes du développement."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le problème",
          "stepTheme": "Le problème",
          "stepBadge": "Le problème",
          "paragraphText": "• Problème : difficulté centrale que soulève le sujet.\nIl apparaît à partir d'une contradiction ou d'un paradoxe au cœur du sujet.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p02_q1",
            "type": "mcq",
            "prompt": "D'où naît le problème d'un sujet de dissertation ?",
            "options": [
              "D'une contradiction ou d'un paradoxe au cœur du sujet",
              "D'une citation apprise par cœur",
              "D'un exemple personnel",
              "De la longueur du sujet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le problème surgit quand deux idées s'opposent dans le sujet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les aspects du problème",
          "stepTheme": "Les aspects du problème",
          "stepBadge": "Les aspects du problème",
          "paragraphText": "• Aspects du problème : questions que suscite le problème.\nIls annoncent les axes du développement.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p02_q2",
            "type": "mcq",
            "prompt": "À quoi servent les aspects du problème ?",
            "options": [
              "Ils remplacent la conclusion",
              "Ils donnent les définitions des mots",
              "Ils annoncent les axes du développement",
              "Ils servent d'amorce"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque aspect deviendra un axe de la réflexion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le problème du progrès technique",
          "stepTheme": "Le problème du progrès technique",
          "stepBadge": "Le problème du progrès technique",
          "paragraphText": "Sujet : « Doit-on condamner le progrès technique ? »\nProblème : la technique est-elle nuisible ?\nLe paradoxe : la technique développe le monde, mais elle menace aussi l'humanité.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p02_q3",
            "type": "mcq",
            "prompt": "Quel est le problème du sujet « Doit-on condamner le progrès technique ? » ?",
            "options": [
              "Qui a inventé l'ordinateur ?",
              "Combien coûte une machine ?",
              "La technique existe-t-elle ?",
              "La technique est-elle nuisible ?"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le problème interroge la valeur de la technique : bienfait ou menace ?"
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les aspects du progrès technique",
          "stepTheme": "Les aspects du progrès technique",
          "stepBadge": "Les aspects du progrès technique",
          "paragraphText": "• Aspect 1 : en quoi le progrès technique est-il facteur de développement ?\n• Aspect 2 : le progrès technique ne suscite-t-il pas des inquiétudes ?\nLe premier défend la technique, le second la critique.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p02_q4",
            "type": "mcq",
            "prompt": "Quel aspect s'oppose à « En quoi le progrès technique est-il facteur de développement ? » ?",
            "options": [
              "La technique est-elle utile ?",
              "Le progrès technique apporte-t-il du confort ?",
              "Le progrès technique ne suscite-t-il pas des inquiétudes ?",
              "La technique aide-t-elle la médecine ?"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux aspects présentent deux points de vue opposés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Problème ou thème ?",
          "stepTheme": "Problème ou thème ?",
          "stepBadge": "Problème ou thème ?",
          "paragraphText": "Le thème dit de quoi on parle (la technique) ; le problème pose une question qui fait débat (la technique est-elle nuisible ?).\nUn problème se formule toujours comme une question.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p02_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces formules est un problème, et non un simple thème ?",
            "options": [
              "La technique",
              "La technique est-elle nuisible ?",
              "Le progrès technique au XXe siècle",
              "Les machines"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un problème est une question qui oppose plusieurs réponses possibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les opérations du brouillon",
          "stepTheme": "Les opérations du brouillon",
          "stepBadge": "Les opérations du brouillon",
          "paragraphText": "Au brouillon, on suit dans l'ordre :\n1. l'étude parcellaire ;\n2. la reformulation ;\n3. le problème ;\n4. les aspects du problème ;\n5. le plan ;\n6. les arguments par axe ;\n7. les références et citations.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p02_q6",
            "type": "mcq",
            "prompt": "Quelle opération vient juste après la reformulation du sujet ?",
            "options": [
              "La formulation du problème",
              "La rédaction de la conclusion",
              "La recherche des citations",
              "L'étude parcellaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Étude parcellaire, reformulation, puis problème : on avance du sens vers la question."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p02_q1",
          "type": "mcq",
          "prompt": "D'où naît le problème d'un sujet de dissertation ?",
          "options": [
            "D'une contradiction ou d'un paradoxe au cœur du sujet",
            "D'une citation apprise par cœur",
            "D'un exemple personnel",
            "De la longueur du sujet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le problème surgit quand deux idées s'opposent dans le sujet."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p02_q2",
          "type": "mcq",
          "prompt": "À quoi servent les aspects du problème ?",
          "options": [
            "Ils remplacent la conclusion",
            "Ils donnent les définitions des mots",
            "Ils annoncent les axes du développement",
            "Ils servent d'amorce"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque aspect deviendra un axe de la réflexion."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p02_q3",
          "type": "mcq",
          "prompt": "Quel est le problème du sujet « Doit-on condamner le progrès technique ? » ?",
          "options": [
            "Qui a inventé l'ordinateur ?",
            "Combien coûte une machine ?",
            "La technique existe-t-elle ?",
            "La technique est-elle nuisible ?"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le problème interroge la valeur de la technique : bienfait ou menace ?"
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p02_q4",
          "type": "mcq",
          "prompt": "Quel aspect s'oppose à « En quoi le progrès technique est-il facteur de développement ? » ?",
          "options": [
            "La technique est-elle utile ?",
            "Le progrès technique apporte-t-il du confort ?",
            "Le progrès technique ne suscite-t-il pas des inquiétudes ?",
            "La technique aide-t-elle la médecine ?"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux aspects présentent deux points de vue opposés."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p02_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces formules est un problème, et non un simple thème ?",
          "options": [
            "La technique",
            "La technique est-elle nuisible ?",
            "Le progrès technique au XXe siècle",
            "Les machines"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un problème est une question qui oppose plusieurs réponses possibles."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p02_q6",
          "type": "mcq",
          "prompt": "Quelle opération vient juste après la reformulation du sujet ?",
          "options": [
            "La formulation du problème",
            "La rédaction de la conclusion",
            "La recherche des citations",
            "L'étude parcellaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Étude parcellaire, reformulation, puis problème : on avance du sens vers la question."
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l01_dissertation_p03",
      "order": 3,
      "title": "Rédiger l'introduction",
      "summary": "L'amorce, le problème et ses aspects.",
      "conceptExplanation": "L'introduction pose clairement le problème du sujet.\nElle comprend trois éléments : l'amorce, le problème et les aspects du problème.\nL'amorce amène le sujet ; le problème pose la difficulté ; les aspects annoncent le plan.",
      "keyRule": "Introduction = amorce + problème + aspects du problème.",
      "formulas": [],
      "workedExample": {
        "title": "Une introduction modèle",
        "statement": "Sujet : « Doit-on condamner le progrès technique ? »",
        "methodSteps": [
          "Amorce : le progrès vertigineux des sciences et techniques dans presque tous les domaines.",
          "Problème : doit-on souscrire à l'idée selon laquelle la technique est nuisible ?",
          "Aspects : dans quelle mesure la technique est-elle une menace ? N'est-elle pas au contraire un facteur de développement ?"
        ],
        "conclusion": "L'introduction pose le problème et annonce les deux axes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Les trois composantes",
          "stepTheme": "Les trois composantes",
          "stepBadge": "Les trois composantes",
          "paragraphText": "L'introduction de la dissertation comprend :\n1. l'amorce ;\n2. le problème du sujet ;\n3. les aspects du problème.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p03_q1",
            "type": "mcq",
            "prompt": "Quelles sont les composantes de l'introduction d'une dissertation ?",
            "options": [
              "L'amorce, le problème et les aspects du problème",
              "La thèse, l'antithèse et la synthèse",
              "Le bilan et l'ouverture",
              "Les citations et les exemples"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Amorce, problème, aspects : c'est la structure attendue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'amorce",
          "stepTheme": "L'amorce",
          "stepBadge": "L'amorce",
          "paragraphText": "• Amorce : première phrase qui amène le sujet, souvent à partir d'un constat général ou d'une observation de la vie courante.\nExemple : « L'expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques. »",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p03_q2",
            "type": "mcq",
            "prompt": "Quel est le rôle de l'amorce ?",
            "options": [
              "Donner la réponse finale au problème",
              "Amener progressivement le sujet",
              "Citer tous les auteurs",
              "Résumer le développement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'amorce introduit le sujet sans encore le traiter."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Poser le problème",
          "stepTheme": "Poser le problème",
          "stepBadge": "Poser le problème",
          "paragraphText": "Après l'amorce, on montre la difficulté : souvent avec « Malheureusement », « Pourtant », « Cependant ».\nPuis on formule le problème : « Dès lors, doit-on souscrire à l'idée selon laquelle la technique est nuisible ? »",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p03_q3",
            "type": "mcq",
            "prompt": "Quel mot sert souvent à faire apparaître le problème après l'amorce ?",
            "options": [
              "« Enfin »",
              "« Premièrement »",
              "« Pourtant »",
              "« En conclusion »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Pourtant » ou « Cependant » introduisent la contradiction qui fait naître le problème."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Annoncer les aspects",
          "stepTheme": "Annoncer les aspects",
          "stepBadge": "Annoncer les aspects",
          "paragraphText": "L'introduction se termine par les aspects du problème, sous forme de questions.\nExemple : « Dans quelle mesure la technique constitue-t-elle une menace ? N'est-elle pas au contraire un facteur de développement ? »",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p03_q4",
            "type": "mcq",
            "prompt": "Par quoi se termine l'introduction ?",
            "options": [
              "Par une citation sans lien",
              "Par la réponse définitive",
              "Par un résumé de toute la dissertation",
              "Par les aspects du problème, sous forme de questions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les aspects annoncent les axes que le développement va traiter."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas répondre dans l'introduction",
          "stepTheme": "Ne pas répondre dans l'introduction",
          "stepBadge": "Ne pas répondre dans l'introduction",
          "paragraphText": "L'introduction pose le problème ; elle n'y répond pas.\nDonner son avis définitif dès l'introduction est une erreur : la réponse vient dans la conclusion.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p03_q5",
            "type": "mcq",
            "prompt": "Où donne-t-on la réponse au problème dans une dissertation ?",
            "options": [
              "Dans l'amorce",
              "Dans l'étude parcellaire",
              "Dans la conclusion",
              "Dans la première phrase de l'introduction"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On pose le problème au début et on y répond à la fin."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une introduction réussie",
          "stepTheme": "Reconnaître une introduction réussie",
          "stepBadge": "Reconnaître une introduction réussie",
          "paragraphText": "Une introduction réussie :\n• part d'un constat (amorce) ;\n• fait apparaître une contradiction ;\n• pose le problème ;\n• annonce les aspects.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p03_q6",
            "type": "mcq",
            "prompt": "Quel élément manque à cette introduction : « La technique progresse. Doit-on la condamner ? » ?",
            "options": [
              "L'amorce",
              "Le problème",
              "Rien ne manque",
              "Les aspects du problème"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On a une amorce et un problème, mais pas les questions qui annoncent les axes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p03_q1",
          "type": "mcq",
          "prompt": "Quelles sont les composantes de l'introduction d'une dissertation ?",
          "options": [
            "L'amorce, le problème et les aspects du problème",
            "La thèse, l'antithèse et la synthèse",
            "Le bilan et l'ouverture",
            "Les citations et les exemples"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Amorce, problème, aspects : c'est la structure attendue."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p03_q2",
          "type": "mcq",
          "prompt": "Quel est le rôle de l'amorce ?",
          "options": [
            "Donner la réponse finale au problème",
            "Amener progressivement le sujet",
            "Citer tous les auteurs",
            "Résumer le développement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'amorce introduit le sujet sans encore le traiter."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p03_q3",
          "type": "mcq",
          "prompt": "Quel mot sert souvent à faire apparaître le problème après l'amorce ?",
          "options": [
            "« Enfin »",
            "« Premièrement »",
            "« Pourtant »",
            "« En conclusion »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Pourtant » ou « Cependant » introduisent la contradiction qui fait naître le problème."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p03_q4",
          "type": "mcq",
          "prompt": "Par quoi se termine l'introduction ?",
          "options": [
            "Par une citation sans lien",
            "Par la réponse définitive",
            "Par un résumé de toute la dissertation",
            "Par les aspects du problème, sous forme de questions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les aspects annoncent les axes que le développement va traiter."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p03_q5",
          "type": "mcq",
          "prompt": "Où donne-t-on la réponse au problème dans une dissertation ?",
          "options": [
            "Dans l'amorce",
            "Dans l'étude parcellaire",
            "Dans la conclusion",
            "Dans la première phrase de l'introduction"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On pose le problème au début et on y répond à la fin."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p03_q6",
          "type": "mcq",
          "prompt": "Quel élément manque à cette introduction : « La technique progresse. Doit-on la condamner ? » ?",
          "options": [
            "L'amorce",
            "Le problème",
            "Rien ne manque",
            "Les aspects du problème"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On a une amorce et un problème, mais pas les questions qui annoncent les axes."
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l01_dissertation_p04",
      "order": 4,
      "title": "Développer et conclure",
      "summary": "Construire les axes, argumenter avec des références et rédiger la conclusion.",
      "conceptExplanation": "Le développement résout le problème : il organise des axes d'analyse, appuyés par des arguments, des références et des illustrations.\nOn passe d'un argument à l'autre et d'un axe à l'autre par des transitions (connecteurs logiques).\nLa conclusion répond clairement au problème posé ; elle commence par un bilan de la réflexion et peut finir par une ouverture.",
      "keyRule": "Axes + arguments + références + transitions, puis une conclusion qui répond au problème.",
      "formulas": [],
      "workedExample": {
        "title": "Construire deux axes",
        "statement": "Sujet : « Il faut plaindre celui qui vit en société. »",
        "methodSteps": [
          "Axe 1 : il faut plaindre celui qui vit en société (Hobbes : « L'homme est un loup pour l'homme » ; Sartre : « L'enfer, c'est les autres »).",
          "Axe 2 : il faut envier celui qui vit en société (Garaudy : « L'enfer, c'est l'absence des autres » ; Spinoza : « La fin de l'État est en réalité la liberté »)."
        ],
        "conclusion": "Deux axes opposés, chacun appuyé par des arguments et des références."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le développement",
          "stepTheme": "Le développement",
          "stepBadge": "Le développement",
          "paragraphText": "• Développement : partie qui résout le problème.\nIl structure des axes d'analyse, les argumente et s'appuie sur des références (auteurs, citations) et des illustrations (exemples).",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p04_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle du développement ?",
            "options": [
              "Résoudre le problème par des axes argumentés",
              "Recopier le sujet",
              "Présenter l'amorce",
              "Faire le bilan final"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le développement traite le problème posé dans l'introduction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les transitions",
          "stepTheme": "Les transitions",
          "stepBadge": "Les transitions",
          "paragraphText": "• Transition : phrase ou connecteur qui fait passer d'un argument ou d'un axe à un autre.\nExemples de connecteurs : « De plus », « Cependant », « Toutefois », « Par ailleurs ».",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p04_q2",
            "type": "mcq",
            "prompt": "Quel connecteur marque le passage à un axe opposé ?",
            "options": [
              "« De plus »",
              "« Toutefois »",
              "« Ainsi »",
              "« Par exemple »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Toutefois » introduit une idée qui s'oppose à la précédente."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Arguments et références",
          "stepTheme": "Arguments et références",
          "stepBadge": "Arguments et références",
          "paragraphText": "Argument : la vie en société n'est pas toujours sûre, à cause de l'agressivité d'autrui.\nRéférences : Hobbes, « L'homme est un loup pour l'homme » ; Sartre, « L'enfer, c'est les autres » (Huis clos).\nPrécision : la formule de Hobbes vient du Du citoyen (De Cive), pas du Léviathan comme l'écrit le PDF.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p04_q3",
            "type": "mcq",
            "prompt": "Quel auteur a écrit « L'enfer, c'est les autres » ?",
            "options": [
              "Thomas Hobbes",
              "Jean-Paul Sartre",
              "Baruch Spinoza",
              "Roger Garaudy"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La formule vient de la pièce Huis clos de Sartre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'axe opposé",
          "stepTheme": "L'axe opposé",
          "stepBadge": "L'axe opposé",
          "paragraphText": "Argument : la société comble nos faiblesses naturelles par la coopération ; l'État moderne protège la liberté.\nRéférences : Garaudy, « L'enfer, c'est l'absence des autres » ; Malson, « Les hommes ne sont pas des hommes hors de l'ambiance sociale » ; Spinoza, « La fin de l'État est en réalité la liberté ».",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p04_q4",
            "type": "mcq",
            "prompt": "Quelle citation défend l'idée qu'il faut envier celui qui vit en société ?",
            "options": [
              "« L'enfer, c'est l'absence des autres »",
              "« L'homme est un loup pour l'homme »",
              "« L'enfer, c'est les autres »",
              "« L'État est un immense cimetière »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Garaudy répond à Sartre : vivre sans les autres serait le véritable enfer."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La conclusion",
          "stepTheme": "La conclusion",
          "stepBadge": "La conclusion",
          "paragraphText": "• Conclusion : réponse claire et précise au problème posé dans l'introduction.\nElle est précédée du bilan de la réflexion et peut s'achever par une ouverture (une nouvelle question).",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p04_q5",
            "type": "mcq",
            "prompt": "Que contient la conclusion d'une dissertation ?",
            "options": [
              "Une nouvelle amorce",
              "Les définitions des mots",
              "Uniquement des citations",
              "Un bilan, une réponse claire au problème et parfois une ouverture"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Bilan, réponse, ouverture : la conclusion referme le problème."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une référence doit servir un argument",
          "stepTheme": "Une référence doit servir un argument",
          "stepBadge": "Une référence doit servir un argument",
          "paragraphText": "Une citation seule ne suffit pas : elle doit appuyer un argument.\nOn énonce d'abord l'argument, puis on cite l'auteur, puis on explique le lien.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la bonne façon d'utiliser une citation ?",
            "options": [
              "Aligner des citations sans explication",
              "Placer toutes les citations dans l'introduction",
              "Énoncer l'argument, citer l'auteur, puis expliquer le lien",
              "Inventer une citation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La citation illustre et renforce un argument ; elle ne le remplace pas."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p04_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle du développement ?",
          "options": [
            "Résoudre le problème par des axes argumentés",
            "Recopier le sujet",
            "Présenter l'amorce",
            "Faire le bilan final"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le développement traite le problème posé dans l'introduction."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p04_q2",
          "type": "mcq",
          "prompt": "Quel connecteur marque le passage à un axe opposé ?",
          "options": [
            "« De plus »",
            "« Toutefois »",
            "« Ainsi »",
            "« Par exemple »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Toutefois » introduit une idée qui s'oppose à la précédente."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p04_q3",
          "type": "mcq",
          "prompt": "Quel auteur a écrit « L'enfer, c'est les autres » ?",
          "options": [
            "Thomas Hobbes",
            "Jean-Paul Sartre",
            "Baruch Spinoza",
            "Roger Garaudy"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La formule vient de la pièce Huis clos de Sartre."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p04_q4",
          "type": "mcq",
          "prompt": "Quelle citation défend l'idée qu'il faut envier celui qui vit en société ?",
          "options": [
            "« L'enfer, c'est l'absence des autres »",
            "« L'homme est un loup pour l'homme »",
            "« L'enfer, c'est les autres »",
            "« L'État est un immense cimetière »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Garaudy répond à Sartre : vivre sans les autres serait le véritable enfer."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p04_q5",
          "type": "mcq",
          "prompt": "Que contient la conclusion d'une dissertation ?",
          "options": [
            "Une nouvelle amorce",
            "Les définitions des mots",
            "Uniquement des citations",
            "Un bilan, une réponse claire au problème et parfois une ouverture"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Bilan, réponse, ouverture : la conclusion referme le problème."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la bonne façon d'utiliser une citation ?",
          "options": [
            "Aligner des citations sans explication",
            "Placer toutes les citations dans l'introduction",
            "Énoncer l'argument, citer l'auteur, puis expliquer le lien",
            "Inventer une citation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La citation illustre et renforce un argument ; elle ne le remplace pas."
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l01_dissertation_p05",
      "order": 5,
      "title": "Entraînement : deux sujets types",
      "summary": "S'exercer sur « Le travail humanise-t-il ? » et « La pluralité des cultures est-elle un obstacle au rapprochement des peuples ? ».",
      "conceptExplanation": "Pour chaque sujet : définir les termes, poser le problème, construire des axes opposés appuyés par des références.\n« Le travail humanise-t-il ? » : oui, il est une activité consciente qui transforme la nature et l'homme (Marx, Voltaire) ; mais dans sa forme moderne il peut aliéner (Marx, Manuscrits de 1844).\n« La pluralité des cultures est-elle un obstacle ? » : elle peut créer conflits et ethnocentrisme, mais elle est aussi une richesse et une source d'enrichissement mutuel (Césaire, Saint-Exupéry, Kant).",
      "keyRule": "Un bon plan oppose deux axes, chacun nourri d'arguments et de références précises.",
      "formulas": [],
      "workedExample": {
        "title": "Plan du sujet « Le travail humanise-t-il ? »",
        "statement": "Construis deux axes.",
        "methodSteps": [
          "Axe 1 : le travail humanise (Marx : en transformant la nature, l'homme transforme sa propre nature ; Voltaire : le travail éloigne l'ennui, le vice et le besoin).",
          "Axe 2 : le travail moderne aliène (machinisme, division du travail ; Marx, Manuscrits de 1844)."
        ],
        "conclusion": "On peut ajouter un dépassement : malgré ses aspects négatifs, « tout travail travaille à faire l'homme » (Mounier)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Définir « travail » et « humaniser »",
          "stepTheme": "Définir « travail » et « humaniser »",
          "stepBadge": "Définir « travail » et « humaniser »",
          "paragraphText": "• Travail : activité consciente de transformation de la nature et de l'homme, production de biens utiles.\n• Humaniser : rendre humain, donner de la dignité, soustraire l'homme à l'animalité.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p05_q1",
            "type": "mcq",
            "prompt": "Que signifie « humaniser » ?",
            "options": [
              "Rendre riche",
              "Rendre fatigué",
              "Rendre humain, donner de la dignité",
              "Rendre esclave"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Humaniser, c'est élever l'homme au-dessus de l'animalité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le travail humanise",
          "stepTheme": "Le travail humanise",
          "stepBadge": "Le travail humanise",
          "paragraphText": "Argument : le travail est une activité consciente, propre à l'homme.\nMarx (Le Capital) : en agissant sur la nature, l'homme « modifie sa propre nature ».\nVoltaire (Candide) : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin. »",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p05_q2",
            "type": "mcq",
            "prompt": "Selon Voltaire, quels maux le travail éloigne-t-il ?",
            "options": [
              "L'ennui, le vice et le besoin",
              "La faim, la soif et le froid",
              "La guerre, la peste et la famine",
              "La peur, la colère et la tristesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule de Candide : l'ennui, le vice et le besoin."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le travail aliène",
          "stepTheme": "Le travail aliène",
          "stepBadge": "Le travail aliène",
          "paragraphText": "Argument : avec les machines et la division du travail, l'ouvrier perd sa dignité ; il est aliéné.\nMarx (Manuscrits de 1844) : « Le travail produit l'ouvrier en tant que marchandise. »",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p05_q3",
            "type": "mcq",
            "prompt": "Selon Marx, que devient l'ouvrier dans le travail moderne ?",
            "options": [
              "Un patron",
              "Un philosophe",
              "Un artiste libre",
              "Une marchandise"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour Marx, le travail aliéné réduit l'ouvrier à une marchandise."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La pluralité des cultures : un obstacle ?",
          "stepTheme": "La pluralité des cultures : un obstacle ?",
          "stepBadge": "La pluralité des cultures : un obstacle ?",
          "paragraphText": "Axe 1 : les différences culturelles peuvent créer des conflits et l'ethnocentrisme.\nRéférence : Lévi-Strauss décrit la tendance ancienne à « répudier » les cultures éloignées de la nôtre (dans Race et histoire ; le PDF écrit à tort Race et culture).\nExemple : Jules Ferry (1885) prétend que les « races supérieures » doivent civiliser les autres.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p05_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce que l'ethnocentrisme ?",
            "options": [
              "Respecter toutes les cultures",
              "Juger les autres cultures à partir de la sienne, jugée supérieure",
              "Apprendre plusieurs langues",
              "Voyager dans d'autres pays"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ethnocentrisme place sa propre culture au centre et méprise les autres."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La pluralité des cultures : une richesse",
          "stepTheme": "La pluralité des cultures : une richesse",
          "stepBadge": "La pluralité des cultures : une richesse",
          "paragraphText": "Axe 2 : le brassage culturel enrichit l'humanité.\nCésaire : « marier des mondes différents est excellent ».\nSaint-Exupéry : « Si tu diffères de moi, loin de me léser, tu m'enrichis » (Lettre à un otage ; le PDF l'attribue à Terre des hommes).\nKant : traiter l'humanité toujours comme une fin, jamais seulement comme un moyen.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p05_q5",
            "type": "mcq",
            "prompt": "Quelle citation défend l'idée que les différences enrichissent ?",
            "options": [
              "« L'homme est un loup pour l'homme »",
              "« Si tu diffères de moi, loin de me léser, tu m'enrichis »",
              "« L'enfer, c'est les autres »",
              "« Le travail produit l'ouvrier en tant que marchandise »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Saint-Exupéry voit dans la différence de l'autre une richesse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Choisir les références",
          "stepTheme": "Choisir les références",
          "stepBadge": "Choisir les références",
          "paragraphText": "Une bonne référence :\n• correspond exactement à l'argument ;\n• cite l'auteur et, si possible, l'œuvre ;\n• est expliquée en une phrase.\nMieux vaut deux références bien comprises que dix citations mal utilisées.",
          "exercise": {
            "id": "terminale_philo_methodologie_l01_dissertation_p05_q6",
            "type": "mcq",
            "prompt": "Quelle référence appuie l'argument « le travail est propre à l'homme et le transforme » ?",
            "options": [
              "Hobbes, Du citoyen",
              "Sartre, Huis clos",
              "Jules Ferry, discours de 1885",
              "Marx, Le Capital"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Marx montre qu'en transformant la nature, l'homme se transforme lui-même."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p05_q1",
          "type": "mcq",
          "prompt": "Que signifie « humaniser » ?",
          "options": [
            "Rendre riche",
            "Rendre fatigué",
            "Rendre humain, donner de la dignité",
            "Rendre esclave"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Humaniser, c'est élever l'homme au-dessus de l'animalité."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p05_q2",
          "type": "mcq",
          "prompt": "Selon Voltaire, quels maux le travail éloigne-t-il ?",
          "options": [
            "L'ennui, le vice et le besoin",
            "La faim, la soif et le froid",
            "La guerre, la peste et la famine",
            "La peur, la colère et la tristesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule de Candide : l'ennui, le vice et le besoin."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p05_q3",
          "type": "mcq",
          "prompt": "Selon Marx, que devient l'ouvrier dans le travail moderne ?",
          "options": [
            "Un patron",
            "Un philosophe",
            "Un artiste libre",
            "Une marchandise"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour Marx, le travail aliéné réduit l'ouvrier à une marchandise."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p05_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce que l'ethnocentrisme ?",
          "options": [
            "Respecter toutes les cultures",
            "Juger les autres cultures à partir de la sienne, jugée supérieure",
            "Apprendre plusieurs langues",
            "Voyager dans d'autres pays"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ethnocentrisme place sa propre culture au centre et méprise les autres."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p05_q5",
          "type": "mcq",
          "prompt": "Quelle citation défend l'idée que les différences enrichissent ?",
          "options": [
            "« L'homme est un loup pour l'homme »",
            "« Si tu diffères de moi, loin de me léser, tu m'enrichis »",
            "« L'enfer, c'est les autres »",
            "« Le travail produit l'ouvrier en tant que marchandise »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Saint-Exupéry voit dans la différence de l'autre une richesse."
        },
        {
          "id": "terminale_philo_methodologie_l01_dissertation_p05_q6",
          "type": "mcq",
          "prompt": "Quelle référence appuie l'argument « le travail est propre à l'homme et le transforme » ?",
          "options": [
            "Hobbes, Du citoyen",
            "Sartre, Huis clos",
            "Jules Ferry, discours de 1885",
            "Marx, Le Capital"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Marx montre qu'en transformant la nature, l'homme se transforme lui-même."
        }
      ]
    }
  ]
};
