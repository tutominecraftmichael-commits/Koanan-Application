import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Leçon 3 : Interaction gravitationnelle » (Terminale C uniquement ; format v2 : mini-leçons de 5 à 8 étapes).
// Source : https://lyc.ecole-ci.org/course/view.php?id=1340
export const PHYSIQUE_TLE_C_L03_INTERACTION_GRAVITATIONNELLE: CurriculumChapter = {
  "id": "terminale_c_physique_l03_interaction_gravitationnelle",
  "subjectId": "physique_chimie",
  "gradeLevel": "terminale_c",
  "alsoForGrades": [],
  "order": 3,
  "title": "Leçon 3 : Interaction gravitationnelle",
  "summary": "On énonce la loi d'attraction universelle de Newton et la notion de champ gravitationnel, puis on étudie le mouvement circulaire uniforme des satellites, le satellite géostationnaire, les lois de Kepler et l'impesanteur.",
  "contentVersion": 2,
  "source": "https://lyc.ecole-ci.org/course/view.php?id=1340",
  "points": [
    {
      "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01",
      "order": 1,
      "title": "La loi d'attraction universelle de Newton",
      "summary": "Deux corps s'attirent avec des forces proportionnelles à leurs masses et inversement proportionnelles au carré de leur distance.",
      "conceptExplanation": "Deux corps ponctuels A et B, de masses mA et mB, situés à une distance r l'un de l'autre, s'attirent mutuellement avec des forces d'intensités proportionnelles à leurs masses et inversement proportionnelles au carré de la distance r.\nCes forces sont appelées forces gravitationnelles ; leur intensité commune vaut F = G·mA·mB/r², où G = 6,67 × 10⁻¹¹ N·m²·kg⁻² est la constante gravitationnelle.\nLa loi peut être appliquée aux solides à répartition sphérique si l'on admet que ces corps se comportent comme des points matériels situés en leurs centres, avec les masses des corps.\nLes forces gravitationnelles sont toujours attractives.",
      "keyRule": "F = G·mA·mB/r² : doubler une masse double la force ; doubler la distance la divise par 4.",
      "formulas": [
        {
          "name": "Force gravitationnelle",
          "formula": "F = \\frac{G \\times m_A \\times m_B}{r^2}",
          "note": "G = 6,67 × 10⁻¹¹ N·m²·kg⁻² (ou m³·kg⁻¹·s⁻²)."
        },
        {
          "name": "Relation vectorielle",
          "formula": "\\vec{F}_{A/B} = -\\vec{F}_{B/A}",
          "note": "Les deux forces sont opposées : principe des actions réciproques."
        }
      ],
      "workedExample": {
        "title": "Uranus et son satellite Ariel (activité d'application)",
        "statement": "Calcule la valeur de la force d'interaction entre Uranus (mU = 8,84 × 10²⁵ kg) et Ariel (mA = 1,26 × 10²¹ kg), distants de r = 192 000 km.",
        "methodSteps": [
          "On applique F = G·mU·mA/r², en convertissant r en mètres.",
          "Le corrigé obtient F = 2,015 × 10²⁰ N.",
          "Sur le schéma, les deux forces sont portées par la droite des centres, de même intensité, de sens opposés et dirigées l'une vers l'autre."
        ],
        "conclusion": "Ce sont le résultat et la représentation du corrigé de l'activité d'application du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'énoncé de la loi de Newton",
          "stepTheme": "L'énoncé de la loi de Newton",
          "stepBadge": "L'énoncé de la loi de Newton",
          "paragraphText": "• Loi d'attraction universelle : deux corps ponctuels s'attirent mutuellement avec des forces proportionnelles à leurs masses.\nElles sont aussi inversement proportionnelles au carré de la distance qui les sépare.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q1",
            "type": "mcq",
            "prompt": "D'après la loi de Newton, l'intensité des forces gravitationnelles entre deux corps est :",
            "options": [
              "Proportionnelle à leurs masses et inversement proportionnelle au carré de leur distance",
              "Proportionnelle à leur distance",
              "Inversement proportionnelle à leurs masses",
              "Indépendante de la distance"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est l'énoncé du §1.1 du résumé."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La constante gravitationnelle G",
          "stepTheme": "La constante gravitationnelle G",
          "stepBadge": "La constante gravitationnelle G",
          "paragraphText": "La constante de proportionnalité est la constante gravitationnelle G.\nLe résumé donne G = 6,67 × 10⁻¹¹ N·m²·kg⁻², ou encore en m³·kg⁻¹·s⁻².",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q2",
            "type": "mcq",
            "prompt": "La valeur de la constante gravitationnelle est :",
            "options": [
              "G = 9,8 N/kg",
              "G = 6,67 × 10⁻¹¹ N·m²·kg⁻²",
              "G = 6,67 × 10¹¹ SI",
              "G = 1,6 × 10⁻¹⁹ C"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la valeur universelle donnée au §1.2 du résumé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'effet de la distance : le carré",
          "stepTheme": "L'effet de la distance : le carré",
          "stepBadge": "L'effet de la distance : le carré",
          "paragraphText": "La force varie en 1/r² : c'est le carré de la distance qui intervient.\nSi la distance double, l'intensité de la force est divisée par 4 ; si elle triple, elle est divisée par 9.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q3",
            "type": "mcq",
            "prompt": "Si la distance entre deux corps double, l'intensité de la force gravitationnelle devient :",
            "options": [
              "Le double",
              "La moitié",
              "Le quart",
              "Elle ne change pas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "F varie en 1/r² : multiplier r par 2 divise F par 2² = 4."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Les corps à répartition sphérique",
          "stepTheme": "Les corps à répartition sphérique",
          "stepBadge": "Les corps à répartition sphérique",
          "paragraphText": "La loi, énoncée pour des corps ponctuels, peut être appliquée aux solides à répartition sphérique.\nOn admet alors qu'ils se comportent comme des points matériels situés en leurs centres, ayant pour masses les masses de ces corps.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q4",
            "type": "mcq",
            "prompt": "Pour appliquer la loi de Newton à une planète sphérique, on l'assimile à :",
            "options": [
              "Un point matériel situé à sa surface",
              "Un disque de même rayon",
              "Un point matériel situé en son centre, de masse égale à celle de la planète",
              "Deux points matériels aux pôles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'adaptation indiquée au §1.2 du résumé pour les corps à répartition sphérique."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Des forces toujours attractives",
          "stepTheme": "Des forces toujours attractives",
          "stepBadge": "Des forces toujours attractives",
          "paragraphText": "Le résumé insiste en remarque : les forces gravitationnelles sont toujours attractives.\nContrairement aux forces électriques, il n'existe pas de « répulsion gravitationnelle » entre deux masses.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q5",
            "type": "mcq",
            "prompt": "Les forces gravitationnelles entre deux corps sont toujours :",
            "options": [
              "Répulsives",
              "Attractives",
              "Attractives ou répulsives selon les masses",
              "Nulles si les corps sont sphériques"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le NB du §1.2 : la gravitation attire toujours les masses l'une vers l'autre."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La force Uranus–Ariel",
          "stepTheme": "La force Uranus–Ariel",
          "stepBadge": "La force Uranus–Ariel",
          "paragraphText": "Dans l'activité d'application, Uranus et Ariel sont distants de 192 000 km.\nLe corrigé calcule l'intensité commune de leurs forces d'interaction : F = 2,015 × 10²⁰ N.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q6",
            "type": "mcq",
            "prompt": "L'intensité de la force d'interaction entre Uranus et Ariel vaut environ :",
            "options": [
              "2,015 × 10²⁰ N",
              "2,015 × 10¹¹ N",
              "6,67 × 10⁻¹¹ N",
              "1,26 × 10²¹ N"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la valeur numérique du corrigé, obtenue par F = G·mU·mA/r²."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q1",
          "type": "mcq",
          "prompt": "D'après la loi de Newton, l'intensité des forces gravitationnelles entre deux corps est :",
          "options": [
            "Proportionnelle à leurs masses et inversement proportionnelle au carré de leur distance",
            "Proportionnelle à leur distance",
            "Inversement proportionnelle à leurs masses",
            "Indépendante de la distance"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est l'énoncé du §1.1 du résumé."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q2",
          "type": "mcq",
          "prompt": "La valeur de la constante gravitationnelle est :",
          "options": [
            "G = 9,8 N/kg",
            "G = 6,67 × 10⁻¹¹ N·m²·kg⁻²",
            "G = 6,67 × 10¹¹ SI",
            "G = 1,6 × 10⁻¹⁹ C"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la valeur universelle donnée au §1.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q3",
          "type": "mcq",
          "prompt": "Si la distance entre deux corps double, l'intensité de la force gravitationnelle devient :",
          "options": [
            "Le double",
            "La moitié",
            "Le quart",
            "Elle ne change pas"
          ],
          "correctAnswerIndex": 2,
          "explanation": "F varie en 1/r² : multiplier r par 2 divise F par 2² = 4."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q4",
          "type": "mcq",
          "prompt": "Pour appliquer la loi de Newton à une planète sphérique, on l'assimile à :",
          "options": [
            "Un point matériel situé à sa surface",
            "Un disque de même rayon",
            "Un point matériel situé en son centre, de masse égale à celle de la planète",
            "Deux points matériels aux pôles"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'adaptation indiquée au §1.2 du résumé pour les corps à répartition sphérique."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q5",
          "type": "mcq",
          "prompt": "Les forces gravitationnelles entre deux corps sont toujours :",
          "options": [
            "Répulsives",
            "Attractives",
            "Attractives ou répulsives selon les masses",
            "Nulles si les corps sont sphériques"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le NB du §1.2 : la gravitation attire toujours les masses l'une vers l'autre."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p01_q6",
          "type": "mcq",
          "prompt": "L'intensité de la force d'interaction entre Uranus et Ariel vaut environ :",
          "options": [
            "2,015 × 10²⁰ N",
            "2,015 × 10¹¹ N",
            "6,67 × 10⁻¹¹ N",
            "1,26 × 10²¹ N"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la valeur numérique du corrigé, obtenue par F = G·mU·mA/r²."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02",
      "order": 2,
      "title": "Le champ gravitationnel",
      "summary": "Un corps crée autour de lui un champ ; son intensité décroît en 1/(R+z)² avec l'altitude.",
      "conceptExplanation": "Un corps S à répartition sphérique de masse m crée autour de lui un champ gravitationnel : tout point P de l'espace environnant est caractérisé par un vecteur champ de gravitation, dirigé vers le centre du corps.\nÀ une altitude z au-dessus de la surface, l'intensité du champ vaut G(z) = G·m/(R+z)², où R est le rayon du corps.\nÀ la surface (z = 0), on obtient G₀ = G·m/R², d'où la relation G(z) = G₀·R²/(R+z)².\nAu voisinage de la Terre, le champ gravitationnel et le champ de pesanteur g sont pratiquement égaux : l'écart relatif entre leurs normes est inférieur à 0,3 % et l'écart entre leurs directions n'excède pas 0,1°, on écrit donc G = g.",
      "keyRule": "G(z) = G₀·R²/(R+z)² : à la surface G₀ = G·m/R², et le champ s'affaiblit avec l'altitude.",
      "formulas": [
        {
          "name": "Champ gravitationnel à l'altitude z",
          "formula": "\\mathcal{G}_z = \\frac{G \\times m}{(R+z)^2}",
          "note": "R est le rayon du corps créant le champ."
        },
        {
          "name": "Relation surface–altitude",
          "formula": "\\mathcal{G}_z = \\mathcal{G}_0 \\times \\frac{R^2}{(R+z)^2}",
          "note": "Avec G₀ = G·m/R², champ à la surface."
        }
      ],
      "workedExample": {
        "title": "Le champ terrestre au sol et sur la Lune (activité d'application)",
        "statement": "Avec MT = 6 × 10²⁴ kg et RT = 6,3 × 10³ km, calcule le champ de gravitation terrestre au niveau du sol, puis à la distance de la Lune (h = 3,85 × 10⁵ km).",
        "methodSteps": [
          "Au sol : g₀ = G·MT/RT² = 9,77 m/s².",
          "À l'altitude h : gh = G·MT/(RT + h)², soit g₀·RT²/(RT + h)².",
          "Le corrigé obtient gh = 2,6 × 10⁻³ m/s²."
        ],
        "conclusion": "Le champ terrestre est devenu environ 3 800 fois plus faible à la distance de la Lune : c'est le résultat du corrigé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La notion de champ gravitationnel",
          "stepTheme": "La notion de champ gravitationnel",
          "stepBadge": "La notion de champ gravitationnel",
          "paragraphText": "• Champ gravitationnel : propriété de l'espace environnant un corps massif, caractérisée en tout point P par un vecteur champ de gravitation.\nCe vecteur est dirigé vers le centre du corps qui crée le champ.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q1",
            "type": "mcq",
            "prompt": "Le vecteur champ de gravitation créé par un corps sphérique en un point P est dirigé :",
            "options": [
              "Vers le centre du corps",
              "En s'éloignant du corps",
              "Perpendiculairement à la droite des centres",
              "Dans le sens du mouvement du corps"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le champ est attractif : son vecteur pointe vers le centre de symétrie du corps (§2.2.1)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "L'expression du champ",
          "stepTheme": "L'expression du champ",
          "stepBadge": "L'expression du champ",
          "paragraphText": "À la distance r = AP du centre, le champ créé par une masse m vaut G·m/r².\nPour un point d'altitude z au-dessus de la surface, r = R + z : G(z) = G·m/(R+z)².",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q2",
            "type": "mcq",
            "prompt": "Le champ gravitationnel à l'altitude z au-dessus d'un corps de rayon R et de masse m vaut :",
            "options": [
              "$\\mathcal{G} = G \\times m/(R+z)$",
              "$\\mathcal{G} = G \\times m/(R+z)^2$",
              "$\\mathcal{G} = G \\times m/z^2$",
              "$\\mathcal{G} = G \\times m \\times (R+z)^2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'expression du §2.2.2 : la distance au centre est R + z, élevée au carré."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le champ à la surface G₀",
          "stepTheme": "Le champ à la surface G₀",
          "stepBadge": "Le champ à la surface G₀",
          "paragraphText": "À la surface du corps, z = 0 : le champ vaut G₀ = G·m/R².\nC'est la valeur de référence à partir de laquelle on calcule le champ à toute altitude par G(z) = G₀·R²/(R+z)².",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q3",
            "type": "mcq",
            "prompt": "Le champ gravitationnel à la surface d'un corps de masse m et de rayon R vaut :",
            "options": [
              "G·m·R²",
              "G·m/R",
              "G·m/R²",
              "0"
            ],
            "correctAnswerIndex": 2,
            "explanation": "On pose z = 0 dans l'expression générale : G₀ = G·m/R² (§2.2.2)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Le champ terrestre à 100 km d'altitude (exercice 1)",
          "stepTheme": "Le champ terrestre à 100 km d'altitude (exercice 1)",
          "stepBadge": "Le champ terrestre à 100 km d'altitude (exercice 1)",
          "paragraphText": "Avec mT = 5,98 × 10²⁴ kg et RT = 6370 km, la solution de l'exercice 1 trouve le champ à la surface g₀ = 9,83 N/kg.\nÀ l'altitude Z = 100 km, il ne vaut plus que gz = 9,53 N/kg.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q4",
            "type": "mcq",
            "prompt": "Le champ gravitationnel terrestre à 100 km d'altitude vaut environ (exercice 1) :",
            "options": [
              "9,83 N/kg",
              "0,224 N/kg",
              "2,6 × 10⁻³ N/kg",
              "9,53 N/kg"
            ],
            "correctAnswerIndex": 3,
            "explanation": "gz = G·mT/(RT + Z)² = 9,53 N/kg, légèrement inférieur au 9,83 N/kg de la surface."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Champ gravitationnel et champ de pesanteur",
          "stepTheme": "Champ gravitationnel et champ de pesanteur",
          "stepBadge": "Champ gravitationnel et champ de pesanteur",
          "paragraphText": "Au voisinage de la Terre, l'écart relatif entre les normes de G et de g est inférieur à 0,3 %.\nL'écart entre leurs directions n'excède pas 0,1° : on écrit donc G = g au voisinage de la Terre.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q5",
            "type": "mcq",
            "prompt": "Au voisinage de la Terre, on peut identifier le champ gravitationnel au champ de pesanteur car :",
            "options": [
              "Leurs normes diffèrent de moins de 0,3 % et leurs directions de moins de 0,1°",
              "Ils sont rigoureusement identiques partout",
              "La Terre est parfaitement sphérique",
              "Le champ de pesanteur n'existe pas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les deux écarts chiffrés du §2.3 du résumé."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le champ au sol de l'activité : 9,77 m/s²",
          "stepTheme": "Le champ au sol de l'activité : 9,77 m/s²",
          "stepBadge": "Le champ au sol de l'activité : 9,77 m/s²",
          "paragraphText": "Piège : la valeur du champ dépend des données utilisées ; avec MT = 6 × 10²⁴ kg et RT = 6,3 × 10³ km, l'activité trouve g₀ = 9,77 m/s².\nCe n'est pas une contradiction avec 9,83 N/kg : ce sont les arrondis des données qui changent.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q6",
            "type": "mcq",
            "prompt": "Avec les données de l'activité (MT = 6 × 10²⁴ kg, RT = 6,3 × 10³ km), le champ terrestre au sol vaut :",
            "options": [
              "9,83 m/s²",
              "9,77 m/s²",
              "10,5 m/s²",
              "2,6 × 10⁻³ m/s²"
            ],
            "correctAnswerIndex": 1,
            "explanation": "g₀ = G·MT/RT² = 9,77 m/s² dans le corrigé de la seconde activité d'application."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q1",
          "type": "mcq",
          "prompt": "Le vecteur champ de gravitation créé par un corps sphérique en un point P est dirigé :",
          "options": [
            "Vers le centre du corps",
            "En s'éloignant du corps",
            "Perpendiculairement à la droite des centres",
            "Dans le sens du mouvement du corps"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le champ est attractif : son vecteur pointe vers le centre de symétrie du corps (§2.2.1)."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q2",
          "type": "mcq",
          "prompt": "Le champ gravitationnel à l'altitude z au-dessus d'un corps de rayon R et de masse m vaut :",
          "options": [
            "$\\mathcal{G} = G \\times m/(R+z)$",
            "$\\mathcal{G} = G \\times m/(R+z)^2$",
            "$\\mathcal{G} = G \\times m/z^2$",
            "$\\mathcal{G} = G \\times m \\times (R+z)^2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'expression du §2.2.2 : la distance au centre est R + z, élevée au carré."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q3",
          "type": "mcq",
          "prompt": "Le champ gravitationnel à la surface d'un corps de masse m et de rayon R vaut :",
          "options": [
            "G·m·R²",
            "G·m/R",
            "G·m/R²",
            "0"
          ],
          "correctAnswerIndex": 2,
          "explanation": "On pose z = 0 dans l'expression générale : G₀ = G·m/R² (§2.2.2)."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q4",
          "type": "mcq",
          "prompt": "Le champ gravitationnel terrestre à 100 km d'altitude vaut environ (exercice 1) :",
          "options": [
            "9,83 N/kg",
            "0,224 N/kg",
            "2,6 × 10⁻³ N/kg",
            "9,53 N/kg"
          ],
          "correctAnswerIndex": 3,
          "explanation": "gz = G·mT/(RT + Z)² = 9,53 N/kg, légèrement inférieur au 9,83 N/kg de la surface."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q5",
          "type": "mcq",
          "prompt": "Au voisinage de la Terre, on peut identifier le champ gravitationnel au champ de pesanteur car :",
          "options": [
            "Leurs normes diffèrent de moins de 0,3 % et leurs directions de moins de 0,1°",
            "Ils sont rigoureusement identiques partout",
            "La Terre est parfaitement sphérique",
            "Le champ de pesanteur n'existe pas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les deux écarts chiffrés du §2.3 du résumé."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p02_q6",
          "type": "mcq",
          "prompt": "Avec les données de l'activité (MT = 6 × 10²⁴ kg, RT = 6,3 × 10³ km), le champ terrestre au sol vaut :",
          "options": [
            "9,83 m/s²",
            "9,77 m/s²",
            "10,5 m/s²",
            "2,6 × 10⁻³ m/s²"
          ],
          "correctAnswerIndex": 1,
          "explanation": "g₀ = G·MT/RT² = 9,77 m/s² dans le corrigé de la seconde activité d'application."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03",
      "order": 3,
      "title": "Le mouvement circulaire uniforme des satellites",
      "summary": "Soumis à la seule gravitation dans le référentiel géocentrique, le satellite a une accélération égale au champ : son mouvement circulaire est uniforme.",
      "conceptExplanation": "Pour étudier le mouvement d'un satellite de la Terre, on utilise le référentiel géocentrique, supposé galiléen.\nEn « vol balistique » (moteur coupé), le satellite n'est soumis qu'à la force gravitationnelle terrestre F = m·G ; il décrit une courbe plane dont le plan contient le centre O de la Terre, souvent une ellipse ou un cercle de centre O.\nLe théorème du centre d'inertie donne aG = G : l'accélération du satellite est égale au vecteur champ gravitationnel au point où il se trouve.\nDans la base de Frenet, la composante tangentielle de cette accélération est dv/dt = 0 : la valeur de la vitesse est constante, le mouvement circulaire est donc uniforme.\nRemarque du résumé : le mouvement de tout corps soumis à la seule action du champ gravitationnel est indépendant de la masse de ce corps.",
      "keyRule": "Pour un satellite : aG = champ gravitationnel ; sur un cercle, dv/dt = 0 donc v constante (MCU).",
      "formulas": [
        {
          "name": "Accélération d'un satellite",
          "formula": "\\vec{a}_G = \\vec{\\mathcal{G}}",
          "note": "L'accélération égale le champ au point du satellite : elle ne dépend pas de sa masse."
        }
      ],
      "workedExample": {
        "title": "Démontrer le caractère uniforme",
        "statement": "Un satellite de masse m est en vol balistique circulaire autour de la Terre. Montre que son mouvement est uniforme.",
        "methodSteps": [
          "Système : le satellite ; référentiel géocentrique supposé galiléen ; seule force : la gravitation F = m·G.",
          "Théorème du centre d'inertie : m·aG = m·G, donc aG = G.",
          "Dans Frenet, G est dirigé selon −n (vers le centre) : la composante tangentielle dv/dt est nulle, donc v = constante."
        ],
        "conclusion": "Le mouvement du satellite est circulaire uniforme : c'est la démonstration du §3.1 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Le référentiel d'étude : le géocentrique",
          "stepTheme": "Le référentiel d'étude : le géocentrique",
          "stepBadge": "Le référentiel d'étude : le géocentrique",
          "paragraphText": "Pour étudier le mouvement d'un satellite de la Terre, on utilise le repère géocentrique.\nDans la démonstration du résumé, ce référentiel est supposé galiléen.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q1",
            "type": "mcq",
            "prompt": "Le mouvement d'un satellite terrestre s'étudie dans le référentiel :",
            "options": [
              "Terrestre du laboratoire",
              "Géocentrique, supposé galiléen",
              "Lié au satellite",
              "De Copernic uniquement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le choix fait au §3 du résumé : le centre de la Terre y est fixe."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le vol balistique",
          "stepTheme": "Le vol balistique",
          "stepBadge": "Le vol balistique",
          "paragraphText": "• Vol balistique : mouvement d'un satellite dont le moteur est coupé.\nIl n'est alors soumis qu'à la force gravitationnelle, et sa trajectoire est une courbe plane passant par le centre de la Terre.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q2",
            "type": "mcq",
            "prompt": "Un satellite est en « vol balistique » lorsque :",
            "options": [
              "Son moteur fonctionne à plein régime",
              "Il rentre dans l'atmosphère",
              "Son moteur est coupé : il n'est soumis qu'à la gravitation",
              "Il est immobile par rapport au sol"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la situation décrite au §3 : le satellite est livré à la seule attraction terrestre."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "aG est égal au champ gravitationnel",
          "stepTheme": "aG est égal au champ gravitationnel",
          "stepBadge": "aG est égal au champ gravitationnel",
          "paragraphText": "Le bilan des forces se réduit à F = m·G.\nLe théorème du centre d'inertie donne alors aG = G = −(G·MT/r²)·u : l'accélération est dirigée vers le centre de la Terre.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q3",
            "type": "mcq",
            "prompt": "L'accélération d'un satellite en vol balistique est :",
            "options": [
              "Nulle",
              "Tangente à l'orbite",
              "Égale à la vitesse divisée par le rayon",
              "Égale au vecteur champ gravitationnel au point où il se trouve"
            ],
            "correctAnswerIndex": 3,
            "explanation": "m·aG = m·G donne aG = G (§3.1) : c'est le cœur de la démonstration."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Frenet : dv/dt = 0",
          "stepTheme": "Frenet : dv/dt = 0",
          "stepBadge": "Frenet : dv/dt = 0",
          "paragraphText": "Dans la base de Frenet, l'accélération s'écrit a = (dv/dt)·τ + (v²/r)·n.\nComme aG est purement normale (dirigée vers le centre), sa composante tangentielle est nulle : dv/dt = 0.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q4",
            "type": "mcq",
            "prompt": "La composante tangentielle de l'accélération d'un satellite en orbite circulaire est nulle, donc :",
            "options": [
              "La valeur de sa vitesse est constante",
              "Sa vitesse est nulle",
              "Son accélération est nulle",
              "Sa période diminue"
            ],
            "correctAnswerIndex": 0,
            "explanation": "dv/dt = 0 implique v = constante : le mouvement circulaire est uniforme."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Un mouvement indépendant de la masse",
          "stepTheme": "Un mouvement indépendant de la masse",
          "stepBadge": "Un mouvement indépendant de la masse",
          "paragraphText": "Remarque du résumé : le mouvement de tout corps soumis à la seule action du champ gravitationnel est indépendant de la masse de ce corps.\nLa masse m se simplifie en effet dans m·aG = m·G.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q5",
            "type": "mcq",
            "prompt": "Deux satellites de masses différentes, sur la même orbite circulaire, ont :",
            "options": [
              "Des vitesses différentes",
              "La même vitesse et la même période",
              "Des périodes proportionnelles à leurs masses",
              "Des accélérations différentes"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'accélération aG = G ne contient pas la masse du satellite : même orbite, même mouvement."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le plan de l'orbite contient le centre de la Terre",
          "stepTheme": "Le plan de l'orbite contient le centre de la Terre",
          "stepBadge": "Le plan de l'orbite contient le centre de la Terre",
          "paragraphText": "La courbe décrite en vol balistique est plane, et son plan contient le centre O de la Terre.\nCe peut être une ellipse ou un cercle de centre O ; la leçon se limite au cas circulaire.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q6",
            "type": "mcq",
            "prompt": "La trajectoire d'un satellite en vol balistique est :",
            "options": [
              "Une droite",
              "Une courbe quelconque dans l'espace",
              "Une courbe plane dont le plan contient le centre de la Terre",
              "Toujours un cercle de centre quelconque"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la propriété énoncée au début du §3 : le plan de l'orbite passe par le centre attracteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q1",
          "type": "mcq",
          "prompt": "Le mouvement d'un satellite terrestre s'étudie dans le référentiel :",
          "options": [
            "Terrestre du laboratoire",
            "Géocentrique, supposé galiléen",
            "Lié au satellite",
            "De Copernic uniquement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le choix fait au §3 du résumé : le centre de la Terre y est fixe."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q2",
          "type": "mcq",
          "prompt": "Un satellite est en « vol balistique » lorsque :",
          "options": [
            "Son moteur fonctionne à plein régime",
            "Il rentre dans l'atmosphère",
            "Son moteur est coupé : il n'est soumis qu'à la gravitation",
            "Il est immobile par rapport au sol"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la situation décrite au §3 : le satellite est livré à la seule attraction terrestre."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q3",
          "type": "mcq",
          "prompt": "L'accélération d'un satellite en vol balistique est :",
          "options": [
            "Nulle",
            "Tangente à l'orbite",
            "Égale à la vitesse divisée par le rayon",
            "Égale au vecteur champ gravitationnel au point où il se trouve"
          ],
          "correctAnswerIndex": 3,
          "explanation": "m·aG = m·G donne aG = G (§3.1) : c'est le cœur de la démonstration."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q4",
          "type": "mcq",
          "prompt": "La composante tangentielle de l'accélération d'un satellite en orbite circulaire est nulle, donc :",
          "options": [
            "La valeur de sa vitesse est constante",
            "Sa vitesse est nulle",
            "Son accélération est nulle",
            "Sa période diminue"
          ],
          "correctAnswerIndex": 0,
          "explanation": "dv/dt = 0 implique v = constante : le mouvement circulaire est uniforme."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q5",
          "type": "mcq",
          "prompt": "Deux satellites de masses différentes, sur la même orbite circulaire, ont :",
          "options": [
            "Des vitesses différentes",
            "La même vitesse et la même période",
            "Des périodes proportionnelles à leurs masses",
            "Des accélérations différentes"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'accélération aG = G ne contient pas la masse du satellite : même orbite, même mouvement."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p03_q6",
          "type": "mcq",
          "prompt": "La trajectoire d'un satellite en vol balistique est :",
          "options": [
            "Une droite",
            "Une courbe quelconque dans l'espace",
            "Une courbe plane dont le plan contient le centre de la Terre",
            "Toujours un cercle de centre quelconque"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la propriété énoncée au début du §3 : le plan de l'orbite passe par le centre attracteur."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04",
      "order": 4,
      "title": "Vitesse, vitesse angulaire et période d'un satellite",
      "summary": "v = √(G·MT/r), ω = v/r et T = 2π√(r³/(G·MT)) : plus l'orbite est haute, plus le satellite est lent.",
      "conceptExplanation": "Pour un satellite en orbite circulaire de rayon r = RT + h, la composante normale de l'accélération donne v²/r = G, soit $v = \\sqrt{G \\cdot M_T/r}$, que l'on écrit aussi $v = R_T \\sqrt{g_0/r}$ en utilisant G·MT = g₀·RT².\nLa vitesse angulaire est ω = v/r, et la période (durée d'un tour) vaut T = 2π/ω.\nOn en déduit la troisième loi de Kepler pour les orbites circulaires : T²/r³ = 4π²/(G·MT), une constante pour tous les satellites de la Terre.\nConséquence : quand l'altitude augmente, la vitesse et la vitesse angulaire diminuent, et la période augmente.",
      "keyRule": "v = √(G·MT/r) et T² = 4π²r³/(G·MT) : hauteur ↑ ⇒ v ↓ et T ↑.",
      "formulas": [
        {
          "name": "Vitesse d'un satellite",
          "formula": "v = \\sqrt{\\frac{G \\times M_T}{r}} = R_T \\times \\sqrt{\\frac{g_0}{r}}",
          "note": "r = RT + h est le rayon de l'orbite."
        },
        {
          "name": "Période de révolution",
          "formula": "T = 2\\pi \\times \\sqrt{\\frac{r^3}{G \\times M_T}}",
          "note": "Soit T²/r³ = 4π²/(G·MT) : troisième loi de Kepler."
        }
      ],
      "workedExample": {
        "title": "Le satellite de l'exercice 2 (altitude 10 000 km)",
        "statement": "Un satellite tourne à l'altitude de 10 000 km (RT = 6370 km, mT = 5,98 × 10²⁴ kg). Calcule sa vitesse, sa vitesse angulaire et sa période.",
        "methodSteps": [
          "Le rayon de l'orbite est r = RT + Z = 16 370 km.",
          "v = √(G·mT/r) : la solution obtient v = 4936,16 m/s.",
          "ω = v/r = 3,015 × 10⁻⁴ rad/s, puis T = 2π/ω = 20 839,75 s (environ 5,8 h)."
        ],
        "conclusion": "Ce sont les valeurs de la solution de l'exercice 2 du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "La vitesse ne dépend que du rayon de l'orbite",
          "stepTheme": "La vitesse ne dépend que du rayon de l'orbite",
          "stepBadge": "La vitesse ne dépend que du rayon de l'orbite",
          "paragraphText": "La relation v²/r = G conduit à v = √(G·MT/r).\nLa vitesse d'un satellite ne dépend donc que du rayon r de son orbite, pas de sa propre masse.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q1",
            "type": "mcq",
            "prompt": "La vitesse d'un satellite en orbite circulaire dépend :",
            "options": [
              "Uniquement du rayon de l'orbite (et de la masse de la Terre)",
              "De la masse du satellite",
              "De la puissance de son moteur",
              "De sa forme"
            ],
            "correctAnswerIndex": 0,
            "explanation": "v = √(G·MT/r) : ni la masse ni les caractéristiques du satellite n'y figurent (§3.2.1)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Plus l'orbite est haute, plus le satellite est lent",
          "stepTheme": "Plus l'orbite est haute, plus le satellite est lent",
          "stepBadge": "Plus l'orbite est haute, plus le satellite est lent",
          "paragraphText": "Comme v varie en 1/√r, la vitesse diminue quand le rayon de l'orbite augmente.\nC'est cohérent avec les exercices : 4936 m/s à 10 000 km d'altitude, contre environ 3080 m/s pour un géostationnaire à 36 000 km.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q2",
            "type": "mcq",
            "prompt": "Quand l'altitude d'un satellite augmente, sa vitesse linéaire :",
            "options": [
              "Augmente",
              "Diminue",
              "Reste constante",
              "S'annule"
            ],
            "correctAnswerIndex": 1,
            "explanation": "v = √(G·MT/r) décroît quand r = RT + h croît."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "La période croît avec le rayon",
          "stepTheme": "La période croît avec le rayon",
          "stepBadge": "La période croît avec le rayon",
          "paragraphText": "La période vaut T = 2π/ω, et le rapport T²/r³ est constant pour une même planète.\nUn satellite plus éloigné met donc plus de temps à faire un tour, comme la Lune par rapport aux satellites bas.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q3",
            "type": "mcq",
            "prompt": "Pour les satellites d'une même planète, la grandeur constante est :",
            "options": [
              "T × r³",
              "T² + r³",
              "Le rapport T²/r³",
              "Le rapport T/r"
            ],
            "correctAnswerIndex": 2,
            "explanation": "T²/r³ = 4π²/(G·MT) : c'est la troisième loi de Kepler pour les orbites circulaires."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "L'exercice 4 : retrouver l'altitude par ω",
          "stepTheme": "L'exercice 4 : retrouver l'altitude par ω",
          "stepBadge": "L'exercice 4 : retrouver l'altitude par ω",
          "paragraphText": "Un satellite a une vitesse angulaire ω = 8,055 × 10⁻⁴ rad/s (RT = 6370 km, g₀ = 9,8 m/s²).\nLa solution en déduit le rayon d'orbite, puis l'altitude h = 2,12 × 10⁶ m, une vitesse v = 6,84 × 10³ m/s et un champ à cette altitude gh = 5,52 m/s².",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q4",
            "type": "mcq",
            "prompt": "L'altitude du satellite de l'exercice 4 (ω = 8,055 × 10⁻⁴ rad/s) vaut environ :",
            "options": [
              "36 000 km",
              "10 000 km",
              "100 km",
              "2 120 km (2,12 × 10⁶ m)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "h = (g₀RT²/ω²)^(1/3) − RT donne 2,12 × 10⁶ m dans la solution de l'exercice 4."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "Les caractéristiques de la force responsable (exercice 4)",
          "stepTheme": "Les caractéristiques de la force responsable (exercice 4)",
          "stepBadge": "Les caractéristiques de la force responsable (exercice 4)",
          "paragraphText": "La question 1 de l'exercice 4 demande la nature et les caractéristiques de la force responsable du mouvement.\nC'est une force d'attraction gravitationnelle : point d'application au centre d'inertie du satellite, direction la droite reliant les centres d'inertie, sens vers le centre de la Terre.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q5",
            "type": "mcq",
            "prompt": "La force responsable du mouvement d'un satellite est dirigée :",
            "options": [
              "Vers le centre d'inertie de la Terre",
              "Dans le sens du mouvement",
              "Vers l'extérieur de l'orbite",
              "Perpendiculairement au plan de l'orbite"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le sens de la force d'attraction dans la solution de l'exercice 4."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre altitude et rayon d'orbite",
          "stepTheme": "Ne pas confondre altitude et rayon d'orbite",
          "stepBadge": "Ne pas confondre altitude et rayon d'orbite",
          "paragraphText": "Piège classique : les formules utilisent le rayon de l'orbite r, mesuré depuis le centre de la Terre.\nIl faut toujours ajouter le rayon terrestre à l'altitude : r = RT + h, comme dans tous les exercices du résumé.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q6",
            "type": "mcq",
            "prompt": "Pour un satellite à l'altitude h, le rayon r à utiliser dans v = √(G·MT/r) est :",
            "options": [
              "r = h",
              "r = RT + h",
              "r = RT − h",
              "r = RT seulement"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La distance se mesure depuis le centre de la Terre : r = RT + h (§3.2.1 du résumé)."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q1",
          "type": "mcq",
          "prompt": "La vitesse d'un satellite en orbite circulaire dépend :",
          "options": [
            "Uniquement du rayon de l'orbite (et de la masse de la Terre)",
            "De la masse du satellite",
            "De la puissance de son moteur",
            "De sa forme"
          ],
          "correctAnswerIndex": 0,
          "explanation": "v = √(G·MT/r) : ni la masse ni les caractéristiques du satellite n'y figurent (§3.2.1)."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q2",
          "type": "mcq",
          "prompt": "Quand l'altitude d'un satellite augmente, sa vitesse linéaire :",
          "options": [
            "Augmente",
            "Diminue",
            "Reste constante",
            "S'annule"
          ],
          "correctAnswerIndex": 1,
          "explanation": "v = √(G·MT/r) décroît quand r = RT + h croît."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q3",
          "type": "mcq",
          "prompt": "Pour les satellites d'une même planète, la grandeur constante est :",
          "options": [
            "T × r³",
            "T² + r³",
            "Le rapport T²/r³",
            "Le rapport T/r"
          ],
          "correctAnswerIndex": 2,
          "explanation": "T²/r³ = 4π²/(G·MT) : c'est la troisième loi de Kepler pour les orbites circulaires."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q4",
          "type": "mcq",
          "prompt": "L'altitude du satellite de l'exercice 4 (ω = 8,055 × 10⁻⁴ rad/s) vaut environ :",
          "options": [
            "36 000 km",
            "10 000 km",
            "100 km",
            "2 120 km (2,12 × 10⁶ m)"
          ],
          "correctAnswerIndex": 3,
          "explanation": "h = (g₀RT²/ω²)^(1/3) − RT donne 2,12 × 10⁶ m dans la solution de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q5",
          "type": "mcq",
          "prompt": "La force responsable du mouvement d'un satellite est dirigée :",
          "options": [
            "Vers le centre d'inertie de la Terre",
            "Dans le sens du mouvement",
            "Vers l'extérieur de l'orbite",
            "Perpendiculairement au plan de l'orbite"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le sens de la force d'attraction dans la solution de l'exercice 4."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p04_q6",
          "type": "mcq",
          "prompt": "Pour un satellite à l'altitude h, le rayon r à utiliser dans v = √(G·MT/r) est :",
          "options": [
            "r = h",
            "r = RT + h",
            "r = RT − h",
            "r = RT seulement"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La distance se mesure depuis le centre de la Terre : r = RT + h (§3.2.1 du résumé)."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05",
      "order": 5,
      "title": "Le satellite géostationnaire",
      "summary": "Même période que la Terre, orbite équatoriale : il paraît immobile, à environ 36 000 km d'altitude.",
      "conceptExplanation": "Un satellite géostationnaire tourne dans le même sens et à la même vitesse angulaire que la Terre, en décrivant un cercle dans le plan équatorial : il paraît donc immobile pour un observateur terrien.\nSa période est identique à la période de rotation de la Terre : T = 23 h 56 min 4 s, soit 86 164 s, d'où une vitesse angulaire ω = 2π/T = 7,29 × 10⁻⁵ rad/s.\nLa loi de Kepler fixe alors le rayon de l'orbite : r³ = G·MT·T²/(4π²) ≈ 7,5 × 10²² m³, soit une altitude z ≈ 3,6 × 10⁴ km.\nGrâce à leur immobilité apparente, les satellites géostationnaires assurent des communications intercontinentales permanentes, par exemple en météorologie.",
      "keyRule": "Géostationnaire : plan équatorial, même sens que la Terre, T = 86 164 s, altitude ≈ 36 000 km — une seule orbite possible.",
      "formulas": [
        {
          "name": "Rayon de l'orbite géostationnaire",
          "formula": "r^3 = \\frac{G \\times M_T \\times T^2}{4\\pi^2}",
          "note": "Avec T = période de rotation de la Terre : r est imposé."
        }
      ],
      "workedExample": {
        "title": "La situation d'évaluation : les satellites Meteosat",
        "statement": "Les Meteosat sont géostationnaires à Z = 36 000 km d'altitude (RT = 6370 km, période de rotation de la Terre prise égale à 24 h). Calcule leur vitesse angulaire, leur vitesse linéaire, puis estime la masse de la Terre et le champ à cette altitude.",
        "methodSteps": [
          "ω = 2π/T avec T = 86 400 s : ω = 7,27 × 10⁻⁵ rad/s (celle de la Terre).",
          "v = (RT + Z)·ω = 3080,3 m/s.",
          "Kepler donne mT = 4π²(RT + Z)³/(G·T²) = 6,03 × 10²⁴ kg.",
          "Le champ à l'altitude du satellite vaut gz = G·mT/(RT + Z)² = 0,224 N/kg."
        ],
        "conclusion": "Ce sont les résultats de la solution de la situation d'évaluation du résumé."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Définition d'un satellite géostationnaire",
          "stepTheme": "Définition d'un satellite géostationnaire",
          "stepBadge": "Définition d'un satellite géostationnaire",
          "paragraphText": "• Satellite géostationnaire : satellite qui tourne dans le même sens et à la même vitesse angulaire que la Terre, en décrivant un cercle dans le plan équatorial.\nIl paraît donc immobile pour un observateur terrien.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q1",
            "type": "mcq",
            "prompt": "Un satellite géostationnaire est un satellite qui :",
            "options": [
              "Est fixe dans l'espace, hors gravitation",
              "Tourne à la même vitesse angulaire que la Terre, dans le plan équatorial",
              "Tourne autour des pôles",
              "A une période de 1 heure"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la définition du §4.1 : même sens et même vitesse angulaire que la Terre, d'où l'immobilité apparente."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La période : 23 h 56 min 4 s",
          "stepTheme": "La période : 23 h 56 min 4 s",
          "stepBadge": "La période : 23 h 56 min 4 s",
          "paragraphText": "La période du satellite géostationnaire est identique à la période de rotation de la Terre.\nLe résumé donne T = 23 h 56 min 4 s, soit 86 164 s.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q2",
            "type": "mcq",
            "prompt": "La période d'un satellite géostationnaire vaut :",
            "options": [
              "24 h exactement dans tous les calculs",
              "86 400 s est la seule valeur admise",
              "23 h 56 min 4 s, soit 86 164 s",
              "12 h"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la période sidérale de rotation de la Terre, valeur du §4.2 (la situation d'évaluation utilise l'approximation 24 h)."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Une altitude imposée : environ 36 000 km",
          "stepTheme": "Une altitude imposée : environ 36 000 km",
          "stepBadge": "Une altitude imposée : environ 36 000 km",
          "paragraphText": "La période impose le rayon par la loi de Kepler : r³ ≈ 7,5 × 10²² m³.\nOn en déduit l'altitude z ≈ 3,6 × 10⁴ km : il n'existe qu'une seule orbite géostationnaire.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q3",
            "type": "mcq",
            "prompt": "L'altitude d'un satellite géostationnaire vaut environ :",
            "options": [
              "400 km",
              "2 120 km",
              "10 000 km",
              "36 000 km"
            ],
            "correctAnswerIndex": 3,
            "explanation": "z = r − RT ≈ 3,6 × 10⁴ km : résultat du §4.2 du résumé."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "La vitesse angulaire : 7,29 × 10⁻⁵ rad/s",
          "stepTheme": "La vitesse angulaire : 7,29 × 10⁻⁵ rad/s",
          "stepBadge": "La vitesse angulaire : 7,29 × 10⁻⁵ rad/s",
          "paragraphText": "Avec T = 86 164 s, la vitesse angulaire vaut ω = 2π/T = 7,29 × 10⁻⁵ rad/s.\nC'est exactement la vitesse angulaire de rotation de la Terre sur elle-même.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q4",
            "type": "mcq",
            "prompt": "La vitesse angulaire d'un satellite géostationnaire vaut environ :",
            "options": [
              "7,29 × 10⁻⁵ rad/s",
              "3,015 × 10⁻⁴ rad/s",
              "8,055 × 10⁻⁴ rad/s",
              "1,24 × 10⁻³ rad/s"
            ],
            "correctAnswerIndex": 0,
            "explanation": "ω = 2π/86 164 ≈ 7,29 × 10⁻⁵ rad/s (§4.2) ; les autres valeurs sont celles des exercices 2 et 4, pour des orbites plus basses."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le plan de l'orbite doit être équatorial",
          "stepTheme": "Le plan de l'orbite doit être équatorial",
          "stepBadge": "Le plan de l'orbite doit être équatorial",
          "paragraphText": "Piège : avoir la même période que la Terre ne suffit pas.\nIl faut aussi décrire un cercle dans le plan équatorial et tourner dans le même sens que la Terre, sinon le satellite dérive dans le ciel de l'observateur.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q5",
            "type": "mcq",
            "prompt": "Un satellite de période 86 164 s sur une orbite polaire est-il géostationnaire ?",
            "options": [
              "Oui, la période suffit",
              "Non : il faut aussi une orbite circulaire dans le plan équatorial, dans le sens de rotation de la Terre",
              "Oui, s'il est assez haut",
              "Non, car sa période devrait être de 24 h pile"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La définition du §4.1 impose les trois conditions : période, plan équatorial et même sens de rotation."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "propriete",
          "stepTitle": "L'intérêt des satellites géostationnaires",
          "stepTheme": "L'intérêt des satellites géostationnaires",
          "stepBadge": "L'intérêt des satellites géostationnaires",
          "paragraphText": "Grâce à leur immobilité apparente, les satellites géostationnaires assurent des communications intercontinentales permanentes.\nLe résumé cite leur utilisation dans plusieurs domaines, comme la météorologie (les Meteosat de la situation d'évaluation).",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q6",
            "type": "mcq",
            "prompt": "Les satellites géostationnaires sont surtout utilisés pour :",
            "options": [
              "L'observation rapprochée du sol",
              "Les communications intercontinentales permanentes et la météorologie",
              "Le tourisme spatial",
              "Mesurer le champ magnétique"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est l'intérêt donné au §4.3 : leur immobilité apparente permet une couverture permanente d'une même zone."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q1",
          "type": "mcq",
          "prompt": "Un satellite géostationnaire est un satellite qui :",
          "options": [
            "Est fixe dans l'espace, hors gravitation",
            "Tourne à la même vitesse angulaire que la Terre, dans le plan équatorial",
            "Tourne autour des pôles",
            "A une période de 1 heure"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la définition du §4.1 : même sens et même vitesse angulaire que la Terre, d'où l'immobilité apparente."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q2",
          "type": "mcq",
          "prompt": "La période d'un satellite géostationnaire vaut :",
          "options": [
            "24 h exactement dans tous les calculs",
            "86 400 s est la seule valeur admise",
            "23 h 56 min 4 s, soit 86 164 s",
            "12 h"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la période sidérale de rotation de la Terre, valeur du §4.2 (la situation d'évaluation utilise l'approximation 24 h)."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q3",
          "type": "mcq",
          "prompt": "L'altitude d'un satellite géostationnaire vaut environ :",
          "options": [
            "400 km",
            "2 120 km",
            "10 000 km",
            "36 000 km"
          ],
          "correctAnswerIndex": 3,
          "explanation": "z = r − RT ≈ 3,6 × 10⁴ km : résultat du §4.2 du résumé."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q4",
          "type": "mcq",
          "prompt": "La vitesse angulaire d'un satellite géostationnaire vaut environ :",
          "options": [
            "7,29 × 10⁻⁵ rad/s",
            "3,015 × 10⁻⁴ rad/s",
            "8,055 × 10⁻⁴ rad/s",
            "1,24 × 10⁻³ rad/s"
          ],
          "correctAnswerIndex": 0,
          "explanation": "ω = 2π/86 164 ≈ 7,29 × 10⁻⁵ rad/s (§4.2) ; les autres valeurs sont celles des exercices 2 et 4, pour des orbites plus basses."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q5",
          "type": "mcq",
          "prompt": "Un satellite de période 86 164 s sur une orbite polaire est-il géostationnaire ?",
          "options": [
            "Oui, la période suffit",
            "Non : il faut aussi une orbite circulaire dans le plan équatorial, dans le sens de rotation de la Terre",
            "Oui, s'il est assez haut",
            "Non, car sa période devrait être de 24 h pile"
          ],
          "correctAnswerIndex": 1,
          "explanation": "La définition du §4.1 impose les trois conditions : période, plan équatorial et même sens de rotation."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p05_q6",
          "type": "mcq",
          "prompt": "Les satellites géostationnaires sont surtout utilisés pour :",
          "options": [
            "L'observation rapprochée du sol",
            "Les communications intercontinentales permanentes et la météorologie",
            "Le tourisme spatial",
            "Mesurer le champ magnétique"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est l'intérêt donné au §4.3 : leur immobilité apparente permet une couverture permanente d'une même zone."
        }
      ]
    },
    {
      "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06",
      "order": 6,
      "title": "Lois de Kepler, planètes et impesanteur",
      "summary": "Les trois lois de Kepler décrivent les orbites planétaires ; l'impesanteur vient de l'indépendance du mouvement vis-à-vis de la masse.",
      "conceptExplanation": "Première loi de Kepler : dans un repère de Copernic, la trajectoire d'une planète est une ellipse dont le Soleil occupe un des foyers.\nDeuxième loi : le segment de droite reliant le Soleil à la planète balaie des aires égales pendant des durées égales.\nTroisième loi : pour toutes les planètes, le rapport a³/T² entre le cube du demi-grand axe a de la trajectoire et le carré de la période de révolution est le même ; cette constante est indépendante de la masse des planètes.\nLa troisième loi est la base de l'élaboration par Newton de la théorie de l'attraction gravitationnelle, et elle permet de déterminer le rapport de la masse d'une planète à celle du Soleil ; l'exercice 3 la vérifie pour les satellites d'Uranus (T²/r³ = 6,66 × 10⁻¹⁵ s²/m²) et en déduit la masse d'Uranus, 8,88 × 10²⁵ kg.\nEnfin, l'impesanteur découle du fait que, localement dans un champ gravitationnel, les objets ont presque la même accélération, indépendante de leur masse : exemples de l'ascenseur en chute libre et du cosmonaute dans un satellite.",
      "keyRule": "Kepler : ellipse à foyer solaire, aires égales, a³/T² constant. Impesanteur = chute libre permanente.",
      "formulas": [
        {
          "name": "Troisième loi de Kepler",
          "formula": "\\frac{a^3}{T^2} = \\mathrm{constante}",
          "note": "a est le demi-grand axe de l'ellipse ; pour un cercle, a = r."
        },
        {
          "name": "Cas des satellites terrestres",
          "formula": "\\frac{T^2}{r^3} = \\frac{4\\pi^2}{G \\times M_T}",
          "note": "Permet de calculer la masse de la planète centrale."
        }
      ],
      "workedExample": {
        "title": "La Lune autour de la Terre (exercice 5)",
        "statement": "La Lune décrit une trajectoire quasi circulaire de rayon 384 000 km autour de la Terre (RT = 6370 km, g₀ = 9,8 m/s²). Calcule le champ terrestre en son centre, sa vitesse et sa période, puis compare au mois lunaire (29,5 jours).",
        "methodSteps": [
          "Champ au centre de la Lune : g = g₀·RT²/r² = 2,69 × 10⁻³ m/s².",
          "Vitesse : v = √(g₀·RT²/r) = 1,1 × 10³ m/s.",
          "Période calculée : TL = 2 370 960 s, inférieure au mois lunaire TM = 2 548 800 s."
        ],
        "conclusion": "Ce sont les résultats et la comparaison (TM > TL) de la solution de l'exercice 5."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Première loi : l'ellipse et ses foyers",
          "stepTheme": "Première loi : l'ellipse et ses foyers",
          "stepBadge": "Première loi : l'ellipse et ses foyers",
          "paragraphText": "• Première loi de Kepler : dans un repère de Copernic, la trajectoire d'une planète est une ellipse dont le Soleil occupe un des foyers.\nLe cercle n'est qu'un cas particulier d'ellipse.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q1",
            "type": "mcq",
            "prompt": "D'après la première loi de Kepler, la trajectoire d'une planète est :",
            "options": [
              "Un cercle centré sur le Soleil",
              "Une ellipse dont le Soleil occupe un des foyers",
              "Une parabole",
              "Une ellipse dont le Soleil occupe le centre"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Le Soleil est à un foyer de l'ellipse, pas en son centre (§5.1 du résumé)."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Deuxième loi : la loi des aires",
          "stepTheme": "Deuxième loi : la loi des aires",
          "stepBadge": "Deuxième loi : la loi des aires",
          "paragraphText": "• Deuxième loi de Kepler : le segment de droite reliant le Soleil à la planète balaie des aires égales pendant des durées égales.\nLa planète va donc plus vite quand elle est proche du Soleil.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q2",
            "type": "mcq",
            "prompt": "La deuxième loi de Kepler affirme que le rayon Soleil–planète balaie :",
            "options": [
              "Des distances égales en des durées égales",
              "Des angles égaux en des durées égales",
              "Des aires égales pendant des durées égales",
              "Des aires proportionnelles à la masse"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est l'énoncé du §5.1 : conséquence, la vitesse de la planète varie le long de l'ellipse."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Troisième loi : a³/T² constant",
          "stepTheme": "Troisième loi : a³/T² constant",
          "stepBadge": "Troisième loi : a³/T² constant",
          "paragraphText": "• Troisième loi de Kepler : pour toutes les planètes, le rapport entre le cube du demi-grand axe a et le carré de la période de révolution est le même.\nLe résumé précise que cette constante est indépendante de la masse des planètes.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q3",
            "type": "mcq",
            "prompt": "La troisième loi de Kepler relie le demi-grand axe a et la période T par :",
            "options": [
              "a/T = constante",
              "a²/T³ = constante",
              "a × T = constante",
              "a³/T² = constante, indépendante de la masse des planètes"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est l'énoncé du §5.1 ; la constante ne dépend que de la masse du corps central."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Vérification pour les satellites d'Uranus (exercice 3)",
          "stepTheme": "Vérification pour les satellites d'Uranus (exercice 3)",
          "stepBadge": "Vérification pour les satellites d'Uranus (exercice 3)",
          "paragraphText": "Pour les cinq satellites d'Uranus (Miranda, Ariel, Umbriel, Titania, Oberon), le tableau de l'exercice 3 donne le même rapport pour tous.\nT²/r³ = 6,66 × 10⁻¹⁵ s²/m² : la troisième loi est vérifiée, et on en déduit MU = 8,88 × 10²⁵ kg.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q4",
            "type": "mcq",
            "prompt": "La masse d'Uranus déduite de la troisième loi de Kepler (exercice 3) vaut environ :",
            "options": [
              "8,88 × 10²⁵ kg",
              "6,03 × 10²⁴ kg",
              "5,98 × 10²⁴ kg",
              "1,26 × 10²¹ kg"
            ],
            "correctAnswerIndex": 0,
            "explanation": "MU = 4π²/(G × (T²/r³)) avec le rapport constant mesuré : 8,88 × 10²⁵ kg."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "propriete",
          "stepTitle": "La troisième loi, base de la théorie de Newton",
          "stepTheme": "La troisième loi, base de la théorie de Newton",
          "stepBadge": "La troisième loi, base de la théorie de Newton",
          "paragraphText": "Le résumé indique que la troisième loi de Kepler est la base de l'élaboration par Newton de la théorie de l'attraction gravitationnelle.\nElle permet aussi de déterminer le rapport de la masse d'une planète à celle du Soleil.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q5",
            "type": "mcq",
            "prompt": "La troisième loi de Kepler permet notamment de déterminer :",
            "options": [
              "La température du Soleil",
              "Le rapport de la masse d'une planète à celle du Soleil",
              "La composition des planètes",
              "La vitesse de la lumière"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la conséquence indiquée au §5.2 : on « pèse » les astres par les orbites de leurs satellites."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "definition",
          "stepTitle": "La notion d'impesanteur",
          "stepTheme": "La notion d'impesanteur",
          "stepBadge": "La notion d'impesanteur",
          "paragraphText": "• Impesanteur : état découlant du fait que, localement dans un champ gravitationnel, les objets ont presque la même accélération, indépendante de leur masse.\nExemples du résumé : un ascenseur en chute libre et un cosmonaute dans un satellite.",
          "exercise": {
            "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q6",
            "type": "mcq",
            "prompt": "Un cosmonaute dans un satellite est en impesanteur parce que :",
            "options": [
              "La gravitation n'existe plus en orbite",
              "Le satellite est trop loin de la Terre",
              "Lui et le satellite ont la même accélération dans le champ gravitationnel, indépendante de leurs masses",
              "Son poids devient nul"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La gravitation agit toujours (elle maintient l'orbite) : c'est la chute libre permanente qui crée l'impesanteur."
          }
        }
      ],
      "exercises": [
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q1",
          "type": "mcq",
          "prompt": "D'après la première loi de Kepler, la trajectoire d'une planète est :",
          "options": [
            "Un cercle centré sur le Soleil",
            "Une ellipse dont le Soleil occupe un des foyers",
            "Une parabole",
            "Une ellipse dont le Soleil occupe le centre"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Le Soleil est à un foyer de l'ellipse, pas en son centre (§5.1 du résumé)."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q2",
          "type": "mcq",
          "prompt": "La deuxième loi de Kepler affirme que le rayon Soleil–planète balaie :",
          "options": [
            "Des distances égales en des durées égales",
            "Des angles égaux en des durées égales",
            "Des aires égales pendant des durées égales",
            "Des aires proportionnelles à la masse"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est l'énoncé du §5.1 : conséquence, la vitesse de la planète varie le long de l'ellipse."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q3",
          "type": "mcq",
          "prompt": "La troisième loi de Kepler relie le demi-grand axe a et la période T par :",
          "options": [
            "a/T = constante",
            "a²/T³ = constante",
            "a × T = constante",
            "a³/T² = constante, indépendante de la masse des planètes"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est l'énoncé du §5.1 ; la constante ne dépend que de la masse du corps central."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q4",
          "type": "mcq",
          "prompt": "La masse d'Uranus déduite de la troisième loi de Kepler (exercice 3) vaut environ :",
          "options": [
            "8,88 × 10²⁵ kg",
            "6,03 × 10²⁴ kg",
            "5,98 × 10²⁴ kg",
            "1,26 × 10²¹ kg"
          ],
          "correctAnswerIndex": 0,
          "explanation": "MU = 4π²/(G × (T²/r³)) avec le rapport constant mesuré : 8,88 × 10²⁵ kg."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q5",
          "type": "mcq",
          "prompt": "La troisième loi de Kepler permet notamment de déterminer :",
          "options": [
            "La température du Soleil",
            "Le rapport de la masse d'une planète à celle du Soleil",
            "La composition des planètes",
            "La vitesse de la lumière"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la conséquence indiquée au §5.2 : on « pèse » les astres par les orbites de leurs satellites."
        },
        {
          "id": "terminale_c_physique_l03_interaction_gravitationnelle_p06_q6",
          "type": "mcq",
          "prompt": "Un cosmonaute dans un satellite est en impesanteur parce que :",
          "options": [
            "La gravitation n'existe plus en orbite",
            "Le satellite est trop loin de la Terre",
            "Lui et le satellite ont la même accélération dans le champ gravitationnel, indépendante de leurs masses",
            "Son poids devient nul"
          ],
          "correctAnswerIndex": 2,
          "explanation": "La gravitation agit toujours (elle maintient l'orbite) : c'est la chute libre permanente qui crée l'impesanteur."
        }
      ]
    }
  ]
};
