import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_A_L05_SUITES: CurriculumChapter = {
  "id": "terminale_a_maths_numerique_l05_suites",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 5,
  "title": "Leçon 5 : Les suites numériques (arithmétiques et géométriques)",
  "summary": "Sens de variation, suites arithmétiques et géométriques, terme général, sommes, limite de q puissance n, intérêts simples et composés.",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé",
  "points": [
    {
      "id": "terminale_a_maths_numerique_l05_suites_p01",
      "order": 1,
      "title": "Généralités et sens de variation",
      "summary": "Calculer des termes et étudier le signe de $U_{n+1}-U_n$.",
      "conceptExplanation": "Une suite $(U_n)$ associe un nombre $U_n$ à chaque entier naturel $n$.\n- Définie de façon explicite : $U_n=2n+5$ donne $U_3=2\\times3+5=11$.\n- Définie par récurrence : $U_0=2$ et $U_{n+1}=3U_n-1$ donnent $U_1=5$, puis $U_2=14$.\n\nSens de variation : on étudie le signe de $U_{n+1}-U_n$.\n- Si $U_{n+1}-U_n>0$ pour tout $n$, la suite est croissante.\n- Si $U_{n+1}-U_n<0$ pour tout $n$, la suite est décroissante.\n- Si $U_{n+1}-U_n=0$ pour tout $n$, la suite est constante.\n\nExemples :\n- $U_n=3n-2$ : $U_{n+1}-U_n=3>0$, croissante ;\n- $U_n=n^2+1$ : $U_{n+1}-U_n=2n+1>0$, croissante ;\n- $U_n=\\dfrac{1}{n+1}$ : $U_{n+1}-U_n=-\\dfrac{1}{(n+1)(n+2)}<0$, décroissante.",
      "keyRule": "Signe de $U_{n+1}-U_n$ : positif, la suite croît ; négatif, elle décroît ; nul, elle est constante.",
      "formulas": [],
      "workedExample": {
        "title": "Sens de variation",
        "statement": "Étudie le sens de variation de $U_n=n^2+1$.",
        "methodSteps": [
          "$U_{n+1}=(n+1)^2+1=n^2+2n+2$.",
          "$U_{n+1}-U_n=2n+1$.",
          "Pour tout entier $n\\geq0$, $2n+1>0$."
        ],
        "conclusion": "$(U_n)$ est croissante."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un terme explicite",
          "stepTheme": "Un terme explicite",
          "stepBadge": "Un terme explicite",
          "paragraphText": "On remplace $n$ par sa valeur : $U_3=2\\times3+5$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q1",
            "type": "mcq",
            "prompt": "Soit la suite définie par $U_n=2n+5$. Que vaut $U_3$ ?",
            "options": [
              "$10$",
              "$11$",
              "$8$",
              "$16$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$U_3=6+5=11$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Une suite par récurrence",
          "stepTheme": "Une suite par récurrence",
          "stepBadge": "Une suite par récurrence",
          "paragraphText": "Chaque terme se calcule à partir du précédent.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q2",
            "type": "mcq",
            "prompt": "Soit la suite définie par $U_0=2$ et $U_{n+1}=3U_n-1$. Que vaut $U_2$ ?",
            "options": [
              "$5$",
              "$17$",
              "$14$",
              "$8$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$U_1=3\\times2-1=5$, puis $U_2=3\\times5-1=14$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Prouver la croissance",
          "stepTheme": "Prouver la croissance",
          "stepBadge": "Prouver la croissance",
          "paragraphText": "On montre que $U_{n+1}-U_n>0$ pour tout $n$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q3",
            "type": "mcq",
            "prompt": "Pour prouver qu'une suite $(U_n)$ est strictement croissante, que peut-on montrer pour tout entier $n$ ?",
            "options": [
              "$U_n>0$",
              "$U_{n+1}-U_n<0$",
              "$U_0>0$",
              "$U_{n+1}-U_n>0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Chaque terme est alors plus grand que le précédent."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une différence constante positive",
          "stepTheme": "Une différence constante positive",
          "stepBadge": "Une différence constante positive",
          "paragraphText": "$U_n=3n-2$ : $U_{n+1}-U_n=3(n+1)-2-(3n-2)=3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q4",
            "type": "mcq",
            "prompt": "Soit $U_n=3n-2$. On calcule $U_{n+1}-U_n=3$. Quel est le sens de variation de $(U_n)$ ?",
            "options": [
              "Croissante",
              "Décroissante",
              "Constante",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3>0$ pour tout $n$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une suite décroissante",
          "stepTheme": "Une suite décroissante",
          "stepBadge": "Une suite décroissante",
          "paragraphText": "$U_n=10-4n$ : $U_{n+1}-U_n=-4<0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q5",
            "type": "mcq",
            "prompt": "Soit $U_n=10-4n$. Que vaut $U_{n+1}-U_n$, et quel est le sens de variation de la suite ?",
            "options": [
              "$4$ : croissante",
              "$-4$ : décroissante",
              "$0$ : constante",
              "$10$ : croissante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$10-4(n+1)-(10-4n)=-4$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec un carré",
          "stepTheme": "Avec un carré",
          "stepBadge": "Avec un carré",
          "paragraphText": "$U_n=n^2+1$ : $U_{n+1}-U_n=2n+1>0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q6",
            "type": "mcq",
            "prompt": "Soit $U_n=n^2+1$. Sachant que $U_{n+1}-U_n=2n+1$, quel est le sens de variation de $(U_n)$ ?",
            "options": [
              "Décroissante",
              "Constante",
              "Croissante",
              "Croissante puis décroissante"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$2n+1>0$ pour tout entier naturel $n$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Avec une fraction",
          "stepTheme": "Avec une fraction",
          "stepBadge": "Avec une fraction",
          "paragraphText": "$U_n=\\dfrac{1}{n+1}$ : $U_{n+1}-U_n=-\\dfrac{1}{(n+1)(n+2)}<0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q7",
            "type": "mcq",
            "prompt": "Soit $U_n=\\dfrac{1}{n+1}$. On trouve $U_{n+1}-U_n=-\\dfrac{1}{(n+1)(n+2)}$. Quel est le sens de variation de $(U_n)$ ?",
            "options": [
              "Croissante",
              "Constante",
              "Elle n'a pas de sens de variation",
              "Décroissante"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un quotient de nombres positifs précédé d'un signe moins est négatif."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Positive ne veut pas dire croissante",
          "stepTheme": "Positive ne veut pas dire croissante",
          "stepBadge": "Positive ne veut pas dire croissante",
          "paragraphText": "Une suite à termes positifs peut très bien être décroissante.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p01_q8",
            "type": "mcq",
            "prompt": "Tous les termes de la suite $U_n=\\dfrac{10}{n+1}$ sont positifs. Peut-on en conclure qu'elle est croissante ?",
            "options": [
              "Oui, car ses termes sont positifs",
              "Non : être positive ne dit rien du sens de variation ; ici elle est décroissante",
              "Oui, car $10>0$",
              "Non, car elle est constante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$U_0=10$, $U_1=5$, $U_2\\approx3{,}3$ : les termes diminuent."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q1",
          "type": "mcq",
          "prompt": "Soit la suite définie par $U_n=2n+5$. Que vaut $U_3$ ?",
          "options": [
            "$10$",
            "$11$",
            "$8$",
            "$16$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$U_3=6+5=11$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q2",
          "type": "mcq",
          "prompt": "Soit la suite définie par $U_0=2$ et $U_{n+1}=3U_n-1$. Que vaut $U_2$ ?",
          "options": [
            "$5$",
            "$17$",
            "$14$",
            "$8$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$U_1=3\\times2-1=5$, puis $U_2=3\\times5-1=14$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q3",
          "type": "mcq",
          "prompt": "Pour prouver qu'une suite $(U_n)$ est strictement croissante, que peut-on montrer pour tout entier $n$ ?",
          "options": [
            "$U_n>0$",
            "$U_{n+1}-U_n<0$",
            "$U_0>0$",
            "$U_{n+1}-U_n>0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Chaque terme est alors plus grand que le précédent."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q4",
          "type": "mcq",
          "prompt": "Soit $U_n=3n-2$. On calcule $U_{n+1}-U_n=3$. Quel est le sens de variation de $(U_n)$ ?",
          "options": [
            "Croissante",
            "Décroissante",
            "Constante",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3>0$ pour tout $n$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q5",
          "type": "mcq",
          "prompt": "Soit $U_n=10-4n$. Que vaut $U_{n+1}-U_n$, et quel est le sens de variation de la suite ?",
          "options": [
            "$4$ : croissante",
            "$-4$ : décroissante",
            "$0$ : constante",
            "$10$ : croissante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$10-4(n+1)-(10-4n)=-4$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q6",
          "type": "mcq",
          "prompt": "Soit $U_n=n^2+1$. Sachant que $U_{n+1}-U_n=2n+1$, quel est le sens de variation de $(U_n)$ ?",
          "options": [
            "Décroissante",
            "Constante",
            "Croissante",
            "Croissante puis décroissante"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$2n+1>0$ pour tout entier naturel $n$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q7",
          "type": "mcq",
          "prompt": "Soit $U_n=\\dfrac{1}{n+1}$. On trouve $U_{n+1}-U_n=-\\dfrac{1}{(n+1)(n+2)}$. Quel est le sens de variation de $(U_n)$ ?",
          "options": [
            "Croissante",
            "Constante",
            "Elle n'a pas de sens de variation",
            "Décroissante"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un quotient de nombres positifs précédé d'un signe moins est négatif."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p01_q8",
          "type": "mcq",
          "prompt": "Tous les termes de la suite $U_n=\\dfrac{10}{n+1}$ sont positifs. Peut-on en conclure qu'elle est croissante ?",
          "options": [
            "Oui, car ses termes sont positifs",
            "Non : être positive ne dit rien du sens de variation ; ici elle est décroissante",
            "Oui, car $10>0$",
            "Non, car elle est constante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$U_0=10$, $U_1=5$, $U_2\\approx3{,}3$ : les termes diminuent."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l05_suites_p02",
      "order": 2,
      "title": "Suites arithmétiques",
      "summary": "Raison, terme général $U_n=U_p+(n-p)r$ et somme de termes consécutifs.",
      "conceptExplanation": "Une suite arithmétique ajoute toujours le même nombre $r$, appelé raison : $U_{n+1}=U_n+r$.\n\nProuver qu'une suite est arithmétique : on calcule $U_{n+1}-U_n$ et on trouve une constante $r$ qui ne dépend pas de $n$.\n\nTerme général :\n- si le premier terme est $U_0$ : $U_n=U_0+nr$ ;\n- si le premier terme est $U_1$ : $U_n=U_1+(n-1)r$ ;\n- en général : $U_n=U_p+(n-p)r$.\n\nSomme de termes consécutifs :\n$$S=\\text{(nombre de termes)}\\times\\dfrac{\\text{premier terme}+\\text{dernier terme}}{2}.$$\nNombre de termes = indice du dernier − indice du premier + 1. Par exemple, de $U_0$ à $U_{10}$ il y a $11$ termes.\n\nExemple : $U_0=5$, $r=3$ : $U_n=5+3n$, $U_{10}=35$, et $U_0+\\dots+U_{10}=11\\times\\dfrac{5+35}{2}=220$.",
      "keyRule": "$U_n=U_0+nr$ ; somme $=$ (nombre de termes) $\\times\\dfrac{\\text{premier}+\\text{dernier}}{2}$.",
      "formulas": [
        {
          "name": "Terme général",
          "formula": "U_n=U_p+(n-p)r"
        },
        {
          "name": "Somme",
          "formula": "S=N\\times\\dfrac{U_{\\text{premier}}+U_{\\text{dernier}}}{2}"
        }
      ],
      "workedExample": {
        "title": "Calculer une somme",
        "statement": "$U_0=5$, $r=3$. Calcule $S=U_0+U_1+\\dots+U_{10}$.",
        "methodSteps": [
          "$U_{10}=5+10\\times3=35$.",
          "Nombre de termes : $10-0+1=11$.",
          "$S=11\\times\\dfrac{5+35}{2}=11\\times20$."
        ],
        "conclusion": "$S=220$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition",
          "stepTheme": "Définition",
          "stepBadge": "Définition",
          "paragraphText": "Une suite arithmétique de raison $r$ vérifie $U_{n+1}=U_n+r$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q1",
            "type": "mcq",
            "prompt": "Comment définit-on une suite arithmétique de raison $r$ ?",
            "options": [
              "$U_{n+1}=r\\times U_n$",
              "$U_{n+1}=U_n+r$",
              "$U_n=r^n$",
              "$U_{n+1}=U_n^r$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ajoute toujours la même raison $r$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Prouver qu'une suite est arithmétique",
          "stepTheme": "Prouver qu'une suite est arithmétique",
          "stepBadge": "Prouver qu'une suite est arithmétique",
          "paragraphText": "$U_n=4n-1$ : $U_{n+1}-U_n=4$, constante.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q2",
            "type": "mcq",
            "prompt": "Soit $U_n=4n-1$. On calcule $U_{n+1}-U_n=4$. Que peut-on conclure ?",
            "options": [
              "$(U_n)$ est géométrique de raison $4$",
              "$(U_n)$ est constante",
              "$(U_n)$ est arithmétique de raison $4$ et de premier terme $U_0=-1$",
              "$(U_n)$ est arithmétique de raison $-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La différence ne dépend pas de $n$ : c'est la raison."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Terme général à partir de U₀",
          "stepTheme": "Terme général à partir de U₀",
          "stepBadge": "Terme général à partir de U₀",
          "paragraphText": "$U_n=U_0+nr$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q3",
            "type": "mcq",
            "prompt": "Soit $(U_n)$ une suite arithmétique de premier terme $U_0=5$ et de raison $r=3$. Quelle est l'expression de $U_n$ en fonction de $n$ ?",
            "options": [
              "$U_n=5\\times3^n$",
              "$U_n=3+5n$",
              "$U_n=5+3(n-1)$",
              "$U_n=5+3n$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$U_n=U_0+nr=5+3n$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "À partir de U₁",
          "stepTheme": "À partir de U₁",
          "stepBadge": "À partir de U₁",
          "paragraphText": "$U_n=U_1+(n-1)r$ : $U_{10}=2+9\\times5=47$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q4",
            "type": "mcq",
            "prompt": "Soit $(U_n)$ arithmétique de premier terme $U_1=2$ et de raison $r=5$. Que vaut $U_{10}$ ?",
            "options": [
              "$47$",
              "$52$",
              "$50$",
              "$45$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "De $U_1$ à $U_{10}$, on ajoute $9$ fois la raison."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La formule générale",
          "stepTheme": "La formule générale",
          "stepBadge": "La formule générale",
          "paragraphText": "$U_n=U_p+(n-p)r$ : $U_{12}=U_5+7\\times3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q5",
            "type": "mcq",
            "prompt": "Soit $(U_n)$ arithmétique de raison $r=3$ avec $U_5=17$. Que vaut $U_{12}$ ?",
            "options": [
              "$36$",
              "$53$",
              "$38$",
              "$41$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$U_{12}=17+(12-5)\\times3=17+21=38$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Compter les termes",
          "stepTheme": "Compter les termes",
          "stepBadge": "Compter les termes",
          "paragraphText": "Nombre de termes = dernier indice − premier indice + 1.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q6",
            "type": "mcq",
            "prompt": "Combien y a-t-il de termes dans la somme $S=U_0+U_1+U_2+\\dots+U_{10}$ ?",
            "options": [
              "$10$ termes",
              "$11$ termes",
              "$9$ termes",
              "$12$ termes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$10-0+1=11$ : on n'oublie pas $U_0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "La formule de la somme",
          "stepTheme": "La formule de la somme",
          "stepBadge": "La formule de la somme",
          "paragraphText": "$S=$ nombre de termes $\\times\\dfrac{\\text{premier}+\\text{dernier}}{2}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q7",
            "type": "mcq",
            "prompt": "Quelle est la formule de la somme de termes consécutifs d'une suite arithmétique ?",
            "options": [
              "$\\text{premier terme}\\times\\dfrac{1-q^n}{1-q}$",
              "$\\text{premier terme}+\\text{dernier terme}$",
              "$\\dfrac{\\text{dernier terme}-\\text{premier terme}}{2}$",
              "$\\text{nombre de termes}\\times\\dfrac{\\text{premier terme}+\\text{dernier terme}}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La formule avec $q$ est celle des suites géométriques."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Calculer une somme",
          "stepTheme": "Calculer une somme",
          "stepBadge": "Calculer une somme",
          "paragraphText": "$U_0=5$, $U_{10}=35$, $11$ termes : $S=11\\times20=220$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p02_q8",
            "type": "mcq",
            "prompt": "Soit $(U_n)$ arithmétique avec $U_0=5$ et $r=3$, donc $U_{10}=35$. Que vaut $S=U_0+U_1+\\dots+U_{10}$ ?",
            "options": [
              "$200$",
              "$440$",
              "$220$",
              "$385$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$S=11\\times\\dfrac{5+35}{2}=11\\times20=220$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q1",
          "type": "mcq",
          "prompt": "Comment définit-on une suite arithmétique de raison $r$ ?",
          "options": [
            "$U_{n+1}=r\\times U_n$",
            "$U_{n+1}=U_n+r$",
            "$U_n=r^n$",
            "$U_{n+1}=U_n^r$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ajoute toujours la même raison $r$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q2",
          "type": "mcq",
          "prompt": "Soit $U_n=4n-1$. On calcule $U_{n+1}-U_n=4$. Que peut-on conclure ?",
          "options": [
            "$(U_n)$ est géométrique de raison $4$",
            "$(U_n)$ est constante",
            "$(U_n)$ est arithmétique de raison $4$ et de premier terme $U_0=-1$",
            "$(U_n)$ est arithmétique de raison $-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La différence ne dépend pas de $n$ : c'est la raison."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q3",
          "type": "mcq",
          "prompt": "Soit $(U_n)$ une suite arithmétique de premier terme $U_0=5$ et de raison $r=3$. Quelle est l'expression de $U_n$ en fonction de $n$ ?",
          "options": [
            "$U_n=5\\times3^n$",
            "$U_n=3+5n$",
            "$U_n=5+3(n-1)$",
            "$U_n=5+3n$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$U_n=U_0+nr=5+3n$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q4",
          "type": "mcq",
          "prompt": "Soit $(U_n)$ arithmétique de premier terme $U_1=2$ et de raison $r=5$. Que vaut $U_{10}$ ?",
          "options": [
            "$47$",
            "$52$",
            "$50$",
            "$45$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "De $U_1$ à $U_{10}$, on ajoute $9$ fois la raison."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q5",
          "type": "mcq",
          "prompt": "Soit $(U_n)$ arithmétique de raison $r=3$ avec $U_5=17$. Que vaut $U_{12}$ ?",
          "options": [
            "$36$",
            "$53$",
            "$38$",
            "$41$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$U_{12}=17+(12-5)\\times3=17+21=38$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q6",
          "type": "mcq",
          "prompt": "Combien y a-t-il de termes dans la somme $S=U_0+U_1+U_2+\\dots+U_{10}$ ?",
          "options": [
            "$10$ termes",
            "$11$ termes",
            "$9$ termes",
            "$12$ termes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$10-0+1=11$ : on n'oublie pas $U_0$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q7",
          "type": "mcq",
          "prompt": "Quelle est la formule de la somme de termes consécutifs d'une suite arithmétique ?",
          "options": [
            "$\\text{premier terme}\\times\\dfrac{1-q^n}{1-q}$",
            "$\\text{premier terme}+\\text{dernier terme}$",
            "$\\dfrac{\\text{dernier terme}-\\text{premier terme}}{2}$",
            "$\\text{nombre de termes}\\times\\dfrac{\\text{premier terme}+\\text{dernier terme}}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La formule avec $q$ est celle des suites géométriques."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p02_q8",
          "type": "mcq",
          "prompt": "Soit $(U_n)$ arithmétique avec $U_0=5$ et $r=3$, donc $U_{10}=35$. Que vaut $S=U_0+U_1+\\dots+U_{10}$ ?",
          "options": [
            "$200$",
            "$440$",
            "$220$",
            "$385$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$S=11\\times\\dfrac{5+35}{2}=11\\times20=220$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l05_suites_p03",
      "order": 3,
      "title": "Suites géométriques",
      "summary": "Raison, terme général $V_n=V_0q^n$, pourcentages, limite de $q^n$ et somme.",
      "conceptExplanation": "Une suite géométrique multiplie toujours par le même nombre $q$, appelé raison : $V_{n+1}=q\\times V_n$.\n\nProuver qu'une suite (à termes non nuls) est géométrique : on montre que $\\dfrac{V_{n+1}}{V_n}$ est une constante $q$.\n\nTerme général :\n- si le premier terme est $V_0$ : $V_n=V_0\\times q^n$ ;\n- si le premier terme est $V_1$ : $V_n=V_1\\times q^{n-1}$ ;\n- en général : $V_n=V_p\\times q^{n-p}$.\n\nPourcentages : augmenter de $5\\,\\%$ revient à multiplier par $1{,}05$ ; un capital placé à $5\\,\\%$ par an forme une suite géométrique de raison $1{,}05$.\n\nSomme de termes consécutifs (pour $q\\neq1$) :\n$$S=\\text{premier terme}\\times\\dfrac{1-q^{N}}{1-q},$$ où $N$ est le nombre de termes.\n\nLimite de $q^n$ quand $n\\to+\\infty$ :\n- si $-1<q<1$, $q^n\\to0$ ;\n- si $q>1$, $q^n\\to+\\infty$ ;\n- si $q=1$, la suite est constante.",
      "keyRule": "$V_n=V_0q^n$ ; somme $=$ premier terme $\\times\\dfrac{1-q^N}{1-q}$ ($N$ = nombre de termes) ; $q^n\\to0$ si $-1<q<1$.",
      "formulas": [
        {
          "name": "Terme général",
          "formula": "V_n=V_p\\times q^{n-p}"
        },
        {
          "name": "Somme",
          "formula": "S=V_{\\text{premier}}\\times\\dfrac{1-q^{N}}{1-q}"
        }
      ],
      "workedExample": {
        "title": "Un capital placé",
        "statement": "On place $100\\,000$ F à $5\\,\\%$ par an (intérêts composés). Combien a-t-on après 2 ans ?",
        "methodSteps": [
          "Chaque année, le capital est multiplié par $1{,}05$.",
          "$C_2=100\\,000\\times1{,}05^2=100\\,000\\times1{,}1025$."
        ],
        "conclusion": "$C_2=110\\,250$ F."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Calculer un terme",
          "stepTheme": "Calculer un terme",
          "stepBadge": "Calculer un terme",
          "paragraphText": "$V_3=V_0\\times q^3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q1",
            "type": "mcq",
            "prompt": "Soit $(V_n)$ géométrique de premier terme $V_0=3$ et de raison $q=2$. Que vaut $V_3$ ?",
            "options": [
              "$9$",
              "$24$",
              "$12$",
              "$48$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$V_3=3\\times2^3=3\\times8=24$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le terme général",
          "stepTheme": "Le terme général",
          "stepBadge": "Le terme général",
          "paragraphText": "$V_n=V_0\\times q^n$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q2",
            "type": "mcq",
            "prompt": "Soit $(V_n)$ une suite géométrique de premier terme $V_0$ et de raison $q$. Quelle est la formule de son terme général $V_n$ ?",
            "options": [
              "$V_n=V_0+n\\times q$",
              "$V_n=q\\times V_0^n$",
              "$V_n=V_0\\times q^n$",
              "$V_n=V_0\\times n^q$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On multiplie $n$ fois par $q$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Prouver qu'une suite est géométrique",
          "stepTheme": "Prouver qu'une suite est géométrique",
          "stepBadge": "Prouver qu'une suite est géométrique",
          "paragraphText": "$V_n=5\\times2^n$ : $\\dfrac{V_{n+1}}{V_n}=2$, constant.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q3",
            "type": "mcq",
            "prompt": "Soit $V_n=5\\times2^n$. On calcule $\\dfrac{V_{n+1}}{V_n}=\\dfrac{5\\times2^{n+1}}{5\\times2^n}=2$. Que peut-on conclure ?",
            "options": [
              "$(V_n)$ est géométrique de raison $2$ et de premier terme $V_0=5$",
              "$(V_n)$ est arithmétique de raison $2$",
              "$(V_n)$ est géométrique de raison $5$",
              "$(V_n)$ est constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le quotient est une constante : c'est la raison."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "À partir de V₁",
          "stepTheme": "À partir de V₁",
          "stepBadge": "À partir de V₁",
          "paragraphText": "$V_n=V_1\\times q^{n-1}$ : $V_4=4\\times3^3=108$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q4",
            "type": "mcq",
            "prompt": "Soit $(V_n)$ géométrique de premier terme $V_1=4$ et de raison $q=3$. Que vaut $V_4$ ?",
            "options": [
              "$324$",
              "$36$",
              "$48$",
              "$108$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "De $V_1$ à $V_4$ on multiplie $3$ fois par $3$ : $4\\times27=108$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un pourcentage",
          "stepTheme": "Un pourcentage",
          "stepBadge": "Un pourcentage",
          "paragraphText": "Augmenter de $5\\,\\%$, c'est multiplier par $1{,}05$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q5",
            "type": "mcq",
            "prompt": "Un capital augmente de $5\\,\\%$ chaque année : il est multiplié par $1{,}05$ chaque année. La suite des capitaux est :",
            "options": [
              "Une suite arithmétique de raison $5$",
              "Une suite géométrique de raison $1{,}05$",
              "Une suite arithmétique de raison $1{,}05$",
              "Une suite constante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On multiplie toujours par le même nombre : suite géométrique."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le capital après 2 ans",
          "stepTheme": "Le capital après 2 ans",
          "stepBadge": "Le capital après 2 ans",
          "paragraphText": "$C_2=100\\,000\\times1{,}05^2=110\\,250$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q6",
            "type": "mcq",
            "prompt": "On place $100\\,000$ F à $5\\,\\%$ par an, à intérêts composés : $C_n=100\\,000\\times1{,}05^n$. De combien dispose-t-on après $2$ ans ?",
            "options": [
              "$110\\,000$ F",
              "$105\\,000$ F",
              "$110\\,250$ F",
              "$121\\,000$ F"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$1{,}05^2=1{,}1025$ et $100\\,000\\times1{,}1025=110\\,250$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Limite de qⁿ",
          "stepTheme": "Limite de qⁿ",
          "stepBadge": "Limite de qⁿ",
          "paragraphText": "Si $0<q<1$, $q^n\\to0$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q7",
            "type": "mcq",
            "prompt": "Quelle est la limite en $+\\infty$ de la suite géométrique de terme général $V_n=(0{,}5)^n$ ?",
            "options": [
              "$+\\infty$",
              "$0{,}5$",
              "$1$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On divise par $2$ à chaque fois : les termes se rapprochent de $0$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Le nombre de termes dans la somme",
          "stepTheme": "Le nombre de termes dans la somme",
          "stepBadge": "Le nombre de termes dans la somme",
          "paragraphText": "De $V_0$ à $V_9$ il y a $10$ termes : $S=1\\times\\dfrac{1-2^{10}}{1-2}=1023$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p03_q8",
            "type": "mcq",
            "prompt": "On veut $S=V_0+V_1+\\dots+V_9$ avec $V_0=1$ et $q=2$. Un élève écrit $S=\\dfrac{1-2^9}{1-2}=511$. Quelle est son erreur ?",
            "options": [
              "Aucune erreur",
              "Il y a $10$ termes, pas $9$ : $S=\\dfrac{1-2^{10}}{1-2}=1023$",
              "Il fallait utiliser la formule arithmétique",
              "Il fallait écrire $\\dfrac{1-2}{1-2^9}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'exposant est le nombre de termes : $9-0+1=10$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q1",
          "type": "mcq",
          "prompt": "Soit $(V_n)$ géométrique de premier terme $V_0=3$ et de raison $q=2$. Que vaut $V_3$ ?",
          "options": [
            "$9$",
            "$24$",
            "$12$",
            "$48$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$V_3=3\\times2^3=3\\times8=24$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q2",
          "type": "mcq",
          "prompt": "Soit $(V_n)$ une suite géométrique de premier terme $V_0$ et de raison $q$. Quelle est la formule de son terme général $V_n$ ?",
          "options": [
            "$V_n=V_0+n\\times q$",
            "$V_n=q\\times V_0^n$",
            "$V_n=V_0\\times q^n$",
            "$V_n=V_0\\times n^q$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On multiplie $n$ fois par $q$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q3",
          "type": "mcq",
          "prompt": "Soit $V_n=5\\times2^n$. On calcule $\\dfrac{V_{n+1}}{V_n}=\\dfrac{5\\times2^{n+1}}{5\\times2^n}=2$. Que peut-on conclure ?",
          "options": [
            "$(V_n)$ est géométrique de raison $2$ et de premier terme $V_0=5$",
            "$(V_n)$ est arithmétique de raison $2$",
            "$(V_n)$ est géométrique de raison $5$",
            "$(V_n)$ est constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quotient est une constante : c'est la raison."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q4",
          "type": "mcq",
          "prompt": "Soit $(V_n)$ géométrique de premier terme $V_1=4$ et de raison $q=3$. Que vaut $V_4$ ?",
          "options": [
            "$324$",
            "$36$",
            "$48$",
            "$108$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "De $V_1$ à $V_4$ on multiplie $3$ fois par $3$ : $4\\times27=108$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q5",
          "type": "mcq",
          "prompt": "Un capital augmente de $5\\,\\%$ chaque année : il est multiplié par $1{,}05$ chaque année. La suite des capitaux est :",
          "options": [
            "Une suite arithmétique de raison $5$",
            "Une suite géométrique de raison $1{,}05$",
            "Une suite arithmétique de raison $1{,}05$",
            "Une suite constante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On multiplie toujours par le même nombre : suite géométrique."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q6",
          "type": "mcq",
          "prompt": "On place $100\\,000$ F à $5\\,\\%$ par an, à intérêts composés : $C_n=100\\,000\\times1{,}05^n$. De combien dispose-t-on après $2$ ans ?",
          "options": [
            "$110\\,000$ F",
            "$105\\,000$ F",
            "$110\\,250$ F",
            "$121\\,000$ F"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$1{,}05^2=1{,}1025$ et $100\\,000\\times1{,}1025=110\\,250$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q7",
          "type": "mcq",
          "prompt": "Quelle est la limite en $+\\infty$ de la suite géométrique de terme général $V_n=(0{,}5)^n$ ?",
          "options": [
            "$+\\infty$",
            "$0{,}5$",
            "$1$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On divise par $2$ à chaque fois : les termes se rapprochent de $0$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p03_q8",
          "type": "mcq",
          "prompt": "On veut $S=V_0+V_1+\\dots+V_9$ avec $V_0=1$ et $q=2$. Un élève écrit $S=\\dfrac{1-2^9}{1-2}=511$. Quelle est son erreur ?",
          "options": [
            "Aucune erreur",
            "Il y a $10$ termes, pas $9$ : $S=\\dfrac{1-2^{10}}{1-2}=1023$",
            "Il fallait utiliser la formule arithmétique",
            "Il fallait écrire $\\dfrac{1-2}{1-2^9}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'exposant est le nombre de termes : $9-0+1=10$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l05_suites_p04",
      "order": 4,
      "title": "Exercice type BAC : une épargne",
      "summary": "Intérêts composés (suite géométrique) contre intérêts simples (suite arithmétique).",
      "conceptExplanation": "Sujet : Awa place $200\\,000$ F à la banque, à intérêts composés de $4\\,\\%$ par an. On note $C_n$ son capital au bout de $n$ années ; $C_0=200\\,000$.\n\n1. Chaque année le capital est multiplié par $1{,}04$ : $C_1=208\\,000$ F.\n2. $C_{n+1}=1{,}04\\,C_n$ : $(C_n)$ est géométrique de raison $1{,}04$ et de premier terme $C_0=200\\,000$.\n3. $C_n=200\\,000\\times1{,}04^n$.\n4. Avec $1{,}04^5\\approx1{,}2167$ : $C_5\\approx243\\,340$ F.\n5. $q=1{,}04>1$ et $C_0>0$ : la suite est croissante et $\\lim\\limits_{n\\to+\\infty}C_n=+\\infty$.\n6. Une autre banque propose des intérêts simples : $8\\,000$ F par an (4 % du capital de départ). $D_n=200\\,000+8\\,000n$ est arithmétique de raison $8\\,000$ : $D_5=240\\,000$ F.\n7. Au bout de 5 ans, $C_5>D_5$ : les intérêts composés rapportent plus.",
      "keyRule": "Intérêts composés : on multiplie (suite géométrique). Intérêts simples : on ajoute (suite arithmétique).",
      "formulas": [],
      "workedExample": {
        "title": "Comparer deux placements",
        "statement": "Après 5 ans : $C_5\\approx243\\,340$ F et $D_5=240\\,000$ F.",
        "methodSteps": [
          "$243\\,340-240\\,000=3\\,340$.",
          "Le placement à intérêts composés rapporte $3\\,340$ F de plus."
        ],
        "conclusion": "Awa a intérêt à choisir les intérêts composés."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Le capital après 1 an",
          "stepTheme": "Le capital après 1 an",
          "stepBadge": "Le capital après 1 an",
          "paragraphText": "$C_1=200\\,000\\times1{,}04=208\\,000$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q1",
            "type": "mcq",
            "prompt": "Awa place $200\\,000$ F à intérêts composés de $4\\,\\%$ par an. Quel est son capital $C_1$ au bout d'un an ?",
            "options": [
              "$200\\,400$ F",
              "$208\\,000$ F",
              "$240\\,000$ F",
              "$204\\,000$ F"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$4\\,\\%$ de $200\\,000$ font $8\\,000$ F."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "La nature de la suite",
          "stepTheme": "La nature de la suite",
          "stepBadge": "La nature de la suite",
          "paragraphText": "$C_{n+1}=1{,}04\\,C_n$ : on multiplie toujours par $1{,}04$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q2",
            "type": "mcq",
            "prompt": "Le capital d'Awa vérifie $C_{n+1}=1{,}04\\,C_n$ avec $C_0=200\\,000$. Quelle est la nature de la suite $(C_n)$ ?",
            "options": [
              "Arithmétique de raison $4$",
              "Arithmétique de raison $8\\,000$",
              "Géométrique de raison $1{,}04$",
              "Géométrique de raison $4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On multiplie par la même raison $1{,}04$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le terme général",
          "stepTheme": "Le terme général",
          "stepBadge": "Le terme général",
          "paragraphText": "$C_n=C_0\\times q^n=200\\,000\\times1{,}04^n$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q3",
            "type": "mcq",
            "prompt": "$(C_n)$ est géométrique de premier terme $C_0=200\\,000$ et de raison $1{,}04$. Quelle est l'expression de $C_n$ ?",
            "options": [
              "$C_n=200\\,000\\times1{,}04^n$",
              "$C_n=200\\,000+1{,}04n$",
              "$C_n=1{,}04\\times200\\,000^n$",
              "$C_n=200\\,000\\times4^n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$V_n=V_0\\times q^n$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le capital après 5 ans",
          "stepTheme": "Le capital après 5 ans",
          "stepBadge": "Le capital après 5 ans",
          "paragraphText": "$C_5=200\\,000\\times1{,}04^5\\approx200\\,000\\times1{,}2167$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q4",
            "type": "mcq",
            "prompt": "On a $C_n=200\\,000\\times1{,}04^n$ et on donne $1{,}04^5\\approx1{,}2167$. Quelle est la valeur approchée de $C_5$ ?",
            "options": [
              "$240\\,000$ F",
              "$208\\,000$ F",
              "$250\\,000$ F",
              "$243\\,340$ F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$200\\,000\\times1{,}2167=243\\,340$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le sens de variation",
          "stepTheme": "Le sens de variation",
          "stepBadge": "Le sens de variation",
          "paragraphText": "$q=1{,}04>1$ et $C_0>0$ : la suite est croissante.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q5",
            "type": "mcq",
            "prompt": "La suite $C_n=200\\,000\\times1{,}04^n$ a une raison $1{,}04>1$ et un premier terme positif. Quel est son sens de variation ?",
            "options": [
              "Décroissante",
              "Croissante",
              "Constante",
              "Elle n'a pas de sens de variation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque année on multiplie par un nombre plus grand que $1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La limite",
          "stepTheme": "La limite",
          "stepBadge": "La limite",
          "paragraphText": "$1{,}04^n\\to+\\infty$ car $1{,}04>1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut $\\lim\\limits_{n\\to+\\infty}C_n$ pour $C_n=200\\,000\\times1{,}04^n$ ?",
            "options": [
              "$0$",
              "$200\\,000$",
              "$+\\infty$",
              "$208\\,000$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$q>1$, donc $q^n\\to+\\infty$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Les intérêts simples",
          "stepTheme": "Les intérêts simples",
          "stepBadge": "Les intérêts simples",
          "paragraphText": "Intérêts simples : on ajoute $8\\,000$ F par an. $D_n=200\\,000+8\\,000n$, donc $D_5=240\\,000$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q7",
            "type": "mcq",
            "prompt": "Une autre banque verse des intérêts simples : $8\\,000$ F par an, d'où $D_n=200\\,000+8\\,000n$. Que vaut $D_5$ ?",
            "options": [
              "$240\\,000$ F",
              "$243\\,340$ F",
              "$208\\,000$ F",
              "$248\\,000$ F"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$200\\,000+5\\times8\\,000=240\\,000$ : suite arithmétique de raison $8\\,000$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Comparer les placements",
          "stepTheme": "Comparer les placements",
          "stepBadge": "Comparer les placements",
          "paragraphText": "Après 5 ans : $C_5\\approx243\\,340$ F et $D_5=240\\,000$ F.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l05_suites_p04_q8",
            "type": "mcq",
            "prompt": "Après 5 ans, les intérêts composés donnent $C_5\\approx243\\,340$ F et les intérêts simples $D_5=240\\,000$ F. Quel placement Awa doit-elle choisir ?",
            "options": [
              "Les intérêts simples, car $8\\,000$ F par an est fixe",
              "Les deux se valent",
              "On ne peut pas comparer une suite arithmétique et une suite géométrique",
              "Les intérêts composés, qui rapportent environ $3\\,340$ F de plus"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$243\\,340>240\\,000$ : les intérêts composés rapportent plus."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q1",
          "type": "mcq",
          "prompt": "Awa place $200\\,000$ F à intérêts composés de $4\\,\\%$ par an. Quel est son capital $C_1$ au bout d'un an ?",
          "options": [
            "$200\\,400$ F",
            "$208\\,000$ F",
            "$240\\,000$ F",
            "$204\\,000$ F"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$4\\,\\%$ de $200\\,000$ font $8\\,000$ F."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q2",
          "type": "mcq",
          "prompt": "Le capital d'Awa vérifie $C_{n+1}=1{,}04\\,C_n$ avec $C_0=200\\,000$. Quelle est la nature de la suite $(C_n)$ ?",
          "options": [
            "Arithmétique de raison $4$",
            "Arithmétique de raison $8\\,000$",
            "Géométrique de raison $1{,}04$",
            "Géométrique de raison $4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On multiplie par la même raison $1{,}04$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q3",
          "type": "mcq",
          "prompt": "$(C_n)$ est géométrique de premier terme $C_0=200\\,000$ et de raison $1{,}04$. Quelle est l'expression de $C_n$ ?",
          "options": [
            "$C_n=200\\,000\\times1{,}04^n$",
            "$C_n=200\\,000+1{,}04n$",
            "$C_n=1{,}04\\times200\\,000^n$",
            "$C_n=200\\,000\\times4^n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$V_n=V_0\\times q^n$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q4",
          "type": "mcq",
          "prompt": "On a $C_n=200\\,000\\times1{,}04^n$ et on donne $1{,}04^5\\approx1{,}2167$. Quelle est la valeur approchée de $C_5$ ?",
          "options": [
            "$240\\,000$ F",
            "$208\\,000$ F",
            "$250\\,000$ F",
            "$243\\,340$ F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$200\\,000\\times1{,}2167=243\\,340$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q5",
          "type": "mcq",
          "prompt": "La suite $C_n=200\\,000\\times1{,}04^n$ a une raison $1{,}04>1$ et un premier terme positif. Quel est son sens de variation ?",
          "options": [
            "Décroissante",
            "Croissante",
            "Constante",
            "Elle n'a pas de sens de variation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque année on multiplie par un nombre plus grand que $1$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut $\\lim\\limits_{n\\to+\\infty}C_n$ pour $C_n=200\\,000\\times1{,}04^n$ ?",
          "options": [
            "$0$",
            "$200\\,000$",
            "$+\\infty$",
            "$208\\,000$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$q>1$, donc $q^n\\to+\\infty$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q7",
          "type": "mcq",
          "prompt": "Une autre banque verse des intérêts simples : $8\\,000$ F par an, d'où $D_n=200\\,000+8\\,000n$. Que vaut $D_5$ ?",
          "options": [
            "$240\\,000$ F",
            "$243\\,340$ F",
            "$208\\,000$ F",
            "$248\\,000$ F"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$200\\,000+5\\times8\\,000=240\\,000$ : suite arithmétique de raison $8\\,000$."
        },
        {
          "id": "terminale_a_maths_numerique_l05_suites_p04_q8",
          "type": "mcq",
          "prompt": "Après 5 ans, les intérêts composés donnent $C_5\\approx243\\,340$ F et les intérêts simples $D_5=240\\,000$ F. Quel placement Awa doit-elle choisir ?",
          "options": [
            "Les intérêts simples, car $8\\,000$ F par an est fixe",
            "Les deux se valent",
            "On ne peut pas comparer une suite arithmétique et une suite géométrique",
            "Les intérêts composés, qui rapportent environ $3\\,340$ F de plus"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$243\\,340>240\\,000$ : les intérêts composés rapportent plus."
        }
      ]
    }
  ]
};
