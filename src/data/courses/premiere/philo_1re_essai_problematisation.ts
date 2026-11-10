import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo 1ère_Leç 4_Lessai de problématisation.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_1RE_L04_ESSAI_PROBLEMATISATION: CurriculumChapter = {
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
  "summary": "Compréhension du sujet (étude parcellaire, reformulation), problème et aspects, structuration des axes, appliqués à « Doit-on condamner le progrès technique ? » et « Le travail humanise-t-il ? ».",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo 1ère_Leç 4_Lessai de problématisation.pdf",
  "points": [
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p01",
      "order": 1,
      "title": "Qu'est-ce que l'essai de problématisation ?",
      "summary": "La phase préparatoire de la dissertation, en trois étapes.",
      "conceptExplanation": "Définition : l'essai de problématisation est un ensemble de techniques qui permettent de dégager le sens d'un SUJET. C'est la phase PRÉPARATOIRE de la dissertation philosophique : ce n'est pas encore la dissertation rédigée.\n\nIl comporte trois étapes, dans cet ordre :\n1. la compréhension du sujet (étude parcellaire et reformulation) ;\n2. la problématisation du sujet (le problème et ses aspects) ;\n3. la structuration des axes d'analyse (mettre en ordre les arguments).\n\nNe pas confondre :\n- la méthode de lecture de TEXTE (commentaire) part d'un texte d'auteur ;\n- l'essai de problématisation (dissertation) part d'un SUJET, souvent une question : « Doit-on condamner le progrès technique ? », « Le travail humanise-t-il ? », « L'argent fait-il le bonheur ? ».",
      "keyRule": "Essai de problématisation = compréhension du sujet → problématisation → structuration des axes. C'est la préparation de la dissertation.",
      "formulas": [],
      "workedExample": {
        "title": "Essai ou dissertation ?",
        "statement": "Deux élèves discutent : pour l'un, l'essai de problématisation est la même chose que la dissertation ; pour l'autre, il y a une nuance. Qui a raison ?",
        "methodSteps": [
          "L'essai de problématisation dégage le sens du sujet, son problème et ses axes.",
          "La dissertation, elle, est le devoir rédigé (introduction, développement, conclusion)."
        ],
        "conclusion": "Le second élève a raison : l'essai de problématisation est la phase préparatoire de la dissertation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "L'essai de problématisation est un ensemble de techniques pour dégager le sens d'un sujet ; c'est la phase préparatoire de la dissertation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q1",
            "type": "mcq",
            "prompt": "En philosophie, qu'est-ce que l'essai de problématisation ?",
            "options": [
              "La dissertation entièrement rédigée",
              "La phase préparatoire de la dissertation, qui dégage le sens du sujet",
              "Le résumé d'un texte",
              "La conclusion d'un commentaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il prépare la dissertation ; ce n'est pas encore le devoir rédigé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Trois étapes",
          "stepTheme": "Trois étapes",
          "stepBadge": "Trois étapes",
          "paragraphText": "Compréhension du sujet, problématisation du sujet, structuration des axes d'analyse.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q2",
            "type": "mcq",
            "prompt": "Quelles sont, dans l'ordre, les trois étapes de l'essai de problématisation ?",
            "options": [
              "Problématisation, compréhension, conclusion",
              "Thème, thèse, antithèse",
              "Compréhension du sujet, problématisation, structuration des axes d'analyse",
              "Amorce, problème, aspects"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On comprend d'abord le sujet, puis on dégage le problème, puis on ordonne les arguments."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Pas encore la dissertation",
          "stepTheme": "Pas encore la dissertation",
          "stepBadge": "Pas encore la dissertation",
          "paragraphText": "L'essai de problématisation n'est pas synonyme de dissertation : il en est la préparation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q3",
            "type": "mcq",
            "prompt": "Un élève affirme : « L'essai de problématisation et la dissertation, c'est exactement la même chose. » Que lui répondre ?",
            "options": [
              "Il a raison",
              "Non : l'essai de problématisation est la phase préparatoire de la dissertation",
              "Non : l'essai porte sur un texte d'auteur",
              "Non : la dissertation vient avant l'essai"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il y a une nuance : l'essai prépare, la dissertation rédige."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Un sujet, pas un texte",
          "stepTheme": "Un sujet, pas un texte",
          "stepBadge": "Un sujet, pas un texte",
          "paragraphText": "La dissertation part d'un sujet, souvent une question ; le commentaire part d'un texte d'auteur.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q4",
            "type": "mcq",
            "prompt": "Sur lequel de ces supports fait-on un essai de problématisation ?",
            "options": [
              "Un extrait des Pensées de Pascal",
              "Le sujet « Le travail humanise-t-il ? »",
              "Une lettre d'Épicure",
              "Un poème de Senghor"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'essai de problématisation porte sur un sujet de dissertation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Étape 1 : comprendre",
          "stepTheme": "Étape 1 : comprendre",
          "stepBadge": "Étape 1 : comprendre",
          "paragraphText": "La compréhension du sujet consiste à le lire attentivement pour en faire l'étude parcellaire et le reformuler.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q5",
            "type": "mcq",
            "prompt": "De quoi se compose la compréhension du sujet, première étape de l'essai de problématisation ?",
            "options": [
              "Du problème et de ses aspects",
              "De l'étude parcellaire et de la reformulation",
              "Des axes et des arguments",
              "De l'amorce et du bilan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On définit les mots essentiels, puis on dit le sujet autrement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Étape 2 : problématiser",
          "stepTheme": "Étape 2 : problématiser",
          "stepBadge": "Étape 2 : problématiser",
          "paragraphText": "La problématisation est le processus par lequel on dégage le problème du sujet et ses aspects.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q6",
            "type": "mcq",
            "prompt": "Que dégage-t-on lors de la problématisation du sujet ?",
            "options": [
              "Le problème et ses aspects",
              "Les connecteurs logiques",
              "La biographie de l'auteur",
              "La conclusion"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La problématisation fait apparaître la difficulté du sujet et les questions qu'elle soulève."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "Étape 3 : structurer",
          "stepTheme": "Étape 3 : structurer",
          "stepBadge": "Étape 3 : structurer",
          "paragraphText": "Structurer les axes d'analyse revient à mettre en ordre les arguments.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q7",
            "type": "mcq",
            "prompt": "Dans l'essai de problématisation, que signifie « structurer les axes d'analyse du sujet » ?",
            "options": [
              "Définir les mots du sujet",
              "Rédiger la conclusion",
              "Mettre en ordre les arguments",
              "Trouver l'auteur du sujet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On organise les arguments selon les axes annoncés par les aspects du problème."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q1",
          "type": "mcq",
          "prompt": "En philosophie, qu'est-ce que l'essai de problématisation ?",
          "options": [
            "La dissertation entièrement rédigée",
            "La phase préparatoire de la dissertation, qui dégage le sens du sujet",
            "Le résumé d'un texte",
            "La conclusion d'un commentaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il prépare la dissertation ; ce n'est pas encore le devoir rédigé."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q2",
          "type": "mcq",
          "prompt": "Quelles sont, dans l'ordre, les trois étapes de l'essai de problématisation ?",
          "options": [
            "Problématisation, compréhension, conclusion",
            "Thème, thèse, antithèse",
            "Compréhension du sujet, problématisation, structuration des axes d'analyse",
            "Amorce, problème, aspects"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On comprend d'abord le sujet, puis on dégage le problème, puis on ordonne les arguments."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q3",
          "type": "mcq",
          "prompt": "Un élève affirme : « L'essai de problématisation et la dissertation, c'est exactement la même chose. » Que lui répondre ?",
          "options": [
            "Il a raison",
            "Non : l'essai de problématisation est la phase préparatoire de la dissertation",
            "Non : l'essai porte sur un texte d'auteur",
            "Non : la dissertation vient avant l'essai"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il y a une nuance : l'essai prépare, la dissertation rédige."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q4",
          "type": "mcq",
          "prompt": "Sur lequel de ces supports fait-on un essai de problématisation ?",
          "options": [
            "Un extrait des Pensées de Pascal",
            "Le sujet « Le travail humanise-t-il ? »",
            "Une lettre d'Épicure",
            "Un poème de Senghor"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'essai de problématisation porte sur un sujet de dissertation."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q5",
          "type": "mcq",
          "prompt": "De quoi se compose la compréhension du sujet, première étape de l'essai de problématisation ?",
          "options": [
            "Du problème et de ses aspects",
            "De l'étude parcellaire et de la reformulation",
            "Des axes et des arguments",
            "De l'amorce et du bilan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On définit les mots essentiels, puis on dit le sujet autrement."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q6",
          "type": "mcq",
          "prompt": "Que dégage-t-on lors de la problématisation du sujet ?",
          "options": [
            "Le problème et ses aspects",
            "Les connecteurs logiques",
            "La biographie de l'auteur",
            "La conclusion"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La problématisation fait apparaître la difficulté du sujet et les questions qu'elle soulève."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p01_q7",
          "type": "mcq",
          "prompt": "Dans l'essai de problématisation, que signifie « structurer les axes d'analyse du sujet » ?",
          "options": [
            "Définir les mots du sujet",
            "Rédiger la conclusion",
            "Mettre en ordre les arguments",
            "Trouver l'auteur du sujet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On organise les arguments selon les axes annoncés par les aspects du problème."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p02",
      "order": 2,
      "title": "Comprendre le sujet : étude parcellaire et reformulation",
      "summary": "Définir les termes essentiels selon le contexte, puis dire le sujet autrement.",
      "conceptExplanation": "1. L'étude parcellaire : recenser et définir, selon le contexte, les mots et expressions essentiels du sujet.\n- Un mot essentiel est un terme indispensable à la compréhension du sujet.\n- Une expression essentielle est un groupe de mots indispensable à la compréhension du sujet.\n\nExemple : « Doit-on condamner le progrès technique ? »\n- « Doit-on » : a-t-on le droit, est-il normal, faut-il, est-il raisonnable ;\n- « condamner » : blâmer, critiquer, désapprouver, rejeter ;\n- « le progrès technique » : les avancées, les exploits réalisés par la technique.\n\nExemple : « L'autre est-il absolument mon ennemi ? »\n- « l'autre » : le semblable, le prochain ;\n- « absolument » : forcément, toujours ;\n- « ennemi » : celui qui cherche à me nuire, à me détruire.\n\nExemple : « Le travail humanise-t-il ? »\n- « travail » : activité consciente de transformation de la nature et de production de biens utiles ;\n- « humanise » : ce qui rend humain, donne à l'homme dignité et valeur, le soustrait à l'animalité.\n\n2. La reformulation : à partir de l'étude parcellaire, dire autrement le sujet pour le clarifier, SANS en changer le sens.\nExemple : « Doit-on condamner le progrès technique ? » devient « Faut-il blâmer les avancées de la technique ? ».",
      "keyRule": "Étude parcellaire : définir chaque terme essentiel selon le contexte. Reformulation : remplacer les mots par leurs définitions, sans trahir le sens.",
      "formulas": [],
      "workedExample": {
        "title": "Reformuler un sujet",
        "statement": "Reformule le sujet « Doit-on condamner le progrès technique ? ».",
        "methodSteps": [
          "« Doit-on » → « faut-il » ; « condamner » → « blâmer » ; « le progrès technique » → « les avancées de la technique ».",
          "On assemble en gardant la forme de question."
        ],
        "conclusion": "« Faut-il blâmer les avancées de la technique ? »"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'étude parcellaire",
          "stepTheme": "L'étude parcellaire",
          "stepBadge": "L'étude parcellaire",
          "paragraphText": "L'étude parcellaire consiste à recenser et à définir selon le contexte les mots et expressions essentiels du sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q1",
            "type": "mcq",
            "prompt": "En quoi consiste l'étude parcellaire d'un sujet de dissertation ?",
            "options": [
              "À recenser et définir selon le contexte les termes essentiels du sujet",
              "À trouver la thèse d'un auteur",
              "À écrire la conclusion",
              "À classer les philosophes par époque"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On découpe le sujet en ses termes importants et on les définit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les termes essentiels",
          "stepTheme": "Les termes essentiels",
          "stepBadge": "Les termes essentiels",
          "paragraphText": "Dans « Doit-on condamner le progrès technique ? », les termes essentiels sont « doit-on », « condamner » et « le progrès technique ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q2",
            "type": "mcq",
            "prompt": "Dans le sujet « Doit-on condamner le progrès technique ? », que signifie « condamner » ?",
            "options": [
              "Envoyer en prison",
              "Blâmer, critiquer, rejeter",
              "Encourager",
              "Inventer"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans ce contexte, condamner le progrès, c'est le désapprouver."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un adverbe qui compte",
          "stepTheme": "Un adverbe qui compte",
          "stepBadge": "Un adverbe qui compte",
          "paragraphText": "Dans « L'autre est-il absolument mon ennemi ? », « absolument » signifie forcément, toujours : c'est un mot essentiel.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q3",
            "type": "mcq",
            "prompt": "Dans le sujet « L'autre est-il absolument mon ennemi ? », que signifie « absolument » ?",
            "options": [
              "Parfois",
              "Jamais",
              "Forcément, toujours",
              "Un peu"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le sujet demande si l'autre est TOUJOURS mon ennemi."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le travail",
          "stepTheme": "Le travail",
          "stepBadge": "Le travail",
          "paragraphText": "Dans « Le travail humanise-t-il ? », « humanise » : ce qui rend humain, donne dignité et valeur, soustrait l'homme à l'animalité.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q4",
            "type": "mcq",
            "prompt": "Dans le sujet « Le travail humanise-t-il ? », que signifie « humanise » ?",
            "options": [
              "Rend riche",
              "Rend humain, donne dignité à l'homme et le soustrait à l'animalité",
              "Rend fatigué",
              "Rend célèbre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Humaniser, c'est rendre plus humain."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La reformulation",
          "stepTheme": "La reformulation",
          "stepBadge": "La reformulation",
          "paragraphText": "Reformuler, c'est dire autrement le sujet pour le clarifier, sans en altérer le sens.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est une bonne reformulation du sujet « Doit-on condamner le progrès technique ? » ?",
            "options": [
              "Faut-il blâmer les avancées de la technique ?",
              "La technique est-elle récente ?",
              "Qui a inventé la technique ?",
              "Le progrès technique est bon."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle remplace chaque terme par sa définition et garde le sens."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas changer le sens",
          "stepTheme": "Ne pas changer le sens",
          "stepBadge": "Ne pas changer le sens",
          "paragraphText": "Une reformulation qui ajoute ou retire une idée trahit le sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q6",
            "type": "mcq",
            "prompt": "Pour le sujet « L'autre est-il absolument mon ennemi ? », quelle reformulation TRAHIT le sens ?",
            "options": [
              "Mon semblable cherche-t-il toujours à me nuire ?",
              "Le prochain est-il forcément celui qui veut me détruire ?",
              "L'autre est-il parfois mon ami ?",
              "Autrui est-il nécessairement mon adversaire ?"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Parfois mon ami » change la question : elle portait sur « toujours ennemi »."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Selon le contexte",
          "stepTheme": "Selon le contexte",
          "stepBadge": "Selon le contexte",
          "paragraphText": "On définit toujours les mots selon le contexte du sujet, pas seulement selon le dictionnaire.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q7",
            "type": "mcq",
            "prompt": "Dans le sujet « Doit-on condamner le progrès technique ? », que signifie « doit-on » ?",
            "options": [
              "Combien doit-on payer ?",
              "A-t-on une dette ?",
              "Faut-il, a-t-on le droit, est-il raisonnable ?",
              "Doit-on obéir ?"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ici « doit-on » pose une question de légitimité, pas de dette."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q1",
          "type": "mcq",
          "prompt": "En quoi consiste l'étude parcellaire d'un sujet de dissertation ?",
          "options": [
            "À recenser et définir selon le contexte les termes essentiels du sujet",
            "À trouver la thèse d'un auteur",
            "À écrire la conclusion",
            "À classer les philosophes par époque"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On découpe le sujet en ses termes importants et on les définit."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q2",
          "type": "mcq",
          "prompt": "Dans le sujet « Doit-on condamner le progrès technique ? », que signifie « condamner » ?",
          "options": [
            "Envoyer en prison",
            "Blâmer, critiquer, rejeter",
            "Encourager",
            "Inventer"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans ce contexte, condamner le progrès, c'est le désapprouver."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q3",
          "type": "mcq",
          "prompt": "Dans le sujet « L'autre est-il absolument mon ennemi ? », que signifie « absolument » ?",
          "options": [
            "Parfois",
            "Jamais",
            "Forcément, toujours",
            "Un peu"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le sujet demande si l'autre est TOUJOURS mon ennemi."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q4",
          "type": "mcq",
          "prompt": "Dans le sujet « Le travail humanise-t-il ? », que signifie « humanise » ?",
          "options": [
            "Rend riche",
            "Rend humain, donne dignité à l'homme et le soustrait à l'animalité",
            "Rend fatigué",
            "Rend célèbre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Humaniser, c'est rendre plus humain."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est une bonne reformulation du sujet « Doit-on condamner le progrès technique ? » ?",
          "options": [
            "Faut-il blâmer les avancées de la technique ?",
            "La technique est-elle récente ?",
            "Qui a inventé la technique ?",
            "Le progrès technique est bon."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle remplace chaque terme par sa définition et garde le sens."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q6",
          "type": "mcq",
          "prompt": "Pour le sujet « L'autre est-il absolument mon ennemi ? », quelle reformulation TRAHIT le sens ?",
          "options": [
            "Mon semblable cherche-t-il toujours à me nuire ?",
            "Le prochain est-il forcément celui qui veut me détruire ?",
            "L'autre est-il parfois mon ami ?",
            "Autrui est-il nécessairement mon adversaire ?"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Parfois mon ami » change la question : elle portait sur « toujours ennemi »."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p02_q7",
          "type": "mcq",
          "prompt": "Dans le sujet « Doit-on condamner le progrès technique ? », que signifie « doit-on » ?",
          "options": [
            "Combien doit-on payer ?",
            "A-t-on une dette ?",
            "Faut-il, a-t-on le droit, est-il raisonnable ?",
            "Doit-on obéir ?"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ici « doit-on » pose une question de légitimité, pas de dette."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p03",
      "order": 3,
      "title": "Le problème et ses aspects",
      "summary": "Le problème est la difficulté intellectuelle du sujet ; ses aspects annoncent les axes.",
      "conceptExplanation": "La problématisation du sujet permet de dégager le problème et ses aspects.\n\n- Le problème : la difficulté intellectuelle liée au sujet. On y accède par une bonne reformulation du sujet.\n- Les aspects du problème : les questions qui découlent du problème ; ils annoncent les axes d'analyse.\n\nExemple 1 : « Doit-on condamner le progrès technique ? »\n- Problème : la technique est-elle nuisible ?\n- Aspect 1 : en quoi le progrès technique est-il facteur de développement ?\n- Aspect 2 : le progrès technique ne suscite-t-il pas des inquiétudes ?\n\nExemple 2 : « Le travail humanise-t-il ? »\n- Problème : le travail, activité consciente de production de biens utiles, soustrait-il l'homme à l'animalité ?\n- Aspects : en quoi le travail est-il facteur d'humanisation ? Dans sa forme moderne, n'aliène-t-il pas l'homme ?\n\nAstuce : en général, le premier aspect explore un côté de la question (le « oui »), le second explore l'autre côté (le « non » ou les limites).",
      "keyRule": "Problème = la difficulté du sujet, sous forme de question. Aspects = les questions qui en découlent et annoncent les axes.",
      "formulas": [],
      "workedExample": {
        "title": "L'argent et le bonheur",
        "statement": "Dégage le problème et deux aspects du sujet « L'argent fait-il le bonheur ? ».",
        "methodSteps": [
          "Reformulation : la richesse suffit-elle à rendre l'homme heureux ?",
          "Problème : le bonheur dépend-il des biens matériels ?",
          "Aspects : en quoi l'argent contribue-t-il au bien-être ? Le bonheur ne dépasse-t-il pas les biens matériels ?"
        ],
        "conclusion": "Les deux aspects annoncent deux axes : les apports de l'argent, puis ses limites."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le problème",
          "stepTheme": "Le problème",
          "stepBadge": "Le problème",
          "paragraphText": "Le problème est la difficulté intellectuelle liée au sujet ; on y accède par une bonne reformulation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q1",
            "type": "mcq",
            "prompt": "Dans un essai de problématisation, qu'est-ce que le problème du sujet ?",
            "options": [
              "La difficulté intellectuelle liée au sujet",
              "Un mot difficile du sujet",
              "L'opinion de l'élève",
              "La conclusion du devoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la question de fond que le sujet oblige à résoudre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le progrès technique",
          "stepTheme": "Le progrès technique",
          "stepBadge": "Le progrès technique",
          "paragraphText": "Pour « Doit-on condamner le progrès technique ? », le problème est : la technique est-elle nuisible ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q2",
            "type": "mcq",
            "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », quelle question exprime la difficulté intellectuelle, c'est-à-dire le problème ?",
            "options": [
              "Qui a inventé la machine ?",
              "La technique est-elle nuisible ?",
              "La technique est-elle récente ?",
              "Combien coûte la technique ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La vraie difficulté est de savoir si la technique fait du mal à l'homme."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les aspects",
          "stepTheme": "Les aspects",
          "stepBadge": "Les aspects",
          "paragraphText": "Les aspects du problème sont des questions qui annoncent les axes d'analyse.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q3",
            "type": "mcq",
            "prompt": "À quoi servent les aspects du problème dans un essai de problématisation ?",
            "options": [
              "À définir les mots du sujet",
              "À annoncer les axes d'analyse",
              "À conclure le devoir",
              "À donner son avis"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque aspect devient un axe du développement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Deux aspects opposés",
          "stepTheme": "Deux aspects opposés",
          "stepBadge": "Deux aspects opposés",
          "paragraphText": "Aspect 1 : en quoi le progrès technique est-il facteur de développement ? Aspect 2 : le progrès technique ne suscite-t-il pas des inquiétudes ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q4",
            "type": "mcq",
            "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », l'aspect 1 est « En quoi le progrès technique est-il facteur de développement ? ». Quel est un bon aspect 2 ?",
            "options": [
              "Qui a inventé l'ordinateur ?",
              "Le progrès technique ne suscite-t-il pas des inquiétudes ?",
              "La technique est-elle récente ?",
              "Faut-il aimer la science ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il explore l'autre côté du problème : les dangers de la technique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le travail humanise-t-il ?",
          "stepTheme": "Le travail humanise-t-il ?",
          "stepBadge": "Le travail humanise-t-il ?",
          "paragraphText": "Problème : le travail, activité consciente de production de biens utiles, soustrait-il l'homme à l'animalité ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q5",
            "type": "mcq",
            "prompt": "Quel est le problème du sujet « Le travail humanise-t-il ? » ?",
            "options": [
              "Le travail, activité consciente de production de biens utiles, soustrait-il l'homme à l'animalité ?",
              "Combien d'heures faut-il travailler ?",
              "Le travail est-il bien payé ?",
              "Qui a inventé le travail ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il reprend les définitions de « travail » et d'« humaniser »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "L'argent et le bonheur",
          "stepTheme": "L'argent et le bonheur",
          "stepBadge": "L'argent et le bonheur",
          "paragraphText": "Pour dégager le problème, on reformule d'abord : « L'argent fait-il le bonheur ? » → « La richesse suffit-elle à rendre heureux ? ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q6",
            "type": "mcq",
            "prompt": "Quel problème peut-on dégager du sujet « L'argent fait-il le bonheur ? » ?",
            "options": [
              "Combien gagne un riche ?",
              "Le bonheur dépend-il des biens matériels ?",
              "L'argent est-il en papier ?",
              "Faut-il travailler ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La difficulté est de savoir si le bonheur se réduit aux biens matériels."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une question, pas une réponse",
          "stepTheme": "Une question, pas une réponse",
          "stepBadge": "Une question, pas une réponse",
          "paragraphText": "Le problème et ses aspects se formulent comme des QUESTIONS. Une affirmation est déjà un argument.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q7",
            "type": "mcq",
            "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », laquelle de ces formules est un ASPECT du problème, et non un argument ?",
            "options": [
              "Le progrès technique améliore la médecine.",
              "En quoi le progrès technique est-il facteur de développement ?",
              "Le clonage est dangereux.",
              "La technique est utile."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un aspect est une question ; les affirmations sont des arguments."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q1",
          "type": "mcq",
          "prompt": "Dans un essai de problématisation, qu'est-ce que le problème du sujet ?",
          "options": [
            "La difficulté intellectuelle liée au sujet",
            "Un mot difficile du sujet",
            "L'opinion de l'élève",
            "La conclusion du devoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la question de fond que le sujet oblige à résoudre."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q2",
          "type": "mcq",
          "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », quelle question exprime la difficulté intellectuelle, c'est-à-dire le problème ?",
          "options": [
            "Qui a inventé la machine ?",
            "La technique est-elle nuisible ?",
            "La technique est-elle récente ?",
            "Combien coûte la technique ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La vraie difficulté est de savoir si la technique fait du mal à l'homme."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q3",
          "type": "mcq",
          "prompt": "À quoi servent les aspects du problème dans un essai de problématisation ?",
          "options": [
            "À définir les mots du sujet",
            "À annoncer les axes d'analyse",
            "À conclure le devoir",
            "À donner son avis"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque aspect devient un axe du développement."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q4",
          "type": "mcq",
          "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », l'aspect 1 est « En quoi le progrès technique est-il facteur de développement ? ». Quel est un bon aspect 2 ?",
          "options": [
            "Qui a inventé l'ordinateur ?",
            "Le progrès technique ne suscite-t-il pas des inquiétudes ?",
            "La technique est-elle récente ?",
            "Faut-il aimer la science ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il explore l'autre côté du problème : les dangers de la technique."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q5",
          "type": "mcq",
          "prompt": "Quel est le problème du sujet « Le travail humanise-t-il ? » ?",
          "options": [
            "Le travail, activité consciente de production de biens utiles, soustrait-il l'homme à l'animalité ?",
            "Combien d'heures faut-il travailler ?",
            "Le travail est-il bien payé ?",
            "Qui a inventé le travail ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il reprend les définitions de « travail » et d'« humaniser »."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q6",
          "type": "mcq",
          "prompt": "Quel problème peut-on dégager du sujet « L'argent fait-il le bonheur ? » ?",
          "options": [
            "Combien gagne un riche ?",
            "Le bonheur dépend-il des biens matériels ?",
            "L'argent est-il en papier ?",
            "Faut-il travailler ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La difficulté est de savoir si le bonheur se réduit aux biens matériels."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p03_q7",
          "type": "mcq",
          "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », laquelle de ces formules est un ASPECT du problème, et non un argument ?",
          "options": [
            "Le progrès technique améliore la médecine.",
            "En quoi le progrès technique est-il facteur de développement ?",
            "Le clonage est dangereux.",
            "La technique est utile."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un aspect est une question ; les affirmations sont des arguments."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l04_essai_problematisation_p04",
      "order": 4,
      "title": "Structurer les axes d'analyse",
      "summary": "Ranger les arguments sous chaque axe, avec des références et des exemples.",
      "conceptExplanation": "Structurer les axes d'analyse, c'est mettre en ordre les arguments sous chaque axe, en les appuyant par des références d'auteurs et des exemples.\n\nSujet : « Doit-on condamner le progrès technique ? »\nAxe 1 : le progrès technique est facteur de développement.\n- Argument 1 : il donne à l'homme un pouvoir sur la nature (mythe de Prométhée dans le Protagoras de Platon ; Descartes, Discours de la méthode, VIe partie : se rendre « comme maîtres et possesseurs de la nature »).\n- Argument 2 : il améliore les conditions de vie (médecine, transport, communication).\nAxe 2 : le progrès technique suscite des inquiétudes.\n- Argument 1 : il a perverti les mœurs. Rabelais (Pantagruel) : « Science sans conscience n'est que ruine de l'âme » ; Rousseau (Discours sur les sciences et les arts) : « nos âmes se sont corrompues à mesure que nos sciences et nos arts se sont avancés à la perfection ».\n- Argument 2 : il fait courir des risques liés aux manipulations génétiques (clonage, OGM).\n- Argument 3 : il néglige la dimension spirituelle de l'homme. Bergson (Les Deux Sources de la morale et de la religion) : « le corps agrandi attend un supplément d'âme ».\n\nSujet : « Le travail humanise-t-il ? »\nAxe 1 : le travail, facteur d'humanisation (Marx, Le Capital : en transformant la nature, l'homme « modifie sa propre nature » ; Voltaire, Candide : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin »).\nAxe 2 : dans sa forme moderne, le travail aliène (Marx, Manuscrits de 1844 : le travail à la chaîne et la division du travail réduisent l'ouvrier à une marchandise ; Platon, La République : le travail manuel « déforme l'âme en même temps que le corps »).\nAxe 3 possible : malgré tout, le travail reste formateur (Mounier, Le Personnalisme : « tout travail travaille à faire un homme en même temps qu'une chose »).",
      "keyRule": "Un axe = une réponse partielle au problème ; sous chaque axe, des arguments appuyés par des références et des exemples.",
      "formulas": [],
      "workedExample": {
        "title": "Ranger un argument",
        "statement": "Sous quel axe du sujet « Doit-on condamner le progrès technique ? » range-t-on la citation de Rabelais « Science sans conscience n'est que ruine de l'âme » ?",
        "methodSteps": [
          "La citation dénonce une science sans morale.",
          "Elle appuie l'idée que le progrès technique pervertit les mœurs."
        ],
        "conclusion": "Axe 2 : le progrès technique suscite des inquiétudes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Un axe, des arguments",
          "stepTheme": "Un axe, des arguments",
          "stepBadge": "Un axe, des arguments",
          "paragraphText": "Chaque axe d'analyse regroupe des arguments ; chaque argument s'appuie sur une référence ou un exemple.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q1",
            "type": "mcq",
            "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », l'axe 1 est « le progrès technique est facteur de développement ». Quel argument lui convient ?",
            "options": [
              "Le progrès technique améliore les conditions de vie (médecine, transport, communication)",
              "Le clonage menace l'homme",
              "La science pervertit les mœurs",
              "La technique néglige l'âme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les trois autres arguments appartiennent à l'axe des inquiétudes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Descartes et la nature",
          "stepTheme": "Descartes et la nature",
          "stepBadge": "Descartes et la nature",
          "paragraphText": "Descartes (Discours de la méthode, VIe partie) veut que la science rende les hommes « comme maîtres et possesseurs de la nature ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q2",
            "type": "mcq",
            "prompt": "Dans le sujet « Doit-on condamner le progrès technique ? », quel argument la référence à Descartes (« maîtres et possesseurs de la nature ») appuie-t-elle ?",
            "options": [
              "La technique pervertit les mœurs",
              "La technique donne à l'homme un pouvoir sur la nature",
              "La technique néglige l'âme",
              "La technique crée des risques génétiques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Descartes célèbre la maîtrise de la nature par la science."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Rabelais et Rousseau",
          "stepTheme": "Rabelais et Rousseau",
          "stepBadge": "Rabelais et Rousseau",
          "paragraphText": "Rabelais : « Science sans conscience n'est que ruine de l'âme ». Rousseau : « nos âmes se sont corrompues à mesure que nos sciences et nos arts se sont avancés à la perfection ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q3",
            "type": "mcq",
            "prompt": "Rousseau écrit : « nos âmes se sont corrompues à mesure que nos sciences et nos arts se sont avancés à la perfection ». Quel argument cette citation appuie-t-elle ?",
            "options": [
              "Le progrès améliore la santé",
              "Le progrès donne un pouvoir sur la nature",
              "Le progrès a perverti les mœurs",
              "Le progrès est récent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Rousseau, plus les sciences avancent, plus les mœurs se corrompent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Bergson",
          "stepTheme": "Bergson",
          "stepBadge": "Bergson",
          "paragraphText": "Bergson (Les Deux Sources de la morale et de la religion) : « le corps agrandi attend un supplément d'âme ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q4",
            "type": "mcq",
            "prompt": "Bergson écrit que « le corps agrandi attend un supplément d'âme ». Que veut-il dire à propos du progrès technique ?",
            "options": [
              "Qu'il faut grandir physiquement",
              "Que la puissance technique doit s'accompagner d'un progrès spirituel et moral",
              "Que la technique est inutile",
              "Que l'âme n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La technique a « agrandi » le corps de l'homme ; il lui manque une élévation morale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le travail qui humanise",
          "stepTheme": "Le travail qui humanise",
          "stepBadge": "Le travail qui humanise",
          "paragraphText": "Voltaire (Candide) : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q5",
            "type": "mcq",
            "prompt": "Pour le sujet « Le travail humanise-t-il ? », sous quel axe range-t-on la citation de Voltaire « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin » ?",
            "options": [
              "Le travail, facteur d'humanisation",
              "Le travail aliène l'ouvrier",
              "Le travail déforme le corps",
              "Aucun"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le travail protège l'homme des vices : il l'humanise."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le travail qui aliène",
          "stepTheme": "Le travail qui aliène",
          "stepBadge": "Le travail qui aliène",
          "paragraphText": "Marx (Manuscrits de 1844) : avec le machinisme et la division du travail, l'ouvrier est réduit à une marchandise ; il est aliéné.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q6",
            "type": "mcq",
            "prompt": "Pour le sujet « Le travail humanise-t-il ? », quel argument correspond à l'axe « dans sa forme moderne, le travail aliène » ?",
            "options": [
              "Le travail est une activité consciente propre à l'homme",
              "Le travail éloigne l'ennui",
              "Avec le machinisme, l'ouvrier est réduit à une marchandise",
              "Tout travail fait un homme"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la critique de Marx sur le travail industriel."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un argument, pas une citation seule",
          "stepTheme": "Un argument, pas une citation seule",
          "stepBadge": "Un argument, pas une citation seule",
          "paragraphText": "On énonce d'abord l'argument, puis on l'appuie par une référence : une citation seule ne fait pas un argument.",
          "exercise": {
            "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q7",
            "type": "mcq",
            "prompt": "Pour le sujet « Le travail humanise-t-il ? », quelle présentation d'un argument est la meilleure ?",
            "options": [
              "« Le travail éloigne de nous trois grands maux. »",
              "Voltaire, Candide.",
              "Le travail permet de satisfaire nos besoins et nous éloigne des vices ; Voltaire écrit : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin ».",
              "Le travail, c'est bien."
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'idée est énoncée, puis appuyée par la référence."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q1",
          "type": "mcq",
          "prompt": "Pour le sujet « Doit-on condamner le progrès technique ? », l'axe 1 est « le progrès technique est facteur de développement ». Quel argument lui convient ?",
          "options": [
            "Le progrès technique améliore les conditions de vie (médecine, transport, communication)",
            "Le clonage menace l'homme",
            "La science pervertit les mœurs",
            "La technique néglige l'âme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les trois autres arguments appartiennent à l'axe des inquiétudes."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q2",
          "type": "mcq",
          "prompt": "Dans le sujet « Doit-on condamner le progrès technique ? », quel argument la référence à Descartes (« maîtres et possesseurs de la nature ») appuie-t-elle ?",
          "options": [
            "La technique pervertit les mœurs",
            "La technique donne à l'homme un pouvoir sur la nature",
            "La technique néglige l'âme",
            "La technique crée des risques génétiques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Descartes célèbre la maîtrise de la nature par la science."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q3",
          "type": "mcq",
          "prompt": "Rousseau écrit : « nos âmes se sont corrompues à mesure que nos sciences et nos arts se sont avancés à la perfection ». Quel argument cette citation appuie-t-elle ?",
          "options": [
            "Le progrès améliore la santé",
            "Le progrès donne un pouvoir sur la nature",
            "Le progrès a perverti les mœurs",
            "Le progrès est récent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Rousseau, plus les sciences avancent, plus les mœurs se corrompent."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q4",
          "type": "mcq",
          "prompt": "Bergson écrit que « le corps agrandi attend un supplément d'âme ». Que veut-il dire à propos du progrès technique ?",
          "options": [
            "Qu'il faut grandir physiquement",
            "Que la puissance technique doit s'accompagner d'un progrès spirituel et moral",
            "Que la technique est inutile",
            "Que l'âme n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La technique a « agrandi » le corps de l'homme ; il lui manque une élévation morale."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q5",
          "type": "mcq",
          "prompt": "Pour le sujet « Le travail humanise-t-il ? », sous quel axe range-t-on la citation de Voltaire « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin » ?",
          "options": [
            "Le travail, facteur d'humanisation",
            "Le travail aliène l'ouvrier",
            "Le travail déforme le corps",
            "Aucun"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le travail protège l'homme des vices : il l'humanise."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q6",
          "type": "mcq",
          "prompt": "Pour le sujet « Le travail humanise-t-il ? », quel argument correspond à l'axe « dans sa forme moderne, le travail aliène » ?",
          "options": [
            "Le travail est une activité consciente propre à l'homme",
            "Le travail éloigne l'ennui",
            "Avec le machinisme, l'ouvrier est réduit à une marchandise",
            "Tout travail fait un homme"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la critique de Marx sur le travail industriel."
        },
        {
          "id": "premiere_philo_methodologie_l04_essai_problematisation_p04_q7",
          "type": "mcq",
          "prompt": "Pour le sujet « Le travail humanise-t-il ? », quelle présentation d'un argument est la meilleure ?",
          "options": [
            "« Le travail éloigne de nous trois grands maux. »",
            "Voltaire, Candide.",
            "Le travail permet de satisfaire nos besoins et nous éloigne des vices ; Voltaire écrit : « Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin ».",
            "Le travail, c'est bien."
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'idée est énoncée, puis appuyée par la référence."
        }
      ]
    }
  ]
};
