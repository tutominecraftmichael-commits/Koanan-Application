import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1A-Maths leçon-01 Equation et inéquation.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_L01_EQUATIONS_INEQUATIONS: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l01_equations_inequations",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 1,
  "title": "Leçon 1 : Équations et inéquations du second degré",
  "summary": "Polynôme du second degré, discriminant, résolution de $ax^2+bx+c=0$, factorisation, signe d'un polynôme, inéquations et équations rationnelles.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "1A-Maths leçon-01 Equation et inéquation.pdf",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01",
      "order": 1,
      "title": "Le polynôme du second degré",
      "summary": "La forme $ax^2+bx+c$ et ses coefficients.",
      "conceptExplanation": "Un polynôme du second degré est une expression de la forme $ax^2+bx+c$, où $a$, $b$ et $c$ sont des nombres réels avec $a\\neq 0$.\n\n- $a$ est le coefficient du terme de degré 2 (devant $x^2$) ;\n- $b$ est le coefficient du terme de degré 1 (devant $x$) ;\n- $c$ est le terme constant (degré 0).\n\nExemples :\n- $x^2+4x+3$ : $a=1$, $b=4$, $c=3$ ;\n- $4x^2$ : $a=4$, $b=0$, $c=0$ ;\n- $3x^2-1$ : $a=3$, $b=0$, $c=-1$ ;\n- $-4x^2+x+10$ : $a=-4$, $b=1$, $c=10$.\n\nAttention : un coefficient absent vaut $0$, et le signe fait partie du coefficient.",
      "keyRule": "Polynôme du second degré : $ax^2+bx+c$ avec $a\\neq 0$. Un terme absent a un coefficient nul ; le signe appartient au coefficient.",
      "formulas": [],
      "workedExample": {
        "title": "Lire les coefficients",
        "statement": "Donne $a$, $b$ et $c$ pour $5x^2-4$.",
        "methodSteps": [
          "Devant $x^2$ : $a=5$.",
          "Il n'y a pas de terme en $x$ : $b=0$. Le terme constant est $c=-4$."
        ],
        "conclusion": "$a=5$, $b=0$, $c=-4$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La forme du polynôme",
          "stepTheme": "La forme du polynôme",
          "stepBadge": "La forme du polynôme",
          "paragraphText": "Un polynôme du second degré s'écrit $ax^2+bx+c$ avec $a\\neq 0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces expressions est un polynôme du second degré ?",
            "options": [
              "$2x+5$",
              "$x^3+x$",
              "$3x^2-1$",
              "$\\dfrac{1}{x}+2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faut un terme en $x^2$ et aucune puissance plus grande."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Pourquoi $a\\neq 0$",
          "stepTheme": "Pourquoi $a\\neq 0$",
          "stepBadge": "Pourquoi $a\\neq 0$",
          "paragraphText": "Si $a=0$, il ne reste que $bx+c$ : ce n'est plus un polynôme du second degré.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q2",
            "type": "mcq",
            "prompt": "Pourquoi exige-t-on $a\\neq 0$ dans $ax^2+bx+c$ ?",
            "options": [
              "Sinon il n'y a plus de terme en $x^2$",
              "Sinon $b$ serait nul",
              "Sinon $c$ serait négatif",
              "Sinon le polynôme serait positif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Avec $a=0$, on obtient un polynôme du premier degré."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Lire $a$",
          "stepTheme": "Lire $a$",
          "stepBadge": "Lire $a$",
          "paragraphText": "Dans $-4x^2+x+10$, le coefficient devant $x^2$ est $a=-4$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q3",
            "type": "mcq",
            "prompt": "Quel est le coefficient $a$ de $-4x^2+x+10$ ?",
            "options": [
              "$4$",
              "$1$",
              "$10$",
              "$-4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le signe moins fait partie du coefficient."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un terme absent",
          "stepTheme": "Un terme absent",
          "stepBadge": "Un terme absent",
          "paragraphText": "Dans $5x^2-4$, il n'y a pas de terme en $x$ : $b=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q4",
            "type": "mcq",
            "prompt": "Quel est le coefficient $b$ de $5x^2-4$ ?",
            "options": [
              "$5$",
              "$0$",
              "$-4$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un terme absent a un coefficient nul."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le terme constant",
          "stepTheme": "Le terme constant",
          "stepBadge": "Le terme constant",
          "paragraphText": "Dans $x^2+3x$, il n'y a pas de nombre seul : $c=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q5",
            "type": "mcq",
            "prompt": "Quel est le terme constant $c$ de $x^2+3x$ ?",
            "options": [
              "$3$",
              "$0$",
              "$1$",
              "$-3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$x^2+3x=x^2+3x+0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Les trois coefficients",
          "stepTheme": "Les trois coefficients",
          "stepBadge": "Les trois coefficients",
          "paragraphText": "Pour $-10x^2$ : $a=-10$, $b=0$, $c=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q6",
            "type": "mcq",
            "prompt": "Quels sont les coefficients de $-10x^2$ ?",
            "options": [
              "$a=10$, $b=0$, $c=0$",
              "$a=0$, $b=-10$, $c=0$",
              "$a=-10$, $b=1$, $c=0$",
              "$a=-10$, $b=0$, $c=0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Seul le terme en $x^2$ est présent."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L'ordre des termes",
          "stepTheme": "L'ordre des termes",
          "stepBadge": "L'ordre des termes",
          "paragraphText": "L'ordre d'écriture ne change pas les coefficients : $3+x-2x^2$ a pour coefficients $a=-2$, $b=1$, $c=3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q7",
            "type": "mcq",
            "prompt": "Quel est le coefficient $a$ de $3+x-2x^2$ ?",
            "options": [
              "$-2$",
              "$3$",
              "$1$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$a$ est toujours le coefficient de $x^2$, quelle que soit sa place."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces expressions est un polynôme du second degré ?",
          "options": [
            "$2x+5$",
            "$x^3+x$",
            "$3x^2-1$",
            "$\\dfrac{1}{x}+2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faut un terme en $x^2$ et aucune puissance plus grande."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q2",
          "type": "mcq",
          "prompt": "Pourquoi exige-t-on $a\\neq 0$ dans $ax^2+bx+c$ ?",
          "options": [
            "Sinon il n'y a plus de terme en $x^2$",
            "Sinon $b$ serait nul",
            "Sinon $c$ serait négatif",
            "Sinon le polynôme serait positif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Avec $a=0$, on obtient un polynôme du premier degré."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q3",
          "type": "mcq",
          "prompt": "Quel est le coefficient $a$ de $-4x^2+x+10$ ?",
          "options": [
            "$4$",
            "$1$",
            "$10$",
            "$-4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le signe moins fait partie du coefficient."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q4",
          "type": "mcq",
          "prompt": "Quel est le coefficient $b$ de $5x^2-4$ ?",
          "options": [
            "$5$",
            "$0$",
            "$-4$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un terme absent a un coefficient nul."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q5",
          "type": "mcq",
          "prompt": "Quel est le terme constant $c$ de $x^2+3x$ ?",
          "options": [
            "$3$",
            "$0$",
            "$1$",
            "$-3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$x^2+3x=x^2+3x+0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q6",
          "type": "mcq",
          "prompt": "Quels sont les coefficients de $-10x^2$ ?",
          "options": [
            "$a=10$, $b=0$, $c=0$",
            "$a=0$, $b=-10$, $c=0$",
            "$a=-10$, $b=1$, $c=0$",
            "$a=-10$, $b=0$, $c=0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Seul le terme en $x^2$ est présent."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p01_q7",
          "type": "mcq",
          "prompt": "Quel est le coefficient $a$ de $3+x-2x^2$ ?",
          "options": [
            "$-2$",
            "$3$",
            "$1$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$a$ est toujours le coefficient de $x^2$, quelle que soit sa place."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02",
      "order": 2,
      "title": "Le discriminant",
      "summary": "Le nombre $\\Delta=b^2-4ac$.",
      "conceptExplanation": "Pour l'équation $ax^2+bx+c=0$ (avec $a\\neq 0$), on appelle discriminant le nombre réel :\n$$\\Delta=b^2-4ac.$$\nC'est aussi le discriminant du polynôme $ax^2+bx+c$.\n\nExemples :\n- $x^2+4x+3$ : $\\Delta=4^2-4\\times1\\times3=16-12=4$ ;\n- $2x^2-3x+1$ : $\\Delta=(-3)^2-4\\times2\\times1=9-8=1$ ;\n- $x^2-4x+4$ : $\\Delta=(-4)^2-4\\times1\\times4=16-16=0$ ;\n- $x^2+x+1$ : $\\Delta=1^2-4\\times1\\times1=1-4=-3$.\n\nAttention aux signes : $(-3)^2=9$ (et non $-9$), et si $a$ ou $c$ est négatif, $-4ac$ peut devenir positif.",
      "keyRule": "$\\Delta=b^2-4ac$. Mettre $b$ entre parenthèses quand il est négatif : $(-3)^2=9$.",
      "formulas": [],
      "workedExample": {
        "title": "Calculer un discriminant",
        "statement": "Calcule $\\Delta$ pour $3x^2-x+2$.",
        "methodSteps": [
          "$a=3$, $b=-1$, $c=2$.",
          "$\\Delta=(-1)^2-4\\times3\\times2=1-24=-23$."
        ],
        "conclusion": "$\\Delta=-23$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "Le discriminant de $ax^2+bx+c$ est $\\Delta=b^2-4ac$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q1",
            "type": "mcq",
            "prompt": "Quelle est la formule du discriminant ?",
            "options": [
              "$\\Delta=a^2-4bc$",
              "$\\Delta=b^2+4ac$",
              "$\\Delta=b^2-4ac$",
              "$\\Delta=b-4ac$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est $b$ qu'on élève au carré."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un premier calcul",
          "stepTheme": "Un premier calcul",
          "stepBadge": "Un premier calcul",
          "paragraphText": "Pour $x^2+4x+3$ : $\\Delta=4^2-4\\times1\\times3=16-12=4$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q2",
            "type": "mcq",
            "prompt": "Quel est le discriminant de $x^2+4x+3$ ?",
            "options": [
              "$28$",
              "$-4$",
              "$16$",
              "$4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$16-12=4$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Avec $b$ négatif",
          "stepTheme": "Avec $b$ négatif",
          "stepBadge": "Avec $b$ négatif",
          "paragraphText": "Pour $2x^2-3x+1$ : $\\Delta=(-3)^2-4\\times2\\times1=9-8=1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q3",
            "type": "mcq",
            "prompt": "Quel est le discriminant de $2x^2-3x+1$ ?",
            "options": [
              "$-17$",
              "$17$",
              "$1$",
              "$-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(-3)^2=9$, puis $9-8=1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un discriminant nul",
          "stepTheme": "Un discriminant nul",
          "stepBadge": "Un discriminant nul",
          "paragraphText": "Pour $x^2-4x+4$ : $\\Delta=(-4)^2-4\\times1\\times4=16-16=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q4",
            "type": "mcq",
            "prompt": "Quel est le discriminant de $x^2-4x+4$ ?",
            "options": [
              "$32$",
              "$0$",
              "$-32$",
              "$8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$16-16=0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un discriminant négatif",
          "stepTheme": "Un discriminant négatif",
          "stepBadge": "Un discriminant négatif",
          "paragraphText": "Pour $3x^2-x+2$ : $\\Delta=(-1)^2-4\\times3\\times2=1-24=-23$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q5",
            "type": "mcq",
            "prompt": "Quel est le discriminant de $3x^2-x+2$ ?",
            "options": [
              "$-23$",
              "$25$",
              "$23$",
              "$-25$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$1-24=-23$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Avec $a$ négatif",
          "stepTheme": "Avec $a$ négatif",
          "stepBadge": "Avec $a$ négatif",
          "paragraphText": "Pour $-x^2+x+2$ : $\\Delta=1^2-4\\times(-1)\\times2=1+8=9$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q6",
            "type": "mcq",
            "prompt": "Quel est le discriminant de $-x^2+x+2$ ?",
            "options": [
              "$9$",
              "$-7$",
              "$7$",
              "$-9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-4\\times(-1)\\times2=+8$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Le carré d'un négatif",
          "stepTheme": "Le carré d'un négatif",
          "stepBadge": "Le carré d'un négatif",
          "paragraphText": "Le carré d'un nombre négatif est positif : $(-5)^2=25$, alors que $-5^2=-25$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q7",
            "type": "mcq",
            "prompt": "Pour $2x^2-5x+3$, que vaut $b^2$ ?",
            "options": [
              "$-25$",
              "$25$",
              "$10$",
              "$-10$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$b=-5$ et $(-5)^2=25$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q1",
          "type": "mcq",
          "prompt": "Quelle est la formule du discriminant ?",
          "options": [
            "$\\Delta=a^2-4bc$",
            "$\\Delta=b^2+4ac$",
            "$\\Delta=b^2-4ac$",
            "$\\Delta=b-4ac$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est $b$ qu'on élève au carré."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q2",
          "type": "mcq",
          "prompt": "Quel est le discriminant de $x^2+4x+3$ ?",
          "options": [
            "$28$",
            "$-4$",
            "$16$",
            "$4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$16-12=4$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q3",
          "type": "mcq",
          "prompt": "Quel est le discriminant de $2x^2-3x+1$ ?",
          "options": [
            "$-17$",
            "$17$",
            "$1$",
            "$-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(-3)^2=9$, puis $9-8=1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q4",
          "type": "mcq",
          "prompt": "Quel est le discriminant de $x^2-4x+4$ ?",
          "options": [
            "$32$",
            "$0$",
            "$-32$",
            "$8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$16-16=0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q5",
          "type": "mcq",
          "prompt": "Quel est le discriminant de $3x^2-x+2$ ?",
          "options": [
            "$-23$",
            "$25$",
            "$23$",
            "$-25$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$1-24=-23$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q6",
          "type": "mcq",
          "prompt": "Quel est le discriminant de $-x^2+x+2$ ?",
          "options": [
            "$9$",
            "$-7$",
            "$7$",
            "$-9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-4\\times(-1)\\times2=+8$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p02_q7",
          "type": "mcq",
          "prompt": "Pour $2x^2-5x+3$, que vaut $b^2$ ?",
          "options": [
            "$-25$",
            "$25$",
            "$10$",
            "$-10$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$b=-5$ et $(-5)^2=25$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03",
      "order": 3,
      "title": "Résoudre $ax^2+bx+c=0$",
      "summary": "Le signe de $\\Delta$ donne le nombre de solutions.",
      "conceptExplanation": "Pour résoudre $ax^2+bx+c=0$ ($a\\neq 0$), on calcule $\\Delta=b^2-4ac$ :\n- si $\\Delta<0$ : aucune solution dans $\\mathbb R$, $S=\\varnothing$ ;\n- si $\\Delta=0$ : une seule solution $x_0=-\\dfrac{b}{2a}$ ;\n- si $\\Delta>0$ : deux solutions distinctes $x_1=\\dfrac{-b-\\sqrt\\Delta}{2a}$ et $x_2=\\dfrac{-b+\\sqrt\\Delta}{2a}$.\n\nLes solutions s'appellent aussi les zéros ou les racines du polynôme.\n\nExemples :\n- $2x^2-5x+3=0$ : $\\Delta=25-24=1$, $x_1=\\dfrac{5-1}{4}=1$, $x_2=\\dfrac{5+1}{4}=\\dfrac32$ ; $S=\\left\\{1\\,;\\dfrac32\\right\\}$ ;\n- $2x^2-4x+2=0$ : $\\Delta=0$, $x_0=\\dfrac{4}{4}=1$ ; $S=\\{1\\}$ ;\n- $x^2-x+7=0$ : $\\Delta=1-28=-27<0$ ; $S=\\varnothing$.\n\nSituation : un terrain de $8$ m sur $5$ m est agrandi de $x$ m de chaque côté pour atteindre $88$ m². On résout $(x+8)(x+5)=88$, soit $x^2+13x-48=0$ : $\\Delta=169+192=361=19^2$, d'où $x=-16$ ou $x=3$. Une longueur est positive : il faut ajouter $3$ m.",
      "keyRule": "$\\Delta<0$ : pas de solution. $\\Delta=0$ : $x_0=-\\dfrac{b}{2a}$. $\\Delta>0$ : $x_{1,2}=\\dfrac{-b\\mp\\sqrt\\Delta}{2a}$.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre une équation",
        "statement": "Résous $x^2-5x+6=0$.",
        "methodSteps": [
          "$\\Delta=(-5)^2-4\\times1\\times6=25-24=1>0$.",
          "$x_1=\\dfrac{5-1}{2}=2$ et $x_2=\\dfrac{5+1}{2}=3$."
        ],
        "conclusion": "$S=\\{2\\,;3\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "$\\Delta$ négatif",
          "stepTheme": "$\\Delta$ négatif",
          "stepBadge": "$\\Delta$ négatif",
          "paragraphText": "Si $\\Delta<0$, l'équation $ax^2+bx+c=0$ n'a aucune solution réelle.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q1",
            "type": "mcq",
            "prompt": "Combien de solutions a $x^2-x+7=0$, dont le discriminant vaut $-27$ ?",
            "options": [
              "Une seule",
              "Deux",
              "Aucune",
              "Une infinité"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\Delta<0$ : $S=\\varnothing$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "$\\Delta$ nul",
          "stepTheme": "$\\Delta$ nul",
          "stepBadge": "$\\Delta$ nul",
          "paragraphText": "Si $\\Delta=0$, l'équation a une seule solution : $x_0=-\\dfrac{b}{2a}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q2",
            "type": "mcq",
            "prompt": "$2x^2-4x+2=0$ a pour discriminant $0$. Quelle est sa solution ?",
            "options": [
              "$-1$",
              "$2$",
              "$4$",
              "$1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x_0=-\\dfrac{-4}{2\\times2}=1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "$\\Delta$ positif",
          "stepTheme": "$\\Delta$ positif",
          "stepBadge": "$\\Delta$ positif",
          "paragraphText": "Si $\\Delta>0$ : $x_1=\\dfrac{-b-\\sqrt\\Delta}{2a}$ et $x_2=\\dfrac{-b+\\sqrt\\Delta}{2a}$.\nPour $2x^2-5x+3=0$, $\\Delta=1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q3",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $2x^2-5x+3=0$ ?",
            "options": [
              "$-1$ et $-\\dfrac32$",
              "$2$ et $3$",
              "$1$ et $\\dfrac32$",
              "$\\dfrac12$ et $3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{5-1}{4}=1$ et $\\dfrac{5+1}{4}=\\dfrac32$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un exemple complet",
          "stepTheme": "Un exemple complet",
          "stepBadge": "Un exemple complet",
          "paragraphText": "$x^2-5x+6=0$ : $\\Delta=25-24=1$, d'où $x_1=2$ et $x_2=3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $x^2-5x+6=0$ ?",
            "options": [
              "$\\{-2\\,;-3\\}$",
              "$\\{1\\,;6\\}$",
              "$\\varnothing$",
              "$\\{2\\,;3\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac{5\\mp1}{2}$ donne $2$ et $3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Racines",
          "stepTheme": "Racines",
          "stepBadge": "Racines",
          "paragraphText": "Les solutions de $ax^2+bx+c=0$ sont appelées les zéros ou les racines du polynôme.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q5",
            "type": "mcq",
            "prompt": "Quels sont les zéros du polynôme $-x^2+5x-4$ ?",
            "options": [
              "$1$ et $4$",
              "$-1$ et $-4$",
              "$1$ et $-4$",
              "$-1$ et $4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\Delta=25-16=9$ ; $x=\\dfrac{-5\\mp3}{-2}$ donne $4$ et $1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le terrain agrandi",
          "stepTheme": "Le terrain agrandi",
          "stepBadge": "Le terrain agrandi",
          "paragraphText": "Agrandir un terrain de $8$ m sur $5$ m de $x$ m de chaque côté pour obtenir $88$ m² donne $x^2+13x-48=0$, dont les solutions sont $-16$ et $3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q6",
            "type": "mcq",
            "prompt": "Combien de mètres faut-il ajouter à chaque côté du terrain ?",
            "options": [
              "$16$ m",
              "$3$ m",
              "$-16$ m",
              "$13$ m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une longueur ne peut pas être négative : on garde $3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une équation sans solution",
          "stepTheme": "Une équation sans solution",
          "stepBadge": "Une équation sans solution",
          "paragraphText": "Un carré n'est jamais négatif : $x^2=-4$ n'a pas de solution, ce que confirme $\\Delta=0-4\\times1\\times4=-16<0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q7",
            "type": "mcq",
            "prompt": "Quelles sont les solutions réelles de $x^2+4=0$ ?",
            "options": [
              "$-2$ et $2$",
              "Il n'y en a aucune",
              "Seulement $2$",
              "Seulement $-2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$x^2=-4$ est impossible : un carré n'est jamais négatif."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q1",
          "type": "mcq",
          "prompt": "Combien de solutions a $x^2-x+7=0$, dont le discriminant vaut $-27$ ?",
          "options": [
            "Une seule",
            "Deux",
            "Aucune",
            "Une infinité"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\Delta<0$ : $S=\\varnothing$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q2",
          "type": "mcq",
          "prompt": "$2x^2-4x+2=0$ a pour discriminant $0$. Quelle est sa solution ?",
          "options": [
            "$-1$",
            "$2$",
            "$4$",
            "$1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x_0=-\\dfrac{-4}{2\\times2}=1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q3",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $2x^2-5x+3=0$ ?",
          "options": [
            "$-1$ et $-\\dfrac32$",
            "$2$ et $3$",
            "$1$ et $\\dfrac32$",
            "$\\dfrac12$ et $3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{5-1}{4}=1$ et $\\dfrac{5+1}{4}=\\dfrac32$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $x^2-5x+6=0$ ?",
          "options": [
            "$\\{-2\\,;-3\\}$",
            "$\\{1\\,;6\\}$",
            "$\\varnothing$",
            "$\\{2\\,;3\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac{5\\mp1}{2}$ donne $2$ et $3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q5",
          "type": "mcq",
          "prompt": "Quels sont les zéros du polynôme $-x^2+5x-4$ ?",
          "options": [
            "$1$ et $4$",
            "$-1$ et $-4$",
            "$1$ et $-4$",
            "$-1$ et $4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\Delta=25-16=9$ ; $x=\\dfrac{-5\\mp3}{-2}$ donne $4$ et $1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q6",
          "type": "mcq",
          "prompt": "Combien de mètres faut-il ajouter à chaque côté du terrain ?",
          "options": [
            "$16$ m",
            "$3$ m",
            "$-16$ m",
            "$13$ m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une longueur ne peut pas être négative : on garde $3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p03_q7",
          "type": "mcq",
          "prompt": "Quelles sont les solutions réelles de $x^2+4=0$ ?",
          "options": [
            "$-2$ et $2$",
            "Il n'y en a aucune",
            "Seulement $2$",
            "Seulement $-2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$x^2=-4$ est impossible : un carré n'est jamais négatif."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04",
      "order": 4,
      "title": "Factoriser un polynôme du second degré",
      "summary": "Les racines donnent la forme factorisée.",
      "conceptExplanation": "Pour factoriser $P(x)=ax^2+bx+c$ ($a\\neq0$), on calcule $\\Delta$ :\n- si $\\Delta<0$ : $P$ n'a pas de racine, il n'est pas factorisable ;\n- si $\\Delta=0$ : $P(x)=a(x-x_0)^2$ ;\n- si $\\Delta>0$ : $P(x)=a(x-x_1)(x-x_2)$.\n\nN'oublie pas le coefficient $a$ devant !\n\nExemples :\n- $R(x)=2x^2-4x+2$ : $\\Delta=0$, $x_0=1$, donc $R(x)=2(x-1)^2$ ;\n- $T(x)=-x^2-3x+4$ : $\\Delta=9+16=25$, racines $-4$ et $1$, donc $T(x)=-(x+4)(x-1)$ ;\n- $V(x)=x^2-25$ : racines $-5$ et $5$, donc $V(x)=(x+5)(x-5)$ ;\n- $P(x)=3x^2+2x+1$ : $\\Delta=4-12=-8<0$, $P$ n'est pas factorisable.",
      "keyRule": "$\\Delta>0$ : $P(x)=a(x-x_1)(x-x_2)$. $\\Delta=0$ : $P(x)=a(x-x_0)^2$. $\\Delta<0$ : pas factorisable.",
      "formulas": [],
      "workedExample": {
        "title": "Factoriser",
        "statement": "Factorise $T(x)=-2x^2+x+10$.",
        "methodSteps": [
          "$\\Delta=1+80=81$, $\\sqrt\\Delta=9$.",
          "Racines : $\\dfrac{-1-9}{-4}=\\dfrac52$ et $\\dfrac{-1+9}{-4}=-2$."
        ],
        "conclusion": "$T(x)=-2\\left(x-\\dfrac52\\right)(x+2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Deux racines",
          "stepTheme": "Deux racines",
          "stepBadge": "Deux racines",
          "paragraphText": "Si $\\Delta>0$, alors $P(x)=a(x-x_1)(x-x_2)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q1",
            "type": "mcq",
            "prompt": "Un polynôme de coefficient $a=1$ a pour racines $2$ et $3$. Quelle est sa forme factorisée ?",
            "options": [
              "$(x-2)(x-3)$",
              "$(x+2)(x+3)$",
              "$(x-2)(x+3)$",
              "$(x+2)(x-3)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On écrit $x$ moins chaque racine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une racine double",
          "stepTheme": "Une racine double",
          "stepBadge": "Une racine double",
          "paragraphText": "$R(x)=2x^2-4x+2$ a pour racine double $x_0=1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $2x^2-4x+2$ ?",
            "options": [
              "$(x-1)^2$",
              "$2(x+1)^2$",
              "$(2x-1)^2$",
              "$2(x-1)^2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On garde le coefficient $a=2$ devant."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Avec $a$ négatif",
          "stepTheme": "Avec $a$ négatif",
          "stepBadge": "Avec $a$ négatif",
          "paragraphText": "$T(x)=-x^2-3x+4$ a pour racines $-4$ et $1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q3",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $-x^2-3x+4$ ?",
            "options": [
              "$(x+4)(x-1)$",
              "$-(x-4)(x+1)$",
              "$-(x+4)(x-1)$",
              "$(x-4)(x-1)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$a=-1$ : on n'oublie pas le signe moins devant."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une différence de carrés",
          "stepTheme": "Une différence de carrés",
          "stepBadge": "Une différence de carrés",
          "paragraphText": "$x^2-25$ a pour racines $-5$ et $5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q4",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $x^2-25$ ?",
            "options": [
              "$(x-5)^2$",
              "$(x+25)(x-1)$",
              "$(x+5)(x-5)$",
              "$(x+5)^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On retrouve $a^2-b^2=(a+b)(a-b)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Pas factorisable",
          "stepTheme": "Pas factorisable",
          "stepBadge": "Pas factorisable",
          "paragraphText": "Si $\\Delta<0$, le polynôme n'a pas de racine réelle : il n'est pas factorisable.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q5",
            "type": "mcq",
            "prompt": "$3x^2+2x+1$ a pour discriminant $-8$. Que peut-on dire ?",
            "options": [
              "Il n'est pas factorisable",
              "Il vaut $3(x-1)^2$",
              "Il vaut $(3x+1)(x+1)$",
              "Il a deux racines"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sans racine, pas de forme factorisée."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Un carré parfait",
          "stepTheme": "Un carré parfait",
          "stepBadge": "Un carré parfait",
          "paragraphText": "$x^2-3x+\\dfrac94$ a pour discriminant $9-9=0$ et pour racine $x_0=\\dfrac32$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $x^2-3x+\\dfrac94$ ?",
            "options": [
              "$\\left(x+\\dfrac32\\right)^2$",
              "$(x-3)^2$",
              "$\\left(x-\\dfrac94\\right)^2$",
              "$\\left(x-\\dfrac32\\right)^2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x_0=-\\dfrac{-3}{2}=\\dfrac32$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier $a$",
          "stepTheme": "Ne pas oublier $a$",
          "stepBadge": "Ne pas oublier $a$",
          "paragraphText": "La forme factorisée commence toujours par le coefficient $a$ : $2x^2-5x+3=2(x-1)\\left(x-\\dfrac32\\right)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q7",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures est égale à $2x^2-5x+3$ ?",
            "options": [
              "$(x-1)\\left(x-\\dfrac32\\right)$",
              "$2(x-1)\\left(x-\\dfrac32\\right)$",
              "$2(x+1)\\left(x+\\dfrac32\\right)$",
              "$(x-1)(x-3)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sans le facteur $2$, le coefficient de $x^2$ serait $1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q1",
          "type": "mcq",
          "prompt": "Un polynôme de coefficient $a=1$ a pour racines $2$ et $3$. Quelle est sa forme factorisée ?",
          "options": [
            "$(x-2)(x-3)$",
            "$(x+2)(x+3)$",
            "$(x-2)(x+3)$",
            "$(x+2)(x-3)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On écrit $x$ moins chaque racine."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $2x^2-4x+2$ ?",
          "options": [
            "$(x-1)^2$",
            "$2(x+1)^2$",
            "$(2x-1)^2$",
            "$2(x-1)^2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On garde le coefficient $a=2$ devant."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q3",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $-x^2-3x+4$ ?",
          "options": [
            "$(x+4)(x-1)$",
            "$-(x-4)(x+1)$",
            "$-(x+4)(x-1)$",
            "$(x-4)(x-1)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$a=-1$ : on n'oublie pas le signe moins devant."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q4",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $x^2-25$ ?",
          "options": [
            "$(x-5)^2$",
            "$(x+25)(x-1)$",
            "$(x+5)(x-5)$",
            "$(x+5)^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On retrouve $a^2-b^2=(a+b)(a-b)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q5",
          "type": "mcq",
          "prompt": "$3x^2+2x+1$ a pour discriminant $-8$. Que peut-on dire ?",
          "options": [
            "Il n'est pas factorisable",
            "Il vaut $3(x-1)^2$",
            "Il vaut $(3x+1)(x+1)$",
            "Il a deux racines"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sans racine, pas de forme factorisée."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $x^2-3x+\\dfrac94$ ?",
          "options": [
            "$\\left(x+\\dfrac32\\right)^2$",
            "$(x-3)^2$",
            "$\\left(x-\\dfrac94\\right)^2$",
            "$\\left(x-\\dfrac32\\right)^2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x_0=-\\dfrac{-3}{2}=\\dfrac32$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p04_q7",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures est égale à $2x^2-5x+3$ ?",
          "options": [
            "$(x-1)\\left(x-\\dfrac32\\right)$",
            "$2(x-1)\\left(x-\\dfrac32\\right)$",
            "$2(x+1)\\left(x+\\dfrac32\\right)$",
            "$(x-1)(x-3)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sans le facteur $2$, le coefficient de $x^2$ serait $1$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05",
      "order": 5,
      "title": "Signe et inéquations du second degré",
      "summary": "Le signe de $a$ à l'extérieur des racines.",
      "conceptExplanation": "Signe de $P(x)=ax^2+bx+c$ :\n- si $\\Delta<0$ : $P(x)$ est toujours du signe de $a$ ;\n- si $\\Delta=0$ : $P(x)$ est du signe de $a$ partout, et s'annule en $x_0$ ;\n- si $\\Delta>0$ (racines $x_1<x_2$) : $P(x)$ est du signe de $a$ à l'extérieur des racines et du signe de $-a$ entre les racines.\n\nPour résoudre une inéquation $P(x)>0$, $P(x)\\geq0$, $P(x)<0$ ou $P(x)\\leq0$ :\n1. étudier le signe de $P(x)$ (tableau de signe) ;\n2. lire les intervalles qui conviennent ;\n3. conclure.\n\nExemples :\n- $Q(x)=-x^2+x+2$ : racines $-1$ et $2$, $a=-1<0$, donc $Q(x)<0$ sur $]-\\infty;-1[\\cup]2;+\\infty[$ et $Q(x)>0$ sur $]-1;2[$ ;\n- $-x^2+10x-25\\geq0$ : $\\Delta=0$, $x_0=5$, $P(x)\\leq0$ partout, donc $S=\\{5\\}$ ;\n- $x^2-x+2>0$ : $\\Delta=-7<0$ et $a=1>0$, donc $S=\\mathbb R$.",
      "keyRule": "Signe de $a$ à l'extérieur des racines, signe de $-a$ entre les racines. Si $\\Delta<0$ : toujours du signe de $a$.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre une inéquation",
        "statement": "Résous $-x^2+3x+4>0$.",
        "methodSteps": [
          "$\\Delta=9+16=25$ ; racines $-1$ et $4$.",
          "$a=-1<0$ : le polynôme est positif entre les racines."
        ],
        "conclusion": "$S=]-1\\,;4[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Quand $\\Delta<0$",
          "stepTheme": "Quand $\\Delta<0$",
          "stepBadge": "Quand $\\Delta<0$",
          "paragraphText": "Si $\\Delta<0$, $P(x)$ est toujours du signe de $a$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q1",
            "type": "mcq",
            "prompt": "$x^2-x+2$ a pour discriminant $-7$. Quel est son signe ?",
            "options": [
              "Toujours négatif",
              "Toujours positif",
              "Positif puis négatif",
              "Nul en $x=1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$a=1>0$ et pas de racine."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Entre les racines",
          "stepTheme": "Entre les racines",
          "stepBadge": "Entre les racines",
          "paragraphText": "Si $\\Delta>0$, $P(x)$ est du signe de $-a$ entre les racines.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q2",
            "type": "mcq",
            "prompt": "$-x^2+x+2$ a pour racines $-1$ et $2$. Quel est son signe sur $]-1\\,;2[$ ?",
            "options": [
              "Négatif",
              "Nul",
              "Il change de signe",
              "Positif"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$a=-1$ : entre les racines, signe de $-a$, donc positif."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "À l'extérieur des racines",
          "stepTheme": "À l'extérieur des racines",
          "stepBadge": "À l'extérieur des racines",
          "paragraphText": "$x^2-5x+6$ a pour racines $2$ et $3$ et $a=1>0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q3",
            "type": "mcq",
            "prompt": "Sur quel ensemble $x^2-5x+6>0$ ?",
            "options": [
              "$]-\\infty\\,;2[\\cup]3\\,;+\\infty[$",
              "$]2\\,;3[$",
              "$]-\\infty\\,;2]\\cup[3\\,;+\\infty[$",
              "$]-\\infty\\,;3[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Signe de $a$, donc positif, à l'extérieur des racines."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation",
          "stepTheme": "Une inéquation",
          "stepBadge": "Une inéquation",
          "paragraphText": "$-x^2+3x+4$ a pour racines $-1$ et $4$ et $a=-1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $-x^2+3x+4>0$ ?",
            "options": [
              "$]-\\infty\\,;-1[\\cup]4\\,;+\\infty[$",
              "$[-1\\,;4]$",
              "$]-1\\,;4[$",
              "$\\varnothing$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Entre les racines, le signe est celui de $-a$, donc positif."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Une racine double",
          "stepTheme": "Une racine double",
          "stepBadge": "Une racine double",
          "paragraphText": "$-x^2+10x-25$ a pour discriminant $0$ et pour racine $5$ ; il est négatif partout sauf en $5$ où il est nul.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $-x^2+10x-25\\geq0$ ?",
            "options": [
              "$\\mathbb R$",
              "$\\varnothing$",
              "$]5\\,;+\\infty[$",
              "$\\{5\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Seul $x=5$ donne une valeur positive ou nulle (ici nulle)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Toujours vrai",
          "stepTheme": "Toujours vrai",
          "stepBadge": "Toujours vrai",
          "paragraphText": "$x^2-x+2$ est toujours strictement positif.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $x^2-x+2>0$ ?",
            "options": [
              "$\\varnothing$",
              "$]0\\,;+\\infty[$",
              "$\\mathbb R$",
              "$\\{1\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\Delta<0$ et $a>0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Crochets ouverts ou fermés",
          "stepTheme": "Crochets ouverts ou fermés",
          "stepBadge": "Crochets ouverts ou fermés",
          "paragraphText": "Avec $\\leq$ ou $\\geq$, les racines font partie des solutions (crochets fermés) ; avec $<$ ou $>$, elles n'en font pas partie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q7",
            "type": "mcq",
            "prompt": "$-x^2+3x+4$ a pour racines $-1$ et $4$. Quel est l'ensemble des solutions de $-x^2+3x+4\\leq0$ ?",
            "options": [
              "$]-\\infty\\,;-1[\\cup]4\\,;+\\infty[$",
              "$]-\\infty\\,;-1]\\cup[4\\,;+\\infty[$",
              "$[-1\\,;4]$",
              "$]-1\\,;4[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Inégalité large : on inclut $-1$ et $4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q1",
          "type": "mcq",
          "prompt": "$x^2-x+2$ a pour discriminant $-7$. Quel est son signe ?",
          "options": [
            "Toujours négatif",
            "Toujours positif",
            "Positif puis négatif",
            "Nul en $x=1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$a=1>0$ et pas de racine."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q2",
          "type": "mcq",
          "prompt": "$-x^2+x+2$ a pour racines $-1$ et $2$. Quel est son signe sur $]-1\\,;2[$ ?",
          "options": [
            "Négatif",
            "Nul",
            "Il change de signe",
            "Positif"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$a=-1$ : entre les racines, signe de $-a$, donc positif."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q3",
          "type": "mcq",
          "prompt": "Sur quel ensemble $x^2-5x+6>0$ ?",
          "options": [
            "$]-\\infty\\,;2[\\cup]3\\,;+\\infty[$",
            "$]2\\,;3[$",
            "$]-\\infty\\,;2]\\cup[3\\,;+\\infty[$",
            "$]-\\infty\\,;3[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Signe de $a$, donc positif, à l'extérieur des racines."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $-x^2+3x+4>0$ ?",
          "options": [
            "$]-\\infty\\,;-1[\\cup]4\\,;+\\infty[$",
            "$[-1\\,;4]$",
            "$]-1\\,;4[$",
            "$\\varnothing$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Entre les racines, le signe est celui de $-a$, donc positif."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $-x^2+10x-25\\geq0$ ?",
          "options": [
            "$\\mathbb R$",
            "$\\varnothing$",
            "$]5\\,;+\\infty[$",
            "$\\{5\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Seul $x=5$ donne une valeur positive ou nulle (ici nulle)."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $x^2-x+2>0$ ?",
          "options": [
            "$\\varnothing$",
            "$]0\\,;+\\infty[$",
            "$\\mathbb R$",
            "$\\{1\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\Delta<0$ et $a>0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p05_q7",
          "type": "mcq",
          "prompt": "$-x^2+3x+4$ a pour racines $-1$ et $4$. Quel est l'ensemble des solutions de $-x^2+3x+4\\leq0$ ?",
          "options": [
            "$]-\\infty\\,;-1[\\cup]4\\,;+\\infty[$",
            "$]-\\infty\\,;-1]\\cup[4\\,;+\\infty[$",
            "$[-1\\,;4]$",
            "$]-1\\,;4[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Inégalité large : on inclut $-1$ et $4$."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06",
      "order": 6,
      "title": "Équations et inéquations rationnelles",
      "summary": "$\\dfrac{ax+b}{cx+d}$ : attention à la valeur interdite.",
      "conceptExplanation": "1. Équation $\\dfrac{ax+b}{cx+d}=0$ :\n- chercher la contrainte : $cx+d\\neq0$ (valeur interdite) ;\n- résoudre $ax+b=0$ ;\n- garder la solution seulement si elle respecte la contrainte.\nExemples : $\\dfrac{x-1}{2x-1}=0$ : contrainte $x\\neq\\dfrac12$ ; $x=1$ convient, $S=\\{1\\}$. $\\dfrac{3x-9}{3-x}=0$ : contrainte $x\\neq3$ ; or $3x-9=0$ donne $x=3$, interdit : $S=\\varnothing$.\n\n2. Inéquation $\\dfrac{ax+b}{cx+d}\\leq0$ (ou $\\geq0$) :\n- chercher la contrainte ;\n- dresser le tableau de signe du numérateur, du dénominateur, puis du quotient ;\n- la valeur interdite est toujours exclue (crochet ouvert).\nExemple : $\\dfrac{x-1}{2x-1}\\leq0$ donne $S=\\left]\\dfrac12\\,;1\\right]$.\n\n3. Se ramener à zéro : $\\dfrac{-x+3}{2x-3}\\geq2$ équivaut à $\\dfrac{-x+3}{2x-3}-2\\geq0$, soit $\\dfrac{-5x+9}{2x-3}\\geq0$, d'où $S=\\left]\\dfrac32\\,;\\dfrac95\\right]$.",
      "keyRule": "Toujours poser $cx+d\\neq0$. Une fraction est nulle si son numérateur est nul (et le dénominateur non nul). La valeur interdite est exclue des solutions.",
      "formulas": [],
      "workedExample": {
        "title": "Résoudre une équation rationnelle",
        "statement": "Résous $\\dfrac{-x+3}{2x-3}=2$.",
        "methodSteps": [
          "Contrainte : $x\\neq\\dfrac32$. On se ramène à $\\dfrac{-5x+9}{2x-3}=0$.",
          "$-5x+9=0$ donne $x=\\dfrac95$, qui est différent de $\\dfrac32$."
        ],
        "conclusion": "$S=\\left\\{\\dfrac95\\right\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La contrainte",
          "stepTheme": "La contrainte",
          "stepBadge": "La contrainte",
          "paragraphText": "Dans $\\dfrac{ax+b}{cx+d}$, on doit avoir $cx+d\\neq0$ : on ne divise jamais par $0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q1",
            "type": "mcq",
            "prompt": "Quelle est la valeur interdite de $\\dfrac{x-1}{2x-1}$ ?",
            "options": [
              "$\\dfrac12$",
              "$1$",
              "$-\\dfrac12$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2x-1=0$ pour $x=\\dfrac12$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une fraction nulle",
          "stepTheme": "Une fraction nulle",
          "stepBadge": "Une fraction nulle",
          "paragraphText": "Une fraction est nulle si et seulement si son numérateur est nul (le dénominateur étant non nul).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est la solution de $\\dfrac{x-1}{2x-1}=0$ ?",
            "options": [
              "$1$",
              "$\\dfrac12$",
              "$-1$",
              "Aucune"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x-1=0$ donne $x=1$, qui n'est pas interdit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une solution interdite",
          "stepTheme": "Une solution interdite",
          "stepBadge": "Une solution interdite",
          "paragraphText": "$\\dfrac{3x-9}{3-x}=0$ : le numérateur s'annule en $x=3$, mais $3$ est interdit.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\dfrac{3x-9}{3-x}=0$ ?",
            "options": [
              "$\\{3\\}$",
              "$\\varnothing$",
              "$\\{-3\\}$",
              "$\\{9\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La seule valeur candidate est interdite."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Se ramener à zéro",
          "stepTheme": "Se ramener à zéro",
          "stepBadge": "Se ramener à zéro",
          "paragraphText": "$\\dfrac{-x+3}{2x-3}-2=\\dfrac{-x+3-2(2x-3)}{2x-3}=\\dfrac{-5x+9}{2x-3}$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q4",
            "type": "mcq",
            "prompt": "Comment s'écrit $\\dfrac{-x+3}{2x-3}-2$ sous la forme d'une seule fraction ?",
            "options": [
              "$\\dfrac{-x+1}{2x-3}$",
              "$\\dfrac{-3x+6}{2x-3}$",
              "$\\dfrac{-5x+9}{2x-3}$",
              "$\\dfrac{-5x-3}{2x-3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-x+3-4x+6=-5x+9$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation",
          "stepTheme": "Une inéquation",
          "stepBadge": "Une inéquation",
          "paragraphText": "Le tableau de signe de $\\dfrac{x-1}{2x-1}$ montre qu'il est négatif ou nul sur $\\left]\\dfrac12\\,;1\\right]$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q5",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\dfrac{x-1}{2x-1}\\leq0$ ?",
            "options": [
              "$\\left[\\dfrac12\\,;1\\right]$",
              "$\\left]-\\infty\\,;\\dfrac12\\right[$",
              "$]1\\,;+\\infty[$",
              "$\\left]\\dfrac12\\,;1\\right]$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$\\dfrac12$ est interdit (crochet ouvert), $1$ annule la fraction (crochet fermé)."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une inéquation ramenée",
          "stepTheme": "Une inéquation ramenée",
          "stepBadge": "Une inéquation ramenée",
          "paragraphText": "$\\dfrac{-x+3}{2x-3}\\geq2$ équivaut à $\\dfrac{-5x+9}{2x-3}\\geq0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\dfrac{-x+3}{2x-3}\\geq2$ ?",
            "options": [
              "$\\left[\\dfrac32\\,;\\dfrac95\\right]$",
              "$\\left]-\\infty\\,;\\dfrac32\\right[$",
              "$\\left]\\dfrac32\\,;\\dfrac95\\right]$",
              "$\\left]\\dfrac95\\,;+\\infty\\right[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Numérateur positif avant $\\dfrac95$, dénominateur positif après $\\dfrac32$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La valeur interdite",
          "stepTheme": "La valeur interdite",
          "stepBadge": "La valeur interdite",
          "paragraphText": "La valeur interdite est toujours exclue des solutions, même avec $\\leq$ ou $\\geq$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q7",
            "type": "mcq",
            "prompt": "Dans la solution d'une inéquation $\\dfrac{ax+b}{cx+d}\\geq0$, la valeur interdite est :",
            "options": [
              "Toujours incluse",
              "Incluse si l'inégalité est large",
              "Incluse si $a>0$",
              "Toujours exclue"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ne peut pas calculer la fraction pour cette valeur."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q1",
          "type": "mcq",
          "prompt": "Quelle est la valeur interdite de $\\dfrac{x-1}{2x-1}$ ?",
          "options": [
            "$\\dfrac12$",
            "$1$",
            "$-\\dfrac12$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2x-1=0$ pour $x=\\dfrac12$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est la solution de $\\dfrac{x-1}{2x-1}=0$ ?",
          "options": [
            "$1$",
            "$\\dfrac12$",
            "$-1$",
            "Aucune"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x-1=0$ donne $x=1$, qui n'est pas interdit."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\dfrac{3x-9}{3-x}=0$ ?",
          "options": [
            "$\\{3\\}$",
            "$\\varnothing$",
            "$\\{-3\\}$",
            "$\\{9\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La seule valeur candidate est interdite."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q4",
          "type": "mcq",
          "prompt": "Comment s'écrit $\\dfrac{-x+3}{2x-3}-2$ sous la forme d'une seule fraction ?",
          "options": [
            "$\\dfrac{-x+1}{2x-3}$",
            "$\\dfrac{-3x+6}{2x-3}$",
            "$\\dfrac{-5x+9}{2x-3}$",
            "$\\dfrac{-5x-3}{2x-3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-x+3-4x+6=-5x+9$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q5",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\dfrac{x-1}{2x-1}\\leq0$ ?",
          "options": [
            "$\\left[\\dfrac12\\,;1\\right]$",
            "$\\left]-\\infty\\,;\\dfrac12\\right[$",
            "$]1\\,;+\\infty[$",
            "$\\left]\\dfrac12\\,;1\\right]$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$\\dfrac12$ est interdit (crochet ouvert), $1$ annule la fraction (crochet fermé)."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\dfrac{-x+3}{2x-3}\\geq2$ ?",
          "options": [
            "$\\left[\\dfrac32\\,;\\dfrac95\\right]$",
            "$\\left]-\\infty\\,;\\dfrac32\\right[$",
            "$\\left]\\dfrac32\\,;\\dfrac95\\right]$",
            "$\\left]\\dfrac95\\,;+\\infty\\right[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Numérateur positif avant $\\dfrac95$, dénominateur positif après $\\dfrac32$."
        },
        {
          "id": "premiere_a1_maths_numerique_l01_equations_inequations_p06_q7",
          "type": "mcq",
          "prompt": "Dans la solution d'une inéquation $\\dfrac{ax+b}{cx+d}\\geq0$, la valeur interdite est :",
          "options": [
            "Toujours incluse",
            "Incluse si l'inégalité est large",
            "Incluse si $a>0$",
            "Toujours exclue"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ne peut pas calculer la fraction pour cette valeur."
        }
      ]
    }
  ]
};
