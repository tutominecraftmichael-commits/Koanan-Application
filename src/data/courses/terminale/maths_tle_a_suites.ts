import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 5 : Suites numériques » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1614
export const MATHS_TLE_A_L05_SUITES: CurriculumChapter = {
  "id": "terminale_a1_maths_numerique_l05_suites_numeriques",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 5,
  "title": "Leçon 5 : Suites numériques",
  "summary": "Le président d'une promotion place 300 000 F CFA et hésite entre une augmentation fixe de 2 500 F CFA par mois et une augmentation de 5 % de mois en mois : les suites arithmétiques et géométriques permettent de comparer ces deux options, d'exprimer un terme en fonction de n, d'étudier le sens de variation et de calculer des sommes de termes consécutifs.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1614",
  "points": [
    {
      "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01",
      "order": 1,
      "title": "Suite arithmétique : définition et terme général",
      "summary": "Définir une suite arithmétique par sa raison et exprimer son terme général en fonction de n.",
      "conceptExplanation": "Une suite numérique $(u_n)_{n \\in \\mathbb{N}}$ est dite arithmétique lorsque son premier terme est donné et que chaque terme est la somme du terme qui le précède par une constante $r$ appelée la raison. Autrement dit, $u_0$ étant donné, il existe un réel $r$ tel que pour tout entier naturel $n$, $u_{n+1} = u_n + r$.\nUne suite arithmétique peut être définie à partir d'un rang $n_0 > 0$, et $(u_n)$ est arithmétique de raison $r$ lorsque pour tout entier $n$, $u_{n+1} - u_n = r$.\nTerme général : si $(u_n)$ est arithmétique de premier terme $u_0$ et de raison $r$, alors pour tout entier naturel $n$, $u_n = nr + u_0$. En général, pour tous entiers naturels $n$ et $p$, $u_n = u_p + (n - p)r$.",
      "keyRule": "Arithmétique : on ajoute toujours la même raison, et $u_n = u_p + (n - p)r$.",
      "formulas": [
        {
          "name": "Relation de récurrence",
          "formula": "u_{n+1} = u_n + r",
          "note": "r est la raison de la suite."
        },
        {
          "name": "Terme général",
          "formula": "u_n = nr + u_0",
          "note": "Premier terme $u_0$, raison $r$."
        },
        {
          "name": "Terme général à partir du rang p",
          "formula": "u_n = u_p + (n - p)r"
        }
      ],
      "workedExample": {
        "title": "Calculer $u_4$ et $u_5$ à partir de $u_3 = 2$",
        "statement": "Soit $(u_n)$ la suite définie par $u_3 = 2$ et $u_{n+1} = u_n + 7$ pour tout $n \\geq 3$. Calcule $u_4$ et $u_5$, puis justifie que la suite $(u_n)_{n \\geq 3}$ est arithmétique en donnant sa raison et son premier terme.",
        "methodSteps": [
          "On remplace $n$ par $3$ : $u_4 = u_3 + 7 = 2 + 7 = 9$.",
          "On remplace $n$ par $4$ : $u_5 = u_4 + 7 = 9 + 7 = 16$.",
          "La relation $u_{n+1} = u_n + 7$ est exactement la définition d'une suite arithmétique : chaque terme s'obtient en ajoutant la constante $7$ au précédent."
        ],
        "conclusion": "La suite est arithmétique de raison $7$ et de premier terme $u_3 = 2$ ; $u_4 = 9$ et $u_5 = 16$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'une suite arithmétique",
          "stepTheme": "Définition d'une suite arithmétique",
          "stepBadge": "Définition d'une suite arithmétique",
          "paragraphText": "• Suite arithmétique : suite dont chaque terme est la somme du terme qui le précède par une constante $r$ appelée la raison.\nElle vérifie $u_{n+1} = u_n + r$ pour tout entier naturel $n$, le premier terme étant donné.\nExemple de la leçon : $u_0 = 125$ et $u_{n+1} = u_n + 250$ définissent une suite arithmétique de raison $250$ et de premier terme $u_0 = 125$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q1",
            "type": "mcq",
            "prompt": "Une suite $(u_n)$ est arithmétique de raison $250$ avec $u_0 = 125$. Quelle relation la définit ?",
            "options": [
              "$u_{n+1} = 250u_n$",
              "$u_{n+1} = u_n + 250$",
              "$u_{n+1} = u_n + 125$",
              "$u_{n+1} = u_n - 250$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pour une suite arithmétique, $u_{n+1} = u_n + r$ ; ici la raison vaut $250$, donc on ajoute $250$ à chaque terme."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Reconnaître grâce à la différence de deux termes",
          "stepTheme": "Reconnaître grâce à la différence de deux termes",
          "stepBadge": "Reconnaître grâce à la différence de deux termes",
          "paragraphText": "• $(u_n)$ est une suite arithmétique de raison $r$ lorsque pour tout entier $n$, $u_{n+1} - u_n = r$.\nLa différence de deux termes consécutifs est donc constante.\nC'est le test utilisé dans l'exercice 2 de la leçon pour la suite définie par $u_n = 5n - 4$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q2",
            "type": "mcq",
            "prompt": "Soit $u_n = 5n - 4$ pour tout entier naturel $n$. Que vaut $u_{n+1} - u_n$ ?",
            "options": [
              "$-4$",
              "$5n$",
              "$5$",
              "$9$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule : $u_{n+1} - u_n = 5(n + 1) - 4 - (5n - 4) = 5$. La différence est constante : la suite est arithmétique de raison $5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Calculer des termes de proche en proche",
          "stepTheme": "Calculer des termes de proche en proche",
          "stepBadge": "Calculer des termes de proche en proche",
          "paragraphText": "• Avec $u_3 = 2$ et $u_{n+1} = u_n + 7$, on remplace $n$ par $3$ : $u_4 = u_3 + 7 = 2 + 7 = 9$.\nOn remplace ensuite $n$ par $4$ : $u_5 = u_4 + 7 = 9 + 7 = 16$.\nLa suite $(u_n)_{n \\geq 3}$ est arithmétique de raison $7$ et de premier terme $u_3 = 2$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q3",
            "type": "mcq",
            "prompt": "Avec $u_3 = 2$ et $u_{n+1} = u_n + 7$, que vaut $u_5$ ?",
            "options": [
              "$14$",
              "$16$",
              "$9$",
              "$23$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule d'abord $u_4 = u_3 + 7 = 9$, puis $u_5 = u_4 + 7 = 16$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le terme général en fonction de n",
          "stepTheme": "Le terme général en fonction de n",
          "stepBadge": "Le terme général en fonction de n",
          "paragraphText": "• Si $(u_n)$ est arithmétique de premier terme $u_0$ et de raison $r$, alors pour tout entier naturel $n$, $u_n = nr + u_0$.\nEn général, pour tous entiers naturels $n$ et $p$, $u_n = u_p + (n - p)r$.\nOn peut donc calculer un terme lointain sans calculer tous les termes intermédiaires.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q4",
            "type": "mcq",
            "prompt": "Une suite arithmétique de premier terme $u_0$ et de raison $r$ a pour terme général :",
            "options": [
              "$u_n = u_0 \\times r^n$",
              "$u_n = u_0 + r$",
              "$u_n = nr + u_0$",
              "$u_n = u_0 + n$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la propriété du terme général : $u_n = nr + u_0$. La formule avec $r^n$ concerne les suites géométriques."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Exprimer $v_n$ en fonction de $n$ et calculer $v_{21}$",
          "stepTheme": "Exprimer $v_n$ en fonction de $n$ et calculer $v_{21}$",
          "stepBadge": "Exprimer $v_n$ en fonction de $n$ et calculer $v_{21}$",
          "paragraphText": "• La suite $(v_n)_{n \\geq 1}$ définie par $v_1 = 1350$ et $v_{n+1} = v_n + 200$ est arithmétique de raison $200$.\nOn obtient $v_n = v_1 + (n - 1) \\times 200 = 1350 + (n - 1) \\times 200 = 1150 + 200n$.\nDonc $v_{21} = 1150 + 200 \\times 21 = 5350$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q5",
            "type": "mcq",
            "prompt": "Pour la suite arithmétique de premier terme $v_1 = 1350$ et de raison $200$, que vaut $v_{21}$ ?",
            "options": [
              "$5550$",
              "$5350$",
              "$1550$",
              "$4200$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On part du premier terme $v_1$ : $v_{21} = v_1 + (21 - 1) \\times 200 = 1350 + 4000 = 5350$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ni arithmétique ni géométrique",
          "stepTheme": "Ni arithmétique ni géométrique",
          "stepBadge": "Ni arithmétique ni géométrique",
          "paragraphText": "• Piège : la relation $u_{n+1} = 2u_n + 3$ mélange une multiplication et une addition.\nLa différence $u_{n+1} - u_n$ n'est pas constante, et le quotient de deux termes consécutifs ne l'est pas non plus.\nD'après l'exercice 1 de la leçon, une telle suite n'est ni arithmétique ni géométrique : l'affirmation est vraie.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q6",
            "type": "mcq",
            "prompt": "Si $u_{n+1} = 2u_n + 3$, la suite $(u_n)$ est :",
            "options": [
              "Arithmétique de raison $2$",
              "Géométrique de raison $2$",
              "Constante",
              "Ni arithmétique ni géométrique"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la réponse à l'exercice 1 de la leçon : la relation ne correspond ni à l'ajout d'une constante, ni à la multiplication par une constante."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q1",
          "type": "mcq",
          "prompt": "Une suite $(u_n)$ est arithmétique de raison $250$ avec $u_0 = 125$. Quelle relation la définit ?",
          "options": [
            "$u_{n+1} = 250u_n$",
            "$u_{n+1} = u_n + 250$",
            "$u_{n+1} = u_n + 125$",
            "$u_{n+1} = u_n - 250$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pour une suite arithmétique, $u_{n+1} = u_n + r$ ; ici la raison vaut $250$, donc on ajoute $250$ à chaque terme."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q2",
          "type": "mcq",
          "prompt": "Soit $u_n = 5n - 4$ pour tout entier naturel $n$. Que vaut $u_{n+1} - u_n$ ?",
          "options": [
            "$-4$",
            "$5n$",
            "$5$",
            "$9$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule : $u_{n+1} - u_n = 5(n + 1) - 4 - (5n - 4) = 5$. La différence est constante : la suite est arithmétique de raison $5$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q3",
          "type": "mcq",
          "prompt": "Avec $u_3 = 2$ et $u_{n+1} = u_n + 7$, que vaut $u_5$ ?",
          "options": [
            "$14$",
            "$16$",
            "$9$",
            "$23$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule d'abord $u_4 = u_3 + 7 = 9$, puis $u_5 = u_4 + 7 = 16$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q4",
          "type": "mcq",
          "prompt": "Une suite arithmétique de premier terme $u_0$ et de raison $r$ a pour terme général :",
          "options": [
            "$u_n = u_0 \\times r^n$",
            "$u_n = u_0 + r$",
            "$u_n = nr + u_0$",
            "$u_n = u_0 + n$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la propriété du terme général : $u_n = nr + u_0$. La formule avec $r^n$ concerne les suites géométriques."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q5",
          "type": "mcq",
          "prompt": "Pour la suite arithmétique de premier terme $v_1 = 1350$ et de raison $200$, que vaut $v_{21}$ ?",
          "options": [
            "$5550$",
            "$5350$",
            "$1550$",
            "$4200$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On part du premier terme $v_1$ : $v_{21} = v_1 + (21 - 1) \\times 200 = 1350 + 4000 = 5350$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p01_q6",
          "type": "mcq",
          "prompt": "Si $u_{n+1} = 2u_n + 3$, la suite $(u_n)$ est :",
          "options": [
            "Arithmétique de raison $2$",
            "Géométrique de raison $2$",
            "Constante",
            "Ni arithmétique ni géométrique"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la réponse à l'exercice 1 de la leçon : la relation ne correspond ni à l'ajout d'une constante, ni à la multiplication par une constante."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02",
      "order": 2,
      "title": "Suite arithmétique : sens de variation et somme de termes",
      "summary": "Lire le sens de variation sur le signe de la raison et calculer une somme de termes consécutifs.",
      "conceptExplanation": "Une suite arithmétique est croissante si sa raison est positive, décroissante si sa raison est négative, constante si sa raison est nulle.\nPour la somme de termes consécutifs, si $(u_n)$ est arithmétique, on a pour tout entier naturel $n$ : $u_0 + u_1 + \\cdots + u_n = (n + 1) \\times \\frac{u_0 + u_n}{2}$, et pour tous entiers naturels $n$ et $p$ avec $n \\geq p$ : $u_p + u_{p+1} + \\cdots + u_n = (n - p + 1) \\times \\frac{u_p + u_n}{2}$.\nRemarque de la leçon : la somme de termes consécutifs est égale au nombre de termes multiplié par la moyenne du premier terme et du dernier terme.",
      "keyRule": "Le signe de la raison donne le sens de variation ; la somme vaut : nombre de termes multiplié par (premier terme + dernier terme), le tout divisé par 2.",
      "formulas": [
        {
          "name": "Somme de $u_0$ à $u_n$",
          "formula": "u_0 + u_1 + \\cdots + u_n = (n + 1) \\times \\frac{u_0 + u_n}{2}"
        },
        {
          "name": "Somme de $u_p$ à $u_n$",
          "formula": "u_p + u_{p+1} + \\cdots + u_n = (n - p + 1) \\times \\frac{u_p + u_n}{2}",
          "note": "Pour $n \\geq p$."
        }
      ],
      "workedExample": {
        "title": "La somme des 26 premiers termes",
        "statement": "Soit $(u_n)$ la suite arithmétique définie par $u_1 = -1$ et $u_{n+1} = u_n + 3$ pour $n \\geq 1$. Calcule la somme des 26 premiers termes de cette suite.",
        "methodSteps": [
          "Le premier terme est $u_1 = -1$ et la raison est $r = 3$.",
          "Le dernier terme de la somme est $u_{26} = u_1 + (26 - 1) \\times 3 = -1 + 75 = 74$.",
          "La somme compte $26$ termes : $u_1 + u_2 + \\cdots + u_{26} = 26 \\times \\frac{-1 + 74}{2} = 26 \\times \\frac{73}{2}$."
        ],
        "conclusion": "La somme des 26 premiers termes vaut $949$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le sens de variation se lit sur la raison",
          "stepTheme": "Le sens de variation se lit sur la raison",
          "stepBadge": "Le sens de variation se lit sur la raison",
          "paragraphText": "• Le sens de variation d'une suite arithmétique se lit sur le signe de sa raison $r$, sans calculer les termes.\nSi $r > 0$, chaque terme est plus grand que le précédent ; si $r < 0$, chaque terme est plus petit que le précédent.\nSi $r = 0$, tous les termes sont égaux.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q1",
            "type": "mcq",
            "prompt": "Le sens de variation d'une suite arithmétique se détermine à partir :",
            "options": [
              "De son premier terme",
              "Du signe de sa raison",
              "Du nombre de ses termes",
              "De la somme de ses termes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque terme s'obtient en ajoutant la raison $r$ : c'est donc son signe qui décide si la suite monte, descend ou reste constante."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le sens de variation selon le signe de la raison",
          "stepTheme": "Le sens de variation selon le signe de la raison",
          "stepBadge": "Le sens de variation selon le signe de la raison",
          "paragraphText": "• Une suite arithmétique est croissante si sa raison est positive.\n• Elle est décroissante si sa raison est négative.\n• Elle est constante si sa raison est nulle.\nTout se lit donc sur le signe de $r$, sans calculer les termes.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q2",
            "type": "mcq",
            "prompt": "Une suite arithmétique de raison $r = -2$ est :",
            "options": [
              "Croissante",
              "Constante",
              "Décroissante",
              "Ni croissante ni décroissante"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La raison $-2$ est négative : d'après la propriété, la suite est décroissante. C'est le cas a) de l'exercice de fixation de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Trois raisons, trois comportements",
          "stepTheme": "Trois raisons, trois comportements",
          "stepBadge": "Trois raisons, trois comportements",
          "paragraphText": "• Cas $r = -2$ : la raison est négative, la suite est décroissante.\n• Cas $r = 0$ : la raison est nulle, la suite est constante.\n• Cas $r = 10$ : la raison est positive, la suite est croissante.\nCe sont les trois cas traités dans l'exercice de fixation de la leçon.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q3",
            "type": "mcq",
            "prompt": "Une suite arithmétique de raison $r = 0$ est :",
            "options": [
              "Croissante",
              "Décroissante",
              "Constante",
              "Géométrique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Avec une raison nulle, chaque terme vaut le précédent augmenté de $0$ : tous les termes sont égaux, la suite est constante."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La formule de la somme de termes consécutifs",
          "stepTheme": "La formule de la somme de termes consécutifs",
          "stepBadge": "La formule de la somme de termes consécutifs",
          "paragraphText": "• La somme de termes consécutifs d'une suite arithmétique est égale au nombre de termes multiplié par la moyenne du premier terme et du dernier terme.\nDe $u_0$ à $u_n$, il y a $n + 1$ termes : $u_0 + u_1 + \\cdots + u_n = (n + 1) \\times \\frac{u_0 + u_n}{2}$.\nDe $u_p$ à $u_n$, il y a $n - p + 1$ termes.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q4",
            "type": "mcq",
            "prompt": "La somme de termes consécutifs d'une suite arithmétique est égale à :",
            "options": [
              "(premier terme + dernier terme), le tout divisé par $2$",
              "(nombre de termes) multiplié par (premier terme + dernier terme), le tout divisé par $2$",
              "(nombre de termes) multiplié par (premier terme + dernier terme)",
              "(premier terme) multiplié par (dernier terme), le tout divisé par $2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la remarque de la leçon : $S = (\\text{nombre de termes}) \\times \\frac{\\text{premier terme} + \\text{dernier terme}}{2}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La somme des 26 premiers termes",
          "stepTheme": "La somme des 26 premiers termes",
          "stepBadge": "La somme des 26 premiers termes",
          "paragraphText": "• Pour la suite définie par $u_1 = -1$ et $u_{n+1} = u_n + 3$, la raison est $3$.\nLe 26e terme vaut $u_{26} = -1 + 25 \\times 3 = 74$.\nLa somme des 26 premiers termes vaut donc $26 \\times \\frac{-1 + 74}{2} = 949$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q5",
            "type": "mcq",
            "prompt": "Pour la suite arithmétique de premier terme $u_1 = -1$ et de raison $3$, la somme des 26 premiers termes vaut :",
            "options": [
              "$949$",
              "$974$",
              "$73$",
              "$1898$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $u_{26} = 74$, puis la somme : $26 \\times \\frac{-1 + 74}{2} = 26 \\times \\frac{73}{2} = 949$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La somme des seize premiers termes de $u_n = 5n - 4$",
          "stepTheme": "La somme des seize premiers termes de $u_n = 5n - 4$",
          "stepBadge": "La somme des seize premiers termes de $u_n = 5n - 4$",
          "paragraphText": "• La suite définie par $u_n = 5n - 4$ est arithmétique de premier terme $u_0 = -4$ et de raison $5$.\nSon 16e terme est $u_{15} = 5 \\times 15 - 4 = 71$.\nLa somme des seize premiers termes vaut $16 \\times \\frac{-4 + 71}{2} = 8 \\times 67 = 536$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q6",
            "type": "mcq",
            "prompt": "Pour la suite définie par $u_n = 5n - 4$, la somme des seize premiers termes vaut :",
            "options": [
              "$1072$",
              "$67$",
              "$536$",
              "$496$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la question 4 de l'exercice 2 de la leçon : $u_0 = -4$, $u_{15} = 71$, et $16 \\times \\frac{-4 + 71}{2} = 536$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Bien compter le nombre de termes",
          "stepTheme": "Bien compter le nombre de termes",
          "stepBadge": "Bien compter le nombre de termes",
          "paragraphText": "• Piège classique : de $u_p$ à $u_n$, le nombre de termes est $n - p + 1$, et non $n - p$.\nPar exemple, de $u_1$ à $u_{26}$, il y a $26 - 1 + 1 = 26$ termes.\nOublier le « $+1$ » fausse toutes les sommes.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q7",
            "type": "mcq",
            "prompt": "De $u_1$ à $u_{26}$, combien y a-t-il de termes consécutifs ?",
            "options": [
              "$25$",
              "$27$",
              "$24$",
              "$26$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le nombre de termes de $u_p$ à $u_n$ est $n - p + 1$ : ici $26 - 1 + 1 = 26$ termes."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q1",
          "type": "mcq",
          "prompt": "Le sens de variation d'une suite arithmétique se détermine à partir :",
          "options": [
            "De son premier terme",
            "Du signe de sa raison",
            "Du nombre de ses termes",
            "De la somme de ses termes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque terme s'obtient en ajoutant la raison $r$ : c'est donc son signe qui décide si la suite monte, descend ou reste constante."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q2",
          "type": "mcq",
          "prompt": "Une suite arithmétique de raison $r = -2$ est :",
          "options": [
            "Croissante",
            "Constante",
            "Décroissante",
            "Ni croissante ni décroissante"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La raison $-2$ est négative : d'après la propriété, la suite est décroissante. C'est le cas a) de l'exercice de fixation de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q3",
          "type": "mcq",
          "prompt": "Une suite arithmétique de raison $r = 0$ est :",
          "options": [
            "Croissante",
            "Décroissante",
            "Constante",
            "Géométrique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Avec une raison nulle, chaque terme vaut le précédent augmenté de $0$ : tous les termes sont égaux, la suite est constante."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q4",
          "type": "mcq",
          "prompt": "La somme de termes consécutifs d'une suite arithmétique est égale à :",
          "options": [
            "(premier terme + dernier terme), le tout divisé par $2$",
            "(nombre de termes) multiplié par (premier terme + dernier terme), le tout divisé par $2$",
            "(nombre de termes) multiplié par (premier terme + dernier terme)",
            "(premier terme) multiplié par (dernier terme), le tout divisé par $2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la remarque de la leçon : $S = (\\text{nombre de termes}) \\times \\frac{\\text{premier terme} + \\text{dernier terme}}{2}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q5",
          "type": "mcq",
          "prompt": "Pour la suite arithmétique de premier terme $u_1 = -1$ et de raison $3$, la somme des 26 premiers termes vaut :",
          "options": [
            "$949$",
            "$974$",
            "$73$",
            "$1898$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $u_{26} = 74$, puis la somme : $26 \\times \\frac{-1 + 74}{2} = 26 \\times \\frac{73}{2} = 949$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q6",
          "type": "mcq",
          "prompt": "Pour la suite définie par $u_n = 5n - 4$, la somme des seize premiers termes vaut :",
          "options": [
            "$1072$",
            "$67$",
            "$536$",
            "$496$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la question 4 de l'exercice 2 de la leçon : $u_0 = -4$, $u_{15} = 71$, et $16 \\times \\frac{-4 + 71}{2} = 536$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p02_q7",
          "type": "mcq",
          "prompt": "De $u_1$ à $u_{26}$, combien y a-t-il de termes consécutifs ?",
          "options": [
            "$25$",
            "$27$",
            "$24$",
            "$26$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le nombre de termes de $u_p$ à $u_n$ est $n - p + 1$ : ici $26 - 1 + 1 = 26$ termes."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03",
      "order": 3,
      "title": "Suite géométrique : définition et terme général",
      "summary": "Définir une suite géométrique par sa raison et exprimer son terme général en fonction de n.",
      "conceptExplanation": "Une suite numérique $(v_n)_{n \\in \\mathbb{N}}$ est dite géométrique lorsque son premier terme est donné et que chaque terme est le produit du terme qui le précède par une constante $q$ appelée la raison. Autrement dit, $v_0$ étant donné, il existe un réel $q$ tel que pour tout entier naturel $n$, $v_{n+1} = qv_n$.\nUne suite géométrique peut être définie à partir d'un rang $n_0 > 0$, et si ses termes ne sont pas tous nuls, on a $\\frac{v_{n+1}}{v_n} = q$.\nTerme général : si $(v_n)$ est géométrique de premier terme $v_0$ et de raison $q$, alors pour tout entier naturel $n$, $v_n = v_0 q^n$. En général, pour tous entiers naturels $n$ et $p$ avec $p \\leq n$, $v_n = v_p \\times q^{n-p}$.",
      "keyRule": "Géométrique : on multiplie toujours par la même raison, et $v_n = v_p \\times q^{n-p}$.",
      "formulas": [
        {
          "name": "Relation de récurrence",
          "formula": "v_{n+1} = qv_n",
          "note": "q est la raison de la suite."
        },
        {
          "name": "Terme général",
          "formula": "v_n = v_0 q^n",
          "note": "Premier terme $v_0$, raison $q$ non nulle."
        },
        {
          "name": "Terme général à partir du rang p",
          "formula": "v_n = v_p \\times q^{n-p}"
        }
      ],
      "workedExample": {
        "title": "Calculer $v_7$ à partir de $v_3 = 12$",
        "statement": "Soit $(v_n)_{n \\geq 0}$ la suite géométrique de raison $q = \\frac{1}{2}$ telle que $v_3 = 12$. Calcule $v_7$.",
        "methodSteps": [
          "On utilise la formule générale $v_n = v_p \\times q^{n-p}$ avec $n = 7$, $p = 3$ et $q = \\frac{1}{2}$.",
          "On obtient $v_7 = v_3 \\times \\left(\\frac{1}{2}\\right)^{7-3} = 12 \\times \\left(\\frac{1}{2}\\right)^4$.",
          "Or $\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$, donc $v_7 = \\frac{12}{16}$."
        ],
        "conclusion": "$v_7 = \\frac{3}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'une suite géométrique",
          "stepTheme": "Définition d'une suite géométrique",
          "stepBadge": "Définition d'une suite géométrique",
          "paragraphText": "• Suite géométrique : suite dont chaque terme est le produit du terme qui le précède par une constante $q$ appelée la raison.\nElle vérifie $v_{n+1} = qv_n$ pour tout entier naturel $n$, le premier terme étant donné.\nExemple de la leçon : $t_0 = 1000000$ et $t_{n+1} = 0{,}9 t_n$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q1",
            "type": "mcq",
            "prompt": "La suite définie par $t_0 = 1000000$ et $t_{n+1} = 0{,}9 t_n$ est géométrique. Sa raison et son premier terme sont :",
            "options": [
              "Raison $1000000$, premier terme $0{,}9$",
              "Raison $0{,}9$, premier terme $1000000$",
              "Raison $0{,}9$, premier terme $900000$",
              "Raison $9$, premier terme $1000000$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le coefficient qui multiplie chaque terme est $0{,}9$ : c'est la raison. Le premier terme est $t_0 = 1000000$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer $t_1$ et $t_2$ de proche en proche",
          "stepTheme": "Calculer $t_1$ et $t_2$ de proche en proche",
          "stepBadge": "Calculer $t_1$ et $t_2$ de proche en proche",
          "paragraphText": "• Avec $t_0 = 1000000$ et $t_{n+1} = 0{,}9 t_n$, on obtient $t_1 = 0{,}9 \\times 1000000 = 900000$.\nDe même, $t_2 = 0{,}9 \\times 900000 = 810000$.\nChaque terme se calcule en multipliant le précédent par la raison $0{,}9$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q2",
            "type": "mcq",
            "prompt": "Avec $t_0 = 1000000$ et $t_{n+1} = 0{,}9 t_n$, que vaut $t_2$ ?",
            "options": [
              "$800000$",
              "$900000$",
              "$810000$",
              "$729000$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $t_1 = 0{,}9 \\times 1000000 = 900000$, puis $t_2 = 0{,}9 \\times 900000 = 810000$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le terme général en fonction de n",
          "stepTheme": "Le terme général en fonction de n",
          "stepBadge": "Le terme général en fonction de n",
          "paragraphText": "• Si $(v_n)$ est géométrique de premier terme $v_0$ et de raison $q$ non nulle, alors pour tout entier naturel $n$, $v_n = v_0 q^n$.\nEn général, pour tous entiers naturels $n$ et $p$ avec $p \\leq n$, $v_n = v_p \\times q^{n-p}$.\nL'exposant compte le nombre de pas entre le rang connu et le rang cherché.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q3",
            "type": "mcq",
            "prompt": "Une suite géométrique de premier terme $v_0$ et de raison $q$ a pour terme général :",
            "options": [
              "$v_n = v_0 + nq$",
              "$v_n = v_0 q^n$",
              "$v_n = n v_0$",
              "$v_n = q v_0^n$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la propriété du terme général : $v_n = v_0 q^n$. La formule $v_0 + nq$ ressemblerait à une suite arithmétique."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer $v_7$ à partir de $v_3$",
          "stepTheme": "Calculer $v_7$ à partir de $v_3$",
          "stepBadge": "Calculer $v_7$ à partir de $v_3$",
          "paragraphText": "• La suite $(v_n)$ est géométrique de raison $q = \\frac{1}{2}$ et $v_3 = 12$.\nOn applique $v_n = v_p \\times q^{n-p}$ avec $n = 7$ et $p = 3$ : $v_7 = 12 \\times \\left(\\frac{1}{2}\\right)^4$.\nComme $\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}$, on obtient le résultat ci-dessous.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q4",
            "type": "mcq",
            "prompt": "Pour la suite géométrique de raison $\\frac{1}{2}$ avec $v_3 = 12$, que vaut $v_7$ ?",
            "options": [
              "$3$",
              "$\\frac{1}{16}$",
              "$\\frac{3}{4}$",
              "$48$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$v_7 = 12 \\times \\left(\\frac{1}{2}\\right)^4 = 12 \\times \\frac{1}{16} = \\frac{12}{16} = \\frac{3}{4}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Reconnaître grâce au quotient de deux termes",
          "stepTheme": "Reconnaître grâce au quotient de deux termes",
          "stepBadge": "Reconnaître grâce au quotient de deux termes",
          "paragraphText": "• Si les termes d'une suite géométrique ne sont pas tous nuls, alors $\\frac{v_{n+1}}{v_n} = q$ pour tout $n$.\nUn quotient de deux termes consécutifs constant caractérise donc une suite géométrique, et ce quotient est sa raison.\nC'est la méthode utilisée dans l'exercice 3 de la leçon pour la suite définie par $V_n = 3^n$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q5",
            "type": "mcq",
            "prompt": "Pour la suite définie par $V_n = 3^n$, le quotient $\\frac{V_{n+1}}{V_n}$ vaut $3$ pour tout $n$. Qu'en déduit-on ?",
            "options": [
              "La suite est arithmétique de raison $3$",
              "La suite est constante",
              "La suite est géométrique de raison $3$ et de premier terme $V_0 = 1$",
              "La suite est géométrique de raison $1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un quotient constant égal à $3$ caractérise une suite géométrique de raison $3$ ; son premier terme est $V_0 = 3^0 = 1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La raison géométrique multiplie, elle n'ajoute pas",
          "stepTheme": "La raison géométrique multiplie, elle n'ajoute pas",
          "stepBadge": "La raison géométrique multiplie, elle n'ajoute pas",
          "paragraphText": "• Piège : pour une suite géométrique, on multiplie par la raison ; pour une suite arithmétique, on l'ajoute.\nDans l'exercice 5 de la leçon, $u_0 = 2$ et $u_{n+1} = \\frac{1}{3} u_n$ : la suite est géométrique de raison $\\frac{1}{3}$.\nDonc $u_1 = \\frac{1}{3} \\times 2$, et non $2 + \\frac{1}{3}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q6",
            "type": "mcq",
            "prompt": "Pour la suite géométrique de premier terme $u_0 = 2$ et de raison $\\frac{1}{3}$, que vaut $u_1$ ?",
            "options": [
              "$\\frac{7}{3}$",
              "$6$",
              "$\\frac{2}{3}$",
              "$\\frac{1}{6}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On multiplie le premier terme par la raison : $u_1 = \\frac{1}{3} \\times 2 = \\frac{2}{3}$. La valeur $\\frac{7}{3}$ correspondrait à une addition, réflexe des suites arithmétiques."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q1",
          "type": "mcq",
          "prompt": "La suite définie par $t_0 = 1000000$ et $t_{n+1} = 0{,}9 t_n$ est géométrique. Sa raison et son premier terme sont :",
          "options": [
            "Raison $1000000$, premier terme $0{,}9$",
            "Raison $0{,}9$, premier terme $1000000$",
            "Raison $0{,}9$, premier terme $900000$",
            "Raison $9$, premier terme $1000000$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le coefficient qui multiplie chaque terme est $0{,}9$ : c'est la raison. Le premier terme est $t_0 = 1000000$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q2",
          "type": "mcq",
          "prompt": "Avec $t_0 = 1000000$ et $t_{n+1} = 0{,}9 t_n$, que vaut $t_2$ ?",
          "options": [
            "$800000$",
            "$900000$",
            "$810000$",
            "$729000$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $t_1 = 0{,}9 \\times 1000000 = 900000$, puis $t_2 = 0{,}9 \\times 900000 = 810000$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q3",
          "type": "mcq",
          "prompt": "Une suite géométrique de premier terme $v_0$ et de raison $q$ a pour terme général :",
          "options": [
            "$v_n = v_0 + nq$",
            "$v_n = v_0 q^n$",
            "$v_n = n v_0$",
            "$v_n = q v_0^n$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la propriété du terme général : $v_n = v_0 q^n$. La formule $v_0 + nq$ ressemblerait à une suite arithmétique."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q4",
          "type": "mcq",
          "prompt": "Pour la suite géométrique de raison $\\frac{1}{2}$ avec $v_3 = 12$, que vaut $v_7$ ?",
          "options": [
            "$3$",
            "$\\frac{1}{16}$",
            "$\\frac{3}{4}$",
            "$48$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$v_7 = 12 \\times \\left(\\frac{1}{2}\\right)^4 = 12 \\times \\frac{1}{16} = \\frac{12}{16} = \\frac{3}{4}$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q5",
          "type": "mcq",
          "prompt": "Pour la suite définie par $V_n = 3^n$, le quotient $\\frac{V_{n+1}}{V_n}$ vaut $3$ pour tout $n$. Qu'en déduit-on ?",
          "options": [
            "La suite est arithmétique de raison $3$",
            "La suite est constante",
            "La suite est géométrique de raison $3$ et de premier terme $V_0 = 1$",
            "La suite est géométrique de raison $1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un quotient constant égal à $3$ caractérise une suite géométrique de raison $3$ ; son premier terme est $V_0 = 3^0 = 1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p03_q6",
          "type": "mcq",
          "prompt": "Pour la suite géométrique de premier terme $u_0 = 2$ et de raison $\\frac{1}{3}$, que vaut $u_1$ ?",
          "options": [
            "$\\frac{7}{3}$",
            "$6$",
            "$\\frac{2}{3}$",
            "$\\frac{1}{6}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On multiplie le premier terme par la raison : $u_1 = \\frac{1}{3} \\times 2 = \\frac{2}{3}$. La valeur $\\frac{7}{3}$ correspondrait à une addition, réflexe des suites arithmétiques."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04",
      "order": 4,
      "title": "Suite géométrique : sens de variation et somme de termes",
      "summary": "Étudier le sens de variation d'une suite géométrique à termes positifs et calculer une somme de termes consécutifs.",
      "conceptExplanation": "Soit $(v_n)$ une suite géométrique à termes positifs et de raison $q$. Si $0 < q < 1$, la suite est décroissante ; si $q > 1$, elle est croissante ; si $q = 1$, elle est constante. En revanche, si la raison est un nombre réel négatif, la suite n'est ni croissante, ni décroissante, ni constante.\nPour la somme de termes consécutifs, si la raison $q$ est différente de $1$, on a pour tout entier naturel $n$ : $v_0 + v_1 + \\cdots + v_n = v_0 \\times \\frac{1 - q^{n+1}}{1 - q}$, et pour tous entiers naturels $n$ et $p$ avec $n \\geq p$ : $v_p + v_{p+1} + \\cdots + v_n = v_p \\times \\frac{1 - q^{n-p+1}}{1 - q}$.\nRemarque de la leçon : cette somme est égale au premier terme multiplié par $\\frac{1 - q^{\\text{nombre de termes}}}{1 - q}$.",
      "keyRule": "À termes positifs : $q > 1$ croissante, $0 < q < 1$ décroissante, $q = 1$ constante ; la somme exige $q \\neq 1$ et l'exposant est le nombre de termes.",
      "formulas": [
        {
          "name": "Somme de $v_0$ à $v_n$",
          "formula": "v_0 + v_1 + \\cdots + v_n = v_0 \\times \\frac{1 - q^{n+1}}{1 - q}",
          "note": "Pour $q \\neq 1$."
        },
        {
          "name": "Somme de $v_p$ à $v_n$",
          "formula": "v_p + v_{p+1} + \\cdots + v_n = v_p \\times \\frac{1 - q^{n-p+1}}{1 - q}",
          "note": "Pour $n \\geq p$ et $q \\neq 1$."
        }
      ],
      "workedExample": {
        "title": "Retrouver $v_1$ et exprimer la somme $S_n$",
        "statement": "Soit $(v_n)_{n \\geq 0}$ la suite géométrique de raison $q = \\frac{1}{2}$ et de troisième terme $v_3 = 12$. Vérifie que $v_1 = 48$, puis détermine en fonction de $n$ l'expression de la somme $S_n = v_1 + v_2 + \\cdots + v_n$.",
        "methodSteps": [
          "On écrit $v_3 = v_1 \\times q^{3-1} = v_1 \\times \\left(\\frac{1}{2}\\right)^2 = v_1 \\times \\frac{1}{4}$.",
          "Donc $v_1 \\times \\frac{1}{4} = 12$, d'où $v_1 = 4 \\times 12 = 48$.",
          "La somme de $v_1$ à $v_n$ compte $n$ termes : $S_n = v_1 \\times \\frac{1 - q^n}{1 - q} = 48 \\times \\frac{1 - \\left(\\frac{1}{2}\\right)^n}{1 - \\frac{1}{2}}$.",
          "Comme $1 - \\frac{1}{2} = \\frac{1}{2}$, diviser par $\\frac{1}{2}$ revient à multiplier par $2$."
        ],
        "conclusion": "$v_1 = 48$ et $S_n = 96 \\left(1 - \\left(\\frac{1}{2}\\right)^n\\right)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une suite géométrique à termes positifs",
          "stepTheme": "Une suite géométrique à termes positifs",
          "stepBadge": "Une suite géométrique à termes positifs",
          "paragraphText": "• Une suite géométrique est dite à termes positifs lorsque tous ses termes sont strictement positifs.\nC'est le cas lorsque le premier terme et la raison sont tous les deux supérieurs à zéro, comme dans les exemples de la leçon.\nLa propriété de sens de variation qui suit ne concerne que ces suites.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q1",
            "type": "mcq",
            "prompt": "La propriété de sens de variation énoncée dans la leçon s'applique aux suites géométriques :",
            "options": [
              "De raison négative",
              "À termes positifs",
              "De premier terme nul",
              "À termes de signes alternés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété est énoncée pour une suite géométrique à termes positifs. Avec une raison négative, les termes changent de signe et aucun des trois cas de la propriété ne s'applique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le sens de variation selon la raison (termes positifs)",
          "stepTheme": "Le sens de variation selon la raison (termes positifs)",
          "stepBadge": "Le sens de variation selon la raison (termes positifs)",
          "paragraphText": "• Pour une suite géométrique à termes positifs de raison $q$ : si $0 < q < 1$, elle est décroissante.\n• Si $q > 1$, elle est croissante.\n• Si $q = 1$, elle est constante.\nLa propriété ne s'applique que pour les suites à termes positifs.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q2",
            "type": "mcq",
            "prompt": "Une suite géométrique à termes positifs a pour premier terme $v_0 = 0{,}5$ et pour raison $q = 7$. Elle est :",
            "options": [
              "Décroissante",
              "Croissante",
              "Constante",
              "Ni croissante ni décroissante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le premier terme et la raison sont positifs et $q = 7 > 1$ : d'après la propriété, la suite est croissante. C'est le cas a) de l'exercice de fixation de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une raison comprise entre 0 et 1",
          "stepTheme": "Une raison comprise entre 0 et 1",
          "stepBadge": "Une raison comprise entre 0 et 1",
          "paragraphText": "• Cas de l'exercice de fixation : $v_0 = 21$ et $q = 0{,}6$.\nLe premier terme et la raison sont positifs et $0 < q < 1$.\nLa suite est donc à termes positifs et décroissante.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q3",
            "type": "mcq",
            "prompt": "Une suite géométrique à termes positifs a pour premier terme $v_0 = 21$ et pour raison $q = 0{,}6$. Elle est :",
            "options": [
              "Croissante",
              "Constante",
              "Décroissante",
              "Ni croissante ni décroissante"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Comme $0 < 0{,}6 < 1$, la propriété donne une suite décroissante. C'est le cas b) de l'exercice de fixation de la leçon."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Une raison négative : aucun des trois cas",
          "stepTheme": "Une raison négative : aucun des trois cas",
          "stepBadge": "Une raison négative : aucun des trois cas",
          "paragraphText": "• Piège : la propriété de sens de variation suppose une suite à termes positifs.\nSi $(v_n)$ est une suite géométrique de raison un nombre réel négatif, alors elle n'est ni croissante, ni décroissante, ni constante.\nSes termes changent de signe à chaque rang : aucun des trois cas précédents ne s'applique.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q4",
            "type": "mcq",
            "prompt": "Une suite géométrique de raison $q = -2$ est :",
            "options": [
              "Croissante",
              "Décroissante",
              "Constante",
              "Ni croissante, ni décroissante, ni constante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la remarque de la leçon : avec une raison négative, les termes alternent en signe, la suite n'est ni croissante, ni décroissante, ni constante."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La formule de la somme (raison différente de 1)",
          "stepTheme": "La formule de la somme (raison différente de 1)",
          "stepBadge": "La formule de la somme (raison différente de 1)",
          "paragraphText": "• Si $(v_n)$ est géométrique de raison $q$ différente de $1$, alors $v_0 + v_1 + \\cdots + v_n = v_0 \\times \\frac{1 - q^{n+1}}{1 - q}$.\nL'exposant de $q$ est le nombre de termes de la somme : de $v_0$ à $v_n$, il y en a $n + 1$.\nLa formule est donc : premier terme multiplié par $\\frac{1 - q^{\\text{nombre de termes}}}{1 - q}$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q5",
            "type": "mcq",
            "prompt": "Pour une suite géométrique de raison $q \\neq 1$, la somme $v_0 + v_1 + \\cdots + v_n$ vaut :",
            "options": [
              "$v_0 \\times \\frac{1 - q^{n+1}}{1 - q}$",
              "$v_0 \\times \\frac{1 - q^n}{1 - q}$",
              "$(n + 1) \\times \\frac{v_0 + v_n}{2}$",
              "$v_0 \\times \\frac{1 - q^{n+1}}{1 + q}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la formule de la leçon, avec l'exposant $n + 1$ égal au nombre de termes. La formule avec la moyenne des termes extrêmes est celle des suites arithmétiques."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Retrouver le premier terme à partir de $v_3$",
          "stepTheme": "Retrouver le premier terme à partir de $v_3$",
          "stepBadge": "Retrouver le premier terme à partir de $v_3$",
          "paragraphText": "• La suite $(v_n)$ est géométrique de raison $q = \\frac{1}{2}$ et $v_3 = 12$.\nOn écrit $v_3 = v_1 \\times q^{3-1} = v_1 \\times \\left(\\frac{1}{2}\\right)^2 = v_1 \\times \\frac{1}{4}$.\nDonc $v_1 \\times \\frac{1}{4} = 12$, ce qui donne $v_1$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q6",
            "type": "mcq",
            "prompt": "Pour la suite géométrique de raison $\\frac{1}{2}$ avec $v_3 = 12$, que vaut $v_1$ ?",
            "options": [
              "$3$",
              "$48$",
              "$24$",
              "$6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "De $v_3 = v_1 \\times \\frac{1}{4} = 12$, on tire $v_1 = 4 \\times 12 = 48$. C'est la question 1 de l'exercice de fixation de la leçon."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Exprimer la somme $S_n = v_1 + \\cdots + v_n$",
          "stepTheme": "Exprimer la somme $S_n = v_1 + \\cdots + v_n$",
          "stepBadge": "Exprimer la somme $S_n = v_1 + \\cdots + v_n$",
          "paragraphText": "• Avec $v_1 = 48$ et $q = \\frac{1}{2}$, la somme $S_n = v_1 + v_2 + \\cdots + v_n$ compte $n$ termes.\nOn applique la formule : $S_n = 48 \\times \\frac{1 - \\left(\\frac{1}{2}\\right)^n}{1 - \\frac{1}{2}}$.\nComme $1 - \\frac{1}{2} = \\frac{1}{2}$, on obtient la forme simplifiée ci-dessous.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q7",
            "type": "mcq",
            "prompt": "Pour la suite géométrique de raison $\\frac{1}{2}$ et de premier terme $v_1 = 48$, la somme $S_n = v_1 + \\cdots + v_n$ vaut :",
            "options": [
              "$48 \\left(1 - \\left(\\frac{1}{2}\\right)^n\\right)$",
              "$96 \\left(\\frac{1}{2}\\right)^n$",
              "$48n$",
              "$96 \\left(1 - \\left(\\frac{1}{2}\\right)^n\\right)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$S_n = 48 \\times \\frac{1 - \\left(\\frac{1}{2}\\right)^n}{\\frac{1}{2}} = 96 \\left(1 - \\left(\\frac{1}{2}\\right)^n\\right)$ : diviser par $\\frac{1}{2}$ double le coefficient."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q1",
          "type": "mcq",
          "prompt": "La propriété de sens de variation énoncée dans la leçon s'applique aux suites géométriques :",
          "options": [
            "De raison négative",
            "À termes positifs",
            "De premier terme nul",
            "À termes de signes alternés"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété est énoncée pour une suite géométrique à termes positifs. Avec une raison négative, les termes changent de signe et aucun des trois cas de la propriété ne s'applique."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q2",
          "type": "mcq",
          "prompt": "Une suite géométrique à termes positifs a pour premier terme $v_0 = 0{,}5$ et pour raison $q = 7$. Elle est :",
          "options": [
            "Décroissante",
            "Croissante",
            "Constante",
            "Ni croissante ni décroissante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le premier terme et la raison sont positifs et $q = 7 > 1$ : d'après la propriété, la suite est croissante. C'est le cas a) de l'exercice de fixation de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q3",
          "type": "mcq",
          "prompt": "Une suite géométrique à termes positifs a pour premier terme $v_0 = 21$ et pour raison $q = 0{,}6$. Elle est :",
          "options": [
            "Croissante",
            "Constante",
            "Décroissante",
            "Ni croissante ni décroissante"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Comme $0 < 0{,}6 < 1$, la propriété donne une suite décroissante. C'est le cas b) de l'exercice de fixation de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q4",
          "type": "mcq",
          "prompt": "Une suite géométrique de raison $q = -2$ est :",
          "options": [
            "Croissante",
            "Décroissante",
            "Constante",
            "Ni croissante, ni décroissante, ni constante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la remarque de la leçon : avec une raison négative, les termes alternent en signe, la suite n'est ni croissante, ni décroissante, ni constante."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q5",
          "type": "mcq",
          "prompt": "Pour une suite géométrique de raison $q \\neq 1$, la somme $v_0 + v_1 + \\cdots + v_n$ vaut :",
          "options": [
            "$v_0 \\times \\frac{1 - q^{n+1}}{1 - q}$",
            "$v_0 \\times \\frac{1 - q^n}{1 - q}$",
            "$(n + 1) \\times \\frac{v_0 + v_n}{2}$",
            "$v_0 \\times \\frac{1 - q^{n+1}}{1 + q}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la formule de la leçon, avec l'exposant $n + 1$ égal au nombre de termes. La formule avec la moyenne des termes extrêmes est celle des suites arithmétiques."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q6",
          "type": "mcq",
          "prompt": "Pour la suite géométrique de raison $\\frac{1}{2}$ avec $v_3 = 12$, que vaut $v_1$ ?",
          "options": [
            "$3$",
            "$48$",
            "$24$",
            "$6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "De $v_3 = v_1 \\times \\frac{1}{4} = 12$, on tire $v_1 = 4 \\times 12 = 48$. C'est la question 1 de l'exercice de fixation de la leçon."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p04_q7",
          "type": "mcq",
          "prompt": "Pour la suite géométrique de raison $\\frac{1}{2}$ et de premier terme $v_1 = 48$, la somme $S_n = v_1 + \\cdots + v_n$ vaut :",
          "options": [
            "$48 \\left(1 - \\left(\\frac{1}{2}\\right)^n\\right)$",
            "$96 \\left(\\frac{1}{2}\\right)^n$",
            "$48n$",
            "$96 \\left(1 - \\left(\\frac{1}{2}\\right)^n\\right)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$S_n = 48 \\times \\frac{1 - \\left(\\frac{1}{2}\\right)^n}{\\frac{1}{2}} = 96 \\left(1 - \\left(\\frac{1}{2}\\right)^n\\right)$ : diviser par $\\frac{1}{2}$ double le coefficient."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05",
      "order": 5,
      "title": "Comparer et appliquer : placements et salaires",
      "summary": "Distinguer arithmétique et géométrique grâce au tableau récapitulatif et appliquer les deux modèles aux placements et aux salaires.",
      "conceptExplanation": "Le tableau récapitulatif de la leçon oppose les deux modèles. Suite arithmétique : $u_{n+1} = u_n + r$, $u_n = nr + u_0$, somme $(n + 1) \\times \\frac{u_0 + u_n}{2}$. Suite géométrique : $v_{n+1} = qv_n$, $v_n = v_0 q^n$, somme $v_0 \\times \\frac{1 - q^{n+1}}{1 - q}$ si $q \\neq 1$.\nCes deux modèles décrivent les situations d'augmentation régulière : une augmentation d'un montant fixe (salaire de Monsieur Yao, exercice 4 ; plan A de Monsieur Nahoua, exercice 6) suit une suite arithmétique, une augmentation d'un pourcentage fixe (intérêts composés de Madame Koffi ; plan B de Monsieur Nahoua) suit une suite géométrique.\nDans la situation complexe de la leçon, le capital de Madame Koffi suit la suite géométrique $u_n = 2000000 \\times (1{,}1)^n$, et $u_{25}$ dépasse les $20000000$ F CFA nécessaires pour sa maison.",
      "keyRule": "Montant fixe ajouté : modèle arithmétique ; pourcentage fixe appliqué : modèle géométrique.",
      "formulas": [
        {
          "name": "Récapitulatif arithmétique",
          "formula": "u_{n+1} = u_n + r \\text{ et } u_n = nr + u_0"
        },
        {
          "name": "Récapitulatif géométrique",
          "formula": "v_{n+1} = qv_n \\text{ et } v_n = v_0 q^n"
        }
      ],
      "workedExample": {
        "title": "Le capital de Madame Koffi après 25 ans (situation complexe)",
        "statement": "Madame Koffi place un capital initial de 2 000 000 F CFA au taux de 10 % d'intérêt composé annuel. Avec l'argent capitalisé au bout de 25 ans, elle envisage de construire une maison dont le coût s'élèvera à 20 000 000 F CFA. Pourra-t-elle construire cette maison avec son épargne ?",
        "methodSteps": [
          "Soit $(u_n)$ la suite des capitaux durant l'épargne : $u_0 = 2000000$ et $u_{n+1} = 1{,}1 u_n$, car augmenter de $10\\%$ revient à multiplier par $1{,}1$.",
          "La suite $(u_n)$ est donc géométrique de raison $1{,}1$ et de premier terme $2000000$ : $u_n = 2000000 \\times (1{,}1)^n$.",
          "Au bout de 25 ans : $u_{25} = 2000000 \\times (1{,}1)^{25} = 21669411{,}9$.",
          "On compare au coût de la maison : $21669411{,}9 > 20000000$."
        ],
        "conclusion": "Le souhait de Madame Koffi sera réalisé : son épargne dépassera le coût de la maison."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Deux modèles d'augmentation régulière",
          "stepTheme": "Deux modèles d'augmentation régulière",
          "stepBadge": "Deux modèles d'augmentation régulière",
          "paragraphText": "• Une augmentation d'un montant fixe à chaque étape ajoute toujours la même quantité : elle est modélisée par une suite arithmétique, comme l'option 1 du placement de la promotion, qui augmente de $2500$ F CFA par mois.\n• Une augmentation d'un pourcentage fixe multiplie à chaque étape par le même coefficient : elle est modélisée par une suite géométrique, comme l'option 2 du même placement, qui augmente de $5\\%$ par mois.\nDistinguer ces deux modèles est la première étape des exercices d'application de la leçon.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q1",
            "type": "mcq",
            "prompt": "Un salaire qui augmente de $4{,}5\\%$ chaque année suit le modèle d'une suite :",
            "options": [
              "Arithmétique",
              "Constante",
              "Géométrique",
              "Ni arithmétique ni géométrique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une augmentation en pourcentage multiplie chaque année par le coefficient $1{,}045$ : c'est le plan B de l'exercice 6, une suite géométrique. Un montant fixe ajouté donnerait une suite arithmétique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le terme médian d'une suite arithmétique",
          "stepTheme": "Le terme médian d'une suite arithmétique",
          "stepBadge": "Le terme médian d'une suite arithmétique",
          "paragraphText": "• D'après l'exercice 1 de la leçon, si $(u_n)$ est arithmétique, alors pour tout entier non nul $n$, $\\frac{u_{n-1} + u_{n+1}}{2} = u_n$ : l'affirmation est vraie.\nLe terme $u_n$ est la moyenne de ses deux voisins.\nC'est une conséquence directe de la formule de la somme de trois termes consécutifs.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q2",
            "type": "mcq",
            "prompt": "Pour une suite arithmétique et tout entier non nul $n$, $\\frac{u_{n-1} + u_{n+1}}{2}$ vaut :",
            "options": [
              "$u_{n+1}$",
              "$u_{n-1}$",
              "$u_n$",
              "$2u_n$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'exercice 1 de la leçon répond « vrai » : dans une suite arithmétique, chaque terme est la moyenne de ses deux voisins."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Deux affirmations fausses à repérer",
          "stepTheme": "Deux affirmations fausses à repérer",
          "stepBadge": "Deux affirmations fausses à repérer",
          "paragraphText": "• Piège de l'exercice 1 : « si $u_{n+1} + u_n = r$ où $r$ est une constante, alors $(u_n)$ est arithmétique » est faux.\nDe même, « si $u_{n+1} \\times u_n = q$ où $q$ est une constante, alors $(u_n)$ est géométrique » est faux.\nCe qui caractérise une suite arithmétique, c'est la différence $u_{n+1} - u_n$ constante ; une suite géométrique, le quotient $\\frac{u_{n+1}}{u_n}$ constant.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q3",
            "type": "mcq",
            "prompt": "L'affirmation « si $u_{n+1} + u_n = r$, où $r$ est une constante, alors la suite $(u_n)$ est arithmétique » est :",
            "options": [
              "Vraie, car on y ajoute la constante $r$",
              "Fausse : ce qui doit être constant, c'est la différence $u_{n+1} - u_n$",
              "Vraie uniquement si $r = 0$",
              "Fausse uniquement si $r < 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Réponse de l'exercice 1 de la leçon : faux. Une suite arithmétique est caractérisée par une différence de termes consécutifs constante, pas par leur somme."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La somme des seize premiers termes de $V_n = 3^n$",
          "stepTheme": "La somme des seize premiers termes de $V_n = 3^n$",
          "stepBadge": "La somme des seize premiers termes de $V_n = 3^n$",
          "paragraphText": "• La suite définie par $V_n = 3^n$ est géométrique de premier terme $V_0 = 1$ et de raison $3$, donc croissante.\nLa somme de ses seize premiers termes compte $16$ termes : $V_0 + V_1 + \\cdots + V_{15} = 1 \\times \\frac{1 - 3^{16}}{1 - 3}$.\nLe calcul donne le résultat ci-dessous (exercice 3 de la leçon).",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q4",
            "type": "mcq",
            "prompt": "Pour la suite définie par $V_n = 3^n$, la somme des seize premiers termes vaut :",
            "options": [
              "$43046720$",
              "$21523360$",
              "$10761680$",
              "$65536$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$V_0 + \\cdots + V_{15} = \\frac{3^{16} - 1}{2} = \\frac{43046720}{2} = 21523360$, comme dans la solution de l'exercice 3."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le salaire de Monsieur Yao en 2020 (modèle arithmétique)",
          "stepTheme": "Le salaire de Monsieur Yao en 2020 (modèle arithmétique)",
          "stepBadge": "Le salaire de Monsieur Yao en 2020 (modèle arithmétique)",
          "paragraphText": "• Monsieur Yao est embauché le 1er janvier 2015 avec un salaire mensuel initial de $125000$ F CFA, augmenté de $12000$ F CFA chaque année (exercice 4).\nSes salaires mensuels forment une suite arithmétique : $U_1 = 137000$, $U_2 = 149000$, $U_3 = 161000$.\nLe salaire de janvier 2020 est le terme $U_5$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q5",
            "type": "mcq",
            "prompt": "Dans l'exercice 4, le salaire mensuel de Monsieur Yao au 1er janvier 2020 vaut :",
            "options": [
              "$173000$ F CFA",
              "$161000$ F CFA",
              "$185000$ F CFA",
              "$197000$ F CFA"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$U_5 = U_3 + 2 \\times 12000 = 161000 + 24000 = 185000$ F CFA : on ajoute la raison $12000$ cinq fois au salaire initial."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les deux plans de Monsieur Nahoua après 20 ans",
          "stepTheme": "Les deux plans de Monsieur Nahoua après 20 ans",
          "stepBadge": "Les deux plans de Monsieur Nahoua après 20 ans",
          "paragraphText": "• Plan A (exercice 6) : le salaire mensuel augmente de $5000$ F CFA par an, donc $U_n = 92000 + 5000n$ et $U_{20} = 192000$ F CFA.\n• Plan B : le salaire augmente de $4{,}5\\%$ par an, donc $V_{n+1} = 1{,}045 V_n$, $V_n = 92000 \\times (1{,}045)^n$ et $V_{20} = 221877{,}69$ F CFA.\nAprès 20 ans, les deux plans ne donnent pas le même salaire mensuel.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q6",
            "type": "mcq",
            "prompt": "Dans l'exercice 6, après 20 ans, quel plan donne le salaire mensuel le plus élevé, et de combien ?",
            "options": [
              "Le plan A, avec $192000$ F CFA",
              "Le plan B, avec $221877{,}69$ F CFA",
              "Les deux plans donnent $192000$ F CFA",
              "Le plan A, avec $221877{,}69$ F CFA"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$U_{20} = 92000 + 5000 \\times 20 = 192000$ et $V_{20} = 92000 \\times (1{,}045)^{20} = 221877{,}69$ : le plan B, géométrique, donne le salaire le plus élevé après 20 ans."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Le placement de la promotion : quelle option atteint 400 000 F CFA ?",
          "stepTheme": "Le placement de la promotion : quelle option atteint 400 000 F CFA ?",
          "stepBadge": "Le placement de la promotion : quelle option atteint 400 000 F CFA ?",
          "paragraphText": "• Situation d'apprentissage : la promotion place $300000$ F CFA et vise $400000$ F CFA.\nOption 1 : le capital augmente de $2500$ F CFA par mois (suite arithmétique) ; il faut un gain de $100000$ F CFA, soit $40$ mois.\nOption 2 : le capital augmente de $5\\%$ par mois (suite géométrique) ; au bout de $6$ mois, il vaut $300000 \\times (1{,}05)^6 = 402028{,}69$ F CFA.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q7",
            "type": "mcq",
            "prompt": "Dans la situation d'apprentissage, avec l'option 2 (augmentation de $5\\%$ par mois), au bout de combien de mois le capital placé de $300000$ F CFA dépasse-t-il $400000$ F CFA ?",
            "options": [
              "$40$ mois",
              "$12$ mois",
              "$20$ mois",
              "$6$ mois"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le capital suit une suite géométrique de raison $1{,}05$ : $300000 \\times (1{,}05)^6 = 402028{,}69 > 400000$. L'option 1, arithmétique, demanderait $40$ mois."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q1",
          "type": "mcq",
          "prompt": "Un salaire qui augmente de $4{,}5\\%$ chaque année suit le modèle d'une suite :",
          "options": [
            "Arithmétique",
            "Constante",
            "Géométrique",
            "Ni arithmétique ni géométrique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une augmentation en pourcentage multiplie chaque année par le coefficient $1{,}045$ : c'est le plan B de l'exercice 6, une suite géométrique. Un montant fixe ajouté donnerait une suite arithmétique."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q2",
          "type": "mcq",
          "prompt": "Pour une suite arithmétique et tout entier non nul $n$, $\\frac{u_{n-1} + u_{n+1}}{2}$ vaut :",
          "options": [
            "$u_{n+1}$",
            "$u_{n-1}$",
            "$u_n$",
            "$2u_n$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'exercice 1 de la leçon répond « vrai » : dans une suite arithmétique, chaque terme est la moyenne de ses deux voisins."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q3",
          "type": "mcq",
          "prompt": "L'affirmation « si $u_{n+1} + u_n = r$, où $r$ est une constante, alors la suite $(u_n)$ est arithmétique » est :",
          "options": [
            "Vraie, car on y ajoute la constante $r$",
            "Fausse : ce qui doit être constant, c'est la différence $u_{n+1} - u_n$",
            "Vraie uniquement si $r = 0$",
            "Fausse uniquement si $r < 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Réponse de l'exercice 1 de la leçon : faux. Une suite arithmétique est caractérisée par une différence de termes consécutifs constante, pas par leur somme."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q4",
          "type": "mcq",
          "prompt": "Pour la suite définie par $V_n = 3^n$, la somme des seize premiers termes vaut :",
          "options": [
            "$43046720$",
            "$21523360$",
            "$10761680$",
            "$65536$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$V_0 + \\cdots + V_{15} = \\frac{3^{16} - 1}{2} = \\frac{43046720}{2} = 21523360$, comme dans la solution de l'exercice 3."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q5",
          "type": "mcq",
          "prompt": "Dans l'exercice 4, le salaire mensuel de Monsieur Yao au 1er janvier 2020 vaut :",
          "options": [
            "$173000$ F CFA",
            "$161000$ F CFA",
            "$185000$ F CFA",
            "$197000$ F CFA"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$U_5 = U_3 + 2 \\times 12000 = 161000 + 24000 = 185000$ F CFA : on ajoute la raison $12000$ cinq fois au salaire initial."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q6",
          "type": "mcq",
          "prompt": "Dans l'exercice 6, après 20 ans, quel plan donne le salaire mensuel le plus élevé, et de combien ?",
          "options": [
            "Le plan A, avec $192000$ F CFA",
            "Le plan B, avec $221877{,}69$ F CFA",
            "Les deux plans donnent $192000$ F CFA",
            "Le plan A, avec $221877{,}69$ F CFA"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$U_{20} = 92000 + 5000 \\times 20 = 192000$ et $V_{20} = 92000 \\times (1{,}045)^{20} = 221877{,}69$ : le plan B, géométrique, donne le salaire le plus élevé après 20 ans."
        },
        {
          "id": "terminale_a1_maths_numerique_l05_suites_numeriques_p05_q7",
          "type": "mcq",
          "prompt": "Dans la situation d'apprentissage, avec l'option 2 (augmentation de $5\\%$ par mois), au bout de combien de mois le capital placé de $300000$ F CFA dépasse-t-il $400000$ F CFA ?",
          "options": [
            "$40$ mois",
            "$12$ mois",
            "$20$ mois",
            "$6$ mois"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le capital suit une suite géométrique de raison $1{,}05$ : $300000 \\times (1{,}05)^6 = 402028{,}69 > 400000$. L'option 1, arithmétique, demanderait $40$ mois."
        }
      ]
    }
  ]
};
