import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Généralités sur les fonctions » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Généralités sur les fonctions » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L03_GENERALITES_FONCTIONS: CurriculumChapter = {
  "id": "premiere_c_maths_numerique_l03_generalites_fonctions",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : Généralités sur les fonctions",
  "summary": "La leçon présente les applications injectives, surjectives et bijectives, la bijection réciproque, puis les compléments sur les fonctions : restriction, opérations, comparaison, composition et représentations graphiques des fonctions associées.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Généralités sur les fonctions » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01",
      "order": 1,
      "title": "Applications et applications injectives",
      "summary": "Définir une application, une image et un antécédent, puis caractériser une application injective.",
      "conceptExplanation": "Une application d'un ensemble $E$ dans un ensemble $F$ est une correspondance qui, à tout élément $x$ de $E$, associe un élément $y$ de $F$. On dit que $y$ est l'image de $x$ par $f$ et on note $y = f(x)$ ; $x$ est un antécédent de $y$ par $f$ ; $E$ est l'ensemble de départ et $F$ l'ensemble d'arrivée.\nUne application $f$ de $E$ dans $F$ est une injection lorsque tout élément de $F$ admet au plus un antécédent par $f$ dans $E$.\nPoint méthode : pour démontrer que $f$ est injective, il suffit de justifier que, pour tout $b$ dans $F$, l'équation $f(x) = b$ admet au plus une solution.\nPropriété : $f$ est une injection si et seulement si, pour tous $a$ et $b$ éléments de $E$, $f(a) = f(b)$ implique $a = b$.",
      "keyRule": "Injective signifie : deux éléments différents ne peuvent pas avoir la même image, donc au plus un antécédent par élément de l'ensemble d'arrivée.",
      "formulas": [
        {
          "name": "Injection",
          "formula": "f(a) = f(b) \\implies a = b"
        }
      ],
      "workedExample": {
        "title": "Une application homographique injective (exercice de fixation)",
        "statement": "On considère l'application $f$ de $\\mathbb{R} \\setminus \\{1\\}$ vers $\\mathbb{R}$ définie par $f(x) = \\frac{2x + 1}{x - 1}$. Justifie que $f$ est injective.",
        "methodSteps": [
          "On prend $a$ et $b$ dans $\\mathbb{R} \\setminus \\{1\\}$ et on suppose $f(a) = f(b)$.",
          "L'égalité $\\frac{2a + 1}{a - 1} = \\frac{2b + 1}{b - 1}$ se simplifie en $3a = 3b$.",
          "On en déduit $a = b$."
        ],
        "conclusion": "D'après la propriété, $f$ est injective."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une application",
          "stepTheme": "Une application",
          "stepBadge": "Une application",
          "paragraphText": "• Définition : une application de $E$ dans $F$ associe à tout élément $x$ de $E$ un élément $y$ de $F$.\n$E$ est l'ensemble de départ et $F$ l'ensemble d'arrivée.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Dans une application $f$ de $E$ dans $F$, tout élément de $E$ a :",
            "options": [
              "Aucune image",
              "Une image dans $F$",
              "Plusieurs images dans $F$",
              "Un élément de $F$ comme antécédent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, à tout élément de $E$ l'application associe un élément de $F$, son image."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Image et antécédent",
          "stepTheme": "Image et antécédent",
          "stepBadge": "Image et antécédent",
          "paragraphText": "• Vocabulaire : $y = f(x)$ se lit « $y$ est l'image de $x$ par $f$ ».\nRéciproquement, $x$ est un antécédent de $y$ par $f$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "Si $y = f(x)$, alors $x$ est :",
            "options": [
              "L'image de $y$",
              "L'ensemble de départ",
              "Un antécédent de $y$ par $f$",
              "L'ensemble d'arrivée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition d'un antécédent donnée par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Une application injective",
          "stepTheme": "Une application injective",
          "stepBadge": "Une application injective",
          "paragraphText": "• Définition : $f$ est injective lorsque tout élément de $F$ admet au plus un antécédent par $f$ dans $E$.\n« Au plus un » signifie : zéro ou un, jamais deux.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Une application injective est une application où chaque élément de l'ensemble d'arrivée admet :",
            "options": [
              "Au moins un antécédent",
              "Exactement deux antécédents",
              "Au plus un antécédent",
              "Une infinité d'antécédents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La définition de l'injection est le « au plus un antécédent »."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Démontrer une injectivité par l'équation",
          "stepTheme": "Démontrer une injectivité par l'équation",
          "stepBadge": "Démontrer une injectivité par l'équation",
          "paragraphText": "• Point méthode : il suffit de montrer que pour tout $b$ dans $F$, l'équation $f(x) = b$ admet au plus une solution.\nExemple de la leçon : pour $f(x) = \\sqrt{x} + 1$ sur les réels positifs ou nuls, l'équation admet au plus une solution, donc $f$ est injective.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "Pour démontrer qu'une application est injective par la méthode de la leçon, on montre que l'équation $f(x) = b$ admet :",
            "options": [
              "Au moins une solution",
              "Au plus une solution",
              "Exactement deux solutions",
              "Aucune solution"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le point méthode de la leçon pour les injections."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La propriété caractéristique de l'injection",
          "stepTheme": "La propriété caractéristique de l'injection",
          "stepBadge": "La propriété caractéristique de l'injection",
          "paragraphText": "• Propriété : $f$ est une injection si et seulement si $f(a) = f(b)$ implique $a = b$ pour tous $a$ et $b$ de $E$.\nC'est la forme utilisée dans l'exercice de fixation.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "La propriété équivalente à l'injectivité de $f$ est :",
            "options": [
              "$f(a) = f(b)$ implique $a = b$",
              "$a = b$ implique $f(a) \\neq f(b)$",
              "$f(a) = a$ pour tout $a$",
              "Tout élément a au moins un antécédent"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Si deux images sont égales, les éléments de départ sont égaux : c'est l'injectivité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre au plus un et au moins un",
          "stepTheme": "Confondre au plus un et au moins un",
          "stepBadge": "Confondre au plus un et au moins un",
          "paragraphText": "• Piège : « au plus un antécédent » caractérise l'injection, « au moins un antécédent » caractérise la surjection.\nLes deux expressions ne doivent pas être échangées.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "Le « au moins un antécédent » pour tout élément de l'ensemble d'arrivée caractérise :",
            "options": [
              "L'injection",
              "La restriction",
              "La surjection",
              "La composée"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition de la surjection, étudiée au point suivant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Dans une application $f$ de $E$ dans $F$, tout élément de $E$ a :",
          "options": [
            "Aucune image",
            "Une image dans $F$",
            "Plusieurs images dans $F$",
            "Un élément de $F$ comme antécédent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, à tout élément de $E$ l'application associe un élément de $F$, son image."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "Si $y = f(x)$, alors $x$ est :",
          "options": [
            "L'image de $y$",
            "L'ensemble de départ",
            "Un antécédent de $y$ par $f$",
            "L'ensemble d'arrivée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition d'un antécédent donnée par la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Une application injective est une application où chaque élément de l'ensemble d'arrivée admet :",
          "options": [
            "Au moins un antécédent",
            "Exactement deux antécédents",
            "Au plus un antécédent",
            "Une infinité d'antécédents"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La définition de l'injection est le « au plus un antécédent »."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "Pour démontrer qu'une application est injective par la méthode de la leçon, on montre que l'équation $f(x) = b$ admet :",
          "options": [
            "Au moins une solution",
            "Au plus une solution",
            "Exactement deux solutions",
            "Aucune solution"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le point méthode de la leçon pour les injections."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "La propriété équivalente à l'injectivité de $f$ est :",
          "options": [
            "$f(a) = f(b)$ implique $a = b$",
            "$a = b$ implique $f(a) \\neq f(b)$",
            "$f(a) = a$ pour tout $a$",
            "Tout élément a au moins un antécédent"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Si deux images sont égales, les éléments de départ sont égaux : c'est l'injectivité."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "Le « au moins un antécédent » pour tout élément de l'ensemble d'arrivée caractérise :",
          "options": [
            "L'injection",
            "La restriction",
            "La surjection",
            "La composée"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition de la surjection, étudiée au point suivant."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02",
      "order": 2,
      "title": "Applications surjectives et bijectives",
      "summary": "Définir une surjection et une bijection, et justifier ces propriétés par le nombre de solutions de l'équation f(x) égal b.",
      "conceptExplanation": "Une application $f$ de $E$ dans $F$ est une surjection lorsque tout élément de $F$ admet au moins un antécédent par $f$ dans $E$.\nPoint méthode : pour démontrer que $f$ est surjective, il suffit de justifier que, pour tout $b$ dans $F$, l'équation $f(x) = b$ admet au moins une solution dans $E$.\nUne application est une bijection lorsque tout élément de $F$ admet un unique antécédent par $f$ dans $E$ ; graphiquement, pour une application d'un intervalle dans un intervalle, toute droite horizontale d'équation $y = b$ coupe la courbe en un unique point.\nPropriété : une application est une bijection si et seulement si elle est à la fois injective et surjective.\nExemple : l'application de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(x) = x + 1$ est bijective.",
      "keyRule": "Unique antécédent pour la bijection : c'est le « au plus un » de l'injection et le « au moins un » de la surjection réunis.",
      "formulas": [
        {
          "name": "Bijection",
          "formula": "f \\text{ injective et surjective }"
        }
      ],
      "workedExample": {
        "title": "Une application carrée surjective (exercice de fixation)",
        "statement": "On considère l'application $f$ de $\\mathbb{R}$ vers $[1 ; +\\infty[$ définie par $f(x) = x^2 + 1$. Justifie que $f$ est surjective.",
        "methodSteps": [
          "Soit $y$ un élément de $[1 ; +\\infty[$ : l'équation $x^2 + 1 = y$ donne $x^2 = y - 1$.",
          "Comme $y - 1 \\geq 0$, cette équation admet des solutions, $\\sqrt{y - 1}$ et $-\\sqrt{y - 1}$."
        ],
        "conclusion": "Tout élément de l'ensemble d'arrivée admet au moins un antécédent : $f$ est surjective."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Une application surjective",
          "stepTheme": "Une application surjective",
          "stepBadge": "Une application surjective",
          "paragraphText": "• Définition : $f$ est surjective lorsque tout élément de $F$ admet au moins un antécédent dans $E$.\nAucun élément de l'ensemble d'arrivée n'est « oublié ».",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "Une application surjective est une application où chaque élément de l'ensemble d'arrivée admet :",
            "options": [
              "Au plus un antécédent",
              "Au moins un antécédent",
              "Aucun antécédent",
              "Un unique antécédent"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition de la surjection est le « au moins un antécédent »."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Démontrer une surjectivité",
          "stepTheme": "Démontrer une surjectivité",
          "stepBadge": "Démontrer une surjectivité",
          "paragraphText": "• Point méthode : on montre que pour tout $b$ dans $F$, l'équation $f(x) = b$ admet au moins une solution dans $E$.\nDans l'exercice de fixation, $x^2 = y - 1$ avec $y \\geq 1$ fournit toujours une solution.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "L'équation associée à la surjectivité doit admettre :",
            "options": [
              "Au plus une solution",
              "Aucune solution",
              "Au moins une solution",
              "Exactement une solution"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Au moins une solution pour chaque valeur visée : c'est la surjectivité."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Une application bijective",
          "stepTheme": "Une application bijective",
          "stepBadge": "Une application bijective",
          "paragraphText": "• Définition : $f$ est bijective lorsque tout élément de $F$ admet un unique antécédent dans $E$.\nExemple de la leçon : $f(x) = x + 1$ de $\\mathbb{R}$ vers $\\mathbb{R}$ est bijective.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "Une application bijective est une application où chaque élément de l'ensemble d'arrivée admet :",
            "options": [
              "Zéro antécédent",
              "Au moins deux antécédents",
              "Au plus un antécédent",
              "Un unique antécédent"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Unique signifie exactement un : c'est la définition de la bijection."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Bijection, injection et surjection",
          "stepTheme": "Bijection, injection et surjection",
          "stepBadge": "Bijection, injection et surjection",
          "paragraphText": "• Propriété : $f$ est une bijection si et seulement si elle est à la fois injective et surjective.\nLes deux vérifications peuvent donc se faire séparément.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "Une application est bijective si et seulement si elle est :",
            "options": [
              "Injective seulement",
              "À la fois injective et surjective",
              "Surjective seulement",
              "Ni injective ni surjective"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la propriété énoncée par la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Une bijection sur un intervalle négatif",
          "stepTheme": "Une bijection sur un intervalle négatif",
          "stepBadge": "Une bijection sur un intervalle négatif",
          "paragraphText": "• Exercice de fixation : $f$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$, définie par $f(x) = x^2$, est bijective.\nPour $y \\geq 0$, l'unique antécédent retenu est $-\\sqrt{y}$, car $x$ doit être négatif ou nul.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "Pour cette application, l'unique antécédent de $y \\geq 0$ est :",
            "options": [
              "$\\sqrt{y}$",
              "$y^2$",
              "$-\\sqrt{y}$",
              "$-y$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L'antécédent positif $\\sqrt{y}$ est hors de l'ensemble de départ : seul $-\\sqrt{y}$ convient."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le rôle de l'ensemble d'arrivée",
          "stepTheme": "Le rôle de l'ensemble d'arrivée",
          "stepBadge": "Le rôle de l'ensemble d'arrivée",
          "paragraphText": "• Piège : la surjectivité dépend de l'ensemble d'arrivée choisi.\nLa même formule peut définir une application surjective ou non selon l'ensemble d'arrivée annoncé : il faut toujours lire les ensembles de l'énoncé.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "La surjectivité d'une application dépend :",
            "options": [
              "Uniquement de sa formule",
              "De l'ensemble d'arrivée annoncé",
              "Uniquement du graphique",
              "Du nombre d'éléments de l'ensemble de départ"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un élément de l'ensemble d'arrivée sans antécédent suffit à faire échouer la surjectivité : tout dépend donc de cet ensemble."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "Une application surjective est une application où chaque élément de l'ensemble d'arrivée admet :",
          "options": [
            "Au plus un antécédent",
            "Au moins un antécédent",
            "Aucun antécédent",
            "Un unique antécédent"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition de la surjection est le « au moins un antécédent »."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "L'équation associée à la surjectivité doit admettre :",
          "options": [
            "Au plus une solution",
            "Aucune solution",
            "Au moins une solution",
            "Exactement une solution"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Au moins une solution pour chaque valeur visée : c'est la surjectivité."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "Une application bijective est une application où chaque élément de l'ensemble d'arrivée admet :",
          "options": [
            "Zéro antécédent",
            "Au moins deux antécédents",
            "Au plus un antécédent",
            "Un unique antécédent"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Unique signifie exactement un : c'est la définition de la bijection."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "Une application est bijective si et seulement si elle est :",
          "options": [
            "Injective seulement",
            "À la fois injective et surjective",
            "Surjective seulement",
            "Ni injective ni surjective"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la propriété énoncée par la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "Pour cette application, l'unique antécédent de $y \\geq 0$ est :",
          "options": [
            "$\\sqrt{y}$",
            "$y^2$",
            "$-\\sqrt{y}$",
            "$-y$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L'antécédent positif $\\sqrt{y}$ est hors de l'ensemble de départ : seul $-\\sqrt{y}$ convient."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "La surjectivité d'une application dépend :",
          "options": [
            "Uniquement de sa formule",
            "De l'ensemble d'arrivée annoncé",
            "Uniquement du graphique",
            "Du nombre d'éléments de l'ensemble de départ"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un élément de l'ensemble d'arrivée sans antécédent suffit à faire échouer la surjectivité : tout dépend donc de cet ensemble."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03",
      "order": 3,
      "title": "Bijection réciproque d'une bijection",
      "summary": "Définir la bijection réciproque, la déterminer sur des exemples et connaître la symétrie des courbes représentatives.",
      "conceptExplanation": "Soit $f$ une bijection de $E$ dans $F$. On appelle bijection réciproque de $f$ l'application de $F$ dans $E$, notée $f^{-1}$, qui, à tout élément de $F$, associe son unique antécédent par $f$ dans $E$.\nRemarque : si $f^{-1}$ est la bijection réciproque de $f$, alors $f$ est la bijection réciproque de $f^{-1}$.\nPropriété : dans un repère orthonormé, les représentations graphiques d'une bijection et de sa bijection réciproque sont symétriques par rapport à la droite d'équation $y = x$, la première bissectrice.\nExemple : pour $f$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$ définie par $f(x) = x^2$, la réciproque est définie par $f^{-1}(x) = -\\sqrt{x}$.",
      "keyRule": "La réciproque échange les rôles des ensembles de départ et d'arrivée : elle renvoie chaque image vers son unique antécédent.",
      "formulas": [
        {
          "name": "Bijection réciproque",
          "formula": "f^{-1} \\text{ associe à chaque élément de } F \\text{ son unique antécédent par } f"
        }
      ],
      "workedExample": {
        "title": "Réciproque de la racine carrée (exercice de fixation)",
        "statement": "Soit l'application bijective $f$ de $\\mathbb{R}_+$ vers $\\mathbb{R}_+$ définie par $f(x) = \\sqrt{x}$. Détermine sa bijection réciproque.",
        "methodSteps": [
          "Pour $b$ dans $\\mathbb{R}_+$, l'équation $\\sqrt{x} = b$ donne $x = b^2$.",
          "L'unique antécédent de $b$ est donc $b^2$."
        ],
        "conclusion": "La réciproque est l'application de $\\mathbb{R}_+$ vers $\\mathbb{R}_+$ qui à $x$ associe $x^2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La bijection réciproque",
          "stepTheme": "La bijection réciproque",
          "stepBadge": "La bijection réciproque",
          "paragraphText": "• Définition : la bijection réciproque $f^{-1}$ associe à tout élément de $F$ son unique antécédent par $f$ dans $E$.\nElle va donc de $F$ vers $E$, en sens inverse de $f$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "La bijection réciproque $f^{-1}$ va :",
            "options": [
              "De $E$ vers $F$",
              "De $F$ vers $E$",
              "De $E$ vers $E$",
              "De $F$ vers $F$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La réciproque échange départ et arrivée : elle est définie de $F$ vers $E$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Réciproque du carré sur les négatifs",
          "stepTheme": "Réciproque du carré sur les négatifs",
          "stepBadge": "Réciproque du carré sur les négatifs",
          "paragraphText": "• Exemple de la leçon : pour $f(x) = x^2$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$, la réciproque envoie $x$ sur $-\\sqrt{x}$.\nLe signe moins vient de l'ensemble d'arrivée de la réciproque, formé de réels négatifs ou nuls.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "Pour cet exemple, $f^{-1}(x)$ est égal à :",
            "options": [
              "$\\sqrt{x}$",
              "$x^2$",
              "$-x$",
              "$-\\sqrt{x}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L'antécédent d'un réel positif ou nul par ce carré restreint aux négatifs est $-\\sqrt{x}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La symétrie des courbes",
          "stepTheme": "La symétrie des courbes",
          "stepBadge": "La symétrie des courbes",
          "paragraphText": "• Propriété : dans un repère orthonormé, les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la première bissectrice.\nCette droite a pour équation $y = x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite d'équation :",
            "options": [
              "$y = 0$",
              "$y = x$",
              "$x = 0$",
              "$y = -x$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La droite de symétrie est la première bissectrice, d'équation $y = x$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Réciproque de la racine carrée",
          "stepTheme": "Réciproque de la racine carrée",
          "stepBadge": "Réciproque de la racine carrée",
          "paragraphText": "• Exercice de fixation : la réciproque de $f(x) = \\sqrt{x}$ sur $\\mathbb{R}_+$ est la fonction carré.\nEn effet, l'unique antécédent de $b \\geq 0$ est $b^2$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "La bijection réciproque de $x \\mapsto \\sqrt{x}$ sur $\\mathbb{R}_+$ est :",
            "options": [
              "$x \\mapsto x^2$",
              "$x \\mapsto -\\sqrt{x}$",
              "$x \\mapsto \\frac{1}{x}$",
              "$x \\mapsto x + 1$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Élever au carré défait la racine carrée sur les réels positifs ou nuls."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La réciproque de la réciproque",
          "stepTheme": "La réciproque de la réciproque",
          "stepBadge": "La réciproque de la réciproque",
          "paragraphText": "• Remarque de la leçon : $f$ est la bijection réciproque de $f^{-1}$.\nAppliquer deux fois le passage à la réciproque ramène donc à l'application de départ.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "La bijection réciproque de $f^{-1}$ est :",
            "options": [
              "$f^{-1}$ elle-même",
              "L'application identique",
              "$f$",
              "Une application sans rapport"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Chacune des deux applications est la réciproque de l'autre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La réciproque n'existe que pour une bijection",
          "stepTheme": "La réciproque n'existe que pour une bijection",
          "stepBadge": "La réciproque n'existe que pour une bijection",
          "paragraphText": "• Piège : la notation $f^{-1}$ de la leçon désigne la bijection réciproque, qui n'existe que si $f$ est bijective.\nSans antécédent unique pour chaque élément, il n'y a pas de réciproque.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "La bijection réciproque d'une application n'est définie que si l'application est :",
            "options": [
              "Injective seulement",
              "Surjective seulement",
              "Bijective",
              "Définie sur $\\mathbb{R}$ entier"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Il faut l'unicité de l'antécédent, c'est-à-dire la bijectivité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "La bijection réciproque $f^{-1}$ va :",
          "options": [
            "De $E$ vers $F$",
            "De $F$ vers $E$",
            "De $E$ vers $E$",
            "De $F$ vers $F$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La réciproque échange départ et arrivée : elle est définie de $F$ vers $E$."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "Pour cet exemple, $f^{-1}(x)$ est égal à :",
          "options": [
            "$\\sqrt{x}$",
            "$x^2$",
            "$-x$",
            "$-\\sqrt{x}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L'antécédent d'un réel positif ou nul par ce carré restreint aux négatifs est $-\\sqrt{x}$."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite d'équation :",
          "options": [
            "$y = 0$",
            "$y = x$",
            "$x = 0$",
            "$y = -x$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La droite de symétrie est la première bissectrice, d'équation $y = x$."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "La bijection réciproque de $x \\mapsto \\sqrt{x}$ sur $\\mathbb{R}_+$ est :",
          "options": [
            "$x \\mapsto x^2$",
            "$x \\mapsto -\\sqrt{x}$",
            "$x \\mapsto \\frac{1}{x}$",
            "$x \\mapsto x + 1$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Élever au carré défait la racine carrée sur les réels positifs ou nuls."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "La bijection réciproque de $f^{-1}$ est :",
          "options": [
            "$f^{-1}$ elle-même",
            "L'application identique",
            "$f$",
            "Une application sans rapport"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Chacune des deux applications est la réciproque de l'autre."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "La bijection réciproque d'une application n'est définie que si l'application est :",
          "options": [
            "Injective seulement",
            "Surjective seulement",
            "Bijective",
            "Définie sur $\\mathbb{R}$ entier"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Il faut l'unicité de l'antécédent, c'est-à-dire la bijectivité."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04",
      "order": 4,
      "title": "Restriction et opérations sur les fonctions",
      "summary": "Définir la restriction d'une fonction et les opérations somme, produit et quotient, avec leurs ensembles de définition.",
      "conceptExplanation": "Restriction : soit $f$ une fonction de $E$ vers $F$ et $A$ une partie non vide de l'ensemble de définition de $f$. On appelle restriction de $f$ à $A$ l'application qui, à tout $x$ de $A$, associe $f(x)$.\nExemple de la leçon : pour $f$ définie par $f(x) = x + 1$ si $x \\leq 1$ et $f(x) = \\sqrt{x} + 3$ si $x > 1$, la fonction $g$ définie sur $]-\\infty ; 1]$ par $g(x) = x + 1$ est la restriction de $f$ à cet intervalle.\nOpérations : pour deux fonctions $f$ et $g$ de $\\mathbb{R}$ vers $\\mathbb{R}$, la somme et le produit ont pour ensemble de définition l'intersection des deux ensembles de définition ; le quotient exige en plus que $g(x) \\neq 0$. Les expressions sont $(f + g)(x) = f(x) + g(x)$, $(fg)(x) = f(x) \\times g(x)$ et le quotient est le rapport des deux valeurs.",
      "keyRule": "Restriction : on garde la même règle de calcul, mais sur une partie seulement de l'ensemble de définition.",
      "formulas": [
        {
          "name": "Ensemble de définition d'une somme",
          "formula": "D_{f+g} = D_f \\cap D_g"
        },
        {
          "name": "Produit de deux fonctions",
          "formula": "(fg)(x) = f(x) \\times g(x)"
        }
      ],
      "workedExample": {
        "title": "Le produit de deux fonctions (exemple de la leçon)",
        "statement": "On considère $f(x) = \\frac{x + 1}{x - 1}$ et $g(x) = x - 1$. Détermine l'ensemble de définition du produit $fg$ et son expression.",
        "methodSteps": [
          "Les ensembles de définition sont $D_f = \\mathbb{R} \\setminus \\{1\\}$ et $D_g = \\mathbb{R}$ : leur intersection est $\\mathbb{R} \\setminus \\{1\\}$.",
          "Pour tout $x$ de cet ensemble, $(fg)(x) = f(x) g(x)$, et le facteur $x - 1$ se simplifie."
        ],
        "conclusion": "Le produit est défini sur $\\mathbb{R} \\setminus \\{1\\}$ et $(fg)(x) = x + 1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La restriction d'une fonction",
          "stepTheme": "La restriction d'une fonction",
          "stepBadge": "La restriction d'une fonction",
          "paragraphText": "• Définition : la restriction de $f$ à une partie non vide $A$ de son ensemble de définition associe à tout $x$ de $A$ la valeur $f(x)$.\nSeul le domaine change, pas la règle de calcul.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "La restriction d'une fonction à $A$ change :",
            "options": [
              "La règle de calcul",
              "L'ensemble sur lequel on l'applique",
              "Les images des points de $A$",
              "Le nom de la fonction uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La restriction garde $f(x)$ pour les $x$ de $A$ et ignore les autres valeurs."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Une restriction sur un intervalle",
          "stepTheme": "Une restriction sur un intervalle",
          "stepBadge": "Une restriction sur un intervalle",
          "paragraphText": "• Exemple de la leçon : $g$ définie sur $]-\\infty ; 1]$ par $g(x) = x + 1$ est la restriction de la fonction $f$ définie par morceaux.\nSur cet intervalle, $f$ coïncide avec la formule $x + 1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "Dans cet exemple, $g$ est la restriction de $f$ à :",
            "options": [
              "$]1 ; +\\infty[$",
              "$\\mathbb{R}$ entier",
              "$]-\\infty ; 1]$",
              "$\\{1\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est sur $]-\\infty ; 1]$ que la formule de $f$ est $x + 1$, d'où la restriction écrite dans la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'ensemble de définition d'une somme",
          "stepTheme": "L'ensemble de définition d'une somme",
          "stepBadge": "L'ensemble de définition d'une somme",
          "paragraphText": "• Définition du tableau de la leçon : la somme $f + g$ est définie sur l'intersection des ensembles de définition de $f$ et de $g$.\nIl en va de même pour le produit $fg$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "L'ensemble de définition de $f + g$ est :",
            "options": [
              "La réunion des deux ensembles",
              "$D_f$ seulement",
              "L'intersection de $D_f$ et $D_g$",
              "$D_g$ seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une somme n'est calculable qu'aux points où les deux fonctions sont définies."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le cas du quotient",
          "stepTheme": "Le cas du quotient",
          "stepBadge": "Le cas du quotient",
          "paragraphText": "• Définition : le quotient de $f$ par $g$ exige, en plus de l'intersection des ensembles de définition, que $g(x) \\neq 0$.\nLa leçon note $D$ l'ensemble des réels où $g$ ne s'annule pas.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Pour le quotient de $f$ par $g$, la condition supplémentaire est :",
            "options": [
              "$f(x) \\neq 0$",
              "$g(x) \\neq 0$",
              "$x \\neq 0$",
              "$f(x) = g(x)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On ne peut pas diviser par $g(x)$ si $g(x)$ vaut zéro."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le produit de l'exemple",
          "stepTheme": "Le produit de l'exemple",
          "stepBadge": "Le produit de l'exemple",
          "paragraphText": "• Exemple de la leçon : avec $f(x) = \\frac{x + 1}{x - 1}$ et $g(x) = x - 1$, le produit vaut $x + 1$ sur son domaine.\nLe domaine reste $\\mathbb{R} \\setminus \\{1\\}$, même après simplification.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "Après simplification, le produit $fg$ de l'exemple est défini sur :",
            "options": [
              "$\\mathbb{R}$ entier",
              "$\\mathbb{R} \\setminus \\{0\\}$",
              "$\\mathbb{R} \\setminus \\{1\\}$",
              "$\\{1\\}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La simplification ne rend pas la valeur $1$ admissible : le domaine reste celui de l'intersection."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Simplifier ne change pas le domaine",
          "stepTheme": "Simplifier ne change pas le domaine",
          "stepBadge": "Simplifier ne change pas le domaine",
          "paragraphText": "• Piège : simplifier l'expression d'un produit ou d'un quotient ne fait pas disparaître les valeurs interdites du départ.\nL'ensemble de définition se détermine avant la simplification.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "Après simplification d'une expression, les valeurs interdites initiales :",
            "options": [
              "Disparaissent",
              "Deviennent des solutions",
              "Restent interdites",
              "Sont doublées"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le domaine est celui des fonctions de départ, pas celui de l'expression simplifiée."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "La restriction d'une fonction à $A$ change :",
          "options": [
            "La règle de calcul",
            "L'ensemble sur lequel on l'applique",
            "Les images des points de $A$",
            "Le nom de la fonction uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La restriction garde $f(x)$ pour les $x$ de $A$ et ignore les autres valeurs."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "Dans cet exemple, $g$ est la restriction de $f$ à :",
          "options": [
            "$]1 ; +\\infty[$",
            "$\\mathbb{R}$ entier",
            "$]-\\infty ; 1]$",
            "$\\{1\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est sur $]-\\infty ; 1]$ que la formule de $f$ est $x + 1$, d'où la restriction écrite dans la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "L'ensemble de définition de $f + g$ est :",
          "options": [
            "La réunion des deux ensembles",
            "$D_f$ seulement",
            "L'intersection de $D_f$ et $D_g$",
            "$D_g$ seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une somme n'est calculable qu'aux points où les deux fonctions sont définies."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Pour le quotient de $f$ par $g$, la condition supplémentaire est :",
          "options": [
            "$f(x) \\neq 0$",
            "$g(x) \\neq 0$",
            "$x \\neq 0$",
            "$f(x) = g(x)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On ne peut pas diviser par $g(x)$ si $g(x)$ vaut zéro."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "Après simplification, le produit $fg$ de l'exemple est défini sur :",
          "options": [
            "$\\mathbb{R}$ entier",
            "$\\mathbb{R} \\setminus \\{0\\}$",
            "$\\mathbb{R} \\setminus \\{1\\}$",
            "$\\{1\\}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La simplification ne rend pas la valeur $1$ admissible : le domaine reste celui de l'intersection."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "Après simplification d'une expression, les valeurs interdites initiales :",
          "options": [
            "Disparaissent",
            "Deviennent des solutions",
            "Restent interdites",
            "Sont doublées"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le domaine est celui des fonctions de départ, pas celui de l'expression simplifiée."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05",
      "order": 5,
      "title": "Comparaison de deux fonctions",
      "summary": "Comparer deux fonctions sur un intervalle, par la différence de leurs expressions ou par la position relative de leurs courbes.",
      "conceptExplanation": "Soient $I$ un intervalle de $\\mathbb{R}$ et $f$ et $g$ deux fonctions données sur $I$. On dit que $f$ est inférieure ou égale à $g$ sur $I$, et on note $f \\leq g$ sur $I$, lorsque pour tout $x$ de $I$, $f(x) \\leq g(x)$. De même, $f \\geq g$ sur $I$ lorsque $f(x) \\geq g(x)$ pour tout $x$ de $I$.\nPoint méthode algébrique : on calcule $f(x) - g(x)$ pour tout $x$ de $I$ et on étudie son signe : s'il est négatif ou nul, alors $f \\leq g$ sur $I$ ; s'il est positif ou nul, alors $f \\geq g$ sur $I$.\nPoint méthode graphique : si la courbe de $f$ est au-dessous de celle de $g$ sur $I$, alors $f \\leq g$ sur $I$ ; si elle est au-dessus, alors $f \\geq g$ sur $I$.",
      "keyRule": "Comparer deux fonctions sur un intervalle, c'est décider du signe de leur différence sur tout cet intervalle.",
      "formulas": [
        {
          "name": "Comparaison sur I",
          "formula": "f \\leq g \\text{ sur } I \\text{ si } f(x) \\leq g(x) \\text{ pour tout } x \\text{ de } I"
        }
      ],
      "workedExample": {
        "title": "Comparer un carré et une expression du premier degré (exercice de fixation)",
        "statement": "Justifie que, pour tout réel $x$, $x^2 + 1 \\geq 2x$.",
        "methodSteps": [
          "On forme la différence : $x^2 + 1 - 2x = x^2 - 2x + 1$.",
          "Cette différence se factorise en $(x - 1)^2$, qui est positif ou nul.",
          "La différence est donc positive ou nulle pour tout réel $x$."
        ],
        "conclusion": "Pour tout réel $x$, $x^2 + 1 \\geq 2x$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Être inférieure ou égale sur un intervalle",
          "stepTheme": "Être inférieure ou égale sur un intervalle",
          "stepBadge": "Être inférieure ou égale sur un intervalle",
          "paragraphText": "• Définition : $f \\leq g$ sur $I$ lorsque $f(x) \\leq g(x)$ pour tout élément $x$ de $I$.\nLa comparaison porte sur tout l'intervalle, pas sur un seul point.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q1",
            "type": "mcq",
            "prompt": "$f \\leq g$ sur $I$ signifie que l'inégalité $f(x) \\leq g(x)$ vaut :",
            "options": [
              "Pour un seul $x$ de $I$",
              "Pour tout $x$ de $I$",
              "Pour aucun $x$ de $I$",
              "Seulement aux bornes de $I$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition exige l'inégalité pour tout élément de l'intervalle."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Comparer par la différence",
          "stepTheme": "Comparer par la différence",
          "stepBadge": "Comparer par la différence",
          "paragraphText": "• Point méthode : on calcule $f(x) - g(x)$ et on étudie son signe sur $I$.\nSi cette différence est négative ou nulle sur $I$, alors $f \\leq g$ sur $I$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q2",
            "type": "mcq",
            "prompt": "Si $f(x) - g(x) \\leq 0$ pour tout $x$ de $I$, alors sur $I$ :",
            "options": [
              "$f \\geq g$",
              "$f = g$",
              "$f \\leq g$",
              "On ne peut rien conclure"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une différence négative ou nulle signifie $f(x) \\leq g(x)$ partout sur $I$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Comparer par les courbes",
          "stepTheme": "Comparer par les courbes",
          "stepBadge": "Comparer par les courbes",
          "paragraphText": "• Point méthode graphique : si la courbe de $f$ est au-dessous de celle de $g$ sur $I$, alors $f \\leq g$ sur $I$.\nSi elle est au-dessus, alors $f \\geq g$ sur $I$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q3",
            "type": "mcq",
            "prompt": "Si la courbe de $f$ est au-dessus de celle de $g$ sur $I$, alors sur $I$ :",
            "options": [
              "$f \\leq g$",
              "$f \\geq g$",
              "$f = g$",
              "Les fonctions ne sont pas comparables"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Être au-dessus signifie des valeurs plus grandes : $f \\geq g$ sur $I$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La comparaison de l'exercice de fixation",
          "stepTheme": "La comparaison de l'exercice de fixation",
          "stepBadge": "La comparaison de l'exercice de fixation",
          "paragraphText": "• Exercice de fixation : $x^2 + 1 - 2x$ se factorise en un carré, donc est positif ou nul.\nOn en déduit la comparaison cherchée pour tout réel $x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q4",
            "type": "mcq",
            "prompt": "Pour tout réel $x$, la comparaison démontrée dans l'exercice est :",
            "options": [
              "$x^2 + 1 \\leq 2x$",
              "$x^2 + 1 = 2x$",
              "$x^2 + 1 \\geq 2x$",
              "$x^2 + 1 < 2x$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La différence est un carré, positif ou nul, donc $x^2 + 1 \\geq 2x$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Le signe d'un carré",
          "stepTheme": "Le signe d'un carré",
          "stepBadge": "Le signe d'un carré",
          "paragraphText": "• Propriété utilisée : un carré $(x - 1)^2$ est toujours positif ou nul.\nC'est ce qui rend la différence positive ou nulle sans tableau de signes compliqué.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q5",
            "type": "mcq",
            "prompt": "Pour tout réel $x$, le signe de $(x - 1)^2$ est :",
            "options": [
              "Toujours négatif",
              "Positif ou nul",
              "Négatif ou nul",
              "Alterné"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un carré réel est toujours positif ou nul."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Un seul point ne suffit pas",
          "stepTheme": "Un seul point ne suffit pas",
          "stepBadge": "Un seul point ne suffit pas",
          "paragraphText": "• Piège : vérifier une inégalité entre deux fonctions en un seul point ne compare pas les fonctions sur un intervalle.\nLa définition exige la vérification pour tout $x$ de l'intervalle considéré.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q6",
            "type": "mcq",
            "prompt": "Pour affirmer $f \\leq g$ sur $I$, il faut vérifier l'inégalité :",
            "options": [
              "En un point bien choisi",
              "Aux bornes seulement",
              "Pour tout point de $I$",
              "Sur un autre intervalle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La comparaison sur $I$ est une propriété valable en chaque point de $I$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q1",
          "type": "mcq",
          "prompt": "$f \\leq g$ sur $I$ signifie que l'inégalité $f(x) \\leq g(x)$ vaut :",
          "options": [
            "Pour un seul $x$ de $I$",
            "Pour tout $x$ de $I$",
            "Pour aucun $x$ de $I$",
            "Seulement aux bornes de $I$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition exige l'inégalité pour tout élément de l'intervalle."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q2",
          "type": "mcq",
          "prompt": "Si $f(x) - g(x) \\leq 0$ pour tout $x$ de $I$, alors sur $I$ :",
          "options": [
            "$f \\geq g$",
            "$f = g$",
            "$f \\leq g$",
            "On ne peut rien conclure"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une différence négative ou nulle signifie $f(x) \\leq g(x)$ partout sur $I$."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q3",
          "type": "mcq",
          "prompt": "Si la courbe de $f$ est au-dessus de celle de $g$ sur $I$, alors sur $I$ :",
          "options": [
            "$f \\leq g$",
            "$f \\geq g$",
            "$f = g$",
            "Les fonctions ne sont pas comparables"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Être au-dessus signifie des valeurs plus grandes : $f \\geq g$ sur $I$."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q4",
          "type": "mcq",
          "prompt": "Pour tout réel $x$, la comparaison démontrée dans l'exercice est :",
          "options": [
            "$x^2 + 1 \\leq 2x$",
            "$x^2 + 1 = 2x$",
            "$x^2 + 1 \\geq 2x$",
            "$x^2 + 1 < 2x$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La différence est un carré, positif ou nul, donc $x^2 + 1 \\geq 2x$."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q5",
          "type": "mcq",
          "prompt": "Pour tout réel $x$, le signe de $(x - 1)^2$ est :",
          "options": [
            "Toujours négatif",
            "Positif ou nul",
            "Négatif ou nul",
            "Alterné"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Un carré réel est toujours positif ou nul."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p05_q6",
          "type": "mcq",
          "prompt": "Pour affirmer $f \\leq g$ sur $I$, il faut vérifier l'inégalité :",
          "options": [
            "En un point bien choisi",
            "Aux bornes seulement",
            "Pour tout point de $I$",
            "Sur un autre intervalle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La comparaison sur $I$ est une propriété valable en chaque point de $I$."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06",
      "order": 6,
      "title": "Composition de fonctions",
      "summary": "Définir la composée de deux fonctions, déterminer son ensemble de définition et expliciter son expression.",
      "conceptExplanation": "Soient $f$ une fonction de $E$ vers $F$ et $g$ une fonction de $F$ vers $G$. On appelle composée de $f$ par $g$ la fonction de $E$ vers $G$ notée $g \\circ f$ et définie par $g \\circ f(x) = g[f(x)]$.\nEnsemble de définition : $x$ appartient au domaine de $g \\circ f$ si et seulement si $x$ appartient au domaine de $f$ et $f(x)$ appartient au domaine de $g$.\nPropriété : si $f$ est une bijection de $E$ dans $F$ et $f^{-1}$ sa bijection réciproque, alors la composée de $f^{-1}$ par $f$ est l'application identique de $E$, et la composée de $f$ par $f^{-1}$ est l'application identique de $F$.",
      "keyRule": "Dans $g \\circ f$, on applique d'abord $f$, puis $g$ au résultat : l'ordre de lecture est l'inverse de l'ordre d'application.",
      "formulas": [
        {
          "name": "Composée",
          "formula": "g \\circ f(x) = g[f(x)]"
        },
        {
          "name": "Condition de domaine",
          "formula": "x \\in D_{g \\circ f} \\iff x \\in D_f \\text{ et } f(x) \\in D_g"
        }
      ],
      "workedExample": {
        "title": "Composer deux fonctions rationnelles (exercice de fixation)",
        "statement": "Soient $f(x) = \\frac{1}{x^2}$ et $g(x) = \\frac{x + 2}{x - 1}$. Détermine l'ensemble de définition de $g \\circ f$ et explicite $g \\circ f(x)$.",
        "methodSteps": [
          "Les domaines sont $D_f = \\mathbb{R} \\setminus \\{0\\}$ et $D_g = \\mathbb{R} \\setminus \\{1\\}$.",
          "La condition $f(x) \\neq 1$ donne $x^2 \\neq 1$, donc $x \\neq -1$ et $x \\neq 1$ : le domaine est $\\mathbb{R}$ privé de $-1$, $0$ et $1$.",
          "On remplace $x$ par $f(x)$ dans $g$ et on réduit : le numérateur devient $1 + 2x^2$ et le dénominateur $1 - x^2$."
        ],
        "conclusion": "$g \\circ f(x) = \\frac{1 + 2x^2}{1 - x^2}$ sur ce domaine."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La composée de deux fonctions",
          "stepTheme": "La composée de deux fonctions",
          "stepBadge": "La composée de deux fonctions",
          "paragraphText": "• Définition : la composée de $f$ par $g$ est notée $g \\circ f$ et définie par $g \\circ f(x) = g[f(x)]$.\nOn applique donc $f$ en premier, puis $g$ au résultat.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q1",
            "type": "mcq",
            "prompt": "La composée $g \\circ f$ est définie par :",
            "options": [
              "$f[g(x)]$",
              "$g[f(x)]$",
              "$f(x) \\times g(x)$",
              "$f(x) + g(x)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est $g$ appliquée à $f(x)$ : $g \\circ f(x) = g[f(x)]$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Le domaine d'une composée",
          "stepTheme": "Le domaine d'une composée",
          "stepBadge": "Le domaine d'une composée",
          "paragraphText": "• Règle : $x$ est dans le domaine de $g \\circ f$ si $x$ est dans le domaine de $f$ et si $f(x)$ est dans le domaine de $g$.\nLes deux conditions doivent être réunies.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q2",
            "type": "mcq",
            "prompt": "$x$ appartient au domaine de $g \\circ f$ si et seulement si :",
            "options": [
              "$x$ est dans le domaine de $g$ seulement",
              "$x$ est dans le domaine de $f$ et $f(x)$ est dans le domaine de $g$",
              "$x$ est différent de zéro",
              "$f(x)$ est dans le domaine de $f$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la double condition énoncée par la leçon."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Le domaine de la composée de l'exercice",
          "stepTheme": "Le domaine de la composée de l'exercice",
          "stepBadge": "Le domaine de la composée de l'exercice",
          "paragraphText": "• Exercice de fixation : avec $f(x) = \\frac{1}{x^2}$ et $g(x) = \\frac{x + 2}{x - 1}$, il faut $x \\neq 0$ et $f(x) \\neq 1$.\nLa seconde condition exclut de plus $-1$ et $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q3",
            "type": "mcq",
            "prompt": "Le domaine de cette composée est $\\mathbb{R}$ privé de :",
            "options": [
              "$0$ seulement",
              "$1$ seulement",
              "$-1$, $0$ et $1$",
              "$-1$ seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les valeurs $-1$, $0$ et $1$ sont toutes exclues par les deux conditions réunies."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'expression de la composée de l'exercice",
          "stepTheme": "L'expression de la composée de l'exercice",
          "stepBadge": "L'expression de la composée de l'exercice",
          "paragraphText": "• Calcul de l'exercice : en remplaçant $x$ par $\\frac{1}{x^2}$ dans $g$, puis en réduisant au même dénominateur, on obtient une fraction en $x^2$.\nLe résultat donné par la leçon est $\\frac{1 + 2x^2}{1 - x^2}$, sous une forme équivalente.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q4",
            "type": "mcq",
            "prompt": "Pour cet exercice, $g \\circ f(x)$ est égal à :",
            "options": [
              "$\\frac{1 + 2x^2}{1 - x^2}$",
              "$\\frac{x + 2}{x - 1}$",
              "$\\frac{1}{x^2}$",
              "$\\frac{2x^2}{x^2 + 1}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le résultat de la substitution et de la réduction effectuées dans la correction de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Composée d'une bijection et de sa réciproque",
          "stepTheme": "Composée d'une bijection et de sa réciproque",
          "stepBadge": "Composée d'une bijection et de sa réciproque",
          "paragraphText": "• Propriété : la composée d'une bijection et de sa réciproque, dans un sens ou dans l'autre, est l'application identique.\nExemple de la leçon : avec la racine carrée et le carré sur $\\mathbb{R}_+$, chaque composée renvoie $x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q5",
            "type": "mcq",
            "prompt": "La composée de $f^{-1}$ par $f$ est :",
            "options": [
              "La fonction nulle",
              "L'application identique de l'ensemble de départ",
              "La fonction carré",
              "$f$ elle-même"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Revenir par la réciproque après $f$ redonne l'élément de départ : c'est l'identité."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L'ordre des fonctions dans une composée",
          "stepTheme": "L'ordre des fonctions dans une composée",
          "stepBadge": "L'ordre des fonctions dans une composée",
          "paragraphText": "• Piège : $g \\circ f$ et $f \\circ g$ ne sont en général pas égales.\nIl faut appliquer en premier la fonction écrite à droite, celle qui est la plus proche de $x$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q6",
            "type": "mcq",
            "prompt": "Dans $g \\circ f(x)$, la fonction appliquée en premier est :",
            "options": [
              "$g$",
              "$f$",
              "Les deux en même temps",
              "Aucune des deux"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule d'abord $f(x)$, puis on applique $g$ au résultat."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q1",
          "type": "mcq",
          "prompt": "La composée $g \\circ f$ est définie par :",
          "options": [
            "$f[g(x)]$",
            "$g[f(x)]$",
            "$f(x) \\times g(x)$",
            "$f(x) + g(x)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est $g$ appliquée à $f(x)$ : $g \\circ f(x) = g[f(x)]$."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q2",
          "type": "mcq",
          "prompt": "$x$ appartient au domaine de $g \\circ f$ si et seulement si :",
          "options": [
            "$x$ est dans le domaine de $g$ seulement",
            "$x$ est dans le domaine de $f$ et $f(x)$ est dans le domaine de $g$",
            "$x$ est différent de zéro",
            "$f(x)$ est dans le domaine de $f$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la double condition énoncée par la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q3",
          "type": "mcq",
          "prompt": "Le domaine de cette composée est $\\mathbb{R}$ privé de :",
          "options": [
            "$0$ seulement",
            "$1$ seulement",
            "$-1$, $0$ et $1$",
            "$-1$ seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les valeurs $-1$, $0$ et $1$ sont toutes exclues par les deux conditions réunies."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q4",
          "type": "mcq",
          "prompt": "Pour cet exercice, $g \\circ f(x)$ est égal à :",
          "options": [
            "$\\frac{1 + 2x^2}{1 - x^2}$",
            "$\\frac{x + 2}{x - 1}$",
            "$\\frac{1}{x^2}$",
            "$\\frac{2x^2}{x^2 + 1}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le résultat de la substitution et de la réduction effectuées dans la correction de la leçon."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q5",
          "type": "mcq",
          "prompt": "La composée de $f^{-1}$ par $f$ est :",
          "options": [
            "La fonction nulle",
            "L'application identique de l'ensemble de départ",
            "La fonction carré",
            "$f$ elle-même"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Revenir par la réciproque après $f$ redonne l'élément de départ : c'est l'identité."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p06_q6",
          "type": "mcq",
          "prompt": "Dans $g \\circ f(x)$, la fonction appliquée en premier est :",
          "options": [
            "$g$",
            "$f$",
            "Les deux en même temps",
            "Aucune des deux"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule d'abord $f(x)$, puis on applique $g$ au résultat."
        }
      ]
    },
    {
      "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07",
      "order": 7,
      "title": "Représentations graphiques de fonctions associées",
      "summary": "Obtenir la courbe des fonctions associées à une fonction donnée par translations et symétries orthodoxes ou centrale.",
      "conceptExplanation": "Le plan est muni d'un repère orthogonal $(O, I, J)$, $f$ est une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$ de courbe $(C_f)$, et $a$ et $b$ sont deux réels.\nLa courbe de $x \\mapsto f(x - a)$ est l'image de $(C_f)$ par la translation de vecteur $a\\overrightarrow{OI}$ ; celle de $x \\mapsto f(x) + b$ est l'image par la translation de vecteur $b\\overrightarrow{OJ}$ ; celle de $x \\mapsto f(x - a) + b$ est l'image par la translation de vecteur $a\\overrightarrow{OI} + b\\overrightarrow{OJ}$.\nLa courbe de $x \\mapsto f(-x)$ est l'image de $(C_f)$ par la symétrie orthogonale d'axe $(OJ)$ ; celle de $x \\mapsto -f(x)$ est l'image par la symétrie orthogonale d'axe $(OI)$ ; celle de $x \\mapsto -f(-x)$ est l'image par la symétrie centrale de centre $O$.",
      "keyRule": "Un décalage dans l'écriture de la fonction se lit comme une transformation géométrique précise de toute la courbe.",
      "formulas": [
        {
          "name": "Translation horizontale",
          "formula": "x \\mapsto f(x - a) \\text{ : translation de vecteur } a\\overrightarrow{OI}"
        },
        {
          "name": "Symétrie d'axe (OI)",
          "formula": "x \\mapsto -f(x)"
        }
      ],
      "workedExample": {
        "title": "Construire la courbe d'une fonction translatée (exercice de fixation)",
        "statement": "On donne la courbe d'une fonction $f$ définie sur $[1 ; 4]$ et la fonction $g$ définie par $g(x) = f(x - 3) + 1$. Construis la courbe de $g$ à partir de celle de $f$.",
        "methodSteps": [
          "L'écriture $f(x - 3) + 1$ combine un décalage de $3$ dans le terme en $x$ et un décalage de $1$ sur les valeurs.",
          "La courbe de $g$ est donc l'image de celle de $f$ par la translation de vecteur de coordonnées $3$ et $1$.",
          "On translate chaque point remarquable de la courbe de $f$ par ce vecteur."
        ],
        "conclusion": "La courbe de $g$ s'obtient par une seule translation, sans déformation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La translation horizontale",
          "stepTheme": "La translation horizontale",
          "stepBadge": "La translation horizontale",
          "paragraphText": "• Propriété du tableau : la courbe de $x \\mapsto f(x - a)$ est l'image de $(C_f)$ par la translation de vecteur $a\\overrightarrow{OI}$.\nC'est un glissement le long de l'axe des abscisses.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q1",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto f(x - a)$ s'obtient par :",
            "options": [
              "La symétrie d'axe $(OJ)$",
              "La translation de vecteur $a\\overrightarrow{OI}$",
              "La symétrie centrale de centre $O$",
              "La translation de vecteur $b\\overrightarrow{OJ}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le décalage porte sur la variable, donc la translation est horizontale."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La translation verticale",
          "stepTheme": "La translation verticale",
          "stepBadge": "La translation verticale",
          "paragraphText": "• Propriété du tableau : la courbe de $x \\mapsto f(x) + b$ est l'image de $(C_f)$ par la translation de vecteur $b\\overrightarrow{OJ}$.\nC'est un glissement le long de l'axe des ordonnées.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q2",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto f(x) + b$ s'obtient par :",
            "options": [
              "La translation de vecteur $b\\overrightarrow{OJ}$",
              "La symétrie d'axe $(OI)$",
              "La translation de vecteur $a\\overrightarrow{OI}$",
              "La symétrie centrale de centre $O$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le terme ajouté porte sur les valeurs, donc la translation est verticale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La translation de l'exercice de fixation",
          "stepTheme": "La translation de l'exercice de fixation",
          "stepBadge": "La translation de l'exercice de fixation",
          "paragraphText": "• Exercice de fixation : $g(x) = f(x - 3) + 1$ combine les deux décalages $3$ et $1$.\nLa courbe de $g$ est l'image de celle de $f$ par la translation de vecteur de coordonnées $3$ et $1$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q3",
            "type": "mcq",
            "prompt": "Pour $g(x) = f(x - 3) + 1$, la translation a pour vecteur de coordonnées :",
            "options": [
              "$1$ et $3$",
              "$-3$ et $1$",
              "$3$ et $1$",
              "$3$ et $-1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les décalages sont $3$ horizontalement (pour $x - 3$) et $1$ verticalement (pour le terme ajouté)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La symétrie par rapport à l'axe des ordonnées",
          "stepTheme": "La symétrie par rapport à l'axe des ordonnées",
          "stepBadge": "La symétrie par rapport à l'axe des ordonnées",
          "paragraphText": "• Propriété du tableau : la courbe de $x \\mapsto f(-x)$ est l'image de $(C_f)$ par la symétrie orthogonale d'axe $(OJ)$.\nC'est l'axe des ordonnées.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q4",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto f(-x)$ est l'image de $(C_f)$ par la symétrie d'axe :",
            "options": [
              "$(OI)$",
              "$(OJ)$",
              "La première bissectrice",
              "Aucune symétrie, c'est une translation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le changement de signe de la variable donne la symétrie par rapport à l'axe des ordonnées."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La symétrie par rapport à l'axe des abscisses",
          "stepTheme": "La symétrie par rapport à l'axe des abscisses",
          "stepBadge": "La symétrie par rapport à l'axe des abscisses",
          "paragraphText": "• Propriété du tableau : la courbe de $x \\mapsto -f(x)$ est l'image de $(C_f)$ par la symétrie orthogonale d'axe $(OI)$.\nC'est l'axe des abscisses.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q5",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto -f(x)$ est l'image de $(C_f)$ par la symétrie d'axe :",
            "options": [
              "$(OJ)$",
              "La première bissectrice",
              "$(OI)$",
              "Aucune symétrie, c'est une translation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le changement de signe des valeurs donne la symétrie par rapport à l'axe des abscisses."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La double négation donne une symétrie centrale",
          "stepTheme": "La double négation donne une symétrie centrale",
          "stepBadge": "La double négation donne une symétrie centrale",
          "paragraphText": "• Piège du tableau : $x \\mapsto -f(-x)$ ne correspond ni à l'une ni à l'autre des symétries d'axes prises séparément.\nC'est l'image de $(C_f)$ par la symétrie centrale de centre $O$.",
          "exercise": {
            "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q6",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto -f(-x)$ est l'image de $(C_f)$ par :",
            "options": [
              "La symétrie d'axe $(OI)$",
              "La symétrie d'axe $(OJ)$",
              "Une translation",
              "La symétrie centrale de centre $O$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Les deux changements de signe combinés donnent la symétrie centrale de centre $O$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q1",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto f(x - a)$ s'obtient par :",
          "options": [
            "La symétrie d'axe $(OJ)$",
            "La translation de vecteur $a\\overrightarrow{OI}$",
            "La symétrie centrale de centre $O$",
            "La translation de vecteur $b\\overrightarrow{OJ}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le décalage porte sur la variable, donc la translation est horizontale."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q2",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto f(x) + b$ s'obtient par :",
          "options": [
            "La translation de vecteur $b\\overrightarrow{OJ}$",
            "La symétrie d'axe $(OI)$",
            "La translation de vecteur $a\\overrightarrow{OI}$",
            "La symétrie centrale de centre $O$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le terme ajouté porte sur les valeurs, donc la translation est verticale."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q3",
          "type": "mcq",
          "prompt": "Pour $g(x) = f(x - 3) + 1$, la translation a pour vecteur de coordonnées :",
          "options": [
            "$1$ et $3$",
            "$-3$ et $1$",
            "$3$ et $1$",
            "$3$ et $-1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les décalages sont $3$ horizontalement (pour $x - 3$) et $1$ verticalement (pour le terme ajouté)."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q4",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto f(-x)$ est l'image de $(C_f)$ par la symétrie d'axe :",
          "options": [
            "$(OI)$",
            "$(OJ)$",
            "La première bissectrice",
            "Aucune symétrie, c'est une translation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le changement de signe de la variable donne la symétrie par rapport à l'axe des ordonnées."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q5",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto -f(x)$ est l'image de $(C_f)$ par la symétrie d'axe :",
          "options": [
            "$(OJ)$",
            "La première bissectrice",
            "$(OI)$",
            "Aucune symétrie, c'est une translation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le changement de signe des valeurs donne la symétrie par rapport à l'axe des abscisses."
        },
        {
          "id": "premiere_c_maths_numerique_l03_generalites_fonctions_p07_q6",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto -f(-x)$ est l'image de $(C_f)$ par :",
          "options": [
            "La symétrie d'axe $(OI)$",
            "La symétrie d'axe $(OJ)$",
            "Une translation",
            "La symétrie centrale de centre $O$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Les deux changements de signe combinés donnent la symétrie centrale de centre $O$."
        }
      ]
    }
  ]
};
