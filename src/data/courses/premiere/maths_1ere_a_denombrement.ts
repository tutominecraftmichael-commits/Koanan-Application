import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 02 : DENOMBREMENT » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=866
export const MATHS_1ERE_A_L02_DENOMBREMENT: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l02_denombrement",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 2,
  "title": "Leçon 2 : Dénombrement",
  "summary": "À partir des $24$ façons de faire asseoir quatre membres d'une délégation sur quatre fauteuils, on étudie les cardinaux, le produit cartésien, les $p$-listes, les arrangements, les permutations et les combinaisons.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=866",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p01",
      "order": 1,
      "title": "Cardinal et complémentaire",
      "summary": "Définir le cardinal d'un ensemble fini et le complémentaire d'une partie, et calculer leurs cardinaux.",
      "conceptExplanation": "On appelle cardinal d'un ensemble fini $E$ le nombre d'éléments de cet ensemble ; on le note $Card(E)$. Exemple : pour $A = \\{a ; b ; c ; d ; e ; f\\}$, $Card(A) = 6$.\nSoit $A$ une partie non vide d'un ensemble $E$ : on appelle complémentaire de $A$ dans $E$ l'ensemble des éléments de $E$ n'appartenant pas à $A$. Par exemple, pour $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7\\}$ et $A = \\{1 ; 4 ; 7\\}$, le complémentaire de $A$ est $\\{2 ; 3 ; 5 ; 6\\}$.\nPropriété : $Card(\\bar{A}) = Card(E) - Card(A)$.",
      "keyRule": "Pour le cardinal d'un complémentaire, inutile de lister : on soustrait les cardinaux.",
      "formulas": [
        {
          "name": "Cardinal du complémentaire",
          "formula": "Card(\\bar{A}) = Card(E) - Card(A)",
          "note": "$A$ est une partie de l'ensemble fini $E$."
        }
      ],
      "workedExample": {
        "title": "Les nombres impairs d'un ensemble (exercice de fixation)",
        "statement": "On donne $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 7 ; 8 ; 9 ; 10 ; 11\\}$. Détermine l'ensemble $A$ des nombres impairs de $E$, puis le cardinal de son complémentaire.",
        "methodSteps": [
          "L'ensemble des impairs est $A = \\{1 ; 3 ; 5 ; 7 ; 9 ; 11\\}$, donc $Card(A) = 6$.",
          "L'ensemble $E$ a $10$ éléments.",
          "On applique la propriété : $Card(\\bar{A}) = 10 - 6 = 4$."
        ],
        "conclusion": "Le complémentaire de $A$ a pour cardinal $4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cardinal d'un ensemble fini",
          "stepTheme": "Le cardinal d'un ensemble fini",
          "stepBadge": "Le cardinal d'un ensemble fini",
          "paragraphText": "• Définition : on appelle cardinal d'un ensemble fini $E$ le nombre d'éléments de cet ensemble ; on le note $Card(E)$.\nExemple de la leçon : pour $A = \\{a ; b ; c ; d ; e ; f\\}$ et $B = \\{0 ; 1\\}$, on a $Card(A) = 6$ et $Card(B) = 2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut $Card(A)$ pour $A = \\{a ; b ; c ; d ; e ; f\\}$ ?",
            "options": [
              "$2$",
              "$5$",
              "$6$",
              "$26$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'ensemble $A$ contient six éléments : son cardinal est $6$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le complémentaire d'une partie",
          "stepTheme": "Le complémentaire d'une partie",
          "stepBadge": "Le complémentaire d'une partie",
          "paragraphText": "• Définition : soit $A$ une partie non vide d'un ensemble $E$ ; le complémentaire de $A$ dans $E$ est l'ensemble des éléments de $E$ n'appartenant pas à $A$.\nExemple : pour $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7\\}$ et $A = \\{1 ; 4 ; 7\\}$, le complémentaire de $A$ est $\\{2 ; 3 ; 5 ; 6\\}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q2",
            "type": "mcq",
            "prompt": "Pour $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7\\}$ et $A = \\{1 ; 4 ; 7\\}$, quel est le complémentaire de $A$ dans $E$ ?",
            "options": [
              "$\\{2 ; 3 ; 5 ; 6\\}$",
              "$\\{1 ; 4 ; 7\\}$",
              "$\\{1 ; 2 ; 3\\}$",
              "$\\{4 ; 5 ; 6 ; 7\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On garde les éléments de $E$ qui ne sont pas dans $A$ : $2$, $3$, $5$ et $6$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cardinal du complémentaire",
          "stepTheme": "Le cardinal du complémentaire",
          "stepBadge": "Le cardinal du complémentaire",
          "paragraphText": "• Propriété : si $A$ est une partie d'un ensemble fini $E$, alors $Card(\\bar{A}) = Card(E) - Card(A)$.\nOn peut donc obtenir le cardinal du complémentaire sans lister ses éléments.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q3",
            "type": "mcq",
            "prompt": "Si $Card(E) = 10$ et $Card(A) = 6$, que vaut le cardinal du complémentaire de $A$ dans $E$ ?",
            "options": [
              "$16$",
              "$6$",
              "$10$",
              "$4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On applique la propriété : $10 - 6 = 4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "L'exemple des nombres impairs",
          "stepTheme": "L'exemple des nombres impairs",
          "stepBadge": "L'exemple des nombres impairs",
          "paragraphText": "• Exemple de l'exercice de fixation : pour $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 7 ; 8 ; 9 ; 10 ; 11\\}$, l'ensemble $A$ des nombres impairs de $E$ est $\\{1 ; 3 ; 5 ; 7 ; 9 ; 11\\}$.\nSon cardinal est $6$, et celui de son complémentaire se calcule par la propriété.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q4",
            "type": "mcq",
            "prompt": "Pour $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 7 ; 8 ; 9 ; 10 ; 11\\}$, combien l'ensemble des nombres impairs de $E$ a-t-il d'éléments ?",
            "options": [
              "$5$",
              "$6$",
              "$4$",
              "$10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les impairs de $E$ sont $1$, $3$, $5$, $7$, $9$ et $11$ : six éléments."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Compter les éléments, pas les écrire deux fois",
          "stepTheme": "Compter les éléments, pas les écrire deux fois",
          "stepBadge": "Compter les éléments, pas les écrire deux fois",
          "paragraphText": "• Piège : le cardinal compte les éléments distincts de l'ensemble, chacun une seule fois.\nDans l'exemple de la leçon, $B = \\{0 ; 1\\}$ a pour cardinal $2$, et non le nombre de notations possibles de ses éléments.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $Card(B)$ pour $B = \\{0 ; 1\\}$ ?",
            "options": [
              "$2$",
              "$0$",
              "$1$",
              "$10$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'ensemble $B$ contient exactement deux éléments, $0$ et $1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le complémentaire des impairs",
          "stepTheme": "Le complémentaire des impairs",
          "stepBadge": "Le complémentaire des impairs",
          "paragraphText": "• Exemple complet de l'exercice de fixation : $Card(E) = 10$ et $Card(A) = 6$ pour les impairs.\nLe complémentaire de $A$, formé des nombres pairs de $E$, a donc pour cardinal $4$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice de fixation, que vaut le cardinal du complémentaire de l'ensemble des nombres impairs de $E$ ?",
            "options": [
              "$6$",
              "$10$",
              "$4$",
              "$16$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $Card(E) - Card(A) = 10 - 6 = 4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut $Card(A)$ pour $A = \\{a ; b ; c ; d ; e ; f\\}$ ?",
          "options": [
            "$2$",
            "$5$",
            "$6$",
            "$26$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'ensemble $A$ contient six éléments : son cardinal est $6$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q2",
          "type": "mcq",
          "prompt": "Pour $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7\\}$ et $A = \\{1 ; 4 ; 7\\}$, quel est le complémentaire de $A$ dans $E$ ?",
          "options": [
            "$\\{2 ; 3 ; 5 ; 6\\}$",
            "$\\{1 ; 4 ; 7\\}$",
            "$\\{1 ; 2 ; 3\\}$",
            "$\\{4 ; 5 ; 6 ; 7\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On garde les éléments de $E$ qui ne sont pas dans $A$ : $2$, $3$, $5$ et $6$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q3",
          "type": "mcq",
          "prompt": "Si $Card(E) = 10$ et $Card(A) = 6$, que vaut le cardinal du complémentaire de $A$ dans $E$ ?",
          "options": [
            "$16$",
            "$6$",
            "$10$",
            "$4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On applique la propriété : $10 - 6 = 4$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q4",
          "type": "mcq",
          "prompt": "Pour $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 7 ; 8 ; 9 ; 10 ; 11\\}$, combien l'ensemble des nombres impairs de $E$ a-t-il d'éléments ?",
          "options": [
            "$5$",
            "$6$",
            "$4$",
            "$10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les impairs de $E$ sont $1$, $3$, $5$, $7$, $9$ et $11$ : six éléments."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $Card(B)$ pour $B = \\{0 ; 1\\}$ ?",
          "options": [
            "$2$",
            "$0$",
            "$1$",
            "$10$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'ensemble $B$ contient exactement deux éléments, $0$ et $1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p01_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice de fixation, que vaut le cardinal du complémentaire de l'ensemble des nombres impairs de $E$ ?",
          "options": [
            "$6$",
            "$10$",
            "$4$",
            "$16$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $Card(E) - Card(A) = 10 - 6 = 4$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p02",
      "order": 2,
      "title": "Produit cartésien de deux ensembles finis",
      "summary": "Définir le produit cartésien $A \\times B$, lister ses éléments et calculer son cardinal.",
      "conceptExplanation": "$A$ et $B$ étant deux ensembles finis non vides, on appelle produit cartésien de $A$ par $B$ l'ensemble des couples $(a ; b)$ tels que $a \\in A$ et $b \\in B$. On le note $A \\times B$ et on lit « $A$ croix $B$ ».\nOn peut lister ses éléments avec un arbre de choix ou un tableau à double entrée. Dans un couple, l'ordre des éléments est très important : $(a ; b) \\neq (b ; a)$.\nPropriété : $Card(A \\times B) = Card(A) \\times Card(B)$. Pour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, ce cardinal vaut $12$.",
      "keyRule": "Le cardinal d'un produit cartésien est le produit des cardinaux : on multiplie, on n'additionne pas.",
      "formulas": [
        {
          "name": "Cardinal du produit cartésien",
          "formula": "Card(A \\times B) = Card(A) \\times Card(B)",
          "note": "Valable pour deux ensembles finis non vides."
        }
      ],
      "workedExample": {
        "title": "Le cardinal d'un produit (exercice de fixation)",
        "statement": "On donne $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$. Calcule $Card(A \\times B)$.",
        "methodSteps": [
          "On compte les éléments : $Card(A) = 3$ et $Card(B) = 4$.",
          "On applique la propriété du produit cartésien.",
          "On obtient $3 \\times 4 = 12$."
        ],
        "conclusion": "$Card(A \\times B) = 12$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le produit cartésien de deux ensembles",
          "stepTheme": "Le produit cartésien de deux ensembles",
          "stepBadge": "Le produit cartésien de deux ensembles",
          "paragraphText": "• Définition : $A$ et $B$ étant deux ensembles finis non vides, le produit cartésien de $A$ par $B$ est l'ensemble des couples $(a ; b)$ tels que $a \\in A$ et $b \\in B$.\nOn le note $A \\times B$, qui se lit « $A$ croix $B$ ».",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q1",
            "type": "mcq",
            "prompt": "Un élément du produit cartésien $A \\times B$ est toujours :",
            "options": [
              "Un nombre réel",
              "Un couple $(a ; b)$ avec $a \\in A$ et $b \\in B$",
              "Un sous-ensemble de $A$",
              "Une liste sans ordre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $A \\times B$ est l'ensemble des couples formés d'un élément de $A$ et d'un élément de $B$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'ordre compte dans un couple",
          "stepTheme": "L'ordre compte dans un couple",
          "stepBadge": "L'ordre compte dans un couple",
          "paragraphText": "• Remarque de la leçon : dans un couple, l'ordre des éléments est très important.\nAinsi, $(a ; b) \\neq (b ; a)$ en général : ce sont deux couples différents.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q2",
            "type": "mcq",
            "prompt": "Les couples $(a ; b)$ et $(b ; a)$ sont-ils égaux en général ?",
            "options": [
              "Oui, toujours",
              "Oui, si $a = b$ seulement ils peuvent différer",
              "Oui, car un couple est un ensemble",
              "Non, l'ordre des éléments compte"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La leçon insiste : dans un couple, l'ordre est important, donc $(a ; b)$ et $(b ; a)$ sont différents en général."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cardinal du produit cartésien",
          "stepTheme": "Le cardinal du produit cartésien",
          "stepBadge": "Le cardinal du produit cartésien",
          "paragraphText": "• Propriété : $Card(A \\times B) = Card(A) \\times Card(B)$.\nPour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, on obtient un produit de cardinaux simple à calculer.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q3",
            "type": "mcq",
            "prompt": "Pour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, que vaut $Card(A \\times B)$ ?",
            "options": [
              "$7$",
              "$34$",
              "$12$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On applique la propriété : $3 \\times 4 = 12$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le tableau à double entrée",
          "stepTheme": "Le tableau à double entrée",
          "stepBadge": "Le tableau à double entrée",
          "paragraphText": "• Méthode de la leçon : on peut lister les éléments de $A \\times B$ avec un arbre de choix ou un tableau à double entrée.\nPour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, le tableau donne les $12$ couples, de $(1 ; a)$ à $(3 ; d)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q4",
            "type": "mcq",
            "prompt": "Le couple $(2 ; c)$ appartient-il au produit $A \\times B$ avec $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$ ?",
            "options": [
              "Oui, car $2 \\in A$ et $c \\in B$",
              "Non, car $2$ est un nombre",
              "Non, car $c$ n'est pas dans $A$",
              "Oui, seulement si on échange les ensembles"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un couple de $A \\times B$ prend son premier élément dans $A$ et son second dans $B$ : c'est le cas de $(2 ; c)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre les deux facteurs",
          "stepTheme": "Ne pas confondre les deux facteurs",
          "stepBadge": "Ne pas confondre les deux facteurs",
          "paragraphText": "• Piège des exercices : le couple $(a ; 1)$, avec $A = \\{a ; b\\}$ et $B = \\{1 ; 2\\}$, est un élément de $A \\times B$, pas de $B \\times A$.\nLe premier élément désigne l'ensemble de départ : ici $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q5",
            "type": "mcq",
            "prompt": "Avec $A = \\{a ; b\\}$ et $B = \\{1 ; 2\\}$, de quel produit le couple $(a ; 1)$ est-il un élément ?",
            "options": [
              "$B \\times A$",
              "$A \\times A$",
              "$B \\times B$",
              "$A \\times B$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le premier élément $a$ est dans $A$ et le second $1$ est dans $B$ : le couple est dans $A \\times B$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un couple dans le bon produit",
          "stepTheme": "Un couple dans le bon produit",
          "stepBadge": "Un couple dans le bon produit",
          "paragraphText": "• Exemple des exercices : avec $C = \\{\\alpha ; \\beta ; \\gamma\\}$, le couple $(\\gamma ; b)$ a son premier élément dans $C$ et son second dans $A = \\{a ; b\\}$.\nIl appartient donc au produit $C \\times A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q6",
            "type": "mcq",
            "prompt": "Avec $A = \\{a ; b\\}$ et $C = \\{\\alpha ; \\beta ; \\gamma\\}$, de quel produit le couple $(\\gamma ; b)$ est-il un élément ?",
            "options": [
              "$A \\times C$",
              "$C \\times A$",
              "$A \\times B$",
              "$C \\times C$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le premier élément $\\gamma$ est dans $C$ et le second $b$ est dans $A$ : le couple est dans $C \\times A$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q1",
          "type": "mcq",
          "prompt": "Un élément du produit cartésien $A \\times B$ est toujours :",
          "options": [
            "Un nombre réel",
            "Un couple $(a ; b)$ avec $a \\in A$ et $b \\in B$",
            "Un sous-ensemble de $A$",
            "Une liste sans ordre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $A \\times B$ est l'ensemble des couples formés d'un élément de $A$ et d'un élément de $B$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q2",
          "type": "mcq",
          "prompt": "Les couples $(a ; b)$ et $(b ; a)$ sont-ils égaux en général ?",
          "options": [
            "Oui, toujours",
            "Oui, si $a = b$ seulement ils peuvent différer",
            "Oui, car un couple est un ensemble",
            "Non, l'ordre des éléments compte"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La leçon insiste : dans un couple, l'ordre est important, donc $(a ; b)$ et $(b ; a)$ sont différents en général."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q3",
          "type": "mcq",
          "prompt": "Pour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, que vaut $Card(A \\times B)$ ?",
          "options": [
            "$7$",
            "$34$",
            "$12$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On applique la propriété : $3 \\times 4 = 12$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q4",
          "type": "mcq",
          "prompt": "Le couple $(2 ; c)$ appartient-il au produit $A \\times B$ avec $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$ ?",
          "options": [
            "Oui, car $2 \\in A$ et $c \\in B$",
            "Non, car $2$ est un nombre",
            "Non, car $c$ n'est pas dans $A$",
            "Oui, seulement si on échange les ensembles"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un couple de $A \\times B$ prend son premier élément dans $A$ et son second dans $B$ : c'est le cas de $(2 ; c)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q5",
          "type": "mcq",
          "prompt": "Avec $A = \\{a ; b\\}$ et $B = \\{1 ; 2\\}$, de quel produit le couple $(a ; 1)$ est-il un élément ?",
          "options": [
            "$B \\times A$",
            "$A \\times A$",
            "$B \\times B$",
            "$A \\times B$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le premier élément $a$ est dans $A$ et le second $1$ est dans $B$ : le couple est dans $A \\times B$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p02_q6",
          "type": "mcq",
          "prompt": "Avec $A = \\{a ; b\\}$ et $C = \\{\\alpha ; \\beta ; \\gamma\\}$, de quel produit le couple $(\\gamma ; b)$ est-il un élément ?",
          "options": [
            "$A \\times C$",
            "$C \\times A$",
            "$A \\times B$",
            "$C \\times C$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le premier élément $\\gamma$ est dans $C$ et le second $b$ est dans $A$ : le couple est dans $C \\times A$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p03",
      "order": 3,
      "title": "p-listes d'un ensemble fini",
      "summary": "Définir une $p$-liste et calculer le nombre de $p$-listes d'un ensemble à $n$ éléments.",
      "conceptExplanation": "Étant donné un ensemble $E$ et un nombre entier naturel $p$ non nul, on désigne par $E^p$ le produit cartésien de $p$ ensembles tous égaux à $E$. On appelle $p$-liste ou $p$-uplet de $E$ tout élément de l'ensemble $E^p$.\nPropriété : le nombre de $p$-listes d'un ensemble à $n$ éléments est $n^p$.\nExemple : si $Card(E) = 6$, alors $Card(E^3) = 6^3 = 216$. De même, on peut former $216$ nombres de trois chiffres avec les éléments de $A = \\{2 ; 3 ; 5 ; 7 ; 8 ; 9\\}$.",
      "keyRule": "Dans une $p$-liste, l'ordre compte et les répétitions sont permises : le compte est $n^p$.",
      "formulas": [
        {
          "name": "Nombre de p-listes",
          "formula": "n^p",
          "note": "Nombre de $p$-listes d'un ensemble à $n$ éléments."
        }
      ],
      "workedExample": {
        "title": "Des nombres de trois chiffres (exercice de fixation 2)",
        "statement": "Calcule le nombre de nombres à trois chiffres que l'on peut former avec les éléments de l'ensemble $A = \\{2 ; 3 ; 5 ; 7 ; 8 ; 9\\}$.",
        "methodSteps": [
          "Un tel nombre, comme $357$, est un élément du produit cartésien $A \\times A \\times A = A^3$.",
          "L'ensemble $A$ a $6$ éléments.",
          "Le nombre cherché est $Card(A^3) = 6^3 = 216$."
        ],
        "conclusion": "On peut former $216$ nombres de trois chiffres."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est une p-liste",
          "stepTheme": "Ce qu'est une p-liste",
          "stepBadge": "Ce qu'est une p-liste",
          "paragraphText": "• Définitions : pour un ensemble $E$ et un entier naturel $p$ non nul, $E^p$ désigne le produit cartésien de $p$ ensembles tous égaux à $E$.\nOn appelle $p$-liste, ou $p$-uplet, de $E$ tout élément de $E^p$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on un élément de $E^p$ ?",
            "options": [
              "Une $p$-liste ou un $p$-uplet",
              "Une combinaison",
              "Un arrangement",
              "Un complémentaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, tout élément de $E^p$ est une $p$-liste, ou $p$-uplet, de $E$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de p-listes",
          "stepTheme": "Le nombre de p-listes",
          "stepBadge": "Le nombre de p-listes",
          "paragraphText": "• Propriété : le nombre de $p$-listes d'un ensemble à $n$ éléments est $n^p$.\nChaque position de la liste offre $n$ choix, et les répétitions sont permises.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q2",
            "type": "mcq",
            "prompt": "Combien un ensemble à $n$ éléments possède-t-il de $p$-listes ?",
            "options": [
              "$n \\times p$",
              "$n + p$",
              "$n^p$",
              "$p^n$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété de la leçon donne $n^p$ listes : $n$ choix à chacune des $p$ positions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Compter les listes d'un ensemble à 6 éléments",
          "stepTheme": "Compter les listes d'un ensemble à 6 éléments",
          "stepBadge": "Compter les listes d'un ensemble à 6 éléments",
          "paragraphText": "• Exercice de fixation 1 : pour un ensemble $E$ avec $Card(E) = 6$, le cardinal de $E^3$ se calcule comme un produit de trois cardinaux égaux.\nOn obtient $6 \\times 6 \\times 6$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q3",
            "type": "mcq",
            "prompt": "Si $Card(E) = 6$, que vaut $Card(E^3)$ ?",
            "options": [
              "$18$",
              "$216$",
              "$36$",
              "$720$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $6^3 = 216$ : il y a $216$ listes de $3$ éléments."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Former des nombres de trois chiffres",
          "stepTheme": "Former des nombres de trois chiffres",
          "stepBadge": "Former des nombres de trois chiffres",
          "paragraphText": "• Exercice de fixation 2 : un nombre de trois chiffres formé avec les éléments de $A = \\{2 ; 3 ; 5 ; 7 ; 8 ; 9\\}$ est un élément de $A^3$, comme $357$.\nLe nombre de ces nombres est donc $Card(A^3)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q4",
            "type": "mcq",
            "prompt": "Combien de nombres de trois chiffres peut-on former avec les éléments de $A = \\{2 ; 3 ; 5 ; 7 ; 8 ; 9\\}$ ?",
            "options": [
              "$120$",
              "$20$",
              "$18$",
              "$216$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ce sont les $3$-listes de $A$, qui a $6$ éléments : $6^3 = 216$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Les répétitions sont permises dans une liste",
          "stepTheme": "Les répétitions sont permises dans une liste",
          "stepBadge": "Les répétitions sont permises dans une liste",
          "paragraphText": "• Piège des exercices : dans une $p$-liste, un même élément peut apparaître plusieurs fois.\nAinsi, avec $A = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5\\}$, le triplet $(4 ; 4 ; 0)$ est bien une $3$-liste de $A$, alors que $(1 ; 0 ; 6)$ n'en est pas une car $6 \\notin A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q5",
            "type": "mcq",
            "prompt": "Avec $A = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5\\}$, lequel de ces triplets est une $3$-liste de $A$ ?",
            "options": [
              "$(1 ; 0 ; 6)$",
              "$(3 ; 9 ; 2)$",
              "$(4 ; 4 ; 0)$",
              "$(8 ; 3 ; 1)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Tous ses éléments sont dans $A$, répétition permise : $(4 ; 4 ; 0)$ est une $3$-liste de $A$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une 2-liste est un couple",
          "stepTheme": "Une 2-liste est un couple",
          "stepBadge": "Une 2-liste est un couple",
          "paragraphText": "• Une $2$-liste d'un ensemble est un couple de ses éléments, avec répétition possible.\nExemple des exercices : avec $A = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5\\}$, $(2 ; 5)$ est une $2$-liste de $A$, et $(0 ; 0 ; 0 ; 0 ; 0)$ est une $5$-liste de $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q6",
            "type": "mcq",
            "prompt": "Avec $A = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5\\}$, laquelle de ces propositions est une $5$-liste de $A$ ?",
            "options": [
              "$(0 ; 0 ; 0 ; 0 ; 0)$",
              "$(9 ; 2 ; 2 ; 3 ; 5)$",
              "$(0 ; 1 ; 1 ; 6 ; 4)$",
              "$(1 ; 2 ; 3 ; 4)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ses cinq éléments sont tous dans $A$ : c'est une $5$-liste, les répétitions étant permises."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on un élément de $E^p$ ?",
          "options": [
            "Une $p$-liste ou un $p$-uplet",
            "Une combinaison",
            "Un arrangement",
            "Un complémentaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, tout élément de $E^p$ est une $p$-liste, ou $p$-uplet, de $E$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q2",
          "type": "mcq",
          "prompt": "Combien un ensemble à $n$ éléments possède-t-il de $p$-listes ?",
          "options": [
            "$n \\times p$",
            "$n + p$",
            "$n^p$",
            "$p^n$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété de la leçon donne $n^p$ listes : $n$ choix à chacune des $p$ positions."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q3",
          "type": "mcq",
          "prompt": "Si $Card(E) = 6$, que vaut $Card(E^3)$ ?",
          "options": [
            "$18$",
            "$216$",
            "$36$",
            "$720$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $6^3 = 216$ : il y a $216$ listes de $3$ éléments."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q4",
          "type": "mcq",
          "prompt": "Combien de nombres de trois chiffres peut-on former avec les éléments de $A = \\{2 ; 3 ; 5 ; 7 ; 8 ; 9\\}$ ?",
          "options": [
            "$120$",
            "$20$",
            "$18$",
            "$216$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ce sont les $3$-listes de $A$, qui a $6$ éléments : $6^3 = 216$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q5",
          "type": "mcq",
          "prompt": "Avec $A = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5\\}$, lequel de ces triplets est une $3$-liste de $A$ ?",
          "options": [
            "$(1 ; 0 ; 6)$",
            "$(3 ; 9 ; 2)$",
            "$(4 ; 4 ; 0)$",
            "$(8 ; 3 ; 1)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Tous ses éléments sont dans $A$, répétition permise : $(4 ; 4 ; 0)$ est une $3$-liste de $A$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p03_q6",
          "type": "mcq",
          "prompt": "Avec $A = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5\\}$, laquelle de ces propositions est une $5$-liste de $A$ ?",
          "options": [
            "$(0 ; 0 ; 0 ; 0 ; 0)$",
            "$(9 ; 2 ; 2 ; 3 ; 5)$",
            "$(0 ; 1 ; 1 ; 6 ; 4)$",
            "$(1 ; 2 ; 3 ; 4)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ses cinq éléments sont tous dans $A$ : c'est une $5$-liste, les répétitions étant permises."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p04",
      "order": 4,
      "title": "Arrangements",
      "summary": "Définir un arrangement et calculer le nombre d'arrangements de $p$ éléments parmi $n$.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un nombre entier naturel tel que $p \\leq n$. On appelle arrangement de $p$ éléments de $E$ tout $p$-uplet de $E$ dont les éléments sont deux à deux distincts.\nExemple : pour $E = \\{0 ; 1 ; 3 ; 4\\}$, $(0 ; 3)$ et $(0 ; 4 ; 1 ; 3)$ sont des arrangements, mais $(1 ; 4 ; 3 ; 1)$ n'en est pas un car $1$ se répète.\nPropriété : le nombre d'arrangements de $p$ éléments de $E$ est $n \\times (n - 1) \\times (n - 2) \\times \\ldots \\times (n - p + 1)$. On le note $A_n^p$.",
      "keyRule": "Arrangement : ordre important, éléments distincts, produit de $p$ facteurs qui descendent depuis $n$.",
      "formulas": [
        {
          "name": "Nombre d'arrangements",
          "formula": "A_n^p = n \\times (n - 1) \\times \\ldots \\times (n - p + 1)",
          "note": "Produit de $p$ facteurs, pour $p \\leq n$."
        }
      ],
      "workedExample": {
        "title": "Des arrangements à trois éléments (exercice de fixation)",
        "statement": "On donne $A = \\{a ; 2 ; b ; e ; f ; 5\\}$. Calcule le nombre d'arrangements à $3$ éléments de $A$.",
        "methodSteps": [
          "L'ensemble $A$ a $6$ éléments et on en choisit $3$, distincts et ordonnés.",
          "On applique la formule : $A_6^3 = 6 \\times 5 \\times 4$.",
          "Le produit vaut $120$."
        ],
        "conclusion": "Il y a $120$ arrangements à $3$ éléments de $A$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est un arrangement",
          "stepTheme": "Ce qu'est un arrangement",
          "stepBadge": "Ce qu'est un arrangement",
          "paragraphText": "• Définition : soit $E$ un ensemble à $n$ éléments et $p$ un entier naturel tel que $p \\leq n$ ; un arrangement de $p$ éléments de $E$ est un $p$-uplet de $E$ dont les éléments sont deux à deux distincts.\nExemple : pour $E = \\{0 ; 1 ; 3 ; 4\\}$, $(0 ; 3)$ est un arrangement de deux éléments de $E$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qui distingue un arrangement d'une simple $p$-liste ?",
            "options": [
              "L'ordre ne compte pas",
              "Les répétitions sont obligatoires",
              "On a toujours $p = n$",
              "Les éléments sont deux à deux distincts"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un arrangement est un $p$-uplet dont les éléments sont deux à deux distincts : aucune répétition."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Une répétition interdit l'arrangement",
          "stepTheme": "Une répétition interdit l'arrangement",
          "stepBadge": "Une répétition interdit l'arrangement",
          "paragraphText": "• Piège de la leçon : $(1 ; 4 ; 3 ; 1)$ n'est pas un arrangement de $4$ éléments de $E = \\{0 ; 1 ; 3 ; 4\\}$, car $1$ se répète deux fois.\nEn revanche, $(0 ; 4 ; 1 ; 3)$ est bien un arrangement de $4$ éléments de $E$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q2",
            "type": "mcq",
            "prompt": "Avec $E = \\{0 ; 1 ; 3 ; 4\\}$, lequel de ces uplets est un arrangement de $4$ éléments de $E$ ?",
            "options": [
              "$(1 ; 4 ; 3 ; 1)$",
              "$(0 ; 4 ; 1 ; 3)$",
              "$(0 ; 1 ; 1 ; 3)$",
              "$(0 ; 0 ; 1 ; 3)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ses quatre éléments sont deux à deux distincts : c'est un arrangement ; les autres répètent un élément."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le nombre d'arrangements",
          "stepTheme": "Le nombre d'arrangements",
          "stepBadge": "Le nombre d'arrangements",
          "paragraphText": "• Propriété : le nombre d'arrangements de $p$ éléments d'un ensemble à $n$ éléments est $n \\times (n - 1) \\times (n - 2) \\times \\ldots \\times (n - p + 1)$.\nOn le note $A_n^p$ et on lit « Arrangement de $p$ dans $n$ ».",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q3",
            "type": "mcq",
            "prompt": "Comment note-t-on le nombre d'arrangements de $p$ éléments dans un ensemble à $n$ éléments ?",
            "options": [
              "$A_n^p$",
              "$C_n^p$",
              "$n^p$",
              "$p!$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon note ce nombre $A_n^p$, lu « Arrangement de $p$ dans $n$ »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer un nombre d'arrangements",
          "stepTheme": "Calculer un nombre d'arrangements",
          "stepBadge": "Calculer un nombre d'arrangements",
          "paragraphText": "• Exercice de fixation : pour $A = \\{a ; 2 ; b ; e ; f ; 5\\}$, qui a $6$ éléments, le nombre d'arrangements à $3$ éléments se calcule comme un produit de trois facteurs décroissants.\nOn part de $6$, puis $5$, puis $4$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut le nombre d'arrangements à $3$ éléments de l'ensemble $A = \\{a ; 2 ; b ; e ; f ; 5\\}$ ?",
            "options": [
              "$20$",
              "$216$",
              "$120$",
              "$18$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $A_6^3 = 6 \\times 5 \\times 4 = 120$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La condition sur p et n",
          "stepTheme": "La condition sur p et n",
          "stepBadge": "La condition sur p et n",
          "paragraphText": "• Un arrangement de $p$ éléments suppose $p \\leq n$ : on ne peut pas choisir $p$ éléments distincts dans un ensemble qui en contient moins.\nC'est une différence avec les $p$-listes, où les répétitions rendaient tout $p$ possible.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q5",
            "type": "mcq",
            "prompt": "Peut-on former un arrangement de $5$ éléments dans un ensemble à $4$ éléments ?",
            "options": [
              "Oui, avec des répétitions",
              "Non, car il faut $p \\leq n$",
              "Oui, si l'ordre compte",
              "Oui, en utilisant le complémentaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un arrangement exige des éléments deux à deux distincts : il faut au moins $p$ éléments disponibles."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire un arrangement de deux éléments",
          "stepTheme": "Lire un arrangement de deux éléments",
          "stepBadge": "Lire un arrangement de deux éléments",
          "paragraphText": "• Exemple de la leçon : dans $E = \\{0 ; 1 ; 3 ; 4\\}$, $(0 ; 3)$ est un arrangement de deux éléments.\nL'ordre compte toujours : $(3 ; 0)$ est un autre arrangement de deux éléments.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q6",
            "type": "mcq",
            "prompt": "Avec $E = \\{0 ; 1 ; 3 ; 4\\}$, combien y a-t-il d'arrangements de $2$ éléments de $E$ ?",
            "options": [
              "$8$",
              "$16$",
              "$6$",
              "$12$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $A_4^2 = 4 \\times 3 = 12$ arrangements de deux éléments."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qui distingue un arrangement d'une simple $p$-liste ?",
          "options": [
            "L'ordre ne compte pas",
            "Les répétitions sont obligatoires",
            "On a toujours $p = n$",
            "Les éléments sont deux à deux distincts"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un arrangement est un $p$-uplet dont les éléments sont deux à deux distincts : aucune répétition."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q2",
          "type": "mcq",
          "prompt": "Avec $E = \\{0 ; 1 ; 3 ; 4\\}$, lequel de ces uplets est un arrangement de $4$ éléments de $E$ ?",
          "options": [
            "$(1 ; 4 ; 3 ; 1)$",
            "$(0 ; 4 ; 1 ; 3)$",
            "$(0 ; 1 ; 1 ; 3)$",
            "$(0 ; 0 ; 1 ; 3)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ses quatre éléments sont deux à deux distincts : c'est un arrangement ; les autres répètent un élément."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q3",
          "type": "mcq",
          "prompt": "Comment note-t-on le nombre d'arrangements de $p$ éléments dans un ensemble à $n$ éléments ?",
          "options": [
            "$A_n^p$",
            "$C_n^p$",
            "$n^p$",
            "$p!$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon note ce nombre $A_n^p$, lu « Arrangement de $p$ dans $n$ »."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut le nombre d'arrangements à $3$ éléments de l'ensemble $A = \\{a ; 2 ; b ; e ; f ; 5\\}$ ?",
          "options": [
            "$20$",
            "$216$",
            "$120$",
            "$18$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $A_6^3 = 6 \\times 5 \\times 4 = 120$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q5",
          "type": "mcq",
          "prompt": "Peut-on former un arrangement de $5$ éléments dans un ensemble à $4$ éléments ?",
          "options": [
            "Oui, avec des répétitions",
            "Non, car il faut $p \\leq n$",
            "Oui, si l'ordre compte",
            "Oui, en utilisant le complémentaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un arrangement exige des éléments deux à deux distincts : il faut au moins $p$ éléments disponibles."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p04_q6",
          "type": "mcq",
          "prompt": "Avec $E = \\{0 ; 1 ; 3 ; 4\\}$, combien y a-t-il d'arrangements de $2$ éléments de $E$ ?",
          "options": [
            "$8$",
            "$16$",
            "$6$",
            "$12$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $A_4^2 = 4 \\times 3 = 12$ arrangements de deux éléments."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p05",
      "order": 5,
      "title": "Factorielle et permutations",
      "summary": "Définir la factorielle, l'utiliser pour les arrangements, et compter les permutations.",
      "conceptExplanation": "Soit $n$ un entier naturel non nul : on appelle factorielle $n$ le produit $n \\times (n - 1) \\times (n - 2) \\times \\ldots \\times 3 \\times 2 \\times 1$, noté $n!$. On admet que $0! = 1$. Par exemple, $6! = 720$ et $\\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336$.\nPropriété : pour $p \\leq n$, $A_n^p = \\frac{n!}{(n - p)!}$.\nUne permutation des $n$ éléments d'un ensemble $E$ est un arrangement des $n$ éléments de $E$ ; le nombre de permutations de $E$ est $A_n^n = n!$. Pour un ensemble à $4$ éléments, il vaut $24$.",
      "keyRule": "Une permutation range tous les éléments : leur nombre est $n!$, sans exception.",
      "formulas": [
        {
          "name": "Arrangements et factorielles",
          "formula": "A_n^p = \\frac{n!}{(n - p)!}",
          "note": "Pour $p \\leq n$."
        },
        {
          "name": "Nombre de permutations",
          "formula": "A_n^n = n!",
          "note": "Nombre de permutations d'un ensemble à $n$ éléments."
        }
      ],
      "workedExample": {
        "title": "Deux arrangements par les factorielles (exercice de fixation)",
        "statement": "Calcule $A_5^2$ et $A_6^3$.",
        "methodSteps": [
          "Pour $A_5^2$ : $\\frac{5!}{3!} = 5 \\times 4 = 20$.",
          "Pour $A_6^3$ : $\\frac{6!}{3!} = 6 \\times 5 \\times 4 = 120$."
        ],
        "conclusion": "$A_5^2 = 20$ et $A_6^3 = 120$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La factorielle d'un entier",
          "stepTheme": "La factorielle d'un entier",
          "stepBadge": "La factorielle d'un entier",
          "paragraphText": "• Définition : pour un entier naturel non nul $n$, on appelle factorielle $n$ le produit $n \\times (n - 1) \\times (n - 2) \\times \\ldots \\times 3 \\times 2 \\times 1$ ; on le note $n!$.\nOn admet que $0! = 1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q1",
            "type": "mcq",
            "prompt": "Que vaut $6!$ ?",
            "options": [
              "$120$",
              "$36$",
              "$720$",
              "$60$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Simplifier un quotient de factorielles",
          "stepTheme": "Simplifier un quotient de factorielles",
          "stepBadge": "Simplifier un quotient de factorielles",
          "paragraphText": "• Exemple de la leçon : le quotient $\\frac{8!}{5!}$ se simplifie en ne gardant que les facteurs au-dessus de $5$.\nIl reste le produit $8 \\times 7 \\times 6$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut le quotient $\\frac{8!}{5!}$ ?",
            "options": [
              "$336$",
              "$40$",
              "$56$",
              "$6720$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Après simplification par $5!$, il reste $8 \\times 7 \\times 6 = 336$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les arrangements avec les factorielles",
          "stepTheme": "Les arrangements avec les factorielles",
          "stepBadge": "Les arrangements avec les factorielles",
          "paragraphText": "• Propriété : pour $p \\leq n$, on a $A_n^p = \\frac{n!}{(n - p)!}$.\nCette formule redonne le produit de $p$ facteurs décroissants de la définition des arrangements.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $A_5^2$ d'après la formule avec les factorielles ?",
            "options": [
              "$10$",
              "$25$",
              "$120$",
              "$20$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\frac{5!}{3!} = 5 \\times 4 = 20$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un second calcul d'arrangement",
          "stepTheme": "Un second calcul d'arrangement",
          "stepBadge": "Un second calcul d'arrangement",
          "paragraphText": "• Exercice de fixation : le nombre $A_6^3$ se calcule aussi avec les factorielles, en simplifiant par $3!$.\nOn retrouve le résultat déjà obtenu par le produit direct.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut $A_6^3$ ?",
            "options": [
              "$20$",
              "$120$",
              "$216$",
              "$720$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $\\frac{6!}{3!} = 6 \\times 5 \\times 4 = 120$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est une permutation",
          "stepTheme": "Ce qu'est une permutation",
          "stepBadge": "Ce qu'est une permutation",
          "paragraphText": "• Définition : une permutation des $n$ éléments d'un ensemble $E$ est un arrangement des $n$ éléments de $E$.\nLe nombre de permutations des $n$ éléments de $E$ est $A_n^n$, et on a $A_n^n = n!$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q5",
            "type": "mcq",
            "prompt": "Le nombre de permutations d'un ensemble à $n$ éléments est égal à :",
            "options": [
              "$n!$",
              "$n^2$",
              "$2n$",
              "$n \\times (n - 1)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une permutation est un arrangement de tous les éléments : leur nombre est $A_n^n = n!$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les permutations de quatre éléments",
          "stepTheme": "Les permutations de quatre éléments",
          "stepBadge": "Les permutations de quatre éléments",
          "paragraphText": "• Exemple de la leçon : pour $E = \\{1 ; 3 ; 0 ; 5\\}$, des permutations sont $(1 ; 3 ; 0 ; 5)$, $(3 ; 0 ; 5 ; 1)$ et $(0 ; 5 ; 1 ; 3)$.\nLeur nombre total est $4!$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q6",
            "type": "mcq",
            "prompt": "Combien l'ensemble $E = \\{1 ; 3 ; 0 ; 5\\}$ a-t-il de permutations ?",
            "options": [
              "$12$",
              "$256$",
              "$24$",
              "$120$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ permutations."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q1",
          "type": "mcq",
          "prompt": "Que vaut $6!$ ?",
          "options": [
            "$120$",
            "$36$",
            "$720$",
            "$60$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut le quotient $\\frac{8!}{5!}$ ?",
          "options": [
            "$336$",
            "$40$",
            "$56$",
            "$6720$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après simplification par $5!$, il reste $8 \\times 7 \\times 6 = 336$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $A_5^2$ d'après la formule avec les factorielles ?",
          "options": [
            "$10$",
            "$25$",
            "$120$",
            "$20$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\frac{5!}{3!} = 5 \\times 4 = 20$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut $A_6^3$ ?",
          "options": [
            "$20$",
            "$120$",
            "$216$",
            "$720$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $\\frac{6!}{3!} = 6 \\times 5 \\times 4 = 120$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q5",
          "type": "mcq",
          "prompt": "Le nombre de permutations d'un ensemble à $n$ éléments est égal à :",
          "options": [
            "$n!$",
            "$n^2$",
            "$2n$",
            "$n \\times (n - 1)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une permutation est un arrangement de tous les éléments : leur nombre est $A_n^n = n!$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p05_q6",
          "type": "mcq",
          "prompt": "Combien l'ensemble $E = \\{1 ; 3 ; 0 ; 5\\}$ a-t-il de permutations ?",
          "options": [
            "$12$",
            "$256$",
            "$24$",
            "$120$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ permutations."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p06",
      "order": 6,
      "title": "Combinaisons",
      "summary": "Définir une combinaison et calculer le nombre de combinaisons de $p$ éléments parmi $n$.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un nombre entier naturel tel que $p \\leq n$. Une combinaison de $p$ éléments de $E$ est un sous-ensemble de $E$ ayant $p$ éléments. Par exemple, pour $A = \\{1 ; 3 ; 0 ; 2\\}$, $\\{1 ; 0 ; 2\\}$ et $\\{3 ; 0 ; 2\\}$ sont des combinaisons de $3$ éléments.\nLe nombre de combinaisons de $p$ éléments de $E$ est $\\frac{A_n^p}{p!}$ ; on le note $C_n^p$. Propriété : $C_n^p = \\frac{n!}{p!(n - p)!}$. Remarques : $C_n^n = 1$, $C_n^1 = n$ et $C_n^0 = 1$.",
      "keyRule": "Combinaison égale sous-ensemble : dès que l'ordre ne compte pas, on divise l'arrangement par $p!$.",
      "formulas": [
        {
          "name": "Nombre de combinaisons",
          "formula": "C_n^p = \\frac{n!}{p!(n - p)!}",
          "note": "Aussi égal à $\\frac{A_n^p}{p!}$."
        }
      ],
      "workedExample": {
        "title": "Calculer $C_5^2$ (exercice de fixation)",
        "statement": "Calcule $C_5^2$.",
        "methodSteps": [
          "On applique la formule : $C_5^2 = \\frac{5!}{2! \\times 3!}$.",
          "On simplifie : $\\frac{5 \\times 4}{2 \\times 1}$.",
          "Le résultat est $10$."
        ],
        "conclusion": "$C_5^2 = 10$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu'est une combinaison",
          "stepTheme": "Ce qu'est une combinaison",
          "stepBadge": "Ce qu'est une combinaison",
          "paragraphText": "• Définition : soit $E$ un ensemble à $n$ éléments et $p \\leq n$ ; une combinaison de $p$ éléments de $E$ est un sous-ensemble de $E$ ayant $p$ éléments.\nExemple : pour $A = \\{1 ; 3 ; 0 ; 2\\}$, $\\{1 ; 0 ; 2\\}$ et $\\{3 ; 0 ; 2\\}$ sont deux combinaisons de $3$ éléments de $A$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q1",
            "type": "mcq",
            "prompt": "Une combinaison de $p$ éléments d'un ensemble $E$ est :",
            "options": [
              "Un uplet ordonné",
              "Un sous-ensemble de $E$ ayant $p$ éléments",
              "Une liste avec répétitions",
              "Le complémentaire d'une partie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, une combinaison est un sous-ensemble : l'ordre n'y compte pas."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de combinaisons",
          "stepTheme": "Le nombre de combinaisons",
          "stepBadge": "Le nombre de combinaisons",
          "paragraphText": "• Définition : le nombre de combinaisons de $p$ éléments d'un ensemble à $n$ éléments est $\\frac{A_n^p}{p!}$ ; on le note $C_n^p$.\nDiviser par $p!$ élimine les ordres différents d'un même sous-ensemble.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q2",
            "type": "mcq",
            "prompt": "Que vaut le nombre de combinaisons à $3$ éléments d'un ensemble à $5$ éléments ?",
            "options": [
              "$60$",
              "$20$",
              "$125$",
              "$10$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\frac{A_5^3}{3!} = \\frac{60}{6} = 10$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La formule avec les factorielles",
          "stepTheme": "La formule avec les factorielles",
          "stepBadge": "La formule avec les factorielles",
          "paragraphText": "• Propriété : $C_n^p = \\frac{A_n^p}{p!} = \\frac{n!}{p!(n - p)!}$.\nRemarques de la leçon : $C_n^n = 1$, $C_n^1 = n$ et $C_n^0 = 1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q3",
            "type": "mcq",
            "prompt": "Que vaut $C_5^2$ ?",
            "options": [
              "$20$",
              "$25$",
              "$10$",
              "$5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $\\frac{5!}{2! \\times 3!} = \\frac{5 \\times 4}{2} = 10$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "L'ordre ne compte pas",
          "stepTheme": "L'ordre ne compte pas",
          "stepBadge": "L'ordre ne compte pas",
          "paragraphText": "• Piège : $\\{1 ; 0 ; 2\\}$ et $\\{0 ; 1 ; 2\\}$ sont une seule et même combinaison, car ce sont les mêmes éléments.\nC'est la différence essentielle avec un arrangement, où l'ordre crée des cas différents.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q4",
            "type": "mcq",
            "prompt": "Les écritures $\\{1 ; 0 ; 2\\}$ et $\\{0 ; 1 ; 2\\}$ désignent-elles deux combinaisons différentes ?",
            "options": [
              "Non, c'est le même sous-ensemble",
              "Oui, l'ordre change tout",
              "Oui, car $0$ change de place",
              "Non, mais elles comptent double"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une combinaison est un sous-ensemble : changer l'ordre d'écriture ne change pas la combinaison."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Des équipes comme combinaisons",
          "stepTheme": "Des équipes comme combinaisons",
          "stepBadge": "Des équipes comme combinaisons",
          "paragraphText": "• Exercice de renforcement : former une équipe de $5$ élèves dans une classe de $36$ élèves est une combinaison de $5$ éléments dans un ensemble à $36$ éléments, car l'ordre des membres ne compte pas.\nLe nombre d'équipes est donc $C_{36}^5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q5",
            "type": "mcq",
            "prompt": "Que vaut le nombre d'équipes de $5$ élèves que l'on peut former dans une classe de $36$ élèves ?",
            "options": [
              "$45 239 040$",
              "$1 176$",
              "$60 466 176$",
              "$376 992$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $C_{36}^5 = \\frac{36 \\times 35 \\times 34 \\times 33 \\times 32}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 376 992$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Composer une équipe mixte",
          "stepTheme": "Composer une équipe mixte",
          "stepBadge": "Composer une équipe mixte",
          "paragraphText": "• Suite de l'exercice : une équipe de $3$ filles parmi $18$ et de $2$ garçons parmi $18$ combine deux choix indépendants.\nLe nombre d'équipes est le produit $C_{18}^3 \\times C_{18}^2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q6",
            "type": "mcq",
            "prompt": "Que vaut le nombre d'équipes de $3$ filles et $2$ garçons choisies parmi $18$ filles et $18$ garçons ?",
            "options": [
              "$969$",
              "$124 848$",
              "$153$",
              "$816$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $C_{18}^3 \\times C_{18}^2 = 816 \\times 153 = 124 848$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q1",
          "type": "mcq",
          "prompt": "Une combinaison de $p$ éléments d'un ensemble $E$ est :",
          "options": [
            "Un uplet ordonné",
            "Un sous-ensemble de $E$ ayant $p$ éléments",
            "Une liste avec répétitions",
            "Le complémentaire d'une partie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, une combinaison est un sous-ensemble : l'ordre n'y compte pas."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q2",
          "type": "mcq",
          "prompt": "Que vaut le nombre de combinaisons à $3$ éléments d'un ensemble à $5$ éléments ?",
          "options": [
            "$60$",
            "$20$",
            "$125$",
            "$10$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\frac{A_5^3}{3!} = \\frac{60}{6} = 10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q3",
          "type": "mcq",
          "prompt": "Que vaut $C_5^2$ ?",
          "options": [
            "$20$",
            "$25$",
            "$10$",
            "$5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $\\frac{5!}{2! \\times 3!} = \\frac{5 \\times 4}{2} = 10$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q4",
          "type": "mcq",
          "prompt": "Les écritures $\\{1 ; 0 ; 2\\}$ et $\\{0 ; 1 ; 2\\}$ désignent-elles deux combinaisons différentes ?",
          "options": [
            "Non, c'est le même sous-ensemble",
            "Oui, l'ordre change tout",
            "Oui, car $0$ change de place",
            "Non, mais elles comptent double"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une combinaison est un sous-ensemble : changer l'ordre d'écriture ne change pas la combinaison."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q5",
          "type": "mcq",
          "prompt": "Que vaut le nombre d'équipes de $5$ élèves que l'on peut former dans une classe de $36$ élèves ?",
          "options": [
            "$45 239 040$",
            "$1 176$",
            "$60 466 176$",
            "$376 992$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $C_{36}^5 = \\frac{36 \\times 35 \\times 34 \\times 33 \\times 32}{5 \\times 4 \\times 3 \\times 2 \\times 1} = 376 992$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p06_q6",
          "type": "mcq",
          "prompt": "Que vaut le nombre d'équipes de $3$ filles et $2$ garçons choisies parmi $18$ filles et $18$ garçons ?",
          "options": [
            "$969$",
            "$124 848$",
            "$153$",
            "$816$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $C_{18}^3 \\times C_{18}^2 = 816 \\times 153 = 124 848$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l02_denombrement_p07",
      "order": 7,
      "title": "Modélisation : choisir le bon outil",
      "summary": "Associer chaque type de tirage à son outil de dénombrement : combinaison, $p$-uplet ou arrangement.",
      "conceptExplanation": "Pour choisir entre $p$-uplet, arrangement, permutation ou combinaison, on peut ramener le problème au modèle du tirage de boules : une urne contient $n$ boules et on tire $p$ boules, avec $p \\leq n$.\nPour un tirage simultané de $p$ boules, l'outil est la combinaison et le nombre de tirages est $C_n^p$. Pour un tirage successif avec remise, l'outil est le $p$-uplet et le nombre de tirages est $n^p$. Pour un tirage successif sans remise, l'outil est l'arrangement et le nombre de tirages est $A_n^p$.\nApplication : faire asseoir $4$ personnalités sur $4$ fauteuils donne $4! = 24$ manières, ce qui tranche la discussion de la situation d'apprentissage.",
      "keyRule": "Trois questions pour choisir : l'ordre compte-t-il ? Les répétitions sont-elles possibles ? Tire-t-on tout d'un coup ?",
      "formulas": [
        {
          "name": "Tirage simultané",
          "formula": "C_n^p",
          "note": "L'ordre ne compte pas."
        },
        {
          "name": "Tirage successif avec remise",
          "formula": "n^p",
          "note": "Outil : le $p$-uplet."
        },
        {
          "name": "Tirage successif sans remise",
          "formula": "A_n^p",
          "note": "Outil : l'arrangement."
        }
      ],
      "workedExample": {
        "title": "Les quatre fauteuils de la cérémonie (situation complexe)",
        "statement": "Quatre membres d'une délégation doivent s'asseoir sur quatre fauteuils. Une hôtesse affirme qu'il y a $24$ possibilités : a-t-elle raison ?",
        "methodSteps": [
          "Une manière de les faire asseoir est un arrangement des $4$ personnalités, donc une permutation de $4$ éléments.",
          "Le nombre de manières est $4! = 4 \\times 3 \\times 2 \\times 1$.",
          "Ce nombre vaut $24$."
        ],
        "conclusion": "Il y a bien $24$ manières : l'hôtesse qui affirmait $24$ possibilités a raison."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Trois modèles de tirage",
          "stepTheme": "Trois modèles de tirage",
          "stepBadge": "Trois modèles de tirage",
          "paragraphText": "• Modélisation de la leçon : une urne contient $n$ boules et on tire $p$ boules ; le tirage peut être simultané, ou successif avec remise, ou successif sans remise.\nChaque modèle utilise un outil de dénombrement différent.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q1",
            "type": "mcq",
            "prompt": "Dans le modèle de la leçon, quels sont les trois types de tirage de boules distingués ?",
            "options": [
              "Simultané, successif avec remise, successif sans remise",
              "Simple, double, triple",
              "Ordonné, libre, complet",
              "Avec ordre, sans ordre, mixte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La leçon distingue le tirage simultané et les tirages successifs, avec ou sans remise."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le tirage simultané",
          "stepTheme": "Le tirage simultané",
          "stepBadge": "Le tirage simultané",
          "paragraphText": "• Pour un tirage simultané de $p$ boules, l'outil est la combinaison : le nombre de tirages est $C_n^p$.\nL'ordre d'arrivée des boules n'a en effet aucune importance.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q2",
            "type": "mcq",
            "prompt": "Quel outil utilise-t-on pour un tirage simultané de $p$ boules parmi $n$ ?",
            "options": [
              "Le $p$-uplet",
              "L'arrangement",
              "La combinaison",
              "La permutation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un tirage simultané forme un sous-ensemble de boules : on le compte par une combinaison."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le tirage successif avec remise",
          "stepTheme": "Le tirage successif avec remise",
          "stepBadge": "Le tirage successif avec remise",
          "paragraphText": "• Pour un tirage successif avec remise, l'outil est le $p$-uplet : le nombre de tirages est $n^p$.\nLa boule tirée est remise dans l'urne, donc les répétitions sont possibles et l'ordre compte.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q3",
            "type": "mcq",
            "prompt": "Quel est le nombre de tirages successifs avec remise de $p$ boules parmi $n$ ?",
            "options": [
              "$C_n^p$",
              "$n^p$",
              "$A_n^p$",
              "$n!$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec remise, chaque tirage a $n$ possibilités : le total est $n^p$, celui des $p$-uplets."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le tirage successif sans remise",
          "stepTheme": "Le tirage successif sans remise",
          "stepBadge": "Le tirage successif sans remise",
          "paragraphText": "• Pour un tirage successif sans remise, l'outil est l'arrangement : le nombre de tirages est $A_n^p$.\nSans remise, une même boule ne peut pas revenir, et l'ordre des tirages compte.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q4",
            "type": "mcq",
            "prompt": "Quel outil utilise-t-on pour un tirage successif sans remise de $p$ boules parmi $n$ ?",
            "options": [
              "La combinaison",
              "Le $p$-uplet",
              "La factorielle",
              "L'arrangement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sans remise et avec ordre, les tirages sont des arrangements : leur nombre est $A_n^p$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La situation des hôtesses",
          "stepTheme": "La situation des hôtesses",
          "stepBadge": "La situation des hôtesses",
          "paragraphText": "• Situation complexe de la leçon : faire asseoir $4$ personnalités distinctes sur $4$ fauteuils est une permutation des $4$ personnalités.\nLe nombre de manières est donc $4!$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q5",
            "type": "mcq",
            "prompt": "De combien de manières peut-on faire asseoir $4$ personnalités distinctes sur $4$ fauteuils ?",
            "options": [
              "$16$",
              "$256$",
              "$24$",
              "$12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est le nombre de permutations de $4$ éléments : $4! = 24$ manières."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Des tirages avec remise dans une urne",
          "stepTheme": "Des tirages avec remise dans une urne",
          "stepBadge": "Des tirages avec remise dans une urne",
          "paragraphText": "• Exercice de renforcement : une urne contient $10$ boules au total et on tire successivement $3$ boules avec remise.\nLe nombre de tirages possibles est celui des $3$-uplets d'un ensemble à $10$ éléments.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q6",
            "type": "mcq",
            "prompt": "Une urne contient $10$ boules ; on tire successivement $3$ boules avec remise. Combien de tirages sont possibles ?",
            "options": [
              "$1000$",
              "$720$",
              "$120$",
              "$30$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tirage successif avec remise : on compte les $3$-uplets, soit $10^3 = 1000$ tirages."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q1",
          "type": "mcq",
          "prompt": "Dans le modèle de la leçon, quels sont les trois types de tirage de boules distingués ?",
          "options": [
            "Simultané, successif avec remise, successif sans remise",
            "Simple, double, triple",
            "Ordonné, libre, complet",
            "Avec ordre, sans ordre, mixte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La leçon distingue le tirage simultané et les tirages successifs, avec ou sans remise."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q2",
          "type": "mcq",
          "prompt": "Quel outil utilise-t-on pour un tirage simultané de $p$ boules parmi $n$ ?",
          "options": [
            "Le $p$-uplet",
            "L'arrangement",
            "La combinaison",
            "La permutation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un tirage simultané forme un sous-ensemble de boules : on le compte par une combinaison."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q3",
          "type": "mcq",
          "prompt": "Quel est le nombre de tirages successifs avec remise de $p$ boules parmi $n$ ?",
          "options": [
            "$C_n^p$",
            "$n^p$",
            "$A_n^p$",
            "$n!$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec remise, chaque tirage a $n$ possibilités : le total est $n^p$, celui des $p$-uplets."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q4",
          "type": "mcq",
          "prompt": "Quel outil utilise-t-on pour un tirage successif sans remise de $p$ boules parmi $n$ ?",
          "options": [
            "La combinaison",
            "Le $p$-uplet",
            "La factorielle",
            "L'arrangement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sans remise et avec ordre, les tirages sont des arrangements : leur nombre est $A_n^p$."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q5",
          "type": "mcq",
          "prompt": "De combien de manières peut-on faire asseoir $4$ personnalités distinctes sur $4$ fauteuils ?",
          "options": [
            "$16$",
            "$256$",
            "$24$",
            "$12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est le nombre de permutations de $4$ éléments : $4! = 24$ manières."
        },
        {
          "id": "premiere_a1_maths_numerique_l02_denombrement_p07_q6",
          "type": "mcq",
          "prompt": "Une urne contient $10$ boules ; on tire successivement $3$ boules avec remise. Combien de tirages sont possibles ?",
          "options": [
            "$1000$",
            "$720$",
            "$120$",
            "$30$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tirage successif avec remise : on compte les $3$-uplets, soit $10^3 = 1000$ tirages."
        }
      ]
    }
  ]
};
