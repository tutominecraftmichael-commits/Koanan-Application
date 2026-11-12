import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo 1ère_Leç 3_La conclusion du commentaire de texte philosophique.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_1RE_L03_CONCLUSION_COMMENTAIRE: CurriculumChapter = {
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
  "summary": "Bilan de la discussion et prise de position personnelle, construction de la conclusion, modèles rédigés sur Épictète et Pascal, entraînement sur Hountondji.",
  "officialVolumeHours": 3,
  "contentVersion": 2,
  "source": "Philo 1ère_Leç 3_La conclusion du commentaire de texte philosophique.pdf",
  "points": [
    {
      "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01",
      "order": 1,
      "title": "Les éléments de la conclusion",
      "summary": "La conclusion fait le bilan de la discussion, puis donne une prise de position personnelle.",
      "conceptExplanation": "Définition : la conclusion est la DERNIÈRE partie du devoir. Elle consiste en une prise de position par rapport à l'intérêt du texte. Cette prise de position doit être précédée du bilan du débat engagé dans la critique externe.\n\nÉléments constitutifs de la conclusion :\n1. le bilan de la discussion ;\n2. la prise de position personnelle.\n\nCe qui n'entre PAS dans la conclusion : le rappel du thème et du problème, la thèse seule, l'enjeu, ou une simple « ouverture » sans prise de position.\n\nActivité (corrigé officiel) :\n- « Thèse, bilan, enjeu » : Faux ;\n- « Bilan de la discussion, position personnelle sur le débat » : Vrai ;\n- « Rappel du thème et du problème, thèse, bilan » : Faux ;\n- « Bilan, ouverture du débat » : Faux.\n\nBonne définition à retenir : la conclusion est l'étape finale du commentaire, qui fait le bilan du débat engagé et propose une solution personnelle à celui-ci.",
      "keyRule": "Conclusion = bilan de la discussion + prise de position personnelle, dans cet ordre.",
      "formulas": [],
      "workedExample": {
        "title": "Vrai ou faux ?",
        "statement": "« Bilan, ouverture du débat » suffit-il pour rédiger la conclusion du commentaire de texte philosophique ?",
        "methodSteps": [
          "La conclusion exige deux éléments : le bilan ET la prise de position personnelle.",
          "Une ouverture ne remplace pas la prise de position."
        ],
        "conclusion": "Faux : il manque la position personnelle sur le débat."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La dernière partie",
          "stepTheme": "La dernière partie",
          "stepBadge": "La dernière partie",
          "paragraphText": "La conclusion est la dernière partie du devoir : une prise de position sur l'intérêt du texte, précédée d'un bilan.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q1",
            "type": "mcq",
            "prompt": "Quelle définition convient à la conclusion du commentaire de texte philosophique ?",
            "options": [
              "L'étape qui pose le problème du texte et en donne la solution",
              "L'étape finale du commentaire, qui fait le bilan du débat engagé et propose une solution personnelle",
              "La première partie, qui annonce le thème",
              "Le résumé du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Bilan du débat + solution personnelle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deux éléments",
          "stepTheme": "Deux éléments",
          "stepBadge": "Deux éléments",
          "paragraphText": "Les éléments de la conclusion sont le bilan de la discussion et la prise de position personnelle.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q2",
            "type": "mcq",
            "prompt": "Quels sont les éléments constitutifs de la conclusion du commentaire de texte philosophique ?",
            "options": [
              "Le thème, le problème et la thèse",
              "L'enjeu et l'intention",
              "Le bilan de la discussion et la prise de position personnelle",
              "La généralité et la structure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le thème, le problème et la thèse servent à l'introduction."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'ordre",
          "stepTheme": "L'ordre",
          "stepBadge": "L'ordre",
          "paragraphText": "La prise de position doit être PRÉCÉDÉE du bilan du débat engagé dans la critique externe.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q3",
            "type": "mcq",
            "prompt": "Dans la conclusion du commentaire de texte philosophique, que place-t-on en premier ?",
            "options": [
              "Le bilan de la discussion",
              "La prise de position personnelle",
              "La thèse de l'auteur",
              "Le thème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On résume d'abord le débat, puis on donne sa position."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le bilan",
          "stepTheme": "Le bilan",
          "stepBadge": "Le bilan",
          "paragraphText": "Le bilan résume le débat engagé dans la critique externe : la position de l'auteur et celle des penseurs qui s'y opposent.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q4",
            "type": "mcq",
            "prompt": "Dans la conclusion d'un commentaire, de quoi le bilan fait-il le résumé ?",
            "options": [
              "De la vie de l'auteur",
              "Des mots difficiles",
              "De la structure du texte",
              "Du débat engagé dans la critique externe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le bilan reprend la confrontation de l'auteur avec d'autres points de vue."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Vrai",
          "stepTheme": "Vrai",
          "stepBadge": "Vrai",
          "paragraphText": "« Bilan de la discussion, position personnelle sur le débat » : c'est exactement ce qu'il faut.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces listes permet de rédiger la conclusion du commentaire de texte philosophique ?",
            "options": [
              "Thèse, bilan, enjeu",
              "Rappel du thème et du problème, thèse, bilan",
              "Bilan de la discussion, position personnelle sur le débat",
              "Bilan, ouverture du débat"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Seule cette liste contient les deux éléments attendus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ouverture ne suffit pas",
          "stepTheme": "L'ouverture ne suffit pas",
          "stepBadge": "L'ouverture ne suffit pas",
          "paragraphText": "« Bilan, ouverture du débat » est faux : sans prise de position personnelle, la conclusion est incomplète.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi « Bilan, ouverture du débat » ne suffit-il pas pour la conclusion du commentaire de texte philosophique ?",
            "options": [
              "Parce qu'il manque la prise de position personnelle",
              "Parce que le bilan est interdit",
              "Parce qu'il faut rappeler le thème",
              "Il suffit"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La conclusion consiste justement à prendre position."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas refaire l'introduction",
          "stepTheme": "Ne pas refaire l'introduction",
          "stepBadge": "Ne pas refaire l'introduction",
          "paragraphText": "Rappeler le thème, le problème et la thèse, c'est refaire l'introduction, pas conclure.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q7",
            "type": "mcq",
            "prompt": "« Rappel du thème et du problème, thèse, bilan » : pourquoi cette liste est-elle fausse pour la conclusion du commentaire ?",
            "options": [
              "Parce qu'elle est trop courte",
              "Parce qu'elle reprend surtout l'introduction et oublie la prise de position",
              "Parce que le bilan ne sert à rien",
              "Elle est juste"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le thème, le problème et la thèse appartiennent à l'introduction."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q1",
          "type": "mcq",
          "prompt": "Quelle définition convient à la conclusion du commentaire de texte philosophique ?",
          "options": [
            "L'étape qui pose le problème du texte et en donne la solution",
            "L'étape finale du commentaire, qui fait le bilan du débat engagé et propose une solution personnelle",
            "La première partie, qui annonce le thème",
            "Le résumé du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Bilan du débat + solution personnelle."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q2",
          "type": "mcq",
          "prompt": "Quels sont les éléments constitutifs de la conclusion du commentaire de texte philosophique ?",
          "options": [
            "Le thème, le problème et la thèse",
            "L'enjeu et l'intention",
            "Le bilan de la discussion et la prise de position personnelle",
            "La généralité et la structure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le thème, le problème et la thèse servent à l'introduction."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q3",
          "type": "mcq",
          "prompt": "Dans la conclusion du commentaire de texte philosophique, que place-t-on en premier ?",
          "options": [
            "Le bilan de la discussion",
            "La prise de position personnelle",
            "La thèse de l'auteur",
            "Le thème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On résume d'abord le débat, puis on donne sa position."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q4",
          "type": "mcq",
          "prompt": "Dans la conclusion d'un commentaire, de quoi le bilan fait-il le résumé ?",
          "options": [
            "De la vie de l'auteur",
            "Des mots difficiles",
            "De la structure du texte",
            "Du débat engagé dans la critique externe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le bilan reprend la confrontation de l'auteur avec d'autres points de vue."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces listes permet de rédiger la conclusion du commentaire de texte philosophique ?",
          "options": [
            "Thèse, bilan, enjeu",
            "Rappel du thème et du problème, thèse, bilan",
            "Bilan de la discussion, position personnelle sur le débat",
            "Bilan, ouverture du débat"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Seule cette liste contient les deux éléments attendus."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi « Bilan, ouverture du débat » ne suffit-il pas pour la conclusion du commentaire de texte philosophique ?",
          "options": [
            "Parce qu'il manque la prise de position personnelle",
            "Parce que le bilan est interdit",
            "Parce qu'il faut rappeler le thème",
            "Il suffit"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La conclusion consiste justement à prendre position."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p01_q7",
          "type": "mcq",
          "prompt": "« Rappel du thème et du problème, thèse, bilan » : pourquoi cette liste est-elle fausse pour la conclusion du commentaire ?",
          "options": [
            "Parce qu'elle est trop courte",
            "Parce qu'elle reprend surtout l'introduction et oublie la prise de position",
            "Parce que le bilan ne sert à rien",
            "Elle est juste"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le thème, le problème et la thèse appartiennent à l'introduction."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02",
      "order": 2,
      "title": "Construire la conclusion",
      "summary": "Une formule d'ouverture, le bilan, puis la position personnelle.",
      "conceptExplanation": "Construire la conclusion, c'est agencer de manière cohérente le bilan de la discussion et la prise de position personnelle.\n\n1. On commence par une expression qui signale la fin du devoir :\n- « En définitive, … » ;\n- « Au terme de notre travail, … » ;\n- « En somme, … ».\n2. On fait le bilan : on rappelle la position de l'auteur ET celle des penseurs qui s'y opposent (souvent « si pour X…, pour Y… »).\n3. On donne sa position personnelle, nuancée et justifiée : « Au demeurant, à notre sens, … », « C'est pourquoi il convient de retenir que… ».\n\nModèle de phrase :\n« En définitive, si pour [auteur] [thèse], pour [autre penseur] [antithèse]. Au demeurant, à notre sens, [position personnelle nuancée]. »\n\nConseils :\n- la conclusion tient en un seul paragraphe ;\n- on n'y ajoute pas de nouvel argument développé ni de nouvelle citation longue ;\n- la position personnelle doit répondre au débat, pas changer de sujet.",
      "keyRule": "« En définitive / Au terme de notre travail / En somme » + bilan (« si pour…, pour… ») + position (« à notre sens… »).",
      "formulas": [],
      "workedExample": {
        "title": "Assembler la conclusion",
        "statement": "Bilan : pour Pascal, la pensée fait la grandeur de l'homme ; pour Freud, l'homme est déterminé par l'inconscient. Position : l'homme est un être à plusieurs dimensions. Rédige la conclusion.",
        "methodSteps": [
          "Formule d'ouverture : « En définitive, »",
          "Bilan : « si pour Pascal la pensée fait la grandeur de l'homme, la psychanalyse de Freud montre qu'il est aussi déterminé par l'inconscient. »",
          "Position : « C'est pourquoi il convient de retenir que l'homme est un être pluridimensionnel. »"
        ],
        "conclusion": "Une conclusion en un paragraphe : formule, bilan, position."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Signaler la fin",
          "stepTheme": "Signaler la fin",
          "stepBadge": "Signaler la fin",
          "paragraphText": "On commence la conclusion par une expression comme « en définitive », « au terme de notre travail », « en somme ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q1",
            "type": "mcq",
            "prompt": "Quelle expression convient pour commencer la conclusion d'un commentaire de texte philosophique ?",
            "options": [
              "« Tout d'abord, »",
              "« En définitive, »",
              "« Il était une fois »",
              "« Premièrement, »"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« En définitive » indique au lecteur qu'on arrive à la fin du travail."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un seul paragraphe",
          "stepTheme": "Un seul paragraphe",
          "stepBadge": "Un seul paragraphe",
          "paragraphText": "La conclusion est brève et tient en un seul paragraphe, qui enchaîne le bilan et la position.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q2",
            "type": "mcq",
            "prompt": "Comment se présente la conclusion d'un commentaire de texte philosophique ?",
            "options": [
              "En un seul paragraphe, bilan puis position",
              "En trois grandes parties",
              "En une liste à tirets",
              "En reprenant tout le développement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est un paragraphe court et cohérent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le bilan en « si…, pour… »",
          "stepTheme": "Le bilan en « si…, pour… »",
          "stepBadge": "Le bilan en « si…, pour… »",
          "paragraphText": "Le bilan oppose souvent la thèse de l'auteur et celle d'autres penseurs : « si pour Épictète…, pour les cyniques… ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q3",
            "type": "mcq",
            "prompt": "Épictète demande au philosophe d'être propre ; les cyniques jugent la beauté du corps sans importance. Quelle phrase fait le bilan de ce débat ?",
            "options": [
              "Épictète est un philosophe grec.",
              "À notre sens, la propreté est utile.",
              "Si pour Épictète le philosophe doit être propre et décent, pour les cyniques la beauté corporelle est inessentielle.",
              "Le texte a deux mouvements."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le bilan met face à face les deux positions du débat."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La position personnelle",
          "stepTheme": "La position personnelle",
          "stepBadge": "La position personnelle",
          "paragraphText": "La position personnelle se signale par « à notre sens », « il convient de retenir que »… Elle tranche ou nuance le débat.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q4",
            "type": "mcq",
            "prompt": "Après le bilan du débat sur la tenue du philosophe (Épictète contre les cyniques), quelle phrase exprime une position personnelle ?",
            "options": [
              "Épictète écrit Maximes et Pensées.",
              "Les cyniques vivaient en Grèce.",
              "Le texte commence par « Si ».",
              "Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l'esprit."
            ],
            "correctAnswerIndex": 3,
            "explanation": "« À notre sens » introduit le jugement personnel de l'élève."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pas de nouvel argument",
          "stepTheme": "Pas de nouvel argument",
          "stepBadge": "Pas de nouvel argument",
          "paragraphText": "La conclusion n'ouvre pas une nouvelle discussion détaillée : les arguments ont été développés dans la critique.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q5",
            "type": "mcq",
            "prompt": "Que faut-il éviter dans la conclusion d'un commentaire de texte philosophique ?",
            "options": [
              "Une formule comme « en définitive »",
              "Le bilan du débat",
              "Un long nouvel argument avec de nouvelles citations",
              "Une position personnelle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les arguments se développent dans la critique, pas en conclusion."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'ordre des phrases",
          "stepTheme": "L'ordre des phrases",
          "stepBadge": "L'ordre des phrases",
          "paragraphText": "Formule d'ouverture, bilan, position : cet enchaînement rend la conclusion claire.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q6",
            "type": "mcq",
            "prompt": "Dans quel ordre écrit-on la conclusion d'un commentaire de texte philosophique ?",
            "options": [
              "Position personnelle, bilan, formule d'ouverture",
              "Formule d'ouverture, bilan, position personnelle",
              "Bilan, thème, problème",
              "Thèse, enjeu, bilan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On annonce la fin, on résume le débat, puis on prend position."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Rester dans le débat",
          "stepTheme": "Rester dans le débat",
          "stepBadge": "Rester dans le débat",
          "paragraphText": "La position personnelle doit répondre au débat du texte, pas changer de sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q7",
            "type": "mcq",
            "prompt": "Le texte d'Épictète porte sur la tenue du philosophe. Quelle position personnelle est HORS SUJET en conclusion ?",
            "options": [
              "La propreté du corps va de pair avec celle de l'esprit.",
              "La tenue compte, mais la vertu compte davantage.",
              "Il faut réformer le système scolaire ivoirien.",
              "On peut être négligé et bien penser, mais cela nuit à l'image de la philosophie."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Cette phrase n'a rien à voir avec le débat sur la tenue du philosophe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q1",
          "type": "mcq",
          "prompt": "Quelle expression convient pour commencer la conclusion d'un commentaire de texte philosophique ?",
          "options": [
            "« Tout d'abord, »",
            "« En définitive, »",
            "« Il était une fois »",
            "« Premièrement, »"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« En définitive » indique au lecteur qu'on arrive à la fin du travail."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q2",
          "type": "mcq",
          "prompt": "Comment se présente la conclusion d'un commentaire de texte philosophique ?",
          "options": [
            "En un seul paragraphe, bilan puis position",
            "En trois grandes parties",
            "En une liste à tirets",
            "En reprenant tout le développement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est un paragraphe court et cohérent."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q3",
          "type": "mcq",
          "prompt": "Épictète demande au philosophe d'être propre ; les cyniques jugent la beauté du corps sans importance. Quelle phrase fait le bilan de ce débat ?",
          "options": [
            "Épictète est un philosophe grec.",
            "À notre sens, la propreté est utile.",
            "Si pour Épictète le philosophe doit être propre et décent, pour les cyniques la beauté corporelle est inessentielle.",
            "Le texte a deux mouvements."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le bilan met face à face les deux positions du débat."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q4",
          "type": "mcq",
          "prompt": "Après le bilan du débat sur la tenue du philosophe (Épictète contre les cyniques), quelle phrase exprime une position personnelle ?",
          "options": [
            "Épictète écrit Maximes et Pensées.",
            "Les cyniques vivaient en Grèce.",
            "Le texte commence par « Si ».",
            "Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l'esprit."
          ],
          "correctAnswerIndex": 3,
          "explanation": "« À notre sens » introduit le jugement personnel de l'élève."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q5",
          "type": "mcq",
          "prompt": "Que faut-il éviter dans la conclusion d'un commentaire de texte philosophique ?",
          "options": [
            "Une formule comme « en définitive »",
            "Le bilan du débat",
            "Un long nouvel argument avec de nouvelles citations",
            "Une position personnelle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les arguments se développent dans la critique, pas en conclusion."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q6",
          "type": "mcq",
          "prompt": "Dans quel ordre écrit-on la conclusion d'un commentaire de texte philosophique ?",
          "options": [
            "Position personnelle, bilan, formule d'ouverture",
            "Formule d'ouverture, bilan, position personnelle",
            "Bilan, thème, problème",
            "Thèse, enjeu, bilan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On annonce la fin, on résume le débat, puis on prend position."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p02_q7",
          "type": "mcq",
          "prompt": "Le texte d'Épictète porte sur la tenue du philosophe. Quelle position personnelle est HORS SUJET en conclusion ?",
          "options": [
            "La propreté du corps va de pair avec celle de l'esprit.",
            "La tenue compte, mais la vertu compte davantage.",
            "Il faut réformer le système scolaire ivoirien.",
            "On peut être négligé et bien penser, mais cela nuit à l'image de la philosophie."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Cette phrase n'a rien à voir avec le débat sur la tenue du philosophe."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03",
      "order": 3,
      "title": "Des conclusions rédigées : Épictète et Pascal",
      "summary": "Étudier deux modèles officiels de conclusion.",
      "conceptExplanation": "1. Texte d'Épictète (Maximes et Pensées) : le philosophe et son disciple doivent soigner leur tenue ; la beauté intérieure, qui consiste à faire usage de sa raison, dépasse la beauté du corps.\nConclusion rédigée :\n« En définitive, si pour Épictète et certains moralistes de l'Antiquité le philosophe et son disciple doivent observer la propreté et la décence en vue d'améliorer leur statut social, pour d'autres penseurs tels que les cyniques, la beauté corporelle est inessentielle pour le philosophe. Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l'esprit. »\n\n2. Texte de Pascal (Pensées) : « La pensée fait la grandeur de l'homme (…) L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. »\n- Bilan : la pensée apparaît comme le seul trait distinctif de l'homme, mais la psychanalyse de Freud remet en cause cette position.\n- Position personnelle : l'homme se définit par la conscience, mais il est aussi déterminé par l'inconscient : c'est un être pluridimensionnel.\nConclusion rédigée :\n« En définitive, la pensée apparaît comme le seul trait distinctif de l'homme, mais certaines lacunes de celle-ci ont conduit à l'avènement de la psychanalyse freudienne qui infirme cette thèse. C'est pourquoi il convient de retenir que même si la conscience définit l'homme, il est déterminé par l'inconscient, ce qui fait de lui un être pluridimensionnel. »",
      "keyRule": "Modèle : « En définitive, si pour [auteur]…, pour [autre]… Au demeurant, à notre sens… »",
      "formulas": [],
      "workedExample": {
        "title": "Analyser la conclusion sur Épictète",
        "statement": "Repère le bilan et la position dans : « En définitive, si pour Épictète (…) pour d'autres penseurs tels que les cyniques, la beauté corporelle est inessentielle pour le philosophe. Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l'esprit. »",
        "methodSteps": [
          "Bilan : la phrase en « si pour Épictète…, pour les cyniques… ».",
          "Position : la phrase introduite par « à notre sens »."
        ],
        "conclusion": "Les deux éléments sont présents, dans le bon ordre."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Les cyniques",
          "stepTheme": "Les cyniques",
          "stepBadge": "Les cyniques",
          "paragraphText": "Dans le bilan sur Épictète, les cyniques représentent la position opposée : pour eux, la beauté corporelle est inessentielle pour le philosophe.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q1",
            "type": "mcq",
            "prompt": "Dans la conclusion sur le texte d'Épictète (qui demande au philosophe d'être propre), quelle position attribue-t-on aux cyniques ?",
            "options": [
              "La beauté corporelle est inessentielle pour le philosophe",
              "Le philosophe doit être riche",
              "La pensée fait la grandeur de l'homme",
              "La philosophie est un débat sans fin"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les cyniques méprisaient les apparences : c'est l'antithèse du texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La position sur Épictète",
          "stepTheme": "La position sur Épictète",
          "stepBadge": "La position sur Épictète",
          "paragraphText": "« Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l'esprit. »",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q2",
            "type": "mcq",
            "prompt": "Dans la conclusion sur Épictète, que représente la phrase « Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l'esprit » ?",
            "options": [
              "Le bilan",
              "La prise de position personnelle",
              "Le problème",
              "La structure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« À notre sens » marque le jugement personnel."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le bilan sur Pascal",
          "stepTheme": "Le bilan sur Pascal",
          "stepBadge": "Le bilan sur Pascal",
          "paragraphText": "Pascal place la pensée au cœur de l'homme ; la psychanalyse de Freud conteste cette position en montrant le rôle de l'inconscient.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q3",
            "type": "mcq",
            "prompt": "Pascal écrit que « la pensée fait la grandeur de l'homme ». Quelle théorie s'oppose à lui dans le bilan de la conclusion ?",
            "options": [
              "La physique de Newton",
              "La philosophie d'Épictète",
              "La psychanalyse de Freud",
              "La théorie de l'évolution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Freud, l'homme n'est pas seulement conscience : l'inconscient le détermine."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La position sur Pascal",
          "stepTheme": "La position sur Pascal",
          "stepBadge": "La position sur Pascal",
          "paragraphText": "Position : la conscience définit l'homme, mais l'inconscient le détermine aussi ; l'homme est un être pluridimensionnel.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q4",
            "type": "mcq",
            "prompt": "Après le bilan « Pascal : la pensée fait la grandeur de l'homme ; Freud : l'homme est déterminé par l'inconscient », quelle position personnelle nuancée convient ?",
            "options": [
              "Pascal a tort sur tout.",
              "L'homme se définit par la conscience, mais il est aussi déterminé par l'inconscient : c'est un être pluridimensionnel.",
              "Freud a écrit les Pensées.",
              "La pensée n'existe pas."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle tient compte des deux positions du débat."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Les connecteurs de la conclusion",
          "stepTheme": "Les connecteurs de la conclusion",
          "stepBadge": "Les connecteurs de la conclusion",
          "paragraphText": "Dans la conclusion sur Pascal, « mais » marque l'opposition du bilan et « c'est pourquoi » introduit la position.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q5",
            "type": "mcq",
            "prompt": "Dans « (…) la psychanalyse freudienne infirme cette thèse. C'est pourquoi il convient de retenir que (…) l'homme est un être pluridimensionnel », quelle est la fonction de « c'est pourquoi » ?",
            "options": [
              "Opposition",
              "Comparaison",
              "Supposition",
              "Conséquence"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La position personnelle découle du bilan : c'est une conséquence."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Nuancer, pas rejeter",
          "stepTheme": "Nuancer, pas rejeter",
          "stepBadge": "Nuancer, pas rejeter",
          "paragraphText": "Une bonne position personnelle tient compte des deux côtés du débat ; elle évite les jugements brutaux.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q6",
            "type": "mcq",
            "prompt": "Pour conclure sur le débat entre Épictète (soigner sa tenue) et les cyniques (la beauté du corps est inessentielle), quelle position personnelle est la plus adaptée ?",
            "options": [
              "Épictète est stupide.",
              "Les cyniques sont sales.",
              "La propreté du corps et celle de l'esprit vont ensemble, mais la vertu reste l'essentiel.",
              "Je ne sais pas."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle prend parti tout en tenant compte des deux positions, sans insulter."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Hountondji",
          "stepTheme": "Hountondji",
          "stepBadge": "Hountondji",
          "paragraphText": "Hountondji : la philosophie n'est pas un système clos, mais un débat ouvert et collectif. On peut lui opposer les grands systèmes philosophiques qui se veulent achevés, comme celui de Hegel.",
          "exercise": {
            "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q7",
            "type": "mcq",
            "prompt": "Hountondji soutient que la philosophie est un débat ouvert ; d'autres penseurs ont construit des systèmes qui se veulent achevés. Quelle phrase peut servir de bilan dans la conclusion ?",
            "options": [
              "Hountondji est un philosophe béninois.",
              "Si pour Hountondji la philosophie est un débat sans fin, d'autres l'ont conçue comme un système achevé de vérités.",
              "À notre sens, il faut lire Hountondji.",
              "Le texte parle de la philosophie."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le bilan met face à face la thèse de l'auteur et une position opposée."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q1",
          "type": "mcq",
          "prompt": "Dans la conclusion sur le texte d'Épictète (qui demande au philosophe d'être propre), quelle position attribue-t-on aux cyniques ?",
          "options": [
            "La beauté corporelle est inessentielle pour le philosophe",
            "Le philosophe doit être riche",
            "La pensée fait la grandeur de l'homme",
            "La philosophie est un débat sans fin"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les cyniques méprisaient les apparences : c'est l'antithèse du texte."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q2",
          "type": "mcq",
          "prompt": "Dans la conclusion sur Épictète, que représente la phrase « Au demeurant, à notre sens, la propreté du corps va de pair avec celle de l'esprit » ?",
          "options": [
            "Le bilan",
            "La prise de position personnelle",
            "Le problème",
            "La structure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« À notre sens » marque le jugement personnel."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q3",
          "type": "mcq",
          "prompt": "Pascal écrit que « la pensée fait la grandeur de l'homme ». Quelle théorie s'oppose à lui dans le bilan de la conclusion ?",
          "options": [
            "La physique de Newton",
            "La philosophie d'Épictète",
            "La psychanalyse de Freud",
            "La théorie de l'évolution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Freud, l'homme n'est pas seulement conscience : l'inconscient le détermine."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q4",
          "type": "mcq",
          "prompt": "Après le bilan « Pascal : la pensée fait la grandeur de l'homme ; Freud : l'homme est déterminé par l'inconscient », quelle position personnelle nuancée convient ?",
          "options": [
            "Pascal a tort sur tout.",
            "L'homme se définit par la conscience, mais il est aussi déterminé par l'inconscient : c'est un être pluridimensionnel.",
            "Freud a écrit les Pensées.",
            "La pensée n'existe pas."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle tient compte des deux positions du débat."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q5",
          "type": "mcq",
          "prompt": "Dans « (…) la psychanalyse freudienne infirme cette thèse. C'est pourquoi il convient de retenir que (…) l'homme est un être pluridimensionnel », quelle est la fonction de « c'est pourquoi » ?",
          "options": [
            "Opposition",
            "Comparaison",
            "Supposition",
            "Conséquence"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La position personnelle découle du bilan : c'est une conséquence."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q6",
          "type": "mcq",
          "prompt": "Pour conclure sur le débat entre Épictète (soigner sa tenue) et les cyniques (la beauté du corps est inessentielle), quelle position personnelle est la plus adaptée ?",
          "options": [
            "Épictète est stupide.",
            "Les cyniques sont sales.",
            "La propreté du corps et celle de l'esprit vont ensemble, mais la vertu reste l'essentiel.",
            "Je ne sais pas."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle prend parti tout en tenant compte des deux positions, sans insulter."
        },
        {
          "id": "premiere_philo_methodologie_l03_conclusion_commentaire_p03_q7",
          "type": "mcq",
          "prompt": "Hountondji soutient que la philosophie est un débat ouvert ; d'autres penseurs ont construit des systèmes qui se veulent achevés. Quelle phrase peut servir de bilan dans la conclusion ?",
          "options": [
            "Hountondji est un philosophe béninois.",
            "Si pour Hountondji la philosophie est un débat sans fin, d'autres l'ont conçue comme un système achevé de vérités.",
            "À notre sens, il faut lire Hountondji.",
            "Le texte parle de la philosophie."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le bilan met face à face la thèse de l'auteur et une position opposée."
        }
      ]
    }
  ]
};
