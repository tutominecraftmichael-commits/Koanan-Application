import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1A-Maths leçon-03 GENERALITES SUR LES FONCTIONS.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_L03_GENERALITES_FONCTIONS: CurriculumChapter = {
  "id": "premiere_a1_maths_numerique_l03_generalites_fonctions",
  "subjectId": "maths",
  "gradeLevel": "premiere_a1",
  "alsoForGrades": [
    "premiere_a2"
  ],
  "order": 3,
  "title": "Leçon 3 : Généralités sur les fonctions",
  "summary": "Fonctions paires et impaires, lecture graphique de la parité, fonctions sans parité, axe et centre de symétrie d'une courbe.",
  "officialVolumeHours": 6,
  "contentVersion": 2,
  "source": "1A-Maths leçon-03 GENERALITES SUR LES FONCTIONS.pdf",
  "points": [
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01",
      "order": 1,
      "title": "Fonction paire",
      "summary": "Quand $f(-x)=f(x)$ pour tout $x$ de $D_f$.",
      "conceptExplanation": "Soit $f$ une fonction d'ensemble de définition $D_f$. On dit que $f$ est **paire** si, pour tout $x\\in D_f$ :\n- $-x\\in D_f$ (l'ensemble de définition est symétrique par rapport à $0$) ;\n- $f(-x)=f(x)$.\n\nExemples :\n- $f(x)=x^2+2$ : $D_f=\\mathbb{R}$ et $f(-x)=(-x)^2+2=x^2+2=f(x)$, donc $f$ est paire ;\n- $g(x)=x^4-3x^2$ : $g(-x)=x^4-3x^2=g(x)$, donc $g$ est paire ;\n- $h(x)=|x|$ est paire, car $|-x|=|x|$.\n\nMéthode : on vérifie d'abord que $D_f$ est symétrique, puis on calcule $f(-x)$ et on le compare à $f(x)$.",
      "keyRule": "$f$ paire : pour tout $x\\in D_f$, $-x\\in D_f$ et $f(-x)=f(x)$. On commence toujours par vérifier la symétrie de $D_f$.",
      "formulas": [],
      "workedExample": {
        "title": "Montrer qu'une fonction est paire",
        "statement": "Montre que $f(x)=x^2+2$ est paire.",
        "methodSteps": [
          "$D_f=\\mathbb{R}$ : pour tout réel $x$, $-x$ est aussi un réel.",
          "$f(-x)=(-x)^2+2=x^2+2=f(x)$."
        ],
        "conclusion": "$f$ est paire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$f$ est paire si, pour tout $x\\in D_f$, $-x\\in D_f$ et $f(-x)=f(x)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Quelle égalité caractérise une fonction paire ?",
            "options": [
              "$f(-x)=-f(x)$",
              "$f(x)=0$",
              "$f(-x)=f(x)$",
              "$f(-x)=\\dfrac{1}{f(x)}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les images de $x$ et de $-x$ sont égales."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un ensemble symétrique",
          "stepTheme": "Un ensemble symétrique",
          "stepBadge": "Un ensemble symétrique",
          "paragraphText": "Pour être paire, $f$ doit avoir un ensemble de définition symétrique : si $x\\in D_f$, alors $-x\\in D_f$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "Lequel de ces ensembles est symétrique par rapport à $0$ ?",
            "options": [
              "$[-3;3]$",
              "$[-3;5]$",
              "$[0;+\\infty[$",
              "$\\mathbb{R}\\setminus\\{2\\}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour chaque $x$ de $[-3;3]$, le nombre $-x$ est aussi dans $[-3;3]$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer $f(-x)$",
          "stepTheme": "Calculer $f(-x)$",
          "stepBadge": "Calculer $f(-x)$",
          "paragraphText": "On remplace $x$ par $-x$ : pour $f(x)=x^2+2$, $f(-x)=(-x)^2+2=x^2+2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Si $f(x)=x^2+2$, que vaut $f(-x)$ ?",
            "options": [
              "$-x^2+2$",
              "$-x^2-2$",
              "$x^2-2$",
              "$x^2+2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(-x)^2=x^2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une puissance paire",
          "stepTheme": "Une puissance paire",
          "stepBadge": "Une puissance paire",
          "paragraphText": "Pour $g(x)=x^4-3x^2$ : $g(-x)=(-x)^4-3(-x)^2=x^4-3x^2=g(x)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "Que peut-on dire de $g(x)=x^4-3x^2$ définie sur $\\mathbb{R}$ ?",
            "options": [
              "Elle est impaire",
              "Elle est paire",
              "Elle n'est ni paire ni impaire",
              "Elle n'est pas définie en $0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les puissances paires de $-x$ sont égales à celles de $x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La valeur absolue",
          "stepTheme": "La valeur absolue",
          "stepBadge": "La valeur absolue",
          "paragraphText": "$|-x|=|x|$ pour tout réel $x$ : la fonction valeur absolue est paire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "Pourquoi la fonction $x\\mapsto|x|$ est-elle paire ?",
            "options": [
              "Car $|x|$ est toujours négatif",
              "Car $|-x|=|x|$ pour tout réel $x$",
              "Car $|-x|=-|x|$ pour tout réel $x$",
              "Car elle n'est définie que sur $[0;+\\infty[$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un nombre et son opposé ont la même valeur absolue."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une image connue",
          "stepTheme": "Une image connue",
          "stepBadge": "Une image connue",
          "paragraphText": "Si $f$ est paire et $f(3)=7$, alors $f(-3)=f(3)=7$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "$f$ est paire et $f(3)=7$. Que vaut $f(-3)$ ?",
            "options": [
              "$-7$",
              "$3$",
              "$-3$",
              "$7$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Pour une fonction paire, $f(-3)=f(3)$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un ensemble non symétrique",
          "stepTheme": "Un ensemble non symétrique",
          "stepBadge": "Un ensemble non symétrique",
          "paragraphText": "$f(x)=x^2$ définie sur $[-1;4]$ n'est pas paire : $4\\in D_f$ mais $-4\\notin D_f$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q7",
            "type": "mcq",
            "prompt": "La fonction $x\\mapsto x^2$ définie sur $[-1;4]$ est-elle paire ?",
            "options": [
              "Non, car $[-1;4]$ n'est pas symétrique",
              "Oui, car $(-x)^2=x^2$ pour tout $x$",
              "Oui, car $x^2$ est toujours positif",
              "Non, car $x^2$ n'est pas défini en $0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La formule ne suffit pas : l'ensemble de définition doit être symétrique."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Quelle égalité caractérise une fonction paire ?",
          "options": [
            "$f(-x)=-f(x)$",
            "$f(x)=0$",
            "$f(-x)=f(x)$",
            "$f(-x)=\\dfrac{1}{f(x)}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les images de $x$ et de $-x$ sont égales."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "Lequel de ces ensembles est symétrique par rapport à $0$ ?",
          "options": [
            "$[-3;3]$",
            "$[-3;5]$",
            "$[0;+\\infty[$",
            "$\\mathbb{R}\\setminus\\{2\\}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour chaque $x$ de $[-3;3]$, le nombre $-x$ est aussi dans $[-3;3]$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Si $f(x)=x^2+2$, que vaut $f(-x)$ ?",
          "options": [
            "$-x^2+2$",
            "$-x^2-2$",
            "$x^2-2$",
            "$x^2+2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(-x)^2=x^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "Que peut-on dire de $g(x)=x^4-3x^2$ définie sur $\\mathbb{R}$ ?",
          "options": [
            "Elle est impaire",
            "Elle est paire",
            "Elle n'est ni paire ni impaire",
            "Elle n'est pas définie en $0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les puissances paires de $-x$ sont égales à celles de $x$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "Pourquoi la fonction $x\\mapsto|x|$ est-elle paire ?",
          "options": [
            "Car $|x|$ est toujours négatif",
            "Car $|-x|=|x|$ pour tout réel $x$",
            "Car $|-x|=-|x|$ pour tout réel $x$",
            "Car elle n'est définie que sur $[0;+\\infty[$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un nombre et son opposé ont la même valeur absolue."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "$f$ est paire et $f(3)=7$. Que vaut $f(-3)$ ?",
          "options": [
            "$-7$",
            "$3$",
            "$-3$",
            "$7$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Pour une fonction paire, $f(-3)=f(3)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p01_q7",
          "type": "mcq",
          "prompt": "La fonction $x\\mapsto x^2$ définie sur $[-1;4]$ est-elle paire ?",
          "options": [
            "Non, car $[-1;4]$ n'est pas symétrique",
            "Oui, car $(-x)^2=x^2$ pour tout $x$",
            "Oui, car $x^2$ est toujours positif",
            "Non, car $x^2$ n'est pas défini en $0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La formule ne suffit pas : l'ensemble de définition doit être symétrique."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02",
      "order": 2,
      "title": "Fonction impaire",
      "summary": "Quand $f(-x)=-f(x)$ pour tout $x$ de $D_f$.",
      "conceptExplanation": "Soit $f$ une fonction d'ensemble de définition $D_f$. On dit que $f$ est **impaire** si, pour tout $x\\in D_f$ :\n- $-x\\in D_f$ ;\n- $f(-x)=-f(x)$.\n\nExemples :\n- $f(x)=x^3-6x$ : $f(-x)=(-x)^3-6(-x)=-x^3+6x=-(x^3-6x)=-f(x)$, donc $f$ est impaire ;\n- $g(x)=\\dfrac{1}{x}$ sur $\\mathbb{R}^*$ : $g(-x)=-\\dfrac{1}{x}=-g(x)$, donc $g$ est impaire.\n\nConséquence : si $f$ est impaire et définie en $0$, alors $f(0)=-f(0)$, donc $f(0)=0$.",
      "keyRule": "$f$ impaire : pour tout $x\\in D_f$, $-x\\in D_f$ et $f(-x)=-f(x)$. Si $0\\in D_f$, alors $f(0)=0$.",
      "formulas": [],
      "workedExample": {
        "title": "Montrer qu'une fonction est impaire",
        "statement": "Montre que $f(x)=x^3-6x$ est impaire.",
        "methodSteps": [
          "$D_f=\\mathbb{R}$ est symétrique par rapport à $0$.",
          "$f(-x)=(-x)^3-6(-x)=-x^3+6x=-(x^3-6x)=-f(x)$."
        ],
        "conclusion": "$f$ est impaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition",
          "stepTheme": "La définition",
          "stepBadge": "La définition",
          "paragraphText": "$f$ est impaire si, pour tout $x\\in D_f$, $-x\\in D_f$ et $f(-x)=-f(x)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "Quelle égalité caractérise une fonction impaire ?",
            "options": [
              "$f(-x)=f(x)$",
              "$f(x)=f(0)$",
              "$f(-x)=-f(x)$",
              "$f(-x)=x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'image de $-x$ est l'opposé de l'image de $x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer $f(-x)$",
          "stepTheme": "Calculer $f(-x)$",
          "stepBadge": "Calculer $f(-x)$",
          "paragraphText": "Pour $f(x)=x^3-6x$ : $f(-x)=(-x)^3-6(-x)=-x^3+6x$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "Si $f(x)=x^3-6x$, que vaut $f(-x)$ ?",
            "options": [
              "$x^3-6x$",
              "$-x^3-6x$",
              "$x^3+6x$",
              "$-x^3+6x$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(-x)^3=-x^3$ et $-6\\times(-x)=6x$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Faire apparaître $-f(x)$",
          "stepTheme": "Faire apparaître $-f(x)$",
          "stepBadge": "Faire apparaître $-f(x)$",
          "paragraphText": "On factorise par $-1$ : $-x^3+6x=-(x^3-6x)=-f(x)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "À quoi est égal $-x^3+6x$ ?",
            "options": [
              "$-(x^3+6x)$",
              "$x^3-6x$",
              "$-(x^3-6x)$",
              "$-(6x-x^3)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-(x^3-6x)=-x^3+6x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La fonction inverse",
          "stepTheme": "La fonction inverse",
          "stepBadge": "La fonction inverse",
          "paragraphText": "Sur $\\mathbb{R}^*$, $\\dfrac{1}{-x}=-\\dfrac{1}{x}$ : la fonction inverse est impaire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "Que peut-on dire de $x\\mapsto\\dfrac{1}{x}$ sur $\\mathbb{R}^*$ ?",
            "options": [
              "Elle est paire",
              "Elle est impaire",
              "Elle n'est ni paire ni impaire",
              "Elle est paire et impaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\mathbb{R}^*$ est symétrique et $\\dfrac{1}{-x}=-\\dfrac{1}{x}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une image connue",
          "stepTheme": "Une image connue",
          "stepBadge": "Une image connue",
          "paragraphText": "Si $f$ est impaire et $f(2)=5$, alors $f(-2)=-f(2)=-5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "$f$ est impaire et $f(2)=5$. Que vaut $f(-2)$ ?",
            "options": [
              "$-5$",
              "$5$",
              "$2$",
              "$-2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour une fonction impaire, $f(-2)=-f(2)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La valeur en $0$",
          "stepTheme": "La valeur en $0$",
          "stepBadge": "La valeur en $0$",
          "paragraphText": "Si $f$ est impaire et définie en $0$, alors $f(0)=-f(0)$, d'où $2f(0)=0$ et $f(0)=0$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "$f$ est impaire et définie en $0$. Que vaut $f(0)$ ?",
            "options": [
              "$0$",
              "$1$",
              "$-1$",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le seul nombre égal à son opposé est $0$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une valeur impossible",
          "stepTheme": "Une valeur impossible",
          "stepBadge": "Une valeur impossible",
          "paragraphText": "Une fonction impaire définie en $0$ ne peut pas vérifier $f(0)=-3$ : on aurait $-3=3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q7",
            "type": "mcq",
            "prompt": "Une fonction impaire définie sur $\\mathbb{R}$ peut-elle vérifier $f(0)=-3$ ?",
            "options": [
              "Oui, toute valeur est possible",
              "Non, car on doit avoir $f(0)=0$",
              "Oui, si $f(0)$ est négatif",
              "Non, car $f(0)$ doit valoir $1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On aurait $f(0)=-f(0)$, soit $-3=3$, ce qui est faux."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "Quelle égalité caractérise une fonction impaire ?",
          "options": [
            "$f(-x)=f(x)$",
            "$f(x)=f(0)$",
            "$f(-x)=-f(x)$",
            "$f(-x)=x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'image de $-x$ est l'opposé de l'image de $x$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "Si $f(x)=x^3-6x$, que vaut $f(-x)$ ?",
          "options": [
            "$x^3-6x$",
            "$-x^3-6x$",
            "$x^3+6x$",
            "$-x^3+6x$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(-x)^3=-x^3$ et $-6\\times(-x)=6x$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "À quoi est égal $-x^3+6x$ ?",
          "options": [
            "$-(x^3+6x)$",
            "$x^3-6x$",
            "$-(x^3-6x)$",
            "$-(6x-x^3)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-(x^3-6x)=-x^3+6x$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "Que peut-on dire de $x\\mapsto\\dfrac{1}{x}$ sur $\\mathbb{R}^*$ ?",
          "options": [
            "Elle est paire",
            "Elle est impaire",
            "Elle n'est ni paire ni impaire",
            "Elle est paire et impaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\mathbb{R}^*$ est symétrique et $\\dfrac{1}{-x}=-\\dfrac{1}{x}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "$f$ est impaire et $f(2)=5$. Que vaut $f(-2)$ ?",
          "options": [
            "$-5$",
            "$5$",
            "$2$",
            "$-2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour une fonction impaire, $f(-2)=-f(2)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "$f$ est impaire et définie en $0$. Que vaut $f(0)$ ?",
          "options": [
            "$0$",
            "$1$",
            "$-1$",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le seul nombre égal à son opposé est $0$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p02_q7",
          "type": "mcq",
          "prompt": "Une fonction impaire définie sur $\\mathbb{R}$ peut-elle vérifier $f(0)=-3$ ?",
          "options": [
            "Oui, toute valeur est possible",
            "Non, car on doit avoir $f(0)=0$",
            "Oui, si $f(0)$ est négatif",
            "Non, car $f(0)$ doit valoir $1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On aurait $f(0)=-f(0)$, soit $-3=3$, ce qui est faux."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03",
      "order": 3,
      "title": "Lecture graphique de la parité",
      "summary": "Axe $(OJ)$ pour une fonction paire, centre $O$ pour une fonction impaire.",
      "conceptExplanation": "Dans un repère orthogonal $(O,I,J)$, on note $(C_f)$ la courbe de $f$.\n\n- $f$ est **paire** si et seulement si l'axe des ordonnées $(OJ)$ est un **axe de symétrie** de $(C_f)$. Si le point $(x;y)$ est sur la courbe, le point $(-x;y)$ y est aussi.\n- $f$ est **impaire** si et seulement si l'origine $O$ est un **centre de symétrie** de $(C_f)$. Si le point $(x;y)$ est sur la courbe, le point $(-x;-y)$ y est aussi.\n\nExemples : la parabole de $x\\mapsto x^2$ est symétrique par rapport à $(OJ)$ ; la courbe de $x\\mapsto x^3$ est symétrique par rapport à $O$.\n\nUne courbe qui n'a aucune de ces deux symétries représente une fonction ni paire ni impaire.",
      "keyRule": "Paire : $(OJ)$ est axe de symétrie, $(x;y)$ donne $(-x;y)$. Impaire : $O$ est centre de symétrie, $(x;y)$ donne $(-x;-y)$.",
      "formulas": [],
      "workedExample": {
        "title": "Compléter une courbe",
        "statement": "$f$ est impaire et le point $A(3;4)$ est sur sa courbe. Quel autre point est forcément sur la courbe ?",
        "methodSteps": [
          "Pour une fonction impaire, $O$ est centre de symétrie.",
          "Le symétrique de $A(3;4)$ par rapport à $O$ est $(-3;-4)$."
        ],
        "conclusion": "Le point $(-3;-4)$ est sur la courbe."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Fonction paire et symétrie",
          "stepTheme": "Fonction paire et symétrie",
          "stepBadge": "Fonction paire et symétrie",
          "paragraphText": "$f$ est paire si et seulement si l'axe des ordonnées $(OJ)$ est un axe de symétrie de sa courbe.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "Quelle symétrie possède la courbe d'une fonction paire ?",
            "options": [
              "L'origine $O$ est centre de symétrie",
              "L'axe des abscisses $(OI)$ est axe de symétrie",
              "L'axe des ordonnées $(OJ)$ est axe de symétrie",
              "La droite $y=x$ est axe de symétrie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les points $(x;y)$ et $(-x;y)$ sont symétriques par rapport à $(OJ)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Fonction impaire et symétrie",
          "stepTheme": "Fonction impaire et symétrie",
          "stepBadge": "Fonction impaire et symétrie",
          "paragraphText": "$f$ est impaire si et seulement si l'origine $O$ est un centre de symétrie de sa courbe.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "Quelle symétrie possède la courbe d'une fonction impaire ?",
            "options": [
              "L'axe des ordonnées $(OJ)$ est axe de symétrie",
              "Le point $I$ est centre de symétrie",
              "L'axe des abscisses est axe de symétrie",
              "L'origine $O$ est centre de symétrie"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les points $(x;y)$ et $(-x;-y)$ sont symétriques par rapport à $O$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un point d'une courbe paire",
          "stepTheme": "Un point d'une courbe paire",
          "stepBadge": "Un point d'une courbe paire",
          "paragraphText": "Si $f$ est paire et que $(2;5)$ est sur la courbe, alors $(-2;5)$ l'est aussi.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "$f$ est paire et $(2;5)$ est sur sa courbe. Quel point y est aussi ?",
            "options": [
              "$(-2;-5)$",
              "$(2;-5)$",
              "$(-2;5)$",
              "$(5;2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On change le signe de l'abscisse et on garde l'ordonnée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un point d'une courbe impaire",
          "stepTheme": "Un point d'une courbe impaire",
          "stepBadge": "Un point d'une courbe impaire",
          "paragraphText": "Si $f$ est impaire et que $(3;4)$ est sur la courbe, alors $(-3;-4)$ l'est aussi.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "$f$ est impaire et $(3;4)$ est sur sa courbe. Quel point y est aussi ?",
            "options": [
              "$(-3;4)$",
              "$(3;-4)$",
              "$(4;3)$",
              "$(-3;-4)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On change le signe des deux coordonnées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Reconnaître une parabole",
          "stepTheme": "Reconnaître une parabole",
          "stepBadge": "Reconnaître une parabole",
          "paragraphText": "La parabole de $x\\mapsto x^2$ est symétrique par rapport à $(OJ)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "La courbe de $x\\mapsto x^2$ est symétrique par rapport à $(OJ)$. Que peut-on en déduire ?",
            "options": [
              "La fonction carré est paire",
              "La fonction carré est impaire",
              "La fonction carré n'a pas de parité",
              "La fonction carré est constante"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Symétrie par rapport à $(OJ)$ équivaut à fonction paire."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Lire la parité sur une courbe",
          "stepTheme": "Lire la parité sur une courbe",
          "stepBadge": "Lire la parité sur une courbe",
          "paragraphText": "On replie la figure selon $(OJ)$ (fonction paire) ou on la fait tourner d'un demi-tour autour de $O$ (fonction impaire).",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "Une courbe se superpose à elle-même après un demi-tour autour de $O$. La fonction est :",
            "options": [
              "paire",
              "impaire",
              "ni paire ni impaire",
              "constante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un demi-tour autour de $O$ est la symétrie de centre $O$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Symétrie par rapport à l'axe des abscisses",
          "stepTheme": "Symétrie par rapport à l'axe des abscisses",
          "stepBadge": "Symétrie par rapport à l'axe des abscisses",
          "paragraphText": "Une courbe de fonction ne peut pas être symétrique par rapport à $(OI)$, sauf la droite $y=0$ : un même $x$ aurait deux images.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q7",
            "type": "mcq",
            "prompt": "Une courbe symétrique par rapport à l'axe $(OI)$ prouve-t-elle que la fonction est paire ?",
            "options": [
              "Oui, c'est la définition d'une fonction paire",
              "Non, la parité se lit avec l'axe $(OJ)$",
              "Oui, mais seulement si $f(0)=0$",
              "Non, cela prouve que la fonction est impaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Paire : symétrie par rapport à l'axe des ordonnées, pas des abscisses."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "Quelle symétrie possède la courbe d'une fonction paire ?",
          "options": [
            "L'origine $O$ est centre de symétrie",
            "L'axe des abscisses $(OI)$ est axe de symétrie",
            "L'axe des ordonnées $(OJ)$ est axe de symétrie",
            "La droite $y=x$ est axe de symétrie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les points $(x;y)$ et $(-x;y)$ sont symétriques par rapport à $(OJ)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "Quelle symétrie possède la courbe d'une fonction impaire ?",
          "options": [
            "L'axe des ordonnées $(OJ)$ est axe de symétrie",
            "Le point $I$ est centre de symétrie",
            "L'axe des abscisses est axe de symétrie",
            "L'origine $O$ est centre de symétrie"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les points $(x;y)$ et $(-x;-y)$ sont symétriques par rapport à $O$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "$f$ est paire et $(2;5)$ est sur sa courbe. Quel point y est aussi ?",
          "options": [
            "$(-2;-5)$",
            "$(2;-5)$",
            "$(-2;5)$",
            "$(5;2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On change le signe de l'abscisse et on garde l'ordonnée."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "$f$ est impaire et $(3;4)$ est sur sa courbe. Quel point y est aussi ?",
          "options": [
            "$(-3;4)$",
            "$(3;-4)$",
            "$(4;3)$",
            "$(-3;-4)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On change le signe des deux coordonnées."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "La courbe de $x\\mapsto x^2$ est symétrique par rapport à $(OJ)$. Que peut-on en déduire ?",
          "options": [
            "La fonction carré est paire",
            "La fonction carré est impaire",
            "La fonction carré n'a pas de parité",
            "La fonction carré est constante"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Symétrie par rapport à $(OJ)$ équivaut à fonction paire."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "Une courbe se superpose à elle-même après un demi-tour autour de $O$. La fonction est :",
          "options": [
            "paire",
            "impaire",
            "ni paire ni impaire",
            "constante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un demi-tour autour de $O$ est la symétrie de centre $O$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p03_q7",
          "type": "mcq",
          "prompt": "Une courbe symétrique par rapport à l'axe $(OI)$ prouve-t-elle que la fonction est paire ?",
          "options": [
            "Oui, c'est la définition d'une fonction paire",
            "Non, la parité se lit avec l'axe $(OJ)$",
            "Oui, mais seulement si $f(0)=0$",
            "Non, cela prouve que la fonction est impaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Paire : symétrie par rapport à l'axe des ordonnées, pas des abscisses."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04",
      "order": 4,
      "title": "Ni paire ni impaire",
      "summary": "Un contre-exemple suffit pour conclure.",
      "conceptExplanation": "Une fonction n'a pas toujours de parité. Pour montrer que $f$ n'est **ni paire ni impaire**, il suffit de trouver un réel $a$ tel que $f(-a)\\neq f(a)$ et $f(-a)\\neq -f(a)$ (ou de montrer que $D_f$ n'est pas symétrique).\n\nExemple : $f(x)=3x^2-2x$. On a $f(1)=1$ et $f(-1)=3+2=5$. Comme $5\\neq 1$ et $5\\neq -1$, $f$ n'est ni paire ni impaire.\n\nAutres exemples :\n- $(x-1)^2$ : $f(1)=0$ et $f(-1)=4$, ni paire ni impaire ;\n- $\\dfrac{x}{x^2-1}$ : $D_f=\\mathbb{R}\\setminus\\{-1;1\\}$ symétrique et $f(-x)=-f(x)$, elle est impaire ;\n- $2-x^2$ et $\\dfrac{-3}{x^2+1}$ sont paires.",
      "keyRule": "Pour prouver une parité, il faut un calcul pour tout $x$. Pour la refuser, un seul contre-exemple suffit.",
      "formulas": [],
      "workedExample": {
        "title": "Étudier la parité",
        "statement": "Étudie la parité de $f(x)=3x^2-2x$.",
        "methodSteps": [
          "$f(1)=3-2=1$ et $f(-1)=3+2=5$.",
          "$f(-1)\\neq f(1)$ : $f$ n'est pas paire. $f(-1)\\neq -f(1)$ : $f$ n'est pas impaire."
        ],
        "conclusion": "$f$ n'est ni paire ni impaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Pas toujours de parité",
          "stepTheme": "Pas toujours de parité",
          "stepBadge": "Pas toujours de parité",
          "paragraphText": "Beaucoup de fonctions ne sont ni paires ni impaires.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "Une fonction est-elle toujours paire ou impaire ?",
            "options": [
              "Non, elle peut n'être ni l'une ni l'autre",
              "Oui, toujours l'une des deux",
              "Oui, si elle est définie sur $\\mathbb{R}$",
              "Non, elle est toujours paire et impaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3x^2-2x$ n'a aucune parité."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le contre-exemple",
          "stepTheme": "Le contre-exemple",
          "stepBadge": "Le contre-exemple",
          "paragraphText": "Si on trouve un $a$ avec $f(-a)\\neq f(a)$, la fonction n'est pas paire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "Que suffit-il de trouver pour prouver que $f$ n'est pas paire ?",
            "options": [
              "Un réel $a$ tel que $f(a)=0$",
              "Un réel $a$ tel que $f(-a)=f(a)$",
              "Deux réels de même image",
              "Un réel $a$ tel que $f(-a)\\neq f(a)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La parité doit être vraie pour tout $x$ : un seul échec suffit."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Deux images",
          "stepTheme": "Deux images",
          "stepBadge": "Deux images",
          "paragraphText": "Pour $f(x)=3x^2-2x$ : $f(1)=1$ et $f(-1)=3\\times1+2=5$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "Si $f(x)=3x^2-2x$, que vaut $f(-1)$ ?",
            "options": [
              "$1$",
              "$-5$",
              "$5$",
              "$-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3\\times(-1)^2-2\\times(-1)=3+2=5$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Conclure",
          "stepTheme": "Conclure",
          "stepBadge": "Conclure",
          "paragraphText": "$f(-1)=5$, $f(1)=1$ et $-f(1)=-1$ : aucune égalité n'est vraie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Avec $f(1)=1$ et $f(-1)=5$, que peut-on conclure ?",
            "options": [
              "$f$ est paire",
              "$f$ est impaire",
              "$f$ n'est ni paire ni impaire",
              "On ne peut rien conclure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$5\\neq 1$ et $5\\neq -1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un carré décalé",
          "stepTheme": "Un carré décalé",
          "stepBadge": "Un carré décalé",
          "paragraphText": "Pour $f(x)=(x-1)^2$ : $f(1)=0$ et $f(-1)=4$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "Quelle est la parité de $f(x)=(x-1)^2$ ?",
            "options": [
              "Ni paire ni impaire",
              "Paire",
              "Impaire",
              "Paire et impaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$f(-1)=4$ alors que $f(1)=0$ : aucune des deux égalités n'est vraie."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une fonction rationnelle",
          "stepTheme": "Une fonction rationnelle",
          "stepBadge": "Une fonction rationnelle",
          "paragraphText": "Pour $f(x)=\\dfrac{x}{x^2-1}$ : $D_f=\\mathbb{R}\\setminus\\{-1;1\\}$ est symétrique et $f(-x)=\\dfrac{-x}{x^2-1}=-f(x)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "Quelle est la parité de $f(x)=\\dfrac{x}{x^2-1}$ ?",
            "options": [
              "Paire",
              "Ni paire ni impaire",
              "Paire et impaire",
              "Impaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le dénominateur ne change pas, le numérateur change de signe."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une seule égalité ne prouve rien",
          "stepTheme": "Une seule égalité ne prouve rien",
          "stepBadge": "Une seule égalité ne prouve rien",
          "paragraphText": "$f(x)=3x^2-2x$ vérifie $f(0)=0$, mais elle n'est pas impaire pour autant.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q7",
            "type": "mcq",
            "prompt": "Si $f(-2)=f(2)$, peut-on affirmer que $f$ est paire ?",
            "options": [
              "Oui, une seule valeur suffit",
              "Non, il faut l'égalité pour tout $x$ de $D_f$",
              "Oui, si $f(2)$ est positif",
              "Non, cela prouve que $f$ est impaire"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un exemple ne prouve pas une propriété générale, il ne peut que la réfuter."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "Une fonction est-elle toujours paire ou impaire ?",
          "options": [
            "Non, elle peut n'être ni l'une ni l'autre",
            "Oui, toujours l'une des deux",
            "Oui, si elle est définie sur $\\mathbb{R}$",
            "Non, elle est toujours paire et impaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3x^2-2x$ n'a aucune parité."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "Que suffit-il de trouver pour prouver que $f$ n'est pas paire ?",
          "options": [
            "Un réel $a$ tel que $f(a)=0$",
            "Un réel $a$ tel que $f(-a)=f(a)$",
            "Deux réels de même image",
            "Un réel $a$ tel que $f(-a)\\neq f(a)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La parité doit être vraie pour tout $x$ : un seul échec suffit."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "Si $f(x)=3x^2-2x$, que vaut $f(-1)$ ?",
          "options": [
            "$1$",
            "$-5$",
            "$5$",
            "$-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3\\times(-1)^2-2\\times(-1)=3+2=5$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Avec $f(1)=1$ et $f(-1)=5$, que peut-on conclure ?",
          "options": [
            "$f$ est paire",
            "$f$ est impaire",
            "$f$ n'est ni paire ni impaire",
            "On ne peut rien conclure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$5\\neq 1$ et $5\\neq -1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "Quelle est la parité de $f(x)=(x-1)^2$ ?",
          "options": [
            "Ni paire ni impaire",
            "Paire",
            "Impaire",
            "Paire et impaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$f(-1)=4$ alors que $f(1)=0$ : aucune des deux égalités n'est vraie."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "Quelle est la parité de $f(x)=\\dfrac{x}{x^2-1}$ ?",
          "options": [
            "Paire",
            "Ni paire ni impaire",
            "Paire et impaire",
            "Impaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le dénominateur ne change pas, le numérateur change de signe."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p04_q7",
          "type": "mcq",
          "prompt": "Si $f(-2)=f(2)$, peut-on affirmer que $f$ est paire ?",
          "options": [
            "Oui, une seule valeur suffit",
            "Non, il faut l'égalité pour tout $x$ de $D_f$",
            "Oui, si $f(2)$ est positif",
            "Non, cela prouve que $f$ est impaire"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un exemple ne prouve pas une propriété générale, il ne peut que la réfuter."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05",
      "order": 5,
      "title": "Axe de symétrie d'une courbe",
      "summary": "La droite $x=a$ et la condition $f(a+h)=f(a-h)$.",
      "conceptExplanation": "La droite $(\\Delta)$ d'équation $x=a$ est un **axe de symétrie** de la courbe $(C_f)$ si, pour tout réel $h$ tel que $a+h\\in D_f$ :\n- $a-h\\in D_f$ ;\n- $f(a+h)=f(a-h)$.\n\nExemple : $f(x)=(x-2)^2+1$ et la droite $x=2$.\n$f(2+h)=h^2+1$ et $f(2-h)=(-h)^2+1=h^2+1$. Donc $f(2+h)=f(2-h)$ : la droite d'équation $x=2$ est un axe de symétrie.\n\nCas particulier : pour $a=0$, on retrouve la définition d'une fonction paire (axe $(OJ)$).\n\nPour une parabole $y=ax^2+bx+c$, l'axe de symétrie est la droite d'équation $x=-\\dfrac{b}{2a}$.",
      "keyRule": "$x=a$ est axe de symétrie de $(C_f)$ si $f(a+h)=f(a-h)$ pour tout $h$ convenable. Parabole $ax^2+bx+c$ : axe $x=-\\dfrac{b}{2a}$.",
      "formulas": [],
      "workedExample": {
        "title": "Démontrer un axe de symétrie",
        "statement": "Montre que la droite $x=2$ est un axe de symétrie de la courbe de $f(x)=(x-2)^2+1$.",
        "methodSteps": [
          "$f(2+h)=(2+h-2)^2+1=h^2+1$.",
          "$f(2-h)=(2-h-2)^2+1=(-h)^2+1=h^2+1$."
        ],
        "conclusion": "$f(2+h)=f(2-h)$ : la droite $x=2$ est un axe de symétrie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La condition",
          "stepTheme": "La condition",
          "stepBadge": "La condition",
          "paragraphText": "La droite $x=a$ est un axe de symétrie si $f(a+h)=f(a-h)$ pour tout $h$ convenable.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q1",
            "type": "mcq",
            "prompt": "Quelle égalité prouve que la droite $x=a$ est un axe de symétrie de $(C_f)$ ?",
            "options": [
              "$f(a+h)=-f(a-h)$",
              "$f(a+h)=f(a-h)$",
              "$f(a)=0$",
              "$f(a+h)+f(a-h)=0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Deux points placés à égale distance de $a$ ont la même image."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Calculer $f(2+h)$",
          "stepTheme": "Calculer $f(2+h)$",
          "stepBadge": "Calculer $f(2+h)$",
          "paragraphText": "Pour $f(x)=(x-2)^2+1$ : $f(2+h)=(2+h-2)^2+1=h^2+1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q2",
            "type": "mcq",
            "prompt": "Si $f(x)=(x-2)^2+1$, que vaut $f(2+h)$ ?",
            "options": [
              "$(h+4)^2+1$",
              "$h^2-1$",
              "$h+1$",
              "$h^2+1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2+h-2=h$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer $f(2-h)$",
          "stepTheme": "Calculer $f(2-h)$",
          "stepBadge": "Calculer $f(2-h)$",
          "paragraphText": "$f(2-h)=(2-h-2)^2+1=(-h)^2+1=h^2+1$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q3",
            "type": "mcq",
            "prompt": "Pour la même fonction $(x-2)^2+1$, quelle est l'expression de $f(2-h)$ ?",
            "options": [
              "$h^2+1$",
              "$-h^2+1$",
              "$(4-h)^2+1$",
              "$h^2-1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(-h)^2=h^2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Conclure",
          "stepTheme": "Conclure",
          "stepBadge": "Conclure",
          "paragraphText": "$f(2+h)=f(2-h)=h^2+1$ : la droite $x=2$ est un axe de symétrie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q4",
            "type": "mcq",
            "prompt": "Quel est un axe de symétrie de la courbe de $f(x)=(x-2)^2+1$ ?",
            "options": [
              "La droite d'équation $x=1$",
              "La droite d'équation $y=2$",
              "La droite d'équation $x=2$",
              "L'axe des ordonnées"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On a montré $f(2+h)=f(2-h)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le cas $a=0$",
          "stepTheme": "Le cas $a=0$",
          "stepBadge": "Le cas $a=0$",
          "paragraphText": "Pour $a=0$, la condition devient $f(h)=f(-h)$ : c'est la définition d'une fonction paire.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q5",
            "type": "mcq",
            "prompt": "Si la droite $x=0$ est un axe de symétrie de $(C_f)$, alors $f$ est :",
            "options": [
              "impaire",
              "ni paire ni impaire",
              "constante",
              "paire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La droite $x=0$ est l'axe des ordonnées."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L'axe d'une parabole",
          "stepTheme": "L'axe d'une parabole",
          "stepBadge": "L'axe d'une parabole",
          "paragraphText": "Pour $x^2-6x+1$ : $a=1$, $b=-6$, donc l'axe est $x=-\\dfrac{-6}{2\\times1}=3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q6",
            "type": "mcq",
            "prompt": "Quel est l'axe de symétrie de la parabole $y=x^2-6x+1$ ?",
            "options": [
              "La droite d'équation $x=-3$",
              "La droite d'équation $x=6$",
              "La droite d'équation $x=3$",
              "La droite d'équation $x=1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x=-\\dfrac{b}{2a}=\\dfrac{6}{2}=3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une droite verticale",
          "stepTheme": "Une droite verticale",
          "stepBadge": "Une droite verticale",
          "paragraphText": "Un axe de symétrie d'une courbe de fonction s'écrit $x=a$ (droite verticale), pas $y=a$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q7",
            "type": "mcq",
            "prompt": "Quelle forme a l'équation d'un axe de symétrie de la courbe d'une fonction ?",
            "options": [
              "$y=a$, une droite horizontale",
              "$x=a$, une droite verticale",
              "$y=ax$, une droite par l'origine",
              "$y=x+a$, une droite oblique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La symétrie échange $a+h$ et $a-h$ sur l'axe des abscisses."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q1",
          "type": "mcq",
          "prompt": "Quelle égalité prouve que la droite $x=a$ est un axe de symétrie de $(C_f)$ ?",
          "options": [
            "$f(a+h)=-f(a-h)$",
            "$f(a+h)=f(a-h)$",
            "$f(a)=0$",
            "$f(a+h)+f(a-h)=0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Deux points placés à égale distance de $a$ ont la même image."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q2",
          "type": "mcq",
          "prompt": "Si $f(x)=(x-2)^2+1$, que vaut $f(2+h)$ ?",
          "options": [
            "$(h+4)^2+1$",
            "$h^2-1$",
            "$h+1$",
            "$h^2+1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2+h-2=h$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q3",
          "type": "mcq",
          "prompt": "Pour la même fonction $(x-2)^2+1$, quelle est l'expression de $f(2-h)$ ?",
          "options": [
            "$h^2+1$",
            "$-h^2+1$",
            "$(4-h)^2+1$",
            "$h^2-1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(-h)^2=h^2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q4",
          "type": "mcq",
          "prompt": "Quel est un axe de symétrie de la courbe de $f(x)=(x-2)^2+1$ ?",
          "options": [
            "La droite d'équation $x=1$",
            "La droite d'équation $y=2$",
            "La droite d'équation $x=2$",
            "L'axe des ordonnées"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On a montré $f(2+h)=f(2-h)$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q5",
          "type": "mcq",
          "prompt": "Si la droite $x=0$ est un axe de symétrie de $(C_f)$, alors $f$ est :",
          "options": [
            "impaire",
            "ni paire ni impaire",
            "constante",
            "paire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La droite $x=0$ est l'axe des ordonnées."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q6",
          "type": "mcq",
          "prompt": "Quel est l'axe de symétrie de la parabole $y=x^2-6x+1$ ?",
          "options": [
            "La droite d'équation $x=-3$",
            "La droite d'équation $x=6$",
            "La droite d'équation $x=3$",
            "La droite d'équation $x=1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x=-\\dfrac{b}{2a}=\\dfrac{6}{2}=3$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p05_q7",
          "type": "mcq",
          "prompt": "Quelle forme a l'équation d'un axe de symétrie de la courbe d'une fonction ?",
          "options": [
            "$y=a$, une droite horizontale",
            "$x=a$, une droite verticale",
            "$y=ax$, une droite par l'origine",
            "$y=x+a$, une droite oblique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La symétrie échange $a+h$ et $a-h$ sur l'axe des abscisses."
        }
      ]
    },
    {
      "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06",
      "order": 6,
      "title": "Centre de symétrie d'une courbe",
      "summary": "Le point $\\Omega(a;b)$ et la condition sur $f(a+h)+f(a-h)$.",
      "conceptExplanation": "Le point $\\Omega(a;b)$ est un **centre de symétrie** de la courbe $(C_f)$ si, pour tout réel $h$ tel que $a+h\\in D_f$ :\n- $a-h\\in D_f$ ;\n- $\\dfrac{f(a+h)+f(a-h)}{2}=b$, c'est-à-dire $f(a+h)+f(a-h)=2b$.\n\nExemple : $f(x)=\\dfrac{2x}{x-1}$ et $\\Omega(1;2)$.\n$f(1+h)=\\dfrac{2+2h}{h}=\\dfrac{2}{h}+2$ et $f(1-h)=\\dfrac{2-2h}{-h}=-\\dfrac{2}{h}+2$.\nDonc $f(1+h)+f(1-h)=4=2\\times2$ : $\\Omega(1;2)$ est un centre de symétrie.\n\nCas particulier : pour $\\Omega=O(0;0)$, on retrouve la définition d'une fonction impaire.",
      "keyRule": "$\\Omega(a;b)$ est centre de symétrie de $(C_f)$ si $f(a+h)+f(a-h)=2b$ pour tout $h$ convenable.",
      "formulas": [],
      "workedExample": {
        "title": "Démontrer un centre de symétrie",
        "statement": "Montre que $\\Omega(1;2)$ est un centre de symétrie de la courbe de $f(x)=\\dfrac{2x}{x-1}$.",
        "methodSteps": [
          "$D_f=\\mathbb{R}\\setminus\\{1\\}$ est symétrique par rapport à $1$. On calcule $f(1+h)=\\dfrac{2}{h}+2$ et $f(1-h)=-\\dfrac{2}{h}+2$.",
          "$f(1+h)+f(1-h)=4=2\\times2$."
        ],
        "conclusion": "$\\Omega(1;2)$ est un centre de symétrie de $(C_f)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La condition",
          "stepTheme": "La condition",
          "stepBadge": "La condition",
          "paragraphText": "$\\Omega(a;b)$ est centre de symétrie si $f(a+h)+f(a-h)=2b$ pour tout $h$ convenable.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q1",
            "type": "mcq",
            "prompt": "Quelle égalité prouve que $\\Omega(a;b)$ est un centre de symétrie de $(C_f)$ ?",
            "options": [
              "$f(a+h)+f(a-h)=2b$",
              "$f(a+h)=f(a-h)$",
              "$f(a+h)-f(a-h)=b$",
              "$f(a)=2b$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le point $\\Omega$ est le milieu des deux points symétriques."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un milieu",
          "stepTheme": "Un milieu",
          "stepBadge": "Un milieu",
          "paragraphText": "Les points d'abscisses $a+h$ et $a-h$ ont pour milieu $\\Omega$ : la moyenne de leurs ordonnées vaut $b$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q2",
            "type": "mcq",
            "prompt": "Que représente $\\dfrac{f(a+h)+f(a-h)}{2}$ quand $\\Omega(a;b)$ est centre de symétrie ?",
            "options": [
              "L'ordonnée $b$ du centre",
              "L'abscisse $a$ du centre",
              "La pente de la courbe",
              "La distance entre les deux points"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'ordonnée du milieu, donc $b$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Calculer $f(1+h)$",
          "stepTheme": "Calculer $f(1+h)$",
          "stepBadge": "Calculer $f(1+h)$",
          "paragraphText": "Pour $f(x)=\\dfrac{2x}{x-1}$ : $f(1+h)=\\dfrac{2+2h}{h}=\\dfrac{2}{h}+2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q3",
            "type": "mcq",
            "prompt": "Si $f(x)=\\dfrac{2x}{x-1}$, que vaut $f(1+h)$ ?",
            "options": [
              "$\\dfrac{2}{h}-2$",
              "$\\dfrac{2}{h}+2$",
              "$2h+2$",
              "$\\dfrac{h}{2}+2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\dfrac{2(1+h)}{h}=\\dfrac{2}{h}+\\dfrac{2h}{h}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer $f(1-h)$",
          "stepTheme": "Calculer $f(1-h)$",
          "stepBadge": "Calculer $f(1-h)$",
          "paragraphText": "$f(1-h)=\\dfrac{2-2h}{-h}=-\\dfrac{2}{h}+2$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q4",
            "type": "mcq",
            "prompt": "Toujours avec $\\dfrac{2x}{x-1}$, quelle est l'expression simplifiée de $f(1-h)$ ?",
            "options": [
              "$\\dfrac{2}{h}+2$",
              "$-\\dfrac{2}{h}-2$",
              "$-\\dfrac{2}{h}+2$",
              "$2-2h$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{2}{-h}=-\\dfrac{2}{h}$ et $\\dfrac{-2h}{-h}=2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Conclure",
          "stepTheme": "Conclure",
          "stepBadge": "Conclure",
          "paragraphText": "$f(1+h)+f(1-h)=4=2\\times2$ : le centre est $\\Omega(1;2)$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q5",
            "type": "mcq",
            "prompt": "$f(1+h)+f(1-h)=4$ pour tout $h\\neq0$. Quel est le centre de symétrie ?",
            "options": [
              "$\\Omega(1;4)$",
              "$\\Omega(2;1)$",
              "$\\Omega(0;2)$",
              "$\\Omega(1;2)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2b=4$ donne $b=2$, et $a=1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un cube décalé",
          "stepTheme": "Un cube décalé",
          "stepBadge": "Un cube décalé",
          "paragraphText": "Pour $f(x)=x^3+1$ : $f(h)+f(-h)=h^3+1-h^3+1=2$, donc $\\Omega(0;1)$ est centre de symétrie.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q6",
            "type": "mcq",
            "prompt": "Quel est un centre de symétrie de la courbe de $f(x)=x^3+1$ ?",
            "options": [
              "$\\Omega(1;0)$",
              "$\\Omega(0;2)$",
              "$\\Omega(0;1)$",
              "$O(0;0)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$f(0+h)+f(0-h)=2$ donne $b=1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le $2$",
          "stepTheme": "Ne pas oublier le $2$",
          "stepBadge": "Ne pas oublier le $2$",
          "paragraphText": "La somme $f(a+h)+f(a-h)$ vaut $2b$, pas $b$ : si la somme vaut $6$, alors $b=3$.",
          "exercise": {
            "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q7",
            "type": "mcq",
            "prompt": "Pour $a=0$, on trouve $f(h)+f(-h)=6$. Quelle est l'ordonnée $b$ du centre ?",
            "options": [
              "$6$",
              "$12$",
              "$0$",
              "$3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2b=6$, donc $b=3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q1",
          "type": "mcq",
          "prompt": "Quelle égalité prouve que $\\Omega(a;b)$ est un centre de symétrie de $(C_f)$ ?",
          "options": [
            "$f(a+h)+f(a-h)=2b$",
            "$f(a+h)=f(a-h)$",
            "$f(a+h)-f(a-h)=b$",
            "$f(a)=2b$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le point $\\Omega$ est le milieu des deux points symétriques."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q2",
          "type": "mcq",
          "prompt": "Que représente $\\dfrac{f(a+h)+f(a-h)}{2}$ quand $\\Omega(a;b)$ est centre de symétrie ?",
          "options": [
            "L'ordonnée $b$ du centre",
            "L'abscisse $a$ du centre",
            "La pente de la courbe",
            "La distance entre les deux points"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'ordonnée du milieu, donc $b$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q3",
          "type": "mcq",
          "prompt": "Si $f(x)=\\dfrac{2x}{x-1}$, que vaut $f(1+h)$ ?",
          "options": [
            "$\\dfrac{2}{h}-2$",
            "$\\dfrac{2}{h}+2$",
            "$2h+2$",
            "$\\dfrac{h}{2}+2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\dfrac{2(1+h)}{h}=\\dfrac{2}{h}+\\dfrac{2h}{h}$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q4",
          "type": "mcq",
          "prompt": "Toujours avec $\\dfrac{2x}{x-1}$, quelle est l'expression simplifiée de $f(1-h)$ ?",
          "options": [
            "$\\dfrac{2}{h}+2$",
            "$-\\dfrac{2}{h}-2$",
            "$-\\dfrac{2}{h}+2$",
            "$2-2h$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{2}{-h}=-\\dfrac{2}{h}$ et $\\dfrac{-2h}{-h}=2$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q5",
          "type": "mcq",
          "prompt": "$f(1+h)+f(1-h)=4$ pour tout $h\\neq0$. Quel est le centre de symétrie ?",
          "options": [
            "$\\Omega(1;4)$",
            "$\\Omega(2;1)$",
            "$\\Omega(0;2)$",
            "$\\Omega(1;2)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2b=4$ donne $b=2$, et $a=1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q6",
          "type": "mcq",
          "prompt": "Quel est un centre de symétrie de la courbe de $f(x)=x^3+1$ ?",
          "options": [
            "$\\Omega(1;0)$",
            "$\\Omega(0;2)$",
            "$\\Omega(0;1)$",
            "$O(0;0)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$f(0+h)+f(0-h)=2$ donne $b=1$."
        },
        {
          "id": "premiere_a1_maths_numerique_l03_generalites_fonctions_p06_q7",
          "type": "mcq",
          "prompt": "Pour $a=0$, on trouve $f(h)+f(-h)=6$. Quelle est l'ordonnée $b$ du centre ?",
          "options": [
            "$6$",
            "$12$",
            "$0$",
            "$3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2b=6$, donc $b=3$."
        }
      ]
    }
  ]
};
