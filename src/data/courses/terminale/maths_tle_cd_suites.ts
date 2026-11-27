import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 09 : Suites numériques » (format v2 : mini-leçons de 5 à 8 étapes). Le PDF s'intitule en interne « Leçon 12 », décalage de numérotation ; order = 9 (numérotation du cours). Pas de livre 2025-2026 pour cette leçon.
// Source : https://lyc.ecole-ci.org/course/view.php?id=2852
export const MATHS_TLE_CD_L09_SUITES: CurriculumChapter = {
  "id": "terminale_c_maths_numerique_l09_suites",
  "subjectId": "maths",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [
    "terminale_d"
  ],
  "order": 9,
  "title": "Leçon 9 : Suites numériques",
  "summary": "Suites arithmétiques et géométriques, raisonnement par récurrence, sens de variation, suites majorées et minorées, convergence, limites de référence et croissances comparées.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=2852",
  "points": [
    {
      "id": "terminale_c_maths_numerique_l09_suites_p01",
      "order": 1,
      "title": "Suites arithmétiques et géométriques : rappels",
      "summary": "Définitions par récurrence, formules explicites et sommes des termes consécutifs des suites arithmétiques et géométriques.",
      "conceptExplanation": "Une suite arithmétique de raison $r$ et de premier terme $u_0 = a$ est définie par $u_{n+1} = u_n + r$ ; sa formule explicite est $u_n = nr + u_0$ et, pour tous $n$ et $p$, $u_n = (n - p)r + u_p$.\nUne suite géométrique de raison $q$ et de premier terme $v_0 = a$ est définie par $v_{n+1} = qv_n$ ; sa formule explicite est $v_n = v_p q^{n-p}$.\nSommes : $u_0 + u_1 + \\cdots + u_n = (n + 1)\\frac{u_0 + u_n}{2}$ et, si $q \\neq 1$, $v_0 + v_1 + \\cdots + v_n = v_0 \\times \\frac{1 - q^{n+1}}{1 - q}$.",
      "keyRule": "Arithmétique : u(n+1) = u(n) + r, u(n) = nr + u(0). Géométrique : v(n+1) = q·v(n), v(n) = v(p)·q^(n−p).",
      "formulas": [
        {
          "name": "Terme général d'une suite arithmétique",
          "formula": "u_n = nr + u_0",
          "note": "Suite arithmétique de raison r."
        },
        {
          "name": "Terme général d'une suite géométrique",
          "formula": "v_n = v_p q^{n-p}",
          "note": "Suite géométrique de raison q."
        },
        {
          "name": "Somme des termes d'une suite arithmétique",
          "formula": "u_0 + u_1 + \\cdots + u_n = (n + 1)\\frac{u_0 + u_n}{2}",
          "note": "De u_0 à u_n : n + 1 termes."
        },
        {
          "name": "Somme des termes d'une suite géométrique",
          "formula": "v_0 + v_1 + \\cdots + v_n = v_0 \\times \\frac{1 - q^{n+1}}{1 - q}",
          "note": "Pour q ≠ 1."
        }
      ],
      "workedExample": {
        "title": "La somme $u_0 + u_1 + \\cdots + u_{20}$",
        "statement": "La suite $(u_n)$ est arithmétique de raison $-3$ et $u_2 = 7$. Calcule la somme $u_0 + u_1 + \\cdots + u_{20}$.",
        "methodSteps": [
          "On a $u_n = (n - 2)r + u_2 = -3(n - 2) + 7$, soit $u_n = -3n + 13$ ; donc $u_0 = 13$ et $u_{20} = -47$.",
          "La somme vaut $(20 - 0 + 1)\\frac{u_0 + u_{20}}{2} = 21 \\times \\frac{13 - 47}{2} = 21 \\times (-17)$.",
          "Donc $u_0 + u_1 + \\cdots + u_{20} = -357$."
        ],
        "conclusion": "La somme $u_0 + u_1 + \\cdots + u_{20}$ vaut $-357$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La relation de récurrence d'une suite arithmétique",
          "stepTheme": "La relation de récurrence d'une suite arithmétique",
          "stepBadge": "La relation de récurrence d'une suite arithmétique",
          "paragraphText": "• Une suite arithmétique de raison $r$ vérifie $u_{n+1} = u_n + r$ pour tout entier $n$.\nExemple : si $(u_n)$ est arithmétique de raison $-3$, alors $u_{n+1} = u_n - 3$.\nLa raison s'ajoute à chaque terme pour obtenir le suivant.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p01_q1",
            "type": "mcq",
            "prompt": "La suite $(u_n)$ est arithmétique de raison $-3$. Quelle relation y a-t-il entre $u_{n+1}$ et $u_n$ ?",
            "options": [
              "$u_{n+1} = u_n - 3$",
              "$u_{n+1} = -3u_n$",
              "$u_{n+1} = u_n + 3$",
              "$u_{n+1} = 3u_n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour une suite arithmétique de raison $r$, $u_{n+1} = u_n + r$ ; ici $r = -3$, donc $u_{n+1} = u_n - 3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La relation de récurrence d'une suite géométrique",
          "stepTheme": "La relation de récurrence d'une suite géométrique",
          "stepBadge": "La relation de récurrence d'une suite géométrique",
          "paragraphText": "• Une suite géométrique de raison $q$ vérifie $v_{n+1} = qv_n$ pour tout entier $n$.\nExemple : si $(v_n)$ est géométrique de raison $-3$, alors $v_{n+1} = -3v_n$.\nLa raison multiplie chaque terme pour obtenir le suivant.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p01_q2",
            "type": "mcq",
            "prompt": "La suite $(v_n)$ est géométrique de raison $-3$. Quelle relation y a-t-il entre $v_{n+1}$ et $v_n$ ?",
            "options": [
              "$v_{n+1} = -3v_n$",
              "$v_{n+1} = v_n - 3$",
              "$v_{n+1} = v_n + 3$",
              "$v_{n+1} = 3v_n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour une suite géométrique de raison $q$, $v_{n+1} = qv_n$ ; ici $q = -3$, donc $v_{n+1} = -3v_n$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le terme général d'une suite arithmétique",
          "stepTheme": "Le terme général d'une suite arithmétique",
          "stepBadge": "Le terme général d'une suite arithmétique",
          "paragraphText": "• Pour une suite arithmétique, $u_n = (n - p)r + u_p$ pour tous $n$ et $p$.\nExemple : $(u_n)$ arithmétique de raison $2$ et $u_3 = -5$ : $u_n = 2(n - 3) - 5$, soit $u_n = 2n - 11$.\nOn exprime $u_n$ en fonction de $n$ en partant d'un terme connu.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p01_q3",
            "type": "mcq",
            "prompt": "La suite $(u_n)$ est arithmétique de raison $2$ et $u_3 = -5$. Quelle est l'expression de $u_n$ en fonction de $n$ ?",
            "options": [
              "$u_n = 2n - 11$",
              "$u_n = 2n - 5$",
              "$u_n = 2n + 1$",
              "$u_n = -2n - 11$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$u_n = (n - 3) \\times 2 + u_3 = 2(n - 3) - 5 = 2n - 11$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le terme général d'une suite géométrique",
          "stepTheme": "Le terme général d'une suite géométrique",
          "stepBadge": "Le terme général d'une suite géométrique",
          "paragraphText": "• Pour une suite géométrique, $v_n = v_p q^{n-p}$ pour tous $n$ et $p$.\nExemple : $(v_n)$ géométrique de raison $-\\frac{3}{2}$ et $v_4 = 16$ : $v_n = 16 \\times \\left(-\\frac{3}{2}\\right)^{n-4}$.\nL'exposant compte le nombre de pas entre $p$ et $n$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p01_q4",
            "type": "mcq",
            "prompt": "La suite $(v_n)$ est géométrique de raison $-\\frac{3}{2}$ et $v_4 = 16$. Quelle est l'expression de $v_n$ en fonction de $n$ ?",
            "options": [
              "$v_n = 16 \\times \\left(-\\frac{3}{2}\\right)^{n-4}$",
              "$v_n = 16 \\times \\left(-\\frac{3}{2}\\right)^n$",
              "$v_n = 16 \\times \\left(-\\frac{2}{3}\\right)^{n-4}$",
              "$v_n = \\left(-\\frac{3}{2}\\right)^{n-4}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$v_n = v_4 \\times q^{n-4} = 16 \\times \\left(-\\frac{3}{2}\\right)^{n-4}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La somme des termes d'une suite arithmétique",
          "stepTheme": "La somme des termes d'une suite arithmétique",
          "stepBadge": "La somme des termes d'une suite arithmétique",
          "paragraphText": "• $u_0 + u_1 + \\cdots + u_n = (n + 1)\\frac{u_0 + u_n}{2}$ : le nombre de termes multiplié par la moyenne des termes extrêmes.\nExemple : $(u_n)$ arithmétique de raison $-3$, $u_2 = 7$ : $u_n = -3n + 13$, donc $u_0 = 13$ et $u_{20} = -47$.\nLa somme $u_0 + \\cdots + u_{20}$ vaut $21 \\times \\frac{13 - 47}{2} = 21 \\times (-17) = -357$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p01_q5",
            "type": "mcq",
            "prompt": "La suite $(u_n)$ est arithmétique de raison $-3$ et $u_2 = 7$. Que vaut la somme $u_0 + u_1 + \\cdots + u_{20}$ ?",
            "options": [
              "$-357$",
              "$357$",
              "$-273$",
              "$273$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$u_n = -3n + 13$, donc $u_0 = 13$ et $u_{20} = -47$ ; la somme vaut $21 \\times \\frac{13 - 47}{2} = 21 \\times (-17) = -357$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La situation complexe : le véhicule qui se déprécie",
          "stepTheme": "La situation complexe : le véhicule qui se déprécie",
          "stepBadge": "La situation complexe : le véhicule qui se déprécie",
          "paragraphText": "• Une entreprise achète un véhicule à $30\\ 000\\ 000$ F CFA ; il se déprécie de $20\\%$ par an.\nLe prix de revente après $n$ années est une suite géométrique : $u_{n+1} = u_n - 0{,}2u_n = 0{,}8u_n$, de premier terme $u_0 = 30\\ 000\\ 000$.\nAprès $5$ ans : $u_5 = 30\\ 000\\ 000 \\times 0{,}8^5 = 9\\ 830\\ 400$ F CFA. (Le prix d'un véhicule neuf augmente de $3\\%$ par an : $v_5 = 30\\ 000\\ 000 \\times 1{,}03^5 \\approx 34\\ 778\\ 222$ F CFA, soit une différence $v_5 - u_5 \\approx 24\\ 947\\ 822$ F CFA, inférieure à $25\\ 000\\ 000$ F CFA : l'employé peut acquérir le véhicule.)",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p01_q6",
            "type": "mcq",
            "prompt": "Un véhicule acheté $30\\ 000\\ 000$ F CFA se déprécie de $20\\%$ par an. Quel est son prix de revente après $5$ ans ?",
            "options": [
              "$9\\ 830\\ 400$ F CFA",
              "$10\\ 000\\ 000$ F CFA",
              "$9\\ 000\\ 000$ F CFA",
              "$12\\ 000\\ 000$ F CFA"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le prix suit une suite géométrique de raison $0{,}8$ : $u_5 = 30\\ 000\\ 000 \\times 0{,}8^5 = 30\\ 000\\ 000 \\times 0{,}32768 = 9\\ 830\\ 400$ F CFA."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l09_suites_p01_q1",
          "type": "mcq",
          "prompt": "La suite $(u_n)$ est arithmétique de raison $-3$. Quelle relation y a-t-il entre $u_{n+1}$ et $u_n$ ?",
          "options": [
            "$u_{n+1} = u_n - 3$",
            "$u_{n+1} = -3u_n$",
            "$u_{n+1} = u_n + 3$",
            "$u_{n+1} = 3u_n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une suite arithmétique de raison $r$, $u_{n+1} = u_n + r$ ; ici $r = -3$, donc $u_{n+1} = u_n - 3$."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p01_q2",
          "type": "mcq",
          "prompt": "La suite $(v_n)$ est géométrique de raison $-3$. Quelle relation y a-t-il entre $v_{n+1}$ et $v_n$ ?",
          "options": [
            "$v_{n+1} = -3v_n$",
            "$v_{n+1} = v_n - 3$",
            "$v_{n+1} = v_n + 3$",
            "$v_{n+1} = 3v_n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une suite géométrique de raison $q$, $v_{n+1} = qv_n$ ; ici $q = -3$, donc $v_{n+1} = -3v_n$."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p01_q3",
          "type": "mcq",
          "prompt": "La suite $(u_n)$ est arithmétique de raison $2$ et $u_3 = -5$. Quelle est l'expression de $u_n$ en fonction de $n$ ?",
          "options": [
            "$u_n = 2n - 11$",
            "$u_n = 2n - 5$",
            "$u_n = 2n + 1$",
            "$u_n = -2n - 11$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$u_n = (n - 3) \\times 2 + u_3 = 2(n - 3) - 5 = 2n - 11$."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p01_q4",
          "type": "mcq",
          "prompt": "La suite $(v_n)$ est géométrique de raison $-\\frac{3}{2}$ et $v_4 = 16$. Quelle est l'expression de $v_n$ en fonction de $n$ ?",
          "options": [
            "$v_n = 16 \\times \\left(-\\frac{3}{2}\\right)^{n-4}$",
            "$v_n = 16 \\times \\left(-\\frac{3}{2}\\right)^n$",
            "$v_n = 16 \\times \\left(-\\frac{2}{3}\\right)^{n-4}$",
            "$v_n = \\left(-\\frac{3}{2}\\right)^{n-4}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$v_n = v_4 \\times q^{n-4} = 16 \\times \\left(-\\frac{3}{2}\\right)^{n-4}$."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p01_q5",
          "type": "mcq",
          "prompt": "La suite $(u_n)$ est arithmétique de raison $-3$ et $u_2 = 7$. Que vaut la somme $u_0 + u_1 + \\cdots + u_{20}$ ?",
          "options": [
            "$-357$",
            "$357$",
            "$-273$",
            "$273$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$u_n = -3n + 13$, donc $u_0 = 13$ et $u_{20} = -47$ ; la somme vaut $21 \\times \\frac{13 - 47}{2} = 21 \\times (-17) = -357$."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p01_q6",
          "type": "mcq",
          "prompt": "Un véhicule acheté $30\\ 000\\ 000$ F CFA se déprécie de $20\\%$ par an. Quel est son prix de revente après $5$ ans ?",
          "options": [
            "$9\\ 830\\ 400$ F CFA",
            "$10\\ 000\\ 000$ F CFA",
            "$9\\ 000\\ 000$ F CFA",
            "$12\\ 000\\ 000$ F CFA"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le prix suit une suite géométrique de raison $0{,}8$ : $u_5 = 30\\ 000\\ 000 \\times 0{,}8^5 = 30\\ 000\\ 000 \\times 0{,}32768 = 9\\ 830\\ 400$ F CFA."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l09_suites_p02",
      "order": 2,
      "title": "Raisonnement par récurrence et sens de variation",
      "summary": "Les trois étapes du raisonnement par récurrence et les méthodes pour étudier le sens de variation d'une suite : signe de la différence, quotient et fonction associée.",
      "conceptExplanation": "Raisonnement par récurrence : pour démontrer qu'une proposition dépendant de $n$ est vraie pour tout $n \\geq n_0$, on procède en trois étapes : l'initialisation (on vérifie la proposition au rang $n_0$), l'hérédité (on suppose la proposition vraie au rang $k \\geq n_0$ et on démontre qu'elle est vraie au rang $k + 1$), la conclusion.\nSens de variation : la suite $(u_n)$ est croissante si $u_n \\leq u_{n+1}$ pour tout $n$, décroissante si $u_n \\geq u_{n+1}$ ; elle est monotone si elle est croissante ou décroissante.\nMéthodes : étudier le signe de $u_{n+1} - u_n$ ; si $u_n > 0$, comparer le quotient $\\frac{u_{n+1}}{u_n}$ à $1$ ; si $u_n = f(n)$, la suite a le même sens de variation que la fonction $f$.",
      "keyRule": "Récurrence : initialisation, hérédité, conclusion. Variation : signe de u(n+1)−u(n), ou quotient comparé à 1, ou variations de f si u(n)=f(n).",
      "formulas": [
        {
          "name": "Signe de la différence",
          "formula": "u_{n+1} - u_n \\geq 0 \\Rightarrow (u_n) \\text{ croissante}",
          "note": "Pour tout n de l'ensemble de définition."
        },
        {
          "name": "Comparaison du quotient à 1",
          "formula": "\\frac{u_{n+1}}{u_n} \\geq 1 \\Rightarrow (u_n) \\text{ croissante}",
          "note": "Si u_n > 0 pour tout n."
        },
        {
          "name": "Suite définie par une fonction",
          "formula": "u_n = f(n) \\Rightarrow (u_n) \\text{ a le même sens de variation que } f",
          "note": "On étudie les variations de f."
        }
      ],
      "workedExample": {
        "title": "La suite $w_n = n^2 + 3n$ est croissante",
        "statement": "Soit la suite $(w_n)$ définie sur $\\mathbb{N}$ par $w_n = n^2 + 3n$. Démontre que la suite $(w_n)$ est croissante.",
        "methodSteps": [
          "Pour tout entier naturel $n$, $w_{n+1} - w_n = (n + 1)^2 + 3(n + 1) - (n^2 + 3n)$.",
          "On obtient $w_{n+1} - w_n = 2n + 4$, donc $w_{n+1} - w_n > 0$ pour tout $n \\in \\mathbb{N}$.",
          "Par suite, la suite $(w_n)$ est croissante."
        ],
        "conclusion": "La suite $(w_n)$ définie par $w_n = n^2 + 3n$ est croissante."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les trois étapes du raisonnement par récurrence",
          "stepTheme": "Les trois étapes du raisonnement par récurrence",
          "stepBadge": "Les trois étapes du raisonnement par récurrence",
          "paragraphText": "• Pour démontrer qu'une proposition dépendant de $n$ est vraie pour tout $n \\geq n_0$, on procède en trois étapes.\n1. Initialisation : on vérifie que la proposition est vraie au rang $n_0$.\n2. Hérédité : on suppose la proposition vraie au rang $k \\geq n_0$ et on démontre qu'elle est vraie au rang $k + 1$.\n3. Conclusion : la proposition est vraie pour tout $n \\geq n_0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p02_q1",
            "type": "mcq",
            "prompt": "Quelles sont, dans l'ordre, les trois étapes du raisonnement par récurrence ?",
            "options": [
              "Initialisation, hérédité, conclusion",
              "Hérédité, initialisation, conclusion",
              "Initialisation, conclusion, généralisation",
              "Vérification, hérédité, démonstration"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On vérifie d'abord la proposition au rang initial (initialisation), puis on démontre l'hérédité (du rang k au rang k + 1), et on conclut."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L'initialisation : démontrer que $u_n < 6$",
          "stepTheme": "L'initialisation : démontrer que $u_n < 6$",
          "stepBadge": "L'initialisation : démontrer que $u_n < 6$",
          "paragraphText": "• Soit la suite $(u_n)$ définie par $u_0 = -1$ et $u_{n+1} = \\frac{1}{2}u_n + 3$. On veut démontrer par récurrence que $u_n < 6$ pour tout $n$.\nL'initialisation consiste à vérifier la proposition au rang $0$ : $u_0 = -1$, et $-1 < 6$.\nLa proposition est donc vraie au rang $0$ ; l'hérédité se fait ensuite en supposant $u_k < 6$ pour démontrer $u_{k+1} < 6$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p02_q2",
            "type": "mcq",
            "prompt": "Pour démontrer par récurrence que $u_n < 6$ avec $u_0 = -1$ et $u_{n+1} = \\frac{1}{2}u_n + 3$, que vérifie-t-on à l'initialisation ?",
            "options": [
              "$u_0 = -1 < 6$",
              "$u_0 = 6$",
              "$u_1 = \\frac{5}{2} < 6$",
              "$u_0 = 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L'initialisation vérifie la proposition au rang 0 : $u_0 = -1$ et $-1 < 6$, donc la proposition est vraie au rang 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La méthode algébrique : le signe de $u_{n+1} - u_n$",
          "stepTheme": "La méthode algébrique : le signe de $u_{n+1} - u_n$",
          "stepBadge": "La méthode algébrique : le signe de $u_{n+1} - u_n$",
          "paragraphText": "• Pour étudier le sens de variation, on étudie le signe de $u_{n+1} - u_n$ : s'il est positif, la suite est croissante ; s'il est négatif, elle est décroissante.\nExemple : $w_n = n^2 + 3n$ donne $w_{n+1} - w_n = 2n + 4 > 0$ pour tout $n$.\nDonc la suite $(w_n)$ est croissante.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p02_q3",
            "type": "mcq",
            "prompt": "Pour la suite définie par $w_n = n^2 + 3n$, que vaut $w_{n+1} - w_n$ et qu'en déduit-on ?",
            "options": [
              "$2n + 4 > 0$ : la suite est croissante",
              "$2n + 4 < 0$ : la suite est décroissante",
              "$-2n - 4 > 0$ : la suite est croissante",
              "$2$ : la suite est constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$w_{n+1} - w_n = (n + 1)^2 + 3(n + 1) - (n^2 + 3n) = 2n + 4 > 0$ pour tout $n$ : la suite est croissante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La méthode du quotient",
          "stepTheme": "La méthode du quotient",
          "stepBadge": "La méthode du quotient",
          "paragraphText": "• Si $u_n > 0$ pour tout $n$, on compare le quotient $\\frac{u_{n+1}}{u_n}$ à $1$ : s'il est supérieur ou égal à $1$, la suite est croissante ; s'il est inférieur ou égal à $1$, elle est décroissante.\nExemple : $v_n = e^{-2n+1}$ donne $\\frac{v_{n+1}}{v_n} = e^{-2} < 1$.\nDonc la suite $(v_n)$ est décroissante.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p02_q4",
            "type": "mcq",
            "prompt": "Pour la suite définie par $v_n = e^{-2n+1}$, que vaut $\\frac{v_{n+1}}{v_n}$ et qu'en déduit-on ?",
            "options": [
              "$e^{-2} < 1$ : la suite est décroissante",
              "$e^{-2} > 1$ : la suite est croissante",
              "$e^2 < 1$ : la suite est décroissante",
              "$e^{-2n} < 1$ : la suite est croissante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\frac{v_{n+1}}{v_n} = \\frac{e^{-2(n+1)+1}}{e^{-2n+1}} = e^{-2} < 1$ : la suite $(v_n)$ est décroissante."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La méthode de la fonction associée",
          "stepTheme": "La méthode de la fonction associée",
          "stepBadge": "La méthode de la fonction associée",
          "paragraphText": "• Si $u_n = f(n)$, alors la suite $(u_n)$ a le même sens de variation que la fonction $f$.\nExemple : $u_n = \\sqrt{\\ln n}$ pour $n \\geq 2$, avec $f(x) = \\sqrt{\\ln x}$ définie sur $[2 ; +\\infty[$.\nOn a $f'(x) = \\frac{1}{2x\\sqrt{\\ln x}} > 0$ sur $[2 ; +\\infty[$ : $f$ est croissante, donc la suite $(u_n)$ est croissante.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p02_q5",
            "type": "mcq",
            "prompt": "La suite $(u_n)$ est définie pour $n \\geq 2$ par $u_n = \\sqrt{\\ln n}$. Quel est son sens de variation ?",
            "options": [
              "Croissante",
              "Décroissante",
              "Constante",
              "Ni monotone ni convergente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $f(x) = \\sqrt{\\ln x}$, $f'(x) = \\frac{1}{2x\\sqrt{\\ln x}} > 0$ sur $[2 ; +\\infty[$ : $f$ est croissante, donc la suite $(u_n)$ est croissante."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les définitions : croissante, décroissante, monotone",
          "stepTheme": "Les définitions : croissante, décroissante, monotone",
          "stepBadge": "Les définitions : croissante, décroissante, monotone",
          "paragraphText": "• La suite $(u_n)$ est croissante si $u_n \\leq u_{n+1}$ pour tout $n$, décroissante si $u_n \\geq u_{n+1}$ pour tout $n$.\nElle est strictement croissante si $u_n < u_{n+1}$, strictement décroissante si $u_n > u_{n+1}$, constante si $u_n = u_{n+1}$.\nElle est monotone si elle est croissante ou décroissante.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p02_q6",
            "type": "mcq",
            "prompt": "Si $u_n > 0$ pour tout $n$ et $\\frac{u_{n+1}}{u_n} \\geq 1$ pour tout $n$, que peut-on dire de la suite $(u_n)$ ?",
            "options": [
              "Elle est croissante",
              "Elle est décroissante",
              "Elle est constante",
              "On ne peut rien conclure"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si $u_n > 0$ et $\\frac{u_{n+1}}{u_n} \\geq 1$, alors $u_{n+1} \\geq u_n$ pour tout $n$ : la suite est croissante."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l09_suites_p02_q1",
          "type": "mcq",
          "prompt": "Quelles sont, dans l'ordre, les trois étapes du raisonnement par récurrence ?",
          "options": [
            "Initialisation, hérédité, conclusion",
            "Hérédité, initialisation, conclusion",
            "Initialisation, conclusion, généralisation",
            "Vérification, hérédité, démonstration"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On vérifie d'abord la proposition au rang initial (initialisation), puis on démontre l'hérédité (du rang k au rang k + 1), et on conclut."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p02_q2",
          "type": "mcq",
          "prompt": "Pour démontrer par récurrence que $u_n < 6$ avec $u_0 = -1$ et $u_{n+1} = \\frac{1}{2}u_n + 3$, que vérifie-t-on à l'initialisation ?",
          "options": [
            "$u_0 = -1 < 6$",
            "$u_0 = 6$",
            "$u_1 = \\frac{5}{2} < 6$",
            "$u_0 = 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L'initialisation vérifie la proposition au rang 0 : $u_0 = -1$ et $-1 < 6$, donc la proposition est vraie au rang 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p02_q3",
          "type": "mcq",
          "prompt": "Pour la suite définie par $w_n = n^2 + 3n$, que vaut $w_{n+1} - w_n$ et qu'en déduit-on ?",
          "options": [
            "$2n + 4 > 0$ : la suite est croissante",
            "$2n + 4 < 0$ : la suite est décroissante",
            "$-2n - 4 > 0$ : la suite est croissante",
            "$2$ : la suite est constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$w_{n+1} - w_n = (n + 1)^2 + 3(n + 1) - (n^2 + 3n) = 2n + 4 > 0$ pour tout $n$ : la suite est croissante."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p02_q4",
          "type": "mcq",
          "prompt": "Pour la suite définie par $v_n = e^{-2n+1}$, que vaut $\\frac{v_{n+1}}{v_n}$ et qu'en déduit-on ?",
          "options": [
            "$e^{-2} < 1$ : la suite est décroissante",
            "$e^{-2} > 1$ : la suite est croissante",
            "$e^2 < 1$ : la suite est décroissante",
            "$e^{-2n} < 1$ : la suite est croissante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\frac{v_{n+1}}{v_n} = \\frac{e^{-2(n+1)+1}}{e^{-2n+1}} = e^{-2} < 1$ : la suite $(v_n)$ est décroissante."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p02_q5",
          "type": "mcq",
          "prompt": "La suite $(u_n)$ est définie pour $n \\geq 2$ par $u_n = \\sqrt{\\ln n}$. Quel est son sens de variation ?",
          "options": [
            "Croissante",
            "Décroissante",
            "Constante",
            "Ni monotone ni convergente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $f(x) = \\sqrt{\\ln x}$, $f'(x) = \\frac{1}{2x\\sqrt{\\ln x}} > 0$ sur $[2 ; +\\infty[$ : $f$ est croissante, donc la suite $(u_n)$ est croissante."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p02_q6",
          "type": "mcq",
          "prompt": "Si $u_n > 0$ pour tout $n$ et $\\frac{u_{n+1}}{u_n} \\geq 1$ pour tout $n$, que peut-on dire de la suite $(u_n)$ ?",
          "options": [
            "Elle est croissante",
            "Elle est décroissante",
            "Elle est constante",
            "On ne peut rien conclure"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si $u_n > 0$ et $\\frac{u_{n+1}}{u_n} \\geq 1$, alors $u_{n+1} \\geq u_n$ pour tout $n$ : la suite est croissante."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l09_suites_p03",
      "order": 3,
      "title": "Suites majorées, minorées, bornées",
      "summary": "Définitions des suites majorées, minorées et bornées, avec les pièges classiques sur les quantificateurs « pour tout » et « il existe ».",
      "conceptExplanation": "La suite $(u_n)$ est majorée s'il existe un réel $M$ tel que $u_n \\leq M$ pour tout $n$ ; elle est minorée s'il existe un réel $m$ tel que $u_n \\geq m$ pour tout $n$ ; elle est bornée si elle est à la fois majorée et minorée.\nAttention : le « pour tout $n$ » est essentiel. Qu'un seul terme vérifie une inégalité ne suffit pas à minorer ou majorer la suite.\nOn peut utiliser un raisonnement par récurrence pour démontrer qu'une suite est minorée, majorée ou bornée.",
      "keyRule": "Majorée : u(n) ≤ M pour tout n. Minorée : u(n) ≥ m pour tout n. Bornée : les deux à la fois.",
      "formulas": [
        {
          "name": "Suite majorée",
          "formula": "\\exists M \\in \\mathbb{R}, \\forall n, u_n \\leq M",
          "note": "M est un majorant de la suite."
        },
        {
          "name": "Suite minorée",
          "formula": "\\exists m \\in \\mathbb{R}, \\forall n, u_n \\geq m",
          "note": "m est un minorant de la suite."
        },
        {
          "name": "Suite bornée",
          "formula": "\\exists M > 0, \\forall n, |u_n| \\leq M",
          "note": "Majorée et minorée à la fois."
        }
      ],
      "workedExample": {
        "title": "La suite $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$ est bornée",
        "statement": "On considère la suite $v$ définie sur $\\mathbb{N}$ par $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$. Démontre que la suite $v$ est minorée par $\\sqrt{2}$ et majorée par $2$.",
        "methodSteps": [
          "Pour tout $n$, $1 \\leq 1 + n^2$, donc $0 < \\frac{1}{1+n^2} \\leq 1$ et $0 < \\frac{2}{1+n^2} \\leq 2$.",
          "On en déduit $-2 \\leq -\\frac{2}{1+n^2} < 0$, puis $2 \\leq 4 - \\frac{2}{1+n^2} < 4$.",
          "En prenant la racine carrée : $\\sqrt{2} \\leq v_n < 2$ pour tout $n$ : la suite est bornée."
        ],
        "conclusion": "La suite $v$ est minorée par $\\sqrt{2}$ et majorée par $2$ : elle est bornée."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "piege",
          "stepTitle": "Si $u_n < -3$ pour tout $n$, la suite est-elle minorée par $-3$ ?",
          "stepTheme": "Si $u_n < -3$ pour tout $n$, la suite est-elle minorée par $-3$ ?",
          "stepBadge": "Si $u_n < -3$ pour tout $n$, la suite est-elle minorée par $-3$ ?",
          "paragraphText": "• Dire que $u_n < -3$ pour tout $n$, c'est dire que tous les termes sont en dessous de $-3$.\n$-3$ est donc un majorant de la suite, pas un minorant : la suite est majorée par $-3$.\nL'affirmation « la suite est minorée par $-3$ » est fausse.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p03_q1",
            "type": "mcq",
            "prompt": "Si pour tout entier naturel $n$, $u_n < -3$, que peut-on dire de la suite $(u_n)$ ?",
            "options": [
              "La suite est majorée par $-3$",
              "La suite est minorée par $-3$",
              "La suite est bornée",
              "La suite est convergente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tous les termes sont inférieurs à $-3$ : $-3$ est un majorant. La suite est majorée par $-3$, et non minorée par $-3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Un seul terme suffit-il à minorer la suite ?",
          "stepTheme": "Un seul terme suffit-il à minorer la suite ?",
          "stepBadge": "Un seul terme suffit-il à minorer la suite ?",
          "paragraphText": "• Pour minorer une suite par $0$, il faut $u_n \\geq 0$ pour tout $n$.\nS'il existe seulement un entier $n$ tel que $u_n \\geq 0$, cela ne suffit pas : les autres termes peuvent être inférieurs à $0$.\nL'affirmation « s'il existe $n$ tel que $u_n \\geq 0$, alors la suite est minorée par $0$ » est fausse.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p03_q2",
            "type": "mcq",
            "prompt": "S'il existe un entier naturel $n$ tel que $u_n \\geq 0$, la suite $(u_n)$ est-elle minorée par $0$ ?",
            "options": [
              "Non : il faut que ce soit vrai pour tout $n$",
              "Oui",
              "Oui, si $n$ est pair",
              "Non, elle est majorée par $0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un minorant doit minorer tous les termes. Un seul terme supérieur ou égal à 0 ne suffit pas à minorer la suite par 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Si $u_n \\geq 2$ pour tout $n$, la suite est-elle majorée par $2$ ?",
          "stepTheme": "Si $u_n \\geq 2$ pour tout $n$, la suite est-elle majorée par $2$ ?",
          "stepBadge": "Si $u_n \\geq 2$ pour tout $n$, la suite est-elle majorée par $2$ ?",
          "paragraphText": "• Dire que $u_n \\geq 2$ pour tout $n$, c'est dire que tous les termes sont au-dessus de $2$.\n$2$ est donc un minorant de la suite, pas un majorant : la suite est minorée par $2$.\nL'affirmation « la suite est majorée par $2$ » est fausse.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p03_q3",
            "type": "mcq",
            "prompt": "Si pour tout entier naturel $n$, $u_n \\geq 2$, que peut-on dire de la suite $(u_n)$ ?",
            "options": [
              "La suite est minorée par $2$",
              "La suite est majorée par $2$",
              "La suite est bornée",
              "La suite est convergente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tous les termes sont supérieurs ou égaux à 2 : 2 est un minorant. La suite est minorée par 2, et non majorée par 2."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Si $|u_n| < 1$ pour tout $n$, la suite est bornée",
          "stepTheme": "Si $|u_n| < 1$ pour tout $n$, la suite est bornée",
          "stepBadge": "Si $|u_n| < 1$ pour tout $n$, la suite est bornée",
          "paragraphText": "• $|u_n| < 1$ pour tout $n$ signifie $-1 < u_n < 1$ pour tout $n$.\nLa suite est donc à la fois minorée par $-1$ et majorée par $1$ : elle est bornée.\nL'affirmation « si $|u_n| < 1$ pour tout $n$, alors la suite est bornée » est vraie.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p03_q4",
            "type": "mcq",
            "prompt": "Si pour tout entier naturel $n$, $|u_n| < 1$, que peut-on dire de la suite $(u_n)$ ?",
            "options": [
              "Elle est bornée",
              "Elle est convergente",
              "Elle est majorée par $1$ seulement",
              "Elle est divergente"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$|u_n| < 1$ donne $-1 < u_n < 1$ pour tout $n$ : la suite est minorée par $-1$ et majorée par $1$, donc bornée."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La suite $u_n = \\frac{n + 3n^2}{1 + n^2}$ est minorée par $2$",
          "stepTheme": "La suite $u_n = \\frac{n + 3n^2}{1 + n^2}$ est minorée par $2$",
          "stepBadge": "La suite $u_n = \\frac{n + 3n^2}{1 + n^2}$ est minorée par $2$",
          "paragraphText": "• Soit $(u_n)$ définie sur $\\mathbb{N}^*$ par $u_n = \\frac{n + 3n^2}{1 + n^2}$.\nOn calcule $u_n - 2 = \\frac{n + 3n^2}{1 + n^2} - 2 = \\frac{n^2 + n - 2}{1 + n^2} = \\frac{(n - 1)(n + 2)}{1 + n^2}$.\nPour $n \\geq 1$, ce quotient est positif ou nul : $u_n \\geq 2$ pour tout $n \\in \\mathbb{N}^*$. La suite est minorée par $2$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p03_q5",
            "type": "mcq",
            "prompt": "Soit $(u_n)$ définie sur $\\mathbb{N}^*$ par $u_n = \\frac{n + 3n^2}{1 + n^2}$. Que peut-on dire de cette suite ?",
            "options": [
              "$u_n \\geq 2$ pour tout $n \\in \\mathbb{N}^*$ : elle est minorée par $2$",
              "$u_n \\leq 2$ pour tout $n \\in \\mathbb{N}^*$",
              "$u_n = 2$ pour tout $n \\in \\mathbb{N}^*$",
              "$u_n < 2$ pour tout $n \\in \\mathbb{N}^*$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$u_n - 2 = \\frac{(n - 1)(n + 2)}{1 + n^2} \\geq 0$ pour $n \\geq 1$ : $u_n \\geq 2$ pour tout $n \\in \\mathbb{N}^*$, la suite est minorée par 2."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La suite $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$ est bornée",
          "stepTheme": "La suite $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$ est bornée",
          "stepBadge": "La suite $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$ est bornée",
          "paragraphText": "• Soit $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$ pour $n \\in \\mathbb{N}$.\nComme $1 \\leq 1 + n^2$, on a $0 < \\frac{2}{1+n^2} \\leq 2$, donc $2 \\leq 4 - \\frac{2}{1+n^2} < 4$.\nEn prenant la racine carrée : $\\sqrt{2} \\leq v_n < 2$ pour tout $n$. La suite est minorée par $\\sqrt{2}$ et majorée par $2$ : elle est bornée.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p03_q6",
            "type": "mcq",
            "prompt": "Soit $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$ pour $n \\in \\mathbb{N}$. Que peut-on dire de cette suite ?",
            "options": [
              "Elle est minorée par $\\sqrt{2}$ et majorée par $2$",
              "Elle est minorée par $2$ et majorée par $\\sqrt{2}$",
              "Elle est majorée par $\\sqrt{2}$",
              "Elle est minorée par $0$ et majorée par $4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2 \\leq 4 - \\frac{2}{1+n^2} < 4$ pour tout $n$, donc $\\sqrt{2} \\leq v_n < 2$ : la suite est minorée par $\\sqrt{2}$ et majorée par $2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l09_suites_p03_q1",
          "type": "mcq",
          "prompt": "Si pour tout entier naturel $n$, $u_n < -3$, que peut-on dire de la suite $(u_n)$ ?",
          "options": [
            "La suite est majorée par $-3$",
            "La suite est minorée par $-3$",
            "La suite est bornée",
            "La suite est convergente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous les termes sont inférieurs à $-3$ : $-3$ est un majorant. La suite est majorée par $-3$, et non minorée par $-3$."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p03_q2",
          "type": "mcq",
          "prompt": "S'il existe un entier naturel $n$ tel que $u_n \\geq 0$, la suite $(u_n)$ est-elle minorée par $0$ ?",
          "options": [
            "Non : il faut que ce soit vrai pour tout $n$",
            "Oui",
            "Oui, si $n$ est pair",
            "Non, elle est majorée par $0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un minorant doit minorer tous les termes. Un seul terme supérieur ou égal à 0 ne suffit pas à minorer la suite par 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p03_q3",
          "type": "mcq",
          "prompt": "Si pour tout entier naturel $n$, $u_n \\geq 2$, que peut-on dire de la suite $(u_n)$ ?",
          "options": [
            "La suite est minorée par $2$",
            "La suite est majorée par $2$",
            "La suite est bornée",
            "La suite est convergente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous les termes sont supérieurs ou égaux à 2 : 2 est un minorant. La suite est minorée par 2, et non majorée par 2."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p03_q4",
          "type": "mcq",
          "prompt": "Si pour tout entier naturel $n$, $|u_n| < 1$, que peut-on dire de la suite $(u_n)$ ?",
          "options": [
            "Elle est bornée",
            "Elle est convergente",
            "Elle est majorée par $1$ seulement",
            "Elle est divergente"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$|u_n| < 1$ donne $-1 < u_n < 1$ pour tout $n$ : la suite est minorée par $-1$ et majorée par $1$, donc bornée."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p03_q5",
          "type": "mcq",
          "prompt": "Soit $(u_n)$ définie sur $\\mathbb{N}^*$ par $u_n = \\frac{n + 3n^2}{1 + n^2}$. Que peut-on dire de cette suite ?",
          "options": [
            "$u_n \\geq 2$ pour tout $n \\in \\mathbb{N}^*$ : elle est minorée par $2$",
            "$u_n \\leq 2$ pour tout $n \\in \\mathbb{N}^*$",
            "$u_n = 2$ pour tout $n \\in \\mathbb{N}^*$",
            "$u_n < 2$ pour tout $n \\in \\mathbb{N}^*$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$u_n - 2 = \\frac{(n - 1)(n + 2)}{1 + n^2} \\geq 0$ pour $n \\geq 1$ : $u_n \\geq 2$ pour tout $n \\in \\mathbb{N}^*$, la suite est minorée par 2."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p03_q6",
          "type": "mcq",
          "prompt": "Soit $v_n = \\sqrt{4 - \\frac{2}{1+n^2}}$ pour $n \\in \\mathbb{N}$. Que peut-on dire de cette suite ?",
          "options": [
            "Elle est minorée par $\\sqrt{2}$ et majorée par $2$",
            "Elle est minorée par $2$ et majorée par $\\sqrt{2}$",
            "Elle est majorée par $\\sqrt{2}$",
            "Elle est minorée par $0$ et majorée par $4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2 \\leq 4 - \\frac{2}{1+n^2} < 4$ pour tout $n$, donc $\\sqrt{2} \\leq v_n < 2$ : la suite est minorée par $\\sqrt{2}$ et majorée par $2$."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l09_suites_p04",
      "order": 4,
      "title": "Convergence d'une suite numérique",
      "summary": "Définition d'une suite convergente, limites de référence des suites puissances et propriétés de convergence des suites monotones.",
      "conceptExplanation": "Une suite $(u_n)$ est convergente lorsqu'elle admet une limite finie ; une suite qui n'est pas convergente est dite divergente.\nSi une suite admet une limite, cette limite est unique. Si $u_n = f(n)$ et $\\lim_{x \\to +\\infty} f(x) = l$, alors $\\lim_{n \\to +\\infty} u_n = l$.\nLimites de référence : si $\\alpha > 0$, $\\lim_{n \\to +\\infty} n^\\alpha = +\\infty$ et $\\lim_{n \\to +\\infty} \\frac{1}{n^\\alpha} = 0$.\nSuites monotones : toute suite décroissante et minorée est convergente ; toute suite croissante et majorée est convergente ; toute suite décroissante et non minorée diverge vers $-\\infty$ ; toute suite croissante et non majorée diverge vers $+\\infty$.",
      "keyRule": "Convergente = limite finie. Croissante et majorée → convergente. Décroissante et minorée → convergente.",
      "formulas": [
        {
          "name": "Limite de référence des puissances",
          "formula": "\\lim_{n \\to +\\infty} n^\\alpha = +\\infty \\quad (\\alpha > 0)",
          "note": "Et lim 1/n^α = 0 pour α > 0."
        },
        {
          "name": "Suite croissante et majorée",
          "formula": "(u_n) \\text{ croissante et majorée} \\Rightarrow (u_n) \\text{ convergente}",
          "note": "La limite est inférieure ou égale à tout majorant."
        },
        {
          "name": "Suite décroissante et minorée",
          "formula": "(u_n) \\text{ décroissante et minorée} \\Rightarrow (u_n) \\text{ convergente}",
          "note": "La limite est supérieure ou égale à tout minorant."
        }
      ],
      "workedExample": {
        "title": "La limite de $u_n = \\frac{3n^2 - 2n + 1}{n^3}$",
        "statement": "Soit la suite $(u_n)$ définie sur $\\mathbb{N}^*$ par $u_n = \\frac{3n^2 - 2n + 1}{n^3}$. Calcule sa limite.",
        "methodSteps": [
          "On pose $f(x) = \\frac{3x^2 - 2x + 1}{x^3}$ définie sur $[1 ; +\\infty[$ : pour tout $n$, $u_n = f(n)$.",
          "On a $\\lim_{x \\to +\\infty} f(x) = \\lim_{x \\to +\\infty} \\frac{3x^2}{x^3} = \\lim_{x \\to +\\infty} \\frac{3}{x} = 0$.",
          "Donc $\\lim_{n \\to +\\infty} u_n = 0$."
        ],
        "conclusion": "La suite $(u_n)$ converge vers $0$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une suite constante est convergente",
          "stepTheme": "Une suite constante est convergente",
          "stepBadge": "Une suite constante est convergente",
          "paragraphText": "• Une suite est convergente lorsqu'elle admet une limite finie.\nUne suite constante, de terme général $u_n = c$, admet pour limite $c$ : elle est convergente.\nÀ l'inverse, une suite qui n'admet pas de limite finie est divergente.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p04_q1",
            "type": "mcq",
            "prompt": "Une suite constante est-elle convergente ?",
            "options": [
              "Oui, elle converge vers sa valeur constante",
              "Non, elle diverge vers $+\\infty$",
              "Non, elle n'a pas de limite",
              "Oui, elle converge vers $0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Une suite constante de terme général u_n = c admet pour limite c, qui est finie : elle est convergente."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Une suite arithmétique de raison positive est-elle convergente ?",
          "stepTheme": "Une suite arithmétique de raison positive est-elle convergente ?",
          "stepBadge": "Une suite arithmétique de raison positive est-elle convergente ?",
          "paragraphText": "• Une suite arithmétique de raison $r > 0$ vérifie $u_n = nr + u_0$ : elle tend vers $+\\infty$.\nElle n'admet donc pas de limite finie : elle est divergente.\nSeule une suite arithmétique de raison nulle (suite constante) est convergente.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p04_q2",
            "type": "mcq",
            "prompt": "Une suite arithmétique de raison strictement positive est-elle convergente ?",
            "options": [
              "Non, elle diverge vers $+\\infty$",
              "Oui, elle converge vers sa raison",
              "Oui, elle converge vers $0$",
              "Non, elle diverge vers $-\\infty$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec r > 0, u_n = nr + u_0 tend vers +∞ : la suite n'admet pas de limite finie, elle est divergente."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une suite géométrique de raison $q \\in ]-1 ; 1[$ est convergente",
          "stepTheme": "Une suite géométrique de raison $q \\in ]-1 ; 1[$ est convergente",
          "stepBadge": "Une suite géométrique de raison $q \\in ]-1 ; 1[$ est convergente",
          "paragraphText": "• Si $-1 < q < 1$, alors $\\lim_{n \\to +\\infty} q^n = 0$.\nUne suite géométrique de raison $q \\in ]-1 ; 1[$ converge donc vers $0$.\nSi $q > 1$, elle diverge vers $+\\infty$ ; si $q \\leq -1$, elle n'a pas de limite.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p04_q3",
            "type": "mcq",
            "prompt": "Une suite géométrique de raison $q \\in ]-1 ; 1[$ est-elle convergente ?",
            "options": [
              "Oui, elle converge vers $0$",
              "Non, elle diverge vers $+\\infty$",
              "Non, elle n'a pas de limite",
              "Oui, elle converge vers $1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour -1 < q < 1, lim q^n = 0 : une suite géométrique de raison q dans ]-1 ; 1[ converge vers 0."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La limite de $n^{-2}$",
          "stepTheme": "La limite de $n^{-2}$",
          "stepBadge": "La limite de $n^{-2}$",
          "paragraphText": "• Pour $\\alpha > 0$, $\\lim_{n \\to +\\infty} \\frac{1}{n^\\alpha} = 0$.\nIci $n^{-2} = \\frac{1}{n^2}$ avec $\\alpha = 2 > 0$.\nDonc $\\lim_{n \\to +\\infty} n^{-2} = 0$.",
          "konanTip": "Le PDF (p. 5) écrit « lim f(x) = 3 » puis « Donc : lim u_n = 0 » pour la limite de (3n²−2n+1)/n³ : la valeur retenue est 0, conforme au calcul.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p04_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^{-2}$ ?",
            "options": [
              "$0$",
              "$+\\infty$",
              "$1$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$n^{-2} = \\frac{1}{n^2}$ et, pour α > 0, lim 1/n^α = 0 : la limite vaut 0."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La limite de $n^3$",
          "stepTheme": "La limite de $n^3$",
          "stepBadge": "La limite de $n^3$",
          "paragraphText": "• Pour $\\alpha > 0$, $\\lim_{n \\to +\\infty} n^\\alpha = +\\infty$.\nIci $n^3$ avec $\\alpha = 3 > 0$.\nDonc $\\lim_{n \\to +\\infty} n^3 = +\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p04_q5",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^3$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$1$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour α > 0, lim n^α = +∞ : avec α = 3, la limite de n³ vaut +∞."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La suite $u_n = 1 + \\frac{1}{2^2} + \\cdots + \\frac{1}{n^2}$ converge",
          "stepTheme": "La suite $u_n = 1 + \\frac{1}{2^2} + \\cdots + \\frac{1}{n^2}$ converge",
          "stepBadge": "La suite $u_n = 1 + \\frac{1}{2^2} + \\cdots + \\frac{1}{n^2}$ converge",
          "paragraphText": "• Soit $u_n = \\sum_{k=1}^{n} \\frac{1}{k^2} = 1 + \\frac{1}{2^2} + \\frac{1}{3^2} + \\cdots + \\frac{1}{n^2}$.\nOn a $u_{n+1} - u_n = \\frac{1}{(n+1)^2} > 0$ : la suite est strictement croissante.\nDe plus, pour $k \\geq 2$, $\\frac{1}{k^2} \\leq \\frac{1}{k-1} - \\frac{1}{k}$, donc $u_n \\leq 2 - \\frac{1}{n} < 2$ : la suite est majorée par $2$.\nCroissante et majorée, elle converge. (Euler a démontré que sa limite vaut $\\frac{\\pi^2}{6}$.)",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p04_q6",
            "type": "mcq",
            "prompt": "Soit $u_n = 1 + \\frac{1}{2^2} + \\frac{1}{3^2} + \\cdots + \\frac{1}{n^2}$. Que peut-on dire de cette suite ?",
            "options": [
              "Elle est convergente : croissante et majorée par $2$",
              "Elle diverge vers $+\\infty$",
              "Elle converge vers $2$",
              "Elle est divergente car non majorée"
            ],
            "correctAnswerIndex": 0,
            "explanation": "u_{n+1} - u_n = 1/(n+1)² > 0 : la suite est croissante ; et u_n ≤ 2 - 1/n < 2 : elle est majorée par 2. Croissante et majorée, elle converge (sa limite vaut π²/6)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l09_suites_p04_q1",
          "type": "mcq",
          "prompt": "Une suite constante est-elle convergente ?",
          "options": [
            "Oui, elle converge vers sa valeur constante",
            "Non, elle diverge vers $+\\infty$",
            "Non, elle n'a pas de limite",
            "Oui, elle converge vers $0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Une suite constante de terme général u_n = c admet pour limite c, qui est finie : elle est convergente."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p04_q2",
          "type": "mcq",
          "prompt": "Une suite arithmétique de raison strictement positive est-elle convergente ?",
          "options": [
            "Non, elle diverge vers $+\\infty$",
            "Oui, elle converge vers sa raison",
            "Oui, elle converge vers $0$",
            "Non, elle diverge vers $-\\infty$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec r > 0, u_n = nr + u_0 tend vers +∞ : la suite n'admet pas de limite finie, elle est divergente."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p04_q3",
          "type": "mcq",
          "prompt": "Une suite géométrique de raison $q \\in ]-1 ; 1[$ est-elle convergente ?",
          "options": [
            "Oui, elle converge vers $0$",
            "Non, elle diverge vers $+\\infty$",
            "Non, elle n'a pas de limite",
            "Oui, elle converge vers $1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour -1 < q < 1, lim q^n = 0 : une suite géométrique de raison q dans ]-1 ; 1[ converge vers 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p04_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^{-2}$ ?",
          "options": [
            "$0$",
            "$+\\infty$",
            "$1$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$n^{-2} = \\frac{1}{n^2}$ et, pour α > 0, lim 1/n^α = 0 : la limite vaut 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p04_q5",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^3$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$1$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour α > 0, lim n^α = +∞ : avec α = 3, la limite de n³ vaut +∞."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p04_q6",
          "type": "mcq",
          "prompt": "Soit $u_n = 1 + \\frac{1}{2^2} + \\frac{1}{3^2} + \\cdots + \\frac{1}{n^2}$. Que peut-on dire de cette suite ?",
          "options": [
            "Elle est convergente : croissante et majorée par $2$",
            "Elle diverge vers $+\\infty$",
            "Elle converge vers $2$",
            "Elle est divergente car non majorée"
          ],
          "correctAnswerIndex": 0,
          "explanation": "u_{n+1} - u_n = 1/(n+1)² > 0 : la suite est croissante ; et u_n ≤ 2 - 1/n < 2 : elle est majorée par 2. Croissante et majorée, elle converge (sa limite vaut π²/6)."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l09_suites_p05",
      "order": 5,
      "title": "Limites de référence et croissances comparées",
      "summary": "Les limites des suites géométriques et puissances selon la raison ou l'exposant, et les croissances comparées de ln n, n^α et a^n.",
      "conceptExplanation": "Suites géométriques $(a^n)$ : si $-1 < a < 1$, $\\lim_{n \\to +\\infty} a^n = 0$ ; si $a = 1$, $\\lim_{n \\to +\\infty} a^n = 1$ ; si $a > 1$, $\\lim_{n \\to +\\infty} a^n = +\\infty$ ; si $a \\leq -1$, la suite $(a^n)$ n'a pas de limite.\nSuites puissances $(n^\\alpha)$ : si $\\alpha < 0$, $\\lim_{n \\to +\\infty} n^\\alpha = 0$ ; si $\\alpha = 0$, $\\lim_{n \\to +\\infty} n^\\alpha = 1$ ; si $\\alpha > 0$, $\\lim_{n \\to +\\infty} n^\\alpha = +\\infty$.\nSuite logarithme : $\\lim_{n \\to +\\infty} \\ln n = +\\infty$.\nCroissances comparées : si $\\alpha > 0$, $\\lim_{n \\to +\\infty} \\frac{\\ln n}{n^\\alpha} = 0$ ; si $a > 1$ et $\\alpha > 0$, $\\lim_{n \\to +\\infty} \\frac{n^\\alpha}{a^n} = 0$ ; si $0 < a < 1$ et $\\alpha < 0$, $\\lim_{n \\to +\\infty} \\frac{n^\\alpha}{a^n} = +\\infty$.",
      "keyRule": "a^n : |a|<1 → 0 ; a>1 → +∞ ; a≤−1 → pas de limite. n^α : α<0 → 0 ; α>0 → +∞. ln n << n^α << a^n.",
      "formulas": [
        {
          "name": "Limite d'une suite géométrique",
          "formula": "-1 < a < 1 \\Rightarrow \\lim_{n \\to +\\infty} a^n = 0",
          "note": "Si a > 1, la limite est +∞ ; si a ≤ −1, pas de limite."
        },
        {
          "name": "Croissance comparée logarithme et puissance",
          "formula": "\\alpha > 0 \\Rightarrow \\lim_{n \\to +\\infty} \\frac{\\ln n}{n^\\alpha} = 0",
          "note": "Le logarithme est négligeable devant toute puissance."
        },
        {
          "name": "Croissance comparée puissance et exponentielle",
          "formula": "a > 1, \\alpha > 0 \\Rightarrow \\lim_{n \\to +\\infty} \\frac{n^\\alpha}{a^n} = 0",
          "note": "La puissance est négligeable devant l'exponentielle."
        }
      ],
      "workedExample": {
        "title": "La limite de $u_n = \\frac{\\sqrt{n}}{\\ln n}$",
        "statement": "Calcule la limite de la suite $(u_n)$ définie par $u_n = \\frac{\\sqrt{n}}{\\ln n}$.",
        "methodSteps": [
          "On a $u_n = \\frac{\\sqrt{n}}{\\ln n} = \\frac{1}{\\frac{\\ln n}{\\sqrt{n}}}$.",
          "Or, par croissance comparée, $\\lim_{n \\to +\\infty} \\frac{\\ln n}{n^{1/2}} = 0$ (ici $\\alpha = \\frac{1}{2} > 0$).",
          "Donc $\\lim_{n \\to +\\infty} u_n = +\\infty$."
        ],
        "conclusion": "La suite $(u_n)$ définie par $u_n = \\frac{\\sqrt{n}}{\\ln n}$ diverge vers $+\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La limite de $n^{-3}$",
          "stepTheme": "La limite de $n^{-3}$",
          "stepBadge": "La limite de $n^{-3}$",
          "paragraphText": "• Pour $\\alpha < 0$, $\\lim_{n \\to +\\infty} n^\\alpha = 0$.\nIci $n^{-3}$ avec $\\alpha = -3 < 0$.\nDonc $\\lim_{n \\to +\\infty} n^{-3} = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p05_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^{-3}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour α < 0, lim n^α = 0 : avec α = −3, la limite vaut 0."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La limite de $n^{2/3}$",
          "stepTheme": "La limite de $n^{2/3}$",
          "stepBadge": "La limite de $n^{2/3}$",
          "paragraphText": "• Pour $\\alpha > 0$, $\\lim_{n \\to +\\infty} n^\\alpha = +\\infty$.\nIci $n^{2/3}$ avec $\\alpha = \\frac{2}{3} > 0$.\nDonc $\\lim_{n \\to +\\infty} n^{2/3} = +\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p05_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^{2/3}$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$1$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour α > 0, lim n^α = +∞ : avec α = 2/3, la limite vaut +∞."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La limite de $(-3)^n$",
          "stepTheme": "La limite de $(-3)^n$",
          "stepBadge": "La limite de $(-3)^n$",
          "paragraphText": "• Pour une suite géométrique de raison $a \\leq -1$, la suite $(a^n)$ n'a pas de limite.\nIci $a = -3 \\leq -1$ : les termes alternent entre des valeurs positives et négatives de plus en plus grandes en valeur absolue.\nDonc $\\lim_{n \\to +\\infty} (-3)^n$ n'existe pas.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} (-3)^n$ ?",
            "options": [
              "Elle n'existe pas",
              "$0$",
              "$+\\infty$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La raison a = −3 vérifie a ≤ −1 : la suite ((−3)^n) n'a pas de limite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La limite de $\\left(-\\frac{2}{e}\\right)^n$",
          "stepTheme": "La limite de $\\left(-\\frac{2}{e}\\right)^n$",
          "stepBadge": "La limite de $\\left(-\\frac{2}{e}\\right)^n$",
          "paragraphText": "• Pour une suite géométrique de raison $a$ avec $-1 < a < 1$, $\\lim_{n \\to +\\infty} a^n = 0$.\nIci $a = -\\frac{2}{e}$ et $\\left|-\\frac{2}{e}\\right| = \\frac{2}{e} \\approx 0{,}74 < 1$.\nDonc $\\lim_{n \\to +\\infty} \\left(-\\frac{2}{e}\\right)^n = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\left(-\\frac{2}{e}\\right)^n$ ?",
            "options": [
              "$0$",
              "$+\\infty$",
              "$1$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La raison a = −2/e vérifie −1 < a < 1 (|a| ≈ 0,74 < 1) : la limite vaut 0."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Croissance comparée : $\\frac{\\ln n}{n^a}$ tend vers $0$",
          "stepTheme": "Croissance comparée : $\\frac{\\ln n}{n^a}$ tend vers $0$",
          "stepBadge": "Croissance comparée : $\\frac{\\ln n}{n^a}$ tend vers $0$",
          "paragraphText": "• Si $a > 0$, alors $\\lim_{n \\to +\\infty} \\frac{\\ln n}{n^a} = 0$ : le logarithme est négligeable devant toute puissance de $n$.\nDe même, si $a > 1$ et $\\alpha > 0$, alors $\\lim_{n \\to +\\infty} \\frac{n^\\alpha}{a^n} = 0$ : la puissance est négligeable devant l'exponentielle.\nEt si $0 < a < 1$ et $\\alpha < 0$, alors $\\lim_{n \\to +\\infty} \\frac{n^\\alpha}{a^n} = +\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p05_q5",
            "type": "mcq",
            "prompt": "Si $a > 0$, que vaut $\\lim_{n \\to +\\infty} \\frac{\\ln n}{n^a}$ ?",
            "options": [
              "$0$",
              "$+\\infty$",
              "$1$",
              "$a$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par croissance comparée, pour a > 0, lim (ln n)/n^a = 0 : le logarithme est négligeable devant n^a."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La limite de $\\left(\\frac{7}{5}\\right)^n$",
          "stepTheme": "La limite de $\\left(\\frac{7}{5}\\right)^n$",
          "stepBadge": "La limite de $\\left(\\frac{7}{5}\\right)^n$",
          "paragraphText": "• Pour une suite géométrique de raison $a > 1$, $\\lim_{n \\to +\\infty} a^n = +\\infty$.\nIci $a = \\frac{7}{5} > 1$.\nDonc $\\lim_{n \\to +\\infty} \\left(\\frac{7}{5}\\right)^n = +\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p05_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\left(\\frac{7}{5}\\right)^n$ ?",
            "options": [
              "$+\\infty$",
              "$0$",
              "$1$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La raison a = 7/5 est supérieure à 1 : la suite géométrique diverge vers +∞."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l09_suites_p05_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^{-3}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour α < 0, lim n^α = 0 : avec α = −3, la limite vaut 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p05_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} n^{2/3}$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$1$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour α > 0, lim n^α = +∞ : avec α = 2/3, la limite vaut +∞."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} (-3)^n$ ?",
          "options": [
            "Elle n'existe pas",
            "$0$",
            "$+\\infty$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La raison a = −3 vérifie a ≤ −1 : la suite ((−3)^n) n'a pas de limite."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\left(-\\frac{2}{e}\\right)^n$ ?",
          "options": [
            "$0$",
            "$+\\infty$",
            "$1$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La raison a = −2/e vérifie −1 < a < 1 (|a| ≈ 0,74 < 1) : la limite vaut 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p05_q5",
          "type": "mcq",
          "prompt": "Si $a > 0$, que vaut $\\lim_{n \\to +\\infty} \\frac{\\ln n}{n^a}$ ?",
          "options": [
            "$0$",
            "$+\\infty$",
            "$1$",
            "$a$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par croissance comparée, pour a > 0, lim (ln n)/n^a = 0 : le logarithme est négligeable devant n^a."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p05_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\left(\\frac{7}{5}\\right)^n$ ?",
          "options": [
            "$+\\infty$",
            "$0$",
            "$1$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La raison a = 7/5 est supérieure à 1 : la suite géométrique diverge vers +∞."
        }
      ]
    },
    {
      "id": "terminale_c_maths_numerique_l09_suites_p06",
      "order": 6,
      "title": "Comparaison, suites récurrentes et situation complexe",
      "summary": "Théorèmes de comparaison et d'encadrement, limite d'une suite du type f(u_n), limite d'une suite récurrente et retour sur la situation du véhicule.",
      "conceptExplanation": "Comparaison : si $u_n \\leq v_n$ à partir d'un certain rang et si $(u_n)$ et $(v_n)$ convergent, alors $\\lim u_n \\leq \\lim v_n$.\nSi $u_n \\leq v_n$ à partir d'un certain rang et $\\lim v_n = -\\infty$, alors $\\lim u_n = -\\infty$ ; si $u_n \\geq v_n$ à partir d'un certain rang et $\\lim v_n = +\\infty$, alors $\\lim u_n = +\\infty$.\nEncadrement (gendarmes) : si $v_n \\leq u_n \\leq w_n$ à partir d'un certain rang et si $(v_n)$ et $(w_n)$ convergent vers $l$, alors $(u_n)$ converge vers $l$.\nSuite du type $v_n = f(u_n)$ : si $\\lim u_n = a$ et $\\lim_{x \\to a} f(x) = l$, alors $\\lim v_n = l$.\nSuite récurrente $u_{n+1} = f(u_n)$ avec $f$ continue sur $K$ : si $(u_n)$ converge, sa limite est une solution de l'équation $f(x) = x$ dans $K$.",
      "keyRule": "Comparaison et gendarmes ; v(n)=f(u(n)) : limite composée ; récurrente convergente : limite = point fixe de f.",
      "formulas": [
        {
          "name": "Théorème des gendarmes",
          "formula": "v_n \\leq u_n \\leq w_n, \\lim v_n = \\lim w_n = l \\Rightarrow \\lim u_n = l",
          "note": "À partir d'un certain rang."
        },
        {
          "name": "Limite d'une suite composée",
          "formula": "\\lim u_n = a, \\lim_{x \\to a} f(x) = l \\Rightarrow \\lim f(u_n) = l",
          "note": "Suite v_n = f(u_n)."
        },
        {
          "name": "Limite d'une suite récurrente",
          "formula": "u_{n+1} = f(u_n), f \\text{ continue}, (u_n) \\text{ convergente} \\Rightarrow \\lim u_n = x \\text{ avec } f(x) = x",
          "note": "La limite est un point fixe de f."
        }
      ],
      "workedExample": {
        "title": "La limite de $u_n = -n + \\cos n$",
        "statement": "Soit la suite $(u_n)$ définie sur $\\mathbb{N}$ par $u_n = -n + \\cos n$. Calcule sa limite.",
        "methodSteps": [
          "Comme $\\cos n \\leq 1$ pour tout $n$, on a $u_n \\leq -n + 1$ pour tout $n$.",
          "Or $\\lim_{n \\to +\\infty} (-n + 1) = -\\infty$.",
          "Par comparaison, $\\lim_{n \\to +\\infty} u_n = -\\infty$."
        ],
        "conclusion": "La suite $(u_n)$ définie par $u_n = -n + \\cos n$ diverge vers $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "La limite de $\\frac{\\ln(n+1)}{n}$",
          "stepTheme": "La limite de $\\frac{\\ln(n+1)}{n}$",
          "stepBadge": "La limite de $\\frac{\\ln(n+1)}{n}$",
          "paragraphText": "• On a $\\frac{\\ln(n+1)}{n} = \\frac{\\ln(n+1)}{n+1} \\times \\frac{n+1}{n}$.\nOr $\\lim_{n \\to +\\infty} \\frac{\\ln(n+1)}{n+1} = 0$ (croissance comparée) et $\\lim_{n \\to +\\infty} \\frac{n+1}{n} = 1$.\nDonc $\\lim_{n \\to +\\infty} \\frac{\\ln(n+1)}{n} = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p06_q1",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\frac{\\ln(n+1)}{n}$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "(ln(n+1))/n = (ln(n+1))/(n+1) × (n+1)/n : le premier facteur tend vers 0 (croissance comparée) et le second vers 1, donc la limite vaut 0."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La limite de $\\sqrt{n^2 + 1} - n$",
          "stepTheme": "La limite de $\\sqrt{n^2 + 1} - n$",
          "stepBadge": "La limite de $\\sqrt{n^2 + 1} - n$",
          "paragraphText": "• On multiplie par la quantité conjuguée : $\\sqrt{n^2 + 1} - n = \\frac{1}{\\sqrt{n^2 + 1} + n}$.\nOr $\\lim_{n \\to +\\infty} \\left(\\sqrt{n^2 + 1} + n\\right) = +\\infty$.\nDonc $\\lim_{n \\to +\\infty} \\left(\\sqrt{n^2 + 1} - n\\right) = 0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p06_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\left(\\sqrt{n^2 + 1} - n\\right)$ ?",
            "options": [
              "$0$",
              "$1$",
              "$+\\infty$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Par la quantité conjuguée, √(n²+1) − n = 1/(√(n²+1) + n) : le dénominateur tend vers +∞, donc la limite vaut 0."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La limite de $-n + \\cos n$ par comparaison",
          "stepTheme": "La limite de $-n + \\cos n$ par comparaison",
          "stepBadge": "La limite de $-n + \\cos n$ par comparaison",
          "paragraphText": "• Comme $\\cos n \\leq 1$ pour tout $n$, on a $u_n = -n + \\cos n \\leq -n + 1$ pour tout $n$.\nOr $\\lim_{n \\to +\\infty} (-n + 1) = -\\infty$.\nPar le théorème de comparaison, $\\lim_{n \\to +\\infty} u_n = -\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p06_q3",
            "type": "mcq",
            "prompt": "Soit $u_n = -n + \\cos n$. Que vaut $\\lim_{n \\to +\\infty} u_n$ ?",
            "options": [
              "$-\\infty$",
              "$+\\infty$",
              "$0$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme cos n ≤ 1, u_n ≤ −n + 1 et lim (−n + 1) = −∞ : par comparaison, lim u_n = −∞."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La limite de $n^2 + (-1)^n$ par comparaison",
          "stepTheme": "La limite de $n^2 + (-1)^n$ par comparaison",
          "stepBadge": "La limite de $n^2 + (-1)^n$ par comparaison",
          "paragraphText": "• Comme $(-1)^n \\geq -1$ pour tout $n$, on a $v_n = n^2 + (-1)^n \\geq n^2 - 1$ pour tout $n$.\nOr $\\lim_{n \\to +\\infty} (n^2 - 1) = +\\infty$.\nPar le théorème de comparaison, $\\lim_{n \\to +\\infty} v_n = +\\infty$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p06_q4",
            "type": "mcq",
            "prompt": "Soit $v_n = n^2 + (-1)^n$. Que vaut $\\lim_{n \\to +\\infty} v_n$ ?",
            "options": [
              "$+\\infty$",
              "$-\\infty$",
              "$0$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Comme (−1)^n ≥ −1, v_n ≥ n² − 1 et lim (n² − 1) = +∞ : par comparaison, lim v_n = +∞."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La limite de $n\\sin\\left(\\frac{1}{n}\\right)$",
          "stepTheme": "La limite de $n\\sin\\left(\\frac{1}{n}\\right)$",
          "stepBadge": "La limite de $n\\sin\\left(\\frac{1}{n}\\right)$",
          "paragraphText": "• On écrit $v_n = n\\sin\\left(\\frac{1}{n}\\right) = \\frac{\\sin\\left(\\frac{1}{n}\\right)}{\\frac{1}{n}} = f(u_n)$ avec $u_n = \\frac{1}{n}$ et $f(x) = \\frac{\\sin x}{x}$.\nOn a $\\lim_{n \\to +\\infty} u_n = 0$ et $\\lim_{x \\to 0} f(x) = 1$.\nDonc $\\lim_{n \\to +\\infty} v_n = 1$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p06_q5",
            "type": "mcq",
            "prompt": "Soit $v_n = n\\sin\\left(\\frac{1}{n}\\right)$. Que vaut $\\lim_{n \\to +\\infty} v_n$ ?",
            "options": [
              "$1$",
              "$0$",
              "$+\\infty$",
              "Elle n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v_n = sin(1/n)/(1/n) = f(1/n) avec f(x) = (sin x)/x : lim (1/n) = 0 et lim_{x→0} f(x) = 1, donc lim v_n = 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La limite d'une suite récurrente convergente",
          "stepTheme": "La limite d'une suite récurrente convergente",
          "stepBadge": "La limite d'une suite récurrente convergente",
          "paragraphText": "• Soit $(u_n)$ définie par $u_0 = 0{,}8$ et $u_{n+1} = \\frac{1}{2}u_n\\left(1 + \\frac{1}{2}u_n\\right)$ ; on suppose qu'elle est décroissante et que $0 \\leq u_n \\leq 1$ pour tout $n$.\nDécroissante et minorée par $0$, elle converge. Sa limite est un point fixe de $f(x) = \\frac{1}{2}x\\left(1 + \\frac{1}{2}x\\right)$.\nOr $f(x) = x$ donne $x^2 - 2x = 0$, soit $x = 0$ ou $x = 2$ ; comme $2 \\notin [0 ; 1]$, la limite est $0$.",
          "exercise": {
            "id": "terminale_c_maths_numerique_l09_suites_p06_q6",
            "type": "mcq",
            "prompt": "La suite $(u_n)$ définie par $u_0 = 0{,}8$ et $u_{n+1} = \\frac{1}{2}u_n\\left(1 + \\frac{1}{2}u_n\\right)$ est décroissante et vérifie $0 \\leq u_n \\leq 1$. Quelle est sa limite ?",
            "options": [
              "$0$",
              "$2$",
              "$1$",
              "$\\frac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Décroissante et minorée par 0, la suite converge ; sa limite vérifie f(x) = x, soit x = 0 ou x = 2 ; 2 n'appartient pas à [0 ; 1], donc la limite est 0."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_maths_numerique_l09_suites_p06_q1",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\frac{\\ln(n+1)}{n}$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "(ln(n+1))/n = (ln(n+1))/(n+1) × (n+1)/n : le premier facteur tend vers 0 (croissance comparée) et le second vers 1, donc la limite vaut 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p06_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\lim_{n \\to +\\infty} \\left(\\sqrt{n^2 + 1} - n\\right)$ ?",
          "options": [
            "$0$",
            "$1$",
            "$+\\infty$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Par la quantité conjuguée, √(n²+1) − n = 1/(√(n²+1) + n) : le dénominateur tend vers +∞, donc la limite vaut 0."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p06_q3",
          "type": "mcq",
          "prompt": "Soit $u_n = -n + \\cos n$. Que vaut $\\lim_{n \\to +\\infty} u_n$ ?",
          "options": [
            "$-\\infty$",
            "$+\\infty$",
            "$0$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme cos n ≤ 1, u_n ≤ −n + 1 et lim (−n + 1) = −∞ : par comparaison, lim u_n = −∞."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p06_q4",
          "type": "mcq",
          "prompt": "Soit $v_n = n^2 + (-1)^n$. Que vaut $\\lim_{n \\to +\\infty} v_n$ ?",
          "options": [
            "$+\\infty$",
            "$-\\infty$",
            "$0$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Comme (−1)^n ≥ −1, v_n ≥ n² − 1 et lim (n² − 1) = +∞ : par comparaison, lim v_n = +∞."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p06_q5",
          "type": "mcq",
          "prompt": "Soit $v_n = n\\sin\\left(\\frac{1}{n}\\right)$. Que vaut $\\lim_{n \\to +\\infty} v_n$ ?",
          "options": [
            "$1$",
            "$0$",
            "$+\\infty$",
            "Elle n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v_n = sin(1/n)/(1/n) = f(1/n) avec f(x) = (sin x)/x : lim (1/n) = 0 et lim_{x→0} f(x) = 1, donc lim v_n = 1."
        },
        {
          "id": "terminale_c_maths_numerique_l09_suites_p06_q6",
          "type": "mcq",
          "prompt": "La suite $(u_n)$ définie par $u_0 = 0{,}8$ et $u_{n+1} = \\frac{1}{2}u_n\\left(1 + \\frac{1}{2}u_n\\right)$ est décroissante et vérifie $0 \\leq u_n \\leq 1$. Quelle est sa limite ?",
          "options": [
            "$0$",
            "$2$",
            "$1$",
            "$\\frac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Décroissante et minorée par 0, la suite converge ; sa limite vérifie f(x) = x, soit x = 0 ou x = 2 ; 2 n'appartient pas à [0 ; 1], donc la limite est 0."
        }
      ]
    }
  ]
};
