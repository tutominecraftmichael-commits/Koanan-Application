import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « Maths_2C_L11_Equation_et_inequation_dans_IR.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_2DC_NUM_L11_EQUATIONS_INEQUATIONS: CurriculumChapter = {
  "id": "seconde_c_maths_numerique_l11_equations_inequations",
  "subjectId": "maths",
  "gradeLevel": "seconde_c",
  "alsoForGrades": [],
  "order": 11,
  "title": "Leçon 11 : Équations et inéquations dans ℝ",
  "summary": "Vocabulaire, équations polynomiales, rationnelles et avec valeurs absolues, inéquations et tableaux de signes, mise en équation de problèmes.",
  "officialVolumeHours": 10,
  "contentVersion": 2,
  "source": "Maths_2C_L11_Equation_et_inequation_dans_IR.pdf",
  "points": [
    {
      "id": "seconde_c_maths_numerique_l11_equations_inequations_p01",
      "order": 1,
      "title": "Équations : le vocabulaire",
      "summary": "Inconnue, référentiel, solution, ensemble de validité, équations équivalentes.",
      "conceptExplanation": "Si $f$ et $g$ sont deux fonctions, l'égalité $(E) : f(x)=g(x)$ est une équation d'inconnue $x$.\nExemple : $x^2-5=x+3$.\n\n- Le référentiel est l'ensemble où l'on cherche les solutions. S'il n'est pas précisé, c'est $\\mathbb R$. Dans « $x\\in\\mathbb R_+$, $x^2-1=3$ », le référentiel est $\\mathbb R_+$.\n- La lettre choisie pour l'inconnue n'a pas d'importance : $f(x)=g(x)$ et $f(t)=g(t)$ ont les mêmes solutions.\n- Un réel $a$ est solution de $(E)$ si $f(a)=g(a)$.\n- L'ensemble de validité est $D_f\\cap D_g$ : les valeurs pour lesquelles les deux membres existent.\n- Résoudre $(E)$, c'est trouver l'ensemble de ses solutions, noté $S_{\\mathbb R}$. S'il n'y en a aucune : $S_{\\mathbb R}=\\varnothing$.\n- Deux équations sont équivalentes si elles ont le même ensemble de solutions.\n\nExemple : $\\dfrac1x=2x$ a pour ensemble de validité $\\mathbb R\\setminus\\{0\\}$ ; sur cet ensemble, elle équivaut à $2x^2=1$.",
      "keyRule": "Solution : $f(a)=g(a)$. Ensemble de validité : $D_f\\cap D_g$. Équivalentes : mêmes solutions. Pas de solution : $S=\\varnothing$.",
      "formulas": [],
      "workedExample": {
        "title": "Vérifier une solution",
        "statement": "Justifie que $2$ est solution de $x^2-1=x+1$.",
        "methodSteps": [
          "Membre de gauche : $2^2-1=3$.",
          "Membre de droite : $2+1=3$."
        ],
        "conclusion": "Les deux membres sont égaux : $2$ est solution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une équation",
          "stepTheme": "Une équation",
          "stepBadge": "Une équation",
          "paragraphText": "Une équation est une égalité $f(x)=g(x)$ qui contient une inconnue $x$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures est une équation à une seule inconnue ?",
            "options": [
              "$x+3y-z=0$",
              "$3x-5y=2n^2-y^2$",
              "$4y-5=y^2+1$",
              "$4n-y<0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une seule lettre inconnue, $y$, et un signe $=$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le référentiel",
          "stepTheme": "Le référentiel",
          "stepBadge": "Le référentiel",
          "paragraphText": "Le référentiel est l'ensemble dans lequel on cherche les solutions.\nDans « $x\\in\\mathbb R_+$, $x^2-1=3$ », c'est $\\mathbb R_+$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q2",
            "type": "mcq",
            "prompt": "Quel est le référentiel de l'équation « $x\\in\\mathbb R_+$, $x^2-1=3$ » ?",
            "options": [
              "$\\mathbb R_+$",
              "$\\mathbb R$",
              "$\\{-2\\,;2\\}$",
              "$\\mathbb N$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Il est indiqué avant la virgule : $x\\in\\mathbb R_+$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Vérifier une solution",
          "stepTheme": "Vérifier une solution",
          "stepBadge": "Vérifier une solution",
          "paragraphText": "$a$ est solution de $f(x)=g(x)$ si $f(a)=g(a)$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q3",
            "type": "mcq",
            "prompt": "Lequel de ces nombres est solution de $x^2-1=x+1$ ?",
            "options": [
              "$1$",
              "$0$",
              "$3$",
              "$2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$2^2-1=3$ et $2+1=3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Ensemble de validité",
          "stepTheme": "Ensemble de validité",
          "stepBadge": "Ensemble de validité",
          "paragraphText": "L'ensemble de validité est formé des valeurs pour lesquelles les deux membres existent : $D_f\\cap D_g$.\nPour $\\dfrac1x=2x$ : il faut $x\\neq 0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de validité de l'équation $\\dfrac1x=2x$ ?",
            "options": [
              "$\\mathbb R\\setminus\\{-1\\,;1\\}$",
              "$\\mathbb R\\setminus\\{0\\}$",
              "$\\mathbb R\\setminus\\{2\\}$",
              "$\\mathbb R$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ne peut pas diviser par $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "Équations équivalentes",
          "stepTheme": "Équations équivalentes",
          "stepBadge": "Équations équivalentes",
          "paragraphText": "Deux équations sont équivalentes si elles ont le même ensemble de solutions.\n$x^2-1=x+1$ équivaut à $x^2-x-2=0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q5",
            "type": "mcq",
            "prompt": "Quelle équation est équivalente à $x^2-1=x+1$ ?",
            "options": [
              "$x^2+x-2=0$",
              "$x^2-x-2=0$",
              "$x^2-x=0$",
              "$x^2-x+2=0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On passe tout dans le membre de gauche : $x^2-1-x-1=0$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Aucune solution",
          "stepTheme": "Aucune solution",
          "stepBadge": "Aucune solution",
          "paragraphText": "Si une équation n'a aucune solution, son ensemble de solutions est l'ensemble vide : $S_{\\mathbb R}=\\varnothing$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions dans $\\mathbb R$ de $x^2=-4$ ?",
            "options": [
              "$\\{-2\\,;2\\}$",
              "$\\{2\\}$",
              "$\\{-2\\}$",
              "$\\varnothing$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Un carré n'est jamais négatif."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "La lettre ne compte pas",
          "stepTheme": "La lettre ne compte pas",
          "stepBadge": "La lettre ne compte pas",
          "paragraphText": "Le nom de l'inconnue est sans importance : $f(x)=g(x)$ et $f(t)=g(t)$ ont exactement les mêmes solutions.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q7",
            "type": "mcq",
            "prompt": "$x^2=9$ a pour solutions $-3$ et $3$. Quelles sont les solutions de $t^2=9$ ?",
            "options": [
              "$-3$ et $3$",
              "$-t$ et $t$",
              "Aucune, car $t$ n'est pas $x$",
              "Seulement $3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Seule la lettre change, pas l'équation."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures est une équation à une seule inconnue ?",
          "options": [
            "$x+3y-z=0$",
            "$3x-5y=2n^2-y^2$",
            "$4y-5=y^2+1$",
            "$4n-y<0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une seule lettre inconnue, $y$, et un signe $=$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q2",
          "type": "mcq",
          "prompt": "Quel est le référentiel de l'équation « $x\\in\\mathbb R_+$, $x^2-1=3$ » ?",
          "options": [
            "$\\mathbb R_+$",
            "$\\mathbb R$",
            "$\\{-2\\,;2\\}$",
            "$\\mathbb N$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Il est indiqué avant la virgule : $x\\in\\mathbb R_+$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q3",
          "type": "mcq",
          "prompt": "Lequel de ces nombres est solution de $x^2-1=x+1$ ?",
          "options": [
            "$1$",
            "$0$",
            "$3$",
            "$2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$2^2-1=3$ et $2+1=3$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de validité de l'équation $\\dfrac1x=2x$ ?",
          "options": [
            "$\\mathbb R\\setminus\\{-1\\,;1\\}$",
            "$\\mathbb R\\setminus\\{0\\}$",
            "$\\mathbb R\\setminus\\{2\\}$",
            "$\\mathbb R$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ne peut pas diviser par $0$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q5",
          "type": "mcq",
          "prompt": "Quelle équation est équivalente à $x^2-1=x+1$ ?",
          "options": [
            "$x^2+x-2=0$",
            "$x^2-x-2=0$",
            "$x^2-x=0$",
            "$x^2-x+2=0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On passe tout dans le membre de gauche : $x^2-1-x-1=0$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions dans $\\mathbb R$ de $x^2=-4$ ?",
          "options": [
            "$\\{-2\\,;2\\}$",
            "$\\{2\\}$",
            "$\\{-2\\}$",
            "$\\varnothing$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Un carré n'est jamais négatif."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p01_q7",
          "type": "mcq",
          "prompt": "$x^2=9$ a pour solutions $-3$ et $3$. Quelles sont les solutions de $t^2=9$ ?",
          "options": [
            "$-3$ et $3$",
            "$-t$ et $t$",
            "Aucune, car $t$ n'est pas $x$",
            "Seulement $3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Seule la lettre change, pas l'équation."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l11_equations_inequations_p02",
      "order": 2,
      "title": "Équations polynomiales",
      "summary": "Tout ramener à zéro, factoriser, utiliser le produit nul.",
      "conceptExplanation": "Méthode pour résoudre $P(x)=Q(x)$, où $P$ et $Q$ sont des polynômes :\n1. on se ramène à $H(x)=0$ avec $H(x)=P(x)-Q(x)$ ;\n2. on factorise $H$ si possible ;\n3. on utilise la règle du produit nul : un produit est nul si et seulement si l'un de ses facteurs est nul.\n\nExemples :\n- $x^2-x=5x-9$ ⇔ $x^2-6x+9=0$ ⇔ $(x-3)^2=0$ ⇔ $x=3$ : $S=\\{3\\}$ ;\n- $y^2-3=(y+1)^2$ ⇔ $y^2-3=y^2+2y+1$ ⇔ $2y=-4$ ⇔ $y=-2$ ;\n- $P(x)=x^3-4x^2+5x-2=(x-1)(x^2-3x+2)=(x-1)^2(x-2)$, donc $P(x)=0$ ⇔ $x=1$ ou $x=2$ ;\n- $2x^3-x^2-x-3=0$ : $\\frac32$ est solution, et $2x^3-x^2-x-3=(2x-3)(x^2+x+1)$ ; comme $x^2+x+1>0$, $S=\\{\\frac32\\}$.\n\nPour factoriser un trinôme, on peut utiliser la forme canonique : $x^2-3x+2=\\left(x-\\frac32\\right)^2-\\frac14=(x-1)(x-2)$.",
      "keyRule": "$P(x)=Q(x)$ ⇔ $P(x)-Q(x)=0$ ; factoriser ; produit nul : $AB=0$ ⇔ $A=0$ ou $B=0$.",
      "formulas": [],
      "workedExample": {
        "title": "Un carré parfait",
        "statement": "Résous $x^2-x=5x-9$.",
        "methodSteps": [
          "On ramène à zéro : $x^2-6x+9=0$.",
          "On reconnaît $(x-3)^2=0$."
        ],
        "conclusion": "$x=3$, donc $S=\\{3\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Ramener à zéro",
          "stepTheme": "Ramener à zéro",
          "stepBadge": "Ramener à zéro",
          "paragraphText": "Pour résoudre $P(x)=Q(x)$, on écrit d'abord $P(x)-Q(x)=0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q1",
            "type": "mcq",
            "prompt": "$x^2-x=5x-9$ équivaut à :",
            "options": [
              "$x^2+4x-9=0$",
              "$x^2-6x-9=0$",
              "$x^2-6x+9=0$",
              "$x^2-4x+9=0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x^2-x-5x+9=x^2-6x+9$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un carré parfait",
          "stepTheme": "Un carré parfait",
          "stepBadge": "Un carré parfait",
          "paragraphText": "$x^2-6x+9=(x-3)^2$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $x^2-6x+9=0$ ?",
            "options": [
              "$\\{-3\\}$",
              "$\\{-3\\,;3\\}$",
              "$\\varnothing$",
              "$\\{3\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$(x-3)^2=0$ ⇔ $x=3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le produit nul",
          "stepTheme": "Le produit nul",
          "stepBadge": "Le produit nul",
          "paragraphText": "Un produit est nul si et seulement si l'un au moins de ses facteurs est nul : $AB=0$ ⇔ $A=0$ ou $B=0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q3",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $(x+2)(5-x)=0$ ?",
            "options": [
              "$2$ et $-5$",
              "$-2$ seulement",
              "$-2$ et $5$",
              "$5$ seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x+2=0$ ou $5-x=0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les carrés s'éliminent",
          "stepTheme": "Les carrés s'éliminent",
          "stepBadge": "Les carrés s'éliminent",
          "paragraphText": "$y^2-3=(y+1)^2$ ⇔ $y^2-3=y^2+2y+1$ ⇔ $-4=2y$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q4",
            "type": "mcq",
            "prompt": "Quelle est la solution de $y^2-3=(y+1)^2$ ?",
            "options": [
              "$y=2$",
              "$y=-2$",
              "$y=-1$",
              "$y=1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les $y^2$ s'annulent : $2y=-4$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Factoriser un trinôme",
          "stepTheme": "Factoriser un trinôme",
          "stepBadge": "Factoriser un trinôme",
          "paragraphText": "Forme canonique : $x^2-3x+2=\\left(x-\\frac32\\right)^2-\\frac14$, puis différence de deux carrés.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q5",
            "type": "mcq",
            "prompt": "Quelle est la forme factorisée de $x^2-3x+2$ ?",
            "options": [
              "$(x-1)(x-2)$",
              "$(x+1)(x+2)$",
              "$(x-1)(x+2)$",
              "$(x-3)(x+1)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\left(x-\\frac32-\\frac12\\right)\\left(x-\\frac32+\\frac12\\right)=(x-2)(x-1)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un polynôme de degré 3",
          "stepTheme": "Un polynôme de degré 3",
          "stepBadge": "Un polynôme de degré 3",
          "paragraphText": "$P(x)=x^3-4x^2+5x-2=(x-1)(x^2-3x+2)=(x-1)^2(x-2)$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q6",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $x^3-4x^2+5x-2=0$ ?",
            "options": [
              "$1$ et $2$",
              "$-1$ et $-2$",
              "$1$, $2$ et $3$",
              "$2$ seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(x-1)^2(x-2)=0$ ⇔ $x=1$ ou $x=2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un facteur sans racine",
          "stepTheme": "Un facteur sans racine",
          "stepBadge": "Un facteur sans racine",
          "paragraphText": "$2x^3-x^2-x-3=(2x-3)(x^2+x+1)$.\nOr $x^2+x+1=\\left(x+\\frac12\\right)^2+\\frac34>0$ : il ne s'annule jamais.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q7",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $2x^3-x^2-x-3=0$ ?",
            "options": [
              "$\\left\\{\\dfrac32\\,;-1\\right\\}$",
              "$\\left\\{\\dfrac32\\right\\}$",
              "$\\left\\{-\\dfrac32\\right\\}$",
              "$\\{1\\,;3\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Seul le facteur $2x-3$ peut s'annuler."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q1",
          "type": "mcq",
          "prompt": "$x^2-x=5x-9$ équivaut à :",
          "options": [
            "$x^2+4x-9=0$",
            "$x^2-6x-9=0$",
            "$x^2-6x+9=0$",
            "$x^2-4x+9=0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x^2-x-5x+9=x^2-6x+9$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $x^2-6x+9=0$ ?",
          "options": [
            "$\\{-3\\}$",
            "$\\{-3\\,;3\\}$",
            "$\\varnothing$",
            "$\\{3\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$(x-3)^2=0$ ⇔ $x=3$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q3",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $(x+2)(5-x)=0$ ?",
          "options": [
            "$2$ et $-5$",
            "$-2$ seulement",
            "$-2$ et $5$",
            "$5$ seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x+2=0$ ou $5-x=0$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q4",
          "type": "mcq",
          "prompt": "Quelle est la solution de $y^2-3=(y+1)^2$ ?",
          "options": [
            "$y=2$",
            "$y=-2$",
            "$y=-1$",
            "$y=1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les $y^2$ s'annulent : $2y=-4$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q5",
          "type": "mcq",
          "prompt": "Quelle est la forme factorisée de $x^2-3x+2$ ?",
          "options": [
            "$(x-1)(x-2)$",
            "$(x+1)(x+2)$",
            "$(x-1)(x+2)$",
            "$(x-3)(x+1)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\left(x-\\frac32-\\frac12\\right)\\left(x-\\frac32+\\frac12\\right)=(x-2)(x-1)$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q6",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $x^3-4x^2+5x-2=0$ ?",
          "options": [
            "$1$ et $2$",
            "$-1$ et $-2$",
            "$1$, $2$ et $3$",
            "$2$ seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(x-1)^2(x-2)=0$ ⇔ $x=1$ ou $x=2$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p02_q7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $2x^3-x^2-x-3=0$ ?",
          "options": [
            "$\\left\\{\\dfrac32\\,;-1\\right\\}$",
            "$\\left\\{\\dfrac32\\right\\}$",
            "$\\left\\{-\\dfrac32\\right\\}$",
            "$\\{1\\,;3\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Seul le facteur $2x-3$ peut s'annuler."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l11_equations_inequations_p03",
      "order": 3,
      "title": "Équations avec des fractions",
      "summary": "L'ensemble de validité d'abord, la vérification ensuite.",
      "conceptExplanation": "Méthode pour résoudre $f(x)=g(x)$ quand $f$ et $g$ sont des fractions rationnelles :\n1. on détermine l'ensemble de validité (les dénominateurs ne doivent pas s'annuler) ;\n2. on se ramène à une équation entre polynômes (produit en croix) ;\n3. on résout cette équation ;\n4. on garde seulement les solutions qui appartiennent à l'ensemble de validité.\n\nExemple : $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$.\n- Validité : $x^2-4\\neq0$ et $x+2\\neq0$, soit $x\\in\\mathbb R\\setminus\\{-2\\,;2\\}$.\n- Produit en croix : $3(x+2)=x^2-4=(x-2)(x+2)$, donc $(x+2)(3-x+2)=0$, soit $(x+2)(5-x)=0$.\n- Solutions possibles : $-2$ et $5$ ; mais $-2$ est interdit.\n- Donc $S=\\{5\\}$.\nVérification : $\\frac{3}{21}=\\frac17$ et $\\frac{1}{7}$ : les deux membres sont égaux.",
      "keyRule": "D'abord l'ensemble de validité (dénominateurs non nuls), puis produit en croix, puis on élimine les valeurs interdites.",
      "formulas": [],
      "workedExample": {
        "title": "Une valeur à éliminer",
        "statement": "Résous $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$.",
        "methodSteps": [
          "Validité : $x\\neq-2$ et $x\\neq2$.",
          "$3(x+2)=(x-2)(x+2)$ ⇔ $(x+2)(5-x)=0$ ⇔ $x=-2$ ou $x=5$.",
          "$-2$ est interdit."
        ],
        "conclusion": "$S=\\{5\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les valeurs interdites",
          "stepTheme": "Les valeurs interdites",
          "stepBadge": "Les valeurs interdites",
          "paragraphText": "Un dénominateur ne doit jamais être nul.\nPour $\\dfrac{3}{x^2-4}$ : $x^2-4\\neq0$, donc $x\\neq-2$ et $x\\neq2$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble de validité de $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$ ?",
            "options": [
              "$\\mathbb R\\setminus\\{-2\\}$",
              "$\\mathbb R\\setminus\\{4\\}$",
              "$\\mathbb R\\setminus\\{-2\\,;2\\}$",
              "$\\mathbb R$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x^2-4=0$ pour $x=-2$ ou $x=2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le produit en croix",
          "stepTheme": "Le produit en croix",
          "stepBadge": "Le produit en croix",
          "paragraphText": "Sur l'ensemble de validité, $\\dfrac{a}{b}=\\dfrac{c}{d}$ ⇔ $ad=bc$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q2",
            "type": "mcq",
            "prompt": "Sur son ensemble de validité, $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$ équivaut à :",
            "options": [
              "$3(x^2-4)=x+2$",
              "$3=x^2-4+x+2$",
              "$3x+2=x^2-4$",
              "$3(x+2)=x^2-4$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On multiplie en croix : $3\\times(x+2)=1\\times(x^2-4)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Factoriser",
          "stepTheme": "Factoriser",
          "stepBadge": "Factoriser",
          "paragraphText": "$3(x+2)=(x-2)(x+2)$ ⇔ $(x+2)\\left[3-(x-2)\\right]=0$ ⇔ $(x+2)(5-x)=0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q3",
            "type": "mcq",
            "prompt": "Quelles sont les valeurs qui annulent $(x+2)(5-x)$ ?",
            "options": [
              "$2$ et $5$",
              "$-2$ et $-5$",
              "$-2$ et $5$",
              "$2$ et $-5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x+2=0$ ou $5-x=0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Éliminer les intrus",
          "stepTheme": "Éliminer les intrus",
          "stepBadge": "Éliminer les intrus",
          "paragraphText": "$-2$ annule un dénominateur de l'équation de départ : il faut l'éliminer.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$ ?",
            "options": [
              "$\\{-2\\,;5\\}$",
              "$\\{-2\\}$",
              "$\\{2\\,;5\\}$",
              "$\\{5\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-2$ est une valeur interdite : seul $5$ convient."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérifier",
          "stepTheme": "Vérifier",
          "stepBadge": "Vérifier",
          "paragraphText": "On peut vérifier en remplaçant : pour $x=5$, $\\dfrac{3}{21}=\\dfrac17$ et $\\dfrac{1}{7}$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q5",
            "type": "mcq",
            "prompt": "Pour $x=5$, que vaut $\\dfrac{3}{x^2-4}$ ?",
            "options": [
              "$\\dfrac17$",
              "$\\dfrac{3}{25}$",
              "$\\dfrac{3}{7}$",
              "$7$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$5^2-4=21$ et $\\frac{3}{21}=\\frac17$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Équation équivalente",
          "stepTheme": "Équation équivalente",
          "stepBadge": "Équation équivalente",
          "paragraphText": "Sur $\\mathbb R\\setminus\\{0\\}$, $\\dfrac1x=2x$ équivaut à $1=2x^2$, soit $x^2=\\dfrac12$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q6",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $\\dfrac1x=2x$ ?",
            "options": [
              "$\\dfrac{\\sqrt2}{2}$ seulement",
              "$-\\dfrac{\\sqrt2}{2}$ et $\\dfrac{\\sqrt2}{2}$",
              "$-\\dfrac12$ et $\\dfrac12$",
              "$-2$ et $2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$x^2=\\frac12$ ⇔ $x=\\pm\\frac{1}{\\sqrt2}=\\pm\\frac{\\sqrt2}{2}$, et ces valeurs ne sont pas interdites."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "definition",
          "stepTitle": "L'ordre des étapes",
          "stepTheme": "L'ordre des étapes",
          "stepBadge": "L'ordre des étapes",
          "paragraphText": "Ordre à respecter : validité → équation entre polynômes → résolution → on garde les solutions valides.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q7",
            "type": "mcq",
            "prompt": "Quelle est la première étape pour résoudre une équation avec des fractions ?",
            "options": [
              "Développer tous les numérateurs",
              "Chercher l'ensemble de validité",
              "Calculer le discriminant",
              "Tracer la courbe"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On repère les valeurs interdites avant tout calcul."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble de validité de $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$ ?",
          "options": [
            "$\\mathbb R\\setminus\\{-2\\}$",
            "$\\mathbb R\\setminus\\{4\\}$",
            "$\\mathbb R\\setminus\\{-2\\,;2\\}$",
            "$\\mathbb R$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x^2-4=0$ pour $x=-2$ ou $x=2$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q2",
          "type": "mcq",
          "prompt": "Sur son ensemble de validité, $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$ équivaut à :",
          "options": [
            "$3(x^2-4)=x+2$",
            "$3=x^2-4+x+2$",
            "$3x+2=x^2-4$",
            "$3(x+2)=x^2-4$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On multiplie en croix : $3\\times(x+2)=1\\times(x^2-4)$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q3",
          "type": "mcq",
          "prompt": "Quelles sont les valeurs qui annulent $(x+2)(5-x)$ ?",
          "options": [
            "$2$ et $5$",
            "$-2$ et $-5$",
            "$-2$ et $5$",
            "$2$ et $-5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x+2=0$ ou $5-x=0$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\dfrac{3}{x^2-4}=\\dfrac{1}{x+2}$ ?",
          "options": [
            "$\\{-2\\,;5\\}$",
            "$\\{-2\\}$",
            "$\\{2\\,;5\\}$",
            "$\\{5\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-2$ est une valeur interdite : seul $5$ convient."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q5",
          "type": "mcq",
          "prompt": "Pour $x=5$, que vaut $\\dfrac{3}{x^2-4}$ ?",
          "options": [
            "$\\dfrac17$",
            "$\\dfrac{3}{25}$",
            "$\\dfrac{3}{7}$",
            "$7$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$5^2-4=21$ et $\\frac{3}{21}=\\frac17$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q6",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $\\dfrac1x=2x$ ?",
          "options": [
            "$\\dfrac{\\sqrt2}{2}$ seulement",
            "$-\\dfrac{\\sqrt2}{2}$ et $\\dfrac{\\sqrt2}{2}$",
            "$-\\dfrac12$ et $\\dfrac12$",
            "$-2$ et $2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$x^2=\\frac12$ ⇔ $x=\\pm\\frac{1}{\\sqrt2}=\\pm\\frac{\\sqrt2}{2}$, et ces valeurs ne sont pas interdites."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p03_q7",
          "type": "mcq",
          "prompt": "Quelle est la première étape pour résoudre une équation avec des fractions ?",
          "options": [
            "Développer tous les numérateurs",
            "Chercher l'ensemble de validité",
            "Calculer le discriminant",
            "Tracer la courbe"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On repère les valeurs interdites avant tout calcul."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l11_equations_inequations_p04",
      "order": 4,
      "title": "Équations avec des valeurs absolues",
      "summary": "Deux cas à résoudre, puis on réunit.",
      "conceptExplanation": "Méthode pour $|f(x)|=|g(x)|$ :\n$|f(x)|=|g(x)|$ ⇔ $f(x)=g(x)$ ou $f(x)=-g(x)$.\nOn résout les deux équations, et l'ensemble des solutions est la réunion des deux ensembles.\n\nExemple : $|x-1|=|3x+2|$.\n- $x-1=3x+2$ ⇔ $-2x=3$ ⇔ $x=-\\frac32$ ;\n- $x-1=-3x-2$ ⇔ $4x=-1$ ⇔ $x=-\\frac14$.\nDonc $S=\\left\\{-\\frac32\\,;-\\frac14\\right\\}$.\n\nCas de $|x-a|=b$ :\n- si $b<0$ : $S=\\varnothing$ (une valeur absolue n'est jamais négative) ;\n- si $b=0$ : $x-a=0$, soit $x=a$ ;\n- si $b>0$ : $x-a=b$ ou $x-a=-b$.\n\nExemple : $|x^2-x|=6$ ⇔ $x^2-x=6$ ou $x^2-x=-6$. La première donne $(x-3)(x+2)=0$ ; la seconde, $x^2-x+6=0$, n'a pas de solution. Donc $S=\\{-2\\,;3\\}$.",
      "keyRule": "$|f|=|g|$ ⇔ $f=g$ ou $f=-g$. $|x-a|=b$ : pas de solution si $b<0$ ; $x=a$ si $b=0$ ; $x=a\\pm b$ si $b>0$.",
      "formulas": [],
      "workedExample": {
        "title": "Deux équations du premier degré",
        "statement": "Résous $|x-1|=|3x+2|$.",
        "methodSteps": [
          "Cas 1 : $x-1=3x+2$ ⇔ $x=-\\frac32$.",
          "Cas 2 : $x-1=-(3x+2)$ ⇔ $4x=-1$ ⇔ $x=-\\frac14$."
        ],
        "conclusion": "$S=\\left\\{-\\dfrac32\\,;-\\dfrac14\\right\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'équivalence",
          "stepTheme": "L'équivalence",
          "stepBadge": "L'équivalence",
          "paragraphText": "$|f(x)|=|g(x)|$ ⇔ $f(x)=g(x)$ ou $f(x)=-g(x)$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q1",
            "type": "mcq",
            "prompt": "$|x-1|=|3x+2|$ équivaut à :",
            "options": [
              "$x-1=3x+2$ ou $x-1=-3x-2$",
              "$x-1=3x+2$ seulement",
              "$x-1=-3x+2$ ou $x+1=3x+2$",
              "$(x-1)(3x+2)=0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux nombres ont la même valeur absolue s'ils sont égaux ou opposés."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Premier cas",
          "stepTheme": "Premier cas",
          "stepBadge": "Premier cas",
          "paragraphText": "$x-1=3x+2$ ⇔ $-2x=3$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la solution de $x-1=3x+2$ ?",
            "options": [
              "$\\dfrac32$",
              "$-\\dfrac14$",
              "$-3$",
              "$-\\dfrac32$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x=\\frac{3}{-2}=-\\frac32$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Second cas",
          "stepTheme": "Second cas",
          "stepBadge": "Second cas",
          "paragraphText": "$x-1=-3x-2$ ⇔ $4x=-1$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q3",
            "type": "mcq",
            "prompt": "Dans le second cas, $x-1=-3x-2$, que vaut $x$ ?",
            "options": [
              "$\\dfrac14$",
              "$-\\dfrac32$",
              "$-\\dfrac14$",
              "$-4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$x=-\\frac14$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Valeur absolue négative ?",
          "stepTheme": "Valeur absolue négative ?",
          "stepBadge": "Valeur absolue négative ?",
          "paragraphText": "Une valeur absolue est toujours positive ou nulle.\nDonc $|x-a|=b$ avec $b<0$ n'a aucune solution.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q4",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $|x-4|=-3$ ?",
            "options": [
              "$\\{1\\}$",
              "$\\{1\\,;7\\}$",
              "$\\varnothing$",
              "$\\{7\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une valeur absolue ne peut pas valoir $-3$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le cas $b>0$",
          "stepTheme": "Le cas $b>0$",
          "stepBadge": "Le cas $b>0$",
          "paragraphText": "Si $b>0$ : $|x-a|=b$ ⇔ $x=a+b$ ou $x=a-b$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q5",
            "type": "mcq",
            "prompt": "Quelles sont les solutions de $|x-4|=3$ ?",
            "options": [
              "$1$ et $7$",
              "$-1$ et $7$",
              "$1$ seulement",
              "$-7$ et $7$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x-4=3$ ou $x-4=-3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Avec un carré",
          "stepTheme": "Avec un carré",
          "stepBadge": "Avec un carré",
          "paragraphText": "$|x^2-x|=6$ ⇔ $x^2-x=6$ ou $x^2-x=-6$.\n$x^2-x-6=(x-3)(x+2)$ ; $x^2-x+6=\\left(x-\\frac12\\right)^2+\\frac{23}{4}>0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $|x^2-x|=6$ ?",
            "options": [
              "$\\{-3\\,;2\\}$",
              "$\\{-2\\,;3\\,;6\\}$",
              "$\\varnothing$",
              "$\\{-2\\,;3\\}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Seule l'équation $x^2-x=6$ a des solutions : $-2$ et $3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier le cas négatif",
          "stepTheme": "Ne pas oublier le cas négatif",
          "stepBadge": "Ne pas oublier le cas négatif",
          "paragraphText": "Erreur fréquente : résoudre seulement $f(x)=g(x)$ et oublier $f(x)=-g(x)$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q7",
            "type": "mcq",
            "prompt": "Un élève résout $|x-1|=|3x+2|$ et trouve seulement $x=-\\dfrac32$. Que lui manque-t-il ?",
            "options": [
              "Rien, sa réponse est complète",
              "La solution du cas $x-1=-(3x+2)$",
              "La vérification que $x\\neq 0$",
              "Le calcul du discriminant"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il manque $x=-\\frac14$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q1",
          "type": "mcq",
          "prompt": "$|x-1|=|3x+2|$ équivaut à :",
          "options": [
            "$x-1=3x+2$ ou $x-1=-3x-2$",
            "$x-1=3x+2$ seulement",
            "$x-1=-3x+2$ ou $x+1=3x+2$",
            "$(x-1)(3x+2)=0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux nombres ont la même valeur absolue s'ils sont égaux ou opposés."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la solution de $x-1=3x+2$ ?",
          "options": [
            "$\\dfrac32$",
            "$-\\dfrac14$",
            "$-3$",
            "$-\\dfrac32$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x=\\frac{3}{-2}=-\\frac32$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q3",
          "type": "mcq",
          "prompt": "Dans le second cas, $x-1=-3x-2$, que vaut $x$ ?",
          "options": [
            "$\\dfrac14$",
            "$-\\dfrac32$",
            "$-\\dfrac14$",
            "$-4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$x=-\\frac14$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q4",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $|x-4|=-3$ ?",
          "options": [
            "$\\{1\\}$",
            "$\\{1\\,;7\\}$",
            "$\\varnothing$",
            "$\\{7\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une valeur absolue ne peut pas valoir $-3$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q5",
          "type": "mcq",
          "prompt": "Quelles sont les solutions de $|x-4|=3$ ?",
          "options": [
            "$1$ et $7$",
            "$-1$ et $7$",
            "$1$ seulement",
            "$-7$ et $7$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x-4=3$ ou $x-4=-3$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $|x^2-x|=6$ ?",
          "options": [
            "$\\{-3\\,;2\\}$",
            "$\\{-2\\,;3\\,;6\\}$",
            "$\\varnothing$",
            "$\\{-2\\,;3\\}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Seule l'équation $x^2-x=6$ a des solutions : $-2$ et $3$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p04_q7",
          "type": "mcq",
          "prompt": "Un élève résout $|x-1|=|3x+2|$ et trouve seulement $x=-\\dfrac32$. Que lui manque-t-il ?",
          "options": [
            "Rien, sa réponse est complète",
            "La solution du cas $x-1=-(3x+2)$",
            "La vérification que $x\\neq 0$",
            "Le calcul du discriminant"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il manque $x=-\\frac14$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l11_equations_inequations_p05",
      "order": 5,
      "title": "Inéquations polynomiales",
      "summary": "Ramener à zéro, factoriser, faire un tableau de signes.",
      "conceptExplanation": "Une inéquation est une inégalité, par exemple $f(x)\\le g(x)$, qui contient une inconnue. Résoudre, c'est trouver l'ensemble de ses solutions, souvent une réunion d'intervalles.\n\nMéthode pour $f(x)<g(x)$ avec des polynômes :\n1. on se ramène à $P(x)<0$ avec $P(x)=f(x)-g(x)$ ;\n2. on factorise $P(x)$ ;\n3. on étudie le signe de chaque facteur dans un tableau de signes ;\n4. on lit les intervalles où l'inégalité est vérifiée.\n\nExemple : $n^2>5n-6$ ⇔ $n^2-5n+6>0$.\nForme canonique : $n^2-5n+6=\\left(n-\\frac52\\right)^2-\\frac14=(n-2)(n-3)$.\nTableau : le produit est positif à l'extérieur des racines.\nDonc $S=\\left]-\\infty\\,;2\\right[\\cup\\left]3\\,;+\\infty\\right[$.\n\nCas simple : $2x^2-x+1\\le5+2x^2$ ⇔ $-x\\le4$ ⇔ $x\\ge-4$, donc $S=[-4\\,;+\\infty[$.\nAttention : multiplier ou diviser par un nombre négatif change le sens de l'inégalité.",
      "keyRule": "Ramener à $P(x)<0$ (ou $>0$), factoriser, tableau de signes. Diviser par un négatif inverse le sens.",
      "formulas": [],
      "workedExample": {
        "title": "Avec un tableau de signes",
        "statement": "Résous $n^2>5n-6$.",
        "methodSteps": [
          "$n^2-5n+6>0$ et $n^2-5n+6=(n-2)(n-3)$.",
          "Tableau : $(n-2)(n-3)$ est positif pour $n<2$ et pour $n>3$, négatif entre $2$ et $3$."
        ],
        "conclusion": "$S=\\left]-\\infty\\,;2\\right[\\cup\\left]3\\,;+\\infty\\right[$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une inéquation",
          "stepTheme": "Une inéquation",
          "stepBadge": "Une inéquation",
          "paragraphText": "Une inéquation est une inégalité ($<$, $\\le$, $>$, $\\ge$) contenant une inconnue.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces écritures est une inéquation à une seule inconnue ?",
            "options": [
              "$4n-y<0$",
              "$4t^2-t\\ge 2t$",
              "$4y-5=y^2+1$",
              "$x+3y-z=0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un signe d'inégalité et une seule inconnue, $t$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Cas du premier degré",
          "stepTheme": "Cas du premier degré",
          "stepBadge": "Cas du premier degré",
          "paragraphText": "$2x^2-x+1\\le 5+2x^2$ ⇔ $-x\\le 4$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q2",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $2x^2-x+1\\le 5+2x^2$ ?",
            "options": [
              "$]-\\infty\\,;-4]$",
              "$[4\\,;+\\infty[$",
              "$]-\\infty\\,;4]$",
              "$[-4\\,;+\\infty[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-x\\le4$ ⇔ $x\\ge-4$ (on change le sens en multipliant par $-1$)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Diviser par un négatif",
          "stepTheme": "Diviser par un négatif",
          "stepBadge": "Diviser par un négatif",
          "paragraphText": "Quand on multiplie ou divise les deux membres par un nombre négatif, le sens de l'inégalité change.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q3",
            "type": "mcq",
            "prompt": "$-3x<12$ équivaut à :",
            "options": [
              "$x>-4$",
              "$x<-4$",
              "$x>4$",
              "$x<4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On divise par $-3$ : le $<$ devient $>$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Ramener à zéro",
          "stepTheme": "Ramener à zéro",
          "stepBadge": "Ramener à zéro",
          "paragraphText": "$n^2>5n-6$ ⇔ $n^2-5n+6>0$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q4",
            "type": "mcq",
            "prompt": "$n^2>5n-6$ équivaut à :",
            "options": [
              "$n^2-5n-6>0$",
              "$n^2+5n+6>0$",
              "$n^2-5n+6>0$",
              "$n^2-5n+6<0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On soustrait $5n-6$ des deux côtés."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le tableau de signes",
          "stepTheme": "Le tableau de signes",
          "stepBadge": "Le tableau de signes",
          "paragraphText": "$n^2-5n+6=(n-2)(n-3)$.\nLe produit de deux facteurs est positif quand ils ont le même signe.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q5",
            "type": "mcq",
            "prompt": "Sur quel intervalle $(n-2)(n-3)$ est-il négatif ?",
            "options": [
              "$]-\\infty\\,;2[$",
              "$]3\\,;+\\infty[$",
              "$]-3\\,;-2[$",
              "$]2\\,;3[$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Entre les racines, $n-2>0$ et $n-3<0$ : le produit est négatif."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La conclusion",
          "stepTheme": "La conclusion",
          "stepBadge": "La conclusion",
          "paragraphText": "$(n-2)(n-3)>0$ à l'extérieur des racines $2$ et $3$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q6",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $n^2>5n-6$ ?",
            "options": [
              "$\\left]2\\,;3\\right[$",
              "$\\left[2\\,;3\\right]$",
              "$\\left]-\\infty\\,;2\\right[\\cup\\left]3\\,;+\\infty\\right[$",
              "$\\left]-\\infty\\,;-3\\right[\\cup\\left]-2\\,;+\\infty\\right[$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'inégalité est stricte : $2$ et $3$ sont exclus."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Crochets ouverts ou fermés",
          "stepTheme": "Crochets ouverts ou fermés",
          "stepBadge": "Crochets ouverts ou fermés",
          "paragraphText": "• Inégalité stricte ($<$, $>$) : les racines sont exclues (crochets ouverts).\n• Inégalité large ($\\le$, $\\ge$) : les racines sont incluses.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q7",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $(n-2)(n-3)\\le 0$ ?",
            "options": [
              "$]2\\,;3[$",
              "$[2\\,;3]$",
              "$]-\\infty\\,;2]\\cup[3\\,;+\\infty[$",
              "$\\{2\\,;3\\}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit est négatif entre $2$ et $3$, et nul en $2$ et $3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces écritures est une inéquation à une seule inconnue ?",
          "options": [
            "$4n-y<0$",
            "$4t^2-t\\ge 2t$",
            "$4y-5=y^2+1$",
            "$x+3y-z=0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un signe d'inégalité et une seule inconnue, $t$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q2",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $2x^2-x+1\\le 5+2x^2$ ?",
          "options": [
            "$]-\\infty\\,;-4]$",
            "$[4\\,;+\\infty[$",
            "$]-\\infty\\,;4]$",
            "$[-4\\,;+\\infty[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-x\\le4$ ⇔ $x\\ge-4$ (on change le sens en multipliant par $-1$)."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q3",
          "type": "mcq",
          "prompt": "$-3x<12$ équivaut à :",
          "options": [
            "$x>-4$",
            "$x<-4$",
            "$x>4$",
            "$x<4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On divise par $-3$ : le $<$ devient $>$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q4",
          "type": "mcq",
          "prompt": "$n^2>5n-6$ équivaut à :",
          "options": [
            "$n^2-5n-6>0$",
            "$n^2+5n+6>0$",
            "$n^2-5n+6>0$",
            "$n^2-5n+6<0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On soustrait $5n-6$ des deux côtés."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q5",
          "type": "mcq",
          "prompt": "Sur quel intervalle $(n-2)(n-3)$ est-il négatif ?",
          "options": [
            "$]-\\infty\\,;2[$",
            "$]3\\,;+\\infty[$",
            "$]-3\\,;-2[$",
            "$]2\\,;3[$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Entre les racines, $n-2>0$ et $n-3<0$ : le produit est négatif."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q6",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $n^2>5n-6$ ?",
          "options": [
            "$\\left]2\\,;3\\right[$",
            "$\\left[2\\,;3\\right]$",
            "$\\left]-\\infty\\,;2\\right[\\cup\\left]3\\,;+\\infty\\right[$",
            "$\\left]-\\infty\\,;-3\\right[\\cup\\left]-2\\,;+\\infty\\right[$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'inégalité est stricte : $2$ et $3$ sont exclus."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p05_q7",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $(n-2)(n-3)\\le 0$ ?",
          "options": [
            "$]2\\,;3[$",
            "$[2\\,;3]$",
            "$]-\\infty\\,;2]\\cup[3\\,;+\\infty[$",
            "$\\{2\\,;3\\}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit est négatif entre $2$ et $3$, et nul en $2$ et $3$."
        }
      ]
    },
    {
      "id": "seconde_c_maths_numerique_l11_equations_inequations_p06",
      "order": 6,
      "title": "Inéquations avec des fractions et problèmes",
      "summary": "Tableau de signes avec un dénominateur ; mettre un problème en équation.",
      "conceptExplanation": "Méthode pour une inéquation avec des fractions :\n1. ensemble de validité (dénominateurs non nuls) ;\n2. on ramène tout dans un membre : $\\dfrac{A(x)}{B(x)}<0$ ;\n3. tableau de signes du numérateur et du dénominateur ;\n4. on conclut, en excluant toujours les valeurs interdites (double barre dans le tableau).\n\nExemple : $\\dfrac{3x}{2+x}>0$ avec $x\\neq-2$. Le quotient est positif quand $3x$ et $2+x$ ont le même signe : $S=]-\\infty\\,;-2[\\cup]0\\,;+\\infty[$.\n\nAttention : on ne multiplie jamais les deux membres d'une inéquation par une expression dont on ne connaît pas le signe.\n\nMettre un problème en équation :\n- Héritage : 15 % pour Claude, $\\frac25$ pour Martial, $\\frac14$ pour Léa, et $600\\,000$ F pour Dieudonné. Si $S$ est la somme : $0{,}15S+0{,}4S+0{,}25S+600\\,000=S$, donc $0{,}2S=600\\,000$ et $S=3\\,000\\,000$ F.\n- Manuels : location $100\\,000$ F par jour et $300$ F de papier par manuel. Prix de revient d'un manuel pour $n$ manuels : $\\dfrac{100\\,000+300n}{n}<750$ ⇔ $100\\,000<450n$ ⇔ $n>222{,}2$. Il faut au moins $223$ manuels.\n- Épargne partagée : pour que le cadet ait au moins $2\\,000\\,000$ F, il faut une épargne d'au moins $21\\,060\\,000$ F.",
      "keyRule": "Fractions : validité, tout dans un membre, tableau de signes, valeurs interdites exclues. Problème : choisir l'inconnue, écrire l'équation, résoudre, vérifier.",
      "formulas": [],
      "workedExample": {
        "title": "Le prix de revient",
        "statement": "La location coûte $100\\,000$ F par jour et le papier $300$ F par manuel. Combien de manuels faut-il imprimer pour que chacun revienne à moins de $750$ F ?",
        "methodSteps": [
          "Prix d'un manuel : $\\dfrac{100\\,000+300n}{n}$.",
          "$\\dfrac{100\\,000+300n}{n}<750$ ⇔ $100\\,000+300n<750n$ ⇔ $n>\\dfrac{100\\,000}{450}\\approx222{,}2$."
        ],
        "conclusion": "Il faut imprimer au moins $223$ manuels par jour."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Signe d'un quotient",
          "stepTheme": "Signe d'un quotient",
          "stepBadge": "Signe d'un quotient",
          "paragraphText": "Un quotient est positif quand le numérateur et le dénominateur ont le même signe.\n$\\dfrac{3x}{2+x}$ : $3x$ change de signe en $0$, $2+x$ en $-2$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q1",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\dfrac{3x}{2+x}>0$ ?",
            "options": [
              "$]-\\infty\\,;-2[\\cup]0\\,;+\\infty[$",
              "$]-2\\,;0[$",
              "$]0\\,;+\\infty[$",
              "$]-\\infty\\,;-2]\\cup[0\\,;+\\infty[$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Mêmes signes pour $x<-2$ et pour $x>0$ ; $-2$ est interdit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "Valeur interdite",
          "stepTheme": "Valeur interdite",
          "stepBadge": "Valeur interdite",
          "paragraphText": "Une valeur qui annule le dénominateur n'est jamais solution, même avec $\\ge$ ou $\\le$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q2",
            "type": "mcq",
            "prompt": "Dans $\\dfrac{3x}{2+x}\\ge 0$, la valeur $-2$ est-elle solution ?",
            "options": [
              "Non, elle annule le dénominateur",
              "Oui, car l'inégalité est large",
              "Oui, car $3\\times(-2)$ est négatif",
              "Seulement si $x>0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le quotient n'existe pas en $x=-2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Tout dans un membre",
          "stepTheme": "Tout dans un membre",
          "stepBadge": "Tout dans un membre",
          "paragraphText": "$\\dfrac{2x+7}{3}\\le\\dfrac{x-9}{x}$ ($x\\neq0$) ⇔ $\\dfrac{2x^2+4x+27}{3x}\\le0$.\nLe numérateur est toujours positif (son discriminant est négatif).",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q3",
            "type": "mcq",
            "prompt": "Quel est l'ensemble des solutions de $\\dfrac{2x+7}{3}\\le\\dfrac{x-9}{x}$ ?",
            "options": [
              "$]0\\,;+\\infty[$",
              "$]-\\infty\\,;0[$",
              "$]-\\infty\\,;0]$",
              "$\\varnothing$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le signe du quotient est celui de $3x$ : négatif pour $x<0$ ; $0$ est interdit."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Ne pas multiplier au hasard",
          "stepTheme": "Ne pas multiplier au hasard",
          "stepBadge": "Ne pas multiplier au hasard",
          "paragraphText": "On ne multiplie pas les deux membres par $x$ quand on ne connaît pas le signe de $x$ : le sens de l'inégalité pourrait changer.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q4",
            "type": "mcq",
            "prompt": "Pourquoi ne peut-on pas « chasser » le dénominateur $x$ dans une inéquation ?",
            "options": [
              "Parce que $x$ est toujours négatif",
              "Parce que c'est interdit dans les équations",
              "Parce que le signe de $x$ est inconnu",
              "Parce que $x$ est toujours nul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Multiplier par un négatif inverserait l'inégalité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L'héritage",
          "stepTheme": "L'héritage",
          "stepBadge": "L'héritage",
          "paragraphText": "15 % pour Claude, $\\frac25$ pour Martial, $\\frac14$ pour Léa, le reste ($600\\,000$ F) pour Dieudonné.\nLes trois premières parts font $0{,}15+0{,}4+0{,}25=0{,}8$ de la somme.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q5",
            "type": "mcq",
            "prompt": "Un père partage la somme $S$ qu'il a placée en banque : 15 % pour Claude, $\\dfrac25$ pour Martial, $\\dfrac14$ pour Léa, et le reste, soit $600\\,000$ F, pour Dieudonné. Quelle somme $S$ a-t-il placée ?",
            "options": [
              "$750\\,000$ F",
              "$2\\,400\\,000$ F",
              "$1\\,200\\,000$ F",
              "$3\\,000\\,000$ F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le reste vaut $0{,}2S=600\\,000$, donc $S=3\\,000\\,000$ F."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Les manuels",
          "stepTheme": "Les manuels",
          "stepBadge": "Les manuels",
          "paragraphText": "Prix d'un manuel : $\\dfrac{100\\,000+300n}{n}<750$ ⇔ $450n>100\\,000$ ⇔ $n>222{,}2$.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q6",
            "type": "mcq",
            "prompt": "Une imprimerie loue sa machine $100\\,000$ F par jour et dépense $300$ F de papier par manuel. Le prix de revient d'un manuel, $\\dfrac{100\\,000+300n}{n}$ pour $n$ manuels, doit être inférieur à $750$ F. Combien de manuels faut-il imprimer au minimum par jour ?",
            "options": [
              "$222$",
              "$134$",
              "$223$",
              "$334$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$n$ est un entier strictement supérieur à $222{,}2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "L'épargne partagée",
          "stepTheme": "L'épargne partagée",
          "stepBadge": "L'épargne partagée",
          "paragraphText": "Chaque enfant reçoit le tiers de ce qui reste, moins $270\\,000$ F. On remonte depuis la part du cadet (au moins $2\\,000\\,000$ F) : restes successifs $6\\,810\\,000$, $9\\,810\\,000$, $14\\,310\\,000$ F.",
          "exercise": {
            "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q7",
            "type": "mcq",
            "prompt": "Une épargne $S$ est partagée entre trois enfants : chacun reçoit à son tour le tiers de ce qui reste, moins $270\\,000$ F. En remontant depuis le cadet (au moins $2\\,000\\,000$ F), les restes successifs sont $6\\,810\\,000$ F, $9\\,810\\,000$ F et $14\\,310\\,000$ F, avec $S=\\dfrac32\\times(14\\,310\\,000-270\\,000)$. Quelle épargne minimale faut-il ?",
            "options": [
              "$8\\,000\\,000$ F",
              "$14\\,310\\,000$ F",
              "$6\\,810\\,000$ F",
              "$21\\,060\\,000$ F"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$S=\\frac32\\times(14\\,310\\,000-270\\,000)=21\\,060\\,000$ F."
          }
        }
      ],
      "exercises": [
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q1",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\dfrac{3x}{2+x}>0$ ?",
          "options": [
            "$]-\\infty\\,;-2[\\cup]0\\,;+\\infty[$",
            "$]-2\\,;0[$",
            "$]0\\,;+\\infty[$",
            "$]-\\infty\\,;-2]\\cup[0\\,;+\\infty[$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Mêmes signes pour $x<-2$ et pour $x>0$ ; $-2$ est interdit."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q2",
          "type": "mcq",
          "prompt": "Dans $\\dfrac{3x}{2+x}\\ge 0$, la valeur $-2$ est-elle solution ?",
          "options": [
            "Non, elle annule le dénominateur",
            "Oui, car l'inégalité est large",
            "Oui, car $3\\times(-2)$ est négatif",
            "Seulement si $x>0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le quotient n'existe pas en $x=-2$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q3",
          "type": "mcq",
          "prompt": "Quel est l'ensemble des solutions de $\\dfrac{2x+7}{3}\\le\\dfrac{x-9}{x}$ ?",
          "options": [
            "$]0\\,;+\\infty[$",
            "$]-\\infty\\,;0[$",
            "$]-\\infty\\,;0]$",
            "$\\varnothing$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le signe du quotient est celui de $3x$ : négatif pour $x<0$ ; $0$ est interdit."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q4",
          "type": "mcq",
          "prompt": "Pourquoi ne peut-on pas « chasser » le dénominateur $x$ dans une inéquation ?",
          "options": [
            "Parce que $x$ est toujours négatif",
            "Parce que c'est interdit dans les équations",
            "Parce que le signe de $x$ est inconnu",
            "Parce que $x$ est toujours nul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Multiplier par un négatif inverserait l'inégalité."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q5",
          "type": "mcq",
          "prompt": "Un père partage la somme $S$ qu'il a placée en banque : 15 % pour Claude, $\\dfrac25$ pour Martial, $\\dfrac14$ pour Léa, et le reste, soit $600\\,000$ F, pour Dieudonné. Quelle somme $S$ a-t-il placée ?",
          "options": [
            "$750\\,000$ F",
            "$2\\,400\\,000$ F",
            "$1\\,200\\,000$ F",
            "$3\\,000\\,000$ F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le reste vaut $0{,}2S=600\\,000$, donc $S=3\\,000\\,000$ F."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q6",
          "type": "mcq",
          "prompt": "Une imprimerie loue sa machine $100\\,000$ F par jour et dépense $300$ F de papier par manuel. Le prix de revient d'un manuel, $\\dfrac{100\\,000+300n}{n}$ pour $n$ manuels, doit être inférieur à $750$ F. Combien de manuels faut-il imprimer au minimum par jour ?",
          "options": [
            "$222$",
            "$134$",
            "$223$",
            "$334$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$n$ est un entier strictement supérieur à $222{,}2$."
        },
        {
          "id": "seconde_c_maths_numerique_l11_equations_inequations_p06_q7",
          "type": "mcq",
          "prompt": "Une épargne $S$ est partagée entre trois enfants : chacun reçoit à son tour le tiers de ce qui reste, moins $270\\,000$ F. En remontant depuis le cadet (au moins $2\\,000\\,000$ F), les restes successifs sont $6\\,810\\,000$ F, $9\\,810\\,000$ F et $14\\,310\\,000$ F, avec $S=\\dfrac32\\times(14\\,310\\,000-270\\,000)$. Quelle épargne minimale faut-il ?",
          "options": [
            "$8\\,000\\,000$ F",
            "$14\\,310\\,000$ F",
            "$6\\,810\\,000$ F",
            "$21\\,060\\,000$ F"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$S=\\frac32\\times(14\\,310\\,000-270\\,000)=21\\,060\\,000$ F."
        }
      ]
    }
  ]
};
