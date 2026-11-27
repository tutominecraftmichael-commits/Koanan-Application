import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Énergie potentielle de pesanteur » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Énergie potentielle de pesanteur » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L08_ENERGIE_POTENTIELLE_PESANTEUR: CurriculumChapter = {
  "id": "premiere_c_physique_l08_energie_potentielle_pesanteur",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 8,
  "title": "Leçon 8 : Énergie potentielle de pesanteur",
  "summary": "L’énergie potentielle de pesanteur d’un solide dépend de sa masse, de son altitude et de l’état de référence choisi : elle s’écrit $E_p = m g z + C$. Sa variation est l’opposé du travail du poids, et le document présente aussi l’énergie potentielle élastique d’un ressort.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Énergie potentielle de pesanteur » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01",
      "order": 1,
      "title": "Définition et expression de l’énergie potentielle de pesanteur",
      "summary": "Un solide possède, du fait de sa position par rapport à la Terre, une énergie potentielle de pesanteur $E_p(z) = m g z + C$.",
      "conceptExplanation": "L’énergie potentielle de pesanteur d’un solide est l’énergie qu’il possède du fait de sa position par rapport à la Terre : c’est elle qui explique qu’un camion qui dévale une côte prenne de plus en plus de vitesse.\nQuand un solide S de masse m passe d’une position d’altitude $z_1$ à une position d’altitude $z_2$, le travail de son poids vaut $W_{12}(\\vec{P}) = m g (z_1 - z_2) = m g z_1 - m g z_2$.\nCe travail est donc la différence des valeurs prises par une fonction $E_p(z) = m g z + C$, où C est une constante arbitraire, m la masse du solide en kilogrammes, g l’intensité de la pesanteur et z l’altitude du centre d’inertie en mètres.\nL’unité de l’énergie potentielle de pesanteur est le joule (J).",
      "keyRule": "$E_p(z) = m g z + C$ : l’énergie potentielle de pesanteur croît avec l’altitude du centre d’inertie.",
      "formulas": [
        {
          "name": "Énergie potentielle de pesanteur",
          "formula": "E_p(z) = m g z + C",
          "note": "C constante arbitraire ; m en kg, g en N/kg, z en mètres, $E_p$ en joules."
        },
        {
          "name": "Travail du poids entre deux positions",
          "formula": "W_{12}(\\vec{P}) = m g (z_1 - z_2)",
          "note": "Différence des valeurs de $E_p$ entre la position de départ et celle d’arrivée."
        }
      ],
      "workedExample": {
        "title": "L’objet de 500 g à 20 m (activité d’application 1)",
        "statement": "Un objet de masse m = 500 g est lancé vers le haut et atteint un point M d’altitude z = 20 m. Calcule son énergie potentielle de pesanteur en M par rapport au sol (g = 10 N/kg).",
        "methodSteps": [
          "Par rapport au sol, l’altitude de référence est $z_0 = 0$ : $E_p = m g (z - z_0)$.",
          "Conversion : m = 500 g = $0{,}5$ kg.",
          "Application numérique : $E_p = 0{,}5 \\times 10 \\times (20 - 0) = 100$ J."
        ],
        "conclusion": "Par rapport au sol, l’énergie potentielle de pesanteur de l’objet en M vaut 100 J."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’énergie du fait de la position",
          "stepTheme": "L’énergie du fait de la position",
          "stepBadge": "L’énergie du fait de la position",
          "paragraphText": "• Énergie potentielle de pesanteur : énergie qu’un solide possède du fait de sa position par rapport à la Terre.\nLe camion chargé qui dévale la côte de la situation d’apprentissage convertit cette énergie en vitesse.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q1",
            "type": "mcq",
            "prompt": "L’énergie potentielle de pesanteur d’un solide est l’énergie qu’il possède :",
            "options": [
              "Du fait de sa vitesse",
              "Du fait de sa position par rapport à la Terre",
              "Du fait de son allongement",
              "Du fait de sa charge électrique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition du §1.1 du document, à distinguer de l’énergie cinétique, liée à la vitesse."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’expression $E_p(z) = m g z + C$",
          "stepTheme": "L’expression $E_p(z) = m g z + C$",
          "stepBadge": "L’expression $E_p(z) = m g z + C$",
          "paragraphText": "Le travail du poids entre deux positions s’écrit comme la différence des valeurs d’une fonction de l’altitude.\nCette fonction est l’énergie potentielle de pesanteur : $E_p(z) = m g z + C$, où C est une constante arbitraire.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q2",
            "type": "mcq",
            "prompt": "L’expression de l’énergie potentielle de pesanteur d’un solide d’altitude z est :",
            "options": [
              "$E_p(z) = \\frac{1}{2} m z^2$",
              "$E_p(z) = m g z + C$",
              "$E_p(z) = \\frac{m g}{z}$",
              "$E_p(z) = m z + C$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’expression du §1.2 : elle fait intervenir la masse, l’intensité de la pesanteur, l’altitude et une constante arbitraire."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rôle de chaque grandeur",
          "stepTheme": "Le rôle de chaque grandeur",
          "stepBadge": "Le rôle de chaque grandeur",
          "paragraphText": "Le document détaille chaque symbole de l’expression.\n• m : masse du solide, en kilogrammes (kg).\n• g : intensité de la pesanteur, en newtons par kilogramme (N/kg).\n• z : altitude du centre d’inertie, en mètres (m).\n• C : constante arbitraire.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q3",
            "type": "mcq",
            "prompt": "Dans l’expression de l’énergie potentielle de pesanteur, la grandeur z représente :",
            "options": [
              "L’altitude du centre d’inertie du solide",
              "La longueur du solide",
              "La distance parcourue",
              "La profondeur du solide"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document précise que z est l’altitude du centre d’inertie, exprimée en mètres."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Le travail du poids, différence d’énergies",
          "stepTheme": "Le travail du poids, différence d’énergies",
          "stepBadge": "Le travail du poids, différence d’énergies",
          "paragraphText": "Quand le solide passe de l’altitude $z_1$ à l’altitude $z_2$, le travail de son poids vaut $W_{12}(\\vec{P}) = m g (z_1 - z_2)$.\nOn peut donc dire que ce travail est égal à la différence des valeurs prises par la fonction $E_p(z)$ entre les deux positions.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q4",
            "type": "mcq",
            "prompt": "Le travail du poids d’un solide passant de l’altitude $z_1$ à l’altitude $z_2$ vaut :",
            "options": [
              "$m g (z_2 - z_1)$",
              "$m g z_1 z_2$",
              "$m g (z_1 - z_2)$",
              "$m g (z_1 + z_2)$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document écrit $W_{12}(\\vec{P}) = m g (z_1 - z_2) = m g z_1 - m g z_2$ : positif en descente, quand $z_1$ dépasse $z_2$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "100 J par rapport au sol",
          "stepTheme": "100 J par rapport au sol",
          "stepBadge": "100 J par rapport au sol",
          "paragraphText": "Dans l’activité d’application 1, un objet de 500 g atteint un point M d’altitude 20 m.\nPar rapport au sol, la résolution du document donne une énergie potentielle de pesanteur de 100 J.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q5",
            "type": "mcq",
            "prompt": "L’énergie potentielle de pesanteur de l’objet de 500 g à 20 m d’altitude, par rapport au sol (g = 10 N/kg), vaut :",
            "options": [
              "10 J",
              "50 J",
              "200 J",
              "100 J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$E_p = 0{,}5 \\times 10 \\times 20 = 100$ J : c’est le résultat de la résolution de l’activité 1."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : plus haut, plus d’énergie potentielle",
          "stepTheme": "Piège : plus haut, plus d’énergie potentielle",
          "stepBadge": "Piège : plus haut, plus d’énergie potentielle",
          "paragraphText": "L’exercice 1 du document classe « Vrai » l’affirmation : plus un solide de masse m s’éloigne de la Terre, plus son énergie potentielle est grande.\nC’est la conséquence directe du terme $m g z$ : à masse constante, $E_p$ augmente avec l’altitude.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q6",
            "type": "mcq",
            "prompt": "Pour un solide de masse donnée, quand son altitude augmente, son énergie potentielle de pesanteur :",
            "options": [
              "Augmente",
              "Diminue",
              "Reste constante",
              "Devient nulle"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Affirmation 4 de l’exercice 1, classée Vrai : $E_p$ croît avec z."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q1",
          "type": "mcq",
          "prompt": "L’énergie potentielle de pesanteur d’un solide est l’énergie qu’il possède :",
          "options": [
            "Du fait de sa vitesse",
            "Du fait de sa position par rapport à la Terre",
            "Du fait de son allongement",
            "Du fait de sa charge électrique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition du §1.1 du document, à distinguer de l’énergie cinétique, liée à la vitesse."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q2",
          "type": "mcq",
          "prompt": "L’expression de l’énergie potentielle de pesanteur d’un solide d’altitude z est :",
          "options": [
            "$E_p(z) = \\frac{1}{2} m z^2$",
            "$E_p(z) = m g z + C$",
            "$E_p(z) = \\frac{m g}{z}$",
            "$E_p(z) = m z + C$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’expression du §1.2 : elle fait intervenir la masse, l’intensité de la pesanteur, l’altitude et une constante arbitraire."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q3",
          "type": "mcq",
          "prompt": "Dans l’expression de l’énergie potentielle de pesanteur, la grandeur z représente :",
          "options": [
            "L’altitude du centre d’inertie du solide",
            "La longueur du solide",
            "La distance parcourue",
            "La profondeur du solide"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document précise que z est l’altitude du centre d’inertie, exprimée en mètres."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q4",
          "type": "mcq",
          "prompt": "Le travail du poids d’un solide passant de l’altitude $z_1$ à l’altitude $z_2$ vaut :",
          "options": [
            "$m g (z_2 - z_1)$",
            "$m g z_1 z_2$",
            "$m g (z_1 - z_2)$",
            "$m g (z_1 + z_2)$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document écrit $W_{12}(\\vec{P}) = m g (z_1 - z_2) = m g z_1 - m g z_2$ : positif en descente, quand $z_1$ dépasse $z_2$."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q5",
          "type": "mcq",
          "prompt": "L’énergie potentielle de pesanteur de l’objet de 500 g à 20 m d’altitude, par rapport au sol (g = 10 N/kg), vaut :",
          "options": [
            "10 J",
            "50 J",
            "200 J",
            "100 J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$E_p = 0{,}5 \\times 10 \\times 20 = 100$ J : c’est le résultat de la résolution de l’activité 1."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p01_q6",
          "type": "mcq",
          "prompt": "Pour un solide de masse donnée, quand son altitude augmente, son énergie potentielle de pesanteur :",
          "options": [
            "Augmente",
            "Diminue",
            "Reste constante",
            "Devient nulle"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Affirmation 4 de l’exercice 1, classée Vrai : $E_p$ croît avec z."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02",
      "order": 2,
      "title": "L’état de référence et la constante",
      "summary": "L’énergie potentielle est définie à une constante près : elle est nulle à la position de référence d’altitude $z_0$, positive au-dessus et négative en dessous.",
      "conceptExplanation": "La position de référence est la position du solide pour laquelle l’énergie potentielle de pesanteur est considérée comme nulle ; sa cote est notée $z_0$.\nEn $z_0$, $E_p(z_0) = 0$, donc $m g z_0 + C = 0$ et $C = -m g z_0$ : l’expression de l’énergie potentielle devient $E_p(z) = m g z - m g z_0 = m g (z - z_0)$.\nRemarque du document : si l’altitude z est inférieure à $z_0$, alors $E_p(z)$ est négative ; si z est supérieure à $z_0$, alors $E_p(z)$ est positive.\nConséquence vérifiée dans l’exercice 1 : l’énergie potentielle d’un solide n’est pas définie de façon absolue, elle dépend du choix de l’état de référence.",
      "keyRule": "Choisir d’abord la référence $z_0$ : $E_p(z) = m g (z - z_0)$, nulle en $z_0$, négative en dessous.",
      "formulas": [
        {
          "name": "Constante liée à la référence",
          "formula": "C = -m g z_0",
          "note": "Obtenue en écrivant que $E_p(z_0) = 0$."
        },
        {
          "name": "Énergie potentielle avec référence",
          "formula": "E_p(z) = m g (z - z_0)",
          "note": "Positive si z dépasse $z_0$, négative si z est en dessous de $z_0$."
        }
      ],
      "workedExample": {
        "title": "Le même point M, trois références (activité d’application 1)",
        "statement": "Pour l’objet de 500 g au point M d’altitude 20 m, calcule son énergie potentielle de pesanteur par rapport au point M lui-même, par rapport au sol, et par rapport au fond d’un puits de profondeur 10 m.",
        "methodSteps": [
          "Par rapport à M : z égale $z_0$, donc $E_p = m g (z - z_0) = 0$ J.",
          "Par rapport au sol : $E_p = 0{,}5 \\times 10 \\times (20 - 0) = 100$ J.",
          "Par rapport au fond du puits, situé à l’altitude $-10$ m : $E_p = 0{,}5 \\times 10 \\times (20 - (-10)) = 150$ J."
        ],
        "conclusion": "Le même objet au même point a trois énergies potentielles différentes (0 J, 100 J, 150 J) selon la référence choisie."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La position de référence",
          "stepTheme": "La position de référence",
          "stepBadge": "La position de référence",
          "paragraphText": "• Position de référence : position du solide pour laquelle l’énergie potentielle de pesanteur est considérée comme nulle.\nSa cote est notée $z_0$, et c’est le choix de cette position qui fixe la constante C.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q1",
            "type": "mcq",
            "prompt": "La position de référence d’un solide est la position pour laquelle :",
            "options": [
              "Son énergie cinétique est nulle",
              "Son énergie potentielle de pesanteur est considérée comme nulle",
              "Sa masse est nulle",
              "Sa vitesse est maximale"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la définition du §1.3 du document ; la cote de cette position est notée $z_0$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Déterminer la constante C",
          "stepTheme": "Déterminer la constante C",
          "stepBadge": "Déterminer la constante C",
          "paragraphText": "En écrivant qu’en $z_0$ l’énergie potentielle est nulle, on obtient $m g z_0 + C = 0$.\nOn en déduit $C = -m g z_0$, puis l’expression simplifiée $E_p(z) = m g (z - z_0)$.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q2",
            "type": "mcq",
            "prompt": "La constante C de l’expression $E_p(z) = m g z + C$ vaut, pour une référence d’altitude $z_0$ :",
            "options": [
              "$C = m g z_0$",
              "$C = 0$ dans tous les cas",
              "$C = -m g z_0$",
              "$C = -z_0$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La condition $E_p(z_0) = 0$ impose $C = -m g z_0$, comme le montre le document."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le signe de l’énergie potentielle",
          "stepTheme": "Le signe de l’énergie potentielle",
          "stepBadge": "Le signe de l’énergie potentielle",
          "paragraphText": "La remarque du document fixe le signe de l’énergie potentielle selon la position.\n• Si l’altitude z est inférieure à $z_0$, alors $E_p(z)$ est négative.\n• Si l’altitude z est supérieure à $z_0$, alors $E_p(z)$ est positive.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q3",
            "type": "mcq",
            "prompt": "Un solide situé en dessous de la position de référence (z inférieure à $z_0$) a une énergie potentielle de pesanteur :",
            "options": [
              "Positive",
              "Nulle",
              "Infinie",
              "Négative"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la remarque du §1.3 : $E_p(z) = m g (z - z_0)$ est négative quand z est en dessous de $z_0$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "150 J par rapport au fond du puits",
          "stepTheme": "150 J par rapport au fond du puits",
          "stepBadge": "150 J par rapport au fond du puits",
          "paragraphText": "L’activité 1 place la référence au fond d’un puits de profondeur 10 m, donc à l’altitude $-10$ m par rapport au sol.\nL’objet de 500 g, à l’altitude 20 m, a alors une énergie potentielle de 150 J.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q4",
            "type": "mcq",
            "prompt": "Par rapport au fond d’un puits de profondeur 10 m, l’énergie potentielle de l’objet de 500 g à 20 m d’altitude vaut :",
            "options": [
              "150 J",
              "100 J",
              "50 J",
              "0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_p = 0{,}5 \\times 10 \\times (20 - (-10)) = 150$ J : la référence plus basse augmente la valeur."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : l’énergie potentielle n’est pas absolue",
          "stepTheme": "Piège : l’énergie potentielle n’est pas absolue",
          "stepBadge": "Piège : l’énergie potentielle n’est pas absolue",
          "paragraphText": "L’exercice 1 classe « Faux » l’affirmation « l’énergie potentielle d’un solide est définie de façon absolue ».\nLe même objet au même point vaut 0 J, 100 J ou 150 J selon la référence : il faut toujours annoncer la référence utilisée.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q5",
            "type": "mcq",
            "prompt": "L’affirmation « l’énergie potentielle d’un solide est définie de façon absolue » est :",
            "options": [
              "Vraie",
              "Fausse : elle dépend de l’état de référence choisi",
              "Vraie seulement pour un solide au repos",
              "Fausse car elle dépend de la vitesse"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la réponse 1 de l’exercice 1 ; l’activité 1 le montre avec trois valeurs différentes pour le même point."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Zéro par rapport au point lui-même",
          "stepTheme": "Zéro par rapport au point lui-même",
          "stepBadge": "Zéro par rapport au point lui-même",
          "paragraphText": "Si la référence est le point M lui-même, alors l’altitude du point égale celle de la référence.\nLa résolution de l’activité 1 donne donc $E_p = m g (z - z_0) = 0$ J, car la différence d’altitude est nulle.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q6",
            "type": "mcq",
            "prompt": "L’énergie potentielle de l’objet calculée par rapport au point M où il se trouve vaut :",
            "options": [
              "100 J",
              "150 J",
              "0 J",
              "20 J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Quand z égale $z_0$, la différence est nulle : $E_p = 0$ J, comme dans la résolution de l’activité 1."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q1",
          "type": "mcq",
          "prompt": "La position de référence d’un solide est la position pour laquelle :",
          "options": [
            "Son énergie cinétique est nulle",
            "Son énergie potentielle de pesanteur est considérée comme nulle",
            "Sa masse est nulle",
            "Sa vitesse est maximale"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la définition du §1.3 du document ; la cote de cette position est notée $z_0$."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q2",
          "type": "mcq",
          "prompt": "La constante C de l’expression $E_p(z) = m g z + C$ vaut, pour une référence d’altitude $z_0$ :",
          "options": [
            "$C = m g z_0$",
            "$C = 0$ dans tous les cas",
            "$C = -m g z_0$",
            "$C = -z_0$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La condition $E_p(z_0) = 0$ impose $C = -m g z_0$, comme le montre le document."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q3",
          "type": "mcq",
          "prompt": "Un solide situé en dessous de la position de référence (z inférieure à $z_0$) a une énergie potentielle de pesanteur :",
          "options": [
            "Positive",
            "Nulle",
            "Infinie",
            "Négative"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la remarque du §1.3 : $E_p(z) = m g (z - z_0)$ est négative quand z est en dessous de $z_0$."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q4",
          "type": "mcq",
          "prompt": "Par rapport au fond d’un puits de profondeur 10 m, l’énergie potentielle de l’objet de 500 g à 20 m d’altitude vaut :",
          "options": [
            "150 J",
            "100 J",
            "50 J",
            "0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_p = 0{,}5 \\times 10 \\times (20 - (-10)) = 150$ J : la référence plus basse augmente la valeur."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q5",
          "type": "mcq",
          "prompt": "L’affirmation « l’énergie potentielle d’un solide est définie de façon absolue » est :",
          "options": [
            "Vraie",
            "Fausse : elle dépend de l’état de référence choisi",
            "Vraie seulement pour un solide au repos",
            "Fausse car elle dépend de la vitesse"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la réponse 1 de l’exercice 1 ; l’activité 1 le montre avec trois valeurs différentes pour le même point."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p02_q6",
          "type": "mcq",
          "prompt": "L’énergie potentielle de l’objet calculée par rapport au point M où il se trouve vaut :",
          "options": [
            "100 J",
            "150 J",
            "0 J",
            "20 J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Quand z égale $z_0$, la différence est nulle : $E_p = 0$ J, comme dans la résolution de l’activité 1."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03",
      "order": 3,
      "title": "Variation de l’énergie potentielle et travail du poids",
      "summary": "La variation de l’énergie potentielle de pesanteur vaut $\\Delta E_p = m g \\Delta z$, c’est-à-dire l’opposé du travail du poids, et elle ne dépend pas du choix de la référence.",
      "conceptExplanation": "Entre deux positions d’altitudes $z_1$ et $z_2$, la variation de l’énergie potentielle s’écrit $\\Delta E_p = E_{p2} - E_{p1} = m g (z_2 - z_1) = m g \\Delta z$ : la constante C disparaît dans la différence.\nOn en déduit la relation fondamentale $\\Delta E_p = -W(\\vec{P})$ : la variation de l’énergie potentielle de pesanteur est l’opposé du travail du poids.\nL’exercice 1 confirme que la variation d’énergie potentielle d’un système ne dépend jamais du choix de l’état de référence, et la situation d’évaluation le vérifie sur un plan incliné : pour un palet qui monte, $\\Delta E_p$ est positive et la somme des travaux des forces extérieures est son opposée.",
      "keyRule": "$\\Delta E_p = m g \\Delta z = -W(\\vec{P})$ : la variation ne dépend que des altitudes de départ et d’arrivée, jamais de la référence.",
      "formulas": [
        {
          "name": "Variation de l’énergie potentielle de pesanteur",
          "formula": "\\Delta E_p = m g \\Delta z",
          "note": "$\\Delta z = z_2 - z_1$, variation de l’altitude."
        },
        {
          "name": "Lien avec le travail du poids",
          "formula": "\\Delta E_p = -W(\\vec{P})",
          "note": "Relation vérifiée dans l’activité 1 et la situation d’évaluation."
        }
      ],
      "workedExample": {
        "title": "Le palet sur le plan incliné (situation d’évaluation)",
        "statement": "Un palet de masse m = 500 g est lancé vers le haut le long d’un plan incliné d’un angle de 15° ; il parcourt L = 1,5 m depuis le point $M_0$, pris comme niveau de référence, jusqu’au point $M_1$ (g = 9,8 N/kg). Détermine la variation de son énergie potentielle de pesanteur.",
        "methodSteps": [
          "Au point $M_0$ : $E_p(M_0) = m g (z_0 - z_0) = 0$ J.",
          "Au point $M_1$ : $E_p(M_1) = m g L \\sin\\alpha$, car le palet s’est élevé de $L \\sin\\alpha$.",
          "Variation : $\\Delta E_p = m g L \\sin\\alpha = 0{,}5 \\times 9{,}8 \\times 1{,}5 \\times \\sin 15° \\approx 1{,}9$ J.",
          "La somme des travaux des forces extérieures, sans frottements, vaut $-1{,}9$ J : $\\Delta E_p$ en est l’opposé."
        ],
        "conclusion": "La variation vaut environ 1,9 J et $\\Delta E_p$ est l’opposé de la somme des travaux, comme dans la résolution du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La variation $\\Delta E_p$",
          "stepTheme": "La variation $\\Delta E_p$",
          "stepBadge": "La variation $\\Delta E_p$",
          "paragraphText": "• Variation de l’énergie potentielle : différence entre l’énergie potentielle finale et l’énergie potentielle initiale, $\\Delta E_p = E_{p2} - E_{p1}$.\nDans cette différence, la constante C s’élimine : il ne reste que les altitudes.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q1",
            "type": "mcq",
            "prompt": "La variation de l’énergie potentielle de pesanteur entre deux positions vaut :",
            "options": [
              "$\\Delta E_p = m g (z_2 - z_1)$",
              "$\\Delta E_p = m g (z_2 + z_1)$",
              "$\\Delta E_p = m g z_2 z_1$",
              "$\\Delta E_p = C (z_2 - z_1)$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le document écrit $\\Delta E_p = m g \\Delta z$ avec $\\Delta z = z_2 - z_1$ : la constante disparaît."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’opposé du travail du poids",
          "stepTheme": "L’opposé du travail du poids",
          "stepBadge": "L’opposé du travail du poids",
          "paragraphText": "La relation centrale du paragraphe est $\\Delta E_p = -W(\\vec{P})$.\nQuand le solide monte, le travail du poids est négatif et l’énergie potentielle augmente ; quand il descend, c’est l’inverse.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q2",
            "type": "mcq",
            "prompt": "La variation de l’énergie potentielle de pesanteur est égale :",
            "options": [
              "Au travail du poids",
              "À l’opposé du travail du poids",
              "Au double du travail du poids",
              "Au travail de la réaction du support"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la relation $\\Delta E_p = -W(\\vec{P})$ du §1.4, conclue aussi dans l’activité 1."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "L’activité 1 : 100 J contre −100 J",
          "stepTheme": "L’activité 1 : 100 J contre −100 J",
          "stepBadge": "L’activité 1 : 100 J contre −100 J",
          "paragraphText": "Pour l’objet de 500 g qui s’élève de 20 m par rapport au sol, la résolution calcule une variation d’énergie potentielle de 100 J.\nLe travail du poids sur le même trajet vaut $-100$ J : la conclusion du document est $\\Delta E_p = -W(\\vec{P})$.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q3",
            "type": "mcq",
            "prompt": "Dans l’activité 1, pendant la montée de l’objet de 20 m, le travail du poids vaut :",
            "options": [
              "100 J",
              "0 J",
              "$-100$ J",
              "150 J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La résolution donne $W(\\vec{P}) = m g (0 - z) = -100$ J, opposé de la variation d’énergie potentielle."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Une variation indépendante de la référence",
          "stepTheme": "Une variation indépendante de la référence",
          "stepBadge": "Une variation indépendante de la référence",
          "paragraphText": "L’exercice 1 classe « Vrai » l’affirmation : la variation d’énergie potentielle d’un système ne dépend jamais du choix de l’état de référence.\nSeules les valeurs de $E_p$ dépendent de la référence ; leur différence reste la même, comme le montre l’exercice du mont Nimba.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q4",
            "type": "mcq",
            "prompt": "La variation d’énergie potentielle de pesanteur entre deux positions dépend :",
            "options": [
              "Du choix de l’état de référence",
              "Uniquement de la référence au sol",
              "De la trajectoire suivie",
              "Des altitudes des deux positions, pas de la référence"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Réponse 5 de l’exercice 1 (Vrai) : la constante s’élimine dans la différence, la variation est donc indépendante de la référence."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Piège : l’énergie potentielle n’est pas forcément constante",
          "stepTheme": "Piège : l’énergie potentielle n’est pas forcément constante",
          "stepBadge": "Piège : l’énergie potentielle n’est pas forcément constante",
          "paragraphText": "L’exercice 1 classe « Faux » l’affirmation « l’énergie potentielle d’un système est constante au cours du temps ».\nDès que l’altitude du solide change, son énergie potentielle de pesanteur change aussi.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q5",
            "type": "mcq",
            "prompt": "L’affirmation « l’énergie potentielle d’un système est constante au cours du temps » est :",
            "options": [
              "Fausse : elle varie dès que l’altitude varie",
              "Vraie",
              "Vraie seulement en chute libre",
              "Fausse car elle dépend de la vitesse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la réponse 2 de l’exercice 1 : un solide qui monte ou qui descend voit son $E_p$ changer."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Le palet : une variation de 1,9 J",
          "stepTheme": "Le palet : une variation de 1,9 J",
          "stepBadge": "Le palet : une variation de 1,9 J",
          "paragraphText": "Dans la situation d’évaluation, le palet de 500 g parcourt 1,5 m sur un plan incliné à 15°.\nSa variation d’énergie potentielle de pesanteur vaut environ 1,9 J, et la somme des travaux des forces extérieures vaut $-1{,}9$ J.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q6",
            "type": "mcq",
            "prompt": "La variation d’énergie potentielle du palet entre $M_0$ et $M_1$ vaut environ :",
            "options": [
              "$7{,}35$ J",
              "$1{,}9$ J",
              "$0{,}5$ J",
              "$-1{,}9$ J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$\\Delta E_p = m g L \\sin 15° \\approx 1{,}9$ J, positive car le palet monte ; la somme des travaux vaut son opposé."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q1",
          "type": "mcq",
          "prompt": "La variation de l’énergie potentielle de pesanteur entre deux positions vaut :",
          "options": [
            "$\\Delta E_p = m g (z_2 - z_1)$",
            "$\\Delta E_p = m g (z_2 + z_1)$",
            "$\\Delta E_p = m g z_2 z_1$",
            "$\\Delta E_p = C (z_2 - z_1)$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le document écrit $\\Delta E_p = m g \\Delta z$ avec $\\Delta z = z_2 - z_1$ : la constante disparaît."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q2",
          "type": "mcq",
          "prompt": "La variation de l’énergie potentielle de pesanteur est égale :",
          "options": [
            "Au travail du poids",
            "À l’opposé du travail du poids",
            "Au double du travail du poids",
            "Au travail de la réaction du support"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la relation $\\Delta E_p = -W(\\vec{P})$ du §1.4, conclue aussi dans l’activité 1."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q3",
          "type": "mcq",
          "prompt": "Dans l’activité 1, pendant la montée de l’objet de 20 m, le travail du poids vaut :",
          "options": [
            "100 J",
            "0 J",
            "$-100$ J",
            "150 J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La résolution donne $W(\\vec{P}) = m g (0 - z) = -100$ J, opposé de la variation d’énergie potentielle."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q4",
          "type": "mcq",
          "prompt": "La variation d’énergie potentielle de pesanteur entre deux positions dépend :",
          "options": [
            "Du choix de l’état de référence",
            "Uniquement de la référence au sol",
            "De la trajectoire suivie",
            "Des altitudes des deux positions, pas de la référence"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Réponse 5 de l’exercice 1 (Vrai) : la constante s’élimine dans la différence, la variation est donc indépendante de la référence."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q5",
          "type": "mcq",
          "prompt": "L’affirmation « l’énergie potentielle d’un système est constante au cours du temps » est :",
          "options": [
            "Fausse : elle varie dès que l’altitude varie",
            "Vraie",
            "Vraie seulement en chute libre",
            "Fausse car elle dépend de la vitesse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la réponse 2 de l’exercice 1 : un solide qui monte ou qui descend voit son $E_p$ changer."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p03_q6",
          "type": "mcq",
          "prompt": "La variation d’énergie potentielle du palet entre $M_0$ et $M_1$ vaut environ :",
          "options": [
            "$7{,}35$ J",
            "$1{,}9$ J",
            "$0{,}5$ J",
            "$-1{,}9$ J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$\\Delta E_p = m g L \\sin 15° \\approx 1{,}9$ J, positive car le palet monte ; la somme des travaux vaut son opposé."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04",
      "order": 4,
      "title": "Énergie potentielle élastique d’un ressort",
      "summary": "Un ressort de raideur k possède, du fait de sa déformation x, une énergie potentielle élastique $E_{pe} = \\frac{1}{2} k x^2$, dont la variation est l’opposé du travail de la tension (partie signalée pour les 1ères C-E dans le document).",
      "conceptExplanation": "Un solide accroché à un ressort de raideur k constitue un pendule élastique : si on tire le solide puis qu’on le lâche, il se déplace sans frottement sur le plan horizontal.\nL’énergie potentielle élastique d’un ressort de raideur k est l’énergie que possède ce ressort du fait de son allongement x ; son expression est $E_{pe} = \\frac{1}{2} k x^2$.\nIci, x est la déformation (allongement ou raccourcissement) du ressort en mètres, k la raideur en newtons par mètre (N/m) et $E_{pe}$ s’exprime en joules ; l’énergie potentielle élastique est considérée nulle dans la position d’équilibre, pour x nul.\nEntre deux positions d’abscisses $x_1$ et $x_2$, la variation d’énergie potentielle élastique est l’opposé du travail de la tension du ressort : $\\Delta E_{pe} = -W_{AB}(\\vec{T})$.",
      "keyRule": "$E_{pe} = \\frac{1}{2} k x^2$, nulle à l’équilibre ; sa variation est l’opposé du travail de la tension du ressort.",
      "formulas": [
        {
          "name": "Énergie potentielle élastique",
          "formula": "E_{pe} = \\frac{1}{2} k x^2",
          "note": "x déformation en mètres, k raideur en N/m, $E_{pe}$ en joules."
        },
        {
          "name": "Variation de l’énergie potentielle élastique",
          "formula": "\\Delta E_{pe} = -W_{AB}(\\vec{T})",
          "note": "Même structure que pour le poids : variation opposée au travail de la force."
        }
      ],
      "workedExample": {
        "title": "Le ressort comprimé de l’activité d’application 2",
        "statement": "Un ressort de longueur à vide 20 cm, de raideur k = 20 N/m, est comprimé à la moitié de sa longueur. Calcule l’énergie potentielle élastique qu’il possède.",
        "methodSteps": [
          "Comprimé à la moitié de 20 cm, le ressort mesure 10 cm : sa déformation vaut donc x = $0{,}1$ m.",
          "Expression : $E_{pe} = \\frac{1}{2} k x^2$.",
          "Application numérique : $E_{pe} = \\frac{1}{2} \\times 20 \\times (0{,}1)^2 = 0{,}1$ J.",
          "Pendant cette compression, la variation d’énergie vaut $0{,}1$ J et le travail de la tension vaut $-0{,}1$ J : ils sont opposés."
        ],
        "conclusion": "Le ressort comprimé stocke $0{,}1$ J d’énergie potentielle élastique, comme dans la résolution du document."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L’énergie du fait de la déformation",
          "stepTheme": "L’énergie du fait de la déformation",
          "stepBadge": "L’énergie du fait de la déformation",
          "paragraphText": "• Énergie potentielle élastique : énergie que possède un ressort du fait de son allongement x.\nLe dispositif du document est un pendule élastique : un solide accroché à un ressort, tiré puis lâché, qui se déplace sans frottement sur un plan horizontal.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q1",
            "type": "mcq",
            "prompt": "L’énergie potentielle élastique d’un ressort est l’énergie qu’il possède du fait :",
            "options": [
              "De sa déformation (allongement ou raccourcissement)",
              "De sa position par rapport à la Terre",
              "De sa vitesse",
              "De sa masse"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C’est la définition du §2.1 du document : elle dépend de la déformation x du ressort."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L’expression $E_{pe} = \\frac{1}{2} k x^2$",
          "stepTheme": "L’expression $E_{pe} = \\frac{1}{2} k x^2$",
          "stepBadge": "L’expression $E_{pe} = \\frac{1}{2} k x^2$",
          "paragraphText": "L’expression de l’énergie potentielle élastique fait intervenir la raideur k du ressort et le carré de sa déformation.\nElle s’écrit $E_{pe} = \\frac{1}{2} k x^2$, avec x en mètres, k en newtons par mètre et $E_{pe}$ en joules.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q2",
            "type": "mcq",
            "prompt": "L’énergie potentielle élastique d’un ressort de raideur k déformé de x vaut :",
            "options": [
              "$E_{pe} = k x$",
              "$E_{pe} = \\frac{1}{2} k x^2$",
              "$E_{pe} = \\frac{1}{2} k x$",
              "$E_{pe} = k x^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est l’expression du §2.1 : le facteur un demi et le carré de la déformation sont indispensables."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Nulle dans la position d’équilibre",
          "stepTheme": "Nulle dans la position d’équilibre",
          "stepBadge": "Nulle dans la position d’équilibre",
          "paragraphText": "Le document précise que l’énergie potentielle élastique est considérée nulle dans la position d’équilibre.\nCela correspond à une déformation x nulle : le ressort est alors à sa longueur à vide, ni allongé ni raccourci.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q3",
            "type": "mcq",
            "prompt": "L’énergie potentielle élastique d’un ressort est considérée nulle :",
            "options": [
              "Quand il est comprimé au maximum",
              "Quand il est allongé au maximum",
              "Dans la position d’équilibre, pour une déformation nulle",
              "Quand sa raideur est nulle"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Le document fixe la référence élastique à x nul, la position d’équilibre."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La variation, opposée au travail de la tension",
          "stepTheme": "La variation, opposée au travail de la tension",
          "stepBadge": "La variation, opposée au travail de la tension",
          "paragraphText": "Entre deux positions d’abscisses $x_1$ et $x_2$, la variation d’énergie potentielle élastique s’écrit à partir des deux énergies.\nLe document montre qu’elle est égale à l’opposé du travail de la tension du ressort entre ces positions.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q4",
            "type": "mcq",
            "prompt": "La variation de l’énergie potentielle élastique d’un ressort entre deux positions est égale :",
            "options": [
              "Au travail de la tension du ressort",
              "Au travail du poids du ressort",
              "Au double du travail de la tension",
              "À l’opposé du travail de la tension du ressort"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C’est la conclusion du §2.2 : $\\Delta E_{pe} = -W_{AB}(\\vec{T})$, comme $\\Delta E_p = -W(\\vec{P})$ pour le poids."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le ressort comprimé : 0,1 J",
          "stepTheme": "Le ressort comprimé : 0,1 J",
          "stepBadge": "Le ressort comprimé : 0,1 J",
          "paragraphText": "L’activité 2 comprime à moitié un ressort de longueur à vide 20 cm et de raideur 20 N/m, soit une déformation de $0{,}1$ m.\nLa résolution obtient une énergie potentielle élastique de $0{,}1$ J.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q5",
            "type": "mcq",
            "prompt": "L’énergie potentielle élastique du ressort de l’activité 2 (k = 20 N/m, déformation $0{,}1$ m) vaut :",
            "options": [
              "$0{,}1$ J",
              "$0{,}2$ J",
              "$1$ J",
              "$2$ J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "$E_{pe} = \\frac{1}{2} \\times 20 \\times (0{,}1)^2 = 0{,}1$ J : c’est le résultat de la résolution."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : la déformation n’est pas la longueur du ressort",
          "stepTheme": "Piège : la déformation n’est pas la longueur du ressort",
          "stepBadge": "Piège : la déformation n’est pas la longueur du ressort",
          "paragraphText": "Dans l’activité 2, le ressort comprimé mesure 10 cm, mais la déformation x est l’écart avec la longueur à vide de 20 cm.\nElle vaut donc $0{,}1$ m : utiliser la longueur totale du ressort dans la formule donnerait un résultat faux.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q6",
            "type": "mcq",
            "prompt": "Pour le ressort de longueur à vide 20 cm comprimé jusqu’à mesurer 10 cm, la déformation x à utiliser dans la formule vaut :",
            "options": [
              "20 cm",
              "$0{,}1$ m",
              "30 cm",
              "10 cm convertis en $0{,}01$ m"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La déformation est l’écart entre la longueur actuelle et la longueur à vide : 20 cm moins 10 cm, soit $0{,}1$ m."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q1",
          "type": "mcq",
          "prompt": "L’énergie potentielle élastique d’un ressort est l’énergie qu’il possède du fait :",
          "options": [
            "De sa déformation (allongement ou raccourcissement)",
            "De sa position par rapport à la Terre",
            "De sa vitesse",
            "De sa masse"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C’est la définition du §2.1 du document : elle dépend de la déformation x du ressort."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q2",
          "type": "mcq",
          "prompt": "L’énergie potentielle élastique d’un ressort de raideur k déformé de x vaut :",
          "options": [
            "$E_{pe} = k x$",
            "$E_{pe} = \\frac{1}{2} k x^2$",
            "$E_{pe} = \\frac{1}{2} k x$",
            "$E_{pe} = k x^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est l’expression du §2.1 : le facteur un demi et le carré de la déformation sont indispensables."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q3",
          "type": "mcq",
          "prompt": "L’énergie potentielle élastique d’un ressort est considérée nulle :",
          "options": [
            "Quand il est comprimé au maximum",
            "Quand il est allongé au maximum",
            "Dans la position d’équilibre, pour une déformation nulle",
            "Quand sa raideur est nulle"
          ],
          "correctAnswerIndex": 2,
          "explanation": "Le document fixe la référence élastique à x nul, la position d’équilibre."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q4",
          "type": "mcq",
          "prompt": "La variation de l’énergie potentielle élastique d’un ressort entre deux positions est égale :",
          "options": [
            "Au travail de la tension du ressort",
            "Au travail du poids du ressort",
            "Au double du travail de la tension",
            "À l’opposé du travail de la tension du ressort"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C’est la conclusion du §2.2 : $\\Delta E_{pe} = -W_{AB}(\\vec{T})$, comme $\\Delta E_p = -W(\\vec{P})$ pour le poids."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q5",
          "type": "mcq",
          "prompt": "L’énergie potentielle élastique du ressort de l’activité 2 (k = 20 N/m, déformation $0{,}1$ m) vaut :",
          "options": [
            "$0{,}1$ J",
            "$0{,}2$ J",
            "$1$ J",
            "$2$ J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "$E_{pe} = \\frac{1}{2} \\times 20 \\times (0{,}1)^2 = 0{,}1$ J : c’est le résultat de la résolution."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p04_q6",
          "type": "mcq",
          "prompt": "Pour le ressort de longueur à vide 20 cm comprimé jusqu’à mesurer 10 cm, la déformation x à utiliser dans la formule vaut :",
          "options": [
            "20 cm",
            "$0{,}1$ m",
            "30 cm",
            "10 cm convertis en $0{,}01$ m"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La déformation est l’écart entre la longueur actuelle et la longueur à vide : 20 cm moins 10 cm, soit $0{,}1$ m."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05",
      "order": 5,
      "title": "Applications : références différentes, même variation",
      "summary": "Les exercices du document (mont Nimba, pendule, pompe) montrent que changer de référence change les valeurs de $E_p$ mais jamais sa variation entre deux positions.",
      "conceptExplanation": "Dans l’exercice 4, un touriste de masse m = 80 kg escalade le mont Nimba en passant par des stations situées à 500 m, 850 m et 1 500 m d’altitude (g = 10 N/kg).\nAvec le sol comme référence, ses énergies potentielles valent successivement $4 \\times 10^{5}$ J, $6{,}8 \\times 10^{5}$ J et $1{,}2 \\times 10^{6}$ J ; avec la seconde station comme nouvelle référence, elles deviennent $-2{,}8 \\times 10^{5}$ J, 0 J et $5{,}2 \\times 10^{5}$ J.\nDans les deux cas, la variation entre le sol et le sommet reste égale à $1{,}2 \\times 10^{6}$ J : changer de référence décale toutes les valeurs de la même quantité.\nL’exercice 5 du document, sur un pendule écarté de 30°, illustre le même calcul $E_p = m g (z - z_0)$ avec une hauteur obtenue par la géométrie du fil.",
      "keyRule": "Changer de référence décale toutes les énergies potentielles de la même quantité : les variations, elles, ne changent pas.",
      "formulas": [
        {
          "name": "Variation entre le sol et le sommet (exercice 4)",
          "formula": "\\Delta E_p = m g (z_{sommet} - z_{sol})",
          "note": "Indépendante de la référence : elle vaut $1{,}2 \\times 10^{6}$ J dans l’exercice 4."
        }
      ],
      "workedExample": {
        "title": "Le touriste du mont Nimba (exercice 4)",
        "statement": "Un touriste de masse m = 80 kg monte du sol (altitude 0) au sommet du mont Nimba situé à 1 500 m en passant par des stations à 500 m et 850 m (g = 10 N/kg). Détermine la variation de son énergie potentielle de pesanteur entre le sol et le sommet, avec le sol comme référence puis avec la station à 850 m comme référence.",
        "methodSteps": [
          "Référence au sol : au sommet, $E_p = 80 \\times 10 \\times 1500 = 1{,}2 \\times 10^{6}$ J, et au sol $E_p = 0$ J, donc la variation vaut $1{,}2 \\times 10^{6}$ J.",
          "Référence à la station de 850 m : au sommet, $E_p = 80 \\times 10 \\times (1500 - 850) = 5{,}2 \\times 10^{5}$ J.",
          "Avec cette référence, au sol : $E_p = 80 \\times 10 \\times (0 - 850) = -6{,}8 \\times 10^{5}$ J.",
          "Variation : $5{,}2 \\times 10^{5} - (-6{,}8 \\times 10^{5}) = 1{,}2 \\times 10^{6}$ J, exactement la même."
        ],
        "conclusion": "La variation entre le sol et le sommet vaut $1{,}2 \\times 10^{6}$ J quelle que soit la référence : c’est la conclusion de l’exercice 4."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Changer d’état de référence",
          "stepTheme": "Changer d’état de référence",
          "stepBadge": "Changer d’état de référence",
          "paragraphText": "• Changer d’état de référence : choisir une autre position où l’énergie potentielle est comptée comme nulle.\nL’exercice 4 le fait deux fois : d’abord le sol, puis le niveau de la seconde station du mont Nimba.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q1",
            "type": "mcq",
            "prompt": "Dans l’exercice 4, le second état de référence choisi pour l’énergie potentielle est :",
            "options": [
              "Le sommet du mont Nimba",
              "Le niveau de la seconde station",
              "Le niveau de la mer",
              "Le centre de la Terre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La question 2 de l’exercice 4 prend le niveau de la seconde station comme nouvel état de référence."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "exemple",
          "stepTitle": "Les stations du mont Nimba, référence au sol",
          "stepTheme": "Les stations du mont Nimba, référence au sol",
          "stepBadge": "Les stations du mont Nimba, référence au sol",
          "paragraphText": "Avec le sol comme référence, la résolution de l’exercice 4 donne les énergies du touriste de 80 kg aux trois stations.\nElles valent $4 \\times 10^{5}$ J à 500 m, $6{,}8 \\times 10^{5}$ J à 850 m et $1{,}2 \\times 10^{6}$ J à 1 500 m.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q2",
            "type": "mcq",
            "prompt": "Avec le sol comme référence, l’énergie potentielle du touriste au sommet (1 500 m) vaut :",
            "options": [
              "$4 \\times 10^{5}$ J",
              "$6{,}8 \\times 10^{5}$ J",
              "$1{,}2 \\times 10^{6}$ J",
              "$5{,}2 \\times 10^{5}$ J"
            ],
            "correctAnswerIndex": 2,
            "explanation": "$E_p = 80 \\times 10 \\times 1500 = 1{,}2 \\times 10^{6}$ J : c’est la valeur $E_{p3}$ de la résolution."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Des valeurs négatives sous la nouvelle référence",
          "stepTheme": "Des valeurs négatives sous la nouvelle référence",
          "stepBadge": "Des valeurs négatives sous la nouvelle référence",
          "paragraphText": "Avec la seconde station (850 m) comme référence, la première station, située en dessous, a une énergie potentielle négative.\nLa résolution donne $-2{,}8 \\times 10^{5}$ J à 500 m et 0 J à la station de référence elle-même.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q3",
            "type": "mcq",
            "prompt": "Avec la station de 850 m comme référence, l’énergie potentielle du touriste à la station de 500 m vaut :",
            "options": [
              "$4 \\times 10^{5}$ J",
              "0 J",
              "$2{,}8 \\times 10^{5}$ J",
              "$-2{,}8 \\times 10^{5}$ J"
            ],
            "correctAnswerIndex": 3,
            "explanation": "$E_p = 80 \\times 10 \\times (500 - 850) = -2{,}8 \\times 10^{5}$ J : négative car la station est sous la référence."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La variation reste de 1,2 million de joules",
          "stepTheme": "La variation reste de 1,2 million de joules",
          "stepBadge": "La variation reste de 1,2 million de joules",
          "paragraphText": "Malgré le changement de référence et des valeurs toutes décalées, la variation entre le sol et le sommet ne change pas.\nElle vaut $1{,}2 \\times 10^{6}$ J dans les deux calculs de l’exercice 4.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q4",
            "type": "mcq",
            "prompt": "La variation d’énergie potentielle du touriste entre le sol et le sommet vaut, quelle que soit la référence :",
            "options": [
              "$1{,}2 \\times 10^{6}$ J",
              "$5{,}2 \\times 10^{5}$ J",
              "$6{,}8 \\times 10^{5}$ J",
              "0 J"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Les deux parties de l’exercice 4 aboutissent à la même variation : $1{,}2 \\times 10^{6}$ J."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le pendule de l’exercice 5",
          "stepTheme": "Le pendule de l’exercice 5",
          "stepBadge": "Le pendule de l’exercice 5",
          "paragraphText": "L’exercice 5 écarte de 30° un pendule formé d’une sphère de 200 g suspendue à un fil de 90 cm, lâchée sans vitesse initiale.\nAvec la position verticale comme origine des énergies potentielles, la résolution obtient au départ une énergie potentielle de $0{,}2412$ J, hauteur calculée grâce au facteur $(1 - \\cos 30°)$.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q5",
            "type": "mcq",
            "prompt": "L’énergie potentielle de pesanteur de la sphère du pendule au départ du mouvement vaut :",
            "options": [
              "$0{,}18$ J",
              "$0{,}2412$ J",
              "$1{,}8$ J",
              "0 J"
            ],
            "correctAnswerIndex": 1,
            "explanation": "$E_p = m g L (1 - \\cos 30°) = 0{,}2 \\times 10 \\times 0{,}9 \\times (1 - 0{,}866) \\approx 0{,}2412$ J."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Piège : les forces de frottement ne sont pas conservatives",
          "stepTheme": "Piège : les forces de frottement ne sont pas conservatives",
          "stepBadge": "Piège : les forces de frottement ne sont pas conservatives",
          "paragraphText": "L’exercice 1 classe « Vrai » l’affirmation : les forces de frottement sont des forces non conservatrices.\nContrairement au poids, leur travail dépend du chemin suivi et on ne peut pas leur associer une énergie potentielle de la même façon.",
          "exercise": {
            "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q6",
            "type": "mcq",
            "prompt": "D’après l’exercice 1, les forces de frottement sont des forces :",
            "options": [
              "Conservatives",
              "Non conservatrices",
              "Toujours nulles",
              "Égales au poids"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C’est la réponse 3 de l’exercice 1 (Vrai) : les frottements sont des forces non conservatrices."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q1",
          "type": "mcq",
          "prompt": "Dans l’exercice 4, le second état de référence choisi pour l’énergie potentielle est :",
          "options": [
            "Le sommet du mont Nimba",
            "Le niveau de la seconde station",
            "Le niveau de la mer",
            "Le centre de la Terre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La question 2 de l’exercice 4 prend le niveau de la seconde station comme nouvel état de référence."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q2",
          "type": "mcq",
          "prompt": "Avec le sol comme référence, l’énergie potentielle du touriste au sommet (1 500 m) vaut :",
          "options": [
            "$4 \\times 10^{5}$ J",
            "$6{,}8 \\times 10^{5}$ J",
            "$1{,}2 \\times 10^{6}$ J",
            "$5{,}2 \\times 10^{5}$ J"
          ],
          "correctAnswerIndex": 2,
          "explanation": "$E_p = 80 \\times 10 \\times 1500 = 1{,}2 \\times 10^{6}$ J : c’est la valeur $E_{p3}$ de la résolution."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q3",
          "type": "mcq",
          "prompt": "Avec la station de 850 m comme référence, l’énergie potentielle du touriste à la station de 500 m vaut :",
          "options": [
            "$4 \\times 10^{5}$ J",
            "0 J",
            "$2{,}8 \\times 10^{5}$ J",
            "$-2{,}8 \\times 10^{5}$ J"
          ],
          "correctAnswerIndex": 3,
          "explanation": "$E_p = 80 \\times 10 \\times (500 - 850) = -2{,}8 \\times 10^{5}$ J : négative car la station est sous la référence."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q4",
          "type": "mcq",
          "prompt": "La variation d’énergie potentielle du touriste entre le sol et le sommet vaut, quelle que soit la référence :",
          "options": [
            "$1{,}2 \\times 10^{6}$ J",
            "$5{,}2 \\times 10^{5}$ J",
            "$6{,}8 \\times 10^{5}$ J",
            "0 J"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Les deux parties de l’exercice 4 aboutissent à la même variation : $1{,}2 \\times 10^{6}$ J."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q5",
          "type": "mcq",
          "prompt": "L’énergie potentielle de pesanteur de la sphère du pendule au départ du mouvement vaut :",
          "options": [
            "$0{,}18$ J",
            "$0{,}2412$ J",
            "$1{,}8$ J",
            "0 J"
          ],
          "correctAnswerIndex": 1,
          "explanation": "$E_p = m g L (1 - \\cos 30°) = 0{,}2 \\times 10 \\times 0{,}9 \\times (1 - 0{,}866) \\approx 0{,}2412$ J."
        },
        {
          "id": "premiere_c_physique_l08_energie_potentielle_pesanteur_p05_q6",
          "type": "mcq",
          "prompt": "D’après l’exercice 1, les forces de frottement sont des forces :",
          "options": [
            "Conservatives",
            "Non conservatrices",
            "Toujours nulles",
            "Égales au poids"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C’est la réponse 3 de l’exercice 1 (Vrai) : les frottements sont des forces non conservatrices."
        }
      ]
    }
  ]
};
