import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo 1ère_Leç 2_LiIntroduction du commentaire de texte philosophique.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_1RE_L02_INTRODUCTION_COMMENTAIRE: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l02_introduction_commentaire",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 2,
  "title": "Leçon 2 : L'introduction du commentaire de texte philosophique",
  "summary": "Éléments de l'introduction (thème, problème, thèse, structure), construction avec une généralité, modèle rédigé sur Épictète, entraînement sur Alain et Hountondji.",
  "officialVolumeHours": 3,
  "contentVersion": 2,
  "source": "Philo 1ère_Leç 2_LiIntroduction du commentaire de texte philosophique.pdf",
  "points": [
    {
      "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01",
      "order": 1,
      "title": "Les éléments de l'introduction",
      "summary": "L'introduction présente le texte avec le thème, le problème, la thèse et éventuellement la structure.",
      "conceptExplanation": "Définition : l'introduction du commentaire de texte philosophique est la PREMIÈRE partie du devoir, celle où l'on présente le texte. Elle s'élabore à partir de certains éléments de la problématique.\n\nÉléments constitutifs de l'introduction :\n- le thème ;\n- le problème ;\n- la thèse ;\n- et éventuellement la structure logique.\n\nCe qui n'entre PAS dans l'introduction :\n- l'antithèse, l'intention et l'enjeu (ils servent plus tard, surtout dans la critique) ;\n- la prise de position personnelle (elle est réservée à la conclusion).\n\nBonne définition à retenir : l'introduction est la première partie du devoir ; elle annonce le thème du texte, pose le problème et expose la thèse de l'auteur.",
      "keyRule": "Introduction = thème + problème + thèse (+ structure logique). Pas d'antithèse, pas d'enjeu, pas d'avis personnel.",
      "formulas": [],
      "workedExample": {
        "title": "Trier les éléments",
        "statement": "Parmi : le problème, l'enjeu, l'intention, la thèse, l'antithèse, la structure du texte, le thème, lesquels servent à rédiger l'introduction ?",
        "methodSteps": [
          "On garde ce qui présente le texte : thème, problème, thèse.",
          "On peut ajouter la structure du texte.",
          "On écarte l'enjeu, l'intention et l'antithèse."
        ],
        "conclusion": "Le thème, le problème, la thèse et la structure du texte."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La première partie",
          "stepTheme": "La première partie",
          "stepBadge": "La première partie",
          "paragraphText": "L'introduction est la première partie du devoir : on y présente le texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q1",
            "type": "mcq",
            "prompt": "Quelle définition convient à l'introduction du commentaire de texte philosophique ?",
            "options": [
              "La dernière étape, qui consiste à prendre une position personnelle",
              "L'étape qui pose le problème du texte et en donne la solution",
              "La première partie du devoir, qui annonce le thème, pose le problème et expose la thèse de l'auteur",
              "Un résumé complet du texte"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La position personnelle est dans la conclusion ; l'introduction présente le texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les éléments constitutifs",
          "stepTheme": "Les éléments constitutifs",
          "stepBadge": "Les éléments constitutifs",
          "paragraphText": "Thème, problème, thèse, et éventuellement structure logique.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q2",
            "type": "mcq",
            "prompt": "Quels sont les éléments constitutifs de l'introduction du commentaire de texte philosophique ?",
            "options": [
              "Le thème, le problème, la thèse et éventuellement la structure logique",
              "Le bilan et la prise de position",
              "L'antithèse, l'enjeu et l'intention",
              "La biographie de l'auteur et la date du texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le bilan et la prise de position sont les éléments de la conclusion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Pas d'antithèse",
          "stepTheme": "Pas d'antithèse",
          "stepBadge": "Pas d'antithèse",
          "paragraphText": "L'antithèse, l'intention et l'enjeu ne font pas partie de l'introduction.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q3",
            "type": "mcq",
            "prompt": "Parmi le problème, l'enjeu, la thèse et le thème, lequel n'est PAS nécessaire pour rédiger l'introduction du commentaire ?",
            "options": [
              "Le problème",
              "La thèse",
              "Le thème",
              "L'enjeu"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'enjeu sert à évaluer l'intérêt du texte, pas à le présenter."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La structure, en option",
          "stepTheme": "La structure, en option",
          "stepBadge": "La structure, en option",
          "paragraphText": "La structure logique est facultative dans l'introduction (« éventuellement »), mais elle est souvent appréciée.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q4",
            "type": "mcq",
            "prompt": "Dans l'introduction du commentaire de texte philosophique, la structure logique du texte est :",
            "options": [
              "Interdite",
              "Obligatoire en premier",
              "Possible, mais facultative",
              "Remplacée par l'antithèse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cours dit « et éventuellement la structure logique »."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Pas d'avis personnel",
          "stepTheme": "Pas d'avis personnel",
          "stepBadge": "Pas d'avis personnel",
          "paragraphText": "On ne donne pas son avis dans l'introduction : on présente le texte. La prise de position vient à la fin.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q5",
            "type": "mcq",
            "prompt": "Dans une introduction de commentaire, un élève écrit : « À mon avis, Épictète a tout à fait raison. » Quel est le problème ?",
            "options": [
              "Aucun",
              "La prise de position personnelle est réservée à la conclusion",
              "Il fallait citer l'enjeu",
              "Il fallait écrire au passé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'introduction présente le texte ; le jugement personnel vient en conclusion."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Partir de la problématique",
          "stepTheme": "Partir de la problématique",
          "stepBadge": "Partir de la problématique",
          "paragraphText": "L'introduction s'élabore à partir de la problématique déjà dégagée avec la grille de lecture.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q6",
            "type": "mcq",
            "prompt": "À partir de quoi rédige-t-on l'introduction d'un commentaire de texte philosophique ?",
            "options": [
              "À partir de certains éléments de la problématique du texte",
              "À partir de la conclusion",
              "À partir d'une citation d'un autre auteur",
              "À partir du nombre de lignes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On reprend le thème, le problème et la thèse dégagés par la grille de lecture."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Trier",
          "stepTheme": "Trier",
          "stepBadge": "Trier",
          "paragraphText": "Parmi problème, enjeu, intention, thèse, antithèse, structure, thème, on garde : problème, thèse, structure, thème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q7",
            "type": "mcq",
            "prompt": "Parmi « le problème, l'enjeu, l'intention, la thèse, l'antithèse, la structure du texte, le thème », quel groupe sert à rédiger l'introduction ?",
            "options": [
              "L'enjeu, l'intention, l'antithèse",
              "Le thème et l'enjeu seulement",
              "L'antithèse et la thèse",
              "Le problème, la thèse, la structure du texte, le thème"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les éléments qui présentent le texte."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q1",
          "type": "mcq",
          "prompt": "Quelle définition convient à l'introduction du commentaire de texte philosophique ?",
          "options": [
            "La dernière étape, qui consiste à prendre une position personnelle",
            "L'étape qui pose le problème du texte et en donne la solution",
            "La première partie du devoir, qui annonce le thème, pose le problème et expose la thèse de l'auteur",
            "Un résumé complet du texte"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La position personnelle est dans la conclusion ; l'introduction présente le texte."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q2",
          "type": "mcq",
          "prompt": "Quels sont les éléments constitutifs de l'introduction du commentaire de texte philosophique ?",
          "options": [
            "Le thème, le problème, la thèse et éventuellement la structure logique",
            "Le bilan et la prise de position",
            "L'antithèse, l'enjeu et l'intention",
            "La biographie de l'auteur et la date du texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le bilan et la prise de position sont les éléments de la conclusion."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q3",
          "type": "mcq",
          "prompt": "Parmi le problème, l'enjeu, la thèse et le thème, lequel n'est PAS nécessaire pour rédiger l'introduction du commentaire ?",
          "options": [
            "Le problème",
            "La thèse",
            "Le thème",
            "L'enjeu"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'enjeu sert à évaluer l'intérêt du texte, pas à le présenter."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q4",
          "type": "mcq",
          "prompt": "Dans l'introduction du commentaire de texte philosophique, la structure logique du texte est :",
          "options": [
            "Interdite",
            "Obligatoire en premier",
            "Possible, mais facultative",
            "Remplacée par l'antithèse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cours dit « et éventuellement la structure logique »."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q5",
          "type": "mcq",
          "prompt": "Dans une introduction de commentaire, un élève écrit : « À mon avis, Épictète a tout à fait raison. » Quel est le problème ?",
          "options": [
            "Aucun",
            "La prise de position personnelle est réservée à la conclusion",
            "Il fallait citer l'enjeu",
            "Il fallait écrire au passé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'introduction présente le texte ; le jugement personnel vient en conclusion."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q6",
          "type": "mcq",
          "prompt": "À partir de quoi rédige-t-on l'introduction d'un commentaire de texte philosophique ?",
          "options": [
            "À partir de certains éléments de la problématique du texte",
            "À partir de la conclusion",
            "À partir d'une citation d'un autre auteur",
            "À partir du nombre de lignes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On reprend le thème, le problème et la thèse dégagés par la grille de lecture."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p01_q7",
          "type": "mcq",
          "prompt": "Parmi « le problème, l'enjeu, l'intention, la thèse, l'antithèse, la structure du texte, le thème », quel groupe sert à rédiger l'introduction ?",
          "options": [
            "L'enjeu, l'intention, l'antithèse",
            "Le thème et l'enjeu seulement",
            "L'antithèse et la thèse",
            "Le problème, la thèse, la structure du texte, le thème"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les éléments qui présentent le texte."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02",
      "order": 2,
      "title": "Construire l'introduction",
      "summary": "Agencer les éléments de façon cohérente, avec une généralité possible au début.",
      "conceptExplanation": "Construire l'introduction, c'est agencer de manière cohérente le thème, le problème, la thèse et éventuellement la structure logique.\n\n- L'ordre thème → problème → thèse → structure est conseillé, mais il n'est pas rigide.\n- On peut faire précéder ces éléments d'une GÉNÉRALITÉ : une phrase d'ouverture, large, qui amène le thème.\n- On présente le texte en nommant l'auteur et l'œuvre : « Ce texte d'Épictète, extrait de Maximes et Pensées, parle de… ».\n- Le problème se pose sous forme de question : « À la question : … ? l'auteur répond que… ».\n- La structure annonce les mouvements avec leurs lignes et leurs idées principales.\n\nFormules utiles :\n- « Ce texte de [auteur], extrait de [œuvre], porte sur [thème]. »\n- « À la question de savoir si … , l'auteur répond que … »\n- « Ce texte s'articule autour de deux mouvements : de la ligne … à la ligne … , … ; de la ligne … à la ligne … , … »",
      "keyRule": "Généralité (facultative) → présentation (auteur, œuvre, thème) → problème (question) → thèse (réponse) → structure (mouvements et lignes).",
      "formulas": [],
      "workedExample": {
        "title": "Une introduction en trois temps",
        "statement": "Rédige l'amorce d'une introduction pour le texte de Pascal (Pensées) sur la grandeur de l'homme.",
        "methodSteps": [
          "Présentation et thème : « Ce texte de Pascal, extrait des Pensées, porte sur la grandeur de l'homme. »",
          "Problème : « À la question de savoir ce qui fait la grandeur de l'homme, »",
          "Thèse : « l'auteur répond que c'est la pensée qui fait sa grandeur. »"
        ],
        "conclusion": "On a présenté le texte, posé le problème et exposé la thèse."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Un ordre souple",
          "stepTheme": "Un ordre souple",
          "stepBadge": "Un ordre souple",
          "paragraphText": "L'ordre thème, problème, thèse, structure est conseillé, mais il n'est pas rigide.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q1",
            "type": "mcq",
            "prompt": "L'ordre thème, problème, thèse, structure logique dans l'introduction du commentaire est-il obligatoire ?",
            "options": [
              "Oui, il est strictement imposé",
              "Non, il est conseillé mais pas rigide",
              "Non, il faut commencer par la thèse",
              "Oui, sinon la copie est nulle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le cours précise que « cet ordre n'est pas rigide », tant que l'ensemble reste cohérent."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La généralité",
          "stepTheme": "La généralité",
          "stepBadge": "La généralité",
          "paragraphText": "On peut ouvrir l'introduction par une généralité : une idée large qui conduit au thème du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q2",
            "type": "mcq",
            "prompt": "Pour introduire un texte d'Épictète sur la tenue du philosophe, laquelle de ces phrases est une bonne généralité ?",
            "options": [
              "Épictète est né en l'an 50.",
              "À mon avis, il faut être propre.",
              "L'apparence d'une personne influence souvent l'accueil qu'on réserve à ses idées.",
              "Le texte a douze lignes."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle part d'une observation générale qui mène au thème, sans donner d'avis."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Présenter le texte",
          "stepTheme": "Présenter le texte",
          "stepBadge": "Présenter le texte",
          "paragraphText": "On nomme l'auteur et l'œuvre, puis on donne le thème : « Ce texte d'Épictète, extrait de Maximes et Pensées, parle de la tenue du philosophe et de son disciple. »",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q3",
            "type": "mcq",
            "prompt": "Quelle phrase présente correctement le texte d'Épictète tiré de Maximes et Pensées, qui porte sur la tenue du philosophe ?",
            "options": [
              "Ce texte d'Épictète, extrait de Maximes et Pensées, parle de la tenue du philosophe et de son disciple.",
              "Épictète a tort.",
              "Dans ce texte, on parle de beaucoup de choses.",
              "Le philosophe doit négliger son apparence."
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle donne l'auteur, l'œuvre et le thème."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Poser le problème",
          "stepTheme": "Poser le problème",
          "stepBadge": "Poser le problème",
          "paragraphText": "Le problème se pose comme une question, puis on donne la réponse de l'auteur (la thèse).",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q4",
            "type": "mcq",
            "prompt": "Pascal soutient que la pensée fait la grandeur de l'homme. Quelle phrase pose correctement le problème puis la thèse ?",
            "options": [
              "Pascal parle de l'homme.",
              "À la question de savoir ce qui fait la grandeur de l'homme, Pascal répond que c'est la pensée.",
              "L'homme est un roseau.",
              "Freud n'est pas d'accord avec Pascal."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle formule la question puis la réponse de l'auteur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Annoncer la structure",
          "stepTheme": "Annoncer la structure",
          "stepBadge": "Annoncer la structure",
          "paragraphText": "On annonce les mouvements avec leurs lignes et leur idée principale.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q5",
            "type": "mcq",
            "prompt": "Le texte d'Épictète a deux mouvements : L1-L7 (la nécessité de la décence) et L7-L12 (la primauté de la beauté intérieure). Quelle phrase annonce bien cette structure ?",
            "options": [
              "Le texte est long.",
              "Le texte a deux parties.",
              "Le texte s'articule autour de deux mouvements : de la L1 à la L7, la nécessité de la décence ; de la L7 à la L12, la primauté de la beauté intérieure.",
              "Épictète écrit bien."
            ],
            "correctAnswerIndex": 2,
            "explanation": "On donne les lignes et l'idée principale de chaque mouvement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Cohérence",
          "stepTheme": "Cohérence",
          "stepBadge": "Cohérence",
          "paragraphText": "Les éléments doivent s'enchaîner : la thèse répond au problème annoncé juste avant.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q6",
            "type": "mcq",
            "prompt": "Un élève écrit : « À la question : le philosophe doit-il négliger sa tenue ? Épictète répond que la pensée fait la grandeur de l'homme. » Quelle est l'erreur ?",
            "options": [
              "La thèse ne répond pas au problème posé",
              "Il manque une généralité",
              "Le problème est trop court",
              "Il n'y a pas d'erreur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La réponse donnée (celle de Pascal) ne correspond pas à la question posée."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un texte d'Alain",
          "stepTheme": "Un texte d'Alain",
          "stepBadge": "Un texte d'Alain",
          "paragraphText": "Alain (Éléments de philosophie) : « l'homme ne se forme jamais par l'expérience solitaire (…) C'est donc à travers l'ordre humain qu'il connaît toute chose. »",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q7",
            "type": "mcq",
            "prompt": "Alain écrit que « l'homme ne se forme jamais par l'expérience solitaire » et que l'enfant connaît toute chose « à travers l'ordre humain ». Quel problème poser dans l'introduction ?",
            "options": [
              "L'enfant doit-il travailler ?",
              "L'homme peut-il se former seul, sans les autres ?",
              "Faut-il apprendre à parler ?",
              "La nature est-elle belle ?"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte répond à la question de la formation de l'homme : seul ou par la société ?"
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q1",
          "type": "mcq",
          "prompt": "L'ordre thème, problème, thèse, structure logique dans l'introduction du commentaire est-il obligatoire ?",
          "options": [
            "Oui, il est strictement imposé",
            "Non, il est conseillé mais pas rigide",
            "Non, il faut commencer par la thèse",
            "Oui, sinon la copie est nulle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le cours précise que « cet ordre n'est pas rigide », tant que l'ensemble reste cohérent."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q2",
          "type": "mcq",
          "prompt": "Pour introduire un texte d'Épictète sur la tenue du philosophe, laquelle de ces phrases est une bonne généralité ?",
          "options": [
            "Épictète est né en l'an 50.",
            "À mon avis, il faut être propre.",
            "L'apparence d'une personne influence souvent l'accueil qu'on réserve à ses idées.",
            "Le texte a douze lignes."
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle part d'une observation générale qui mène au thème, sans donner d'avis."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q3",
          "type": "mcq",
          "prompt": "Quelle phrase présente correctement le texte d'Épictète tiré de Maximes et Pensées, qui porte sur la tenue du philosophe ?",
          "options": [
            "Ce texte d'Épictète, extrait de Maximes et Pensées, parle de la tenue du philosophe et de son disciple.",
            "Épictète a tort.",
            "Dans ce texte, on parle de beaucoup de choses.",
            "Le philosophe doit négliger son apparence."
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle donne l'auteur, l'œuvre et le thème."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q4",
          "type": "mcq",
          "prompt": "Pascal soutient que la pensée fait la grandeur de l'homme. Quelle phrase pose correctement le problème puis la thèse ?",
          "options": [
            "Pascal parle de l'homme.",
            "À la question de savoir ce qui fait la grandeur de l'homme, Pascal répond que c'est la pensée.",
            "L'homme est un roseau.",
            "Freud n'est pas d'accord avec Pascal."
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle formule la question puis la réponse de l'auteur."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q5",
          "type": "mcq",
          "prompt": "Le texte d'Épictète a deux mouvements : L1-L7 (la nécessité de la décence) et L7-L12 (la primauté de la beauté intérieure). Quelle phrase annonce bien cette structure ?",
          "options": [
            "Le texte est long.",
            "Le texte a deux parties.",
            "Le texte s'articule autour de deux mouvements : de la L1 à la L7, la nécessité de la décence ; de la L7 à la L12, la primauté de la beauté intérieure.",
            "Épictète écrit bien."
          ],
          "correctAnswerIndex": 2,
          "explanation": "On donne les lignes et l'idée principale de chaque mouvement."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q6",
          "type": "mcq",
          "prompt": "Un élève écrit : « À la question : le philosophe doit-il négliger sa tenue ? Épictète répond que la pensée fait la grandeur de l'homme. » Quelle est l'erreur ?",
          "options": [
            "La thèse ne répond pas au problème posé",
            "Il manque une généralité",
            "Le problème est trop court",
            "Il n'y a pas d'erreur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réponse donnée (celle de Pascal) ne correspond pas à la question posée."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p02_q7",
          "type": "mcq",
          "prompt": "Alain écrit que « l'homme ne se forme jamais par l'expérience solitaire » et que l'enfant connaît toute chose « à travers l'ordre humain ». Quel problème poser dans l'introduction ?",
          "options": [
            "L'enfant doit-il travailler ?",
            "L'homme peut-il se former seul, sans les autres ?",
            "Faut-il apprendre à parler ?",
            "La nature est-elle belle ?"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte répond à la question de la formation de l'homme : seul ou par la société ?"
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03",
      "order": 3,
      "title": "Une introduction rédigée : Épictète",
      "summary": "Étudier un modèle complet d'introduction.",
      "conceptExplanation": "Texte : Épictète, Maximes et Pensées. L'auteur critique le philosophe « malpropre, négligé et horrible comme un criminel qui sort du cachot » qui débite de belles maximes, demande « de la propreté et de la décence » au philosophe et au disciple, et place au-dessus de tout « cette beauté intérieure qui consiste à faire usage de sa raison ».\n\nIntroduction rédigée (corrigé officiel) :\n« Ce texte d'Épictète extrait de son œuvre Maximes et Pensées parle de la tenue du philosophe et de son disciple. À la question : le philosophe et son disciple doivent-ils négliger leur tenue ? l'auteur répond que ceux-ci doivent prendre soin de leur corps et de leur âme.\nCe texte s'articule autour de deux mouvements : de la L1 à la L7 « Si un philosophe malpropre (…) gras et mal peignés », il est question de la nécessité de la décence chez le philosophe et son disciple. De la L7 à la L12 « Car par là je juge (…) n'est que laideur », il montre la primauté de la beauté intérieure sur la beauté du corps. »\n\nAnalyse :\n- 1re phrase : auteur, œuvre et THÈME ;\n- 2e phrase : PROBLÈME (question) et THÈSE (réponse) ;\n- paragraphe suivant : STRUCTURE LOGIQUE, avec les lignes, les citations de début et de fin, et l'idée de chaque mouvement.",
      "keyRule": "Une introduction réussie se lit seule : on y comprend de quoi parle le texte, quelle question il pose et ce qu'il répond.",
      "formulas": [],
      "workedExample": {
        "title": "Repérer les éléments",
        "statement": "Dans l'introduction : « À la question : le philosophe et son disciple doivent-ils négliger leur tenue ? l'auteur répond que ceux-ci doivent prendre soin de leur corps et de leur âme », repère le problème et la thèse.",
        "methodSteps": [
          "La question posée est le problème.",
          "La réponse de l'auteur est la thèse."
        ],
        "conclusion": "Problème : le philosophe et son disciple doivent-ils négliger leur tenue ? Thèse : ils doivent prendre soin de leur corps et de leur âme."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La première phrase",
          "stepTheme": "La première phrase",
          "stepBadge": "La première phrase",
          "paragraphText": "« Ce texte d'Épictète extrait de son œuvre Maximes et Pensées parle de la tenue du philosophe et de son disciple. »",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q1",
            "type": "mcq",
            "prompt": "Dans l'introduction « Ce texte d'Épictète extrait de son œuvre Maximes et Pensées parle de la tenue du philosophe et de son disciple », quel élément est donné ?",
            "options": [
              "La thèse",
              "Le thème",
              "L'enjeu",
              "L'antithèse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« La tenue du philosophe et de son disciple » est ce dont parle le texte : le thème."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Problème et thèse",
          "stepTheme": "Problème et thèse",
          "stepBadge": "Problème et thèse",
          "paragraphText": "« À la question : le philosophe et son disciple doivent-ils négliger leur tenue ? l'auteur répond que ceux-ci doivent prendre soin de leur corps et de leur âme. »",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q2",
            "type": "mcq",
            "prompt": "Dans « À la question : le philosophe et son disciple doivent-ils négliger leur tenue ? l'auteur répond que ceux-ci doivent prendre soin de leur corps et de leur âme », que représente la partie après « l'auteur répond que » ?",
            "options": [
              "Le problème",
              "Le thème",
              "La thèse",
              "La structure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse de l'auteur au problème : la thèse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le premier mouvement",
          "stepTheme": "Le premier mouvement",
          "stepBadge": "Le premier mouvement",
          "paragraphText": "« De la L1 à la L7 « Si un philosophe malpropre (…) gras et mal peignés », il est question de la nécessité de la décence chez le philosophe et son disciple. »",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q3",
            "type": "mcq",
            "prompt": "Pourquoi l'introduction du texte d'Épictète cite-t-elle « Si un philosophe malpropre (…) gras et mal peignés » ?",
            "options": [
              "Pour montrer le début et la fin du premier mouvement",
              "Pour donner son avis",
              "Pour remplacer la thèse",
              "Pour poser le problème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On cite le premier et le dernier mots du mouvement, avec les lignes."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le second mouvement",
          "stepTheme": "Le second mouvement",
          "stepBadge": "Le second mouvement",
          "paragraphText": "« De la L7 à la L12 « Car par là je juge (…) n'est que laideur », il montre la primauté de la beauté intérieure sur la beauté du corps. »",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q4",
            "type": "mcq",
            "prompt": "D'après l'introduction du texte d'Épictète, que montre le second mouvement (L7-L12, « Car par là je juge (…) n'est que laideur ») ?",
            "options": [
              "La nécessité de la décence",
              "La primauté de la beauté intérieure sur la beauté du corps",
              "La beauté du corps est essentielle",
              "Le philosophe doit être riche"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'idée principale du second mouvement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Ce qu'elle ne contient pas",
          "stepTheme": "Ce qu'elle ne contient pas",
          "stepBadge": "Ce qu'elle ne contient pas",
          "paragraphText": "Le modèle ne contient ni antithèse, ni enjeu, ni avis personnel : seulement la présentation du texte.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q5",
            "type": "mcq",
            "prompt": "Le modèle d'introduction du texte d'Épictète donne le thème, le problème, la thèse et la structure. Que ne contient-il pas ?",
            "options": [
              "Le nom de l'auteur",
              "Le titre de l'œuvre",
              "Les lignes des mouvements",
              "L'avis personnel de l'élève"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'avis personnel est réservé à la conclusion."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Écrire sur Hountondji",
          "stepTheme": "Écrire sur Hountondji",
          "stepBadge": "Écrire sur Hountondji",
          "paragraphText": "Hountondji (Sur la « philosophie africaine ») : « La philosophie n'est pas un système clos, mais une histoire, un débat qui se transmet de génération en génération ».",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q6",
            "type": "mcq",
            "prompt": "Hountondji écrit : « La philosophie n'est pas un système clos, mais une histoire, un débat qui se transmet de génération en génération ». Quel est le thème de ce texte ?",
            "options": [
              "La nature de la philosophie",
              "L'histoire de l'Afrique",
              "Les générations",
              "Le système scolaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le texte dit ce qu'est (et n'est pas) la philosophie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "La thèse de Hountondji",
          "stepTheme": "La thèse de Hountondji",
          "stepBadge": "La thèse de Hountondji",
          "paragraphText": "Pour Hountondji, la philosophie n'existe que « dans l'élément de la discussion » : c'est une recherche collective appelée à se poursuivre indéfiniment.",
          "exercise": {
            "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q7",
            "type": "mcq",
            "prompt": "Hountondji affirme que la philosophie « n'existe (…) que dans l'élément de la discussion, sous la forme d'un débat sans cesse rebondissant ». Quelle thèse écrire dans l'introduction ?",
            "options": [
              "La philosophie est un ensemble de vérités définitives",
              "La philosophie est inutile",
              "La philosophie n'est pas un système clos, mais un débat ouvert et collectif",
              "La philosophie est réservée aux Africains"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il s'oppose à l'idée d'un système de vérités dernières."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q1",
          "type": "mcq",
          "prompt": "Dans l'introduction « Ce texte d'Épictète extrait de son œuvre Maximes et Pensées parle de la tenue du philosophe et de son disciple », quel élément est donné ?",
          "options": [
            "La thèse",
            "Le thème",
            "L'enjeu",
            "L'antithèse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« La tenue du philosophe et de son disciple » est ce dont parle le texte : le thème."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q2",
          "type": "mcq",
          "prompt": "Dans « À la question : le philosophe et son disciple doivent-ils négliger leur tenue ? l'auteur répond que ceux-ci doivent prendre soin de leur corps et de leur âme », que représente la partie après « l'auteur répond que » ?",
          "options": [
            "Le problème",
            "Le thème",
            "La thèse",
            "La structure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse de l'auteur au problème : la thèse."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q3",
          "type": "mcq",
          "prompt": "Pourquoi l'introduction du texte d'Épictète cite-t-elle « Si un philosophe malpropre (…) gras et mal peignés » ?",
          "options": [
            "Pour montrer le début et la fin du premier mouvement",
            "Pour donner son avis",
            "Pour remplacer la thèse",
            "Pour poser le problème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On cite le premier et le dernier mots du mouvement, avec les lignes."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q4",
          "type": "mcq",
          "prompt": "D'après l'introduction du texte d'Épictète, que montre le second mouvement (L7-L12, « Car par là je juge (…) n'est que laideur ») ?",
          "options": [
            "La nécessité de la décence",
            "La primauté de la beauté intérieure sur la beauté du corps",
            "La beauté du corps est essentielle",
            "Le philosophe doit être riche"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'idée principale du second mouvement."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q5",
          "type": "mcq",
          "prompt": "Le modèle d'introduction du texte d'Épictète donne le thème, le problème, la thèse et la structure. Que ne contient-il pas ?",
          "options": [
            "Le nom de l'auteur",
            "Le titre de l'œuvre",
            "Les lignes des mouvements",
            "L'avis personnel de l'élève"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'avis personnel est réservé à la conclusion."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q6",
          "type": "mcq",
          "prompt": "Hountondji écrit : « La philosophie n'est pas un système clos, mais une histoire, un débat qui se transmet de génération en génération ». Quel est le thème de ce texte ?",
          "options": [
            "La nature de la philosophie",
            "L'histoire de l'Afrique",
            "Les générations",
            "Le système scolaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le texte dit ce qu'est (et n'est pas) la philosophie."
        },
        {
          "id": "premiere_philo_methodologie_l02_introduction_commentaire_p03_q7",
          "type": "mcq",
          "prompt": "Hountondji affirme que la philosophie « n'existe (…) que dans l'élément de la discussion, sous la forme d'un débat sans cesse rebondissant ». Quelle thèse écrire dans l'introduction ?",
          "options": [
            "La philosophie est un ensemble de vérités définitives",
            "La philosophie est inutile",
            "La philosophie n'est pas un système clos, mais un débat ouvert et collectif",
            "La philosophie est réservée aux Africains"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il s'oppose à l'idée d'un système de vérités dernières."
        }
      ]
    }
  ]
};
