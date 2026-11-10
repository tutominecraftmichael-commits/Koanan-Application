import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 3 PL 2nde Outils de l'argumentation Les connecteurs logiques.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_PL_L02_CONNECTEURS_LOGIQUES: CurriculumChapter = {
  "id": "seconde_a_francais_pl_l02_connecteurs_logiques",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 7,
  "title": "Perfectionnement de la langue, leçon 2 : Les connecteurs logiques",
  "summary": "Relier les idées d'une argumentation : cause, conséquence, opposition, concession, addition, ordre, conclusion, but, condition et liens implicites.",
  "officialVolumeHours": 2,
  "contentVersion": 2,
  "source": "3 PL 2nde Outils de l'argumentation Les connecteurs logiques.pdf",
  "points": [
    {
      "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01",
      "order": 1,
      "title": "Qu'est-ce qu'un connecteur logique ?",
      "summary": "Définition et classes grammaticales.",
      "conceptExplanation": "Les connecteurs logiques sont des mots ou groupes de mots qui relient les idées entre elles et indiquent le rapport logique qui les unit. Ils guident le lecteur dans une argumentation.\n\nIls appartiennent à plusieurs classes grammaticales :\n1. les conjonctions de coordination : mais, ou, et, donc, or, ni, car ;\n2. les conjonctions et locutions conjonctives de subordination : parce que, puisque, bien que, pour que, si, alors que, de sorte que, pourvu que... Elles introduisent une proposition subordonnée ;\n3. les adverbes et locutions adverbiales de liaison : d'abord, ensuite, enfin, cependant, pourtant, toutefois, néanmoins, en effet, par conséquent, d'une part, d'autre part... ;\n4. les prépositions et locutions prépositionnelles, suivies d'un nom ou d'un infinitif : malgré, grâce à, à cause de, pour, afin de, en raison de...\n\nExemple tiré du texte « La télévision » (G. Niquet) : « Et d'abord, elle est un bon délassement. [...] Par ailleurs, la télévision informe. [...] Enfin, [...] elle instruit. »",
      "keyRule": "Connecteur logique : mot qui relie deux idées et marque leur rapport. Classes : conjonctions de coordination, de subordination, adverbes de liaison, prépositions.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer les connecteurs",
        "statement": "« D'une part, l'impôt préserve le patrimoine. D'autre part, la maison est reconnue par l'État. Ainsi, nul ne peut la réclamer. » Relève les connecteurs.",
        "methodSteps": [
          "« D'une part » et « D'autre part » organisent deux arguments.",
          "« Ainsi » introduit une conséquence."
        ],
        "conclusion": "Les connecteurs sont : d'une part, d'autre part, ainsi."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le connecteur logique",
          "stepTheme": "Le connecteur logique",
          "stepBadge": "Le connecteur logique",
          "paragraphText": "Un connecteur logique est un mot ou groupe de mots qui relie des idées et indique le rapport logique entre elles.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q1",
            "type": "mcq",
            "prompt": "Quel est le rôle d'un connecteur logique ?",
            "options": [
              "Remplacer un nom déjà employé",
              "Décrire un personnage ou un lieu",
              "Relier des idées en marquant leur rapport",
              "Indiquer le temps d'un verbe"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le connecteur montre comment les idées s'enchaînent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les conjonctions de coordination",
          "stepTheme": "Les conjonctions de coordination",
          "stepBadge": "Les conjonctions de coordination",
          "paragraphText": "Les conjonctions de coordination sont : mais, ou, et, donc, or, ni, car.\nAstuce : « Mais où est donc Ornicar ? »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q2",
            "type": "mcq",
            "prompt": "Lequel de ces mots est une conjonction de coordination ?",
            "options": [
              "Car",
              "Parce que",
              "Cependant",
              "Malgré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Car fait partie de mais, ou, et, donc, or, ni, car."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La subordination",
          "stepTheme": "La subordination",
          "stepBadge": "La subordination",
          "paragraphText": "Les conjonctions de subordination (parce que, puisque, bien que, pour que, si, alors que...) introduisent une proposition subordonnée.\n« Vous réussirez pourvu que vous travailliez. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q3",
            "type": "mcq",
            "prompt": "Que fait une conjonction de subordination comme « parce que » ?",
            "options": [
              "Elle relie deux noms sans verbe",
              "Elle remplace un verbe conjugué",
              "Elle termine toujours la phrase",
              "Elle introduit une proposition subordonnée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Parce que + proposition subordonnée de cause."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les adverbes de liaison",
          "stepTheme": "Les adverbes de liaison",
          "stepBadge": "Les adverbes de liaison",
          "paragraphText": "Les adverbes de liaison relient des phrases ou des paragraphes : d'abord, ensuite, enfin, cependant, pourtant, toutefois, en effet, par conséquent...",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q4",
            "type": "mcq",
            "prompt": "Lequel de ces connecteurs est un adverbe de liaison ?",
            "options": [
              "Mais",
              "Pourtant",
              "Bien que",
              "À cause de"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pourtant est un adverbe ; mais est une conjonction de coordination."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les prépositions",
          "stepTheme": "Les prépositions",
          "stepBadge": "Les prépositions",
          "paragraphText": "Certaines prépositions jouent le rôle de connecteur. Elles sont suivies d'un nom ou d'un infinitif : malgré, grâce à, à cause de, afin de...\n« Je pars à cause du froid. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q5",
            "type": "mcq",
            "prompt": "Dans « Malgré sa timidité, elle est allée voir la maîtresse », que suit le connecteur « malgré » ?",
            "options": [
              "Une proposition avec un verbe conjugué",
              "Un groupe nominal",
              "Un adverbe",
              "Un point final"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Malgré + nom : « malgré sa timidité »."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Dans le texte support",
          "stepTheme": "Dans le texte support",
          "stepBadge": "Dans le texte support",
          "paragraphText": "Dans « La télévision », l'auteur organise ses arguments avec : « Et d'abord », « Par ailleurs », « Enfin », « Pour toutes ces raisons ».",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q6",
            "type": "mcq",
            "prompt": "Dans « La télévision », quel connecteur introduit le deuxième argument ?",
            "options": [
              "« Et d'abord »",
              "« Pour toutes ces raisons »",
              "« Certes »",
              "« Par ailleurs »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« Par ailleurs, la télévision informe » : c'est le deuxième argument."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Bien que ou malgré ?",
          "stepTheme": "Bien que ou malgré ?",
          "stepBadge": "Bien que ou malgré ?",
          "paragraphText": "« Bien que » est suivi d'une proposition au subjonctif : « bien qu'il soit malade ».\n« Malgré » est suivi d'un nom : « malgré sa maladie ».\nOn n'écrit pas « malgré qu'il soit malade » dans un devoir.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q7",
            "type": "mcq",
            "prompt": "Quelle phrase est correcte ?",
            "options": [
              "Bien qu'il soit malade, il travaille.",
              "Malgré qu'il est malade, il travaille.",
              "Bien que sa maladie, il travaille.",
              "Malgré il soit malade, il travaille."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Bien que + subjonctif ; malgré + nom."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q1",
          "type": "mcq",
          "prompt": "Quel est le rôle d'un connecteur logique ?",
          "options": [
            "Remplacer un nom déjà employé",
            "Décrire un personnage ou un lieu",
            "Relier des idées en marquant leur rapport",
            "Indiquer le temps d'un verbe"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le connecteur montre comment les idées s'enchaînent."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q2",
          "type": "mcq",
          "prompt": "Lequel de ces mots est une conjonction de coordination ?",
          "options": [
            "Car",
            "Parce que",
            "Cependant",
            "Malgré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Car fait partie de mais, ou, et, donc, or, ni, car."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q3",
          "type": "mcq",
          "prompt": "Que fait une conjonction de subordination comme « parce que » ?",
          "options": [
            "Elle relie deux noms sans verbe",
            "Elle remplace un verbe conjugué",
            "Elle termine toujours la phrase",
            "Elle introduit une proposition subordonnée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Parce que + proposition subordonnée de cause."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q4",
          "type": "mcq",
          "prompt": "Lequel de ces connecteurs est un adverbe de liaison ?",
          "options": [
            "Mais",
            "Pourtant",
            "Bien que",
            "À cause de"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pourtant est un adverbe ; mais est une conjonction de coordination."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q5",
          "type": "mcq",
          "prompt": "Dans « Malgré sa timidité, elle est allée voir la maîtresse », que suit le connecteur « malgré » ?",
          "options": [
            "Une proposition avec un verbe conjugué",
            "Un groupe nominal",
            "Un adverbe",
            "Un point final"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Malgré + nom : « malgré sa timidité »."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q6",
          "type": "mcq",
          "prompt": "Dans « La télévision », quel connecteur introduit le deuxième argument ?",
          "options": [
            "« Et d'abord »",
            "« Pour toutes ces raisons »",
            "« Certes »",
            "« Par ailleurs »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« Par ailleurs, la télévision informe » : c'est le deuxième argument."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p01_q7",
          "type": "mcq",
          "prompt": "Quelle phrase est correcte ?",
          "options": [
            "Bien qu'il soit malade, il travaille.",
            "Malgré qu'il est malade, il travaille.",
            "Bien que sa maladie, il travaille.",
            "Malgré il soit malade, il travaille."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Bien que + subjonctif ; malgré + nom."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02",
      "order": 2,
      "title": "Cause et conséquence",
      "summary": "Justifier une idée, en tirer un résultat.",
      "conceptExplanation": "1. La cause explique pourquoi un fait se produit. Les connecteurs de cause apportent une preuve, une justification : car, parce que, puisque, comme, étant donné que, vu que, en raison de, à cause de, grâce à, sous prétexte que.\nExemple : « Il est absent aujourd'hui car il est malade. »\nNuance : « grâce à » introduit une cause positive, « à cause de » une cause souvent négative ; « sous prétexte que » présente une cause jugée fausse.\n\n2. La conséquence indique le résultat d'un fait : donc, par conséquent, c'est pourquoi, ainsi, si bien que, de sorte que, au point que, aussi (+ inversion du sujet).\nExemple : « Il pleut, par conséquent je ne viendrai pas. »\n\nUn même lien peut s'exprimer dans les deux sens : « Je reste car il pleut » (cause) = « Il pleut, donc je reste » (conséquence).",
      "keyRule": "Cause (pourquoi ?) : car, parce que, puisque, comme, grâce à, à cause de. Conséquence (résultat) : donc, par conséquent, c'est pourquoi, si bien que, de sorte que.",
      "formulas": [],
      "workedExample": {
        "title": "Transformer une cause en conséquence",
        "statement": "Réécris « Il a réussi parce qu'il a travaillé » avec un connecteur de conséquence.",
        "methodSteps": [
          "La cause est « il a travaillé », le résultat « il a réussi ».",
          "On place la cause en premier, puis un connecteur de conséquence."
        ],
        "conclusion": "« Il a travaillé, c'est pourquoi il a réussi. »"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La cause",
          "stepTheme": "La cause",
          "stepBadge": "La cause",
          "paragraphText": "Les connecteurs de cause expliquent pourquoi un fait se produit : ils apportent une preuve, une justification.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q1",
            "type": "mcq",
            "prompt": "Que fait un connecteur de cause ?",
            "options": [
              "Il annonce le résultat d'un fait",
              "Il oppose deux idées contraires",
              "Il explique pourquoi un fait se produit",
              "Il range les arguments dans l'ordre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La cause répond à la question « pourquoi ? »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Car, parce que, puisque",
          "stepTheme": "Car, parce que, puisque",
          "stepBadge": "Car, parce que, puisque",
          "paragraphText": "Connecteurs de cause : car, parce que, puisque, comme, étant donné que, vu que, en raison de.\n« Il est absent car il est malade. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q2",
            "type": "mcq",
            "prompt": "Lequel de ces connecteurs exprime la cause ?",
            "options": [
              "Par conséquent",
              "Cependant",
              "Afin que",
              "Puisque"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Puisque introduit une cause connue de tous."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Grâce à et à cause de",
          "stepTheme": "Grâce à et à cause de",
          "stepBadge": "Grâce à et à cause de",
          "paragraphText": "« Grâce à » introduit une cause positive : « Il a réussi grâce à son travail. »\n« À cause de » introduit une cause plutôt négative : « Il a échoué à cause de sa paresse. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q3",
            "type": "mcq",
            "prompt": "Quel connecteur convient : « Il a été reçu … son sérieux » ?",
            "options": [
              "à cause de",
              "malgré",
              "grâce à",
              "bien que"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Être reçu est positif : on emploie « grâce à »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La conséquence",
          "stepTheme": "La conséquence",
          "stepBadge": "La conséquence",
          "paragraphText": "Les connecteurs de conséquence indiquent le résultat d'un fait : donc, par conséquent, c'est pourquoi, ainsi, si bien que, de sorte que, au point que.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q4",
            "type": "mcq",
            "prompt": "Lequel de ces connecteurs exprime la conséquence ?",
            "options": [
              "Parce que",
              "Par conséquent",
              "Bien que",
              "Pour que"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par conséquent annonce un résultat."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un résultat",
          "stepTheme": "Un résultat",
          "stepBadge": "Un résultat",
          "paragraphText": "« Le ciel est nuageux, donc il va sans doute pleuvoir. »\nLa pluie probable est la conséquence des nuages.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q5",
            "type": "mcq",
            "prompt": "Dans « Le ciel est nuageux, donc il va pleuvoir », quel rapport exprime « donc » ?",
            "options": [
              "La conséquence",
              "La cause",
              "L'opposition",
              "Le but"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La pluie est le résultat attendu du ciel nuageux."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Inverser le lien",
          "stepTheme": "Inverser le lien",
          "stepBadge": "Inverser le lien",
          "paragraphText": "Un même lien logique peut s'exprimer de deux façons :\n• « Je reste car il pleut » (cause) ;\n• « Il pleut, donc je reste » (conséquence).",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q6",
            "type": "mcq",
            "prompt": "Quelle phrase a le même sens que « Il a réussi parce qu'il a travaillé » ?",
            "options": [
              "Il a travaillé, c'est pourquoi il a réussi.",
              "Il a réussi, c'est pourquoi il a travaillé.",
              "Il a travaillé, pourtant il a réussi.",
              "Il a réussi bien qu'il ait travaillé."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La cause (travail) entraîne la conséquence (réussite)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Sous prétexte que",
          "stepTheme": "Sous prétexte que",
          "stepBadge": "Sous prétexte que",
          "paragraphText": "« Sous prétexte que » présente une cause que l'on juge fausse ou mauvaise :\n« Il n'a pas fait ses devoirs sous prétexte qu'il était fatigué. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q7",
            "type": "mcq",
            "prompt": "Que suggère « sous prétexte que » dans « Il est sorti sous prétexte qu'il avait mal à la tête » ?",
            "options": [
              "Que la cause donnée est certaine",
              "Que la cause donnée est sans doute fausse",
              "Qu'il s'agit d'un but à atteindre",
              "Qu'il s'agit d'une condition à remplir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le locuteur doute de l'excuse avancée."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q1",
          "type": "mcq",
          "prompt": "Que fait un connecteur de cause ?",
          "options": [
            "Il annonce le résultat d'un fait",
            "Il oppose deux idées contraires",
            "Il explique pourquoi un fait se produit",
            "Il range les arguments dans l'ordre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La cause répond à la question « pourquoi ? »."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q2",
          "type": "mcq",
          "prompt": "Lequel de ces connecteurs exprime la cause ?",
          "options": [
            "Par conséquent",
            "Cependant",
            "Afin que",
            "Puisque"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Puisque introduit une cause connue de tous."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q3",
          "type": "mcq",
          "prompt": "Quel connecteur convient : « Il a été reçu … son sérieux » ?",
          "options": [
            "à cause de",
            "malgré",
            "grâce à",
            "bien que"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Être reçu est positif : on emploie « grâce à »."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q4",
          "type": "mcq",
          "prompt": "Lequel de ces connecteurs exprime la conséquence ?",
          "options": [
            "Parce que",
            "Par conséquent",
            "Bien que",
            "Pour que"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par conséquent annonce un résultat."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q5",
          "type": "mcq",
          "prompt": "Dans « Le ciel est nuageux, donc il va pleuvoir », quel rapport exprime « donc » ?",
          "options": [
            "La conséquence",
            "La cause",
            "L'opposition",
            "Le but"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La pluie est le résultat attendu du ciel nuageux."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q6",
          "type": "mcq",
          "prompt": "Quelle phrase a le même sens que « Il a réussi parce qu'il a travaillé » ?",
          "options": [
            "Il a travaillé, c'est pourquoi il a réussi.",
            "Il a réussi, c'est pourquoi il a travaillé.",
            "Il a travaillé, pourtant il a réussi.",
            "Il a réussi bien qu'il ait travaillé."
          ],
          "correctAnswerIndex": 0,
          "explanation": "La cause (travail) entraîne la conséquence (réussite)."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p02_q7",
          "type": "mcq",
          "prompt": "Que suggère « sous prétexte que » dans « Il est sorti sous prétexte qu'il avait mal à la tête » ?",
          "options": [
            "Que la cause donnée est certaine",
            "Que la cause donnée est sans doute fausse",
            "Qu'il s'agit d'un but à atteindre",
            "Qu'il s'agit d'une condition à remplir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le locuteur doute de l'excuse avancée."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03",
      "order": 3,
      "title": "Opposition et concession",
      "summary": "Opposer deux idées, admettre puis réfuter.",
      "conceptExplanation": "1. L'opposition met en contraste deux faits ou deux idées : mais, or, cependant, pourtant, toutefois, néanmoins, en revanche, au contraire, alors que, tandis que.\nExemple : « Il est robuste ; pourtant, il a un moral faible. »\n\n2. La concession consiste à reconnaître la valeur d'un argument adverse avant de le dépasser par son propre argument. Connecteurs : certes... mais, bien que, quoique (en un seul mot), même si, malgré.\nExemple tiré de « La télévision » : « Certes, on peut lui reprocher de diffuser aussi des spectacles médiocres, mais il appartient au spectateur de remédier à cet inconvénient en choisissant ses programmes. »\nL'auteur admet un défaut de la télévision (certes), puis montre qu'on peut y remédier (mais). La concession rend l'argumentation plus honnête et plus convaincante.\n\nAttention : « quoique » (= bien que) s'écrit en un mot ; « quoi que » en deux mots signifie « quelle que soit la chose que » (« Quoi que tu dises, je viendrai »).",
      "keyRule": "Opposition : mais, cependant, pourtant, en revanche, alors que. Concession : certes… mais, bien que, quoique, même si (on admet, puis on réfute).",
      "formulas": [],
      "workedExample": {
        "title": "Construire une concession",
        "statement": "Écris une concession sur le téléphone portable.",
        "methodSteps": [
          "On admet un argument adverse : « Certes, le portable distrait les élèves. »",
          "On le dépasse : « mais il leur permet aussi de faire des recherches utiles. »"
        ],
        "conclusion": "« Certes, le portable distrait les élèves, mais il leur permet aussi de faire des recherches utiles. »"
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'opposition",
          "stepTheme": "L'opposition",
          "stepBadge": "L'opposition",
          "paragraphText": "L'opposition met en contraste deux faits ou deux idées.\nConnecteurs : mais, or, cependant, pourtant, toutefois, néanmoins, en revanche, au contraire, alors que, tandis que.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q1",
            "type": "mcq",
            "prompt": "Lequel de ces connecteurs exprime l'opposition ?",
            "options": [
              "En effet",
              "Par conséquent",
              "En revanche",
              "De plus"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En revanche introduit un contraste."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Pourtant",
          "stepTheme": "Pourtant",
          "stepBadge": "Pourtant",
          "paragraphText": "« Luc est très malade ; cependant, il reste dévoué à la tâche. »\nOn s'attendrait à ce qu'il se repose : le connecteur marque le contraste.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q2",
            "type": "mcq",
            "prompt": "Quel rapport exprime « cependant » dans « Luc est malade ; cependant, il reste dévoué » ?",
            "options": [
              "La cause",
              "La conséquence",
              "L'addition",
              "L'opposition"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le dévouement contraste avec la maladie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La concession",
          "stepTheme": "La concession",
          "stepBadge": "La concession",
          "paragraphText": "Faire une concession, c'est reconnaître la valeur d'un argument adverse avant de le dépasser par son propre argument.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce que faire une concession dans une argumentation ?",
            "options": [
              "Refuser d'écouter l'avis des autres",
              "Répéter plusieurs fois le même argument",
              "Admettre un argument adverse avant de le dépasser",
              "Conclure sans donner d'arguments"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On accorde un point à l'adversaire, puis on le réfute."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Certes... mais",
          "stepTheme": "Certes... mais",
          "stepBadge": "Certes... mais",
          "paragraphText": "« Certes, on peut lui reprocher de diffuser des spectacles médiocres, mais il appartient au spectateur de choisir ses programmes. »\n(G. Niquet, « La télévision »)",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q4",
            "type": "mcq",
            "prompt": "« Certes, on peut lui reprocher de diffuser des spectacles médiocres, mais il appartient au spectateur de choisir ses programmes. » (G. Niquet, « La télévision »). Quel couple de connecteurs marque la concession dans cette phrase ?",
            "options": [
              "« Et d'abord... enfin »",
              "« Par ailleurs... ainsi »",
              "« Parce que... donc »",
              "« Certes... mais »"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Certes admet le défaut, mais le dépasse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi concéder ?",
          "stepTheme": "Pourquoi concéder ?",
          "stepBadge": "Pourquoi concéder ?",
          "paragraphText": "La concession rend l'argumentation plus honnête : l'auteur montre qu'il connaît les objections, puis il y répond.\nSon point de vue paraît plus solide.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q5",
            "type": "mcq",
            "prompt": "Quel est l'intérêt de la concession pour celui qui argumente ?",
            "options": [
              "Rendre sa thèse plus convaincante",
              "Abandonner sa propre thèse",
              "Allonger inutilement son texte",
              "Éviter de donner des exemples"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Répondre aux objections renforce la thèse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Bien que",
          "stepTheme": "Bien que",
          "stepBadge": "Bien que",
          "paragraphText": "« Bien que » exprime la concession et se construit avec le subjonctif :\n« Bien qu'il pleuve, nous sortirons. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q6",
            "type": "mcq",
            "prompt": "Quel mode suit « bien que » ?",
            "options": [
              "L'indicatif",
              "Le subjonctif",
              "L'impératif",
              "L'infinitif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Bien qu'il pleuve (subjonctif)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Quoique ou quoi que ?",
          "stepTheme": "Quoique ou quoi que ?",
          "stepBadge": "Quoique ou quoi que ?",
          "paragraphText": "• « Quoique » en un mot = bien que : « Quoiqu'il soit tard, il travaille. »\n• « Quoi que » en deux mots = quelle que soit la chose : « Quoi que tu dises, je viendrai. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q7",
            "type": "mcq",
            "prompt": "Quelle phrase emploie correctement « quoique » (en un mot) ?",
            "options": [
              "Quoique tu dises, je ne changerai pas.",
              "Quoiqu'il soit fatigué, il continue.",
              "Quoique tu fasses, fais-le bien.",
              "Quoique ce soit, dis-le-moi."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quoique = bien que. Dans les autres phrases, il fallait « quoi que » en deux mots."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q1",
          "type": "mcq",
          "prompt": "Lequel de ces connecteurs exprime l'opposition ?",
          "options": [
            "En effet",
            "Par conséquent",
            "En revanche",
            "De plus"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En revanche introduit un contraste."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q2",
          "type": "mcq",
          "prompt": "Quel rapport exprime « cependant » dans « Luc est malade ; cependant, il reste dévoué » ?",
          "options": [
            "La cause",
            "La conséquence",
            "L'addition",
            "L'opposition"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le dévouement contraste avec la maladie."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce que faire une concession dans une argumentation ?",
          "options": [
            "Refuser d'écouter l'avis des autres",
            "Répéter plusieurs fois le même argument",
            "Admettre un argument adverse avant de le dépasser",
            "Conclure sans donner d'arguments"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On accorde un point à l'adversaire, puis on le réfute."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q4",
          "type": "mcq",
          "prompt": "« Certes, on peut lui reprocher de diffuser des spectacles médiocres, mais il appartient au spectateur de choisir ses programmes. » (G. Niquet, « La télévision »). Quel couple de connecteurs marque la concession dans cette phrase ?",
          "options": [
            "« Et d'abord... enfin »",
            "« Par ailleurs... ainsi »",
            "« Parce que... donc »",
            "« Certes... mais »"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Certes admet le défaut, mais le dépasse."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q5",
          "type": "mcq",
          "prompt": "Quel est l'intérêt de la concession pour celui qui argumente ?",
          "options": [
            "Rendre sa thèse plus convaincante",
            "Abandonner sa propre thèse",
            "Allonger inutilement son texte",
            "Éviter de donner des exemples"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Répondre aux objections renforce la thèse."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q6",
          "type": "mcq",
          "prompt": "Quel mode suit « bien que » ?",
          "options": [
            "L'indicatif",
            "Le subjonctif",
            "L'impératif",
            "L'infinitif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Bien qu'il pleuve (subjonctif)."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p03_q7",
          "type": "mcq",
          "prompt": "Quelle phrase emploie correctement « quoique » (en un mot) ?",
          "options": [
            "Quoique tu dises, je ne changerai pas.",
            "Quoiqu'il soit fatigué, il continue.",
            "Quoique tu fasses, fais-le bien.",
            "Quoique ce soit, dis-le-moi."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quoique = bien que. Dans les autres phrases, il fallait « quoi que » en deux mots."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04",
      "order": 4,
      "title": "Addition, ordre et conclusion",
      "summary": "Ajouter, organiser et conclure ses arguments.",
      "conceptExplanation": "1. L'addition ajoute une idée ou une information nouvelle : et, de plus, en outre, par ailleurs, d'ailleurs, ainsi que, de même, encore, de surcroît.\nExemple : « Il est arrivé en retard ; de surcroît, il a salué avec arrogance. »\n\n2. L'ordre (ou énumération) indique la place des arguments dans le raisonnement : d'abord, premièrement, en premier lieu, ensuite, puis, enfin, d'une part... d'autre part.\nExemple tiré de « La télévision » : « Et d'abord » (1er argument : la détente), « Par ailleurs » (2e : l'information), « Enfin » (3e : l'instruction).\n\n3. La conclusion résume ou clôt le raisonnement : donc, ainsi, en somme, bref, en définitive, en conclusion, finalement, pour toutes ces raisons.\nExemple : « Pour toutes ces raisons, je pense que la télévision est une invention bénéfique. »",
      "keyRule": "Addition : de plus, en outre, par ailleurs, de surcroît. Ordre : d'abord, ensuite, enfin, d'une part… d'autre part. Conclusion : en somme, bref, en définitive, pour toutes ces raisons.",
      "formulas": [],
      "workedExample": {
        "title": "Organiser un paragraphe",
        "statement": "Range ces idées : « Enfin, elle instruit. » / « D'abord, elle détend. » / « Ensuite, elle informe. »",
        "methodSteps": [
          "« D'abord » ouvre l'énumération.",
          "« Ensuite » vient au milieu.",
          "« Enfin » ferme la liste."
        ],
        "conclusion": "D'abord, elle détend. Ensuite, elle informe. Enfin, elle instruit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'addition",
          "stepTheme": "L'addition",
          "stepBadge": "L'addition",
          "paragraphText": "Les connecteurs d'addition ajoutent une idée nouvelle : et, de plus, en outre, par ailleurs, d'ailleurs, de surcroît, ainsi que.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q1",
            "type": "mcq",
            "prompt": "Lequel de ces connecteurs exprime l'addition ?",
            "options": [
              "En outre",
              "Toutefois",
              "Puisque",
              "Afin que"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En outre = de plus."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "De surcroît",
          "stepTheme": "De surcroît",
          "stepBadge": "De surcroît",
          "paragraphText": "« Il est arrivé en retard ; de surcroît, il a salué avec arrogance. »\n« De surcroît » ajoute un reproche au premier.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q2",
            "type": "mcq",
            "prompt": "Quel rapport exprime « de surcroît » ?",
            "options": [
              "L'opposition",
              "La cause",
              "La condition",
              "L'addition"
            ],
            "correctAnswerIndex": 3,
            "explanation": "De surcroît = en plus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'ordre",
          "stepTheme": "L'ordre",
          "stepBadge": "L'ordre",
          "paragraphText": "Les connecteurs d'ordre indiquent la place des arguments : d'abord, premièrement, ensuite, puis, enfin, d'une part... d'autre part.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q3",
            "type": "mcq",
            "prompt": "Quel connecteur annonce le dernier argument d'une énumération ?",
            "options": [
              "D'abord",
              "Ensuite",
              "Enfin",
              "D'une part"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Enfin clôt la série d'arguments."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le plan du texte support",
          "stepTheme": "Le plan du texte support",
          "stepBadge": "Le plan du texte support",
          "paragraphText": "Dans « La télévision » :\n• « Et d'abord » : la détente ;\n• « Par ailleurs » : l'information ;\n• « Enfin » : l'instruction.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q4",
            "type": "mcq",
            "prompt": "Dans « La télévision », quel argument est introduit par « Enfin » ?",
            "options": [
              "La télévision détend",
              "La télévision informe",
              "La télévision instruit",
              "La télévision fait veiller"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Enfin, autre aspect positif : elle instruit. »"
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La conclusion",
          "stepTheme": "La conclusion",
          "stepBadge": "La conclusion",
          "paragraphText": "Les connecteurs de conclusion résument ou closent le raisonnement : en somme, bref, en définitive, en conclusion, finalement, pour toutes ces raisons.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q5",
            "type": "mcq",
            "prompt": "Lequel de ces connecteurs introduit une conclusion ?",
            "options": [
              "En définitive",
              "Par ailleurs",
              "Néanmoins",
              "Parce que"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En définitive = pour conclure."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Pour toutes ces raisons",
          "stepTheme": "Pour toutes ces raisons",
          "stepBadge": "Pour toutes ces raisons",
          "paragraphText": "« Pour toutes ces raisons, je pense que la télévision est une invention bénéfique. »\nL'auteur rassemble ses arguments pour conclure.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q6",
            "type": "mcq",
            "prompt": "Quel est le rôle de « Pour toutes ces raisons » dans le dernier paragraphe de « La télévision » ?",
            "options": [
              "Ajouter un nouvel argument",
              "Annoncer une objection",
              "Donner un exemple précis",
              "Introduire la conclusion"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il récapitule les arguments avant la thèse finale."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Compléter un texte",
          "stepTheme": "Compléter un texte",
          "stepBadge": "Compléter un texte",
          "paragraphText": "Pour compléter un texte à trous, lis la phrase avant et la phrase après le trou, puis cherche le rapport entre elles (ajout, opposition, conséquence...).",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q7",
            "type": "mcq",
            "prompt": "« La boisson était réservée aux anciens. … de nos jours, tout le monde en boit. » Quel connecteur convient ?",
            "options": [
              "Donc",
              "Mais",
              "De plus",
              "Car"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux phrases s'opposent (autrefois / de nos jours) : « Mais »."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q1",
          "type": "mcq",
          "prompt": "Lequel de ces connecteurs exprime l'addition ?",
          "options": [
            "En outre",
            "Toutefois",
            "Puisque",
            "Afin que"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En outre = de plus."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q2",
          "type": "mcq",
          "prompt": "Quel rapport exprime « de surcroît » ?",
          "options": [
            "L'opposition",
            "La cause",
            "La condition",
            "L'addition"
          ],
          "correctAnswerIndex": 3,
          "explanation": "De surcroît = en plus."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q3",
          "type": "mcq",
          "prompt": "Quel connecteur annonce le dernier argument d'une énumération ?",
          "options": [
            "D'abord",
            "Ensuite",
            "Enfin",
            "D'une part"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Enfin clôt la série d'arguments."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q4",
          "type": "mcq",
          "prompt": "Dans « La télévision », quel argument est introduit par « Enfin » ?",
          "options": [
            "La télévision détend",
            "La télévision informe",
            "La télévision instruit",
            "La télévision fait veiller"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Enfin, autre aspect positif : elle instruit. »"
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q5",
          "type": "mcq",
          "prompt": "Lequel de ces connecteurs introduit une conclusion ?",
          "options": [
            "En définitive",
            "Par ailleurs",
            "Néanmoins",
            "Parce que"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En définitive = pour conclure."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q6",
          "type": "mcq",
          "prompt": "Quel est le rôle de « Pour toutes ces raisons » dans le dernier paragraphe de « La télévision » ?",
          "options": [
            "Ajouter un nouvel argument",
            "Annoncer une objection",
            "Donner un exemple précis",
            "Introduire la conclusion"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il récapitule les arguments avant la thèse finale."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p04_q7",
          "type": "mcq",
          "prompt": "« La boisson était réservée aux anciens. … de nos jours, tout le monde en boit. » Quel connecteur convient ?",
          "options": [
            "Donc",
            "Mais",
            "De plus",
            "Car"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux phrases s'opposent (autrefois / de nos jours) : « Mais »."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05",
      "order": 5,
      "title": "But, condition, comparaison et illustration",
      "summary": "D'autres rapports logiques utiles.",
      "conceptExplanation": "1. Le but indique l'objectif visé : pour, afin de (+ infinitif) ; pour que, afin que (+ subjonctif) ; de peur que, de crainte que (but à éviter).\nExemple : « Il prend des précautions pour que ses enfants ne tombent pas malades. »\n\n2. La condition ou l'hypothèse indique ce qui doit être réalisé pour qu'un fait ait lieu : si, au cas où, à condition que, pourvu que, en cas de.\nExemple : « Tu peux réussir au bac pourvu que tu te mettes au travail. »\n\n3. La comparaison rapproche deux éléments pour montrer une ressemblance ou une différence : comme, ainsi que, de même que, plus... que, moins... que, aussi... que.\nExemple : « La mer est toute ronde comme une belle montre. »\n\n4. L'illustration introduit un exemple : par exemple, ainsi, notamment, à savoir, pour preuve.\nExemple : « Songez aux premiers pas de l'homme sur la Lune » illustre l'idée que la télévision informe en direct.\n\n5. L'explication précise une idée : c'est-à-dire, autrement dit, en effet.",
      "keyRule": "But : pour, afin que. Condition : si, à condition que, pourvu que. Comparaison : comme, plus… que. Illustration : par exemple, notamment. Explication : c'est-à-dire, en effet.",
      "formulas": [],
      "workedExample": {
        "title": "But ou cause ?",
        "statement": "« Il travaille pour réussir » ou « Il réussit parce qu'il travaille » : quelle phrase exprime le but ?",
        "methodSteps": [
          "Le but est un objectif à atteindre, dans le futur.",
          "« pour réussir » : la réussite est visée, pas encore obtenue."
        ],
        "conclusion": "« Il travaille pour réussir » exprime le but."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le but",
          "stepTheme": "Le but",
          "stepBadge": "Le but",
          "paragraphText": "Les connecteurs de but indiquent l'objectif visé : pour, afin de, pour que, afin que, de peur que.\n« Je vais à l'école pour apprendre. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q1",
            "type": "mcq",
            "prompt": "Quel rapport exprime « pour » dans « Je vais à l'école pour apprendre » ?",
            "options": [
              "La cause",
              "Le but",
              "La conséquence",
              "L'opposition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Apprendre est l'objectif visé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Afin que + subjonctif",
          "stepTheme": "Afin que + subjonctif",
          "stepBadge": "Afin que + subjonctif",
          "paragraphText": "« Pour que » et « afin que » sont suivis du subjonctif :\n« Parle fort afin qu'on t'entende. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q2",
            "type": "mcq",
            "prompt": "Quelle phrase emploie correctement « afin que » ?",
            "options": [
              "Parle fort afin qu'on t'entend.",
              "Parle fort afin qu'on t'entendra.",
              "Parle fort afin qu'on t'entendait.",
              "Parle fort afin qu'on t'entende."
            ],
            "correctAnswerIndex": 3,
            "explanation": "Afin que + subjonctif : « qu'on t'entende »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La condition",
          "stepTheme": "La condition",
          "stepBadge": "La condition",
          "paragraphText": "Les connecteurs de condition indiquent ce qui doit se réaliser pour qu'un fait ait lieu : si, au cas où, à condition que, pourvu que.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q3",
            "type": "mcq",
            "prompt": "Quel rapport exprime « pourvu que » dans « Tu réussiras pourvu que tu travailles » ?",
            "options": [
              "La condition",
              "La cause",
              "Le but",
              "L'addition"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La réussite dépend d'une condition : travailler."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La comparaison",
          "stepTheme": "La comparaison",
          "stepBadge": "La comparaison",
          "paragraphText": "Les connecteurs de comparaison rapprochent deux éléments : comme, ainsi que, de même que, plus... que, aussi... que.\n« La mer est toute ronde comme une belle montre. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q4",
            "type": "mcq",
            "prompt": "Lequel de ces connecteurs exprime la comparaison ?",
            "options": [
              "Afin que",
              "Bien que",
              "De même que",
              "Si bien que"
            ],
            "correctAnswerIndex": 2,
            "explanation": "De même que établit une ressemblance."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Illustrer",
          "stepTheme": "Illustrer",
          "stepBadge": "Illustrer",
          "paragraphText": "Les connecteurs d'illustration introduisent un exemple : par exemple, notamment, ainsi, à savoir, pour preuve.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q5",
            "type": "mcq",
            "prompt": "Quel connecteur introduit un exemple ?",
            "options": [
              "Néanmoins",
              "Par conséquent",
              "Quoique",
              "Notamment"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Notamment = en particulier, par exemple."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "Expliquer",
          "stepTheme": "Expliquer",
          "stepBadge": "Expliquer",
          "paragraphText": "Les connecteurs d'explication précisent ou reformulent une idée : c'est-à-dire, autrement dit, en effet.\n« Il faut éduquer le public, c'est-à-dire lui apprendre à se servir de la télévision. »",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q6",
            "type": "mcq",
            "prompt": "Quel rapport exprime « c'est-à-dire » dans la dernière phrase de « La télévision » ?",
            "options": [
              "L'opposition",
              "Le but",
              "L'explication",
              "La condition"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est-à-dire précise ce que signifie « éduquer le public »."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pour que ou parce que ?",
          "stepTheme": "Pour que ou parce que ?",
          "stepBadge": "Pour que ou parce que ?",
          "paragraphText": "Ne confonds pas :\n• « parce que » = cause (ce qui explique) ;\n• « pour que » = but (ce qu'on vise).\n« Il économise pour pouvoir voyager » : le voyage est l'objectif.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q7",
            "type": "mcq",
            "prompt": "Quel connecteur convient : « Il économise … pouvoir acheter un vélo » ?",
            "options": [
              "parce que",
              "afin de",
              "bien que",
              "si bien que"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Acheter un vélo est un objectif : afin de + infinitif."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q1",
          "type": "mcq",
          "prompt": "Quel rapport exprime « pour » dans « Je vais à l'école pour apprendre » ?",
          "options": [
            "La cause",
            "Le but",
            "La conséquence",
            "L'opposition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Apprendre est l'objectif visé."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q2",
          "type": "mcq",
          "prompt": "Quelle phrase emploie correctement « afin que » ?",
          "options": [
            "Parle fort afin qu'on t'entend.",
            "Parle fort afin qu'on t'entendra.",
            "Parle fort afin qu'on t'entendait.",
            "Parle fort afin qu'on t'entende."
          ],
          "correctAnswerIndex": 3,
          "explanation": "Afin que + subjonctif : « qu'on t'entende »."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q3",
          "type": "mcq",
          "prompt": "Quel rapport exprime « pourvu que » dans « Tu réussiras pourvu que tu travailles » ?",
          "options": [
            "La condition",
            "La cause",
            "Le but",
            "L'addition"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réussite dépend d'une condition : travailler."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q4",
          "type": "mcq",
          "prompt": "Lequel de ces connecteurs exprime la comparaison ?",
          "options": [
            "Afin que",
            "Bien que",
            "De même que",
            "Si bien que"
          ],
          "correctAnswerIndex": 2,
          "explanation": "De même que établit une ressemblance."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q5",
          "type": "mcq",
          "prompt": "Quel connecteur introduit un exemple ?",
          "options": [
            "Néanmoins",
            "Par conséquent",
            "Quoique",
            "Notamment"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Notamment = en particulier, par exemple."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q6",
          "type": "mcq",
          "prompt": "Quel rapport exprime « c'est-à-dire » dans la dernière phrase de « La télévision » ?",
          "options": [
            "L'opposition",
            "Le but",
            "L'explication",
            "La condition"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est-à-dire précise ce que signifie « éduquer le public »."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p05_q7",
          "type": "mcq",
          "prompt": "Quel connecteur convient : « Il économise … pouvoir acheter un vélo » ?",
          "options": [
            "parce que",
            "afin de",
            "bien que",
            "si bien que"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Acheter un vélo est un objectif : afin de + infinitif."
        }
      ]
    },
    {
      "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06",
      "order": 6,
      "title": "Les liens logiques implicites",
      "summary": "Quand le rapport logique n'est pas écrit.",
      "conceptExplanation": "Les connecteurs étudiés sont explicites : le lien logique est clairement écrit. Mais le lien peut aussi être implicite : il n'est pas exprimé par un mot, c'est le contexte qui permet de le deviner.\n\nLe lien implicite peut venir :\n- de la ponctuation : la juxtaposition de deux phrases ou de deux propositions séparées par une virgule ou un point-virgule (« Il pleuvait ; nous sommes restés ») ; les deux-points, qui annoncent souvent une cause, une conséquence ou une explication (« Il est absent : il est malade ») ; les parenthèses, qui ajoutent une précision ou un exemple ;\n- de la disposition du texte : chaque paragraphe développe souvent un argument ;\n- de l'énonciation : les pronoms, les temps verbaux, les mots appréciatifs peuvent suggérer une relation logique.\n\nPour analyser un lien implicite, on essaie d'ajouter le connecteur qui manque : s'il convient sans changer le sens, on a trouvé le rapport logique.",
      "keyRule": "Lien implicite : non écrit, deviné grâce au contexte (ponctuation, paragraphes, énonciation). Pour le trouver, on ajoute le connecteur manquant.",
      "formulas": [],
      "workedExample": {
        "title": "Retrouver le lien caché",
        "statement": "« Le magasin était fermé : nous sommes rentrés. » Quel rapport logique exprime le deux-points ?",
        "methodSteps": [
          "On essaie d'ajouter un connecteur : « Le magasin était fermé, donc nous sommes rentrés. »",
          "Le sens ne change pas."
        ],
        "conclusion": "Le deux-points exprime ici une conséquence."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Explicite",
          "stepTheme": "Explicite",
          "stepBadge": "Explicite",
          "paragraphText": "Un lien logique est explicite quand il est clairement écrit grâce à un connecteur : car, donc, mais, pourtant...",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q1",
            "type": "mcq",
            "prompt": "Quand un lien logique est-il explicite ?",
            "options": [
              "Quand un connecteur l'exprime clairement",
              "Quand le lecteur doit le deviner",
              "Quand la phrase n'a pas de verbe",
              "Quand le texte est un poème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Explicite = dit clairement."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Implicite",
          "stepTheme": "Implicite",
          "stepBadge": "Implicite",
          "paragraphText": "Un lien logique est implicite quand aucun mot ne l'exprime : c'est le contexte qui permet de le deviner.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q2",
            "type": "mcq",
            "prompt": "Que signifie « lien logique implicite » ?",
            "options": [
              "Un lien non écrit, deviné grâce au contexte",
              "Un lien exprimé par « parce que »",
              "Un lien toujours placé en début de texte",
              "Un lien qui n'a aucun sens"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Implicite = sous-entendu."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les deux-points",
          "stepTheme": "Les deux-points",
          "stepBadge": "Les deux-points",
          "paragraphText": "Les deux-points annoncent souvent une cause, une conséquence ou une explication :\n« Il est absent : il est malade. » (cause)",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q3",
            "type": "mcq",
            "prompt": "Quel rapport le deux-points exprime-t-il dans « Il est absent : il est malade » ?",
            "options": [
              "Le but",
              "La cause",
              "L'addition",
              "La comparaison"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On peut dire : « Il est absent car il est malade »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La juxtaposition",
          "stepTheme": "La juxtaposition",
          "stepBadge": "La juxtaposition",
          "paragraphText": "Deux propositions séparées par une virgule ou un point-virgule peuvent cacher un lien logique :\n« Il pleuvait ; nous sommes restés à la maison. » (conséquence)",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q4",
            "type": "mcq",
            "prompt": "Quel connecteur peut-on ajouter dans « Il pleuvait ; nous sommes restés à la maison » sans changer le sens ?",
            "options": [
              "pourtant",
              "bien que",
              "donc",
              "afin que"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il pleuvait, donc nous sommes restés : c'est une conséquence."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les paragraphes",
          "stepTheme": "Les paragraphes",
          "stepBadge": "Les paragraphes",
          "paragraphText": "La disposition du texte révèle l'organisation de l'argumentation : chaque paragraphe développe souvent un argument.\nDans « La télévision », chaque paragraphe présente un avantage.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q5",
            "type": "mcq",
            "prompt": "Que révèle souvent un changement de paragraphe dans un texte argumentatif ?",
            "options": [
              "Une faute d'orthographe de l'auteur",
              "La fin obligatoire du texte",
              "Un changement de langue",
              "Le passage à un nouvel argument"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un paragraphe = une idée ou un argument."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Ajouter le connecteur",
          "stepTheme": "Ajouter le connecteur",
          "stepBadge": "Ajouter le connecteur",
          "paragraphText": "Pour trouver un lien implicite, essaie d'ajouter un connecteur.\nS'il convient sans changer le sens, tu as trouvé le rapport logique.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q6",
            "type": "mcq",
            "prompt": "Comment identifier un lien logique implicite ?",
            "options": [
              "En comptant les mots de la phrase",
              "En cherchant le verbe à l'infinitif",
              "En essayant d'ajouter le connecteur qui manque",
              "En soulignant tous les adjectifs"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On rend explicite ce qui était sous-entendu."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Même ponctuation, liens différents",
          "stepTheme": "Même ponctuation, liens différents",
          "stepBadge": "Même ponctuation, liens différents",
          "paragraphText": "Le deux-points n'exprime pas toujours le même rapport :\n• « Il est absent : il est malade. » (cause)\n• « Il a plu : la route est glissante. » (conséquence)\nC'est le sens qui décide.",
          "exercise": {
            "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q7",
            "type": "mcq",
            "prompt": "Dans « Il a beaucoup plu : la route est glissante », quel rapport exprime le deux-points ?",
            "options": [
              "La cause",
              "L'opposition",
              "Le but",
              "La conséquence"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La route glissante est le résultat de la pluie."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q1",
          "type": "mcq",
          "prompt": "Quand un lien logique est-il explicite ?",
          "options": [
            "Quand un connecteur l'exprime clairement",
            "Quand le lecteur doit le deviner",
            "Quand la phrase n'a pas de verbe",
            "Quand le texte est un poème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Explicite = dit clairement."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q2",
          "type": "mcq",
          "prompt": "Que signifie « lien logique implicite » ?",
          "options": [
            "Un lien non écrit, deviné grâce au contexte",
            "Un lien exprimé par « parce que »",
            "Un lien toujours placé en début de texte",
            "Un lien qui n'a aucun sens"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Implicite = sous-entendu."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q3",
          "type": "mcq",
          "prompt": "Quel rapport le deux-points exprime-t-il dans « Il est absent : il est malade » ?",
          "options": [
            "Le but",
            "La cause",
            "L'addition",
            "La comparaison"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On peut dire : « Il est absent car il est malade »."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q4",
          "type": "mcq",
          "prompt": "Quel connecteur peut-on ajouter dans « Il pleuvait ; nous sommes restés à la maison » sans changer le sens ?",
          "options": [
            "pourtant",
            "bien que",
            "donc",
            "afin que"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il pleuvait, donc nous sommes restés : c'est une conséquence."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q5",
          "type": "mcq",
          "prompt": "Que révèle souvent un changement de paragraphe dans un texte argumentatif ?",
          "options": [
            "Une faute d'orthographe de l'auteur",
            "La fin obligatoire du texte",
            "Un changement de langue",
            "Le passage à un nouvel argument"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un paragraphe = une idée ou un argument."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q6",
          "type": "mcq",
          "prompt": "Comment identifier un lien logique implicite ?",
          "options": [
            "En comptant les mots de la phrase",
            "En cherchant le verbe à l'infinitif",
            "En essayant d'ajouter le connecteur qui manque",
            "En soulignant tous les adjectifs"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On rend explicite ce qui était sous-entendu."
        },
        {
          "id": "seconde_a_francais_pl_l02_connecteurs_logiques_p06_q7",
          "type": "mcq",
          "prompt": "Dans « Il a beaucoup plu : la route est glissante », quel rapport exprime le deux-points ?",
          "options": [
            "La cause",
            "L'opposition",
            "Le but",
            "La conséquence"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La route glissante est le résultat de la pluie."
        }
      ]
    }
  ]
};
