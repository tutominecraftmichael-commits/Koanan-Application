import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 12 : Équations différentielles » (format v2 : mini-leçons de 5 à 8 étapes). La situation de dissolution de la section A n'est jamais résolue dans le PDF : elle n'est pas convertie.
// Source : https://lyc.ecole-ci.org/course/view.php?id=2855
export const MATHS_TLE_CD_L12_EQUATIONS_DIFFERENTIELLES: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l12_equations_differentielles",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 12,
  "title": "Leçon 12 : Équations différentielles",
  "summary": "Notion d'équation différentielle, résolution des équations y'+ay=b et y''+my=0, solutions vérifiant des conditions initiales, équations avec second membre et modélisation d'une croissance de population.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2855",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01",
      "order": 1,
      "title": "Notion d'équation différentielle",
      "summary": "Définition d'une équation différentielle, exemples et identification parmi plusieurs équations.",
      "conceptExplanation": "On appelle équation différentielle toute équation ayant pour inconnue une fonction et dans laquelle figure au moins une des dérivées successives de la fonction inconnue.\nPar exemple, $(E_1) : -2f' + 5f = 0$ et $(E_2) : f'' - 25f = 2x + 1$ sont des équations différentielles d'inconnue $f$.\nToute autre lettre désignant une fonction peut être utilisée à la place de $f$ ; dans la suite du cours, on utilise $y$ comme fonction inconnue.\nRésoudre une équation différentielle sur un intervalle $K$, c'est déterminer l'ensemble des fonctions définies sur $K$ qui sont solutions de cette équation différentielle.",
      "keyRule": "Équation différentielle = équation d'inconnue une fonction, avec au moins une de ses dérivées. Résoudre = trouver toutes les fonctions solutions.",
      "formulas": [
        {
          "name": "Exemple d'équation du premier ordre",
          "formula": "-2f' + 5f = 0",
          "note": "Inconnue : la fonction f."
        },
        {
          "name": "Exemple d'équation du second ordre",
          "formula": "f'' - 25f = 2x + 1",
          "note": "Inconnue : la fonction f."
        }
      ],
      "workedExample": {
        "title": "Identifier les équations différentielles",
        "statement": "Parmi les équations $2y^2 + y = 2$, $y' + 4 = 0$, $y^2 = 1$, $y'' + 2y' + y = 5$ et $y + 3 = 0$, indique celles qui sont des équations différentielles.",
        "methodSteps": [
          "$2y^2 + y = 2$, $y^2 = 1$ et $y + 3 = 0$ ne font intervenir aucune dérivée de $y$ : ce ne sont pas des équations différentielles.",
          "$y' + 4 = 0$ fait intervenir la dérivée première de $y$ : c'est une équation différentielle.",
          "$y'' + 2y' + y = 5$ fait intervenir les dérivées première et seconde de $y$ : c'est une équation différentielle."
        ],
        "conclusion": "Les équations différentielles sont $y' + 4 = 0$ et $y'' + 2y' + y = 5$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une équation différentielle",
          "stepTheme": "La définition d'une équation différentielle",
          "stepBadge": "La définition d'une équation différentielle",
          "paragraphText": "• On appelle équation différentielle toute équation ayant pour inconnue une fonction et dans laquelle figure au moins une des dérivées successives de la fonction inconnue.\nL'inconnue n'est donc pas un nombre, mais une fonction.\nToute autre lettre désignant une fonction peut être utilisée à la place de $f$ ; dans la suite du cours, on utilise $y$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q1",
            "type": "mcq",
            "prompt": "Qu'est-ce qu'une équation différentielle ?",
            "options": [
              "Une équation dont l'inconnue est une fonction et dans laquelle figure au moins une de ses dérivées",
              "Une équation dont l'inconnue est un nombre réel",
              "Une équation sans aucune dérivée",
              "Une équation dont l'inconnue est une intégrale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une équation différentielle est une équation dont l'inconnue est une fonction et dans laquelle figure au moins une des dérivées successives de la fonction inconnue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les équations $(E_1)$ et $(E_2)$",
          "stepTheme": "Les équations $(E_1)$ et $(E_2)$",
          "stepBadge": "Les équations $(E_1)$ et $(E_2)$",
          "paragraphText": "• $(E_1) : -2f' + 5f = 0$ fait intervenir la dérivée première de $f$ : c'est une équation différentielle du premier ordre.\n$(E_2) : f'' - 25f = 2x + 1$ fait intervenir la dérivée seconde de $f$ : c'est une équation différentielle du second ordre.\nLes deux ont pour inconnue la fonction $f$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q2",
            "type": "mcq",
            "prompt": "Parmi $(E_1) : -2f' + 5f = 0$ et $(E_2) : f'' - 25f = 2x + 1$, lesquelles sont des équations différentielles ?",
            "options": [
              "Les deux",
              "$(E_1)$ seulement",
              "$(E_2)$ seulement",
              "Aucune des deux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "(E₁) fait intervenir f' et (E₂) fait intervenir f'' : les deux sont des équations différentielles d'inconnue f."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Identifier les équations différentielles parmi cinq équations",
          "stepTheme": "Identifier les équations différentielles parmi cinq équations",
          "stepBadge": "Identifier les équations différentielles parmi cinq équations",
          "paragraphText": "• Parmi $2y^2 + y = 2$, $y' + 4 = 0$, $y^2 = 1$, $y'' + 2y' + y = 5$ et $y + 3 = 0$ :\n$2y^2 + y = 2$, $y^2 = 1$ et $y + 3 = 0$ ne font intervenir aucune dérivée : ce ne sont pas des équations différentielles.\n$y' + 4 = 0$ et $y'' + 2y' + y = 5$ font intervenir des dérivées de $y$ : ce sont des équations différentielles.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q3",
            "type": "mcq",
            "prompt": "Parmi $2y^2 + y = 2$, $y' + 4 = 0$, $y^2 = 1$, $y'' + 2y' + y = 5$ et $y + 3 = 0$, lesquelles sont des équations différentielles ?",
            "options": [
              "$y' + 4 = 0$ et $y'' + 2y' + y = 5$",
              "$2y^2 + y = 2$ et $y^2 = 1$",
              "$y^2 = 1$ et $y + 3 = 0$",
              "$2y^2 + y = 2$ et $y + 3 = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seules y' + 4 = 0 et y'' + 2y' + y = 5 font intervenir des dérivées de y : ce sont les équations différentielles."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les équations $(F)$ et $(G)$ sont des équations différentielles",
          "stepTheme": "Les équations $(F)$ et $(G)$ sont des équations différentielles",
          "stepBadge": "Les équations $(F)$ et $(G)$ sont des équations différentielles",
          "paragraphText": "• Parmi $(E) : y^2 + y = 2$, $(F) : y' - (\\ln 2)y = 3$, $(G) : y'' - y' = 3x^2$ et $(H) : y = 3x$ :\n$(E)$ et $(H)$ ne font intervenir aucune dérivée : ce ne sont pas des équations différentielles.\n$(F)$ fait intervenir $y'$ et $(G)$ fait intervenir $y''$ et $y'$ : ce sont des équations différentielles.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q4",
            "type": "mcq",
            "prompt": "Parmi $(E) : y^2 + y = 2$, $(F) : y' - (\\ln 2)y = 3$, $(G) : y'' - y' = 3x^2$ et $(H) : y = 3x$, lesquelles sont des équations différentielles ?",
            "options": [
              "$(F)$ et $(G)$",
              "$(E)$ et $(H)$",
              "$(E)$ et $(F)$",
              "$(G)$ et $(H)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "(F) fait intervenir y' et (G) fait intervenir y'' et y' : ce sont les équations différentielles ; (E) et (H) n'ont aucune dérivée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Résoudre une équation différentielle",
          "stepTheme": "Résoudre une équation différentielle",
          "stepBadge": "Résoudre une équation différentielle",
          "paragraphText": "• Résoudre une équation différentielle sur un intervalle $K$, c'est déterminer l'ensemble des fonctions définies sur $K$ qui sont solutions de cette équation différentielle.\nOn cherche donc toutes les fonctions qui vérifient l'équation, et pas une seule.\nPar exemple, les solutions de $y' + 2y = 0$ sur $\\mathbb{R}$ sont toutes les fonctions $x \\mapsto ke^{-2x}$, $k \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q5",
            "type": "mcq",
            "prompt": "Que signifie « résoudre une équation différentielle sur un intervalle K » ?",
            "options": [
              "Déterminer l'ensemble des fonctions définies sur K qui en sont solutions",
              "Trouver une seule fonction qui en est solution",
              "Calculer une intégrale",
              "Trouver le nombre $y_0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Résoudre une équation différentielle sur K, c'est déterminer l'ensemble des fonctions définies sur K qui sont solutions de cette équation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y' = 3y$",
          "stepTheme": "Les solutions de $y' = 3y$",
          "stepBadge": "Les solutions de $y' = 3y$",
          "paragraphText": "• L'équation $y' = 3y$ est du type $y' + ay = 0$ avec $a = -3$ : ses solutions sont $x \\mapsto ke^{-ax} = ke^{3x}$, $k \\in \\mathbb{R}$.\nOn peut le vérifier : si $y(x) = ke^{3x}$, alors $y'(x) = 3ke^{3x} = 3y(x)$.\nLes autres formes proposées ne vérifient pas l'équation : par exemple, $ke^{-3x}$ donne $y' = -3y$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q6",
            "type": "mcq",
            "prompt": "L'équation différentielle $y' = 3y$ a pour solution la fonction :",
            "options": [
              "$x \\mapsto ke^{3x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-3x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto 3e^{kx}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto 3e^{-kx}$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y' = 3y est du type y' + ay = 0 avec a = −3 : ses solutions sont x ↦ ke^{−ax} = ke^{3x}, k ∈ ℝ."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q1",
          "type": "mcq",
          "prompt": "Qu'est-ce qu'une équation différentielle ?",
          "options": [
            "Une équation dont l'inconnue est une fonction et dans laquelle figure au moins une de ses dérivées",
            "Une équation dont l'inconnue est un nombre réel",
            "Une équation sans aucune dérivée",
            "Une équation dont l'inconnue est une intégrale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une équation différentielle est une équation dont l'inconnue est une fonction et dans laquelle figure au moins une des dérivées successives de la fonction inconnue."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q2",
          "type": "mcq",
          "prompt": "Parmi $(E_1) : -2f' + 5f = 0$ et $(E_2) : f'' - 25f = 2x + 1$, lesquelles sont des équations différentielles ?",
          "options": [
            "Les deux",
            "$(E_1)$ seulement",
            "$(E_2)$ seulement",
            "Aucune des deux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "(E₁) fait intervenir f' et (E₂) fait intervenir f'' : les deux sont des équations différentielles d'inconnue f."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q3",
          "type": "mcq",
          "prompt": "Parmi $2y^2 + y = 2$, $y' + 4 = 0$, $y^2 = 1$, $y'' + 2y' + y = 5$ et $y + 3 = 0$, lesquelles sont des équations différentielles ?",
          "options": [
            "$y' + 4 = 0$ et $y'' + 2y' + y = 5$",
            "$2y^2 + y = 2$ et $y^2 = 1$",
            "$y^2 = 1$ et $y + 3 = 0$",
            "$2y^2 + y = 2$ et $y + 3 = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seules y' + 4 = 0 et y'' + 2y' + y = 5 font intervenir des dérivées de y : ce sont les équations différentielles."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q4",
          "type": "mcq",
          "prompt": "Parmi $(E) : y^2 + y = 2$, $(F) : y' - (\\ln 2)y = 3$, $(G) : y'' - y' = 3x^2$ et $(H) : y = 3x$, lesquelles sont des équations différentielles ?",
          "options": [
            "$(F)$ et $(G)$",
            "$(E)$ et $(H)$",
            "$(E)$ et $(F)$",
            "$(G)$ et $(H)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "(F) fait intervenir y' et (G) fait intervenir y'' et y' : ce sont les équations différentielles ; (E) et (H) n'ont aucune dérivée."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q5",
          "type": "mcq",
          "prompt": "Que signifie « résoudre une équation différentielle sur un intervalle K » ?",
          "options": [
            "Déterminer l'ensemble des fonctions définies sur K qui en sont solutions",
            "Trouver une seule fonction qui en est solution",
            "Calculer une intégrale",
            "Trouver le nombre $y_0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Résoudre une équation différentielle sur K, c'est déterminer l'ensemble des fonctions définies sur K qui sont solutions de cette équation."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p01_q6",
          "type": "mcq",
          "prompt": "L'équation différentielle $y' = 3y$ a pour solution la fonction :",
          "options": [
            "$x \\mapsto ke^{3x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-3x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto 3e^{kx}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto 3e^{-kx}$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y' = 3y est du type y' + ay = 0 avec a = −3 : ses solutions sont x ↦ ke^{−ax} = ke^{3x}, k ∈ ℝ."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02",
      "order": 2,
      "title": "Équations du type $y' + ay = b$",
      "summary": "Les solutions de y'+ay=0 et de y'+ay=b (b≠0) : exponentielles et solution particulière constante.",
      "conceptExplanation": "Cas $b = 0$ : les solutions sur $\\mathbb{R}$ de $y' + ay = 0$ ($a \\in \\mathbb{R}$) sont les fonctions $x \\mapsto ke^{-ax}$, $k \\in \\mathbb{R}$.\nCas $b \\neq 0$ : les solutions sur $\\mathbb{R}$ de $y' + ay = b$ ($a \\in \\mathbb{R}^*$, $b \\in \\mathbb{R}^*$) sont les fonctions $x \\mapsto ke^{-ax} + \\frac{b}{a}$, $k \\in \\mathbb{R}$.\nCas $a = 0$ : l'équation devient $y' = b$ ; ses solutions sont les primitives de $x \\mapsto b$, c'est-à-dire les fonctions $x \\mapsto bx + c$, $c \\in \\mathbb{R}$.",
      "keyRule": "y'+ay=0 → ke^(−ax). y'+ay=b → ke^(−ax)+b/a. y'=b → bx+c.",
      "formulas": [
        {
          "name": "Solutions de y' + ay = 0",
          "formula": "x \\mapsto ke^{-ax}, \\quad k \\in \\mathbb{R}",
          "note": "Pour a ∈ ℝ."
        },
        {
          "name": "Solutions de y' + ay = b",
          "formula": "x \\mapsto ke^{-ax} + \\frac{b}{a}, \\quad k \\in \\mathbb{R}",
          "note": "Pour a ∈ ℝ*, b ∈ ℝ*."
        },
        {
          "name": "Solutions de y' = b",
          "formula": "x \\mapsto bx + c, \\quad c \\in \\mathbb{R}",
          "note": "Cas a = 0."
        }
      ],
      "workedExample": {
        "title": "Résoudre $y' + 2y = 6$",
        "statement": "Résous sur $\\mathbb{R}$ l'équation différentielle $y' + 2y = 6$.",
        "methodSteps": [
          "L'équation est du type $y' + ay = b$ avec $a = 2$ et $b = 6$.",
          "Les solutions sont donc $x \\mapsto ke^{-2x} + \\frac{6}{2}$, $k \\in \\mathbb{R}$.",
          "Soit $x \\mapsto ke^{-2x} + 3$, $k \\in \\mathbb{R}$."
        ],
        "conclusion": "Les solutions de $y' + 2y = 6$ sont les fonctions $x \\mapsto ke^{-2x} + 3$, $k \\in \\mathbb{R}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les solutions de $y' + ay = 0$",
          "stepTheme": "Les solutions de $y' + ay = 0$",
          "stepBadge": "Les solutions de $y' + ay = 0$",
          "paragraphText": "• Les solutions sur $\\mathbb{R}$ de $y' + ay = 0$ ($a \\in \\mathbb{R}$) sont les fonctions $x \\mapsto ke^{-ax}$, $k \\in \\mathbb{R}$.\nL'exposant est $-ax$ : le signe est important.\nPar exemple, les solutions de $y' + 2y = 0$ sont $x \\mapsto ke^{-2x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q1",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + ay = 0$ ($a \\in \\mathbb{R}$) ?",
            "options": [
              "$x \\mapsto ke^{-ax}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{ax}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ax + k$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-a} + x$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions de y' + ay = 0 sont les fonctions x ↦ ke^{−ax}, k ∈ ℝ."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y' + 2y = 0$",
          "stepTheme": "Les solutions de $y' + 2y = 0$",
          "stepBadge": "Les solutions de $y' + 2y = 0$",
          "paragraphText": "• L'équation $y' + 2y = 0$ est du type $y' + ay = 0$ avec $a = 2$.\nSes solutions sont donc $x \\mapsto ke^{-2x}$, $k \\in \\mathbb{R}$.\nOn vérifie : si $y(x) = ke^{-2x}$, alors $y'(x) = -2ke^{-2x} = -2y(x)$, donc $y' + 2y = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q2",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 2y = 0$ ?",
            "options": [
              "$x \\mapsto ke^{-2x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{2x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto 2e^{-kx}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-x}$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec a = 2, les solutions de y' + 2y = 0 sont x ↦ ke^{−2x}, k ∈ ℝ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $7y' = 3y$",
          "stepTheme": "Les solutions de $7y' = 3y$",
          "stepBadge": "Les solutions de $7y' = 3y$",
          "paragraphText": "• L'équation $7y' = 3y$ s'écrit $y' = \\frac{3}{7}y$, soit $y' - \\frac{3}{7}y = 0$ : c'est du type $y' + ay = 0$ avec $a = -\\frac{3}{7}$.\nSes solutions sont donc $x \\mapsto ke^{-ax} = ke^{\\frac{3}{7}x}$, $k \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q3",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $7y' = 3y$ ?",
            "options": [
              "$x \\mapsto ke^{\\frac{3}{7}x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-\\frac{3}{7}x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{\\frac{7}{3}x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{3x}$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "7y' = 3y donne y' = (3/7)y, soit a = −3/7 : les solutions sont x ↦ ke^{(3/7)x}, k ∈ ℝ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y' + 2y = 6$",
          "stepTheme": "Les solutions de $y' + 2y = 6$",
          "stepBadge": "Les solutions de $y' + 2y = 6$",
          "paragraphText": "• L'équation $y' + 2y = 6$ est du type $y' + ay = b$ avec $a = 2$ et $b = 6$.\nSes solutions sont $x \\mapsto ke^{-ax} + \\frac{b}{a} = ke^{-2x} + \\frac{6}{2}$, $k \\in \\mathbb{R}$.\nSoit $x \\mapsto ke^{-2x} + 3$, $k \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q4",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 2y = 6$ ?",
            "options": [
              "$x \\mapsto ke^{-2x} + 3$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-2x} - 3$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{2x} + 3$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{2x} - 3$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec a = 2 et b = 6, les solutions sont x ↦ ke^{−2x} + 6/2 = ke^{−2x} + 3, k ∈ ℝ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y' = 2y + 5$",
          "stepTheme": "Les solutions de $y' = 2y + 5$",
          "stepBadge": "Les solutions de $y' = 2y + 5$",
          "paragraphText": "• L'équation $y' = 2y + 5$ s'écrit $y' - 2y = 5$ : c'est du type $y' + ay = b$ avec $a = -2$ et $b = 5$.\nSes solutions sont $x \\mapsto ke^{-ax} + \\frac{b}{a} = ke^{2x} + \\frac{5}{-2}$, $k \\in \\mathbb{R}$.\nSoit $x \\mapsto ke^{2x} - \\frac{5}{2}$, $k \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q5",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' = 2y + 5$ ?",
            "options": [
              "$x \\mapsto ke^{2x} - \\frac{5}{2}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{2x} + \\frac{5}{2}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-3x} + \\frac{5}{2}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-3x} - \\frac{5}{2}$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y' = 2y + 5 donne a = −2 et b = 5 : les solutions sont x ↦ ke^{2x} + 5/(−2) = ke^{2x} − 5/2, k ∈ ℝ."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y' = 4y - 24$",
          "stepTheme": "Les solutions de $y' = 4y - 24$",
          "stepBadge": "Les solutions de $y' = 4y - 24$",
          "paragraphText": "• L'équation $y' = 4y - 24$ s'écrit $y' - 4y = -24$ : c'est du type $y' + ay = b$ avec $a = -4$ et $b = -24$.\nSes solutions sont $x \\mapsto ke^{-ax} + \\frac{b}{a} = ke^{4x} + \\frac{-24}{-4}$, $k \\in \\mathbb{R}$.\nSoit $x \\mapsto ke^{4x} + 6$, $k \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q6",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' = 4y - 24$ ?",
            "options": [
              "$x \\mapsto ke^{4x} + 6$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{4x} - 6$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{2x} - 6$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-3x} + 6$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y' = 4y − 24 donne a = −4 et b = −24 : les solutions sont x ↦ ke^{4x} + (−24)/(−4) = ke^{4x} + 6, k ∈ ℝ."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q1",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + ay = 0$ ($a \\in \\mathbb{R}$) ?",
          "options": [
            "$x \\mapsto ke^{-ax}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{ax}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ax + k$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-a} + x$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions de y' + ay = 0 sont les fonctions x ↦ ke^{−ax}, k ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q2",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 2y = 0$ ?",
          "options": [
            "$x \\mapsto ke^{-2x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{2x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto 2e^{-kx}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-x}$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec a = 2, les solutions de y' + 2y = 0 sont x ↦ ke^{−2x}, k ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q3",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $7y' = 3y$ ?",
          "options": [
            "$x \\mapsto ke^{\\frac{3}{7}x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-\\frac{3}{7}x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{\\frac{7}{3}x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{3x}$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "7y' = 3y donne y' = (3/7)y, soit a = −3/7 : les solutions sont x ↦ ke^{(3/7)x}, k ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q4",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 2y = 6$ ?",
          "options": [
            "$x \\mapsto ke^{-2x} + 3$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-2x} - 3$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{2x} + 3$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{2x} - 3$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec a = 2 et b = 6, les solutions sont x ↦ ke^{−2x} + 6/2 = ke^{−2x} + 3, k ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q5",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' = 2y + 5$ ?",
          "options": [
            "$x \\mapsto ke^{2x} - \\frac{5}{2}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{2x} + \\frac{5}{2}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-3x} + \\frac{5}{2}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-3x} - \\frac{5}{2}$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y' = 2y + 5 donne a = −2 et b = 5 : les solutions sont x ↦ ke^{2x} + 5/(−2) = ke^{2x} − 5/2, k ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p02_q6",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' = 4y - 24$ ?",
          "options": [
            "$x \\mapsto ke^{4x} + 6$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{4x} - 6$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{2x} - 6$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-3x} + 6$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y' = 4y − 24 donne a = −4 et b = −24 : les solutions sont x ↦ ke^{4x} + (−24)/(−4) = ke^{4x} + 6, k ∈ ℝ."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03",
      "order": 3,
      "title": "Solutions vérifiant une condition initiale (premier ordre)",
      "summary": "Unicité de la solution vérifiant une condition initiale pour y'+ay=b, et détermination de la constante k.",
      "conceptExplanation": "Pour tout couple $(x_0 ; y_0)$ de nombres réels, l'équation différentielle $y' + ay = b$ ($a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$) admet une unique solution sur $\\mathbb{R}$ qui prend la valeur $y_0$ en $x_0$ (c'est-à-dire telle que $y(x_0) = y_0$).\nPour la déterminer, on écrit la solution générale $x \\mapsto ke^{-ax} + \\frac{b}{a}$, puis on utilise la condition $y(x_0) = y_0$ pour trouver $k$.\nCas $a = 0$ : l'équation devient $y' = b$ ; ses solutions sont les primitives de $x \\mapsto b$, soit $x \\mapsto bx + c$, $c \\in \\mathbb{R}$.",
      "keyRule": "y'+ay=b : une unique solution vérifie y(x0)=y0. On trouve k avec la condition initiale.",
      "formulas": [
        {
          "name": "Unicité de la solution",
          "formula": "\\forall (x_0, y_0), \\exists! y, \\quad y' + ay = b \\text{ et } y(x_0) = y_0",
          "note": "Pour a, b réels."
        },
        {
          "name": "Solutions de y' = b",
          "formula": "x \\mapsto bx + c, \\quad c \\in \\mathbb{R}",
          "note": "Cas a = 0."
        }
      ],
      "workedExample": {
        "title": "La solution de $y' - 3y = 7$ avec $f(0) = 1$",
        "statement": "On donne l'équation différentielle $(E) : y' - 3y = 7$. Détermine la solution $f$ de $(E)$ qui vérifie $f(0) = 1$.",
        "methodSteps": [
          "Les solutions sur $\\mathbb{R}$ sont $x \\mapsto ce^{3x} - \\frac{7}{3}$, $c \\in \\mathbb{R}$ (ici $a = -3$ et $b = 7$).",
          "La condition $f(0) = 1$ donne $c - \\frac{7}{3} = 1$, soit $c = \\frac{10}{3}$.",
          "Donc $f(x) = \\frac{10}{3}e^{3x} - \\frac{7}{3}$."
        ],
        "conclusion": "La solution de $(E)$ qui vérifie $f(0) = 1$ est $f(x) = \\frac{10}{3}e^{3x} - \\frac{7}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'unicité de la solution vérifiant une condition initiale",
          "stepTheme": "L'unicité de la solution vérifiant une condition initiale",
          "stepBadge": "L'unicité de la solution vérifiant une condition initiale",
          "paragraphText": "• Pour tout couple $(x_0 ; y_0)$ de nombres réels, l'équation $y' + ay = b$ admet une unique solution sur $\\mathbb{R}$ qui prend la valeur $y_0$ en $x_0$.\nAutrement dit, il existe une seule fonction solution telle que $y(x_0) = y_0$.\nC'est la condition initiale qui fixe la constante $k$ de la solution générale.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q1",
            "type": "mcq",
            "prompt": "Pour l'équation $y' + ay = b$, combien de solutions vérifient une condition initiale $y(x_0) = y_0$ donnée ?",
            "options": [
              "Une unique solution",
              "Une infinité de solutions",
              "Aucune solution",
              "Deux solutions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour tout couple (x₀ ; y₀), l'équation y' + ay = b admet une unique solution vérifiant y(x₀) = y₀."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y' - 3y = 7$ avec $f(0) = 1$",
          "stepTheme": "La solution de $y' - 3y = 7$ avec $f(0) = 1$",
          "stepBadge": "La solution de $y' - 3y = 7$ avec $f(0) = 1$",
          "paragraphText": "• Les solutions de $(E) : y' - 3y = 7$ sont $x \\mapsto ce^{3x} - \\frac{7}{3}$, $c \\in \\mathbb{R}$.\nLa condition $f(0) = 1$ donne $c - \\frac{7}{3} = 1$, soit $c = \\frac{10}{3}$.\nDonc $f(x) = \\frac{10}{3}e^{3x} - \\frac{7}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q2",
            "type": "mcq",
            "prompt": "On donne $(E) : y' - 3y = 7$. Quelle est la solution $f$ de $(E)$ qui vérifie $f(0) = 1$ ?",
            "options": [
              "$f(x) = \\frac{10}{3}e^{3x} - \\frac{7}{3}$",
              "$f(x) = \\frac{10}{3}e^{3x} + \\frac{7}{3}$",
              "$f(x) = \\frac{7}{3}e^{3x} - \\frac{10}{3}$",
              "$f(x) = e^{3x} - \\frac{7}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions sont x ↦ ce^{3x} − 7/3 ; f(0) = 1 donne c = 10/3, donc f(x) = (10/3)e^{3x} − 7/3."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y' = -2y$ avec $f(0) = 1$",
          "stepTheme": "La solution de $y' = -2y$ avec $f(0) = 1$",
          "stepBadge": "La solution de $y' = -2y$ avec $f(0) = 1$",
          "paragraphText": "• Les solutions de $y' = -2y$ sont les fonctions $f(x) = ke^{-2x}$, $k \\in \\mathbb{R}$.\nLa condition $f(0) = 1$ donne $k \\times e^0 = 1$, soit $k = 1$.\nDonc la solution cherchée est $f(x) = e^{-2x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q3",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y' = -2y$ qui vérifie $f(0) = 1$ ?",
            "options": [
              "$f(x) = e^{-2x}$",
              "$f(x) = e^{2x}$",
              "$f(x) = \\frac{1}{2}e^{-2x}$",
              "$f(x) = 2e^{-2x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions sont f(x) = ke^{−2x} ; f(0) = 1 donne k = 1, donc f(x) = e^{−2x}."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y' - (\\ln 2)y = 0$ avec $f(2) = \\frac{1}{2}$",
          "stepTheme": "La solution de $y' - (\\ln 2)y = 0$ avec $f(2) = \\frac{1}{2}$",
          "stepBadge": "La solution de $y' - (\\ln 2)y = 0$ avec $f(2) = \\frac{1}{2}$",
          "paragraphText": "• Les solutions de $y' - (\\ln 2)y = 0$ sont les fonctions $f(x) = ke^{x\\ln 2}$, $k \\in \\mathbb{R}$.\nLa condition $f(2) = \\frac{1}{2}$ donne $ke^{2\\ln 2} = \\frac{1}{2}$, soit $k \\times 4 = \\frac{1}{2}$ (car $e^{2\\ln 2} = 4$), donc $k = \\frac{1}{8}$.\nDonc $f(x) = \\frac{1}{8}e^{x\\ln 2}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q4",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y' - (\\ln 2)y = 0$ qui vérifie $f(2) = \\frac{1}{2}$ ?",
            "options": [
              "$f(x) = \\frac{1}{8}e^{x\\ln 2}$",
              "$f(x) = \\frac{1}{2}e^{x\\ln 2}$",
              "$f(x) = \\frac{1}{4}e^{x\\ln 2}$",
              "$f(x) = e^{x\\ln 2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions sont f(x) = ke^{x ln 2} ; f(2) = 1/2 donne 4k = 1/2, soit k = 1/8 : f(x) = (1/8)e^{x ln 2}."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Le cas $a = 0$ : $y' = b$",
          "stepTheme": "Le cas $a = 0$ : $y' = b$",
          "stepBadge": "Le cas $a = 0$ : $y' = b$",
          "paragraphText": "• Si $a = 0$, l'équation $y' + ay = b$ devient $y' = b$.\nSes solutions sont les primitives sur $\\mathbb{R}$ de la fonction $x \\mapsto b$.\nCe sont donc les fonctions $x \\mapsto bx + c$, $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q5",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' = b$ (cas $a = 0$) ?",
            "options": [
              "$x \\mapsto bx + c$ ; $c \\in \\mathbb{R}$",
              "$x \\mapsto ke^{bx}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{b}{x}$ ; $x \\neq 0$",
              "$x \\mapsto b$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y' = b : les solutions sont les primitives de la fonction constante b, soit x ↦ bx + c, c ∈ ℝ."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y' = 3y - 1$ avec $y(0) = 1$",
          "stepTheme": "La solution de $y' = 3y - 1$ avec $y(0) = 1$",
          "stepBadge": "La solution de $y' = 3y - 1$ avec $y(0) = 1$",
          "paragraphText": "• L'équation $(A) : y' = 3y - 1$ s'écrit $y' - 3y = -1$ : ses solutions sont $x \\mapsto ke^{3x} + \\frac{1}{3}$, $k \\in \\mathbb{R}$.\nLa condition $y(0) = 1$ donne $k + \\frac{1}{3} = 1$, soit $k = \\frac{2}{3}$.\nDonc la solution cherchée est $h(x) = \\frac{2}{3}e^{3x} + \\frac{1}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q6",
            "type": "mcq",
            "prompt": "On donne $(A) : y' = 3y - 1$ avec $y(0) = 1$. Quelle est la solution de $(A)$ ?",
            "options": [
              "$h(x) = \\frac{2}{3}e^{3x} + \\frac{1}{3}$",
              "$k(x) = e^{3x} + \\frac{1}{3}$",
              "$g(x) = e^{3x} + 1$",
              "$f(x) = e^{3x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions sont x ↦ ke^{3x} + 1/3 ; y(0) = 1 donne k = 2/3, donc h(x) = (2/3)e^{3x} + 1/3."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q1",
          "type": "mcq",
          "prompt": "Pour l'équation $y' + ay = b$, combien de solutions vérifient une condition initiale $y(x_0) = y_0$ donnée ?",
          "options": [
            "Une unique solution",
            "Une infinité de solutions",
            "Aucune solution",
            "Deux solutions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout couple (x₀ ; y₀), l'équation y' + ay = b admet une unique solution vérifiant y(x₀) = y₀."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q2",
          "type": "mcq",
          "prompt": "On donne $(E) : y' - 3y = 7$. Quelle est la solution $f$ de $(E)$ qui vérifie $f(0) = 1$ ?",
          "options": [
            "$f(x) = \\frac{10}{3}e^{3x} - \\frac{7}{3}$",
            "$f(x) = \\frac{10}{3}e^{3x} + \\frac{7}{3}$",
            "$f(x) = \\frac{7}{3}e^{3x} - \\frac{10}{3}$",
            "$f(x) = e^{3x} - \\frac{7}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions sont x ↦ ce^{3x} − 7/3 ; f(0) = 1 donne c = 10/3, donc f(x) = (10/3)e^{3x} − 7/3."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q3",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y' = -2y$ qui vérifie $f(0) = 1$ ?",
          "options": [
            "$f(x) = e^{-2x}$",
            "$f(x) = e^{2x}$",
            "$f(x) = \\frac{1}{2}e^{-2x}$",
            "$f(x) = 2e^{-2x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions sont f(x) = ke^{−2x} ; f(0) = 1 donne k = 1, donc f(x) = e^{−2x}."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q4",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y' - (\\ln 2)y = 0$ qui vérifie $f(2) = \\frac{1}{2}$ ?",
          "options": [
            "$f(x) = \\frac{1}{8}e^{x\\ln 2}$",
            "$f(x) = \\frac{1}{2}e^{x\\ln 2}$",
            "$f(x) = \\frac{1}{4}e^{x\\ln 2}$",
            "$f(x) = e^{x\\ln 2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions sont f(x) = ke^{x ln 2} ; f(2) = 1/2 donne 4k = 1/2, soit k = 1/8 : f(x) = (1/8)e^{x ln 2}."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q5",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' = b$ (cas $a = 0$) ?",
          "options": [
            "$x \\mapsto bx + c$ ; $c \\in \\mathbb{R}$",
            "$x \\mapsto ke^{bx}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{b}{x}$ ; $x \\neq 0$",
            "$x \\mapsto b$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y' = b : les solutions sont les primitives de la fonction constante b, soit x ↦ bx + c, c ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p03_q6",
          "type": "mcq",
          "prompt": "On donne $(A) : y' = 3y - 1$ avec $y(0) = 1$. Quelle est la solution de $(A)$ ?",
          "options": [
            "$h(x) = \\frac{2}{3}e^{3x} + \\frac{1}{3}$",
            "$k(x) = e^{3x} + \\frac{1}{3}$",
            "$g(x) = e^{3x} + 1$",
            "$f(x) = e^{3x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions sont x ↦ ke^{3x} + 1/3 ; y(0) = 1 donne k = 2/3, donc h(x) = (2/3)e^{3x} + 1/3."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04",
      "order": 4,
      "title": "Équations du type $y'' + my = 0$",
      "summary": "Les solutions de y''=0, de y''−ω²y=0 (exponentielles) et de y''+ω²y=0 (cosinus et sinus) selon le signe de m.",
      "conceptExplanation": "Cas $m = 0$ : l'équation devient $y'' = 0$ ; ses solutions sur $\\mathbb{R}$ sont les fonctions $x \\mapsto ax + b$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.\nCas $m < 0$ : on pose $m = -\\omega^2$ ($\\omega \\in \\mathbb{R}^*$) ; l'équation devient $y'' - \\omega^2 y = 0$ ; ses solutions sur $\\mathbb{R}$ sont les fonctions $x \\mapsto ae^{-\\omega x} + be^{\\omega x}$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.\nCas $m > 0$ : on pose $m = \\omega^2$ ($\\omega \\in \\mathbb{R}^*$) ; l'équation devient $y'' + \\omega^2 y = 0$ ; ses solutions sur $\\mathbb{R}$ sont les fonctions $x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.",
      "keyRule": "y''=0 → ax+b. y''−ω²y=0 → ae^(−ωx)+be^(ωx). y''+ω²y=0 → a·cos(ωx)+b·sin(ωx).",
      "formulas": [
        {
          "name": "Solutions de y'' = 0",
          "formula": "x \\mapsto ax + b, \\quad a, b \\in \\mathbb{R}",
          "note": "Cas m = 0."
        },
        {
          "name": "Solutions de y'' - ω²y = 0",
          "formula": "x \\mapsto ae^{-\\omega x} + be^{\\omega x}, \\quad a, b \\in \\mathbb{R}",
          "note": "Cas m = −ω² < 0."
        },
        {
          "name": "Solutions de y'' + ω²y = 0",
          "formula": "x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x), \\quad a, b \\in \\mathbb{R}",
          "note": "Cas m = ω² > 0."
        }
      ],
      "workedExample": {
        "title": "Résoudre $y'' - 4y = 0$ et $y'' + 4y = 0$",
        "statement": "Résous sur $\\mathbb{R}$ les équations $y'' - 4y = 0$ et $y'' + 4y = 0$.",
        "methodSteps": [
          "Pour $y'' - 4y = 0$, on a $\\omega^2 = 4$, soit $\\omega = 2$ : les solutions sont $x \\mapsto ae^{-2x} + be^{2x}$.",
          "Pour $y'' + 4y = 0$, on a $\\omega^2 = 4$, soit $\\omega = 2$ : les solutions sont $x \\mapsto a\\cos 2x + b\\sin 2x$.",
          "Le signe de $m$ décide de la forme : exponentielles si $m < 0$, cosinus et sinus si $m > 0$."
        ],
        "conclusion": "$y'' - 4y = 0$ a pour solutions $ae^{-2x} + be^{2x}$ ; $y'' + 4y = 0$ a pour solutions $a\\cos 2x + b\\sin 2x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les solutions de $y'' = 0$",
          "stepTheme": "Les solutions de $y'' = 0$",
          "stepBadge": "Les solutions de $y'' = 0$",
          "paragraphText": "• Si $m = 0$, l'équation $y'' + my = 0$ devient $y'' = 0$.\nSes solutions sur $\\mathbb{R}$ sont les fonctions $x \\mapsto ax + b$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.\nCe sont les fonctions affines : leur dérivée seconde est nulle.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q1",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' = 0$ ?",
            "options": [
              "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ae^{\\omega x} + be^{-\\omega x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ke^{\\omega x}$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions de y'' = 0 sont les fonctions affines x ↦ ax + b, a, b ∈ ℝ."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les solutions de $y'' - \\omega^2 y = 0$",
          "stepTheme": "Les solutions de $y'' - \\omega^2 y = 0$",
          "stepBadge": "Les solutions de $y'' - \\omega^2 y = 0$",
          "paragraphText": "• Si $m < 0$, on pose $m = -\\omega^2$ ($\\omega \\in \\mathbb{R}^*$) : l'équation devient $y'' - \\omega^2 y = 0$.\nSes solutions sur $\\mathbb{R}$ sont les fonctions $x \\mapsto ae^{-\\omega x} + be^{\\omega x}$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.\nCe sont des combinaisons d'exponentielles.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q2",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' - \\omega^2 y = 0$ ($\\omega \\in \\mathbb{R}^*$) ?",
            "options": [
              "$x \\mapsto ae^{-\\omega x} + be^{\\omega x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ae^{-\\omega x}$ ; $a \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions de y'' − ω²y = 0 sont x ↦ ae^{−ωx} + be^{ωx}, a, b ∈ ℝ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Les solutions de $y'' + \\omega^2 y = 0$",
          "stepTheme": "Les solutions de $y'' + \\omega^2 y = 0$",
          "stepBadge": "Les solutions de $y'' + \\omega^2 y = 0$",
          "paragraphText": "• Si $m > 0$, on pose $m = \\omega^2$ ($\\omega \\in \\mathbb{R}^*$) : l'équation devient $y'' + \\omega^2 y = 0$.\nSes solutions sur $\\mathbb{R}$ sont les fonctions $x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.\nCe sont des combinaisons de cosinus et de sinus.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q3",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' + \\omega^2 y = 0$ ($\\omega \\in \\mathbb{R}^*$) ?",
            "options": [
              "$x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ae^{-\\omega x} + be^{\\omega x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto a\\cos(\\omega x)$ ; $a \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les solutions de y'' + ω²y = 0 sont x ↦ a cos(ωx) + b sin(ωx), a, b ∈ ℝ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y'' - 4y = 0$",
          "stepTheme": "Les solutions de $y'' - 4y = 0$",
          "stepBadge": "Les solutions de $y'' - 4y = 0$",
          "paragraphText": "• L'équation $y'' - 4y = 0$ est du type $y'' - \\omega^2 y = 0$ avec $\\omega^2 = 4$, soit $\\omega = 2$.\nSes solutions sont donc $x \\mapsto ae^{-2x} + be^{2x}$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q4",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' - 4y = 0$ ?",
            "options": [
              "$x \\mapsto ae^{-2x} + be^{2x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto a\\cos 2x + b\\sin 2x$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ae^{2x} + be^{2x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec ω² = 4, soit ω = 2, les solutions de y'' − 4y = 0 sont x ↦ ae^{−2x} + be^{2x}, a, b ∈ ℝ."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y'' + 4y = 0$",
          "stepTheme": "Les solutions de $y'' + 4y = 0$",
          "stepBadge": "Les solutions de $y'' + 4y = 0$",
          "paragraphText": "• L'équation $y'' + 4y = 0$ est du type $y'' + \\omega^2 y = 0$ avec $\\omega^2 = 4$, soit $\\omega = 2$.\nSes solutions sont donc $x \\mapsto a\\cos 2x + b\\sin 2x$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q5",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' + 4y = 0$ ?",
            "options": [
              "$x \\mapsto a\\cos 2x + b\\sin 2x$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ae^{-2x} + be^{2x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto a\\cos 2x$ ; $a \\in \\mathbb{R}$",
              "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec ω² = 4, soit ω = 2, les solutions de y'' + 4y = 0 sont x ↦ a cos 2x + b sin 2x, a, b ∈ ℝ."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y'' = 4y$",
          "stepTheme": "Les solutions de $y'' = 4y$",
          "stepBadge": "Les solutions de $y'' = 4y$",
          "paragraphText": "• L'équation $y'' = 4y$ s'écrit $y'' - 4y = 0$ : c'est du type $y'' - \\omega^2 y = 0$ avec $\\omega = 2$.\nSes solutions sont donc $x \\mapsto ae^{2x} + be^{-2x}$, $a \\in \\mathbb{R}$, $b \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q6",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' = 4y$ ?",
            "options": [
              "$x \\mapsto ae^{2x} + be^{-2x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto ae^{2x} - be^{2x}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto 2e^{ax} - 2e^{bx}$ ; $a, b \\in \\mathbb{R}$",
              "$x \\mapsto 2e^{ax} + 2e^{-bx}$ ; $a, b \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y'' = 4y donne y'' − 4y = 0 avec ω = 2 : les solutions sont x ↦ ae^{2x} + be^{−2x}, a, b ∈ ℝ."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q1",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' = 0$ ?",
          "options": [
            "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ae^{\\omega x} + be^{-\\omega x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ke^{\\omega x}$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions de y'' = 0 sont les fonctions affines x ↦ ax + b, a, b ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q2",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' - \\omega^2 y = 0$ ($\\omega \\in \\mathbb{R}^*$) ?",
          "options": [
            "$x \\mapsto ae^{-\\omega x} + be^{\\omega x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ae^{-\\omega x}$ ; $a \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions de y'' − ω²y = 0 sont x ↦ ae^{−ωx} + be^{ωx}, a, b ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q3",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' + \\omega^2 y = 0$ ($\\omega \\in \\mathbb{R}^*$) ?",
          "options": [
            "$x \\mapsto a\\cos(\\omega x) + b\\sin(\\omega x)$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ae^{-\\omega x} + be^{\\omega x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto a\\cos(\\omega x)$ ; $a \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les solutions de y'' + ω²y = 0 sont x ↦ a cos(ωx) + b sin(ωx), a, b ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q4",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' - 4y = 0$ ?",
          "options": [
            "$x \\mapsto ae^{-2x} + be^{2x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto a\\cos 2x + b\\sin 2x$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ae^{2x} + be^{2x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec ω² = 4, soit ω = 2, les solutions de y'' − 4y = 0 sont x ↦ ae^{−2x} + be^{2x}, a, b ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q5",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' + 4y = 0$ ?",
          "options": [
            "$x \\mapsto a\\cos 2x + b\\sin 2x$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ae^{-2x} + be^{2x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto a\\cos 2x$ ; $a \\in \\mathbb{R}$",
            "$x \\mapsto ax + b$ ; $a, b \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec ω² = 4, soit ω = 2, les solutions de y'' + 4y = 0 sont x ↦ a cos 2x + b sin 2x, a, b ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p04_q6",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y'' = 4y$ ?",
          "options": [
            "$x \\mapsto ae^{2x} + be^{-2x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto ae^{2x} - be^{2x}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto 2e^{ax} - 2e^{bx}$ ; $a, b \\in \\mathbb{R}$",
            "$x \\mapsto 2e^{ax} + 2e^{-bx}$ ; $a, b \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y'' = 4y donne y'' − 4y = 0 avec ω = 2 : les solutions sont x ↦ ae^{2x} + be^{−2x}, a, b ∈ ℝ."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05",
      "order": 5,
      "title": "Solutions vérifiant des conditions initiales (second ordre)",
      "summary": "Unicité de la solution de y''+my=0 vérifiant y(x0)=y0 et y'(x0)=z0, et détermination des constantes a et b.",
      "conceptExplanation": "Pour tout triplet $(x_0 ; y_0 ; z_0)$ de nombres réels, l'équation différentielle $y'' + my = 0$ ($m \\in \\mathbb{R}$) admet une unique solution sur $\\mathbb{R}$ telle que $y(x_0) = y_0$ et $y'(x_0) = z_0$.\nPour la déterminer, on écrit la solution générale (avec les constantes $a$ et $b$), on calcule sa dérivée, puis on utilise les deux conditions pour trouver $a$ et $b$.",
      "keyRule": "y''+my=0 : une unique solution vérifie y(x0)=y0 et y'(x0)=z0. On trouve a et b avec les deux conditions.",
      "formulas": [
        {
          "name": "Unicité de la solution",
          "formula": "\\forall (x_0, y_0, z_0), \\exists! y, \\quad y'' + my = 0, y(x_0) = y_0, y'(x_0) = z_0",
          "note": "Pour m ∈ ℝ."
        }
      ],
      "workedExample": {
        "title": "La solution de $y'' + 25y = 0$ avec $f(0) = 1$ et $f'\\left(\\frac{\\pi}{5}\\right) = -2$",
        "statement": "Résous sur $\\mathbb{R}$ l'équation $(E) : y'' + 25y = 0$, puis détermine la solution $f$ de $(E)$ qui vérifie $f(0) = 1$ et $f'\\left(\\frac{\\pi}{5}\\right) = -2$.",
        "methodSteps": [
          "On a $y'' + 25y = 0$, soit $y'' + 5^2 y = 0$ : les solutions sont $x \\mapsto a\\cos(5x) + b\\sin(5x)$.",
          "La condition $f(0) = 1$ donne $a\\cos 0 + b\\sin 0 = 1$, soit $a = 1$.",
          "On a $f'(x) = -5a\\sin(5x) + 5b\\cos(5x)$ ; la condition $f'\\left(\\frac{\\pi}{5}\\right) = -2$ donne $-5b = -2$, soit $b = \\frac{2}{5}$.",
          "Donc $f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$."
        ],
        "conclusion": "La solution cherchée est $f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "L'unicité de la solution vérifiant deux conditions initiales",
          "stepTheme": "L'unicité de la solution vérifiant deux conditions initiales",
          "stepBadge": "L'unicité de la solution vérifiant deux conditions initiales",
          "paragraphText": "• Pour tout triplet $(x_0 ; y_0 ; z_0)$ de nombres réels, l'équation $y'' + my = 0$ admet une unique solution sur $\\mathbb{R}$ telle que $y(x_0) = y_0$ et $y'(x_0) = z_0$.\nDeux conditions sont nécessaires : la valeur de la fonction et celle de sa dérivée au point $x_0$.\nElles fixent les deux constantes $a$ et $b$ de la solution générale.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q1",
            "type": "mcq",
            "prompt": "Pour l'équation $y'' + my = 0$, combien de solutions vérifient les conditions $y(x_0) = y_0$ et $y'(x_0) = z_0$ données ?",
            "options": [
              "Une unique solution",
              "Une infinité de solutions",
              "Aucune solution",
              "Deux solutions"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour tout triplet (x₀ ; y₀ ; z₀), l'équation y'' + my = 0 admet une unique solution vérifiant y(x₀) = y₀ et y'(x₀) = z₀."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y'' + 25y = 0$ avec $f(0) = 1$ et $f'\\left(\\frac{\\pi}{5}\\right) = -2$",
          "stepTheme": "La solution de $y'' + 25y = 0$ avec $f(0) = 1$ et $f'\\left(\\frac{\\pi}{5}\\right) = -2$",
          "stepBadge": "La solution de $y'' + 25y = 0$ avec $f(0) = 1$ et $f'\\left(\\frac{\\pi}{5}\\right) = -2$",
          "paragraphText": "• Les solutions de $y'' + 25y = 0$ sont $x \\mapsto a\\cos(5x) + b\\sin(5x)$.\nLa condition $f(0) = 1$ donne $a = 1$.\nAvec $f'(x) = -5a\\sin(5x) + 5b\\cos(5x)$, la condition $f'\\left(\\frac{\\pi}{5}\\right) = -2$ donne $-5b = -2$, soit $b = \\frac{2}{5}$.\nDonc $f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q2",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y'' + 25y = 0$ qui vérifie $f(0) = 1$ et $f'\\left(\\frac{\\pi}{5}\\right) = -2$ ?",
            "options": [
              "$f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$",
              "$f(x) = \\cos(5x) - \\frac{2}{5}\\sin(5x)$",
              "$f(x) = \\frac{2}{5}\\cos(5x) + \\sin(5x)$",
              "$f(x) = \\cos(5x) + 2\\sin(5x)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "f(0) = 1 donne a = 1 ; f'(π/5) = −2 donne −5b = −2, soit b = 2/5 : f(x) = cos(5x) + (2/5)sin(5x)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y'' = 4y$ avec $y(0) = 0$ et $y'(0) = 1$",
          "stepTheme": "La solution de $y'' = 4y$ avec $y(0) = 0$ et $y'(0) = 1$",
          "stepBadge": "La solution de $y'' = 4y$ avec $y(0) = 0$ et $y'(0) = 1$",
          "paragraphText": "• Les solutions de $y'' = 4y$ sont $x \\mapsto ae^{2x} + be^{-2x}$, de dérivée $x \\mapsto 2ae^{2x} - 2be^{-2x}$.\nLa condition $y(0) = 0$ donne $a + b = 0$ ; la condition $y'(0) = 1$ donne $2a - 2b = 1$.\nOn obtient $a = \\frac{1}{4}$ et $b = -\\frac{1}{4}$ : la solution est $x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y'' = 4y$ qui vérifie $y(0) = 0$ et $y'(0) = 1$ ?",
            "options": [
              "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
              "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
              "$x \\mapsto x - 1$",
              "$x \\mapsto -\\frac{\\sqrt{3}}{6}\\cos 3x + \\frac{1}{6}\\sin 3x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y(0) = 0 donne a + b = 0 et y'(0) = 1 donne 2a − 2b = 1 : a = 1/4 et b = −1/4, soit (1/4)e^{2x} − (1/4)e^{−2x}."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y'' = 0$ avec $y(1) = 0$ et $y'(1) = 1$",
          "stepTheme": "La solution de $y'' = 0$ avec $y(1) = 0$ et $y'(1) = 1$",
          "stepBadge": "La solution de $y'' = 0$ avec $y(1) = 0$ et $y'(1) = 1$",
          "paragraphText": "• Les solutions de $y'' = 0$ sont $x \\mapsto ax + b$, de dérivée $x \\mapsto a$.\nLa condition $y'(1) = 1$ donne $a = 1$ ; la condition $y(1) = 0$ donne $1 + b = 0$, soit $b = -1$.\nDonc la solution est $x \\mapsto x - 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y'' = 0$ qui vérifie $y(1) = 0$ et $y'(1) = 1$ ?",
            "options": [
              "$x \\mapsto x - 1$",
              "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
              "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
              "$x \\mapsto x + 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y'(1) = 1 donne a = 1 et y(1) = 0 donne b = −1 : la solution est x ↦ x − 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y'' - y = 0$ avec $y(0) = 0$ et $y'(0) = 1$",
          "stepTheme": "La solution de $y'' - y = 0$ avec $y(0) = 0$ et $y'(0) = 1$",
          "stepBadge": "La solution de $y'' - y = 0$ avec $y(0) = 0$ et $y'(0) = 1$",
          "paragraphText": "• Les solutions de $y'' - y = 0$ sont $x \\mapsto ae^{x} + be^{-x}$, de dérivée $x \\mapsto ae^{x} - be^{-x}$.\nLa condition $y(0) = 0$ donne $a + b = 0$ ; la condition $y'(0) = 1$ donne $a - b = 1$.\nOn obtient $a = \\frac{1}{2}$ et $b = -\\frac{1}{2}$ : la solution est $x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y'' - y = 0$ qui vérifie $y(0) = 0$ et $y'(0) = 1$ ?",
            "options": [
              "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
              "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
              "$x \\mapsto x - 1$",
              "$x \\mapsto \\frac{1}{2}e^{x} + \\frac{1}{2}e^{-x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "y(0) = 0 donne a + b = 0 et y'(0) = 1 donne a − b = 1 : a = 1/2 et b = −1/2, soit (1/2)e^{x} − (1/2)e^{−x}."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y'' = -9y$ avec $y\\left(\\frac{\\pi}{9}\\right) = 0$ et $y'\\left(\\frac{\\pi}{9}\\right) = 1$",
          "stepTheme": "La solution de $y'' = -9y$ avec $y\\left(\\frac{\\pi}{9}\\right) = 0$ et $y'\\left(\\frac{\\pi}{9}\\right) = 1$",
          "stepBadge": "La solution de $y'' = -9y$ avec $y\\left(\\frac{\\pi}{9}\\right) = 0$ et $y'\\left(\\frac{\\pi}{9}\\right) = 1$",
          "paragraphText": "• Les solutions de $y'' = -9y$ sont $x \\mapsto a\\cos 3x + b\\sin 3x$, de dérivée $x \\mapsto -3a\\sin 3x + 3b\\cos 3x$.\nLa condition $y\\left(\\frac{\\pi}{9}\\right) = 0$ donne $\\frac{a}{2} + \\frac{b\\sqrt{3}}{2} = 0$ ; la condition $y'\\left(\\frac{\\pi}{9}\\right) = 1$ donne $-\\frac{3a\\sqrt{3}}{2} + \\frac{3b}{2} = 1$.\nOn obtient $a = -\\frac{\\sqrt{3}}{6}$ et $b = \\frac{1}{6}$ : la solution est $x \\mapsto -\\frac{\\sqrt{3}}{6}\\cos 3x + \\frac{1}{6}\\sin 3x$.",
          "konanTip": "Dans le livre H5P 2025, le premier élément de l'Exercice 3 Activité 4 est rendu de façon ambiguë tel qu'affiché (« −3√6cos3x+1/6 sin3x ») : il faut le lire −(√3/6)cos 3x + (1/6)sin 3x.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y'' = -9y$ qui vérifie $y\\left(\\frac{\\pi}{9}\\right) = 0$ et $y'\\left(\\frac{\\pi}{9}\\right) = 1$ ?",
            "options": [
              "$x \\mapsto -\\frac{\\sqrt{3}}{6}\\cos 3x + \\frac{1}{6}\\sin 3x$",
              "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
              "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
              "$x \\mapsto x - 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux conditions donnent a = −√3/6 et b = 1/6 : la solution est x ↦ −(√3/6)cos 3x + (1/6)sin 3x."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q1",
          "type": "mcq",
          "prompt": "Pour l'équation $y'' + my = 0$, combien de solutions vérifient les conditions $y(x_0) = y_0$ et $y'(x_0) = z_0$ données ?",
          "options": [
            "Une unique solution",
            "Une infinité de solutions",
            "Aucune solution",
            "Deux solutions"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour tout triplet (x₀ ; y₀ ; z₀), l'équation y'' + my = 0 admet une unique solution vérifiant y(x₀) = y₀ et y'(x₀) = z₀."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q2",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y'' + 25y = 0$ qui vérifie $f(0) = 1$ et $f'\\left(\\frac{\\pi}{5}\\right) = -2$ ?",
          "options": [
            "$f(x) = \\cos(5x) + \\frac{2}{5}\\sin(5x)$",
            "$f(x) = \\cos(5x) - \\frac{2}{5}\\sin(5x)$",
            "$f(x) = \\frac{2}{5}\\cos(5x) + \\sin(5x)$",
            "$f(x) = \\cos(5x) + 2\\sin(5x)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f(0) = 1 donne a = 1 ; f'(π/5) = −2 donne −5b = −2, soit b = 2/5 : f(x) = cos(5x) + (2/5)sin(5x)."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y'' = 4y$ qui vérifie $y(0) = 0$ et $y'(0) = 1$ ?",
          "options": [
            "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
            "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
            "$x \\mapsto x - 1$",
            "$x \\mapsto -\\frac{\\sqrt{3}}{6}\\cos 3x + \\frac{1}{6}\\sin 3x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y(0) = 0 donne a + b = 0 et y'(0) = 1 donne 2a − 2b = 1 : a = 1/4 et b = −1/4, soit (1/4)e^{2x} − (1/4)e^{−2x}."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y'' = 0$ qui vérifie $y(1) = 0$ et $y'(1) = 1$ ?",
          "options": [
            "$x \\mapsto x - 1$",
            "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
            "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
            "$x \\mapsto x + 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y'(1) = 1 donne a = 1 et y(1) = 0 donne b = −1 : la solution est x ↦ x − 1."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y'' - y = 0$ qui vérifie $y(0) = 0$ et $y'(0) = 1$ ?",
          "options": [
            "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
            "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
            "$x \\mapsto x - 1$",
            "$x \\mapsto \\frac{1}{2}e^{x} + \\frac{1}{2}e^{-x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "y(0) = 0 donne a + b = 0 et y'(0) = 1 donne a − b = 1 : a = 1/2 et b = −1/2, soit (1/2)e^{x} − (1/2)e^{−x}."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y'' = -9y$ qui vérifie $y\\left(\\frac{\\pi}{9}\\right) = 0$ et $y'\\left(\\frac{\\pi}{9}\\right) = 1$ ?",
          "options": [
            "$x \\mapsto -\\frac{\\sqrt{3}}{6}\\cos 3x + \\frac{1}{6}\\sin 3x$",
            "$x \\mapsto \\frac{1}{4}e^{2x} - \\frac{1}{4}e^{-2x}$",
            "$x \\mapsto \\frac{1}{2}e^{x} - \\frac{1}{2}e^{-x}$",
            "$x \\mapsto x - 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux conditions donnent a = −√3/6 et b = 1/6 : la solution est x ↦ −(√3/6)cos 3x + (1/6)sin 3x."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06",
      "order": 6,
      "title": "Équations avec second membre et croissance d'une population",
      "summary": "Méthode de la solution particulière pour les équations y'+ay=b(x), et modélisation de la croissance d'une population par y'=ay.",
      "conceptExplanation": "Pour résoudre une équation du type $y' + ay = b(x)$ avec un second membre non constant, on cherche d'abord une solution particulière $g$, puis on ajoute la solution générale de l'équation homogène $y' + ay = 0$.\nExemple : pour $(E) : y' + 2y = e^{-2x}$, la fonction $g(x) = (x + 1)e^{-2x}$ est une solution particulière ; les solutions de $(E)$ sont donc $x \\mapsto (k + x + 1)e^{-2x}$, $k \\in \\mathbb{R}$.\nAutre exemple : pour $(E) : y' + 3y = 2e^{-x}$, la fonction $h(x) = e^{-x}$ est une solution particulière (avec $m = 1$) ; les solutions sont $x \\mapsto e^{-x} + ke^{-3x}$.\nApplication : si la vitesse d'accroissement d'une population est proportionnelle au nombre d'habitants, on a $f'(t) = af(t)$ ; avec $f(0) = 4{,}75$ millions en 1990 et $f(5) = 5{,}5$ millions en 1995, on obtient $f(t) = 4{,}75e^{at}$ avec $a = \\frac{\\ln(22/19)}{5}$.\nAutre application : le refroidissement d'un corps, $\\theta(t) = 40e^{\\frac{1}{5}\\ln\\frac{3}{4}t} + 30$, donne $\\theta(20) \\approx 42{,}66$ °C.",
      "keyRule": "Second membre : solution particulière + solution homogène. Croissance proportionnelle : f(t) = f(0)·e^(at).",
      "formulas": [
        {
          "name": "Solutions avec second membre",
          "formula": "y = g + y_h",
          "note": "g solution particulière, y_h solution de l'équation homogène."
        },
        {
          "name": "Croissance proportionnelle",
          "formula": "f'(t) = af(t) \\Rightarrow f(t) = f(0)e^{at}",
          "note": "Modèle de croissance d'une population."
        }
      ],
      "workedExample": {
        "title": "La croissance de la population d'un pays",
        "statement": "La population d'un pays était de $4{,}75$ millions d'habitants en 1990 et de $5{,}5$ millions en 1995. En supposant que la vitesse d'accroissement est proportionnelle au nombre d'habitants, donne l'expression de la population $f(t)$ en fonction de $t$ (t = 0 en 1990).",
        "methodSteps": [
          "L'hypothèse se traduit par $f'(t) = af(t)$ avec $a \\neq 0$ : les solutions sont $t \\mapsto ke^{at}$.",
          "Comme $f(0) = 4{,}75$, on a $k = 4{,}75$, donc $f(t) = 4{,}75e^{at}$.",
          "Comme $f(5) = 5{,}5$, on a $4{,}75e^{5a} = 5{,}5$, soit $a = \\frac{\\ln(5{,}5/4{,}75)}{5} = \\frac{\\ln(22/19)}{5}$.",
          "Donc $f(t) = 4{,}75e^{\\frac{\\ln(22/19)}{5}t}$."
        ],
        "conclusion": "La population est modélisée par $f(t) = 4{,}75e^{\\frac{\\ln(22/19)}{5}t}$ millions d'habitants."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Vérifier qu'une fonction est solution : $g(x) = (x + 1)e^{-2x}$",
          "stepTheme": "Vérifier qu'une fonction est solution : $g(x) = (x + 1)e^{-2x}$",
          "stepBadge": "Vérifier qu'une fonction est solution : $g(x) = (x + 1)e^{-2x}$",
          "paragraphText": "• On considère $(E) : y' + 2y = e^{-2x}$ et $g(x) = (x + 1)e^{-2x}$.\nOn a $g'(x) = e^{-2x} - 2(x + 1)e^{-2x} = (-2x - 1)e^{-2x}$.\nDonc $g'(x) + 2g(x) = (-2x - 1)e^{-2x} + 2(x + 1)e^{-2x} = e^{-2x}$ : $g$ est bien une solution de $(E)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q1",
            "type": "mcq",
            "prompt": "On considère $(E) : y' + 2y = e^{-2x}$ et $g(x) = (x + 1)e^{-2x}$. Que vaut $g'(x) + 2g(x)$ ?",
            "options": [
              "$e^{-2x}$ : $g$ est solution de $(E)$",
              "$0$",
              "$2e^{-2x}$",
              "$(x + 1)e^{-2x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "g'(x) = (−2x−1)e^{−2x} et 2g(x) = 2(x+1)e^{−2x} : g'(x) + 2g(x) = e^{−2x}, donc g est solution de (E)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Les solutions de $y' + 2y = e^{-2x}$",
          "stepTheme": "Les solutions de $y' + 2y = e^{-2x}$",
          "stepBadge": "Les solutions de $y' + 2y = e^{-2x}$",
          "paragraphText": "• On sait que $g(x) = (x + 1)e^{-2x}$ est une solution particulière de $(E) : y' + 2y = e^{-2x}$.\nUne fonction $h + g$ est solution de $(E)$ si et seulement si $h$ est solution de l'équation homogène $(E') : y' + 2y = 0$.\nLes solutions de $(E')$ sont $x \\mapsto ke^{-2x}$ : les solutions de $(E)$ sont donc $x \\mapsto ke^{-2x} + (x + 1)e^{-2x} = (k + x + 1)e^{-2x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q2",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 2y = e^{-2x}$ ?",
            "options": [
              "$x \\mapsto (k + x + 1)e^{-2x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto xe^{-x} + ke^{-2x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto (k + x)e^{-2x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto ke^{-2x} + e^{-x}$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Solution particulière g(x) = (x+1)e^{−2x} plus solution homogène ke^{−2x} : f(x) = (k+x+1)e^{−2x}, k ∈ ℝ."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La solution de $y' + 2y = e^{-2x}$ avec $f(0) = -2$",
          "stepTheme": "La solution de $y' + 2y = e^{-2x}$ avec $f(0) = -2$",
          "stepBadge": "La solution de $y' + 2y = e^{-2x}$ avec $f(0) = -2$",
          "paragraphText": "• Les solutions de $(E) : y' + 2y = e^{-2x}$ sont $f(x) = (k + x + 1)e^{-2x}$, $k \\in \\mathbb{R}$.\nLa condition $f(0) = -2$ donne $(k + 1)e^0 = -2$, soit $k + 1 = -2$ et $k = -3$.\nDonc $f(x) = (x - 2)e^{-2x}$.",
          "konanTip": "Dans le renforcement Exercice 2, le PDF résout f(0)=1 (k=0) alors que la question demande f(0)=-2 : la valeur correcte est k=-3.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q3",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y' + 2y = e^{-2x}$ qui vérifie $f(0) = -2$ ?",
            "options": [
              "$k = -3$ et $f(x) = (x - 2)e^{-2x}$",
              "$k = 0$ et $f(x) = (x + 1)e^{-2x}$",
              "$k = 1$ et $f(x) = (x + 2)e^{-2x}$",
              "$k = -2$ et $f(x) = (x - 1)e^{-2x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "f(0) = k + 1 = −2 donne k = −3 : la solution est f(x) = (x − 2)e^{−2x}."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Trouver $m$ pour que $h(x) = me^{-x}$ soit solution de $y' + 3y = 2e^{-x}$",
          "stepTheme": "Trouver $m$ pour que $h(x) = me^{-x}$ soit solution de $y' + 3y = 2e^{-x}$",
          "stepBadge": "Trouver $m$ pour que $h(x) = me^{-x}$ soit solution de $y' + 3y = 2e^{-x}$",
          "paragraphText": "• Soit $h(x) = me^{-x}$ : on a $h'(x) = -me^{-x}$.\n$h$ est solution de $y' + 3y = 2e^{-x}$ si et seulement si $h'(x) + 3h(x) = 2e^{-x}$, soit $-me^{-x} + 3me^{-x} = 2e^{-x}$.\nDonc $2m = 2$, soit $m = 1$ : la fonction $h(x) = e^{-x}$ est solution de $(E)$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q4",
            "type": "mcq",
            "prompt": "Détermine le réel $m$ pour que $h(x) = me^{-x}$ soit solution de $y' + 3y = 2e^{-x}$.",
            "options": [
              "$m = 1$",
              "$m = 2$",
              "$m = -1$",
              "$m = 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "h' + 3h = −me^{−x} + 3me^{−x} = 2me^{−x} : pour que ce soit 2e^{−x}, il faut m = 1."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les solutions de $y' + 3y = 2e^{-x}$",
          "stepTheme": "Les solutions de $y' + 3y = 2e^{-x}$",
          "stepBadge": "Les solutions de $y' + 3y = 2e^{-x}$",
          "paragraphText": "• La fonction $h(x) = e^{-x}$ est une solution particulière de $(E) : y' + 3y = 2e^{-x}$.\nLes solutions de l'équation homogène $(E') : y' + 3y = 0$ sont $x \\mapsto ke^{-3x}$.\nLes solutions de $(E)$ sont donc les fonctions $x \\mapsto e^{-x} + ke^{-3x}$, $k \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q5",
            "type": "mcq",
            "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 3y = 2e^{-x}$ ?",
            "options": [
              "$x \\mapsto e^{-x} + ke^{-3x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto e^{-x} + ke^{3x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto 2e^{-x} + ke^{-3x}$ ; $k \\in \\mathbb{R}$",
              "$x \\mapsto e^{-3x} + ke^{-x}$ ; $k \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Solution particulière e^{−x} plus solution homogène ke^{−3x} : les solutions sont x ↦ e^{−x} + ke^{−3x}, k ∈ ℝ."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La croissance de la population : $f(t) = 4{,}75e^{at}$",
          "stepTheme": "La croissance de la population : $f(t) = 4{,}75e^{at}$",
          "stepBadge": "La croissance de la population : $f(t) = 4{,}75e^{at}$",
          "paragraphText": "• La vitesse d'accroissement de la population est proportionnelle au nombre d'habitants : $f'(t) = af(t)$ avec $a \\neq 0$.\nLes solutions sont $t \\mapsto ke^{at}$ ; avec $f(0) = 4{,}75$ (en 1990), on a $k = 4{,}75$, donc $f(t) = 4{,}75e^{at}$.\nAvec $f(5) = 5{,}5$ (en 1995), on a $4{,}75e^{5a} = 5{,}5$, soit $a = \\frac{\\ln(5{,}5/4{,}75)}{5} = \\frac{\\ln(22/19)}{5}$.",
          "konanTip": "Le PDF donne t ≈ 48 et l'année 2038 pour atteindre 20 millions d'habitants, mais le calcul exact donne t = 5·ln(80/19)/ln(22/19) ≈ 49, soit l'année 2039.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q6",
            "type": "mcq",
            "prompt": "La population d'un pays est de $4{,}75$ millions en 1990 et de $5{,}5$ millions en 1995 ; sa vitesse d'accroissement est proportionnelle au nombre d'habitants. Quelle est l'expression de $f(t)$ (t = 0 en 1990) ?",
            "options": [
              "$f(t) = 4{,}75e^{\\frac{\\ln(22/19)}{5}t}$",
              "$f(t) = 4{,}75e^{\\frac{\\ln(19/22)}{5}t}$",
              "$f(t) = 5{,}5e^{\\frac{\\ln(22/19)}{5}t}$",
              "$f(t) = 4{,}75e^{5t}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "f'(t) = af(t) donne f(t) = ke^{at} ; f(0) = 4,75 donne k = 4,75 et f(5) = 5,5 donne a = ln(22/19)/5."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q1",
          "type": "mcq",
          "prompt": "On considère $(E) : y' + 2y = e^{-2x}$ et $g(x) = (x + 1)e^{-2x}$. Que vaut $g'(x) + 2g(x)$ ?",
          "options": [
            "$e^{-2x}$ : $g$ est solution de $(E)$",
            "$0$",
            "$2e^{-2x}$",
            "$(x + 1)e^{-2x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "g'(x) = (−2x−1)e^{−2x} et 2g(x) = 2(x+1)e^{−2x} : g'(x) + 2g(x) = e^{−2x}, donc g est solution de (E)."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q2",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 2y = e^{-2x}$ ?",
          "options": [
            "$x \\mapsto (k + x + 1)e^{-2x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto xe^{-x} + ke^{-2x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto (k + x)e^{-2x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto ke^{-2x} + e^{-x}$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Solution particulière g(x) = (x+1)e^{−2x} plus solution homogène ke^{−2x} : f(x) = (k+x+1)e^{−2x}, k ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q3",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y' + 2y = e^{-2x}$ qui vérifie $f(0) = -2$ ?",
          "options": [
            "$k = -3$ et $f(x) = (x - 2)e^{-2x}$",
            "$k = 0$ et $f(x) = (x + 1)e^{-2x}$",
            "$k = 1$ et $f(x) = (x + 2)e^{-2x}$",
            "$k = -2$ et $f(x) = (x - 1)e^{-2x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f(0) = k + 1 = −2 donne k = −3 : la solution est f(x) = (x − 2)e^{−2x}."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q4",
          "type": "mcq",
          "prompt": "Détermine le réel $m$ pour que $h(x) = me^{-x}$ soit solution de $y' + 3y = 2e^{-x}$.",
          "options": [
            "$m = 1$",
            "$m = 2$",
            "$m = -1$",
            "$m = 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "h' + 3h = −me^{−x} + 3me^{−x} = 2me^{−x} : pour que ce soit 2e^{−x}, il faut m = 1."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q5",
          "type": "mcq",
          "prompt": "Quelles sont les solutions sur $\\mathbb{R}$ de l'équation $y' + 3y = 2e^{-x}$ ?",
          "options": [
            "$x \\mapsto e^{-x} + ke^{-3x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto e^{-x} + ke^{3x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto 2e^{-x} + ke^{-3x}$ ; $k \\in \\mathbb{R}$",
            "$x \\mapsto e^{-3x} + ke^{-x}$ ; $k \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Solution particulière e^{−x} plus solution homogène ke^{−3x} : les solutions sont x ↦ e^{−x} + ke^{−3x}, k ∈ ℝ."
        },
        {
          "id": "terminale_c_maths_numerique_l12_equations_differentielles_p06_q6",
          "type": "mcq",
          "prompt": "La population d'un pays est de $4{,}75$ millions en 1990 et de $5{,}5$ millions en 1995 ; sa vitesse d'accroissement est proportionnelle au nombre d'habitants. Quelle est l'expression de $f(t)$ (t = 0 en 1990) ?",
          "options": [
            "$f(t) = 4{,}75e^{\\frac{\\ln(22/19)}{5}t}$",
            "$f(t) = 4{,}75e^{\\frac{\\ln(19/22)}{5}t}$",
            "$f(t) = 5{,}5e^{\\frac{\\ln(22/19)}{5}t}$",
            "$f(t) = 4{,}75e^{5t}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "f'(t) = af(t) donne f(t) = ke^{at} ; f(0) = 4,75 donne k = 4,75 et f(5) = 5,5 donne a = ln(22/19)/5."
        }
      ]
    }
  ]
};
