import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Composées de transformations » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Composées de transformations » (document PDF officiel, Mathématiques 1ère C, lot P10)
export const MATHS_1ERE_C_L08_COMPOSEES_TRANSFORMATIONS: CurriculumChapter = {
  "id": "premiere_c_maths_geometrie_l08_composees_transformations",
  "subjectId": "maths",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [],
  "order": 8,
  "title": "Leçon 8 : Composées de transformations",
  "summary": "La leçon étudie la composée de deux translations, de deux rotations, de deux homothéties et de deux symétries orthogonales, en précisant dans chaque cas la nature de la transformation obtenue et ses éléments caractéristiques.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Composées de transformations » (document PDF officiel, Mathématiques 1ère C, lot P10)",
  "points": [
    {
      "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01",
      "order": 1,
      "title": "Composée de deux translations",
      "summary": "Reconnaître une translation par la conservation des longueurs, composer deux translations et utiliser l’expression analytique.",
      "conceptExplanation": "Propriété caractéristique : une application $f$ du plan dans le plan est une translation si et seulement si, pour tous points $M$ et $N$ d’images respectives $M'$ et $N'$, on a $MN = M'N'$. Dans l’exercice sur le parallélogramme $ABCD$, le cas $f(A) = C$ et $f(D) = B$ n’est pas une translation car $AD$ diffère de $CB$, tandis que les deux autres cas testés le sont.\nComposée : la composée des translations de vecteurs $\\vec{u}$ et $\\vec{v}$ est la translation de vecteur $\\vec{u} + \\vec{v}$. La composée de deux translations est commutative, et la réciproque de la translation de vecteur $\\vec{u}$ est la translation de vecteur opposé ; toute translation est une transformation (bijection) du plan.\nExpression analytique : dans un repère, pour un vecteur de coordonnées $(a ; b)$, l’image de $M(x ; y)$ est $M'(x + a ; y + b)$.",
      "keyRule": "Deux translations composées donnent une translation dont le vecteur est la somme des deux vecteurs.",
      "formulas": [
        {
          "name": "Composée de deux translations",
          "formula": "t_{\\vec{u}} \\circ t_{\\vec{v}} = t_{\\vec{u} + \\vec{v}}"
        },
        {
          "name": "Expression analytique",
          "formula": "x' = x + a"
        }
      ],
      "workedExample": {
        "title": "L’image du point $A(-1 ; 4)$ (exercice de fixation)",
        "statement": "Soit $A(-1 ; 4)$ un point du plan et un vecteur de coordonnées $(2 ; 3)$. Détermine les coordonnées du point $A'$, image de $A$ par la translation de ce vecteur.",
        "methodSteps": [
          "L’expression analytique de la translation est $x' = x + 2$ et $y' = y + 3$.",
          "On applique au point $A$ : l’abscisse devient $-1 + 2 = 1$ et l’ordonnée devient $4 + 3 = 7$."
        ],
        "conclusion": "L’image de $A$ est le point $A'(1 ; 7)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La propriété caractéristique de la translation",
          "stepTheme": "La propriété caractéristique de la translation",
          "stepBadge": "La propriété caractéristique de la translation",
          "paragraphText": "• Propriété : une application $f$ du plan dans le plan est une translation si et seulement si, pour tous points $M$ et $N$ d’images respectives $M'$ et $N'$, les longueurs $MN$ et $M'N'$ sont égales.\nC’est le test utilisé dans l’exercice de fixation sur le parallélogramme.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q1",
            "type": "mcq",
            "prompt": "Une application $f$ est une translation si et seulement si :",
            "options": [
              "Elle conserve les angles seulement",
              "Pour tous points $M$ et $N$, la longueur $MN$ égale la longueur de l’image $M'N'$",
              "Elle fixe tous les points",
              "Elle échange deux points"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la propriété caractéristique énoncée au début de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Tester une application sur un parallélogramme",
          "stepTheme": "Tester une application sur un parallélogramme",
          "stepBadge": "Tester une application sur un parallélogramme",
          "paragraphText": "• Exercice de fixation : $ABCD$ est un parallélogramme.\nSi $f(A) = C$ et $f(D) = B$, les longueurs $AD$ et $CB$ sont différentes, donc $f$ n’est pas une translation ; en revanche, les cas $f(A) = B$ et $f(D) = C$, puis $f(C) = B$ et $f(D) = A$, conservent les longueurs testées.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q2",
            "type": "mcq",
            "prompt": "Dans cet exercice, le cas $f(A) = C$ et $f(D) = B$ donne :",
            "options": [
              "Une translation, car $AD$ égale $CB$",
              "Une rotation",
              "Pas une translation, car $AD$ est différente de $CB$",
              "Une homothétie"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le corrigé du premier cas : la longueur n’est pas conservée sur la paire testée."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La composée de deux translations",
          "stepTheme": "La composée de deux translations",
          "stepBadge": "La composée de deux translations",
          "paragraphText": "• Propriété : la composée de la translation de vecteur $\\vec{v}$ suivie de celle de vecteur $\\vec{u}$ est la translation de vecteur $\\vec{u} + \\vec{v}$.\nRemarques : la composée est commutative, et la transformation réciproque de la translation de vecteur $\\vec{u}$ est la translation de vecteur opposé.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q3",
            "type": "mcq",
            "prompt": "La composée $t_{\\vec{u}} \\circ t_{\\vec{v}}$ est :",
            "options": [
              "La translation de vecteur $\\vec{u} + \\vec{v}$",
              "La translation de vecteur $\\vec{u} - \\vec{v}$",
              "Une rotation",
              "La translation de vecteur $\\vec{u}$ seulement"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On additionne les deux vecteurs : c’est la propriété de la composée de deux translations."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le vecteur de la composée",
          "stepTheme": "Le vecteur de la composée",
          "stepBadge": "Le vecteur de la composée",
          "paragraphText": "• Exercice de fixation : le plan est muni d’un repère orthonormé, avec un premier vecteur de coordonnées $(-5 ; 2)$ et un second de coordonnées $(2 ; 1)$.\nLe vecteur de la composée s’obtient en additionnant les coordonnées.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q4",
            "type": "mcq",
            "prompt": "Le vecteur de cette composée a pour coordonnées :",
            "options": [
              "$(-3 ; 3)$",
              "$(-7 ; 1)$",
              "$(3 ; 3)$",
              "$(-5 ; 3)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule $-5 + 2 = -3$ et $2 + 1 = 3$ : c’est le corrigé de l’exercice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "L’expression analytique d’une translation",
          "stepTheme": "L’expression analytique d’une translation",
          "stepBadge": "L’expression analytique d’une translation",
          "paragraphText": "• Propriété : dans un repère, si le vecteur de la translation a pour coordonnées $(a ; b)$, alors l’image $M'(x' ; y')$ d’un point $M(x ; y)$ vérifie $x' = x + a$ et $y' = y + b$.\nOn ajoute les coordonnées du vecteur aux coordonnées du point.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q5",
            "type": "mcq",
            "prompt": "Pour une translation de vecteur de coordonnées $(a ; b)$, on a :",
            "options": [
              "$x' = x - a$ et $y' = y - b$",
              "$x' = ax$ et $y' = by$",
              "$x' = x + a$ et $y' = y + b$",
              "$x' = a$ et $y' = b$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’expression analytique donnée dans la leçon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "L’image d’un point par une translation",
          "stepTheme": "L’image d’un point par une translation",
          "stepBadge": "L’image d’un point par une translation",
          "paragraphText": "• Exercice de fixation : le point $A$ a pour coordonnées $(-1 ; 4)$ et le vecteur a pour coordonnées $(2 ; 3)$.\nOn applique l’expression analytique : l’abscisse devient $-1 + 2$ et l’ordonnée devient $4 + 3$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q6",
            "type": "mcq",
            "prompt": "L’image $A'$ du point $A$ a pour coordonnées :",
            "options": [
              "$(-3 ; 1)$",
              "$(1 ; 7)$",
              "$(2 ; 3)$",
              "$(-1 ; 4)$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On obtient $A'(1 ; 7)$ : c’est le corrigé de l’exercice."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q1",
          "type": "mcq",
          "prompt": "Une application $f$ est une translation si et seulement si :",
          "options": [
            "Elle conserve les angles seulement",
            "Pour tous points $M$ et $N$, la longueur $MN$ égale la longueur de l’image $M'N'$",
            "Elle fixe tous les points",
            "Elle échange deux points"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la propriété caractéristique énoncée au début de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q2",
          "type": "mcq",
          "prompt": "Dans cet exercice, le cas $f(A) = C$ et $f(D) = B$ donne :",
          "options": [
            "Une translation, car $AD$ égale $CB$",
            "Une rotation",
            "Pas une translation, car $AD$ est différente de $CB$",
            "Une homothétie"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le corrigé du premier cas : la longueur n’est pas conservée sur la paire testée."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q3",
          "type": "mcq",
          "prompt": "La composée $t_{\\vec{u}} \\circ t_{\\vec{v}}$ est :",
          "options": [
            "La translation de vecteur $\\vec{u} + \\vec{v}$",
            "La translation de vecteur $\\vec{u} - \\vec{v}$",
            "Une rotation",
            "La translation de vecteur $\\vec{u}$ seulement"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On additionne les deux vecteurs : c’est la propriété de la composée de deux translations."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q4",
          "type": "mcq",
          "prompt": "Le vecteur de cette composée a pour coordonnées :",
          "options": [
            "$(-3 ; 3)$",
            "$(-7 ; 1)$",
            "$(3 ; 3)$",
            "$(-5 ; 3)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule $-5 + 2 = -3$ et $2 + 1 = 3$ : c’est le corrigé de l’exercice."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q5",
          "type": "mcq",
          "prompt": "Pour une translation de vecteur de coordonnées $(a ; b)$, on a :",
          "options": [
            "$x' = x - a$ et $y' = y - b$",
            "$x' = ax$ et $y' = by$",
            "$x' = x + a$ et $y' = y + b$",
            "$x' = a$ et $y' = b$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’expression analytique donnée dans la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p01_q6",
          "type": "mcq",
          "prompt": "L’image $A'$ du point $A$ a pour coordonnées :",
          "options": [
            "$(-3 ; 1)$",
            "$(1 ; 7)$",
            "$(2 ; 3)$",
            "$(-1 ; 4)$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On obtient $A'(1 ; 7)$ : c’est le corrigé de l’exercice."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02",
      "order": 2,
      "title": "Composée de deux rotations de même centre",
      "summary": "Composer deux rotations de même centre en additionnant leurs angles, et connaître la réciproque d’une rotation.",
      "conceptExplanation": "Propriété : soient $r(O, \\alpha)$ et $r'(O, \\theta)$ deux rotations de même centre $O$ et d’angles respectifs $\\alpha$ et $\\theta$. La composée $r(O, \\alpha) \\circ r'(O, \\theta)$ est la rotation de centre $O$ et d’angle $\\alpha + \\theta$.\nRemarques : la composée de deux rotations de même centre est commutative ; toute rotation est une transformation (bijection) du plan, et la réciproque de la rotation $r(O, \\alpha)$ est la rotation $r(O, -\\alpha)$.",
      "keyRule": "Même centre : on garde le centre et on additionne les angles.",
      "formulas": [
        {
          "name": "Composée à centre commun",
          "formula": "r(O, \\alpha) \\circ r'(O, \\theta) = r(O, \\alpha + \\theta)"
        }
      ],
      "workedExample": {
        "title": "Deux rotations de centre $I$ (exercice de fixation)",
        "statement": "$I$ est un point du plan, $r$ est la rotation de centre $I$ et d’angle $\\frac{\\pi}{2}$, et $r'$ est la rotation de centre $I$ et d’angle $-\\frac{\\pi}{4}$. Détermine la nature et les éléments caractéristiques de la composée $r \\circ r'$.",
        "methodSteps": [
          "Les deux rotations ont le même centre $I$ : la composée est une rotation de centre $I$.",
          "Son angle est la somme $\\frac{\\pi}{2} + (-\\frac{\\pi}{4}) = \\frac{\\pi}{4}$."
        ],
        "conclusion": "$r \\circ r'$ est la rotation de centre $I$ et d’angle $\\frac{\\pi}{4}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La composée de deux rotations de même centre",
          "stepTheme": "La composée de deux rotations de même centre",
          "stepBadge": "La composée de deux rotations de même centre",
          "paragraphText": "• Propriété : soient deux rotations de même centre $O$ et d’angles respectifs $\\alpha$ et $\\theta$.\nLeur composée est la rotation de centre $O$ et d’angle la somme des deux angles.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q1",
            "type": "mcq",
            "prompt": "La composée de deux rotations de même centre $O$, d’angles $\\alpha$ et $\\theta$, est :",
            "options": [
              "Une translation",
              "Une homothétie de centre $O$",
              "La rotation de centre $O$ et d’angle $\\alpha - \\theta$",
              "La rotation de centre $O$ et d’angle $\\alpha + \\theta$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Même centre : les angles s’ajoutent, d’après la propriété de la leçon."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Deux rotations de centre $I$",
          "stepTheme": "Deux rotations de centre $I$",
          "stepBadge": "Deux rotations de centre $I$",
          "paragraphText": "• Exercice de fixation : $r$ est la rotation de centre $I$ et d’angle $\\frac{\\pi}{2}$, et $r'$ celle de centre $I$ et d’angle $-\\frac{\\pi}{4}$.\nLa composée a pour centre $I$ et pour angle la somme des deux angles.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q2",
            "type": "mcq",
            "prompt": "La composée $r \\circ r'$ est la rotation :",
            "options": [
              "De centre $I$ et d’angle $\\frac{3\\pi}{4}$",
              "De centre $I$ et d’angle $-\\frac{\\pi}{4}$",
              "De centre $I$ et d’angle $\\frac{\\pi}{4}$",
              "De centre $I$ et d’angle $\\frac{\\pi}{2}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On calcule $\\frac{\\pi}{2} + (-\\frac{\\pi}{4}) = \\frac{\\pi}{4}$ : c’est le corrigé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La réciproque d’une rotation",
          "stepTheme": "La réciproque d’une rotation",
          "stepBadge": "La réciproque d’une rotation",
          "paragraphText": "• Remarque de la leçon : toute rotation est une transformation (bijection) du plan.\nLa transformation réciproque de la rotation de centre $O$ et d’angle $\\alpha$ est la rotation de même centre et d’angle opposé.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q3",
            "type": "mcq",
            "prompt": "La réciproque de la rotation $r(O, \\alpha)$ est :",
            "options": [
              "$r(O, -\\alpha)$",
              "$r(O, \\alpha)$",
              "Une translation",
              "$r(O, 2\\alpha)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On tourne du même centre dans le sens opposé : l’angle change de signe."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La commutativité à centre commun",
          "stepTheme": "La commutativité à centre commun",
          "stepBadge": "La commutativité à centre commun",
          "paragraphText": "• Remarque de la leçon : étant donné deux rotations de même centre, leur composée ne dépend pas de l’ordre.\nOn peut donc composer dans l’ordre que l’on veut quand le centre est le même.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q4",
            "type": "mcq",
            "prompt": "Pour deux rotations $r$ et $r'$ de même centre, on a :",
            "options": [
              "$r \\circ r'$ n’existe pas",
              "$r \\circ r'$ toujours différente de $r' \\circ r$",
              "$r \\circ r'$ est une translation",
              "$r \\circ r' = r' \\circ r$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la première remarque qui suit la propriété."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Une somme d’angles nulle",
          "stepTheme": "Une somme d’angles nulle",
          "stepBadge": "Une somme d’angles nulle",
          "paragraphText": "• Piège : si les deux angles de même centre sont opposés, leur somme est l’angle nul.\nLa composée est alors la rotation d’angle nul, c’est-à-dire l’identité, et non une translation : le centre commun subsiste.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q5",
            "type": "mcq",
            "prompt": "La composée de la rotation de centre $I$ et d’angle $\\frac{\\pi}{2}$ avec celle de centre $I$ et d’angle $-\\frac{\\pi}{2}$ est :",
            "options": [
              "Une translation",
              "La rotation de centre $I$ et d’angle nul, c’est-à-dire l’identité",
              "Une symétrie centrale",
              "La rotation de centre $I$ et d’angle $\\pi$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La somme des angles est nulle et le centre commun est $I$ : on obtient l’identité."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q1",
          "type": "mcq",
          "prompt": "La composée de deux rotations de même centre $O$, d’angles $\\alpha$ et $\\theta$, est :",
          "options": [
            "Une translation",
            "Une homothétie de centre $O$",
            "La rotation de centre $O$ et d’angle $\\alpha - \\theta$",
            "La rotation de centre $O$ et d’angle $\\alpha + \\theta$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Même centre : les angles s’ajoutent, d’après la propriété de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q2",
          "type": "mcq",
          "prompt": "La composée $r \\circ r'$ est la rotation :",
          "options": [
            "De centre $I$ et d’angle $\\frac{3\\pi}{4}$",
            "De centre $I$ et d’angle $-\\frac{\\pi}{4}$",
            "De centre $I$ et d’angle $\\frac{\\pi}{4}$",
            "De centre $I$ et d’angle $\\frac{\\pi}{2}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On calcule $\\frac{\\pi}{2} + (-\\frac{\\pi}{4}) = \\frac{\\pi}{4}$ : c’est le corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q3",
          "type": "mcq",
          "prompt": "La réciproque de la rotation $r(O, \\alpha)$ est :",
          "options": [
            "$r(O, -\\alpha)$",
            "$r(O, \\alpha)$",
            "Une translation",
            "$r(O, 2\\alpha)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On tourne du même centre dans le sens opposé : l’angle change de signe."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q4",
          "type": "mcq",
          "prompt": "Pour deux rotations $r$ et $r'$ de même centre, on a :",
          "options": [
            "$r \\circ r'$ n’existe pas",
            "$r \\circ r'$ toujours différente de $r' \\circ r$",
            "$r \\circ r'$ est une translation",
            "$r \\circ r' = r' \\circ r$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la première remarque qui suit la propriété."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p02_q5",
          "type": "mcq",
          "prompt": "La composée de la rotation de centre $I$ et d’angle $\\frac{\\pi}{2}$ avec celle de centre $I$ et d’angle $-\\frac{\\pi}{2}$ est :",
          "options": [
            "Une translation",
            "La rotation de centre $I$ et d’angle nul, c’est-à-dire l’identité",
            "Une symétrie centrale",
            "La rotation de centre $I$ et d’angle $\\pi$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La somme des angles est nulle et le centre commun est $I$ : on obtient l’identité."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03",
      "order": 3,
      "title": "Composée de deux rotations de centres différents",
      "summary": "Déterminer la nature de la composée de deux rotations de centres distincts selon la somme de leurs angles, et construire son vecteur ou son centre.",
      "conceptExplanation": "Propriété : soient $r$ et $r'$ deux rotations de centres distincts et d’angles respectifs $\\alpha$ et $\\theta$. Si la somme des angles orientés est l’angle nul, la composée $r \\circ r'$ est une translation ; sinon, la composée est une rotation d’angle orienté $\\alpha + \\theta$.\nDéterminations : si la composée est une translation, son vecteur joint $B$ à son image par la rotation de centre $A$ ; si c’est une rotation, son centre s’obtient par les médiatrices des segments joignant un point à son image, comme dans l’exercice du carré où la composée des rotations de centres $D$ et $A$ est la rotation de centre $C$ et d’angle $-\\frac{\\pi}{2}$.\nEn général, cette composée n’est pas commutative, et toute rotation d’angle $\\pi$ est une symétrie centrale.",
      "keyRule": "Centres distincts : somme des angles nulle donne une translation, sinon une rotation d’angle la somme.",
      "formulas": [
        {
          "name": "Cas translation",
          "formula": "\\hat{\\alpha} + \\hat{\\theta} = \\hat{0}"
        },
        {
          "name": "Cas rotation",
          "formula": "\\hat{\\alpha} + \\hat{\\theta} \\neq \\hat{0}"
        }
      ],
      "workedExample": {
        "title": "Les composées sur le carré $ABCD$ (exercice de fixation)",
        "statement": "$ABCD$ est un carré de sens direct. On considère les rotations $r_A$ de centre $A$ et d’angle $\\frac{\\pi}{2}$, $r_B$ de centre $B$ et d’angle $-\\frac{\\pi}{2}$, et $r_D$ de centre $D$ et d’angle $\\pi$. Détermine la nature et les éléments caractéristiques de $r_D \\circ r_A$.",
        "methodSteps": [
          "La somme des angles vaut $\\frac{3\\pi}{2}$, qui est l’angle de mesure $-\\frac{\\pi}{2}$, différent de l’angle nul : la composée est une rotation d’angle $-\\frac{\\pi}{2}$.",
          "On calcule les images de $A$ et de $B$ par la composée ; la médiatrice du premier segment est la droite $(CD)$ et celle du second est la droite $(AC)$.",
          "Ces deux droites se coupent en $C$."
        ],
        "conclusion": "$r_D \\circ r_A$ est la rotation de centre $C$ et d’angle $-\\frac{\\pi}{2}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le critère sur la somme des angles",
          "stepTheme": "Le critère sur la somme des angles",
          "stepBadge": "Le critère sur la somme des angles",
          "paragraphText": "• Propriété : soient deux rotations de centres distincts et d’angles respectifs $\\alpha$ et $\\theta$.\nSi la somme des angles orientés est l’angle nul, la composée est une translation ; sinon, la composée est une rotation d’angle la somme des deux angles.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q1",
            "type": "mcq",
            "prompt": "Si la somme des angles de deux rotations de centres distincts est l’angle nul, leur composée est :",
            "options": [
              "Une rotation",
              "Une translation",
              "Une homothétie",
              "Une symétrie centrale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le premier cas de la propriété sur les centres distincts."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Un cas de translation et un cas de rotation",
          "stepTheme": "Un cas de translation et un cas de rotation",
          "stepBadge": "Un cas de translation et un cas de rotation",
          "paragraphText": "• Exercice de fixation : $r$ est de centre $A$ et $r'$ de centre $B$.\nDans le premier cas, les angles sont $\\frac{2\\pi}{3}$ et $\\frac{4\\pi}{3}$ : leur somme est un tour complet, donc l’angle nul. Dans le second cas, les angles sont $\\frac{\\pi}{3}$ et $-\\frac{\\pi}{2}$ : leur somme vaut $-\\frac{\\pi}{6}$, différente de l’angle nul.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q2",
            "type": "mcq",
            "prompt": "Dans le premier cas de cet exercice, la composée $r \\circ r'$ est :",
            "options": [
              "Une rotation d’angle $-\\frac{\\pi}{6}$",
              "Une homothétie",
              "La rotation de centre $A$",
              "Une translation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La somme des angles est l’angle nul : le corrigé conclut à une translation."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "Le vecteur de la translation obtenue",
          "stepTheme": "Le vecteur de la translation obtenue",
          "stepBadge": "Le vecteur de la translation obtenue",
          "paragraphText": "• Remarque de la leçon : si la composée de la rotation de centre $A$ puis de celle de centre $B$ est une translation, son vecteur joint le point $B$ à son image par la rotation de centre $A$.\nOn construit donc d’abord l’image de $B$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q3",
            "type": "mcq",
            "prompt": "Si $r(A, \\alpha) \\circ r(B, \\theta)$ est une translation, son vecteur est :",
            "options": [
              "Le vecteur joignant $B$ à son image $B'$ par $r(A, \\alpha)$",
              "Le vecteur joignant $A$ à son image par $r(B, \\theta)$",
              "Le vecteur joignant $A$ à $B$",
              "Toujours le vecteur nul"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la première remarque qui suit la propriété des centres distincts."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Le centre de la rotation obtenue",
          "stepTheme": "Le centre de la rotation obtenue",
          "stepBadge": "Le centre de la rotation obtenue",
          "paragraphText": "• Remarque de la leçon : si la composée est une rotation, on construit l’image $B'$ de $B$ et l’image $E'$ d’un point $E$ par la composée.\nQuand les segments $[BB']$ et $[EE']$ n’ont pas la même médiatrice, le centre est le point d’intersection de leurs médiatrices ; sinon, c’est le point d’intersection des droites $(EB)$ et $(E'B')$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q4",
            "type": "mcq",
            "prompt": "Le centre de la rotation composée s’obtient en général comme :",
            "options": [
              "Le milieu du segment $[BB']$",
              "Le point $A$ systématiquement",
              "L’intersection des médiatrices des segments $[BB']$ et $[EE']$",
              "L’intersection des droites $(AB)$ et $(EE')$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la construction décrite dans les remarques de la leçon."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Deux composées sur un carré",
          "stepTheme": "Deux composées sur un carré",
          "stepBadge": "Deux composées sur un carré",
          "paragraphText": "• Exercice de fixation : $ABCD$ est un carré de sens direct, avec des rotations de centres $A$, $B$ et $D$ d’angles $\\frac{\\pi}{2}$, $-\\frac{\\pi}{2}$ et $\\pi$.\nPour la composée des rotations de centres $B$ et $A$, la somme des angles est nulle ; de plus, l’image de $A$ par cette composée est $C$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q5",
            "type": "mcq",
            "prompt": "Dans cet exercice, la composée $r_B \\circ r_A$ est :",
            "options": [
              "La rotation de centre $C$ et d’angle $\\pi$",
              "La symétrie centrale de centre $B$",
              "L’homothétie de centre $A$",
              "La translation de vecteur $\\overrightarrow{AC}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La somme des angles est nulle et $A$ est envoyé sur $C$ : le corrigé donne la translation de vecteur $\\overrightarrow{AC}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "La composée n’est pas commutative en général",
          "stepTheme": "La composée n’est pas commutative en général",
          "stepBadge": "La composée n’est pas commutative en général",
          "paragraphText": "• Remarque de la leçon : en général, la composée de deux rotations de centres distincts n’est pas commutative.\nAutre remarque : toute rotation d’angle $\\pi$ est une symétrie centrale ; c’est ce qui permet de déterminer le centre de la composée des rotations de centres $D$ et $A$ dans l’exercice du carré, qui est la rotation de centre $C$ et d’angle $-\\frac{\\pi}{2}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q6",
            "type": "mcq",
            "prompt": "Pour des centres distincts, l’égalité $r(A, \\alpha) \\circ r(B, \\theta) = r(B, \\alpha) \\circ r(A, \\theta)$ est :",
            "options": [
              "Toujours vraie",
              "Fausse en général",
              "Vraie seulement si les angles sont nuls",
              "Vraie seulement pour un carré"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la remarque de non-commutativité qui suit l’exercice du carré."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q1",
          "type": "mcq",
          "prompt": "Si la somme des angles de deux rotations de centres distincts est l’angle nul, leur composée est :",
          "options": [
            "Une rotation",
            "Une translation",
            "Une homothétie",
            "Une symétrie centrale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le premier cas de la propriété sur les centres distincts."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q2",
          "type": "mcq",
          "prompt": "Dans le premier cas de cet exercice, la composée $r \\circ r'$ est :",
          "options": [
            "Une rotation d’angle $-\\frac{\\pi}{6}$",
            "Une homothétie",
            "La rotation de centre $A$",
            "Une translation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La somme des angles est l’angle nul : le corrigé conclut à une translation."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q3",
          "type": "mcq",
          "prompt": "Si $r(A, \\alpha) \\circ r(B, \\theta)$ est une translation, son vecteur est :",
          "options": [
            "Le vecteur joignant $B$ à son image $B'$ par $r(A, \\alpha)$",
            "Le vecteur joignant $A$ à son image par $r(B, \\theta)$",
            "Le vecteur joignant $A$ à $B$",
            "Toujours le vecteur nul"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la première remarque qui suit la propriété des centres distincts."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q4",
          "type": "mcq",
          "prompt": "Le centre de la rotation composée s’obtient en général comme :",
          "options": [
            "Le milieu du segment $[BB']$",
            "Le point $A$ systématiquement",
            "L’intersection des médiatrices des segments $[BB']$ et $[EE']$",
            "L’intersection des droites $(AB)$ et $(EE')$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la construction décrite dans les remarques de la leçon."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q5",
          "type": "mcq",
          "prompt": "Dans cet exercice, la composée $r_B \\circ r_A$ est :",
          "options": [
            "La rotation de centre $C$ et d’angle $\\pi$",
            "La symétrie centrale de centre $B$",
            "L’homothétie de centre $A$",
            "La translation de vecteur $\\overrightarrow{AC}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "La somme des angles est nulle et $A$ est envoyé sur $C$ : le corrigé donne la translation de vecteur $\\overrightarrow{AC}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p03_q6",
          "type": "mcq",
          "prompt": "Pour des centres distincts, l’égalité $r(A, \\alpha) \\circ r(B, \\theta) = r(B, \\alpha) \\circ r(A, \\theta)$ est :",
          "options": [
            "Toujours vraie",
            "Fausse en général",
            "Vraie seulement si les angles sont nuls",
            "Vraie seulement pour un carré"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la remarque de non-commutativité qui suit l’exercice du carré."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04",
      "order": 4,
      "title": "Composée de deux homothéties de même centre",
      "summary": "Composer deux homothéties de même centre en multipliant leurs rapports.",
      "conceptExplanation": "Propriété : soient $h$ et $h'$ deux homothéties de centre $O$ et de rapports respectifs $k$ et $k'$. La composée $h \\circ h'$ est l’homothétie de centre $O$ et de rapport $k \\times k'$.\nRemarque : cette composée est commutative. On dit que la composée de deux homothéties de même centre est une homothétie de même centre et de rapport le produit des rapports.",
      "keyRule": "Même centre : on garde le centre et on multiplie les rapports.",
      "formulas": [
        {
          "name": "Composée à centre commun",
          "formula": "h(O, k) \\circ h'(O, k') = h(O, k \\times k')"
        }
      ],
      "workedExample": {
        "title": "Un produit de rapports négatif (exercice 2)",
        "statement": "$I$ est un point du plan. Détermine la nature et les éléments caractéristiques de la composée des homothéties de centre $I$ et de rapports $\\frac{1}{2}$ et $-\\frac{2}{3}$.",
        "methodSteps": [
          "Les deux homothéties ont le même centre $I$ : la composée est une homothétie de centre $I$.",
          "Son rapport est le produit de $\\frac{1}{2}$ par $-\\frac{2}{3}$, soit $-\\frac{1}{3}$."
        ],
        "conclusion": "La composée est l’homothétie de centre $I$ et de rapport $-\\frac{1}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La composée de deux homothéties de même centre",
          "stepTheme": "La composée de deux homothéties de même centre",
          "stepBadge": "La composée de deux homothéties de même centre",
          "paragraphText": "• Propriété : soient deux homothéties de centre $O$ et de rapports respectifs $k$ et $k'$.\nLeur composée est l’homothétie de centre $O$ et de rapport le produit des deux rapports.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q1",
            "type": "mcq",
            "prompt": "La composée de deux homothéties de centre $O$ et de rapports $k$ et $k'$ est :",
            "options": [
              "L’homothétie de centre $O$ et de rapport $k + k'$",
              "Une rotation de centre $O$",
              "L’homothétie de centre $O$ et de rapport $k \\times k'$",
              "L’homothétie de centre $O$ et de rapport $k$ seulement"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Même centre : les rapports se multiplient, d’après la propriété."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Le cas des rapports $\\frac{1}{3}$ et $\\sqrt{2}$",
          "stepTheme": "Le cas des rapports $\\frac{1}{3}$ et $\\sqrt{2}$",
          "stepBadge": "Le cas des rapports $\\frac{1}{3}$ et $\\sqrt{2}$",
          "paragraphText": "• Exercice de fixation : $A$ est un point du plan et l’on compose l’homothétie de centre $A$ et de rapport $\\frac{1}{3}$ avec celle de centre $A$ et de rapport $\\sqrt{2}$.\nLe rapport de la composée est le produit des deux rapports.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q2",
            "type": "mcq",
            "prompt": "Cette composée est :",
            "options": [
              "L’homothétie de centre $A$ et de rapport $\\frac{\\sqrt{2}}{3}$",
              "L’homothétie de centre $A$ et de rapport la somme des deux rapports",
              "Une rotation de centre $A$",
              "L’homothétie de centre $A$ et de rapport $\\frac{1}{3}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit de $\\frac{1}{3}$ par $\\sqrt{2}$ donne $\\frac{\\sqrt{2}}{3}$ : c’est l’affirmation c) du corrigé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un rapport produit négatif",
          "stepTheme": "Un rapport produit négatif",
          "stepBadge": "Un rapport produit négatif",
          "paragraphText": "• Exercice de fixation : $I$ est un point du plan et l’on compose les homothéties de centre $I$ et de rapports $\\frac{1}{2}$ et $-\\frac{2}{3}$.\nLe centre reste $I$ et le rapport est le produit, qui est négatif.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q3",
            "type": "mcq",
            "prompt": "Cette composée est l’homothétie :",
            "options": [
              "De centre $I$ et de rapport $-\\frac{1}{3}$",
              "De centre $I$ et de rapport $\\frac{1}{3}$",
              "De centre $I$ et de rapport $-\\frac{2}{3}$",
              "De centre $I$ et de rapport $\\frac{1}{6}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "On calcule le produit de $\\frac{1}{2}$ par $-\\frac{2}{3}$, soit $-\\frac{1}{3}$ : c’est la solution de l’exercice."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La commutativité à centre commun",
          "stepTheme": "La commutativité à centre commun",
          "stepBadge": "La commutativité à centre commun",
          "paragraphText": "• Remarque de la leçon : la composée de deux homothéties de même centre ne dépend pas de l’ordre.\nLe produit des rapports est en effet le même dans les deux ordres.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q4",
            "type": "mcq",
            "prompt": "Pour deux homothéties $h$ et $h'$ de même centre, on a :",
            "options": [
              "$h \\circ h'$ est une translation",
              "$h \\circ h'$ toujours différente de $h' \\circ h$",
              "$h \\circ h' = h' \\circ h$",
              "$h \\circ h'$ n’existe pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la remarque qui suit la propriété du centre commun."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Produit des rapports, pas somme",
          "stepTheme": "Produit des rapports, pas somme",
          "stepBadge": "Produit des rapports, pas somme",
          "paragraphText": "• Piège : le rapport de la composée est le produit des rapports, jamais leur somme.\nDans le premier exercice, la proposition qui additionne les rapports $\\frac{1}{3}$ et $\\sqrt{2}$ est l’un des distracteurs écartés par le corrigé.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q5",
            "type": "mcq",
            "prompt": "Un élève affirme que le rapport de la composée de deux homothéties de même centre est la somme des rapports. C’est :",
            "options": [
              "Vrai",
              "Faux, c’est le produit des rapports",
              "Vrai seulement si les rapports sont positifs",
              "Faux, c’est leur quotient"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La propriété impose le produit des rapports."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q1",
          "type": "mcq",
          "prompt": "La composée de deux homothéties de centre $O$ et de rapports $k$ et $k'$ est :",
          "options": [
            "L’homothétie de centre $O$ et de rapport $k + k'$",
            "Une rotation de centre $O$",
            "L’homothétie de centre $O$ et de rapport $k \\times k'$",
            "L’homothétie de centre $O$ et de rapport $k$ seulement"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Même centre : les rapports se multiplient, d’après la propriété."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q2",
          "type": "mcq",
          "prompt": "Cette composée est :",
          "options": [
            "L’homothétie de centre $A$ et de rapport $\\frac{\\sqrt{2}}{3}$",
            "L’homothétie de centre $A$ et de rapport la somme des deux rapports",
            "Une rotation de centre $A$",
            "L’homothétie de centre $A$ et de rapport $\\frac{1}{3}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit de $\\frac{1}{3}$ par $\\sqrt{2}$ donne $\\frac{\\sqrt{2}}{3}$ : c’est l’affirmation c) du corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q3",
          "type": "mcq",
          "prompt": "Cette composée est l’homothétie :",
          "options": [
            "De centre $I$ et de rapport $-\\frac{1}{3}$",
            "De centre $I$ et de rapport $\\frac{1}{3}$",
            "De centre $I$ et de rapport $-\\frac{2}{3}$",
            "De centre $I$ et de rapport $\\frac{1}{6}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "On calcule le produit de $\\frac{1}{2}$ par $-\\frac{2}{3}$, soit $-\\frac{1}{3}$ : c’est la solution de l’exercice."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q4",
          "type": "mcq",
          "prompt": "Pour deux homothéties $h$ et $h'$ de même centre, on a :",
          "options": [
            "$h \\circ h'$ est une translation",
            "$h \\circ h'$ toujours différente de $h' \\circ h$",
            "$h \\circ h' = h' \\circ h$",
            "$h \\circ h'$ n’existe pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la remarque qui suit la propriété du centre commun."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p04_q5",
          "type": "mcq",
          "prompt": "Un élève affirme que le rapport de la composée de deux homothéties de même centre est la somme des rapports. C’est :",
          "options": [
            "Vrai",
            "Faux, c’est le produit des rapports",
            "Vrai seulement si les rapports sont positifs",
            "Faux, c’est leur quotient"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La propriété impose le produit des rapports."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05",
      "order": 5,
      "title": "Composée de deux homothéties de centres différents",
      "summary": "Déterminer la nature de la composée de deux homothéties de centres différents selon le produit de leurs rapports, et construire son vecteur ou son centre.",
      "conceptExplanation": "Propriété : soient $h(A, k)$ et $h'(B, k')$ deux homothéties de centres différents $A$ et $B$. Si $k \\times k' = 1$, la composée est une translation ; si $k \\times k' \\neq 1$, la composée est une homothétie de rapport $k \\times k'$.\nDéterminations : si la composée est une translation, son vecteur joint $B$ à son image par $h(A, k)$ ; si c’est une homothétie de centre $O$, alors $O$ est l’intersection des droites $(AB)$ et $(EE')$, où $E$ est un point hors de $(AB)$ et $E'$ son image par la composée, car la droite $(AB)$ est globalement invariante et contient $O$.\nEn général, cette composée n’est pas commutative.",
      "keyRule": "Centres différents : produit des rapports égal à $1$ donne une translation, sinon une homothétie de rapport ce produit.",
      "formulas": [
        {
          "name": "Cas translation",
          "formula": "k \\times k' = 1"
        },
        {
          "name": "Cas homothétie",
          "formula": "k \\times k' \\neq 1"
        }
      ],
      "workedExample": {
        "title": "Construire le centre de $h_A \\circ h_O$ (situation complexe)",
        "statement": "Sur une figure, $h_A$ est l’homothétie de centre $A$ qui transforme $O$ en $B$, et $h_O$ celle de centre $O$ qui transforme $F$ en $E$, avec le quotient des longueurs $AB$ et $AO$ différent du quotient des longueurs $OF$ et $OE$. Donne un programme de construction du centre de $h_A \\circ h_O$.",
        "methodSteps": [
          "On note $\\Omega$ le centre cherché ; comme $h_O(O) = O$ et $h_A(O) = B$, la composée envoie $O$ sur $B$, donc $\\Omega$ appartient à la droite $(OB)$.",
          "On construit l’image $F'$ de $F$ par la composée : c’est l’image de $E$ par $h_A$, à l’intersection de la droite $(AE)$ et de la parallèle à $(OF)$ passant par $B$.",
          "On trace la droite $(FF')$ : son intersection avec la droite $(OB)$ est le centre $\\Omega$."
        ],
        "conclusion": "Le centre $\\Omega$ est l’intersection des droites $(FF')$ et $(OB)$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Le cas où le produit des rapports vaut 1",
          "stepTheme": "Le cas où le produit des rapports vaut 1",
          "stepBadge": "Le cas où le produit des rapports vaut 1",
          "paragraphText": "• Propriété : soient deux homothéties de centres différents $A$ et $B$, de rapports $k$ et $k'$.\nSi le produit des rapports vaut $1$, leur composée est une translation.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q1",
            "type": "mcq",
            "prompt": "Si $k \\times k' = 1$ pour deux homothéties de centres différents, leur composée est :",
            "options": [
              "Une homothétie de rapport $1$",
              "Une symétrie centrale",
              "Une rotation",
              "Une translation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est le premier cas de la propriété sur les centres différents."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas où le produit des rapports diffère de 1",
          "stepTheme": "Le cas où le produit des rapports diffère de 1",
          "stepBadge": "Le cas où le produit des rapports diffère de 1",
          "paragraphText": "• Propriété : si le produit des rapports est différent de $1$, la composée est une homothétie de rapport ce produit.\nLa composée de deux homothéties de centres différents est donc soit une homothétie, soit une translation.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q2",
            "type": "mcq",
            "prompt": "Si $k \\times k'$ est différent de $1$, la composée est :",
            "options": [
              "Toujours une translation",
              "Une rotation d’angle $\\pi$",
              "Une homothétie de rapport $k \\times k'$",
              "L’identité dans tous les cas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le second cas de la propriété."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Un produit égal à $-8$",
          "stepTheme": "Un produit égal à $-8$",
          "stepBadge": "Un produit égal à $-8$",
          "paragraphText": "• Exercice de fixation : $O$ et $O'$ sont deux points distincts et l’on compose les homothéties de rapports $-2$ et $4$.\nLe produit des rapports vaut $-8$, différent de $1$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q3",
            "type": "mcq",
            "prompt": "Cette composée est :",
            "options": [
              "Une homothétie de rapport $-8$",
              "Une translation",
              "Une rotation",
              "Une homothétie de rapport $2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le produit de $-2$ par $4$ vaut $-8$ : c’est la réponse b) du corrigé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un produit égal à 1",
          "stepTheme": "Un produit égal à 1",
          "stepBadge": "Un produit égal à 1",
          "paragraphText": "• Exercice de fixation : $A$ et $B$ sont deux points distincts et l’on compose les homothéties de centres $A$ et $B$ et de rapports $3$ et $\\frac{1}{3}$.\nLe produit des rapports vaut $1$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q4",
            "type": "mcq",
            "prompt": "Cette composée est :",
            "options": [
              "Une homothétie",
              "Une rotation",
              "Une symétrie axiale",
              "Une translation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le produit vaut $1$ : c’est la réponse c) du corrigé."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le rapport $\\frac{6}{5}$ sur un triangle",
          "stepTheme": "Le rapport $\\frac{6}{5}$ sur un triangle",
          "stepBadge": "Le rapport $\\frac{6}{5}$ sur un triangle",
          "paragraphText": "• Exercice de fixation : $ABC$ est un triangle, avec deux homothéties de centres respectifs $B$ et $C$ et de rapports respectifs $2$ et $\\frac{3}{5}$.\nOn compare le produit des rapports à $1$ pour conclure.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q5",
            "type": "mcq",
            "prompt": "La composée de ces deux homothéties est :",
            "options": [
              "Une translation, car le produit vaut $1$",
              "Une homothétie de rapport $\\frac{6}{5}$",
              "Une homothétie de rapport $\\frac{5}{6}$",
              "Une rotation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le produit de $2$ par $\\frac{3}{5}$ vaut $\\frac{6}{5}$, différent de $1$ : c’est le corrigé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Déterminer le vecteur ou le centre",
          "stepTheme": "Déterminer le vecteur ou le centre",
          "stepBadge": "Déterminer le vecteur ou le centre",
          "paragraphText": "• Méthode de la leçon : si la composée est une translation, son vecteur joint un point quelconque à son image par la composée, par exemple $B$ à son image par l’homothétie de centre $A$.\nSi c’est une homothétie de centre $O$, la droite $(AB)$ des centres est globalement invariante et contient $O$ : le centre est l’intersection des droites $(AB)$ et $(EE')$, où $E'$ est l’image d’un point $E$ hors de $(AB)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q6",
            "type": "mcq",
            "prompt": "Le centre $O$ de l’homothétie composée est :",
            "options": [
              "Le milieu du segment $[AB]$",
              "L’intersection des droites $(AB)$ et $(EE')$",
              "Toujours le point $B$",
              "L’intersection des médiatrices de $[AB]$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la construction décrite dans les remarques de la leçon."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q1",
          "type": "mcq",
          "prompt": "Si $k \\times k' = 1$ pour deux homothéties de centres différents, leur composée est :",
          "options": [
            "Une homothétie de rapport $1$",
            "Une symétrie centrale",
            "Une rotation",
            "Une translation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est le premier cas de la propriété sur les centres différents."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q2",
          "type": "mcq",
          "prompt": "Si $k \\times k'$ est différent de $1$, la composée est :",
          "options": [
            "Toujours une translation",
            "Une rotation d’angle $\\pi$",
            "Une homothétie de rapport $k \\times k'$",
            "L’identité dans tous les cas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le second cas de la propriété."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q3",
          "type": "mcq",
          "prompt": "Cette composée est :",
          "options": [
            "Une homothétie de rapport $-8$",
            "Une translation",
            "Une rotation",
            "Une homothétie de rapport $2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le produit de $-2$ par $4$ vaut $-8$ : c’est la réponse b) du corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q4",
          "type": "mcq",
          "prompt": "Cette composée est :",
          "options": [
            "Une homothétie",
            "Une rotation",
            "Une symétrie axiale",
            "Une translation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le produit vaut $1$ : c’est la réponse c) du corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q5",
          "type": "mcq",
          "prompt": "La composée de ces deux homothéties est :",
          "options": [
            "Une translation, car le produit vaut $1$",
            "Une homothétie de rapport $\\frac{6}{5}$",
            "Une homothétie de rapport $\\frac{5}{6}$",
            "Une rotation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le produit de $2$ par $\\frac{3}{5}$ vaut $\\frac{6}{5}$, différent de $1$ : c’est le corrigé."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p05_q6",
          "type": "mcq",
          "prompt": "Le centre $O$ de l’homothétie composée est :",
          "options": [
            "Le milieu du segment $[AB]$",
            "L’intersection des droites $(AB)$ et $(EE')$",
            "Toujours le point $B$",
            "L’intersection des médiatrices de $[AB]$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la construction décrite dans les remarques de la leçon."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06",
      "order": 6,
      "title": "Composée de deux symétries orthogonales d’axes parallèles",
      "summary": "Reconnaître qu’une composée de deux symétries orthogonales d’axes parallèles est une translation et déterminer son vecteur.",
      "conceptExplanation": "Propriété : soit $(D)$ et $(D')$ deux droites parallèles et $S_{(D)}$, $S_{(D')}$ les symétries orthogonales d’axes respectifs $(D)$ et $(D')$. La composée $S_{(D')} \\circ S_{(D)}$ est la translation de vecteur le double du vecteur $\\overrightarrow{OO'}$, où $O$ est un point de $(D)$ et $O'$ le projeté orthogonal de $O$ sur $(D')$.\nDans l’ordre inverse, le vecteur est le double du vecteur opposé. On dit que la composée de deux symétries orthogonales d’axes parallèles est une translation.",
      "keyRule": "Axes parallèles : la composée est la translation de vecteur le double du vecteur qui joint un point du premier axe à son projeté sur le second.",
      "formulas": [
        {
          "name": "Vecteur de la composée",
          "formula": "2\\overrightarrow{OO'}"
        }
      ],
      "workedExample": {
        "title": "La composée $S_{(AB)} \\circ S_{(CD)}$ sur un rectangle (exercice de fixation)",
        "statement": "$ABCD$ est un rectangle. Donne la nature et l’élément caractéristique de la composée $S_{(AB)} \\circ S_{(CD)}$.",
        "methodSteps": [
          "Les droites $(AB)$ et $(CD)$ sont parallèles : la composée est une translation.",
          "On prend le point $C$ sur le premier axe appliqué $(CD)$ ; son projeté orthogonal sur $(AB)$ est $B$.",
          "Le vecteur est donc le double du vecteur $\\overrightarrow{CB}$."
        ],
        "conclusion": "$S_{(AB)} \\circ S_{(CD)}$ est la translation de vecteur le double de $\\overrightarrow{CB}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Deux axes parallèles donnent une translation",
          "stepTheme": "Deux axes parallèles donnent une translation",
          "stepBadge": "Deux axes parallèles donnent une translation",
          "paragraphText": "• Propriété : soient deux droites parallèles $(D)$ et $(D')$ et les symétries orthogonales d’axes respectifs $(D)$ et $(D')$.\nLeur composée est la translation de vecteur le double du vecteur joignant un point $O$ de $(D)$ à son projeté orthogonal $O'$ sur $(D')$. On dit que la composée de deux symétries orthogonales d’axes parallèles est une translation.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q1",
            "type": "mcq",
            "prompt": "La composée de deux symétries orthogonales d’axes parallèles est :",
            "options": [
              "Une rotation",
              "Une symétrie centrale",
              "Une homothétie",
              "Une translation"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la conclusion de la propriété sur les axes parallèles."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le vecteur vaut le double du déplacement entre axes",
          "stepTheme": "Le vecteur vaut le double du déplacement entre axes",
          "stepBadge": "Le vecteur vaut le double du déplacement entre axes",
          "paragraphText": "• Propriété : le vecteur de la translation est le double du vecteur $\\overrightarrow{OO'}$, où $O$ est sur le premier axe appliqué et $O'$ son projeté sur le second.\nDans l’ordre inverse, le vecteur est le double du vecteur opposé.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q2",
            "type": "mcq",
            "prompt": "Le vecteur de $S_{(D')} \\circ S_{(D)}$ est :",
            "options": [
              "Le double du vecteur $\\overrightarrow{OO'}$",
              "Le vecteur $\\overrightarrow{OO'}$",
              "Le vecteur nul dans tous les cas",
              "La moitié du vecteur $\\overrightarrow{OO'}$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le facteur $2$ fait partie de l’énoncé de la propriété."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Premier cas sur un rectangle",
          "stepTheme": "Premier cas sur un rectangle",
          "stepBadge": "Premier cas sur un rectangle",
          "paragraphText": "• Exercice de fixation : $ABCD$ est un rectangle.\nLes axes $(AB)$ et $(CD)$ sont parallèles ; en appliquant d’abord la symétrie d’axe $(CD)$ puis celle d’axe $(AB)$, le point $C$ se projette en $B$ sur $(AB)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q3",
            "type": "mcq",
            "prompt": "La composée $S_{(AB)} \\circ S_{(CD)}$ est la translation de vecteur :",
            "options": [
              "Le double du vecteur $\\overrightarrow{BC}$",
              "$\\overrightarrow{CB}$",
              "Le double du vecteur $\\overrightarrow{CB}$",
              "Le double du vecteur $\\overrightarrow{BA}$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le corrigé donne le double du vecteur $\\overrightarrow{CB}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le cas inverse sur le rectangle",
          "stepTheme": "Le cas inverse sur le rectangle",
          "stepBadge": "Le cas inverse sur le rectangle",
          "paragraphText": "• Exercice de fixation : on inverse l’ordre des deux mêmes symétries.\nLe vecteur obtenu est l’opposé du précédent, car le point de départ est maintenant sur $(AB)$ et son projeté sur $(CD)$ est $C$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q4",
            "type": "mcq",
            "prompt": "La composée $S_{(CD)} \\circ S_{(AB)}$ est la translation de vecteur :",
            "options": [
              "Le double du vecteur $\\overrightarrow{CB}$",
              "$\\overrightarrow{BC}$",
              "Le double du vecteur $\\overrightarrow{BA}$",
              "Le double du vecteur $\\overrightarrow{BC}$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le corrigé donne le double du vecteur $\\overrightarrow{BC}$, opposé du cas précédent."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Les deux autres côtés du rectangle",
          "stepTheme": "Les deux autres côtés du rectangle",
          "stepBadge": "Les deux autres côtés du rectangle",
          "paragraphText": "• Exercice de fixation : les axes $(AD)$ et $(BC)$ sont aussi parallèles.\nEn appliquant d’abord la symétrie d’axe $(BC)$ puis celle d’axe $(AD)$, le point $B$ se projette en $A$ sur $(AD)$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q5",
            "type": "mcq",
            "prompt": "La composée $S_{(AD)} \\circ S_{(BC)}$ est la translation de vecteur :",
            "options": [
              "Le double du vecteur $\\overrightarrow{AB}$",
              "Le double du vecteur $\\overrightarrow{BA}$",
              "Le double du vecteur $\\overrightarrow{CB}$",
              "Le double du vecteur $\\overrightarrow{BC}$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le corrigé donne le double du vecteur $\\overrightarrow{BA}$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "L’ordre change le vecteur",
          "stepTheme": "L’ordre change le vecteur",
          "stepBadge": "L’ordre change le vecteur",
          "paragraphText": "• Piège : pour des axes parallèles, inverser l’ordre des deux symétries remplace le vecteur de la translation par son opposé.\nLes deux composées du rectangle, de vecteurs doubles de $\\overrightarrow{CB}$ et de $\\overrightarrow{BC}$, en sont l’illustration.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q6",
            "type": "mcq",
            "prompt": "Les composées $S_{(AB)} \\circ S_{(CD)}$ et $S_{(CD)} \\circ S_{(AB)}$ sont :",
            "options": [
              "La même translation",
              "Deux rotations",
              "Deux translations de vecteurs opposés",
              "Deux homothéties"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Les vecteurs obtenus sont opposés l’un à l’autre, d’après les deux premiers cas du corrigé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q1",
          "type": "mcq",
          "prompt": "La composée de deux symétries orthogonales d’axes parallèles est :",
          "options": [
            "Une rotation",
            "Une symétrie centrale",
            "Une homothétie",
            "Une translation"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la conclusion de la propriété sur les axes parallèles."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q2",
          "type": "mcq",
          "prompt": "Le vecteur de $S_{(D')} \\circ S_{(D)}$ est :",
          "options": [
            "Le double du vecteur $\\overrightarrow{OO'}$",
            "Le vecteur $\\overrightarrow{OO'}$",
            "Le vecteur nul dans tous les cas",
            "La moitié du vecteur $\\overrightarrow{OO'}$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le facteur $2$ fait partie de l’énoncé de la propriété."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q3",
          "type": "mcq",
          "prompt": "La composée $S_{(AB)} \\circ S_{(CD)}$ est la translation de vecteur :",
          "options": [
            "Le double du vecteur $\\overrightarrow{BC}$",
            "$\\overrightarrow{CB}$",
            "Le double du vecteur $\\overrightarrow{CB}$",
            "Le double du vecteur $\\overrightarrow{BA}$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le corrigé donne le double du vecteur $\\overrightarrow{CB}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q4",
          "type": "mcq",
          "prompt": "La composée $S_{(CD)} \\circ S_{(AB)}$ est la translation de vecteur :",
          "options": [
            "Le double du vecteur $\\overrightarrow{CB}$",
            "$\\overrightarrow{BC}$",
            "Le double du vecteur $\\overrightarrow{BA}$",
            "Le double du vecteur $\\overrightarrow{BC}$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le corrigé donne le double du vecteur $\\overrightarrow{BC}$, opposé du cas précédent."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q5",
          "type": "mcq",
          "prompt": "La composée $S_{(AD)} \\circ S_{(BC)}$ est la translation de vecteur :",
          "options": [
            "Le double du vecteur $\\overrightarrow{AB}$",
            "Le double du vecteur $\\overrightarrow{BA}$",
            "Le double du vecteur $\\overrightarrow{CB}$",
            "Le double du vecteur $\\overrightarrow{BC}$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le corrigé donne le double du vecteur $\\overrightarrow{BA}$."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p06_q6",
          "type": "mcq",
          "prompt": "Les composées $S_{(AB)} \\circ S_{(CD)}$ et $S_{(CD)} \\circ S_{(AB)}$ sont :",
          "options": [
            "La même translation",
            "Deux rotations",
            "Deux translations de vecteurs opposés",
            "Deux homothéties"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Les vecteurs obtenus sont opposés l’un à l’autre, d’après les deux premiers cas du corrigé."
        }
      ]
    },
    {
      "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07",
      "order": 7,
      "title": "Composée de deux symétries orthogonales d’axes sécants",
      "summary": "Reconnaître qu’une composée de deux symétries orthogonales d’axes sécants est une rotation et déterminer son centre et son angle.",
      "conceptExplanation": "Propriété : soit $(D)$ et $(D')$ deux droites sécantes en un point $O$, de vecteurs directeurs respectifs $\\vec{u}$ et $\\vec{v}$. La composée $S_{(D')} \\circ S_{(D)}$ est la rotation de centre $O$ et d’angle le double de l’angle de $\\vec{u}$ vers $\\vec{v}$.\nCas particulier : lorsque les axes sont perpendiculaires en $O$, la composée est la symétrie centrale de centre $O$, et les deux ordres coïncident.\nOn dit que la composée de deux symétries orthogonales d’axes sécants est une rotation.",
      "keyRule": "Axes sécants : la composée est la rotation de centre le point d’intersection et d’angle le double de l’angle des axes.",
      "formulas": [
        {
          "name": "Angle de la composée",
          "formula": "2(\\vec{u}, \\vec{v})"
        }
      ],
      "workedExample": {
        "title": "La composée $s_{(AA')} \\circ s_{(AB)}$ (exercice de fixation)",
        "statement": "$ABC$ est un triangle équilatéral de sens direct et de centre $O$ ; $A'$, $B'$ et $C'$ sont les milieux respectifs de $[BC]$, $[AC]$ et $[AB]$. Donne la nature et les éléments caractéristiques de $s_{(AA')} \\circ s_{(AB)}$.",
        "methodSteps": [
          "Les droites $(AA')$ et $(AB)$ sont sécantes en $A$ : la composée est une rotation de centre $A$.",
          "Son angle est le double de l’angle de $\\overrightarrow{AB}$ vers $\\overrightarrow{AA'}$, dont une mesure est $\\frac{\\pi}{3}$."
        ],
        "conclusion": "$s_{(AA')} \\circ s_{(AB)}$ est la rotation de centre $A$ et d’angle $\\frac{\\pi}{3}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Deux axes sécants donnent une rotation",
          "stepTheme": "Deux axes sécants donnent une rotation",
          "stepBadge": "Deux axes sécants donnent une rotation",
          "paragraphText": "• Propriété : soient deux droites sécantes en un point $O$, de vecteurs directeurs respectifs $\\vec{u}$ et $\\vec{v}$.\nLa composée des symétries orthogonales de ces axes est la rotation de centre $O$ et d’angle le double de l’angle de $\\vec{u}$ vers $\\vec{v}$. On dit que la composée de deux symétries orthogonales d’axes sécants est une rotation.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q1",
            "type": "mcq",
            "prompt": "La composée de deux symétries orthogonales d’axes sécants en $O$ est :",
            "options": [
              "La rotation de centre $O$ et d’angle le double de l’angle des axes",
              "Une translation",
              "Une homothétie de centre $O$",
              "Une symétrie orthogonale"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la conclusion de la propriété sur les axes sécants."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le cas particulier des axes perpendiculaires",
          "stepTheme": "Le cas particulier des axes perpendiculaires",
          "stepBadge": "Le cas particulier des axes perpendiculaires",
          "paragraphText": "• Cas particulier : lorsque les deux axes sont perpendiculaires en $O$, l’angle de la rotation est l’angle plat.\nLa composée est alors la symétrie centrale de centre $O$, et les deux ordres donnent le même résultat.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q2",
            "type": "mcq",
            "prompt": "Si les axes $(D)$ et $(D')$ sont perpendiculaires en $O$, alors $S_{(D')} \\circ S_{(D)}$ est :",
            "options": [
              "La symétrie centrale de centre $O$",
              "La translation de vecteur nul seulement",
              "Une rotation d’angle $\\frac{\\pi}{2}$",
              "Une homothétie de centre $O$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "L’angle double vaut l’angle plat : la rotation obtenue est la symétrie centrale de centre $O$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Une rotation de centre $A$ sur un triangle équilatéral",
          "stepTheme": "Une rotation de centre $A$ sur un triangle équilatéral",
          "stepBadge": "Une rotation de centre $A$ sur un triangle équilatéral",
          "paragraphText": "• Exercice de fixation : $ABC$ est un triangle équilatéral de sens direct et de centre $O$, et $A'$ est le milieu de $[BC]$.\nLes droites $(AA')$ et $(AB)$ sont sécantes en $A$, et une mesure du double de l’angle de $\\overrightarrow{AB}$ vers $\\overrightarrow{AA'}$ est $\\frac{\\pi}{3}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q3",
            "type": "mcq",
            "prompt": "La composée $s_{(AA')} \\circ s_{(AB)}$ est :",
            "options": [
              "Une translation",
              "La rotation de centre $O$ et d’angle $\\frac{2\\pi}{3}$",
              "La rotation de centre $A$ et d’angle $\\frac{\\pi}{3}$",
              "La symétrie centrale de centre $A$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est le corrigé du cas a) de l’exercice."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Une rotation de centre $O$ sur le triangle équilatéral",
          "stepTheme": "Une rotation de centre $O$ sur le triangle équilatéral",
          "stepBadge": "Une rotation de centre $O$ sur le triangle équilatéral",
          "paragraphText": "• Exercice de fixation : les droites $(AA')$ et $(BB')$ sont sécantes en $O$, le centre du triangle.\nUne mesure du double de l’angle des vecteurs directeurs correspondants est $\\frac{2\\pi}{3}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q4",
            "type": "mcq",
            "prompt": "La composée $s_{(AA')} \\circ s_{(BB')}$ est :",
            "options": [
              "La rotation de centre $A$ et d’angle $\\frac{\\pi}{3}$",
              "La rotation de centre $O$ et d’angle $\\frac{2\\pi}{3}$",
              "La rotation de centre $C'$ et d’angle $\\pi$",
              "Une translation"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est le corrigé du cas b) de l’exercice."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Un angle plat sur le triangle équilatéral",
          "stepTheme": "Un angle plat sur le triangle équilatéral",
          "stepBadge": "Un angle plat sur le triangle équilatéral",
          "paragraphText": "• Exercice de fixation : les droites $(CC')$ et $(AB)$ sont sécantes en $C'$, le milieu de $[AB]$.\nUne mesure du double de l’angle des vecteurs directeurs est $\\pi$ : la rotation obtenue est une symétrie centrale.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q5",
            "type": "mcq",
            "prompt": "La composée $s_{(CC')} \\circ s_{(AB)}$ est :",
            "options": [
              "La rotation de centre $O$ et d’angle $\\frac{2\\pi}{3}$",
              "La rotation de centre $A$ et d’angle $\\frac{\\pi}{3}$",
              "Une translation",
              "La rotation de centre $C'$ et d’angle $\\pi$, c’est-à-dire la symétrie centrale de centre $C'$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "L’angle vaut l’angle plat et le centre est le point d’intersection $C'$ des deux axes."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Deux axes sécants sur un carré",
          "stepTheme": "Deux axes sécants sur un carré",
          "stepBadge": "Deux axes sécants sur un carré",
          "paragraphText": "• Exercice de fixation : dans un carré $ABCD$ de centre $O$, les droites $(AC)$ et $(AB)$ sont sécantes en $A$.\nL’angle de $\\overrightarrow{AB}$ vers $\\overrightarrow{AC}$ a pour mesure $\\frac{\\pi}{4}$ dans le carré de sens direct, donc son double vaut $\\frac{\\pi}{2}$.",
          "exercise": {
            "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q6",
            "type": "mcq",
            "prompt": "La composée $S_{(AC)} \\circ S_{(AB)}$ est la rotation de centre $A$ et d’angle :",
            "options": [
              "$\\frac{\\pi}{4}$",
              "$\\pi$",
              "$\\frac{\\pi}{2}$",
              "$2\\pi$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On double la mesure $\\frac{\\pi}{4}$ de l’angle des deux axes : on obtient $\\frac{\\pi}{2}$."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q1",
          "type": "mcq",
          "prompt": "La composée de deux symétries orthogonales d’axes sécants en $O$ est :",
          "options": [
            "La rotation de centre $O$ et d’angle le double de l’angle des axes",
            "Une translation",
            "Une homothétie de centre $O$",
            "Une symétrie orthogonale"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la conclusion de la propriété sur les axes sécants."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q2",
          "type": "mcq",
          "prompt": "Si les axes $(D)$ et $(D')$ sont perpendiculaires en $O$, alors $S_{(D')} \\circ S_{(D)}$ est :",
          "options": [
            "La symétrie centrale de centre $O$",
            "La translation de vecteur nul seulement",
            "Une rotation d’angle $\\frac{\\pi}{2}$",
            "Une homothétie de centre $O$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "L’angle double vaut l’angle plat : la rotation obtenue est la symétrie centrale de centre $O$."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q3",
          "type": "mcq",
          "prompt": "La composée $s_{(AA')} \\circ s_{(AB)}$ est :",
          "options": [
            "Une translation",
            "La rotation de centre $O$ et d’angle $\\frac{2\\pi}{3}$",
            "La rotation de centre $A$ et d’angle $\\frac{\\pi}{3}$",
            "La symétrie centrale de centre $A$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est le corrigé du cas a) de l’exercice."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q4",
          "type": "mcq",
          "prompt": "La composée $s_{(AA')} \\circ s_{(BB')}$ est :",
          "options": [
            "La rotation de centre $A$ et d’angle $\\frac{\\pi}{3}$",
            "La rotation de centre $O$ et d’angle $\\frac{2\\pi}{3}$",
            "La rotation de centre $C'$ et d’angle $\\pi$",
            "Une translation"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est le corrigé du cas b) de l’exercice."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q5",
          "type": "mcq",
          "prompt": "La composée $s_{(CC')} \\circ s_{(AB)}$ est :",
          "options": [
            "La rotation de centre $O$ et d’angle $\\frac{2\\pi}{3}$",
            "La rotation de centre $A$ et d’angle $\\frac{\\pi}{3}$",
            "Une translation",
            "La rotation de centre $C'$ et d’angle $\\pi$, c’est-à-dire la symétrie centrale de centre $C'$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "L’angle vaut l’angle plat et le centre est le point d’intersection $C'$ des deux axes."
        },
        {
          "id": "premiere_c_maths_geometrie_l08_composees_transformations_p07_q6",
          "type": "mcq",
          "prompt": "La composée $S_{(AC)} \\circ S_{(AB)}$ est la rotation de centre $A$ et d’angle :",
          "options": [
            "$\\frac{\\pi}{4}$",
            "$\\pi$",
            "$\\frac{\\pi}{2}$",
            "$2\\pi$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On double la mesure $\\frac{\\pi}{4}$ de l’angle des deux axes : on obtient $\\frac{\\pi}{2}$."
        }
      ]
    }
  ]
};
