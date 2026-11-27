import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « La conclusion du commentaire de texte philosophique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3722
export const PHILO_1ERE_L03_CONCLUSION_COMMENTAIRE: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l03_conclusion_commentaire",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 3,
  "title": "Leçon 3 : La conclusion du commentaire de texte philosophique",
  "summary": "La leçon apprend à rédiger la conclusion du commentaire de texte philosophique : faire le bilan de la discussion, puis prendre une position personnelle sur l’intérêt du texte.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3722",
  "points": [
    {
      "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01",
      "order": 1,
      "title": "Définir la conclusion du commentaire",
      "summary": "Comprendre que la conclusion est la dernière partie du devoir, consacrée à une prise de position.",
      "conceptExplanation": "La conclusion est la dernière partie du devoir. Elle consiste en une prise de position par rapport à l’intérêt du texte.\nCette prise de position doit être précédée du bilan du débat engagé au niveau de la critique externe.\nDans la situation d’apprentissage, les élèves de la Première A1 du Lycée Moderne de Man, après la rédaction de l’introduction du commentaire de texte philosophique, sont informés qu’ils auront à rédiger une conclusion et recherchent ses éléments constitutifs, la manière de les agencer et de la construire.\nL’activité d’application sur les définitions retient que la conclusion est l’étape finale du commentaire de texte qui fait le bilan du débat engagé et propose une solution personnelle à celui-ci.",
      "keyRule": "Dernière partie du devoir : bilan d’abord, prise de position ensuite, jamais l’inverse.",
      "formulas": [],
      "workedExample": {
        "title": "Choisir la bonne définition de la conclusion",
        "statement": "Parmi les propositions de l’activité d’application, laquelle définit correctement la conclusion du commentaire de texte philosophique ?",
        "methodSteps": [
          "Écarter la proposition qui la présente comme la dernière étape de la méthode de lecture consistant seulement à prendre une position personnelle, sans bilan.",
          "Écarter la proposition qui en fait l’étape qui pose le problème du texte et en donne la solution : c’est confondre avec le travail sur la problématique.",
          "Retenir la proposition qui en fait l’étape finale du commentaire faisant le bilan du débat engagé et proposant une solution personnelle."
        ],
        "conclusion": "La conclusion fait le bilan du débat et propose une solution personnelle."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dernière partie du devoir",
          "stepTheme": "La dernière partie du devoir",
          "stepBadge": "La dernière partie du devoir",
          "paragraphText": "• Conclusion du commentaire : dernière partie du devoir.\nElle consiste en une prise de position par rapport à l’intérêt du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q1",
            "type": "mcq",
            "prompt": "La conclusion du commentaire de texte philosophique est :",
            "options": [
              "La première partie du devoir",
              "La dernière partie du devoir",
              "L’explication littérale du texte",
              "La grille de lecture"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition d’ouverture de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une prise de position précédée d’un bilan",
          "stepTheme": "Une prise de position précédée d’un bilan",
          "stepBadge": "Une prise de position précédée d’un bilan",
          "paragraphText": "La prise de position par rapport à l’intérêt du texte doit être précédée du bilan du débat engagé au niveau de la critique externe.\nL’ordre est donc imposé : bilan, puis position personnelle.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q2",
            "type": "mcq",
            "prompt": "La prise de position de la conclusion doit être précédée par :",
            "options": [
              "L’annonce du thème",
              "La définition des mots difficiles",
              "Le bilan du débat engagé au niveau de la critique externe",
              "La présentation de l’auteur"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le bilan du débat de la critique externe précède la prise de position."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Bilan et solution personnelle",
          "stepTheme": "Bilan et solution personnelle",
          "stepBadge": "Bilan et solution personnelle",
          "paragraphText": "Selon l’activité d’application, la conclusion est l’étape finale du commentaire de texte.\nElle fait le bilan du débat engagé et propose une solution personnelle à celui-ci.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q3",
            "type": "mcq",
            "prompt": "Selon la définition retenue dans l’activité, la conclusion :",
            "options": [
              "Pose le problème et donne sa solution immédiate",
              "Présente le texte et sa structure",
              "Définit les mots essentiels",
              "Fait le bilan du débat engagé et propose une solution personnelle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Bilan du débat et solution personnelle : les deux volets de la définition retenue."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Prendre position sans bilan",
          "stepTheme": "Prendre position sans bilan",
          "stepBadge": "Prendre position sans bilan",
          "paragraphText": "Piège : donner directement son opinion sans faire d’abord le bilan du débat engagé dans la critique externe.\nLa leçon exige que la prise de position soit précédée de ce bilan.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q4",
            "type": "mcq",
            "prompt": "Quelle rédaction de conclusion est fautive ?",
            "options": [
              "Une prise de position donnée sans aucun bilan préalable du débat",
              "Un bilan suivi d’une position personnelle",
              "Une conclusion placée à la fin du devoir",
              "Une conclusion portant sur l’intérêt du texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans bilan préalable, la conclusion ne respecte pas la construction de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La situation du Lycée Moderne de Man",
          "stepTheme": "La situation du Lycée Moderne de Man",
          "stepBadge": "La situation du Lycée Moderne de Man",
          "paragraphText": "Exemple : les élèves de Première A1 du Lycée Moderne de Man, après la rédaction de l’introduction.\nIls recherchent les éléments constitutifs de la conclusion, la manière de les agencer et de la construire.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q5",
            "type": "mcq",
            "prompt": "Dans la situation d’apprentissage, les élèves recherchent :",
            "options": [
              "Les connecteurs logiques du texte",
              "Les éléments constitutifs de la conclusion, leur agencement et sa construction",
              "La problématisation d’un sujet",
              "Les mouvements d’un texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Éléments constitutifs, agencement et construction : comme pour l’introduction dans la leçon précédente."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q1",
          "type": "mcq",
          "prompt": "La conclusion du commentaire de texte philosophique est :",
          "options": [
            "La première partie du devoir",
            "La dernière partie du devoir",
            "L’explication littérale du texte",
            "La grille de lecture"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition d’ouverture de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q2",
          "type": "mcq",
          "prompt": "La prise de position de la conclusion doit être précédée par :",
          "options": [
            "L’annonce du thème",
            "La définition des mots difficiles",
            "Le bilan du débat engagé au niveau de la critique externe",
            "La présentation de l’auteur"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le bilan du débat de la critique externe précède la prise de position."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q3",
          "type": "mcq",
          "prompt": "Selon la définition retenue dans l’activité, la conclusion :",
          "options": [
            "Pose le problème et donne sa solution immédiate",
            "Présente le texte et sa structure",
            "Définit les mots essentiels",
            "Fait le bilan du débat engagé et propose une solution personnelle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Bilan du débat et solution personnelle : les deux volets de la définition retenue."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q4",
          "type": "mcq",
          "prompt": "Quelle rédaction de conclusion est fautive ?",
          "options": [
            "Une prise de position donnée sans aucun bilan préalable du débat",
            "Un bilan suivi d’une position personnelle",
            "Une conclusion placée à la fin du devoir",
            "Une conclusion portant sur l’intérêt du texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans bilan préalable, la conclusion ne respecte pas la construction de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q5",
          "type": "mcq",
          "prompt": "Dans la situation d’apprentissage, les élèves recherchent :",
          "options": [
            "Les connecteurs logiques du texte",
            "Les éléments constitutifs de la conclusion, leur agencement et sa construction",
            "La problématisation d’un sujet",
            "Les mouvements d’un texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Éléments constitutifs, agencement et construction : comme pour l’introduction dans la leçon précédente."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02",
      "order": 2,
      "title": "Les éléments constitutifs de la conclusion",
      "summary": "Connaître les deux éléments essentiels : bilan de la discussion et prise de position personnelle.",
      "conceptExplanation": "Les éléments essentiels de la conclusion sont : le bilan de la discussion et la prise de position personnelle.\nL’activité d’application demande d’écrire Vrai devant les éléments permettant de rédiger la conclusion et Faux devant ceux qui ne correspondent pas. Son corrigé juge Vrai la proposition « bilan de la discussion, position personnelle sur le débat ».\nLe même corrigé juge Faux les propositions « thèse, bilan, enjeu », « rappel du thème et du problème, thèse, bilan » et « bilan, ouverture du débat ».",
      "keyRule": "Deux éléments essentiels seulement : bilan de la discussion et prise de position personnelle.",
      "formulas": [],
      "workedExample": {
        "title": "Appliquer le corrigé Vrai ou Faux de l’activité",
        "statement": "Parmi quatre propositions, laquelle le corrigé de l’activité juge-t-il vraie pour rédiger la conclusion ?",
        "methodSteps": [
          "Thèse, bilan, enjeu : Faux.",
          "Bilan de la discussion, position personnelle sur le débat : Vrai.",
          "Rappel du thème et du problème, thèse, bilan : Faux.",
          "Bilan, ouverture du débat : Faux."
        ],
        "conclusion": "Une seule proposition est vraie : bilan de la discussion et position personnelle sur le débat."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux éléments essentiels",
          "stepTheme": "Deux éléments essentiels",
          "stepBadge": "Deux éléments essentiels",
          "paragraphText": "• Éléments essentiels de la conclusion : le bilan de la discussion et la prise de position personnelle.\nAucun autre élément n’est énuméré dans cette partie de la leçon.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q1",
            "type": "mcq",
            "prompt": "Les éléments essentiels de la conclusion sont :",
            "options": [
              "Le bilan de la discussion et la prise de position personnelle",
              "Le thème, le problème et la thèse",
              "L’intention, l’enjeu et l’antithèse",
              "Les idées principales et secondaires"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’énumération de la première partie de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le corrigé Vrai de l’activité",
          "stepTheme": "Le corrigé Vrai de l’activité",
          "stepBadge": "Le corrigé Vrai de l’activité",
          "paragraphText": "Corrigé de l’activité d’application : la proposition « bilan de la discussion, position personnelle sur le débat » est jugée Vrai.\nC’est la seule proposition jugée vraie parmi les quatre proposées.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q2",
            "type": "mcq",
            "prompt": "La proposition jugée Vrai dans le corrigé est :",
            "options": [
              "Thèse, bilan, enjeu",
              "Bilan de la discussion, position personnelle sur le débat",
              "Rappel du thème et du problème, thèse, bilan",
              "Bilan, ouverture du débat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Bilan de la discussion et position personnelle : la seule combinaison vraie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Ajouter l’ouverture du débat",
          "stepTheme": "Ajouter l’ouverture du débat",
          "stepBadge": "Ajouter l’ouverture du débat",
          "paragraphText": "Piège du corrigé : la proposition « bilan, ouverture du débat » est jugée Faux.\nL’ouverture du débat ne remplace pas la prise de position personnelle parmi les éléments essentiels énumérés.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q3",
            "type": "mcq",
            "prompt": "La proposition « bilan, ouverture du débat » est jugée dans le corrigé :",
            "options": [
              "Vrai",
              "Vrai uniquement pour Epictète",
              "Faux",
              "Sans réponse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé écrit Faux devant cette proposition."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Mélanger avec l’introduction",
          "stepTheme": "Mélanger avec l’introduction",
          "stepBadge": "Mélanger avec l’introduction",
          "paragraphText": "Autre piège du corrigé : « rappel du thème et du problème, thèse, bilan » est jugé Faux.\nLe rappel du thème, du problème et de la thèse relève du travail de présentation du texte, non des éléments essentiels de la conclusion.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q4",
            "type": "mcq",
            "prompt": "La proposition « rappel du thème et du problème, thèse, bilan » est jugée :",
            "options": [
              "Vrai",
              "Partiellement vraie",
              "Vrai pour la conclusion seulement",
              "Faux"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé écrit Faux : ce mélange ne donne pas les éléments de la conclusion."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Thèse, bilan, enjeu : Faux",
          "stepTheme": "Thèse, bilan, enjeu : Faux",
          "stepBadge": "Thèse, bilan, enjeu : Faux",
          "paragraphText": "Exemple du corrigé : la proposition « thèse, bilan, enjeu » est jugée Faux.\nMalgré la présence du mot bilan, l’ajout de la thèse et de l’enjeu rend la proposition fausse.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q5",
            "type": "mcq",
            "prompt": "Pourquoi « thèse, bilan, enjeu » est-elle jugée Faux ?",
            "options": [
              "Parce qu’elle contient le mot bilan",
              "Parce qu’elle ajoute la thèse et l’enjeu aux éléments essentiels, qui sont le bilan et la prise de position",
              "Parce qu’elle parle de la discussion",
              "Parce qu’elle est trop courte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les éléments essentiels sont le bilan de la discussion et la prise de position personnelle, non la thèse et l’enjeu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q1",
          "type": "mcq",
          "prompt": "Les éléments essentiels de la conclusion sont :",
          "options": [
            "Le bilan de la discussion et la prise de position personnelle",
            "Le thème, le problème et la thèse",
            "L’intention, l’enjeu et l’antithèse",
            "Les idées principales et secondaires"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’énumération de la première partie de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q2",
          "type": "mcq",
          "prompt": "La proposition jugée Vrai dans le corrigé est :",
          "options": [
            "Thèse, bilan, enjeu",
            "Bilan de la discussion, position personnelle sur le débat",
            "Rappel du thème et du problème, thèse, bilan",
            "Bilan, ouverture du débat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Bilan de la discussion et position personnelle : la seule combinaison vraie."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q3",
          "type": "mcq",
          "prompt": "La proposition « bilan, ouverture du débat » est jugée dans le corrigé :",
          "options": [
            "Vrai",
            "Vrai uniquement pour Epictète",
            "Faux",
            "Sans réponse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé écrit Faux devant cette proposition."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q4",
          "type": "mcq",
          "prompt": "La proposition « rappel du thème et du problème, thèse, bilan » est jugée :",
          "options": [
            "Vrai",
            "Partiellement vraie",
            "Vrai pour la conclusion seulement",
            "Faux"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé écrit Faux : ce mélange ne donne pas les éléments de la conclusion."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q5",
          "type": "mcq",
          "prompt": "Pourquoi « thèse, bilan, enjeu » est-elle jugée Faux ?",
          "options": [
            "Parce qu’elle contient le mot bilan",
            "Parce qu’elle ajoute la thèse et l’enjeu aux éléments essentiels, qui sont le bilan et la prise de position",
            "Parce qu’elle parle de la discussion",
            "Parce qu’elle est trop courte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les éléments essentiels sont le bilan de la discussion et la prise de position personnelle, non la thèse et l’enjeu."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03",
      "order": 3,
      "title": "Construire la conclusion",
      "summary": "Agencer bilan et prise de position, en ouvrant par une expression qui annonce la fin du travail.",
      "conceptExplanation": "La construction de la conclusion consiste à agencer de manière cohérente les éléments constitutifs que sont le bilan de la discussion et la prise de position personnelle.\nIl est conseillé de la commencer par des expressions telles que : en définitive, au terme de notre travail, en somme, pour indiquer au lecteur que nous sommes à la fin de notre travail.\nLe corrigé de la situation d’évaluation sur Epictète et le corrigé sur Pascal commencent tous deux leur conclusion rédigée par « En définitive ».",
      "keyRule": "Commence par « en définitive » ou une expression équivalente, puis enchaîne bilan et position personnelle.",
      "formulas": [],
      "workedExample": {
        "title": "Construire la conclusion du texte de Pascal (corrigé)",
        "statement": "À partir du bilan et de la position personnelle donnés dans le corrigé, reconstitue la conclusion du texte de Pascal.",
        "methodSteps": [
          "Ouverture : commencer par « En définitive », expression qui annonce la fin du travail.",
          "Bilan de la réflexion : la pensée apparaît comme le seul trait distinctif de l’homme, mais certaines lacunes de celle-ci ont conduit à l’avènement de la psychanalyse freudienne qui infirme cette position.",
          "Position personnelle : même si la conscience définit l’homme, il est déterminé par l’inconscient, ce qui fait de lui un être pluridimensionnel."
        ],
        "conclusion": "La conclusion corrigée enchaîne ouverture, bilan et position personnelle en un seul texte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un agencement cohérent",
          "stepTheme": "Un agencement cohérent",
          "stepBadge": "Un agencement cohérent",
          "paragraphText": "• Construction de la conclusion : agencer de manière cohérente le bilan de la discussion et la prise de position personnelle.\nC’est le même principe d’agencement cohérent que pour l’introduction.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q1",
            "type": "mcq",
            "prompt": "Construire la conclusion consiste à :",
            "options": [
              "Agencer de manière cohérente le bilan de la discussion et la prise de position personnelle",
              "Rappeler le thème et la thèse du texte",
              "Présenter les mouvements du texte",
              "Définir les termes essentiels"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Agencement cohérent des deux éléments constitutifs : définition de la construction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les expressions d’ouverture conseillées",
          "stepTheme": "Les expressions d’ouverture conseillées",
          "stepBadge": "Les expressions d’ouverture conseillées",
          "paragraphText": "Méthode : il est conseillé de commencer la conclusion par des expressions telles que « en définitive », « au terme de notre travail », « en somme ».\nElles indiquent au lecteur que nous sommes à la fin de notre travail.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q2",
            "type": "mcq",
            "prompt": "Il est conseillé de commencer la conclusion par une expression comme :",
            "options": [
              "Il était une fois",
              "En définitive",
              "D’abord",
              "Par exemple"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En définitive, au terme de notre travail, en somme : les expressions conseillées par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Signaler la fin du travail",
          "stepTheme": "Signaler la fin du travail",
          "stepBadge": "Signaler la fin du travail",
          "paragraphText": "Les expressions d’ouverture ont une fonction précise : indiquer au lecteur que nous sommes à la fin de notre travail.\nElles ne sont pas de simples ornements.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q3",
            "type": "mcq",
            "prompt": "Les expressions comme « en somme » servent à :",
            "options": [
              "Poser le problème du texte",
              "Annoncer les mouvements du texte",
              "Indiquer au lecteur que nous sommes à la fin de notre travail",
              "Introduire un exemple"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la fonction indiquée par la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "« En définitive » chez Epictète et Pascal",
          "stepTheme": "« En définitive » chez Epictète et Pascal",
          "stepBadge": "« En définitive » chez Epictète et Pascal",
          "paragraphText": "Exemple : les deux conclusions rédigées des corrigés commencent par « En définitive ».\nCelle sur Epictète comme celle sur Pascal appliquent le conseil de la leçon.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q4",
            "type": "mcq",
            "prompt": "Les conclusions corrigées sur Epictète et sur Pascal commencent par :",
            "options": [
              "Premièrement",
              "Il est bon de redire",
              "À la question",
              "En définitive"
            ],
            "correctAnswerIndex": 3,
            "explanation": "« En définitive » ouvre les deux conclusions rédigées des corrigés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Commencer sans signaler la fin",
          "stepTheme": "Commencer sans signaler la fin",
          "stepBadge": "Commencer sans signaler la fin",
          "paragraphText": "Piège : enchaîner la conclusion au développement sans expression qui signale la fin du travail.\nLe lecteur doit percevoir que le devoir se termine : c’est le rôle des expressions conseillées.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q5",
            "type": "mcq",
            "prompt": "Quel début de conclusion ne suit pas le conseil de la leçon ?",
            "options": [
              "Commencer directement par un nouvel argument, sans expression annonçant la fin",
              "Commencer par « au terme de notre travail »",
              "Commencer par « en somme »",
              "Commencer par « en définitive »"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans expression de fin, le conseil de construction n’est pas appliqué."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q1",
          "type": "mcq",
          "prompt": "Construire la conclusion consiste à :",
          "options": [
            "Agencer de manière cohérente le bilan de la discussion et la prise de position personnelle",
            "Rappeler le thème et la thèse du texte",
            "Présenter les mouvements du texte",
            "Définir les termes essentiels"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Agencement cohérent des deux éléments constitutifs : définition de la construction."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q2",
          "type": "mcq",
          "prompt": "Il est conseillé de commencer la conclusion par une expression comme :",
          "options": [
            "Il était une fois",
            "En définitive",
            "D’abord",
            "Par exemple"
          ],
          "correctAnswerIndex": 1,
          "explanation": "En définitive, au terme de notre travail, en somme : les expressions conseillées par la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q3",
          "type": "mcq",
          "prompt": "Les expressions comme « en somme » servent à :",
          "options": [
            "Poser le problème du texte",
            "Annoncer les mouvements du texte",
            "Indiquer au lecteur que nous sommes à la fin de notre travail",
            "Introduire un exemple"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la fonction indiquée par la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q4",
          "type": "mcq",
          "prompt": "Les conclusions corrigées sur Epictète et sur Pascal commencent par :",
          "options": [
            "Premièrement",
            "Il est bon de redire",
            "À la question",
            "En définitive"
          ],
          "correctAnswerIndex": 3,
          "explanation": "« En définitive » ouvre les deux conclusions rédigées des corrigés."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q5",
          "type": "mcq",
          "prompt": "Quel début de conclusion ne suit pas le conseil de la leçon ?",
          "options": [
            "Commencer directement par un nouvel argument, sans expression annonçant la fin",
            "Commencer par « au terme de notre travail »",
            "Commencer par « en somme »",
            "Commencer par « en définitive »"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans expression de fin, le conseil de construction n’est pas appliqué."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04",
      "order": 4,
      "title": "Applications : conclusions d’Epictète et de Pascal",
      "summary": "Lire les conclusions rédigées des corrigés sur Epictète et sur Pascal.",
      "conceptExplanation": "Conclusion corrigée du texte d’Epictète : en définitive, si pour Epictète et certains moralistes de l’Antiquité le philosophe et son disciple doivent observer la propreté et la décence en vue d’améliorer leur statut social, pour d’autres penseurs tels que les cyniques, la beauté corporelle est inessentielle pour le philosophe. Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l’esprit.\nPour le texte de Pascal, le corrigé dégage d’abord les éléments : bilan de la réflexion, la pensée apparaît comme le seul trait distinctif de l’homme, mais certaines lacunes de celle-ci ont conduit à l’avènement de la psychanalyse freudienne qui infirme cette position ; position personnelle, l’homme se définit par la conscience, mais il est déterminé par l’inconscient, il est un être pluridimensionnel.\nLa conclusion rédigée de Pascal retient que même si la conscience définit l’homme, il est déterminé par l’inconscient, ce qui fait de lui un être pluridimensionnel.",
      "keyRule": "Dans chaque corrigé, repère le bilan qui résume le débat, puis la phrase de position personnelle.",
      "formulas": [],
      "workedExample": {
        "title": "Relire la conclusion corrigée du texte d’Epictète",
        "statement": "Reconstitue la conclusion corrigée du texte d’Epictète en distinguant bilan et position personnelle.",
        "methodSteps": [
          "Bilan, premier versant : pour Epictète et certains moralistes de l’Antiquité, le philosophe et son disciple doivent observer la propreté et la décence en vue d’améliorer leur statut social.",
          "Bilan, second versant : pour d’autres penseurs tels que les cyniques, la beauté corporelle est inessentielle pour le philosophe.",
          "Position personnelle : au demeurant, à notre sens, la propreté du corps va de pair avec celle de l’esprit."
        ],
        "conclusion": "Le bilan oppose deux positions du débat, puis la position personnelle tranche en les reliant."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le bilan chez Epictète : deux versants",
          "stepTheme": "Le bilan chez Epictète : deux versants",
          "stepBadge": "Le bilan chez Epictète : deux versants",
          "paragraphText": "Bilan du corrigé sur Epictète.\n• Pour Epictète et certains moralistes de l’Antiquité : observer la propreté et la décence pour améliorer le statut social\n• Pour les cyniques : la beauté corporelle est inessentielle pour le philosophe",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q1",
            "type": "mcq",
            "prompt": "Dans le bilan du corrigé, les cyniques soutiennent que :",
            "options": [
              "La propreté améliore le statut social",
              "La beauté corporelle est inessentielle pour le philosophe",
              "La propreté du corps va de pair avec celle de l’esprit",
              "Le disciple doit être bien peigné"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le second versant du bilan, opposé à la position d’Epictète."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La position personnelle chez Epictète",
          "stepTheme": "La position personnelle chez Epictète",
          "stepBadge": "La position personnelle chez Epictète",
          "paragraphText": "Position personnelle du corrigé sur Epictète : « Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l’esprit. »\nElle vient après le bilan des deux positions du débat.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q2",
            "type": "mcq",
            "prompt": "La position personnelle du corrigé sur Epictète est :",
            "options": [
              "Le philosophe doit négliger son apparence",
              "La beauté corporelle est inessentielle",
              "La propreté du corps va de pair avec celle de l’esprit",
              "Le philosophe doit améliorer son statut social"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« À notre sens » signale la prise de position personnelle qui suit le bilan."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les éléments à dégager chez Pascal",
          "stepTheme": "Les éléments à dégager chez Pascal",
          "stepBadge": "Les éléments à dégager chez Pascal",
          "paragraphText": "Situation d’évaluation sur Pascal : il faut d’abord dégager les éléments de la problématique destinés à la rédaction de la conclusion.\nLe corrigé retient le bilan de la réflexion et la position personnelle.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q3",
            "type": "mcq",
            "prompt": "Pour le texte de Pascal, le corrigé dégage avant la rédaction :",
            "options": [
              "Le thème et la structure logique",
              "L’intention et l’enjeu",
              "Les connecteurs logiques",
              "Le bilan de la réflexion et la position personnelle"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les deux éléments destinés à la conclusion, dégagés dans le corrigé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le bilan chez Pascal et la psychanalyse",
          "stepTheme": "Le bilan chez Pascal et la psychanalyse",
          "stepBadge": "Le bilan chez Pascal et la psychanalyse",
          "paragraphText": "Bilan du corrigé sur Pascal : la pensée apparaît comme le seul trait distinctif de l’homme.\nMais certaines lacunes de celle-ci ont conduit à l’avènement de la psychanalyse freudienne, qui infirme cette position.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q4",
            "type": "mcq",
            "prompt": "Dans le bilan sur Pascal, la position de la pensée comme seul trait distinctif est infirmée par :",
            "options": [
              "L’avènement de la psychanalyse freudienne",
              "Les moralistes de l’Antiquité",
              "Les cyniques",
              "La définition de la conscience"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé rattache l’infirmation aux lacunes de la pensée et à la psychanalyse freudienne."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un être pluridimensionnel",
          "stepTheme": "Un être pluridimensionnel",
          "stepBadge": "Un être pluridimensionnel",
          "paragraphText": "Position personnelle du corrigé sur Pascal : l’homme se définit par la conscience, mais il est déterminé par l’inconscient.\nConclusion rédigée : il est un être pluridimensionnel.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q5",
            "type": "mcq",
            "prompt": "La position personnelle du corrigé sur Pascal conclut que l’homme est :",
            "options": [
              "Un roseau faible sans pensée",
              "Un être pluridimensionnel, défini par la conscience mais déterminé par l’inconscient",
              "Un être défini uniquement par son corps",
              "Un philosophe qui néglige sa tenue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Conscience et inconscient : l’homme pluridimensionnel du corrigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre bilan et position chez Pascal",
          "stepTheme": "Confondre bilan et position chez Pascal",
          "stepBadge": "Confondre bilan et position chez Pascal",
          "paragraphText": "Piège : présenter la psychanalyse freudienne comme l’opinion personnelle du candidat.\nDans le corrigé, elle relève du bilan de la réflexion ; la position personnelle porte sur la conscience, l’inconscient et l’être pluridimensionnel.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q6",
            "type": "mcq",
            "prompt": "Dans le corrigé sur Pascal, la mention de la psychanalyse freudienne relève :",
            "options": [
              "De la position personnelle",
              "De l’ouverture de l’introduction",
              "Du bilan de la réflexion",
              "De la structure logique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle fait partie du bilan, avant la position personnelle sur conscience et inconscient."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q1",
          "type": "mcq",
          "prompt": "Dans le bilan du corrigé, les cyniques soutiennent que :",
          "options": [
            "La propreté améliore le statut social",
            "La beauté corporelle est inessentielle pour le philosophe",
            "La propreté du corps va de pair avec celle de l’esprit",
            "Le disciple doit être bien peigné"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le second versant du bilan, opposé à la position d’Epictète."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q2",
          "type": "mcq",
          "prompt": "La position personnelle du corrigé sur Epictète est :",
          "options": [
            "Le philosophe doit négliger son apparence",
            "La beauté corporelle est inessentielle",
            "La propreté du corps va de pair avec celle de l’esprit",
            "Le philosophe doit améliorer son statut social"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« À notre sens » signale la prise de position personnelle qui suit le bilan."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q3",
          "type": "mcq",
          "prompt": "Pour le texte de Pascal, le corrigé dégage avant la rédaction :",
          "options": [
            "Le thème et la structure logique",
            "L’intention et l’enjeu",
            "Les connecteurs logiques",
            "Le bilan de la réflexion et la position personnelle"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les deux éléments destinés à la conclusion, dégagés dans le corrigé."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q4",
          "type": "mcq",
          "prompt": "Dans le bilan sur Pascal, la position de la pensée comme seul trait distinctif est infirmée par :",
          "options": [
            "L’avènement de la psychanalyse freudienne",
            "Les moralistes de l’Antiquité",
            "Les cyniques",
            "La définition de la conscience"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé rattache l’infirmation aux lacunes de la pensée et à la psychanalyse freudienne."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q5",
          "type": "mcq",
          "prompt": "La position personnelle du corrigé sur Pascal conclut que l’homme est :",
          "options": [
            "Un roseau faible sans pensée",
            "Un être pluridimensionnel, défini par la conscience mais déterminé par l’inconscient",
            "Un être défini uniquement par son corps",
            "Un philosophe qui néglige sa tenue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Conscience et inconscient : l’homme pluridimensionnel du corrigé."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p04_q6",
          "type": "mcq",
          "prompt": "Dans le corrigé sur Pascal, la mention de la psychanalyse freudienne relève :",
          "options": [
            "De la position personnelle",
            "De l’ouverture de l’introduction",
            "Du bilan de la réflexion",
            "De la structure logique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle fait partie du bilan, avant la position personnelle sur conscience et inconscient."
        }
      ]
    }
  ]
};
