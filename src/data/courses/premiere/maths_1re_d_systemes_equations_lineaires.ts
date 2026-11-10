import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1D Maths leçon 11 SYSTEMES LINEAIRES.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_D_L11_SYSTEMES_EQUATIONS_LINEAIRES: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 11,
  "title": "Leçon 11 : Systèmes d'équations linéaires dans ℝ² et dans ℝ³",
  "summary": "Déterminant et nombre de solutions, substitution, combinaison et méthode de Cramer, interprétation graphique, systèmes de trois équations par substitution et par le pivot de Gauss, mise en équations de problèmes.",
  "officialVolumeHours": 3,
  "contentVersion": 2,
  "source": "1D Maths leçon 11 SYSTEMES LINEAIRES.pdf",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01",
      "order": 1,
      "title": "Le déterminant d'un système de deux équations",
      "summary": "Le déterminant $ab'-a'b$ dit si le système a une seule solution.",
      "conceptExplanation": "Un système de deux équations linéaires à deux inconnues $(x;y)$ s'écrit\n$$(S):\\begin{cases}ax+by=c\\\\a'x+b'y=c'\\end{cases}$$\noù $a$, $b$, $c$, $a'$, $b'$, $c'$ sont des réels.\n\nDéfinition : le déterminant de $(S)$ est le réel\n$$\\begin{vmatrix}a&b\\\\a'&b'\\end{vmatrix}=ab'-a'b.$$\nOn multiplie « en croix » : diagonale descendante moins diagonale montante.\n\nExemple : pour $\\begin{cases}2x+3y=1\\\\5x+y=0\\end{cases}$, $D=2\\times1-5\\times3=-13$.\n\nPropriété (avec $(a;b)\\neq(0;0)$ et $(a';b')\\neq(0;0)$) :\n- si $D\\neq0$, le système a une UNIQUE solution ;\n- si $D=0$, il n'a aucune solution ou il en a une infinité.\n\nPour départager quand $D=0$ : on prend un couple solution de la 1re équation et on teste la 2e.\n- $\\begin{cases}3x+15y=-2\\\\2x+10y=6\\end{cases}$ : $D=30-30=0$. Le couple $\\left(-\\dfrac23;0\\right)$ vérifie la 1re mais pas la 2e : aucune solution.\n- $\\begin{cases}-\\sqrt2x+y=\\sqrt3\\\\2x-\\sqrt2y=-\\sqrt6\\end{cases}$ : $D=2-2=0$ et $(0;\\sqrt3)$ vérifie les deux : une infinité de solutions.",
      "keyRule": "$D=ab'-a'b$. Si $D\\neq0$ : une seule solution. Si $D=0$ : aucune ou une infinité (on teste un couple).",
      "formulas": [
        {
          "name": "Déterminant",
          "formula": "\\begin{vmatrix}a&b\\\\a'&b'\\end{vmatrix}=ab'-a'b"
        }
      ],
      "workedExample": {
        "title": "Compter les solutions",
        "statement": "Combien de solutions a $\\begin{cases}3x-y=1\\\\6x-2y=-1\\end{cases}$ ?",
        "methodSteps": [
          "$D=3\\times(-2)-6\\times(-1)=-6+6=0$ : aucune ou une infinité.",
          "Le couple $(1;2)$ vérifie $3x-y=1$, mais $6-4=2\\neq-1$."
        ],
        "conclusion": "Le système n'a aucune solution."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Calculer un déterminant",
          "stepTheme": "Calculer un déterminant",
          "stepBadge": "Calculer un déterminant",
          "paragraphText": "$\\begin{vmatrix}a&b\\\\a'&b'\\end{vmatrix}=ab'-a'b$. Pour $\\begin{cases}2x+3y=1\\\\5x+y=0\\end{cases}$ : $2\\times1-5\\times3=-13$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q1",
            "type": "mcq",
            "prompt": "Que vaut le déterminant de $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$ ?",
            "options": [
              "$7$",
              "$5$",
              "$-7$",
              "$-5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$1\\times(-1)-3\\times2=-1-6=-7$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "piege",
          "stepTitle": "L'ordre du calcul",
          "stepTheme": "L'ordre du calcul",
          "stepBadge": "L'ordre du calcul",
          "paragraphText": "C'est $ab'-a'b$ : on soustrait le produit de la diagonale montante. Inverser l'ordre change le signe.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q2",
            "type": "mcq",
            "prompt": "Que vaut $\\begin{vmatrix}2&3\\\\1&2\\end{vmatrix}$ ?",
            "options": [
              "$7$",
              "$1$",
              "$-1$",
              "$4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\times2-1\\times3=4-3=1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une solution unique",
          "stepTheme": "Une solution unique",
          "stepBadge": "Une solution unique",
          "paragraphText": "Si $D\\neq0$, le système admet un unique couple solution.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q3",
            "type": "mcq",
            "prompt": "Le déterminant d'un système vaut $-13$. Combien a-t-il de solutions ?",
            "options": [
              "Aucune",
              "Une infinité",
              "Deux",
              "Une seule"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$-13\\neq0$ : un unique couple solution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Quand $D=0$",
          "stepTheme": "Quand $D=0$",
          "stepBadge": "Quand $D=0$",
          "paragraphText": "Si $D=0$, il n'y a aucune solution ou une infinité. On ne peut pas conclure sans un test.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q4",
            "type": "mcq",
            "prompt": "Que vaut le déterminant de $\\begin{cases}3x+15y=-2\\\\2x+10y=6\\end{cases}$ ?",
            "options": [
              "$0$",
              "$60$",
              "$-2$",
              "$15$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3\\times10-2\\times15=30-30=0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Tester un couple",
          "stepTheme": "Tester un couple",
          "stepBadge": "Tester un couple",
          "paragraphText": "On prend un couple qui vérifie la 1re équation. S'il vérifie aussi la 2e : infinité. Sinon : aucune solution.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q5",
            "type": "mcq",
            "prompt": "Pour $\\begin{cases}3x+15y=-2\\\\2x+10y=6\\end{cases}$, $\\left(-\\dfrac23;0\\right)$ vérifie la 1re équation mais pas la 2e. Conclusion ?",
            "options": [
              "Une seule solution",
              "Aucune solution",
              "Une infinité de solutions",
              "Deux solutions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$D=0$ et le couple ne vérifie pas les deux équations : aucune solution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une infinité",
          "stepTheme": "Une infinité",
          "stepBadge": "Une infinité",
          "paragraphText": "Si une équation est un multiple de l'autre, elles disent la même chose : une infinité de solutions.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q6",
            "type": "mcq",
            "prompt": "Combien de solutions a $\\begin{cases}x+2y=3\\\\2x+4y=6\\end{cases}$ ?",
            "options": [
              "Aucune",
              "Une seule",
              "Deux",
              "Une infinité"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La 2e équation est la 1re multipliée par $2$ : tout couple solution de l'une l'est de l'autre."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Avec des racines",
          "stepTheme": "Avec des racines",
          "stepBadge": "Avec des racines",
          "paragraphText": "$\\begin{cases}\\sqrt2x-2y=\\sqrt2\\\\2x-2\\sqrt2y=-2\\end{cases}$ : $D=\\sqrt2\\times(-2\\sqrt2)-2\\times(-2)=-4+4=0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q7",
            "type": "mcq",
            "prompt": "Pour $\\begin{cases}\\sqrt2x-2y=\\sqrt2\\\\2x-2\\sqrt2y=-2\\end{cases}$, le déterminant vaut $0$. Le couple $(1;0)$ vérifie la 1re équation mais donne $2\\neq-2$ dans la 2e. Combien de solutions ?",
            "options": [
              "Aucune",
              "Une seule",
              "Une infinité",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$D=0$ et le test échoue : aucune solution (deux droites parallèles distinctes)."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q1",
          "type": "mcq",
          "prompt": "Que vaut le déterminant de $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$ ?",
          "options": [
            "$7$",
            "$5$",
            "$-7$",
            "$-5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$1\\times(-1)-3\\times2=-1-6=-7$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q2",
          "type": "mcq",
          "prompt": "Que vaut $\\begin{vmatrix}2&3\\\\1&2\\end{vmatrix}$ ?",
          "options": [
            "$7$",
            "$1$",
            "$-1$",
            "$4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\times2-1\\times3=4-3=1$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q3",
          "type": "mcq",
          "prompt": "Le déterminant d'un système vaut $-13$. Combien a-t-il de solutions ?",
          "options": [
            "Aucune",
            "Une infinité",
            "Deux",
            "Une seule"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$-13\\neq0$ : un unique couple solution."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q4",
          "type": "mcq",
          "prompt": "Que vaut le déterminant de $\\begin{cases}3x+15y=-2\\\\2x+10y=6\\end{cases}$ ?",
          "options": [
            "$0$",
            "$60$",
            "$-2$",
            "$15$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3\\times10-2\\times15=30-30=0$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q5",
          "type": "mcq",
          "prompt": "Pour $\\begin{cases}3x+15y=-2\\\\2x+10y=6\\end{cases}$, $\\left(-\\dfrac23;0\\right)$ vérifie la 1re équation mais pas la 2e. Conclusion ?",
          "options": [
            "Une seule solution",
            "Aucune solution",
            "Une infinité de solutions",
            "Deux solutions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$D=0$ et le couple ne vérifie pas les deux équations : aucune solution."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q6",
          "type": "mcq",
          "prompt": "Combien de solutions a $\\begin{cases}x+2y=3\\\\2x+4y=6\\end{cases}$ ?",
          "options": [
            "Aucune",
            "Une seule",
            "Deux",
            "Une infinité"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La 2e équation est la 1re multipliée par $2$ : tout couple solution de l'une l'est de l'autre."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p01_q7",
          "type": "mcq",
          "prompt": "Pour $\\begin{cases}\\sqrt2x-2y=\\sqrt2\\\\2x-2\\sqrt2y=-2\\end{cases}$, le déterminant vaut $0$. Le couple $(1;0)$ vérifie la 1re équation mais donne $2\\neq-2$ dans la 2e. Combien de solutions ?",
          "options": [
            "Aucune",
            "Une seule",
            "Une infinité",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$D=0$ et le test échoue : aucune solution (deux droites parallèles distinctes)."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02",
      "order": 2,
      "title": "Résoudre dans ℝ × ℝ : substitution, combinaison, déterminants",
      "summary": "Trois méthodes de calcul pour trouver le couple solution.",
      "conceptExplanation": "1. Substitution : on exprime une inconnue en fonction de l'autre dans une équation, puis on remplace dans l'autre.\nExemple : $\\begin{cases}2x+3y=2\\\\x+2y=-3\\end{cases}$. De la 2e : $x=-3-2y$. Dans la 1re : $2(-3-2y)+3y=2$, soit $-6-y=2$, donc $y=-8$, puis $x=-3+16=13$. Solution : $(13;-8)$.\n\n2. Combinaison : on multiplie les équations pour qu'une inconnue disparaisse en les additionnant ou soustrayant.\nExemple : $\\begin{cases}3x-y=1\\\\5x-2y=-1\\end{cases}$. On fait $-2L_1+L_2$ : $-6x+5x=-2-1$, soit $x=3$, puis $y=3x-1=8$. Solution : $(3;8)$.\n\n3. Déterminants (méthode de Cramer), quand $D\\neq0$ :\n$$D_x=\\begin{vmatrix}c&b\\\\c'&b'\\end{vmatrix},\\quad D_y=\\begin{vmatrix}a&c\\\\a'&c'\\end{vmatrix},\\quad x=\\dfrac{D_x}{D},\\quad y=\\dfrac{D_y}{D}.$$\nExemple : $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$ : $D=-7$, $D_x=\\begin{vmatrix}5&2\\\\-2&-1\\end{vmatrix}=-5+4=-1$, $D_y=\\begin{vmatrix}1&5\\\\3&-2\\end{vmatrix}=-2-15=-17$.\nDonc $x=\\dfrac{-1}{-7}=\\dfrac17$ et $y=\\dfrac{-17}{-7}=\\dfrac{17}{7}$.\n\nOn vérifie toujours le couple trouvé dans les DEUX équations.",
      "keyRule": "Cramer : $x=\\dfrac{D_x}{D}$, $y=\\dfrac{D_y}{D}$ ; dans $D_x$ la colonne des $x$ est remplacée par les seconds membres, dans $D_y$ celle des $y$.",
      "formulas": [
        {
          "name": "Cramer",
          "formula": "x=\\dfrac{D_x}{D}\\qquad y=\\dfrac{D_y}{D}"
        },
        {
          "name": "Déterminants",
          "formula": "D_x=\\begin{vmatrix}c&b\\\\c'&b'\\end{vmatrix}\\qquad D_y=\\begin{vmatrix}a&c\\\\a'&c'\\end{vmatrix}"
        }
      ],
      "workedExample": {
        "title": "Par les déterminants",
        "statement": "Résous $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$.",
        "methodSteps": [
          "$D=1\\times(-1)-3\\times2=-7\\neq0$.",
          "$D_x=5\\times(-1)-(-2)\\times2=-1$ et $D_y=1\\times(-2)-3\\times5=-17$.",
          "$x=\\dfrac{-1}{-7}=\\dfrac17$ et $y=\\dfrac{-17}{-7}=\\dfrac{17}{7}$."
        ],
        "conclusion": "$S=\\left\\{\\left(\\dfrac17;\\dfrac{17}{7}\\right)\\right\\}$. Vérification : $\\dfrac17+\\dfrac{34}{7}=5$ et $\\dfrac37-\\dfrac{17}{7}=-2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "La substitution",
          "stepTheme": "La substitution",
          "stepBadge": "La substitution",
          "paragraphText": "On isole une inconnue facile : de $x+2y=-3$, on tire $x=-3-2y$, puis on remplace dans l'autre équation.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q1",
            "type": "mcq",
            "prompt": "En remplaçant $x=-3-2y$ dans $2x+3y=2$, quelle équation obtient-on ?",
            "options": [
              "$-6+y=2$",
              "$-6-y=2$",
              "$-3+y=2$",
              "$-6-7y=2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2(-3-2y)+3y=-6-4y+3y=-6-y$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Terminer le calcul",
          "stepTheme": "Terminer le calcul",
          "stepBadge": "Terminer le calcul",
          "paragraphText": "$-6-y=2$ donne $y=-8$, puis $x=-3-2\\times(-8)=13$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q2",
            "type": "mcq",
            "prompt": "Quelle est la solution de $\\begin{cases}2x+3y=2\\\\x+2y=-3\\end{cases}$ ?",
            "options": [
              "$(13;8)$",
              "$(-8;13)$",
              "$(13;-8)$",
              "$(-13;8)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Vérification : $26-24=2$ et $13-16=-3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La combinaison",
          "stepTheme": "La combinaison",
          "stepBadge": "La combinaison",
          "paragraphText": "Pour $\\begin{cases}3x-y=1\\\\5x-2y=-1\\end{cases}$, on calcule $-2L_1+L_2$ : les $y$ s'éliminent et il reste $-x=-3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q3",
            "type": "mcq",
            "prompt": "Quelle est la solution de $\\begin{cases}3x-y=1\\\\5x-2y=-1\\end{cases}$ ?",
            "options": [
              "$(3;8)$",
              "$(8;3)$",
              "$(1;2)$",
              "$(3;-8)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x=3$, puis $y=3\\times3-1=8$. Vérification : $15-16=-1$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "definition",
          "stepTitle": "Les déterminants $D_x$ et $D_y$",
          "stepTheme": "Les déterminants $D_x$ et $D_y$",
          "stepBadge": "Les déterminants $D_x$ et $D_y$",
          "paragraphText": "$D_x$ : on remplace la colonne des $x$ par les seconds membres. $D_y$ : on remplace la colonne des $y$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q4",
            "type": "mcq",
            "prompt": "Pour $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$, que vaut $D_x=\\begin{vmatrix}5&2\\\\-2&-1\\end{vmatrix}$ ?",
            "options": [
              "$-9$",
              "$1$",
              "$-1$",
              "$9$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$5\\times(-1)-(-2)\\times2=-5+4=-1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La formule de Cramer",
          "stepTheme": "La formule de Cramer",
          "stepBadge": "La formule de Cramer",
          "paragraphText": "Avec $D=-7$, $D_x=-1$ et $D_y=-17$ : $x=\\dfrac{D_x}{D}=\\dfrac17$ et $y=\\dfrac{D_y}{D}=\\dfrac{17}{7}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q5",
            "type": "mcq",
            "prompt": "Un système a $D=2$, $D_x=6$ et $D_y=-4$. Quelle est sa solution ?",
            "options": [
              "$(6;-4)$",
              "$(3;-2)$",
              "$(-2;3)$",
              "$\\left(\\dfrac13;-\\dfrac12\\right)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$x=\\dfrac62=3$ et $y=\\dfrac{-4}{2}=-2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Choisir sa méthode",
          "stepTheme": "Choisir sa méthode",
          "stepBadge": "Choisir sa méthode",
          "paragraphText": "Substitution si une inconnue a le coefficient $1$ ; combinaison si les coefficients sont multiples ; Cramer pour un calcul direct.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q6",
            "type": "mcq",
            "prompt": "Quelle est la solution de $\\begin{cases}x+y=10\\\\x-y=4\\end{cases}$ ?",
            "options": [
              "$(6;4)$",
              "$(4;6)$",
              "$(3;7)$",
              "$(7;3)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En additionnant : $2x=14$, $x=7$, puis $y=3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Toujours vérifier",
          "stepTheme": "Toujours vérifier",
          "stepBadge": "Toujours vérifier",
          "paragraphText": "Un couple n'est solution que s'il vérifie LES DEUX équations. Une seule ne suffit pas.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q7",
            "type": "mcq",
            "prompt": "Le couple $(1;2)$ est-il solution de $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$ ?",
            "options": [
              "Oui, il vérifie les deux",
              "Non, il vérifie seulement la 1re",
              "Non, il vérifie seulement la 2e",
              "Non, il ne vérifie aucune"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1+4=5$, mais $3-2=1\\neq-2$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q1",
          "type": "mcq",
          "prompt": "En remplaçant $x=-3-2y$ dans $2x+3y=2$, quelle équation obtient-on ?",
          "options": [
            "$-6+y=2$",
            "$-6-y=2$",
            "$-3+y=2$",
            "$-6-7y=2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2(-3-2y)+3y=-6-4y+3y=-6-y$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q2",
          "type": "mcq",
          "prompt": "Quelle est la solution de $\\begin{cases}2x+3y=2\\\\x+2y=-3\\end{cases}$ ?",
          "options": [
            "$(13;8)$",
            "$(-8;13)$",
            "$(13;-8)$",
            "$(-13;8)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Vérification : $26-24=2$ et $13-16=-3$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q3",
          "type": "mcq",
          "prompt": "Quelle est la solution de $\\begin{cases}3x-y=1\\\\5x-2y=-1\\end{cases}$ ?",
          "options": [
            "$(3;8)$",
            "$(8;3)$",
            "$(1;2)$",
            "$(3;-8)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x=3$, puis $y=3\\times3-1=8$. Vérification : $15-16=-1$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q4",
          "type": "mcq",
          "prompt": "Pour $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$, que vaut $D_x=\\begin{vmatrix}5&2\\\\-2&-1\\end{vmatrix}$ ?",
          "options": [
            "$-9$",
            "$1$",
            "$-1$",
            "$9$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$5\\times(-1)-(-2)\\times2=-5+4=-1$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q5",
          "type": "mcq",
          "prompt": "Un système a $D=2$, $D_x=6$ et $D_y=-4$. Quelle est sa solution ?",
          "options": [
            "$(6;-4)$",
            "$(3;-2)$",
            "$(-2;3)$",
            "$\\left(\\dfrac13;-\\dfrac12\\right)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$x=\\dfrac62=3$ et $y=\\dfrac{-4}{2}=-2$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q6",
          "type": "mcq",
          "prompt": "Quelle est la solution de $\\begin{cases}x+y=10\\\\x-y=4\\end{cases}$ ?",
          "options": [
            "$(6;4)$",
            "$(4;6)$",
            "$(3;7)$",
            "$(7;3)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "En additionnant : $2x=14$, $x=7$, puis $y=3$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p02_q7",
          "type": "mcq",
          "prompt": "Le couple $(1;2)$ est-il solution de $\\begin{cases}x+2y=5\\\\3x-y=-2\\end{cases}$ ?",
          "options": [
            "Oui, il vérifie les deux",
            "Non, il vérifie seulement la 1re",
            "Non, il vérifie seulement la 2e",
            "Non, il ne vérifie aucune"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1+4=5$, mais $3-2=1\\neq-2$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03",
      "order": 3,
      "title": "Interprétation graphique",
      "summary": "Chaque équation est une droite ; la solution est leur point commun.",
      "conceptExplanation": "Dans un repère $(O,I,J)$, une équation $ax+by=c$ (avec $(a;b)\\neq(0;0)$) représente une droite.\n\nRésoudre le système revient à chercher les points communs aux deux droites :\n- droites sécantes ($D\\neq0$) : un seul point commun, une seule solution ;\n- droites parallèles distinctes ($D=0$) : aucun point commun, aucune solution ;\n- droites confondues ($D=0$) : tous les points sont communs, une infinité de solutions.\n\nExemple : $\\begin{cases}x+2y-5=0\\\\x-y+1=0\\end{cases}$.\n- $(D)$ : $x+2y=5$ passe par $(5;0)$ et $(1;2)$ ;\n- $(D')$ : $y=x+1$ passe par $(0;1)$ et $(1;2)$ ;\n- elles se coupent en $A(1;2)$ : la solution est $(1;2)$.\n\nApplication : trois droites sont concourantes si le point d'intersection de deux d'entre elles est sur la troisième.\nExemple : $(AB)$ : $x-y=-4$, $(CD)$ : $2x+3y=8$, $(EF)$ : $x+3y=8$. Les deux premières se coupent en $\\left(-\\dfrac45;\\dfrac{16}{5}\\right)$. Or $-\\dfrac45+3\\times\\dfrac{16}{5}=\\dfrac{44}{5}\\neq8$ : les trois droites ne sont pas concourantes.",
      "keyRule": "Sécantes : une solution ; parallèles distinctes : aucune ; confondues : une infinité.",
      "formulas": [],
      "workedExample": {
        "title": "Lire la solution sur un graphique",
        "statement": "Résous graphiquement $\\begin{cases}x+2y=5\\\\x-y=-1\\end{cases}$.",
        "methodSteps": [
          "On trace $(D)$ : $y=-\\dfrac12x+\\dfrac52$ et $(D')$ : $y=x+1$.",
          "On lit le point d'intersection : $A(1;2)$.",
          "Vérification : $1+4=5$ et $1-2=-1$."
        ],
        "conclusion": "La solution du système est $(1;2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Une équation, une droite",
          "stepTheme": "Une équation, une droite",
          "stepBadge": "Une équation, une droite",
          "paragraphText": "$ax+by=c$ est l'équation d'une droite. Pour la tracer, on cherche deux points.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q1",
            "type": "mcq",
            "prompt": "Quel point appartient à la droite d'équation $x+2y=5$ ?",
            "options": [
              "$(1;3)$",
              "$(2;2)$",
              "$(5;0)$",
              "$(0;5)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$5+2\\times0=5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Lire l'intersection",
          "stepTheme": "Lire l'intersection",
          "stepBadge": "Lire l'intersection",
          "paragraphText": "La solution du système est le couple de coordonnées du point commun aux deux droites.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q2",
            "type": "mcq",
            "prompt": "$(D)$ : $x+2y=5$ et $(D')$ : $x-y=-1$ se coupent en :",
            "options": [
              "$(2;1)$",
              "$(1;2)$",
              "$(0;1)$",
              "$(5;0)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$(1;2)$ vérifie $1+4=5$ et $1-2=-1$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Droites parallèles",
          "stepTheme": "Droites parallèles",
          "stepBadge": "Droites parallèles",
          "paragraphText": "$D=0$ signifie que les deux droites ont la même direction : elles sont parallèles (distinctes ou confondues).",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q3",
            "type": "mcq",
            "prompt": "Un système sans solution correspond à deux droites :",
            "options": [
              "Sécantes",
              "Confondues",
              "Perpendiculaires",
              "Parallèles distinctes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Elles n'ont aucun point commun."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Droites confondues",
          "stepTheme": "Droites confondues",
          "stepBadge": "Droites confondues",
          "paragraphText": "$-\\sqrt2x+y=\\sqrt3$ et $2x-\\sqrt2y=-\\sqrt6$ : la 2e est la 1re multipliée par $-\\sqrt2$. Même droite : infinité de solutions.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q4",
            "type": "mcq",
            "prompt": "Que représentent graphiquement deux équations qui ont une infinité de solutions communes ?",
            "options": [
              "Deux droites confondues",
              "Deux droites sécantes",
              "Deux droites parallèles distinctes",
              "Un seul point"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Tous les points de l'une sont sur l'autre."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Trois droites concourantes ?",
          "stepTheme": "Trois droites concourantes ?",
          "stepBadge": "Trois droites concourantes ?",
          "paragraphText": "On résout le système des deux premières droites, puis on teste si le point trouvé est sur la troisième.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q5",
            "type": "mcq",
            "prompt": "$x-y=-4$ et $2x+3y=8$ se coupent en $\\left(-\\dfrac45;\\dfrac{16}{5}\\right)$. Ce point est-il sur $x+3y=8$ ?",
            "options": [
              "Oui",
              "Non, on trouve $\\dfrac{44}{5}$",
              "Non, on trouve $0$",
              "Oui, on trouve $8$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-\\dfrac45+\\dfrac{48}{5}=\\dfrac{44}{5}\\neq8$ : les droites ne sont pas concourantes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Équation d'une droite par deux points",
          "stepTheme": "Équation d'une droite par deux points",
          "stepBadge": "Équation d'une droite par deux points",
          "paragraphText": "$A(2;6)$ et $B(-3;1)$ : le coefficient directeur est $\\dfrac{1-6}{-3-2}=1$, donc $(AB)$ : $y=x+4$, soit $x-y=-4$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q6",
            "type": "mcq",
            "prompt": "Quelle est une équation de la droite passant par $C(7;-2)$ et $D(4;0)$ ?",
            "options": [
              "$2x+3y=8$",
              "$3x+2y=8$",
              "$2x-3y=8$",
              "$x+y=4$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$C$ : $14-6=8$ et $D$ : $8+0=8$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Un graphique reste approximatif",
          "stepTheme": "Un graphique reste approximatif",
          "stepBadge": "Un graphique reste approximatif",
          "paragraphText": "Une lecture graphique donne une valeur approchée : $\\left(\\dfrac17;\\dfrac{17}{7}\\right)$ ne se lit pas exactement. On confirme par le calcul.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q7",
            "type": "mcq",
            "prompt": "Sur un graphique, on lit l'intersection vers $(0{,}1;2{,}4)$. Que faire ?",
            "options": [
              "Conclure que la solution est $(0{,}1;2{,}4)$",
              "Arrondir à $(0;2)$",
              "Calculer la solution exacte et la vérifier",
              "Changer de repère"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La lecture guide, le calcul prouve."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q1",
          "type": "mcq",
          "prompt": "Quel point appartient à la droite d'équation $x+2y=5$ ?",
          "options": [
            "$(1;3)$",
            "$(2;2)$",
            "$(5;0)$",
            "$(0;5)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$5+2\\times0=5$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q2",
          "type": "mcq",
          "prompt": "$(D)$ : $x+2y=5$ et $(D')$ : $x-y=-1$ se coupent en :",
          "options": [
            "$(2;1)$",
            "$(1;2)$",
            "$(0;1)$",
            "$(5;0)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$(1;2)$ vérifie $1+4=5$ et $1-2=-1$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q3",
          "type": "mcq",
          "prompt": "Un système sans solution correspond à deux droites :",
          "options": [
            "Sécantes",
            "Confondues",
            "Perpendiculaires",
            "Parallèles distinctes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Elles n'ont aucun point commun."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q4",
          "type": "mcq",
          "prompt": "Que représentent graphiquement deux équations qui ont une infinité de solutions communes ?",
          "options": [
            "Deux droites confondues",
            "Deux droites sécantes",
            "Deux droites parallèles distinctes",
            "Un seul point"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Tous les points de l'une sont sur l'autre."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q5",
          "type": "mcq",
          "prompt": "$x-y=-4$ et $2x+3y=8$ se coupent en $\\left(-\\dfrac45;\\dfrac{16}{5}\\right)$. Ce point est-il sur $x+3y=8$ ?",
          "options": [
            "Oui",
            "Non, on trouve $\\dfrac{44}{5}$",
            "Non, on trouve $0$",
            "Oui, on trouve $8$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-\\dfrac45+\\dfrac{48}{5}=\\dfrac{44}{5}\\neq8$ : les droites ne sont pas concourantes."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q6",
          "type": "mcq",
          "prompt": "Quelle est une équation de la droite passant par $C(7;-2)$ et $D(4;0)$ ?",
          "options": [
            "$2x+3y=8$",
            "$3x+2y=8$",
            "$2x-3y=8$",
            "$x+y=4$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$C$ : $14-6=8$ et $D$ : $8+0=8$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p03_q7",
          "type": "mcq",
          "prompt": "Sur un graphique, on lit l'intersection vers $(0{,}1;2{,}4)$. Que faire ?",
          "options": [
            "Conclure que la solution est $(0{,}1;2{,}4)$",
            "Arrondir à $(0;2)$",
            "Calculer la solution exacte et la vérifier",
            "Changer de repère"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La lecture guide, le calcul prouve."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04",
      "order": 4,
      "title": "Systèmes dans ℝ × ℝ × ℝ : substitution",
      "summary": "Trois équations, trois inconnues : on élimine une inconnue à la fois.",
      "conceptExplanation": "Un système linéaire de trois équations à trois inconnues $(x;y;z)$ s'écrit\n$$\\begin{cases}ax+by+cz=m\\\\a'x+b'y+c'z=m'\\\\a''x+b''y+c''z=m''\\end{cases}$$\n\nSystème triangulaire : chaque équation a une inconnue de moins que la précédente, par exemple\n$$\\begin{cases}x+2y+z=8\\\\-3y-2z=-12\\\\-22z=-66\\end{cases}$$\nOn le résout « en remontant » : $z=3$, puis $-3y=-12+6$ donc $y=2$, puis $x=8-4-3=1$. Solution : $(1;2;3)$.\n\nMéthode de substitution :\n1. on exprime une inconnue en fonction des deux autres dans une équation ;\n2. on la remplace dans les deux autres : il reste un système de deux équations à deux inconnues ;\n3. on le résout, puis on remonte.\n\nExemple : $\\begin{cases}x-2y-3z=-9\\\\2x+5y-3z=0\\\\x+y+2z=9\\end{cases}$.\n- $x=2y+3z-9$ ;\n- dans les autres : $9y+3z=18$ (soit $3y+z=6$) et $3y+5z=18$ ;\n- $z=6-3y$ donne $3y+30-15y=18$, soit $y=1$, puis $z=3$ et $x=2$.\nSolution : $(2;1;3)$.\n\nExemple : $\\begin{cases}x+y=5\\\\y+z=1\\\\x+z=-8\\end{cases}$ : en additionnant tout, $2(x+y+z)=-2$, donc $x+y+z=-1$. D'où $z=-6$, $x=-2$, $y=7$.",
      "keyRule": "Isoler une inconnue, la remplacer dans les deux autres équations, résoudre le système 2 × 2 obtenu, puis remonter. Vérifier dans les trois équations.",
      "formulas": [],
      "workedExample": {
        "title": "Un système avec deux équations à deux inconnues",
        "statement": "Résous $\\begin{cases}2x+y-4z=4\\\\3x+2y=-5\\\\5x+8y=1\\end{cases}$.",
        "methodSteps": [
          "Les deux dernières ne contiennent que $x$ et $y$ : $y=\\dfrac{-5-3x}{2}$, puis $5x+4(-5-3x)=1$, soit $-7x=21$, $x=-3$ et $y=2$.",
          "Dans la 1re : $-6+2-4z=4$, donc $-4z=8$ et $z=-2$.",
          "Vérification : $-9+4=-5$ ; $-15+16=1$ ; $-6+2+8=4$."
        ],
        "conclusion": "$S=\\{(-3;2;-2)\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un système triangulaire",
          "stepTheme": "Un système triangulaire",
          "stepBadge": "Un système triangulaire",
          "paragraphText": "Dans un système triangulaire, la dernière équation ne contient qu'une inconnue : on commence par elle.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q1",
            "type": "mcq",
            "prompt": "Dans $\\begin{cases}x+2y+z=8\\\\-3y-2z=-12\\\\-22z=-66\\end{cases}$, que vaut $z$ ?",
            "options": [
              "$-3$",
              "$66$",
              "$3$",
              "$22$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$z=\\dfrac{-66}{-22}=3$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Remonter",
          "stepTheme": "Remonter",
          "stepBadge": "Remonter",
          "paragraphText": "Avec $z=3$ : $-3y-6=-12$ donne $y=2$, puis $x+4+3=8$ donne $x=1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la solution du système triangulaire $\\begin{cases}x+2y+z=8\\\\-3y-2z=-12\\\\-22z=-66\\end{cases}$ ?",
            "options": [
              "$(3;2;1)$",
              "$(2;1;3)$",
              "$(1;3;2)$",
              "$(1;2;3)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$x=1$, $y=2$, $z=3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Isoler une inconnue",
          "stepTheme": "Isoler une inconnue",
          "stepBadge": "Isoler une inconnue",
          "paragraphText": "De $x-2y-3z=-9$, on tire $x=2y+3z-9$, que l'on remplace dans les deux autres équations.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q3",
            "type": "mcq",
            "prompt": "En remplaçant $x=2y+3z-9$ dans $x+y+2z=9$, on obtient :",
            "options": [
              "$3y+5z=18$",
              "$3y+5z=0$",
              "$y+5z=18$",
              "$3y+z=9$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2y+3z-9+y+2z=9$, soit $3y+5z=18$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le système réduit",
          "stepTheme": "Le système réduit",
          "stepBadge": "Le système réduit",
          "paragraphText": "On obtient $\\begin{cases}3y+z=6\\\\3y+5z=18\\end{cases}$. En soustrayant : $4z=12$, donc $z=3$ et $y=1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q4",
            "type": "mcq",
            "prompt": "Avec $y=1$ et $z=3$, que vaut $x=2y+3z-9$ ?",
            "options": [
              "$11$",
              "$2$",
              "$-2$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2+9-9=2$. Solution $(2;1;3)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Additionner toutes les équations",
          "stepTheme": "Additionner toutes les équations",
          "stepBadge": "Additionner toutes les équations",
          "paragraphText": "Pour $\\begin{cases}x+y=5\\\\y+z=1\\\\x+z=-8\\end{cases}$ : la somme donne $2(x+y+z)=-2$, donc $x+y+z=-1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q5",
            "type": "mcq",
            "prompt": "Sachant $x+y+z=-1$ et $x+y=5$, que vaut $z$ ?",
            "options": [
              "$4$",
              "$-4$",
              "$6$",
              "$-6$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$z=-1-5=-6$, puis $y=7$ et $x=-2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux équations sans $z$",
          "stepTheme": "Deux équations sans $z$",
          "stepBadge": "Deux équations sans $z$",
          "paragraphText": "Dans $\\begin{cases}2x+y-4z=4\\\\3x+2y=-5\\\\5x+8y=1\\end{cases}$, on résout d'abord les deux dernières : $x=-3$ et $y=2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q6",
            "type": "mcq",
            "prompt": "Avec $x=-3$ et $y=2$, que vaut $z$ dans $2x+y-4z=4$ ?",
            "options": [
              "$-2$",
              "$2$",
              "$-\\dfrac{11}{4}$",
              "$0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$-6+2-4z=4$, donc $-4z=8$ et $z=-2$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Vérifier les trois équations",
          "stepTheme": "Vérifier les trois équations",
          "stepBadge": "Vérifier les trois équations",
          "paragraphText": "Une faute de calcul se repère en vérifiant. Avec $y=-1$ à la place de $y=2$, on aurait $3\\times(-3)+2\\times(-1)=-11\\neq-5$ : erreur détectée.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q7",
            "type": "mcq",
            "prompt": "Le triplet $(-3;-1;-\\dfrac{11}{4})$ est-il solution du système précédent ?",
            "options": [
              "Oui",
              "Non : il ne vérifie pas $3x+2y=-5$",
              "Non : il ne vérifie aucune équation",
              "On ne peut pas savoir"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$-9-2=-11\\neq-5$. La bonne solution est $(-3;2;-2)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q1",
          "type": "mcq",
          "prompt": "Dans $\\begin{cases}x+2y+z=8\\\\-3y-2z=-12\\\\-22z=-66\\end{cases}$, que vaut $z$ ?",
          "options": [
            "$-3$",
            "$66$",
            "$3$",
            "$22$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$z=\\dfrac{-66}{-22}=3$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la solution du système triangulaire $\\begin{cases}x+2y+z=8\\\\-3y-2z=-12\\\\-22z=-66\\end{cases}$ ?",
          "options": [
            "$(3;2;1)$",
            "$(2;1;3)$",
            "$(1;3;2)$",
            "$(1;2;3)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$x=1$, $y=2$, $z=3$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q3",
          "type": "mcq",
          "prompt": "En remplaçant $x=2y+3z-9$ dans $x+y+2z=9$, on obtient :",
          "options": [
            "$3y+5z=18$",
            "$3y+5z=0$",
            "$y+5z=18$",
            "$3y+z=9$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2y+3z-9+y+2z=9$, soit $3y+5z=18$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q4",
          "type": "mcq",
          "prompt": "Avec $y=1$ et $z=3$, que vaut $x=2y+3z-9$ ?",
          "options": [
            "$11$",
            "$2$",
            "$-2$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2+9-9=2$. Solution $(2;1;3)$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q5",
          "type": "mcq",
          "prompt": "Sachant $x+y+z=-1$ et $x+y=5$, que vaut $z$ ?",
          "options": [
            "$4$",
            "$-4$",
            "$6$",
            "$-6$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$z=-1-5=-6$, puis $y=7$ et $x=-2$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q6",
          "type": "mcq",
          "prompt": "Avec $x=-3$ et $y=2$, que vaut $z$ dans $2x+y-4z=4$ ?",
          "options": [
            "$-2$",
            "$2$",
            "$-\\dfrac{11}{4}$",
            "$0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$-6+2-4z=4$, donc $-4z=8$ et $z=-2$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p04_q7",
          "type": "mcq",
          "prompt": "Le triplet $(-3;-1;-\\dfrac{11}{4})$ est-il solution du système précédent ?",
          "options": [
            "Oui",
            "Non : il ne vérifie pas $3x+2y=-5$",
            "Non : il ne vérifie aucune équation",
            "On ne peut pas savoir"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$-9-2=-11\\neq-5$. La bonne solution est $(-3;2;-2)$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05",
      "order": 5,
      "title": "La méthode du pivot de Gauss",
      "summary": "Transformer le système en un système triangulaire par combinaisons de lignes.",
      "conceptExplanation": "Principe : on garde la 1re ligne $L_1$ (le pivot) et on élimine $x$ des lignes suivantes par des combinaisons, puis on élimine $y$ de la dernière. On obtient un système triangulaire.\n\nExemple : $\\begin{cases}x-5y-7z=3&(L_1)\\\\5x+3y+z=3&(L_2)\\\\3x+y-2z=-1&(L_3)\\end{cases}$\n\n1. Éliminer $x$ :\n- $L_2-5L_1$ : $28y+36z=-12$, que l'on simplifie par $2$ : $14y+18z=-6$ $(L'_2)$ ;\n- $L_3-3L_1$ : $16y+19z=-10$ $(L'_3)$.\n\n2. Éliminer $y$ : $14L'_3-16L'_2$ : $(266-288)z=-140+96$, soit $-22z=-44$.\n\n3. Remonter : $z=2$ ; $14y+36=-6$ donne $y=-3$ ; $x+15-14=3$ donne $x=2$.\nSolution : $(2;-3;2)$.\n\nAutre exemple : $\\begin{cases}x+y-2z=1\\\\x-2y+7z=1\\\\-2x+y+z=1\\end{cases}$.\n- $L_1-L_2$ : $3y-9z=0$, donc $y=3z$ ;\n- $2L_1+L_3$ : $3y-3z=3$ ;\n- $9z-3z=3$ donne $z=\\dfrac12$, puis $y=\\dfrac32$ et $x=1-\\dfrac32+1=\\dfrac12$.\nSolution : $\\left(\\dfrac12;\\dfrac32;\\dfrac12\\right)$.\n\nRemarque : on peut échanger l'ordre des lignes pour prendre un pivot pratique (coefficient $1$ ou $-1$ devant $x$).",
      "keyRule": "Garder $L_1$, faire disparaître $x$ de $L_2$ et $L_3$, puis $y$ de la dernière ligne ; on obtient un système triangulaire.",
      "formulas": [
        {
          "name": "Élimination",
          "formula": "L_2\\leftarrow L_2-\\dfrac{a'}{a}L_1"
        }
      ],
      "workedExample": {
        "title": "Choisir le pivot",
        "statement": "Résous $\\begin{cases}2x+y+z=1\\\\2x+3y-z=6\\\\-x+2y+2z=-1\\end{cases}$.",
        "methodSteps": [
          "On met en tête la ligne $-x+2y+2z=-1$ (pivot $-1$).",
          "$2L_1+L_2$ : $7y+3z=4$ ; $2L_1+L_3$ : $5y+5z=-1$.",
          "$7(5y+5z)-5(7y+3z)=-7-20$ : $20z=-27$, $z=-\\dfrac{27}{20}$, puis $y=\\dfrac{23}{20}$ et $x=\\dfrac35$."
        ],
        "conclusion": "$S=\\left\\{\\left(\\dfrac35;\\dfrac{23}{20};-\\dfrac{27}{20}\\right)\\right\\}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le pivot",
          "stepTheme": "Le pivot",
          "stepBadge": "Le pivot",
          "paragraphText": "La 1re ligne sert de pivot : on l'utilise pour éliminer $x$ dans les autres lignes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q1",
            "type": "mcq",
            "prompt": "Avec $L_1$ : $x-5y-7z=3$ et $L_2$ : $5x+3y+z=3$, quelle combinaison élimine $x$ ?",
            "options": [
              "$L_2+L_1$",
              "$L_2-5L_1$",
              "$5L_2-L_1$",
              "$L_2-L_1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$5x-5\\times x=0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Calculer la nouvelle ligne",
          "stepTheme": "Calculer la nouvelle ligne",
          "stepBadge": "Calculer la nouvelle ligne",
          "paragraphText": "$L_2-5L_1$ : $(3+25)y+(1+35)z=3-15$, soit $28y+36z=-12$, ou $14y+18z=-6$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q2",
            "type": "mcq",
            "prompt": "Que donne $L_3-3L_1$ avec $L_3$ : $3x+y-2z=-1$ ?",
            "options": [
              "$16y+19z=-10$",
              "$-14y-23z=8$",
              "$16y+23z=-10$",
              "$-14y+19z=-10$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(1+15)y+(-2+21)z=-1-9$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Éliminer $y$",
          "stepTheme": "Éliminer $y$",
          "stepBadge": "Éliminer $y$",
          "paragraphText": "Avec $14y+18z=-6$ et $16y+19z=-10$ : $14L'_3-16L'_2$ fait disparaître $y$ et donne $-22z=-44$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q3",
            "type": "mcq",
            "prompt": "De $-22z=-44$, on tire :",
            "options": [
              "$z=-2$",
              "$z=22$",
              "$z=\\dfrac12$",
              "$z=2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$z=\\dfrac{-44}{-22}=2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Remonter jusqu'à $x$",
          "stepTheme": "Remonter jusqu'à $x$",
          "stepBadge": "Remonter jusqu'à $x$",
          "paragraphText": "$z=2$ ; $14y+36=-6$ donne $y=-3$ ; $x+15-14=3$ donne $x=2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q4",
            "type": "mcq",
            "prompt": "Quelle est la solution de $\\begin{cases}x-5y-7z=3\\\\5x+3y+z=3\\\\3x+y-2z=-1\\end{cases}$ ?",
            "options": [
              "$(2;3;2)$",
              "$(-3;2;2)$",
              "$(2;-3;2)$",
              "$(2;2;-3)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Vérification : $2+15-14=3$ ; $10-9+2=3$ ; $6-3-4=-1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Choisir un pivot pratique",
          "stepTheme": "Choisir un pivot pratique",
          "stepBadge": "Choisir un pivot pratique",
          "paragraphText": "On peut changer l'ordre des lignes : une ligne avec $x$ ou $-x$ en tête évite les fractions.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q5",
            "type": "mcq",
            "prompt": "Pour $\\begin{cases}2x+y+z=1\\\\2x+3y-z=6\\\\-x+2y+2z=-1\\end{cases}$, quelle ligne prendre comme pivot ?",
            "options": [
              "$2x+y+z=1$",
              "$2x+3y-z=6$",
              "N'importe laquelle, sans différence",
              "$-x+2y+2z=-1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec $-x$ en tête, on élimine $x$ par $2L_1+L_2$ et $2L_1+L_3$, sans fractions."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Un système à solutions fractionnaires",
          "stepTheme": "Un système à solutions fractionnaires",
          "stepBadge": "Un système à solutions fractionnaires",
          "paragraphText": "Pour $\\begin{cases}x+y-2z=1\\\\x-2y+7z=1\\\\-2x+y+z=1\\end{cases}$ : $L_1-L_2$ donne $3y-9z=0$ et $2L_1+L_3$ donne $3y-3z=3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q6",
            "type": "mcq",
            "prompt": "De $3y-9z=0$ et $3y-3z=3$, on tire :",
            "options": [
              "$z=\\dfrac12$ et $y=\\dfrac32$",
              "Aucune solution",
              "$z=1$ et $y=3$",
              "$z=-\\dfrac12$ et $y=\\dfrac12$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "En soustrayant : $6z=3$, $z=\\dfrac12$, puis $y=3z=\\dfrac32$. Enfin $x=\\dfrac12$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Recalculer chaque coefficient",
          "stepTheme": "Recalculer chaque coefficient",
          "stepBadge": "Recalculer chaque coefficient",
          "paragraphText": "L'erreur classique : oublier de combiner un terme. $L_1-L_2$ donne $y-(-2y)=3y$ ET $-2z-7z=-9z$, pas $-3z$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q7",
            "type": "mcq",
            "prompt": "Avec $L_1$ : $x+y-2z=1$ et $L_2$ : $x-2y+7z=1$, que vaut $L_1-L_2$ ?",
            "options": [
              "$3y-3z=0$",
              "$-y+5z=0$",
              "$3y-9z=0$",
              "$3y+5z=2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$(1+2)y+(-2-7)z=1-1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q1",
          "type": "mcq",
          "prompt": "Avec $L_1$ : $x-5y-7z=3$ et $L_2$ : $5x+3y+z=3$, quelle combinaison élimine $x$ ?",
          "options": [
            "$L_2+L_1$",
            "$L_2-5L_1$",
            "$5L_2-L_1$",
            "$L_2-L_1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$5x-5\\times x=0$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q2",
          "type": "mcq",
          "prompt": "Que donne $L_3-3L_1$ avec $L_3$ : $3x+y-2z=-1$ ?",
          "options": [
            "$16y+19z=-10$",
            "$-14y-23z=8$",
            "$16y+23z=-10$",
            "$-14y+19z=-10$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(1+15)y+(-2+21)z=-1-9$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q3",
          "type": "mcq",
          "prompt": "De $-22z=-44$, on tire :",
          "options": [
            "$z=-2$",
            "$z=22$",
            "$z=\\dfrac12$",
            "$z=2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$z=\\dfrac{-44}{-22}=2$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q4",
          "type": "mcq",
          "prompt": "Quelle est la solution de $\\begin{cases}x-5y-7z=3\\\\5x+3y+z=3\\\\3x+y-2z=-1\\end{cases}$ ?",
          "options": [
            "$(2;3;2)$",
            "$(-3;2;2)$",
            "$(2;-3;2)$",
            "$(2;2;-3)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Vérification : $2+15-14=3$ ; $10-9+2=3$ ; $6-3-4=-1$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q5",
          "type": "mcq",
          "prompt": "Pour $\\begin{cases}2x+y+z=1\\\\2x+3y-z=6\\\\-x+2y+2z=-1\\end{cases}$, quelle ligne prendre comme pivot ?",
          "options": [
            "$2x+y+z=1$",
            "$2x+3y-z=6$",
            "N'importe laquelle, sans différence",
            "$-x+2y+2z=-1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec $-x$ en tête, on élimine $x$ par $2L_1+L_2$ et $2L_1+L_3$, sans fractions."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q6",
          "type": "mcq",
          "prompt": "De $3y-9z=0$ et $3y-3z=3$, on tire :",
          "options": [
            "$z=\\dfrac12$ et $y=\\dfrac32$",
            "Aucune solution",
            "$z=1$ et $y=3$",
            "$z=-\\dfrac12$ et $y=\\dfrac12$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "En soustrayant : $6z=3$, $z=\\dfrac12$, puis $y=3z=\\dfrac32$. Enfin $x=\\dfrac12$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p05_q7",
          "type": "mcq",
          "prompt": "Avec $L_1$ : $x+y-2z=1$ et $L_2$ : $x-2y+7z=1$, que vaut $L_1-L_2$ ?",
          "options": [
            "$3y-3z=0$",
            "$-y+5z=0$",
            "$3y-9z=0$",
            "$3y+5z=2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$(1+2)y+(-2-7)z=1-1$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06",
      "order": 6,
      "title": "Mettre un problème en équations",
      "summary": "Choisir les inconnues, traduire chaque phrase, résoudre, conclure.",
      "conceptExplanation": "Méthode :\n1. nommer les inconnues ;\n2. traduire chaque information par une équation ;\n3. résoudre le système ;\n4. vérifier et répondre à la question avec une phrase.\n\nSituation 1 (le fermier) : un fermier élève des canards, des lapins et des dromadaires. Il compte 130 pattes de canards et de lapins et bosses de dromadaires, 46 têtes, et 38 oreilles de lapins et de dromadaires.\n- $x$ canards, $y$ lapins, $z$ dromadaires ;\n- $2x+4y+z=130$, $x+y+z=46$, $2y+2z=38$ ;\n- $y+z=19$ donne $x=27$ ; puis $4y+z=76$ et $y+z=19$ donnent $y=19$, $z=0$.\nLe fermier a 27 canards, 19 lapins et aucun dromadaire.\n\nSituation 2 (un nombre de trois chiffres) : somme des chiffres $14$ ; en échangeant dizaines et centaines, le nombre augmente de $180$ ; en échangeant unités et centaines, il diminue de $297$.\n- $x$ unités, $y$ dizaines, $z$ centaines ;\n- $x+y+z=14$, $90(y-z)=180$ donc $y-z=2$, $99(x-z)=-297$ donc $z-x=3$ ;\n- $x=2$, $y=7$, $z=5$ : le nombre est $572$ ($752=572+180$ et $275=572-297$).\n\nSituation 3 (une parabole) : $y=ax^2+bx+c$ passe par $(1;0)$, $(2;-5)$, $(3;-12)$.\n- $a+b+c=0$, $4a+2b+c=-5$, $9a+3b+c=-12$ ;\n- on trouve $a=-1$, $b=-2$, $c=3$ : $y=-x^2-2x+3$.",
      "keyRule": "Une inconnue par quantité cherchée, une équation par information ; on vérifie la solution dans l'énoncé.",
      "formulas": [],
      "workedExample": {
        "title": "La parabole par trois points",
        "statement": "Trouve $a$, $b$, $c$ tels que $y=ax^2+bx+c$ passe par $(1;0)$, $(2;-5)$ et $(3;-12)$.",
        "methodSteps": [
          "$\\begin{cases}a+b+c=0\\\\4a+2b+c=-5\\\\9a+3b+c=-12\\end{cases}$",
          "$L_2-L_1$ : $3a+b=-5$ ; $L_3-L_2$ : $5a+b=-7$ ; donc $2a=-2$, $a=-1$, $b=-2$, $c=3$."
        ],
        "conclusion": "La parabole a pour équation $y=-x^2-2x+3$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Traduire une phrase",
          "stepTheme": "Traduire une phrase",
          "stepBadge": "Traduire une phrase",
          "paragraphText": "« 130 pattes de canards et de lapins et bosses de dromadaires » : un canard a 2 pattes, un lapin 4, un dromadaire 1 bosse.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q1",
            "type": "mcq",
            "prompt": "Quelle équation traduit cette phrase ?",
            "options": [
              "$x+y+z=130$",
              "$2x+4y+2z=130$",
              "$4x+2y+z=130$",
              "$2x+4y+z=130$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "2 pattes par canard, 4 par lapin, 1 bosse par dromadaire."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le fermier",
          "stepTheme": "Le fermier",
          "stepBadge": "Le fermier",
          "paragraphText": "$2y+2z=38$ donne $y+z=19$, et $x+y+z=46$ donne $x=27$. Puis $4y+z=76$ avec $y+z=19$ : $3y=57$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q2",
            "type": "mcq",
            "prompt": "Un fermier a $x$ canards, $y$ lapins et $z$ dromadaires, avec $2x+4y+z=130$, $x+y+z=46$ et $2y+2z=38$. Combien a-t-il de lapins ?",
            "options": [
              "$16$",
              "$19$",
              "$27$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$y=\\dfrac{57}{3}=19$, et donc $z=0$ dromadaire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Écrire un nombre avec ses chiffres",
          "stepTheme": "Écrire un nombre avec ses chiffres",
          "stepBadge": "Écrire un nombre avec ses chiffres",
          "paragraphText": "Un nombre de centaines $z$, dizaines $y$ et unités $x$ vaut $100z+10y+x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q3",
            "type": "mcq",
            "prompt": "En échangeant dizaines et centaines, de combien le nombre change-t-il ?",
            "options": [
              "$90(y-z)$",
              "$9(y-z)$",
              "$99(y-z)$",
              "$10(y-z)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$(100y+10z+x)-(100z+10y+x)=90y-90z$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le nombre mystère",
          "stepTheme": "Le nombre mystère",
          "stepBadge": "Le nombre mystère",
          "paragraphText": "On obtient $x+y+z=14$, $y-z=2$, $z-x=3$. Avec $z=x+3$ et $y=x+5$ : $3x+8=14$, $x=2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q4",
            "type": "mcq",
            "prompt": "Un nombre de trois chiffres a $x$ unités, $y$ dizaines et $z$ centaines, avec $x+y+z=14$, $y-z=2$ et $z-x=3$. Quel est ce nombre ?",
            "options": [
              "$275$",
              "$752$",
              "$572$",
              "$527$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$z=5$ centaines, $y=7$ dizaines, $x=2$ unités : $572$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Un point sur une courbe",
          "stepTheme": "Un point sur une courbe",
          "stepBadge": "Un point sur une courbe",
          "paragraphText": "Si $(2;-5)$ est sur $y=ax^2+bx+c$, alors $a\\times2^2+b\\times2+c=-5$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q5",
            "type": "mcq",
            "prompt": "Quelle équation traduit « la parabole passe par $(3;-12)$ » ?",
            "options": [
              "$3a+3b+c=-12$",
              "$9a+3b+c=-12$",
              "$9a+3b=-12$",
              "$a+3b+9c=-12$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On remplace $x$ par $3$ et $y$ par $-12$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La parabole trouvée",
          "stepTheme": "La parabole trouvée",
          "stepBadge": "La parabole trouvée",
          "paragraphText": "On trouve $a=-1$, $b=-2$, $c=3$. Vérification : $-1-2+3=0$, $-4-4+3=-5$, $-9-6+3=-12$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q6",
            "type": "mcq",
            "prompt": "La parabole $y=ax^2+bx+c$ passe par $(1;0)$, $(2;-5)$ et $(3;-12)$. Quelle est son équation ?",
            "options": [
              "$y=x^2+2x-3$",
              "$y=-x^2+2x+3$",
              "$y=-x^2-2x-3$",
              "$y=-x^2-2x+3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$a=-1$, $b=-2$, $c=3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une solution doit avoir du sens",
          "stepTheme": "Une solution doit avoir du sens",
          "stepBadge": "Une solution doit avoir du sens",
          "paragraphText": "Un nombre d'animaux ou un chiffre est un entier positif (un chiffre entre $0$ et $9$). Une solution négative ou décimale signale une erreur de mise en équation.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q7",
            "type": "mcq",
            "prompt": "Pour le nombre de trois chiffres, on trouve $x=12$. Que faut-il en penser ?",
            "options": [
              "C'est possible",
              "Il y a une erreur : un chiffre est entre $0$ et $9$",
              "Il faut arrondir à $1$",
              "Le nombre a quatre chiffres"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un chiffre ne dépasse pas $9$ : on reprend la mise en équation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q1",
          "type": "mcq",
          "prompt": "Quelle équation traduit cette phrase ?",
          "options": [
            "$x+y+z=130$",
            "$2x+4y+2z=130$",
            "$4x+2y+z=130$",
            "$2x+4y+z=130$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "2 pattes par canard, 4 par lapin, 1 bosse par dromadaire."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q2",
          "type": "mcq",
          "prompt": "Un fermier a $x$ canards, $y$ lapins et $z$ dromadaires, avec $2x+4y+z=130$, $x+y+z=46$ et $2y+2z=38$. Combien a-t-il de lapins ?",
          "options": [
            "$16$",
            "$19$",
            "$27$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$y=\\dfrac{57}{3}=19$, et donc $z=0$ dromadaire."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q3",
          "type": "mcq",
          "prompt": "En échangeant dizaines et centaines, de combien le nombre change-t-il ?",
          "options": [
            "$90(y-z)$",
            "$9(y-z)$",
            "$99(y-z)$",
            "$10(y-z)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$(100y+10z+x)-(100z+10y+x)=90y-90z$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q4",
          "type": "mcq",
          "prompt": "Un nombre de trois chiffres a $x$ unités, $y$ dizaines et $z$ centaines, avec $x+y+z=14$, $y-z=2$ et $z-x=3$. Quel est ce nombre ?",
          "options": [
            "$275$",
            "$752$",
            "$572$",
            "$527$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$z=5$ centaines, $y=7$ dizaines, $x=2$ unités : $572$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q5",
          "type": "mcq",
          "prompt": "Quelle équation traduit « la parabole passe par $(3;-12)$ » ?",
          "options": [
            "$3a+3b+c=-12$",
            "$9a+3b+c=-12$",
            "$9a+3b=-12$",
            "$a+3b+9c=-12$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On remplace $x$ par $3$ et $y$ par $-12$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q6",
          "type": "mcq",
          "prompt": "La parabole $y=ax^2+bx+c$ passe par $(1;0)$, $(2;-5)$ et $(3;-12)$. Quelle est son équation ?",
          "options": [
            "$y=x^2+2x-3$",
            "$y=-x^2+2x+3$",
            "$y=-x^2-2x-3$",
            "$y=-x^2-2x+3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$a=-1$, $b=-2$, $c=3$."
        },
        {
          "id": "premiere_d_maths_numerique_l11_systemes_equations_lineaires_p06_q7",
          "type": "mcq",
          "prompt": "Pour le nombre de trois chiffres, on trouve $x=12$. Que faut-il en penser ?",
          "options": [
            "C'est possible",
            "Il y a une erreur : un chiffre est entre $0$ et $9$",
            "Il faut arrondir à $1$",
            "Le nombre a quatre chiffres"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un chiffre ne dépasse pas $9$ : on reprend la mise en équation."
        }
      ]
    }
  ]
};
