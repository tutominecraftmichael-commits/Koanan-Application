import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Suites numériques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Suites numériques » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L12_SUITES_NUMERIQUES: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l12_suites_numeriques",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 12,
  "title": "Leçon 12 : Suites numériques",
  "summary": "La leçon définit une suite numérique et ses deux présentations (formule explicite et formule de récurrence), décrit sa représentation graphique, puis étudie les suites arithmétiques et les suites géométriques : définitions, termes généraux et sommes de termes consécutifs.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Suites numériques » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01",
      "order": 1,
      "title": "Généralités sur les suites numériques",
      "summary": "Définir une suite numérique, sa notation et son terme général, et calculer des termes d’indice donné.",
      "conceptExplanation": "On appelle suite numérique toute fonction de $\\mathbb{N}$ vers $\\mathbb{R}$. L’image $U(n)$ de $n$ est généralement notée $U_n$ ; la suite est notée $(U_n)_{n \\in \\mathbb{N}}$ ou simplement $(U_n)$, et $U_n$ est appelé terme d’indice $n$ ou terme général de la suite.\nExemple de la leçon : parmi plusieurs fonctions, seule celle qui est définie sur $\\mathbb{N}$ est une suite numérique ; une fonction définie sur $\\mathbb{R}$ ne l’est pas.\nPour calculer un terme, on remplace $n$ par l’indice dans le terme général : pour $U_n = -5n + n^2$, on obtient $U_0 = 0$, $U_1 = -4$, $U_2 = -6$, $U_3 = -6$ et $U_4 = -4$.",
      "keyRule": "Une suite est une fonction dont les entrées sont exactement les entiers naturels ; chaque indice donne un terme et un seul.",
      "formulas": [
        {
          "name": "Suite numérique",
          "formula": "U : \\mathbb{N} \\to \\mathbb{R}, \\quad n \\mapsto U_n"
        }
      ],
      "workedExample": {
        "title": "Les cinq premiers termes d’une suite (exercice de la leçon)",
        "statement": "Soit la suite $(U_n)$ de terme général $U_n = -5n + n^2$ avec $n \\in \\mathbb{N}$. Calcule ses cinq premiers termes.",
        "methodSteps": [
          "On remplace successivement $n$ par $0$, $1$, $2$, $3$ et $4$ dans le terme général.",
          "On obtient $U_0 = 0$, $U_1 = -4$, $U_2 = -6$, $U_3 = -6$ et $U_4 = -4$."
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
          "paragraphText": "• Définition : on appelle suite numérique toute fonction de $\\mathbb{N}$ vers $\\mathbb{R}$.\nL’image $U(n)$ de $n$ est généralement notée $U_n$, et la suite ainsi définie est notée $(U_n)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q1",
            "type": "mcq",
            "prompt": "Une suite numérique est une fonction :",
            "options": [
              "De $\\mathbb{R}$ vers $\\mathbb{R}$",
              "De $\\mathbb{N}$ vers $\\mathbb{N}$ uniquement",
              "De $\\mathbb{R}$ vers $\\mathbb{N}$",
              "De $\\mathbb{N}$ vers $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Par définition, une suite numérique va de l’ensemble des entiers naturels vers l’ensemble des réels."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le terme général et l’indice",
          "stepTheme": "Le terme général et l’indice",
          "stepBadge": "Le terme général et l’indice",
          "paragraphText": "• Définition : $U_n$ est appelé terme d’indice $n$, ou terme général de la suite $(U_n)$.\nChaque entier naturel $n$ donne donc exactement un terme de la suite, son image par la fonction.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q2",
            "type": "mcq",
            "prompt": "Dans la notation $U_n$, le nombre $U_n$ est appelé :",
            "options": [
              "Le terme d’indice $n$, ou terme général",
              "L’indice de la suite",
              "La raison de la suite",
              "La somme de la suite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon : $U_n$ est le terme d’indice $n$, aussi appelé terme général."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La notation de la suite",
          "stepTheme": "La notation de la suite",
          "stepBadge": "La notation de la suite",
          "paragraphText": "• Notation : la suite définie par $n \\mapsto U_n$ se note $(U_n)_{n \\in \\mathbb{N}}$, ou simplement $(U_n)$.\nLes parenthèses distinguent la suite, ensemble de tous ses termes, d’un seul terme $U_n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q3",
            "type": "mcq",
            "prompt": "La suite de terme général $U_n$ se note :",
            "options": [
              "$U_n$ sans parenthèses",
              "$(U_n)$",
              "$\\{U_n\\}$ seulement",
              "$[U_n]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon note la suite $(U_n)$ ; sans parenthèses, $U_n$ désigne un seul terme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une suite parmi des fonctions",
          "stepTheme": "Reconnaître une suite parmi des fonctions",
          "stepBadge": "Reconnaître une suite parmi des fonctions",
          "paragraphText": "• Exemple de la leçon : parmi trois fonctions présentées, seule celle de la colonne C est une suite numérique.\nLes colonnes A et B donnent des fonctions définies sur $\\mathbb{R}$, alors que la colonne C donne une fonction définie sur $\\mathbb{N}$, à valeurs dans $\\mathbb{R}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q4",
            "type": "mcq",
            "prompt": "Pourquoi la fonction de la colonne C de l’exemple de la leçon est-elle la seule à être une suite numérique ?",
            "options": [
              "Parce que ses valeurs sont des fractions",
              "Parce que son expression contient la lettre $n$",
              "Parce qu’elle est croissante",
              "Parce qu’elle est définie sur $\\mathbb{N}$ et à valeurs dans $\\mathbb{R}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une suite est une fonction de $\\mathbb{N}$ vers $\\mathbb{R}$ : c’est le domaine de définition qui tranche, pas la forme de l’expression."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ n’est pas une suite",
          "stepTheme": "Une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ n’est pas une suite",
          "stepBadge": "Une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ n’est pas une suite",
          "paragraphText": "• Piège : une fonction définie sur $\\mathbb{R}$ tout entier, comme celle de la colonne A de l’exemple, n’est pas une suite numérique.\nCe qui fait la suite, c’est que seuls les entiers naturels servent d’entrées : on ne calcule des termes que pour $n$ entier naturel.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q5",
            "type": "mcq",
            "prompt": "La fonction $f$ de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(n) = 2n - 1$ pour tout réel $n$ est-elle une suite numérique ?",
            "options": [
              "Oui, car son expression ressemble à celle d’une suite",
              "Non, car elle est définie sur $\\mathbb{R}$ et non sur $\\mathbb{N}$",
              "Oui, car elle envoie des réels sur des réels",
              "Non, car elle est affine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "D’après l’exemple de la leçon, cette fonction de la colonne A n’est pas une suite : son ensemble de départ est $\\mathbb{R}$, pas $\\mathbb{N}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calculer un terme d’indice donné",
          "stepTheme": "Calculer un terme d’indice donné",
          "stepBadge": "Calculer un terme d’indice donné",
          "paragraphText": "• Exercice de la leçon : soit la suite de terme général $U_n = -5n + n^2$, avec $n \\in \\mathbb{N}$.\nOn calcule chaque terme en remplaçant $n$ par l’indice demandé : par exemple $U_2 = -5 \\times 2 + 2^2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q6",
            "type": "mcq",
            "prompt": "Pour la suite de terme général $U_n = -5n + n^2$, le terme $U_2$ vaut :",
            "options": [
              "$-4$",
              "$-6$",
              "$6$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $-5 \\times 2 + 4 = -10 + 4 = -6$ (corrigé de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q1",
          "type": "mcq",
          "prompt": "Une suite numérique est une fonction :",
          "options": [
            "De $\\mathbb{R}$ vers $\\mathbb{R}$",
            "De $\\mathbb{N}$ vers $\\mathbb{N}$ uniquement",
            "De $\\mathbb{R}$ vers $\\mathbb{N}$",
            "De $\\mathbb{N}$ vers $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Par définition, une suite numérique va de l’ensemble des entiers naturels vers l’ensemble des réels."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q2",
          "type": "mcq",
          "prompt": "Dans la notation $U_n$, le nombre $U_n$ est appelé :",
          "options": [
            "Le terme d’indice $n$, ou terme général",
            "L’indice de la suite",
            "La raison de la suite",
            "La somme de la suite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon : $U_n$ est le terme d’indice $n$, aussi appelé terme général."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q3",
          "type": "mcq",
          "prompt": "La suite de terme général $U_n$ se note :",
          "options": [
            "$U_n$ sans parenthèses",
            "$(U_n)$",
            "$\\{U_n\\}$ seulement",
            "$[U_n]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon note la suite $(U_n)$ ; sans parenthèses, $U_n$ désigne un seul terme."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q4",
          "type": "mcq",
          "prompt": "Pourquoi la fonction de la colonne C de l’exemple de la leçon est-elle la seule à être une suite numérique ?",
          "options": [
            "Parce que ses valeurs sont des fractions",
            "Parce que son expression contient la lettre $n$",
            "Parce qu’elle est croissante",
            "Parce qu’elle est définie sur $\\mathbb{N}$ et à valeurs dans $\\mathbb{R}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une suite est une fonction de $\\mathbb{N}$ vers $\\mathbb{R}$ : c’est le domaine de définition qui tranche, pas la forme de l’expression."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q5",
          "type": "mcq",
          "prompt": "La fonction $f$ de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(n) = 2n - 1$ pour tout réel $n$ est-elle une suite numérique ?",
          "options": [
            "Oui, car son expression ressemble à celle d’une suite",
            "Non, car elle est définie sur $\\mathbb{R}$ et non sur $\\mathbb{N}$",
            "Oui, car elle envoie des réels sur des réels",
            "Non, car elle est affine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "D’après l’exemple de la leçon, cette fonction de la colonne A n’est pas une suite : son ensemble de départ est $\\mathbb{R}$, pas $\\mathbb{N}$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q6",
          "type": "mcq",
          "prompt": "Pour la suite de terme général $U_n = -5n + n^2$, le terme $U_2$ vaut :",
          "options": [
            "$-4$",
            "$-6$",
            "$6$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $-5 \\times 2 + 4 = -10 + 4 = -6$ (corrigé de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02",
      "order": 2,
      "title": "Les deux présentations d’une suite",
      "summary": "Distinguer formule explicite et formule de récurrence, et calculer des termes dans les deux cas.",
      "conceptExplanation": "Une suite peut être définie par une formule explicite : le terme général s’écrit $U_n = f(n)$, où $f$ est une fonction définie dans $\\mathbb{R}_+$, comme $U_n = 3n + 5$ ou $W_n = -6\\left(\\frac{1}{2}\\right)^n + 10$, pour laquelle $W_0 = 4$ et $W_5 = \\frac{157}{16}$.\nUne suite peut aussi être définie par une formule de récurrence : on donne un premier terme et une relation $U_{n+1} = f(U_n)$, comme $P_1 = 3500$ avec $P_{n+1} = P_n + 25$, ou $V_0 = 7$ avec $V_{n+1} = 2V_n - 5$.\nAvec une formule explicite, chaque terme se calcule directement ; avec une récurrence, les termes se calculent de proche en proche, dans l’ordre.",
      "keyRule": "Explicite : le terme se calcule directement depuis l’indice ; récurrence : il faut avancer terme après terme depuis le premier.",
      "formulas": [
        {
          "name": "Formule explicite",
          "formula": "U_n = f(n)"
        },
        {
          "name": "Formule de récurrence",
          "formula": "U_{n+1} = f(U_n)",
          "note": "Avec la donnée d’un premier terme."
        }
      ],
      "workedExample": {
        "title": "Calculer les termes d’une suite récurrente (exemple de la leçon)",
        "statement": "Soit la suite $(V_n)$ définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$ pour tout $n \\in \\mathbb{N}$. Calcule $V_1$, $V_2$, $V_3$ et $V_4$.",
        "methodSteps": [
          "$V_1 = 2V_0 - 5 = 2 \\times 7 - 5 = 9$.",
          "$V_2 = 2V_1 - 5 = 2 \\times 9 - 5 = 13$.",
          "$V_3 = 2V_2 - 5 = 2 \\times 13 - 5 = 21$.",
          "$V_4 = 2V_3 - 5 = 2 \\times 21 - 5 = 37$."
        ],
        "conclusion": "Les termes sont $V_1 = 9$, $V_2 = 13$, $V_3 = 21$ et $V_4 = 37$, calculés de proche en proche."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule explicite",
          "stepTheme": "La formule explicite",
          "stepBadge": "La formule explicite",
          "paragraphText": "• Définition : soit $f$ une fonction définie dans $\\mathbb{R}_+$ ; pour tout $n \\in \\mathbb{N}$, la suite $(U_n)$ de terme général $U_n = f(n)$ est dite définie par une formule explicite.\nExemples de la leçon : $U_n = 3n + 5$ et $V_n = \\frac{2n^2 + 1}{n}$ sont définies par des formules explicites.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q1",
            "type": "mcq",
            "prompt": "La suite de terme général $U_n = 3n + 5$ est définie par :",
            "options": [
              "Une formule de récurrence",
              "Une formule explicite",
              "Un tableau de valeurs",
              "Une représentation graphique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le terme $U_n$ s’obtient directement en fonction de $n$ : c’est une formule explicite (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer des termes d’une formule explicite",
          "stepTheme": "Calculer des termes d’une formule explicite",
          "stepBadge": "Calculer des termes d’une formule explicite",
          "paragraphText": "• Exemple de la leçon : soit la suite définie par $W_n = -6\\left(\\frac{1}{2}\\right)^n + 10$.\nOn obtient $W_0 = -6 \\times 1 + 10 = 4$, puis, de la même façon, $W_5 = \\frac{157}{16}$ et $W_{10} = \\frac{5117}{512}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q2",
            "type": "mcq",
            "prompt": "Pour la suite définie par $W_n = -6\\left(\\frac{1}{2}\\right)^n + 10$, le terme $W_0$ vaut :",
            "options": [
              "$10$",
              "$-6$",
              "$4$",
              "$16$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour $n = 0$, la puissance vaut $1$ : $W_0 = -6 + 10 = 4$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un terme d’indice plus grand",
          "stepTheme": "Un terme d’indice plus grand",
          "stepBadge": "Un terme d’indice plus grand",
          "paragraphText": "• Suite de l’exemple : le calcul de $W_5$ donne $-6\\left(\\frac{1}{2}\\right)^5 + 10 = -\\frac{6}{32} + 10 = \\frac{157}{16}$.\nAvec une formule explicite, on peut calculer directement n’importe quel terme, sans connaître les précédents.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q3",
            "type": "mcq",
            "prompt": "Pour la même suite, le terme $W_5$ vaut :",
            "options": [
              "$\\frac{157}{16}$",
              "$\\frac{79}{8}$",
              "$\\frac{157}{32}$",
              "$\\frac{151}{16}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $-\\frac{6}{32} + 10 = \\frac{-6 + 320}{32} = \\frac{314}{32} = \\frac{157}{16}$ (valeur exacte de l’exemple de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La formule de récurrence",
          "stepTheme": "La formule de récurrence",
          "stepBadge": "La formule de récurrence",
          "paragraphText": "• Définition : la suite $(U_n)$ définie par la donnée d’un terme, en général le premier terme, et d’une relation du type $U_{n+1} = f(U_n)$ pour tout $n \\in \\mathbb{N}$, est dite définie par une formule de récurrence.\nExemple de la leçon : la suite définie par $P_1 = 3500$ et $P_{n+1} = P_n + 25$ pour tout $n \\in \\mathbb{N}^*$ est définie par une formule de récurrence.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q4",
            "type": "mcq",
            "prompt": "Pour définir une suite par une formule de récurrence, il faut donner :",
            "options": [
              "Un premier terme et une relation donnant $U_{n+1}$ en fonction de $U_n$",
              "Uniquement le terme général $U_n$",
              "La somme des termes",
              "La représentation graphique"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon : un terme de départ et une relation de passage d’un terme au suivant."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer le terme suivant",
          "stepTheme": "Calculer le terme suivant",
          "stepBadge": "Calculer le terme suivant",
          "paragraphText": "• Suite de l’exemple : avec $P_1 = 3500$ et $P_{n+1} = P_n + 25$, le terme suivant $P_1$ s’obtient en ajoutant $25$.\nOn obtient $P_2 = 3500 + 25 = 3525$, et ainsi de suite de proche en proche.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q5",
            "type": "mcq",
            "prompt": "Pour la suite définie par $P_1 = 3500$ et $P_{n+1} = P_n + 25$, le terme $P_2$ vaut :",
            "options": [
              "$3500$",
              "$3475$",
              "$3525$",
              "$7000$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On applique la relation au premier terme : $P_2 = P_1 + 25 = 3525$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Calculer de proche en proche",
          "stepTheme": "Calculer de proche en proche",
          "stepBadge": "Calculer de proche en proche",
          "paragraphText": "• Méthode : avec une formule de récurrence, chaque terme se calcule à partir du précédent, dans l’ordre.\nExemple de la leçon : la suite définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$ donne $V_1 = 2 \\times 7 - 5 = 9$ ; pour obtenir $V_4$, il faut d’abord calculer $V_2$, puis $V_3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q6",
            "type": "mcq",
            "prompt": "Pour la suite définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$, le terme $V_1$ vaut :",
            "options": [
              "$9$",
              "$14$",
              "$2$",
              "$19$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace $V_0$ par $7$ dans la relation : $V_1 = 2 \\times 7 - 5 = 9$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Chaque terme dépend du précédent exact",
          "stepTheme": "Chaque terme dépend du précédent exact",
          "stepBadge": "Chaque terme dépend du précédent exact",
          "paragraphText": "• Piège : une erreur à un rang se propage à tous les termes suivants d’une suite récurrente.\nDans l’exemple précédent, le calcul exact donne $V_2 = 2 \\times 9 - 5 = 13$, puis $V_3 = 2 \\times 13 - 5 = 21$ et $V_4 = 2 \\times 21 - 5 = 37$ : il faut refaire chaque calcul avec soin.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q7",
            "type": "mcq",
            "prompt": "Pour la suite définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$, le terme $V_3$ vaut :",
            "options": [
              "$23$",
              "$21$",
              "$41$",
              "$13$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "De proche en proche : $V_1 = 9$, $V_2 = 13$, puis $V_3 = 2 \\times 13 - 5 = 21$ (valeurs exactes recalculées)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q1",
          "type": "mcq",
          "prompt": "La suite de terme général $U_n = 3n + 5$ est définie par :",
          "options": [
            "Une formule de récurrence",
            "Une formule explicite",
            "Un tableau de valeurs",
            "Une représentation graphique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le terme $U_n$ s’obtient directement en fonction de $n$ : c’est une formule explicite (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q2",
          "type": "mcq",
          "prompt": "Pour la suite définie par $W_n = -6\\left(\\frac{1}{2}\\right)^n + 10$, le terme $W_0$ vaut :",
          "options": [
            "$10$",
            "$-6$",
            "$4$",
            "$16$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour $n = 0$, la puissance vaut $1$ : $W_0 = -6 + 10 = 4$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q3",
          "type": "mcq",
          "prompt": "Pour la même suite, le terme $W_5$ vaut :",
          "options": [
            "$\\frac{157}{16}$",
            "$\\frac{79}{8}$",
            "$\\frac{157}{32}$",
            "$\\frac{151}{16}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $-\\frac{6}{32} + 10 = \\frac{-6 + 320}{32} = \\frac{314}{32} = \\frac{157}{16}$ (valeur exacte de l’exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q4",
          "type": "mcq",
          "prompt": "Pour définir une suite par une formule de récurrence, il faut donner :",
          "options": [
            "Un premier terme et une relation donnant $U_{n+1}$ en fonction de $U_n$",
            "Uniquement le terme général $U_n$",
            "La somme des termes",
            "La représentation graphique"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon : un terme de départ et une relation de passage d’un terme au suivant."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q5",
          "type": "mcq",
          "prompt": "Pour la suite définie par $P_1 = 3500$ et $P_{n+1} = P_n + 25$, le terme $P_2$ vaut :",
          "options": [
            "$3500$",
            "$3475$",
            "$3525$",
            "$7000$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On applique la relation au premier terme : $P_2 = P_1 + 25 = 3525$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q6",
          "type": "mcq",
          "prompt": "Pour la suite définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$, le terme $V_1$ vaut :",
          "options": [
            "$9$",
            "$14$",
            "$2$",
            "$19$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace $V_0$ par $7$ dans la relation : $V_1 = 2 \\times 7 - 5 = 9$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q7",
          "type": "mcq",
          "prompt": "Pour la suite définie par $V_0 = 7$ et $V_{n+1} = 2V_n - 5$, le terme $V_3$ vaut :",
          "options": [
            "$23$",
            "$21$",
            "$41$",
            "$13$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "De proche en proche : $V_1 = 9$, $V_2 = 13$, puis $V_3 = 2 \\times 13 - 5 = 21$ (valeurs exactes recalculées)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03",
      "order": 3,
      "title": "Représentation graphique d’une suite",
      "summary": "Représenter graphiquement les premiers termes d’une suite, qu’elle soit définie explicitement ou par récurrence.",
      "conceptExplanation": "Pour une suite définie par une formule explicite $U_n = f(n)$, on représente la courbe de la fonction $f$ associée, puis on détermine graphiquement $U_0 = f(0)$, $U_1 = f(1)$, $U_2 = f(2)$ et ainsi de suite ; par exemple, pour $U_n = 2n + 1$, on lit $U_0 = 1$, $U_1 = 3$ et $U_2 = 5$.\nPour une suite définie par une récurrence $U_{n+1} = f(U_n)$, on représente aussi la courbe de $f$, mais on trace en plus la première bissectrice, d’équation $y = x$.\nOn marque $U_0$ sur l’axe des abscisses, on projette verticalement sur la courbe, puis horizontalement sur la bissectrice, puis verticalement sur l’axe des abscisses pour obtenir $U_1$, et on recommence.",
      "keyRule": "Explicite : lire les images des entiers sur la courbe ; récurrence : enchaîner les projections entre la courbe et la bissectrice pour reporter chaque terme sur l’axe des abscisses.",
      "formulas": [],
      "workedExample": {
        "title": "Les trois premiers termes de $U_n = 2n + 1$ (exemple de la leçon)",
        "statement": "Représente graphiquement les trois premiers termes de la suite définie par $U_n = 2n + 1$.",
        "methodSteps": [
          "On associe à la suite la fonction $f$ définie par $f(x) = 2x + 1$ et on représente sa courbe.",
          "On lit les images des premiers entiers : $U_0 = f(0) = 1$, $U_1 = f(1) = 3$ et $U_2 = f(2) = 5$."
        ],
        "conclusion": "Les trois premiers termes représentés sont $1$, $3$ et $5$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Représenter une suite définie explicitement",
          "stepTheme": "Représenter une suite définie explicitement",
          "stepBadge": "Représenter une suite définie explicitement",
          "paragraphText": "• Principe de la leçon : pour une suite $U_n = f(n)$ définie par une formule explicite, on représente graphiquement les termes $U_0$, $U_1$, $U_2$ et ainsi de suite.\nCes termes sont les images des entiers naturels par la fonction $f$ associée à la suite.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q1",
            "type": "mcq",
            "prompt": "Pour la suite définie par $U_n = 2n + 1$, le terme $U_0$ lu sur la représentation graphique vaut :",
            "options": [
              "$0$",
              "$1$",
              "$3$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule l’image de $0$ : $U_0 = 2 \\times 0 + 1 = 1$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "La méthode pour une formule explicite",
          "stepTheme": "La méthode pour une formule explicite",
          "stepBadge": "La méthode pour une formule explicite",
          "paragraphText": "• Méthode de la leçon : on représente la courbe de la fonction $f$ associée à la suite.\nOn détermine ensuite graphiquement $U_0 = f(0)$, $U_1 = f(1)$, $U_2 = f(2)$, $U_3 = f(3)$, et ainsi de suite.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q2",
            "type": "mcq",
            "prompt": "Pour représenter graphiquement les premiers termes d’une suite explicite $U_n = f(n)$, on commence par :",
            "options": [
              "Tracer la première bissectrice",
              "Placer le premier terme sur l’axe des ordonnées",
              "Calculer la somme des termes",
              "Représenter la courbe de la fonction $f$ associée"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la première étape de la méthode de la leçon : tracer la courbe de $f$, puis lire les images des entiers."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les premiers termes de $U_n = 2n + 1$",
          "stepTheme": "Les premiers termes de $U_n = 2n + 1$",
          "stepBadge": "Les premiers termes de $U_n = 2n + 1$",
          "paragraphText": "• Exemple de la leçon : pour la suite définie par $U_n = 2n + 1$, la représentation graphique donne les premiers termes.\nOn lit $U_0 = 1$, $U_1 = 3$ et $U_2 = 5$ : les points correspondants sont sur la droite associée à la fonction $f$ définie par $f(x) = 2x + 1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q3",
            "type": "mcq",
            "prompt": "Pour la suite définie par $U_n = 2n + 1$, le terme $U_1$ vaut :",
            "options": [
              "$1$",
              "$5$",
              "$3$",
              "$2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $U_1 = 2 \\times 1 + 1 = 3$, lu graphiquement comme l’image de $1$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Le rôle de la première bissectrice",
          "stepTheme": "Le rôle de la première bissectrice",
          "stepBadge": "Le rôle de la première bissectrice",
          "paragraphText": "• Définition utile de la leçon : pour représenter une suite définie par une récurrence $U_{n+1} = f(U_n)$, on trace la droite d’équation $y = x$, appelée la première bissectrice.\nElle sert de relais pour reporter chaque terme calculé sur l’axe des abscisses et obtenir le suivant.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q4",
            "type": "mcq",
            "prompt": "Dans la représentation d’une suite récurrente, la droite auxiliaire tracée a pour équation :",
            "options": [
              "$y = 0$",
              "$y = x$",
              "$y = -x$",
              "$x = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la première bissectrice, d’équation $y = x$ (méthode de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "L’enchaînement des projections",
          "stepTheme": "L’enchaînement des projections",
          "stepBadge": "L’enchaînement des projections",
          "paragraphText": "• Méthode de la leçon : on marque $U_0$ sur l’axe des abscisses ; on projette ce point verticalement sur la courbe de $f$, puis ce nouveau point horizontalement sur la première bissectrice, et enfin ce dernier point verticalement sur l’axe des abscisses : on obtient $U_1$.\nOn refait le même processus avec $U_1$ pour obtenir $U_2$, et ainsi de suite.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q5",
            "type": "mcq",
            "prompt": "Dans la construction pour une suite récurrente, après avoir projeté un point verticalement sur la courbe de $f$, on projette le point obtenu :",
            "options": [
              "Verticalement sur l’axe des abscisses",
              "Horizontalement sur la première bissectrice",
              "Horizontalement sur l’axe des ordonnées",
              "On s’arrête, le terme suivant est trouvé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’ordre de la leçon est : verticale vers la courbe, horizontale vers la bissectrice, puis verticale vers l’axe des abscisses."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les termes se lisent sur l’axe des abscisses",
          "stepTheme": "Les termes se lisent sur l’axe des abscisses",
          "stepBadge": "Les termes se lisent sur l’axe des abscisses",
          "paragraphText": "• Piège : dans la construction par récurrence, la valeur de $U_1$ ne se lit pas directement sur la courbe de $f$.\nC’est seulement après la projection horizontale sur la bissectrice puis la projection verticale que la valeur se lit sur l’axe des abscisses, au même endroit que $U_0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q6",
            "type": "mcq",
            "prompt": "Dans la représentation d’une suite récurrente, où lit-on finalement la valeur de $U_1$ ?",
            "options": [
              "Sur la courbe de $f$",
              "Sur la première bissectrice",
              "Sur l’axe des ordonnées",
              "Sur l’axe des abscisses"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Après les projections, $U_1$ se lit sur l’axe des abscisses, comme $U_0$ au départ (méthode de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q1",
          "type": "mcq",
          "prompt": "Pour la suite définie par $U_n = 2n + 1$, le terme $U_0$ lu sur la représentation graphique vaut :",
          "options": [
            "$0$",
            "$1$",
            "$3$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule l’image de $0$ : $U_0 = 2 \\times 0 + 1 = 1$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q2",
          "type": "mcq",
          "prompt": "Pour représenter graphiquement les premiers termes d’une suite explicite $U_n = f(n)$, on commence par :",
          "options": [
            "Tracer la première bissectrice",
            "Placer le premier terme sur l’axe des ordonnées",
            "Calculer la somme des termes",
            "Représenter la courbe de la fonction $f$ associée"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la première étape de la méthode de la leçon : tracer la courbe de $f$, puis lire les images des entiers."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q3",
          "type": "mcq",
          "prompt": "Pour la suite définie par $U_n = 2n + 1$, le terme $U_1$ vaut :",
          "options": [
            "$1$",
            "$5$",
            "$3$",
            "$2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $U_1 = 2 \\times 1 + 1 = 3$, lu graphiquement comme l’image de $1$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q4",
          "type": "mcq",
          "prompt": "Dans la représentation d’une suite récurrente, la droite auxiliaire tracée a pour équation :",
          "options": [
            "$y = 0$",
            "$y = x$",
            "$y = -x$",
            "$x = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la première bissectrice, d’équation $y = x$ (méthode de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q5",
          "type": "mcq",
          "prompt": "Dans la construction pour une suite récurrente, après avoir projeté un point verticalement sur la courbe de $f$, on projette le point obtenu :",
          "options": [
            "Verticalement sur l’axe des abscisses",
            "Horizontalement sur la première bissectrice",
            "Horizontalement sur l’axe des ordonnées",
            "On s’arrête, le terme suivant est trouvé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’ordre de la leçon est : verticale vers la courbe, horizontale vers la bissectrice, puis verticale vers l’axe des abscisses."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q6",
          "type": "mcq",
          "prompt": "Dans la représentation d’une suite récurrente, où lit-on finalement la valeur de $U_1$ ?",
          "options": [
            "Sur la courbe de $f$",
            "Sur la première bissectrice",
            "Sur l’axe des ordonnées",
            "Sur l’axe des abscisses"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Après les projections, $U_1$ se lit sur l’axe des abscisses, comme $U_0$ au départ (méthode de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04",
      "order": 4,
      "title": "Suites arithmétiques : définition et terme général",
      "summary": "Reconnaître une suite arithmétique, identifier sa raison et exprimer son terme général.",
      "conceptExplanation": "Une suite $(U_n)$ est arithmétique s’il existe un réel $r$ tel que $U_{n+1} = U_n + r$ pour tout $n \\in \\mathbb{N}$ ; $r$ est la raison de la suite. Par exemple, la suite définie par $U_n = \\frac{1}{2}n - 3$ est arithmétique de raison $\\frac{1}{2}$ et de premier terme $U_0 = -3$.\nTerme général : pour des entiers naturels $n$ et $k$, $U_n = U_k + (n - k)r$. En particulier, $U_n = U_0 + nr$ si le premier terme est $U_0$, et $U_n = U_1 + (n - 1)r$ si le premier terme est $U_1$.\nExemple : la suite arithmétique de raison $-4$ et de premier terme $U_0 = 5$ a pour terme général $U_n = 5 - 4n$.",
      "keyRule": "Arithmétique égale ajout constant de la raison ; le terme général ajoute la raison autant de fois qu’il y a de pas depuis le terme de départ.",
      "formulas": [
        {
          "name": "Définition",
          "formula": "U_{n+1} = U_n + r"
        },
        {
          "name": "Terme général",
          "formula": "U_n = U_k + (n - k)r"
        }
      ],
      "workedExample": {
        "title": "Terme général d’une suite arithmétique (exercice de fixation)",
        "statement": "Soit $(U_n)$ la suite arithmétique de raison $-4$ et de premier terme $U_0 = 5$. Exprime $U_n$ en fonction de $n$.",
        "methodSteps": [
          "On applique le cas particulier du terme général à partir de $U_0$ : $U_n = U_0 + nr$.",
          "On remplace : $U_n = 5 + (-4)n$."
        ],
        "conclusion": "Pour tout $n \\in \\mathbb{N}$, $U_n = 5 - 4n$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une suite arithmétique",
          "stepTheme": "La définition d’une suite arithmétique",
          "stepBadge": "La définition d’une suite arithmétique",
          "paragraphText": "• Définition : soit $(U_n)$ une suite numérique.\nLa suite $(U_n)$ est arithmétique s’il existe un nombre réel $r$ tel que, pour tout $n \\in \\mathbb{N}$, $U_{n+1} = U_n + r$.\nLe nombre $r$ est appelé la raison de la suite $(U_n)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q1",
            "type": "mcq",
            "prompt": "Une suite $(U_n)$ est arithmétique si, pour tout entier naturel $n$ :",
            "options": [
              "$U_{n+1} = qU_n$ pour un réel $q$",
              "$U_{n+1} = \\frac{1}{U_n}$",
              "$U_{n+1} = U_n^2$",
              "$U_{n+1} = U_n + r$ pour un réel $r$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la définition de la leçon : on passe d’un terme au suivant en ajoutant toujours la même raison $r$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Reconnaître une suite arithmétique explicite",
          "stepTheme": "Reconnaître une suite arithmétique explicite",
          "stepBadge": "Reconnaître une suite arithmétique explicite",
          "paragraphText": "• Exemple de la leçon : la suite définie par $U_n = \\frac{1}{2}n - 3$ pour tout $n \\in \\mathbb{N}$ est arithmétique.\nEn effet, $U_{n+1} = \\frac{1}{2}(n + 1) - 3 = U_n + \\frac{1}{2}$ : sa raison est $\\frac{1}{2}$ et son premier terme est $U_0 = -3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q2",
            "type": "mcq",
            "prompt": "La suite définie par $U_n = \\frac{1}{2}n - 3$ est arithmétique de raison :",
            "options": [
              "$-3$",
              "$\\frac{1}{2}$",
              "$-\\frac{1}{2}$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le calcul de $U_{n+1} - U_n$ donne $\\frac{1}{2}$ : c’est la raison, et $U_0 = -3$ est le premier terme (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Des raisons positives et négatives",
          "stepTheme": "Des raisons positives et négatives",
          "stepBadge": "Des raisons positives et négatives",
          "paragraphText": "• Exemples de la leçon : la relation $U_{n+1} = U_n + 3$ pour tout $n \\in \\mathbb{N}$ définit une suite arithmétique de raison $3$, de premier terme $U_0$.\nLa relation $V_{n+1} = V_n - \\frac{1}{2}$ pour tout $n \\in \\mathbb{N}^*$ définit une suite arithmétique de raison $-\\frac{1}{2}$, de premier terme $V_1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q3",
            "type": "mcq",
            "prompt": "La suite définie par $V_{n+1} = V_n - \\frac{1}{2}$ pour tout $n \\in \\mathbb{N}^*$ a pour raison et pour premier terme :",
            "options": [
              "Raison $\\frac{1}{2}$ et premier terme $V_0$",
              "Raison $-\\frac{1}{2}$ et premier terme $V_0$",
              "Raison $-2$ et premier terme $V_1$",
              "Raison $-\\frac{1}{2}$ et premier terme $V_1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ajoute $-\\frac{1}{2}$ à chaque étape, et la suite commence à l’indice $1$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le terme général d’une suite arithmétique",
          "stepTheme": "Le terme général d’une suite arithmétique",
          "stepBadge": "Le terme général d’une suite arithmétique",
          "paragraphText": "• Propriété : soient $n$ et $k$ des entiers naturels et $(U_n)$ une suite arithmétique de raison $r$ ; on a $U_n = U_k + (n - k)r$.\nCas particuliers : $U_n = U_0 + nr$ et $U_n = U_1 + (n - 1)r$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q4",
            "type": "mcq",
            "prompt": "Pour une suite arithmétique de raison $r$, le terme $U_n$ s’exprime à partir de $U_k$ par :",
            "options": [
              "$U_n = U_k + (n - k)r$",
              "$U_n = U_k + (n + k)r$",
              "$U_n = U_k \\times r^{n - k}$",
              "$U_n = U_k + nr$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la propriété du terme général : on ajoute la raison autant de fois qu’il y a de pas de $k$ à $n$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Exprimer $U_n$ en fonction de $n$",
          "stepTheme": "Exprimer $U_n$ en fonction de $n$",
          "stepBadge": "Exprimer $U_n$ en fonction de $n$",
          "paragraphText": "• Exercice de fixation : soit $(U_n)$ la suite arithmétique de raison $-4$ et de premier terme $U_0 = 5$.\nOn applique le cas particulier $U_n = U_0 + nr$, ce qui donne $U_n = 5 - 4n$ pour tout $n \\in \\mathbb{N}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q5",
            "type": "mcq",
            "prompt": "La suite arithmétique de raison $-4$ et de premier terme $U_0 = 5$ a pour terme général :",
            "options": [
              "$U_n = 5 + 4n$",
              "$U_n = -4 + 5n$",
              "$U_n = 5 - 4n$",
              "$U_n = 9 - 4n$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $U_n = U_0 + nr = 5 + (-4)n = 5 - 4n$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Adapter la formule au premier terme",
          "stepTheme": "Adapter la formule au premier terme",
          "stepBadge": "Adapter la formule au premier terme",
          "paragraphText": "• Piège : la formule $U_n = U_0 + nr$ suppose que le premier terme est $U_0$.\nSi la suite commence à $U_1$, il faut utiliser $U_n = U_1 + (n - 1)r$ : de $U_1$ à $U_n$, il n’y a que $n - 1$ pas, et non $n$ pas.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q6",
            "type": "mcq",
            "prompt": "Une suite arithmétique de raison $r$ a pour premier terme $U_1$. Son terme général est :",
            "options": [
              "$U_n = U_1 + nr$",
              "$U_n = U_1 + (n - 1)r$",
              "$U_n = U_0 + nr$",
              "$U_n = U_1 \\times r^{n - 1}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le deuxième cas particulier de la leçon : à partir de $U_1$, on ajoute la raison $n - 1$ fois."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q1",
          "type": "mcq",
          "prompt": "Une suite $(U_n)$ est arithmétique si, pour tout entier naturel $n$ :",
          "options": [
            "$U_{n+1} = qU_n$ pour un réel $q$",
            "$U_{n+1} = \\frac{1}{U_n}$",
            "$U_{n+1} = U_n^2$",
            "$U_{n+1} = U_n + r$ pour un réel $r$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la définition de la leçon : on passe d’un terme au suivant en ajoutant toujours la même raison $r$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q2",
          "type": "mcq",
          "prompt": "La suite définie par $U_n = \\frac{1}{2}n - 3$ est arithmétique de raison :",
          "options": [
            "$-3$",
            "$\\frac{1}{2}$",
            "$-\\frac{1}{2}$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le calcul de $U_{n+1} - U_n$ donne $\\frac{1}{2}$ : c’est la raison, et $U_0 = -3$ est le premier terme (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q3",
          "type": "mcq",
          "prompt": "La suite définie par $V_{n+1} = V_n - \\frac{1}{2}$ pour tout $n \\in \\mathbb{N}^*$ a pour raison et pour premier terme :",
          "options": [
            "Raison $\\frac{1}{2}$ et premier terme $V_0$",
            "Raison $-\\frac{1}{2}$ et premier terme $V_0$",
            "Raison $-2$ et premier terme $V_1$",
            "Raison $-\\frac{1}{2}$ et premier terme $V_1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ajoute $-\\frac{1}{2}$ à chaque étape, et la suite commence à l’indice $1$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q4",
          "type": "mcq",
          "prompt": "Pour une suite arithmétique de raison $r$, le terme $U_n$ s’exprime à partir de $U_k$ par :",
          "options": [
            "$U_n = U_k + (n - k)r$",
            "$U_n = U_k + (n + k)r$",
            "$U_n = U_k \\times r^{n - k}$",
            "$U_n = U_k + nr$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la propriété du terme général : on ajoute la raison autant de fois qu’il y a de pas de $k$ à $n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q5",
          "type": "mcq",
          "prompt": "La suite arithmétique de raison $-4$ et de premier terme $U_0 = 5$ a pour terme général :",
          "options": [
            "$U_n = 5 + 4n$",
            "$U_n = -4 + 5n$",
            "$U_n = 5 - 4n$",
            "$U_n = 9 - 4n$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $U_n = U_0 + nr = 5 + (-4)n = 5 - 4n$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q6",
          "type": "mcq",
          "prompt": "Une suite arithmétique de raison $r$ a pour premier terme $U_1$. Son terme général est :",
          "options": [
            "$U_n = U_1 + nr$",
            "$U_n = U_1 + (n - 1)r$",
            "$U_n = U_0 + nr$",
            "$U_n = U_1 \\times r^{n - 1}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le deuxième cas particulier de la leçon : à partir de $U_1$, on ajoute la raison $n - 1$ fois."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05",
      "order": 5,
      "title": "Somme des termes d’une suite arithmétique",
      "summary": "Calculer la somme de termes consécutifs d’une suite arithmétique grâce au nombre de termes et aux termes extrêmes.",
      "conceptExplanation": "La somme de $n$ termes consécutifs d’une suite arithmétique est égale au produit par $n$ de la demi-somme des termes extrêmes.\nAinsi, si $S = U_1 + U_2 + \\ldots + U_n$, alors $S = n \\times \\frac{U_1 + U_n}{2}$ ; et si $S = U_k + U_{k+1} + \\ldots + U_j$, alors $S = (j - k + 1) \\times \\frac{U_k + U_j}{2}$.\nExemples de la leçon : $1 + 2 + \\ldots + 2020 = 2\\ 041\\ 210$ ; $2 + 4 + \\ldots + 2n = n(n + 1)$ ; pour la suite de raison $9$ et de premier terme $U_0 = -2$, la somme de $U_3$ à $U_{77}$ vaut $26\\ 850$.",
      "keyRule": "Somme arithmétique : nombre de termes multiplié par la demi-somme du premier et du dernier terme additionnés.",
      "formulas": [
        {
          "name": "Somme de $U_1$ à $U_n$",
          "formula": "S = n \\times \\frac{U_1 + U_n}{2}"
        },
        {
          "name": "Somme de $U_k$ à $U_j$",
          "formula": "S = (j - k + 1) \\times \\frac{U_k + U_j}{2}"
        }
      ],
      "workedExample": {
        "title": "La somme des entiers de $1$ à $2020$ (exemple de la leçon)",
        "statement": "Calcule la somme $S = 1 + 2 + 3 + \\ldots + 2020$.",
        "methodSteps": [
          "C’est la somme de $2020$ termes consécutifs d’une suite arithmétique, d’extrêmes $1$ et $2020$.",
          "On applique la règle : $S = 2020 \\times \\frac{1 + 2020}{2}$."
        ],
        "conclusion": "$S = 2\\ 041\\ 210$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La somme de termes consécutifs",
          "stepTheme": "La somme de termes consécutifs",
          "stepBadge": "La somme de termes consécutifs",
          "paragraphText": "• Règle de la leçon : la somme de $n$ termes consécutifs d’une suite arithmétique est égale au produit par $n$ de la demi-somme des termes extrêmes.\nAutrement dit, on multiplie le nombre de termes par la moyenne du premier et du dernier terme de la somme.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q1",
            "type": "mcq",
            "prompt": "La somme de termes consécutifs d’une suite arithmétique est égale :",
            "options": [
              "Au produit du nombre de termes par la demi-somme des termes extrêmes",
              "Au produit des termes extrêmes",
              "À la demi-somme des termes extrêmes",
              "Au nombre de termes multiplié par la raison"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la propriété de la leçon : nombre de termes fois demi-somme des extrêmes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La somme des entiers de $1$ à $2020$",
          "stepTheme": "La somme des entiers de $1$ à $2020$",
          "stepBadge": "La somme des entiers de $1$ à $2020$",
          "paragraphText": "• Exemple de la leçon : la somme $1 + 2 + 3 + \\ldots + 2020$ comporte $2020$ termes, d’extrêmes $1$ et $2020$.\nOn obtient $2020 \\times \\frac{1 + 2020}{2} = 2\\ 041\\ 210$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q2",
            "type": "mcq",
            "prompt": "La somme $1 + 2 + 3 + \\ldots + 2020$ vaut :",
            "options": [
              "$4\\ 082\\ 420$",
              "$2\\ 020\\ 000$",
              "$2\\ 041\\ 210$",
              "$1\\ 020\\ 605$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On applique la règle : $2020$ termes fois la demi-somme $\\frac{2021}{2}$, soit $2\\ 041\\ 210$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Compter les termes d’une somme partielle",
          "stepTheme": "Compter les termes d’une somme partielle",
          "stepBadge": "Compter les termes d’une somme partielle",
          "paragraphText": "• Méthode : pour une somme allant de $U_k$ à $U_j$, le nombre de termes est $j - k + 1$.\nExemple de la leçon : la somme $T = U_3 + U_4 + \\ldots + U_{77}$ comporte $77 - 3 + 1 = 75$ termes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q3",
            "type": "mcq",
            "prompt": "La somme $U_3 + U_4 + \\ldots + U_{77}$ comporte :",
            "options": [
              "$77$ termes",
              "$74$ termes",
              "$75$ termes",
              "$80$ termes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le nombre de termes est $77 - 3 + 1 = 75$ : il ne faut pas oublier le terme de départ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une somme partielle complète",
          "stepTheme": "Une somme partielle complète",
          "stepBadge": "Une somme partielle complète",
          "paragraphText": "• Exemple de la leçon : soit $(U_n)$ la suite arithmétique de raison $9$ et de premier terme $U_0 = -2$.\nLa somme $T = U_3 + U_4 + \\ldots + U_{77}$ vaut $\\frac{75}{2}(U_3 + U_{77})$, soit $26\\ 850$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q4",
            "type": "mcq",
            "prompt": "Pour la suite arithmétique de raison $9$ et de premier terme $U_0 = -2$, la somme $U_3 + U_4 + \\ldots + U_{77}$ vaut :",
            "options": [
              "$26\\ 850$",
              "$25\\ 850$",
              "$53\\ 700$",
              "$24\\ 150$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $75$ termes, $U_3 = 25$ et $U_{77} = 691$, on obtient $75 \\times \\frac{25 + 691}{2} = 26\\ 850$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La somme des premiers nombres pairs",
          "stepTheme": "La somme des premiers nombres pairs",
          "stepBadge": "La somme des premiers nombres pairs",
          "paragraphText": "• Exemple de la leçon : la somme $2 + 4 + 6 + \\ldots + 2n$ comporte $n$ termes, d’extrêmes $2$ et $2n$.\nElle vaut $n \\times \\frac{2 + 2n}{2} = n(n + 1)$ ; de même, $1 + 3 + 5 + \\ldots + (2n + 1)$ vaut $(n + 1)^2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q5",
            "type": "mcq",
            "prompt": "La somme $2 + 4 + 6 + \\ldots + 2n$ vaut :",
            "options": [
              "$n^2$",
              "$n(n + 1)$",
              "$2n(n + 1)$",
              "$(n + 1)^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il y a $n$ termes et la demi-somme des extrêmes est $n + 1$ : le produit donne $n(n + 1)$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Compter les termes depuis l’indice $0$",
          "stepTheme": "Compter les termes depuis l’indice $0$",
          "stepBadge": "Compter les termes depuis l’indice $0$",
          "paragraphText": "• Piège : la somme $S = U_0 + U_1 + \\ldots + U_{n-1}$ va de l’indice $0$ à l’indice $n - 1$ : elle comporte $n$ termes, et non $n - 1$ termes.\nDans l’exemple de la leçon, pour la suite de raison $9$ et de premier terme $-2$, cette somme vaut $S = \\frac{n}{2}(U_0 + U_{n-1}) = \\frac{n(9n - 13)}{2}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q6",
            "type": "mcq",
            "prompt": "La somme $U_0 + U_1 + \\ldots + U_{n-1}$ comporte :",
            "options": [
              "$n$ termes",
              "$n + 1$ termes",
              "$n - 1$ termes",
              "$2n$ termes"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De l’indice $0$ à l’indice $n - 1$ inclus, on compte $n$ termes : c’est le comptage utilisé dans l’exemple de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q1",
          "type": "mcq",
          "prompt": "La somme de termes consécutifs d’une suite arithmétique est égale :",
          "options": [
            "Au produit du nombre de termes par la demi-somme des termes extrêmes",
            "Au produit des termes extrêmes",
            "À la demi-somme des termes extrêmes",
            "Au nombre de termes multiplié par la raison"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la propriété de la leçon : nombre de termes fois demi-somme des extrêmes."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q2",
          "type": "mcq",
          "prompt": "La somme $1 + 2 + 3 + \\ldots + 2020$ vaut :",
          "options": [
            "$4\\ 082\\ 420$",
            "$2\\ 020\\ 000$",
            "$2\\ 041\\ 210$",
            "$1\\ 020\\ 605$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On applique la règle : $2020$ termes fois la demi-somme $\\frac{2021}{2}$, soit $2\\ 041\\ 210$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q3",
          "type": "mcq",
          "prompt": "La somme $U_3 + U_4 + \\ldots + U_{77}$ comporte :",
          "options": [
            "$77$ termes",
            "$74$ termes",
            "$75$ termes",
            "$80$ termes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le nombre de termes est $77 - 3 + 1 = 75$ : il ne faut pas oublier le terme de départ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q4",
          "type": "mcq",
          "prompt": "Pour la suite arithmétique de raison $9$ et de premier terme $U_0 = -2$, la somme $U_3 + U_4 + \\ldots + U_{77}$ vaut :",
          "options": [
            "$26\\ 850$",
            "$25\\ 850$",
            "$53\\ 700$",
            "$24\\ 150$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $75$ termes, $U_3 = 25$ et $U_{77} = 691$, on obtient $75 \\times \\frac{25 + 691}{2} = 26\\ 850$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q5",
          "type": "mcq",
          "prompt": "La somme $2 + 4 + 6 + \\ldots + 2n$ vaut :",
          "options": [
            "$n^2$",
            "$n(n + 1)$",
            "$2n(n + 1)$",
            "$(n + 1)^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il y a $n$ termes et la demi-somme des extrêmes est $n + 1$ : le produit donne $n(n + 1)$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q6",
          "type": "mcq",
          "prompt": "La somme $U_0 + U_1 + \\ldots + U_{n-1}$ comporte :",
          "options": [
            "$n$ termes",
            "$n + 1$ termes",
            "$n - 1$ termes",
            "$2n$ termes"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De l’indice $0$ à l’indice $n - 1$ inclus, on compte $n$ termes : c’est le comptage utilisé dans l’exemple de la leçon."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06",
      "order": 6,
      "title": "Suites géométriques : définition et terme général",
      "summary": "Reconnaître une suite géométrique, identifier sa raison et exprimer son terme général.",
      "conceptExplanation": "Une suite $(U_n)$ est géométrique s’il existe un réel $q$ tel que $U_{n+1} = qU_n$ pour tout $n \\in \\mathbb{N}$ ; $q$ est la raison de la suite. Par exemple, la suite définie par $V_n = 3\\left(\\frac{1}{4}\\right)^n$ est géométrique de raison $\\frac{1}{4}$ et de premier terme $V_0 = 3$.\nTerme général : pour $k$ entier naturel inférieur à $n$, $U_n = q^{n - k}U_k$. En particulier, $U_n = q^n U_0$ et $U_n = q^{n - 1}U_1$.\nExemple : la suite géométrique de raison $3$ et de premier terme $V_1 = 3$ a pour terme général $V_n = 3^n$ pour $n \\geq 1$.",
      "keyRule": "Géométrique égale multiplication constante par la raison ; l’exposant du terme général compte le nombre de pas depuis le terme de départ.",
      "formulas": [
        {
          "name": "Définition",
          "formula": "U_{n+1} = qU_n"
        },
        {
          "name": "Terme général",
          "formula": "U_n = q^{n - k}U_k"
        }
      ],
      "workedExample": {
        "title": "Terme général d’une suite géométrique (exercice de fixation)",
        "statement": "Soit $(V_n)$ la suite géométrique de raison $3$ et de premier terme $V_1 = 3$. Exprime $V_n$ en fonction de $n$.",
        "methodSteps": [
          "On applique le cas particulier du terme général à partir de $U_1$ : $V_n = V_1 \\times 3^{n - 1}$.",
          "On remplace $V_1$ par $3$ : $V_n = 3 \\times 3^{n - 1}$."
        ],
        "conclusion": "Pour tout $n \\geq 1$, $V_n = 3^n$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une suite géométrique",
          "stepTheme": "La définition d’une suite géométrique",
          "stepBadge": "La définition d’une suite géométrique",
          "paragraphText": "• Définition : soit $(U_n)$ une suite numérique.\nLa suite $(U_n)$ est géométrique s’il existe un nombre réel $q$ tel que, pour tout $n \\in \\mathbb{N}$, $U_{n+1} = qU_n$.\nLe nombre $q$ est appelé la raison de la suite $(U_n)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q1",
            "type": "mcq",
            "prompt": "Une suite $(U_n)$ est géométrique si, pour tout entier naturel $n$ :",
            "options": [
              "$U_{n+1} = qU_n$ pour un réel $q$",
              "$U_{n+1} = U_n + q$ pour un réel $q$",
              "$U_{n+1} = U_n + n$",
              "$U_{n+1} = \\frac{U_n}{n}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon : on passe d’un terme au suivant en multipliant toujours par la même raison $q$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une suite géométrique par récurrence",
          "stepTheme": "Une suite géométrique par récurrence",
          "stepBadge": "Une suite géométrique par récurrence",
          "paragraphText": "• Exemple de la leçon : la suite définie par $U_0 = 3$ et $U_{n+1} = \\frac{1}{2}U_n$ pour tout $n \\in \\mathbb{N}$ est une suite géométrique.\nSa raison est le coefficient multiplicateur qui apparaît dans la relation de récurrence.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q2",
            "type": "mcq",
            "prompt": "La suite définie par $U_0 = 3$ et $U_{n+1} = \\frac{1}{2}U_n$ est géométrique de raison :",
            "options": [
              "$3$",
              "$2$",
              "$\\frac{1}{2}$",
              "$-\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La raison est le nombre par lequel on multiplie chaque terme pour obtenir le suivant : $\\frac{1}{2}$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Reconnaître une suite géométrique explicite",
          "stepTheme": "Reconnaître une suite géométrique explicite",
          "stepBadge": "Reconnaître une suite géométrique explicite",
          "paragraphText": "• Exemple de la leçon : la suite définie par $V_n = 3\\left(\\frac{1}{4}\\right)^n$ pour tout $n \\in \\mathbb{N}$ est géométrique.\nEn effet, $V_{n+1} = 3\\left(\\frac{1}{4}\\right)^{n+1} = \\frac{1}{4} \\times 3\\left(\\frac{1}{4}\\right)^n = \\frac{1}{4}V_n$ : sa raison est $\\frac{1}{4}$ et son premier terme est $V_0 = 3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q3",
            "type": "mcq",
            "prompt": "La suite définie par $V_n = 3\\left(\\frac{1}{4}\\right)^n$ est géométrique de raison :",
            "options": [
              "$3$",
              "$\\frac{1}{4}$",
              "$4$",
              "$\\frac{1}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le facteur qui se répète à chaque pas est $\\frac{1}{4}$ : $V_{n+1} = \\frac{1}{4}V_n$ (exemple de la leçon)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le terme général d’une suite géométrique",
          "stepTheme": "Le terme général d’une suite géométrique",
          "stepBadge": "Le terme général d’une suite géométrique",
          "paragraphText": "• Propriété : soit $(U_n)$ une suite géométrique de raison $q$ et $k$ un entier naturel inférieur à $n$ ; on a $U_n = q^{n - k}U_k$.\nCas particuliers : $U_n = q^n U_0$ et $U_n = q^{n - 1}U_1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q4",
            "type": "mcq",
            "prompt": "Pour une suite géométrique de raison $q$, le terme $U_n$ s’exprime à partir de $U_k$ (avec $k \\leq n$) par :",
            "options": [
              "$U_n = U_k + (n - k)q$",
              "$U_n = q^{n - k}U_k$",
              "$U_n = q^{n + k}U_k$",
              "$U_n = q^n U_k$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété du terme général : on multiplie par la raison autant de fois qu’il y a de pas de $k$ à $n$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Exprimer $V_n$ en fonction de $n$",
          "stepTheme": "Exprimer $V_n$ en fonction de $n$",
          "stepBadge": "Exprimer $V_n$ en fonction de $n$",
          "paragraphText": "• Exercice de fixation : soit $(V_n)$ la suite géométrique de raison $3$ et de premier terme $V_1 = 3$.\nOn applique le cas particulier à partir de $U_1$ : $V_n = V_1 \\times 3^{n - 1} = 3^n$ pour tout $n \\geq 1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q5",
            "type": "mcq",
            "prompt": "La suite géométrique de raison $3$ et de premier terme $V_1 = 3$ a pour terme général :",
            "options": [
              "$V_n = 3^{n - 1}$",
              "$V_n = 3n$",
              "$V_n = 3 + 3n$",
              "$V_n = 3^n$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $V_n = 3 \\times 3^{n - 1} = 3^n$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Attention au signe quand la raison est négative",
          "stepTheme": "Attention au signe quand la raison est négative",
          "stepBadge": "Attention au signe quand la raison est négative",
          "paragraphText": "• Exercice de la leçon : soit $(V_n)$ la suite géométrique définie par $V_1 = -2$ et $V_{n+1} = -5V_n$ pour tout $n \\in \\mathbb{N}^*$ ; son terme général est $V_n = -2 \\times (-5)^{n - 1}$.\nPiège : le produit de deux nombres négatifs est positif ; ainsi $V_2 = -2 \\times (-5) = 10$, et non $-10$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q6",
            "type": "mcq",
            "prompt": "Pour la suite géométrique définie par $V_1 = -2$ et $V_{n+1} = -5V_n$, le terme $V_2$ vaut :",
            "options": [
              "$-10$",
              "$10$",
              "$-7$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On multiplie : $V_2 = -5 \\times V_1 = -5 \\times (-2) = 10$ (exercice de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q1",
          "type": "mcq",
          "prompt": "Une suite $(U_n)$ est géométrique si, pour tout entier naturel $n$ :",
          "options": [
            "$U_{n+1} = qU_n$ pour un réel $q$",
            "$U_{n+1} = U_n + q$ pour un réel $q$",
            "$U_{n+1} = U_n + n$",
            "$U_{n+1} = \\frac{U_n}{n}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon : on passe d’un terme au suivant en multipliant toujours par la même raison $q$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q2",
          "type": "mcq",
          "prompt": "La suite définie par $U_0 = 3$ et $U_{n+1} = \\frac{1}{2}U_n$ est géométrique de raison :",
          "options": [
            "$3$",
            "$2$",
            "$\\frac{1}{2}$",
            "$-\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La raison est le nombre par lequel on multiplie chaque terme pour obtenir le suivant : $\\frac{1}{2}$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q3",
          "type": "mcq",
          "prompt": "La suite définie par $V_n = 3\\left(\\frac{1}{4}\\right)^n$ est géométrique de raison :",
          "options": [
            "$3$",
            "$\\frac{1}{4}$",
            "$4$",
            "$\\frac{1}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le facteur qui se répète à chaque pas est $\\frac{1}{4}$ : $V_{n+1} = \\frac{1}{4}V_n$ (exemple de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q4",
          "type": "mcq",
          "prompt": "Pour une suite géométrique de raison $q$, le terme $U_n$ s’exprime à partir de $U_k$ (avec $k \\leq n$) par :",
          "options": [
            "$U_n = U_k + (n - k)q$",
            "$U_n = q^{n - k}U_k$",
            "$U_n = q^{n + k}U_k$",
            "$U_n = q^n U_k$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété du terme général : on multiplie par la raison autant de fois qu’il y a de pas de $k$ à $n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q5",
          "type": "mcq",
          "prompt": "La suite géométrique de raison $3$ et de premier terme $V_1 = 3$ a pour terme général :",
          "options": [
            "$V_n = 3^{n - 1}$",
            "$V_n = 3n$",
            "$V_n = 3 + 3n$",
            "$V_n = 3^n$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $V_n = 3 \\times 3^{n - 1} = 3^n$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q6",
          "type": "mcq",
          "prompt": "Pour la suite géométrique définie par $V_1 = -2$ et $V_{n+1} = -5V_n$, le terme $V_2$ vaut :",
          "options": [
            "$-10$",
            "$10$",
            "$-7$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On multiplie : $V_2 = -5 \\times V_1 = -5 \\times (-2) = 10$ (exercice de la leçon)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07",
      "order": 7,
      "title": "Somme des termes d’une suite géométrique",
      "summary": "Calculer la somme de termes consécutifs d’une suite géométrique et modéliser une évolution en pourcentage.",
      "conceptExplanation": "La somme $S$ de $n$ termes consécutifs d’une suite géométrique de premier terme $a$ et de raison $q$ vaut, si $q \\neq 1$ : $S = a \\times \\frac{1 - q^n}{1 - q}$ ; en général, $U_k + U_{k+1} + \\ldots + U_{k+p} = U_k \\times \\frac{1 - q^{p+1}}{1 - q}$. Si $q = 1$, la somme vaut le nombre de termes multiplié par le premier terme.\nExemple de la leçon : pour $V_n = \\left(\\frac{1}{3}\\right)^n$, la somme $V_1 + V_2 + \\ldots + V_7$ vaut $\\frac{1093}{2187}$.\nDans la situation complexe, une production de $65\\ 000$ articles en $2010$ qui baisse de $3\\,\\%$ par an suit une suite géométrique de raison $\\frac{97}{100}$ ; elle passe sous le seuil de $56\\ 000$ articles en $2015$.",
      "keyRule": "Somme géométrique : premier terme multiplié par le quotient formé avec la raison élevée au nombre de termes ; une baisse en pourcentage donne une raison inférieure à $1$.",
      "formulas": [
        {
          "name": "Somme géométrique, cas $q \\neq 1$",
          "formula": "S = a \\times \\frac{1 - q^n}{1 - q}",
          "note": "Où $a$ est le premier terme de la somme et $n$ le nombre de termes."
        },
        {
          "name": "Somme géométrique, cas $q = 1$",
          "formula": "S = n \\times U_1"
        }
      ],
      "workedExample": {
        "title": "La somme des puissances de $\\frac{1}{3}$ (exercice de fixation)",
        "statement": "Soit $(V_n)$ la suite géométrique définie par $V_n = \\left(\\frac{1}{3}\\right)^n$. Calcule la somme $T = \\frac{1}{3} + \\frac{1}{3^2} + \\ldots + \\frac{1}{3^7}$.",
        "methodSteps": [
          "On reconnaît $T = V_1 + V_2 + \\ldots + V_7$ : premier terme $\\frac{1}{3}$, raison $\\frac{1}{3}$, $7$ termes.",
          "On applique la formule : $T = \\frac{1}{3} \\times \\frac{1 - \\left(\\frac{1}{3}\\right)^7}{1 - \\frac{1}{3}}$.",
          "On simplifie et on obtient $T = \\frac{1}{2}\\left(1 - \\frac{1}{2187}\\right)$."
        ],
        "conclusion": "$T = \\frac{1093}{2187}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La somme de termes consécutifs d’une suite géométrique",
          "stepTheme": "La somme de termes consécutifs d’une suite géométrique",
          "stepBadge": "La somme de termes consécutifs d’une suite géométrique",
          "paragraphText": "• Règle de la leçon : la somme $S$ de $n$ termes consécutifs d’une suite géométrique de premier terme $a$ et de raison $q$ se calcule à partir de ce premier terme et du nombre de termes.\nSi $q \\neq 1$, on utilise le quotient $\\frac{1 - q^n}{1 - q}$ ; le cas $q = 1$ se traite à part.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q1",
            "type": "mcq",
            "prompt": "Pour une suite géométrique de raison $q \\neq 1$, la somme de $n$ termes consécutifs à partir du premier terme $U_1$ est :",
            "options": [
              "$S = U_1 \\times \\frac{1 - q^n}{1 - q}$",
              "$S = U_1 \\times \\frac{1 - q}{1 - q^n}$",
              "$S = n \\times \\frac{U_1 + U_n}{2}$",
              "$S = U_1 \\times q^n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la formule de la leçon pour $q \\neq 1$ ; la formule avec la demi-somme des extrêmes concerne les suites arithmétiques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas particulier de la raison $1$",
          "stepTheme": "Le cas particulier de la raison $1$",
          "stepBadge": "Le cas particulier de la raison $1$",
          "paragraphText": "• Propriété : si $q = 1$, tous les termes sont égaux au premier terme.\nLa somme de $n$ termes vaut alors le nombre de termes multiplié par le premier terme : $S = n \\times U_1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q2",
            "type": "mcq",
            "prompt": "Si la raison d’une suite géométrique est $q = 1$, la somme de ses $n$ premiers termes à partir de $U_1$ vaut :",
            "options": [
              "$U_1$",
              "$0$",
              "$n + U_1$",
              "$n \\times U_1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Tous les termes valent $U_1$ : la somme est le nombre de termes fois le premier terme (propriété de la leçon)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Compter les termes pour l’exposant",
          "stepTheme": "Compter les termes pour l’exposant",
          "stepBadge": "Compter les termes pour l’exposant",
          "paragraphText": "• Méthode : dans la formule générale, une somme allant de $U_k$ à $U_{k+p}$ comporte $p + 1$ termes.\nL’exposant de la raison dans le quotient est donc $p + 1$ : $U_k + U_{k+1} + \\ldots + U_{k+p} = U_k \\times \\frac{1 - q^{p+1}}{1 - q}$ si $q \\neq 1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q3",
            "type": "mcq",
            "prompt": "La somme $U_k + U_{k+1} + \\ldots + U_{k+p}$ d’une suite géométrique de raison $q \\neq 1$ comporte combien de termes ?",
            "options": [
              "$p$ termes",
              "$p - 1$ termes",
              "$p + 1$ termes",
              "$k + p$ termes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "De l’indice $k$ à l’indice $k + p$ inclus, on compte $p + 1$ termes : c’est l’exposant qui figure dans la formule de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une somme de puissances de $\\frac{1}{3}$",
          "stepTheme": "Une somme de puissances de $\\frac{1}{3}$",
          "stepBadge": "Une somme de puissances de $\\frac{1}{3}$",
          "paragraphText": "• Exercice de fixation : soit la suite géométrique définie par $V_n = \\left(\\frac{1}{3}\\right)^n$.\nLa somme $T = \\frac{1}{3} + \\frac{1}{3^2} + \\ldots + \\frac{1}{3^7}$ est la somme $V_1 + V_2 + \\ldots + V_7$, de premier terme $\\frac{1}{3}$, de raison $\\frac{1}{3}$ et de $7$ termes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q4",
            "type": "mcq",
            "prompt": "La somme $T = \\frac{1}{3} + \\frac{1}{3^2} + \\ldots + \\frac{1}{3^7}$ vaut :",
            "options": [
              "$\\frac{2186}{2187}$",
              "$\\frac{1093}{2187}$",
              "$\\frac{1093}{729}$",
              "$\\frac{1}{3}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On applique la formule : $T = \\frac{1}{3} \\times \\frac{1 - \\left(\\frac{1}{3}\\right)^7}{1 - \\frac{1}{3}} = \\frac{1093}{2187}$ (exercice de fixation de la leçon)."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Modéliser une baisse en pourcentage",
          "stepTheme": "Modéliser une baisse en pourcentage",
          "stepBadge": "Modéliser une baisse en pourcentage",
          "paragraphText": "• Situation complexe de la leçon : la production d’une usine baisse chaque année d’environ $3\\,\\%$ par rapport à l’année précédente, avec $65\\ 000$ articles en $2010$.\nOn modélise par une suite géométrique : chaque année, la production est multipliée par $1 - \\frac{3}{100} = \\frac{97}{100}$, qui est la raison, et le premier terme est $65\\ 000$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q5",
            "type": "mcq",
            "prompt": "Une production qui baisse de $3\\,\\%$ chaque année est modélisée par une suite géométrique de raison :",
            "options": [
              "$\\frac{3}{100}$",
              "$\\frac{97}{100}$",
              "$\\frac{103}{100}$",
              "$97$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Baisser de $3\\,\\%$ revient à multiplier par $1 - \\frac{3}{100} = \\frac{97}{100}$ (situation complexe de la leçon)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les productions des premières années",
          "stepTheme": "Les productions des premières années",
          "stepBadge": "Les productions des premières années",
          "paragraphText": "• Suite de la situation : avec $U_n = 65\\ 000 \\times \\left(\\frac{97}{100}\\right)^n$, la production de $2011$ est $U_1 = 65\\ 000 \\times \\frac{97}{100} = 63\\ 050$.\nCelle de $2014$ est $U_4 = 57\\ 544$, encore supérieure au seuil de rentabilité de $56\\ 000$ articles.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q6",
            "type": "mcq",
            "prompt": "Dans la situation complexe de la leçon, la production de l’année $2011$ est de :",
            "options": [
              "$65\\ 000$ articles",
              "$63\\ 050$ articles",
              "$61\\ 159$ articles",
              "$59\\ 324$ articles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On multiplie la production de $2010$ par la raison : $65\\ 000 \\times \\frac{97}{100} = 63\\ 050$ (situation complexe de la leçon)."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le seuil est franchi en $2015$, pas en $2014$",
          "stepTheme": "Le seuil est franchi en $2015$, pas en $2014$",
          "stepBadge": "Le seuil est franchi en $2015$, pas en $2014$",
          "paragraphText": "• Piège : il faut calculer les termes un par un jusqu’au premier terme strictement inférieur au seuil.\nLa production de $2014$ vaut $57\\ 544$, encore au-dessus de $56\\ 000$ ; celle de $2015$ vaut $U_5 = 55\\ 818$, en dessous : la production cesse d’être rentable à partir de $2015$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q7",
            "type": "mcq",
            "prompt": "D’après la situation complexe de la leçon, à partir de quelle année la production de l’usine n’est-elle plus rentable ?",
            "options": [
              "À partir de $2013$",
              "À partir de $2014$",
              "À partir de $2015$",
              "À partir de $2016$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le premier terme inférieur à $56\\ 000$ est $U_5 = 55\\ 818$, qui correspond à l’année $2015$ (situation complexe de la leçon)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q1",
          "type": "mcq",
          "prompt": "Pour une suite géométrique de raison $q \\neq 1$, la somme de $n$ termes consécutifs à partir du premier terme $U_1$ est :",
          "options": [
            "$S = U_1 \\times \\frac{1 - q^n}{1 - q}$",
            "$S = U_1 \\times \\frac{1 - q}{1 - q^n}$",
            "$S = n \\times \\frac{U_1 + U_n}{2}$",
            "$S = U_1 \\times q^n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la formule de la leçon pour $q \\neq 1$ ; la formule avec la demi-somme des extrêmes concerne les suites arithmétiques."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q2",
          "type": "mcq",
          "prompt": "Si la raison d’une suite géométrique est $q = 1$, la somme de ses $n$ premiers termes à partir de $U_1$ vaut :",
          "options": [
            "$U_1$",
            "$0$",
            "$n + U_1$",
            "$n \\times U_1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Tous les termes valent $U_1$ : la somme est le nombre de termes fois le premier terme (propriété de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q3",
          "type": "mcq",
          "prompt": "La somme $U_k + U_{k+1} + \\ldots + U_{k+p}$ d’une suite géométrique de raison $q \\neq 1$ comporte combien de termes ?",
          "options": [
            "$p$ termes",
            "$p - 1$ termes",
            "$p + 1$ termes",
            "$k + p$ termes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "De l’indice $k$ à l’indice $k + p$ inclus, on compte $p + 1$ termes : c’est l’exposant qui figure dans la formule de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q4",
          "type": "mcq",
          "prompt": "La somme $T = \\frac{1}{3} + \\frac{1}{3^2} + \\ldots + \\frac{1}{3^7}$ vaut :",
          "options": [
            "$\\frac{2186}{2187}$",
            "$\\frac{1093}{2187}$",
            "$\\frac{1093}{729}$",
            "$\\frac{1}{3}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On applique la formule : $T = \\frac{1}{3} \\times \\frac{1 - \\left(\\frac{1}{3}\\right)^7}{1 - \\frac{1}{3}} = \\frac{1093}{2187}$ (exercice de fixation de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q5",
          "type": "mcq",
          "prompt": "Une production qui baisse de $3\\,\\%$ chaque année est modélisée par une suite géométrique de raison :",
          "options": [
            "$\\frac{3}{100}$",
            "$\\frac{97}{100}$",
            "$\\frac{103}{100}$",
            "$97$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Baisser de $3\\,\\%$ revient à multiplier par $1 - \\frac{3}{100} = \\frac{97}{100}$ (situation complexe de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q6",
          "type": "mcq",
          "prompt": "Dans la situation complexe de la leçon, la production de l’année $2011$ est de :",
          "options": [
            "$65\\ 000$ articles",
            "$63\\ 050$ articles",
            "$61\\ 159$ articles",
            "$59\\ 324$ articles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On multiplie la production de $2010$ par la raison : $65\\ 000 \\times \\frac{97}{100} = 63\\ 050$ (situation complexe de la leçon)."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q7",
          "type": "mcq",
          "prompt": "D’après la situation complexe de la leçon, à partir de quelle année la production de l’usine n’est-elle plus rentable ?",
          "options": [
            "À partir de $2013$",
            "À partir de $2014$",
            "À partir de $2015$",
            "À partir de $2016$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le premier terme inférieur à $56\\ 000$ est $U_5 = 55\\ 818$, qui correspond à l’année $2015$ (situation complexe de la leçon)."
        }
      ]
    }
  ]
};
