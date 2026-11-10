import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon rédigée à partir du PDF officiel « 1D Maths leçon 12 SUITES NUMERIQUES.pdf » (format v2 : mini-leçons de 5 à 8 étapes).
// Fichier généré : modifier les brouillons puis relancer l'assemblage plutôt que d'éditer à la main.
export const MATHS_1RE_D_L12_SUITES_NUMERIQUES: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l12_suites_numeriques",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 12,
  "title": "Leçon 12 : Suites numériques",
  "summary": "Définition, formule explicite et récurrence, représentation graphique, suites arithmétiques et géométriques (terme général et sommes), suite auxiliaire, situation de la production d'une usine.",
  "officialVolumeHours": 8,
  "contentVersion": 2,
  "source": "1D Maths leçon 12 SUITES NUMERIQUES.pdf",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01",
      "order": 1,
      "title": "Qu'est-ce qu'une suite ?",
      "summary": "Une suite est une fonction de ℕ vers ℝ ; on calcule ses termes avec une formule explicite.",
      "conceptExplanation": "Définition : une suite numérique est une fonction $U$ de $\\mathbb{N}$ (ou d'une partie de $\\mathbb{N}$) vers $\\mathbb{R}$ :\n$$U:n\\longmapsto U(n),\\ \\text{noté}\\ U_n.$$\n- La suite se note $(U_n)_{n\\in\\mathbb{N}}$ ou simplement $(U_n)$ ;\n- $U_n$ est le terme d'indice $n$, ou terme général.\n\nAttention : une fonction définie sur $\\mathbb{R}$ comme $f:x\\mapsto2x-1$ n'est pas une suite ; $g:n\\mapsto\\dfrac{2n-1}{n}$ définie de $\\mathbb{N}^*$ vers $\\mathbb{R}$ en est une.\n\nSuite définie par une formule explicite : $U_n=f(n)$, où $f$ est une fonction. On calcule directement n'importe quel terme.\n\nExemples :\n- $U_n=3n+5$ : $U_0=5$, $U_1=8$, $U_{10}=35$ ;\n- $W_n=-6\\left(\\dfrac12\\right)^n+10$ : $W_0=-6+10=4$ ; $W_5=-\\dfrac{6}{32}+10=\\dfrac{157}{16}$ ; $W_{10}=-\\dfrac{6}{1024}+10=\\dfrac{5117}{512}$ ;\n- $U_n=n^2-5n$ : $U_0=0$, $U_1=-4$, $U_2=-6$, $U_3=-6$, $U_4=-4$.",
      "keyRule": "$U_n$ est l'image de l'entier $n$. Avec une formule explicite $U_n=f(n)$, on remplace $n$ par sa valeur.",
      "formulas": [
        {
          "name": "Formule explicite",
          "formula": "U_n=f(n)"
        }
      ],
      "workedExample": {
        "title": "Calculer des termes",
        "statement": "$W_n=-6\\left(\\dfrac12\\right)^n+10$. Calcule $W_0$ et $W_5$.",
        "methodSteps": [
          "$W_0=-6\\times1+10=4$.",
          "$W_5=-6\\times\\dfrac{1}{32}+10=-\\dfrac{3}{16}+\\dfrac{160}{16}$."
        ],
        "conclusion": "$W_0=4$ et $W_5=\\dfrac{157}{16}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une fonction de ℕ vers ℝ",
          "stepTheme": "Une fonction de ℕ vers ℝ",
          "stepBadge": "Une fonction de ℕ vers ℝ",
          "paragraphText": "Une suite associe un réel $U_n$ à chaque entier naturel $n$ : $U_0$, $U_1$, $U_2$…",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q1",
            "type": "mcq",
            "prompt": "Laquelle de ces fonctions est une suite numérique ?",
            "options": [
              "$f:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto2x-1$",
              "$g:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto\\dfrac{2x-1}{x+3}$",
              "$h:\\mathbb{N}^*\\to\\mathbb{R},\\ n\\mapsto\\dfrac{2n-1}{n}$",
              "$k:\\mathbb{R}\\to\\mathbb{N},\\ x\\mapsto2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une suite est définie sur des entiers naturels et prend des valeurs réelles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Indice et terme",
          "stepTheme": "Indice et terme",
          "stepBadge": "Indice et terme",
          "paragraphText": "Dans $U_n$, $n$ est l'indice (le rang) et $U_n$ la valeur du terme. Ne pas confondre $U_{n+1}$ (terme suivant) et $U_n+1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q2",
            "type": "mcq",
            "prompt": "Pour $U_n=3n+5$, que vaut $U_{n+1}$ ?",
            "options": [
              "$3n+6$",
              "$3n+8$",
              "$3n+5$",
              "$4n+5$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$U_{n+1}=3(n+1)+5=3n+8$. Et $U_n+1=3n+6$ : ce n'est pas la même chose."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Formule explicite",
          "stepTheme": "Formule explicite",
          "stepBadge": "Formule explicite",
          "paragraphText": "Si $U_n=f(n)$, on calcule $U_{10}$ directement en remplaçant $n$ par $10$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q3",
            "type": "mcq",
            "prompt": "Pour $U_n=3n+5$, que vaut $U_{10}$ ?",
            "options": [
              "$35$",
              "$18$",
              "$305$",
              "$15$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$3\\times10+5=35$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les premiers termes",
          "stepTheme": "Les premiers termes",
          "stepBadge": "Les premiers termes",
          "paragraphText": "Pour $U_n=n^2-5n$ : $U_0=0$, $U_1=-4$, $U_2=-6$, $U_3=-6$, $U_4=-4$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q4",
            "type": "mcq",
            "prompt": "Pour $U_n=n^2-5n$, que vaut $U_5$ ?",
            "options": [
              "$-5$",
              "$5$",
              "$50$",
              "$0$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$25-25=0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Avec une puissance",
          "stepTheme": "Avec une puissance",
          "stepBadge": "Avec une puissance",
          "paragraphText": "$W_n=-6\\left(\\dfrac12\\right)^n+10$ : $W_5=-\\dfrac{6}{32}+10=\\dfrac{157}{16}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q5",
            "type": "mcq",
            "prompt": "Que vaut $W_1=-6\\times\\dfrac12+10$ ?",
            "options": [
              "$4$",
              "$13$",
              "$7$",
              "$-3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-3+10=7$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le premier terme",
          "stepTheme": "Le premier terme",
          "stepBadge": "Le premier terme",
          "paragraphText": "Le premier terme dépend de l'ensemble de départ : $U_0$ si la suite est définie sur $\\mathbb{N}$, $U_1$ si elle est définie sur $\\mathbb{N}^*$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q6",
            "type": "mcq",
            "prompt": "Quel est le premier terme de $V_n=\\dfrac{2n^2+1}{n}$, $n\\in\\mathbb{N}^*$ ?",
            "options": [
              "$V_0=1$",
              "$V_1=3$",
              "$V_1=1$",
              "$V_2=\\dfrac92$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$n=0$ est interdit (division par $0$) : on commence à $V_1=\\dfrac{3}{1}=3$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Compter les termes",
          "stepTheme": "Compter les termes",
          "stepBadge": "Compter les termes",
          "paragraphText": "De $U_0$ à $U_n$, il y a $n+1$ termes ; de $U_1$ à $U_n$, il y en a $n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q7",
            "type": "mcq",
            "prompt": "Combien y a-t-il de termes de $U_0$ à $U_{99}$ ?",
            "options": [
              "$99$",
              "$98$",
              "$101$",
              "$100$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$99-0+1=100$ termes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q1",
          "type": "mcq",
          "prompt": "Laquelle de ces fonctions est une suite numérique ?",
          "options": [
            "$f:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto2x-1$",
            "$g:\\mathbb{R}\\to\\mathbb{R},\\ x\\mapsto\\dfrac{2x-1}{x+3}$",
            "$h:\\mathbb{N}^*\\to\\mathbb{R},\\ n\\mapsto\\dfrac{2n-1}{n}$",
            "$k:\\mathbb{R}\\to\\mathbb{N},\\ x\\mapsto2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une suite est définie sur des entiers naturels et prend des valeurs réelles."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q2",
          "type": "mcq",
          "prompt": "Pour $U_n=3n+5$, que vaut $U_{n+1}$ ?",
          "options": [
            "$3n+6$",
            "$3n+8$",
            "$3n+5$",
            "$4n+5$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$U_{n+1}=3(n+1)+5=3n+8$. Et $U_n+1=3n+6$ : ce n'est pas la même chose."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q3",
          "type": "mcq",
          "prompt": "Pour $U_n=3n+5$, que vaut $U_{10}$ ?",
          "options": [
            "$35$",
            "$18$",
            "$305$",
            "$15$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$3\\times10+5=35$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q4",
          "type": "mcq",
          "prompt": "Pour $U_n=n^2-5n$, que vaut $U_5$ ?",
          "options": [
            "$-5$",
            "$5$",
            "$50$",
            "$0$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$25-25=0$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q5",
          "type": "mcq",
          "prompt": "Que vaut $W_1=-6\\times\\dfrac12+10$ ?",
          "options": [
            "$4$",
            "$13$",
            "$7$",
            "$-3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-3+10=7$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q6",
          "type": "mcq",
          "prompt": "Quel est le premier terme de $V_n=\\dfrac{2n^2+1}{n}$, $n\\in\\mathbb{N}^*$ ?",
          "options": [
            "$V_0=1$",
            "$V_1=3$",
            "$V_1=1$",
            "$V_2=\\dfrac92$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$n=0$ est interdit (division par $0$) : on commence à $V_1=\\dfrac{3}{1}=3$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p01_q7",
          "type": "mcq",
          "prompt": "Combien y a-t-il de termes de $U_0$ à $U_{99}$ ?",
          "options": [
            "$99$",
            "$98$",
            "$101$",
            "$100$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$99-0+1=100$ termes."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02",
      "order": 2,
      "title": "Suite définie par récurrence",
      "summary": "Un premier terme et une règle pour passer d'un terme au suivant.",
      "conceptExplanation": "Une suite est définie par récurrence quand on donne :\n- un terme (en général le premier) ;\n- une relation $U_{n+1}=f(U_n)$ qui permet de calculer chaque terme à partir du précédent.\n\nExemple : $\\begin{cases}V_0=7\\\\V_{n+1}=2V_n-5\\end{cases}$\n- $V_1=2\\times7-5=9$ ;\n- $V_2=2\\times9-5=13$ ;\n- $V_3=2\\times13-5=21$ ;\n- $V_4=2\\times21-5=37$.\nPour obtenir $V_4$, il faut d'abord calculer $V_1$, $V_2$ et $V_3$ : on avance pas à pas.\n\nAutres exemples :\n- $\\begin{cases}P_1=3500\\\\P_{n+1}=P_n+25\\end{cases}$ : $P_2=3525$, $P_3=3550$ ;\n- $\\begin{cases}U_0=1\\\\U_{n+1}=2U_n+1\\end{cases}$ : $1$, $3$, $7$, $15$ ;\n- $\\begin{cases}V_1=-2\\\\V_{n+1}=\\dfrac{V_n}{1-V_n}\\end{cases}$ : $V_2=\\dfrac{-2}{3}$, $V_3=\\dfrac{-2/3}{5/3}=-\\dfrac25$.",
      "keyRule": "Récurrence : on part du premier terme et on applique la règle $U_{n+1}=f(U_n)$ une fois par étape.",
      "formulas": [
        {
          "name": "Récurrence",
          "formula": "U_{n+1}=f(U_n)"
        }
      ],
      "workedExample": {
        "title": "Avancer pas à pas",
        "statement": "$V_0=7$ et $V_{n+1}=2V_n-5$. Calcule $V_4$.",
        "methodSteps": [
          "$V_1=2\\times7-5=9$.",
          "$V_2=2\\times9-5=13$.",
          "$V_3=2\\times13-5=21$, puis $V_4=2\\times21-5=37$."
        ],
        "conclusion": "$V_4=37$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Premier terme et règle",
          "stepTheme": "Premier terme et règle",
          "stepBadge": "Premier terme et règle",
          "paragraphText": "Une suite récurrente a besoin de deux choses : un premier terme et une relation entre un terme et le suivant.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q1",
            "type": "mcq",
            "prompt": "Pour $V_0=7$ et $V_{n+1}=2V_n-5$, que vaut $V_1$ ?",
            "options": [
              "$9$",
              "$14$",
              "$2$",
              "$19$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2\\times7-5=9$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Pas à pas",
          "stepTheme": "Pas à pas",
          "stepBadge": "Pas à pas",
          "paragraphText": "$V_2=2V_1-5=2\\times9-5=13$. On ne peut pas sauter d'étape.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q2",
            "type": "mcq",
            "prompt": "Que vaut $V_3=2V_2-5$ avec $V_2=13$ ?",
            "options": [
              "$23$",
              "$26$",
              "$21$",
              "$31$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$26-5=21$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Jusqu'à $V_4$",
          "stepTheme": "Jusqu'à $V_4$",
          "stepBadge": "Jusqu'à $V_4$",
          "paragraphText": "Les termes sont $7$ ; $9$ ; $13$ ; $21$ ; puis $V_4=2\\times21-5$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q3",
            "type": "mcq",
            "prompt": "$V_0=7$ et $V_{n+1}=2V_n-5$ ; on a trouvé $V_1=9$, $V_2=13$, $V_3=21$. Que vaut $V_4$ ?",
            "options": [
              "$41$",
              "$42$",
              "$35$",
              "$37$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$42-5=37$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Une règle « fois 2 plus 1 »",
          "stepTheme": "Une règle « fois 2 plus 1 »",
          "stepBadge": "Une règle « fois 2 plus 1 »",
          "paragraphText": "$U_0=1$ et $U_{n+1}=2U_n+1$ : on double et on ajoute $1$ à chaque étape.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q4",
            "type": "mcq",
            "prompt": "$U_0=1$ et $U_{n+1}=2U_n+1$. Quels sont les quatre premiers termes $U_0$, $U_1$, $U_2$, $U_3$ ?",
            "options": [
              "$1;2;4;8$",
              "$1;3;7;15$",
              "$1;3;5;7$",
              "$1;2;5;11$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$1$, $2+1=3$, $6+1=7$, $14+1=15$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une règle avec une fraction",
          "stepTheme": "Une règle avec une fraction",
          "stepBadge": "Une règle avec une fraction",
          "paragraphText": "$V_1=-2$ et $V_{n+1}=\\dfrac{V_n}{1-V_n}$ : $V_2=\\dfrac{-2}{1+2}=-\\dfrac23$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q5",
            "type": "mcq",
            "prompt": "Que vaut $V_3=\\dfrac{V_2}{1-V_2}$ avec $V_2=-\\dfrac23$ ?",
            "options": [
              "$-\\dfrac25$",
              "$-\\dfrac23$",
              "$\\dfrac25$",
              "$-2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$\\dfrac{-2/3}{1+2/3}=\\dfrac{-2/3}{5/3}=-\\dfrac25$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Explicite ou récurrente ?",
          "stepTheme": "Explicite ou récurrente ?",
          "stepBadge": "Explicite ou récurrente ?",
          "paragraphText": "Une formule explicite donne $U_n$ directement en fonction de $n$ ; une formule de récurrence donne $U_{n+1}$ en fonction de $U_n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q6",
            "type": "mcq",
            "prompt": "Laquelle de ces suites est définie par récurrence ?",
            "options": [
              "$U_n=3n+5$",
              "$U_n=n^2-5n$",
              "$U_n=7\\times2^n$",
              "$P_1=3500$ et $P_{n+1}=P_n+25$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On ne connaît $P_{n+1}$ qu'à partir de $P_n$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Une erreur se propage",
          "stepTheme": "Une erreur se propage",
          "stepBadge": "Une erreur se propage",
          "paragraphText": "Avec une récurrence, une erreur sur un terme fausse tous les suivants. Si l'on écrit $V_2=14$ au lieu de $13$, on trouve $V_3=23$ et $V_4=41$ : tout est faux.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q7",
            "type": "mcq",
            "prompt": "Dans une suite définie par récurrence ($V_0=7$, $V_{n+1}=2V_n-5$), une erreur sur $V_2$ fausse aussi $V_3$ et $V_4$. Comment éviter ce piège ?",
            "options": [
              "Calculer $V_4$ directement",
              "Vérifier chaque terme avant de passer au suivant",
              "Arrondir les résultats",
              "Commencer par $V_4$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque terme sert à calculer le suivant : on le contrôle avant d'avancer."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q1",
          "type": "mcq",
          "prompt": "Pour $V_0=7$ et $V_{n+1}=2V_n-5$, que vaut $V_1$ ?",
          "options": [
            "$9$",
            "$14$",
            "$2$",
            "$19$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2\\times7-5=9$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q2",
          "type": "mcq",
          "prompt": "Que vaut $V_3=2V_2-5$ avec $V_2=13$ ?",
          "options": [
            "$23$",
            "$26$",
            "$21$",
            "$31$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$26-5=21$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q3",
          "type": "mcq",
          "prompt": "$V_0=7$ et $V_{n+1}=2V_n-5$ ; on a trouvé $V_1=9$, $V_2=13$, $V_3=21$. Que vaut $V_4$ ?",
          "options": [
            "$41$",
            "$42$",
            "$35$",
            "$37$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$42-5=37$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q4",
          "type": "mcq",
          "prompt": "$U_0=1$ et $U_{n+1}=2U_n+1$. Quels sont les quatre premiers termes $U_0$, $U_1$, $U_2$, $U_3$ ?",
          "options": [
            "$1;2;4;8$",
            "$1;3;7;15$",
            "$1;3;5;7$",
            "$1;2;5;11$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$1$, $2+1=3$, $6+1=7$, $14+1=15$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q5",
          "type": "mcq",
          "prompt": "Que vaut $V_3=\\dfrac{V_2}{1-V_2}$ avec $V_2=-\\dfrac23$ ?",
          "options": [
            "$-\\dfrac25$",
            "$-\\dfrac23$",
            "$\\dfrac25$",
            "$-2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$\\dfrac{-2/3}{1+2/3}=\\dfrac{-2/3}{5/3}=-\\dfrac25$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q6",
          "type": "mcq",
          "prompt": "Laquelle de ces suites est définie par récurrence ?",
          "options": [
            "$U_n=3n+5$",
            "$U_n=n^2-5n$",
            "$U_n=7\\times2^n$",
            "$P_1=3500$ et $P_{n+1}=P_n+25$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On ne connaît $P_{n+1}$ qu'à partir de $P_n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p02_q7",
          "type": "mcq",
          "prompt": "Dans une suite définie par récurrence ($V_0=7$, $V_{n+1}=2V_n-5$), une erreur sur $V_2$ fausse aussi $V_3$ et $V_4$. Comment éviter ce piège ?",
          "options": [
            "Calculer $V_4$ directement",
            "Vérifier chaque terme avant de passer au suivant",
            "Arrondir les résultats",
            "Commencer par $V_4$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque terme sert à calculer le suivant : on le contrôle avant d'avancer."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03",
      "order": 3,
      "title": "Représenter une suite graphiquement",
      "summary": "Des points pour une formule explicite, un « escalier » pour une récurrence.",
      "conceptExplanation": "1. Formule explicite $U_n=f(n)$ :\n- on trace la courbe $(C_f)$ de $f$ ;\n- on place les points d'abscisses $0$, $1$, $2$… sur la courbe ; leurs ordonnées sont $U_0$, $U_1$, $U_2$…\nExemple : $U_n=2n+1$ donne les points $(0;1)$, $(1;3)$, $(2;5)$ sur la droite $y=2x+1$.\n\n2. Récurrence $U_{n+1}=f(U_n)$ : les termes se placent sur l'axe des abscisses.\n- on trace $(C_f)$ et la droite $(\\Delta)$ : $y=x$ ;\n- on place $U_0$ sur l'axe des abscisses ;\n- on monte verticalement jusqu'à $(C_f)$ : l'ordonnée obtenue est $U_1$ ;\n- on va horizontalement jusqu'à $(\\Delta)$, puis on redescend sur l'axe : on y lit $U_1$ ;\n- on recommence à partir de $U_1$ pour obtenir $U_2$, etc.\n\nExemple : $U_0=0$ et $U_{n+1}=\\dfrac23U_n+2$. On trouve $U_1=2$, $U_2=\\dfrac{10}{3}\\approx3{,}3$, $U_3=\\dfrac{38}{9}\\approx4{,}2$. Les termes se rapprochent de $6$, abscisse du point où $(C_f)$ coupe $(\\Delta)$ ($\\dfrac23x+2=x$ donne $x=6$).",
      "keyRule": "Récurrence : courbe de $f$, droite $y=x$, et on alterne « vertical vers la courbe, horizontal vers la droite ».",
      "formulas": [],
      "workedExample": {
        "title": "Les termes de la toile",
        "statement": "$U_0=0$ et $U_{n+1}=\\dfrac23U_n+2$. Calcule $U_1$, $U_2$, $U_3$.",
        "methodSteps": [
          "$U_1=\\dfrac23\\times0+2=2$.",
          "$U_2=\\dfrac23\\times2+2=\\dfrac{10}{3}$.",
          "$U_3=\\dfrac23\\times\\dfrac{10}{3}+2=\\dfrac{20}{9}+\\dfrac{18}{9}=\\dfrac{38}{9}$."
        ],
        "conclusion": "Les termes $0$ ; $2$ ; $3{,}3$ ; $4{,}2$ montent vers $6$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Formule explicite : des points",
          "stepTheme": "Formule explicite : des points",
          "stepBadge": "Formule explicite : des points",
          "paragraphText": "Pour $U_n=f(n)$, le terme $U_n$ est l'ordonnée du point de $(C_f)$ d'abscisse $n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q1",
            "type": "mcq",
            "prompt": "Pour $U_n=2n+1$, quel point représente $U_2$ ?",
            "options": [
              "$(2;5)$",
              "$(5;2)$",
              "$(2;4)$",
              "$(1;3)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$U_2=2\\times2+1=5$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Des points isolés",
          "stepTheme": "Des points isolés",
          "stepBadge": "Des points isolés",
          "paragraphText": "On ne relie pas les points : une suite n'existe que pour des valeurs entières de $n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q2",
            "type": "mcq",
            "prompt": "Que vaut $U_{1{,}5}$ pour une suite ?",
            "options": [
              "La moyenne de $U_1$ et $U_2$",
              "Il n'existe pas : l'indice est un entier",
              "$U_1$",
              "$U_2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les indices sont des entiers naturels."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "La droite $y=x$",
          "stepTheme": "La droite $y=x$",
          "stepBadge": "La droite $y=x$",
          "paragraphText": "Pour une récurrence, la droite $(\\Delta)$ : $y=x$ sert à « rabattre » une ordonnée sur l'axe des abscisses.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q3",
            "type": "mcq",
            "prompt": "À quoi sert la droite $y=x$ dans la construction ?",
            "options": [
              "À trouver le premier terme",
              "À calculer la raison",
              "À reporter $U_{n+1}$ de l'axe des ordonnées vers l'axe des abscisses",
              "À rien"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Sur $y=x$, l'abscisse est égale à l'ordonnée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Vertical, puis horizontal",
          "stepTheme": "Vertical, puis horizontal",
          "stepBadge": "Vertical, puis horizontal",
          "paragraphText": "Depuis $U_0$ sur l'axe : on monte jusqu'à $(C_f)$, on va horizontalement jusqu'à $(\\Delta)$, puis on redescend : on lit $U_1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q4",
            "type": "mcq",
            "prompt": "Pour $U_0=0$ et $U_{n+1}=\\dfrac23U_n+2$, à quelle hauteur arrive-t-on en montant de $U_0$ jusqu'à la courbe ?",
            "options": [
              "$0$",
              "$\\dfrac23$",
              "$6$",
              "$2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f(0)=2=U_1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les termes suivants",
          "stepTheme": "Les termes suivants",
          "stepBadge": "Les termes suivants",
          "paragraphText": "$U_2=\\dfrac23\\times2+2=\\dfrac{10}{3}$ et $U_3=\\dfrac{38}{9}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q5",
            "type": "mcq",
            "prompt": "$U_0=0$ et $U_{n+1}=\\dfrac23U_n+2$, donc $U_1=2$. Que vaut $U_2$, environ ?",
            "options": [
              "$2{,}7$",
              "$4{,}2$",
              "$3{,}3$",
              "$6$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac{10}{3}\\approx3{,}33$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Le point de rencontre",
          "stepTheme": "Le point de rencontre",
          "stepBadge": "Le point de rencontre",
          "paragraphText": "Ici les termes s'approchent de l'abscisse du point commun à $(C_f)$ et $(\\Delta)$ : on résout $f(x)=x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q6",
            "type": "mcq",
            "prompt": "Résous $\\dfrac23x+2=x$.",
            "options": [
              "$x=6$",
              "$x=3$",
              "$x=2$",
              "$x=-6$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2=\\dfrac13x$, donc $x=6$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Où lire les termes ?",
          "stepTheme": "Où lire les termes ?",
          "stepBadge": "Où lire les termes ?",
          "paragraphText": "Pour une récurrence, les termes $U_0$, $U_1$, $U_2$… se lisent sur l'axe des ABSCISSES, pas sur l'axe des ordonnées.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q7",
            "type": "mcq",
            "prompt": "Avec $U_0=1$ et $U_{n+1}=2U_n+1$, où place-t-on $U_3=15$ à la fin de la construction ?",
            "options": [
              "Sur l'axe des ordonnées, à $15$",
              "Sur l'axe des abscisses, à $15$",
              "Au point $(3;15)$",
              "Sur la droite $y=x$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On redescend chaque fois sur l'axe des abscisses : $1$, $3$, $7$, $15$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q1",
          "type": "mcq",
          "prompt": "Pour $U_n=2n+1$, quel point représente $U_2$ ?",
          "options": [
            "$(2;5)$",
            "$(5;2)$",
            "$(2;4)$",
            "$(1;3)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$U_2=2\\times2+1=5$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q2",
          "type": "mcq",
          "prompt": "Que vaut $U_{1{,}5}$ pour une suite ?",
          "options": [
            "La moyenne de $U_1$ et $U_2$",
            "Il n'existe pas : l'indice est un entier",
            "$U_1$",
            "$U_2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les indices sont des entiers naturels."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q3",
          "type": "mcq",
          "prompt": "À quoi sert la droite $y=x$ dans la construction ?",
          "options": [
            "À trouver le premier terme",
            "À calculer la raison",
            "À reporter $U_{n+1}$ de l'axe des ordonnées vers l'axe des abscisses",
            "À rien"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Sur $y=x$, l'abscisse est égale à l'ordonnée."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q4",
          "type": "mcq",
          "prompt": "Pour $U_0=0$ et $U_{n+1}=\\dfrac23U_n+2$, à quelle hauteur arrive-t-on en montant de $U_0$ jusqu'à la courbe ?",
          "options": [
            "$0$",
            "$\\dfrac23$",
            "$6$",
            "$2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f(0)=2=U_1$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q5",
          "type": "mcq",
          "prompt": "$U_0=0$ et $U_{n+1}=\\dfrac23U_n+2$, donc $U_1=2$. Que vaut $U_2$, environ ?",
          "options": [
            "$2{,}7$",
            "$4{,}2$",
            "$3{,}3$",
            "$6$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac{10}{3}\\approx3{,}33$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q6",
          "type": "mcq",
          "prompt": "Résous $\\dfrac23x+2=x$.",
          "options": [
            "$x=6$",
            "$x=3$",
            "$x=2$",
            "$x=-6$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2=\\dfrac13x$, donc $x=6$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p03_q7",
          "type": "mcq",
          "prompt": "Avec $U_0=1$ et $U_{n+1}=2U_n+1$, où place-t-on $U_3=15$ à la fin de la construction ?",
          "options": [
            "Sur l'axe des ordonnées, à $15$",
            "Sur l'axe des abscisses, à $15$",
            "Au point $(3;15)$",
            "Sur la droite $y=x$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On redescend chaque fois sur l'axe des abscisses : $1$, $3$, $7$, $15$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04",
      "order": 4,
      "title": "Suites arithmétiques",
      "summary": "On ajoute toujours le même nombre $r$ : $U_{n+1}=U_n+r$.",
      "conceptExplanation": "Définition : $(U_n)$ est arithmétique s'il existe un réel $r$ tel que, pour tout $n$,\n$$U_{n+1}=U_n+r.$$\n$r$ est la raison de la suite.\n\nMontrer qu'une suite est arithmétique : on calcule $U_{n+1}-U_n$ ; si le résultat est une constante, c'est la raison.\nExemple : $U_n=\\dfrac12n-3$. $U_{n+1}-U_n=\\dfrac12(n+1)-3-\\dfrac12n+3=\\dfrac12$. La suite est arithmétique de raison $\\dfrac12$ et de premier terme $U_0=-3$.\n\nTerme général : pour tous entiers $n$ et $k$,\n$$U_n=U_k+(n-k)r.$$\nCas particuliers : $U_n=U_0+nr$ et $U_n=U_1+(n-1)r$.\n\nExemples :\n- raison $-4$ et $U_0=5$ : $U_n=5-4n$ ;\n- $U_2=5$ et raison $-3$ : $U_n=5+(n-2)(-3)=-3n+11$ ;\n- $U_6=-3$ et $U_9=-6$ : $U_9=U_6+3r$, donc $-6=-3+3r$ et $r=-1$ ;\n- $U_8=4$ et $U_{20}=28$ : $r=\\dfrac{28-4}{20-8}=2$, puis $U_{18}=U_{20}-2r=24$ et $U_{19}=26$ ;\n- $2P_{n+1}=2P_n-5$ donne $P_{n+1}=P_n-\\dfrac52$ : raison $-\\dfrac52$.",
      "keyRule": "Arithmétique : $U_{n+1}-U_n=r$ constant. Terme général : $U_n=U_k+(n-k)r$.",
      "formulas": [
        {
          "name": "Définition",
          "formula": "U_{n+1}=U_n+r"
        },
        {
          "name": "Terme général",
          "formula": "U_n=U_k+(n-k)r\\qquad U_n=U_0+nr"
        }
      ],
      "workedExample": {
        "title": "Trouver la raison avec deux termes",
        "statement": "$(U_n)$ est arithmétique, $U_8=4$ et $U_{20}=28$. Calcule $r$ puis $U_{18}$.",
        "methodSteps": [
          "$U_{20}=U_8+(20-8)r$, donc $28=4+12r$.",
          "$r=\\dfrac{24}{12}=2$.",
          "$U_{18}=U_{20}+(18-20)\\times2=28-4=24$."
        ],
        "conclusion": "$r=2$ et $U_{18}=24$ (puis $U_{19}=26$)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La raison",
          "stepTheme": "La raison",
          "stepBadge": "La raison",
          "paragraphText": "Dans une suite arithmétique, on passe d'un terme au suivant en ajoutant toujours la même raison $r$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q1",
            "type": "mcq",
            "prompt": "Les termes $2$ ; $5$ ; $8$ ; $11$ suivent une suite arithmétique de raison :",
            "options": [
              "$2$",
              "$3$",
              "$5$",
              "$\\dfrac52$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ajoute $3$ à chaque fois."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Montrer qu'elle est arithmétique",
          "stepTheme": "Montrer qu'elle est arithmétique",
          "stepBadge": "Montrer qu'elle est arithmétique",
          "paragraphText": "On calcule $U_{n+1}-U_n$. Pour $t_n=-6n+3$ : $t_{n+1}-t_n=-6(n+1)+3+6n-3=-6$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q2",
            "type": "mcq",
            "prompt": "Quelle est la raison de la suite $r_n=-2n+7$ ?",
            "options": [
              "$7$",
              "$2$",
              "$-2$",
              "Elle n'est pas arithmétique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$r_{n+1}-r_n=-2$, une constante."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Pas toutes les suites",
          "stepTheme": "Pas toutes les suites",
          "stepBadge": "Pas toutes les suites",
          "paragraphText": "Si $U_{n+1}-U_n$ dépend de $n$, la suite n'est pas arithmétique. Exemple : $u_n=n^2$ donne $2n+1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces suites N'est PAS arithmétique ?",
            "options": [
              "$U_n=3n+5$",
              "$U_n=\\dfrac12n-3$",
              "$U_n=-6n+3$",
              "$U_n=1-\\dfrac2n$ ($n\\geq1$)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$U_2-U_1=0-(-1)=1$ mais $U_3-U_2=\\dfrac13-0=\\dfrac13$ : l'écart change."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le terme général",
          "stepTheme": "Le terme général",
          "stepBadge": "Le terme général",
          "paragraphText": "$U_n=U_0+nr$ : depuis $U_0$, on ajoute $n$ fois la raison.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q4",
            "type": "mcq",
            "prompt": "Raison $-4$ et $U_0=5$ : quel est le terme général ?",
            "options": [
              "$U_n=5-4n$",
              "$U_n=-4+5n$",
              "$U_n=5n-4$",
              "$U_n=1-4n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$U_n=U_0+nr=5+(-4)n$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "À partir d'un autre rang",
          "stepTheme": "À partir d'un autre rang",
          "stepBadge": "À partir d'un autre rang",
          "paragraphText": "$U_n=U_k+(n-k)r$. Avec $U_2=5$ et $r=-3$ : $U_n=5+(n-2)(-3)=-3n+11$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q5",
            "type": "mcq",
            "prompt": "Raison $3$ et $V_1=-2$ : que vaut $V_n$ ?",
            "options": [
              "$3n-2$",
              "$-2n+3$",
              "$3n-5$",
              "$3n+1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$V_n=V_1+(n-1)r=-2+3n-3=3n-5$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Deux termes connus",
          "stepTheme": "Deux termes connus",
          "stepBadge": "Deux termes connus",
          "paragraphText": "Avec $U_6=-3$ et $U_9=-6$ : $U_9=U_6+3r$, donc $-6=-3+3r$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q6",
            "type": "mcq",
            "prompt": "Que vaut la raison $r$ ?",
            "options": [
              "$1$",
              "$-3$",
              "$3$",
              "$-1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$3r=-3$, donc $r=-1$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Une relation à transformer",
          "stepTheme": "Une relation à transformer",
          "stepBadge": "Une relation à transformer",
          "paragraphText": "$2P_{n+1}=2P_n-5$ : on divise par $2$, $P_{n+1}=P_n-\\dfrac52$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q7",
            "type": "mcq",
            "prompt": "La suite $(P_n)$ vérifie $2P_{n+1}=2P_n-5$ pour tout $n$. Quelle est sa raison ?",
            "options": [
              "$\\dfrac52$",
              "$-\\dfrac52$",
              "$-5$",
              "$2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On retranche $\\dfrac52$ à chaque étape : la raison est négative."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q1",
          "type": "mcq",
          "prompt": "Les termes $2$ ; $5$ ; $8$ ; $11$ suivent une suite arithmétique de raison :",
          "options": [
            "$2$",
            "$3$",
            "$5$",
            "$\\dfrac52$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ajoute $3$ à chaque fois."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q2",
          "type": "mcq",
          "prompt": "Quelle est la raison de la suite $r_n=-2n+7$ ?",
          "options": [
            "$7$",
            "$2$",
            "$-2$",
            "Elle n'est pas arithmétique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$r_{n+1}-r_n=-2$, une constante."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces suites N'est PAS arithmétique ?",
          "options": [
            "$U_n=3n+5$",
            "$U_n=\\dfrac12n-3$",
            "$U_n=-6n+3$",
            "$U_n=1-\\dfrac2n$ ($n\\geq1$)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$U_2-U_1=0-(-1)=1$ mais $U_3-U_2=\\dfrac13-0=\\dfrac13$ : l'écart change."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q4",
          "type": "mcq",
          "prompt": "Raison $-4$ et $U_0=5$ : quel est le terme général ?",
          "options": [
            "$U_n=5-4n$",
            "$U_n=-4+5n$",
            "$U_n=5n-4$",
            "$U_n=1-4n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$U_n=U_0+nr=5+(-4)n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q5",
          "type": "mcq",
          "prompt": "Raison $3$ et $V_1=-2$ : que vaut $V_n$ ?",
          "options": [
            "$3n-2$",
            "$-2n+3$",
            "$3n-5$",
            "$3n+1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$V_n=V_1+(n-1)r=-2+3n-3=3n-5$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q6",
          "type": "mcq",
          "prompt": "Que vaut la raison $r$ ?",
          "options": [
            "$1$",
            "$-3$",
            "$3$",
            "$-1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$3r=-3$, donc $r=-1$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p04_q7",
          "type": "mcq",
          "prompt": "La suite $(P_n)$ vérifie $2P_{n+1}=2P_n-5$ pour tout $n$. Quelle est sa raison ?",
          "options": [
            "$\\dfrac52$",
            "$-\\dfrac52$",
            "$-5$",
            "$2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On retranche $\\dfrac52$ à chaque étape : la raison est négative."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05",
      "order": 5,
      "title": "Somme de termes d'une suite arithmétique",
      "summary": "Nombre de termes × (premier + dernier) ÷ 2.",
      "conceptExplanation": "Propriété : la somme de termes consécutifs d'une suite arithmétique est égale au nombre de termes multiplié par la demi-somme des termes extrêmes :\n$$S=\\text{(nombre de termes)}\\times\\dfrac{\\text{premier}+\\text{dernier}}{2}.$$\n- $U_1+U_2+\\dots+U_n=n\\times\\dfrac{U_1+U_n}{2}$ ;\n- $U_k+U_{k+1}+\\dots+U_j=(j-k+1)\\times\\dfrac{U_k+U_j}{2}$.\n\nExemples :\n- $1+2+\\dots+2020=2020\\times\\dfrac{1+2020}{2}=2\\,041\\,210$ ;\n- $2+4+\\dots+2n=n\\times\\dfrac{2+2n}{2}=n(n+1)$ ;\n- $1+3+5+\\dots+(2n+1)=(n+1)\\times\\dfrac{1+2n+1}{2}=(n+1)^2$ ;\n- la somme des 100 premiers nombres impairs : $1+3+\\dots+199=100\\times\\dfrac{1+199}{2}=10\\,000$.\n\nExemple : $(U_n)$ arithmétique de raison $9$ et $U_0=-2$, donc $U_n=-2+9n$.\n- $U_0+U_1+\\dots+U_{n-1}$ : $n$ termes, $S=\\dfrac n2(U_0+U_{n-1})=\\dfrac n2(-2-2+9n-9)=\\dfrac{n(9n-13)}{2}$ ;\n- $T=U_3+\\dots+U_{77}$ : $77-3+1=75$ termes, $U_3=25$, $U_{77}=691$, $T=\\dfrac{75}{2}\\times716=26\\,850$.",
      "keyRule": "$S=$ nombre de termes $\\times\\dfrac{\\text{premier}+\\text{dernier}}{2}$ ; de $U_k$ à $U_j$, il y a $j-k+1$ termes.",
      "formulas": [
        {
          "name": "Somme arithmétique",
          "formula": "U_k+\\dots+U_j=(j-k+1)\\times\\dfrac{U_k+U_j}{2}"
        },
        {
          "name": "Somme des entiers",
          "formula": "1+2+\\dots+n=\\dfrac{n(n+1)}{2}"
        }
      ],
      "workedExample": {
        "title": "Une somme du rang 3 au rang 77",
        "statement": "$(U_n)$ arithmétique, $U_0=-2$, $r=9$. Calcule $T=U_3+U_4+\\dots+U_{77}$.",
        "methodSteps": [
          "Nombre de termes : $77-3+1=75$.",
          "$U_3=-2+27=25$ et $U_{77}=-2+693=691$.",
          "$T=75\\times\\dfrac{25+691}{2}=75\\times358$."
        ],
        "conclusion": "$T=26\\,850$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La formule",
          "stepTheme": "La formule",
          "stepBadge": "La formule",
          "paragraphText": "$S=$ nombre de termes $\\times\\dfrac{\\text{premier}+\\text{dernier}}{2}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q1",
            "type": "mcq",
            "prompt": "Que vaut $1+2+3+\\dots+100$ ?",
            "options": [
              "$5\\,000$",
              "$10\\,100$",
              "$5\\,050$",
              "$5\\,100$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$100\\times\\dfrac{1+100}{2}=5\\,050$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Compter les termes",
          "stepTheme": "Compter les termes",
          "stepBadge": "Compter les termes",
          "paragraphText": "De $U_k$ à $U_j$, il y a $j-k+1$ termes. Exemple : de $U_3$ à $U_{77}$, $75$ termes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q2",
            "type": "mcq",
            "prompt": "Combien de termes dans $U_5+U_6+\\dots+U_{20}$ ?",
            "options": [
              "$15$",
              "$20$",
              "$25$",
              "$16$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$20-5+1=16$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Les nombres pairs",
          "stepTheme": "Les nombres pairs",
          "stepBadge": "Les nombres pairs",
          "paragraphText": "$2+4+\\dots+2n$ : $n$ termes, donc $n\\times\\dfrac{2+2n}{2}=n(n+1)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q3",
            "type": "mcq",
            "prompt": "Que vaut $2+4+6+\\dots+20$ ?",
            "options": [
              "$110$",
              "$100$",
              "$220$",
              "$210$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$n=10$ : $10\\times11=110$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les nombres impairs",
          "stepTheme": "Les nombres impairs",
          "stepBadge": "Les nombres impairs",
          "paragraphText": "Avec $U_n=2n+1$ : $U_0+\\dots+U_{99}=100\\times\\dfrac{1+199}{2}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q4",
            "type": "mcq",
            "prompt": "Que vaut la somme des 100 premiers nombres impairs ?",
            "options": [
              "$9\\,900$",
              "$10\\,000$",
              "$10\\,100$",
              "$20\\,000$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$100\\times100=10\\,000$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Calculer le dernier terme",
          "stepTheme": "Calculer le dernier terme",
          "stepBadge": "Calculer le dernier terme",
          "paragraphText": "Souvent, il faut d'abord calculer le dernier terme avec $U_n=U_0+nr$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q5",
            "type": "mcq",
            "prompt": "$U_0=-2$ et $r=9$. Que vaut $U_{77}$ ?",
            "options": [
              "$693$",
              "$695$",
              "$691$",
              "$689$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$-2+77\\times9=-2+693=691$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La somme $T$",
          "stepTheme": "La somme $T$",
          "stepBadge": "La somme $T$",
          "paragraphText": "$T=U_3+\\dots+U_{77}=75\\times\\dfrac{25+691}{2}=75\\times358$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q6",
            "type": "mcq",
            "prompt": "$(U_n)$ est arithmétique avec $U_0=-2$ et $r=9$, donc $U_3=25$ et $U_{77}=691$. Que vaut $T=U_3+U_4+\\dots+U_{77}$ ?",
            "options": [
              "$26\\,850$",
              "$53\\,700$",
              "$27\\,208$",
              "$25\\,060$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$75\\times358=26\\,850$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Oublier le « + 1 »",
          "stepTheme": "Oublier le « + 1 »",
          "stepBadge": "Oublier le « + 1 »",
          "paragraphText": "De $U_0$ à $U_{n-1}$, il y a $n$ termes (et non $n-1$). Ainsi $U_0+\\dots+U_{n-1}=\\dfrac n2(U_0+U_{n-1})$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q7",
            "type": "mcq",
            "prompt": "Avec $U_0=-2$ et $r=9$, que vaut $U_0+U_1+\\dots+U_{n-1}$ ?",
            "options": [
              "$\\dfrac{n(9n-4)}{2}$",
              "$\\dfrac{(n-1)(9n-13)}{2}$",
              "$\\dfrac{n(9n+13)}{2}$",
              "$\\dfrac{n(9n-13)}{2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$U_{n-1}=-2+9(n-1)=9n-11$, et $\\dfrac n2(-2+9n-11)=\\dfrac{n(9n-13)}{2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q1",
          "type": "mcq",
          "prompt": "Que vaut $1+2+3+\\dots+100$ ?",
          "options": [
            "$5\\,000$",
            "$10\\,100$",
            "$5\\,050$",
            "$5\\,100$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$100\\times\\dfrac{1+100}{2}=5\\,050$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q2",
          "type": "mcq",
          "prompt": "Combien de termes dans $U_5+U_6+\\dots+U_{20}$ ?",
          "options": [
            "$15$",
            "$20$",
            "$25$",
            "$16$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$20-5+1=16$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q3",
          "type": "mcq",
          "prompt": "Que vaut $2+4+6+\\dots+20$ ?",
          "options": [
            "$110$",
            "$100$",
            "$220$",
            "$210$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$n=10$ : $10\\times11=110$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q4",
          "type": "mcq",
          "prompt": "Que vaut la somme des 100 premiers nombres impairs ?",
          "options": [
            "$9\\,900$",
            "$10\\,000$",
            "$10\\,100$",
            "$20\\,000$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$100\\times100=10\\,000$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q5",
          "type": "mcq",
          "prompt": "$U_0=-2$ et $r=9$. Que vaut $U_{77}$ ?",
          "options": [
            "$693$",
            "$695$",
            "$691$",
            "$689$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$-2+77\\times9=-2+693=691$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q6",
          "type": "mcq",
          "prompt": "$(U_n)$ est arithmétique avec $U_0=-2$ et $r=9$, donc $U_3=25$ et $U_{77}=691$. Que vaut $T=U_3+U_4+\\dots+U_{77}$ ?",
          "options": [
            "$26\\,850$",
            "$53\\,700$",
            "$27\\,208$",
            "$25\\,060$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$75\\times358=26\\,850$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p05_q7",
          "type": "mcq",
          "prompt": "Avec $U_0=-2$ et $r=9$, que vaut $U_0+U_1+\\dots+U_{n-1}$ ?",
          "options": [
            "$\\dfrac{n(9n-4)}{2}$",
            "$\\dfrac{(n-1)(9n-13)}{2}$",
            "$\\dfrac{n(9n+13)}{2}$",
            "$\\dfrac{n(9n-13)}{2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$U_{n-1}=-2+9(n-1)=9n-11$, et $\\dfrac n2(-2+9n-11)=\\dfrac{n(9n-13)}{2}$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06",
      "order": 6,
      "title": "Suites géométriques",
      "summary": "On multiplie toujours par le même nombre $q$ : $U_{n+1}=qU_n$.",
      "conceptExplanation": "Définition : $(U_n)$ est géométrique s'il existe un réel $q$ tel que, pour tout $n$,\n$$U_{n+1}=q\\times U_n.$$\n$q$ est la raison de la suite.\n\nMontrer qu'une suite est géométrique : on exprime $U_{n+1}$ sous la forme $q\\times U_n$.\n- $V_n=3\\left(\\dfrac14\\right)^n$ : $V_{n+1}=3\\left(\\dfrac14\\right)^{n+1}=\\dfrac14V_n$. Raison $\\dfrac14$, $V_0=3$ ;\n- $U_n=7\\times2^n$ : $U_{n+1}=2U_n$. Raison $2$, $U_0=7$ ;\n- $2V_{n+1}+5V_n=0$ donne $V_{n+1}=-\\dfrac52V_n$ : raison $-\\dfrac52$.\n\nTerme général : $U_n=q^{n-k}\\times U_k$ ; en particulier $U_n=U_0\\times q^n$ et $U_n=U_1\\times q^{n-1}$.\n- raison $3$ et $V_1=3$ : $V_n=3\\times3^{n-1}=3^n$ ;\n- $V_1=-2$ et $q=-5$ : $V_n=-2\\times(-5)^{n-1}$ ;\n- $V_1=-\\dfrac32$ et $V_3=-\\dfrac{27}{2}$ : $V_3=q^2V_1$ donne $q^2=9$, donc $q=3$ ou $q=-3$.\n\nSomme de termes consécutifs ($q\\neq1$) :\n$$U_k+U_{k+1}+\\dots+U_{k+p}=U_k\\times\\dfrac{1-q^{p+1}}{1-q},$$\nc'est-à-dire premier terme $\\times\\dfrac{1-q^{\\text{nombre de termes}}}{1-q}$. Si $q=1$ : $S=$ nombre de termes $\\times$ premier terme.\n\nExemple : $T=\\dfrac13+\\dfrac{1}{3^2}+\\dots+\\dfrac{1}{3^7}=\\dfrac13\\times\\dfrac{1-\\left(\\frac13\\right)^7}{1-\\frac13}=\\dfrac12\\left(1-\\dfrac{1}{2187}\\right)=\\dfrac{1093}{2187}$.",
      "keyRule": "Géométrique : $U_{n+1}=qU_n$ ; $U_n=U_0q^n$ ; somme $=$ premier $\\times\\dfrac{1-q^{N}}{1-q}$ avec $N$ le nombre de termes.",
      "formulas": [
        {
          "name": "Terme général",
          "formula": "U_n=U_0\\times q^n\\qquad U_n=U_1\\times q^{n-1}"
        },
        {
          "name": "Somme géométrique",
          "formula": "S=\\text{premier}\\times\\dfrac{1-q^{N}}{1-q}\\quad(q\\neq1)"
        }
      ],
      "workedExample": {
        "title": "Une somme géométrique",
        "statement": "Calcule $T=\\dfrac13+\\dfrac{1}{3^2}+\\dots+\\dfrac{1}{3^7}$.",
        "methodSteps": [
          "Premier terme $\\dfrac13$, raison $\\dfrac13$, $7$ termes.",
          "$T=\\dfrac13\\times\\dfrac{1-\\left(\\frac13\\right)^7}{\\frac23}=\\dfrac12\\left(1-\\dfrac{1}{2187}\\right)$."
        ],
        "conclusion": "$T=\\dfrac{1093}{2187}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La raison $q$",
          "stepTheme": "La raison $q$",
          "stepBadge": "La raison $q$",
          "paragraphText": "Dans une suite géométrique, on passe d'un terme au suivant en multipliant toujours par $q$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q1",
            "type": "mcq",
            "prompt": "Les termes $3$ ; $6$ ; $12$ ; $24$ suivent une suite géométrique de raison :",
            "options": [
              "$3$",
              "$2$",
              "$6$",
              "$\\dfrac12$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On multiplie par $2$ à chaque fois."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Montrer qu'elle est géométrique",
          "stepTheme": "Montrer qu'elle est géométrique",
          "stepBadge": "Montrer qu'elle est géométrique",
          "paragraphText": "$U_n=7\\times2^n$ : $U_{n+1}=7\\times2^n\\times2=2U_n$. Raison $2$, premier terme $U_0=7$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q2",
            "type": "mcq",
            "prompt": "$2V_{n+1}+5V_n=0$ et $V_0=2$. Quelle est la raison de $(V_n)$ ?",
            "options": [
              "$-\\dfrac52$",
              "$\\dfrac52$",
              "$-\\dfrac25$",
              "$5$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$2V_{n+1}=-5V_n$, donc $V_{n+1}=-\\dfrac52V_n$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "piege",
          "stepTitle": "Une constante ajoutée",
          "stepTheme": "Une constante ajoutée",
          "stepBadge": "Une constante ajoutée",
          "paragraphText": "$t_n=3\\times2^n-1$ n'est pas géométrique : $t_0=2$, $t_1=5$, $t_2=11$, et $\\dfrac52\\neq\\dfrac{11}{5}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q3",
            "type": "mcq",
            "prompt": "Laquelle de ces suites est géométrique ?",
            "options": [
              "$t_n=3\\times2^n-1$",
              "$r_n=-2n+7$",
              "$v_n=6^n$",
              "$u_n=n^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$v_{n+1}=6\\times6^n=6v_n$ : raison $6$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le terme général",
          "stepTheme": "Le terme général",
          "stepBadge": "Le terme général",
          "paragraphText": "$U_n=U_0\\times q^n$ ou $U_n=U_1\\times q^{n-1}$ : l'exposant compte le nombre de multiplications.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q4",
            "type": "mcq",
            "prompt": "$V_1=-2$ et $q=-5$. Quelle est l'expression de $V_n$ ?",
            "options": [
              "$-2\\times(-5)^n$",
              "$-5\\times(-2)^{n-1}$",
              "$10^{n-1}$",
              "$-2\\times(-5)^{n-1}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$V_n=V_1\\times q^{n-1}$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Deux termes connus",
          "stepTheme": "Deux termes connus",
          "stepBadge": "Deux termes connus",
          "paragraphText": "$V_1=-\\dfrac32$ et $V_3=-\\dfrac{27}{2}$ : $V_3=q^2V_1$ donne $q^2=9$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q5",
            "type": "mcq",
            "prompt": "$(V_n)$ est géométrique de raison $q$, avec $V_1=-\\dfrac32$ et $V_3=-\\dfrac{27}{2}$. Quelles sont les valeurs possibles de $q$ ?",
            "options": [
              "$3$ seulement",
              "$9$ ou $-9$",
              "$3$ ou $-3$",
              "$-3$ seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$q^2=9$ a deux solutions : $3$ et $-3$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "La somme géométrique",
          "stepTheme": "La somme géométrique",
          "stepBadge": "La somme géométrique",
          "paragraphText": "Somme $=$ premier terme $\\times\\dfrac{1-q^N}{1-q}$, avec $N$ le nombre de termes.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q6",
            "type": "mcq",
            "prompt": "Que vaut $1+2+4+\\dots+2^9$ ?",
            "options": [
              "$1\\,023$",
              "$1\\,024$",
              "$511$",
              "$2\\,047$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$10$ termes : $1\\times\\dfrac{1-2^{10}}{1-2}=2^{10}-1=1\\,023$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Avec une raison fractionnaire",
          "stepTheme": "Avec une raison fractionnaire",
          "stepBadge": "Avec une raison fractionnaire",
          "paragraphText": "$T=\\dfrac13+\\dots+\\dfrac{1}{3^7}=\\dfrac13\\times\\dfrac{1-\\left(\\frac13\\right)^7}{1-\\frac13}=\\dfrac12\\left(1-\\dfrac{1}{2187}\\right)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q7",
            "type": "mcq",
            "prompt": "Que vaut la somme géométrique $T=\\dfrac13+\\dfrac{1}{3^2}+\\dots+\\dfrac{1}{3^7}$ ?",
            "options": [
              "$\\dfrac{1}{2}$",
              "$\\dfrac{2186}{2187}$",
              "$\\dfrac{1093}{2187}$",
              "$\\dfrac{7}{3}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$\\dfrac12\\times\\dfrac{2186}{2187}=\\dfrac{1093}{2187}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q1",
          "type": "mcq",
          "prompt": "Les termes $3$ ; $6$ ; $12$ ; $24$ suivent une suite géométrique de raison :",
          "options": [
            "$3$",
            "$2$",
            "$6$",
            "$\\dfrac12$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On multiplie par $2$ à chaque fois."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q2",
          "type": "mcq",
          "prompt": "$2V_{n+1}+5V_n=0$ et $V_0=2$. Quelle est la raison de $(V_n)$ ?",
          "options": [
            "$-\\dfrac52$",
            "$\\dfrac52$",
            "$-\\dfrac25$",
            "$5$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$2V_{n+1}=-5V_n$, donc $V_{n+1}=-\\dfrac52V_n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q3",
          "type": "mcq",
          "prompt": "Laquelle de ces suites est géométrique ?",
          "options": [
            "$t_n=3\\times2^n-1$",
            "$r_n=-2n+7$",
            "$v_n=6^n$",
            "$u_n=n^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$v_{n+1}=6\\times6^n=6v_n$ : raison $6$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q4",
          "type": "mcq",
          "prompt": "$V_1=-2$ et $q=-5$. Quelle est l'expression de $V_n$ ?",
          "options": [
            "$-2\\times(-5)^n$",
            "$-5\\times(-2)^{n-1}$",
            "$10^{n-1}$",
            "$-2\\times(-5)^{n-1}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$V_n=V_1\\times q^{n-1}$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q5",
          "type": "mcq",
          "prompt": "$(V_n)$ est géométrique de raison $q$, avec $V_1=-\\dfrac32$ et $V_3=-\\dfrac{27}{2}$. Quelles sont les valeurs possibles de $q$ ?",
          "options": [
            "$3$ seulement",
            "$9$ ou $-9$",
            "$3$ ou $-3$",
            "$-3$ seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$q^2=9$ a deux solutions : $3$ et $-3$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q6",
          "type": "mcq",
          "prompt": "Que vaut $1+2+4+\\dots+2^9$ ?",
          "options": [
            "$1\\,023$",
            "$1\\,024$",
            "$511$",
            "$2\\,047$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$10$ termes : $1\\times\\dfrac{1-2^{10}}{1-2}=2^{10}-1=1\\,023$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p06_q7",
          "type": "mcq",
          "prompt": "Que vaut la somme géométrique $T=\\dfrac13+\\dfrac{1}{3^2}+\\dots+\\dfrac{1}{3^7}$ ?",
          "options": [
            "$\\dfrac{1}{2}$",
            "$\\dfrac{2186}{2187}$",
            "$\\dfrac{1093}{2187}$",
            "$\\dfrac{7}{3}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$\\dfrac12\\times\\dfrac{2186}{2187}=\\dfrac{1093}{2187}$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07",
      "order": 7,
      "title": "Utiliser une suite auxiliaire",
      "summary": "Une suite compliquée devient simple grâce à une suite intermédiaire.",
      "conceptExplanation": "Méthode : on pose une suite auxiliaire $(V_n)$ liée à $(U_n)$, on montre qu'elle est arithmétique ou géométrique, on exprime $V_n$, puis on revient à $U_n$.\n\nExemple : $U_0=9$, $U_{n+1}=\\dfrac13U_n+2$ et $V_n=U_n-3$.\n1. $U_1=5$, $U_2=\\dfrac{11}{3}$ ; $V_0=6$, $V_1=2$, $V_2=\\dfrac23$.\n2. $V_{n+1}=U_{n+1}-3=\\dfrac13U_n-1=\\dfrac13(U_n-3)=\\dfrac13V_n$ : $(V_n)$ est géométrique de raison $\\dfrac13$ et $V_0=6$.\n3. $V_n=6\\left(\\dfrac13\\right)^n$, donc $U_n=V_n+3=6\\left(\\dfrac13\\right)^n+3$.\n4. $T_n=V_1+V_2+\\dots+V_n$ : $n$ termes, premier terme $V_1=2$, donc\n$$T_n=2\\times\\dfrac{1-\\left(\\frac13\\right)^n}{1-\\frac13}=3\\left(1-\\left(\\dfrac13\\right)^n\\right).$$\n5. $S_n=U_1+\\dots+U_n=T_n+3n=3\\left(1-\\left(\\dfrac13\\right)^n\\right)+3n$.\n\nExemple : $U_0=4$, $U_{n+1}=\\dfrac{4U_n-9}{U_n-2}$ et $V_n=\\dfrac{1}{U_n-3}$.\n- $U_1=\\dfrac72$, $U_2=\\dfrac{10}{3}$ ; $V_0=1$, $V_1=2$, $V_2=3$ ;\n- $V_{n+1}=\\dfrac{U_n-2}{U_n-3}=1+V_n$ : arithmétique de raison $1$, donc $V_n=1+n$ ;\n- $U_n=3+\\dfrac{1}{V_n}=\\dfrac{3n+4}{n+1}$ ;\n- $V_1+\\dots+V_n=n\\times\\dfrac{2+(n+1)}{2}=\\dfrac{n^2+3n}{2}$.",
      "keyRule": "Montrer que $(V_n)$ est arithmétique ou géométrique, exprimer $V_n$, puis revenir à $U_n$. Bien repérer le PREMIER terme de chaque somme.",
      "formulas": [],
      "workedExample": {
        "title": "La somme $T_n$",
        "statement": "$V_n=6\\left(\\dfrac13\\right)^n$. Calcule $T_n=V_1+V_2+\\dots+V_n$.",
        "methodSteps": [
          "La somme commence à $V_1=2$ et compte $n$ termes.",
          "$T_n=2\\times\\dfrac{1-\\left(\\frac13\\right)^n}{\\frac23}=3\\left(1-\\left(\\dfrac13\\right)^n\\right)$."
        ],
        "conclusion": "$T_n=3\\left(1-\\left(\\dfrac13\\right)^n\\right)$ et $S_n=T_n+3n$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "exemple",
          "stepTitle": "Les premiers termes",
          "stepTheme": "Les premiers termes",
          "stepBadge": "Les premiers termes",
          "paragraphText": "$U_0=9$ et $U_{n+1}=\\dfrac13U_n+2$ : $U_1=3+2=5$, puis $U_2=\\dfrac53+2=\\dfrac{11}{3}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q1",
            "type": "mcq",
            "prompt": "Avec $V_n=U_n-3$, que vaut $V_1$ ?",
            "options": [
              "$5$",
              "$6$",
              "$\\dfrac23$",
              "$2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$V_1=U_1-3=5-3=2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Montrer que $(V_n)$ est géométrique",
          "stepTheme": "Montrer que $(V_n)$ est géométrique",
          "stepBadge": "Montrer que $(V_n)$ est géométrique",
          "paragraphText": "$V_{n+1}=U_{n+1}-3=\\dfrac13U_n-1=\\dfrac13(U_n-3)=\\dfrac13V_n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q2",
            "type": "mcq",
            "prompt": "$U_0=9$, $U_{n+1}=\\dfrac13U_n+2$ et $V_n=U_n-3$. On montre que $V_{n+1}=\\dfrac13(U_n-3)$. Quelle est la raison de $(V_n)$ ?",
            "options": [
              "$\\dfrac13$",
              "$3$",
              "$2$",
              "$-3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$V_{n+1}=\\dfrac13V_n$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Revenir à $U_n$",
          "stepTheme": "Revenir à $U_n$",
          "stepBadge": "Revenir à $U_n$",
          "paragraphText": "$V_n=6\\left(\\dfrac13\\right)^n$ et $U_n=V_n+3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q3",
            "type": "mcq",
            "prompt": "$V_n=U_n-3$ et $V_n=6\\left(\\dfrac13\\right)^n$. Quelle est l'expression de $U_n$ ?",
            "options": [
              "$6\\left(\\dfrac13\\right)^n$",
              "$9\\left(\\dfrac13\\right)^n$",
              "$6\\left(\\dfrac13\\right)^n+3$",
              "$6\\left(\\dfrac13\\right)^n-3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On ajoute $3$ à $V_n$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Le bon premier terme",
          "stepTheme": "Le bon premier terme",
          "stepBadge": "Le bon premier terme",
          "paragraphText": "$T_n=V_1+\\dots+V_n$ commence à $V_1=2$, pas à $V_0=6$. Prendre $V_0$ donnerait la somme $V_0+\\dots+V_{n-1}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q4",
            "type": "mcq",
            "prompt": "$V_n=6\\left(\\dfrac13\\right)^n$, donc $V_1=2$. Que vaut $T_n=V_1+V_2+\\dots+V_n$ ?",
            "options": [
              "$9\\left(1-\\left(\\dfrac13\\right)^n\\right)$",
              "$3\\left(1-\\left(\\dfrac13\\right)^n\\right)$",
              "$6\\left(1-\\left(\\dfrac13\\right)^n\\right)$",
              "$2\\left(1-\\left(\\dfrac13\\right)^n\\right)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$2\\times\\dfrac{1-(1/3)^n}{2/3}=3\\left(1-\\left(\\dfrac13\\right)^n\\right)$. Vérification pour $n=1$ : $T_1=V_1=2$ et $3\\times\\dfrac23=2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La somme des $U_n$",
          "stepTheme": "La somme des $U_n$",
          "stepBadge": "La somme des $U_n$",
          "paragraphText": "$U_k=V_k+3$, donc $U_1+\\dots+U_n=(V_1+\\dots+V_n)+3n=T_n+3n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q5",
            "type": "mcq",
            "prompt": "$U_n=V_n+3$, $S_n=U_1+\\dots+U_n=T_n+3n$ et $T_1=V_1=2$. Que vaut $S_1=U_1$ avec cette formule ?",
            "options": [
              "$3$",
              "$2$",
              "$9$",
              "$5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$T_1+3=2+3=5=U_1$ : la formule est cohérente."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une auxiliaire arithmétique",
          "stepTheme": "Une auxiliaire arithmétique",
          "stepBadge": "Une auxiliaire arithmétique",
          "paragraphText": "$U_0=4$, $U_{n+1}=\\dfrac{4U_n-9}{U_n-2}$, $V_n=\\dfrac{1}{U_n-3}$ : on montre $V_{n+1}=V_n+1$, avec $V_0=1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q6",
            "type": "mcq",
            "prompt": "$U_0=4$, $U_{n+1}=\\dfrac{4U_n-9}{U_n-2}$ et $V_n=\\dfrac{1}{U_n-3}$. On montre que $V_{n+1}=V_n+1$, avec $V_0=1$. Quelle est l'expression de $V_n$ ?",
            "options": [
              "$V_n=1+n$",
              "$V_n=2^n$",
              "$V_n=n$",
              "$V_n=1-n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Arithmétique de raison $1$ et $V_0=1$ : $V_n=1+n$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Revenir à $U_n$",
          "stepTheme": "Revenir à $U_n$",
          "stepBadge": "Revenir à $U_n$",
          "paragraphText": "$V_n=\\dfrac{1}{U_n-3}$ donne $U_n=3+\\dfrac{1}{V_n}=3+\\dfrac{1}{n+1}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q7",
            "type": "mcq",
            "prompt": "$V_n=\\dfrac{1}{U_n-3}$ et $V_n=1+n$. Quelle est l'expression de $U_n$ ?",
            "options": [
              "$\\dfrac{3n+3}{n+1}$",
              "$\\dfrac{4}{n+1}$",
              "$\\dfrac{3n+4}{n+1}$",
              "$3n+4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$3+\\dfrac{1}{n+1}=\\dfrac{3(n+1)+1}{n+1}$. Vérification : $U_0=4$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q1",
          "type": "mcq",
          "prompt": "Avec $V_n=U_n-3$, que vaut $V_1$ ?",
          "options": [
            "$5$",
            "$6$",
            "$\\dfrac23$",
            "$2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$V_1=U_1-3=5-3=2$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q2",
          "type": "mcq",
          "prompt": "$U_0=9$, $U_{n+1}=\\dfrac13U_n+2$ et $V_n=U_n-3$. On montre que $V_{n+1}=\\dfrac13(U_n-3)$. Quelle est la raison de $(V_n)$ ?",
          "options": [
            "$\\dfrac13$",
            "$3$",
            "$2$",
            "$-3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$V_{n+1}=\\dfrac13V_n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q3",
          "type": "mcq",
          "prompt": "$V_n=U_n-3$ et $V_n=6\\left(\\dfrac13\\right)^n$. Quelle est l'expression de $U_n$ ?",
          "options": [
            "$6\\left(\\dfrac13\\right)^n$",
            "$9\\left(\\dfrac13\\right)^n$",
            "$6\\left(\\dfrac13\\right)^n+3$",
            "$6\\left(\\dfrac13\\right)^n-3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On ajoute $3$ à $V_n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q4",
          "type": "mcq",
          "prompt": "$V_n=6\\left(\\dfrac13\\right)^n$, donc $V_1=2$. Que vaut $T_n=V_1+V_2+\\dots+V_n$ ?",
          "options": [
            "$9\\left(1-\\left(\\dfrac13\\right)^n\\right)$",
            "$3\\left(1-\\left(\\dfrac13\\right)^n\\right)$",
            "$6\\left(1-\\left(\\dfrac13\\right)^n\\right)$",
            "$2\\left(1-\\left(\\dfrac13\\right)^n\\right)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$2\\times\\dfrac{1-(1/3)^n}{2/3}=3\\left(1-\\left(\\dfrac13\\right)^n\\right)$. Vérification pour $n=1$ : $T_1=V_1=2$ et $3\\times\\dfrac23=2$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q5",
          "type": "mcq",
          "prompt": "$U_n=V_n+3$, $S_n=U_1+\\dots+U_n=T_n+3n$ et $T_1=V_1=2$. Que vaut $S_1=U_1$ avec cette formule ?",
          "options": [
            "$3$",
            "$2$",
            "$9$",
            "$5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$T_1+3=2+3=5=U_1$ : la formule est cohérente."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q6",
          "type": "mcq",
          "prompt": "$U_0=4$, $U_{n+1}=\\dfrac{4U_n-9}{U_n-2}$ et $V_n=\\dfrac{1}{U_n-3}$. On montre que $V_{n+1}=V_n+1$, avec $V_0=1$. Quelle est l'expression de $V_n$ ?",
          "options": [
            "$V_n=1+n$",
            "$V_n=2^n$",
            "$V_n=n$",
            "$V_n=1-n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Arithmétique de raison $1$ et $V_0=1$ : $V_n=1+n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p07_q7",
          "type": "mcq",
          "prompt": "$V_n=\\dfrac{1}{U_n-3}$ et $V_n=1+n$. Quelle est l'expression de $U_n$ ?",
          "options": [
            "$\\dfrac{3n+3}{n+1}$",
            "$\\dfrac{4}{n+1}$",
            "$\\dfrac{3n+4}{n+1}$",
            "$3n+4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$3+\\dfrac{1}{n+1}=\\dfrac{3(n+1)+1}{n+1}$. Vérification : $U_0=4$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08",
      "order": 8,
      "title": "Situation : la production de l'usine",
      "summary": "Une baisse de 3 % par an se modélise par une suite géométrique.",
      "conceptExplanation": "Situation : depuis 2010, la production d'un article dans une usine ivoirienne baisse chaque année d'environ 3 % par rapport à l'année précédente. En 2010, elle était de 65 000 articles. La production n'est plus rentable sous 56 000 articles par an. À partir de quelle année ne sera-t-elle plus rentable ?\n\n1. Modéliser : $U_n$ est la production de l'année $2010+n$. Baisser de 3 %, c'est garder 97 % :\n$$U_{n+1}=U_n-\\dfrac{3}{100}U_n=\\dfrac{97}{100}U_n.$$\n$(U_n)$ est géométrique de raison $q=0{,}97$ et de premier terme $U_0=65\\,000$.\n\n2. Terme général : $U_n=65\\,000\\times0{,}97^n$.\n\n3. Calculer les termes :\n- 2011 : $U_1=63\\,050$ ;\n- 2012 : $U_2\\approx61\\,159$ ;\n- 2013 : $U_3\\approx59\\,324$ ;\n- 2014 : $U_4\\approx57\\,544$ ;\n- 2015 : $U_5\\approx55\\,818$.\n\n4. Conclure : $55\\,818<56\\,000$. La production n'est plus rentable à partir de 2015.\n\nÀ retenir : une hausse de $t$ % correspond à $q=1+\\dfrac{t}{100}$, une baisse de $t$ % à $q=1-\\dfrac{t}{100}$.",
      "keyRule": "Baisse de $t$ % : $q=1-\\dfrac{t}{100}$ ; hausse de $t$ % : $q=1+\\dfrac{t}{100}$. Puis $U_n=U_0\\times q^n$.",
      "formulas": [
        {
          "name": "Coefficient multiplicateur",
          "formula": "q=1\\pm\\dfrac{t}{100}"
        }
      ],
      "workedExample": {
        "title": "L'année du seuil",
        "statement": "$U_n=65\\,000\\times0{,}97^n$. Trouve le premier $n$ tel que $U_n<56\\,000$.",
        "methodSteps": [
          "$U_4=65\\,000\\times0{,}97^4\\approx57\\,544$ : encore rentable.",
          "$U_5=65\\,000\\times0{,}97^5\\approx55\\,818$ : sous le seuil."
        ],
        "conclusion": "$n=5$, soit l'année $2010+5=2015$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Traduire une baisse",
          "stepTheme": "Traduire une baisse",
          "stepBadge": "Traduire une baisse",
          "paragraphText": "Baisser de 3 %, c'est multiplier par $1-0{,}03=0{,}97$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q1",
            "type": "mcq",
            "prompt": "Par quel nombre multiplie-t-on pour une baisse de 3 % ?",
            "options": [
              "$0{,}03$",
              "$1{,}03$",
              "$0{,}97$",
              "$-3$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On garde 97 % de la valeur."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Une suite géométrique",
          "stepTheme": "Une suite géométrique",
          "stepBadge": "Une suite géométrique",
          "paragraphText": "$U_{n+1}=0{,}97\\,U_n$ : la suite est géométrique de raison $0{,}97$, avec $U_0=65\\,000$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q2",
            "type": "mcq",
            "prompt": "En 2010, une usine produit $65\\,000$ articles ; la production baisse de 3 % par an. On note $U_n$ la production de l'année $2010+n$. Quel est le terme général ?",
            "options": [
              "$U_n=65\\,000\\times0{,}97^n$",
              "$U_n=65\\,000-0{,}03n$",
              "$U_n=65\\,000\\times0{,}03^n$",
              "$U_n=0{,}97\\times65\\,000^n$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$U_n=U_0\\times q^n$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La production de 2011",
          "stepTheme": "La production de 2011",
          "stepBadge": "La production de 2011",
          "paragraphText": "$U_1=65\\,000\\times0{,}97$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q3",
            "type": "mcq",
            "prompt": "Une usine produit $65\\,000$ articles en 2010 et sa production baisse de 3 % par an. Combien d'articles produit-elle en 2011 ?",
            "options": [
              "$61\\,950$",
              "$63\\,050$",
              "$64\\,970$",
              "$1\\,950$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$65\\,000\\times0{,}97=63\\,050$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Avancer d'année en année",
          "stepTheme": "Avancer d'année en année",
          "stepBadge": "Avancer d'année en année",
          "paragraphText": "$U_2\\approx61\\,159$ ; $U_3\\approx59\\,324$ ; $U_4\\approx57\\,544$ ; $U_5\\approx55\\,818$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q4",
            "type": "mcq",
            "prompt": "$U_n=65\\,000\\times0{,}97^n$ : $U_2\\approx61\\,159$ ; $U_3\\approx59\\,324$ ; $U_4\\approx57\\,544$ ; $U_5\\approx55\\,818$. Quel est le premier terme inférieur à $56\\,000$ ?",
            "options": [
              "$U_3$",
              "$U_4$",
              "$U_6$",
              "$U_5$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$U_4\\approx57\\,544>56\\,000$ mais $U_5\\approx55\\,818<56\\,000$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Passer du rang à l'année",
          "stepTheme": "Passer du rang à l'année",
          "stepBadge": "Passer du rang à l'année",
          "paragraphText": "$U_0$ correspond à 2010, donc $U_n$ correspond à l'année $2010+n$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q5",
            "type": "mcq",
            "prompt": "$U_n$ est la production de l'année $2010+n$, et le premier terme inférieur au seuil de rentabilité est $U_5$. À partir de quelle année la production n'est-elle plus rentable ?",
            "options": [
              "2015",
              "2014",
              "2016",
              "2005"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$n=5$ : $2010+5=2015$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Une hausse en pourcentage",
          "stepTheme": "Une hausse en pourcentage",
          "stepBadge": "Une hausse en pourcentage",
          "paragraphText": "Une hausse de 5 % par an, comme un intérêt bancaire, se traduit par $q=1{,}05$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q6",
            "type": "mcq",
            "prompt": "On place $100\\,000$ F à 5 % d'intérêts par an. Combien a-t-on après 2 ans ?",
            "options": [
              "$110\\,000$ F",
              "$105\\,000$ F",
              "$110\\,250$ F",
              "$100\\,250$ F"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$100\\,000\\times1{,}05^2=110\\,250$ F."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "Pourcentage constant, pas baisse constante",
          "stepTheme": "Pourcentage constant, pas baisse constante",
          "stepBadge": "Pourcentage constant, pas baisse constante",
          "paragraphText": "Une baisse de 3 % par an n'enlève pas toujours $1\\,950$ articles : 3 % d'un nombre plus petit est plus petit. La suite est géométrique, pas arithmétique.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q7",
            "type": "mcq",
            "prompt": "La production baisse de 3 % par an : $65\\,000$ articles en 2010, puis $63\\,050$ en 2011. De combien baisse-t-elle entre 2011 et 2012 ?",
            "options": [
              "$1\\,950$ articles",
              "Environ $1\\,891$ articles",
              "$3\\,000$ articles",
              "$3$ articles"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$3\\%$ de $63\\,050$, soit environ $1\\,891$ : moins que la baisse de la 1re année."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q1",
          "type": "mcq",
          "prompt": "Par quel nombre multiplie-t-on pour une baisse de 3 % ?",
          "options": [
            "$0{,}03$",
            "$1{,}03$",
            "$0{,}97$",
            "$-3$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On garde 97 % de la valeur."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q2",
          "type": "mcq",
          "prompt": "En 2010, une usine produit $65\\,000$ articles ; la production baisse de 3 % par an. On note $U_n$ la production de l'année $2010+n$. Quel est le terme général ?",
          "options": [
            "$U_n=65\\,000\\times0{,}97^n$",
            "$U_n=65\\,000-0{,}03n$",
            "$U_n=65\\,000\\times0{,}03^n$",
            "$U_n=0{,}97\\times65\\,000^n$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$U_n=U_0\\times q^n$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q3",
          "type": "mcq",
          "prompt": "Une usine produit $65\\,000$ articles en 2010 et sa production baisse de 3 % par an. Combien d'articles produit-elle en 2011 ?",
          "options": [
            "$61\\,950$",
            "$63\\,050$",
            "$64\\,970$",
            "$1\\,950$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$65\\,000\\times0{,}97=63\\,050$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q4",
          "type": "mcq",
          "prompt": "$U_n=65\\,000\\times0{,}97^n$ : $U_2\\approx61\\,159$ ; $U_3\\approx59\\,324$ ; $U_4\\approx57\\,544$ ; $U_5\\approx55\\,818$. Quel est le premier terme inférieur à $56\\,000$ ?",
          "options": [
            "$U_3$",
            "$U_4$",
            "$U_6$",
            "$U_5$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$U_4\\approx57\\,544>56\\,000$ mais $U_5\\approx55\\,818<56\\,000$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q5",
          "type": "mcq",
          "prompt": "$U_n$ est la production de l'année $2010+n$, et le premier terme inférieur au seuil de rentabilité est $U_5$. À partir de quelle année la production n'est-elle plus rentable ?",
          "options": [
            "2015",
            "2014",
            "2016",
            "2005"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$n=5$ : $2010+5=2015$."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q6",
          "type": "mcq",
          "prompt": "On place $100\\,000$ F à 5 % d'intérêts par an. Combien a-t-on après 2 ans ?",
          "options": [
            "$110\\,000$ F",
            "$105\\,000$ F",
            "$110\\,250$ F",
            "$100\\,250$ F"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$100\\,000\\times1{,}05^2=110\\,250$ F."
        },
        {
          "id": "premiere_d_maths_numerique_l12_suites_numeriques_p08_q7",
          "type": "mcq",
          "prompt": "La production baisse de 3 % par an : $65\\,000$ articles en 2010, puis $63\\,050$ en 2011. De combien baisse-t-elle entre 2011 et 2012 ?",
          "options": [
            "$1\\,950$ articles",
            "Environ $1\\,891$ articles",
            "$3\\,000$ articles",
            "$3$ articles"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$3\\%$ de $63\\,050$, soit environ $1\\,891$ : moins que la baisse de la 1re année."
        }
      ]
    }
  ]
};
