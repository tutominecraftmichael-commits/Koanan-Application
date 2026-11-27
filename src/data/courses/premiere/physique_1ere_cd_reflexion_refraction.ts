import type { CurriculumChapter } from '../../../lib/curriculum/types';

// Leçon reprise de ecole-ci.org — « Réflexion et réfraction de la lumière blanche » (format v2 : mini-leçons de 5 à 8 étapes).
// Source : ecole-ci.org — « Réflexion et réfraction de la lumière blanche » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)
export const PHYSIQUE_1ERE_CD_L13_REFLEXION_REFRACTION: CurriculumChapter = {
  "id": "premiere_c_physique_l13_reflexion_refraction",
  "subjectId": "physique_chimie",
  "gradeLevel": "premiere_c",
  "alsoForGrades": [
    "premiere_d"
  ],
  "order": 13,
  "title": "Leçon 13 : Réflexion et réfraction de la lumière blanche",
  "summary": "La leçon énonce les lois de Descartes pour la réflexion (angle de réflexion égal à l'angle d'incidence) et les lois de Snell-Descartes pour la réfraction, puis étudie l'angle limite de réfraction, la réflexion totale et leurs applications, comme la fibre optique.",
  "contentVersion": 2,
  "source": "ecole-ci.org — « Réflexion et réfraction de la lumière blanche » (document PDF officiel, Physique-Chimie 1ère CD, lot P08)",
  "points": [
    {
      "id": "premiere_c_physique_l13_reflexion_refraction_p01",
      "order": 1,
      "title": "La réflexion de la lumière et ses lois",
      "summary": "Sur une surface réfléchissante, la lumière reste dans son milieu : le rayon réfléchi est dans le plan d'incidence et l'angle de réflexion égale l'angle d'incidence.",
      "conceptExplanation": "La réflexion de la lumière est un changement de la direction et du sens de propagation de la lumière lorsqu'elle rencontre une surface réfléchissante, en restant dans le milieu de propagation initial ; exemple de surface réfléchissante : la surface d'un miroir.\nL'étude expérimentale envoie un rayon incident (SI) sur un miroir plan : on mesure l'angle de réflexion $r$ pour différentes valeurs de l'angle d'incidence $i$, comptés par rapport à la normale à la surface au point d'incidence $I$.\nLes mesures donnent $i = r$ dans tous les cas (0°, 10°, 20°, 30°, 40°, 50°), et le rayon incident comme le rayon réfléchi (IR) sont contenus dans le même plan.\nPremière loi de Descartes : le rayon incident et le rayon réfléchi appartiennent à un même plan, appelé plan d'incidence. Deuxième loi : l'angle d'incidence et l'angle de réflexion ont la même mesure.",
      "keyRule": "Réflexion : même plan d'incidence et $r = i$, les angles étant comptés depuis la normale.",
      "formulas": [
        {
          "name": "Deuxième loi de la réflexion",
          "formula": "r = i",
          "note": "Angles mesurés par rapport à la normale à la surface réfléchissante."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 1 : un angle de 45°",
        "statement": "Un rayon lumineux arrive sur un miroir disposé dans le plan vertical avec un angle d'incidence de $45°$. Donne la valeur de l'angle du rayon réfléchi et décris la construction du rayon réfléchi.",
        "methodSteps": [
          "On trace d'abord la normale à la surface du miroir au point d'incidence : les angles se mesurent par rapport à elle.",
          "D'après la deuxième loi de la réflexion, l'angle de réflexion vaut l'angle d'incidence : $45°$.",
          "Le rayon réfléchi se trace donc de l'autre côté de la normale, dans le même plan que le rayon incident, en formant le même angle de $45°$ avec la normale."
        ],
        "conclusion": "C'est le corrigé de l'activité d'application 1 : le rayon réfléchi fait un angle de $45°$ avec la normale."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La réflexion : changer de direction sans changer de milieu",
          "stepTheme": "La réflexion : changer de direction sans changer de milieu",
          "stepBadge": "La réflexion : changer de direction sans changer de milieu",
          "paragraphText": "• Réflexion de la lumière : changement de la direction et du sens de propagation de la lumière lorsqu'elle rencontre une surface réfléchissante, en restant dans le milieu de propagation initial.\nLe document donne comme exemple de surface réfléchissante la surface d'un miroir.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p01_q1",
            "type": "mcq",
            "prompt": "La réflexion de la lumière se produit lorsque la lumière :",
            "options": [
              "Rencontre une surface réfléchissante et reste dans le milieu initial",
              "Traverse la surface entre deux milieux",
              "Est absorbée par une surface noire",
              "Change de couleur"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §1.1 : le retour dans le milieu initial distingue la réflexion de la réfraction."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Le tableau expérimental : i = r à chaque mesure",
          "stepTheme": "Le tableau expérimental : i = r à chaque mesure",
          "stepBadge": "Le tableau expérimental : i = r à chaque mesure",
          "paragraphText": "L'expérience du miroir plan donne, pour des incidences de 0°, 10°, 20°, 30°, 40° et 50°, des angles de réflexion exactement égaux : 0°, 10°, 20°, 30°, 40° et 50°.\nOn constate donc que la mesure de $i$ égale la mesure de $r$, quelle que soit l'incidence choisie.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p01_q2",
            "type": "mcq",
            "prompt": "Dans le tableau de l'étude expérimentale, quand l'angle d'incidence vaut $30°$, l'angle de réflexion mesuré vaut :",
            "options": [
              "$0°$",
              "$30°$",
              "$60°$",
              "$15°$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est une ligne du tableau des résultats du §1.2.2 : mes i = mes r pour toutes les mesures."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Première loi : le plan d'incidence",
          "stepTheme": "Première loi : le plan d'incidence",
          "stepBadge": "Première loi : le plan d'incidence",
          "paragraphText": "Première loi de Descartes pour la réflexion (loi du plan) : le rayon incident et le rayon réfléchi appartiennent à un même plan, appelé plan d'incidence.\nCe plan contient aussi la normale à la surface au point d'incidence ; la proposition 4 de l'exercice 1, qui nie cette appartenance, est donc fausse.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p01_q3",
            "type": "mcq",
            "prompt": "La première loi de Descartes pour la réflexion affirme que le rayon incident et le rayon réfléchi :",
            "options": [
              "Sont toujours perpendiculaires",
              "N'ont aucun plan commun",
              "Appartiennent à un même plan, le plan d'incidence",
              "Ont des angles différents"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la loi du plan du §1.2.3 ; l'exercice 1 la confirme (proposition 4 fausse)."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Deuxième loi : l'angle de réflexion égale l'angle d'incidence",
          "stepTheme": "Deuxième loi : l'angle de réflexion égale l'angle d'incidence",
          "stepBadge": "Deuxième loi : l'angle de réflexion égale l'angle d'incidence",
          "paragraphText": "Deuxième loi de Descartes pour la réflexion (loi des angles) : l'angle d'incidence et l'angle de réflexion ont la même mesure.\nLa proposition 1 de l'exercice 1 (« l'angle d'incidence est supérieur à l'angle de réflexion ») est donc fausse.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p01_q4",
            "type": "mcq",
            "prompt": "La deuxième loi de Descartes pour la réflexion s'énonce :",
            "options": [
              "L'angle de réflexion est le double de l'angle d'incidence",
              "L'angle de réflexion est nul",
              "L'angle de réflexion est inférieur à l'angle d'incidence",
              "L'angle d'incidence et l'angle de réflexion ont la même mesure"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la loi des angles du §1.2.3, vérifiée par tout le tableau expérimental."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Incidence de 45° sur le miroir : réflexion à 45°",
          "stepTheme": "Incidence de 45° sur le miroir : réflexion à 45°",
          "stepBadge": "Incidence de 45° sur le miroir : réflexion à 45°",
          "paragraphText": "Dans l'activité d'application 1, le rayon arrive sur le miroir avec un angle de $45°$ par rapport à la normale.\nLe rayon réfléchi repart donc avec un angle de $45°$ de l'autre côté de la normale, dans le même plan vertical : la construction se fait entièrement en mots et en angles, sans autre donnée.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p01_q5",
            "type": "mcq",
            "prompt": "Un rayon arrive sur un miroir plan avec un angle d'incidence de $45°$ ; son angle de réflexion vaut :",
            "options": [
              "$45°$",
              "$90°$",
              "$0°$",
              "$22{,}5°$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le corrigé de l'activité 1 : l'angle du rayon réfléchi égale l'angle d'incidence."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Les angles se mesurent depuis la normale, pas depuis la surface",
          "stepTheme": "Les angles se mesurent depuis la normale, pas depuis la surface",
          "stepBadge": "Les angles se mesurent depuis la normale, pas depuis la surface",
          "paragraphText": "Piège : l'angle d'incidence est l'angle entre le rayon incident et la normale à la surface, pas entre le rayon et la surface.\nDans l'exercice 4, le schéma donne un angle de $30°$ entre le rayon et la surface de l'eau : l'angle d'incidence vaut donc $90° - 30° = 60°$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p01_q6",
            "type": "mcq",
            "prompt": "Un rayon fait un angle de $30°$ avec la surface d'un miroir ; son angle d'incidence vaut :",
            "options": [
              "$30°$",
              "$60°$",
              "$90°$",
              "$45°$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Les angles d'incidence et de réflexion se comptent depuis la normale : c'est le calcul de la question 3 du corrigé de l'exercice 4."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p01_q1",
          "type": "mcq",
          "prompt": "La réflexion de la lumière se produit lorsque la lumière :",
          "options": [
            "Rencontre une surface réfléchissante et reste dans le milieu initial",
            "Traverse la surface entre deux milieux",
            "Est absorbée par une surface noire",
            "Change de couleur"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §1.1 : le retour dans le milieu initial distingue la réflexion de la réfraction."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p01_q2",
          "type": "mcq",
          "prompt": "Dans le tableau de l'étude expérimentale, quand l'angle d'incidence vaut $30°$, l'angle de réflexion mesuré vaut :",
          "options": [
            "$0°$",
            "$30°$",
            "$60°$",
            "$15°$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est une ligne du tableau des résultats du §1.2.2 : mes i = mes r pour toutes les mesures."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p01_q3",
          "type": "mcq",
          "prompt": "La première loi de Descartes pour la réflexion affirme que le rayon incident et le rayon réfléchi :",
          "options": [
            "Sont toujours perpendiculaires",
            "N'ont aucun plan commun",
            "Appartiennent à un même plan, le plan d'incidence",
            "Ont des angles différents"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la loi du plan du §1.2.3 ; l'exercice 1 la confirme (proposition 4 fausse)."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p01_q4",
          "type": "mcq",
          "prompt": "La deuxième loi de Descartes pour la réflexion s'énonce :",
          "options": [
            "L'angle de réflexion est le double de l'angle d'incidence",
            "L'angle de réflexion est nul",
            "L'angle de réflexion est inférieur à l'angle d'incidence",
            "L'angle d'incidence et l'angle de réflexion ont la même mesure"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la loi des angles du §1.2.3, vérifiée par tout le tableau expérimental."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p01_q5",
          "type": "mcq",
          "prompt": "Un rayon arrive sur un miroir plan avec un angle d'incidence de $45°$ ; son angle de réflexion vaut :",
          "options": [
            "$45°$",
            "$90°$",
            "$0°$",
            "$22{,}5°$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le corrigé de l'activité 1 : l'angle du rayon réfléchi égale l'angle d'incidence."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p01_q6",
          "type": "mcq",
          "prompt": "Un rayon fait un angle de $30°$ avec la surface d'un miroir ; son angle d'incidence vaut :",
          "options": [
            "$30°$",
            "$60°$",
            "$90°$",
            "$45°$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Les angles d'incidence et de réflexion se comptent depuis la normale : c'est le calcul de la question 3 du corrigé de l'exercice 4."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l13_reflexion_refraction_p02",
      "order": 2,
      "title": "La réfraction : définition et étude expérimentale",
      "summary": "En traversant la surface entre l'air et le verre, le rayon change de direction ; l'expérience montre que le rapport des sinus des angles est constant.",
      "conceptExplanation": "La réfraction de la lumière est un changement de la direction de propagation de la lumière lorsqu'elle traverse la surface de séparation de deux milieux homogènes et transparents distincts ; exemples : la surface libre d'un liquide (air-liquide), la surface d'un verre (air-verre).\nDans l'étude expérimentale, un rayon incident (SI) traverse l'air d'indice $n_1 = 1$ avant de pénétrer dans le verre d'indice $n_2 = 1{,}5$ ; le rayon (IT) dans le verre est appelé rayon réfracté.\nLes mesures donnent par exemple $i_1 = 30°$ pour $i_2 = 19{,}5°$, $i_1 = 40°$ pour $i_2 = 25{,}5°$ et $i_1 = 50°$ pour $i_2 = 31°$ : le rayon réfracté se rapproche de la normale.\nLe rayon incident et le rayon réfracté sont contenus dans le même plan, et le rapport $\\frac{\\sin i_1}{\\sin i_2}$ reste voisin de $1{,}5$ (1,51 ; 1,50 ; 1,48), c'est-à-dire du rapport $\\frac{n_2}{n_1}$ des indices.",
      "keyRule": "Réfraction = changement de direction à la traversée d'une surface de séparation ; le rapport $\\frac{\\sin i_1}{\\sin i_2}$ est constant et vaut $\\frac{n_2}{n_1}$.",
      "formulas": [
        {
          "name": "Résultat de l'étude expérimentale (air-verre)",
          "formula": "\\frac{\\sin i_1}{\\sin i_2} = \\frac{n_2}{n_1} \\approx 1{,}5",
          "note": "Pour n1 = 1 (air) et n2 = 1,5 (verre) ; mesures du tableau du document."
        }
      ],
      "workedExample": {
        "title": "Lire le tableau air-verre",
        "statement": "À partir du tableau de l'étude expérimentale (air d'indice $1$, verre d'indice $1{,}5$), donne l'angle de réfraction pour une incidence de $40°$ et vérifie la constance du rapport des sinus.",
        "methodSteps": [
          "Pour $i_1 = 40°$, le tableau donne $i_2 = 25{,}5°$, avec $\\sin i_1 = 0{,}64$ et $\\sin i_2 = 0{,}43$.",
          "Le rapport vaut $\\frac{0{,}64}{0{,}43} \\approx 1{,}5$.",
          "Ce rapport est le même, aux erreurs de mesure près, pour les autres lignes du tableau : il est constant."
        ],
        "conclusion": "Ce sont les résultats du §2.2.2 : le rapport constant vaut le rapport des indices $\\frac{n_2}{n_1}$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La réfraction : changer de direction en traversant une surface",
          "stepTheme": "La réfraction : changer de direction en traversant une surface",
          "stepBadge": "La réfraction : changer de direction en traversant une surface",
          "paragraphText": "• Réfraction de la lumière : changement de la direction de propagation de la lumière lorsqu'elle traverse la surface de séparation de deux milieux homogènes et transparents distincts.\nLe document cite la surface libre d'un liquide (air-liquide) et la surface d'un verre (air-verre) ; c'est aussi la définition de la proposition 3, vraie, de l'exercice 1.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p02_q1",
            "type": "mcq",
            "prompt": "La réfraction de la lumière est le changement de direction de la lumière :",
            "options": [
              "À la traversée de la surface de séparation entre deux milieux transparents",
              "Sur un miroir, sans changer de milieu",
              "Quand elle rencontre un obstacle opaque",
              "Quand la source s'éteint"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition du §2.1 : la traversée de la surface de séparation est le critère."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "definition",
          "stepTitle": "Le rayon réfracté : le rayon dans le deuxième milieu",
          "stepTheme": "Le rayon réfracté : le rayon dans le deuxième milieu",
          "stepBadge": "Le rayon réfracté : le rayon dans le deuxième milieu",
          "paragraphText": "Dans le schéma de l'expérience, (SI) est le rayon incident dans l'air et (IT) le rayon dans le verre après le point d'incidence $I$.\nLe document souligne en remarque que le rayon (IT) est appelé rayon réfracté ; l'exercice 2 demande d'ailleurs d'identifier normale, rayon incident, rayon réfracté et les deux angles sur la figure.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p02_q2",
            "type": "mcq",
            "prompt": "Dans l'étude expérimentale, le rayon réfracté est :",
            "options": [
              "Le rayon (SI) dans l'air",
              "Le rayon réfléchi par le verre",
              "Le rayon (IT) qui se propage dans le verre après le point $I$",
              "La normale à la surface"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la remarque du §2.2.1 : (IT) est le rayon réfracté, (SI) le rayon incident."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Le rayon réfracté reste dans le plan d'incidence",
          "stepTheme": "Le rayon réfracté reste dans le plan d'incidence",
          "stepBadge": "Le rayon réfracté reste dans le plan d'incidence",
          "paragraphText": "L'exploitation des résultats constate d'abord que le rayon incident (SI) et le rayon réfracté sont contenus dans le même plan.\nLa proposition 2 de l'exercice 1 (« le rayon réfracté est contenu dans le plan d'incidence ») est donc vraie.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p02_q3",
            "type": "mcq",
            "prompt": "D'après l'étude expérimentale, le rayon réfracté se trouve :",
            "options": [
              "Dans un plan perpendiculaire au plan d'incidence",
              "Dans le même plan que le rayon incident, le plan d'incidence",
              "Uniquement dans le premier milieu",
              "Hors de tout plan"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le premier constat du §2.2.3, avant même le rapport des sinus."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "De l'air vers le verre, le rayon se rapproche de la normale",
          "stepTheme": "De l'air vers le verre, le rayon se rapproche de la normale",
          "stepBadge": "De l'air vers le verre, le rayon se rapproche de la normale",
          "paragraphText": "Le tableau montre que l'angle de réfraction est plus petit que l'angle d'incidence : $30°$ donne $19{,}5°$, $50°$ donne $31°$.\nEn passant de l'air ($n_1 = 1$) au verre ($n_2 = 1{,}5$), le rayon réfracté se rapproche donc de la normale.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p02_q4",
            "type": "mcq",
            "prompt": "Pour une incidence de $50°$ de l'air vers le verre, le tableau donne un angle de réfraction de :",
            "options": [
              "$50°$",
              "$75°$",
              "$0°$",
              "$31°$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est la dernière ligne du tableau du §2.2.2 : $i_2 = 31°$, inférieur à $i_1$ car le verre est plus réfringent que l'air."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "methode",
          "stepTitle": "Le rapport des sinus est constant",
          "stepTheme": "Le rapport des sinus est constant",
          "stepBadge": "Le rapport des sinus est constant",
          "paragraphText": "Méthode d'exploitation : on calcule $\\frac{\\sin i_1}{\\sin i_2}$ pour chaque mesure.\nLe tableau donne $1{,}51$ pour $30°$, $1{,}50$ pour $40°$ et $1{,}48$ pour $50°$ : le rapport est constant, égal au rapport des indices $\\frac{n_2}{n_1} = 1{,}5$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p02_q5",
            "type": "mcq",
            "prompt": "Le rapport $\\frac{\\sin i_1}{\\sin i_2}$ calculé dans l'expérience air-verre vaut environ :",
            "options": [
              "$1{,}5$, comme le rapport des indices $\\frac{n_2}{n_1}$",
              "$1{,}0$ pour toutes les mesures",
              "$0{,}5$",
              "Il varie du simple au triple"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les valeurs de la dernière ligne du tableau du §2.2.2, aux erreurs de mesure près."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Incidence nulle : aucune déviation",
          "stepTheme": "Incidence nulle : aucune déviation",
          "stepBadge": "Incidence nulle : aucune déviation",
          "paragraphText": "Piège : si le rayon arrive perpendiculairement à la surface ($i_1 = 0°$), il n'est pas dévié.\nLa première ligne du tableau le montre : $i_1 = 0°$ donne $i_2 = 0°$, avec des sinus nuls ; il y a traversée, mais pas de changement de direction.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p02_q6",
            "type": "mcq",
            "prompt": "Un rayon qui arrive perpendiculairement à la surface de séparation ($i_1 = 0°$) ressort avec un angle de réfraction de :",
            "options": [
              "$45°$",
              "$0°$ : il n'est pas dévié",
              "$90°$",
              "$19{,}5°$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première ligne du tableau expérimental : incidence nulle, réfraction nulle."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p02_q1",
          "type": "mcq",
          "prompt": "La réfraction de la lumière est le changement de direction de la lumière :",
          "options": [
            "À la traversée de la surface de séparation entre deux milieux transparents",
            "Sur un miroir, sans changer de milieu",
            "Quand elle rencontre un obstacle opaque",
            "Quand la source s'éteint"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition du §2.1 : la traversée de la surface de séparation est le critère."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p02_q2",
          "type": "mcq",
          "prompt": "Dans l'étude expérimentale, le rayon réfracté est :",
          "options": [
            "Le rayon (SI) dans l'air",
            "Le rayon réfléchi par le verre",
            "Le rayon (IT) qui se propage dans le verre après le point $I$",
            "La normale à la surface"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la remarque du §2.2.1 : (IT) est le rayon réfracté, (SI) le rayon incident."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p02_q3",
          "type": "mcq",
          "prompt": "D'après l'étude expérimentale, le rayon réfracté se trouve :",
          "options": [
            "Dans un plan perpendiculaire au plan d'incidence",
            "Dans le même plan que le rayon incident, le plan d'incidence",
            "Uniquement dans le premier milieu",
            "Hors de tout plan"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le premier constat du §2.2.3, avant même le rapport des sinus."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p02_q4",
          "type": "mcq",
          "prompt": "Pour une incidence de $50°$ de l'air vers le verre, le tableau donne un angle de réfraction de :",
          "options": [
            "$50°$",
            "$75°$",
            "$0°$",
            "$31°$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est la dernière ligne du tableau du §2.2.2 : $i_2 = 31°$, inférieur à $i_1$ car le verre est plus réfringent que l'air."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p02_q5",
          "type": "mcq",
          "prompt": "Le rapport $\\frac{\\sin i_1}{\\sin i_2}$ calculé dans l'expérience air-verre vaut environ :",
          "options": [
            "$1{,}5$, comme le rapport des indices $\\frac{n_2}{n_1}$",
            "$1{,}0$ pour toutes les mesures",
            "$0{,}5$",
            "Il varie du simple au triple"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les valeurs de la dernière ligne du tableau du §2.2.2, aux erreurs de mesure près."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p02_q6",
          "type": "mcq",
          "prompt": "Un rayon qui arrive perpendiculairement à la surface de séparation ($i_1 = 0°$) ressort avec un angle de réfraction de :",
          "options": [
            "$45°$",
            "$0°$ : il n'est pas dévié",
            "$90°$",
            "$19{,}5°$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première ligne du tableau expérimental : incidence nulle, réfraction nulle."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l13_reflexion_refraction_p03",
      "order": 3,
      "title": "Les lois de Snell-Descartes pour la réfraction",
      "summary": "Première loi : le rayon réfracté est dans le plan d'incidence ; deuxième loi : n1 sin i1 = n2 sin i2.",
      "conceptExplanation": "Les lois de la réfraction, appelées lois de Descartes-Snell, découlent de l'étude expérimentale.\nPremière loi : le rayon réfracté et le rayon incident appartiennent à un même plan, appelé plan d'incidence.\nDeuxième loi : l'angle de réfraction $i_2$ et l'angle d'incidence $i_1$ sont liés par la relation $n_1 \\sin i_1 = n_2 \\sin i_2$, où $n_1$ et $n_2$ sont les indices des deux milieux.\nLorsque $n_1 < n_2$, le milieu 2 est plus réfringent que le milieu 1 et l'on a $i_1 > i_2$ : le rayon se rapproche de la normale, comme dans le passage de l'air à l'eau ou au verre.\nL'exercice 4 demande d'énoncer la deuxième loi de réflexion séparément : pour la réflexion, les angles d'incidence et de réflexion sont égaux (le corrigé du document y répète par erreur la loi de réfraction).",
      "keyRule": "La loi à appliquer dans tous les calculs : $n_1 \\sin i_1 = n_2 \\sin i_2$, après avoir identifié le milieu le plus réfringent.",
      "formulas": [
        {
          "name": "Deuxième loi de Snell-Descartes",
          "formula": "n_1 \\sin i_1 = n_2 \\sin i_2",
          "note": "i1 : angle d'incidence dans le milieu 1 ; i2 : angle de réfraction dans le milieu 2."
        }
      ],
      "workedExample": {
        "title": "L'exercice 4 : de l'incidence à la réfraction air-eau",
        "statement": "Un rayon arrive sur la surface de l'eau ($n_2 = 1{,}33$) en faisant un angle de $30°$ avec la surface ; l'indice de l'air est $n_1 = 1{,}00$. Détermine l'angle d'incidence, l'angle de réflexion et l'angle de réfraction.",
        "methodSteps": [
          "L'angle d'incidence se mesure depuis la normale : $i_1 = 90° - 30° = 60°$.",
          "Par la deuxième loi de la réflexion, l'angle de réflexion vaut $r = i_1 = 60°$.",
          "Par la loi de Snell-Descartes, $\\sin i_2 = \\frac{n_1 \\sin i_1}{n_2} = \\frac{\\sin 60°}{1{,}33}$, d'où $i_2 \\approx 40{,}6°$."
        ],
        "conclusion": "Ce sont les résultats du corrigé de l'exercice 4 (qui arrondit l'angle réfracté à $40°$)."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "propriete",
          "stepTitle": "Première loi de Snell-Descartes : le plan d'incidence",
          "stepTheme": "Première loi de Snell-Descartes : le plan d'incidence",
          "stepBadge": "Première loi de Snell-Descartes : le plan d'incidence",
          "paragraphText": "Première loi de Descartes-Snell pour la réfraction : le rayon réfracté et le rayon incident appartiennent à un même plan appelé plan d'incidence.\nElle a la même forme que la première loi de la réflexion : toute la construction des rayons se fait dans ce plan.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p03_q1",
            "type": "mcq",
            "prompt": "La première loi de Snell-Descartes pour la réfraction affirme que :",
            "options": [
              "Le rayon réfracté et le rayon incident appartiennent au même plan, le plan d'incidence",
              "Les deux angles sont toujours égaux",
              "Le rayon réfracté est perpendiculaire au rayon incident",
              "L'indice du premier milieu est toujours le plus grand"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la première loi du §2.2.4, commune dans son principe à celle de la réflexion."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "Deuxième loi : n1 sin i1 = n2 sin i2",
          "stepTheme": "Deuxième loi : n1 sin i1 = n2 sin i2",
          "stepBadge": "Deuxième loi : n1 sin i1 = n2 sin i2",
          "paragraphText": "Deuxième loi de Descartes-Snell : l'angle de réfraction $i_2$ et l'angle d'incidence $i_1$ sont liés par la relation $n_2 \\sin i_2 = n_1 \\sin i_1$.\nC'est la forme calculable du rapport constant observé dans l'expérience air-verre.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p03_q2",
            "type": "mcq",
            "prompt": "La deuxième loi de Snell-Descartes pour la réfraction s'écrit :",
            "options": [
              "$n_1 \\times i_1 = n_2 \\times i_2$",
              "$n_1 \\sin i_1 = n_2 \\sin i_2$",
              "$i_1 = i_2$ dans tous les cas",
              "$\\sin i_1 = \\sin i_2$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du §2.2.4 ; la forme avec les angles sans sinus serait celle d'une proportionnalité qui n'existe pas."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "definition",
          "stepTitle": "Le milieu le plus réfringent a le plus grand indice",
          "stepTheme": "Le milieu le plus réfringent a le plus grand indice",
          "stepBadge": "Le milieu le plus réfringent a le plus grand indice",
          "paragraphText": "Lorsque le rayon passe d'un milieu 1 d'indice $n_1$ à un milieu 2 d'indice $n_2$ avec $n_1 < n_2$, le document dit que le milieu 2 est plus réfringent que le milieu 1.\nDans ce cas, $i_1 > i_2$ : par exemple, l'eau ($1{,}33$) est plus réfringente que l'air ($1$).",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p03_q3",
            "type": "mcq",
            "prompt": "Un milieu est dit plus réfringent qu'un autre lorsque :",
            "options": [
              "Son indice de réfraction est plus petit",
              "Il est plus chaud",
              "Son indice de réfraction est plus grand",
              "Il est nécessairement liquide"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la définition utilisée au §2.3 : plus réfringent signifie indice plus grand, et le rayon se rapproche alors de la normale."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "methode",
          "stepTitle": "Calculer l'angle réfracté pas à pas",
          "stepTheme": "Calculer l'angle réfracté pas à pas",
          "stepBadge": "Calculer l'angle réfracté pas à pas",
          "paragraphText": "Méthode : on isole $\\sin i_2 = \\frac{n_1 \\sin i_1}{n_2}$, on calcule sa valeur, puis on prend l'arcsinus.\nPour l'air vers l'eau sous $60°$ : $\\sin i_2 = \\frac{\\sin 60°}{1{,}33} \\approx 0{,}651$, d'où $i_2 \\approx 40{,}6°$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p03_q4",
            "type": "mcq",
            "prompt": "L'angle de réfraction d'un rayon passant de l'air dans l'eau ($n_2 = 1{,}33$) sous une incidence de $60°$ vaut environ :",
            "options": [
              "$60°$",
              "$90°$",
              "$32{,}1°$",
              "$40{,}6°$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "On applique $\\sin i_2 = \\frac{\\sin 60°}{1{,}33}$ : c'est le calcul des corrigés des exercices 4 et de la situation ; $32{,}1°$ correspond à une incidence de $45°$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Ne pas confondre la loi de réflexion et la loi de réfraction",
          "stepTheme": "Ne pas confondre la loi de réflexion et la loi de réfraction",
          "stepBadge": "Ne pas confondre la loi de réflexion et la loi de réfraction",
          "paragraphText": "Piège, présent dans le corrigé de l'exercice 4 : à la question sur la deuxième loi de réflexion, le document répète par erreur la relation de réfraction.\nLa deuxième loi de réflexion dit que l'angle de réflexion égale l'angle d'incidence ; la relation $n_1 \\sin i_1 = n_2 \\sin i_2$ est celle de la réfraction.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p03_q5",
            "type": "mcq",
            "prompt": "La deuxième loi de la réflexion s'énonce correctement :",
            "options": [
              "L'angle de réflexion égale l'angle d'incidence",
              "$n_1 \\sin i_1 = n_2 \\sin i_2$",
              "L'angle de réflexion égale l'angle de réfraction",
              "Le rayon réfléchi change de milieu"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la loi des angles du §1.2.3 ; le corrigé de l'exercice 4 la confond avec la loi de réfraction, signalé dans le rapport de conversion."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "Air vers verre sous 30° : i2 ≈ 19,5°",
          "stepTheme": "Air vers verre sous 30° : i2 ≈ 19,5°",
          "stepBadge": "Air vers verre sous 30° : i2 ≈ 19,5°",
          "paragraphText": "L'exercice 5 commence par un prisme en verre d'indice $n = 1{,}52$ frappé sous $30°$ ; pour le verre de l'expérience ($n_2 = 1{,}5$), le tableau donne $19{,}5°$.\nLa loi donne le même ordre de grandeur : $\\sin i_2 = \\frac{\\sin 30°}{1{,}5}$, soit $i_2 \\approx 19{,}5°$ ; le rayon se rapproche nettement de la normale.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p03_q6",
            "type": "mcq",
            "prompt": "Un rayon passant de l'air dans un verre d'indice $1{,}5$ sous une incidence de $30°$ a un angle de réfraction d'environ :",
            "options": [
              "$30°$",
              "$19{,}5°$",
              "$45°$",
              "$48{,}8°$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la première ligne utile du tableau expérimental, cohérente avec la loi de Snell-Descartes."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p03_q1",
          "type": "mcq",
          "prompt": "La première loi de Snell-Descartes pour la réfraction affirme que :",
          "options": [
            "Le rayon réfracté et le rayon incident appartiennent au même plan, le plan d'incidence",
            "Les deux angles sont toujours égaux",
            "Le rayon réfracté est perpendiculaire au rayon incident",
            "L'indice du premier milieu est toujours le plus grand"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la première loi du §2.2.4, commune dans son principe à celle de la réflexion."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p03_q2",
          "type": "mcq",
          "prompt": "La deuxième loi de Snell-Descartes pour la réfraction s'écrit :",
          "options": [
            "$n_1 \\times i_1 = n_2 \\times i_2$",
            "$n_1 \\sin i_1 = n_2 \\sin i_2$",
            "$i_1 = i_2$ dans tous les cas",
            "$\\sin i_1 = \\sin i_2$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du §2.2.4 ; la forme avec les angles sans sinus serait celle d'une proportionnalité qui n'existe pas."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p03_q3",
          "type": "mcq",
          "prompt": "Un milieu est dit plus réfringent qu'un autre lorsque :",
          "options": [
            "Son indice de réfraction est plus petit",
            "Il est plus chaud",
            "Son indice de réfraction est plus grand",
            "Il est nécessairement liquide"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la définition utilisée au §2.3 : plus réfringent signifie indice plus grand, et le rayon se rapproche alors de la normale."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p03_q4",
          "type": "mcq",
          "prompt": "L'angle de réfraction d'un rayon passant de l'air dans l'eau ($n_2 = 1{,}33$) sous une incidence de $60°$ vaut environ :",
          "options": [
            "$60°$",
            "$90°$",
            "$32{,}1°$",
            "$40{,}6°$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "On applique $\\sin i_2 = \\frac{\\sin 60°}{1{,}33}$ : c'est le calcul des corrigés des exercices 4 et de la situation ; $32{,}1°$ correspond à une incidence de $45°$."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p03_q5",
          "type": "mcq",
          "prompt": "La deuxième loi de la réflexion s'énonce correctement :",
          "options": [
            "L'angle de réflexion égale l'angle d'incidence",
            "$n_1 \\sin i_1 = n_2 \\sin i_2$",
            "L'angle de réflexion égale l'angle de réfraction",
            "Le rayon réfléchi change de milieu"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la loi des angles du §1.2.3 ; le corrigé de l'exercice 4 la confond avec la loi de réfraction, signalé dans le rapport de conversion."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p03_q6",
          "type": "mcq",
          "prompt": "Un rayon passant de l'air dans un verre d'indice $1{,}5$ sous une incidence de $30°$ a un angle de réfraction d'environ :",
          "options": [
            "$30°$",
            "$19{,}5°$",
            "$45°$",
            "$48{,}8°$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la première ligne utile du tableau expérimental, cohérente avec la loi de Snell-Descartes."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l13_reflexion_refraction_p04",
      "order": 4,
      "title": "L'angle limite de réfraction (passage vers un milieu plus réfringent)",
      "summary": "Quand l'incidence atteint 90° en venant du milieu le moins réfringent, l'angle réfracté atteint sa valeur maximale L, avec sin L = n1/n2.",
      "conceptExplanation": "Lorsque le rayon incident passe d'un milieu 1 d'indice $n_1$ à un milieu 2 d'indice $n_2$ tel que $n_1 < n_2$, le milieu 2 est plus réfringent que le milieu 1 et $i_1 > i_2$.\nPour l'incidence maximale $i_1 = 90°$, on a $\\sin i_1 = 1$ : l'angle de réfraction atteint alors sa valeur maximale, appelée angle limite de réfraction et notée $L$.\nLa loi de Snell-Descartes donne dans ce cas $n_2 \\sin L = n_1$, c'est-à-dire $\\sin L = \\frac{n_1}{n_2}$.\nPour le passage de l'air ($n_1 = 1$) à l'eau ($n_2 = 1{,}33$) : $\\sin L = \\frac{1}{1{,}33} \\approx 0{,}752$, donc $L \\approx 48{,}8°$ ; aucun rayon réfracté dans l'eau ne peut dépasser cet angle par rapport à la normale.",
      "keyRule": "Angle limite (vers le milieu plus réfringent) : $\\sin L = \\frac{n_1}{n_2}$, obtenu pour une incidence rasante de $90°$.",
      "formulas": [
        {
          "name": "Angle limite de réfraction",
          "formula": "\\sin L = \\frac{n_1}{n_2}",
          "note": "Cas n1 < n2 ; L est la valeur maximale de l'angle réfracté."
        }
      ],
      "workedExample": {
        "title": "L'activité d'application 2, corrigée : air vers eau sous 45°",
        "statement": "Un rayon arrive à la surface de l'eau ($n_2 = 1{,}33$) avec un angle d'incidence de $45°$ ; l'indice de l'air est $n_1 = 1$. Détermine l'angle de réfraction, puis l'angle limite de réfraction.",
        "methodSteps": [
          "Le milieu le plus réfringent est l'eau, car $n_2 > n_1$ : le rayon réfracté se rapproche de la normale.",
          "Loi de Snell-Descartes : $\\sin i_2 = \\frac{\\sin 45°}{1{,}33} \\approx 0{,}532$, d'où $i_2 \\approx 32{,}1°$.",
          "Angle limite : $\\sin L = \\frac{n_1}{n_2} = \\frac{1}{1{,}33} \\approx 0{,}752$, d'où $L \\approx 48{,}8°$."
        ],
        "conclusion": "Le corrigé du document calcule par erreur avec $\\sin 60°$ et annonce $40°$ ; pour l'incidence de $45°$ de l'énoncé, la valeur exacte est $32{,}1°$, et l'angle limite vaut $48{,}8°$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "L'angle limite : la valeur maximale de l'angle réfracté",
          "stepTheme": "L'angle limite : la valeur maximale de l'angle réfracté",
          "stepBadge": "L'angle limite : la valeur maximale de l'angle réfracté",
          "paragraphText": "• Angle limite de réfraction $L$ : valeur maximale que peut atteindre l'angle de réfraction quand le rayon vient du milieu le moins réfringent.\nIl est atteint pour l'incidence extrême $i_1 = 90°$, c'est-à-dire un rayon incident rasant la surface.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p04_q1",
            "type": "mcq",
            "prompt": "L'angle limite de réfraction est atteint lorsque l'angle d'incidence vaut :",
            "options": [
              "$0°$",
              "$45°$",
              "$90°$",
              "Il ne dépend d'aucune incidence"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la construction du §2.3 : pour $i_1 = 90°$, $\\sin i_1 = 1$ et $i_2$ atteint sa valeur maximale $L$."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La relation sin L = n1/n2",
          "stepTheme": "La relation sin L = n1/n2",
          "stepBadge": "La relation sin L = n1/n2",
          "paragraphText": "En remplaçant $i_1$ par $90°$ et $i_2$ par $L$ dans la loi de Snell-Descartes, on obtient $n_2 \\sin L = n_1$.\nD'où la relation du document : $\\sin L = \\frac{n_1}{n_2}$, valable dans le cas $n_1 < n_2$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p04_q2",
            "type": "mcq",
            "prompt": "Dans le cas $n_1 < n_2$, l'angle limite de réfraction vérifie :",
            "options": [
              "$\\sin L = \\frac{n_1}{n_2}$",
              "$\\sin L = \\frac{n_2}{n_1}$",
              "$\\sin L = n_1 \\times n_2$",
              "$L = 90°$ dans tous les cas"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la relation du §2.3 ; le rapport inverse servira pour la réflexion totale, quand $n_1 > n_2$."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "exemple",
          "stepTitle": "Air vers eau : L ≈ 48,8°",
          "stepTheme": "Air vers eau : L ≈ 48,8°",
          "stepBadge": "Air vers eau : L ≈ 48,8°",
          "paragraphText": "Pour l'air ($n_1 = 1$) et l'eau ($n_2 = 1{,}33$) : $\\sin L = \\frac{1}{1{,}33} \\approx 0{,}752$.\nL'arcsinus donne $L \\approx 48{,}8°$ ; le corrigé de l'exercice 4 annonce par erreur $76{,}19°$ pour ce même calcul, alors que $\\arcsin(0{,}752)$ vaut bien environ $48{,}8°$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p04_q3",
            "type": "mcq",
            "prompt": "L'angle limite de réfraction pour le passage de l'air à l'eau ($n_2 = 1{,}33$) vaut environ :",
            "options": [
              "$76{,}2°$",
              "$48{,}8°$",
              "$32{,}1°$",
              "$90°$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On calcule $\\arcsin\\left( \\frac{1}{1{,}33} \\right) \\approx 48{,}8°$ ; la valeur $76{,}19°$ du corrigé de l'exercice 4 est incompatible avec son propre $\\sin L = 0{,}752$."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "exemple",
          "stepTitle": "Sous 45° dans l'eau : i2 ≈ 32,1°",
          "stepTheme": "Sous 45° dans l'eau : i2 ≈ 32,1°",
          "stepBadge": "Sous 45° dans l'eau : i2 ≈ 32,1°",
          "paragraphText": "Pour l'activité 2, l'incidence est de $45°$ : $\\sin i_2 = \\frac{\\sin 45°}{1{,}33} \\approx 0{,}532$.\nL'angle réfracté exact est donc d'environ $32{,}1°$, inférieur à l'angle limite $48{,}8°$, comme il se doit.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p04_q4",
            "type": "mcq",
            "prompt": "L'angle de réfraction d'un rayon arrivant de l'air sur l'eau sous $45°$ vaut environ :",
            "options": [
              "$45°$",
              "$40°$",
              "$58{,}7°$",
              "$32{,}1°$"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le calcul exact pour l'énoncé de l'activité 2 ; les $40°$ du corrigé correspondent à une incidence de $60°$, pas de $45°$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "piege",
          "stepTitle": "Le rayon réfracté ne peut pas dépasser L",
          "stepTheme": "Le rayon réfracté ne peut pas dépasser L",
          "stepBadge": "Le rayon réfracté ne peut pas dépasser L",
          "paragraphText": "Piège : dans le milieu le plus réfringent, aucun rayon réfracté venant de l'air rasant ne peut s'écarter de la normale de plus de $L$.\nChercher un angle réfracté de $60°$ dans l'eau pour un rayon venu de l'air est donc impossible : la valeur maximale est $48{,}8°$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p04_q5",
            "type": "mcq",
            "prompt": "Un rayon venu de l'air peut-il être réfracté dans l'eau avec un angle de $60°$ par rapport à la normale ?",
            "options": [
              "Non : l'angle réfracté est au plus égal à l'angle limite, environ $48{,}8°$",
              "Oui, si l'incidence dépasse $90°$",
              "Oui, pour une incidence de $60°$",
              "Oui, si l'eau est profonde"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le sens physique de l'angle limite du §2.3 : $i_2$ atteint $L$ pour $i_1 = 90°$ et ne peut pas aller au-delà."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "methode",
          "stepTitle": "Construire le rayon réfracté en mots",
          "stepTheme": "Construire le rayon réfracté en mots",
          "stepBadge": "Construire le rayon réfracté en mots",
          "paragraphText": "Pour tracer le rayon réfracté de l'activité 2 : on trace la normale à la surface de l'eau au point d'incidence, puis le rayon incident à $45°$ de cette normale.\nDans l'eau, on trace le rayon réfracté du même côté du plan d'incidence, plus proche de la normale, à $32{,}1°$ de celle-ci, puisque l'eau est plus réfringente que l'air.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p04_q6",
            "type": "mcq",
            "prompt": "En passant de l'air à l'eau, le rayon réfracté se trace :",
            "options": [
              "Plus écarté de la normale que le rayon incident",
              "Plus proche de la normale que le rayon incident, car l'eau est plus réfringente",
              "Le long de la surface de l'eau",
              "Du côté opposé au plan d'incidence"
            ],
            "correctAnswerIndex": 1,
            "explanation": "L'eau étant plus réfringente ($n_2 > n_1$), $i_2 < i_1$ : le rayon se rapproche de la normale, dans le même plan d'incidence."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p04_q1",
          "type": "mcq",
          "prompt": "L'angle limite de réfraction est atteint lorsque l'angle d'incidence vaut :",
          "options": [
            "$0°$",
            "$45°$",
            "$90°$",
            "Il ne dépend d'aucune incidence"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la construction du §2.3 : pour $i_1 = 90°$, $\\sin i_1 = 1$ et $i_2$ atteint sa valeur maximale $L$."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p04_q2",
          "type": "mcq",
          "prompt": "Dans le cas $n_1 < n_2$, l'angle limite de réfraction vérifie :",
          "options": [
            "$\\sin L = \\frac{n_1}{n_2}$",
            "$\\sin L = \\frac{n_2}{n_1}$",
            "$\\sin L = n_1 \\times n_2$",
            "$L = 90°$ dans tous les cas"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la relation du §2.3 ; le rapport inverse servira pour la réflexion totale, quand $n_1 > n_2$."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p04_q3",
          "type": "mcq",
          "prompt": "L'angle limite de réfraction pour le passage de l'air à l'eau ($n_2 = 1{,}33$) vaut environ :",
          "options": [
            "$76{,}2°$",
            "$48{,}8°$",
            "$32{,}1°$",
            "$90°$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On calcule $\\arcsin\\left( \\frac{1}{1{,}33} \\right) \\approx 48{,}8°$ ; la valeur $76{,}19°$ du corrigé de l'exercice 4 est incompatible avec son propre $\\sin L = 0{,}752$."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p04_q4",
          "type": "mcq",
          "prompt": "L'angle de réfraction d'un rayon arrivant de l'air sur l'eau sous $45°$ vaut environ :",
          "options": [
            "$45°$",
            "$40°$",
            "$58{,}7°$",
            "$32{,}1°$"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le calcul exact pour l'énoncé de l'activité 2 ; les $40°$ du corrigé correspondent à une incidence de $60°$, pas de $45°$."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p04_q5",
          "type": "mcq",
          "prompt": "Un rayon venu de l'air peut-il être réfracté dans l'eau avec un angle de $60°$ par rapport à la normale ?",
          "options": [
            "Non : l'angle réfracté est au plus égal à l'angle limite, environ $48{,}8°$",
            "Oui, si l'incidence dépasse $90°$",
            "Oui, pour une incidence de $60°$",
            "Oui, si l'eau est profonde"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le sens physique de l'angle limite du §2.3 : $i_2$ atteint $L$ pour $i_1 = 90°$ et ne peut pas aller au-delà."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p04_q6",
          "type": "mcq",
          "prompt": "En passant de l'air à l'eau, le rayon réfracté se trace :",
          "options": [
            "Plus écarté de la normale que le rayon incident",
            "Plus proche de la normale que le rayon incident, car l'eau est plus réfringente",
            "Le long de la surface de l'eau",
            "Du côté opposé au plan d'incidence"
          ],
          "correctAnswerIndex": 1,
          "explanation": "L'eau étant plus réfringente ($n_2 > n_1$), $i_2 < i_1$ : le rayon se rapproche de la normale, dans le même plan d'incidence."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l13_reflexion_refraction_p05",
      "order": 5,
      "title": "La réflexion totale (passage vers un milieu moins réfringent)",
      "summary": "Du milieu le plus réfringent vers le moins réfringent, au-delà de l'incidence limite L, il n'y a plus de rayon réfracté : le rayon est intégralement réfléchi.",
      "conceptExplanation": "Lorsque le rayon incident passe d'un milieu 1 d'indice $n_1$ à un milieu 2 d'indice $n_2$ tel que $n_1 > n_2$, le milieu 1 est plus réfringent que le milieu 2 et $i_1 < i_2$ : le rayon réfracté s'écarte de la normale.\nPour $i_2 = 90°$ ($\\sin i_2 = 1$), l'angle d'incidence atteint sa valeur maximale $L$, telle que $\\sin L = \\frac{n_2}{n_1}$.\nSi $i_1 > L$, le rayon incident est intégralement réfléchi par la surface de séparation : c'est la réflexion totale ; il n'existe plus de rayon réfracté.\nLe document résume les trois cas en figures : $i_1 < L$ (réflexion et réfraction coexistent), $i_1 = L$ (rayon réfracté rasant, à $90°$ de la normale) et $i_1 > L$ (réflexion totale). La documentation cite la fibre optique parmi les applications industrielles, en télécommunications, en médecine (endoscopie) et en éclairage.",
      "keyRule": "Réflexion totale : passage vers un milieu moins réfringent avec $i_1 > L$ et $\\sin L = \\frac{n_2}{n_1}$ ; plus aucun rayon réfracté.",
      "formulas": [
        {
          "name": "Incidence limite pour la réflexion totale",
          "formula": "\\sin L = \\frac{n_2}{n_1}",
          "note": "Cas n1 > n2 ; au-delà de L, réflexion totale."
        }
      ],
      "workedExample": {
        "title": "Réflexion totale à la surface de l'eau",
        "statement": "Un rayon se propage dans l'eau ($n_1 = 1{,}33$) et arrive à la surface de séparation avec l'air ($n_2 = 1$) sous une incidence de $60°$. Le rayon est-il réfracté dans l'air ou totalement réfléchi ?",
        "methodSteps": [
          "Le milieu 1 (l'eau) est le plus réfringent : on est dans le cas $n_1 > n_2$.",
          "Incidence limite : $\\sin L = \\frac{n_2}{n_1} = \\frac{1}{1{,}33} \\approx 0{,}752$, donc $L \\approx 48{,}8°$.",
          "L'incidence $60°$ est supérieure à $L$ : il n'y a pas de rayon réfracté, le rayon est intégralement réfléchi dans l'eau."
        ],
        "conclusion": "C'est le cas de la figure 3 du document : $i_1 > L$ donne une réflexion totale à la surface de séparation."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "La réflexion totale : plus de rayon réfracté",
          "stepTheme": "La réflexion totale : plus de rayon réfracté",
          "stepBadge": "La réflexion totale : plus de rayon réfracté",
          "paragraphText": "• Réflexion totale : lorsque l'incidence dépasse l'angle limite, le rayon incident est intégralement réfléchi par la surface de séparation.\nToute la lumière repart dans le premier milieu, du côté du rayon incident, en suivant les lois de la réflexion.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p05_q1",
            "type": "mcq",
            "prompt": "La réflexion totale se produit lorsque :",
            "options": [
              "Le rayon est intégralement réfléchi par la surface de séparation, sans rayon réfracté",
              "Le rayon traverse sans déviation",
              "La source est éteinte",
              "Les deux indices sont égaux"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est la définition qui conclut le paragraphe sur la réflexion totale : intégralement réfléchi."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "propriete",
          "stepTitle": "La condition sur les indices : n1 > n2",
          "stepTheme": "La condition sur les indices : n1 > n2",
          "stepBadge": "La condition sur les indices : n1 > n2",
          "paragraphText": "La réflexion totale n'est possible que si le rayon va du milieu le plus réfringent vers le milieu le moins réfringent.\nLe document l'écrit $n_1 > n_2$ : alors $i_1 < i_2$, le rayon réfracté s'écarte de la normale et peut atteindre $90°$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p05_q2",
            "type": "mcq",
            "prompt": "La réflexion totale n'est possible que pour un passage :",
            "options": [
              "De l'air vers l'eau",
              "D'un milieu moins réfringent vers un milieu plus réfringent",
              "D'un milieu plus réfringent vers un milieu moins réfringent ($n_1 > n_2$)",
              "Entre deux milieux de même indice"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la condition d'ouverture du paragraphe : $n_1 > n_2$, le milieu 1 est le plus réfringent."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "L'incidence limite : sin L = n2/n1",
          "stepTheme": "L'incidence limite : sin L = n2/n1",
          "stepBadge": "L'incidence limite : sin L = n2/n1",
          "paragraphText": "Pour $i_2 = 90°$, la loi de Snell-Descartes donne $n_1 \\sin L = n_2$, donc $\\sin L = \\frac{n_2}{n_1}$.\nPour l'eau vers l'air, on retrouve $\\sin L = \\frac{1}{1{,}33}$ : la même valeur $L \\approx 48{,}8°$ que dans le sens air-eau, par retour inverse.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p05_q3",
            "type": "mcq",
            "prompt": "Dans le cas $n_1 > n_2$, l'incidence limite $L$ vérifie :",
            "options": [
              "$\\sin L = \\frac{n_1}{n_2}$",
              "$\\sin L = \\frac{n_2}{n_1}$",
              "$L = 0°$",
              "$L$ n'existe pas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est la relation du paragraphe sur la réflexion totale ; le rapport est inversé par rapport au cas de l'angle limite de réfraction car les milieux jouent des rôles opposés."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "piege",
          "stepTitle": "Les trois cas : avant, à et après la limite",
          "stepTheme": "Les trois cas : avant, à et après la limite",
          "stepBadge": "Les trois cas : avant, à et après la limite",
          "paragraphText": "Piège : à l'incidence limite exacte, il existe encore un rayon réfracté, rasant ; la réflexion totale ne commence qu'au-delà. Le résumé des cas du document distingue trois figures.\n• $i_1 < L$ : rayon réfléchi et rayon réfracté coexistent.\n• $i_1 = L$ : le rayon réfracté rase la surface, à $90°$ de la normale.\n• $i_1 > L$ : réflexion totale, sans rayon réfracté.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p05_q4",
            "type": "mcq",
            "prompt": "Quand l'incidence vaut exactement l'angle limite ($i_1 = L$), le rayon réfracté :",
            "options": [
              "Disparaît et la réflexion est totale",
              "Revient vers la source",
              "Rase la surface de séparation, à $90°$ de la normale",
              "Est confondu avec le rayon incident"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la figure 2 du résumé des cas : à la limite, le rayon réfracté fait $90°$ avec la normale."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Sous 60° depuis l'eau : réflexion totale",
          "stepTheme": "Sous 60° depuis l'eau : réflexion totale",
          "stepBadge": "Sous 60° depuis l'eau : réflexion totale",
          "paragraphText": "Depuis l'eau vers l'air, l'incidence limite vaut $48{,}8°$.\nUne incidence de $60°$, supérieure à cette limite, ne donne donc aucun rayon réfracté dans l'air : le rayon repart dans l'eau par réflexion totale, comme le rayon de la figure 3 du document.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p05_q5",
            "type": "mcq",
            "prompt": "Un rayon dans l'eau arrive à la surface sous $60°$, alors que l'incidence limite vaut $48{,}8°$ ; on observe :",
            "options": [
              "Un rayon réfracté à $60°$ dans l'air",
              "Un rayon réfracté à $90°$",
              "Un rayon réfracté à $48{,}8°$",
              "Une réflexion totale : aucun rayon réfracté"
            ],
            "correctAnswerIndex": 3,
            "explanation": "C'est le cas $i_1 > L$ de la figure 3 : la surface se comporte comme un miroir parfait pour ce rayon."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "exemple",
          "stepTitle": "La fibre optique : une application de la réflexion totale",
          "stepTheme": "La fibre optique : une application de la réflexion totale",
          "stepBadge": "La fibre optique : une application de la réflexion totale",
          "paragraphText": "La documentation du document est consacrée aux applications industrielles de la fibre optique.\nElle la cite en télécommunications (liaisons urbaines, inter-urbaines et sous-marines), en médecine (endoscopie, chirurgie au laser) et en éclairage ; le guidage de la lumière dans la fibre repose sur la réflexion totale.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p05_q6",
            "type": "mcq",
            "prompt": "D'après la documentation, la fibre optique est utilisée notamment :",
            "options": [
              "En télécommunications et en médecine (endoscopie)",
              "Uniquement pour fabriquer des miroirs",
              "Pour produire de la lumière",
              "Uniquement en astronomie ancienne"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Ce sont les domaines listés dans la partie IV (documentation) du document : télécommunications, audiovisuel, médecine, éclairage et signalisation."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p05_q1",
          "type": "mcq",
          "prompt": "La réflexion totale se produit lorsque :",
          "options": [
            "Le rayon est intégralement réfléchi par la surface de séparation, sans rayon réfracté",
            "Le rayon traverse sans déviation",
            "La source est éteinte",
            "Les deux indices sont égaux"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est la définition qui conclut le paragraphe sur la réflexion totale : intégralement réfléchi."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p05_q2",
          "type": "mcq",
          "prompt": "La réflexion totale n'est possible que pour un passage :",
          "options": [
            "De l'air vers l'eau",
            "D'un milieu moins réfringent vers un milieu plus réfringent",
            "D'un milieu plus réfringent vers un milieu moins réfringent ($n_1 > n_2$)",
            "Entre deux milieux de même indice"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la condition d'ouverture du paragraphe : $n_1 > n_2$, le milieu 1 est le plus réfringent."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p05_q3",
          "type": "mcq",
          "prompt": "Dans le cas $n_1 > n_2$, l'incidence limite $L$ vérifie :",
          "options": [
            "$\\sin L = \\frac{n_1}{n_2}$",
            "$\\sin L = \\frac{n_2}{n_1}$",
            "$L = 0°$",
            "$L$ n'existe pas"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est la relation du paragraphe sur la réflexion totale ; le rapport est inversé par rapport au cas de l'angle limite de réfraction car les milieux jouent des rôles opposés."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p05_q4",
          "type": "mcq",
          "prompt": "Quand l'incidence vaut exactement l'angle limite ($i_1 = L$), le rayon réfracté :",
          "options": [
            "Disparaît et la réflexion est totale",
            "Revient vers la source",
            "Rase la surface de séparation, à $90°$ de la normale",
            "Est confondu avec le rayon incident"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la figure 2 du résumé des cas : à la limite, le rayon réfracté fait $90°$ avec la normale."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p05_q5",
          "type": "mcq",
          "prompt": "Un rayon dans l'eau arrive à la surface sous $60°$, alors que l'incidence limite vaut $48{,}8°$ ; on observe :",
          "options": [
            "Un rayon réfracté à $60°$ dans l'air",
            "Un rayon réfracté à $90°$",
            "Un rayon réfracté à $48{,}8°$",
            "Une réflexion totale : aucun rayon réfracté"
          ],
          "correctAnswerIndex": 3,
          "explanation": "C'est le cas $i_1 > L$ de la figure 3 : la surface se comporte comme un miroir parfait pour ce rayon."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p05_q6",
          "type": "mcq",
          "prompt": "D'après la documentation, la fibre optique est utilisée notamment :",
          "options": [
            "En télécommunications et en médecine (endoscopie)",
            "Uniquement pour fabriquer des miroirs",
            "Pour produire de la lumière",
            "Uniquement en astronomie ancienne"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Ce sont les domaines listés dans la partie IV (documentation) du document : télécommunications, audiovisuel, médecine, éclairage et signalisation."
        }
      ]
    },
    {
      "id": "premiere_c_physique_l13_reflexion_refraction_p06",
      "order": 6,
      "title": "Applications : cuve d'eau avec miroir et prisme en verre",
      "summary": "La situation d'évaluation combine réfraction, réflexion sur un miroir plan et nouvelle réfraction à la sortie ; l'exercice 5 applique la loi au prisme.",
      "conceptExplanation": "Dans la situation d'évaluation, un rayon laser arrive à la surface libre de l'eau d'une cuve sous une incidence $i_1 = 60°$ ; un miroir plan est placé au fond de la cuve. L'indice de l'air vaut $n_1 = 1$ (l'énoncé du document écrit $1{,}33$ par erreur pour l'air) et celui de l'eau $n_2 = 1{,}33$.\nÀ l'entrée, la loi de Snell-Descartes donne $\\sin i_2 = \\frac{\\sin 60°}{1{,}33}$, soit $i_2 \\approx 40{,}6°$ : le rayon se rapproche de la normale en entrant dans l'eau.\nSur le miroir plan du fond, la loi de la réflexion donne un angle réfléchi égal à l'angle d'incidence sur le miroir, soit environ $40{,}6°$ par rapport à la normale ; le trajet du rayon dans la cuve est donc symétrique, décrit en mots : descente déviée vers la normale, réflexion au fond, remontée symétrique.\nÀ la sortie de l'eau, le rayon repasse dans l'air avec la même géométrie qu'à l'entrée : par retour inverse, il ressort sous un angle de $60°$ par rapport à la normale (le corrigé annonce $58{,}74°$ en utilisant l'arrondi $40°$ au lieu de $40{,}6°$). L'exercice 5 suit le même schéma dans un prisme de verre d'indice $1{,}52$ : incidence de $30°$, réfraction à environ $19{,}2°$, puis retour dans l'air à $30°$.",
      "keyRule": "Enchaîner les lois dans l'ordre du trajet : réfraction à l'entrée, réflexion sur le miroir, réfraction à la sortie, et vérifier par le retour inverse.",
      "formulas": [
        {
          "name": "Trajet complet dans la cuve",
          "formula": "i_{\\text{sortie}} = i_1 = 60^{\\circ} \\quad ; \\quad i_2 \\approx 40{,}6^{\\circ}",
          "note": "Entrée air-eau, réflexion sur le miroir du fond, sortie eau-air par retour inverse."
        }
      ],
      "workedExample": {
        "title": "Le trajet complet du rayon dans la cuve",
        "statement": "Un rayon laser arrive à la surface de l'eau ($n_2 = 1{,}33$, air $n_1 = 1$) sous $i_1 = 60°$ ; un miroir plan est au fond de la cuve. Détermine l'angle réfracté à l'entrée, l'angle réfléchi sur le miroir et l'angle de sortie de l'eau.",
        "methodSteps": [
          "Milieu le plus réfringent : l'eau, car $n_2 > n_1$ ; le rayon se rapproche de la normale.",
          "Entrée : $\\sin i_2 = \\frac{\\sin 60°}{1{,}33}$, donc $i_2 \\approx 40{,}6°$.",
          "Sur le miroir plan : l'angle réfléchi égale l'angle d'arrivée sur le miroir, soit environ $40{,}6°$ par rapport à la normale ; le trajet est symétrique.",
          "Sortie : le rayon repasse de l'eau à l'air avec la géométrie inverse de l'entrée, donc sous $60°$ par rapport à la normale."
        ],
        "conclusion": "Ce sont les résultats de la situation d'évaluation, avec la valeur exacte de sortie ($60°$) au lieu des $58{,}74°$ obtenus par le corrigé avec l'arrondi $i_2 = 40°$."
      },
      "structuredSteps": [
        {
          "stepNumber": 1,
          "stepKind": "definition",
          "stepTitle": "Étape 1 : identifier le milieu le plus réfringent",
          "stepTheme": "Étape 1 : identifier le milieu le plus réfringent",
          "stepBadge": "Étape 1 : identifier le milieu le plus réfringent",
          "paragraphText": "• Milieu le plus réfringent : celui des deux milieux qui possède le plus grand indice de réfraction.\nAvant tout calcul, on compare donc les indices : l'eau ($n_2 = 1{,}33$) a un indice plus grand que l'air ($n_1 = 1$) ; l'eau est le milieu le plus réfringent, et le rayon réfracté à l'entrée sera plus proche de la normale que le rayon incident.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p06_q1",
            "type": "mcq",
            "prompt": "Dans la situation de la cuve, le milieu le plus réfringent est :",
            "options": [
              "L'eau, car son indice $1{,}33$ est supérieur à celui de l'air",
              "L'air, car le rayon y va plus vite",
              "Le miroir du fond",
              "Aucun : les indices écrits dans l'énoncé sont égaux et utilisables tels quels"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Le corrigé commence ainsi, avec $n_1 = 1$ pour l'air ; l'énoncé écrit $1{,}33$ pour l'air par erreur, ce qui donnerait deux indices égaux et aucune déviation."
          }
        },
        {
          "stepNumber": 2,
          "stepKind": "methode",
          "stepTitle": "Étape 2 : la réfraction à l'entrée de la cuve",
          "stepTheme": "Étape 2 : la réfraction à l'entrée de la cuve",
          "stepBadge": "Étape 2 : la réfraction à l'entrée de la cuve",
          "paragraphText": "On applique la loi de Snell-Descartes à la surface air-eau : $\\sin i_2 = \\frac{n_1 \\sin i_1}{n_2} = \\frac{\\sin 60°}{1{,}33}$.\nLe calcul donne $i_2 \\approx 40{,}6°$ : c'est l'angle du rayon dans l'eau, mesuré par rapport à la normale verticale.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p06_q2",
            "type": "mcq",
            "prompt": "L'angle réfracté à l'entrée de la cuve (incidence $60°$) vaut environ :",
            "options": [
              "$60°$",
              "$40{,}6°$",
              "$48{,}8°$",
              "$32{,}1°$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "C'est le calcul de la question 3.1 de la situation : $i_2 \\approx 40{,}6°$, arrondi à $40°$ dans le corrigé."
          }
        },
        {
          "stepNumber": 3,
          "stepKind": "propriete",
          "stepTitle": "Étape 3 : la réflexion sur le miroir du fond",
          "stepTheme": "Étape 3 : la réflexion sur le miroir du fond",
          "stepBadge": "Étape 3 : la réflexion sur le miroir du fond",
          "paragraphText": "Le rayon réfracté arrive sur le miroir plan du fond avec un angle d'environ $40{,}6°$ par rapport à la normale au miroir.\nPar la deuxième loi de la réflexion, l'angle réfléchi vaut lui aussi environ $40{,}6°$ : le rayon repart symétriquement vers la surface.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p06_q3",
            "type": "mcq",
            "prompt": "L'angle du rayon réfléchi sur le miroir du fond, par rapport à la normale, vaut environ :",
            "options": [
              "$60°$",
              "$0°$",
              "$40{,}6°$, égal à l'angle d'arrivée sur le miroir",
              "$90°$"
            ],
            "correctAnswerIndex": 2,
            "explanation": "C'est la question 3.2 de la situation : sur un miroir plan, angle réfléchi égal à l'angle incident, ici l'angle du rayon réfracté."
          }
        },
        {
          "stepNumber": 4,
          "stepKind": "propriete",
          "stepTitle": "Étape 4 : la sortie de l'eau par retour inverse",
          "stepTheme": "Étape 4 : la sortie de l'eau par retour inverse",
          "stepBadge": "Étape 4 : la sortie de l'eau par retour inverse",
          "paragraphText": "Le rayon réfléchi remonte et frappe la surface de l'eau, de l'intérieur, avec la même inclinaison qu'à l'aller.\nLa réfraction eau-air inverse exactement la réfraction air-eau de l'entrée : le rayon sort donc sous le même angle qu'à l'arrivée, $60°$ par rapport à la normale.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p06_q4",
            "type": "mcq",
            "prompt": "L'angle avec lequel le rayon ressort de l'eau vaut :",
            "options": [
              "$40{,}6°$",
              "$48{,}8°$",
              "$32{,}1°$",
              "$60°$, comme à l'entrée, par retour inverse"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Le trajet est symétrique : la sortie annule la déviation de l'entrée. Les $58{,}74°$ du corrigé viennent de l'arrondi $i_2 = 40°$ utilisé à la place de $40{,}6°$."
          }
        },
        {
          "stepNumber": 5,
          "stepKind": "exemple",
          "stepTitle": "Le prisme de l'exercice 5 : 30° puis 19,2°",
          "stepTheme": "Le prisme de l'exercice 5 : 30° puis 19,2°",
          "stepBadge": "Le prisme de l'exercice 5 : 30° puis 19,2°",
          "paragraphText": "Dans l'exercice 5, un rayon laser frappe un prisme en verre d'indice $n = 1{,}52$ sous une incidence de $30°$.\nLa loi de Snell-Descartes donne $\\sin \\theta_2 = \\frac{\\sin 30°}{1{,}52}$, soit $\\theta_2 \\approx 19{,}2°$ dans le verre : le rayon se rapproche de la normale.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p06_q5",
            "type": "mcq",
            "prompt": "L'angle de réfraction dans le prisme de l'exercice 5 (incidence $30°$, indice $1{,}52$) vaut environ :",
            "options": [
              "$19{,}2°$",
              "$30°$",
              "$40{,}8°$",
              "$48{,}8°$"
            ],
            "correctAnswerIndex": 0,
            "explanation": "C'est le calcul de la question 3 du corrigé de l'exercice 5 : $\\theta_2 \\approx 19{,}2°$."
          }
        },
        {
          "stepNumber": 6,
          "stepKind": "piege",
          "stepTitle": "Le retour dans l'air redonne l'angle de départ",
          "stepTheme": "Le retour dans l'air redonne l'angle de départ",
          "stepBadge": "Le retour dans l'air redonne l'angle de départ",
          "paragraphText": "Piège de l'exercice 5 : à la sortie du prisme, le rayon repasse du verre à l'air ; le corrigé du document annonce un angle de $40{,}8°$, incompatible avec ses propres données.\nPar retour inverse, avec le même angle dans le verre ($19{,}2°$) et les mêmes indices, le rayon ressort sous l'angle de départ : $30°$.",
          "exercise": {
            "id": "premiere_c_physique_l13_reflexion_refraction_p06_q6",
            "type": "mcq",
            "prompt": "À son retour dans l'air, le rayon de l'exercice 5 ressort sous un angle de :",
            "options": [
              "$19{,}2°$",
              "$30°$, l'angle d'incidence initial, par retour inverse",
              "$40{,}8°$",
              "$60°$"
            ],
            "correctAnswerIndex": 1,
            "explanation": "On vérifie : $\\sin \\theta_3 = 1{,}52 \\times \\sin 19{,}2° \\approx 0{,}5$, donc $\\theta_3 = 30°$ ; la valeur $40{,}8°$ du corrigé ne correspond pas à ce calcul."
          }
        }
      ],
      "exercises": [
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p06_q1",
          "type": "mcq",
          "prompt": "Dans la situation de la cuve, le milieu le plus réfringent est :",
          "options": [
            "L'eau, car son indice $1{,}33$ est supérieur à celui de l'air",
            "L'air, car le rayon y va plus vite",
            "Le miroir du fond",
            "Aucun : les indices écrits dans l'énoncé sont égaux et utilisables tels quels"
          ],
          "correctAnswerIndex": 0,
          "explanation": "Le corrigé commence ainsi, avec $n_1 = 1$ pour l'air ; l'énoncé écrit $1{,}33$ pour l'air par erreur, ce qui donnerait deux indices égaux et aucune déviation."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p06_q2",
          "type": "mcq",
          "prompt": "L'angle réfracté à l'entrée de la cuve (incidence $60°$) vaut environ :",
          "options": [
            "$60°$",
            "$40{,}6°$",
            "$48{,}8°$",
            "$32{,}1°$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "C'est le calcul de la question 3.1 de la situation : $i_2 \\approx 40{,}6°$, arrondi à $40°$ dans le corrigé."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p06_q3",
          "type": "mcq",
          "prompt": "L'angle du rayon réfléchi sur le miroir du fond, par rapport à la normale, vaut environ :",
          "options": [
            "$60°$",
            "$0°$",
            "$40{,}6°$, égal à l'angle d'arrivée sur le miroir",
            "$90°$"
          ],
          "correctAnswerIndex": 2,
          "explanation": "C'est la question 3.2 de la situation : sur un miroir plan, angle réfléchi égal à l'angle incident, ici l'angle du rayon réfracté."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p06_q4",
          "type": "mcq",
          "prompt": "L'angle avec lequel le rayon ressort de l'eau vaut :",
          "options": [
            "$40{,}6°$",
            "$48{,}8°$",
            "$32{,}1°$",
            "$60°$, comme à l'entrée, par retour inverse"
          ],
          "correctAnswerIndex": 3,
          "explanation": "Le trajet est symétrique : la sortie annule la déviation de l'entrée. Les $58{,}74°$ du corrigé viennent de l'arrondi $i_2 = 40°$ utilisé à la place de $40{,}6°$."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p06_q5",
          "type": "mcq",
          "prompt": "L'angle de réfraction dans le prisme de l'exercice 5 (incidence $30°$, indice $1{,}52$) vaut environ :",
          "options": [
            "$19{,}2°$",
            "$30°$",
            "$40{,}8°$",
            "$48{,}8°$"
          ],
          "correctAnswerIndex": 0,
          "explanation": "C'est le calcul de la question 3 du corrigé de l'exercice 5 : $\\theta_2 \\approx 19{,}2°$."
        },
        {
          "id": "premiere_c_physique_l13_reflexion_refraction_p06_q6",
          "type": "mcq",
          "prompt": "À son retour dans l'air, le rayon de l'exercice 5 ressort sous un angle de :",
          "options": [
            "$19{,}2°$",
            "$30°$, l'angle d'incidence initial, par retour inverse",
            "$40{,}8°$",
            "$60°$"
          ],
          "correctAnswerIndex": 1,
          "explanation": "On vérifie : $\\sin \\theta_3 = 1{,}52 \\times \\sin 19{,}2° \\approx 0{,}5$, donc $\\theta_3 = 30°$ ; la valeur $40{,}8°$ du corrigé ne correspond pas à ce calcul."
        }
      ]
    }
  ]
};
