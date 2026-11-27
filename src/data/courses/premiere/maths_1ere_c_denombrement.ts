import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Dénombrement » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Dénombrement » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L04_DENOMBREMENT: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l04_denombrement",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 4,
  "title": "Leçon 4 : Dénombrement",
  "summary": "La leçon introduit le cardinal d'un ensemble fini, la réunion, l'intersection, le complémentaire et le produit cartésien, puis les p-uplets, les arrangements, les permutations, les combinaisons, les types de tirages et le binôme de Newton.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Dénombrement » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l04_denombrement_p01",
      "order": 1,
      "title": "Cardinal, réunion et intersection",
      "summary": "Définir le cardinal d'un ensemble fini, sa réunion et son intersection avec un autre ensemble, et calculer le cardinal d'une réunion.",
      "conceptExplanation": "On appelle cardinal d'un ensemble fini $E$ le nombre d'éléments de $E$ ; on le note $\\mathrm{Card}(E)$. Exemple : pour $A = \\{0 ; 1 ; 2 ; 3\\}$, $\\mathrm{Card}(A) = 4$.\nLa réunion de $A$ et $B$, notée $A \\cup B$, est l'ensemble des éléments qui appartiennent à $A$ ou à $B$. L'intersection de $A$ et $B$, notée $A \\cap B$, est l'ensemble des éléments qui appartiennent à la fois à $A$ et à $B$.\nPropriété : pour deux ensembles finis, $\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)$.",
      "keyRule": "Dans une réunion, les éléments communs sont comptés deux fois par la somme des cardinaux : il faut les retirer une fois.",
      "formulas": [
        {
          "name": "Cardinal d'une réunion",
          "formula": "\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)"
        }
      ],
      "workedExample": {
        "title": "Les élèves qui ne pratiquent aucun sport (situation d'apprentissage)",
        "statement": "Dans une classe de $25$ élèves, $15$ jouent au handball, $10$ jouent au basketball et $5$ pratiquent les deux sports. Détermine le nombre d'élèves qui ne pratiquent aucun sport.",
        "methodSteps": [
          "Le nombre d'élèves pratiquant au moins un sport est le cardinal de la réunion : $15 + 10 - 5 = 20$.",
          "On retire ce nombre de l'effectif total de la classe : $25 - 20 = 5$."
        ],
        "conclusion": "$5$ élèves ne pratiquent aucun sport."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cardinal d'un ensemble fini",
          "stepTheme": "Le cardinal d'un ensemble fini",
          "stepBadge": "Le cardinal d'un ensemble fini",
          "paragraphText": "• Définition : le cardinal d'un ensemble fini est le nombre de ses éléments.\nExemple de la leçon : l'ensemble $\\{0 ; 1 ; 2 ; 3\\}$ a pour cardinal $4$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p01_q1",
            "type": "mcq",
            "prompt": "Le cardinal de l'ensemble $\\{0 ; 1 ; 2 ; 3\\}$ est :",
            "options": [
              "$3$",
              "$4$",
              "$0$",
              "$10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ensemble contient quatre éléments distincts : $0$, $1$, $2$ et $3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La réunion de deux ensembles",
          "stepTheme": "La réunion de deux ensembles",
          "stepBadge": "La réunion de deux ensembles",
          "paragraphText": "• Définition : la réunion $A \\cup B$ regroupe les éléments qui appartiennent à $A$ ou à $B$.\nExemple de la leçon : avec $A = \\{3 ; h ; * ; 5\\}$ et $B = \\{8 ; * ; 1\\}$, la réunion comporte six éléments.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p01_q2",
            "type": "mcq",
            "prompt": "La réunion $A \\cup B$ est l'ensemble des éléments qui appartiennent :",
            "options": [
              "À $A$ seulement",
              "À $B$ seulement",
              "À la fois à $A$ et à $B$",
              "À $A$ ou à $B$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le mot « ou » caractérise la réunion des deux ensembles."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "L'intersection de deux ensembles",
          "stepTheme": "L'intersection de deux ensembles",
          "stepBadge": "L'intersection de deux ensembles",
          "paragraphText": "• Définition : l'intersection $A \\cap B$ regroupe les éléments qui appartiennent à la fois à $A$ et à $B$.\nDans l'exemple de la leçon, le seul élément commun est le symbole étoile.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p01_q3",
            "type": "mcq",
            "prompt": "L'intersection des ensembles $A = \\{3 ; h ; * ; 5\\}$ et $B = \\{8 ; * ; 1\\}$ de la leçon est :",
            "options": [
              "$\\{3 ; 5\\}$",
              "$\\{*\\}$",
              "$\\{8 ; 1\\}$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le seul élément présent dans les deux ensembles est le symbole étoile."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le cardinal d'une réunion",
          "stepTheme": "Le cardinal d'une réunion",
          "stepBadge": "Le cardinal d'une réunion",
          "paragraphText": "• Propriété : $\\mathrm{Card}(A \\cup B) = \\mathrm{Card}(A) + \\mathrm{Card}(B) - \\mathrm{Card}(A \\cap B)$.\nLe dernier terme corrige le double comptage des éléments communs.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p01_q4",
            "type": "mcq",
            "prompt": "Dans la formule du cardinal d'une réunion, on soustrait le cardinal de :",
            "options": [
              "La réunion",
              "La différence",
              "L'intersection",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les éléments de l'intersection ont été comptés deux fois : on les retire une fois."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le calcul de l'exercice de fixation",
          "stepTheme": "Le calcul de l'exercice de fixation",
          "stepBadge": "Le calcul de l'exercice de fixation",
          "paragraphText": "• Exercice de fixation : $\\mathrm{Card}(E) = 30$, $\\mathrm{Card}(F) = 25$ et $\\mathrm{Card}(E \\cap F) = 15$.\nLa propriété donne le cardinal de la réunion.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p01_q5",
            "type": "mcq",
            "prompt": "Pour ces valeurs, $\\mathrm{Card}(E \\cup F)$ vaut :",
            "options": [
              "$55$",
              "$40$",
              "$70$",
              "$25$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $30 + 25 - 15 = 40$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le double comptage des éléments communs",
          "stepTheme": "Le double comptage des éléments communs",
          "stepBadge": "Le double comptage des éléments communs",
          "paragraphText": "• Piège : additionner simplement les deux cardinaux compte deux fois chaque élément commun.\nC'est exactement l'erreur que corrige le terme soustrait dans la formule.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p01_q6",
            "type": "mcq",
            "prompt": "Sans la correction, la somme des cardinaux d'une réunion compte les éléments communs :",
            "options": [
              "Zéro fois",
              "Une fois",
              "Deux fois",
              "Trois fois"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un élément commun appartient aux deux ensembles : il est compté dans chacun des deux cardinaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p01_q1",
          "type": "mcq",
          "prompt": "Le cardinal de l'ensemble $\\{0 ; 1 ; 2 ; 3\\}$ est :",
          "options": [
            "$3$",
            "$4$",
            "$0$",
            "$10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ensemble contient quatre éléments distincts : $0$, $1$, $2$ et $3$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p01_q2",
          "type": "mcq",
          "prompt": "La réunion $A \\cup B$ est l'ensemble des éléments qui appartiennent :",
          "options": [
            "À $A$ seulement",
            "À $B$ seulement",
            "À la fois à $A$ et à $B$",
            "À $A$ ou à $B$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le mot « ou » caractérise la réunion des deux ensembles."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p01_q3",
          "type": "mcq",
          "prompt": "L'intersection des ensembles $A = \\{3 ; h ; * ; 5\\}$ et $B = \\{8 ; * ; 1\\}$ de la leçon est :",
          "options": [
            "$\\{3 ; 5\\}$",
            "$\\{*\\}$",
            "$\\{8 ; 1\\}$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le seul élément présent dans les deux ensembles est le symbole étoile."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p01_q4",
          "type": "mcq",
          "prompt": "Dans la formule du cardinal d'une réunion, on soustrait le cardinal de :",
          "options": [
            "La réunion",
            "La différence",
            "L'intersection",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les éléments de l'intersection ont été comptés deux fois : on les retire une fois."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p01_q5",
          "type": "mcq",
          "prompt": "Pour ces valeurs, $\\mathrm{Card}(E \\cup F)$ vaut :",
          "options": [
            "$55$",
            "$40$",
            "$70$",
            "$25$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $30 + 25 - 15 = 40$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p01_q6",
          "type": "mcq",
          "prompt": "Sans la correction, la somme des cardinaux d'une réunion compte les éléments communs :",
          "options": [
            "Zéro fois",
            "Une fois",
            "Deux fois",
            "Trois fois"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un élément commun appartient aux deux ensembles : il est compté dans chacun des deux cardinaux."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l04_denombrement_p02",
      "order": 2,
      "title": "Complémentaire d'un ensemble",
      "summary": "Définir le complémentaire d'une partie dans un ensemble et utiliser ses deux propriétés sur les réunions, intersections et cardinaux.",
      "conceptExplanation": "Soit $E$ un ensemble et $A$ une partie de $E$. On appelle complémentaire de $A$ dans $E$ l'ensemble des éléments de $E$ qui n'appartiennent pas à $A$.\nExemple : pour $E = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9\\}$ et $A = \\{0 ; 2 ; 4 ; 6 ; 8\\}$, le complémentaire de $A$ dans $E$ est $\\{1 ; 3 ; 5 ; 7 ; 9\\}$.\nPropriété 1 : la réunion de $A$ et de son complémentaire est $E$, et leur intersection est l'ensemble vide.\nPropriété 2 : le cardinal de $E$ est la somme du cardinal de $A$ et du cardinal de son complémentaire.",
      "keyRule": "Le complémentaire partage l'ensemble de référence en deux parties sans élément commun : tout élément est dans l'une ou dans l'autre, jamais dans les deux.",
      "formulas": [
        {
          "name": "Cardinal et complémentaire",
          "formula": "\\mathrm{Card}(E) = \\mathrm{Card}(A) + \\mathrm{Card}(\\bar{A})"
        }
      ],
      "workedExample": {
        "title": "Retrouver un ensemble de référence (exercice de fixation)",
        "statement": "On donne deux parties $A$ et $B$ d'un ensemble $E$ telles que $B$ est le complémentaire de $A$, avec $A = \\{2 ; 3 ; 6\\}$ et $B = \\{t ; 4 ; v ; y\\}$. Écris l'ensemble $E$.",
        "methodSteps": [
          "La réunion de $A$ et de son complémentaire est l'ensemble $E$ tout entier.",
          "On réunit donc les éléments de $A$ et ceux de $B$, sans répétition."
        ],
        "conclusion": "$E = \\{2 ; 3 ; 4 ; 6 ; t ; v ; y\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le complémentaire d'une partie",
          "stepTheme": "Le complémentaire d'une partie",
          "stepBadge": "Le complémentaire d'une partie",
          "paragraphText": "• Définition : le complémentaire de $A$ dans $E$ est formé des éléments de $E$ qui n'appartiennent pas à $A$.\nDans l'exemple des chiffres, le complémentaire des chiffres pairs donnés est l'ensemble des chiffres impairs.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p02_q1",
            "type": "mcq",
            "prompt": "Le complémentaire de $A = \\{0 ; 2 ; 4 ; 6 ; 8\\}$ dans l'ensemble des chiffres de la leçon est :",
            "options": [
              "$\\{0 ; 2 ; 4 ; 6 ; 8\\}$",
              "$\\{1 ; 3 ; 5 ; 7 ; 9\\}$",
              "$\\{2 ; 4 ; 6\\}$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les éléments de $E$ absents de $A$ : les chiffres impairs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Réunion et intersection avec le complémentaire",
          "stepTheme": "Réunion et intersection avec le complémentaire",
          "stepBadge": "Réunion et intersection avec le complémentaire",
          "paragraphText": "• Propriété 1 : $A$ réuni à son complémentaire redonne $E$ entier.\nLeur intersection, en revanche, est l'ensemble vide, car aucun élément ne peut être à la fois dans $A$ et hors de $A$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p02_q2",
            "type": "mcq",
            "prompt": "L'intersection de $A$ et de son complémentaire dans $E$ est :",
            "options": [
              "$E$",
              "$A$",
              "Le complémentaire de $A$",
              "L'ensemble vide"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un élément ne peut pas appartenir à $A$ et ne pas lui appartenir en même temps."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La propriété des cardinaux",
          "stepTheme": "La propriété des cardinaux",
          "stepBadge": "La propriété des cardinaux",
          "paragraphText": "• Propriété 2 : $\\mathrm{Card}(E) = \\mathrm{Card}(A) + \\mathrm{Card}(\\bar{A})$.\nElle permet de retrouver le cardinal du complémentaire par une soustraction.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p02_q3",
            "type": "mcq",
            "prompt": "Si $\\mathrm{Card}(E) = 12$ et $\\mathrm{Card}(A) = 3$, le cardinal du complémentaire de $A$ est :",
            "options": [
              "$15$",
              "$9$",
              "$4$",
              "$36$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'exercice de fixation de la leçon : $12 - 3 = 9$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Reconstituer l'ensemble de référence",
          "stepTheme": "Reconstituer l'ensemble de référence",
          "stepBadge": "Reconstituer l'ensemble de référence",
          "paragraphText": "• Exercice de fixation : si $B$ est le complémentaire de $A = \\{2 ; 3 ; 6\\}$ et $B = \\{t ; 4 ; v ; y\\}$, alors $E$ est leur réunion.\n$E$ comporte donc sept éléments.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p02_q4",
            "type": "mcq",
            "prompt": "Dans cet exercice, le cardinal de $E$ est :",
            "options": [
              "$3$",
              "$4$",
              "$7$",
              "$12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La réunion des trois éléments de $A$ et des quatre éléments de $B$ en compte $7$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Compter ce qui manque par le complémentaire",
          "stepTheme": "Compter ce qui manque par le complémentaire",
          "stepBadge": "Compter ce qui manque par le complémentaire",
          "paragraphText": "• Méthode : pour compter les éléments hors d'une partie, on peut calculer le cardinal du complémentaire.\nC'est le raisonnement de la situation d'apprentissage : les élèves sans sport sont le complémentaire des sportifs dans la classe.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p02_q5",
            "type": "mcq",
            "prompt": "Dans la situation de la classe de $25$ élèves dont $20$ pratiquent un sport, le nombre d'élèves sans sport s'obtient par :",
            "options": [
              "$25 + 20$",
              "$25 - 20$",
              "$20 - 5$",
              "$25 \\times 20$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le complémentaire se compte par soustraction : $25 - 20 = 5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le complémentaire dépend de l'ensemble de référence",
          "stepTheme": "Le complémentaire dépend de l'ensemble de référence",
          "stepBadge": "Le complémentaire dépend de l'ensemble de référence",
          "paragraphText": "• Piège : un complémentaire n'a de sens que par rapport à un ensemble $E$ précisé.\nLe même $A$ n'a pas le même complémentaire si l'ensemble de référence change.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p02_q6",
            "type": "mcq",
            "prompt": "Le complémentaire de $A$ est défini par rapport à :",
            "options": [
              "$A$ lui-même",
              "Un ensemble $E$ dont $A$ est une partie",
              "L'ensemble vide",
              "N'importe quel ensemble"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition commence par « soit $E$ un ensemble et $A$ une partie de $E$ »."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p02_q1",
          "type": "mcq",
          "prompt": "Le complémentaire de $A = \\{0 ; 2 ; 4 ; 6 ; 8\\}$ dans l'ensemble des chiffres de la leçon est :",
          "options": [
            "$\\{0 ; 2 ; 4 ; 6 ; 8\\}$",
            "$\\{1 ; 3 ; 5 ; 7 ; 9\\}$",
            "$\\{2 ; 4 ; 6\\}$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les éléments de $E$ absents de $A$ : les chiffres impairs."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p02_q2",
          "type": "mcq",
          "prompt": "L'intersection de $A$ et de son complémentaire dans $E$ est :",
          "options": [
            "$E$",
            "$A$",
            "Le complémentaire de $A$",
            "L'ensemble vide"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un élément ne peut pas appartenir à $A$ et ne pas lui appartenir en même temps."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p02_q3",
          "type": "mcq",
          "prompt": "Si $\\mathrm{Card}(E) = 12$ et $\\mathrm{Card}(A) = 3$, le cardinal du complémentaire de $A$ est :",
          "options": [
            "$15$",
            "$9$",
            "$4$",
            "$36$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'exercice de fixation de la leçon : $12 - 3 = 9$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p02_q4",
          "type": "mcq",
          "prompt": "Dans cet exercice, le cardinal de $E$ est :",
          "options": [
            "$3$",
            "$4$",
            "$7$",
            "$12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La réunion des trois éléments de $A$ et des quatre éléments de $B$ en compte $7$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p02_q5",
          "type": "mcq",
          "prompt": "Dans la situation de la classe de $25$ élèves dont $20$ pratiquent un sport, le nombre d'élèves sans sport s'obtient par :",
          "options": [
            "$25 + 20$",
            "$25 - 20$",
            "$20 - 5$",
            "$25 \\times 20$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le complémentaire se compte par soustraction : $25 - 20 = 5$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p02_q6",
          "type": "mcq",
          "prompt": "Le complémentaire de $A$ est défini par rapport à :",
          "options": [
            "$A$ lui-même",
            "Un ensemble $E$ dont $A$ est une partie",
            "L'ensemble vide",
            "N'importe quel ensemble"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition commence par « soit $E$ un ensemble et $A$ une partie de $E$ »."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l04_denombrement_p03",
      "order": 3,
      "title": "Produit cartésien de deux ensembles",
      "summary": "Définir le produit cartésien, lister ses éléments et calculer son cardinal, y compris pour les puissances cartésiennes.",
      "conceptExplanation": "Soient $A$ et $B$ deux ensembles. On appelle produit cartésien de $A$ par $B$ l'ensemble des couples $(a ; b)$ tels que $a$ appartient à $A$ et $b$ appartient à $B$ ; on le note $A \\times B$.\nExemple de la leçon : pour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, les éléments de $A \\times B$ se listent par un arbre de choix ou un tableau à double entrée, et ils sont au nombre de $12$.\nRemarques : dans un couple, l'ordre des éléments est très important ; le produit de $A$ par lui-même $p$ fois se note $A^p$.\nPropriété : $\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B)$, et par suite le cardinal de $A^p$ est la puissance $p$ du cardinal de $A$.",
      "keyRule": "Chaque élément du premier ensemble se combine avec chaque élément du second : les cardinaux se multiplient.",
      "formulas": [
        {
          "name": "Cardinal d'un produit cartésien",
          "formula": "\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B)"
        },
        {
          "name": "Puissance cartésienne",
          "formula": "\\mathrm{Card}(A^p) = [\\mathrm{Card}(A)]^p"
        }
      ],
      "workedExample": {
        "title": "Trois lancers d'un dé (exercice de fixation)",
        "statement": "On lance au hasard trois fois de suite un dé parfait en notant à chaque lancer le numéro de la face supérieure. Détermine le nombre de résultats possibles.",
        "methodSteps": [
          "L'ensemble des faces est $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$, de cardinal $6$.",
          "Chaque résultat complet est un élément de $E^3$.",
          "Le nombre de résultats est donc la puissance troisième de $6$."
        ],
        "conclusion": "Il y a $216$ résultats possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le produit cartésien",
          "stepTheme": "Le produit cartésien",
          "stepBadge": "Le produit cartésien",
          "paragraphText": "• Définition : $A \\times B$ est l'ensemble des couples $(a ; b)$ avec $a$ dans $A$ et $b$ dans $B$.\nIl se lit « $A$ croix $B$ ».",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p03_q1",
            "type": "mcq",
            "prompt": "Le produit cartésien $A \\times B$ est formé de :",
            "options": [
              "Nombres réels",
              "Couples dont le premier élément est dans $A$ et le second dans $B$",
              "Éléments communs à $A$ et $B$",
              "Éléments de $A$ ou de $B$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : tous les couples formés dans cet ordre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Lister un produit cartésien",
          "stepTheme": "Lister un produit cartésien",
          "stepBadge": "Lister un produit cartésien",
          "paragraphText": "• Exemple de la leçon : $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$ donnent un produit cartésien listé par arbre ou par tableau à double entrée.\nChacun des trois nombres se combine avec chacune des quatre lettres.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p03_q2",
            "type": "mcq",
            "prompt": "Le nombre d'éléments de ce produit cartésien est :",
            "options": [
              "$7$",
              "$34$",
              "$12$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $3 \\times 4 = 12$ couples."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cardinal d'un produit cartésien",
          "stepTheme": "Le cardinal d'un produit cartésien",
          "stepBadge": "Le cardinal d'un produit cartésien",
          "paragraphText": "• Propriété : $\\mathrm{Card}(A \\times B) = \\mathrm{Card}(A) \\times \\mathrm{Card}(B)$.\nDans l'exercice de fixation, deux ensembles de cardinaux $5$ et $8$ donnent un produit de cardinal $40$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p03_q3",
            "type": "mcq",
            "prompt": "Si deux ensembles ont pour cardinaux $5$ et $8$, le cardinal de leur produit cartésien est :",
            "options": [
              "$13$",
              "$40$",
              "$58$",
              "$85$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On multiplie les cardinaux : $5 \\times 8 = 40$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L'ordre dans un couple",
          "stepTheme": "L'ordre dans un couple",
          "stepBadge": "L'ordre dans un couple",
          "paragraphText": "• Remarque de la leçon : dans un couple, l'ordre des éléments est très important.\nEn particulier, le couple formé de $a$ puis $b$ n'est pas celui formé de $b$ puis $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p03_q4",
            "type": "mcq",
            "prompt": "Les couples $(a ; b)$ et $(b ; a)$, avec $a$ différent de $b$, sont :",
            "options": [
              "Égaux",
              "Différents",
              "Tous deux vides",
              "Interchangeables"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ordre compte dans un couple : les deux écritures désignent des éléments différents."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les trois lancers de dé",
          "stepTheme": "Les trois lancers de dé",
          "stepBadge": "Les trois lancers de dé",
          "paragraphText": "• Exercice de fixation : trois lancers successifs d'un dé à six faces donnent des triplets de l'ensemble des faces élevé à la puissance $3$.\nLe nombre de résultats est la puissance troisième de $6$, soit $216$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p03_q5",
            "type": "mcq",
            "prompt": "Le nombre de résultats de trois lancers d'un dé est :",
            "options": [
              "$18$",
              "$36$",
              "$216$",
              "$6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque lancer a $6$ issues et les lancers se combinent : le total est $216$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas additionner les cardinaux",
          "stepTheme": "Ne pas additionner les cardinaux",
          "stepBadge": "Ne pas additionner les cardinaux",
          "paragraphText": "• Piège : le cardinal d'un produit cartésien s'obtient par une multiplication, pas par une addition.\nL'addition correspondrait au cardinal d'une réunion d'ensembles disjoints, pas à des couples.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p03_q6",
            "type": "mcq",
            "prompt": "Pour deux ensembles de cardinaux $3$ et $4$, le cardinal du produit cartésien n'est pas $7$ car on doit :",
            "options": [
              "Soustraire les cardinaux",
              "Multiplier les cardinaux",
              "Diviser les cardinaux",
              "Prendre le plus grand des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété impose une multiplication des cardinaux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p03_q1",
          "type": "mcq",
          "prompt": "Le produit cartésien $A \\times B$ est formé de :",
          "options": [
            "Nombres réels",
            "Couples dont le premier élément est dans $A$ et le second dans $B$",
            "Éléments communs à $A$ et $B$",
            "Éléments de $A$ ou de $B$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : tous les couples formés dans cet ordre."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p03_q2",
          "type": "mcq",
          "prompt": "Le nombre d'éléments de ce produit cartésien est :",
          "options": [
            "$7$",
            "$34$",
            "$12$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $3 \\times 4 = 12$ couples."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p03_q3",
          "type": "mcq",
          "prompt": "Si deux ensembles ont pour cardinaux $5$ et $8$, le cardinal de leur produit cartésien est :",
          "options": [
            "$13$",
            "$40$",
            "$58$",
            "$85$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On multiplie les cardinaux : $5 \\times 8 = 40$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p03_q4",
          "type": "mcq",
          "prompt": "Les couples $(a ; b)$ et $(b ; a)$, avec $a$ différent de $b$, sont :",
          "options": [
            "Égaux",
            "Différents",
            "Tous deux vides",
            "Interchangeables"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ordre compte dans un couple : les deux écritures désignent des éléments différents."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p03_q5",
          "type": "mcq",
          "prompt": "Le nombre de résultats de trois lancers d'un dé est :",
          "options": [
            "$18$",
            "$36$",
            "$216$",
            "$6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque lancer a $6$ issues et les lancers se combinent : le total est $216$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p03_q6",
          "type": "mcq",
          "prompt": "Pour deux ensembles de cardinaux $3$ et $4$, le cardinal du produit cartésien n'est pas $7$ car on doit :",
          "options": [
            "Soustraire les cardinaux",
            "Multiplier les cardinaux",
            "Diviser les cardinaux",
            "Prendre le plus grand des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété impose une multiplication des cardinaux."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l04_denombrement_p04",
      "order": 4,
      "title": "p-uplets d'un ensemble",
      "summary": "Définir un p-uplet, reconnaître couples, triplets et quadruplets, et compter les p-uplets d'un ensemble à n éléments.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un entier naturel non nul. On appelle $p$-uplet de $E$ tout élément de l'ensemble $E^p$. Cas particuliers : pour $p = 2$, on parle de couple ; pour $p = 3$, de triplet ; pour $p = 4$, de quadruplet.\nPropriété : le nombre de $p$-uplets d'un ensemble à $n$ éléments est égal à $n^p$.\nRemarque : dans les $p$-uplets, un élément peut apparaître plusieurs fois, la répétition est possible, et l'ordre dans lequel les éléments apparaissent est important.\nExemple de la leçon : pour $E = \\{0 ; 5 ; 6\\}$, les triplets formés à partir de ses éléments, par exemple $(0 ; 5 ; 6)$ et $(0 ; 0 ; 5)$, sont des éléments de $E^3$.",
      "keyRule": "p-uplet : ordre important et répétitions autorisées, d'où le comptage en puissance $n^p$.",
      "formulas": [
        {
          "name": "Nombre de p-uplets",
          "formula": "n^p \\text{ pour un ensemble à } n \\text{ éléments }"
        }
      ],
      "workedExample": {
        "title": "Des numéros de téléphone (exercice de fixation)",
        "statement": "Détermine le nombre de numéros de téléphone de $8$ chiffres, puis de $10$ chiffres, que l'on peut former avec les chiffres du système décimal.",
        "methodSteps": [
          "Le système décimal comporte $10$ chiffres, de $0$ à $9$.",
          "Un numéro de $8$ chiffres est un $8$-uplet de cet ensemble de $10$ chiffres, avec répétitions possibles : il y en a $10^8$.",
          "Un numéro de $10$ chiffres est un $10$-uplet : il y en a $10^{10}$."
        ],
        "conclusion": "Les nombres cherchés sont les puissances dixièmes correspondantes de $10$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un p-uplet",
          "stepTheme": "Un p-uplet",
          "stepBadge": "Un p-uplet",
          "paragraphText": "• Définition : un $p$-uplet de $E$ est un élément de $E^p$, c'est-à-dire une liste ordonnée de $p$ éléments de $E$.\nPour $p = 3$, on parle de triplet.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p04_q1",
            "type": "mcq",
            "prompt": "Un élément de $E^3$ est appelé :",
            "options": [
              "Un couple",
              "Un quadruplet",
              "Un triplet",
              "Une permutation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cas $p = 3$ correspond au triplet dans la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de p-uplets",
          "stepTheme": "Le nombre de p-uplets",
          "stepBadge": "Le nombre de p-uplets",
          "paragraphText": "• Propriété : le nombre de $p$-uplets d'un ensemble à $n$ éléments est $n^p$.\nC'est la conséquence directe du cardinal d'une puissance cartésienne.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p04_q2",
            "type": "mcq",
            "prompt": "Le nombre de $p$-uplets d'un ensemble à $n$ éléments est :",
            "options": [
              "$p^n$",
              "$n \\times p$",
              "$n^p$",
              "$n + p$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La formule de la leçon est $n^p$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Répétition et ordre dans un p-uplet",
          "stepTheme": "Répétition et ordre dans un p-uplet",
          "stepBadge": "Répétition et ordre dans un p-uplet",
          "paragraphText": "• Remarque de la leçon : dans un $p$-uplet, un élément peut apparaître plusieurs fois.\nL'ordre des éléments est également important : permuter les éléments change le $p$-uplet.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p04_q3",
            "type": "mcq",
            "prompt": "Dans un $p$-uplet, la répétition d'un élément est :",
            "options": [
              "Interdite",
              "Possible",
              "Obligatoire",
              "Possible seulement pour $p = 2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon autorise explicitement la répétition."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les numéros de téléphone à 8 chiffres",
          "stepTheme": "Les numéros de téléphone à 8 chiffres",
          "stepBadge": "Les numéros de téléphone à 8 chiffres",
          "paragraphText": "• Exercice de fixation : un numéro de $8$ chiffres est un $8$-uplet des $10$ chiffres décimaux.\nSon nombre est donc la puissance huitième de $10$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p04_q4",
            "type": "mcq",
            "prompt": "Le nombre de numéros de téléphone de $8$ chiffres est :",
            "options": [
              "$10^8$",
              "$8^{10}$",
              "$80$",
              "$10 \\times 8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On applique la formule avec $n = 10$ et $p = 8$ : $10^8$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un triplet de l'ensemble de la leçon",
          "stepTheme": "Un triplet de l'ensemble de la leçon",
          "stepBadge": "Un triplet de l'ensemble de la leçon",
          "paragraphText": "• Exemple de la leçon : pour $E = \\{0 ; 5 ; 6\\}$, un triplet doit être formé uniquement d'éléments de $E$.\nUne liste contenant un nombre étranger à $E$ n'est pas un triplet de $E$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p04_q5",
            "type": "mcq",
            "prompt": "Laquelle de ces listes est un triplet de $E = \\{0 ; 5 ; 6\\}$ ?",
            "options": [
              "$(0 ; 0 ; 1)$",
              "$(0 ; 5 ; 6)$",
              "$(5 ; 6 ; 7)$",
              "$(0 ; 1 ; 5)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seul $(0 ; 5 ; 6)$ n'utilise que des éléments de $E$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ordre compte dans un p-uplet",
          "stepTheme": "L'ordre compte dans un p-uplet",
          "stepBadge": "L'ordre compte dans un p-uplet",
          "paragraphText": "• Piège : deux $p$-uplets qui contiennent les mêmes éléments dans un ordre différent sont des $p$-uplets différents.\nC'est ce qui distingue une liste ordonnée d'un ensemble.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p04_q6",
            "type": "mcq",
            "prompt": "Les listes $(0 ; 5 ; 6)$ et $(5 ; 0 ; 6)$ sont :",
            "options": [
              "Le même triplet",
              "Deux triplets différents",
              "Un couple et un triplet",
              "Égales car elles ont les mêmes éléments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'ordre des éléments fait partie de la liste : les deux triplets diffèrent."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p04_q1",
          "type": "mcq",
          "prompt": "Un élément de $E^3$ est appelé :",
          "options": [
            "Un couple",
            "Un quadruplet",
            "Un triplet",
            "Une permutation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cas $p = 3$ correspond au triplet dans la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p04_q2",
          "type": "mcq",
          "prompt": "Le nombre de $p$-uplets d'un ensemble à $n$ éléments est :",
          "options": [
            "$p^n$",
            "$n \\times p$",
            "$n^p$",
            "$n + p$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La formule de la leçon est $n^p$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p04_q3",
          "type": "mcq",
          "prompt": "Dans un $p$-uplet, la répétition d'un élément est :",
          "options": [
            "Interdite",
            "Possible",
            "Obligatoire",
            "Possible seulement pour $p = 2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon autorise explicitement la répétition."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p04_q4",
          "type": "mcq",
          "prompt": "Le nombre de numéros de téléphone de $8$ chiffres est :",
          "options": [
            "$10^8$",
            "$8^{10}$",
            "$80$",
            "$10 \\times 8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On applique la formule avec $n = 10$ et $p = 8$ : $10^8$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p04_q5",
          "type": "mcq",
          "prompt": "Laquelle de ces listes est un triplet de $E = \\{0 ; 5 ; 6\\}$ ?",
          "options": [
            "$(0 ; 0 ; 1)$",
            "$(0 ; 5 ; 6)$",
            "$(5 ; 6 ; 7)$",
            "$(0 ; 1 ; 5)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seul $(0 ; 5 ; 6)$ n'utilise que des éléments de $E$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p04_q6",
          "type": "mcq",
          "prompt": "Les listes $(0 ; 5 ; 6)$ et $(5 ; 0 ; 6)$ sont :",
          "options": [
            "Le même triplet",
            "Deux triplets différents",
            "Un couple et un triplet",
            "Égales car elles ont les mêmes éléments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'ordre des éléments fait partie de la liste : les deux triplets diffèrent."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l04_denombrement_p05",
      "order": 5,
      "title": "Arrangements et permutations",
      "summary": "Définir un arrangement et une permutation, et calculer leur nombre à l'aide des produits d'entiers consécutifs et de la factorielle.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un entier tel que $1 \\leq p \\leq n$. On appelle arrangement de $p$ éléments de $E$ tout $p$-uplet d'éléments de $E$ deux à deux distincts. Dans un arrangement, la répétition est impossible et l'ordre est important.\nLe nombre d'arrangements de $p$ éléments dans un ensemble à $n$ éléments, noté $A_n^p$, est le produit de $p$ entiers consécutifs dont le plus grand est $n$. Cas particuliers : $A_n^1 = n$ et, par convention, $A_n^0 = 1$.\nUne permutation de $E$ est un arrangement des $n$ éléments de $E$ ; leur nombre est $A_n^n$, c'est-à-dire le produit de tous les entiers de $n$ jusqu'à $1$, noté $n!$ et lu « factorielle $n$ ».\nPropriété : pour $1 \\leq p \\leq n$, $A_n^p$ est le quotient de $n!$ par $(n - p)!$.",
      "keyRule": "Arrangement : ordre important, sans répétition ; permutation : arrangement qui utilise tous les éléments.",
      "formulas": [
        {
          "name": "Nombre d'arrangements",
          "formula": "A_n^p = \\frac{n!}{(n - p)!}"
        },
        {
          "name": "Factorielle",
          "formula": "n! = n \\times (n - 1) \\times \\ldots \\times 2 \\times 1"
        }
      ],
      "workedExample": {
        "title": "Les mots formés avec le nom KENDAL (exercice de fixation)",
        "statement": "Détermine le nombre de mots, ayant un sens ou non, que l'on peut former à partir des lettres du nom KENDAL.",
        "methodSteps": [
          "Le nom KENDAL comporte $6$ lettres toutes différentes.",
          "Former un mot avec toutes les lettres est une permutation de ces $6$ lettres.",
          "Le nombre de mots est donc $A_6^6$, c'est-à-dire $6!$."
        ],
        "conclusion": "Il y a $720$ mots possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un arrangement",
          "stepTheme": "Un arrangement",
          "stepBadge": "Un arrangement",
          "paragraphText": "• Définition : un arrangement de $p$ éléments de $E$ est un $p$-uplet d'éléments deux à deux distincts.\nExemple de la leçon : dans un ensemble à six éléments, des listes de quatre éléments distincts sont des arrangements de $4$ éléments.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p05_q1",
            "type": "mcq",
            "prompt": "Un arrangement se distingue d'un $p$-uplet quelconque car ses éléments sont :",
            "options": [
              "Toujours répétés",
              "Deux à deux distincts",
              "Sans ordre",
              "Tous égaux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La condition propre à l'arrangement est la distinction des éléments."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le nombre d'arrangements",
          "stepTheme": "Le nombre d'arrangements",
          "stepBadge": "Le nombre d'arrangements",
          "paragraphText": "• Propriété : $A_n^p$ est le produit de $p$ entiers naturels consécutifs dont le plus grand est $n$.\nIl y a donc $p$ facteurs, en descendant à partir de $n$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p05_q2",
            "type": "mcq",
            "prompt": "$A_{10}^4$ est le produit de quels facteurs ?",
            "options": [
              "$10 \\times 9 \\times 8 \\times 4$",
              "$10 \\times 9 \\times 8 \\times 7$",
              "$4 \\times 3 \\times 2 \\times 1$",
              "$10 \\times 4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quatre facteurs consécutifs à partir de $10$ : $10$, $9$, $8$ et $7$, ce qui donne $5040$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un arrangement de 5 éléments dans 7",
          "stepTheme": "Un arrangement de 5 éléments dans 7",
          "stepBadge": "Un arrangement de 5 éléments dans 7",
          "paragraphText": "• Exercice de fixation : $A_7^5$ est le produit de $5$ entiers consécutifs dont le plus grand est $7$.\nCe produit vaut $2520$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p05_q3",
            "type": "mcq",
            "prompt": "$A_7^5$ vaut :",
            "options": [
              "$35$",
              "$210$",
              "$2520$",
              "$5040$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $7 \\times 6 \\times 5 \\times 4 \\times 3 = 2520$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Une permutation",
          "stepTheme": "Une permutation",
          "stepBadge": "Une permutation",
          "paragraphText": "• Définition : une permutation d'un ensemble à $n$ éléments est un arrangement de ses $n$ éléments.\nElle utilise donc chaque élément exactement une fois, dans un certain ordre.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p05_q4",
            "type": "mcq",
            "prompt": "Une permutation d'un ensemble à $n$ éléments est :",
            "options": [
              "Une combinaison de $n$ éléments",
              "Un arrangement de $n$ éléments",
              "Un $p$-uplet avec répétitions",
              "Un sous-ensemble quelconque"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition de la leçon : arrangement de tous les éléments."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La factorielle",
          "stepTheme": "La factorielle",
          "stepBadge": "La factorielle",
          "paragraphText": "• Notation : le produit $n \\times (n - 1) \\times \\ldots \\times 2 \\times 1$ se note $n!$.\nExemple de la leçon : $7!$ est le produit de tous les entiers de $7$ à $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p05_q5",
            "type": "mcq",
            "prompt": "Le nombre de permutations d'un ensemble à $6$ éléments, comme les lettres de KENDAL, est :",
            "options": [
              "$120$",
              "$36$",
              "$720$",
              "$6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $6! = 720$, comme dans l'exercice de fixation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas autoriser la répétition dans un arrangement",
          "stepTheme": "Ne pas autoriser la répétition dans un arrangement",
          "stepBadge": "Ne pas autoriser la répétition dans un arrangement",
          "paragraphText": "• Piège : dans un arrangement, un élément ne peut apparaître qu'au plus une fois.\nUne liste avec un élément répété, comme dans les contre-exemples de la leçon, n'est pas un arrangement.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p05_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces listes n'est pas un arrangement de l'ensemble $E$ de la leçon ?",
            "options": [
              "$(1 ; a ; 4 ; 9)$",
              "$(b ; c ; 9 ; 1)$",
              "$(b ; 4 ; b)$",
              "$(9 ; a ; 4 ; 1)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'élément $b$ y apparaît deux fois : la répétition interdit de parler d'arrangement."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p05_q1",
          "type": "mcq",
          "prompt": "Un arrangement se distingue d'un $p$-uplet quelconque car ses éléments sont :",
          "options": [
            "Toujours répétés",
            "Deux à deux distincts",
            "Sans ordre",
            "Tous égaux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La condition propre à l'arrangement est la distinction des éléments."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p05_q2",
          "type": "mcq",
          "prompt": "$A_{10}^4$ est le produit de quels facteurs ?",
          "options": [
            "$10 \\times 9 \\times 8 \\times 4$",
            "$10 \\times 9 \\times 8 \\times 7$",
            "$4 \\times 3 \\times 2 \\times 1$",
            "$10 \\times 4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quatre facteurs consécutifs à partir de $10$ : $10$, $9$, $8$ et $7$, ce qui donne $5040$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p05_q3",
          "type": "mcq",
          "prompt": "$A_7^5$ vaut :",
          "options": [
            "$35$",
            "$210$",
            "$2520$",
            "$5040$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $7 \\times 6 \\times 5 \\times 4 \\times 3 = 2520$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p05_q4",
          "type": "mcq",
          "prompt": "Une permutation d'un ensemble à $n$ éléments est :",
          "options": [
            "Une combinaison de $n$ éléments",
            "Un arrangement de $n$ éléments",
            "Un $p$-uplet avec répétitions",
            "Un sous-ensemble quelconque"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition de la leçon : arrangement de tous les éléments."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p05_q5",
          "type": "mcq",
          "prompt": "Le nombre de permutations d'un ensemble à $6$ éléments, comme les lettres de KENDAL, est :",
          "options": [
            "$120$",
            "$36$",
            "$720$",
            "$6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $6! = 720$, comme dans l'exercice de fixation."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p05_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces listes n'est pas un arrangement de l'ensemble $E$ de la leçon ?",
          "options": [
            "$(1 ; a ; 4 ; 9)$",
            "$(b ; c ; 9 ; 1)$",
            "$(b ; 4 ; b)$",
            "$(9 ; a ; 4 ; 1)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'élément $b$ y apparaît deux fois : la répétition interdit de parler d'arrangement."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l04_denombrement_p06",
      "order": 6,
      "title": "Combinaisons",
      "summary": "Définir une combinaison, calculer le nombre de combinaisons et utiliser la symétrie et la relation de Pascal.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un entier tel que $p \\leq n$. On appelle combinaison de $p$ éléments de $E$ tout sous-ensemble de $E$ ayant $p$ éléments.\nRemarque : contrairement aux listes, l'ordre d'écriture des éléments d'une combinaison n'a pas d'importance, et chaque élément ne peut apparaître qu'au plus une fois.\nPropriété 1 : le nombre de combinaisons de $p$ éléments d'un ensemble à $n$ éléments, noté $C_n^p$, est le quotient de $A_n^p$ par $p!$, c'est-à-dire le quotient de $n!$ par le produit de $p!$ et de $(n - p)!$.\nPropriété 2 : $C_n^{n - p} = C_n^p$, et si $0 < p < n$, alors la somme de $C_{n - 1}^{p - 1}$ et de $C_{n - 1}^{p}$ vaut $C_n^p$.",
      "keyRule": "Combinaison : ni ordre, ni répétition ; chaque arrangement d'un même sous-ensemble a été compté $p!$ fois, d'où la division par $p!$.",
      "formulas": [
        {
          "name": "Nombre de combinaisons",
          "formula": "C_n^p = \\frac{n!}{p! (n - p)!}"
        },
        {
          "name": "Symétrie",
          "formula": "C_n^{n - p} = C_n^p"
        }
      ],
      "workedExample": {
        "title": "Les combinaisons de 5 dans 11 (exercice de fixation)",
        "statement": "Calcule le nombre de combinaisons de $5$ éléments dans un ensemble à $11$ éléments.",
        "methodSteps": [
          "On applique la formule : $C_{11}^5$ est le quotient de $11!$ par le produit de $5!$ et de $6!$.",
          "Après simplification, le numérateur effectif est le produit de $11$, $10$, $9$, $8$ et $7$, et le dénominateur vaut $120$.",
          "Ce quotient vaut $462$."
        ],
        "conclusion": "Il y a $462$ combinaisons de $5$ éléments parmi $11$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une combinaison",
          "stepTheme": "Une combinaison",
          "stepBadge": "Une combinaison",
          "paragraphText": "• Définition : une combinaison de $p$ éléments de $E$ est un sous-ensemble de $E$ ayant $p$ éléments.\nElle s'écrit avec des accolades, comme un ensemble.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p06_q1",
            "type": "mcq",
            "prompt": "Une combinaison de $p$ éléments est :",
            "options": [
              "Une liste ordonnée",
              "Un sous-ensemble à $p$ éléments",
              "Un $p$-uplet avec répétitions",
              "Une permutation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition de la leçon parle d'un sous-ensemble, pas d'une liste."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'ordre dans une combinaison",
          "stepTheme": "L'ordre dans une combinaison",
          "stepBadge": "L'ordre dans une combinaison",
          "paragraphText": "• Remarque de la leçon : les ensembles formés des mêmes éléments sont égaux, quel que soit l'ordre d'écriture.\nL'ordre n'a donc aucune importance dans une combinaison.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p06_q2",
            "type": "mcq",
            "prompt": "Les écritures d'une même combinaison dans deux ordres différents désignent :",
            "options": [
              "Deux combinaisons différentes",
              "La même combinaison",
              "Un arrangement et une combinaison",
              "Deux ensembles disjoints"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec les mêmes éléments, les deux ensembles sont égaux : c'est une seule combinaison."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de combinaisons",
          "stepTheme": "Le nombre de combinaisons",
          "stepBadge": "Le nombre de combinaisons",
          "paragraphText": "• Propriété 1 : $C_n^p$ est le quotient de $A_n^p$ par $p!$.\nSous forme factorielle, c'est le quotient de $n!$ par le produit de $p!$ et de $(n - p)!$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p06_q3",
            "type": "mcq",
            "prompt": "$C_n^p$ est égal au quotient de $A_n^p$ par :",
            "options": [
              "$n!$",
              "$(n - p)!$",
              "$p!$",
              "$n$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque combinaison correspond à $p!$ arrangements : on divise donc par $p!$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les combinaisons de 5 dans 11",
          "stepTheme": "Les combinaisons de 5 dans 11",
          "stepBadge": "Les combinaisons de 5 dans 11",
          "paragraphText": "• Exercice de fixation : $C_{11}^5$ se calcule par la formule factorielle, puis par simplification.\nLe résultat exact est $462$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p06_q4",
            "type": "mcq",
            "prompt": "$C_{11}^5$ vaut :",
            "options": [
              "$231$",
              "$462$",
              "$55$",
              "$55440$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le quotient du produit de $11$, $10$, $9$, $8$ et $7$ par $120$ vaut $462$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La symétrie des combinaisons",
          "stepTheme": "La symétrie des combinaisons",
          "stepBadge": "La symétrie des combinaisons",
          "paragraphText": "• Propriété 2 : $C_n^{n - p} = C_n^p$.\nChoisir les $p$ éléments retenus revient à choisir les $n - p$ éléments écartés.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p06_q5",
            "type": "mcq",
            "prompt": "D'après la symétrie, $C_{100}^2$ est égal à :",
            "options": [
              "$C_{100}^{98}$",
              "$C_{100}^{50}$",
              "$C_{100}^{2}$ seulement, sans autre écriture",
              "$C_{98}^{100}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace $p$ par $n - p$ : $100 - 2 = 98$, d'où l'égalité avec $C_{100}^{98}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre arrangement et combinaison",
          "stepTheme": "Ne pas confondre arrangement et combinaison",
          "stepBadge": "Ne pas confondre arrangement et combinaison",
          "paragraphText": "• Piège : un tirage où l'ordre compte est un arrangement, un tirage où l'ordre ne compte pas est une combinaison.\nPour un même couple $n$ et $p$, le nombre d'arrangements est plus grand que le nombre de combinaisons.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p06_q6",
            "type": "mcq",
            "prompt": "Pour $p$ éléments parmi $n$, le nombre de combinaisons est celui des arrangements divisé par :",
            "options": [
              "$n$",
              "$p$",
              "$p!$",
              "$n!$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La division par $p!$ supprime exactement les ordres possibles d'un même sous-ensemble."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p06_q1",
          "type": "mcq",
          "prompt": "Une combinaison de $p$ éléments est :",
          "options": [
            "Une liste ordonnée",
            "Un sous-ensemble à $p$ éléments",
            "Un $p$-uplet avec répétitions",
            "Une permutation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition de la leçon parle d'un sous-ensemble, pas d'une liste."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p06_q2",
          "type": "mcq",
          "prompt": "Les écritures d'une même combinaison dans deux ordres différents désignent :",
          "options": [
            "Deux combinaisons différentes",
            "La même combinaison",
            "Un arrangement et une combinaison",
            "Deux ensembles disjoints"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec les mêmes éléments, les deux ensembles sont égaux : c'est une seule combinaison."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p06_q3",
          "type": "mcq",
          "prompt": "$C_n^p$ est égal au quotient de $A_n^p$ par :",
          "options": [
            "$n!$",
            "$(n - p)!$",
            "$p!$",
            "$n$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque combinaison correspond à $p!$ arrangements : on divise donc par $p!$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p06_q4",
          "type": "mcq",
          "prompt": "$C_{11}^5$ vaut :",
          "options": [
            "$231$",
            "$462$",
            "$55$",
            "$55440$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le quotient du produit de $11$, $10$, $9$, $8$ et $7$ par $120$ vaut $462$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p06_q5",
          "type": "mcq",
          "prompt": "D'après la symétrie, $C_{100}^2$ est égal à :",
          "options": [
            "$C_{100}^{98}$",
            "$C_{100}^{50}$",
            "$C_{100}^{2}$ seulement, sans autre écriture",
            "$C_{98}^{100}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace $p$ par $n - p$ : $100 - 2 = 98$, d'où l'égalité avec $C_{100}^{98}$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p06_q6",
          "type": "mcq",
          "prompt": "Pour $p$ éléments parmi $n$, le nombre de combinaisons est celui des arrangements divisé par :",
          "options": [
            "$n$",
            "$p$",
            "$p!$",
            "$n!$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La division par $p!$ supprime exactement les ordres possibles d'un même sous-ensemble."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l04_denombrement_p07",
      "order": 7,
      "title": "Tirages et binôme de Newton",
      "summary": "Associer chaque type de tirage à son modèle de dénombrement et développer une puissance d'une somme par le binôme de Newton.",
      "conceptExplanation": "Tableau des tirages de la leçon : un tirage simultané de $p$ éléments parmi $n$ se modélise par $C_n^p$ ; un tirage successif sans remise de $p$ éléments parmi $n$ se modélise par $A_n^p$ ; un tirage successif sans remise des $n$ éléments se modélise par $n!$ ; un tirage successif avec remise de $p$ éléments parmi $n$ se modélise par $n^p$.\nVocabulaire : tirer au moins $n$ éléments a pour événement complémentaire tirer au plus $n - 1$ éléments.\nBinôme de Newton : pour $a$ et $b$ réels et $n$ entier naturel non nul, le développement de $(a + b)^n$ est la somme, pour $k$ allant de $0$ à $n$, des termes formés du coefficient $C_n^k$, de la puissance correspondante de $a$ et de la puissance complémentaire de $b$. Les coefficients pour $n = 4$ sont $1$, $4$, $6$, $4$ et $1$.",
      "keyRule": "Le bon modèle de tirage se choisit en répondant à deux questions : l'ordre compte-t-il, et y a-t-il remise ou répétition possible ?",
      "formulas": [
        {
          "name": "Tirage simultané",
          "formula": "C_n^p"
        },
        {
          "name": "Tirage successif sans remise",
          "formula": "A_n^p"
        },
        {
          "name": "Tirage successif avec remise",
          "formula": "n^p"
        },
        {
          "name": "Binôme de Newton",
          "formula": "(a + b)^n = \\sum_{k=0}^{n} C_n^k a^k b^{n - k}"
        }
      ],
      "workedExample": {
        "title": "Le tirage le plus avantageux (situation d'évaluation)",
        "statement": "Une urne contient quatre cartons numérotés de $1$ à $4$. On tire deux cartons, soit simultanément, soit successivement sans remise, soit successivement avec remise. Quel tirage donne le plus de résultats possibles ?",
        "methodSteps": [
          "Le tirage simultané est une combinaison : $C_4^2 = 6$ résultats.",
          "Le tirage successif sans remise est un arrangement : $A_4^2 = 12$ résultats.",
          "Le tirage successif avec remise est un $2$-uplet : $4^2 = 16$ résultats."
        ],
        "conclusion": "Le tirage successif avec remise, avec $16$ résultats, est le plus avantageux."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le modèle d'un tirage simultané",
          "stepTheme": "Le modèle d'un tirage simultané",
          "stepBadge": "Le modèle d'un tirage simultané",
          "paragraphText": "• Tableau de la leçon : tirer en même temps $p$ éléments parmi $n$ ne tient pas compte d'un ordre.\nLe modèle est donc la combinaison $C_n^p$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p07_q1",
            "type": "mcq",
            "prompt": "Un tirage simultané de $p$ éléments parmi $n$ se modélise par :",
            "options": [
              "$A_n^p$",
              "$n^p$",
              "$C_n^p$",
              "$n!$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Simultané signifie sans ordre : c'est une combinaison."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le modèle d'un tirage successif sans remise",
          "stepTheme": "Le modèle d'un tirage successif sans remise",
          "stepBadge": "Le modèle d'un tirage successif sans remise",
          "paragraphText": "• Tableau de la leçon : tirer élément après élément sans remettre l'élément tiré donne un ordre et aucune répétition.\nLe modèle est l'arrangement $A_n^p$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p07_q2",
            "type": "mcq",
            "prompt": "Un tirage successif sans remise de $p$ éléments parmi $n$ se modélise par :",
            "options": [
              "$C_n^p$",
              "$A_n^p$",
              "$n^p$",
              "$p^n$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ordre important et répétition impossible : c'est un arrangement."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le modèle d'un tirage successif avec remise",
          "stepTheme": "Le modèle d'un tirage successif avec remise",
          "stepBadge": "Le modèle d'un tirage successif avec remise",
          "paragraphText": "• Tableau de la leçon : tirer un élément, le remettre, et recommencer permet les répétitions, avec un ordre.\nLe modèle est le $p$-uplet, compté par $n^p$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p07_q3",
            "type": "mcq",
            "prompt": "Un tirage successif avec remise de $p$ éléments parmi $n$ se modélise par :",
            "options": [
              "$n^p$",
              "$A_n^p$",
              "$C_n^p$",
              "$n!$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec remise, les résultats sont des $p$-uplets : il y en a $n^p$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Comparer les trois tirages de quatre cartons",
          "stepTheme": "Comparer les trois tirages de quatre cartons",
          "stepBadge": "Comparer les trois tirages de quatre cartons",
          "paragraphText": "• Situation d'évaluation : pour deux cartons parmi quatre, les trois modèles donnent $6$, $12$ et $16$ résultats.\nLe plus grand nombre correspond au tirage avec remise.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p07_q4",
            "type": "mcq",
            "prompt": "Pour deux cartons parmi quatre, le tirage successif avec remise donne :",
            "options": [
              "$6$ résultats",
              "$12$ résultats",
              "$8$ résultats",
              "$16$ résultats"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est $4^2 = 16$, le plus grand des trois nombres."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le binôme de Newton",
          "stepTheme": "Le binôme de Newton",
          "stepBadge": "Le binôme de Newton",
          "paragraphText": "• Formule de la leçon : $(a + b)^n$ se développe en une somme de termes utilisant les coefficients $C_n^k$.\nPour $n = 2$, le développement est $a^2 + 2ab + b^2$, avec les coefficients $1$, $2$ et $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p07_q5",
            "type": "mcq",
            "prompt": "Dans le développement de $(a + b)^2$, le coefficient du terme en $ab$ est :",
            "options": [
              "$1$",
              "$2$",
              "$3$",
              "$4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'exemple de la leçon donne $(a + b)^2 = a^2 + 2ab + b^2$ : le coefficient cherché est $2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le vocabulaire au moins et au plus",
          "stepTheme": "Le vocabulaire au moins et au plus",
          "stepBadge": "Le vocabulaire au moins et au plus",
          "paragraphText": "• Vocabulaire de la leçon : l'événement complémentaire de « tirer au moins $n$ éléments » est « tirer au plus $n - 1$ éléments ».\nConfondre ces deux expressions fausse les dénombrements par complémentaire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l04_denombrement_p07_q6",
            "type": "mcq",
            "prompt": "L'événement complémentaire de « tirer au moins $n$ éléments » est :",
            "options": [
              "Tirer au moins $n + 1$ éléments",
              "Tirer au plus $n$ éléments",
              "Tirer au plus $n - 1$ éléments",
              "Tirer exactement $n$ éléments"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En dessous du seuil « au moins $n$ », on trouve au plus $n - 1$ éléments."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p07_q1",
          "type": "mcq",
          "prompt": "Un tirage simultané de $p$ éléments parmi $n$ se modélise par :",
          "options": [
            "$A_n^p$",
            "$n^p$",
            "$C_n^p$",
            "$n!$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Simultané signifie sans ordre : c'est une combinaison."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p07_q2",
          "type": "mcq",
          "prompt": "Un tirage successif sans remise de $p$ éléments parmi $n$ se modélise par :",
          "options": [
            "$C_n^p$",
            "$A_n^p$",
            "$n^p$",
            "$p^n$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ordre important et répétition impossible : c'est un arrangement."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p07_q3",
          "type": "mcq",
          "prompt": "Un tirage successif avec remise de $p$ éléments parmi $n$ se modélise par :",
          "options": [
            "$n^p$",
            "$A_n^p$",
            "$C_n^p$",
            "$n!$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec remise, les résultats sont des $p$-uplets : il y en a $n^p$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p07_q4",
          "type": "mcq",
          "prompt": "Pour deux cartons parmi quatre, le tirage successif avec remise donne :",
          "options": [
            "$6$ résultats",
            "$12$ résultats",
            "$8$ résultats",
            "$16$ résultats"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est $4^2 = 16$, le plus grand des trois nombres."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p07_q5",
          "type": "mcq",
          "prompt": "Dans le développement de $(a + b)^2$, le coefficient du terme en $ab$ est :",
          "options": [
            "$1$",
            "$2$",
            "$3$",
            "$4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'exemple de la leçon donne $(a + b)^2 = a^2 + 2ab + b^2$ : le coefficient cherché est $2$."
        },
        {
          "id": "premiere_c_maths_numerique_l04_denombrement_p07_q6",
          "type": "mcq",
          "prompt": "L'événement complémentaire de « tirer au moins $n$ éléments » est :",
          "options": [
            "Tirer au moins $n + 1$ éléments",
            "Tirer au plus $n$ éléments",
            "Tirer au plus $n - 1$ éléments",
            "Tirer exactement $n$ éléments"
          ],
          "correctAnswerIndex": 2,
          "explanation": "En dessous du seuil « au moins $n$ », on trouve au plus $n - 1$ éléments."
        }
      ]
    }
  ]
};
