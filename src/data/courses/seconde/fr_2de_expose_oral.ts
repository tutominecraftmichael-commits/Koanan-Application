import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 15 et 16 SF apprendre à présenter un exposé oral 1 et 2.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const FR_2DE_SF_L02_EXPOSE_ORAL: CurriculumChapter = {
  "id": "seconde_a_francais_sf_l02_expose_oral",
  "subjectId": "francais",
  "gradeLevel": "seconde_a",
  "alsoForGrades": [
    "seconde_c"
  ],
  "order": 17,
  "title": "Savoir-faire, leçon 2 : Préparer et présenter un exposé oral",
  "summary": "Comprendre le sujet, chercher et trier l'information, organiser l'exposé, préparer ses supports, présenter devant un public et évaluer.",
  "officialVolumeHours": 4,
  "contentVersion": 2,
  "source": "15 et 16 SF apprendre à présenter un exposé oral 1 et 2.pdf",
  "points": [
    {
      "id": "seconde_a_francais_sf_l02_expose_oral_p01",
      "order": 1,
      "title": "Qu'est-ce qu'un exposé ?",
      "summary": "Définition et étapes du travail.",
      "conceptExplanation": "Un exposé est un exercice, le plus souvent oral, qui consiste à présenter de façon ordonnée et développée des informations sur un sujet donné, devant un public (la classe, un club...).\n\nIl se prépare en plusieurs étapes, souvent en équipe :\n1. comprendre le sujet ;\n2. rechercher la documentation (bibliothèque, CDI, internet, personnes ressources) ;\n3. trier et organiser les informations, élaborer un plan ;\n4. rédiger l'essentiel à retenir et préparer des notes ;\n5. répartir les parties entre les exposants ;\n6. s'entraîner à présenter oralement ;\n7. présenter l'exposé, puis répondre aux questions du public.\n\nL'exposé développe des compétences utiles toute la vie : chercher l'information, organiser sa pensée, parler en public, travailler en équipe.",
      "keyRule": "Exposé : présentation ordonnée d'informations sur un sujet, devant un public. Étapes : comprendre, chercher, organiser, rédiger les notes, répartir, s'entraîner, présenter.",
      "formulas": [],
      "workedExample": {
        "title": "Planifier un exposé de groupe",
        "statement": "Votre groupe doit présenter dans deux semaines un exposé sur « la protection des forêts en Côte d'Ivoire ». Par quoi commencer ?",
        "methodSteps": [
          "Analyser le sujet : de quelles forêts parle-t-on ? quelles menaces ? quelles solutions ?",
          "Chercher la documentation au CDI, sur internet, auprès d'un agent des Eaux et Forêts.",
          "Faire un plan, puis se répartir les parties."
        ],
        "conclusion": "On commence toujours par comprendre le sujet avant de chercher."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'exposé",
          "stepTheme": "L'exposé",
          "stepBadge": "L'exposé",
          "paragraphText": "Un exposé consiste à présenter de façon ordonnée et développée des informations sur un sujet donné, devant un public.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'un exposé ?",
            "options": [
              "Une discussion libre sans préparation",
              "Une dictée lue par le professeur",
              "La présentation ordonnée d'informations sur un sujet",
              "Un résumé d'une seule phrase"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exposé est préparé et organisé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La première étape",
          "stepTheme": "La première étape",
          "stepBadge": "La première étape",
          "paragraphText": "La première étape d'un exposé est de bien comprendre le sujet.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p01_q2",
            "type": "mcq",
            "prompt": "Quelle est la première étape de la préparation d'un exposé ?",
            "options": [
              "Comprendre le sujet",
              "Présenter devant la classe",
              "Répondre aux questions",
              "Imprimer les documents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ne peut pas chercher sans savoir ce qu'on cherche."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les sources",
          "stepTheme": "Les sources",
          "stepBadge": "Les sources",
          "paragraphText": "On recherche la documentation à la bibliothèque, au CDI, sur internet, auprès de personnes ressources (spécialistes, témoins).",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p01_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces sources est une « personne ressource » ?",
            "options": [
              "Un manuel scolaire de la classe",
              "Un site internet sur le sujet",
              "Une encyclopédie de la bibliothèque",
              "Un spécialiste du sujet interrogé"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une personne ressource est quelqu'un qui connaît le sujet."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le travail en équipe",
          "stepTheme": "Le travail en équipe",
          "stepBadge": "Le travail en équipe",
          "paragraphText": "En groupe, on répartit les différentes parties de l'exposé entre les exposants, et chacun maîtrise l'ensemble.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p01_q4",
            "type": "mcq",
            "prompt": "Comment s'organise un exposé de groupe ?",
            "options": [
              "Un seul élève fait tout le travail",
              "On répartit les parties entre les exposants",
              "Chacun présente un sujet différent",
              "On lit le même texte à tour de rôle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La répartition rend le travail plus efficace."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "S'entraîner",
          "stepTheme": "S'entraîner",
          "stepBadge": "S'entraîner",
          "paragraphText": "Avant de présenter, on s'entraîne à voix haute, en se chronométrant.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p01_q5",
            "type": "mcq",
            "prompt": "Pourquoi faut-il s'entraîner avant de présenter un exposé ?",
            "options": [
              "Pour apprendre le texte mot à mot",
              "Pour être à l'aise et respecter le temps",
              "Pour éviter de faire des recherches",
              "Pour que le professeur ne pose pas de questions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'entraînement donne de l'assurance."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les questions du public",
          "stepTheme": "Les questions du public",
          "stepBadge": "Les questions du public",
          "paragraphText": "Après la présentation, le public pose des questions : les exposants doivent être prêts à y répondre.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p01_q6",
            "type": "mcq",
            "prompt": "Que se passe-t-il généralement après la présentation d'un exposé ?",
            "options": [
              "Les exposants quittent la salle",
              "Le professeur lit un autre exposé",
              "Rien, l'exercice est terminé",
              "Le public pose des questions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les questions montrent si le sujet est maîtrisé."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un exercice utile",
          "stepTheme": "Un exercice utile",
          "stepBadge": "Un exercice utile",
          "paragraphText": "L'exposé développe des compétences utiles toute la vie : chercher l'information, organiser sa pensée, parler en public, travailler en équipe.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p01_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces compétences l'exposé développe-t-il ?",
            "options": [
              "Parler en public",
              "Calculer une intégrale",
              "Dessiner une carte à l'échelle",
              "Réaliser une expérience de chimie"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est une compétence de communication orale."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'un exposé ?",
          "options": [
            "Une discussion libre sans préparation",
            "Une dictée lue par le professeur",
            "La présentation ordonnée d'informations sur un sujet",
            "Un résumé d'une seule phrase"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exposé est préparé et organisé."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p01_q2",
          "type": "mcq",
          "prompt": "Quelle est la première étape de la préparation d'un exposé ?",
          "options": [
            "Comprendre le sujet",
            "Présenter devant la classe",
            "Répondre aux questions",
            "Imprimer les documents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ne peut pas chercher sans savoir ce qu'on cherche."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p01_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces sources est une « personne ressource » ?",
          "options": [
            "Un manuel scolaire de la classe",
            "Un site internet sur le sujet",
            "Une encyclopédie de la bibliothèque",
            "Un spécialiste du sujet interrogé"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une personne ressource est quelqu'un qui connaît le sujet."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p01_q4",
          "type": "mcq",
          "prompt": "Comment s'organise un exposé de groupe ?",
          "options": [
            "Un seul élève fait tout le travail",
            "On répartit les parties entre les exposants",
            "Chacun présente un sujet différent",
            "On lit le même texte à tour de rôle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La répartition rend le travail plus efficace."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p01_q5",
          "type": "mcq",
          "prompt": "Pourquoi faut-il s'entraîner avant de présenter un exposé ?",
          "options": [
            "Pour apprendre le texte mot à mot",
            "Pour être à l'aise et respecter le temps",
            "Pour éviter de faire des recherches",
            "Pour que le professeur ne pose pas de questions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'entraînement donne de l'assurance."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p01_q6",
          "type": "mcq",
          "prompt": "Que se passe-t-il généralement après la présentation d'un exposé ?",
          "options": [
            "Les exposants quittent la salle",
            "Le professeur lit un autre exposé",
            "Rien, l'exercice est terminé",
            "Le public pose des questions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les questions montrent si le sujet est maîtrisé."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p01_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces compétences l'exposé développe-t-il ?",
          "options": [
            "Parler en public",
            "Calculer une intégrale",
            "Dessiner une carte à l'échelle",
            "Réaliser une expérience de chimie"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est une compétence de communication orale."
        }
      ]
    },
    {
      "id": "seconde_a_francais_sf_l02_expose_oral_p02",
      "order": 2,
      "title": "Comprendre le sujet et chercher l'information",
      "summary": "Analyser, chercher, trier.",
      "conceptExplanation": "1. Comprendre le sujet : on repère les mots-clés, on cherche leur sens, on délimite le sujet (ce qu'il faut traiter et ce qui est hors sujet) et on se pose les questions essentielles (quoi ? pourquoi ? comment ? quelles conséquences ? quelles solutions ?).\nExemple : « Les formes de la tricherie en milieu scolaire » → il faut présenter les différentes manières de tricher, et non les sanctions ou l'histoire de l'école.\n\n2. Chercher l'information : livres et manuels, encyclopédies, articles, sites internet fiables, entretiens avec des personnes ressources.\n\n3. Trier l'information : garder ce qui répond au sujet, vérifier les informations trouvées sur internet en les comparant avec d'autres sources, noter les sources utilisées.\n\n4. Prendre des notes : écrire l'essentiel avec ses propres mots, en abrégé, sans recopier des pages entières.",
      "keyRule": "Comprendre : mots-clés, limites du sujet, questions essentielles. Chercher : sources variées et fiables. Trier : garder l'utile, vérifier, noter les sources.",
      "formulas": [],
      "workedExample": {
        "title": "Délimiter un sujet",
        "statement": "Sujet : « Les formes de la tricherie en milieu scolaire ». Quel contenu est hors sujet ?",
        "methodSteps": [
          "Le mot-clé est « formes » : il faut décrire les manières de tricher.",
          "L'histoire des examens en Côte d'Ivoire ne répond pas à cette question."
        ],
        "conclusion": "Parler de l'histoire des examens serait hors sujet."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les mots-clés",
          "stepTheme": "Les mots-clés",
          "stepBadge": "Les mots-clés",
          "paragraphText": "Pour comprendre un sujet, on repère ses mots-clés et on cherche leur sens précis.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p02_q1",
            "type": "mcq",
            "prompt": "Dans le sujet « Les formes de la tricherie en milieu scolaire », quel est le mot-clé qui indique ce qu'il faut présenter ?",
            "options": [
              "« les »",
              "« en »",
              "« formes »",
              "« de »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faut présenter les différentes manières de tricher."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le hors-sujet",
          "stepTheme": "Le hors-sujet",
          "stepBadge": "Le hors-sujet",
          "paragraphText": "Être hors sujet, c'est parler d'autre chose que ce que demande le sujet.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p02_q2",
            "type": "mcq",
            "prompt": "Pour le sujet « Les formes de la tricherie en milieu scolaire », quel contenu serait hors sujet ?",
            "options": [
              "L'usage du téléphone pendant les devoirs",
              "La copie sur le voisin",
              "Les antisèches cachées",
              "L'histoire de la construction des lycées"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les trois autres sont des formes de tricherie."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les formes de la tricherie",
          "stepTheme": "Les formes de la tricherie",
          "stepBadge": "Les formes de la tricherie",
          "paragraphText": "Formes de tricherie : copier sur un camarade, utiliser des antisèches, se servir du téléphone et des réseaux sociaux pendant un examen, faire circuler les sujets à l'avance.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p02_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces réponses décrit une forme de tricherie ?",
            "options": [
              "Réviser ses leçons chaque soir",
              "Poser une question au professeur en classe",
              "Utiliser son téléphone pendant un devoir",
              "Travailler en groupe sur un exercice autorisé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le téléphone pendant l'évaluation est une fraude."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Vérifier l'information",
          "stepTheme": "Vérifier l'information",
          "stepBadge": "Vérifier l'information",
          "paragraphText": "Sur internet, toutes les informations ne sont pas fiables : on les compare avec d'autres sources avant de les utiliser.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p02_q4",
            "type": "mcq",
            "prompt": "Que faut-il faire avec une information trouvée sur internet ?",
            "options": [
              "La recopier entièrement sans la lire",
              "La vérifier en la comparant à d'autres sources",
              "La croire tout de suite sans réfléchir",
              "La cacher soigneusement au professeur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Croiser les sources évite les erreurs."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Prendre des notes",
          "stepTheme": "Prendre des notes",
          "stepBadge": "Prendre des notes",
          "paragraphText": "On prend des notes avec ses propres mots, en abrégé, en gardant l'essentiel. On ne recopie pas des pages entières.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la bonne façon de prendre des notes ?",
            "options": [
              "Noter l'essentiel avec ses propres mots",
              "Recopier des pages entières",
              "Ne rien noter et tout retenir",
              "Photocopier tout le livre"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les notes doivent être courtes et personnelles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Noter les sources",
          "stepTheme": "Noter les sources",
          "stepBadge": "Noter les sources",
          "paragraphText": "On note toujours les sources utilisées (titre, auteur, site) pour pouvoir les citer et les retrouver.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p02_q6",
            "type": "mcq",
            "prompt": "Pourquoi faut-il noter les sources utilisées ?",
            "options": [
              "Pour pouvoir les citer et les vérifier",
              "Pour allonger l'exposé",
              "Pour impressionner le public",
              "Ce n'est jamais nécessaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Citer ses sources est une marque d'honnêteté."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Causes ou formes ?",
          "stepTheme": "Causes ou formes ?",
          "stepBadge": "Causes ou formes ?",
          "paragraphText": "Attention à ce que demande le sujet : « les formes de la tricherie » (comment on triche) n'est pas la même chose que « les causes de la tricherie » (pourquoi on triche).",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p02_q7",
            "type": "mcq",
            "prompt": "« Les élèves préfèrent la facilité au travail. » Pour le sujet « Les formes de la tricherie », cette idée est :",
            "options": [
              "Une forme de tricherie",
              "Une cause, pas une forme",
              "Une conclusion",
              "Une introduction"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle explique pourquoi on triche, pas comment."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p02_q1",
          "type": "mcq",
          "prompt": "Dans le sujet « Les formes de la tricherie en milieu scolaire », quel est le mot-clé qui indique ce qu'il faut présenter ?",
          "options": [
            "« les »",
            "« en »",
            "« formes »",
            "« de »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faut présenter les différentes manières de tricher."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p02_q2",
          "type": "mcq",
          "prompt": "Pour le sujet « Les formes de la tricherie en milieu scolaire », quel contenu serait hors sujet ?",
          "options": [
            "L'usage du téléphone pendant les devoirs",
            "La copie sur le voisin",
            "Les antisèches cachées",
            "L'histoire de la construction des lycées"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les trois autres sont des formes de tricherie."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p02_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces réponses décrit une forme de tricherie ?",
          "options": [
            "Réviser ses leçons chaque soir",
            "Poser une question au professeur en classe",
            "Utiliser son téléphone pendant un devoir",
            "Travailler en groupe sur un exercice autorisé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le téléphone pendant l'évaluation est une fraude."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p02_q4",
          "type": "mcq",
          "prompt": "Que faut-il faire avec une information trouvée sur internet ?",
          "options": [
            "La recopier entièrement sans la lire",
            "La vérifier en la comparant à d'autres sources",
            "La croire tout de suite sans réfléchir",
            "La cacher soigneusement au professeur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Croiser les sources évite les erreurs."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la bonne façon de prendre des notes ?",
          "options": [
            "Noter l'essentiel avec ses propres mots",
            "Recopier des pages entières",
            "Ne rien noter et tout retenir",
            "Photocopier tout le livre"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les notes doivent être courtes et personnelles."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p02_q6",
          "type": "mcq",
          "prompt": "Pourquoi faut-il noter les sources utilisées ?",
          "options": [
            "Pour pouvoir les citer et les vérifier",
            "Pour allonger l'exposé",
            "Pour impressionner le public",
            "Ce n'est jamais nécessaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Citer ses sources est une marque d'honnêteté."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p02_q7",
          "type": "mcq",
          "prompt": "« Les élèves préfèrent la facilité au travail. » Pour le sujet « Les formes de la tricherie », cette idée est :",
          "options": [
            "Une forme de tricherie",
            "Une cause, pas une forme",
            "Une conclusion",
            "Une introduction"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle explique pourquoi on triche, pas comment."
        }
      ]
    },
    {
      "id": "seconde_a_francais_sf_l02_expose_oral_p03",
      "order": 3,
      "title": "Organiser l'exposé",
      "summary": "Introduction, développement, conclusion.",
      "conceptExplanation": "L'exposé s'organise en trois parties.\n\n1. L'introduction :\n- présente le sujet (avec une phrase d'accroche si possible) ;\n- explique le problème qui justifie l'exposé ;\n- annonce le plan.\nExemple : « La tricherie touche de plus en plus nos établissements. Comment se manifeste-t-elle ? Nous verrons d'abord les formes traditionnelles, puis les formes modernes liées au numérique. »\n\n2. Le développement : on regroupe les informations par thèmes (selon leurs ressemblances) et on les hiérarchise (de la plus importante à la moins importante, ou dans un ordre logique). Chaque partie a un titre clair et des exemples précis.\n\n3. La conclusion :\n- fait le bilan de l'exposé ;\n- montre l'intérêt de l'étude ;\n- peut ouvrir sur une question plus large ou une solution.\n\nLe plan est souvent écrit au tableau ou projeté, pour aider le public à suivre.",
      "keyRule": "Introduction : présenter le sujet, le problème, annoncer le plan. Développement : regrouper et hiérarchiser. Conclusion : bilan, intérêt, ouverture.",
      "formulas": [],
      "workedExample": {
        "title": "Un plan d'exposé",
        "statement": "Propose un plan pour « Les formes de la tricherie en milieu scolaire ».",
        "methodSteps": [
          "I. Les formes traditionnelles : copie sur le voisin, antisèches.",
          "II. Les formes modernes : téléphone, réseaux sociaux, fuites de sujets."
        ],
        "conclusion": "Un plan en deux parties claires, du plus ancien au plus récent."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Trois parties",
          "stepTheme": "Trois parties",
          "stepBadge": "Trois parties",
          "paragraphText": "Un exposé s'organise en trois parties : l'introduction, le développement et la conclusion.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p03_q1",
            "type": "mcq",
            "prompt": "En combien de grandes parties s'organise un exposé ?",
            "options": [
              "Deux",
              "Cinq",
              "Trois",
              "Une seule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Introduction, développement, conclusion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L'introduction",
          "stepTheme": "L'introduction",
          "stepBadge": "L'introduction",
          "paragraphText": "L'introduction présente le sujet, explique le problème qui justifie l'exposé et annonce le plan.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p03_q2",
            "type": "mcq",
            "prompt": "Que doit faire l'introduction d'un exposé ?",
            "options": [
              "Faire le bilan de l'étude",
              "Répondre aux questions du public",
              "Donner tous les exemples",
              "Présenter le sujet et annoncer le plan"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le bilan, c'est le rôle de la conclusion."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le développement",
          "stepTheme": "Le développement",
          "stepBadge": "Le développement",
          "paragraphText": "Dans le développement, on regroupe les informations par thèmes et on les hiérarchise selon leur importance.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p03_q3",
            "type": "mcq",
            "prompt": "Comment organise-t-on les informations dans le développement ?",
            "options": [
              "On les présente au hasard",
              "On les lit dans l'ordre où on les a trouvées",
              "On les regroupe par thèmes et on les hiérarchise",
              "On n'en garde qu'une seule"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un développement organisé est plus facile à suivre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La conclusion",
          "stepTheme": "La conclusion",
          "stepBadge": "La conclusion",
          "paragraphText": "La conclusion fait le bilan de l'exposé, montre l'intérêt de l'étude et peut ouvrir sur une question plus large.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p03_q4",
            "type": "mcq",
            "prompt": "Quel est le rôle de la conclusion d'un exposé ?",
            "options": [
              "Annoncer le plan de l'exposé",
              "Présenter les membres du groupe",
              "Donner la liste des sources",
              "Faire le bilan et montrer l'intérêt de l'étude"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On termine en résumant et en élargissant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un plan clair",
          "stepTheme": "Un plan clair",
          "stepBadge": "Un plan clair",
          "paragraphText": "Pour « Les formes de la tricherie » :\nI. Les formes traditionnelles (copie, antisèches) ;\nII. Les formes modernes (téléphone, réseaux sociaux).",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p03_q5",
            "type": "mcq",
            "prompt": "Dans ce plan, où place-t-on « l'utilisation des réseaux sociaux » ?",
            "options": [
              "Dans la partie sur les formes modernes",
              "Dans la partie sur les formes traditionnelles",
              "Dans l'introduction uniquement",
              "Hors du plan, car c'est hors sujet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les réseaux sociaux sont une forme récente de fraude."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Afficher le plan",
          "stepTheme": "Afficher le plan",
          "stepBadge": "Afficher le plan",
          "paragraphText": "Écrire le plan au tableau ou le projeter aide le public à suivre l'exposé.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi écrire le plan au tableau pendant un exposé ?",
            "options": [
              "Pour remplir le tableau",
              "Pour aider le public à suivre",
              "Pour éviter de parler",
              "Pour cacher les notes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le public sait où il en est."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Annoncer le plan",
          "stepTheme": "Annoncer le plan",
          "stepBadge": "Annoncer le plan",
          "paragraphText": "Une introduction sans annonce du plan laisse le public perdu : il ne sait pas où va l'exposé.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p03_q7",
            "type": "mcq",
            "prompt": "Quel élément manque souvent dans une introduction ratée ?",
            "options": [
              "Le bilan final",
              "L'annonce du plan",
              "La liste des questions du public",
              "Les remerciements au professeur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'annonce du plan guide l'auditoire."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p03_q1",
          "type": "mcq",
          "prompt": "En combien de grandes parties s'organise un exposé ?",
          "options": [
            "Deux",
            "Cinq",
            "Trois",
            "Une seule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Introduction, développement, conclusion."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p03_q2",
          "type": "mcq",
          "prompt": "Que doit faire l'introduction d'un exposé ?",
          "options": [
            "Faire le bilan de l'étude",
            "Répondre aux questions du public",
            "Donner tous les exemples",
            "Présenter le sujet et annoncer le plan"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le bilan, c'est le rôle de la conclusion."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p03_q3",
          "type": "mcq",
          "prompt": "Comment organise-t-on les informations dans le développement ?",
          "options": [
            "On les présente au hasard",
            "On les lit dans l'ordre où on les a trouvées",
            "On les regroupe par thèmes et on les hiérarchise",
            "On n'en garde qu'une seule"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un développement organisé est plus facile à suivre."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p03_q4",
          "type": "mcq",
          "prompt": "Quel est le rôle de la conclusion d'un exposé ?",
          "options": [
            "Annoncer le plan de l'exposé",
            "Présenter les membres du groupe",
            "Donner la liste des sources",
            "Faire le bilan et montrer l'intérêt de l'étude"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On termine en résumant et en élargissant."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p03_q5",
          "type": "mcq",
          "prompt": "Dans ce plan, où place-t-on « l'utilisation des réseaux sociaux » ?",
          "options": [
            "Dans la partie sur les formes modernes",
            "Dans la partie sur les formes traditionnelles",
            "Dans l'introduction uniquement",
            "Hors du plan, car c'est hors sujet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les réseaux sociaux sont une forme récente de fraude."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi écrire le plan au tableau pendant un exposé ?",
          "options": [
            "Pour remplir le tableau",
            "Pour aider le public à suivre",
            "Pour éviter de parler",
            "Pour cacher les notes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le public sait où il en est."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p03_q7",
          "type": "mcq",
          "prompt": "Quel élément manque souvent dans une introduction ratée ?",
          "options": [
            "Le bilan final",
            "L'annonce du plan",
            "La liste des questions du public",
            "Les remerciements au professeur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'annonce du plan guide l'auditoire."
        }
      ]
    },
    {
      "id": "seconde_a_francais_sf_l02_expose_oral_p04",
      "order": 4,
      "title": "Préparer ses supports",
      "summary": "Notes, fiches et supports visuels.",
      "conceptExplanation": "Pour présenter sans lire, on prépare des supports.\n\n1. Les fiches de notes : on y écrit les idées principales en mots-clés, avec le plan et les exemples ; on numérote les fiches. On ne rédige pas tout le texte, car on serait tenté de le lire.\n\n2. Les supports visuels : plan au tableau, affiche, carte, schéma, photos, diaporama. Ils doivent être lisibles (écriture grande, peu de texte) et utiles (illustrer une idée, pas décorer).\n\n3. Le document à retenir : en équipe, on rédige une courte fiche de synthèse de l'essentiel, à distribuer ou à écrire au tableau.\n\n4. La gestion du temps : on calcule le temps de chaque partie pour respecter le temps imparti.",
      "keyRule": "Fiches en mots-clés (ne pas tout rédiger), supports visuels lisibles et utiles, fiche de synthèse, temps calculé pour chaque partie.",
      "formulas": [],
      "workedExample": {
        "title": "Une bonne fiche",
        "statement": "Compare : une fiche qui contient tout le texte rédigé, une fiche avec des mots-clés et des exemples. Laquelle choisir ?",
        "methodSteps": [
          "Le texte rédigé pousse à lire, sans regarder le public.",
          "Les mots-clés aident à parler naturellement."
        ],
        "conclusion": "On choisit la fiche en mots-clés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Des mots-clés",
          "stepTheme": "Des mots-clés",
          "stepBadge": "Des mots-clés",
          "paragraphText": "Sur les fiches, on écrit les idées en mots-clés, avec le plan et les exemples, sans rédiger tout le texte.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p04_q1",
            "type": "mcq",
            "prompt": "Que doit-on écrire sur ses fiches de notes ?",
            "options": [
              "Des mots-clés, le plan et les exemples",
              "Tout le texte, mot à mot",
              "Seulement le titre de l'exposé",
              "Les noms des autres groupes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les mots-clés aident à parler sans lire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Ne pas lire",
          "stepTheme": "Ne pas lire",
          "stepBadge": "Ne pas lire",
          "paragraphText": "Si l'on rédige tout le texte, on est tenté de le lire, sans regarder le public : l'exposé devient ennuyeux.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p04_q2",
            "type": "mcq",
            "prompt": "Pourquoi ne faut-il pas rédiger tout son exposé sur ses fiches ?",
            "options": [
              "Parce que le papier coûte cher",
              "Parce que le professeur l'interdit toujours",
              "Parce que les fiches seraient trop légères",
              "Parce qu'on serait tenté de lire au lieu de parler"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Lire coupe le contact avec le public."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les supports visuels",
          "stepTheme": "Les supports visuels",
          "stepBadge": "Les supports visuels",
          "paragraphText": "Supports visuels possibles : plan au tableau, affiche, carte, schéma, photos, diaporama.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p04_q3",
            "type": "mcq",
            "prompt": "Lequel de ces éléments est un support visuel pour un exposé ?",
            "options": [
              "Une fiche de mots-clés dans la poche",
              "Un chronomètre",
              "Une carte affichée au tableau",
              "Une liste de présence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le public voit la carte et comprend mieux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Lisible et utile",
          "stepTheme": "Lisible et utile",
          "stepBadge": "Lisible et utile",
          "paragraphText": "Un support visuel doit être lisible (grande écriture, peu de texte) et utile (illustrer une idée, pas seulement décorer).",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p04_q4",
            "type": "mcq",
            "prompt": "Quelle qualité doit avoir une diapositive de diaporama ?",
            "options": [
              "Contenir le plus de texte possible",
              "Être écrite en tout petit",
              "Être lisible, avec peu de texte",
              "N'avoir aucun lien avec le sujet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Trop de texte empêche d'écouter l'orateur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La fiche de synthèse",
          "stepTheme": "La fiche de synthèse",
          "stepBadge": "La fiche de synthèse",
          "paragraphText": "La fiche de synthèse résume l'essentiel à retenir de l'exposé ; on la rédige en équipe et on la distribue ou on l'écrit au tableau.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p04_q5",
            "type": "mcq",
            "prompt": "À quoi sert la fiche de synthèse d'un exposé ?",
            "options": [
              "À résumer l'essentiel pour le public",
              "À remplacer toute la présentation orale",
              "À noter les questions des camarades",
              "À lister les absents"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le public garde une trace claire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Gérer le temps",
          "stepTheme": "Gérer le temps",
          "stepBadge": "Gérer le temps",
          "paragraphText": "On calcule le temps de chaque partie pour respecter la durée prévue. Exemple : 15 minutes = 2 min d'introduction, 11 min de développement, 2 min de conclusion.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p04_q6",
            "type": "mcq",
            "prompt": "Pour un exposé de 15 minutes, quelle répartition est la plus équilibrée ?",
            "options": [
              "10 min, 3 min, 2 min",
              "1 min, 1 min, 13 min",
              "5 min, 0 min, 10 min",
              "2 min, 11 min, 2 min"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le développement doit occuper la plus grande partie."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Décorer n'est pas illustrer",
          "stepTheme": "Décorer n'est pas illustrer",
          "stepBadge": "Décorer n'est pas illustrer",
          "paragraphText": "Une belle image sans lien avec le sujet ne sert à rien : un support doit éclairer une idée de l'exposé.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p04_q7",
            "type": "mcq",
            "prompt": "Pour un exposé sur la tricherie, quel support est le plus utile ?",
            "options": [
              "Une photo de paysage de vacances",
              "Un tableau des formes de tricherie",
              "Le logo d'une équipe de football",
              "Un dessin de fleur décoratif"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le support doit servir le contenu."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p04_q1",
          "type": "mcq",
          "prompt": "Que doit-on écrire sur ses fiches de notes ?",
          "options": [
            "Des mots-clés, le plan et les exemples",
            "Tout le texte, mot à mot",
            "Seulement le titre de l'exposé",
            "Les noms des autres groupes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les mots-clés aident à parler sans lire."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p04_q2",
          "type": "mcq",
          "prompt": "Pourquoi ne faut-il pas rédiger tout son exposé sur ses fiches ?",
          "options": [
            "Parce que le papier coûte cher",
            "Parce que le professeur l'interdit toujours",
            "Parce que les fiches seraient trop légères",
            "Parce qu'on serait tenté de lire au lieu de parler"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Lire coupe le contact avec le public."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p04_q3",
          "type": "mcq",
          "prompt": "Lequel de ces éléments est un support visuel pour un exposé ?",
          "options": [
            "Une fiche de mots-clés dans la poche",
            "Un chronomètre",
            "Une carte affichée au tableau",
            "Une liste de présence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le public voit la carte et comprend mieux."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p04_q4",
          "type": "mcq",
          "prompt": "Quelle qualité doit avoir une diapositive de diaporama ?",
          "options": [
            "Contenir le plus de texte possible",
            "Être écrite en tout petit",
            "Être lisible, avec peu de texte",
            "N'avoir aucun lien avec le sujet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Trop de texte empêche d'écouter l'orateur."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p04_q5",
          "type": "mcq",
          "prompt": "À quoi sert la fiche de synthèse d'un exposé ?",
          "options": [
            "À résumer l'essentiel pour le public",
            "À remplacer toute la présentation orale",
            "À noter les questions des camarades",
            "À lister les absents"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le public garde une trace claire."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p04_q6",
          "type": "mcq",
          "prompt": "Pour un exposé de 15 minutes, quelle répartition est la plus équilibrée ?",
          "options": [
            "10 min, 3 min, 2 min",
            "1 min, 1 min, 13 min",
            "5 min, 0 min, 10 min",
            "2 min, 11 min, 2 min"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le développement doit occuper la plus grande partie."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p04_q7",
          "type": "mcq",
          "prompt": "Pour un exposé sur la tricherie, quel support est le plus utile ?",
          "options": [
            "Une photo de paysage de vacances",
            "Un tableau des formes de tricherie",
            "Le logo d'une équipe de football",
            "Un dessin de fleur décoratif"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le support doit servir le contenu."
        }
      ]
    },
    {
      "id": "seconde_a_francais_sf_l02_expose_oral_p05",
      "order": 5,
      "title": "Présenter devant un public",
      "summary": "Les techniques de communication orale.",
      "conceptExplanation": "Pour réussir la présentation d'un exposé, il faut soigner :\n\n1. La présentation physique : être présentable et bien vêtu, se tenir droit, face au public.\n\n2. La voix : bien articuler, avoir une bonne diction, parler assez fort pour être entendu au fond de la salle, à un débit ni trop rapide ni trop lent, varier le ton pour éviter la monotonie.\n\n3. Le regard et les gestes : regarder le public (pas seulement le professeur ou ses fiches), utiliser des gestes simples et naturels, éviter de tourner le dos ou de se balancer.\n\n4. Le langage : employer un niveau de langue courant ou soutenu, des phrases simples, expliquer les mots difficiles, utiliser des connecteurs pour guider l'auditoire (d'abord, ensuite, enfin).\n\n5. Le temps : respecter le temps imparti.\n\n6. Le dialogue avec le public : être courtois envers ceux qui demandent la parole, écouter les questions jusqu'au bout, répondre calmement ; si l'on ne sait pas, le reconnaître honnêtement.",
      "keyRule": "Être présentable, articuler et parler fort, regarder le public, gestes naturels, langage clair avec connecteurs, respecter le temps, répondre courtoisement aux questions.",
      "formulas": [],
      "workedExample": {
        "title": "Corriger un exposant",
        "statement": "Kouamé lit ses notes à voix basse, sans lever les yeux, et dépasse le temps de dix minutes. Que lui conseiller ?",
        "methodSteps": [
          "Parler plus fort et bien articuler.",
          "Regarder le public en s'appuyant sur des mots-clés.",
          "S'entraîner avec un chronomètre."
        ],
        "conclusion": "Voix, regard et gestion du temps sont à améliorer."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Être présentable",
          "stepTheme": "Être présentable",
          "stepBadge": "Être présentable",
          "paragraphText": "L'exposant doit être présentable et bien vêtu, se tenir droit et face au public.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p05_q1",
            "type": "mcq",
            "prompt": "Quelle attitude convient à un exposant ?",
            "options": [
              "Tourner le dos à la classe",
              "Se tenir droit, face au public",
              "S'asseoir sur la table",
              "Mâcher un chewing-gum"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La posture inspire confiance."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La diction",
          "stepTheme": "La diction",
          "stepBadge": "La diction",
          "paragraphText": "La diction est la manière de prononcer les mots. Il faut bien articuler pour être compris de tous.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p05_q2",
            "type": "mcq",
            "prompt": "Que signifie « avoir une bonne diction » ?",
            "options": [
              "Connaître beaucoup de mots rares",
              "Parler le plus vite possible",
              "Lire ses notes à voix basse",
              "Prononcer les mots clairement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une bonne diction rend le discours compréhensible."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La voix",
          "stepTheme": "La voix",
          "stepBadge": "La voix",
          "paragraphText": "On parle assez fort pour être entendu au fond de la salle, à un débit modéré, en variant le ton.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p05_q3",
            "type": "mcq",
            "prompt": "Comment doit être le débit de parole pendant un exposé ?",
            "options": [
              "Ni trop rapide ni trop lent",
              "Le plus rapide possible",
              "Très lent et monotone",
              "Variable au hasard"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un débit modéré permet au public de suivre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le regard",
          "stepTheme": "Le regard",
          "stepBadge": "Le regard",
          "paragraphText": "On regarde l'ensemble du public, et pas seulement le professeur ou ses fiches.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p05_q4",
            "type": "mcq",
            "prompt": "Où l'exposant doit-il principalement porter son regard ?",
            "options": [
              "Uniquement sur ses fiches",
              "Uniquement sur le professeur",
              "Sur l'ensemble du public",
              "Vers la fenêtre"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le regard maintient l'attention de l'auditoire."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le temps imparti",
          "stepTheme": "Le temps imparti",
          "stepBadge": "Le temps imparti",
          "paragraphText": "Il faut respecter le temps imparti : un exposé trop long lasse le public et empiète sur les autres groupes.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi faut-il respecter le temps imparti ?",
            "options": [
              "Pour finir avant d'avoir tout dit",
              "Parce que le temps n'a aucune importance",
              "Pour pouvoir lire plus lentement",
              "Pour ne pas lasser le public ni gêner les autres"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La maîtrise du temps fait partie de la réussite."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La courtoisie",
          "stepTheme": "La courtoisie",
          "stepBadge": "La courtoisie",
          "paragraphText": "On reste courtois envers ceux qui demandent la parole : on écoute la question jusqu'au bout et on répond calmement.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p05_q6",
            "type": "mcq",
            "prompt": "Comment réagir quand un camarade pose une question pendant l'exposé ?",
            "options": [
              "L'ignorer complètement et continuer",
              "Se moquer ouvertement de sa question",
              "L'écouter jusqu'au bout et répondre poliment",
              "Lui demander sèchement de se taire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La courtoisie est une règle de la communication orale."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Reconnaître ce qu'on ne sait pas",
          "stepTheme": "Reconnaître ce qu'on ne sait pas",
          "stepBadge": "Reconnaître ce qu'on ne sait pas",
          "paragraphText": "Si l'on ne connaît pas la réponse à une question, il vaut mieux le reconnaître honnêtement et proposer de chercher, plutôt qu'inventer.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p05_q7",
            "type": "mcq",
            "prompt": "Que faire si l'on ne connaît pas la réponse à une question du public ?",
            "options": [
              "Inventer une réponse rapidement",
              "Le reconnaître et proposer de chercher",
              "Changer de sujet sans répondre",
              "Accuser le camarade de mal poser la question"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'honnêteté renforce la crédibilité."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p05_q1",
          "type": "mcq",
          "prompt": "Quelle attitude convient à un exposant ?",
          "options": [
            "Tourner le dos à la classe",
            "Se tenir droit, face au public",
            "S'asseoir sur la table",
            "Mâcher un chewing-gum"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La posture inspire confiance."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p05_q2",
          "type": "mcq",
          "prompt": "Que signifie « avoir une bonne diction » ?",
          "options": [
            "Connaître beaucoup de mots rares",
            "Parler le plus vite possible",
            "Lire ses notes à voix basse",
            "Prononcer les mots clairement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une bonne diction rend le discours compréhensible."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p05_q3",
          "type": "mcq",
          "prompt": "Comment doit être le débit de parole pendant un exposé ?",
          "options": [
            "Ni trop rapide ni trop lent",
            "Le plus rapide possible",
            "Très lent et monotone",
            "Variable au hasard"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un débit modéré permet au public de suivre."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p05_q4",
          "type": "mcq",
          "prompt": "Où l'exposant doit-il principalement porter son regard ?",
          "options": [
            "Uniquement sur ses fiches",
            "Uniquement sur le professeur",
            "Sur l'ensemble du public",
            "Vers la fenêtre"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le regard maintient l'attention de l'auditoire."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi faut-il respecter le temps imparti ?",
          "options": [
            "Pour finir avant d'avoir tout dit",
            "Parce que le temps n'a aucune importance",
            "Pour pouvoir lire plus lentement",
            "Pour ne pas lasser le public ni gêner les autres"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La maîtrise du temps fait partie de la réussite."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p05_q6",
          "type": "mcq",
          "prompt": "Comment réagir quand un camarade pose une question pendant l'exposé ?",
          "options": [
            "L'ignorer complètement et continuer",
            "Se moquer ouvertement de sa question",
            "L'écouter jusqu'au bout et répondre poliment",
            "Lui demander sèchement de se taire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La courtoisie est une règle de la communication orale."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p05_q7",
          "type": "mcq",
          "prompt": "Que faire si l'on ne connaît pas la réponse à une question du public ?",
          "options": [
            "Inventer une réponse rapidement",
            "Le reconnaître et proposer de chercher",
            "Changer de sujet sans répondre",
            "Accuser le camarade de mal poser la question"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'honnêteté renforce la crédibilité."
        }
      ]
    },
    {
      "id": "seconde_a_francais_sf_l02_expose_oral_p06",
      "order": 6,
      "title": "Évaluer un exposé",
      "summary": "Les critères d'un bon exposé.",
      "conceptExplanation": "On évalue un exposé selon plusieurs critères :\n\n1. Le contenu : le sujet est-il bien compris et traité ? Les informations sont-elles justes, précises, illustrées d'exemples ? Les sources sont-elles citées ?\n\n2. L'organisation : y a-t-il une introduction (sujet, problème, plan), un développement en parties claires, une conclusion (bilan, intérêt) ? Les connecteurs guident-ils l'auditoire ?\n\n3. La présentation orale : voix audible, bonne diction, regard vers le public, gestes naturels, exposé dit et non lu.\n\n4. Les supports : plan affiché, supports visuels lisibles et utiles, fiche de synthèse.\n\n5. Le travail d'équipe : chaque membre intervient, les transitions entre exposants sont fluides.\n\n6. Le temps et les échanges : temps respecté, réponses claires et courtoises aux questions.\n\nApprendre à évaluer les exposés des autres aide à améliorer les siens : on peut utiliser une grille d'observation.",
      "keyRule": "Critères : contenu (juste, précis, sources), organisation (intro, développement, conclusion), oral (voix, regard, pas de lecture), supports, équipe, temps et réponses.",
      "formulas": [],
      "workedExample": {
        "title": "Utiliser une grille",
        "statement": "Un groupe a un contenu riche mais lit ses notes sans regarder la classe et dépasse le temps. Quels critères sont réussis, lesquels sont à améliorer ?",
        "methodSteps": [
          "Réussi : le contenu.",
          "À améliorer : la présentation orale (lecture, regard) et le respect du temps."
        ],
        "conclusion": "Une grille aide à donner un avis juste et précis."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le contenu",
          "stepTheme": "Le contenu",
          "stepBadge": "Le contenu",
          "paragraphText": "Un bon contenu traite le sujet, avec des informations justes, précises et illustrées d'exemples.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p06_q1",
            "type": "mcq",
            "prompt": "Lequel de ces critères concerne le contenu d'un exposé ?",
            "options": [
              "Des informations justes et des exemples précis",
              "Une voix bien audible",
              "Un regard dirigé vers le public",
              "Le respect du temps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le contenu, c'est ce que l'on dit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'organisation",
          "stepTheme": "L'organisation",
          "stepBadge": "L'organisation",
          "paragraphText": "Un exposé bien organisé a une introduction, un développement en parties claires et une conclusion.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p06_q2",
            "type": "mcq",
            "prompt": "Qu'est-ce qui montre qu'un exposé est bien organisé ?",
            "options": [
              "Des parties claires annoncées dans l'introduction",
              "Une présentation très longue",
              "Beaucoup d'images décoratives",
              "Un seul exposant qui parle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'organisation guide le public."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'oral",
          "stepTheme": "L'oral",
          "stepBadge": "L'oral",
          "paragraphText": "À l'oral, on évalue la voix, la diction, le regard, les gestes, et le fait que l'exposé soit dit et non lu.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p06_q3",
            "type": "mcq",
            "prompt": "Quel défaut de présentation orale est le plus fréquent ?",
            "options": [
              "Parler assez fort",
              "Lire ses notes sans regarder le public",
              "Regarder toute la classe",
              "Respecter le temps"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La lecture coupe le contact avec l'auditoire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le travail d'équipe",
          "stepTheme": "Le travail d'équipe",
          "stepBadge": "Le travail d'équipe",
          "paragraphText": "Dans un exposé de groupe, chaque membre intervient et les passages de parole sont fluides.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p06_q4",
            "type": "mcq",
            "prompt": "Qu'est-ce qui montre un bon travail d'équipe pendant un exposé ?",
            "options": [
              "Un seul élève parle pendant que les autres regardent",
              "Les membres se coupent la parole",
              "Chaque membre intervient avec des transitions fluides",
              "Chacun présente un sujet différent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exposé de groupe doit être cohérent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La grille d'observation",
          "stepTheme": "La grille d'observation",
          "stepBadge": "La grille d'observation",
          "paragraphText": "Une grille d'observation liste les critères (contenu, organisation, oral, supports, équipe, temps) pour évaluer un exposé de façon juste.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p06_q5",
            "type": "mcq",
            "prompt": "À quoi sert une grille d'observation ?",
            "options": [
              "À noter les absences de la classe",
              "À dessiner le plan de la salle",
              "À remplacer l'exposé",
              "À évaluer un exposé selon des critères précis"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les critères rendent l'évaluation objective."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un avis équilibré",
          "stepTheme": "Un avis équilibré",
          "stepBadge": "Un avis équilibré",
          "paragraphText": "Un bon avis souligne les réussites et propose des améliorations : « Le contenu est riche ; il faudrait regarder davantage le public et respecter le temps. »",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p06_q6",
            "type": "mcq",
            "prompt": "Quel avis sur un exposé est le plus utile ?",
            "options": [
              "« C'était vraiment nul, voilà tout. »",
              "« C'était bien, je n'ai rien à dire. »",
              "« Le contenu est riche, mais regardez plus le public. »",
              "« Je n'ai rien écouté de votre exposé. »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un avis précis aide à progresser."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Évaluer pour progresser",
          "stepTheme": "Évaluer pour progresser",
          "stepBadge": "Évaluer pour progresser",
          "paragraphText": "Évaluer les exposés des autres aide à améliorer les siens : on repère ce qui fonctionne et ce qu'il faut éviter.",
          "exercise": {
            "id": "seconde_a_francais_sf_l02_expose_oral_p06_q7",
            "type": "mcq",
            "prompt": "Pourquoi est-il utile d'évaluer les exposés de ses camarades ?",
            "options": [
              "Pour se moquer des autres groupes",
              "Pour éviter de préparer le sien",
              "Pour copier leur sujet",
              "Pour améliorer ses propres exposés"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'observation est une source d'apprentissage."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p06_q1",
          "type": "mcq",
          "prompt": "Lequel de ces critères concerne le contenu d'un exposé ?",
          "options": [
            "Des informations justes et des exemples précis",
            "Une voix bien audible",
            "Un regard dirigé vers le public",
            "Le respect du temps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le contenu, c'est ce que l'on dit."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p06_q2",
          "type": "mcq",
          "prompt": "Qu'est-ce qui montre qu'un exposé est bien organisé ?",
          "options": [
            "Des parties claires annoncées dans l'introduction",
            "Une présentation très longue",
            "Beaucoup d'images décoratives",
            "Un seul exposant qui parle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'organisation guide le public."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p06_q3",
          "type": "mcq",
          "prompt": "Quel défaut de présentation orale est le plus fréquent ?",
          "options": [
            "Parler assez fort",
            "Lire ses notes sans regarder le public",
            "Regarder toute la classe",
            "Respecter le temps"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La lecture coupe le contact avec l'auditoire."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p06_q4",
          "type": "mcq",
          "prompt": "Qu'est-ce qui montre un bon travail d'équipe pendant un exposé ?",
          "options": [
            "Un seul élève parle pendant que les autres regardent",
            "Les membres se coupent la parole",
            "Chaque membre intervient avec des transitions fluides",
            "Chacun présente un sujet différent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exposé de groupe doit être cohérent."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p06_q5",
          "type": "mcq",
          "prompt": "À quoi sert une grille d'observation ?",
          "options": [
            "À noter les absences de la classe",
            "À dessiner le plan de la salle",
            "À remplacer l'exposé",
            "À évaluer un exposé selon des critères précis"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les critères rendent l'évaluation objective."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p06_q6",
          "type": "mcq",
          "prompt": "Quel avis sur un exposé est le plus utile ?",
          "options": [
            "« C'était vraiment nul, voilà tout. »",
            "« C'était bien, je n'ai rien à dire. »",
            "« Le contenu est riche, mais regardez plus le public. »",
            "« Je n'ai rien écouté de votre exposé. »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un avis précis aide à progresser."
        },
        {
          "id": "seconde_a_francais_sf_l02_expose_oral_p06_q7",
          "type": "mcq",
          "prompt": "Pourquoi est-il utile d'évaluer les exposés de ses camarades ?",
          "options": [
            "Pour se moquer des autres groupes",
            "Pour éviter de préparer le sien",
            "Pour copier leur sujet",
            "Pour améliorer ses propres exposés"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'observation est une source d'apprentissage."
        }
      ]
    }
  ]
};
