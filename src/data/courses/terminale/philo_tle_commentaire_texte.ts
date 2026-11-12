import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Philo Tle_L2_Le commentaire de texte philosophique.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const PHILO_TLE_L02_COMMENTAIRE_TEXTE: CurriculumChapter = {
  "id": "terminale_philo_methodologie_l02_commentaire_texte",
  "subjectId": "philosophie",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2",
    "terminale_c",
    "terminale_d"
  ],
  "order": 2,
  "title": "Leçon 2 : Le commentaire de texte philosophique",
  "summary": "Présenter le texte, en faire l'étude ordonnée, dégager son intérêt philosophique et conclure.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "Philo Tle_L2_Le commentaire de texte philosophique.pdf",
  "points": [
    {
      "id": "terminale_philo_methodologie_l02_commentaire_texte_p01",
      "order": 1,
      "title": "Le commentaire et son introduction",
      "summary": "Ce qu'est un commentaire de texte et comment présenter le texte : thème, problème, thèse.",
      "conceptExplanation": "Le commentaire de texte philosophique consiste à dégager l'intérêt philosophique d'un texte à partir de son étude ordonnée.\nCommenter, c'est d'abord expliquer (mettre en évidence le sens du texte), puis évaluer.\nLe devoir comprend trois parties : introduction, développement, conclusion.\nL'introduction présente le texte par trois éléments : le thème, le problème et la thèse ; on peut y ajouter la structure logique.",
      "keyRule": "Commenter = expliquer puis évaluer ; introduction = thème + problème + thèse.",
      "formulas": [],
      "workedExample": {
        "title": "Introduction du texte d'Épictète",
        "statement": "Texte d'Épictète sur la tenue du philosophe (Maximes et Pensées).",
        "methodSteps": [
          "Thème : la tenue du philosophe et de son disciple.",
          "Problème : le philosophe et son disciple doivent-ils négliger leur tenue ?",
          "Thèse : ils doivent prendre soin de leur corps et de leur âme."
        ],
        "conclusion": "Le texte est présenté ; on annonce ensuite ses deux mouvements."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le commentaire de texte",
          "stepTheme": "Le commentaire de texte",
          "stepBadge": "Le commentaire de texte",
          "paragraphText": "• Commentaire de texte philosophique : exercice qui consiste à dégager l'intérêt philosophique d'un texte à partir de son étude ordonnée.\nCommenter, c'est d'abord expliquer le texte, puis l'évaluer.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q1",
            "type": "mcq",
            "prompt": "En quoi consiste le commentaire de texte philosophique ?",
            "options": [
              "Résumer le texte en une phrase",
              "Donner son avis sans lire le texte",
              "Dégager l'intérêt philosophique d'un texte à partir de son étude ordonnée",
              "Recopier les phrases importantes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On explique le texte, puis on évalue sa valeur philosophique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les trois parties",
          "stepTheme": "Les trois parties",
          "stepBadge": "Les trois parties",
          "paragraphText": "Le devoir comprend :\n1. l'introduction ;\n2. le développement (étude ordonnée et intérêt philosophique) ;\n3. la conclusion.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q2",
            "type": "mcq",
            "prompt": "Quelles sont les deux parties du développement d'un commentaire ?",
            "options": [
              "L'étude ordonnée et l'intérêt philosophique",
              "L'amorce et le problème",
              "La thèse et l'antithèse",
              "Le bilan et l'ouverture"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On explique d'abord (étude ordonnée), puis on évalue (intérêt philosophique)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les éléments de l'introduction",
          "stepTheme": "Les éléments de l'introduction",
          "stepBadge": "Les éléments de l'introduction",
          "paragraphText": "L'introduction présente le texte avec :\n• le thème ;\n• le problème ;\n• la thèse.\nLa structure logique peut figurer à la fin de l'introduction ou au début du développement.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q3",
            "type": "mcq",
            "prompt": "Quels sont les trois éléments essentiels de l'introduction d'un commentaire ?",
            "options": [
              "L'amorce, le bilan et l'ouverture",
              "La critique interne et la critique externe",
              "Les citations, les exemples et les dates",
              "Le thème, le problème et la thèse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Thème, problème et thèse présentent le texte."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le texte d'Épictète",
          "stepTheme": "Le texte d'Épictète",
          "stepBadge": "Le texte d'Épictète",
          "paragraphText": "Épictète critique le philosophe « malpropre, négligé » qui débite de belles maximes.\n• Thème : la tenue du philosophe et de son disciple.\n• Problème : doivent-ils négliger leur tenue ?\n• Thèse : ils doivent prendre soin de leur corps et de leur âme.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q4",
            "type": "mcq",
            "prompt": "Dans son texte sur la tenue du philosophe, Épictète critique le philosophe « malpropre, négligé » qui débite de belles maximes. Quelle est sa thèse ?",
            "options": [
              "Le philosophe doit négliger son corps",
              "Le philosophe et son disciple doivent prendre soin de leur corps et de leur âme",
              "La philosophie est inutile",
              "La beauté du corps est la seule qui compte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Épictète demande la décence extérieure, tout en plaçant la beauté intérieure au-dessus."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Thème ou thèse ?",
          "stepTheme": "Thème ou thèse ?",
          "stepBadge": "Thème ou thèse ?",
          "paragraphText": "• Le thème dit de quoi parle le texte (la tenue du philosophe).\n• La thèse dit ce que l'auteur pense de ce thème (il faut soigner corps et âme).\nLa thèse est une prise de position ; le thème non.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces formules est une thèse ?",
            "options": [
              "La définition de la philosophie",
              "La philosophie n'est pas un système mais un débat sans fin",
              "Le rôle de la religion",
              "La tenue du philosophe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une thèse affirme une position ; les autres formules ne donnent que le sujet."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Présenter le texte",
          "stepTheme": "Présenter le texte",
          "stepBadge": "Présenter le texte",
          "paragraphText": "Formule type :\n« Ce texte de [auteur], extrait de [œuvre], parle de [thème]. À la question [problème], l'auteur répond que [thèse]. Le texte s'articule autour de [nombre] mouvements. »",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q6",
            "type": "mcq",
            "prompt": "Dans la phrase « À la question… l'auteur répond que… », que place-t-on après « répond que » ?",
            "options": [
              "Le thème",
              "L'amorce",
              "La conclusion",
              "La thèse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La réponse de l'auteur au problème, c'est sa thèse."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q1",
          "type": "mcq",
          "prompt": "En quoi consiste le commentaire de texte philosophique ?",
          "options": [
            "Résumer le texte en une phrase",
            "Donner son avis sans lire le texte",
            "Dégager l'intérêt philosophique d'un texte à partir de son étude ordonnée",
            "Recopier les phrases importantes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On explique le texte, puis on évalue sa valeur philosophique."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q2",
          "type": "mcq",
          "prompt": "Quelles sont les deux parties du développement d'un commentaire ?",
          "options": [
            "L'étude ordonnée et l'intérêt philosophique",
            "L'amorce et le problème",
            "La thèse et l'antithèse",
            "Le bilan et l'ouverture"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On explique d'abord (étude ordonnée), puis on évalue (intérêt philosophique)."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q3",
          "type": "mcq",
          "prompt": "Quels sont les trois éléments essentiels de l'introduction d'un commentaire ?",
          "options": [
            "L'amorce, le bilan et l'ouverture",
            "La critique interne et la critique externe",
            "Les citations, les exemples et les dates",
            "Le thème, le problème et la thèse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Thème, problème et thèse présentent le texte."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q4",
          "type": "mcq",
          "prompt": "Dans son texte sur la tenue du philosophe, Épictète critique le philosophe « malpropre, négligé » qui débite de belles maximes. Quelle est sa thèse ?",
          "options": [
            "Le philosophe doit négliger son corps",
            "Le philosophe et son disciple doivent prendre soin de leur corps et de leur âme",
            "La philosophie est inutile",
            "La beauté du corps est la seule qui compte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Épictète demande la décence extérieure, tout en plaçant la beauté intérieure au-dessus."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces formules est une thèse ?",
          "options": [
            "La définition de la philosophie",
            "La philosophie n'est pas un système mais un débat sans fin",
            "Le rôle de la religion",
            "La tenue du philosophe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une thèse affirme une position ; les autres formules ne donnent que le sujet."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p01_q6",
          "type": "mcq",
          "prompt": "Dans la phrase « À la question… l'auteur répond que… », que place-t-on après « répond que » ?",
          "options": [
            "Le thème",
            "L'amorce",
            "La conclusion",
            "La thèse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La réponse de l'auteur au problème, c'est sa thèse."
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l02_commentaire_texte_p02",
      "order": 2,
      "title": "Les notions clés du texte",
      "summary": "Thème, problème, thèse, intention, enjeu, structure logique et démarche argumentative.",
      "conceptExplanation": "Chaque notion répond à une question :\n• thème : de quoi est-il question dans le texte ?\n• problème : quelle difficulté le texte soulève-t-il ?\n• thèse : quelle est la position de l'auteur ?\n• intention : quel est l'objectif immédiat de l'auteur ?\n• enjeu : qu'y a-t-il à gagner dans la résolution du problème ?\n• structure logique : quelles sont les étapes (mouvements) du texte ?\n• démarche argumentative : de quelle manière le problème est-il traité ?",
      "keyRule": "Chaque notion = une question précise à poser au texte.",
      "formulas": [],
      "workedExample": {
        "title": "Le texte de Hountondji",
        "statement": "« La philosophie n'est pas un système (…) mais un débat sans cesse rebondissant. »",
        "methodSteps": [
          "Thème : la définition de la philosophie.",
          "Problème : la philosophie est-elle un système ?",
          "Thèse : la philosophie n'est pas un système mais un débat sans fin.",
          "Intention : rejeter l'idée d'une philosophie achevée.",
          "Enjeu : la connaissance."
        ],
        "conclusion": "Chaque notion éclaire le texte sous un angle différent."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'intention",
          "stepTheme": "L'intention",
          "stepBadge": "L'intention",
          "paragraphText": "• Intention : objectif immédiat de l'auteur dans le texte.\nQuestion à poser : « Que veut faire l'auteur ? »\nExemple (Hountondji) : rejeter l'opinion qui fait de la philosophie un savoir achevé.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q1",
            "type": "mcq",
            "prompt": "À quelle question répond l'intention de l'auteur ?",
            "options": [
              "Quel est l'objectif immédiat de l'auteur ?",
              "Quelle est la position de l'auteur ?",
              "De quoi est-il question dans le texte ?",
              "Quelles sont les étapes du texte ?"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'intention, c'est le but que poursuit l'auteur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'enjeu",
          "stepTheme": "L'enjeu",
          "stepBadge": "L'enjeu",
          "paragraphText": "• Enjeu : ce qu'il y a à gagner (ou à perdre) dans la résolution du problème.\nExemples : la connaissance (Hountondji), le bonheur (Hume).",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q2",
            "type": "mcq",
            "prompt": "À quelle question répond l'enjeu ?",
            "options": [
              "Quel est l'objectif immédiat de l'auteur ?",
              "Quelle est la position de l'auteur ?",
              "Qu'y a-t-il à gagner dans la résolution du problème ?",
              "Combien de lignes compte le texte ?"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'enjeu mesure ce qui est en jeu derrière le problème."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La structure logique",
          "stepTheme": "La structure logique",
          "stepBadge": "La structure logique",
          "paragraphText": "• Structure logique : découpage du texte en mouvements (étapes de l'argumentation), avec les lignes de début et de fin.\nChaque mouvement a une idée principale.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q3",
            "type": "mcq",
            "prompt": "À quelle question répond la structure logique ?",
            "options": [
              "Quelle est la position de l'auteur ?",
              "Qu'y a-t-il à gagner ?",
              "Qui est l'auteur ?",
              "Quelles sont les étapes de l'argumentation ?"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La structure logique découpe le texte en mouvements."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La démarche argumentative",
          "stepTheme": "La démarche argumentative",
          "stepBadge": "La démarche argumentative",
          "paragraphText": "• Démarche argumentative : manière dont l'auteur traite le problème (explicative, polémique, comparative…).\nExemple : Hountondji a une démarche polémique : il dit d'abord ce que la philosophie n'est pas, puis ce qu'elle est.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q4",
            "type": "mcq",
            "prompt": "À quelle question répond la démarche argumentative ?",
            "options": [
              "De quoi parle le texte ?",
              "Quelle est la date du texte ?",
              "De quelle manière le problème est-il traité ?",
              "Qu'y a-t-il à gagner ?"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La démarche décrit la méthode de l'auteur pour défendre sa thèse."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le texte de Hountondji",
          "stepTheme": "Le texte de Hountondji",
          "stepBadge": "Le texte de Hountondji",
          "paragraphText": "• Thème : la définition de la philosophie.\n• Problème : la philosophie est-elle un système ?\n• Thèse : elle n'est pas un système mais un débat sans cesse rebondissant.\n• Enjeu : la connaissance.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q5",
            "type": "mcq",
            "prompt": "Selon Hountondji, qu'est-ce que la philosophie ?",
            "options": [
              "Un système de vérités définitives",
              "Un débat sans cesse rebondissant",
              "Une religion",
              "Une science exacte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour Hountondji, la philosophie vit dans la discussion et ne s'arrête jamais."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Intention ou thèse ?",
          "stepTheme": "Intention ou thèse ?",
          "stepBadge": "Intention ou thèse ?",
          "paragraphText": "• La thèse est ce que l'auteur affirme (sa position).\n• L'intention est ce qu'il cherche à faire en l'affirmant (convaincre, réfuter, montrer…).\nUne intention commence souvent par un verbe : montrer, rejeter, démontrer.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces formules est une intention ?",
            "options": [
              "Rejeter l'idée que la philosophie est un savoir achevé",
              "La philosophie est un débat",
              "La définition de la philosophie",
              "La connaissance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une intention exprime un but avec un verbe d'action : rejeter, montrer…"
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q1",
          "type": "mcq",
          "prompt": "À quelle question répond l'intention de l'auteur ?",
          "options": [
            "Quel est l'objectif immédiat de l'auteur ?",
            "Quelle est la position de l'auteur ?",
            "De quoi est-il question dans le texte ?",
            "Quelles sont les étapes du texte ?"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'intention, c'est le but que poursuit l'auteur."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q2",
          "type": "mcq",
          "prompt": "À quelle question répond l'enjeu ?",
          "options": [
            "Quel est l'objectif immédiat de l'auteur ?",
            "Quelle est la position de l'auteur ?",
            "Qu'y a-t-il à gagner dans la résolution du problème ?",
            "Combien de lignes compte le texte ?"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'enjeu mesure ce qui est en jeu derrière le problème."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q3",
          "type": "mcq",
          "prompt": "À quelle question répond la structure logique ?",
          "options": [
            "Quelle est la position de l'auteur ?",
            "Qu'y a-t-il à gagner ?",
            "Qui est l'auteur ?",
            "Quelles sont les étapes de l'argumentation ?"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La structure logique découpe le texte en mouvements."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q4",
          "type": "mcq",
          "prompt": "À quelle question répond la démarche argumentative ?",
          "options": [
            "De quoi parle le texte ?",
            "Quelle est la date du texte ?",
            "De quelle manière le problème est-il traité ?",
            "Qu'y a-t-il à gagner ?"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La démarche décrit la méthode de l'auteur pour défendre sa thèse."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q5",
          "type": "mcq",
          "prompt": "Selon Hountondji, qu'est-ce que la philosophie ?",
          "options": [
            "Un système de vérités définitives",
            "Un débat sans cesse rebondissant",
            "Une religion",
            "Une science exacte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour Hountondji, la philosophie vit dans la discussion et ne s'arrête jamais."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces formules est une intention ?",
          "options": [
            "Rejeter l'idée que la philosophie est un savoir achevé",
            "La philosophie est un débat",
            "La définition de la philosophie",
            "La connaissance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une intention exprime un but avec un verbe d'action : rejeter, montrer…"
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l02_commentaire_texte_p03",
      "order": 3,
      "title": "L'étude ordonnée",
      "summary": "Expliquer le texte mouvement par mouvement, sans paraphrase.",
      "conceptExplanation": "L'étude ordonnée explique le texte à partir de sa structure logique, mouvement par mouvement.\nOn met en évidence la démarche de l'auteur, ses arguments, ses concepts, ses exemples et ses figures de style.\nPour chaque mouvement : une idée principale et des idées secondaires.\nOn évite la paraphrase, le contresens et le non-sens ; on relie les mouvements par des transitions.",
      "keyRule": "Expliquer, pas répéter : une idée principale par mouvement, appuyée par des idées secondaires.",
      "formulas": [],
      "workedExample": {
        "title": "Étude ordonnée du texte d'Épictète",
        "statement": "Deux mouvements : lignes 1 à 7, puis lignes 7 à 12.",
        "methodSteps": [
          "Mouvement 1, idée principale : la nécessité de la décence chez le philosophe et son disciple.",
          "Idées secondaires : le philosophe malpropre, comparé à un criminel, inspire la répugnance ; exhortation à la propreté.",
          "Mouvement 2, idée principale : la primauté de la beauté intérieure sur la beauté du corps."
        ],
        "conclusion": "Chaque mouvement est expliqué par son idée principale et ses idées secondaires."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'étude ordonnée",
          "stepTheme": "L'étude ordonnée",
          "stepBadge": "L'étude ordonnée",
          "paragraphText": "• Étude ordonnée : explication du texte à partir de sa structure logique, mouvement par mouvement.\nElle montre la démarche de l'auteur, ses arguments, ses concepts, ses exemples, ses figures de style.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q1",
            "type": "mcq",
            "prompt": "Sur quoi s'appuie l'étude ordonnée ?",
            "options": [
              "Sur la structure logique du texte",
              "Sur la biographie de l'auteur uniquement",
              "Sur l'avis personnel de l'élève",
              "Sur le nombre de mots du texte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On suit l'ordre des mouvements du texte."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Idée principale et idées secondaires",
          "stepTheme": "Idée principale et idées secondaires",
          "stepBadge": "Idée principale et idées secondaires",
          "paragraphText": "Pour chaque mouvement :\n• une idée principale résume ce que dit le mouvement ;\n• des idées secondaires détaillent les arguments qui la soutiennent.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q2",
            "type": "mcq",
            "prompt": "Que résume l'idée principale d'un mouvement ?",
            "options": [
              "Toute la vie de l'auteur",
              "L'essentiel de ce que dit le mouvement",
              "La conclusion du devoir",
              "Le titre de l'œuvre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'idée principale condense le contenu d'un mouvement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Paraphrase, contresens, non-sens",
          "stepTheme": "Paraphrase, contresens, non-sens",
          "stepBadge": "Paraphrase, contresens, non-sens",
          "paragraphText": "• Paraphrase : répéter le texte avec d'autres mots, sans l'expliquer.\n• Contresens : comprendre l'inverse de ce que dit l'auteur.\n• Non-sens : écrire une explication qui n'a pas de sens.\nCes trois erreurs sont à éviter.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q3",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une paraphrase ?",
            "options": [
              "Comprendre l'inverse de l'auteur",
              "Citer un autre philosophe",
              "Répéter le texte avec d'autres mots sans l'expliquer",
              "Découper le texte en mouvements"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Paraphraser, c'est redire sans expliquer : l'étude ordonnée doit éclairer le sens."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Épictète, premier mouvement",
          "stepTheme": "Épictète, premier mouvement",
          "stepBadge": "Épictète, premier mouvement",
          "paragraphText": "Idée principale : la nécessité de la décence chez le philosophe et son disciple.\nIdées secondaires :\n1. comparé à un criminel, le philosophe malpropre inspire la répugnance ;\n2. exhortation à la propreté et à la décence.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q4",
            "type": "mcq",
            "prompt": "À qui Épictète compare-t-il le philosophe malpropre ?",
            "options": [
              "À un roi",
              "À un enfant",
              "À un médecin",
              "À un criminel qui sort du cachot"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La comparaison avec le criminel souligne le caractère répugnant du philosophe négligé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Épictète, second mouvement",
          "stepTheme": "Épictète, second mouvement",
          "stepBadge": "Épictète, second mouvement",
          "paragraphText": "Idée principale : la primauté de la beauté intérieure sur la beauté du corps.\nIdées secondaires :\n1. le soin du corps montre une idée du beau ;\n2. la beauté intérieure, qui consiste à faire usage de sa raison, surpasse la beauté du corps.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q5",
            "type": "mcq",
            "prompt": "En quoi consiste la beauté intérieure selon Épictète ?",
            "options": [
              "À porter de beaux vêtements",
              "À être riche",
              "À faire usage de sa raison",
              "À être célèbre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour le stoïcien Épictète, la vraie beauté est celle de la raison."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les transitions",
          "stepTheme": "Les transitions",
          "stepBadge": "Les transitions",
          "paragraphText": "Entre deux mouvements, on écrit une transition : une phrase qui résume le mouvement fini et annonce le suivant.\nExemple : « Après avoir montré la nécessité de la décence, l'auteur établit la supériorité de la beauté intérieure. »",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q6",
            "type": "mcq",
            "prompt": "À quoi sert une transition dans l'étude ordonnée ?",
            "options": [
              "À donner son avis final",
              "À citer d'autres auteurs",
              "À définir les mots du sujet",
              "À relier un mouvement au suivant"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La transition assure la continuité de l'explication."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q1",
          "type": "mcq",
          "prompt": "Sur quoi s'appuie l'étude ordonnée ?",
          "options": [
            "Sur la structure logique du texte",
            "Sur la biographie de l'auteur uniquement",
            "Sur l'avis personnel de l'élève",
            "Sur le nombre de mots du texte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On suit l'ordre des mouvements du texte."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q2",
          "type": "mcq",
          "prompt": "Que résume l'idée principale d'un mouvement ?",
          "options": [
            "Toute la vie de l'auteur",
            "L'essentiel de ce que dit le mouvement",
            "La conclusion du devoir",
            "Le titre de l'œuvre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'idée principale condense le contenu d'un mouvement."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q3",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une paraphrase ?",
          "options": [
            "Comprendre l'inverse de l'auteur",
            "Citer un autre philosophe",
            "Répéter le texte avec d'autres mots sans l'expliquer",
            "Découper le texte en mouvements"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Paraphraser, c'est redire sans expliquer : l'étude ordonnée doit éclairer le sens."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q4",
          "type": "mcq",
          "prompt": "À qui Épictète compare-t-il le philosophe malpropre ?",
          "options": [
            "À un roi",
            "À un enfant",
            "À un médecin",
            "À un criminel qui sort du cachot"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La comparaison avec le criminel souligne le caractère répugnant du philosophe négligé."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q5",
          "type": "mcq",
          "prompt": "En quoi consiste la beauté intérieure selon Épictète ?",
          "options": [
            "À porter de beaux vêtements",
            "À être riche",
            "À faire usage de sa raison",
            "À être célèbre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour le stoïcien Épictète, la vraie beauté est celle de la raison."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p03_q6",
          "type": "mcq",
          "prompt": "À quoi sert une transition dans l'étude ordonnée ?",
          "options": [
            "À donner son avis final",
            "À citer d'autres auteurs",
            "À définir les mots du sujet",
            "À relier un mouvement au suivant"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La transition assure la continuité de l'explication."
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l02_commentaire_texte_p04",
      "order": 4,
      "title": "L'intérêt philosophique et la conclusion",
      "summary": "Évaluer le texte par la critique interne, la critique externe, puis conclure.",
      "conceptExplanation": "L'intérêt philosophique évalue le texte dans la forme et dans le fond.\nLa critique interne évalue la forme : cohérence de l'argumentation, accord entre démarche et intention, forces et faiblesses des arguments.\nLa critique externe évalue le fond : on justifie d'abord la thèse avec d'autres auteurs, puis on la dépasse avec d'autres positions.\nLa conclusion fait le bilan du débat puis prend position.",
      "keyRule": "Critique interne = la forme ; critique externe = le fond (justifier puis dépasser).",
      "formulas": [],
      "workedExample": {
        "title": "Critique externe du texte d'Épictète",
        "statement": "Le philosophe doit-il soigner sa tenue ?",
        "methodSteps": [
          "Justifier : « un esprit sain dans un corps sain » ; pour Platon (Le Banquet), l'amour des beaux corps mène aux belles âmes.",
          "Dépasser : pour Diogène le cynique, mépriser le corps élève l'esprit ; pour les stoïciens et saint Augustin, l'âme vaut plus que le corps."
        ],
        "conclusion": "Bilan, puis position : la propreté du corps va de pair avec celle de l'esprit."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'intérêt philosophique",
          "stepTheme": "L'intérêt philosophique",
          "stepBadge": "L'intérêt philosophique",
          "paragraphText": "• Intérêt philosophique : partie critique du devoir, qui évalue le texte dans la forme et dans le fond.\nIl comporte deux aspects : la critique interne et la critique externe.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q1",
            "type": "mcq",
            "prompt": "Quels sont les deux aspects de l'intérêt philosophique ?",
            "options": [
              "La critique interne et la critique externe",
              "L'amorce et le problème",
              "Le thème et la thèse",
              "Les mouvements et les transitions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On évalue d'abord la forme (interne), puis le fond (externe)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La critique interne",
          "stepTheme": "La critique interne",
          "stepBadge": "La critique interne",
          "paragraphText": "• Critique interne : évaluation de la forme du texte.\nOn montre :\n• la cohérence de l'argumentation ;\n• l'accord (ou non) entre la démarche et l'intention de l'auteur ;\n• les forces et les faiblesses des arguments.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q2",
            "type": "mcq",
            "prompt": "Que juge la critique interne ?",
            "options": [
              "Le fond, en comparant avec d'autres auteurs",
              "La forme : la cohérence et la démarche de l'argumentation",
              "La biographie de l'auteur",
              "La longueur du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La critique interne regarde comment l'auteur argumente."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La critique externe",
          "stepTheme": "La critique externe",
          "stepBadge": "La critique externe",
          "paragraphText": "• Critique externe : évaluation du fond, c'est-à-dire de la position de l'auteur.\n1. On justifie la thèse en s'appuyant sur d'autres auteurs.\n2. On la dépasse à l'aide d'autres positions.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q3",
            "type": "mcq",
            "prompt": "Dans quel ordre procède la critique externe ?",
            "options": [
              "Dépasser la thèse, puis la recopier",
              "Justifier la thèse, puis la dépasser",
              "Résumer le texte, puis conclure",
              "Citer l'auteur, puis s'arrêter"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On montre d'abord la valeur de la thèse, puis ses limites."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Critique interne d'Épictète",
          "stepTheme": "Critique interne d'Épictète",
          "stepBadge": "Critique interne d'Épictète",
          "paragraphText": "Avec des mots forts (malpropre, négligé, horrible), Épictète compare le philosophe à un criminel.\nIl en tire la nécessité de la décence, puis la primauté de la beauté intérieure.\nSon ton ironique sert son intention : améliorer l'image du philosophe.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q4",
            "type": "mcq",
            "prompt": "Quel procédé Épictète utilise-t-il pour frapper le lecteur ?",
            "options": [
              "Des expressions excessives et une comparaison avec un criminel",
              "Des statistiques",
              "Un dialogue entre deux personnages",
              "Une démonstration mathématique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'exagération et la comparaison rendent le philosophe négligé répugnant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Dépasser la thèse",
          "stepTheme": "Dépasser la thèse",
          "stepBadge": "Dépasser la thèse",
          "paragraphText": "Pour dépasser la thèse d'Épictète, on cite des positions opposées :\n• Diogène le cynique : mépriser le corps élève l'esprit ;\n• les stoïciens, saint Augustin : l'âme vaut plus que le corps.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q5",
            "type": "mcq",
            "prompt": "Quel philosophe méprisait le soin du corps pour élever l'esprit ?",
            "options": [
              "Platon",
              "Épictète",
              "Kant",
              "Diogène le cynique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Diogène vivait volontairement dans le dénuement pour libérer son esprit."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La conclusion du commentaire",
          "stepTheme": "La conclusion du commentaire",
          "stepBadge": "La conclusion du commentaire",
          "paragraphText": "• Conclusion : prise de position sur l'intérêt du texte.\nElle commence par le bilan du débat de la critique externe, puis donne une position personnelle.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q6",
            "type": "mcq",
            "prompt": "Que doit précéder la prise de position dans la conclusion ?",
            "options": [
              "Une nouvelle amorce",
              "La structure logique",
              "Le bilan du débat de la critique externe",
              "La définition des mots"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On résume le débat, puis on tranche."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q1",
          "type": "mcq",
          "prompt": "Quels sont les deux aspects de l'intérêt philosophique ?",
          "options": [
            "La critique interne et la critique externe",
            "L'amorce et le problème",
            "Le thème et la thèse",
            "Les mouvements et les transitions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On évalue d'abord la forme (interne), puis le fond (externe)."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q2",
          "type": "mcq",
          "prompt": "Que juge la critique interne ?",
          "options": [
            "Le fond, en comparant avec d'autres auteurs",
            "La forme : la cohérence et la démarche de l'argumentation",
            "La biographie de l'auteur",
            "La longueur du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La critique interne regarde comment l'auteur argumente."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q3",
          "type": "mcq",
          "prompt": "Dans quel ordre procède la critique externe ?",
          "options": [
            "Dépasser la thèse, puis la recopier",
            "Justifier la thèse, puis la dépasser",
            "Résumer le texte, puis conclure",
            "Citer l'auteur, puis s'arrêter"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On montre d'abord la valeur de la thèse, puis ses limites."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q4",
          "type": "mcq",
          "prompt": "Quel procédé Épictète utilise-t-il pour frapper le lecteur ?",
          "options": [
            "Des expressions excessives et une comparaison avec un criminel",
            "Des statistiques",
            "Un dialogue entre deux personnages",
            "Une démonstration mathématique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'exagération et la comparaison rendent le philosophe négligé répugnant."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q5",
          "type": "mcq",
          "prompt": "Quel philosophe méprisait le soin du corps pour élever l'esprit ?",
          "options": [
            "Platon",
            "Épictète",
            "Kant",
            "Diogène le cynique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Diogène vivait volontairement dans le dénuement pour libérer son esprit."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p04_q6",
          "type": "mcq",
          "prompt": "Que doit précéder la prise de position dans la conclusion ?",
          "options": [
            "Une nouvelle amorce",
            "La structure logique",
            "Le bilan du débat de la critique externe",
            "La définition des mots"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On résume le débat, puis on tranche."
        }
      ]
    },
    {
      "id": "terminale_philo_methodologie_l02_commentaire_texte_p05",
      "order": 5,
      "title": "Entraînement : deux textes",
      "summary": "S'exercer avec le texte de Hountondji sur la philosophie et celui de Hume sur la religion.",
      "conceptExplanation": "Hountondji : la philosophie n'est pas un système clos mais un débat qui se poursuit indéfiniment ; chaque penseur doit pouvoir « répondre » de ses thèses.\nCritique externe : Socrate, Jaspers, Kant, Russell soutiennent cette idée ; Hegel et Descartes voient au contraire la philosophie comme un système.\nHume (Dialogues sur la religion naturelle) : la religion apaise les souffrances et les craintes de l'homme.\nCritique externe : Freud, Girard, saint Augustin sur ses bienfaits ; Freud, Bergson, Jacob sur l'illusion et le fanatisme.",
      "keyRule": "Pour chaque texte : problématique, structure logique, critique interne, critique externe, conclusion.",
      "formulas": [],
      "workedExample": {
        "title": "Problématique du texte de Hume",
        "statement": "« Tout homme sent la vérité de la religion dans son propre cœur… »",
        "methodSteps": [
          "Thème : le rôle de la religion.",
          "Problème : quel est le rôle de la religion dans la vie de l'homme ?",
          "Thèse : la religion apaise les souffrances de l'homme.",
          "Enjeu : le bonheur."
        ],
        "conclusion": "Deux mouvements : les fondements de la religion, puis sa fonction psychologique."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Défendre Hountondji",
          "stepTheme": "Défendre Hountondji",
          "stepBadge": "Défendre Hountondji",
          "paragraphText": "Arguments pour la philosophie comme questionnement :\n• Socrate : « Ce que je sais, c'est que je ne sais rien. »\n• Jaspers : « Philosopher, c'est être en route. »\n• Kant : « On n'apprend pas la philosophie, on apprend à philosopher. »",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q1",
            "type": "mcq",
            "prompt": "Quel auteur a dit « On n'apprend pas la philosophie, on apprend à philosopher » ?",
            "options": [
              "Hegel",
              "Descartes",
              "Kant",
              "Hume"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour Kant, la philosophie est une activité de pensée, pas un savoir à réciter."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Dépasser Hountondji",
          "stepTheme": "Dépasser Hountondji",
          "stepBadge": "Dépasser Hountondji",
          "paragraphText": "Arguments pour la philosophie comme système :\n• Hegel : « Une philosophie qui n'est pas un système ne saurait rien avoir de scientifique. »\n• Descartes : la philosophie est un arbre dont les racines sont la métaphysique, le tronc la physique et les branches les autres sciences.\nPrécision : cette image de l'arbre vient des Principes de la philosophie, pas du Discours de la méthode comme l'écrit le PDF.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q2",
            "type": "mcq",
            "prompt": "Quel philosophe compare la philosophie à un arbre ?",
            "options": [
              "Descartes",
              "Socrate",
              "Kant",
              "Hountondji"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Descartes : racines = métaphysique, tronc = physique, branches = autres sciences."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La problématique de Hume",
          "stepTheme": "La problématique de Hume",
          "stepBadge": "La problématique de Hume",
          "paragraphText": "• Thème : le rôle de la religion.\n• Problème : quel est le rôle de la religion dans la vie de l'homme ?\n• Thèse : la religion apaise les souffrances de l'homme et calme ses terreurs.\n• Enjeu : le bonheur.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q3",
            "type": "mcq",
            "prompt": "Dans un texte sur le rôle de la religion dans la vie de l'homme, Hume se demande à quoi sert la religion. Quelle est sa thèse ?",
            "options": [
              "La religion est une pure illusion",
              "La religion n'a aucun rôle",
              "La religion est une science",
              "La religion apaise les souffrances et les craintes de l'homme"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le texte présente la religion comme un remède aux angoisses humaines."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Qui parle dans les Dialogues ?",
          "stepTheme": "Qui parle dans les Dialogues ?",
          "stepBadge": "Qui parle dans les Dialogues ?",
          "paragraphText": "Les Dialogues sur la religion naturelle sont un dialogue entre plusieurs personnages.\nLe passage « Mon opinion est que tout homme sent la vérité de la religion… » est prononcé par le personnage de Déméa, pas forcément par Hume lui-même.\nAu BAC, on peut écrire « le texte affirme », ou préciser qu'un personnage parle.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q4",
            "type": "mcq",
            "prompt": "Quelle précaution faut-il prendre avec un texte tiré d'un dialogue philosophique ?",
            "options": [
              "Supposer que l'auteur pense toujours ce que disent ses personnages",
              "Vérifier quel personnage parle avant d'attribuer la thèse à l'auteur",
              "Ne jamais citer un dialogue",
              "Ignorer les personnages"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans un dialogue, l'auteur fait parler des personnages qui ne partagent pas tous ses idées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Critique externe : la religion comme illusion",
          "stepTheme": "Critique externe : la religion comme illusion",
          "stepBadge": "Critique externe : la religion comme illusion",
          "paragraphText": "Pour dépasser la thèse :\n• Freud (L'avenir d'une illusion) : les doctrines religieuses sont des illusions.\n• Bergson : l'histoire des religions montre un « tissu d'aberrations ».\n• François Jacob : la certitude d'avoir raison conduit au fanatisme et à la destruction.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q5",
            "type": "mcq",
            "prompt": "Selon Freud dans L'avenir d'une illusion, que sont les doctrines religieuses ?",
            "options": [
              "Des vérités scientifiques",
              "Des illusions",
              "Des lois de l'État",
              "Des œuvres d'art"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Freud voit la religion comme une illusion née du besoin de protection."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Conclure le commentaire de Hume",
          "stepTheme": "Conclure le commentaire de Hume",
          "stepBadge": "Conclure le commentaire de Hume",
          "paragraphText": "Bilan : la religion console et donne espoir, mais elle peut aussi tromper et conduire au fanatisme.\nPosition possible : malgré ses dérives, la religion aide l'homme à supporter les épreuves de l'existence.",
          "exercise": {
            "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q6",
            "type": "mcq",
            "prompt": "Quelle conclusion est la mieux construite ?",
            "options": [
              "Une seule phrase : « Je suis d'accord »",
              "Une nouvelle citation sans explication",
              "Le résumé du premier mouvement",
              "Un bilan des deux positions, puis une prise de position argumentée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La conclusion fait le bilan du débat, puis tranche avec un argument."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q1",
          "type": "mcq",
          "prompt": "Quel auteur a dit « On n'apprend pas la philosophie, on apprend à philosopher » ?",
          "options": [
            "Hegel",
            "Descartes",
            "Kant",
            "Hume"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour Kant, la philosophie est une activité de pensée, pas un savoir à réciter."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q2",
          "type": "mcq",
          "prompt": "Quel philosophe compare la philosophie à un arbre ?",
          "options": [
            "Descartes",
            "Socrate",
            "Kant",
            "Hountondji"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Descartes : racines = métaphysique, tronc = physique, branches = autres sciences."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q3",
          "type": "mcq",
          "prompt": "Dans un texte sur le rôle de la religion dans la vie de l'homme, Hume se demande à quoi sert la religion. Quelle est sa thèse ?",
          "options": [
            "La religion est une pure illusion",
            "La religion n'a aucun rôle",
            "La religion est une science",
            "La religion apaise les souffrances et les craintes de l'homme"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le texte présente la religion comme un remède aux angoisses humaines."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q4",
          "type": "mcq",
          "prompt": "Quelle précaution faut-il prendre avec un texte tiré d'un dialogue philosophique ?",
          "options": [
            "Supposer que l'auteur pense toujours ce que disent ses personnages",
            "Vérifier quel personnage parle avant d'attribuer la thèse à l'auteur",
            "Ne jamais citer un dialogue",
            "Ignorer les personnages"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans un dialogue, l'auteur fait parler des personnages qui ne partagent pas tous ses idées."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q5",
          "type": "mcq",
          "prompt": "Selon Freud dans L'avenir d'une illusion, que sont les doctrines religieuses ?",
          "options": [
            "Des vérités scientifiques",
            "Des illusions",
            "Des lois de l'État",
            "Des œuvres d'art"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Freud voit la religion comme une illusion née du besoin de protection."
        },
        {
          "id": "terminale_philo_methodologie_l02_commentaire_texte_p05_q6",
          "type": "mcq",
          "prompt": "Quelle conclusion est la mieux construite ?",
          "options": [
            "Une seule phrase : « Je suis d'accord »",
            "Une nouvelle citation sans explication",
            "Le résumé du premier mouvement",
            "Un bilan des deux positions, puis une prise de position argumentée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La conclusion fait le bilan du débat, puis tranche avec un argument."
        }
      ]
    }
  ]
};
