import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Suites numériques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Suites numériques » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L15_SUITES_NUMERIQUES: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l15_suites_numeriques",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 15,
  "title": "Leçon 15 : Suites numériques",
  "summary": "La leçon définit les suites numériques et leurs deux présentations (formule explicite et formule de récurrence), leur représentation graphique, puis les suites arithmétiques et géométriques : terme général, sommes de termes consécutifs et modélisation d’une baisse de production en pourcentage.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Suites numériques » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01",
      "order": 1,
      "title": "Généralités sur les suites numériques",
      "summary": "Définir une suite numérique, son terme général, et calculer ses premiers termes.",
      "conceptExplanation": "On appelle suite numérique toute fonction de $\\mathbb{N}$ vers $\\mathbb{R}$ : à chaque entier naturel $n$, elle associe le réel $U_n$.\nLa suite est notée $(U_n)$ et $U_n$ est appelé terme d’indice $n$ ou terme général de la suite.\nDans l’exemple de la leçon, parmi trois fonctions proposées, seule celle qui est définie sur $\\mathbb{N}$ est une suite numérique.",
      "keyRule": "Une suite est une fonction sur les entiers : calculer un terme, c’est évaluer la fonction en l’indice voulu.",
      "formulas": [
        {
          "name": "Suite numérique",
          "formula": "U : \\mathbb{N} \\to \\mathbb{R}"
        }
      ],
      "workedExample": {
        "title": "Les cinq premiers termes de l’exercice 3",
        "statement": "Calcule les cinq premiers termes de la suite de terme général $U_n = -5n + n^2$.",
        "methodSteps": [
          "On remplace $n$ par $0$ : $U_0 = 0$.",
          "On remplace $n$ par $1$ puis $2$ : $U_1 = -4$ et $U_2 = -6$.",
          "On remplace $n$ par $3$ puis $4$ : $U_3 = -6$ et $U_4 = -4$."
        ],
        "conclusion": "Les cinq premiers termes sont $0$, $-4$, $-6$, $-6$ et $-4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une suite numérique",
          "stepTheme": "La définition d’une suite numérique",
          "stepBadge": "La définition d’une suite numérique",
          "paragraphText": "• Définition : on appelle suite numérique toute fonction de $\\mathbb{N}$ vers $\\mathbb{R}$.\nL’image de $n$ est généralement notée $U_n$ ; la suite est notée $(U_n)$ et $U_n$ est le terme d’indice $n$, ou terme général.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q1",
            "type": "mcq",
            "prompt": "Une suite numérique est :",
            "options": [
              "Une liste finie de nombres",
              "Une équation à une inconnue",
              "Une fonction de $\\mathbb{R}$ vers $\\mathbb{N}$",
              "Une fonction de $\\mathbb{N}$ vers $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, une suite numérique est une fonction définie sur $\\mathbb{N}$ et à valeurs dans $\\mathbb{R}$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le terme général et les indices",
          "stepTheme": "Le terme général et les indices",
          "stepBadge": "Le terme général et les indices",
          "paragraphText": "• Vocabulaire : $U_n$ est appelé terme d’indice $n$ ou terme général de la suite $(U_n)$.\nDans l’exemple de la leçon, seule la fonction définie sur $\\mathbb{N}$ par l’expression en $\\frac{2n - 1}{n}$-type est une suite : les fonctions définies sur $\\mathbb{R}$ ne le sont pas.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q2",
            "type": "mcq",
            "prompt": "Dans la notation $(U_n)$, $U_n$ désigne :",
            "options": [
              "La raison de la suite",
              "Le terme d’indice $n$, ou terme général",
              "La somme des termes",
              "Le premier terme de la suite"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon appelle $U_n$ le terme d’indice $n$, c’est-à-dire le terme général de la suite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Calculer les premiers termes d’une suite explicite",
          "stepTheme": "Calculer les premiers termes d’une suite explicite",
          "stepBadge": "Calculer les premiers termes d’une suite explicite",
          "paragraphText": "• Exercice 3 de la leçon : pour la suite de terme général $U_n = -5n + n^2$, on remplace $n$ par $0$, $1$, $2$, $3$ puis $4$.\nOn obtient successivement $0$, $-4$, $-6$, $-6$ et $-4$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q3",
            "type": "mcq",
            "prompt": "Pour $U_n = -5n + n^2$, le terme $U_2$ vaut :",
            "options": [
              "$0$",
              "$-6$",
              "$4$",
              "$-4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $-5 \\times 2 + 2^2 = -10 + 4 = -6$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer un terme d’indice donné",
          "stepTheme": "Calculer un terme d’indice donné",
          "stepBadge": "Calculer un terme d’indice donné",
          "paragraphText": "• Méthode : pour calculer le terme d’indice $n$ d’une suite définie explicitement, on remplace $n$ par sa valeur dans l’expression du terme général.\nPour la même suite, $U_4 = -5 \\times 4 + 16$, c’est-à-dire $-4$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q4",
            "type": "mcq",
            "prompt": "Pour $U_n = -5n + n^2$, le terme $U_4$ vaut :",
            "options": [
              "$-4$",
              "$-6$",
              "$0$",
              "$36$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $-5 \\times 4 + 4^2 = -20 + 16 = -4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre indice et valeur du terme",
          "stepTheme": "Ne pas confondre indice et valeur du terme",
          "stepBadge": "Ne pas confondre indice et valeur du terme",
          "paragraphText": "• Piège : l’indice $n$ indique la position du terme, pas sa valeur.\nPour la suite de l’exercice 3, les termes d’indices $2$ et $3$ ont la même valeur $-6$ : deux indices différents peuvent donner le même terme.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q5",
            "type": "mcq",
            "prompt": "Pour $U_n = -5n + n^2$, que peut-on dire des termes $U_2$ et $U_3$ ?",
            "options": [
              "Ils valent tous les deux $-6$",
              "Ils valent tous les deux $0$",
              "Ils n’existent pas",
              "Ils sont différents car leurs indices diffèrent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $U_2 = -10 + 4 = -6$ et $U_3 = -15 + 9 = -6$ : les valeurs sont égales malgré des indices différents."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Lire les cinq premiers termes de l’exercice 3",
          "stepTheme": "Lire les cinq premiers termes de l’exercice 3",
          "stepBadge": "Lire les cinq premiers termes de l’exercice 3",
          "paragraphText": "• Exercice 3 de la leçon : les cinq premiers termes de la suite $U_n = -5n + n^2$ sont ceux d’indices $0$ à $4$.\nDans l’ordre, ce sont $0$, $-4$, $-6$, $-6$ et $-4$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q6",
            "type": "mcq",
            "prompt": "La liste des termes $U_0$ à $U_4$ de cette suite est :",
            "options": [
              "$0$, $-4$, $-6$, $-6$, $-4$",
              "$0$, $-5$, $-6$, $-5$, $0$",
              "$-4$, $-6$, $-6$, $-4$, $0$",
              "$0$, $4$, $6$, $6$, $4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace successivement $n$ par $0$, $1$, $2$, $3$ et $4$ dans $-5n + n^2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q1",
          "type": "mcq",
          "prompt": "Une suite numérique est :",
          "options": [
            "Une liste finie de nombres",
            "Une équation à une inconnue",
            "Une fonction de $\\mathbb{R}$ vers $\\mathbb{N}$",
            "Une fonction de $\\mathbb{N}$ vers $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, une suite numérique est une fonction définie sur $\\mathbb{N}$ et à valeurs dans $\\mathbb{R}$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q2",
          "type": "mcq",
          "prompt": "Dans la notation $(U_n)$, $U_n$ désigne :",
          "options": [
            "La raison de la suite",
            "Le terme d’indice $n$, ou terme général",
            "La somme des termes",
            "Le premier terme de la suite"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon appelle $U_n$ le terme d’indice $n$, c’est-à-dire le terme général de la suite."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q3",
          "type": "mcq",
          "prompt": "Pour $U_n = -5n + n^2$, le terme $U_2$ vaut :",
          "options": [
            "$0$",
            "$-6$",
            "$4$",
            "$-4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $-5 \\times 2 + 2^2 = -10 + 4 = -6$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q4",
          "type": "mcq",
          "prompt": "Pour $U_n = -5n + n^2$, le terme $U_4$ vaut :",
          "options": [
            "$-4$",
            "$-6$",
            "$0$",
            "$36$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $-5 \\times 4 + 4^2 = -20 + 16 = -4$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q5",
          "type": "mcq",
          "prompt": "Pour $U_n = -5n + n^2$, que peut-on dire des termes $U_2$ et $U_3$ ?",
          "options": [
            "Ils valent tous les deux $-6$",
            "Ils valent tous les deux $0$",
            "Ils n’existent pas",
            "Ils sont différents car leurs indices diffèrent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $U_2 = -10 + 4 = -6$ et $U_3 = -15 + 9 = -6$ : les valeurs sont égales malgré des indices différents."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p01_q6",
          "type": "mcq",
          "prompt": "La liste des termes $U_0$ à $U_4$ de cette suite est :",
          "options": [
            "$0$, $-4$, $-6$, $-6$, $-4$",
            "$0$, $-5$, $-6$, $-5$, $0$",
            "$-4$, $-6$, $-6$, $-4$, $0$",
            "$0$, $4$, $6$, $6$, $4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace successivement $n$ par $0$, $1$, $2$, $3$ et $4$ dans $-5n + n^2$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02",
      "order": 2,
      "title": "Formule explicite et formule de récurrence",
      "summary": "Distinguer les deux présentations d’une suite et calculer leurs termes, de proche en proche pour une récurrence.",
      "conceptExplanation": "Une suite peut être définie par une formule explicite : si $f$ est une fonction définie sur les réels positifs, la suite de terme général $U_n = f(n)$ est dite définie par une formule explicite. Exemples de la leçon : $U_n = 3n + 5$ et la suite $W$ de terme général $W_n = -6 \\times \\left(\\frac{1}{2}\\right)^n + 10$, dont les termes $W_0$, $W_5$ et $W_{10}$ sont calculés dans la leçon.\nUne suite peut aussi être définie par une formule de récurrence : on donne un premier terme et une relation $U_{n+1} = f(U_n)$. Les termes se calculent alors de proche en proche, comme la suite $V$ de la leçon, définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$.",
      "keyRule": "Explicite : on remplace n. Récurrence : on avance pas à pas depuis le premier terme.",
      "formulas": [
        {
          "name": "Formule explicite",
          "formula": "U_n = f(n)"
        },
        {
          "name": "Formule de récurrence",
          "formula": "U_{n+1} = f(U_n)"
        }
      ],
      "workedExample": {
        "title": "Les termes de la suite W de la leçon",
        "statement": "Pour la suite de terme général $W_n = -6 \\times \\left(\\frac{1}{2}\\right)^n + 10$, calcule $W_0$, $W_5$ et $W_{10}$.",
        "methodSteps": [
          "Pour $n = 0$, la puissance vaut $1$ : $W_0 = 4$.",
          "Pour $n = 5$, la puissance vaut $\\frac{1}{32}$ : $W_5 = \\frac{157}{16}$.",
          "Pour $n = 10$, la puissance vaut $\\frac{1}{1024}$ : $W_{10} = \\frac{5117}{512}$."
        ],
        "conclusion": "Les trois termes sont $4$, $\\frac{157}{16}$ et $\\frac{5117}{512}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule explicite",
          "stepTheme": "La formule explicite",
          "stepBadge": "La formule explicite",
          "paragraphText": "• Définition : une suite est définie par une formule explicite quand son terme général s’écrit $U_n = f(n)$, où $f$ est une fonction définie sur les réels positifs.\nExemples de la leçon : $U_n = 3n + 5$ est une formule explicite.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q1",
            "type": "mcq",
            "prompt": "Une suite définie par une formule explicite est une suite dont :",
            "options": [
              "Le terme général s’écrit directement en fonction de $n$",
              "Le premier terme n’est pas donné",
              "Les termes se lisent seulement sur un graphique",
              "Chaque terme dépend du terme précédent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec une formule explicite, $U_n = f(n)$ donne directement le terme d’indice $n$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer des termes de la suite W",
          "stepTheme": "Calculer des termes de la suite W",
          "stepBadge": "Calculer des termes de la suite W",
          "paragraphText": "• Exemple de la leçon : la suite de terme général $W_n = -6 \\times \\left(\\frac{1}{2}\\right)^n + 10$ est explicite.\nSon premier terme vaut $W_0 = -6 + 10$, c’est-à-dire $4$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q2",
            "type": "mcq",
            "prompt": "Pour $W_n = -6 \\times \\left(\\frac{1}{2}\\right)^n + 10$, le terme $W_0$ vaut :",
            "options": [
              "$10$",
              "$-6$",
              "$4$",
              "$16$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La puissance d’exposant $0$ vaut $1$, donc $W_0 = -6 \\times 1 + 10 = 4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le terme W5 de la leçon",
          "stepTheme": "Le terme W5 de la leçon",
          "stepBadge": "Le terme W5 de la leçon",
          "paragraphText": "• Exemple de la leçon : le terme d’indice $5$ de la suite $W$ s’obtient en remplaçant $n$ par $5$ dans la formule explicite.\nLa puissance vaut $\\frac{1}{32}$, donc le terme est une fraction de dénominateur $16$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q3",
            "type": "mcq",
            "prompt": "Le terme $W_5$ de cette suite vaut :",
            "options": [
              "$\\frac{157}{16}$",
              "$\\frac{157}{12}$",
              "$\\frac{151}{16}$",
              "$9{,}5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $-6 \\times \\frac{1}{32} + 10 = -\\frac{3}{16} + 10 = \\frac{157}{16}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La formule de récurrence",
          "stepTheme": "La formule de récurrence",
          "stepBadge": "La formule de récurrence",
          "paragraphText": "• Définition : une suite est définie par une formule de récurrence quand on donne un premier terme et une relation du type $U_{n+1} = f(U_n)$ valable pour tout entier $n$.\nExemple de la leçon : la suite commençant à $3500$ avec la relation $P_{n+1} = P_n + 25$ est définie par récurrence.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q4",
            "type": "mcq",
            "prompt": "Pour définir une suite par récurrence, il faut donner :",
            "options": [
              "Un premier terme et une relation entre termes consécutifs",
              "Un graphique",
              "La somme des termes",
              "Seulement le terme général"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition par récurrence repose sur un terme de départ et la relation $U_{n+1} = f(U_n)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer de proche en proche : la suite V",
          "stepTheme": "Calculer de proche en proche : la suite V",
          "stepBadge": "Calculer de proche en proche : la suite V",
          "paragraphText": "• Exemple de la leçon : la suite définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$ se calcule de proche en proche.\nLe premier pas donne $V_1 = 2 \\times 7 - 5$, c’est-à-dire $9$ ; chaque nouveau terme exige le terme précédent.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q5",
            "type": "mcq",
            "prompt": "Pour cette suite, le terme $V_2$ vaut :",
            "options": [
              "$14$",
              "$11$",
              "$16$",
              "$13$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule d’abord $V_1 = 9$, puis $V_2 = 2 \\times 9 - 5 = 13$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège du calcul direct dans une récurrence",
          "stepTheme": "Le piège du calcul direct dans une récurrence",
          "stepBadge": "Le piège du calcul direct dans une récurrence",
          "paragraphText": "• Piège : avec une formule de récurrence, on ne peut pas calculer $V_4$ directement à partir de $V_0$ sans passer par les termes intermédiaires.\nPour la suite $V$ de la leçon, la chaîne correcte donne $V_3 = 21$ puis $V_4 = 37$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q6",
            "type": "mcq",
            "prompt": "Pour cette même suite, le terme $V_4$ vaut :",
            "options": [
              "$37$",
              "$23$",
              "$45$",
              "$41$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La chaîne est $V_1 = 9$, $V_2 = 13$, $V_3 = 2 \\times 13 - 5 = 21$, puis $V_4 = 2 \\times 21 - 5 = 37$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q1",
          "type": "mcq",
          "prompt": "Une suite définie par une formule explicite est une suite dont :",
          "options": [
            "Le terme général s’écrit directement en fonction de $n$",
            "Le premier terme n’est pas donné",
            "Les termes se lisent seulement sur un graphique",
            "Chaque terme dépend du terme précédent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec une formule explicite, $U_n = f(n)$ donne directement le terme d’indice $n$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q2",
          "type": "mcq",
          "prompt": "Pour $W_n = -6 \\times \\left(\\frac{1}{2}\\right)^n + 10$, le terme $W_0$ vaut :",
          "options": [
            "$10$",
            "$-6$",
            "$4$",
            "$16$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La puissance d’exposant $0$ vaut $1$, donc $W_0 = -6 \\times 1 + 10 = 4$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q3",
          "type": "mcq",
          "prompt": "Le terme $W_5$ de cette suite vaut :",
          "options": [
            "$\\frac{157}{16}$",
            "$\\frac{157}{12}$",
            "$\\frac{151}{16}$",
            "$9{,}5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $-6 \\times \\frac{1}{32} + 10 = -\\frac{3}{16} + 10 = \\frac{157}{16}$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q4",
          "type": "mcq",
          "prompt": "Pour définir une suite par récurrence, il faut donner :",
          "options": [
            "Un premier terme et une relation entre termes consécutifs",
            "Un graphique",
            "La somme des termes",
            "Seulement le terme général"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition par récurrence repose sur un terme de départ et la relation $U_{n+1} = f(U_n)$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q5",
          "type": "mcq",
          "prompt": "Pour cette suite, le terme $V_2$ vaut :",
          "options": [
            "$14$",
            "$11$",
            "$16$",
            "$13$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule d’abord $V_1 = 9$, puis $V_2 = 2 \\times 9 - 5 = 13$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p02_q6",
          "type": "mcq",
          "prompt": "Pour cette même suite, le terme $V_4$ vaut :",
          "options": [
            "$37$",
            "$23$",
            "$45$",
            "$41$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La chaîne est $V_1 = 9$, $V_2 = 13$, $V_3 = 2 \\times 13 - 5 = 21$, puis $V_4 = 2 \\times 21 - 5 = 37$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03",
      "order": 3,
      "title": "Représentation graphique d’une suite",
      "summary": "Représenter les premiers termes d’une suite explicite ou définie par récurrence.",
      "conceptExplanation": "Pour une suite définie par une formule explicite $U_n = f(n)$, on représente la courbe de la fonction $f$ associée, puis on détermine graphiquement les termes $U_0 = f(0)$, $U_1 = f(1)$, $U_2 = f(2)$, et ainsi de suite. La leçon illustre cette méthode avec la suite $U_n = 2n + 1$.\nPour une suite définie par une formule de récurrence $U_{n+1} = f(U_n)$, on trace en plus la première bissectrice, droite d’équation $y = x$ : on marque $U_0$ sur l’axe des abscisses, on projette verticalement sur la courbe, horizontalement sur la bissectrice, puis verticalement sur l’axe des abscisses pour obtenir $U_1$, et on recommence.",
      "keyRule": "Le graphique d’une suite vit sur les abscisses entières ; la bissectrice sert de pont entre deux termes consécutifs.",
      "formulas": [],
      "workedExample": {
        "title": "Les quatre premiers termes de l’exercice 9",
        "statement": "Pour la suite définie par $U_0 = 1$ et $U_{n+1} = 2U_n + 1$, détermine les termes à représenter sur l’axe des abscisses.",
        "methodSteps": [
          "Le terme de départ est $U_0 = 1$.",
          "On applique la relation : $U_1 = 3$ puis $U_2 = 7$.",
          "Un pas de plus donne $U_3 = 15$."
        ],
        "conclusion": "Les quatre premiers termes à placer sur l’axe des abscisses sont $1$, $3$, $7$ et $15$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Représenter une suite explicite",
          "stepTheme": "Représenter une suite explicite",
          "stepBadge": "Représenter une suite explicite",
          "paragraphText": "• Méthode : pour une suite explicite $U_n = f(n)$, on représente la courbe de la fonction $f$ associée.\nOn détermine ensuite graphiquement les termes $U_0 = f(0)$, $U_1 = f(1)$, $U_2 = f(2)$, et ainsi de suite.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q1",
            "type": "mcq",
            "prompt": "Pour représenter graphiquement une suite explicite, on commence par :",
            "options": [
              "Représenter la courbe de la fonction associée",
              "Calculer la somme des termes",
              "Placer le premier terme sur l’axe des ordonnées seulement",
              "Tracer la première bissectrice"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La méthode de la leçon part de la courbe de la fonction $f$ dont la suite est extraite."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les premiers termes de la suite Un égale 2n plus 1",
          "stepTheme": "Les premiers termes de la suite Un égale 2n plus 1",
          "stepBadge": "Les premiers termes de la suite Un égale 2n plus 1",
          "paragraphText": "• Exemple de la leçon : la suite définie par $U_n = 2n + 1$ a pour premiers termes ceux que l’on lit sur la droite associée.\nEn remplaçant $n$ par $0$, $1$ et $2$, on obtient $1$, $3$ et $5$, qui sont les points représentés.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q2",
            "type": "mcq",
            "prompt": "Les trois premiers termes de la suite $U_n = 2n + 1$ sont :",
            "options": [
              "$1$, $2$, $3$",
              "$3$, $5$, $7$",
              "$1$, $3$, $5$",
              "$2$, $4$, $6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $U_0 = 1$, $U_1 = 3$ et $U_2 = 5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Représenter une suite définie par récurrence",
          "stepTheme": "Représenter une suite définie par récurrence",
          "stepBadge": "Représenter une suite définie par récurrence",
          "paragraphText": "• Méthode : pour une récurrence $U_{n+1} = f(U_n)$, on représente la courbe de $f$ et la droite d’équation $y = x$, appelée première bissectrice.\nOn marque $U_0$ sur l’axe des abscisses, puis on projette verticalement sur la courbe, horizontalement sur la bissectrice, et verticalement sur l’axe des abscisses pour obtenir $U_1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q3",
            "type": "mcq",
            "prompt": "Dans la représentation d’une suite récurrente, la droite d’équation $y = x$ sert à :",
            "options": [
              "Tracer la courbe des sommes",
              "Déterminer le nombre de termes",
              "Calculer la raison de la suite",
              "Reporter le terme obtenu sur l’axe des abscisses pour continuer la construction"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La projection horizontale sur la première bissectrice ramène la valeur obtenue sur l’axe des abscisses, ce qui permet d’enchaîner."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Enchaîner la construction",
          "stepTheme": "Enchaîner la construction",
          "stepBadge": "Enchaîner la construction",
          "paragraphText": "• Méthode : le même processus se refait avec $U_1$ pour obtenir $U_2$, puis avec $U_2$ pour obtenir $U_3$.\nLa leçon illustre cette construction avec une suite définie par $U_0 = 0$ et une relation de récurrence.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q4",
            "type": "mcq",
            "prompt": "Après avoir obtenu $U_1$ sur l’axe des abscisses, pour obtenir $U_2$ on :",
            "options": [
              "On trace une nouvelle courbe",
              "On calcule la moyenne de $U_0$ et $U_1$",
              "On recommence depuis $U_0$",
              "On applique le même processus de projections à partir de $U_1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La construction est itérative : chaque terme obtenu devient le point de départ du pas suivant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’exercice 9 : quatre termes sur l’axe des abscisses",
          "stepTheme": "L’exercice 9 : quatre termes sur l’axe des abscisses",
          "stepBadge": "L’exercice 9 : quatre termes sur l’axe des abscisses",
          "paragraphText": "• Exercice 9 de la leçon : on représente sur l’axe des abscisses les quatre premiers termes de la suite définie par $U_0 = 1$ et $U_{n+1} = 2U_n + 1$.\nPar le calcul, ces termes sont $1$, $3$, $7$ et $15$ : ce sont eux que la construction place sur l’axe.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q5",
            "type": "mcq",
            "prompt": "Les quatre premiers termes de cette suite sont :",
            "options": [
              "$1$, $3$, $5$, $7$",
              "$1$, $3$, $7$, $15$",
              "$1$, $4$, $7$, $10$",
              "$1$, $2$, $4$, $8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $U_1 = 2 \\times 1 + 1 = 3$, $U_2 = 2 \\times 3 + 1 = 7$ et $U_3 = 2 \\times 7 + 1 = 15$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège des points d’une suite",
          "stepTheme": "Le piège des points d’une suite",
          "stepBadge": "Le piège des points d’une suite",
          "paragraphText": "• Piège : les termes d’une suite se représentent par des points isolés d’abscisses entières, pas par une courbe continue reliant tous les réels.\nLa courbe de la fonction associée n’est qu’un support de construction et de lecture.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q6",
            "type": "mcq",
            "prompt": "Comment les termes d’une suite apparaissent-ils sur un graphique ?",
            "options": [
              "Comme des points d’abscisses entières $0$, $1$, $2$, et ainsi de suite",
              "Comme une droite unique",
              "Comme des barres d’histogramme",
              "Comme une courbe continue sur tous les réels"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une suite n’est définie que sur $\\mathbb{N}$ : seuls les points d’abscisses entières correspondent à ses termes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q1",
          "type": "mcq",
          "prompt": "Pour représenter graphiquement une suite explicite, on commence par :",
          "options": [
            "Représenter la courbe de la fonction associée",
            "Calculer la somme des termes",
            "Placer le premier terme sur l’axe des ordonnées seulement",
            "Tracer la première bissectrice"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La méthode de la leçon part de la courbe de la fonction $f$ dont la suite est extraite."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q2",
          "type": "mcq",
          "prompt": "Les trois premiers termes de la suite $U_n = 2n + 1$ sont :",
          "options": [
            "$1$, $2$, $3$",
            "$3$, $5$, $7$",
            "$1$, $3$, $5$",
            "$2$, $4$, $6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $U_0 = 1$, $U_1 = 3$ et $U_2 = 5$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q3",
          "type": "mcq",
          "prompt": "Dans la représentation d’une suite récurrente, la droite d’équation $y = x$ sert à :",
          "options": [
            "Tracer la courbe des sommes",
            "Déterminer le nombre de termes",
            "Calculer la raison de la suite",
            "Reporter le terme obtenu sur l’axe des abscisses pour continuer la construction"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La projection horizontale sur la première bissectrice ramène la valeur obtenue sur l’axe des abscisses, ce qui permet d’enchaîner."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q4",
          "type": "mcq",
          "prompt": "Après avoir obtenu $U_1$ sur l’axe des abscisses, pour obtenir $U_2$ on :",
          "options": [
            "On trace une nouvelle courbe",
            "On calcule la moyenne de $U_0$ et $U_1$",
            "On recommence depuis $U_0$",
            "On applique le même processus de projections à partir de $U_1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La construction est itérative : chaque terme obtenu devient le point de départ du pas suivant."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q5",
          "type": "mcq",
          "prompt": "Les quatre premiers termes de cette suite sont :",
          "options": [
            "$1$, $3$, $5$, $7$",
            "$1$, $3$, $7$, $15$",
            "$1$, $4$, $7$, $10$",
            "$1$, $2$, $4$, $8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $U_1 = 2 \\times 1 + 1 = 3$, $U_2 = 2 \\times 3 + 1 = 7$ et $U_3 = 2 \\times 7 + 1 = 15$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p03_q6",
          "type": "mcq",
          "prompt": "Comment les termes d’une suite apparaissent-ils sur un graphique ?",
          "options": [
            "Comme des points d’abscisses entières $0$, $1$, $2$, et ainsi de suite",
            "Comme une droite unique",
            "Comme des barres d’histogramme",
            "Comme une courbe continue sur tous les réels"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une suite n’est définie que sur $\\mathbb{N}$ : seuls les points d’abscisses entières correspondent à ses termes."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04",
      "order": 4,
      "title": "Suites arithmétiques : définition et terme général",
      "summary": "Reconnaître une suite arithmétique, donner sa raison et exprimer son terme général.",
      "conceptExplanation": "Une suite $(U_n)$ est arithmétique s’il existe un nombre réel $r$ tel que, pour tout entier $n$, $U_{n+1} = U_n + r$ ; le nombre $r$ est la raison de la suite.\nPropriété : pour tous entiers $n$ et $k$, $U_n = U_k + (n - k) \\times r$. Cas particuliers : $U_n = U_0 + n \\times r$ et $U_n = U_1 + (n - 1) \\times r$.\nDans l’exemple de la leçon, la suite de terme général $U_n = \\frac{1}{2}n - 3$ est arithmétique de raison $\\frac{1}{2}$ et de premier terme $-3$.",
      "keyRule": "Arithmétique signifie « on ajoute toujours la même raison » ; le terme général compte le nombre de pas depuis le terme de départ.",
      "formulas": [
        {
          "name": "Récurrence arithmétique",
          "formula": "U_{n+1} = U_n + r"
        },
        {
          "name": "Terme général",
          "formula": "U_n = U_k + (n - k)r"
        }
      ],
      "workedExample": {
        "title": "Le terme général de l’exercice de fixation",
        "statement": "Exprime en fonction de $n$ le terme général de la suite arithmétique de raison $-4$ et de premier terme $U_0 = 5$.",
        "methodSteps": [
          "On utilise le cas particulier $U_n = U_0 + n \\times r$.",
          "On remplace : $U_n = 5 + n \\times (-4)$."
        ],
        "conclusion": "Pour tout entier $n$, $U_n = 5 - 4n$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une suite arithmétique",
          "stepTheme": "La définition d’une suite arithmétique",
          "stepBadge": "La définition d’une suite arithmétique",
          "paragraphText": "• Définition : une suite $(U_n)$ est arithmétique s’il existe un nombre réel $r$ tel que, pour tout entier $n$, $U_{n+1} = U_n + r$.\nLe nombre $r$ est appelé la raison de la suite.",
          "formula": {
            "name": "Suite arithmétique",
            "formula": "U_{n+1} = U_n + r"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q1",
            "type": "mcq",
            "prompt": "Une suite arithmétique est caractérisée par une relation du type :",
            "options": [
              "$U_{n+1} = U_n + r$ avec $r$ réel",
              "$U_{n+1} = U_n^2$",
              "$U_{n+1} = \\frac{r}{U_n}$",
              "$U_{n+1} = q \\times U_n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On passe d’un terme au suivant en ajoutant toujours la même raison $r$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une suite arithmétique explicite",
          "stepTheme": "Reconnaître une suite arithmétique explicite",
          "stepBadge": "Reconnaître une suite arithmétique explicite",
          "paragraphText": "• Exemple de la leçon : la suite de terme général $U_n = \\frac{1}{2}n - 3$ vérifie $U_{n+1} = U_n + \\frac{1}{2}$.\nElle est donc arithmétique, de raison $\\frac{1}{2}$ et de premier terme $U_0 = -3$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q2",
            "type": "mcq",
            "prompt": "La raison de la suite de terme général $U_n = \\frac{1}{2}n - 3$ est :",
            "options": [
              "$\\frac{1}{2}$",
              "$2$",
              "$-\\frac{1}{2}$",
              "$-3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La différence entre deux termes consécutifs est constante et vaut le coefficient de $n$, c’est-à-dire $\\frac{1}{2}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le terme général d’une suite arithmétique",
          "stepTheme": "Le terme général d’une suite arithmétique",
          "stepBadge": "Le terme général d’une suite arithmétique",
          "paragraphText": "• Propriété : pour une suite arithmétique de raison $r$, on a $U_n = U_k + (n - k) \\times r$ pour tous entiers $n$ et $k$.\nCas particuliers de la leçon : $U_n = U_0 + n \\times r$ et $U_n = U_1 + (n - 1) \\times r$.",
          "formula": {
            "name": "Terme général arithmétique",
            "formula": "U_n = U_k + (n - k)r"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q3",
            "type": "mcq",
            "prompt": "Pour une suite arithmétique de raison $r$, le terme $U_n$ s’exprime à partir de $U_0$ par :",
            "options": [
              "$U_n = U_0 \\times r^n$",
              "$U_n = U_0 + (n - 1) \\times r$",
              "$U_n = U_0 + n \\times r$",
              "$U_n = U_0 - n \\times r$ dans tous les cas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le cas particulier de la propriété avec $k = 0$ donne $U_n = U_0 + n \\times r$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’exercice de fixation : raison négative",
          "stepTheme": "L’exercice de fixation : raison négative",
          "stepBadge": "L’exercice de fixation : raison négative",
          "paragraphText": "• Exercice de fixation : la suite arithmétique de raison $-4$ et de premier terme $U_0 = 5$ a pour terme général $U_n = 5 + (-4) \\times n$.\nOn retient l’écriture simplifiée $U_n = 5 - 4n$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q4",
            "type": "mcq",
            "prompt": "Le terme général de cette suite est :",
            "options": [
              "$U_n = 5 - 4n$",
              "$U_n = -4 + 5n$",
              "$U_n = 9 - 4n$",
              "$U_n = 5 + 4n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On applique $U_n = U_0 + n \\times r$ avec $U_0 = 5$ et $r = -4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Partir d’un terme autre que le premier",
          "stepTheme": "Partir d’un terme autre que le premier",
          "stepBadge": "Partir d’un terme autre que le premier",
          "paragraphText": "• Exercice 4 de la leçon : la suite arithmétique de premier terme connu $U_2 = 5$ et de raison $-3$ vérifie $U_n = U_2 + (n - 2) \\times (-3)$.\nLe développement donne $U_n = -3n + 11$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q5",
            "type": "mcq",
            "prompt": "Le terme général de cette suite est :",
            "options": [
              "$U_n = -3n + 5$",
              "$U_n = 3n + 11$",
              "$U_n = -3n + 11$",
              "$U_n = -3n - 11$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On développe $5 + (n - 2) \\times (-3) = 5 - 3n + 6 = -3n + 11$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Retrouver la raison entre deux termes éloignés",
          "stepTheme": "Retrouver la raison entre deux termes éloignés",
          "stepBadge": "Retrouver la raison entre deux termes éloignés",
          "paragraphText": "• Exercice 5 de la leçon : pour une suite arithmétique, $U_9 = U_6 + 3 \\times r$, car trois pas séparent les indices $6$ et $9$.\nAvec $U_6 = -3$ et $U_9 = -6$, on obtient $3 \\times r = -3$. Le piège serait de diviser par l’écart des valeurs au lieu de l’écart des indices.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q6",
            "type": "mcq",
            "prompt": "La raison de cette suite est :",
            "options": [
              "$-3$",
              "$1$",
              "$-1$",
              "$3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On résout $-3 + 3 \\times r = -6$, donc $3 \\times r = -3$ et $r = -1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q1",
          "type": "mcq",
          "prompt": "Une suite arithmétique est caractérisée par une relation du type :",
          "options": [
            "$U_{n+1} = U_n + r$ avec $r$ réel",
            "$U_{n+1} = U_n^2$",
            "$U_{n+1} = \\frac{r}{U_n}$",
            "$U_{n+1} = q \\times U_n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On passe d’un terme au suivant en ajoutant toujours la même raison $r$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q2",
          "type": "mcq",
          "prompt": "La raison de la suite de terme général $U_n = \\frac{1}{2}n - 3$ est :",
          "options": [
            "$\\frac{1}{2}$",
            "$2$",
            "$-\\frac{1}{2}$",
            "$-3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La différence entre deux termes consécutifs est constante et vaut le coefficient de $n$, c’est-à-dire $\\frac{1}{2}$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q3",
          "type": "mcq",
          "prompt": "Pour une suite arithmétique de raison $r$, le terme $U_n$ s’exprime à partir de $U_0$ par :",
          "options": [
            "$U_n = U_0 \\times r^n$",
            "$U_n = U_0 + (n - 1) \\times r$",
            "$U_n = U_0 + n \\times r$",
            "$U_n = U_0 - n \\times r$ dans tous les cas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le cas particulier de la propriété avec $k = 0$ donne $U_n = U_0 + n \\times r$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q4",
          "type": "mcq",
          "prompt": "Le terme général de cette suite est :",
          "options": [
            "$U_n = 5 - 4n$",
            "$U_n = -4 + 5n$",
            "$U_n = 9 - 4n$",
            "$U_n = 5 + 4n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On applique $U_n = U_0 + n \\times r$ avec $U_0 = 5$ et $r = -4$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q5",
          "type": "mcq",
          "prompt": "Le terme général de cette suite est :",
          "options": [
            "$U_n = -3n + 5$",
            "$U_n = 3n + 11$",
            "$U_n = -3n + 11$",
            "$U_n = -3n - 11$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On développe $5 + (n - 2) \\times (-3) = 5 - 3n + 6 = -3n + 11$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p04_q6",
          "type": "mcq",
          "prompt": "La raison de cette suite est :",
          "options": [
            "$-3$",
            "$1$",
            "$-1$",
            "$3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On résout $-3 + 3 \\times r = -6$, donc $3 \\times r = -3$ et $r = -1$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05",
      "order": 5,
      "title": "Sommes de termes d’une suite arithmétique",
      "summary": "Calculer la somme de termes consécutifs d’une suite arithmétique à partir des termes extrêmes.",
      "conceptExplanation": "Propriété : la somme de $n$ termes consécutifs d’une suite arithmétique est égale au produit par $n$ de la demi-somme des termes extrêmes.\nConséquences de la leçon : la somme des termes d’indices $1$ à $n$ vaut $n \\times \\frac{U_1 + U_n}{2}$, et la somme des termes d’indices $k$ à $j$ vaut $(j - k + 1) \\times \\frac{U_k + U_j}{2}$.\nExemples de la leçon : la somme des entiers de $1$ à $2020$ vaut $2\\ 041\\ 210$, et celle des nombres pairs de $2$ à $2n$ vaut $n \\times (n + 1)$.",
      "keyRule": "Compte les termes, prends les deux extrêmes, fais leur demi-somme : c’est toute la formule.",
      "formulas": [
        {
          "name": "Somme de termes consécutifs",
          "formula": "S = n \\times \\frac{\\text{premier} + \\text{dernier}}{2}"
        }
      ],
      "workedExample": {
        "title": "La somme des entiers de 1 à 2020",
        "statement": "Calcule la somme des entiers de $1$ à $2020$.",
        "methodSteps": [
          "Il y a $2020$ termes, le premier vaut $1$ et le dernier vaut $2020$.",
          "On applique la propriété : la somme vaut $2020$ fois la demi-somme des extrêmes."
        ],
        "conclusion": "La somme vaut $2\\ 041\\ 210$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La propriété de la somme arithmétique",
          "stepTheme": "La propriété de la somme arithmétique",
          "stepBadge": "La propriété de la somme arithmétique",
          "paragraphText": "• Propriété : la somme de $n$ termes consécutifs d’une suite arithmétique est égale au produit par $n$ de la demi-somme des termes extrêmes.\nIl faut donc connaître le nombre de termes, le premier et le dernier terme de la somme.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q1",
            "type": "mcq",
            "prompt": "La somme de termes consécutifs d’une suite arithmétique se calcule avec :",
            "options": [
              "Le produit de tous les termes",
              "La raison multipliée par le dernier terme",
              "La demi-somme de tous les termes",
              "Le nombre de termes multiplié par la demi-somme des termes extrêmes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la propriété de la leçon : nombre de termes fois demi-somme des extrêmes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les deux conséquences de la leçon",
          "stepTheme": "Les deux conséquences de la leçon",
          "stepBadge": "Les deux conséquences de la leçon",
          "paragraphText": "• Conséquences : la somme des termes d’indices $1$ à $n$ vaut $n$ fois la demi-somme de $U_1$ et de $U_n$.\nPlus généralement, de l’indice $k$ à l’indice $j$, le nombre de termes est $j - k + 1$ et la somme vaut ce nombre fois la demi-somme de $U_k$ et de $U_j$.",
          "formula": {
            "name": "Somme arithmétique",
            "formula": "S = (j - k + 1) \\times \\frac{U_k + U_j}{2}"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q2",
            "type": "mcq",
            "prompt": "Combien de termes contient la somme des termes d’indices $3$ à $77$ ?",
            "options": [
              "$74$",
              "$75$",
              "$77$",
              "$80$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le nombre de termes est $77 - 3 + 1 = 75$, comme dans l’exemple de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La somme des entiers de 1 à 2020",
          "stepTheme": "La somme des entiers de 1 à 2020",
          "stepBadge": "La somme des entiers de 1 à 2020",
          "paragraphText": "• Exemple de la leçon : la somme des entiers de $1$ à $2020$ compte $2020$ termes, de premier terme $1$ et de dernier terme $2020$.\nLa demi-somme des extrêmes vaut $\\frac{2021}{2}$, ce qui donne le résultat de la leçon.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q3",
            "type": "mcq",
            "prompt": "La somme des entiers de $1$ à $2020$ vaut :",
            "options": [
              "$4\\ 082\\ 420$",
              "$2\\ 020\\ 000$",
              "$1\\ 020\\ 605$",
              "$2\\ 041\\ 210$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $2020 \\times \\frac{1 + 2020}{2} = 2020 \\times \\frac{2021}{2} = 2\\ 041\\ 210$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La somme des nombres pairs jusqu’à 2n",
          "stepTheme": "La somme des nombres pairs jusqu’à 2n",
          "stepBadge": "La somme des nombres pairs jusqu’à 2n",
          "paragraphText": "• Exemple de la leçon : la somme des nombres pairs de $2$ à $2n$ compte $n$ termes.\nElle vaut $n$ fois la demi-somme de $2$ et de $2n$, c’est-à-dire $n \\times (n + 1)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q4",
            "type": "mcq",
            "prompt": "La somme des nombres pairs de $2$ à $2n$ est égale à :",
            "options": [
              "$n^2$",
              "$n \\times (n + 1)$",
              "$2n^2$",
              "$(n + 1)^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $n \\times \\frac{2 + 2n}{2} = n \\times (n + 1)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La somme des cent premiers nombres impairs",
          "stepTheme": "La somme des cent premiers nombres impairs",
          "stepBadge": "La somme des cent premiers nombres impairs",
          "paragraphText": "• Exercice 7 de la leçon : la suite $U_n = 2n + 1$ est arithmétique de raison $2$ ; ses termes sont les nombres impairs.\nLa somme des cent premiers nombres impairs est la somme des termes d’indices $0$ à $99$, avec $U_{99} = 199$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q5",
            "type": "mcq",
            "prompt": "La somme des cent premiers nombres impairs vaut :",
            "options": [
              "$9\\ 900$",
              "$19\\ 900$",
              "$10\\ 000$",
              "$20\\ 000$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $100 \\times \\frac{1 + 199}{2} = 100 \\times 100 = 10\\ 000$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège du nombre de termes",
          "stepTheme": "Le piège du nombre de termes",
          "stepBadge": "Le piège du nombre de termes",
          "paragraphText": "• Piège : le nombre de termes d’une somme d’indices $k$ à $j$ est $j - k + 1$, et non $j - k$.\nDans l’exemple de la leçon, la somme des termes d’indices $3$ à $77$ d’une suite de raison $9$ vaut $26\\ 850$ avec $75$ termes ; avec $74$ termes, le résultat serait faux.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q6",
            "type": "mcq",
            "prompt": "Dans cet exemple de la leçon, la somme des termes d’indices $3$ à $77$ vaut :",
            "options": [
              "$25\\ 100$",
              "$28\\ 600$",
              "$26\\ 000$",
              "$26\\ 850$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les termes extrêmes sont $U_3 = 25$ et $U_{77} = 691$ ; on calcule $75 \\times \\frac{25 + 691}{2} = 75 \\times 358 = 26\\ 850$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q1",
          "type": "mcq",
          "prompt": "La somme de termes consécutifs d’une suite arithmétique se calcule avec :",
          "options": [
            "Le produit de tous les termes",
            "La raison multipliée par le dernier terme",
            "La demi-somme de tous les termes",
            "Le nombre de termes multiplié par la demi-somme des termes extrêmes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la propriété de la leçon : nombre de termes fois demi-somme des extrêmes."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q2",
          "type": "mcq",
          "prompt": "Combien de termes contient la somme des termes d’indices $3$ à $77$ ?",
          "options": [
            "$74$",
            "$75$",
            "$77$",
            "$80$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le nombre de termes est $77 - 3 + 1 = 75$, comme dans l’exemple de la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q3",
          "type": "mcq",
          "prompt": "La somme des entiers de $1$ à $2020$ vaut :",
          "options": [
            "$4\\ 082\\ 420$",
            "$2\\ 020\\ 000$",
            "$1\\ 020\\ 605$",
            "$2\\ 041\\ 210$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $2020 \\times \\frac{1 + 2020}{2} = 2020 \\times \\frac{2021}{2} = 2\\ 041\\ 210$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q4",
          "type": "mcq",
          "prompt": "La somme des nombres pairs de $2$ à $2n$ est égale à :",
          "options": [
            "$n^2$",
            "$n \\times (n + 1)$",
            "$2n^2$",
            "$(n + 1)^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $n \\times \\frac{2 + 2n}{2} = n \\times (n + 1)$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q5",
          "type": "mcq",
          "prompt": "La somme des cent premiers nombres impairs vaut :",
          "options": [
            "$9\\ 900$",
            "$19\\ 900$",
            "$10\\ 000$",
            "$20\\ 000$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $100 \\times \\frac{1 + 199}{2} = 100 \\times 100 = 10\\ 000$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p05_q6",
          "type": "mcq",
          "prompt": "Dans cet exemple de la leçon, la somme des termes d’indices $3$ à $77$ vaut :",
          "options": [
            "$25\\ 100$",
            "$28\\ 600$",
            "$26\\ 000$",
            "$26\\ 850$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les termes extrêmes sont $U_3 = 25$ et $U_{77} = 691$ ; on calcule $75 \\times \\frac{25 + 691}{2} = 75 \\times 358 = 26\\ 850$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06",
      "order": 6,
      "title": "Suites géométriques : définition et terme général",
      "summary": "Reconnaître une suite géométrique, donner sa raison et exprimer son terme général.",
      "conceptExplanation": "Une suite $(U_n)$ est géométrique s’il existe un nombre réel $q$ tel que, pour tout entier $n$, $U_{n+1} = q \\times U_n$ ; le nombre $q$ est la raison de la suite.\nPropriété : pour un entier $k$ inférieur à $n$, $U_n = q^{n - k} \\times U_k$. Cas particuliers : $U_n = q^n \\times U_0$ et $U_n = q^{n - 1} \\times U_1$.\nDans l’exemple de la leçon, la suite de terme général $V_n = 3 \\times \\left(\\frac{1}{4}\\right)^n$ est géométrique de raison $\\frac{1}{4}$ et de premier terme $3$.",
      "keyRule": "Géométrique signifie « on multiplie toujours par la même raison » ; l’exposant compte le nombre de pas.",
      "formulas": [
        {
          "name": "Récurrence géométrique",
          "formula": "U_{n+1} = qU_n"
        },
        {
          "name": "Terme général",
          "formula": "U_n = q^{n - k} U_k"
        }
      ],
      "workedExample": {
        "title": "Le terme général de l’exercice de fixation",
        "statement": "Exprime en fonction de $n$ le terme général de la suite géométrique de raison $3$ et de premier terme $V_1 = 3$.",
        "methodSteps": [
          "On utilise le cas particulier $V_n = V_1 \\times q^{n - 1}$ pour $n \\geq 1$.",
          "On remplace : $V_n = 3 \\times 3^{n - 1}$."
        ],
        "conclusion": "Pour tout entier $n \\geq 1$, $V_n = 3^n$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une suite géométrique",
          "stepTheme": "La définition d’une suite géométrique",
          "stepBadge": "La définition d’une suite géométrique",
          "paragraphText": "• Définition : une suite $(U_n)$ est géométrique s’il existe un nombre réel $q$ tel que, pour tout entier $n$, $U_{n+1} = q \\times U_n$.\nLe nombre $q$ est appelé la raison de la suite.",
          "formula": {
            "name": "Suite géométrique",
            "formula": "U_{n+1} = qU_n"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q1",
            "type": "mcq",
            "prompt": "Une suite géométrique est caractérisée par une relation du type :",
            "options": [
              "$U_{n+1} = U_n + q$",
              "$U_{n+1} = q \\times U_n$ avec $q$ réel",
              "$U_{n+1} = U_n + n \\times q$",
              "$U_{n+1} = \\frac{U_n}{n}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On passe d’un terme au suivant en multipliant toujours par la même raison $q$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une suite géométrique explicite",
          "stepTheme": "Reconnaître une suite géométrique explicite",
          "stepBadge": "Reconnaître une suite géométrique explicite",
          "paragraphText": "• Exemple de la leçon : la suite de terme général $V_n = 3 \\times \\left(\\frac{1}{4}\\right)^n$ vérifie $V_{n+1} = \\frac{1}{4} \\times V_n$.\nElle est donc géométrique de raison $\\frac{1}{4}$ et de premier terme $V_0 = 3$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q2",
            "type": "mcq",
            "prompt": "La raison de la suite de terme général $V_n = 3 \\times \\left(\\frac{1}{4}\\right)^n$ est :",
            "options": [
              "$3$",
              "$\\frac{1}{3}$",
              "$\\frac{1}{4}$",
              "$4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le quotient de deux termes consécutifs est constant et vaut la base de la puissance, $\\frac{1}{4}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le terme général d’une suite géométrique",
          "stepTheme": "Le terme général d’une suite géométrique",
          "stepBadge": "Le terme général d’une suite géométrique",
          "paragraphText": "• Propriété : pour une suite géométrique de raison $q$, on a $U_n = q^{n - k} \\times U_k$.\nCas particuliers de la leçon : $U_n = q^n \\times U_0$ et $U_n = q^{n - 1} \\times U_1$.",
          "formula": {
            "name": "Terme général géométrique",
            "formula": "U_n = q^{n - k} U_k"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q3",
            "type": "mcq",
            "prompt": "Pour une suite géométrique de raison $q$, le terme $U_n$ s’exprime à partir de $U_1$ par :",
            "options": [
              "$U_n = U_1 + (n - 1) \\times q$",
              "$U_n = q^{n - 1} \\times U_1$",
              "$U_n = q^n \\times U_1$",
              "$U_n = U_1 \\times q \\times n$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "De l’indice $1$ à l’indice $n$, il y a $n - 1$ multiplications par $q$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’exercice de fixation : une puissance pure",
          "stepTheme": "L’exercice de fixation : une puissance pure",
          "stepBadge": "L’exercice de fixation : une puissance pure",
          "paragraphText": "• Exercice de fixation : la suite géométrique de raison $3$ et de premier terme $V_1 = 3$ vérifie $V_n = 3 \\times 3^{n - 1}$.\nLes puissances se rejoignent : le terme général est une puissance pure de $3$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q4",
            "type": "mcq",
            "prompt": "Le terme général de cette suite est :",
            "options": [
              "$V_n = 3n$",
              "$V_n = 3 + 3^{n - 1}$",
              "$V_n = 3^n$",
              "$V_n = n^3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On simplifie $3 \\times 3^{n - 1} = 3^n$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le terme général de l’exercice 2",
          "stepTheme": "Le terme général de l’exercice 2",
          "stepBadge": "Le terme général de l’exercice 2",
          "paragraphText": "• Exercice 2 de la leçon : la suite géométrique définie par $V_1 = -2$ et $V_{n+1} = -5 \\times V_n$ a pour raison $-5$.\nSon terme général s’écrit donc à partir de $V_1$ avec la puissance $n - 1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q5",
            "type": "mcq",
            "prompt": "Le terme général de cette suite est :",
            "options": [
              "$V_n = -2 \\times (-5)^n$",
              "$V_n = -2 \\times 5^{n - 1}$",
              "$V_n = 2 \\times (-5)^{n - 1}$",
              "$V_n = -2 \\times (-5)^{n - 1}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On applique $V_n = V_1 \\times q^{n - 1}$ avec $V_1 = -2$ et $q = -5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Retrouver la raison au carré : l’exercice 6",
          "stepTheme": "Retrouver la raison au carré : l’exercice 6",
          "stepBadge": "Retrouver la raison au carré : l’exercice 6",
          "paragraphText": "• Exercice 6 de la leçon : pour une suite géométrique, $V_3 = q^2 \\times V_1$, car deux multiplications séparent les indices $1$ et $3$.\nAvec $V_1 = -\\frac{3}{2}$ et $V_3 = -\\frac{27}{2}$, on obtient $q^2 = 9$ : le piège est d’oublier que deux raisons sont possibles.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q6",
            "type": "mcq",
            "prompt": "Les valeurs possibles de la raison dans cet exercice sont :",
            "options": [
              "$q = 3$ seulement",
              "$q = 9$ ou $q = -9$",
              "$q = 3$ ou $q = -3$",
              "$q = \\frac{1}{3}$ ou $q = -\\frac{1}{3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "De $q^2 = 9$, on tire deux valeurs opposées : $q = 3$ ou $q = -3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q1",
          "type": "mcq",
          "prompt": "Une suite géométrique est caractérisée par une relation du type :",
          "options": [
            "$U_{n+1} = U_n + q$",
            "$U_{n+1} = q \\times U_n$ avec $q$ réel",
            "$U_{n+1} = U_n + n \\times q$",
            "$U_{n+1} = \\frac{U_n}{n}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On passe d’un terme au suivant en multipliant toujours par la même raison $q$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q2",
          "type": "mcq",
          "prompt": "La raison de la suite de terme général $V_n = 3 \\times \\left(\\frac{1}{4}\\right)^n$ est :",
          "options": [
            "$3$",
            "$\\frac{1}{3}$",
            "$\\frac{1}{4}$",
            "$4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le quotient de deux termes consécutifs est constant et vaut la base de la puissance, $\\frac{1}{4}$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q3",
          "type": "mcq",
          "prompt": "Pour une suite géométrique de raison $q$, le terme $U_n$ s’exprime à partir de $U_1$ par :",
          "options": [
            "$U_n = U_1 + (n - 1) \\times q$",
            "$U_n = q^{n - 1} \\times U_1$",
            "$U_n = q^n \\times U_1$",
            "$U_n = U_1 \\times q \\times n$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "De l’indice $1$ à l’indice $n$, il y a $n - 1$ multiplications par $q$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q4",
          "type": "mcq",
          "prompt": "Le terme général de cette suite est :",
          "options": [
            "$V_n = 3n$",
            "$V_n = 3 + 3^{n - 1}$",
            "$V_n = 3^n$",
            "$V_n = n^3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On simplifie $3 \\times 3^{n - 1} = 3^n$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q5",
          "type": "mcq",
          "prompt": "Le terme général de cette suite est :",
          "options": [
            "$V_n = -2 \\times (-5)^n$",
            "$V_n = -2 \\times 5^{n - 1}$",
            "$V_n = 2 \\times (-5)^{n - 1}$",
            "$V_n = -2 \\times (-5)^{n - 1}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On applique $V_n = V_1 \\times q^{n - 1}$ avec $V_1 = -2$ et $q = -5$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p06_q6",
          "type": "mcq",
          "prompt": "Les valeurs possibles de la raison dans cet exercice sont :",
          "options": [
            "$q = 3$ seulement",
            "$q = 9$ ou $q = -9$",
            "$q = 3$ ou $q = -3$",
            "$q = \\frac{1}{3}$ ou $q = -\\frac{1}{3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "De $q^2 = 9$, on tire deux valeurs opposées : $q = 3$ ou $q = -3$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07",
      "order": 7,
      "title": "Sommes géométriques et baisse de production",
      "summary": "Calculer la somme de termes consécutifs d’une suite géométrique et modéliser une baisse en pourcentage.",
      "conceptExplanation": "Propriété : la somme de $n$ termes consécutifs d’une suite géométrique de premier terme $a$ et de raison $q$ différente de $1$ vaut $a \\times \\frac{1 - q^n}{1 - q}$ ; si $q = 1$, elle vaut le nombre de termes fois le premier terme.\nDe façon générale, la somme des termes d’indices $k$ à $k + p$ vaut $U_k \\times \\frac{1 - q^{p + 1}}{1 - q}$ quand $q$ est différente de $1$.\nDans la situation complexe de la leçon, une production de $65\\ 000$ articles qui baisse de $3$ pour cent par an suit une suite géométrique de raison $\\frac{97}{100}$, et elle passe sous le seuil de rentabilité de $56\\ 000$ articles en $2015$.",
      "keyRule": "Pour une somme géométrique, l’exposant est le nombre de termes ; pour un pourcentage, la raison est le coefficient multiplicateur.",
      "formulas": [
        {
          "name": "Somme géométrique",
          "formula": "S = a \\times \\frac{1 - q^n}{1 - q}"
        },
        {
          "name": "Production annuelle",
          "formula": "U_n = 65\\ 000 \\times \\left(\\frac{97}{100}\\right)^n"
        }
      ],
      "workedExample": {
        "title": "La somme T de l’exercice de fixation",
        "statement": "Calcule la somme des termes d’indices $1$ à $7$ de la suite de terme général $V_n = \\left(\\frac{1}{3}\\right)^n$.",
        "methodSteps": [
          "La somme compte $7$ termes, de premier terme $\\frac{1}{3}$ et de raison $\\frac{1}{3}$.",
          "On applique la formule avec la puissance septième de la raison."
        ],
        "conclusion": "La somme vaut $\\frac{1093}{2187}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La propriété de la somme géométrique",
          "stepTheme": "La propriété de la somme géométrique",
          "stepBadge": "La propriété de la somme géométrique",
          "paragraphText": "• Propriété : la somme de $n$ termes consécutifs d’une suite géométrique de premier terme $a$ et de raison $q$ différente de $1$ utilise la fraction formée avec $1 - q^n$ et $1 - q$.\nSi la raison vaut $1$, tous les termes sont égaux et la somme est le nombre de termes fois le premier terme.",
          "formula": {
            "name": "Somme géométrique",
            "formula": "S = a \\times \\frac{1 - q^n}{1 - q}"
          },
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q1",
            "type": "mcq",
            "prompt": "Si la raison d’une suite géométrique vaut $1$, la somme de $n$ termes consécutifs vaut :",
            "options": [
              "$0$",
              "Le nombre de termes fois le premier terme",
              "Le premier terme seulement",
              "La formule avec la fraction en $q$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quand $q = 1$, chaque terme égale le premier : la somme est le produit du nombre de termes par le premier terme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La forme générale de la somme",
          "stepTheme": "La forme générale de la somme",
          "stepBadge": "La forme générale de la somme",
          "paragraphText": "• Propriété générale : la somme des termes d’indices $k$ à $k + p$ compte $p + 1$ termes ; pour une raison différente de $1$, elle vaut le premier de ces termes fois la fraction en $q^{p + 1}$.\nL’exposant de la formule est donc le nombre de termes, pas le dernier indice.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q2",
            "type": "mcq",
            "prompt": "Dans la formule de la somme géométrique, l’exposant appliqué à la raison est :",
            "options": [
              "Le dernier indice de la somme",
              "Le premier indice de la somme",
              "Le nombre de termes de la somme",
              "Toujours l’indice $n$ du terme général"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La leçon écrit la somme avec la puissance $p + 1$, qui est exactement le nombre de termes additionnés."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’exercice de fixation : la somme T",
          "stepTheme": "L’exercice de fixation : la somme T",
          "stepBadge": "L’exercice de fixation : la somme T",
          "paragraphText": "• Exercice de fixation : pour la suite de terme général $V_n = \\left(\\frac{1}{3}\\right)^n$, la somme des termes d’indices $1$ à $7$ compte $7$ termes de premier terme $\\frac{1}{3}$ et de raison $\\frac{1}{3}$.\nLa formule donne une fraction de dénominateur $2187$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q3",
            "type": "mcq",
            "prompt": "Cette somme des termes d’indices $1$ à $7$ vaut :",
            "options": [
              "$\\frac{2186}{2187}$",
              "$\\frac{1093}{729}$",
              "$\\frac{1}{2}$",
              "$\\frac{1093}{2187}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $\\frac{1}{3} \\times \\frac{1 - \\left(\\frac{1}{3}\\right)^7}{1 - \\frac{1}{3}} = \\frac{1}{2} \\times \\left(1 - \\frac{1}{2187}\\right) = \\frac{1093}{2187}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Modéliser la baisse de production de la situation complexe",
          "stepTheme": "Modéliser la baisse de production de la situation complexe",
          "stepBadge": "Modéliser la baisse de production de la situation complexe",
          "paragraphText": "• Situation complexe : la production d’une usine baisse de $3$ pour cent chaque année ; la production de l’année $2010$ est de $65\\ 000$ articles.\nChaque année, la production est multipliée par $\\frac{97}{100}$ : la suite des productions est géométrique de raison $\\frac{97}{100}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q4",
            "type": "mcq",
            "prompt": "La raison de la suite des productions annuelles est :",
            "options": [
              "$\\frac{3}{100}$",
              "$\\frac{97}{100}$",
              "$\\frac{100}{97}$",
              "$1{,}03$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une baisse de $3$ pour cent revient à multiplier par $1 - \\frac{3}{100} = \\frac{97}{100}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’année où la production cesse d’être rentable",
          "stepTheme": "L’année où la production cesse d’être rentable",
          "stepBadge": "L’année où la production cesse d’être rentable",
          "paragraphText": "• Situation complexe : le terme général de la production est $U_n = 65\\ 000 \\times \\left(\\frac{97}{100}\\right)^n$, et la production n’est plus rentable sous $56\\ 000$ articles.\nLes valeurs successives donnent encore $57\\ 544$ articles en $2014$, puis environ $55\\ 818$ en $2015$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q5",
            "type": "mcq",
            "prompt": "À partir de quelle année la production n’est-elle plus rentable ?",
            "options": [
              "$2014$",
              "$2016$",
              "$2013$",
              "$2015$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En $2015$, la production vaut environ $55\\ 818$ articles, sous le seuil de $56\\ 000$ : c’est la première année non rentable."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège du pourcentage de baisse",
          "stepTheme": "Le piège du pourcentage de baisse",
          "stepBadge": "Le piège du pourcentage de baisse",
          "paragraphText": "• Piège : une baisse de $3$ pour cent ne correspond pas à une raison de $\\frac{3}{100}$ ni à une soustraction renouvelée du même montant.\nChaque année, la baisse porte sur la production de l’année précédente : c’est bien une multiplication par $\\frac{97}{100}$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q6",
            "type": "mcq",
            "prompt": "Pourquoi la suite des productions est-elle géométrique et non arithmétique ?",
            "options": [
              "Parce que la production diminue",
              "Parce que chaque année on multiplie par le même coefficient $\\frac{97}{100}$",
              "Parce que le premier terme est grand",
              "Parce que les années se suivent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le pourcentage s’applique chaque année à la valeur précédente : le coefficient multiplicateur constant caractérise une suite géométrique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q1",
          "type": "mcq",
          "prompt": "Si la raison d’une suite géométrique vaut $1$, la somme de $n$ termes consécutifs vaut :",
          "options": [
            "$0$",
            "Le nombre de termes fois le premier terme",
            "Le premier terme seulement",
            "La formule avec la fraction en $q$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Quand $q = 1$, chaque terme égale le premier : la somme est le produit du nombre de termes par le premier terme."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q2",
          "type": "mcq",
          "prompt": "Dans la formule de la somme géométrique, l’exposant appliqué à la raison est :",
          "options": [
            "Le dernier indice de la somme",
            "Le premier indice de la somme",
            "Le nombre de termes de la somme",
            "Toujours l’indice $n$ du terme général"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La leçon écrit la somme avec la puissance $p + 1$, qui est exactement le nombre de termes additionnés."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q3",
          "type": "mcq",
          "prompt": "Cette somme des termes d’indices $1$ à $7$ vaut :",
          "options": [
            "$\\frac{2186}{2187}$",
            "$\\frac{1093}{729}$",
            "$\\frac{1}{2}$",
            "$\\frac{1093}{2187}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $\\frac{1}{3} \\times \\frac{1 - \\left(\\frac{1}{3}\\right)^7}{1 - \\frac{1}{3}} = \\frac{1}{2} \\times \\left(1 - \\frac{1}{2187}\\right) = \\frac{1093}{2187}$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q4",
          "type": "mcq",
          "prompt": "La raison de la suite des productions annuelles est :",
          "options": [
            "$\\frac{3}{100}$",
            "$\\frac{97}{100}$",
            "$\\frac{100}{97}$",
            "$1{,}03$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une baisse de $3$ pour cent revient à multiplier par $1 - \\frac{3}{100} = \\frac{97}{100}$."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q5",
          "type": "mcq",
          "prompt": "À partir de quelle année la production n’est-elle plus rentable ?",
          "options": [
            "$2014$",
            "$2016$",
            "$2013$",
            "$2015$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En $2015$, la production vaut environ $55\\ 818$ articles, sous le seuil de $56\\ 000$ : c’est la première année non rentable."
        },
        {
          "id": "premiere_c_maths_numerique_l15_suites_numeriques_p07_q6",
          "type": "mcq",
          "prompt": "Pourquoi la suite des productions est-elle géométrique et non arithmétique ?",
          "options": [
            "Parce que la production diminue",
            "Parce que chaque année on multiplie par le même coefficient $\\frac{97}{100}$",
            "Parce que le premier terme est grand",
            "Parce que les années se suivent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le pourcentage s’applique chaque année à la valeur précédente : le coefficient multiplicateur constant caractérise une suite géométrique."
        }
      ]
    }
  ]
};
