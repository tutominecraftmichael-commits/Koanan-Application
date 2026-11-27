import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Dénombrement » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Dénombrement » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L02_DENOMBREMENT: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l02_denombrement",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 2,
  "title": "Leçon 2 : Dénombrement",
  "summary": "La leçon présente les outils du dénombrement : cardinal d’un ensemble fini, réunion, intersection, complémentaire, produit cartésien, $p$-uplets, arrangements, permutations, combinaisons, types de tirages et binôme de Newton.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Dénombrement » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p01",
      "order": 1,
      "title": "Cardinal, réunion et intersection",
      "summary": "Définir le cardinal d’un ensemble fini, la réunion et l’intersection de deux ensembles, et calculer le cardinal d’une réunion.",
      "conceptExplanation": "On appelle cardinal d’un ensemble fini $E$ le nombre d’éléments de $E$ ; on le note $Card(E)$. Exemple : pour $A = \\{0 ; 1 ; 2 ; 3\\}$, $Card(A) = 4$.\nLa réunion de $A$ et $B$, notée $A \\cup B$, est l’ensemble des éléments qui appartiennent à $A$ ou à $B$. L’intersection de $A$ et $B$, notée $A \\cap B$, est l’ensemble des éléments qui appartiennent à la fois à $A$ et à $B$. Exemple : pour $A = \\{3 ; h ; * ; 5\\}$ et $B = \\{8 ; * ; 1\\}$, $A \\cup B = \\{3 ; h ; * ; 5 ; 8 ; 1\\}$ et $A \\cap B = \\{*\\}$.\nPropriété : $Card(A \\cup B) = Card(A) + Card(B) - Card(A \\cap B)$.\nSituation de la leçon : sur $25$ élèves, $15$ jouent au handball, $10$ au basketball et $5$ pratiquent les deux sports ; le nombre d’élèves pratiquant au moins un sport est $15 + 10 - 5 = 20$, donc $5$ élèves ne pratiquent aucun sport.",
      "keyRule": "Pour une réunion, on additionne les cardinaux puis on retire l’intersection, comptée deux fois.",
      "formulas": [
        {
          "name": "Cardinal d’une réunion",
          "formula": "Card(A \\cup B) = Card(A) + Card(B) - Card(A \\cap B)",
          "note": "$A$ et $B$ sont deux ensembles finis."
        }
      ],
      "workedExample": {
        "title": "Le cardinal d’une réunion (exercice de fixation)",
        "statement": "On considère les ensembles $E$ et $F$ tels que $Card(E) = 30$, $Card(F) = 25$ et $Card(E \\cap F) = 15$. Détermine $Card(E \\cup F)$.",
        "methodSteps": [
          "On applique la propriété du cardinal d’une réunion.",
          "On remplace : $Card(E \\cup F) = 30 + 25 - 15$.",
          "On obtient $40$."
        ],
        "conclusion": "$Card(E \\cup F) = 40$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cardinal d’un ensemble fini",
          "stepTheme": "Le cardinal d’un ensemble fini",
          "stepBadge": "Le cardinal d’un ensemble fini",
          "paragraphText": "• Définition : on appelle cardinal d’un ensemble fini $E$ le nombre d’éléments de $E$ ; on le note $Card(E)$.\nExemple de la leçon : pour $A = \\{0 ; 1 ; 2 ; 3\\}$, on a $Card(A) = 4$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut $Card(A)$ pour $A = \\{0 ; 1 ; 2 ; 3\\}$ ?",
            "options": [
              "$3$",
              "$4$",
              "$0$",
              "$10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’ensemble $A$ contient quatre éléments : son cardinal est $4$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Réunion et intersection",
          "stepTheme": "Réunion et intersection",
          "stepBadge": "Réunion et intersection",
          "paragraphText": "• La réunion $A \\cup B$ regroupe les éléments qui appartiennent à $A$ ou à $B$ ; l’intersection $A \\cap B$ regroupe ceux qui appartiennent à la fois à $A$ et à $B$.\nExemple de la leçon : pour $A = \\{3 ; h ; * ; 5\\}$ et $B = \\{8 ; * ; 1\\}$, l’intersection est $\\{*\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p01_q2",
            "type": "mcq",
            "prompt": "Pour $A = \\{3 ; h ; * ; 5\\}$ et $B = \\{8 ; * ; 1\\}$, que vaut $A \\cap B$ ?",
            "options": [
              "$\\{3 ; 5\\}$",
              "$\\{8 ; 1\\}$",
              "$\\{*\\}$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le seul élément commun aux deux ensembles est $*$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cardinal d’une réunion",
          "stepTheme": "Le cardinal d’une réunion",
          "stepBadge": "Le cardinal d’une réunion",
          "paragraphText": "• Propriété : $Card(A \\cup B) = Card(A) + Card(B) - Card(A \\cap B)$.\nOn retire l’intersection car ses éléments sont comptés dans chacun des deux cardinaux.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p01_q3",
            "type": "mcq",
            "prompt": "Connaissant $Card(A)$, $Card(B)$ et $Card(A \\cap B)$, comment obtient-on $Card(A \\cup B)$ ?",
            "options": [
              "$Card(A) + Card(B) + Card(A \\cap B)$",
              "$Card(A) + Card(B) - Card(A \\cap B)$",
              "$Card(A) \\times Card(B)$",
              "$Card(A) - Card(B)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On additionne les deux cardinaux et on retire celui de l’intersection."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les élèves sportifs de la situation",
          "stepTheme": "Les élèves sportifs de la situation",
          "stepBadge": "Les élèves sportifs de la situation",
          "paragraphText": "• Situation de la leçon : sur $25$ élèves, $15$ jouent au handball, $10$ au basketball et $5$ pratiquent les deux sports.\nLe cardinal de la réunion vaut $15 + 10 - 5 = 20$ : vingt élèves pratiquent au moins un sport.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p01_q4",
            "type": "mcq",
            "prompt": "Dans la situation de la leçon, combien d’élèves pratiquent au moins un des deux sports ?",
            "options": [
              "$25$",
              "$20$",
              "$30$",
              "$15$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $15 + 10 - 5 = 20$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les élèves qui ne pratiquent aucun sport",
          "stepTheme": "Les élèves qui ne pratiquent aucun sport",
          "stepBadge": "Les élèves qui ne pratiquent aucun sport",
          "paragraphText": "• Suite de la situation : l’établissement compte $25$ élèves et $20$ pratiquent au moins un sport.\nLe nombre d’élèves ne pratiquant aucun sport est donc $25 - 20 = 5$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p01_q5",
            "type": "mcq",
            "prompt": "Combien d’élèves de la situation ne pratiquent aucun sport ?",
            "options": [
              "$0$",
              "$10$",
              "$5$",
              "$20$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On soustrait : $25 - 20 = 5$ élèves."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas compter l’intersection deux fois",
          "stepTheme": "Ne pas compter l’intersection deux fois",
          "stepBadge": "Ne pas compter l’intersection deux fois",
          "paragraphText": "• Piège : additionner $15$ et $10$ donne $25$, mais les $5$ élèves qui pratiquent les deux sports seraient comptés deux fois.\nC’est exactement pour cela que la formule retire $Card(A \\cap B)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi retire-t-on $Card(A \\cap B)$ dans le calcul de $Card(A \\cup B)$ ?",
            "options": [
              "Parce que l’intersection est toujours vide",
              "Parce que ses éléments sont comptés deux fois dans la somme des cardinaux",
              "Parce que la réunion ne contient pas l’intersection",
              "Pour obtenir un nombre plus petit"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les éléments communs sont comptés dans $Card(A)$ et dans $Card(B)$ : on les retire une fois."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut $Card(A)$ pour $A = \\{0 ; 1 ; 2 ; 3\\}$ ?",
          "options": [
            "$3$",
            "$4$",
            "$0$",
            "$10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’ensemble $A$ contient quatre éléments : son cardinal est $4$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p01_q2",
          "type": "mcq",
          "prompt": "Pour $A = \\{3 ; h ; * ; 5\\}$ et $B = \\{8 ; * ; 1\\}$, que vaut $A \\cap B$ ?",
          "options": [
            "$\\{3 ; 5\\}$",
            "$\\{8 ; 1\\}$",
            "$\\{*\\}$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le seul élément commun aux deux ensembles est $*$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p01_q3",
          "type": "mcq",
          "prompt": "Connaissant $Card(A)$, $Card(B)$ et $Card(A \\cap B)$, comment obtient-on $Card(A \\cup B)$ ?",
          "options": [
            "$Card(A) + Card(B) + Card(A \\cap B)$",
            "$Card(A) + Card(B) - Card(A \\cap B)$",
            "$Card(A) \\times Card(B)$",
            "$Card(A) - Card(B)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On additionne les deux cardinaux et on retire celui de l’intersection."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p01_q4",
          "type": "mcq",
          "prompt": "Dans la situation de la leçon, combien d’élèves pratiquent au moins un des deux sports ?",
          "options": [
            "$25$",
            "$20$",
            "$30$",
            "$15$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $15 + 10 - 5 = 20$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p01_q5",
          "type": "mcq",
          "prompt": "Combien d’élèves de la situation ne pratiquent aucun sport ?",
          "options": [
            "$0$",
            "$10$",
            "$5$",
            "$20$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On soustrait : $25 - 20 = 5$ élèves."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi retire-t-on $Card(A \\cap B)$ dans le calcul de $Card(A \\cup B)$ ?",
          "options": [
            "Parce que l’intersection est toujours vide",
            "Parce que ses éléments sont comptés deux fois dans la somme des cardinaux",
            "Parce que la réunion ne contient pas l’intersection",
            "Pour obtenir un nombre plus petit"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les éléments communs sont comptés dans $Card(A)$ et dans $Card(B)$ : on les retire une fois."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p02",
      "order": 2,
      "title": "Complémentaire d’un ensemble",
      "summary": "Définir le complémentaire d’une partie dans un ensemble et utiliser ses propriétés sur les cardinaux.",
      "conceptExplanation": "Soit $E$ un ensemble et $A$ un sous-ensemble de $E$. On appelle complémentaire de $A$ dans $E$ l’ensemble des éléments de $E$ qui n’appartiennent pas à $A$ ; on le note $\\bar{A}$.\nExemple : pour $E = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9\\}$ et $A = \\{0 ; 2 ; 4 ; 6 ; 8\\}$, le complémentaire de $A$ est $\\{1 ; 3 ; 5 ; 7 ; 9\\}$.\nPropriétés : $A \\cup \\bar{A} = E$, $A \\cap \\bar{A} = \\emptyset$ et $Card(E) = Card(A) + Card(\\bar{A})$.",
      "keyRule": "Le complémentaire partage l’ensemble en deux : les cardinaux de $A$ et de son complémentaire s’ajoutent en $Card(E)$.",
      "formulas": [
        {
          "name": "Cardinal du complémentaire",
          "formula": "Card(E) = Card(A) + Card(\\bar{A})",
          "note": "Donc $Card(\\bar{A}) = Card(E) - Card(A)$."
        }
      ],
      "workedExample": {
        "title": "Le cardinal du complémentaire (exercice de fixation)",
        "statement": "On donne deux parties $A$ et $B$ d’un ensemble $E$ telles que $B$ est le complémentaire de $A$, avec $A = \\{2 ; 3 ; 6\\}$ et $Card(E) = 12$. Trouve le cardinal de $B$.",
        "methodSteps": [
          "On utilise la propriété : $Card(E) = Card(A) + Card(B)$.",
          "L’ensemble $A$ a $3$ éléments, donc $Card(B) = 12 - 3$.",
          "On obtient $9$."
        ],
        "conclusion": "Le complémentaire $B$ a pour cardinal $9$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le complémentaire d’une partie",
          "stepTheme": "Le complémentaire d’une partie",
          "stepBadge": "Le complémentaire d’une partie",
          "paragraphText": "• Définition : le complémentaire de $A$ dans $E$ est l’ensemble des éléments de $E$ qui n’appartiennent pas à $A$.\nExemple de la leçon : dans $E = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9\\}$, le complémentaire de $A = \\{0 ; 2 ; 4 ; 6 ; 8\\}$ est $\\{1 ; 3 ; 5 ; 7 ; 9\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p02_q1",
            "type": "mcq",
            "prompt": "Pour $E = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9\\}$ et $A = \\{0 ; 2 ; 4 ; 6 ; 8\\}$, quel est le complémentaire de $A$ ?",
            "options": [
              "$\\{0 ; 2 ; 4 ; 6 ; 8\\}$",
              "$\\{1 ; 3 ; 5 ; 7 ; 9\\}$",
              "$\\{1 ; 2 ; 3\\}$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On garde les éléments de $E$ absents de $A$ : les chiffres impairs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Réunion et intersection avec le complémentaire",
          "stepTheme": "Réunion et intersection avec le complémentaire",
          "stepBadge": "Réunion et intersection avec le complémentaire",
          "paragraphText": "• Propriétés de la leçon : $A \\cup \\bar{A} = E$ et $A \\cap \\bar{A} = \\emptyset$.\nUn élément de $E$ est donc soit dans $A$, soit dans son complémentaire, jamais dans les deux.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut $A \\cap \\bar{A}$ ?",
            "options": [
              "$E$",
              "$A$",
              "$\\emptyset$",
              "$\\bar{A}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un élément ne peut pas être à la fois dans $A$ et hors de $A$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Reconstruire l’ensemble E",
          "stepTheme": "Reconstruire l’ensemble E",
          "stepBadge": "Reconstruire l’ensemble E",
          "paragraphText": "• Exercice de fixation de la leçon : si $B$ est le complémentaire de $A$, avec $A = \\{2 ; 3 ; 6\\}$ et $B = \\{t ; 4 ; v ; y\\}$, alors $E = A \\cup B$.\nOn obtient $E = \\{2 ; 3 ; 4 ; 6 ; t ; v ; y\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p02_q3",
            "type": "mcq",
            "prompt": "Si $B$ est le complémentaire de $A = \\{2 ; 3 ; 6\\}$ et $B = \\{t ; 4 ; v ; y\\}$, quel est l’ensemble $E$ ?",
            "options": [
              "$\\{2 ; 3 ; 6\\}$",
              "$\\{t ; 4 ; v ; y\\}$",
              "$\\{2 ; 3 ; 4 ; 6 ; t ; v ; y\\}$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$E$ est la réunion de $A$ et de son complémentaire $B$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La relation entre les cardinaux",
          "stepTheme": "La relation entre les cardinaux",
          "stepBadge": "La relation entre les cardinaux",
          "paragraphText": "• Propriété de la leçon : $Card(E) = Card(A) + Card(\\bar{A})$.\nOn en déduit le cardinal du complémentaire par une simple soustraction.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p02_q4",
            "type": "mcq",
            "prompt": "Si $Card(E) = 12$ et $Card(A) = 3$, que vaut le cardinal du complémentaire de $A$ ?",
            "options": [
              "$15$",
              "$9$",
              "$12$",
              "$4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $12 - 3 = 9$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer sans lister les éléments",
          "stepTheme": "Calculer sans lister les éléments",
          "stepBadge": "Calculer sans lister les éléments",
          "paragraphText": "• Méthode : pour obtenir le cardinal du complémentaire, inutile de lister ses éléments.\nOn soustrait simplement : $Card(\\bar{A}) = Card(E) - Card(A)$, comme dans l’exercice de fixation où $12 - 3 = 9$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la façon la plus directe de calculer le cardinal du complémentaire de $A$ dans $E$ ?",
            "options": [
              "Lister tous les éléments de $E$ un à un",
              "Calculer $Card(E) - Card(A)$",
              "Calculer $Card(E) + Card(A)$",
              "Calculer $Card(E) \\times Card(A)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété des cardinaux donne directement la soustraction."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un complémentaire dépend de E",
          "stepTheme": "Un complémentaire dépend de E",
          "stepBadge": "Un complémentaire dépend de E",
          "paragraphText": "• Piège : le complémentaire de $A$ n’a de sens que par rapport à un ensemble $E$ donné.\nLe même ensemble $A$ n’a pas le même complémentaire si l’ensemble de référence $E$ change.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p02_q6",
            "type": "mcq",
            "prompt": "Le complémentaire de $A$ dépend :",
            "options": [
              "Uniquement de $A$",
              "De l’ensemble $E$ dans lequel on se place",
              "Du nombre d’éléments de $A$ seulement",
              "De l’ordre des éléments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le complémentaire est défini « dans $E$ » : changer $E$ change le complémentaire."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p02_q1",
          "type": "mcq",
          "prompt": "Pour $E = \\{0 ; 1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7 ; 8 ; 9\\}$ et $A = \\{0 ; 2 ; 4 ; 6 ; 8\\}$, quel est le complémentaire de $A$ ?",
          "options": [
            "$\\{0 ; 2 ; 4 ; 6 ; 8\\}$",
            "$\\{1 ; 3 ; 5 ; 7 ; 9\\}$",
            "$\\{1 ; 2 ; 3\\}$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On garde les éléments de $E$ absents de $A$ : les chiffres impairs."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut $A \\cap \\bar{A}$ ?",
          "options": [
            "$E$",
            "$A$",
            "$\\emptyset$",
            "$\\bar{A}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un élément ne peut pas être à la fois dans $A$ et hors de $A$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p02_q3",
          "type": "mcq",
          "prompt": "Si $B$ est le complémentaire de $A = \\{2 ; 3 ; 6\\}$ et $B = \\{t ; 4 ; v ; y\\}$, quel est l’ensemble $E$ ?",
          "options": [
            "$\\{2 ; 3 ; 6\\}$",
            "$\\{t ; 4 ; v ; y\\}$",
            "$\\{2 ; 3 ; 4 ; 6 ; t ; v ; y\\}$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$E$ est la réunion de $A$ et de son complémentaire $B$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p02_q4",
          "type": "mcq",
          "prompt": "Si $Card(E) = 12$ et $Card(A) = 3$, que vaut le cardinal du complémentaire de $A$ ?",
          "options": [
            "$15$",
            "$9$",
            "$12$",
            "$4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $12 - 3 = 9$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la façon la plus directe de calculer le cardinal du complémentaire de $A$ dans $E$ ?",
          "options": [
            "Lister tous les éléments de $E$ un à un",
            "Calculer $Card(E) - Card(A)$",
            "Calculer $Card(E) + Card(A)$",
            "Calculer $Card(E) \\times Card(A)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété des cardinaux donne directement la soustraction."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p02_q6",
          "type": "mcq",
          "prompt": "Le complémentaire de $A$ dépend :",
          "options": [
            "Uniquement de $A$",
            "De l’ensemble $E$ dans lequel on se place",
            "Du nombre d’éléments de $A$ seulement",
            "De l’ordre des éléments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le complémentaire est défini « dans $E$ » : changer $E$ change le complémentaire."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p03",
      "order": 3,
      "title": "Produit cartésien de deux ensembles",
      "summary": "Définir le produit cartésien, lister ses couples et calculer son cardinal.",
      "conceptExplanation": "Soit $A$ et $B$ deux ensembles. On appelle produit cartésien de $A$ par $B$ l’ensemble des couples $(a ; b)$ tels que $a \\in A$ et $b \\in B$ ; on le note $A \\times B$ et on lit « $A$ croix $B$ ».\nOn peut lister ses éléments avec un arbre de choix ou un tableau à double entrée. Dans un couple, l’ordre des éléments est très important : $(a ; b) \\neq (b ; a)$.\nPropriété : $Card(A \\times B) = Card(A) \\times Card(B)$. Conséquence : pour tout ensemble fini $A$ et tout entier naturel non nul $p$, $Card(A^p) = (Card(A))^p$.",
      "keyRule": "Le cardinal d’un produit cartésien est le produit des cardinaux : on multiplie, on n’additionne pas.",
      "formulas": [
        {
          "name": "Cardinal du produit cartésien",
          "formula": "Card(A \\times B) = Card(A) \\times Card(B)",
          "note": "Pour deux ensembles finis $A$ et $B$."
        },
        {
          "name": "Puissance d’un ensemble",
          "formula": "Card(A^p) = (Card(A))^p",
          "note": "Conséquence pour le produit de $p$ ensembles égaux à $A$."
        }
      ],
      "workedExample": {
        "title": "Trois lancers d’un dé (exercice de fixation)",
        "statement": "On lance au hasard trois fois de suite un dé parfait en notant à chaque lancer le numéro de la face supérieure. Détermine le nombre de résultats possibles.",
        "methodSteps": [
          "On pose $E = \\{1 ; 2 ; 3 ; 4 ; 5 ; 6\\}$, donc $Card(E) = 6$.",
          "Chaque résultat est un élément de $E^3$.",
          "Le nombre de résultats possibles est $6^3 = 216$."
        ],
        "conclusion": "Il y a $216$ résultats possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le produit cartésien de deux ensembles",
          "stepTheme": "Le produit cartésien de deux ensembles",
          "stepBadge": "Le produit cartésien de deux ensembles",
          "paragraphText": "• Définition : le produit cartésien de $A$ par $B$ est l’ensemble des couples $(a ; b)$ tels que $a \\in A$ et $b \\in B$.\nOn le note $A \\times B$, qui se lit « $A$ croix $B$ ».",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p03_q1",
            "type": "mcq",
            "prompt": "Un élément de $A \\times B$ est :",
            "options": [
              "Un élément de $A$ seulement",
              "Un couple $(a ; b)$ avec $a \\in A$ et $b \\in B$",
              "Un sous-ensemble de $A$",
              "Un nombre réel"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, le produit est formé de couples, premier élément dans $A$, second dans $B$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’ordre compte dans un couple",
          "stepTheme": "L’ordre compte dans un couple",
          "stepBadge": "L’ordre compte dans un couple",
          "paragraphText": "• Remarque de la leçon : dans un couple, l’ordre des éléments est très important.\nEn général, $(a ; b) \\neq (b ; a)$ : échanger les deux éléments donne un autre couple.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p03_q2",
            "type": "mcq",
            "prompt": "Les couples $(a ; b)$ et $(b ; a)$ sont-ils égaux en général ?",
            "options": [
              "Oui, toujours",
              "Oui, car l’ordre ne compte pas",
              "Non, l’ordre des éléments est important",
              "Seulement si $a$ et $b$ sont des nombres"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon insiste : dans un couple, l’ordre est très important."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le cardinal du produit cartésien",
          "stepTheme": "Le cardinal du produit cartésien",
          "stepBadge": "Le cardinal du produit cartésien",
          "paragraphText": "• Propriété : $Card(A \\times B) = Card(A) \\times Card(B)$.\nExemple de la leçon : pour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, le produit contient $12$ couples.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p03_q3",
            "type": "mcq",
            "prompt": "Pour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, que vaut $Card(A \\times B)$ ?",
            "options": [
              "$7$",
              "$12$",
              "$34$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique la propriété : $3 \\times 4 = 12$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Lister avec un arbre ou un tableau",
          "stepTheme": "Lister avec un arbre ou un tableau",
          "stepBadge": "Lister avec un arbre ou un tableau",
          "paragraphText": "• Méthode de la leçon : on liste les couples de $A \\times B$ avec un arbre de choix ou un tableau à double entrée.\nPour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, le tableau donne les $12$ couples, de $(1 ; a)$ à $(3 ; d)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p03_q4",
            "type": "mcq",
            "prompt": "Le couple $(2 ; c)$ appartient-il à $A \\times B$ avec $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$ ?",
            "options": [
              "Non, car $c$ est une lettre",
              "Non, car $2$ n’est pas dans $B$",
              "Oui, car $2 \\in A$ et $c \\in B$",
              "Oui, seulement dans $B \\times A$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le premier élément est dans $A$ et le second dans $B$ : le couple est bien dans $A \\times B$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un calcul direct de cardinal",
          "stepTheme": "Un calcul direct de cardinal",
          "stepBadge": "Un calcul direct de cardinal",
          "paragraphText": "• Exercice de fixation de la leçon : pour deux ensembles de cardinaux $5$ et $8$, le cardinal du produit cartésien se calcule directement.\nOn multiplie les deux cardinaux, sans lister les couples.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p03_q5",
            "type": "mcq",
            "prompt": "Si $Card(E) = 5$ et $Card(F) = 8$, que vaut $Card(E \\times F)$ ?",
            "options": [
              "$13$",
              "$40$",
              "$58$",
              "$85$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $5 \\times 8 = 40$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas échanger les deux ensembles",
          "stepTheme": "Ne pas échanger les deux ensembles",
          "stepBadge": "Ne pas échanger les deux ensembles",
          "paragraphText": "• Piège : le couple $(a ; 1)$, avec le premier élément dans $A$ et le second dans $B$, appartient à $A \\times B$ et non à $B \\times A$.\nLe premier élément désigne l’ensemble de départ du produit.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p03_q6",
            "type": "mcq",
            "prompt": "Avec $A = \\{a ; b\\}$ et $B = \\{1 ; 2\\}$, le couple $(a ; 1)$ est un élément de :",
            "options": [
              "$B \\times A$",
              "$A \\times A$",
              "$A \\times B$",
              "$B \\times B$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le premier élément $a$ est dans $A$ et le second $1$ est dans $B$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p03_q1",
          "type": "mcq",
          "prompt": "Un élément de $A \\times B$ est :",
          "options": [
            "Un élément de $A$ seulement",
            "Un couple $(a ; b)$ avec $a \\in A$ et $b \\in B$",
            "Un sous-ensemble de $A$",
            "Un nombre réel"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, le produit est formé de couples, premier élément dans $A$, second dans $B$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p03_q2",
          "type": "mcq",
          "prompt": "Les couples $(a ; b)$ et $(b ; a)$ sont-ils égaux en général ?",
          "options": [
            "Oui, toujours",
            "Oui, car l’ordre ne compte pas",
            "Non, l’ordre des éléments est important",
            "Seulement si $a$ et $b$ sont des nombres"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon insiste : dans un couple, l’ordre est très important."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p03_q3",
          "type": "mcq",
          "prompt": "Pour $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$, que vaut $Card(A \\times B)$ ?",
          "options": [
            "$7$",
            "$12$",
            "$34$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique la propriété : $3 \\times 4 = 12$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p03_q4",
          "type": "mcq",
          "prompt": "Le couple $(2 ; c)$ appartient-il à $A \\times B$ avec $A = \\{1 ; 2 ; 3\\}$ et $B = \\{a ; b ; c ; d\\}$ ?",
          "options": [
            "Non, car $c$ est une lettre",
            "Non, car $2$ n’est pas dans $B$",
            "Oui, car $2 \\in A$ et $c \\in B$",
            "Oui, seulement dans $B \\times A$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le premier élément est dans $A$ et le second dans $B$ : le couple est bien dans $A \\times B$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p03_q5",
          "type": "mcq",
          "prompt": "Si $Card(E) = 5$ et $Card(F) = 8$, que vaut $Card(E \\times F)$ ?",
          "options": [
            "$13$",
            "$40$",
            "$58$",
            "$85$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $5 \\times 8 = 40$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p03_q6",
          "type": "mcq",
          "prompt": "Avec $A = \\{a ; b\\}$ et $B = \\{1 ; 2\\}$, le couple $(a ; 1)$ est un élément de :",
          "options": [
            "$B \\times A$",
            "$A \\times A$",
            "$A \\times B$",
            "$B \\times B$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le premier élément $a$ est dans $A$ et le second $1$ est dans $B$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p04",
      "order": 4,
      "title": "p-uplets d’un ensemble fini",
      "summary": "Définir un $p$-uplet, rappeler que l’ordre compte et que les répétitions sont possibles, et compter les $p$-uplets.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un nombre entier naturel non nul. On appelle $p$-uplet de $E$ tout élément de l’ensemble $E^p$. Cas particuliers : pour $p = 2$, on parle de couple ; pour $p = 3$, de triplet ; pour $p = 4$, de quadruplet.\nPropriété : le nombre de $p$-uplets d’un ensemble à $n$ éléments est égal à $n^p$.\nRemarque de la leçon : dans les $p$-uplets, un élément peut apparaître plusieurs fois (répétition possible) et l’ordre dans lequel les éléments apparaissent est important.",
      "keyRule": "Dans un $p$-uplet, l’ordre compte et les répétitions sont permises : le compte est $n^p$.",
      "formulas": [
        {
          "name": "Nombre de p-uplets",
          "formula": "n^p",
          "note": "Nombre de $p$-uplets d’un ensemble à $n$ éléments."
        }
      ],
      "workedExample": {
        "title": "Des numéros de téléphone en 8 et 10 chiffres (exercice de fixation)",
        "statement": "Détermine le nombre de numéros de téléphone de $8$ chiffres, puis de $10$ chiffres, que l’on peut former avec les chiffres du système décimal.",
        "methodSteps": [
          "Le système décimal comporte $10$ chiffres, de $0$ à $9$.",
          "Chaque chiffre pouvant être répété, un numéro de $8$ chiffres est un $8$-uplet : il y en a $10^8$.",
          "De même, un numéro de $10$ chiffres est un $10$-uplet : il y en a $10^{10}$."
        ],
        "conclusion": "On peut former $10^8$ numéros de $8$ chiffres et $10^{10}$ numéros de $10$ chiffres."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est un p-uplet",
          "stepTheme": "Ce qu’est un p-uplet",
          "stepBadge": "Ce qu’est un p-uplet",
          "paragraphText": "• Définition : un $p$-uplet de $E$ est un élément de $E^p$, le produit cartésien de $p$ ensembles égaux à $E$.\nPour $p = 2$, on parle de couple ; pour $p = 3$, de triplet ; pour $p = 4$, de quadruplet.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p04_q1",
            "type": "mcq",
            "prompt": "Comment appelle-t-on un $3$-uplet ?",
            "options": [
              "Un couple",
              "Un triplet",
              "Un quadruplet",
              "Une combinaison"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour $p = 3$, la leçon parle de triplet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de p-uplets",
          "stepTheme": "Le nombre de p-uplets",
          "stepBadge": "Le nombre de p-uplets",
          "paragraphText": "• Propriété : le nombre de $p$-uplets d’un ensemble à $n$ éléments est $n^p$.\nChaque position offre $n$ choix, et les choix se multiplient.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p04_q2",
            "type": "mcq",
            "prompt": "Combien un ensemble à $n$ éléments possède-t-il de $p$-uplets ?",
            "options": [
              "$n \\times p$",
              "$p^n$",
              "$n^p$",
              "$n + p$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété donne $n^p$ uplets."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Des numéros de téléphone",
          "stepTheme": "Des numéros de téléphone",
          "stepBadge": "Des numéros de téléphone",
          "paragraphText": "• Exemple de la leçon : un numéro de $8$ chiffres formé avec les $10$ chiffres décimaux est un $8$-uplet.\nLeur nombre est donc $10^8$, car chaque chiffre peut être répété.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p04_q3",
            "type": "mcq",
            "prompt": "Combien de numéros de téléphone de $8$ chiffres peut-on former avec les $10$ chiffres décimaux ?",
            "options": [
              "$10^8$",
              "$8^{10}$",
              "$80$",
              "$10 \\times 8$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les $8$-uplets d’un ensemble à $10$ éléments : $10^8$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Ordre important et répétitions possibles",
          "stepTheme": "Ordre important et répétitions possibles",
          "stepBadge": "Ordre important et répétitions possibles",
          "paragraphText": "• Remarque de la leçon : dans un $p$-uplet, l’ordre des éléments est important et un élément peut apparaître plusieurs fois.\nAinsi, $(4 ; 4 ; 0)$ peut être un $3$-uplet valide si toutes ses composantes sont dans l’ensemble de départ.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p04_q4",
            "type": "mcq",
            "prompt": "Dans un $p$-uplet, un même élément peut-il apparaître plusieurs fois ?",
            "options": [
              "Non, jamais",
              "Oui, la répétition est possible",
              "Oui, mais seulement deux fois",
              "Seulement si l’ordre ne compte pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon le dit explicitement : répétition possible dans les $p$-uplets."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un élément étranger disqualifie l’uplet",
          "stepTheme": "Un élément étranger disqualifie l’uplet",
          "stepBadge": "Un élément étranger disqualifie l’uplet",
          "paragraphText": "• Piège : chaque composante d’un $p$-uplet de $E$ doit appartenir à $E$.\nAvec $E = \\{0 ; 5 ; 6\\}$, le triplet $(0 ; 5 ; 6)$ est valide, mais un triplet contenant $1$ ne l’est pas, car $1 \\notin E$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p04_q5",
            "type": "mcq",
            "prompt": "Avec $E = \\{0 ; 5 ; 6\\}$, lequel de ces triplets est un élément de $E^3$ ?",
            "options": [
              "$(0 ; 0 ; 1)$",
              "$(0 ; 5 ; 6)$",
              "$(1 ; 5 ; 6)$",
              "$(0 ; 1 ; 6)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Toutes ses composantes sont dans $E$ ; les autres contiennent $1$, qui n’y est pas."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Le code secret d’un téléphone",
          "stepTheme": "Le code secret d’un téléphone",
          "stepBadge": "Le code secret d’un téléphone",
          "paragraphText": "• Exercice de la leçon : le code secret d’un téléphone est composé de $4$ chiffres tapés sur un clavier comportant les chiffres de $0$ à $9$.\nC’est un quadruplet d’un ensemble à $10$ éléments : le nombre de codes possibles est $10^4 = 10000$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p04_q6",
            "type": "mcq",
            "prompt": "Combien de codes secrets de $4$ chiffres peut-on former avec les chiffres de $0$ à $9$ ?",
            "options": [
              "$40$",
              "$5040$",
              "$10000$",
              "$1000$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce sont les quadruplets d’un ensemble à $10$ éléments : $10^4 = 10000$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p04_q1",
          "type": "mcq",
          "prompt": "Comment appelle-t-on un $3$-uplet ?",
          "options": [
            "Un couple",
            "Un triplet",
            "Un quadruplet",
            "Une combinaison"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour $p = 3$, la leçon parle de triplet."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p04_q2",
          "type": "mcq",
          "prompt": "Combien un ensemble à $n$ éléments possède-t-il de $p$-uplets ?",
          "options": [
            "$n \\times p$",
            "$p^n$",
            "$n^p$",
            "$n + p$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété donne $n^p$ uplets."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p04_q3",
          "type": "mcq",
          "prompt": "Combien de numéros de téléphone de $8$ chiffres peut-on former avec les $10$ chiffres décimaux ?",
          "options": [
            "$10^8$",
            "$8^{10}$",
            "$80$",
            "$10 \\times 8$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les $8$-uplets d’un ensemble à $10$ éléments : $10^8$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p04_q4",
          "type": "mcq",
          "prompt": "Dans un $p$-uplet, un même élément peut-il apparaître plusieurs fois ?",
          "options": [
            "Non, jamais",
            "Oui, la répétition est possible",
            "Oui, mais seulement deux fois",
            "Seulement si l’ordre ne compte pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon le dit explicitement : répétition possible dans les $p$-uplets."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p04_q5",
          "type": "mcq",
          "prompt": "Avec $E = \\{0 ; 5 ; 6\\}$, lequel de ces triplets est un élément de $E^3$ ?",
          "options": [
            "$(0 ; 0 ; 1)$",
            "$(0 ; 5 ; 6)$",
            "$(1 ; 5 ; 6)$",
            "$(0 ; 1 ; 6)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Toutes ses composantes sont dans $E$ ; les autres contiennent $1$, qui n’y est pas."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p04_q6",
          "type": "mcq",
          "prompt": "Combien de codes secrets de $4$ chiffres peut-on former avec les chiffres de $0$ à $9$ ?",
          "options": [
            "$40$",
            "$5040$",
            "$10000$",
            "$1000$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce sont les quadruplets d’un ensemble à $10$ éléments : $10^4 = 10000$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p05",
      "order": 5,
      "title": "Arrangements",
      "summary": "Définir un arrangement de $p$ éléments, calculer le nombre d’arrangements et reconnaître les situations d’arrangement.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un entier naturel tel que $1 \\leq p \\leq n$. On appelle arrangement de $p$ éléments de $E$ tout $p$-uplet d’éléments de $E$ deux à deux distincts.\nExemple : pour $E = \\{a ; 1 ; 4 ; b ; 9 ; c\\}$, $(1 ; a ; 4 ; 9)$ et $(b ; c ; 9 ; 1)$ sont des arrangements de $4$ éléments, mais $(b ; 4 ; b)$ n’en est pas un car $b$ se répète.\nPropriété : le nombre d’arrangements de $p$ éléments dans un ensemble à $n$ éléments est $A_n^p = n \\times (n - 1) \\times \\ldots \\times (n - p + 1)$, le produit de $p$ entiers consécutifs dont le plus grand est $n$. Cas particuliers : $A_n^1 = n$ et, par convention, $A_n^0 = 1$.",
      "keyRule": "Arrangement : ordre important, répétition impossible, produit de $p$ facteurs qui descendent depuis $n$.",
      "formulas": [
        {
          "name": "Nombre d’arrangements",
          "formula": "A_n^p = n \\times (n - 1) \\times \\ldots \\times (n - p + 1)",
          "note": "Produit de $p$ facteurs, pour $1 \\leq p \\leq n$."
        }
      ],
      "workedExample": {
        "title": "Le rangement de trois véhicules (exercice de la leçon)",
        "statement": "Un parking comprend cinq places disponibles. Trois automobilistes se présentent et stationnent l’un après l’autre, chaque véhicule occupant une seule place. Détermine le nombre de rangements possibles.",
        "methodSteps": [
          "Un rangement est un arrangement de $3$ véhicules parmi $5$ places : l’ordre compte et une place ne peut pas être prise deux fois.",
          "Le nombre cherché est $A_5^3 = 5 \\times 4 \\times 3$.",
          "On obtient $60$."
        ],
        "conclusion": "Il y a $60$ rangements possibles."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est un arrangement",
          "stepTheme": "Ce qu’est un arrangement",
          "stepBadge": "Ce qu’est un arrangement",
          "paragraphText": "• Définition : un arrangement de $p$ éléments de $E$ est un $p$-uplet dont les éléments sont deux à deux distincts, avec $1 \\leq p \\leq n$.\nExemple de la leçon : $(1 ; a ; 4 ; 9)$ est un arrangement de $4$ éléments de $E = \\{a ; 1 ; 4 ; b ; 9 ; c\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p05_q1",
            "type": "mcq",
            "prompt": "Qu’est-ce qui distingue un arrangement d’un simple $p$-uplet ?",
            "options": [
              "L’ordre ne compte pas",
              "Les éléments sont deux à deux distincts",
              "Les répétitions sont obligatoires",
              "On a toujours $p = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un arrangement est un $p$-uplet sans aucune répétition."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Une répétition interdit l’arrangement",
          "stepTheme": "Une répétition interdit l’arrangement",
          "stepBadge": "Une répétition interdit l’arrangement",
          "paragraphText": "• Piège de la leçon : $(b ; 4 ; b)$ et $(9 ; b ; 9)$ sont des triplets de $E$, mais pas des arrangements, car un élément s’y répète.\nDans un arrangement, chaque élément apparaît au plus une fois.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p05_q2",
            "type": "mcq",
            "prompt": "Avec $E = \\{a ; 1 ; 4 ; b ; 9 ; c\\}$, lequel de ces uplets est un arrangement ?",
            "options": [
              "$(b ; 4 ; b)$",
              "$(9 ; b ; 9)$",
              "$(9 ; a ; 4 ; 1)$",
              "$(a ; a ; 4 ; 9)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ses éléments sont deux à deux distincts ; les autres répètent un élément."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le nombre d’arrangements",
          "stepTheme": "Le nombre d’arrangements",
          "stepBadge": "Le nombre d’arrangements",
          "paragraphText": "• Propriété : $A_n^p = n \\times (n - 1) \\times \\ldots \\times (n - p + 1)$.\nC’est le produit de $p$ entiers naturels consécutifs dont le plus grand est $n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p05_q3",
            "type": "mcq",
            "prompt": "Comment note-t-on le nombre d’arrangements de $p$ éléments parmi $n$ ?",
            "options": [
              "$C_n^p$",
              "$n^p$",
              "$A_n^p$",
              "$p!$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon note ce nombre $A_n^p$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer un nombre d’arrangements",
          "stepTheme": "Calculer un nombre d’arrangements",
          "stepBadge": "Calculer un nombre d’arrangements",
          "paragraphText": "• Exercice de fixation de la leçon : $A_{10}^4$ est le produit de $4$ entiers consécutifs dont le plus grand est $10$.\nOn écrit donc $10 \\times 9 \\times 8 \\times 7$, ce qui donne $5040$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut $A_{10}^4$ ?",
            "options": [
              "$5040$",
              "$2880$",
              "$10000$",
              "$720$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer $A_7^5$",
          "stepTheme": "Calculer $A_7^5$",
          "stepBadge": "Calculer $A_7^5$",
          "paragraphText": "• Autre calcul de la leçon : $A_7^5$ est le produit de $5$ entiers consécutifs dont le plus grand est $7$.\nOn obtient $7 \\times 6 \\times 5 \\times 4 \\times 3 = 840$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p05_q5",
            "type": "mcq",
            "prompt": "Que vaut $A_7^5$ ?",
            "options": [
              "$2520$",
              "$840$",
              "$5040$",
              "$120$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $7 \\times 6 \\times 5 \\times 4 \\times 3 = 840$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les cas particuliers",
          "stepTheme": "Les cas particuliers",
          "stepBadge": "Les cas particuliers",
          "paragraphText": "• Cas particuliers donnés par la leçon : $A_n^1 = n$ et, par convention, $A_n^0 = 1$.\nUn arrangement d’un seul élément se confond avec le choix de cet élément.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p05_q6",
            "type": "mcq",
            "prompt": "Que vaut $A_n^1$ ?",
            "options": [
              "$1$",
              "$0$",
              "$n$",
              "$n!$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Choisir un arrangement d’un élément parmi $n$ revient à choisir cet élément : $n$ possibilités."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p05_q1",
          "type": "mcq",
          "prompt": "Qu’est-ce qui distingue un arrangement d’un simple $p$-uplet ?",
          "options": [
            "L’ordre ne compte pas",
            "Les éléments sont deux à deux distincts",
            "Les répétitions sont obligatoires",
            "On a toujours $p = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un arrangement est un $p$-uplet sans aucune répétition."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p05_q2",
          "type": "mcq",
          "prompt": "Avec $E = \\{a ; 1 ; 4 ; b ; 9 ; c\\}$, lequel de ces uplets est un arrangement ?",
          "options": [
            "$(b ; 4 ; b)$",
            "$(9 ; b ; 9)$",
            "$(9 ; a ; 4 ; 1)$",
            "$(a ; a ; 4 ; 9)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ses éléments sont deux à deux distincts ; les autres répètent un élément."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p05_q3",
          "type": "mcq",
          "prompt": "Comment note-t-on le nombre d’arrangements de $p$ éléments parmi $n$ ?",
          "options": [
            "$C_n^p$",
            "$n^p$",
            "$A_n^p$",
            "$p!$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon note ce nombre $A_n^p$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut $A_{10}^4$ ?",
          "options": [
            "$5040$",
            "$2880$",
            "$10000$",
            "$720$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p05_q5",
          "type": "mcq",
          "prompt": "Que vaut $A_7^5$ ?",
          "options": [
            "$2520$",
            "$840$",
            "$5040$",
            "$120$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $7 \\times 6 \\times 5 \\times 4 \\times 3 = 840$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p05_q6",
          "type": "mcq",
          "prompt": "Que vaut $A_n^1$ ?",
          "options": [
            "$1$",
            "$0$",
            "$n$",
            "$n!$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Choisir un arrangement d’un élément parmi $n$ revient à choisir cet élément : $n$ possibilités."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p06",
      "order": 6,
      "title": "Permutations et factorielle",
      "summary": "Définir une permutation, introduire la notation factorielle et exprimer les arrangements avec les factorielles.",
      "conceptExplanation": "On appelle permutation d’un ensemble $E$ à $n$ éléments tout arrangement des $n$ éléments de $E$. Exemple : $(0 ; 1 ; 6)$, $(6 ; 0 ; 1)$ et $(0 ; 6 ; 1)$ sont des permutations de $\\{0 ; 1 ; 6\\}$.\nLe nombre de permutations d’un ensemble à $n$ éléments est $A_n^n = n \\times (n - 1) \\times (n - 2) \\times \\ldots \\times 2 \\times 1$.\nNotation factorielle : ce produit se note $n!$ et se lit « factorielle $n$ ». Propriété : pour $1 \\leq p \\leq n$, $A_n^p = \\frac{n!}{(n - p)!}$, et $n! = A_n^n$.",
      "keyRule": "Une permutation range tous les éléments : leur nombre est $n!$, et les arrangements se calculent par les factorielles.",
      "formulas": [
        {
          "name": "Nombre de permutations",
          "formula": "A_n^n = n!",
          "note": "Nombre de permutations d’un ensemble à $n$ éléments."
        },
        {
          "name": "Arrangements et factorielles",
          "formula": "A_n^p = \\frac{n!}{(n - p)!}",
          "note": "Pour $1 \\leq p \\leq n$."
        }
      ],
      "workedExample": {
        "title": "Les mots formés avec les lettres de KENDAL (exercice de fixation)",
        "statement": "Détermine le nombre de mots, ayant un sens ou non, que l’on peut former à partir des lettres du nom KENDAL.",
        "methodSteps": [
          "Il s’agit d’une permutation des $6$ lettres du nom KENDAL, toutes distinctes.",
          "Le nombre de mots est $A_6^6 = 6!$.",
          "On calcule $6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1 = 720$."
        ],
        "conclusion": "On peut former $720$ mots."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est une permutation",
          "stepTheme": "Ce qu’est une permutation",
          "stepBadge": "Ce qu’est une permutation",
          "paragraphText": "• Définition : une permutation d’un ensemble à $n$ éléments est un arrangement de ses $n$ éléments, c’est-à-dire un rangement de tous les éléments.\nExemple de la leçon : $(0 ; 1 ; 6)$, $(6 ; 0 ; 1)$ et $(0 ; 6 ; 1)$ sont des permutations de $\\{0 ; 1 ; 6\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p06_q1",
            "type": "mcq",
            "prompt": "Une permutation d’un ensemble à $n$ éléments est :",
            "options": [
              "Un arrangement de $p$ éléments avec $p < n$",
              "Un arrangement des $n$ éléments de l’ensemble",
              "Une combinaison de $n$ éléments",
              "Un $p$-uplet avec répétitions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une permutation utilise tous les éléments de l’ensemble, chacun une fois."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La notation factorielle",
          "stepTheme": "La notation factorielle",
          "stepBadge": "La notation factorielle",
          "paragraphText": "• Notation de la leçon : le produit $n \\times (n - 1) \\times (n - 2) \\times \\ldots \\times 2 \\times 1$ se note $n!$ et se lit « factorielle $n$ ».\nExemple : $7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p06_q2",
            "type": "mcq",
            "prompt": "Comment se note le produit $n \\times (n - 1) \\times \\ldots \\times 2 \\times 1$ ?",
            "options": [
              "$n^p$",
              "$C_n^p$",
              "$n!$",
              "$A_1^n$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Ce produit est la factorielle de $n$, notée $n!$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les mots formés avec KENDAL",
          "stepTheme": "Les mots formés avec KENDAL",
          "stepBadge": "Les mots formés avec KENDAL",
          "paragraphText": "• Exemple de la leçon : former un mot avec les $6$ lettres distinctes de KENDAL est une permutation de ces lettres.\nLeur nombre est $6! = 720$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p06_q3",
            "type": "mcq",
            "prompt": "Combien de mots peut-on former avec les lettres du nom KENDAL ?",
            "options": [
              "$120$",
              "$36$",
              "$720$",
              "$46656$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est une permutation de $6$ lettres : $6! = 720$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les arrangements avec les factorielles",
          "stepTheme": "Les arrangements avec les factorielles",
          "stepBadge": "Les arrangements avec les factorielles",
          "paragraphText": "• Propriété de la leçon : pour $1 \\leq p \\leq n$, $A_n^p = \\frac{n!}{(n - p)!}$.\nEn particulier, $n! = A_n^n$ : la factorielle compte les permutations.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p06_q4",
            "type": "mcq",
            "prompt": "Quelle formule donne $A_n^p$ avec les factorielles ?",
            "options": [
              "$A_n^p = \\frac{n!}{p!}$",
              "$A_n^p = \\frac{n!}{(n - p)!}$",
              "$A_n^p = n! \\times (n - p)!$",
              "$A_n^p = \\frac{(n - p)!}{n!}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne $A_n^p = \\frac{n!}{(n - p)!}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Un arrangement par les factorielles",
          "stepTheme": "Un arrangement par les factorielles",
          "stepBadge": "Un arrangement par les factorielles",
          "paragraphText": "• Exercice de fixation de la leçon : $A_{10}^4 = \\frac{10!}{6!}$, qui se simplifie en gardant les facteurs de $7$ à $10$.\nOn retrouve $10 \\times 9 \\times 8 \\times 7 = 5040$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p06_q5",
            "type": "mcq",
            "prompt": "Que vaut $A_{10}^4$ calculé par les factorielles ?",
            "options": [
              "$5040$",
              "$720$",
              "$151200$",
              "$240$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Après simplification par $6!$, il reste $10 \\times 9 \\times 8 \\times 7 = 5040$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre permutation et uplet",
          "stepTheme": "Ne pas confondre permutation et uplet",
          "stepBadge": "Ne pas confondre permutation et uplet",
          "paragraphText": "• Piège : une permutation utilise chaque élément exactement une fois.\nUn uplet comme $(0 ; 0 ; 1)$ n’est pas une permutation de $\\{0 ; 1 ; 6\\}$, car $0$ s’y répète et $6$ n’y figure pas.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p06_q6",
            "type": "mcq",
            "prompt": "Lequel de ces uplets est une permutation de $\\{0 ; 1 ; 6\\}$ ?",
            "options": [
              "$(0 ; 0 ; 1)$",
              "$(6 ; 0 ; 1)$",
              "$(0 ; 1)$",
              "$(1 ; 6 ; 6)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(6 ; 0 ; 1)$ contient chaque élément de l’ensemble exactement une fois."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p06_q1",
          "type": "mcq",
          "prompt": "Une permutation d’un ensemble à $n$ éléments est :",
          "options": [
            "Un arrangement de $p$ éléments avec $p < n$",
            "Un arrangement des $n$ éléments de l’ensemble",
            "Une combinaison de $n$ éléments",
            "Un $p$-uplet avec répétitions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une permutation utilise tous les éléments de l’ensemble, chacun une fois."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p06_q2",
          "type": "mcq",
          "prompt": "Comment se note le produit $n \\times (n - 1) \\times \\ldots \\times 2 \\times 1$ ?",
          "options": [
            "$n^p$",
            "$C_n^p$",
            "$n!$",
            "$A_1^n$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Ce produit est la factorielle de $n$, notée $n!$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p06_q3",
          "type": "mcq",
          "prompt": "Combien de mots peut-on former avec les lettres du nom KENDAL ?",
          "options": [
            "$120$",
            "$36$",
            "$720$",
            "$46656$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est une permutation de $6$ lettres : $6! = 720$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p06_q4",
          "type": "mcq",
          "prompt": "Quelle formule donne $A_n^p$ avec les factorielles ?",
          "options": [
            "$A_n^p = \\frac{n!}{p!}$",
            "$A_n^p = \\frac{n!}{(n - p)!}$",
            "$A_n^p = n! \\times (n - p)!$",
            "$A_n^p = \\frac{(n - p)!}{n!}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne $A_n^p = \\frac{n!}{(n - p)!}$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p06_q5",
          "type": "mcq",
          "prompt": "Que vaut $A_{10}^4$ calculé par les factorielles ?",
          "options": [
            "$5040$",
            "$720$",
            "$151200$",
            "$240$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Après simplification par $6!$, il reste $10 \\times 9 \\times 8 \\times 7 = 5040$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p06_q6",
          "type": "mcq",
          "prompt": "Lequel de ces uplets est une permutation de $\\{0 ; 1 ; 6\\}$ ?",
          "options": [
            "$(0 ; 0 ; 1)$",
            "$(6 ; 0 ; 1)$",
            "$(0 ; 1)$",
            "$(1 ; 6 ; 6)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(6 ; 0 ; 1)$ contient chaque élément de l’ensemble exactement une fois."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p07",
      "order": 7,
      "title": "Combinaisons",
      "summary": "Définir une combinaison, calculer le nombre de combinaisons et utiliser la symétrie et la relation de Pascal.",
      "conceptExplanation": "Soit $E$ un ensemble à $n$ éléments et $p$ un entier naturel tel que $p \\leq n$. On appelle combinaison de $p$ éléments de $E$ tout sous-ensemble de $E$ ayant $p$ éléments.\nContrairement aux listes, l’ordre d’écriture des éléments d’une combinaison n’a pas d’importance et chaque élément ne peut apparaître qu’au plus une fois : on écrit les combinaisons avec des accolades, comme les ensembles.\nPropriété : le nombre de combinaisons de $p$ éléments d’un ensemble à $n$ éléments est $C_n^p = \\frac{A_n^p}{p!} = \\frac{n!}{p!(n - p)!}$.\nAutres propriétés : $C_n^p = C_n^{n - p}$ et, si $0 < p < n$, $C_{n - 1}^{p - 1} + C_{n - 1}^{p} = C_n^p$ (relation de Pascal).",
      "keyRule": "Combinaison : ni ordre, ni répétition ; on divise les arrangements par $p!$ pour effacer l’ordre.",
      "formulas": [
        {
          "name": "Nombre de combinaisons",
          "formula": "C_n^p = \\frac{n!}{p!(n - p)!}",
          "note": "Aussi $C_n^p = \\frac{A_n^p}{p!}$."
        },
        {
          "name": "Symétrie et relation de Pascal",
          "formula": "C_n^p = C_n^{n - p} \\quad \\text{et} \\quad C_{n - 1}^{p - 1} + C_{n - 1}^{p} = C_n^p",
          "note": "La relation de Pascal vaut pour $0 < p < n$."
        }
      ],
      "workedExample": {
        "title": "Le nombre de combinaisons de 5 dans 11 (exercice de fixation)",
        "statement": "Calcule le nombre de combinaisons de $5$ éléments dans un ensemble à $11$ éléments.",
        "methodSteps": [
          "On applique la formule : $C_{11}^5 = \\frac{11!}{5! \\times 6!}$.",
          "On simplifie : il reste $\\frac{11 \\times 10 \\times 9 \\times 8 \\times 7}{5 \\times 4 \\times 3 \\times 2 \\times 1}$.",
          "Le quotient vaut $462$."
        ],
        "conclusion": "$C_{11}^5 = 462$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est une combinaison",
          "stepTheme": "Ce qu’est une combinaison",
          "stepBadge": "Ce qu’est une combinaison",
          "paragraphText": "• Définition : une combinaison de $p$ éléments d’un ensemble $E$ à $n$ éléments est un sous-ensemble de $E$ ayant $p$ éléments, avec $p \\leq n$.\nExemple de la leçon : $\\{0 ; e ; u\\}$ et $\\{v ; e\\}$ sont des combinaisons de $A = \\{0 ; 1 ; e ; v ; u\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p07_q1",
            "type": "mcq",
            "prompt": "Une combinaison de $p$ éléments de $E$ est :",
            "options": [
              "Un $p$-uplet ordonné",
              "Un arrangement de $p$ éléments",
              "Un sous-ensemble de $E$ ayant $p$ éléments",
              "Un couple de $E$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une combinaison est un sous-ensemble : ni ordre, ni répétition."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’ordre n’a pas d’importance",
          "stepTheme": "L’ordre n’a pas d’importance",
          "stepBadge": "L’ordre n’a pas d’importance",
          "paragraphText": "• Remarque de la leçon : les ensembles $\\{d ; a ; c\\}$ et $\\{a ; d ; c\\}$ ont les mêmes éléments, ils sont donc égaux.\nDans une combinaison, l’ordre d’écriture n’a pas d’importance et chaque élément apparaît au plus une fois.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p07_q2",
            "type": "mcq",
            "prompt": "Les ensembles $\\{d ; a ; c\\}$ et $\\{a ; d ; c\\}$ sont :",
            "options": [
              "Différents, car l’ordre change",
              "Égaux, car ils ont les mêmes éléments",
              "Deux arrangements distincts",
              "Deux combinaisons différentes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un ensemble est déterminé par ses éléments, pas par leur ordre d’écriture."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le nombre de combinaisons",
          "stepTheme": "Le nombre de combinaisons",
          "stepBadge": "Le nombre de combinaisons",
          "paragraphText": "• Propriété de la leçon : $C_n^p = \\frac{A_n^p}{p!} = \\frac{n!}{p!(n - p)!}$.\nOn divise par $p!$ car chaque combinaison correspond à $p!$ arrangements, obtenus en ordonnant ses éléments.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p07_q3",
            "type": "mcq",
            "prompt": "Quelle est la formule du nombre de combinaisons de $p$ éléments parmi $n$ ?",
            "options": [
              "$C_n^p = \\frac{n!}{(n - p)!}$",
              "$C_n^p = n^p$",
              "$C_n^p = \\frac{p!}{n!}$",
              "$C_n^p = \\frac{n!}{p!(n - p)!}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule est $C_n^p = \\frac{n!}{p!(n - p)!}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer $C_{11}^5$",
          "stepTheme": "Calculer $C_{11}^5$",
          "stepBadge": "Calculer $C_{11}^5$",
          "paragraphText": "• Exercice de fixation de la leçon : $C_{11}^5 = \\frac{11!}{5! \\times 6!}$ se simplifie en un quotient de produits.\nLe calcul donne $462$ combinaisons.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p07_q4",
            "type": "mcq",
            "prompt": "Que vaut $C_{11}^5$ ?",
            "options": [
              "$462$",
              "$231$",
              "$55440$",
              "$120$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $\\frac{11 \\times 10 \\times 9 \\times 8 \\times 7}{120} = 462$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Symétrie et relation de Pascal",
          "stepTheme": "Symétrie et relation de Pascal",
          "stepBadge": "Symétrie et relation de Pascal",
          "paragraphText": "• Propriétés de la leçon : $C_n^p = C_n^{n - p}$ (symétrie) et $C_{n - 1}^{p - 1} + C_{n - 1}^{p} = C_n^p$ pour $0 < p < n$ (relation de Pascal).\nLa symétrie dit que choisir $p$ éléments revient à choisir les $n - p$ éléments restants.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p07_q5",
            "type": "mcq",
            "prompt": "À quoi est égal $C_{100}^2$ d’après la symétrie ?",
            "options": [
              "$C_{100}^{50}$",
              "$C_{100}^{98}$",
              "$C_{98}^{100}$",
              "Il ne se simplifie pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La symétrie donne $C_n^p = C_n^{n - p}$, donc $C_{100}^2 = C_{100}^{98}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Combinaison ou arrangement ?",
          "stepTheme": "Combinaison ou arrangement ?",
          "stepBadge": "Combinaison ou arrangement ?",
          "paragraphText": "• Piège : quand l’ordre ne compte pas, le modèle est la combinaison, pas l’arrangement.\nPar exemple, une main de cartes est un sous-ensemble : changer l’ordre des cartes ne change pas la main.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p07_q6",
            "type": "mcq",
            "prompt": "On tire simultanément $3$ boules parmi $5$. Quel modèle faut-il utiliser ?",
            "options": [
              "Un arrangement $A_5^3$",
              "Un $3$-uplet, soit $5^3$",
              "Une combinaison $C_5^3$",
              "Une permutation $5!$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un tirage simultané ne tient pas compte de l’ordre : c’est une combinaison."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p07_q1",
          "type": "mcq",
          "prompt": "Une combinaison de $p$ éléments de $E$ est :",
          "options": [
            "Un $p$-uplet ordonné",
            "Un arrangement de $p$ éléments",
            "Un sous-ensemble de $E$ ayant $p$ éléments",
            "Un couple de $E$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une combinaison est un sous-ensemble : ni ordre, ni répétition."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p07_q2",
          "type": "mcq",
          "prompt": "Les ensembles $\\{d ; a ; c\\}$ et $\\{a ; d ; c\\}$ sont :",
          "options": [
            "Différents, car l’ordre change",
            "Égaux, car ils ont les mêmes éléments",
            "Deux arrangements distincts",
            "Deux combinaisons différentes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un ensemble est déterminé par ses éléments, pas par leur ordre d’écriture."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p07_q3",
          "type": "mcq",
          "prompt": "Quelle est la formule du nombre de combinaisons de $p$ éléments parmi $n$ ?",
          "options": [
            "$C_n^p = \\frac{n!}{(n - p)!}$",
            "$C_n^p = n^p$",
            "$C_n^p = \\frac{p!}{n!}$",
            "$C_n^p = \\frac{n!}{p!(n - p)!}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule est $C_n^p = \\frac{n!}{p!(n - p)!}$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p07_q4",
          "type": "mcq",
          "prompt": "Que vaut $C_{11}^5$ ?",
          "options": [
            "$462$",
            "$231$",
            "$55440$",
            "$120$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $\\frac{11 \\times 10 \\times 9 \\times 8 \\times 7}{120} = 462$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p07_q5",
          "type": "mcq",
          "prompt": "À quoi est égal $C_{100}^2$ d’après la symétrie ?",
          "options": [
            "$C_{100}^{50}$",
            "$C_{100}^{98}$",
            "$C_{98}^{100}$",
            "Il ne se simplifie pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La symétrie donne $C_n^p = C_n^{n - p}$, donc $C_{100}^2 = C_{100}^{98}$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p07_q6",
          "type": "mcq",
          "prompt": "On tire simultanément $3$ boules parmi $5$. Quel modèle faut-il utiliser ?",
          "options": [
            "Un arrangement $A_5^3$",
            "Un $3$-uplet, soit $5^3$",
            "Une combinaison $C_5^3$",
            "Une permutation $5!$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un tirage simultané ne tient pas compte de l’ordre : c’est une combinaison."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l02_denombrement_p08",
      "order": 8,
      "title": "Types de tirages et binôme de Newton",
      "summary": "Associer chaque type de tirage à son modèle de dénombrement et développer $(a + b)^n$ par le binôme de Newton.",
      "conceptExplanation": "La leçon récapitule les modèles selon le type de tirage : un tirage simultané de $p$ éléments parmi $n$ se compte par $C_n^p$ ; un tirage successif sans remise de $p$ éléments parmi $n$ par $A_n^p$ ; un tirage successif sans remise de $n$ éléments parmi $n$ par $n!$ ; un tirage successif avec remise de $p$ éléments parmi $n$ par $n^p$.\nVocabulaire : tirer au moins $k$ éléments a pour complémentaire tirer au plus $k - 1$ éléments ; tirer au plus $k$ éléments a pour complémentaire tirer au moins $k + 1$ éléments.\nBinôme de Newton : pour $a$ et $b$ réels et $n$ entier naturel non nul, $(a + b)^n = \\sum_{k = 0}^{n} C_n^k a^k b^{n - k}$. Les coefficients se lisent dans le triangle de Pascal.",
      "keyRule": "Simultané : combinaison ; sans remise : arrangement ; avec remise : $n^p$ ; le binôme de Newton distribue les coefficients $C_n^k$.",
      "formulas": [
        {
          "name": "Binôme de Newton",
          "formula": "(a + b)^n = \\sum_{k = 0}^{n} C_n^k a^k b^{n - k}",
          "note": "Pour $a$ et $b$ réels et $n$ entier naturel non nul."
        }
      ],
      "workedExample": {
        "title": "Comparer trois tirages de deux cartons (situation d’évaluation)",
        "statement": "Une urne contient quatre cartons numérotés de $1$ à $4$. On tire deux cartons successivement avec remise, successivement sans remise, ou simultanément. Quel tirage donne le plus de résultats possibles ?",
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
          "stepKind": "propriete",
          "stepTitle": "Le tirage simultané : une combinaison",
          "stepTheme": "Le tirage simultané : une combinaison",
          "stepBadge": "Le tirage simultané : une combinaison",
          "paragraphText": "• Tableau de la leçon : tirer simultanément $p$ éléments parmi $n$, c’est les prendre en une seule fois, sans ordre.\nLe modèle est la combinaison : le nombre de tirages est $C_n^p$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p08_q1",
            "type": "mcq",
            "prompt": "On tire simultanément $3$ boules parmi $5$ indiscernables. Combien de tirages sont possibles ?",
            "options": [
              "$60$",
              "$10$",
              "$125$",
              "$20$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tirage simultané : $C_5^3 = 10$, comme dans l’exercice de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le tirage successif sans remise : un arrangement",
          "stepTheme": "Le tirage successif sans remise : un arrangement",
          "stepBadge": "Le tirage successif sans remise : un arrangement",
          "paragraphText": "• Tableau de la leçon : tirer successivement sans remise, élément après élément, donne un arrangement.\nLe nombre de tirages de $p$ éléments parmi $n$ est $A_n^p$, et $n!$ si l’on tire les $n$ éléments.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p08_q2",
            "type": "mcq",
            "prompt": "On tire successivement sans remise $2$ cartons parmi $4$. Combien de résultats sont possibles ?",
            "options": [
              "$6$",
              "$16$",
              "$12$",
              "$24$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Arrangement : $A_4^2 = 4 \\times 3 = 12$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le tirage successif avec remise : une liste",
          "stepTheme": "Le tirage successif avec remise : une liste",
          "stepBadge": "Le tirage successif avec remise : une liste",
          "paragraphText": "• Tableau de la leçon : tirer successivement avec remise, en remettant l’élément à chaque fois, donne un $p$-uplet.\nLe nombre de tirages de $p$ éléments parmi $n$ est $n^p$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p08_q3",
            "type": "mcq",
            "prompt": "On tire successivement avec remise $2$ cartons parmi $4$. Combien de résultats sont possibles ?",
            "options": [
              "$12$",
              "$6$",
              "$8$",
              "$16$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec remise : $4^2 = 16$ résultats."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Au moins et au plus",
          "stepTheme": "Au moins et au plus",
          "stepBadge": "Au moins et au plus",
          "paragraphText": "• Vocabulaire de la leçon : tirer au moins $k$ éléments, c’est en tirer un nombre supérieur ou égal à $k$ ; son complémentaire est tirer au plus $k - 1$ éléments.\nTirer au plus $k$ éléments signifie en tirer un nombre inférieur ou égal à $k$ ; son complémentaire est tirer au moins $k + 1$ éléments.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p08_q4",
            "type": "mcq",
            "prompt": "Quel est le complémentaire de « tirer au moins $3$ éléments » ?",
            "options": [
              "Tirer au plus $3$ éléments",
              "Tirer au plus $2$ éléments",
              "Tirer exactement $3$ éléments",
              "Tirer au moins $4$ éléments"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le complémentaire de « au moins $k$ » est « au plus $k - 1$ », ici au plus $2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le binôme de Newton",
          "stepTheme": "Le binôme de Newton",
          "stepBadge": "Le binôme de Newton",
          "paragraphText": "• Formule de la leçon : $(a + b)^n = \\sum_{k = 0}^{n} C_n^k a^k b^{n - k}$.\nLes coefficients sont les combinaisons $C_n^k$, que l’on lit dans le triangle de Pascal.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p08_q5",
            "type": "mcq",
            "prompt": "Dans le développement de $(a + b)^n$, quels sont les coefficients des termes ?",
            "options": [
              "Les arrangements $A_n^k$",
              "Les factorielles $k!$",
              "Les combinaisons $C_n^k$",
              "Les puissances $n^k$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le binôme de Newton fait intervenir les coefficients $C_n^k$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux développements de la leçon",
          "stepTheme": "Deux développements de la leçon",
          "stepBadge": "Deux développements de la leçon",
          "paragraphText": "• Exemples de la leçon : $(a + b)^2 = a^2 + 2ab + b^2$, avec les coefficients $1$, $2$, $1$.\nEt $(3 + b)^4 = 3^4 + 4 \\times 3^3 b + 6 \\times 3^2 b^2 + 4 \\times 3 b^3 + b^4$, avec les coefficients $1$, $4$, $6$, $4$, $1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p08_q6",
            "type": "mcq",
            "prompt": "Quel est le coefficient de $b^2$ dans le développement de $(3 + b)^4$ ?",
            "options": [
              "$6 \\times 3^2 = 54$",
              "$4 \\times 3^2 = 36$",
              "$6$",
              "$3^2 = 9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le terme en $b^2$ est $C_4^2 \\times 3^2 b^2 = 6 \\times 9 \\times b^2$ : le coefficient de $b^2$ est $54$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Choisir le bon modèle de tirage",
          "stepTheme": "Choisir le bon modèle de tirage",
          "stepBadge": "Choisir le bon modèle de tirage",
          "paragraphText": "• Piège : un même tirage peut cacher trois modèles différents selon qu’il est simultané, sans remise ou avec remise.\nDans la situation d’évaluation de la leçon, les trois nombres obtenus sont $6$, $12$ et $16$ : le tirage le plus avantageux n’est pas le même selon le modèle.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l02_denombrement_p08_q7",
            "type": "mcq",
            "prompt": "Dans la situation d’évaluation, quel tirage de deux cartons parmi quatre est le plus avantageux ?",
            "options": [
              "Le tirage simultané",
              "Le tirage successif sans remise",
              "Le tirage successif avec remise",
              "Les trois tirages se valent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec $16$ résultats contre $12$ et $6$, le tirage successif avec remise est le plus avantageux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p08_q1",
          "type": "mcq",
          "prompt": "On tire simultanément $3$ boules parmi $5$ indiscernables. Combien de tirages sont possibles ?",
          "options": [
            "$60$",
            "$10$",
            "$125$",
            "$20$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Tirage simultané : $C_5^3 = 10$, comme dans l’exercice de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p08_q2",
          "type": "mcq",
          "prompt": "On tire successivement sans remise $2$ cartons parmi $4$. Combien de résultats sont possibles ?",
          "options": [
            "$6$",
            "$16$",
            "$12$",
            "$24$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Arrangement : $A_4^2 = 4 \\times 3 = 12$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p08_q3",
          "type": "mcq",
          "prompt": "On tire successivement avec remise $2$ cartons parmi $4$. Combien de résultats sont possibles ?",
          "options": [
            "$12$",
            "$6$",
            "$8$",
            "$16$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec remise : $4^2 = 16$ résultats."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p08_q4",
          "type": "mcq",
          "prompt": "Quel est le complémentaire de « tirer au moins $3$ éléments » ?",
          "options": [
            "Tirer au plus $3$ éléments",
            "Tirer au plus $2$ éléments",
            "Tirer exactement $3$ éléments",
            "Tirer au moins $4$ éléments"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le complémentaire de « au moins $k$ » est « au plus $k - 1$ », ici au plus $2$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p08_q5",
          "type": "mcq",
          "prompt": "Dans le développement de $(a + b)^n$, quels sont les coefficients des termes ?",
          "options": [
            "Les arrangements $A_n^k$",
            "Les factorielles $k!$",
            "Les combinaisons $C_n^k$",
            "Les puissances $n^k$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le binôme de Newton fait intervenir les coefficients $C_n^k$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p08_q6",
          "type": "mcq",
          "prompt": "Quel est le coefficient de $b^2$ dans le développement de $(3 + b)^4$ ?",
          "options": [
            "$6 \\times 3^2 = 54$",
            "$4 \\times 3^2 = 36$",
            "$6$",
            "$3^2 = 9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme en $b^2$ est $C_4^2 \\times 3^2 b^2 = 6 \\times 9 \\times b^2$ : le coefficient de $b^2$ est $54$."
        },
        {
          "id": "premiere_d_maths_numerique_l02_denombrement_p08_q7",
          "type": "mcq",
          "prompt": "Dans la situation d’évaluation, quel tirage de deux cartons parmi quatre est le plus avantageux ?",
          "options": [
            "Le tirage simultané",
            "Le tirage successif sans remise",
            "Le tirage successif avec remise",
            "Les trois tirages se valent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec $16$ résultats contre $12$ et $6$, le tirage successif avec remise est le plus avantageux."
        }
      ]
    }
  ]
};
