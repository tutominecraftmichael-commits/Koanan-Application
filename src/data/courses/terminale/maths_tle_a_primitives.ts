import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « LEÇON 8 : PRIMTIVES ET CALCUL INTEGRAL » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1610
export const MATHS_TLE_A_L08_PRIMITIVES: CurriculumChapter = {
  "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [],
  "order": 8,
  "title": "Leçon 8 : Primitives et calcul intégral",
  "summary": "Rimon, élève de Terminale A1 et amateur de natation, veut calculer l'aire de la piscine en construction dans son lycée pour la comparer à une autre : on apprend les primitives et le calcul intégral, qui permettent de déterminer de telles aires.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1610",
  "points": [
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01",
      "order": 1,
      "title": "Notion de primitive d'une fonction",
      "summary": "Une primitive de $f$ sur un intervalle est une fonction $F$ dérivable dont la dérivée est $f$.",
      "conceptExplanation": "Soit $f$ une fonction définie sur un intervalle $I$. On appelle primitive de $f$ sur $I$ toute fonction $F$ dérivable sur $I$ telle que $f$ soit la dérivée de $F$ sur $I$ : pour tout $x \\in I$, $F'(x) = f(x)$.\nRemarque de la leçon : si $F$ est une primitive de $f$ sur $I$, alors toute primitive de $f$ sur $I$ est de la forme $x \\mapsto F(x) + c$, où $c$ est un élément de $\\mathbb{R}$.\nExemple de fixation : pour $f(x) = 2x + 5$ sur $\\mathbb{R}$, on donne $F(x) = x^2$, $G(x) = x^2 + 5x - 7$, $H(x) = x^2 + 5x$ et $P(x) = x^2 + 5x + x^3$. Leurs dérivées sont $F'(x) = 2x$, $G'(x) = 2x + 5$, $H'(x) = 2x + 5$ et $P'(x) = 2x + 5 + 3x^2$ : seules $G$ et $H$ ont pour dérivée $f$.",
      "keyRule": "Pour tester si $F$ est une primitive de $f$ : dériver $F$ et vérifier que l'on obtient exactement $f$.",
      "formulas": [
        {
          "name": "Définition d'une primitive",
          "formula": "F'(x) = f(x) \\text{ pour tout } x \\in I"
        },
        {
          "name": "Forme de toutes les primitives",
          "formula": "x \\mapsto F(x) + c \\text{ , avec } c \\in \\mathbb{R}"
        }
      ],
      "workedExample": {
        "title": "Reconnaître les primitives de $2x + 5$ (exercice de fixation)",
        "statement": "Soit $f$ définie sur $\\mathbb{R}$ par $f(x) = 2x + 5$. On donne $F(x) = x^2$, $G(x) = x^2 + 5x - 7$, $H(x) = x^2 + 5x$ et $P(x) = x^2 + 5x + x^3$. Parmi ces fonctions, cite celles qui sont des primitives de $f$.",
        "methodSteps": [
          "On dérive chacune : $F'(x) = 2x$, $G'(x) = 2x + 5$, $H'(x) = 2x + 5$ et $P'(x) = 2x + 5 + 3x^2$.",
          "On compare chaque dérivée à $f(x) = 2x + 5$ : l'égalité vaut pour $G$ et pour $H$ seulement."
        ],
        "conclusion": "$G$ et $H$ sont des primitives de $f$ sur $\\mathbb{R}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d'une primitive",
          "stepTheme": "La définition d'une primitive",
          "stepBadge": "La définition d'une primitive",
          "paragraphText": "• Soit $f$ une fonction définie sur un intervalle $I$. On appelle primitive de $f$ sur $I$ toute fonction $F$ dérivable sur $I$ telle que $f$ soit la dérivée de $F$.\nAutrement dit, pour tout $x \\in I$, $F'(x) = f(x)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q1",
            "type": "mcq",
            "prompt": "Que signifie « $F$ est une primitive de $f$ sur $I$ » ?",
            "options": [
              "$F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \\in I$",
              "$F$ est la dérivée de $f$ sur $I$",
              "$F(x) = f(x)$ pour tout $x \\in I$",
              "$F$ est continue sur $I$ et $F(0) = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par définition, primitiver c'est remonter la dérivation : la dérivée de $F$ doit redonner $f$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Dériver pour vérifier : le cas de $G$",
          "stepTheme": "Dériver pour vérifier : le cas de $G$",
          "stepBadge": "Dériver pour vérifier : le cas de $G$",
          "paragraphText": "Pour $f(x) = 2x + 5$, la fonction $G(x) = x^2 + 5x - 7$ a pour dérivée $G'(x) = 2x + 5$.\nOn obtient exactement $f(x)$ : $G$ est donc une primitive de $f$ sur $\\mathbb{R}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q2",
            "type": "mcq",
            "prompt": "La dérivée de $G(x) = x^2 + 5x - 7$ est :",
            "options": [
              "$2x$",
              "$2x + 5 - 7$",
              "$x + 5$",
              "$2x + 5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée de $x^2$ est $2x$, celle de $5x$ est $5$ et celle de la constante $-7$ est $0$ : $G'(x) = 2x + 5 = f(x)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Toutes les primitives diffèrent d'une constante",
          "stepTheme": "Toutes les primitives diffèrent d'une constante",
          "stepBadge": "Toutes les primitives diffèrent d'une constante",
          "paragraphText": "Si $F$ est une primitive de $f$ sur $I$, alors toute primitive de $f$ sur $I$ est de la forme $x \\mapsto F(x) + c$, où $c \\in \\mathbb{R}$.\nC'est pour cela que $G(x) = x^2 + 5x - 7$ et $H(x) = x^2 + 5x$ sont toutes les deux des primitives de la même fonction $f$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q3",
            "type": "mcq",
            "prompt": "Si $F$ est une primitive de $f$ sur $I$, les autres primitives de $f$ sont de la forme :",
            "options": [
              "$x \\mapsto F(x) \\times c$",
              "$x \\mapsto c \\times x + F(0)$",
              "$x \\mapsto F(x + c)$",
              "$x \\mapsto F(x) + c$, avec $c \\in \\mathbb{R}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Deux primitives d'une même fonction sur un intervalle diffèrent d'une constante réelle $c$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cas de $H$, sans constante ajoutée",
          "stepTheme": "Le cas de $H$, sans constante ajoutée",
          "stepBadge": "Le cas de $H$, sans constante ajoutée",
          "paragraphText": "La fonction $H(x) = x^2 + 5x$ a pour dérivée $H'(x) = 2x + 5$, c'est-à-dire $f(x)$.\nElle correspond au cas $c = 0$ dans la forme $F(x) + c$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q4",
            "type": "mcq",
            "prompt": "Parmi les fonctions de l'exercice de fixation, lesquelles sont des primitives de $f(x) = 2x + 5$ ?",
            "options": [
              "$F$ et $G$",
              "$F$ et $H$",
              "$P$ et $H$",
              "$G$ et $H$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$G'(x) = 2x + 5$ et $H'(x) = 2x + 5$ : seules $G$ et $H$ sont des primitives de $f$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La méthode de vérification",
          "stepTheme": "La méthode de vérification",
          "stepBadge": "La méthode de vérification",
          "paragraphText": "Méthode : pour décider si une fonction donnée est une primitive de $f$, on la dérive et on compare le résultat à $f$.\nOn n'a pas besoin de chercher la primitive : la dérivation suffit pour vérifier.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q5",
            "type": "mcq",
            "prompt": "Pour vérifier que $F$ est une primitive de $f$ sur $I$, on :",
            "options": [
              "Dérive la fonction de départ et compare le résultat à la candidate",
              "Vérifie que les deux fonctions ont le même signe",
              "Soustrait les deux fonctions en un seul point et vérifie que le résultat est nul",
              "Dérive la candidate et vérifie que le résultat est exactement la fonction de départ"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La définition impose $F'(x) = f(x)$ pour tout $x \\in I$ : on dérive la candidate et on compare."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le terme en plus qui casse tout",
          "stepTheme": "Le terme en plus qui casse tout",
          "stepBadge": "Le terme en plus qui casse tout",
          "paragraphText": "Piège : $P(x) = x^2 + 5x + x^3$ ressemble aux bonnes réponses, mais $P'(x) = 2x + 5 + 3x^2$.\nLe terme $3x^2$ en trop fait que $P'(x) \\neq f(x)$ : $P$ n'est pas une primitive de $f$. De même, $F(x) = x^2$ donne $F'(x) = 2x \\neq f(x)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q6",
            "type": "mcq",
            "prompt": "Pourquoi $P(x) = x^2 + 5x + x^3$ n'est-elle pas une primitive de $f(x) = 2x + 5$ ?",
            "options": [
              "Parce que $P$ n'est pas dérivable sur $\\mathbb{R}$",
              "Parce que $P(0) \\neq 0$",
              "Parce que $P'(x) = 2x + 5 + 3x^2 \\neq f(x)$",
              "Parce que $f$ n'a pas de primitive"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le terme $x^3$ produit $3x^2$ à la dérivation : la dérivée de $P$ dépasse $f$ et $P$ n'est pas une primitive."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q1",
          "type": "mcq",
          "prompt": "Que signifie « $F$ est une primitive de $f$ sur $I$ » ?",
          "options": [
            "$F$ est dérivable sur $I$ et $F'(x) = f(x)$ pour tout $x \\in I$",
            "$F$ est la dérivée de $f$ sur $I$",
            "$F(x) = f(x)$ pour tout $x \\in I$",
            "$F$ est continue sur $I$ et $F(0) = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par définition, primitiver c'est remonter la dérivation : la dérivée de $F$ doit redonner $f$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q2",
          "type": "mcq",
          "prompt": "La dérivée de $G(x) = x^2 + 5x - 7$ est :",
          "options": [
            "$2x$",
            "$2x + 5 - 7$",
            "$x + 5$",
            "$2x + 5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée de $x^2$ est $2x$, celle de $5x$ est $5$ et celle de la constante $-7$ est $0$ : $G'(x) = 2x + 5 = f(x)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q3",
          "type": "mcq",
          "prompt": "Si $F$ est une primitive de $f$ sur $I$, les autres primitives de $f$ sont de la forme :",
          "options": [
            "$x \\mapsto F(x) \\times c$",
            "$x \\mapsto c \\times x + F(0)$",
            "$x \\mapsto F(x + c)$",
            "$x \\mapsto F(x) + c$, avec $c \\in \\mathbb{R}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Deux primitives d'une même fonction sur un intervalle diffèrent d'une constante réelle $c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q4",
          "type": "mcq",
          "prompt": "Parmi les fonctions de l'exercice de fixation, lesquelles sont des primitives de $f(x) = 2x + 5$ ?",
          "options": [
            "$F$ et $G$",
            "$F$ et $H$",
            "$P$ et $H$",
            "$G$ et $H$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$G'(x) = 2x + 5$ et $H'(x) = 2x + 5$ : seules $G$ et $H$ sont des primitives de $f$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q5",
          "type": "mcq",
          "prompt": "Pour vérifier que $F$ est une primitive de $f$ sur $I$, on :",
          "options": [
            "Dérive la fonction de départ et compare le résultat à la candidate",
            "Vérifie que les deux fonctions ont le même signe",
            "Soustrait les deux fonctions en un seul point et vérifie que le résultat est nul",
            "Dérive la candidate et vérifie que le résultat est exactement la fonction de départ"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La définition impose $F'(x) = f(x)$ pour tout $x \\in I$ : on dérive la candidate et on compare."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p01_q6",
          "type": "mcq",
          "prompt": "Pourquoi $P(x) = x^2 + 5x + x^3$ n'est-elle pas une primitive de $f(x) = 2x + 5$ ?",
          "options": [
            "Parce que $P$ n'est pas dérivable sur $\\mathbb{R}$",
            "Parce que $P(0) \\neq 0$",
            "Parce que $P'(x) = 2x + 5 + 3x^2 \\neq f(x)$",
            "Parce que $f$ n'a pas de primitive"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le terme $x^3$ produit $3x^2$ à la dérivation : la dérivée de $P$ dépasse $f$ et $P$ n'est pas une primitive."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02",
      "order": 2,
      "title": "La primitive qui prend une valeur donnée",
      "summary": "Parmi toutes les primitives $F + c$, une condition $H(x_0) = y_0$ sélectionne une valeur de $c$, et une seule.",
      "conceptExplanation": "Propriété de la leçon : soit $f$ une fonction admettant une primitive $F$ sur un intervalle $I$, $x_0$ un élément de $I$ et $y_0$ un nombre réel. Il existe une primitive de $f$ et une seule qui prend la valeur $y_0$ en $x_0$.\nMéthode : on écrit la forme générale des primitives, $H(x) = F(x) + c$, puis on détermine la constante $c$ grâce à la condition $H(x_0) = y_0$.\nExemple de fixation : $g$ a pour primitive $G(x) = x^2 - x$ sur $\\mathbb{R}$. Ses primitives sont $H(x) = x^2 - x + c$. La condition $H(-1) = 5$ donne $2 + c = 5$, donc $c = 3$ et $H(x) = x^2 - x + 3$.",
      "keyRule": "Condition $H(x_0) = y_0$ : écrire $H = F + c$, remplacer $x$ par $x_0$, résoudre pour trouver $c$.",
      "formulas": [
        {
          "name": "Unicité sous condition",
          "formula": "H(x_0) = y_0 \\text{ détermine un unique } c \\in \\mathbb{R}"
        }
      ],
      "workedExample": {
        "title": "La primitive de $g$ qui vaut $5$ en $-1$ (exercice de fixation)",
        "statement": "Soit $g$ une fonction définie sur $\\mathbb{R}$ dont une primitive est $G(x) = x^2 - x$. Détermine la primitive $H$ de $g$ qui prend la valeur $5$ en $-1$.",
        "methodSteps": [
          "Les primitives de $g$ sur $\\mathbb{R}$ sont de la forme $H(x) = G(x) + c = x^2 - x + c$.",
          "On impose $H(-1) = 5$ : $(-1)^2 - (-1) + c = 5$, soit $2 + c = 5$.",
          "Donc $c = 3$."
        ],
        "conclusion": "La primitive cherchée est $H(x) = x^2 - x + 3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Existence et unicité sous condition",
          "stepTheme": "Existence et unicité sous condition",
          "stepBadge": "Existence et unicité sous condition",
          "paragraphText": "• Propriété : pour $x_0 \\in I$ et $y_0 \\in \\mathbb{R}$ donnés, il existe une primitive de $f$ et une seule qui prend la valeur $y_0$ en $x_0$.\nLa condition initiale lève l'indétermination de la constante.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q1",
            "type": "mcq",
            "prompt": "Selon la propriété de la leçon, combien existe-t-il de primitives de $f$ prenant la valeur $y_0$ en $x_0$ ?",
            "options": [
              "Une seule",
              "Aucune",
              "Deux",
              "Une infinité"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il en existe une et une seule : la condition fixe entièrement la constante $c$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Écrire la forme générale",
          "stepTheme": "Écrire la forme générale",
          "stepBadge": "Écrire la forme générale",
          "paragraphText": "Méthode, première étape : écrire toutes les primitives sous la forme $H(x) = G(x) + c$, où $G$ est une primitive connue.\nIci, $G(x) = x^2 - x$, donc $H(x) = x^2 - x + c$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q2",
            "type": "mcq",
            "prompt": "Si $G(x) = x^2 - x$ est une primitive de $g$, la forme générale des primitives de $g$ est :",
            "options": [
              "$H(x) = x^2 - x + c$, avec $c \\in \\mathbb{R}$",
              "$H(x) = c \\times (x^2 - x)$",
              "$H(x) = x^2 - x + cx$",
              "$H(x) = (x + c)^2 - (x + c)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Toutes les primitives s'obtiennent en ajoutant une constante réelle à une primitive connue."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Déterminer la constante $c$",
          "stepTheme": "Déterminer la constante $c$",
          "stepBadge": "Déterminer la constante $c$",
          "paragraphText": "On impose la condition $H(-1) = 5$ dans $H(x) = x^2 - x + c$.\nOn obtient $(-1)^2 - (-1) + c = 5$, c'est-à-dire $2 + c = 5$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q3",
            "type": "mcq",
            "prompt": "La condition $H(-1) = 5$ donne pour $c$ :",
            "options": [
              "$c = 5$",
              "$c = 2$",
              "$c = 3$",
              "$c = -3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $H(-1) = 1 + 1 + c = 2 + c$ ; l'égalité $2 + c = 5$ donne $c = 3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La primitive cherchée",
          "stepTheme": "La primitive cherchée",
          "stepBadge": "La primitive cherchée",
          "paragraphText": "Avec $c = 3$, la primitive de $g$ qui prend la valeur $5$ en $-1$ est entièrement déterminée.\nOn peut vérifier : pour cette fonction, la valeur en $-1$ vaut bien $1 + 1 + 3$, c'est-à-dire $5$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q4",
            "type": "mcq",
            "prompt": "La primitive de $g$ qui prend la valeur $5$ en $-1$ est :",
            "options": [
              "$H(x) = x^2 - x + 5$",
              "$H(x) = x^2 - x - 3$",
              "$H(x) = x^2 + x + 3$",
              "$H(x) = x^2 - x + 3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec $c = 3$ : $H(x) = x^2 - x + 3$, et $H(-1) = 5$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Sans condition, une infinité de primitives",
          "stepTheme": "Sans condition, une infinité de primitives",
          "stepBadge": "Sans condition, une infinité de primitives",
          "paragraphText": "Sans condition initiale, chaque valeur réelle de $c$ donne une primitive différente de la même fonction.\nUne fonction qui admet une primitive en admet donc une infinité.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q5",
            "type": "mcq",
            "prompt": "Sans condition initiale, une fonction admet :",
            "options": [
              "Une seule primitive",
              "Exactement deux primitives",
              "Une infinité de primitives",
              "Aucune primitive en général"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La forme $F(x) + c$, avec $c$ réel quelconque, donne une infinité de primitives."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre $c$ et la valeur imposée",
          "stepTheme": "Confondre $c$ et la valeur imposée",
          "stepBadge": "Confondre $c$ et la valeur imposée",
          "paragraphText": "Piège : la valeur imposée est $y_0 = 5$, mais la constante n'est pas $5$.\nAvec $c = 5$, on aurait $H(-1) = 2 + 5 = 7 \\neq 5$ : il faut résoudre l'équation en $c$, pas recopier $y_0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q6",
            "type": "mcq",
            "prompt": "Un élève répond $H(x) = x^2 - x + 5$ pour la primitive valant $5$ en $-1$. Son erreur est :",
            "options": [
              "Il a pris $c = y_0$ au lieu de résoudre $2 + c = 5$, qui donne $c = 3$",
              "$G$ n'est pas une primitive de $g$",
              "Il fallait multiplier par $c$",
              "La condition devait porter sur $x = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La constante se calcule : $H(-1) = 2 + c = 5$ donne $c = 3$, et non $c = 5$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q1",
          "type": "mcq",
          "prompt": "Selon la propriété de la leçon, combien existe-t-il de primitives de $f$ prenant la valeur $y_0$ en $x_0$ ?",
          "options": [
            "Une seule",
            "Aucune",
            "Deux",
            "Une infinité"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il en existe une et une seule : la condition fixe entièrement la constante $c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q2",
          "type": "mcq",
          "prompt": "Si $G(x) = x^2 - x$ est une primitive de $g$, la forme générale des primitives de $g$ est :",
          "options": [
            "$H(x) = x^2 - x + c$, avec $c \\in \\mathbb{R}$",
            "$H(x) = c \\times (x^2 - x)$",
            "$H(x) = x^2 - x + cx$",
            "$H(x) = (x + c)^2 - (x + c)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Toutes les primitives s'obtiennent en ajoutant une constante réelle à une primitive connue."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q3",
          "type": "mcq",
          "prompt": "La condition $H(-1) = 5$ donne pour $c$ :",
          "options": [
            "$c = 5$",
            "$c = 2$",
            "$c = 3$",
            "$c = -3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $H(-1) = 1 + 1 + c = 2 + c$ ; l'égalité $2 + c = 5$ donne $c = 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q4",
          "type": "mcq",
          "prompt": "La primitive de $g$ qui prend la valeur $5$ en $-1$ est :",
          "options": [
            "$H(x) = x^2 - x + 5$",
            "$H(x) = x^2 - x - 3$",
            "$H(x) = x^2 + x + 3$",
            "$H(x) = x^2 - x + 3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec $c = 3$ : $H(x) = x^2 - x + 3$, et $H(-1) = 5$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q5",
          "type": "mcq",
          "prompt": "Sans condition initiale, une fonction admet :",
          "options": [
            "Une seule primitive",
            "Exactement deux primitives",
            "Une infinité de primitives",
            "Aucune primitive en général"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La forme $F(x) + c$, avec $c$ réel quelconque, donne une infinité de primitives."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p02_q6",
          "type": "mcq",
          "prompt": "Un élève répond $H(x) = x^2 - x + 5$ pour la primitive valant $5$ en $-1$. Son erreur est :",
          "options": [
            "Il a pris $c = y_0$ au lieu de résoudre $2 + c = 5$, qui donne $c = 3$",
            "$G$ n'est pas une primitive de $g$",
            "Il fallait multiplier par $c$",
            "La condition devait porter sur $x = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La constante se calcule : $H(-1) = 2 + c = 5$ donne $c = 3$, et non $c = 5$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03",
      "order": 3,
      "title": "Les primitives des fonctions usuelles",
      "summary": "Le tableau des primitives usuelles : constante, puissances $x^n$, $\\frac{1}{x^n}$ et $x^r$.",
      "conceptExplanation": "Tableau de la leçon (avec $c \\in \\mathbb{R}$) :\n• $x \\mapsto a$ (avec $a \\in \\mathbb{R}$) a pour primitives $x \\mapsto ax + c$, sur $\\mathbb{R}$.\n• $x \\mapsto x^n$ (avec $n \\in \\mathbb{N}$) a pour primitives $x \\mapsto \\frac{x^{n+1}}{n+1} + c$, sur $\\mathbb{R}$.\n• $x \\mapsto \\frac{1}{x^n}$ (avec $n \\in \\mathbb{N}^* \\setminus \\{1\\}$) a pour primitives $x \\mapsto -\\frac{1}{(n-1) x^{n-1}} + c$, sur $]-\\infty ; 0[$ ou $]0 ; +\\infty[$.\n• $x \\mapsto x^r$ (avec $r \\in \\mathbb{Q}^* \\setminus \\{-1\\}$) a pour primitives $x \\mapsto \\frac{x^{r+1}}{r+1} + c$, sur $[0 ; +\\infty[$ si $r > 0$ et sur $]0 ; +\\infty[$ si $r < 0$.\nExercice de fixation, sur $]0 ; +\\infty[$ : pour $f(x) = x^2$, $F(x) = \\frac{1}{3} x^3 + c$ ; pour $f(x) = \\frac{1}{x^5}$, $F(x) = -\\frac{1}{4 x^4} + c$ ; pour $f(x) = -3$, $F(x) = -3x + c$.",
      "keyRule": "Puissance : augmenter l'exposant de $1$ et diviser par le nouvel exposant, sans oublier la constante $c$ ni l'intervalle.",
      "formulas": [
        {
          "name": "Primitive d'une constante",
          "formula": "x \\mapsto a \\text{ a pour primitives } x \\mapsto ax + c"
        },
        {
          "name": "Primitive de $x^n$",
          "formula": "x \\mapsto \\frac{x^{n+1}}{n+1} + c"
        },
        {
          "name": "Primitive de $\\frac{1}{x^n}$",
          "formula": "x \\mapsto -\\frac{1}{(n-1) x^{n-1}} + c \\text{ , pour } n \\neq 1"
        },
        {
          "name": "Primitive de $x^r$",
          "formula": "x \\mapsto \\frac{x^{r+1}}{r+1} + c \\text{ , pour } r \\neq -1"
        }
      ],
      "workedExample": {
        "title": "Trois primitives usuelles sur $]0 ; +\\infty[$ (exercice de fixation)",
        "statement": "Détermine toutes les primitives sur $]0 ; +\\infty[$ de chacune des fonctions : $f(x) = x^2$, $f(x) = \\frac{1}{x^5}$ et $f(x) = -3$.",
        "methodSteps": [
          "Pour $x^2$, on applique $x^n \\mapsto \\frac{x^{n+1}}{n+1}$ avec $n = 2$ : $F(x) = \\frac{1}{3} x^3 + c$.",
          "Pour $\\frac{1}{x^5}$, on applique la formule en $\\frac{1}{x^n}$ avec $n = 5$ : $F(x) = -\\frac{1}{4 x^4} + c$.",
          "Pour la constante $-3$, on applique $a \\mapsto ax$ : $F(x) = -3x + c$."
        ],
        "conclusion": "Les trois familles de primitives sont $\\frac{1}{3} x^3 + c$, $-\\frac{1}{4 x^4} + c$ et $-3x + c$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La primitive d'une fonction constante",
          "stepTheme": "La primitive d'une fonction constante",
          "stepBadge": "La primitive d'une fonction constante",
          "paragraphText": "• D'après le tableau de la leçon, la fonction constante $x \\mapsto a$ (avec $a \\in \\mathbb{R}$) a pour primitives $x \\mapsto ax + c$ sur $\\mathbb{R}$.\nEn dérivant $ax + c$, on retrouve bien la constante $a$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q1",
            "type": "mcq",
            "prompt": "Les primitives sur $\\mathbb{R}$ de la fonction constante $x \\mapsto a$ sont :",
            "options": [
              "$x \\mapsto ax + c$",
              "$x \\mapsto a + c$",
              "$x \\mapsto \\frac{a}{x} + c$",
              "$x \\mapsto a^x + c$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La dérivée de $ax + c$ est $a$ : les primitives de la constante $a$ sont $x \\mapsto ax + c$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La primitive de $x^n$",
          "stepTheme": "La primitive de $x^n$",
          "stepBadge": "La primitive de $x^n$",
          "paragraphText": "Pour $n \\in \\mathbb{N}$, la fonction $x \\mapsto x^n$ a pour primitives $x \\mapsto \\frac{x^{n+1}}{n+1} + c$ sur $\\mathbb{R}$.\nOn augmente l'exposant de $1$ et on divise par ce nouvel exposant.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q2",
            "type": "mcq",
            "prompt": "Les primitives sur $\\mathbb{R}$ de $x \\mapsto x^n$ sont :",
            "options": [
              "$x \\mapsto n x^{n-1} + c$",
              "$x \\mapsto \\frac{x^n}{n} + c$",
              "$x \\mapsto x^{n+1} + c$",
              "$x \\mapsto \\frac{x^{n+1}}{n+1} + c$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la ligne du tableau pour $x^n$ : exposant augmenté de $1$, division par le nouvel exposant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les primitives de $\\frac{1}{x^5}$",
          "stepTheme": "Les primitives de $\\frac{1}{x^5}$",
          "stepBadge": "Les primitives de $\\frac{1}{x^5}$",
          "paragraphText": "Sur $]0 ; +\\infty[$, on applique la formule de $\\frac{1}{x^n}$ avec $n = 5$.\nOn obtient le dénominateur $(n-1) x^{n-1}$, c'est-à-dire $4 x^4$, avec un signe moins devant la fraction.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q3",
            "type": "mcq",
            "prompt": "Les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{x^5}$ sont :",
            "options": [
              "$x \\mapsto \\frac{1}{4 x^4} + c$",
              "$x \\mapsto -\\frac{1}{5 x^4} + c$",
              "$x \\mapsto -\\frac{1}{4 x^4} + c$",
              "$x \\mapsto -5 x^{-6} + c$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La formule donne $-\\frac{1}{(5-1) x^{5-1}} + c$, c'est-à-dire $-\\frac{1}{4 x^4} + c$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La primitive de $x^r$ pour $r$ rationnel",
          "stepTheme": "La primitive de $x^r$ pour $r$ rationnel",
          "stepBadge": "La primitive de $x^r$ pour $r$ rationnel",
          "paragraphText": "Pour $r \\in \\mathbb{Q}^* \\setminus \\{-1\\}$, la fonction $x \\mapsto x^r$ a pour primitives $x \\mapsto \\frac{x^{r+1}}{r+1} + c$.\nL'intervalle dépend du signe de $r$ : $[0 ; +\\infty[$ si $r > 0$, $]0 ; +\\infty[$ si $r < 0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q4",
            "type": "mcq",
            "prompt": "Les primitives de $x \\mapsto x^r$ (avec $r \\neq -1$) sont :",
            "options": [
              "$x \\mapsto r x^{r-1} + c$",
              "$x \\mapsto \\frac{x^{r-1}}{r-1} + c$",
              "$x \\mapsto x^{r+1} + c$",
              "$x \\mapsto \\frac{x^{r+1}}{r+1} + c$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Même règle que pour $x^n$ : $\\frac{x^{r+1}}{r+1} + c$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le cas exclu $r = -1$",
          "stepTheme": "Le cas exclu $r = -1$",
          "stepBadge": "Le cas exclu $r = -1$",
          "paragraphText": "Piège : la formule $\\frac{x^{r+1}}{r+1}$ exige $r \\neq -1$, car pour $r = -1$ le dénominateur $r + 1$ vaudrait $0$.\nLe tableau de la leçon exclut donc $r = -1$, de même qu'il exclut $n = 1$ pour la formule en $\\frac{1}{x^n}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q5",
            "type": "mcq",
            "prompt": "Pourquoi la formule des primitives de $x^r$ exclut-elle $r = -1$ ?",
            "options": [
              "Parce que $r + 1$ vaudrait $0$, ce qui rend la fraction impossible",
              "Parce que $x^{-1}$ n'est pas définie en $1$",
              "Parce que $r$ doit être entier",
              "Parce que la constante $c$ serait nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour $r = -1$, on diviserait par $r + 1 = 0$ : la formule ne s'applique pas."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les primitives de $x^2$ et de $-3$",
          "stepTheme": "Les primitives de $x^2$ et de $-3$",
          "stepBadge": "Les primitives de $x^2$ et de $-3$",
          "paragraphText": "Exercice de fixation : sur $]0 ; +\\infty[$, la fonction $x \\mapsto x^2$ a pour primitives $x \\mapsto \\frac{1}{3} x^3 + c$.\nLa fonction constante $x \\mapsto -3$ a, elle, pour primitives $x \\mapsto -3x + c$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q6",
            "type": "mcq",
            "prompt": "Les primitives sur $]0 ; +\\infty[$ de $f(x) = x^2$ sont :",
            "options": [
              "$x \\mapsto 2x + c$",
              "$x \\mapsto \\frac{1}{2} x^2 + c$",
              "$x \\mapsto x^3 + c$",
              "$x \\mapsto \\frac{1}{3} x^3 + c$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec $n = 2$ : $\\frac{x^{2+1}}{2+1} + c = \\frac{1}{3} x^3 + c$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q1",
          "type": "mcq",
          "prompt": "Les primitives sur $\\mathbb{R}$ de la fonction constante $x \\mapsto a$ sont :",
          "options": [
            "$x \\mapsto ax + c$",
            "$x \\mapsto a + c$",
            "$x \\mapsto \\frac{a}{x} + c$",
            "$x \\mapsto a^x + c$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La dérivée de $ax + c$ est $a$ : les primitives de la constante $a$ sont $x \\mapsto ax + c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q2",
          "type": "mcq",
          "prompt": "Les primitives sur $\\mathbb{R}$ de $x \\mapsto x^n$ sont :",
          "options": [
            "$x \\mapsto n x^{n-1} + c$",
            "$x \\mapsto \\frac{x^n}{n} + c$",
            "$x \\mapsto x^{n+1} + c$",
            "$x \\mapsto \\frac{x^{n+1}}{n+1} + c$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la ligne du tableau pour $x^n$ : exposant augmenté de $1$, division par le nouvel exposant."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q3",
          "type": "mcq",
          "prompt": "Les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{x^5}$ sont :",
          "options": [
            "$x \\mapsto \\frac{1}{4 x^4} + c$",
            "$x \\mapsto -\\frac{1}{5 x^4} + c$",
            "$x \\mapsto -\\frac{1}{4 x^4} + c$",
            "$x \\mapsto -5 x^{-6} + c$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La formule donne $-\\frac{1}{(5-1) x^{5-1}} + c$, c'est-à-dire $-\\frac{1}{4 x^4} + c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q4",
          "type": "mcq",
          "prompt": "Les primitives de $x \\mapsto x^r$ (avec $r \\neq -1$) sont :",
          "options": [
            "$x \\mapsto r x^{r-1} + c$",
            "$x \\mapsto \\frac{x^{r-1}}{r-1} + c$",
            "$x \\mapsto x^{r+1} + c$",
            "$x \\mapsto \\frac{x^{r+1}}{r+1} + c$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Même règle que pour $x^n$ : $\\frac{x^{r+1}}{r+1} + c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q5",
          "type": "mcq",
          "prompt": "Pourquoi la formule des primitives de $x^r$ exclut-elle $r = -1$ ?",
          "options": [
            "Parce que $r + 1$ vaudrait $0$, ce qui rend la fraction impossible",
            "Parce que $x^{-1}$ n'est pas définie en $1$",
            "Parce que $r$ doit être entier",
            "Parce que la constante $c$ serait nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour $r = -1$, on diviserait par $r + 1 = 0$ : la formule ne s'applique pas."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p03_q6",
          "type": "mcq",
          "prompt": "Les primitives sur $]0 ; +\\infty[$ de $f(x) = x^2$ sont :",
          "options": [
            "$x \\mapsto 2x + c$",
            "$x \\mapsto \\frac{1}{2} x^2 + c$",
            "$x \\mapsto x^3 + c$",
            "$x \\mapsto \\frac{1}{3} x^3 + c$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec $n = 2$ : $\\frac{x^{2+1}}{2+1} + c = \\frac{1}{3} x^3 + c$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04",
      "order": 4,
      "title": "Primitives et opérations : somme et produit par un réel",
      "summary": "La primitive d'une somme est la somme des primitives, et celle de $a u$ est $a$ fois une primitive de $u$.",
      "conceptExplanation": "Propriété (somme) : si $U$ et $V$ sont des primitives respectives des fonctions $u$ et $v$ sur un intervalle $K$, alors la fonction $U + V$ est une primitive sur $K$ de la fonction $u + v$.\nExemple : $f(x) = x^4 + x^3$ est la somme de $x \\mapsto x^4$, de primitive $x \\mapsto \\frac{x^5}{5}$, et de $x \\mapsto x^3$, de primitive $x \\mapsto \\frac{x^4}{4}$ ; une primitive de $f$ sur $\\mathbb{R}$ est donc $x \\mapsto \\frac{x^5}{5} + \\frac{x^4}{4}$.\nPropriété (produit par un réel) : si $U$ est une primitive de la fonction $u$ sur un intervalle $K$, alors pour tout nombre réel $a$, la fonction $aU$ est une primitive sur $K$ de la fonction $a u$.\nExemple : $f(x) = -\\frac{5}{2 x^2}$ est le produit de $-\\frac{5}{2}$ par $x \\mapsto \\frac{1}{x^2}$, dont une primitive est $x \\mapsto -\\frac{1}{x}$ ; une primitive de $f$ est donc $x \\mapsto \\frac{5}{2x}$.",
      "keyRule": "Primitiver terme à terme pour une somme ; sortir la constante multiplicative et la reporter sur la primitive pour $a u$.",
      "formulas": [
        {
          "name": "Primitive d'une somme",
          "formula": "U + V \\text{ est une primitive de } u + v"
        },
        {
          "name": "Primitive de $a u$",
          "formula": "aU \\text{ est une primitive de } a u \\text{ , pour } a \\in \\mathbb{R}"
        }
      ],
      "workedExample": {
        "title": "Une primitive de $x^4 + x^3$ (exercice de fixation)",
        "statement": "Détermine une primitive sur $\\mathbb{R}$ de la fonction $f : x \\mapsto x^4 + x^3$.",
        "methodSteps": [
          "La fonction $f$ est la somme de $x \\mapsto x^4$ et de $x \\mapsto x^3$.",
          "Une primitive de $x \\mapsto x^4$ est $x \\mapsto \\frac{x^5}{5}$ et une primitive de $x \\mapsto x^3$ est $x \\mapsto \\frac{x^4}{4}$.",
          "Par la propriété de la somme, une primitive de $f$ est la somme de ces deux primitives."
        ],
        "conclusion": "Une primitive de $f$ sur $\\mathbb{R}$ est $x \\mapsto \\frac{x^5}{5} + \\frac{x^4}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La primitive d'une somme",
          "stepTheme": "La primitive d'une somme",
          "stepBadge": "La primitive d'une somme",
          "paragraphText": "• Propriété : si $U$ et $V$ sont des primitives respectives de $u$ et de $v$ sur un intervalle $K$, alors $U + V$ est une primitive sur $K$ de $u + v$.\nOn primitive donc une somme terme à terme.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q1",
            "type": "mcq",
            "prompt": "Si $U$ est une primitive de $u$ et $V$ une primitive de $v$ sur $K$, une primitive de $u + v$ est :",
            "options": [
              "$U + V$",
              "$U \\times V$",
              "$U - V$",
              "$V - U$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La propriété de la leçon : la primitive d'une somme est la somme des primitives, $U + V$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $x^4 + x^3$",
          "stepTheme": "Une primitive de $x^4 + x^3$",
          "stepBadge": "Une primitive de $x^4 + x^3$",
          "paragraphText": "On primitive chaque terme : $x^4$ donne $\\frac{x^5}{5}$ et $x^3$ donne $\\frac{x^4}{4}$.\nLa somme de ces deux primitives est une primitive de la somme.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q2",
            "type": "mcq",
            "prompt": "Une primitive sur $\\mathbb{R}$ de $f(x) = x^4 + x^3$ est :",
            "options": [
              "$x \\mapsto 4 x^3 + 3 x^2$",
              "$x \\mapsto \\frac{x^5}{5} \\times \\frac{x^4}{4}$",
              "$x \\mapsto \\frac{x^4}{4} + \\frac{x^3}{3}$",
              "$x \\mapsto \\frac{x^5}{5} + \\frac{x^4}{4}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Terme à terme : $\\frac{x^5}{5}$ pour $x^4$ et $\\frac{x^4}{4}$ pour $x^3$, puis on additionne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La primitive de $a u$",
          "stepTheme": "La primitive de $a u$",
          "stepBadge": "La primitive de $a u$",
          "paragraphText": "Propriété : si $U$ est une primitive de $u$ sur $K$, alors pour tout réel $a$, la fonction $aU$ est une primitive sur $K$ de la fonction $a u$.\nLa constante multiplicative se reporte telle quelle sur la primitive.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q3",
            "type": "mcq",
            "prompt": "Si $U$ est une primitive de $u$ sur $K$ et $a \\in \\mathbb{R}$, une primitive de $a u$ est :",
            "options": [
              "$U + a$",
              "$\\frac{U}{a}$",
              "$aU$",
              "$U(a x)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La propriété de la leçon : $aU$ est une primitive de $a u$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $-\\frac{5}{2 x^2}$",
          "stepTheme": "Une primitive de $-\\frac{5}{2 x^2}$",
          "stepBadge": "Une primitive de $-\\frac{5}{2 x^2}$",
          "paragraphText": "La fonction $f(x) = -\\frac{5}{2 x^2}$ est le produit de $-\\frac{5}{2}$ par $x \\mapsto \\frac{1}{x^2}$.\nUne primitive de $x \\mapsto \\frac{1}{x^2}$ est $x \\mapsto -\\frac{1}{x}$ : on multiplie donc cette primitive par $-\\frac{5}{2}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q4",
            "type": "mcq",
            "prompt": "Une primitive de $f(x) = -\\frac{5}{2 x^2}$ est :",
            "options": [
              "$x \\mapsto \\frac{5}{2x}$",
              "$x \\mapsto -\\frac{5}{2x}$",
              "$x \\mapsto \\frac{2}{5x}$",
              "$x \\mapsto -\\frac{1}{x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit de $-\\frac{5}{2}$ par $-\\frac{1}{x}$ donne $\\frac{5}{2x}$ : c'est la solution de l'exercice de fixation."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Reconnaître la structure avant de primitiver",
          "stepTheme": "Reconnaître la structure avant de primitiver",
          "stepBadge": "Reconnaître la structure avant de primitiver",
          "paragraphText": "Méthode : avant tout calcul, décider si la fonction est une somme de fonctions connues ou le produit d'un réel par une fonction connue.\nChaque structure a sa propriété : $U + V$ pour une somme, $aU$ pour un produit par un réel.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q5",
            "type": "mcq",
            "prompt": "La fonction $f(x) = x^4 + x^3$ doit être traitée comme :",
            "options": [
              "Un produit de deux fonctions",
              "Une fonction composée",
              "Un quotient de deux fonctions",
              "Une somme de deux fonctions usuelles"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est une somme : on applique la propriété des primitives de $u + v$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le signe du produit de deux nombres négatifs",
          "stepTheme": "Le signe du produit de deux nombres négatifs",
          "stepBadge": "Le signe du produit de deux nombres négatifs",
          "paragraphText": "Piège dans l'exemple en $-\\frac{5}{2 x^2}$ : la primitive de $\\frac{1}{x^2}$ est $-\\frac{1}{x}$, avec un signe moins.\nMultipliée par le facteur $-\\frac{5}{2}$, elle devient positive : le résultat est $\\frac{5}{2x}$, et non $-\\frac{5}{2x}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q6",
            "type": "mcq",
            "prompt": "Dans cet exemple, le résultat final est positif parce que :",
            "options": [
              "La constante $c$ est positive",
              "$x$ est toujours positif",
              "Le produit de $-\\frac{5}{2}$ par $-\\frac{1}{x}$ est positif",
              "On oublie le signe moins de la primitive de $\\frac{1}{x^2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Moins par moins donne plus : $\\left(-\\frac{5}{2}\\right) \\times \\left(-\\frac{1}{x}\\right) = \\frac{5}{2x}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q1",
          "type": "mcq",
          "prompt": "Si $U$ est une primitive de $u$ et $V$ une primitive de $v$ sur $K$, une primitive de $u + v$ est :",
          "options": [
            "$U + V$",
            "$U \\times V$",
            "$U - V$",
            "$V - U$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La propriété de la leçon : la primitive d'une somme est la somme des primitives, $U + V$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q2",
          "type": "mcq",
          "prompt": "Une primitive sur $\\mathbb{R}$ de $f(x) = x^4 + x^3$ est :",
          "options": [
            "$x \\mapsto 4 x^3 + 3 x^2$",
            "$x \\mapsto \\frac{x^5}{5} \\times \\frac{x^4}{4}$",
            "$x \\mapsto \\frac{x^4}{4} + \\frac{x^3}{3}$",
            "$x \\mapsto \\frac{x^5}{5} + \\frac{x^4}{4}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Terme à terme : $\\frac{x^5}{5}$ pour $x^4$ et $\\frac{x^4}{4}$ pour $x^3$, puis on additionne."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q3",
          "type": "mcq",
          "prompt": "Si $U$ est une primitive de $u$ sur $K$ et $a \\in \\mathbb{R}$, une primitive de $a u$ est :",
          "options": [
            "$U + a$",
            "$\\frac{U}{a}$",
            "$aU$",
            "$U(a x)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La propriété de la leçon : $aU$ est une primitive de $a u$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q4",
          "type": "mcq",
          "prompt": "Une primitive de $f(x) = -\\frac{5}{2 x^2}$ est :",
          "options": [
            "$x \\mapsto \\frac{5}{2x}$",
            "$x \\mapsto -\\frac{5}{2x}$",
            "$x \\mapsto \\frac{2}{5x}$",
            "$x \\mapsto -\\frac{1}{x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit de $-\\frac{5}{2}$ par $-\\frac{1}{x}$ donne $\\frac{5}{2x}$ : c'est la solution de l'exercice de fixation."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q5",
          "type": "mcq",
          "prompt": "La fonction $f(x) = x^4 + x^3$ doit être traitée comme :",
          "options": [
            "Un produit de deux fonctions",
            "Une fonction composée",
            "Un quotient de deux fonctions",
            "Une somme de deux fonctions usuelles"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est une somme : on applique la propriété des primitives de $u + v$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p04_q6",
          "type": "mcq",
          "prompt": "Dans cet exemple, le résultat final est positif parce que :",
          "options": [
            "La constante $c$ est positive",
            "$x$ est toujours positif",
            "Le produit de $-\\frac{5}{2}$ par $-\\frac{1}{x}$ est positif",
            "On oublie le signe moins de la primitive de $\\frac{1}{x^2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Moins par moins donne plus : $\\left(-\\frac{5}{2}\\right) \\times \\left(-\\frac{1}{x}\\right) = \\frac{5}{2x}$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05",
      "order": 5,
      "title": "Primitives de $u' u^m$ et de $\\frac{u'}{u}$",
      "summary": "Reconnaître les formes $u' u^m$ et $\\frac{u'}{u}$ pour appliquer les formules en $\\frac{u^{m+1}}{m+1}$ et en $\\ln$.",
      "conceptExplanation": "Forme $u' u^m$ : soit $m \\in \\mathbb{Q} \\setminus \\{-1\\}$. Si $u$ est une fonction dérivable et strictement positive sur un intervalle $K$, alors une primitive sur $K$ de la fonction $u' u^m$ est la fonction $\\frac{u^{m+1}}{m+1}$. Exemple : pour $f(x) = 2x (x^2 + 1)^8$, on reconnaît $u(x) = x^2 + 1$ et $u'(x) = 2x$ ; une primitive est $x \\mapsto \\frac{(x^2 + 1)^9}{9}$.\nForme $\\frac{u'}{u}$ : si $u$ est dérivable sur $K$ et ne s'annule pas sur $K$, alors la fonction $x \\mapsto \\frac{u'(x)}{u(x)}$ admet pour primitive $x \\mapsto \\ln(u(x))$ sur tout intervalle où $u$ est strictement positive, et $x \\mapsto \\ln(-u(x))$ sur tout intervalle où $u$ est strictement négative.\nExemples : $\\frac{1}{x}$ sur $]0 ; +\\infty[$ a pour primitives $x \\mapsto \\ln x + c$ ; $\\frac{2x + 3}{x^2 + 3x + 5}$ sur $\\mathbb{R}$ a pour primitives $x \\mapsto \\ln(x^2 + 3x + 5) + c$ ; $\\frac{5}{3 - x}$ sur $]3 ; +\\infty[$ a pour primitives $x \\mapsto -5 \\ln(x - 3) + c$, car $u(x) = 3 - x$ y est strictement négative et $u'(x) = -1$.",
      "keyRule": "Identifier $u$, calculer $u'$, vérifier que $u'$ figure bien dans l'expression, puis appliquer $\\frac{u^{m+1}}{m+1}$ ou $\\ln(u)$ selon la forme.",
      "formulas": [
        {
          "name": "Primitive de $u' u^m$",
          "formula": "\\frac{u^{m+1}}{m+1} \\text{ , pour } m \\neq -1"
        },
        {
          "name": "Primitive de $\\frac{u'}{u}$",
          "formula": "\\ln(u(x)) \\text{ si } u > 0 \\text{ ; } \\ln(-u(x)) \\text{ si } u < 0"
        }
      ],
      "workedExample": {
        "title": "Une primitive de $2x (x^2 + 1)^8$ (exercice de fixation)",
        "statement": "Détermine une primitive sur $\\mathbb{R}$ de la fonction $f : x \\mapsto 2x (x^2 + 1)^8$.",
        "methodSteps": [
          "La dérivée de la fonction $x \\mapsto x^2 + 1$ est la fonction $x \\mapsto 2x$.",
          "La fonction $f$ est donc de la forme $x \\mapsto u'(x) (u(x))^8$, avec $u(x) = x^2 + 1$.",
          "On applique la formule avec $m = 8$ : une primitive est $x \\mapsto \\frac{(x^2 + 1)^9}{9}$."
        ],
        "conclusion": "Une primitive de $f$ sur $\\mathbb{R}$ est $x \\mapsto \\frac{(x^2 + 1)^9}{9}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reconnaître la forme $u' u^m$",
          "stepTheme": "Reconnaître la forme $u' u^m$",
          "stepBadge": "Reconnaître la forme $u' u^m$",
          "paragraphText": "• La forme $u' u^m$ associe une fonction $u$ élevée à la puissance $m$ et sa propre dérivée $u'$ comme facteur.\nDans $f(x) = 2x (x^2 + 1)^8$, la fonction intérieure est $u(x) = x^2 + 1$ et le facteur $2x$ est exactement $u'(x)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q1",
            "type": "mcq",
            "prompt": "Dans $f(x) = 2x (x^2 + 1)^8$, la fonction $u$ et sa dérivée sont :",
            "options": [
              "$u(x) = 2x$ et $u'(x) = 2$",
              "$u(x) = x^2 + 1$ et $u'(x) = 2x$",
              "$u(x) = (x^2 + 1)^8$ et $u'(x) = 2x$",
              "$u(x) = x^2$ et $u'(x) = 2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'intérieur de la puissance est $u(x) = x^2 + 1$, dont la dérivée est $u'(x) = 2x$, le facteur placé devant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule pour $u' u^m$",
          "stepTheme": "La formule pour $u' u^m$",
          "stepBadge": "La formule pour $u' u^m$",
          "paragraphText": "Propriété : pour $m \\in \\mathbb{Q} \\setminus \\{-1\\}$ et $u$ dérivable et strictement positive sur $K$, une primitive de $u' u^m$ est $\\frac{u^{m+1}}{m+1}$.\nOn augmente l'exposant de $1$ et on divise par le nouvel exposant, comme pour les puissances ordinaires.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q2",
            "type": "mcq",
            "prompt": "Une primitive de $u' u^m$ (avec $m \\neq -1$) est :",
            "options": [
              "$\\frac{u^{m+1}}{m+1}$",
              "$\\frac{u^m}{m}$",
              "$m u^{m-1}$",
              "$\\frac{u^{m-1}}{m-1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la propriété de la leçon pour la forme $u' u^m$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $2x (x^2 + 1)^8$",
          "stepTheme": "Une primitive de $2x (x^2 + 1)^8$",
          "stepBadge": "Une primitive de $2x (x^2 + 1)^8$",
          "paragraphText": "Avec $u(x) = x^2 + 1$ et $m = 8$, la formule donne $\\frac{u^9}{9}$.\nOn remplace $u$ par son expression pour obtenir la primitive cherchée.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q3",
            "type": "mcq",
            "prompt": "Une primitive sur $\\mathbb{R}$ de $f(x) = 2x (x^2 + 1)^8$ est :",
            "options": [
              "$x \\mapsto \\frac{(x^2 + 1)^8}{8}$",
              "$x \\mapsto 9 (x^2 + 1)^9$",
              "$x \\mapsto \\frac{(x^2 + 1)^9}{9}$",
              "$x \\mapsto \\frac{(x^2 + 1)^9}{8}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La formule $\\frac{u^{m+1}}{m+1}$ avec $m = 8$ donne $\\frac{(x^2 + 1)^9}{9}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La forme $\\frac{u'}{u}$ et le logarithme",
          "stepTheme": "La forme $\\frac{u'}{u}$ et le logarithme",
          "stepBadge": "La forme $\\frac{u'}{u}$ et le logarithme",
          "paragraphText": "• Si $u$ est dérivable et ne s'annule pas sur $K$, la fonction $x \\mapsto \\frac{u'(x)}{u(x)}$ admet pour primitive $x \\mapsto \\ln(u(x))$ là où $u$ est strictement positive.\nCas de base : $\\frac{1}{x}$ sur $]0 ; +\\infty[$, où $u(x) = x$ et $u'(x) = 1$, a pour primitives $x \\mapsto \\ln x + c$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q4",
            "type": "mcq",
            "prompt": "Les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{x}$ sont :",
            "options": [
              "$x \\mapsto -\\frac{1}{x^2} + c$",
              "$x \\mapsto \\ln x + c$",
              "$x \\mapsto \\frac{1}{x} + c$",
              "$x \\mapsto e^x + c$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le premier cas de l'exercice de fixation : $f$ est de la forme $\\frac{u'}{u}$ avec $u(x) = x$, d'où $x \\mapsto \\ln x + c$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une primitive de $\\frac{2x + 3}{x^2 + 3x + 5}$",
          "stepTheme": "Une primitive de $\\frac{2x + 3}{x^2 + 3x + 5}$",
          "stepBadge": "Une primitive de $\\frac{2x + 3}{x^2 + 3x + 5}$",
          "paragraphText": "Ici $u(x) = x^2 + 3x + 5$, qui est dérivable et strictement positive sur $\\mathbb{R}$, et $u'(x) = 2x + 3$.\nLa fonction est donc exactement de la forme $\\frac{u'}{u}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q5",
            "type": "mcq",
            "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = \\frac{2x + 3}{x^2 + 3x + 5}$ sont :",
            "options": [
              "$x \\mapsto \\ln(x^2 + 3x + 5) + c$",
              "$x \\mapsto \\frac{1}{x^2 + 3x + 5} + c$",
              "$x \\mapsto (2x + 3) \\ln(x^2 + 3x + 5) + c$",
              "$x \\mapsto \\ln(2x + 3) + c$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Troisième cas de l'exercice de fixation : $f = \\frac{u'}{u}$ avec $u$ positive, d'où $x \\mapsto \\ln(x^2 + 3x + 5) + c$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Quand $u$ est strictement négative",
          "stepTheme": "Quand $u$ est strictement négative",
          "stepBadge": "Quand $u$ est strictement négative",
          "paragraphText": "Piège : pour $f(x) = \\frac{5}{3 - x}$ sur $]3 ; +\\infty[$, la fonction $u(x) = 3 - x$ est strictement négative et $u'(x) = -1$.\nOn écrit $f(x) = -5 \\times \\frac{u'(x)}{u(x)}$ et la primitive fait intervenir $\\ln(-u(x))$, c'est-à-dire $\\ln(x - 3)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q6",
            "type": "mcq",
            "prompt": "Les primitives sur $]3 ; +\\infty[$ de $f(x) = \\frac{5}{3 - x}$ sont :",
            "options": [
              "$x \\mapsto 5 \\ln(3 - x) + c$",
              "$x \\mapsto -5 \\ln(x - 3) + c$",
              "$x \\mapsto -5 \\ln(3 - x) + c$",
              "$x \\mapsto \\frac{5}{3 - x} + c$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deuxième cas de l'exercice de fixation : $u$ négative et facteur $-5$, d'où $x \\mapsto -5 \\ln(-3 + x) + c$, c'est-à-dire $-5 \\ln(x - 3) + c$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q1",
          "type": "mcq",
          "prompt": "Dans $f(x) = 2x (x^2 + 1)^8$, la fonction $u$ et sa dérivée sont :",
          "options": [
            "$u(x) = 2x$ et $u'(x) = 2$",
            "$u(x) = x^2 + 1$ et $u'(x) = 2x$",
            "$u(x) = (x^2 + 1)^8$ et $u'(x) = 2x$",
            "$u(x) = x^2$ et $u'(x) = 2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'intérieur de la puissance est $u(x) = x^2 + 1$, dont la dérivée est $u'(x) = 2x$, le facteur placé devant."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q2",
          "type": "mcq",
          "prompt": "Une primitive de $u' u^m$ (avec $m \\neq -1$) est :",
          "options": [
            "$\\frac{u^{m+1}}{m+1}$",
            "$\\frac{u^m}{m}$",
            "$m u^{m-1}$",
            "$\\frac{u^{m-1}}{m-1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la propriété de la leçon pour la forme $u' u^m$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q3",
          "type": "mcq",
          "prompt": "Une primitive sur $\\mathbb{R}$ de $f(x) = 2x (x^2 + 1)^8$ est :",
          "options": [
            "$x \\mapsto \\frac{(x^2 + 1)^8}{8}$",
            "$x \\mapsto 9 (x^2 + 1)^9$",
            "$x \\mapsto \\frac{(x^2 + 1)^9}{9}$",
            "$x \\mapsto \\frac{(x^2 + 1)^9}{8}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La formule $\\frac{u^{m+1}}{m+1}$ avec $m = 8$ donne $\\frac{(x^2 + 1)^9}{9}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q4",
          "type": "mcq",
          "prompt": "Les primitives sur $]0 ; +\\infty[$ de $f(x) = \\frac{1}{x}$ sont :",
          "options": [
            "$x \\mapsto -\\frac{1}{x^2} + c$",
            "$x \\mapsto \\ln x + c$",
            "$x \\mapsto \\frac{1}{x} + c$",
            "$x \\mapsto e^x + c$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le premier cas de l'exercice de fixation : $f$ est de la forme $\\frac{u'}{u}$ avec $u(x) = x$, d'où $x \\mapsto \\ln x + c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q5",
          "type": "mcq",
          "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = \\frac{2x + 3}{x^2 + 3x + 5}$ sont :",
          "options": [
            "$x \\mapsto \\ln(x^2 + 3x + 5) + c$",
            "$x \\mapsto \\frac{1}{x^2 + 3x + 5} + c$",
            "$x \\mapsto (2x + 3) \\ln(x^2 + 3x + 5) + c$",
            "$x \\mapsto \\ln(2x + 3) + c$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Troisième cas de l'exercice de fixation : $f = \\frac{u'}{u}$ avec $u$ positive, d'où $x \\mapsto \\ln(x^2 + 3x + 5) + c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p05_q6",
          "type": "mcq",
          "prompt": "Les primitives sur $]3 ; +\\infty[$ de $f(x) = \\frac{5}{3 - x}$ sont :",
          "options": [
            "$x \\mapsto 5 \\ln(3 - x) + c$",
            "$x \\mapsto -5 \\ln(x - 3) + c$",
            "$x \\mapsto -5 \\ln(3 - x) + c$",
            "$x \\mapsto \\frac{5}{3 - x} + c$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deuxième cas de l'exercice de fixation : $u$ négative et facteur $-5$, d'où $x \\mapsto -5 \\ln(-3 + x) + c$, c'est-à-dire $-5 \\ln(x - 3) + c$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06",
      "order": 6,
      "title": "Primitives de $u' e^u$",
      "summary": "La fonction $u' e^u$ a pour primitive $e^u$ : l'exponentielle se retrouve telle quelle.",
      "conceptExplanation": "Propriété de la leçon : $u$ étant une fonction dérivable sur un intervalle $K$, la fonction $x \\mapsto e^{u(x)}$ est une primitive sur $K$ de la fonction $x \\mapsto u'(x) e^{u(x)}$.\nCas de base : $f(x) = e^x$ sur $\\mathbb{R}$, avec $u(x) = x$ et $u'(x) = 1$, a pour primitives $x \\mapsto e^x + c$.\nDeuxième cas : $f(x) = (2x + 3) e^{x^2 + 3x - 1}$, avec $u(x) = x^2 + 3x - 1$ et $u'(x) = 2x + 3$, a pour primitives $x \\mapsto e^{x^2 + 3x - 1} + c$.\nTroisième cas : $f(x) = 4 e^{4x + 5}$, avec $u(x) = 4x + 5$ et $u'(x) = 4$, a pour primitives $x \\mapsto e^{4x + 5} + c$.",
      "keyRule": "Devant $u' e^u$ : identifier $u$ dans l'exposant, vérifier que le facteur devant l'exponentielle est exactement $u'$, puis écrire $e^u + c$.",
      "formulas": [
        {
          "name": "Primitive de $u' e^u$",
          "formula": "x \\mapsto e^{u(x)} + c"
        }
      ],
      "workedExample": {
        "title": "Les primitives de $(2x + 3) e^{x^2 + 3x - 1}$ (exercice de fixation)",
        "statement": "Détermine les primitives sur $\\mathbb{R}$ de la fonction $f$ définie par $f(x) = (2x + 3) e^{x^2 + 3x - 1}$.",
        "methodSteps": [
          "La fonction $u : x \\mapsto x^2 + 3x - 1$ est dérivable sur $\\mathbb{R}$ et, pour tout $x \\in \\mathbb{R}$, $u'(x) = 2x + 3$.",
          "La fonction $f$ est donc de la forme $x \\mapsto u'(x) e^{u(x)}$. ",
          "Par la propriété, une primitive de $f$ est $x \\mapsto e^{u(x)}$."
        ],
        "conclusion": "Les primitives de $f$ sur $\\mathbb{R}$ sont les fonctions $x \\mapsto e^{x^2 + 3x - 1} + c$, avec $c \\in \\mathbb{R}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Reconnaître la forme $u' e^u$",
          "stepTheme": "Reconnaître la forme $u' e^u$",
          "stepBadge": "Reconnaître la forme $u' e^u$",
          "paragraphText": "• La forme $u' e^u$ associe une exponentielle $e^{u(x)}$ et, comme facteur devant elle, la dérivée $u'(x)$ de l'exposant.\nIdentifier d'abord ce qui est dans l'exposant : c'est la fonction $u$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q1",
            "type": "mcq",
            "prompt": "Dans $f(x) = (2x + 3) e^{x^2 + 3x - 1}$, la fonction $u$ est :",
            "options": [
              "$u(x) = 2x + 3$",
              "$u(x) = e^{x^2 + 3x - 1}$",
              "$u(x) = x^2 + 3x - 1$",
              "$u(x) = x^2 + 3x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fonction $u$ est ce qui figure dans l'exposant : $u(x) = x^2 + 3x - 1$, et son dérivée $2x + 3$ est le facteur devant."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La formule pour $u' e^u$",
          "stepTheme": "La formule pour $u' e^u$",
          "stepBadge": "La formule pour $u' e^u$",
          "paragraphText": "Propriété : la fonction $x \\mapsto e^{u(x)}$ est une primitive sur $K$ de la fonction $x \\mapsto u'(x) e^{u(x)}$.\nL'exponentielle est sa propre primitive quand le facteur $u'$ est présent.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q2",
            "type": "mcq",
            "prompt": "Une primitive de $x \\mapsto u'(x) e^{u(x)}$ est :",
            "options": [
              "$x \\mapsto u'(x) e^{u(x)}$",
              "$x \\mapsto e^{u(x)}$",
              "$x \\mapsto \\frac{e^{u(x)}}{u'(x)}$",
              "$x \\mapsto u(x) e^{u(x)}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par la propriété de la leçon, $e^{u(x)}$ est une primitive de $u'(x) e^{u(x)}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le cas de base : $e^x$",
          "stepTheme": "Le cas de base : $e^x$",
          "stepBadge": "Le cas de base : $e^x$",
          "paragraphText": "Pour $f(x) = e^x$ sur $\\mathbb{R}$, on prend $u(x) = x$, de dérivée $u'(x) = 1$.\nLa fonction est donc de la forme $u' e^u$, avec un facteur $1$ invisible.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q3",
            "type": "mcq",
            "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = e^x$ sont :",
            "options": [
              "$x \\mapsto e^x + c$",
              "$x \\mapsto \\frac{e^x}{x} + c$",
              "$x \\mapsto x e^x + c$",
              "$x \\mapsto \\ln x + c$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Premier cas de l'exercice de fixation : les primitives de $e^x$ sont $x \\mapsto e^x + c$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cas de $4 e^{4x + 5}$",
          "stepTheme": "Le cas de $4 e^{4x + 5}$",
          "stepBadge": "Le cas de $4 e^{4x + 5}$",
          "paragraphText": "Pour $f(x) = 4 e^{4x + 5}$, on prend $u(x) = 4x + 5$, dont la dérivée est $u'(x) = 4$.\nLe facteur $4$ devant l'exponentielle est donc exactement $u'$ : la forme $u' e^u$ est complète.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q4",
            "type": "mcq",
            "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = 4 e^{4x + 5}$ sont :",
            "options": [
              "$x \\mapsto 4 e^{4x + 5} + c$",
              "$x \\mapsto \\frac{1}{4} e^{4x + 5} + c$",
              "$x \\mapsto e^{4x + 5} + c$",
              "$x \\mapsto e^{4x} + c$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Troisième cas de l'exercice de fixation : comme le facteur $4$ est $u'$, une primitive est $e^{4x + 5}$, d'où $x \\mapsto e^{4x + 5} + c$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Vérifier que le facteur est bien $u'$",
          "stepTheme": "Vérifier que le facteur est bien $u'$",
          "stepBadge": "Vérifier que le facteur est bien $u'$",
          "paragraphText": "Piège : écrire $e^{u(x)}$ sans vérifier le facteur conduirait à des erreurs dès que le facteur diffère de $u'$.\nIci, pour $u(x) = x^2 + 3x - 1$, il faut retrouver exactement $u'(x) = 2x + 3$ devant l'exponentielle.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q5",
            "type": "mcq",
            "prompt": "Pour $u(x) = x^2 + 3x - 1$, la dérivée $u'(x)$ vaut :",
            "options": [
              "$2x - 1$",
              "$2x + 3$",
              "$x + 3$",
              "$2x + 3x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La dérivée de $x^2$ est $2x$, celle de $3x$ est $3$ et celle de $-1$ est $0$ : $u'(x) = 2x + 3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La démarche complète",
          "stepTheme": "La démarche complète",
          "stepBadge": "La démarche complète",
          "paragraphText": "Méthode : identifier $u$ dans l'exposant, calculer $u'$, comparer $u'$ au facteur placé devant l'exponentielle.\nSi le facteur est exactement $u'$, la primitive est $e^{u(x)}$, à une constante près.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q6",
            "type": "mcq",
            "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = (2x + 3) e^{x^2 + 3x - 1}$ sont :",
            "options": [
              "$x \\mapsto (2x + 3) e^{x^2 + 3x - 1} + c$",
              "$x \\mapsto \\frac{e^{x^2 + 3x - 1}}{2x + 3} + c$",
              "$x \\mapsto e^{2x + 3} + c$",
              "$x \\mapsto e^{x^2 + 3x - 1} + c$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le facteur $2x + 3$ est exactement $u'$ pour $u(x) = x^2 + 3x - 1$ : les primitives sont $x \\mapsto e^{x^2 + 3x - 1} + c$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q1",
          "type": "mcq",
          "prompt": "Dans $f(x) = (2x + 3) e^{x^2 + 3x - 1}$, la fonction $u$ est :",
          "options": [
            "$u(x) = 2x + 3$",
            "$u(x) = e^{x^2 + 3x - 1}$",
            "$u(x) = x^2 + 3x - 1$",
            "$u(x) = x^2 + 3x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La fonction $u$ est ce qui figure dans l'exposant : $u(x) = x^2 + 3x - 1$, et son dérivée $2x + 3$ est le facteur devant."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q2",
          "type": "mcq",
          "prompt": "Une primitive de $x \\mapsto u'(x) e^{u(x)}$ est :",
          "options": [
            "$x \\mapsto u'(x) e^{u(x)}$",
            "$x \\mapsto e^{u(x)}$",
            "$x \\mapsto \\frac{e^{u(x)}}{u'(x)}$",
            "$x \\mapsto u(x) e^{u(x)}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par la propriété de la leçon, $e^{u(x)}$ est une primitive de $u'(x) e^{u(x)}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q3",
          "type": "mcq",
          "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = e^x$ sont :",
          "options": [
            "$x \\mapsto e^x + c$",
            "$x \\mapsto \\frac{e^x}{x} + c$",
            "$x \\mapsto x e^x + c$",
            "$x \\mapsto \\ln x + c$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Premier cas de l'exercice de fixation : les primitives de $e^x$ sont $x \\mapsto e^x + c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q4",
          "type": "mcq",
          "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = 4 e^{4x + 5}$ sont :",
          "options": [
            "$x \\mapsto 4 e^{4x + 5} + c$",
            "$x \\mapsto \\frac{1}{4} e^{4x + 5} + c$",
            "$x \\mapsto e^{4x + 5} + c$",
            "$x \\mapsto e^{4x} + c$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Troisième cas de l'exercice de fixation : comme le facteur $4$ est $u'$, une primitive est $e^{4x + 5}$, d'où $x \\mapsto e^{4x + 5} + c$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q5",
          "type": "mcq",
          "prompt": "Pour $u(x) = x^2 + 3x - 1$, la dérivée $u'(x)$ vaut :",
          "options": [
            "$2x - 1$",
            "$2x + 3$",
            "$x + 3$",
            "$2x + 3x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La dérivée de $x^2$ est $2x$, celle de $3x$ est $3$ et celle de $-1$ est $0$ : $u'(x) = 2x + 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p06_q6",
          "type": "mcq",
          "prompt": "Les primitives sur $\\mathbb{R}$ de $f(x) = (2x + 3) e^{x^2 + 3x - 1}$ sont :",
          "options": [
            "$x \\mapsto (2x + 3) e^{x^2 + 3x - 1} + c$",
            "$x \\mapsto \\frac{e^{x^2 + 3x - 1}}{2x + 3} + c$",
            "$x \\mapsto e^{2x + 3} + c$",
            "$x \\mapsto e^{x^2 + 3x - 1} + c$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le facteur $2x + 3$ est exactement $u'$ pour $u(x) = x^2 + 3x - 1$ : les primitives sont $x \\mapsto e^{x^2 + 3x - 1} + c$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07",
      "order": 7,
      "title": "L'intégrale d'une fonction continue",
      "summary": "L'intégrale de $a$ à $b$ de $f$ est $F(b) - F(a)$, où $F$ est une primitive quelconque de $f$.",
      "conceptExplanation": "Définition : soit $f$ une fonction continue sur un intervalle $K$, $a$ et $b$ deux éléments de $K$ et $F$ une primitive de $f$ sur $K$. Le nombre réel $F(b) - F(a)$ ne dépend pas de la primitive $F$ choisie ; il est appelé intégrale de $a$ à $b$ de $f$.\nNotation : on note $\\int_a^b f(x) \\, dx$, qui se lit « intégrale de $a$ à $b$ de $f(x) \\, dx$ », ou $[F(x)]_a^b$, qui se lit « $F(x)$ pris entre $a$ et $b$ ». On a donc $\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)$.\nExemple : pour $f(x) = x^2$ sur $[0 ; 1]$, une primitive est $F(x) = \\frac{1}{3} x^3$, donc $\\int_0^1 x^2 \\, dx = \\frac{1}{3}$. La même intégrale écrite avec la variable $z$ donne le même résultat : la variable d'intégration est muette.",
      "keyRule": "Calculer une intégrale : choisir une primitive $F$, puis faire $F(b) - F(a)$, dans cet ordre.",
      "formulas": [
        {
          "name": "Définition de l'intégrale",
          "formula": "\\int_a^b f(x) \\, dx = F(b) - F(a)"
        },
        {
          "name": "Exemple de la leçon",
          "formula": "\\int_0^1 x^2 \\, dx = \\frac{1}{3}"
        }
      ],
      "workedExample": {
        "title": "Calculer $\\int_0^1 x^2 \\, dx$ (exercice de la leçon)",
        "statement": "Calcule l'intégrale $I = \\int_0^1 x^2 \\, dx$.",
        "methodSteps": [
          "La fonction $f : x \\mapsto x^2$ est continue sur $[0 ; 1]$ et une de ses primitives est $F(x) = \\frac{1}{3} x^3$.",
          "On applique $I = [F(x)]_0^1 = F(1) - F(0)$.",
          "On calcule $F(1) = \\frac{1}{3}$ et $F(0) = 0$, donc $I = \\frac{1}{3}$."
        ],
        "conclusion": "L'intégrale vaut $I = \\frac{1}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition de l'intégrale",
          "stepTheme": "La définition de l'intégrale",
          "stepBadge": "La définition de l'intégrale",
          "paragraphText": "• Soit $f$ continue sur $K$, $a$ et $b$ dans $K$ et $F$ une primitive de $f$ sur $K$.\nLe nombre $F(b) - F(a)$ est appelé intégrale de $a$ à $b$ de $f$, et il ne dépend pas de la primitive choisie.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q1",
            "type": "mcq",
            "prompt": "L'intégrale de $a$ à $b$ de $f$ est, par définition :",
            "options": [
              "$F(a) - F(b)$",
              "$F(b) - F(a)$, où $F$ est une primitive de $f$",
              "$f(b) - f(a)$",
              "$F(a) \\times F(b)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $\\int_a^b f(x) \\, dx = F(b) - F(a)$ pour toute primitive $F$ de $f$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le choix de la primitive ne change rien",
          "stepTheme": "Le choix de la primitive ne change rien",
          "stepBadge": "Le choix de la primitive ne change rien",
          "paragraphText": "Le nombre $F(b) - F(a)$ ne dépend pas de $F$ : deux primitives diffèrent d'une constante $c$, qui s'élimine dans la différence.\nOn peut donc choisir la primitive la plus simple, par exemple celle avec $c = 0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q2",
            "type": "mcq",
            "prompt": "Pourquoi le résultat d'une intégrale ne dépend-il pas de la primitive choisie ?",
            "options": [
              "Parce que $f$ est toujours positive",
              "Parce que la constante $c$ s'élimine dans $F(b) - F(a)$",
              "Parce que $a$ et $b$ sont toujours égaux",
              "Parce qu'il n'existe qu'une seule primitive"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Si $G = F + c$, alors $G(b) - G(a) = F(b) - F(a)$ : la constante disparaît dans la soustraction."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode de calcul",
          "stepTheme": "La méthode de calcul",
          "stepBadge": "La méthode de calcul",
          "paragraphText": "Méthode : trouver une primitive $F$ de $f$, écrire l'intégrale sous la forme $[F(x)]_a^b$, puis calculer $F(b) - F(a)$.\nLa notation $[F(x)]_a^b$ se lit « $F(x)$ pris entre $a$ et $b$ ».",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q3",
            "type": "mcq",
            "prompt": "Pour calculer $\\int_a^b f(x) \\, dx$, on calcule :",
            "options": [
              "$f(b) - f(a)$",
              "$F'(b) - F'(a)$",
              "$F(b) - F(a)$, où $F$ est une primitive de $f$",
              "$F(b) + F(a)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On a $\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La variable muette",
          "stepTheme": "La variable muette",
          "stepBadge": "La variable muette",
          "paragraphText": "L'exercice de la leçon calcule aussi $P = \\int_0^1 z^2 \\, dz$.\nLe résultat est le même que pour $I = \\int_0^1 x^2 \\, dx$ : la lettre utilisée pour la variable ne change pas la valeur de l'intégrale, c'est une variable muette.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q4",
            "type": "mcq",
            "prompt": "La valeur de $P = \\int_0^1 z^2 \\, dz$ est :",
            "options": [
              "$0$",
              "$1$",
              "$\\frac{1}{3}$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution de la leçon précise que $P = I$ car la variable $z$ est muette : $P = \\frac{1}{3}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une intégrale avec le logarithme",
          "stepTheme": "Une intégrale avec le logarithme",
          "stepBadge": "Une intégrale avec le logarithme",
          "paragraphText": "Pour $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right) dt$, une primitive de $t \\mapsto 1 - \\frac{1}{t}$ est $F(t) = t - \\ln t$.\nLa leçon calcule $J = [t - \\ln t]_3^1 = (1 - \\ln 1) - (3 - \\ln 3)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q5",
            "type": "mcq",
            "prompt": "La valeur de $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right) dt$ est :",
            "options": [
              "$2 - \\ln 3$",
              "$-2 + \\ln 3$",
              "$-2 - \\ln 3$",
              "$2 + \\ln 3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On obtient $(1 - 0) - (3 - \\ln 3) = 1 - 3 + \\ln 3 = -2 + \\ln 3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ordre des bornes dans la soustraction",
          "stepTheme": "L'ordre des bornes dans la soustraction",
          "stepBadge": "L'ordre des bornes dans la soustraction",
          "paragraphText": "Piège : l'intégrale vaut $F(b) - F(a)$, valeur en la borne supérieure moins valeur en la borne inférieure.\nInverser l'ordre change le signe du résultat : pour $J$, calculer $F(3) - F(1)$ donnerait $2 - \\ln 3$ au lieu de $-2 + \\ln 3$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q6",
            "type": "mcq",
            "prompt": "Dans $\\int_a^b f(x) \\, dx = [F(x)]_a^b$, la soustraction correcte est :",
            "options": [
              "$F(a) - F(b)$",
              "$F(b) - F(a)$",
              "La valeur de la dérivée en $b$ moins celle en $a$",
              "$b - a$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $[F(x)]_a^b = F(b) - F(a)$ : borne supérieure moins borne inférieure."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q1",
          "type": "mcq",
          "prompt": "L'intégrale de $a$ à $b$ de $f$ est, par définition :",
          "options": [
            "$F(a) - F(b)$",
            "$F(b) - F(a)$, où $F$ est une primitive de $f$",
            "$f(b) - f(a)$",
            "$F(a) \\times F(b)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $\\int_a^b f(x) \\, dx = F(b) - F(a)$ pour toute primitive $F$ de $f$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q2",
          "type": "mcq",
          "prompt": "Pourquoi le résultat d'une intégrale ne dépend-il pas de la primitive choisie ?",
          "options": [
            "Parce que $f$ est toujours positive",
            "Parce que la constante $c$ s'élimine dans $F(b) - F(a)$",
            "Parce que $a$ et $b$ sont toujours égaux",
            "Parce qu'il n'existe qu'une seule primitive"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Si $G = F + c$, alors $G(b) - G(a) = F(b) - F(a)$ : la constante disparaît dans la soustraction."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q3",
          "type": "mcq",
          "prompt": "Pour calculer $\\int_a^b f(x) \\, dx$, on calcule :",
          "options": [
            "$f(b) - f(a)$",
            "$F'(b) - F'(a)$",
            "$F(b) - F(a)$, où $F$ est une primitive de $f$",
            "$F(b) + F(a)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On a $\\int_a^b f(x) \\, dx = [F(x)]_a^b = F(b) - F(a)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q4",
          "type": "mcq",
          "prompt": "La valeur de $P = \\int_0^1 z^2 \\, dz$ est :",
          "options": [
            "$0$",
            "$1$",
            "$\\frac{1}{3}$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution de la leçon précise que $P = I$ car la variable $z$ est muette : $P = \\frac{1}{3}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q5",
          "type": "mcq",
          "prompt": "La valeur de $J = \\int_3^1 \\left(1 - \\frac{1}{t}\\right) dt$ est :",
          "options": [
            "$2 - \\ln 3$",
            "$-2 + \\ln 3$",
            "$-2 - \\ln 3$",
            "$2 + \\ln 3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On obtient $(1 - 0) - (3 - \\ln 3) = 1 - 3 + \\ln 3 = -2 + \\ln 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p07_q6",
          "type": "mcq",
          "prompt": "Dans $\\int_a^b f(x) \\, dx = [F(x)]_a^b$, la soustraction correcte est :",
          "options": [
            "$F(a) - F(b)$",
            "$F(b) - F(a)$",
            "La valeur de la dérivée en $b$ moins celle en $a$",
            "$b - a$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $[F(x)]_a^b = F(b) - F(a)$ : borne supérieure moins borne inférieure."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08",
      "order": 8,
      "title": "Calcul d'aires à l'aide d'une intégrale",
      "summary": "Pour une fonction continue et positive, l'intégrale donne l'aire sous la courbe, à convertir avec l'unité d'aire du repère.",
      "conceptExplanation": "Interprétation graphique : soit $f$ une fonction continue et positive sur $[a ; b]$ et $(C_f)$ sa courbe dans un repère orthogonal $(O, I, J)$. Alors $\\int_a^b f(x) \\, dx$ est l'aire, en unités d'aire, de la partie du plan limitée par la courbe $(C_f)$, l'axe $(OI)$ et les droites d'équations $x = a$ et $x = b$. L'unité d'aire est l'aire du rectangle $OIAJ$ : $1$ u.a. $= OI \\times OJ$.\nExemples de fixation : pour $f(x) = 2x + 1$ entre $x = 0$ et $x = 5$, avec des unités de $2$ cm et $3$ cm, l'unité d'aire vaut $6$ cm² et l'aire vaut $180$ cm². Pour $f(x) = x^2$ entre $x = 1$ et $x = 3$, avec des unités de $2$ cm et $4$ cm, l'unité d'aire vaut $8$ cm² et l'aire vaut $\\frac{208}{3}$ cm².\nAire entre deux courbes : si $f \\geq g$ sur $[a ; b]$, l'aire de la partie limitée par $(C_f)$, $(C_g)$ et les droites $x = a$ et $x = b$ est $\\int_a^b [f(x) - g(x)] \\, dx$ u.a. Exemple : entre $f(x) = x + 2$ et $g(x) = x^2$, de $x = -1$ à $x = 2$, avec une unité graphique de $2$ cm, l'aire vaut $18$ cm².",
      "keyRule": "Aire en unités d'aire par l'intégrale, puis conversion en cm² en multipliant par l'unité d'aire du repère : ne jamais confondre les deux.",
      "formulas": [
        {
          "name": "Aire sous une courbe",
          "formula": "\\mathcal{A} = \\int_a^b f(x) \\, dx \\text{ u.a., pour } f \\geq 0 \\text{ sur } [a ; b]"
        },
        {
          "name": "Aire entre deux courbes",
          "formula": "\\mathcal{A} = \\int_a^b [f(x) - g(x)] \\, dx \\text{ u.a., pour } f \\geq g \\text{ sur } [a ; b]"
        },
        {
          "name": "Unité d'aire",
          "formula": "1 \\text{ u.a. } = OI \\times OJ"
        }
      ],
      "workedExample": {
        "title": "L'aire de la terrasse (situation complexe)",
        "statement": "La terrasse d'un ancien professeur comprend une partie rectangulaire $ABCD$ de largeur $2$ m et de longueur $4$ m, et une partie $ABE$ délimitée par un segment $[AB]$ et une parabole d'équation $y = -x^2 + 4$ dans un repère orthonormé d'unité $1$ m, avec $A(-2 ; 0)$ et $B(2 ; 0)$. Calcule l'aire totale de la terrasse.",
        "methodSteps": [
          "Aire de la partie rectangulaire : $AB \\times AD = 4 \\times 2 = 8$ m².",
          "Aire de la partie sous la parabole : $\\int_{-2}^{2} (4 - x^2) \\, dx = \\left[4x - \\frac{1}{3} x^3\\right]_{-2}^{2} = \\left(8 - \\frac{8}{3}\\right) - \\left(-8 + \\frac{8}{3}\\right) = \\frac{32}{3}$ m².",
          "On additionne les deux aires : $\\frac{32}{3} + 8 = \\frac{56}{3}$ m²."
        ],
        "conclusion": "L'aire totale de la terrasse est $\\frac{56}{3}$ m², soit environ $18{,}67$ m²."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'aire sous la courbe d'une fonction positive",
          "stepTheme": "L'aire sous la courbe d'une fonction positive",
          "stepBadge": "L'aire sous la courbe d'une fonction positive",
          "paragraphText": "• Soit $f$ continue et positive sur $[a ; b]$. L'intégrale $\\int_a^b f(x) \\, dx$ est l'aire, en unités d'aire, de la partie du plan limitée par la courbe $(C_f)$, l'axe des abscisses et les droites d'équations $x = a$ et $x = b$.\nC'est l'interprétation graphique de l'intégrale donnée par la leçon.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q1",
            "type": "mcq",
            "prompt": "Pour $f$ continue et positive sur $[a ; b]$, $\\int_a^b f(x) \\, dx$ représente :",
            "options": [
              "La longueur de la courbe $(C_f)$",
              "L'aire, en unités d'aire, de la partie limitée par $(C_f)$, l'axe des abscisses et les droites $x = a$ et $x = b$",
              "Le volume sous la courbe",
              "La pente de la courbe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la propriété d'interprétation graphique de la leçon, valable parce que $f$ est positive sur $[a ; b]$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'unité d'aire du repère",
          "stepTheme": "L'unité d'aire du repère",
          "stepBadge": "L'unité d'aire du repère",
          "paragraphText": "L'unité d'aire est l'aire du rectangle $OIAJ$ : $1$ u.a. $= OI \\times OJ$.\nAvec $2$ cm sur l'axe des abscisses et $3$ cm sur l'axe des ordonnées, une unité d'aire vaut donc $6$ cm².",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q2",
            "type": "mcq",
            "prompt": "Avec des unités de $2$ cm en abscisse et $3$ cm en ordonnée, l'unité d'aire vaut :",
            "options": [
              "$5$ cm²",
              "$6$ cm²",
              "$1$ cm²",
              "$12$ cm²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On multiplie les deux unités graphiques : $2 \\times 3 = 6$ cm² pour $1$ u.a."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L'aire sous la courbe de $2x + 1$",
          "stepTheme": "L'aire sous la courbe de $2x + 1$",
          "stepBadge": "L'aire sous la courbe de $2x + 1$",
          "paragraphText": "Pour $f(x) = 2x + 1$, continue et positive, entre $x = 0$ et $x = 5$ : l'intégrale vaut $[x^2 + x]_0^5$, c'est-à-dire $30$ u.a.\nAvec une unité d'aire de $6$ cm², on multiplie par $6$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q3",
            "type": "mcq",
            "prompt": "L'aire cherchée dans cet exercice de fixation vaut :",
            "options": [
              "$30$ cm²",
              "$36$ cm²",
              "$180$ cm²",
              "$90$ cm²"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution de la leçon : $6 \\times (25 + 5) = 180$ cm²."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'aire sous la courbe de $x^2$ entre $1$ et $3$",
          "stepTheme": "L'aire sous la courbe de $x^2$ entre $1$ et $3$",
          "stepBadge": "L'aire sous la courbe de $x^2$ entre $1$ et $3$",
          "paragraphText": "Pour $f(x) = x^2$ entre $x = 1$ et $x = 3$, l'intégrale vaut $\\left[\\frac{1}{3} x^3\\right]_1^3$, c'est-à-dire $9 - \\frac{1}{3}$, donc $\\frac{26}{3}$ u.a.\nLes unités graphiques sont $2$ cm et $4$ cm : l'unité d'aire vaut $8$ cm².",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q4",
            "type": "mcq",
            "prompt": "L'aire cherchée dans cet exercice de fixation vaut :",
            "options": [
              "$\\frac{208}{3}$ cm²",
              "$\\frac{26}{3}$ cm²",
              "$\\frac{104}{3}$ cm²",
              "$64$ cm²"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La solution de la leçon : $8 \\times \\frac{26}{3} = \\frac{208}{3}$ cm²."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L'aire entre deux courbes",
          "stepTheme": "L'aire entre deux courbes",
          "stepBadge": "L'aire entre deux courbes",
          "paragraphText": "Si $f$ et $g$ sont continues sur $[a ; b]$ avec $f \\geq g$ sur $[a ; b]$, l'aire limitée par leurs courbes et les droites $x = a$ et $x = b$ est donnée par une intégrale de la différence.\nOn intègre donc la fonction du dessus moins celle du dessous.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q5",
            "type": "mcq",
            "prompt": "Pour $f \\geq g$ sur $[a ; b]$, cette aire est :",
            "options": [
              "$\\int_a^b [g(x) - f(x)] \\, dx$ u.a.",
              "$\\int_a^b [f(x) - g(x)] \\, dx$ u.a.",
              "$\\int_a^b [f(x) + g(x)] \\, dx$ u.a.",
              "$\\int_a^b f(x) g(x) \\, dx$ u.a."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété de la leçon : $\\mathcal{A} = \\int_a^b [f(x) - g(x)] \\, dx$ u.a. quand $f \\geq g$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre unités d'aire et centimètres carrés",
          "stepTheme": "Confondre unités d'aire et centimètres carrés",
          "stepBadge": "Confondre unités d'aire et centimètres carrés",
          "paragraphText": "Piège : l'intégrale donne une aire en unités d'aire, pas directement en cm².\nDans l'exercice en $2x + 1$, répondre $30$ cm² serait faux : $30$ est le nombre d'unités d'aire, qu'il faut multiplier par $6$ cm² pour obtenir $180$ cm².",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice en $2x + 1$, le nombre $30$ représente :",
            "options": [
              "L'aire en cm²",
              "L'aire en unités d'aire, à convertir par l'unité d'aire de $6$ cm²",
              "La longueur de la courbe",
              "La valeur de $f$ en $5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'intégrale vaut $30$ u.a. ; la conversion par l'unité d'aire donne ensuite $180$ cm²."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "L'aire entre $x + 2$ et $x^2$",
          "stepTheme": "L'aire entre $x + 2$ et $x^2$",
          "stepBadge": "L'aire entre $x + 2$ et $x^2$",
          "paragraphText": "Sur $[-1 ; 2]$, on a $g(x) - f(x) = x^2 - x - 2 = (x + 1)(x - 2) \\leq 0$, donc $f(x) = x + 2$ est au-dessus de $g(x) = x^2$.\nL'intégrale de $f - g$ sur cet intervalle vaut $\\frac{9}{2}$ u.a. et l'unité graphique de $2$ cm donne une unité d'aire de $4$ cm².",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q7",
            "type": "mcq",
            "prompt": "L'aire entre les deux courbes dans cet exercice vaut :",
            "options": [
              "$\\frac{9}{2}$ cm²",
              "$9$ cm²",
              "$36$ cm²",
              "$18$ cm²"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La solution de la leçon : $\\frac{9}{2} \\times 4 = 18$ cm²."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q1",
          "type": "mcq",
          "prompt": "Pour $f$ continue et positive sur $[a ; b]$, $\\int_a^b f(x) \\, dx$ représente :",
          "options": [
            "La longueur de la courbe $(C_f)$",
            "L'aire, en unités d'aire, de la partie limitée par $(C_f)$, l'axe des abscisses et les droites $x = a$ et $x = b$",
            "Le volume sous la courbe",
            "La pente de la courbe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la propriété d'interprétation graphique de la leçon, valable parce que $f$ est positive sur $[a ; b]$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q2",
          "type": "mcq",
          "prompt": "Avec des unités de $2$ cm en abscisse et $3$ cm en ordonnée, l'unité d'aire vaut :",
          "options": [
            "$5$ cm²",
            "$6$ cm²",
            "$1$ cm²",
            "$12$ cm²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On multiplie les deux unités graphiques : $2 \\times 3 = 6$ cm² pour $1$ u.a."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q3",
          "type": "mcq",
          "prompt": "L'aire cherchée dans cet exercice de fixation vaut :",
          "options": [
            "$30$ cm²",
            "$36$ cm²",
            "$180$ cm²",
            "$90$ cm²"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution de la leçon : $6 \\times (25 + 5) = 180$ cm²."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q4",
          "type": "mcq",
          "prompt": "L'aire cherchée dans cet exercice de fixation vaut :",
          "options": [
            "$\\frac{208}{3}$ cm²",
            "$\\frac{26}{3}$ cm²",
            "$\\frac{104}{3}$ cm²",
            "$64$ cm²"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La solution de la leçon : $8 \\times \\frac{26}{3} = \\frac{208}{3}$ cm²."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q5",
          "type": "mcq",
          "prompt": "Pour $f \\geq g$ sur $[a ; b]$, cette aire est :",
          "options": [
            "$\\int_a^b [g(x) - f(x)] \\, dx$ u.a.",
            "$\\int_a^b [f(x) - g(x)] \\, dx$ u.a.",
            "$\\int_a^b [f(x) + g(x)] \\, dx$ u.a.",
            "$\\int_a^b f(x) g(x) \\, dx$ u.a."
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété de la leçon : $\\mathcal{A} = \\int_a^b [f(x) - g(x)] \\, dx$ u.a. quand $f \\geq g$."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice en $2x + 1$, le nombre $30$ représente :",
          "options": [
            "L'aire en cm²",
            "L'aire en unités d'aire, à convertir par l'unité d'aire de $6$ cm²",
            "La longueur de la courbe",
            "La valeur de $f$ en $5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'intégrale vaut $30$ u.a. ; la conversion par l'unité d'aire donne ensuite $180$ cm²."
        },
        {
          "id": "terminale_a1_maths_numerique_l08_primitives_calcul_integral_p08_q7",
          "type": "mcq",
          "prompt": "L'aire entre les deux courbes dans cet exercice vaut :",
          "options": [
            "$\\frac{9}{2}$ cm²",
            "$9$ cm²",
            "$36$ cm²",
            "$18$ cm²"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La solution de la leçon : $\\frac{9}{2} \\times 4 = 18$ cm²."
        }
      ]
    }
  ]
};
