import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_TLE_A_L06_PROBABILITES_STATISTIQUES: CurriculumChapter = {
  "id": "terminale_a_maths_numerique_l06_probabilites_statistiques",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 6,
  "title": "Leçon 6 : Probabilités et statistiques à deux variables",
  "summary": "Règles de calcul des probabilités, probabilité conditionnelle et indépendance, point moyen, droite de Mayer, covariance et moindres carrés.",
  "officialVolumeHours": 12,
  "contentVersion": 2,
  "source": "Programme de Terminale A fourni par l'équipe KONAN (pas de PDF officiel), vérifié et corrigé",
  "points": [
    {
      "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01",
      "order": 1,
      "title": "Probabilités : les règles de base",
      "summary": "Équiprobabilité, événement contraire, réunion et événements incompatibles.",
      "conceptExplanation": "Règles de base :\n- une probabilité est toujours comprise entre $0$ et $1$ : $0\\leq P(A)\\leq1$ ;\n- la somme des probabilités de toutes les issues vaut $1$.\n\nÉquiprobabilité (toutes les issues ont la même chance) :\n$$P(A)=\\dfrac{\\text{Card}(A)}{\\text{Card}(\\Omega)}=\\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}.$$\n\nÉvénement contraire $\\overline{A}$ : $P(\\overline{A})=1-P(A)$.\n\nRéunion de deux événements : $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.\nSi $A$ et $B$ sont incompatibles ($A\\cap B=\\varnothing$) : $P(A\\cup B)=P(A)+P(B)$.\n\nExemples :\n- un dé équilibré à $6$ faces : $P(\\text{pair})=\\dfrac{3}{6}=\\dfrac{1}{2}$ ;\n- $P(A)=0{,}5$, $P(B)=0{,}4$, $P(A\\cap B)=0{,}2$ donnent $P(A\\cup B)=0{,}7$.",
      "keyRule": "$P(\\overline{A})=1-P(A)$ ; $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$.",
      "formulas": [
        {
          "name": "Contraire",
          "formula": "P(\\overline{A})=1-P(A)"
        },
        {
          "name": "Réunion",
          "formula": "P(A\\cup B)=P(A)+P(B)-P(A\\cap B)"
        }
      ],
      "workedExample": {
        "title": "Une urne",
        "statement": "Une urne contient 3 boules rouges, 5 bleues et 2 vertes, indiscernables au toucher. On tire une boule.",
        "methodSteps": [
          "Nombre de cas possibles : $3+5+2=10$.",
          "$P(\\text{verte})=\\dfrac{2}{10}=\\dfrac{1}{5}$.",
          "$P(\\text{non verte})=1-\\dfrac{1}{5}=\\dfrac{4}{5}$."
        ],
        "conclusion": "$P(V)=\\dfrac{1}{5}$ et $P(\\overline{V})=\\dfrac{4}{5}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une probabilité est entre 0 et 1",
          "stepTheme": "Une probabilité est entre 0 et 1",
          "stepBadge": "Une probabilité est entre 0 et 1",
          "paragraphText": "Pour tout événement $A$, $0\\leq P(A)\\leq1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q1",
            "type": "mcq",
            "prompt": "Lequel de ces nombres ne peut pas être une probabilité ?",
            "options": [
              "$0{,}3$",
              "$1$",
              "$1{,}2$",
              "$0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une probabilité ne dépasse jamais $1$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Équiprobabilité",
          "stepTheme": "Équiprobabilité",
          "stepBadge": "Équiprobabilité",
          "paragraphText": "$P(A)=\\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q2",
            "type": "mcq",
            "prompt": "On lance un dé équilibré à $6$ faces numérotées de $1$ à $6$. Quelle est la probabilité d'obtenir un nombre pair ?",
            "options": [
              "$\\dfrac{1}{2}$",
              "$\\dfrac{1}{3}$",
              "$\\dfrac{1}{6}$",
              "$\\dfrac{2}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3$ cas favorables ($2$, $4$, $6$) sur $6$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'événement contraire",
          "stepTheme": "L'événement contraire",
          "stepBadge": "L'événement contraire",
          "paragraphText": "$P(\\overline{A})=1-P(A)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q3",
            "type": "mcq",
            "prompt": "Quelle est la relation entre la probabilité d'un événement $A$ et celle de son événement contraire $\\overline{A}$ ?",
            "options": [
              "$P(\\overline{A})=P(A)-1$",
              "$P(\\overline{A})=1-P(A)$",
              "$P(\\overline{A})=\\dfrac{1}{P(A)}$",
              "$P(\\overline{A})=-P(A)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$A$ et $\\overline{A}$ se partagent la probabilité totale $1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer un contraire",
          "stepTheme": "Calculer un contraire",
          "stepBadge": "Calculer un contraire",
          "paragraphText": "$P(A)=0{,}35$ donne $P(\\overline{A})=0{,}65$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q4",
            "type": "mcq",
            "prompt": "On sait que $P(A)=0{,}35$. Que vaut $P(\\overline{A})$ ?",
            "options": [
              "$0{,}35$",
              "$-0{,}35$",
              "$1{,}35$",
              "$0{,}65$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$1-0{,}35=0{,}65$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La réunion",
          "stepTheme": "La réunion",
          "stepBadge": "La réunion",
          "paragraphText": "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ : on retire ce qui est compté deux fois.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q5",
            "type": "mcq",
            "prompt": "Quels que soient les événements $A$ et $B$, que vaut $P(A\\cup B)$ ?",
            "options": [
              "$P(A)+P(B)$",
              "$P(A)\\times P(B)$",
              "$P(A)+P(B)-P(A\\cap B)$",
              "$P(A)-P(B)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'intersection est comptée dans $P(A)$ et dans $P(B)$ : on la retire une fois."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Calculer une réunion",
          "stepTheme": "Calculer une réunion",
          "stepBadge": "Calculer une réunion",
          "paragraphText": "$0{,}5+0{,}4-0{,}2=0{,}7$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q6",
            "type": "mcq",
            "prompt": "On sait que $P(A)=0{,}5$, $P(B)=0{,}4$ et $P(A\\cap B)=0{,}2$. Que vaut $P(A\\cup B)$ ?",
            "options": [
              "$0{,}9$",
              "$0{,}7$",
              "$0{,}2$",
              "$1{,}1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$P(A\\cup B)=0{,}5+0{,}4-0{,}2=0{,}7$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "propriete",
          "stepTitle": "Événements incompatibles",
          "stepTheme": "Événements incompatibles",
          "stepBadge": "Événements incompatibles",
          "paragraphText": "Si $A\\cap B=\\varnothing$, $P(A\\cup B)=P(A)+P(B)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q7",
            "type": "mcq",
            "prompt": "On lance un dé équilibré à $6$ faces. Les événements « obtenir 1 » et « obtenir 6 » sont incompatibles. Quelle est la probabilité d'obtenir 1 ou 6 ?",
            "options": [
              "$\\dfrac{1}{3}$",
              "$\\dfrac{1}{36}$",
              "$\\dfrac{1}{6}$",
              "$\\dfrac{1}{2}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{1}{6}+\\dfrac{1}{6}=\\dfrac{2}{6}=\\dfrac{1}{3}$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Compter toutes les issues",
          "stepTheme": "Compter toutes les issues",
          "stepBadge": "Compter toutes les issues",
          "paragraphText": "Le nombre de cas possibles est le nombre total de boules.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q8",
            "type": "mcq",
            "prompt": "Une urne contient $3$ boules rouges, $5$ bleues et $2$ vertes, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité qu'elle soit verte ?",
            "options": [
              "$\\dfrac{2}{8}$",
              "$\\dfrac{1}{3}$",
              "$\\dfrac{2}{5}$",
              "$\\dfrac{1}{5}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Il y a $10$ boules en tout : $\\dfrac{2}{10}=\\dfrac{1}{5}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q1",
          "type": "mcq",
          "prompt": "Lequel de ces nombres ne peut pas être une probabilité ?",
          "options": [
            "$0{,}3$",
            "$1$",
            "$1{,}2$",
            "$0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une probabilité ne dépasse jamais $1$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q2",
          "type": "mcq",
          "prompt": "On lance un dé équilibré à $6$ faces numérotées de $1$ à $6$. Quelle est la probabilité d'obtenir un nombre pair ?",
          "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{1}{3}$",
            "$\\dfrac{1}{6}$",
            "$\\dfrac{2}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3$ cas favorables ($2$, $4$, $6$) sur $6$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q3",
          "type": "mcq",
          "prompt": "Quelle est la relation entre la probabilité d'un événement $A$ et celle de son événement contraire $\\overline{A}$ ?",
          "options": [
            "$P(\\overline{A})=P(A)-1$",
            "$P(\\overline{A})=1-P(A)$",
            "$P(\\overline{A})=\\dfrac{1}{P(A)}$",
            "$P(\\overline{A})=-P(A)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$A$ et $\\overline{A}$ se partagent la probabilité totale $1$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q4",
          "type": "mcq",
          "prompt": "On sait que $P(A)=0{,}35$. Que vaut $P(\\overline{A})$ ?",
          "options": [
            "$0{,}35$",
            "$-0{,}35$",
            "$1{,}35$",
            "$0{,}65$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$1-0{,}35=0{,}65$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q5",
          "type": "mcq",
          "prompt": "Quels que soient les événements $A$ et $B$, que vaut $P(A\\cup B)$ ?",
          "options": [
            "$P(A)+P(B)$",
            "$P(A)\\times P(B)$",
            "$P(A)+P(B)-P(A\\cap B)$",
            "$P(A)-P(B)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'intersection est comptée dans $P(A)$ et dans $P(B)$ : on la retire une fois."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q6",
          "type": "mcq",
          "prompt": "On sait que $P(A)=0{,}5$, $P(B)=0{,}4$ et $P(A\\cap B)=0{,}2$. Que vaut $P(A\\cup B)$ ?",
          "options": [
            "$0{,}9$",
            "$0{,}7$",
            "$0{,}2$",
            "$1{,}1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$P(A\\cup B)=0{,}5+0{,}4-0{,}2=0{,}7$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q7",
          "type": "mcq",
          "prompt": "On lance un dé équilibré à $6$ faces. Les événements « obtenir 1 » et « obtenir 6 » sont incompatibles. Quelle est la probabilité d'obtenir 1 ou 6 ?",
          "options": [
            "$\\dfrac{1}{3}$",
            "$\\dfrac{1}{36}$",
            "$\\dfrac{1}{6}$",
            "$\\dfrac{1}{2}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{1}{6}+\\dfrac{1}{6}=\\dfrac{2}{6}=\\dfrac{1}{3}$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p01_q8",
          "type": "mcq",
          "prompt": "Une urne contient $3$ boules rouges, $5$ bleues et $2$ vertes, indiscernables au toucher. On tire une boule au hasard. Quelle est la probabilité qu'elle soit verte ?",
          "options": [
            "$\\dfrac{2}{8}$",
            "$\\dfrac{1}{3}$",
            "$\\dfrac{2}{5}$",
            "$\\dfrac{1}{5}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Il y a $10$ boules en tout : $\\dfrac{2}{10}=\\dfrac{1}{5}$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02",
      "order": 2,
      "title": "Probabilité conditionnelle et indépendance",
      "summary": "$P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$, l'arbre pondéré et les événements indépendants.",
      "conceptExplanation": "Probabilité de $B$ sachant $A$ (avec $P(A)\\neq0$) :\n$$P_A(B)=\\dfrac{P(A\\cap B)}{P(A)},\\quad\\text{d'où}\\quad P(A\\cap B)=P(A)\\times P_A(B).$$\n\nIndépendance : $A$ et $B$ sont indépendants si et seulement si $P(A\\cap B)=P(A)\\times P(B)$.\n\nExemple avec un arbre : dans une classe, $60\\,\\%$ des élèves sont des filles ($F$) ; $30\\,\\%$ des filles et $50\\,\\%$ des garçons font du sport ($S$).\n- $P_F(S)=0{,}3$ : c'est « parmi les filles ».\n- $P(F\\cap S)=0{,}6\\times0{,}3=0{,}18$.\n- $P(\\overline{F}\\cap S)=0{,}4\\times0{,}5=0{,}2$.\n- $P(S)=0{,}18+0{,}2=0{,}38$ (formule des probabilités totales).",
      "keyRule": "$P(A\\cap B)=P(A)\\times P_A(B)$ ; indépendants $\\iff P(A\\cap B)=P(A)\\times P(B)$.",
      "formulas": [
        {
          "name": "Conditionnelle",
          "formula": "P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}"
        },
        {
          "name": "Indépendance",
          "formula": "P(A\\cap B)=P(A)\\times P(B)"
        }
      ],
      "workedExample": {
        "title": "Utiliser un arbre",
        "statement": "$60\\,\\%$ de filles ; $30\\,\\%$ des filles et $50\\,\\%$ des garçons font du sport. Calcule $P(S)$.",
        "methodSteps": [
          "Branche filles : $0{,}6\\times0{,}3=0{,}18$.",
          "Branche garçons : $0{,}4\\times0{,}5=0{,}2$.",
          "On additionne les branches qui mènent à $S$."
        ],
        "conclusion": "$P(S)=0{,}38$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "$P_A(B)=\\dfrac{P(A\\cap B)}{P(A)}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule de la probabilité conditionnelle $P_A(B)$, probabilité de $B$ sachant $A$ ?",
            "options": [
              "$\\dfrac{P(A\\cap B)}{P(B)}$",
              "$\\dfrac{P(A\\cap B)}{P(A)}$",
              "$P(A)\\times P(B)$",
              "$\\dfrac{P(B)}{P(A)}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On divise par la probabilité de ce qu'on sait déjà : $A$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer P_A(B)",
          "stepTheme": "Calculer P_A(B)",
          "stepBadge": "Calculer P_A(B)",
          "paragraphText": "$P_A(B)=\\dfrac{0{,}1}{0{,}4}=0{,}25$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q2",
            "type": "mcq",
            "prompt": "On sait que $P(A)=0{,}4$ et $P(A\\cap B)=0{,}1$. Que vaut $P_A(B)$ ?",
            "options": [
              "$0{,}04$",
              "$0{,}5$",
              "$4$",
              "$0{,}25$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{0{,}1}{0{,}4}=\\dfrac{1}{4}=0{,}25$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Probabilité d'une intersection",
          "stepTheme": "Probabilité d'une intersection",
          "stepBadge": "Probabilité d'une intersection",
          "paragraphText": "$P(A\\cap B)=P(A)\\times P_A(B)$ : on multiplie le long d'une branche.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q3",
            "type": "mcq",
            "prompt": "On sait que $P(A)=0{,}6$ et $P_A(B)=0{,}5$. Que vaut $P(A\\cap B)$ ?",
            "options": [
              "$0{,}3$",
              "$1{,}1$",
              "$0{,}1$",
              "$1{,}2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$0{,}6\\times0{,}5=0{,}3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Indépendance",
          "stepTheme": "Indépendance",
          "stepBadge": "Indépendance",
          "paragraphText": "$A$ et $B$ sont indépendants si $P(A\\cap B)=P(A)\\times P(B)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q4",
            "type": "mcq",
            "prompt": "Deux événements $A$ et $B$ sont dits indépendants si et seulement si :",
            "options": [
              "$P(A\\cap B)=0$",
              "$P(A\\cup B)=1$",
              "$P(A\\cap B)=P(A)\\times P(B)$",
              "$P(A)=P(B)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "« $P(A\\cap B)=0$ » signifie incompatibles, ce n'est pas la même chose."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Vérifier l'indépendance",
          "stepTheme": "Vérifier l'indépendance",
          "stepBadge": "Vérifier l'indépendance",
          "paragraphText": "$0{,}5\\times0{,}4=0{,}2=P(A\\cap B)$ : indépendants.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q5",
            "type": "mcq",
            "prompt": "On sait que $P(A)=0{,}5$, $P(B)=0{,}4$ et $P(A\\cap B)=0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?",
            "options": [
              "Oui, car $P(A)\\times P(B)=0{,}2=P(A\\cap B)$",
              "Non, car $P(A\\cap B)\\neq0$",
              "Non, car $P(A)\\neq P(B)$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit des probabilités est égal à celle de l'intersection."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une branche de l'arbre",
          "stepTheme": "Une branche de l'arbre",
          "stepBadge": "Une branche de l'arbre",
          "paragraphText": "$P(F\\cap S)=P(F)\\times P_F(S)=0{,}6\\times0{,}3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q6",
            "type": "mcq",
            "prompt": "Dans une classe, $60\\,\\%$ des élèves sont des filles et $30\\,\\%$ des filles font du sport. On choisit un élève au hasard. Quelle est la probabilité que ce soit une fille qui fait du sport ?",
            "options": [
              "$0{,}9$",
              "$0{,}3$",
              "$0{,}5$",
              "$0{,}18$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$0{,}6\\times0{,}3=0{,}18$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Probabilités totales",
          "stepTheme": "Probabilités totales",
          "stepBadge": "Probabilités totales",
          "paragraphText": "$P(S)=P(F\\cap S)+P(\\overline{F}\\cap S)=0{,}18+0{,}4\\times0{,}5$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q7",
            "type": "mcq",
            "prompt": "Dans une classe, $60\\,\\%$ de filles dont $30\\,\\%$ font du sport, et $40\\,\\%$ de garçons dont $50\\,\\%$ font du sport. Quelle est la probabilité qu'un élève choisi au hasard fasse du sport ?",
            "options": [
              "$0{,}8$",
              "$0{,}38$",
              "$0{,}4$",
              "$0{,}2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$0{,}6\\times0{,}3+0{,}4\\times0{,}5=0{,}18+0{,}2=0{,}38$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "piege",
          "stepTitle": "Sachant quoi ?",
          "stepTheme": "Sachant quoi ?",
          "stepBadge": "Sachant quoi ?",
          "paragraphText": "« $30\\,\\%$ des filles font du sport » : on se place parmi les filles, c'est $P_F(S)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q8",
            "type": "mcq",
            "prompt": "Dans l'énoncé « $30\\,\\%$ des filles font du sport », la probabilité $0{,}3$ est-elle $P_F(S)$ ou $P_S(F)$ ?",
            "options": [
              "$P_S(F)$",
              "$P(F\\cap S)$",
              "$P_F(S)$",
              "$P(S)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On sait que l'élève est une fille : c'est la probabilité de $S$ sachant $F$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule de la probabilité conditionnelle $P_A(B)$, probabilité de $B$ sachant $A$ ?",
          "options": [
            "$\\dfrac{P(A\\cap B)}{P(B)}$",
            "$\\dfrac{P(A\\cap B)}{P(A)}$",
            "$P(A)\\times P(B)$",
            "$\\dfrac{P(B)}{P(A)}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On divise par la probabilité de ce qu'on sait déjà : $A$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q2",
          "type": "mcq",
          "prompt": "On sait que $P(A)=0{,}4$ et $P(A\\cap B)=0{,}1$. Que vaut $P_A(B)$ ?",
          "options": [
            "$0{,}04$",
            "$0{,}5$",
            "$4$",
            "$0{,}25$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{0{,}1}{0{,}4}=\\dfrac{1}{4}=0{,}25$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q3",
          "type": "mcq",
          "prompt": "On sait que $P(A)=0{,}6$ et $P_A(B)=0{,}5$. Que vaut $P(A\\cap B)$ ?",
          "options": [
            "$0{,}3$",
            "$1{,}1$",
            "$0{,}1$",
            "$1{,}2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$0{,}6\\times0{,}5=0{,}3$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q4",
          "type": "mcq",
          "prompt": "Deux événements $A$ et $B$ sont dits indépendants si et seulement si :",
          "options": [
            "$P(A\\cap B)=0$",
            "$P(A\\cup B)=1$",
            "$P(A\\cap B)=P(A)\\times P(B)$",
            "$P(A)=P(B)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "« $P(A\\cap B)=0$ » signifie incompatibles, ce n'est pas la même chose."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q5",
          "type": "mcq",
          "prompt": "On sait que $P(A)=0{,}5$, $P(B)=0{,}4$ et $P(A\\cap B)=0{,}2$. Les événements $A$ et $B$ sont-ils indépendants ?",
          "options": [
            "Oui, car $P(A)\\times P(B)=0{,}2=P(A\\cap B)$",
            "Non, car $P(A\\cap B)\\neq0$",
            "Non, car $P(A)\\neq P(B)$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit des probabilités est égal à celle de l'intersection."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q6",
          "type": "mcq",
          "prompt": "Dans une classe, $60\\,\\%$ des élèves sont des filles et $30\\,\\%$ des filles font du sport. On choisit un élève au hasard. Quelle est la probabilité que ce soit une fille qui fait du sport ?",
          "options": [
            "$0{,}9$",
            "$0{,}3$",
            "$0{,}5$",
            "$0{,}18$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$0{,}6\\times0{,}3=0{,}18$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q7",
          "type": "mcq",
          "prompt": "Dans une classe, $60\\,\\%$ de filles dont $30\\,\\%$ font du sport, et $40\\,\\%$ de garçons dont $50\\,\\%$ font du sport. Quelle est la probabilité qu'un élève choisi au hasard fasse du sport ?",
          "options": [
            "$0{,}8$",
            "$0{,}38$",
            "$0{,}4$",
            "$0{,}2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$0{,}6\\times0{,}3+0{,}4\\times0{,}5=0{,}18+0{,}2=0{,}38$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p02_q8",
          "type": "mcq",
          "prompt": "Dans l'énoncé « $30\\,\\%$ des filles font du sport », la probabilité $0{,}3$ est-elle $P_F(S)$ ou $P_S(F)$ ?",
          "options": [
            "$P_S(F)$",
            "$P(F\\cap S)$",
            "$P_F(S)$",
            "$P(S)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On sait que l'élève est une fille : c'est la probabilité de $S$ sachant $F$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03",
      "order": 3,
      "title": "Statistiques à deux variables : point moyen et droite de Mayer",
      "summary": "Point moyen $G$, points moyens $G_1$ et $G_2$, équation de la droite de Mayer et estimation.",
      "conceptExplanation": "Série statistique double $(x_i;y_i)$ de $n$ points.\n\nPoint moyen : $G(\\overline{X};\\overline{Y})$ avec $\\overline{X}=\\dfrac{x_1+\\dots+x_n}{n}$ et $\\overline{Y}=\\dfrac{y_1+\\dots+y_n}{n}$. La droite d'ajustement passe toujours par $G$.\n\nMéthode de Mayer :\n1. On partage la série (rangée dans l'ordre des $x_i$) en deux groupes de même taille, ou presque.\n2. On calcule le point moyen $G_1$ du premier groupe et le point moyen $G_2$ du second.\n3. La droite de Mayer est la droite $(G_1G_2)$ d'équation $y=ax+b$ avec $a=\\dfrac{\\overline{Y_2}-\\overline{Y_1}}{\\overline{X_2}-\\overline{X_1}}$ et $b=\\overline{Y_1}-a\\overline{X_1}$.\n\nExemple : rang de l'année $x$ : $1,2,3,4,5,6$ ; chiffre d'affaires $y$ (en millions de F) : $4,5,6,10,11,12$.\n- $G(3{,}5;8)$ ;\n- $G_1(2;5)$ et $G_2(5;11)$ ;\n- $a=\\dfrac{11-5}{5-2}=2$ et $b=5-2\\times2=1$ : $y=2x+1$ ;\n- estimation pour $x=8$ : $y=2\\times8+1=17$ millions de F.",
      "keyRule": "Mayer : deux groupes, points moyens $G_1$ et $G_2$, droite $(G_1G_2)$ ; elle passe aussi par $G$.",
      "formulas": [
        {
          "name": "Pente",
          "formula": "a=\\dfrac{\\overline{Y_2}-\\overline{Y_1}}{\\overline{X_2}-\\overline{X_1}}"
        },
        {
          "name": "Ordonnée à l'origine",
          "formula": "b=\\overline{Y_1}-a\\overline{X_1}"
        }
      ],
      "workedExample": {
        "title": "Droite de Mayer",
        "statement": "$x$ : $1,2,3,4,5,6$ ; $y$ : $4,5,6,10,11,12$.",
        "methodSteps": [
          "Groupe 1 : $G_1\\left(\\dfrac{1+2+3}{3};\\dfrac{4+5+6}{3}\\right)=(2;5)$.",
          "Groupe 2 : $G_2\\left(\\dfrac{4+5+6}{3};\\dfrac{10+11+12}{3}\\right)=(5;11)$.",
          "$a=\\dfrac{11-5}{5-2}=2$ ; $b=5-2\\times2=1$."
        ],
        "conclusion": "Droite de Mayer : $y=2x+1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le point moyen",
          "stepTheme": "Le point moyen",
          "stepBadge": "Le point moyen",
          "paragraphText": "$G(\\overline{X};\\overline{Y})$ : moyenne des $x_i$ et moyenne des $y_i$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q1",
            "type": "mcq",
            "prompt": "En statistique à deux variables, quelles sont les coordonnées du point moyen $G$ du nuage de points ?",
            "options": [
              "$G(x_1;y_1)$",
              "$G(\\overline{X};\\overline{Y})$",
              "$G(V(X);V(Y))$",
              "$G(0;0)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ses coordonnées sont les moyennes des deux variables."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer la moyenne des x",
          "stepTheme": "Calculer la moyenne des x",
          "stepBadge": "Calculer la moyenne des x",
          "paragraphText": "$\\overline{X}=\\dfrac{1+2+3+4+5+6}{6}=\\dfrac{21}{6}=3{,}5$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q2",
            "type": "mcq",
            "prompt": "Une série double a pour valeurs de $x$ : $1$, $2$, $3$, $4$, $5$, $6$. Que vaut $\\overline{X}$ ?",
            "options": [
              "$3$",
              "$21$",
              "$3{,}5$",
              "$4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{21}{6}=3{,}5$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Calculer la moyenne des y",
          "stepTheme": "Calculer la moyenne des y",
          "stepBadge": "Calculer la moyenne des y",
          "paragraphText": "$\\overline{Y}=\\dfrac{4+5+6+10+11+12}{6}=\\dfrac{48}{6}=8$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q3",
            "type": "mcq",
            "prompt": "Une série double a pour valeurs de $y$ : $4$, $5$, $6$, $10$, $11$, $12$. Que vaut $\\overline{Y}$ ?",
            "options": [
              "$8$",
              "$7{,}5$",
              "$48$",
              "$9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La somme vaut $48$, divisée par $6$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "La droite de Mayer",
          "stepTheme": "La droite de Mayer",
          "stepBadge": "La droite de Mayer",
          "paragraphText": "Elle passe par les points moyens $G_1$ et $G_2$ des deux sous-séries.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q4",
            "type": "mcq",
            "prompt": "Dans la méthode d'ajustement de Mayer, par quels points passe la droite de Mayer ?",
            "options": [
              "Par l'origine du repère et le dernier point",
              "Uniquement par le premier et le dernier point du tableau",
              "Par tous les points du nuage",
              "Par les points moyens $G_1$ et $G_2$ des deux sous-séries"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On partage la série en deux groupes et on relie leurs points moyens."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le point G₁",
          "stepTheme": "Le point G₁",
          "stepBadge": "Le point G₁",
          "paragraphText": "Premier groupe : $x$ : $1,2,3$ et $y$ : $4,5,6$, donc $G_1(2;5)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q5",
            "type": "mcq",
            "prompt": "Série : $x$ : $1,2,3,4,5,6$ et $y$ : $4,5,6,10,11,12$. Le premier groupe est formé des trois premiers points. Quelles sont les coordonnées de $G_1$ ?",
            "options": [
              "$(2;5)$",
              "$(3;6)$",
              "$(5;11)$",
              "$(2;6)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{1+2+3}{3}=2$ et $\\dfrac{4+5+6}{3}=5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le point G₂",
          "stepTheme": "Le point G₂",
          "stepBadge": "Le point G₂",
          "paragraphText": "Second groupe : $x$ : $4,5,6$ et $y$ : $10,11,12$, donc $G_2(5;11)$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q6",
            "type": "mcq",
            "prompt": "Série : $x$ : $1,2,3,4,5,6$ et $y$ : $4,5,6,10,11,12$. Le second groupe est formé des trois derniers points. Quelles sont les coordonnées de $G_2$ ?",
            "options": [
              "$(4;10)$",
              "$(5;10)$",
              "$(5;11)$",
              "$(6;12)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{4+5+6}{3}=5$ et $\\dfrac{10+11+12}{3}=11$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "L'équation de la droite",
          "stepTheme": "L'équation de la droite",
          "stepBadge": "L'équation de la droite",
          "paragraphText": "$a=\\dfrac{11-5}{5-2}=2$ et $b=5-2\\times2=1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q7",
            "type": "mcq",
            "prompt": "La droite de Mayer passe par $G_1(2;5)$ et $G_2(5;11)$. Quelle est son équation ?",
            "options": [
              "$y=2x+5$",
              "$y=2x+1$",
              "$y=6x-7$",
              "$y=3x-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Pente $\\dfrac{6}{3}=2$, puis $b=5-4=1$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Faire une estimation",
          "stepTheme": "Faire une estimation",
          "stepBadge": "Faire une estimation",
          "paragraphText": "On remplace $x$ par $8$ dans $y=2x+1$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q8",
            "type": "mcq",
            "prompt": "La droite de Mayer d'un chiffre d'affaires $y$ (en millions de F) en fonction du rang $x$ de l'année est $y=2x+1$. Quelle estimation obtient-on pour l'année de rang $8$ ?",
            "options": [
              "$16$ millions de F",
              "$9$ millions de F",
              "$15$ millions de F",
              "$17$ millions de F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2\\times8+1=17$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q1",
          "type": "mcq",
          "prompt": "En statistique à deux variables, quelles sont les coordonnées du point moyen $G$ du nuage de points ?",
          "options": [
            "$G(x_1;y_1)$",
            "$G(\\overline{X};\\overline{Y})$",
            "$G(V(X);V(Y))$",
            "$G(0;0)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ses coordonnées sont les moyennes des deux variables."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q2",
          "type": "mcq",
          "prompt": "Une série double a pour valeurs de $x$ : $1$, $2$, $3$, $4$, $5$, $6$. Que vaut $\\overline{X}$ ?",
          "options": [
            "$3$",
            "$21$",
            "$3{,}5$",
            "$4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{21}{6}=3{,}5$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q3",
          "type": "mcq",
          "prompt": "Une série double a pour valeurs de $y$ : $4$, $5$, $6$, $10$, $11$, $12$. Que vaut $\\overline{Y}$ ?",
          "options": [
            "$8$",
            "$7{,}5$",
            "$48$",
            "$9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme vaut $48$, divisée par $6$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q4",
          "type": "mcq",
          "prompt": "Dans la méthode d'ajustement de Mayer, par quels points passe la droite de Mayer ?",
          "options": [
            "Par l'origine du repère et le dernier point",
            "Uniquement par le premier et le dernier point du tableau",
            "Par tous les points du nuage",
            "Par les points moyens $G_1$ et $G_2$ des deux sous-séries"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On partage la série en deux groupes et on relie leurs points moyens."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q5",
          "type": "mcq",
          "prompt": "Série : $x$ : $1,2,3,4,5,6$ et $y$ : $4,5,6,10,11,12$. Le premier groupe est formé des trois premiers points. Quelles sont les coordonnées de $G_1$ ?",
          "options": [
            "$(2;5)$",
            "$(3;6)$",
            "$(5;11)$",
            "$(2;6)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{1+2+3}{3}=2$ et $\\dfrac{4+5+6}{3}=5$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q6",
          "type": "mcq",
          "prompt": "Série : $x$ : $1,2,3,4,5,6$ et $y$ : $4,5,6,10,11,12$. Le second groupe est formé des trois derniers points. Quelles sont les coordonnées de $G_2$ ?",
          "options": [
            "$(4;10)$",
            "$(5;10)$",
            "$(5;11)$",
            "$(6;12)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{4+5+6}{3}=5$ et $\\dfrac{10+11+12}{3}=11$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q7",
          "type": "mcq",
          "prompt": "La droite de Mayer passe par $G_1(2;5)$ et $G_2(5;11)$. Quelle est son équation ?",
          "options": [
            "$y=2x+5$",
            "$y=2x+1$",
            "$y=6x-7$",
            "$y=3x-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Pente $\\dfrac{6}{3}=2$, puis $b=5-4=1$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p03_q8",
          "type": "mcq",
          "prompt": "La droite de Mayer d'un chiffre d'affaires $y$ (en millions de F) en fonction du rang $x$ de l'année est $y=2x+1$. Quelle estimation obtient-on pour l'année de rang $8$ ?",
          "options": [
            "$16$ millions de F",
            "$9$ millions de F",
            "$15$ millions de F",
            "$17$ millions de F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2\\times8+1=17$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04",
      "order": 4,
      "title": "Covariance et droite des moindres carrés",
      "summary": "Variance, covariance et droite de régression de $y$ en $x$.",
      "conceptExplanation": "Pour une série double de $n$ points :\n- variance de $X$ : $V(X)=\\dfrac{1}{n}\\sum x_i^2-\\overline{X}^2$ ;\n- covariance : $\\text{Cov}(X,Y)=\\dfrac{1}{n}\\sum x_iy_i-\\overline{X}\\,\\overline{Y}$ ;\n- droite de régression de $y$ en $x$ (moindres carrés) : $y=ax+b$ avec $a=\\dfrac{\\text{Cov}(X,Y)}{V(X)}$ et $b=\\overline{Y}-a\\overline{X}$.\n\nExemple : $x$ : $1,2,3,4,5$ ; $y$ : $2,4,5,4,5$.\n- $\\overline{X}=3$ et $\\overline{Y}=\\dfrac{20}{5}=4$ ;\n- $\\sum x_i^2=55$, donc $V(X)=\\dfrac{55}{5}-9=2$ ;\n- $\\sum x_iy_i=2+8+15+16+25=66$, donc $\\text{Cov}(X,Y)=\\dfrac{66}{5}-3\\times4=1{,}2$ ;\n- $a=\\dfrac{1{,}2}{2}=0{,}6$ et $b=4-0{,}6\\times3=2{,}2$ : $y=0{,}6x+2{,}2$.",
      "keyRule": "$a=\\dfrac{\\text{Cov}(X,Y)}{V(X)}$ et $b=\\overline{Y}-a\\overline{X}$ : la droite passe par $G$.",
      "formulas": [
        {
          "name": "Covariance",
          "formula": "\\text{Cov}(X,Y)=\\dfrac{1}{n}\\sum x_iy_i-\\overline{X}\\,\\overline{Y}"
        },
        {
          "name": "Pente",
          "formula": "a=\\dfrac{\\text{Cov}(X,Y)}{V(X)}"
        }
      ],
      "workedExample": {
        "title": "Droite des moindres carrés",
        "statement": "$x$ : $1,2,3,4,5$ ; $y$ : $2,4,5,4,5$.",
        "methodSteps": [
          "$\\overline{X}=3$, $\\overline{Y}=4$.",
          "$V(X)=\\dfrac{55}{5}-9=2$ ; $\\text{Cov}(X,Y)=\\dfrac{66}{5}-12=1{,}2$.",
          "$a=0{,}6$ ; $b=4-0{,}6\\times3=2{,}2$."
        ],
        "conclusion": "$y=0{,}6x+2{,}2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La covariance",
          "stepTheme": "La covariance",
          "stepBadge": "La covariance",
          "paragraphText": "$\\text{Cov}(X,Y)=\\dfrac{1}{n}\\sum x_iy_i-\\overline{X}\\,\\overline{Y}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule de la covariance $\\text{Cov}(X,Y)$ d'une série statistique double de $n$ points ?",
            "options": [
              "$\\dfrac{1}{n}\\sum(x_i+y_i)-\\overline{X}\\,\\overline{Y}$",
              "$\\dfrac{1}{n}\\sum x_iy_i-\\overline{X}\\,\\overline{Y}$",
              "$V(X)\\times V(Y)$",
              "$\\overline{X}\\times\\overline{Y}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Moyenne des produits moins produit des moyennes."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La variance",
          "stepTheme": "La variance",
          "stepBadge": "La variance",
          "paragraphText": "$V(X)=\\dfrac{1}{n}\\sum x_i^2-\\overline{X}^2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la formule de la variance $V(X)$ d'une série de $n$ valeurs $x_i$ ?",
            "options": [
              "$\\dfrac{1}{n}\\sum x_i-\\overline{X}$",
              "$\\dfrac{1}{n}\\sum x_i^2+\\overline{X}^2$",
              "$\\dfrac{1}{n}\\sum x_i^2-\\overline{X}^2$",
              "$\\sum x_i^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Moyenne des carrés moins carré de la moyenne."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La moyenne des y",
          "stepTheme": "La moyenne des y",
          "stepBadge": "La moyenne des y",
          "paragraphText": "$\\overline{Y}=\\dfrac{2+4+5+4+5}{5}=4$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q3",
            "type": "mcq",
            "prompt": "Une série double a pour valeurs de $y$ : $2$, $4$, $5$, $4$, $5$. Que vaut $\\overline{Y}$ ?",
            "options": [
              "$4$",
              "$5$",
              "$20$",
              "$3{,}5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La somme vaut $20$, divisée par $5$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Calculer V(X)",
          "stepTheme": "Calculer V(X)",
          "stepBadge": "Calculer V(X)",
          "paragraphText": "$V(X)=\\dfrac{55}{5}-3^2=11-9=2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q4",
            "type": "mcq",
            "prompt": "Pour $x$ : $1,2,3,4,5$, on a $\\sum x_i^2=55$ et $\\overline{X}=3$. Que vaut $V(X)$ ?",
            "options": [
              "$11$",
              "$8$",
              "$55$",
              "$2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{55}{5}-9=2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Calculer la covariance",
          "stepTheme": "Calculer la covariance",
          "stepBadge": "Calculer la covariance",
          "paragraphText": "$\\text{Cov}(X,Y)=\\dfrac{66}{5}-3\\times4=13{,}2-12=1{,}2$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q5",
            "type": "mcq",
            "prompt": "Pour $x$ : $1,2,3,4,5$ et $y$ : $2,4,5,4,5$, on a $\\sum x_iy_i=66$, $\\overline{X}=3$ et $\\overline{Y}=4$. Que vaut $\\text{Cov}(X,Y)$ ?",
            "options": [
              "$13{,}2$",
              "$1{,}2$",
              "$54$",
              "$0{,}6$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$13{,}2-12=1{,}2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La pente a",
          "stepTheme": "La pente a",
          "stepBadge": "La pente a",
          "paragraphText": "$a=\\dfrac{\\text{Cov}(X,Y)}{V(X)}=\\dfrac{1{,}2}{2}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q6",
            "type": "mcq",
            "prompt": "On a $\\text{Cov}(X,Y)=1{,}2$ et $V(X)=2$. Quel est le coefficient directeur $a$ de la droite de régression de $y$ en $x$ ?",
            "options": [
              "$2{,}4$",
              "$1{,}67$",
              "$0{,}6$",
              "$3{,}2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{1{,}2}{2}=0{,}6$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "L'ordonnée à l'origine b",
          "stepTheme": "L'ordonnée à l'origine b",
          "stepBadge": "L'ordonnée à l'origine b",
          "paragraphText": "$b=\\overline{Y}-a\\overline{X}=4-0{,}6\\times3$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q7",
            "type": "mcq",
            "prompt": "La droite de régression a pour pente $a=0{,}6$, avec $\\overline{X}=3$ et $\\overline{Y}=4$. Que vaut $b=\\overline{Y}-a\\overline{X}$ ?",
            "options": [
              "$2{,}2$",
              "$1{,}8$",
              "$4{,}6$",
              "$3{,}4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$4-1{,}8=2{,}2$."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Estimer une valeur",
          "stepTheme": "Estimer une valeur",
          "stepBadge": "Estimer une valeur",
          "paragraphText": "$y=0{,}6\\times7+2{,}2=6{,}4$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q8",
            "type": "mcq",
            "prompt": "La droite de régression de $y$ en $x$ a pour équation $y=0{,}6x+2{,}2$. Quelle estimation de $y$ obtient-on pour $x=7$ ?",
            "options": [
              "$6{,}2$",
              "$9{,}2$",
              "$4{,}2$",
              "$6{,}4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$4{,}2+2{,}2=6{,}4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule de la covariance $\\text{Cov}(X,Y)$ d'une série statistique double de $n$ points ?",
          "options": [
            "$\\dfrac{1}{n}\\sum(x_i+y_i)-\\overline{X}\\,\\overline{Y}$",
            "$\\dfrac{1}{n}\\sum x_iy_i-\\overline{X}\\,\\overline{Y}$",
            "$V(X)\\times V(Y)$",
            "$\\overline{X}\\times\\overline{Y}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Moyenne des produits moins produit des moyennes."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la formule de la variance $V(X)$ d'une série de $n$ valeurs $x_i$ ?",
          "options": [
            "$\\dfrac{1}{n}\\sum x_i-\\overline{X}$",
            "$\\dfrac{1}{n}\\sum x_i^2+\\overline{X}^2$",
            "$\\dfrac{1}{n}\\sum x_i^2-\\overline{X}^2$",
            "$\\sum x_i^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Moyenne des carrés moins carré de la moyenne."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q3",
          "type": "mcq",
          "prompt": "Une série double a pour valeurs de $y$ : $2$, $4$, $5$, $4$, $5$. Que vaut $\\overline{Y}$ ?",
          "options": [
            "$4$",
            "$5$",
            "$20$",
            "$3{,}5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La somme vaut $20$, divisée par $5$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q4",
          "type": "mcq",
          "prompt": "Pour $x$ : $1,2,3,4,5$, on a $\\sum x_i^2=55$ et $\\overline{X}=3$. Que vaut $V(X)$ ?",
          "options": [
            "$11$",
            "$8$",
            "$55$",
            "$2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{55}{5}-9=2$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q5",
          "type": "mcq",
          "prompt": "Pour $x$ : $1,2,3,4,5$ et $y$ : $2,4,5,4,5$, on a $\\sum x_iy_i=66$, $\\overline{X}=3$ et $\\overline{Y}=4$. Que vaut $\\text{Cov}(X,Y)$ ?",
          "options": [
            "$13{,}2$",
            "$1{,}2$",
            "$54$",
            "$0{,}6$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$13{,}2-12=1{,}2$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q6",
          "type": "mcq",
          "prompt": "On a $\\text{Cov}(X,Y)=1{,}2$ et $V(X)=2$. Quel est le coefficient directeur $a$ de la droite de régression de $y$ en $x$ ?",
          "options": [
            "$2{,}4$",
            "$1{,}67$",
            "$0{,}6$",
            "$3{,}2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{1{,}2}{2}=0{,}6$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q7",
          "type": "mcq",
          "prompt": "La droite de régression a pour pente $a=0{,}6$, avec $\\overline{X}=3$ et $\\overline{Y}=4$. Que vaut $b=\\overline{Y}-a\\overline{X}$ ?",
          "options": [
            "$2{,}2$",
            "$1{,}8$",
            "$4{,}6$",
            "$3{,}4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$4-1{,}8=2{,}2$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p04_q8",
          "type": "mcq",
          "prompt": "La droite de régression de $y$ en $x$ a pour équation $y=0{,}6x+2{,}2$. Quelle estimation de $y$ obtient-on pour $x=7$ ?",
          "options": [
            "$6{,}2$",
            "$9{,}2$",
            "$4{,}2$",
            "$6{,}4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$4{,}2+2{,}2=6{,}4$."
        }
      ]
    },
    {
      "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05",
      "order": 5,
      "title": "Exercice type BAC : tirages et ajustement",
      "summary": "Deux tirages sans remise, puis l'usage d'une droite d'ajustement.",
      "conceptExplanation": "Partie A. Une urne contient $4$ boules rouges et $6$ boules noires, indiscernables au toucher. On tire successivement deux boules, sans remise.\n- $P(R_1)=\\dfrac{4}{10}=\\dfrac{2}{5}$.\n- Après une rouge, il reste $3$ rouges sur $9$ : $P_{R_1}(R_2)=\\dfrac{3}{9}=\\dfrac{1}{3}$.\n- $P(R_1\\cap R_2)=\\dfrac{2}{5}\\times\\dfrac{1}{3}=\\dfrac{2}{15}$.\n- $P(N_1\\cap N_2)=\\dfrac{6}{10}\\times\\dfrac{5}{9}=\\dfrac{1}{3}=\\dfrac{5}{15}$.\n- Deux boules de même couleur : $\\dfrac{2}{15}+\\dfrac{5}{15}=\\dfrac{7}{15}$.\n- Deux couleurs différentes (événement contraire) : $1-\\dfrac{7}{15}=\\dfrac{8}{15}$.\n\nPartie B. La droite d'ajustement $y=ax+b$ sert à faire des estimations (des prévisions). Avec $y=0{,}6x+2{,}2$ : pour obtenir $y=7$, on résout $0{,}6x+2{,}2=7$, soit $0{,}6x=4{,}8$ et $x=8$.",
      "keyRule": "Sans remise, la composition de l'urne change au 2e tirage. Une droite d'ajustement sert à estimer.",
      "formulas": [],
      "workedExample": {
        "title": "Deux boules de même couleur",
        "statement": "Urne : $4$ rouges, $6$ noires ; deux tirages sans remise.",
        "methodSteps": [
          "$P(R_1\\cap R_2)=\\dfrac{4}{10}\\times\\dfrac{3}{9}=\\dfrac{2}{15}$.",
          "$P(N_1\\cap N_2)=\\dfrac{6}{10}\\times\\dfrac{5}{9}=\\dfrac{5}{15}$.",
          "On additionne : événements incompatibles."
        ],
        "conclusion": "$P(\\text{même couleur})=\\dfrac{7}{15}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Premier tirage",
          "stepTheme": "Premier tirage",
          "stepBadge": "Premier tirage",
          "paragraphText": "$P(R_1)=\\dfrac{4}{10}=\\dfrac{2}{5}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q1",
            "type": "mcq",
            "prompt": "Une urne contient $4$ boules rouges et $6$ boules noires. On tire une première boule au hasard. Quelle est la probabilité qu'elle soit rouge ?",
            "options": [
              "$\\dfrac{4}{6}$",
              "$\\dfrac{2}{5}$",
              "$\\dfrac{1}{4}$",
              "$\\dfrac{3}{5}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$4$ rouges sur $10$ boules."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Sans remise",
          "stepTheme": "Sans remise",
          "stepBadge": "Sans remise",
          "paragraphText": "Après avoir tiré une rouge, il reste $3$ rouges sur $9$ boules.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q2",
            "type": "mcq",
            "prompt": "Une urne contient $4$ rouges et $6$ noires. On tire deux boules successivement, sans remise. Sachant que la première est rouge, quelle est la probabilité que la deuxième soit rouge ?",
            "options": [
              "$\\dfrac{4}{10}$",
              "$\\dfrac{4}{9}$",
              "$\\dfrac{3}{9}=\\dfrac{1}{3}$",
              "$\\dfrac{3}{10}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sans remise, l'urne n'a plus que $9$ boules, dont $3$ rouges."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Deux rouges",
          "stepTheme": "Deux rouges",
          "stepBadge": "Deux rouges",
          "paragraphText": "$P(R_1\\cap R_2)=P(R_1)\\times P_{R_1}(R_2)=\\dfrac{2}{5}\\times\\dfrac{1}{3}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q3",
            "type": "mcq",
            "prompt": "Urne de $4$ rouges et $6$ noires, deux tirages sans remise. On a $P(R_1)=\\dfrac{2}{5}$ et $P_{R_1}(R_2)=\\dfrac{1}{3}$. Que vaut $P(R_1\\cap R_2)$ ?",
            "options": [
              "$\\dfrac{2}{15}$",
              "$\\dfrac{11}{15}$",
              "$\\dfrac{4}{25}$",
              "$\\dfrac{1}{5}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{2}{5}\\times\\dfrac{1}{3}=\\dfrac{2}{15}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Deux noires",
          "stepTheme": "Deux noires",
          "stepBadge": "Deux noires",
          "paragraphText": "$P(N_1\\cap N_2)=\\dfrac{6}{10}\\times\\dfrac{5}{9}=\\dfrac{30}{90}=\\dfrac{1}{3}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q4",
            "type": "mcq",
            "prompt": "Urne de $4$ rouges et $6$ noires, deux tirages sans remise. Quelle est la probabilité de tirer deux boules noires ?",
            "options": [
              "$\\dfrac{9}{25}$",
              "$\\dfrac{3}{5}$",
              "$\\dfrac{1}{2}$",
              "$\\dfrac{1}{3}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{6}{10}\\times\\dfrac{5}{9}=\\dfrac{1}{3}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Même couleur",
          "stepTheme": "Même couleur",
          "stepBadge": "Même couleur",
          "paragraphText": "$\\dfrac{2}{15}+\\dfrac{5}{15}=\\dfrac{7}{15}$ (deux rouges ou deux noires).",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q5",
            "type": "mcq",
            "prompt": "Avec $P(R_1\\cap R_2)=\\dfrac{2}{15}$ et $P(N_1\\cap N_2)=\\dfrac{1}{3}=\\dfrac{5}{15}$, quelle est la probabilité de tirer deux boules de la même couleur ?",
            "options": [
              "$\\dfrac{2}{45}$",
              "$\\dfrac{7}{15}$",
              "$\\dfrac{3}{15}$",
              "$\\dfrac{8}{15}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les deux cas sont incompatibles : on additionne."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Couleurs différentes",
          "stepTheme": "Couleurs différentes",
          "stepBadge": "Couleurs différentes",
          "paragraphText": "C'est l'événement contraire de « même couleur » : $1-\\dfrac{7}{15}=\\dfrac{8}{15}$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q6",
            "type": "mcq",
            "prompt": "La probabilité de tirer deux boules de la même couleur vaut $\\dfrac{7}{15}$. Quelle est la probabilité de tirer deux boules de couleurs différentes ?",
            "options": [
              "$\\dfrac{7}{15}$",
              "$\\dfrac{1}{15}$",
              "$\\dfrac{8}{15}$",
              "$\\dfrac{14}{15}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On utilise l'événement contraire."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "À quoi sert la droite",
          "stepTheme": "À quoi sert la droite",
          "stepBadge": "À quoi sert la droite",
          "paragraphText": "La droite d'ajustement sert à faire des estimations pour d'autres valeurs.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q7",
            "type": "mcq",
            "prompt": "À quoi sert l'équation de la droite d'ajustement $y=ax+b$ dans un sujet de BAC ?",
            "options": [
              "À calculer des dérivées",
              "À faire des estimations (prévisions) pour d'autres valeurs de $x$ ou de $y$",
              "À trouver les asymptotes",
              "À calculer le discriminant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On l'utilise pour prévoir une valeur de $y$ connaissant $x$, ou l'inverse."
          }
        },
        {
          "stepNumber": 8,
          "stepKind": "exemple",
          "stepTitle": "Estimer x à partir de y",
          "stepTheme": "Estimer x à partir de y",
          "stepBadge": "Estimer x à partir de y",
          "paragraphText": "On résout $0{,}6x+2{,}2=7$ : $0{,}6x=4{,}8$, $x=8$.",
          "exercise": {
            "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q8",
            "type": "mcq",
            "prompt": "La droite d'ajustement d'une série a pour équation $y=0{,}6x+2{,}2$. Pour quelle valeur de $x$ peut-on estimer que $y=7$ ?",
            "options": [
              "$x=6{,}4$",
              "$x=12$",
              "$x=4{,}8$",
              "$x=8$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x=\\dfrac{4{,}8}{0{,}6}=8$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q1",
          "type": "mcq",
          "prompt": "Une urne contient $4$ boules rouges et $6$ boules noires. On tire une première boule au hasard. Quelle est la probabilité qu'elle soit rouge ?",
          "options": [
            "$\\dfrac{4}{6}$",
            "$\\dfrac{2}{5}$",
            "$\\dfrac{1}{4}$",
            "$\\dfrac{3}{5}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$4$ rouges sur $10$ boules."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q2",
          "type": "mcq",
          "prompt": "Une urne contient $4$ rouges et $6$ noires. On tire deux boules successivement, sans remise. Sachant que la première est rouge, quelle est la probabilité que la deuxième soit rouge ?",
          "options": [
            "$\\dfrac{4}{10}$",
            "$\\dfrac{4}{9}$",
            "$\\dfrac{3}{9}=\\dfrac{1}{3}$",
            "$\\dfrac{3}{10}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sans remise, l'urne n'a plus que $9$ boules, dont $3$ rouges."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q3",
          "type": "mcq",
          "prompt": "Urne de $4$ rouges et $6$ noires, deux tirages sans remise. On a $P(R_1)=\\dfrac{2}{5}$ et $P_{R_1}(R_2)=\\dfrac{1}{3}$. Que vaut $P(R_1\\cap R_2)$ ?",
          "options": [
            "$\\dfrac{2}{15}$",
            "$\\dfrac{11}{15}$",
            "$\\dfrac{4}{25}$",
            "$\\dfrac{1}{5}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{2}{5}\\times\\dfrac{1}{3}=\\dfrac{2}{15}$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q4",
          "type": "mcq",
          "prompt": "Urne de $4$ rouges et $6$ noires, deux tirages sans remise. Quelle est la probabilité de tirer deux boules noires ?",
          "options": [
            "$\\dfrac{9}{25}$",
            "$\\dfrac{3}{5}$",
            "$\\dfrac{1}{2}$",
            "$\\dfrac{1}{3}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{6}{10}\\times\\dfrac{5}{9}=\\dfrac{1}{3}$."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q5",
          "type": "mcq",
          "prompt": "Avec $P(R_1\\cap R_2)=\\dfrac{2}{15}$ et $P(N_1\\cap N_2)=\\dfrac{1}{3}=\\dfrac{5}{15}$, quelle est la probabilité de tirer deux boules de la même couleur ?",
          "options": [
            "$\\dfrac{2}{45}$",
            "$\\dfrac{7}{15}$",
            "$\\dfrac{3}{15}$",
            "$\\dfrac{8}{15}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les deux cas sont incompatibles : on additionne."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q6",
          "type": "mcq",
          "prompt": "La probabilité de tirer deux boules de la même couleur vaut $\\dfrac{7}{15}$. Quelle est la probabilité de tirer deux boules de couleurs différentes ?",
          "options": [
            "$\\dfrac{7}{15}$",
            "$\\dfrac{1}{15}$",
            "$\\dfrac{8}{15}$",
            "$\\dfrac{14}{15}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On utilise l'événement contraire."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q7",
          "type": "mcq",
          "prompt": "À quoi sert l'équation de la droite d'ajustement $y=ax+b$ dans un sujet de BAC ?",
          "options": [
            "À calculer des dérivées",
            "À faire des estimations (prévisions) pour d'autres valeurs de $x$ ou de $y$",
            "À trouver les asymptotes",
            "À calculer le discriminant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On l'utilise pour prévoir une valeur de $y$ connaissant $x$, ou l'inverse."
        },
        {
          "id": "terminale_a_maths_numerique_l06_probabilites_statistiques_p05_q8",
          "type": "mcq",
          "prompt": "La droite d'ajustement d'une série a pour équation $y=0{,}6x+2{,}2$. Pour quelle valeur de $x$ peut-on estimer que $y=7$ ?",
          "options": [
            "$x=6{,}4$",
            "$x=12$",
            "$x=4{,}8$",
            "$x=8$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x=\\dfrac{4{,}8}{0{,}6}=8$."
        }
      ]
    }
  ]
};
