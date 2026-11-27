import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Systèmes d’équations linéaires dans R2 et R3 » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Systèmes d’équations linéaires dans R2 et R3 » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L13_SYSTEMES_EQUATIONS_LINEAIRES: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 13,
  "title": "Leçon 13 : Systèmes d’équations linéaires dans R2 et R3",
  "summary": "La leçon définit les systèmes de deux équations linéaires dans R2, leur déterminant et le nombre de leurs solutions, puis les méthodes de résolution (déterminant, substitution, combinaison, graphique) avant les systèmes de trois équations dans R3 résolus par substitution et par le pivot de Gauss.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Systèmes d’équations linéaires dans R2 et R3 » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01",
      "order": 1,
      "title": "Système de deux équations et déterminant",
      "summary": "Définir un système de deux équations linéaires dans R2 et calculer son déterminant.",
      "conceptExplanation": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ est formé de deux équations du premier degré à deux inconnues $(x ; y)$, écrites $ax + by = c$ et $a'x + b'y = c'$ où $a$, $b$, $c$, $a'$, $b'$ et $c'$ sont des nombres réels.\nOn appelle déterminant du système le nombre réel $ab' - a'b$.\nExemple de la leçon : le déterminant du système formé de $2x + 3y = 1$ et $5x + y = 0$ est $-13$.",
      "keyRule": "Le déterminant se calcule en croisant les coefficients : produit de la diagonale principale moins produit de l’autre diagonale.",
      "formulas": [
        {
          "name": "Déterminant du système",
          "formula": "D = ab' - a'b"
        }
      ],
      "workedExample": {
        "title": "Le déterminant de l’exemple de la leçon",
        "statement": "Calcule le déterminant du système formé des équations $2x + 3y = 1$ et $5x + y = 0$.",
        "methodSteps": [
          "On lit les coefficients : $a = 2$, $b = 3$, $a' = 5$ et $b' = 1$.",
          "On applique la formule : $D = 2 \\times 1 - 5 \\times 3$.",
          "On obtient $D = 2 - 15 = -13$."
        ],
        "conclusion": "Le déterminant de ce système est $-13$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système de deux équations dans R2",
          "stepTheme": "Le système de deux équations dans R2",
          "stepBadge": "Le système de deux équations dans R2",
          "paragraphText": "• Définition : un système de deux équations du premier degré à deux inconnues $(x ; y)$ s’écrit avec des réels $a$, $b$, $c$, $a'$, $b'$ et $c'$.\nRésoudre le système, c’est trouver tous les couples $(x ; y)$ qui vérifient les deux équations à la fois.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q1",
            "type": "mcq",
            "prompt": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ comporte :",
            "options": [
              "Deux équations du premier degré à deux inconnues",
              "Trois équations à trois inconnues",
              "Une seule équation à deux inconnues",
              "Deux équations du second degré"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, le système rassemble deux équations du premier degré aux deux inconnues $x$ et $y$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le déterminant du système",
          "stepTheme": "Le déterminant du système",
          "stepBadge": "Le déterminant du système",
          "paragraphText": "• Définition : on appelle déterminant du système le nombre réel $ab' - a'b$.\nIl se note comme un tableau à deux lignes formé des coefficients de $x$ et de $y$.",
          "formula": {
            "name": "Déterminant",
            "formula": "D = ab' - a'b"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q2",
            "type": "mcq",
            "prompt": "Le déterminant du système d’équations $ax + by = c$ et $a'x + b'y = c'$ est :",
            "options": [
              "$ab - a'b'$",
              "$aa' + bb'$",
              "$ab' - a'b$",
              "$a'b' - ab$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le déterminant vaut $ab' - a'b$ : on croise les coefficients des deux lignes."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Calculer un déterminant : l’exemple de la leçon",
          "stepTheme": "Calculer un déterminant : l’exemple de la leçon",
          "stepBadge": "Calculer un déterminant : l’exemple de la leçon",
          "paragraphText": "• Exemple de la leçon : pour le système formé de $2x + 3y = 1$ et $5x + y = 0$, les coefficients sont $2$, $3$, $5$ et $1$.\nLe déterminant vaut $2 \\times 1 - 5 \\times 3$, c’est-à-dire $-13$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q3",
            "type": "mcq",
            "prompt": "Le déterminant du système formé de $2x + 3y = 1$ et $5x + y = 0$ est :",
            "options": [
              "$17$",
              "$-7$",
              "$13$",
              "$-13$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $2 \\times 1 - 5 \\times 3 = 2 - 15 = -13$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Repérer les coefficients avant de calculer",
          "stepTheme": "Repérer les coefficients avant de calculer",
          "stepBadge": "Repérer les coefficients avant de calculer",
          "paragraphText": "• Méthode : on écrit d’abord chaque équation sous la forme $ax + by = c$, puis on lit $a$ et $b$ sur la première ligne, $a'$ et $b'$ sur la deuxième.\nPour le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$, on lit $a = 1$, $b = 2$, $a' = 3$ et $b' = -1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q4",
            "type": "mcq",
            "prompt": "Pour le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$, le déterminant est :",
            "options": [
              "$5$",
              "$-1$",
              "$7$",
              "$-7$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $1 \\times (-1) - 3 \\times 2 = -1 - 6 = -7$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le piège de l’ordre des coefficients",
          "stepTheme": "Le piège de l’ordre des coefficients",
          "stepBadge": "Le piège de l’ordre des coefficients",
          "paragraphText": "• Piège : le déterminant $ab' - a'b$ n’est pas symétrique ; échanger les deux lignes change son signe.\nIl faut garder l’ordre des équations tel qu’il est donné dans le système.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q5",
            "type": "mcq",
            "prompt": "Que se passe-t-il si on échange les deux équations d’un système avant de calculer son déterminant ?",
            "options": [
              "Le déterminant devient nul",
              "Le déterminant est doublé",
              "Le déterminant ne change pas",
              "Le déterminant change de signe"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Échanger les lignes transforme $ab' - a'b$ en $a'b - ab'$, c’est-à-dire l’opposé du déterminant initial."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un déterminant nul : le système S2 de la fixation",
          "stepTheme": "Un déterminant nul : le système S2 de la fixation",
          "stepBadge": "Un déterminant nul : le système S2 de la fixation",
          "paragraphText": "• Exercice de fixation : pour le système formé de $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$, le déterminant vaut $3 \\times 10 - 2 \\times 15$.\nCe calcul donne $0$ : les coefficients des deux équations sont proportionnels.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q6",
            "type": "mcq",
            "prompt": "Le déterminant du système formé de $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$ est :",
            "options": [
              "$0$",
              "$30$",
              "$-30$",
              "$60$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $3 \\times 10 - 2 \\times 15 = 30 - 30 = 0$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q1",
          "type": "mcq",
          "prompt": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ comporte :",
          "options": [
            "Deux équations du premier degré à deux inconnues",
            "Trois équations à trois inconnues",
            "Une seule équation à deux inconnues",
            "Deux équations du second degré"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, le système rassemble deux équations du premier degré aux deux inconnues $x$ et $y$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q2",
          "type": "mcq",
          "prompt": "Le déterminant du système d’équations $ax + by = c$ et $a'x + b'y = c'$ est :",
          "options": [
            "$ab - a'b'$",
            "$aa' + bb'$",
            "$ab' - a'b$",
            "$a'b' - ab$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le déterminant vaut $ab' - a'b$ : on croise les coefficients des deux lignes."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q3",
          "type": "mcq",
          "prompt": "Le déterminant du système formé de $2x + 3y = 1$ et $5x + y = 0$ est :",
          "options": [
            "$17$",
            "$-7$",
            "$13$",
            "$-13$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $2 \\times 1 - 5 \\times 3 = 2 - 15 = -13$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q4",
          "type": "mcq",
          "prompt": "Pour le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$, le déterminant est :",
          "options": [
            "$5$",
            "$-1$",
            "$7$",
            "$-7$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $1 \\times (-1) - 3 \\times 2 = -1 - 6 = -7$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q5",
          "type": "mcq",
          "prompt": "Que se passe-t-il si on échange les deux équations d’un système avant de calculer son déterminant ?",
          "options": [
            "Le déterminant devient nul",
            "Le déterminant est doublé",
            "Le déterminant ne change pas",
            "Le déterminant change de signe"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Échanger les lignes transforme $ab' - a'b$ en $a'b - ab'$, c’est-à-dire l’opposé du déterminant initial."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p01_q6",
          "type": "mcq",
          "prompt": "Le déterminant du système formé de $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$ est :",
          "options": [
            "$0$",
            "$30$",
            "$-30$",
            "$60$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $3 \\times 10 - 2 \\times 15 = 30 - 30 = 0$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02",
      "order": 2,
      "title": "Nombre de solutions d’un système dans R2",
      "summary": "Utiliser le déterminant pour déterminer le nombre de solutions d’un système de deux équations.",
      "conceptExplanation": "On considère un système de deux équations du premier degré à deux inconnues, avec $(a, b) \\neq (0, 0)$ et $(a', b') \\neq (0, 0)$.\nPropriété : le système admet une unique solution si et seulement si son déterminant est différent de $0$.\nRemarque : le système n’admet pas de solution ou admet une infinité de solutions si et seulement si son déterminant est égal à $0$.\nDans l’exercice de fixation, le premier système a un déterminant égal à $-7$ et une unique solution ; le second a un déterminant égal à $0$.",
      "keyRule": "Avant de résoudre, calcule le déterminant : non nul, la solution est unique ; nul, il faut tester un couple pour trancher.",
      "formulas": [
        {
          "name": "Unicité de la solution",
          "formula": "D \\neq 0"
        }
      ],
      "workedExample": {
        "title": "Le nombre de solutions des deux systèmes de la fixation",
        "statement": "Détermine le nombre de solutions de chacun des deux systèmes de l’exercice de fixation.",
        "methodSteps": [
          "Le premier système a pour déterminant $1 \\times (-1) - 3 \\times 2 = -7$, différent de $0$.",
          "Le second système a pour déterminant $3 \\times 10 - 2 \\times 15 = 0$."
        ],
        "conclusion": "Le premier système admet exactement un couple de solutions ; le second n’en admet aucun ou en admet une infinité."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété du nombre de solutions",
          "stepTheme": "La propriété du nombre de solutions",
          "stepBadge": "La propriété du nombre de solutions",
          "paragraphText": "• Propriété : lorsque $(a, b) \\neq (0, 0)$ et $(a', b') \\neq (0, 0)$, le système admet une unique solution si et seulement si son déterminant est différent de $0$.\nC’est le test à faire avant toute résolution.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q1",
            "type": "mcq",
            "prompt": "Un système de deux équations dans $\\mathbb{R}^2$ admet une unique solution si et seulement si :",
            "options": [
              "Ses coefficients sont tous non nuls",
              "Ses deux équations sont identiques",
              "Son déterminant est égal à $0$",
              "Son déterminant est différent de $0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La propriété de la leçon lie l’unicité de la solution à un déterminant non nul."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La remarque sur le déterminant nul",
          "stepTheme": "La remarque sur le déterminant nul",
          "stepBadge": "La remarque sur le déterminant nul",
          "paragraphText": "• Remarque : le système n’admet pas de solution ou admet une infinité de solutions si et seulement si son déterminant est égal à $0$.\nUn déterminant nul ne permet donc pas de conclure seul : il faut tester un couple dans les équations.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q2",
            "type": "mcq",
            "prompt": "Si le déterminant d’un système est nul, alors le système :",
            "options": [
              "Admet exactement une solution",
              "Admet toujours une infinité de solutions",
              "N’admet aucune solution ou admet une infinité de solutions",
              "Admet exactement deux solutions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la remarque de la leçon : déterminant nul signifie zéro solution ou une infinité de solutions."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le système S1 de la fixation : une solution",
          "stepTheme": "Le système S1 de la fixation : une solution",
          "stepBadge": "Le système S1 de la fixation : une solution",
          "paragraphText": "• Exercice de fixation : le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ a pour déterminant $-7$.\nComme $-7 \\neq 0$, ce système admet exactement un couple de solutions.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q3",
            "type": "mcq",
            "prompt": "Le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ admet :",
            "options": [
              "Aucune solution",
              "Une infinité de solutions",
              "Exactement deux solutions",
              "Exactement un couple de solutions"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Son déterminant vaut $-7$, donc il est non nul : le système admet un unique couple de solutions."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le système S2 de la fixation : déterminant nul",
          "stepTheme": "Le système S2 de la fixation : déterminant nul",
          "stepBadge": "Le système S2 de la fixation : déterminant nul",
          "paragraphText": "• Exercice de fixation : le système formé de $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$ a pour déterminant $0$.\nIl n’admet donc pas de couples solutions, ou il en admet une infinité.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q4",
            "type": "mcq",
            "prompt": "Pour le système formé de $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$, on peut affirmer que :",
            "options": [
              "Il n’a pas de solution ou il en a une infinité",
              "Il a exactement une solution",
              "Il a exactement deux solutions",
              "Son déterminant vaut $-7$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Son déterminant est nul, donc seuls deux cas sont possibles : aucune solution ou une infinité de solutions."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Trancher quand le déterminant est nul",
          "stepTheme": "Trancher quand le déterminant est nul",
          "stepBadge": "Trancher quand le déterminant est nul",
          "paragraphText": "• Méthode : quand le déterminant est nul, on choisit un couple qui vérifie l’une des équations et on le teste dans l’autre.\nS’il vérifie aussi la deuxième équation, le système a une infinité de solutions ; sinon, il n’en a aucune.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q5",
            "type": "mcq",
            "prompt": "Le déterminant d’un système est nul et un couple vérifie la première équation mais pas la deuxième. Alors le système :",
            "options": [
              "A une infinité de solutions",
              "A exactement une solution",
              "N’a aucune solution",
              "A exactement trois solutions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un couple de la première équation qui échoue dans la deuxième montre que les deux équations sont incompatibles : aucune solution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas conclure trop vite avec un déterminant nul",
          "stepTheme": "Ne pas conclure trop vite avec un déterminant nul",
          "stepBadge": "Ne pas conclure trop vite avec un déterminant nul",
          "paragraphText": "• Piège : un déterminant nul ne signifie pas automatiquement « aucune solution ».\nDans l’exercice 1 de la leçon, un système de déterminant nul n’a aucune solution, mais dans l’exercice 2, un autre système de déterminant nul a une infinité de solutions.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q6",
            "type": "mcq",
            "prompt": "Un déterminant nul permet-il de conclure directement que le système n’a aucune solution ?",
            "options": [
              "Oui, si les coefficients sont entiers",
              "Non, car le déterminant est alors non calculable",
              "Oui, toujours",
              "Non, il faut tester un couple dans les équations"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le déterminant nul laisse deux cas possibles ; seul le test d’un couple permet de trancher."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q1",
          "type": "mcq",
          "prompt": "Un système de deux équations dans $\\mathbb{R}^2$ admet une unique solution si et seulement si :",
          "options": [
            "Ses coefficients sont tous non nuls",
            "Ses deux équations sont identiques",
            "Son déterminant est égal à $0$",
            "Son déterminant est différent de $0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La propriété de la leçon lie l’unicité de la solution à un déterminant non nul."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q2",
          "type": "mcq",
          "prompt": "Si le déterminant d’un système est nul, alors le système :",
          "options": [
            "Admet exactement une solution",
            "Admet toujours une infinité de solutions",
            "N’admet aucune solution ou admet une infinité de solutions",
            "Admet exactement deux solutions"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la remarque de la leçon : déterminant nul signifie zéro solution ou une infinité de solutions."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q3",
          "type": "mcq",
          "prompt": "Le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ admet :",
          "options": [
            "Aucune solution",
            "Une infinité de solutions",
            "Exactement deux solutions",
            "Exactement un couple de solutions"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Son déterminant vaut $-7$, donc il est non nul : le système admet un unique couple de solutions."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q4",
          "type": "mcq",
          "prompt": "Pour le système formé de $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$, on peut affirmer que :",
          "options": [
            "Il n’a pas de solution ou il en a une infinité",
            "Il a exactement une solution",
            "Il a exactement deux solutions",
            "Son déterminant vaut $-7$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Son déterminant est nul, donc seuls deux cas sont possibles : aucune solution ou une infinité de solutions."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q5",
          "type": "mcq",
          "prompt": "Le déterminant d’un système est nul et un couple vérifie la première équation mais pas la deuxième. Alors le système :",
          "options": [
            "A une infinité de solutions",
            "A exactement une solution",
            "N’a aucune solution",
            "A exactement trois solutions"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un couple de la première équation qui échoue dans la deuxième montre que les deux équations sont incompatibles : aucune solution."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p02_q6",
          "type": "mcq",
          "prompt": "Un déterminant nul permet-il de conclure directement que le système n’a aucune solution ?",
          "options": [
            "Oui, si les coefficients sont entiers",
            "Non, car le déterminant est alors non calculable",
            "Oui, toujours",
            "Non, il faut tester un couple dans les équations"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le déterminant nul laisse deux cas possibles ; seul le test d’un couple permet de trancher."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03",
      "order": 3,
      "title": "Résolution par le déterminant dans R2",
      "summary": "Résoudre un système de deux équations par le calcul des déterminants D, Dx et Dy.",
      "conceptExplanation": "Cas général : pour un système de déterminant $D$, lorsque $D \\neq 0$, le système admet une unique solution. On calcule $D_x$ en remplaçant la colonne des coefficients de $x$ par celle des seconds membres, et $D_y$ en remplaçant la colonne des coefficients de $y$.\nLa solution est alors $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$.\nExemple de la leçon : le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ a pour déterminants $D = -7$, $D_x = -1$, $D_y = -17$, et son unique solution est le couple formé de $\\frac{1}{7}$ et de $\\frac{17}{7}$.",
      "keyRule": "Trois déterminants suffisent : D pour décider, Dx et Dy pour obtenir x et y.",
      "formulas": [
        {
          "name": "Déterminant en x",
          "formula": "D_x = cb' - c'b"
        },
        {
          "name": "Déterminant en y",
          "formula": "D_y = ac' - a'c"
        },
        {
          "name": "Solution unique",
          "formula": "x = \\frac{D_x}{D} \\text{ et } y = \\frac{D_y}{D}"
        }
      ],
      "workedExample": {
        "title": "Résoudre le système S2 par les déterminants",
        "statement": "Résous par les déterminants le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$.",
        "methodSteps": [
          "On réécrit le système : $x + 2y = 5$ et $3x - y = -2$.",
          "On calcule $D = -7$, $D_x = -1$ et $D_y = -17$.",
          "On applique les formules : $x = \\frac{-1}{-7}$ et $y = \\frac{-17}{-7}$."
        ],
        "conclusion": "L’unique couple de solutions est formé de $\\frac{1}{7}$ et de $\\frac{17}{7}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les trois déterminants de la résolution",
          "stepTheme": "Les trois déterminants de la résolution",
          "stepBadge": "Les trois déterminants de la résolution",
          "paragraphText": "• Synthèse de la leçon : quand le déterminant $D$ est non nul, on calcule deux autres déterminants, $D_x$ et $D_y$, en remplaçant successivement une colonne de coefficients par la colonne des seconds membres.\nLa solution est alors donnée par des quotients de ces déterminants.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q1",
            "type": "mcq",
            "prompt": "Quand $D \\neq 0$, comment obtient-on le déterminant $D_x$ ?",
            "options": [
              "En remplaçant la colonne des coefficients de $y$ par celle des seconds membres",
              "En échangeant les deux lignes du système",
              "En remplaçant la colonne des coefficients de $x$ par celle des seconds membres",
              "En additionnant les deux équations"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour $D_x$, la colonne des coefficients de $x$ est remplacée par la colonne des seconds membres $c$ et $c'$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les formules de la solution unique",
          "stepTheme": "Les formules de la solution unique",
          "stepBadge": "Les formules de la solution unique",
          "paragraphText": "• Propriété : si $D \\neq 0$, l’unique solution est le couple formé des deux quotients de $D_x$ par $D$ et de $D_y$ par $D$.\nOn retient : l’inconnue $x$ utilise $D_x$ et l’inconnue $y$ utilise $D_y$.",
          "formula": {
            "name": "Solution par les déterminants",
            "formula": "x = \\frac{D_x}{D} \\text{ et } y = \\frac{D_y}{D}"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q2",
            "type": "mcq",
            "prompt": "Si $D \\neq 0$, l’unique solution $(x ; y)$ du système vérifie :",
            "options": [
              "$x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$",
              "$x = \\frac{D_y}{D}$ et $y = \\frac{D_x}{D}$",
              "$x = \\frac{D}{D_x}$ et $y = \\frac{D}{D_y}$",
              "$x = D_x + D$ et $y = D_y + D$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les formules de la synthèse sont $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les déterminants du système S2",
          "stepTheme": "Les déterminants du système S2",
          "stepBadge": "Les déterminants du système S2",
          "paragraphText": "• Exemple de la leçon : pour le système formé de $x + 2y - 5 = 0$ et $3x - y + 2 = 0$, on réécrit $x + 2y = 5$ et $3x - y = -2$.\nOn obtient $D = -7$, $D_x = -1$ et $D_y = -17$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q3",
            "type": "mcq",
            "prompt": "Pour ce système, que vaut $D_x$ ?",
            "options": [
              "$-17$",
              "$-7$",
              "$1$",
              "$-1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On remplace la colonne de $x$ par les seconds membres : $D_x = 5 \\times (-1) - (-2) \\times 2 = -5 + 4 = -1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La solution du système S2",
          "stepTheme": "La solution du système S2",
          "stepBadge": "La solution du système S2",
          "paragraphText": "• Exemple de la leçon : avec $D = -7$, $D_x = -1$ et $D_y = -17$, les formules donnent la valeur de $x$ puis celle de $y$.\nL’unique couple de solutions est formé de deux fractions de dénominateur $7$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q4",
            "type": "mcq",
            "prompt": "L’unique solution du système formé de $x + 2y = 5$ et $3x - y = -2$ est :",
            "options": [
              "Le couple formé de $\\frac{1}{7}$ et de $\\frac{17}{7}$",
              "Le couple $(1 ; 2)$",
              "Le couple formé de $-1$ et de $-17$",
              "Le couple formé de $\\frac{17}{7}$ et de $\\frac{1}{7}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $x = \\frac{-1}{-7} = \\frac{1}{7}$ et $y = \\frac{-17}{-7} = \\frac{17}{7}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un système sans solution malgré le calcul",
          "stepTheme": "Un système sans solution malgré le calcul",
          "stepBadge": "Un système sans solution malgré le calcul",
          "paragraphText": "• Exemple de la leçon : le système formé de $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$ a un déterminant nul.\nLe couple formé de $-\\frac{2}{3}$ et de $0$ vérifie la première équation mais pas la deuxième : le système n’admet aucun couple solution.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi ce système n’admet-il aucune solution ?",
            "options": [
              "Parce que la méthode du déterminant est interdite",
              "Parce que son déterminant vaut $-7$",
              "Parce qu’un couple de la première équation ne vérifie pas la deuxième",
              "Parce que ses coefficients sont trop grands"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le déterminant est nul et le test du couple montre l’incompatibilité des deux équations : aucune solution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas appliquer les formules si D est nul",
          "stepTheme": "Ne pas appliquer les formules si D est nul",
          "stepBadge": "Ne pas appliquer les formules si D est nul",
          "paragraphText": "• Piège : les formules donnant $x$ et $y$ exigent $D \\neq 0$, car on divise par $D$.\nSi $D = 0$, on revient au test d’un couple pour décider entre aucune solution et une infinité de solutions.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q6",
            "type": "mcq",
            "prompt": "Peut-on appliquer les formules $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$ quand $D = 0$ ?",
            "options": [
              "Non, car on ne peut pas diviser par $0$",
              "Oui, en échangeant $x$ et $y$",
              "Oui, sans condition",
              "Oui, si $D_x$ est nul aussi"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La division par $D$ impose $D \\neq 0$ ; c’est la condition d’application des formules."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q1",
          "type": "mcq",
          "prompt": "Quand $D \\neq 0$, comment obtient-on le déterminant $D_x$ ?",
          "options": [
            "En remplaçant la colonne des coefficients de $y$ par celle des seconds membres",
            "En échangeant les deux lignes du système",
            "En remplaçant la colonne des coefficients de $x$ par celle des seconds membres",
            "En additionnant les deux équations"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour $D_x$, la colonne des coefficients de $x$ est remplacée par la colonne des seconds membres $c$ et $c'$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q2",
          "type": "mcq",
          "prompt": "Si $D \\neq 0$, l’unique solution $(x ; y)$ du système vérifie :",
          "options": [
            "$x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$",
            "$x = \\frac{D_y}{D}$ et $y = \\frac{D_x}{D}$",
            "$x = \\frac{D}{D_x}$ et $y = \\frac{D}{D_y}$",
            "$x = D_x + D$ et $y = D_y + D$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les formules de la synthèse sont $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q3",
          "type": "mcq",
          "prompt": "Pour ce système, que vaut $D_x$ ?",
          "options": [
            "$-17$",
            "$-7$",
            "$1$",
            "$-1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On remplace la colonne de $x$ par les seconds membres : $D_x = 5 \\times (-1) - (-2) \\times 2 = -5 + 4 = -1$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q4",
          "type": "mcq",
          "prompt": "L’unique solution du système formé de $x + 2y = 5$ et $3x - y = -2$ est :",
          "options": [
            "Le couple formé de $\\frac{1}{7}$ et de $\\frac{17}{7}$",
            "Le couple $(1 ; 2)$",
            "Le couple formé de $-1$ et de $-17$",
            "Le couple formé de $\\frac{17}{7}$ et de $\\frac{1}{7}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $x = \\frac{-1}{-7} = \\frac{1}{7}$ et $y = \\frac{-17}{-7} = \\frac{17}{7}$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi ce système n’admet-il aucune solution ?",
          "options": [
            "Parce que la méthode du déterminant est interdite",
            "Parce que son déterminant vaut $-7$",
            "Parce qu’un couple de la première équation ne vérifie pas la deuxième",
            "Parce que ses coefficients sont trop grands"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le déterminant est nul et le test du couple montre l’incompatibilité des deux équations : aucune solution."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p03_q6",
          "type": "mcq",
          "prompt": "Peut-on appliquer les formules $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$ quand $D = 0$ ?",
          "options": [
            "Non, car on ne peut pas diviser par $0$",
            "Oui, en échangeant $x$ et $y$",
            "Oui, sans condition",
            "Oui, si $D_x$ est nul aussi"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La division par $D$ impose $D \\neq 0$ ; c’est la condition d’application des formules."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04",
      "order": 4,
      "title": "Substitution, combinaison et résolution graphique",
      "summary": "Résoudre un système de deux équations par substitution, par combinaison ou graphiquement.",
      "conceptExplanation": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ peut se résoudre par le calcul, à l’aide de la substitution, de la combinaison ou du déterminant, ou bien graphiquement.\nPar substitution, on exprime une inconnue en fonction de l’autre et on remplace ; par combinaison, on élimine une inconnue en combinant les équations.\nGraphiquement, la solution est le point d’intersection des deux droites : dans l’exemple de la leçon, les droites d’équations $x + 2y - 5 = 0$ et $x - y + 1 = 0$ se coupent au point de coordonnées $(1 ; 2)$, qui est la solution du système.",
      "keyRule": "Substitution et combinaison donnent le même couple ; le graphique le lit à l’intersection des deux droites.",
      "formulas": [],
      "workedExample": {
        "title": "Le premier système de l’exercice 2 par substitution",
        "statement": "Résous par substitution le système formé de $2x + 3y = 2$ et $x + 2y = -3$.",
        "methodSteps": [
          "La deuxième équation donne $x = -3 - 2y$.",
          "On remplace dans la première équation : $2(-3 - 2y) + 3y = 2$, d’où $y = -8$.",
          "On calcule $x = -3 - 2 \\times (-8) = 13$."
        ],
        "conclusion": "La solution du système est le couple $(13 ; -8)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La méthode de substitution",
          "stepTheme": "La méthode de substitution",
          "stepBadge": "La méthode de substitution",
          "paragraphText": "• Méthode : par substitution, on exprime une inconnue en fonction de l’autre à partir d’une équation, puis on remplace dans l’autre équation.\nDans l’exercice 2 de la leçon, la deuxième équation du premier système donne $x = -3 - 2y$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q1",
            "type": "mcq",
            "prompt": "Dans la méthode de substitution, quelle est la première étape ?",
            "options": [
              "Additionner les deux équations",
              "Exprimer une inconnue en fonction de l’autre",
              "Calculer le déterminant",
              "Tracer les deux droites"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On commence par isoler une inconnue dans une équation pour la remplacer dans l’autre."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le premier système de l’exercice 2 par substitution",
          "stepTheme": "Le premier système de l’exercice 2 par substitution",
          "stepBadge": "Le premier système de l’exercice 2 par substitution",
          "paragraphText": "• Exercice 2 de la leçon : pour le système formé de $2x + 3y = 2$ et $x + 2y = -3$, on remplace $x$ par $-3 - 2y$ dans la première équation.\nOn obtient $y = -8$, puis $x = 13$ en revenant dans l’expression de $x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q2",
            "type": "mcq",
            "prompt": "La solution du système formé de $2x + 3y = 2$ et $x + 2y = -3$ est :",
            "options": [
              "Le couple $(-8 ; 13)$",
              "Le couple $(13 ; -8)$",
              "Le couple $(3 ; -8)$",
              "Le couple $(13 ; 8)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La résolution donne $y = -8$ puis $x = -3 - 2 \\times (-8) = 13$ : le couple solution est $(13 ; -8)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode de combinaison",
          "stepTheme": "La méthode de combinaison",
          "stepBadge": "La méthode de combinaison",
          "paragraphText": "• Méthode : par combinaison, on multiplie les équations par des nombres bien choisis puis on les ajoute ou on les retranche pour éliminer une inconnue.\nPour le même système, la combinaison de la première équation et du double de la deuxième donne directement $y = -8$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q3",
            "type": "mcq",
            "prompt": "Dans la méthode de combinaison, à quoi servent les multiplications des équations ?",
            "options": [
              "À rendre les équations identiques",
              "À changer la solution du système",
              "À éliminer une inconnue par addition ou soustraction",
              "À calculer le déterminant"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On choisit les coefficients pour qu’une inconnue disparaisse quand on combine les deux équations."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le deuxième système de l’exercice 2",
          "stepTheme": "Le deuxième système de l’exercice 2",
          "stepBadge": "Le deuxième système de l’exercice 2",
          "paragraphText": "• Exercice 2 de la leçon : le système formé de $3x - y = 1$ et $5x - 2y = -1$ se résout par substitution avec $y = 3x - 1$.\nPar combinaison, le calcul donne $x = 3$, puis $y = 8$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q4",
            "type": "mcq",
            "prompt": "La solution du système formé de $3x - y = 1$ et $5x - 2y = -1$ est :",
            "options": [
              "Le couple $(3 ; 8)$",
              "Le couple $(8 ; 3)$",
              "Le couple $(3 ; -8)$",
              "Le couple $(-3 ; 8)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On trouve $x = 3$, puis $y = 3 \\times 3 - 1 = 8$ : le couple solution est $(3 ; 8)$, qui vérifie les deux équations."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La résolution graphique",
          "stepTheme": "La résolution graphique",
          "stepBadge": "La résolution graphique",
          "paragraphText": "• Méthode : graphiquement, chaque équation est l’équation d’une droite ; la solution du système est le couple de coordonnées du point d’intersection des deux droites.\nExemple de la leçon : les droites d’équations $x + 2y - 5 = 0$ et $x - y + 1 = 0$ sont sécantes au point $A$ de coordonnées $(1 ; 2)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q5",
            "type": "mcq",
            "prompt": "Graphiquement, la solution d’un système de deux équations est :",
            "options": [
              "Le milieu des deux droites",
              "Le point d’intersection des deux droites",
              "L’intersection de chaque droite avec l’axe des abscisses",
              "Le point le plus proche de l’origine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque équation correspond à une droite ; leur point commun donne le couple solution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Vérifier le couple trouvé dans les deux équations",
          "stepTheme": "Vérifier le couple trouvé dans les deux équations",
          "stepBadge": "Vérifier le couple trouvé dans les deux équations",
          "paragraphText": "• Piège : une erreur de signe dans une substitution donne souvent un couple qui vérifie une seule des deux équations.\nLe réflexe de fin de résolution est de remplacer le couple trouvé dans les deux équations du système.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q6",
            "type": "mcq",
            "prompt": "Le couple $(13 ; -8)$ est-il solution du système formé de $2x + 3y = 2$ et $x + 2y = -3$ ?",
            "options": [
              "Non, il ne vérifie que la deuxième équation",
              "Non, il ne vérifie aucune équation",
              "Oui, mais seulement par la méthode graphique",
              "Oui, il vérifie les deux équations"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On vérifie : $2 \\times 13 + 3 \\times (-8) = 2$ et $13 + 2 \\times (-8) = -3$. Le couple vérifie bien les deux équations."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q1",
          "type": "mcq",
          "prompt": "Dans la méthode de substitution, quelle est la première étape ?",
          "options": [
            "Additionner les deux équations",
            "Exprimer une inconnue en fonction de l’autre",
            "Calculer le déterminant",
            "Tracer les deux droites"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On commence par isoler une inconnue dans une équation pour la remplacer dans l’autre."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q2",
          "type": "mcq",
          "prompt": "La solution du système formé de $2x + 3y = 2$ et $x + 2y = -3$ est :",
          "options": [
            "Le couple $(-8 ; 13)$",
            "Le couple $(13 ; -8)$",
            "Le couple $(3 ; -8)$",
            "Le couple $(13 ; 8)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La résolution donne $y = -8$ puis $x = -3 - 2 \\times (-8) = 13$ : le couple solution est $(13 ; -8)$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q3",
          "type": "mcq",
          "prompt": "Dans la méthode de combinaison, à quoi servent les multiplications des équations ?",
          "options": [
            "À rendre les équations identiques",
            "À changer la solution du système",
            "À éliminer une inconnue par addition ou soustraction",
            "À calculer le déterminant"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On choisit les coefficients pour qu’une inconnue disparaisse quand on combine les deux équations."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q4",
          "type": "mcq",
          "prompt": "La solution du système formé de $3x - y = 1$ et $5x - 2y = -1$ est :",
          "options": [
            "Le couple $(3 ; 8)$",
            "Le couple $(8 ; 3)$",
            "Le couple $(3 ; -8)$",
            "Le couple $(-3 ; 8)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On trouve $x = 3$, puis $y = 3 \\times 3 - 1 = 8$ : le couple solution est $(3 ; 8)$, qui vérifie les deux équations."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q5",
          "type": "mcq",
          "prompt": "Graphiquement, la solution d’un système de deux équations est :",
          "options": [
            "Le milieu des deux droites",
            "Le point d’intersection des deux droites",
            "L’intersection de chaque droite avec l’axe des abscisses",
            "Le point le plus proche de l’origine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque équation correspond à une droite ; leur point commun donne le couple solution."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p04_q6",
          "type": "mcq",
          "prompt": "Le couple $(13 ; -8)$ est-il solution du système formé de $2x + 3y = 2$ et $x + 2y = -3$ ?",
          "options": [
            "Non, il ne vérifie que la deuxième équation",
            "Non, il ne vérifie aucune équation",
            "Oui, mais seulement par la méthode graphique",
            "Oui, il vérifie les deux équations"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On vérifie : $2 \\times 13 + 3 \\times (-8) = 2$ et $13 + 2 \\times (-8) = -3$. Le couple vérifie bien les deux équations."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05",
      "order": 5,
      "title": "Systèmes de trois équations dans R3",
      "summary": "Définir un système de trois équations, reconnaître un système triangulaire et résoudre par substitution.",
      "conceptExplanation": "On appelle système linéaire de trois équations du premier degré à trois inconnues $(x ; y ; z)$ un système de trois équations comportant ces trois inconnues.\nUn système triangulaire est un système où les équations perdent progressivement des inconnues, jusqu’à une dernière équation à une seule inconnue ; il se résout en remontant.\nPour résoudre un système de trois équations dans $\\mathbb{R}^3$, on peut utiliser la substitution : dans l’exemple de la leçon, on exprime $x$ dès la première équation, on obtient un système de deux équations en $y$ et $z$, et la solution finale est le triplet $(2 ; 1 ; 3)$.",
      "keyRule": "Dans R3, ramène toujours le problème vers un système triangulaire ou un système de deux équations déjà connu.",
      "formulas": [
        {
          "name": "Forme triangulaire",
          "formula": "ax + by + cz = m"
        }
      ],
      "workedExample": {
        "title": "Le système de l’exemple résolu par substitution",
        "statement": "Résous par substitution le système formé de $x - 2y - 3z = -9$, $2x + 5y - 3z = 0$ et $x + y + 2z = 9$.",
        "methodSteps": [
          "La première équation donne $x = 2y + 3z - 9$.",
          "La substitution dans les deux autres équations donne le système formé de $9y + 3z = 18$ et $3y + 5z = 18$.",
          "Ce système donne $y = 1$ et $z = 3$, puis $x = 2$."
        ],
        "conclusion": "L’ensemble des solutions est le triplet $(2 ; 1 ; 3)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système de trois équations dans R3",
          "stepTheme": "Le système de trois équations dans R3",
          "stepBadge": "Le système de trois équations dans R3",
          "paragraphText": "• Définition : un système linéaire de trois équations du premier degré à trois inconnues $(x ; y ; z)$ rassemble trois équations comportant chacune les trois inconnues.\nUne solution est un triplet $(x ; y ; z)$ qui vérifie les trois équations à la fois.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q1",
            "type": "mcq",
            "prompt": "Une solution d’un système de trois équations dans $\\mathbb{R}^3$ est :",
            "options": [
              "Un couple de réels",
              "Un triplet de réels vérifiant les trois équations",
              "Un réel unique",
              "Un déterminant non nul"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec trois inconnues, une solution est un triplet $(x ; y ; z)$ qui satisfait les trois équations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le système triangulaire",
          "stepTheme": "Le système triangulaire",
          "stepBadge": "Le système triangulaire",
          "paragraphText": "• Définition : un système triangulaire est un système où la deuxième équation ne contient plus la première inconnue et où la troisième équation ne contient plus qu’une seule inconnue.\nOn le résout en commençant par la dernière équation, puis en remontant.",
          "formula": {
            "name": "Système triangulaire",
            "formula": "c''z = m''"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q2",
            "type": "mcq",
            "prompt": "Dans un système triangulaire, par quelle équation commence-t-on la résolution ?",
            "options": [
              "Par la première équation",
              "Par la deuxième équation",
              "Par la dernière équation, qui donne une inconnue",
              "Par l’équation au hasard"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dernière équation ne contient qu’une inconnue : elle donne sa valeur, puis on remonte de proche en proche."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Reconnaître les exemples de la leçon",
          "stepTheme": "Reconnaître les exemples de la leçon",
          "stepBadge": "Reconnaître les exemples de la leçon",
          "paragraphText": "• Exemples de la leçon : le premier système présenté, avec ses trois équations complètes, est un système général de trois équations.\nLe second, dont les équations se réduisent progressivement à une seule inconnue, est un système triangulaire : sa dernière équation est $3z = 6$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q3",
            "type": "mcq",
            "prompt": "Un système dont la dernière équation est $3z = 6$ et la deuxième $2y + 4z = 0$ est :",
            "options": [
              "Un système de deux équations",
              "Un système triangulaire",
              "Un système sans solution",
              "Un système graphique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les inconnues disparaissent progressivement d’une équation à la suivante : c’est la forme triangulaire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La substitution dans R3 : première étape",
          "stepTheme": "La substitution dans R3 : première étape",
          "stepBadge": "La substitution dans R3 : première étape",
          "paragraphText": "• Exemple de la leçon : pour le système commençant par $x - 2y - 3z = -9$, on exprime $x$ à l’aide de la première équation.\nOn obtient $x = 2y + 3z - 9$, que l’on remplace dans les deux autres équations pour obtenir un système de deux équations en $y$ et $z$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q4",
            "type": "mcq",
            "prompt": "Dans cet exemple, l’expression de $x$ tirée de la première équation est :",
            "options": [
              "$x = -2y - 3z + 9$",
              "$x = 2y - 3z - 9$",
              "$x = 2y + 3z - 9$",
              "$x = 9 - 2y + 3z$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "De $x - 2y - 3z = -9$, on tire $x = 2y + 3z - 9$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La solution du système par substitution",
          "stepTheme": "La solution du système par substitution",
          "stepBadge": "La solution du système par substitution",
          "paragraphText": "• Exemple de la leçon : après la substitution, le système en $y$ et $z$ donne successivement $y = 1$ et $z = 3$.\nEn reportant dans l’expression de $x$, on obtient $x = 2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q5",
            "type": "mcq",
            "prompt": "La solution du système formé de $x - 2y - 3z = -9$, $2x + 5y - 3z = 0$ et $x + y + 2z = 9$ est :",
            "options": [
              "Le triplet $(2 ; 1 ; 3)$",
              "Le triplet $(1 ; 2 ; 3)$",
              "Le triplet $(2 ; 3 ; 1)$",
              "Le triplet $(3 ; 1 ; 2)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On vérifie : $2 - 2 - 9 = -9$, $4 + 5 - 9 = 0$ et $2 + 1 + 6 = 9$. Le triplet solution est $(2 ; 1 ; 3)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Résoudre un système triangulaire de l’exercice 3",
          "stepTheme": "Résoudre un système triangulaire de l’exercice 3",
          "stepBadge": "Résoudre un système triangulaire de l’exercice 3",
          "paragraphText": "• Exercice 3 de la leçon : le système triangulaire formé de $x + 2y + z = 8$, $-3y - 2z = -12$ et $-22z = -66$ se résout en remontant.\nLa dernière équation donne $z = 3$, la deuxième donne alors $y = 2$, puis la première donne $x = 1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q6",
            "type": "mcq",
            "prompt": "La solution de ce système triangulaire est :",
            "options": [
              "Le triplet $(3 ; 2 ; 1)$",
              "Le triplet $(1 ; 3 ; 2)$",
              "Le triplet $(2 ; 1 ; 3)$",
              "Le triplet $(1 ; 2 ; 3)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On remonte : $z = 3$, puis $-3y - 6 = -12$ donne $y = 2$, puis $x + 4 + 3 = 8$ donne $x = 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q1",
          "type": "mcq",
          "prompt": "Une solution d’un système de trois équations dans $\\mathbb{R}^3$ est :",
          "options": [
            "Un couple de réels",
            "Un triplet de réels vérifiant les trois équations",
            "Un réel unique",
            "Un déterminant non nul"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec trois inconnues, une solution est un triplet $(x ; y ; z)$ qui satisfait les trois équations."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q2",
          "type": "mcq",
          "prompt": "Dans un système triangulaire, par quelle équation commence-t-on la résolution ?",
          "options": [
            "Par la première équation",
            "Par la deuxième équation",
            "Par la dernière équation, qui donne une inconnue",
            "Par l’équation au hasard"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dernière équation ne contient qu’une inconnue : elle donne sa valeur, puis on remonte de proche en proche."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q3",
          "type": "mcq",
          "prompt": "Un système dont la dernière équation est $3z = 6$ et la deuxième $2y + 4z = 0$ est :",
          "options": [
            "Un système de deux équations",
            "Un système triangulaire",
            "Un système sans solution",
            "Un système graphique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les inconnues disparaissent progressivement d’une équation à la suivante : c’est la forme triangulaire."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q4",
          "type": "mcq",
          "prompt": "Dans cet exemple, l’expression de $x$ tirée de la première équation est :",
          "options": [
            "$x = -2y - 3z + 9$",
            "$x = 2y - 3z - 9$",
            "$x = 2y + 3z - 9$",
            "$x = 9 - 2y + 3z$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "De $x - 2y - 3z = -9$, on tire $x = 2y + 3z - 9$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q5",
          "type": "mcq",
          "prompt": "La solution du système formé de $x - 2y - 3z = -9$, $2x + 5y - 3z = 0$ et $x + y + 2z = 9$ est :",
          "options": [
            "Le triplet $(2 ; 1 ; 3)$",
            "Le triplet $(1 ; 2 ; 3)$",
            "Le triplet $(2 ; 3 ; 1)$",
            "Le triplet $(3 ; 1 ; 2)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On vérifie : $2 - 2 - 9 = -9$, $4 + 5 - 9 = 0$ et $2 + 1 + 6 = 9$. Le triplet solution est $(2 ; 1 ; 3)$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p05_q6",
          "type": "mcq",
          "prompt": "La solution de ce système triangulaire est :",
          "options": [
            "Le triplet $(3 ; 2 ; 1)$",
            "Le triplet $(1 ; 3 ; 2)$",
            "Le triplet $(2 ; 1 ; 3)$",
            "Le triplet $(1 ; 2 ; 3)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On remonte : $z = 3$, puis $-3y - 6 = -12$ donne $y = 2$, puis $x + 4 + 3 = 8$ donne $x = 1$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06",
      "order": 6,
      "title": "La méthode du pivot de Gauss dans R3",
      "summary": "Résoudre un système de trois équations par le pivot de Gauss et l’appliquer à la recherche d’une parabole.",
      "conceptExplanation": "Pour résoudre un système de trois équations linéaires dans $\\mathbb{R}^3$, on peut utiliser la substitution ou la méthode du pivot de Gauss.\nLe pivot de Gauss élimine progressivement une inconnue : dans l’exemple de la leçon, la deuxième ligne devient la deuxième ligne moins cinq fois la première, la troisième ligne devient la troisième ligne moins trois fois la première, puis une seconde élimination fait apparaître une équation en $z$ seul.\nEn remontant, on obtient $z = 2$, $y = -3$ et $x = 2$.\nApplication de la leçon : trois points d’une parabole donnent un système de trois équations dont la solution fournit les coefficients de la parabole.",
      "keyRule": "Le pivot transforme le système en système triangulaire équivalent : mêmes solutions, résolution en remontant.",
      "formulas": [],
      "workedExample": {
        "title": "Le système de l’exemple résolu par le pivot de Gauss",
        "statement": "Résous par le pivot de Gauss le système formé de $x - 5y - 7z = 3$, $5x + 3y + z = 3$ et $3x + y - 2z = -1$.",
        "methodSteps": [
          "On élimine $x$ des lignes deux et trois à l’aide de la première ligne.",
          "On élimine ensuite $y$ de la dernière ligne : il reste une équation donnant $z = 2$.",
          "On remonte : $y = -3$, puis $x = 2$."
        ],
        "conclusion": "L’ensemble des solutions est le triplet $(2 ; -3 ; 2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe du pivot de Gauss",
          "stepTheme": "Le principe du pivot de Gauss",
          "stepBadge": "Le principe du pivot de Gauss",
          "paragraphText": "• Méthode : le pivot de Gauss consiste à éliminer une même inconnue dans les équations suivantes en retranchant des multiples de la première équation, dite équation pivot.\nOn recommence ensuite avec la deuxième équation pour obtenir une forme triangulaire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q1",
            "type": "mcq",
            "prompt": "Dans la méthode du pivot de Gauss, la première étape consiste à :",
            "options": [
              "Résoudre graphiquement le système",
              "Éliminer une inconnue dans les autres équations à l’aide de la première",
              "Remplacer toutes les inconnues par $0$",
              "Calculer trois déterminants"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On utilise la première équation comme pivot pour faire disparaître une inconnue des équations suivantes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les combinaisons de l’exemple de la leçon",
          "stepTheme": "Les combinaisons de l’exemple de la leçon",
          "stepBadge": "Les combinaisons de l’exemple de la leçon",
          "paragraphText": "• Exemple de la leçon : pour le système commençant par $x - 5y - 7z = 3$, on remplace la deuxième ligne par la deuxième ligne moins cinq fois la première.\nDe même, la troisième ligne devient la troisième ligne moins trois fois la première : $x$ disparaît de ces deux lignes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q2",
            "type": "mcq",
            "prompt": "Dans cet exemple, quelle combinaison élimine $x$ de la deuxième ligne ?",
            "options": [
              "La deuxième ligne moins la première",
              "La deuxième ligne plus la première",
              "La deuxième ligne moins cinq fois la première",
              "Cinq fois la deuxième ligne moins la première"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le coefficient de $x$ dans la deuxième équation est $5$ : on retranche cinq fois la première ligne, dont le coefficient de $x$ est $1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La forme triangulaire obtenue",
          "stepTheme": "La forme triangulaire obtenue",
          "stepBadge": "La forme triangulaire obtenue",
          "paragraphText": "• Exemple de la leçon : après les deux éliminations successives, la dernière ligne obtenue ne contient plus que $z$.\nElle s’écrit avec un coefficient $-22$ devant $z$ et un second membre $-44$, ce qui donne immédiatement $z = 2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q3",
            "type": "mcq",
            "prompt": "Dans la forme triangulaire de cet exemple, la valeur de $z$ est :",
            "options": [
              "$-2$",
              "$2$",
              "$-3$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dernière ligne donne le produit de $-22$ par $z$ égal à $-44$, donc $z = 2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La solution du système par le pivot",
          "stepTheme": "La solution du système par le pivot",
          "stepBadge": "La solution du système par le pivot",
          "paragraphText": "• Exemple de la leçon : en remontant, la deuxième ligne donne $y = -3$ avec $z = 2$.\nLa première ligne donne ensuite $x = 2$ : le triplet solution rassemble les trois valeurs trouvées.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q4",
            "type": "mcq",
            "prompt": "La solution du système formé de $x - 5y - 7z = 3$, $5x + 3y + z = 3$ et $3x + y - 2z = -1$ est :",
            "options": [
              "Le triplet $(2 ; -3 ; 2)$",
              "Le triplet $(2 ; 3 ; 2)$",
              "Le triplet $(-3 ; 2 ; 2)$",
              "Le triplet $(2 ; -3 ; -2)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On vérifie : $2 + 15 - 14 = 3$, $10 - 9 + 2 = 3$ et $6 - 3 - 4 = -1$. Le triplet solution est $(2 ; -3 ; 2)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Application : l’équation d’une parabole",
          "stepTheme": "Application : l’équation d’une parabole",
          "stepBadge": "Application : l’équation d’une parabole",
          "paragraphText": "• Exercice 4 de la leçon : la parabole d’équation $y = ax^2 + bx + c$ passe par les points de coordonnées $(1 ; 0)$, $(2 ; -5)$ et $(3 ; -12)$.\nCes trois conditions donnent un système de trois équations en $a$, $b$ et $c$, résolu par substitution ou par le pivot de Gauss.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q5",
            "type": "mcq",
            "prompt": "Les coefficients de cette parabole sont :",
            "options": [
              "$a = 1$, $b = 2$ et $c = 3$",
              "$a = -1$, $b = -2$ et $c = 3$",
              "$a = -1$, $b = 2$ et $c = -3$",
              "$a = 3$, $b = -2$ et $c = -1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le système donne $a = -1$, $b = -2$ et $c = 3$ ; on vérifie par exemple que la valeur en $1$ est $-1 - 2 + 3 = 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège des lignes transformées",
          "stepTheme": "Le piège des lignes transformées",
          "stepBadge": "Le piège des lignes transformées",
          "paragraphText": "• Piège : dans le pivot de Gauss, chaque nouvelle ligne remplace l’ancienne ; réutiliser une ligne déjà transformée comme si c’était l’originale fausse toute la suite.\nOn note à chaque étape quelle combinaison a produit la nouvelle ligne, comme le fait la leçon.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q6",
            "type": "mcq",
            "prompt": "Dans le pivot de Gauss, pourquoi note-t-on la combinaison utilisée pour chaque nouvelle ligne ?",
            "options": [
              "Pour décorer la copie",
              "Pour pouvoir vérifier et ne pas réutiliser une ligne transformée par erreur",
              "Parce que la notation change la solution",
              "Ce n’est jamais utile"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La notation des combinaisons permet de suivre les transformations et d’éviter les confusions entre anciennes et nouvelles lignes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q1",
          "type": "mcq",
          "prompt": "Dans la méthode du pivot de Gauss, la première étape consiste à :",
          "options": [
            "Résoudre graphiquement le système",
            "Éliminer une inconnue dans les autres équations à l’aide de la première",
            "Remplacer toutes les inconnues par $0$",
            "Calculer trois déterminants"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On utilise la première équation comme pivot pour faire disparaître une inconnue des équations suivantes."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q2",
          "type": "mcq",
          "prompt": "Dans cet exemple, quelle combinaison élimine $x$ de la deuxième ligne ?",
          "options": [
            "La deuxième ligne moins la première",
            "La deuxième ligne plus la première",
            "La deuxième ligne moins cinq fois la première",
            "Cinq fois la deuxième ligne moins la première"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le coefficient de $x$ dans la deuxième équation est $5$ : on retranche cinq fois la première ligne, dont le coefficient de $x$ est $1$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q3",
          "type": "mcq",
          "prompt": "Dans la forme triangulaire de cet exemple, la valeur de $z$ est :",
          "options": [
            "$-2$",
            "$2$",
            "$-3$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dernière ligne donne le produit de $-22$ par $z$ égal à $-44$, donc $z = 2$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q4",
          "type": "mcq",
          "prompt": "La solution du système formé de $x - 5y - 7z = 3$, $5x + 3y + z = 3$ et $3x + y - 2z = -1$ est :",
          "options": [
            "Le triplet $(2 ; -3 ; 2)$",
            "Le triplet $(2 ; 3 ; 2)$",
            "Le triplet $(-3 ; 2 ; 2)$",
            "Le triplet $(2 ; -3 ; -2)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On vérifie : $2 + 15 - 14 = 3$, $10 - 9 + 2 = 3$ et $6 - 3 - 4 = -1$. Le triplet solution est $(2 ; -3 ; 2)$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q5",
          "type": "mcq",
          "prompt": "Les coefficients de cette parabole sont :",
          "options": [
            "$a = 1$, $b = 2$ et $c = 3$",
            "$a = -1$, $b = -2$ et $c = 3$",
            "$a = -1$, $b = 2$ et $c = -3$",
            "$a = 3$, $b = -2$ et $c = -1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le système donne $a = -1$, $b = -2$ et $c = 3$ ; on vérifie par exemple que la valeur en $1$ est $-1 - 2 + 3 = 0$."
        },
        {
          "id": "premiere_c_maths_numerique_l13_systemes_equations_lineaires_p06_q6",
          "type": "mcq",
          "prompt": "Dans le pivot de Gauss, pourquoi note-t-on la combinaison utilisée pour chaque nouvelle ligne ?",
          "options": [
            "Pour décorer la copie",
            "Pour pouvoir vérifier et ne pas réutiliser une ligne transformée par erreur",
            "Parce que la notation change la solution",
            "Ce n’est jamais utile"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La notation des combinaisons permet de suivre les transformations et d’éviter les confusions entre anciennes et nouvelles lignes."
        }
      ]
    }
  ]
};
