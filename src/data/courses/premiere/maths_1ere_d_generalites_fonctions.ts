import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Généralités sur les fonctions » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Généralités sur les fonctions » (document PDF officiel, Mathématiques 1ère D, lot P07)
export const MATHS_1ERE_D_L03_GENERALITES_FONCTIONS: CurriculumChapter = {
  "id": "premiere_d_maths_numerique_l03_generalites_fonctions",
  "subjectId": "maths",
  "gradeLevel": "premiere_d",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : Généralités sur les fonctions",
  "summary": "La leçon étudie les applications entre ensembles (injections, surjections, bijections et bijection réciproque), puis les compléments sur les fonctions : restriction, opérations, comparaison, composition et représentations graphiques de fonctions associées.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Généralités sur les fonctions » (document PDF officiel, Mathématiques 1ère D, lot P07)",
  "points": [
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01",
      "order": 1,
      "title": "Applications, images et antécédents",
      "summary": "Définir une application d’un ensemble dans un autre, et les notions d’image, d’antécédent, d’ensemble de départ et d’arrivée.",
      "conceptExplanation": "Une application d’un ensemble $E$ dans un ensemble $F$ est une correspondance qui, à tout élément $x$ de $E$, associe un élément $y$ de l’ensemble $F$.\n$y$ est appelé l’image de $x$ par $f$ et se note $f(x)$ ; $x$ est un antécédent de $y$ par $f$.\n$E$ est l’ensemble de départ et $F$ est l’ensemble d’arrivée.",
      "keyRule": "Dans une application, chaque élément de départ a exactement une image : c’est le point de départ de toute la leçon.",
      "formulas": [],
      "workedExample": {
        "title": "La correspondance « salaire » de la situation d’apprentissage",
        "statement": "Dans la PME de la situation d’apprentissage, le directeur est payé 200 000 francs, le comptable 150 000 francs et chacun des autres employés 70 000 francs. La correspondance qui à chaque personne associe son salaire est-elle une application ?",
        "methodSteps": [
          "Chaque personne de la PME reçoit un salaire et un seul.",
          "La correspondance associe donc à tout élément de l’ensemble des employés un unique élément de l’ensemble des salaires.",
          "C’est bien une application de l’ensemble des employés vers l’ensemble des montants."
        ],
        "conclusion": "La correspondance « salaire » est une application : une personne, une seule image."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est une application",
          "stepTheme": "Ce qu’est une application",
          "stepBadge": "Ce qu’est une application",
          "paragraphText": "• Définition : une application d’un ensemble $E$ dans un ensemble $F$ est une correspondance qui, à tout élément $x$ de $E$, associe un élément $y$ de $F$.\nL’ensemble $E$ est l’ensemble de départ et $F$ l’ensemble d’arrivée.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q1",
            "type": "mcq",
            "prompt": "Une application de $E$ dans $F$ associe à tout élément de $E$ :",
            "options": [
              "Aucun élément de $F$",
              "Un élément de $F$",
              "Plusieurs éléments de $F$ obligatoirement",
              "Un élément de $E$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, tout élément de départ a une image dans $F$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Image et antécédent",
          "stepTheme": "Image et antécédent",
          "stepBadge": "Image et antécédent",
          "paragraphText": "• Si $y$ est l’élément associé à $x$, on dit que $y$ est l’image de $x$ par $f$ et on note $y = f(x)$.\nInversement, $x$ est un antécédent de $y$ par $f$ : un même élément peut avoir plusieurs antécédents, mais jamais plusieurs images.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q2",
            "type": "mcq",
            "prompt": "Dans l’écriture $y = f(x)$, que représente $y$ ?",
            "options": [
              "Un antécédent de $x$",
              "L’ensemble de départ",
              "L’ensemble d’arrivée",
              "L’image de $x$ par $f$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$y$ est l’image de $x$ par $f$ ; $x$ est un antécédent de $y$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Unicité de l’image",
          "stepTheme": "Unicité de l’image",
          "stepBadge": "Unicité de l’image",
          "paragraphText": "• Conséquence de la définition : dans une application, chaque élément de départ possède une image et une seule.\nC’est ce qui distingue une application d’une correspondance quelconque.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q3",
            "type": "mcq",
            "prompt": "Un élément $x$ de l’ensemble de départ d’une application peut avoir :",
            "options": [
              "Plusieurs images",
              "Aucune image",
              "Exactement une image",
              "Une image seulement s’il est le premier"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Une application associe une unique image à chaque élément de départ."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Les salaires de la PME",
          "stepTheme": "Les salaires de la PME",
          "stepBadge": "Les salaires de la PME",
          "paragraphText": "• Situation de la leçon : le directeur de la PME est payé 200 000 francs, le comptable 150 000 francs et les autres employés 70 000 francs chacun.\nLa correspondance qui associe son salaire à chaque personne est une application : chaque personne a un unique salaire.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q4",
            "type": "mcq",
            "prompt": "Dans la situation de la leçon, pourquoi la correspondance « salaire » est-elle une application ?",
            "options": [
              "Parce que chaque personne reçoit un salaire et un seul",
              "Parce que tous les salaires sont égaux",
              "Parce qu’il y a six employés",
              "Parce que le salaire moyen dépasse 80 000 francs"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Chaque employé a exactement un salaire : la correspondance est une application."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Vérifier qu’une correspondance est une application",
          "stepTheme": "Vérifier qu’une correspondance est une application",
          "stepBadge": "Vérifier qu’une correspondance est une application",
          "paragraphText": "• Méthode : pour vérifier qu’une correspondance est une application, on contrôle que tout élément de l’ensemble de départ possède bien une image, et une seule.\nSi un élément de départ n’a pas d’image, ou en a plusieurs, ce n’est pas une application.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q5",
            "type": "mcq",
            "prompt": "Pour qu’une correspondance soit une application, il faut que :",
            "options": [
              "Tout élément d’arrivée ait un antécédent",
              "Les deux ensembles aient le même nombre d’éléments",
              "Tout élément de départ ait exactement une image",
              "Toutes les images soient différentes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la définition même d’une application, élément par élément."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Confondre image et antécédent",
          "stepTheme": "Confondre image et antécédent",
          "stepBadge": "Confondre image et antécédent",
          "paragraphText": "• Piège : l’image se lit dans le sens de la flèche ; l’antécédent se cherche dans le sens inverse.\nDire « $x$ est l’image de $y$ » quand $y = f(x)$ inverse les rôles des deux éléments.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q6",
            "type": "mcq",
            "prompt": "Si $f(x) = y$, alors $x$ est :",
            "options": [
              "Un antécédent de $y$",
              "L’image de $y$",
              "L’ensemble de départ",
              "L’image de $f$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$x$ est un antécédent de $y$, car $y$ est l’image de $x$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q1",
          "type": "mcq",
          "prompt": "Une application de $E$ dans $F$ associe à tout élément de $E$ :",
          "options": [
            "Aucun élément de $F$",
            "Un élément de $F$",
            "Plusieurs éléments de $F$ obligatoirement",
            "Un élément de $E$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, tout élément de départ a une image dans $F$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q2",
          "type": "mcq",
          "prompt": "Dans l’écriture $y = f(x)$, que représente $y$ ?",
          "options": [
            "Un antécédent de $x$",
            "L’ensemble de départ",
            "L’ensemble d’arrivée",
            "L’image de $x$ par $f$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$y$ est l’image de $x$ par $f$ ; $x$ est un antécédent de $y$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q3",
          "type": "mcq",
          "prompt": "Un élément $x$ de l’ensemble de départ d’une application peut avoir :",
          "options": [
            "Plusieurs images",
            "Aucune image",
            "Exactement une image",
            "Une image seulement s’il est le premier"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Une application associe une unique image à chaque élément de départ."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q4",
          "type": "mcq",
          "prompt": "Dans la situation de la leçon, pourquoi la correspondance « salaire » est-elle une application ?",
          "options": [
            "Parce que chaque personne reçoit un salaire et un seul",
            "Parce que tous les salaires sont égaux",
            "Parce qu’il y a six employés",
            "Parce que le salaire moyen dépasse 80 000 francs"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Chaque employé a exactement un salaire : la correspondance est une application."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q5",
          "type": "mcq",
          "prompt": "Pour qu’une correspondance soit une application, il faut que :",
          "options": [
            "Tout élément d’arrivée ait un antécédent",
            "Les deux ensembles aient le même nombre d’éléments",
            "Tout élément de départ ait exactement une image",
            "Toutes les images soient différentes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la définition même d’une application, élément par élément."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p01_q6",
          "type": "mcq",
          "prompt": "Si $f(x) = y$, alors $x$ est :",
          "options": [
            "Un antécédent de $y$",
            "L’image de $y$",
            "L’ensemble de départ",
            "L’image de $f$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$x$ est un antécédent de $y$, car $y$ est l’image de $x$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02",
      "order": 2,
      "title": "Applications injectives",
      "summary": "Définir une application injective, connaître le critère des images égales et la méthode par l’équation $f(x) = b$.",
      "conceptExplanation": "Une application $f$ d’un ensemble $E$ dans un ensemble $F$ est une injection, ou application injective, lorsque tout élément de $F$ admet au plus un antécédent par $f$ dans $E$.\nPoint méthode : pour démontrer que $f$ est injective, il suffit de justifier que pour tout $b \\in F$, l’équation $f(x) = b$ admet au plus une solution dans $E$ (soit $0$ solution, soit une unique solution).\nPropriété : $f$ est une injection si et seulement si, pour tous $a$ et $b$ éléments de $E$, $f(a) = f(b)$ implique $a = b$.\nExemple de la leçon : l’application de $[0 ; +\\infty[$ vers $\\mathbb{R}$ définie par $f(x) = \\sqrt{x} + 1$ est injective.",
      "keyRule": "Injective : jamais deux antécédents pour une même image ; le test est $f(a) = f(b)$ implique $a = b$.",
      "formulas": [
        {
          "name": "Critère d’injectivité",
          "formula": "f(a) = f(b) \\implies a = b",
          "note": "Pour tous éléments $a$ et $b$ de l’ensemble de départ."
        }
      ],
      "workedExample": {
        "title": "Injectivité de $f(x) = \\frac{2x + 1}{x - 1}$ (exercice de fixation)",
        "statement": "On considère l’application $f$ de $\\mathbb{R} \\setminus \\{1\\}$ vers $\\mathbb{R}$ définie par $f(x) = \\frac{2x + 1}{x - 1}$. Justifie que $f$ est injective.",
        "methodSteps": [
          "Soit $a$ et $b$ deux éléments de $\\mathbb{R} \\setminus \\{1\\}$ tels que $f(a) = f(b)$.",
          "Alors $\\frac{2a + 1}{a - 1} = \\frac{2b + 1}{b - 1}$, ce qui donne après développement $3a = 3b$.",
          "Donc $a = b$."
        ],
        "conclusion": "L’application $f$ est injective."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est une injection",
          "stepTheme": "Ce qu’est une injection",
          "stepBadge": "Ce qu’est une injection",
          "paragraphText": "• Définition : une application $f$ de $E$ dans $F$ est injective lorsque tout élément de $F$ admet au plus un antécédent par $f$ dans $E$.\n« Au plus un » signifie : zéro ou un seul, jamais deux.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q1",
            "type": "mcq",
            "prompt": "Une application est injective lorsque tout élément de l’ensemble d’arrivée admet :",
            "options": [
              "Au moins un antécédent",
              "Exactement deux antécédents",
              "Au plus un antécédent",
              "Une infinité d’antécédents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Injective signifie : au plus un antécédent pour chaque élément d’arrivée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le critère des images égales",
          "stepTheme": "Le critère des images égales",
          "stepBadge": "Le critère des images égales",
          "paragraphText": "• Propriété de la leçon : $f$ est une injection si et seulement si, pour tous $a$ et $b$ éléments de $E$, $f(a) = f(b)$ implique $a = b$.\nC’est le critère utilisé dans l’exercice de fixation de la leçon.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q2",
            "type": "mcq",
            "prompt": "D’après le critère de la leçon, $f$ est injective si $f(a) = f(b)$ implique toujours :",
            "options": [
              "$a = -b$",
              "$a = b$",
              "$f(a) = 0$",
              "$a$ et $b$ quelconques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Des images égales doivent venir du même élément : $a = b$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode par l’équation",
          "stepTheme": "La méthode par l’équation",
          "stepBadge": "La méthode par l’équation",
          "paragraphText": "• Point méthode de la leçon : pour démontrer que $f$ est injective, il suffit de montrer que pour tout $b \\in F$, l’équation $f(x) = b$ admet au plus une solution dans $E$.\nC’est-à-dire soit aucune solution, soit une unique solution.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q3",
            "type": "mcq",
            "prompt": "Pour montrer que $f$ est injective par la méthode de l’équation, il faut que $f(x) = b$ admette :",
            "options": [
              "Toujours exactement une solution",
              "Au moins deux solutions",
              "Toujours aucune solution",
              "Au plus une solution"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Au plus une solution : zéro ou une seule, jamais deux."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un exemple d’injection",
          "stepTheme": "Un exemple d’injection",
          "stepBadge": "Un exemple d’injection",
          "paragraphText": "• Exemple de la leçon : l’application de $[0 ; +\\infty[$ vers $\\mathbb{R}$ définie par $f(x) = \\sqrt{x} + 1$ est injective.\nEn effet, $f(x) = y$ donne $\\sqrt{x} = y - 1$ : si $y \\geq 1$, alors $x = (y - 1)^2$, une unique valeur.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q4",
            "type": "mcq",
            "prompt": "Pour l’application $f(x) = \\sqrt{x} + 1$ de la leçon, l’équation $f(x) = y$ admet au plus :",
            "options": [
              "Une solution",
              "Toujours deux solutions",
              "Une infinité de solutions",
              "Aucune solution dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Pour chaque $y$, il y a au plus une valeur de $x$ : c’est l’injectivité."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Démontrer une injectivité",
          "stepTheme": "Démontrer une injectivité",
          "stepBadge": "Démontrer une injectivité",
          "paragraphText": "• Exercice de fixation de la leçon : pour $f(x) = \\frac{2x + 1}{x - 1}$ sur $\\mathbb{R} \\setminus \\{1\\}$, l’égalité $f(a) = f(b)$ conduit à $3a = 3b$.\nOn en déduit $a = b$, ce qui prouve l’injectivité de $f$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q5",
            "type": "mcq",
            "prompt": "Dans la démonstration de la leçon pour $f(x) = \\frac{2x + 1}{x - 1}$, l’égalité $f(a) = f(b)$ conduit à :",
            "options": [
              "$a = -b$",
              "$3a = 3b$, donc $a = b$",
              "$a + b = 0$",
              "$ab = 1$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Après développement des produits en croix, on obtient $3a = 3b$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Au plus un ne veut pas dire exactement un",
          "stepTheme": "Au plus un ne veut pas dire exactement un",
          "stepBadge": "Au plus un ne veut pas dire exactement un",
          "paragraphText": "• Piège : « au plus un antécédent » autorise zéro antécédent.\nUne application peut donc être injective sans que tous les éléments de $F$ soient atteints : ce dernier point relève de la surjectivité, notion du point suivant.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q6",
            "type": "mcq",
            "prompt": "Une application injective peut-elle laisser un élément de $F$ sans antécédent ?",
            "options": [
              "Non, jamais",
              "Seulement si $E$ est vide",
              "Oui, « au plus un » autorise zéro antécédent",
              "Seulement pour les fonctions constantes"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’injectivité interdit les doublons, pas les éléments d’arrivée sans antécédent."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q1",
          "type": "mcq",
          "prompt": "Une application est injective lorsque tout élément de l’ensemble d’arrivée admet :",
          "options": [
            "Au moins un antécédent",
            "Exactement deux antécédents",
            "Au plus un antécédent",
            "Une infinité d’antécédents"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Injective signifie : au plus un antécédent pour chaque élément d’arrivée."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q2",
          "type": "mcq",
          "prompt": "D’après le critère de la leçon, $f$ est injective si $f(a) = f(b)$ implique toujours :",
          "options": [
            "$a = -b$",
            "$a = b$",
            "$f(a) = 0$",
            "$a$ et $b$ quelconques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Des images égales doivent venir du même élément : $a = b$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q3",
          "type": "mcq",
          "prompt": "Pour montrer que $f$ est injective par la méthode de l’équation, il faut que $f(x) = b$ admette :",
          "options": [
            "Toujours exactement une solution",
            "Au moins deux solutions",
            "Toujours aucune solution",
            "Au plus une solution"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Au plus une solution : zéro ou une seule, jamais deux."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q4",
          "type": "mcq",
          "prompt": "Pour l’application $f(x) = \\sqrt{x} + 1$ de la leçon, l’équation $f(x) = y$ admet au plus :",
          "options": [
            "Une solution",
            "Toujours deux solutions",
            "Une infinité de solutions",
            "Aucune solution dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Pour chaque $y$, il y a au plus une valeur de $x$ : c’est l’injectivité."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q5",
          "type": "mcq",
          "prompt": "Dans la démonstration de la leçon pour $f(x) = \\frac{2x + 1}{x - 1}$, l’égalité $f(a) = f(b)$ conduit à :",
          "options": [
            "$a = -b$",
            "$3a = 3b$, donc $a = b$",
            "$a + b = 0$",
            "$ab = 1$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Après développement des produits en croix, on obtient $3a = 3b$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p02_q6",
          "type": "mcq",
          "prompt": "Une application injective peut-elle laisser un élément de $F$ sans antécédent ?",
          "options": [
            "Non, jamais",
            "Seulement si $E$ est vide",
            "Oui, « au plus un » autorise zéro antécédent",
            "Seulement pour les fonctions constantes"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’injectivité interdit les doublons, pas les éléments d’arrivée sans antécédent."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03",
      "order": 3,
      "title": "Applications surjectives",
      "summary": "Définir une application surjective et la démontrer en montrant que l’équation $f(x) = b$ admet au moins une solution.",
      "conceptExplanation": "Une application $f$ d’un ensemble $E$ dans un ensemble $F$ est une surjection, ou application surjective, lorsque tout élément de $F$ admet au moins un antécédent par $f$ dans $E$.\nPoint méthode : pour démontrer que $f$ est surjective, il suffit de justifier que pour tout $b \\in F$, l’équation $f(x) = b$ admet au moins une solution dans $E$ (une unique solution ou plusieurs solutions).\nExemple de la leçon : l’application de $\\mathbb{R}$ vers $[1 ; +\\infty[$ définie par $f(x) = x^2 + 1$ est surjective.",
      "keyRule": "Surjective : aucune valeur d’arrivée oubliée ; chaque $b$ doit avoir au moins un antécédent.",
      "formulas": [],
      "workedExample": {
        "title": "Surjectivité de $f(x) = x^2 + 1$ (exercice de fixation)",
        "statement": "On considère l’application $f$ de $\\mathbb{R}$ vers $[1 ; +\\infty[$ définie par $f(x) = x^2 + 1$. Justifie que $f$ est surjective.",
        "methodSteps": [
          "Soit $y$ un élément de $[1 ; +\\infty[$.",
          "L’équation $f(x) = y$ donne $x^2 = y - 1$, avec $y - 1 \\geq 0$.",
          "Elle admet donc des solutions : $x = \\sqrt{y - 1}$ ou $x = -\\sqrt{y - 1}$."
        ],
        "conclusion": "Tout élément de $[1 ; +\\infty[$ admet au moins un antécédent : $f$ est surjective."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est une surjection",
          "stepTheme": "Ce qu’est une surjection",
          "stepBadge": "Ce qu’est une surjection",
          "paragraphText": "• Définition : une application $f$ de $E$ dans $F$ est surjective lorsque tout élément de $F$ admet au moins un antécédent par $f$ dans $E$.\n« Au moins un » signifie : un seul ou plusieurs, mais jamais zéro.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q1",
            "type": "mcq",
            "prompt": "Une application est surjective lorsque tout élément de l’ensemble d’arrivée admet :",
            "options": [
              "Au plus un antécédent",
              "Aucun antécédent",
              "Au moins un antécédent",
              "Exactement un antécédent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Surjective signifie : au moins un antécédent pour chaque élément d’arrivée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Démontrer une surjectivité",
          "stepTheme": "Démontrer une surjectivité",
          "stepBadge": "Démontrer une surjectivité",
          "paragraphText": "• Point méthode de la leçon : il suffit de justifier que pour tout $b \\in F$, l’équation $f(x) = b$ admet au moins une solution dans $E$.\nLa solution peut être unique ou multiple : les deux cas conviennent.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q2",
            "type": "mcq",
            "prompt": "Par la méthode de l’équation, $f$ est surjective si $f(x) = b$ admet, pour tout $b$ :",
            "options": [
              "Au plus une solution",
              "Au moins une solution",
              "Aucune solution",
              "Exactement deux solutions"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Il faut l’existence d’au moins une solution pour chaque $b$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "La surjectivité de $x^2 + 1$",
          "stepTheme": "La surjectivité de $x^2 + 1$",
          "stepBadge": "La surjectivité de $x^2 + 1$",
          "paragraphText": "• Exemple de la leçon : pour $f(x) = x^2 + 1$ de $\\mathbb{R}$ vers $[1 ; +\\infty[$, l’équation $x^2 + 1 = y$ donne $x^2 = y - 1 \\geq 0$.\nTout $y$ de l’ensemble d’arrivée admet donc un antécédent, par exemple $\\sqrt{y - 1}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q3",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^2 + 1$ vers $[1 ; +\\infty[$, que vaut un antécédent de $y$ ?",
            "options": [
              "$y - 1$",
              "$\\sqrt{y - 1}$ (ou son opposé)",
              "$y + 1$",
              "Aucun, $f$ n’est pas surjective"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On résout $x^2 = y - 1$ : les antécédents sont $\\sqrt{y - 1}$ et $-\\sqrt{y - 1}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Plusieurs antécédents sont permis",
          "stepTheme": "Plusieurs antécédents sont permis",
          "stepBadge": "Plusieurs antécédents sont permis",
          "paragraphText": "• Dans l’exemple précédent, pour $y > 1$, l’équation donne deux antécédents : $\\sqrt{y - 1}$ et $-\\sqrt{y - 1}$.\nLa surjectivité n’exige pas l’unicité : c’est ce qui la distingue de la bijectivité.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q4",
            "type": "mcq",
            "prompt": "Pour $f(x) = x^2 + 1$ et $y = 5$, quels sont les antécédents de $y$ ?",
            "options": [
              "$2$ seulement",
              "$-2$ seulement",
              "$2$ et $-2$",
              "Aucun"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’équation $x^2 = 4$ donne $x = 2$ ou $x = -2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Un seul oubli casse la surjectivité",
          "stepTheme": "Un seul oubli casse la surjectivité",
          "stepBadge": "Un seul oubli casse la surjectivité",
          "paragraphText": "• Piège : un seul élément de $F$ sans antécédent suffit à faire échouer la surjectivité.\nC’est le cas dans le contre-exemple de la leçon, où l’une des applications présentées n’est pas surjective.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q5",
            "type": "mcq",
            "prompt": "Pour qu’une application ne soit pas surjective, il suffit :",
            "options": [
              "Que deux éléments aient la même image",
              "Qu’un seul élément de $F$ n’ait aucun antécédent",
              "Que $E$ ait plus d’éléments que $F$",
              "Que l’application soit constante"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La surjectivité exige un antécédent pour tous les éléments de $F$, sans exception."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Une autre surjection",
          "stepTheme": "Une autre surjection",
          "stepBadge": "Une autre surjection",
          "paragraphText": "• Exercice de la leçon : l’application $f$ de $\\mathbb{R}$ vers $]-\\infty ; 1]$ définie par $f(x) = 1 - x^2$ est surjective.\nEn effet, pour $b \\leq 1$, l’équation $1 - x^2 = b$ donne $x = \\sqrt{1 - b}$ ou $x = -\\sqrt{1 - b}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q6",
            "type": "mcq",
            "prompt": "Pour $f(x) = 1 - x^2$ vers $]-\\infty ; 1]$, un antécédent de $b$ est :",
            "options": [
              "$\\sqrt{1 - b}$",
              "$1 - b$",
              "$b - 1$",
              "Il n’y en a jamais"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On résout $x^2 = 1 - b$, possible car $b \\leq 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q1",
          "type": "mcq",
          "prompt": "Une application est surjective lorsque tout élément de l’ensemble d’arrivée admet :",
          "options": [
            "Au plus un antécédent",
            "Aucun antécédent",
            "Au moins un antécédent",
            "Exactement un antécédent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Surjective signifie : au moins un antécédent pour chaque élément d’arrivée."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q2",
          "type": "mcq",
          "prompt": "Par la méthode de l’équation, $f$ est surjective si $f(x) = b$ admet, pour tout $b$ :",
          "options": [
            "Au plus une solution",
            "Au moins une solution",
            "Aucune solution",
            "Exactement deux solutions"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Il faut l’existence d’au moins une solution pour chaque $b$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q3",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^2 + 1$ vers $[1 ; +\\infty[$, que vaut un antécédent de $y$ ?",
          "options": [
            "$y - 1$",
            "$\\sqrt{y - 1}$ (ou son opposé)",
            "$y + 1$",
            "Aucun, $f$ n’est pas surjective"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On résout $x^2 = y - 1$ : les antécédents sont $\\sqrt{y - 1}$ et $-\\sqrt{y - 1}$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q4",
          "type": "mcq",
          "prompt": "Pour $f(x) = x^2 + 1$ et $y = 5$, quels sont les antécédents de $y$ ?",
          "options": [
            "$2$ seulement",
            "$-2$ seulement",
            "$2$ et $-2$",
            "Aucun"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’équation $x^2 = 4$ donne $x = 2$ ou $x = -2$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q5",
          "type": "mcq",
          "prompt": "Pour qu’une application ne soit pas surjective, il suffit :",
          "options": [
            "Que deux éléments aient la même image",
            "Qu’un seul élément de $F$ n’ait aucun antécédent",
            "Que $E$ ait plus d’éléments que $F$",
            "Que l’application soit constante"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La surjectivité exige un antécédent pour tous les éléments de $F$, sans exception."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p03_q6",
          "type": "mcq",
          "prompt": "Pour $f(x) = 1 - x^2$ vers $]-\\infty ; 1]$, un antécédent de $b$ est :",
          "options": [
            "$\\sqrt{1 - b}$",
            "$1 - b$",
            "$b - 1$",
            "Il n’y en a jamais"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On résout $x^2 = 1 - b$, possible car $b \\leq 1$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04",
      "order": 4,
      "title": "Applications bijectives",
      "summary": "Définir une bijection comme une application à la fois injective et surjective, et la reconnaître par l’unicité de l’antécédent.",
      "conceptExplanation": "Une application $f$ d’un ensemble $E$ dans un ensemble $F$ est une bijection, ou application bijective, lorsque tout élément de $F$ admet un unique antécédent par $f$ dans $E$.\nPoint méthode : pour démontrer que $f$ est bijective, il suffit de justifier que pour tout $b \\in F$, l’équation $f(x) = b$ admet une unique solution dans $E$.\nPropriété : une application est une bijection si et seulement si elle est à la fois injective et surjective.\nVérification graphique : pour une application d’un intervalle $K$ dans un intervalle $L$, toute droite d’équation $y = b$, avec $b \\in f(K)$, coupe la courbe en un unique point dont l’abscisse appartient à $K$.",
      "keyRule": "Bijective = injective + surjective : exactement un antécédent pour chaque élément d’arrivée.",
      "formulas": [],
      "workedExample": {
        "title": "Bijectivité de $f(x) = x^2$ sur $]-\\infty ; 0]$ (exercice de fixation)",
        "statement": "On considère l’application $f$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$ définie par $f(x) = x^2$. Justifie que $f$ est bijective.",
        "methodSteps": [
          "Soit $y$ un élément de $[0 ; +\\infty[$ : l’équation $x^2 = y$ donne $x = -\\sqrt{y}$ ou $x = \\sqrt{y}$.",
          "Comme $x \\in ]-\\infty ; 0]$, on ne retient que $x = -\\sqrt{y}$.",
          "Tout élément $y$ admet donc un unique antécédent : $f$ est injective et surjective."
        ],
        "conclusion": "L’application $f$ est bijective."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est une bijection",
          "stepTheme": "Ce qu’est une bijection",
          "stepBadge": "Ce qu’est une bijection",
          "paragraphText": "• Définition : une application $f$ de $E$ dans $F$ est bijective lorsque tout élément de $F$ admet un unique antécédent par $f$ dans $E$.\nExemple de la leçon : l’application de $\\mathbb{R}$ vers $\\mathbb{R}$ définie par $f(x) = x + 1$ est bijective.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q1",
            "type": "mcq",
            "prompt": "Une application est bijective lorsque tout élément de l’ensemble d’arrivée admet :",
            "options": [
              "Au plus un antécédent",
              "Au moins un antécédent",
              "Un unique antécédent",
              "Aucun antécédent"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Bijective signifie : exactement un antécédent pour chaque élément d’arrivée."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Injective et surjective à la fois",
          "stepTheme": "Injective et surjective à la fois",
          "stepBadge": "Injective et surjective à la fois",
          "paragraphText": "• Propriété de la leçon : une application est une bijection si et seulement si elle est à la fois injective et surjective.\nOn peut donc démontrer les deux propriétés séparément.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q2",
            "type": "mcq",
            "prompt": "Une bijection est une application qui est :",
            "options": [
              "Injective seulement",
              "À la fois injective et surjective",
              "Surjective seulement",
              "Ni injective ni surjective"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété caractéristique des bijections."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Démontrer par l’unicité de la solution",
          "stepTheme": "Démontrer par l’unicité de la solution",
          "stepBadge": "Démontrer par l’unicité de la solution",
          "paragraphText": "• Point méthode de la leçon : il suffit de justifier que pour tout $b \\in F$, l’équation $f(x) = b$ admet une unique solution dans $E$.\nUnicité pour l’injectivité, existence pour la surjectivité : les deux sont réunies.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q3",
            "type": "mcq",
            "prompt": "Par la méthode de l’équation, $f$ est bijective si $f(x) = b$ admet, pour tout $b$ :",
            "options": [
              "Au moins une solution",
              "Aucune solution",
              "Au plus une solution sans existence",
              "Une unique solution"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Existence et unicité à la fois : une unique solution."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "La vérification graphique",
          "stepTheme": "La vérification graphique",
          "stepBadge": "La vérification graphique",
          "paragraphText": "• Méthode graphique de la leçon : pour une application d’un intervalle $K$ dans un intervalle $L$, on vérifie que toute droite d’équation $y = b$ coupe la courbe en un unique point d’abscisse dans $K$.\nSi une droite horizontale coupe la courbe deux fois, l’application n’est pas bijective.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q4",
            "type": "mcq",
            "prompt": "Graphiquement, une application d’intervalle est bijective si toute droite $y = b$ coupe sa courbe :",
            "options": [
              "En aucun point",
              "En au moins deux points",
              "En un unique point",
              "Uniquement à l’origine"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un unique point d’intersection pour chaque droite horizontale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un exemple complet de bijection",
          "stepTheme": "Un exemple complet de bijection",
          "stepBadge": "Un exemple complet de bijection",
          "paragraphText": "• Exemple de la leçon : $f(x) = x^2$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$ est bijective.\nPour $y \\geq 0$, le seul antécédent possible dans $]-\\infty ; 0]$ est $-\\sqrt{y}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q5",
            "type": "mcq",
            "prompt": "Quel est l’antécédent de $y \\geq 0$ par $f(x) = x^2$ définie sur $]-\\infty ; 0]$ ?",
            "options": [
              "$y^2$",
              "$\\sqrt{y}$",
              "$y$",
              "$-\\sqrt{y}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’antécédent doit être négatif ou nul : c’est $-\\sqrt{y}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le choix des ensembles compte",
          "stepTheme": "Le choix des ensembles compte",
          "stepBadge": "Le choix des ensembles compte",
          "paragraphText": "• Piège : la formule $x^2$ ne donne pas toujours une bijection ; tout dépend des ensembles de départ et d’arrivée.\nSur $\\mathbb{R}$ tout entier, $x^2$ n’est ni injective ($1$ et $-1$ ont la même image) ni surjective vers $\\mathbb{R}$ (les négatifs n’ont pas d’antécédent).",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q6",
            "type": "mcq",
            "prompt": "Pourquoi $x \\mapsto x^2$ de $\\mathbb{R}$ vers $\\mathbb{R}$ n’est-elle pas bijective ?",
            "options": [
              "Parce qu’elle est injective et surjective",
              "Parce que $1$ et $-1$ ont la même image et que les réels négatifs n’ont pas d’antécédent",
              "Parce que $0$ n’a pas d’image",
              "Parce qu’elle n’est pas une application"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Elle échoue aux deux tests : ni injective, ni surjective sur ces ensembles."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Expliciter après avoir justifié",
          "stepTheme": "Expliciter après avoir justifié",
          "stepBadge": "Expliciter après avoir justifié",
          "paragraphText": "• Exercice de la leçon : l’application $f$ de $]-\\infty ; 1]$ vers $[-4 ; +\\infty[$ définie par $f(x) = x^2 - 2x - 3$ est une bijection.\nEn écrivant $f(x) = (x - 1)^2 - 4$, on trouve que l’antécédent de $y$ est $1 - \\sqrt{y + 4}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q7",
            "type": "mcq",
            "prompt": "Pour cette application, l’antécédent de $y \\in [-4 ; +\\infty[$ est :",
            "options": [
              "$1 + \\sqrt{y + 4}$",
              "$\\sqrt{y + 4}$",
              "$1 - \\sqrt{y + 4}$",
              "$y + 4$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Comme $x \\leq 1$, on choisit la racine négative : $x - 1 = -\\sqrt{y + 4}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q1",
          "type": "mcq",
          "prompt": "Une application est bijective lorsque tout élément de l’ensemble d’arrivée admet :",
          "options": [
            "Au plus un antécédent",
            "Au moins un antécédent",
            "Un unique antécédent",
            "Aucun antécédent"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Bijective signifie : exactement un antécédent pour chaque élément d’arrivée."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q2",
          "type": "mcq",
          "prompt": "Une bijection est une application qui est :",
          "options": [
            "Injective seulement",
            "À la fois injective et surjective",
            "Surjective seulement",
            "Ni injective ni surjective"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété caractéristique des bijections."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q3",
          "type": "mcq",
          "prompt": "Par la méthode de l’équation, $f$ est bijective si $f(x) = b$ admet, pour tout $b$ :",
          "options": [
            "Au moins une solution",
            "Aucune solution",
            "Au plus une solution sans existence",
            "Une unique solution"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Existence et unicité à la fois : une unique solution."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q4",
          "type": "mcq",
          "prompt": "Graphiquement, une application d’intervalle est bijective si toute droite $y = b$ coupe sa courbe :",
          "options": [
            "En aucun point",
            "En au moins deux points",
            "En un unique point",
            "Uniquement à l’origine"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un unique point d’intersection pour chaque droite horizontale."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q5",
          "type": "mcq",
          "prompt": "Quel est l’antécédent de $y \\geq 0$ par $f(x) = x^2$ définie sur $]-\\infty ; 0]$ ?",
          "options": [
            "$y^2$",
            "$\\sqrt{y}$",
            "$y$",
            "$-\\sqrt{y}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’antécédent doit être négatif ou nul : c’est $-\\sqrt{y}$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q6",
          "type": "mcq",
          "prompt": "Pourquoi $x \\mapsto x^2$ de $\\mathbb{R}$ vers $\\mathbb{R}$ n’est-elle pas bijective ?",
          "options": [
            "Parce qu’elle est injective et surjective",
            "Parce que $1$ et $-1$ ont la même image et que les réels négatifs n’ont pas d’antécédent",
            "Parce que $0$ n’a pas d’image",
            "Parce qu’elle n’est pas une application"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Elle échoue aux deux tests : ni injective, ni surjective sur ces ensembles."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p04_q7",
          "type": "mcq",
          "prompt": "Pour cette application, l’antécédent de $y \\in [-4 ; +\\infty[$ est :",
          "options": [
            "$1 + \\sqrt{y + 4}$",
            "$\\sqrt{y + 4}$",
            "$1 - \\sqrt{y + 4}$",
            "$y + 4$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Comme $x \\leq 1$, on choisit la racine négative : $x - 1 = -\\sqrt{y + 4}$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05",
      "order": 5,
      "title": "Bijection réciproque",
      "summary": "Définir la bijection réciproque, la déterminer sur des exemples et connaître la symétrie des courbes représentatives.",
      "conceptExplanation": "Soit $f$ une bijection de $E$ dans $F$. On appelle bijection réciproque de $f$ l’application de $F$ dans $E$, notée $f^{-1}$, qui à tout élément de $F$ associe son unique antécédent par $f$ dans $E$.\nExemple : pour la bijection $f$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$ définie par $f(x) = x^2$, la bijection réciproque est définie par $f^{-1}(x) = -\\sqrt{x}$.\nRemarque : si $f$ est une bijection, alors $f$ est aussi la bijection réciproque de $f^{-1}$.\nPropriété : dans un repère orthonormé, les courbes d’une bijection et de sa réciproque sont symétriques par rapport à la première bissectrice, la droite d’équation $y = x$.",
      "keyRule": "La réciproque échange départ et arrivée : elle renvoie chaque image sur son unique antécédent.",
      "formulas": [
        {
          "name": "Réciproque de la racine carrée",
          "formula": "f : x \\mapsto \\sqrt{x} \\quad \\text{et} \\quad f^{-1} : x \\mapsto x^2",
          "note": "Sur $\\mathbb{R}_+$, d’après l’exercice de fixation de la leçon."
        }
      ],
      "workedExample": {
        "title": "La réciproque de $f(x) = \\sqrt{x}$ (exercice de fixation)",
        "statement": "Soit l’application bijective $f$ de $\\mathbb{R}_+$ vers $\\mathbb{R}_+$ définie par $f(x) = \\sqrt{x}$. Détermine sa bijection réciproque.",
        "methodSteps": [
          "Soit $b \\in \\mathbb{R}_+$ tel que $f(x) = b$ : alors $\\sqrt{x} = b$, donc $x = b^2$.",
          "Chaque $b$ a pour unique antécédent $b^2$.",
          "La bijection réciproque envoie donc $x$ sur $x^2$."
        ],
        "conclusion": "$f^{-1}$ est l’application de $\\mathbb{R}_+$ vers $\\mathbb{R}_+$ définie par $f^{-1}(x) = x^2$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Ce qu’est la bijection réciproque",
          "stepTheme": "Ce qu’est la bijection réciproque",
          "stepBadge": "Ce qu’est la bijection réciproque",
          "paragraphText": "• Définition : si $f$ est une bijection de $E$ dans $F$, sa bijection réciproque est l’application de $F$ dans $E$, notée $f^{-1}$, qui à tout élément de $F$ associe son unique antécédent par $f$.\nElle n’existe que parce que $f$ est bijective : l’antécédent est garanti et unique.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q1",
            "type": "mcq",
            "prompt": "La bijection réciproque $f^{-1}$ associe à chaque élément de $F$ :",
            "options": [
              "Son image par $f$",
              "Son unique antécédent par $f$",
              "L’élément $0$",
              "Son opposé"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Par définition, $f^{-1}$ renvoie chaque élément de $F$ sur son antécédent par $f$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La réciproque de $x^2$ sur les négatifs",
          "stepTheme": "La réciproque de $x^2$ sur les négatifs",
          "stepBadge": "La réciproque de $x^2$ sur les négatifs",
          "paragraphText": "• Exemple de la leçon : la bijection $f$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$ définie par $f(x) = x^2$ a pour réciproque $f^{-1}(x) = -\\sqrt{x}$.\nLe signe moins vient de l’ensemble d’arrivée de $f^{-1}$, formé de réels négatifs ou nuls.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q2",
            "type": "mcq",
            "prompt": "Quelle est la bijection réciproque de $f(x) = x^2$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$ ?",
            "options": [
              "$f^{-1}(x) = \\sqrt{x}$",
              "$f^{-1}(x) = x^2$",
              "$f^{-1}(x) = -\\sqrt{x}$",
              "$f^{-1}(x) = -x^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’antécédent de $x \\geq 0$ est négatif ou nul : $f^{-1}(x) = -\\sqrt{x}$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une symétrie des rôles",
          "stepTheme": "Une symétrie des rôles",
          "stepBadge": "Une symétrie des rôles",
          "paragraphText": "• Remarque de la leçon : si $f$ est une bijection et $f^{-1}$ sa bijection réciproque, alors $f$ est la bijection réciproque de $f^{-1}$.\nLes deux applications se répondent : appliquer l’une puis l’autre ramène au point de départ.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q3",
            "type": "mcq",
            "prompt": "Qui est la bijection réciproque de $f^{-1}$ ?",
            "options": [
              "$f$",
              "$f^{-1}$ elle-même",
              "L’application nulle",
              "Elle n’existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La réciproque de la réciproque est l’application de départ : $f$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La symétrie des courbes",
          "stepTheme": "La symétrie des courbes",
          "stepBadge": "La symétrie des courbes",
          "paragraphText": "• Propriété de la leçon : dans un repère orthonormé, les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à la droite d’équation $y = x$.\nCette droite est la première bissectrice du repère.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q4",
            "type": "mcq",
            "prompt": "Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à :",
            "options": [
              "L’axe des abscisses",
              "L’axe des ordonnées",
              "La première bissectrice $y = x$",
              "L’origine seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La symétrie se fait par rapport à la première bissectrice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "La réciproque de la racine carrée",
          "stepTheme": "La réciproque de la racine carrée",
          "stepBadge": "La réciproque de la racine carrée",
          "paragraphText": "• Exercice de fixation de la leçon : la bijection $f$ de $\\mathbb{R}_+$ vers $\\mathbb{R}_+$ définie par $f(x) = \\sqrt{x}$ a pour réciproque $f^{-1}(x) = x^2$.\nOn le retrouve en résolvant $\\sqrt{x} = b$, qui donne $x = b^2$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q5",
            "type": "mcq",
            "prompt": "Quelle est la bijection réciproque de $x \\mapsto \\sqrt{x}$ sur $\\mathbb{R}_+$ ?",
            "options": [
              "$x \\mapsto \\frac{1}{x}$",
              "$x \\mapsto x^2$",
              "$x \\mapsto \\sqrt{x}$",
              "$x \\mapsto -\\sqrt{x}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L’antécédent de $b$ par la racine carrée est $b^2$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Réciproque ne veut pas dire inverse",
          "stepTheme": "Réciproque ne veut pas dire inverse",
          "stepBadge": "Réciproque ne veut pas dire inverse",
          "paragraphText": "• Piège : la notation $f^{-1}$ ne désigne pas la fonction inverse $\\frac{1}{f}$.\nIci, $f^{-1}$ est une application entre les mêmes ensembles échangés, définie par les antécédents de $f$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q6",
            "type": "mcq",
            "prompt": "Dans cette leçon, la notation $f^{-1}$ désigne :",
            "options": [
              "La fonction $x \\mapsto \\frac{1}{f(x)}$",
              "L’opposé de $f$",
              "Le produit de $f$ par $-1$",
              "La bijection réciproque de $f$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$f^{-1}$ est la bijection réciproque, construite à partir des antécédents."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q1",
          "type": "mcq",
          "prompt": "La bijection réciproque $f^{-1}$ associe à chaque élément de $F$ :",
          "options": [
            "Son image par $f$",
            "Son unique antécédent par $f$",
            "L’élément $0$",
            "Son opposé"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Par définition, $f^{-1}$ renvoie chaque élément de $F$ sur son antécédent par $f$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q2",
          "type": "mcq",
          "prompt": "Quelle est la bijection réciproque de $f(x) = x^2$ de $]-\\infty ; 0]$ vers $[0 ; +\\infty[$ ?",
          "options": [
            "$f^{-1}(x) = \\sqrt{x}$",
            "$f^{-1}(x) = x^2$",
            "$f^{-1}(x) = -\\sqrt{x}$",
            "$f^{-1}(x) = -x^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’antécédent de $x \\geq 0$ est négatif ou nul : $f^{-1}(x) = -\\sqrt{x}$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q3",
          "type": "mcq",
          "prompt": "Qui est la bijection réciproque de $f^{-1}$ ?",
          "options": [
            "$f$",
            "$f^{-1}$ elle-même",
            "L’application nulle",
            "Elle n’existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La réciproque de la réciproque est l’application de départ : $f$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q4",
          "type": "mcq",
          "prompt": "Les courbes de $f$ et de $f^{-1}$ sont symétriques par rapport à :",
          "options": [
            "L’axe des abscisses",
            "L’axe des ordonnées",
            "La première bissectrice $y = x$",
            "L’origine seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La symétrie se fait par rapport à la première bissectrice."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q5",
          "type": "mcq",
          "prompt": "Quelle est la bijection réciproque de $x \\mapsto \\sqrt{x}$ sur $\\mathbb{R}_+$ ?",
          "options": [
            "$x \\mapsto \\frac{1}{x}$",
            "$x \\mapsto x^2$",
            "$x \\mapsto \\sqrt{x}$",
            "$x \\mapsto -\\sqrt{x}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L’antécédent de $b$ par la racine carrée est $b^2$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p05_q6",
          "type": "mcq",
          "prompt": "Dans cette leçon, la notation $f^{-1}$ désigne :",
          "options": [
            "La fonction $x \\mapsto \\frac{1}{f(x)}$",
            "L’opposé de $f$",
            "Le produit de $f$ par $-1$",
            "La bijection réciproque de $f$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$f^{-1}$ est la bijection réciproque, construite à partir des antécédents."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06",
      "order": 6,
      "title": "Restriction et opérations sur les fonctions",
      "summary": "Définir la restriction d’une fonction à une partie, puis les opérations somme, produit et quotient avec leurs ensembles de définition.",
      "conceptExplanation": "Soit $f$ une fonction d’un ensemble $E$ vers $F$ et $A$ une partie non vide de l’ensemble de définition de $f$. On appelle restriction de $f$ à $A$ l’application $g$ de $A$ vers $F$ définie par $g(x) = f(x)$.\nExemple : pour la fonction définie par $f(x) = x + 1$ si $x \\leq 1$ et $f(x) = \\sqrt{x} + 3$ si $x > 1$, la restriction à $]-\\infty ; 1]$ est $g(x) = x + 1$ et la restriction à $]1 ; +\\infty[$ est $h(x) = \\sqrt{x} + 3$.\nOpérations : pour deux fonctions $f$ et $g$ de $\\mathbb{R}$ vers $\\mathbb{R}$, la somme $f + g$ et le produit $fg$ sont définis sur $D_f \\cap D_g$ par $(f + g)(x) = f(x) + g(x)$ et $(fg)(x) = f(x) \\times g(x)$ ; le quotient $\\frac{f}{g}$ est défini sur $D_f \\cap D_g \\cap D$, où $D$ est l’ensemble des réels $x$ tels que $g(x) \\neq 0$.",
      "keyRule": "Restriction : même formule, ensemble réduit. Opérations : l’ensemble de définition est toujours une intersection.",
      "formulas": [
        {
          "name": "Somme, produit et quotient",
          "formula": "(f + g)(x) = f(x) + g(x), \\quad (fg)(x) = f(x) \\times g(x), \\quad \\frac{f}{g}(x) = \\frac{f(x)}{g(x)}",
          "note": "Définis sur les intersections des ensembles de définition, avec $g(x) \\neq 0$ pour le quotient."
        }
      ],
      "workedExample": {
        "title": "Le produit de deux fonctions (exemple de la leçon)",
        "statement": "On considère les fonctions $f$ et $g$ définies par $f(x) = \\frac{x + 1}{x - 1}$ et $g(x) = x - 1$. Détermine l’ensemble de définition du produit $fg$ et explicite $(fg)(x)$.",
        "methodSteps": [
          "On a $D_f = \\mathbb{R} \\setminus \\{1\\}$ et $D_g = \\mathbb{R}$, donc $D_{fg} = \\mathbb{R} \\setminus \\{1\\}$.",
          "Pour tout $x \\in \\mathbb{R} \\setminus \\{1\\}$ : $(fg)(x) = \\frac{x + 1}{x - 1} \\times (x - 1)$.",
          "Après simplification, $(fg)(x) = x + 1$."
        ],
        "conclusion": "Le produit $fg$ est défini sur $\\mathbb{R} \\setminus \\{1\\}$ par $(fg)(x) = x + 1$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La restriction d’une fonction",
          "stepTheme": "La restriction d’une fonction",
          "stepBadge": "La restriction d’une fonction",
          "paragraphText": "• Définition : la restriction de $f$ à une partie non vide $A$ de son ensemble de définition est l’application $g$ de $A$ vers $F$ définie par $g(x) = f(x)$.\nLa formule ne change pas : seul l’ensemble de départ est réduit.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q1",
            "type": "mcq",
            "prompt": "La restriction de $f$ à $A$ est :",
            "options": [
              "Une fonction définie par une autre formule",
              "Le produit de $f$ par un nombre",
              "La même fonction, limitée à une partie $A$ de son ensemble de définition",
              "La bijection réciproque de $f$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La restriction garde la même formule sur un ensemble de départ plus petit."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Restreindre une fonction définie par morceaux",
          "stepTheme": "Restreindre une fonction définie par morceaux",
          "stepBadge": "Restreindre une fonction définie par morceaux",
          "paragraphText": "• Exemple de la leçon : $f$ vaut $x + 1$ pour $x \\leq 1$ et $\\sqrt{x} + 3$ pour $x > 1$.\nSa restriction à $]-\\infty ; 1]$ est $g(x) = x + 1$ et sa restriction à $]1 ; +\\infty[$ est $h(x) = \\sqrt{x} + 3$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q2",
            "type": "mcq",
            "prompt": "Quelle est la restriction à $]1 ; +\\infty[$ de la fonction de l’exemple ?",
            "options": [
              "$h(x) = \\sqrt{x} + 3$",
              "$g(x) = x + 1$",
              "$h(x) = x + 1$",
              "$g(x) = \\sqrt{x}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Sur $]1 ; +\\infty[$, la fonction vaut $\\sqrt{x} + 3$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Somme et produit : intersection des domaines",
          "stepTheme": "Somme et produit : intersection des domaines",
          "stepBadge": "Somme et produit : intersection des domaines",
          "paragraphText": "• D’après le tableau de la leçon : $D_{f + g} = D_f \\cap D_g$ et $D_{fg} = D_f \\cap D_g$.\nUne valeur n’est admise que si elle appartient aux deux ensembles de définition à la fois.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q3",
            "type": "mcq",
            "prompt": "L’ensemble de définition de la somme $f + g$ est :",
            "options": [
              "$D_f$ seulement",
              "$D_g$ seulement",
              "$D_f \\cup D_g$",
              "$D_f \\cap D_g$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Somme et produit sont définis sur l’intersection des deux ensembles de définition."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le cas du quotient",
          "stepTheme": "Le cas du quotient",
          "stepBadge": "Le cas du quotient",
          "paragraphText": "• Pour le quotient, la leçon ajoute l’ensemble $D$ des réels $x$ tels que $g(x) \\neq 0$.\nDonc l’ensemble de définition de $\\frac{f}{g}$ est $D_f \\cap D_g \\cap D$ : trois conditions à réunir.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q4",
            "type": "mcq",
            "prompt": "L’ensemble de définition du quotient $\\frac{f}{g}$ demande en plus que :",
            "options": [
              "$f(x) \\neq 0$",
              "$x \\neq 0$ dans tous les cas",
              "$g(x) \\neq 0$",
              "$f(x) = g(x)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un quotient n’existe que si son dénominateur $g(x)$ est non nul."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le produit de l’exemple de la leçon",
          "stepTheme": "Le produit de l’exemple de la leçon",
          "stepBadge": "Le produit de l’exemple de la leçon",
          "paragraphText": "• Exemple de la leçon : pour $f(x) = \\frac{x + 1}{x - 1}$ et $g(x) = x - 1$, le produit est défini sur $\\mathbb{R} \\setminus \\{1\\}$.\nEt pour tout $x$ de cet ensemble, $(fg)(x) = x + 1$ après simplification.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q5",
            "type": "mcq",
            "prompt": "Pour ces deux fonctions, que vaut $(fg)(x)$ ?",
            "options": [
              "$\\frac{x + 1}{(x - 1)^2}$",
              "$x + 1$",
              "$x - 1$",
              "$\\frac{1}{x - 1}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le facteur $(x - 1)$ se simplifie : il reste $x + 1$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège de la simplification",
          "stepTheme": "Le piège de la simplification",
          "stepBadge": "Le piège de la simplification",
          "paragraphText": "• Piège : même si $(fg)(x)$ se simplifie en $x + 1$, le produit reste défini sur $\\mathbb{R} \\setminus \\{1\\}$.\nLa valeur $1$ était exclue dès le départ par $D_f$ : la simplification ne la réintroduit pas.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q6",
            "type": "mcq",
            "prompt": "Après simplification, l’ensemble de définition du produit de l’exemple est :",
            "options": [
              "$\\mathbb{R} \\setminus \\{1\\}$",
              "$\\mathbb{R}$ tout entier",
              "$\\{1\\}$",
              "$\\emptyset$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’ensemble de définition est fixé avant la simplification : $\\mathbb{R} \\setminus \\{1\\}$."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "methode",
          "stepTitle": "Restreindre une fonction avec valeur absolue",
          "stepTheme": "Restreindre une fonction avec valeur absolue",
          "stepBadge": "Restreindre une fonction avec valeur absolue",
          "paragraphText": "• Exercice de la leçon : pour $h(x) = 3 - |2 - x|$, sur $]-\\infty ; 2]$ on a $2 - x \\geq 0$, donc $|2 - x| = 2 - x$.\nLa restriction de $h$ à $]-\\infty ; 2]$ est donc la fonction définie par $f(x) = x + 1$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q7",
            "type": "mcq",
            "prompt": "Quelle est la restriction de $h(x) = 3 - |2 - x|$ à $]-\\infty ; 2]$ ?",
            "options": [
              "$f(x) = 5 - x$",
              "$f(x) = 3 - x$",
              "$f(x) = |x|$",
              "$f(x) = x + 1$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Sur $]-\\infty ; 2]$, $|2 - x| = 2 - x$, donc $h(x) = 3 - (2 - x) = x + 1$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q1",
          "type": "mcq",
          "prompt": "La restriction de $f$ à $A$ est :",
          "options": [
            "Une fonction définie par une autre formule",
            "Le produit de $f$ par un nombre",
            "La même fonction, limitée à une partie $A$ de son ensemble de définition",
            "La bijection réciproque de $f$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La restriction garde la même formule sur un ensemble de départ plus petit."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q2",
          "type": "mcq",
          "prompt": "Quelle est la restriction à $]1 ; +\\infty[$ de la fonction de l’exemple ?",
          "options": [
            "$h(x) = \\sqrt{x} + 3$",
            "$g(x) = x + 1$",
            "$h(x) = x + 1$",
            "$g(x) = \\sqrt{x}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Sur $]1 ; +\\infty[$, la fonction vaut $\\sqrt{x} + 3$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q3",
          "type": "mcq",
          "prompt": "L’ensemble de définition de la somme $f + g$ est :",
          "options": [
            "$D_f$ seulement",
            "$D_g$ seulement",
            "$D_f \\cup D_g$",
            "$D_f \\cap D_g$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Somme et produit sont définis sur l’intersection des deux ensembles de définition."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q4",
          "type": "mcq",
          "prompt": "L’ensemble de définition du quotient $\\frac{f}{g}$ demande en plus que :",
          "options": [
            "$f(x) \\neq 0$",
            "$x \\neq 0$ dans tous les cas",
            "$g(x) \\neq 0$",
            "$f(x) = g(x)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Un quotient n’existe que si son dénominateur $g(x)$ est non nul."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q5",
          "type": "mcq",
          "prompt": "Pour ces deux fonctions, que vaut $(fg)(x)$ ?",
          "options": [
            "$\\frac{x + 1}{(x - 1)^2}$",
            "$x + 1$",
            "$x - 1$",
            "$\\frac{1}{x - 1}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le facteur $(x - 1)$ se simplifie : il reste $x + 1$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q6",
          "type": "mcq",
          "prompt": "Après simplification, l’ensemble de définition du produit de l’exemple est :",
          "options": [
            "$\\mathbb{R} \\setminus \\{1\\}$",
            "$\\mathbb{R}$ tout entier",
            "$\\{1\\}$",
            "$\\emptyset$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’ensemble de définition est fixé avant la simplification : $\\mathbb{R} \\setminus \\{1\\}$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p06_q7",
          "type": "mcq",
          "prompt": "Quelle est la restriction de $h(x) = 3 - |2 - x|$ à $]-\\infty ; 2]$ ?",
          "options": [
            "$f(x) = 5 - x$",
            "$f(x) = 3 - x$",
            "$f(x) = |x|$",
            "$f(x) = x + 1$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Sur $]-\\infty ; 2]$, $|2 - x| = 2 - x$, donc $h(x) = 3 - (2 - x) = x + 1$."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07",
      "order": 7,
      "title": "Comparaison et composition de fonctions",
      "summary": "Comparer deux fonctions sur un intervalle par l’étude du signe de leur différence ou par leurs courbes, et composer deux fonctions.",
      "conceptExplanation": "Soit $I$ un intervalle de $\\mathbb{R}$ et $f$ et $g$ deux fonctions données sur $I$. On dit que $f$ est inférieure ou égale à $g$ sur $I$, et on note $f \\leq g$ sur $I$, lorsque pour tout $x \\in I$, $f(x) \\leq g(x)$ ; de même, $f \\geq g$ sur $I$ lorsque $f(x) \\geq g(x)$ pour tout $x \\in I$.\nPoint méthode : pour comparer $f$ et $g$ par leurs formules, on calcule $f(x) - g(x)$ et on étudie son signe sur $I$ ; graphiquement, $f \\leq g$ sur $I$ quand la courbe de $f$ est au-dessous de celle de $g$.\nComposition : si $f$ est une fonction de $E$ vers $F$ et $g$ une fonction de $F$ vers $G$, la composée de $f$ par $g$ est la fonction de $E$ vers $G$ notée $g \\circ f$ et définie par $g \\circ f(x) = g[f(x)]$. On a : $x \\in D_{g \\circ f}$ si et seulement si $x \\in D_f$ et $f(x) \\in D_g$.",
      "keyRule": "Comparer : étudie le signe de la différence. Composer : $g \\circ f$ applique $f$ d’abord, $g$ ensuite.",
      "formulas": [
        {
          "name": "Composée de deux fonctions",
          "formula": "g \\circ f(x) = g[f(x)]",
          "note": "$f$ s’applique en premier, $g$ en second."
        }
      ],
      "workedExample": {
        "title": "Composer $f(x) = \\frac{1}{x^2}$ et $g(x) = \\frac{x + 2}{x - 1}$ (exercice de fixation)",
        "statement": "Soit $f$ et $g$ les fonctions de $\\mathbb{R}$ vers $\\mathbb{R}$ définies par $f(x) = \\frac{1}{x^2}$ et $g(x) = \\frac{x + 2}{x - 1}$. Détermine l’ensemble de définition de $g \\circ f$, puis explicite $g \\circ f(x)$.",
        "methodSteps": [
          "On a $D_f = \\mathbb{R} \\setminus \\{0\\}$ et $D_g = \\mathbb{R} \\setminus \\{1\\}$.",
          "La condition $f(x) \\in D_g$ donne $\\frac{1}{x^2} \\neq 1$, c’est-à-dire $x \\neq -1$ et $x \\neq 1$ : l’ensemble cherché est $\\mathbb{R} \\setminus \\{-1 ; 0 ; 1\\}$.",
          "On calcule $g \\circ f(x) = \\frac{f(x) + 2}{f(x) - 1} = \\frac{1 + 2x^2}{1 - x^2}$."
        ],
        "conclusion": "La composée $g \\circ f$ est définie sur $\\mathbb{R} \\setminus \\{-1 ; 0 ; 1\\}$ par $g \\circ f(x) = \\frac{2x^2 + 1}{1 - x^2}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Comparer deux fonctions sur un intervalle",
          "stepTheme": "Comparer deux fonctions sur un intervalle",
          "stepBadge": "Comparer deux fonctions sur un intervalle",
          "paragraphText": "• Définitions de la leçon : $f \\leq g$ sur $I$ signifie que $f(x) \\leq g(x)$ pour tout $x$ de $I$.\nDe même, $f \\geq g$ sur $I$ signifie que $f(x) \\geq g(x)$ pour tout $x$ de $I$ : la comparaison vaut sur tout l’intervalle, pas en un seul point.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q1",
            "type": "mcq",
            "prompt": "Dire que $f \\leq g$ sur $I$ signifie :",
            "options": [
              "$f(x) \\leq g(x)$ pour un seul $x$ de $I$",
              "$f$ et $g$ ont la même courbe",
              "$f(x) = g(x)$ sur $I$",
              "$f(x) \\leq g(x)$ pour tout $x$ de $I$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La comparaison porte sur tous les points de l’intervalle $I$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Comparer par la différence",
          "stepTheme": "Comparer par la différence",
          "stepBadge": "Comparer par la différence",
          "paragraphText": "• Point méthode de la leçon : on calcule $f(x) - g(x)$ pour tout $x \\in I$, puis on étudie le signe de cette différence.\nSi $f(x) - g(x) \\leq 0$, alors $f \\leq g$ sur $I$ ; si $f(x) - g(x) \\geq 0$, alors $f \\geq g$ sur $I$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q2",
            "type": "mcq",
            "prompt": "Pour comparer $f$ et $g$ par le calcul, on étudie :",
            "options": [
              "Le signe de $f(x) - g(x)$ sur $I$",
              "La somme $f(x) + g(x)$",
              "Le quotient des deux fonctions seulement",
              "Les valeurs en $0$ uniquement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule la différence et on étudie son signe sur l’intervalle."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Comparer par les courbes",
          "stepTheme": "Comparer par les courbes",
          "stepBadge": "Comparer par les courbes",
          "paragraphText": "• Point méthode graphique de la leçon : si la courbe de $f$ est au-dessous de celle de $g$ sur $I$, alors $f \\leq g$ sur $I$.\nSi elle est au-dessus, alors $f \\geq g$ sur $I$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q3",
            "type": "mcq",
            "prompt": "Sur $I$, la courbe de $f$ est au-dessous de celle de $g$. On en déduit :",
            "options": [
              "$f \\geq g$ sur $I$",
              "$f \\leq g$ sur $I$",
              "$f = g$ sur $I$",
              "Aucune comparaison possible"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Courbe au-dessous signifie valeurs plus petites : $f \\leq g$ sur $I$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Justifier que $x^2 + 1 \\geq 2x$",
          "stepTheme": "Justifier que $x^2 + 1 \\geq 2x$",
          "stepBadge": "Justifier que $x^2 + 1 \\geq 2x$",
          "paragraphText": "• Exercice de fixation de la leçon : pour tout réel $x$, $x^2 + 1 - 2x = (x - 1)^2 \\geq 0$.\nDonc $x^2 + 1 \\geq 2x$ pour tout $x \\in \\mathbb{R}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q4",
            "type": "mcq",
            "prompt": "Pour tout réel $x$, $x^2 + 1 - 2x$ est égal à :",
            "options": [
              "$(x + 1)^2$",
              "$x^2 - 1$",
              "$(x - 1)^2$, toujours positif ou nul",
              "$2x - 1$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On reconnaît l’identité remarquable $(x - 1)^2 = x^2 - 2x + 1$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "definition",
          "stepTitle": "La composée de deux fonctions",
          "stepTheme": "La composée de deux fonctions",
          "stepBadge": "La composée de deux fonctions",
          "paragraphText": "• Définition : si $f$ va de $E$ vers $F$ et $g$ de $F$ vers $G$, la composée de $f$ par $g$ est la fonction de $E$ vers $G$ notée $g \\circ f$.\nElle est définie par $g \\circ f(x) = g[f(x)]$ : on applique $f$ d’abord.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q5",
            "type": "mcq",
            "prompt": "Par définition, $g \\circ f(x)$ est égal à :",
            "options": [
              "$f[g(x)]$",
              "$g[f(x)]$",
              "$f(x) \\times g(x)$",
              "$f(x) + g(x)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La composée applique $f$ à $x$, puis $g$ au résultat."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L’ensemble de définition d’une composée",
          "stepTheme": "L’ensemble de définition d’une composée",
          "stepBadge": "L’ensemble de définition d’une composée",
          "paragraphText": "• D’après la leçon : $x \\in D_{g \\circ f}$ si et seulement si $x \\in D_f$ et $f(x) \\in D_g$.\nDans l’exercice de fixation, pour $f(x) = \\frac{1}{x^2}$ et $g(x) = \\frac{x + 2}{x - 1}$, on obtient $D_{g \\circ f} = \\mathbb{R} \\setminus \\{-1 ; 0 ; 1\\}$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q6",
            "type": "mcq",
            "prompt": "Pour que $x$ soit dans $D_{g \\circ f}$, il faut :",
            "options": [
              "$x \\in D_f$ et $f(x) \\in D_g$",
              "$x \\in D_g$ seulement",
              "$f(x) \\in D_f$",
              "$x \\in D_f \\cup D_g$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux conditions doivent être réunies, dans l’ordre de la composition."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "piege",
          "stepTitle": "L’ordre de composition compte",
          "stepTheme": "L’ordre de composition compte",
          "stepBadge": "L’ordre de composition compte",
          "paragraphText": "• Piège : $g \\circ f$ et $f \\circ g$ ne sont pas interchangeables ; dans $g \\circ f$, c’est $f$ qui s’applique en premier.\nLa leçon rappelle aussi que si $f$ est une bijection, $f^{-1} \\circ f$ est l’application identique de $E$ et $f \\circ f^{-1}$ celle de $F$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q7",
            "type": "mcq",
            "prompt": "Dans la notation $g \\circ f$, quelle fonction s’applique en premier ?",
            "options": [
              "$g$",
              "Les deux en même temps",
              "$f$",
              "Celle qui a le plus grand ensemble de définition"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On lit la composition de droite à gauche : $f$ d’abord, $g$ ensuite."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q1",
          "type": "mcq",
          "prompt": "Dire que $f \\leq g$ sur $I$ signifie :",
          "options": [
            "$f(x) \\leq g(x)$ pour un seul $x$ de $I$",
            "$f$ et $g$ ont la même courbe",
            "$f(x) = g(x)$ sur $I$",
            "$f(x) \\leq g(x)$ pour tout $x$ de $I$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La comparaison porte sur tous les points de l’intervalle $I$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q2",
          "type": "mcq",
          "prompt": "Pour comparer $f$ et $g$ par le calcul, on étudie :",
          "options": [
            "Le signe de $f(x) - g(x)$ sur $I$",
            "La somme $f(x) + g(x)$",
            "Le quotient des deux fonctions seulement",
            "Les valeurs en $0$ uniquement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule la différence et on étudie son signe sur l’intervalle."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q3",
          "type": "mcq",
          "prompt": "Sur $I$, la courbe de $f$ est au-dessous de celle de $g$. On en déduit :",
          "options": [
            "$f \\geq g$ sur $I$",
            "$f \\leq g$ sur $I$",
            "$f = g$ sur $I$",
            "Aucune comparaison possible"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Courbe au-dessous signifie valeurs plus petites : $f \\leq g$ sur $I$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q4",
          "type": "mcq",
          "prompt": "Pour tout réel $x$, $x^2 + 1 - 2x$ est égal à :",
          "options": [
            "$(x + 1)^2$",
            "$x^2 - 1$",
            "$(x - 1)^2$, toujours positif ou nul",
            "$2x - 1$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On reconnaît l’identité remarquable $(x - 1)^2 = x^2 - 2x + 1$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q5",
          "type": "mcq",
          "prompt": "Par définition, $g \\circ f(x)$ est égal à :",
          "options": [
            "$f[g(x)]$",
            "$g[f(x)]$",
            "$f(x) \\times g(x)$",
            "$f(x) + g(x)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La composée applique $f$ à $x$, puis $g$ au résultat."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q6",
          "type": "mcq",
          "prompt": "Pour que $x$ soit dans $D_{g \\circ f}$, il faut :",
          "options": [
            "$x \\in D_f$ et $f(x) \\in D_g$",
            "$x \\in D_g$ seulement",
            "$f(x) \\in D_f$",
            "$x \\in D_f \\cup D_g$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux conditions doivent être réunies, dans l’ordre de la composition."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p07_q7",
          "type": "mcq",
          "prompt": "Dans la notation $g \\circ f$, quelle fonction s’applique en premier ?",
          "options": [
            "$g$",
            "Les deux en même temps",
            "$f$",
            "Celle qui a le plus grand ensemble de définition"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On lit la composition de droite à gauche : $f$ d’abord, $g$ ensuite."
        }
      ]
    },
    {
      "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08",
      "order": 8,
      "title": "Représentations graphiques de fonctions associées",
      "summary": "Obtenir la courbe des fonctions associées à $f$ par translations et symétries à partir de la courbe de $f$.",
      "conceptExplanation": "Le plan est muni d’un repère orthogonal $(O, I, J)$ et $(C_f)$ désigne la courbe de $f$.\nLa courbe de $x \\mapsto f(x - a)$ est l’image de $(C_f)$ par la translation de vecteur $a \\overrightarrow{OI}$ ; celle de $x \\mapsto f(x) + b$ par la translation de vecteur $b \\overrightarrow{OJ}$ ; celle de $x \\mapsto f(x - a) + b$ par la translation de vecteur $a \\overrightarrow{OI} + b \\overrightarrow{OJ}$.\nLa courbe de $x \\mapsto f(-x)$ est l’image de $(C_f)$ par la symétrie orthogonale d’axe $(OJ)$ ; celle de $x \\mapsto -f(x)$ par la symétrie d’axe $(OI)$ ; celle de $x \\mapsto -f(-x)$ par la symétrie centrale de centre $O$.",
      "keyRule": "Un décalage dans la formule devient un déplacement de la courbe : translation pour les décalages, symétrie pour les changements de signe.",
      "formulas": [],
      "workedExample": {
        "title": "Construire la courbe de $g(x) = f(x - 3) + 1$ (exercice de fixation)",
        "statement": "La courbe $(C)$ d’une fonction $f$ définie sur $[1 ; 4]$ est donnée. On considère $g$ définie par $g(x) = f(x - 3) + 1$. Comment obtient-on sa courbe $(C')$ à partir de $(C)$ ?",
        "methodSteps": [
          "La forme $f(x - 3) + 1$ correspond à une translation, avec $a = 3$ et $b = 1$.",
          "Le vecteur de la translation est donc le vecteur de coordonnées $(3 ; 1)$.",
          "On applique cette translation à chaque point de $(C)$ pour obtenir $(C')$."
        ],
        "conclusion": "$(C')$ est l’image de $(C)$ par la translation de vecteur $(3 ; 1)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Les fonctions associées à f",
          "stepTheme": "Les fonctions associées à f",
          "stepBadge": "Les fonctions associées à f",
          "paragraphText": "• Dans ce point, on appelle fonction associée à $f$ toute fonction obtenue par décalage ou changement de signe, comme $x \\mapsto f(x - a)$ ou $x \\mapsto -f(x)$.\nSa courbe se déduit de celle de $f$ par une transformation du plan, sans nouveau tracé point par point.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q1",
            "type": "mcq",
            "prompt": "Une fonction associée à $f$ s’obtient :",
            "options": [
              "Par un changement de variable sans lien avec $f$",
              "En changeant l’ensemble de définition au hasard",
              "Par un décalage ou un changement de signe appliqué à $f$",
              "En composant $f$ avec elle-même dans tous les cas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les fonctions associées de la leçon sont obtenues par décalages et changements de signe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La translation horizontale",
          "stepTheme": "La translation horizontale",
          "stepBadge": "La translation horizontale",
          "paragraphText": "• Propriété de la leçon : la courbe de $x \\mapsto f(x - a)$ est l’image de $(C_f)$ par la translation de vecteur $a \\overrightarrow{OI}$.\nLe décalage se fait donc le long de l’axe des abscisses.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q2",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto f(x - a)$ s’obtient à partir de $(C_f)$ par :",
            "options": [
              "Une symétrie d’axe $(OJ)$",
              "La translation de vecteur $a \\overrightarrow{OI}$",
              "La translation de vecteur $a \\overrightarrow{OJ}$",
              "Une symétrie centrale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le décalage en $x$ produit une translation horizontale."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La translation verticale",
          "stepTheme": "La translation verticale",
          "stepBadge": "La translation verticale",
          "paragraphText": "• Propriété de la leçon : la courbe de $x \\mapsto f(x) + b$ est l’image de $(C_f)$ par la translation de vecteur $b \\overrightarrow{OJ}$.\nAjouter $b$ à toutes les ordonnées déplace la courbe verticalement.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q3",
            "type": "mcq",
            "prompt": "Ajouter une constante $b$ à $f(x)$ déplace la courbe :",
            "options": [
              "Verticalement, par la translation de vecteur $b \\overrightarrow{OJ}$",
              "Horizontalement",
              "Par une symétrie d’axe $(OI)$",
              "Elle ne la déplace pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ajouter $b$ aux ordonnées translate la courbe verticalement."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les symétries d’axes",
          "stepTheme": "Les symétries d’axes",
          "stepBadge": "Les symétries d’axes",
          "paragraphText": "• Propriétés de la leçon : la courbe de $x \\mapsto f(-x)$ est l’image de $(C_f)$ par la symétrie d’axe $(OJ)$.\nCelle de $x \\mapsto -f(x)$ est l’image de $(C_f)$ par la symétrie d’axe $(OI)$.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q4",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto -f(x)$ s’obtient par la symétrie d’axe :",
            "options": [
              "$(OJ)$",
              "$(OI)$",
              "La première bissectrice",
              "Aucune symétrie"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le changement de signe des ordonnées donne la symétrie d’axe $(OI)$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La symétrie centrale",
          "stepTheme": "La symétrie centrale",
          "stepBadge": "La symétrie centrale",
          "paragraphText": "• Propriété de la leçon : la courbe de $x \\mapsto -f(-x)$ est l’image de $(C_f)$ par la symétrie centrale de centre $O$.\nLes deux changements de signe se combinent en un demi-tour autour de l’origine.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q5",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto -f(-x)$ est l’image de $(C_f)$ par :",
            "options": [
              "La symétrie d’axe $(OI)$",
              "La symétrie d’axe $(OJ)$",
              "La symétrie centrale de centre $O$",
              "Une translation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les deux signes moins combinés donnent la symétrie centrale de centre $O$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le piège du sens du décalage horizontal",
          "stepTheme": "Le piège du sens du décalage horizontal",
          "stepBadge": "Le piège du sens du décalage horizontal",
          "paragraphText": "• Piège : la courbe de $x \\mapsto f(x - a)$ se translate dans le sens du vecteur $a \\overrightarrow{OI}$ ; pour $a = 3$, on avance de $3$ vers la droite.\nIl ne faut pas inverser le sens : le signe moins dans la formule ne signifie pas un recul.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q6",
            "type": "mcq",
            "prompt": "La courbe de $x \\mapsto f(x - 3)$ s’obtient en déplaçant $(C_f)$ :",
            "options": [
              "De $3$ unités vers la gauche",
              "De $3$ unités vers le haut",
              "Elle ne se déplace pas",
              "De $3$ unités vers la droite"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La translation est celle de vecteur $3 \\overrightarrow{OI}$, donc vers la droite."
          }
        },
        {
          "stepNumber": 7,
          "stepKind": "exemple",
          "stepTitle": "Construire la courbe de $f(x - 3) + 1$",
          "stepTheme": "Construire la courbe de $f(x - 3) + 1$",
          "stepBadge": "Construire la courbe de $f(x - 3) + 1$",
          "paragraphText": "• Exercice de fixation de la leçon : pour $g(x) = f(x - 3) + 1$, la courbe $(C')$ est l’image de $(C)$ par la translation de vecteur $(3 ; 1)$.\nOn déplace donc chaque point de $(C)$ de $3$ unités horizontalement et de $1$ unité verticalement.",
          "exercise": {
            "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q7",
            "type": "mcq",
            "prompt": "Par quelle transformation obtient-on la courbe de $g(x) = f(x - 3) + 1$ ?",
            "options": [
              "La symétrie centrale de centre $O$",
              "La translation de vecteur $(3 ; 1)$",
              "La symétrie d’axe $(OJ)$",
              "La translation de vecteur $(1 ; 3)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Avec $a = 3$ et $b = 1$, le vecteur de translation a pour coordonnées $(3 ; 1)$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q1",
          "type": "mcq",
          "prompt": "Une fonction associée à $f$ s’obtient :",
          "options": [
            "Par un changement de variable sans lien avec $f$",
            "En changeant l’ensemble de définition au hasard",
            "Par un décalage ou un changement de signe appliqué à $f$",
            "En composant $f$ avec elle-même dans tous les cas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les fonctions associées de la leçon sont obtenues par décalages et changements de signe."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q2",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto f(x - a)$ s’obtient à partir de $(C_f)$ par :",
          "options": [
            "Une symétrie d’axe $(OJ)$",
            "La translation de vecteur $a \\overrightarrow{OI}$",
            "La translation de vecteur $a \\overrightarrow{OJ}$",
            "Une symétrie centrale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le décalage en $x$ produit une translation horizontale."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q3",
          "type": "mcq",
          "prompt": "Ajouter une constante $b$ à $f(x)$ déplace la courbe :",
          "options": [
            "Verticalement, par la translation de vecteur $b \\overrightarrow{OJ}$",
            "Horizontalement",
            "Par une symétrie d’axe $(OI)$",
            "Elle ne la déplace pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ajouter $b$ aux ordonnées translate la courbe verticalement."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q4",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto -f(x)$ s’obtient par la symétrie d’axe :",
          "options": [
            "$(OJ)$",
            "$(OI)$",
            "La première bissectrice",
            "Aucune symétrie"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le changement de signe des ordonnées donne la symétrie d’axe $(OI)$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q5",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto -f(-x)$ est l’image de $(C_f)$ par :",
          "options": [
            "La symétrie d’axe $(OI)$",
            "La symétrie d’axe $(OJ)$",
            "La symétrie centrale de centre $O$",
            "Une translation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les deux signes moins combinés donnent la symétrie centrale de centre $O$."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q6",
          "type": "mcq",
          "prompt": "La courbe de $x \\mapsto f(x - 3)$ s’obtient en déplaçant $(C_f)$ :",
          "options": [
            "De $3$ unités vers la gauche",
            "De $3$ unités vers le haut",
            "Elle ne se déplace pas",
            "De $3$ unités vers la droite"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La translation est celle de vecteur $3 \\overrightarrow{OI}$, donc vers la droite."
        },
        {
          "id": "premiere_d_maths_numerique_l03_generalites_fonctions_p08_q7",
          "type": "mcq",
          "prompt": "Par quelle transformation obtient-on la courbe de $g(x) = f(x - 3) + 1$ ?",
          "options": [
            "La symétrie centrale de centre $O$",
            "La translation de vecteur $(3 ; 1)$",
            "La symétrie d’axe $(OJ)$",
            "La translation de vecteur $(1 ; 3)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Avec $a = 3$ et $b = 1$, le vecteur de translation a pour coordonnées $(3 ; 1)$."
        }
      ]
    }
  ]
};
