import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Énergie cinétique » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Énergie cinétique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L07_ENERGIE_CINETIQUE: CurriculumChapter = {
  "id": "premiere_c_physique_l07_energie_cinetique",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 7,
  "title": "Leçon 7 : Énergie cinétique",
  "summary": "L’énergie cinétique d’un solide dépend de sa masse et de sa vitesse en translation, ou de son moment d’inertie et de sa vitesse angulaire en rotation. Le théorème de l’énergie cinétique relie la variation de cette énergie à la somme algébrique des travaux des forces extérieures.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Énergie cinétique » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l07_energie_cinetique_p01",
      "order": 1,
      "title": "Définition et expression en translation",
      "summary": "Un solide en translation possède, du fait de sa vitesse, une énergie cinétique égale à un demi du produit de sa masse par le carré de sa vitesse.",
      "conceptExplanation": "L’énergie cinétique d’un solide est l’énergie qu’il possède du fait de sa vitesse : c’est l’explication des dégâts importants causés par un véhicule roulant à vive allure lors d’un choc.\nPour un point matériel M, de masse m, animé dans un repère donné de la vitesse de norme v, l’énergie cinétique s’écrit $E_c = \\frac{1}{2} m v^2$.\nUnités : la masse m s’exprime en kilogrammes (kg), la vitesse v en mètres par seconde (m/s) et l’énergie cinétique en joules (J).",
      "keyRule": "En translation, $E_c = \\frac{1}{2} m v^2$ : toujours convertir la masse en kilogrammes avant de calculer.",
      "formulas": [
        {
          "name": "Énergie cinétique de translation",
          "formula": "E_c = \\frac{1}{2} m v^2",
          "note": "m en kg, v en m/s, $E_c$ en joules (J)."
        }
      ],
      "workedExample": {
        "title": "La bille de l’activité d’application 1",
        "statement": "Une bille de masse m = 250 g se déplace sur une route rectiligne à la vitesse V = 2 m/s. Donne l’expression de son énergie cinétique, puis calcule sa valeur.",
        "methodSteps": [
          "Expression : $E_c = \\frac{1}{2} m V^2$.",
          "Conversion : m = 250 g = $0{,}25$ kg.",
          "Application numérique : $E_c = \\frac{1}{2} \\times 0{,}25 \\times 2^2$, soit $E_c = 0{,}5$ J."
        ],
        "conclusion": "La bille possède une énergie cinétique de $0{,}5$ J : c’est la solution de l’activité d’application 1."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’énergie du fait de la vitesse",
          "stepTheme": "L’énergie du fait de la vitesse",
          "stepBadge": "L’énergie du fait de la vitesse",
          "paragraphText": "• Énergie cinétique : énergie qu’un solide possède du fait de sa vitesse.\nUn véhicule qui percute violemment un obstacle cause d’autant plus de dégâts que son énergie cinétique au moment du choc est grande.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p01_q1",
            "type": "mcq",
            "prompt": "L’énergie cinétique d’un solide est l’énergie qu’il possède :",
            "options": [
              "Du fait de sa position par rapport à la Terre",
              "Du fait de sa vitesse",
              "Du fait de sa température",
              "Du fait de sa charge électrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition du §1.1 du document : l’énergie cinétique est liée au mouvement, donc à la vitesse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’expression $E_c = \\frac{1}{2} m v^2$",
          "stepTheme": "L’expression $E_c = \\frac{1}{2} m v^2$",
          "stepBadge": "L’expression $E_c = \\frac{1}{2} m v^2$",
          "paragraphText": "Pour un point matériel M de masse m animé de la vitesse de norme v, l’énergie cinétique vaut $E_c = \\frac{1}{2} m v^2$.\nLa vitesse y intervient au carré : elle joue un rôle plus fort que la masse, qui intervient à la puissance un.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p01_q2",
            "type": "mcq",
            "prompt": "L’énergie cinétique d’un point matériel de masse m et de vitesse v s’écrit :",
            "options": [
              "$E_c = m v$",
              "$E_c = \\frac{1}{2} m v$",
              "$E_c = \\frac{1}{2} m v^2$",
              "$E_c = m v^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est l’expression du §1.2 : le facteur un demi et le carré de la vitesse sont indispensables."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les unités du calcul",
          "stepTheme": "Les unités du calcul",
          "stepBadge": "Les unités du calcul",
          "paragraphText": "Le document précise les unités à utiliser dans l’expression de l’énergie cinétique.\n• La masse m s’exprime en kilogrammes (kg).\n• La vitesse v s’exprime en mètres par seconde (m/s).\n• L’énergie cinétique $E_c$ s’exprime alors en joules (J).",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p01_q3",
            "type": "mcq",
            "prompt": "Dans l’expression de l’énergie cinétique, l’énergie obtenue est en joules si la masse est en :",
            "options": [
              "Grammes et la vitesse en km/h",
              "Kilogrammes et la vitesse en m/s",
              "Kilogrammes et la vitesse en km/h",
              "Tonnes et la vitesse en m/s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document impose m en kg et v en m/s pour obtenir $E_c$ en joules."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "La bille de 250 g à 2 m/s",
          "stepTheme": "La bille de 250 g à 2 m/s",
          "stepBadge": "La bille de 250 g à 2 m/s",
          "paragraphText": "L’activité d’application 1 étudie une bille de masse m = 250 g qui se déplace à la vitesse V = 2 m/s.\nAprès conversion de la masse en kilogrammes, le calcul donne une énergie cinétique de $0{,}5$ J.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p01_q4",
            "type": "mcq",
            "prompt": "L’énergie cinétique de la bille de masse 250 g se déplaçant à 2 m/s vaut :",
            "options": [
              "$0{,}25$ J",
              "$1$ J",
              "$2$ J",
              "$0{,}5$ J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Avec m = $0{,}25$ kg : $E_c = \\frac{1}{2} \\times 0{,}25 \\times 2^2 = 0{,}5$ J, comme dans la solution du document."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : la vitesse intervient au carré",
          "stepTheme": "Piège : la vitesse intervient au carré",
          "stepBadge": "Piège : la vitesse intervient au carré",
          "paragraphText": "Parce que la vitesse est au carré dans l’expression, doubler la vitesse ne double pas l’énergie cinétique.\nElle la multiplie par quatre, ce qui explique la gravité des chocs à vive allure évoquée dans la situation d’apprentissage.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p01_q5",
            "type": "mcq",
            "prompt": "Si la vitesse d’un solide double, son énergie cinétique est multipliée par :",
            "options": [
              "2",
              "4",
              "8",
              "Elle ne change pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La vitesse intervient au carré : $2^2 = 4$, donc $E_c$ est multipliée par 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Convertir la masse avant de calculer",
          "stepTheme": "Convertir la masse avant de calculer",
          "stepBadge": "Convertir la masse avant de calculer",
          "paragraphText": "La méthode de l’activité 1 commence par la conversion de la masse dans l’unité du système international.\nUne masse de 250 g devient $0{,}25$ kg : sans cette conversion, le résultat serait mille fois trop grand.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p01_q6",
            "type": "mcq",
            "prompt": "Avant d’appliquer la formule à la bille de l’activité 1, sa masse de 250 g doit être convertie en :",
            "options": [
              "$0{,}25$ kg",
              "$2{,}5$ kg",
              "$25$ kg",
              "$0{,}025$ kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "250 g = $0{,}25$ kg : c’est la conversion utilisée dans la solution du document."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p01_q1",
          "type": "mcq",
          "prompt": "L’énergie cinétique d’un solide est l’énergie qu’il possède :",
          "options": [
            "Du fait de sa position par rapport à la Terre",
            "Du fait de sa vitesse",
            "Du fait de sa température",
            "Du fait de sa charge électrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition du §1.1 du document : l’énergie cinétique est liée au mouvement, donc à la vitesse."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p01_q2",
          "type": "mcq",
          "prompt": "L’énergie cinétique d’un point matériel de masse m et de vitesse v s’écrit :",
          "options": [
            "$E_c = m v$",
            "$E_c = \\frac{1}{2} m v$",
            "$E_c = \\frac{1}{2} m v^2$",
            "$E_c = m v^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est l’expression du §1.2 : le facteur un demi et le carré de la vitesse sont indispensables."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p01_q3",
          "type": "mcq",
          "prompt": "Dans l’expression de l’énergie cinétique, l’énergie obtenue est en joules si la masse est en :",
          "options": [
            "Grammes et la vitesse en km/h",
            "Kilogrammes et la vitesse en m/s",
            "Kilogrammes et la vitesse en km/h",
            "Tonnes et la vitesse en m/s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document impose m en kg et v en m/s pour obtenir $E_c$ en joules."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p01_q4",
          "type": "mcq",
          "prompt": "L’énergie cinétique de la bille de masse 250 g se déplaçant à 2 m/s vaut :",
          "options": [
            "$0{,}25$ J",
            "$1$ J",
            "$2$ J",
            "$0{,}5$ J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Avec m = $0{,}25$ kg : $E_c = \\frac{1}{2} \\times 0{,}25 \\times 2^2 = 0{,}5$ J, comme dans la solution du document."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p01_q5",
          "type": "mcq",
          "prompt": "Si la vitesse d’un solide double, son énergie cinétique est multipliée par :",
          "options": [
            "2",
            "4",
            "8",
            "Elle ne change pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La vitesse intervient au carré : $2^2 = 4$, donc $E_c$ est multipliée par 4."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p01_q6",
          "type": "mcq",
          "prompt": "Avant d’appliquer la formule à la bille de l’activité 1, sa masse de 250 g doit être convertie en :",
          "options": [
            "$0{,}25$ kg",
            "$2{,}5$ kg",
            "$25$ kg",
            "$0{,}025$ kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "250 g = $0{,}25$ kg : c’est la conversion utilisée dans la solution du document."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l07_energie_cinetique_p02",
      "order": 2,
      "title": "Énergie cinétique d’un ensemble de points matériels",
      "summary": "L’énergie cinétique d’un ensemble de points matériels est la somme des énergies cinétiques de chacun de ses points à l’instant considéré.",
      "conceptExplanation": "Soit un ensemble de points matériels $M_1$, $M_2$, …, $M_i$, …, $M_n$, de masses respectives $m_1$, $m_2$, …, $m_i$, …, $m_n$ et dont les vitesses, à l’instant considéré, valent $v_1$, $v_2$, …, $v_i$, …, $v_n$.\nPour le point $M_i$, l’énergie cinétique vaut $E_{ci} = \\frac{1}{2} m_i v_i^2$.\nL’énergie cinétique, à l’instant considéré, de l’ensemble des points est la somme des énergies cinétiques de chacun d’eux : $E_c = \\sum E_{ci} = \\sum \\frac{1}{2} m_i v_i^2$.",
      "keyRule": "Pour un ensemble de points, on additionne les énergies cinétiques de chaque point, calculées à leurs vitesses propres.",
      "formulas": [
        {
          "name": "Énergie cinétique d’un point de l’ensemble",
          "formula": "E_{ci} = \\frac{1}{2} m_i v_i^2",
          "note": "Chaque point a sa masse et sa vitesse propres."
        },
        {
          "name": "Énergie cinétique de l’ensemble",
          "formula": "E_c = \\sum E_{ci} = \\sum \\frac{1}{2} m_i v_i^2",
          "note": "Somme prise à l’instant considéré."
        }
      ],
      "workedExample": {
        "title": "Deux points matériels en mouvement",
        "statement": "Un ensemble est formé de deux points : le premier a une masse de 2 kg et une vitesse de 3 m/s, le second une masse de 1 kg et une vitesse de 2 m/s. Calcule l’énergie cinétique de l’ensemble.",
        "methodSteps": [
          "Premier point : $E_{c1} = \\frac{1}{2} \\times 2 \\times 3^2 = 9$ J.",
          "Second point : $E_{c2} = \\frac{1}{2} \\times 1 \\times 2^2 = 2$ J.",
          "Ensemble : $E_c = E_{c1} + E_{c2} = 11$ J."
        ],
        "conclusion": "On additionne les énergies cinétiques individuelles : l’énergie de l’ensemble vaut 11 J."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Un ensemble de points matériels",
          "stepTheme": "Un ensemble de points matériels",
          "stepBadge": "Un ensemble de points matériels",
          "paragraphText": "• Ensemble de points matériels : système formé de points $M_1$, $M_2$, …, $M_n$, chacun ayant sa propre masse et sa propre vitesse à l’instant considéré.\nUn solide peut être décrit comme un tel ensemble, ce qui servira pour la rotation.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p02_q1",
            "type": "mcq",
            "prompt": "Dans un ensemble de points matériels, chaque point est caractérisé à l’instant considéré par :",
            "options": [
              "La même masse et la même vitesse que les autres",
              "Sa masse propre et sa vitesse propre",
              "Uniquement sa position",
              "Uniquement sa masse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document affecte à chaque point $M_i$ sa masse $m_i$ et sa vitesse $v_i$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’énergie d’un point de l’ensemble",
          "stepTheme": "L’énergie d’un point de l’ensemble",
          "stepBadge": "L’énergie d’un point de l’ensemble",
          "paragraphText": "Chaque point de l’ensemble possède sa propre énergie cinétique, calculée avec sa masse et sa vitesse.\nPour le point $M_i$, elle vaut $E_{ci} = \\frac{1}{2} m_i v_i^2$.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p02_q2",
            "type": "mcq",
            "prompt": "L’énergie cinétique du point $M_i$ d’un ensemble de points matériels vaut :",
            "options": [
              "$E_{ci} = m_i v_i$",
              "$E_{ci} = \\frac{1}{2} m_i v_i$",
              "$E_{ci} = \\frac{1}{2} M v_i^2$ où M est la masse totale",
              "$E_{ci} = \\frac{1}{2} m_i v_i^2$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On applique l’expression de translation au point $M_i$, avec sa masse propre $m_i$ et sa vitesse propre $v_i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La somme des énergies cinétiques",
          "stepTheme": "La somme des énergies cinétiques",
          "stepBadge": "La somme des énergies cinétiques",
          "paragraphText": "L’énergie cinétique de l’ensemble, à l’instant considéré, est la somme des énergies cinétiques de chacun de ses points.\nOn écrit $E_c = \\sum E_{ci} = \\sum \\frac{1}{2} m_i v_i^2$.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p02_q3",
            "type": "mcq",
            "prompt": "L’énergie cinétique d’un ensemble de points matériels est égale :",
            "options": [
              "À la somme des énergies cinétiques de chacun de ses points",
              "À l’énergie cinétique du point le plus rapide",
              "Au produit des énergies cinétiques de ses points",
              "À la moyenne des vitesses de ses points"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la règle du §1.3 du document : $E_c = \\sum E_{ci}$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Un point de 2 kg à 3 m/s",
          "stepTheme": "Un point de 2 kg à 3 m/s",
          "stepBadge": "Un point de 2 kg à 3 m/s",
          "paragraphText": "Appliquons l’expression à un point matériel de masse 2 kg animé d’une vitesse de 3 m/s.\nSon énergie cinétique vaut $\\frac{1}{2} \\times 2 \\times 3^2$, soit 9 J, qui entrerait ensuite dans la somme de l’ensemble.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p02_q4",
            "type": "mcq",
            "prompt": "L’énergie cinétique d’un point matériel de masse 2 kg et de vitesse 3 m/s vaut :",
            "options": [
              "3 J",
              "6 J",
              "9 J",
              "18 J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$E_c = \\frac{1}{2} \\times 2 \\times 3^2 = 9$ J."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : ne pas confondre ensemble et point unique",
          "stepTheme": "Piège : ne pas confondre ensemble et point unique",
          "stepBadge": "Piège : ne pas confondre ensemble et point unique",
          "paragraphText": "Pour un ensemble de points animés de vitesses différentes, il est faux de calculer l’énergie avec la masse totale et une seule vitesse.\nChaque point contribue avec sa propre vitesse : c’est pour cela que la formule est une somme.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p02_q5",
            "type": "mcq",
            "prompt": "Pour un ensemble de points de vitesses différentes, le calcul correct de l’énergie cinétique consiste à :",
            "options": [
              "Prendre la masse totale et la plus grande vitesse",
              "Prendre la masse totale et la vitesse moyenne",
              "Calculer l’énergie de chaque point puis les additionner",
              "Prendre uniquement le point le plus lourd"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La formule du document est une somme sur tous les points : chaque terme utilise la masse et la vitesse du point."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "À un instant donné",
          "stepTheme": "À un instant donné",
          "stepBadge": "À un instant donné",
          "paragraphText": "Le document insiste : les vitesses des points sont celles « à l’instant considéré ».\nLa méthode consiste donc à relever toutes les vitesses au même instant, à calculer chaque énergie, puis à les additionner.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p02_q6",
            "type": "mcq",
            "prompt": "Les vitesses utilisées dans la somme des énergies cinétiques sont celles des points :",
            "options": [
              "À des instants différents, au choix",
              "Au même instant, dit instant considéré",
              "À l’instant initial uniquement",
              "À l’instant final uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document répète « à l’instant considéré » : toutes les vitesses sont prises au même instant."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p02_q1",
          "type": "mcq",
          "prompt": "Dans un ensemble de points matériels, chaque point est caractérisé à l’instant considéré par :",
          "options": [
            "La même masse et la même vitesse que les autres",
            "Sa masse propre et sa vitesse propre",
            "Uniquement sa position",
            "Uniquement sa masse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document affecte à chaque point $M_i$ sa masse $m_i$ et sa vitesse $v_i$."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p02_q2",
          "type": "mcq",
          "prompt": "L’énergie cinétique du point $M_i$ d’un ensemble de points matériels vaut :",
          "options": [
            "$E_{ci} = m_i v_i$",
            "$E_{ci} = \\frac{1}{2} m_i v_i$",
            "$E_{ci} = \\frac{1}{2} M v_i^2$ où M est la masse totale",
            "$E_{ci} = \\frac{1}{2} m_i v_i^2$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On applique l’expression de translation au point $M_i$, avec sa masse propre $m_i$ et sa vitesse propre $v_i$."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p02_q3",
          "type": "mcq",
          "prompt": "L’énergie cinétique d’un ensemble de points matériels est égale :",
          "options": [
            "À la somme des énergies cinétiques de chacun de ses points",
            "À l’énergie cinétique du point le plus rapide",
            "Au produit des énergies cinétiques de ses points",
            "À la moyenne des vitesses de ses points"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la règle du §1.3 du document : $E_c = \\sum E_{ci}$."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p02_q4",
          "type": "mcq",
          "prompt": "L’énergie cinétique d’un point matériel de masse 2 kg et de vitesse 3 m/s vaut :",
          "options": [
            "3 J",
            "6 J",
            "9 J",
            "18 J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$E_c = \\frac{1}{2} \\times 2 \\times 3^2 = 9$ J."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p02_q5",
          "type": "mcq",
          "prompt": "Pour un ensemble de points de vitesses différentes, le calcul correct de l’énergie cinétique consiste à :",
          "options": [
            "Prendre la masse totale et la plus grande vitesse",
            "Prendre la masse totale et la vitesse moyenne",
            "Calculer l’énergie de chaque point puis les additionner",
            "Prendre uniquement le point le plus lourd"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La formule du document est une somme sur tous les points : chaque terme utilise la masse et la vitesse du point."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p02_q6",
          "type": "mcq",
          "prompt": "Les vitesses utilisées dans la somme des énergies cinétiques sont celles des points :",
          "options": [
            "À des instants différents, au choix",
            "Au même instant, dit instant considéré",
            "À l’instant initial uniquement",
            "À l’instant final uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document répète « à l’instant considéré » : toutes les vitesses sont prises au même instant."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l07_energie_cinetique_p03",
      "order": 3,
      "title": "Énergie cinétique de rotation et moment d’inertie",
      "summary": "Pour un solide en rotation autour d’un axe fixe, l’énergie cinétique vaut un demi du produit du moment d’inertie par le carré de la vitesse angulaire (partie signalée pour la 1ère C dans le document).",
      "conceptExplanation": "Le solide S est en rotation autour de l’axe fixe $\\Delta$ et on le considère comme un ensemble de points matériels : le point $M_i$, de masse $m_i$, se déplace sur un cercle de rayon $r_i$ et sa vitesse vaut $v_i = r_i \\omega$, car tous les points du solide ont la même vitesse angulaire $\\omega$.\nOn pose $J_\\Delta = \\sum m_i r_i^2$ : c’est le moment d’inertie du solide par rapport à l’axe $\\Delta$, une grandeur caractéristique du solide qui dépend de la répartition des masses autour de l’axe.\nL’énergie cinétique de rotation s’écrit alors $E_c = \\frac{1}{2} J_\\Delta \\omega^2$, avec $E_c$ en joules, $\\omega$ en radians par seconde (rad/s) et $J_\\Delta$ en kilogrammes mètres carrés (kg·m²).",
      "keyRule": "En rotation autour d’un axe fixe : $E_c = \\frac{1}{2} J_\\Delta \\omega^2$, avec $J_\\Delta = \\sum m_i r_i^2$.",
      "formulas": [
        {
          "name": "Moment d’inertie",
          "formula": "J_\\Delta = \\sum m_i r_i^2",
          "note": "Il dépend de la répartition des masses autour de l’axe $\\Delta$."
        },
        {
          "name": "Énergie cinétique de rotation",
          "formula": "E_c = \\frac{1}{2} J_\\Delta \\omega^2",
          "note": "$\\omega$ en rad/s, $J_\\Delta$ en kg·m², $E_c$ en joules."
        },
        {
          "name": "Vitesse d’un point du solide",
          "formula": "v_i = r_i \\omega",
          "note": "Tous les points ont la même vitesse angulaire $\\omega$."
        },
        {
          "name": "Moment d’inertie d’un disque homogène",
          "formula": "J_\\Delta = \\frac{1}{2} M R^2",
          "note": "M masse du disque, R son rayon ; anneau : $J_\\Delta = M R^2$ ; boule : $J_\\Delta = \\frac{2}{5} M R^2$."
        }
      ],
      "workedExample": {
        "title": "Le solide en rotation de l’activité d’application",
        "statement": "Un solide animé d’un mouvement de rotation autour d’un axe fixe a une vitesse angulaire de $0{,}5$ rad/s. Son moment d’inertie par rapport à l’axe de rotation est $J_\\Delta = 6 \\times 10^{-1}$ kg·m². Calcule son énergie cinétique.",
        "methodSteps": [
          "Expression : $E_c = \\frac{1}{2} J_\\Delta \\omega^2$.",
          "Application numérique : $E_c = \\frac{1}{2} \\times 6 \\times 10^{-1} \\times (0{,}5)^2$.",
          "Résultat : $E_c = 7{,}5 \\times 10^{-2}$ J."
        ],
        "conclusion": "L’énergie cinétique de rotation du solide vaut $7{,}5 \\times 10^{-2}$ J, comme dans la solution du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le moment d’inertie",
          "stepTheme": "Le moment d’inertie",
          "stepBadge": "Le moment d’inertie",
          "paragraphText": "• Moment d’inertie : grandeur caractéristique d’un solide en rotation, notée $J_\\Delta = \\sum m_i r_i^2$ pour l’axe $\\Delta$.\nElle dépend de la répartition des masses qui constituent le solide autour de l’axe de rotation.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p03_q1",
            "type": "mcq",
            "prompt": "Le moment d’inertie d’un solide par rapport à un axe dépend :",
            "options": [
              "De sa vitesse angulaire uniquement",
              "De la répartition des masses du solide autour de l’axe",
              "De la durée de rotation",
              "De la température du solide"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document définit $J_\\Delta$ comme une grandeur caractéristique du solide, liée à la répartition de ses masses autour de $\\Delta$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Tous les points ont la même vitesse angulaire",
          "stepTheme": "Tous les points ont la même vitesse angulaire",
          "stepBadge": "Tous les points ont la même vitesse angulaire",
          "paragraphText": "Dans un solide en rotation, tous les points ont la même vitesse angulaire $\\omega$ à l’instant considéré.\nEn revanche, leurs vitesses linéaires diffèrent selon leur distance à l’axe : $v_i = r_i \\omega$.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p03_q2",
            "type": "mcq",
            "prompt": "Pour les points d’un solide en rotation autour d’un axe fixe, la grandeur commune à l’instant considéré est :",
            "options": [
              "La vitesse linéaire",
              "Le rayon des trajectoires",
              "La vitesse angulaire $\\omega$",
              "La masse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document souligne que $\\omega$ a la même valeur pour chaque point matériel, alors que $v_i = r_i \\omega$ dépend de $r_i$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L’expression en rotation",
          "stepTheme": "L’expression en rotation",
          "stepBadge": "L’expression en rotation",
          "paragraphText": "En sommant les énergies cinétiques de tous les points, on obtient l’énergie cinétique de rotation.\nElle s’écrit $E_c = \\frac{1}{2} J_\\Delta \\omega^2$, où $J_\\Delta$ regroupe toute la géométrie des masses.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p03_q3",
            "type": "mcq",
            "prompt": "L’énergie cinétique d’un solide en rotation autour d’un axe fixe vaut :",
            "options": [
              "$E_c = \\frac{1}{2} J_\\Delta \\omega^2$",
              "$E_c = J_\\Delta \\omega$",
              "$E_c = \\frac{1}{2} m \\omega^2$",
              "$E_c = \\frac{1}{2} J_\\Delta v^2$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la conclusion du §1.3.1 du document : $E_c = \\frac{1}{2} J_\\Delta \\omega^2$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le calcul de l’activité d’application",
          "stepTheme": "Le calcul de l’activité d’application",
          "stepBadge": "Le calcul de l’activité d’application",
          "paragraphText": "L’activité d’application donne un moment d’inertie de $6 \\times 10^{-1}$ kg·m² et une vitesse angulaire de $0{,}5$ rad/s.\nLa solution du document obtient une énergie cinétique de $7{,}5 \\times 10^{-2}$ J.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p03_q4",
            "type": "mcq",
            "prompt": "Pour $J_\\Delta = 6 \\times 10^{-1}$ kg·m² et $\\omega = 0{,}5$ rad/s, l’énergie cinétique de rotation vaut :",
            "options": [
              "$0{,}15$ J",
              "$7{,}5 \\times 10^{-2}$ J",
              "$0{,}3$ J",
              "$1{,}5 \\times 10^{-2}$ J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E_c = \\frac{1}{2} \\times 0{,}6 \\times (0{,}5)^2 = 7{,}5 \\times 10^{-2}$ J, comme dans la solution du document."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : deux solides de même masse, deux moments différents",
          "stepTheme": "Piège : deux solides de même masse, deux moments différents",
          "stepBadge": "Piège : deux solides de même masse, deux moments différents",
          "paragraphText": "Le moment d’inertie ne dépend pas seulement de la masse totale : un anneau et un disque de même masse et de même rayon n’ont pas le même moment d’inertie.\nLe document donne $J_\\Delta = M R^2$ pour l’anneau et $J_\\Delta = \\frac{1}{2} M R^2$ pour le disque, car leurs masses ne sont pas réparties de la même façon.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p03_q5",
            "type": "mcq",
            "prompt": "Le moment d’inertie d’un disque homogène de masse M et de rayon R, par rapport à son axe, vaut :",
            "options": [
              "$M R^2$",
              "$\\frac{2}{5} M R^2$",
              "$\\frac{1}{2} M R^2$",
              "$\\frac{1}{12} M R^2$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C’est la valeur du tableau des moments d’inertie du document ; $M R^2$ est celle de l’anneau et $\\frac{2}{5} M R^2$ celle de la boule."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "Les unités en rotation",
          "stepTheme": "Les unités en rotation",
          "stepBadge": "Les unités en rotation",
          "paragraphText": "Le document précise les unités de l’expression de rotation.\n• L’énergie cinétique $E_c$ s’exprime en joules (J).\n• La vitesse angulaire $\\omega$ s’exprime en radians par seconde (rad/s).\n• Le moment d’inertie $J_\\Delta$ s’exprime en kilogrammes mètres carrés (kg·m²).",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p03_q6",
            "type": "mcq",
            "prompt": "L’unité du moment d’inertie $J_\\Delta$ est :",
            "options": [
              "Le kilogramme (kg)",
              "Le kilogramme mètre carré (kg·m²)",
              "Le joule (J)",
              "Le radian par seconde (rad/s)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document donne $J_\\Delta$ en kg·m², $\\omega$ en rad/s et $E_c$ en joules."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p03_q1",
          "type": "mcq",
          "prompt": "Le moment d’inertie d’un solide par rapport à un axe dépend :",
          "options": [
            "De sa vitesse angulaire uniquement",
            "De la répartition des masses du solide autour de l’axe",
            "De la durée de rotation",
            "De la température du solide"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document définit $J_\\Delta$ comme une grandeur caractéristique du solide, liée à la répartition de ses masses autour de $\\Delta$."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p03_q2",
          "type": "mcq",
          "prompt": "Pour les points d’un solide en rotation autour d’un axe fixe, la grandeur commune à l’instant considéré est :",
          "options": [
            "La vitesse linéaire",
            "Le rayon des trajectoires",
            "La vitesse angulaire $\\omega$",
            "La masse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document souligne que $\\omega$ a la même valeur pour chaque point matériel, alors que $v_i = r_i \\omega$ dépend de $r_i$."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p03_q3",
          "type": "mcq",
          "prompt": "L’énergie cinétique d’un solide en rotation autour d’un axe fixe vaut :",
          "options": [
            "$E_c = \\frac{1}{2} J_\\Delta \\omega^2$",
            "$E_c = J_\\Delta \\omega$",
            "$E_c = \\frac{1}{2} m \\omega^2$",
            "$E_c = \\frac{1}{2} J_\\Delta v^2$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la conclusion du §1.3.1 du document : $E_c = \\frac{1}{2} J_\\Delta \\omega^2$."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p03_q4",
          "type": "mcq",
          "prompt": "Pour $J_\\Delta = 6 \\times 10^{-1}$ kg·m² et $\\omega = 0{,}5$ rad/s, l’énergie cinétique de rotation vaut :",
          "options": [
            "$0{,}15$ J",
            "$7{,}5 \\times 10^{-2}$ J",
            "$0{,}3$ J",
            "$1{,}5 \\times 10^{-2}$ J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E_c = \\frac{1}{2} \\times 0{,}6 \\times (0{,}5)^2 = 7{,}5 \\times 10^{-2}$ J, comme dans la solution du document."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p03_q5",
          "type": "mcq",
          "prompt": "Le moment d’inertie d’un disque homogène de masse M et de rayon R, par rapport à son axe, vaut :",
          "options": [
            "$M R^2$",
            "$\\frac{2}{5} M R^2$",
            "$\\frac{1}{2} M R^2$",
            "$\\frac{1}{12} M R^2$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C’est la valeur du tableau des moments d’inertie du document ; $M R^2$ est celle de l’anneau et $\\frac{2}{5} M R^2$ celle de la boule."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p03_q6",
          "type": "mcq",
          "prompt": "L’unité du moment d’inertie $J_\\Delta$ est :",
          "options": [
            "Le kilogramme (kg)",
            "Le kilogramme mètre carré (kg·m²)",
            "Le joule (J)",
            "Le radian par seconde (rad/s)"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document donne $J_\\Delta$ en kg·m², $\\omega$ en rad/s et $E_c$ en joules."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l07_energie_cinetique_p04",
      "order": 4,
      "title": "Le théorème de l’énergie cinétique",
      "summary": "Dans un référentiel galiléen, la variation de l’énergie cinétique d’un solide entre deux instants égale la somme algébrique des travaux des forces extérieures entre ces instants.",
      "conceptExplanation": "Le théorème de l’énergie cinétique s’énonce ainsi : dans un référentiel galiléen, la variation de l’énergie cinétique d’un solide, entre deux instants $t_1$ et $t_2$, est égale à la somme algébrique des travaux des forces extérieures qui s’exercent sur le solide entre ces deux instants.\nOn écrit $\\Delta E_c = \\sum W_{1-2}(\\vec{F})$.\nAvant d’appliquer le théorème, la méthode du document impose trois précisions : le système étudié, les différentes forces qui s’exercent sur le système, et les deux instants entre lesquels on applique le théorème.",
      "keyRule": "$\\Delta E_c = \\sum W_{1-2}(\\vec{F})$ : avant tout calcul, préciser le système, les forces extérieures et les deux instants.",
      "formulas": [
        {
          "name": "Théorème de l’énergie cinétique",
          "formula": "\\Delta E_c = \\sum W_{1-2}(\\vec{F})",
          "note": "Valable dans un référentiel galiléen ; travaux algébriques des forces extérieures."
        }
      ],
      "workedExample": {
        "title": "Reconstituer l’énoncé (exercice 2)",
        "statement": "L’exercice 2 du document donne des groupes de mots à remettre en ordre pour retrouver l’énoncé du théorème de l’énergie cinétique.",
        "methodSteps": [
          "On commence par le sujet : « La variation de l’énergie cinétique d’un solide ».",
          "On ajoute le cadre : « entre deux instants ».",
          "On termine par : « est égale à la somme algébrique des travaux de toutes les forces extérieures appliquées entre ces deux instants »."
        ],
        "conclusion": "La phrase reconstituée est exactement l’énoncé du théorème donné dans la solution de l’exercice 2."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’énoncé du théorème",
          "stepTheme": "L’énoncé du théorème",
          "stepBadge": "L’énoncé du théorème",
          "paragraphText": "• Théorème de l’énergie cinétique : dans un référentiel galiléen, la variation de l’énergie cinétique d’un solide entre deux instants est égale à la somme algébrique des travaux des forces extérieures entre ces deux instants.\nIl relie donc une variation d’énergie à des travaux de forces.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p04_q1",
            "type": "mcq",
            "prompt": "D’après le théorème de l’énergie cinétique, la variation de l’énergie cinétique d’un solide entre deux instants est égale :",
            "options": [
              "À la somme algébrique des travaux des forces extérieures entre ces instants",
              "À la somme des forces extérieures",
              "Au travail de la seule force de frottement",
              "À la variation de son énergie potentielle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est l’énoncé du §2.1, repris dans la phrase reconstituée de l’exercice 2."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Un référentiel galiléen",
          "stepTheme": "Un référentiel galiléen",
          "stepBadge": "Un référentiel galiléen",
          "paragraphText": "Le théorème est énoncé dans un référentiel galiléen : c’est une condition d’application à ne pas oublier.\nSans ce cadre, la relation entre variation d’énergie cinétique et travaux des forces extérieures n’est pas garantie.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p04_q2",
            "type": "mcq",
            "prompt": "Le théorème de l’énergie cinétique s’applique dans :",
            "options": [
              "N’importe quel référentiel",
              "Un référentiel lié au solide",
              "Un référentiel galiléen",
              "Uniquement un référentiel en rotation"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’énoncé du document commence par « Dans un référentiel galiléen »."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "methode",
          "stepTitle": "La méthode d’étude en trois précisions",
          "stepTheme": "La méthode d’étude en trois précisions",
          "stepBadge": "La méthode d’étude en trois précisions",
          "paragraphText": "Avant d’appliquer le théorème, le document demande trois précisions.\n• Préciser le système.\n• Préciser les différentes forces qui s’exercent sur le système.\n• Préciser les deux instants entre lesquels on applique le théorème.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p04_q3",
            "type": "mcq",
            "prompt": "Avant d’appliquer le théorème de l’énergie cinétique, il faut préciser :",
            "options": [
              "Uniquement la vitesse finale",
              "Le système, les forces qui s’exercent sur lui et les deux instants",
              "Uniquement la masse du solide",
              "La couleur du solide et sa forme"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ce sont les trois étapes de la méthode d’étude du §2.2 du document."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Des travaux algébriques",
          "stepTheme": "Des travaux algébriques",
          "stepBadge": "Des travaux algébriques",
          "paragraphText": "La somme du théorème est algébrique : chaque travail compte avec son signe.\nUn travail moteur, comme celui du poids pendant une descente, est positif ; un travail résistant, comme celui des frottements, est négatif.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p04_q4",
            "type": "mcq",
            "prompt": "Dans le théorème de l’énergie cinétique, les travaux des forces extérieures sont additionnés :",
            "options": [
              "En valeur absolue",
              "Algébriquement, chacun avec son signe",
              "En ne gardant que les travaux positifs",
              "En ne gardant que le plus grand"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le document parle de « somme algébrique » : un travail résistant compte négativement."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : oublier une force extérieure",
          "stepTheme": "Piège : oublier une force extérieure",
          "stepBadge": "Piège : oublier une force extérieure",
          "paragraphText": "Le théorème fait intervenir toutes les forces extérieures, y compris les frottements quand ils existent.\nOublier le travail des frottements fausse la variation d’énergie cinétique, comme le montre l’exercice de la cuvette où la vitesse réelle est inférieure à la vitesse prévue sans frottements.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p04_q5",
            "type": "mcq",
            "prompt": "Dans la somme des travaux du théorème, on doit inclure :",
            "options": [
              "Seulement le poids",
              "Seulement les forces motrices",
              "Toutes les forces extérieures, frottements compris s’ils existent",
              "Seulement la réaction du support"
            ],
            "correctAnswerIndex": 2,
            "explanation": "L’énoncé vise « toutes les forces extérieures appliquées » entre les deux instants."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La phrase de l’exercice 2",
          "stepTheme": "La phrase de l’exercice 2",
          "stepBadge": "La phrase de l’exercice 2",
          "paragraphText": "L’exercice 2 du document fait reconstituer l’énoncé à partir de groupes de mots mélangés.\nLa solution replace « somme algébrique » juste avant « des travaux de toutes les forces extérieures appliquées ».",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p04_q6",
            "type": "mcq",
            "prompt": "Dans la phrase reconstituée de l’exercice 2, la variation de l’énergie cinétique est égale à la somme algébrique :",
            "options": [
              "Des travaux de toutes les forces extérieures appliquées entre ces deux instants",
              "Des vitesses du solide",
              "Des masses du solide",
              "Des énergies potentielles du solide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est exactement la fin de la phrase donnée dans la solution de l’exercice 2."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p04_q1",
          "type": "mcq",
          "prompt": "D’après le théorème de l’énergie cinétique, la variation de l’énergie cinétique d’un solide entre deux instants est égale :",
          "options": [
            "À la somme algébrique des travaux des forces extérieures entre ces instants",
            "À la somme des forces extérieures",
            "Au travail de la seule force de frottement",
            "À la variation de son énergie potentielle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est l’énoncé du §2.1, repris dans la phrase reconstituée de l’exercice 2."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p04_q2",
          "type": "mcq",
          "prompt": "Le théorème de l’énergie cinétique s’applique dans :",
          "options": [
            "N’importe quel référentiel",
            "Un référentiel lié au solide",
            "Un référentiel galiléen",
            "Uniquement un référentiel en rotation"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’énoncé du document commence par « Dans un référentiel galiléen »."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p04_q3",
          "type": "mcq",
          "prompt": "Avant d’appliquer le théorème de l’énergie cinétique, il faut préciser :",
          "options": [
            "Uniquement la vitesse finale",
            "Le système, les forces qui s’exercent sur lui et les deux instants",
            "Uniquement la masse du solide",
            "La couleur du solide et sa forme"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Ce sont les trois étapes de la méthode d’étude du §2.2 du document."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p04_q4",
          "type": "mcq",
          "prompt": "Dans le théorème de l’énergie cinétique, les travaux des forces extérieures sont additionnés :",
          "options": [
            "En valeur absolue",
            "Algébriquement, chacun avec son signe",
            "En ne gardant que les travaux positifs",
            "En ne gardant que le plus grand"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le document parle de « somme algébrique » : un travail résistant compte négativement."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p04_q5",
          "type": "mcq",
          "prompt": "Dans la somme des travaux du théorème, on doit inclure :",
          "options": [
            "Seulement le poids",
            "Seulement les forces motrices",
            "Toutes les forces extérieures, frottements compris s’ils existent",
            "Seulement la réaction du support"
          ],
          "correctAnswerIndex": 2,
          "explanation": "L’énoncé vise « toutes les forces extérieures appliquées » entre les deux instants."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p04_q6",
          "type": "mcq",
          "prompt": "Dans la phrase reconstituée de l’exercice 2, la variation de l’énergie cinétique est égale à la somme algébrique :",
          "options": [
            "Des travaux de toutes les forces extérieures appliquées entre ces deux instants",
            "Des vitesses du solide",
            "Des masses du solide",
            "Des énergies potentielles du solide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est exactement la fin de la phrase donnée dans la solution de l’exercice 2."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l07_energie_cinetique_p05",
      "order": 5,
      "title": "Applications du théorème de l’énergie cinétique",
      "summary": "Le théorème permet de déterminer une vitesse sur une piste inclinée, puis l’intensité des frottements sur la partie horizontale, ou de détecter des frottements dans une cuvette.",
      "conceptExplanation": "Dans l’activité d’application du document, un objet de masse m = 85 kg descend une piste ABC sans vitesse initiale : le plan incliné AB mesure 20 m avec un angle de 30°, et la partie horizontale BC mesure 30 m.\nSur AB, sans frottements, le théorème donne la vitesse en B à partir du travail du poids, le travail de la réaction étant nul car elle est perpendiculaire au déplacement.\nSur BC, l’objet s’arrête en C : le théorème fait alors apparaître le travail résistant des frottements, dont on déduit leur intensité.\nL’exercice 1 applique la même démarche dans une cuvette demi-sphérique : si la vitesse réelle au fond est inférieure à la vitesse calculée sans frottements, c’est la preuve qu’il existe des forces de frottement.",
      "keyRule": "Théorème appliqué trajet par trajet : le travail de la réaction normale est nul, celui des frottements est résistant et négatif.",
      "formulas": [
        {
          "name": "Vitesse en bas de la piste inclinée",
          "formula": "v_B = \\sqrt{2 g \\times AB \\times \\sin\\alpha}",
          "note": "Départ sans vitesse initiale, descente sans frottements."
        },
        {
          "name": "Intensité des frottements sur BC",
          "formula": "f = \\frac{m v_B^2}{2 \\times BC}",
          "note": "L’objet s’arrête en C : la variation d’énergie cinétique compense le travail des frottements."
        }
      ],
      "workedExample": {
        "title": "La piste ABC de l’activité d’application",
        "statement": "Un objet de masse m = 85 kg descend une piste ABC sans vitesse initiale avant de s’arrêter en C. Données : angle de 30°, AB = 20 m, BC = 30 m, g = 10 N/kg. Détermine la vitesse en B, puis la valeur des forces de frottement sur BC.",
        "methodSteps": [
          "Sur AB, le théorème donne $\\frac{1}{2} m v_B^2 = m g \\times AB \\times \\sin\\alpha$.",
          "Vitesse en B : $v_B = \\sqrt{2 \\times 10 \\times 20 \\times 0{,}5} = 14{,}14$ m/s.",
          "Sur BC : $-\\frac{1}{2} m v_B^2 = -f \\times BC$, donc f se calcule avec m, $v_B$ et BC.",
          "Application numérique : f = $283{,}33$ N."
        ],
        "conclusion": "La vitesse en B vaut 14,14 m/s et les frottements sur BC valent 283,33 N : ce sont les résultats de l’activité du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le cadre d’une application",
          "stepTheme": "Le cadre d’une application",
          "stepBadge": "Le cadre d’une application",
          "paragraphText": "• Application du théorème : étude d’un trajet précis, entre deux positions bien choisies, avec l’inventaire complet des forces sur ce trajet.\nDans l’activité, la piste est découpée en deux trajets distincts, AB incliné puis BC horizontal, car les forces n’y sont pas les mêmes.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p05_q1",
            "type": "mcq",
            "prompt": "Dans l’activité de la piste ABC, le théorème est appliqué séparément sur AB puis sur BC car :",
            "options": [
              "La masse change entre les deux parties",
              "Les forces en jeu ne sont pas les mêmes sur les deux trajets",
              "La pesanteur change",
              "Le théorème ne vaut que sur 20 m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Sur AB on cherche la vitesse avec le travail du poids ; sur BC interviennent en plus les frottements qui arrêtent l’objet."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "La vitesse en B : 14,14 m/s",
          "stepTheme": "La vitesse en B : 14,14 m/s",
          "stepBadge": "La vitesse en B : 14,14 m/s",
          "paragraphText": "Sur la descente AB de 20 m inclinée à 30°, le travail de la réaction est nul et celui du poids vaut $m g \\times AB \\times \\sin\\alpha$.\nLa solution du document obtient $v_B = 14{,}14$ m/s.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p05_q2",
            "type": "mcq",
            "prompt": "La vitesse de l’objet de 85 kg au point B de la piste vaut :",
            "options": [
              "$10$ m/s",
              "$14{,}14$ m/s",
              "$20$ m/s",
              "$28{,}28$ m/s"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$v_B = \\sqrt{2 \\times 10 \\times 20 \\times \\sin 30°} = \\sqrt{200} \\approx 14{,}14$ m/s."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Les frottements sur BC : 283,33 N",
          "stepTheme": "Les frottements sur BC : 283,33 N",
          "stepBadge": "Les frottements sur BC : 283,33 N",
          "paragraphText": "Sur la partie horizontale BC de 30 m, le poids et la réaction ont des travaux nuls et l’objet s’arrête en C.\nToute l’énergie cinétique acquise en B est absorbée par le travail des frottements, ce qui donne f = $283{,}33$ N.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p05_q3",
            "type": "mcq",
            "prompt": "La valeur des forces de frottement sur le parcours BC vaut :",
            "options": [
              "$85$ N",
              "$141{,}66$ N",
              "$283{,}33$ N",
              "$850$ N"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La solution du document calcule f à partir de l’énergie cinétique en B et de la distance BC = 30 m : f = $283{,}33$ N."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Piège : une vitesse réelle plus faible révèle des frottements",
          "stepTheme": "Piège : une vitesse réelle plus faible révèle des frottements",
          "stepBadge": "Piège : une vitesse réelle plus faible révèle des frottements",
          "paragraphText": "Dans l’exercice 1, la bille lâchée dans une cuvette de rayon $0{,}5$ m devrait atteindre le fond à 3,16 m/s sans frottements.\nElle n’y arrive qu’à 2,5 m/s : la solution conclut que la bille est bien soumise à des forces de frottement.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p05_q4",
            "type": "mcq",
            "prompt": "Si la vitesse réelle au fond de la cuvette (2,5 m/s) est inférieure à la vitesse calculée sans frottements (3,16 m/s), on conclut que :",
            "options": [
              "Le théorème est faux",
              "La masse a diminué",
              "La pesanteur a changé",
              "La bille est soumise à des forces de frottement"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la réponse de la question 2 de l’exercice 1 : l’écart de vitesse prouve l’existence de frottements."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le travail des frottements dans la cuvette",
          "stepTheme": "Le travail des frottements dans la cuvette",
          "stepBadge": "Le travail des frottements dans la cuvette",
          "paragraphText": "En réappliquant le théorème entre le bord et le fond de la cuvette avec la vitesse réelle, la solution de l’exercice 1 trouve le travail des frottements.\nCe travail est négatif, égal à $-0{,}19$ J, et l’intensité des frottements vaut alors $0{,}24$ N le long du quart de cercle.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p05_q5",
            "type": "mcq",
            "prompt": "Le travail total des forces de frottement dans l’exercice de la cuvette vaut :",
            "options": [
              "$-0{,}19$ J",
              "$0{,}19$ J",
              "$-0{,}5$ J",
              "$0{,}31$ J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La solution calcule un travail résistant de $-0{,}1875$ J, arrondi à $-0{,}19$ J dans le document."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "La démarche complète d’un exercice",
          "stepTheme": "La démarche complète d’un exercice",
          "stepBadge": "La démarche complète d’un exercice",
          "paragraphText": "Les corrigés du document suivent toujours la même démarche ordonnée.\n• Préciser le système.\n• Faire l’inventaire des forces.\n• Écrire le théorème entre les deux positions.\n• Isoler l’inconnue et faire l’application numérique.",
          "exercise": {
            "id": "premiere_c_physique_l07_energie_cinetique_p05_q6",
            "type": "mcq",
            "prompt": "Dans les corrigés du document, la première étape d’une application du théorème est de :",
            "options": [
              "Faire l’application numérique",
              "Préciser le système étudié",
              "Calculer la vitesse finale",
              "Négliger les frottements"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Chaque solution commence par « Système : … » puis l’inventaire des forces, conformément à la méthode du §2.2."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p05_q1",
          "type": "mcq",
          "prompt": "Dans l’activité de la piste ABC, le théorème est appliqué séparément sur AB puis sur BC car :",
          "options": [
            "La masse change entre les deux parties",
            "Les forces en jeu ne sont pas les mêmes sur les deux trajets",
            "La pesanteur change",
            "Le théorème ne vaut que sur 20 m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Sur AB on cherche la vitesse avec le travail du poids ; sur BC interviennent en plus les frottements qui arrêtent l’objet."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p05_q2",
          "type": "mcq",
          "prompt": "La vitesse de l’objet de 85 kg au point B de la piste vaut :",
          "options": [
            "$10$ m/s",
            "$14{,}14$ m/s",
            "$20$ m/s",
            "$28{,}28$ m/s"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$v_B = \\sqrt{2 \\times 10 \\times 20 \\times \\sin 30°} = \\sqrt{200} \\approx 14{,}14$ m/s."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p05_q3",
          "type": "mcq",
          "prompt": "La valeur des forces de frottement sur le parcours BC vaut :",
          "options": [
            "$85$ N",
            "$141{,}66$ N",
            "$283{,}33$ N",
            "$850$ N"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La solution du document calcule f à partir de l’énergie cinétique en B et de la distance BC = 30 m : f = $283{,}33$ N."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p05_q4",
          "type": "mcq",
          "prompt": "Si la vitesse réelle au fond de la cuvette (2,5 m/s) est inférieure à la vitesse calculée sans frottements (3,16 m/s), on conclut que :",
          "options": [
            "Le théorème est faux",
            "La masse a diminué",
            "La pesanteur a changé",
            "La bille est soumise à des forces de frottement"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la réponse de la question 2 de l’exercice 1 : l’écart de vitesse prouve l’existence de frottements."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p05_q5",
          "type": "mcq",
          "prompt": "Le travail total des forces de frottement dans l’exercice de la cuvette vaut :",
          "options": [
            "$-0{,}19$ J",
            "$0{,}19$ J",
            "$-0{,}5$ J",
            "$0{,}31$ J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "La solution calcule un travail résistant de $-0{,}1875$ J, arrondi à $-0{,}19$ J dans le document."
        },
        {
          "id": "premiere_c_physique_l07_energie_cinetique_p05_q6",
          "type": "mcq",
          "prompt": "Dans les corrigés du document, la première étape d’une application du théorème est de :",
          "options": [
            "Faire l’application numérique",
            "Préciser le système étudié",
            "Calculer la vitesse finale",
            "Négliger les frottements"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Chaque solution commence par « Système : … » puis l’inventaire des forces, conformément à la méthode du §2.2."
        }
      ]
    }
  ]
};
