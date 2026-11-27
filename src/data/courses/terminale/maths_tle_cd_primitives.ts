import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 04 : Primitives » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=2847
export const MATHS_TLE_CD_L04_PRIMITIVES: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l04_primitives",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 4,
  "orderForGrades": {"terminale_c":4.5},
  "title": "Leçon 4 : Primitives",
  "summary": "Notion de primitive, ensemble des primitives, primitive vérifiant une condition initiale, primitives usuelles, opérations et compositions, et application à l'optimisation du coût d'un trajet.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2847",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l04_primitives_p01",
      "order": 1,
      "title": "Notion de primitive",
      "summary": "Une primitive de f est une fonction F dérivable telle que F' = f.",
      "conceptExplanation": "Soit $f$ une fonction définie sur un intervalle $I$. On appelle primitive de $f$ sur $I$ toute fonction $F$ dérivable sur $I$ telle que $f$ soit la dérivée de $F$.\nRemarque : à partir de la définition, on peut écrire : pour tout $x \\in I$, $F'(x) = f(x)$.\nExemple : soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 3x^2 + 1$. Une primitive de $f$ sur $\\mathbb{R}$ est la fonction $F$ définie par $F(x) = x^3 + x - 9$ car $F$ est dérivable sur $\\mathbb{R}$ et, pour tout $x \\in \\mathbb{R}$, $F'(x) = 3x^2 + 1 = f(x)$.\nCondition d'existence : toute fonction continue sur un intervalle $I$ admet une primitive sur $I$.",
      "keyRule": "F est une primitive de f sur I si F est dérivable sur I et F' = f. Toute fonction continue admet une primitive.",
      "formulas": [
        {
          "name": "Définition d'une primitive",
          "formula": "F \\text{ primitive de } f \\text{ sur } I \\iff F \\text{ dérivable sur } I \\text{ et } F'(x) = f(x) \\text{ pour tout } x \\in I",
          "note": "f doit être définie sur l'intervalle I."
        }
      ],
      "workedExample": {
        "title": "Reconnaître des primitives de $2x + 5$",
        "statement": "Soit $f$ la fonction définie sur $\\mathbb{R}$ par $f(x) = 2x + 5$. On donne $F(x) = x^2$, $G(x) = x^2 + 5x - 7$, $H(x) = x^2 + 5x$ et $P(x) = x^2 + 5x + \\frac{1}{x}$. Parmi ces fonctions, cite celles qui sont des primitives de $f$ sur $\\mathbb{R}$.",
        "methodSteps": [
          "On dérive chaque fonction : $F'(x) = 2x$, $G'(x) = 2x + 5$, $H'(x) = 2x + 5$ et $P'(x) = 2x + 5 - \\frac{1}{x^2}$.",
          "On compare à $f(x) = 2x + 5$ : seules $G$ et $H$ vérifient $F'(x) = f(x)$ sur $\\mathbb{R}$.",
          "On conclut : $G$ et $H$ sont des primitives de $f$ sur $\\mathbb{R}$."
        ],
        "conclusion": "Les primitives de $f$ sur $\\mathbb{R}$ sont $G$ et $H$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une primitive",
          "stepTheme": "La définition d'une primitive",
          "stepBadge": "La définition d'une primitive",
          "paragraphText": "• Soit $f$ une fonction définie sur un intervalle $I$. On appelle primitive de $f$ sur $I$ toute fonction $F$ dérivable sur $I$ telle que $f$ soit la dérivée de $F$.\nAutrement dit : pour tout $x \\in I$, $F'(x) = f(x)$. Primitiver, c'est « remonter » la dérivation.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p01_q1",
            "type": "mcq",
            "prompt": "Que signifie « $F$ est une primitive de $f$ sur $I$ » ?",
            "options": [
              "$F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \\in I$",
              "$F$ est dérivable sur $I$ et $F(x) = f'(x)$ pour tout $x \\in I$",
              "$F$ est continue sur $I$ et $F(x) = f(x)$ pour tout $x \\in I$",
              "$F$ est la dérivée de $f$ sur $I$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, $F$ est une primitive de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \\in I$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $3x^2 + 1$",
          "stepTheme": "Une primitive de $3x^2 + 1$",
          "stepBadge": "Une primitive de $3x^2 + 1$",
          "paragraphText": "• Soit $f(x) = 3x^2 + 1$ sur $\\mathbb{R}$. La fonction $F(x) = x^3 + x - 9$ est une primitive de $f$ sur $\\mathbb{R}$.\nEn effet, $F$ est dérivable sur $\\mathbb{R}$ et $F'(x) = 3x^2 + 1 = f(x)$ pour tout $x \\in \\mathbb{R}$.\nLa constante $-9$ ne change rien : la dérivée d'une constante est nulle.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p01_q2",
            "type": "mcq",
            "prompt": "Soit $f(x) = 3x^2 + 1$ sur $\\mathbb{R}$. Laquelle de ces fonctions est une primitive de $f$ ?",
            "options": [
              "$F(x) = x^3 + x - 9$",
              "$F(x) = 6x$",
              "$F(x) = x^3 + 1$",
              "$F(x) = 3x^2 + 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $x^3 + x - 9$ est $3x^2 + 1 = f(x)$ : $F(x) = x^3 + x - 9$ est bien une primitive de $f$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les primitives de $2x + 5$",
          "stepTheme": "Les primitives de $2x + 5$",
          "stepBadge": "Les primitives de $2x + 5$",
          "paragraphText": "• Soit $f(x) = 2x + 5$ sur $\\mathbb{R}$ et $F(x) = x^2$, $G(x) = x^2 + 5x - 7$, $H(x) = x^2 + 5x$, $P(x) = x^2 + 5x + \\frac{1}{x}$.\nOn a $F'(x) = 2x \\neq f(x)$ ; $G'(x) = 2x + 5 = f(x)$ ; $H'(x) = 2x + 5 = f(x)$ ; $P'(x) = 2x + 5 - \\frac{1}{x^2} \\neq f(x)$.\nDonc $G$ et $H$ sont des primitives de $f$ sur $\\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p01_q3",
            "type": "mcq",
            "prompt": "Soit $f(x) = 2x + 5$ sur $\\mathbb{R}$. Parmi $F(x) = x^2$, $G(x) = x^2 + 5x - 7$, $H(x) = x^2 + 5x$ et $P(x) = x^2 + 5x + \\frac{1}{x}$, lesquelles sont des primitives de $f$ sur $\\mathbb{R}$ ?",
            "options": [
              "$F$ et $G$",
              "$G$ et $H$",
              "$F$ et $H$",
              "$P$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$G'(x) = 2x + 5 = f(x)$ et $H'(x) = 2x + 5 = f(x)$ : seules $G$ et $H$ sont des primitives de $f$ sur $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Condition d'existence d'une primitive",
          "stepTheme": "Condition d'existence d'une primitive",
          "stepBadge": "Condition d'existence d'une primitive",
          "paragraphText": "• Propriété : toute fonction continue sur un intervalle $I$ admet une primitive sur $I$.\nExemple : soient $f(x) = x^3 - 1$, $g(x) = \\frac{1}{x}$, $h(x) = \\sqrt{x}$ et $u(x) = \\frac{x}{x^2+1}$.\nSur $\\mathbb{R}$, $f$ et $u$ sont continues donc elles admettent des primitives sur $\\mathbb{R}$ ; $g$ n'est pas définie en $0$ et $h$ n'est pas définie pour $x < 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p01_q4",
            "type": "mcq",
            "prompt": "Parmi $f(x) = x^3 - 1$, $g(x) = \\frac{1}{x}$, $h(x) = \\sqrt{x}$ et $u(x) = \\frac{x}{x^2+1}$, lesquelles admettent des primitives sur $\\mathbb{R}$ ?",
            "options": [
              "$f$ et $u$",
              "$f$ et $g$",
              "$g$ et $h$",
              "$h$ et $u$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f$ et $u$ sont continues sur $\\mathbb{R}$ : elles admettent des primitives sur $\\mathbb{R}$. $g$ n'est pas définie en $0$ et $h$ n'est pas définie sur $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérifier qu'une fonction est une primitive",
          "stepTheme": "Vérifier qu'une fonction est une primitive",
          "stepBadge": "Vérifier qu'une fonction est une primitive",
          "paragraphText": "• Pour vérifier que $F$ est une primitive de $f$ sur $I$ : on vérifie que $F$ est dérivable sur $I$, on calcule $F'(x)$ et on compare à $f(x)$.\nExemple : $f(x) = x(5\\sqrt{x} + 4)$ et $F(x) = 2x^2(\\sqrt{x} + 1)$ sur $]0 ; +\\infty[$.\n$F'(x) = 4x(\\sqrt{x} + 1) + 2x^2 \\times \\frac{1}{2\\sqrt{x}} = 4x\\sqrt{x} + 4x + x\\sqrt{x} = 5x\\sqrt{x} + 4x = f(x)$ : $F$ est bien une primitive de $f$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p01_q5",
            "type": "mcq",
            "prompt": "Pour vérifier que $F$ est une primitive de $f$ sur $I$, que faut-il faire ?",
            "options": [
              "Calculer $f'(x)$ et comparer à $F(x)$",
              "Vérifier que $F$ est dérivable sur $I$ et que $F'(x) = f(x)$",
              "Calculer $F(x) - f(x)$ et vérifier qu'il vaut $0$",
              "Vérifier que $F$ et $f$ ont le même ensemble de définition"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On vérifie que $F$ est dérivable sur $I$ puis on calcule $F'(x)$ : il faut obtenir $F'(x) = f(x)$ pour tout $x \\in I$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Primitive sur un intervalle, pas « partout »",
          "stepTheme": "Primitive sur un intervalle, pas « partout »",
          "stepBadge": "Primitive sur un intervalle, pas « partout »",
          "paragraphText": "• Une primitive est toujours définie sur un intervalle : $P(x) = x^2 + 5x + \\frac{1}{x}$ n'est pas une primitive de $f(x) = 2x + 5$ sur $\\mathbb{R}$ car elle n'est même pas définie en $0$.\nDe même, $\\frac{1}{x}$ n'admet pas de primitive sur $\\mathbb{R}$ : elle n'est pas définie en $0$, donc pas continue sur $\\mathbb{R}$.\nPiège : toujours préciser l'intervalle sur lequel on travaille.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi $P(x) = x^2 + 5x + \\frac{1}{x}$ n'est-elle pas une primitive de $f(x) = 2x + 5$ sur $\\mathbb{R}$ ?",
            "options": [
              "Parce que $P'(x) = 2x + 5 - \\frac{1}{x^2} \\neq f(x)$ et $P$ n'est pas définie en $0$",
              "Parce que $P$ n'est pas dérivable sur $\\mathbb{R}$",
              "Parce que $P(0) \\neq 0$",
              "Parce que $f$ n'admet pas de primitive"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$P'(x) = 2x + 5 - \\frac{1}{x^2} \\neq f(x)$ et $P$ n'est même pas définie en $0$ : $P$ n'est pas une primitive de $f$ sur $\\mathbb{R}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p01_q1",
          "type": "mcq",
          "prompt": "Que signifie « $F$ est une primitive de $f$ sur $I$ » ?",
          "options": [
            "$F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \\in I$",
            "$F$ est dérivable sur $I$ et $F(x) = f'(x)$ pour tout $x \\in I$",
            "$F$ est continue sur $I$ et $F(x) = f(x)$ pour tout $x \\in I$",
            "$F$ est la dérivée de $f$ sur $I$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, $F$ est une primitive de $f$ sur $I$ si $F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \\in I$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p01_q2",
          "type": "mcq",
          "prompt": "Soit $f(x) = 3x^2 + 1$ sur $\\mathbb{R}$. Laquelle de ces fonctions est une primitive de $f$ ?",
          "options": [
            "$F(x) = x^3 + x - 9$",
            "$F(x) = 6x$",
            "$F(x) = x^3 + 1$",
            "$F(x) = 3x^2 + 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $x^3 + x - 9$ est $3x^2 + 1 = f(x)$ : $F(x) = x^3 + x - 9$ est bien une primitive de $f$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p01_q3",
          "type": "mcq",
          "prompt": "Soit $f(x) = 2x + 5$ sur $\\mathbb{R}$. Parmi $F(x) = x^2$, $G(x) = x^2 + 5x - 7$, $H(x) = x^2 + 5x$ et $P(x) = x^2 + 5x + \\frac{1}{x}$, lesquelles sont des primitives de $f$ sur $\\mathbb{R}$ ?",
          "options": [
            "$F$ et $G$",
            "$G$ et $H$",
            "$F$ et $H$",
            "$P$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$G'(x) = 2x + 5 = f(x)$ et $H'(x) = 2x + 5 = f(x)$ : seules $G$ et $H$ sont des primitives de $f$ sur $\\mathbb{R}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p01_q4",
          "type": "mcq",
          "prompt": "Parmi $f(x) = x^3 - 1$, $g(x) = \\frac{1}{x}$, $h(x) = \\sqrt{x}$ et $u(x) = \\frac{x}{x^2+1}$, lesquelles admettent des primitives sur $\\mathbb{R}$ ?",
          "options": [
            "$f$ et $u$",
            "$f$ et $g$",
            "$g$ et $h$",
            "$h$ et $u$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f$ et $u$ sont continues sur $\\mathbb{R}$ : elles admettent des primitives sur $\\mathbb{R}$. $g$ n'est pas définie en $0$ et $h$ n'est pas définie sur $\\mathbb{R}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p01_q5",
          "type": "mcq",
          "prompt": "Pour vérifier que $F$ est une primitive de $f$ sur $I$, que faut-il faire ?",
          "options": [
            "Calculer $f'(x)$ et comparer à $F(x)$",
            "Vérifier que $F$ est dérivable sur $I$ et que $F'(x) = f(x)$",
            "Calculer $F(x) - f(x)$ et vérifier qu'il vaut $0$",
            "Vérifier que $F$ et $f$ ont le même ensemble de définition"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On vérifie que $F$ est dérivable sur $I$ puis on calcule $F'(x)$ : il faut obtenir $F'(x) = f(x)$ pour tout $x \\in I$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi $P(x) = x^2 + 5x + \\frac{1}{x}$ n'est-elle pas une primitive de $f(x) = 2x + 5$ sur $\\mathbb{R}$ ?",
          "options": [
            "Parce que $P'(x) = 2x + 5 - \\frac{1}{x^2} \\neq f(x)$ et $P$ n'est pas définie en $0$",
            "Parce que $P$ n'est pas dérivable sur $\\mathbb{R}$",
            "Parce que $P(0) \\neq 0$",
            "Parce que $f$ n'admet pas de primitive"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$P'(x) = 2x + 5 - \\frac{1}{x^2} \\neq f(x)$ et $P$ n'est même pas définie en $0$ : $P$ n'est pas une primitive de $f$ sur $\\mathbb{R}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_primitives_p02",
      "order": 2,
      "title": "Ensemble des primitives et condition initiale",
      "summary": "Toutes les primitives d'une fonction diffèrent d'une constante ; une condition initiale en sélectionne une seule.",
      "conceptExplanation": "Propriété : soit $f$ une fonction continue admettant une primitive $F$ sur un intervalle $I$. Toute primitive de $f$ sur $I$ est de la forme $x \\mapsto F(x) + c$, où $c$ est un élément de $\\mathbb{R}$.\nConséquence : toute fonction continue admet une infinité de primitives.\nPropriété (primitive vérifiant une condition initiale) : soit $f$ une fonction continue sur un intervalle $I$, $x_0$ un élément de $I$ et $y_0$ un nombre réel. Il existe une primitive de $f$ sur $I$ et une seule qui prend la valeur $y_0$ en $x_0$.",
      "keyRule": "Primitives de f : F + c, c réel quelconque. Une condition initiale F(x0) = y0 fixe c et donne une primitive unique.",
      "formulas": [
        {
          "name": "Ensemble des primitives",
          "formula": "F \\text{ primitive de } f \\text{ sur } I \\Rightarrow \\text{ les primitives de } f \\text{ sont } x \\mapsto F(x) + c,\\ c \\in \\mathbb{R}",
          "note": "f doit être continue sur I."
        }
      ],
      "workedExample": {
        "title": "La primitive qui vaut $5$ en $-1$",
        "statement": "Soit $g(x) = 2x - 1$ sur $\\mathbb{R}$ et $G(x) = x^2 - x$ une primitive de $g$ sur $\\mathbb{R}$. Détermine la primitive $H$ de $g$ qui prend la valeur $5$ en $-1$.",
        "methodSteps": [
          "La primitive cherchée est de la forme $H(x) = G(x) + c = x^2 - x + c$, où $c \\in \\mathbb{R}$.",
          "On cherche $c$ : $H(-1) = 5 \\iff (-1)^2 - (-1) + c = 5 \\iff 2 + c = 5$.",
          "Donc $c = 3$ et $H(x) = x^2 - x + 3$."
        ],
        "conclusion": "La primitive cherchée est $H(x) = x^2 - x + 3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Toutes les primitives diffèrent d'une constante",
          "stepTheme": "Toutes les primitives diffèrent d'une constante",
          "stepBadge": "Toutes les primitives diffèrent d'une constante",
          "paragraphText": "• Si $F$ est une primitive de $f$ sur $I$, alors toute primitive de $f$ sur $I$ est de la forme $x \\mapsto F(x) + c$, où $c \\in \\mathbb{R}$.\nDeux primitives d'une même fonction sur un intervalle diffèrent donc d'une constante.\nConséquence : toute fonction continue admet une infinité de primitives.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p02_q1",
            "type": "mcq",
            "prompt": "Si $F$ est une primitive de $f$ sur $I$, quelle est la forme générale des primitives de $f$ sur $I$ ?",
            "options": [
              "$x \\mapsto F(x) + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto F(x) \\times c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto F(x + c)$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto F(x) - x + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les primitives de $f$ sur $I$ sont de la forme $x \\mapsto F(x) + c$ avec $c \\in \\mathbb{R}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Deux autres primitives de $x^2 - x$",
          "stepTheme": "Deux autres primitives de $x^2 - x$",
          "stepBadge": "Deux autres primitives de $x^2 - x$",
          "paragraphText": "• Soient $f(x) = x^2 - x$ et $F(x) = \\frac{x^3}{3} - \\frac{x^2}{2}$ sur $\\mathbb{R}$.\nOn vérifie que $F'(x) = x^2 - x = f(x)$ : $F$ est une primitive de $f$ sur $\\mathbb{R}$.\nDeux autres primitives de $f$ sur $\\mathbb{R}$ sont $G(x) = \\frac{x^3}{3} - \\frac{x^2}{2} - 29$ et $H(x) = \\frac{x^3}{3} - \\frac{x^2}{2} + 546$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p02_q2",
            "type": "mcq",
            "prompt": "Soit $f(x) = x^2 - x$ sur $\\mathbb{R}$. Laquelle de ces fonctions est une primitive de $f$ ?",
            "options": [
              "$G(x) = \\frac{x^3}{3} - \\frac{x^2}{2} - 29$",
              "$G(x) = \\frac{x^3}{3} - \\frac{x^2}{2} - 29x$",
              "$G(x) = x^3 - x^2$",
              "$G(x) = \\frac{x^3}{3} + \\frac{x^2}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $\\frac{x^3}{3} - \\frac{x^2}{2} - 29$ est $x^2 - x = f(x)$ : c'est une primitive de $f$ (la constante $-29$ disparaît à la dérivation)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les primitives de $-\\frac{1}{x^2}$",
          "stepTheme": "Les primitives de $-\\frac{1}{x^2}$",
          "stepBadge": "Les primitives de $-\\frac{1}{x^2}$",
          "paragraphText": "• Soit $f(x) = -\\frac{1}{x^2}$ sur $]0 ; +\\infty[$.\nUne primitive de $f$ est $x \\mapsto \\frac{1}{x}$ car $\\left(\\frac{1}{x}\\right)' = -\\frac{1}{x^2}$.\nLes primitives de $f$ sur $]0 ; +\\infty[$ sont donc les fonctions $x \\mapsto \\frac{1}{x} + c$, où $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p02_q3",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = -\\frac{1}{x^2}$ ?",
            "options": [
              "$x \\mapsto \\frac{1}{x} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto -\\frac{1}{x} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{1}{x^2} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\ln x + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $\\frac{1}{x}$ est $-\\frac{1}{x^2}$ : les primitives de $f$ sont $x \\mapsto \\frac{1}{x} + c$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Imposer une condition initiale",
          "stepTheme": "Imposer une condition initiale",
          "stepBadge": "Imposer une condition initiale",
          "paragraphText": "• Pour trouver la primitive $H$ de $g$ qui prend la valeur $y_0$ en $x_0$ : on écrit $H(x) = G(x) + c$ où $G$ est une primitive connue ; on résout $H(x_0) = y_0$ pour trouver $c$ ; on conclut.\nExemple : $g(x) = 2x - 1$, $G(x) = x^2 - x$, $H(-1) = 5$ donne $2 + c = 5$, donc $c = 3$ et $H(x) = x^2 - x + 3$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p02_q4",
            "type": "mcq",
            "prompt": "Soit $g(x) = 2x - 1$ sur $\\mathbb{R}$. Quelle est la primitive de $g$ qui prend la valeur $5$ en $-1$ ?",
            "options": [
              "$H(x) = x^2 - x + 3$",
              "$H(x) = x^2 - x + 5$",
              "$H(x) = x^2 - x - 3$",
              "$H(x) = x^2 + x + 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$H(x) = x^2 - x + c$ et $H(-1) = 2 + c = 5$ donne $c = 3$ : $H(x) = x^2 - x + 3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Vrai ou faux : la primitive qui vaut $-\\frac{1}{2}$ en $1$",
          "stepTheme": "Vrai ou faux : la primitive qui vaut $-\\frac{1}{2}$ en $1$",
          "stepBadge": "Vrai ou faux : la primitive qui vaut $-\\frac{1}{2}$ en $1$",
          "paragraphText": "• Soit $p(x) = x - \\frac{1}{x^2} - \\frac{1}{\\sqrt{x}}$ sur $]0 ; +\\infty[$. La fonction $P(x) = \\frac{x^2}{2} + \\frac{1}{x} - 2\\sqrt{x} + 1$ est bien une primitive de $p$ car $P'(x) = x - \\frac{1}{x^2} - \\frac{1}{\\sqrt{x}} = p(x)$.\nMais $P(1) = \\frac{1}{2} + 1 - 2 + 1 = \\frac{1}{2} \\neq -\\frac{1}{2}$ : l'affirmation « la primitive de $p$ qui prend la valeur $-\\frac{1}{2}$ en $1$ est $P$ » est FAUSSE.\nLa bonne primitive serait $P(x) - 1 = \\frac{x^2}{2} + \\frac{1}{x} - 2\\sqrt{x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p02_q5",
            "type": "mcq",
            "prompt": "L'affirmation « la primitive de $p(x) = x - \\frac{1}{x^2} - \\frac{1}{\\sqrt{x}}$ qui prend la valeur $-\\frac{1}{2}$ en $1$ est $P(x) = \\frac{x^2}{2} + \\frac{1}{x} - 2\\sqrt{x} + 1$ » est-elle vraie ?",
            "options": [
              "Vraie",
              "Fausse, car $P(1) = \\frac{1}{2}$",
              "Fausse, car $P$ n'est pas une primitive de $p$",
              "Fausse, car $p$ n'admet pas de primitive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P$ est bien une primitive de $p$, mais $P(1) = \\frac{1}{2} \\neq -\\frac{1}{2}$ : l'affirmation est fausse."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Une infinité de primitives, une seule avec condition initiale",
          "stepTheme": "Une infinité de primitives, une seule avec condition initiale",
          "stepBadge": "Une infinité de primitives, une seule avec condition initiale",
          "paragraphText": "• Sans condition initiale, une fonction continue admet une infinité de primitives (toutes de la forme $F + c$).\nAvec une condition initiale $H(x_0) = y_0$, il n'y a plus qu'une seule primitive : la constante $c$ est fixée.\nPiège : ne pas oublier que la constante est réelle quelconque — il n'y a pas de « primitive » unique sans condition supplémentaire.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p02_q6",
            "type": "mcq",
            "prompt": "Combien de primitives une fonction continue admet-elle sur un intervalle, et combien avec une condition initiale $H(x_0) = y_0$ ?",
            "options": [
              "Une infinité, puis une seule",
              "Une seule, puis une infinité",
              "Une infinité dans les deux cas",
              "Une seule dans les deux cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans condition initiale, il y a une infinité de primitives ($F + c$) ; la condition initiale fixe $c$ et sélectionne une primitive unique."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p02_q1",
          "type": "mcq",
          "prompt": "Si $F$ est une primitive de $f$ sur $I$, quelle est la forme générale des primitives de $f$ sur $I$ ?",
          "options": [
            "$x \\mapsto F(x) + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto F(x) \\times c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto F(x + c)$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto F(x) - x + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les primitives de $f$ sur $I$ sont de la forme $x \\mapsto F(x) + c$ avec $c \\in \\mathbb{R}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p02_q2",
          "type": "mcq",
          "prompt": "Soit $f(x) = x^2 - x$ sur $\\mathbb{R}$. Laquelle de ces fonctions est une primitive de $f$ ?",
          "options": [
            "$G(x) = \\frac{x^3}{3} - \\frac{x^2}{2} - 29$",
            "$G(x) = \\frac{x^3}{3} - \\frac{x^2}{2} - 29x$",
            "$G(x) = x^3 - x^2$",
            "$G(x) = \\frac{x^3}{3} + \\frac{x^2}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $\\frac{x^3}{3} - \\frac{x^2}{2} - 29$ est $x^2 - x = f(x)$ : c'est une primitive de $f$ (la constante $-29$ disparaît à la dérivation)."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p02_q3",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = -\\frac{1}{x^2}$ ?",
          "options": [
            "$x \\mapsto \\frac{1}{x} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto -\\frac{1}{x} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{1}{x^2} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\ln x + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $\\frac{1}{x}$ est $-\\frac{1}{x^2}$ : les primitives de $f$ sont $x \\mapsto \\frac{1}{x} + c$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p02_q4",
          "type": "mcq",
          "prompt": "Soit $g(x) = 2x - 1$ sur $\\mathbb{R}$. Quelle est la primitive de $g$ qui prend la valeur $5$ en $-1$ ?",
          "options": [
            "$H(x) = x^2 - x + 3$",
            "$H(x) = x^2 - x + 5$",
            "$H(x) = x^2 - x - 3$",
            "$H(x) = x^2 + x + 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$H(x) = x^2 - x + c$ et $H(-1) = 2 + c = 5$ donne $c = 3$ : $H(x) = x^2 - x + 3$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p02_q5",
          "type": "mcq",
          "prompt": "L'affirmation « la primitive de $p(x) = x - \\frac{1}{x^2} - \\frac{1}{\\sqrt{x}}$ qui prend la valeur $-\\frac{1}{2}$ en $1$ est $P(x) = \\frac{x^2}{2} + \\frac{1}{x} - 2\\sqrt{x} + 1$ » est-elle vraie ?",
          "options": [
            "Vraie",
            "Fausse, car $P(1) = \\frac{1}{2}$",
            "Fausse, car $P$ n'est pas une primitive de $p$",
            "Fausse, car $p$ n'admet pas de primitive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P$ est bien une primitive de $p$, mais $P(1) = \\frac{1}{2} \\neq -\\frac{1}{2}$ : l'affirmation est fausse."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p02_q6",
          "type": "mcq",
          "prompt": "Combien de primitives une fonction continue admet-elle sur un intervalle, et combien avec une condition initiale $H(x_0) = y_0$ ?",
          "options": [
            "Une infinité, puis une seule",
            "Une seule, puis une infinité",
            "Une infinité dans les deux cas",
            "Une seule dans les deux cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans condition initiale, il y a une infinité de primitives ($F + c$) ; la condition initiale fixe $c$ et sélectionne une primitive unique."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_primitives_p03",
      "order": 3,
      "title": "Primitives des fonctions usuelles",
      "summary": "Le tableau des primitives usuelles : puissances, racine carrée, cosinus, sinus, tangente et cotangente.",
      "conceptExplanation": "Tableau des primitives usuelles (avec $c \\in \\mathbb{R}$) :\n- $x \\mapsto a$ (avec $a \\in \\mathbb{R}$) : $x \\mapsto ax + c$ sur $\\mathbb{R}$.\n- $x \\mapsto x^r$ (avec $r \\in \\mathbb{Q} \\setminus \\{-1\\}$) : $x \\mapsto \\frac{1}{r+1}x^{r+1} + c$ sur $\\mathbb{R}$, $\\mathbb{R}_+$, $\\mathbb{R}_+^*$ ou $\\mathbb{R}_-^*$.\n- $x \\mapsto \\frac{1}{x^r}$ (avec $r \\in \\mathbb{Q} \\setminus \\{1\\}$) : $x \\mapsto \\frac{-1}{(r-1)x^{r-1}} + c$ sur $\\mathbb{R}_+^*$ ou $\\mathbb{R}_-^*$.\n- $x \\mapsto \\frac{1}{\\sqrt{x}}$ : $x \\mapsto 2\\sqrt{x} + c$ sur $\\mathbb{R}_+^*$.\n- $x \\mapsto \\cos x$ : $x \\mapsto \\sin x + c$ sur $\\mathbb{R}$.\n- $x \\mapsto \\sin x$ : $x \\mapsto -\\cos x + c$ sur $\\mathbb{R}$.\n- $x \\mapsto \\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$ : $x \\mapsto \\tan x + c$ sur $]-\\frac{\\pi}{2} + k\\pi ; \\frac{\\pi}{2} + k\\pi[$, $k \\in \\mathbb{Z}$.\n- $x \\mapsto \\frac{1}{\\sin^2 x} = 1 + \\cot^2 x$ : $x \\mapsto -\\cot x + c$ sur $]k\\pi ; \\pi + k\\pi[$, $k \\in \\mathbb{Z}$.",
      "keyRule": "Puissance : x^r → x^(r+1)/(r+1). cos → sin, sin → −cos, 1/cos² → tan, 1/sin² → −cotan, 1/√x → 2√x.",
      "formulas": [
        {
          "name": "Primitive d'une puissance",
          "formula": "\\int x^r\\,dx = \\frac{1}{r+1}x^{r+1} + c \\quad (r \\neq -1)",
          "note": "Pour r = -1, la primitive de 1/x est ln|x| (voir leçon sur les logarithmes)."
        },
        {
          "name": "Primitives trigonométriques",
          "formula": "\\int \\cos x\\,dx = \\sin x + c,\\quad \\int \\sin x\\,dx = -\\cos x + c,\\quad \\int \\frac{dx}{\\cos^2 x} = \\tan x + c",
          "note": "Sur les intervalles où les fonctions sont définies."
        }
      ],
      "workedExample": {
        "title": "Les primitives de $x^3$ et de $\\frac{1}{x^5}$",
        "statement": "Détermine toutes les primitives sur $]0 ; +\\infty[$ des fonctions $f(x) = x^3$ et $g(x) = \\frac{1}{x^5}$.",
        "methodSteps": [
          "Pour $f(x) = x^3$ : on applique $x^r \\mapsto \\frac{1}{r+1}x^{r+1}$ avec $r = 3$ : $x \\mapsto \\frac{1}{4}x^4 + c$.",
          "Pour $g(x) = \\frac{1}{x^5} = x^{-5}$ : on applique la même règle avec $r = -5$ : $x \\mapsto \\frac{1}{-4}x^{-4} + c = -\\frac{1}{4x^4} + c$."
        ],
        "conclusion": "Les primitives de $f$ sont $x \\mapsto \\frac{1}{4}x^4 + c$ et celles de $g$ sont $x \\mapsto -\\frac{1}{4x^4} + c$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La primitive d'une puissance",
          "stepTheme": "La primitive d'une puissance",
          "stepBadge": "La primitive d'une puissance",
          "paragraphText": "• Pour $r \\in \\mathbb{Q} \\setminus \\{-1\\}$, une primitive de $x \\mapsto x^r$ est $x \\mapsto \\frac{1}{r+1}x^{r+1}$.\nOn augmente l'exposant de $1$ et on divise par le nouvel exposant : c'est l'inverse de la dérivation des puissances.\nExemple : une primitive de $x^3$ est $\\frac{1}{4}x^4$ ; une primitive de $\\frac{1}{x^5} = x^{-5}$ est $-\\frac{1}{4x^4}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p03_q1",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = x^3$ ?",
            "options": [
              "$x \\mapsto \\frac{1}{4}x^4 + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto 3x^2 + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{1}{3}x^3 + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto x^4 + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $r = 3$, une primitive de $x^3$ est $\\frac{1}{3+1}x^{3+1} = \\frac{1}{4}x^4$ : les primitives sont $x \\mapsto \\frac{1}{4}x^4 + c$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La primitive de $\\frac{1}{x^5}$",
          "stepTheme": "La primitive de $\\frac{1}{x^5}$",
          "stepBadge": "La primitive de $\\frac{1}{x^5}$",
          "paragraphText": "• Pour $f(x) = \\frac{1}{x^5} = x^{-5}$ sur $]0 ; +\\infty[$, on applique la règle des puissances avec $r = -5$.\nUne primitive est $\\frac{1}{-5+1}x^{-5+1} = \\frac{1}{-4}x^{-4} = -\\frac{1}{4x^4}$.\nLes primitives de $f$ sont donc $x \\mapsto -\\frac{1}{4x^4} + c$, où $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p03_q2",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{x^5}$ ?",
            "options": [
              "$x \\mapsto -\\frac{1}{4x^4} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{1}{4x^4} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto -\\frac{1}{5x^6} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto -5x^{-6} + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{1}{x^5} = x^{-5}$ : une primitive est $\\frac{1}{-4}x^{-4} = -\\frac{1}{4x^4}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La primitive de $\\frac{1}{\\sqrt{x}}$",
          "stepTheme": "La primitive de $\\frac{1}{\\sqrt{x}}$",
          "stepBadge": "La primitive de $\\frac{1}{\\sqrt{x}}$",
          "paragraphText": "• Pour $f(x) = \\frac{1}{\\sqrt{x}}$ sur $\\mathbb{R}_+^*$, une primitive est $x \\mapsto 2\\sqrt{x}$.\nEn effet, $(2\\sqrt{x})' = 2 \\times \\frac{1}{2\\sqrt{x}} = \\frac{1}{\\sqrt{x}}$.\nLes primitives de $f$ sont donc $x \\mapsto 2\\sqrt{x} + c$, où $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p03_q3",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{\\sqrt{x}}$ ?",
            "options": [
              "$x \\mapsto 2\\sqrt{x} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{1}{2\\sqrt{x}} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\sqrt{x} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{2}{\\sqrt{x}} + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $2\\sqrt{x}$ est $2 \\times \\frac{1}{2\\sqrt{x}} = \\frac{1}{\\sqrt{x}}$ : les primitives sont $x \\mapsto 2\\sqrt{x} + c$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les primitives de cosinus et de sinus",
          "stepTheme": "Les primitives de cosinus et de sinus",
          "stepBadge": "Les primitives de cosinus et de sinus",
          "paragraphText": "• Une primitive de $\\cos x$ est $\\sin x$ ; une primitive de $\\sin x$ est $-\\cos x$.\nOn retient : dériver $\\sin$ donne $\\cos$, donc primitiver $\\cos$ donne $\\sin$ ; dériver $\\cos$ donne $-\\sin$, donc primitiver $\\sin$ donne $-\\cos$.\nLes primitives de $\\cos$ sont $x \\mapsto \\sin x + c$ et celles de $\\sin$ sont $x \\mapsto -\\cos x + c$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p03_q4",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = \\sin x$ ?",
            "options": [
              "$x \\mapsto \\cos x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto -\\cos x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\sin x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto -\\sin x + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dérivée de $-\\cos x$ est $-(-\\sin x) = \\sin x$ : les primitives de $\\sin$ sont $x \\mapsto -\\cos x + c$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Les primitives de $\\frac{1}{\\cos^2 x}$ et $\\frac{1}{\\sin^2 x}$",
          "stepTheme": "Les primitives de $\\frac{1}{\\cos^2 x}$ et $\\frac{1}{\\sin^2 x}$",
          "stepBadge": "Les primitives de $\\frac{1}{\\cos^2 x}$ et $\\frac{1}{\\sin^2 x}$",
          "paragraphText": "• Une primitive de $\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$ est $\\tan x$ (sur $]-\\frac{\\pi}{2} + k\\pi ; \\frac{\\pi}{2} + k\\pi[$).\nUne primitive de $\\frac{1}{\\sin^2 x} = 1 + \\cot^2 x$ est $-\\cot x$ (sur $]k\\pi ; \\pi + k\\pi[$).\nOn retient : $\\frac{1}{\\cos^2}$ donne $\\tan$, $\\frac{1}{\\sin^2}$ donne $-\\cot$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p03_q5",
            "type": "mcq",
            "prompt": "Quelle est une primitive de $f(x) = \\frac{1}{\\cos^2 x}$ ?",
            "options": [
              "$\\tan x$",
              "$-\\tan x$",
              "$\\cot x$",
              "$\\sin x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $\\tan x$ est $\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$ : une primitive de $\\frac{1}{\\cos^2 x}$ est $\\tan x$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le cas interdit : $r = -1$",
          "stepTheme": "Le cas interdit : $r = -1$",
          "stepBadge": "Le cas interdit : $r = -1$",
          "paragraphText": "• La règle $x^r \\mapsto \\frac{1}{r+1}x^{r+1}$ ne s'applique pas pour $r = -1$ : on diviserait par zéro.\nPour $f(x) = \\frac{1}{x} = x^{-1}$, la primitive est le logarithme népérien $\\ln|x|$ (voir la leçon sur les fonctions logarithmes).\nPiège : ne jamais écrire $\\frac{1}{0}x^0$ pour primitiver $\\frac{1}{x}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p03_q6",
            "type": "mcq",
            "prompt": "Pourquoi la règle $x^r \\mapsto \\frac{1}{r+1}x^{r+1}$ ne s'applique-t-elle pas à $f(x) = \\frac{1}{x}$ ?",
            "options": [
              "Parce que $\\frac{1}{x}$ n'admet pas de primitive",
              "Parce que $r = -1$ donnerait une division par zéro",
              "Parce que $\\frac{1}{x}$ n'est pas une puissance",
              "Parce que $\\frac{1}{x}$ n'est pas continue"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour $r = -1$, on aurait $r + 1 = 0$ : la formule donnerait une division par zéro. La primitive de $\\frac{1}{x}$ est $\\ln|x|$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p03_q1",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = x^3$ ?",
          "options": [
            "$x \\mapsto \\frac{1}{4}x^4 + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto 3x^2 + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{1}{3}x^3 + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto x^4 + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $r = 3$, une primitive de $x^3$ est $\\frac{1}{3+1}x^{3+1} = \\frac{1}{4}x^4$ : les primitives sont $x \\mapsto \\frac{1}{4}x^4 + c$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p03_q2",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{x^5}$ ?",
          "options": [
            "$x \\mapsto -\\frac{1}{4x^4} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{1}{4x^4} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto -\\frac{1}{5x^6} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto -5x^{-6} + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{1}{x^5} = x^{-5}$ : une primitive est $\\frac{1}{-4}x^{-4} = -\\frac{1}{4x^4}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p03_q3",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{\\sqrt{x}}$ ?",
          "options": [
            "$x \\mapsto 2\\sqrt{x} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{1}{2\\sqrt{x}} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\sqrt{x} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{2}{\\sqrt{x}} + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $2\\sqrt{x}$ est $2 \\times \\frac{1}{2\\sqrt{x}} = \\frac{1}{\\sqrt{x}}$ : les primitives sont $x \\mapsto 2\\sqrt{x} + c$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p03_q4",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = \\sin x$ ?",
          "options": [
            "$x \\mapsto \\cos x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto -\\cos x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\sin x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto -\\sin x + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dérivée de $-\\cos x$ est $-(-\\sin x) = \\sin x$ : les primitives de $\\sin$ sont $x \\mapsto -\\cos x + c$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p03_q5",
          "type": "mcq",
          "prompt": "Quelle est une primitive de $f(x) = \\frac{1}{\\cos^2 x}$ ?",
          "options": [
            "$\\tan x$",
            "$-\\tan x$",
            "$\\cot x$",
            "$\\sin x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $\\tan x$ est $\\frac{1}{\\cos^2 x} = 1 + \\tan^2 x$ : une primitive de $\\frac{1}{\\cos^2 x}$ est $\\tan x$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p03_q6",
          "type": "mcq",
          "prompt": "Pourquoi la règle $x^r \\mapsto \\frac{1}{r+1}x^{r+1}$ ne s'applique-t-elle pas à $f(x) = \\frac{1}{x}$ ?",
          "options": [
            "Parce que $\\frac{1}{x}$ n'admet pas de primitive",
            "Parce que $r = -1$ donnerait une division par zéro",
            "Parce que $\\frac{1}{x}$ n'est pas une puissance",
            "Parce que $\\frac{1}{x}$ n'est pas continue"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour $r = -1$, on aurait $r + 1 = 0$ : la formule donnerait une division par zéro. La primitive de $\\frac{1}{x}$ est $\\ln|x|$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_primitives_p04",
      "order": 4,
      "title": "Opérations sur les primitives",
      "summary": "La primitive d'une somme est la somme des primitives ; la primitive de k·u est k fois une primitive de u.",
      "conceptExplanation": "Soient $u$ et $v$ deux fonctions admettant respectivement pour primitives sur un intervalle $I$ les fonctions $U$ et $V$, et $k$ un nombre réel.\n- $U + V$ est une primitive sur $I$ de la fonction $u + v$.\n- $kU$ est une primitive sur $I$ de la fonction $ku$.\nConséquence : on peut primitiver terme à terme une somme de fonctions usuelles.",
      "keyRule": "Primitiver terme à terme : primitive de u + v = U + V ; primitive de k·u = k·U.",
      "formulas": [
        {
          "name": "Primitives d'une somme et d'un multiple",
          "formula": "\\int (u + v) = U + V + c,\\quad \\int ku = kU + c",
          "note": "U et V sont des primitives de u et v sur le même intervalle I."
        }
      ],
      "workedExample": {
        "title": "Les primitives de $x + \\sin x$",
        "statement": "Détermine toutes les primitives sur $\\mathbb{R}$ de $f(x) = x + \\sin x$.",
        "methodSteps": [
          "Une primitive de $x$ est $\\frac{1}{2}x^2$ ; une primitive de $\\sin x$ est $-\\cos x$.",
          "Par la règle de la somme, une primitive de $f$ est $\\frac{1}{2}x^2 - \\cos x$.",
          "Les primitives de $f$ sont donc $x \\mapsto \\frac{1}{2}x^2 - \\cos x + c$, où $c \\in \\mathbb{R}$."
        ],
        "conclusion": "Les primitives de $f$ sont $x \\mapsto \\frac{1}{2}x^2 - \\cos x + c$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La primitive d'une somme",
          "stepTheme": "La primitive d'une somme",
          "stepBadge": "La primitive d'une somme",
          "paragraphText": "• Si $U$ est une primitive de $u$ et $V$ une primitive de $v$ sur $I$, alors $U + V$ est une primitive de $u + v$ sur $I$.\nEn effet, $(U + V)' = U' + V' = u + v$.\nOn peut donc primitiver une somme terme à terme.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p04_q1",
            "type": "mcq",
            "prompt": "Si $U$ est une primitive de $u$ et $V$ une primitive de $v$ sur $I$, que vaut une primitive de $u + v$ ?",
            "options": [
              "$U - V$",
              "$U + V$",
              "$U \\times V$",
              "$U \\circ V$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(U + V)' = U' + V' = u + v$ : $U + V$ est une primitive de $u + v$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les primitives de $x + \\sin x$",
          "stepTheme": "Les primitives de $x + \\sin x$",
          "stepBadge": "Les primitives de $x + \\sin x$",
          "paragraphText": "• Pour $f(x) = x + \\sin x$ sur $\\mathbb{R}$ : une primitive de $x$ est $\\frac{1}{2}x^2$ et une primitive de $\\sin x$ est $-\\cos x$.\nDonc une primitive de $f$ est $\\frac{1}{2}x^2 - \\cos x$.\nLes primitives de $f$ sont $x \\mapsto \\frac{1}{2}x^2 - \\cos x + c$, où $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p04_q2",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = x + \\sin x$ ?",
            "options": [
              "$x \\mapsto \\frac{1}{2}x^2 - \\cos x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{1}{2}x^2 + \\cos x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto x^2 - \\cos x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{1}{2}x^2 - \\sin x + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une primitive de $x$ est $\\frac{1}{2}x^2$ et une primitive de $\\sin x$ est $-\\cos x$ : les primitives sont $x \\mapsto \\frac{1}{2}x^2 - \\cos x + c$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les primitives de $\\sin x + \\cos x$",
          "stepTheme": "Les primitives de $\\sin x + \\cos x$",
          "stepBadge": "Les primitives de $\\sin x + \\cos x$",
          "paragraphText": "• Pour $f(x) = \\sin x + \\cos x$ sur $\\mathbb{R}$ : une primitive de $\\sin x$ est $-\\cos x$ et une primitive de $\\cos x$ est $\\sin x$.\nDonc une primitive de $f$ est $-\\cos x + \\sin x$.\nLes primitives de $f$ sont $x \\mapsto -\\cos x + \\sin x + c$, où $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p04_q3",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = \\sin x + \\cos x$ ?",
            "options": [
              "$x \\mapsto -\\cos x + \\sin x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\cos x - \\sin x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto -\\cos x - \\sin x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\cos x + \\sin x + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une primitive de $\\sin x$ est $-\\cos x$ et une primitive de $\\cos x$ est $\\sin x$ : les primitives sont $x \\mapsto -\\cos x + \\sin x + c$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les primitives de $8x^2 + 5x - 9$",
          "stepTheme": "Les primitives de $8x^2 + 5x - 9$",
          "stepBadge": "Les primitives de $8x^2 + 5x - 9$",
          "paragraphText": "• Pour $f(x) = 8x^2 + 5x - 9$ sur $\\mathbb{R}$, on primitive terme à terme.\nUne primitive de $8x^2$ est $\\frac{8}{3}x^3$ ; une primitive de $5x$ est $\\frac{5}{2}x^2$ ; une primitive de $-9$ est $-9x$.\nLes primitives de $f$ sont $x \\mapsto \\frac{8}{3}x^3 + \\frac{5}{2}x^2 - 9x + c$, où $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p04_q4",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = 8x^2 + 5x - 9$ ?",
            "options": [
              "$x \\mapsto \\frac{8}{3}x^3 + \\frac{5}{2}x^2 - 9x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto 8x^3 + 5x^2 - 9x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{8}{3}x^3 + \\frac{5}{2}x^2 + 9x + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{8}{3}x^3 - \\frac{5}{2}x^2 - 9x + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Terme à terme : $8x^2 \\mapsto \\frac{8}{3}x^3$, $5x \\mapsto \\frac{5}{2}x^2$, $-9 \\mapsto -9x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La primitive d'un multiple constant",
          "stepTheme": "La primitive d'un multiple constant",
          "stepBadge": "La primitive d'un multiple constant",
          "paragraphText": "• Si $U$ est une primitive de $u$ sur $I$ et $k$ un nombre réel, alors $kU$ est une primitive de $ku$ sur $I$.\nEn effet, $(kU)' = kU' = ku$.\nExemple : une primitive de $3\\sin 2x$ est $3 \\times \\left(-\\frac{1}{2}\\cos 2x\\right) = -\\frac{3}{2}\\cos 2x$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p04_q5",
            "type": "mcq",
            "prompt": "Si $U$ est une primitive de $u$ sur $I$ et $k$ un nombre réel, que vaut une primitive de $ku$ ?",
            "options": [
              "$kU$",
              "$U + k$",
              "$\\frac{U}{k}$",
              "$U(kx)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(kU)' = kU' = ku$ : $kU$ est une primitive de $ku$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $\\frac{2x^6 - 3x + 8}{2x^4}$",
          "stepTheme": "Une primitive de $\\frac{2x^6 - 3x + 8}{2x^4}$",
          "stepBadge": "Une primitive de $\\frac{2x^6 - 3x + 8}{2x^4}$",
          "paragraphText": "• Soit $f(x) = \\frac{2x^6 - 3x + 8}{2x^4}$ sur $]0 ; +\\infty[$. On décompose : $f(x) = x^2 - \\frac{3}{2}x^{-3} + 4x^{-4}$.\nOn primitive terme à terme : $x^2 \\mapsto \\frac{x^3}{3}$ ; $-\\frac{3}{2}x^{-3} \\mapsto \\frac{3}{4x^2}$ ; $4x^{-4} \\mapsto -\\frac{4}{3x^3}$.\nLes primitives de $f$ sont $x \\mapsto \\frac{x^3}{3} + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p04_q6",
            "type": "mcq",
            "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{2x^6 - 3x + 8}{2x^4}$ ?",
            "options": [
              "$x \\mapsto \\frac{x^3}{3} + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{x^3}{3} - \\frac{3}{4x^2} + \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto \\frac{x^3}{3} + \\frac{3}{2x^2} - \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$",
              "$x \\mapsto x^3 + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On décompose $f(x) = x^2 - \\frac{3}{2}x^{-3} + 4x^{-4}$ puis on primitive terme à terme : $\\frac{x^3}{3} + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p04_q1",
          "type": "mcq",
          "prompt": "Si $U$ est une primitive de $u$ et $V$ une primitive de $v$ sur $I$, que vaut une primitive de $u + v$ ?",
          "options": [
            "$U - V$",
            "$U + V$",
            "$U \\times V$",
            "$U \\circ V$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(U + V)' = U' + V' = u + v$ : $U + V$ est une primitive de $u + v$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p04_q2",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = x + \\sin x$ ?",
          "options": [
            "$x \\mapsto \\frac{1}{2}x^2 - \\cos x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{1}{2}x^2 + \\cos x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto x^2 - \\cos x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{1}{2}x^2 - \\sin x + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une primitive de $x$ est $\\frac{1}{2}x^2$ et une primitive de $\\sin x$ est $-\\cos x$ : les primitives sont $x \\mapsto \\frac{1}{2}x^2 - \\cos x + c$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p04_q3",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = \\sin x + \\cos x$ ?",
          "options": [
            "$x \\mapsto -\\cos x + \\sin x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\cos x - \\sin x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto -\\cos x - \\sin x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\cos x + \\sin x + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une primitive de $\\sin x$ est $-\\cos x$ et une primitive de $\\cos x$ est $\\sin x$ : les primitives sont $x \\mapsto -\\cos x + \\sin x + c$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p04_q4",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $\\mathbb{R}$ de $f(x) = 8x^2 + 5x - 9$ ?",
          "options": [
            "$x \\mapsto \\frac{8}{3}x^3 + \\frac{5}{2}x^2 - 9x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto 8x^3 + 5x^2 - 9x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{8}{3}x^3 + \\frac{5}{2}x^2 + 9x + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{8}{3}x^3 - \\frac{5}{2}x^2 - 9x + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Terme à terme : $8x^2 \\mapsto \\frac{8}{3}x^3$, $5x \\mapsto \\frac{5}{2}x^2$, $-9 \\mapsto -9x$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p04_q5",
          "type": "mcq",
          "prompt": "Si $U$ est une primitive de $u$ sur $I$ et $k$ un nombre réel, que vaut une primitive de $ku$ ?",
          "options": [
            "$kU$",
            "$U + k$",
            "$\\frac{U}{k}$",
            "$U(kx)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(kU)' = kU' = ku$ : $kU$ est une primitive de $ku$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p04_q6",
          "type": "mcq",
          "prompt": "Quelles sont les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{2x^6 - 3x + 8}{2x^4}$ ?",
          "options": [
            "$x \\mapsto \\frac{x^3}{3} + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{x^3}{3} - \\frac{3}{4x^2} + \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto \\frac{x^3}{3} + \\frac{3}{2x^2} - \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$",
            "$x \\mapsto x^3 + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$, où $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On décompose $f(x) = x^2 - \\frac{3}{2}x^{-3} + 4x^{-4}$ puis on primitive terme à terme : $\\frac{x^3}{3} + \\frac{3}{4x^2} - \\frac{4}{3x^3} + c$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_primitives_p05",
      "order": 5,
      "title": "Primitives par composition",
      "summary": "Quand on reconnaît u' fois une fonction de u, la primitive est une fonction de u.",
      "conceptExplanation": "Soit $u$ une fonction dérivable sur un intervalle $I$ et $v$ une fonction dérivable sur un intervalle contenant $u(I)$. Une primitive sur $I$ de la fonction $u' \\times (v' \\circ u)$ est la fonction $v \\circ u$.\nTableau des primitives par composition (avec $u > 0$ sur $I$ quand une racine ou une puissance est en jeu) :\n- $u'u^r$ ($r \\in \\mathbb{Q} \\setminus \\{-1\\}$) : $\\frac{1}{r+1}u^{r+1}$.\n- $\\frac{u'}{u^r}$ ($r \\in \\mathbb{Q} \\setminus \\{1\\}$) : $\\frac{-1}{(r-1)u^{r-1}}$.\n- $\\frac{u'}{\\sqrt{u}}$ : $2\\sqrt{u}$.\n- $u'\\cos u$ : $\\sin u$.\n- $u'\\sin u$ : $-\\cos u$.\n- $x \\mapsto \\cos(ax + b)$ : $x \\mapsto \\frac{1}{a}\\sin(ax + b)$ (avec $a \\neq 0$).\n- $x \\mapsto \\sin(ax + b)$ : $x \\mapsto -\\frac{1}{a}\\cos(ax + b)$ (avec $a \\neq 0$).",
      "keyRule": "Reconnaître u' × (fonction de u) : la primitive est la primitive de cette fonction, appliquée à u.",
      "formulas": [
        {
          "name": "Primitive de $u'u^r$",
          "formula": "\\int u'u^r\\,dx = \\frac{1}{r+1}u^{r+1} + c \\quad (r \\neq -1)",
          "note": "u dérivable sur I, u > 0 sur I si besoin."
        },
        {
          "name": "Primitive de $u'\\cos u$ et $u'\\sin u$",
          "formula": "\\int u'\\cos u\\,dx = \\sin u + c,\\quad \\int u'\\sin u\\,dx = -\\cos u + c",
          "note": "u dérivable sur I."
        }
      ],
      "workedExample": {
        "title": "Une primitive de $3\\sin 2x$",
        "statement": "Détermine une primitive $F$ sur $]0 ; +\\infty[$ de $f(x) = 3\\sin 2x$.",
        "methodSteps": [
          "On reconnaît la forme $u'\\sin u$ avec $u(x) = 2x$ : $u'(x) = 2$.",
          "Une primitive de $\\sin 2x$ est $-\\frac{1}{2}\\cos 2x$ (formule $\\sin(ax+b) \\mapsto -\\frac{1}{a}\\cos(ax+b)$).",
          "Donc une primitive de $3\\sin 2x$ est $F(x) = 3 \\times \\left(-\\frac{1}{2}\\cos 2x\\right) = -\\frac{3}{2}\\cos 2x$."
        ],
        "conclusion": "Une primitive de $f$ est $F(x) = -\\frac{3}{2}\\cos 2x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La règle de composition",
          "stepTheme": "La règle de composition",
          "stepBadge": "La règle de composition",
          "paragraphText": "• Si $u$ est dérivable sur $I$ et $v$ dérivable sur un intervalle contenant $u(I)$, alors une primitive de $u' \\times (v' \\circ u)$ sur $I$ est $v \\circ u$.\nEn pratique : quand on voit $u'$ multiplié par une fonction de $u$, la primitive est la primitive de cette fonction, appliquée à $u$.\nExemple : $u'u^r$ donne $\\frac{1}{r+1}u^{r+1}$ ; $u'\\cos u$ donne $\\sin u$ ; $u'\\sin u$ donne $-\\cos u$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p05_q1",
            "type": "mcq",
            "prompt": "Soit $u$ dérivable sur $I$. Quelle est une primitive de $u'\\cos u$ ?",
            "options": [
              "$\\sin u$",
              "$-\\sin u$",
              "$\\cos u$",
              "$-\\cos u$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $\\sin u$ est $u'\\cos u$ : une primitive de $u'\\cos u$ est $\\sin u$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $3\\sin 2x$",
          "stepTheme": "Une primitive de $3\\sin 2x$",
          "stepBadge": "Une primitive de $3\\sin 2x$",
          "paragraphText": "• Pour $f(x) = 3\\sin 2x$ : une primitive de $\\sin 2x$ est $-\\frac{1}{2}\\cos 2x$ (formule $\\sin(ax+b) \\mapsto -\\frac{1}{a}\\cos(ax+b)$ avec $a = 2$).\nDonc une primitive de $f$ est $F(x) = 3 \\times \\left(-\\frac{1}{2}\\cos 2x\\right) = -\\frac{3}{2}\\cos 2x$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p05_q2",
            "type": "mcq",
            "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = 3\\sin 2x$ ?",
            "options": [
              "$-\\frac{3}{2}\\cos 2x$",
              "$\\frac{3}{2}\\cos 2x$",
              "$-3\\cos 2x$",
              "$-\\frac{3}{2}\\sin 2x$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une primitive de $\\sin 2x$ est $-\\frac{1}{2}\\cos 2x$ : une primitive de $3\\sin 2x$ est $-\\frac{3}{2}\\cos 2x$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $2\\sqrt{2x+1}$",
          "stepTheme": "Une primitive de $2\\sqrt{2x+1}$",
          "stepBadge": "Une primitive de $2\\sqrt{2x+1}$",
          "paragraphText": "• Pour $f(x) = 2\\sqrt{2x+1}$ sur $]0 ; +\\infty[$ : on écrit $f(x) = 2(2x+1)^{\\frac{1}{2}}$.\nAvec $u(x) = 2x+1$, $u'(x) = 2$ : $f(x) = u'(x) \\times u(x)^{\\frac{1}{2}}$.\nUne primitive est $\\frac{1}{\\frac{1}{2}+1}u^{\\frac{3}{2}} = \\frac{2}{3}(2x+1)^{\\frac{3}{2}}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p05_q3",
            "type": "mcq",
            "prompt": "Quelle est une primitive sur $]0 ; +\\infty[$ de $f(x) = 2\\sqrt{2x+1}$ ?",
            "options": [
              "$\\frac{2}{3}(2x+1)^{\\frac{3}{2}}$",
              "$(2x+1)^{\\frac{3}{2}}$",
              "$\\frac{4}{3}(2x+1)^{\\frac{3}{2}}$",
              "$\\frac{2}{3}(2x+1)^{\\frac{1}{2}}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = 2x+1$ et $u'(x) = 2$, $f = u' \\times u^{\\frac{1}{2}}$ : une primitive est $\\frac{1}{\\frac{3}{2}}u^{\\frac{3}{2}} = \\frac{2}{3}(2x+1)^{\\frac{3}{2}}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $\\frac{3}{(3x+5)^2}$",
          "stepTheme": "Une primitive de $\\frac{3}{(3x+5)^2}$",
          "stepBadge": "Une primitive de $\\frac{3}{(3x+5)^2}$",
          "paragraphText": "• Pour $f(x) = \\frac{3}{(3x+5)^2}$ sur $]0 ; +\\infty[$ : avec $u(x) = 3x+5$, $u'(x) = 3$, on a $f(x) = \\frac{u'(x)}{u(x)^2}$.\nUne primitive de $\\frac{u'}{u^2}$ est $-\\frac{1}{u}$ (règle $\\frac{u'}{u^r} \\mapsto \\frac{-1}{(r-1)u^{r-1}}$ avec $r = 2$).\nDonc une primitive de $f$ est $F(x) = -\\frac{1}{3x+5}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est une primitive sur $]0 ; +\\infty[$ de $f(x) = \\frac{3}{(3x+5)^2}$ ?",
            "options": [
              "$-\\frac{1}{3x+5}$",
              "$\\frac{1}{3x+5}$",
              "$-\\frac{3}{3x+5}$",
              "$\\frac{3}{3x+5}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = 3x+5$, $f = \\frac{u'}{u^2}$ : une primitive est $-\\frac{1}{u} = -\\frac{1}{3x+5}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $(2x+1)(x^2+x+6)^3$",
          "stepTheme": "Une primitive de $(2x+1)(x^2+x+6)^3$",
          "stepBadge": "Une primitive de $(2x+1)(x^2+x+6)^3$",
          "paragraphText": "• Pour $h(x) = (2x+1)(x^2+x+6)^3$ sur $\\mathbb{R}$ : avec $u(x) = x^2+x+6$, on a $u'(x) = 2x+1$.\nDonc $h(x) = u'(x) \\times u(x)^3$ : une primitive est $\\frac{1}{4}u(x)^4 = \\frac{1}{4}(x^2+x+6)^4$.\nDe même, pour $h(x) = \\sin x \\cos^5 x$ : avec $u(x) = \\cos x$, $u'(x) = -\\sin x$, donc $h(x) = -u'(x) \\times u(x)^5$ et une primitive est $-\\frac{1}{6}\\cos^6 x$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $h(x) = (2x+1)(x^2+x+6)^3$ ?",
            "options": [
              "$\\frac{1}{4}(x^2+x+6)^4$",
              "$(x^2+x+6)^4$",
              "$\\frac{1}{3}(x^2+x+6)^4$",
              "$4(x^2+x+6)^3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = x^2+x+6$, $u'(x) = 2x+1$ : $h = u'u^3$, une primitive est $\\frac{1}{4}u^4 = \\frac{1}{4}(x^2+x+6)^4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $\\frac{2x+1}{\\sqrt{x^2+x+1}}$",
          "stepTheme": "Une primitive de $\\frac{2x+1}{\\sqrt{x^2+x+1}}$",
          "stepBadge": "Une primitive de $\\frac{2x+1}{\\sqrt{x^2+x+1}}$",
          "paragraphText": "• Pour $h(x) = \\frac{2x+1}{\\sqrt{x^2+x+1}}$ sur $\\mathbb{R}$ : avec $u(x) = x^2+x+1$, on a $u'(x) = 2x+1$.\nDonc $h(x) = \\frac{u'(x)}{\\sqrt{u(x)}}$ : une primitive est $2\\sqrt{u(x)} = 2\\sqrt{x^2+x+1}$.\nDe même, pour $h(x) = \\frac{2x+3}{(x^2+3x+3)^4}$ : avec $u(x) = x^2+3x+3$, $h = \\frac{u'}{u^4}$ et une primitive est $-\\frac{1}{3(x^2+3x+3)^3}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p05_q6",
            "type": "mcq",
            "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $h(x) = \\frac{2x+1}{\\sqrt{x^2+x+1}}$ ?",
            "options": [
              "$2\\sqrt{x^2+x+1}$",
              "$\\sqrt{x^2+x+1}$",
              "$\\frac{1}{2\\sqrt{x^2+x+1}}$",
              "$2(x^2+x+1)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $u(x) = x^2+x+1$, $h = \\frac{u'}{\\sqrt{u}}$ : une primitive est $2\\sqrt{u} = 2\\sqrt{x^2+x+1}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p05_q1",
          "type": "mcq",
          "prompt": "Soit $u$ dérivable sur $I$. Quelle est une primitive de $u'\\cos u$ ?",
          "options": [
            "$\\sin u$",
            "$-\\sin u$",
            "$\\cos u$",
            "$-\\cos u$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $\\sin u$ est $u'\\cos u$ : une primitive de $u'\\cos u$ est $\\sin u$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p05_q2",
          "type": "mcq",
          "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $f(x) = 3\\sin 2x$ ?",
          "options": [
            "$-\\frac{3}{2}\\cos 2x$",
            "$\\frac{3}{2}\\cos 2x$",
            "$-3\\cos 2x$",
            "$-\\frac{3}{2}\\sin 2x$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une primitive de $\\sin 2x$ est $-\\frac{1}{2}\\cos 2x$ : une primitive de $3\\sin 2x$ est $-\\frac{3}{2}\\cos 2x$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p05_q3",
          "type": "mcq",
          "prompt": "Quelle est une primitive sur $]0 ; +\\infty[$ de $f(x) = 2\\sqrt{2x+1}$ ?",
          "options": [
            "$\\frac{2}{3}(2x+1)^{\\frac{3}{2}}$",
            "$(2x+1)^{\\frac{3}{2}}$",
            "$\\frac{4}{3}(2x+1)^{\\frac{3}{2}}$",
            "$\\frac{2}{3}(2x+1)^{\\frac{1}{2}}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = 2x+1$ et $u'(x) = 2$, $f = u' \\times u^{\\frac{1}{2}}$ : une primitive est $\\frac{1}{\\frac{3}{2}}u^{\\frac{3}{2}} = \\frac{2}{3}(2x+1)^{\\frac{3}{2}}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est une primitive sur $]0 ; +\\infty[$ de $f(x) = \\frac{3}{(3x+5)^2}$ ?",
          "options": [
            "$-\\frac{1}{3x+5}$",
            "$\\frac{1}{3x+5}$",
            "$-\\frac{3}{3x+5}$",
            "$\\frac{3}{3x+5}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = 3x+5$, $f = \\frac{u'}{u^2}$ : une primitive est $-\\frac{1}{u} = -\\frac{1}{3x+5}$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $h(x) = (2x+1)(x^2+x+6)^3$ ?",
          "options": [
            "$\\frac{1}{4}(x^2+x+6)^4$",
            "$(x^2+x+6)^4$",
            "$\\frac{1}{3}(x^2+x+6)^4$",
            "$4(x^2+x+6)^3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = x^2+x+6$, $u'(x) = 2x+1$ : $h = u'u^3$, une primitive est $\\frac{1}{4}u^4 = \\frac{1}{4}(x^2+x+6)^4$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p05_q6",
          "type": "mcq",
          "prompt": "Quelle est une primitive sur $\\mathbb{R}$ de $h(x) = \\frac{2x+1}{\\sqrt{x^2+x+1}}$ ?",
          "options": [
            "$2\\sqrt{x^2+x+1}$",
            "$\\sqrt{x^2+x+1}$",
            "$\\frac{1}{2\\sqrt{x^2+x+1}}$",
            "$2(x^2+x+1)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $u(x) = x^2+x+1$, $h = \\frac{u'}{\\sqrt{u}}$ : une primitive est $2\\sqrt{u} = 2\\sqrt{x^2+x+1}$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l04_primitives_p06",
      "order": 6,
      "title": "Situation complexe : minimiser le coût d'un trajet",
      "summary": "On retrouve la consommation par primitivation, on modélise le coût total, puis on minimise par l'étude des variations.",
      "conceptExplanation": "Situation : le car loué par le lycée pour sa colonie de vacances doit effectuer un trajet de $1500$ km. Lorsque ce car roule à la vitesse moyenne $v$ (en km/h), la dérivée de sa consommation $C(v)$ (en litres pour 100 km) est donnée par $C'(v) = -\\frac{300}{v^2} + \\frac{1}{3}$. Le car consomme $25$ litres au 100 pour une vitesse moyenne de $60$ km/h. Le salaire horaire du chauffeur est de $900$ F CFA et le litre de gasoil coûte $600$ F CFA.\nDétermination de $C$ : de $C'(v) = -\\frac{300}{v^2} + \\frac{1}{3}$, on obtient $C(v) = \\frac{300}{v} + \\frac{v}{3} + k$. Or $C(60) = 25$ : $\\frac{300}{60} + \\frac{60}{3} + k = 25 + k = 25$, donc $k = 0$. La consommation est $C(v) = \\frac{300}{v} + \\frac{v}{3}$.\nDétermination du coût total $P(v)$ : la durée du trajet est $t = \\frac{1500}{v}$ heures, donc le salaire du chauffeur est $900 \\times \\frac{1500}{v} = \\frac{1350000}{v}$. La consommation pour $1500$ km est $15C(v)$ litres, donc le coût du carburant est $600 \\times 15C(v) = 9000\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$. Au total : $P(v) = \\frac{4050000}{v} + 3000v$.\nMinimisation : $P'(v) = -\\frac{4050000}{v^2} + 3000$. $P'(v) = 0 \\iff v = \\sqrt{1350} \\approx 37$ (car $v \\geq 0$). $P$ est décroissante puis croissante : le minimum est $P(\\sqrt{1350}) \\approx 220500$.\nConclusion : pour minimiser le coût total du voyage, le chauffeur doit rouler à une vitesse moyenne de $37$ km/h ; le coût est alors d'environ $220500$ F CFA.",
      "keyRule": "Modéliser avec les primitives, puis minimiser en étudiant le signe de la dérivée du coût.",
      "formulas": [
        {
          "name": "Coût total du trajet",
          "formula": "P(v) = \\frac{4050000}{v} + 3000v",
          "note": "v en km/h, P(v) en francs CFA."
        }
      ],
      "workedExample": {
        "title": "La vitesse qui minimise le coût",
        "statement": "Le coût total du trajet de $1500$ km à la vitesse $v$ est $P(v) = \\frac{4050000}{v} + 3000v$. Détermine la vitesse qui minimise ce coût et le coût minimal.",
        "methodSteps": [
          "On calcule $P'(v) = -\\frac{4050000}{v^2} + 3000$.",
          "$P'(v) = 0 \\iff v^2 = 1350 \\iff v = \\sqrt{1350} \\approx 37$ (car $v \\geq 0$).",
          "$P'(v) < 0$ avant $\\sqrt{1350}$ et $P'(v) > 0$ après : $P$ atteint son minimum en $v = \\sqrt{1350}$.",
          "Ce minimum vaut $P(\\sqrt{1350}) \\approx 220500$."
        ],
        "conclusion": "Le chauffeur doit rouler à environ $37$ km/h ; le coût minimal est d'environ $220500$ F CFA."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Retrouver la consommation $C(v)$",
          "stepTheme": "Retrouver la consommation $C(v)$",
          "stepBadge": "Retrouver la consommation $C(v)$",
          "paragraphText": "• On connaît $C'(v) = -\\frac{300}{v^2} + \\frac{1}{3}$. Une primitive est $C(v) = \\frac{300}{v} + \\frac{v}{3} + k$.\nOn utilise l'information du chauffeur : $C(60) = 25$. Or $C(60) = \\frac{300}{60} + \\frac{60}{3} + k = 5 + 20 + k = 25 + k$.\nDonc $k = 0$ et $C(v) = \\frac{300}{v} + \\frac{v}{3}$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p06_q1",
            "type": "mcq",
            "prompt": "On a $C'(v) = -\\frac{300}{v^2} + \\frac{1}{3}$ et $C(60) = 25$. Que vaut $C(v)$ ?",
            "options": [
              "$C(v) = \\frac{300}{v} + \\frac{v}{3}$",
              "$C(v) = \\frac{300}{v} + \\frac{v}{3} + 25$",
              "$C(v) = -\\frac{300}{v} + \\frac{v}{3}$",
              "$C(v) = \\frac{300}{v} - \\frac{v}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une primitive de $C'$ est $\\frac{300}{v} + \\frac{v}{3} + k$ et $C(60) = 25 + k = 25$ donne $k = 0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le salaire du chauffeur",
          "stepTheme": "Le salaire du chauffeur",
          "stepBadge": "Le salaire du chauffeur",
          "paragraphText": "• La durée du trajet de $1500$ km à la vitesse $v$ est $t = \\frac{1500}{v}$ heures.\nLe salaire horaire du chauffeur est de $900$ F CFA : le salaire total est $900 \\times \\frac{1500}{v} = \\frac{1350000}{v}$ F CFA.\nPlus on roule vite, moins le trajet dure, moins le salaire coûte : c'est la partie décroissante du coût.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p06_q2",
            "type": "mcq",
            "prompt": "Le trajet est de $1500$ km et le salaire horaire du chauffeur est de $900$ F CFA. Quel est le salaire total en fonction de $v$ ?",
            "options": [
              "$\\frac{1350000}{v}$",
              "$\\frac{1500}{v}$",
              "$900v$",
              "$1350000v$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La durée est $t = \\frac{1500}{v}$ heures : le salaire est $900 \\times \\frac{1500}{v} = \\frac{1350000}{v}$ F CFA."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le coût du carburant",
          "stepTheme": "Le coût du carburant",
          "stepBadge": "Le coût du carburant",
          "paragraphText": "• La consommation pour $1500$ km (soit $15$ fois $100$ km) est de $15C(v) = 15\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$ litres.\nLe litre de gasoil coûte $600$ F CFA : le coût du carburant est $600 \\times 15\\left(\\frac{300}{v} + \\frac{v}{3}\\right) = 9000\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$ F CFA.\nPlus on roule vite, plus la consommation augmente : c'est la partie croissante du coût.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p06_q3",
            "type": "mcq",
            "prompt": "Quel est le coût du carburant pour le trajet de $1500$ km en fonction de $v$ ?",
            "options": [
              "$9000\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$",
              "$600\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$",
              "$15\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$",
              "$9000\\left(\\frac{300}{v} - \\frac{v}{3}\\right)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La consommation est $15C(v)$ litres et le litre coûte $600$ F CFA : $600 \\times 15C(v) = 9000\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le coût total $P(v)$",
          "stepTheme": "Le coût total $P(v)$",
          "stepBadge": "Le coût total $P(v)$",
          "paragraphText": "• Le coût total est la somme du salaire et du carburant : $P(v) = \\frac{1350000}{v} + 9000\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$.\nEn simplifiant : $P(v) = \\frac{1350000}{v} + \\frac{2700000}{v} + 3000v = \\frac{4050000}{v} + 3000v$.\nLe premier terme décroît avec $v$ (salaire) et le second croît avec $v$ (carburant) : il y a un compromis à trouver.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p06_q4",
            "type": "mcq",
            "prompt": "Que vaut le coût total $P(v)$ du trajet en fonction de la vitesse $v$ ?",
            "options": [
              "$P(v) = \\frac{4050000}{v} + 3000v$",
              "$P(v) = \\frac{1350000}{v} + 3000v$",
              "$P(v) = \\frac{4050000}{v} - 3000v$",
              "$P(v) = 4050000v + 3000$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$P(v) = \\frac{1350000}{v} + \\frac{2700000}{v} + 3000v = \\frac{4050000}{v} + 3000v$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La vitesse optimale",
          "stepTheme": "La vitesse optimale",
          "stepBadge": "La vitesse optimale",
          "paragraphText": "• Pour minimiser $P$, on étudie le signe de sa dérivée : $P'(v) = -\\frac{4050000}{v^2} + 3000$.\n$P'(v) = 0 \\iff v^2 = 1350 \\iff v = \\sqrt{1350} \\approx 37$ (car $v \\geq 0$).\n$P'(v) < 0$ avant $\\sqrt{1350}$ et $P'(v) > 0$ après : $P$ est décroissante puis croissante, donc le minimum est atteint en $v \\approx 37$ km/h.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p06_q5",
            "type": "mcq",
            "prompt": "À quelle vitesse moyenne le chauffeur doit-il rouler pour minimiser le coût total du voyage ?",
            "options": [
              "Environ $60$ km/h",
              "Environ $37$ km/h",
              "Environ $25$ km/h",
              "Le plus vite possible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P'(v) = 0$ donne $v = \\sqrt{1350} \\approx 37$ km/h : c'est là que $P$ atteint son minimum."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le coût minimal du voyage",
          "stepTheme": "Le coût minimal du voyage",
          "stepBadge": "Le coût minimal du voyage",
          "paragraphText": "• Le coût minimal est $P(\\sqrt{1350}) \\approx 220500$ F CFA.\nConclusion : pour minimiser le coût total du voyage, le chauffeur doit rouler à une vitesse moyenne de $37$ km/h ; l'organisation de la colonie coûterait alors environ $220500$ F CFA.\nC'est l'intérêt des primitives : retrouver la consommation à partir de sa dérivée, puis optimiser le coût.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l04_primitives_p06_q6",
            "type": "mcq",
            "prompt": "Quel est le coût total minimal du voyage, à la vitesse optimale d'environ $37$ km/h ?",
            "options": [
              "Environ $220500$ F CFA",
              "Environ $1350000$ F CFA",
              "Environ $4050000$ F CFA",
              "Environ $3000$ F CFA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le minimum de $P$ est $P(\\sqrt{1350}) \\approx 220500$ F CFA."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p06_q1",
          "type": "mcq",
          "prompt": "On a $C'(v) = -\\frac{300}{v^2} + \\frac{1}{3}$ et $C(60) = 25$. Que vaut $C(v)$ ?",
          "options": [
            "$C(v) = \\frac{300}{v} + \\frac{v}{3}$",
            "$C(v) = \\frac{300}{v} + \\frac{v}{3} + 25$",
            "$C(v) = -\\frac{300}{v} + \\frac{v}{3}$",
            "$C(v) = \\frac{300}{v} - \\frac{v}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une primitive de $C'$ est $\\frac{300}{v} + \\frac{v}{3} + k$ et $C(60) = 25 + k = 25$ donne $k = 0$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p06_q2",
          "type": "mcq",
          "prompt": "Le trajet est de $1500$ km et le salaire horaire du chauffeur est de $900$ F CFA. Quel est le salaire total en fonction de $v$ ?",
          "options": [
            "$\\frac{1350000}{v}$",
            "$\\frac{1500}{v}$",
            "$900v$",
            "$1350000v$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La durée est $t = \\frac{1500}{v}$ heures : le salaire est $900 \\times \\frac{1500}{v} = \\frac{1350000}{v}$ F CFA."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p06_q3",
          "type": "mcq",
          "prompt": "Quel est le coût du carburant pour le trajet de $1500$ km en fonction de $v$ ?",
          "options": [
            "$9000\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$",
            "$600\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$",
            "$15\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$",
            "$9000\\left(\\frac{300}{v} - \\frac{v}{3}\\right)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La consommation est $15C(v)$ litres et le litre coûte $600$ F CFA : $600 \\times 15C(v) = 9000\\left(\\frac{300}{v} + \\frac{v}{3}\\right)$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p06_q4",
          "type": "mcq",
          "prompt": "Que vaut le coût total $P(v)$ du trajet en fonction de la vitesse $v$ ?",
          "options": [
            "$P(v) = \\frac{4050000}{v} + 3000v$",
            "$P(v) = \\frac{1350000}{v} + 3000v$",
            "$P(v) = \\frac{4050000}{v} - 3000v$",
            "$P(v) = 4050000v + 3000$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$P(v) = \\frac{1350000}{v} + \\frac{2700000}{v} + 3000v = \\frac{4050000}{v} + 3000v$."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p06_q5",
          "type": "mcq",
          "prompt": "À quelle vitesse moyenne le chauffeur doit-il rouler pour minimiser le coût total du voyage ?",
          "options": [
            "Environ $60$ km/h",
            "Environ $37$ km/h",
            "Environ $25$ km/h",
            "Le plus vite possible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P'(v) = 0$ donne $v = \\sqrt{1350} \\approx 37$ km/h : c'est là que $P$ atteint son minimum."
        },
        {
          "id": "terminale_c_maths_numerique_l04_primitives_p06_q6",
          "type": "mcq",
          "prompt": "Quel est le coût total minimal du voyage, à la vitesse optimale d'environ $37$ km/h ?",
          "options": [
            "Environ $220500$ F CFA",
            "Environ $1350000$ F CFA",
            "Environ $4050000$ F CFA",
            "Environ $3000$ F CFA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le minimum de $P$ est $P(\\sqrt{1350}) \\approx 220500$ F CFA."
        }
      ]
    }
  ]
};
