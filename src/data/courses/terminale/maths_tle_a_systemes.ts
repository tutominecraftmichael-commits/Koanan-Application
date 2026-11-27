import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « LEÇON 7 : SYSTEMES LINEAIRES DANS ℝ × ℝ » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1611
export const MATHS_TLE_A_L07_SYSTEMES: CurriculumChapter = {
  "id": "terminale_a1_maths_numerique_l07_systemes_lineaires",
  "subjectId": "maths",
  "gradeLevel": "terminale_a1",
  "alsoForGrades": [
    "terminale_a2"
  ],
  "order": 7,
  "title": "Leçon 7 : Systèmes linéaires dans ℝ × ℝ",
  "summary": "Pour réaliser un cocktail, des élèves de Terminale A veulent au moins 20 bouteilles de mélange de jus d'orange et de jus de pomme sans dépasser leur budget : on apprend à déterminer le nombre de bouteilles de chaque type en résolvant des systèmes linéaires dans $\\mathbb{R} \\times \\mathbb{R}$.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1611",
  "points": [
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01",
      "order": 1,
      "title": "Résoudre un système par substitution",
      "summary": "Exprimer une inconnue en fonction de l'autre, la remplacer dans la seconde équation et conclure par un couple solution.",
      "conceptExplanation": "Un système de deux équations linéaires à deux inconnues $x$ et $y$ se résout dans $\\mathbb{R} \\times \\mathbb{R}$ : on cherche les couples $(x ; y)$ de nombres réels qui vérifient les deux équations en même temps.\nMéthode de substitution, sur l'exemple de la leçon : dans le système $\\begin{cases} x - 2y = 3 \\\\ x + y = -3 \\end{cases}$, on exprime $x$ en fonction de $y$ à l'aide de la première équation, soit $x = 3 + 2y$.\nOn remplace $x$ par cette expression dans la deuxième équation : $3 + 2y + y = -3$, c'est-à-dire $3y = -6$, donc $y = -2$.\nOn calcule ensuite $x$ : $x = 3 + 2 \\times (-2) = -1$. L'ensemble des solutions est $S_{\\mathbb{R} \\times \\mathbb{R}} = \\{(-1 ; -2)\\}$.",
      "keyRule": "Substitution : j'exprime une inconnue dans une équation, je la remplace dans l'autre, je résous, puis je calcule la seconde inconnue.",
      "formulas": [
        {
          "name": "Le système de la leçon",
          "formula": "\\begin{cases} x - 2y = 3 \\\\ x + y = -3 \\end{cases}",
          "note": "Deux équations, deux inconnues."
        },
        {
          "name": "Ensemble des solutions",
          "formula": "S_{\\mathbb{R} \\times \\mathbb{R}} = \\{(-1 {;} -2)\\}"
        }
      ],
      "workedExample": {
        "title": "Le système de la leçon, par substitution",
        "statement": "Résous dans $\\mathbb{R} \\times \\mathbb{R}$ le système $\\begin{cases} x - 2y = 3 \\\\ x + y = -3 \\end{cases}$.",
        "methodSteps": [
          "De la première équation, on tire $x = 3 + 2y$.",
          "On remplace dans la deuxième équation : $3 + 2y + y = -3$, soit $3y = -6$, donc $y = -2$.",
          "On calcule $x = 3 + 2 \\times (-2) = -1$."
        ],
        "conclusion": "Le couple solution est $(-1 ; -2)$ : $S_{\\mathbb{R} \\times \\mathbb{R}} = \\{(-1 ; -2)\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Résoudre dans $\\mathbb{R} \\times \\mathbb{R}$",
          "stepTheme": "Résoudre dans $\\mathbb{R} \\times \\mathbb{R}$",
          "stepBadge": "Résoudre dans $\\mathbb{R} \\times \\mathbb{R}$",
          "paragraphText": "• Résoudre un système dans $\\mathbb{R} \\times \\mathbb{R}$, c'est trouver tous les couples $(x ; y)$ de nombres réels qui vérifient les deux équations en même temps.\nUn couple solution s'écrit toujours dans l'ordre $(x ; y)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q1",
            "type": "mcq",
            "prompt": "Résoudre un système dans $\\mathbb{R} \\times \\mathbb{R}$, c'est trouver :",
            "options": [
              "Un seul nombre réel $x$",
              "Les couples d'entiers vérifiant la première équation",
              "Les valeurs qui vérifient au moins une des deux équations",
              "Tous les couples $(x ; y)$ de réels vérifiant les deux équations en même temps"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Une solution d'un système est un couple $(x ; y)$ de réels qui satisfait simultanément les deux équations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Exprimer $x$ en fonction de $y$",
          "stepTheme": "Exprimer $x$ en fonction de $y$",
          "stepBadge": "Exprimer $x$ en fonction de $y$",
          "paragraphText": "De la première équation $x - 2y = 3$, on tire $x = 3 + 2y$.\nC'est l'étape qui prépare la substitution : une inconnue est exprimée en fonction de l'autre.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q2",
            "type": "mcq",
            "prompt": "Dans le système de la leçon, la première équation donne :",
            "options": [
              "$x = 3 - 2y$",
              "$x = 2y - 3$",
              "$y = 3 + 2x$",
              "$x = 3 + 2y$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On passe $2y$ dans l'autre membre : $x - 2y = 3$ équivaut à $x = 3 + 2y$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Remplacer dans l'autre équation",
          "stepTheme": "Remplacer dans l'autre équation",
          "stepBadge": "Remplacer dans l'autre équation",
          "paragraphText": "On remplace $x$ par $3 + 2y$ dans la deuxième équation $x + y = -3$.\nOn obtient $3 + 2y + y = -3$, c'est-à-dire $3y = -6$, donc $y = -2$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q3",
            "type": "mcq",
            "prompt": "Après substitution, quelle valeur de $y$ obtient-on ?",
            "options": [
              "$y = 2$",
              "$y = -1$",
              "$y = -6$",
              "$y = -2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le calcul en KaTeX donne $3y = -6$, donc $y = -2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer la seconde inconnue",
          "stepTheme": "Calculer la seconde inconnue",
          "stepBadge": "Calculer la seconde inconnue",
          "paragraphText": "Connaissant $y = -2$, on revient à l'expression $x = 3 + 2y$.\nOn calcule $x = 3 + 2 \\times (-2) = -1$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q4",
            "type": "mcq",
            "prompt": "Avec $y = -2$, la valeur de $x$ est :",
            "options": [
              "$x = -1$",
              "$x = 7$",
              "$x = -2$",
              "$x = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace $y$ par $-2$ : $x = 3 - 4 = -1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "L'ordre du couple compte",
          "stepTheme": "L'ordre du couple compte",
          "stepBadge": "L'ordre du couple compte",
          "paragraphText": "Piège : le couple solution s'écrit $(x ; y)$, dans cet ordre.\nIci $x = -1$ et $y = -2$ : le couple $(-2 ; -1)$ n'est pas solution, car il ne vérifie pas la première équation.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q5",
            "type": "mcq",
            "prompt": "Le couple solution du système de la leçon est :",
            "options": [
              "$(-2 ; -1)$",
              "$(-1 ; 2)$",
              "$(1 ; 2)$",
              "$(-1 ; -2)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On a trouvé $x = -1$ et $y = -2$ : le couple est $(-1 ; -2)$, dans l'ordre $(x ; y)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Vérifier le couple solution",
          "stepTheme": "Vérifier le couple solution",
          "stepBadge": "Vérifier le couple solution",
          "paragraphText": "On vérifie : pour $(-1 ; -2)$, la première équation donne $-1 - 2 \\times (-2) = 3$ et la deuxième donne $-1 + (-2) = -3$.\nLes deux égalités sont vraies : le couple est bien solution des deux équations.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q6",
            "type": "mcq",
            "prompt": "Pour le couple $(-1 ; -2)$, la deuxième équation $x + y = -3$ donne :",
            "options": [
              "$-3$",
              "$3$",
              "$-1$",
              "$-2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $-1 + (-2) = -3$ : la deuxième équation est bien vérifiée."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q1",
          "type": "mcq",
          "prompt": "Résoudre un système dans $\\mathbb{R} \\times \\mathbb{R}$, c'est trouver :",
          "options": [
            "Un seul nombre réel $x$",
            "Les couples d'entiers vérifiant la première équation",
            "Les valeurs qui vérifient au moins une des deux équations",
            "Tous les couples $(x ; y)$ de réels vérifiant les deux équations en même temps"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Une solution d'un système est un couple $(x ; y)$ de réels qui satisfait simultanément les deux équations."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q2",
          "type": "mcq",
          "prompt": "Dans le système de la leçon, la première équation donne :",
          "options": [
            "$x = 3 - 2y$",
            "$x = 2y - 3$",
            "$y = 3 + 2x$",
            "$x = 3 + 2y$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On passe $2y$ dans l'autre membre : $x - 2y = 3$ équivaut à $x = 3 + 2y$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q3",
          "type": "mcq",
          "prompt": "Après substitution, quelle valeur de $y$ obtient-on ?",
          "options": [
            "$y = 2$",
            "$y = -1$",
            "$y = -6$",
            "$y = -2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le calcul en KaTeX donne $3y = -6$, donc $y = -2$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q4",
          "type": "mcq",
          "prompt": "Avec $y = -2$, la valeur de $x$ est :",
          "options": [
            "$x = -1$",
            "$x = 7$",
            "$x = -2$",
            "$x = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace $y$ par $-2$ : $x = 3 - 4 = -1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q5",
          "type": "mcq",
          "prompt": "Le couple solution du système de la leçon est :",
          "options": [
            "$(-2 ; -1)$",
            "$(-1 ; 2)$",
            "$(1 ; 2)$",
            "$(-1 ; -2)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On a trouvé $x = -1$ et $y = -2$ : le couple est $(-1 ; -2)$, dans l'ordre $(x ; y)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p01_q6",
          "type": "mcq",
          "prompt": "Pour le couple $(-1 ; -2)$, la deuxième équation $x + y = -3$ donne :",
          "options": [
            "$-3$",
            "$3$",
            "$-1$",
            "$-2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $-1 + (-2) = -3$ : la deuxième équation est bien vérifiée."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02",
      "order": 2,
      "title": "Résoudre un système par combinaison",
      "summary": "Multiplier une équation par un nombre puis additionner membre à membre pour éliminer une inconnue.",
      "conceptExplanation": "Méthode de combinaison, sur le même système de la leçon : $\\begin{cases} x - 2y = 3 \\\\ x + y = -3 \\end{cases}$.\nOn multiplie la première équation par $-1$ : elle devient $-x + 2y = -3$. En l'ajoutant membre à membre à la deuxième équation, l'inconnue $x$ disparaît et il reste $3y = -6$, d'où $y = -2$.\nOn remplace ensuite $y$ par sa valeur dans la deuxième équation : $x + (-2) = -3$, donc $x = -1$.\nOn retrouve $S_{\\mathbb{R} \\times \\mathbb{R}} = \\{(-1 ; -2)\\}$, comme par substitution : les deux méthodes donnent le même couple solution.",
      "keyRule": "Combinaison : je multiplie une équation par un nombre bien choisi, j'additionne membre à membre pour éliminer une inconnue, puis je calcule l'autre.",
      "formulas": [
        {
          "name": "Élimination de $x$",
          "formula": "\\begin{cases} -x + 2y = -3 \\\\ x + y = -3 \\end{cases} \\text{ donne } 3y = -6",
          "note": "La première équation a été multipliée par $-1$."
        }
      ],
      "workedExample": {
        "title": "Le système de la leçon, par combinaison",
        "statement": "Résous dans $\\mathbb{R} \\times \\mathbb{R}$ le système $\\begin{cases} x - 2y = 3 \\\\ x + y = -3 \\end{cases}$ par la méthode de combinaison.",
        "methodSteps": [
          "On multiplie la première équation par $-1$ : $-x + 2y = -3$.",
          "On ajoute membre à membre avec la deuxième équation : les $x$ s'éliminent et $3y = -6$, donc $y = -2$.",
          "On remplace $y$ par $-2$ dans la deuxième équation : $x = -1$."
        ],
        "conclusion": "Le couple solution est $(-1 ; -2)$, le même que par substitution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le principe de la combinaison",
          "stepTheme": "Le principe de la combinaison",
          "stepBadge": "Le principe de la combinaison",
          "paragraphText": "• Méthode de combinaison : on remplace une équation par une combinaison des deux équations du système, de façon à éliminer une inconnue.\nOn additionne alors les équations membre à membre.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q1",
            "type": "mcq",
            "prompt": "La méthode de combinaison consiste à :",
            "options": [
              "Remplacer une inconnue par son expression dans l'autre équation",
              "Élever les deux équations au carré",
              "Diviser les deux équations l'une par l'autre",
              "Combiner les équations pour éliminer une inconnue"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On combine les équations (multiplication puis addition membre à membre) pour faire disparaître une inconnue."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Multiplier une équation",
          "stepTheme": "Multiplier une équation",
          "stepBadge": "Multiplier une équation",
          "paragraphText": "Multiplier les deux membres d'une équation par un même nombre non nul donne une équation équivalente : le système garde les mêmes solutions.\nDans la leçon, la première équation est multipliée par $-1$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q2",
            "type": "mcq",
            "prompt": "Dans la leçon, par quel nombre multiplie-t-on la première équation pour éliminer $x$ ?",
            "options": [
              "Par $2$",
              "Par $0$",
              "Par $3$",
              "Par $-1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Multipliée par $-1$, la première équation devient $-x + 2y = -3$ : ajoutée à la deuxième, les termes en $x$ s'annulent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Additionner membre à membre",
          "stepTheme": "Additionner membre à membre",
          "stepBadge": "Additionner membre à membre",
          "paragraphText": "Après multiplication par $-1$, on additionne membre à membre les deux équations.\nLes termes en $x$ se compensent et il reste une seule équation en $y$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q3",
            "type": "mcq",
            "prompt": "L'addition membre à membre donne :",
            "options": [
              "$3y = -6$",
              "$3y = 6$",
              "$2x + 3y = -6$",
              "$y = -6$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On obtient $3y = -6$, d'où $y = -2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Retrouver $x$ après $y$",
          "stepTheme": "Retrouver $x$ après $y$",
          "stepBadge": "Retrouver $x$ après $y$",
          "paragraphText": "Une fois $y = -2$ connu, on remplace $y$ par sa valeur dans la deuxième équation de départ.\nOn obtient $x + (-2) = -3$, donc $x = -1$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q4",
            "type": "mcq",
            "prompt": "Après avoir trouvé $y = -2$, on obtient $x$ égal à :",
            "options": [
              "$-1$",
              "$-2$",
              "$-3$",
              "$1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La deuxième équation devient $x - 2 = -3$, donc $x = -1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Multiplier tous les termes",
          "stepTheme": "Multiplier tous les termes",
          "stepBadge": "Multiplier tous les termes",
          "paragraphText": "Piège : quand on multiplie une équation par un nombre, il faut multiplier tous ses termes, des deux côtés de l'égalité.\nMultiplier seulement le terme en $x$ changerait l'équation et fausserait le résultat.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q5",
            "type": "mcq",
            "prompt": "Quand on multiplie la première équation par $-1$, elle devient :",
            "options": [
              "$-x - 2y = 3$",
              "$-x + 2y = 3$",
              "$x + 2y = -3$",
              "$-x + 2y = -3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Chaque terme change de signe : $x$ devient $-x$, $-2y$ devient $2y$ et $3$ devient $-3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux méthodes, un même couple",
          "stepTheme": "Deux méthodes, un même couple",
          "stepBadge": "Deux méthodes, un même couple",
          "paragraphText": "La substitution et la combinaison, appliquées au système de la leçon, donnent le même résultat.\nCe contrôle croisé est une bonne façon de vérifier son calcul le jour de l'examen.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q6",
            "type": "mcq",
            "prompt": "Par combinaison, le couple solution du système de la leçon est :",
            "options": [
              "$(-1 ; -2)$",
              "$(1 ; -2)$",
              "$(-2 ; -1)$",
              "$(-1 ; 2)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On retrouve $x = -1$ et $y = -2$, exactement comme par substitution."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q1",
          "type": "mcq",
          "prompt": "La méthode de combinaison consiste à :",
          "options": [
            "Remplacer une inconnue par son expression dans l'autre équation",
            "Élever les deux équations au carré",
            "Diviser les deux équations l'une par l'autre",
            "Combiner les équations pour éliminer une inconnue"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On combine les équations (multiplication puis addition membre à membre) pour faire disparaître une inconnue."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q2",
          "type": "mcq",
          "prompt": "Dans la leçon, par quel nombre multiplie-t-on la première équation pour éliminer $x$ ?",
          "options": [
            "Par $2$",
            "Par $0$",
            "Par $3$",
            "Par $-1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Multipliée par $-1$, la première équation devient $-x + 2y = -3$ : ajoutée à la deuxième, les termes en $x$ s'annulent."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q3",
          "type": "mcq",
          "prompt": "L'addition membre à membre donne :",
          "options": [
            "$3y = -6$",
            "$3y = 6$",
            "$2x + 3y = -6$",
            "$y = -6$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On obtient $3y = -6$, d'où $y = -2$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q4",
          "type": "mcq",
          "prompt": "Après avoir trouvé $y = -2$, on obtient $x$ égal à :",
          "options": [
            "$-1$",
            "$-2$",
            "$-3$",
            "$1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La deuxième équation devient $x - 2 = -3$, donc $x = -1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q5",
          "type": "mcq",
          "prompt": "Quand on multiplie la première équation par $-1$, elle devient :",
          "options": [
            "$-x - 2y = 3$",
            "$-x + 2y = 3$",
            "$x + 2y = -3$",
            "$-x + 2y = -3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Chaque terme change de signe : $x$ devient $-x$, $-2y$ devient $2y$ et $3$ devient $-3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p02_q6",
          "type": "mcq",
          "prompt": "Par combinaison, le couple solution du système de la leçon est :",
          "options": [
            "$(-1 ; -2)$",
            "$(1 ; -2)$",
            "$(-2 ; -1)$",
            "$(-1 ; 2)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On retrouve $x = -1$ et $y = -2$, exactement comme par substitution."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03",
      "order": 3,
      "title": "Systèmes avec logarithmes : changement de variables",
      "summary": "Poser $X = \\ln x$ et $Y = \\ln y$ pour ramener le système à un système linéaire en $X$ et $Y$.",
      "conceptExplanation": "Certains systèmes contiennent des logarithmes : $(S_1) : \\begin{cases} 2 \\ln x - \\ln y = -2 \\\\ 4 \\ln x + \\ln y = 5 \\end{cases}$.\nContraintes : le logarithme n'est défini que pour des nombres strictement positifs, donc $x > 0$ et $y > 0$.\nOn pose $X = \\ln x$ et $Y = \\ln y$ : le système devient linéaire, $\\begin{cases} 2X - Y = -2 \\\\ 4X + Y = 5 \\end{cases}$. On le résout (ici par substitution) : $Y = 2X + 2$, puis $4X + 2X + 2 = 5$, soit $6X = 3$ et $X = \\frac{1}{2}$ ; ensuite $Y = 3$.\nOn revient aux inconnues de départ : $\\ln x = \\frac{1}{2}$ donne $x = e^{\\frac{1}{2}}$ et $\\ln y = 3$ donne $y = e^3$.",
      "keyRule": "Devant un système en $\\ln x$ et $\\ln y$ : contraintes $x > 0$ et $y > 0$, changement de variables, résolution linéaire, puis retour à $x$ et $y$.",
      "formulas": [
        {
          "name": "Changement de variables",
          "formula": "X = \\ln x \\text{ et } Y = \\ln y \\text{ , avec } x > 0 \\text{ et } y > 0"
        },
        {
          "name": "Système transformé de $(S_1)$",
          "formula": "\\begin{cases} 2X - Y = -2 \\\\ 4X + Y = 5 \\end{cases}"
        }
      ],
      "workedExample": {
        "title": "Résoudre $(S_1)$, le système en logarithmes",
        "statement": "Résous dans $\\mathbb{R} \\times \\mathbb{R}$ le système $(S_1) : \\begin{cases} 2 \\ln x - \\ln y = -2 \\\\ 4 \\ln x + \\ln y = 5 \\end{cases}$.",
        "methodSteps": [
          "Contraintes : $x > 0$ et $y > 0$. On pose $X = \\ln x$ et $Y = \\ln y$ : le système devient $2X - Y = -2$ et $4X + Y = 5$.",
          "De la première équation, $Y = 2X + 2$ ; on remplace dans la deuxième : $6X = 3$, donc $X = \\frac{1}{2}$.",
          "On calcule $Y = 2 \\times \\frac{1}{2} + 2 = 3$.",
          "Retour : $\\ln x = \\frac{1}{2}$ donne $x = e^{\\frac{1}{2}}$ et $\\ln y = 3$ donne $y = e^3$."
        ],
        "conclusion": "Le couple solution de $(S_1)$ est $(e^{\\frac{1}{2}} ; e^3)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le changement de variables",
          "stepTheme": "Le changement de variables",
          "stepBadge": "Le changement de variables",
          "paragraphText": "• Changement de variables : on pose de nouvelles inconnues, ici $X = \\ln x$ et $Y = \\ln y$, pour transformer le système en un système linéaire ordinaire.\nOn résout d'abord en $X$ et $Y$, puis on revient à $x$ et $y$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q1",
            "type": "mcq",
            "prompt": "Pour résoudre $(S_1)$, le changement de variables de la leçon est :",
            "options": [
              "$X = e^x$ et $Y = e^y$",
              "$X = \\frac{1}{x}$ et $Y = \\frac{1}{y}$",
              "$X = x^2$ et $Y = y^2$",
              "$X = \\ln x$ et $Y = \\ln y$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le système contient $\\ln x$ et $\\ln y$ : on pose $X = \\ln x$ et $Y = \\ln y$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Les contraintes sur $x$ et $y$",
          "stepTheme": "Les contraintes sur $x$ et $y$",
          "stepBadge": "Les contraintes sur $x$ et $y$",
          "paragraphText": "Le logarithme népérien n'est défini que pour les nombres strictement positifs.\nLa leçon commence donc par les contraintes : $x > 0$ et $y > 0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q2",
            "type": "mcq",
            "prompt": "Pour $(S_1)$, les contraintes sur $x$ et $y$ sont :",
            "options": [
              "$x > 0$ et $y > 0$",
              "$x \\geq 0$ et $y \\geq 0$",
              "$x \\neq 0$ et $y \\neq 0$",
              "Aucune contrainte"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\ln x$ et $\\ln y$ exigent $x > 0$ et $y > 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le système transformé",
          "stepTheme": "Le système transformé",
          "stepBadge": "Le système transformé",
          "paragraphText": "Avec $X = \\ln x$ et $Y = \\ln y$, le système $(S_1)$ devient un système linéaire en $X$ et $Y$.\nC'est ce système que l'on résout ensuite par substitution ou par combinaison.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q3",
            "type": "mcq",
            "prompt": "Le système transformé de $(S_1)$ est :",
            "options": [
              "$\\begin{cases} 2X - Y = -2 \\\\ 4X + Y = 5 \\end{cases}$",
              "$\\begin{cases} 2X + Y = -2 \\\\ 4X - Y = 5 \\end{cases}$",
              "$\\begin{cases} X - 2Y = -2 \\\\ X + 4Y = 5 \\end{cases}$",
              "$\\begin{cases} 2X - Y = 5 \\\\ 4X + Y = -2 \\end{cases}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace simplement $\\ln x$ par $X$ et $\\ln y$ par $Y$, sans changer les coefficients."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Résoudre le système en $X$ et $Y$",
          "stepTheme": "Résoudre le système en $X$ et $Y$",
          "stepBadge": "Résoudre le système en $X$ et $Y$",
          "paragraphText": "On tire $Y = 2X + 2$ de la première équation et on remplace dans la deuxième.\nOn obtient $6X = 3$, puis $Y = 3$ en reportant la valeur de $X$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q4",
            "type": "mcq",
            "prompt": "La résolution du système transformé donne :",
            "options": [
              "$X = 3$ et $Y = \\frac{1}{2}$",
              "$X = \\frac{1}{2}$ et $Y = -3$",
              "$X = 1$ et $Y = 4$",
              "$X = \\frac{1}{2}$ et $Y = 3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On trouve $X = \\frac{1}{2}$, puis $Y = 2 \\times \\frac{1}{2} + 2 = 3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas s'arrêter à $X$ et $Y$",
          "stepTheme": "Ne pas s'arrêter à $X$ et $Y$",
          "stepBadge": "Ne pas s'arrêter à $X$ et $Y$",
          "paragraphText": "Piège : $X$ et $Y$ ne sont pas les inconnues demandées.\nLe couple $(X ; Y)$ n'est pas la solution du système de départ : il faut revenir à $x$ et $y$ par $\\ln x = X$ et $\\ln y = Y$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q5",
            "type": "mcq",
            "prompt": "Après le changement de variables, l'étape indispensable est :",
            "options": [
              "De vérifier que $X > 0$",
              "D'élever $X$ et $Y$ au carré",
              "De revenir à $x$ et $y$ grâce à $\\ln x = X$ et $\\ln y = Y$",
              "De poser un nouveau changement de variables"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution attendue porte sur $x$ et $y$ : le retour depuis $X = \\ln x$ et $Y = \\ln y$ est obligatoire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le couple solution de $(S_1)$",
          "stepTheme": "Le couple solution de $(S_1)$",
          "stepBadge": "Le couple solution de $(S_1)$",
          "paragraphText": "On a $\\ln x = \\frac{1}{2}$, donc $x = e^{\\frac{1}{2}}$, et $\\ln y = 3$, donc $y = e^3$.\nCes deux valeurs sont strictement positives : les contraintes sont respectées.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q6",
            "type": "mcq",
            "prompt": "Le couple solution de $(S_1)$ est :",
            "options": [
              "$(\\frac{1}{2} ; 3)$",
              "$(e^3 ; e^{\\frac{1}{2}})$",
              "$(e^{\\frac{1}{2}} ; e^3)$",
              "$(\\ln 2 ; 3)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x = e^{\\frac{1}{2}}$ et $y = e^3$, dans l'ordre $(x ; y)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q1",
          "type": "mcq",
          "prompt": "Pour résoudre $(S_1)$, le changement de variables de la leçon est :",
          "options": [
            "$X = e^x$ et $Y = e^y$",
            "$X = \\frac{1}{x}$ et $Y = \\frac{1}{y}$",
            "$X = x^2$ et $Y = y^2$",
            "$X = \\ln x$ et $Y = \\ln y$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le système contient $\\ln x$ et $\\ln y$ : on pose $X = \\ln x$ et $Y = \\ln y$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q2",
          "type": "mcq",
          "prompt": "Pour $(S_1)$, les contraintes sur $x$ et $y$ sont :",
          "options": [
            "$x > 0$ et $y > 0$",
            "$x \\geq 0$ et $y \\geq 0$",
            "$x \\neq 0$ et $y \\neq 0$",
            "Aucune contrainte"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\ln x$ et $\\ln y$ exigent $x > 0$ et $y > 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q3",
          "type": "mcq",
          "prompt": "Le système transformé de $(S_1)$ est :",
          "options": [
            "$\\begin{cases} 2X - Y = -2 \\\\ 4X + Y = 5 \\end{cases}$",
            "$\\begin{cases} 2X + Y = -2 \\\\ 4X - Y = 5 \\end{cases}$",
            "$\\begin{cases} X - 2Y = -2 \\\\ X + 4Y = 5 \\end{cases}$",
            "$\\begin{cases} 2X - Y = 5 \\\\ 4X + Y = -2 \\end{cases}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace simplement $\\ln x$ par $X$ et $\\ln y$ par $Y$, sans changer les coefficients."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q4",
          "type": "mcq",
          "prompt": "La résolution du système transformé donne :",
          "options": [
            "$X = 3$ et $Y = \\frac{1}{2}$",
            "$X = \\frac{1}{2}$ et $Y = -3$",
            "$X = 1$ et $Y = 4$",
            "$X = \\frac{1}{2}$ et $Y = 3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On trouve $X = \\frac{1}{2}$, puis $Y = 2 \\times \\frac{1}{2} + 2 = 3$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q5",
          "type": "mcq",
          "prompt": "Après le changement de variables, l'étape indispensable est :",
          "options": [
            "De vérifier que $X > 0$",
            "D'élever $X$ et $Y$ au carré",
            "De revenir à $x$ et $y$ grâce à $\\ln x = X$ et $\\ln y = Y$",
            "De poser un nouveau changement de variables"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution attendue porte sur $x$ et $y$ : le retour depuis $X = \\ln x$ et $Y = \\ln y$ est obligatoire."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p03_q6",
          "type": "mcq",
          "prompt": "Le couple solution de $(S_1)$ est :",
          "options": [
            "$(\\frac{1}{2} ; 3)$",
            "$(e^3 ; e^{\\frac{1}{2}})$",
            "$(e^{\\frac{1}{2}} ; e^3)$",
            "$(\\ln 2 ; 3)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x = e^{\\frac{1}{2}}$ et $y = e^3$, dans l'ordre $(x ; y)$."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04",
      "order": 4,
      "title": "Systèmes avec exponentielles : changement de variables",
      "summary": "Poser $X = e^x$ et $Y = e^y$ pour ramener le système à un système linéaire en $X$ et $Y$.",
      "conceptExplanation": "Le deuxième exemple de la leçon est $(S_2) : \\begin{cases} e^x + 3 e^y = 5 \\\\ 2 e^x - e^y = 3 \\end{cases}$.\nOn pose $X = e^x$ et $Y = e^y$, avec $X > 0$ et $Y > 0$ car une exponentielle est toujours strictement positive. Le système devient $\\begin{cases} X + 3Y = 5 \\\\ 2X - Y = 3 \\end{cases}$, que la leçon résout par combinaison.\nEn multipliant la première équation par $-2$ puis en additionnant, on obtient $-7Y = -7$, donc $Y = 1$. En multipliant la deuxième équation par $3$ puis en additionnant, on obtient $7X = 14$, donc $X = 2$.\nRetour : $e^x = 2$ donne $x = \\ln 2$ et $e^y = 1$ donne $y = \\ln 1 = 0$.",
      "keyRule": "Devant un système en $e^x$ et $e^y$ : poser $X = e^x$ et $Y = e^y$ (strictement positifs), résoudre le système linéaire, puis revenir par le logarithme.",
      "formulas": [
        {
          "name": "Changement de variables",
          "formula": "X = e^x \\text{ et } Y = e^y \\text{ , avec } X > 0 \\text{ et } Y > 0"
        },
        {
          "name": "Système transformé de $(S_2)$",
          "formula": "\\begin{cases} X + 3Y = 5 \\\\ 2X - Y = 3 \\end{cases}"
        }
      ],
      "workedExample": {
        "title": "Résoudre $(S_2)$, le système en exponentielles",
        "statement": "Résous dans $\\mathbb{R} \\times \\mathbb{R}$ le système $(S_2) : \\begin{cases} e^x + 3 e^y = 5 \\\\ 2 e^x - e^y = 3 \\end{cases}$.",
        "methodSteps": [
          "On pose $X = e^x$ et $Y = e^y$, avec $X > 0$ et $Y > 0$ : le système devient $X + 3Y = 5$ et $2X - Y = 3$.",
          "Par combinaison (première équation multipliée par $-2$, puis addition), $-7Y = -7$, donc $Y = 1$.",
          "Par combinaison (deuxième équation multipliée par $3$, puis addition), $7X = 14$, donc $X = 2$.",
          "Retour : $e^x = 2$ donne $x = \\ln 2$ et $e^y = 1$ donne $y = 0$."
        ],
        "conclusion": "Le couple solution de $(S_2)$ est $(\\ln 2 ; 0)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le changement de variables",
          "stepTheme": "Le changement de variables",
          "stepBadge": "Le changement de variables",
          "paragraphText": "• Pour un système où apparaissent $e^x$ et $e^y$, la leçon pose $X = e^x$ et $Y = e^y$.\nLe système devient alors un système linéaire en $X$ et $Y$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q1",
            "type": "mcq",
            "prompt": "Pour $(S_2)$, le changement de variables de la leçon est :",
            "options": [
              "$X = \\ln x$ et $Y = \\ln y$",
              "$X = e^x$ et $Y = e^y$",
              "$X = x$ et $Y = y$",
              "$X = \\frac{1}{x}$ et $Y = \\frac{1}{y}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le système contient $e^x$ et $e^y$ : on pose $X = e^x$ et $Y = e^y$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des nouvelles inconnues positives",
          "stepTheme": "Des nouvelles inconnues positives",
          "stepBadge": "Des nouvelles inconnues positives",
          "paragraphText": "Une exponentielle est toujours strictement positive.\nLa leçon précise donc $X > 0$ et $Y > 0$ : une valeur négative ou nulle trouvée pour $X$ ou $Y$ serait à rejeter.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q2",
            "type": "mcq",
            "prompt": "Pour $X = e^x$ et $Y = e^y$, on sait que :",
            "options": [
              "$X$ et $Y$ sont quelconques",
              "$X \\geq 0$ et $Y \\geq 0$",
              "$X > 0$ et $Y > 0$",
              "$X < 0$ et $Y < 0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Pour tout réel $t$, $e^t > 0$ : donc $X > 0$ et $Y > 0$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le système transformé",
          "stepTheme": "Le système transformé",
          "stepBadge": "Le système transformé",
          "paragraphText": "En remplaçant $e^x$ par $X$ et $e^y$ par $Y$, le système $(S_2)$ devient linéaire.\nLa leçon le résout ensuite par la méthode de combinaison.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q3",
            "type": "mcq",
            "prompt": "Le système transformé de $(S_2)$ est :",
            "options": [
              "$\\begin{cases} X + 3Y = 5 \\\\ 2X - Y = 3 \\end{cases}$",
              "$\\begin{cases} 3X + Y = 5 \\\\ X - 2Y = 3 \\end{cases}$",
              "$\\begin{cases} X + 3Y = 3 \\\\ 2X - Y = 5 \\end{cases}$",
              "$\\begin{cases} X - 3Y = 5 \\\\ 2X + Y = 3 \\end{cases}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On remplace $e^x$ par $X$ et $e^y$ par $Y$ sans changer les coefficients."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Trouver $Y$ par combinaison",
          "stepTheme": "Trouver $Y$ par combinaison",
          "stepBadge": "Trouver $Y$ par combinaison",
          "paragraphText": "On multiplie chaque membre de la première équation par $-2$, puis on additionne membre à membre avec la deuxième.\nLes termes en $X$ s'éliminent et il reste une équation en $Y$ seul.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q4",
            "type": "mcq",
            "prompt": "La combinaison de la leçon donne pour $Y$ :",
            "options": [
              "$Y = -1$",
              "$Y = 2$",
              "$Y = 7$",
              "$Y = 1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On obtient $-7Y = -7$, donc $Y = 1$, qui est bien strictement positif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Confondre $e^y$ et $y$",
          "stepTheme": "Confondre $e^y$ et $y$",
          "stepBadge": "Confondre $e^y$ et $y$",
          "paragraphText": "Piège : $Y = e^y$ vaut $1$, mais cela ne signifie pas $y = 1$.\nOn a $e^y = 1$, donc $y = \\ln 1 = 0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q5",
            "type": "mcq",
            "prompt": "Si $e^y = 1$, alors $y$ vaut :",
            "options": [
              "$1$",
              "$0$",
              "$e$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$e^0 = 1$ : la valeur dont l'exponentielle vaut $1$ est $0$, donc $y = \\ln 1 = 0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le couple solution de $(S_2)$",
          "stepTheme": "Le couple solution de $(S_2)$",
          "stepBadge": "Le couple solution de $(S_2)$",
          "paragraphText": "Avec $X = 2$, on a $e^x = 2$, donc $x = \\ln 2$ ; avec $Y = 1$, on a $y = 0$.\nVérification : $e^{\\ln 2} + 3 e^0$ vaut $5$ et $2 e^{\\ln 2} - e^0$ vaut $3$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q6",
            "type": "mcq",
            "prompt": "Le couple solution de $(S_2)$ est :",
            "options": [
              "$(2 ; 1)$",
              "$(0 ; \\ln 2)$",
              "$(\\ln 2 ; 0)$",
              "$(1 ; 2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x = \\ln 2$ et $y = 0$ : le couple solution est $(\\ln 2 ; 0)$, réponse C de l'exercice 2 d'application de la leçon pour un système voisin."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q1",
          "type": "mcq",
          "prompt": "Pour $(S_2)$, le changement de variables de la leçon est :",
          "options": [
            "$X = \\ln x$ et $Y = \\ln y$",
            "$X = e^x$ et $Y = e^y$",
            "$X = x$ et $Y = y$",
            "$X = \\frac{1}{x}$ et $Y = \\frac{1}{y}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le système contient $e^x$ et $e^y$ : on pose $X = e^x$ et $Y = e^y$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q2",
          "type": "mcq",
          "prompt": "Pour $X = e^x$ et $Y = e^y$, on sait que :",
          "options": [
            "$X$ et $Y$ sont quelconques",
            "$X \\geq 0$ et $Y \\geq 0$",
            "$X > 0$ et $Y > 0$",
            "$X < 0$ et $Y < 0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Pour tout réel $t$, $e^t > 0$ : donc $X > 0$ et $Y > 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q3",
          "type": "mcq",
          "prompt": "Le système transformé de $(S_2)$ est :",
          "options": [
            "$\\begin{cases} X + 3Y = 5 \\\\ 2X - Y = 3 \\end{cases}$",
            "$\\begin{cases} 3X + Y = 5 \\\\ X - 2Y = 3 \\end{cases}$",
            "$\\begin{cases} X + 3Y = 3 \\\\ 2X - Y = 5 \\end{cases}$",
            "$\\begin{cases} X - 3Y = 5 \\\\ 2X + Y = 3 \\end{cases}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On remplace $e^x$ par $X$ et $e^y$ par $Y$ sans changer les coefficients."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q4",
          "type": "mcq",
          "prompt": "La combinaison de la leçon donne pour $Y$ :",
          "options": [
            "$Y = -1$",
            "$Y = 2$",
            "$Y = 7$",
            "$Y = 1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On obtient $-7Y = -7$, donc $Y = 1$, qui est bien strictement positif."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q5",
          "type": "mcq",
          "prompt": "Si $e^y = 1$, alors $y$ vaut :",
          "options": [
            "$1$",
            "$0$",
            "$e$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$e^0 = 1$ : la valeur dont l'exponentielle vaut $1$ est $0$, donc $y = \\ln 1 = 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p04_q6",
          "type": "mcq",
          "prompt": "Le couple solution de $(S_2)$ est :",
          "options": [
            "$(2 ; 1)$",
            "$(0 ; \\ln 2)$",
            "$(\\ln 2 ; 0)$",
            "$(1 ; 2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x = \\ln 2$ et $y = 0$ : le couple solution est $(\\ln 2 ; 0)$, réponse C de l'exercice 2 d'application de la leçon pour un système voisin."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05",
      "order": 5,
      "title": "Une inéquation dans $\\mathbb{R} \\times \\mathbb{R}$ : le demi-plan",
      "summary": "Résoudre graphiquement une inéquation du type $ax + by + c > 0$ en testant un point par rapport à la droite frontière.",
      "conceptExplanation": "Une inéquation du type $(I) : ax + by + c > 0$ (ou $ax + by + c \\geq 0$) se résout graphiquement, le plan étant muni d'un repère $(O, I, J)$.\nSoit $(D)$ la droite d'équation $ax + by + c = 0$. Elle partage le plan en deux demi-plans : les coordonnées des points de l'un vérifient l'inégalité stricte dans un sens, celles des points de l'autre dans l'autre sens. La droite $(D)$ est la frontière de ces deux demi-plans.\nPour savoir lequel est le bon, on teste un point $A$ qui n'appartient pas à $(D)$ : si $a x_A + b y_A + c > 0$, l'ensemble des solutions est le demi-plan ouvert de frontière $(D)$ contenant $A$ ; sinon, c'est le demi-plan ouvert ne contenant pas $A$.\nPour une inéquation large ($\\geq 0$), le demi-plan est fermé : il contient aussi la droite $(D)$.",
      "keyRule": "Méthode graphique : tracer la droite frontière, tester un point simple (souvent l'origine), garder le demi-plan qui convient, ouvert si l'inégalité est stricte, fermé si elle est large.",
      "formulas": [
        {
          "name": "Inéquation type",
          "formula": "(I) : ax + by + c > 0",
          "note": "Ou avec $\\geq 0$ pour un demi-plan fermé."
        },
        {
          "name": "Frontière",
          "formula": "(D) : ax + by + c = 0"
        }
      ],
      "workedExample": {
        "title": "Résoudre $x + y + 1 > 0$ (exercice de fixation)",
        "statement": "Le plan est muni d'un repère $(O, I, J)$. Résous dans $\\mathbb{R} \\times \\mathbb{R}$ l'inéquation $(I) : x + y + 1 > 0$.",
        "methodSteps": [
          "Soit $(D)$ la droite d'équation $x + y + 1 = 0$ : on la trace dans le repère.",
          "On teste l'origine $O(0 ; 0)$ : $0 + 0 + 1 = 1$ et $1 > 0$, donc le couple $(0 ; 0)$ est solution de $(I)$.",
          "L'ensemble des solutions est donc le demi-plan ouvert de frontière $(D)$ contenant le point $O$."
        ],
        "conclusion": "Les solutions sont les coordonnées des points du demi-plan ouvert de frontière $(D)$ contenant $O$ ; la droite $(D)$ n'en fait pas partie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une inéquation dans $\\mathbb{R} \\times \\mathbb{R}$",
          "stepTheme": "Une inéquation dans $\\mathbb{R} \\times \\mathbb{R}$",
          "stepBadge": "Une inéquation dans $\\mathbb{R} \\times \\mathbb{R}$",
          "paragraphText": "• Une inéquation du type $ax + by + c > 0$ a pour solutions des couples $(x ; y)$, que l'on représente par les points $M(x ; y)$ du plan.\nSa résolution est graphique : la réponse est une région du plan.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q1",
            "type": "mcq",
            "prompt": "Les solutions d'une inéquation $ax + by + c > 0$ forment :",
            "options": [
              "Un seul couple",
              "Un intervalle de la droite des réels",
              "Les coordonnées des points d'un demi-plan",
              "Une droite"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Graphiquement, l'ensemble des solutions est un demi-plan délimité par la droite d'équation $ax + by + c = 0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La droite frontière partage le plan",
          "stepTheme": "La droite frontière partage le plan",
          "stepBadge": "La droite frontière partage le plan",
          "paragraphText": "La droite $(D)$ d'équation $ax + by + c = 0$ partage le plan en deux demi-plans.\nD'un côté, les coordonnées des points vérifient $ax + by + c > 0$ ; de l'autre, elles vérifient $ax + by + c < 0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q2",
            "type": "mcq",
            "prompt": "La droite $(D)$ est appelée, par rapport aux deux demi-plans :",
            "options": [
              "La médiatrice",
              "La frontière",
              "L'asymptote",
              "La bissectrice"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le texte nomme $(D)$ la frontière des deux demi-plans qu'elle délimite."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Demi-plan ouvert ou fermé",
          "stepTheme": "Demi-plan ouvert ou fermé",
          "stepBadge": "Demi-plan ouvert ou fermé",
          "paragraphText": "Pour une inéquation stricte ($> 0$), le demi-plan solution est ouvert : il ne contient pas la droite frontière.\nPour une inéquation large ($\\geq 0$), le demi-plan solution est fermé : il contient la droite frontière.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q3",
            "type": "mcq",
            "prompt": "Pour l'inéquation $ax + by + c \\geq 0$, l'ensemble des solutions est :",
            "options": [
              "Un demi-plan ouvert",
              "La droite $(D)$ seule",
              "Un demi-plan fermé, qui contient la droite $(D)$",
              "Le plan entier"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La remarque de la leçon : avec $\\geq 0$, le demi-plan est fermé, c'est-à-dire qu'il contient la droite $(D)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Tester un point",
          "stepTheme": "Tester un point",
          "stepBadge": "Tester un point",
          "paragraphText": "Méthode : on choisit un point $A$ qui n'appartient pas à $(D)$ et on calcule $a x_A + b y_A + c$.\nLe signe obtenu dit si le demi-plan solution est celui qui contient $A$ ou l'autre.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q4",
            "type": "mcq",
            "prompt": "Pour choisir le bon demi-plan, la méthode consiste à :",
            "options": [
              "Tester un point qui n'appartient pas à la droite $(D)$",
              "Tester tous les points du plan",
              "Choisir le demi-plan du haut au hasard",
              "Calculer le discriminant"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Un seul point test, hors de $(D)$, suffit : son signe décide du demi-plan solution."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Tester un point de la droite",
          "stepTheme": "Tester un point de la droite",
          "stepBadge": "Tester un point de la droite",
          "paragraphText": "Piège : un point situé sur $(D)$ donne $ax + by + c = 0$, ce qui ne décide rien.\nLe point test doit donc être choisi en dehors de la droite frontière.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q5",
            "type": "mcq",
            "prompt": "Le point test $A$ doit vérifier :",
            "options": [
              "$A$ appartient à $(D)$",
              "$A$ est l'origine dans tous les cas",
              "$A$ n'appartient pas à $(D)$",
              "$A$ a des coordonnées négatives"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sur $(D)$, l'expression vaut $0$ : impossible de trancher. Le point test est toujours hors de $(D)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le test de l'origine pour $x + y + 1 > 0$",
          "stepTheme": "Le test de l'origine pour $x + y + 1 > 0$",
          "stepBadge": "Le test de l'origine pour $x + y + 1 > 0$",
          "paragraphText": "Pour $(I) : x + y + 1 > 0$, on teste l'origine $O(0 ; 0)$.\nOn obtient $0 + 0 + 1 = 1$, et $1 > 0$ : l'origine est du bon côté.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q6",
            "type": "mcq",
            "prompt": "Pour l'inéquation $x + y + 1 > 0$, l'ensemble des solutions est le demi-plan ouvert de frontière $(D)$ :",
            "options": [
              "Ne contenant pas le point $O$",
              "Contenant le point $O$",
              "Situé sur la droite $(D)$",
              "Contenant uniquement le point $O$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le couple $(0 ; 0)$ est solution de $(I)$ : le demi-plan solution est celui qui contient $O$, et il est ouvert car l'inégalité est stricte."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q1",
          "type": "mcq",
          "prompt": "Les solutions d'une inéquation $ax + by + c > 0$ forment :",
          "options": [
            "Un seul couple",
            "Un intervalle de la droite des réels",
            "Les coordonnées des points d'un demi-plan",
            "Une droite"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Graphiquement, l'ensemble des solutions est un demi-plan délimité par la droite d'équation $ax + by + c = 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q2",
          "type": "mcq",
          "prompt": "La droite $(D)$ est appelée, par rapport aux deux demi-plans :",
          "options": [
            "La médiatrice",
            "La frontière",
            "L'asymptote",
            "La bissectrice"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le texte nomme $(D)$ la frontière des deux demi-plans qu'elle délimite."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q3",
          "type": "mcq",
          "prompt": "Pour l'inéquation $ax + by + c \\geq 0$, l'ensemble des solutions est :",
          "options": [
            "Un demi-plan ouvert",
            "La droite $(D)$ seule",
            "Un demi-plan fermé, qui contient la droite $(D)$",
            "Le plan entier"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La remarque de la leçon : avec $\\geq 0$, le demi-plan est fermé, c'est-à-dire qu'il contient la droite $(D)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q4",
          "type": "mcq",
          "prompt": "Pour choisir le bon demi-plan, la méthode consiste à :",
          "options": [
            "Tester un point qui n'appartient pas à la droite $(D)$",
            "Tester tous les points du plan",
            "Choisir le demi-plan du haut au hasard",
            "Calculer le discriminant"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Un seul point test, hors de $(D)$, suffit : son signe décide du demi-plan solution."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q5",
          "type": "mcq",
          "prompt": "Le point test $A$ doit vérifier :",
          "options": [
            "$A$ appartient à $(D)$",
            "$A$ est l'origine dans tous les cas",
            "$A$ n'appartient pas à $(D)$",
            "$A$ a des coordonnées négatives"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sur $(D)$, l'expression vaut $0$ : impossible de trancher. Le point test est toujours hors de $(D)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p05_q6",
          "type": "mcq",
          "prompt": "Pour l'inéquation $x + y + 1 > 0$, l'ensemble des solutions est le demi-plan ouvert de frontière $(D)$ :",
          "options": [
            "Ne contenant pas le point $O$",
            "Contenant le point $O$",
            "Situé sur la droite $(D)$",
            "Contenant uniquement le point $O$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le couple $(0 ; 0)$ est solution de $(I)$ : le demi-plan solution est celui qui contient $O$, et il est ouvert car l'inégalité est stricte."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06",
      "order": 6,
      "title": "Un système d'inéquations : l'intersection des demi-plans",
      "summary": "Résoudre chaque inéquation séparément, puis prendre l'intersection des ensembles de solutions.",
      "conceptExplanation": "Un système d'inéquations, par exemple $(S) : \\begin{cases} ax + by + c \\geq 0 \\\\ a'x + b'y + c' < 0 \\end{cases}$, se résout lui aussi graphiquement.\nOn note $(S_1)$ l'ensemble des solutions de la première inéquation et $(S_2)$ celui de la deuxième inéquation.\nChaque ensemble est un demi-plan, ouvert ou fermé selon que l'inégalité correspondante est stricte ou large.\nL'ensemble des solutions du système $(S)$ est l'intersection de $(S_1)$ et de $(S_2)$ : un couple n'est solution du système que s'il vérifie les deux inéquations à la fois.",
      "keyRule": "Système d'inéquations : un demi-plan par inéquation, et la réponse est leur intersection, jamais leur réunion.",
      "formulas": [
        {
          "name": "Système type",
          "formula": "(S) : \\begin{cases} ax + by + c \\geq 0 \\\\ a'x + b'y + c' < 0 \\end{cases}"
        },
        {
          "name": "Ensemble des solutions",
          "formula": "S = S_1 \\cap S_2"
        }
      ],
      "workedExample": {
        "title": "Le système de l'exercice de fixation",
        "statement": "Le plan est muni d'un repère $(O, I, J)$. Résous dans $\\mathbb{R} \\times \\mathbb{R}$ le système $(S) : \\begin{cases} 2x - y + 1 < 0 \\\\ x - 2y + 4 \\geq 0 \\end{cases}$.",
        "methodSteps": [
          "Pour $(I_1) : 2x - y + 1 < 0$, droite $(D_1)$ d'équation $2x - y + 1 = 0$ : le test de l'origine donne $1$, et $1 > 0$, donc l'ensemble $(H_1)$ est le demi-plan ouvert de frontière $(D_1)$ ne contenant pas $O$.",
          "Pour $(I_2) : x - 2y + 4 \\geq 0$, droite $(D_2)$ d'équation $x - 2y + 4 = 0$ : le test de l'origine donne $4$, et $4 > 0$, donc l'ensemble $(H_2)$ est le demi-plan fermé de frontière $(D_2)$ contenant $O$.",
          "L'ensemble des solutions $(H)$ du système est l'intersection de $(H_1)$ et de $(H_2)$."
        ],
        "conclusion": "Les solutions du système sont les coordonnées des points communs aux deux demi-plans $(H_1)$ et $(H_2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un système d'inéquations",
          "stepTheme": "Un système d'inéquations",
          "stepBadge": "Un système d'inéquations",
          "paragraphText": "• Un système d'inéquations impose plusieurs inégalités en même temps, avec les mêmes inconnues $x$ et $y$.\nUn couple solution doit vérifier toutes les inéquations du système.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q1",
            "type": "mcq",
            "prompt": "Un couple est solution d'un système d'inéquations si :",
            "options": [
              "Il vérifie au moins une inéquation",
              "Il vérifie toutes les inéquations du système",
              "Il annule toutes les expressions",
              "Il vérifie la première inéquation seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Comme pour un système d'équations, la solution doit satisfaire toutes les conditions à la fois."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Résoudre inéquation par inéquation",
          "stepTheme": "Résoudre inéquation par inéquation",
          "stepBadge": "Résoudre inéquation par inéquation",
          "paragraphText": "Méthode : on résout chaque inéquation séparément, graphiquement, comme dans le point précédent.\nOn obtient un demi-plan $(S_1)$ pour la première et un demi-plan $(S_2)$ pour la deuxième.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q2",
            "type": "mcq",
            "prompt": "La première étape de la méthode est de :",
            "options": [
              "Additionner les deux inéquations",
              "Résoudre chaque inéquation séparément pour obtenir $(S_1)$ et $(S_2)$",
              "Remplacer $y$ par $0$ partout",
              "Tracer une seule droite au hasard"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La méthode de la leçon désigne $(S_1)$ et $(S_2)$ les ensembles de solutions de chaque inéquation, avant de les combiner."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'intersection des deux ensembles",
          "stepTheme": "L'intersection des deux ensembles",
          "stepBadge": "L'intersection des deux ensembles",
          "paragraphText": "L'ensemble des solutions du système $(S)$ est l'intersection de $(S_1)$ et de $(S_2)$.\nGraphiquement, c'est la partie du plan qui appartient aux deux demi-plans à la fois.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q3",
            "type": "mcq",
            "prompt": "L'ensemble des solutions d'un système d'inéquations est :",
            "options": [
              "La réunion de $(S_1)$ et de $(S_2)$",
              "La différence de $(S_1)$ et de $(S_2)$",
              "Le produit de $(S_1)$ et de $(S_2)$",
              "L'intersection de $(S_1)$ et de $(S_2)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la méthode énoncée dans la leçon : l'ensemble des solutions du système est l'intersection des ensembles de solutions des inéquations."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La première inéquation du système de fixation",
          "stepTheme": "La première inéquation du système de fixation",
          "stepBadge": "La première inéquation du système de fixation",
          "paragraphText": "Pour $(I_1) : 2x - y + 1 < 0$, le test de l'origine donne $2 \\times 0 - 0 + 1 = 1$, et $1 > 0$.\nL'origine n'est donc pas solution de $(I_1)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q4",
            "type": "mcq",
            "prompt": "L'ensemble $(H_1)$ des solutions de $2x - y + 1 < 0$ est le demi-plan :",
            "options": [
              "Fermé contenant le point $O$",
              "Ouvert contenant le point $O$",
              "Ouvert ne contenant pas le point $O$",
              "Fermé ne contenant pas le point $O$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le test donne $1 > 0$, contraire à l'inégalité stricte demandée : $(H_1)$ est le demi-plan ouvert de frontière $(D_1)$ ne contenant pas $O$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La deuxième inéquation du système de fixation",
          "stepTheme": "La deuxième inéquation du système de fixation",
          "stepBadge": "La deuxième inéquation du système de fixation",
          "paragraphText": "Pour $(I_2) : x - 2y + 4 \\geq 0$, le test de l'origine donne $0 - 2 \\times 0 + 4 = 4$, et $4 > 0$.\nL'origine est donc solution de $(I_2)$, et l'inégalité est large.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q5",
            "type": "mcq",
            "prompt": "L'ensemble $(H_2)$ des solutions de $x - 2y + 4 \\geq 0$ est le demi-plan :",
            "options": [
              "Ouvert contenant le point $O$",
              "Fermé contenant le point $O$",
              "Ouvert ne contenant pas le point $O$",
              "Fermé ne contenant pas le point $O$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le couple $(0 ; 0)$ vérifie l'inégalité large : $(H_2)$ est le demi-plan fermé de frontière $(D_2)$ contenant $O$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Intersection, pas réunion",
          "stepTheme": "Intersection, pas réunion",
          "stepBadge": "Intersection, pas réunion",
          "paragraphText": "Piège : prendre la réunion des deux demi-plans reviendrait à accepter les couples qui ne vérifient qu'une seule inéquation.\nUn système exige les deux conditions en même temps : c'est une intersection.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q6",
            "type": "mcq",
            "prompt": "Pour le système de fixation, l'ensemble des solutions $(H)$ est :",
            "options": [
              "$(H_1)$ seulement",
              "$(H_2)$ seulement",
              "L'intersection de $(H_1)$ et de $(H_2)$",
              "La réunion de $(H_1)$ et de $(H_2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution du système est l'intersection $(H)$ de $(H_1)$ et de $(H_2)$, comme le conclut la correction de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q1",
          "type": "mcq",
          "prompt": "Un couple est solution d'un système d'inéquations si :",
          "options": [
            "Il vérifie au moins une inéquation",
            "Il vérifie toutes les inéquations du système",
            "Il annule toutes les expressions",
            "Il vérifie la première inéquation seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Comme pour un système d'équations, la solution doit satisfaire toutes les conditions à la fois."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q2",
          "type": "mcq",
          "prompt": "La première étape de la méthode est de :",
          "options": [
            "Additionner les deux inéquations",
            "Résoudre chaque inéquation séparément pour obtenir $(S_1)$ et $(S_2)$",
            "Remplacer $y$ par $0$ partout",
            "Tracer une seule droite au hasard"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La méthode de la leçon désigne $(S_1)$ et $(S_2)$ les ensembles de solutions de chaque inéquation, avant de les combiner."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q3",
          "type": "mcq",
          "prompt": "L'ensemble des solutions d'un système d'inéquations est :",
          "options": [
            "La réunion de $(S_1)$ et de $(S_2)$",
            "La différence de $(S_1)$ et de $(S_2)$",
            "Le produit de $(S_1)$ et de $(S_2)$",
            "L'intersection de $(S_1)$ et de $(S_2)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la méthode énoncée dans la leçon : l'ensemble des solutions du système est l'intersection des ensembles de solutions des inéquations."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q4",
          "type": "mcq",
          "prompt": "L'ensemble $(H_1)$ des solutions de $2x - y + 1 < 0$ est le demi-plan :",
          "options": [
            "Fermé contenant le point $O$",
            "Ouvert contenant le point $O$",
            "Ouvert ne contenant pas le point $O$",
            "Fermé ne contenant pas le point $O$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le test donne $1 > 0$, contraire à l'inégalité stricte demandée : $(H_1)$ est le demi-plan ouvert de frontière $(D_1)$ ne contenant pas $O$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q5",
          "type": "mcq",
          "prompt": "L'ensemble $(H_2)$ des solutions de $x - 2y + 4 \\geq 0$ est le demi-plan :",
          "options": [
            "Ouvert contenant le point $O$",
            "Fermé contenant le point $O$",
            "Ouvert ne contenant pas le point $O$",
            "Fermé ne contenant pas le point $O$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le couple $(0 ; 0)$ vérifie l'inégalité large : $(H_2)$ est le demi-plan fermé de frontière $(D_2)$ contenant $O$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p06_q6",
          "type": "mcq",
          "prompt": "Pour le système de fixation, l'ensemble des solutions $(H)$ est :",
          "options": [
            "$(H_1)$ seulement",
            "$(H_2)$ seulement",
            "L'intersection de $(H_1)$ et de $(H_2)$",
            "La réunion de $(H_1)$ et de $(H_2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution du système est l'intersection $(H)$ de $(H_1)$ et de $(H_2)$, comme le conclut la correction de la leçon."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07",
      "order": 7,
      "title": "Modéliser un problème par un système : le jeu d'awalé",
      "summary": "Traduire un énoncé en système de deux équations, le résoudre et conclure dans le contexte du problème.",
      "conceptExplanation": "Situation complexe de la leçon : Willy et Kévin jouent 26 matchs d'awalé, sans match nul. Quand Willy gagne une partie, il marque 5 points ; quand Kévin gagne une partie, il marque 8 points. Ils terminent avec le même nombre de points.\nModélisation : soit $x$ le nombre de parties gagnées par Willy et $y$ celui de Kévin ; $x$ et $y$ sont des entiers naturels non nuls. Le nombre total de matchs donne $x + y = 26$ et l'égalité des points donne $5x = 8y$, c'est-à-dire $5x - 8y = 0$.\nRésolution par combinaison : on multiplie la première équation par $-5$ et on additionne, ce qui donne $-13y = -130$, donc $y = 10$ ; puis $x + 10 = 26$ donne $x = 16$.",
      "keyRule": "Face à un problème concret : choisir les inconnues, traduire chaque information par une équation, résoudre le système, puis répondre par une phrase dans le contexte.",
      "formulas": [
        {
          "name": "Le système du problème",
          "formula": "\\begin{cases} x + y = 26 \\\\ 5x - 8y = 0 \\end{cases}",
          "note": "$x$ pour Willy, $y$ pour Kévin."
        }
      ],
      "workedExample": {
        "title": "Les parties gagnées par Willy et Kévin (situation complexe)",
        "statement": "Willy et Kévin livrent 26 matchs sans nul. Une partie gagnée rapporte 5 points à Willy et 8 points à Kévin. Ils terminent à égalité de points. Détermine le nombre de parties gagnées par chacun.",
        "methodSteps": [
          "On modélise : $x$ parties gagnées par Willy, $y$ par Kévin, avec $x + y = 26$ et $5x = 8y$.",
          "Le système s'écrit $x + y = 26$ et $5x - 8y = 0$ ; on multiplie la première équation par $-5$ et on additionne : $-13y = -130$, donc $y = 10$.",
          "On remplace dans $x + y = 26$ : $x + 10 = 26$, donc $x = 16$."
        ],
        "conclusion": "Willy a gagné 16 parties et Kévin en a gagné 10."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Modéliser par un système",
          "stepTheme": "Modéliser par un système",
          "stepBadge": "Modéliser par un système",
          "paragraphText": "• Modéliser, c'est choisir des inconnues et traduire les informations de l'énoncé par des équations.\nIci, on pose $x$ le nombre de parties gagnées par Willy et $y$ celui gagné par Kévin.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q1",
            "type": "mcq",
            "prompt": "Dans la modélisation de la leçon, $x$ et $y$ représentent :",
            "options": [
              "Les points marqués par Willy et Kévin",
              "Le nombre de parties gagnées par Willy et par Kévin",
              "Le nombre de spectateurs et de matchs",
              "Les points par partie de chaque joueur"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon pose : $x$ le nombre de jeux gagnés par Willy et $y$ le nombre de jeux gagnés par Kévin, entiers naturels non nuls."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Traduire le nombre total de matchs",
          "stepTheme": "Traduire le nombre total de matchs",
          "stepBadge": "Traduire le nombre total de matchs",
          "paragraphText": "Les deux joueurs livrent 26 matchs au total, sans match nul : chaque match est gagné par l'un ou par l'autre.\nLe nombre de parties gagnées par Willy plus celui de Kévin vaut donc 26.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q2",
            "type": "mcq",
            "prompt": "Le nombre total de matchs se traduit par :",
            "options": [
              "$x - y = 26$",
              "$5x + 8y = 26$",
              "$x + y = 26$",
              "$xy = 26$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chaque match a un vainqueur : $x + y = 26$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Traduire l'égalité des points",
          "stepTheme": "Traduire l'égalité des points",
          "stepBadge": "Traduire l'égalité des points",
          "paragraphText": "Willy marque 5 points par partie gagnée, soit $5x$ points au total ; Kévin en marque 8 par partie gagnée, soit $8y$ points.\nIls terminent à égalité : ces deux totaux sont égaux.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q3",
            "type": "mcq",
            "prompt": "L'égalité des points se traduit par :",
            "options": [
              "$5x = 8y$",
              "$x = y$",
              "$5 + x = 8 + y$",
              "$8x = 5y$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le total de Willy est $5x$ et celui de Kévin est $8y$ : l'égalité s'écrit $5x = 8y$, soit $5x - 8y = 0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Résoudre le système du problème",
          "stepTheme": "Résoudre le système du problème",
          "stepBadge": "Résoudre le système du problème",
          "paragraphText": "Par combinaison : on multiplie $x + y = 26$ par $-5$, ce qui donne $-5x - 5y = -130$, puis on additionne avec $5x - 8y = 0$.\nLes termes en $x$ s'éliminent et il reste une équation en $y$ seul.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q4",
            "type": "mcq",
            "prompt": "La combinaison donne pour $y$ :",
            "options": [
              "$y = 16$",
              "$y = 13$",
              "$y = 26$",
              "$y = 10$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On obtient $-13y = -130$, donc $y = 10$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer l'autre inconnue",
          "stepTheme": "Calculer l'autre inconnue",
          "stepBadge": "Calculer l'autre inconnue",
          "paragraphText": "Connaissant $y = 10$, on utilise l'équation la plus simple, $x + y = 26$.\nOn obtient $x + 10 = 26$, donc $x = 16$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q5",
            "type": "mcq",
            "prompt": "Le nombre de parties gagnées par Willy est :",
            "options": [
              "$10$",
              "$16$",
              "$26$",
              "$13$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $x = 26 - 10 = 16$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Conclure dans le contexte",
          "stepTheme": "Conclure dans le contexte",
          "stepBadge": "Conclure dans le contexte",
          "paragraphText": "La résolution ne suffit pas : il faut répondre à la question posée, avec les noms des joueurs.\nWilly a gagné 16 parties et Kévin en a gagné 10 ; contrôle : 16 parties à 5 points et 10 parties à 8 points donnent bien le même total.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q6",
            "type": "mcq",
            "prompt": "La conclusion correcte de la situation complexe est :",
            "options": [
              "Willy a gagné 10 parties et Kévin 16",
              "Willy a gagné 16 parties et Kévin 10",
              "Les deux ont gagné 13 parties",
              "Willy a gagné 26 parties et Kévin 0"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon conclut : Willy a gagné 16 parties et Kévin en a gagné 10."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q1",
          "type": "mcq",
          "prompt": "Dans la modélisation de la leçon, $x$ et $y$ représentent :",
          "options": [
            "Les points marqués par Willy et Kévin",
            "Le nombre de parties gagnées par Willy et par Kévin",
            "Le nombre de spectateurs et de matchs",
            "Les points par partie de chaque joueur"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon pose : $x$ le nombre de jeux gagnés par Willy et $y$ le nombre de jeux gagnés par Kévin, entiers naturels non nuls."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q2",
          "type": "mcq",
          "prompt": "Le nombre total de matchs se traduit par :",
          "options": [
            "$x - y = 26$",
            "$5x + 8y = 26$",
            "$x + y = 26$",
            "$xy = 26$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chaque match a un vainqueur : $x + y = 26$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q3",
          "type": "mcq",
          "prompt": "L'égalité des points se traduit par :",
          "options": [
            "$5x = 8y$",
            "$x = y$",
            "$5 + x = 8 + y$",
            "$8x = 5y$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le total de Willy est $5x$ et celui de Kévin est $8y$ : l'égalité s'écrit $5x = 8y$, soit $5x - 8y = 0$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q4",
          "type": "mcq",
          "prompt": "La combinaison donne pour $y$ :",
          "options": [
            "$y = 16$",
            "$y = 13$",
            "$y = 26$",
            "$y = 10$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On obtient $-13y = -130$, donc $y = 10$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q5",
          "type": "mcq",
          "prompt": "Le nombre de parties gagnées par Willy est :",
          "options": [
            "$10$",
            "$16$",
            "$26$",
            "$13$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $x = 26 - 10 = 16$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p07_q6",
          "type": "mcq",
          "prompt": "La conclusion correcte de la situation complexe est :",
          "options": [
            "Willy a gagné 10 parties et Kévin 16",
            "Willy a gagné 16 parties et Kévin 10",
            "Les deux ont gagné 13 parties",
            "Willy a gagné 26 parties et Kévin 0"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon conclut : Willy a gagné 16 parties et Kévin en a gagné 10."
        }
      ]
    },
    {
      "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08",
      "order": 8,
      "title": "Exercices corrigés : systèmes particuliers",
      "summary": "Appliquer le changement de variables à des systèmes d'exercices, en gérant les contraintes et les solutions multiples.",
      "conceptExplanation": "Les exercices de la leçon appliquent les mêmes méthodes à des systèmes particuliers.\nSystème avec somme et logarithmes : $\\begin{cases} x + y = 2 \\\\ \\ln x + \\ln y = 0 \\end{cases}$ a pour solution $(1 ; 1)$ (réponse A de l'exercice 2 d'application). Système en logarithmes seul : $\\begin{cases} \\ln x + \\ln y = 3 \\\\ 2 \\ln x - \\ln y = 0 \\end{cases}$ a pour solution $(e ; e^2)$ (réponse B).\nExercice de renforcement : $\\begin{cases} -x + y = 1 \\\\ e^x + e^y = 1 \\end{cases}$. De la première équation, $y = x + 1$ ; en remplaçant dans la deuxième, $e^x + e^{x+1} = 1$, c'est-à-dire $e^x (1 + e) = 1$, d'où $x = -\\ln(1 + e)$ et $y = 1 - \\ln(1 + e)$.\nExercice d'approfondissement : $\\begin{cases} \\ln x^2 + 3 \\ln y^2 = 4 \\\\ \\ln x^2 - \\ln y^2 = 4 \\end{cases}$, avec $x \\neq 0$ et $y \\neq 0$, admet quatre couples solutions car $x^2$ et $y^2$ donnent chacun deux signes possibles.",
      "keyRule": "Les exercices mélangent souvent une équation ordinaire et une équation en $\\ln$ ou en $e$ : traiter les contraintes, substituer, et penser aux deux signes quand l'inconnue est au carré.",
      "formulas": [
        {
          "name": "Renforcement : équation clé",
          "formula": "e^x (1 + e) = 1"
        },
        {
          "name": "Approfondissement : changement de variables",
          "formula": "X = \\ln x^2 \\text{ et } Y = \\ln y^2 \\text{ , avec } x \\neq 0 \\text{ et } y \\neq 0"
        }
      ],
      "workedExample": {
        "title": "Le système en $\\ln x^2$ et $\\ln y^2$ (approfondissement)",
        "statement": "Résous dans $\\mathbb{R} \\times \\mathbb{R}$ le système $(S) : \\begin{cases} \\ln x^2 + 3 \\ln y^2 = 4 \\\\ \\ln x^2 - \\ln y^2 = 4 \\end{cases}$.",
        "methodSteps": [
          "Contraintes : $x \\neq 0$ et $y \\neq 0$. On pose $X = \\ln x^2$ et $Y = \\ln y^2$ : le système devient $X + 3Y = 4$ et $X - Y = 4$.",
          "De la deuxième équation, $Y = X - 4$ ; on remplace dans la première : $4X = 16$, donc $X = 4$, puis $Y = 0$.",
          "Retour : $\\ln x^2 = 4$ donne $x^2 = e^4$, donc $x = e^2$ ou $x = -e^2$ ; $\\ln y^2 = 0$ donne $y^2 = 1$, donc $y = 1$ ou $y = -1$."
        ],
        "conclusion": "Les couples solutions sont $(e^2 ; 1)$, $(e^2 ; -1)$, $(-e^2 ; 1)$ et $(-e^2 ; -1)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Des contraintes différentes selon la forme",
          "stepTheme": "Des contraintes différentes selon la forme",
          "stepBadge": "Des contraintes différentes selon la forme",
          "paragraphText": "Pour $\\ln x$, il faut $x > 0$ ; pour $\\ln x^2$, il suffit que $x \\neq 0$, car $x^2$ est alors strictement positif.\nLa leçon donne, pour le système en $\\ln x^2$ et $\\ln y^2$, les contraintes $x \\neq 0$ et $y \\neq 0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q1",
            "type": "mcq",
            "prompt": "Pour le système en $\\ln x^2$ et $\\ln y^2$, les contraintes sont :",
            "options": [
              "$x > 0$ et $y > 0$",
              "$x \\neq 0$ et $y \\neq 0$",
              "$x \\geq 0$ et $y \\geq 0$",
              "Aucune contrainte"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il faut $x^2 > 0$ et $y^2 > 0$, c'est-à-dire $x \\neq 0$ et $y \\neq 0$ : des valeurs négatives de $x$ et $y$ sont donc possibles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le système somme et logarithmes",
          "stepTheme": "Le système somme et logarithmes",
          "stepBadge": "Le système somme et logarithmes",
          "paragraphText": "Exercice 2 d'application : le système $\\begin{cases} x + y = 2 \\\\ \\ln x + \\ln y = 0 \\end{cases}$.\nLe couple $(1 ; 1)$ vérifie les deux équations : la somme vaut $2$ et $\\ln 1 + \\ln 1 = 0$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q2",
            "type": "mcq",
            "prompt": "La solution du système $\\begin{cases} x + y = 2 \\\\ \\ln x + \\ln y = 0 \\end{cases}$ est :",
            "options": [
              "$(3 ; -1)$",
              "$(e ; e - 1)$",
              "$(1 ; 1)$",
              "$(2 ; 0)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la réponse A de l'exercice 2 d'application : $(1 ; 1)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le système en logarithmes de l'exercice 2",
          "stepTheme": "Le système en logarithmes de l'exercice 2",
          "stepBadge": "Le système en logarithmes de l'exercice 2",
          "paragraphText": "Exercice 2 d'application : $\\begin{cases} \\ln x + \\ln y = 3 \\\\ 2 \\ln x - \\ln y = 0 \\end{cases}$.\nLa deuxième équation donne $\\ln y = 2 \\ln x$ ; en reportant dans la première, $3 \\ln x = 3$, donc $\\ln x = 1$ et $\\ln y = 2$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q3",
            "type": "mcq",
            "prompt": "La solution de ce système est :",
            "options": [
              "$(1 ; 2)$",
              "$(e ; e^2)$",
              "$(e^2 ; e)$",
              "$(e^3 ; 1)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On obtient $x = e$ et $y = e^2$ : c'est la réponse B de l'exercice 2 d'application."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le renforcement : tirer $y$ de la première équation",
          "stepTheme": "Le renforcement : tirer $y$ de la première équation",
          "stepBadge": "Le renforcement : tirer $y$ de la première équation",
          "paragraphText": "Dans le système de renforcement, la première équation $-x + y = 1$ donne $y = x + 1$.\nOn remplace $y$ par $x + 1$ dans $e^x + e^y = 1$ : on obtient $e^x + e^{x+1} = 1$, et comme $e^{x+1} = e \\times e^x$, cela donne $e^x (1 + e) = 1$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q4",
            "type": "mcq",
            "prompt": "En utilisant les deux équations du renforcement, on justifie que :",
            "options": [
              "$e^x (1 + e) = 1$",
              "$e^x (1 - e) = 1$",
              "$e^y (1 + e) = 1$",
              "$e^x + e = 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la question 1 de l'exercice de renforcement : $e^x + e \\times e^x = 1$ se factorise en $e^x (1 + e) = 1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le couple solution du renforcement",
          "stepTheme": "Le couple solution du renforcement",
          "stepBadge": "Le couple solution du renforcement",
          "paragraphText": "De $e^x (1 + e) = 1$, on tire, en passant au logarithme, $x = -\\ln(1 + e)$.\nComme $y = x + 1$, on obtient $y = 1 - \\ln(1 + e)$.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q5",
            "type": "mcq",
            "prompt": "Le couple solution du système de renforcement est :",
            "options": [
              "$(-\\ln(1 + e) ; 1 - \\ln(1 + e))$",
              "$(\\ln(1 + e) ; 1 + \\ln(1 + e))$",
              "$(-\\ln(1 + e) ; \\ln(1 + e))$",
              "$(1 - \\ln(1 + e) ; -\\ln(1 + e))$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La correction donne la solution $(-\\ln(1 + e) ; 1 - \\ln(1 + e))$, dans l'ordre $(x ; y)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Oublier les solutions négatives",
          "stepTheme": "Oublier les solutions négatives",
          "stepBadge": "Oublier les solutions négatives",
          "paragraphText": "Piège de l'approfondissement : de $x^2 = e^4$, on tire deux valeurs, $x = e^2$ et $x = -e^2$ ; de même $y^2 = 1$ donne $y = 1$ et $y = -1$.\nNe garder que les valeurs positives ferait perdre trois des quatre couples solutions.",
          "exercise": {
            "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q6",
            "type": "mcq",
            "prompt": "Le système en $\\ln x^2$ et $\\ln y^2$ admet :",
            "options": [
              "Un seul couple solution",
              "Deux couples solutions",
              "Quatre couples solutions",
              "Aucun couple solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Deux signes pour $x$ et deux signes pour $y$ : $(e^2 ; 1)$, $(e^2 ; -1)$, $(-e^2 ; 1)$ et $(-e^2 ; -1)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q1",
          "type": "mcq",
          "prompt": "Pour le système en $\\ln x^2$ et $\\ln y^2$, les contraintes sont :",
          "options": [
            "$x > 0$ et $y > 0$",
            "$x \\neq 0$ et $y \\neq 0$",
            "$x \\geq 0$ et $y \\geq 0$",
            "Aucune contrainte"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il faut $x^2 > 0$ et $y^2 > 0$, c'est-à-dire $x \\neq 0$ et $y \\neq 0$ : des valeurs négatives de $x$ et $y$ sont donc possibles."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q2",
          "type": "mcq",
          "prompt": "La solution du système $\\begin{cases} x + y = 2 \\\\ \\ln x + \\ln y = 0 \\end{cases}$ est :",
          "options": [
            "$(3 ; -1)$",
            "$(e ; e - 1)$",
            "$(1 ; 1)$",
            "$(2 ; 0)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la réponse A de l'exercice 2 d'application : $(1 ; 1)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q3",
          "type": "mcq",
          "prompt": "La solution de ce système est :",
          "options": [
            "$(1 ; 2)$",
            "$(e ; e^2)$",
            "$(e^2 ; e)$",
            "$(e^3 ; 1)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On obtient $x = e$ et $y = e^2$ : c'est la réponse B de l'exercice 2 d'application."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q4",
          "type": "mcq",
          "prompt": "En utilisant les deux équations du renforcement, on justifie que :",
          "options": [
            "$e^x (1 + e) = 1$",
            "$e^x (1 - e) = 1$",
            "$e^y (1 + e) = 1$",
            "$e^x + e = 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la question 1 de l'exercice de renforcement : $e^x + e \\times e^x = 1$ se factorise en $e^x (1 + e) = 1$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q5",
          "type": "mcq",
          "prompt": "Le couple solution du système de renforcement est :",
          "options": [
            "$(-\\ln(1 + e) ; 1 - \\ln(1 + e))$",
            "$(\\ln(1 + e) ; 1 + \\ln(1 + e))$",
            "$(-\\ln(1 + e) ; \\ln(1 + e))$",
            "$(1 - \\ln(1 + e) ; -\\ln(1 + e))$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La correction donne la solution $(-\\ln(1 + e) ; 1 - \\ln(1 + e))$, dans l'ordre $(x ; y)$."
        },
        {
          "id": "terminale_a1_maths_numerique_l07_systemes_lineaires_p08_q6",
          "type": "mcq",
          "prompt": "Le système en $\\ln x^2$ et $\\ln y^2$ admet :",
          "options": [
            "Un seul couple solution",
            "Deux couples solutions",
            "Quatre couples solutions",
            "Aucun couple solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Deux signes pour $x$ et deux signes pour $y$ : $(e^2 ; 1)$, $(e^2 ; -1)$, $(-e^2 ; 1)$ et $(-e^2 ; -1)$."
        }
      ]
    }
  ]
};
