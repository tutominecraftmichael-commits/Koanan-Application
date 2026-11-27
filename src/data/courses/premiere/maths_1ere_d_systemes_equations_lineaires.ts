import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Systèmes d'équations linéaires dans R2 et R3 » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Systèmes d'équations linéaires dans R2 et R3 » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L11_SYSTEMES_EQUATIONS_LINEAIRES: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 11,
  "title": "Leçon 11 : Systèmes d’équations linéaires dans R2 et R3",
  "summary": "La leçon définit les systèmes de deux équations linéaires dans R2 et leur déterminant, présente les résolutions par le calcul (substitution, combinaison, déterminant) et graphiquement, puis les systèmes de trois équations linéaires dans R3, résolus par substitution ou par le pivot de Gauss, avec des applications concrètes.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Systèmes d'équations linéaires dans R2 et R3 » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01",
      "order": 1,
      "title": "Système de deux équations linéaires et déterminant",
      "summary": "Définir un système de deux équations linéaires dans $\\mathbb{R}^2$, calculer son déterminant et en déduire le nombre de solutions.",
      "conceptExplanation": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ est formé de deux équations du premier degré aux inconnues $x$ et $y$ : $ax + by = c$ et $a'x + b'y = c'$.\nSon déterminant est le nombre réel $ab' - a'b$. Exemple de la leçon : pour $2x + 3y = 1$ et $5x + y = 0$, le déterminant vaut $-13$.\nPropriété : le système admet une unique solution si et seulement si son déterminant est différent de $0$. Si le déterminant est nul, le système n’admet pas de solution ou en admet une infinité, et il faut un test supplémentaire pour trancher.",
      "keyRule": "Avant de résoudre, calcule le déterminant : non nul, la solution est unique ; nul, il faut tester pour distinguer aucune solution et infinité de solutions.",
      "formulas": [
        {
          "name": "Déterminant",
          "formula": "D = ab' - a'b"
        },
        {
          "name": "Unicité de la solution",
          "formula": "D \\neq 0"
        }
      ],
      "workedExample": {
        "title": "Déterminant du système de la leçon (exemple)",
        "statement": "Calcule le déterminant du système formé des équations $2x + 3y = 1$ et $5x + y = 0$.",
        "methodSteps": [
          "On repère les coefficients : $a = 2$, $b = 3$, $a' = 5$ et $b' = 1$.",
          "On calcule $ab' - a'b = 2 \\times 1 - 5 \\times 3 = -13$."
        ],
        "conclusion": "Le déterminant vaut $-13$ ; il est non nul, donc le système admet une unique solution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système de deux équations linéaires",
          "stepTheme": "Le système de deux équations linéaires",
          "stepBadge": "Le système de deux équations linéaires",
          "paragraphText": "• Définition : on considère un système $(S)$ de deux équations du premier degré à deux inconnues $(x ; y)$, formé de $ax + by = c$ et de $a'x + b'y = c'$, où $a$, $b$, $c$, $a'$, $b'$ et $c'$ sont des nombres réels.\nRésoudre le système, c’est trouver tous les couples $(x ; y)$ qui vérifient les deux équations à la fois.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q1",
            "type": "mcq",
            "prompt": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ est formé de :",
            "options": [
              "Deux équations du second degré à deux inconnues",
              "Deux équations à une inconnue",
              "Une équation à trois inconnues",
              "Deux équations du premier degré à deux inconnues"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, ce sont deux équations du premier degré aux deux inconnues $x$ et $y$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le déterminant du système",
          "stepTheme": "Le déterminant du système",
          "stepBadge": "Le déterminant du système",
          "paragraphText": "• Définition : on appelle déterminant du système $(S)$ le nombre réel $ab' - a'b$.\nExemple de la leçon : le déterminant du système formé de $2x + 3y = 1$ et de $5x + y = 0$ est $2 \\times 1 - 5 \\times 3 = -13$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q2",
            "type": "mcq",
            "prompt": "Le déterminant du système formé des équations $2x + 3y = 1$ et $5x + y = 0$ est :",
            "options": [
              "$13$",
              "$-13$",
              "$17$",
              "$-7$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $ab' - a'b = 2 \\times 1 - 5 \\times 3 = -13$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le déterminant et le nombre de solutions",
          "stepTheme": "Le déterminant et le nombre de solutions",
          "stepBadge": "Le déterminant et le nombre de solutions",
          "paragraphText": "• Propriété : le système $(S)$ admet une unique solution si et seulement si son déterminant est différent de $0$.\nRemarque de la leçon : le système n’admet pas de solution ou admet une infinité de solutions si et seulement si son déterminant est égal à $0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q3",
            "type": "mcq",
            "prompt": "Un système de deux équations linéaires admet une unique solution si et seulement si :",
            "options": [
              "Son déterminant est égal à $0$",
              "Ses seconds membres sont égaux",
              "Ses coefficients sont tous non nuls",
              "Son déterminant est différent de $0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété de la leçon : unicité de la solution équivaut à déterminant non nul."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un déterminant non nul",
          "stepTheme": "Un déterminant non nul",
          "stepBadge": "Un déterminant non nul",
          "paragraphText": "• Exercice de fixation : pour le système formé de $x + 2y - 5 = 0$ et de $3x - y + 2 = 0$, le déterminant vaut $1 \\times (-1) - 3 \\times 2 = -7$.\nComme $-7 \\neq 0$, ce système admet exactement un couple solution.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q4",
            "type": "mcq",
            "prompt": "Le système formé des équations $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ admet :",
            "options": [
              "Aucune solution",
              "Une infinité de solutions",
              "Exactement un couple solution",
              "Exactement deux couples solutions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Son déterminant vaut $-7$, donc il est non nul : le système admet exactement un couple solution (solution de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un déterminant nul",
          "stepTheme": "Un déterminant nul",
          "stepBadge": "Un déterminant nul",
          "paragraphText": "• Exercice de fixation : pour le système formé de $3x + 15y + 2 = 0$ et de $2x + 10y - 6 = 0$, le déterminant vaut $3 \\times 10 - 2 \\times 15 = 0$.\nOn ne peut donc pas conclure à une solution unique : soit le système n’admet aucun couple solution, soit il en admet une infinité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q5",
            "type": "mcq",
            "prompt": "Le déterminant du système formé des équations $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$ vaut $0$. On en déduit que le système :",
            "options": [
              "Admet exactement un couple solution",
              "N’admet pas de solution ou admet une infinité de solutions",
              "Admet exactement deux couples solutions",
              "Admet toujours une infinité de solutions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un déterminant nul exclut la solution unique : il reste deux cas possibles, aucune solution ou une infinité (remarque de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un déterminant nul ne dit pas lequel des deux cas se produit",
          "stepTheme": "Un déterminant nul ne dit pas lequel des deux cas se produit",
          "stepBadge": "Un déterminant nul ne dit pas lequel des deux cas se produit",
          "paragraphText": "• Piège : quand le déterminant est nul, il faut tester un couple pour trancher entre « aucune solution » et « infinité de solutions ».\nExemple de la leçon : pour le système précédent, le couple $\\left(-\\frac{2}{3} ; 0\\right)$ vérifie la première équation mais pas la deuxième, donc le système n’admet aucun couple solution.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q6",
            "type": "mcq",
            "prompt": "Pour le système de déterminant nul formé de $3x + 15y + 2 = 0$ et de $2x + 10y - 6 = 0$, le couple $\\left(-\\frac{2}{3} ; 0\\right)$ vérifie la première équation mais pas la deuxième. Le système admet donc :",
            "options": [
              "Une infinité de solutions",
              "Aucun couple solution",
              "Exactement un couple solution",
              "Ce couple comme unique solution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un couple qui ne vérifie qu’une équation sur deux montre que les deux équations sont incompatibles : le système n’a aucun couple solution (exemple de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q1",
          "type": "mcq",
          "prompt": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ est formé de :",
          "options": [
            "Deux équations du second degré à deux inconnues",
            "Deux équations à une inconnue",
            "Une équation à trois inconnues",
            "Deux équations du premier degré à deux inconnues"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, ce sont deux équations du premier degré aux deux inconnues $x$ et $y$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q2",
          "type": "mcq",
          "prompt": "Le déterminant du système formé des équations $2x + 3y = 1$ et $5x + y = 0$ est :",
          "options": [
            "$13$",
            "$-13$",
            "$17$",
            "$-7$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $ab' - a'b = 2 \\times 1 - 5 \\times 3 = -13$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q3",
          "type": "mcq",
          "prompt": "Un système de deux équations linéaires admet une unique solution si et seulement si :",
          "options": [
            "Son déterminant est égal à $0$",
            "Ses seconds membres sont égaux",
            "Ses coefficients sont tous non nuls",
            "Son déterminant est différent de $0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété de la leçon : unicité de la solution équivaut à déterminant non nul."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q4",
          "type": "mcq",
          "prompt": "Le système formé des équations $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ admet :",
          "options": [
            "Aucune solution",
            "Une infinité de solutions",
            "Exactement un couple solution",
            "Exactement deux couples solutions"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Son déterminant vaut $-7$, donc il est non nul : le système admet exactement un couple solution (solution de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q5",
          "type": "mcq",
          "prompt": "Le déterminant du système formé des équations $3x + 15y + 2 = 0$ et $2x + 10y - 6 = 0$ vaut $0$. On en déduit que le système :",
          "options": [
            "Admet exactement un couple solution",
            "N’admet pas de solution ou admet une infinité de solutions",
            "Admet exactement deux couples solutions",
            "Admet toujours une infinité de solutions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un déterminant nul exclut la solution unique : il reste deux cas possibles, aucune solution ou une infinité (remarque de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q6",
          "type": "mcq",
          "prompt": "Pour le système de déterminant nul formé de $3x + 15y + 2 = 0$ et de $2x + 10y - 6 = 0$, le couple $\\left(-\\frac{2}{3} ; 0\\right)$ vérifie la première équation mais pas la deuxième. Le système admet donc :",
          "options": [
            "Une infinité de solutions",
            "Aucun couple solution",
            "Exactement un couple solution",
            "Ce couple comme unique solution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un couple qui ne vérifie qu’une équation sur deux montre que les deux équations sont incompatibles : le système n’a aucun couple solution (exemple de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02",
      "order": 2,
      "title": "Résolution par le calcul dans $\\mathbb{R}^2$",
      "summary": "Résoudre un système de deux équations linéaires par substitution, par combinaison ou par les formules du déterminant.",
      "conceptExplanation": "Un système de deux équations linéaires dans $\\mathbb{R}^2$ peut se résoudre par le calcul à l’aide de la substitution, de la combinaison ou du déterminant ; il peut aussi se résoudre graphiquement.\nPar le déterminant : lorsque $D \\neq 0$, le système admet une unique solution. On calcule $D_x$ et $D_y$ en remplaçant successivement une colonne de coefficients par les seconds membres, puis $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$.\nExemple de la leçon : pour $x + 2y - 5 = 0$ et $3x - y + 2 = 0$, on obtient $D = -7$, $D_x = -1$, $D_y = -17$, et l’unique couple solution $\\left(\\frac{1}{7} ; \\frac{17}{7}\\right)$.",
      "keyRule": "Trois outils de calcul au choix : isoler et remplacer (substitution), éliminer (combinaison), ou appliquer les quotients du déterminant quand $D$ est non nul.",
      "formulas": [
        {
          "name": "Solution par le déterminant",
          "formula": "x = \\frac{D_x}{D} \\text{ et } y = \\frac{D_y}{D}",
          "note": "Lorsque $D \\neq 0$."
        },
        {
          "name": "Déterminants auxiliaires",
          "formula": "D_x = cb' - c'b \\text{ et } D_y = ac' - a'c"
        }
      ],
      "workedExample": {
        "title": "Résolution par le déterminant (exemple de la leçon)",
        "statement": "Résous dans $\\mathbb{R}^2$ le système formé des équations $x + 2y - 5 = 0$ et $3x - y + 2 = 0$.",
        "methodSteps": [
          "Le déterminant du système est $D = 1 \\times (-1) - 3 \\times 2 = -7 \\neq 0$ : la solution est unique.",
          "On calcule $D_x = -1$, d’où $x = \\frac{-1}{-7} = \\frac{1}{7}$.",
          "On calcule $D_y = -17$, d’où $y = \\frac{-17}{-7} = \\frac{17}{7}$."
        ],
        "conclusion": "L’unique couple solution est $\\left(\\frac{1}{7} ; \\frac{17}{7}\\right)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les méthodes de résolution par le calcul",
          "stepTheme": "Les méthodes de résolution par le calcul",
          "stepBadge": "Les méthodes de résolution par le calcul",
          "paragraphText": "• Méthodes de la leçon : un système de deux équations linéaires dans $\\mathbb{R}^2$ peut se résoudre par le calcul à l’aide de la substitution, de la combinaison ou du déterminant.\nDans la substitution, on exprime une inconnue en fonction de l’autre à partir d’une équation, puis on remplace dans l’autre équation.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q1",
            "type": "mcq",
            "prompt": "Dans la méthode de substitution, la première étape consiste à :",
            "options": [
              "Exprimer une inconnue en fonction de l’autre à partir d’une équation",
              "Tracer les deux droites du système",
              "Calculer le déterminant du système",
              "Ajouter les deux équations"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La substitution commence par isoler une inconnue ; par exemple, de $x + 2y = -3$, on tire $x = -3 - 2y$ (corrigé de la leçon)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Résoudre par substitution",
          "stepTheme": "Résoudre par substitution",
          "stepBadge": "Résoudre par substitution",
          "paragraphText": "• Exercice corrigé de la leçon : pour le système formé de $2x + 3y = 2$ et de $x + 2y = -3$, on tire de la deuxième équation $x = -3 - 2y$.\nEn remplaçant dans la première équation, on obtient $y = -8$, puis $x = 13$ en reportant dans l’expression de $x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q2",
            "type": "mcq",
            "prompt": "La solution du système formé des équations $2x + 3y = 2$ et $x + 2y = -3$ est le couple :",
            "options": [
              "$(-8 ; 13)$",
              "$(13 ; -8)$",
              "$(8 ; -13)$",
              "$(-13 ; 8)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La résolution par substitution donne $y = -8$ puis $x = 13$ : le couple solution est $(13 ; -8)$, et l’ordre compte (corrigé de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Résoudre par combinaison",
          "stepTheme": "Résoudre par combinaison",
          "stepBadge": "Résoudre par combinaison",
          "paragraphText": "• Méthode : dans la combinaison, on remplace une équation par une combinaison des deux équations pour éliminer une inconnue.\nExemple corrigé de la leçon : pour le même système, l’opération consistant à retrancher le double de la deuxième équation à la première donne $-y = 8$, soit $y = -8$, puis on remplace $y$ dans une équation pour trouver $x = 13$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q3",
            "type": "mcq",
            "prompt": "Dans le système formé de $2x + 3y = 2$ et de $x + 2y = -3$, quelle opération élimine $x$ ?",
            "options": [
              "Ajouter les deux équations",
              "Échanger les deux équations",
              "Multiplier la première équation par $3$",
              "Retrancher le double de la deuxième équation à la première"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le coefficient de $x$ dans la deuxième équation est $1$ : en retranchant son double, $x$ disparaît et il reste $-y = 8$ (corrigé de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les formules du déterminant",
          "stepTheme": "Les formules du déterminant",
          "stepBadge": "Les formules du déterminant",
          "paragraphText": "• Synthèse de la leçon : lorsque le déterminant $D$ est non nul, le système admet une unique solution.\nOn calcule $D_x$ en remplaçant la colonne des coefficients de $x$ par les seconds membres, et $D_y$ en remplaçant la colonne des coefficients de $y$ par les seconds membres.\nLa solution est alors donnée par $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q4",
            "type": "mcq",
            "prompt": "Lorsque le déterminant $D$ d’un système est non nul, l’inconnue $x$ de l’unique solution vaut :",
            "options": [
              "$\\frac{D_y}{D}$",
              "$\\frac{D}{D_x}$",
              "$\\frac{D_x}{D}$",
              "$D_x - D$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les formules de la leçon sont $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer $D$, $D_x$ et $D_y$",
          "stepTheme": "Calculer $D$, $D_x$ et $D_y$",
          "stepBadge": "Calculer $D$, $D_x$ et $D_y$",
          "paragraphText": "• Exemple de la leçon : pour le système formé de $x + 2y - 5 = 0$ et de $3x - y + 2 = 0$, on obtient $D = -7$, $D_x = -1$ et $D_y = -17$.\nLe déterminant est non nul, donc le système admet une seule solution, que l’on calcule par les quotients.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q5",
            "type": "mcq",
            "prompt": "Pour le système formé des équations $x + 2y - 5 = 0$ et $3x - y + 2 = 0$, que vaut $D_x$ ?",
            "options": [
              "$-7$",
              "$-17$",
              "$-1$",
              "$7$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de la leçon donne $D_x = -1$, avec $D = -7$ et $D_y = -17$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’unique solution par le déterminant",
          "stepTheme": "L’unique solution par le déterminant",
          "stepBadge": "L’unique solution par le déterminant",
          "paragraphText": "• Suite de l’exemple : $x = \\frac{D_x}{D} = \\frac{-1}{-7} = \\frac{1}{7}$ et $y = \\frac{D_y}{D} = \\frac{-17}{-7} = \\frac{17}{7}$.\nOn peut vérifier le couple obtenu en le reportant dans les deux équations du système.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q6",
            "type": "mcq",
            "prompt": "L’unique couple solution du système formé des équations $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ est :",
            "options": [
              "$\\left(\\frac{1}{7} ; \\frac{17}{7}\\right)$",
              "$\\left(\\frac{17}{7} ; \\frac{1}{7}\\right)$",
              "$(-1 ; -17)$",
              "$\\left(\\frac{1}{7} ; -\\frac{17}{7}\\right)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $x = \\frac{-1}{-7} = \\frac{1}{7}$ et $y = \\frac{-17}{-7} = \\frac{17}{7}$ (exemple de la leçon, revérifié par substitution)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Déterminant nul et infinité de solutions",
          "stepTheme": "Déterminant nul et infinité de solutions",
          "stepBadge": "Déterminant nul et infinité de solutions",
          "paragraphText": "• Piège : un déterminant nul n’entraîne pas toujours l’absence de solution.\nExemple corrigé de la leçon : le système formé de $-\\sqrt{2}x + y = \\sqrt{3}$ et de $2x - \\sqrt{2}y = -\\sqrt{6}$ a un déterminant nul, et le couple $(0 ; \\sqrt{3})$ vérifie ses deux équations, qui sont proportionnelles : le système a une infinité de solutions.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q7",
            "type": "mcq",
            "prompt": "Le système formé des équations $-\\sqrt{2}x + y = \\sqrt{3}$ et $2x - \\sqrt{2}y = -\\sqrt{6}$ a un déterminant nul et le couple $(0 ; \\sqrt{3})$ vérifie ses deux équations. Combien a-t-il de solutions ?",
            "options": [
              "Aucune",
              "Exactement une",
              "Une infinité",
              "Exactement deux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux équations sont proportionnelles : tout couple vérifiant l’une vérifie l’autre, il y a une infinité de solutions (corrigé de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q1",
          "type": "mcq",
          "prompt": "Dans la méthode de substitution, la première étape consiste à :",
          "options": [
            "Exprimer une inconnue en fonction de l’autre à partir d’une équation",
            "Tracer les deux droites du système",
            "Calculer le déterminant du système",
            "Ajouter les deux équations"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La substitution commence par isoler une inconnue ; par exemple, de $x + 2y = -3$, on tire $x = -3 - 2y$ (corrigé de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q2",
          "type": "mcq",
          "prompt": "La solution du système formé des équations $2x + 3y = 2$ et $x + 2y = -3$ est le couple :",
          "options": [
            "$(-8 ; 13)$",
            "$(13 ; -8)$",
            "$(8 ; -13)$",
            "$(-13 ; 8)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La résolution par substitution donne $y = -8$ puis $x = 13$ : le couple solution est $(13 ; -8)$, et l’ordre compte (corrigé de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q3",
          "type": "mcq",
          "prompt": "Dans le système formé de $2x + 3y = 2$ et de $x + 2y = -3$, quelle opération élimine $x$ ?",
          "options": [
            "Ajouter les deux équations",
            "Échanger les deux équations",
            "Multiplier la première équation par $3$",
            "Retrancher le double de la deuxième équation à la première"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le coefficient de $x$ dans la deuxième équation est $1$ : en retranchant son double, $x$ disparaît et il reste $-y = 8$ (corrigé de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q4",
          "type": "mcq",
          "prompt": "Lorsque le déterminant $D$ d’un système est non nul, l’inconnue $x$ de l’unique solution vaut :",
          "options": [
            "$\\frac{D_y}{D}$",
            "$\\frac{D}{D_x}$",
            "$\\frac{D_x}{D}$",
            "$D_x - D$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les formules de la leçon sont $x = \\frac{D_x}{D}$ et $y = \\frac{D_y}{D}$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q5",
          "type": "mcq",
          "prompt": "Pour le système formé des équations $x + 2y - 5 = 0$ et $3x - y + 2 = 0$, que vaut $D_x$ ?",
          "options": [
            "$-7$",
            "$-17$",
            "$-1$",
            "$7$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de la leçon donne $D_x = -1$, avec $D = -7$ et $D_y = -17$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q6",
          "type": "mcq",
          "prompt": "L’unique couple solution du système formé des équations $x + 2y - 5 = 0$ et $3x - y + 2 = 0$ est :",
          "options": [
            "$\\left(\\frac{1}{7} ; \\frac{17}{7}\\right)$",
            "$\\left(\\frac{17}{7} ; \\frac{1}{7}\\right)$",
            "$(-1 ; -17)$",
            "$\\left(\\frac{1}{7} ; -\\frac{17}{7}\\right)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $x = \\frac{-1}{-7} = \\frac{1}{7}$ et $y = \\frac{-17}{-7} = \\frac{17}{7}$ (exemple de la leçon, revérifié par substitution)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q7",
          "type": "mcq",
          "prompt": "Le système formé des équations $-\\sqrt{2}x + y = \\sqrt{3}$ et $2x - \\sqrt{2}y = -\\sqrt{6}$ a un déterminant nul et le couple $(0 ; \\sqrt{3})$ vérifie ses deux équations. Combien a-t-il de solutions ?",
          "options": [
            "Aucune",
            "Exactement une",
            "Une infinité",
            "Exactement deux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux équations sont proportionnelles : tout couple vérifiant l’une vérifie l’autre, il y a une infinité de solutions (corrigé de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03",
      "order": 3,
      "title": "Résolution graphique dans $\\mathbb{R}^2$",
      "summary": "Résoudre graphiquement un système de deux équations linéaires et relier la position des droites au nombre de solutions.",
      "conceptExplanation": "La leçon indique qu’un système de deux équations linéaires dans $\\mathbb{R}^2$ peut aussi se résoudre graphiquement : dans un repère orthonormé, on trace les droites d’équations celles du système et on lit les coordonnées de leur point d’intersection.\nExemple de la leçon : pour $x + 2y - 5 = 0$ et $x - y + 1 = 0$, les droites sont sécantes en $A(1 ; 2)$ et la solution est $(1 ; 2)$.\nLe nombre de solutions se lit sur la position des droites : sécantes, un seul couple ; parallèles distinctes, aucun ; confondues, une infinité, en accord avec la valeur du déterminant.",
      "keyRule": "Graphiquement, la solution est le point commun des deux droites : un point, aucun point, ou toute la droite.",
      "formulas": [],
      "workedExample": {
        "title": "Résolution graphique (exemple de la leçon)",
        "statement": "Résous graphiquement le système formé des équations $x + 2y - 5 = 0$ et $x - y + 1 = 0$.",
        "methodSteps": [
          "Dans un repère orthonormé, on trace la droite d’équation $x + 2y - 5 = 0$.",
          "On trace la droite d’équation $x - y + 1 = 0$.",
          "On lit les coordonnées de leur point d’intersection : $A(1 ; 2)$."
        ],
        "conclusion": "La solution du système est le couple $(1 ; 2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Chaque équation est une droite",
          "stepTheme": "Chaque équation est une droite",
          "stepBadge": "Chaque équation est une droite",
          "paragraphText": "• Principe de la résolution graphique : dans un repère, chaque équation du premier degré à deux inconnues représente une droite.\nUn couple est solution du système si et seulement si le point de coordonnées ce couple appartient aux deux droites à la fois.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q1",
            "type": "mcq",
            "prompt": "Dans la résolution graphique d’un système de deux équations, chaque équation représente :",
            "options": [
              "Un cercle",
              "Une droite",
              "Un point",
              "Une parabole"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une équation du premier degré à deux inconnues est l’équation d’une droite du plan."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Tracer et lire l’intersection",
          "stepTheme": "Tracer et lire l’intersection",
          "stepBadge": "Tracer et lire l’intersection",
          "paragraphText": "• Méthode de la leçon : dans un repère orthonormé, on trace les droites d’équations celles du système, puis on lit les coordonnées de leur point d’intersection.\nCes coordonnées forment l’unique couple solution lorsque les droites sont sécantes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q2",
            "type": "mcq",
            "prompt": "Dans la méthode graphique, la solution du système se lit comme :",
            "options": [
              "Les coefficients des deux équations",
              "Le déterminant du système",
              "L’ordonnée à l’origine de la première droite",
              "Les coordonnées du point d’intersection des deux droites"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On trace les deux droites et on lit les coordonnées de leur point d’intersection (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’exemple graphique de la leçon",
          "stepTheme": "L’exemple graphique de la leçon",
          "stepBadge": "L’exemple graphique de la leçon",
          "paragraphText": "• Exemple de la leçon : pour le système formé de $x + 2y - 5 = 0$ et de $x - y + 1 = 0$, on trace les deux droites dans un repère orthonormé.\nLes droites sont sécantes en $A$ et $A$ a pour coordonnées $(1 ; 2)$ : la solution du système est le couple $(1 ; 2)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q3",
            "type": "mcq",
            "prompt": "La solution du système formé des équations $x + 2y - 5 = 0$ et $x - y + 1 = 0$ est le couple :",
            "options": [
              "$(2 ; 1)$",
              "$(1 ; 2)$",
              "$(-1 ; 2)$",
              "$(1 ; -2)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux droites se coupent en $A(1 ; 2)$ : la solution est $(1 ; 2)$ (exemple de la leçon, revérifié : $1 + 4 - 5 = 0$ et $1 - 2 + 1 = 0$)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Droites sécantes et solution unique",
          "stepTheme": "Droites sécantes et solution unique",
          "stepBadge": "Droites sécantes et solution unique",
          "paragraphText": "• Correspondance : deux droites sécantes ont exactement un point commun, donc le système admet exactement un couple solution.\nC’est le cas où le déterminant du système est différent de $0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q4",
            "type": "mcq",
            "prompt": "Si les deux droites d’un système sont sécantes, alors le système admet :",
            "options": [
              "Aucune solution",
              "Une infinité de solutions",
              "Exactement un couple solution",
              "Deux couples solutions"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un seul point commun donne un seul couple solution, ce qui correspond à un déterminant non nul."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Lire les coordonnées dans le bon ordre",
          "stepTheme": "Lire les coordonnées dans le bon ordre",
          "stepBadge": "Lire les coordonnées dans le bon ordre",
          "paragraphText": "• Piège : le couple solution s’écrit $(x ; y)$, l’abscisse d’abord et l’ordonnée ensuite.\nDans l’exemple de la leçon, le point d’intersection est $A(1 ; 2)$ : la solution est $(1 ; 2)$, et non $(2 ; 1)$, qui ne vérifie pas les équations.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q5",
            "type": "mcq",
            "prompt": "Le point d’intersection des droites d’un système est $A(1 ; 2)$. Le couple solution est :",
            "options": [
              "$(1 ; 2)$",
              "$(2 ; 1)$",
              "$(2 ; 2)$",
              "$(1 ; 1)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On lit l’abscisse puis l’ordonnée : $x = 1$ et $y = 2$, soit le couple $(1 ; 2)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le cas du déterminant nul, graphiquement",
          "stepTheme": "Le cas du déterminant nul, graphiquement",
          "stepBadge": "Le cas du déterminant nul, graphiquement",
          "paragraphText": "• Correspondance : un déterminant nul signifie que les deux droites sont parallèles ou confondues.\nParallèles distinctes, elles n’ont aucun point commun et le système n’a pas de solution ; confondues, elles ont une infinité de points communs et le système a une infinité de solutions.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q6",
            "type": "mcq",
            "prompt": "Graphiquement, un déterminant nul correspond à deux droites :",
            "options": [
              "Toujours sécantes",
              "Perpendiculaires",
              "Parallèles ou confondues",
              "Dont l’une passe par l’origine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Déterminant nul équivaut à des droites parallèles ou confondues : aucune solution dans le premier cas, une infinité dans le second."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q1",
          "type": "mcq",
          "prompt": "Dans la résolution graphique d’un système de deux équations, chaque équation représente :",
          "options": [
            "Un cercle",
            "Une droite",
            "Un point",
            "Une parabole"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une équation du premier degré à deux inconnues est l’équation d’une droite du plan."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q2",
          "type": "mcq",
          "prompt": "Dans la méthode graphique, la solution du système se lit comme :",
          "options": [
            "Les coefficients des deux équations",
            "Le déterminant du système",
            "L’ordonnée à l’origine de la première droite",
            "Les coordonnées du point d’intersection des deux droites"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On trace les deux droites et on lit les coordonnées de leur point d’intersection (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q3",
          "type": "mcq",
          "prompt": "La solution du système formé des équations $x + 2y - 5 = 0$ et $x - y + 1 = 0$ est le couple :",
          "options": [
            "$(2 ; 1)$",
            "$(1 ; 2)$",
            "$(-1 ; 2)$",
            "$(1 ; -2)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux droites se coupent en $A(1 ; 2)$ : la solution est $(1 ; 2)$ (exemple de la leçon, revérifié : $1 + 4 - 5 = 0$ et $1 - 2 + 1 = 0$)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q4",
          "type": "mcq",
          "prompt": "Si les deux droites d’un système sont sécantes, alors le système admet :",
          "options": [
            "Aucune solution",
            "Une infinité de solutions",
            "Exactement un couple solution",
            "Deux couples solutions"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un seul point commun donne un seul couple solution, ce qui correspond à un déterminant non nul."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q5",
          "type": "mcq",
          "prompt": "Le point d’intersection des droites d’un système est $A(1 ; 2)$. Le couple solution est :",
          "options": [
            "$(1 ; 2)$",
            "$(2 ; 1)$",
            "$(2 ; 2)$",
            "$(1 ; 1)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On lit l’abscisse puis l’ordonnée : $x = 1$ et $y = 2$, soit le couple $(1 ; 2)$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q6",
          "type": "mcq",
          "prompt": "Graphiquement, un déterminant nul correspond à deux droites :",
          "options": [
            "Toujours sécantes",
            "Perpendiculaires",
            "Parallèles ou confondues",
            "Dont l’une passe par l’origine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Déterminant nul équivaut à des droites parallèles ou confondues : aucune solution dans le premier cas, une infinité dans le second."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04",
      "order": 4,
      "title": "Systèmes de trois équations linéaires dans $\\mathbb{R}^3$",
      "summary": "Définir un système de trois équations linéaires et un système triangulaire, et résoudre un système triangulaire en remontant.",
      "conceptExplanation": "Un système linéaire de trois équations du premier degré à trois inconnues $(x ; y ; z)$ est formé de trois équations du type $ax + by + cz = m$, à coefficients réels.\nUn système triangulaire est un système où la deuxième équation ne contient plus $x$ et où la troisième ne contient plus que $z$ : par exemple, les équations $x - y + 3z = 2$, $2y + 4z = 0$ et $3z = 6$.\nUn système triangulaire se résout en remontant : $z$ par la dernière équation, puis $y$, puis $x$. Pour l’exemple, on obtient le triplet $(-8 ; -4 ; 2)$.",
      "keyRule": "Un système triangulaire se résout de bas en haut : d’abord $z$, puis $y$, puis $x$.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre un système triangulaire (exemple de la leçon)",
        "statement": "Résous le système triangulaire formé des équations $x - y + 3z = 2$, $2y + 4z = 0$ et $3z = 6$.",
        "methodSteps": [
          "La troisième équation donne $3z = 6$, soit $z = 2$.",
          "La deuxième devient $2y + 4 \\times 2 = 0$, soit $y = -4$.",
          "La première devient $x + 4 + 6 = 2$, soit $x = -8$."
        ],
        "conclusion": "Le triplet solution est $(-8 ; -4 ; 2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le système de trois équations linéaires",
          "stepTheme": "Le système de trois équations linéaires",
          "stepBadge": "Le système de trois équations linéaires",
          "paragraphText": "• Définition : on appelle système linéaire de trois équations du premier degré à trois inconnues $(x ; y ; z)$ un système formé de trois équations du type $ax + by + cz = m$, avec des coefficients réels.\nUne solution est un triplet $(x ; y ; z)$ qui vérifie les trois équations à la fois.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q1",
            "type": "mcq",
            "prompt": "Une solution d’un système de trois équations linéaires dans $\\mathbb{R}^3$ est :",
            "options": [
              "Un triplet $(x ; y ; z)$ vérifiant les trois équations",
              "Un couple $(x ; y)$",
              "Un triplet vérifiant au moins une équation",
              "Un nombre réel"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il faut trois valeurs, une par inconnue, et elles doivent vérifier les trois équations simultanément."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le système triangulaire",
          "stepTheme": "Le système triangulaire",
          "stepBadge": "Le système triangulaire",
          "paragraphText": "• Définition : un système triangulaire d’équations dans $\\mathbb{R}^3$ est un système où la première équation contient les trois inconnues, la deuxième seulement $y$ et $z$, et la troisième seulement $z$.\nExemple de la leçon : le système formé de $x - y + 3z = 2$, de $2y + 4z = 0$ et de $3z = 6$ est triangulaire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q2",
            "type": "mcq",
            "prompt": "Dans un système triangulaire de trois équations, la dernière équation contient :",
            "options": [
              "Les trois inconnues",
              "Deux inconnues",
              "Une seule inconnue",
              "Aucune inconnue"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La forme triangulaire fait disparaître une inconnue à chaque ligne : la dernière équation ne garde que $z$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître un système non triangulaire",
          "stepTheme": "Reconnaître un système non triangulaire",
          "stepBadge": "Reconnaître un système non triangulaire",
          "paragraphText": "• Exemple de la leçon : le système formé de $x + 2y - z = -1$, de $2x + 3y + z = 0$ et de $x + y + 2z = 3$ n’est pas triangulaire.\nSa troisième équation contient encore les trois inconnues $x$, $y$ et $z$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q3",
            "type": "mcq",
            "prompt": "Pourquoi le système formé de $x + 2y - z = -1$, $2x + 3y + z = 0$ et $x + y + 2z = 3$ n’est-il pas triangulaire ?",
            "options": [
              "Sa première équation contient trois inconnues",
              "Sa troisième équation contient encore les trois inconnues",
              "Il a trois équations",
              "Ses seconds membres sont non nuls"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Dans un système triangulaire, la troisième équation ne contient qu’une inconnue ; ici elle contient $x$, $y$ et $z$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Résoudre un système triangulaire en remontant",
          "stepTheme": "Résoudre un système triangulaire en remontant",
          "stepBadge": "Résoudre un système triangulaire en remontant",
          "paragraphText": "• Méthode : un système triangulaire se résout en remontant : la dernière équation donne directement $z$.\nOn remplace ensuite $z$ dans la deuxième équation pour obtenir $y$, puis $y$ et $z$ dans la première pour obtenir $x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q4",
            "type": "mcq",
            "prompt": "Pour résoudre un système triangulaire, quelle inconnue obtient-on en premier ?",
            "options": [
              "$x$, par la première équation",
              "$y$, par la deuxième équation",
              "$z$, par la dernière équation",
              "On les obtient toutes en même temps"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dernière équation ne contient que $z$ : on calcule $z$, puis on remonte vers $y$ et $x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Résoudre le système triangulaire de la leçon",
          "stepTheme": "Résoudre le système triangulaire de la leçon",
          "stepBadge": "Résoudre le système triangulaire de la leçon",
          "paragraphText": "• Application : pour le système triangulaire formé de $x - y + 3z = 2$, de $2y + 4z = 0$ et de $3z = 6$, la dernière équation donne $z = 2$.\nLa deuxième donne alors $2y + 8 = 0$, soit $y = -4$, et la première donne $x = -8$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q5",
            "type": "mcq",
            "prompt": "Le triplet solution du système triangulaire formé des équations $x - y + 3z = 2$, $2y + 4z = 0$ et $3z = 6$ est :",
            "options": [
              "$(2 ; -4 ; -8)$",
              "$(-8 ; -4 ; 2)$",
              "$(-8 ; 4 ; 2)$",
              "$(8 ; -4 ; 2)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remonte : $z = 2$, puis $y = -4$, puis $x = 2 + y - 3z = -8$ ; le triplet est $(-8 ; -4 ; 2)$, revérifié dans les trois équations."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’ordre des inconnues dans le triplet",
          "stepTheme": "L’ordre des inconnues dans le triplet",
          "stepBadge": "L’ordre des inconnues dans le triplet",
          "paragraphText": "• Piège : le triplet solution s’écrit dans l’ordre $(x ; y ; z)$.\nDans l’exemple précédent, $z$ vaut $2$ et $x$ vaut $-8$ : écrire $(2 ; -4 ; -8)$ permute les rôles et ne vérifie pas le système.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q6",
            "type": "mcq",
            "prompt": "Dans le triplet solution $(-8 ; -4 ; 2)$ du système triangulaire de la leçon, la valeur de $z$ est :",
            "options": [
              "$-8$",
              "$-4$",
              "$6$",
              "$2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le triplet est ordonné $(x ; y ; z)$ : la troisième composante, $z$, vaut $2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q1",
          "type": "mcq",
          "prompt": "Une solution d’un système de trois équations linéaires dans $\\mathbb{R}^3$ est :",
          "options": [
            "Un triplet $(x ; y ; z)$ vérifiant les trois équations",
            "Un couple $(x ; y)$",
            "Un triplet vérifiant au moins une équation",
            "Un nombre réel"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il faut trois valeurs, une par inconnue, et elles doivent vérifier les trois équations simultanément."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q2",
          "type": "mcq",
          "prompt": "Dans un système triangulaire de trois équations, la dernière équation contient :",
          "options": [
            "Les trois inconnues",
            "Deux inconnues",
            "Une seule inconnue",
            "Aucune inconnue"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La forme triangulaire fait disparaître une inconnue à chaque ligne : la dernière équation ne garde que $z$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q3",
          "type": "mcq",
          "prompt": "Pourquoi le système formé de $x + 2y - z = -1$, $2x + 3y + z = 0$ et $x + y + 2z = 3$ n’est-il pas triangulaire ?",
          "options": [
            "Sa première équation contient trois inconnues",
            "Sa troisième équation contient encore les trois inconnues",
            "Il a trois équations",
            "Ses seconds membres sont non nuls"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Dans un système triangulaire, la troisième équation ne contient qu’une inconnue ; ici elle contient $x$, $y$ et $z$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q4",
          "type": "mcq",
          "prompt": "Pour résoudre un système triangulaire, quelle inconnue obtient-on en premier ?",
          "options": [
            "$x$, par la première équation",
            "$y$, par la deuxième équation",
            "$z$, par la dernière équation",
            "On les obtient toutes en même temps"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dernière équation ne contient que $z$ : on calcule $z$, puis on remonte vers $y$ et $x$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q5",
          "type": "mcq",
          "prompt": "Le triplet solution du système triangulaire formé des équations $x - y + 3z = 2$, $2y + 4z = 0$ et $3z = 6$ est :",
          "options": [
            "$(2 ; -4 ; -8)$",
            "$(-8 ; -4 ; 2)$",
            "$(-8 ; 4 ; 2)$",
            "$(8 ; -4 ; 2)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remonte : $z = 2$, puis $y = -4$, puis $x = 2 + y - 3z = -8$ ; le triplet est $(-8 ; -4 ; 2)$, revérifié dans les trois équations."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q6",
          "type": "mcq",
          "prompt": "Dans le triplet solution $(-8 ; -4 ; 2)$ du système triangulaire de la leçon, la valeur de $z$ est :",
          "options": [
            "$-8$",
            "$-4$",
            "$6$",
            "$2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le triplet est ordonné $(x ; y ; z)$ : la troisième composante, $z$, vaut $2$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05",
      "order": 5,
      "title": "Résolution par substitution dans $\\mathbb{R}^3$",
      "summary": "Résoudre un système de trois équations linéaires par substitution, en se ramenant à un système de deux équations.",
      "conceptExplanation": "La leçon propose deux méthodes pour résoudre un système de trois équations linéaires dans $\\mathbb{R}^3$ : la substitution et la méthode du pivot de Gauss.\nPar substitution, on exprime une inconnue en fonction des deux autres, par exemple $x = 2y + 3z - 9$ à partir de $x - 2y - 3z = -9$, puis on remplace dans les autres équations pour obtenir un système de deux équations à deux inconnues.\nExemple de la leçon : le système formé de $x - 2y - 3z = -9$, $2x + 5y - 3z = 0$ et $x + y + 2z = 9$ se réduit à $9y + 3z = 18$ et $3y + 5z = 18$, et sa solution est le triplet $(2 ; 1 ; 3)$.",
      "keyRule": "Substitution : isoler une inconnue, la remplacer partout, résoudre le système réduit, puis revenir à l’inconnue isolée.",
      "formulas": [],
      "workedExample": {
        "title": "Résolution par substitution (exemple de la leçon)",
        "statement": "Résous par substitution le système formé des équations $x - 2y - 3z = -9$, $2x + 5y - 3z = 0$ et $x + y + 2z = 9$.",
        "methodSteps": [
          "De la première équation, on tire $x = 2y + 3z - 9$.",
          "En remplaçant dans les deux autres, on obtient $9y + 3z = 18$ et $3y + 5z = 18$.",
          "On en tire $z = 6 - 3y$, puis $-12y = -12$, soit $y = 1$ et $z = 3$.",
          "On reporte dans l’expression de $x$ : $x = 2 \\times 1 + 3 \\times 3 - 9 = 2$."
        ],
        "conclusion": "L’ensemble solution est le singleton formé du triplet $(2 ; 1 ; 3)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La méthode de substitution dans $\\mathbb{R}^3$",
          "stepTheme": "La méthode de substitution dans $\\mathbb{R}^3$",
          "stepBadge": "La méthode de substitution dans $\\mathbb{R}^3$",
          "paragraphText": "• Méthode de la leçon : pour résoudre un système de trois équations linéaires dans $\\mathbb{R}^3$, on peut utiliser la substitution.\nOn exprime une inconnue en fonction des deux autres à partir d’une équation, puis on remplace cette expression dans les deux autres équations pour obtenir un système de deux équations à deux inconnues.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q1",
            "type": "mcq",
            "prompt": "Dans la méthode de substitution pour un système de trois équations, la première étape consiste à :",
            "options": [
              "Éliminer une inconnue par combinaisons de lignes",
              "Calculer un déterminant",
              "Tracer trois droites",
              "Exprimer une inconnue en fonction des deux autres à partir d’une équation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On isole une inconnue ; dans l’exemple de la leçon, la première équation donne $x = 2y + 3z - 9$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Se ramener à deux inconnues",
          "stepTheme": "Se ramener à deux inconnues",
          "stepBadge": "Se ramener à deux inconnues",
          "paragraphText": "• Exemple de la leçon : le système est formé de $x - 2y - 3z = -9$, de $2x + 5y - 3z = 0$ et de $x + y + 2z = 9$.\nEn remplaçant $x$ par $2y + 3z - 9$ dans les deux dernières équations, on obtient le système réduit formé de $9y + 3z = 18$ et de $3y + 5z = 18$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q2",
            "type": "mcq",
            "prompt": "Après substitution de $x = 2y + 3z - 9$ dans le système de la leçon, la deuxième équation devient :",
            "options": [
              "$9y + 3z = 18$",
              "$3y + 5z = 18$",
              "$9y - 3z = 18$",
              "$5y + 3z = 9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $2(2y + 3z - 9) + 5y - 3z = 9y + 3z - 18$, d’où $9y + 3z = 18$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Trouver $y$ puis $z$",
          "stepTheme": "Trouver $y$ puis $z$",
          "stepBadge": "Trouver $y$ puis $z$",
          "paragraphText": "• Suite de l’exemple : le système réduit donne $3y + z = 6$, donc $z = 6 - 3y$.\nEn reportant dans $3y + 5z = 18$, on obtient $-12y = -12$, soit $y = 1$, puis $z = 6 - 3 = 3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q3",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, les valeurs de $y$ et de $z$ sont :",
            "options": [
              "$y = 3$ et $z = 1$",
              "$y = 1$ et $z = 3$",
              "$y = 2$ et $z = 0$",
              "$y = 1$ et $z = -3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La résolution du système réduit donne $y = 1$, puis $z = 6 - 3 \\times 1 = 3$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le triplet solution complet",
          "stepTheme": "Le triplet solution complet",
          "stepBadge": "Le triplet solution complet",
          "paragraphText": "• Fin de l’exemple : on reporte $y = 1$ et $z = 3$ dans $x = 2y + 3z - 9$.\nOn obtient $x = 2 + 9 - 9 = 2$, et l’ensemble solution est le singleton formé du triplet $(2 ; 1 ; 3)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q4",
            "type": "mcq",
            "prompt": "Le triplet solution du système formé des équations $x - 2y - 3z = -9$, $2x + 5y - 3z = 0$ et $x + y + 2z = 9$ est :",
            "options": [
              "$(2 ; 3 ; 1)$",
              "$(1 ; 2 ; 3)$",
              "$(2 ; 1 ; 3)$",
              "$(3 ; 1 ; 2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On obtient $x = 2$, $y = 1$ et $z = 3$ : le triplet est $(2 ; 1 ; 3)$ (exemple de la leçon, revérifié dans les trois équations)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Vérifier le triplet dans les trois équations",
          "stepTheme": "Vérifier le triplet dans les trois équations",
          "stepBadge": "Vérifier le triplet dans les trois équations",
          "paragraphText": "• Réflexe : un triplet n’est solution que s’il vérifie les trois équations du système.\nPour $(2 ; 1 ; 3)$ : la première équation donne $2 - 2 - 9 = -9$, la deuxième $4 + 5 - 9 = 0$ et la troisième $2 + 1 + 6 = 9$ ; les trois égalités sont vraies.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q5",
            "type": "mcq",
            "prompt": "Le triplet $(2 ; 1 ; 3)$ vérifie la deuxième équation $2x + 5y - 3z = 0$ car le calcul donne :",
            "options": [
              "$4 + 5 - 9 = 0$",
              "$2 + 5 - 3 = 4$",
              "$4 + 5 + 9 = 18$",
              "$2 - 5 - 9 = -12$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace : $2 \\times 2 + 5 \\times 1 - 3 \\times 3 = 4 + 5 - 9 = 0$ ; l’équation est bien vérifiée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier de calculer la première inconnue",
          "stepTheme": "Ne pas oublier de calculer la première inconnue",
          "stepBadge": "Ne pas oublier de calculer la première inconnue",
          "paragraphText": "• Piège : la substitution donne d’abord les deux dernières inconnues ; il reste à reporter leurs valeurs dans l’expression mise de côté au départ.\nS’arrêter à $y = 1$ et $z = 3$ laisse le triplet incomplet : $x$ se calcule ensuite par $x = 2y + 3z - 9$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q6",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, après avoir trouvé $y = 1$ et $z = 3$, comment obtient-on $x$ ?",
            "options": [
              "En résolvant une nouvelle équation graphique",
              "En reportant $y$ et $z$ dans l’expression $x = 2y + 3z - 9$",
              "En ajoutant $y$ et $z$",
              "En prenant l’opposé de $z$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’expression $x = 2y + 3z - 9$, établie à la première étape, donne $x = 2$ une fois $y$ et $z$ connus."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q1",
          "type": "mcq",
          "prompt": "Dans la méthode de substitution pour un système de trois équations, la première étape consiste à :",
          "options": [
            "Éliminer une inconnue par combinaisons de lignes",
            "Calculer un déterminant",
            "Tracer trois droites",
            "Exprimer une inconnue en fonction des deux autres à partir d’une équation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On isole une inconnue ; dans l’exemple de la leçon, la première équation donne $x = 2y + 3z - 9$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q2",
          "type": "mcq",
          "prompt": "Après substitution de $x = 2y + 3z - 9$ dans le système de la leçon, la deuxième équation devient :",
          "options": [
            "$9y + 3z = 18$",
            "$3y + 5z = 18$",
            "$9y - 3z = 18$",
            "$5y + 3z = 9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $2(2y + 3z - 9) + 5y - 3z = 9y + 3z - 18$, d’où $9y + 3z = 18$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q3",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, les valeurs de $y$ et de $z$ sont :",
          "options": [
            "$y = 3$ et $z = 1$",
            "$y = 1$ et $z = 3$",
            "$y = 2$ et $z = 0$",
            "$y = 1$ et $z = -3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La résolution du système réduit donne $y = 1$, puis $z = 6 - 3 \\times 1 = 3$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q4",
          "type": "mcq",
          "prompt": "Le triplet solution du système formé des équations $x - 2y - 3z = -9$, $2x + 5y - 3z = 0$ et $x + y + 2z = 9$ est :",
          "options": [
            "$(2 ; 3 ; 1)$",
            "$(1 ; 2 ; 3)$",
            "$(2 ; 1 ; 3)$",
            "$(3 ; 1 ; 2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On obtient $x = 2$, $y = 1$ et $z = 3$ : le triplet est $(2 ; 1 ; 3)$ (exemple de la leçon, revérifié dans les trois équations)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q5",
          "type": "mcq",
          "prompt": "Le triplet $(2 ; 1 ; 3)$ vérifie la deuxième équation $2x + 5y - 3z = 0$ car le calcul donne :",
          "options": [
            "$4 + 5 - 9 = 0$",
            "$2 + 5 - 3 = 4$",
            "$4 + 5 + 9 = 18$",
            "$2 - 5 - 9 = -12$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace : $2 \\times 2 + 5 \\times 1 - 3 \\times 3 = 4 + 5 - 9 = 0$ ; l’équation est bien vérifiée."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q6",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, après avoir trouvé $y = 1$ et $z = 3$, comment obtient-on $x$ ?",
          "options": [
            "En résolvant une nouvelle équation graphique",
            "En reportant $y$ et $z$ dans l’expression $x = 2y + 3z - 9$",
            "En ajoutant $y$ et $z$",
            "En prenant l’opposé de $z$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’expression $x = 2y + 3z - 9$, établie à la première étape, donne $x = 2$ une fois $y$ et $z$ connus."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06",
      "order": 6,
      "title": "Résolution par la méthode du pivot de Gauss",
      "summary": "Transformer un système de trois équations en système triangulaire équivalent par combinaisons de lignes, puis remonter.",
      "conceptExplanation": "La méthode du pivot de Gauss consiste à remplacer les équations du système par des combinaisons de lignes pour éliminer successivement les inconnues et obtenir un système triangulaire équivalent, que l’on résout en remontant.\nExemple de la leçon : pour le système formé de $x - 5y - 7z = 3$, $5x + 3y + z = 3$ et $3x + y - 2z = -1$, les combinaisons $L_2 - 5L_1$ et $L_3 - 3L_1$ donnent $28y + 36z = -12$ et $16y + 19z = -10$ ; une deuxième élimination donne $-22z = -44$.\nLa remontée donne $z = 2$, puis $y = -3$, puis $x = 2$.",
      "keyRule": "Pivot de Gauss : éliminer par combinaisons de lignes entières jusqu’au triangle, puis remonter de $z$ vers $x$.",
      "formulas": [],
      "workedExample": {
        "title": "Résolution par le pivot de Gauss (exemple de la leçon)",
        "statement": "Résous par la méthode du pivot de Gauss le système formé des équations $x - 5y - 7z = 3$, $5x + 3y + z = 3$ et $3x + y - 2z = -1$.",
        "methodSteps": [
          "Les combinaisons $L_2 - 5L_1$ et $L_3 - 3L_1$ éliminent $x$ et donnent $28y + 36z = -12$ et $16y + 19z = -10$.",
          "On simplifie la première en $14y + 18z = -6$, puis une deuxième élimination donne $-22z = -44$, soit $z = 2$.",
          "On remonte : $14y + 18 \\times 2 = -6$ donne $y = -3$, puis la première équation donne $x = 2$."
        ],
        "conclusion": "L’ensemble solution est le singleton formé du triplet $(2 ; -3 ; 2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La méthode du pivot de Gauss",
          "stepTheme": "La méthode du pivot de Gauss",
          "stepBadge": "La méthode du pivot de Gauss",
          "paragraphText": "• Méthode de la leçon : le pivot de Gauss transforme le système, par des combinaisons de ses lignes, en un système triangulaire équivalent.\nOn note les équations $L_1$, $L_2$ et $L_3$ ; chaque nouvelle ligne est une combinaison des anciennes, et le système garde les mêmes solutions à chaque étape.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q1",
            "type": "mcq",
            "prompt": "La méthode du pivot de Gauss consiste à transformer le système en :",
            "options": [
              "Un système de deux équations",
              "Un système triangulaire équivalent",
              "Un système sans inconnues",
              "Un système d’inéquations"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pivot élimine une inconnue ligne après ligne jusqu’à obtenir un système triangulaire, qui se résout en remontant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La première élimination",
          "stepTheme": "La première élimination",
          "stepBadge": "La première élimination",
          "paragraphText": "• Exemple de la leçon : le système est formé de $x - 5y - 7z = 3$ ($L_1$), de $5x + 3y + z = 3$ ($L_2$) et de $3x + y - 2z = -1$ ($L_3$).\nLa ligne $L_2 - 5L_1$ élimine $x$ dans la deuxième équation et donne $28y + 36z = -12$ ; la ligne $L_3 - 3L_1$ donne $16y + 19z = -10$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q2",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, la combinaison $L_2 - 5L_1$ donne l’équation :",
            "options": [
              "$28y + 36z = -12$",
              "$14y + 18z = -6$",
              "$16y + 19z = -10$",
              "$-22z = -44$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule ligne à ligne : $x$ disparaît, $3y + 25y = 28y$, $z + 35z = 36z$ et $3 - 15 = -12$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Simplifier une ligne",
          "stepTheme": "Simplifier une ligne",
          "stepBadge": "Simplifier une ligne",
          "paragraphText": "• Suite de l’exemple : la ligne $28y + 36z = -12$ peut être divisée par $2$, ce qui donne $14y + 18z = -6$.\nDiviser tous les coefficients d’une équation par un même nombre non nul ne change pas les solutions du système.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q3",
            "type": "mcq",
            "prompt": "En divisant l’équation $28y + 36z = -12$ par $2$, on obtient :",
            "options": [
              "$28y + 18z = -6$",
              "$14y + 36z = -12$",
              "$14y + 18z = -6$",
              "$14y + 18z = -12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On divise chaque terme par $2$ : $14y + 18z = -6$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La deuxième élimination",
          "stepTheme": "La deuxième élimination",
          "stepBadge": "La deuxième élimination",
          "paragraphText": "• Suite de l’exemple : pour éliminer $y$ entre $14y + 18z = -6$ et $16y + 19z = -10$, on calcule $14$ fois la deuxième moins $16$ fois la première.\nOn obtient $-22z = -44$, une équation à la seule inconnue $z$ : le système est devenu triangulaire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q4",
            "type": "mcq",
            "prompt": "La deuxième élimination de l’exemple de la leçon donne l’équation :",
            "options": [
              "$22z = 44$",
              "$-22z = -44$",
              "$-22z = 44$",
              "$22z = -44$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le calcul donne $-22z = -44$, d’où $z = 2$ à l’étape suivante (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La remontée : $z$, puis $y$",
          "stepTheme": "La remontée : $z$, puis $y$",
          "stepBadge": "La remontée : $z$, puis $y$",
          "paragraphText": "• Suite de l’exemple : de $-22z = -44$, on tire $z = 2$.\nOn remonte dans $14y + 18z = -6$ : $14y + 36 = -6$, soit $14y = -42$ et $y = -3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q5",
            "type": "mcq",
            "prompt": "Dans l’exemple de la leçon, après la triangularisation, on obtient successivement :",
            "options": [
              "$z = -2$ puis $y = 3$",
              "$z = 2$ puis $y = -3$",
              "$z = 2$ puis $y = 3$",
              "$z = -2$ puis $y = -3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On résout $-22z = -44$, soit $z = 2$, puis $14y + 18 \\times 2 = -6$ donne $y = -3$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le triplet solution par le pivot",
          "stepTheme": "Le triplet solution par le pivot",
          "stepBadge": "Le triplet solution par le pivot",
          "paragraphText": "• Fin de l’exemple : on remonte dans la première équation $x - 5y - 7z = 3$ avec $y = -3$ et $z = 2$.\nOn obtient $x + 15 - 14 = 3$, soit $x = 2$ ; l’ensemble solution est le singleton formé du triplet $(2 ; -3 ; 2)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q6",
            "type": "mcq",
            "prompt": "Le triplet solution du système formé des équations $x - 5y - 7z = 3$, $5x + 3y + z = 3$ et $3x + y - 2z = -1$ est :",
            "options": [
              "$(2 ; 3 ; 2)$",
              "$(2 ; -3 ; -2)$",
              "$(2 ; -3 ; 2)$",
              "$(-2 ; -3 ; 2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La remontée donne $z = 2$, $y = -3$ puis $x = 2$ : le triplet est $(2 ; -3 ; 2)$ (exemple de la leçon, revérifié dans les trois équations)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Des opérations sur les lignes entières",
          "stepTheme": "Des opérations sur les lignes entières",
          "stepBadge": "Des opérations sur les lignes entières",
          "paragraphText": "• Piège : une combinaison de lignes porte sur l’équation entière, second membre compris.\nModifier un seul coefficient, ou oublier le second membre dans la combinaison, détruit l’équivalence et fausse toutes les étapes suivantes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q7",
            "type": "mcq",
            "prompt": "Dans la combinaison $L_2 - 5L_1$, on doit appliquer l’opération :",
            "options": [
              "Au seul coefficient de $x$",
              "À toute l’équation, second membre compris",
              "Aux coefficients de $y$ et de $z$ seulement",
              "Au second membre seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une combinaison de lignes remplace une équation entière par une combinaison des deux équations entières, seconds membres compris."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q1",
          "type": "mcq",
          "prompt": "La méthode du pivot de Gauss consiste à transformer le système en :",
          "options": [
            "Un système de deux équations",
            "Un système triangulaire équivalent",
            "Un système sans inconnues",
            "Un système d’inéquations"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pivot élimine une inconnue ligne après ligne jusqu’à obtenir un système triangulaire, qui se résout en remontant."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q2",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, la combinaison $L_2 - 5L_1$ donne l’équation :",
          "options": [
            "$28y + 36z = -12$",
            "$14y + 18z = -6$",
            "$16y + 19z = -10$",
            "$-22z = -44$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule ligne à ligne : $x$ disparaît, $3y + 25y = 28y$, $z + 35z = 36z$ et $3 - 15 = -12$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q3",
          "type": "mcq",
          "prompt": "En divisant l’équation $28y + 36z = -12$ par $2$, on obtient :",
          "options": [
            "$28y + 18z = -6$",
            "$14y + 36z = -12$",
            "$14y + 18z = -6$",
            "$14y + 18z = -12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On divise chaque terme par $2$ : $14y + 18z = -6$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q4",
          "type": "mcq",
          "prompt": "La deuxième élimination de l’exemple de la leçon donne l’équation :",
          "options": [
            "$22z = 44$",
            "$-22z = -44$",
            "$-22z = 44$",
            "$22z = -44$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le calcul donne $-22z = -44$, d’où $z = 2$ à l’étape suivante (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q5",
          "type": "mcq",
          "prompt": "Dans l’exemple de la leçon, après la triangularisation, on obtient successivement :",
          "options": [
            "$z = -2$ puis $y = 3$",
            "$z = 2$ puis $y = -3$",
            "$z = 2$ puis $y = 3$",
            "$z = -2$ puis $y = -3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On résout $-22z = -44$, soit $z = 2$, puis $14y + 18 \\times 2 = -6$ donne $y = -3$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q6",
          "type": "mcq",
          "prompt": "Le triplet solution du système formé des équations $x - 5y - 7z = 3$, $5x + 3y + z = 3$ et $3x + y - 2z = -1$ est :",
          "options": [
            "$(2 ; 3 ; 2)$",
            "$(2 ; -3 ; -2)$",
            "$(2 ; -3 ; 2)$",
            "$(-2 ; -3 ; 2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La remontée donne $z = 2$, $y = -3$ puis $x = 2$ : le triplet est $(2 ; -3 ; 2)$ (exemple de la leçon, revérifié dans les trois équations)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q7",
          "type": "mcq",
          "prompt": "Dans la combinaison $L_2 - 5L_1$, on doit appliquer l’opération :",
          "options": [
            "Au seul coefficient de $x$",
            "À toute l’équation, second membre compris",
            "Aux coefficients de $y$ et de $z$ seulement",
            "Au second membre seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une combinaison de lignes remplace une équation entière par une combinaison des deux équations entières, seconds membres compris."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07",
      "order": 7,
      "title": "Applications : mettre un problème en système",
      "summary": "Traduire des situations concrètes en systèmes d’équations linéaires, les résoudre et interpréter la solution.",
      "conceptExplanation": "Plusieurs exercices de la leçon se ramènent à un système. Dans la situation complexe, un fermier compte les pattes de ses canards et de ses lapins et les bosses de ses dromadaires ($130$), les têtes ($46$) et les oreilles des lapins et des dromadaires ($38$) : avec $x$ canards, $y$ lapins et $z$ dromadaires, on obtient $2x + 4y + z = 130$, $x + y + z = 46$ et $y + z = 19$, d’où $27$ canards, $19$ lapins et $0$ dromadaire.\nAutre application : une parabole $y = ax^2 + bx + c$ passant par trois points donne un système de trois équations en $a$, $b$ et $c$ ; pour $A(1 ; 0)$, $B(2 ; -5)$ et $C(3 ; -12)$, on obtient $a = -1$, $b = -2$ et $c = 3$.\nUn troisième exercice, sur un nombre de trois chiffres, donne de même un système dont la solution fournit les chiffres $5$, $7$ et $2$.",
      "keyRule": "Mettre en équation, c’est choisir une inconnue par quantité cherchée, traduire chaque information par une équation, puis interpréter le triplet obtenu.",
      "formulas": [],
      "workedExample": {
        "title": "La parabole passant par trois points (exercice de la leçon)",
        "statement": "Détermine une équation de la parabole dont la courbe passe par les points $A(1 ; 0)$, $B(2 ; -5)$ et $C(3 ; -12)$.",
        "methodSteps": [
          "L’équation cherchée est de la forme $y = ax^2 + bx + c$.",
          "Le passage par les trois points donne le système formé de $a + b + c = 0$, $4a + 2b + c = -5$ et $9a + 3b + c = -12$.",
          "La résolution, par substitution ou par pivot de Gauss, donne $a = -1$, $b = -2$ et $c = 3$."
        ],
        "conclusion": "L’équation de la parabole est $y = -x^2 - 2x + 3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Traduire un problème en système",
          "stepTheme": "Traduire un problème en système",
          "stepBadge": "Traduire un problème en système",
          "paragraphText": "• Principe de la situation complexe de la leçon : on associe une inconnue à chaque quantité cherchée.\nUn fermier élève des canards, des lapins et des dromadaires : on note $x$ le nombre de canards, $y$ le nombre de lapins et $z$ le nombre de dromadaires.\nChaque comptage du fermier se traduit ensuite par une équation.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q1",
            "type": "mcq",
            "prompt": "Dans la mise en équation de la situation complexe de la leçon, l’inconnue $z$ représente :",
            "options": [
              "Le nombre de canards",
              "Le nombre de lapins",
              "Le nombre de dromadaires",
              "Le nombre de pattes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La mise en équation pose $x$ pour les canards, $y$ pour les lapins et $z$ pour les dromadaires."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les trois équations du problème du fermier",
          "stepTheme": "Les trois équations du problème du fermier",
          "stepBadge": "Les trois équations du problème du fermier",
          "paragraphText": "• Traduction de la leçon : le total des pattes des canards et des lapins et des bosses des dromadaires vaut $130$, soit $2x + 4y + z = 130$.\nLe nombre de têtes vaut $46$, soit $x + y + z = 46$, et le nombre d’oreilles des lapins et des dromadaires vaut $38$, soit $2y + 2z = 38$, c’est-à-dire $y + z = 19$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q2",
            "type": "mcq",
            "prompt": "L’équation traduisant le comptage des têtes dans le problème du fermier est :",
            "options": [
              "$2x + 4y + z = 130$",
              "$x + y + z = 130$",
              "$2y + 2z = 38$",
              "$x + y + z = 46$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Chaque animal a une tête : le total des têtes est $x + y + z$, égalé à $46$ (situation complexe de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La solution du problème du fermier",
          "stepTheme": "La solution du problème du fermier",
          "stepBadge": "La solution du problème du fermier",
          "paragraphText": "• Résolution de la leçon : le système formé des trois équations, avec la condition $y \\geq 16$, donne $x = 27$, $y = 19$ et $z = 0$.\nLe fermier a donc $27$ canards, $19$ lapins et $0$ dromadaire, ce qui respecte la condition d’avoir au moins $16$ lapins.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q3",
            "type": "mcq",
            "prompt": "D’après la résolution de la situation complexe, le fermier possède :",
            "options": [
              "$27$ canards, $19$ lapins et $0$ dromadaire",
              "$19$ canards, $27$ lapins et $0$ dromadaire",
              "$27$ canards, $16$ lapins et $3$ dromadaires",
              "$26$ canards, $19$ lapins et $1$ dromadaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le système donne $x = 27$, $y = 19$ et $z = 0$, avec $19 \\geq 16$ : la condition sur les lapins est bien remplie (corrigé de la leçon, revérifié dans les trois comptages)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Une inconnue peut valoir zéro",
          "stepTheme": "Une inconnue peut valoir zéro",
          "stepBadge": "Une inconnue peut valoir zéro",
          "paragraphText": "• Piège : la valeur $z = 0$ est une réponse acceptable à un problème d’effectifs : elle signifie simplement qu’il n’y a aucun dromadaire.\nRejeter une solution parce qu’une inconnue est nulle serait une erreur ; on vérifie seulement les conditions du problème, ici $y \\geq 16$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q4",
            "type": "mcq",
            "prompt": "La solution $z = 0$ du problème du fermier doit être :",
            "options": [
              "Rejetée, car une inconnue ne peut pas être nulle",
              "Acceptée : elle signifie qu’il n’y a aucun dromadaire",
              "Remplacée par $z = 1$",
              "Ignorée, car seuls les canards comptent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un effectif nul est possible : le fermier n’a aucun dromadaire, et la condition $y \\geq 16$ reste vérifiée avec $y = 19$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Déterminer une parabole par trois points",
          "stepTheme": "Déterminer une parabole par trois points",
          "stepBadge": "Déterminer une parabole par trois points",
          "paragraphText": "• Exercice de la leçon : l’équation d’une parabole est de la forme $y = ax^2 + bx + c$.\nSi sa courbe passe par les points $A(1 ; 0)$, $B(2 ; -5)$ et $C(3 ; -12)$, chaque point donne une équation : $a + b + c = 0$, $4a + 2b + c = -5$ et $9a + 3b + c = -12$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q5",
            "type": "mcq",
            "prompt": "Le passage de la parabole $y = ax^2 + bx + c$ par le point $A(1 ; 0)$ donne l’équation :",
            "options": [
              "$a + b + c = 0$",
              "$4a + 2b + c = 0$",
              "$a + b + c = 1$",
              "$a + 2b + 3c = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace $x$ par $1$ et $y$ par $0$ : $a + b + c = 0$ (exercice de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les coefficients de la parabole",
          "stepTheme": "Les coefficients de la parabole",
          "stepBadge": "Les coefficients de la parabole",
          "paragraphText": "• Suite de l’exercice : la résolution du système, par substitution ou par pivot de Gauss, donne $a = -1$, $b = -2$ et $c = 3$.\nL’équation de la parabole est donc $y = -x^2 - 2x + 3$, que l’on peut vérifier aux trois points.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q6",
            "type": "mcq",
            "prompt": "Les coefficients de la parabole passant par $A(1 ; 0)$, $B(2 ; -5)$ et $C(3 ; -12)$ sont :",
            "options": [
              "$a = 1$, $b = 2$ et $c = -3$",
              "$a = -1$, $b = -2$ et $c = 3$",
              "$a = -1$, $b = 2$ et $c = 3$",
              "$a = 3$, $b = -2$ et $c = -1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La résolution du système donne $a = -1$, $b = -2$ et $c = 3$ (corrigé de la leçon, revérifié : en $x = 2$, $-4 - 4 + 3 = -5$)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Un nombre à trois chiffres",
          "stepTheme": "Un nombre à trois chiffres",
          "stepBadge": "Un nombre à trois chiffres",
          "paragraphText": "• Exercice de la leçon : on cherche un nombre de trois chiffres dont la somme des chiffres est $14$, qui augmente de $180$ quand on permute les chiffres des dizaines et des centaines, et qui diminue de $297$ quand on permute les chiffres des unités et des centaines.\nEn notant $x$ le chiffre des unités, $y$ celui des dizaines et $z$ celui des centaines, la résolution du système donne $x = 2$, $y = 7$ et $z = 5$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q7",
            "type": "mcq",
            "prompt": "Le nombre de trois chiffres cherché dans l’exercice de la leçon est :",
            "options": [
              "$275$",
              "$527$",
              "$572$",
              "$752$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les chiffres sont $z = 5$ centaines, $y = 7$ dizaines et $x = 2$ unités : le nombre est $572$, dont la somme des chiffres vaut bien $14$ (corrigé de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q1",
          "type": "mcq",
          "prompt": "Dans la mise en équation de la situation complexe de la leçon, l’inconnue $z$ représente :",
          "options": [
            "Le nombre de canards",
            "Le nombre de lapins",
            "Le nombre de dromadaires",
            "Le nombre de pattes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La mise en équation pose $x$ pour les canards, $y$ pour les lapins et $z$ pour les dromadaires."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q2",
          "type": "mcq",
          "prompt": "L’équation traduisant le comptage des têtes dans le problème du fermier est :",
          "options": [
            "$2x + 4y + z = 130$",
            "$x + y + z = 130$",
            "$2y + 2z = 38$",
            "$x + y + z = 46$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Chaque animal a une tête : le total des têtes est $x + y + z$, égalé à $46$ (situation complexe de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q3",
          "type": "mcq",
          "prompt": "D’après la résolution de la situation complexe, le fermier possède :",
          "options": [
            "$27$ canards, $19$ lapins et $0$ dromadaire",
            "$19$ canards, $27$ lapins et $0$ dromadaire",
            "$27$ canards, $16$ lapins et $3$ dromadaires",
            "$26$ canards, $19$ lapins et $1$ dromadaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le système donne $x = 27$, $y = 19$ et $z = 0$, avec $19 \\geq 16$ : la condition sur les lapins est bien remplie (corrigé de la leçon, revérifié dans les trois comptages)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q4",
          "type": "mcq",
          "prompt": "La solution $z = 0$ du problème du fermier doit être :",
          "options": [
            "Rejetée, car une inconnue ne peut pas être nulle",
            "Acceptée : elle signifie qu’il n’y a aucun dromadaire",
            "Remplacée par $z = 1$",
            "Ignorée, car seuls les canards comptent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un effectif nul est possible : le fermier n’a aucun dromadaire, et la condition $y \\geq 16$ reste vérifiée avec $y = 19$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q5",
          "type": "mcq",
          "prompt": "Le passage de la parabole $y = ax^2 + bx + c$ par le point $A(1 ; 0)$ donne l’équation :",
          "options": [
            "$a + b + c = 0$",
            "$4a + 2b + c = 0$",
            "$a + b + c = 1$",
            "$a + 2b + 3c = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace $x$ par $1$ et $y$ par $0$ : $a + b + c = 0$ (exercice de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q6",
          "type": "mcq",
          "prompt": "Les coefficients de la parabole passant par $A(1 ; 0)$, $B(2 ; -5)$ et $C(3 ; -12)$ sont :",
          "options": [
            "$a = 1$, $b = 2$ et $c = -3$",
            "$a = -1$, $b = -2$ et $c = 3$",
            "$a = -1$, $b = 2$ et $c = 3$",
            "$a = 3$, $b = -2$ et $c = -1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La résolution du système donne $a = -1$, $b = -2$ et $c = 3$ (corrigé de la leçon, revérifié : en $x = 2$, $-4 - 4 + 3 = -5$)."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p07_q7",
          "type": "mcq",
          "prompt": "Le nombre de trois chiffres cherché dans l’exercice de la leçon est :",
          "options": [
            "$275$",
            "$527$",
            "$572$",
            "$752$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les chiffres sont $z = 5$ centaines, $y = 7$ dizaines et $x = 2$ unités : le nombre est $572$, dont la somme des chiffres vaut bien $14$ (corrigé de la leçon)."
        }
      ]
    }
  ]
};
