import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « L'introduction de la dissertation philosophique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=3724
export const PHILO_1ERE_L05_INTRODUCTION_DISSERTATION: CurriculumChapter = {
  "id": "premiere_philo_methodologie_l05_introduction_dissertation",
  "subjectId": "philosophie",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2",
    "premiere_c",
    "premiere_d"
  ],
  "order": 5,
  "title": "Leçon 5 : L'introduction de la dissertation philosophique",
  "summary": "La leçon apprend à rédiger l’introduction de la dissertation philosophique : une amorce, l’énoncé du problème et les aspects du problème, agencés de façon cohérente.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=3724",
  "points": [
    {
      "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01",
      "order": 1,
      "title": "Définir l’introduction de la dissertation",
      "summary": "Comprendre que l’introduction est l’étape initiale qui pose clairement le problème du sujet.",
      "conceptExplanation": "L’introduction est l’étape initiale de la rédaction de la dissertation philosophique. Elle consiste à poser clairement le problème du sujet, qui est la difficulté intellectuelle à surmonter.\nL’introduction se compose d’une amorce, de l’énoncé du problème et des aspects du problème.\nDans la situation d’apprentissage, à la suite du cours sur l’essai de problématisation, les élèves de la classe de Première A1 du lycée municipal 1 de Bonoua sont amenés à rédiger l’introduction de la dissertation philosophique et s’informent sur ses éléments constitutifs, la manière de les agencer et de construire celle-ci.",
      "keyRule": "Étape initiale, problème clairement posé : l’introduction ouvre la dissertation, elle ne la développe pas.",
      "formulas": [],
      "workedExample": {
        "title": "Situer l’introduction après l’essai de problématisation",
        "statement": "Pourquoi les élèves de Bonoua rédigent-ils une introduction après le cours sur l’essai de problématisation ?",
        "methodSteps": [
          "L’essai de problématisation a dégagé le sens du sujet, son problème et ses aspects.",
          "L’introduction est l’étape initiale de la rédaction de la dissertation philosophique.",
          "Elle pose clairement le problème du sujet, difficulté intellectuelle à surmonter, à partir des éléments dégagés par l’essai."
        ],
        "conclusion": "L’introduction rédige, en ouverture de la dissertation, le problème préparé par l’essai de problématisation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’étape initiale de la dissertation",
          "stepTheme": "L’étape initiale de la dissertation",
          "stepBadge": "L’étape initiale de la dissertation",
          "paragraphText": "• Introduction de la dissertation : étape initiale de la rédaction de la dissertation philosophique.\nElle consiste à poser clairement le problème du sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q1",
            "type": "mcq",
            "prompt": "L’introduction de la dissertation philosophique est :",
            "options": [
              "La dernière partie de la dissertation",
              "L’étape initiale de la rédaction de la dissertation philosophique",
              "La phase préparatoire du sujet",
              "Le bilan de la discussion"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Étape initiale de la rédaction : définition de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Poser clairement le problème",
          "stepTheme": "Poser clairement le problème",
          "stepBadge": "Poser clairement le problème",
          "paragraphText": "L’introduction consiste à poser clairement le problème du sujet.\nLe problème est la difficulté intellectuelle à surmonter, dont la résolution va susciter une argumentation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q2",
            "type": "mcq",
            "prompt": "L’introduction consiste à :",
            "options": [
              "Prendre position sur l’intérêt du texte",
              "Développer les axes d’analyse",
              "Poser clairement le problème du sujet",
              "Conclure le débat engagé"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Poser clairement le problème : fonction de l’introduction selon la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Trois éléments constitutifs",
          "stepTheme": "Trois éléments constitutifs",
          "stepBadge": "Trois éléments constitutifs",
          "paragraphText": "L’introduction se compose de trois éléments.\n• Une amorce\n• L’énoncé du problème\n• Les aspects du problème",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q3",
            "type": "mcq",
            "prompt": "L’introduction de la dissertation se compose :",
            "options": [
              "Du bilan, de l’opinion et de l’ouverture",
              "Du thème, de la thèse et de la structure seulement",
              "Des définitions des termes essentiels",
              "D’une amorce, de l’énoncé du problème et des aspects du problème"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Amorce, problème et aspects : les trois éléments énumérés par la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Confondre avec l’introduction du commentaire",
          "stepTheme": "Confondre avec l’introduction du commentaire",
          "stepBadge": "Confondre avec l’introduction du commentaire",
          "paragraphText": "Piège : recopier les éléments de l’introduction du commentaire de texte, thème, problème, thèse et structure logique.\nPour la dissertation, la leçon énumère l’amorce, l’énoncé du problème et les aspects du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q4",
            "type": "mcq",
            "prompt": "Quelle liste correspond à l’introduction de la dissertation, selon cette leçon ?",
            "options": [
              "Amorce, énoncé du problème, aspects du problème",
              "Thème, antithèse, intention, enjeu",
              "Bilan, prise de position personnelle",
              "Étude parcellaire, reformulation, axes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les trois éléments propres à l’introduction de la dissertation dans cette leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La situation de Bonoua",
          "stepTheme": "La situation de Bonoua",
          "stepBadge": "La situation de Bonoua",
          "paragraphText": "Exemple : les élèves de Première A1 du lycée municipal 1 de Bonoua, à la suite du cours sur l’essai de problématisation.\nIls s’informent sur les éléments constitutifs de l’introduction, la manière de les agencer et de construire celle-ci.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q5",
            "type": "mcq",
            "prompt": "Dans la situation d’apprentissage, le cours précédent celui-ci porte sur :",
            "options": [
              "La conclusion du commentaire",
              "L’essai de problématisation",
              "La méthode de lecture de texte",
              "La critique du texte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "À la suite du cours sur l’essai de problématisation, dit la situation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q1",
          "type": "mcq",
          "prompt": "L’introduction de la dissertation philosophique est :",
          "options": [
            "La dernière partie de la dissertation",
            "L’étape initiale de la rédaction de la dissertation philosophique",
            "La phase préparatoire du sujet",
            "Le bilan de la discussion"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Étape initiale de la rédaction : définition de la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q2",
          "type": "mcq",
          "prompt": "L’introduction consiste à :",
          "options": [
            "Prendre position sur l’intérêt du texte",
            "Développer les axes d’analyse",
            "Poser clairement le problème du sujet",
            "Conclure le débat engagé"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Poser clairement le problème : fonction de l’introduction selon la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q3",
          "type": "mcq",
          "prompt": "L’introduction de la dissertation se compose :",
          "options": [
            "Du bilan, de l’opinion et de l’ouverture",
            "Du thème, de la thèse et de la structure seulement",
            "Des définitions des termes essentiels",
            "D’une amorce, de l’énoncé du problème et des aspects du problème"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Amorce, problème et aspects : les trois éléments énumérés par la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q4",
          "type": "mcq",
          "prompt": "Quelle liste correspond à l’introduction de la dissertation, selon cette leçon ?",
          "options": [
            "Amorce, énoncé du problème, aspects du problème",
            "Thème, antithèse, intention, enjeu",
            "Bilan, prise de position personnelle",
            "Étude parcellaire, reformulation, axes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les trois éléments propres à l’introduction de la dissertation dans cette leçon."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p01_q5",
          "type": "mcq",
          "prompt": "Dans la situation d’apprentissage, le cours précédent celui-ci porte sur :",
          "options": [
            "La conclusion du commentaire",
            "L’essai de problématisation",
            "La méthode de lecture de texte",
            "La critique du texte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "À la suite du cours sur l’essai de problématisation, dit la situation."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02",
      "order": 2,
      "title": "L’amorce ou généralité",
      "summary": "Comprendre qu’une amorce situe le sujet par une idée, un constat, une définition ou des idées opposées.",
      "conceptExplanation": "L’amorce peut être une idée, un constat, une définition ou des idées opposées qui situe le sujet.\nLa leçon la nomme aussi généralité : l’amorce ou la généralité.\nDans l’exemple d’introduction corrigée sur le sujet « Doit-on condamner le progrès technique ? », l’amorce est un constat : l’expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie, ce qui semble confirmer l’idée selon laquelle l’avenir appartient à la science et à la technique, avant de relever que cette évolution s’accompagne souvent d’une réelle menace pour l’humanité entière.",
      "keyRule": "L’amorce situe le sujet : choisis une idée, un constat, une définition ou des idées opposées en rapport avec lui.",
      "formulas": [],
      "workedExample": {
        "title": "Reconnaître l’amorce de l’exemple corrigé",
        "statement": "Dans l’exemple d’introduction sur le progrès technique, quel type d’amorce est utilisé et que contient-elle ?",
        "methodSteps": [
          "L’amorce est un constat tiré de l’expérience quotidienne.",
          "Contenu : le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie.",
          "Elle situe le sujet en évoquant l’idée que l’avenir appartient à la science et à la technique, puis la menace qui accompagne cette évolution."
        ],
        "conclusion": "L’amorce de l’exemple est un constat qui situe le sujet avant l’énoncé du problème."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qui situe le sujet",
          "stepTheme": "Ce qui situe le sujet",
          "stepBadge": "Ce qui situe le sujet",
          "paragraphText": "• Amorce : idée, constat, définition ou idées opposées qui situe le sujet.\nLa leçon l’appelle aussi la généralité.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q1",
            "type": "mcq",
            "prompt": "L’amorce peut être :",
            "options": [
              "Une idée, un constat, une définition ou des idées opposées qui situe le sujet",
              "Le bilan du développement",
              "Une prise de position personnelle",
              "Un aspect du problème"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Quatre formes possibles, une même fonction : situer le sujet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Amorce ou généralité",
          "stepTheme": "Amorce ou généralité",
          "stepBadge": "Amorce ou généralité",
          "paragraphText": "La leçon intitule cette partie « L’amorce ou la généralité ».\nLes deux termes désignent donc le même premier élément de l’introduction.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q2",
            "type": "mcq",
            "prompt": "Dans la leçon, la généralité désigne :",
            "options": [
              "Les aspects du problème",
              "L’amorce",
              "Le problème du sujet",
              "La structuration des axes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Amorce ou généralité : le titre de la partie les donne comme équivalents."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le constat de l’expérience quotidienne",
          "stepTheme": "Le constat de l’expérience quotidienne",
          "stepBadge": "Le constat de l’expérience quotidienne",
          "paragraphText": "Exemple corrigé : l’introduction sur le progrès technique s’ouvre sur l’expérience quotidienne.\nElle révèle le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q3",
            "type": "mcq",
            "prompt": "L’amorce de l’exemple corrigé repose sur :",
            "options": [
              "Une définition du progrès technique",
              "Des idées opposées sur la religion",
              "Un constat de l’expérience quotidienne sur le progrès des sciences et techniques",
              "Le bilan de la discussion"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est un constat, l’une des quatre formes d’amorce possibles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Une amorce sans rapport avec le sujet",
          "stepTheme": "Une amorce sans rapport avec le sujet",
          "stepBadge": "Une amorce sans rapport avec le sujet",
          "paragraphText": "Piège : ouvrir par une idée générale sans lien avec le sujet.\nL’amorce doit situer le sujet : chez l’exemple corrigé, le constat sur les sciences et techniques conduit directement au problème de la technique nuisible.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q4",
            "type": "mcq",
            "prompt": "Une bonne amorce, selon la leçon, doit :",
            "options": [
              "Prendre position sur le sujet",
              "Annoncer les axes d’analyse",
              "Résumer le développement",
              "Situer le sujet"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Situer le sujet est la fonction définissant l’amorce."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Choisir parmi quatre formes",
          "stepTheme": "Choisir parmi quatre formes",
          "stepBadge": "Choisir parmi quatre formes",
          "paragraphText": "Méthode : pour ouvrir l’introduction, choisir l’une des formes prévues par la leçon.\nUne idée, un constat, une définition ou des idées opposées, à condition qu’elle situe le sujet traité.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q5",
            "type": "mcq",
            "prompt": "Quelle forme ne figure pas parmi les amorces prévues par la leçon ?",
            "options": [
              "Une citation du bilan de la discussion",
              "Une idée qui situe le sujet",
              "Un constat qui situe le sujet",
              "Des idées opposées qui situent le sujet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Idée, constat, définition et idées opposées sont les quatre formes prévues ; le bilan relève de la conclusion."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q1",
          "type": "mcq",
          "prompt": "L’amorce peut être :",
          "options": [
            "Une idée, un constat, une définition ou des idées opposées qui situe le sujet",
            "Le bilan du développement",
            "Une prise de position personnelle",
            "Un aspect du problème"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Quatre formes possibles, une même fonction : situer le sujet."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q2",
          "type": "mcq",
          "prompt": "Dans la leçon, la généralité désigne :",
          "options": [
            "Les aspects du problème",
            "L’amorce",
            "Le problème du sujet",
            "La structuration des axes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Amorce ou généralité : le titre de la partie les donne comme équivalents."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q3",
          "type": "mcq",
          "prompt": "L’amorce de l’exemple corrigé repose sur :",
          "options": [
            "Une définition du progrès technique",
            "Des idées opposées sur la religion",
            "Un constat de l’expérience quotidienne sur le progrès des sciences et techniques",
            "Le bilan de la discussion"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est un constat, l’une des quatre formes d’amorce possibles."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q4",
          "type": "mcq",
          "prompt": "Une bonne amorce, selon la leçon, doit :",
          "options": [
            "Prendre position sur le sujet",
            "Annoncer les axes d’analyse",
            "Résumer le développement",
            "Situer le sujet"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Situer le sujet est la fonction définissant l’amorce."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p02_q5",
          "type": "mcq",
          "prompt": "Quelle forme ne figure pas parmi les amorces prévues par la leçon ?",
          "options": [
            "Une citation du bilan de la discussion",
            "Une idée qui situe le sujet",
            "Un constat qui situe le sujet",
            "Des idées opposées qui situent le sujet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Idée, constat, définition et idées opposées sont les quatre formes prévues ; le bilan relève de la conclusion."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03",
      "order": 3,
      "title": "Le problème et ses aspects",
      "summary": "Énoncer le problème, difficulté intellectuelle annoncée par l’amorce, et ses aspects en questions.",
      "conceptExplanation": "Le problème est la difficulté intellectuelle liée au sujet, dont la résolution va susciter une argumentation. Il est annoncé par l’amorce.\nLes aspects du problème sont les différentes questions suscitées par le problème. Ils annoncent les axes d’analyse du sujet.\nDans l’activité d’application, l’étude parcellaire du sujet « L’autre est-il absolument mon ennemi ? » donne : l’autre, le semblable, le prochain ; absolument, forcément, toujours ; ennemi, celui qui cherche à me nuire, me détruire.\nDans l’exemple d’introduction corrigée sur le progrès technique, le problème est énoncé sous la forme : doit-on souscrire à l’idée selon laquelle la technique est nuisible ? Ses aspects sont : dans quelle mesure la puissance technique constitue-t-elle une menace ? N’est-elle pas au contraire un facteur de développement ?",
      "keyRule": "Problème annoncé par l’amorce, aspects en questions qui annoncent les axes : l’enchaînement est obligatoire.",
      "formulas": [],
      "workedExample": {
        "title": "Étude parcellaire du sujet sur l’autre (application corrigée)",
        "statement": "Fais l’étude parcellaire du sujet « L’autre est-il absolument mon ennemi ? » selon le corrigé de l’activité d’application.",
        "methodSteps": [
          "L’autre : le semblable, le prochain.",
          "Absolument : forcément, toujours.",
          "Ennemi : celui qui cherche à me nuire, me détruire."
        ],
        "conclusion": "L’étude parcellaire prépare l’énoncé du problème de l’introduction, comme dans l’essai de problématisation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La difficulté intellectuelle du sujet",
          "stepTheme": "La difficulté intellectuelle du sujet",
          "stepBadge": "La difficulté intellectuelle du sujet",
          "paragraphText": "• Problème : difficulté intellectuelle liée au sujet, dont la résolution va susciter une argumentation.\nDans l’introduction, il est annoncé par l’amorce.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q1",
            "type": "mcq",
            "prompt": "Le problème, dans l’introduction de la dissertation, est :",
            "options": [
              "Une question qui annonce un axe",
              "La difficulté intellectuelle liée au sujet, dont la résolution suscite une argumentation",
              "Un constat qui situe le sujet",
              "La prise de position personnelle"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Difficulté intellectuelle à résoudre par l’argumentation : définition reprise de la problématisation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Annoncé par l’amorce",
          "stepTheme": "Annoncé par l’amorce",
          "stepBadge": "Annoncé par l’amorce",
          "paragraphText": "La leçon précise que le problème est annoncé par l’amorce.\nL’amorce situe le sujet, puis conduit à l’énoncé du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q2",
            "type": "mcq",
            "prompt": "Le problème est annoncé par :",
            "options": [
              "Les aspects du problème",
              "La conclusion",
              "L’amorce",
              "Les axes d’analyse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’amorce annonce le problème : ordre des éléments dans l’introduction."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les aspects du problème",
          "stepTheme": "Les aspects du problème",
          "stepBadge": "Les aspects du problème",
          "paragraphText": "• Aspects du problème : différentes questions suscitées par le problème.\nIls annoncent les axes d’analyse du sujet.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q3",
            "type": "mcq",
            "prompt": "Les aspects du problème sont :",
            "options": [
              "Les définitions des termes du sujet",
              "Des idées opposées qui situent le sujet",
              "Le bilan et la position personnelle",
              "Les différentes questions suscitées par le problème, qui annoncent les axes d’analyse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Questions suscitées par le problème et annonçant les axes : définition des aspects."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’autre, absolument, ennemi",
          "stepTheme": "L’autre, absolument, ennemi",
          "stepBadge": "L’autre, absolument, ennemi",
          "paragraphText": "Étude parcellaire corrigée du sujet sur l’autre.\n• L’autre : le semblable, le prochain\n• Absolument : forcément, toujours\n• Ennemi : celui qui cherche à me nuire, me détruire",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q4",
            "type": "mcq",
            "prompt": "Dans le corrigé, « absolument » est défini par :",
            "options": [
              "Forcément, toujours",
              "Le semblable, le prochain",
              "Celui qui cherche à me nuire",
              "Un facteur de développement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Absolument : forcément, toujours."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Problème et aspects chez le progrès technique",
          "stepTheme": "Problème et aspects chez le progrès technique",
          "stepBadge": "Problème et aspects chez le progrès technique",
          "paragraphText": "Exemple corrigé : problème, doit-on souscrire à l’idée selon laquelle la technique est nuisible ?\nAspects : dans quelle mesure la puissance technique constitue-t-elle une menace ? N’est-elle pas au contraire un facteur de développement ?",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q5",
            "type": "mcq",
            "prompt": "Dans l’exemple corrigé, un aspect du problème est :",
            "options": [
              "L’expérience quotidienne révèle le progrès des techniques",
              "Dans quelle mesure la puissance technique constitue-t-elle une menace ?",
              "L’avenir appartient à la science",
              "La technique est nuisible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Menace et facteur de développement sont les deux aspects, formulés en questions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre aspect et axe rédigé",
          "stepTheme": "Confondre aspect et axe rédigé",
          "stepBadge": "Confondre aspect et axe rédigé",
          "paragraphText": "Piège : présenter les aspects comme des réponses développées.\nLes aspects sont des questions suscitées par le problème ; ils annoncent les axes d’analyse, ils ne les rédigent pas.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q6",
            "type": "mcq",
            "prompt": "Présenter un aspect du problème, c’est :",
            "options": [
              "Donner la réponse développée de l’axe",
              "Conclure le sujet",
              "Poser une question suscitée par le problème, qui annonce un axe d’analyse",
              "Définir l’amorce du sujet"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un aspect est une question annonçant un axe, pas le développement de cet axe."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q1",
          "type": "mcq",
          "prompt": "Le problème, dans l’introduction de la dissertation, est :",
          "options": [
            "Une question qui annonce un axe",
            "La difficulté intellectuelle liée au sujet, dont la résolution suscite une argumentation",
            "Un constat qui situe le sujet",
            "La prise de position personnelle"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Difficulté intellectuelle à résoudre par l’argumentation : définition reprise de la problématisation."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q2",
          "type": "mcq",
          "prompt": "Le problème est annoncé par :",
          "options": [
            "Les aspects du problème",
            "La conclusion",
            "L’amorce",
            "Les axes d’analyse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’amorce annonce le problème : ordre des éléments dans l’introduction."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q3",
          "type": "mcq",
          "prompt": "Les aspects du problème sont :",
          "options": [
            "Les définitions des termes du sujet",
            "Des idées opposées qui situent le sujet",
            "Le bilan et la position personnelle",
            "Les différentes questions suscitées par le problème, qui annoncent les axes d’analyse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Questions suscitées par le problème et annonçant les axes : définition des aspects."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q4",
          "type": "mcq",
          "prompt": "Dans le corrigé, « absolument » est défini par :",
          "options": [
            "Forcément, toujours",
            "Le semblable, le prochain",
            "Celui qui cherche à me nuire",
            "Un facteur de développement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Absolument : forcément, toujours."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q5",
          "type": "mcq",
          "prompt": "Dans l’exemple corrigé, un aspect du problème est :",
          "options": [
            "L’expérience quotidienne révèle le progrès des techniques",
            "Dans quelle mesure la puissance technique constitue-t-elle une menace ?",
            "L’avenir appartient à la science",
            "La technique est nuisible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Menace et facteur de développement sont les deux aspects, formulés en questions."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p03_q6",
          "type": "mcq",
          "prompt": "Présenter un aspect du problème, c’est :",
          "options": [
            "Donner la réponse développée de l’axe",
            "Conclure le sujet",
            "Poser une question suscitée par le problème, qui annonce un axe d’analyse",
            "Définir l’amorce du sujet"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un aspect est une question annonçant un axe, pas le développement de cet axe."
        }
      ]
    },
    {
      "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04",
      "order": 4,
      "title": "Rédiger l’introduction",
      "summary": "Agencer de façon cohérente amorce, problème et aspects, à partir de l’exemple corrigé complet.",
      "conceptExplanation": "Rédiger une introduction consiste à agencer de façon cohérente les éléments qui composent l’introduction de la dissertation philosophique.\nL’activité d’application demande de mettre en ordre les éléments suivants de la rédaction de l’introduction : les aspects du problème, le problème, l’amorce. L’ordre est donc : l’amorce, le problème, les aspects du problème.\nL’exemple d’introduction corrigée sur le sujet « Doit-on condamner le progrès technique ? » enchaîne : une amorce par le constat de l’expérience quotidienne sur le progrès vertigineux des sciences et techniques et la menace qui l’accompagne ; l’énoncé du problème, doit-on souscrire à l’idée selon laquelle la technique est nuisible ; puis ses deux aspects en questions, la mesure de la menace technique et la technique comme facteur de développement.",
      "keyRule": "Amorce, problème, aspects : agence-les de façon cohérente, dans cet ordre, sans rien ajouter d’autre.",
      "formulas": [],
      "workedExample": {
        "title": "Relire l’exemple complet d’introduction corrigée",
        "statement": "Reconstitue l’introduction corrigée du sujet « Doit-on condamner le progrès technique ? » en suivant ses trois éléments.",
        "methodSteps": [
          "Amorce : l’expérience quotidienne nous révèle le progrès vertigineux des sciences et techniques dans presque toutes les sphères de la vie, et cela semble confirmer l’idée selon laquelle l’avenir appartient à la science et à la technique.",
          "Transition vers le problème : malheureusement, cette évolution de la technoscience s’accompagne souvent d’une réelle menace pour l’humanité entière.",
          "Énoncé du problème : dès lors, doit-on souscrire à l’idée selon laquelle la technique est nuisible ?",
          "Aspects du problème : dans quelle mesure la puissance technique constitue-t-elle une menace ? N’est-elle pas au contraire un facteur de développement ?"
        ],
        "conclusion": "L’exemple enchaîne amorce, problème et aspects en un seul texte cohérent."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un agencement cohérent",
          "stepTheme": "Un agencement cohérent",
          "stepBadge": "Un agencement cohérent",
          "paragraphText": "• Rédaction de l’introduction : agencer de façon cohérente les éléments qui composent l’introduction de la dissertation philosophique.\nCes éléments sont l’amorce, le problème et les aspects du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q1",
            "type": "mcq",
            "prompt": "Rédiger une introduction consiste à :",
            "options": [
              "Agencer de façon cohérente l’amorce, le problème et ses aspects",
              "Développer les axes d’analyse",
              "Faire le bilan de la discussion",
              "Définir tous les termes du sujet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Agencement cohérent des éléments : définition de la rédaction dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Mettre les éléments en ordre",
          "stepTheme": "Mettre les éléments en ordre",
          "stepBadge": "Mettre les éléments en ordre",
          "paragraphText": "Activité d’application : mettre en ordre les aspects du problème, le problème et l’amorce.\nL’ordre de rédaction est : amorce, puis problème, puis aspects du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q2",
            "type": "mcq",
            "prompt": "L’ordre correct des éléments dans l’introduction est :",
            "options": [
              "Problème, aspects, amorce",
              "Amorce, problème, aspects du problème",
              "Aspects, amorce, problème",
              "Problème, amorce, aspects"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Amorce d’abord, problème ensuite, aspects enfin."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La menace comme transition",
          "stepTheme": "La menace comme transition",
          "stepBadge": "La menace comme transition",
          "paragraphText": "Dans l’exemple corrigé, l’amorce se termine sur un renversement.\n« Malheureusement, cette évolution de la technoscience s’accompagne souvent d’une réelle menace pour l’humanité entière. » Cette phrase conduit à l’énoncé du problème.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q3",
            "type": "mcq",
            "prompt": "Dans l’exemple corrigé, la phrase sur la menace pour l’humanité sert à :",
            "options": [
              "Conclure la dissertation",
              "Annoncer un axe développé",
              "Passer de l’amorce à l’énoncé du problème",
              "Définir la technoscience"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Elle fait la transition entre le constat de l’amorce et la question du problème."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "« Dès lors » et le problème énoncé",
          "stepTheme": "« Dès lors » et le problème énoncé",
          "stepBadge": "« Dès lors » et le problème énoncé",
          "paragraphText": "L’exemple corrigé énonce le problème après « Dès lors ».\n« Doit-on souscrire à l’idée selon laquelle la technique est nuisible ? »",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q4",
            "type": "mcq",
            "prompt": "L’énoncé du problème dans l’exemple corrigé est :",
            "options": [
              "L’avenir appartient à la science et à la technique",
              "La puissance technique est un facteur de développement",
              "L’expérience révèle le progrès des techniques",
              "Doit-on souscrire à l’idée selon laquelle la technique est nuisible ?"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la question qui formule la difficulté intellectuelle du sujet."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Développer les axes dans l’introduction",
          "stepTheme": "Développer les axes dans l’introduction",
          "stepBadge": "Développer les axes dans l’introduction",
          "paragraphText": "Piège : développer dès l’introduction les arguments des axes d’analyse.\nL’introduction annonce les axes par les aspects en questions ; leur développement appartient au corps de la dissertation.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q5",
            "type": "mcq",
            "prompt": "Que faut-il éviter dans la rédaction de l’introduction ?",
            "options": [
              "Développer les arguments des axes au lieu de les annoncer par des questions",
              "Commencer par une amorce",
              "Énoncer le problème du sujet",
              "Formuler les aspects en questions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Annoncer par les aspects, oui ; développer les axes, non."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Vérifier les trois éléments présents",
          "stepTheme": "Vérifier les trois éléments présents",
          "stepBadge": "Vérifier les trois éléments présents",
          "paragraphText": "Méthode de vérification : relire son introduction et contrôler la présence des trois éléments agencés de façon cohérente.\nAmorce qui situe le sujet, problème énoncé, aspects formulés en questions : l’exemple corrigé les contient tous.",
          "exercise": {
            "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q6",
            "type": "mcq",
            "prompt": "Une introduction complète et vérifiée contient :",
            "options": [
              "Un bilan et une opinion personnelle",
              "Une amorce, l’énoncé du problème et les aspects du problème",
              "La thèse et la structure logique d’un texte",
              "Les définitions de tous les connecteurs"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois éléments constitutifs à vérifier après rédaction."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q1",
          "type": "mcq",
          "prompt": "Rédiger une introduction consiste à :",
          "options": [
            "Agencer de façon cohérente l’amorce, le problème et ses aspects",
            "Développer les axes d’analyse",
            "Faire le bilan de la discussion",
            "Définir tous les termes du sujet"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Agencement cohérent des éléments : définition de la rédaction dans la leçon."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q2",
          "type": "mcq",
          "prompt": "L’ordre correct des éléments dans l’introduction est :",
          "options": [
            "Problème, aspects, amorce",
            "Amorce, problème, aspects du problème",
            "Aspects, amorce, problème",
            "Problème, amorce, aspects"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Amorce d’abord, problème ensuite, aspects enfin."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q3",
          "type": "mcq",
          "prompt": "Dans l’exemple corrigé, la phrase sur la menace pour l’humanité sert à :",
          "options": [
            "Conclure la dissertation",
            "Annoncer un axe développé",
            "Passer de l’amorce à l’énoncé du problème",
            "Définir la technoscience"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Elle fait la transition entre le constat de l’amorce et la question du problème."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q4",
          "type": "mcq",
          "prompt": "L’énoncé du problème dans l’exemple corrigé est :",
          "options": [
            "L’avenir appartient à la science et à la technique",
            "La puissance technique est un facteur de développement",
            "L’expérience révèle le progrès des techniques",
            "Doit-on souscrire à l’idée selon laquelle la technique est nuisible ?"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la question qui formule la difficulté intellectuelle du sujet."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q5",
          "type": "mcq",
          "prompt": "Que faut-il éviter dans la rédaction de l’introduction ?",
          "options": [
            "Développer les arguments des axes au lieu de les annoncer par des questions",
            "Commencer par une amorce",
            "Énoncer le problème du sujet",
            "Formuler les aspects en questions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Annoncer par les aspects, oui ; développer les axes, non."
        },
        {
          "id": "premiere_philo_methodologie_l05_introduction_dissertation_p04_q6",
          "type": "mcq",
          "prompt": "Une introduction complète et vérifiée contient :",
          "options": [
            "Un bilan et une opinion personnelle",
            "Une amorce, l’énoncé du problème et les aspects du problème",
            "La thèse et la structure logique d’un texte",
            "Les définitions de tous les connecteurs"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois éléments constitutifs à vérifier après rédaction."
        }
      ]
    }
  ]
};
