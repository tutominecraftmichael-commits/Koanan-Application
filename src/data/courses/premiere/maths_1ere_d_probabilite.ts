import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Probabilité » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Probabilité » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L05_PROBABILITE: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l05_probabilite",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 5,
  "title": "Leçon 5 : Probabilité",
  "summary": "La leçon pose le vocabulaire des expériences aléatoires (univers, éventualités, événements et opérations sur les événements), définit une probabilité et ses propriétés, puis traite le cas de l’équiprobabilité où la probabilité d’un événement est le rapport de son cardinal à celui de l’univers.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Probabilité » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l05_probabilite_p01",
      "order": 1,
      "title": "Expérience aléatoire, univers et éventualités",
      "summary": "Définir une expérience aléatoire, une éventualité et l’univers des éventualités, et écrire un univers en extension.",
      "conceptExplanation": "Une expérience ou épreuve aléatoire est une expérience dont on ne connaît pas d’avance le résultat mais dont on connaît les résultats possibles.\nExemples : le lancer d’un dé cubique parfaitement équilibré et le lancer d’une pièce de monnaie sont des expériences aléatoires. En revanche, « choisir la bouteille de Fanta » parmi trois bouteilles de limonade posées sur une table n’est pas une expérience aléatoire, alors que « choisir une boule » parmi cinq boules numérotées, de même taille et indiscernables au toucher, placées dans un carton non transparent, en est une.\nSoit une expérience aléatoire donnant un nombre fini de résultats possibles. Chaque résultat possible est appelé éventualité, et l’ensemble de ces résultats possibles est appelé univers des éventualités ; on le note $U$ ou $\\Omega$.\nExemple : pour le lancer d’un dé, les éventualités sont $1$, $2$, $3$, $4$, $5$, $6$ et l’univers est l’ensemble de ces six nombres ; pour le lancer de deux pièces de monnaie, l’univers écrit en extension est formé des quatre couples de pile ($P$) et face ($F$).",
      "keyRule": "Aléatoire ne veut pas dire inconnu de bout en bout : on ne connaît pas le résultat, mais on connaît tous les résultats possibles, qui forment l’univers.",
      "formulas": [
        {
          "name": "Univers du lancer de deux pièces",
          "formula": "U = \\{(P, P) {;} (P, F) {;} (F, P) {;} (F, F)\\}"
        }
      ],
      "workedExample": {
        "title": "L’univers du lancer de deux pièces (exemple de la leçon)",
        "statement": "On lance deux pièces de monnaie. Écris l’univers de toutes les éventualités de cette expérience.",
        "methodSteps": [
          "Chaque pièce donne deux résultats possibles : pile ($P$) ou face ($F$).",
          "On forme tous les couples possibles, le premier élément pour la première pièce et le second pour la deuxième.",
          "On obtient quatre couples : $(P, P)$, $(P, F)$, $(F, P)$ et $(F, F)$."
        ],
        "conclusion": "$U = \\{(P, P) ; (P, F) ; (F, P) ; (F, F)\\}$ : l’univers a quatre éventualités."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’expérience aléatoire",
          "stepTheme": "L’expérience aléatoire",
          "stepBadge": "L’expérience aléatoire",
          "paragraphText": "• Définition : une expérience ou épreuve aléatoire est une expérience dont on ne connaît pas d’avance le résultat mais dont on connaît les résultats possibles.\nExemples de la leçon : le lancer d’un dé cubique parfaitement équilibré et le lancer d’une pièce de monnaie.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p01_q1",
            "type": "mcq",
            "prompt": "Une expérience aléatoire est une expérience :",
            "options": [
              "Dont on connaît le résultat d’avance",
              "Dont on ne connaît pas d’avance le résultat mais dont on connaît les résultats possibles",
              "Dont on ignore tous les résultats possibles",
              "Qui donne toujours le même résultat"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la leçon : résultat imprévisible, mais résultats possibles connus."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une expérience aléatoire",
          "stepTheme": "Reconnaître une expérience aléatoire",
          "stepBadge": "Reconnaître une expérience aléatoire",
          "paragraphText": "• Exemples de la leçon : choisir la bouteille de Fanta parmi trois bouteilles posées sur une table n’est pas une expérience aléatoire.\nChoisir une boule parmi cinq boules indiscernables au toucher dans un carton non transparent est une expérience aléatoire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p01_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces expériences est aléatoire selon la leçon ?",
            "options": [
              "Choisir la bouteille de Fanta parmi trois bouteilles posées sur une table",
              "Lire le numéro écrit sur une boule qu’on regarde",
              "Choisir une boule parmi cinq boules indiscernables au toucher dans un carton non transparent",
              "Prendre la première bouteille venue sur une table"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les boules indiscernables au toucher rendent le résultat imprévisible : c’est l’exemple aléatoire de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Éventualité et univers",
          "stepTheme": "Éventualité et univers",
          "stepBadge": "Éventualité et univers",
          "paragraphText": "• Définitions : chaque résultat possible d’une expérience aléatoire est appelé éventualité.\nL’ensemble de ces résultats possibles est appelé univers des éventualités, noté $U$ ou $\\Omega$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p01_q3",
            "type": "mcq",
            "prompt": "L’univers des éventualités est :",
            "options": [
              "Un seul résultat possible",
              "L’ensemble de tous les résultats possibles de l’expérience",
              "Un événement impossible",
              "Le résultat effectivement obtenu"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’univers regroupe toutes les éventualités de l’expérience."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les univers du dé et de la pièce",
          "stepTheme": "Les univers du dé et de la pièce",
          "stepBadge": "Les univers du dé et de la pièce",
          "paragraphText": "• Exemples de la leçon : pour le lancer d’un dé, les éventualités sont $1$, $2$, $3$, $4$, $5$, $6$ et l’univers est l’ensemble de ces six nombres.\nPour le lancer d’une pièce, les éventualités sont pile ($P$) et face ($F$).",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p01_q4",
            "type": "mcq",
            "prompt": "Combien l’univers du lancer de deux pièces de monnaie contient-il d’éventualités ?",
            "options": [
              "$2$",
              "$3$",
              "$6$",
              "$4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’univers en extension compte quatre couples : $(P, P)$, $(P, F)$, $(F, P)$ et $(F, F)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Écrire l’univers en extension",
          "stepTheme": "Écrire l’univers en extension",
          "stepBadge": "Écrire l’univers en extension",
          "paragraphText": "• Exemple de la leçon : pour deux pièces, on écrit l’univers en extension, c’est-à-dire en listant toutes les éventualités.\nChaque éventualité est un couple dont les deux éléments sont $P$ ou $F$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p01_q5",
            "type": "mcq",
            "prompt": "Lequel de ces couples est une éventualité du lancer de deux pièces ?",
            "options": [
              "$(F, P)$",
              "$(P, P, F)$",
              "$P$ tout seul",
              "$(F, F, F)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une éventualité est un couple de deux résultats : $(F, P)$ en fait partie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Connaître les résultats possibles ne rend pas le résultat prévisible",
          "stepTheme": "Connaître les résultats possibles ne rend pas le résultat prévisible",
          "stepBadge": "Connaître les résultats possibles ne rend pas le résultat prévisible",
          "paragraphText": "• Piège : dans une expérience aléatoire, on connaît les résultats possibles, mais pas le résultat qui va se produire.\nC’est exactement la situation de M. Konan dans la situation d’apprentissage : il connaît les quatre chiffres de son code, mais pas leur ordre pour son dernier essai.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p01_q6",
            "type": "mcq",
            "prompt": "Dans une expérience aléatoire, que connaît-on d’avance ?",
            "options": [
              "Le résultat exact",
              "Rien du tout",
              "Les résultats possibles, mais pas le résultat",
              "Le résultat le plus fréquent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition même : résultats possibles connus, résultat effectif inconnu."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p01_q1",
          "type": "mcq",
          "prompt": "Une expérience aléatoire est une expérience :",
          "options": [
            "Dont on connaît le résultat d’avance",
            "Dont on ne connaît pas d’avance le résultat mais dont on connaît les résultats possibles",
            "Dont on ignore tous les résultats possibles",
            "Qui donne toujours le même résultat"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la leçon : résultat imprévisible, mais résultats possibles connus."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p01_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces expériences est aléatoire selon la leçon ?",
          "options": [
            "Choisir la bouteille de Fanta parmi trois bouteilles posées sur une table",
            "Lire le numéro écrit sur une boule qu’on regarde",
            "Choisir une boule parmi cinq boules indiscernables au toucher dans un carton non transparent",
            "Prendre la première bouteille venue sur une table"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les boules indiscernables au toucher rendent le résultat imprévisible : c’est l’exemple aléatoire de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p01_q3",
          "type": "mcq",
          "prompt": "L’univers des éventualités est :",
          "options": [
            "Un seul résultat possible",
            "L’ensemble de tous les résultats possibles de l’expérience",
            "Un événement impossible",
            "Le résultat effectivement obtenu"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’univers regroupe toutes les éventualités de l’expérience."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p01_q4",
          "type": "mcq",
          "prompt": "Combien l’univers du lancer de deux pièces de monnaie contient-il d’éventualités ?",
          "options": [
            "$2$",
            "$3$",
            "$6$",
            "$4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’univers en extension compte quatre couples : $(P, P)$, $(P, F)$, $(F, P)$ et $(F, F)$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p01_q5",
          "type": "mcq",
          "prompt": "Lequel de ces couples est une éventualité du lancer de deux pièces ?",
          "options": [
            "$(F, P)$",
            "$(P, P, F)$",
            "$P$ tout seul",
            "$(F, F, F)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une éventualité est un couple de deux résultats : $(F, P)$ en fait partie."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p01_q6",
          "type": "mcq",
          "prompt": "Dans une expérience aléatoire, que connaît-on d’avance ?",
          "options": [
            "Le résultat exact",
            "Rien du tout",
            "Les résultats possibles, mais pas le résultat",
            "Le résultat le plus fréquent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition même : résultats possibles connus, résultat effectif inconnu."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l05_probabilite_p02",
      "order": 2,
      "title": "Les événements et leurs types",
      "summary": "Définir un événement comme une partie de l’univers et reconnaître les événements élémentaires, impossibles et certains.",
      "conceptExplanation": "Définition : $U$ étant l’univers des éventualités d’une expérience aléatoire, on appelle événement de $U$ toute partie de $U$.\nLorsque cette partie de $U$ est un singleton, on l’appelle événement élémentaire ; lorsque cette partie de $U$ est l’ensemble vide, on l’appelle événement impossible ; lorsque cette partie de $U$ est l’ensemble $U$, on l’appelle événement certain.\nExemples de la leçon : lors d’un lancer de pièce de monnaie, le résultat obtenu, « soit pile » ou « face », est un événement élémentaire ; lors d’un lancer de dé équilibré numéroté de $1$ à $6$, obtenir le chiffre $7$ est un événement impossible ; pour une femme qui porte une grossesse, « accoucher d’un garçon ou d’une fille » est un événement certain.\nExemple des deux pièces : l’événement $A$ « obtenir pile au premier lancer » est formé des couples $(P, P)$ et $(P, F)$, et l’événement $B$ « obtenir pile au deuxième lancer » est formé des couples $(F, P)$ et $(P, P)$.",
      "keyRule": "Un événement est une partie de l’univers : singleton pour élémentaire, ensemble vide pour impossible, univers entier pour certain.",
      "formulas": [
        {
          "name": "Événement impossible",
          "formula": "A = \\emptyset"
        },
        {
          "name": "Événement certain",
          "formula": "A = U"
        }
      ],
      "workedExample": {
        "title": "Les événements des deux pièces (exemple de la leçon)",
        "statement": "Lors du lancer de deux pièces de monnaie, détermine les événements $A$ : « obtenir pile ($P$) au premier lancer » et $B$ : « obtenir pile au deuxième lancer ».",
        "methodSteps": [
          "L’univers est $U = \\{(P, P) ; (P, F) ; (F, P) ; (F, F)\\}$.",
          "Pour $A$, on retient les couples dont le premier élément est $P$ : $A = \\{(P, P) ; (P, F)\\}$.",
          "Pour $B$, on retient les couples dont le second élément est $P$ : $B = \\{(F, P) ; (P, P)\\}$."
        ],
        "conclusion": "Chaque événement est une partie de l’univers, formée des éventualités qui le réalisent."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’événement, partie de l’univers",
          "stepTheme": "L’événement, partie de l’univers",
          "stepBadge": "L’événement, partie de l’univers",
          "paragraphText": "• Définition : $U$ étant l’univers des éventualités, on appelle événement de $U$ toute partie de $U$.\nUn événement est donc un ensemble d’éventualités.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p02_q1",
            "type": "mcq",
            "prompt": "Un événement d’un univers $U$ est :",
            "options": [
              "Une éventualité unique",
              "Toute partie de $U$",
              "Un nombre entre $0$ et $1$",
              "L’univers d’une autre expérience"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la leçon : un événement est une partie de l’univers."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’événement élémentaire",
          "stepTheme": "L’événement élémentaire",
          "stepBadge": "L’événement élémentaire",
          "paragraphText": "• Définition : lorsque la partie de $U$ est un singleton, on l’appelle événement élémentaire.\nExemple : lors d’un lancer de pièce, « soit pile » ou « face » est un événement élémentaire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p02_q2",
            "type": "mcq",
            "prompt": "Un événement élémentaire est un événement qui est :",
            "options": [
              "L’ensemble vide",
              "L’univers entier",
              "Un singleton",
              "Formé de deux éventualités"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un singleton, c’est-à-dire une partie à une seule éventualité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L’événement impossible",
          "stepTheme": "L’événement impossible",
          "stepBadge": "L’événement impossible",
          "paragraphText": "• Définition : lorsque la partie de $U$ est l’ensemble vide, on l’appelle événement impossible.\nExemple de la leçon : obtenir le chiffre $7$ lors d’un lancer de dé numéroté de $1$ à $6$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p02_q3",
            "type": "mcq",
            "prompt": "Obtenir le chiffre $7$ lors d’un lancer de dé numéroté de $1$ à $6$ est :",
            "options": [
              "Un événement certain",
              "Un événement élémentaire",
              "Un événement impossible",
              "L’univers de l’expérience"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Aucune éventualité ne réalise cet événement : c’est l’ensemble vide, donc un événement impossible."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "L’événement certain",
          "stepTheme": "L’événement certain",
          "stepBadge": "L’événement certain",
          "paragraphText": "• Définition : lorsque la partie de $U$ est l’ensemble $U$, on l’appelle événement certain.\nExemple de la leçon : pour une femme qui porte une grossesse, « accoucher d’un garçon ou d’une fille » est un événement certain.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p02_q4",
            "type": "mcq",
            "prompt": "Un événement certain est un événement égal à :",
            "options": [
              "Un singleton",
              "$U$, l’univers entier",
              "L’ensemble vide",
              "Une seule éventualité"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’événement certain regroupe toutes les éventualités : $A = U$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’événement pile au premier lancer",
          "stepTheme": "L’événement pile au premier lancer",
          "stepBadge": "L’événement pile au premier lancer",
          "paragraphText": "• Exemple de la leçon : pour deux pièces, $A$ : « obtenir pile au premier lancer » retient les couples dont le premier élément est $P$.\nOn a $A = \\{(P, P) ; (P, F)\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut l’événement $A$ : « obtenir pile au premier lancer » ?",
            "options": [
              "$\\{(F, P) ; (P, P)\\}$",
              "$\\{(P, P)\\}$",
              "$\\{(F, F)\\}$",
              "$\\{(P, P) ; (P, F)\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On retient les couples commençant par $P$ : $(P, P)$ et $(P, F)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un événement n’est pas forcément élémentaire",
          "stepTheme": "Un événement n’est pas forcément élémentaire",
          "stepBadge": "Un événement n’est pas forcément élémentaire",
          "paragraphText": "• Piège : l’événement $A$ des deux pièces contient deux éventualités, ce n’est donc pas un événement élémentaire.\nSeuls les singletons, comme l’événement formé du seul couple $(P, P)$, sont élémentaires.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p02_q6",
            "type": "mcq",
            "prompt": "Combien d’éventualités l’événement $A$ : « obtenir pile au premier lancer » contient-il ?",
            "options": [
              "$2$",
              "$1$",
              "$4$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’événement $A$ est formé des couples $(P, P)$ et $(P, F)$ : deux éventualités."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p02_q1",
          "type": "mcq",
          "prompt": "Un événement d’un univers $U$ est :",
          "options": [
            "Une éventualité unique",
            "Toute partie de $U$",
            "Un nombre entre $0$ et $1$",
            "L’univers d’une autre expérience"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la leçon : un événement est une partie de l’univers."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p02_q2",
          "type": "mcq",
          "prompt": "Un événement élémentaire est un événement qui est :",
          "options": [
            "L’ensemble vide",
            "L’univers entier",
            "Un singleton",
            "Formé de deux éventualités"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un singleton, c’est-à-dire une partie à une seule éventualité."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p02_q3",
          "type": "mcq",
          "prompt": "Obtenir le chiffre $7$ lors d’un lancer de dé numéroté de $1$ à $6$ est :",
          "options": [
            "Un événement certain",
            "Un événement élémentaire",
            "Un événement impossible",
            "L’univers de l’expérience"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Aucune éventualité ne réalise cet événement : c’est l’ensemble vide, donc un événement impossible."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p02_q4",
          "type": "mcq",
          "prompt": "Un événement certain est un événement égal à :",
          "options": [
            "Un singleton",
            "$U$, l’univers entier",
            "L’ensemble vide",
            "Une seule éventualité"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’événement certain regroupe toutes les éventualités : $A = U$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut l’événement $A$ : « obtenir pile au premier lancer » ?",
          "options": [
            "$\\{(F, P) ; (P, P)\\}$",
            "$\\{(P, P)\\}$",
            "$\\{(F, F)\\}$",
            "$\\{(P, P) ; (P, F)\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On retient les couples commençant par $P$ : $(P, P)$ et $(P, F)$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p02_q6",
          "type": "mcq",
          "prompt": "Combien d’éventualités l’événement $A$ : « obtenir pile au premier lancer » contient-il ?",
          "options": [
            "$2$",
            "$1$",
            "$4$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’événement $A$ est formé des couples $(P, P)$ et $(P, F)$ : deux éventualités."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l05_probabilite_p03",
      "order": 3,
      "title": "Opérations sur les événements",
      "summary": "Utiliser l’intersection, la réunion, le contraire et la notion d’événements incompatibles.",
      "conceptExplanation": "Le tableau récapitulatif de la leçon fait le lien entre le langage des ensembles et celui des probabilités.\nL’intersection $A \\cap B$ correspond à l’événement « $A$ et $B$ » : une éventualité le réalise lorsqu’elle réalise l’événement $A$ et l’événement $B$.\nLa réunion $A \\cup B$ correspond à l’événement « $A$ ou $B$ » : une éventualité le réalise lorsqu’elle réalise l’événement $A$ ou l’événement $B$.\nLe contraire de $A$, noté avec une barre sur $A$, est formé des éventualités de $U$ qui ne réalisent pas $A$ ; $A$ et son contraire sont disjoints, leur réunion est $U$ et leur intersection est l’ensemble vide.\nDeux événements $A$ et $B$ sont incompatibles (disjoints) lorsque leur intersection est vide : l’événement « $A$ et $B$ » est alors impossible.\nExemple : pour les événements $A$ et $B$ du lancer de deux pièces, l’intersection est formée du seul couple $(P, P)$.",
      "keyRule": "« Et » se traduit par l’intersection, « ou » par la réunion, et deux événements d’intersection vide sont incompatibles.",
      "formulas": [
        {
          "name": "Événement « A et B »",
          "formula": "A \\cap B"
        },
        {
          "name": "Événement « A ou B »",
          "formula": "A \\cup B"
        },
        {
          "name": "Événements incompatibles",
          "formula": "A \\cap B = \\emptyset"
        }
      ],
      "workedExample": {
        "title": "Intersection des événements des deux pièces",
        "statement": "Pour le lancer de deux pièces, on donne $A = \\{(P, P) ; (P, F)\\}$ et $B = \\{(F, P) ; (P, P)\\}$. Détermine l’événement « $A$ et $B$ ».",
        "methodSteps": [
          "L’événement « $A$ et $B$ » est l’intersection $A \\cap B$.",
          "On cherche les éventualités communes à $A$ et à $B$.",
          "Le seul couple présent dans les deux événements est $(P, P)$."
        ],
        "conclusion": "$A \\cap B = \\{(P, P)\\}$ : obtenir pile aux deux lancers."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’événement « A et B »",
          "stepTheme": "L’événement « A et B »",
          "stepBadge": "L’événement « A et B »",
          "paragraphText": "• Tableau récapitulatif : l’intersection $A \\cap B$ correspond à l’événement « $A$ et $B$ ».\nUne éventualité réalise cet événement lorsqu’elle réalise $A$ et qu’elle réalise $B$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p03_q1",
            "type": "mcq",
            "prompt": "L’événement « $A$ et $B$ » correspond à :",
            "options": [
              "$A \\cup B$",
              "$A \\cap B$",
              "Le contraire de $A$",
              "L’ensemble vide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "« Et » se traduit par l’intersection des deux événements."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "L’événement « A ou B »",
          "stepTheme": "L’événement « A ou B »",
          "stepBadge": "L’événement « A ou B »",
          "paragraphText": "• Tableau récapitulatif : la réunion $A \\cup B$ correspond à l’événement « $A$ ou $B$ ».\nUne éventualité réalise cet événement lorsqu’elle réalise $A$ ou lorsqu’elle réalise $B$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p03_q2",
            "type": "mcq",
            "prompt": "L’événement « $A$ ou $B$ » correspond à :",
            "options": [
              "$A \\cap B$",
              "Le contraire de $B$",
              "$A \\cup B$",
              "Un singleton"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« Ou » se traduit par la réunion des deux événements."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le contraire d’un événement",
          "stepTheme": "Le contraire d’un événement",
          "stepBadge": "Le contraire d’un événement",
          "paragraphText": "• Tableau récapitulatif : le contraire de $A$ est formé des éventualités qui ne réalisent pas $A$.\n$A$ et son contraire vérifient : leur réunion est $U$ et leur intersection est l’ensemble vide.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p03_q3",
            "type": "mcq",
            "prompt": "Le contraire de l’événement $A$ est formé des éventualités qui :",
            "options": [
              "Réalisent $A$",
              "Réalisent $A$ et un autre événement",
              "Appartiennent à un autre univers",
              "Ne réalisent pas $A$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, une éventualité est dans le contraire de $A$ si et seulement si elle n’est pas dans $A$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les événements incompatibles",
          "stepTheme": "Les événements incompatibles",
          "stepBadge": "Les événements incompatibles",
          "paragraphText": "• Tableau récapitulatif : si $A \\cap B$ est l’ensemble vide, l’événement « $A$ et $B$ » est impossible.\nOn dit alors que $A$ et $B$ sont des événements incompatibles, ou disjoints.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p03_q4",
            "type": "mcq",
            "prompt": "Deux événements $A$ et $B$ sont incompatibles lorsque :",
            "options": [
              "$A \\cap B = \\emptyset$",
              "$A \\cup B = U$",
              "$A = B$",
              "$A \\cap B$ est un singleton"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Incompatibles signifie disjoints : aucune éventualité ne réalise les deux à la fois."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’intersection des événements des deux pièces",
          "stepTheme": "L’intersection des événements des deux pièces",
          "stepBadge": "L’intersection des événements des deux pièces",
          "paragraphText": "• Exemple de la leçon : $A = \\{(P, P) ; (P, F)\\}$ et $B = \\{(F, P) ; (P, P)\\}$.\nLe couple $(P, P)$ est le seul élément commun aux deux événements.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p03_q5",
            "type": "mcq",
            "prompt": "Que vaut $A \\cap B$ pour ces deux événements ?",
            "options": [
              "$\\{(P, F)\\}$",
              "$\\{(P, P)\\}$",
              "$\\{(F, P)\\}$",
              "$U$ tout entier"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le seul couple présent dans $A$ et dans $B$ est $(P, P)$ : pile aux deux lancers."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre « et » et « ou »",
          "stepTheme": "Ne pas confondre « et » et « ou »",
          "stepBadge": "Ne pas confondre « et » et « ou »",
          "paragraphText": "• Piège : « $A$ et $B$ » exige la réalisation simultanée des deux événements, c’est l’intersection.\n« $A$ ou $B$ » se contente de l’un des deux, c’est la réunion, en général plus grande.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p03_q6",
            "type": "mcq",
            "prompt": "Pour qu’une éventualité réalise l’événement « $A$ et $B$ », il faut qu’elle réalise :",
            "options": [
              "$A$ seulement",
              "$B$ seulement",
              "Au moins l’un des deux",
              "$A$ et $B$ à la fois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’intersection ne contient que les éventualités communes aux deux événements."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p03_q1",
          "type": "mcq",
          "prompt": "L’événement « $A$ et $B$ » correspond à :",
          "options": [
            "$A \\cup B$",
            "$A \\cap B$",
            "Le contraire de $A$",
            "L’ensemble vide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "« Et » se traduit par l’intersection des deux événements."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p03_q2",
          "type": "mcq",
          "prompt": "L’événement « $A$ ou $B$ » correspond à :",
          "options": [
            "$A \\cap B$",
            "Le contraire de $B$",
            "$A \\cup B$",
            "Un singleton"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« Ou » se traduit par la réunion des deux événements."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p03_q3",
          "type": "mcq",
          "prompt": "Le contraire de l’événement $A$ est formé des éventualités qui :",
          "options": [
            "Réalisent $A$",
            "Réalisent $A$ et un autre événement",
            "Appartiennent à un autre univers",
            "Ne réalisent pas $A$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, une éventualité est dans le contraire de $A$ si et seulement si elle n’est pas dans $A$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p03_q4",
          "type": "mcq",
          "prompt": "Deux événements $A$ et $B$ sont incompatibles lorsque :",
          "options": [
            "$A \\cap B = \\emptyset$",
            "$A \\cup B = U$",
            "$A = B$",
            "$A \\cap B$ est un singleton"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Incompatibles signifie disjoints : aucune éventualité ne réalise les deux à la fois."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p03_q5",
          "type": "mcq",
          "prompt": "Que vaut $A \\cap B$ pour ces deux événements ?",
          "options": [
            "$\\{(P, F)\\}$",
            "$\\{(P, P)\\}$",
            "$\\{(F, P)\\}$",
            "$U$ tout entier"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le seul couple présent dans $A$ et dans $B$ est $(P, P)$ : pile aux deux lancers."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p03_q6",
          "type": "mcq",
          "prompt": "Pour qu’une éventualité réalise l’événement « $A$ et $B$ », il faut qu’elle réalise :",
          "options": [
            "$A$ seulement",
            "$B$ seulement",
            "Au moins l’un des deux",
            "$A$ et $B$ à la fois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’intersection ne contient que les éventualités communes aux deux événements."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l05_probabilite_p04",
      "order": 4,
      "title": "Probabilité d’un événement et propriétés",
      "summary": "Définir une probabilité sur un univers et appliquer ses propriétés : contraire, événement impossible et probabilité d’une réunion.",
      "conceptExplanation": "Définition : soit $U$ l’univers des éventualités d’une expérience aléatoire. Une probabilité $P$ sur l’univers $U$ est une application de l’ensemble des parties de $U$ vers l’intervalle $[0 ; 1]$, qui à chaque événement $A$ associe le nombre réel $P(A)$, appelé probabilité de $A$, et qui vérifie les deux conditions suivantes : la probabilité de $U$ vaut $1$ ; si $A$ et $B$ sont deux événements incompatibles, alors la probabilité de leur réunion est la somme de leurs probabilités.\nPropriétés : pour tout événement $A$, la probabilité du contraire de $A$ vaut $1$ moins la probabilité de $A$ ; la probabilité de l’ensemble vide vaut $0$ ; si $A$ est formé des éventualités $e_1$, $e_2$, …, $e_k$, alors la probabilité de $A$ est la somme des probabilités des événements élémentaires correspondants ; pour tous événements $A$ et $B$, la probabilité de la réunion vaut la somme des probabilités, moins la probabilité de l’intersection.\nExemple : lors d’un lancer de dé non truqué, pour l’événement $A$ « avoir un nombre pair », formé de $2$, $4$ et $6$, la probabilité est la somme de trois probabilités élémentaires égales à un sixième.",
      "keyRule": "Toute probabilité vaut $1$ sur l’univers et $0$ sur l’ensemble vide ; pour un événement, on additionne les probabilités de ses éventualités.",
      "formulas": [
        {
          "name": "Probabilité du contraire",
          "formula": "P(\\bar{A}) = 1 - P(A)"
        },
        {
          "name": "Probabilité d’une réunion",
          "formula": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
        }
      ],
      "workedExample": {
        "title": "Le dé truqué (exercice de fixation)",
        "statement": "On lance un dé truqué tel que les probabilités des faces $1$ à $6$ sont, dans l’ordre : un seizième, trois seizièmes, cinq seizièmes, deux seizièmes, trois seizièmes et deux seizièmes. Calcule la probabilité des événements $A$ : « le résultat est un nombre pair », $B$ : « le résultat est un nombre multiple de $3$ » et $C$ : « le résultat est un nombre différent de $6$ ».",
        "methodSteps": [
          "$A = \\{2 ; 4 ; 6\\}$ : on additionne les probabilités de $2$, $4$ et $6$, soit trois, deux et deux seizièmes ; on obtient sept seizièmes.",
          "$B = \\{3 ; 6\\}$ : on additionne les probabilités de $3$ et $6$, soit cinq et deux seizièmes ; on obtient sept seizièmes.",
          "$C = \\{1 ; 2 ; 3 ; 4 ; 5\\}$ : la somme des cinq probabilités vaut quatorze seizièmes, soit sept huitièmes après simplification."
        ],
        "conclusion": "Les probabilités de $A$ et de $B$ valent sept seizièmes, et celle de $C$ vaut sept huitièmes."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une probabilité",
          "stepTheme": "La définition d’une probabilité",
          "stepBadge": "La définition d’une probabilité",
          "paragraphText": "• Définition : une probabilité $P$ sur $U$ associe à chaque événement $A$ un nombre réel $P(A)$ de l’intervalle $[0 ; 1]$.\nElle vérifie deux conditions : la probabilité de $U$ vaut $1$, et la probabilité d’une réunion d’événements incompatibles est la somme des probabilités.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p04_q1",
            "type": "mcq",
            "prompt": "Que vaut la probabilité de l’univers $U$ ?",
            "options": [
              "$0$",
              "$1$",
              "Le cardinal de $U$",
              "Un demi"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première condition de la définition : $P(U) = 1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La probabilité de l’événement impossible",
          "stepTheme": "La probabilité de l’événement impossible",
          "stepBadge": "La probabilité de l’événement impossible",
          "paragraphText": "• Propriété : la probabilité de l’ensemble vide vaut $0$.\nUn événement impossible ne se réalise jamais, sa probabilité est donc nulle.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p04_q2",
            "type": "mcq",
            "prompt": "Que vaut la probabilité de l’ensemble vide ?",
            "options": [
              "$1$",
              "Un demi",
              "$0$",
              "Elle n’existe pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’une des propriétés listées dans la leçon : $P(\\emptyset) = 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Additionner les probabilités élémentaires",
          "stepTheme": "Additionner les probabilités élémentaires",
          "stepBadge": "Additionner les probabilités élémentaires",
          "paragraphText": "• Propriété : si $A = \\{e_1 ; e_2 ; \\ldots ; e_k\\}$, alors la probabilité de $A$ est la somme des probabilités des événements élémentaires $\\{e_1\\}$, …, $\\{e_k\\}$.\nExemple de la leçon : pour un dé non truqué, l’événement « avoir un nombre pair » a pour probabilité trois fois un sixième.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p04_q3",
            "type": "mcq",
            "prompt": "Lors d’un lancer de dé non truqué, que vaut la probabilité de l’événement $A = \\{2 ; 4 ; 6\\}$ « avoir un nombre pair » ?",
            "options": [
              "Un sixième",
              "Un tiers",
              "Trois",
              "Un demi"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule la somme de trois probabilités d’un sixième : on obtient un demi, comme dans l’exemple de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La probabilité d’une réunion quelconque",
          "stepTheme": "La probabilité d’une réunion quelconque",
          "stepBadge": "La probabilité d’une réunion quelconque",
          "paragraphText": "• Propriété : pour tous événements $A$ et $B$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\nExercice 2 de la leçon : avec des probabilités de $0{,}33$, $0{,}15$ et une intersection de probabilité $0{,}09$, la réunion a pour probabilité $0{,}39$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p04_q4",
            "type": "mcq",
            "prompt": "Soient $A$ et $B$ avec $P(A) = 0{,}33$, $P(B) = 0{,}15$ et la probabilité de $A \\cap B$ égale à $0{,}09$. Que vaut $P(A \\cup B)$ ?",
            "options": [
              "$0{,}39$",
              "$0{,}48$",
              "$0{,}57$",
              "$0{,}09$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $0{,}33 + 0{,}15 - 0{,}09 = 0{,}39$ : c’est la correction de l’exercice 2."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le dé truqué : l’événement pair",
          "stepTheme": "Le dé truqué : l’événement pair",
          "stepBadge": "Le dé truqué : l’événement pair",
          "paragraphText": "• Exercice de fixation : pour le dé truqué, les probabilités des faces $2$, $4$ et $6$ sont trois, deux et deux seizièmes.\nL’événement $A$ : « le résultat est un nombre pair » a donc pour probabilité la somme de ces trois nombres.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p04_q5",
            "type": "mcq",
            "prompt": "Pour ce dé truqué, que vaut la probabilité de l’événement « le résultat est un nombre pair » ?",
            "options": [
              "Sept seizièmes",
              "Un demi",
              "Trois seizièmes",
              "Sept huitièmes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne trois, deux et deux seizièmes : on obtient sept seizièmes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La réunion n’est pas toujours une simple somme",
          "stepTheme": "La réunion n’est pas toujours une simple somme",
          "stepBadge": "La réunion n’est pas toujours une simple somme",
          "paragraphText": "• Exercice 1 de la leçon : l’affirmation « la probabilité de $A \\cup B$ est toujours la somme des probabilités de $A$ et de $B$ » est fausse.\nEn revanche, la probabilité de la réunion de $A$ et de son contraire vaut $1$, et la probabilité du contraire d’une intersection vaut $1$ moins la probabilité de cette intersection : ces deux affirmations sont vraies.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p04_q6",
            "type": "mcq",
            "prompt": "L’affirmation « pour tous événements $A$ et $B$, la probabilité de $A \\cup B$ égale la somme des probabilités de $A$ et de $B$ » est :",
            "options": [
              "Vraie",
              "Fausse, il faut retrancher la probabilité de l’intersection",
              "Vraie seulement en équiprobabilité",
              "Fausse, il faut ajouter la probabilité de l’intersection"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La correction de l’exercice 1 répond Faux : la formule générale retranche la probabilité de $A \\cap B$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p04_q1",
          "type": "mcq",
          "prompt": "Que vaut la probabilité de l’univers $U$ ?",
          "options": [
            "$0$",
            "$1$",
            "Le cardinal de $U$",
            "Un demi"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première condition de la définition : $P(U) = 1$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p04_q2",
          "type": "mcq",
          "prompt": "Que vaut la probabilité de l’ensemble vide ?",
          "options": [
            "$1$",
            "Un demi",
            "$0$",
            "Elle n’existe pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’une des propriétés listées dans la leçon : $P(\\emptyset) = 0$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p04_q3",
          "type": "mcq",
          "prompt": "Lors d’un lancer de dé non truqué, que vaut la probabilité de l’événement $A = \\{2 ; 4 ; 6\\}$ « avoir un nombre pair » ?",
          "options": [
            "Un sixième",
            "Un tiers",
            "Trois",
            "Un demi"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule la somme de trois probabilités d’un sixième : on obtient un demi, comme dans l’exemple de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p04_q4",
          "type": "mcq",
          "prompt": "Soient $A$ et $B$ avec $P(A) = 0{,}33$, $P(B) = 0{,}15$ et la probabilité de $A \\cap B$ égale à $0{,}09$. Que vaut $P(A \\cup B)$ ?",
          "options": [
            "$0{,}39$",
            "$0{,}48$",
            "$0{,}57$",
            "$0{,}09$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $0{,}33 + 0{,}15 - 0{,}09 = 0{,}39$ : c’est la correction de l’exercice 2."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p04_q5",
          "type": "mcq",
          "prompt": "Pour ce dé truqué, que vaut la probabilité de l’événement « le résultat est un nombre pair » ?",
          "options": [
            "Sept seizièmes",
            "Un demi",
            "Trois seizièmes",
            "Sept huitièmes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne trois, deux et deux seizièmes : on obtient sept seizièmes."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p04_q6",
          "type": "mcq",
          "prompt": "L’affirmation « pour tous événements $A$ et $B$, la probabilité de $A \\cup B$ égale la somme des probabilités de $A$ et de $B$ » est :",
          "options": [
            "Vraie",
            "Fausse, il faut retrancher la probabilité de l’intersection",
            "Vraie seulement en équiprobabilité",
            "Fausse, il faut ajouter la probabilité de l’intersection"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La correction de l’exercice 1 répond Faux : la formule générale retranche la probabilité de $A \\cap B$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l05_probabilite_p05",
      "order": 5,
      "title": "L’équiprobabilité",
      "summary": "Reconnaître une situation d’équiprobabilité et y calculer la probabilité d’un événement par le rapport des cardinaux.",
      "conceptExplanation": "Définition : on dit qu’une expérience aléatoire a lieu dans un cadre d’équiprobabilité des événements élémentaires lorsque tous les événements élémentaires de $U$ ont la même probabilité.\nExemple : un lancer de dé non truqué est une situation d’équiprobabilité, toutes les faces du dé ont la même chance d’apparaître lors du lancer.\nPropriété 1 : soit $U$ l’univers d’une expérience aléatoire de cardinal $n$ ; sous l’hypothèse d’équiprobabilité, la probabilité d’un événement élémentaire est l’inverse de $n$.\nPropriété 2 : dans une situation d’équiprobabilité, la probabilité d’un événement $A$ est le quotient du nombre de cas favorables à $A$ par le nombre de cas possibles, c’est-à-dire le quotient du cardinal de $A$ par le cardinal de $U$.\nRemarque de la leçon : on reconnaît une situation d’équiprobabilité à des mots clés comme « équitable », « équilibré », « parfait », « uniforme », « même chance » ou « indiscernable au toucher ».",
      "keyRule": "En équiprobabilité, chaque éventualité compte pour une part égale : la probabilité est le nombre de cas favorables divisé par le nombre de cas possibles.",
      "formulas": [
        {
          "name": "Probabilité d’un événement élémentaire",
          "formula": "\\frac{1}{n}",
          "note": "Si le cardinal de $U$ est $n$, en équiprobabilité."
        },
        {
          "name": "Probabilité en équiprobabilité",
          "formula": "P(A) = \\frac{Card(A)}{Card(U)}"
        }
      ],
      "workedExample": {
        "title": "Un multiple de $3$ au dé équilibré (exercice de fixation)",
        "statement": "On lance un dé équilibré à $6$ faces. Détermine la probabilité de l’événement $E$ : « on obtient un multiple de $3$ ».",
        "methodSteps": [
          "Le dé est équilibré : toutes les faces ont la même probabilité d’apparaître, on est en situation d’équiprobabilité.",
          "L’univers est formé des faces $1$ à $6$ : son cardinal est $6$.",
          "L’événement $E$ est formé de $3$ et $6$ : son cardinal est $2$.",
          "La probabilité de $E$ est le quotient de $2$ par $6$, soit un tiers après simplification."
        ],
        "conclusion": "La probabilité d’obtenir un multiple de $3$ est un tiers."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de l’équiprobabilité",
          "stepTheme": "La définition de l’équiprobabilité",
          "stepBadge": "La définition de l’équiprobabilité",
          "paragraphText": "• Définition : l’expérience a lieu dans un cadre d’équiprobabilité des événements élémentaires lorsque tous les événements élémentaires de $U$ ont la même probabilité.\nExemple : le lancer d’un dé non truqué.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p05_q1",
            "type": "mcq",
            "prompt": "L’équiprobabilité signifie que :",
            "options": [
              "Tous les événements ont la même probabilité",
              "Tous les événements élémentaires ont la même probabilité",
              "L’univers a un seul élément",
              "Chaque événement a pour probabilité $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les événements élémentaires, et eux seuls, qui ont tous la même probabilité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La probabilité d’un événement élémentaire",
          "stepTheme": "La probabilité d’un événement élémentaire",
          "stepBadge": "La probabilité d’un événement élémentaire",
          "paragraphText": "• Propriété 1 : si le cardinal de l’univers est $n$, alors, en équiprobabilité, la probabilité d’un événement élémentaire est l’inverse de $n$.\nExercice de fixation : pour un dé parfaitement équilibré, chaque face a donc pour probabilité un sixième.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p05_q2",
            "type": "mcq",
            "prompt": "On lance un dé parfaitement équilibré. Quelle est la probabilité d’apparition de la face $4$ ?",
            "options": [
              "Un demi",
              "Un quart",
              "Un sixième",
              "Un"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’univers a $6$ éventualités équiprobables : chaque face a pour probabilité un sixième."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rapport des cardinaux",
          "stepTheme": "Le rapport des cardinaux",
          "stepBadge": "Le rapport des cardinaux",
          "paragraphText": "• Propriété 2 : en équiprobabilité, la probabilité d’un événement $A$ est le nombre de cas favorables à $A$ divisé par le nombre de cas possibles.\nC’est le quotient du cardinal de $A$ par le cardinal de $U$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p05_q3",
            "type": "mcq",
            "prompt": "En équiprobabilité, la probabilité d’un événement $A$ est :",
            "options": [
              "Le cardinal de $A$",
              "Le quotient du cardinal de $U$ par le cardinal de $A$",
              "Le produit des cardinaux de $A$ et de $U$",
              "Le quotient du cardinal de $A$ par le cardinal de $U$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On divise les cas favorables, cardinal de $A$, par les cas possibles, cardinal de $U$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un multiple de 3 au dé équilibré",
          "stepTheme": "Un multiple de 3 au dé équilibré",
          "stepBadge": "Un multiple de 3 au dé équilibré",
          "paragraphText": "• Exercice de fixation : l’événement $E$ : « on obtient un multiple de $3$ » est formé de $3$ et $6$.\nSon cardinal est $2$ et celui de l’univers est $6$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut la probabilité de l’événement $E$ : « on obtient un multiple de $3$ » ?",
            "options": [
              "Un tiers",
              "Un sixième",
              "Un demi",
              "Deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le quotient de $2$ par $6$ se simplifie en un tiers."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Justifier une situation d’équiprobabilité",
          "stepTheme": "Justifier une situation d’équiprobabilité",
          "stepBadge": "Justifier une situation d’équiprobabilité",
          "paragraphText": "• Exercice de fixation : le fait que le dé soit équilibré implique que toutes les faces ont la même probabilité d’apparaître.\nOn peut alors conclure qu’on est dans une situation d’équiprobabilité et appliquer le rapport des cardinaux.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p05_q5",
            "type": "mcq",
            "prompt": "Pourquoi peut-on appliquer le rapport des cardinaux au lancer d’un dé équilibré ?",
            "options": [
              "Parce que le dé a $6$ faces",
              "Parce que le dé étant équilibré, toutes les faces ont la même probabilité d’apparaître",
              "Parce que les faces sont numérotées",
              "Parce que le dé est cubique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la justification de l’exercice de fixation : équilibré signifie chances égales pour toutes les faces."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les mots clés de l’équiprobabilité",
          "stepTheme": "Les mots clés de l’équiprobabilité",
          "stepBadge": "Les mots clés de l’équiprobabilité",
          "paragraphText": "• Remarque de la leçon : les mots « équitable », « équilibré », « parfait », « uniforme », « même chance » et « indiscernable au toucher » signalent une situation d’équiprobabilité.\nÀ l’inverse, un dé truqué, comme celui de l’exercice du point précédent, n’est pas en équiprobabilité : ses faces n’ont pas la même probabilité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p05_q6",
            "type": "mcq",
            "prompt": "Le lancer d’un dé truqué est-il une situation d’équiprobabilité ?",
            "options": [
              "Oui, car le dé a $6$ faces",
              "Oui, car chaque face peut apparaître",
              "Non, car les faces n’ont pas toutes la même probabilité",
              "Oui, car les probabilités totalisent $1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Truqué signifie précisément que les probabilités des faces sont différentes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p05_q1",
          "type": "mcq",
          "prompt": "L’équiprobabilité signifie que :",
          "options": [
            "Tous les événements ont la même probabilité",
            "Tous les événements élémentaires ont la même probabilité",
            "L’univers a un seul élément",
            "Chaque événement a pour probabilité $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les événements élémentaires, et eux seuls, qui ont tous la même probabilité."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p05_q2",
          "type": "mcq",
          "prompt": "On lance un dé parfaitement équilibré. Quelle est la probabilité d’apparition de la face $4$ ?",
          "options": [
            "Un demi",
            "Un quart",
            "Un sixième",
            "Un"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’univers a $6$ éventualités équiprobables : chaque face a pour probabilité un sixième."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p05_q3",
          "type": "mcq",
          "prompt": "En équiprobabilité, la probabilité d’un événement $A$ est :",
          "options": [
            "Le cardinal de $A$",
            "Le quotient du cardinal de $U$ par le cardinal de $A$",
            "Le produit des cardinaux de $A$ et de $U$",
            "Le quotient du cardinal de $A$ par le cardinal de $U$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On divise les cas favorables, cardinal de $A$, par les cas possibles, cardinal de $U$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut la probabilité de l’événement $E$ : « on obtient un multiple de $3$ » ?",
          "options": [
            "Un tiers",
            "Un sixième",
            "Un demi",
            "Deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quotient de $2$ par $6$ se simplifie en un tiers."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p05_q5",
          "type": "mcq",
          "prompt": "Pourquoi peut-on appliquer le rapport des cardinaux au lancer d’un dé équilibré ?",
          "options": [
            "Parce que le dé a $6$ faces",
            "Parce que le dé étant équilibré, toutes les faces ont la même probabilité d’apparaître",
            "Parce que les faces sont numérotées",
            "Parce que le dé est cubique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la justification de l’exercice de fixation : équilibré signifie chances égales pour toutes les faces."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p05_q6",
          "type": "mcq",
          "prompt": "Le lancer d’un dé truqué est-il une situation d’équiprobabilité ?",
          "options": [
            "Oui, car le dé a $6$ faces",
            "Oui, car chaque face peut apparaître",
            "Non, car les faces n’ont pas toutes la même probabilité",
            "Oui, car les probabilités totalisent $1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Truqué signifie précisément que les probabilités des faces sont différentes."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l05_probabilite_p06",
      "order": 6,
      "title": "Calculs de probabilités en équiprobabilité",
      "summary": "Appliquer le rapport des cardinaux et l’événement contraire à des situations concrètes : loterie, deux lancers de dé et choix d’une délégation.",
      "conceptExplanation": "Situation complexe de la leçon : une loterie consiste à tourner une roue partagée en huit secteurs, chaque secteur ayant autant de chance d’être désigné. Le secteur blanc, au nombre de $4$, fait perdre $2\\,000$ francs CFA ; le secteur noir, au nombre de $3$, fait gagner $1\\,000$ francs CFA ; le secteur rouge, au nombre de $1$, fait gagner $2\\,000$ francs CFA. L’événement « gagner » est la réunion des événements « gagner $1\\,000$ francs » et « gagner $2\\,000$ francs », qui sont incompatibles.\nExercice 4 : on lance deux fois de suite un dé cubique parfaitement équilibré ; un résultat est un couple de nombres de $1$ à $6$, il y a donc $36$ résultats possibles, et les couples dont les deux composantes sont supérieures ou égales à $4$ sont au nombre de $9$.\nExercice 3 : une coopérative de sept hommes et trois femmes choisit au hasard une délégation de quatre membres parmi ses dix membres ; le nombre de délégations possibles est le nombre de combinaisons de $4$ parmi $10$. Le couple Zamblé fait partie de la coopérative.",
      "keyRule": "En équiprobabilité, compte les cas favorables et les cas possibles ; quand le comptage direct est lourd, passe par l’événement contraire.",
      "formulas": [
        {
          "name": "Probabilité de perdre à la loterie",
          "formula": "P(B) = \\frac{4}{8} = 0{,}5"
        },
        {
          "name": "Probabilité que le couple Zamblé soit dans la délégation",
          "formula": "\\frac{28}{210} = \\frac{2}{15}"
        }
      ],
      "workedExample": {
        "title": "Monsieur ou madame Zamblé dans la délégation (exercice 3)",
        "statement": "La coopérative choisit au hasard une délégation de quatre membres parmi ses dix membres. Calcule la probabilité que monsieur ou madame Zamblé fasse partie de la délégation.",
        "methodSteps": [
          "Le nombre de délégations possibles est le nombre de combinaisons de $4$ parmi $10$, soit $210$ ; les choix se faisant au hasard, il y a équiprobabilité.",
          "On passe par l’événement contraire : ni monsieur ni madame Zamblé dans la délégation, ce qui revient à choisir les $4$ membres parmi les $8$ autres, soit $70$ délégations.",
          "La probabilité du contraire est le quotient de $70$ par $210$, soit un tiers.",
          "La probabilité cherchée est donc $1$ moins un tiers, soit deux tiers."
        ],
        "conclusion": "La probabilité que monsieur ou madame Zamblé fasse partie de la délégation est deux tiers ; la méthode directe donne le même résultat avec $140$ délégations favorables sur $210$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La loterie : probabilité de perdre",
          "stepTheme": "La loterie : probabilité de perdre",
          "stepBadge": "La loterie : probabilité de perdre",
          "paragraphText": "• Situation complexe : la roue a huit secteurs équiprobables, dont $4$ secteurs blancs qui font perdre.\nL’événement $B$ : « on perd $2\\,000$ francs CFA » a pour cardinal $4$ et l’univers a pour cardinal $8$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p06_q1",
            "type": "mcq",
            "prompt": "À cette loterie, que vaut la probabilité de perdre ?",
            "options": [
              "$0{,}5$",
              "$0{,}375$",
              "$0{,}125$",
              "$0{,}25$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le quotient de $4$ par $8$ vaut un demi, soit $0{,}5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le secteur rouge pour gagner",
          "stepTheme": "Ne pas oublier le secteur rouge pour gagner",
          "stepBadge": "Ne pas oublier le secteur rouge pour gagner",
          "paragraphText": "• Piège de la situation complexe : gagner ne se limite pas aux $3$ secteurs noirs, car le secteur rouge fait aussi gagner $2\\,000$ francs CFA.\nLes deux événements « gagner » ainsi formés sont incompatibles, donc leurs probabilités, $0{,}375$ et $0{,}125$, s’additionnent.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p06_q2",
            "type": "mcq",
            "prompt": "À cette loterie, que vaut la probabilité de gagner ?",
            "options": [
              "$0{,}375$",
              "$0{,}5$",
              "$0{,}125$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On additionne $0{,}375$ et $0{,}125$ : on obtient $0{,}5$, autant de chance de gagner que de perdre, donc le groupe d’élèves a raison."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Compter les résultats de deux lancers",
          "stepTheme": "Compter les résultats de deux lancers",
          "stepBadge": "Compter les résultats de deux lancers",
          "paragraphText": "• Exercice 4 : un résultat du lancer de deux dés (deux fois de suite le même dé) est un couple de deux nombres entiers compris entre $1$ et $6$.\nChaque composante a $6$ valeurs possibles.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p06_q3",
            "type": "mcq",
            "prompt": "Combien y a-t-il de résultats possibles pour deux lancers successifs d’un dé ?",
            "options": [
              "$12$",
              "$30$",
              "$36$",
              "$6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On forme $6 \\times 6 = 36$ couples possibles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Deux nombres supérieurs ou égaux à 4",
          "stepTheme": "Deux nombres supérieurs ou égaux à 4",
          "stepBadge": "Deux nombres supérieurs ou égaux à 4",
          "paragraphText": "• Exercice 4 : les couples favorables sont $(4 ; 4)$, $(4 ; 5)$, $(4 ; 6)$, $(5 ; 4)$, $(5 ; 5)$, $(5 ; 6)$, $(6 ; 4)$, $(6 ; 5)$ et $(6 ; 6)$.\nIl y en a $9$ sur $36$ résultats possibles, en équiprobabilité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut la probabilité que les deux nombres soient supérieurs ou égaux à $4$ ?",
            "options": [
              "Un demi",
              "Un tiers",
              "Neuf",
              "Un quart, soit $0{,}25$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le quotient de $9$ par $36$ vaut un quart, soit $0{,}25$ : c’est la correction de l’exercice 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Compter les délégations possibles",
          "stepTheme": "Compter les délégations possibles",
          "stepBadge": "Compter les délégations possibles",
          "paragraphText": "• Exercice 3 : une délégation est un sous-ensemble de quatre membres pris parmi les dix membres de la coopérative.\nLe nombre de délégations possibles est donc le nombre de combinaisons de $4$ éléments parmi $10$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p06_q5",
            "type": "mcq",
            "prompt": "Combien de délégations de quatre membres peut-on former parmi les dix membres ?",
            "options": [
              "$40$",
              "$210$",
              "$10\\,000$",
              "$120$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nombre de combinaisons de $4$ parmi $10$ vaut $210$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le couple Zamblé dans la délégation",
          "stepTheme": "Le couple Zamblé dans la délégation",
          "stepBadge": "Le couple Zamblé dans la délégation",
          "paragraphText": "• Exercice 3 : si le couple Zamblé fait partie de la délégation, il reste à choisir deux membres parmi les huit restants.\nCela donne $28$ délégations favorables sur $210$ possibles.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l05_probabilite_p06_q6",
            "type": "mcq",
            "prompt": "Que vaut la probabilité que le couple Zamblé fasse partie de la délégation ?",
            "options": [
              "Deux quinzièmes",
              "Un tiers",
              "Deux tiers",
              "Un dixième"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le quotient de $28$ par $210$ se simplifie en deux quinzièmes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p06_q1",
          "type": "mcq",
          "prompt": "À cette loterie, que vaut la probabilité de perdre ?",
          "options": [
            "$0{,}5$",
            "$0{,}375$",
            "$0{,}125$",
            "$0{,}25$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quotient de $4$ par $8$ vaut un demi, soit $0{,}5$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p06_q2",
          "type": "mcq",
          "prompt": "À cette loterie, que vaut la probabilité de gagner ?",
          "options": [
            "$0{,}375$",
            "$0{,}5$",
            "$0{,}125$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On additionne $0{,}375$ et $0{,}125$ : on obtient $0{,}5$, autant de chance de gagner que de perdre, donc le groupe d’élèves a raison."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p06_q3",
          "type": "mcq",
          "prompt": "Combien y a-t-il de résultats possibles pour deux lancers successifs d’un dé ?",
          "options": [
            "$12$",
            "$30$",
            "$36$",
            "$6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On forme $6 \\times 6 = 36$ couples possibles."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut la probabilité que les deux nombres soient supérieurs ou égaux à $4$ ?",
          "options": [
            "Un demi",
            "Un tiers",
            "Neuf",
            "Un quart, soit $0{,}25$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le quotient de $9$ par $36$ vaut un quart, soit $0{,}25$ : c’est la correction de l’exercice 4."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p06_q5",
          "type": "mcq",
          "prompt": "Combien de délégations de quatre membres peut-on former parmi les dix membres ?",
          "options": [
            "$40$",
            "$210$",
            "$10\\,000$",
            "$120$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nombre de combinaisons de $4$ parmi $10$ vaut $210$."
        },
        {
          "id": "premiere_d_maths_numerique_l05_probabilite_p06_q6",
          "type": "mcq",
          "prompt": "Que vaut la probabilité que le couple Zamblé fasse partie de la délégation ?",
          "options": [
            "Deux quinzièmes",
            "Un tiers",
            "Deux tiers",
            "Un dixième"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quotient de $28$ par $210$ se simplifie en deux quinzièmes."
        }
      ]
    }
  ]
};
