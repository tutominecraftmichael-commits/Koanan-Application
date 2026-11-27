import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Étude et représentation graphique d’une fonction » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Étude et représentation graphique d’une fonction » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L11_ETUDE_REPRESENTATION_FONCTION: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l11_etude_representation_fonction",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 11,
  "title": "Leçon 11 : Étude et représentation graphique d’une fonction",
  "summary": "La leçon étudie la parité des fonctions, les axes et centres de symétrie des courbes, les fonctions périodiques et l’asymptote oblique, avant l’étude complète d’une fonction et son application à un coût de production.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Étude et représentation graphique d’une fonction » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01",
      "order": 1,
      "title": "Fonction paire",
      "summary": "Définir une fonction paire, la reconnaître et interpréter graphiquement la parité.",
      "conceptExplanation": "Une fonction $f$ de $\\mathbb{R}$ vers $\\mathbb{R}$, d’ensemble de définition $D_f$, est dite paire lorsque pour tout $x$ élément de $D_f$, on a $-x \\in D_f$ et $f(-x) = f(x)$. Les fonctions constante, $x \\mapsto x^2$, $x \\mapsto |x|$ et $x \\mapsto \\cos x$ sont paires ; la leçon le vérifie pour $f(x) = \\frac{2}{1 + |x|}$ grâce à $|-x| = |x|$.\nInterprétation graphique : $f$ est paire si et seulement si la droite $(OJ)$ est un axe de symétrie de $(C_f)$ dans un repère orthogonal $(O, I, J)$. Lorsque $f$ est paire, il suffit de l’étudier sur $D_f \\cap [0 ; +\\infty[$, puis de compléter la courbe par cette symétrie.",
      "keyRule": "Paire signifie même image pour $x$ et $-x$, et graphiquement un axe de symétrie vertical : la droite $(OJ)$.",
      "formulas": [
        {
          "name": "Fonction paire",
          "formula": "f(-x) = f(x)",
          "note": "Avec $-x \\in D_f$ pour tout $x$ de $D_f$."
        }
      ],
      "workedExample": {
        "title": "Parité de $f(x) = 3x^4 - |x| + 1$",
        "statement": "Étudie la parité de la fonction $f$ définie par $f(x) = 3x^4 - |x| + 1$ (exercice de la leçon).",
        "methodSteps": [
          "$D_f = \\mathbb{R}$, qui est symétrique par rapport à $0$.",
          "On calcule $f(-x) = 3(-x)^4 - |-x| + 1$.",
          "Comme $(-x)^4 = x^4$ et $|-x| = |x|$, on obtient $f(-x) = f(x)$."
        ],
        "conclusion": "La fonction $f$ est paire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une fonction paire",
          "stepTheme": "La définition d’une fonction paire",
          "stepBadge": "La définition d’une fonction paire",
          "paragraphText": "• Définition : $f$ est paire lorsque, pour tout $x$ de $D_f$, on a $-x \\in D_f$ et $f(-x) = f(x)$.\nLes deux conditions se vérifient : l’appartenance de l’opposé et l’égalité des images.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q1",
            "type": "mcq",
            "prompt": "$f$ est paire lorsque, pour tout $x$ de $D_f$ :",
            "options": [
              "$-x \\in D_f$ et $f(-x) = -f(x)$",
              "$x \\in D_f$ seulement",
              "$f(-x) = 0$",
              "$-x \\in D_f$ et $f(-x) = f(x)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La parité demande l’opposé dans l’ensemble et la même image."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les exemples pairs de la leçon",
          "stepTheme": "Les exemples pairs de la leçon",
          "stepBadge": "Les exemples pairs de la leçon",
          "paragraphText": "• Exemples de la leçon : les fonctions constante, $x \\mapsto x^2$, $x \\mapsto |x|$ et $x \\mapsto \\cos x$ sont paires.\nElles donnent la même image pour $x$ et pour $-x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces fonctions est paire d’après les exemples de la leçon ?",
            "options": [
              "$x \\mapsto x^3$",
              "$x \\mapsto \\sin x$",
              "$x \\mapsto x^2$",
              "$x \\mapsto \\frac{1}{x}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fonction carré figure dans la liste des fonctions paires de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La fonction $f(x) = \\frac{2}{1 + |x|}$",
          "stepTheme": "La fonction $f(x) = \\frac{2}{1 + |x|}$",
          "stepBadge": "La fonction $f(x) = \\frac{2}{1 + |x|}$",
          "paragraphText": "• Exemple de la leçon : $D_f = \\mathbb{R}$, donc $-x \\in D_f$ pour tout $x$.\nEnsuite $f(-x) = \\frac{2}{1 + |-x|} = \\frac{2}{1 + |x|} = f(x)$ car $|-x| = |x|$ : $f$ est paire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q3",
            "type": "mcq",
            "prompt": "Dans cet exemple, l’égalité $f(-x) = f(x)$ vient du fait que :",
            "options": [
              "$|-x| = |x|$",
              "$|-x| = -|x|$",
              "$-x = x$",
              "$1 + |-x| = 0$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La valeur absolue d’un nombre et de son opposé sont égales."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’interprétation graphique de la parité",
          "stepTheme": "L’interprétation graphique de la parité",
          "stepBadge": "L’interprétation graphique de la parité",
          "paragraphText": "• Propriété : $f$ est paire si et seulement si la droite $(OJ)$ est un axe de symétrie de $(C_f)$ dans un repère orthogonal.\nC’est ce critère que l’exercice de fixation utilise en lisant la courbe.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q4",
            "type": "mcq",
            "prompt": "Si la courbe de $f$ admet la droite $(OJ)$ comme axe de symétrie, alors $f$ est :",
            "options": [
              "Impaire",
              "Périodique",
              "Paire",
              "Constante"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’axe des ordonnées comme axe de symétrie caractérise les fonctions paires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Étudier seulement sur la partie positive",
          "stepTheme": "Étudier seulement sur la partie positive",
          "stepBadge": "Étudier seulement sur la partie positive",
          "paragraphText": "• Remarque de la leçon : lorsque $f$ est paire, il suffit de l’étudier sur $D_f \\cap [0 ; +\\infty[$.\nLa courbe obtenue est ensuite complétée par la symétrie par rapport à la droite $(OJ)$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q5",
            "type": "mcq",
            "prompt": "Pour une fonction paire, on peut limiter l’étude à :",
            "options": [
              "$D_f \\cap ]-\\infty ; 0]$ seulement, sans compléter",
              "$[0 ; 1]$ dans tous les cas",
              "Un seul point",
              "$D_f \\cap [0 ; +\\infty[$, puis compléter par symétrie par rapport à $(OJ)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La symétrie reconstruit la partie négative à partir de la partie positive."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un ensemble non symétrique exclut la parité",
          "stepTheme": "Un ensemble non symétrique exclut la parité",
          "stepBadge": "Un ensemble non symétrique exclut la parité",
          "paragraphText": "• Remarque de la leçon : un ensemble $E$ est symétrique par rapport à zéro lorsque tout $x$ de $E$ y a aussi son opposé $-x$.\nSans cette condition sur $D_f$, la fonction ne peut être ni paire ni impaire, comme dans un exercice où $D_f$ est $\\mathbb{R}$ privé de $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q6",
            "type": "mcq",
            "prompt": "Un ensemble $E$ est symétrique par rapport à zéro lorsque :",
            "options": [
              "Pour tout $x$ de $E$, $-x$ appartient aussi à $E$",
              "Il contient $0$ seulement",
              "Il est inclus dans $[0 ; +\\infty[$",
              "Il contient $1$ et $-1$ seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition donnée en remarque dans la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q1",
          "type": "mcq",
          "prompt": "$f$ est paire lorsque, pour tout $x$ de $D_f$ :",
          "options": [
            "$-x \\in D_f$ et $f(-x) = -f(x)$",
            "$x \\in D_f$ seulement",
            "$f(-x) = 0$",
            "$-x \\in D_f$ et $f(-x) = f(x)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La parité demande l’opposé dans l’ensemble et la même image."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces fonctions est paire d’après les exemples de la leçon ?",
          "options": [
            "$x \\mapsto x^3$",
            "$x \\mapsto \\sin x$",
            "$x \\mapsto x^2$",
            "$x \\mapsto \\frac{1}{x}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La fonction carré figure dans la liste des fonctions paires de la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q3",
          "type": "mcq",
          "prompt": "Dans cet exemple, l’égalité $f(-x) = f(x)$ vient du fait que :",
          "options": [
            "$|-x| = |x|$",
            "$|-x| = -|x|$",
            "$-x = x$",
            "$1 + |-x| = 0$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La valeur absolue d’un nombre et de son opposé sont égales."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q4",
          "type": "mcq",
          "prompt": "Si la courbe de $f$ admet la droite $(OJ)$ comme axe de symétrie, alors $f$ est :",
          "options": [
            "Impaire",
            "Périodique",
            "Paire",
            "Constante"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’axe des ordonnées comme axe de symétrie caractérise les fonctions paires."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q5",
          "type": "mcq",
          "prompt": "Pour une fonction paire, on peut limiter l’étude à :",
          "options": [
            "$D_f \\cap ]-\\infty ; 0]$ seulement, sans compléter",
            "$[0 ; 1]$ dans tous les cas",
            "Un seul point",
            "$D_f \\cap [0 ; +\\infty[$, puis compléter par symétrie par rapport à $(OJ)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La symétrie reconstruit la partie négative à partir de la partie positive."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p01_q6",
          "type": "mcq",
          "prompt": "Un ensemble $E$ est symétrique par rapport à zéro lorsque :",
          "options": [
            "Pour tout $x$ de $E$, $-x$ appartient aussi à $E$",
            "Il contient $0$ seulement",
            "Il est inclus dans $[0 ; +\\infty[$",
            "Il contient $1$ et $-1$ seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition donnée en remarque dans la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02",
      "order": 2,
      "title": "Fonction impaire",
      "summary": "Définir une fonction impaire, la reconnaître et interpréter graphiquement l’imparité.",
      "conceptExplanation": "Une fonction $f$ de $\\mathbb{R}$ vers $\\mathbb{R}$, d’ensemble de définition $D_f$, est dite impaire lorsque pour tout $x$ élément de $D_f$, on a $-x \\in D_f$ et $f(-x) = -f(x)$. Les fonctions $x \\mapsto x$, $x \\mapsto x^3$, $x \\mapsto \\frac{1}{x}$ et $x \\mapsto \\sin x$ sont impaires ; la leçon le vérifie pour $f(x) = \\frac{x}{1 + x^2}$.\nInterprétation graphique : $f$ est impaire si et seulement si le point $O$ est un centre de symétrie de $(C_f)$. Lorsque $f$ est impaire, il suffit de l’étudier sur $D_f \\cap [0 ; +\\infty[$, puis de compléter par la symétrie de centre $O$. Une fonction peut aussi n’être ni paire ni impaire.",
      "keyRule": "Impaire signifie images opposées pour $x$ et $-x$, et graphiquement un centre de symétrie : le point $O$.",
      "formulas": [
        {
          "name": "Fonction impaire",
          "formula": "f(-x) = -f(x)",
          "note": "Avec $-x \\in D_f$ pour tout $x$ de $D_f$."
        }
      ],
      "workedExample": {
        "title": "Imparité de $f(x) = \\frac{x^3}{x^2 - 1}$",
        "statement": "Étudie la parité de la fonction définie par $f(x) = \\frac{x^3}{x^2 - 1}$ (exercice de la leçon).",
        "methodSteps": [
          "$D_f$ est $\\mathbb{R}$ privé de $-1$ et de $1$, ensemble symétrique par rapport à $0$.",
          "On calcule $f(-x) = \\frac{(-x)^3}{(-x)^2 - 1} = \\frac{-x^3}{x^2 - 1}$.",
          "On reconnaît l’opposé de $f(x)$."
        ],
        "conclusion": "La fonction $f$ est impaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une fonction impaire",
          "stepTheme": "La définition d’une fonction impaire",
          "stepBadge": "La définition d’une fonction impaire",
          "paragraphText": "• Définition : $f$ est impaire lorsque, pour tout $x$ de $D_f$, on a $-x \\in D_f$ et $f(-x) = -f(x)$.\nL’image de l’opposé est l’opposée de l’image.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q1",
            "type": "mcq",
            "prompt": "$f$ est impaire lorsque, pour tout $x$ de $D_f$ :",
            "options": [
              "$f(-x) = f(x)$",
              "$-x \\notin D_f$",
              "$f(x) = 0$",
              "$f(-x) = -f(x)$ avec $-x \\in D_f$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’imparité demande des images opposées, sur un ensemble symétrique."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les exemples impairs de la leçon",
          "stepTheme": "Les exemples impairs de la leçon",
          "stepBadge": "Les exemples impairs de la leçon",
          "paragraphText": "• Exemples de la leçon : les fonctions $x \\mapsto x$, $x \\mapsto x^3$, $x \\mapsto \\frac{1}{x}$ et $x \\mapsto \\sin x$ sont impaires.\nElles changent de signe quand $x$ est remplacé par $-x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q2",
            "type": "mcq",
            "prompt": "Laquelle de ces fonctions est impaire d’après les exemples de la leçon ?",
            "options": [
              "$x \\mapsto x^3$",
              "$x \\mapsto |x|$",
              "$x \\mapsto \\cos x$",
              "$x \\mapsto x^2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La fonction cube figure dans la liste des fonctions impaires de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La fonction $f(x) = \\frac{x}{1 + x^2}$",
          "stepTheme": "La fonction $f(x) = \\frac{x}{1 + x^2}$",
          "stepBadge": "La fonction $f(x) = \\frac{x}{1 + x^2}$",
          "paragraphText": "• Exemple de la leçon : $D_f = \\mathbb{R}$ et $f(-x) = \\frac{-x}{1 + (-x)^2}$.\nComme $(-x)^2 = x^2$, on obtient $f(-x) = -\\frac{x}{1 + x^2} = -f(x)$ : $f$ est impaire.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q3",
            "type": "mcq",
            "prompt": "Dans cet exemple, $f(-x)$ vaut :",
            "options": [
              "$f(x)$",
              "$\\frac{-x}{1 - x^2}$",
              "$0$",
              "$-f(x)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le numérateur change de signe et le dénominateur reste inchangé : l’image est opposée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’interprétation graphique de l’imparité",
          "stepTheme": "L’interprétation graphique de l’imparité",
          "stepBadge": "L’interprétation graphique de l’imparité",
          "paragraphText": "• Propriété : $f$ est impaire si et seulement si le point $O$ est un centre de symétrie de $(C_f)$.\nC’est le critère lu sur la courbe dans l’exercice de fixation.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q4",
            "type": "mcq",
            "prompt": "Si la courbe de $f$ admet le point $O$ comme centre de symétrie, alors $f$ est :",
            "options": [
              "Paire",
              "Impaire",
              "Périodique",
              "Affine"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’origine comme centre de symétrie caractérise les fonctions impaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Compléter par la symétrie centrale",
          "stepTheme": "Compléter par la symétrie centrale",
          "stepBadge": "Compléter par la symétrie centrale",
          "paragraphText": "• Remarque de la leçon : lorsque $f$ est impaire, il suffit de l’étudier sur $D_f \\cap [0 ; +\\infty[$.\nLa courbe est ensuite complétée par la symétrie par rapport au point $O$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q5",
            "type": "mcq",
            "prompt": "Pour une fonction impaire, la partie négative de la courbe s’obtient par :",
            "options": [
              "La symétrie par rapport au point $O$",
              "La symétrie par rapport à la droite $(OJ)$",
              "Une translation",
              "Aucun procédé"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le centre de symétrie d’une fonction impaire est l’origine $O$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ni paire ni impaire",
          "stepTheme": "Ni paire ni impaire",
          "stepBadge": "Ni paire ni impaire",
          "paragraphText": "• Exercice de la leçon : pour $f(x) = x^2 + 4x - 8$, on a $f(-x) = x^2 - 4x - 8$.\nCette image n’est ni $f(x)$ ni $-f(x)$ : la fonction n’est ni paire ni impaire, bien que $D_f = \\mathbb{R}$ soit symétrique.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^2 + 4x - 8$, la fonction est :",
            "options": [
              "Paire",
              "Impaire",
              "Paire et impaire",
              "Ni paire ni impaire"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’exercice conclut que $f(-x)$ diffère à la fois de $f(x)$ et de $-f(x)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q1",
          "type": "mcq",
          "prompt": "$f$ est impaire lorsque, pour tout $x$ de $D_f$ :",
          "options": [
            "$f(-x) = f(x)$",
            "$-x \\notin D_f$",
            "$f(x) = 0$",
            "$f(-x) = -f(x)$ avec $-x \\in D_f$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’imparité demande des images opposées, sur un ensemble symétrique."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q2",
          "type": "mcq",
          "prompt": "Laquelle de ces fonctions est impaire d’après les exemples de la leçon ?",
          "options": [
            "$x \\mapsto x^3$",
            "$x \\mapsto |x|$",
            "$x \\mapsto \\cos x$",
            "$x \\mapsto x^2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La fonction cube figure dans la liste des fonctions impaires de la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q3",
          "type": "mcq",
          "prompt": "Dans cet exemple, $f(-x)$ vaut :",
          "options": [
            "$f(x)$",
            "$\\frac{-x}{1 - x^2}$",
            "$0$",
            "$-f(x)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le numérateur change de signe et le dénominateur reste inchangé : l’image est opposée."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q4",
          "type": "mcq",
          "prompt": "Si la courbe de $f$ admet le point $O$ comme centre de symétrie, alors $f$ est :",
          "options": [
            "Paire",
            "Impaire",
            "Périodique",
            "Affine"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’origine comme centre de symétrie caractérise les fonctions impaires."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q5",
          "type": "mcq",
          "prompt": "Pour une fonction impaire, la partie négative de la courbe s’obtient par :",
          "options": [
            "La symétrie par rapport au point $O$",
            "La symétrie par rapport à la droite $(OJ)$",
            "Une translation",
            "Aucun procédé"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le centre de symétrie d’une fonction impaire est l’origine $O$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p02_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^2 + 4x - 8$, la fonction est :",
          "options": [
            "Paire",
            "Impaire",
            "Paire et impaire",
            "Ni paire ni impaire"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’exercice conclut que $f(-x)$ diffère à la fois de $f(x)$ et de $-f(x)$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03",
      "order": 3,
      "title": "Axe et centre de symétrie d’une courbe",
      "summary": "Démontrer qu’une droite verticale est un axe de symétrie ou qu’un point est un centre de symétrie d’une courbe.",
      "conceptExplanation": "La droite $(D)$ d’équation $x = a$ est un axe de symétrie de la courbe de $f$ si et seulement si pour tout $x$ de $D_f$ on a $2a - x \\in D_f$ et $f(2a - x) = f(x)$. La leçon le démontre pour $f(x) = -2(x - 3)^2 + 5$ et la droite $x = 3$, et aussi sous la forme $f(a + h) = f(a - h)$.\nLe point $A(a ; b)$ est un centre de symétrie de la courbe de $f$ si et seulement si pour tout $x$ de $D_f$ on a $2a - x \\in D_f$ et $f(2a - x) + f(x) = 2b$. La leçon le démontre pour $g(x) = (x - 2)^3 + 3$ et le point $A(2 ; 3)$, où la somme vaut $6$.",
      "keyRule": "Axe : les images des symétriques sont égales ; centre : leur somme vaut le double de l’ordonnée du centre.",
      "formulas": [
        {
          "name": "Axe de symétrie",
          "formula": "f(2a - x) = f(x)"
        },
        {
          "name": "Centre de symétrie",
          "formula": "f(2a - x) + f(x) = 2b"
        }
      ],
      "workedExample": {
        "title": "Axe de symétrie de $f(x) = x^2 - 4x + 7$",
        "statement": "Démontre que la droite d’équation $x = 2$ est un axe de symétrie de la courbe de $f(x) = x^2 - 4x + 7$ (exercice de la leçon).",
        "methodSteps": [
          "On pose $g(x) = f(x + 2)$ ; le calcul donne $g(x) = x^2 + 3$.",
          "$D_g = \\mathbb{R}$ est symétrique par rapport à $0$.",
          "$g(-x) = x^2 + 3 = g(x)$ : la fonction $g$ est paire."
        ],
        "conclusion": "La droite d’équation $x = 2$ est un axe de symétrie de $(C_f)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le critère d’un axe de symétrie vertical",
          "stepTheme": "Le critère d’un axe de symétrie vertical",
          "stepBadge": "Le critère d’un axe de symétrie vertical",
          "paragraphText": "• Propriété : la droite d’équation $x = a$ est un axe de symétrie de la courbe de $f$ si et seulement si, pour tout $x$ de $D_f$, $2a - x \\in D_f$ et $f(2a - x) = f(x)$.\nLe nombre $2a - x$ est le symétrique de $x$ par rapport à $a$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q1",
            "type": "mcq",
            "prompt": "La droite $x = a$ est un axe de symétrie de $(C_f)$ si et seulement si :",
            "options": [
              "$f(2a - x) = -f(x)$",
              "$f(2a - x) + f(x) = 0$",
              "$f(a) = 0$",
              "$f(2a - x) = f(x)$ avec $2a - x \\in D_f$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’axe conserve les images des abscisses symétriques $x$ et $2a - x$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’axe $x = 3$ pour $f(x) = -2(x - 3)^2 + 5$",
          "stepTheme": "L’axe $x = 3$ pour $f(x) = -2(x - 3)^2 + 5$",
          "stepBadge": "L’axe $x = 3$ pour $f(x) = -2(x - 3)^2 + 5$",
          "paragraphText": "• Exercice de fixation : avec $a = 3$, le symétrique de $x$ est $6 - x$, qui appartient à $\\mathbb{R}$.\nOn vérifie $f(6 - x) = -2(3 - x)^2 + 5 = -2(x - 3)^2 + 5 = f(x)$ : la droite est un axe de symétrie.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q2",
            "type": "mcq",
            "prompt": "Pour $a = 3$, le symétrique de $x$ dans le critère est :",
            "options": [
              "$6 - x$",
              "$3 - x$",
              "$x - 3$",
              "$2x - 3$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le symétrique est $2a - x$, soit $6 - x$ quand $a$ vaut $3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le critère d’un centre de symétrie",
          "stepTheme": "Le critère d’un centre de symétrie",
          "stepBadge": "Le critère d’un centre de symétrie",
          "paragraphText": "• Propriété : le point $A(a ; b)$ est un centre de symétrie de la courbe de $f$ si et seulement si, pour tout $x$ de $D_f$, $2a - x \\in D_f$ et $f(2a - x) + f(x) = 2b$.\nLa moyenne des deux images vaut alors $b$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q3",
            "type": "mcq",
            "prompt": "Le point $A(a ; b)$ est un centre de symétrie de $(C_f)$ si et seulement si :",
            "options": [
              "$f(2a - x) = f(x)$",
              "$f(2a - x) = 2b$",
              "$f(a) = b$ seulement",
              "$f(2a - x) + f(x) = 2b$ avec $2a - x \\in D_f$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La somme des images des abscisses symétriques vaut le double de l’ordonnée du centre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le centre $A(2 ; 3)$ pour $g(x) = (x - 2)^3 + 3$",
          "stepTheme": "Le centre $A(2 ; 3)$ pour $g(x) = (x - 2)^3 + 3$",
          "stepBadge": "Le centre $A(2 ; 3)$ pour $g(x) = (x - 2)^3 + 3$",
          "paragraphText": "• Exercice de fixation : avec $a = 2$, le symétrique de $x$ est $4 - x$.\nOn obtient $g(4 - x) + g(x) = 6$, car $(2 - x)^3 = -(x - 2)^3$ : la somme vaut $2b$ avec $b = 3$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q4",
            "type": "mcq",
            "prompt": "Pour cet exercice, la somme $g(4 - x) + g(x)$ vaut :",
            "options": [
              "$6$",
              "$0$",
              "$3$",
              "$2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Elle vaut $2b = 6$ puisque le centre est $A(2 ; 3)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "La forme en $a + h$ et $a - h$",
          "stepTheme": "La forme en $a + h$ et $a - h$",
          "stepBadge": "La forme en $a + h$ et $a - h$",
          "paragraphText": "• Remarques de la leçon : pour un axe, on peut aussi vérifier $f(a + h) = f(a - h)$.\nPour un centre, la moyenne de $f(a + h)$ et de $f(a - h)$ vaut $b$, pour tout $h$ tel que $a + h \\in D_f$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q5",
            "type": "mcq",
            "prompt": "Pour un axe d’équation $x = a$, la forme équivalente du critère est :",
            "options": [
              "$f(a + h) = f(a - h)$",
              "$f(a + h) = -f(a - h)$",
              "$f(a + h) = 0$",
              "$f(h) = f(a)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Deux abscisses équidistantes de $a$ ont la même image quand la droite est un axe."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre axe et centre",
          "stepTheme": "Ne pas confondre axe et centre",
          "stepBadge": "Ne pas confondre axe et centre",
          "paragraphText": "• Piège : un axe conserve l’image, $f(2a - x) = f(x)$, tandis qu’un centre fait intervenir une somme, $f(2a - x) + f(x) = 2b$.\nLe cas de la parité correspond à $a = 0$ pour l’axe, et le cas de l’imparité au centre $O$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q6",
            "type": "mcq",
            "prompt": "Le critère qui contient une somme d’images égale à $2b$ correspond à :",
            "options": [
              "Un axe de symétrie",
              "Un centre de symétrie",
              "Une asymptote",
              "Une période"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La somme égale à $2b$ est la signature du centre de symétrie $A(a ; b)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q1",
          "type": "mcq",
          "prompt": "La droite $x = a$ est un axe de symétrie de $(C_f)$ si et seulement si :",
          "options": [
            "$f(2a - x) = -f(x)$",
            "$f(2a - x) + f(x) = 0$",
            "$f(a) = 0$",
            "$f(2a - x) = f(x)$ avec $2a - x \\in D_f$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’axe conserve les images des abscisses symétriques $x$ et $2a - x$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q2",
          "type": "mcq",
          "prompt": "Pour $a = 3$, le symétrique de $x$ dans le critère est :",
          "options": [
            "$6 - x$",
            "$3 - x$",
            "$x - 3$",
            "$2x - 3$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le symétrique est $2a - x$, soit $6 - x$ quand $a$ vaut $3$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q3",
          "type": "mcq",
          "prompt": "Le point $A(a ; b)$ est un centre de symétrie de $(C_f)$ si et seulement si :",
          "options": [
            "$f(2a - x) = f(x)$",
            "$f(2a - x) = 2b$",
            "$f(a) = b$ seulement",
            "$f(2a - x) + f(x) = 2b$ avec $2a - x \\in D_f$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La somme des images des abscisses symétriques vaut le double de l’ordonnée du centre."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q4",
          "type": "mcq",
          "prompt": "Pour cet exercice, la somme $g(4 - x) + g(x)$ vaut :",
          "options": [
            "$6$",
            "$0$",
            "$3$",
            "$2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Elle vaut $2b = 6$ puisque le centre est $A(2 ; 3)$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q5",
          "type": "mcq",
          "prompt": "Pour un axe d’équation $x = a$, la forme équivalente du critère est :",
          "options": [
            "$f(a + h) = f(a - h)$",
            "$f(a + h) = -f(a - h)$",
            "$f(a + h) = 0$",
            "$f(h) = f(a)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Deux abscisses équidistantes de $a$ ont la même image quand la droite est un axe."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p03_q6",
          "type": "mcq",
          "prompt": "Le critère qui contient une somme d’images égale à $2b$ correspond à :",
          "options": [
            "Un axe de symétrie",
            "Un centre de symétrie",
            "Une asymptote",
            "Une période"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La somme égale à $2b$ est la signature du centre de symétrie $A(a ; b)$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04",
      "order": 4,
      "title": "Fonction périodique",
      "summary": "Définir et démontrer une période, et restreindre l’étude d’une fonction périodique à un intervalle de longueur la période.",
      "conceptExplanation": "Soit $T$ un nombre réel strictement positif. Une fonction $f$ est dite périodique de période $T$ lorsque, pour tout $x \\in D_f$, on a $x + T \\in D_f$, $x - T \\in D_f$ et $f(x + T) = f(x)$. Les fonctions $\\cos$ et $\\sin$ sont périodiques de période $2\\pi$, et $\\tan$ de période $\\pi$ ; la leçon montre que $x \\mapsto \\sin(2x)$ est $\\pi$-périodique.\nSi $T$ est une période, alors $f(x + kT) = f(x)$ pour tout entier relatif non nul $k$. Il suffit d’étudier une fonction périodique sur $D_f \\cap [a ; a + T[$, puis de compléter la courbe par des translations.",
      "keyRule": "Une période est une translation horizontale qui laisse la fonction inchangée : on étudie un morceau de longueur $T$ et on répète.",
      "formulas": [
        {
          "name": "Périodicité",
          "formula": "f(x + T) = f(x)",
          "note": "Avec $T > 0$ et $x \\pm T \\in D_f$."
        }
      ],
      "workedExample": {
        "title": "Période de $f(x) = \\cos\\left(3x - \\frac{\\pi}{5}\\right)$",
        "statement": "Démontre que la fonction $f$ définie sur $\\mathbb{R}$ par $f(x) = \\cos\\left(3x - \\frac{\\pi}{5}\\right)$ est périodique de période $\\frac{2\\pi}{3}$ (exercice de la leçon).",
        "methodSteps": [
          "$D_f = \\mathbb{R}$, donc $x + \\frac{2\\pi}{3}$ et $x - \\frac{2\\pi}{3}$ appartiennent à $D_f$.",
          "On calcule l’argument : $3\\left(x + \\frac{2\\pi}{3}\\right) - \\frac{\\pi}{5} = 3x - \\frac{\\pi}{5} + 2\\pi$.",
          "Le cosinus étant $2\\pi$-périodique, l’image est inchangée."
        ],
        "conclusion": "$f\\left(x + \\frac{2\\pi}{3}\\right) = f(x)$ : $f$ est périodique de période $\\frac{2\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La fonction périodique",
          "stepTheme": "La fonction périodique",
          "stepBadge": "La fonction périodique",
          "paragraphText": "• Définition : $f$ est périodique de période $T$, avec $T$ strictement positif, lorsque pour tout $x$ de $D_f$, $x + T$ et $x - T$ appartiennent à $D_f$ et $f(x + T) = f(x)$.\nOn dit aussi que $f$ est $T$-périodique.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q1",
            "type": "mcq",
            "prompt": "Une fonction est périodique de période $T$ lorsque :",
            "options": [
              "$f(x + T) = -f(x)$",
              "$f(T) = 0$",
              "$f(x + T) = f(x)$, avec $x + T$ et $x - T$ dans $D_f$",
              "$f(x) = T$ pour tout $x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La période laisse la fonction invariante par translation de $T$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les périodes de référence",
          "stepTheme": "Les périodes de référence",
          "stepBadge": "Les périodes de référence",
          "paragraphText": "• Exemples de la leçon : $\\cos$ et $\\sin$ sont périodiques de période $2\\pi$.\nLa fonction $\\tan$ est périodique de période $\\pi$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q2",
            "type": "mcq",
            "prompt": "La période de la fonction tangente donnée par la leçon est :",
            "options": [
              "$2\\pi$",
              "$\\pi$",
              "$\\frac{\\pi}{2}$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne $\\pi$ pour la tangente, contre $2\\pi$ pour le sinus et le cosinus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La fonction $f(x) = \\sin(2x)$ est $\\pi$-périodique",
          "stepTheme": "La fonction $f(x) = \\sin(2x)$ est $\\pi$-périodique",
          "stepBadge": "La fonction $f(x) = \\sin(2x)$ est $\\pi$-périodique",
          "paragraphText": "• Exemple de la leçon : $D_f = \\mathbb{R}$, donc $x + \\pi$ et $x - \\pi$ restent dans $D_f$.\nEnsuite $\\sin(2(x + \\pi)) = \\sin(2x + 2\\pi) = \\sin(2x)$ car le sinus est $2\\pi$-périodique.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q3",
            "type": "mcq",
            "prompt": "La période de $x \\mapsto \\sin(2x)$ établie dans la leçon est :",
            "options": [
              "$2\\pi$",
              "$\\frac{\\pi}{2}$",
              "$4\\pi$",
              "$\\pi$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Ajouter $\\pi$ à $x$ ajoute $2\\pi$ à l’argument du sinus, qui est invariant."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les multiples d’une période",
          "stepTheme": "Les multiples d’une période",
          "stepBadge": "Les multiples d’une période",
          "paragraphText": "• Remarque de la leçon : si $T$ est une période de $f$, alors $f(x + kT) = f(x)$ pour tout entier relatif $k$ non nul.\nOn peut donc translater par n’importe quel multiple entier de la période.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q4",
            "type": "mcq",
            "prompt": "Si $T$ est une période de $f$, alors pour $k$ entier non nul, $f(x + kT)$ vaut :",
            "options": [
              "$-f(x)$",
              "$f(x)$",
              "$k f(x)$",
              "$0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les multiples entiers d’une période sont aussi des translations qui conservent $f$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Restreindre l’étude à une période",
          "stepTheme": "Restreindre l’étude à une période",
          "stepBadge": "Restreindre l’étude à une période",
          "paragraphText": "• Remarque de la leçon : si $f$ est périodique de période $T$, il suffit de l’étudier sur $D_f \\cap [a ; a + T[$.\nLa courbe est ensuite complétée par les translations de vecteurs associés à $T$ et à $-T$ le long de l’axe des abscisses.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q5",
            "type": "mcq",
            "prompt": "Pour une fonction de période $T$, l’étude peut se limiter à un intervalle de longueur :",
            "options": [
              "$1$",
              "$2T$",
              "$T$",
              "$\\frac{T}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un intervalle de la forme $[a ; a + T[$ contient toute l’information, le reste se répète."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La période doit être strictement positive",
          "stepTheme": "La période doit être strictement positive",
          "stepBadge": "La période doit être strictement positive",
          "paragraphText": "• Piège : par définition, $T$ est un nombre réel strictement positif.\nIl faut aussi vérifier les deux appartenances $x + T \\in D_f$ et $x - T \\in D_f$, pas seulement l’égalité des images.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q6",
            "type": "mcq",
            "prompt": "Dans la définition, la période $T$ doit être :",
            "options": [
              "Un entier",
              "Égale à $0$",
              "Strictement positive",
              "Négative"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition exige un réel strictement positif."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q1",
          "type": "mcq",
          "prompt": "Une fonction est périodique de période $T$ lorsque :",
          "options": [
            "$f(x + T) = -f(x)$",
            "$f(T) = 0$",
            "$f(x + T) = f(x)$, avec $x + T$ et $x - T$ dans $D_f$",
            "$f(x) = T$ pour tout $x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La période laisse la fonction invariante par translation de $T$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q2",
          "type": "mcq",
          "prompt": "La période de la fonction tangente donnée par la leçon est :",
          "options": [
            "$2\\pi$",
            "$\\pi$",
            "$\\frac{\\pi}{2}$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne $\\pi$ pour la tangente, contre $2\\pi$ pour le sinus et le cosinus."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q3",
          "type": "mcq",
          "prompt": "La période de $x \\mapsto \\sin(2x)$ établie dans la leçon est :",
          "options": [
            "$2\\pi$",
            "$\\frac{\\pi}{2}$",
            "$4\\pi$",
            "$\\pi$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Ajouter $\\pi$ à $x$ ajoute $2\\pi$ à l’argument du sinus, qui est invariant."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q4",
          "type": "mcq",
          "prompt": "Si $T$ est une période de $f$, alors pour $k$ entier non nul, $f(x + kT)$ vaut :",
          "options": [
            "$-f(x)$",
            "$f(x)$",
            "$k f(x)$",
            "$0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les multiples entiers d’une période sont aussi des translations qui conservent $f$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q5",
          "type": "mcq",
          "prompt": "Pour une fonction de période $T$, l’étude peut se limiter à un intervalle de longueur :",
          "options": [
            "$1$",
            "$2T$",
            "$T$",
            "$\\frac{T}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un intervalle de la forme $[a ; a + T[$ contient toute l’information, le reste se répète."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p04_q6",
          "type": "mcq",
          "prompt": "Dans la définition, la période $T$ doit être :",
          "options": [
            "Un entier",
            "Égale à $0$",
            "Strictement positive",
            "Négative"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition exige un réel strictement positif."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05",
      "order": 5,
      "title": "Asymptote oblique",
      "summary": "Définir une asymptote oblique, la démontrer par la limite de l’écart et étudier la position de la courbe.",
      "conceptExplanation": "Soit $a$ et $b$ des nombres réels avec $a \\neq 0$. Lorsque la limite en $+\\infty$ de $f(x) - (ax + b)$ est $0$, on dit que la droite d’équation $y = ax + b$ est une asymptote oblique à $(C_f)$ en $+\\infty$, et de même en $-\\infty$.\nExemple de la leçon : pour $f(x) = \\frac{2x^2 + 3x - 1}{x - 1}$, la division donne $f(x) = 2x + 5 + \\frac{4}{x - 1}$ ; l’écart $\\frac{4}{x - 1}$ tend vers $0$ aux deux infinis, donc la droite $y = 2x + 5$ est une asymptote en $+\\infty$ et en $-\\infty$. Le signe de l’écart donne en outre la position de la courbe par rapport à l’asymptote.",
      "keyRule": "Une asymptote oblique se prouve par un écart qui tend vers zéro, et le signe de cet écart donne la position de la courbe.",
      "formulas": [
        {
          "name": "Asymptote oblique",
          "formula": "\\lim_{x \\to +\\infty} \\left[f(x) - (ax + b)\\right] = 0",
          "note": "Avec $a \\neq 0$ ; même critère en $-\\infty$."
        }
      ],
      "workedExample": {
        "title": "Asymptote de $f(x) = \\frac{x^2 - 3x + 3}{x - 2}$",
        "statement": "Détermine les réels $a$, $b$ et $c$ tels que $f(x) = ax + b + \\frac{c}{x - 2}$, puis justifie l’asymptote oblique de la courbe (exercice de la leçon).",
        "methodSteps": [
          "La division euclidienne de $x^2 - 3x + 3$ par $x - 2$ donne $f(x) = x - 1 + \\frac{1}{x - 2}$.",
          "Donc $a = 1$, $b = -1$ et $c = 1$.",
          "L’écart $\\frac{1}{x - 2}$ tend vers $0$ en $+\\infty$ et en $-\\infty$."
        ],
        "conclusion": "La droite d’équation $y = x - 1$ est une asymptote à la courbe en $+\\infty$ et en $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’asymptote oblique",
          "stepTheme": "L’asymptote oblique",
          "stepBadge": "L’asymptote oblique",
          "paragraphText": "• Définition : si la limite en $+\\infty$ de $f(x) - (ax + b)$ est $0$, la droite d’équation $y = ax + b$ est une asymptote oblique à $(C_f)$ en $+\\infty$.\nLa même définition vaut en $-\\infty$, avec $a$ non nul.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q1",
            "type": "mcq",
            "prompt": "La droite $y = ax + b$ est une asymptote oblique en $+\\infty$ lorsque la limite de $f(x) - (ax + b)$ en $+\\infty$ vaut :",
            "options": [
              "$a$",
              "$+\\infty$",
              "$0$",
              "$b$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’écart entre la courbe et la droite tend vers zéro."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le coefficient $a$ est non nul",
          "stepTheme": "Le coefficient $a$ est non nul",
          "stepBadge": "Le coefficient $a$ est non nul",
          "paragraphText": "• Définition rappelée : dans une asymptote oblique, $a$ et $b$ sont des réels avec $a \\neq 0$.\nSi $a$ était nul, la droite serait horizontale et l’asymptote ne serait pas oblique.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q2",
            "type": "mcq",
            "prompt": "Dans la définition d’une asymptote oblique, le coefficient $a$ doit vérifier :",
            "options": [
              "$a = 0$",
              "$a \\neq 0$",
              "$a = 1$",
              "$a < 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une pente nulle donnerait une asymptote horizontale, pas oblique."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Obtenir la forme réduite par division",
          "stepTheme": "Obtenir la forme réduite par division",
          "stepBadge": "Obtenir la forme réduite par division",
          "paragraphText": "• Exercice de la leçon : pour $f(x) = \\frac{2x^2 + 3x - 1}{x - 1}$, la division euclidienne donne une partie affine et un reste divisé par $x - 1$.\nOn obtient $f(x) = 2x + 5 + \\frac{4}{x - 1}$ pour tout $x$ de $D_f$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q3",
            "type": "mcq",
            "prompt": "Pour cette fonction, la forme réduite est :",
            "options": [
              "$f(x) = 2x + 5 + \\frac{4}{x - 1}$",
              "$f(x) = 2x - 5 + \\frac{4}{x - 1}$",
              "$f(x) = 2x + 5 + \\frac{1}{x - 1}$",
              "$f(x) = 2x + 3 + \\frac{4}{x - 1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La division de $2x^2 + 3x - 1$ par $x - 1$ donne le quotient $2x + 5$ et le reste $4$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’asymptote de cette fonction rationnelle",
          "stepTheme": "L’asymptote de cette fonction rationnelle",
          "stepBadge": "L’asymptote de cette fonction rationnelle",
          "paragraphText": "• Suite de l’exercice : l’écart entre $f(x)$ et $2x + 5$ est $\\frac{4}{x - 1}$, dont la limite en $+\\infty$ et en $-\\infty$ est $0$.\nLa droite d’équation $y = 2x + 5$ est donc une asymptote à $(C_f)$ aux deux infinis.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q4",
            "type": "mcq",
            "prompt": "La droite asymptote à cette courbe est d’équation :",
            "options": [
              "$y = 2x - 5$",
              "$y = x + 5$",
              "$y = 2x + 5$",
              "$y = 4x + 5$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la partie affine de la forme réduite, l’écart tendant vers $0$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La position par rapport à l’asymptote",
          "stepTheme": "La position par rapport à l’asymptote",
          "stepBadge": "La position par rapport à l’asymptote",
          "paragraphText": "• Exercice de la leçon : pour $f(x) = \\frac{x^2 - 3x + 3}{x - 2} = x - 1 + \\frac{1}{x - 2}$, l’écart à l’asymptote $y = x - 1$ est $\\frac{1}{x - 2}$.\nSur $]2 ; +\\infty[$ cet écart est positif : la courbe est au-dessus de l’asymptote.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q5",
            "type": "mcq",
            "prompt": "Pour cette fonction, sur $]2 ; +\\infty[$, la courbe est par rapport à son asymptote oblique :",
            "options": [
              "Au-dessous",
              "Confondue",
              "Au-dessus",
              "Verticale"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’écart $\\frac{1}{x - 2}$ est positif pour $x > 2$, donc la courbe est au-dessus."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas oublier d’étudier l’écart",
          "stepTheme": "Ne pas oublier d’étudier l’écart",
          "stepBadge": "Ne pas oublier d’étudier l’écart",
          "paragraphText": "• Piège : deviner une droite candidate ne suffit pas ; il faut montrer que l’écart tend vers $0$.\nC’est cette limite nulle, en $+\\infty$ ou en $-\\infty$, qui fait de la droite une asymptote.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q6",
            "type": "mcq",
            "prompt": "Pour prouver qu’une droite est une asymptote oblique, il faut établir que :",
            "options": [
              "L’écart $f(x) - (ax + b)$ tend vers $0$ à l’infini considéré",
              "$f$ s’annule à l’infini",
              "La droite coupe la courbe en un point",
              "$a$ est positif"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La définition repose entièrement sur cette limite nulle de l’écart."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q1",
          "type": "mcq",
          "prompt": "La droite $y = ax + b$ est une asymptote oblique en $+\\infty$ lorsque la limite de $f(x) - (ax + b)$ en $+\\infty$ vaut :",
          "options": [
            "$a$",
            "$+\\infty$",
            "$0$",
            "$b$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’écart entre la courbe et la droite tend vers zéro."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q2",
          "type": "mcq",
          "prompt": "Dans la définition d’une asymptote oblique, le coefficient $a$ doit vérifier :",
          "options": [
            "$a = 0$",
            "$a \\neq 0$",
            "$a = 1$",
            "$a < 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une pente nulle donnerait une asymptote horizontale, pas oblique."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q3",
          "type": "mcq",
          "prompt": "Pour cette fonction, la forme réduite est :",
          "options": [
            "$f(x) = 2x + 5 + \\frac{4}{x - 1}$",
            "$f(x) = 2x - 5 + \\frac{4}{x - 1}$",
            "$f(x) = 2x + 5 + \\frac{1}{x - 1}$",
            "$f(x) = 2x + 3 + \\frac{4}{x - 1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La division de $2x^2 + 3x - 1$ par $x - 1$ donne le quotient $2x + 5$ et le reste $4$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q4",
          "type": "mcq",
          "prompt": "La droite asymptote à cette courbe est d’équation :",
          "options": [
            "$y = 2x - 5$",
            "$y = x + 5$",
            "$y = 2x + 5$",
            "$y = 4x + 5$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la partie affine de la forme réduite, l’écart tendant vers $0$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q5",
          "type": "mcq",
          "prompt": "Pour cette fonction, sur $]2 ; +\\infty[$, la courbe est par rapport à son asymptote oblique :",
          "options": [
            "Au-dessous",
            "Confondue",
            "Au-dessus",
            "Verticale"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’écart $\\frac{1}{x - 2}$ est positif pour $x > 2$, donc la courbe est au-dessus."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p05_q6",
          "type": "mcq",
          "prompt": "Pour prouver qu’une droite est une asymptote oblique, il faut établir que :",
          "options": [
            "L’écart $f(x) - (ax + b)$ tend vers $0$ à l’infini considéré",
            "$f$ s’annule à l’infini",
            "La droite coupe la courbe en un point",
            "$a$ est positif"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La définition repose entièrement sur cette limite nulle de l’écart."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06",
      "order": 6,
      "title": "Étude complète d’une fonction et applications",
      "summary": "Mener l’étude complète d’une fonction rationnelle des exercices (limites, asymptotes, dérivée, symétrie) et l’appliquer au coût de production.",
      "conceptExplanation": "L’étude complète menée dans les exercices de la leçon suit un plan constant : ensemble de définition, limites aux bornes avec interprétation graphique des asymptotes, dérivée et sens de variation, tableau de variation, élément de symétrie éventuel, puis construction de la courbe.\nExemple traité : pour $f(x) = \\frac{2x - 1}{x + 1}$, la limite aux infinis est $2$ (asymptote horizontale $y = 2$), les limites en $-1$ sont infinies (asymptote verticale $x = -1$), la dérivée $\\frac{3}{(x + 1)^2}$ est positive donc $f$ est croissante sur chaque intervalle de son domaine, et le point $A(-1 ; 2)$ est un centre de symétrie. Application : l’étude de $U(x) = x - 10 + \\frac{900}{x}$ sur $[10 ; 100]$ donne un minimum de $50$ atteint en $30$ ampoules.",
      "keyRule": "Une étude complète enchaîne limites, asymptotes, dérivée, variations et symétries avant de conclure, y compris dans une application concrète.",
      "formulas": [
        {
          "name": "Dérivée de l’exemple d’étude complète",
          "formula": "f^\\prime(x) = \\frac{3}{(x + 1)^2}",
          "note": "Pour $f(x) = \\frac{2x - 1}{x + 1}$."
        }
      ],
      "workedExample": {
        "title": "Étude de $f(x) = \\frac{2x - 1}{x + 1}$",
        "statement": "Mène l’étude de la fonction $f$ définie sur $\\mathbb{R}$ privé de $-1$ par $f(x) = \\frac{2x - 1}{x + 1}$ (exercice de la leçon).",
        "methodSteps": [
          "Les limites en $-\\infty$ et en $+\\infty$ valent $2$ : asymptote horizontale $y = 2$.",
          "En $-1$, les limites sont $+\\infty$ à gauche et $-\\infty$ à droite : asymptote verticale $x = -1$.",
          "La dérivée $f^\\prime(x) = \\frac{3}{(x + 1)^2}$ est strictement positive : $f$ est croissante sur chaque intervalle de $D_f$.",
          "La fonction auxiliaire $g(x) = f(x - 1) - 2$ est impaire : $A(-1 ; 2)$ est un centre de symétrie."
        ],
        "conclusion": "L’étude est complète : asymptotes $y = 2$ et $x = -1$, fonction croissante sur chaque intervalle, centre $A(-1 ; 2)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "methode",
          "stepTitle": "Les limites aux infinis et l’asymptote horizontale",
          "stepTheme": "Les limites aux infinis et l’asymptote horizontale",
          "stepBadge": "Les limites aux infinis et l’asymptote horizontale",
          "paragraphText": "• Exercice de la leçon : pour $f(x) = \\frac{2x - 1}{x + 1}$, les limites en $-\\infty$ et en $+\\infty$ valent $2$.\nLa droite d’équation $y = 2$ est donc une asymptote horizontale aux deux infinis.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q1",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{2x - 1}{x + 1}$, la limite en $+\\infty$ vaut :",
            "options": [
              "$0$",
              "$2$",
              "$+\\infty$",
              "$-1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le rapport des termes dominants donne $2$, d’où l’asymptote horizontale $y = 2$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Les limites en la valeur interdite",
          "stepTheme": "Les limites en la valeur interdite",
          "stepBadge": "Les limites en la valeur interdite",
          "paragraphText": "• Suite de l’exercice : en $-1$ par valeurs inférieures, la limite est $+\\infty$ ; par valeurs supérieures, elle est $-\\infty$.\nLa droite d’équation $x = -1$ est donc une asymptote verticale à la courbe.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q2",
            "type": "mcq",
            "prompt": "Les limites de cette fonction en $-1$ entraînent :",
            "options": [
              "Une asymptote horizontale $y = -1$",
              "Une asymptote verticale $x = -1$",
              "Un centre de symétrie",
              "Une période"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une limite infinie en une valeur finie donne une asymptote verticale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La dérivée et les variations",
          "stepTheme": "La dérivée et les variations",
          "stepBadge": "La dérivée et les variations",
          "paragraphText": "• Suite de l’exercice : la dérivée est $f^\\prime(x) = \\frac{3}{(x + 1)^2}$, strictement positive sur $D_f$.\nLa fonction est donc croissante sur chacun des intervalles $]-\\infty ; -1[$ et $]-1 ; +\\infty[$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q3",
            "type": "mcq",
            "prompt": "Pour cette fonction, $f^\\prime(x)$ vaut :",
            "options": [
              "$\\frac{-3}{(x + 1)^2}$",
              "$\\frac{2}{(x + 1)^2}$",
              "$\\frac{3}{(x + 1)^2}$",
              "$\\frac{1}{x + 1}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le quotient donne le numérateur $2(x + 1) - (2x - 1) = 3$, sur $(x + 1)^2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un centre de symétrie dans l’étude complète",
          "stepTheme": "Un centre de symétrie dans l’étude complète",
          "stepBadge": "Un centre de symétrie dans l’étude complète",
          "paragraphText": "• Fin de l’exercice : en posant $g(x) = f(x - 1) - 2$, on obtient une fonction impaire.\nLe point $A(-1 ; 2)$ est donc un centre de symétrie de la courbe, au croisement des deux asymptotes.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q4",
            "type": "mcq",
            "prompt": "Le point centre de symétrie de cette courbe est :",
            "options": [
              "$A(0 ; 2)$",
              "$A(-1 ; 2)$",
              "$A(2 ; -1)$",
              "$A(-1 ; 0)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le point de coordonnées formées de la valeur interdite $-1$ et de la limite $2$ aux infinis."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "L’application au coût de production",
          "stepTheme": "L’application au coût de production",
          "stepBadge": "L’application au coût de production",
          "paragraphText": "• Situation complexe de la leçon : le coût est $U(x) = x - 10 + \\frac{900}{x}$ sur $[10 ; 100]$.\nSa dérivée est $U^\\prime(x) = 1 - \\frac{900}{x^2}$, du signe de $(x - 30)(x + 30)$ sur cet intervalle.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q5",
            "type": "mcq",
            "prompt": "Pour cette fonction de coût, $U^\\prime(x)$ vaut :",
            "options": [
              "$1 + \\frac{900}{x^2}$",
              "$1 - \\frac{900}{x}$",
              "$x - \\frac{900}{x^2}$",
              "$1 - \\frac{900}{x^2}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La dérivée de $\\frac{900}{x}$ est $-\\frac{900}{x^2}$, celle de $x - 10$ est $1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Conclure par le minimum de l’étude",
          "stepTheme": "Conclure par le minimum de l’étude",
          "stepBadge": "Conclure par le minimum de l’étude",
          "paragraphText": "• Conclusion de la situation complexe : $U$ décroît puis croît sur $[10 ; 100]$, et son minimum est $50$, atteint en $30$.\nLe nombre d’ampoules à fabriquer pour minimiser le coût est donc $30$, pas la valeur qui annule seulement la dérivée sans contrôle du tableau.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q6",
            "type": "mcq",
            "prompt": "Le coût minimal de la situation complexe est atteint pour un nombre d’ampoules égal à :",
            "options": [
              "$10$",
              "$30$",
              "$50$",
              "$100$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le minimum de valeur $50$ est atteint en $x = 30$ d’après le tableau de variation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q1",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{2x - 1}{x + 1}$, la limite en $+\\infty$ vaut :",
          "options": [
            "$0$",
            "$2$",
            "$+\\infty$",
            "$-1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le rapport des termes dominants donne $2$, d’où l’asymptote horizontale $y = 2$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q2",
          "type": "mcq",
          "prompt": "Les limites de cette fonction en $-1$ entraînent :",
          "options": [
            "Une asymptote horizontale $y = -1$",
            "Une asymptote verticale $x = -1$",
            "Un centre de symétrie",
            "Une période"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une limite infinie en une valeur finie donne une asymptote verticale."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q3",
          "type": "mcq",
          "prompt": "Pour cette fonction, $f^\\prime(x)$ vaut :",
          "options": [
            "$\\frac{-3}{(x + 1)^2}$",
            "$\\frac{2}{(x + 1)^2}$",
            "$\\frac{3}{(x + 1)^2}$",
            "$\\frac{1}{x + 1}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le quotient donne le numérateur $2(x + 1) - (2x - 1) = 3$, sur $(x + 1)^2$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q4",
          "type": "mcq",
          "prompt": "Le point centre de symétrie de cette courbe est :",
          "options": [
            "$A(0 ; 2)$",
            "$A(-1 ; 2)$",
            "$A(2 ; -1)$",
            "$A(-1 ; 0)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le point de coordonnées formées de la valeur interdite $-1$ et de la limite $2$ aux infinis."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q5",
          "type": "mcq",
          "prompt": "Pour cette fonction de coût, $U^\\prime(x)$ vaut :",
          "options": [
            "$1 + \\frac{900}{x^2}$",
            "$1 - \\frac{900}{x}$",
            "$x - \\frac{900}{x^2}$",
            "$1 - \\frac{900}{x^2}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La dérivée de $\\frac{900}{x}$ est $-\\frac{900}{x^2}$, celle de $x - 10$ est $1$."
        },
        {
          "id": "premiere_c_maths_numerique_l11_etude_representation_fonction_p06_q6",
          "type": "mcq",
          "prompt": "Le coût minimal de la situation complexe est atteint pour un nombre d’ampoules égal à :",
          "options": [
            "$10$",
            "$30$",
            "$50$",
            "$100$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le minimum de valeur $50$ est atteint en $x = 30$ d’après le tableau de variation."
        }
      ]
    }
  ]
};
