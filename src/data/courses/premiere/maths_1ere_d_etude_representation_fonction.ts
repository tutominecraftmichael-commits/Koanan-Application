import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Étude et représentation graphique d’une fonction » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Étude et représentation graphique d’une fonction » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L09_ETUDE_REPRESENTATION_FONCTION: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l09_etude_representation_fonction",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 9,
  "title": "Leçon 9 : Étude et représentation graphique d’une fonction",
  "summary": "La leçon présente les outils d’étude d’une fonction : parité, éléments de symétrie de la courbe, périodicité et asymptote oblique, puis les mobilise dans des études complètes avec tableaux de variation décrits et interprétation graphique.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Étude et représentation graphique d’une fonction » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01",
      "order": 1,
      "title": "Fonction paire",
      "summary": "Définir une fonction paire, la reconnaître par le calcul et par la symétrie de sa courbe par rapport à l’axe des ordonnées.",
      "conceptExplanation": "Soit $f$ une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$, d’ensemble de définition $D_f$, et $(C_f)$ sa représentation graphique dans un repère orthogonal $(O, I, J)$.\nLa fonction $f$ est dite paire lorsque, pour tout $x$ élément de $D_f$, on a $-x \\in D_f$ et $f(-x) = f(x)$. Exemples : les fonctions constante, $x \\mapsto x^2$, $x \\mapsto |x|$ et $x \\mapsto \\cos x$ sont paires.\nInterprétation graphique : $f$ est paire si et seulement si la droite $(OJ)$ est un axe de symétrie de $(C_f)$. Lorsque $f$ est paire, il suffit de l’étudier sur $D_f \\cap [0 ; +\\infty[$, puis de compléter la courbe par symétrie par rapport à $(OJ)$.",
      "keyRule": "Paire se vérifie en deux temps : ensemble de définition symétrique par rapport à $0$, puis $f(-x) = f(x)$.",
      "formulas": [
        {
          "name": "Fonction paire",
          "formula": "f(-x) = f(x)",
          "note": "Pour tout $x \\in D_f$, avec $-x \\in D_f$."
        }
      ],
      "workedExample": {
        "title": "La fonction $\\frac{2}{1 + |x|}$ est paire (exemple de la leçon)",
        "statement": "Soit $f$ la fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(x) = \\frac{2}{1 + |x|}$. Justifie que $f$ est paire.",
        "methodSteps": [
          "L’ensemble de définition de $f$ est $\\mathbb{R}$ : pour tout $x$ de $D_f$, $-x$ appartient aussi à $D_f$.",
          "Pour tout $x$, $f(-x) = \\frac{2}{1 + |-x|}$ et $|-x| = |x|$, donc $f(-x) = f(x)$."
        ],
        "conclusion": "Les deux conditions sont remplies : la fonction $f$ est paire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une fonction paire",
          "stepTheme": "La définition d’une fonction paire",
          "stepBadge": "La définition d’une fonction paire",
          "paragraphText": "• Définition : $f$ est paire lorsque, pour tout $x \\in D_f$, on a $-x \\in D_f$ et $f(-x) = f(x)$.\nLes deux conditions doivent être vérifiées ensemble.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q1",
            "type": "mcq",
            "prompt": "Une fonction $f$ est paire si, pour tout $x \\in D_f$ :",
            "options": [
              "$-x \\in D_f$ et $f(-x) = -f(x)$",
              "$-x \\in D_f$ et $f(-x) = f(x)$",
              "$f(0) = 0$",
              "$x + 1 \\in D_f$ et $f(x + 1) = f(x)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la leçon : symétrie de $D_f$ par rapport à $0$ et égalité $f(-x) = f(x)$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des fonctions paires usuelles",
          "stepTheme": "Des fonctions paires usuelles",
          "stepBadge": "Des fonctions paires usuelles",
          "paragraphText": "• Exemples de la leçon : les fonctions $x \\mapsto c$ (constante), $x \\mapsto x^2$, $x \\mapsto |x|$ et $x \\mapsto \\cos x$ sont paires.\nPour chacune, remplacer $x$ par $-x$ ne change pas l’image.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q2",
            "type": "mcq",
            "prompt": "Parmi les fonctions suivantes, laquelle est paire d’après les exemples de la leçon ?",
            "options": [
              "$x \\mapsto x^3$",
              "$x \\mapsto \\sin x$",
              "$x \\mapsto x^2$",
              "$x \\mapsto \\frac{1}{x}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fonction carré figure parmi les exemples de fonctions paires ; les trois autres sont les exemples de fonctions impaires de la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Vérifier la parité par le calcul",
          "stepTheme": "Vérifier la parité par le calcul",
          "stepBadge": "Vérifier la parité par le calcul",
          "paragraphText": "• Méthode de l’exemple : pour $f(x) = \\frac{2}{1 + |x|}$, on constate que $D_f = \\mathbb{R}$, puis que $|-x| = |x|$ donne $f(-x) = f(x)$.\nMême démarche dans l’exercice 1 pour $f(x) = 3x^4 - |x| + 1$, qui est paire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = 3x^4 - |x| + 1$, que vaut $f(-x)$ ?",
            "options": [
              "$-3x^4 + |x| - 1$",
              "$3x^4 - |x| + 1$",
              "$3x^4 + |x| + 1$",
              "$-3x^4 - |x| + 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule : $3(-x)^4 - |-x| + 1 = 3x^4 - |x| + 1 = f(x)$, donc $f$ est paire."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "L’axe de symétrie d’une fonction paire",
          "stepTheme": "L’axe de symétrie d’une fonction paire",
          "stepBadge": "L’axe de symétrie d’une fonction paire",
          "paragraphText": "• Propriété : $f$ est paire si et seulement si la droite $(OJ)$, l’axe des ordonnées, est un axe de symétrie de $(C_f)$ dans un repère orthogonal.\nC’est le critère utilisé dans l’exercice de fixation sur la courbe dessinée sur $[-6 ; 6]$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q4",
            "type": "mcq",
            "prompt": "Si la représentation graphique de $f$ admet la droite $(OJ)$ comme axe de symétrie, alors $f$ est :",
            "options": [
              "Impaire",
              "Périodique",
              "Paire",
              "Ni paire ni impaire"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Par la propriété d’interprétation graphique, cette symétrie axiale caractérise les fonctions paires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un ensemble de définition non symétrique",
          "stepTheme": "Un ensemble de définition non symétrique",
          "stepBadge": "Un ensemble de définition non symétrique",
          "paragraphText": "• Piège de l’exercice 1 : pour $f(x) = \\frac{x^2}{x - 1}$, l’ensemble de définition est $\\mathbb{R}$ privé de $1$, qui n’est pas symétrique par rapport à $0$ car $-1 \\in D_f$ et $1 \\notin D_f$.\nLa fonction n’est alors ni paire ni impaire, sans même calculer $f(-x)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q5",
            "type": "mcq",
            "prompt": "Si $D_f$ n’est pas symétrique par rapport à $0$, la fonction $f$ est :",
            "options": [
              "Forcément paire",
              "Forcément impaire",
              "Ni paire ni impaire",
              "Périodique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La symétrie de $D_f$ par rapport à $0$ est une condition nécessaire de la parité comme de l’imparité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Réduire l’étude d’une fonction paire",
          "stepTheme": "Réduire l’étude d’une fonction paire",
          "stepBadge": "Réduire l’étude d’une fonction paire",
          "paragraphText": "• Remarque de la leçon : lorsque $f$ est paire, il suffit de l’étudier sur $D_f \\cap [0 ; +\\infty[$.\nLa courbe obtenue est ensuite complétée par symétrie par rapport à la droite $(OJ)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q6",
            "type": "mcq",
            "prompt": "Pour une fonction paire, on peut limiter l’étude à :",
            "options": [
              "$D_f \\cap ]-\\infty ; 0]$ seulement, sans compléter",
              "$D_f \\cap [0 ; +\\infty[$, puis compléter par symétrie par rapport à $(OJ)$",
              "Un seul point de la courbe",
              "$D_f$ tout entier obligatoirement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon autorise l’étude sur la partie positive, complétée par la symétrie axiale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q1",
          "type": "mcq",
          "prompt": "Une fonction $f$ est paire si, pour tout $x \\in D_f$ :",
          "options": [
            "$-x \\in D_f$ et $f(-x) = -f(x)$",
            "$-x \\in D_f$ et $f(-x) = f(x)$",
            "$f(0) = 0$",
            "$x + 1 \\in D_f$ et $f(x + 1) = f(x)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la leçon : symétrie de $D_f$ par rapport à $0$ et égalité $f(-x) = f(x)$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q2",
          "type": "mcq",
          "prompt": "Parmi les fonctions suivantes, laquelle est paire d’après les exemples de la leçon ?",
          "options": [
            "$x \\mapsto x^3$",
            "$x \\mapsto \\sin x$",
            "$x \\mapsto x^2$",
            "$x \\mapsto \\frac{1}{x}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La fonction carré figure parmi les exemples de fonctions paires ; les trois autres sont les exemples de fonctions impaires de la leçon."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = 3x^4 - |x| + 1$, que vaut $f(-x)$ ?",
          "options": [
            "$-3x^4 + |x| - 1$",
            "$3x^4 - |x| + 1$",
            "$3x^4 + |x| + 1$",
            "$-3x^4 - |x| + 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule : $3(-x)^4 - |-x| + 1 = 3x^4 - |x| + 1 = f(x)$, donc $f$ est paire."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q4",
          "type": "mcq",
          "prompt": "Si la représentation graphique de $f$ admet la droite $(OJ)$ comme axe de symétrie, alors $f$ est :",
          "options": [
            "Impaire",
            "Périodique",
            "Paire",
            "Ni paire ni impaire"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Par la propriété d’interprétation graphique, cette symétrie axiale caractérise les fonctions paires."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q5",
          "type": "mcq",
          "prompt": "Si $D_f$ n’est pas symétrique par rapport à $0$, la fonction $f$ est :",
          "options": [
            "Forcément paire",
            "Forcément impaire",
            "Ni paire ni impaire",
            "Périodique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La symétrie de $D_f$ par rapport à $0$ est une condition nécessaire de la parité comme de l’imparité."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p01_q6",
          "type": "mcq",
          "prompt": "Pour une fonction paire, on peut limiter l’étude à :",
          "options": [
            "$D_f \\cap ]-\\infty ; 0]$ seulement, sans compléter",
            "$D_f \\cap [0 ; +\\infty[$, puis compléter par symétrie par rapport à $(OJ)$",
            "Un seul point de la courbe",
            "$D_f$ tout entier obligatoirement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon autorise l’étude sur la partie positive, complétée par la symétrie axiale."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02",
      "order": 2,
      "title": "Fonction impaire",
      "summary": "Définir une fonction impaire, la reconnaître par le calcul et par la symétrie de sa courbe par rapport à l’origine.",
      "conceptExplanation": "La fonction $f$ est dite impaire lorsque, pour tout $x$ élément de $D_f$, on a $-x \\in D_f$ et $f(-x) = -f(x)$. Exemples : les fonctions $x \\mapsto x$, $x \\mapsto x^3$, $x \\mapsto \\frac{1}{x}$ et $x \\mapsto \\sin x$ sont impaires.\nInterprétation graphique : $f$ est impaire si et seulement si le point $O$ est un centre de symétrie de $(C_f)$.\nUn sous-ensemble $E$ de $\\mathbb{R}$ est dit symétrique par rapport à zéro lorsque, pour tout $x \\in E$, on a $-x \\in E$ ; c’est le cas de $\\mathbb{R}$, de $\\mathbb{R}$ privé de $0$, de $[-1 ; 1]$ et de $]-3 ; 3[$. Lorsque $f$ est impaire, on l’étudie sur $D_f \\cap [0 ; +\\infty[$ et on complète par symétrie par rapport au point $O$.",
      "keyRule": "Impaire : $f(-x) = -f(x)$ et origine du repère comme centre de symétrie de la courbe.",
      "formulas": [
        {
          "name": "Fonction impaire",
          "formula": "f(-x) = -f(x)",
          "note": "Pour tout $x \\in D_f$, avec $-x \\in D_f$."
        }
      ],
      "workedExample": {
        "title": "La fonction $\\frac{x}{1 + x^2}$ est impaire (exemple de la leçon)",
        "statement": "Soit $f$ la fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(x) = \\frac{x}{1 + x^2}$. Justifie que $f$ est impaire.",
        "methodSteps": [
          "L’ensemble de définition de $f$ est $\\mathbb{R}$ : pour tout $x$, $-x$ appartient à $D_f$.",
          "Pour tout $x$, $f(-x) = \\frac{-x}{1 + (-x)^2} = -\\frac{x}{1 + x^2} = -f(x)$."
        ],
        "conclusion": "Les deux conditions sont remplies : la fonction $f$ est impaire."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une fonction impaire",
          "stepTheme": "La définition d’une fonction impaire",
          "stepBadge": "La définition d’une fonction impaire",
          "paragraphText": "• Définition : $f$ est impaire lorsque, pour tout $x \\in D_f$, on a $-x \\in D_f$ et $f(-x) = -f(x)$.\nLe signe moins devant $f(x)$ distingue l’imparité de la parité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q1",
            "type": "mcq",
            "prompt": "Une fonction $f$ est impaire si, pour tout $x \\in D_f$ :",
            "options": [
              "$f(-x) = f(x)$",
              "$f(-x) = -f(x)$ avec $-x \\in D_f$",
              "$f(-x) = 0$",
              "$f(x) = -x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition de la leçon : $f(-x)$ est l’opposé de $f(x)$, sur un ensemble symétrique par rapport à $0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Des fonctions impaires usuelles",
          "stepTheme": "Des fonctions impaires usuelles",
          "stepBadge": "Des fonctions impaires usuelles",
          "paragraphText": "• Exemples de la leçon : les fonctions $x \\mapsto x$, $x \\mapsto x^3$, $x \\mapsto \\frac{1}{x}$ et $x \\mapsto \\sin x$ sont impaires.\nPour chacune, $f(-x)$ est l’opposé de $f(x)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q2",
            "type": "mcq",
            "prompt": "Parmi les fonctions suivantes, laquelle est impaire d’après les exemples de la leçon ?",
            "options": [
              "$x \\mapsto |x|$",
              "$x \\mapsto \\cos x$",
              "$x \\mapsto x^2$",
              "$x \\mapsto x^3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La fonction cube figure parmi les exemples de fonctions impaires ; les trois autres sont paires."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Vérifier l’imparité par le calcul",
          "stepTheme": "Vérifier l’imparité par le calcul",
          "stepBadge": "Vérifier l’imparité par le calcul",
          "paragraphText": "• Méthode de l’exemple : pour $f(x) = \\frac{x}{1 + x^2}$, on calcule $f(-x) = \\frac{-x}{1 + x^2}$ car $(-x)^2 = x^2$.\nOn reconnaît alors exactement l’opposé de $f(x)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{x}{1 + x^2}$, $f(-x)$ est égal à :",
            "options": [
              "$-f(x)$",
              "$f(x)$",
              "$\\frac{1}{f(x)}$",
              "$f(x) + 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le numérateur change de signe et le dénominateur est inchangé : $f(-x) = -f(x)$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le centre de symétrie d’une fonction impaire",
          "stepTheme": "Le centre de symétrie d’une fonction impaire",
          "stepBadge": "Le centre de symétrie d’une fonction impaire",
          "paragraphText": "• Propriété : $f$ est impaire si et seulement si le point $O$ est un centre de symétrie de $(C_f)$.\nC’est le critère utilisé dans l’exercice de fixation sur la courbe dessinée sur $[-4 ; 4]$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q4",
            "type": "mcq",
            "prompt": "Si la représentation graphique de $f$ admet le point $O$ comme centre de symétrie, alors $f$ est :",
            "options": [
              "Paire",
              "Impaire",
              "Constante",
              "Périodique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par la propriété d’interprétation graphique, cette symétrie centrale caractérise les fonctions impaires."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un quotient impair de l’exercice 1",
          "stepTheme": "Un quotient impair de l’exercice 1",
          "stepBadge": "Un quotient impair de l’exercice 1",
          "paragraphText": "• Exercice 1 : pour $f(x) = \\frac{x^3}{x^2 - 1}$, l’ensemble de définition est $\\mathbb{R}$ privé de $-1$ et $1$, symétrique par rapport à $0$.\nLe calcul donne $f(-x) = \\frac{-x^3}{x^2 - 1} = -f(x)$ : la fonction est impaire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q5",
            "type": "mcq",
            "prompt": "La fonction $f(x) = \\frac{x^3}{x^2 - 1}$ est :",
            "options": [
              "Paire",
              "Ni paire ni impaire",
              "Impaire",
              "Périodique"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé de l’exercice 1 conclut à l’imparité, après vérification de $f(-x) = -f(x)$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ni paire ni impaire malgré un ensemble symétrique",
          "stepTheme": "Ni paire ni impaire malgré un ensemble symétrique",
          "stepBadge": "Ni paire ni impaire malgré un ensemble symétrique",
          "paragraphText": "• Piège de l’exercice 1 : pour $f(x) = x^2 + 4x - 8$, l’ensemble de définition $\\mathbb{R}$ est symétrique par rapport à $0$, mais $f(-x) = x^2 - 4x - 8$.\nCette expression n’est ni $f(x)$ ni $-f(x)$ : la fonction n’est ni paire ni impaire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^2 + 4x - 8$, la fonction est :",
            "options": [
              "Paire",
              "Impaire",
              "Ni paire ni impaire",
              "Les deux à la fois"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé compare $f(-x) = x^2 - 4x - 8$ à $f(x)$ et à $-f(x)$ : aucune des deux égalités n’est vraie."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q1",
          "type": "mcq",
          "prompt": "Une fonction $f$ est impaire si, pour tout $x \\in D_f$ :",
          "options": [
            "$f(-x) = f(x)$",
            "$f(-x) = -f(x)$ avec $-x \\in D_f$",
            "$f(-x) = 0$",
            "$f(x) = -x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition de la leçon : $f(-x)$ est l’opposé de $f(x)$, sur un ensemble symétrique par rapport à $0$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q2",
          "type": "mcq",
          "prompt": "Parmi les fonctions suivantes, laquelle est impaire d’après les exemples de la leçon ?",
          "options": [
            "$x \\mapsto |x|$",
            "$x \\mapsto \\cos x$",
            "$x \\mapsto x^2$",
            "$x \\mapsto x^3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La fonction cube figure parmi les exemples de fonctions impaires ; les trois autres sont paires."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{x}{1 + x^2}$, $f(-x)$ est égal à :",
          "options": [
            "$-f(x)$",
            "$f(x)$",
            "$\\frac{1}{f(x)}$",
            "$f(x) + 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le numérateur change de signe et le dénominateur est inchangé : $f(-x) = -f(x)$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q4",
          "type": "mcq",
          "prompt": "Si la représentation graphique de $f$ admet le point $O$ comme centre de symétrie, alors $f$ est :",
          "options": [
            "Paire",
            "Impaire",
            "Constante",
            "Périodique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par la propriété d’interprétation graphique, cette symétrie centrale caractérise les fonctions impaires."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q5",
          "type": "mcq",
          "prompt": "La fonction $f(x) = \\frac{x^3}{x^2 - 1}$ est :",
          "options": [
            "Paire",
            "Ni paire ni impaire",
            "Impaire",
            "Périodique"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé de l’exercice 1 conclut à l’imparité, après vérification de $f(-x) = -f(x)$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p02_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^2 + 4x - 8$, la fonction est :",
          "options": [
            "Paire",
            "Impaire",
            "Ni paire ni impaire",
            "Les deux à la fois"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé compare $f(-x) = x^2 - 4x - 8$ à $f(x)$ et à $-f(x)$ : aucune des deux égalités n’est vraie."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03",
      "order": 3,
      "title": "Axe et centre de symétrie d’une courbe",
      "summary": "Démontrer qu’une droite verticale est un axe de symétrie ou qu’un point est un centre de symétrie d’une courbe.",
      "conceptExplanation": "Axe de symétrie : la droite $(D)$ d’équation $x = a$ est un axe de symétrie de la courbe de $f$ si et seulement si, pour tout $x$ de $D_f$, on a $2a - x \\in D_f$ et $f(2a - x) = f(x)$. Autre écriture : pour tout réel $h$ tel que $a + h \\in D_f$, on a $a - h \\in D_f$ et $f(a + h) = f(a - h)$.\nCentre de symétrie : le point $A(a ; b)$ est un centre de symétrie de la courbe de $f$ si et seulement si, pour tout $x$ de $D_f$, on a $2a - x \\in D_f$ et $f(2a - x) + f(x) = 2b$. Autre écriture : la moyenne de $f(a + h)$ et $f(a - h)$ vaut $b$.\nCes deux propriétés prolongent la parité et l’imparité, qui correspondent à l’axe $x = 0$ et au centre $O$.",
      "keyRule": "Axe $x = a$ : $f(2a - x) = f(x)$. Centre $(a ; b)$ : $f(2a - x) + f(x) = 2b$.",
      "formulas": [
        {
          "name": "Axe de symétrie",
          "formula": "f(2a - x) = f(x)",
          "note": "Pour la droite d’équation $x = a$."
        },
        {
          "name": "Centre de symétrie",
          "formula": "f(2a - x) + f(x) = 2b",
          "note": "Pour le point $A(a ; b)$."
        }
      ],
      "workedExample": {
        "title": "Un axe de symétrie en $x = 3$ (exercice de fixation)",
        "statement": "Soit la droite $(D)$ d’équation $x = 3$ et la fonction $f$ définie par $f(x) = -2(x - 3)^2 + 5$. Démontre que $(D)$ est un axe de symétrie de la courbe de $f$.",
        "methodSteps": [
          "L’ensemble de définition est $\\mathbb{R}$ : pour tout $x$, $6 - x$ appartient à $D_f$.",
          "On calcule $f(6 - x) = -2(6 - x - 3)^2 + 5 = -2(3 - x)^2 + 5$.",
          "Comme $(3 - x)^2 = (x - 3)^2$, on obtient $f(6 - x) = f(x)$."
        ],
        "conclusion": "La droite d’équation $x = 3$ est un axe de symétrie de la courbe de $f$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La condition d’un axe de symétrie",
          "stepTheme": "La condition d’un axe de symétrie",
          "stepBadge": "La condition d’un axe de symétrie",
          "paragraphText": "• Propriété : la droite d’équation $x = a$ est un axe de symétrie de la courbe de $f$ si et seulement si, pour tout $x \\in D_f$, $2a - x \\in D_f$ et $f(2a - x) = f(x)$.\nLe point symétrique de $x$ par rapport à $a$ sur l’axe des abscisses est $2a - x$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q1",
            "type": "mcq",
            "prompt": "La droite d’équation $x = a$ est un axe de symétrie de $(C_f)$ si, pour tout $x \\in D_f$ :",
            "options": [
              "$f(2a - x) + f(x) = 2a$",
              "$f(2a - x) = f(x)$ avec $2a - x \\in D_f$",
              "$f(-x) = f(x)$",
              "$f(a) = 0$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété de la leçon pour un axe de symétrie vertical."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "L’axe de la parabole translatée",
          "stepTheme": "L’axe de la parabole translatée",
          "stepBadge": "L’axe de la parabole translatée",
          "paragraphText": "• Exercice de fixation : pour $f(x) = -2(x - 3)^2 + 5$, on vérifie $f(6 - x) = f(x)$.\nIci $2a - x = 6 - x$ car l’axe visé est la droite d’équation $x = 3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q2",
            "type": "mcq",
            "prompt": "Pour démontrer que la droite $x = 3$ est un axe de symétrie de la courbe de $f(x) = -2(x - 3)^2 + 5$, on montre que :",
            "options": [
              "$f(-x) = f(x)$",
              "$f(3) = 5$ seulement",
              "$f(6 - x) + f(x) = 10$",
              "$f(6 - x) = f(x)$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec $a = 3$, la condition d’axe est $f(2a - x) = f(x)$, soit $f(6 - x) = f(x)$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La condition d’un centre de symétrie",
          "stepTheme": "La condition d’un centre de symétrie",
          "stepBadge": "La condition d’un centre de symétrie",
          "paragraphText": "• Propriété : le point $A(a ; b)$ est un centre de symétrie de la courbe de $f$ si et seulement si, pour tout $x \\in D_f$, $2a - x \\in D_f$ et $f(2a - x) + f(x) = 2b$.\nLa somme des deux images vaut le double de l’ordonnée du centre.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q3",
            "type": "mcq",
            "prompt": "Le point $A(a ; b)$ est un centre de symétrie de $(C_f)$ si, pour tout $x \\in D_f$ :",
            "options": [
              "$f(2a - x) = f(x)$",
              "$f(2a - x) + f(x) = 2b$ avec $2a - x \\in D_f$",
              "$f(-x) = -f(x)$",
              "$f(a) = b$ seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété de la leçon pour un centre de symétrie."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un centre de symétrie en $(2 ; 3)$",
          "stepTheme": "Un centre de symétrie en $(2 ; 3)$",
          "stepBadge": "Un centre de symétrie en $(2 ; 3)$",
          "paragraphText": "• Exercice de fixation : pour $g(x) = (x - 2)^3 + 3$ et le point $A(2 ; 3)$, on calcule $g(4 - x) + g(x)$.\nComme $(2 - x)^3 = -(x - 2)^3$, les cubes se compensent et la somme vaut $6$, c’est-à-dire $2 \\times 3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q4",
            "type": "mcq",
            "prompt": "Pour $g(x) = (x - 2)^3 + 3$, la somme $g(4 - x) + g(x)$ vaut :",
            "options": [
              "$0$",
              "$3$",
              "$6$",
              "$12$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé obtient $6 = 2 \\times 3$ : le point $A(2 ; 3)$ est bien un centre de symétrie."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Ramener un axe à une fonction paire",
          "stepTheme": "Ramener un axe à une fonction paire",
          "stepBadge": "Ramener un axe à une fonction paire",
          "paragraphText": "• Méthode de l’exercice 2 : pour $f(x) = x^2 - 4x + 7$, on pose $g(x) = f(x + 2)$, ce qui donne $g(x) = x^2 + 3$.\nLa fonction $g$ est paire, ce qui prouve que la droite d’équation $x = 2$ est un axe de symétrie de $(C_f)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice 2, la fonction auxiliaire $g(x) = f(x + 2)$ associée à $f(x) = x^2 - 4x + 7$ est :",
            "options": [
              "$g(x) = x^2 + 3$, qui est paire",
              "$g(x) = x^2 - 4x + 7$, qui est impaire",
              "$g(x) = x + 3$, qui est impaire",
              "$g(x) = x^2 - 3$, qui est impaire"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le calcul donne $g(x) = x^2 + 3$, une fonction paire : d’où l’axe de symétrie $x = 2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre les deux conditions",
          "stepTheme": "Confondre les deux conditions",
          "stepBadge": "Confondre les deux conditions",
          "paragraphText": "• Piège : l’axe exige une égalité d’images, $f(2a - x) = f(x)$ ; le centre exige une somme, $f(2a - x) + f(x) = 2b$.\nPar exemple, l’exercice 3 montre que le point $A(-1 ; 3)$ est un centre de symétrie de la courbe de $f(x) = \\frac{x^2 + 5x - 1}{x + 1}$ car $f(-2 - x) + f(x) = 6$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q6",
            "type": "mcq",
            "prompt": "Pour le point $A(-1 ; 3)$ et $f(x) = \\frac{x^2 + 5x - 1}{x + 1}$, le corrigé de l’exercice 3 établit :",
            "options": [
              "$f(-2 - x) = f(x)$",
              "$f(-2 - x) + f(x) = 0$",
              "$f(-2 - x) - f(x) = 6$",
              "$f(-2 - x) + f(x) = 6$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La somme vaut $6 = 2 \\times 3$ : c’est la condition d’un centre de symétrie d’ordonnée $3$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q1",
          "type": "mcq",
          "prompt": "La droite d’équation $x = a$ est un axe de symétrie de $(C_f)$ si, pour tout $x \\in D_f$ :",
          "options": [
            "$f(2a - x) + f(x) = 2a$",
            "$f(2a - x) = f(x)$ avec $2a - x \\in D_f$",
            "$f(-x) = f(x)$",
            "$f(a) = 0$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété de la leçon pour un axe de symétrie vertical."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q2",
          "type": "mcq",
          "prompt": "Pour démontrer que la droite $x = 3$ est un axe de symétrie de la courbe de $f(x) = -2(x - 3)^2 + 5$, on montre que :",
          "options": [
            "$f(-x) = f(x)$",
            "$f(3) = 5$ seulement",
            "$f(6 - x) + f(x) = 10$",
            "$f(6 - x) = f(x)$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec $a = 3$, la condition d’axe est $f(2a - x) = f(x)$, soit $f(6 - x) = f(x)$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q3",
          "type": "mcq",
          "prompt": "Le point $A(a ; b)$ est un centre de symétrie de $(C_f)$ si, pour tout $x \\in D_f$ :",
          "options": [
            "$f(2a - x) = f(x)$",
            "$f(2a - x) + f(x) = 2b$ avec $2a - x \\in D_f$",
            "$f(-x) = -f(x)$",
            "$f(a) = b$ seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété de la leçon pour un centre de symétrie."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q4",
          "type": "mcq",
          "prompt": "Pour $g(x) = (x - 2)^3 + 3$, la somme $g(4 - x) + g(x)$ vaut :",
          "options": [
            "$0$",
            "$3$",
            "$6$",
            "$12$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé obtient $6 = 2 \\times 3$ : le point $A(2 ; 3)$ est bien un centre de symétrie."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice 2, la fonction auxiliaire $g(x) = f(x + 2)$ associée à $f(x) = x^2 - 4x + 7$ est :",
          "options": [
            "$g(x) = x^2 + 3$, qui est paire",
            "$g(x) = x^2 - 4x + 7$, qui est impaire",
            "$g(x) = x + 3$, qui est impaire",
            "$g(x) = x^2 - 3$, qui est impaire"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le calcul donne $g(x) = x^2 + 3$, une fonction paire : d’où l’axe de symétrie $x = 2$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p03_q6",
          "type": "mcq",
          "prompt": "Pour le point $A(-1 ; 3)$ et $f(x) = \\frac{x^2 + 5x - 1}{x + 1}$, le corrigé de l’exercice 3 établit :",
          "options": [
            "$f(-2 - x) = f(x)$",
            "$f(-2 - x) + f(x) = 0$",
            "$f(-2 - x) - f(x) = 6$",
            "$f(-2 - x) + f(x) = 6$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La somme vaut $6 = 2 \\times 3$ : c’est la condition d’un centre de symétrie d’ordonnée $3$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04",
      "order": 4,
      "title": "Fonction périodique",
      "summary": "Définir une fonction périodique, reconnaître sa période et réduire son intervalle d’étude.",
      "conceptExplanation": "Soit $T$ un nombre réel strictement positif. Une fonction $f$ est dite périodique de période $T$ lorsque, pour tout $x \\in D_f$ : $x + T \\in D_f$, $x - T \\in D_f$ et $f(x + T) = f(x)$. On dit aussi que $f$ est $T$-périodique.\nExemples : les fonctions cosinus et sinus sont périodiques de période $2\\pi$, et la fonction tangente est périodique de période $\\pi$.\nSi $T$ est une période de $f$, alors pour tout entier relatif non nul $k$, $f(x + kT) = f(x)$. Pour étudier une fonction $T$-périodique, il suffit de l’étudier sur $D_f \\cap [a ; a + T[$, puis de compléter la courbe par les translations de vecteurs $T\\overrightarrow{OI}$ et $-T\\overrightarrow{OI}$.",
      "keyRule": "Périodique de période $T$ : la courbe se répète par translations de vecteur $T\\overrightarrow{OI}$ ; un intervalle de longueur $T$ suffit pour l’étude.",
      "formulas": [
        {
          "name": "Fonction périodique",
          "formula": "f(x + T) = f(x)",
          "note": "Pour tout $x \\in D_f$, avec $T > 0$."
        }
      ],
      "workedExample": {
        "title": "La fonction sinus translatée en fréquence est $\\pi$-périodique (exemple de la leçon)",
        "statement": "Soit $f$ la fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(x) = \\sin(2x)$. Justifie que $f$ est périodique de période $\\pi$.",
        "methodSteps": [
          "L’ensemble de définition est $\\mathbb{R}$ : pour tout $x$, $x + \\pi$ et $x - \\pi$ appartiennent à $\\mathbb{R}$.",
          "On calcule $\\sin(2(x + \\pi)) = \\sin(2x + 2\\pi) = \\sin(2x)$ car la fonction sinus est $2\\pi$-périodique.",
          "Donc $f(x + \\pi) = f(x)$ pour tout réel $x$."
        ],
        "conclusion": "La fonction $f$ est périodique de période $\\pi$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une fonction périodique",
          "stepTheme": "La définition d’une fonction périodique",
          "stepBadge": "La définition d’une fonction périodique",
          "paragraphText": "• Définition : $f$ est périodique de période $T$, avec $T$ strictement positif, lorsque pour tout $x \\in D_f$ : $x + T \\in D_f$, $x - T \\in D_f$ et $f(x + T) = f(x)$.\nOn dit aussi que $f$ est $T$-périodique.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q1",
            "type": "mcq",
            "prompt": "Une fonction $f$ est $T$-périodique si :",
            "options": [
              "$f(x + T) = f(x)$ pour tout $x \\in D_f$, avec les conditions sur $D_f$",
              "$f(T) = 0$",
              "$f(x + T) = -f(x)$ pour tout $x$",
              "$T$ peut être négatif ou nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition de la leçon, avec $T$ strictement positif."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les périodes des fonctions usuelles",
          "stepTheme": "Les périodes des fonctions usuelles",
          "stepBadge": "Les périodes des fonctions usuelles",
          "paragraphText": "• Exemples de la leçon : les fonctions cosinus et sinus sont périodiques de période $2\\pi$.\nLa fonction tangente est périodique de période $\\pi$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q2",
            "type": "mcq",
            "prompt": "D’après la leçon, la fonction tangente est périodique de période :",
            "options": [
              "$2\\pi$",
              "$\\pi$",
              "$\\frac{\\pi}{2}$",
              "$1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La leçon donne $\\pi$ pour la tangente, et $2\\pi$ pour le cosinus et le sinus."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Montrer une périodicité par le calcul",
          "stepTheme": "Montrer une périodicité par le calcul",
          "stepBadge": "Montrer une périodicité par le calcul",
          "paragraphText": "• Méthode de l’exemple : pour $f(x) = \\sin(2x)$, on développe $\\sin(2(x + \\pi))$ en $\\sin(2x + 2\\pi)$.\nLa $2\\pi$-périodicité du sinus donne alors l’égalité avec $f(x)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\sin(2x)$, le calcul de $f(x + \\pi)$ donne :",
            "options": [
              "$\\sin(2x + \\pi)$",
              "$-\\sin(2x)$",
              "$\\sin(2x)$",
              "$2\\sin(x)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On obtient $\\sin(2x + 2\\pi) = \\sin(2x)$ : la période $\\pi$ est justifiée."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les multiples d’une période",
          "stepTheme": "Les multiples d’une période",
          "stepBadge": "Les multiples d’une période",
          "paragraphText": "• Remarque de la leçon : si $T$ est une période de $f$, alors pour tout entier relatif non nul $k$, $f(x + kT) = f(x)$.\nTout multiple non nul de $T$ est donc encore une période de $f$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q4",
            "type": "mcq",
            "prompt": "Si $T$ est une période de $f$ et $k$ un entier relatif non nul, alors :",
            "options": [
              "$f(x + kT) = 0$",
              "$f(x + kT) = f(x)$",
              "$f(x + kT) = -f(x)$",
              "$f(x + kT) = k f(x)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La remarque de la leçon étend la périodicité à tous les multiples entiers non nuls de $T$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Réduire l’intervalle d’étude",
          "stepTheme": "Réduire l’intervalle d’étude",
          "stepBadge": "Réduire l’intervalle d’étude",
          "paragraphText": "• Remarque de la leçon : si $f$ est périodique de période $T$, il suffit de l’étudier sur $D_f \\cap [a ; a + T[$.\nLa courbe est ensuite complétée par les translations de vecteurs $T\\overrightarrow{OI}$ et $-T\\overrightarrow{OI}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q5",
            "type": "mcq",
            "prompt": "Pour une fonction $T$-périodique, il suffit de l’étudier sur :",
            "options": [
              "Un intervalle de longueur $T$, puis compléter par translations",
              "Un seul point",
              "Tout $\\mathbb{R}$ obligatoirement",
              "Un intervalle de longueur $2T$ au minimum"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’étude sur une période suffit, la courbe se répète par translations horizontales."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La période de la fonction de l’exercice 4",
          "stepTheme": "La période de la fonction de l’exercice 4",
          "stepBadge": "La période de la fonction de l’exercice 4",
          "paragraphText": "• Exercice 4 : la fonction $f(x) = \\cos\\left(3x - \\frac{\\pi}{5}\\right)$, définie sur $\\mathbb{R}$, est périodique.\nLe calcul donne $f\\left(x + \\frac{2\\pi}{3}\\right) = \\cos\\left(3x - \\frac{\\pi}{5} + 2\\pi\\right) = f(x)$ grâce à la $2\\pi$-périodicité du cosinus.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q6",
            "type": "mcq",
            "prompt": "La période de la fonction $f(x) = \\cos\\left(3x - \\frac{\\pi}{5}\\right)$ démontrée dans l’exercice 4 est :",
            "options": [
              "$\\frac{2\\pi}{3}$",
              "$2\\pi$",
              "$3$",
              "$\\frac{\\pi}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ajouter $\\frac{2\\pi}{3}$ à $x$ ajoute $2\\pi$ à l’argument du cosinus : $f$ est périodique de période $\\frac{2\\pi}{3}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q1",
          "type": "mcq",
          "prompt": "Une fonction $f$ est $T$-périodique si :",
          "options": [
            "$f(x + T) = f(x)$ pour tout $x \\in D_f$, avec les conditions sur $D_f$",
            "$f(T) = 0$",
            "$f(x + T) = -f(x)$ pour tout $x$",
            "$T$ peut être négatif ou nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition de la leçon, avec $T$ strictement positif."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q2",
          "type": "mcq",
          "prompt": "D’après la leçon, la fonction tangente est périodique de période :",
          "options": [
            "$2\\pi$",
            "$\\pi$",
            "$\\frac{\\pi}{2}$",
            "$1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La leçon donne $\\pi$ pour la tangente, et $2\\pi$ pour le cosinus et le sinus."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\sin(2x)$, le calcul de $f(x + \\pi)$ donne :",
          "options": [
            "$\\sin(2x + \\pi)$",
            "$-\\sin(2x)$",
            "$\\sin(2x)$",
            "$2\\sin(x)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On obtient $\\sin(2x + 2\\pi) = \\sin(2x)$ : la période $\\pi$ est justifiée."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q4",
          "type": "mcq",
          "prompt": "Si $T$ est une période de $f$ et $k$ un entier relatif non nul, alors :",
          "options": [
            "$f(x + kT) = 0$",
            "$f(x + kT) = f(x)$",
            "$f(x + kT) = -f(x)$",
            "$f(x + kT) = k f(x)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La remarque de la leçon étend la périodicité à tous les multiples entiers non nuls de $T$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q5",
          "type": "mcq",
          "prompt": "Pour une fonction $T$-périodique, il suffit de l’étudier sur :",
          "options": [
            "Un intervalle de longueur $T$, puis compléter par translations",
            "Un seul point",
            "Tout $\\mathbb{R}$ obligatoirement",
            "Un intervalle de longueur $2T$ au minimum"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’étude sur une période suffit, la courbe se répète par translations horizontales."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p04_q6",
          "type": "mcq",
          "prompt": "La période de la fonction $f(x) = \\cos\\left(3x - \\frac{\\pi}{5}\\right)$ démontrée dans l’exercice 4 est :",
          "options": [
            "$\\frac{2\\pi}{3}$",
            "$2\\pi$",
            "$3$",
            "$\\frac{\\pi}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ajouter $\\frac{2\\pi}{3}$ à $x$ ajoute $2\\pi$ à l’argument du cosinus : $f$ est périodique de période $\\frac{2\\pi}{3}$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05",
      "order": 5,
      "title": "Asymptote oblique",
      "summary": "Définir une asymptote oblique et la mettre en évidence par une décomposition de la fonction.",
      "conceptExplanation": "Soit $f$ une fonction de courbe représentative $(C_f)$ dans un repère orthogonal, et $a$ et $b$ deux nombres réels avec $a \\neq 0$.\nLorsque $\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$, on dit que la droite d’équation $y = ax + b$ est une asymptote oblique à $(C_f)$ en $+\\infty$ ; la même définition vaut en $-\\infty$.\nMéthode : on décompose $f(x)$ sous la forme $ax + b$ plus un reste qui tend vers $0$ à l’infini, par exemple par division euclidienne pour une fonction rationnelle. La position de la courbe par rapport à l’asymptote se lit ensuite dans le signe de ce reste.",
      "keyRule": "Asymptote oblique : l’écart entre la fonction et une droite affine non horizontale tend vers $0$ à l’infini.",
      "formulas": [
        {
          "name": "Asymptote oblique",
          "formula": "\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0",
          "note": "Avec $a \\neq 0$ ; même définition en $-\\infty$."
        }
      ],
      "workedExample": {
        "title": "L’asymptote oblique de l’exercice 5",
        "statement": "Soit $f$ la fonction rationnelle définie par $f(x) = \\frac{2x^2 + 3x - 1}{x - 1}$. Démontre que la droite d’équation $y = 2x + 5$ est une asymptote à $(C_f)$ en $+\\infty$ et en $-\\infty$.",
        "methodSteps": [
          "Par division euclidienne de $2x^2 + 3x - 1$ par $x - 1$, on obtient $f(x) = 2x + 5 + \\frac{4}{x - 1}$ pour tout $x \\in D_f$.",
          "On calcule l’écart : $f(x) - (2x + 5) = \\frac{4}{x - 1}$.",
          "Cet écart tend vers $0$ en $+\\infty$ et en $-\\infty$."
        ],
        "conclusion": "La droite d’équation $y = 2x + 5$ est une asymptote oblique à $(C_f)$ en $+\\infty$ et en $-\\infty$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La définition d’une asymptote oblique",
          "stepTheme": "La définition d’une asymptote oblique",
          "stepBadge": "La définition d’une asymptote oblique",
          "paragraphText": "• Définition : la droite d’équation $y = ax + b$, avec $a \\neq 0$, est une asymptote oblique à $(C_f)$ en $+\\infty$ lorsque $\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$.\nLa même définition vaut en $-\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q1",
            "type": "mcq",
            "prompt": "La droite d’équation $y = ax + b$ (avec $a \\neq 0$) est une asymptote oblique en $+\\infty$ si :",
            "options": [
              "$\\lim_{x \\to +\\infty} f(x) = b$",
              "$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$",
              "$\\lim_{x \\to a} f(x)$ est infinie",
              "$f(a) = b$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition : l’écart entre la courbe et la droite tend vers $0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Décomposer pour faire apparaître l’asymptote",
          "stepTheme": "Décomposer pour faire apparaître l’asymptote",
          "stepBadge": "Décomposer pour faire apparaître l’asymptote",
          "paragraphText": "• Méthode de l’exercice 5 : la division euclidienne donne $f(x) = 2x + 5 + \\frac{4}{x - 1}$ pour $f(x) = \\frac{2x^2 + 3x - 1}{x - 1}$.\nLa partie affine $2x + 5$ fournit le candidat pour l’asymptote, et le reste $\\frac{4}{x - 1}$ tend vers $0$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q2",
            "type": "mcq",
            "prompt": "Dans l’exercice 5, la décomposition de $f(x) = \\frac{2x^2 + 3x - 1}{x - 1}$ est :",
            "options": [
              "$f(x) = 2x + 5 + \\frac{4}{x - 1}$",
              "$f(x) = 2x - 5 + \\frac{4}{x - 1}$",
              "$f(x) = 2x + 5 + \\frac{-4}{x - 1}$",
              "$f(x) = x + 5 + \\frac{4}{x - 1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est le résultat de la division euclidienne du corrigé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’écart qui tend vers 0",
          "stepTheme": "L’écart qui tend vers 0",
          "stepBadge": "L’écart qui tend vers 0",
          "paragraphText": "• Exemple de l’exercice 5 : $f(x) - (2x + 5) = \\frac{4}{x - 1}$, et $\\lim_{x \\to \\pm\\infty} \\frac{4}{x - 1} = 0$.\nL’asymptote vaut donc aux deux infinis.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q3",
            "type": "mcq",
            "prompt": "Dans l’exercice 5, la droite d’équation $y = 2x + 5$ est asymptote à $(C_f)$ :",
            "options": [
              "En $+\\infty$ seulement",
              "En $-\\infty$ seulement",
              "En $+\\infty$ et en $-\\infty$",
              "En aucun des deux"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé conclut aux deux infinis, car l’écart tend vers $0$ des deux côtés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L’asymptote oblique de l’exercice 8",
          "stepTheme": "L’asymptote oblique de l’exercice 8",
          "stepBadge": "L’asymptote oblique de l’exercice 8",
          "paragraphText": "• Exercice 8 : pour $f(x) = \\frac{x^2 - 3x + 3}{x - 2}$, la division euclidienne donne $f(x) = x - 1 + \\frac{1}{x - 2}$.\nLa droite d’équation $y = x - 1$ est donc asymptote à la courbe en $+\\infty$ et en $-\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q4",
            "type": "mcq",
            "prompt": "Dans l’exercice 8, les réels $a$, $b$ et $c$ tels que $f(x) = ax + b + \\frac{c}{x - 2}$ sont :",
            "options": [
              "$a = 1$, $b = 1$, $c = 1$",
              "$a = 1$, $b = -1$, $c = 1$",
              "$a = -1$, $b = 1$, $c = -1$",
              "$a = 2$, $b = -1$, $c = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé obtient $f(x) = x - 1 + \\frac{1}{x - 2}$ : $a = 1$, $b = -1$ et $c = 1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La position par rapport à l’asymptote",
          "stepTheme": "La position par rapport à l’asymptote",
          "stepBadge": "La position par rapport à l’asymptote",
          "paragraphText": "• Étude de position de l’exercice 8 : $f(x) - (x - 1) = \\frac{1}{x - 2}$, qui est négatif avant $2$ et positif après $2$.\nSur $]-\\infty ; 2[$, la droite est au-dessus de la courbe ; sur $]2 ; +\\infty[$, la courbe est au-dessus de la droite.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice 8, sur l’intervalle $]2 ; +\\infty[$, la position de $(C_f)$ par rapport à son asymptote oblique est :",
            "options": [
              "La courbe est au-dessus de la droite",
              "La courbe est au-dessous de la droite",
              "La courbe est confondue avec la droite",
              "La courbe coupe la droite en tout point"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le reste $\\frac{1}{x - 2}$ est positif après $2$ : la courbe est au-dessus de l’asymptote."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Oblique exige une pente non nulle",
          "stepTheme": "Oblique exige une pente non nulle",
          "stepBadge": "Oblique exige une pente non nulle",
          "paragraphText": "• Piège : la définition d’une asymptote oblique impose $a \\neq 0$.\nSi l’écart tend vers $0$ avec $a = 0$, la droite est horizontale : c’est une asymptote horizontale, pas oblique.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q6",
            "type": "mcq",
            "prompt": "Pourquoi la droite d’équation $y = 2$ n’est-elle pas une asymptote oblique ?",
            "options": [
              "Parce que $2$ est un entier",
              "Parce que sa pente est nulle : c’est une éventuelle asymptote horizontale",
              "Parce qu’elle ne passe pas par l’origine",
              "Parce qu’elle est verticale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Une asymptote oblique a une pente $a$ non nulle ; $y = 2$ est une droite horizontale."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q1",
          "type": "mcq",
          "prompt": "La droite d’équation $y = ax + b$ (avec $a \\neq 0$) est une asymptote oblique en $+\\infty$ si :",
          "options": [
            "$\\lim_{x \\to +\\infty} f(x) = b$",
            "$\\lim_{x \\to +\\infty} [f(x) - (ax + b)] = 0$",
            "$\\lim_{x \\to a} f(x)$ est infinie",
            "$f(a) = b$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition : l’écart entre la courbe et la droite tend vers $0$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q2",
          "type": "mcq",
          "prompt": "Dans l’exercice 5, la décomposition de $f(x) = \\frac{2x^2 + 3x - 1}{x - 1}$ est :",
          "options": [
            "$f(x) = 2x + 5 + \\frac{4}{x - 1}$",
            "$f(x) = 2x - 5 + \\frac{4}{x - 1}$",
            "$f(x) = 2x + 5 + \\frac{-4}{x - 1}$",
            "$f(x) = x + 5 + \\frac{4}{x - 1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est le résultat de la division euclidienne du corrigé."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q3",
          "type": "mcq",
          "prompt": "Dans l’exercice 5, la droite d’équation $y = 2x + 5$ est asymptote à $(C_f)$ :",
          "options": [
            "En $+\\infty$ seulement",
            "En $-\\infty$ seulement",
            "En $+\\infty$ et en $-\\infty$",
            "En aucun des deux"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé conclut aux deux infinis, car l’écart tend vers $0$ des deux côtés."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q4",
          "type": "mcq",
          "prompt": "Dans l’exercice 8, les réels $a$, $b$ et $c$ tels que $f(x) = ax + b + \\frac{c}{x - 2}$ sont :",
          "options": [
            "$a = 1$, $b = 1$, $c = 1$",
            "$a = 1$, $b = -1$, $c = 1$",
            "$a = -1$, $b = 1$, $c = -1$",
            "$a = 2$, $b = -1$, $c = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé obtient $f(x) = x - 1 + \\frac{1}{x - 2}$ : $a = 1$, $b = -1$ et $c = 1$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice 8, sur l’intervalle $]2 ; +\\infty[$, la position de $(C_f)$ par rapport à son asymptote oblique est :",
          "options": [
            "La courbe est au-dessus de la droite",
            "La courbe est au-dessous de la droite",
            "La courbe est confondue avec la droite",
            "La courbe coupe la droite en tout point"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le reste $\\frac{1}{x - 2}$ est positif après $2$ : la courbe est au-dessus de l’asymptote."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p05_q6",
          "type": "mcq",
          "prompt": "Pourquoi la droite d’équation $y = 2$ n’est-elle pas une asymptote oblique ?",
          "options": [
            "Parce que $2$ est un entier",
            "Parce que sa pente est nulle : c’est une éventuelle asymptote horizontale",
            "Parce qu’elle ne passe pas par l’origine",
            "Parce qu’elle est verticale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Une asymptote oblique a une pente $a$ non nulle ; $y = 2$ est une droite horizontale."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06",
      "order": 6,
      "title": "Étude complète d’une fonction et applications",
      "summary": "Mener une étude complète (limites, dérivée, variations, symétries) et l’appliquer à un problème d’optimisation.",
      "conceptExplanation": "Une étude complète suit le plan des exercices de la leçon : ensemble de définition, éléments de symétrie éventuels, limites aux bornes avec interprétation graphique (asymptotes), dérivée et signe de la dérivée, sens de variation et tableau de variation, puis construction de la courbe et de ses asymptotes.\nPour l’exercice 7, $f(x) = \\frac{2x - 1}{x + 1}$ : les limites aux infinis valent $2$ (asymptote horizontale $y = 2$), les limites en $-1$ sont $+\\infty$ à gauche et $-\\infty$ à droite (asymptote verticale $x = -1$), la dérivée $f’(x) = \\frac{3}{(x + 1)^2}$ est strictement positive, donc $f$ est croissante sur chacun des deux intervalles de son domaine ; le tableau de variation se décrit ainsi : sur le premier intervalle, $f$ croît de $2$ vers $+\\infty$, et sur le second, elle croît de $-\\infty$ vers $2$. Le point $A(-1 ; 2)$ est un centre de symétrie de la courbe.\nLa situation complexe applique la même démarche au coût $U(x) = x - 10 + \\frac{900}{x}$ sur $[10 ; 100]$ : la dérivée s’annule en $30$, le coût est décroissant avant $30$ et croissant après, et le minimum du coût, $50$, est atteint pour $30$ ampoules.",
      "keyRule": "Une étude complète enchaîne toujours : domaine, limites, dérivée, variations, tableau, courbe ; l’optimisation se lit sur le tableau de variation.",
      "formulas": [
        {
          "name": "Dérivée de l’exercice 7",
          "formula": "f’(x) = \\frac{3}{(x + 1)^2}"
        },
        {
          "name": "Dérivée du coût de la situation complexe",
          "formula": "U’(x) = 1 - \\frac{900}{x^2}"
        }
      ],
      "workedExample": {
        "title": "Étude complète de la fonction de l’exercice 7",
        "statement": "Soit $f$ définie sur $\\mathbb{R}$ privé de $-1$ par $f(x) = \\frac{2x - 1}{x + 1}$. Étudie $f$ : limites, dérivée, variations et centre de symétrie.",
        "methodSteps": [
          "Limites aux infinis : $\\lim_{x \\to -\\infty} f(x) = \\lim_{x \\to +\\infty} f(x) = 2$, donc la droite d’équation $y = 2$ est une asymptote horizontale.",
          "Limites en $-1$ : $+\\infty$ à gauche et $-\\infty$ à droite, donc la droite d’équation $x = -1$ est une asymptote verticale.",
          "Dérivée : $f’(x) = \\frac{3}{(x + 1)^2}$, strictement positive sur le domaine, donc $f$ est croissante sur chaque intervalle.",
          "Centre de symétrie : la fonction auxiliaire $g(x) = f(x - 1) - 2$ est impaire, donc le point $A(-1 ; 2)$ est un centre de symétrie de la courbe."
        ],
        "conclusion": "Le tableau de variation décrit une fonction croissante de $2$ à $+\\infty$ avant $-1$, puis de $-\\infty$ à $2$ après $-1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le plan d’une étude complète",
          "stepTheme": "Le plan d’une étude complète",
          "stepBadge": "Le plan d’une étude complète",
          "paragraphText": "• Les exercices 6 à 9 de la leçon suivent le même plan : ensemble de définition, symétries éventuelles, limites aux bornes, dérivée, variations et tableau de variation, tangentes éventuelles, puis construction de la courbe.\nChaque étape prépare la suivante : pas de tableau sans le signe de la dérivée.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q1",
            "type": "mcq",
            "prompt": "Dans une étude complète, le sens de variation d’une fonction se déduit :",
            "options": [
              "De la seule valeur en $0$",
              "Du signe de la dérivée",
              "De la parité uniquement",
              "Du nombre d’asymptotes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la démarche constante des exercices : on étudie le signe de $f’$ pour obtenir les variations."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les variations du polynôme de l’exercice 6",
          "stepTheme": "Les variations du polynôme de l’exercice 6",
          "stepBadge": "Les variations du polynôme de l’exercice 6",
          "paragraphText": "• Exercice 6 : pour $f(x) = x^3 - 3x - 1$, on a $f’(x) = 3x^2 - 3 = 3(x^2 - 1)$.\nLe tableau de variation se décrit en mots : $f$ croît de $-\\infty$ à la valeur $1$ atteinte en $-1$, décroît ensuite jusqu’à la valeur $-3$ atteinte en $1$, puis croît vers $+\\infty$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q2",
            "type": "mcq",
            "prompt": "Dans l’exercice 6, la valeur de $f$ au point d’abscisse $-1$, maximum local du tableau, est :",
            "options": [
              "$-3$",
              "$1$",
              "$-1$",
              "$3$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $f(-1) = -1 + 3 - 1 = 1$ : c’est la valeur haute du tableau de variation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La tangente au point d’abscisse 0",
          "stepTheme": "La tangente au point d’abscisse 0",
          "stepBadge": "La tangente au point d’abscisse 0",
          "paragraphText": "• Exercice 6 : la tangente $(T)$ à la courbe au point d’abscisse $0$ a pour équation $y = f(0) + f’(0) \\times x$.\nAvec $f(0) = -1$ et $f’(0) = -3$, on obtient $y = -3x - 1$ ; la position de la courbe par rapport à $(T)$ se lit dans le signe de $f(x) - y = x^3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q3",
            "type": "mcq",
            "prompt": "Dans l’exercice 6, une équation de la tangente à la courbe au point d’abscisse $0$ est :",
            "options": [
              "$y = 3x - 1$",
              "$y = -3x + 1$",
              "$y = -3x - 1$",
              "$y = x - 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé donne $(T) : y = -3x - 1$, à partir de $f(0) = -1$ et $f’(0) = -3$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La dérivée de la fonction de l’exercice 7",
          "stepTheme": "La dérivée de la fonction de l’exercice 7",
          "stepBadge": "La dérivée de la fonction de l’exercice 7",
          "paragraphText": "• Exercice 7 : pour $f(x) = \\frac{2x - 1}{x + 1}$, la dérivée se calcule comme celle d’un quotient.\nLe numérateur du calcul se simplifie en $3$, d’où $f’(x) = \\frac{3}{(x + 1)^2}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = \\frac{2x - 1}{x + 1}$, la dérivée est :",
            "options": [
              "$f’(x) = \\frac{1}{(x + 1)^2}$",
              "$f’(x) = \\frac{3}{(x + 1)^2}$",
              "$f’(x) = \\frac{-3}{(x + 1)^2}$",
              "$f’(x) = \\frac{2x}{(x + 1)^2}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé obtient $f’(x) = \\frac{3}{(x + 1)^2}$, strictement positive sur le domaine."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les extremums de la fonction de l’exercice 8",
          "stepTheme": "Les extremums de la fonction de l’exercice 8",
          "stepBadge": "Les extremums de la fonction de l’exercice 8",
          "paragraphText": "• Exercice 8 : pour $f(x) = \\frac{x^2 - 3x + 3}{x - 2}$, on a $f’(x) = \\frac{x^2 - 4x + 3}{(x - 2)^2}$, du signe de $x^2 - 4x + 3$, qui s’annule en $1$ et en $3$.\nLe tableau de variation se décrit en mots : $f$ croît jusqu’à la valeur $-1$ en $1$, décroît de part et d’autre de l’asymptote verticale $x = 2$, puis croît à partir de la valeur $3$ en $3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q5",
            "type": "mcq",
            "prompt": "Dans l’exercice 8, la valeur de $f$ en $3$, minimum local du tableau, est :",
            "options": [
              "$-1$",
              "$1$",
              "$2$",
              "$3$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On calcule $f(3) = \\frac{9 - 9 + 3}{1} = 3$ : c’est la valeur basse du tableau après l’asymptote."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le minimum du coût dans la situation complexe",
          "stepTheme": "Le minimum du coût dans la situation complexe",
          "stepBadge": "Le minimum du coût dans la situation complexe",
          "paragraphText": "• Situation complexe : le coût de production de $x$ ampoules est $U(x) = x - 10 + \\frac{900}{x}$ sur $[10 ; 100]$, avec $U’(x) = \\frac{(x - 30)(x + 30)}{x^2}$.\nLe tableau de variation montre que $U$ décroît sur $[10 ; 30]$ et croît sur $[30 ; 100]$ : le minimum $50$ est atteint en $30$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q6",
            "type": "mcq",
            "prompt": "D’après la situation complexe, le nombre d’ampoules à fabriquer pour minimiser le coût de production est :",
            "options": [
              "$10$",
              "$50$",
              "$30$",
              "$100$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dérivée s’annule en $30$ et change de signe de moins à plus : le coût minimal est atteint pour $30$ ampoules."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q1",
          "type": "mcq",
          "prompt": "Dans une étude complète, le sens de variation d’une fonction se déduit :",
          "options": [
            "De la seule valeur en $0$",
            "Du signe de la dérivée",
            "De la parité uniquement",
            "Du nombre d’asymptotes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la démarche constante des exercices : on étudie le signe de $f’$ pour obtenir les variations."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q2",
          "type": "mcq",
          "prompt": "Dans l’exercice 6, la valeur de $f$ au point d’abscisse $-1$, maximum local du tableau, est :",
          "options": [
            "$-3$",
            "$1$",
            "$-1$",
            "$3$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $f(-1) = -1 + 3 - 1 = 1$ : c’est la valeur haute du tableau de variation."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q3",
          "type": "mcq",
          "prompt": "Dans l’exercice 6, une équation de la tangente à la courbe au point d’abscisse $0$ est :",
          "options": [
            "$y = 3x - 1$",
            "$y = -3x + 1$",
            "$y = -3x - 1$",
            "$y = x - 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé donne $(T) : y = -3x - 1$, à partir de $f(0) = -1$ et $f’(0) = -3$."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = \\frac{2x - 1}{x + 1}$, la dérivée est :",
          "options": [
            "$f’(x) = \\frac{1}{(x + 1)^2}$",
            "$f’(x) = \\frac{3}{(x + 1)^2}$",
            "$f’(x) = \\frac{-3}{(x + 1)^2}$",
            "$f’(x) = \\frac{2x}{(x + 1)^2}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé obtient $f’(x) = \\frac{3}{(x + 1)^2}$, strictement positive sur le domaine."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q5",
          "type": "mcq",
          "prompt": "Dans l’exercice 8, la valeur de $f$ en $3$, minimum local du tableau, est :",
          "options": [
            "$-1$",
            "$1$",
            "$2$",
            "$3$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On calcule $f(3) = \\frac{9 - 9 + 3}{1} = 3$ : c’est la valeur basse du tableau après l’asymptote."
        },
        {
          "id": "premiere_d_maths_numerique_l09_etude_representation_fonction_p06_q6",
          "type": "mcq",
          "prompt": "D’après la situation complexe, le nombre d’ampoules à fabriquer pour minimiser le coût de production est :",
          "options": [
            "$10$",
            "$50$",
            "$30$",
            "$100$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La dérivée s’annule en $30$ et change de signe de moins à plus : le coût minimal est atteint pour $30$ ampoules."
        }
      ]
    }
  ]
};
