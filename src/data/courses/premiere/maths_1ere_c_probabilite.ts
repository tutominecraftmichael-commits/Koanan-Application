import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Probabilité » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Probabilité » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L10_PROBABILITE: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l10_probabilite",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 10,
  "title": "Leçon 10 : Probabilité",
  "summary": "La leçon introduit le vocabulaire des expériences aléatoires (univers, éventualités, événements et leurs opérations), définit une probabilité et ses propriétés, puis traite l’équiprobabilité et ses calculs par les cardinaux.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Probabilité » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l10_probabilite_p01",
      "order": 1,
      "title": "Expérience aléatoire, univers et éventualités",
      "summary": "Définir une expérience aléatoire, une éventualité et l’univers des éventualités.",
      "conceptExplanation": "Une expérience ou épreuve aléatoire est une expérience dont on ne connaît pas d’avance le résultat, mais dont on connaît les résultats possibles : par exemple le lancer d’un dé cubique parfaitement équilibré, ou le lancer d’une pièce de monnaie.\nChaque résultat possible est appelé une éventualité. L’ensemble de ces résultats possibles est appelé l’univers des éventualités de l’expérience ; on le note $U$ ou $\\Omega$. Pour un dé, $U = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$ ; pour une pièce, $U = \\{P ; F\\}$ ; pour deux pièces, $U = \\{(P, P) ; (P, F) ; (F, P) ; (F, F)\\}$.",
      "keyRule": "Expérience aléatoire : résultat inconnu d’avance, mais tous les résultats possibles sont connus et forment l’univers.",
      "formulas": [],
      "workedExample": {
        "title": "L’univers du lancer de deux pièces",
        "statement": "Écris en extension l’univers du lancer de deux pièces de monnaie.",
        "methodSteps": [
          "Chaque pièce donne $P$ ou $F$.",
          "On forme tous les couples ordonnés de résultats : premier lancer, puis second lancer.",
          "On obtient $(P, P)$, $(P, F)$, $(F, P)$ et $(F, F)$."
        ],
        "conclusion": "L’univers est $U = \\{(P, P) ; (P, F) ; (F, P) ; (F, F)\\}$, à quatre éventualités."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’expérience aléatoire",
          "stepTheme": "L’expérience aléatoire",
          "stepBadge": "L’expérience aléatoire",
          "paragraphText": "• Définition : une expérience aléatoire est une expérience dont on ne connaît pas d’avance le résultat, mais dont on connaît les résultats possibles.\nExemples de la leçon : le lancer d’un dé cubique parfaitement équilibré et le lancer d’une pièce de monnaie.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p01_q1",
            "type": "mcq",
            "prompt": "Une expérience aléatoire est une expérience dont :",
            "options": [
              "On connaît le résultat d’avance",
              "On ne connaît pas les résultats possibles",
              "On ne connaît pas le résultat d’avance, mais on connaît les résultats possibles",
              "Le résultat est toujours le même"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition de la leçon : résultat inconnu d’avance, résultats possibles connus."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une expérience aléatoire",
          "stepTheme": "Reconnaître une expérience aléatoire",
          "stepBadge": "Reconnaître une expérience aléatoire",
          "paragraphText": "• Exemple de la leçon : cinq boules numérotées de $1$ à $5$, indiscernables au toucher, sont dans un carton non transparent.\nChoisir une boule parmi elles est une expérience aléatoire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p01_q2",
            "type": "mcq",
            "prompt": "Choisir une boule indiscernable au toucher parmi cinq boules numérotées est :",
            "options": [
              "Une expérience aléatoire",
              "Un événement certain",
              "Un événement impossible",
              "Une expérience dont le résultat est connu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On ne sait pas quelle boule sortira, mais les résultats possibles sont connus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Éventualité et univers",
          "stepTheme": "Éventualité et univers",
          "stepBadge": "Éventualité et univers",
          "paragraphText": "• Définitions : chaque résultat possible d’une expérience aléatoire est une éventualité.\nL’ensemble de ces résultats possibles est l’univers des éventualités, noté $U$ ou $\\Omega$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p01_q3",
            "type": "mcq",
            "prompt": "L’ensemble de tous les résultats possibles d’une expérience aléatoire s’appelle :",
            "options": [
              "Un événement élémentaire",
              "Une probabilité",
              "Un événement impossible",
              "L’univers des éventualités"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’univers regroupe toutes les éventualités de l’expérience."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’univers du lancer d’un dé",
          "stepTheme": "L’univers du lancer d’un dé",
          "stepBadge": "L’univers du lancer d’un dé",
          "paragraphText": "• Exemple de la leçon : pour le lancer d’un dé, les éventualités sont $1$, $2$, $3$, $4$, $5$ et $6$.\nSon univers est donc l’ensemble formé de ces six nombres.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p01_q4",
            "type": "mcq",
            "prompt": "L’univers du lancer d’un dé cubique est :",
            "options": [
              "$\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$",
              "$\\{P ; F\\}$",
              "$\\{1 ; 2 ; 3\\}$",
              "$\\{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les faces du dé donnent exactement les six éventualités de $1$ à $6$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "L’univers du lancer d’une pièce et de deux pièces",
          "stepTheme": "L’univers du lancer d’une pièce et de deux pièces",
          "stepBadge": "L’univers du lancer d’une pièce et de deux pièces",
          "paragraphText": "• Exemple de la leçon : pour une pièce, l’univers est $\\{P ; F\\}$.\nPour deux pièces, l’univers en extension est formé des quatre couples $(P, P)$, $(P, F)$, $(F, P)$ et $(F, F)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p01_q5",
            "type": "mcq",
            "prompt": "Combien d’éventualités l’univers du lancer de deux pièces contient-il ?",
            "options": [
              "$4$",
              "$3$",
              "$2$",
              "$6$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les quatre couples possibles sont $(P, P)$, $(P, F)$, $(F, P)$ et $(F, F)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre éventualité et univers",
          "stepTheme": "Ne pas confondre éventualité et univers",
          "stepBadge": "Ne pas confondre éventualité et univers",
          "paragraphText": "• Piège : une éventualité est un seul résultat possible, par exemple obtenir $4$ au dé.\nL’univers est l’ensemble de tous ces résultats, pas un résultat isolé.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p01_q6",
            "type": "mcq",
            "prompt": "Obtenir la face $4$ lors d’un lancer de dé est :",
            "options": [
              "L’univers",
              "La probabilité de l’expérience",
              "Un événement impossible",
              "Une éventualité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un résultat possible pris isolément est une éventualité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p01_q1",
          "type": "mcq",
          "prompt": "Une expérience aléatoire est une expérience dont :",
          "options": [
            "On connaît le résultat d’avance",
            "On ne connaît pas les résultats possibles",
            "On ne connaît pas le résultat d’avance, mais on connaît les résultats possibles",
            "Le résultat est toujours le même"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition de la leçon : résultat inconnu d’avance, résultats possibles connus."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p01_q2",
          "type": "mcq",
          "prompt": "Choisir une boule indiscernable au toucher parmi cinq boules numérotées est :",
          "options": [
            "Une expérience aléatoire",
            "Un événement certain",
            "Un événement impossible",
            "Une expérience dont le résultat est connu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On ne sait pas quelle boule sortira, mais les résultats possibles sont connus."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p01_q3",
          "type": "mcq",
          "prompt": "L’ensemble de tous les résultats possibles d’une expérience aléatoire s’appelle :",
          "options": [
            "Un événement élémentaire",
            "Une probabilité",
            "Un événement impossible",
            "L’univers des éventualités"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’univers regroupe toutes les éventualités de l’expérience."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p01_q4",
          "type": "mcq",
          "prompt": "L’univers du lancer d’un dé cubique est :",
          "options": [
            "$\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$",
            "$\\{P ; F\\}$",
            "$\\{1 ; 2 ; 3\\}$",
            "$\\{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les faces du dé donnent exactement les six éventualités de $1$ à $6$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p01_q5",
          "type": "mcq",
          "prompt": "Combien d’éventualités l’univers du lancer de deux pièces contient-il ?",
          "options": [
            "$4$",
            "$3$",
            "$2$",
            "$6$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les quatre couples possibles sont $(P, P)$, $(P, F)$, $(F, P)$ et $(F, F)$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p01_q6",
          "type": "mcq",
          "prompt": "Obtenir la face $4$ lors d’un lancer de dé est :",
          "options": [
            "L’univers",
            "La probabilité de l’expérience",
            "Un événement impossible",
            "Une éventualité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un résultat possible pris isolément est une éventualité."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l10_probabilite_p02",
      "order": 2,
      "title": "Les événements et leurs types",
      "summary": "Définir un événement et distinguer événement élémentaire, impossible et certain.",
      "conceptExplanation": "$U$ étant l’univers des éventualités d’une expérience aléatoire, on appelle événement de $U$ toute partie de $U$. Lorsque cette partie est un singleton, on l’appelle événement élémentaire ; lorsque cette partie est l’ensemble vide, on l’appelle événement impossible ; lorsque cette partie est l’ensemble $U$, on l’appelle événement certain.\nExemples de la leçon : obtenir pile au lancer d’une pièce est un événement élémentaire ; obtenir le chiffre $7$ au lancer d’un dé est un événement impossible. Une éventualité $e_i$ réalise l’événement $A$ lorsque $e_i \\in A$.",
      "keyRule": "Tout événement est une partie de l’univers : vide il est impossible, singleton il est élémentaire, égal à l’univers il est certain.",
      "formulas": [],
      "workedExample": {
        "title": "Classer trois événements du lancer de dé",
        "statement": "Pour le lancer d’un dé numéroté de $1$ à $6$, classe les événements : obtenir $4$ ; obtenir $7$ ; obtenir un nombre entre $1$ et $6$.",
        "methodSteps": [
          "Obtenir $4$ est le singleton $\\{4\\}$ : événement élémentaire.",
          "Obtenir $7$ est l’ensemble vide : événement impossible.",
          "Obtenir un nombre entre $1$ et $6$ est l’univers entier : événement certain."
        ],
        "conclusion": "On distingue les trois types par le nombre d’éventualités : une, zéro, toutes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L’événement, partie de l’univers",
          "stepTheme": "L’événement, partie de l’univers",
          "stepBadge": "L’événement, partie de l’univers",
          "paragraphText": "• Définition : $U$ étant l’univers d’une expérience aléatoire, un événement de $U$ est toute partie de $U$.\nDans le tableau récapitulatif, $A \\subset U$ se lit « $A$ est un événement ».",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p02_q1",
            "type": "mcq",
            "prompt": "Un événement d’un univers $U$ est :",
            "options": [
              "Toute partie de $U$",
              "Un nombre réel entre $0$ et $1$",
              "Toujours un singleton",
              "Toujours l’univers entier"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, un événement est une partie de l’univers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’événement élémentaire",
          "stepTheme": "L’événement élémentaire",
          "stepBadge": "L’événement élémentaire",
          "paragraphText": "• Définition : lorsque l’événement est un singleton, on l’appelle événement élémentaire.\nExemple de la leçon : au lancer d’une pièce, obtenir pile est un événement élémentaire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p02_q2",
            "type": "mcq",
            "prompt": "Un événement formé d’une seule éventualité est un événement :",
            "options": [
              "Impossible",
              "Certain",
              "Contraire",
              "Élémentaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un singleton de l’univers est un événement élémentaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L’événement impossible",
          "stepTheme": "L’événement impossible",
          "stepBadge": "L’événement impossible",
          "paragraphText": "• Définition : lorsque l’événement est l’ensemble vide, on l’appelle événement impossible.\nExemple de la leçon : obtenir le chiffre $7$ au lancer d’un dé numéroté de $1$ à $6$ est impossible.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p02_q3",
            "type": "mcq",
            "prompt": "Obtenir le chiffre $7$ au lancer d’un dé numéroté de $1$ à $6$ est un événement :",
            "options": [
              "Impossible",
              "Certain",
              "Élémentaire",
              "Composé de six cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le $7$ n’appartient pas à l’univers : l’événement est vide, donc impossible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’événement certain",
          "stepTheme": "L’événement certain",
          "stepBadge": "L’événement certain",
          "paragraphText": "• Définition : lorsque l’événement est l’ensemble $U$ tout entier, on l’appelle événement certain.\nExemple de la leçon : pour une femme qui porte une grossesse, accoucher d’un garçon ou d’une fille est présenté comme un événement certain.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p02_q4",
            "type": "mcq",
            "prompt": "Un événement égal à l’univers $U$ tout entier est un événement :",
            "options": [
              "Impossible",
              "Élémentaire",
              "Certain",
              "Incompatible"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’événement certain est l’univers lui-même."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Réaliser un événement",
          "stepTheme": "Réaliser un événement",
          "stepBadge": "Réaliser un événement",
          "paragraphText": "• Langage de la leçon : une éventualité $e_i$ réalise l’événement $A$ lorsque $e_i \\in A$.\nPar exemple, au dé, l’éventualité $4$ réalise l’événement « obtenir un nombre pair ».",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p02_q5",
            "type": "mcq",
            "prompt": "L’éventualité $e_i$ réalise l’événement $A$ lorsque :",
            "options": [
              "$e_i \\notin A$",
              "$A = U$",
              "$A = \\emptyset$",
              "$e_i \\in A$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la correspondance du tableau récapitulatif entre ensembles et probabilités."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre impossible et élémentaire",
          "stepTheme": "Ne pas confondre impossible et élémentaire",
          "stepBadge": "Ne pas confondre impossible et élémentaire",
          "paragraphText": "• Piège : l’événement impossible est l’ensemble vide, avec zéro éventualité.\nL’événement élémentaire a exactement une éventualité : ce sont deux notions opposées en nombre de cas.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p02_q6",
            "type": "mcq",
            "prompt": "Combien d’éventualités contient l’événement impossible ?",
            "options": [
              "Zéro",
              "Six",
              "Une",
              "Autant que l’univers"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’événement impossible est l’ensemble vide : il ne contient aucune éventualité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p02_q1",
          "type": "mcq",
          "prompt": "Un événement d’un univers $U$ est :",
          "options": [
            "Toute partie de $U$",
            "Un nombre réel entre $0$ et $1$",
            "Toujours un singleton",
            "Toujours l’univers entier"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, un événement est une partie de l’univers."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p02_q2",
          "type": "mcq",
          "prompt": "Un événement formé d’une seule éventualité est un événement :",
          "options": [
            "Impossible",
            "Certain",
            "Contraire",
            "Élémentaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un singleton de l’univers est un événement élémentaire."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p02_q3",
          "type": "mcq",
          "prompt": "Obtenir le chiffre $7$ au lancer d’un dé numéroté de $1$ à $6$ est un événement :",
          "options": [
            "Impossible",
            "Certain",
            "Élémentaire",
            "Composé de six cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le $7$ n’appartient pas à l’univers : l’événement est vide, donc impossible."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p02_q4",
          "type": "mcq",
          "prompt": "Un événement égal à l’univers $U$ tout entier est un événement :",
          "options": [
            "Impossible",
            "Élémentaire",
            "Certain",
            "Incompatible"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’événement certain est l’univers lui-même."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p02_q5",
          "type": "mcq",
          "prompt": "L’éventualité $e_i$ réalise l’événement $A$ lorsque :",
          "options": [
            "$e_i \\notin A$",
            "$A = U$",
            "$A = \\emptyset$",
            "$e_i \\in A$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la correspondance du tableau récapitulatif entre ensembles et probabilités."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p02_q6",
          "type": "mcq",
          "prompt": "Combien d’éventualités contient l’événement impossible ?",
          "options": [
            "Zéro",
            "Six",
            "Une",
            "Autant que l’univers"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’événement impossible est l’ensemble vide : il ne contient aucune éventualité."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l10_probabilite_p03",
      "order": 3,
      "title": "Opérations sur les événements",
      "summary": "Utiliser intersection, réunion, contraire et incompatibilité dans le langage des probabilités.",
      "conceptExplanation": "Le tableau récapitulatif de la leçon fait correspondre le langage des ensembles et celui des probabilités. $A \\cap B$ est l’événement « $A$ et $B$ » ; $A \\cup B$ est l’événement « $A$ ou $B$ ». Le contraire de $A$, noté $\\overline{A}$, est le complémentaire de $A$ dans $U$ : $A \\cup \\overline{A} = U$ et $A \\cap \\overline{A} = \\emptyset$ ; une éventualité réalise $\\overline{A}$ si et seulement si elle ne réalise pas $A$.\nDeux événements sont incompatibles, ou disjoints, lorsque $A \\cap B = \\emptyset$. Exemple : au lancer de deux pièces, $A = \\{(P, P) ; (P, F)\\}$ et $B = \\{(F, P) ; (P, P)\\}$ ont pour intersection $\\{(P, P)\\}$.",
      "keyRule": "« Et » se traduit par l’intersection, « ou » par la réunion, et deux événements sans cas commun sont incompatibles.",
      "formulas": [
        {
          "name": "Intersection",
          "formula": "A \\cap B",
          "note": "L’événement « $A$ et $B$ »."
        },
        {
          "name": "Réunion",
          "formula": "A \\cup B",
          "note": "L’événement « $A$ ou $B$ »."
        }
      ],
      "workedExample": {
        "title": "Intersection de deux événements au lancer de deux pièces",
        "statement": "Au lancer de deux pièces, $A$ est « obtenir pile au premier lancer » et $B$ est « obtenir pile au second lancer ». Détermine $A \\cap B$.",
        "methodSteps": [
          "On écrit $A = \\{(P, P) ; (P, F)\\}$ d’après la leçon.",
          "On écrit $B = \\{(F, P) ; (P, P)\\}$ d’après la leçon.",
          "Le seul couple présent dans les deux listes est $(P, P)$."
        ],
        "conclusion": "$A \\cap B = \\{(P, P)\\}$ : pile aux deux lancers."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’intersection : l’événement « $A$ et $B$ »",
          "stepTheme": "L’intersection : l’événement « $A$ et $B$ »",
          "stepBadge": "L’intersection : l’événement « $A$ et $B$ »",
          "paragraphText": "• Définition du tableau : $A \\cap B$ correspond à l’événement « $A$ et $B$ ».\nUne éventualité le réalise lorsqu’elle réalise à la fois $A$ et $B$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p03_q1",
            "type": "mcq",
            "prompt": "L’événement « $A$ et $B$ » correspond à l’ensemble :",
            "options": [
              "$A \\cup B$",
              "L’ensemble vide",
              "Le complémentaire de $A$",
              "$A \\cap B$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’intersection regroupe les éventualités communes à $A$ et à $B$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La réunion : l’événement « $A$ ou $B$ »",
          "stepTheme": "La réunion : l’événement « $A$ ou $B$ »",
          "stepBadge": "La réunion : l’événement « $A$ ou $B$ »",
          "paragraphText": "• Définition du tableau : $A \\cup B$ correspond à l’événement « $A$ ou $B$ ».\nUne éventualité le réalise lorsqu’elle réalise $A$ ou réalise $B$, au sens large.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p03_q2",
            "type": "mcq",
            "prompt": "L’événement « $A$ ou $B$ » correspond à l’ensemble :",
            "options": [
              "$A \\cap B$",
              "Le complémentaire de $B$",
              "$A \\cup B$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La réunion regroupe les éventualités de $A$ et celles de $B$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’événement contraire",
          "stepTheme": "L’événement contraire",
          "stepBadge": "L’événement contraire",
          "paragraphText": "• Définition : le contraire de $A$, noté $\\overline{A}$, vérifie $A \\cup \\overline{A} = U$ et $A \\cap \\overline{A} = \\emptyset$.\nUne éventualité réalise $\\overline{A}$ si et seulement si elle ne réalise pas $A$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p03_q3",
            "type": "mcq",
            "prompt": "Une éventualité réalise le contraire de $A$ lorsque :",
            "options": [
              "Elle réalise $A$",
              "Elle réalise $A$ et $B$",
              "Elle appartient à $A$",
              "Elle ne réalise pas $A$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le contraire regroupe exactement les éventualités hors de $A$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les événements incompatibles",
          "stepTheme": "Les événements incompatibles",
          "stepBadge": "Les événements incompatibles",
          "paragraphText": "• Définition : $A$ et $B$ sont incompatibles, ou disjoints, lorsque $A \\cap B = \\emptyset$.\nL’événement « $A$ et $B$ » est alors impossible.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p03_q4",
            "type": "mcq",
            "prompt": "Deux événements $A$ et $B$ sont incompatibles lorsque :",
            "options": [
              "$A \\cap B = \\emptyset$",
              "$A \\cup B = \\emptyset$",
              "$A = B$",
              "$A \\cap B = U$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Des événements disjoints n’ont aucune éventualité commune."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Intersection et réunion au lancer de deux pièces",
          "stepTheme": "Intersection et réunion au lancer de deux pièces",
          "stepBadge": "Intersection et réunion au lancer de deux pièces",
          "paragraphText": "• Exemple de la leçon : $A$ « obtenir pile au premier lancer » vaut $\\{(P, P) ; (P, F)\\}$ et $B$ « obtenir pile au second lancer » vaut $\\{(F, P) ; (P, P)\\}$.\nLeur intersection est $\\{(P, P)\\}$ et leur réunion contient trois couples.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p03_q5",
            "type": "mcq",
            "prompt": "Pour ces événements $A$ et $B$, $A \\cap B$ vaut :",
            "options": [
              "$\\{(P, F)\\}$",
              "$\\{(F, P)\\}$",
              "$\\emptyset$",
              "$\\{(P, P)\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le seul couple commun aux deux listes est $(P, P)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le « ou » des probabilités est inclusif",
          "stepTheme": "Le « ou » des probabilités est inclusif",
          "stepBadge": "Le « ou » des probabilités est inclusif",
          "paragraphText": "• Piège : dans « $A$ ou $B$ », une éventualité qui réalise à la fois $A$ et $B$ réalise aussi la réunion.\nLa réunion n’exclut donc pas le cas commun, qui forme l’intersection.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p03_q6",
            "type": "mcq",
            "prompt": "Une éventualité qui réalise à la fois $A$ et $B$ réalise-t-elle $A \\cup B$ ?",
            "options": [
              "Non, jamais",
              "Oui, car elle réalise au moins l’un des deux",
              "Seulement si $A$ et $B$ sont incompatibles",
              "Seulement si elle ne réalise pas $A$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La réunion demande au moins l’un des deux événements, le cas commun compris."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p03_q1",
          "type": "mcq",
          "prompt": "L’événement « $A$ et $B$ » correspond à l’ensemble :",
          "options": [
            "$A \\cup B$",
            "L’ensemble vide",
            "Le complémentaire de $A$",
            "$A \\cap B$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’intersection regroupe les éventualités communes à $A$ et à $B$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p03_q2",
          "type": "mcq",
          "prompt": "L’événement « $A$ ou $B$ » correspond à l’ensemble :",
          "options": [
            "$A \\cap B$",
            "Le complémentaire de $B$",
            "$A \\cup B$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La réunion regroupe les éventualités de $A$ et celles de $B$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p03_q3",
          "type": "mcq",
          "prompt": "Une éventualité réalise le contraire de $A$ lorsque :",
          "options": [
            "Elle réalise $A$",
            "Elle réalise $A$ et $B$",
            "Elle appartient à $A$",
            "Elle ne réalise pas $A$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le contraire regroupe exactement les éventualités hors de $A$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p03_q4",
          "type": "mcq",
          "prompt": "Deux événements $A$ et $B$ sont incompatibles lorsque :",
          "options": [
            "$A \\cap B = \\emptyset$",
            "$A \\cup B = \\emptyset$",
            "$A = B$",
            "$A \\cap B = U$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Des événements disjoints n’ont aucune éventualité commune."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p03_q5",
          "type": "mcq",
          "prompt": "Pour ces événements $A$ et $B$, $A \\cap B$ vaut :",
          "options": [
            "$\\{(P, F)\\}$",
            "$\\{(F, P)\\}$",
            "$\\emptyset$",
            "$\\{(P, P)\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le seul couple commun aux deux listes est $(P, P)$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p03_q6",
          "type": "mcq",
          "prompt": "Une éventualité qui réalise à la fois $A$ et $B$ réalise-t-elle $A \\cup B$ ?",
          "options": [
            "Non, jamais",
            "Oui, car elle réalise au moins l’un des deux",
            "Seulement si $A$ et $B$ sont incompatibles",
            "Seulement si elle ne réalise pas $A$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La réunion demande au moins l’un des deux événements, le cas commun compris."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l10_probabilite_p04",
      "order": 4,
      "title": "Probabilité d’un événement et propriétés",
      "summary": "Définir une probabilité et appliquer ses propriétés : contraire, événement impossible et réunion.",
      "conceptExplanation": "Une probabilité $P$ sur l’univers $U$ est une application de l’ensemble des parties de $U$ vers l’intervalle $[0 ; 1]$, qui à chaque événement $A$ associe le nombre $P(A)$, et qui vérifie $P(U) = 1$ ainsi que $P(A \\cup B) = P(A) + P(B)$ lorsque $A$ et $B$ sont incompatibles.\nPropriétés : $P(\\overline{A}) = 1 - P(A)$ ; $P(\\emptyset) = 0$ ; si $A = \\{e_1 ; \\ldots ; e_k\\}$, alors $P(A)$ est la somme des probabilités des événements élémentaires ; et pour tous événements $A$ et $B$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
      "keyRule": "La probabilité d’un événement est la somme des probabilités de ses cas, et celle du contraire complète à $1$.",
      "formulas": [
        {
          "name": "Probabilité du contraire",
          "formula": "P(\\overline{A}) = 1 - P(A)"
        },
        {
          "name": "Probabilité d’une réunion",
          "formula": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
        }
      ],
      "workedExample": {
        "title": "Probabilités avec le dé truqué de l’exercice de fixation",
        "statement": "Un dé truqué donne, pour les faces $1$ à $6$, les probabilités de numérateurs $1$, $3$, $5$, $2$, $3$ et $2$ sur $16$. Calcule la probabilité de $B$ « le résultat est un nombre multiple de $3$ » et de $C$ « le résultat est différent de $6$ ».",
        "methodSteps": [
          "$B = \\{3 ; 6\\}$ : on additionne les probabilités de $3$ et de $6$, numérateurs $5$ et $2$ sur $16$.",
          "Donc $P(B) = \\frac{7}{16}$, comme dans le corrigé de la leçon.",
          "$C = \\{1 ; 2 ; 3 ; 4 ; 5\\}$ : la somme des cinq premiers numérateurs est $14$, donc $P(C) = \\frac{14}{16} = \\frac{7}{8}$."
        ],
        "conclusion": "$P(B) = \\frac{7}{16}$ et $P(C) = \\frac{7}{8}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La probabilité sur un univers",
          "stepTheme": "La probabilité sur un univers",
          "stepBadge": "La probabilité sur un univers",
          "paragraphText": "• Définition : une probabilité $P$ sur $U$ associe à chaque événement $A$ un nombre $P(A)$ de l’intervalle $[0 ; 1]$.\nElle vérifie $P(U) = 1$ et, pour $A$ et $B$ incompatibles, $P(A \\cup B) = P(A) + P(B)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p04_q1",
            "type": "mcq",
            "prompt": "Une probabilité associe à tout événement un nombre situé dans :",
            "options": [
              "$[0 ; 1]$",
              "$[1 ; +\\infty[$",
              "$\\mathbb{R}$ entier",
              "$[-1 ; 1]$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $P$ va des parties de $U$ vers l’intervalle $[0 ; 1]$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les propriétés fondamentales",
          "stepTheme": "Les propriétés fondamentales",
          "stepBadge": "Les propriétés fondamentales",
          "paragraphText": "• Propriétés de la leçon : $P(\\overline{A}) = 1 - P(A)$ et $P(\\emptyset) = 0$.\nPour tout événement $A$, $P(A)$ est la somme des probabilités de ses événements élémentaires.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut $P(\\overline{A})$ en fonction de $P(A)$ ?",
            "options": [
              "$P(A)$",
              "$1 - P(A)$",
              "$1 + P(A)$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’événement et son contraire se partagent l’univers, de probabilité totale $1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formule de la réunion",
          "stepTheme": "La formule de la réunion",
          "stepBadge": "La formule de la réunion",
          "paragraphText": "• Propriété de la leçon : pour tous événements $A$ et $B$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\nOn retire l’intersection, comptée deux fois dans la somme.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p04_q3",
            "type": "mcq",
            "prompt": "La formule générale de $P(A \\cup B)$ est :",
            "options": [
              "$P(A) + P(B)$ dans tous les cas",
              "$P(A) \\times P(B)$",
              "$P(A) + P(B) - P(A \\cap B)$",
              "$P(A) - P(B)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le terme $P(A \\cap B)$ corrige le double comptage du cas commun."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un événement du dé non truqué",
          "stepTheme": "Un événement du dé non truqué",
          "stepBadge": "Un événement du dé non truqué",
          "paragraphText": "• Exemple de la leçon : au lancer d’un dé non truqué, $A$ « avoir un nombre pair » vaut $\\{2 ; 4 ; 6\\}$.\nChaque face a la probabilité $\\frac{1}{6}$, donc $P(A)$ vaut trois fois cette valeur, soit $\\frac{1}{2}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p04_q4",
            "type": "mcq",
            "prompt": "Pour le dé non truqué, la probabilité d’obtenir un nombre pair vaut :",
            "options": [
              "$\\frac{1}{6}$",
              "$\\frac{1}{3}$",
              "$\\frac{2}{3}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Trois faces favorables sur six donnent $\\frac{3}{6} = \\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le dé truqué de l’exercice de fixation",
          "stepTheme": "Le dé truqué de l’exercice de fixation",
          "stepBadge": "Le dé truqué de l’exercice de fixation",
          "paragraphText": "• Exercice de fixation : le dé truqué donne les probabilités élémentaires de numérateur $1$, $3$, $5$, $2$, $3$ et $2$, toutes sur $16$.\nPour $A = \\{2 ; 4 ; 6\\}$, on additionne les probabilités de $2$, $4$ et $6$, ce qui donne $\\frac{7}{16}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p04_q5",
            "type": "mcq",
            "prompt": "Avec ce dé truqué, la probabilité de l’événement pair $A = \\{2 ; 4 ; 6\\}$ vaut :",
            "options": [
              "$\\frac{7}{16}$",
              "$\\frac{3}{16}$",
              "$\\frac{1}{2}$",
              "$\\frac{9}{16}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne les numérateurs $3$, $2$ et $2$ sur $16$, soit $\\frac{7}{16}$, comme dans le corrigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La somme ne vaut $P(A) + P(B)$ que sans cas commun",
          "stepTheme": "La somme ne vaut $P(A) + P(B)$ que sans cas commun",
          "stepBadge": "La somme ne vaut $P(A) + P(B)$ que sans cas commun",
          "paragraphText": "• Exercice de la leçon : l’égalité $P(A \\cup B) = P(A) + P(B)$ est fausse en général.\nElle devient vraie lorsque $A$ et $B$ sont incompatibles, car alors $P(A \\cap B) = 0$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p04_q6",
            "type": "mcq",
            "prompt": "L’égalité $P(A \\cup B) = P(A) + P(B)$ est vraie lorsque :",
            "options": [
              "$A$ et $B$ sont quelconques",
              "$A = B$",
              "$A$ et $B$ sont incompatibles",
              "$A$ est certain"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans cas commun, le terme correctif $P(A \\cap B)$ est nul."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p04_q1",
          "type": "mcq",
          "prompt": "Une probabilité associe à tout événement un nombre situé dans :",
          "options": [
            "$[0 ; 1]$",
            "$[1 ; +\\infty[$",
            "$\\mathbb{R}$ entier",
            "$[-1 ; 1]$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $P$ va des parties de $U$ vers l’intervalle $[0 ; 1]$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut $P(\\overline{A})$ en fonction de $P(A)$ ?",
          "options": [
            "$P(A)$",
            "$1 - P(A)$",
            "$1 + P(A)$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’événement et son contraire se partagent l’univers, de probabilité totale $1$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p04_q3",
          "type": "mcq",
          "prompt": "La formule générale de $P(A \\cup B)$ est :",
          "options": [
            "$P(A) + P(B)$ dans tous les cas",
            "$P(A) \\times P(B)$",
            "$P(A) + P(B) - P(A \\cap B)$",
            "$P(A) - P(B)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le terme $P(A \\cap B)$ corrige le double comptage du cas commun."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p04_q4",
          "type": "mcq",
          "prompt": "Pour le dé non truqué, la probabilité d’obtenir un nombre pair vaut :",
          "options": [
            "$\\frac{1}{6}$",
            "$\\frac{1}{3}$",
            "$\\frac{2}{3}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Trois faces favorables sur six donnent $\\frac{3}{6} = \\frac{1}{2}$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p04_q5",
          "type": "mcq",
          "prompt": "Avec ce dé truqué, la probabilité de l’événement pair $A = \\{2 ; 4 ; 6\\}$ vaut :",
          "options": [
            "$\\frac{7}{16}$",
            "$\\frac{3}{16}$",
            "$\\frac{1}{2}$",
            "$\\frac{9}{16}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne les numérateurs $3$, $2$ et $2$ sur $16$, soit $\\frac{7}{16}$, comme dans le corrigé."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p04_q6",
          "type": "mcq",
          "prompt": "L’égalité $P(A \\cup B) = P(A) + P(B)$ est vraie lorsque :",
          "options": [
            "$A$ et $B$ sont quelconques",
            "$A = B$",
            "$A$ et $B$ sont incompatibles",
            "$A$ est certain"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans cas commun, le terme correctif $P(A \\cap B)$ est nul."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l10_probabilite_p05",
      "order": 5,
      "title": "L’équiprobabilité",
      "summary": "Reconnaître une situation d’équiprobabilité et donner la probabilité d’un événement élémentaire.",
      "conceptExplanation": "On dit qu’une expérience aléatoire a lieu dans un cadre d’équiprobabilité des événements élémentaires lorsque tous les événements élémentaires de $U$ ont la même probabilité. Un lancer de dé non truqué est une situation d’équiprobabilité : toutes les faces ont la même chance d’apparaître.\nSi le cardinal de $U$ est $n$, alors sous l’hypothèse d’équiprobabilité, la probabilité d’un événement élémentaire est $\\frac{1}{n}$. Les mots-clés cités par la leçon sont notamment : équitable, équilibré, parfait, uniforme, même chance, indiscernable au toucher.",
      "keyRule": "En équiprobabilité, chaque cas élémentaire vaut un sur le nombre total de cas.",
      "formulas": [
        {
          "name": "Probabilité élémentaire en équiprobabilité",
          "formula": "P(\\{e\\}) = \\frac{1}{n}",
          "note": "Si le cardinal de $U$ est $n$."
        }
      ],
      "workedExample": {
        "title": "Probabilité de chaque face d’un dé équilibré",
        "statement": "On lance un dé parfaitement équilibré. Détermine la probabilité d’apparition de chaque face.",
        "methodSteps": [
          "L’univers est $\\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$, de cardinal $6$.",
          "Le dé étant équilibré, toutes les faces ont la même chance d’apparition : c’est l’équiprobabilité.",
          "Chaque probabilité élémentaire vaut donc un sixième."
        ],
        "conclusion": "Chaque face a la probabilité $\\frac{1}{6}$ d’apparaître."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’équiprobabilité",
          "stepTheme": "L’équiprobabilité",
          "stepBadge": "L’équiprobabilité",
          "paragraphText": "• Définition : une expérience a lieu dans un cadre d’équiprobabilité lorsque tous les événements élémentaires de $U$ ont la même probabilité.\nExemple de la leçon : le lancer d’un dé non truqué.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p05_q1",
            "type": "mcq",
            "prompt": "Il y a équiprobabilité lorsque :",
            "options": [
              "Un événement a la probabilité $1$",
              "Tous les événements élémentaires ont la même probabilité",
              "Tous les événements sont incompatibles",
              "L’univers est infini"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition donnée dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La probabilité d’un événement élémentaire",
          "stepTheme": "La probabilité d’un événement élémentaire",
          "stepBadge": "La probabilité d’un événement élémentaire",
          "paragraphText": "• Propriété 1 : si le cardinal de $U$ est $n$, chaque événement élémentaire a la probabilité $\\frac{1}{n}$ sous l’hypothèse d’équiprobabilité.\nC’est une conséquence du fait que la somme des probabilités vaut $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p05_q2",
            "type": "mcq",
            "prompt": "Si $U$ compte $n$ éventualités équiprobables, la probabilité d’un événement élémentaire vaut :",
            "options": [
              "$n$",
              "$\\frac{1}{n}$",
              "$1$",
              "$\\frac{n}{2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les $n$ parts égales se partagent la probabilité totale $1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Chaque face du dé équilibré",
          "stepTheme": "Chaque face du dé équilibré",
          "stepBadge": "Chaque face du dé équilibré",
          "paragraphText": "• Exercice de fixation : pour un dé parfaitement équilibré, le cardinal de l’univers est $6$.\nChaque face a donc la même probabilité d’apparition, égale à $\\frac{1}{6}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p05_q3",
            "type": "mcq",
            "prompt": "Pour un dé parfaitement équilibré, la probabilité d’apparition de chaque face vaut :",
            "options": [
              "$\\frac{1}{2}$",
              "$\\frac{1}{3}$",
              "$\\frac{1}{6}$",
              "$1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’univers compte six faces équiprobables."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Reconnaître les mots-clés de l’équiprobabilité",
          "stepTheme": "Reconnaître les mots-clés de l’équiprobabilité",
          "stepBadge": "Reconnaître les mots-clés de l’équiprobabilité",
          "paragraphText": "• Remarque de la leçon : les expressions « équilibré », « parfait », « même chance » et « indiscernable au toucher » signalent souvent l’équiprobabilité.\nLa leçon cite aussi « équitable » et « uniforme ».",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p05_q4",
            "type": "mcq",
            "prompt": "Laquelle de ces expressions signale une situation d’équiprobabilité selon la leçon ?",
            "options": [
              "« Dé truqué »",
              "« Boule plus lourde »",
              "« Indiscernable au toucher »",
              "« Résultat connu d’avance »"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les boules indiscernables au toucher ont la même chance d’être choisies."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le dé truqué n’est pas équiprobable",
          "stepTheme": "Le dé truqué n’est pas équiprobable",
          "stepBadge": "Le dé truqué n’est pas équiprobable",
          "paragraphText": "• Piège : dans l’exercice du dé truqué, les faces ont des probabilités différentes, de numérateurs $1$ à $5$ sur $16$.\nOn ne peut donc pas appliquer la formule des cardinaux à ce dé.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p05_q5",
            "type": "mcq",
            "prompt": "Un dé truqué dont les faces ont des probabilités différentes est-il en situation d’équiprobabilité ?",
            "options": [
              "Oui, car il a six faces",
              "Non, car les événements élémentaires n’ont pas la même probabilité",
              "Oui, si la somme vaut $1$",
              "Non, car son univers est vide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’équiprobabilité exige l’égalité des probabilités élémentaires, ce qui manque ici."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Vérifier la somme des probabilités",
          "stepTheme": "Vérifier la somme des probabilités",
          "stepBadge": "Vérifier la somme des probabilités",
          "paragraphText": "• Contrôle : en équiprobabilité comme ailleurs, la somme des probabilités de tous les événements élémentaires vaut $P(U) = 1$.\nPour le dé truqué de la leçon, les numérateurs $1$, $3$, $5$, $2$, $3$ et $2$ totalisent bien $16$ sur $16$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p05_q6",
            "type": "mcq",
            "prompt": "La somme des probabilités de tous les événements élémentaires vaut toujours :",
            "options": [
              "$0$",
              "$\\frac{1}{2}$",
              "$6$",
              "$1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est $P(U)$, et $P(U) = 1$ par définition d’une probabilité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p05_q1",
          "type": "mcq",
          "prompt": "Il y a équiprobabilité lorsque :",
          "options": [
            "Un événement a la probabilité $1$",
            "Tous les événements élémentaires ont la même probabilité",
            "Tous les événements sont incompatibles",
            "L’univers est infini"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition donnée dans la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p05_q2",
          "type": "mcq",
          "prompt": "Si $U$ compte $n$ éventualités équiprobables, la probabilité d’un événement élémentaire vaut :",
          "options": [
            "$n$",
            "$\\frac{1}{n}$",
            "$1$",
            "$\\frac{n}{2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les $n$ parts égales se partagent la probabilité totale $1$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p05_q3",
          "type": "mcq",
          "prompt": "Pour un dé parfaitement équilibré, la probabilité d’apparition de chaque face vaut :",
          "options": [
            "$\\frac{1}{2}$",
            "$\\frac{1}{3}$",
            "$\\frac{1}{6}$",
            "$1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’univers compte six faces équiprobables."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p05_q4",
          "type": "mcq",
          "prompt": "Laquelle de ces expressions signale une situation d’équiprobabilité selon la leçon ?",
          "options": [
            "« Dé truqué »",
            "« Boule plus lourde »",
            "« Indiscernable au toucher »",
            "« Résultat connu d’avance »"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les boules indiscernables au toucher ont la même chance d’être choisies."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p05_q5",
          "type": "mcq",
          "prompt": "Un dé truqué dont les faces ont des probabilités différentes est-il en situation d’équiprobabilité ?",
          "options": [
            "Oui, car il a six faces",
            "Non, car les événements élémentaires n’ont pas la même probabilité",
            "Oui, si la somme vaut $1$",
            "Non, car son univers est vide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’équiprobabilité exige l’égalité des probabilités élémentaires, ce qui manque ici."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p05_q6",
          "type": "mcq",
          "prompt": "La somme des probabilités de tous les événements élémentaires vaut toujours :",
          "options": [
            "$0$",
            "$\\frac{1}{2}$",
            "$6$",
            "$1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est $P(U)$, et $P(U) = 1$ par définition d’une probabilité."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l10_probabilite_p06",
      "order": 6,
      "title": "Calculs de probabilités en équiprobabilité",
      "summary": "Calculer une probabilité par les cardinaux et traiter les applications de la leçon : loterie et double lancer.",
      "conceptExplanation": "Dans une situation d’équiprobabilité, la probabilité d’un événement $A$ est le nombre de cas favorables à $A$ divisé par le nombre de cas possibles, soit le cardinal de $A$ divisé par le cardinal de $U$.\nApplications de la leçon : au dé équilibré, l’événement « multiple de $3$ » a deux cas favorables sur six ; à la loterie de la roue à huit secteurs, perdre a la probabilité $\\frac{4}{8} = 0{,}5$ et gagner, réunion des secteurs noirs et rouges, incompatibles, a aussi la probabilité $0{,}375 + 0{,}125 = 0{,}5$ : le groupe d’élèves a donc raison, il y a autant de chance de gagner que de perdre. Au double lancer de dé, $9$ couples sur $36$ ont leurs deux nombres supérieurs ou égaux à $4$.",
      "keyRule": "En équiprobabilité, on compte : cas favorables divisés par cas possibles, en vérifiant que le résultat reste entre $0$ et $1$.",
      "formulas": [
        {
          "name": "Probabilité en équiprobabilité",
          "formula": "P(A) = \\frac{\\mathrm{Card}(A)}{\\mathrm{Card}(U)}"
        }
      ],
      "workedExample": {
        "title": "La loterie de la roue à huit secteurs",
        "statement": "Une roue est partagée en huit secteurs équiprobables : $4$ blancs font perdre, $3$ noirs et $1$ rouge font gagner. Un joueur a-t-il autant de chance de gagner que de perdre ?",
        "methodSteps": [
          "L’univers compte $8$ secteurs, tous équiprobables.",
          "Perdre correspond à $4$ secteurs : sa probabilité est $\\frac{4}{8} = 0{,}5$.",
          "Gagner réunit les $3$ secteurs noirs et le secteur rouge, incompatibles : sa probabilité est $\\frac{3}{8} + \\frac{1}{8} = 0{,}5$."
        ],
        "conclusion": "Les deux probabilités sont égales : le groupe d’élèves a raison."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule des cardinaux",
          "stepTheme": "La formule des cardinaux",
          "stepBadge": "La formule des cardinaux",
          "paragraphText": "• Propriété 2 : en équiprobabilité, $P(A)$ est le nombre de cas favorables à $A$ divisé par le nombre de cas possibles.\nLa leçon l’écrit avec les cardinaux de $A$ et de $U$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p06_q1",
            "type": "mcq",
            "prompt": "En équiprobabilité, $P(A)$ vaut :",
            "options": [
              "$\\frac{\\mathrm{Card}(U)}{\\mathrm{Card}(A)}$",
              "$\\frac{\\mathrm{Card}(A)}{\\mathrm{Card}(U)}$",
              "$\\mathrm{Card}(A)$",
              "$\\frac{1}{\\mathrm{Card}(A)}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cas favorables sur cas possibles : c’est le quotient des cardinaux."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un multiple de $3$ au dé équilibré",
          "stepTheme": "Un multiple de $3$ au dé équilibré",
          "stepBadge": "Un multiple de $3$ au dé équilibré",
          "paragraphText": "• Exercice de fixation : l’événement $E$ « on obtient un multiple de $3$ » vaut $\\{3 ; 6\\}$, de cardinal $2$.\nL’univers a pour cardinal $6$, donc $P(E) = \\frac{1}{3}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p06_q2",
            "type": "mcq",
            "prompt": "La probabilité d’obtenir un multiple de $3$ avec un dé équilibré vaut :",
            "options": [
              "$\\frac{1}{6}$",
              "$\\frac{1}{2}$",
              "$\\frac{1}{3}$",
              "$\\frac{2}{3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux cas favorables sur six cas possibles donnent $\\frac{2}{6} = \\frac{1}{3}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Utiliser les formules de dénombrement",
          "stepTheme": "Utiliser les formules de dénombrement",
          "stepBadge": "Utiliser les formules de dénombrement",
          "paragraphText": "• Remarque 2 de la leçon : il n’est pas toujours évident d’écrire un événement en extension avant de déterminer son cardinal.\nLes formules de dénombrement permettent de déterminer directement le cardinal d’un événement.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p06_q3",
            "type": "mcq",
            "prompt": "À quoi servent les formules de dénombrement dans ces calculs ?",
            "options": [
              "À changer l’univers",
              "À déterminer directement le cardinal d’un événement",
              "À rendre les événements incompatibles",
              "À supprimer l’équiprobabilité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elles donnent les cardinaux sans écrire toutes les éventualités en extension."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La réunion chiffrée de l’exercice 2",
          "stepTheme": "La réunion chiffrée de l’exercice 2",
          "stepBadge": "La réunion chiffrée de l’exercice 2",
          "paragraphText": "• Exercice de la leçon : avec $P(A) = 0{,}33$, $P(B) = 0{,}15$ et $P(A \\cap B) = 0{,}09$, la formule de la réunion donne un résultat précis.\nOn additionne les deux premières valeurs et on retire la troisième.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p06_q4",
            "type": "mcq",
            "prompt": "Avec ces valeurs, $P(A \\cup B)$ vaut :",
            "options": [
              "$0{,}48$",
              "$0{,}57$",
              "$0{,}39$",
              "$0{,}09$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $0{,}33 + 0{,}15 - 0{,}09 = 0{,}39$, comme dans le corrigé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La loterie de la situation complexe",
          "stepTheme": "La loterie de la situation complexe",
          "stepBadge": "La loterie de la situation complexe",
          "paragraphText": "• Situation complexe : la roue a huit secteurs équiprobables ; perdre correspond à $4$ secteurs blancs, gagner à $3$ secteurs noirs et $1$ secteur rouge.\nLa probabilité de gagner, réunion de deux événements incompatibles, vaut donc $\\frac{1}{2}$, comme celle de perdre.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p06_q5",
            "type": "mcq",
            "prompt": "Dans la loterie de la leçon, la probabilité de gagner vaut :",
            "options": [
              "$\\frac{3}{8}$",
              "$\\frac{1}{2}$",
              "$\\frac{1}{8}$",
              "$\\frac{5}{8}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Gagner réunit $3$ cas et $1$ cas sur $8$, soit $\\frac{4}{8} = \\frac{1}{2}$, autant que perdre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Deux lancers de dé : compter les couples",
          "stepTheme": "Deux lancers de dé : compter les couples",
          "stepBadge": "Deux lancers de dé : compter les couples",
          "paragraphText": "• Exercice de la leçon : deux lancers successifs donnent $36$ couples possibles, et $9$ couples ont leurs deux nombres supérieurs ou égaux à $4$.\nLa probabilité cherchée est donc $\\frac{9}{36}$, soit $0{,}25$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l10_probabilite_p06_q6",
            "type": "mcq",
            "prompt": "Au double lancer de dé équilibré, la probabilité que les deux nombres soient supérieurs ou égaux à $4$ vaut :",
            "options": [
              "$\\frac{1}{36}$",
              "$\\frac{9}{36}$",
              "$\\frac{4}{36}$",
              "$\\frac{16}{36}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il y a $9$ couples favorables parmi les $36$ couples possibles, soit $0{,}25$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p06_q1",
          "type": "mcq",
          "prompt": "En équiprobabilité, $P(A)$ vaut :",
          "options": [
            "$\\frac{\\mathrm{Card}(U)}{\\mathrm{Card}(A)}$",
            "$\\frac{\\mathrm{Card}(A)}{\\mathrm{Card}(U)}$",
            "$\\mathrm{Card}(A)$",
            "$\\frac{1}{\\mathrm{Card}(A)}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Cas favorables sur cas possibles : c’est le quotient des cardinaux."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p06_q2",
          "type": "mcq",
          "prompt": "La probabilité d’obtenir un multiple de $3$ avec un dé équilibré vaut :",
          "options": [
            "$\\frac{1}{6}$",
            "$\\frac{1}{2}$",
            "$\\frac{1}{3}$",
            "$\\frac{2}{3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux cas favorables sur six cas possibles donnent $\\frac{2}{6} = \\frac{1}{3}$."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p06_q3",
          "type": "mcq",
          "prompt": "À quoi servent les formules de dénombrement dans ces calculs ?",
          "options": [
            "À changer l’univers",
            "À déterminer directement le cardinal d’un événement",
            "À rendre les événements incompatibles",
            "À supprimer l’équiprobabilité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elles donnent les cardinaux sans écrire toutes les éventualités en extension."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p06_q4",
          "type": "mcq",
          "prompt": "Avec ces valeurs, $P(A \\cup B)$ vaut :",
          "options": [
            "$0{,}48$",
            "$0{,}57$",
            "$0{,}39$",
            "$0{,}09$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $0{,}33 + 0{,}15 - 0{,}09 = 0{,}39$, comme dans le corrigé."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p06_q5",
          "type": "mcq",
          "prompt": "Dans la loterie de la leçon, la probabilité de gagner vaut :",
          "options": [
            "$\\frac{3}{8}$",
            "$\\frac{1}{2}$",
            "$\\frac{1}{8}$",
            "$\\frac{5}{8}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Gagner réunit $3$ cas et $1$ cas sur $8$, soit $\\frac{4}{8} = \\frac{1}{2}$, autant que perdre."
        },
        {
          "id": "premiere_c_maths_numerique_l10_probabilite_p06_q6",
          "type": "mcq",
          "prompt": "Au double lancer de dé équilibré, la probabilité que les deux nombres soient supérieurs ou égaux à $4$ vaut :",
          "options": [
            "$\\frac{1}{36}$",
            "$\\frac{9}{36}$",
            "$\\frac{4}{36}$",
            "$\\frac{16}{36}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il y a $9$ couples favorables parmi les $36$ couples possibles, soit $0{,}25$."
        }
      ]
    }
  ]
};
